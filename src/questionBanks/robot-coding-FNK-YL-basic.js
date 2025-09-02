// 工业机器人应用编程职业技能等级理论知识考核题库 FNK-YL 初级
export const questionBank = [
  // 单选题
  {
    id: 1,
    type: "single_choice",
    question: "机器人在点动示教编程时应选择哪个运行模式（）。",
    options: {
      A: "手动限速模式",
      B: "手动全速模式",
      C: "自动模式",
      D: "再现模式"
    },
    answer: "A",
    category: "机器人操作基础"
  },
  {
    id: 2,
    type: "single_choice",
    question: "机器人示教器有效开关置于（）时点动机器人有效。",
    options: {
      A: "Yes",
      B: "No",
      C: "OFF",
      D: "ON"
    },
    answer: "D",
    category: "机器人操作基础"
  },
  {
    id: 3,
    type: "single_choice",
    question: "示教器有效开关置于OFF状态时（）有效。",
    options: {
      A: "点动",
      B: "程序创建",
      C: "速度变更",
      D: "测试执行"
    },
    answer: "C",
    category: "机器人操作基础"
  },
  {
    id: 4,
    type: "single_choice",
    question: "机器人与外部设备联机运行时选择（）运行模式。",
    options: {
      A: "手动限速模式",
      B: "手动全速模式",
      C: "自动模式",
      D: "再现模式"
    },
    answer: "C",
    category: "机器人操作基础"
  },
  {
    id: 5,
    type: "single_choice",
    question: "示教器shift键可用于（）。",
    options: {
      A: "点动机器人",
      B: "示教位置",
      C: "执行程序",
      D: "以上都是"
    },
    answer: "D",
    category: "机器人操作基础"
  },
  {
    id: 6,
    type: "single_choice",
    question: "工业机器人的编程方式有（）。",
    options: {
      A: "示教和离线编程",
      B: "示教和手动编程",
      C: "手动和离线编程",
      D: "示教和电脑编程"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 7,
    type: "single_choice",
    question: "TP上用手动从前往后启动程序的组合按键是？使用该组合按键能否连续运行程序？（）",
    options: {
      A: "SHFIT+FWD可以",
      B: "SHFIT+FWD不可以",
      C: "SHFIT+BWD可以",
      D: "SHFIT+BWD不可以"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 8,
    type: "single_choice",
    question: "机器人自动运行时，控制柜钥匙开关要打到哪一档？（）",
    options: {
      A: "T1",
      B: "T2",
      C: "AUTO",
      D: "ON"
    },
    answer: "C",
    category: "机器人操作基础"
  },
  {
    id: 9,
    type: "single_choice",
    question: "机器人手动低速运行时，控制柜钥匙开关要打到哪一档？（）",
    options: {
      A: "T1",
      B: "T2",
      C: "AUTO",
      D: "ON"
    },
    answer: "A",
    category: "机器人操作基础"
  },
  {
    id: 10,
    type: "single_choice",
    question: "TP上用于在单步执行和连续执行之间切换的按钮是（）",
    options: {
      A: "HOLD",
      B: "STEP",
      C: "PREV",
      D: "RESET"
    },
    answer: "B",
    category: "示教编程"
  },
  {
    id: 11,
    type: "single_choice",
    question: "TP上想要显示多个窗口，使用的组合按键是（）。",
    options: {
      A: "SHIFT+PREV",
      B: "SHIFT+DISP",
      C: "SHIFT+STEP",
      D: "SHIFT+ITEM"
    },
    answer: "B",
    category: "示教编程"
  },
  {
    id: 12,
    type: "single_choice",
    question: "示教器上使能按钮分为几档？（）",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "机器人操作基础"
  },
  {
    id: 13,
    type: "single_choice",
    question: "发那科机器人系统当前速度为5%时，按下倍率十键时以（）刻度切换。",
    options: {
      A: "4%",
      B: "5%",
      C: "1%",
      D: "10%"
    },
    answer: "B",
    category: "机器人操作基础"
  },
  {
    id: 14,
    type: "single_choice",
    question: "点动示教机器人接近工件时（）的速度倍率较合适。",
    options: {
      A: "4%",
      B: "10%",
      C: "15%",
      D: "20%"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 15,
    type: "single_choice",
    question: "手动操作示教板的速度倍率原则上不超过（）。",
    options: {
      A: "4%",
      B: "30%",
      C: "50%",
      D: "70%"
    },
    answer: "B",
    category: "示教编程"
  },
  {
    id: 16,
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
    id: 17,
    type: "single_choice",
    question: "点动示教机器人离开工件且途中没有阻挡物，速度倍率设置（）更为合适。",
    options: {
      A: "4%",
      B: "30%",
      C: "15%",
      D: "70%"
    },
    answer: "B",
    category: "示教编程"
  },
  {
    id: 18,
    type: "single_choice",
    question: "下列哪个速度是编写程序时直线接近工件的合理速度（）。",
    options: {
      A: "500mm/s",
      B: "1000cm/min",
      C: "200mm/s",
      D: "500cm/min"
    },
    answer: "C",
    category: "示教编程"
  },
  {
    id: 19,
    type: "single_choice",
    question: "下列哪个速度是编写程序时直线运动速度（）。",
    options: {
      A: "30%",
      B: "500mm/min",
      C: "70%",
      D: "500mm/s"
    },
    answer: "D",
    category: "示教编程"
  },
  {
    id: 20,
    type: "single_choice",
    question: "发那科机器人示教器出厂时的默认语言一般为（）。",
    options: {
      A: "英语",
      B: "日语",
      C: "汉语",
      D: "法语"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 21,
    type: "single_choice",
    question: "发那科机器人示教器包含哪种语言（）。",
    options: {
      A: "英语",
      B: "韩语",
      C: "法语",
      D: "德语"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 22,
    type: "single_choice",
    question: "发那科机器人设置时间在哪个选项中（）。",
    options: {
      A: "设置",
      B: "状态",
      C: "系统",
      D: "实用工具"
    },
    answer: "C",
    category: "系统设置"
  },
  {
    id: 23,
    type: "single_choice",
    question: "发那科机器人在哪种情况下需要重新设置语言（）。",
    options: {
      A: "机器人电池丢失",
      B: "机器人发生报警",
      C: "机器人断电重启",
      D: "机器人出厂时"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 24,
    type: "single_choice",
    question: "发那科机器人要打开设置菜单需要首先按下（）键。",
    options: {
      A: "DISP",
      B: "MENU",
      C: "FCTN",
      D: "SHIFT"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 25,
    type: "single_choice",
    question: "发那科机器人要切换坐标系只要按下（）键。",
    options: {
      A: "HOLD",
      B: "STEP",
      C: "BWD",
      D: "COORD"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 26,
    type: "single_choice",
    question: "单轴操作机器人时应选择（）。",
    options: {
      A: "直角坐标系",
      B: "用户坐标系",
      C: "工具坐标系",
      D: "关节坐标系"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 27,
    type: "single_choice",
    question: "使机器人以TCP点为中心点做旋转动作应选择（）。",
    options: {
      A: "直角坐标系",
      B: "用户坐标系",
      C: "工具坐标系",
      D: "关节坐标系"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 28,
    type: "single_choice",
    question: "使机器人工具状态不变做直线运动不应该选择（）。",
    options: {
      A: "直角坐标系",
      B: "用户坐标系",
      C: "工具坐标系",
      D: "关节坐标系"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 29,
    type: "single_choice",
    question: "工具装在斜面工具台上，操作机器人抓取工具时最好选择（）。",
    options: {
      A: "直角坐标系",
      B: "用户坐标系",
      C: "工具坐标系",
      D: "关节坐标系"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 30,
    type: "single_choice",
    question: "在工具台上抓取工具时最好选择（）。",
    options: {
      A: "直角坐标系",
      B: "用户坐标系",
      C: "工具坐标系",
      D: "关节坐标系"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 31,
    type: "single_choice",
    question: "发那科机器人工具坐标系最大可以设定多少个（）。",
    options: {
      A: "10",
      B: "21",
      C: "25",
      D: "29"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 32,
    type: "single_choice",
    question: "发那科机器人设定工具坐标有几种方法（）。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 33,
    type: "single_choice",
    question: "发那科机器人示教器中TOOL1按键的作用是（）。",
    options: {
      A: "调用工具1",
      B: "显示工具1画面",
      C: "打开画面1",
      D: "抓取工具1"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 34,
    type: "single_choice",
    question: "发那科机器人示教器中TOOL2按键的作用是（）。",
    options: {
      A: "调用工具2",
      B: "显示工具2画面",
      C: "打开画面2",
      D: "抓取工具2"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 35,
    type: "single_choice",
    question: "编程前是否需要先定义和选择好坐标系？如需要，则需要确定的是哪些坐标内容？",
    options: {
      A: "是工具坐标系号",
      B: "是用户坐标系号",
      C: "是工具坐标系号和用户坐标系号",
      D: "否"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 36,
    type: "single_choice",
    question: "手动操作机器人时，使用关节坐标时TP显示为（）。",
    options: {
      A: "TOOL",
      B: "WORLD",
      C: "JOINT",
      D: "USER"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 37,
    type: "single_choice",
    question: "手动操作机器人时，使用工具坐标时TP显示为（）。",
    options: {
      A: "TOOL",
      B: "WORLD",
      C: "JOINT",
      D: "USER"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 38,
    type: "single_choice",
    question: "手动操作机器人时，使用用户坐标时TP显示为（）。",
    options: {
      A: "TOOL",
      B: "WORLD",
      C: "JOINT",
      D: "USER"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 39,
    type: "single_choice",
    question: "手动操作机器人时，使用世界坐标时TP显示为（）。",
    options: {
      A: "TOOL",
      B: "WORLD",
      C: "JOINT",
      D: "USER"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 40,
    type: "single_choice",
    question: "机器人做重定位动作时应选择（）。",
    options: {
      A: "直角坐标系",
      B: "用户坐标系",
      C: "工具坐标系",
      D: "关节坐标系"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 41,
    type: "single_choice",
    question: "机器人重定位动作是（）的方法。",
    options: {
      A: "直角坐标系",
      B: "用户坐标系",
      C: "工具坐标系",
      D: "关节坐标系"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 42,
    type: "single_choice",
    question: "确定工具中心点在直角坐标系中的位置的值是？确定工具绕直角坐标系三轴的角度的值是？（）。",
    options: {
      A: "XYZ WPR",
      B: "WPR XYZ",
      C: "ABC XYZ",
      D: "ABC WPR"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 43,
    type: "single_choice",
    question: "示教器上点击COORD选择关节坐标系可切换成（）坐标系。",
    options: {
      A: "关节",
      B: "世界",
      C: "用户",
      D: "工具"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 44,
    type: "single_choice",
    question: "示教器上点击COORD选择世界坐标系可切换成（）坐标系。",
    options: {
      A: "关节",
      B: "世界",
      C: "用户",
      D: "工具"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 45,
    type: "single_choice",
    question: "示教器上点击COORD选择用户坐标系可切换成（）坐标系。",
    options: {
      A: "关节",
      B: "世界",
      C: "用户",
      D: "工具"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 46,
    type: "single_choice",
    question: "示教器上点击COORD选择工具坐标系可切换成（）坐标系。",
    options: {
      A: "关节",
      B: "世界",
      C: "用户",
      D: "工具"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 47,
    type: "single_choice",
    question: "发那科机器人中不属于设定工具坐标的方法是（）。",
    options: {
      A: "3点法",
      B: "6点法",
      C: "2点+Z值示教法",
      D: "5点法"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 48,
    type: "single_choice",
    question: "发那科机器人工具坐标系画面上一般显示几个工具坐标系（）。",
    options: {
      A: "10",
      B: "21",
      C: "25",
      D: "29"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 49,
    type: "single_choice",
    question: "控制机器人改变工具姿态而不改变尖端点位置是用来检验（）的方法。",
    options: {
      A: "工具坐标系",
      B: "用户坐标系",
      C: "关节坐标系",
      D: "直角坐标系"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 50,
    type: "single_choice",
    question: "对于搬运夹具来说一般选择（）来设定工具坐标。",
    options: {
      A: "3点法",
      B: "6点法",
      C: "2点+Z值示教法",
      D: "直接示教法"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 51,
    type: "single_choice",
    question: "对于焊接工具焊枪来说一般选择（）来设定工具坐标。",
    options: {
      A: "3点法",
      B: "6点法",
      C: "2点+Z值示教法",
      D: "直接示教法"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 52,
    type: "single_choice",
    question: "发那科机器人程序中的offset偏移指令功能参考（）进行偏移。",
    options: {
      A: "工具坐标系",
      B: "用户坐标系",
      C: "关节坐标系",
      D: "直角坐标系"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 53,
    type: "single_choice",
    question: "发那科机器人对于3点法描述正确的是（）。",
    options: {
      A: "使参考点1.2.3.以不同姿态指向3个不同的点",
      B: "使参考点1.2.3.以不同姿态指1个点",
      C: "使参考点1.2.3.以相同姿态指向3个不同的点",
      D: "使参考点1.2.3.以相同姿态指向1个点"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 54,
    type: "single_choice",
    question: "发那科机器人系统6点（XZ)示教法设定工具坐标不需要哪个点（）。",
    options: {
      A: "参考点1",
      B: "X轴方向",
      C: "Y轴方向",
      D: "坐标原点"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 55,
    type: "single_choice",
    question: "发那科机器人系统6点（XY)示教法设定工具坐标不需要哪个点（）。",
    options: {
      A: "Z轴方向",
      B: "X轴方向",
      C: "Y轴方向",
      D: "坐标原点"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 56,
    type: "single_choice",
    question: "三点法设定工具坐标不需要那个点（）。",
    options: {
      A: "参考点1",
      B: "参考点2",
      C: "参考点3",
      D: "坐标原点"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 57,
    type: "single_choice",
    question: "发那科机器人系统2点+Z值示教法适于哪种机器人()。",
    options: {
      A: "六轴机器人",
      B: "蜘蛛型机器人",
      C: "四轴机器人",
      D: "四轴并联机器人"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 58,
    type: "single_choice",
    question: "工具坐标标定最少需要几个点（）。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "6"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 59,
    type: "single_choice",
    question: "未定义工具坐标系时将由（）来替代。",
    options: {
      A: "直角坐标系",
      B: "用户坐标系",
      C: "机械接口坐标系",
      D: "工具坐标系"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 60,
    type: "single_choice",
    question: "标定工具坐标时，工具尖端要（）标定尖端。",
    options: {
      A: "尽量靠近",
      B: "围绕",
      C: "靠近",
      D: "压上"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 61,
    type: "single_choice",
    question: "发那科工具坐标系是基于（）而设定的。",
    options: {
      A: "直角坐标系",
      B: "用户坐标系",
      C: "机械接口坐标系",
      D: "工具坐标系"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 62,
    type: "single_choice",
    question: "工业机器人工具坐标系是（）。",
    options: {
      A: "被固定在工件上的坐标系",
      B: "被固定在工具上的坐标系",
      C: "被固定在机器人法兰盘上的坐标系",
      D: "被固定在机器人底座上的坐标系"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 63,
    type: "single_choice",
    question: "工具坐标系通常以（）为原点。",
    options: {
      A: "TCP",
      B: "工具尖端",
      C: "工具尾部",
      D: "法兰盘中心"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 64,
    type: "single_choice",
    question: "工业机器人TCP点是（）。",
    options: {
      A: "工具重心点",
      B: "工具中心点",
      C: "工具尖端",
      D: "工具尾部"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 65,
    type: "single_choice",
    question: "要将设定好的工具坐标作为当前有效的工具坐标系需要（）。",
    options: {
      A: "点击设定号码并输入坐标系号",
      B: "输入坐标序号",
      C: "选择坐标系号",
      D: "设定坐标系"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 66,
    type: "single_choice",
    question: "下列属于工具坐标系创建的常用方法是（）。",
    options: {
      A: "三点法",
      B: "六点法",
      C: "直接输入法",
      D: "以上都是"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 67,
    type: "single_choice",
    question: "启用设定的用户坐标系须按（)组合按键，弹出坐标选择界面，输入对所要使用的用户坐标系号。",
    options: {
      A: "SHIFT+PREV",
      B: "SHIFT+COORD",
      C: "SHIFT+STEP",
      D: "SHIFT+ITEM"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 68,
    type: "single_choice",
    question: "启用设定的工具坐标系须按（)组合按键，弹出坐标选择界面，输入对所要使用的工具坐标系号。",
    options: {
      A: "SHIFT+PREV",
      B: "SHIFT+COORD",
      C: "SHIFT+STEP",
      D: "SHIFT+ITEM"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 69,
    type: "single_choice",
    question: "在工具坐标系的设定中，只改变TCP点，不改变的方向的方法是（）。",
    options: {
      A: "三点法",
      B: "六点法",
      C: "直接输入法",
      D: "以上都是"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 70,
    type: "single_choice",
    question: "在工具坐标系的设定中，只改变TCP点，又改变的方向的方法是（）。",
    options: {
      A: "六点法",
      B: "直接输入法",
      C: "AB都是",
      D: "AB都不是"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 71,
    type: "single_choice",
    question: "下列哪种方法不是用来设定工具坐标系的（）。",
    options: {
      A: "三点法",
      B: "四点法",
      C: "直接输入法",
      D: "六点法"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 72,
    type: "single_choice",
    question: "不改变系统变量的情况下用户坐标系可以设定（）个。",
    options: {
      A: "8",
      B: "9",
      C: "10",
      D: "11"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 73,
    type: "single_choice",
    question: "发那科机器人系统用户坐标系最多可以设定多少个（）。",
    options: {
      A: "9",
      B: "20",
      C: "51",
      D: "61"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 74,
    type: "single_choice",
    question: "发那科机器人设定用户坐标系有几种方法（）。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 75,
    type: "single_choice",
    question: "用户坐标系是用户对于（）进行定义的直角坐标系。",
    options: {
      A: "作业空间",
      B: "工具",
      C: "工件底座",
      D: "工件中心"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 76,
    type: "single_choice",
    question: "用户坐标尚未定义时将被（）所替代。",
    options: {
      A: "直角坐标系",
      B: "用户坐标系",
      C: "世界坐标系",
      D: "工具坐标系"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 77,
    type: "single_choice",
    question: "用户坐标系是基于（）而设定的。",
    options: {
      A: "直角坐标系",
      B: "用户坐标系",
      C: "世界坐标系",
      D: "工具坐标系"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 78,
    type: "single_choice",
    question: "下列哪种方法不属于设定用户坐标系的方法（）。",
    options: {
      A: "三点法",
      B: "六点法",
      C: "直接示教法",
      D: "四点法"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 79,
    type: "single_choice",
    question: "下列（）是属于设定用户坐标系的方法。",
    options: {
      A: "六点法",
      B: "2点+Z值示教法",
      C: "四点法",
      D: "五点法"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 80,
    type: "single_choice",
    question: "下列哪个点不属于三点法示教用户坐标系的点（）。",
    options: {
      A: "坐标系原点",
      B: "X轴方向的点",
      C: "Z轴方向上的点",
      D: "XY平面上的点"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 81,
    type: "single_choice",
    question: "下列哪个点不属于四点法示教用户坐标系的点（）。",
    options: {
      A: "坐标系原点",
      B: "X轴始点",
      C: "Z轴方向上的点",
      D: "XY平面上的点"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 82,
    type: "single_choice",
    question: "用户坐标标定最少需要几个点（）。",
    options: {
      A: "2点",
      B: "3点",
      C: "4点",
      D: "6点"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 83,
    type: "single_choice",
    question: "使用用户坐标系沿工件表面往X轴方向和Y轴方向移动看运动轨迹是否平行于工件表面是检验（）的方法。",
    options: {
      A: "直角坐标系",
      B: "用户坐标系",
      C: "世界坐标系",
      D: "工具坐标系"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 84,
    type: "single_choice",
    question: "用户坐标系设定时（）不可以作为坐标原点。",
    options: {
      A: "作业空间任意一点",
      B: "工件边角",
      C: "工件中心",
      D: "TCP点"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 85,
    type: "single_choice",
    question: "发那科机器人系统中用户坐标系号为0时表示（）。",
    options: {
      A: "默认为世界坐标",
      B: "默认为工具坐标",
      C: "默认为直角坐标",
      D: "默认为机械接口坐标"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 86,
    type: "single_choice",
    question: "发那科机器人系统中直接示教法设定用户坐标系需要输入多少点（）。",
    options: {
      A: "3点",
      B: "4点",
      C: "5点",
      D: "6点"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 87,
    type: "single_choice",
    question: "用户坐标可以在那些面上进行设定（）。",
    options: {
      A: "平面",
      B: "曲面",
      C: "复杂曲面",
      D: "以上都可以"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 88,
    type: "single_choice",
    question: "机器人的当前位置表达了（）相对于（）的对应关系。",
    options: {
      A: "关节坐标系、世界坐标系",
      B: "世界坐标系、用户坐标系",
      C: "世界坐标系、工具坐标系",
      D: "工具坐标系、用户坐标系"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 89,
    type: "single_choice",
    question: "下列哪种方法不是用来设定用户坐标系的（）。",
    options: {
      A: "三点法",
      B: "四点法",
      C: "直接输入法",
      D: "六点法"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 90,
    type: "single_choice",
    question: "下列属于用户坐标系创建的常用方法是（）。",
    options: {
      A: "三点法",
      B: "四点法",
      C: "直接输入法",
      D: "以上都是"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 91,
    type: "single_choice",
    question: "在FANUC机器人中用来描述机器人每一个独立关节运动参考坐标系是（）。",
    options: {
      A: "世界坐标系",
      B: "关节坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 92,
    type: "single_choice",
    question: "通常用来定义机器人相对于其他物体的运动、与机器人通信的其他部件以及运动部件的参考坐标系是（）。",
    options: {
      A: "世界坐标系",
      B: "关节坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "C",
    category: "坐标系设置"
  },
  {
    id: 93,
    type: "single_choice",
    question: "机器人可能需要在工作台上多个工件位置处进行工作，这时需要定义的是（）。",
    options: {
      A: "世界坐标系",
      B: "关节坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 94,
    type: "single_choice",
    question: "标定工件坐标系需要移动机器人到工具坐标系（）轴正方向上一个点。",
    options: {
      A: "原点",
      B: "X轴",
      C: "Y轴",
      D: "原点以及X/Y"
    },
    answer: "D",
    category: "坐标系设置"
  },
  {
    id: 95,
    type: "single_choice",
    question: "示教编程器上安全开关握紧为ON，松开为OFF状态，作为进而追加的功能，当握紧力过大时，为（）状态。",
    options: {
      A: "不变",
      B: "ON",
      C: "OFF",
      D: "以上都不是"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 96,
    type: "single_choice",
    question: "手动状态是，用示教器点动发那科机器人时不需要用到哪个按键（）。",
    options: {
      A: "DISP",
      B: "SHIFT",
      C: "RESET",
      D: "安全开关"
    },
    answer: "A",
    category: "机器人操作基础"
  },
  {
    id: 97,
    type: "single_choice",
    question: "启动机器人时说法不正确的是（）。",
    options: {
      A: "松开急停",
      B: "看是否有人站在机器人工作范围内",
      C: "直接启动",
      D: "调节速度"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 98,
    type: "single_choice",
    question: "手动状态时发生紧急情况时最快停止机器人的方法是（）。",
    options: {
      A: "释放安全开关",
      B: "调节速度",
      C: "切断电源",
      D: "按下控制柜急停按钮"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 99,
    type: "single_choice",
    question: "发那科机器人系统中运行机器人程序时应（）。",
    options: {
      A: "松开急停",
      B: "清除报警",
      C: "调节速度",
      D: "以上都是"
    },
    answer: "D",
    category: "机器人操作基础"
  },
  {
    id: 100,
    type: "single_choice",
    question: "当示教器有效开关被关闭时，下列不受影响的操作是",
    options: {
      A: "创建程序",
      B: "切换坐标系",
      C: "点动机器人",
      D: "手动运行"
    },
    answer: "B",
    category: "机器人操作基础"
  },
  {
    id: 101,
    type: "single_choice",
    question: "示教器背部的DEADMAN按键相当于使能开关，如何操作才能手动点动机器人（）。",
    options: {
      A: "两个同时适度按下",
      B: "两个同时用力按下",
      C: "任意一个适度按下",
      D: "任意一个用力按下"
    },
    answer: "C",
    category: "机器人操作基础"
  },
  {
    id: 102,
    type: "single_choice",
    question: "按下示教器急停按钮时（）。",
    options: {
      A: "停止机器人",
      B: "断开机器人电源",
      C: "断开控制柜电源",
      D: "断开总电源"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 103,
    type: "single_choice",
    question: "按下控制柜急停按钮时（）。",
    options: {
      A: "断开机器人和示教器电源",
      B: "断开总电源",
      C: "断开机器人电源",
      D: "断开控制柜电源"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 104,
    type: "single_choice",
    question: "机器人发生碰撞时，我们应该（）。",
    options: {
      A: "断开电源",
      B: "用手把机器人复位",
      C: "用示教器操作机器人往反方向动作",
      D: "拆除工件"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 105,
    type: "single_choice",
    question: "在操作机器人时，当突发意外情况时，怎样操作急停按钮（）。",
    options: {
      A: "直接按下",
      B: "直接拔起",
      C: "顺时针旋转按下",
      D: "顺时针旋转拔起"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 106,
    type: "single_choice",
    question: "当机器人发生紧急情况时按钮被按下，机器人立即停止运行（）。",
    options: {
      A: "启动",
      B: "停止",
      C: "复位",
      D: "急停"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 107,
    type: "single_choice",
    question: "工业机器人的（）直接与工件相接触。",
    options: {
      A: "手指",
      B: "手腕",
      C: "关节",
      D: "手臂"
    },
    answer: "A",
    category: "机器人操作基础"
  },
  {
    id: 108,
    type: "single_choice",
    question: "工业机器人（）适合夹持圆柱形工件。",
    options: {
      A: "V型手指",
      B: "平面指",
      C: "尖指",
      D: "特型指"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 109,
    type: "single_choice",
    question: "工业机器人（）适合夹持方形工件。",
    options: {
      A: "V型手指",
      B: "平面指",
      C: "尖指",
      D: "特型指"
    },
    answer: "B",
    category: "设备维护"
  },
  {
    id: 110,
    type: "single_choice",
    question: "小型六边形工件适合用（）来抓取。",
    options: {
      A: "平面指",
      B: "V型手指",
      C: "吸盘",
      D: "焊枪"
    },
    answer: "C",
    category: "设备维护"
  },
  {
    id: 111,
    type: "single_choice",
    question: "在YL-18中，电机装配模块用来夹取电机转子的夹具是（）。",
    options: {
      A: "电机转子手爪工具",
      B: "电机端盖手爪工具",
      C: "电机外壳手爪工具",
      D: "吸盘夹具"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 112,
    type: "single_choice",
    question: "在YL-18中，电机装配模块用来夹取电机端盖的夹具是（）。",
    options: {
      A: "电机转子手爪工具",
      B: "电机端盖手爪工具",
      C: "电机外壳手爪工具",
      D: "吸盘夹具"
    },
    answer: "B",
    category: "设备维护"
  },
  {
    id: 113,
    type: "single_choice",
    question: "在YL-18中，用来码垛的夹具是（）。",
    options: {
      A: "电机转子手爪工具",
      B: "电机端盖手爪工具",
      C: "电机外壳手爪工具",
      D: "吸盘夹具"
    },
    answer: "D",
    category: "设备维护"
  },
  {
    id: 114,
    type: "single_choice",
    question: "机器人单轴操作时应选择（）。",
    options: {
      A: "关节坐标系",
      B: "直角坐标系",
      C: "世界坐标系",
      D: "用户坐标系"
    },
    answer: "A",
    category: "坐标系设置"
  },
  {
    id: 115,
    type: "single_choice",
    question: "机器人线性动作时应选择（）。",
    options: {
      A: "关节坐标系",
      B: "直角坐标系",
      C: "世界坐标系",
      D: "用户坐标系"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 116,
    type: "single_choice",
    question: "机器人重定位动作时应选择（）。",
    options: {
      A: "关节坐标系",
      B: "直角坐标系",
      C: "世界坐标系",
      D: "用户坐标系"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 117,
    type: "single_choice",
    question: "机器人直线抓取工件示教程序时最好使用（）。",
    options: {
      A: "关节坐标系",
      B: "直角坐标系",
      C: "世界坐标系",
      D: "用户坐标系"
    },
    answer: "B",
    category: "坐标系设置"
  },
  {
    id: 118,
    type: "single_choice",
    question: "如果要实现工具绕着TCP进行线性旋转，应该使用哪种类型的指令",
    options: {
      A: "关节动作指令",
      B: "直线动作指令",
      C: "圆弧C动作指令",
      D: "圆弧A动作指令"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 119,
    type: "single_choice",
    question: "机器人同时能执行多少个主程序（）。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "多个"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 120,
    type: "single_choice",
    question: "发那科机器人程序文件的格式是（）。",
    options: {
      A: "(*.TP)",
      B: "(*.DF)",
      C: "(*.SV)",
      D: "(*.IO)"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 121,
    type: "single_choice",
    question: "发那科机器人中新建程序时，程序名称必须以（）开头。",
    options: {
      A: "汉字",
      B: "数字",
      C: "符号",
      D: "字母"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 122,
    type: "single_choice",
    question: "发那科机器人系统中选择新程序时会（）。",
    options: {
      A: "结束当前执行中的程序",
      B: "新建程序",
      C: "删除当前程序",
      D: "复制当前程序"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 123,
    type: "single_choice",
    question: "发那科机器人程序名称中不可以使用（）。",
    options: {
      A: "*",
      B: "数字",
      C: "字母",
      D: "符号"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 124,
    type: "single_choice",
    question: "发那科机器人系统中哪个程序名不能使用（）。",
    options: {
      A: "SXL1",
      B: "SCX1",
      C: "DXL1",
      D: "COM1"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 125,
    type: "single_choice",
    question: "对于程序名说法正确的是（）。",
    options: {
      A: "可以随便取",
      B: "可以有10个字符以内",
      C: "必须以能够弄清目的和功能的方式命名",
      D: "可以使用汉字"
    },
    answer: "C",
    category: "程序编辑"
  },
   {
    id: 126,
    type: "single_choice",
    question: "发那科机器人系统中程序名可以有多少个字符（）。",
    options: {
      A: "8个",
      B: "9个",
      C: "10个",
      D: "20个"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 127,
    type: "single_choice",
    question: "发那科机器人系统中程序注解可以有多少字符（）。",
    options: {
      A: "10个",
      B: "16个",
      C: "20个",
      D: "30个"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 128,
    type: "single_choice",
    question: "有多少个程序能作为主程序（）。",
    options: {
      A: "1个",
      B: "2个",
      C: "10个",
      D: "都可作为主程序"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 129,
    type: "single_choice",
    question: "TP上显示程序选择界面的按键是（）。",
    options: {
      A: "MENU",
      B: "SELECT",
      C: "EDIT",
      D: "DATA"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 130,
    type: "single_choice",
    question: "TP上显示程序编辑界面的按键是（）。",
    options: {
      A: "MENU",
      B: "SELECT",
      C: "EDIT",
      D: "DATA"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 131,
    type: "single_choice",
    question: "下列关于机器人程序命名说法正确的是（）。",
    options: {
      A: "名称可以重复",
      B: "第一个字符必须是英文字母",
      C: "中间可以有空格",
      D: "共1~10个字符"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 132,
    type: "single_choice",
    question: "下列机器人程序命名正确的是（）。",
    options: {
      A: "ABC123",
      B: "ABC 123",
      C: "123ABC",
      D: "以上都对"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 133,
    type: "single_choice",
    question: "关于发那科机器人说法正确的是（）。",
    options: {
      A: "可以同时执行多个主程序",
      B: "程序名称可以随便取",
      C: "由英文大写字母、数字、_（下划线)组成",
      D: "以上都对"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 134,
    type: "single_choice",
    question: "发那科机器人系统中哪个键是单步/连续的切换键（）。",
    options: {
      A: "STEP",
      B: "HOLD",
      C: "FWD",
      D: "BWD"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 135,
    type: "single_choice",
    question: "程序选择单步运行时，需要按下（ ）键程序会向下执行。",
    options: {
      A: "STEP",
      B: "HOLD",
      C: "FWD",
      D: "BWD"
    },
    answer: "C",
    category: "示教编程"
  },
  {
    id: 136,
    type: "single_choice",
    question: "程序选择单步运行时，需要按下（ ）键程序会向上执行。",
    options: {
      A: "STEP",
      B: "HOLD",
      C: "FWD",
      D: "BWD"
    },
    answer: "D",
    category: "示教编程"
  },
  {
    id: 137,
    type: "single_choice",
    question: "连续执行程序时需要调节机器人的（ ）。",
    options: {
      A: "机器人坐标系",
      B: "速度",
      C: "选择程序",
      D: "设置主程序"
    },
    answer: "B",
    category: "示教编程"
  },
  {
    id: 138,
    type: "single_choice",
    question: "调试程序时检验程序应先使用（ ）。",
    options: {
      A: "单步运行",
      B: "连续运行",
      C: "不用检验",
      D: "直接外部启动"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 139,
    type: "single_choice",
    question: "运行一个新的程序时应（ ）。",
    options: {
      A: "直接运行",
      B: "先停止当前执行的程序",
      C: "先设置主程序",
      D: "直接按下FWD"
    },
    answer: "B",
    category: "示教编程"
  },
  {
    id: 140,
    type: "single_choice",
    question: "检验一个完整的工作流程应使用（ ）。",
    options: {
      A: "单步运行",
      B: "连续运行",
      C: "全速运行",
      D: "直接外部启动"
    },
    answer: "B",
    category: "示教编程"
  },
  {
    id: 141,
    type: "single_choice",
    question: "单步和连续运行有何前提（ ）。",
    options: {
      A: "示教器有效",
      B: "示教器无效",
      C: "当前程序设置为主程序",
      D: "控制柜在自动模式"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 142,
    type: "single_choice",
    question: "发那科机器人在T1模式下，在程序运行过程中哪个操作不会使机器人停止（ ）。",
    options: {
      A: "松开安全开关",
      B: "按下急停按钮",
      C: "按下BWD按键",
      D: "松开SHIFT键"
    },
    answer: "C",
    category: "示教编程"
  },
  {
    id: 143,
    type: "single_choice",
    question: "无循环条件指令时，程序设置为连续运行时（ ）。",
    options: {
      A: "当前程序完整执行一次",
      B: "程序重复执行",
      C: "程序执行一步",
      D: "所有程序都执行一次"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 144,
    type: "single_choice",
    question: "示教器执行程序的方式为",
    options: {
      A: "顺序单步执行",
      B: "逆序单步运行",
      C: "顺序连续运行",
      D: "以上都是"
    },
    answer: "D",
    category: "示教编程"
  },
  {
    id: 145,
    type: "single_choice",
    question: "发那科机器人位置数据有几种格式（",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 146,
    type: "single_choice",
    question: "发那科机器人编辑原点位置数据格式一般用（",
    options: {
      A: "P",
      B: "PR",
      C: "P1",
      D: "P2"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 147,
    type: "single_choice",
    question: "从P1点P2点工具姿态发生改变一般用（",
    options: {
      A: "关节运动指令",
      B: "直线运动指令",
      C: "圆弧运动指令",
      D: "以上都可以"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 148,
    type: "single_choice",
    question: "机器人从接近工具到抓取工具移出工具台一般用（",
    options: {
      A: "关节运动指令",
      B: "直线运动指令",
      C: "圆弧运动指令",
      D: "以上都可以"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 149,
    type: "single_choice",
    question: "下列哪个参数是发那科机器人程序中速度参数（",
    options: {
      A: "V",
      B: "P",
      C: "L",
      D: "C"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 150,
    type: "single_choice",
    question: "通常所说的'两点一条直线'运用那条指令？（",
    options: {
      A: "关节运动指令",
      B: "直线运动指令",
      C: "圆弧运动指令",
      D: "以上都可以"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 151,
    type: "single_choice",
    question: "机器人执行J指令时以（ ）方式移动到指令的位姿。",
    options: {
      A: "点到点",
      B: "点到直线",
      C: "直线运动",
      D: "圆弧运动"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 152,
    type: "single_choice",
    question: "一条圆弧轨迹需要几点来确定（）",
    options: {
      A: "4点",
      B: "3点",
      C: "2点",
      D: "1点"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 153,
    type: "single_choice",
    question: "下列不属于运动指令的是（",
    options: {
      A: "J",
      B: "C",
      C: "L",
      D: "V"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 154,
    type: "single_choice",
    question: "直线运动时CN参数一般设置为（",
    options: {
      A: "0",
      B: "5",
      C: "15",
      D: "50"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 155,
    type: "single_choice",
    question: "关于YL-18型设备，机器人去夹具站抓取夹具一般采用（ ）。",
    options: {
      A: "关节运动指令",
      B: "直线运动指令",
      C: "圆弧运动指令",
      D: "以上都可以"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 156,
    type: "single_choice",
    question: "关于YL-18型设备，机器人从安全位置快速回原点一般采用（ ）。",
    options: {
      A: "关节运动指令",
      B: "直线运动指令",
      C: "圆弧运动指令",
      D: "以上都可以"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 157,
    type: "single_choice",
    question: "机器人圆弧指令是（",
    options: {
      A: "J",
      B: "C",
      C: "L",
      D: "V"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 158,
    type: "single_choice",
    question: "机器人执行L指令时以（ ）方式移动到指令的位姿。",
    options: {
      A: "点到点",
      B: "点到直线",
      C: "直线运动",
      D: "圆弧运动"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 159,
    type: "single_choice",
    question: "机器人执行C指令时以（ ）方式移动到指令的位姿。",
    options: {
      A: "点到点",
      B: "点到直线",
      C: "直线运动",
      D: "圆弧运动"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 160,
    type: "single_choice",
    question: "两点之间机器人手爪姿态改变恒大时应使用（ ）。",
    options: {
      A: "关节运动指令",
      B: "直线运动指令",
      C: "圆弧运动指令",
      D: "以上都可以"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 161,
    type: "single_choice",
    question: "在无障碍的情况下，两个过渡点之间的移动应使用（ ）指令。",
    options: {
      A: "J",
      B: "C",
      C: "V",
      D: "L"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 162,
    type: "single_choice",
    question: "两点之间运行距离、幅度较大的情况下，应进行（ ）操作。",
    options: {
      A: "不需要",
      B: "适当增加过渡点",
      C: "增大速度",
      D: "使用MOVL指令"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 163,
    type: "single_choice",
    question: "使用手爪夹具夹取物料时，应调整手爪平面与物料平面的关系为（ ）姿态最佳。",
    options: {
      A: "垂直",
      B: "任意",
      C: "45°",
      D: "水平"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 164,
    type: "single_choice",
    question: "机器人控制装置上为保存程序和文件，可以使用多少种类的存储装置（ ）。",
    options: {
      A: "1",
      B: "2",
      C: "5",
      D: "8"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 165,
    type: "single_choice",
    question: "发那科机器人示教器上的存储装置接口名称为（ ）。",
    options: {
      A: "存储卡",
      B: "USB 端口",
      C: "MF 盘端口",
      D: "FROM 盘端口"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 166,
    type: "single_choice",
    question: "下列为发那科机器人控制器的存储文件的是（ ）。",
    options: {
      A: "程序文件",
      B: "标准指令文件",
      C: "系统文件",
      D: "以上都是"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 167,
    type: "single_choice",
    question: "发那科机器人自动备份功能要设置为（ ）才有效。",
    options: {
      A: "ON",
      B: "OFF",
      C: "启用",
      D: "开启"
    },
    answer: "C",
    category: "系统设置"
  },
  {
    id: 168,
    type: "single_choice",
    question: "发那科机器人自动备份功能开启后，标准情况下（ ）通电时自动备份。",
    options: {
      A: "1天",
      B: "1小时",
      C: "7天",
      D: "3天"
    },
    answer: "C",
    category: "系统设置"
  },
  {
    id: 169,
    type: "single_choice",
    question: "发那科机器人自动备份功能开启后，时间间隔设置为（ ）。",
    options: {
      A: "天",
      B: "时",
      C: "分",
      D: "以上都是"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 170,
    type: "single_choice",
    question: "发那科机器人自动备份功能开启后，将时间间隔设置为0时（ ）。",
    options: {
      A: "通电时每次都备份",
      B: "不备份",
      C: "7天备份一次",
      D: "以上都不对"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 171,
    type: "single_choice",
    question: "关于备份的TP程序说法正确的是（ ）。",
    options: {
      A: "加载到别的机器人上可以直接使用",
      B: "加载到别的机器人上要重新示教点位",
      C: "不可以加载到别的机器人上",
      D: "只能在本机器人上使用"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 172,
    type: "single_choice",
    question: "程序备份在（ ）目录下。",
    options: {
      A: "设置",
      B: "文件",
      C: "用户",
      D: "数据"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 173,
    type: "single_choice",
    question: "在什么情况下需要进行程序恢复（",
    options: {
      A: "机器人报警",
      B: "机器人急停",
      C: "机器人程序丢失",
      D: "机器人断电"
    },
    answer: "C",
    category: "系统设置"
  },
  {
    id: 174,
    type: "single_choice",
    question: "恢复程序需要（ ）的先决条件。",
    options: {
      A: "程序已备份",
      B: "机器人重启",
      C: "机器人程序丢失",
      D: "机器人断电"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 175,
    type: "single_choice",
    question: "系统文件在什么条件下需要恢复（",
    options: {
      A: "系统发生错误，无法修复",
      B: "机器人断电",
      C: "机器人急停",
      D: "机器人电池断电"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 176,
    type: "single_choice",
    question: "多台机器人（ ）可以直接使用。",
    options: {
      A: "I/O分配数据文件",
      B: "程序文件",
      C: "机器人原点数据文件",
      D: "以上都可以"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 177,
    type: "single_choice",
    question: "一般模式下（ ）不能被加载。",
    options: {
      A: "写保护文件",
      B: "处于编辑状态下的文件",
      C: "部分系统文件",
      D: "以上都是"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 178,
    type: "single_choice",
    question: "以下哪种文件可以被导出（",
    options: {
      A: "程序文件",
      B: "I/O配置文件",
      C: "数据文件",
      D: "以上都是"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 179,
    type: "single_choice",
    question: "以下属于系统文件的是（",
    options: {
      A: "伺服参数",
      B: "坐标参考点数据",
      C: "保存用户坐标系和工具坐标系的设置",
      D: "以上都是"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 180,
    type: "single_choice",
    question: "以下属于I/O配置文件的是（ ）。",
    options: {
      A: "寄存器数据",
      B: "位置寄存器数据",
      C: "I/O配置数据",
      D: "以上都是"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 181,
    type: "single_choice",
    question: "用来保存宏命令的设置属于（）。",
    options: {
      A: "I/O分配数据文件",
      B: "程序文件",
      C: "机器人原点数据文件",
      D: "系统文件"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 182,
    type: "single_choice",
    question: "关于发那科机器人TP程序备份说法正确的是（ ）。",
    options: {
      A: "可以在任何系统下同时备份多个TP程序",
      B: "进入正常系统界面，只能单个恢复TP程序",
      C: "进入正常系统界面，可以同时恢复多个TP程序",
      D: "在任何系统下都不能同时备份多个TP程序"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 183,
    type: "single_choice",
    question: "关于发那科备份的程序说法正确的是（ ）。",
    options: {
      A: "TP格式可以用记事本打开",
      B: "LS格式可以用记事本打开",
      C: "TP、LS格式都可以用记事本打开",
      D: "TP、LS格式都不可以用记事本打开"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 184,
    type: "single_choice",
    question: "U盘插在示教器上，备份的时候要选择（ ）盘。",
    options: {
      A: "MC",
      B: "MD",
      C: "UD1",
      D: "CONS"
    },
    answer: "C",
    category: "系统设置"
  },
  {
    id: 185,
    type: "single_choice",
    question: "要备份可以用记事本打开的程序应选择（ ）。",
    options: {
      A: "系统文件",
      B: "TP程序",
      C: "应用.-TP",
      D: "ASCII程序"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 186,
    type: "single_choice",
    question: "如果要备份机器人系统应选择（ ）。",
    options: {
      A: "系统文件",
      B: "TP程序",
      C: "应用.-TP",
      D: "以上所有"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 187,
    type: "single_choice",
    question: "发那科机器人登录程序目录的快捷键是（ ）。",
    options: {
      A: "MENU",
      B: "SELECT",
      C: "EDIT",
      D: "DATA"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 188,
    type: "single_choice",
    question: "发那科外部启动条件下程序名命名格式有几种（ ）。",
    options: {
      A: "1种",
      B: "2种",
      C: "3种",
      D: "4种"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 189,
    type: "single_choice",
    question: "关于发那科机器人命名程序名说法正确的是（ ）。",
    options: {
      A: "程序名开头不能空格",
      B: "不可以以符号作为开头",
      C: "不可以以数字作为开头",
      D: "以上都是"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 190,
    type: "single_choice",
    question: "关于发那科机器人程序编辑画面的快捷键是（ ）。",
    options: {
      A: "MENU",
      B: "SELECT",
      C: "EDIT",
      D: "DATA"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 191,
    type: "single_choice",
    question: "发那科机器人系统变更程序名在哪里设置（ ）。",
    options: {
      A: "程序详细信息",
      B: "程序属性",
      C: "程序编辑",
      D: "程序创建"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 192,
    type: "single_choice",
    question: "不能改变组掩码的设定的程序是()。",
    options: {
      A: "新建的程序",
      B: "主程序",
      C: "已对动作指令进行示教的程序",
      D: "所有程序"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 193,
    type: "single_choice",
    question: "发那科机器人系统删除程序在哪个菜单画面（ ）。",
    options: {
      A: "程序编辑画面",
      B: "程序目录",
      C: "主菜单画面",
      D: "辅助菜单画面"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 194,
    type: "single_choice",
    question: "发那科机器人系统调用程序的指令是（ ）。",
    options: {
      A: "CALL",
      B: "JMP",
      C: "LBL",
      D: "WAIT"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 195,
    type: "single_choice",
    question: "发那科机器人系统调用例行程序r1的正确写法为( )。",
    options: {
      A: "ProcCall",
      B: "r1",
      C: "Call r1",
      D: "ProcCall r1"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 196,
    type: "single_choice",
    question: "发那科机器人系统程序复制可以（ ）。",
    options: {
      A: "整个程序复制",
      B: "单段程序复制",
      C: "多段程序复制",
      D: "都可以"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 197,
    type: "single_choice",
    question: "发那科机器人系统复制机器人运动指令程序需要在（ ）。",
    options: {
      A: "程序目录",
      B: "程序编辑画面",
      C: "主菜单画面",
      D: "辅助菜单画面"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 198,
    type: "single_choice",
    question: "在机器人中创建程序时，以下名称不可创建的文件名是（）。",
    options: {
      A: "123",
      B: "abc",
      C: "ABC",
      D: "abc123"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 199,
    type: "single_choice",
    question: "在机器人中创建程序时，说法正确的是（）。",
    options: {
      A: "可以以数字开头",
      B: "不可以以数字开头",
      C: "不可以以字母开头",
      D: "以上都不对"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 200,
    type: "single_choice",
    question: "在程序编辑界面不可以进行的操作是（",
    options: {
      A: "创建",
      B: "删除",
      C: "属性",
      D: "加载"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 201,
    type: "single_choice",
    question: "在程序编辑界面不可以进行的操作是（",
    options: {
      A: "创建",
      B: "删除",
      C: "属性",
      D: "备份"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 202,
    type: "single_choice",
    question: "在程序编辑界面不可以进行的操作是（",
    options: {
      A: "创建",
      B: "删除",
      C: "属性",
      D: "备份系统"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 203,
    type: "single_choice",
    question: "机器人动作指令中'J'是（",
    options: {
      A: "关节动作指令",
      B: "直线动作指令",
      C: "圆弧动作指令",
      D: "都不是"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 204,
    type: "single_choice",
    question: "机器人动作指令中'L'是（",
    options: {
      A: "关节动作指令",
      B: "直线动作指令",
      C: "圆弧动作指令",
      D: "都不是"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 205,
    type: "single_choice",
    question: "机器人动作指令中'C'是（",
    options: {
      A: "关节动作指令",
      B: "直线动作指令",
      C: "圆弧动作指令",
      D: "都不是"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 206,
    type: "single_choice",
    question: "机器人动作指令中'J'指令的路径为（",
    options: {
      A: "点到点",
      B: "点到直线",
      C: "直线",
      D: "圆弧"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 207,
    type: "single_choice",
    question: "机器人动作指令中'L'指令的路径为（ ）。",
    options: {
      A: "点到点",
      B: "点到直线",
      C: "直线",
      D: "圆弧"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 208,
    type: "single_choice",
    question: "机器人动作指令中'C'指令的路径为（ ）。",
    options: {
      A: "点到点",
      B: "点到直线",
      C: "直线",
      D: "圆弧"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 209,
    type: "single_choice",
    question: "两个指定的点之间关节动作和直线动作不同点是（ ）。",
    options: {
      A: "关节动作不进行轨迹和姿势控制",
      B: "关节动作进行轨迹控制",
      C: "关节动作进行姿势控制",
      D: "直线动作不进行轨迹和姿势控制"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 210,
    type: "single_choice",
    question: "机器人在没有阻挡的情况下进行大幅度动作用（ ）。",
    options: {
      A: "关节动作指令",
      B: "直线动作指令",
      C: "圆弧动作指令",
      D: "都不是"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 211,
    type: "single_choice",
    question: "机器人示教编程时要使机器人第六轴旋转90度用（ ）。",
    options: {
      A: "关节动作指令",
      B: "直线动作指令",
      C: "圆弧动作指令",
      D: "都不是"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 212,
    type: "single_choice",
    question: "发那科机器人系统中关节运动指令中'PR'是（ ）。",
    options: {
      A: "一般位置",
      B: "位置寄存器",
      C: "位置点",
      D: "PR点"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 213,
    type: "single_choice",
    question: "下列不属于发那科机器人系统中关节运动指程序中的速度单位的是（）。",
    options: {
      A: "30%",
      B: "Sec",
      C: "msec",
      D: "cm/min"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 214,
    type: "single_choice",
    question: "下列不属于发那科机器人系统中直线运动指程序中的速度单位的是（）。",
    options: {
      A: "30%",
      B: "cm/min",
      C: "mm/sec",
      D: "deg/sec"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 215,
    type: "single_choice",
    question: "发那科机器人系统中运动指令中CNT值是（ ）。",
    options: {
      A: "速度倍率",
      B: "移动速度",
      C: "定位类型",
      D: "位置数据"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 216,
    type: "single_choice",
    question: "发那科机器人系统中运动程序中CNT值越小则（ ）。",
    options: {
      A: "对机器人运动位置没有影响",
      B: "机器人动作越连贯",
      C: "机器人越远离目标点",
      D: "机器人位置越准"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 217,
    type: "single_choice",
    question: "在两点之间机器人手爪姿态改变幅度过大时应（ ）。",
    options: {
      A: "在两点之间增加过渡点",
      B: "增加很多个过渡点",
      C: "增加速度",
      D: "减小CNT值"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 218,
    type: "single_choice",
    question: "完成一个完整的圆最少需要示教几个点位置（ ）。",
    options: {
      A: "3点",
      B: "4点",
      C: "5点",
      D: "6点"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 219,
    type: "single_choice",
    question: "圆弧运动是指机器人末端沿（ ）轨迹运动。",
    options: {
      A: "弧形",
      B: "直线",
      C: "折线",
      D: "任意"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 220,
    type: "single_choice",
    question: "圆弧运动一般在（ ）应用中最常用。",
    options: {
      A: "搬运",
      B: "码垛",
      C: "上下料",
      D: "焊接"
    },
    answer: "D",
    category: "行业应用"
  },
  {
    id: 221,
    type: "single_choice",
    question: "机器人恢复到原点位置用（ ）运动指令。",
    options: {
      A: "关节",
      B: "圆弧",
      C: "直线",
      D: "旋转"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 222,
    type: "single_choice",
    question: "下列属于圆弧动作里的点是（ ）。",
    options: {
      A: "圆弧开始点",
      B: "圆弧经由点",
      C: "圆弧终点",
      D: "以上都是"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 223,
    type: "single_choice",
    question: "程序创建太多时，易记不住对应的程序功能，此时我们可以（ ）。",
    options: {
      A: "用文件夹分类",
      B: "添加程序注解",
      C: "添加程序等级",
      D: "添加程序编号"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 224,
    type: "single_choice",
    question: "发那科机器人高级编程功能，以下为码垛指令的是（ ）。",
    options: {
      A: "FOR",
      B: "CALL",
      C: "PALLETIZING",
      D: "OFFSET"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 225,
    type: "single_choice",
    question: "发那科机器人在编写程序时，想在相邻二行之间在写一行指令的方法为（ ）。",
    options: {
      A: "光标移至上方行，再选择插入行",
      B: "光标移至下方行，再选择插入行",
      C: "随意位置，选择插入行",
      D: "下方行出直接添加自己所需的指令"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 226,
    type: "single_choice",
    question: "发那科机器人在编写程序时，想要连续的多行删除某一段程序时的做法正确的是（）。",
    options: {
      A: "点删除即可",
      B: "点出删除，在点击多行删除即可",
      C: "点击剪切，再点击选择，选择需要剪切的行即可",
      D: "无法进行多行删除"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 227,
    type: "single_choice",
    question: "在主程序中调用子程序，此时需要用到的指令是（）。",
    options: {
      A: "UP[]=",
      B: "ProCall",
      C: "Call",
      D: "LBL"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 228,
    type: "single_choice",
    question: "在发那科机器人程序编辑中，使用（ ）指令无限循环一段程序。",
    options: {
      A: "FOR ERNFOR",
      B: "LBL[] JIMPLBL[]",
      C: "IFENDIF",
      D: "IFTHEN"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 229,
    type: "single_choice",
    question: "以下程序名，命名格式错误的是（",
    options: {
      A: "Style",
      B: "yalong",
      C: "123",
      D: "主程序"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 230,
    type: "single_choice",
    question: "发那科机器人中断指令的下一条指令为wite指令时，机器人下一个动作（）。",
    options: {
      A: "不会执行，程序结束",
      B: "等待wite条件成立，继续执行",
      C: "继续运行无影响",
      D: "跳过wite指令"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 231,
    type: "single_choice",
    question: "发那科机器人系统中，中止程序的指令为（",
    options: {
      A: "ABORT",
      B: "NEXT",
      C: "ENDFOR",
      D: "ENDIF"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 232,
    type: "single_choice",
    question: "发那科机器人系统中修改动作指令需要在（",
    options: {
      A: "程序编辑界面",
      B: "程序目录画面",
      C: "程序位置画面",
      D: "主菜单界面"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 233,
    type: "single_choice",
    question: "可以把关节运动指令修改为（",
    options: {
      A: "圆弧运动指令",
      B: "直线运动指令",
      C: "圆弧（A指令）",
      D: "以上都可以"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 234,
    type: "single_choice",
    question: "在两点之间机器人运动指令为直线运动，发生奇异点报警可以（）。",
    options: {
      A: "把直线改为圆弧",
      B: "把直线改为关节运动",
      C: "减小转弯半径",
      D: "把转弯半径设为FINE"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 235,
    type: "single_choice",
    question: "在两点之间机器人运动指令为关节运动，发生奇异点报警可以（）。",
    options: {
      A: "把关节运动改为直线",
      B: "把关节运动改为圆弧",
      C: "减小CNT值",
      D: "在两点之间增加过渡点"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 236,
    type: "single_choice",
    question: "在机器人接近工件易发生碰撞的地方，机器人程序的转弯半径应设为（）。",
    options: {
      A: "CNT10",
      B: "CNT100",
      C: "FINE",
      D: "CNT5"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 237,
    type: "single_choice",
    question: "在圆弧运动指令中转弯半径一般不要设置为（",
    options: {
      A: "CNT10",
      B: "CNT100",
      C: "FINE",
      D: "CNT5"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 238,
    type: "single_choice",
    question: "机器人在远离工件时用关节运动指令，速度一般设置为（ ）。",
    options: {
      A: "30%",
      B: "10%",
      C: "20%",
      D: "100%"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 239,
    type: "single_choice",
    question: "机器人在接近工件时用直线运动指令，速度一般设置为（ ）。",
    options: {
      A: "100mm/sec",
      B: "800mm/sec",
      C: "2000mm/sec",
      D: "1000mm/sec"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 240,
    type: "single_choice",
    question: "将圆弧指令修改为直线指令时会变成几个动作语句（",
    options: {
      A: "1个",
      B: "2个",
      C: "3个",
      D: "4个"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 241,
    type: "single_choice",
    question: "将直线运动指令改为圆弧运动指令时（",
    options: {
      A: "点位置会变为圆弧起始点",
      B: "点位置会变为圆弧终点",
      C: "点位置会变为空点",
      D: "圆弧终点的位置数据为空"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 242,
    type: "single_choice",
    question: "在修改机器人回原点程序的位置信息时位置数据类型应选择（ ）。",
    options: {
      A: "关节",
      B: "正交",
      C: "直角",
      D: "角度"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 243,
    type: "single_choice",
    question: "一般指定位置的时候，点位置信息一般用（ ）。",
    options: {
      A: "P",
      B: "PR",
      C: "P1",
      D: "P2"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 244,
    type: "single_choice",
    question: "修改位置点数据有几种方法（ ）。",
    options: {
      A: "1种",
      B: "2种",
      C: "3种",
      D: "4种"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 245,
    type: "single_choice",
    question: "将直线运动指令改为关节运动指令说法正确的是（ ）。",
    options: {
      A: "位置数据不变",
      B: "位置数据发生改变",
      C: "目标点发生偏移",
      D: "目标点丢失"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 246,
    type: "single_choice",
    question: "直线运动指令中速度不能改为（ ）。",
    options: {
      A: "100cm/min",
      B: "800mm/sec",
      C: "20%",
      D: "1000mm/sec"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 247,
    type: "single_choice",
    question: "关节运动是机器人末端执行器在空间内始终沿( )轨迹运动。",
    options: {
      A: "线性",
      B: "直线",
      C: "点到点",
      D: "任意"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 248,
    type: "single_choice",
    question: "直线运动是机器人末端执行器在空间内始终沿( )轨迹运动。",
    options: {
      A: "圆弧",
      B: "直线",
      C: "任意",
      D: "点到点"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 249,
    type: "single_choice",
    question: "圆弧运动是机器人末端执行器在空间内始终沿( )轨迹运动。",
    options: {
      A: "线性",
      B: "直线",
      C: "点到点",
      D: "圆形"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 250,
    type: "single_choice",
    question: "圆弧运动中部分圆的P10，P20表示机器人运动过程中的( )。",
    options: {
      A: "起始点、结束点",
      B: "中间点、结束点",
      C: "起始点、中间点",
      D: "任意点"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 251,
    type: "single_choice",
    question: "在机器人中在曲线过程中机器人运动指令采用( )。",
    options: {
      A: "线性",
      B: "直线",
      C: "点到点",
      D: "圆弧"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 252,
    type: "single_choice",
    question: "在机器人中机器人完成一个整圆轨迹运动最少需要几条指令( )。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 253,
    type: "single_choice",
    question: "在发那科机器人中机器人速度单位是( )。",
    options: {
      A: "mm/min",
      B: "mm/sec",
      C: "in/s",
      D: "in/min"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 254,
    type: "single_choice",
    question: "在大范围移动机器人的时候采用( )运动方式。",
    options: {
      A: "圆弧",
      B: "直线",
      C: "关节",
      D: "任意"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 255,
    type: "single_choice",
    question: "在发那科机器人中圆弧指令需要示教( )个目标点。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 256,
    type: "single_choice",
    question: "装配机器人的规格确定，不考虑以下哪个问题。（ ）。",
    options: {
      A: "作业行程",
      B: "机器重量",
      C: "工作速度",
      D: "承载能力"
    },
    answer: "B",
    category: "机器人操作基础"
  },
  {
    id: 257,
    type: "single_choice",
    question: "传感器关联的机器人数据是( )信号。",
    options: {
      A: "输入",
      B: "输出",
      C: "位置数据",
      D: "速度"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 258,
    type: "single_choice",
    question: "机器人手爪电磁阀是由机器人（ ）控制的。",
    options: {
      A: "输入",
      B: "输出",
      C: "位置数据",
      D: "速度"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 259,
    type: "single_choice",
    question: "发那科系统控制机器人手爪夹紧用（ ）指令。",
    options: {
      A: "RO[I]=ON",
      B: "DO{1}=ON",
      C: "R1=ON",
      D: "R1=1"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 260,
    type: "single_choice",
    question: "发那科机器人用（ ）信号用来等待数字信号输入。",
    options: {
      A: "WAIT DI",
      B: "WAIT",
      C: "WAIT DO",
      D: "WAIT RO"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 261,
    type: "single_choice",
    question: "发那科机器人显示I/O画面用( )键。",
    options: {
      A: "POSN",
      B: "SETUP",
      C: "I/O",
      D: "ITEM"
    },
    answer: "C",
    category: "IO控制"
  },
  {
    id: 262,
    type: "single_choice",
    question: "设备中机器人用来控制快换夹具更换的信号是( )。",
    options: {
      A: "RO[1]",
      B: "RO[3]",
      C: "DO{1]",
      D: "DO[3]"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 263,
    type: "single_choice",
    question: "设备中机器人用来控制手爪夹紧的信号是( )。",
    options: {
      A: "RO[1]",
      B: "RO[3]",
      C: "DO{1]",
      D: "DO[3]"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 264,
    type: "single_choice",
    question: "关于手爪夹紧信号写法正确的是( )。",
    options: {
      A: "RO[1]=ON",
      B: "RO[1]=OFF",
      C: "RO[3]=ON",
      D: "RO[3]=OFF"
    },
    answer: "C",
    category: "IO控制"
  },
  {
    id: 265,
    type: "single_choice",
    question: "下面哪种传感器不属于触觉传感器( )。",
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
    id: 266,
    type: "single_choice",
    question: "适用于较长距离和较大物体的探测用( )。",
    options: {
      A: "接近觉传感器",
      B: "接触觉传感器",
      C: "压觉传感器",
      D: "热敏电阻"
    },
    answer: "D",
    category: "传感器应用"
  },
  {
    id: 267,
    type: "single_choice",
    question: "转盘上用于转盘原点检测的传感器是( )。",
    options: {
      A: "光点传感器",
      B: "接近传感器",
      C: "金属传感器",
      D: "压觉传感器"
    },
    answer: "B",
    category: "传感器应用"
  },
  {
    id: 268,
    type: "single_choice",
    question: "发那科机器人数字输出指令格式正确的是( )。",
    options: {
      A: "RO[1]=ON",
      B: "DO[1]:ON",
      C: "DO[1]=ON",
      D: "DO[1] = OFF"
    },
    answer: "C",
    category: "IO控制"
  },
  {
    id: 269,
    type: "single_choice",
    question: "发那科机器人数字输出脉冲指令格式正确的是( )。",
    options: {
      A: "DO[1]: = PULSE,0.2",
      B: "DO[1] = PULSE,0.2",
      C: "DO[1]=PULSE,0.2",
      D: "DO[1]=PULSE,0.2sec"
    },
    answer: "D",
    category: "IO控制"
  },
  {
    id: 270,
    type: "single_choice",
    question: "机器人程序中需要延时1秒的写法是( )。",
    options: {
      A: "SET1",
      B: "REST1",
      C: "WAIT1.00(sec)",
      D: "WAIT1"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 271,
    type: "single_choice",
    question: "机器人程序中等待信号写法正确的是（",
    options: {
      A: "WAITDI[104]",
      B: "WAITDI[104]=ON",
      C: "WAITDI[104]=OFF",
      D: "以上都可以"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 272,
    type: "single_choice",
    question: "关于YL-18型设备手爪放松信号写法正确的是（",
    options: {
      A: "DO[3]=ON",
      B: "DO[3]=OFF",
      C: "RO[3]=ON",
      D: "RO[3]=OFF"
    },
    answer: "D",
    category: "IO控制"
  },
  {
    id: 273,
    type: "single_choice",
    question: "关于YL-18型设备中机器人用来控制快换夹具放松的信号写法是（）。",
    options: {
      A: "RO[1]=ON",
      B: "RO[1]=OFF",
      C: "DO{1}=ON",
      D: "DO[1]=OFF"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 274,
    type: "single_choice",
    question: "机器人快换夹具是由哪种电磁阀控制的（",
    options: {
      A: "单电控电磁阀",
      B: "双电控电磁阀",
      C: "电磁阀组",
      D: "两位五通电磁阀"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 275,
    type: "single_choice",
    question: "机器人手爪使用哪种电磁阀控制的（",
    options: {
      A: "单电控电磁阀",
      B: "双电控电磁阀",
      C: "电磁阀组",
      D: "两位五通电磁阀"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 276,
    type: "single_choice",
    question: "在真个工作流程中多次搬运物料时，避免重复示教我们可以（）。",
    options: {
      A: "新建多个程序",
      B: "把重复部分写在子程序里，重复调用",
      C: "只用一个程序",
      D: "以上都不对"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 277,
    type: "single_choice",
    question: "供料模块采用（ ）作为有无物料检测",
    options: {
      A: "光电传感器",
      B: "接近传感器",
      C: "金属传感器",
      D: "压力传感器"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 278,
    type: "single_choice",
    question: "在调试时我们可用I/O界面来控制（",
    options: {
      A: "快换夹具夹紧、放松",
      B: "手爪夹紧、放松",
      C: "吸盘动作",
      D: "以上都可以"
    },
    answer: "D",
    category: "IO控制"
  },
  {
    id: 279,
    type: "single_choice",
    question: "供料机构的推料气缸用（ ）来控制。",
    options: {
      A: "单电控电磁阀",
      B: "双电控电磁阀",
      C: "电磁阀组",
      D: "两位五通电磁阀"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 280,
    type: "single_choice",
    question: "推料气缸电磁阀是由（ ）来控制。",
    options: {
      A: "自身控制",
      B: "模拟量信号",
      C: "输入信号",
      D: "PLC输出信号"
    },
    answer: "D",
    category: "IO控制"
  },
  {
    id: 281,
    type: "single_choice",
    question: "供料机构的顶料气缸用（ ）来控制。",
    options: {
      A: "单电控电磁阀",
      B: "双电控电磁阀",
      C: "电磁阀组",
      D: "两位五通电磁阀"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 282,
    type: "single_choice",
    question: "顶料气缸电磁阀是由（ ）来控制。",
    options: {
      A: "机器人输出",
      B: "机器人输入",
      C: "PLC输入",
      D: "PLC输出"
    },
    answer: "D",
    category: "IO控制"
  },
  {
    id: 283,
    type: "single_choice",
    question: "气缸前后限位传感器是（ ）",
    options: {
      A: "光点传感器",
      B: "接近传感器",
      C: "金属传感器",
      D: "磁性开关"
    },
    answer: "D",
    category: "传感器应用"
  },
  {
    id: 284,
    type: "single_choice",
    question: "气缸的气流量大小通过（ ）来调节。",
    options: {
      A: "直通",
      B: "4变6直通",
      C: "节流阀",
      D: "手滑阀"
    },
    answer: "C",
    category: "设备维护"
  },
  {
    id: 285,
    type: "single_choice",
    question: "机器人手爪夹紧力度可以用（ ）来调节。",
    options: {
      A: "节流阀",
      B: "油水分离器气体流量",
      C: "气泵的气流量",
      D: "以上都可以"
    },
    answer: "D",
    category: "设备维护"
  },
  {
    id: 286,
    type: "single_choice",
    question: "发那科机器人中（ ）指令将数字输出信号1置1。",
    options: {
      A: "DO1=ON",
      B: "DO1=OFF",
      C: "DOUT DO1 OFF",
      D: "Set DO1"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 287,
    type: "single_choice",
    question: "发那科机器人中（ ）指令用来等待数字输入信号1。",
    options: {
      A: "WAIT DI1=ON",
      B: "WAIT DI1 ON",
      C: "WAIT DI1=OFF",
      D: "WAITDIN DI1 0"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 288,
    type: "single_choice",
    question: "在（ ）界面可以查看机器人输入输出信号状态。",
    options: {
      A: "设置界面",
      B: "实用工具界面",
      C: "I/O单元界面",
      D: "信息界面"
    },
    answer: "C",
    category: "IO控制"
  },
  {
    id: 289,
    type: "single_choice",
    question: "轨迹模块中走三角形轨迹时使用（ ）指令。",
    options: {
      A: "J",
      B: "C",
      C: "L",
      D: "V"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 290,
    type: "single_choice",
    question: "轨迹模块中想要走风车轨迹的直线和半圆需要用到（ )指令。",
    options: {
      A: "C、L",
      B: "C、J",
      C: "J、L",
      D: "C、R"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 291,
    type: "single_choice",
    question: "轨迹模块中走曲面轨迹时使用( )指令。",
    options: {
      A: "J",
      B: "C",
      C: "L",
      D: "V"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 292,
    type: "single_choice",
    question: "旋转供料工作站转盘的驱动方式为( )。",
    options: {
      A: "伺服驱动",
      B: "步进驱动",
      C: "变频器驱动",
      D: "交流调速驱动"
    },
    answer: "B",
    category: "设备维护"
  },
  {
    id: 293,
    type: "single_choice",
    question: "旋转供料模块中转盘到位信号为( )",
    options: {
      A: "DI152",
      B: "DI153",
      C: "DI154",
      D: "DI155"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 294,
    type: "single_choice",
    question: "在该设备中机器人末端手爪的控制方式为（ )。",
    options: {
      A: "电磁控制",
      B: "气动控制",
      C: "液压",
      D: "手动控制"
    },
    answer: "B",
    category: "设备维护"
  },
  {
    id: 295,
    type: "single_choice",
    question: "以下哪点不是传感器的组成（",
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
    id: 296,
    type: "single_choice",
    question: "传感器的精确度是指（",
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
    id: 297,
    type: "single_choice",
    question: "以下哪点不是传感器的组成(",
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
    id: 298,
    type: "single_choice",
    question: "转盘到位信号的控制方式为( )。",
    options: {
      A: "PLC 脉冲给定",
      B: "机器人脉冲给定",
      C: "传感器检测到位",
      D: "机械限位"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 299,
    type: "single_choice",
    question: "仓储模块和工具模块采用（ )传感器判断有无物料及快换工具。",
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
    id: 300,
    type: "single_choice",
    question: "工具模块传感器的作用错误的是( )。",
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
    id: 301,
    type: "single_choice",
    question: "关于YL-18型设备电机交流驱动器用面板调节电机转动需要把参数F03设置为（）。",
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
    id: 302,
    type: "single_choice",
    question: "关于YL-18型设备电机交流驱动器用外部开关调节电机转动需要把参数F03设置为（）。",
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
    id: 303,
    type: "single_choice",
    question: "关于YL-18型设备输送模块电机的旋转方式由参数F-04控制，只允许正转时只需将参数值设置为（）。",
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
    id: 304,
    type: "single_choice",
    question: "关于YL-18型设备输送模块电机的旋转方式由参数F-04控制，即允许正转也允许反转时只需将参数值设置为（）。",
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
    id: 305,
    type: "single_choice",
    question: "关于YL-18型设备输送带在实际应用时需要失电便制动功能，正转失电便制动功能只需将参数（）设置为1。",
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
    id: 306,
    type: "single_choice",
    question: "关于YL-18型设备输送带在实际应用时需要失电便制动功能，反转失电便制动功能只需将参数（）设置为1。",
    options: {
      A: "F- 05",
      B: "F- 07",
      C: "F- 11",
      D: "F- 16"
    },
    answer: "D",
    category: "设备参数"
  },
  {
    id: 307,
    type: "single_choice",
    question: "关于YL-18型设备输送模块的交流驱动器，恢复出厂设定的参数为（）。",
    options: {
      A: "F- 28",
      B: "F- 29",
      C: "F- 30",
      D: "F- 31"
    },
    answer: "B",
    category: "设备参数"
  },
  {
    id: 308,
    type: "single_choice",
    question: "关于YL-18型设备皮带输送模块由（ ）来驱动。",
    options: {
      A: "交流电机和交流驱动器",
      B: "直流电机和直流驱动器",
      C: "同步电机",
      D: "异步电机"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 309,
    type: "single_choice",
    question: "关于YL-18型设备皮带输送模块上物料到达用（ ）来检测。",
    options: {
      A: "光电传感器",
      B: "接近传感器",
      C: "金属传感器",
      D: "磁性开关"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 310,
    type: "single_choice",
    question: "关于YL-18型设备皮带输送模块上物料到达检测关联机器人的（）信号。",
    options: {
      A: "数字量输入",
      B: "数字量输出",
      C: "模拟量输入",
      D: "模拟量输出"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 311,
    type: "single_choice",
    question: "机器人简单外围设备控制示教编程是用（ ）指令。",
    options: {
      A: "循环",
      B: "条件判断",
      C: "条件循环",
      D: "输入输出"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 312,
    type: "single_choice",
    question: "机器人不同程序之间需要相同的位置数据可使用哪种类型变量（ ）。",
    options: {
      A: "P[1]",
      B: "PR[1]",
      C: "R[1]",
      D: "SR[1]"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 313,
    type: "single_choice",
    question: "步进电机、直流伺服电机、交流伺服电机的英文字母表示依次为（）。",
    options: {
      A: "SM、DM、AC",
      B: "SM、DC、AC",
      C: "SM、AC、DC",
      D: "SC、AC、DC"
    },
    answer: "B",
    category: "设备维护"
  },
  {
    id: 314,
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
    id: 315,
    type: "single_choice",
    question: "不是主要造成电机轴承过热的原因（ ）。",
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
    id: 316,
    type: "single_choice",
    question: "立体库库位可根据以下（ ）检测智能入库。",
    options: {
      A: "工业视觉",
      B: "RFID",
      C: "颜色传感器",
      D: "以上都是"
    },
    answer: "D",
    category: "传感器应用"
  },
  {
    id: 317,
    type: "single_choice",
    question: "关于YL-18型设备输送线模块物料用（ ）来抓取。",
    options: {
      A: "真空吸盘",
      B: "平行手爪",
      C: "V型手爪",
      D: "尖型手爪"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 318,
    type: "single_choice",
    question: "工业视觉不能用来检测物料的（ ）",
    options: {
      A: "形状",
      B: "颜色",
      C: "大小",
      D: "材料"
    },
    answer: "D",
    category: "传感器应用"
  },
  {
    id: 319,
    type: "single_choice",
    question: "皮带输送模块实训的工作流程是1.视觉拍照判断当前物料的颜色输出反馈2.传感器感应出料口有物料3.输送物料4.机器人进行相应的入库处理。",
    options: {
      A: "2314",
      B: "2341",
      C: "3214",
      D: "3241"
    },
    answer: "A",
    category: "行业应用"
  },
  {
    id: 320,
    type: "single_choice",
    question: "输送线等待物料到达后，机器人判断的指令格式正确的是（ ）。",
    options: {
      A: "DOUTDO1ON",
      B: "AOUTAO11",
      C: "IFDI[101]=ON",
      D: "WAITDI[101]=ON"
    },
    answer: "D",
    category: "IO控制"
  },
  {
    id: 321,
    type: "single_choice",
    question: "输送带接头接口与中心线不垂直，会导致输送带（ ）。",
    options: {
      A: "断裂",
      B: "跑偏",
      C: "打滑",
      D: "撕裂"
    },
    answer: "B",
    category: "设备维护"
  },
  {
    id: 322,
    type: "single_choice",
    question: "输送线模块物料到达检测传感器怎样调整（ ）。",
    options: {
      A: "不用调整",
      B: "调到最小检测距离",
      C: "调到最大检测距离",
      D: "调到只能检测到物料"
    },
    answer: "D",
    category: "设备维护"
  },
  {
    id: 323,
    type: "single_choice",
    question: "机器人吸盘是真空吸盘需要使用（ ）才能工作。",
    options: {
      A: "节流阀",
      B: "手滑阀",
      C: "油水分离器",
      D: "真空发生器"
    },
    answer: "D",
    category: "设备维护"
  },
  {
    id: 324,
    type: "single_choice",
    question: "吸盘是由机器人输出通过（ ）来控制。",
    options: {
      A: "单控电磁阀",
      B: "双控电磁阀",
      C: "电磁阀组",
      D: "两位五通电磁阀"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 325,
    type: "single_choice",
    question: "称重模块模拟量输入，使用前应（ ）。",
    options: {
      A: "调零",
      B: "数据分析",
      C: "手动分配物理地址",
      D: "性能测试"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 326,
    type: "single_choice",
    question: "机器人输出至电磁阀信号的电压为( )。",
    options: {
      A: "0-10V",
      B: "0-24V",
      C: "24V",
      D: "0V"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 327,
    type: "single_choice",
    question: "本设备传感器输出需要通过继电器转换为( )给机器人输入。",
    options: {
      A: "0-10V",
      B: "0-24V",
      C: "24V",
      D: "0V"
    },
    answer: "D",
    category: "IO控制"
  },
  {
    id: 328,
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
    id: 329,
    type: "single_choice",
    question: "输送模块的交流驱动器，带有面板式调节，想用外部开关来调节电机的转动只需要将参数F03设置为（ ）。",
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
    id: 330,
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
    id: 331,
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
    id: 332,
    type: "single_choice",
    question: "输送带在实际应用时需要失电便制动功能，正转失电便制动功能只需将参数( )设置为1。",
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
    id: 333,
    type: "single_choice",
    question: "输送带在实际应用时需要失电便制动功能，反转失电便制动功能只需将参数( )设置为1。",
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
    id: 334,
    type: "single_choice",
    question: "输送模块的交流驱动器，恢复出厂设定的参数为( )。",
    options: {
      A: "F-28",
      B: "F-29",
      C: "F-30",
      D: "F-31"
    },
    answer: "B",
    category: "设备参数"
  },
  {
    id: 335,
    type: "single_choice",
    question: "在该设备中皮带输送模块由( )来驱动。",
    options: {
      A: "交流电机和交流驱动器",
      B: "直流电机和直流驱动器",
      C: "同步电机",
      D: "异步电机"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 336,
    type: "single_choice",
    question: "机器人简单外围设备控制示教编程是用( )指令。",
    options: {
      A: "循环",
      B: "条件判断",
      C: "条件循环",
      D: "输入输出"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 337,
    type: "single_choice",
    question: "测速发电机的输出信号为( )。",
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
    id: 338,
    type: "single_choice",
    question: "步进电机、直流伺服电机、交流伺服电机的英文字母表示依次为( )。",
    options: {
      A: "SM、DM、AC",
      B: "SM、DC、AC",
      C: "SM、AC、DC",
      D: "SC、AC、DC"
    },
    answer: "B",
    category: "设备维护"
  },
  {
    id: 339,
    type: "single_choice",
    question: "在伺服电机的伺服控制器中，为了获得高性能的控制效果，一般具有3个反馈回路，以下哪个不是反馈回路（ )。",
    options: {
      A: "电流环",
      B: "电压环",
      C: "速度环",
      D: "位置环"
    },
    answer: "B",
    category: "设备维护"
  },
  {
    id: 340,
    type: "single_choice",
    question: "下列（ ）不能用做加速度检测传感器。",
    options: {
      A: "电容式",
      B: "压电式",
      C: "电感式",
      D: "热电偶"
    },
    answer: "D",
    category: "传感器应用"
  },
  {
    id: 341,
    type: "single_choice",
    question: "关于YL-18型设备立体仓库有几个仓位（ ）。",
    options: {
      A: "6",
      B: "8",
      C: "9",
      D: "10"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 342,
    type: "single_choice",
    question: "关于YL-18型设备立体仓库有无物料检测是用（ ）来检测。",
    options: {
      A: "光电传感器",
      B: "接近传感器",
      C: "金属传感器",
      D: "磁性开关"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 343,
    type: "single_choice",
    question: "关于YL-18型设备立体仓库有无物料机器人用（ ）指令来判断。",
    options: {
      A: "WAIT",
      B: "WAIT DI",
      C: "IF",
      D: "CALL"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 344,
    type: "single_choice",
    question: "设备控制系统中PLC选用的型号为（ ）。",
    options: {
      A: "S7- 1214C",
      B: "S7- 1215C",
      C: "S7- 200",
      D: "S7- 200SMART"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 345,
    type: "single_choice",
    question: "设备控制系统中PLC选用的型号为S7-1214C，其输入输出点数为（）。",
    options: {
      A: "16输入/16输出",
      B: "16输入/10输出",
      C: "14输入/10输出",
      D: "10输入/14输出"
    },
    answer: "C",
    category: "设备维护"
  },
  {
    id: 346,
    type: "single_choice",
    question: "视觉系统中的拍照信号对应PLC的（ ）。",
    options: {
      A: "输入",
      B: "输出",
      C: "模拟输入",
      D: "模拟输出"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 347,
    type: "single_choice",
    question: "关于YL-18型设备称重模块中，称重的量程是（ ）千克。",
    options: {
      A: "0~1",
      B: "0~2",
      C: "0~5",
      D: "0~10"
    },
    answer: "C",
    category: "设备维护"
  },
  {
    id: 348,
    type: "single_choice",
    question: "称重模块中，称重传感器对应PLC的（ ）。",
    options: {
      A: "模拟量",
      B: "输入",
      C: "输出",
      D: "组"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 349,
    type: "single_choice",
    question: "称重传感器模拟量输入在PLC中的地址是（ ）。",
    options: {
      A: "固定不变",
      B: "随机分配",
      C: "手动指定",
      D: "浮动的地址"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 350,
    type: "single_choice",
    question: "称重传感器通过变送器输送给PLC的是（ ）信号。",
    options: {
      A: "电压",
      B: "电流",
      C: "二进制",
      D: "十进制"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 351,
    type: "single_choice",
    question: "发那科工业机器人系统中给信号DO101发2S的脉冲，正确的编程格适为（）。",
    options: {
      A: "DO[101]=ON",
      B: "DO[101]=PILSE，2S",
      C: "DO[101]=2S",
      D: "DO[101]=ON,2S"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 352,
    type: "single_choice",
    question: "程序创建太多时，容易记不住对应的程序功能，此时我们可以（ ）。",
    options: {
      A: "用文件夹分类",
      B: "添加程序注解",
      C: "添加程序等级",
      D: "添加程序编号"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 353,
    type: "single_choice",
    question: "等待输送模块触发物料检测传感器DI110为ON时，输送带动作，其编写格式正确的为（ ）。",
    options: {
      A: "DI[110]=ON",
      B: "DI[110]=1",
      C: "WITE DI[110]=ON",
      D: "WITE DI[110]=1"
    },
    answer: "C",
    category: "IO控制"
  },
  {
    id: 354,
    type: "single_choice",
    question: "发那科机器人中平移的指令为（ ）。",
    options: {
      A: "OFFSET",
      B: "SET",
      C: "RESET",
      D: "OFF"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 355,
    type: "single_choice",
    question: "发那科机器人系统的偏移量一般指定在（ ）寄存器中。",
    options: {
      A: "数值",
      B: "码垛",
      C: "位置",
      D: "字符串"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 356,
    type: "single_choice",
    question: "发那科机器人系统在偏移中使用位置寄存器（ ）进行偏移量的指定。",
    options: {
      A: "P",
      B: "PR",
      C: "R",
      D: "PL"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 357,
    type: "single_choice",
    question: "发那科机器人系统在使用偏移时PR[10,1]=20，表示的含义为（ ）。",
    options: {
      A: "轴1旋转20°",
      B: "X轴正方向偏移20",
      C: "X轴负方向偏移20",
      D: "X轴赋值等于20"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 358,
    type: "single_choice",
    question: "发那科机器人系统在编制码垛程序或者搬运程序时，除了点位示教法还可以使用（）。",
    options: {
      A: "偏移指令",
      B: "循环指令",
      C: "判断指令",
      D: "跳转指令"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 359,
    type: "single_choice",
    question: "发那科机器人系统在编制码垛程序或者搬运程序时，最简单的程序编制方法为（）。",
    options: {
      A: "偏移指令",
      B: "点位示教",
      C: "码垛指令",
      D: "循环指令"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 360,
    type: "single_choice",
    question: "发那科机器人系统在编制程序时，我们可以选择一个程序写完所有的逻辑，也可以选择（ ）进行编制。",
    options: {
      A: "分为多个子程序",
      B: "分为多个主程序",
      C: "分为多个例行程序",
      D: "程序集合"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 361,
    type: "single_choice",
    question: "智能仓储模块的光电传感器检测物料时检测距离（ ）。",
    options: {
      A: "调整到最大",
      B: "调整到最小",
      C: "不需要调整",
      D: "调整到能检测到物料可"
    },
    answer: "D",
    category: "设备维护"
  },
  {
    id: 362,
    type: "single_choice",
    question: "应用程序的编写需要用到的标签跳转指令为（ ）。",
    options: {
      A: "CALL",
      B: "JMP/LBL",
      C: "SELECT",
      D: "WAIT"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 363,
    type: "single_choice",
    question: "发那科机器人系统程序编写用到的等待指令为（ ）。",
    options: {
      A: "CALL",
      B: "JMP/LBL",
      C: "SELECT",
      D: "WAIT"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 364,
    type: "single_choice",
    question: "发那科机器人系统程序的编写用到的循环的指令为（ ）。",
    options: {
      A: "FOR/ENDFOR",
      B: "OFFSET",
      C: "FOR",
      D: "IF"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 365,
    type: "single_choice",
    question: "变位机单元是机器人通过组（ ）和PLC进行信息交互，PLC最终根据机器人的命令将变位机运行到指定位置。",
    options: {
      A: "机器人IO",
      B: "局域网",
      C: "PWM",
      D: "RS485"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 366,
    type: "single_choice",
    question: "装配机器人的规格确认，不考虑以下哪个问题（",
    options: {
      A: "作业行程",
      B: "机器重量",
      C: "工作速度",
      D: "承载能力"
    },
    answer: "B",
    category: "机器人操作基础"
  },
  {
    id: 367,
    type: "single_choice",
    question: "传感器关联的机器人数据是( )信号。",
    options: {
      A: "输入",
      B: "输出",
      C: "位置数据",
      D: "速度"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 368,
    type: "single_choice",
    question: "以下哪种不是接触传感器的用途（",
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
    id: 369,
    type: "single_choice",
    question: "适用于较长距离和较大物体的探测用(",
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
    id: 370,
    type: "single_choice",
    question: "转盘上用于转盘原点检测的传感器是(",
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
    id: 371,
    type: "single_choice",
    question: "机器人快换夹具是由哪种电磁阀控制的(",
    options: {
      A: "单电控电磁阀",
      B: "双电控电磁阀",
      C: "电磁阀组",
      D: "两位五通电磁阀"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 372,
    type: "single_choice",
    question: "机器人手抓使用哪种电磁阀控制的(",
    options: {
      A: "单电控电磁阀",
      B: "双电控电磁阀",
      C: "电磁阀组",
      D: "两位五通电磁阀"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 373,
    type: "single_choice",
    question: "在整个工作流程中多次搬运物料时，避免重复示教我们可以( )。",
    options: {
      A: "新建多个程序",
      B: "把重复部分写在子程序",
      C: "只用一个程序",
      D: "以上都不对"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 374,
    type: "single_choice",
    question: "在该设备中供料模块采用( )作为有无物料检测。",
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
    id: 375,
    type: "single_choice",
    question: "在示教模式我们可以采用I/O界面来控制( )。",
    options: {
      A: "快换夹具加紧、放松",
      B: "手抓夹紧、放松",
      C: "吸盘动作",
      D: "以上都可以"
    },
    answer: "D",
    category: "IO控制"
  },
  {
    id: 376,
    type: "single_choice",
    question: "机器人搬运程序设计的一般要求为（ ）。",
    options: {
      A: "过程简洁",
      B: "安全快速",
      C: "位置准确",
      D: "以上都是"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 377,
    type: "single_choice",
    question: "工业机器人计时器的数量共有（ ）个。",
    options: {
      A: "5",
      B: "10",
      C: "15",
      D: "无数"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 378,
    type: "single_choice",
    question: "关于YL-18型设备工艺流程组的电机装配任务，需要用到（）个机器人夹具。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    category: "设备维护"
  },
  {
    id: 379,
    type: "single_choice",
    question: "发那科机器人码垛堆积种类数量为（ ）。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "6"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 380,
    type: "single_choice",
    question: "工业机器人可用于哪些用途（ ）。",
    options: {
      A: "搬运",
      B: "码垛",
      C: "装配",
      D: "以上都是"
    },
    answer: "D",
    category: "行业应用"
  },
  {
    id: 381,
    type: "single_choice",
    question: "工业机器人码垛的优势是（ ）。",
    options: {
      A: "占地面积少",
      B: "适用性强",
      C: "能耗低",
      D: "以上都是"
    },
    answer: "D",
    category: "行业应用"
  },
  {
    id: 382,
    type: "single_choice",
    question: "对程序的优化和调整即为优化程序的（ ）。",
    options: {
      A: "语句",
      B: "指令",
      C: "结构",
      D: "参数"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 383,
    type: "single_choice",
    question: "关于YL-18型设备电机装配任务中，RFID检测的数据为4，则机器人通常要将该物料放置于（ ）库位。",
    options: {
      A: "1号",
      B: "2号",
      C: "3号",
      D: "4号"
    },
    answer: "D",
    category: "传感器应用"
  },
  {
    id: 384,
    type: "single_choice",
    question: "多边形搬运任务中，RFID检测的数据为1，则机器人会将该物料放置于（）。",
    options: {
      A: "1号位",
      B: "2号位",
      C: "3号位",
      D: "4号位"
    },
    answer: "A",
    category: "传感器应用"
  },
  {
    id: 385,
    type: "single_choice",
    question: "电机装配任务中，机器人抓取装配好的电机，需要进行（）检测实现智能入库。",
    options: {
      A: "压力传感器",
      B: "RFID",
      C: "光电传感器",
      D: "称重传感器"
    },
    answer: "B",
    category: "传感器应用"
  },
  {
    id: 386,
    type: "single_choice",
    question: "码垛机械手的特点有(",
    options: {
      A: "质量稳定",
      B: "性价比高",
      C: "示教简单",
      D: "以上都是"
    },
    answer: "D",
    category: "行业应用"
  },
  {
    id: 387,
    type: "single_choice",
    question: "搬运玻璃等大表面光滑的工件时，较为恰当的末端执行装置为（）。",
    options: {
      A: "夹持式",
      B: "钩脱式",
      C: "吸附式",
      D: "多指灵巧手"
    },
    answer: "C",
    category: "设备维护"
  },
  {
    id: 388,
    type: "single_choice",
    question: "装配机器人的规格确定，不考虑以下哪个问题(",
    options: {
      A: "作业行程",
      B: "机器重量",
      C: "工作速度",
      D: "承载能力"
    },
    answer: "B",
    category: "机器人操作基础"
  },
  {
    id: 389,
    type: "single_choice",
    question: "本设备使用的搬运模块需要使用的夹具为(",
    options: {
      A: "吸盘夹具",
      B: "夹持式夹具",
      C: "笔型夹具",
      D: "焊接夹具"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 390,
    type: "single_choice",
    question: "本设备使用的码垛模块需要使用的夹具为(",
    options: {
      A: "吸盘夹具",
      B: "夹持式夹具",
      C: "笔型夹具",
      D: "焊接夹具"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 391,
    type: "single_choice",
    question: "本设备使用的电机装配模块需要使用的夹具为（）。",
    options: {
      A: "吸盘夹具",
      B: "夹持式夹具",
      C: "笔型夹具",
      D: "焊接夹具"
    },
    answer: "B",
    category: "设备维护"
  },
  {
    id: 392,
    type: "single_choice",
    question: "在编制程序时，同一段逻辑语句，我们可以选择用（）工具简化编程。",
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
    id: 393,
    type: "single_choice",
    question: "关于YL-18型设备在电机装配的工作任务中（1）抓取电机转子、（2）抓取电机定子、（3）抓取机器人手爪、（4）RFID检测、（5）成品入库，正确的工作流程是（）。",
    options: {
      A: "1、2、3、4、5",
      B: "3、2、1、4、5",
      C: "3、1、2、4、5",
      D: "3、4、1、2、5"
    },
    answer: "C",
    category: "行业应用"
  },
  {
    id: 394,
    type: "single_choice",
    question: "关于YL-18型电机装配任务中，电机的入库方式是（ ）。",
    options: {
      A: "对号入库",
      B: "顺序入库",
      C: "由上往下",
      D: "由左往右"
    },
    answer: "A",
    category: "行业应用"
  },
  {
    id: 395,
    type: "single_choice",
    question: "关于YL-18型电机装配任务中，机器人工具用不到的是（ ）。",
    options: {
      A: "吸盘",
      B: "平行手爪",
      C: "V型手爪",
      D: "都要用到"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 396,
    type: "single_choice",
    question: "工业机器人在各行业应用中，用于涂胶的机器人，我们称为（ ）。",
    options: {
      A: "焊接机器人",
      B: "喷涂机器人",
      C: "装配机器人",
      D: "码垛机器人"
    },
    answer: "B",
    category: "行业应用"
  },
  {
    id: 397,
    type: "single_choice",
    question: "我们称为喷涂机器人具有两个功能（ ）。",
    options: {
      A: "喷漆和涂漆",
      B: "喷胶和涂胶",
      C: "喷漆和涂胶",
      D: "喷胶和涂漆"
    },
    answer: "C",
    category: "行业应用"
  },
  {
    id: 398,
    type: "single_choice",
    question: "在编写程序时，想在相邻二行之间在写一行指令的方法为（ ）。",
    options: {
      A: "光标移至上方行，再选择插入行",
      B: "光标移至下方行，再选择插入行",
      C: "随意位置，选择插入行",
      D: "下方行出直接添加自己所需的指令"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 399,
    type: "single_choice",
    question: "机器人吸盘在吸取物料时出现漏吸是因为（ ）。",
    options: {
      A: "气流量太小",
      B: "吸盘损坏",
      C: "气管漏气",
      D: "以上都可能"
    },
    answer: "D",
    category: "设备维护"
  },
  {
    id: 400,
    type: "single_choice",
    question: "机器人平行手爪抓取电机转子时要把手爪表面与转子侧面平行可以用（）来调节最快。",
    options: {
      A: "重定位动作",
      B: "直线动作",
      C: "线性动作",
      D: "关节动作"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 401,
    type: "single_choice",
    question: "关于YL-18型设备输送模块在调试时，平皮带的传动条件为（）。",
    options: {
      A: "检测到物料时开始传动",
      B: "一直保持传动",
      C: "手动强制才会传动",
      D: "每50s传动20s"
    },
    answer: "A",
    category: "设备维护"
  },
  {
    id: 402,
    type: "single_choice",
    question: "机器人搬运编程中需要注意的事项有( )。",
    options: {
      A: "机器人在接近工件时，手动操纵的速度要尽可能的快",
      B: "当气爪闭合抓紧工件时，要使机器人倾斜上升",
      C: "在不同工位调整机器人姿态时，尽量让机器人在路径上一边运动一边调整姿态",
      D: "机器人离开工作区运动时，要以最小的速度运行"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 403,
    type: "single_choice",
    question: "机器人码垛编程中的工艺要求有（",
    options: {
      A: "吸盘夹具姿态保持与工件表面平行",
      B: "运行轨迹要求平缓流畅，放置工件平缓准确",
      C: "码放物料整齐，无明显缝隙和位置偏差",
      D: "以上都是"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 404,
    type: "single_choice",
    question: "机器人装配编程中的工艺要求有（）",
    options: {
      A: "机器人手爪需要精确定位",
      B: "运行精度高、速度平稳",
      C: "保证所装配零件间的精度要求",
      D: "以上都是"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 405,
    type: "single_choice",
    question: "机器人涂胶编程中的工艺要求有（）",
    options: {
      A: "胶枪姿态尽量垂直于工件表面",
      B: "胶枪针头位于待涂胶部位缝隙中，且不与工件接触",
      C: "运行轨迹平缓流畅，不能撞上工件损坏针头",
      D: "以上都是"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 406,
    type: "single_choice",
    question: "由供料、输送、码垛组成的综合应用，工艺流程为（）1、供料单元完成供料2、机器人抓取相应夹具3、输送带输送物料至末端4、机器人码垛5、机器人抓取物料。",
    options: {
      A: "13254",
      B: "32145",
      C: "14235",
      D: "31524"
    },
    answer: "A",
    category: "行业应用"
  },
  {
    id: 407,
    type: "single_choice",
    question: "关于YL-18型设备RFID模块的读写头检测载码体的距离为（）。",
    options: {
      A: "1~2mm",
      B: "2~5cm",
      C: "5~10mm",
      D: "5~10cm"
    },
    answer: "B",
    category: "传感器应用"
  },
  {
    id: 408,
    type: "single_choice",
    question: "机器人在进行物料入库时如果仓库有物料，机器人会（）。",
    options: {
      A: "等待物料取出后继续运行",
      B: "机器人停止",
      C: "机器人急停",
      D: "机器人继续执行程序"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 409,
    type: "single_choice",
    question: "机器人在抓取快换夹具的时候要（",
    options: {
      A: "直接抓取",
      B: "把快换夹具置于放松状态",
      C: "把快换夹具置于抓紧状态",
      D: "手动安装"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 410,
    type: "single_choice",
    question: "机器人电机装配要用到3个夹具，我们可把夹具抓取和放回分为几个子程序( )。",
    options: {
      A: "3个",
      B: "4个",
      C: "5个",
      D: "6个"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 411,
    type: "single_choice",
    question: "当发现机器人手指的开合与调试信号逻辑相反时，正确的做法为（）。",
    options: {
      A: "更换节流阀",
      B: "调节节流阀气压",
      C: "调节手指位置",
      D: "对调手指气缸进气管与出气管的一端"
    },
    answer: "D",
    category: "设备维护"
  },
  {
    id: 412,
    type: "single_choice",
    question: "图尔克RFID检测到物料时会（",
    options: {
      A: "灯光由黄变红",
      B: "灯光连续闪烁",
      C: "灯光亮度提升",
      D: "灯光亮度下降"
    },
    answer: "B",
    category: "传感器应用"
  },
  {
    id: 413,
    type: "single_choice",
    question: "关于YL-18型设备物料进行RFID检测时应该（",
    options: {
      A: "越靠近越好",
      B: "在RFID读写器上方合适的距离左右移动检测",
      C: "在RFID读写器左侧检测",
      D: "在RFID读写器右侧检测"
    },
    answer: "B",
    category: "传感器应用"
  },
  {
    id: 414,
    type: "single_choice",
    question: "发那科机器人高级编程功能，以下为码垛指令的是（）。",
    options: {
      A: "FOR",
      B: "CALL",
      C: "PALLETIZING",
      D: "OFFSET"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 415,
    type: "single_choice",
    question: "工业机器人手部的位姿是由（ ）构成的。",
    options: {
      A: "位置与速度",
      B: "姿态与位置",
      C: "位置与运行状态",
      D: "姿态与速度"
    },
    answer: "B",
    category: "机器人操作基础"
  },
  {
    id: 416,
    type: "single_choice",
    question: "对程序的优化和调整即为优化程序的( )。",
    options: {
      A: "语句",
      B: "指令",
      C: "结构",
      D: "参数"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 417,
    type: "single_choice",
    question: "程序的优化中下列不适合使用示教编程的为( )。",
    options: {
      A: "货物码垛",
      B: "车轮点焊",
      C: "轮毂去毛刺",
      D: "零件装配"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 418,
    type: "single_choice",
    question: "程序可以被复制，但是程序名不能相同，其复制过来的程序点位数据( )。",
    options: {
      A: "保持不变",
      B: "完全丢失",
      C: "逻辑改变",
      D: "名称相同，数据丢失"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 419,
    type: "single_choice",
    question: "在编制程序时，同一段逻辑语句，我们可以选择( )工具简化编程。",
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
    id: 420,
    type: "single_choice",
    question: "职业道德活动中，对客人做到 ( )是符合语言规范的具体要求的。",
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
    id: 421,
    type: "single_choice",
    question: "职业道德对企业起到( )的作用。",
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
    id: 422,
    type: "single_choice",
    question: "从业人员在职业活动中做到( )是符合语言规范的具体。",
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
    id: 423,
    type: "single_choice",
    question: "（）是指个人对职业的看法和想法，他是职业生活的最初动力。",
    options: {
      A: "职业意识",
      B: "岗位评估",
      C: "职业生涯规划",
      D: "自我评价"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 424,
    type: "single_choice",
    question: "我们将人们在进行职业活动的过程中，一切符合职业要求的心理意识、行为准则和行为规范的总和称之为（ ）。",
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
    id: 425,
    type: "single_choice",
    question: "万一发生火灾，请使用（）对机器人进行灭火( )。",
    options: {
      A: "二氧化碳灭火器",
      B: "泡沫灭火器",
      C: "水",
      D: "拖把"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 426,
    type: "single_choice",
    question: "工业机器人工作站安全装置包括( )。",
    options: {
      A: "安全栅栏",
      B: "安全门",
      C: "安全插销和槽",
      D: "以上都是"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 427,
    type: "single_choice",
    question: "为保障人身安全，在正常情况下，电气设备的安全电压规定为( )。",
    options: {
      A: "42V",
      B: "36V",
      C: "24V",
      D: "12V"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 428,
    type: "single_choice",
    question: "（ ）是一种良好的职业精神和职业修养，是一种软实力。",
    options: {
      A: "职业技能",
      B: "职业素养",
      C: "职业计划",
      D: "以上选项都不正确"
    },
    answer: "B",
    category: "职业道德"
  },
  {
    id: 429,
    type: "single_choice",
    question: "为了确保安全，用示教编程器手动运行机器人时，机器人的最高速度限制为（ ）。",
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
    id: 430,
    type: "single_choice",
    question: "当在机器人危险区域工作时，很关键的是要用（ ）操作机器人。",
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
    id: 431,
    type: "single_choice",
    question: "下列选项中属于职业道德作用的是( )。",
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
    id: 432,
    type: "single_choice",
    question: "职业道德就是人们在（ )的职业活动中应遵循的行为规范的总和。",
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
    id: 433,
    type: "single_choice",
    question: "文明礼貌的职业道德规范要求员工做到( )。",
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
    id: 434,
    type: "single_choice",
    question: "在职业交往活动中，符合仪表端庄具体要求的是( )。",
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
    id: 435,
    type: "single_choice",
    question: "职业纪律是企业的行为规范，职业纪律具有( )的特点。",
    options: {
      A: "明确的规定性",
      B: "高度的强制性",
      C: "通用性",
      D: "自愿性"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 436,
    type: "single_choice",
    question: "职业道德是一种（ ）的约束机制。",
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
    id: 437,
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
    id: 438,
    type: "single_choice",
    question: "职业道德是人们事业成功的( )。",
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
    id: 439,
    type: "single_choice",
    question: "职业道德与人们事业的关系是( )。",
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
    id: 440,
    type: "single_choice",
    question: "下列说法中，不符合语言规范具体要求的是( )。",
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
    id: 441,
    type: "single_choice",
    question: "对待职业和岗位，（ ）并不是爱岗敬业所要求的。",
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
    id: 442,
    type: "single_choice",
    question: "下列选项中，关于职业道德与人们事业成功的关系的叙述中正确的是()。",
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
    id: 443,
    type: "single_choice",
    question: "( )是人的综合素养的主题和核心。",
    options: {
      A: "职业技能",
      B: "职业行为",
      C: "职业意识",
      D: "职业素养"
    },
    answer: "D",
    category: "职业道德"
  },
  {
    id: 444,
    type: "single_choice",
    question: "（）对职业生涯发展具有决定性作用。",
    options: {
      A: "职业生涯规划",
      B: "职业素养",
      C: "职业技能",
      D: "身体状况"
    },
    answer: "B",
    category: "职业道德"
  },
  {
    id: 445,
    type: "single_choice",
    question: "（ ）是指个人对职业的看法和想法，他是职业生活的最初动力。",
    options: {
      A: "职业意识",
      B: "岗位评估",
      C: "职业生涯规划",
      D: "自我评价"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 446,
    type: "single_choice",
    question: "（ ）是职业人最为重要的职业素质之一，是从业人员在生产活动中必须遵循的行为准则。",
    options: {
      A: "岗位道德素养",
      B: "岗位担当素养",
      C: "岗位服务素养",
      D: "岗位安全素养"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 447,
    type: "single_choice",
    question: "职业纪律是从事这一职业的员工应该共同遵守的行为准则，它包括的内容有( )。",
    options: {
      A: "交往规则",
      B: "操作程序",
      C: "群众观念",
      D: "外事纪律"
    },
    answer: "D",
    category: "职业道德"
  },
  {
    id: 448,
    type: "single_choice",
    question: "（ ）是要求大家共同遵守的办事规程或行动准则。",
    options: {
      A: "组织",
      B: "文化",
      C: "制度",
      D: "环境"
    },
    answer: "C",
    category: "职业道德"
  },
  {
    id: 449,
    type: "single_choice",
    question: "下列选项属于正确的求职择业心理的是（ ）。",
    options: {
      A: "自卑畏缩",
      B: "盲目从众",
      C: "正视挫折",
      D: "过度依赖"
    },
    answer: "C",
    category: "职业道德"
  },
  {
    id: 450,
    type: "single_choice",
    question: "我们将人们在进行职业活动的过程中，一切符合职业要求的心理意识、行为准则和行为规范的总和称之为（ ）。",
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
    id: 451,
    type: "single_choice",
    question: "( )是职业人最为重要的职业素质之一，是从业人员在生产活动中必须遵循的行为准则。",
    options: {
      A: "岗位道德素养",
      B: "岗位担当素养",
      C: "岗位复位素养",
      D: "岗位安全素养"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 452,
    type: "single_choice",
    question: "以下（ ）有伤害人身安全隐患的存在？",
    options: {
      A: "测试机器人负载时，远离机器人工作范围并确认周围无其他人员",
      B: "有人员在作业范围内使用高速模式验证程序和干涉区",
      C: "降低机器人速度",
      D: "在安全门以外"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 453,
    type: "single_choice",
    question: "必须在（ ）的情况下进行调试。",
    options: {
      A: "认识程序模板",
      B: "小心翼翼",
      C: "没要求",
      D: "了解工作流程及工艺流程"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 454,
    type: "single_choice",
    question: "在非项目机器人标准/工艺要求过渡点（ ）。",
    options: {
      A: "任何动作指令都可以",
      B: "只能用直线指令",
      C: "禁止用直线指令",
      D: "没要求"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 455,
    type: "single_choice",
    question: "在出现盲区时，需要怎么做（ ）。",
    options: {
      A: "走单步运行程序",
      B: "相信之前同事做的很好",
      C: "凭感觉慢慢运行程序",
      D: "及时向上级申请增加人员进行协同作业"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 456,
    type: "single_choice",
    question: "首次联动或手动运行速度必须从（ ）%以下开始。",
    options: {
      A: "10",
      B: "15",
      C: "20",
      D: "25"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 457,
    type: "single_choice",
    question: "在自动联调是禁止手离开急停按钮，特殊情况下( )。",
    options: {
      A: "眼睛注意观察",
      B: "必须一步内触碰急停按钮",
      C: "注意观察程序",
      D: "没要求"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 458,
    type: "single_choice",
    question: "若机器人运行中发生碰撞，以下措施不正确的是( )。",
    options: {
      A: "若有快换夹具在机器人上，可通过示教器强制I/O信号，并用手接好卸下的快换",
      B: "确认周围安全的情况下，手动低速尝试关节动作",
      C: "尽最快的速度按下急停按钮",
      D: "在没有其他人员一起协助的情况下，直接按下控制柜抱闸释放按钮"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 459,
    type: "single_choice",
    question: "万一发生火灾，请使用（）对机器人进行灭火。",
    options: {
      A: "二氧化碳灭火器",
      B: "泡沫灭火器",
      C: "水",
      D: "拖把"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 460,
    type: "single_choice",
    question: "工业机器人工作站安全装置包括( )。",
    options: {
      A: "安全栅栏",
      B: "安全门",
      C: "安全插销和槽",
      D: "以上都是"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 461,
    type: "single_choice",
    question: "为保障人身安全，在正常情况下，电气设备的安全电压规定为( )。",
    options: {
      A: "42V",
      B: "36V",
      C: "24V",
      D: "12V"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 462,
    type: "single_choice",
    question: "职业道德是指从事一定职业劳动的人们，在长期的职业活动中形成的( )。",
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
    id: 463,
    type: "single_choice",
    question: "职业道德是人们事业成功的( )。",
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
    id: 464,
    type: "single_choice",
    question: "职业道德与人们事业的关系是（",
    options: {
      A: "有职业道德的人一定能够获得事业成功",
      B: "没有职业道德的人不会获得成功",
      C: "事业成功的人往往具有较高的职业道德",
      D: "缺乏职业道德的人往往更容易获得成功"
    },
    answer: "C",
    category: "职业道德"
  },
  
  // 判断题
  {
    id: 465,
    type: "true_false",
    question: "机器人示教器有效开关处于OFF状态时示教编程、手动操作不能使用。",
    answer: "true",
    category: "机器人操作基础"
  },
  {
    id: 466,
    type: "true_false",
    question: "TP上用于在单步执行和连续执行之间切换的按钮是RESET。",
    answer: "false",
    category: "示教编程"
  },
  {
    id: 467,
    type: "true_false",
    question: "机器人自动运行时，示教器旋钮开关要打到OFF状态。",
    answer: "true",
    category: "机器人操作基础"
  },
  {
    id: 468,
    type: "true_false",
    question: "机器人示教器上的急停按钮按下机器人立即断电。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 469,
    type: "true_false",
    question: "机器人安全开关被按到中间档位，机器人电机才能上电。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 470,
    type: "true_false",
    question: "发那科机器人可以设置各国语言。",
    answer: "false",
    category: "系统设置"
  },
  {
    id: 471,
    type: "true_false",
    question: "机器人手动单轴操作时应选用关节坐标系。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 472,
    type: "true_false",
    question: "发那科机器人系统中切换坐标系的快捷键是[STEP]。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 473,
    type: "true_false",
    question: "机器人做重定位动作时应选择直角坐标系。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 474,
    type: "true_false",
    question: "发那科机器人系统中工具坐标系可以新建无数个。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 475,
    type: "true_false",
    question: "发那科机器人系统中示教器中 TOOL1 按键的作用是调用工具坐标 1。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 476,
    type: "true_false",
    question: "在工具台上抓取工具时最好选择世界坐标系。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 477,
    type: "true_false",
    question: "发那科机器人示教器中 TOOL1 按键的作用是显示工具 1 画面。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 478,
    type: "true_false",
    question: "机器人重定位动作是检验工具坐标系的方法。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 479,
    type: "true_false",
    question: "标定工具坐标系有 5 种标定方法。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 480,
    type: "true_false",
    question: "工具坐标系可以用四点法来进行标定。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 481,
    type: "true_false",
    question: "工具坐标系三点法包括（参考点 1、参考点 2、参考点 3）。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 482,
    type: "true_false",
    question: "工具坐标系设定六点法包括（参考点 1、参考点 2、参考点 3、坐标原点、X 轴方向、Z 轴方向）。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 483,
    type: "true_false",
    question: "直接输入法可用于工具坐标系的标定。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 484,
    type: "true_false",
    question: "控制机器人改变工具姿态而不改变尖端点位置是用来检验用户坐标系的方法。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 485,
    type: "true_false",
    question: "工具坐标标定最少需要 4 个点。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 486,
    type: "true_false",
    question: "检验用户坐标系的方法是：选择标定好的用户坐标，使机器人沿工件表面 X 方向、Y 方向移动，看移动轨迹是否与工件表面平行。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 487,
    type: "true_false",
    question: "发那科机器人设定用户坐标有 3 种方法。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 488,
    type: "true_false",
    question: "发那科机器人三点法标定用户坐标包括原点、X 轴方向、Y 轴方向。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 489,
    type: "true_false",
    question: "发那科机器人用户坐标系是用户对于机器人工具进行定义的直角坐标系。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 490,
    type: "true_false",
    question: "发那科机器人用户坐标尚未定义时将被工具坐标系所替代。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 491,
    type: "true_false",
    question: "发那科机器人用户坐标系是基于世界坐标系而设定的。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 492,
    type: "true_false",
    question: "直接输入法可用于用户坐标系的标定。",
    answer: "true",
    category: "坐标系设置"
  },
  {
    id: 493,
    type: "true_false",
    question: "用户坐标系不可以在复杂曲面上进行设定。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 494,
    type: "true_false",
    question: "用户坐标系是基于工具坐标系而设定的。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 495,
    type: "true_false",
    question: "机器人启动时操作人员应站在机器人工作范围外。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 496,
    type: "true_false",
    question: "当机器人手动操作时将要发生碰撞的情况下应立即释放示教器安全开关。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 497,
    type: "true_false",
    question: "按下示教器急停按钮时，机器人和示教器电源断开。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 498,
    type: "true_false",
    question: "关于YL-18设备在电机装配工作中使用的是吸盘来吸取工件。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 499,
    type: "true_false",
    question: "机器人线性动作时要选择关节坐标系。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 500,
    type: "true_false",
    question: "机器人直线抓取工件示教程序时最好使用用户坐标系。",
    answer: "false",
    category: "坐标系设置"
  },
  {
    id: 501,
    type: "true_false",
    question: "发那科机器人标准系统中同时能执行多个主程序。",
    answer: "false",
    category: "程序编辑"
  },
  {
    id: 502,
    type: "true_false",
    question: "发那科机器人系统中程序名可以随便命名。",
    answer: "false",
    category: "程序编辑"
  },
  {
    id: 503,
    type: "true_false",
    question: "发那科机器人系统中程序名最多可以有8个字符。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 504,
    type: "true_false",
    question: "所有的程序都可以作为主程序。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 505,
    type: "true_false",
    question: "程序选择单步运行时，需要按下FWD键程序会向下执行。",
    answer: "true",
    category: "示教编程"
  },
  {
    id: 506,
    type: "true_false",
    question: "程序选择单步运行时，需要按下BWD键程序会向上执行。",
    answer: "true",
    category: "示教编程"
  },
  {
    id: 507,
    type: "true_false",
    question: "连续执行程序时需要调节机器人的速度。",
    answer: "true",
    category: "示教编程"
  },
  {
    id: 508,
    type: "true_false",
    question: "机器人程序运行方式选择连续就是说程序可以一直循环运行。",
    answer: "false",
    category: "示教编程"
  },
  {
    id: 509,
    type: "true_false",
    question: "机器人单步执行程序时需要按[FWD]键程序会向下一步执行。",
    answer: "true",
    category: "示教编程"
  },
  {
    id: 510,
    type: "true_false",
    question: "测试程序时应先使用单步运行来执行程序。",
    answer: "true",
    category: "示教编程"
  },
  {
    id: 511,
    type: "true_false",
    question: "调试程序时检验程序可以直接外部启动。",
    answer: "false",
    category: "示教编程"
  },
  {
    id: 512,
    type: "true_false",
    question: "发那科机器人系统中原点位置数据一般使用位置寄存器来记录。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 513,
    type: "true_false",
    question: "手动调试机器人接近工件时，速度越快越好。",
    answer: "false",
    category: "示教编程"
  },
  {
    id: 514,
    type: "true_false",
    question: "两点之间机器人手爪姿态改变恒大时应使用关节运动指令。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 515,
    type: "true_false",
    question: "机器人从接近工具到抓取工具移出工具台一般用关节运动指令。",
    answer: "false",
    category: "运动指令"
  },
  {
    id: 516,
    type: "true_false",
    question: "示教器上的存储装置接口为USB接口。",
    answer: "true",
    category: "系统设置"
  },
  {
    id: 517,
    type: "true_false",
    question: "机器人电池断电后，重启机器人后需要进行系统恢复。",
    answer: "false",
    category: "系统设置"
  },
  {
    id: 518,
    type: "true_false",
    question: "恢复程序的先决条件是程序已备份。",
    answer: "true",
    category: "系统设置"
  },
  {
    id: 519,
    type: "true_false",
    question: "机器人电池断电后，重启机器人后程序会丢失。",
    answer: "false",
    category: "系统设置"
  },
  {
    id: 520,
    type: "true_false",
    question: "保存用户坐标系和工具坐标系的设置属于机器人系统文件。",
    answer: "true",
    category: "系统设置"
  },
  {
    id: 521,
    type: "true_false",
    question: "用来保存宏命令的设置属于系统文件系统文件。",
    answer: "true",
    category: "系统设置"
  },
  {
    id: 522,
    type: "true_false",
    question: "在编辑程序时可以对整个程序进行复制。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 523,
    type: "true_false",
    question: "发那科机器人系统中在程序编辑中可以进行多段程序一起复制。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 524,
    type: "true_false",
    question: "发那科机器人系统中在程序编辑界面可以修改程序名。",
    answer: "false",
    category: "程序编辑"
  },
  {
    id: 525,
    type: "true_false",
    question: "复制整个程序粘贴时两个程序的程序名可以重复。",
    answer: "false",
    category: "程序编辑"
  },
  {
    id: 526,
    type: "true_false",
    question: "发那科机器人重命名程序在程序目录画面。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 527,
    type: "true_false",
    question: "发那科机器人命名程序可以以数字开头。",
    answer: "false",
    category: "程序编辑"
  },
  {
    id: 528,
    type: "true_false",
    question: "发那科机器人系统变更程序名在程序详细信息设置。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 529,
    type: "true_false",
    question: "两点之间机器人可以用关节运动也可以用直线运动来实现。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 530,
    type: "true_false",
    question: "两点之间机器人轨迹位直线，运动指令是直线运动指令。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 531,
    type: "true_false",
    question: "机器人画出一个整圆必须要六个点。",
    answer: "false",
    category: "运动指令"
  },
  {
    id: 532,
    type: "true_false",
    question: "机器人画出一个圆弧必须最少要两个点。",
    answer: "false",
    category: "运动指令"
  },
  {
    id: 533,
    type: "true_false",
    question: "机器人回原点位置时必须要用关节运动指令。",
    answer: "false",
    category: "运动指令"
  },
  {
    id: 534,
    type: "true_false",
    question: "机器人动作指令中'J'指令的路径为点到点。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 535,
    type: "true_false",
    question: "机器人动作指令中'L'指令的路径为点到直线。",
    answer: "false",
    category: "运动指令"
  },
  {
    id: 536,
    type: "true_false",
    question: "机器人动作指令中'C'指令的路径为圆弧。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 537,
    type: "true_false",
    question: "直线指令修改为圆弧指令是，直线指令中的点将作为圆弧的开始点。",
    answer: "false",
    category: "运动指令"
  },
  {
    id: 538,
    type: "true_false",
    question: "圆弧指令修改为直线指令后将产生两个直线指令的点。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 539,
    type: "true_false",
    question: "添加与上一指令相同的指令时，运动速度将与上一指令相同。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 540,
    type: "true_false",
    question: "运动指令中转弯半径的值越大，机器人位置越准确。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 541,
    type: "true_false",
    question: "将直线运动指令修改为关节运动指令后，点的位置信息不变。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 542,
    type: "true_false",
    question: "将直线运动指令改为圆弧运动指令时圆弧终点的位置数据为空。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 543,
    type: "true_false",
    question: "一般指定位置的时候，点位置信息一般用PR。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 544,
    type: "true_false",
    question: "将直线运动指令改为关节运动指令位置数据会变化。",
    answer: "false",
    category: "运动指令"
  },
  {
    id: 545,
    type: "true_false",
    question: "传感器关联的机器人数据是机器人输入。",
    answer: "true",
    category: "传感器应用"
  },
  {
    id: 546,
    type: "true_false",
    question: "供料机构中物料有无检测传感器是使用光电传感器。",
    answer: "true",
    category: "传感器应用"
  },
  {
    id: 547,
    type: "true_false",
    question: "机器人的手爪电磁阀是由机器人输入控制的。",
    answer: "false",
    category: "IO控制"
  },
  {
    id: 548,
    type: "true_false",
    question: "供料机构中推料气缸不能调节推出和缩回力度。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 549,
    type: "true_false",
    question: "供料机构中推料气缸和顶料气缸的动作顺序是先推料后顶料。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 550,
    type: "true_false",
    question: "供料机构中物料到达检测是使用接近传感器来检测。",
    answer: "false",
    category: "传感器应用"
  },
  {
    id: 551,
    type: "true_false",
    question: "供料机构中顶料气缸后限位是使用光电传感器来检测。",
    answer: "false",
    category: "传感器应用"
  },
  {
    id: 552,
    type: "true_false",
    question: "供料机构中顶料气缸和推料气缸的工作行程是一样的。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 553,
    type: "true_false",
    question: "传感器关联的机器人数据是输出信号。",
    answer: "false",
    category: "传感器应用"
  },
  {
    id: 554,
    type: "true_false",
    question: "发那科机器人用WAITDI信号用来等待数字信号输入。",
    answer: "true",
    category: "IO控制"
  },
  {
    id: 555,
    type: "true_false",
    question: "设备中机器人用来控制快换夹具更换的信号是RO[3]。",
    answer: "false",
    category: "IO控制"
  },
  {
    id: 556,
    type: "true_false",
    question: "机器人程序中需要延时1秒的写法是WAIT1.00(sec)。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 557,
    type: "true_false",
    question: "机器人手爪使用单电控电磁阀控制的。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 558,
    type: "true_false",
    question: "皮带输送模块由交流伺服电机来驱动。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 559,
    type: "true_false",
    question: "皮带输送模块中使用物料到达检测来作为启动机器人抓取动作的外部启动信号。",
    answer: "true",
    category: "IO控制"
  },
  {
    id: 560,
    type: "true_false",
    question: "皮带输送模块中皮带拉的越紧运输物料越稳定。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 561,
    type: "true_false",
    question: "皮带输送模块输送的是两种金属物料。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 562,
    type: "true_false",
    question: "机器人吸盘需要用真空发生器才能工作。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 563,
    type: "true_false",
    question: "机器人等待输送线物料到达，指令写法是WAITDI[101]=ON。",
    answer: "true",
    category: "IO控制"
  },
  {
    id: 564,
    type: "true_false",
    question: "关于YL-18型设备皮带输送模块由直流电机和直流驱动器来驱动。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 565,
    type: "true_false",
    question: "输送带接头接口与中心线不垂直，会导致输送带跑偏。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 566,
    type: "true_false",
    question: "吸盘是由机器人输出通过双控电磁阀来控制。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 567,
    type: "true_false",
    question: "关于YL-18设备中的立体仓库有8个仓位。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 568,
    type: "true_false",
    question: "立体仓库可以放置任何物料。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 569,
    type: "true_false",
    question: "立体仓库每个仓位都有标号，物料入仓需要对号入库。",
    answer: "true",
    category: "行业应用"
  },
  {
    id: 570,
    type: "true_false",
    question: "立体仓库有无物料检测是使用金属传感器来检测的。",
    answer: "false",
    category: "传感器应用"
  },
  {
    id: 571,
    type: "true_false",
    question: "机器人在抓取物料入库时可以使用偏移指令来进行入库。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 572,
    type: "true_false",
    question: "立体仓库检测传感器的检测距离要调到最大。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 573,
    type: "true_false",
    question: "发那科机器人系统在偏移中使用位置寄存器PR进行偏移量的指定。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 574,
    type: "true_false",
    question: "应用程序的编写需要用到的标签跳转指令为JMP/LBL。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 575,
    type: "true_false",
    question: "电机装配任务中装配好的电机需要经过RFID检测后对号入库。",
    answer: "true",
    category: "行业应用"
  },
  {
    id: 576,
    type: "true_false",
    question: "码垛工作任务可以使用机器人的码垛功能来实现。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 577,
    type: "true_false",
    question: "涂胶工作任务中机器人的运动速度和位置精度都要严格把控。",
    answer: "true",
    category: "行业应用"
  },
  {
    id: 578,
    type: "true_false",
    question: "手爪抓取物料时不使用延时效果更好。",
    answer: "false",
    category: "程序编辑"
  },
  {
    id: 579,
    type: "true_false",
    question: "使用单作用电磁阀时，手爪夹紧状态下搬运过程中不能复位对应的输出信号。",
    answer: "true",
    category: "IO控制"
  },
  {
    id: 580,
    type: "true_false",
    question: "优化程序结构可以更清晰编写工作站的工作流程。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 581,
    type: "true_false",
    question: "电机装配任务中，RFID检测的数据为4，则机器人会将该物料放置于4号位。",
    answer: "true",
    category: "行业应用"
  },
  {
    id: 582,
    type: "true_false",
    question: "一个完整的电机装配流程只能写在一个程序中。",
    answer: "false",
    category: "程序编辑"
  },
  {
    id: 583,
    type: "true_false",
    question: "机器人装配编程中的工艺要求有保证所装配零件间的精度要求。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 584,
    type: "true_false",
    question: "机器人涂胶编程中的工艺要求有运行轨迹平缓流畅，不能撞上工件损坏针头。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 585,
    type: "true_false",
    question: "调整和优化程序就是调整程序结构。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 586,
    type: "true_false",
    question: "发那科机器人的计时器有无数个。",
    answer: "false",
    category: "系统设置"
  },
  {
    id: 587,
    type: "true_false",
    question: "在视觉检测模块中，视觉检测的是物料的形状。",
    answer: "false",
    category: "传感器应用"
  },
  {
    id: 588,
    type: "true_false",
    question: "发那科机器人程序编辑中，调用程序的指令是call。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 589,
    type: "true_false",
    question: "使用子函数可以使程序框架更清晰。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 590,
    type: "true_false",
    question: "电气安全检查是杜绝事故防患于未然的必要措施。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 591,
    type: "true_false",
    question: "触电的危险程度完全取决于通过人体的电流大小。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 592,
    type: "true_false",
    question: "操作机器人设备是不能相互说笑嬉闹。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 593,
    type: "true_false",
    question: "维修设备前不经本人验电，均视为有电。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 594,
    type: "true_false",
    question: "职业道德具有自愿性的特点。",
    answer: "false",
    category: "职业道德"
  },
  {
    id: 595,
    type: "true_false",
    question: "职业道德是人们事业成功的重要条件。",
    answer: "true",
    category: "职业道德"
  },
  {
    id: 596,
    type: "true_false",
    question: "职业纪律是企业的行为规范，职业纪律具有随意性的特点。",
    answer: "false",
    category: "职业道德"
  },
  {
    id: 597,
    type: "true_false",
    question: "职业纪律中包括群众纪律。",
    answer: "true",
    category: "职业道德"
  },
  {
    id: 598,
    type: "true_false",
    question: "事业成功的人往往具有较高的职业道德。",
    answer: "true",
    category: "职业道德"
  },
  {
    id: 599,
    type: "true_false",
    question: "职业道德是从业人员职业资质评价的唯一指标。",
    answer: "false",
    category: "职业道德"
  },
  {
    id: 600,
    type: "true_false",
    question: "为了防止触电可采用绝缘、防护。隔离等技术措施以保障安全。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 601,
    type: "true_false",
    question: "工作人员进入设备调试区现场禁止穿拖鞋、凉鞋。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 602,
    type: "true_false",
    question: "只要在学校学好一门专业，就可以一辈子不需要再进行学习。",
    answer: "false",
    category: "职业道德"
  },
  {
    id: 603,
    type: "true_false",
    question: "职业技能是指从业者就业所需的技术和能力。",
    answer: "true",
    category: "职业道德"
  },
  {
    id: 604,
    type: "true_false",
    question: "装设漏电保护装置作用，是为了保证在故障情况下人身和设备安全。",
    answer: "true",
    category: "安全操作"
  }
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

// 导出题目总数
export const totalQuestions = questionBank.length;
    