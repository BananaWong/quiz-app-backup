// 懒加载组件定义文件
// 统一管理所有懒加载的组件，避免在主文件中重复定义

import { lazy } from 'react';

// 大型功能组件
export const QuestionBankManager = lazy(() => import('../QuestionBankManager'));
export const LearningAnalytics = lazy(() => import('./LearningAnalytics'));

// 屏幕组件
export const HomeScreen = lazy(() => import('./screens/HomeScreen'));
export const QuizScreen = lazy(() => import('./screens/QuizScreen'));
export const ResultsScreen = lazy(() => import('./screens/ResultsScreen'));
export const SettingsScreen = lazy(() => import('./screens/SettingsScreen'));

// 工具组件
export const BankSwitcher = lazy(() => import('./BankSwitcher'));