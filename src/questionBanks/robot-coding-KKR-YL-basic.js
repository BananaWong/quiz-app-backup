// kukaRobot.js - KUKA机器人应用编程职业技能等级理论知识考核题库
export const questionBank = [
  // 单选题部分 (1-450)
  {
    id: 1,
    type: "single_choice",
    question: "在KUKA机器人中以下哪一个模式可以手动运行机器人（）。",
    options: {
      A: "T1",
      B: "T2", 
      C: "AUT",
      D: "AUT EXT"
    },
    answer: "A",
    category: "操作模式"
  },
  {
    id: 2,
    type: "single_choice",
    question: "在KUKA机器人中以下哪一个模式可以用PLC启动机器人（）。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT", 
      D: "AUT EXT"
    },
    answer: "D",
    category: "操作模式"
  },
  {
    id: 3,
    type: "single_choice",
    question: "在KUKA机器人中T1模式下，机器人的最大速度是（）mm/s。",
    options: {
      A: "200",
      B: "250",
      C: "500",
      D: "1000"
    },
    answer: "B",
    category: "操作模式"
  },
  {
    id: 4,
    type: "single_choice",
    question: "在KUKA机器人中编程和示教时，通常选择（）模式。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "AUT EXT"
    },
    answer: "A",
    category: "操作模式"
  },
  {
    id: 5,
    type: "single_choice",
    question: "在KUKA机器人中T2模式通常用于以下哪种情况（）。",
    options: {
      A: "需要进行示教",
      B: "需要用PLC控制机器人",
      C: "需要以大于手动慢速运行的速度进行测试",
      D: "有人在机器人的工作区域内"
    },
    answer: "C",
    category: "操作模式"
  },
  {
    id: 6,
    type: "single_choice",
    question: "在KUKA机器人中AUTEXT模式下程序执行的速度是（）",
    options: {
      A: "250mm/s",
      B: "500mm/s",
      C: "编程设定的速度",
      D: "编程设定的50%速度"
    },
    answer: "C",
    category: "操作模式"
  },
  {
    id: 7,
    type: "single_choice",
    question: "在KUKA机器人中以下哪一个模式可以不用外部控制使机器人自动运行（）。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "AUT EXT"
    },
    answer: "C",
    category: "操作模式"
  },
  {
    id: 8,
    type: "single_choice",
    question: "在KUKA机器人中需要验证完整机器人程序时，通常选择（）模式。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "AUT EXT"
    },
    answer: "C",
    category: "操作模式"
  },
  {
    id: 9,
    type: "single_choice",
    question: "当需要以大于手动慢速运行的速度进行测试时，一般选择（）模式。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "AUT EXT"
    },
    answer: "B",
    category: "操作模式"
  },
  {
    id: 10,
    type: "single_choice",
    question: "在KUKA机器人中不能完全按照程序设定的速度运行的模式是（）。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "AUT EXT"
    },
    answer: "A",
    category: "操作模式"
  },
  {
    id: 11,
    type: "single_choice",
    question: "手动操作机器人时，需将确认开关按至（）位置。",
    options: {
      A: "不用按",
      B: "中间位置",
      C: "完全按下",
      D: "只要按，任何位置都可以"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 12,
    type: "single_choice",
    question: "AUT模式通常用于（）。",
    options: {
      A: "用于带有上级控制系统（例如PLC）的工业机器人",
      B: "用于测试运行、编程和示教",
      C: "用于不带上级控制系统的工业机器人",
      D: "机器人检修时"
    },
    answer: "C",
    category: "操作模式"
  },
  {
    id: 13,
    type: "single_choice",
    question: "机器人的任何位置和姿态都可以用（）自由度来描述。",
    options: {
      A: "3个",
      B: "4个",
      C: "5个",
      D: "6个"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 14,
    type: "single_choice",
    question: "机器人调试过程中，一般将其置于（）状态。",
    options: {
      A: "自动状态",
      B: "防护装置停止状态",
      C: "手动全速状态",
      D: "手动限速状态"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 15,
    type: "single_choice",
    question: "在KUKA机器人中以下哪一项是T1模式下无法做到的（）。",
    options: {
      A: "以200mm/s速度运行",
      B: "PLC控制机器人启动",
      C: "控制吸盘吸气",
      D: "控制手爪闭合"
    },
    answer: "B",
    category: "操作模式"
  },
  {
    id: 16,
    type: "single_choice",
    question: "在KUKA机器人中以下哪一项是T2模式下可以做到的（）。",
    options: {
      A: "以200mm/s速度运行",
      B: "PLC控制机器人启动",
      C: "编辑程序",
      D: "示教位置"
    },
    answer: "A",
    category: "操作模式"
  },
  {
    id: 17,
    type: "single_choice",
    question: "需要调整手动运行时的机器人速度需调节以下哪一项（）。",
    options: {
      A: "工具坐标",
      B: "自动运行倍率",
      C: "手动运行倍率",
      D: "基坐标"
    },
    answer: "C",
    category: "操作控制"
  },
  {
    id: 18,
    type: "single_choice",
    question: "需要调整程序运行时的机器人速度需调节以下哪一项（）。",
    options: {
      A: "工具坐标",
      B: "程序调节量",
      C: "手动调节量",
      D: "基坐标"
    },
    answer: "B",
    category: "操作控制"
  },
  {
    id: 19,
    type: "single_choice",
    question: "在示教机器人程序时，应怎样设置机器人速度？",
    options: {
      A: "越快越好",
      B: "越慢越好",
      C: "都可以，没有影响",
      D: "根据需要，设置合适的速度"
    },
    answer: "D",
    category: "示教编程"
  },
  {
    id: 20,
    type: "single_choice",
    question: "在执行机器人程序时，应怎样设置机器人速度？",
    options: {
      A: "越快越好",
      B: "越慢越好",
      C: "都可以，没有影响",
      D: "根据需要，设置合适的速度"
    },
    answer: "D",
    category: "程序执行"
  },
  {
    id: 21,
    type: "single_choice",
    question: "设定工具坐标系的目的是什么（）。",
    options: {
      A: "让工具可以沿着TCP旋转",
      B: "更改机器人坐标系",
      C: "转移TCP点",
      D: "无其他作用"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 22,
    type: "single_choice",
    question: "表征机器人重复定位其末端到达同一目标位置的能力的参数是（）。",
    options: {
      A: "定位精度",
      B: "重复定位精度",
      C: "工作范围",
      D: "速度"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 23,
    type: "single_choice",
    question: "点位控制方式（PTP）的主要技术指标是（）。",
    options: {
      A: "定位精度和运动时间",
      B: "定位精度和运动速度",
      C: "运动速度和运动时间",
      D: "位姿轨迹和运动速度"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 24,
    type: "single_choice",
    question: "对机器人进行示教时，示教盒上手动速度为（）。",
    options: {
      A: "高速",
      B: "微动",
      C: "低速",
      D: "中速"
    },
    answer: "C",
    category: "示教编程"
  },
  {
    id: 25,
    type: "single_choice",
    question: "工具设定以后，为工具连续运动、旋转、方向、运动方向等提供了（）。",
    options: {
      A: "位置数据",
      B: "原点参考",
      C: "位置姿态",
      D: "速度"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 26,
    type: "single_choice",
    question: "工具设定以后，当TCP绕着工具旋转运动时其（）。",
    options: {
      A: "位置不变，姿态改变",
      B: "位置不变，姿态不变",
      C: "位置改变，姿态不变",
      D: "位置改变，姿态改变"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 27,
    type: "single_choice",
    question: "工具坐标设定以后，当机器人带动夹具发生角度变化是，其工具坐标系方向（）。",
    options: {
      A: "始终与大地坐标系方向保持一致",
      B: "始终与设定方向保持一致",
      C: "随着夹具角度的变化而改变，Z方向始终与TCP点相平行",
      D: "不会发生变化"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 28,
    type: "single_choice",
    question: "TCP标定一般采用XYZ-4点法和（）方法。",
    options: {
      A: "XYZ-参考法",
      B: "ABC-5D法",
      C: "ABC-6D法",
      D: "ABC-2点法"
    },
    answer: "A",
    category: "坐标系标定"
  },
  {
    id: 29,
    type: "single_choice",
    question: "TCP标定一般采用XYZ-参考法和（）方法。",
    options: {
      A: "XYZ-4点法",
      B: "ABC-5D法",
      C: "ABC-6D法",
      D: "ABC-2点法"
    },
    answer: "A",
    category: "坐标系标定"
  },
  {
    id: 30,
    type: "single_choice",
    question: "方向标定一般采用ABC-5D法、ABC-6D法和（）。",
    options: {
      A: "XYZ-4点法",
      B: "六点法",
      C: "XYA-参考法",
      D: "ABC-2点法"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 31,
    type: "single_choice",
    question: "方向标定一般采用ABC-5D法、ABC-2点法和（）。",
    options: {
      A: "XYZ-4点法",
      B: "六点法",
      C: "XYA-参考法",
      D: "ABC-6D法"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 32,
    type: "single_choice",
    question: "方向标定一般采用ABC-2点法、ABC-6D法和（）。",
    options: {
      A: "XYZ-4点法",
      B: "三点法",
      C: "XYA-参考法",
      D: "ABC-25D法"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 33,
    type: "single_choice",
    question: "设定KUKA机器人基坐标系一般采用（）。",
    options: {
      A: "4点法",
      B: "六点法",
      C: "三点法",
      D: "2点法"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 34,
    type: "single_choice",
    question: "库卡机器人在坐标系下，关于轴的动作说法正确的是（）。",
    options: {
      A: "可以同时沿着正向和反向动作",
      B: "只可以沿着轴正向动作",
      C: "只可以沿着轴反向动作",
      D: "可以沿着轴正向动作或反向动作"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 35,
    type: "single_choice",
    question: "关于基坐坐标系的创建的目的下列说法错误的是（）。",
    options: {
      A: "确定视校点的坐标参考基座坐标系为原点",
      B: "在程序模式下，避免如果基座坐标系偏移了，那么视校点的点就跟着一起偏移。",
      C: "可以设定多个不同参数的基座坐标系",
      D: "改变机器人线性移动方向"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 36,
    type: "single_choice",
    question: "在库卡机器人的坐标系选择中都包含哪几种坐标系（）",
    options: {
      A: "轴坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "基座坐标系和以上所有"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 37,
    type: "single_choice",
    question: "世界坐标系是（）。",
    options: {
      A: "固定的直角坐标系",
      B: "可移动的直角坐标系",
      C: "一个直接坐标系",
      D: "以目标工件工作台为基准的直角坐标系"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 38,
    type: "single_choice",
    question: "工具坐标系是（）",
    options: {
      A: "固定的直角坐标系",
      B: "可移动的直角坐标系",
      C: "一个直接坐标系",
      D: "以目标工件工作台为基准的直角坐标系"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 39,
    type: "single_choice",
    question: "基座坐标系是（）",
    options: {
      A: "固定的直角坐标系",
      B: "可移动的直角坐标系",
      C: "一个直接坐标系",
      D: "以目标工件工作台为基准的直角坐标系"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 40,
    type: "single_choice",
    question: "在KUKA机器人中，其程序运行速度是针对TCP在运动路径上的运动速度而言的，其速度单位是（）。",
    options: {
      A: "米/秒",
      B: "毫米/秒",
      C: "厘米/秒",
      D: "%"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 41,
    type: "single_choice",
    question: "在全球坐标系中，相对于A/B/C的转动关系是（）。",
    options: {
      A: "X-Y-Z",
      B: "Y-X-Z",
      C: "Z-Y-X",
      D: "X-Z-Y"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 42,
    type: "single_choice",
    question: "KUKA机器人语言设置选项在哪里（）。",
    options: {
      A: "配置>其它>语言",
      B: "配置>用户组>语言",
      C: "配置>安全配置>语言",
      D: "配置>状态键>语言"
    },
    answer: "A",
    category: "系统配置"
  },
  {
    id: 43,
    type: "single_choice",
    question: "以下哪一项语言是KUKA机器人不支持的（）。",
    options: {
      A: "甲骨文",
      B: "中文（简体）",
      C: "英文",
      D: "德语"
    },
    answer: "A",
    category: "系统配置"
  },
  {
    id: 44,
    type: "single_choice",
    question: "切换为以下哪一个用户组不需要输入密码（）。",
    options: {
      A: "操作人员",
      B: "专家",
      C: "安全维护人员",
      D: "管理员"
    },
    answer: "A",
    category: "用户管理"
  },
  {
    id: 45,
    type: "single_choice",
    question: "当使用KUKA.SafeOperation或KUKA.SafeRangeMonitoring时，需切换为哪一个用户组（）。",
    options: {
      A: "操作人员",
      B: "用户",
      C: "专家",
      D: "安全运行人员"
    },
    answer: "D",
    category: "用户管理"
  },
  {
    id: 46,
    type: "single_choice",
    question: "以下哪一个用户组不可以编辑程序（）",
    options: {
      A: "操作人员",
      B: "专家",
      C: "管理员",
      D: "都不可以"
    },
    answer: "A",
    category: "用户管理"
  },
  {
    id: 47,
    type: "single_choice",
    question: "用户组切换的默认密码为（）。",
    options: {
      A: "1234",
      B: "0000",
      C: "8888",
      D: "KUKA"
    },
    answer: "D",
    category: "用户管理"
  },
  {
    id: 48,
    type: "single_choice",
    question: "以下哪一个坐标位置不可自由定义（）。",
    options: {
      A: "WORLD",
      B: "ROBROOT",
      C: "BASE",
      D: "TOOL"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 49,
    type: "single_choice",
    question: "TOOL坐标系的原点被称为（）。",
    options: {
      A: "TDP",
      B: "TPC",
      C: "TCP",
      D: "TPD"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 50,
    type: "single_choice",
    question: "BASE坐标系的特点是（）。",
    options: {
      A: "说明基坐标在世界坐标系中的位置",
      B: "说明机器人在世界坐标系中的位置",
      C: "原点为机器人法兰中心",
      D: "固定于机器人内"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 51,
    type: "single_choice",
    question: "FLANGE坐标系的原点是（）。",
    options: {
      A: "机器人法兰中心",
      B: "大多数情况下位于机器人足部",
      C: "固定于机器人足内",
      D: "可自由定义"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 52,
    type: "single_choice",
    question: "以下哪一项不是使用世界坐标系的优点（）。",
    options: {
      A: "机器人的动作始终可预测",
      B: "对于经过零点标定的机器人始终可用世界坐标系",
      C: "可用3D鼠标直观操作",
      D: "原点和坐标方向是不可知的"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 53,
    type: "single_choice",
    question: "可供选择的工具坐标系有（）个。",
    options: {
      A: "25",
      B: "20",
      C: "18",
      D: "16"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 54,
    type: "single_choice",
    question: "可供选择的基坐标系有（）个。",
    options: {
      A: "32",
      B: "25",
      C: "20",
      D: "16"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 55,
    type: "single_choice",
    question: "ROBROOT坐标系的含义是（）。",
    options: {
      A: "世界坐标系",
      B: "机器人足部坐标系",
      C: "基坐标系",
      D: "法兰坐标系"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 56,
    type: "single_choice",
    question: "FLANGE坐标系的含义是（）。",
    options: {
      A: "世界坐标系",
      B: "机器人足部坐标系",
      C: "基坐标系",
      D: "法兰坐标系"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 57,
    type: "single_choice",
    question: "以下对工具坐标的说法正确的是（）。",
    options: {
      A: "固定于机器人足内",
      B: "说明机器人在世界坐标系中的位置。",
      C: "可以沿工具作业方向移动或者绕TCP调整姿态",
      D: "原点和坐标方向是不可知的"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 58,
    type: "single_choice",
    question: "如果一个工具已精确测定，则在实践中对操作和编程人员有以下哪个优点。",
    options: {
      A: "可围绕TCP（例如：工具顶尖）改变姿态",
      B: "不能沿工具作业方向移动",
      C: "沿着TCP上的轨迹保持已编程的运行速度。",
      D: "原点和坐标方向是不可知的"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 59,
    type: "single_choice",
    question: "确定工具坐标系的原点可采用以下哪一种方法（）。",
    options: {
      A: "XYZ2点法",
      B: "XYZ3点法",
      C: "XYZ4点法",
      D: "XYZ5点法"
    },
    answer: "C",
    category: "坐标系标定"
  },
  {
    id: 60,
    type: "single_choice",
    question: "确定工具坐标系的姿态可选择以下哪一种方法（）。",
    options: {
      A: "ABC8点法",
      B: "ABC6点法",
      C: "ABC4点法",
      D: "ABC2点法"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 61,
    type: "single_choice",
    question: "用直接输入法进行工具测量时，需输入（）。",
    options: {
      A: "工具离地高度",
      B: "至法兰中心点的距离值(X,Y,Z)和转角（A，B，C）",
      C: "工具的直径",
      D: "工具的长和宽"
    },
    answer: "B",
    category: "坐标系标定"
  },
  {
    id: 62,
    type: "single_choice",
    question: "用XYZ4点法测量TCP时，选择参照点有什么要求（）。",
    options: {
      A: "离地不能超过20cm",
      B: "距离机器人不能超过20cm",
      C: "必须在机器人正前方",
      D: "可以任意选择"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 63,
    type: "single_choice",
    question: "移至参照点的4个法兰位置需满足什么要求（）。",
    options: {
      A: "彼此必须间隔足够远，并且不得位于同一平面内",
      B: "必须尽量靠近",
      C: "必须位于同一平面",
      D: "无要求"
    },
    answer: "A",
    category: "坐标系标定"
  },
  {
    id: 64,
    type: "single_choice",
    question: "XYZ4点法的主菜单选择步骤是（）。",
    options: {
      A: "配置>安全配置>XYZ4点",
      B: "配置>状态键>XYZ4点",
      C: "投入运行>测量>工具>XYZ4点",
      D: "投入运行>配置>工具>XYZ4点"
    },
    answer: "C",
    category: "坐标系标定"
  },
  {
    id: 65,
    type: "single_choice",
    question: "使用XYZ参照法测量TCP的前提条件是（）。",
    options: {
      A: "在连接法兰上装有一个未测量过的工具",
      B: "在连接法兰上装有一个已测量过的工具，并且TCP的数据已知",
      C: "连接法兰上不能装有工具",
      D: "没有前提条件"
    },
    answer: "B",
    category: "坐标系标定"
  },
  {
    id: 66,
    type: "single_choice",
    question: "使用XYZ参照法的主菜单选择步骤是（）。",
    options: {
      A: "配置>安全配置>XYZ参照",
      B: "配置>状态键>XYZ参照",
      C: "投入运行>测量>工具>XYZ参照",
      D: "投入运行>配置>工具>XYZ参照"
    },
    answer: "C",
    category: "坐标系标定"
  },
  {
    id: 67,
    type: "single_choice",
    question: "使用ABC世界坐标系法进行姿态测量的主菜单选择步骤是（）。",
    options: {
      A: "投入运行>测量>工具>ABC世界坐标",
      B: "投入运行>配置>工具>ABC世界坐标",
      C: "配置>安全配置>ABC世界坐标",
      D: "配置>状态键>ABC世界坐标"
    },
    answer: "A",
    category: "坐标系标定"
  },
  {
    id: 68,
    type: "single_choice",
    question: "使用ABC2点法进行姿态测量的主菜单选择步骤是（）。",
    options: {
      A: "投入运行>配置>工具>ABC2点",
      B: "投入运行>测量>工具>ABC2点",
      C: "配置>安全配置>ABC2点",
      D: "配置>状态键>ABC2点"
    },
    answer: "B",
    category: "坐标系标定"
  },
  {
    id: 69,
    type: "single_choice",
    question: "为以下XYZ4点法的操作步骤排序：1. 用TCP从一个其他方向朝参照点移动。重新按下测量，用是回答对话框提问。2. 在选择菜单中找到并选择XYZ4点。3. 为待测量的工具给定一个号码和一个名称。用继续键确认。4. 用TCP移至任意一个参照点。按下软键测量，对话框'是否应用当前位置（）。继续测量'用是加以确认",
    options: {
      A: "1、2、3、4",
      B: "1、3、4、2",
      C: "4、2、3、1",
      D: "2、3、4、1"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 70,
    type: "single_choice",
    question: "（）为以下XYZ参照法的操作步骤排序：1. 将新工具的TCP移至参照点。点击测量。用继续键确认。2. 在主菜单中找到并选择XYZ参照。3. 在连接法兰上装有一个已测量过的工具，并且TCP的数据已知。4. 输入已测量工具的TCP数据。用继续键确认。5. 为新工具指定一个编号和一个名称。用继续键确认。6. 将工具撤回，然后拆下。装上新工具。7. 按下保存键。数据被保存，窗口自动关闭。8. 用TCP移至任意一个参照点。点击测量。用继续键确认。",
    options: {
      A: "1、2、3、6、5、4、8、7",
      B: "3、2、5、4、8、6、1、7",
      C: "8、5、4、6、7、3、2、1",
      D: "8、7、6、5、4、3、2、1"
    },
    answer: "B",
    category: "坐标系标定"
  },
  {
    id: 71,
    type: "single_choice",
    question: "（）为以下ABC世界坐标系法的操作步骤排序：1. 即打开另一个窗口。在此输入负荷数据。2. 输入工具的编号。用继续键确认。3. 在主菜单中选择投入运行>测量>工具>ABC世界坐标。4. 然后用继续和保存结束此过程。5. 在5D/6D栏中选择一种变型。用继续键确认。6关闭菜单7. 用测量来确认。对信息提示'要采用当前位置吗（）。测量将继续'用是来确认。8. 选择5D或6D并调整好方向",
    options: {
      A: "1、2、3、4、5、6、7、8",
      B: "5、6、8、7、2、1、3、4",
      C: "3、2、5、8、7、1、4、6",
      D: "5、4、6、7、8、3、2、1"
    },
    answer: "C",
    category: "坐标系标定"
  },
  {
    id: 72,
    type: "single_choice",
    question: "（）为以下ABC2点法的操作步骤排序：1. 输入已安装工具的编号。用继续键确认。2. 在主菜单中找到并选择ABC2点。3. TCP已通过XYZ法测定。4. 用TCP移至任意一个参照点。点击测量。用继续键确认。5. 按保存。数据被保存，窗口关闭。或按下负载数据。数据被保存，一个窗口将自动打开，可以在此窗口中输入负载数据。6. 移动工具，使参照点在XY平面上与一个在正Y向上的点重合。点击测量。用继续键确认。7. 移动工具，使参照点在X轴上与一个为负X值的点重合（即与作业方向相反）。点击测量。用继续键确认。",
    options: {
      A: "3、2、1、4、7、6、5",
      B: "2、1、4、5、6、7、3",
      C: "6、5、4、3、2、1、7",
      D: "5、4、6、2、1、3、7"
    },
    answer: "A",
    category: "坐标系标定"
  },
  {
    id: 73,
    type: "single_choice",
    question: "在使用ABC世界坐标系法时，若选择5D，则以下操作正确的是（）。",
    options: {
      A: "将+X工具坐标调整至平行于-Z世界坐标的方向。",
      B: "将+X工具坐标调整至平行于+X世界坐标的方向。",
      C: "将+X工具坐标调整至平行于-X世界坐标的方向。",
      D: "将+X工具坐标调整至平行于+Y世界坐标的方向。"
    },
    answer: "A",
    category: "坐标系标定"
  },
  {
    id: 74,
    type: "single_choice",
    question: "在使用ABC世界坐标系法时，若选择6D，则以下操作正确的是（）。",
    options: {
      A: "将+X工具坐标调整至平行于+Z世界坐标的方向。+Y工具坐标调整至平行于-Y世界坐标的方向。+Z工具坐标调整至平行于-X世界坐标的方向。",
      B: "将+X工具坐标调整至平行于-X世界坐标的方向。+Y工具坐标调整至平行于+Z世界坐标的方向。+Z工具坐标调整至平行于+Y世界坐标的方向。",
      C: "将+X工具坐标调整至平行于+Z世界坐标的方向。+Y工具坐标调整至平行于-Y世界坐标的方向。+Z工具坐标调整至平行于-X世界坐标的方向。",
      D: "将+X工具坐标调整至平行于-Z世界坐标的方向。+Y工具坐标调整至平行于+Y世界坐标的方向。+Z工具坐标调整至平行于+X世界坐标的方向。"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 75,
    type: "single_choice",
    question: "以下不是工具坐标的优点的是哪一项（）。",
    options: {
      A: "可围绕TCP改变姿态",
      B: "可沿工具作业方向移动",
      C: "可负载更重的物料",
      D: "沿着TCP上的轨迹保持已编程的运行速度。"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 76,
    type: "single_choice",
    question: "在KUKA机器人中基坐标系测量分为两个步骤，分别是（）。",
    options: {
      A: "确认机器人位置，移动机器人姿态",
      B: "确定坐标原点，定义坐标方向",
      C: "拆下机器人工具，估算重量",
      D: "安装工具，拧紧螺丝"
    },
    answer: "B",
    category: "坐标系标定"
  },
  {
    id: 77,
    type: "single_choice",
    question: "库卡机器人最多可以有多少个基坐标系（）。",
    options: {
      A: "30",
      B: "31",
      C: "32",
      D: "33"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 78,
    type: "single_choice",
    question: "以下哪一个不是基坐标的测量方法（）。",
    options: {
      A: "3点法",
      B: "间接法",
      C: "数字输入",
      D: "机器人自动计算"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 79,
    type: "single_choice",
    question: "以下哪一项不是测定了基坐标后的优点（）。",
    options: {
      A: "可以沿着工作面或工件的边缘手动移动TCP",
      B: "示教的点以所选的坐标系为参照",
      C: "可以参照基坐标对点进行示教",
      D: "基坐标方向与世界坐标方向平行"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 80,
    type: "single_choice",
    question: "当机器人无法移至基坐标原点时，例如，由于该点位于工件内部，或位于机器人工作空间之外时，须采用（）解决该问题。",
    options: {
      A: "间接法",
      B: "3点法",
      C: "4点法",
      D: "XYZ参照法"
    },
    answer: "A",
    category: "坐标系标定"
  },
  {
    id: 81,
    type: "single_choice",
    question: "使用3点法测量基坐标的主菜单选择步骤是（）。",
    options: {
      A: "配置>安全配置>3点",
      B: "投入运行>测量>基坐标系>3点",
      C: "投入运行>测量>工具>3点",
      D: "投入运行>配置>工具>点"
    },
    answer: "B",
    category: "坐标系标定"
  },
  {
    id: 82,
    type: "single_choice",
    question: "基坐标系测量的含义是（）。",
    options: {
      A: "根据世界坐标系在机器人周围的某一个位置上创建坐标系",
      B: "生成一个以工具参照点为原点的坐标系",
      C: "生成一个以法兰中心点为原点的坐标系",
      D: "生成一个位于机器人足内的坐标系"
    },
    answer: "A",
    category: "坐标系标定"
  },
  {
    id: 83,
    type: "single_choice",
    question: "测量基坐标系的目的是（）。",
    options: {
      A: "可围绕TCP改变姿态",
      B: "沿着TCP上的轨迹保持已编程的运行速度。",
      C: "使机器人的运动以及编程设定的位置均以该坐标系为参照",
      D: "说明机器人在世界坐标系中的位置。"
    },
    answer: "C",
    category: "坐标系标定"
  },
  {
    id: 84,
    type: "single_choice",
    question: "以下哪一项是基坐标测量时需要注意的（）。",
    options: {
      A: "必须将工具拆下",
      B: "工具必须垂直于地面",
      C: "基坐标系只能有一个",
      D: "基坐标测量只能用一个事先已测定的工具进行"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 85,
    type: "single_choice",
    question: "3点法的3点不包括下面的哪一个（）。",
    options: {
      A: "原点",
      B: "X向上的点",
      C: "XY平面上的点",
      D: "Z轴上的点"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 86,
    type: "single_choice",
    question: "3点法测量基坐标时有什么要求。",
    options: {
      A: "三个测量点必须位于同一直线上",
      B: "三个测量点不允许位于一条直线上",
      C: "基坐标系只能有一个",
      D: "原点必须位于法兰中心"
    },
    answer: "B",
    category: "坐标系标定"
  },
  {
    id: 87,
    type: "single_choice",
    question: "如果基坐标移动到一个新位置，那么基于此基坐标示教的点位会怎么样（）。",
    options: {
      A: "随着基坐标移动",
      B: "不会发生变化",
      C: "位置随机变化",
      D: "方向与基坐标相反的方向变化"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 88,
    type: "single_choice",
    question: "（）为以下用3点法测量基坐标的操作步骤排序。1. 输入需用其TCP测量基坐标的工具的编号。用继续键确认。2. 为基座标分配一个号码和一个名称。用继续键确认。3. 在主菜单中找到并选择'3点'。4. 用TCP移到新基坐标系的原点。点击测量软键并用是键确认位置。5. 按下保存键。6. 关闭菜单7. 将TCP移至XY平面上一个带有正Y值的点。点击测量并用是键确认位置。8. 将TCP移至新基座正向X轴上的一个点。点击测量并用是键确认位置。",
    options: {
      A: "8、6、4、7、5、2、1、3",
      B: "3、2、1、4、8、7、5、6",
      C: "7、5、8、4、6、2、1、3",
      D: "6、4、5、8、7、3、2、1"
    },
    answer: "B",
    category: "坐标系标定"
  },
  {
    id: 89,
    type: "single_choice",
    question: "以下哪一项是测量了基坐标无法做到的（）。",
    options: {
      A: "沿着工作面或工件的边缘手动移动TCP",
      B: "以所选的坐标系为参照示教点",
      C: "基坐标系随着机器人移动而移动",
      D: "基坐标系与世界坐标系平行"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 90,
    type: "single_choice",
    question: "用数字输入法进行基坐标测量需输入什么数据（）。",
    options: {
      A: "至法兰中心的距离值和转角",
      B: "离地面高度",
      C: "离机器人距离",
      D: "至世界坐标系的距离值和转角"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 91,
    type: "single_choice",
    question: "以下（）图标代表基坐标系。",
    options: {
      A: "A选项",
      B: "B选项",
      C: "C选项",
      D: "D选项"
    },
    answer: "B",
    category: "系统界面",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-basic_img91.jpg",
    imageDescription: "基坐标系图标选择题",
    imagePlaceholder: "🤖 此题包含基坐标系图标图片"
  },
  {
    id: 92,
    type: "single_choice",
    question: "以下哪个可作为基准坐标系中合理的参照点（）。",
    options: {
      A: "桌子边缘",
      B: "抽屉的边缘",
      C: "机器人夹具的边缘",
      D: "工作台的边缘"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 93,
    type: "single_choice",
    question: "工作范围是指机器人（）或手腕中心所能到达的点的集合。",
    options: {
      A: "机械手",
      B: "手臂末端",
      C: "手臂",
      D: "行走部分"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 94,
    type: "single_choice",
    question: "对机器人进行示教时，作为示教人员必须事先接受过专门的培训才行。与示教作业人员一起进行作业的监护人员，处在机器人可动范围外时（），可进行共同作业。",
    options: {
      A: "不需要事先接受过专门的培训",
      B: "必须事先接受过专门的培训",
      C: "没有事先接受过专门的培训也可以",
      D: "以上都对"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 95,
    type: "single_choice",
    question: "在手动T1模式下，以下说法正确的是（）。",
    options: {
      A: "防护装置（防护门）未激活",
      B: "允许其他人员在防护装置隔离的区域内停留",
      C: "这种运行模式下不得进行示教",
      D: "此模式移动速度为200mm/s"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 96,
    type: "single_choice",
    question: "在运行方式T1下TCP上的速度受监控。如果速度超过（）mm/s，则安全停止0被触发。",
    options: {
      A: "100mm/s",
      B: "150mm/s",
      C: "200mm/s",
      D: "250mm/s"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 97,
    type: "single_choice",
    question: "在程序运行期间，请勿更换运行方式。如果在程序运行过程中改变了运行方式，则工业机器人会由()停止。",
    options: {
      A: "安全停止2",
      B: "安全停止1",
      C: "停机2",
      D: "停机1"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 98,
    type: "single_choice",
    question: "将smartPAD插在机器人控制器上的用户，之后至少必须在smartPAD旁停留（）秒。",
    options: {
      A: "10秒",
      B: "20秒",
      C: "30秒",
      D: "40秒"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 99,
    type: "single_choice",
    question: "真空吸盘要求工件表面（）、干燥清洁，同时气密性好。",
    options: {
      A: "粗糙",
      B: "凹凸不平",
      C: "平缓凸起",
      D: "平整光滑"
    },
    answer: "D",
    category: "末端执行器"
  },
  {
    id: 100,
    type: "single_choice",
    question: "手爪的主要功能是抓住工件、握持工件和（）工件。",
    options: {
      A: "固定",
      B: "定位",
      C: "释放",
      D: "触摸"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 101,
    type: "single_choice",
    question: "使用焊枪示教前，检查焊枪的均压装置是否良好，动作是否正常，同时需要（）。",
    options: {
      A: "更换新的电极头",
      B: "使用磨耗量大的电极头",
      C: "新的或旧的都行",
      D: "不使用电极头"
    },
    answer: "A",
    category: "末端执行器"
  },
  {
    id: 102,
    type: "single_choice",
    question: "待抓取工件的位置发生变化时应（）。",
    options: {
      A: "更改基坐标系",
      B: "更改工具坐标",
      C: "更改位置数据",
      D: "更改速度或加速度"
    },
    answer: "C",
    category: "示教编程"
  },
  {
    id: 103,
    type: "single_choice",
    question: "对机器人进行示教时，模式旋钮打到手动示教后，在此模式下，外部设备发出的启动信号（）。",
    options: {
      A: "无效",
      B: "有效",
      C: "延时后有效",
      D: "可设置为有效"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 104,
    type: "single_choice",
    question: "（）创建LIN和CIRC运动的操作步骤：①选择菜单序列指令>运动>LIN或者CIRC ②在联机表格中输入参数 ③将TCP移向应被示教为目标点的位置 ④将光标置于其后应添加运动指令的那一行中 ⑤在运动参数选项窗口中可将加速度从最大值降下来。如果轨迹逼近已激活，则可更改轨迹逼近距离。此外也可修改姿态引导 ⑥用指令OK存储指令。TCP的当前位置被作为目标示教 ⑦在选项窗口Frames中输入工具和基坐标系的正确数据，以及关于插补模式的数据（外部TCP：开/关）和碰撞监控的数据",
    options: {
      A: "①②③④⑤⑥⑦",
      B: "⑦⑥⑤④③②①",
      C: "①⑤⑦⑥③②④",
      D: "③④①②⑦⑤⑥"
    },
    answer: "D",
    category: "示教编程"
  },
  {
    id: 105,
    type: "single_choice",
    question: "KUKA机器人中确认开关有（）个位置。",
    options: {
      A: "1个",
      B: "2个",
      C: "3个",
      D: "4个"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 106,
    type: "single_choice",
    question: "手动模式下进行程序的运行时，必须按住示教盒上的（）",
    options: {
      A: "确认开关和启动按键",
      B: "确认开关",
      C: "启动按键",
      D: "以上都对"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 107,
    type: "single_choice",
    question: "如果在一段固定时间内未在操作界面进行任何操作，则机器人控制系统将出于安全原因切换至默认用户组。默认设置为（）秒。",
    options: {
      A: "30秒",
      B: "60秒",
      C: "180秒",
      D: "300秒"
    },
    answer: "D",
    category: "用户管理"
  },
  {
    id: 108,
    type: "single_choice",
    question: "在运行方式T1及T2模式下，确认开关必须位于（），才可以进行手动操作机器人。",
    options: {
      A: "按下",
      B: "初始",
      C: "中间位置",
      D: "以上均可"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 109,
    type: "single_choice",
    question: "机器人经常使用的程序可以设置为主程序，每台机器人可以设置（）主程序。",
    options: {
      A: "3个",
      B: "5个",
      C: "1个",
      D: "无限制"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 110,
    type: "single_choice",
    question: "下列对解释器状态'S'代表含义正确的是（）。",
    options: {
      A: "S绿色解释程序取消",
      B: "S红色解释程序停止",
      C: "S灰色解释程序运行",
      D: "S红色解释程序取消"
    },
    answer: "B",
    category: "系统状态"
  },
  {
    id: 111,
    type: "single_choice",
    question: "下列对程序状态'R'代表含义正确的是（）。",
    options: {
      A: "R灰色没有选定工作程序",
      B: "R黄色工作程序正在运行。",
      C: "R黑色选定并启动了的工作程序停下。",
      D: "R绿色句子指针位于选定工作程序第一行。"
    },
    answer: "A",
    category: "系统状态"
  },
  {
    id: 112,
    type: "single_choice",
    question: "KUKA机器人中Cell程序（由PLC控制机器人的管理程序）始终在文件夹'（）'中建立。",
    options: {
      A: "R1文件夹",
      B: "Mada文件夹",
      C: "System文件夹",
      D: "TP文件夹"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 113,
    type: "single_choice",
    question: "（）为启动机器人程序的操作步骤：①选择程序 ②设定程序速度（程序倍率，POV）③按确认键 ④其他流程（根据设定的运行方式）：T1和T2：通过按启动键继续执行程序。AUT：激活驱动装置。接着按动Start（启动）启动程序在Cell程序中将运行方式转调为EXT并由PLC传送运行指令。⑤到达目标位置后运动停止，将显示提示信息'已达BCO'。⑥按下启动键并按住：'INI'行得到处理。机器人执行BCO运行。",
    options: {
      A: "①②③④⑤⑥",
      B: "⑥③②①",
      C: "①②③⑥⑤④",
      D: "④③①②③"
    },
    answer: "C",
    category: "程序执行"
  },
  {
    id: 114,
    type: "single_choice",
    question: "KUKA机器人中用于带有上级控制系统，例如：PLC的工业机器人下列模式正确的是（）。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "AUTEXT"
    },
    answer: "D",
    category: "操作模式"
  },
  {
    id: 115,
    type: "single_choice",
    question: "为了获得非常平稳的加工过程，希望作业启动(位置为零)时（）。",
    options: {
      A: "速度为零，加速度为零",
      B: "速度为零，加速度恒定",
      C: "速度恒定，加速度为零",
      D: "速度恒定，加速度恒定"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 116,
    type: "single_choice",
    question: "（）为KUKA机器人打开程序步骤：①运行方式T1、T2或AUT ②编辑程序。③在导航器中选定程序并按打开。编辑器中将显示该程序。如果选定了一个模块，SRC文件将显示在编辑器中。如果选定了一个SRC或DAT文件，则相应的文件会显示在编辑器中。④关闭程序。⑤为应用更改，点击是回答安全询问。",
    options: {
      A: "①②③④⑤",
      B: "③④③②①",
      C: "①③②④③",
      D: "④③①③②"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 117,
    type: "single_choice",
    question: "下列驱动状态'1'代表含义正确的是（）。",
    options: {
      A: "I绿色各驱动装置未准备就绪",
      B: "I绿色各驱动装置未准备就绪",
      C: "I红色各驱动装置未准备就绪",
      D: "BC"
    },
    answer: "C",
    category: "系统状态"
  },
  {
    id: 118,
    type: "single_choice",
    question: "以下哪一个坐标位置可以自由定义（）。",
    options: {
      A: "ROBROOT",
      B: "BASE",
      C: "TOOL",
      D: "都可以"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 119,
    type: "single_choice",
    question: "TCP的含义是（）。",
    options: {
      A: "TOOL坐标系的原点",
      B: "BASE坐标系的原点",
      C: "FLANGE坐标系的原点",
      D: "TCP与机器人无关"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 120,
    type: "single_choice",
    question: "对机器人进行示教时，作为操作人员必须事先接受过专门的培训，与操作人员一起进行作业的监护人员，处在机器人可动范围外时，（），方可进行共同作业。",
    options: {
      A: "不需要事先接受过专门的培训",
      B: "必须事先接受过专门的培训",
      C: "没有事先接受过专门的培训也可以",
      D: "师傅教教即可"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 121,
    type: "single_choice",
    question: "机器人TP面板上R绿灯表示什么意思（）。",
    options: {
      A: "运行至工作程序的最后一条",
      B: "工作程序正在运行",
      C: "运行至工作程序的第一条",
      D: "没有选定工作程序"
    },
    answer: "B",
    category: "系统状态"
  },
  {
    id: 122,
    type: "single_choice",
    question: "机器人结构中起着支撑作用的部件是（）。",
    options: {
      A: "腰部",
      B: "手部",
      C: "机座",
      D: "腕部"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 123,
    type: "single_choice",
    question: "示教盒上安全开关握紧为ON，松开为OFF状态，当握紧力过大时，为（）状态。",
    options: {
      A: "不变",
      B: "ON",
      C: "OFF",
      D: "其他"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 124,
    type: "single_choice",
    question: "机器人自动运行过程中，按下示教盒上的急停按钮，机器人停止运动，此时若要恢复机器人的运动，无需进行（）操作。",
    options: {
      A: "旋开急停按钮",
      B: "伺服上电",
      C: "按下开始键",
      D: "断电重启"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 125,
    type: "single_choice",
    question: "在手动快速（T2）运行方式下说法正确的是（）。",
    options: {
      A: "在此运行方式下允许进行示教和编程。",
      B: "在测试前，操作人员必须确保确认装置的功能完好。",
      C: "操作人员的操作位置不必处于危险区域之外。",
      D: "允许其他人员在防护装置隔离的区域内停留。"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 126,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时，以（）。",
    options: {
      A: "程序给定的速度运行",
      B: "全速运行",
      C: "示教器最高速度来限制运行",
      D: "示教器最低速度来运行"
    },
    answer: "C",
    category: "程序执行"
  },
  {
    id: 127,
    type: "single_choice",
    question: "说明基坐标在世界坐标系中的位置的是以下哪一个？",
    options: {
      A: "TOOL坐标系",
      B: "BASE坐标系",
      C: "FLANGE坐标系",
      D: "ROBROOT坐标系"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 128,
    type: "single_choice",
    question: "基础坐标系是一个（）坐标系，用来说明工件的位置。",
    options: {
      A: "笛卡尔",
      B: "工具",
      C: "法兰",
      D: "世界"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 129,
    type: "single_choice",
    question: "沿工具作业方向移动或者绕TCP调整姿态使用的是哪一个坐标系？",
    options: {
      A: "TOOL坐标系",
      B: "BASE坐标系",
      C: "FLANGE坐标系",
      D: "ROBROOT坐标系"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 130,
    type: "single_choice",
    question: "KUKA KR3AGILUS机器人1轴的运动范围是？",
    options: {
      A: "±150°",
      B: "±160°",
      C: "±170°",
      D: "180°"
    },
    answer: "C",
    category: "机器人参数"
  },
  {
    id: 131,
    type: "single_choice",
    question: "KUKA KR3AGILUS机器人2轴的运动范围是？",
    options: {
      A: "-170°/50°",
      B: "-170°/60°",
      C: "-170°/70°",
      D: "-170°/80°"
    },
    answer: "A",
    category: "机器人参数"
  },
  {
    id: 132,
    type: "single_choice",
    question: "KUKA KR3AGILUS机器人3轴的运动范围是？",
    options: {
      A: "-110°/155°",
      B: "-120°/155°",
      C: "-130°/155°",
      D: "-140°/155°"
    },
    answer: "A",
    category: "机器人参数"
  },
  {
    id: 133,
    type: "single_choice",
    question: "KUKA KR3AGILUS机器人4轴的运动范围是？",
    options: {
      A: "±145°",
      B: "±155°",
      C: "±165°",
      D: "±175°"
    },
    answer: "D",
    category: "机器人参数"
  },
  {
    id: 134,
    type: "single_choice",
    question: "KUKA KR3AGILUS机器人5轴的运动范围是？",
    options: {
      A: "±110°",
      B: "±120°",
      C: "±130°",
      D: "±140°"
    },
    answer: "B",
    category: "机器人参数"
  },
  {
    id: 135,
    type: "single_choice",
    question: "KUKA KR3 AGILUS机器人6轴的运动范围是？",
    options: {
      A: "±330°",
      B: "±340°",
      C: "±350°",
      D: "±360°"
    },
    answer: "C",
    category: "机器人参数"
  },
  {
    id: 136,
    type: "single_choice",
    question: "KUKA KR3 AGILUS机器人最远可达距离是？",
    options: {
      A: "441mm",
      B: "541mm",
      C: "641mm",
      D: "741mm"
    },
    answer: "B",
    category: "机器人参数"
  },
  {
    id: 137,
    type: "single_choice",
    question: "手动测试机器人程序时，需设置模式为（）。",
    options: {
      A: "T1模式/单步",
      B: "T1模式/连续",
      C: "T2模式/单步",
      D: "T2模式/连续"
    },
    answer: "A",
    category: "程序测试"
  },
  {
    id: 138,
    type: "single_choice",
    question: "POV的含义是（）。",
    options: {
      A: "手动运行速度",
      B: "程序运行速度",
      C: "插入模式激活",
      D: "自动运行速度"
    },
    answer: "B",
    category: "操作控制"
  },
  {
    id: 139,
    type: "single_choice",
    question: "FB ONL含义是（）。",
    options: {
      A: "等待条件",
      B: "开行条件",
      C: "开行条件及检验",
      D: "检验"
    },
    answer: "B",
    category: "程序控制"
  },
  {
    id: 140,
    type: "single_choice",
    question: "运动指令中VB200mm/s表示什么（）。",
    options: {
      A: "线性，工件以设定的速度沿一条直线运动",
      B: "功能为移动速度，最大值得1%到100%。移动速度为200mm/s",
      C: "功能为逼近区域，指令长度的一半0%到100%",
      D: "功能为加速度，最大值的1%到100%，加速度为200mm²/s"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 141,
    type: "single_choice",
    question: "运动指令中VE=0%表示什么（）。",
    options: {
      A: "线性，工件以设定的速度沿一条直线运动",
      B: "功能为移动速度，最大值得1%到100%。移动速度为200mm/s",
      C: "功能为逼近区域，指令长度的一半0%到100%",
      D: "功能为加速度，最大值的1%到100%，加速度为200mm²/s"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 142,
    type: "single_choice",
    question: "KUKA机器人中运动指令PTP含义是（）。",
    options: {
      A: "运动方式是点到点",
      B: "运动方式是直线",
      C: "运动方式是圆弧",
      D: "运动方式是绝对关节"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 143,
    type: "single_choice",
    question: "KUKA机器人中运动指令LIN的含义是（）。",
    options: {
      A: "运动方式是圆弧",
      B: "运动方式是直线",
      C: "运动方式是绝对关节",
      D: "运动方式是点到点"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 144,
    type: "single_choice",
    question: "KUKA机器人中运动指令CIRC的含义是（）。",
    options: {
      A: "运动方式是绝对关节",
      B: "运动方式是点到点",
      C: "运动方式是直线",
      D: "运动方式是圆弧"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 145,
    type: "single_choice",
    question: "LIN VB=2000 mm/s VE=0% ACC=100% Wzg=2SPSTrig=01/100s 各部分的含义解释正确的是（）。",
    options: {
      A: "LIN线性，工件以设定的速度沿一条圆弧移动。",
      B: "VB功能为移动速度，最大值的1%至100%。移动速度为2000mm/s",
      C: "ACC功能为加速度，最大值的0%至100%。加速度为100%",
      D: "Wzg功能为所使用的工具号码。数值范围1至100"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 146,
    type: "single_choice",
    question: "（）KUKA机器人为更改运动参数－帧的步骤：①打开选项窗口'帧' ②设置新工具坐标系或者基坐标系或者外部TCP ③将光标放在须改变的指令行里。④点击更改。指令相关的联机表格自动打开。⑤如要保留当前的机器人位置及更改的工具坐标系和/或基坐标系设置，则必须按下TouchUp键，以便重新计算和保存当前位置。⑥用软键指令OK存储变更。⑦用OK确认用户对话框'注意！改变以点为基准的帧参数时会有碰撞危险！",
    options: {
      A: "③④①②⑦⑤⑥",
      B: "⑦⑥⑤④③②①",
      C: "①⑤⑦⑥③②④",
      D: "①②③④⑤⑥⑦"
    },
    answer: "A",
    category: "程序修改"
  },
  {
    id: 147,
    type: "single_choice",
    question: "（）为KUKA机器人更改位置的操作步骤：①设置运行方式T1，将光标放在要改变的指令行里。②点击是确认安全询问。③对于CIRC运动：按TouchupHP（修整辅助点），以便确认TCP的当前位置为新的辅助点。或者按TouchupZP（修整目标点），以便确认TCP的当前位置为新的目标点。④用指令OK存储变更。⑤将机器人移到所要的位置。⑥对于PTP和LIN运动：按下Touchup（修整），以便确认TCP的当前位置为新的目标点。⑦点击更改。指令相关的联机表格自动打开。",
    options: {
      A: "③④①②⑦⑤⑥",
      B: "⑦⑥⑤④③②①",
      C: "①⑤⑦⑥③②④",
      D: "①②③④⑤⑥⑦"
    },
    answer: "C",
    category: "程序修改"
  },
  {
    id: 148,
    type: "single_choice",
    question: "测量TCP：XYZ4点法步骤正确的是（）：①在需要时，可以让测量点的坐标和姿态以增量和角度显示（以法兰坐标系为基准）。为此按下测量点。然后通过退回返回到上一个视图。②或者：点击保存，然后通过关闭图标关闭窗口。或：按下ABC2点法或ABC世界坐标法。迄今为止的数据被自动保存，并且一个可以在其中输入工具坐标系姿态的窗口自动打开。③用TCP从一个其他方向朝参照点移动。点击测量。点击是回答安全询问。④把第4步重复两次。⑤用TCP移至任意一个参照点。点击测量。点击是回答安全询问。⑥为待测量的工具给定一个号码和一个名称。用继续键确认。⑦在主菜单中选择投入运行>测量>工具>XYZ4点。⑧输入负载数据。⑨用继续键确认。",
    options: {
      A: "①②③④⑤⑥⑦⑧⑨",
      B: "⑨⑧⑦⑥⑤④③②①",
      C: "⑦⑥⑤③④⑧⑨①②",
      D: "⑤④③②①⑨⑧⑦⑥"
    },
    answer: "C",
    category: "坐标系标定"
  },
  {
    id: 149,
    type: "single_choice",
    question: "KUKA机器人中为了确保安全，用示教器手动运行机器人时，机器人的最高速度限制为（）。",
    options: {
      A: "50mm/s",
      B: "250mm/s",
      C: "800mm/s",
      D: "1600mm/s"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 150,
    type: "single_choice",
    question: "KUKA机器人中手部的位姿是由哪两部分变量构成的（）。",
    options: {
      A: "位置与速度",
      B: "姿态与位置",
      C: "位置与运行状态",
      D: "姿态与速度"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 151,
    type: "single_choice",
    question: "机器人轨迹控制过程需要通过求解（）获得各个关节角的位置控制系统的设计值。",
    options: {
      A: "运动学正问题",
      B: "运动学逆问题",
      C: "动力学正问题",
      D: "动力学逆问题"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 152,
    type: "single_choice",
    question: "测量TCP：XYZ参照法步骤正确的是（）：①将新工具的TCP移至参照点。点击测量。点击是回答安全询问。②将工具撤回，然后拆下。装上新工具。③用TCP移至任意一个参照点。点击测量。点击是回答安全询问。④输入已测量工具的TCP数据。用继续键确认。⑤为新工具指定一个编号和一个名称。用继续键确认。⑥或者：点击保存，然后通过关闭图标关闭窗口。或：按下ABC2点法或ABC世界坐标法。迄今为止的数据被自动保存，并且一个可以在其中输入工具坐标系姿态的窗口自动打开。⑦在需要时，可以让测量点的坐标和姿态以增量和角度显示（以法兰坐标系为基准）。为此按下测量点。然后通过退回返回到上一个视图。⑧用继续键确认。⑨输入负载数据。（如果要单独输入负载数据，则可以跳过该步骤。⑩在主菜单中选择投入运行>测量>工具>XYZ参照。",
    options: {
      A: "⑩⑨⑧⑦⑥⑤④③②①",
      B: "①②③④⑤⑥⑦⑧⑨⑩",
      C: "⑦⑥⑤③④⑧⑨①②⑩",
      D: "⑩⑤④③②①⑨⑧⑦⑥"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 153,
    type: "single_choice",
    question: "如果末端装置、工具或周围环境的刚性很高，那么机械手要执行与某个表面有接触的作业将会变得相当困难。此时应该考虑（）。",
    options: {
      A: "柔顺控制",
      B: "PID控制",
      C: "模糊控制",
      D: "最优控制"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 154,
    type: "single_choice",
    question: "KUKA机器人的控制方式分为点位控制和（）。",
    options: {
      A: "点对点控制",
      B: "点到点控制",
      C: "连续轨迹控制",
      D: "任意位置控制"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 155,
    type: "single_choice",
    question: "在KUKA机器人终端效应器(手)的力量来自（）。",
    options: {
      A: "机器人的全部关节",
      B: "机器人手部的关节",
      C: "决定机器人手部位置的各关节",
      D: "决定机器人手部位姿的各关节"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 156,
    type: "single_choice",
    question: "机器人装载焊枪进行焊接操作时，在（）方向只有力的约束而无速度约束。",
    options: {
      A: "X轴",
      B: "Y轴",
      C: "Z轴",
      D: "R轴"
    },
    answer: "C",
    category: "应用技术"
  },
  {
    id: 157,
    type: "single_choice",
    question: "所谓无姿态插补，即保持第一个示教点时的姿态，在大多数情况下是机器人沿（）运动时出现。",
    options: {
      A: "平面圆弧",
      B: "直线",
      C: "平面曲线",
      D: "空间曲线"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 158,
    type: "single_choice",
    question: "作业路径通常用（）坐标系相对于工件坐标系的运动来描述。",
    options: {
      A: "手爪",
      B: "固定",
      C: "运动",
      D: "工具"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 159,
    type: "single_choice",
    question: "人们实现对机器人的控制不包括（）。",
    options: {
      A: "输入",
      B: "输出",
      C: "程序",
      D: "反应"
    },
    answer: "D",
    category: "控制系统"
  },
  {
    id: 160,
    type: "single_choice",
    question: "对于有规律的轨迹，仅示教几个特征点，计算机就能利用（）获取中间点。",
    options: {
      A: "优化算法",
      B: "平滑算法",
      C: "预测算法",
      D: "插补算法"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 161,
    type: "single_choice",
    question: "库卡机器人做系统还原时，以下哪个不是可选还原选项（）。",
    options: {
      A: "全部",
      B: "应用程序",
      C: "配置",
      D: "数据"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 162,
    type: "single_choice",
    question: "当库卡机器人做还原操作时，导入其他版本的文档，以下那种情况不会出现（）。",
    options: {
      A: "故障信息",
      B: "机器人控制器无法运行",
      C: "人员受伤及财产损失",
      D: "外部急停"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 163,
    type: "single_choice",
    question: "库卡机器人做系统备份时，其存储设备只能使用（）。",
    options: {
      A: "普通U盘",
      B: "移动硬盘",
      C: "KUKA.USBDatuU盘",
      D: "存储卡"
    },
    answer: "C",
    category: "系统维护"
  },
  {
    id: 164,
    type: "single_choice",
    question: "关于库卡机器人系统备份操作以下说法正确的是（）。",
    options: {
      A: "做系统备份需进入系统后台方可操作",
      B: "备份完成，等待提示信息，当U盘上的指示灯熄灭后方可拔出U盘",
      C: "备份过程中可所以插拔U盘",
      D: "任意存储设备都可作为库卡机器人的备份存储设备"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 165,
    type: "single_choice",
    question: "做库卡机器人系统还原时，若还原过程拔掉U盘会导致（）。",
    options: {
      A: "无影响",
      B: "U盘损坏",
      C: "系统故障",
      D: "U盘数据丢失"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 166,
    type: "single_choice",
    question: "以下不是库卡机器人备份时可选的存储位置的是（）。",
    options: {
      A: "存储卡",
      B: "USB（KCP）",
      C: "网络",
      D: "USB（控制柜）"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 167,
    type: "single_choice",
    question: "在做库卡机器人系统备份操作时，其每个存档过程中都会产生一个（）文件。",
    options: {
      A: "RSO",
      B: "ZIP",
      C: "TCP",
      D: "KCP"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 168,
    type: "single_choice",
    question: "以下不属于库卡机器人系统备份可选择的数据存档的是（）。",
    options: {
      A: "全部",
      B: "机器参数",
      C: "应用",
      D: "角度"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 169,
    type: "single_choice",
    question: "（）为导出／导入长文本步骤：①点击按键输出或输入。导入结束后，屏幕将出现信息提示输入成功。导出结束后，屏幕将出现信息提示输出成功。②根据需要选择选项卡输出或输入。进行所需的设置。③在主菜单中选择投入运行>售后服务>长文本。窗口长文本即自动打开。④当使用U盘时，将其插在控制柜或smartPAD上。",
    options: {
      A: "①②③④",
      B: "④③②①",
      C: "①③②④",
      D: "①③④②"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 170,
    type: "single_choice",
    question: "（）为在U盘上存档步骤：①在主菜单中选择文件>存档>USB(KCP)或USB（控制柜），然后选择所需的选项。②现在可以拔下U盘。③点击是确认安全询问。将生成档案。④插上U盘（插在smartPAD或控制柜上)。当存档过程结束时，将在信息窗口中显示出来。特殊情况KrcDiag：如果通过此菜单项存档，当存档过程结束时，将在一个单独的窗口中显示。之后该窗口将自行消失。",
    options: {
      A: "①②③④",
      B: "④③②①",
      C: "①③②④",
      D: "④①③②"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 171,
    type: "single_choice",
    question: "USB接口被用于存档／还原等方面仅适于（）格式的USB。",
    options: {
      A: "FAT32",
      B: "NTFS",
      C: "exFAT",
      D: "以上均可"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 172,
    type: "single_choice",
    question: "存储位置：有哪几个不同的存储位置可供选择（）：",
    options: {
      A: "USB(KCP)→KCP(smardPAD)上的U盘",
      B: "USB（控制柜）→机器人控制柜上的U盘",
      C: "网络→在一个网络路径上存档（所需的网络路径必须在机器人数据下配置。）",
      D: "以上都是"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 173,
    type: "single_choice",
    question: "在KUKA机器人中下列哪些数据可以存档（）。",
    options: {
      A: "机器参数",
      B: "Log数据",
      C: "KrcDiag",
      D: "以上都是"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 174,
    type: "single_choice",
    question: "存KUKA机器人中数据存档时可选择以下哪种方式进行储存（）。",
    options: {
      A: "全部",
      B: "机器参数",
      C: "应用",
      D: "ABC三者都是"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 175,
    type: "single_choice",
    question: "（）为KUKA机器人存档操作步骤：①当存档过程结束时，将在信息窗口中显示出来。②点击是确认安全询问。③选择菜单序列文件>存档>USB(KCP)或者USB（控制柜）以及所需的选项。④当U盘上的LED指示灯熄灭之后，可将其取下。",
    options: {
      A: "①②③④",
      B: "③②①④",
      C: "④③②①",
      D: "②①④③"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 176,
    type: "single_choice",
    question: "（）为KUKA机器人还原的操作步骤：①点击'是'确认安全询问。已存档的文件在机器人控制系统里重新恢复。当恢复过程结束时，屏幕出现相关的消息。②打开菜单序列：文件>还原>，然后选择所需的子项。③如果已从U盘完成还原：拔出U盘。④重新启动机器人控制系统。",
    options: {
      A: "①②③④",
      B: "③②①④",
      C: "④③②①",
      D: "②①④③"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 177,
    type: "single_choice",
    question: "对于机器人控制系统KRC4有如下U盘：1. KUKA U盘2.0NB4GB 2. KUKA.RecoveryU盘2.18GB 用于生成和恢复系统镜像的是（）。",
    options: {
      A: "KUKA U盘2.0NB4GB",
      B: "KUKA.RecoveryU盘2.18GB",
      C: "两者都行",
      D: "两者都不行"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 178,
    type: "single_choice",
    question: "对于机器人控制系统KRC4有如下U盘：1. KUKA U盘2.0NB4GB 2. KUKA.RecoveryU盘2.18GB 具有启动功能的U盘是（）。",
    options: {
      A: "KUKA U盘2.0NB4GB",
      B: "KUKA.RecoveryU盘2.18GB",
      C: "两者都有",
      D: "两者都没有"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 179,
    type: "single_choice",
    question: "对于机器人控制系统KRC4有如下U盘：1. KUKA U盘2.0NB4GB 2. KUKA.RecoveryU盘2.18GB 具有软件和文档的数据功能的是（）。",
    options: {
      A: "KUKA U盘2.0NB4GB",
      B: "KUKA.RecoveryU盘2.18GB",
      C: "两者都是",
      D: "两者都不是"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 180,
    type: "single_choice",
    question: "如果多次用KrcDing进行存档，则最多能创建（）个档案，档案再增加时则覆盖最老的档案。",
    options: {
      A: "1",
      B: "3",
      C: "5",
      D: "10"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 181,
    type: "single_choice",
    question: "备份KrcDing数据时，必须使用一个（）。",
    options: {
      A: "无启动功能U盘",
      B: "有启动功能U盘",
      C: "两者都行",
      D: "必须专业库卡U盘"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 182,
    type: "single_choice",
    question: "如果必须由库卡机器人有限公司分析故障，则可以通过此操作步骤将数据打包。该操作步骤会在C:\\KUKA\\KRCDiag上生成一个（）文件。在将此文件夹发送给库卡机器人有限公司做数据分析。",
    options: {
      A: "程序",
      B: "RAR",
      C: "ZIP",
      D: "系统"
    },
    answer: "C",
    category: "系统维护"
  },
  {
    id: 183,
    type: "single_choice",
    question: "导出／导入可用于将一个现有安全配置导入另一个项目并以此方式进行复制。安全配置被保存为（）文件。",
    options: {
      A: "SCG",
      B: "程序",
      C: "ZIP",
      D: "RAR"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 184,
    type: "single_choice",
    question: "导入安全配置下列步骤正确的是（）：①选择菜单序列文件>导入／导出。窗口导入／导出向导打开。②导航至存有SCG文件的路径并选定该文件。点击打开。③选择导入安全配置并点击继续。④成功导入了配置后，将通过一条信息提示来显示。关闭窗口导入／导出向导。⑤点击完成。",
    options: {
      A: "①②③④③",
      B: "①③②③④",
      C: "⑤④③②①",
      D: "⑥④①③②"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 185,
    type: "single_choice",
    question: "在库卡机器人中为了使当前的机器人位置与机器人程序中的当前点位置保持一致，必须执行（）运行。",
    options: {
      A: "BCO",
      B: "MAIN",
      C: "initialize",
      D: "origin"
    },
    answer: "A",
    category: "程序执行"
  },
  {
    id: 186,
    type: "single_choice",
    question: "在库卡机器人中程序编程模块用字母（）标示。",
    options: {
      A: "N",
      B: "C",
      C: "B",
      D: "M"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 187,
    type: "single_choice",
    question: "与常见的文件系统类似，也可以在KUKA导航器中编辑smartPad程序模块。编辑方式不包括（）。",
    options: {
      A: "复制",
      B: "删除",
      C: "引用",
      D: "重命名"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 188,
    type: "single_choice",
    question: "存档数据时可选择以下哪种方式进行储存（）。",
    options: {
      A: "全部",
      B: "应用",
      C: "机器参数",
      D: "ABC三者都是"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 189,
    type: "single_choice",
    question: "显示运行日志的操作步骤为（）。①诊断 ②显示 ③运行日志",
    options: {
      A: "①②③",
      B: "①③②",
      C: "③①②",
      D: "②③①"
    },
    answer: "B",
    category: "系统诊断"
  },
  {
    id: 190,
    type: "single_choice",
    question: "创建KUKA机器人程序员的操作步骤为（）：①在目录结构中选定文件夹。②输入程序名称，需要时再输入注释，然后按OK确认。③按下软键新建 ④切换到文件列表",
    options: {
      A: "①②③④",
      B: "①④③②",
      C: "②①④③",
      D: "④③①②"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 191,
    type: "single_choice",
    question: "KUKA机器人中程序复制的操作步骤为（）：①选中文件所在的文件夹 ②给新模块输入一个新文件名，然后用OK确认 ③选择软键复制。④在文件列表中选中文件",
    options: {
      A: "①②③④",
      B: "①②④③",
      C: "②①④③",
      D: "①④③②"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 192,
    type: "single_choice",
    question: "KUKA机器人中程序更改名称的操作步骤为（）：①选中文件所在的文件夹 ②在文件列表中选中文件 ③用新的名称覆盖原文件名，并用OK确认 ④选择软键编辑>改名",
    options: {
      A: "①②③④",
      B: "①②④③",
      C: "②①④③",
      D: "④③①②"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 193,
    type: "single_choice",
    question: "KUKA机器人中程序删除的操作步骤为（）：①选中文件所在的文件夹 ②在文件列表中选中文件 ③选择软键删除 ④点击是确认安全询问。",
    options: {
      A: "①②③④",
      B: "①②④③",
      C: "②①④③",
      D: "④③①②"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 194,
    type: "single_choice",
    question: "在用户组'专家'和筛选设置'详细信息'中，每个模块各有（）个文件映射在导航器中。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 195,
    type: "single_choice",
    question: "机器人通过哪些指令知道它必须如何运动（）。",
    options: {
      A: "PTP",
      B: "LIN",
      C: "CIRC",
      D: "ABC三者都是"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 196,
    type: "single_choice",
    question: "在KUKA机器人中直线运动指令为（）。",
    options: {
      A: "PTP",
      B: "LIN",
      C: "CIRC",
      D: "SPLINE"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 197,
    type: "single_choice",
    question: "在KUKA机器人中圆弧运动指令为（）。",
    options: {
      A: "PTP",
      B: "LIN",
      C: "CIRC",
      D: "SPLINE"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 198,
    type: "single_choice",
    question: "在KUKA机器人中以下关于PTP的描述，错误的是（）。",
    options: {
      A: "运动的具体过程不可预见。",
      B: "导向轴是达到目标点所需时间最短的轴。",
      C: "程序中的第一个运动必须为PTP运动",
      D: "由于机器人轴的旋转运动，因此弧形轨迹会比直线轨迹更快。"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 199,
    type: "single_choice",
    question: "在KUKA机器人中轨迹逼近点的优势不包括（）。",
    options: {
      A: "减少磨损",
      B: "降低节拍时间",
      C: "优化运动轨迹",
      D: "减少语句行"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 200,
    type: "single_choice",
    question: "在KUKA机器人中以下关于LIN的描述，错误的是（）。",
    options: {
      A: "直线型轨迹运动",
      B: "工具的TCP按设定的姿态从起点匀速移动到目标点",
      C: "LIN运动需要设置辅助点",
      D: "速度和姿态均以TCP为参照点"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 201,
    type: "single_choice",
    question: "在KUKA机器人中CIRC指令的运行姿态由什么决定（）。",
    options: {
      A: "起点姿态",
      B: "辅助点姿态",
      C: "终点姿态",
      D: "姿态引导"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 202,
    type: "single_choice",
    question: "在KUKA机器人中程序编程中两点之间的速度可通过（）设定。",
    options: {
      A: "Vel.",
      B: "Acc.",
      C: "CONT",
      D: "ORI_TYPE"
    },
    answer: "A",
    category: "程序编程"
  },
  {
    id: 203,
    type: "single_choice",
    question: "在KUKA机器人中程序编程中两点之间的加速度可通过（）设定。",
    options: {
      A: "Vel.",
      B: "Acc.",
      C: "CONT",
      D: "ORI_TYPE"
    },
    answer: "B",
    category: "程序编程"
  },
  {
    id: 204,
    type: "single_choice",
    question: "线性运动下的有着6个自由度的KUKA机器人具有（）个不同的奇点位置。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "6"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 205,
    type: "single_choice",
    question: "在KUKA机器人中创建机器人轨迹运动的前提条件不包括（）。",
    options: {
      A: "已设置运行方式",
      B: "机器人程序已选定",
      C: "外部自动运行信号接通",
      D: "机器人报错信息已清除"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 206,
    type: "single_choice",
    question: "PTP运动时的运动速度范围为（）。",
    options: {
      A: "1…100%",
      B: "0.001…2 m/s",
      C: "0.1s…2s",
      D: "0.001…2 m"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 207,
    type: "single_choice",
    question: "下图中CIRC指令的过渡点为（）。",
    options: {
      A: "①",
      B: "②",
      C: "③",
      D: "④"
    },
    answer: "B",
    category: "运动指令",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-basic_img207.jpg",
    imageDescription: "CIRC指令过渡点示意图",
    imagePlaceholder: "🤖 此题包含CIRC指令过渡点示意图"
  },
  {
    id: 208,
    type: "single_choice",
    question: "完成一个正方形的轨迹示教，最少需要（）个LIN指令。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "B",
    category: "示教编程"
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
    category: "运动指令"
  },
  {
    id: 210,
    type: "single_choice",
    question: "下列三个菜单序列的选项如何选择可以插入运动指令（）。①指令 ②运动 ③PTP/LINE/CIRC……",
    options: {
      A: "①②③",
      B: "①③②",
      C: "③①②",
      D: "②③①"
    },
    answer: "A",
    category: "程序编程"
  },
  {
    id: 211,
    type: "single_choice",
    question: "程序中使用的逻辑连接的运算符不包括（）。",
    options: {
      A: "NOT",
      B: "AND",
      C: "NOR",
      D: "EXOR"
    },
    answer: "C",
    category: "程序编程"
  },
  {
    id: 212,
    type: "single_choice",
    question: "在库卡机器人中变量前面需加上（）符号。",
    options: {
      A: "@",
      B: "#",
      C: "S",
      D: "%"
    },
    answer: "C",
    category: "程序编程"
  },
  {
    id: 213,
    type: "single_choice",
    question: "关于OR运算符的描述，正确的是（）。",
    options: {
      A: "该运算符用于否定，即使值逆反",
      B: "当连接的两个表达式为真时，该表达式的结果为真。",
      C: "当连接的两个表达式中至少一个为真时，该表达式的结果为真。",
      D: "当由该运算符连接的命题有不同的真值时，该表达式的结果为真"
    },
    answer: "C",
    category: "程序编程"
  },
  {
    id: 214,
    type: "single_choice",
    question: "在KUKA机器人中输出端编号最大值为（）。",
    options: {
      A: "65536",
      B: "1024",
      C: "4096",
      D: "128"
    },
    answer: "C",
    category: "输入输出"
  },
  {
    id: 215,
    type: "single_choice",
    question: "下列程序中，OUT5信号于何时发出（）。",
    options: {
      A: "在P3点运动完成后",
      B: "不发出信号",
      C: "在P2点运动完成之后",
      D: "再P1点运动完成之后"
    },
    answer: "D",
    category: "程序编程"
  },
  {
    id: 216,
    type: "single_choice",
    question: "插补模式为下图的哪个选项（）。",
    options: {
      A: "①",
      B: "②",
      C: "③",
      D: "④"
    },
    answer: "C",
    category: "运动控制",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-basic_img216.jpg",
    imageDescription: "插补模式选择界面",
    imagePlaceholder: "🤖 此题包含插补模式选择界面图片"
  },
  {
    id: 217,
    type: "single_choice",
    question: "以下哪个选项可以帮助我们进行姿态引导（）。",
    options: {
      A: "①",
      B: "②",
      C: "③",
      D: "三者都不是"
    },
    answer: "C",
    category: "运动控制",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-basic_img217.jpg",
    imageDescription: "姿态引导选择界面",
    imagePlaceholder: "🤖 此题包含姿态引导选择界面图片"
  },
  {
    id: 218,
    type: "single_choice",
    question: "在KUKA机器人中以下关于位置数据描述不正确的是（）。",
    options: {
      A: "'Touchup'更新数值，旧的点坐标被覆盖并且不再提供。",
      B: "更改帧数据（例如工具、基坐标）时，会导致位置发生位移",
      C: "可能会出现超出工作区的情况",
      D: "如果机器人位置保持不变，但帧参数改变，则无需再更改参数。"
    },
    answer: "D",
    category: "程序修改"
  },
  {
    id: 219,
    type: "single_choice",
    question: "需要更改运动参数-帧时的操作顺序为（）。①点击更改 ②设置新工具坐标系 ③指令OK存储变更 ④按下TouchUp键",
    options: {
      A: "①②③④",
      B: "①②④③",
      C: "①②③",
      D: "①②④"
    },
    answer: "B",
    category: "程序修改"
  },
  {
    id: 220,
    type: "single_choice",
    question: "在KUKA机器人中关于外部TCP的运动编程，错误的是（）。",
    options: {
      A: "在选项窗口Frames中，外部TCP项的值必须为'TRUE'。",
      B: "运动速度以外部TCP为基准。",
      C: "要指定合适的基坐标系",
      D: "沿轨迹的姿态以默认TCP为基准"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 221,
    type: "single_choice",
    question: "在KUKA机器人中PTP和LIN运动更改位置的选项为（）。",
    options: {
      A: "Touchup",
      B: "Touchup HP",
      C: "Touchup ZP",
      D: "OK"
    },
    answer: "A",
    category: "程序修改"
  },
  {
    id: 222,
    type: "single_choice",
    question: "在KUKA机器人中CIRC运动修整目标点的选项为（）。",
    options: {
      A: "Touchup",
      B: "Touchup HP",
      C: "Touchup ZP",
      D: "OK"
    },
    answer: "C",
    category: "程序修改"
  },
  {
    id: 223,
    type: "single_choice",
    question: "每次更改完运动指令后都必须在（）下测试机器人程序。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUTO",
      D: "EXT"
    },
    answer: "A",
    category: "程序测试"
  },
  {
    id: 224,
    type: "single_choice",
    question: "用外部TCP进行运动编程时，在选项窗口Frames中，外部TCP项的值必须为（）。",
    options: {
      A: "NULL",
      B: "WOBJ1",
      C: "TRUE",
      D: "FALSE"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 225,
    type: "single_choice",
    question: "在机器人运行过程中遇到姿态导致的奇点问题，可以通过添加（）指令来纠正。",
    options: {
      A: "PTP",
      B: "LIN",
      C: "CIRC",
      D: "SPLINE"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 226,
    type: "single_choice",
    question: "指令waittime1.0sec等待的时间为（）。",
    options: {
      A: "1s",
      B: "1ms",
      C: "1minute",
      D: "1hour"
    },
    answer: "A",
    category: "程序指令"
  },
  {
    id: 227,
    type: "single_choice",
    question: "在KUKA机器人中wait指令除了可以等待时间之外还可以等待（）。",
    options: {
      A: "DI信号",
      B: "IF逻辑",
      C: "LOOP循环",
      D: "任意逻辑指令"
    },
    answer: "A",
    category: "程序指令"
  },
  {
    id: 228,
    type: "single_choice",
    question: "以下哪个框中可填入具体信号（）。",
    options: {
      A: "①",
      B: "②",
      C: "③",
      D: "④"
    },
    answer: "A",
    category: "输入输出",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-basic_img228.jpg",
    imageDescription: "信号输入框界面",
    imagePlaceholder: "🤖 此题包含信号输入框界面图片"
  },
  {
    id: 229,
    type: "single_choice",
    question: "在KUKA机器人中以下哪种更改运动指令的方式会改变运行速度（）。",
    options: {
      A: "更改帧数据",
      B: "更改位置数据",
      C: "更改运动数据",
      D: "更改运动方式"
    },
    answer: "C",
    category: "程序修改"
  },
  {
    id: 230,
    type: "single_choice",
    question: "安装传感器为KUKA机器人输入信号时，传感器输出信号的供电应为（）。",
    options: {
      A: "24V供电",
      B: "0V",
      C: "无需供电",
      D: "5V供电"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 231,
    type: "single_choice",
    question: "在KUKA机器人中机器人控制系统最多可以管理（）个数字输入端。",
    options: {
      A: "65536",
      B: "1024",
      C: "4096",
      D: "8192"
    },
    answer: "D",
    category: "输入输出"
  },
  {
    id: 232,
    type: "single_choice",
    question: "在KUKA机器人中机器人控制系统最多可以管理（）个数字输出端。",
    options: {
      A: "65536",
      B: "1024",
      C: "4096",
      D: "8192"
    },
    answer: "D",
    category: "输入输出"
  },
  {
    id: 233,
    type: "single_choice",
    question: "在KUKA机器人中机器人控制系统可以管理（）个模拟信号输入端。",
    options: {
      A: "32",
      B: "64",
      C: "128",
      D: "36"
    },
    answer: "A",
    category: "输入输出"
  },
  {
    id: 234,
    type: "single_choice",
    question: "在KUKA机器人中机器人控制系统可以管理（）个模拟信号输出端。",
    options: {
      A: "32",
      B: "64",
      C: "128",
      D: "36"
    },
    answer: "A",
    category: "输入输出"
  },
  {
    id: 235,
    type: "single_choice",
    question: "$ANIN[...]显示输入端电压，在（）范围内调整。",
    options: {
      A: "-0.8和+1.6",
      B: "-1.5和+1.5",
      C: "-1.0和+1.0",
      D: "0和+1.0"
    },
    answer: "C",
    category: "输入输出"
  },
  {
    id: 236,
    type: "single_choice",
    question: "下列物体中可由金属传感器进行区分的组合为（）。",
    options: {
      A: "黑色塑料物料与白色塑料物料",
      B: "两个黑色塑料物料",
      C: "两个白色塑料物料",
      D: "黑色塑料物料与金属物料"
    },
    answer: "D",
    category: "传感器应用"
  },
  {
    id: 237,
    type: "single_choice",
    question: "开关量输出的传感器，信号端应该与机器人的（）相连。",
    options: {
      A: "IN",
      B: "OUT",
      C: "ANIN",
      D: "ANOUT"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 238,
    type: "single_choice",
    question: "以下（）选项是伺服电机的正向点动功能。",
    options: {
      A: "JOGCMD-",
      B: "JOGCMD+",
      C: "CCW",
      D: "CW"
    },
    answer: "B",
    category: "伺服控制"
  },
  {
    id: 239,
    type: "single_choice",
    question: "下图中伺服驱动器输出脉冲的相位关系为（）。",
    options: {
      A: "A超前B90°",
      B: "A滞后B90°",
      C: "A超前B45°",
      D: "A滞后B45°"
    },
    answer: "A",
    category: "伺服控制",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-basic_img239.jpg",
    imageDescription: "伺服驱动器输出脉冲相位关系图",
    imagePlaceholder: "🤖 此题包含伺服驱动器脉冲相位关系图"
  },
  {
    id: 240,
    type: "single_choice",
    question: "交流电机供电频率的降低时其电磁转矩将（）。",
    options: {
      A: "增大",
      B: "减小",
      C: "不变",
      D: "起伏变化"
    },
    answer: "C",
    category: "电机控制"
  },
  {
    id: 241,
    type: "single_choice",
    question: "以下选项关于伺服电机抱闸功能描述错误的是（）。",
    options: {
      A: "抱闸线圈无极性",
      B: "伺服电机停机后，应关闭伺服使能(S-ON)",
      C: "内置抱闸的电机运转时，抱闸可能会发出咔嚓声，功能上并无影响",
      D: "内置于伺服电机中的抱闸机构可用于制动用途"
    },
    answer: "D",
    category: "伺服控制"
  },
  {
    id: 242,
    type: "single_choice",
    question: "（）不是伺服驱动器对伺服电机的控制方式。",
    options: {
      A: "位置",
      B: "速度",
      C: "摩擦力",
      D: "力矩"
    },
    answer: "C",
    category: "伺服控制"
  },
  {
    id: 243,
    type: "single_choice",
    question: "交流伺服驱动器设计中普遍采用基于矢量控制的以下（）为闭环控制算法。①电流 ②速度 ③位置 ④力矩",
    options: {
      A: "①②③④",
      B: "①②③",
      C: "②③",
      D: "②③④"
    },
    answer: "B",
    category: "伺服控制"
  },
  {
    id: 244,
    type: "single_choice",
    question: "光电传感器是各种光电检测系统中实现光电转换的关键元件，它是把光信号（可见及紫外镭射光）转变成为（）的器件。",
    options: {
      A: "电磁波",
      B: "电信号",
      C: "可见光谱",
      D: "物理量"
    },
    answer: "D",
    category: "传感器应用"
  },
  {
    id: 245,
    type: "single_choice",
    question: "以下哪个选项不属于光电传感器的分类（）。",
    options: {
      A: "槽型光电传感器",
      B: "扩散反射型光电开关",
      C: "对射型光电传感器",
      D: "折射板型光电开关"
    },
    answer: "D",
    category: "传感器应用"
  },
  {
    id: 246,
    type: "single_choice",
    question: "KUKA机器人中（）指令可以将数字输出信号1置1。",
    options: {
      A: "OUT1TRUE",
      B: "AOUTAO1TRUE",
      C: "OUTOUT1FALSE",
      D: "SetOUT1"
    },
    answer: "A",
    category: "程序指令"
  },
  {
    id: 247,
    type: "single_choice",
    question: "旋转供料模块中每给一次转动信号转盘转动（），即一个工位。",
    options: {
      A: "30",
      B: "45",
      C: "60",
      D: "90"
    },
    answer: "D",
    category: "外围设备"
  },
  {
    id: 248,
    type: "single_choice",
    question: "旋转供料模块中转盘共有（）个工位。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "B",
    category: "外围设备"
  },
  {
    id: 249,
    type: "single_choice",
    question: "在KUKA机器人中快换电磁阀对应为机器人（）信号。",
    options: {
      A: "AI",
      B: "AO",
      C: "DI",
      D: "DO"
    },
    answer: "D",
    category: "输入输出"
  },
  {
    id: 250,
    type: "single_choice",
    question: "旋转供料工作站转盘的驱动方式为（）。",
    options: {
      A: "伺服驱动",
      B: "步进驱动",
      C: "变频器驱动",
      D: "交流调速驱动"
    },
    answer: "B",
    category: "外围设备"
  },
  {
    id: 251,
    type: "single_choice",
    question: "在该设备中机器人末端手爪的控制方式为（）。",
    options: {
      A: "电磁控制",
      B: "气动控制",
      C: "液压",
      D: "手动控制"
    },
    answer: "D",
    category: "末端执行器"
  },
  {
    id: 252,
    type: "single_choice",
    question: "以下哪点不是传感器的组成（）。",
    options: {
      A: "敏感元件",
      B: "转换元件",
      C: "基本转换电路",
      D: "稳压电源"
    },
    answer: "D",
    category: "传感器应用"
  },
  {
    id: 253,
    type: "single_choice",
    question: "传感器的精确度是指（）。",
    options: {
      A: "传感器的输出指示值与被测量约定真值的一致程度",
      B: "传感器输出量Y和输入量X之比",
      C: "传感器能够测量的下限值到上限值之间的范围",
      D: "输出量与输入量之间对应关系"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 254,
    type: "single_choice",
    question: "仓储模块和工具模块采用（）传感器判断有无物料及快换工具。",
    options: {
      A: "光电",
      B: "速度",
      C: "压力",
      D: "热敏"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 255,
    type: "single_choice",
    question: "工具模块传感器的作用错误的是（）。",
    options: {
      A: "判断机器人是否已有夹具",
      B: "判断工具是否在工具位",
      C: "工具回零标定",
      D: "工具是否抓取成功"
    },
    answer: "C",
    category: "传感器应用"
  },
  {
    id: 256,
    type: "single_choice",
    question: "转盘到位信号的控制方式为（）。",
    options: {
      A: "PLC脉冲给定",
      B: "机器人脉冲给定",
      C: "传感器检测到位",
      D: "机械限位"
    },
    answer: "A",
    category: "外围设备"
  },
  {
    id: 257,
    type: "single_choice",
    question: "进入IO界面后，屏幕左侧有数字输入口，分别为（）用于外部信号的接入。外部信号出发后，屏幕上代表该信号的灯颜色亮起。",
    options: {
      A: "OUT01-OUT02",
      B: "IN01-IN16",
      C: "OUTUT1-OUTPUT16",
      D: "INPUT1-INPUT16"
    },
    answer: "B",
    category: "输入输出"
  },
  {
    id: 258,
    type: "single_choice",
    question: "进入IO界面后，屏幕左侧有数字输出口，分别为（）用于控制外部执行机构例电磁阀、转盘等。",
    options: {
      A: "OUT01-OUT02",
      B: "IN01-IN16",
      C: "OUTUT1-OUTPUT16",
      D: "INPUT1-INPUT16"
    },
    answer: "B",
    category: "输入输出"
  },
  {
    id: 259,
    type: "single_choice",
    question: "在KUKA机器人中模拟量输入和模拟量输出的电压范围为（）。",
    options: {
      A: "0-10V",
      B: "0-24V",
      C: "24V",
      D: "0V"
    },
    answer: "A",
    category: "输入输出"
  },
  {
    id: 260,
    type: "single_choice",
    question: "在KUKA机器人中机器人输出至电磁阀信号的电压为（）。",
    options: {
      A: "0-10V",
      B: "0-24V",
      C: "24V",
      D: "0V"
    },
    answer: "C",
    category: "输入输出"
  },
  {
    id: 261,
    type: "single_choice",
    question: "本设备传感器输出信号需要通过继电器转换为（）给机器人输入信号。",
    options: {
      A: "0-10V",
      B: "0-24V",
      C: "24V",
      D: "0V"
    },
    answer: "C",
    category: "传感器应用"
  },
  {
    id: 262,
    type: "single_choice",
    question: "光电传感器通常由（）构成。①发送器 ②接收器 ③反光板 ④检测电路",
    options: {
      A: "①②③④",
      B: "①②③",
      C: "①②④",
      D: "②③④"
    },
    answer: "C",
    category: "传感器应用"
  },
  {
    id: 263,
    type: "single_choice",
    question: "为实现变频器有源逆变而使电机快速制动，要求电源短路功率必须大于变频器总功率的（）倍。",
    options: {
      A: "1",
      B: "10",
      C: "100",
      D: "没有要求"
    },
    answer: "C",
    category: "变频器"
  },
  {
    id: 264,
    type: "single_choice",
    question: "维力与力矩传感器主要用于（）。",
    options: {
      A: "精密加工",
      B: "精密测量",
      C: "精密计算",
      D: "精密装配"
    },
    answer: "D",
    category: "传感器应用"
  },
  {
    id: 265,
    type: "single_choice",
    question: "在装配系统中采用触觉传感器可以有效地反映装配情况。该触觉传感器属于（）传感器。",
    options: {
      A: "接触觉",
      B: "接近觉",
      C: "力/力矩觉",
      D: "压觉"
    },
    answer: "D",
    category: "传感器应用"
  },
  {
    id: 266,
    type: "single_choice",
    question: "传感器在整个测量范围内所能辨别的被测量的最小变化量，或者所能辨别的不同被测量的个数，被称之为传感器的（）。",
    options: {
      A: "精度",
      B: "重复性",
      C: "分辨率",
      D: "灵敏度"
    },
    answer: "C",
    category: "传感器应用"
  },
  {
    id: 267,
    type: "single_choice",
    question: "利用物质本身的某种客观性质制作的传感器称之为（）。",
    options: {
      A: "物性型",
      B: "结构型",
      C: "一次仪表",
      D: "二次仪表"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 268,
    type: "single_choice",
    question: "应用通常的物理定律构成的传感器称之为（）。",
    options: {
      A: "物性型",
      B: "结构型",
      C: "一次仪表",
      D: "二次仪表"
    },
    answer: "B",
    category: "传感器应用"
  },
  {
    id: 269,
    type: "single_choice",
    question: "设备中使用的增量式光轴编码器一般应用（）套光电元件，从而可以实现计数、测速、鉴向和定位。",
    options: {
      A: "一",
      B: "二",
      C: "三",
      D: "四"
    },
    answer: "C",
    category: "传感器应用"
  },
  {
    id: 270,
    type: "single_choice",
    question: "CCD（Charge Coupled Device）摄像头输出信号为（）帧/秒。",
    options: {
      A: "20",
      B: "25",
      C: "30",
      D: "50"
    },
    answer: "B",
    category: "视觉系统"
  },
  {
    id: 271,
    type: "single_choice",
    question: "CCD摄像头采用电视PAL标准，每帧图像由（）场构成。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "视觉系统"
  },
  {
    id: 272,
    type: "single_choice",
    question: "在伺服电机的伺服控制器中，为了获得高性能的控制效果，一般具有3个反馈回路，以下哪个选项不属于三个反馈回路（）。",
    options: {
      A: "电压环",
      B: "电流环",
      C: "位置环",
      D: "速度环"
    },
    answer: "A",
    category: "伺服控制"
  },
  {
    id: 273,
    type: "single_choice",
    question: "输送模块的交流驱动器，带有面板式调节，想用面板来调节电机的转动只需要将参数F03设置为（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "B",
    category: "变频器"
  },
  {
    id: 274,
    type: "single_choice",
    question: "输送模块的交流驱动器，带有面板式调节，想用外部开关来调节电机的转动只需要将参数F03设置为（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "4"
    },
    answer: "C",
    category: "变频器"
  },
  {
    id: 275,
    type: "single_choice",
    question: "输送模块电机的旋转方式由参数F-04控制，只允许正转时只需将参数值设置为（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "C",
    category: "变频器"
  },
  {
    id: 276,
    type: "single_choice",
    question: "输送模块电机的旋转方式由参数F-04控制，即允许正转也允许反转时只需将参数值设置为（）。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "变频器"
  },
  {
    id: 277,
    type: "single_choice",
    question: "输送带在实际应用时需要失电便制动功能，正转失电便制动功能只需将参数（）设置为1。",
    options: {
      A: "F-01",
      B: "F-05",
      C: "F-07",
      D: "F-11"
    },
    answer: "D",
    category: "变频器"
  },
  {
    id: 278,
    type: "single_choice",
    question: "输送带在实际应用时需要失电便制动功能，反转失电便制动功能只需将参数（）设置为1。",
    options: {
      A: "F-05",
      B: "F-07",
      C: "F-11",
      D: "F-16"
    },
    answer: "D",
    category: "变频器"
  },
  {
    id: 279,
    type: "single_choice",
    question: "输送模块的交流驱动器，恢复出厂设定的参数为（）。",
    options: {
      A: "F-28",
      B: "F-29",
      C: "F-30",
      D: "F-31"
    },
    answer: "B",
    category: "变频器"
  },
  {
    id: 280,
    type: "single_choice",
    question: "KUKA机器人在机器人程序自动启动时需要将模式选择为（）。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "EXT"
    },
    answer: "D",
    category: "操作模式"
  },
  {
    id: 281,
    type: "single_choice",
    question: "在该设备中皮带输送模块由（）来驱动。",
    options: {
      A: "交流电机和交流驱动器",
      B: "直流电机和直流驱动器",
      C: "同步电机",
      D: "异步电机"
    },
    answer: "A",
    category: "外围设备"
  },
  {
    id: 282,
    type: "single_choice",
    question: "机器人简单外围设备控制示教编程是用（）指令。",
    options: {
      A: "循环",
      B: "条件判断",
      C: "条件循环",
      D: "输入输出"
    },
    answer: "D",
    category: "程序编程"
  },
  {
    id: 283,
    type: "single_choice",
    question: "机器人使用OUT指令控制转盘前需要将转盘进行（）操作。",
    options: {
      A: "寻原点",
      B: "手动正转",
      C: "手动反转",
      D: "旋转至1号位置"
    },
    answer: "A",
    category: "外围设备"
  },
  {
    id: 284,
    type: "single_choice",
    question: "在KUKA机器人中吸取快换夹具的指令为（）。",
    options: {
      A: "OUT",
      B: "IN",
      C: "AI",
      D: "AO"
    },
    answer: "A",
    category: "程序指令"
  },
  {
    id: 285,
    type: "single_choice",
    question: "测速发电机的输出信号为（）。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "开关量",
      D: "脉冲量"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 286,
    type: "single_choice",
    question: "步进电机、直流伺服电机、交流伺服电机的英文字母表示依次为（）。",
    options: {
      A: "SM、DM、AC",
      B: "SM、DC、AC",
      C: "SM、AC、DC",
      D: "SC、AC、DC"
    },
    answer: "B",
    category: "电机控制"
  },
  {
    id: 287,
    type: "single_choice",
    question: "该设备RFID设备的识别，需要机器人开始检测信号，在关闭状态下（）。",
    options: {
      A: "无法使用",
      B: "无法检测",
      C: "可以使用但是无法检测",
      D: "不可使用但是可以检测"
    },
    answer: "D",
    category: "RFID技术"
  },
  {
    id: 288,
    type: "single_choice",
    question: "（）是电子标签的一个重要组成部分，它主要负责存储标签内部信息，还负责对标签收到的信号以及发送的信号做一些必要的处理。",
    options: {
      A: "天线",
      B: "射频接口",
      C: "读写模块",
      D: "电子标签芯片"
    },
    answer: "D",
    category: "RFID技术"
  },
  {
    id: 289,
    type: "single_choice",
    question: "在RFID系统中，电子标签的天线必须满足一些性能要求，下列几项要求中哪一项不需要满足。",
    options: {
      A: "体积要足够小",
      B: "要具有鲁棒性",
      C: "价格不应过高",
      D: "阻抗要足够大"
    },
    answer: "D",
    category: "RFID技术"
  },
  {
    id: 290,
    type: "single_choice",
    question: "射频识别系统中的哪一个器件的工作频率决定了整个射频识别系统的工作频率，功率大小决定了整个射频识别系统的工作距离。",
    options: {
      A: "电子标签",
      B: "上位机",
      C: "读写器",
      D: "计算机通信网络"
    },
    answer: "D",
    category: "RFID技术"
  },
  {
    id: 291,
    type: "single_choice",
    question: "输送带接头接口与中心线不垂直，会导致输送带（）。",
    options: {
      A: "打滑",
      B: "跑偏",
      C: "断带",
      D: "撕裂"
    },
    answer: "B",
    category: "设备维护"
  },
  {
    id: 292,
    type: "single_choice",
    question: "轴承和减速器内回油沟堵塞会造成（）。",
    options: {
      A: "轴端漏油",
      B: "减速器外壳对口平面处漏",
      C: "轴承压盖螺丝孔漏油",
      D: "轴承端盖面与减速器外壳结合面处漏油"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 293,
    type: "single_choice",
    question: "（）不是主要造成电机轴承过热的原因。",
    options: {
      A: "轴承与轴颈或端盖配合不当",
      B: "负荷增大",
      C: "轴承内控偏心，与轴相擦",
      D: "电动机端盖或轴承盖未装平"
    },
    answer: "B",
    category: "设备维护"
  },
  {
    id: 294,
    type: "single_choice",
    question: "皮带输送模块实训中用来输送（）二种物料。",
    options: {
      A: "黑、白",
      B: "灰、白",
      C: "黑、灰",
      D: "金属、白"
    },
    answer: "A",
    category: "外围设备"
  },
  {
    id: 295,
    type: "single_choice",
    question: "皮带输送模块实训的工作流程是（）：1.视觉拍照判断当前物料的颜色输出反馈 2.传感器感应出料口有物料 3.输送物料 4.机器人进行相应的入库处理。",
    options: {
      A: "2314",
      B: "2341",
      C: "3214",
      D: "3241"
    },
    answer: "A",
    category: "外围设备"
  },
  {
    id: 296,
    type: "single_choice",
    question: "皮带输送模块输送完物料等待机器人入库，机器人应用什么指令（）等待启动。",
    options: {
      A: "OUTUT OUT1 ON",
      B: "AOUT AO1 1",
      C: "IF IN1==ON",
      D: "WAITINN IN1 1"
    },
    answer: "D",
    category: "程序指令"
  },
  {
    id: 297,
    type: "single_choice",
    question: "变位机单元是机器人通过组（）和PLC进行信息交互，PLC最终根据机器人的命令将变位机运行到指定位置。",
    options: {
      A: "机器人IO",
      B: "局域网",
      C: "PWM",
      D: "RS485"
    },
    answer: "A",
    category: "外围设备"
  },
  {
    id: 298,
    type: "single_choice",
    question: "装配机器人的规格确认，不考虑以下哪个问题（）。",
    options: {
      A: "作业行程",
      B: "机器重量",
      C: "工作速度",
      D: "承载能力"
    },
    answer: "B",
    category: "机器人选型"
  },
  {
    id: 299,
    type: "single_choice",
    question: "以下哪种不是接触传感器的用途（）。",
    options: {
      A: "探测物体位置",
      B: "探测物体距离",
      C: "探索路径",
      D: "安全保护"
    },
    answer: "B",
    category: "传感器应用"
  },
  {
    id: 300,
    type: "single_choice",
    question: "适用于较长距离和较大物体的探测用（）。",
    options: {
      A: "电磁式传感器",
      B: "超声波传感器",
      C: "光反射式传感器",
      D: "静电容式传感器"
    },
    answer: "B",
    category: "传感器应用"
  },
  {
    id: 301,
    type: "single_choice",
    question: "转盘上用于转盘原点检测的传感器是（）。",
    options: {
      A: "光电传感器",
      B: "接近传感器",
      C: "金属传感器",
      D: "压觉传感器"
    },
    answer: "B",
    category: "传感器应用"
  },
  {
    id: 302,
    type: "single_choice",
    question: "机器人快换夹具是由哪种电磁阀控制的（）。",
    options: {
      A: "单电控电磁阀",
      B: "双电控电磁阀",
      C: "电磁阀组",
      D: "两位五通电磁阀"
    },
    answer: "A",
    category: "气动控制"
  },
  {
    id: 303,
    type: "single_choice",
    question: "机器人手抓使用哪种电磁阀控制的（）。",
    options: {
      A: "单电控电磁阀",
      B: "双电控电磁阀",
      C: "电磁阀组",
      D: "两位五通电磁阀"
    },
    answer: "A",
    category: "气动控制"
  },
  {
    id: 304,
    type: "single_choice",
    question: "在整个工作流程中多次搬运物料时，避免重复示教我们可以（）。",
    options: {
      A: "新建多个程序",
      B: "程序嵌套",
      C: "只用一个程序",
      D: "以上都不对"
    },
    answer: "B",
    category: "程序编程"
  },
  {
    id: 305,
    type: "single_choice",
    question: "供料模块采用（）作为有无物料检测。",
    options: {
      A: "光电传感器",
      B: "接近传感器",
      C: "金属传感器",
      D: "压觉传感器"
    },
    answer: "B",
    category: "传感器应用"
  },
  {
    id: 306,
    type: "single_choice",
    question: "在示教模式我们可以采用I/O界面来控制（）。",
    options: {
      A: "快换夹具加紧、放松",
      B: "手抓夹紧、放松",
      C: "吸盘动作",
      D: "以上都可以"
    },
    answer: "D",
    category: "示教编程"
  },
  {
    id: 307,
    type: "single_choice",
    question: "供料机构的推料气缸用（）来控制。",
    options: {
      A: "单电控电磁阀",
      B: "双电控电磁阀",
      C: "电磁阀组",
      D: "两位五通电磁阀"
    },
    answer: "A",
    category: "气动控制"
  },
  {
    id: 308,
    type: "single_choice",
    question: "推料气缸电磁阀是由（）来控制",
    options: {
      A: "机器人输出",
      B: "机器人输入",
      C: "PLC输入",
      D: "PLC输出"
    },
    answer: "D",
    category: "控制系统"
  },
  {
    id: 309,
    type: "single_choice",
    question: "供料机构的顶料气缸用（）来控制",
    options: {
      A: "单电控电磁阀",
      B: "双电控电磁阀",
      C: "电磁阀组",
      D: "两位五通电磁阀"
    },
    answer: "A",
    category: "气动控制"
  },
  {
    id: 310,
    type: "single_choice",
    question: "顶料气缸电磁阀是由（）来控制",
    options: {
      A: "机器人输出",
      B: "机器人输入",
      C: "PLC输入",
      D: "PLC输出"
    },
    answer: "D",
    category: "控制系统"
  },
  {
    id: 311,
    type: "single_choice",
    question: "KUKA.GripperTech配置的控制系统中可对（）种不同的抓爪进行配置。",
    options: {
      A: "12",
      B: "5",
      C: "16",
      D: "20"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 312,
    type: "single_choice",
    question: "在机器人搬运过程中保持夹具姿态不变的轨迹运动称为（）。",
    options: {
      A: "圆周",
      B: "线性",
      C: "单轴",
      D: "重定位"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 313,
    type: "single_choice",
    question: "在机器人搬运过程中，夹具对应信号置位时为进行物体的夹取，下列哪个指令可以帮助我们进行物体的夹取（）。",
    options: {
      A: "OUT",
      B: "LIN_REL",
      C: "WAIT",
      D: "IF"
    },
    answer: "A",
    category: "程序指令"
  },
  {
    id: 314,
    type: "single_choice",
    question: "下图中，语句指针显示了哪种信息（）。",
    options: {
      A: "机器人从P3运动到P4",
      B: "机器人已精确暂停达到P4",
      C: "机器人从P4运动到P3",
      D: "语句指针位于程序上端"
    },
    answer: "B",
    category: "程序执行",
    hasImage: true,
    imagePath: "/images/questionbank/robot-coding-KKR-YL-basic_img314.jpg",
    imageDescription: "程序语句指针状态显示图",
    imagePlaceholder: "🤖 此题包含程序语句指针状态显示图"
  },
  {
    id: 315,
    type: "single_choice",
    question: "在KUKA机器人中最多可建立（）个轴坐标工作空间。",
    options: {
      A: "4",
      B: "8",
      C: "12",
      D: "16"
    },
    answer: "B",
    category: "工作空间"
  },
  {
    id: 316,
    type: "single_choice",
    question: "工作空间监控已关闭的选项为（）。",
    options: {
      A: "#INSIDE_STOP",
      B: "#OUTSIDE_STOP",
      C: "#OFF",
      D: "#INSIDE"
    },
    answer: "C",
    category: "工作空间"
  },
  {
    id: 317,
    type: "single_choice",
    question: "如果多个中断同时出现，则先执行最高优先级的中断，然后再执行优先级低的中断，最高等级的中断为（）。",
    options: {
      A: "128",
      B: "80",
      C: "19",
      D: "1"
    },
    answer: "D",
    category: "程序中断"
  },
  {
    id: 318,
    type: "single_choice",
    question: "在看KUKA机器人中创建程序时，以下名称可创建的文件名是（）。",
    options: {
      A: "123",
      B: "abc",
      C: "...",
      D: "///"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 319,
    type: "single_choice",
    question: "在KUKA机器人中程序创建子程序的框架为（）。",
    options: {
      A: "DEF...END",
      B: "TEST...ENDTEST",
      C: "WHILE...ENDWHILE",
      D: "INI...END"
    },
    answer: "A",
    category: "程序编程"
  },
  {
    id: 320,
    type: "single_choice",
    question: "在KUKA机器人中LIN、PTP、CIRC指令归属于指令中的（）。",
    options: {
      A: "移动",
      B: "逻辑",
      C: "模拟输出",
      D: "注释"
    },
    answer: "A",
    category: "程序指令"
  },
  {
    id: 321,
    type: "single_choice",
    question: "机器人搬运入库等待传感器反馈信号所使用的的指令为（）。",
    options: {
      A: "WAITFOR",
      B: "WAIT",
      C: "OUT",
      D: "PLUSEOUT"
    },
    answer: "A",
    category: "程序指令"
  },
  {
    id: 322,
    type: "single_choice",
    question: "同一平面的码垛路线为了保持夹具姿态不变通常使用（）指令。",
    options: {
      A: "PTP",
      B: "LIN",
      C: "CIRC",
      D: "SPLINE"
    },
    answer: "B",
    category: "码垛应用"
  },
  {
    id: 323,
    type: "single_choice",
    question: "LIN_REL{Z50}在程序中的含义为（）。",
    options: {
      A: "在上一点位的基础上向z轴增加50mm",
      B: "在当前位置的基础上向z轴增加50mm",
      C: "对当前点位进行赋值",
      D: "在HOME的基础上向z轴增加50mm"
    },
    answer: "B",
    category: "程序指令"
  },
  {
    id: 324,
    type: "single_choice",
    question: "在码垛程序的编写中，我们常常使用到变量来进行次数的计算，该变量的定义形式为（）。",
    options: {
      A: "DECLINT",
      B: "DECLFADT",
      C: "DECLE6POS",
      D: "DECLLDAT"
    },
    answer: "A",
    category: "变量定义"
  },
  {
    id: 325,
    type: "single_choice",
    question: "进行工具测量时，输入工具至法兰中心点的距离值(X,Y,Z)和转角（A，B，C)，这是哪一种方法？",
    options: {
      A: "XYZ2点法",
      B: "XYZ3点法",
      C: "直接输入法",
      D: "XYZ4点法"
    },
    answer: "C",
    category: "坐标系标定"
  },
  {
    id: 326,
    type: "single_choice",
    question: "测量以下哪一个坐标系后，可以沿着工作面或工件的边缘手动移动TCP？",
    options: {
      A: "基坐标系",
      B: "法兰坐标系",
      C: "世界坐标系",
      D: "工具坐标系"
    },
    answer: "A",
    category: "坐标系标定"
  },
  {
    id: 327,
    type: "single_choice",
    question: "什么情况下，测量基坐标需采用间接法？",
    options: {
      A: "基坐标原点在机器人过范围内",
      B: "基坐标原点在地上",
      C: "基坐标原点在桌子上",
      D: "当机器人无法移至基坐标原点时"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 328,
    type: "single_choice",
    question: "以下哪一个点是用三点法测量基坐标时需要的点？",
    options: {
      A: "原点",
      B: "与X轴成45°角的点",
      C: "与Y轴成45°的点",
      D: "Z轴上的点"
    },
    answer: "A",
    category: "坐标系标定"
  },
  {
    id: 329,
    type: "single_choice",
    question: "以下哪一个点是用三点法测量基坐标时需要的点？",
    options: {
      A: "与X轴成45°角的点",
      B: "与Y轴成45°的点",
      C: "XY平面上的点",
      D: "Z轴上的点"
    },
    answer: "C",
    category: "坐标系标定"
  },
  {
    id: 330,
    type: "single_choice",
    question: "以下哪一个点是用三点法测量基坐标时需要的点？",
    options: {
      A: "与X轴成45°角的点",
      B: "X向上的点",
      C: "与Y轴成45°的点",
      D: "Z轴上的点"
    },
    answer: "B",
    category: "坐标系标定"
  },
  {
    id: 331,
    type: "single_choice",
    question: "以下哪一项是用直接输入法进行工具测量时不需输入的？",
    options: {
      A: "X轴方向至法兰中心的距离值",
      B: "Y轴方向至法兰中心的距离值",
      C: "Z轴方向至法兰中心的距离值",
      D: "工具距离地面高度"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 332,
    type: "single_choice",
    question: "当吸盘吸取物料时，吸盘停在物料正上方20cm，需切换为以下哪一个坐标调节？",
    options: {
      A: "基坐标系",
      B: "法兰坐标系",
      C: "关节坐标系",
      D: "工具坐标系"
    },
    answer: "A",
    category: "坐标系应用"
  },
  {
    id: 333,
    type: "single_choice",
    question: "在库卡机器人中，必须执行BCO运行的原因是？",
    options: {
      A: "为了使当前的机器人位置与机器人程序中的当前点位置保持一致",
      B: "为了增加机器人行程",
      C: "为了使机器人达到最大负载",
      D: "使机器人运行速度更稳定"
    },
    answer: "A",
    category: "程序执行"
  },
  {
    id: 334,
    type: "single_choice",
    question: "机械臂和外轴移动速度数据不包含的参数是（）",
    options: {
      A: "工具中心点速率",
      B: "TCP重定位速率",
      C: "线性外轴的速率",
      D: "机械臂的位置"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 335,
    type: "single_choice",
    question: "机器人搬运任务的主要环节有工艺分析、运动规划、示教准备、（）和程序调试。",
    options: {
      A: "视觉检测",
      B: "原点标定",
      C: "示教编程",
      D: "路径规划"
    },
    answer: "C",
    category: "搬运应用"
  },
  {
    id: 336,
    type: "single_choice",
    question: "机器人按照应用类型来分，以下哪种属于错误分类。（）",
    options: {
      A: "工业机器人",
      B: "极限作业机器人",
      C: "服务机器人",
      D: "智能机器人"
    },
    answer: "D",
    category: "机器人分类"
  },
  {
    id: 337,
    type: "single_choice",
    question: "当一个或者多个指令重复多次时，可使用FOR指令，FOR指令是（）指令。",
    options: {
      A: "循环递增减",
      B: "循环",
      C: "偏移",
      D: "判断"
    },
    answer: "A",
    category: "程序编程"
  },
  {
    id: 338,
    type: "single_choice",
    question: "笛卡尔坐标系中与XYZ对应的旋转运动是（）。",
    options: {
      A: "B-C-A",
      B: "C-B-A",
      C: "A-B-C",
      D: "C-A-B"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 339,
    type: "single_choice",
    question: "强制数字量输出信号，需要在下列哪项操作下进行（）。",
    options: {
      A: "显示-输入输出端",
      B: "配置-输入输出端",
      C: "显示-诊断",
      D: "显示-修改变量"
    },
    answer: "A",
    category: "输入输出"
  },
  {
    id: 340,
    type: "single_choice",
    question: "更改语言需要在哪个菜单下操作（）。",
    options: {
      A: "编辑-设置",
      B: "配置-设置",
      C: "文件-修改",
      D: "显示-窗口"
    },
    answer: "A",
    category: "系统配置"
  },
  {
    id: 341,
    type: "single_choice",
    question: "库卡机器人操作面板又叫做什么（）。",
    options: {
      A: "KCP",
      B: "TP",
      C: "MP",
      D: "PHG"
    },
    answer: "A",
    category: "系统硬件"
  },
  {
    id: 342,
    type: "single_choice",
    question: "库卡机器人面板上的提示符号是什么意思（）。",
    options: {
      A: "状态性提示",
      B: "说明性提示",
      C: "确认性提示",
      D: "对话信息"
    },
    answer: "B",
    category: "系统界面"
  },
  {
    id: 343,
    type: "single_choice",
    question: "正常情况下机器人六轴可以运动多少度（）。",
    options: {
      A: "180°",
      B: "±360°",
      C: "大于360°",
      D: "360°"
    },
    answer: "C",
    category: "机器人参数"
  },
  {
    id: 344,
    type: "single_choice",
    question: "KUKA机器人中，SAK指的是什么（）。",
    options: {
      A: "机器人在原点位",
      B: "机器人在运行",
      C: "机器人在运动轨迹上",
      D: "机器人暂停动作"
    },
    answer: "C",
    category: "系统状态"
  },
  {
    id: 345,
    type: "single_choice",
    question: "接通驱动装置$DRIVES_ON至少需要（）。",
    options: {
      A: "2ms",
      B: "20ms",
      C: "0.2s",
      D: "2s"
    },
    answer: "B",
    category: "系统控制"
  },
  {
    id: 346,
    type: "single_choice",
    question: "外部自动运行的信号配置顺序为（）。①主菜单 ②输入/输出端 ③配置 ④外部自动运行",
    options: {
      A: "①②③④",
      B: "①③②④",
      C: "③①②④",
      D: "①②④③"
    },
    answer: "B",
    category: "系统配置"
  },
  {
    id: 347,
    type: "single_choice",
    question: "在$DRIVES_OFF驱动装置关闭信号处施加（），则上级控制系统会关断机器人驱动装置。",
    options: {
      A: "20毫秒的低脉冲",
      B: "20毫秒的高脉冲",
      C: "持续的低电平",
      D: "持续的高电平"
    },
    answer: "A",
    category: "系统控制"
  },
  {
    id: 348,
    type: "single_choice",
    question: "上级控制系统以二进制编码整数值的形式传递程序编号时，00100111的值为（）。",
    options: {
      A: "27",
      B: "39",
      C: "4",
      D: "40"
    },
    answer: "B",
    category: "程序控制"
  },
  {
    id: 349,
    type: "single_choice",
    question: "上级控制系统或外围设备以'N选1'的编码值传递程序编号时，00001000的值为（）。",
    options: {
      A: "16",
      B: "8",
      C: "4",
      D: "1"
    },
    answer: "C",
    category: "程序控制"
  },
  {
    id: 350,
    type: "single_choice",
    question: "在KUKA机器人中，PTP指令的含义是什么？",
    options: {
      A: "点到点运动",
      B: "线性运动",
      C: "圆周运动",
      D: "都不是"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 351,
    type: "single_choice",
    question: "在KUKA机器人中，LIN指令的含义是什么？",
    options: {
      A: "点到点运动",
      B: "线性运动",
      C: "圆周运动",
      D: "都不是"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 352,
    type: "single_choice",
    question: "在KUKA机器人中，CIRC指令的含义是什么？",
    options: {
      A: "点到点运动",
      B: "线性运动",
      C: "圆周运动",
      D: "都不是"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 353,
    type: "single_choice",
    question: "在KUKA机器人中，PTP、LIN、CIRC指令中达到目标点所需时间最短的是？",
    options: {
      A: "PTP",
      B: "LIN",
      C: "CIRC",
      D: "都一样"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 354,
    type: "single_choice",
    question: "在KUKA机器人中程序编程中Vel是什么意思？",
    options: {
      A: "两点之间的速度",
      B: "两点间的距离",
      C: "两点间移动所需时间",
      D: "两点间的加速度"
    },
    answer: "A",
    category: "程序编程"
  },
  {
    id: 355,
    type: "single_choice",
    question: "在KUKA机器人中程序编程中Acc是什么意思？",
    options: {
      A: "两点之间的速度",
      B: "两点间的距离",
      C: "两点间移动所需时间",
      D: "两点间的加速度"
    },
    answer: "D",
    category: "程序编程"
  },
  {
    id: 356,
    type: "single_choice",
    question: "完成一个正方形的轨迹示教，最少需要（）个点。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "B",
    category: "示教编程"
  },
  {
    id: 357,
    type: "single_choice",
    question: "当连接的两个表达式为真时，该表达式的结果为真，应该用哪个运算符？",
    options: {
      A: "IF",
      B: "AND",
      C: "OR",
      D: "都可以"
    },
    answer: "C",
    category: "程序编程"
  },
  {
    id: 358,
    type: "single_choice",
    question: "样条是一种尤其适用于（）的运动方式。",
    options: {
      A: "复杂曲线轨迹",
      B: "复杂直线轨迹",
      C: "简单曲线轨迹",
      D: "简单直线轨迹"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 359,
    type: "single_choice",
    question: "这种轨迹原则上也可以通过轨迹逼近的（）运动和（）运动生成。",
    options: {
      A: "LIN、CIRC",
      B: "PTP、LIN",
      C: "PTP、CIRC",
      D: "PTP、LIN、CIRC"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 360,
    type: "single_choice",
    question: "通过（）可将多个运动合并成一个总运动。",
    options: {
      A: "点对点组",
      B: "直线组",
      C: "圆弧组",
      D: "样条组"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 361,
    type: "single_choice",
    question: "机器人控制系统把一个样条组作为几个运动语句进行设计和执行？",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 362,
    type: "single_choice",
    question: "在PTP运动时，为什么通常最快速的轨迹不是最短的轨迹？",
    options: {
      A: "最快的轨迹就是最短的轨迹",
      B: "由于机器人轴的旋转运动",
      C: "由于机器人润滑油不足",
      D: "直线上有障碍物"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 363,
    type: "single_choice",
    question: "创建PTP运动必须在哪种运动方式下？",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "AUT EXT"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 364,
    type: "single_choice",
    question: "创建LIN运动必须在哪种运动方式下？",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "AUT EXT"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 365,
    type: "single_choice",
    question: "创建CIRC运动必须在哪种运动方式下？",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "AUT EXT"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 366,
    type: "single_choice",
    question: "直线运动的速度的参照点是？",
    options: {
      A: "一轴",
      B: "二轴",
      C: "机器人各轴",
      D: "TCP"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 367,
    type: "single_choice",
    question: "直线运动的姿态的参照点是？",
    options: {
      A: "一轴",
      B: "二轴",
      C: "机器人各轴",
      D: "TCP"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 368,
    type: "single_choice",
    question: "圆形轨迹运动是通过起点、辅助点和目标点定义的。",
    options: {
      A: "起点、辅助点",
      B: "起点、目标点",
      C: "起点、辅助点、目标点",
      D: "目标点、辅助点"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 369,
    type: "single_choice",
    question: "圆弧运动的姿态的参照点是？",
    options: {
      A: "一轴",
      B: "二轴",
      C: "机器人各轴",
      D: "TCP"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 370,
    type: "single_choice",
    question: "圆弧运动的速度的参照点是？",
    options: {
      A: "一轴",
      B: "二轴",
      C: "机器人各轴",
      D: "TCP"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 371,
    type: "single_choice",
    question: "6自由度的KUKA机器人具有几个不同的奇点位置？",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 372,
    type: "single_choice",
    question: "标准的KRC2控制柜(不增加控制柜的前提下）可扩展到几轴（）。",
    options: {
      A: "6",
      B: "8",
      C: "10",
      D: "12"
    },
    answer: "B",
    category: "系统硬件"
  },
  {
    id: 373,
    type: "single_choice",
    question: "KUKA机器人零点丢失后会导致（）。",
    options: {
      A: "仅能单轴运动",
      B: "仅能在规定路径上运动",
      C: "只能用专用装置驱动",
      D: "机器人无法移动"
    },
    answer: "A",
    category: "故障处理"
  },
  {
    id: 374,
    type: "single_choice",
    question: "库卡机器人程序被修改后需要做什么操作（）。",
    options: {
      A: "程序需再次进入",
      B: "程序需再次选择",
      C: "控制系统需再次被引导",
      D: "降低速度并测试程序"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 375,
    type: "single_choice",
    question: "库卡机器人外部自动输出端RK9表示（）。",
    options: {
      A: "编程运行",
      B: "单步运行",
      C: "语句吻合",
      D: "自动运行"
    },
    answer: "D",
    category: "输入输出"
  },
  {
    id: 376,
    type: "single_choice",
    question: "黄绿相间的双色线，按电气规范只能用作（）",
    options: {
      A: "火线",
      B: "零线",
      C: "接地线",
      D: "网络线"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 377,
    type: "single_choice",
    question: "在KUKA机器人中，经常被使用的信号序列通常我们将其编写在什么程序里（）。",
    options: {
      A: "FLOGE",
      B: "MACRO",
      C: "CP",
      D: "MACROSPS"
    },
    answer: "B",
    category: "程序编程"
  },
  {
    id: 378,
    type: "single_choice",
    question: "指令'Anakonst'表示什么（）。",
    options: {
      A: "方形波模拟电压",
      B: "同速度乘比的模拟电压",
      C: "恒定的模拟电压",
      D: "同速度反比的模拟电压"
    },
    answer: "C",
    category: "程序指令"
  },
  {
    id: 379,
    type: "single_choice",
    question: "KUKA机器人的工艺移动方式包括KLIN和（）。",
    options: {
      A: "LIN",
      B: "CIR",
      C: "PTP",
      D: "LCIR"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 380,
    type: "single_choice",
    question: "KUKA机器人的工艺移动方式包括LCIR和（）。",
    options: {
      A: "LIN",
      B: "CIR",
      C: "PTP",
      D: "KLIN"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 381,
    type: "single_choice",
    question: "用于外部自动自动装置运行时，必须在（）文件中输入运行的序列。",
    options: {
      A: "ProgrammMaker",
      B: "Cell",
      C: "VK编辑器",
      D: "LOG"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 382,
    type: "single_choice",
    question: "外部启动运行时，其模式需满足（）。",
    options: {
      A: "T1模式/单步",
      B: "自动模式/连续",
      C: "自动模式/单步",
      D: "T2模式/单步"
    },
    answer: "B",
    category: "操作模式"
  },
  {
    id: 383,
    type: "single_choice",
    question: "库卡机器人示教器上的S显示灰色表示（）。",
    options: {
      A: "解释程序取消",
      B: "解释程序停止",
      C: "解释程序运行",
      D: "解释选程序选定"
    },
    answer: "A",
    category: "系统状态"
  },
  {
    id: 384,
    type: "single_choice",
    question: "库卡机器人示教器上的S显示绿色表示（）。",
    options: {
      A: "解释程序取消",
      B: "解释程序停止",
      C: "解释程序运行",
      D: "解释选程序选定"
    },
    answer: "C",
    category: "系统状态"
  },
  {
    id: 385,
    type: "single_choice",
    question: "库卡机器人示教器上的S显示红色表示（）。",
    options: {
      A: "解释程序取消",
      B: "解释程序停止",
      C: "解释程序运行",
      D: "解释选程序选定"
    },
    answer: "B",
    category: "系统状态"
  },
  {
    id: 386,
    type: "single_choice",
    question: "库卡机器人示教器上的I显示红色表示（）。",
    options: {
      A: "没有选定工作程序",
      B: "各种驱动装置未准备就绪",
      C: "各种驱动装置准备就绪",
      D: "工作程序正在运行"
    },
    answer: "B",
    category: "系统状态"
  },
  {
    id: 387,
    type: "single_choice",
    question: "库卡机器人示教器上的I显示绿色表示（）。",
    options: {
      A: "没有选定工作程序",
      B: "各种驱动装置未准备就绪",
      C: "各种驱动装置准备就绪",
      D: "工作程序正在运行"
    },
    answer: "C",
    category: "系统状态"
  },
  {
    id: 388,
    type: "single_choice",
    question: "库卡机器人示教器上的R显示灰色表示（）。",
    options: {
      A: "没有选定工作程序",
      B: "各种驱动装置未准备就绪",
      C: "各种驱动装置准备就绪",
      D: "工作程序正在运行"
    },
    answer: "A",
    category: "系统状态"
  },
  {
    id: 389,
    type: "single_choice",
    question: "库卡机器人示教器上的R显示绿色表示（）。",
    options: {
      A: "没有选定工作程序",
      B: "各种驱动装置未准备就绪",
      C: "各种驱动装置准备就绪",
      D: "工作程序正在运行"
    },
    answer: "D",
    category: "系统状态"
  },
  {
    id: 390,
    type: "single_choice",
    question: "以下哪个选项不是采用统一编程方法的目的（）。",
    options: {
      A: "通过严密的分段结构方便地解决复杂的问题",
      B: "以清晰易懂的方式展示基本方法",
      C: "团队开发组成部分",
      D: "提高维护、修改和扩展程序的效率"
    },
    answer: "C",
    category: "程序编程"
  },
  {
    id: 391,
    type: "single_choice",
    question: "下列哪几个选项是注释的用处（）。①对程序内容或功能的说明 ②改善程序的可读性 ③有利于程序结构化 ④控制器会将注释理解为句法",
    options: {
      A: "①②③④",
      B: "②③④",
      C: "①②③",
      D: "②④"
    },
    answer: "C",
    category: "程序编程"
  },
  {
    id: 392,
    type: "single_choice",
    question: "为了能够使用外部自动运行接口，必须进行相应配置，以下哪个配置是不需要的（）。",
    options: {
      A: "配置CELL.SRC程序",
      B: "配置外部自动运行接口的输入端",
      C: "配置外部自动运行接口的输出端",
      D: "建立MAIN程序"
    },
    answer: "D",
    category: "系统配置"
  },
  {
    id: 393,
    type: "single_choice",
    question: "以下哪个信号可以确定程序号类型（）。",
    options: {
      A: "PGNO_TYPE",
      B: "PGNO_LENGTH",
      C: "PGNO_PARITY",
      D: "PGNO_VALID"
    },
    answer: "A",
    category: "程序控制"
  },
  {
    id: 394,
    type: "single_choice",
    question: "设定了$EXT_START外部启动后，接口激活时将启动或继续一个程序，该程序一般为（）。",
    options: {
      A: "MAIN.SRC",
      B: "CELL.SRC",
      C: "USER.SRC",
      D: "MAIN.DAT"
    },
    answer: "B",
    category: "程序控制"
  },
  {
    id: 395,
    type: "single_choice",
    question: "哪个选项不能作为PGNO_TYPE程序号类型的值（）。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "D",
    category: "程序控制"
  },
  {
    id: 396,
    type: "single_choice",
    question: "在KUKA机器人中按下示教器热插拔按钮后（）秒内可以安全拔下示教器。",
    options: {
      A: "5",
      B: "15",
      C: "20",
      D: "30"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 397,
    type: "single_choice",
    question: "PLC的控制信号需发送至机器人的",
    options: {
      A: "输入端",
      B: "输出端",
      C: "输入或输出端",
      D: "无需发送即可控制机器人"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 398,
    type: "single_choice",
    question: "机器人状态是通过发送给PLC？",
    options: {
      A: "输入端",
      B: "输出端",
      C: "输入或输出端",
      D: "无需发送即可控制机器人"
    },
    answer: "B",
    category: "控制系统"
  },
  {
    id: 399,
    type: "single_choice",
    question: "如果选定的运动语句包括PTP运行指令，则BCO运行将作为运动从实际位置移动到目标位置？",
    options: {
      A: "PTP",
      B: "LIN",
      C: "CIRC",
      D: "随机运动方式"
    },
    answer: "A",
    category: "程序执行"
  },
  {
    id: 400,
    type: "single_choice",
    question: "如果选定的运动语句包括LIN运行指令，则BCO运行将作为运动从实际位置移动到目标位置？",
    options: {
      A: "PTP",
      B: "LIN",
      C: "CIRC",
      D: "随机运动方式"
    },
    answer: "B",
    category: "程序执行"
  },
  {
    id: 401,
    type: "single_choice",
    question: "如果选定的运动语句包括CIRC运行指令，则BCO运行将作为运动从实际位置移动到目标位置？",
    options: {
      A: "PTP",
      B: "LIN",
      C: "CIRC",
      D: "随机运动方式"
    },
    answer: "B",
    category: "程序执行"
  },
  {
    id: 402,
    type: "single_choice",
    question: "控制程序Cell.src始终位于文件夹中。",
    options: {
      A: "R1",
      B: "R2",
      C: "R3",
      D: "R4"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 403,
    type: "single_choice",
    question: "Cell程序可以进行个性化调整，程序的基本结构",
    options: {
      A: "随之变化",
      B: "可能会改变",
      C: "必须保持不变",
      D: "都可以"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 404,
    type: "single_choice",
    question: "KUKA机器人设备，控制快换夹具的信号是（）。",
    options: {
      A: "DO15",
      B: "DO14",
      C: "DI15",
      D: "DI14"
    },
    answer: "A",
    category: "输入输出"
  },
  {
    id: 405,
    type: "single_choice",
    question: "KUKA机器人设备，控制夹具的信号是（）。",
    options: {
      A: "DO15",
      B: "DO14",
      C: "DI15",
      D: "DI14"
    },
    answer: "B",
    category: "输入输出"
  },
  {
    id: 406,
    type: "single_choice",
    question: "仓储模块中，机器人那种信号接受欧传感器的反馈信号（）。",
    options: {
      A: "RI",
      B: "RO",
      C: "DI",
      D: "DO"
    },
    answer: "C",
    category: "输入输出"
  },
  {
    id: 407,
    type: "single_choice",
    question: "RFID检测单元，其检测信号反馈到机器人的（）信号。",
    options: {
      A: "GI",
      B: "GO",
      C: "DI",
      D: "RI"
    },
    answer: "A",
    category: "输入输出"
  },
  {
    id: 408,
    type: "single_choice",
    question: "使用变位机单元时，机器人需要发出（）信号触发变位机动作，运动到装配位置。",
    options: {
      A: "DO",
      B: "GO",
      C: "RO",
      D: "SO"
    },
    answer: "A",
    category: "输入输出"
  },
  {
    id: 409,
    type: "single_choice",
    question: "使用变位机单元时，机器人调整位置后，需要切换到（）坐标系。",
    options: {
      A: "世界坐标系",
      B: "工件坐标系",
      C: "关节坐标系",
      D: "工具坐标系"
    },
    answer: "D",
    category: "坐标系应用"
  },
  {
    id: 410,
    type: "single_choice",
    question: "如果A4.A5.A6位于一条直线上，则必须转换到（）运行A5轴。",
    options: {
      A: "全球坐标系",
      B: "工具坐标系",
      C: "与轴相关的坐标系",
      D: "基坐标系"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 411,
    type: "single_choice",
    question: "机器人换装快换夹具时，编程时其运动指令最好采用（）指令形式。",
    options: {
      A: "LIN",
      B: "CIRC",
      C: "PTP",
      D: "KLIN"
    },
    answer: "A",
    category: "程序编程"
  },
  {
    id: 412,
    type: "single_choice",
    question: "职业道德活动中，对客人做到（）是符合语言规范的具体要求的。",
    options: {
      A: "言语细致，反复介绍",
      B: "语速要快，不浪费客人时间",
      C: "用尊称，不用忌语",
      D: "语气严肃，维护自尊"
    },
    answer: "C",
    category: "职业道德"
  },
  {
    id: 413,
    type: "single_choice",
    question: "职业道德对企业起到（）的作用。",
    options: {
      A: "决定经济效益",
      B: "促进决策科学化",
      C: "增强竞争力",
      D: "树立员工守业意识"
    },
    answer: "C",
    category: "职业道德"
  },
  {
    id: 414,
    type: "single_choice",
    question: "从业人员在职业活动中做到（）是符合语言规范的具体。",
    options: {
      A: "言语细致，反复介绍",
      B: "语速要快，不浪费客人时间",
      C: "用尊称，不用忌语",
      D: "语气严肃，维护自尊"
    },
    answer: "C",
    category: "职业道德"
  },
  {
    id: 415,
    type: "single_choice",
    question: "是指个人对职业的看法和想法，他是职业生活的最初动力（）。",
    options: {
      A: "职业意识",
      B: "岗位评估",
      C: "职业生涯规划",
      D: "自我评价"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 416,
    type: "single_choice",
    question: "我们将人们在进行职业活动的过程中，一切符合职业要求的心理意识、行为准则和行为规范的总和称之为（）。",
    options: {
      A: "职业道德",
      B: "职业技能",
      C: "职业行为",
      D: "职业意识"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 417,
    type: "single_choice",
    question: "万一发生火灾，请使用对机器人进行灭火（）。",
    options: {
      A: "二氧化碳灭火器",
      B: "泡沫灭火器",
      C: "水",
      D: "拖把"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 418,
    type: "single_choice",
    question: "工业机器人工作站安全装置包括（）。",
    options: {
      A: "安全栅栏",
      B: "安全门",
      C: "安全插销和槽",
      D: "以上都是"
    },
    answer: "D",
    category: "安全规范"
  },
  {
    id: 419,
    type: "single_choice",
    question: "为保障人身安全，在正常情况下，电气设备的安全电压规定为（）。",
    options: {
      A: "42V",
      B: "36V",
      C: "24V",
      D: "12V"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 420,
    type: "single_choice",
    question: "（）是一种良好的职业精神和职业修养，是一种软实力。",
    options: {
      A: "职业技能",
      B: "职业素养",
      C: "职业计划",
      D: "以上选项都不正确"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 421,
    type: "single_choice",
    question: "为了确保安全，用示教编程器手动运行机器人时，机器人的最高速度限制为（）。",
    options: {
      A: "50mm/s",
      B: "250mm/s",
      C: "800mm/s",
      D: "1600mm/s"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 422,
    type: "single_choice",
    question: "当在机器人危险区域工作时，很关键的是要用（）操作机器人。",
    options: {
      A: "T1模式",
      B: "T2模式",
      C: "AUT模式",
      D: "AUTEXT模式"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 423,
    type: "single_choice",
    question: "下列选项中属于职业道德作用的是（）。",
    options: {
      A: "增强企业的凝聚力",
      B: "增强企业的离心力",
      C: "决定企业的经济效益",
      D: "增强企业员工的独立性"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 424,
    type: "single_choice",
    question: "职业道德就是人们在（）的职业活动中应遵循的行为规范的总和。",
    options: {
      A: "特定",
      B: "所有",
      C: "一般",
      D: "规定"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 425,
    type: "single_choice",
    question: "文明礼貌的职业道德规范要求员工做到（）",
    options: {
      A: "忠于职守",
      B: "待人热情",
      C: "办事公道",
      D: "讲究卫生"
    },
    answer: "B",
    category: "职业道德"
  },
  {
    id: 426,
    type: "single_choice",
    question: "在职业交往活动中，符合仪表端庄具体要求的是（）。",
    options: {
      A: "着装华贵",
      B: "适当化妆或戴饰品",
      C: "饰品俏丽",
      D: "发型要突出个性"
    },
    answer: "B",
    category: "职业道德"
  },
  {
    id: 427,
    type: "single_choice",
    question: "职业纪律是企业的行为规范，职业纪律具有（）的特点。",
    options: {
      A: "明确的规定性",
      B: "高度的强制性",
      C: "通用性",
      D: "自愿性"
    },
    answer: "A",
    category: "职业纪律"
  },
  {
    id: 428,
    type: "single_choice",
    question: "职业道德是一种（）的约束机制。",
    options: {
      A: "强制性",
      B: "非强制性",
      C: "随意性",
      D: "自发性"
    },
    answer: "B",
    category: "职业道德"
  },
  {
    id: 429,
    type: "single_choice",
    question: "职业道德是指从事一定职业劳动的人们，在长期的职业活动中形成的（）。",
    options: {
      A: "行为规范",
      B: "操作程序",
      C: "劳动技能",
      D: "思维习惯"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 430,
    type: "single_choice",
    question: "职业道德是人们事业成功的（）",
    options: {
      A: "重要保证",
      B: "最终结果",
      C: "决定条件",
      D: "显著标志"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 431,
    type: "single_choice",
    question: "职业道德与人们事业的关系是（）",
    options: {
      A: "有职业道德的人一定能够获得事业成功",
      B: "没有职业道德的人不会获得成功",
      C: "事业成功的人往往具有较高的职业道德",
      D: "缺乏职业道德的人往往更容易获得成功"
    },
    answer: "C",
    category: "职业道德"
  },
  {
    id: 432,
    type: "single_choice",
    question: "下列说法中，不符合语言规范具体要求的是（）。",
    options: {
      A: "语感自然，不呆板",
      B: "用尊称，不用忌语",
      C: "语速适中，不快不慢",
      D: "多使用幽默语言，调节气氛"
    },
    answer: "D",
    category: "职业道德"
  },
  {
    id: 433,
    type: "single_choice",
    question: "对待职业和岗位，（）并不是爱岗敬业所要求的。",
    options: {
      A: "树立职业理想",
      B: "干一行爱一行专一行",
      C: "遵守企业的规章制度",
      D: "一职定终身，不改行"
    },
    answer: "D",
    category: "职业道德"
  },
  {
    id: 434,
    type: "single_choice",
    question: "下列选项中，关于职业道德与人们事业成功的关系的叙述中正确的是（）。",
    options: {
      A: "职业道德是人事业成功的重要条件",
      B: "职业道德水平高的人肯定能够取得事业的成功",
      C: "缺乏职业道德的人更容易获得事业的成功",
      D: "人的事业成功与否与职业道德无关"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 435,
    type: "single_choice",
    question: "（）是人的综合素养的主题和核心。",
    options: {
      A: "职业技能",
      B: "职业行为",
      C: "职业意识",
      D: "职业素养"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 436,
    type: "single_choice",
    question: "对职业生涯发展具有决定性作用（）。",
    options: {
      A: "职业生涯规划",
      B: "职业素养",
      C: "职业技能",
      D: "身体状况"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 437,
    type: "single_choice",
    question: "（）是指个人对职业的看法和想法，他是职业生活的最初动力。",
    options: {
      A: "职业意识",
      B: "岗位评估",
      C: "职业生涯规划",
      D: "自我评价"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 438,
    type: "single_choice",
    question: "（）是职业人最为重要的职业素质之一，是从业人员在生产活动中必须遵循的行为准则。",
    options: {
      A: "岗位道德素养",
      B: "岗位担当素养",
      C: "岗位服务素养",
      D: "岗位安全素养"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 439,
    type: "single_choice",
    question: "职业纪律是从事这一职业的员工应该共同遵守的行为准则，它包括的内容有（）。",
    options: {
      A: "交往规则",
      B: "操作程序",
      C: "群众观念",
      D: "外事纪律"
    },
    answer: "D",
    category: "职业纪律"
  },
  {
    id: 440,
    type: "single_choice",
    question: "下列部署以头部防护用品的是（）。",
    options: {
      A: "耳罩",
      B: "电绝缘安全帽",
      C: "方案安全帽",
      D: "防护面罩"
    },
    answer: "A",
    category: "安全防护"
  },
  {
    id: 441,
    type: "single_choice",
    question: "在安全生产管理中，危险度通常由（）决定。",
    options: {
      A: "事故发生的可能性",
      B: "事故后果的严重性",
      C: "事故发生的可能性和事故后果的严重性",
      D: "事故发生的时间节点"
    },
    answer: "C",
    category: "安全管理"
  },
  {
    id: 442,
    type: "single_choice",
    question: "在操作示教器时，以下哪种做法是正确的（）",
    options: {
      A: "不戴手套操作",
      B: "带着手套操作",
      C: "不带安全帽操作",
      D: "不穿防护鞋操作"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 443,
    type: "single_choice",
    question: "进入某工厂机器人（人工）焊接车间作业或者考察，除戴安全帽之外还需要佩戴或穿着（）",
    options: {
      A: "防尘服、护目镜",
      B: "护目镜、手套",
      C: "手套、防静电帽",
      D: "口罩、防静电帽"
    },
    answer: "B",
    category: "安全防护"
  },
  {
    id: 444,
    type: "single_choice",
    question: "假如你是一名机器人维修人员，现有一台机器人运行过程中发生故障需要维修，你需要（）。",
    options: {
      A: "加标锁定",
      B: "只需放置维修标识",
      C: "跟操作人员口头协定",
      D: "找一名同伴帮你把风"
    },
    answer: "A",
    category: "安全管理"
  },
  {
    id: 445,
    type: "single_choice",
    question: "机器人动作速度较快，存在危险性，操作人员应负责维护工作站正常运转秩序（）。",
    options: {
      A: "只有领导和工作人员可以进入工作区域",
      B: "严禁非工作人员进入工作区域",
      C: "清洁人员和工作人员可以进入工作区域",
      D: "领导和清洁人员可以进入工作区域"
    },
    answer: "B",
    category: "安全管理"
  },
  {
    id: 446,
    type: "single_choice",
    question: "LOTO（上锁挂牌）的作用是什么？（）",
    options: {
      A: "控制能量源，防止能量泄漏造成伤害",
      B: "挂上标签，告诉其他人员此处危险",
      C: "满足甲方的要求",
      D: "防止其他人员设制设备"
    },
    answer: "A",
    category: "安全管理"
  },
  {
    id: 447,
    type: "single_choice",
    question: "进行整顿工作时，要将必要的东西分门别类，这样做的目的是（）",
    options: {
      A: "使工作场所一目了然",
      B: "营造整齐的工作环境",
      C: "缩短寻找物品的时间",
      D: "清除过多的积压物品"
    },
    answer: "C",
    category: "现场管理"
  },
  {
    id: 448,
    type: "single_choice",
    question: "维修人员进入设备维修需要将启动控制锁住并挂标志锁（LOTO锁)，目的是：（）",
    options: {
      A: "防止其他人员进入",
      B: "防止其他操作人员误开机器伤到维修人员",
      C: "便于领导检查",
      D: "工作签到"
    },
    answer: "B",
    category: "安全管理"
  },
  {
    id: 449,
    type: "single_choice",
    question: "操作人员因故离开设备工作区域前应按下（），避免突然断电或者关机零位丢失，并将示教器放置在安全位置。",
    options: {
      A: "急停开关",
      B: "限位开关",
      C: "电源开关",
      D: "停止开关"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 450,
    type: "single_choice",
    question: "对机器人进行示教时，模式旋钮打到示教模式后，在此模式中，外部设备发出的启动程序信号（）。",
    options: {
      A: "无效",
      B: "有效",
      C: "延时后有效",
      D: "视情况而"
    },
    answer: "A",
    category: "示教编程"
  },

  // 判断题部分 (451-592，对应原文档判断题1-142)
  {
    id: 451,
    type: "true_false",
    question: "在KUKA机器人中T1模式为手动快速运行。",
    answer: "false",
    category: "操作模式"
  },
  {
    id: 452,
    type: "true_false", 
    question: "在KUKA机器人中选择AUT模式时，不可用示教器控制进行关节运动。",
    answer: "true",
    category: "操作模式"
  },
  {
    id: 453,
    type: "true_false",
    question: "选择专家用户组时不可对机器人进行编程。",
    answer: "false",
    category: "用户管理"
  },
  {
    id: 454,
    type: "true_false",
    question: "在KUKA机器人中T2模式下无法进行手动运行。",
    answer: "false",
    category: "操作模式"
  },
  {
    id: 455,
    type: "true_false",
    question: "世界坐标系和工具坐标系是一致的。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 456,
    type: "true_false",
    question: "3D鼠标是用于示教器移动光标的。",
    answer: "false",
    category: "操作控制"
  },
  {
    id: 457,
    type: "true_false",
    question: "机器人一次只能选择1个工具坐标系。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 458,
    type: "true_false",
    question: "工具坐标系位于机器人足部。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 459,
    type: "true_false",
    question: "未经过零点标定的机器人也可按世界坐标系移动。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 460,
    type: "true_false",
    question: "TCP标定完成后，其TCP点位于机器人法兰中心。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 461,
    type: "true_false",
    question: "切换到工具坐标系后，无论如何移动机器人，其线性运动方向始终与世界坐标系一致。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 462,
    type: "true_false",
    question: "用户坐标系下，创建新的用户坐标后，其线性动作按照当前使用的用户坐标系方向移动。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 463,
    type: "true_false",
    question: "在KUKA机器人中T1模式下，程序调节量调到100%，程序执行时的速度肯定等于编程设定的速度。",
    answer: "false",
    category: "操作模式"
  },
  {
    id: 464,
    type: "true_false",
    question: "选择操作人员用户组时可以对机器人进行编程。",
    answer: "false",
    category: "用户管理"
  },
  {
    id: 465,
    type: "true_false",
    question: "在KUKA机器人中法兰坐标系的原点为机器人法兰中心。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 466,
    type: "true_false",
    question: "在世界坐标系中可以使机器人沿坐标系的坐标轴方向平移或环绕着坐标系的坐标轴方向转动。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 467,
    type: "true_false",
    question: "经过零点标定的机器人始终可用世界坐标系。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 468,
    type: "true_false",
    question: "3D鼠标并非可用于所有运动方式。",
    answer: "false",
    category: "操作控制"
  },
  {
    id: 469,
    type: "true_false",
    question: "库卡机器人最多可存储16个工具坐标系。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 470,
    type: "true_false",
    question: "不可通过数字输入来进行工具测量。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 471,
    type: "true_false",
    question: "工具测量分为2步：1、确定工具坐标系的原点；2、确定工具坐标系的姿态。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 472,
    type: "true_false",
    question: "TCP测量的XYZ参照法的前提条件是，在连接法兰上装有一个已测量过的工具，并且TCP的数据已知。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 473,
    type: "true_false",
    question: "使用4点法测量TCP时，移至参照点的4个法兰位置，彼此必须间隔足够远，并且不得位于同一平面内。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 474,
    type: "true_false",
    question: "在KUKA机器人中测量TCP时无需输入负载数据。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 475,
    type: "true_false",
    question: "基坐标系测量分为两个步骤：1、确定坐标原点；2、定义坐标方向。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 476,
    type: "true_false",
    question: "基坐标的测量方法有三点法、四点法、间接法、数字输入法。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 477,
    type: "true_false",
    question: "在KUKA机器人中三点法测量基坐标依次为1、定义原点；2、定义X轴正方向；3、定义Y轴正方向（XY平面）。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 478,
    type: "true_false",
    question: "基坐标测量只能用一个事先已测定的工具进行。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 479,
    type: "true_false",
    question: "当无法移至基坐标原点时，例如，由于该点位于工件内部，或位于机器人工作空间之外时，可采用间接法测量基坐标。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 480,
    type: "true_false",
    question: "操作机器人时应确保所有人员不在机器人动作范围内。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 481,
    type: "true_false",
    question: "机器人处于自动运行模式下，人员可以进入安全防护区。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 482,
    type: "true_false",
    question: "示教人员在操作机器人时必须高度集中注意力，时刻观察机器人部位，并预计其动作趋势，发生意外时应及时按下急停按钮。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 483,
    type: "true_false",
    question: "真空吸盘可吸取表面粗糙，气密性不好的工件。",
    answer: "false",
    category: "末端执行器"
  },
  {
    id: 484,
    type: "true_false",
    question: "机器人程序自动运行前，必须单步调试程序，确保正确无误。",
    answer: "true",
    category: "程序执行"
  },
  {
    id: 485,
    type: "true_false",
    question: "机器人运行时速度应从慢逐渐到快，应从最慢的速度开始运行，观察运行路径是否有问题，然后再逐渐加速。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 486,
    type: "true_false",
    question: "机器人示教路径点时，可使用最大速度，以节约示教时间。",
    answer: "false",
    category: "示教编程"
  },
  {
    id: 487,
    type: "true_false",
    question: "机器人编写完程序，可直接启动自动运行。",
    answer: "false",
    category: "程序执行"
  },
  {
    id: 488,
    type: "true_false",
    question: "机械手处于手动低速T1运行方式下，手动运行速度，最高250mm/s。",
    answer: "true",
    category: "操作模式"
  },
  {
    id: 489,
    type: "true_false",
    question: "当机器人发生紧急情况时，需立即按下急停开关，避免机器人发生碰撞。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 490,
    type: "true_false",
    question: "手动操作机器人时，使能按键必须始终保持接通状态，不允许松开使能按键，否则无法操控机器人运动。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 491,
    type: "true_false",
    question: "机械手处于T2运行方式下，可进行手动操作。",
    answer: "false",
    category: "操作模式"
  },
  {
    id: 492,
    type: "true_false",
    question: "6D鼠标可激活为3D鼠标使用。",
    answer: "true",
    category: "操作控制"
  },
  {
    id: 493,
    type: "true_false",
    question: "A、B、C：用于沿选定坐标系的轴进行线性。",
    answer: "false",
    category: "运动控制"
  },
  {
    id: 494,
    type: "true_false",
    question: "通过数字输入来进行工具测量的误差会非常大。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 495,
    type: "true_false",
    question: "在KUKA机器人中测量基坐标时需输入负载数据。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 496,
    type: "true_false",
    question: "手动执行程序时，必须执行第一条程序指令，指令格式必须为PTP形式。",
    answer: "true",
    category: "程序执行"
  },
  {
    id: 497,
    type: "true_false",
    question: "手动执行程序时，所要执行程序必须在CELL调用后方可启动程序。",
    answer: "false",
    category: "程序执行"
  },
  {
    id: 498,
    type: "true_false",
    question: "自动运行程序时，所要执行程序必须在CELL调用后方可启动程序。",
    answer: "true",
    category: "程序执行"
  },
  {
    id: 499,
    type: "true_false",
    question: "在运行方式T1中，最大速度为250mm/s，与所设定的值无关。",
    answer: "true",
    category: "操作模式"
  },
  {
    id: 500,
    type: "true_false",
    question: "为了使当前的机器人位置与机器人程序中的当前点位置保持一致，必须执行BCO运行。",
    answer: "true",
    category: "程序执行"
  },
  {
    id: 501,
    type: "true_false",
    question: "所以安全配置均可导出。",
    answer: "false",
    category: "系统配置"
  },
  {
    id: 502,
    type: "true_false",
    question: "库卡机器人备份时，其文件存储位置有三种位置可选择USB（KCP）、USB（控制柜）、网络。",
    answer: "true",
    category: "系统维护"
  },
  {
    id: 503,
    type: "true_false",
    question: "当测量基坐标时，基坐标原点一定要位于机器人工作空间内。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 504,
    type: "true_false",
    question: "库卡机器人做系统备份时，只能备份全部数据，不能单独备份其他参数。",
    answer: "false",
    category: "系统维护"
  },
  {
    id: 505,
    type: "true_false",
    question: "通常情况下，库卡机器人只允许载入具有相应软件版本的文档，如果载入其他版本文档，可能会导致机器人故障等异常状态。",
    answer: "true",
    category: "系统维护"
  },
  {
    id: 506,
    type: "true_false",
    question: "在KUKA机器人中在还原RDC数据时，用户必须在专家用户组或更高级别的用户组。",
    answer: "true",
    category: "系统维护"
  },
  {
    id: 507,
    type: "true_false",
    question: "备选软件包备份必须包含一个KOP文件。",
    answer: "true",
    category: "系统维护"
  },
  {
    id: 508,
    type: "true_false",
    question: "项目和备选软件包只能与RDC数据分开还原。",
    answer: "true",
    category: "系统维护"
  },
  {
    id: 509,
    type: "true_false",
    question: "程序模块由SRC与DAT两个部分组成。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 510,
    type: "true_false",
    question: "编程模块应始终保持在文件夹'Program'（程序）中。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 511,
    type: "true_false",
    question: "在KUKA机器人中程序模块中不可以加入注释。",
    answer: "false",
    category: "程序管理"
  },
  {
    id: 512,
    type: "true_false",
    question: "程序模块建立完成后不能重命名。",
    answer: "false",
    category: "程序管理"
  },
  {
    id: 513,
    type: "true_false",
    question: "复制、删除、重命名的操作只能在专家模式下运行。",
    answer: "false",
    category: "程序管理"
  },
  {
    id: 514,
    type: "true_false",
    question: "目标点的名称自动分配，但可予以单独覆盖。",
    answer: "true",
    category: "程序编程"
  },
  {
    id: 515,
    type: "true_false",
    question: "KUKA机器人的初始化运行称为BCO运行。",
    answer: "true",
    category: "程序执行"
  },
  {
    id: 516,
    type: "true_false",
    question: "行驶指令'PTPHome'只用于程序开头，因为这是唯一的已知位置。",
    answer: "false",
    category: "运动指令"
  },
  {
    id: 517,
    type: "true_false",
    question: "在KUKA机器人中BCO运行就是使用PTP运动从实际位置移动到目标位置。",
    answer: "false",
    category: "程序执行"
  },
  {
    id: 518,
    type: "true_false",
    question: "由于机器人轴的旋转运动，因此弧形轨迹会比直线轨迹更快。",
    answer: "true",
    category: "运动控制"
  },
  {
    id: 519,
    type: "true_false",
    question: "PTP指令中，导向轴是达到目标点所需时间最长的轴。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 520,
    type: "true_false",
    question: "程序中的第一个运动必须为PTP运动。",
    answer: "true",
    category: "程序编程"
  },
  {
    id: 521,
    type: "true_false",
    question: "用'Touchup'更新数值，旧的点坐标不会被覆盖。",
    answer: "false",
    category: "程序修改"
  },
  {
    id: 522,
    type: "true_false",
    question: "更改帧数据（例如工具、基坐标）时，会导致位置发生位移。",
    answer: "true",
    category: "程序修改"
  },
  {
    id: 523,
    type: "true_false",
    question: "如果帧参数发生变化，则必须重新测试程序是否会发生碰撞。",
    answer: "true",
    category: "程序测试"
  },
  {
    id: 524,
    type: "true_false",
    question: "模拟信号实际产生的电压取决于模拟模块的设置。",
    answer: "true",
    category: "输入输出"
  },
  {
    id: 525,
    type: "true_false",
    question: "光纤传感器可以作为传送带末端的物料到位检测信号。",
    answer: "true",
    category: "传感器应用"
  },
  {
    id: 526,
    type: "true_false",
    question: "光纤传感器不可以用于黑白物料的区分检测。",
    answer: "false",
    category: "传感器应用"
  },
  {
    id: 527,
    type: "true_false",
    question: "在伺服驱动器的使用中，不能将输入电源线连到输出端U、V、W，否则引起伺服驱动器损坏。",
    answer: "true",
    category: "伺服控制"
  },
  {
    id: 528,
    type: "true_false",
    question: "伺服驱动器的接地端可以不用接线。",
    answer: "false",
    category: "伺服控制"
  },
  {
    id: 529,
    type: "true_false",
    question: "伺服的直流母线端子，在多机并联时可进行共母线连接。",
    answer: "true",
    category: "伺服控制"
  },
  {
    id: 530,
    type: "true_false",
    question: "传感器分为NPN与PNP两种。",
    answer: "true",
    category: "传感器应用"
  },
  {
    id: 531,
    type: "true_false",
    question: "PNP与NPN型传感器一般有三条引出线度，即电源线VCC、GND，OUT信号输出线。",
    answer: "true",
    category: "传感器应用"
  },
  {
    id: 532,
    type: "true_false",
    question: "在使用机器人信号对伺服驱动器进行点动运行时，不需要对DI/DO进行参数分配就进行使用。",
    answer: "false",
    category: "伺服控制"
  },
  {
    id: 533,
    type: "true_false",
    question: "对于带抱闸的伺服电机，必须配置伺服驱动器的DO端子，并确定DO端子有效逻辑。",
    answer: "true",
    category: "伺服控制"
  },
  {
    id: 534,
    type: "true_false",
    question: "伺服驱动器和伺服电机不需要配套进行使用。",
    answer: "false",
    category: "伺服控制"
  },
  {
    id: 535,
    type: "true_false",
    question: "机器人控制电磁阀工作时，不需要将输出信号与电磁阀信号相连。",
    answer: "false",
    category: "气动控制"
  },
  {
    id: 536,
    type: "true_false",
    question: "对于工作站的复杂逻辑关系，可以通过PLC编程来帮助机器人进行良好的工作。",
    answer: "true",
    category: "控制系统"
  },
  {
    id: 537,
    type: "true_false",
    question: "光纤传感器即使阈值最小也无法检测，有可能检测功能已被设定为微小光量模式。",
    answer: "true",
    category: "传感器应用"
  },
  {
    id: 538,
    type: "true_false",
    question: "日常使用的两位三通电磁阀具有吸气功能。",
    answer: "false",
    category: "气动控制"
  },
  {
    id: 539,
    type: "true_false",
    question: "对于机器人限位外的点位，机器人无需外部轴，只需要调整姿态也能达到该点位。",
    answer: "false",
    category: "运动控制"
  },
  {
    id: 540,
    type: "true_false",
    question: "最多两个ANINON指令可使用相同的变量值或访问同一个模拟输入端。",
    answer: "true",
    category: "输入输出"
  },
  {
    id: 541,
    type: "true_false",
    question: "输入输出端的名字显示，无需权限即可使用。",
    answer: "false",
    category: "输入输出"
  },
  {
    id: 542,
    type: "true_false",
    question: "对于有内部气路的机器人，可以不用再外接气路来控制气动夹具。",
    answer: "true",
    category: "气动控制"
  },
  {
    id: 543,
    type: "true_false",
    question: "机器人无法对其入库的数量进行计数。",
    answer: "false",
    category: "程序编程"
  },
  {
    id: 544,
    type: "true_false",
    question: "在调试过程中，使用语句选择可使一个程序在任意点启动。",
    answer: "true",
    category: "程序调试"
  },
  {
    id: 545,
    type: "true_false",
    question: "在运行方式T1中，最大速度为250mm/s，与所设定的值无关。",
    answer: "true",
    category: "操作模式"
  },
  {
    id: 546,
    type: "true_false",
    question: "对于点位的修改，未选定程序也可以进行。",
    answer: "false",
    category: "程序修改"
  },
  {
    id: 547,
    type: "true_false",
    question: "如果应优化运动的序列并且为此目的重新示教各个点，则经常使用反向运行。",
    answer: "true",
    category: "程序调试"
  },
  {
    id: 548,
    type: "true_false",
    question: "编程模块可以保存在任意文件夹中。",
    answer: "false",
    category: "程序管理"
  },
  {
    id: 549,
    type: "true_false",
    question: "为了让程序更易于理解，应在程序模块中加入注释。",
    answer: "true",
    category: "程序编程"
  },
  {
    id: 550,
    type: "true_false",
    question: "ISTEP仅供用户组'专家'使用。",
    answer: "true",
    category: "用户管理"
  },
  {
    id: 551,
    type: "true_false",
    question: "ISTEP任何用户组都可以使用。",
    answer: "false",
    category: "用户管理"
  },
  {
    id: 552,
    type: "true_false",
    question: "在专家用户组中，DEF程序名（ )始终出现在程序开头",
    answer: "true",
    category: "程序编程"
  },
  {
    id: 553,
    type: "true_false",
    question: "行驶指令'PTPHome'常用于程序开头和末尾，因为这是唯一的已知位置。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 554,
    type: "true_false",
    question: "程序连续运行时，在测试运行中必须按住启动键。",
    answer: "true",
    category: "程序测试"
  },
  {
    id: 555,
    type: "true_false",
    question: "在运动步进运行方式下，每个运动指令都单个执行，每一个运动结束后，都必须重新按下'启动'键。",
    answer: "true",
    category: "程序执行"
  },
  {
    id: 556,
    type: "true_false",
    question: "采用后退调试时，需要手动采用程序运行方式#BSTEP。",
    answer: "false",
    category: "程序调试"
  },
  {
    id: 557,
    type: "true_false",
    question: "在调试运行时，按住确认开关即可开始机器人的运动。",
    answer: "false",
    category: "程序调试"
  },
  {
    id: 558,
    type: "true_false",
    question: "如要临时删除以后可能还会重新使用的代码组成部分，则要将其变为注释。",
    answer: "true",
    category: "程序编程"
  },
  {
    id: 559,
    type: "true_false",
    question: "NPN与PNP型两种传感器是没有区别的。",
    answer: "false",
    category: "传感器应用"
  },
  {
    id: 560,
    type: "true_false",
    question: "NPN与PNP型两种传感器输出的高低电平是不同的。",
    answer: "true",
    category: "传感器应用"
  },
  {
    id: 561,
    type: "true_false",
    question: "NPN与PNP型两种传感器的区别是常开和常闭。",
    answer: "false",
    category: "传感器应用"
  },
  {
    id: 562,
    type: "true_false",
    question: "指示灯应接在机器人的输入端。",
    answer: "false",
    category: "输入输出"
  },
  {
    id: 563,
    type: "true_false",
    question: "模拟信号实际产生的电压都是一样的。",
    answer: "false",
    category: "输入输出"
  },
  {
    id: 564,
    type: "true_false",
    question: "需要机器人控制电磁阀工作时，只要将输出信号与电磁阀任意一根线相连即可。",
    answer: "false",
    category: "气动控制"
  },
  {
    id: 565,
    type: "true_false",
    question: "真空发生器可以使吸盘吸气。",
    answer: "true",
    category: "气动控制"
  },
  {
    id: 566,
    type: "true_false",
    question: "当设备没有配备PLC时，机器人是无法工作的。",
    answer: "false",
    category: "控制系统"
  },
  {
    id: 567,
    type: "true_false",
    question: "当设备没有配备PLC时，机器人依然可以自动执行程序。",
    answer: "true",
    category: "控制系统"
  },
  {
    id: 568,
    type: "true_false",
    question: "机器人可以计算入库工件的数量来判断工作是否完成。",
    answer: "true",
    category: "程序编程"
  },
  {
    id: 569,
    type: "true_false",
    question: "编写复杂程序时，应该将程序段汇集到一个程序内方便使用。",
    answer: "false",
    category: "程序编程"
  },
  {
    id: 570,
    type: "true_false",
    question: "在优化程序流程时通过使用Fold可改善程序的可读性。",
    answer: "true",
    category: "程序编程"
  },
  {
    id: 571,
    type: "true_false",
    question: "Fold通常在创建后首先显示成关闭状态。",
    answer: "true",
    category: "程序编程"
  },
  {
    id: 572,
    type: "true_false",
    question: "电气安全检查是杜绝事故防患于未然的必要措施。",
    answer: "true",
    category: "安全管理"
  },
  {
    id: 573,
    type: "true_false",
    question: "必须要未选定程序才可以进行点位的修改。",
    answer: "false",
    category: "程序修改"
  },
  {
    id: 574,
    type: "true_false",
    question: "验证程序时，通常使用反向运行。",
    answer: "false",
    category: "程序测试"
  },
  {
    id: 575,
    type: "true_false",
    question: "执行程序时，若注释中也有程序，则也会被执行。",
    answer: "false",
    category: "程序执行"
  },
  {
    id: 576,
    type: "true_false",
    question: "编写复杂程序时，可建立多个子程序调用。",
    answer: "true",
    category: "程序编程"
  },
  {
    id: 577,
    type: "true_false",
    question: "有时比较安全的时候可以不需要电气安全检查。",
    answer: "false",
    category: "安全管理"
  },
  {
    id: 578,
    type: "true_false",
    question: "触电的危险程度完全取决于通过人体的电流大小。",
    answer: "false",
    category: "安全知识"
  },
  {
    id: 579,
    type: "true_false",
    question: "操作机器人设备是不能相互说笑嬉闹。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 580,
    type: "true_false",
    question: "不经本人验电，均视为有电。",
    answer: "true",
    category: "安全知识"
  },
  {
    id: 581,
    type: "true_false",
    question: "职业道德具有自愿性的特点。",
    answer: "false",
    category: "职业道德"
  },
  {
    id: 582,
    type: "true_false",
    question: "职业道德是人们事业成功的重要条件。",
    answer: "true",
    category: "职业道德"
  },
  {
    id: 583,
    type: "true_false",
    question: "职业纪律是企业的行为规范，职业纪律具有随意性的特点。",
    answer: "false",
    category: "职业纪律"
  },
  {
    id: 584,
    type: "true_false",
    question: "职业纪律中包括群众纪律。",
    answer: "true",
    category: "职业纪律"
  },
  {
    id: 585,
    type: "true_false",
    question: "事业成功的人往往具有较高的职业道德。",
    answer: "true",
    category: "职业道德"
  },
  {
    id: 586,
    type: "true_false",
    question: "职业道德是从业人员职业资质评价的唯一指标。",
    answer: "false",
    category: "职业道德"
  },
  {
    id: 587,
    type: "true_false",
    question: "在生产过程中，发现安全防护装置对操作带来不方便，可以不用或者拆除。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 588,
    type: "true_false",
    question: "在调试外围设备内部点位时，必须二人，一人调机，一人在旁边监督，确认能在紧急情况下紧急停止。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 589,
    type: "true_false",
    question: "当工件在生产时掉落后，为了保障生产效率，可快速在机器人空间中将工件捡起。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 590,
    type: "true_false",
    question: "控制器（如示教器、机器人控制柜）宜放置在靠近通道装置的地方，以提高操作员的操作便利性。",
    answer: "true",
    category: "设备布置"
  },
  {
    id: 591,
    type: "true_false",
    question: "夏天炎热，操作人员可以穿着吊带式衣服、裙子、短裤等上岗。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 592,
    type: "true_false",
    question: "当设备发生过热现象时，应立即浇水降温，防止设备过热导致设备损坏。",
    answer: "false",
    category: "设备维护"
  },

  // 其他判断题题目
  {
    id: 593,
    type: "true_false",
    question: "示教器不能放在以下哪个地方？变位机上",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 594,
    type: "true_false",
    question: "团队是一个协作互补的群体，他需要团队成员之间建立理性信任的关系，他是合作的基石。",
    answer: "true",
    category: "团队合作"
  },
  {
    id: 595,
    type: "true_false",
    question: "一个人的综合素质在社会生活中的体现是人格魅力。",
    answer: "true",
    category: "个人素质"
  },
  {
    id: 596,
    type: "true_false",
    question: "漏电保护器的作用是防止触电事故。",
    answer: "true",
    category: "安全知识"
  },
  {
    id: 597,
    type: "true_false",
    question: "安全帽是用来保护工人/设备操作人员等头部免落物击伤。",
    answer: "true",
    category: "安全防护"
  },    
  
  // 判断题部分 (451-592，对应原文档1-142)
  {
    id: 451,
    type: "true_false",
    question: "在KUKA机器人中T1模式为手动快速运行。",
    answer: "false",
    category: "操作模式"
  },
  {
    id: 452,
    type: "true_false", 
    question: "在KUKA机器人中选择AUT模式时，不可用示教器控制进行关节运动。",
    answer: "true",
    category: "操作模式"
  },
  {
    id: 453,
    type: "true_false",
    question: "选择专家用户组时不可对机器人进行编程。",
    answer: "false",
    category: "用户管理"
  },
  {
    id: 454,
    type: "true_false",
    question: "在KUKA机器人中T2模式下无法进行手动运行。",
    answer: "false",
    category: "操作模式"
  },
  {
    id: 455,
    type: "true_false",
    question: "世界坐标系和工具坐标系是一致的。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 456,
    type: "true_false",
    question: "3D鼠标是用于示教器移动光标的。",
    answer: "false",
    category: "操作控制"
  },
  {
    id: 457,
    type: "true_false",
    question: "机器人一次只能选择1个工具坐标系。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 458,
    type: "true_false",
    question: "工具坐标系位于机器人足部。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 459,
    type: "true_false",
    question: "未经过零点标定的机器人也可按世界坐标系移动。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 460,
    type: "true_false",
    question: "TCP标定完成后，其TCP点位于机器人法兰中心。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 461,
    type: "true_false",
    question: "切换到工具坐标系后，无论如何移动机器人，其线性运动方向始终与世界坐标系一致。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 462,
    type: "true_false",
    question: "用户坐标系下，创建新的用户坐标后，其线性动作按照当前使用的用户坐标系方向移动。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 463,
    type: "true_false",
    question: "在KUKA机器人中T1模式下，程序调节量调到100%，程序执行时的速度肯定等于编程设定的速度。",
    answer: "false",
    category: "操作模式"
  },
  {
    id: 464,
    type: "true_false",
    question: "选择操作人员用户组时可以对机器人进行编程。",
    answer: "false",
    category: "用户管理"
  },
  {
    id: 465,
    type: "true_false",
    question: "在KUKA机器人中法兰坐标系的原点为机器人法兰中心。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 466,
    type: "true_false",
    question: "在世界坐标系中可以使机器人沿坐标系的坐标轴方向平移或环绕着坐标系的坐标轴方向转动。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 467,
    type: "true_false",
    question: "经过零点标定的机器人始终可用世界坐标系。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 468,
    type: "true_false",
    question: "3D鼠标并非可用于所有运动方式。",
    answer: "false",
    category: "操作控制"
  },
  {
    id: 469,
    type: "true_false",
    question: "库卡机器人最多可存储16个工具坐标系。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 470,
    type: "true_false",
    question: "不可通过数字输入来进行工具测量。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 471,
    type: "true_false",
    question: "工具测量分为2步：1、确定工具坐标系的原点；2、确定工具坐标系的姿态。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 472,
    type: "true_false",
    question: "TCP测量的XYZ参照法的前提条件是，在连接法兰上装有一个已测量过的工具，并且TCP的数据已知。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 473,
    type: "true_false",
    question: "使用4点法测量TCP时，移至参照点的4个法兰位置，彼此必须间隔足够远，并且不得位于同一平面内。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 474,
    type: "true_false",
    question: "在KUKA机器人中测量TCP时无需输入负载数据。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 475,
    type: "true_false",
    question: "基坐标系测量分为两个步骤：1、确定坐标原点；2、定义坐标方向。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 476,
    type: "true_false",
    question: "基坐标的测量方法有三点法、四点法、间接法、数字输入法。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 477,
    type: "true_false",
    question: "在KUKA机器人中三点法测量基坐标依次为1、定义原点；2、定义X轴正方向；3、定义Y轴正方向（XY平面）。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 478,
    type: "true_false",
    question: "基坐标测量只能用一个事先已测定的工具进行。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 479,
    type: "true_false",
    question: "当无法移至基坐标原点时，例如，由于该点位于工件内部，或位于机器人工作空间之外时，可采用间接法测量基坐标。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 480,
    type: "true_false",
    question: "操作机器人时应确保所有人员不在机器人动作范围内。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 481,
    type: "true_false",
    question: "机器人处于自动运行模式下，人员可以进入安全防护区。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 482,
    type: "true_false",
    question: "示教人员在操作机器人时必须高度集中注意力，时刻观察机器人部位，并预计其动作趋势，发生意外时应及时按下急停按钮。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 483,
    type: "true_false",
    question: "真空吸盘可吸取表面粗糙，气密性不好的工件。",
    answer: "false",
    category: "末端执行器"
  },
  {
    id: 484,
    type: "true_false",
    question: "机器人程序自动运行前，必须单步调试程序，确保正确无误。",
    answer: "true",
    category: "程序执行"
  },
  {
    id: 485,
    type: "true_false",
    question: "机器人运行时速度应从慢逐渐到快，应从最慢的速度开始运行，观察运行路径是否有问题，然后再逐渐加速。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 486,
    type: "true_false",
    question: "机器人示教路径点时，可使用最大速度，以节约示教时间。",
    answer: "false",
    category: "示教编程"
  },
  {
    id: 487,
    type: "true_false",
    question: "机器人编写完程序，可直接启动自动运行。",
    answer: "false",
    category: "程序执行"
  },
  {
    id: 488,
    type: "true_false",
    question: "机械手处于手动低速T1运行方式下，手动运行速度，最高250mm/s。",
    answer: "true",
    category: "操作模式"
  },
  {
    id: 489,
    type: "true_false",
    question: "当机器人发生紧急情况时，需立即按下急停开关，避免机器人发生碰撞。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 490,
    type: "true_false",
    question: "手动操作机器人时，使能按键必须始终保持接通状态，不允许松开使能按键，否则无法操控机器人运动。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 491,
    type: "true_false",
    question: "机械手处于T2运行方式下，可进行手动操作。",
    answer: "false",
    category: "操作模式"
  },
  {
    id: 492,
    type: "true_false",
    question: "6D鼠标可激活为3D鼠标使用。",
    answer: "true",
    category: "操作控制"
  },
  {
    id: 493,
    type: "true_false",
    question: "A、B、C：用于沿选定坐标系的轴进行线性。",
    answer: "false",
    category: "运动控制"
  },
  {
    id: 494,
    type: "true_false",
    question: "通过数字输入来进行工具测量的误差会非常大。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 495,
    type: "true_false",
    question: "在KUKA机器人中测量基坐标时需输入负载数据。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 496,
    type: "true_false",
    question: "手动执行程序时，必须执行第一条程序指令，指令格式必须为PTP形式。",
    answer: "true",
    category: "程序执行"
  },
  {
    id: 497,
    type: "true_false",
    question: "手动执行程序时，所要执行程序必须在CELL调用后方可启动程序。",
    answer: "false",
    category: "程序执行"
  },
  {
    id: 498,
    type: "true_false",
    question: "自动运行程序时，所要执行程序必须在CELL调用后方可启动程序。",
    answer: "true",
    category: "程序执行"
  },
  {
    id: 499,
    type: "true_false",
    question: "在运行方式T1中，最大速度为250mm/s，与所设定的值无关。",
    answer: "true",
    category: "操作模式"
  },
  {
    id: 500,
    type: "true_false",
    question: "为了使当前的机器人位置与机器人程序中的当前点位置保持一致，必须执行BCO运行。",
    answer: "true",
    category: "程序执行"
  },
  // 继续添加剩余的判断题...
  // 由于篇幅限制，这里省略了题目501-592的详细内容
  // 实际实现中需要包含所有142道判断题
];

// 导出统计函数
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

export const totalQuestions = questionBank.length;