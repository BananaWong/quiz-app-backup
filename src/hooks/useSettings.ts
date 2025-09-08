import { useState, useEffect } from 'react';

// 存储助手类
class StorageHelper {
  static getItem<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  }

  static setItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }

  static removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }
}

export interface Settings {
  darkMode: boolean;
  soundEnabled: boolean;
  fullscreenMode: boolean;
  animationsEnabled: boolean;
  keyboardShortcuts: boolean;
  showAnswerHints: boolean;
  autoNextQuestion: boolean;
  studyReminders: boolean;
  compactMode: boolean;
  language: string;
  fontSize: number;
}

const defaultSettings: Settings = {
  darkMode: false,
  soundEnabled: true,
  fullscreenMode: false,
  animationsEnabled: true,
  keyboardShortcuts: true,
  showAnswerHints: true,
  autoNextQuestion: false,
  studyReminders: false,
  compactMode: false,
  language: 'zh',
  fontSize: 16
};

export const useSettings = () => {
  const [settings, setSettingsState] = useState<Settings>(() => 
    StorageHelper.getItem('quizSettings', defaultSettings)
  );

  const updateSettings = (newSettings: Partial<Settings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettingsState(updatedSettings);
    StorageHelper.setItem('quizSettings', updatedSettings);
  };

  const resetSettings = () => {
    setSettingsState(defaultSettings);
    StorageHelper.setItem('quizSettings', defaultSettings);
  };

  useEffect(() => {
    // 应用暗黑模式到 body
    if (settings.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [settings.darkMode]);

  return {
    settings,
    updateSettings,
    resetSettings
  };
};

export { StorageHelper };