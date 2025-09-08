// 多邻国风格的舒适配色方案
export const COLORS = {
  light: {
    // 主色调 - 使用更加温和的绿色系统
    primary: '#58cc02',
    primaryHover: '#46b002',
    primaryDark: '#3d9b02',
    primaryLight: '#7dd321',
    primarySoft: '#89e219',
    
    // 辅助色
    secondary: '#00b4d8',
    accent: '#ff9500',
    
    // 背景色 - 更加温暖舒适
    background: '#ffffff',
    backgroundSecondary: '#f7f7f7',
    backgroundTertiary: '#efefef',
    backgroundCard: '#ffffff',
    backgroundHover: '#f5f5f5',
    backgroundSoft: '#fafafa',
    
    // 文字色 - 减少对比度，更加舒适
    text: '#3c3c3c',
    textSecondary: '#777777',
    textTertiary: '#afafaf',
    textLight: '#cccccc',
    textInverted: '#ffffff',
    
    // 状态色 - 温和的颜色
    success: '#58cc02',
    successLight: '#89e219',
    successBg: '#e8f5e8',
    error: '#ff4b4b',
    errorLight: '#ff7777',
    errorBg: '#ffe8e8',
    warning: '#ffc832',
    warningLight: '#ffd54f',
    warningBg: '#fff8e8',
    info: '#1cb0f6',
    infoBg: '#e8f4ff',
    
    // 边框色 - 非常淡的颜色
    border: '#e5e5e5',
    borderLight: '#f0f0f0',
    borderHover: '#d0d0d0',
    borderFocus: '#58cc02',
    
    // 阴影 - 更加柔和
    shadow: '0 2px 4px rgba(0,0,0,0.1)',
    shadowMd: '0 4px 12px rgba(0,0,0,0.15)',
    shadowLg: '0 8px 24px rgba(0,0,0,0.12)',
    shadowCard: '0 2px 8px rgba(0,0,0,0.1)',
  },
  dark: {
    // 主色调
    primary: '#58cc02',
    primaryHover: '#7dd321',
    primaryDark: '#46b002',
    primaryLight: '#89e219',
    primarySoft: '#9ae82f',
    
    // 辅助色
    secondary: '#1cb0f6',
    accent: '#ff9500',
    
    // 背景色 - 温暖的深色调
    background: '#1f1f1f',
    backgroundSecondary: '#2d2d2d',
    backgroundTertiary: '#383838',
    backgroundCard: '#262626',
    backgroundHover: '#2a2a2a',
    backgroundSoft: '#242424',
    
    // 文字色
    text: '#ffffff',
    textSecondary: '#d0d0d0',
    textTertiary: '#a0a0a0',
    textLight: '#707070',
    textInverted: '#3c3c3c',
    
    // 状态色
    success: '#58cc02',
    successLight: '#7dd321',
    successBg: '#1a2e1a',
    error: '#ff4b4b',
    errorLight: '#ff7777',
    errorBg: '#2e1a1a',
    warning: '#ffc832',
    warningLight: '#ffd54f',
    warningBg: '#2e2a1a',
    info: '#1cb0f6',
    infoBg: '#1a252e',
    
    // 边框色
    border: '#404040',
    borderLight: '#363636',
    borderHover: '#4a4a4a',
    borderFocus: '#58cc02',
    
    // 阴影
    shadow: '0 2px 4px rgba(0,0,0,0.3)',
    shadowMd: '0 4px 12px rgba(0,0,0,0.25)',
    shadowLg: '0 8px 24px rgba(0,0,0,0.2)',
    shadowCard: '0 2px 8px rgba(0,0,0,0.25)',
  }
};

// 颜色主题类型定义
export type ColorTheme = typeof COLORS.light;
export type ColorKey = keyof ColorTheme;