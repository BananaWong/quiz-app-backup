// 现代化的本地存储助手类
// 兼容旧版本API，同时提供更好的类型支持
export class StorageHelper {
  static getItem<T>(key: string, defaultValue: T = null as T): T {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn(`读取存储失败 ${key}:`, error);
      return defaultValue;
    }
  }

  static setItem<T>(key: string, value: T): boolean {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`写入存储失败 ${key}:`, error);
      if ((error as Error).name === 'QuotaExceededError') {
        this.clearOldData();
        try {
          localStorage.setItem(key, JSON.stringify(value));
          return true;
        } catch (retryError) {
          console.error('重试写入失败:', retryError);
          return false;
        }
      }
      return false;
    }
  }

  static clearOldData(): void {
    const studyHistory = this.getItem('studyHistory', []);
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    const recentHistory = studyHistory.filter(
      (session: any) => new Date(session.date).getTime() > thirtyDaysAgo
    );
    this.setItem('studyHistory', recentHistory);
  }

  static removeItem(key: string): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`删除存储失败 ${key}:`, error);
      return false;
    }
  }

  static clear(): boolean {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('清空存储失败:', error);
      return false;
    }
  }

  static getKeys(): string[] {
    try {
      return Object.keys(localStorage);
    } catch (error) {
      console.warn('获取存储键失败:', error);
      return [];
    }
  }
  
  static exists(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}