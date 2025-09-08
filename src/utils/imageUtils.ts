// 图片处理工具函数
// 提供图片加载、缓存、优化等功能

interface ImageCacheEntry {
  url: string;
  blob?: Blob;
  element?: HTMLImageElement;
  timestamp: number;
  size: number;
}

class ImageCache {
  private cache = new Map<string, ImageCacheEntry>();
  private readonly maxCacheSize = 50 * 1024 * 1024; // 50MB
  private currentCacheSize = 0;

  /**
   * 添加图片到缓存
   */
  set(url: string, element: HTMLImageElement, blob?: Blob): void {
    const size = blob?.size || 0;
    
    // 如果添加这个图片会超出缓存限制，先清理
    if (this.currentCacheSize + size > this.maxCacheSize) {
      this.cleanup();
    }

    // 如果已存在，先移除旧的
    if (this.cache.has(url)) {
      const old = this.cache.get(url)!;
      this.currentCacheSize -= old.size;
    }

    this.cache.set(url, {
      url,
      blob,
      element: element.cloneNode(true) as HTMLImageElement,
      timestamp: Date.now(),
      size
    });

    this.currentCacheSize += size;
  }

  /**
   * 从缓存获取图片
   */
  get(url: string): HTMLImageElement | null {
    const entry = this.cache.get(url);
    if (!entry) return null;

    // 更新访问时间
    entry.timestamp = Date.now();
    return entry.element?.cloneNode(true) as HTMLImageElement || null;
  }

  /**
   * 检查图片是否在缓存中
   */
  has(url: string): boolean {
    return this.cache.has(url);
  }

  /**
   * 清理过期和最少使用的缓存项
   */
  private cleanup(): void {
    const entries = Array.from(this.cache.entries());
    
    // 按访问时间排序，移除最旧的50%
    entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
    const toRemove = entries.slice(0, Math.floor(entries.length * 0.5));

    for (const [url, entry] of toRemove) {
      this.cache.delete(url);
      this.currentCacheSize -= entry.size;
    }
  }

  /**
   * 获取缓存统计信息
   */
  getStats(): { count: number; size: number; sizeFormatted: string } {
    return {
      count: this.cache.size,
      size: this.currentCacheSize,
      sizeFormatted: `${Math.round(this.currentCacheSize / 1024 / 1024 * 100) / 100}MB`
    };
  }
}

// 全局图片缓存实例
const imageCache = new ImageCache();

export class ImageHelper {
  /**
   * 获取题目图片URL
   */
  static getQuestionImage(bankId: string, imageName: string): string {
    return `/images/questionbank/${imageName}`;
  }

  /**
   * 预加载单个图片（带缓存）
   */
  static preloadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      // 先检查缓存
      const cached = imageCache.get(src);
      if (cached) {
        resolve(cached);
        return;
      }

      const img = new Image();
      
      img.onload = () => {
        // 加载成功后添加到缓存
        imageCache.set(src, img);
        resolve(img);
      };
      
      img.onerror = () => {
        reject(new Error(`Failed to load image: ${src}`));
      };
      
      // 设置加载超时
      const timeout = setTimeout(() => {
        reject(new Error(`Image load timeout: ${src}`));
      }, 10000); // 10秒超时

      img.onload = () => {
        clearTimeout(timeout);
        imageCache.set(src, img);
        resolve(img);
      };

      img.src = src;
    });
  }

  /**
   * 批量预加载图片
   */
  static async preloadImages(sources: string[]): Promise<HTMLImageElement[]> {
    const promises = sources.map(src => this.preloadImage(src));
    
    // 使用 Promise.allSettled 避免单个图片失败影响整体
    const results = await Promise.allSettled(promises);
    
    const successful: HTMLImageElement[] = [];
    const failed: string[] = [];

    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        successful.push(result.value);
      } else {
        failed.push(sources[index]);
        console.warn(`Failed to preload image: ${sources[index]}`, result.reason);
      }
    });

    if (failed.length > 0) {
      console.info(`Successfully preloaded ${successful.length}/${sources.length} images`);
    }

    return successful;
  }

  /**
   * 智能图片加载（支持渐进式增强）
   */
  static createOptimizedImage(src: string, options?: {
    alt?: string;
    placeholder?: string;
    className?: string;
    lazy?: boolean;
    onLoad?: () => void;
    onError?: (error: Error) => void;
  }): HTMLImageElement {
    const img = document.createElement('img');
    const {
      alt = '',
      placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
      className = '',
      lazy = true,
      onLoad,
      onError
    } = options || {};

    // 设置基本属性
    img.alt = alt;
    img.className = className;
    
    // 设置占位符
    img.src = placeholder;

    // 懒加载支持
    if (lazy && 'loading' in HTMLImageElement.prototype) {
      img.loading = 'lazy';
    }

    // 加载实际图片
    const loadActualImage = () => {
      // 先检查缓存
      const cached = imageCache.get(src);
      if (cached) {
        img.src = src;
        onLoad?.();
        return;
      }

      // 创建预加载图片
      const preloadImg = new Image();
      
      preloadImg.onload = () => {
        imageCache.set(src, preloadImg);
        img.src = src;
        onLoad?.();
      };
      
      preloadImg.onerror = () => {
        const error = new Error(`Failed to load image: ${src}`);
        console.warn(error.message);
        onError?.(error);
        // 保留占位符
      };
      
      preloadImg.src = src;
    };

    // 如果支持 Intersection Observer，使用懒加载
    if (lazy && typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadActualImage();
            observer.unobserve(img);
          }
        });
      }, { rootMargin: '50px' });

      observer.observe(img);
    } else {
      // 立即加载
      loadActualImage();
    }

    return img;
  }

  /**
   * 获取图片缓存统计
   */
  static getCacheStats(): { count: number; size: number; sizeFormatted: string } {
    return imageCache.getStats();
  }

  /**
   * 清除图片缓存
   */
  static clearCache(): void {
    // @ts-ignore - 清除缓存的私有方法
    imageCache.cache.clear();
    imageCache.currentCacheSize = 0;
  }

  /**
   * 检测 WebP 支持
   */
  static async supportsWebP(): Promise<boolean> {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }

  /**
   * 获取优化的图片格式URL
   */
  static async getOptimizedImageUrl(originalUrl: string): Promise<string> {
    const supportsWebP = await this.supportsWebP();
    
    if (supportsWebP && !originalUrl.includes('.webp')) {
      // 尝试替换为 WebP 格式
      const webpUrl = originalUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      // 检查 WebP 版本是否存在
      try {
        await this.preloadImage(webpUrl);
        return webpUrl;
      } catch {
        // WebP 版本不存在，使用原格式
        return originalUrl;
      }
    }
    
    return originalUrl;
  }
}