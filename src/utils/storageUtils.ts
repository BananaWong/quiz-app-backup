// 安全的localStorage工具函数
// 提供错误处理和类型安全的本地存储操作

/**
 * 安全地获取localStorage中的项目
 * @param key 存储键
 * @param defaultValue 默认值
 * @returns 解析后的值或默认值
 */
export function getLocalStorageItem<T>(key: string, defaultValue: T): T {
  try {
    if (typeof window === 'undefined') {
      return defaultValue;
    }

    const item = localStorage.getItem(key);
    if (item === null) {
      return defaultValue;
    }

    return JSON.parse(item) as T;
  } catch (error) {
    console.warn(`Failed to get localStorage item "${key}":`, error);
    return defaultValue;
  }
}

/**
 * 安全地设置localStorage中的项目
 * @param key 存储键
 * @param value 要存储的值
 * @returns 是否成功
 */
export function setLocalStorageItem<T>(key: string, value: T): boolean {
  try {
    if (typeof window === 'undefined') {
      return false;
    }

    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`Failed to set localStorage item "${key}":`, error);
    // 如果是存储空间不足，尝试清理一些数据
    if (error instanceof Error && error.name === 'QuotaExceededError') {
      console.warn('localStorage quota exceeded, attempting cleanup');
      cleanupOldEntries();
      // 再次尝试
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (secondError) {
        console.error('Failed to save after cleanup:', secondError);
        return false;
      }
    }
    return false;
  }
}

/**
 * 安全地移除localStorage中的项目
 * @param key 存储键
 * @returns 是否成功
 */
export function removeLocalStorageItem(key: string): boolean {
  try {
    if (typeof window === 'undefined') {
      return false;
    }

    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn(`Failed to remove localStorage item "${key}":`, error);
    return false;
  }
}

/**
 * 检查localStorage是否可用
 * @returns 是否支持localStorage
 */
export function isLocalStorageAvailable(): boolean {
  try {
    if (typeof window === 'undefined') {
      return false;
    }

    const testKey = '__localStorage_test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

/**
 * 清理旧的localStorage条目
 * 这是一个简单的清理策略，实际项目中可能需要更复杂的逻辑
 */
function cleanupOldEntries(): void {
  try {
    const keys = Object.keys(localStorage);
    // 删除超过30天的学习会话记录
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    
    keys.forEach(key => {
      if (key.startsWith('study_session_')) {
        try {
          const data = JSON.parse(localStorage.getItem(key) || '{}');
          if (data.timestamp && data.timestamp < thirtyDaysAgo) {
            localStorage.removeItem(key);
          }
        } catch {
          // 如果解析失败，也删除这个条目
          localStorage.removeItem(key);
        }
      }
    });
  } catch (error) {
    console.warn('Failed to cleanup localStorage:', error);
  }
}

/**
 * 获取localStorage使用情况统计
 * @returns 使用情况信息
 */
export function getStorageUsage(): { used: number; total: number; percentage: number } {
  try {
    if (!isLocalStorageAvailable()) {
      return { used: 0, total: 0, percentage: 0 };
    }

    let used = 0;
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        used += localStorage[key].length + key.length;
      }
    }

    // 大多数浏览器localStorage限制是5MB
    const total = 5 * 1024 * 1024; // 5MB in bytes
    const percentage = (used / total) * 100;

    return { used, total, percentage };
  } catch (error) {
    console.warn('Failed to get storage usage:', error);
    return { used: 0, total: 0, percentage: 0 };
  }
}