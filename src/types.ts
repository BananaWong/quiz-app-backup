// 项目类型定义文件

export interface Question {
  id: number;
  type: 'single_choice' | 'multiple_choice' | 'true_false' | 'fill_blank' | 'short_answer';
  question: string;
  options?: Record<string, string | { text: string; image?: string; imageDescription?: string }>;
  answer: string | string[];
  category?: string;
  hasImage?: boolean;
  imagePath?: string;
  imageDescription?: string;
  imagePlaceholder?: string;
  images?: Array<{
    name: string;
    caption: string;
    description: string;
  }>;
}

export interface QuestionBank {
  id: string;
  name: string;
  description?: string;
  questions: Question[];
}

export interface StudySession {
  date: string;
  questionsAttempted: number;
  correctAnswers: number;
  studyTime: number;
  category?: string;
  bankId?: string;
}

export interface QuizSettings {
  enableStreak: boolean;
  streakTimerDuration: number;
  enableVibration: boolean;
  enableGestures: boolean;
  fullscreenMode: boolean;
  darkMode: boolean;
  enableSound: boolean;
  enableKeyboard: boolean;
}

export interface QuizResults {
  total: number;
  correct: number;
  incorrect: number;
  questions: Array<{
    question: Question;
    userAnswer: string | string[];
    isCorrect: boolean;
    timeSpent?: number;
  }>;
}

export interface QuestionStats {
  [questionId: string]: {
    attempts: number;
    correct: number;
    lastAttempted: string;
  };
}

export interface LearningAnalyticsProps {
  studyHistory: StudySession[];
  answerTimes: number[];
  currentStreak: number;
  maxStreak: number;
  colors: any;
  onClose: () => void;
}

// 题库管理相关类型
export interface ImportedBank {
  name: string;
  questions: Question[];
  description?: string;
}

// 组件Props类型
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ComponentType<any>;
  iconPosition?: 'left' | 'right';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

// 错误边界类型
export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

// 颜色主题类型
export interface ColorTheme {
  primary: string;
  primaryHover: string;
  primaryDark: string;
  primaryLight: string;
  primarySoft: string;
  secondary: string;
  accent: string;
  background: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  border: string;
  borderLight: string;
  borderHover: string;
  borderFocus: string;
  shadow: string;
  shadowMd: string;
  shadowLg: string;
  shadowCard: string;
}

export type ColorKey = keyof ColorTheme;

// 存储助手类型
export interface StorageHelper {
  getItem: <T>(key: string, defaultValue: T) => T;
  setItem: <T>(key: string, value: T) => void;
  removeItem: (key: string) => void;
}

// Hook类型
export interface UseLocalStorage<T> {
  value: T;
  setValue: (value: T | ((prev: T) => T)) => void;
  removeValue: () => void;
}

// 导出默认的空值
export const DEFAULT_QUIZ_SETTINGS: QuizSettings = {
  enableStreak: true,
  streakTimerDuration: 10,
  enableVibration: true,
  enableGestures: true,
  fullscreenMode: false,
  darkMode: false,
  enableSound: true,
  enableKeyboard: true
};

export const DEFAULT_QUIZ_RESULTS: QuizResults = {
  total: 0,
  correct: 0,
  incorrect: 0,
  questions: []
};