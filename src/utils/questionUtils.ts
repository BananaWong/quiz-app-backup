import { Question } from '../types';

// 获取题目分类统计
export const getQuestionStats = (questionBank: Question[]) => {
  const stats: Record<string, { total: number; easy: number; medium: number; hard: number }> = {};
  
  questionBank.forEach(question => {
    const category = question.category || '未分类';
    if (!stats[category]) {
      stats[category] = { total: 0, easy: 0, medium: 0, hard: 0 };
    }
    stats[category].total++;
    
    // 根据题目复杂度分类（这里可以根据实际需求调整逻辑）
    const difficulty = getDifficulty(question);
    stats[category][difficulty]++;
  });
  
  return stats;
};

// 根据题目特征判断难度
const getDifficulty = (question: Question): 'easy' | 'medium' | 'hard' => {
  // 简单的难度判断逻辑，可以根据实际需求调整
  if (question.type === 'true_false') return 'easy';
  if (question.type === 'single_choice' && Object.keys(question.options || {}).length <= 3) return 'easy';
  if (question.type === 'multiple_choice') return 'hard';
  if (question.type === 'short_answer') return 'hard';
  if (question.hasImage || question.images) return 'medium';
  return 'medium';
};

// 打乱数组
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// 获取错题
export const getWrongQuestions = (questions: Question[], answers: any[]): Question[] => {
  return questions.filter((_, index) => {
    const answer = answers[index];
    if (!answer) return false;
    return !answer.isCorrect;
  });
};

// 获取收藏题目
export const getFavoriteQuestions = (questions: Question[], favorites: number[]): Question[] => {
  return questions.filter((_, index) => favorites.includes(index));
};