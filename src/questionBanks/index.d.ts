// 题库JS文件的类型声明

declare module '*.js' {
  import { Question } from '../types';
  
  export const questionBank: Question[];
  export default questionBank;
}

// 具体题库文件的类型声明
declare module './additive_manufacturing_basic.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './additive_manufacturing_intermediate.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './additive_Manufacturing_Advanced.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

// 机器人编程题库类型声明
declare module './robot-coding-ABB-basic.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-ABB-mid.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-ABB-advanced.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-FNK-basic.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-FNK-mid.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-FNK-advanced.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-HSR-basic.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-HSR-mid.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-HSR-advanced.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-KKR-basic.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-KKR-mid.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-KKR-advanced.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-MTC-basic.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-MTC-mid.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-MTC-advanced.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-UR-basic.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-UR-mid.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}

declare module './robot-coding-UR-advanced.js' {
  import { Question } from '../types';
  export const questionBank: Question[];
}