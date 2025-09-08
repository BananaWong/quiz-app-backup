import React, { useState, useMemo } from 'react';
import { ChevronLeft, Database, CalendarDays, Trophy, BookOpen, Shuffle, Heart, XCircle, Target, Filter, Settings, Maximize, BarChart3 } from 'lucide-react';
import { Button, Card } from '../ui';
import { useSettings } from '../../hooks/useSettings';
import { useSoundSystem } from '../../hooks/useSoundSystem';
import { getQuestionStats } from '../../utils/questionUtils';

interface Bank {
  id: string;
  name: string;
  color: string;
  questionCount: number;
}

interface HomeScreenProps {
  currentBank: Bank | null;
  todayProgress: number;
  dailyGoal: number;
  streakCount: number;
  bankCardCollapsed: boolean;
  setBankCardCollapsed: (collapsed: boolean) => void;
  setShowBankSwitcher: (show: boolean) => void;
  setShowBankManager: (show: boolean) => void;
  onStartQuiz: (mode: string) => void;
  onNavigate: (screen: string) => void;
  wrongQuestionsCount: number;
  favoritesCount: number;
  // 新增属性
  loadedQuestionBank: any[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  quizAmount: number;
  setQuizAmount: (amount: number) => void;
  questionStats: Record<string, any>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  currentBank,
  todayProgress,
  dailyGoal,
  streakCount,
  bankCardCollapsed,
  setBankCardCollapsed,
  setShowBankSwitcher,
  setShowBankManager,
  onStartQuiz,
  onNavigate,
  wrongQuestionsCount,
  favoritesCount,
  loadedQuestionBank,
  selectedCategory,
  setSelectedCategory,
  quizAmount,
  setQuizAmount,
  questionStats,
}) => {
  const { settings } = useSettings();
  const { playSound } = useSoundSystem();
  const [showOptions, setShowOptions] = useState(false);

  const progressPercentage = Math.min((todayProgress / dailyGoal) * 100, 100);
  
  // 计算题目统计
  const stats = useMemo(() => {
    return getQuestionStats(loadedQuestionBank);
  }, [loadedQuestionBank]);
  
  // 获取分类列表
  const categories = useMemo(() => {
    const cats = Object.keys(stats);
    return ['all', ...cats];
  }, [stats]);
  
  // 获取过滤后的题库
  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'all') return loadedQuestionBank;
    return loadedQuestionBank.filter(q => q.category === selectedCategory);
  }, [loadedQuestionBank, selectedCategory]);
  
  const maxQuestions = filteredQuestions.length;

  if (!currentBank) {
    return (
      <div className="text-center py-16">
        <Database size={48} className={`mx-auto mb-4 ${
          settings.darkMode ? 'text-gray-600' : 'text-gray-400'
        }`} />
        <p className={`font-medium mb-4 ${
          settings.darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>未找到题库</p>
        <Button 
          onClick={() => setShowBankManager(true)}
          icon={Plus}
          variant="primary"
        >
          创建或导入题库
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
      {/* 题库信息卡片 */}
      <Card className={`mb-4 md:mb-6 transition-all duration-300 ${
        bankCardCollapsed ? 'mb-2' : ''
      }`}>
        <div className={`${
          bankCardCollapsed ? 'p-3' : 'p-4 md:p-5'
        } transition-all duration-300`}>
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
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
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
                <Button
                  onClick={() => {
                    playSound('click');
                    setShowBankSwitcher(true);
                  }}
                  variant="secondary"
                  size="sm"
                  className="whitespace-nowrap"
                >
                  切换题库
                </Button>
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
            
            {/* 题库详细信息 (展开时显示) */}
            {!bankCardCollapsed && (
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="text-center">
                  <p className={`text-2xl font-bold ${settings.darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {loadedQuestionBank.length}
                  </p>
                  <p className={`text-xs ${settings.darkMode ? 'text-gray-400' : 'text-gray-600'}`}>总题数</p>
                </div>
                <div className="text-center">
                  <p className={`text-2xl font-bold ${settings.darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {Object.keys(stats).length}
                  </p>
                  <p className={`text-xs ${settings.darkMode ? 'text-gray-400' : 'text-gray-600'}`}>分类数</p>
                </div>
                <div className="text-center">
                  <p className={`text-2xl font-bold ${settings.darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {favoritesCount}
                  </p>
                  <p className={`text-xs ${settings.darkMode ? 'text-gray-400' : 'text-gray-600'}`}>收藏题</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* 练习配置 */}
      <Card className="p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`font-semibold ${settings.darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            练习设置
          </h3>
          <Button
            onClick={() => setShowOptions(!showOptions)}
            variant="ghost"
            size="sm"
            icon={Filter}
          >
            {showOptions ? '收起' : '设置'}
          </Button>
        </div>
        
        {showOptions && (
          <div className="space-y-4">
            {/* 分类选择 */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                settings.darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                选择分类 ({filteredQuestions.length} 题)
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border text-sm ${
                  settings.darkMode
                    ? 'bg-gray-700 border-gray-600 text-gray-100'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="all">全部分类 ({loadedQuestionBank.length} 题)</option>
                {Object.keys(stats).map(cat => (
                  <option key={cat} value={cat}>
                    {cat} ({stats[cat].total} 题)
                  </option>
                ))}
              </select>
            </div>
            
            {/* 题目数量选择 */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                settings.darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                练习题数: {quizAmount} 题
              </label>
              <input
                type="range"
                min="5"
                max={Math.min(filteredQuestions.length, 100)}
                value={quizAmount}
                onChange={(e) => setQuizAmount(parseInt(e.target.value))}
                className={`w-full ${
                  settings.darkMode ? 'accent-green-600' : 'accent-green-500'
                }`}
              />
              <div className="flex justify-between text-xs mt-1">
                <span className={settings.darkMode ? 'text-gray-400' : 'text-gray-600'}>5题</span>
                <span className={settings.darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {Math.min(filteredQuestions.length, 100)}题
                </span>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* 应用标题 */}
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-3xl mb-4 ${
          settings.darkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-100 shadow-sm'
        }`}>
          <img 
            src="/images/logos/company-logo.png"
            alt="赛育达Logo"
            className="w-10 h-10 rounded-2xl object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
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

      {/* 今日进度 */}
      <Card className={`p-5 mb-6 transition-all duration-200 ${
        progressPercentage >= 100 
          ? settings.darkMode
            ? 'bg-green-900/30 border-green-700 text-green-100'
            : 'bg-green-50 border-green-200 text-green-900'
          : ''
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
              className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-700 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {progressPercentage >= 100 && (
          <div className={`text-center text-sm font-medium ${
            settings.darkMode ? 'text-green-200' : 'text-green-800'
          }`}>
            🎉 今日目标已达成！
          </div>
        )}
      </Card>

      {/* 学习模式选择 */}
      <div className="space-y-3">
        <Button
          onClick={() => onStartQuiz('sequential')}
          variant="primary"
          className="w-full py-4 text-left justify-start"
          icon={BookOpen}
        >
          <div className="flex-1">
            <div className="font-semibold">顺序练习</div>
            <div className="text-sm opacity-80">按题库顺序逐题学习 ({filteredQuestions.length} 题可选)</div>
          </div>
        </Button>

        <Button
          onClick={() => onStartQuiz('random')}
          variant="secondary"
          className="w-full py-4 text-left justify-start"
          icon={Shuffle}
        >
          <div className="flex-1">
            <div className="font-semibold">随机练习</div>
            <div className="text-sm opacity-80">随机 {quizAmount} 题，全面练习</div>
          </div>
        </Button>

        {wrongQuestionsCount > 0 && (
          <Button
            onClick={() => onStartQuiz('wrong')}
            variant="warning"
            className="w-full py-4 text-left justify-start"
            icon={XCircle}
          >
            <div className="flex-1">
              <div className="font-semibold">错题练习</div>
              <div className="text-sm opacity-80">{wrongQuestionsCount} 道错题待复习</div>
            </div>
          </Button>
        )}

        {favoritesCount > 0 && (
          <Button
            onClick={() => onStartQuiz('favorites')}
            variant="ghost"
            className="w-full py-4 text-left justify-start"
            icon={Heart}
          >
            <div className="flex-1">
              <div className="font-semibold">收藏练习</div>
              <div className="text-sm opacity-80">{favoritesCount} 道收藏题目</div>
            </div>
          </Button>
        )}
      </div>

      {/* 底部统计和功能 */}
      <div className="grid grid-cols-4 gap-2 mt-8">
        <Card 
          className="p-3 text-center cursor-pointer"
          hoverable
          onClick={() => onNavigate('analytics')}
        >
          <BarChart3 className={`mx-auto mb-1 ${
            settings.darkMode ? 'text-blue-400' : 'text-blue-600'
          }`} size={18} />
          <p className={`text-xs ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>学习分析</p>
        </Card>

        <Card 
          className="p-3 text-center cursor-pointer"
          hoverable
          onClick={() => onNavigate('study-plan')}
        >
          <Target className={`mx-auto mb-1 ${
            settings.darkMode ? 'text-yellow-400' : 'text-yellow-600'
          }`} size={18} />
          <p className={`text-xs ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>学习计划</p>
        </Card>
        
        <Card 
          className="p-3 text-center cursor-pointer"
          hoverable
          onClick={() => onNavigate('settings')}
        >
          <Settings className={`mx-auto mb-1 ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-600'
          }`} size={18} />
          <p className={`text-xs ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>设置</p>
        </Card>

        <Card 
          className="p-3 text-center cursor-pointer"
          hoverable
          onClick={() => onNavigate('fullscreen')}
        >
          <Maximize className={`mx-auto mb-1 ${
            settings.darkMode ? 'text-green-400' : 'text-green-600'
          }`} size={18} />
          <p className={`text-xs ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>全屏</p>
        </Card>
      </div>
    </div>
  );
};