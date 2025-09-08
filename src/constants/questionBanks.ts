// 题库配置 - 支持从本地存储加载
export const BUILTIN_QUESTION_BANKS = {
  'additive-basic': {
    id: 'additive-basic',
    name: '增材制造-初级',
    category: 'manufacturing',
    color: '#00b4d8',
    description: '增材制造基础知识与应用',
    imageFolder: 'additive',
    module: () => import('../questionBanks/additive_manufacturing_basic.js')
  },
  'additive-inter': {
    id: 'additive-inter',
    name: '增材制造-中级',
    category: 'manufacturing',
    color: '#0077b6',
    description: '增材制造工艺与技术',
    imageFolder: 'additive-inter',
    module: () => import('../questionBanks/additive_manufacturing_intermediate.js')
  },
  'additiveManufacturingAdvanced': {
    id: 'additiveManufacturingAdvanced',
    name: '增材制造-高级',
    category: 'manufacturing',
    color: '#023e8a',
    description: '增材制造高级应用与优化',
    imageFolder: 'additive-Advanced',
    module: () => import('../questionBanks/additive_Manufacturing_Advanced.js')
  },
  // ABB机器人
  'robot-coding-abb-basic': {
    id: 'robot-coding-abb-basic',
    name: 'ABB机器人编程-初级',
    category: 'robotics',
    color: '#ff6b6b',
    description: 'ABB工业机器人编程基础',
    imageFolder: 'robot-abb-basic',
    module: () => import('../questionBanks/robot-coding-ABB-basic.js')
  },
  'robot-coding-abb-mid': {
    id: 'robot-coding-abb-mid',
    name: 'ABB机器人编程-中级',
    category: 'robotics',
    color: '#ee5a52',
    description: 'ABB工业机器人高级编程',
    imageFolder: 'robot-abb-mid',
    module: () => import('../questionBanks/robot-coding-ABB-mid.js')
  },

  // 博诺机器人
  'robot-coding-bnr-basic': {
    id: 'robot-coding-bnr-basic',
    name: '博诺机器人编程-初级',
    category: 'robotics',
    color: '#4ecdc4',
    description: '博诺工业机器人编程基础',
    imageFolder: 'robot-bnr-basic',
    module: () => import('../questionBanks/robot-coding-BNR-basic.js')
  },
  'robot-coding-bnr-mid': {
    id: 'robot-coding-bnr-mid',
    name: '博诺机器人编程-中级',
    category: 'robotics',
    color: '#26d0ce',
    description: '博诺工业机器人高级编程',
    imageFolder: 'robot-bnr-mid',
    module: () => import('../questionBanks/robot-coding-BNR-mid.js')
  },

  // 发那科机器人中级
  'robot-coding-fnk-mid': {
    id: 'robot-coding-fnk-mid',
    name: '发那科机器人编程-中级',
    category: 'robotics',
    color: '#ffc832',
    description: '发那科工业机器人编程技术',
    imageFolder: 'robot-fnk-mid',
    module: () => import('../questionBanks/robot-coding-FNK-mid.js')
  },
  'robot-coding-fnk-basic': {
    id: 'robot-coding-fnk-basic',
    name: '发那科机器人编程-初级',
    category: 'robotics',
    color: '#ffc832',
    description: '发那科工业机器人编程技术',
    imageFolder: 'robot-fnk-basic',
    module: () => import('../questionBanks/robot-coding-FNK-basic.js')
  },

  // 发那科亚龙机器人
  'robot-coding-fnk-yl-basic': {
    id: 'robot-coding-fnk-yl-basic',
    name: '发那科亚龙机器人编程-初级',
    category: 'robotics',
    color: '#ffb700',
    description: '发那科亚龙工业机器人编程基础',
    imageFolder: 'robot-fnk-yl-basic',
    module: () => import('../questionBanks/robot-coding-FNK-YL-basic.js')
  },
  'robot-coding-fnk-yl-mid': {
    id: 'robot-coding-fnk-yl-mid',
    name: '发那科亚龙机器人编程-中级',
    category: 'robotics',
    color: '#ff9500',
    description: '发那科亚龙工业机器人高级编程',
    imageFolder: 'robot-fnk-yl-mid',
    module: () => import('../questionBanks/robot-coding-FNK-YL-mid.js')
  },

  // 汇博机器人
  'robot-coding-hbr-basic': {
    id: 'robot-coding-hbr-basic',
    name: '汇博机器人编程-初级',
    category: 'robotics',
    color: '#a855f7',
    description: '汇博工业机器人编程基础',
    imageFolder: 'robot-hbr-basic',
    module: () => import('../questionBanks/robot-coding-HBR-basic.js')
  },
  'robot-coding-hbr-mid': {
    id: 'robot-coding-hbr-mid',
    name: '汇博机器人编程-中级',
    category: 'robotics',
    color: '#9333ea',
    description: '汇博工业机器人高级编程',
    imageFolder: 'robot-hbr-mid',
    module: () => import('../questionBanks/robot-coding-HBR-mid.js')
  },

  // 华数机器人
  'robot-coding-hsr-basic': {
    id: 'robot-coding-hsr-basic',
    name: '华数机器人编程-初级',
    category: 'robotics',
    color: '#14b8a6',
    description: '华数工业机器人编程基础',
    imageFolder: 'robot-hsr-basic',
    module: () => import('../questionBanks/robot-coding-HSR-basic.js')
  },
  'robot-coding-hsr-mid': {
    id: 'robot-coding-hsr-mid',
    name: '华数机器人编程-中级',
    category: 'robotics',
    color: '#0d9488',
    description: '华数工业机器人高级编程',
    imageFolder: 'robot-hsr-mid',
    module: () => import('../questionBanks/robot-coding-HSR-mid.js')
  },

  // 库卡博诺机器人
  'robot-coding-kkr-bn-basic': {
    id: 'robot-coding-kkr-bn-basic',
    name: 'KUKA博诺机器人编程-初级',
    category: 'robotics',
    color: '#f97316',
    description: 'KUKA博诺工业机器人编程基础',
    imageFolder: 'robot-kkr-bn-basic',
    module: () => import('../questionBanks/robot-coding-KKR-BN-basic.js')
  },
  'robot-coding-kkr-bn-mid': {
    id: 'robot-coding-kkr-bn-mid',
    name: 'KUKA博诺机器人编程-中级',
    category: 'robotics',
    color: '#ea580c',
    description: 'KUKA博诺工业机器人高级编程',
    imageFolder: 'robot-kkr-bn-mid',
    module: () => import('../questionBanks/robot-coding-KKR-BN-mid.js')
  },

  // 库卡锐智机器人
  'robot-coding-kkr-rz-basic': {
    id: 'robot-coding-kkr-rz-basic',
    name: 'KUKA锐智机器人编程-初级',
    color: '#6B7280',
    category: 'robotics',
    description: 'KUKA锐智工业机器人编程初级题库',
    imageFolder: 'robot-kkr-rz-basic',
    module: () => import('../questionBanks/robot-coding-KKR-RZ-basic.js')
  },
  'robot-coding-kkr-rz-mid': {
    id: 'robot-coding-kkr-rz-mid',
    name: 'KUKA锐智机器人编程-中级',
    color: '#4B5563',
    category: 'robotics',
    description: 'KUKA锐智工业机器人编程中级题库',
    imageFolder: 'robot-kkr-rz-mid',
    module: () => import('../questionBanks/robot-coding-KKR-RZ-mid.js')
  },

  // 库卡亚龙机器人
  'robot-coding-kkr-yl-basic': {
    id: 'robot-coding-kkr-yl-basic',
    name: 'KUKA亚龙机器人编程-初级',
    color: '#10B981',
    category: 'robotics',
    description: 'KUKA亚龙工业机器人编程初级题库',
    imageFolder: 'robot-kkr-yl-basic',
    module: () => import('../questionBanks/robot-coding-KKR-YL-basic.js')
  },
  'robot-coding-kkr-yl-mid': {
    id: 'robot-coding-kkr-yl-mid',
    name: 'KUKA亚龙机器人编程-中级',
    color: '#059669',
    category: 'robotics',
    description: 'KUKA亚龙工业机器人编程中级题库',
    imageFolder: 'robot-kkr-yl-mid',
    module: () => import('../questionBanks/robot-coding-KKR-YL-mid.js')
  },

  // 亚龙机器人
  'robot-coding-ylr-basic': {
    id: 'robot-coding-ylr-basic',
    name: '亚龙机器人编程-初级',
    color: '#22C55E',
    category: 'robotics',
    description: '亚龙工业机器人编程初级题库',
    imageFolder: 'robot-ylr-basic',
    module: () => import('../questionBanks/robot-coding-YLR-basic.js')
  },
  'robot-coding-ylr-mid': {
    id: 'robot-coding-ylr-mid',
    name: '亚龙机器人编程-中级',
    color: '#16A34A',
    category: 'robotics',
    description: '亚龙工业机器人编程中级题库',
    imageFolder: 'robot-ylr-mid',
    module: () => import('../questionBanks/robot-coding-YLR-mid.js')
  }
};

// 题库配置类型定义
export type QuestionBankConfig = {
  id: string;
  name: string;
  category: string;
  color: string;
  description: string;
  imageFolder: string;
  module: () => Promise<any>;
};

export type QuestionBanks = typeof BUILTIN_QUESTION_BANKS;