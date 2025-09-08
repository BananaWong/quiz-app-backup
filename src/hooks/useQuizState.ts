import { useState, useCallback } from 'react';
import { Question } from '../types';
import { StorageHelper } from './useSettings';

export interface QuizResults {
  total: number;
  correct: number;
  percentage: number;
  questions: Array<{
    question: Question;
    userAnswer: any;
    isCorrect: boolean;
    answerTime: number;
  }>;
  timeSpent: number;
}

export interface StudySession {
  date: string;
  questionsAnswered: number;
  correctAnswers: number;
  timeSpent: number;
  category: string;
  bankId: string;
}

export const useQuizState = () => {
  // 基础状态
  const [currentScreen, setCurrentScreen] = useState<string>('home');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // 题库状态
  const [loadedQuestionBank, setLoadedQuestionBank] = useState<Question[]>([]);
  const [currentBankId, setCurrentBankId] = useState<string>('');
  
  // 答题状态
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<any>(null);
  const [multipleAnswers, setMultipleAnswers] = useState<string[]>([]);
  const [fillBlankAnswers, setFillBlankAnswers] = useState<string[]>([]);
  const [shortAnswer, setShortAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  
  // 答题配置
  const [quizAmount, setQuizAmount] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [questionStats, setQuestionStats] = useState<Record<string, any>>({});
  
  // 连击系统
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [showStreakAnimation, setShowStreakAnimation] = useState<boolean>(false);
  const [streakTimer, setStreakTimer] = useState<number>(100);
  
  // 结果和进度
  const [quizResults, setQuizResults] = useState<QuizResults | null>(null);
  const [sessionStartTime, setSessionStartTime] = useState<number>(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  
  // 收藏和错题
  const [favorites, setFavorites] = useState<number[]>(() => 
    StorageHelper.getItem('favorites', [])
  );
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);
  
  // 学习统计
  const [studySessions, setStudySessions] = useState<StudySession[]>(() => 
    StorageHelper.getItem('studySessions', [])
  );
  const [todayProgress, setTodayProgress] = useState<number>(() => 
    StorageHelper.getItem('todayProgress', 0)
  );
  const [dailyGoal, setDailyGoal] = useState<number>(() => 
    StorageHelper.getItem('dailyGoal', 50)
  );
  const [streakCount, setStreakCount] = useState<number>(0);

  // UI 状态
  const [showFullscreen, setShowFullscreen] = useState<boolean>(false);
  const [showBankManager, setShowBankManager] = useState<boolean>(false);
  const [showAnalytics, setShowAnalytics] = useState<boolean>(false);
  const [showBankSwitcher, setShowBankSwitcher] = useState<boolean>(false);
  const [bankCardCollapsed, setBankCardCollapsed] = useState<boolean>(false);

  // 重置答题状态
  const resetAnswerState = useCallback(() => {
    setUserAnswer(null);
    setMultipleAnswers([]);
    setFillBlankAnswers([]);
    setShortAnswer('');
    setIsAnswered(false);
    setQuestionStartTime(Date.now());
  }, []);

  // 更新收藏
  const toggleFavorite = useCallback((questionIndex: number) => {
    const newFavorites = favorites.includes(questionIndex)
      ? favorites.filter(f => f !== questionIndex)
      : [...favorites, questionIndex];
    
    setFavorites(newFavorites);
    StorageHelper.setItem('favorites', newFavorites);
  }, [favorites]);

  // 更新学习会话
  const updateStudySession = useCallback((session: StudySession) => {
    const newSessions = [...studySessions, session];
    setStudySessions(newSessions);
    StorageHelper.setItem('studySessions', newSessions);
  }, [studySessions]);

  // 更新今日进度
  const updateTodayProgress = useCallback((progress: number) => {
    setTodayProgress(progress);
    StorageHelper.setItem('todayProgress', progress);
  }, []);

  return {
    // 状态
    currentScreen,
    loading,
    error,
    loadedQuestionBank,
    currentBankId,
    currentQuestions,
    currentQuestionIndex,
    userAnswer,
    multipleAnswers,
    fillBlankAnswers,
    shortAnswer,
    isAnswered,
    quizAmount,
    selectedCategory,
    questionStats,
    currentStreak,
    maxStreak,
    showStreakAnimation,
    streakTimer,
    quizResults,
    sessionStartTime,
    questionStartTime,
    favorites,
    wrongQuestions,
    studySessions,
    todayProgress,
    dailyGoal,
    streakCount,
    showFullscreen,
    showBankManager,
    showAnalytics,
    showBankSwitcher,
    bankCardCollapsed,
    
    // 设置器
    setCurrentScreen,
    setLoading,
    setError,
    setLoadedQuestionBank,
    setCurrentBankId,
    setCurrentQuestions,
    setCurrentQuestionIndex,
    setUserAnswer,
    setMultipleAnswers,
    setFillBlankAnswers,
    setShortAnswer,
    setIsAnswered,
    setQuizAmount,
    setSelectedCategory,
    setQuestionStats,
    setCurrentStreak,
    setMaxStreak,
    setShowStreakAnimation,
    setStreakTimer,
    setQuizResults,
    setSessionStartTime,
    setQuestionStartTime,
    setFavorites,
    setWrongQuestions,
    setStudySessions,
    setTodayProgress,
    setDailyGoal,
    setStreakCount,
    setShowFullscreen,
    setShowBankManager,
    setShowAnalytics,
    setShowBankSwitcher,
    setBankCardCollapsed,
    
    // 方法
    resetAnswerState,
    toggleFavorite,
    updateStudySession,
    updateTodayProgress,
  };
};