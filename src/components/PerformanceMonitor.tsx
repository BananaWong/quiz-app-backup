import React, { useEffect, useState } from 'react';
import { Activity, Clock, Zap, Database, AlertTriangle } from 'lucide-react';
import { 
  performanceMonitor, 
  getMemoryUsage, 
  getPageLoadMetrics 
} from '../utils/performanceUtils';

interface PerformanceStats {
  memoryUsage: ReturnType<typeof getMemoryUsage>;
  pageMetrics: ReturnType<typeof getPageLoadMetrics>;
  componentLoads: number;
  averageLoadTime: number;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  onClose?: () => void;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showDetails = false, 
  onClose 
}) => {
  const [stats, setStats] = useState<PerformanceStats>({
    memoryUsage: null,
    pageMetrics: null,
    componentLoads: 0,
    averageLoadTime: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 只在开发环境或特定条件下显示
    const shouldShow = process.env.NODE_ENV === 'development' || showDetails;
    setIsVisible(shouldShow);

    if (!shouldShow) return;

    const updateStats = () => {
      const perfStats = performanceMonitor.getStats();
      
      setStats({
        memoryUsage: getMemoryUsage(),
        pageMetrics: getPageLoadMetrics(),
        componentLoads: perfStats.componentLoads,
        averageLoadTime: perfStats.average
      });
    };

    // 初始加载
    updateStats();

    // 定期更新（每5秒）
    const interval = setInterval(updateStats, 5000);

    return () => clearInterval(interval);
  }, [showDetails]);

  if (!isVisible) return null;

  const formatTime = (time?: number): string => {
    if (!time) return 'N/A';
    return `${Math.round(time)}ms`;
  };

  const formatMemory = (mb: number): string => {
    return `${mb}MB`;
  };

  const getMemoryStatus = (): 'good' | 'warning' | 'danger' => {
    if (!stats.memoryUsage) return 'good';
    
    if (stats.memoryUsage.percentage > 80) return 'danger';
    if (stats.memoryUsage.percentage > 60) return 'warning';
    return 'good';
  };

  const memoryStatus = getMemoryStatus();
  const statusColors = {
    good: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400', 
    danger: 'text-red-600 dark:text-red-400'
  };

  return (
    <div className={`fixed ${showDetails ? 'inset-0 bg-black/50 flex items-center justify-center z-50' : 'bottom-4 right-4 z-40'}`}>
      <div className={`${
        showDetails 
          ? 'bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 shadow-2xl' 
          : 'bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg p-3 shadow-lg min-w-[200px]'
      }`}>
        {/* 标题栏 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              性能监控
            </h3>
          </div>
          
          {showDetails && onClose && (
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ×
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* 内存使用 */}
          <div className="flex items-center gap-3">
            <Database className={`w-4 h-4 ${statusColors[memoryStatus]}`} />
            <div className="flex-1">
              <div className="text-sm text-gray-600 dark:text-gray-400">内存使用</div>
              <div className="font-medium text-gray-900 dark:text-gray-100">
                {stats.memoryUsage 
                  ? `${formatMemory(stats.memoryUsage.used)} / ${formatMemory(stats.memoryUsage.total)} (${stats.memoryUsage.percentage}%)`
                  : '不可用'
                }
              </div>
            </div>
          </div>

          {showDetails && (
            <>
              {/* 页面加载指标 */}
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <div className="flex-1">
                  <div className="text-sm text-gray-600 dark:text-gray-400">页面加载</div>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {formatTime(stats.pageMetrics?.loadComplete)}
                  </div>
                </div>
              </div>

              {/* 组件加载统计 */}
              <div className="flex items-center gap-3">
                <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
                <div className="flex-1">
                  <div className="text-sm text-gray-600 dark:text-gray-400">组件加载</div>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {stats.componentLoads}个 (平均 {formatTime(stats.averageLoadTime)})
                  </div>
                </div>
              </div>

              {/* 首屏渲染 */}
              {stats.pageMetrics?.firstContentfulPaint && (
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 dark:text-gray-400">首屏渲染</div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {formatTime(stats.pageMetrics.firstContentfulPaint)}
                    </div>
                  </div>
                </div>
              )}

              {/* 性能建议 */}
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-sm text-blue-800 dark:text-blue-200">
                  <div className="font-medium mb-1">性能建议</div>
                  <ul className="text-xs space-y-1">
                    {memoryStatus === 'danger' && (
                      <li>• 内存使用过高，建议刷新页面</li>
                    )}
                    {stats.averageLoadTime > 500 && (
                      <li>• 组件加载较慢，检查网络连接</li>
                    )}
                    <li>• 懒加载已启用，按需加载大型组件</li>
                    <li>• Bundle已优化分割，缓存友好</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// 开发环境下的浮动性能监控器
export const DevPerformanceMonitor: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  
  // 只在开发环境显示
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  if (showDetails) {
    return (
      <PerformanceMonitor 
        showDetails={true} 
        onClose={() => setShowDetails(false)}
      />
    );
  }

  return (
    <button
      onClick={() => setShowDetails(true)}
      className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all hover:scale-105 z-40"
      title="查看性能指标"
    >
      <Activity className="w-5 h-5" />
    </button>
  );
};