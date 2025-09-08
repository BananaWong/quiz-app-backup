import { useState, useEffect, useCallback } from 'react';
import { BUILTIN_QUESTION_BANKS } from '../constants/questionBanks';
import { StorageHelper } from '../utils/modernStorageUtils';
import { QuestionValidator } from '../utils/validationUtils';
import { getQuestionStats } from '../utils/questionUtils';
import { CategoryStatsMap } from '../types';

interface QuestionBankState {
  availableBanks: any[];
  loadedQuestionBank: any[];
  loading: boolean;
  error: string | null;
  questionStats: CategoryStatsMap;
  bankCardCollapsed: boolean;
}

export const useQuestionBank = () => {
  const [state, setState] = useState<QuestionBankState>({
    availableBanks: [],
    loadedQuestionBank: [],
    loading: true,
    error: null,
    questionStats: {},
    bankCardCollapsed: StorageHelper.getItem('bankCardCollapsed', false),
  });

  // 更新状态的辅助函数
  const updateState = useCallback(<K extends keyof QuestionBankState>(
    key: K,
    value: QuestionBankState[K]
  ) => {
    setState(prev => ({ ...prev, [key]: value }));
  }, []);

  // 初始化可用题库
  useEffect(() => {
    const initializeBanks = async () => {
      try {
        const banks = Object.values(BUILTIN_QUESTION_BANKS).map(bank => ({
          ...bank,
          isBuiltIn: true,
          loaded: false,
        }));

        // 从本地存储加载自定义题库
        const customBanks = StorageHelper.getItem('customQuestionBanks', []);
        const allBanks = [...banks, ...customBanks];

        updateState('availableBanks', allBanks);
        updateState('loading', false);
      } catch (error) {
        console.error('初始化题库失败:', error);
        updateState('error', '初始化题库失败');
        updateState('loading', false);
      }
    };

    initializeBanks();
  }, [updateState]);

  // 加载指定题库
  const loadQuestionBank = useCallback(async (bankId: string) => {
    updateState('loading', true);
    updateState('error', null);

    try {
      const bank = state.availableBanks.find(b => b.id === bankId);
      if (!bank) {
        throw new Error('题库不存在');
      }

      let questions = [];

      if (bank.isBuiltIn) {
        // 加载内置题库
        const module = await bank.module();
        questions = module.default || module.questions || [];
      } else {
        // 加载自定义题库
        questions = bank.questions || [];
      }

      // 验证题库
      if (!QuestionValidator.validateBank(questions)) {
        throw new Error('题库格式无效');
      }

      // 计算统计信息
      const stats = getQuestionStats(questions);

      setState(prev => ({
        ...prev,
        loadedQuestionBank: questions,
        questionStats: stats,
        loading: false,
        availableBanks: prev.availableBanks.map(b => 
          b.id === bankId ? { ...b, loaded: true } : b
        )
      }));

      // 保存到本地存储
      StorageHelper.setItem('lastLoadedBank', bankId);

    } catch (error) {
      console.error('加载题库失败:', error);
      updateState('error', error instanceof Error ? error.message : '加载题库失败');
      updateState('loading', false);
    }
  }, [state.availableBanks, updateState]);

  // 添加自定义题库
  const addCustomBank = useCallback((bank: any) => {
    try {
      // 验证题库
      if (!QuestionValidator.validateBank(bank.questions || [])) {
        throw new Error('题库格式无效');
      }

      const newBank = {
        ...bank,
        id: bank.id || `custom-${Date.now()}`,
        isBuiltIn: false,
        loaded: false,
        dateAdded: new Date().toISOString(),
      };

      const updatedBanks = [...state.availableBanks, newBank];
      updateState('availableBanks', updatedBanks);

      // 保存到本地存储
      const customBanks = updatedBanks.filter(b => !b.isBuiltIn);
      StorageHelper.setItem('customQuestionBanks', customBanks);

      return newBank;
    } catch (error) {
      console.error('添加自定义题库失败:', error);
      throw error;
    }
  }, [state.availableBanks, updateState]);

  // 删除自定义题库
  const removeCustomBank = useCallback((bankId: string) => {
    const updatedBanks = state.availableBanks.filter(b => b.id !== bankId);
    updateState('availableBanks', updatedBanks);

    // 更新本地存储
    const customBanks = updatedBanks.filter(b => !b.isBuiltIn);
    StorageHelper.setItem('customQuestionBanks', customBanks);

    // 如果删除的是当前加载的题库，清空已加载题库
    if (state.loadedQuestionBank.some((q: any) => q.bankId === bankId)) {
      updateState('loadedQuestionBank', []);
      updateState('questionStats', {});
    }
  }, [state.availableBanks, state.loadedQuestionBank, updateState]);

  // 切换题库卡片折叠状态
  const toggleBankCardCollapsed = useCallback(() => {
    const newCollapsed = !state.bankCardCollapsed;
    updateState('bankCardCollapsed', newCollapsed);
    StorageHelper.setItem('bankCardCollapsed', newCollapsed);
  }, [state.bankCardCollapsed, updateState]);

  // 重新加载题库统计
  const refreshStats = useCallback(() => {
    if (state.loadedQuestionBank.length > 0) {
      const stats = getQuestionStats(state.loadedQuestionBank);
      updateState('questionStats', stats);
    }
  }, [state.loadedQuestionBank, updateState]);

  // 自动加载上次使用的题库
  useEffect(() => {
    const lastBankId = StorageHelper.getItem('lastLoadedBank', null);
    if (lastBankId && state.availableBanks.length > 0 && !state.loading) {
      const bankExists = state.availableBanks.some(b => b.id === lastBankId);
      if (bankExists) {
        loadQuestionBank(lastBankId);
      }
    }
  }, [state.availableBanks.length, state.loading, loadQuestionBank]);

  return {
    ...state,
    loadQuestionBank,
    addCustomBank,
    removeCustomBank,
    toggleBankCardCollapsed,
    refreshStats,
  };
};