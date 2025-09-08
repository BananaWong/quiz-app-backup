// 全局类型声明文件
// 浏览器兼容性API声明

declare global {
  interface Document {
    webkitFullscreenElement?: Element | null;
    msFullscreenElement?: Element | null;
    webkitExitFullscreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
  }

  interface Element {
    webkitRequestFullscreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
  }

  interface EventTarget {
    style?: CSSStyleDeclaration;
    nextSibling?: ChildNode | null;
    nextElementSibling?: Element | null;
  }
}

export {};