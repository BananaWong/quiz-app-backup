// 性能监控工具函数
// 提供加载时间、内存使用等性能指标监控

interface PerformanceEntry {
  name: string;
  startTime: number;
  duration: number;
  type: 'component' | 'operation' | 'network';
}

class PerformanceMonitor {
  private entries: PerformanceEntry[] = [];
  private marks: Map<string, number> = new Map();

  /**
   * 标记性能测量开始点
   */
  mark(name: string): void {
    this.marks.set(name, performance.now());
  }

  /**
   * 测量性能并记录
   */
  measure(name: string, type: PerformanceEntry['type'] = 'operation'): number {
    const startTime = this.marks.get(name);
    if (!startTime) {
      console.warn(`Performance mark "${name}" not found`);
      return 0;
    }

    const endTime = performance.now();
    const duration = endTime - startTime;

    this.entries.push({
      name,
      startTime,
      duration,
      type
    });

    // 清理标记
    this.marks.delete(name);

    // 在开发环境记录性能信息
    if (process.env.NODE_ENV === 'development' && duration > 100) {
      console.log(`⚡ Performance: ${name} took ${duration.toFixed(2)}ms`);
    }

    return duration;
  }

  /**
   * 获取所有性能记录
   */
  getEntries(): PerformanceEntry[] {
    return [...this.entries];
  }

  /**
   * 获取特定类型的性能记录
   */
  getEntriesByType(type: PerformanceEntry['type']): PerformanceEntry[] {
    return this.entries.filter(entry => entry.type === type);
  }

  /**
   * 获取性能统计
   */
  getStats(): {
    total: number;
    average: number;
    slowest: PerformanceEntry | null;
    componentLoads: number;
  } {
    const componentEntries = this.getEntriesByType('component');
    
    return {
      total: this.entries.length,
      average: this.entries.length > 0 
        ? this.entries.reduce((sum, entry) => sum + entry.duration, 0) / this.entries.length
        : 0,
      slowest: this.entries.reduce<PerformanceEntry | null>((slowest, entry) => 
        !slowest || entry.duration > slowest.duration ? entry : slowest, null),
      componentLoads: componentEntries.length
    };
  }

  /**
   * 清空所有记录
   */
  clear(): void {
    this.entries = [];
    this.marks.clear();
  }
}

// 全局性能监控实例
export const performanceMonitor = new PerformanceMonitor();

/**
 * 高阶组件：为组件加载添加性能监控
 */
export function withPerformanceTracking<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
) {
  return function PerformanceTrackedComponent(props: P) {
    const React = require('react');
    
    React.useEffect(() => {
      performanceMonitor.mark(componentName);
      
      return () => {
        performanceMonitor.measure(componentName, 'component');
      };
    }, []);

    return React.createElement(WrappedComponent, props);
  };
}

/**
 * Hook：测量操作性能
 */
export function usePerformanceTracking(operationName: string) {
  const startTracking = React.useCallback(() => {
    performanceMonitor.mark(operationName);
  }, [operationName]);

  const endTracking = React.useCallback(() => {
    return performanceMonitor.measure(operationName);
  }, [operationName]);

  return { startTracking, endTracking };
}

/**
 * 异步操作性能包装器
 */
export async function trackAsyncOperation<T>(
  name: string,
  operation: () => Promise<T>
): Promise<T> {
  performanceMonitor.mark(name);
  
  try {
    const result = await operation();
    performanceMonitor.measure(name, 'operation');
    return result;
  } catch (error) {
    performanceMonitor.measure(name, 'operation');
    throw error;
  }
}

/**
 * 获取内存使用情况
 */
export function getMemoryUsage(): {
  used: number;
  total: number;
  percentage: number;
} | null {
  // @ts-ignore - performance.memory 可能不存在于所有浏览器
  const memory = (performance as any).memory;
  
  if (!memory) {
    return null;
  }

  return {
    used: Math.round(memory.usedJSHeapSize / 1024 / 1024 * 100) / 100, // MB
    total: Math.round(memory.totalJSHeapSize / 1024 / 1024 * 100) / 100, // MB
    percentage: Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100)
  };
}

/**
 * 获取页面加载性能指标
 */
export function getPageLoadMetrics(): {
  navigationStart: number;
  loadComplete: number;
  domContentLoaded: number;
  firstPaint?: number;
  firstContentfulPaint?: number;
} | null {
  if (!performance.timing) {
    return null;
  }

  const timing = performance.timing;
  const paintEntries = performance.getEntriesByType('paint');
  
  const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
  const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint');

  return {
    navigationStart: timing.navigationStart,
    loadComplete: timing.loadEventEnd - timing.navigationStart,
    domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
    firstPaint: firstPaint?.startTime,
    firstContentfulPaint: firstContentfulPaint?.startTime
  };
}

/**
 * 节流函数，用于性能优化
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  
  return function (...args: Parameters<T>) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}

/**
 * 防抖函数，用于性能优化
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return function (...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => func(...args), delay);
  };
}