import { useState, useCallback } from 'react';

type Screen = 'home' | 'quiz' | 'results' | 'settings' | 'analytics' | 'bankManager';

interface NavigationState {
  currentScreen: Screen;
  showBankManager: boolean;
  showAnalytics: boolean;
  previousScreen: Screen | null;
}

export const useAppNavigation = () => {
  const [state, setState] = useState<NavigationState>({
    currentScreen: 'home',
    showBankManager: false,
    showAnalytics: false,
    previousScreen: null,
  });

  // 导航到指定屏幕
  const navigateTo = useCallback((screen: Screen) => {
    setState(prev => ({
      ...prev,
      previousScreen: prev.currentScreen,
      currentScreen: screen,
      showBankManager: screen === 'bankManager',
      showAnalytics: screen === 'analytics',
    }));
  }, []);

  // 返回上一个屏幕
  const goBack = useCallback(() => {
    setState(prev => {
      const targetScreen = prev.previousScreen || 'home';
      return {
        ...prev,
        currentScreen: targetScreen,
        previousScreen: null,
        showBankManager: targetScreen === 'bankManager',
        showAnalytics: targetScreen === 'analytics',
      };
    });
  }, []);

  // 切换题库管理器显示状态
  const toggleBankManager = useCallback(() => {
    setState(prev => ({
      ...prev,
      showBankManager: !prev.showBankManager,
      currentScreen: !prev.showBankManager ? 'bankManager' : 'home',
    }));
  }, []);

  // 切换学习分析显示状态
  const toggleAnalytics = useCallback(() => {
    setState(prev => ({
      ...prev,
      showAnalytics: !prev.showAnalytics,
      currentScreen: !prev.showAnalytics ? 'analytics' : 'home',
    }));
  }, []);

  // 重置到首页
  const resetToHome = useCallback(() => {
    setState({
      currentScreen: 'home',
      showBankManager: false,
      showAnalytics: false,
      previousScreen: null,
    });
  }, []);

  return {
    ...state,
    navigateTo,
    goBack,
    toggleBankManager,
    toggleAnalytics,
    resetToHome,
  };
};