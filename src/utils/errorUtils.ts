// 错误处理工具函数
// 提供统一的错误处理和用户友好的错误信息

export interface AppError {
  code: string;
  message: string;
  userMessage: string;
  timestamp: number;
  context?: Record<string, unknown>;
}

/**
 * 创建应用错误对象
 */
export function createAppError(
  code: string,
  message: string,
  userMessage: string,
  context?: Record<string, unknown>
): AppError {
  return {
    code,
    message,
    userMessage,
    timestamp: Date.now(),
    context
  };
}

/**
 * 错误类型枚举
 */
export enum ErrorCodes {
  STORAGE_ERROR = 'STORAGE_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR', 
  PARSE_ERROR = 'PARSE_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  QUESTION_BANK_ERROR = 'QUESTION_BANK_ERROR'
}

/**
 * 将未知错误转换为应用错误
 */
export function toAppError(error: unknown, context?: Record<string, unknown>): AppError {
  if (error instanceof Error) {
    // 已知的错误类型映射
    const errorMap: Record<string, { code: string; userMessage: string }> = {
      'QuotaExceededError': {
        code: ErrorCodes.STORAGE_ERROR,
        userMessage: '存储空间不足，请清理一些数据后重试'
      },
      'SyntaxError': {
        code: ErrorCodes.PARSE_ERROR,
        userMessage: '数据格式错误，请检查文件格式'
      },
      'TypeError': {
        code: ErrorCodes.VALIDATION_ERROR,
        userMessage: '数据类型错误，请检查输入内容'
      }
    };

    const mappedError = errorMap[error.name] || errorMap[error.constructor.name];
    
    if (mappedError) {
      return createAppError(
        mappedError.code,
        error.message,
        mappedError.userMessage,
        context
      );
    }

    return createAppError(
      ErrorCodes.UNKNOWN_ERROR,
      error.message,
      '发生了未知错误，请刷新页面重试',
      context
    );
  }

  if (typeof error === 'string') {
    return createAppError(
      ErrorCodes.UNKNOWN_ERROR,
      error,
      error,
      context
    );
  }

  return createAppError(
    ErrorCodes.UNKNOWN_ERROR,
    'Unknown error occurred',
    '发生了未知错误，请刷新页面重试',
    { originalError: error, ...context }
  );
}

/**
 * 错误日志记录
 */
export function logError(error: AppError | Error | unknown, context?: Record<string, unknown>): void {
  const appError = error instanceof Error ? toAppError(error, context) : error as AppError;
  
  // 在开发环境中详细记录
  if (process.env.NODE_ENV === 'development') {
    console.group('🚨 Application Error');
    console.error('Code:', appError.code);
    console.error('Message:', appError.message);
    console.error('User Message:', appError.userMessage);
    console.error('Timestamp:', new Date(appError.timestamp).toLocaleString());
    if (appError.context) {
      console.error('Context:', appError.context);
    }
    console.groupEnd();
  } else {
    // 在生产环境中只记录必要信息
    console.error(`[${appError.code}] ${appError.message}`, appError.context);
  }

  // 在这里可以添加发送错误到监控服务的逻辑
  // 例如：sendToErrorTracking(appError);
}

/**
 * 安全地执行异步操作
 */
export async function safeAsync<T>(
  operation: () => Promise<T>,
  fallback: T,
  context?: Record<string, unknown>
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    const appError = toAppError(error, context);
    logError(appError);
    return fallback;
  }
}

/**
 * 安全地执行同步操作
 */
export function safeSync<T>(
  operation: () => T,
  fallback: T,
  context?: Record<string, unknown>
): T {
  try {
    return operation();
  } catch (error) {
    const appError = toAppError(error, context);
    logError(appError);
    return fallback;
  }
}

/**
 * 创建带有错误处理的事件处理器
 */
export function withErrorHandling<T extends (...args: any[]) => any>(
  handler: T,
  context?: Record<string, unknown>
): T {
  return ((...args: Parameters<T>) => {
    try {
      const result = handler(...args);
      
      // 如果返回Promise，处理异步错误
      if (result instanceof Promise) {
        return result.catch((error) => {
          const appError = toAppError(error, { ...context, args });
          logError(appError);
          throw appError;
        });
      }
      
      return result;
    } catch (error) {
      const appError = toAppError(error, { ...context, args });
      logError(appError);
      throw appError;
    }
  }) as T;
}

/**
 * 错误边界使用的错误报告函数
 */
export function reportErrorToBoundary(error: Error, errorInfo?: { componentStack: string }): void {
  const appError = createAppError(
    ErrorCodes.UNKNOWN_ERROR,
    error.message,
    '组件渲染出错，请刷新页面重试',
    {
      stack: error.stack,
      componentStack: errorInfo?.componentStack
    }
  );
  
  logError(appError);
  
  // 这里可以添加发送错误报告到服务器的逻辑
}