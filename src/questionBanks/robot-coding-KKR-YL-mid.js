// kukaRobotMid.js - KUKA机器人应用编程中级考试题库
export const questionBank = [
  // 单选题部分 (1-430)
  {
    id: 1,
    type: "single_choice",
    question: "KUKA机器人使用（ ）端口与电脑连接。",
    options: {
      A: "以太网接口",
      B: "USB接口", 
      C: "485接口",
      D: "232接口"
    },
    answer: "A",
    category: "KUKA机器人基础"
  },
  {
    id: 2,
    type: "single_choice",
    question: "KUKA机器人与PLC使用profinet通讯协议通讯时，使用的是（ ）接口。",
    options: {
      A: "以太网接口",
      B: "USB接口", 
      C: "485接口",
      D: "232接口"
    },
    answer: "A",
    category: "KUKA机器人基础"
  },
  {
    id: 3,
    type: "single_choice",
    question: "在WorkVisual中点击搜索若提示未找到机器人单元，不可能是以下哪种原因（ ）。",
    options: {
      A: "网线未连接正确",
      B: "IP地址设置错误", 
      C: "电脑上插着U盘",
      D: "网络端口损坏"
    },
    answer: "C",
    category: "KUKA机器人配置"
  },
  {
    id: 4,
    type: "single_choice",
    question: "以下哪一个用户组可以安装EtherNet/IP应用软件包（ ）。",
    options: {
      A: "操作人员",
      B: "专家", 
      C: "用户",
      D: "都可以"
    },
    answer: "B",
    category: "KUKA机器人配置"
  },
  {
    id: 5,
    type: "single_choice",
    question: "OUT指令创建的数字量输出信号属于（ ）类型。",
    options: {
      A: "BOOL",
      B: "INT", 
      C: "BYTE",
      D: "REAL"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 6,
    type: "single_choice",
    question: "一个全局变量建立在系统文件中，适用于（ ）",
    options: {
      A: "当前程序",
      B: "所有程序", 
      C: "主程序",
      D: "子程序"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 7,
    type: "single_choice",
    question: "一个局部变量建立在系统文件中，适用于（ ）",
    options: {
      A: "当前程序",
      B: "所有程序", 
      C: "主程序",
      D: "子程序"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 8,
    type: "single_choice",
    question: "在机器人运行方式中T1表示（ ）",
    options: {
      A: "手动全速",
      B: "自动全速", 
      C: "手动慢速",
      D: "自动慢速"
    },
    answer: "C",
    category: "机器人操作"
  },
  {
    id: 9,
    type: "single_choice",
    question: "在机器人运行方式中T2表示（ ）",
    options: {
      A: "手动全速",
      B: "自动全速", 
      C: "手动慢速",
      D: "自动慢速"
    },
    answer: "A",
    category: "机器人操作"
  },
  {
    id: 10,
    type: "single_choice",
    question: "机器人在还原数据时，说法错误的是（ ）",
    options: {
      A: "可以还原全部",
      B: "可以还原程序", 
      C: "可以还原文件",
      D: "以上都不可以还原"
    },
    answer: "D",
    category: "机器人维护"
  },
  {
    id: 11,
    type: "single_choice",
    question: "机器人在数据存档时仅允许使用（ ）",
    options: {
      A: "普通U盘",
      B: "移动硬盘", 
      C: "手机",
      D: "KUKU.USBDataU盘"
    },
    answer: "D",
    category: "机器人维护"
  },
  {
    id: 12,
    type: "single_choice",
    question: "如果正在从U盘上还原数据，操作正确的是（ ）",
    options: {
      A: "等待2秒即可拔下",
      B: "可以立即拔下", 
      C: "等待指示灯熄灭才可拔下",
      D: "等待5秒"
    },
    answer: "C",
    category: "机器人维护"
  },
  {
    id: 13,
    type: "single_choice",
    question: "在KUKA机器人的信号配置时，关联IO应点击以下哪一个图标（ ）。",
    options: {
      A: "图标A",
      B: "图标B", 
      C: "图标C",
      D: "图标D"
    },
    answer: "A",
    category: "KUKA机器人配置",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img13.jpg",
    imageDescription: "KUKA机器人信号配置界面图标",
    imagePlaceholder: "🔗 此题包含信号配置界面图标，需要参考图形选择正确的关联IO图标"
  },
  {
    id: 14,
    type: "single_choice",
    question: "在KUKA机器人的信号配置时，搜索IO应点击以下哪一个图标（ ）。",
    options: {
      A: "图标A",
      B: "图标B", 
      C: "图标C",
      D: "图标D"
    },
    answer: "B",
    category: "KUKA机器人配置",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img14.jpg",
    imageDescription: "KUKA机器人信号配置界面图标",
    imagePlaceholder: "🔍 此题包含信号配置界面图标，需要参考图形选择正确的搜索IO图标"
  },
  {
    id: 15,
    type: "single_choice",
    question: "在KUKA机器人的信号配置时，若要显示或隐藏未关联IO应点击以下哪一个按钮（ ）。",
    options: {
      A: "按钮A",
      B: "按钮B", 
      C: "按钮C",
      D: "按钮D"
    },
    answer: "C",
    category: "KUKA机器人配置",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img15.jpg",
    imageDescription: "KUKA机器人信号配置界面按钮",
    imagePlaceholder: "🔲 此题包含信号配置界面按钮，需要参考图形选择正确的显示/隐藏未关联IO按钮"
  },
  {
    id: 16,
    type: "single_choice",
    question: "在KUKA机器人的信号配置时，若要显示或隐藏已关联IO应点击以下哪一个按钮（ ）。",
    options: {
      A: "按钮A",
      B: "按钮B", 
      C: "按钮C",
      D: "按钮D"
    },
    answer: "D",
    category: "KUKA机器人配置",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img16.jpg",
    imageDescription: "KUKA机器人信号配置界面按钮",
    imagePlaceholder: "✅ 此题包含信号配置界面按钮，需要参考图形选择正确的显示/隐藏已关联IO按钮"
  },
  {
    id: 17,
    type: "single_choice",
    question: "这个按钮的功能是（ ）",
    options: {
      A: "取消IO关联",
      B: "关联IO", 
      C: "激活控制系统",
      D: "搜索IO"
    },
    answer: "A",
    category: "KUKA机器人配置"
  },
  {
    id: 18,
    type: "single_choice",
    question: "这个按钮的功能是（ ）",
    options: {
      A: "激活控制系统",
      B: "关联IO", 
      C: "生成代码",
      D: "搜索IO"
    },
    answer: "C",
    category: "KUKA机器人配置"
  },
  {
    id: 19,
    type: "single_choice",
    question: "这个按钮的功能是（ ）",
    options: {
      A: "激活控制系统",
      B: "安装", 
      C: "生成代码",
      D: "搜索IO"
    },
    answer: "B",
    category: "KUKA机器人配置"
  },
  {
    id: 20,
    type: "single_choice",
    question: "AUTEXT模式下程序执行的速度是多少？",
    options: {
      A: "250mm/s",
      B: "500mm/s", 
      C: "编程设定的速度",
      D: "编程设定的50%速度"
    },
    answer: "C",
    category: "机器人操作"
  },
  {
    id: 21,
    type: "single_choice",
    question: "需要调整手动运行时的机器人速度需调节以下哪一项？",
    options: {
      A: "工具坐标",
      B: "程序调节量", 
      C: "手动调节量",
      D: "基坐标"
    },
    answer: "C",
    category: "机器人操作"
  },
  {
    id: 22,
    type: "single_choice",
    question: "需要调整程序运行时的机器人速度需调节以下哪一项？",
    options: {
      A: "工具坐标",
      B: "程序调节量", 
      C: "手动调节量",
      D: "基坐标"
    },
    answer: "B",
    category: "机器人操作"
  },
  {
    id: 23,
    type: "single_choice",
    question: "KUKA机器人语言在（ ）设置",
    options: {
      A: "配置>其它>语言",
      B: "配置>用户组>语言", 
      C: "配置>安全配置>语言",
      D: "配置>状态键>语言"
    },
    answer: "A",
    category: "KUKA机器人配置"
  },
  {
    id: 24,
    type: "single_choice",
    question: "KUKA机器人不支持哪种语言（ ）",
    options: {
      A: "甲骨文",
      B: "中文（简体）", 
      C: "英文",
      D: "日文"
    },
    answer: "A",
    category: "KUKA机器人配置"
  },
  {
    id: 25,
    type: "single_choice",
    question: "切换为以下哪一个用户组不需要输入密码？",
    options: {
      A: "操作人员",
      B: "专家", 
      C: "安全维护人员",
      D: "管理员"
    },
    answer: "A",
    category: "KUKA机器人配置"
  },
  {
    id: 26,
    type: "single_choice",
    question: "TOOL坐标系的原点被称为（ ）",
    options: {
      A: "TDP",
      B: "TPC", 
      C: "TCP",
      D: "TPD"
    },
    answer: "C",
    category: "机器人坐标系"
  },
  {
    id: 27,
    type: "single_choice",
    question: "BASE坐标系的特点是什么？",
    options: {
      A: "说明基坐标在世界坐标系中的位置",
      B: "说明机器人在世界坐标系中的位置", 
      C: "原点为机器人法兰中心",
      D: "固定于机器人足内"
    },
    answer: "A",
    category: "机器人坐标系"
  },
  {
    id: 28,
    type: "single_choice",
    question: "FLANGE坐标系的原点是（ ）",
    options: {
      A: "机器人法兰中心",
      B: "大多数情况下位于机器人足部", 
      C: "固定于机器人足内",
      D: "可自由定义"
    },
    answer: "A",
    category: "机器人坐标系"
  },
  {
    id: 29,
    type: "single_choice",
    question: "可供选择的工具坐标系有（ ）个。",
    options: {
      A: "25",
      B: "20", 
      C: "18",
      D: "16"
    },
    answer: "D",
    category: "机器人坐标系"
  },
  {
    id: 30,
    type: "single_choice",
    question: "可供选择的基坐标系有（ ）个。",
    options: {
      A: "32",
      B: "25", 
      C: "20",
      D: "16"
    },
    answer: "A",
    category: "机器人坐标系"
  },
  {
    id: 31,
    type: "single_choice",
    question: "这个按键的功能是（ ）",
    options: {
      A: "编辑按键",
      B: "页面按键", 
      C: "键盘按键",
      D: "启动按键"
    },
    answer: "C",
    category: "机器人操作",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img31.jpg",
    imageDescription: "KUKA机器人示教器按键图标",
    imagePlaceholder: "⌨️ 此题包含示教器按键图，需要参考图形识别按键功能"
  },
  {
    id: 32,
    type: "single_choice",
    question: "这个按键的功能是（ ）",
    options: {
      A: "编辑按键",
      B: "页面按键", 
      C: "键盘按键",
      D: "停止按键"
    },
    answer: "D",
    category: "机器人操作",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img32.jpg",
    imageDescription: "KUKA机器人示教器停止按键图标",
    imagePlaceholder: "⏹️ 此题包含示教器停止按键图，需要参考图形识别按键功能"
  },
  {
    id: 33,
    type: "single_choice",
    question: "这个按键的功能是（ ）",
    options: {
      A: "编辑按键",
      B: "页面按键", 
      C: "键盘按键",
      D: "逆向启动按键"
    },
    answer: "D",
    category: "机器人操作",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img33.jpg",
    imageDescription: "KUKA机器人示教器逆向启动按键图标",
    imagePlaceholder: "⏪ 此题包含示教器逆向启动按键图，需要参考图形识别按键功能"
  },
  {
    id: 34,
    type: "single_choice",
    question: "该按键作用是（ ）",
    options: {
      A: "编辑按键",
      B: "页面按键", 
      C: "键盘按键",
      D: "启动按键"
    },
    answer: "D",
    category: "机器人操作",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img34.jpg",
    imageDescription: "KUKA机器人示教器启动按键图标",
    imagePlaceholder: "▶️ 此题包含示教器启动按键图，需要参考图形识别按键功能"
  },
  {
    id: 35,
    type: "single_choice",
    question: "在笛卡尔工作空间中，仅（ ）的位置受到监控。无法监控机器人的其它部件是否超出工作空间。",
    options: {
      A: "加工物料",
      B: "机器人的每一个部位", 
      C: "机器人安装",
      D: "TCP"
    },
    answer: "D",
    category: "机器人安全"
  },
  {
    id: 36,
    type: "single_choice",
    question: "在配置工作空间时，为了形成复杂的形状，可以（ ）。",
    options: {
      A: "激活多个工作空间",
      B: "设置工作空间为复杂的形状", 
      C: "安装护栏防止机器人超出范围",
      D: "机器人可以识别环境自动设置工作空间"
    },
    answer: "A",
    category: "机器人安全"
  },
  {
    id: 37,
    type: "single_choice",
    question: "KUKA机器人最多可建立（ ）个轴坐标工作空间。",
    options: {
      A: "6",
      B: "7", 
      C: "8",
      D: "9"
    },
    answer: "C",
    category: "机器人安全"
  },
  {
    id: 38,
    type: "single_choice",
    question: "KUKA机器人可建立（ ）个笛卡尔工作空间。",
    options: {
      A: "7",
      B: "8", 
      C: "9",
      D: "10"
    },
    answer: "B",
    category: "机器人安全"
  },
  {
    id: 39,
    type: "single_choice",
    question: "在KUKA机器人中'不允许的空间'的含义是什么（ ）。",
    options: {
      A: "只允许机器人在此类空间之外运动",
      B: "不能设置工作空间", 
      C: "工作空间里有人",
      D: "工作空间在机器人最大行程之外"
    },
    answer: "A",
    category: "机器人安全"
  },
  {
    id: 40,
    type: "single_choice",
    question: "在KUKA机器人的信号配置时，关联IO应点击以下哪一个图标（ ）。",
    options: {
      A: "图标A",
      B: "图标B", 
      C: "图标C",
      D: "图标D"
    },
    answer: "A",
    category: "KUKA机器人配置",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img40.jpg",
    imageDescription: "KUKA机器人信号配置界面关联IO图标",
    imagePlaceholder: "🔗 此题包含信号配置界面图标，需要参考图形选择正确的关联IO图标"
  },
  {
    id: 41,
    type: "single_choice",
    question: "在KUKA机器人的信号配置时，搜索IO应点击以下哪一个图标（ ）。",
    options: {
      A: "图标A",
      B: "图标B", 
      C: "图标C",
      D: "图标D"
    },
    answer: "B",
    category: "KUKA机器人配置",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img41.jpg",
    imageDescription: "KUKA机器人信号配置界面搜索IO图标",
    imagePlaceholder: "🔍 此题包含信号配置界面图标，需要参考图形选择正确的搜索IO图标"
  },
  {
    id: 42,
    type: "single_choice",
    question: "在KUKA机器人的信号配置时，若要显示或隐藏未关联IO应点击以下哪一个按钮（ ）。",
    options: {
      A: "按钮A",
      B: "按钮B", 
      C: "按钮C",
      D: "按钮D"
    },
    answer: "C",
    category: "KUKA机器人配置",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img42.jpg",
    imageDescription: "KUKA机器人信号配置界面显示隐藏未关联IO按钮",
    imagePlaceholder: "🔲 此题包含信号配置界面按钮，需要参考图形选择正确的显示/隐藏未关联IO按钮"
  },
  {
    id: 43,
    type: "single_choice",
    question: "在KUKA机器人的信号配置时，若要显示或隐藏已关联IO应点击以下哪一个按钮（ ）。",
    options: {
      A: "按钮A",
      B: "按钮B", 
      C: "按钮C",
      D: "按钮D"
    },
    answer: "D",
    category: "KUKA机器人配置",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img43.jpg",
    imageDescription: "KUKA机器人信号配置界面显示隐藏已关联IO按钮",
    imagePlaceholder: "✅ 此题包含信号配置界面按钮，需要参考图形选择正确的显示/隐藏已关联IO按钮"
  },
  {
    id: 44,
    type: "single_choice",
    question: "正常情况下机器人第六轴可以运行（ ）",
    options: {
      A: "180°",
      B: "360°", 
      C: "大于360°",
      D: "90°"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 45,
    type: "single_choice",
    question: "力传感器通常不会安装在工业机器人的哪个位置（ ）。",
    options: {
      A: "机座",
      B: "机器人腕部", 
      C: "手指指尖",
      D: "关节驱动器轴上"
    },
    answer: "A",
    category: "机器人传感器"
  },
  {
    id: 46,
    type: "single_choice",
    question: "下面哪一项不属于工业机器人子系统（ ）",
    options: {
      A: "导航系统",
      B: "机械结构系统", 
      C: "控制系统",
      D: "驱动系统"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 47,
    type: "single_choice",
    question: "用来表征机器人重复定位其手部到达同一目标位置的能力的参数是（ ）。",
    options: {
      A: "重复定位精度",
      B: "速度", 
      C: "工作范围",
      D: "定位精度"
    },
    answer: "A",
    category: "机器人参数"
  },
  {
    id: 48,
    type: "single_choice",
    question: "机器人的（ ）是机器人末端的最大速度。",
    options: {
      A: "工作速度",
      B: "运动速度", 
      C: "最大工作速度",
      D: "最佳工作速度"
    },
    answer: "C",
    category: "机器人参数"
  },
  {
    id: 49,
    type: "single_choice",
    question: "选用接近开关时应注意对工作电压、负载电流、（ ）、检测距离等各项指标的要求。",
    options: {
      A: "工作功率",
      B: "响应频率", 
      C: "工作电流",
      D: "工作速度"
    },
    answer: "B",
    category: "机器人传感器"
  },
  {
    id: 50,
    type: "single_choice",
    question: "关于机器人操作，下列说法错误的是（ ）。",
    options: {
      A: "不要佩戴手套操作示教盒",
      B: "工作结束时，应将机器人置于零位位置或安全位置", 
      C: "操作人员只要保持在机器人工作范围外，可不佩戴防具",
      D: "操作人员必须经过培训上岗"
    },
    answer: "C",
    category: "机器人安全"
  },
  {
    id: 51,
    type: "single_choice",
    question: "使用示教盒操作机器人时，按下使能键，哪种模式下无法获得使能？（ ）",
    options: {
      A: "手动",
      B: "自动", 
      C: "示教",
      D: "增量"
    },
    answer: "B",
    category: "机器人操作"
  },
  {
    id: 52,
    type: "single_choice",
    question: "位姿是由（ ）两部分构成。",
    options: {
      A: "位置和速度",
      B: "位置和运行状态", 
      C: "位置和姿态",
      D: "速度和姿态"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 53,
    type: "single_choice",
    question: "触摸屏通过（ ）方式与PLC交流信息。",
    options: {
      A: "通讯",
      B: "I/O信号控制", 
      C: "继电器连接",
      D: "电气连接"
    },
    answer: "A",
    category: "机器人系统"
  },
  {
    id: 54,
    type: "single_choice",
    question: "位姿是由（ ）两部分构成。",
    options: {
      A: "位置和速度",
      B: "位置和运行状态", 
      C: "位置和姿态",
      D: "速度和姿态"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 55,
    type: "single_choice",
    question: "对于有规律的轨迹，仅示教几个特征点，计算机就能利用（ ）获得中间点的坐标。",
    options: {
      A: "优化算法",
      B: "平滑算法", 
      C: "预测算法",
      D: "插补算法"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 56,
    type: "single_choice",
    question: "要搬运体积大、重量轻的物料，如冰箱壳体、纸壳箱等，应该优先选用（ ）。",
    options: {
      A: "机械式气动夹爪",
      B: "磁力吸盘", 
      C: "真空式吸盘",
      D: "机械式液动夹爪"
    },
    answer: "C",
    category: "机器人末端执行器"
  },
  {
    id: 57,
    type: "single_choice",
    question: "机器人的运行方式有（ ）。",
    options: {
      A: "手动全速",
      B: "手动慢速", 
      C: "自动运行",
      D: "以上都是"
    },
    answer: "D",
    category: "机器人操作"
  },
  {
    id: 58,
    type: "single_choice",
    question: "机器人共有几个坐标系（ ）。",
    options: {
      A: "2个",
      B: "3个", 
      C: "4个",
      D: "5个"
    },
    answer: "D",
    category: "机器人坐标系"
  },
  {
    id: 59,
    type: "single_choice",
    question: "所谓无姿态插补，即保持第一个示教点时的姿态，在大多数情况下是机器人沿（ ）运动时出现。",
    options: {
      A: "平面圆弧",
      B: "直线", 
      C: "平面曲线",
      D: "空间曲线"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 60,
    type: "single_choice",
    question: "通常对机器人进行示教编程时，要求最初程序点与最终程序点的位置（ ），以提高工作效率。",
    options: {
      A: "相同",
      B: "不同", 
      C: "无所谓",
      D: "分离越大越好"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 61,
    type: "single_choice",
    question: "PLC采用了一系列可靠性设计，如（ ）、掉电保护、故障诊断和性信息保护及恢复等。",
    options: {
      A: "简单设计",
      B: "简化设计", 
      C: "冗余设计",
      D: "功能设计"
    },
    answer: "C",
    category: "PLC系统"
  },
  {
    id: 62,
    type: "single_choice",
    question: "一般机器人操作机中，决定姿态的机构是（ ）。",
    options: {
      A: "端拾器",
      B: "基座", 
      C: "手臂",
      D: "手腕"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 63,
    type: "single_choice",
    question: "KUKA机器人的示教器校准可以使（ ）。",
    options: {
      A: "触摸屏点击更准确",
      B: "机器人定位更准确", 
      C: "机器人运行更稳定",
      D: "机器人运行速度更快"
    },
    answer: "A",
    category: "KUKA机器人维护"
  },
  {
    id: 64,
    type: "single_choice",
    question: "以下哪一项工具更适合校准示教器（ ）。",
    options: {
      A: "手指",
      B: "尖锐的螺丝刀", 
      C: "触控笔",
      D: "都一样"
    },
    answer: "C",
    category: "KUKA机器人维护"
  },
  {
    id: 65,
    type: "single_choice",
    question: "在什么情况下才需要进行示教器校准（ ）。",
    options: {
      A: "每次开机",
      B: "不需要", 
      C: "机器人精度变低",
      D: "示教器触屏不准确"
    },
    answer: "D",
    category: "KUKA机器人维护"
  },
  {
    id: 66,
    type: "single_choice",
    question: "以下哪一个用户组可以进行示教器校准（ ）",
    options: {
      A: "操作人员",
      B: "专家", 
      C: "管理员",
      D: "都可以"
    },
    answer: "D",
    category: "KUKA机器人维护"
  },
  {
    id: 67,
    type: "single_choice",
    question: "为以下示教器校准操作步骤排序：1.用触控笔点击图例中的十字光标进行校准重置，且需要用触控笔依次进行4次点击校准。2.点击主菜单键，在出现的菜单条例中点击'display'。3.将安全钥匙旋钮横置到锁屏位置。4.用触控笔点击任意处，结束校准流程。5.点击'calibrate'。6.将安全钥匙旋钮竖置到解锁位置，继续使用SMARTPAD（示教器）。",
    options: {
      A: "2、3、6、5、4、1",
      B: "3、2、5、1、4、6", 
      C: "6、5、4、3、2、1",
      D: "1、2、3、4、5、6"
    },
    answer: "B",
    category: "KUKA机器人维护"
  },
  {
    id: 68,
    type: "single_choice",
    question: "KUKA机器人示教器中在背光关闭的情况下，100%的亮度和50%的亮度（ ）。",
    options: {
      A: "一样亮",
      B: "100%亮度更亮", 
      C: "50%亮度更亮",
      D: "屏幕无法显示"
    },
    answer: "A",
    category: "KUKA机器人操作"
  },
  {
    id: 69,
    type: "single_choice",
    question: "KUKA机器人示教器中将亮度调整到100%后，若是关闭背光，则会（ ）。",
    options: {
      A: "屏幕变暗",
      B: "屏幕亮度不变", 
      C: "屏幕更亮",
      D: "屏幕无法显示"
    },
    answer: "A",
    category: "KUKA机器人操作"
  },
  {
    id: 70,
    type: "single_choice",
    question: "将亮度调整到0%后，打开和关闭背光相比，（ ）。",
    options: {
      A: "关闭背光更暗",
      B: "一样亮", 
      C: "关闭背光显示更清晰",
      D: "屏幕无法显示"
    },
    answer: "B",
    category: "KUKA机器人操作"
  },
  {
    id: 71,
    type: "single_choice",
    question: "库卡示教器的钥匙开关的功能是（ ）。",
    options: {
      A: "示教器锁屏",
      B: "机器人锁定", 
      C: "调出连接管理器",
      D: "示教器开关机"
    },
    answer: "C",
    category: "KUKA机器人操作"
  },
  {
    id: 72,
    type: "single_choice",
    question: "在KUKA机器人中示教器上紧急停止按钮的作用是什么（ ）。",
    options: {
      A: "关闭示教器",
      B: "机器人断电", 
      C: "解除机器人抱闸",
      D: "用于在危险情况下关停机器人"
    },
    answer: "D",
    category: "机器人安全"
  },
  {
    id: 73,
    type: "single_choice",
    question: "示教器背面的确认开关必须保持在（ ）状态下才能手动操作机器人。",
    options: {
      A: "未按下",
      B: "中间位置", 
      C: "完全按下",
      D: "都可以"
    },
    answer: "B",
    category: "机器人安全"
  },
  {
    id: 74,
    type: "single_choice",
    question: "这个按钮的功能是什么（ ）。",
    options: {
      A: "用来在smartHMI上将菜单项显示出来",
      B: "关闭示教器", 
      C: "调出连接管理器",
      D: "手动操作机器人"
    },
    answer: "A",
    category: "KUKA机器人操作"
  },
  {
    id: 75,
    type: "single_choice",
    question: "当驱动装置的状态显示此状态时代表（ ）。",
    options: {
      A: "确认开关已按下（中间位置），或不需要确认开关",
      B: "机器人已开机", 
      C: "机器人报警",
      D: "机器人在自动运行状态"
    },
    answer: "A",
    category: "KUKA机器人操作",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img75.jpg",
    imageDescription: "KUKA机器人驱动装置状态显示",
    imagePlaceholder: "🔧 此题包含驱动装置状态显示图，需要参考图形理解状态含义"
  },
  {
    id: 76,
    type: "single_choice",
    question: "点击此图标可以调整什么（ ）。",
    options: {
      A: "亮度",
      B: "6D鼠标定位", 
      C: "机器人位置",
      D: "音量"
    },
    answer: "B",
    category: "KUKA机器人操作"
  },
  {
    id: 77,
    type: "single_choice",
    question: "此按钮的作用是什么（ ）。",
    options: {
      A: "设置闹钟",
      B: "延时启动", 
      C: "显示系统时间",
      D: "定时关机"
    },
    answer: "C",
    category: "KUKA机器人操作"
  },
  {
    id: 78,
    type: "single_choice",
    question: "这两个按钮的功能是（ ）。",
    options: {
      A: "调整速度",
      B: "调整亮度", 
      C: "左右移动机器人",
      D: "正向启动和逆向启动程序"
    },
    answer: "D",
    category: "KUKA机器人操作",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-mid_img78.jpg",
    imageDescription: "KUKA机器人示教器启动按钮",
    imagePlaceholder: "▶️◀️ 此题包含示教器启动按钮图，需要参考图形识别按钮功能"
  },
  {
    id: 79,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'DECLSTATKEY'的含义是什么（ ）。",
    options: {
      A: "工艺键的名称",
      B: "工艺键的格式", 
      C: "工艺键的激活",
      D: "下一个工艺键的名称"
    },
    answer: "A",
    category: "KUKA机器人编程"
  },
  {
    id: 80,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'TOPTEXT[]'的含义是什么（ ）。",
    options: {
      A: "工艺键旁显示的文本（上部）",
      B: "工艺键旁显示的文本（居中）", 
      C: "工艺键旁显示的文本（下部）",
      D: "工艺键的激活"
    },
    answer: "A",
    category: "KUKA机器人编程"
  },
  {
    id: 81,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'CENTERTEXT[]'的含义是什么（ ）。",
    options: {
      A: "工艺键旁显示的文本（上部）",
      B: "工艺键旁显示的文本（居中）", 
      C: "工艺键旁显示的文本（下部）",
      D: "工艺键的激活"
    },
    answer: "B",
    category: "KUKA机器人编程"
  },
  {
    id: 82,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'BOTTOMTEXT[]'的含义是什么（ ）。",
    options: {
      A: "工艺键旁显示的文本（上部）",
      B: "工艺键旁显示的文本（居中）", 
      C: "工艺键旁显示的文本（下部）",
      D: "工艺键的激活"
    },
    answer: "C",
    category: "KUKA机器人编程"
  },
  {
    id: 83,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'PICTURE[]'的含义是什么（ ）。",
    options: {
      A: "不在工艺键旁显示图示",
      B: "当按下具有MINUS功能的按键时，smartHMI上显示在工艺键旁边的图示的路径说明", 
      C: "当按下具有PLUS功能的按键时，smartHMI上显示在工艺键旁边的图示的路径说明",
      D: "smartHMI上显示于工艺键旁的图示的路径说明"
    },
    answer: "D",
    category: "KUKA机器人编程"
  },
  {
    id: 84,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'KEYDOWN_PICTURE[]'的含义是什么（ ）。",
    options: {
      A: "不在工艺键旁显示图示",
      B: "当按下具有MINUS功能的按键时，smartHMI上显示在工艺键旁边的图示的路径说明", 
      C: "当按下具有PLUS功能的按键时，smartHMI上显示在工艺键旁边的图示的路径说明",
      D: "smartHMI上显示于工艺键旁的图示的路径说明"
    },
    answer: "C",
    category: "KUKA机器人编程"
  },
  {
    id: 85,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'KEYDOWNMINUS_PICTUREJ'的含义是什么（ ）。",
    options: {
      A: "不在工艺键旁显示图示",
      B: "当按下具有MINUS功能的按键时，smartHMI上显示在工艺键旁边的图示的路径说明", 
      C: "当按下具有PLUS功能的按键时，smartHMI上显示在工艺键旁边的图示的路径说明",
      D: "smartHMI上显示于工艺键旁的图示的路径说明"
    },
    answer: "B",
    category: "KUKA机器人编程"
  },
  {
    id: 86,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'STYLE'的含义是什么（ ）。",
    options: {
      A: "工艺键的格式",
      B: "工艺键的激活", 
      C: "工艺键的名称",
      D: "下一个工艺键的名称"
    },
    answer: "A",
    category: "KUKA机器人编程"
  },
  {
    id: 87,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'ENABLE'关联的变量若为TRUE，则（ ）。",
    options: {
      A: "工艺键激活",
      B: "工艺键取消激活", 
      C: "机器人启动",
      D: "程序运行"
    },
    answer: "A",
    category: "KUKA机器人编程"
  },
  {
    id: 88,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'ONKEYDOWN'的后面应输入什么（ ）。",
    options: {
      A: "当按下具有PLUS功能的按键时所运行脚本的名称",
      B: "当松开具有PLUS功能的按键时所运行脚本的名称", 
      C: "当通过主菜单激活工艺键时所运行脚本的名称",
      D: "当长时间按住具有PLUS功能的按键时所运行脚本的名称"
    },
    answer: "A",
    category: "KUKA机器人编程"
  },
  {
    id: 89,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'ONKEYUP'的后面应输入什么（ ）。",
    options: {
      A: "当按下具有PLUS功能的按键时所运行脚本的名称",
      B: "当松开具有PLUS功能的按键时所运行脚本的名称", 
      C: "当通过主菜单激活工艺键时所运行脚本的名称",
      D: "当长时间按住具有PLUS功能的按键时所运行脚本的名称"
    },
    answer: "B",
    category: "KUKA机器人编程"
  },
  {
    id: 90,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'ONKEYDOWNMINUS'的后面应输入什么（ ）。",
    options: {
      A: "当通过主菜单激活工艺键时所运行脚本的名称",
      B: "当长时间按住具有MINUS功能的按键时所运行脚本的名称", 
      C: "当松开具有MINUS功能的按键时所运行脚本的名称",
      D: "当按下具有MINUS功能的按键时所运行脚本的名称"
    },
    answer: "D",
    category: "KUKA机器人编程"
  },
  {
    id: 91,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'ONKEYUPMINUS'的后面应输入什么（ ）。",
    options: {
      A: "当通过主菜单激活工艺键时所运行脚本的名称",
      B: "当长时间按住具有MINUS功能的按键时所运行脚本的名称", 
      C: "当松开具有MINUS功能的按键时所运行脚本的名称",
      D: "当按下具有MINUS功能的按键时所运行脚本的名称"
    },
    answer: "C",
    category: "KUKA机器人编程"
  },
  {
    id: 92,
    type: "single_choice",
    question: "在进行库卡机器人工艺键编程时，'ONKEYSHOW'的后面应输入什么（ ）。",
    options: {
      A: "当通过主菜单激活工艺键时所运行脚本的名称",
      B: "当按下具有PLUS功能的按键时所运行脚本的名称", 
      C: "当长时间按住具有MINUS功能的按键时所运行脚本的名称",
      D: "当按下具有MINUS功能的按键时所运行脚本的名称"
    },
    answer: "A",
    category: "KUKA机器人编程"
  },
  {
    id: 93,
    type: "single_choice",
    question: "焊接，打磨，雕刻等模块的桌面的安装方式为（ ）。",
    options: {
      A: "单一位置摆放，快速更换",
      B: "单一位置摆放，不可更换", 
      C: "随意组合摆放，不可更换",
      D: "随意组合摆放，快速更换"
    },
    answer: "D",
    category: "工作站模块"
  },
  {
    id: 94,
    type: "single_choice",
    question: "该设备中模块的安装应该遵从的原则为（ ）",
    options: {
      A: "随意安装，无需固定牢靠",
      B: "随意安装，固定牢靠", 
      C: "固定牢靠即可",
      D: "工作范围内安装并固定牢靠"
    },
    answer: "D",
    category: "工作站模块"
  },
  {
    id: 95,
    type: "single_choice",
    question: "该设备中模块的安装与拆卸应该在（ ）进行。",
    options: {
      A: "设备断电并技术员的指导下",
      B: "设备断下的情况下", 
      C: "设备运行中",
      D: "设备运行停止后"
    },
    answer: "A",
    category: "工作站模块"
  },
  {
    id: 96,
    type: "single_choice",
    question: "该设备中模块安装完成后需要检查各模块的电气接口，以下叙述错误的是（ ）。",
    options: {
      A: "手动拉扯接口检测是够牢靠",
      B: "测量电压是否正常", 
      C: "检测接地是否正常",
      D: "检测有无短接漏接"
    },
    answer: "A",
    category: "工作站模块"
  },
  {
    id: 97,
    type: "single_choice",
    question: "该设备中打磨模块的打磨头的安装，应该关闭设备的（ ）。",
    options: {
      A: "机器人控制器电源",
      B: "设备总电源即可", 
      C: "设备总电源和设备总进气",
      D: "设备模块电源即可"
    },
    answer: "C",
    category: "工作站模块"
  },
  {
    id: 98,
    type: "single_choice",
    question: "该设备中视觉模块的安装，应注意取下相机的（ ）。",
    options: {
      A: "镜头",
      B: "光源", 
      C: "镜头盖",
      D: "通讯线缆"
    },
    answer: "C",
    category: "工作站模块"
  },
  {
    id: 99,
    type: "single_choice",
    question: "该设备中输送模块的安装与供料模块拼接时注意事项，以下叙述正确的是（ ）。",
    options: {
      A: "紧挨着安装",
      B: "适当距离并保持高度一致", 
      C: "输送模块应远离供料模块安装",
      D: "输送模块应高于供料模块安装"
    },
    answer: "A",
    category: "工作站模块"
  },
  {
    id: 100,
    type: "single_choice",
    question: "该设备中在安装各模块的气管时，应注意先断掉设备的（ ）。",
    options: {
      A: "总电源",
      B: "控制器电源", 
      C: "模块电源",
      D: "设备总进气"
    },
    answer: "D",
    category: "工作站模块"
  },
  {
    id: 101,
    type: "single_choice",
    question: "该设备中各模块在桌面上的安装方式为（ ）。",
    options: {
      A: "卡扣固定",
      B: "定位销式固定", 
      C: "铝型材螺丝螺母锁死式固定",
      D: "连接器式固定"
    },
    answer: "C",
    category: "工作站模块"
  },
  {
    id: 102,
    type: "single_choice",
    question: "打磨的模块选用气动打磨头，在使用前我们应该将设备的供气气压应调整为不小于（ ）。",
    options: {
      A: "0.1MPa",
      B: "0.2MPa", 
      C: "0.25MPa",
      D: "0.5MPa"
    },
    answer: "D",
    category: "设备参数"
  },
  {
    id: 103,
    type: "single_choice",
    question: "在光线较暗的情况下，视觉模块的显示器无法看清相机传回的图像时应（ ）。",
    options: {
      A: "关断电源重启",
      B: "手动擦拭相机镜头", 
      C: "打开相机光源",
      D: "调整相机焦距"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 104,
    type: "single_choice",
    question: "视觉模块的显示器显示出的图像很模糊时应该调整相机的（ ）。",
    options: {
      A: "焦距",
      B: "镜头位置", 
      C: "光源亮度",
      D: "像素"
    },
    answer: "A",
    category: "视觉系统"
  },
  {
    id: 105,
    type: "single_choice",
    question: "旋转供料模块选用的为步进电机，步进驱动器的拨码开关拨至左侧的为（ ）号拨码。",
    options: {
      A: "1.3.5",
      B: "2.4", 
      C: "3.6",
      D: "1.2"
    },
    answer: "D",
    category: "设备参数"
  },
  {
    id: 106,
    type: "single_choice",
    question: "变位机模块的伺服驱动器参数调整，调整前先回复出厂设置需要将参数P2-08设置为（ ）。",
    options: {
      A: "0",
      B: "1", 
      C: "10",
      D: "15"
    },
    answer: "C",
    category: "设备参数"
  },
  {
    id: 107,
    type: "single_choice",
    question: "为使变位机能够平稳运行，需要将调整速度控制增益，需要将伺服参数p2-04设置为（ ）。",
    options: {
      A: "1000~1500",
      B: "5000~6000", 
      C: "7000~8000",
      D: "10000~12000"
    },
    answer: "A",
    category: "设备参数"
  },
  {
    id: 108,
    type: "single_choice",
    question: "将伺服驱动器的参数p1-00设置为2表示（ ）。",
    options: {
      A: "脉冲控制",
      B: "方向控制", 
      C: "脉冲+方向控制",
      D: "PR模式控制"
    },
    answer: "C",
    category: "设备参数"
  },
  {
    id: 109,
    type: "single_choice",
    question: "想用PR模式来控制伺服驱动器应将参数p1-00设置为（ ）。",
    options: {
      A: "0",
      B: "1", 
      C: "2",
      D: "3"
    },
    answer: "B",
    category: "设备参数"
  },
  {
    id: 110,
    type: "single_choice",
    question: "伺服驱动器的伺服ON信号的电平的高低由参数p2-10决定的，高电平需要将其设置为（ ）。",
    options: {
      A: "0",
      B: "1", 
      C: "100",
      D: "101"
    },
    answer: "D",
    category: "设备参数"
  },
  {
    id: 111,
    type: "single_choice",
    question: "变位机模块做位置定位，则需要电机转动到指定位置立即停止，需将参数p1-32设置为（ ）。",
    options: {
      A: "0",
      B: "1", 
      C: "2",
      D: "100"
    },
    answer: "A",
    category: "设备参数"
  },
  {
    id: 112,
    type: "single_choice",
    question: "输送模块的交流驱动器，带有面板式调节，想用面板来调节电机的转动只需要将参数F03设置为（ ）。",
    options: {
      A: "0",
      B: "1", 
      C: "2",
      D: "3"
    },
    answer: "B",
    category: "设备参数"
  },
  {
    id: 113,
    type: "single_choice",
    question: "输送模块的交流驱动器，带有面板式调节，想用外部开关来调节电机的转动需要将参数F03设置为（ ）。",
    options: {
      A: "0",
      B: "1", 
      C: "2",
      D: "4"
    },
    answer: "C",
    category: "设备参数"
  },
  {
    id: 114,
    type: "single_choice",
    question: "输送模块电机的旋转方式由参数F-04控制，只允许正转时只需将参数值设置为（ ）。",
    options: {
      A: "0",
      B: "1", 
      C: "2",
      D: "3"
    },
    answer: "C",
    category: "设备参数"
  },
  {
    id: 115,
    type: "single_choice",
    question: "输送模块电机的旋转方式由参数F-04控制，即允许正转也允许反转时只需将参数值设置为（ ）。",
    options: {
      A: "1",
      B: "2", 
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "设备参数"
  },
  {
    id: 116,
    type: "single_choice",
    question: "输送带在实际应用时需要失电便制动功能，正转失电便制动功能只需将参数（ ）设置为1。",
    options: {
      A: "F-01",
      B: "F-05", 
      C: "F-07",
      D: "F-11"
    },
    answer: "D",
    category: "设备参数"
  },
  {
    id: 117,
    type: "single_choice",
    question: "输送带在实际应用时需要失电便制动功能，反转失电便制动功能只需将参数（ ）设置为1。",
    options: {
      A: "F-05",
      B: "F-07", 
      C: "F-11",
      D: "F-16"
    },
    answer: "D",
    category: "设备参数"
  },
  {
    id: 118,
    type: "single_choice",
    question: "各模块能正常使用，必须保证设备电源及模块电源为（ ）。",
    options: {
      A: "AC380V/DC24V",
      B: "AC220V/DC24V", 
      C: "AC380V",
      D: "AC220V"
    },
    answer: "B",
    category: "设备参数"
  },
  {
    id: 119,
    type: "single_choice",
    question: "视觉模块的特征匹配尺度模式有（ ）",
    options: {
      A: "手动模式",
      B: "自动模式", 
      C: "随机模式",
      D: "手动和自动模式"
    },
    answer: "D",
    category: "视觉系统"
  },
  {
    id: 120,
    type: "single_choice",
    question: "视觉模块的粗糙尺度参数设置的越小则可以得到的轮廓边缘点会（ ）。",
    options: {
      A: "增多",
      B: "减少", 
      C: "不变",
      D: "先增多后减少"
    },
    answer: "A",
    category: "视觉系统"
  },
  {
    id: 121,
    type: "single_choice",
    question: "如果检测的模块表面有很多杂质，我们可以在视觉系统的运行参数里打开（ ）选项。",
    options: {
      A: "延拓阈值",
      B: "超时控制", 
      C: "是否考虑杂斑",
      D: "最大重叠率"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 122,
    type: "single_choice",
    question: "视觉检测圆查找模块包括基本参数、运行参数和（ ）3个设置页面。",
    options: {
      A: "高级参数",
      B: "结果显示", 
      C: "结果对比",
      D: "图形参数"
    },
    answer: "B",
    category: "视觉系统"
  },
  {
    id: 123,
    type: "single_choice",
    question: "调试各模块前，需要对设备进行取电，该设备的取电方式为（ ）。",
    options: {
      A: "人脸识别",
      B: "虹膜识别", 
      C: "指纹识别",
      D: "密码识别"
    },
    answer: "C",
    category: "设备操作"
  },
  {
    id: 124,
    type: "single_choice",
    question: "变位机模块在使用前，需要手动进行（ ）操作。",
    options: {
      A: "点动正转",
      B: "点动反转", 
      C: "连续运行",
      D: "手动回原点"
    },
    answer: "D",
    category: "设备操作"
  },
  {
    id: 125,
    type: "single_choice",
    question: "行走轴模块在调试时，需要手动进行（ ）操作。",
    options: {
      A: "点动正转",
      B: "点动反转", 
      C: "连续运行",
      D: "手动回原点"
    },
    answer: "D",
    category: "设备操作"
  },
  {
    id: 126,
    type: "single_choice",
    question: "由于变位机模块没有设置左右限位，在使用时，需要手动将其移至（ ），在进行回原点操作。",
    options: {
      A: "随意位置",
      B: "零点位置", 
      C: "正极限位置",
      D: "负极限位置"
    },
    answer: "B",
    category: "设备操作"
  },
  {
    id: 127,
    type: "single_choice",
    question: "装配模块的调试，在使得气缸能伸缩到正确位置时需要调节（ ）至合适位置。",
    options: {
      A: "节流阀",
      B: "气缸位置", 
      C: "调高设备气压",
      D: "调低设备气压"
    },
    answer: "A",
    category: "设备调试"
  },
  {
    id: 128,
    type: "single_choice",
    question: "RFID模块的调试前需确认该模块与PLC的通讯是否正常，如果正常，我们将载码体放置在读写头上会出现（ ）。",
    options: {
      A: "灯光由黄变红",
      B: "灯光连续闪烁", 
      C: "灯光亮度提升",
      D: "灯光亮度下降"
    },
    answer: "B",
    category: "RFID系统"
  },
  {
    id: 129,
    type: "single_choice",
    question: "搬运模块在调试时除了可以使用简单的程序化编程还可以选择（ ）方法进行简化编程。",
    options: {
      A: "码垛指令",
      B: "焊接指令", 
      C: "宏指令",
      D: "离线编程"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 130,
    type: "single_choice",
    question: "在调试码垛模块时，使用真空吸盘需要配备真空发生器，真空发生器的气压方向为（ ）。",
    options: {
      A: "由P流向V",
      B: "由V流向P", 
      C: "由P流向B",
      D: "由B流向P"
    },
    answer: "A",
    category: "真空系统"
  },
  {
    id: 131,
    type: "single_choice",
    question: "旋转供料模块在调试时，使用机器人给转盘发送转动信号时等待转动到位时需要将转动信号（ ），以免下次无法使用。",
    options: {
      A: "在发送一次",
      B: "复位一次", 
      C: "重新配置",
      D: "重新定义"
    },
    answer: "A",
    category: "供料系统"
  },
  {
    id: 132,
    type: "single_choice",
    question: "调试伺服导轨时，应注意导轨的原点位置为（ ）。",
    options: {
      A: "左限位处",
      B: "右限位处", 
      C: "中间位",
      D: "随意位置"
    },
    answer: "C",
    category: "伺服系统"
  },
  {
    id: 133,
    type: "single_choice",
    question: "当发现机器人手指的开合与调试信号逻辑相反时，正确的做法为（ ）。",
    options: {
      A: "更换节流阀",
      B: "调节节流阀气压", 
      C: "调节手指位置",
      D: "对调手指气缸进气管与出气管的一端"
    },
    answer: "D",
    category: "气动系统"
  },
  {
    id: 134,
    type: "single_choice",
    question: "机器人程序重新开始运行，在仓库有料没有取出复位的情况下，机器人在自动模式下会（ ）。",
    options: {
      A: "正常运行",
      B: "无法启动有报警信息", 
      C: "等待物料取出正常运行",
      D: "运行至该工位时停止"
    },
    answer: "C",
    category: "机器人逻辑"
  },
  {
    id: 135,
    type: "single_choice",
    question: "旋转供料模块每次发一个转动信号，转盘转动（ ）",
    options: {
      A: "30°",
      B: "45°", 
      C: "60°",
      D: "90°"
    },
    answer: "D",
    category: "供料系统"
  },
  {
    id: 136,
    type: "single_choice",
    question: "RFID模块的读写头检测载码体的距离为（ ）",
    options: {
      A: "1~2mm",
      B: "2~5cm", 
      C: "5~10mm",
      D: "5~10cm"
    },
    answer: "B",
    category: "RFID系统"
  },
  {
    id: 137,
    type: "single_choice",
    question: "输送模块在调试时，平皮带的传动条件为（ ）",
    options: {
      A: "检测到物料时开始传动",
      B: "一直保持传动", 
      C: "手动强制才会传动",
      D: "每50s传动20s"
    },
    answer: "A",
    category: "输送系统"
  },
  {
    id: 138,
    type: "single_choice",
    question: "在工业机器人中数字量I/O信号对应的标识为（ ）",
    options: {
      A: "AI/AO",
      B: "GI/GO", 
      C: "IN/OUT",
      D: "RI/RO"
    },
    answer: "C",
    category: "信号系统"
  },
  {
    id: 139,
    type: "single_choice",
    question: "供料模块中，气缸的I/O信号在工业机器人系统中对应的为（ ）信号。",
    options: {
      A: "OUT",
      B: "IN", 
      C: "AI",
      D: "AO"
    },
    answer: "A",
    category: "信号系统"
  },
  {
    id: 140,
    type: "single_choice",
    question: "供料模块中，光电传感器的I/O信号在工业机器人系统中对应的为（ ）信号。",
    options: {
      A: "OUT",
      B: "IN", 
      C: "AI",
      D: "AO"
    },
    answer: "B",
    category: "信号系统"
  },
  {
    id: 141,
    type: "single_choice",
    question: "KUKA工业机器人系统中将信号OUT101置为1的正确编程格式为（ ）。",
    options: {
      A: "OUT[101]=1",
      B: "SETOUT[101]", 
      C: "OUT[101]STATE≡FALSE",
      D: "OUT[101]STATE≡TRUE"
    },
    answer: "D",
    category: "KUKA机器人编程"
  },
  {
    id: 142,
    type: "single_choice",
    question: "KUKA工业机器人系统中给信号OUT101发2S的脉冲，正确的编程格式为（ ）。",
    options: {
      A: "OUT[101]=ON",
      B: "OUT[101]PULSE，2S", 
      C: "PULSE101STATE≡TRUETIME≡2SEC",
      D: "OUT[101]=ON,2S"
    },
    answer: "C",
    category: "KUKA机器人编程"
  },
  {
    id: 143,
    type: "single_choice",
    question: "S7-12001214C的模拟量物理地址为（ ）。",
    options: {
      A: "IW12",
      B: "IW32", 
      C: "IW64",
      D: "IW96"
    },
    answer: "C",
    category: "PLC系统"
  },
  {
    id: 144,
    type: "single_choice",
    question: "在KUKA机器人系统中模拟量的信号表示为（ ）。",
    options: {
      A: "ANIN/ANOUT",
      B: "GI/GO", 
      C: "IN/OUT",
      D: "RI/RO"
    },
    answer: "A",
    category: "KUKA机器人编程"
  },
  {
    id: 145,
    type: "single_choice",
    question: "称重传感器采用模拟量输入信号，在使用前应当对其进行（ ）。",
    options: {
      A: "调零",
      B: "数据分析", 
      C: "手动分配物理地址",
      D: "性能测试"
    },
    answer: "A",
    category: "传感器系统"
  },
  {
    id: 146,
    type: "single_choice",
    question: "在S7-12001214C的PLC中支持的模拟量信号有（ ）。",
    options: {
      A: "仅电流型号",
      B: "仅电压信号", 
      C: "电流电压信号都支持",
      D: "电流电压信号都不支持"
    },
    answer: "B",
    category: "PLC系统"
  },
  {
    id: 147,
    type: "single_choice",
    question: "由于电压的波动性，在使用模拟量采集数据的时候需要进行（ ）。",
    options: {
      A: "多次采集进行分析，对变送器进行标定",
      B: "一次采集分析，无需标定", 
      C: "多次采集，无需标定",
      D: "一次采集分析，进行标定"
    },
    answer: "A",
    category: "传感器系统"
  },
  {
    id: 148,
    type: "single_choice",
    question: "KUKA工业机器人中将模拟量[1]输入信号的值存储于寄存器[2]中的正确编程格式为（ ）。",
    options: {
      A: "R[1]=ANIN[2]",
      B: "R[1]=ANOUT[2]", 
      C: "R[2]=ANOUT[1]",
      D: "R[2]=ANIN[1]"
    },
    answer: "D",
    category: "KUKA机器人编程"
  },
  {
    id: 149,
    type: "single_choice",
    question: "KUKA工业机器人中向模拟量[2]输出寄存器[3]中的值，正确编程格式为（ ）。",
    options: {
      A: "ANOUT[2]=R[3]",
      B: "ANOUT[3]=R[2]", 
      C: "ANIN[2]=R[3]",
      D: "ANIN[3]=R[2]"
    },
    answer: "A",
    category: "KUKA机器人编程"
  },
  {
    id: 150,
    type: "single_choice",
    question: "初始化声明数组的语句为（ ）",
    options: {
      A: "INTA[7]",
      B: "INTNUMA7", 
      C: "INTA7",
      D: "INT(A7)"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 151,
    type: "single_choice",
    question: "如果要初始化一个数组的多个元素，则必须按照数组下标（ ）。",
    options: {
      A: "升序",
      B: "降序", 
      C: "中间向两边扩散",
      D: "随意排列"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 152,
    type: "single_choice",
    question: "如果（ ）类型数组的所有数组元素都拥有相同的字符串，则不必单独初始化每个数组元素。",
    options: {
      A: "XPOS",
      B: "CHAR", 
      C: "NUM",
      D: "CONST"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 153,
    type: "single_choice",
    question: "维度为相应维度确定数组元素的数量。数组至少有1个最多有（ ）个维度。",
    options: {
      A: "1",
      B: "2", 
      C: "3",
      D: "4"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 154,
    type: "single_choice",
    question: "程序创建太多时，容易记不住对应的程序功能，此时我们可以（ ）。",
    options: {
      A: "用文件夹分类",
      B: "添加程序注解", 
      C: "添加程序等级",
      D: "添加程序编号"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 155,
    type: "single_choice",
    question: "在编写程序时，想在相邻二行之间在写一行指令的方法为（ ）。",
    options: {
      A: "光标移至上方行，再选择插入行",
      B: "光标移至下方行，再选择指令直接添加", 
      C: "随意位置，选择插入行",
      D: "下方行出直接添加自己所需的指令"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 156,
    type: "single_choice",
    question: "在编写程序时，想要连续的多行删除某一段程序时的做法正确的是（ ）。",
    options: {
      A: "点删除即可",
      B: "点出删除，在点击多行删除即可", 
      C: "点击选择，再点击需要选择的行，点删除即可",
      D: "无法进行多行删除"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 157,
    type: "single_choice",
    question: "机器人被用BRAKE停住，应在中断例程结束后沿一个新的轨迹运行。这可用（ ）指令来实现。",
    options: {
      A: "RESET",
      B: "RESUME", 
      C: "BREAKOFF",
      D: "ENINF"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 158,
    type: "single_choice",
    question: "在工业机器人中数字量I/O信号为（ ）。",
    options: {
      A: "AI/AO",
      B: "GI/GO", 
      C: "IN/OUT",
      D: "RI/RO"
    },
    answer: "C",
    category: "信号系统"
  },
  {
    id: 159,
    type: "single_choice",
    question: "机器人每次能回到它的各自轴零点，靠的是（ ）装置。",
    options: {
      A: "机械准星",
      B: "编码器", 
      C: "控制器",
      D: "内部存储器"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 160,
    type: "single_choice",
    question: "机器人控制气缸动作的信号是（ ）",
    options: {
      A: "OUT",
      B: "IN", 
      C: "AI",
      D: "AO"
    },
    answer: "A",
    category: "信号系统"
  },
  {
    id: 161,
    type: "single_choice",
    question: "机器人模块中传感器对应机器人的（ ）信号。",
    options: {
      A: "OUT",
      B: "IN", 
      C: "AI",
      D: "AO"
    },
    answer: "B",
    category: "信号系统"
  },
  {
    id: 162,
    type: "single_choice",
    question: "PLC的输出信号对应机器人的（ ）信号。",
    options: {
      A: "输入",
      B: "输出", 
      C: "模拟输出",
      D: "模拟输入"
    },
    answer: "A",
    category: "PLC系统"
  },
  {
    id: 163,
    type: "single_choice",
    question: "PLC的输入信号对应机器人的（ ）信号。",
    options: {
      A: "输入",
      B: "输出", 
      C: "模拟输出",
      D: "模拟输入"
    },
    answer: "B",
    category: "PLC系统"
  },
  {
    id: 164,
    type: "single_choice",
    question: "视觉系统的输出信号对应机器人的（ ）信号。",
    options: {
      A: "输入",
      B: "输出", 
      C: "模拟输出",
      D: "模拟输入"
    },
    answer: "A",
    category: "视觉系统"
  },
  {
    id: 165,
    type: "single_choice",
    question: "机器人的模拟信号是（ ）",
    options: {
      A: "ANIN/ANOUT",
      B: "GI/GO", 
      C: "IN/OUT",
      D: "RI/RO"
    },
    answer: "A",
    category: "信号系统"
  },
  {
    id: 166,
    type: "single_choice",
    question: "KUKA机器人系统中，中断程序的指令为（ ）",
    options: {
      A: "END",
      B: "INTERRUPT", 
      C: "ENDFOR",
      D: "ENINF"
    },
    answer: "B",
    category: "KUKA机器人编程"
  },
  {
    id: 167,
    type: "single_choice",
    question: "中断指令中，DISABLE操作的实际效果为（ ）。",
    options: {
      A: "激活一个中断",
      B: "取消激活一个中断", 
      C: "禁止一个中断",
      D: "开通一个原本禁止的中断"
    },
    answer: "C",
    category: "KUKA机器人编程"
  },
  {
    id: 168,
    type: "single_choice",
    question: "仓储没有物料时，传感器检测反馈给机器人一个（ ）信号。",
    options: {
      A: "IN",
      B: "OUT", 
      C: "AI",
      D: "AO"
    },
    answer: "A",
    category: "仓储系统"
  },
  {
    id: 169,
    type: "single_choice",
    question: "当来料检测传感器检测到物料时，输送带（ ）",
    options: {
      A: "正向运动",
      B: "反向运动", 
      C: "立即停止",
      D: "无动作"
    },
    answer: "A",
    category: "输送系统"
  },
  {
    id: 170,
    type: "single_choice",
    question: "机器人要查看和编辑系统文件必须在（ ）",
    options: {
      A: "普通用户模式",
      B: "专家模式", 
      C: "一般模式",
      D: "编辑模式"
    },
    answer: "B",
    category: "KUKA机器人操作"
  },
  {
    id: 171,
    type: "single_choice",
    question: "机器人在专家模式下可以查看文件的（ ）",
    options: {
      A: "大小",
      B: "文件名", 
      C: "注释",
      D: "以上都可以"
    },
    answer: "D",
    category: "KUKA机器人操作"
  },
  {
    id: 172,
    type: "single_choice",
    question: "KRL文件的内部结构由（ ）几部分组成。",
    options: {
      A: "声明部分",
      B: "指令部分", 
      C: "局部子程序和函数",
      D: "以上都可以"
    },
    answer: "D",
    category: "KUKA机器人编程"
  },
  {
    id: 173,
    type: "single_choice",
    question: "机器人在调试时，可以同时设置（ ）个主程序。",
    options: {
      A: "1",
      B: "2", 
      C: "3",
      D: "无限制"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 174,
    type: "single_choice",
    question: "PTP的运动方式是（ ）",
    options: {
      A: "点到点",
      B: "直线", 
      C: "圆弧",
      D: "关节"
    },
    answer: "A",
    category: "机器人运动"
  },
  {
    id: 175,
    type: "single_choice",
    question: "LIN的运动方式是（ ）",
    options: {
      A: "点到点",
      B: "直线", 
      C: "圆弧",
      D: "关节"
    },
    answer: "B",
    category: "机器人运动"
  },
  {
    id: 176,
    type: "single_choice",
    question: "CIRC的运动方式是（ ）",
    options: {
      A: "点到点",
      B: "直线", 
      C: "圆弧",
      D: "关节"
    },
    answer: "C",
    category: "机器人运动"
  },
  {
    id: 177,
    type: "single_choice",
    question: "对于有规律的轨迹，仅示教几个特征点，计算机就能利用（ ）获得中间点的坐标。",
    options: {
      A: "优化算法",
      B: "平滑算法", 
      C: "预测算法",
      D: "插补算法"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 178,
    type: "single_choice",
    question: "KUKA工业机器人中平移的指令为（ ）",
    options: {
      A: "OFFSET",
      B: "LIN_REL", 
      C: "RESET",
      D: "OFF"
    },
    answer: "B",
    category: "KUKA机器人编程"
  },
  {
    id: 179,
    type: "single_choice",
    question: "在对末端夹具进行旋转时我们采用的指令为（ ）。",
    options: {
      A: "PTP",
      B: "LIN", 
      C: "CIRC",
      D: "PL"
    },
    answer: "A",
    category: "机器人运动"
  },
  {
    id: 180,
    type: "single_choice",
    question: "在偏移中使用变量来赋值，一般变量前需要加（ ）符号。",
    options: {
      A: "a",
      B: "#", 
      C: "$",
      D: "%"
    },
    answer: "C",
    category: "KUKA机器人编程"
  },
  {
    id: 181,
    type: "single_choice",
    question: "在使用偏移指令加[x10]，表示的含义为（ ）。",
    options: {
      A: "轴1旋转10°",
      B: "X轴正方向偏移10", 
      C: "X轴负方向偏移20",
      D: "X轴赋值等于20"
    },
    answer: "B",
    category: "KUKA机器人编程"
  },
  {
    id: 182,
    type: "single_choice",
    question: "直线运动指令为（ ）。",
    options: {
      A: "PTP",
      B: "LIN", 
      C: "CIRC",
      D: "SPLINE"
    },
    answer: "B",
    category: "机器人运动"
  },
  {
    id: 183,
    type: "single_choice",
    question: "圆弧运动指令为（ ）。",
    options: {
      A: "PTP",
      B: "LIN", 
      C: "CIRC",
      D: "SPLINE"
    },
    answer: "C",
    category: "机器人运动"
  },
  {
    id: 184,
    type: "single_choice",
    question: "以下关于PTP的描述，错误的是（ ）",
    options: {
      A: "运动的具体过程不可预见",
      B: "导向轴是达到目标点所需时间最短的轴", 
      C: "程序中的第一个运动必须为PTP运动",
      D: "由于机器人轴的旋转运动，因此弧形轨迹会比直线轨迹更快"
    },
    answer: "B",
    category: "机器人运动"
  },
  {
    id: 185,
    type: "single_choice",
    question: "机器视觉系统是一种（ ）的光传感系统，同时集成软硬件，综合现代计算机，光学、电子技术。",
    options: {
      A: "非接触式",
      B: "接触式", 
      C: "自动控制",
      D: "智能控制"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 186,
    type: "single_choice",
    question: "视觉应用中，随着工作距离变大，视野相应（ ）。",
    options: {
      A: "不变",
      B: "变小", 
      C: "变大",
      D: "不确定"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 187,
    type: "single_choice",
    question: "传感器包括以下三个功能部件：敏感元件、传感元件、（ ）元件。",
    options: {
      A: "辅助",
      B: "控制", 
      C: "执行",
      D: "转换"
    },
    answer: "D",
    category: "传感器系统"
  },
  {
    id: 188,
    type: "single_choice",
    question: "传感器的运用，使得机器人具有了一定的（ ）能力。",
    options: {
      A: "一般",
      B: "重复工作", 
      C: "识别判断",
      D: "逻辑思维"
    },
    answer: "C",
    category: "传感器系统"
  },
  {
    id: 189,
    type: "single_choice",
    question: "下列设备中，不属于工作站机械系统维护范畴的是（ ）。",
    options: {
      A: "机器人本体",
      B: "工件传输单元", 
      C: "焊接电源",
      D: "末端执行器"
    },
    answer: "C",
    category: "设备维护"
  },
  {
    id: 190,
    type: "single_choice",
    question: "模拟通信系统与数字通信系统的主要区别是（ ）。",
    options: {
      A: "载波频率不一样",
      B: "信道传送的信号不一样", 
      C: "调制方式不一样",
      D: "编码方式不一样"
    },
    answer: "B",
    category: "通信系统"
  },
  {
    id: 191,
    type: "single_choice",
    question: "视觉应用中，随着工作距离变大，视野相应（ ）。",
    options: {
      A: "不变",
      B: "变小", 
      C: "变大",
      D: "不确定"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 192,
    type: "single_choice",
    question: "在PLC编程中，最常用的编程语言是（ ）",
    options: {
      A: "LAD",
      B: "STL", 
      C: "FBD",
      D: "C"
    },
    answer: "A",
    category: "PLC系统"
  },
  {
    id: 193,
    type: "single_choice",
    question: "RFID系统中的标签(Tag)由（ ）及芯片组成，每个标签具有唯一的电子编码。",
    options: {
      A: "耦合元件",
      B: "读写器", 
      C: "射频模块",
      D: "电子感应器"
    },
    answer: "A",
    category: "RFID系统"
  },
  {
    id: 194,
    type: "single_choice",
    question: "数据类型BOOL在程序中所代表的类型为（ ）",
    options: {
      A: "数字量",
      B: "模拟量", 
      C: "逻辑量",
      D: "布尔量"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 195,
    type: "single_choice",
    question: "在机器人搬运工作站中，用于控制机器人夹爪工具开合的动作信号是（ ）。",
    options: {
      A: "数字量输出信号",
      B: "数字量输入信号", 
      C: "模拟量输入信号",
      D: "模拟量输出信号"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 196,
    type: "single_choice",
    question: "为防止触摸屏误操作，可通过示教盒的'主菜单'，点击（ ）来锁定触摸屏。",
    options: {
      A: "锁定屏幕",
      B: "手动操纵", 
      C: "校准",
      D: "资源管理器"
    },
    answer: "A",
    category: "机器人操作"
  },
  {
    id: 197,
    type: "single_choice",
    question: "在编写程序时，我们除了可以使用示教盒编制外还可以使用（ ）后导入机器人系统。",
    options: {
      A: "离线编程软件",
      B: "3维软件", 
      C: "机器人调试软件",
      D: "只能使用示教盒编制"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 198,
    type: "single_choice",
    question: "在编制码垛程序或者搬运程序时，除了点位示教法还可以使用（ ）。",
    options: {
      A: "偏移指令",
      B: "循环指令+计算程序", 
      C: "判断指令",
      D: "跳转指令"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 199,
    type: "single_choice",
    question: "在编制码垛程序或者搬运程序时，最简单的程序编制方法为（ ）。",
    options: {
      A: "偏移指令",
      B: "循环指令+计算程序", 
      C: "码垛指令",
      D: "循环指令"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 200,
    type: "single_choice",
    question: "在编制程序时，我们可以选择一个程序写完所有的逻辑，也可以选择（ ）进行编制。",
    options: {
      A: "分为多个子程序",
      B: "分为多个主程序", 
      C: "分为多个例行程序",
      D: "程序集合"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 201,
    type: "single_choice",
    question: "在编写程序中，我们可以使用TEST指令来帮助计算，TEST指令的执行语句为（ ）。",
    options: {
      A: "CASE",
      B: "SWITCH", 
      C: "CHOSE",
      D: "BREAK"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 202,
    type: "single_choice",
    question: "工业机器人用吸盘工具拾取物体，是靠（ ）把吸附头与物体压在一起，实现物体拾取。",
    options: {
      A: "机械手指",
      B: "电线圈产生的电磁", 
      C: "大气压力",
      D: "摩擦力"
    },
    answer: "C",
    category: "机器人末端执行器"
  },
  {
    id: 203,
    type: "single_choice",
    question: "气管接头一般分为金属接头和（ ）。",
    options: {
      A: "炭纤维接头",
      B: "木质接头", 
      C: "塑料接头",
      D: "玻璃纤维"
    },
    answer: "C",
    category: "气动系统"
  },
  {
    id: 204,
    type: "single_choice",
    question: "机器视觉系统不能进行物体（ ）的判断。",
    options: {
      A: "材质",
      B: "尺寸", 
      C: "形状",
      D: "颜色"
    },
    answer: "A",
    category: "视觉系统"
  },
  {
    id: 205,
    type: "single_choice",
    question: "以下属于工业机器人内部传感器的是（ ）。",
    options: {
      A: "视觉传感器",
      B: "力觉传感器", 
      C: "距离传感器",
      D: "速度传感器"
    },
    answer: "D",
    category: "机器人传感器"
  },
  {
    id: 206,
    type: "single_choice",
    question: "为了使当前的机器人位置与机器人程序中的当前点位置保持一致，必须执行（ ）运行。",
    options: {
      A: "BCO",
      B: "MAIN", 
      C: "initialize",
      D: "origin"
    },
    answer: "A",
    category: "机器人操作"
  },
  {
    id: 207,
    type: "single_choice",
    question: "编程模块用字母（ ）标示。",
    options: {
      A: "N",
      B: "C", 
      C: "B",
      D: "M"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 208,
    type: "single_choice",
    question: "完成一个正方形的轨迹示教，最少需要（ ）个LIN指令。",
    options: {
      A: "3",
      B: "4", 
      C: "5",
      D: "6"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 209,
    type: "single_choice",
    question: "机器人回到初始位置的程序指令采用哪种运动模式。",
    options: {
      A: "PTP",
      B: "LIN", 
      C: "CIRC",
      D: "SPLINE"
    },
    answer: "A",
    category: "机器人运动"
  },
  {
    id: 210,
    type: "single_choice",
    question: "每次更改完运动指令后都必须在（ ）下测试机器人程序。",
    options: {
      A: "T1",
      B: "T2", 
      C: "AUTO",
      D: "EXT"
    },
    answer: "A",
    category: "机器人安全"
  },
  {
    id: 211,
    type: "single_choice",
    question: "用外部TCP进行运动编程时，在选项窗口Frames中，外部TCP项的值必须为（ ）。",
    options: {
      A: "NULL",
      B: "WOBJ1", 
      C: "TRUE",
      D: "FALSE"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 212,
    type: "single_choice",
    question: "在机器人运行过程中遇到姿态导致的奇点问题，可以通过添加（ ）指令来纠正。",
    options: {
      A: "PTP",
      B: "LIN", 
      C: "CIRC",
      D: "SPLINE"
    },
    answer: "A",
    category: "机器人运动"
  },
  {
    id: 213,
    type: "single_choice",
    question: "输送模块电机的旋转方式由参数F-04控制，只允许正转时只需将参数值设置为（ ）。",
    options: {
      A: "0",
      B: "1", 
      C: "2",
      D: "3"
    },
    answer: "C",
    category: "设备参数"
  },
  {
    id: 214,
    type: "single_choice",
    question: "输送模块电机的旋转方式由参数F-04控制，即允许正转也允许反转时只需将参数值设置为（ ）。",
    options: {
      A: "1",
      B: "2", 
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "设备参数"
  },
  {
    id: 215,
    type: "single_choice",
    question: "机器人等待启动使用（ ）数字输入。",
    options: {
      A: "IN7",
      B: "IN8", 
      C: "IN9",
      D: "IN10"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 216,
    type: "single_choice",
    question: "机器人简单外围设备控制示教编程是用（ ）指令。",
    options: {
      A: "循环",
      B: "条件判断", 
      C: "条件循环",
      D: "输入输出"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 217,
    type: "single_choice",
    question: "工业机器人与PLC之间的通讯方式为（ ）",
    options: {
      A: "CC-LINK",
      B: "EtherNetIP", 
      C: "Profibus-DP",
      D: "Modbus-TCP"
    },
    answer: "D",
    category: "通信系统"
  },
  {
    id: 218,
    type: "single_choice",
    question: "机器人与PLC之间的信息交互，其机器人的数字输入信号对应PLC的数字（ ）信号。",
    options: {
      A: "模拟量",
      B: "组", 
      C: "输出",
      D: "输入"
    },
    answer: "D",
    category: "PLC系统"
  },
  {
    id: 219,
    type: "single_choice",
    question: "各模块里面的气缸、快换对应机器人的（ ）信号。",
    options: {
      A: "输入",
      B: "模拟量", 
      C: "输出",
      D: "组"
    },
    answer: "C",
    category: "信号系统"
  },
  {
    id: 220,
    type: "single_choice",
    question: "各模块里面的光电传感器、限位传感器对应的机器人的（ ）信号。",
    options: {
      A: "输入",
      B: "模拟量", 
      C: "输出",
      D: "组"
    },
    answer: "A",
    category: "信号系统"
  },
  {
    id: 221,
    type: "single_choice",
    question: "外部控制系统中选用的PLC设备型号为（ ）。",
    options: {
      A: "s7-1214C",
      B: "s7-1215", 
      C: "s7-200",
      D: "s7-200SMART"
    },
    answer: "A",
    category: "PLC系统"
  },
  {
    id: 222,
    type: "single_choice",
    question: "外部控制系统中选用的PLC设备型号为西门子s7-1214C，其输入/输出点位为（ ）。",
    options: {
      A: "16输入/16输出",
      B: "16输入/10输出", 
      C: "14输入/10输出",
      D: "10输入/14输出"
    },
    answer: "C",
    category: "PLC系统"
  },
  {
    id: 223,
    type: "single_choice",
    question: "外部设备机器视觉的拍照信号对应PLC的（ ）信号。",
    options: {
      A: "模拟量",
      B: "输入", 
      C: "输出",
      D: "组"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 224,
    type: "single_choice",
    question: "外部设备称重传感器对应PLC的（ ）信号。",
    options: {
      A: "模拟量",
      B: "输入", 
      C: "输出",
      D: "组"
    },
    answer: "A",
    category: "传感器系统"
  },
  {
    id: 225,
    type: "single_choice",
    question: "外部设备称重传感器的量程为（ ）千克。",
    options: {
      A: "0~1",
      B: "1~2", 
      C: "0~5",
      D: "1~5"
    },
    answer: "C",
    category: "传感器系统"
  },
  {
    id: 226,
    type: "single_choice",
    question: "外部设备称重传感器在PLC中对应的物理地址是（ ）。",
    options: {
      A: "固定不变的",
      B: "随机分配的", 
      C: "手动指定的",
      D: "浮动的地址"
    },
    answer: "A",
    category: "PLC系统"
  },
  {
    id: 227,
    type: "single_choice",
    question: "外部设备称重传感器通过变送器给PLC输入的为（ ）信号。",
    options: {
      A: "电压",
      B: "电流", 
      C: "二进制",
      D: "十进制"
    },
    answer: "A",
    category: "传感器系统"
  },
  {
    id: 228,
    type: "single_choice",
    question: "外部设备机器视觉的判断反馈信号对应PLC的（ ）信号。",
    options: {
      A: "模拟量",
      B: "输入", 
      C: "输出",
      D: "组"
    },
    answer: "B",
    category: "视觉系统"
  },
  {
    id: 229,
    type: "single_choice",
    question: "RFID模块的检测信号对应工业机器人的信号为（ ）。",
    options: {
      A: "OUT",
      B: "IN", 
      C: "RO",
      D: "RI"
    },
    answer: "A",
    category: "RFID系统"
  },
  {
    id: 230,
    type: "single_choice",
    question: "RFID模块的检测结果反馈信号对应工业机器人的信号为（ ）。",
    options: {
      A: "OUT",
      B: "IN", 
      C: "RO",
      D: "RI"
    },
    answer: "B",
    category: "RFID系统"
  },
  {
    id: 231,
    type: "single_choice",
    question: "RFID模块与西门子PLC走的通讯协议为（ ）。",
    options: {
      A: "RS485",
      B: "ModbusTCP", 
      C: "Profibus-DP",
      D: "EtherNetIP"
    },
    answer: "A",
    category: "RFID系统"
  },
  {
    id: 232,
    type: "single_choice",
    question: "RFID模块的检测信号使用机器人直接控制对应的机器人信号为（ ）。",
    options: {
      A: "OUT[101]",
      B: "IN[101]", 
      C: "OUT[106]",
      D: "IN[106]"
    },
    answer: "C",
    category: "RFID系统"
  },
  {
    id: 233,
    type: "single_choice",
    question: "工业机器人收到的反馈为IN[105] = ON时，此时RFID模块检测到的数据为（ ）。",
    options: {
      A: "1",
      B: "2", 
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "RFID系统"
  },
  {
    id: 234,
    type: "single_choice",
    question: "RFID模块检测到的数据为3时，工业机器人收到的反馈信号为（ ）。",
    options: {
      A: "IN[105]STATE≡TRUE",
      B: "IN[106]STATE≡TRUE", 
      C: "IN[107]STATE≡TRUE",
      D: "IN[108]STATE≡TRUE"
    },
    answer: "C",
    category: "RFID系统"
  },
  {
    id: 235,
    type: "single_choice",
    question: "智能仓储库位都装有光电传感器，其传感器对应工业机器人的（ ）信号。",
    options: {
      A: "IN",
      B: "OUT", 
      C: "AI",
      D: "AO"
    },
    answer: "A",
    category: "仓储系统"
  },
  {
    id: 236,
    type: "single_choice",
    question: "智能仓储库位的光电传感器，主要的功能为（ ）。",
    options: {
      A: "反馈给机器人物料是否放歪",
      B: "反馈给机器人物料是否损坏", 
      C: "反馈给机器人物料是否放到位",
      D: "反馈给机器人物料是否有物料"
    },
    answer: "D",
    category: "仓储系统"
  },
  {
    id: 237,
    type: "single_choice",
    question: "智能仓储为实现能机器人自动判断物料的对应库位应结合（ ）模块一起使用。",
    options: {
      A: "旋转供料",
      B: "输送带模块", 
      C: "搬运模块",
      D: "RFID模块"
    },
    answer: "D",
    category: "仓储系统"
  },
  {
    id: 238,
    type: "single_choice",
    question: "智能仓储模块的工位数为（ ）个。",
    options: {
      A: "2",
      B: "4", 
      C: "6",
      D: "8"
    },
    answer: "C",
    category: "仓储系统"
  },
  {
    id: 239,
    type: "single_choice",
    question: "智能仓储模块的光电传感器检测物料时距离有偏差时可以（ ）。",
    options: {
      A: "调整侧面旋钮",
      B: "调整设备电压", 
      C: "调整设备电流",
      D: "调整传感器位置"
    },
    answer: "A",
    category: "传感器系统"
  },
  {
    id: 240,
    type: "single_choice",
    question: "人机界面的编程有多个画面时，以下哪种操作可以将某一页设置为第一页画面（ ）。",
    options: {
      A: "添加画面",
      B: "拖动至第一位", 
      C: "选择设为起始页",
      D: "重命名为1"
    },
    answer: "C",
    category: "人机界面"
  },
  {
    id: 241,
    type: "single_choice",
    question: "选用的西门子人机界面的型号为（ ）",
    options: {
      A: "TP700",
      B: "TP1200", 
      C: "TP1500",
      D: "TP1700"
    },
    answer: "A",
    category: "人机界面"
  },
  {
    id: 242,
    type: "single_choice",
    question: "人机界面想要进行二次修改或者编辑需要（ ），否则只可以重新编辑在装载。",
    options: {
      A: "源文件",
      B: "直接下载", 
      C: "打开即可",
      D: "不可编辑"
    },
    answer: "A",
    category: "人机界面"
  },
  {
    id: 243,
    type: "single_choice",
    question: "人机界面的配置需要和PLC建立起通讯，通讯的连接与否（ ）。",
    options: {
      A: "点动界面是否有效",
      B: "查看通讯指示灯是否闪烁", 
      C: "查看通讯指示灯是否常亮",
      D: "查看PLC指示灯是否闪烁"
    },
    answer: "B",
    category: "人机界面"
  },
  {
    id: 244,
    type: "single_choice",
    question: "人机界面的编程使用的变量需要与（ ）关联起来才可正常使用。",
    options: {
      A: "机器人",
      B: "机器人控制器", 
      C: "设备模块",
      D: "PLC"
    },
    answer: "D",
    category: "人机界面"
  },
  {
    id: 245,
    type: "single_choice",
    question: "TP700的触摸屏使用的编程软件为（ ）",
    options: {
      A: "MCGS",
      B: "博图", 
      C: "Touchwin",
      D: "InoTouchEINtor"
    },
    answer: "B",
    category: "人机界面"
  },
  {
    id: 246,
    type: "single_choice",
    question: "人机界面的上传和下载都需要在（ ）模式下进行。",
    options: {
      A: "转至离线",
      B: "转至在线", 
      C: "关闭PLC",
      D: "关闭触摸屏"
    },
    answer: "A",
    category: "人机界面"
  },
  {
    id: 247,
    type: "single_choice",
    question: "应用程序的编写需要用到的标签跳转指令为（ ）。",
    options: {
      A: "CALL",
      B: "JMP/LBL", 
      C: "SELECT",
      D: "WAIT"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 248,
    type: "single_choice",
    question: "主程序对子程序的调用的指令为（ ）。",
    options: {
      A: "程序名直接调用",
      B: "JMP/LBL", 
      C: "SELECT",
      D: "WAIT"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 249,
    type: "single_choice",
    question: "KUAK用于保护气体焊并可以后续加载的应用程序包为（ ）。",
    options: {
      A: "ArcTechBasic",
      B: "ArcBasic", 
      C: "CIRCBasic",
      D: "ArcTechMESSAGE"
    },
    answer: "A",
    category: "焊接应用"
  },
  {
    id: 250,
    type: "single_choice",
    question: "焊接程序包可以为每个电源配置（ ）种焊接模式。",
    options: {
      A: "3",
      B: "4", 
      C: "5",
      D: "6"
    },
    answer: "B",
    category: "焊接应用"
  },
  {
    id: 251,
    type: "single_choice",
    question: "焊接程序包中的选项卡可以为电源的每个焊接模式定义特殊功能，特殊功能的数量最多为（ ）。",
    options: {
      A: "2",
      B: "4", 
      C: "6",
      D: "8"
    },
    answer: "D",
    category: "焊接应用"
  },
  {
    id: 252,
    type: "single_choice",
    question: "机械式摆动时，轨迹运动与摆动运动组合，以便焊接摆动焊缝，摆动时，焊嘴最多可沿（ ）个方向偏转。",
    options: {
      A: "1",
      B: "2", 
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "焊接应用"
  },
  {
    id: 253,
    type: "single_choice",
    question: "KUKA机器人有一个用于接缝跟踪的程序，可配合光切传感器一起使用，可适用于大量的应用领域，例如气体保护焊接、激光焊接，该程序名称为（ ）。",
    options: {
      A: "SeamTechBasic",
      B: "SeamTechMESSAGRC", 
      C: "TrackingBasic",
      D: "SeamTechTracking"
    },
    answer: "D",
    category: "焊接应用"
  },
  {
    id: 254,
    type: "single_choice",
    question: "接缝跟踪程序使用时，传感器控制器的通讯和轨迹修正以（ ）节拍与机器人运动同时进行。",
    options: {
      A: "2ms",
      B: "6ms", 
      C: "12ms",
      D: "20ms"
    },
    answer: "C",
    category: "焊接应用"
  },
  {
    id: 255,
    type: "single_choice",
    question: "机器人控制系统可向自带的传感器控制器最多发送（ ）个数字信号。",
    options: {
      A: "2",
      B: "4", 
      C: "6",
      D: "8"
    },
    answer: "D",
    category: "机器人控制"
  },
  {
    id: 256,
    type: "single_choice",
    question: "在KUKA机器人中伺服焊钳的程序包为（ ）。",
    options: {
      A: "ServoGunBasic",
      B: "ServoGunMESSAGR", 
      C: "ServoGun",
      D: "ServoGunTracking"
    },
    answer: "C",
    category: "焊接应用"
  },
  {
    id: 257,
    type: "single_choice",
    question: "使用焊枪示教前，检查焊枪的均压装置是否良好，动作是否正常，同时对电极头的要求是（ ）。",
    options: {
      A: "使用磨耗量大的电极头",
      B: "电极头无影响", 
      C: "更换新的电极头",
      D: "新的或旧的都行"
    },
    answer: "C",
    category: "焊接应用"
  },
  {
    id: 258,
    type: "single_choice",
    question: "在KUKA机器人中正常联动生产时，机器人示教编程器上用户组模式应该打到（ ）。",
    options: {
      A: "操作人员模式",
      B: "管理员模式", 
      C: "调试人员模式",
      D: "专家模式"
    },
    answer: "A",
    category: "机器人操作"
  },
  {
    id: 259,
    type: "single_choice",
    question: "位置等级是指机器人经过示教的位置时的接近程度，设定了合适的位置等级时，可使机器人运行出与周围状况和工件相适应的轨迹，其中位置等级（ ）。",
    options: {
      A: "CONT值越小，运行轨迹越精准",
      B: "CONT值大小，与运行轨迹关系不大", 
      C: "CONT值越大，运行轨迹越精准",
      D: "只与速度有关"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 260,
    type: "single_choice",
    question: "多种工艺流程组的输送线物料检测任务，视觉检测的为（ ）。",
    options: {
      A: "物料大小",
      B: "物料位置", 
      C: "物料颜色",
      D: "物料材质"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 261,
    type: "single_choice",
    question: "为了获得非常平稳的加工过程，希望作业启动（位置为零）时（ ）。",
    options: {
      A: "速度为零，加速度为零",
      B: "速度为零，加速度恒定", 
      C: "速度恒定，加速度为零",
      D: "速度恒定，加速度恒定"
    },
    answer: "A",
    category: "机器人控制"
  },
  {
    id: 262,
    type: "single_choice",
    question: "为了提高工业机器人进行装配的精度，则可以外加（ ）。",
    options: {
      A: "光电传感器",
      B: "视觉系统", 
      C: "编码器",
      D: "对射传感器"
    },
    answer: "B",
    category: "机器人应用"
  },
  {
    id: 263,
    type: "single_choice",
    question: "RFID为射屏识别，以下也可以代表RFID名称的为（ ）。",
    options: {
      A: "CD卡",
      B: "IC卡", 
      C: "非接触卡",
      D: "电子标签"
    },
    answer: "D",
    category: "RFID系统"
  },
  {
    id: 264,
    type: "single_choice",
    question: "有关RFID标签的数据写入功能叙述错误的是（ ）。",
    options: {
      A: "RFID标签数据写入越多越好",
      B: "RFID数据写入的方式为射屏耦合", 
      C: "数据写入可以采用读写器的形式",
      D: "数据写入可以采用标打印机的形式"
    },
    answer: "A",
    category: "RFID系统"
  },
  {
    id: 265,
    type: "single_choice",
    question: "多种工艺流程组的称重测量任务，称重模块测得的数据小于设定数据时，则机器人会将该物料放置于（ ）。",
    options: {
      A: "废料区",
      B: "合格区", 
      C: "1号位",
      D: "2号位"
    },
    answer: "A",
    category: "质量检测"
  },
  {
    id: 266,
    type: "single_choice",
    question: "多种工艺流程组的电机装配任务，在进行入库之前需要（ ）进行检测，反馈给机器人应该入几号库位。",
    options: {
      A: "视觉",
      B: "RFID", 
      C: "光电传感器",
      D: "称重传感器"
    },
    answer: "B",
    category: "机器人应用"
  },
  {
    id: 267,
    type: "single_choice",
    question: "对程序的优化和调整即为优化程序的（ ）。",
    options: {
      A: "语句",
      B: "指令", 
      C: "结构",
      D: "参数"
    },
    answer: "C",
    category: "程序优化"
  },
  {
    id: 268,
    type: "single_choice",
    question: "程序的优化中下列不适合使用使用示教编程的为（ ）。",
    options: {
      A: "货物码垛",
      B: "车轮点焊", 
      C: "轮毂去毛刺",
      D: "零件装配"
    },
    answer: "C",
    category: "程序优化"
  },
  {
    id: 269,
    type: "single_choice",
    question: "程序的优化中下列哪种工艺适合采用工程轨迹模块来进行离线编程（ ）。",
    options: {
      A: "三通管相贯线的焊接",
      B: "大型曲面工件的喷涂", 
      C: "轮毂边缘的去毛刺",
      D: "不锈钢字的切割"
    },
    answer: "C",
    category: "程序优化"
  },
  {
    id: 270,
    type: "single_choice",
    question: "程序可以被复制，但是程序名不能相同，其复制过来的程序点位数据（ ）。",
    options: {
      A: "保持不变",
      B: "完全丢失", 
      C: "逻辑改变",
      D: "名称相同，数据丢失"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 271,
    type: "single_choice",
    question: "在编制程序时，同一段逻辑语句，我们可以选择（ ）工具简化编程。",
    options: {
      A: "删除",
      B: "复制/粘贴", 
      C: "调用",
      D: "插入"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 272,
    type: "single_choice",
    question: "在对程序段进行复制后，当你进行添加操作时，程序段（ ）。",
    options: {
      A: "保持不变",
      B: "名称不同，数据相同", 
      C: "逻辑改变",
      D: "名称相同，数据丢失"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 273,
    type: "single_choice",
    question: "RFID上位机PC软件设计方法为（ ）。",
    options: {
      A: "协议命令",
      B: "LAR", 
      C: "程序向导",
      D: "识别获取"
    },
    answer: "A",
    category: "RFID系统"
  },
  {
    id: 274,
    type: "single_choice",
    question: "利用RFID、传感器、二维码等随时随地获取物体的信息，指的是（ ）。",
    options: {
      A: "可靠传递",
      B: "智能处理", 
      C: "全面感知",
      D: "互联网"
    },
    answer: "C",
    category: "物联网"
  },
  {
    id: 275,
    type: "single_choice",
    question: "在多种工艺流程组的多边形搬运任务中，机器人去一号位置抓取或者放置夹具时，需要（ ），机器人才可以进行下一步动作。",
    options: {
      A: "等待导轨位置到达",
      B: "等待机器人运动完成", 
      C: "等待夹具库放满夹具",
      D: "等待5S的延时"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 276,
    type: "single_choice",
    question: "在程序建立很多的情况下，查找程序会变得很麻烦，可以将常用的程序名称按（ ）进行命名。",
    options: {
      A: "数字大小",
      B: "字母先后顺序", 
      C: "程序名称长度",
      D: "程序字母大小写"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 277,
    type: "single_choice",
    question: "下列不属于库卡仿真与机器人的连接方式的是（ ）。",
    options: {
      A: "直接连接",
      B: "同步运动", 
      C: "同轴运动",
      D: "信号连接"
    },
    answer: "C",
    category: "KUKA仿真"
  },
  {
    id: 278,
    type: "single_choice",
    question: "库卡仿真与机器人的连接方式有（ ）种。",
    options: {
      A: "4种",
      B: "5种", 
      C: "3种",
      D: "6种"
    },
    answer: "B",
    category: "KUKA仿真"
  },
  {
    id: 279,
    type: "single_choice",
    question: "库卡仿真软件导入工件类型为（ ）。",
    options: {
      A: "vcp",
      B: "dxf", 
      C: "rf",
      D: "stl"
    },
    answer: "D",
    category: "KUKA仿真"
  },
  {
    id: 280,
    type: "single_choice",
    question: "导入所需库卡机器人的步骤为（ ） ①点击eCatalog (2)点击HOME (3)点击KUKASimLibrary3.1 (4)点击PublicModels (5)点击KUKARobots (6)选择所需机器人型号",
    options: {
      A: "②①④③③⑥",
      B: "①②④③③⑥", 
      C: "①②③④⑥⑤",
      D: "②①③④⑥⑤"
    },
    answer: "A",
    category: "KUKA仿真"
  },
  {
    id: 281,
    type: "single_choice",
    question: "一个六轴机器人至少有（ ）部分组成。",
    options: {
      A: "2",
      B: "3", 
      C: "4",
      D: "5"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 282,
    type: "single_choice",
    question: "下列属于机器人外部设备的是（ ）",
    options: {
      A: "传感器",
      B: "控制柜", 
      C: "机械手",
      D: "手持操作和编程器"
    },
    answer: "A",
    category: "机器人系统"
  },
  {
    id: 283,
    type: "single_choice",
    question: "工业机器人的可更换部分被称为构件，其属于（ ）单元。",
    options: {
      A: "制造单元",
      B: "机构", 
      C: "传动单元",
      D: "运动单元"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 284,
    type: "single_choice",
    question: "工作点的描述是通过使用工件和环境的CAD数据对坐标系进行图形辅助的相互选择，这些数据可通过数据接口导入，下列不属于数据接口导入的是（ ）。",
    options: {
      A: "IGES",
      B: "VDA-FS", 
      C: "DXF",
      D: "OLP"
    },
    answer: "D",
    category: "CAD系统"
  },
  {
    id: 285,
    type: "single_choice",
    question: "常用的三维模型数据格式是IGES和（ ）",
    options: {
      A: "bin",
      B: "hex", 
      C: "step",
      D: "docx"
    },
    answer: "C",
    category: "CAD系统"
  },
  {
    id: 286,
    type: "single_choice",
    question: "AutoCAD软件的二维设计文件后缀名是（ ）",
    options: {
      A: "bmp",
      B: "CAD", 
      C: "*.dwg",
      D: "wmf"
    },
    answer: "C",
    category: "CAD系统"
  },
  {
    id: 287,
    type: "single_choice",
    question: "CAD数据导入的精度设置主要有表面直线精度、表面角精度和（ ）。",
    options: {
      A: "曲面精度",
      B: "曲线精度", 
      C: "多边形精度",
      D: "三角形精度"
    },
    answer: "B",
    category: "CAD系统"
  },
  {
    id: 288,
    type: "single_choice",
    question: "KUKA工业机器人常用的配套仿真软件是（ ）。",
    options: {
      A: "Roboguide",
      B: "RobotStudio", 
      C: "SimPRO",
      D: "MotoSimEG"
    },
    answer: "A",
    category: "KUKA仿真"
  },
  {
    id: 289,
    type: "single_choice",
    question: "如果工作台的尺寸过大，则下列做法正确的是（ ）。",
    options: {
      A: "放大机器人尺寸",
      B: "降低工作台高度", 
      C: "缩小工作台尺寸",
      D: "保持不变"
    },
    answer: "B",
    category: "工作站设计"
  },
  {
    id: 290,
    type: "single_choice",
    question: "下列设备中属于机器人可支持的外部群组的是（ ）。",
    options: {
      A: "行走轴",
      B: "焊枪", 
      C: "变位机",
      D: "电焊机"
    },
    answer: "C",
    category: "机器人外设"
  },
  {
    id: 291,
    type: "single_choice",
    question: "下列关于仿真机器人工作站的说法错误的是（ ）。",
    options: {
      A: "仿真和离线编程的平台",
      B: "尽量还原真实现场", 
      C: "采用模型进行搭建",
      D: "机器人型号可任意选择"
    },
    answer: "D",
    category: "仿真系统"
  },
  {
    id: 292,
    type: "single_choice",
    question: "当工具模型初次加载到仿真环境中，其位置发生错误，应该进行的操作是（ ）。",
    options: {
      A: "删除此模型并重新加载",
      B: "调整机器人的位置适应工具", 
      C: "调整工具模型的位置适应机器人",
      D: "修改模型的坐标"
    },
    answer: "C",
    category: "仿真系统"
  },
  {
    id: 293,
    type: "single_choice",
    question: "下列关于改变模型的位置说法正确的是（ ）。",
    options: {
      A: "改写模型坐标参数",
      B: "点击鼠标滚轮拖动", 
      C: "同时按住鼠标左右键拖动",
      D: "自动排版"
    },
    answer: "A",
    category: "仿真系统"
  },
  {
    id: 294,
    type: "single_choice",
    question: "下列坐标系中不可自由定义的坐标系是（ ）。",
    options: {
      A: "WORLD",
      B: "TOOL", 
      C: "BASE",
      D: "FLANGE"
    },
    answer: "D",
    category: "机器人坐标系"
  },
  {
    id: 295,
    type: "single_choice",
    question: "可供选择的机器人工具坐标系有（ ）个。",
    options: {
      A: "4个",
      B: "8个", 
      C: "16个",
      D: "32个"
    },
    answer: "C",
    category: "机器人坐标系"
  },
  {
    id: 296,
    type: "single_choice",
    question: "可供选择的机器人基坐标系有（ ）个。",
    options: {
      A: "4个",
      B: "8个", 
      C: "16个",
      D: "32个"
    },
    answer: "D",
    category: "机器人坐标系"
  },
  {
    id: 297,
    type: "single_choice",
    question: "基坐标系固定于机器人底座（ ）。",
    options: {
      A: "中心",
      B: "左边", 
      C: "右边",
      D: "前面"
    },
    answer: "A",
    category: "机器人坐标系"
  },
  {
    id: 298,
    type: "single_choice",
    question: "视图操作包括选择、移动、旋转、缩放，通常使用（ ）完成这些操作。",
    options: {
      A: "摇杆",
      B: "体感输入", 
      C: "手写笔",
      D: "鼠标"
    },
    answer: "D",
    category: "仿真操作"
  },
  {
    id: 299,
    type: "single_choice",
    question: "要移动SimPro的视图，应（ ）并移动鼠标。",
    options: {
      A: "按住中键",
      B: "按住左键", 
      C: "按住右键",
      D: "同时按住左右键"
    },
    answer: "D",
    category: "仿真操作"
  },
  {
    id: 300,
    type: "single_choice",
    question: "要旋转SimPro的视图，应（ ）并移动鼠标。",
    options: {
      A: "按住中键",
      B: "按住左键", 
      C: "按住右键",
      D: "同时按住左右键"
    },
    answer: "C",
    category: "仿真操作"
  },
  {
    id: 301,
    type: "single_choice",
    question: "在仿真环境中，下列设置工具坐标系的方法中最合适的是（ ）。",
    options: {
      A: "XYZ四点法",
      B: "XYZ参照法", 
      C: "数字输入",
      D: "TCP拖拽法"
    },
    answer: "D",
    category: "仿真坐标系"
  },
  {
    id: 302,
    type: "single_choice",
    question: "KUKA.OfficeLite中没有的按键是（ ）。",
    options: {
      A: "确认键",
      B: "急停", 
      C: "显示键盘",
      D: "逆向启动"
    },
    answer: "B",
    category: "KUKA仿真"
  },
  {
    id: 303,
    type: "single_choice",
    question: "在仿真环境中，下列设置工件坐标系的方法中最合适的是（ ）。",
    options: {
      A: "三点法",
      B: "六点法", 
      C: "数字输入",
      D: "坐标系拖拽法"
    },
    answer: "D",
    category: "仿真坐标系"
  },
  {
    id: 304,
    type: "single_choice",
    question: "下列关于工具测定优点的叙述错误的是（ ）。",
    options: {
      A: "工具可以在作业方向上直线移动",
      B: "工具可环绕TCP旋转，无须更改TCP的位置", 
      C: "在程序运行中：沿着TCP上的轨道保持已编程的运行角度",
      D: "在程序运行中：沿着TCP上的轨道保持已编程的运行速度"
    },
    answer: "C",
    category: "工具标定"
  },
  {
    id: 305,
    type: "single_choice",
    question: "以下选项中无法达到调整模型位置数据的是（ ）。",
    options: {
      A: "在MODELING中更改Behaviors中的数据",
      B: "延模型箭头方向拖动", 
      C: "选中模型点击move移动",
      D: "在ComponentProperties中Coordinates下更改"
    },
    answer: "A",
    category: "仿真系统"
  },
  {
    id: 306,
    type: "single_choice",
    question: "创建工程文件结束后发现机器人型号错误，下列做法最妥当时是（ ）。",
    options: {
      A: "删除整个文件并重建",
      B: "删除机器人重新选择机器人型号", 
      C: "选中机器人点击更换机器人选择所需型号",
      D: "保持不变"
    },
    answer: "C",
    category: "仿真系统"
  },
  {
    id: 307,
    type: "single_choice",
    question: "在仿真环境中，下列方法中不属于基坐标测量方法的是（ ）。",
    options: {
      A: "三点法",
      B: "四点法", 
      C: "间接法",
      D: "数字输入"
    },
    answer: "B",
    category: "仿真坐标系"
  },
  {
    id: 308,
    type: "single_choice",
    question: "提交解释器状态显示的颜色有四种，提交解释器不会出现的颜色是（ ）。",
    options: {
      A: "红色",
      B: "灰色", 
      C: "绿色",
      D: "蓝色"
    },
    answer: "D",
    category: "KUKA仿真"
  },
  {
    id: 309,
    type: "single_choice",
    question: "SimPro设置显示比例参数，一般设置（ ）。",
    options: {
      A: "0或0.5",
      B: "5或10", 
      C: "2或3",
      D: "1或0.5"
    },
    answer: "D",
    category: "仿真系统"
  },
  {
    id: 310,
    type: "single_choice",
    question: "SimPro中导入的三维数模的位置信息都是相对于某一（ ）而言的。",
    options: {
      A: "参考轴",
      B: "参考平面", 
      C: "参考坐标系",
      D: "参考三维空间"
    },
    answer: "C",
    category: "仿真系统"
  },
  {
    id: 311,
    type: "single_choice",
    question: "在布局过程中，要设置工件对象的位置参数应（ ）。",
    options: {
      A: "左击对象，选择组件属性",
      B: "双击对象", 
      C: "按回车键",
      D: "右击对象，选择组件属性"
    },
    answer: "A",
    category: "仿真系统"
  },
  {
    id: 312,
    type: "single_choice",
    question: "IGS格式文件是一种初始图形交换规范，基于（ ）文本格式保存和导出矢量数据标准。",
    options: {
      A: "ANSI",
      B: "ASCII", 
      C: "UTF8",
      D: "UTF16"
    },
    answer: "B",
    category: "文件格式"
  },
  {
    id: 313,
    type: "single_choice",
    question: "下列对于多个并列工具的说法正确的是（ ）。",
    options: {
      A: "模型的属性不同",
      B: "工具坐标系相同", 
      C: "通过运行不同的仿真程序进行切换",
      D: "通过IO控制信号进行切换"
    },
    answer: "A",
    category: "工具管理"
  },
  {
    id: 314,
    type: "single_choice",
    question: "下列部件中不包含在eCatalog中的是（ ）。",
    options: {
      A: "抓爪",
      B: "输送机", 
      C: "围栏",
      D: "传感器"
    },
    answer: "D",
    category: "仿真资源"
  },
  {
    id: 315,
    type: "single_choice",
    question: "几乎所有认可的CAD格式都可导入KUKA.Sim，下列文件格式中不能导入KUKA.Sim的是（ ）。",
    options: {
      A: "DWG",
      B: "STEP", 
      C: "IGES",
      D: "CREO"
    },
    answer: "A",
    category: "文件格式"
  },
  {
    id: 316,
    type: "single_choice",
    question: "KUKA机器人工具测量方法有（ ）种。",
    options: {
      A: "4种",
      B: "5种", 
      C: "7种",
      D: "6种"
    },
    answer: "B",
    category: "工具标定"
  },
  {
    id: 317,
    type: "single_choice",
    question: "KUKA机器人控制器最多可管理（ ）工具。",
    options: {
      A: "4个",
      B: "8个", 
      C: "16个",
      D: "32个"
    },
    answer: "C",
    category: "工具管理"
  },
  {
    id: 318,
    type: "single_choice",
    question: "在KUKA.Sim中，下列操作无法实现的是（ ）。",
    options: {
      A: "将仿真模型转换成图纸",
      B: "仿真模型以不同视图的形式展现在同一张图纸中", 
      C: "图纸中的模型能更改位置",
      D: "图纸以STEP格式导出"
    },
    answer: "D",
    category: "KUKA仿真"
  },
  {
    id: 319,
    type: "single_choice",
    question: "下列区域中不属于库卡机器人安全区域子组的是（ ）。",
    options: {
      A: "单元区域",
      B: "工作区域", 
      C: "工具上的球体",
      D: "控制区域"
    },
    answer: "D",
    category: "机器人安全"
  },
  {
    id: 320,
    type: "single_choice",
    question: "下列关于使用KUKA.Sim运行例行程序的说法不正确的是（ ）。",
    options: {
      A: "可以防止实际操作是出现碰撞",
      B: "可以减少实际操作中的损耗", 
      C: "可以避免安全事故的发生",
      D: "可以减少实际操作时调试的时间"
    },
    answer: "A",
    category: "KUKA仿真"
  },
  {
    id: 321,
    type: "single_choice",
    question: "SimPro中工具模型文件的格式都是（ ）",
    options: {
      A: "*.tool",
      B: "*.TCP", 
      C: "*.AXIS",
      D: "*.hand"
    },
    answer: "A",
    category: "工具管理"
  },
  {
    id: 322,
    type: "single_choice",
    question: "创建工具模型操作人员需要在SimPro中导入工具模型的（ ），然后安装到机器人上。",
    options: {
      A: "三维软件",
      B: "二维数据", 
      C: "三维数据",
      D: "二维软件"
    },
    answer: "C",
    category: "工具管理"
  },
  {
    id: 323,
    type: "single_choice",
    question: "工具安装到机器人法兰盘上，工具的参考坐标系和机器人（ ）坐标系重合。",
    options: {
      A: "大地",
      B: "法兰盘", 
      C: "工件",
      D: "轴"
    },
    answer: "B",
    category: "工具管理"
  },
  {
    id: 324,
    type: "single_choice",
    question: "机器人夹持工件的工具在选择时主要考虑（ ）",
    options: {
      A: "工件形状和材质",
      B: "机器人法兰", 
      C: "夹具价格",
      D: "夹具驱动方式"
    },
    answer: "A",
    category: "工具选择"
  },
  {
    id: 325,
    type: "single_choice",
    question: "下列关于仿真运行的说法错误的是（ ）",
    options: {
      A: "可运行仿真程序",
      B: "只运行仿真程序", 
      C: "可运行TP程序",
      D: "可展示仿真效果"
    },
    answer: "B",
    category: "仿真运行"
  },
  {
    id: 326,
    type: "single_choice",
    question: "在进行搬运仿真的过程中，下列叙述正确的是（ ）",
    options: {
      A: "原工件移动了位置",
      B: "原工件被隐藏", 
      C: "原工件被删除",
      D: "原工件没变化"
    },
    answer: "B",
    category: "仿真运行"
  },
  {
    id: 327,
    type: "single_choice",
    question: "下列关于仿真程序的说法错误的是（ ）",
    options: {
      A: "可转化为TP程序",
      B: "虚拟指令可用于仿真效果", 
      C: "由仿真程序编辑器创建",
      D: "虚拟示教可执行全部指令"
    },
    answer: "D",
    category: "仿真程序"
  },
  {
    id: 328,
    type: "single_choice",
    question: "通过识别模型上的特征轨迹转换为程序的动作指令，下列不属于转换方式的是（ ）。",
    options: {
      A: "检测直线添加直线指令",
      B: "全部用单位直线划分添加直线指令", 
      C: "检测圆弧添加圆弧指令",
      D: "全部用单位圆弧线划分添加圆弧指令"
    },
    answer: "D",
    category: "轨迹生成"
  },
  {
    id: 329,
    type: "single_choice",
    question: "WAITFOR最多可与（ ）个信号按逻辑连接。",
    options: {
      A: "8个",
      B: "10个", 
      C: "12个",
      D: "16个"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 330,
    type: "single_choice",
    question: "局部子程序是集成在一个主程序中的程序，因此子程序的坐标点应存放在（ ）。",
    options: {
      A: "同一个DAT文件中",
      B: "不同的DAT文件中", 
      C: "同一个SRC文件中",
      D: "不同的SRC文件中"
    },
    answer: "A",
    category: "程序结构"
  },
  {
    id: 331,
    type: "single_choice",
    question: "在中断程序中最多允许同时声明（ ）个中断。",
    options: {
      A: "8个",
      B: "16个", 
      C: "32个",
      D: "64个"
    },
    answer: "C",
    category: "中断处理"
  },
  {
    id: 332,
    type: "single_choice",
    question: "中断声明必须位于程序的（ ）部分。",
    options: {
      A: "指令部分",
      B: "声明部分", 
      C: "数据部分",
      D: "结构部分"
    },
    answer: "A",
    category: "中断处理"
  },
  {
    id: 333,
    type: "single_choice",
    question: "创建仿真程序，主要是根据工作站的（ ）。",
    options: {
      A: "规模大小",
      B: "机器人品牌", 
      C: "通讯方式",
      D: "工作流程"
    },
    answer: "D",
    category: "仿真程序"
  },
  {
    id: 334,
    type: "single_choice",
    question: "创建目标点之前先要明确（ ）。",
    options: {
      A: "工件坐标系",
      B: "工具坐标系", 
      C: "大地坐标系",
      D: "轴坐标系"
    },
    answer: "A",
    category: "仿真编程"
  },
  {
    id: 335,
    type: "single_choice",
    question: "SimPro的程序编写界面在哪个菜单栏下？",
    options: {
      A: "开始",
      B: "建模", 
      C: "程序",
      D: "VRC"
    },
    answer: "C",
    category: "仿真操作"
  },
  {
    id: 336,
    type: "single_choice",
    question: "在SimPro程序编辑界面图标表示哪个指令？",
    options: {
      A: "LIN",
      B: "PTP", 
      C: "CIRC",
      D: "PTPHome"
    },
    answer: "B",
    category: "仿真编程"
  },
  {
    id: 337,
    type: "single_choice",
    question: "下列关于虚拟机器人控制器描述错误的是（ ）",
    options: {
      A: "可用于机器人的完整离线编程",
      B: "可以与KUKA.SimPro进行I/O模拟", 
      C: "可提供工作循环时间的准确信息",
      D: "能在PC上显示经过测试的KUKA编程环境"
    },
    answer: "A",
    category: "虚拟控制器"
  },
  {
    id: 338,
    type: "single_choice",
    question: "下列不属于按键标注形式的是（ ）",
    options: {
      A: "EMPTY",
      B: "VALUE", 
      C: "KEY",
      D: "TRUE"
    },
    answer: "D",
    category: "界面设计"
  },
  {
    id: 339,
    type: "single_choice",
    question: "在图形辅助的互动离线编程中，需要依次完成很多编程步骤才能产生一个可用于生产过程的机器人程序。操作步骤可粗略分成三个阶段，下列不属于这三个阶段的是（ ）。",
    options: {
      A: "设计一个制造单元的部件",
      B: "描述工作单元的几何特征", 
      C: "制作操作任务的流程图",
      D: "为操作任务进行编程和模拟"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 340,
    type: "single_choice",
    question: "采用模型替代法创建的末端执行工具，如何实现工具的动作（ ）。",
    options: {
      A: "IO控制",
      B: "仿真指令控制", 
      C: "伺服控制",
      D: "TP程序控制"
    },
    answer: "B",
    category: "工具控制"
  },
  {
    id: 341,
    type: "single_choice",
    question: "进行码垛搬运的编写时，下列循环模式中最适合的是（ ）。",
    options: {
      A: "无限循环",
      B: "计数循环", 
      C: "当型循环",
      D: "直到型循环"
    },
    answer: "B",
    category: "程序编写"
  },
  {
    id: 342,
    type: "single_choice",
    question: "为了能提早退出子程序，可以在子程序中编入（ ）指令。",
    options: {
      A: "RETURN",
      B: "END", 
      C: "DEF",
      D: "CHECKHOME"
    },
    answer: "A",
    category: "程序控制"
  },
  {
    id: 343,
    type: "single_choice",
    question: "离线程序未经处理直接下载到真实的机器人中运行，可能导致的结果下列说法错误的是（ ）。",
    options: {
      A: "实际运动的路径与仿真的存在偏差",
      B: "运行过程中出现奇异点", 
      C: "运行过程中发生轴的限位",
      D: "可正常运行"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 344,
    type: "single_choice",
    question: "工业机器人离线编程的主要的步骤是（ ） ①轨迹规划 (2)场景搭建 (3)工序优化 (4)程序输出",
    options: {
      A: "①②③④",
      B: "②①③④", 
      C: "②①④③",
      D: "①②④③"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 345,
    type: "single_choice",
    question: "运行仿真程序，在虚拟环境中真实模拟实际工作站的（ ）。",
    options: {
      A: "电气性能",
      B: "工作流程", 
      C: "机械性能",
      D: "损耗情况"
    },
    answer: "B",
    category: "仿真运行"
  },
  {
    id: 346,
    type: "single_choice",
    question: "编辑仿真程序，主要包括坐标系和目标点的创建、（ ）。",
    options: {
      A: "程序命名",
      B: "程序轨迹规划", 
      C: "模型设计",
      D: "机器人系统校准"
    },
    answer: "B",
    category: "仿真编程"
  },
  {
    id: 347,
    type: "single_choice",
    question: "在工件所在的平面上只需要定义（ ）个点，就可以建立工件坐标系。",
    options: {
      A: "2",
      B: "3", 
      C: "4",
      D: "5"
    },
    answer: "B",
    category: "坐标系建立"
  },
  {
    id: 348,
    type: "single_choice",
    question: "在SimPro程序编辑界面图标表示哪个指令？",
    options: {
      A: "LIN",
      B: "PTP", 
      C: "CIRC",
      D: "PTPHome"
    },
    answer: "D",
    category: "仿真编程"
  },
  {
    id: 349,
    type: "single_choice",
    question: "为了使当前的机器人位置与机器人程序中的当前点位置保持一致，必须执行（ ）运行。",
    options: {
      A: "AUT",
      B: "T1", 
      C: "T2",
      D: "BCO"
    },
    answer: "D",
    category: "机器人操作"
  },
  {
    id: 350,
    type: "single_choice",
    question: "下列运行方式中必须以大于手动慢速运行的速度进行测试时，才允许使用的运行方式是（ ）。",
    options: {
      A: "AUT",
      B: "T2", 
      C: "T3",
      D: "BCO"
    },
    answer: "C",
    category: "机器人操作"
  },
  {
    id: 351,
    type: "single_choice",
    question: "下列指令中用于更改机器人位置数据的是（ ）。",
    options: {
      A: "TOUCHUP",
      B: "PTP", 
      C: "LIN",
      D: "CIRC"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 352,
    type: "single_choice",
    question: "KUKA系统变量总是以（ ）开头。可随时查询系统变量，因为它们始终有效。",
    options: {
      A: "#",
      B: "$", 
      C: "*",
      D: "//"
    },
    answer: "B",
    category: "KUKA机器人编程"
  },
  {
    id: 353,
    type: "single_choice",
    question: "附加负载数据必须输入机器人控制系统，下列数据中不必要的是（ ）。",
    options: {
      A: "物体质量",
      B: "物体体积", 
      C: "物体重心至参照系（X、Y和Z）的距离",
      D: "主惯性轴与参照系（A、B和C）的夹角"
    },
    answer: "B",
    category: "负载配置"
  },
  {
    id: 354,
    type: "single_choice",
    question: "下列关于附加负载对机器人运动的影响叙述错误的是（ ）。",
    options: {
      A: "附加负载会影响机器人运动轨迹的规划",
      B: "附加负载会影响机器人的运行速度", 
      C: "附加负载会影响机器人的运行加速度",
      D: "附加负载会影响机器人的节拍时间"
    },
    answer: "B",
    category: "负载配置"
  },
  {
    id: 355,
    type: "single_choice",
    question: "程序校准功能的作用原理是（ ）。",
    options: {
      A: "偏移工具坐标系",
      B: "更新记录点数据", 
      C: "偏移用户坐标系",
      D: "使用点位置偏移指令"
    },
    answer: "C",
    category: "程序校准"
  },
  {
    id: 356,
    type: "single_choice",
    question: "如果让夹爪工具去拾取工件，其位置和姿态由什么决定（ ）。",
    options: {
      A: "工具坐标系的原点位置和各轴方向",
      B: "工具模型上添加的模型位置和方向", 
      C: "按形状自动契合",
      D: "模型的坐标系原点和各轴方向"
    },
    answer: "B",
    category: "工具操作"
  },
  {
    id: 357,
    type: "single_choice",
    question: "虚拟电机的运动轴不可采用（ ）控制。",
    options: {
      A: "仿真指令控制",
      B: "机器人I/O控制", 
      C: "机器人伺服控制",
      D: "外部控制器伺服控制"
    },
    answer: "A",
    category: "虚拟电机"
  },
  {
    id: 358,
    type: "single_choice",
    question: "下列不能用于虚拟电机IO控制的信号是（ ）。",
    options: {
      A: "DI/DO",
      B: "RI/RO", 
      C: "AI/AO",
      D: "GI/GO"
    },
    answer: "D",
    category: "虚拟电机"
  },
  {
    id: 359,
    type: "single_choice",
    question: "KUKA.OfficeLite中有（ ）个移动键。",
    options: {
      A: "4个",
      B: "6个", 
      C: "8个",
      D: "10个"
    },
    answer: "C",
    category: "KUKA仿真"
  },
  {
    id: 360,
    type: "single_choice",
    question: "RoboDK可以通过激光跟踪传感器或立体摄像机，获得机器人的相关数据，得到机器人的（ ）报告。",
    options: {
      A: "性能精度",
      B: "能耗等级", 
      C: "噪音等级",
      D: "平均无故障时间"
    },
    answer: "A",
    category: "机器人精度"
  },
  {
    id: 361,
    type: "single_choice",
    question: "《工业机器人性能规范及其试验方法》代号为（ ）。",
    options: {
      A: "GB/T12642—2013",
      B: "DL/T645-2007", 
      C: "GB11291.1-2011",
      D: "GB/T20867-2007"
    },
    answer: "A",
    category: "标准规范"
  },
  {
    id: 362,
    type: "single_choice",
    question: "位姿准确度和位姿重复性属于（ ）测试。",
    options: {
      A: "能耗",
      B: "动态", 
      C: "寿命",
      D: "静态"
    },
    answer: "D",
    category: "性能测试"
  },
  {
    id: 363,
    type: "single_choice",
    question: "最小定位时间属于（ ）测试。",
    options: {
      A: "静态",
      B: "动态", 
      C: "噪音等级",
      D: "能耗"
    },
    answer: "B",
    category: "性能测试"
  },
  {
    id: 364,
    type: "single_choice",
    question: "离线编程技术的发展要求机器人必须具备很高的（ ）。",
    options: {
      A: "响应速度",
      B: "相对定位精度", 
      C: "绝对定位精度",
      D: "结构强度"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 365,
    type: "single_choice",
    question: "工业机器人由于减速机等柔性环节的存在，在定位时极易在末端甚至整个装置都发生（ ）现象。",
    options: {
      A: "脱落",
      B: "偏移", 
      C: "抖动",
      D: "卡死"
    },
    answer: "C",
    category: "机器人特性"
  },
  {
    id: 366,
    type: "single_choice",
    question: "机器人的（ ）是指机器人的每个轴能够实现的最小的移动距离或者最小的转动角度。",
    options: {
      A: "自由度",
      B: "分辨率", 
      C: "工作速度",
      D: "工作载荷"
    },
    answer: "B",
    category: "机器人参数"
  },
  {
    id: 367,
    type: "single_choice",
    question: "（ ）是工业机器人第一指标。",
    options: {
      A: "重复定位精度",
      B: "轴数", 
      C: "最大速度",
      D: "插补能力"
    },
    answer: "A",
    category: "机器人参数"
  },
  {
    id: 368,
    type: "single_choice",
    question: "库卡机器人持续执行回归零点的速度不得大于（ ）。",
    options: {
      A: "20°/s",
      B: "30°/s", 
      C: "15°/s",
      D: "40°/s"
    },
    answer: "C",
    category: "机器人标定"
  },
  {
    id: 369,
    type: "single_choice",
    question: "下列属于机器人结构标定的是（ ）。",
    options: {
      A: "单点标定",
      B: "三点标定", 
      C: "四点标定",
      D: "六点标定"
    },
    answer: "A",
    category: "机器人标定"
  },
  {
    id: 370,
    type: "single_choice",
    question: "下列不属于KUKA.Sim综合功能的是（ ）。",
    options: {
      A: "通过型号控制组件的I/O映射",
      B: "几何形状转换成运动系统", 
      C: "I/O信号的集成",
      D: "I/O信号的分配"
    },
    answer: "D",
    category: "KUKA仿真"
  },
  {
    id: 371,
    type: "single_choice",
    question: "机器人各轴都会出现一根可旋转的绿色箭头，可用鼠标拖动控制轴的转动。当绿色箭头变红时，表示该轴（ ）。",
    options: {
      A: "超出运动范围",
      B: "负载过大", 
      C: "位置报错",
      D: "关节轴高温报警"
    },
    answer: "A",
    category: "仿真操作"
  },
  {
    id: 372,
    type: "single_choice",
    question: "如果机器人未进行零点标定，下列机器人功能不受限制的是（ ）。",
    options: {
      A: "编程运行",
      B: "在手动模式下手动移动", 
      C: "软件限位开关打开",
      D: "在T1模式下以轴特定的方式运动"
    },
    answer: "D",
    category: "机器人标定"
  },
  {
    id: 373,
    type: "single_choice",
    question: "当机器人工具是笔形工具时，离线程序下载运行时不必考虑的是（ ）。",
    options: {
      A: "当前有效坐标系号是否一致",
      B: "笔形工具的长度", 
      C: "工具坐标系的方向",
      D: "用户坐标系的原点位置和方向"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 374,
    type: "single_choice",
    question: "有（ ）种库卡标准抓爪类型。",
    options: {
      A: "3种",
      B: "5种", 
      C: "7种",
      D: "9种"
    },
    answer: "B",
    category: "机器人抓爪"
  },
  {
    id: 375,
    type: "single_choice",
    question: "工程轨迹中哪个方向表示轨迹重复振动的方向（ ）。",
    options: {
      A: "X",
      B: "Y", 
      C: "Z",
      D: "W"
    },
    answer: "C",
    category: "工程轨迹"
  },
  {
    id: 376,
    type: "single_choice",
    question: "下列关于按下急停按钮后的动作叙述正确的是（ ）。",
    options: {
      A: "机械手及附加轴以安全停止1的方式停机",
      B: "机械手以安全停止1的方式停机", 
      C: "机械手以安全停止2的方式停机",
      D: "机械手及附加轴以安全停止1的方式停机"
    },
    answer: "A",
    category: "机器人安全"
  },
  {
    id: 377,
    type: "single_choice",
    question: "下列关于使用世界坐标系控制机器人进行编程叙述错误的是（ ）。",
    options: {
      A: "机器人的动作始终可预测",
      B: "动作始终是唯一的", 
      C: "原点和坐标方向始终是已知的",
      D: "会随着机器人的位置进行相应调整"
    },
    answer: "D",
    category: "坐标系编程"
  },
  {
    id: 378,
    type: "single_choice",
    question: "下列（ ）控制过程不受输入的负载数据的影响。",
    options: {
      A: "速度和加速度监控",
      B: "碰撞监控", 
      C: "距离监控",
      D: "能量监控"
    },
    answer: "C",
    category: "机器人监控"
  },
  {
    id: 379,
    type: "single_choice",
    question: "机械手的（ ）参数反映了机器人的结构形式和尺寸。",
    options: {
      A: "电机",
      B: "齿轮", 
      C: "编码器",
      D: "连杆"
    },
    answer: "D",
    category: "机器人结构"
  },
  {
    id: 380,
    type: "single_choice",
    question: "机器人出厂时可使用三坐标仪、激光测量仪等工具进行外部（ ）参数测量并修正。",
    options: {
      A: "直径",
      B: "半径", 
      C: "杆长",
      D: "杆径"
    },
    answer: "C",
    category: "机器人标定"
  },
  {
    id: 381,
    type: "single_choice",
    question: "（ ）是目前最流行的机器人运动学模型。",
    options: {
      A: "2D模型",
      B: "DH模型", 
      C: "3D模型",
      D: "仿真模型"
    },
    answer: "B",
    category: "运动学模型"
  },
  {
    id: 382,
    type: "single_choice",
    question: "机器人（ ）模型用于建立机器人关节空间和工作空间（笛卡尔空间）的映射关系。",
    options: {
      A: "计算机学",
      B: "机械学", 
      C: "电学",
      D: "运动学"
    },
    answer: "D",
    category: "运动学模型"
  },
  {
    id: 383,
    type: "single_choice",
    question: "在（ ）的示教类应用中只要编码器、减速器精度足够高即可省去标定工作。",
    options: {
      A: "视觉跟踪",
      B: "输送带跟踪", 
      C: "点到点",
      D: "阵列码垛"
    },
    answer: "C",
    category: "机器人应用"
  },
  {
    id: 384,
    type: "single_choice",
    question: "在KUKA机器人中运行方式T1，最大的速度为（ ）。",
    options: {
      A: "100mm/s",
      B: "150mm/s", 
      C: "200mm/s",
      D: "250mm/s"
    },
    answer: "D",
    category: "KUKA机器人操作"
  },
  {
    id: 385,
    type: "single_choice",
    question: "下列不属于基坐标测量方法的是（ ）。",
    options: {
      A: "间接法",
      B: "三点法", 
      C: "六点法",
      D: "数字输入"
    },
    answer: "C",
    category: "坐标系标定"
  },
  {
    id: 386,
    type: "single_choice",
    question: "库卡机器人最多可以配置（ ）个设备保护工作空间。",
    options: {
      A: "6个",
      B: "7个", 
      C: "8个",
      D: "9个"
    },
    answer: "D",
    category: "工作空间"
  },
  {
    id: 387,
    type: "single_choice",
    question: "机器人关节的最大限制设置选项为（ ）。",
    options: {
      A: "MinLimit",
      B: "MaxLimit", 
      C: "MaxSpeed",
      D: "MaxAcceleration"
    },
    answer: "B",
    category: "关节限制"
  },
  {
    id: 388,
    type: "single_choice",
    question: "机器人关节的最小限制设置选项为（ ）。",
    options: {
      A: "MinLimit",
      B: "MaxLimit", 
      C: "MaxSpeed",
      D: "MaxAcceleration"
    },
    answer: "A",
    category: "关节限制"
  },
  {
    id: 389,
    type: "single_choice",
    question: "机器人关节的最大速度设置选项为（ ）。",
    options: {
      A: "MinLimit",
      B: "MaxLimit", 
      C: "MaxSpeed",
      D: "MaxAcceleration"
    },
    answer: "C",
    category: "关节限制"
  },
  {
    id: 390,
    type: "single_choice",
    question: "机器人关节的最大加速度设置选项为（ ）。",
    options: {
      A: "MinLimit",
      B: "MaxLimit", 
      C: "MaxSpeed",
      D: "MaxAcceleration"
    },
    answer: "D",
    category: "关节限制"
  },
  {
    id: 391,
    type: "single_choice",
    question: "KUKA.SimPro中的定位精度取决于（ ）",
    options: {
      A: "操作者的参数设置",
      B: "操作者的示教精度", 
      C: "软件的算法能力",
      D: "模块的安装精度"
    },
    answer: "A",
    category: "仿真精度"
  },
  {
    id: 392,
    type: "single_choice",
    question: "查询当前机器人位置的方式有（ ）种。",
    options: {
      A: "1种",
      B: "2种", 
      C: "3种",
      D: "4种"
    },
    answer: "B",
    category: "机器人操作"
  },
  {
    id: 393,
    type: "single_choice",
    question: "在进行仿真编程时，机器人的运行速度与真实示教器设置方法（ ）。",
    options: {
      A: "保持一致",
      B: "不同参数", 
      C: "不同设置方法",
      D: "仿真无需设置"
    },
    answer: "A",
    category: "仿真编程"
  },
  {
    id: 394,
    type: "single_choice",
    question: "下列对定位精度叙述正确的是（ ）",
    options: {
      A: "机器人手部实际到达位置与目标位置之间的差异",
      B: "机器人实际关节角大小与目标关节角之间的差异", 
      C: "机器人实际运动轨迹与目标运动轨迹之间的差异",
      D: "机器人重复定位手部与一个位置的能力"
    },
    answer: "A",
    category: "定位精度"
  },
  {
    id: 395,
    type: "single_choice",
    question: "机器人机构能够独立运动的（ ）数目，称为机器人机构的运动自由度。",
    options: {
      A: "方向",
      B: "关节", 
      C: "电机",
      D: "工具"
    },
    answer: "B",
    category: "机器人自由度"
  },
  {
    id: 396,
    type: "single_choice",
    question: "机器人空间是指机器人（ ）运动描述参考点所能达到的空间点的集合。",
    options: {
      A: "最远端",
      B: "最近点", 
      C: "末端执行器",
      D: "中轴中点"
    },
    answer: "C",
    category: "机器人工作空间"
  },
  {
    id: 397,
    type: "single_choice",
    question: "最大加速度受到（ ）和系统过度的限制。",
    options: {
      A: "驱动功率",
      B: "减速比", 
      C: "刚性",
      D: "绝缘强度"
    },
    answer: "A",
    category: "机器人性能"
  },
  {
    id: 398,
    type: "single_choice",
    question: "机器人的轨迹精度，一般是指轨迹（ ）精度。",
    options: {
      A: "初始",
      B: "重复", 
      C: "单次",
      D: "抖动"
    },
    answer: "B",
    category: "轨迹精度"
  },
  {
    id: 399,
    type: "single_choice",
    question: "激光跟踪测量系统基本都是由激光跟踪头、控制器、用户计算机、（ ）及测量附件等组成。",
    options: {
      A: "发射器",
      B: "吸收器", 
      C: "聚光器",
      D: "反射器"
    },
    answer: "D",
    category: "测量系统"
  },
  {
    id: 400,
    type: "single_choice",
    question: "智能组件是实施（ ）的基础，它可以提高生产效率，确保可追溯的质量和数据透明度。",
    options: {
      A: "工业2.0",
      B: "工业3.0", 
      C: "工业4.0",
      D: "工业5.0"
    },
    answer: "C",
    category: "工业发展"
  },
  {
    id: 401,
    type: "single_choice",
    question: "（ ）是作为VMware虚拟机镜像提供的。",
    options: {
      A: "KUKA.OfficeLite",
      B: "KUKA.SimPro", 
      C: "KUKA.SimLayout",
      D: "KUKA.Workvisual"
    },
    answer: "A",
    category: "KUKA软件"
  },
  {
    id: 402,
    type: "single_choice",
    question: "在软件中进行程序的仿真运行相对于（ ），观察结果是否符合预期和检测程序的可行性。",
    options: {
      A: "真实机器人运行",
      B: "仿真场景的虚拟运行", 
      C: "仿真场景的测试",
      D: "真实场景的测试"
    },
    answer: "A",
    category: "仿真运行"
  },
  {
    id: 403,
    type: "single_choice",
    question: "在仿真运行无误时，离线程序小范围修改甚至无需修改直接导出到存储设备，并下载到真实的机器人中，机器人点位需要（ ）。",
    options: {
      A: "重新示教",
      B: "无需示教", 
      C: "看虚拟场景与现实场景是否符合而定",
      D: "无法确定"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 404,
    type: "single_choice",
    question: "下列用户信息中属于警告信息的是（ ）。",
    options: {
      A: "logger.info('Message')",
      B: "logger.warn('Message')", 
      C: "logger.error('Message')",
      D: "logger.fine('Message')"
    },
    answer: "B",
    category: "系统日志"
  },
  {
    id: 405,
    type: "single_choice",
    question: "KUKA机器人有（ ）种运行方式。",
    options: {
      A: "3种",
      B: "4种", 
      C: "5种",
      D: "6种"
    },
    answer: "B",
    category: "机器人操作"
  },
  {
    id: 406,
    type: "single_choice",
    question: "下列用户组中属于编程人员用户组的是（ ）。",
    options: {
      A: "操作人员",
      B: "管理员", 
      C: "专家",
      D: "安全维护人员"
    },
    answer: "C",
    category: "用户权限"
  },
  {
    id: 407,
    type: "single_choice",
    question: "KUKA.Sim支持机器人系统布局设计和动作模拟仿真，以及一系列的检测和分析，下列叙述错误的是（ ）。",
    options: {
      A: "可进行机器人干涉性、可达性的分析",
      B: "可进行系统的节拍估算", 
      C: "可进行自动生成机器人的离线程序",
      D: "可进行系统安全性的评估"
    },
    answer: "D",
    category: "KUKA仿真"
  },
  {
    id: 408,
    type: "single_choice",
    question: "KUKA.Sim制定的区域可以导出，下列导出的文件中可以在KUKA.WorkVisual中用于安全区域配置是（ ）。",
    options: {
      A: "XML文件",
      B: "XM文件", 
      C: "SRC文件",
      D: "DAT文件"
    },
    answer: "A",
    category: "安全配置"
  },
  {
    id: 409,
    type: "single_choice",
    question: "创建基于可用CADD数据的机器人运动路径的步骤是（ ） ①CAD路径的选择功能 (2)定义点距离选项 (3)确定识别路径的偏移量 (4)自动路径扩展(参数) (5)定义运动参数 (6)完成自动化路径",
    options: {
      A: "①④③②③⑥",
      B: "①③②④③⑥", 
      C: "③①④③②⑥",
      D: "③①②④③⑥"
    },
    answer: "A",
    category: "CAD路径"
  },
  {
    id: 410,
    type: "single_choice",
    question: "在仿真运行无误时，离线程序（ ）直接导出到存储设备，并下载到真实的机器人中运行。",
    options: {
      A: "小范围修改",
      B: "无需修改", 
      C: "小范围修改甚至无需修改",
      D: "不可以"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 411,
    type: "single_choice",
    question: "下列关于使用KUKA.OfficLite叙述正确的是（ ）。",
    options: {
      A: "编程必须在输送装置、定位器等外部设备准备完成的情况下进行",
      B: "在调试阶段使生产单元乃至整条生产线停机", 
      C: "可以在确定运动指令时提供直观的方法",
      D: "可以在完成安装前进行程序的编写调试"
    },
    answer: "D",
    category: "KUKA仿真"
  },
  {
    id: 412,
    type: "single_choice",
    question: "原始记录和报告的保存期限不少于（ ）年。",
    options: {
      A: "3",
      B: "5", 
      C: "6",
      D: "9"
    },
    answer: "C",
    category: "质量管理"
  },
  {
    id: 413,
    type: "single_choice",
    question: "用于测试的仪器仪表，必须具有（ ）",
    options: {
      A: "发票",
      B: "有效期内校准证书", 
      C: "说明书",
      D: "合格证"
    },
    answer: "B",
    category: "质量管理"
  },
  {
    id: 414,
    type: "single_choice",
    question: "进行测量工作，测量方法和数据应该参照（ ）标准。",
    options: {
      A: "行业",
      B: "自定义", 
      C: "客户",
      D: "国家"
    },
    answer: "D",
    category: "质量管理"
  },
  {
    id: 415,
    type: "single_choice",
    question: "测量报告的最后应该给出（ ）",
    options: {
      A: "功能描述",
      B: "问题报告", 
      C: "风险分析",
      D: "测试结论"
    },
    answer: "D",
    category: "质量管理"
  },
  {
    id: 416,
    type: "single_choice",
    question: "测试报告是测试阶段（ ）的文档产出物。",
    options: {
      A: "商讨后",
      B: "测量前", 
      C: "过程中",
      D: "最后"
    },
    answer: "D",
    category: "质量管理"
  },
  {
    id: 417,
    type: "single_choice",
    question: "职业道德活动中，对客人做到（ ）是符合语言规范的具体要求的。",
    options: {
      A: "言语细致，反复介绍",
      B: "语速要快，不浪费客人时问", 
      C: "用尊称，不用忌语",
      D: "语气严肃，维护自尊"
    },
    answer: "C",
    category: "职业道德"
  },
  {
    id: 418,
    type: "single_choice",
    question: "爱岗敬业作为职业道德的重要内容，是指员工（ ）",
    options: {
      A: "热爱自己喜欢的岗位",
      B: "热爱有钱的岗位", 
      C: "强化职业责任",
      D: "不应多转行"
    },
    answer: "C",
    category: "职业道德"
  },
  {
    id: 419,
    type: "single_choice",
    question: "下列关于勤劳节俭的论述中，不正确的选项是（ ）",
    options: {
      A: "企业可提倡勤劳，但不宜提倡节俭",
      B: "'一分钟应看成是八分钟'", 
      C: "勤劳节俭符合可持续发展的要求",
      D: "'节省一块钱，就等于净赚一块钱'"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 420,
    type: "single_choice",
    question: "在市场经济条件下，职业道德具有（ ）的社会功能。",
    options: {
      A: "鼓励人们自由选择职业",
      B: "遏制牟利最大化", 
      C: "促进人们行为的规范化",
      D: "最大限度地克服人们受利益驱动"
    },
    answer: "C",
    category: "职业道德"
  },
  {
    id: 421,
    type: "single_choice",
    question: "为了促进企业的规范化发展，需要发挥企业文化的（ ）功能。",
    options: {
      A: "娱乐",
      B: "主导", 
      C: "决策",
      D: "自律"
    },
    answer: "D",
    category: "企业文化"
  },
  {
    id: 422,
    type: "single_choice",
    question: "职业道德通过（ ），起着增强企业凝聚力的作用。",
    options: {
      A: "协调职工之间的关系",
      B: "增加职工福利", 
      C: "为职工创造发展空间",
      D: "调节企业"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 423,
    type: "single_choice",
    question: "在企业的经营活动中，下列选项中的（ ）不是职业道德功能的表现。",
    options: {
      A: "激励作用",
      B: "决策能力", 
      C: "规范行为",
      D: "遵纪守法"
    },
    answer: "B",
    category: "职业道德"
  },
  {
    id: 424,
    type: "single_choice",
    question: "下列选项中，（ ）是团结互助道德规范要求的中心环节。",
    options: {
      A: "平等尊重",
      B: "顾全大局", 
      C: "互相学习",
      D: "加强协作"
    },
    answer: "C",
    category: "团队协作"
  },
  {
    id: 425,
    type: "single_choice",
    question: "正确阐述职业道德与人们事业的关系的选项是（ ）。",
    options: {
      A: "没有职业道德的人不会获得成功",
      B: "要取得事业的成功，前提条件是要有职业道德", 
      C: "事业成功的人往往并不需要较高的职业道德",
      D: "职业道德是人获得事业成功的重要条件"
    },
    answer: "D",
    category: "职业道德"
  },
  {
    id: 426,
    type: "single_choice",
    question: "由员工和管理层组成的一个共同体，能合理利用每一个成员的知识和技能，协同工作，解决问题，达到共同的目标，这个共同体被称之为（ ）。",
    options: {
      A: "群体",
      B: "团队", 
      C: "公司",
      D: "个体"
    },
    answer: "B",
    category: "团队管理"
  },
  {
    id: 427,
    type: "single_choice",
    question: "沟通的关键技巧是（ ）",
    options: {
      A: "随意的表态",
      B: "可以随时打断对方的谈话，帮助对方分析问题", 
      C: "倾听和尊重对方",
      D: "以上描述全部错误"
    },
    answer: "C",
    category: "沟通技巧"
  },
  {
    id: 428,
    type: "single_choice",
    question: "爱岗敬业的具体要求（ ）",
    options: {
      A: "看效益决定是否爱岗",
      B: "转变择业观念", 
      C: "提高职业技能",
      D: "增强把握择业的机遇意识"
    },
    answer: "C",
    category: "职业道德"
  },
  {
    id: 429,
    type: "single_choice",
    question: "办事公道是指从业人员在进行职业活动时要做到（ ）",
    options: {
      A: "要追求真理，坚持原则",
      B: "有求必应，助人为乐", 
      C: "公私不分，一切平等",
      D: "知人善任，提拔知己"
    },
    answer: "D",
    category: "职业道德"
  },
  {
    id: 430,
    type: "single_choice",
    question: "正确阐述职业道德与人们事业的关系的选项是（ ）",
    options: {
      A: "没有职业道德的人不会获得成功",
      B: "要取得事业的成功，前提条件是要有职业道德", 
      C: "事业成功的人往往并不需要较高的职业道德",
      D: "职业道德是人获得事业成功的重要条件"
    },
    answer: "D",
    category: "职业道德"
  },

  // 判断题部分 (431-461)
  {
    id: 431,
    type: "true_false",
    question: "高级编程中，进行连续多行删除程序段的方法为选择程序段后进行删除。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 432,
    type: "true_false",
    question: "机器人处于自动运行模式下，人员可以进入安全防护区。",
    answer: "false",
    category: "机器人安全"
  },
  {
    id: 433,
    type: "true_false",
    question: "示教人员在操作机器人时必须高度集中注意力，时刻观察机器人部位，并预计其动作趋势，发生意外时应及时按下急停按钮。",
    answer: "true",
    category: "机器人安全"
  },
  {
    id: 434,
    type: "true_false",
    question: "如果RESUME后的第一个运动指令是一个CIRC运动，则该运动始终作为LIN运动运行。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 435,
    type: "true_false",
    question: "机器人程序自动运行前，必须单步调试程序，确保正确无误。",
    answer: "true",
    category: "机器人操作"
  },
  {
    id: 436,
    type: "true_false",
    question: "机器人运行时速度应从慢逐渐到快，应从最慢的速度开始运行，观察运行路径是否有问题，然后再逐渐加速。",
    answer: "true",
    category: "机器人操作"
  },
  {
    id: 437,
    type: "true_false",
    question: "在P1点的基础上向X正方向平移100的距离可以使用OFFSET指令进行平移。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 438,
    type: "true_false",
    question: "以太网通信采用载波多路访问和冲突检测机制的通信方式。",
    answer: "true",
    category: "通信系统"
  },
  {
    id: 439,
    type: "true_false",
    question: "FTP协议不属于TCP/IP协议。",
    answer: "false",
    category: "通信系统"
  },
  {
    id: 440,
    type: "true_false",
    question: "RFID技术具有识别速度快、安全性高及抗干扰性强等优点。",
    answer: "true",
    category: "RFID系统"
  },
  {
    id: 441,
    type: "true_false",
    question: "机器视觉具有引导、识别、测量和检验的功能。",
    answer: "true",
    category: "视觉系统"
  },
  {
    id: 442,
    type: "true_false",
    question: "机器人编写完程序，可直接启动自动运行。",
    answer: "false",
    category: "机器人操作"
  },
  {
    id: 443,
    type: "true_false",
    question: "码垛只能由点位进行编程。",
    answer: "false",
    category: "机器人编程"
  },
  {
    id: 444,
    type: "true_false",
    question: "当机器人运行轨迹相同，工件位置不同，只需要更新工件坐标系即可，无需重新编程。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 445,
    type: "true_false",
    question: "工作结束时，需操作机器人回到工作原点或安全位置。",
    answer: "true",
    category: "机器人操作"
  },
  {
    id: 446,
    type: "true_false",
    question: "程序模块由SRC与DAT两个部分组成。",
    answer: "true",
    category: "程序结构"
  },
  {
    id: 447,
    type: "true_false",
    question: "编程模块应始终保存在文件夹'Program'（程序）中。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 448,
    type: "true_false",
    question: "程序模块中不可以加入注释。",
    answer: "false",
    category: "程序编写"
  },
  {
    id: 449,
    type: "true_false",
    question: "外部启动运行时无需设置机器人驱动器关闭信号。",
    answer: "false",
    category: "机器人控制"
  },
  {
    id: 450,
    type: "true_false",
    question: "外部启动时通过cell程序进行程序的调用。",
    answer: "true",
    category: "机器人控制"
  },
  {
    id: 451,
    type: "true_false",
    question: "KUKA机器人中每次外部运行前都要确保机器人已到达BCO点。",
    answer: "true",
    category: "KUKA机器人操作"
  },
  {
    id: 452,
    type: "true_false",
    question: "如果选定的运动语句包括LIN或CIRC，则BCO运行将作为LIN运动被执行。",
    answer: "true",
    category: "KUKA机器人操作"
  },
  {
    id: 453,
    type: "true_false",
    question: "KUKA机器人中外部自动运行需要将模式打至T1。",
    answer: "false",
    category: "KUKA机器人操作"
  },
  {
    id: 454,
    type: "true_false",
    question: "视觉传感器的拍照信号为PLC的输出信号。",
    answer: "true",
    category: "视觉系统"
  },
  {
    id: 455,
    type: "true_false",
    question: "称重传感器的模拟量信号对应的物理地址为IW64。",
    answer: "true",
    category: "传感器系统"
  },
  {
    id: 456,
    type: "true_false",
    question: "RFID的检测的检测信号可以用机器人控制。",
    answer: "true",
    category: "RFID系统"
  },
  {
    id: 457,
    type: "true_false",
    question: "仓储各位置的光电传感器可以用来检测金属物料。",
    answer: "false",
    category: "传感器系统"
  },
  {
    id: 458,
    type: "true_false",
    question: "人机界面的编程，需要与PLC的变成关联起对应的变量才可使用，使用时需要建立通讯连接。",
    answer: "true",
    category: "人机界面"
  },
  {
    id: 459,
    type: "true_false",
    question: "如果焊接模式在程序运行期间发生改变，则可能出现在一个总线节拍中电源上存在不一致的特殊功能过程图像。",
    answer: "true",
    category: "焊接应用"
  },
  {
    id: 460,
    type: "true_false",
    question: "特殊功能的地址分配不可在输入/输出端配置中确定。",
    answer: "false",
    category: "系统配置"
  },
  {
    id: 461,
    type: "true_false",
    question: "电源的额定值见焊接控制系统所用的特性曲线，不可能出现非线性的特性曲线。",
    answer: "false",
    category: "焊接应用"
  }
];

export const totalQuestions = questionBank.length;

export const getQuestionStats = () => {
  const stats = {};
  questionBank.forEach(question => {
    if (!stats[question.category]) {
      stats[question.category] = {
        total: 0,
        singleChoice: 0,
        multipleChoice: 0,
        trueFalse: 0,
        hasImage: 0
      };
    }
    stats[question.category].total++;
    if (question.type === 'single_choice') {
      stats[question.category].singleChoice++;
    } else if (question.type === 'multiple_choice') {
      stats[question.category].multipleChoice++;
    } else if (question.type === 'true_false') {
      stats[question.category].trueFalse++;
    }
    if (question.hasImage) {
      stats[question.category].hasImage++;
    }
  });
  return stats;
};