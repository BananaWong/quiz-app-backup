import React from 'react';
import { CheckCircle, XCircle, Clock, Trophy, Target, Zap, Home, RotateCcw } from 'lucide-react';
import { Button, Card } from '../ui';
import { useSettings } from '../../hooks/useSettings';
import { useSoundSystem } from '../../hooks/useSoundSystem';

interface QuizResult {
  question: any;
  userAnswer: any;
  isCorrect: boolean;
  answerTime: number;
}

interface ResultsScreenProps {
  results: {
    total: number;
    correct: number;
    percentage: number;
    questions: QuizResult[];
    timeSpent: number;
  };
  onBackToHome: () => void;
  onRetry: () => void;
  currentStreak: number;
  maxStreak: number;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  results,
  onBackToHome,
  onRetry,
  currentStreak,
  maxStreak,
}) => {
  const { settings } = useSettings();
  const { playSound } = useSoundSystem();

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-500';
    if (percentage >= 80) return 'text-blue-500';
    if (percentage >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 95) return { text: '完美！', emoji: '🎉' };
    if (percentage >= 90) return { text: '优秀！', emoji: '🌟' };
    if (percentage >= 80) return { text: '很好！', emoji: '👍' };
    if (percentage >= 60) return { text: '不错！', emoji: '😊' };
    return { text: '继续加油！', emoji: '💪' };
  };

  const scoreMessage = getScoreMessage(results.percentage);
  const avgTime = results.questions.length > 0 
    ? results.timeSpent / results.questions.length / 1000 
    : 0;

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        {/* 成绩卡片 */}
        <Card className="text-center p-6 mb-6">
          <div className="mb-4">
            <div className={`text-6xl font-bold mb-2 ${getScoreColor(results.percentage)}`}>
              {Math.round(results.percentage)}%
            </div>
            <div className="text-2xl mb-2">
              {scoreMessage.emoji} {scoreMessage.text}
            </div>
            <p className={`text-lg ${
              settings.darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              答对 {results.correct} / {results.total} 题
            </p>
          </div>

          {/* 成就显示 */}
          {results.percentage >= 90 && (
            <div className={`inline-flex items-center px-4 py-2 rounded-full mb-4 ${
              settings.darkMode
                ? 'bg-yellow-900/30 text-yellow-200 border border-yellow-600'
                : 'bg-yellow-100 text-yellow-800 border border-yellow-300'
            }`}>
              <Trophy className="mr-2" size={20} />
              <span className="font-medium">优秀表现</span>
            </div>
          )}
        </Card>

        {/* 统计信息 */}
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
              {Math.floor(results.timeSpent / 1000)}秒
            </p>
          </Card>
          
          <Card className="p-4 text-center">
            <Target className={`mx-auto mb-2 ${
              settings.darkMode ? 'text-green-400' : 'text-green-600'
            }`} size={24} />
            <p className={`text-xs mb-1 ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>平均用时</p>
            <p className={`font-bold ${
              settings.darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {avgTime.toFixed(1)}秒/题
            </p>
          </Card>

          {maxStreak > 0 && (
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
                {maxStreak}
              </p>
            </Card>
          )}

          <Card className="p-4 text-center">
            <Target className={`mx-auto mb-2 ${
              settings.darkMode ? 'text-purple-400' : 'text-purple-600'
            }`} size={24} />
            <p className={`text-xs mb-1 ${
              settings.darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>正确率</p>
            <p className={`font-bold ${
              settings.darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {results.percentage.toFixed(1)}%
            </p>
          </Card>
        </div>

        {/* 答题详情 */}
        <Card className="p-4 mb-6">
          <h3 className={`font-bold mb-3 ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>答题详情</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {results.questions.map((result, index) => (
              <div key={index} className={`flex items-center justify-between p-2 rounded-lg ${
                settings.darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <div className="flex items-center">
                  {result.isCorrect ? (
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                  ) : (
                    <XCircle className="text-red-500 mr-2" size={16} />
                  )}
                  <span className={`text-sm ${
                    settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>第 {index + 1} 题</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs ${
                    settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {Math.round(result.answerTime / 1000)}s
                  </span>
                  {result.question.category && (
                    <span className={`px-2 py-1 rounded text-xs ${
                      settings.darkMode
                        ? 'bg-gray-600 text-gray-300'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {result.question.category}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* 操作按钮 */}
        <div className="space-y-3">
          <Button 
            variant="primary"
            className="w-full"
            icon={Home}
            onClick={() => {
              playSound('click');
              onBackToHome();
            }}
          >
            返回主页
          </Button>
          
          <Button 
            variant="secondary"
            className="w-full"
            icon={RotateCcw}
            onClick={() => {
              playSound('click');
              onRetry();
            }}
          >
            再练一次
          </Button>
        </div>

        {/* 建议和提示 */}
        {results.percentage < 80 && (
          <Card className={`mt-6 p-4 ${
            settings.darkMode
              ? 'bg-blue-900/20 border-blue-700'
              : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex items-start">
              <Target className={`mr-3 mt-0.5 ${
                settings.darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} size={20} />
              <div>
                <h4 className={`font-medium mb-2 ${
                  settings.darkMode ? 'text-blue-200' : 'text-blue-800'
                }`}>
                  学习建议
                </h4>
                <p className={`text-sm ${
                  settings.darkMode ? 'text-blue-300' : 'text-blue-700'
                }`}>
                  建议重点复习错题，或降低练习难度。可以尝试分类练习来提高准确率。
                </p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};