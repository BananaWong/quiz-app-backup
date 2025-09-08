import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  message = '加载中...', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600 dark:text-blue-400`} />
      <p className={`${textSizes[size]} text-gray-600 dark:text-gray-400 font-medium`}>
        {message}
      </p>
    </div>
  );
};

// 全屏加载组件
export const FullScreenLoader: React.FC<{ message?: string }> = ({ 
  message = '正在加载组件...' 
}) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <LoadingSpinner size="lg" message={message} />
    </div>
  );
};

// 内联加载组件
export const InlineLoader: React.FC<{ message?: string }> = ({ 
  message = '加载中...' 
}) => {
  return (
    <div className="flex items-center justify-center py-8">
      <LoadingSpinner size="md" message={message} />
    </div>
  );
};