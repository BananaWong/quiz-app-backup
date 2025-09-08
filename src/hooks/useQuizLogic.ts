import { useState, useEffect, useRef, useCallback } from 'react';
import { StorageHelper } from '../utils/modernStorageUtils';
import { CategoryStatsMap } from '../types';

interface QuizState {
  loadedQuestionBank: any[];
  loading: boolean;
  error: string | null;
  currentQuestions: any[];
  currentQuestionIndex: number;
  wrongQuestions: any[];
  userAnswer: any;
  multipleAnswers: any[];
  fillBlankAnswers: any[];
  shortAnswer: string;
  isAnswered: boolean;
  quizAmount: number;
  selectedCategory: string;
  questionStats: CategoryStatsMap;
  quizResults: {
    total: number;
    correct: number;
    incorrect: number;
    questions: any[];
  };
  isTransitioning: boolean;
  currentStreak: number;
  maxStreak: number;
  showStreakAnimation: boolean;
  streakTimer: number;
}

export const useQuizLogic = () => {
  const [state, setState] = useState<QuizState>({
    loadedQuestionBank: [],
    loading: true,
    error: null,
    currentQuestions: [],
    currentQuestionIndex: 0,
    wrongQuestions: [],
    userAnswer: null,
    multipleAnswers: [],
    fillBlankAnswers: [],
    shortAnswer: '',
    isAnswered: false,
    quizAmount: 10,
    selectedCategory: 'all',
    questionStats: {},
    quizResults: {
      total: 0,
      correct: 0,
      incorrect: 0,
      questions: []
    },
    isTransitioning: false,
    currentStreak: 0,
    maxStreak: 0,
    showStreakAnimation: false,
    streakTimer: 100,
  });

  const streakTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 更新单个状态的辅助函数
  const updateState = useCallback(<K extends keyof QuizState>(
    key: K,
    value: QuizState[K]
  ) => {
    setState(prev => ({ ...prev, [key]: value }));
  }, []);

  // 批量更新状态的辅助函数
  const updateMultipleState = useCallback((updates: Partial<QuizState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  // 重置测验状态
  const resetQuiz = useCallback(() => {
    updateMultipleState({
      currentQuestions: [],
      currentQuestionIndex: 0,
      wrongQuestions: [],
      userAnswer: null,
      multipleAnswers: [],
      fillBlankAnswers: [],
      shortAnswer: '',
      isAnswered: false,
      quizResults: {
        total: 0,
        correct: 0,
        incorrect: 0,
        questions: []
      },
      currentStreak: 0,
      showStreakAnimation: false,
      streakTimer: 100,
    });
  }, [updateMultipleState]);

  // 开始新的测验
  const startQuiz = useCallback((questions: any[], amount: number, category: string) => {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffledQuestions.slice(0, amount);
    
    updateMultipleState({
      currentQuestions: selectedQuestions,
      currentQuestionIndex: 0,
      quizAmount: amount,
      selectedCategory: category,
      userAnswer: null,
      multipleAnswers: [],
      fillBlankAnswers: [],
      shortAnswer: '',
      isAnswered: false,
      wrongQuestions: [],
      quizResults: {
        total: 0,
        correct: 0,
        incorrect: 0,
        questions: []
      }
    });
  }, [updateMultipleState]);

  // 回答问题
  const answerQuestion = useCallback((answer: any, isCorrect: boolean) => {
    updateState('userAnswer', answer);
    updateState('isAnswered', true);
    
    // 更新连击数
    if (isCorrect) {
      setState(prev => {
        const newStreak = prev.currentStreak + 1;
        const newMaxStreak = Math.max(newStreak, prev.maxStreak);
        
        return {
          ...prev,
          currentStreak: newStreak,
          maxStreak: newMaxStreak,
          showStreakAnimation: newStreak > 1,
          streakTimer: 100
        };
      });
    } else {
      updateState('currentStreak', 0);
    }
  }, [updateState]);

  // 下一题
  const nextQuestion = useCallback(() => {
    if (state.currentQuestionIndex < state.currentQuestions.length - 1) {
      updateMultipleState({
        currentQuestionIndex: state.currentQuestionIndex + 1,
        userAnswer: null,
        multipleAnswers: [],
        fillBlankAnswers: [],
        shortAnswer: '',
        isAnswered: false,
        isTransitioning: true
      });
      
      // 重置过渡状态
      setTimeout(() => {
        updateState('isTransitioning', false);
      }, 300);
    } else {
      // 测验结束，计算结果
      finishQuiz();
    }
  }, [state.currentQuestionIndex, state.currentQuestions.length, updateMultipleState, updateState]);

  // 完成测验
  const finishQuiz = useCallback(() => {
    const results = state.currentQuestions.map((question, index) => ({
      question,
      userAnswer: state.userAnswer, // 这里可能需要更复杂的逻辑来存储每个问题的答案
      isCorrect: false // 这里需要实际的正确性检查逻辑
    }));
    
    const correct = results.filter(r => r.isCorrect).length;
    const incorrect = results.length - correct;
    
    updateState('quizResults', {
      total: results.length,
      correct,
      incorrect,
      questions: results
    });
  }, [state.currentQuestions, state.userAnswer, updateState]);

  // 连击动画效果
  useEffect(() => {
    if (state.showStreakAnimation) {
      const timer = setInterval(() => {
        setState(prev => {
          if (prev.streakTimer <= 0) {
            clearInterval(timer);
            return { ...prev, showStreakAnimation: false, streakTimer: 100 };
          }
          return { ...prev, streakTimer: prev.streakTimer - 2 };
        });
      }, 50);
      
      streakTimerRef.current = timer;
      
      return () => {
        if (streakTimerRef.current) {
          clearInterval(streakTimerRef.current);
        }
      };
    }
  }, [state.showStreakAnimation]);

  return {
    ...state,
    updateState,
    updateMultipleState,
    resetQuiz,
    startQuiz,
    answerQuestion,
    nextQuestion,
    finishQuiz,
  };
};