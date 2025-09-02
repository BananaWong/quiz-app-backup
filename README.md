# Quiz App Backup 📚

一个功能全面的 React TypeScript 题库学习应用，支持多种题型、暗黑模式、进度跟踪等特性。

## ✨ 主要功能

### 🎯 核心功能
- **多题库支持**: 内置增材制造、机器人编程等多个专业题库
- **多种题型**: 支持单选、多选、判断、填空、简答题
- **智能学习**: 错题回顾、收藏题目、学习计划
- **进度跟踪**: 答题统计、正确率分析、学习连击
- **个性化**: 暗黑/浅色模式切换、自定义设置

### 📊 学习管理
- **题库管理**: 导入/导出题库、自定义题库创建
- **学习分析**: 详细的答题统计和学习报告
- **收藏系统**: 重要题目收藏和快速复习
- **错题本**: 自动收集错题，针对性练习

### 🎨 用户体验
- **响应式设计**: 适配桌面端和移动端
- **流畅动画**: 丝滑的交互体验
- **全屏模式**: 专注学习的全屏体验
- **声音反馈**: 可选的音效反馈

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

## 📁 项目结构

```
quiz-app-backup/
├── src/
│   ├── App.tsx                 # 主应用组件
│   ├── QuestionBankManager.tsx # 题库管理组件
│   ├── main.tsx               # 应用入口
│   ├── index.css              # 全局样式
│   └── questionBanks/         # 题库文件夹
│       ├── additive_*.js      # 增材制造题库
│       └── robot-coding-*.js  # 机器人编程题库
├── public/
│   └── images/
│       └── logos/             # Logo资源文件
├── docs/                      # 项目文档
│   ├── 项目说明.md
│   └── 题库规范.md
└── package.json
```

## 📚 题库格式

支持两种题库格式：

### JavaScript模块格式 (.js)
```javascript
export const questionBank = [
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
      "category": "分类"
    }
  ]
}
```

### 支持的题型
- `single_choice`: 单选题
- `multiple_choice`: 多选题  
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

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **状态管理**: React Hooks
- **数据持久化**: LocalStorage

## 🎨 主题定制

应用支持暗黑和浅色两种主题模式，可以在设置中切换。主题色彩采用温和的绿色系统，营造舒适的学习环境。

## 📱 移动端适配

应用采用响应式设计，完美适配：
- 📱 手机端 (320px+)
- 📱 平板端 (768px+)  
- 💻 桌面端 (1024px+)

## 🔧 开发相关

### 代码规范
- ESLint 配置用于代码质量检查
- TypeScript 严格模式
- 组件化开发模式

### 性能优化
- 题库懒加载
- 图片预加载和错误处理
- 本地存储优化

## 📄 许可证

本项目仅供学习和研究使用。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进项目！

### 开发流程
1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📞 支持

如果您在使用过程中遇到问题，请：
1. 查看项目文档
2. 搜索已有的 Issues
3. 创建新的 Issue 描述问题

---

**⭐ 如果这个项目对您有帮助，请给个 Star！**

---

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>