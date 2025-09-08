# 智能学习题库系统 📚

一个基于React + TypeScript开发的现代化题库学习应用，采用多邻国式的舒适配色和交互设计，提供沉浸式的学习体验。

## ✨ 核心特性

### 🎯 智能学习系统
- **23个专业题库**: 涵盖增材制造、机器人编程等工程技术领域
- **5种题型支持**: 单选、多选、判断、填空、简答题，完全支持图片题目
- **智能推荐**: 错题回顾、收藏复习、自适应学习路径
- **进度追踪**: 详细学习分析、正确率统计、连击记录
- **个性化体验**: 暗黑/浅色主题、声音反馈、全屏专注模式

### 📊 学习分析平台
- **可视化图表**: 内置Charts组件，直观展示学习数据
- **学习分析面板**: LearningAnalytics组件提供深度学习洞察
- **多维度统计**: 答题正确率、时间分布、知识点掌握度
- **学习报告**: 自动生成详细的学习报告和建议

### 🛠️ 高级功能
- **题库管理器**: 完整的题库导入/导出、编辑功能
- **图片题目支持**: 完善的图片加载、缓存、错误处理机制
- **自动化测试**: 内置测试框架，包含功能测试、性能测试
- **响应式设计**: 完美适配手机、平板、桌面设备

## 🚀 快速开始

### 环境要求
- Node.js 16+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 📁 项目架构

```
智能学习题库系统/
├── src/                          # 源代码目录
│   ├── App.tsx                   # 主应用组件 (1200+ 行核心逻辑)
│   ├── QuestionBankManager.tsx   # 题库管理系统
│   ├── main.tsx                  # 应用入口点
│   ├── components/               # React组件库
│   │   ├── LearningAnalytics.tsx # 学习分析面板
│   │   ├── Charts.tsx            # 数据可视化图表
│   │   ├── BankSwitcher.tsx      # 题库切换器
│   │   ├── screens/              # 屏幕组件
│   │   │   ├── HomeScreen.tsx    # 主页面
│   │   │   ├── QuizScreen.tsx    # 答题界面
│   │   │   ├── ResultsScreen.tsx # 结果展示
│   │   │   └── SettingsScreen.tsx# 设置面板
│   │   └── ui/                   # UI基础组件
│   │       ├── Button.tsx        # 按钮组件
│   │       ├── Card.tsx          # 卡片组件
│   │       └── ErrorBoundary.tsx # 错误边界
│   ├── hooks/                    # 自定义React Hooks
│   │   ├── useQuizState.ts       # 答题状态管理
│   │   ├── useSettings.ts        # 设置管理
│   │   └── useSoundSystem.ts     # 音效系统
│   ├── utils/                    # 工具函数库
│   │   ├── imageUtils.ts         # 图片处理工具
│   │   └── questionUtils.ts      # 题目处理工具
│   ├── constants/                # 常量定义
│   │   └── theme.ts              # 主题配置
│   └── questionBanks/            # 题库数据 (23个专业题库)
│       ├── additive_manufacturing_*.js  # 增材制造 (3个)
│       └── robot-coding-*.js             # 机器人编程 (20个)
├── public/                       # 静态资源
│   └── images/                   # 图片资源库
├── test-results/                 # 自动化测试结果
├── docs/                         # 项目文档
├── test-runner.js                # 自动化测试脚本
├── quick-test.js                 # 快速测试脚本
└── test-config.json              # 测试配置文件
```

## 📚 题库格式

支持两种题库格式，包含完整的图片题目支持：

### JavaScript模块格式 (.js)
```javascript
export const questionBank = [
  // 基础题目
  {
    id: 1,
    type: "single_choice",
    question: "题目内容",
    options: {
      "A": "选项A",
      "B": "选项B",
      "C": "选项C",
      "D": "选项D"
    },
    answer: "A",
    category: "分类名称"
  },
  
  // 带图片的题目
  {
    id: 2,
    type: "single_choice",
    question: "某同学设计了如图所示的虫虫沙发...",
    options: {
      "A": "线性",
      "B": "圆形",
      "C": "任意",
      "D": "曲线"
    },
    answer: "A",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/img4.jpg",
    imageDescription: "虫虫沙发设计图",
    imagePlaceholder: "🎭 此题包含设计图，需要参考图形理解阵列方式"
  },
  
  // 多图片题目
  {
    id: 3,
    type: "single_choice",
    question: "根据下列结构图分析...",
    options: {
      "A": "选项A",
      "B": "选项B"
    },
    answer: "A",
    category: "结构分析",
    images: [
      {
        name: "structure1.jpg",
        caption: "主视图",
        description: "结构主视图"
      },
      {
        name: "structure2.jpg", 
        caption: "侧视图",
        description: "结构侧视图"
      }
    ]
  },
  
  // 选项带图片
  {
    id: 4,
    type: "single_choice",
    question: "选择正确的工艺流程图：",
    options: {
      "A": {
        text: "流程A",
        image: "process_a.jpg",
        imageDescription: "工艺流程A示意图"
      },
      "B": {
        text: "流程B", 
        image: "process_b.jpg",
        imageDescription: "工艺流程B示意图"
      }
    },
    answer: "A",
    category: "工艺流程"
  }
];
```

### JSON格式 (.json)
```json
{
  "name": "题库名称",
  "description": "题库描述",
  "questions": [
    {
      "id": 1,
      "type": "single_choice",
      "question": "题目内容",
      "options": {
        "A": "选项A",
        "B": "选项B"
      },
      "answer": "A",
      "category": "分类",
      "hasImage": true,
      "imagePath": "/images/example.jpg",
      "imageDescription": "示例图片"
    }
  ]
}
```

### 🖼️ 图片题目支持

系统完全支持多种图片题目类型：

#### 1. **单张题目图片**
```javascript
{
  hasImage: true,
  imagePath: "/images/diagram.jpg",
  imageDescription: "结构示意图",
  imagePlaceholder: "📐 此题包含结构图"
}
```

#### 2. **多张题目图片**
```javascript
{
  images: [
    {
      name: "view1.jpg",
      caption: "正视图",
      description: "结构正视图"
    },
    {
      name: "view2.jpg",
      caption: "侧视图", 
      description: "结构侧视图"
    }
  ]
}
```

#### 3. **选项图片**
```javascript
{
  options: {
    "A": {
      text: "选项描述",
      image: "option_a.jpg",
      imageDescription: "选项A图片说明"
    }
  }
}
```

#### 4. **图片存放路径**
- 题库专用图片：`/public/images/{题库ID}/图片文件名`
- 公共图片：`/public/images/图片文件名`
- 支持格式：`.jpg`, `.png`, `.gif`, `.webp`

#### 5. **图片功能特性**
- ✅ 智能预加载和错误处理
- ✅ 响应式显示，自动适配屏幕
- ✅ 加载动画和失败占位符
- ✅ 暗黑模式自动适配
- ✅ 移动端触摸反馈
- ✅ 图片缩放和查看优化

### 支持的题型
- `single_choice`: 单选题（支持图片）
- `multiple_choice`: 多选题（支持图片）
- `true_false`: 判断题
- `fill_blank`: 填空题
- `short_answer`: 简答题

## 🎮 使用说明

### 基本操作
1. **选择题库**: 点击"切换题库"选择不同的题库
2. **开始练习**: 选择练习模式（顺序/随机/错题/收藏）
3. **答题**: 根据题型选择答案或输入内容
4. **查看结果**: 完成后查看详细的答题报告

### 题库管理
1. **导入题库**: 支持 .json 和 .js 格式的题库文件
2. **导出题库**: 可导出为标准格式，便于分享
3. **编辑题库**: 修改题库基本信息
4. **删除题库**: 移除不需要的题库

### 学习功能
- **错题练习**: 针对答错的题目进行强化练习
- **收藏复习**: 快速复习收藏的重要题目
- **进度跟踪**: 查看每日学习进度和统计数据
- **学习计划**: 设定学习目标和计划

## 🛠️ 技术栈

### 核心技术
- **前端框架**: React 18.3.1 + TypeScript 5.5.3
- **构建工具**: Vite 5.4.2 (超快开发体验)
- **样式解决方案**: Tailwind CSS 3.4.1 + PostCSS + Autoprefixer
- **图标系统**: Lucide React 0.344.0 (1000+ 图标)

### 开发工具链
- **代码质量**: ESLint 9.9.1 + TypeScript ESLint
- **状态管理**: React Hooks + Custom Hooks架构
- **数据持久化**: LocalStorage + 智能缓存系统
- **测试框架**: 自研测试套件 (test-runner.js)

### 自动化系统
- **自动化测试**: 功能测试 + 性能测试 + 构建测试
- **快速测试**: quick-test.js 提供快速验证
- **测试报告**: 自动生成HTML + JSON格式报告

## 🎨 主题定制

应用支持暗黑和浅色两种主题模式，可以在设置中切换。主题色彩采用温和的绿色系统，营造舒适的学习环境。

## 📱 移动端适配

应用采用响应式设计，完美适配：
- 📱 手机端 (320px+)
- 📱 平板端 (768px+)  
- 💻 桌面端 (1024px+)

## 🔧 开发与测试

### 自动化测试套件
```bash
# 完整测试套件
npm run test

# 快速测试 (跳过耗时测试)
npm run test:quick

# 详细测试报告
npm run test:verbose

# 仅构建测试
npm run test:build

# 仅开发服务器测试  
npm run test:dev
```

### 代码质量保证
- **TypeScript严格模式**: 类型安全保障
- **ESLint规则**: 代码规范检查
- **组件化架构**: 高内聚、低耦合设计
- **自定义Hooks**: 逻辑复用和状态管理

### 性能优化策略
- **题库懒加载**: 按需加载，提升首屏速度
- **图片智能处理**: 预加载 + 错误处理 + 响应式显示
- **本地存储优化**: 智能缓存 + 数据压缩
- **组件级优化**: 错误边界 + 性能监控

## 🎯 项目亮点

### 🏗️ 架构设计
- **模块化组件**: 10+ 屏幕组件，3+ 自定义Hooks，完善的工具函数库
- **类型安全**: 100% TypeScript覆盖，严格模式开发
- **错误处理**: ErrorBoundary组件 + 全局错误捕获机制
- **主题系统**: 多邻国风格配色，支持暗黑/浅色模式切换

### 📊 数据与分析
- **学习分析**: 可视化图表展示学习进度和掌握情况
- **智能推荐**: 基于答题情况的个性化学习路径
- **统计系统**: 多维度数据统计，支持导出学习报告

### 🔄 持续集成
- **自动化测试**: 涵盖功能测试、性能测试、构建测试
- **测试报告**: 自动生成HTML/JSON格式的详细测试报告
- **质量检查**: ESLint + TypeScript 双重代码质量保障

### 🎮 用户体验
- **响应式设计**: 完美适配移动端、平板、桌面设备
- **流畅动画**: 丝滑的页面切换和交互反馈
- **声音系统**: 可选的音效反馈，提升学习体验
- **全屏模式**: 专注学习的沉浸式体验

## 📄 开源协议

本项目基于 MIT 协议开源，题库内容版权归原作者所有。
