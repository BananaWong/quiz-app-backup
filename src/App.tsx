import React, { useState, useEffect, useRef, useCallback, useMemo, Suspense, lazy } from 'react';
import { ChevronLeft, BookOpen, Shuffle, FileX2, CheckCircle, XCircle, Clock, Target, Award, Brain, Filter, BarChart3, Zap, Heart, Settings, Flame, Image, Download, FileText, PieChart, Calendar, Smartphone, Maximize, Moon, Sun, Star, StarOff, Volume2, VolumeX, Keyboard, Play, CalendarDays, Trophy, AlertCircle, Database, Plus } from 'lucide-react';

// 懒加载大型组件
const QuestionBankManager = lazy(() => import('./QuestionBankManager'));
const LearningAnalytics = lazy(() => import('./components/LearningAnalytics'));
import { useSoundSystem } from './hooks/useSoundSystem';
import { CategoryStatsMap, OptionWithImage } from './types';
import { FullScreenLoader } from './components/ui/LoadingSpinner';
import { DevPerformanceMonitor } from './components/PerformanceMonitor';
import { COLORS, ColorTheme } from './constants/theme';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { BUILTIN_QUESTION_BANKS } from './constants/questionBanks';
import { StorageHelper } from './utils/modernStorageUtils';
import { QuestionValidator, debounce, isOptionWithImage } from './utils/validationUtils';
import { getQuestionStats } from './utils/questionUtils';
import { useQuizLogic } from './hooks/useQuizLogic';
import { useQuestionBank } from './hooks/useQuestionBank';
import { useAppNavigation } from './hooks/useAppNavigation';



// 主应用组件（集成题库管理系统）
const App = () => {
  // Custom Hooks
  const { playSound } = useSoundSystem();
  const quizLogic = useQuizLogic();
  const questionBank = useQuestionBank();
  const navigation = useAppNavigation();
  
  // 保持兼容性的状态解构
  const {
    loadedQuestionBank,
    loading,
    error,
    currentQuestions,
    currentQuestionIndex,
    wrongQuestions,
    userAnswer,
    multipleAnswers,
    fillBlankAnswers,
    shortAnswer,
    isAnswered,
    quizAmount,
    selectedCategory,
    quizResults,
    isTransitioning,
    currentStreak,
    maxStreak,
    showStreakAnimation,
    streakTimer
  } = quizLogic;
  
  const {
    availableBanks,
    questionStats,
    bankCardCollapsed,
    toggleBankCardCollapsed
  } = questionBank;
  
  const {
    currentScreen,
    showBankManager,
    showAnalytics,
    navigateTo,
    toggleBankManager,
    toggleAnalytics
  } = navigation;
  
  const streakTimerRef = useRef(null);
  
  // 题库相关状态
  const [currentBankId, setCurrentBankId] = useState(() => {
    return StorageHelper.getItem('selectedQuestionBank', 'additive');
  });
  const [showBankSwitcher, setShowBankSwitcher] = useState(false);

  // 设置状态
  const [settings, setSettings] = useState(() => {
    return StorageHelper.getItem('quizSettings', {
      enableStreak: true,
      streakTimerDuration: 10,
      enableVibration: true,
      enableGestures: true,
      fullscreenMode: false,
      darkMode: false,
      enableSound: true,
      enableKeyboard: true
    });
  });

  // 主题颜色配置
  const colors = settings.darkMode ? COLORS.dark : COLORS.light;

  // 新增功能状态
  const [studyHistory, setStudyHistory] = useState(() => {
    return StorageHelper.getItem('studyHistory', []);
  });
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [answerTimes, setAnswerTimes] = useState([]);
  const [currentQuestionStartTime, setCurrentQuestionStartTime] = useState(null);
  const [favoriteQuestions, setFavoriteQuestions] = useState([]);
  
  // 学习计划状态
  const [dailyGoal, setDailyGoal] = useState(() => {
    return StorageHelper.getItem('dailyGoal', 20);
  });
  const [todayProgress, setTodayProgress] = useState(0);
  const [studyStreak, setStudyStreak] = useState(0);
  const [lastStudyDate, setLastStudyDate] = useState(null);
  
  // 手势相关状态
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });
  const [swipeDirection, setSwipeDirection] = useState(null);
  
  // 长按计时器相关
  const [pressTimer, setPressTimer] = useState(null);
  const [isPressing, setIsPressing] = useState(false);
  
  // 全屏模式
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const containerRef = useRef(null);

  // 加载所有可用题库（内置 + 自定义）
  useEffect(() => {
    const loadAvailableBanks = () => {
      // 加载内置题库
      const builtinBanks = Object.values(BUILTIN_QUESTION_BANKS);
      
      // 加载自定义题库
      const customBanks = StorageHelper.getItem('questionBanks', []).map(bank => ({
        id: bank.id,
        name: bank.name,
        category: 'custom',
        color: '#9333ea',
        description: bank.description || '自定义题库',
        isCustom: true,
        questions: bank.questions
      }));
      
      setAvailableBanks([...builtinBanks, ...customBanks]);
    };
    
    loadAvailableBanks();
  }, [showBankManager]); // 当题库管理器关闭时重新加载


  // 振动反馈函数
  const triggerVibration = useCallback((pattern = [100]) => {
    if (settings.enableVibration && 'vibrate' in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (error) {
        console.warn('振动失败:', error);
      }
    }
  }, [settings.enableVibration]);


  // 全屏模式处理
  const toggleFullscreen = useCallback(() => {
    const elem = containerRef.current;
    if (!elem) return;
    
    try {
      if (!document.fullscreenElement && 
          !document.webkitFullscreenElement && 
          !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    } catch (error) {
      console.warn('全屏切换失败:', error);
    }
  }, []);

  // 收藏功能
  const toggleFavorite = useCallback((questionId) => {
    const favoriteKey = `${currentBankId}_${questionId}`;
    setFavoriteQuestions(prev => {
      const newFavorites = prev.includes(favoriteKey)
        ? prev.filter(id => id !== favoriteKey)
        : [...prev, favoriteKey];
      StorageHelper.setItem(`favoriteQuestions_${currentBankId}`, newFavorites);
      return newFavorites;
    });
    playSound('click');
    triggerVibration([30]);
  }, [currentBankId, playSound, triggerVibration]);

  // 主题切换
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);

  // 学习进度追踪
  useEffect(() => {
    const today = new Date().toDateString();
    const savedDate = StorageHelper.getItem('lastStudyDate');
    const savedProgress = StorageHelper.getItem('todayProgress', 0);
    const savedStreak = StorageHelper.getItem('studyStreak', 0);

    if (savedDate === today) {
      setTodayProgress(savedProgress);
      setStudyStreak(savedStreak);
    } else {
      if (savedDate) {
        const lastDate = new Date(savedDate);
        const todayDate = new Date(today);
        const dayDiff = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
        
        if (dayDiff === 1) {
          setStudyStreak(savedStreak);
        } else {
          setStudyStreak(0);
        }
      }
      setTodayProgress(0);
    }
    setLastStudyDate(today);
  }, []);

  // 保存学习进度
  const saveTodayProgress = useMemo(
    () => debounce((progress) => {
      StorageHelper.setItem('todayProgress', progress);
    }, 1000),
    []
  );

  useEffect(() => {
    saveTodayProgress(todayProgress);
  }, [todayProgress, saveTodayProgress]);

  useEffect(() => {
    StorageHelper.setItem('studyStreak', studyStreak);
  }, [studyStreak]);

  useEffect(() => {
    if (lastStudyDate) {
      StorageHelper.setItem('lastStudyDate', lastStudyDate);
    }
  }, [lastStudyDate]);

  // 修改题库加载逻辑 - 支持自定义题库
  useEffect(() => {
    const loadQuestionBank = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const bank = availableBanks.find(b => b.id === currentBankId);
        if (!bank) {
          // 如果找不到当前选中的题库，尝试使用第一个可用题库
          if (availableBanks.length > 0) {
            setCurrentBankId(availableBanks[0].id);
            return;
          }
          throw new Error('没有可用的题库');
        }
        
        let questions;
        if (bank.isCustom) {
          // 自定义题库直接使用存储的题目
          questions = bank.questions;
        } else {
          // 内置题库从模块加载
          const module = await bank.module().catch(err => {
            throw new Error(`题库模块加载失败: ${err.message}`);
          });
          
          if (!module.questionBank) {
            throw new Error('题库数据格式错误');
          }
          
          questions = module.questionBank;
        }
        
        // 验证题库
        const validation = QuestionValidator.validateQuestionBank(questions);
        if (!validation.valid) {
          throw new Error(validation.error);
        }
        
        setLoadedQuestionBank(questions);
        
        // 获取并设置题库统计
        const stats = getQuestionStats(questions);
        setQuestionStats(stats);
        
        // 加载题库特定的数据
        const savedWrongQuestions = StorageHelper.getItem(`wrongQuestions_${currentBankId}`, []);
        setWrongQuestions(savedWrongQuestions);
        
        const savedFavorites = StorageHelper.getItem(`favoriteQuestions_${currentBankId}`, []);
        setFavoriteQuestions(savedFavorites);
        
        // 保存选择
        StorageHelper.setItem('selectedQuestionBank', currentBankId);
        
        setLoading(false);
      } catch (err) {
        console.error('加载题库失败:', err);
        setError(err.message || '题库加载失败，请刷新页面重试');
        setLoading(false);
      }
    };
    
    if (availableBanks.length > 0) {
      loadQuestionBank();
    }
  }, [currentBankId, availableBanks]);

  // 清理计时器
  useEffect(() => {
    return () => {
      if (streakTimerRef.current) {
        clearInterval(streakTimerRef.current);
      }
    };
  }, []);

  // 开始连击计时器
  const startStreakTimer = useCallback(() => {
    if (!settings.enableStreak) return;
    
    if (streakTimerRef.current) {
      clearInterval(streakTimerRef.current);
    }
    
    setStreakTimer(100);
    const interval = setInterval(() => {
      setStreakTimer(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          setCurrentStreak(0);
          return 0;
        }
        return prev - 1;
      });
    }, settings.streakTimerDuration * 1000 / 100);
    
    streakTimerRef.current = interval;
  }, [settings.enableStreak, settings.streakTimerDuration]);

  // 停止连击计时器
  const stopStreakTimer = useCallback(() => {
    if (streakTimerRef.current) {
      clearInterval(streakTimerRef.current);
      streakTimerRef.current = null;
    }
    setStreakTimer(100);
  }, []);

  // 获取过滤后的题库
  const getFilteredQuestionBank = useCallback(() => {
    if (selectedCategory === 'all') {
      return loadedQuestionBank;
    }
    return loadedQuestionBank.filter(q => q.category === selectedCategory);
  }, [loadedQuestionBank, selectedCategory]);

  // 处理不同模式的题目选择
  const startQuizMode = useCallback((mode) => {
    setIsTransitioning(true);
    playSound('click');
    
    setTimeout(() => {
      let questions = [];
      const filteredBank = getFilteredQuestionBank();
      
      if (filteredBank.length === 0) {
        alert('当前分类没有题目！');
        setIsTransitioning(false);
        return;
      }
      
      switch(mode) {
        case 'sequential':
          questions = [...filteredBank].slice(0, Math.min(quizAmount, filteredBank.length));
          break;
        case 'random':
          questions = [...filteredBank]
            .sort(() => 0.5 - Math.random())
            .slice(0, Math.min(quizAmount, filteredBank.length));
          break;
        case 'wrong':
          if (wrongQuestions.length === 0) {
            alert('错题集为空，请先进行一些答题练习！');
            setIsTransitioning(false);
            return;
          }
          const wrongAmount = Math.min(quizAmount, wrongQuestions.length);
          const selectedWrongIds = wrongQuestions.slice(0, wrongAmount);
          questions = selectedWrongIds.map(wrongId => 
            loadedQuestionBank.find(q => q.id === wrongId)
          ).filter(q => q && QuestionValidator.validateQuestion(q));
          break;
        case 'favorites':
          if (favoriteQuestions.length === 0) {
            alert('收藏夹为空，请先收藏一些题目！');
            setIsTransitioning(false);
            return;
          }
          const favoriteAmount = Math.min(quizAmount, favoriteQuestions.length);
          const selectedFavoriteIds = favoriteQuestions.slice(0, favoriteAmount);
          questions = selectedFavoriteIds.map(favoriteId => {
            const id = parseInt(favoriteId.split('_')[1]);
            return loadedQuestionBank.find(q => q.id === id);
          }).filter(q => q && QuestionValidator.validateQuestion(q));
          break;
        default:
          setIsTransitioning(false);
          return;
      }
      
      if (questions.length === 0) {
        alert('没有找到有效的题目！');
        setIsTransitioning(false);
        return;
      }
      
      setQuizResults({
        total: questions.length,
        correct: 0,
        incorrect: 0,
        questions: []
      });
      
      setCurrentQuestions(questions);
      setCurrentQuestionIndex(0);
      setUserAnswer(null);
      setMultipleAnswers([]);
      setIsAnswered(false);
      setFillBlankAnswers([]);
      setShortAnswer('');
      setCurrentStreak(0);
      setAnswerTimes([]);
      setSessionStartTime(Date.now());
      setCurrentQuestionStartTime(Date.now());
      stopStreakTimer();
      setCurrentScreen('quiz');
      setIsTransitioning(false);
    }, 300);
  }, [getFilteredQuestionBank, quizAmount, wrongQuestions, favoriteQuestions, loadedQuestionBank, playSound, stopStreakTimer]);

  // 答题处理
  const handleAnswer = useCallback((answer) => {
    if (isAnswered) return;
    
    const currentQuestion = currentQuestions[currentQuestionIndex];
    if (!currentQuestion) return;
    
    const answerTime = Date.now() - currentQuestionStartTime;
    let isCorrect = false;
    let userAnswerFormatted = answer;
    
    try {
      if (currentQuestion.type === 'multiple_choice') {
        if (!Array.isArray(multipleAnswers) || multipleAnswers.length === 0) {
          alert('请至少选择一个选项！');
          return;
        }
        const sortedUserAnswer = multipleAnswers.sort().join('');
        const sortedCorrectAnswer = Array.isArray(currentQuestion.answer) 
          ? currentQuestion.answer.sort().join('')
          : currentQuestion.answer.split('').sort().join('');
        isCorrect = sortedUserAnswer === sortedCorrectAnswer;
        userAnswerFormatted = sortedUserAnswer;
      } else if (currentQuestion.type === 'fill_blank') {
        if (!Array.isArray(fillBlankAnswers) || fillBlankAnswers.length !== currentQuestion.blanks) {
          alert('请填写所有空格！');
          return;
        }
        isCorrect = fillBlankAnswers.every((ans, index) => 
          ans && ans.trim().toLowerCase() === currentQuestion.answer[index].toLowerCase()
        );
        userAnswerFormatted = fillBlankAnswers.join(', ');
      } else if (currentQuestion.type === 'short_answer') {
        if (!shortAnswer || !shortAnswer.trim()) {
          alert('请输入答案！');
          return;
        }
        const userAnswerLower = shortAnswer.toLowerCase();
        const keywordsMatched = currentQuestion.keywords.filter(keyword => 
          userAnswerLower.includes(keyword.toLowerCase())
        ).length;
        isCorrect = keywordsMatched >= currentQuestion.keywords.length * 0.6;
        userAnswerFormatted = shortAnswer;
      } else {
        isCorrect = answer === currentQuestion.answer;
        userAnswerFormatted = answer;
      }
      
      // 记录答题时间
      setAnswerTimes(prev => [...prev, {
        questionId: currentQuestion.id,
        time: answerTime,
        isCorrect,
        difficulty: currentQuestion.difficulty,
        category: currentQuestion.category
      }]);
      
      setUserAnswer(userAnswerFormatted);
      setIsAnswered(true);
      stopStreakTimer();
      
      // 更新每日进度
      setTodayProgress(prev => prev + 1);
      
      // 音效和振动反馈
      if (isCorrect) {
        playSound('correct');
        triggerVibration([100, 50, 100]);
        const newStreak = currentStreak + 1;
        setCurrentStreak(newStreak);
        if (newStreak > maxStreak) {
          setMaxStreak(newStreak);
          StorageHelper.setItem('maxStreak', newStreak);
        }
        if (settings.enableStreak) {
          playSound('streak', newStreak);
          setTimeout(() => {
            setShowStreakAnimation(true);
            setTimeout(() => setShowStreakAnimation(false), 800);
          }, 100);
          // 重新启动连击计时器
          startStreakTimer();
        }
      } else {
        playSound('incorrect');
        triggerVibration([200]);
        setCurrentStreak(0);
      }
      
      setQuizResults(prev => ({
        ...prev,
        correct: isCorrect ? prev.correct + 1 : prev.correct,
        incorrect: !isCorrect ? prev.incorrect + 1 : prev.incorrect,
        questions: [...prev.questions, {
          id: currentQuestion.id,
          question: currentQuestion.question,
          userAnswer: userAnswerFormatted,
          correctAnswer: currentQuestion.answer,
          isCorrect,
          category: currentQuestion.category,
          difficulty: currentQuestion.difficulty,
          answerTime
        }]
      }));
      
      if (!isCorrect && !wrongQuestions.includes(currentQuestion.id)) {
        const newWrongQuestions = [...wrongQuestions, currentQuestion.id];
        setWrongQuestions(newWrongQuestions);
        StorageHelper.setItem(`wrongQuestions_${currentBankId}`, newWrongQuestions);
      }
    } catch (error) {
      console.error('处理答案时出错:', error);
      alert('处理答案时出现错误，请重试');
    }
  }, [isAnswered, currentQuestions, currentQuestionIndex, currentQuestionStartTime, multipleAnswers, fillBlankAnswers, shortAnswer, stopStreakTimer, startStreakTimer, playSound, triggerVibration, currentStreak, maxStreak, settings.enableStreak, wrongQuestions, currentBankId]);

  // 移动到下一题
  const handleNextQuestion = useCallback(() => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserAnswer(null);
        setMultipleAnswers([]);
        setIsAnswered(false);
        setFillBlankAnswers([]);
        setShortAnswer('');
        setCurrentQuestionStartTime(Date.now());
        if (settings.enableStreak && currentStreak > 0) {
          startStreakTimer();
        }
      } else {
        // 完成测试
        const today = new Date().toDateString();
        if (lastStudyDate !== today) {
          setStudyStreak(prev => prev + 1);
          setLastStudyDate(today);
        }
        
        // 保存学习记录
        const sessionData = {
          id: Date.now(),
          date: new Date().toISOString(),
          mode: 'quiz',
          bankId: currentBankId,
          totalQuestions: quizResults.total,
          correctAnswers: quizResults.correct,
          totalTime: Date.now() - sessionStartTime,
          maxStreak: Math.max(...quizResults.questions.map((_, i) => {
            let streak = 0;
            for (let j = 0; j <= i; j++) {
              if (quizResults.questions[j].isCorrect) {
                streak++;
              } else {
                streak = 0;
              }
            }
            return streak;
          }), 0),
          answerTimes,
          categories: [...new Set(quizResults.questions.map(q => q.category))]
        };
        
        const newHistory = [sessionData, ...studyHistory.slice(0, 49)];
        setStudyHistory(newHistory);
        StorageHelper.setItem('studyHistory', newHistory);
        
        stopStreakTimer();
        setCurrentScreen('results');
      }
      setIsTransitioning(false);
    }, 300);
  }, [currentQuestionIndex, currentQuestions.length, settings.enableStreak, currentStreak, startStreakTimer, lastStudyDate, currentBankId, quizResults, sessionStartTime, answerTimes, studyHistory, stopStreakTimer]);

  // 导出功能
  const exportData = useCallback((type) => {
    try {
      let data, filename, contentType;
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const currentBank = availableBanks.find(b => b.id === currentBankId);
      
      switch(type) {
        case 'wrongQuestions':
          const wrongQuestionsData = wrongQuestions.map(id => {
            const q = loadedQuestionBank.find(question => question.id === id);
            return q ? {
              题库: currentBank?.name || '未知',
              题目: q.question,
              分类: q.category,
              正确答案: Array.isArray(q.answer) ? q.answer.join(', ') : q.answer,
              难度: q.difficulty || '未知',
              重要程度: q.importance || '未知'
            } : null;
          }).filter(Boolean);
          
          if (wrongQuestionsData.length === 0) {
            alert('没有错题可以导出！');
            return;
          }
          
          data = JSON.stringify(wrongQuestionsData, null, 2);
          filename = `错题集_${currentBank?.name || '未知'}_${dateStr}.json`;
          contentType = 'application/json';
          break;
          
        case 'favorites':
          const favoritesData = favoriteQuestions.map(fav => {
            const id = parseInt(fav.split('_')[1]);
            const q = loadedQuestionBank.find(question => question.id === id);
            return q ? {
              题库: currentBank?.name || '未知',
              题目: q.question,
              分类: q.category,
              正确答案: Array.isArray(q.answer) ? q.answer.join(', ') : q.answer,
              难度: q.difficulty || '未知',
              重要程度: q.importance || '未知'
            } : null;
          }).filter(Boolean);
          
          if (favoritesData.length === 0) {
            alert('没有收藏题目可以导出！');
            return;
          }
          
          data = JSON.stringify(favoritesData, null, 2);
          filename = `收藏题目_${currentBank?.name || '未知'}_${dateStr}.json`;
          contentType = 'application/json';
          break;
          
        case 'studyReport':
          const reportData = {
            导出时间: now.toLocaleString('zh-CN'),
            当前题库: currentBank?.name || '未知',
            学习统计: {
              总学习次数: studyHistory.length,
              错题总数: wrongQuestions.length,
              收藏题目数: favoriteQuestions.length,
              历史最高连击: maxStreak,
              当前学习连续天数: studyStreak,
              今日学习进度: `${todayProgress}/${dailyGoal}`,
              今日完成率: `${Math.round((todayProgress / dailyGoal) * 100)}%`
            },
            最近学习记录: studyHistory.slice(0, 10).map(session => ({
              日期: new Date(session.date).toLocaleString('zh-CN'),
              题库: availableBanks.find(b => b.id === session.bankId)?.name || '未知',
              题目总数: session.totalQuestions,
              正确率: `${Math.round((session.correctAnswers / session.totalQuestions) * 100)}%`,
              用时: `${Math.round(session.totalTime / 1000)}秒`,
              最高连击: session.maxStreak
            })),
            分类统计: Object.entries(questionStats).map(([category, stats]) => ({
              分类: category,
              题目数量: stats.total,
              难度分布: `简单${stats.easy} 中等${stats.medium} 困难${stats.hard}`
            }))
          };
          
          data = JSON.stringify(reportData, null, 2);
          filename = `学习报告_${dateStr}.json`;
          contentType = 'application/json';
          break;
          
        case 'csv':
          if (studyHistory.length === 0) {
            alert('没有学习记录可以导出！');
            return;
          }
          
          const csvData = studyHistory.map(session => [
            new Date(session.date).toLocaleString('zh-CN'),
            availableBanks.find(b => b.id === session.bankId)?.name || '未知',
            session.totalQuestions,
            session.correctAnswers,
            Math.round((session.correctAnswers / session.totalQuestions) * 100),
            Math.round(session.totalTime / 1000),
            session.maxStreak || 0
          ]);
          
          const csvHeader = ['学习时间', '题库', '题目总数', '正确数量', '正确率(%)', '用时(秒)', '最高连击'];
          const csvContent = [csvHeader, ...csvData].map(row => row.join(',')).join('\n');
          
          data = '\ufeff' + csvContent; // 添加BOM以支持Excel中文
          filename = `学习数据_${dateStr}.csv`;
          contentType = 'text/csv;charset=utf-8';
          break;
          
        default:
          return;
      }
      
      const blob = new Blob([data], { type: contentType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      playSound('click');
      triggerVibration([50, 50, 50]);
    } catch (error) {
      console.error('导出数据时出错:', error);
      alert('导出失败，请重试！');
    }
  }, [currentBankId, wrongQuestions, loadedQuestionBank, favoriteQuestions, studyHistory, maxStreak, studyStreak, todayProgress, dailyGoal, questionStats, availableBanks, playSound, triggerVibration]);

  // 保存设置
  const saveSettings = useMemo(
    () => debounce((newSettings) => {
      StorageHelper.setItem('quizSettings', newSettings);
    }, 500),
    []
  );

  useEffect(() => {
    saveSettings(settings);
  }, [settings, saveSettings]);

  // 保存错题
  const saveWrongQuestions = useMemo(
    () => debounce((questions) => {
      StorageHelper.setItem(`wrongQuestions_${currentBankId}`, questions);
    }, 1000),
    [currentBankId]
  );

  useEffect(() => {
    saveWrongQuestions(wrongQuestions);
  }, [wrongQuestions, saveWrongQuestions]);

  // 键盘快捷键支持
  useEffect(() => {
    if (!settings.enableKeyboard) return;

    const handleKeyPress = (event) => {
      try {
        if (currentScreen !== 'quiz' || isTransitioning) return;

        const key = event.key.toLowerCase();
        const question = currentQuestions[currentQuestionIndex];
        
        if (!question) return;

        if (['1', '2', '3', '4', 'a', 'b', 'c', 'd', ' ', 'enter', 'escape'].includes(key)) {
          event.preventDefault();
        }

        if (!isAnswered) {
          if (question.type === 'single_choice') {
            if (['1', 'a'].includes(key)) handleAnswer('A');
            else if (['2', 'b'].includes(key)) handleAnswer('B');
            else if (['3', 'c'].includes(key)) handleAnswer('C');
            else if (['4', 'd'].includes(key)) handleAnswer('D');
          }
          else if (question.type === 'multiple_choice') {
            // 多选题暂不支持键盘快捷键
          }
          else if (question.type === 'true_false') {
            if (['1', 't', 'y'].includes(key)) handleAnswer('true');
            else if (['2', 'f', 'n'].includes(key)) handleAnswer('false');
          }
          else if (key === ' ' && (question.type === 'fill_blank' || question.type === 'short_answer')) {
            if (question.type === 'fill_blank') {
              if (fillBlankAnswers.length >= question.blanks && fillBlankAnswers.every(ans => ans?.trim())) {
                handleAnswer(fillBlankAnswers);
              }
            } else if (question.type === 'short_answer') {
              if (shortAnswer.trim()) {
                handleAnswer(shortAnswer);
              }
            }
          } else if (key === ' ' && question.type === 'multiple_choice') {
            if (multipleAnswers.length > 0) {
              handleAnswer(multipleAnswers);
            }
          }
        } else {
          if (['enter', ' '].includes(key)) {
            handleNextQuestion();
          }
        }

        if (key === 'escape') {
          if (window.confirm('确定要退出当前练习吗？')) {
            setCurrentScreen('home');
          }
        }
      } catch (error) {
        console.error('键盘事件处理出错:', error);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [settings.enableKeyboard, currentScreen, isTransitioning, currentQuestions, currentQuestionIndex, isAnswered, fillBlankAnswers, shortAnswer, multipleAnswers, handleAnswer, handleNextQuestion]);

  // 手势处理函数
  const handleTouchStart = useCallback((e) => {
    if (!settings.enableGestures || currentScreen !== 'quiz') return;
    try {
      const touch = e.touches[0];
      setTouchStart({ x: touch.clientX, y: touch.clientY });
    } catch (error) {
      console.warn('触摸开始事件处理失败:', error);
    }
  }, [settings.enableGestures, currentScreen]);

  const handleTouchMove = useCallback((e) => {
    if (!settings.enableGestures || currentScreen !== 'quiz') return;
    try {
      const touch = e.touches[0];
      setTouchEnd({ x: touch.clientX, y: touch.clientY });
    } catch (error) {
      console.warn('触摸移动事件处理失败:', error);
    }
  }, [settings.enableGestures, currentScreen]);

  const handleTouchEnd = useCallback(() => {
    if (!settings.enableGestures || currentScreen !== 'quiz') return;
    
    try {
      const deltaX = touchEnd.x - touchStart.x;
      const deltaY = touchEnd.y - touchStart.y;
      const minSwipeDistance = 50;
      
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0 && currentQuestionIndex > 0) {
          if (isAnswered) {
            setSwipeDirection('right');
            triggerVibration([50]);
          }
        } else if (deltaX < 0 && isAnswered) {
          setSwipeDirection('left');
          triggerVibration([50]);
          setTimeout(() => {
            handleNextQuestion();
            setSwipeDirection(null);
          }, 200);
        }
      }
    } catch (error) {
      console.warn('触摸结束事件处理失败:', error);
    }
  }, [settings.enableGestures, currentScreen, touchEnd, touchStart, currentQuestionIndex, isAnswered, triggerVibration, handleNextQuestion]);

  // 监听全屏状态变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement || 
                      !!document.webkitFullscreenElement || 
                      !!document.msFullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // 分析数据计算
  const getAnalysisData = useCallback(() => {
    if (studyHistory.length === 0) return null;
    
    const recent7Days = studyHistory.filter(session => 
      Date.now() - new Date(session.date).getTime() < 7 * 24 * 60 * 60 * 1000
    );
    
    const totalSessions = studyHistory.length;
    const totalQuestions = studyHistory.reduce((sum, session) => sum + session.totalQuestions, 0);
    const totalCorrect = studyHistory.reduce((sum, session) => sum + session.correctAnswers, 0);
    const avgAccuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions * 100) : 0;
    const avgTime = totalSessions > 0 
      ? studyHistory.reduce((sum, session) => sum + session.totalTime, 0) / totalSessions 
      : 0;
    
    const difficultyStats = answerTimes.reduce((stats, answer) => {
      if (!answer.difficulty) return stats;
      
      if (!stats[answer.difficulty]) {
        stats[answer.difficulty] = { total: 0, correct: 0 };
      }
      stats[answer.difficulty].total++;
      if (answer.isCorrect) stats[answer.difficulty].correct++;
      return stats;
    }, {});
    
    return {
      totalSessions,
      totalQuestions,
      avgAccuracy: Math.round(avgAccuracy),
      avgTime: Math.round(avgTime / 1000),
      recent7Days: recent7Days.length,
      difficultyStats,
      categoryPerformance: Object.entries(questionStats).map(([category, stats]) => ({
        category,
        total: stats.total,
        mastery: Math.min(100, Math.round(Math.random() * 30 + 70))
      }))
    };
  }, [studyHistory, answerTimes, questionStats]);

  // 增强的图片显示组件
  const ImageDisplay = ({ question, type = 'question' }) => {
    const [imageErrors, setImageErrors] = useState({});
    const [imageLoading, setImageLoading] = useState({});
    
    const handleImageError = (imageKey) => {
      setImageErrors(prev => ({ ...prev, [imageKey]: true }));
      setImageLoading(prev => ({ ...prev, [imageKey]: false }));
    };
    
    const handleImageLoad = (imageKey) => {
      setImageLoading(prev => ({ ...prev, [imageKey]: false }));
    };
    
    const renderSingleImage = (imagePath, description, key = 'main') => {
      const fullPath = imagePath.startsWith('/') ? imagePath : `/images/${currentBankId}/${imagePath}`;
      
      return (
        <div className="relative group" key={key}>
          {imageLoading[key] !== false && !imageErrors[key] && (
            <div className={`absolute inset-0 flex items-center justify-center rounded-xl ${
              settings.darkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          {!imageErrors[key] ? (
            <img 
              src={fullPath}
              alt={description || "题目图片"}
              className={`w-full max-w-lg mx-auto rounded-xl shadow-lg border-2 transition-transform duration-300 active:scale-95 ${
                settings.darkMode ? 'border-gray-700' : 'border-gray-200'
              } ${imageLoading[key] !== false ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => handleImageLoad(key)}
              onError={() => handleImageError(key)}
              onTouchStart={() => triggerVibration([30])}
            />
          ) : (
            <div className={`backdrop-blur p-6 rounded-xl border-2 border-dashed text-center flex items-center justify-center min-h-[150px] ${
              settings.darkMode 
                ? 'bg-gray-800/90 border-gray-600' 
                : 'bg-white/90 border-gray-300'
            }`}>
              <div>
                <div className="text-3xl mb-2">📷</div>
                <p className={`font-medium text-sm ${
                  settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>图片加载失败</p>
                <p className={`text-xs mt-1 ${
                  settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {description || '请检查网络连接'}
                </p>
                <Button 
                  size="sm"
                  variant="secondary"
                  onClick={() => {
                    setImageErrors(prev => ({ ...prev, [key]: false }));
                    setImageLoading(prev => ({ ...prev, [key]: true }));
                  }}
                  className="mt-3"
                >
                  重试
                </Button>
              </div>
            </div>
          )}
        </div>
      );
    };
    
    if (type === 'question' && !question.hasImage && !question.images) return null;
    
    return (
      <div className="mb-6 transition-all duration-300 ease-in-out">
        <Card className="p-4">
          {type === 'question' && (
            <div className="flex items-center mb-3">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-md bg-gradient-to-r from-blue-600 to-purple-600`}>
                <Image size={16} />
              </div>
              <span className={`ml-2 font-bold text-sm ${
                settings.darkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {question.images ? '题目图片' : '图片题目'}
              </span>
            </div>
          )}
          
          {question.images ? (
            <div className={`space-y-4 ${question.images.length > 1 ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : ''}`}>
              {question.images.map((img, index) => (
                <div key={index}>
                  {img.caption && (
                    <p className={`text-sm mb-2 text-center font-medium ${
                      settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {img.caption}
                    </p>
                  )}
                  {renderSingleImage(img.name, img.description, `img_${index}`)}
                </div>
              ))}
            </div>
          ) : (
            <>
              {question.imageDescription && (
                <p className={`text-xs mb-3 p-2 rounded-xl ${
                  settings.darkMode 
                    ? 'text-gray-300 bg-gray-700/70' 
                    : 'text-gray-600 bg-gray-100'
                }`}>
                  💡 {question.imageDescription}
                </p>
              )}
              {renderSingleImage(
                question.imageName || question.imagePath,
                question.imageDescription || question.imagePlaceholder
              )}
            </>
          )}
        </Card>
      </div>
    );
  };

  // 带图片的选项组件
  const OptionsWithImages = ({ question, handleAnswerLocal, isAnswered, userAnswer }) => {
    const options = question.optionsWithImages;
    
    return (
      <div className="space-y-3">
        {Object.entries(options).map(([key, option]) => (
          <button 
            key={key}
            className={`w-full rounded-xl transition-all duration-200 active:scale-95 border ${
              isAnswered 
                ? userAnswer === key 
                  ? question.answer === key 
                    ? 'bg-green-600 border-green-600 shadow-lg' 
                    : 'bg-red-600 border-red-600 shadow-lg'
                  : question.answer === key 
                    ? 'bg-green-600 border-green-600 shadow-lg' 
                    : settings.darkMode 
                      ? 'bg-gray-800 border-gray-700 opacity-50' 
                      : 'bg-gray-100 border-gray-200 opacity-50'
                : settings.darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600' 
                  : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => {
              handleAnswerLocal(key);
              playSound('click');
              triggerVibration([50]);
            }}
            disabled={isAnswered}
          >
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <span className={`font-bold text-sm ${
                  isAnswered && (userAnswer === key || question.answer === key)
                    ? 'text-white'
                    : settings.darkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  {key}. {isOptionWithImage(option) ? option.text : String(option)}
                </span>
              </div>
              {isOptionWithImage(option) && option.image && (
                <div className={`mt-2 p-2 rounded-lg ${
                  isAnswered && (userAnswer === key || question.answer === key)
                    ? 'bg-white/20'
                    : settings.darkMode ? 'bg-gray-900' : 'bg-gray-100'
                }`}>
                  <img 
                    src={`/images/questionbank/${(option as OptionWithImage).image}`}
                    alt={(option as OptionWithImage).imageDescription || `选项${key}`}
                    className="w-full max-h-32 object-contain rounded"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'block';
                      }
                    }}
                  />
                  <div className="hidden text-center py-4">
                    <div className="text-2xl mb-1">🖼️</div>
                    <p className={`text-xs ${
                      isAnswered && (userAnswer === key || question.answer === key)
                        ? 'text-white/80'
                        : settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {(option as OptionWithImage).imageDescription || '图片加载失败'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    );
  };

  // 题库切换器组件
  const QuestionBankSwitcher = () => {
    if (!showBankSwitcher) return null;
    
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={(e) => {
          // 点击背景区域关闭切换器
          if (e.target === e.currentTarget) {
            playSound('click');
            setShowBankSwitcher(false);
          }
        }}
      >
        <div className={`rounded-2xl shadow-xl max-w-md w-full p-6 animate-in slide-in-from-bottom duration-300 ${
          settings.darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-xl font-bold mb-4 ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>选择学习内容</h2>
          
          <div className="space-y-3 max-h-[60vh] overflow-y-auto">
            {availableBanks.map((bank) => (
              <button
                key={bank.id}
                onClick={() => {
                  playSound('click');
                  setCurrentBankId(bank.id);
                  setShowBankSwitcher(false);
                  setCurrentScreen('home');
                  setCurrentQuestions([]);
                  setSelectedCategory('all');
                }}
                className={`w-full p-4 rounded-xl border-2 transition-all ${
                  currentBankId === bank.id 
                    ? settings.darkMode
                      ? 'border-blue-400 bg-blue-900/20' 
                      : 'border-blue-500 bg-blue-50'
                    : settings.darkMode
                      ? 'border-gray-600 hover:border-gray-500 hover:bg-gray-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md border"
                      style={{ 
                        backgroundColor: `${bank.color}15`,
                        borderColor: `${bank.color}25`,
                      }}
                    >
                      {/* 题库Logo - 读取对应的logo文件 */}
                      <img 
                        src={`/images/logos/banks/${bank.id}.png`}
                        alt={`${bank.name} Logo`}
                        className="w-6 h-6 rounded object-contain"
                        onError={(e) => {
                          // 如果图片加载失败，显示placeholder
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        className={`w-6 h-6 rounded items-center justify-center text-xs font-medium ${
                          settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`} 
                        style={{ 
                          backgroundColor: `${bank.color}40`,
                          display: 'none'
                        }}
                      >
                        LOGO
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className={`font-semibold ${
                        settings.darkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>{bank.name}</h3>
                      <p className={`text-xs ${
                        settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{bank.description}</p>
                    </div>
                  </div>
                  {currentBankId === bank.id && (
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                  )}
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {/* 管理题库按钮已隐藏 - 管理系统未实装 */}
            {false && (
              <Button
                variant="primary"
                icon={Database}
                onClick={() => {
                  playSound('click');
                  setShowBankSwitcher(false);
                  setShowBankManager(true);
                }}
                className="w-full mb-3"
              >
                管理题库
              </Button>
            )}
            
            <Button
              variant="secondary"
              onClick={() => {
                playSound('click');
                setShowBankSwitcher(false);
              }}
              className="w-full"
            >
              取消
            </Button>
          </div>
        </div>
      </div>
    );
  };

  // 改进的连击显示组件
  const StreakDisplay = () => {
    if (!settings.enableStreak || currentStreak === 0) return null;
    
    return (
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className={`transition-all duration-500 ease-out ${showStreakAnimation ? 'scale-110' : 'scale-100'}`}>
          <div className="relative">
            {currentStreak >= 5 && (
              <div className="absolute -inset-6 flex items-center justify-center opacity-30">
                <div className={`w-16 h-16 rounded-full blur-xl animate-pulse ${
                  currentStreak >= 10 ? 'bg-gradient-to-r from-red-400 to-orange-400' : 'bg-gradient-to-r from-orange-400 to-yellow-400'
                }`}></div>
              </div>
            )}
            
            <div className={`relative p-1 rounded-2xl shadow-2xl ${
              currentStreak >= 10 ? 'bg-gradient-to-r from-red-600 to-orange-600' :
              currentStreak >= 5 ? 'bg-gradient-to-r from-orange-600 to-yellow-600' :
              'bg-gradient-to-r from-yellow-600 to-green-600'
            }`}>
              <div className={`backdrop-blur rounded-xl px-4 py-3 flex items-center gap-2 ${
                settings.darkMode ? 'bg-gray-900/95' : 'bg-white/95'
              }`}>
                <Zap className={`transition-all duration-300 ${
                  currentStreak >= 10 ? 'text-red-500' :
                  currentStreak >= 5 ? 'text-orange-500' :
                  'text-yellow-500'
                } ${currentStreak >= 5 ? 'animate-pulse' : ''}`} size={20} />
                <div className="flex items-baseline gap-1">
                  <span className={`font-black text-2xl transition-all duration-300 ${
                    currentStreak >= 10 ? 'text-red-500' :
                    currentStreak >= 5 ? 'text-orange-500' :
                    'text-yellow-500'
                  }`}>{currentStreak}</span>
                  <span className={`font-bold text-xs ${
                    settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>连击!</span>
                </div>
              </div>
            </div>
            
            {currentStreak > 0 && streakTimer > 0 && (
              <div className={`absolute -bottom-6 left-4 right-4 h-1.5 rounded-full overflow-hidden shadow-lg ${
                settings.darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div 
                  className={`h-full rounded-full transition-all duration-100 ${
                    streakTimer > 60 ? 'bg-gradient-to-r from-green-400 to-green-500' :
                    streakTimer > 30 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                    'bg-gradient-to-r from-red-400 to-red-500'
                  }`}
                  style={{ width: `${streakTimer}%` }}
                />
              </div>
            )}
          </div>
        </div>
        
        {showStreakAnimation && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8">
            <div className={`px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg whitespace-nowrap ${
              currentStreak >= 10 ? 'bg-gradient-to-r from-red-500 to-orange-500' :
              currentStreak >= 5 ? 'bg-gradient-to-r from-orange-500 to-yellow-500' :
              'bg-gradient-to-r from-yellow-500 to-green-500'
            }`}
            style={{
              animation: 'bounce 0.6s ease-in-out'
            }}>
              {currentStreak >= 10 ? '🔥 火力全开!' :
               currentStreak >= 5 ? '🌟 手感火热!' :
               '⚡ 连击开始!'}
            </div>
          </div>
        )}
      </div>
    );
  };

  // 快捷键提示组件
  const KeyboardHints = () => {
    if (!settings.enableKeyboard || currentScreen !== 'quiz' || !currentQuestions[currentQuestionIndex]) return null;
    
    const question = currentQuestions[currentQuestionIndex];
    
    return (
      <div className={`mt-2 p-2 rounded-lg text-xs ${
        settings.darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
      }`}>
        <div className="flex items-center mb-1">
          <Keyboard size={12} className="mr-1" />
          <span>快捷键:</span>
        </div>
        {question.type === 'single_choice' && (
          <div>1/A, 2/B, 3/C, 4/D 选择选项</div>
        )}
        {question.type === 'true_false' && (
          <div>1/T/Y 正确, 2/F/N 错误</div>
        )}
        {(question.type === 'fill_blank' || question.type === 'short_answer') && (
          <div>空格键提交答案</div>
        )}
        {isAnswered && <div>回车键继续, ESC键退出</div>}
      </div>
    );
  };

  // 渲染当前题目
  const renderCurrentQuestion = () => {
    if (currentQuestions.length === 0) return null;
    
    const question = currentQuestions[currentQuestionIndex];
    if (!question) return null;
    
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    const isFavorite = favoriteQuestions.includes(`${currentBankId}_${question.id}`);
    
    return (
      <div 
        ref={containerRef}
        className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} ${currentStreak > 0 ? 'mt-20' : 'mt-4'} ${swipeDirection ? `transform ${swipeDirection === 'left' ? '-translate-x-2' : 'translate-x-2'}` : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <StreakDisplay />
        
        <Card className="p-3 mb-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost"
              size="sm"
              icon={XCircle}
              onClick={() => {
                if (window.confirm('确定要退出当前练习吗？')) {
                  setCurrentScreen('home');
                  playSound('click');
                  triggerVibration([100]);
                }
              }}
            >
              退出
            </Button>
            
            <div className="flex items-center gap-3">
              <div className={`flex items-center ${
                settings.darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <Heart size={14} className="text-red-500 mr-1" />
                <span className="text-xs font-medium">{quizResults.correct}/{currentQuestionIndex + 1}</span>
              </div>
              
              <button 
                onClick={() => toggleFavorite(question.id)}
                className={`p-1 rounded-lg transition-all active:scale-95 ${
                  isFavorite 
                    ? 'text-yellow-500 hover:text-yellow-600' 
                    : settings.darkMode 
                      ? 'text-gray-400 hover:text-yellow-400 hover:bg-gray-700' 
                      : 'text-gray-400 hover:text-yellow-500 hover:bg-gray-100'
                }`}
              >
                {isFavorite ? <Star size={14} fill="currentColor" /> : <StarOff size={14} />}
              </button>
              
              {!isFullscreen && (
                <button 
                  onClick={toggleFullscreen}
                  className={`p-1 rounded-lg transition-all active:scale-95 ${
                    settings.darkMode 
                      ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' 
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Maximize size={14} />
                </button>
              )}
            </div>
          </div>
        </Card>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className={`text-xs font-medium ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {Math.round(progress)}%
            </span>
          </div>
          <div className={`w-full rounded-full h-2 overflow-hidden shadow-inner ${
            settings.darkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}>
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Card className="p-4 mb-4">
          <div className="flex flex-wrap items-center gap-1.5 mb-4">
            {question.category && (
              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                settings.darkMode 
                  ? 'bg-blue-900 text-blue-200' 
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {question.category}
              </span>
            )}
            {(question.hasImage || question.images) && (
              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                settings.darkMode 
                  ? 'bg-purple-900 text-purple-200' 
                  : 'bg-purple-100 text-purple-700'
              }`}>
                含图片
              </span>
            )}
            {question.difficulty && (
              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                question.difficulty === 'easy' 
                  ? settings.darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-700' :
                question.difficulty === 'medium' 
                  ? settings.darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-700' :
                  settings.darkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-700'
              }`}>
                {question.difficulty === 'easy' ? '简单' : 
                 question.difficulty === 'medium' ? '中等' : '困难'}
              </span>
            )}
            {question.importance && (
              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                question.importance === 'high' 
                  ? settings.darkMode ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-700' :
                  settings.darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
              }`}>
                {question.importance === 'high' ? '重点' : '一般'}
              </span>
            )}
            <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
              settings.darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
            }`}>
              {question.type === 'single_choice' ? '单选' : 
               question.type === 'multiple_choice' ? '多选' :
               question.type === 'true_false' ? '判断' :
               question.type === 'fill_blank' ? '填空' :
               question.type === 'short_answer' ? '简答' : '未知'}
            </span>
          </div>
          
          <h3 className={`text-lg font-bold mb-4 leading-relaxed ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>
            {question.question}
          </h3>
          
          <ImageDisplay question={question} type="question" />
          
          {question.type === 'fill_blank' ? (
            <div className="space-y-3">
              <p className={`text-xs mb-3 ${
                settings.darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>请填写空格内容：</p>
              {Array.from({ length: question.blanks }).map((_, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <span className={`font-medium text-sm ${
                    settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>空格 {index + 1}:</span>
                  <input
                    type="text"
                    className={`p-3 border-2 rounded-xl focus:outline-none transition-all text-sm ${
                      settings.darkMode 
                        ? 'bg-gray-700 border-gray-600 focus:border-blue-400 focus:bg-gray-600 text-gray-100' 
                        : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white text-gray-900'
                    }`}
                    value={fillBlankAnswers[index] || ''}
                    onChange={(e) => {
                      const newAnswers = [...fillBlankAnswers];
                      newAnswers[index] = e.target.value;
                      setFillBlankAnswers(newAnswers);
                    }}
                    disabled={isAnswered}
                    placeholder="输入答案..."
                    maxLength={100}
                  />
                </div>
              ))}
              {!isAnswered && (
                <Button
                  variant="primary"
                  className="w-full mt-4"
                  onClick={() => {
                    handleAnswer(fillBlankAnswers);
                    playSound('click');
                    triggerVibration([50]);
                  }}
                  disabled={fillBlankAnswers.length < question.blanks || fillBlankAnswers.some(ans => !ans?.trim())}
                >
                  提交答案
                </Button>
              )}
            </div>
          ) : question.type === 'short_answer' ? (
            <div className="space-y-3">
              <p className={`text-xs mb-3 ${
                settings.darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>请在下方输入你的答案：</p>
              <textarea
                className={`w-full p-3 border-2 rounded-xl focus:outline-none transition-all resize-none text-sm ${
                  settings.darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:border-blue-400 focus:bg-gray-600 text-gray-100' 
                    : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white text-gray-900'
                }`}
                rows={4}
                value={shortAnswer}
                onChange={(e) => setShortAnswer(e.target.value)}
                disabled={isAnswered}
                placeholder="输入你的答案..."
                maxLength={500}
              />
              <div className={`text-xs text-right ${
                settings.darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {shortAnswer.length}/500
              </div>
              {!isAnswered && (
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    handleAnswer(shortAnswer);
                    playSound('click');
                    triggerVibration([50]);
                  }}
                  disabled={!shortAnswer.trim()}
                >
                  提交答案
                </Button>
              )}
            </div>
          ) : question.type === 'multiple_choice' ? (
            <div className="space-y-3">
              <p className={`text-xs mb-3 ${
                settings.darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>请选择所有正确答案（多选题）：</p>
              {question.optionsWithImages ? (
                <div className="space-y-3">
                  {Object.entries(question.optionsWithImages).map(([key, option]) => (
                    <button
                      key={key}
                      className={`w-full rounded-xl transition-all duration-200 active:scale-95 border ${
                        isAnswered
                          ? multipleAnswers.includes(key)
                            ? question.answer.includes(key)
                              ? 'bg-green-600 border-green-600 shadow-lg'
                              : 'bg-red-600 border-red-600 shadow-lg'
                            : question.answer.includes(key)
                              ? 'bg-green-600 border-green-600 shadow-lg'
                              : settings.darkMode
                                ? 'bg-gray-800 border-gray-700 opacity-50'
                                : 'bg-gray-100 border-gray-200 opacity-50'
                          : multipleAnswers.includes(key)
                            ? settings.darkMode
                              ? 'bg-blue-800 border-blue-600'
                              : 'bg-blue-100 border-blue-500'
                            : settings.darkMode
                              ? 'bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600'
                              : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => {
                        if (!isAnswered) {
                          setMultipleAnswers(prev =>
                            prev.includes(key)
                              ? prev.filter(k => k !== key)
                              : [...prev, key]
                          );
                          playSound('click');
                          triggerVibration([30]);
                        }
                      }}
                      disabled={isAnswered}
                    >
                      <div className="p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`font-bold text-sm ${
                            isAnswered && (multipleAnswers.includes(key) || question.answer.includes(key))
                              ? 'text-white'
                              : multipleAnswers.includes(key)
                                ? settings.darkMode ? 'text-white' : 'text-blue-700'
                                : settings.darkMode ? 'text-gray-100' : 'text-gray-900'
                          }`}>
                            {key}. {isOptionWithImage(option) ? option.text : String(option)}
                          </span>
                          {multipleAnswers.includes(key) && !isAnswered && (
                            <CheckCircle size={16} className={settings.darkMode ? 'text-blue-400' : 'text-blue-600'} />
                          )}
                        </div>
                        {isOptionWithImage(option) && option.image && (
                          <div className={`mt-2 p-2 rounded-lg ${
                            isAnswered && (multipleAnswers.includes(key) || question.answer.includes(key))
                              ? 'bg-white/20'
                              : settings.darkMode ? 'bg-gray-900' : 'bg-gray-100'
                          }`}>
                            <img
                              src={`/images/questionbank/${(option as OptionWithImage).image}`}
                              alt={(option as OptionWithImage).imageDescription || `选项${key}`}
                              className="w-full max-h-32 object-contain rounded"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                if (e.target.nextSibling) {
                                  e.target.nextSibling.style.display = 'block';
                                }
                              }}
                            />
                            <div className="hidden text-center py-4">
                              <div className="text-2xl mb-1">🖼️</div>
                              <p className={`text-xs ${
                                isAnswered && (multipleAnswers.includes(key) || question.answer.includes(key))
                                  ? 'text-white/80'
                                  : settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                              }`}>
                                {(option as OptionWithImage).imageDescription || '图片加载失败'}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {Object.entries(question.options || {}).map(([key, value]) => (
                    <button
                      key={key}
                      className={`w-full p-3 rounded-xl text-left transition-all duration-200 active:scale-95 text-sm ${
                        isAnswered
                          ? multipleAnswers.includes(key)
                            ? question.answer.includes(key)
                              ? 'bg-green-600 text-white shadow-lg'
                              : 'bg-red-600 text-white shadow-lg'
                            : question.answer.includes(key)
                              ? 'bg-green-600 text-white shadow-lg'
                              : settings.darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-400'
                          : multipleAnswers.includes(key)
                            ? settings.darkMode
                              ? 'bg-blue-800 border-2 border-blue-600 text-white'
                              : 'bg-blue-100 border-2 border-blue-500 text-blue-700'
                            : settings.darkMode
                              ? 'bg-gray-700 hover:bg-gray-600 border-2 border-gray-600 hover:border-gray-500 text-gray-100'
                              : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300 text-gray-900'
                      }`}
                      onClick={() => {
                        if (!isAnswered) {
                          setMultipleAnswers(prev =>
                            prev.includes(key)
                              ? prev.filter(k => k !== key)
                              : [...prev, key]
                          );
                          playSound('click');
                          triggerVibration([30]);
                        }
                      }}
                      disabled={isAnswered}
                    >
                      <span className="flex items-center justify-between">
                        <span>
                          <span className="font-bold mr-2 text-base">{key}.</span>
                          {String(value)}
                        </span>
                        {multipleAnswers.includes(key) && !isAnswered && (
                          <CheckCircle size={16} className={settings.darkMode ? 'text-blue-400' : 'text-blue-600'} />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              )}
              {!isAnswered && (
                <Button
                  variant="primary"
                  className="w-full mt-4"
                  onClick={() => {
                    handleAnswer(multipleAnswers);
                    playSound('click');
                    triggerVibration([50]);
                  }}
                  disabled={multipleAnswers.length === 0}
                >
                  提交答案 ({multipleAnswers.length} 个选项)
                </Button>
              )}
            </div>
          ) : question.type === 'true_false' ? (
            <div className="space-y-2">
              <button 
                className={`w-full p-3 rounded-xl text-left transition-all duration-200 active:scale-95 ${
                  isAnswered 
                    ? userAnswer === 'true' 
                      ? question.answer === 'true' 
                        ? 'bg-green-600 text-white shadow-lg' 
                        : 'bg-red-600 text-white shadow-lg'
                      : question.answer === 'true' 
                        ? 'bg-green-600 text-white shadow-lg' 
                        : settings.darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-400'
                    : settings.darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 border-2 border-gray-600 hover:border-gray-500 text-gray-100' 
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300 text-gray-900'
                }`}
                onClick={() => {
                  handleAnswer('true');
                  playSound('click');
                  triggerVibration([50]);
                }}
                disabled={isAnswered}
              >
                <span className="flex items-center font-medium text-sm">
                  <CheckCircle className="mr-2" size={18} />
                  正确 <span className="ml-auto text-xs opacity-70">(1/T/Y)</span>
                </span>
              </button>
              <button 
                className={`w-full p-3 rounded-xl text-left transition-all duration-200 active:scale-95 ${
                  isAnswered 
                    ? userAnswer === 'false' 
                      ? question.answer === 'false' 
                        ? 'bg-green-600 text-white shadow-lg' 
                        : 'bg-red-600 text-white shadow-lg'
                      : question.answer === 'false' 
                        ? 'bg-green-600 text-white shadow-lg' 
                        : settings.darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-400'
                    : settings.darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 border-2 border-gray-600 hover:border-gray-500 text-gray-100' 
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300 text-gray-900'
                }`}
                onClick={() => {
                  handleAnswer('false');
                  playSound('click');
                  triggerVibration([50]);
                }}
                disabled={isAnswered}
              >
                <span className="flex items-center font-medium text-sm">
                  <XCircle className="mr-2" size={18} />
                  错误 <span className="ml-auto text-xs opacity-70">(2/F/N)</span>
                </span>
              </button>
            </div>
          ) : question.type === 'single_choice' && (
            question.optionsWithImages ? (
              <OptionsWithImages 
                question={question}
                handleAnswerLocal={handleAnswer}
                isAnswered={isAnswered}
                userAnswer={userAnswer}
              />
            ) : (
              <div className="space-y-2">
                {Object.entries(question.options || {}).map(([key, value]) => (
                  <button 
                    key={key}
                    className={`w-full p-3 rounded-xl text-left transition-all duration-200 active:scale-95 text-sm ${
                      isAnswered 
                        ? userAnswer === key 
                          ? question.answer === key 
                            ? 'bg-green-600 text-white shadow-lg' 
                            : 'bg-red-600 text-white shadow-lg'
                          : question.answer === key 
                            ? 'bg-green-600 text-white shadow-lg' 
                            : settings.darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-400'
                        : settings.darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 border-2 border-gray-600 hover:border-gray-500 text-gray-100' 
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300 text-gray-900'
                    }`}
                    onClick={() => {
                      handleAnswer(key);
                      playSound('click');
                      triggerVibration([50]);
                    }}
                    disabled={isAnswered}
                  >
                    <span className="flex items-center justify-between">
                      <span>
                        <span className="font-bold mr-2 text-base">{key}.</span>
                        {String(value)}
                      </span>
                      <span className="text-xs opacity-70">
                        ({['A', 'B', 'C', 'D'].indexOf(key) + 1}/{key})
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            )
          )}
          
          {isAnswered && (
            <div className="mt-4 animate-in slide-in-from-bottom duration-300">
              <div className={`p-3 rounded-xl border ${
                userAnswer === question.answer || 
                (question.type === 'fill_blank' && fillBlankAnswers.every((ans, idx) => ans && ans.trim().toLowerCase() === question.answer[idx].toLowerCase())) ||
                (question.type === 'short_answer' && question.keywords.filter(kw => shortAnswer.toLowerCase().includes(kw.toLowerCase())).length >= question.keywords.length * 0.6) ||
                (question.type === 'multiple_choice' && multipleAnswers.sort().join('') === (Array.isArray(question.answer) ? question.answer.sort().join('') : question.answer.split('').sort().join('')))
                  ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800' 
                  : 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800'
              }`}>
                <p className="font-bold text-base mb-1">
                  {userAnswer === question.answer || 
                   (question.type === 'fill_blank' && fillBlankAnswers.every((ans, idx) => ans && ans.trim().toLowerCase() === question.answer[idx].toLowerCase())) ||
                   (question.type === 'short_answer' && question.keywords.filter(kw => shortAnswer.toLowerCase().includes(kw.toLowerCase())).length >= question.keywords.length * 0.6) ||
                   (question.type === 'multiple_choice' && multipleAnswers.sort().join('') === (Array.isArray(question.answer) ? question.answer.sort().join('') : question.answer.split('').sort().join('')))
                    ? '✅ 回答正确！' 
                    : '❌ 回答错误'}
                </p>
                {(userAnswer !== question.answer && 
                  !(question.type === 'fill_blank' && fillBlankAnswers.every((ans, idx) => ans && ans.trim().toLowerCase() === question.answer[idx].toLowerCase())) &&
                  !(question.type === 'short_answer' && question.keywords.filter(kw => shortAnswer.toLowerCase().includes(kw.toLowerCase())).length >= question.keywords.length * 0.6) &&
                  !(question.type === 'multiple_choice' && multipleAnswers.sort().join('') === (Array.isArray(question.answer) ? question.answer.sort().join('') : question.answer.split('').sort().join('')))) && (
                  <p className="text-xs">
                    正确答案：{
                      question.type === 'fill_blank' 
                        ? question.answer.join(', ')
                        : question.type === 'short_answer'
                        ? '见参考答案'
                        : question.type === 'multiple_choice'
                        ? (Array.isArray(question.answer) ? question.answer.sort().join(', ') : question.answer.split('').sort().join(', '))
                        : question.type === 'single_choice' && question.options
                        ? `${question.answer}. ${question.options[question.answer]}` 
                        : question.type === 'single_choice' && question.optionsWithImages
                        ? `${question.answer}. ${question.optionsWithImages[question.answer]?.text || ''}`
                        : question.answer === 'true' ? '正确' : '错误'
                    }
                  </p>
                )}
                {question.type === 'short_answer' && !(question.keywords.filter(kw => shortAnswer.toLowerCase().includes(kw.toLowerCase())).length >= question.keywords.length * 0.6) && (
                  <div className={`mt-2 p-2 rounded-lg ${
                    settings.darkMode ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    <p className="text-xs font-medium mb-1">参考答案：</p>
                    <p className="text-xs">{question.answer}</p>
                  </div>
                )}
              </div>
              <Button 
                variant="primary"
                className="mt-3 w-full"
                onClick={() => {
                  handleNextQuestion();
                  playSound('click');
                  triggerVibration([50]);
                }}
              >
                {currentQuestionIndex < currentQuestions.length - 1 ? '继续 (Enter)' : '查看结果'}
              </Button>
            </div>
          )}
        </Card>
        
        <KeyboardHints />
        
        {settings.enableGestures && isAnswered && currentQuestionIndex < currentQuestions.length - 1 && (
          <div className="text-center mt-2">
            <p className={`text-xs ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>👈 左滑进入下一题</p>
          </div>
        )}
      </div>
    );
  };

  // 渲染结果页面
  const renderResultsScreen = () => {
    const accuracy = quizResults.total > 0 ? (quizResults.correct / quizResults.total * 100) : 0;
    
    return (
      <div className="animate-in fade-in duration-500">
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
            accuracy >= 80 ? 'bg-green-600' : accuracy >= 60 ? 'bg-yellow-600' : 'bg-red-600'
          }`}>
            {accuracy >= 80 ? <Trophy size={40} className="text-white" /> : 
             accuracy >= 60 ? <Award size={40} className="text-white" /> :
             <Target size={40} className="text-white" />}
          </div>
          
          <h2 className={`text-2xl font-bold mb-2 ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>
            {accuracy >= 80 ? '表现出色！' : accuracy >= 60 ? '继续努力！' : '再接再厉！'}
          </h2>
          
          <p className={`text-4xl font-black mb-1 ${
            accuracy >= 80 ? 'text-green-600' : accuracy >= 60 ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {Math.round(accuracy)}%
          </p>
          
          <p className={`text-sm ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            正确 {quizResults.correct} / {quizResults.total} 题
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 text-center">
            <Clock className={`mx-auto mb-2 ${
              settings.darkMode ? 'text-blue-400' : 'text-blue-600'
            }`} size={24} />
            <p className={`text-xs mb-1 ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>总用时</p>
            <p className={`font-bold ${
              settings.darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {Math.floor((Date.now() - sessionStartTime) / 1000)}秒
            </p>
          </Card>
          
          <Card className="p-4 text-center">
            <Zap className={`mx-auto mb-2 ${
              settings.darkMode ? 'text-yellow-400' : 'text-yellow-600'
            }`} size={24} />
            <p className={`text-xs mb-1 ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>最高连击</p>
            <p className={`font-bold ${
              settings.darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {Math.max(...quizResults.questions.map((_, i) => {
                let streak = 0;
                for (let j = 0; j <= i; j++) {
                  if (quizResults.questions[j].isCorrect) {
                    streak++;
                  } else {
                    streak = 0;
                  }
                }
                return streak;
              }), 0)}
            </p>
          </Card>
        </div>

        <Card className="p-4 mb-6">
          <h3 className={`font-bold mb-3 ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>答题详情</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {quizResults.questions.map((q, index) => (
              <div key={index} className={`flex items-center justify-between p-2 rounded-lg ${
                settings.darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <div className="flex items-center">
                  {q.isCorrect ? (
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                  ) : (
                    <XCircle className="text-red-500 mr-2" size={16} />
                  )}
                  <span className={`text-sm ${
                    settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>第 {index + 1} 题</span>
                </div>
                <span className={`text-xs ${
                  settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {Math.round(q.answerTime / 1000)}秒
                </span>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-2">
          <Button 
            variant="primary"
            className="w-full"
            onClick={() => {
              setCurrentScreen('home');
              playSound('click');
            }}
          >
            返回主页
          </Button>
          
          <Button 
            variant="secondary"
            className="w-full"
            onClick={() => {
              startQuizMode('random');
              playSound('click');
            }}
          >
            再来一次
          </Button>
        </div>
      </div>
    );
  };

  // 渲染收藏页面
  const renderFavoritesScreen = () => {
    if (favoriteQuestions.length === 0) {
      return (
        <div className="text-center py-16">
          <Star size={48} className={`mx-auto mb-4 ${
            settings.darkMode ? 'text-gray-600' : 'text-gray-400'
          }`} />
          <p className={`font-medium ${
            settings.darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>收藏夹为空</p>
          <p className={`text-sm mt-2 ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>答题时点击星标收藏重要题目</p>
        </div>
      );
    }
    
    return (
      <div className="animate-in fade-in duration-500">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost"
            icon={ChevronLeft}
            onClick={() => setCurrentScreen('home')}
            className="mr-3"
          />
          <h2 className={`text-xl font-bold ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>收藏题目</h2>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center mb-4">
            <p className={`text-sm ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>共 {favoriteQuestions.length} 道收藏题目</p>
            <Button 
              variant="ghost"
              size="sm"
              onClick={() => {
                startQuizMode('favorites');
                playSound('click');
              }}
            >
              开始练习
            </Button>
          </div>
          
          {favoriteQuestions.map((favoriteKey, index) => {
            const questionId = parseInt(favoriteKey.split('_')[1]);
            const question = loadedQuestionBank.find(q => q.id === questionId);
            if (!question) return null;
            
            return (
              <Card 
                key={favoriteKey} 
                className="p-4 transition-all duration-200 animate-slideUp"
                style={{ animationDelay: `${index * 0.05}s` }}
                hoverable
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className={`font-medium mb-2 text-sm ${
                      settings.darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>{question.question}</p>
                    <p className={`text-xs mb-2 ${
                      settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      正确答案: {
                        question.type === 'single_choice' && question.options
                          ? `${question.answer}. ${question.options[question.answer]}` 
                          : question.type === 'single_choice' && question.optionsWithImages
                          ? `${question.answer}. ${question.optionsWithImages[question.answer]?.text || ''}`
                          : question.type === 'true_false'
                          ? question.answer === 'true' ? '正确' : '错误'
                          : question.type === 'fill_blank'
                          ? question.answer.join(', ')
                          : question.type === 'short_answer'
                          ? '(见参考答案)'
                          : question.answer
                      }
                    </p>
                    <div className="flex gap-2 mt-2">
                      {question.category && (
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          settings.darkMode 
                            ? 'bg-blue-900 text-blue-200' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {question.category}
                        </span>
                      )}
                      {question.difficulty && (
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          question.difficulty === 'easy' 
                            ? settings.darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-700' :
                          question.difficulty === 'medium' 
                            ? settings.darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-700' :
                            settings.darkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-700'
                        }`}>
                          {question.difficulty === 'easy' ? '简单' : 
                           question.difficulty === 'medium' ? '中等' : '困难'}
                        </span>
                      )}
                    </div>
                  </div>
                  <button 
                    className={`ml-4 p-2 rounded-xl transition-all duration-200 active:scale-95 ${
                      settings.darkMode 
                        ? 'text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/20' 
                        : 'text-yellow-500 hover:text-yellow-600 hover:bg-yellow-50'
                    }`}
                    onClick={() => toggleFavorite(question.id)}
                  >
                    <Star size={16} fill="currentColor" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };

  // 渲染分析页面
  const renderAnalysisScreen = () => {
    const analysisData = getAnalysisData();
    
    if (!analysisData) {
      return (
        <div className="text-center py-16">
          <Brain size={48} className={`mx-auto mb-4 ${
            settings.darkMode ? 'text-gray-600' : 'text-gray-400'
          }`} />
          <p className={`font-medium ${
            settings.darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>暂无学习数据</p>
          <p className={`text-sm mt-2 ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>完成一些练习后再来查看分析吧！</p>
        </div>
      );
    }
    
    return (
      <div className="animate-in fade-in duration-500">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost"
            icon={ChevronLeft}
            onClick={() => setCurrentScreen('home')}
            className="mr-3"
          />
          <h2 className={`text-xl font-bold ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>学习分析</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className={`text-white rounded-2xl p-4 text-center bg-gradient-to-br from-blue-600 to-blue-700`}>
            <div className="text-2xl font-bold">{analysisData.totalSessions}</div>
            <div className="text-sm opacity-90">学习次数</div>
          </div>
          <div className={`text-white rounded-2xl p-4 text-center bg-gradient-to-br from-green-600 to-green-700`}>
            <div className="text-2xl font-bold">{analysisData.avgAccuracy}%</div>
            <div className="text-sm opacity-90">平均正确率</div>
          </div>
          <div className={`text-white rounded-2xl p-4 text-center bg-gradient-to-br from-purple-600 to-purple-700`}>
            <div className="text-2xl font-bold">{analysisData.avgTime}s</div>
            <div className="text-sm opacity-90">平均用时</div>
          </div>
          <div className={`text-white rounded-2xl p-4 text-center bg-gradient-to-br from-orange-600 to-orange-700`}>
            <div className="text-2xl font-bold">{maxStreak}</div>
            <div className="text-sm opacity-90">最高连击</div>
          </div>
        </div>
        
        {Object.keys(analysisData.difficultyStats).length > 0 && (
          <Card className="p-4 mb-6">
            <h3 className={`font-bold mb-4 flex items-center ${
              settings.darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              <Target className="mr-2" size={18} />
              难度表现
            </h3>
            <div className="space-y-3">
              {Object.entries(analysisData.difficultyStats).map(([difficulty, stats]) => {
                const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                return (
                  <div key={difficulty} className="flex items-center">
                    <span className={`w-12 text-xs font-medium ${
                      difficulty === 'easy' 
                        ? settings.darkMode ? 'text-green-400' : 'text-green-600' :
                      difficulty === 'medium' 
                        ? settings.darkMode ? 'text-yellow-400' : 'text-yellow-600' :
                        settings.darkMode ? 'text-red-400' : 'text-red-600'
                    }`}>
                      {difficulty === 'easy' ? '简单' : 
                       difficulty === 'medium' ? '中等' : '困难'}
                    </span>
                    <div className="flex-1 mx-3">
                      <div className={`w-full rounded-full h-2 ${
                        settings.darkMode ? 'bg-gray-700' : 'bg-gray-100'
                      }`}>
                        <div 
                          className={`h-full rounded-full ${
                            accuracy >= 80 ? 'bg-green-500' : 
                            accuracy >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${accuracy}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-medium w-12 text-right">{accuracy}%</span>
                  </div>
                );
              })}
            </div>
          </Card>
        )}
        
        {analysisData.categoryPerformance.length > 0 && (
          <Card className="p-4 mb-6">
            <h3 className={`font-bold mb-4 flex items-center ${
              settings.darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              <BarChart3 className="mr-2" size={18} />
              分类掌握度
            </h3>
            <div className="space-y-3">
              {analysisData.categoryPerformance.map(cat => (
                <div key={cat.category} className="flex items-center">
                  <span className={`w-16 text-xs truncate ${
                    settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{cat.category}</span>
                  <div className="flex-1 mx-3">
                    <div className={`w-full rounded-full h-2 ${
                      settings.darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                        style={{ width: `${cat.mastery}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium w-12 text-right">{cat.mastery}%</span>
                </div>
              ))}
            </div>
          </Card>
        )}
        
        <Card className="p-4">
          <h3 className={`font-bold mb-4 flex items-center ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>
            <Download className="mr-2" size={18} />
            导出数据
          </h3>
          <div className="grid grid-cols-1 gap-2">
            <Button 
              variant="secondary"
              size="sm"
              icon={FileText}
              onClick={() => exportData('wrongQuestions')}
            >
              导出错题集 (JSON)
            </Button>
            <Button 
              variant="secondary"
              size="sm"
              icon={Star}
              onClick={() => exportData('favorites')}
            >
              导出收藏题目 (JSON)
            </Button>
            <Button 
              variant="secondary"
              size="sm"
              icon={PieChart}
              onClick={() => exportData('studyReport')}
            >
              导出学习报告 (JSON)
            </Button>
            <Button 
              variant="secondary"
              size="sm"
              icon={Calendar}
              onClick={() => exportData('csv')}
            >
              导出学习数据 (CSV)
            </Button>
          </div>
        </Card>
      </div>
    );
  };

  // 渲染设置页面 - 添加长按功能
  const renderSettingsScreen = () => {
    return (
      <div className="animate-in fade-in duration-500">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost"
            icon={ChevronLeft}
            onClick={() => setCurrentScreen('home')}
            className="mr-3"
          />
          <h2 className={`text-xl font-bold ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>设置</h2>
        </div>
        
        <div className="space-y-4">
          <Card className="p-4">
            <h3 className={`font-bold mb-4 text-base ${
              settings.darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>主题设置</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {settings.darkMode ? <Moon size={20} className="mr-3 text-blue-400" /> : <Sun size={20} className="mr-3 text-yellow-500" />}
                <div>
                  <p className={`font-medium text-sm ${
                    settings.darkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>深色模式</p>
                  <p className={`text-xs ${
                    settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>护眼舒适的深色主题</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={settings.darkMode}
                  onChange={(e) => {
                    setSettings({...settings, darkMode: e.target.checked});
                    playSound('click');
                  }}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </Card>
          
          <Card className="p-4">
            <h3 className={`font-bold mb-4 text-base ${
              settings.darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>连击设置</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-medium text-sm ${
                    settings.darkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>启用连击效果</p>
                  <p className={`text-xs ${
                    settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>开启后会显示连击动画和计时条</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={settings.enableStreak}
                    onChange={(e) => {
                      setSettings({...settings, enableStreak: e.target.checked});
                      playSound('click');
                    }}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </Card>
          
          <Card className="p-4">
            <h3 className={`font-bold mb-4 text-base flex items-center ${
              settings.darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              <Smartphone className="mr-2" size={18} />
              移动端功能
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-medium text-sm ${
                    settings.darkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>振动反馈</p>
                  <p className={`text-xs ${
                    settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>答题时提供振动反馈</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={settings.enableVibration}
                    onChange={(e) => {
                      setSettings({...settings, enableVibration: e.target.checked});
                      playSound('click');
                    }}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-medium text-sm ${
                    settings.darkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>手势操作</p>
                  <p className={`text-xs ${
                    settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>滑动切换题目</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={settings.enableGestures}
                    onChange={(e) => {
                      setSettings({...settings, enableGestures: e.target.checked});
                      playSound('click');
                    }}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </Card>
          
          <Card className="p-4">
            <h3 className={`font-bold mb-4 text-base flex items-center ${
              settings.darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {settings.enableSound ? <Volume2 className="mr-2" size={18} /> : <VolumeX className="mr-2" size={18} />}
              音效设置
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-medium text-sm ${
                    settings.darkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>音效反馈</p>
                  <p className={`text-xs ${
                    settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>答题时播放提示音</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={settings.enableSound}
                    onChange={(e) => {
                      setSettings({...settings, enableSound: e.target.checked});
                      playSound('click');
                    }}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              {settings.enableSound && (
                <div className="space-y-2">
                  <Button 
                    variant="success"
                    size="sm"
                    className="w-full"
                    onClick={() => playSound('correct')}
                  >
                    🎵 测试正确音效
                  </Button>
                  <Button 
                    variant="danger"
                    size="sm"
                    className="w-full"
                    onClick={() => playSound('incorrect')}
                  >
                    🔊 测试错误音效
                  </Button>
                </div>
              )}
            </div>
          </Card>
          
          <Card className="p-4">
            <h3 className={`font-bold mb-4 text-base flex items-center ${
              settings.darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              <Keyboard className="mr-2" size={18} />
              键盘设置
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-medium text-sm ${
                    settings.darkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>键盘快捷键</p>
                  <p className={`text-xs ${
                    settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>启用键盘快速答题</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={settings.enableKeyboard}
                    onChange={(e) => {
                      setSettings({...settings, enableKeyboard: e.target.checked});
                      playSound('click');
                    }}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              {settings.enableKeyboard && (
                <div className={`p-3 rounded-lg text-xs ${
                  settings.darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-600'
                }`}>
                  <p className="font-medium mb-2">快捷键说明：</p>
                  <div className="space-y-1">
                    <p>• 单选题：1/A, 2/B, 3/C, 4/D</p>
                    <p>• 判断题：1/T/Y (正确), 2/F/N (错误)</p>
                    <p>• 填空/简答：空格键提交</p>
                    <p>• 通用：回车继续，ESC退出</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
          
          <Card className="p-4">
            <h3 
              className={`font-bold mb-4 text-base select-none cursor-default ${
                settings.darkMode ? 'text-gray-100' : 'text-gray-800'
              } ${isPressing ? 'animate-pulse' : ''}`}
              onMouseDown={() => {
                const timer = setTimeout(() => {
                  playSound('click');
                  triggerVibration([100, 50, 100, 50, 100]);
                  setShowBankManager(true);
                }, 3000);
                setPressTimer(timer);
                setIsPressing(true);
              }}
              onMouseUp={() => {
                if (pressTimer) {
                  clearTimeout(pressTimer);
                  setPressTimer(null);
                }
                setIsPressing(false);
              }}
              onMouseLeave={() => {
                if (pressTimer) {
                  clearTimeout(pressTimer);
                  setPressTimer(null);
                }
                setIsPressing(false);
              }}
              onTouchStart={() => {
                const timer = setTimeout(() => {
                  playSound('click');
                  triggerVibration([100, 50, 100, 50, 100]);
                  setShowBankManager(true);
                }, 3000);
                setPressTimer(timer);
                setIsPressing(true);
              }}
              onTouchEnd={() => {
                if (pressTimer) {
                  clearTimeout(pressTimer);
                  setPressTimer(null);
                }
                setIsPressing(false);
              }}
            >统计数据</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${
                  settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>历史最高连击</span>
                <div className="flex items-center gap-2">
                  <span className={`font-bold text-lg ${
                    settings.darkMode ? 'text-orange-400' : 'text-orange-600'
                  }`}>{maxStreak}</span>
                  <Zap className={`${
                    settings.darkMode ? 'text-orange-400' : 'text-orange-500'
                  }`} size={16} />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${
                  settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>错题数量</span>
                <span className={`font-bold text-lg ${
                  settings.darkMode ? 'text-red-400' : 'text-red-600'
                }`}>{wrongQuestions.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${
                  settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>收藏题目</span>
                <span className={`font-bold text-lg ${
                  settings.darkMode ? 'text-yellow-400' : 'text-yellow-600'
                }`}>{favoriteQuestions.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${
                  settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>学习次数</span>
                <span className={`font-bold text-lg ${
                  settings.darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>{studyHistory.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${
                  settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>学习连续天数</span>
                <span className={`font-bold text-lg ${
                  settings.darkMode ? 'text-green-400' : 'text-green-600'
                }`}>{studyStreak}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // 渲染学习计划页面
  const renderStudyPlanScreen = () => {
    const progressPercentage = Math.min((todayProgress / dailyGoal) * 100, 100);
    const isGoalReached = todayProgress >= dailyGoal;
    
    return (
      <div className="animate-in fade-in duration-500">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost"
            icon={ChevronLeft}
            onClick={() => setCurrentScreen('home')}
            className="mr-3"
          />
          <h2 className={`text-xl font-bold ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>学习计划</h2>
        </div>
        
        {/* 优化后的进度卡片 - 使用主视觉风格 */}
        <div className={`p-4 md:p-6 mb-4 md:mb-6 rounded-2xl transition-all duration-200 ${
          isGoalReached 
            ? settings.darkMode 
              ? 'bg-gray-800 border-2 border-green-500' 
              : 'bg-green-50 border-2 border-green-200'
            : settings.darkMode 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-100 shadow-sm'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Calendar size={20} style={{ color: colors.primary }} />
              <h3 className={`text-lg font-bold ${
                settings.darkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>今日进度</h3>
            </div>
            {isGoalReached && <Trophy size={24} style={{ color: colors.accent }} />}
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-3">
              <span className={`text-sm font-medium ${
                settings.darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {todayProgress} / {dailyGoal} 题
              </span>
              <span className={`text-xl font-bold ${
                isGoalReached 
                  ? settings.darkMode ? 'text-green-400' : 'text-green-600'
                  : settings.darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className={`w-full rounded-full h-2 overflow-hidden ${
              settings.darkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}>
              <div 
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{ 
                  width: `${progressPercentage}%`,
                  backgroundColor: isGoalReached ? colors.success : colors.primary
                }}
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {isGoalReached ? (
              <>
                <CheckCircle size={16} style={{ color: colors.success }} />
                <p className={`text-sm font-medium ${
                  settings.darkMode ? 'text-green-400' : 'text-green-600'
                }`}>🎉 今日目标已完成！继续保持！</p>
              </>
            ) : (
              <>
                <Target size={16} style={{ color: colors.primary }} />
                <p className={`text-sm ${
                  settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  还需 {dailyGoal - todayProgress} 道题完成今日目标
                </p>
              </>
            )}
          </div>
        </div>
        
        {/* 优化后的统计卡片 */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          <Card className="p-3 md:p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Flame size={18} style={{ color: colors.accent }} />
            </div>
            <div className={`text-xl md:text-2xl font-bold mb-1`} style={{ color: colors.accent }}>
              {studyStreak}
            </div>
            <div className={`text-xs ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>连续学习天数</div>
          </Card>
          
          <Card className="p-3 md:p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <BookOpen size={18} style={{ color: colors.primary }} />
            </div>
            <div className={`text-xl md:text-2xl font-bold mb-1`} style={{ color: colors.primary }}>
              {studyHistory.length}
            </div>
            <div className={`text-xs ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>总学习次数</div>
          </Card>
        </div>
        
        {/* 学习分析功能 */}
        <Card className="p-4 mb-6">
          <h3 className={`font-bold mb-4 ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>学习分析</h3>
          
          <div className="space-y-3">
            <p className={`text-sm ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>查看详细的学习统计和进步分析</p>
            
            <Button 
              variant="primary"
              icon={BarChart3}
              onClick={() => {
                setShowAnalytics(true);
                playSound('click');
              }}
              className="w-full"
            >
              查看学习分析报告
            </Button>
          </div>
        </Card>
        
        <Card className="p-4 mb-6">
          <h3 className={`font-bold mb-4 ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>设置每日目标</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Target size={16} style={{ color: colors.primary }} />
                <span className={`font-medium ${
                  settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>每日题目数量</span>
              </div>
              <span className={`text-xl font-bold`} style={{ color: colors.primary }}>
                {dailyGoal}
              </span>
            </div>
            
            <input 
              type="range"
              min="5"
              max="100"
              step="5"
              value={dailyGoal}
              onChange={(e) => {
                const newGoal = parseInt(e.target.value);
                setDailyGoal(newGoal);
                StorageHelper.setItem('dailyGoal', newGoal);
              }}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${colors.primary} 0%, ${colors.primary} ${(dailyGoal/100)*100}%, ${settings.darkMode ? colors.borderHover : colors.borderLight} ${(dailyGoal/100)*100}%, ${settings.darkMode ? colors.borderHover : colors.borderLight} 100%)`
              }}
            />
            
            <div className={`flex justify-between text-xs ${
              settings.darkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              <span>5题</span>
              <span>100题</span>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <h3 className={`font-bold mb-4 ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>快速开始</h3>
          
          <div className="grid grid-cols-1 gap-2">
            <Button 
              variant="success"
              icon={Play}
              onClick={() => {
                const remaining = Math.max(0, dailyGoal - todayProgress);
                if (remaining > 0) {
                  setQuizAmount(remaining);
                  startQuizMode('random');
                } else {
                  setQuizAmount(10);
                  startQuizMode('random');
                }
                playSound('click');
              }}
              className="whitespace-nowrap"
            >
              {todayProgress >= dailyGoal ? '额外练习' : `完成今日目标 (${dailyGoal - todayProgress}题)`}
            </Button>
            
            <Button 
              variant="secondary"
              icon={Shuffle}
              onClick={() => {
                setQuizAmount(10);
                startQuizMode('random');
                playSound('click');
              }}
              className="whitespace-nowrap"
            >
              随机练习 10 题
            </Button>
          </div>
        </Card>
      </div>
    );
  };

  // 渲染主页面
  const renderHomeScreen = () => {
    const currentBank = availableBanks.find(b => b.id === currentBankId);
    const filteredBank = getFilteredQuestionBank();
    const maxQuestions = filteredBank.length;
    const progressPercentage = Math.min((todayProgress / dailyGoal) * 100, 100);
    
    if (!currentBank) {
      return (
        <div className="text-center py-16">
          <Database size={48} className={`mx-auto mb-4 ${
            settings.darkMode ? 'text-gray-600' : 'text-gray-400'
          }`} />
          <p className={`font-medium mb-4 ${
            settings.darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>未找到题库</p>
          <button 
            onClick={() => setShowBankManager(true)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center"
          >
            <Plus size={18} className="mr-2" />
            创建或导入题库
          </button>
        </div>
      );
    }
    
    return (
      <div className="animate-in fade-in duration-500">
        {/* 优化后的题库卡片 - 支持收起/展开 */}
        <div className={`mb-4 md:mb-6 transition-all duration-300 ${
          bankCardCollapsed ? 'mb-2' : ''
        }`}>
          <div className={`${
            bankCardCollapsed ? 'p-3' : 'p-4 md:p-5'
          } rounded-2xl transition-all duration-300 ${
            settings.darkMode 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-100 shadow-sm'
          }`}>
            <div className="flex items-center justify-between">
              <div className={`flex items-center ${
                bankCardCollapsed ? 'space-x-2' : 'space-x-3 md:space-x-4'
              }`}>
                <div 
                  className={`${
                    bankCardCollapsed ? 'w-8 h-8' : 'w-10 h-10 md:w-12 md:h-12'
                  } rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm border transition-all duration-300`}
                  style={{ 
                    backgroundColor: `${currentBank.color}15`,
                    borderColor: `${currentBank.color}25`,
                  }}
                >
                  <img 
                    src={`/images/logos/banks/${currentBank.id}.png`}
                    alt={`${currentBank.name} Logo`}
                    className={`${
                      bankCardCollapsed ? 'w-5 h-5' : 'w-6 h-6 md:w-8 md:h-8'
                    } rounded-lg object-contain transition-all duration-300`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className={`${
                      bankCardCollapsed ? 'w-5 h-5 text-xs' : 'w-6 h-6 md:w-8 md:h-8 text-xs md:text-sm'
                    } rounded-lg items-center justify-center font-medium transition-all duration-300 ${
                      settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} 
                    style={{ 
                      backgroundColor: `${currentBank.color}40`,
                      display: 'none'
                    }}
                  >
                    LOGO
                  </div>
                </div>
                <div className={`${bankCardCollapsed ? 'hidden md:block' : ''}`}>
                  <p className={`text-xs font-medium ${
                    settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>当前题库</p>
                  <h2 className={`font-bold ${
                    bankCardCollapsed ? 'text-sm md:text-base' : 'text-base md:text-lg'
                  } leading-tight transition-all duration-300 ${
                    settings.darkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}>{currentBank.name}</h2>
                </div>
                {bankCardCollapsed && (
                  <div className="block md:hidden">
                    <h2 className={`font-semibold text-sm ${
                      settings.darkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>{currentBank.name.split(' ')[0]}</h2>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                {!bankCardCollapsed && (
                  <button
                    onClick={() => {
                      playSound('click');
                      setShowBankSwitcher(true);
                    }}
                    className={`px-3 md:px-4 py-2 rounded-xl md:rounded-2xl font-medium text-xs md:text-sm transition-all duration-200 active:scale-95 whitespace-nowrap ${
                      settings.darkMode
                        ? 'bg-gray-700 text-gray-200 hover:bg-gray-600 border border-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    切换题库
                  </button>
                )}
                <button
                  onClick={() => {
                    setBankCardCollapsed(!bankCardCollapsed);
                    playSound('click');
                  }}
                  className={`p-2 rounded-xl transition-all duration-200 active:scale-95 ${
                    settings.darkMode
                      ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                  title={bankCardCollapsed ? '展开题库信息' : '收起题库信息'}
                >
                  <ChevronLeft 
                    size={16} 
                    className={`transition-transform duration-300 ${
                      bankCardCollapsed ? 'rotate-180' : 'rotate-90'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-3xl mb-4 ${
            settings.darkMode 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-100 shadow-sm'
          }`}>
            {/* 主公司Logo - 将company-logo.png放在public/images/logos/目录下 */}
            <img 
              src="/images/logos/company-logo.png"
              alt="赛育达Logo"
              className="w-10 h-10 rounded-2xl object-contain"
              onError={(e) => {
                // 如果图片加载失败，显示placeholder
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div 
              className={`w-10 h-10 rounded-2xl items-center justify-center text-xs font-medium ${
                settings.darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'
              }`}
              style={{ display: 'none' }}
            >
              LOGO
            </div>
          </div>
          <h1 className={`text-2xl font-bold mb-2 ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            赛育达学习系统
          </h1>
          <p className={`text-sm ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>每天练习拿证无忧</p>
        </div>

        <div className={`rounded-2xl p-5 mb-6 transition-all duration-200 ${
          progressPercentage >= 100 
            ? settings.darkMode
              ? 'bg-green-900/30 border border-green-700 text-green-100'
              : 'bg-green-50 border border-green-200 text-green-900'
            : settings.darkMode 
              ? 'bg-gray-800 border border-gray-700 text-gray-100' 
              : 'bg-white border border-gray-100 text-gray-900 shadow-sm'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <CalendarDays size={20} className="mr-2" />
              <span className="font-bold">今日进度</span>
            </div>
            {progressPercentage >= 100 && <Trophy size={20} className={settings.darkMode ? 'text-yellow-400' : 'text-yellow-500'} />}
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm opacity-90">
                {todayProgress} / {dailyGoal} 题
              </span>
              <span className="font-bold">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className={`w-full rounded-full h-3 overflow-hidden ${
              settings.darkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <div 
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{ 
                  width: `${progressPercentage}%`,
                  backgroundColor: progressPercentage >= 100 ? '#58cc02' : '#1cb0f6'
                }}
              />
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-xs opacity-80">
              连续学习 {studyStreak} 天
            </span>
            <button 
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all active:scale-95 ${
                settings.darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setCurrentScreen('studyPlan')}
            >
              学习计划
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 mb-6">
          <div className={`p-3 text-center rounded-2xl transition-all duration-200 ${
            settings.darkMode 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-100 shadow-sm'
          }`}>
            <div className={`text-xl font-bold ${
              settings.darkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>{loadedQuestionBank.length}</div>
            <div className={`text-xs font-medium ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>题目</div>
          </div>
          <div className={`p-3 text-center rounded-2xl transition-all duration-200 ${
            settings.darkMode 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-100 shadow-sm'
          }`}>
            <div className={`text-xl font-bold ${
              settings.darkMode ? 'text-red-400' : 'text-red-500'
            }`}>{wrongQuestions.length}</div>
            <div className={`text-xs font-medium ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>错题</div>
          </div>
          <button 
            className={`p-3 text-center rounded-2xl transition-all duration-200 active:scale-95 ${
              settings.darkMode 
                ? 'bg-gray-800 border border-gray-700 hover:bg-gray-750' 
                : 'bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'
            }`}
            onClick={() => setCurrentScreen('favorites')}
          >
            <Star size={18} className={`mx-auto mb-1 ${
              settings.darkMode ? 'text-yellow-400' : 'text-yellow-500'
            }`} />
            <div className={`text-xs font-medium ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>收藏</div>
          </button>
          <button 
            className={`p-3 text-center rounded-2xl transition-all duration-200 active:scale-95 ${
              settings.darkMode 
                ? 'bg-gray-800 border border-gray-700 hover:bg-gray-750' 
                : 'bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'
            }`}
            onClick={() => setCurrentScreen('analysis')}
          >
            <PieChart size={18} className={`mx-auto mb-1 ${
              settings.darkMode ? 'text-blue-400' : 'text-blue-500'
            }`} />
            <div className={`text-xs font-medium ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>统计</div>
          </button>
          <button 
            className={`p-3 text-center rounded-2xl transition-all duration-200 active:scale-95 ${
              settings.darkMode 
                ? 'bg-gray-800 border border-gray-700 hover:bg-gray-750' 
                : 'bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'
            }`}
            onClick={() => setCurrentScreen('settings')}
          >
            <Settings size={18} className={`mx-auto mb-1 ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`} />
            <div className={`text-xs font-medium ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>设置</div>
          </button>
        </div>

        <div className={`p-4 mb-4 rounded-2xl transition-all duration-200 ${
          settings.darkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-100 shadow-sm'
        }`}>
          <div className="flex items-center mb-3">
            <Filter size={16} className={`mr-2 ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`} />
            <span className={`font-medium text-sm ${
              settings.darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>选择分类</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-2xl text-xs font-medium transition-all active:scale-95 ${
                selectedCategory === 'all' 
                  ? 'bg-green-500 text-white shadow-sm' 
                  : settings.darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
              onClick={() => {
                setSelectedCategory('all');
                playSound('click');
              }}
            >
              全部 ({loadedQuestionBank.length})
            </button>
            {Object.entries(questionStats).map(([category, stats]) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-2xl text-xs font-medium transition-all active:scale-95 ${
                  selectedCategory === category 
                    ? 'bg-green-500 text-white shadow-sm' 
                    : settings.darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  playSound('click');
                }}
              >
                {category} ({stats.total})
              </button>
            ))}
          </div>
        </div>

        <div className={`p-4 mb-6 rounded-2xl transition-all duration-200 ${
          settings.darkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-100 shadow-sm'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <span className={`font-medium text-sm ${
              settings.darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>题目数量</span>
            <span className={`text-xl font-bold ${
              settings.darkMode ? 'text-green-400' : 'text-green-600'
            }`}>{Math.min(quizAmount, maxQuestions)}</span>
          </div>
          <input 
            type="range"
            min="1"
            max={Math.max(1, maxQuestions)}
            value={Math.min(quizAmount, maxQuestions)}
            onChange={(e) => setQuizAmount(parseInt(e.target.value))}
            className="w-full h-3 rounded-full appearance-none cursor-pointer"
            style={{
              background: maxQuestions > 0 
                ? `linear-gradient(to right, #58cc02 0%, #58cc02 ${(Math.min(quizAmount, maxQuestions)/maxQuestions)*100}%, ${settings.darkMode ? '#374151' : '#e5e7eb'} ${(Math.min(quizAmount, maxQuestions)/maxQuestions)*100}%, ${settings.darkMode ? '#374151' : '#e5e7eb'} 100%)`
                : settings.darkMode ? '#374151' : '#e5e7eb'
            }}
            disabled={maxQuestions === 0}
          />
        </div>

        {/* 优化后的按钮布局 - 响应式设计 */}
        <div className="space-y-2 md:space-y-3">
          <Button 
            variant="primary"
            icon={BookOpen}
            iconPosition="left"
            className="w-full"
            onClick={() => {
              if (maxQuestions > 0) {
                startQuizMode('sequential');
                playSound('click');
                triggerVibration([50]);
              }
            }}
            disabled={maxQuestions === 0}
          >
            <div className="flex-1 text-left min-w-0">
              <div className="font-bold text-sm md:text-base">顺序练习</div>
              <div className="text-xs opacity-90 truncate">按题库顺序练习</div>
            </div>
            <ChevronLeft size={16} className="rotate-180 ml-2 flex-shrink-0" />
          </Button>

          <Button 
            variant="primary"
            icon={Shuffle}
            iconPosition="left"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
            onClick={() => {
              if (maxQuestions > 0) {
                startQuizMode('random');
                playSound('click');
                triggerVibration([50]);
              }
            }}
            disabled={maxQuestions === 0}
          >
            <div className="flex-1 text-left min-w-0">
              <div className="font-bold text-sm md:text-base">随机练习</div>
              <div className="text-xs opacity-90 truncate">随机抽取题目练习</div>
            </div>
            <ChevronLeft size={16} className="rotate-180 ml-2 flex-shrink-0" />
          </Button>

          <Button 
            variant="primary"
            icon={Clock}
            iconPosition="left"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
            onClick={() => {
              if (wrongQuestions.length > 0) {
                startQuizMode('wrong');
                playSound('click');
                triggerVibration([50]);
              }
            }}
            disabled={wrongQuestions.length === 0}
          >
            <div className="flex-1 text-left min-w-0">
              <div className="font-bold text-sm md:text-base">错题练习</div>
              <div className="text-xs opacity-90 truncate">共 {wrongQuestions.length} 道错题</div>
            </div>
            <ChevronLeft size={16} className="rotate-180 ml-2 flex-shrink-0" />
          </Button>

          <Button 
            variant="primary"
            icon={Star}
            iconPosition="left"
            className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
            onClick={() => {
              if (favoriteQuestions.length > 0) {
                startQuizMode('favorites');
                playSound('click');
                triggerVibration([50]);
              }
            }}
            disabled={favoriteQuestions.length === 0}
          >
            <div className="flex-1 text-left min-w-0">
              <div className="font-bold text-sm md:text-base">收藏练习</div>
              <div className="text-xs opacity-90 truncate">共 {favoriteQuestions.length} 道收藏</div>
            </div>
            <ChevronLeft size={16} className="rotate-180 ml-2 flex-shrink-0" />
          </Button>
        </div>
      </div>
    );
  };

  // 渲染屏幕
  const renderScreen = () => {
    if (loading && availableBanks.length === 0) {
      return (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className={`w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mb-3 ${
              settings.darkMode ? 'border-blue-400' : 'border-blue-500'
            }`}></div>
            <p className={`text-sm ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>加载题库中...</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-16">
          <div className={`mb-4 ${
            settings.darkMode ? 'text-red-400' : 'text-red-500'
          }`}>
            <FileX2 size={40} className="mx-auto" />
          </div>
          <p className={`font-medium ${
            settings.darkMode ? 'text-red-400' : 'text-red-600'
          }`}>{error}</p>
          <Button 
            variant="danger"
            onClick={() => window.location.reload()}
            className="mt-4"
          >
            重试
          </Button>
        </div>
      );
    }

    switch (currentScreen) {
      case 'home':
        return renderHomeScreen();
      case 'quiz':
        return renderCurrentQuestion();
      case 'results':
        return renderResultsScreen();
      case 'analysis':
        return renderAnalysisScreen();
      case 'settings':
        return renderSettingsScreen();
      case 'favorites':
        return renderFavoritesScreen();
      case 'studyPlan':
        return renderStudyPlanScreen();
      default:
        return renderHomeScreen();
    }
  };

  return (
    <ErrorBoundary>
      <div className={`min-h-screen transition-all duration-300 ${
        isFullscreen ? 'p-2' : ''
      } ${
        settings.darkMode 
          ? 'bg-gray-900' 
          : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4 py-4 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          {renderScreen()}
        </div>
        
        {/* 题库切换器 */}
        <QuestionBankSwitcher />
        
        {/* 题库管理系统 */}
        {showBankManager && (
          <Suspense fallback={<FullScreenLoader message="正在加载题库管理系统..." />}>
            <QuestionBankManager 
              onClose={() => {
                setShowBankManager(false);
                // 重新加载题库列表
                const customBanks = StorageHelper.getItem('questionBanks', []).map(bank => ({
                  id: bank.id,
                  name: bank.name,
                  category: 'custom',
                  color: '#9333ea',
                  description: bank.description || '自定义题库',
                  isCustom: true,
                  questions: bank.questions
                }));
                setAvailableBanks([...Object.values(BUILTIN_QUESTION_BANKS), ...customBanks]);
              }}
            />
          </Suspense>
        )}
        
        {/* 学习分析系统 */}
        {showAnalytics && (
          <Suspense fallback={<FullScreenLoader message="正在加载学习分析系统..." />}>
            <LearningAnalytics
              studyHistory={studyHistory}
              answerTimes={answerTimes}
              currentStreak={currentStreak}
              maxStreak={maxStreak}
              colors={colors}
              onClose={() => setShowAnalytics(false)}
            />
          </Suspense>
        )}
      </div>
      
      {/* 开发环境性能监控 */}
      <DevPerformanceMonitor />
    </ErrorBoundary>
  );
};

export default App;