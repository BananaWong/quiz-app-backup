import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  XCircle, 
  Heart, 
  Star, 
  StarOff, 
  Maximize, 
  Minimize,
  CheckCircle2,
  X,
  Flame,
  Timer
} from 'lucide-react';
import { Button, Card } from '../ui';
import { useSettings } from '../../hooks/useSettings';
import { useSoundSystem } from '../../hooks/useSoundSystem';
import { Question } from '../../types';

interface QuizScreenProps {
  currentQuestions: Question[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  userAnswer: any;
  setUserAnswer: (answer: any) => void;
  multipleAnswers: string[];
  setMultipleAnswers: (answers: string[]) => void;
  fillBlankAnswers: string[];
  setFillBlankAnswers: (answers: string[]) => void;
  shortAnswer: string;
  setShortAnswer: (answer: string) => void;
  isAnswered: boolean;
  setIsAnswered: (answered: boolean) => void;
  favorites: number[];
  toggleFavorite: (questionIndex: number) => void;
  onExit: () => void;
  onNext: () => void;
  currentStreak: number;
  sessionStartTime: number;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  currentQuestions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  userAnswer,
  setUserAnswer,
  multipleAnswers,
  setMultipleAnswers,
  fillBlankAnswers,
  setFillBlankAnswers,
  shortAnswer,
  setShortAnswer,
  isAnswered,
  setIsAnswered,
  favorites,
  toggleFavorite,
  onExit,
  onNext,
  currentStreak,
  sessionStartTime,
}) => {
  const { settings } = useSettings();
  const { playSound } = useSoundSystem();
  const [questionStartTime] = useState(Date.now());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const question = currentQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
  const isFavorite = favorites.includes(currentQuestionIndex);

  // 键盘事件处理
  useEffect(() => {
    if (!settings.keyboardShortcuts || !question) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isAnswered) {
        onNext();
      } else if (e.key === 'Escape') {
        onExit();
      } else if (!isAnswered && question.type === 'single_choice') {
        const key = e.key.toUpperCase();
        if (['1', '2', '3', '4', 'A', 'B', 'C', 'D'].includes(key)) {
          let optionKey: string;
          if (['1', '2', '3', '4'].includes(key)) {
            const options = Object.keys(question.options || {});
            optionKey = options[parseInt(key) - 1];
          } else {
            optionKey = key;
          }
          if (question.options && question.options[optionKey]) {
            handleAnswer(optionKey);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAnswered, question, onNext, onExit, settings.keyboardShortcuts, handleAnswer]);

  const handleAnswer = useCallback((answer: any) => {
    if (isAnswered) return;

    setUserAnswer(answer);
    setIsAnswered(true);

    // 检查答案正确性
    const isCorrect = checkAnswer(answer);
    
    if (isCorrect) {
      playSound('correct');
    } else {
      playSound('incorrect');
    }

    // 自动下一题
    if (settings.autoNextQuestion) {
      setTimeout(() => {
        onNext();
      }, 1500);
    }
  }, [isAnswered, setUserAnswer, setIsAnswered, checkAnswer, playSound, settings.autoNextQuestion, onNext]);

  const checkAnswer = useCallback((answer: any): boolean => {
    switch (question.type) {
      case 'single_choice':
      case 'true_false':
        return answer === question.answer;
      case 'multiple_choice':
        if (!Array.isArray(question.answer)) return false;
        if (!Array.isArray(answer)) return false;
        return question.answer.sort().join() === answer.sort().join();
      case 'fill_blank':
        if (!Array.isArray(question.answer)) return false;
        return question.answer.every((correctAnswer: string, index: number) =>
          fillBlankAnswers[index]?.toLowerCase().trim() === correctAnswer.toLowerCase().trim()
        );
      case 'short_answer':
        return shortAnswer.toLowerCase().trim() === question.answer.toLowerCase().trim();
      default:
        return false;
    }
  }, [question, fillBlankAnswers, shortAnswer]);

  const handleMultipleChoice = (option: string) => {
    if (isAnswered) return;
    
    const newAnswers = multipleAnswers.includes(option)
      ? multipleAnswers.filter(a => a !== option)
      : [...multipleAnswers, option];
    
    setMultipleAnswers(newAnswers);
  };

  const submitMultipleChoice = () => {
    if (multipleAnswers.length === 0) return;
    handleAnswer(multipleAnswers);
  };

  const toggleFullscreen = async () => {
    try {
      if (!isFullscreen) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  const renderQuestionContent = () => {
    return (
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                settings.darkMode
                  ? 'bg-blue-800/30 text-blue-200'
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {question.category || '未分类'}
              </span>
              <span className={`px-2 py-1 rounded-md text-xs ${
                settings.darkMode
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {currentQuestionIndex + 1} / {currentQuestions.length}
              </span>
            </div>
            <h2 className={`text-lg font-medium leading-relaxed ${
              settings.darkMode ? 'text-gray-100' : 'text-gray-900'
            }`} style={{ fontSize: `${settings.fontSize}px` }}>
              {question.question}
            </h2>
          </div>
        </div>

        {/* 图片显示 */}
        {question.hasImage && question.imagePath && (
          <div className="mb-4">
            <img
              src={question.imagePath}
              alt={question.imageDescription || '题目图片'}
              className="w-full rounded-lg shadow-sm"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* 多图片显示 */}
        {question.images && question.images.length > 0 && (
          <div className="mb-4 space-y-2">
            {question.images.map((img: any, index: number) => (
              <div key={index}>
                {img.caption && (
                  <p className={`text-sm mb-1 ${
                    settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {img.caption}
                  </p>
                )}
                <img
                  src={`/images/${img.name}`}
                  alt={img.description || `图片 ${index + 1}`}
                  className="w-full rounded-lg shadow-sm"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderAnswerOptions = () => {
    switch (question.type) {
      case 'single_choice':
        return (
          <div className="space-y-3">
            {Object.entries(question.options || {}).map(([key, value]) => {
              const isSelected = userAnswer === key;
              const isCorrect = question.answer === key;
              const showResult = isAnswered;

              return (
                <button
                  key={key}
                  onClick={() => handleAnswer(key)}
                  disabled={isAnswered}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                    showResult
                      ? isCorrect
                        ? 'border-green-500 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 shadow-green-100 shadow-lg'
                        : isSelected
                        ? 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/20 shadow-red-100 shadow-lg animate-pulse'
                        : settings.darkMode
                        ? 'border-gray-700 bg-gray-800 opacity-60'
                        : 'border-gray-200 bg-gray-50 opacity-60'
                      : isSelected
                      ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 shadow-lg'
                      : settings.darkMode
                      ? 'border-gray-700 bg-gray-800 hover:border-gray-600 hover:bg-gray-750'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center">
                    <span className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold mr-4 transition-all duration-300 ${
                      showResult
                        ? isCorrect
                          ? 'border-green-500 bg-green-500 text-white shadow-lg transform scale-110'
                          : isSelected
                          ? 'border-red-500 bg-red-500 text-white shadow-lg transform scale-110'
                          : settings.darkMode
                          ? 'border-gray-600 text-gray-400 opacity-50'
                          : 'border-gray-300 text-gray-600 opacity-50'
                        : isSelected
                        ? 'border-blue-500 bg-blue-500 text-white shadow-md transform scale-105'
                        : settings.darkMode
                        ? 'border-gray-600 text-gray-400 hover:border-gray-500'
                        : 'border-gray-300 text-gray-600 hover:border-gray-400'
                    }`}>
                      {key}
                    </span>
                    <span className={`flex-1 ${
                      settings.darkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                      {typeof value === 'string' ? value : value.text || ''}
                    </span>
                    {showResult && isCorrect && (
                      <div className="flex items-center ml-3">
                        <CheckCircle2 className="text-green-600 animate-bounce" size={24} />
                        <span className="text-green-600 font-bold text-sm ml-1">正确</span>
                      </div>
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <div className="flex items-center ml-3">
                        <X className="text-red-600 animate-pulse" size={24} />
                        <span className="text-red-600 font-bold text-sm ml-1">错误</span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        );

      case 'multiple_choice':
        return (
          <div className="space-y-3">
            {Object.entries(question.options || {}).map(([key, value]) => {
              const isSelected = multipleAnswers.includes(key);
              const isCorrect = Array.isArray(question.answer) && question.answer.includes(key);
              const showResult = isAnswered;
              
              return (
                <button
                  key={key}
                  onClick={() => handleMultipleChoice(key)}
                  disabled={isAnswered}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                    showResult
                      ? isCorrect
                        ? 'border-green-500 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 shadow-green-100 shadow-lg'
                        : isSelected && !isCorrect
                        ? 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/20 shadow-red-100 shadow-lg animate-pulse'
                        : settings.darkMode
                        ? 'border-gray-700 bg-gray-800 opacity-60'
                        : 'border-gray-200 bg-gray-50 opacity-60'
                      : isSelected
                      ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 shadow-lg'
                      : settings.darkMode
                      ? 'border-gray-700 bg-gray-800 hover:border-gray-600 hover:bg-gray-750'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded border-2 flex items-center justify-center mr-4 transition-all duration-300 ${
                      showResult
                        ? isCorrect
                          ? 'border-green-500 bg-green-500 shadow-lg transform scale-110'
                          : isSelected && !isCorrect
                          ? 'border-red-500 bg-red-500 shadow-lg transform scale-110'
                          : settings.darkMode
                          ? 'border-gray-600 opacity-50'
                          : 'border-gray-300 opacity-50'
                        : isSelected
                        ? 'border-blue-500 bg-blue-500 shadow-md transform scale-105'
                        : settings.darkMode
                        ? 'border-gray-600 hover:border-gray-500'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      {(showResult && isCorrect) || (!showResult && isSelected) ? (
                        <CheckCircle2 className="text-white" size={16} />
                      ) : null}
                    </div>
                    <span className={`flex-1 ${
                      showResult
                        ? isCorrect
                          ? 'text-green-700 font-medium'
                          : isSelected && !isCorrect
                          ? 'text-red-700 font-medium'
                          : settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                        : settings.darkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                      {typeof value === 'string' ? value : value.text || ''}
                    </span>
                    {showResult && isCorrect && (
                      <div className="flex items-center ml-3">
                        <CheckCircle2 className="text-green-600 animate-bounce" size={20} />
                        <span className="text-green-600 font-bold text-xs ml-1">正确</span>
                      </div>
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <div className="flex items-center ml-3">
                        <X className="text-red-600 animate-pulse" size={20} />
                        <span className="text-red-600 font-bold text-xs ml-1">错误</span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
            {multipleAnswers.length > 0 && !isAnswered && (
              <Button
                onClick={submitMultipleChoice}
                variant="primary"
                className="w-full mt-4 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                提交答案 ({multipleAnswers.length} 项已选)
              </Button>
            )}
          </div>
        );

      case 'true_false':
        return (
          <div className="space-y-4">
            {['true', 'false'].map((value) => {
              const isSelected = userAnswer === value;
              const isCorrect = question.answer === value;
              const showResult = isAnswered;

              return (
                <button
                  key={value}
                  onClick={() => handleAnswer(value)}
                  disabled={isAnswered}
                  className={`w-full p-6 text-center rounded-xl border-2 transition-all duration-300 ${
                    showResult
                      ? isCorrect
                        ? 'border-green-500 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 shadow-green-100 shadow-lg'
                        : isSelected
                        ? 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/20 shadow-red-100 shadow-lg animate-pulse'
                        : settings.darkMode
                        ? 'border-gray-700 bg-gray-800 opacity-60'
                        : 'border-gray-200 bg-gray-50 opacity-60'
                      : isSelected
                      ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 shadow-lg'
                      : settings.darkMode
                      ? 'border-gray-700 bg-gray-800 hover:border-gray-600 hover:bg-gray-750'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <span className={`text-xl font-bold mr-3 ${
                      showResult
                        ? isCorrect
                          ? 'text-green-600'
                          : isSelected
                          ? 'text-red-600'
                          : settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                        : settings.darkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                      {value === 'true' ? '✓ 正确' : '✗ 错误'}
                    </span>
                    {showResult && isCorrect && (
                      <CheckCircle2 className="text-green-600 animate-bounce ml-2" size={24} />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <X className="text-red-600 animate-pulse ml-2" size={24} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        );

      case 'fill_blank':
        return (
          <div className="space-y-4">
            {(question.answer as string[]).map((_, index) => (
              <div key={index}>
                <label className={`block text-sm font-medium mb-2 ${
                  settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  填空 {index + 1}
                </label>
                <input
                  type="text"
                  value={fillBlankAnswers[index] || ''}
                  onChange={(e) => {
                    const newAnswers = [...fillBlankAnswers];
                    newAnswers[index] = e.target.value;
                    setFillBlankAnswers(newAnswers);
                  }}
                  disabled={isAnswered}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                    settings.darkMode
                      ? 'bg-gray-800 border-gray-700 text-gray-100 focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  }`}
                  placeholder="请输入答案"
                />
              </div>
            ))}
            {!isAnswered && (
              <Button
                onClick={() => handleAnswer(fillBlankAnswers)}
                variant="primary"
                className="w-full"
                disabled={fillBlankAnswers.some(a => !a?.trim())}
              >
                提交答案
              </Button>
            )}
          </div>
        );

      case 'short_answer':
        return (
          <div>
            <textarea
              value={shortAnswer}
              onChange={(e) => setShortAnswer(e.target.value)}
              disabled={isAnswered}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                settings.darkMode
                  ? 'bg-gray-800 border-gray-700 text-gray-100 focus:border-blue-500'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              }`}
              rows={4}
              placeholder="请输入您的答案"
            />
            {!isAnswered && (
              <Button
                onClick={() => handleAnswer(shortAnswer)}
                variant="primary"
                className="w-full mt-4"
                disabled={!shortAnswer.trim()}
              >
                提交答案
              </Button>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  if (!question) return null;

  return (
    <div 
      ref={containerRef}
      className="min-h-screen"
    >
      {/* 连击显示 */}
      {currentStreak > 0 && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className={`px-6 py-3 rounded-full flex items-center space-x-3 shadow-lg backdrop-blur-sm ${
            currentStreak >= 5
              ? settings.darkMode
                ? 'bg-gradient-to-r from-purple-800/90 to-pink-800/90 text-white border-2 border-purple-400 shadow-purple-400/50'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-2 border-purple-300 shadow-purple-500/50'
              : settings.darkMode
              ? 'bg-gradient-to-r from-orange-800/90 to-red-800/90 text-orange-200 border-2 border-orange-400 shadow-orange-400/50'
              : 'bg-gradient-to-r from-orange-400 to-red-400 text-white border-2 border-orange-300 shadow-orange-500/50'
          } ${currentStreak >= 10 ? 'animate-pulse' : ''}`}>
            <Flame className={`animate-pulse ${
              currentStreak >= 5 ? 'text-purple-300' : 'text-orange-300'
            }`} size={20} />
            <span className="font-bold text-lg">
              🔥 {currentStreak} 连击
              {currentStreak >= 10 && ' !!!'}
              {currentStreak >= 5 && currentStreak < 10 && ' !'}
            </span>
          </div>
        </div>
      )}
      
      {/* 顶部控制栏 */}
      <Card className="p-3 mb-4">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost"
            size="sm"
            icon={XCircle}
            onClick={() => {
              if (window.confirm('确定要退出当前练习吗？')) {
                onExit();
              }
            }}
          >
            退出
          </Button>
          
          <div className="flex items-center gap-3">
            <div className={`flex items-center ${
              settings.darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <Timer size={14} className="mr-1" />
              <span className="text-xs font-medium">
                {Math.floor((Date.now() - sessionStartTime) / 1000)}s
              </span>
            </div>
            
            <button 
              onClick={() => toggleFavorite(currentQuestionIndex)}
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
            
            <button 
              onClick={toggleFullscreen}
              className={`p-1 rounded-lg transition-all active:scale-95 ${
                settings.darkMode 
                  ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
            </button>
          </div>
        </div>
      </Card>

      {/* 进度条 */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-xs font-medium ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {Math.round(progress)}% 完成
          </span>
          <span className={`text-xs ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {currentQuestionIndex + 1} / {currentQuestions.length}
          </span>
        </div>
        <div className={`w-full rounded-full h-2 overflow-hidden ${
          settings.darkMode ? 'bg-gray-700' : 'bg-gray-200'
        }`}>
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 题目内容 */}
      <Card className="p-4 mb-4">
        {renderQuestionContent()}
        {renderAnswerOptions()}
      </Card>

      {/* 底部控制 */}
      {isAnswered && (
        <div className="fixed bottom-4 left-4 right-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className={`text-sm ${
                settings.darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {settings.keyboardShortcuts && '回车继续, ESC退出'}
              </div>
              <Button 
                onClick={onNext} 
                variant="primary"
                className="px-8 py-3 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                {currentQuestionIndex < currentQuestions.length - 1 ? '下一题 →' : '🎉 完成'}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};