// 题目验证器类
export class QuestionValidator {
  static validateQuestion(question: any): boolean {
    if (!question || typeof question !== 'object') return false;
    
    if (!question.id || !question.type || !question.question || !question.answer) {
      return false;
    }
    
    switch (question.type) {
      case 'single_choice':
        if (!question.options && !question.optionsWithImages) return false;
        if (question.options) {
          if (typeof question.options !== 'object') return false;
          if (Object.keys(question.options).length < 2) return false;
          if (!question.options[question.answer]) return false;
        }
        if (question.optionsWithImages) {
          if (typeof question.optionsWithImages !== 'object') return false;
          if (Object.keys(question.optionsWithImages).length < 2) return false;
          if (!question.optionsWithImages[question.answer]) return false;
        }
        break;
        
      case 'multiple_choice':
        if (!question.options && !question.optionsWithImages) return false;
        if (question.options) {
          if (typeof question.options !== 'object') return false;
          if (Object.keys(question.options).length < 2) return false;
          for (const char of question.answer) {
            if (!question.options[char]) return false;
          }
        }
        if (question.optionsWithImages) {
          if (typeof question.optionsWithImages !== 'object') return false;
          if (Object.keys(question.optionsWithImages).length < 2) return false;
          for (const char of question.answer) {
            if (!question.optionsWithImages[char]) return false;
          }
        }
        break;
        
      case 'true_false':
        if (!['true', 'false'].includes(question.answer)) return false;
        break;
        
      case 'fill_blank':
        if (!Array.isArray(question.answer)) return false;
        break;
        
      case 'short_answer':
        if (typeof question.answer !== 'string') return false;
        break;
        
      default:
        return false;
    }
    
    return true;
  }
  
  static validateBank(questionBank: any[]): boolean {
    if (!Array.isArray(questionBank)) return false;
    if (questionBank.length === 0) return false;
    
    return questionBank.every(question => this.validateQuestion(question));
  }
  
  static getValidationErrors(question: any): string[] {
    const errors: string[] = [];
    
    if (!question || typeof question !== 'object') {
      errors.push('题目必须是一个对象');
      return errors;
    }
    
    if (!question.id) errors.push('缺少题目ID');
    if (!question.type) errors.push('缺少题目类型');
    if (!question.question) errors.push('缺少题目内容');
    if (!question.answer) errors.push('缺少答案');
    
    return errors;
  }
}

// 防抖函数
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// 类型守卫：检查是否是带图片的选项
export const isOptionWithImage = (option: unknown): option is { text: string; image?: string } => {
  return typeof option === 'object' && option !== null && 'text' in option;
};