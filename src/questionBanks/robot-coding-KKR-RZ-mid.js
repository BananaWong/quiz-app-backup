// 工业机器人应用编程职业技能等级理论知识考核题库（KKR-RZ中级）
export const questionBank = [
  // 单选题部分 (1-360)
  {
    id: 1,
    type: "single_choice",
    question: "（ ）输入，表示输入输出端的值存储在系统变量中，并且此输入输出端已写保护。",
    options: {
      A: "SYS",
      B: "SIM", 
      C: "SIMS",
      D: "TRUE"
    },
    answer: "A",
    category: "输入输出控制"
  },
  {
    id: 2,
    type: "single_choice",
    question: "外部IO接线，数字输入和数字输出接线均为（ ）V。",
    options: {
      A: "20",
      B: "24",
      C: "18", 
      D: "36"
    },
    answer: "B",
    category: "输入输出控制"
  },
  {
    id: 3,
    type: "single_choice",
    question: "机器人初次通电时，用于接入库卡示教器SMartPAD的控制柜接口为（ ）。",
    options: {
      A: "X21- X31",
      B: "X20- X30",
      C: "X51",
      D: "X19"
    },
    answer: "D",
    category: "KUKA机器人操作"
  },
  {
    id: 4,
    type: "single_choice",
    question: "机器人初次通电时，用于接入库卡零点校正工具，校正机器人零点的机器人本体接口为（ ）。",
    options: {
      A: "X21- X31",
      B: "X20- X30",
      C: "X32",
      D: "X19"
    },
    answer: "C",
    category: "零点标定"
  },
  {
    id: 5,
    type: "single_choice",
    question: "（ ）控制柜接口是指控制柜到机器人本体的动力线。",
    options: {
      A: "X21- X31",
      B: "X20- X30",
      C: "X32",
      D: "X19"
    },
    answer: "B",
    category: "KUKA机器人操作"
  },
  {
    id: 6,
    type: "single_choice",
    question: "在库卡机器人的输入输出接口配置中按键状态（ ）表示，在显示中切换到之前的100个输入或输出端。",
    options: {
      A: "+10",
      B: "+100",
      C: "-10",
      D: "-100"
    },
    answer: "D",
    category: "输入输出控制"
  },
  {
    id: 7,
    type: "single_choice",
    question: "在库卡机器人的输入输出接口配置中按键状态（ ）表示，在显示中切换到之后的100个输入或输出端。",
    options: {
      A: "+10",
      B: "+100",
      C: "-10",
      D: "-100"
    },
    answer: "B",
    category: "输入输出控制"
  },
  {
    id: 8,
    type: "single_choice",
    question: "动态ANOUT联机最多可以同时接通（ ）个动态模拟输出端。",
    options: {
      A: "2",
      B: "4",
      C: "6",
      D: "8"
    },
    answer: "B",
    category: "输入输出控制"
  },
  {
    id: 9,
    type: "single_choice",
    question: "在（ ）指令组中选择DOUT指令，可创建数字量输出信号。",
    options: {
      A: "输入输出模块",
      B: "系统及技术",
      C: "坐标系统和工具",
      D: "基本类别"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 10,
    type: "single_choice",
    question: "在IO的信号点查看中，需要查看KUKA机器人本体的IO，则选择（ ）。",
    options: {
      A: "Board10",
      B: "Board8",
      C: "profibus8",
      D: "profibus10"
    },
    answer: "A",
    category: "输入输出控制"
  },
  {
    id: 11,
    type: "single_choice",
    question: "在IO的信号点查看中，需要查看KUKA机器人与PLC之间的IO，则选择（ ）进行。",
    options: {
      A: "Board10",
      B: "Board8",
      C: "profibus8",
      D: "profibus10"
    },
    answer: "C",
    category: "输入输出控制"
  },
  {
    id: 12,
    type: "single_choice",
    question: "PLC控制机器人的外围设备IO（ ）是急停输入信号。",
    options: {
      A: "IMSTP",
      B: "HOLD",
      C: "SFSPD",
      D: "RESET"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 13,
    type: "single_choice",
    question: "PLC控制机器人的外围设备IO（ ）是安全护栏输入信号。",
    options: {
      A: "IMSTP",
      B: "HOLD",
      C: "SFSPD",
      D: "RESET"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 14,
    type: "single_choice",
    question: "PLC控制机器人的外围设备IO（ ）是复位输入信号。",
    options: {
      A: "IMSTP",
      B: "HOLD",
      C: "SFSPD",
      D: "RESET"
    },
    answer: "D",
    category: "输入输出控制"
  },
  {
    id: 15,
    type: "single_choice",
    question: "（ ）是指工业机器人执行任务时，其腕轴交点能在空间活动的范围。",
    options: {
      A: "工作空间",
      B: "自由度",
      C: "工作载荷",
      D: "以上都是"
    },
    answer: "A",
    category: "机器人基础知识"
  },
  {
    id: 16,
    type: "single_choice",
    question: "对于编程控制的机器人运动，在程序连续运行，直至程序结尾，在测试过程中必须按住启动键的是（ ）运行方式。",
    options: {
      A: "GO",
      B: "MSTEP",
      C: "ISTEP",
      D: "BSTEP"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 17,
    type: "single_choice",
    question: "对于编程控制的机器人运动，在步进运动方式下，每个运动指令都是单个执行，每一个运动结束后，都必须重新按下启动键的是（ ）运行方式。",
    options: {
      A: "GO",
      B: "MSTEP",
      C: "ISTEP",
      D: "BSTEP"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 18,
    type: "single_choice",
    question: "对于编程控制的机器人运动，在增量步进时，把单句定义也单次运行，每步执行后都必须按下启动键的是（ ）运行方式。",
    options: {
      A: "GO",
      B: "MSTEP",
      C: "ISTEP",
      D: "BSTEP"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 19,
    type: "single_choice",
    question: "在KUKS导航器中编辑smartPAD程序模块，编辑方式为（ ）。",
    options: {
      A: "复制",
      B: "删除",
      C: "重命名",
      D: "以上都是"
    },
    answer: "D",
    category: "KUKA机器人操作"
  },
  {
    id: 20,
    type: "single_choice",
    question: "开机后，示教器黑屏且无任何显示，不可能的原因是（ ）。",
    options: {
      A: "示教器电源供电不正常",
      B: "示教器系统故障",
      C: "示教器硬件出现故障",
      D: "各轴电机抱闸"
    },
    answer: "D",
    category: "故障诊断"
  },
  {
    id: 21,
    type: "single_choice",
    question: "当开机后示教器停留在等待界面一直无法进入，可能的原因是（ ）。",
    options: {
      A: "控制器的状态不正确",
      B: "示教器的网线连接不正常",
      C: "示教器的内部IP设置不正确",
      D: "以上全部"
    },
    answer: "D",
    category: "故障诊断"
  },
  {
    id: 22,
    type: "single_choice",
    question: "设置示教器显示亮度，（ ）账户登录方可设置。",
    options: {
      A: "operator",
      B: "service",
      C: "Administrator",
      D: "不需要"
    },
    answer: "D",
    category: "KUKA机器人操作"
  },
  {
    id: 23,
    type: "single_choice",
    question: "在'ControlPanel'菜单中，选择（ ）选项可弹出示教器亮度设置选项。",
    options: {
      A: "Network",
      B: "Display",
      C: "Screensaver",
      D: "SoftwareVersion"
    },
    answer: "B",
    category: "KUKA机器人操作"
  },
  {
    id: 24,
    type: "single_choice",
    question: "在给机器人进行零点标定时，与EMD连接后在零点标定区域内的EMD都为（ ）颜色时可以进行标定。",
    options: {
      A: "红色",
      B: "橙色",
      C: "绿色",
      D: "黄色"
    },
    answer: "C",
    category: "零点标定"
  },
  {
    id: 25,
    type: "single_choice",
    question: "进行零位矫正时，机器人各轴会移动至目标位置，这个位置被称为（ ）。",
    options: {
      A: "机械零位",
      B: "目标零位",
      C: "预定零位",
      D: "以上都不对"
    },
    answer: "A",
    category: "零点标定"
  },
  {
    id: 26,
    type: "single_choice",
    question: "（ ）是导致机器人零点失效的原因。",
    options: {
      A: "编码器线缆断路",
      B: "编码器电池故障",
      C: "现场工作环境因素的不确定",
      D: "以上全部"
    },
    answer: "D",
    category: "零点标定"
  },
  {
    id: 27,
    type: "single_choice",
    question: "LED指示灯与EMD连接后，测头没有与接口X32相连接，则零点标定LED指示灯显示（ ）。",
    options: {
      A: "红色",
      B: "黄色",
      C: "绿色",
      D: "灰色"
    },
    answer: "A",
    category: "零点标定"
  },
  {
    id: 28,
    type: "single_choice",
    question: "LED指示灯与EMD连接后，测头与接口X32相连接，则零点标定LED指示灯显示（ ）。",
    options: {
      A: "红色",
      B: "黄色",
      C: "绿色",
      D: "灰色"
    },
    answer: "C",
    category: "零点标定"
  },
  {
    id: 29,
    type: "single_choice",
    question: "测头没有与接口X32相连接，则在零点标定区域内的EMD的零点标定LED指示灯显示（ ）。",
    options: {
      A: "红色",
      B: "黄色",
      C: "绿色",
      D: "灰色"
    },
    answer: "D",
    category: "零点标定"
  },
  {
    id: 30,
    type: "single_choice",
    question: "测头位于无法进行零点标定的位置上时，在零点标定区域内的EMD的零点标定LED指示灯显示（ ）。",
    options: {
      A: "红色",
      B: "黄色",
      C: "绿色",
      D: "灰色"
    },
    answer: "A",
    category: "零点标定"
  },
  {
    id: 31,
    type: "single_choice",
    question: "测头直接位于用于零点标定的槽口旁或在凹口中时，在零点标定区域内的EMD的零点标定LED指示灯显示（ ）。",
    options: {
      A: "红色",
      B: "黄色",
      C: "绿色",
      D: "灰色"
    },
    answer: "C",
    category: "零点标定"
  },
  {
    id: 32,
    type: "single_choice",
    question: "进行首次零点标定时应该选择（ ）运行方式。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "EXT"
    },
    answer: "A",
    category: "零点标定"
  },
  {
    id: 33,
    type: "single_choice",
    question: "用千分表标定零点时，应将机器人手动倍率降低到（ ）。",
    options: {
      A: "0.1%",
      B: "1%",
      C: "10%",
      D: "100%"
    },
    answer: "B",
    category: "零点标定"
  },
  {
    id: 34,
    type: "single_choice",
    question: "示教器的背面三个白色按钮是使能开关，用在（ ）模式下。",
    options: {
      A: "T1和T2",
      B: "T1和AUT",
      C: "T2和AUT",
      D: "AUT和EXT"
    },
    answer: "A",
    category: "KUKA机器人操作"
  },
  {
    id: 35,
    type: "single_choice",
    question: "示教器的向后运行键，仅在（ ）模式下有用。",
    options: {
      A: "T1和T2",
      B: "T1和AUT",
      C: "T2和AUT",
      D: "AUT和EXT"
    },
    answer: "A",
    category: "KUKA机器人操作"
  },
  {
    id: 36,
    type: "single_choice",
    question: "选择机器人的操作状态是用示教器的（ ）键。",
    options: {
      A: "状态",
      B: "软",
      C: "菜单",
      D: "NUM"
    },
    answer: "A",
    category: "KUKA机器人操作"
  },
  {
    id: 37,
    type: "single_choice",
    question: "手动或自动模式下，机器人在直角坐标系下走XYZ方向若出现走直线不正确，姿态发生变化的原因可能是（ ）。",
    options: {
      A: "机器人系统不正确",
      B: "电柜与本体编号不一致",
      C: "机器人各轴机械零点不正确",
      D: "以上全部"
    },
    answer: "D",
    category: "故障诊断"
  },
  {
    id: 38,
    type: "single_choice",
    question: "造成示教器触摸不准或停留在校准界面可能的原因是：（ ）。①示教器受到外力振动 ②触摸屏划伤 ③空气潮湿 ④电压不稳",
    options: {
      A: "①②",
      B: "①②③",
      C: "②③④",
      D: "①②③④"
    },
    answer: "A",
    category: "故障诊断"
  },
  {
    id: 39,
    type: "single_choice",
    question: "原点位置校准是在出厂前进行的，但在下列情况必须再次进行原点位置校准：（ ）。①改变机器人与控制柜的组合时 ②更换电机、绝对编码器时 ③存储内存被删除时 ④机器人碰撞工件、原点偏移时",
    options: {
      A: "①②",
      B: "①②③",
      C: "②③④",
      D: "①②③④"
    },
    answer: "D",
    category: "零点标定"
  },
  {
    id: 40,
    type: "single_choice",
    question: "选择并应用屏幕下方显示的功能是（ ）键。",
    options: {
      A: "状态",
      B: "软",
      C: "菜单",
      D: "NUM"
    },
    answer: "B",
    category: "KUKA机器人操作"
  },
  {
    id: 41,
    type: "single_choice",
    question: "在示教器的信息窗口中，（ ）按键主要是用来提示操作者下一步将要做什么的。",
    options: {
      A: "通知信息",
      B: "等待信息",
      C: "对话信息",
      D: "状态信息"
    },
    answer: "A",
    category: "KUKA机器人操作"
  },
  {
    id: 42,
    type: "single_choice",
    question: "机器人各个轴进行单独运动，称为（ ）坐标系。",
    options: {
      A: "轴坐标系",
      B: "世界标系",
      C: "基坐标",
      D: "工具坐标"
    },
    answer: "A",
    category: "坐标系统"
  },
  {
    id: 43,
    type: "single_choice",
    question: "机器人从一点移动到另一点，最好使用（ ）坐标系。",
    options: {
      A: "轴坐标系",
      B: "世界标系",
      C: "基坐标",
      D: "工具坐标"
    },
    answer: "B",
    category: "坐标系统"
  },
  {
    id: 44,
    type: "single_choice",
    question: "气吸附式手部是利用（ ）工作的",
    options: {
      A: "吸盘内的压力和大气压之间的压力差",
      B: "驱动装置的驱动力",
      C: "弹性元件的弹性力",
      D: "通电后产生的电磁吸力"
    },
    answer: "A",
    category: "机器人基础知识"
  },
  {
    id: 45,
    type: "single_choice",
    question: "（ ）是原点安装在机器人末端的工具中心（TCP）处的坐标系，原点及方向都是随着末端与角度不断变化的。",
    options: {
      A: "轴坐标系",
      B: "世界标系",
      C: "基坐标",
      D: "工具坐标"
    },
    answer: "D",
    category: "坐标系统"
  },
  {
    id: 46,
    type: "single_choice",
    question: "（ ）是机器人其他坐标系的参照基础，是机器人示教与编程时常用的坐标系之一。",
    options: {
      A: "轴坐标系",
      B: "世界标系",
      C: "工件坐标系",
      D: "工具坐标"
    },
    answer: "C",
    category: "坐标系统"
  },
  {
    id: 47,
    type: "single_choice",
    question: "通过'mouse position'菜单调整鼠标位置时可以通过-/+软键改变位置，每次调整（ ）度。",
    options: {
      A: "30°",
      B: "45°",
      C: "60°",
      D: "90°"
    },
    answer: "B",
    category: "KUKA机器人操作"
  },
  {
    id: 48,
    type: "single_choice",
    question: "以目标工件或工作台为基准的直角坐标系称（ ）。",
    options: {
      A: "轴坐标系",
      B: "世界标系",
      C: "工件坐标系",
      D: "工具坐标"
    },
    answer: "C",
    category: "坐标系统"
  },
  {
    id: 49,
    type: "single_choice",
    question: "世界坐标系是以（ ）为基点，在这种坐标系中机器人所有的动作都是按照以（ ）为顶点来完成移动的。",
    options: {
      A: "工件",
      B: "关节",
      C: "工作台",
      D: "枪头"
    },
    answer: "C",
    category: "坐标系统"
  },
  {
    id: 50,
    type: "single_choice",
    question: "工具坐标系是直角坐标系，其原点位于工具上。随工具不断移动的坐标系是（ ）。",
    options: {
      A: "轴坐标系",
      B: "世界标系",
      C: "基坐标",
      D: "工具坐标"
    },
    answer: "D",
    category: "坐标系统"
  },
  {
    id: 51,
    type: "single_choice",
    question: "工业机器人的手部又称（ ），是工业机器人直接进行工作的部分，其作用是直接抓取和放置物件，可以是各种手持器。",
    options: {
      A: "手臂",
      B: "立柱",
      C: "末端执行器",
      D: "工具坐标系"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 52,
    type: "single_choice",
    question: "线性滑轨是一个ROBROOT动作装置，线性滑轨移动时机器人在（ ）坐标系中的位置发生变化。",
    options: {
      A: "轴坐标系",
      B: "世界标系",
      C: "基坐标系",
      D: "工具坐标系"
    },
    answer: "B",
    category: "坐标系统"
  },
  {
    id: 53,
    type: "single_choice",
    question: "机器人在世界坐标系中的当前位置由矢量（ ）来描述。",
    options: {
      A: "$WORLD",
      B: "$ERSYSROOT",
      C: "#ERSYS",
      D: "$ROBROOT"
    },
    answer: "D",
    category: "坐标系统"
  },
  {
    id: 54,
    type: "single_choice",
    question: "在示教器的信息窗口中，（ ）按键是用来询问操作者是否进行该操作的。",
    options: {
      A: "通知信息",
      B: "等待信息",
      C: "对话信息",
      D: "状态信息"
    },
    answer: "C",
    category: "KUKA机器人操作"
  },
  {
    id: 55,
    type: "single_choice",
    question: "在示教器的信息窗口中，（ ）按键提示机器人目前所处的状态。",
    options: {
      A: "通知信息",
      B: "等待信息",
      C: "对话信息",
      D: "状态信息"
    },
    answer: "D",
    category: "KUKA机器人操作"
  },
  {
    id: 56,
    type: "single_choice",
    question: "在示教器的信息窗口中，（ ）按键表示某操作正在进行还没有结束。",
    options: {
      A: "通知信息",
      B: "等待信息",
      C: "对话信息",
      D: "状态信息"
    },
    answer: "B",
    category: "KUKA机器人操作"
  },
  {
    id: 57,
    type: "single_choice",
    question: "湿度保持在（ ）库卡机器人示教器能正常工作。",
    options: {
      A: "30%",
      B: "30%到80%",
      C: "80%",
      D: "100%"
    },
    answer: "B",
    category: "环境要求"
  },
  {
    id: 58,
    type: "single_choice",
    question: "示教器按键不良或者不灵，应该更换（ ）。",
    options: {
      A: "触摸面板",
      B: "数据线",
      C: "按键面板",
      D: "高压板"
    },
    answer: "C",
    category: "维护保养"
  },
  {
    id: 59,
    type: "single_choice",
    question: "示教器有显示无背光，应该更换（ ）。",
    options: {
      A: "触摸面板",
      B: "数据线",
      C: "按键面板",
      D: "高压板"
    },
    answer: "D",
    category: "维护保养"
  },
  {
    id: 60,
    type: "single_choice",
    question: "在四点法标定工具坐标系中，对第（ ）个点的方向是有要求的",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "D",
    category: "坐标系统"
  },
  {
    id: 61,
    type: "single_choice",
    question: "四点法中，要求设定最后一个点的方向，使工具坐标系的（ ）与世界坐标系的-Z方向相同",
    options: {
      A: "+X",
      B: "+Y",
      C: "+Z",
      D: "-Z"
    },
    answer: "A",
    category: "坐标系统"
  },
  {
    id: 62,
    type: "single_choice",
    question: "系统内提供了（ ）种方法进行工具坐标系的示教。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "C",
    category: "坐标系统"
  },
  {
    id: 63,
    type: "single_choice",
    question: "建立工具坐标系时，用未知工具示教一个在全局参考系已经示教过的点P，该方法属于（ ）示教方法。",
    options: {
      A: "一点法",
      B: "三点法",
      C: "四点法",
      D: "六点法"
    },
    answer: "A",
    category: "坐标系统"
  },
  {
    id: 64,
    type: "single_choice",
    question: "建立工具坐标时，用未知工具对示教点P进行4个不同姿态的示教，该方法属于（ ）示教方法。",
    options: {
      A: "一点法",
      B: "三点法",
      C: "四点法",
      D: "六点法"
    },
    answer: "C",
    category: "坐标系统"
  },
  {
    id: 65,
    type: "single_choice",
    question: "六点(XZ)示教法中，取一个方向原点、一个与所需工具坐标系平行的X轴方向点、一个XZ平面上的点。此时，通过笛卡尔点动或工具点动进行示教，以使工具的（ ）保持不变。",
    options: {
      A: "垂直",
      B: "倾斜",
      C: "横向",
      D: "纵向"
    },
    answer: "B",
    category: "坐标系统"
  },
  {
    id: 66,
    type: "single_choice",
    question: "采用（ ）示教方法对工具坐标标定，即在机器人附近找一点，使工具中心点对准该点切换姿态，共记录四次，即可自动生成工具坐标系的参数。",
    options: {
      A: "一点法",
      B: "三点法",
      C: "四点法",
      D: "六点法"
    },
    answer: "C",
    category: "坐标系统"
  },
  {
    id: 67,
    type: "single_choice",
    question: "创建工具坐标系，可采用（ ）示教方法，找到示教物体，将机器人的TCP末端示教到示教物体处以不同姿态。",
    options: {
      A: "一点法和三点法",
      B: "三点法和四点法",
      C: "三点法和六点法",
      D: "四点法和六点法"
    },
    answer: "D",
    category: "坐标系统"
  },
  {
    id: 68,
    type: "single_choice",
    question: "焊接机器人一般包括以下哪几个部分：（ ）。①机器人本体 ②机器人控制柜 ③焊接电源系统 ④焊接传感器 ⑤焊接工装工具",
    options: {
      A: "①②③",
      B: "②③④",
      C: "①②③④",
      D: "①②③④⑤"
    },
    answer: "D",
    category: "焊接机器人"
  },
  {
    id: 69,
    type: "single_choice",
    question: "焊接机器人的安装顺序为：（ ）。①焊枪的校准 ②焊机电缆的安装 ③焊机的设定 ④确认送丝阻力与送丝量",
    options: {
      A: "①②③④",
      B: "②①③④",
      C: "②③④①",
      D: "②③①④"
    },
    answer: "C",
    category: "焊接机器人"
  },
  {
    id: 70,
    type: "single_choice",
    question: "焊接机器人焊接前应注意检气，气体流量在大于（ ）ml/min，否则容易出现保护气孔。",
    options: {
      A: "2",
      B: "20",
      C: "3",
      D: "30"
    },
    answer: "D",
    category: "焊接机器人"
  },
  {
    id: 71,
    type: "single_choice",
    question: "机器人通过操纵末端执行器固连打磨工具，完成对工件打磨加工的自动化，称之为工具行打磨机器人。其主要构成有：（ ）。①机器人本体 ②工具系统 ③配置力控制器 ④工件变位机",
    options: {
      A: "①②",
      B: "①②③",
      C: "②③④",
      D: "①②③④"
    },
    answer: "D",
    category: "机器人应用"
  },
  {
    id: 72,
    type: "single_choice",
    question: "焊接机器人进行电弧焊过程中，熔化母材的热量主要来自于（ ）。",
    options: {
      A: "电阻热",
      B: "物理热",
      C: "电弧热",
      D: "化学热"
    },
    answer: "C",
    category: "焊接机器人"
  },
  {
    id: 73,
    type: "single_choice",
    question: "焊接机器人焊接时，接头根部未完全熔透的现象叫（ ）。",
    options: {
      A: "气孔",
      B: "焊瘤",
      C: "凹坑",
      D: "未焊透"
    },
    answer: "D",
    category: "焊接机器人"
  },
  {
    id: 74,
    type: "single_choice",
    question: "焊接机器人工作时，焊接电流太小，易引起（ ）缺陷。",
    options: {
      A: "咬边",
      B: "烧穿",
      C: "夹渣",
      D: "焊瘤"
    },
    answer: "C",
    category: "焊接机器人"
  },
  {
    id: 75,
    type: "single_choice",
    question: "生产过程中为检验焊缝强度进行的拉力试验属于（ ）。",
    options: {
      A: "无损试验",
      B: "金相试验",
      C: "力学性能试验",
      D: "焊缝晶间腐蚀检验"
    },
    answer: "C",
    category: "焊接机器人"
  },
  {
    id: 76,
    type: "single_choice",
    question: "产生焊缝尺寸不符合要求的主要原因是焊件坡口开得不当或装配间隙不均匀及（ ）选择不当。",
    options: {
      A: "焊接工艺参数",
      B: "焊接方法",
      C: "焊接电弧",
      D: "焊接线能量"
    },
    answer: "A",
    category: "焊接机器人"
  },
  {
    id: 77,
    type: "single_choice",
    question: "焊接过种中，熔化金属自坡口背面流出，形成穿孔的缺陷称为（ ）。",
    options: {
      A: "烧穿",
      B: "焊瘤",
      C: "咬边",
      D: "凹坑"
    },
    answer: "A",
    category: "焊接机器人"
  },
  {
    id: 78,
    type: "single_choice",
    question: "如果用外部信号控制机器人运行，机器人的工作模式应选择（ ）。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "EXT"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 79,
    type: "single_choice",
    question: "真空吸盘要求工件表面（ ）、干燥清洁，同时气密性好。",
    options: {
      A: "粗糙",
      B: "凸凹不平",
      C: "平缓突起",
      D: "平整光滑"
    },
    answer: "D",
    category: "机器人基础知识"
  },
  {
    id: 80,
    type: "single_choice",
    question: "同步带传动属于（ ）传动，适合于在电动机和高速比减速器之间使用。",
    options: {
      A: "高惯性",
      B: "低惯性",
      C: "高速比",
      D: "大转矩"
    },
    answer: "B",
    category: "机器人基础知识"
  },
  {
    id: 81,
    type: "single_choice",
    question: "机器人外部传感器不包括（ ）传感器。",
    options: {
      A: "力或力矩",
      B: "接近觉",
      C: "触觉",
      D: "位置"
    },
    answer: "D",
    category: "传感器技术"
  },
  {
    id: 82,
    type: "single_choice",
    question: "焊接机器人的焊接作业主要包括（ ）。",
    options: {
      A: "点焊和弧焊",
      B: "间断焊和连续焊",
      C: "平焊和竖焊",
      D: "气体保护焊和氩弧焊"
    },
    answer: "A",
    category: "焊接机器人"
  },
  {
    id: 83,
    type: "single_choice",
    question: "工业机器人中，用于检测物体接触面之间相对运动大小和方向的传感器是( )。",
    options: {
      A: "接近觉传感器",
      B: "接触觉传感器",
      C: "滑动觉传感器",
      D: "压觉传感器"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 84,
    type: "single_choice",
    question: "使用焊枪示教前，检查焊枪的均压装置是否良好，动作是否正常，同时对电极头的要求是（ ）。",
    options: {
      A: "更换新的电极头",
      B: "使用磨耗量大的电极头",
      C: "新的或旧的都行",
      D: "使用磨耗量小的电极头"
    },
    answer: "A",
    category: "焊接机器人"
  },
  {
    id: 85,
    type: "single_choice",
    question: "正常联动生产时，机器人示教编程器上安全模式不应该打到（ ）位置上。",
    options: {
      A: "操作模式",
      B: "编辑模式",
      C: "管理模式",
      D: "安全模式"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 86,
    type: "single_choice",
    question: "在伺服电机的伺服控制器中，为了获得高性能的控制效果，一般具有3个反馈回路，分别是：（ ）。①电压环 ②电流环 ③功率环 ④速度环 ⑤位置环 ⑥加速度环",
    options: {
      A: "①③⑥",
      B: "②④⑥",
      C: "②④⑤",
      D: "①④⑤"
    },
    answer: "C",
    category: "控制系统"
  },
  {
    id: 87,
    type: "single_choice",
    question: "工业机器人在段式分配中，CPU每次从内存中取一次数据需要（ ）次访问内存。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "控制系统"
  },
  {
    id: 88,
    type: "single_choice",
    question: "工业机器人测速发电机的输出信号为（ ）。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "开关量",
      D: "脉冲量"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 89,
    type: "single_choice",
    question: "下列选项中，不能改善磁盘I/O性能的是（ ）",
    options: {
      A: "重排I/O请求次序",
      B: "在一个磁盘上设置多个分区",
      C: "预读和滞后写",
      D: "优化文件物理块分布"
    },
    answer: "B",
    category: "控制系统"
  },
  {
    id: 90,
    type: "single_choice",
    question: "（ ）是指机器人不进行任何运算，依靠传感器的输入信息能够直接执行机器人下一步任务的能力。",
    options: {
      A: "运算",
      B: "控制",
      C: "决策",
      D: "通信"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 91,
    type: "single_choice",
    question: "伺服控制系统一般包括控制器、被控对象、执行环节、比较环节和( )。",
    options: {
      A: "换向结构",
      B: "转换电路",
      C: "存储电路",
      D: "检测环节"
    },
    answer: "D",
    category: "控制系统"
  },
  {
    id: 92,
    type: "single_choice",
    question: "在工业机器人速度分析和以后的静力学分析中都将遇到类似的雅可比矩阵，我们称之为工业机器人雅可比矩阵，或简称雅可比，一般用符号（ ）表示。",
    options: {
      A: "L",
      B: "P",
      C: "J",
      D: "F"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 93,
    type: "single_choice",
    question: "对机器人进行示教时，模式旋钮打到示教模式后，在此模式中，外部设备的I/O信号（ ）。",
    options: {
      A: "无效",
      B: "有效",
      C: "超前有效",
      D: "滞后有效"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 94,
    type: "single_choice",
    question: "下列关于虚拟存储器的说法，正确的是（ ）",
    options: {
      A: "虚拟存储器可以实现内存空间的无限扩充",
      B: "它是利用内存来仿真外存的一种管理方法",
      C: "它是利用外存来仿真内存的一种管理方法",
      D: "它是由操作系统管理的一个大内存"
    },
    answer: "C",
    category: "控制系统"
  },
  {
    id: 95,
    type: "single_choice",
    question: "喷涂机器人一般采用（ ）驱动，具有动作速度快、防爆性能好等特点。",
    options: {
      A: "气动",
      B: "液压",
      C: "电力",
      D: "步进电机"
    },
    answer: "B",
    category: "机器人应用"
  },
  {
    id: 96,
    type: "single_choice",
    question: "工业机器人驱动类型可以划分为液压驱动、气压驱动、电力驱动和（ ）驱动四种类型。",
    options: {
      A: "电机",
      B: "自动",
      C: "新型",
      D: "智能"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 97,
    type: "single_choice",
    question: "工业机器人机座有固定式和（ ）两种。",
    options: {
      A: "移动式",
      B: "行走式",
      C: "旋转式",
      D: "电动式"
    },
    answer: "B",
    category: "机器人基础知识"
  },
  {
    id: 98,
    type: "single_choice",
    question: "通常所说的焊接机器人主要指的是（ ）①点焊机器人；②弧焊机器人；③等离子焊接机器人；④激光焊接机器人",
    options: {
      A: "①②",
      B: "①②④",
      C: "①③",
      D: "①②③④"
    },
    answer: "B",
    category: "焊接机器人"
  },
  {
    id: 99,
    type: "single_choice",
    question: "机器人的手部也称末端执行器，它是装在机器人的（ ）部上，直接抓握工作或执行作业的部件。",
    options: {
      A: "臂",
      B: "腕",
      C: "手",
      D: "关节"
    },
    answer: "B",
    category: "机器人基础知识"
  },
  {
    id: 100,
    type: "single_choice",
    question: "（ ）是一种动力传达机构，利用齿轮的速度转换器，将电机（马达）的回转数减速到所要的回转数，并得到较大转矩的机构。",
    options: {
      A: "蜗轮减速器",
      B: "齿轮减速器",
      C: "蜗杆减速器",
      D: "涡轮蜗杆减速器"
    },
    answer: "D",
    category: "机器人基础知识"
  },
  {
    id: 101,
    type: "single_choice",
    question: "库卡机器人薄板焊接系统集成特点中，错边量不能超过（ ）板厚，检查定位焊，不符合要求的及时补焊，防止焊接过程中开裂。",
    options: {
      A: "1/3",
      B: "2/3",
      C: "1/2",
      D: "1/4"
    },
    answer: "A",
    category: "焊接机器人"
  },
  {
    id: 102,
    type: "single_choice",
    question: "动作级编程语言又可以分为（ ）和末端执行器编程两种动作编程。",
    options: {
      A: "腕级编程",
      B: "关节级编程",
      C: "手部级编程",
      D: "本体级编程"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 103,
    type: "single_choice",
    question: "下面选项不属于工业机器人子系统是（ ）。",
    options: {
      A: "驱动系统",
      B: "机械结构系统",
      C: "人机交互系统",
      D: "导航系统"
    },
    answer: "D",
    category: "机器人基础知识"
  },
  {
    id: 104,
    type: "single_choice",
    question: "陀螺仪是利用（ ）原理制作的。",
    options: {
      A: "惯性",
      B: "光电效应",
      C: "电磁波",
      D: "超导"
    },
    answer: "A",
    category: "传感器技术"
  },
  {
    id: 105,
    type: "single_choice",
    question: "摩擦带传动是依靠（ ）来传递运动和功率的。",
    options: {
      A: "带与带轮接触面之间的正压力",
      B: "带的紧边拉力",
      C: "带与带轮接触面之间的摩擦力",
      D: "带的松边拉力"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 106,
    type: "single_choice",
    question: "传感器的运用，使得机器人具有了一定的（ ）能力。",
    options: {
      A: "一般",
      B: "重复工作",
      C: "识别判断",
      D: "逻辑思维"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 107,
    type: "single_choice",
    question: "机器人驱动方式有（ ）①手工驱动 ②电力驱动 ③气压驱动 ④液压驱动",
    options: {
      A: "①②",
      B: "①②④",
      C: "②③④",
      D: "①②③④"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 108,
    type: "single_choice",
    question: "电液动换向阀中的电磁阀，应确保电磁阀在中间位置时液动阀两端控制的油路应卸荷，电磁阀的滑阀机能应是（ ）型。",
    options: {
      A: "M",
      B: "Y",
      C: "K",
      D: "H"
    },
    answer: "D",
    category: "控制系统"
  },
  {
    id: 109,
    type: "single_choice",
    question: "工业机器人的主电源开关在什么位置（ ）",
    options: {
      A: "机器人本体上",
      B: "示教器上",
      C: "控制柜上",
      D: "需外接"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 110,
    type: "single_choice",
    question: "传感器包括以下三个功能部件：敏感元件、传感元件、（ ）元件。",
    options: {
      A: "辅助",
      B: "控制",
      C: "执行",
      D: "测量"
    },
    answer: "D",
    category: "传感器技术"
  },
  {
    id: 111,
    type: "single_choice",
    question: "力传感器安装在工业机器人上的位置，通常不会在以下哪个位置（ ）。",
    options: {
      A: "关节驱动器轴上",
      B: "机器人腕部",
      C: "手指指尖",
      D: "机座"
    },
    answer: "D",
    category: "传感器技术"
  },
  {
    id: 112,
    type: "single_choice",
    question: "柱面坐标机器人主要用于重物的（ ）等工作。①装卸 ②分类 ③搬运 ④检测",
    options: {
      A: "①②",
      B: "①③",
      C: "②③",
      D: "①②③④"
    },
    answer: "B",
    category: "机器人应用"
  },
  {
    id: 113,
    type: "single_choice",
    question: "下列指令中属于数字量输入指令组的是（ ）",
    options: {
      A: "IN",
      B: "DOUT",
      C: "OUT",
      D: "DOUTW.Set"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 114,
    type: "single_choice",
    question: "下列指令中属于数字量输出指令组的是（ ）",
    options: {
      A: "OUT",
      B: "IN",
      C: "DIN",
      D: "DIN.Wait"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 115,
    type: "single_choice",
    question: "下列采集的信号不属于数字信号的是（ ）",
    options: {
      A: "按钮的打开和闭合",
      B: "热电偶在工作时输出的电压信号",
      C: "物料的有和无",
      D: "以上都不对"
    },
    answer: "B",
    category: "输入输出控制"
  },
  {
    id: 116,
    type: "single_choice",
    question: "（ ）将数字输出端口设置为TRUE或者FALSE。",
    options: {
      A: "DOUT",
      B: "OUT",
      C: "IN",
      D: "DOUT.Pulse"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 117,
    type: "single_choice",
    question: "在按下示教器上的点动按键之前要考虑机器人的（ ），确认不受干涉。",
    options: {
      A: "运动趋势",
      B: "供电情况",
      C: "运动速度",
      D: "保养情况"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 118,
    type: "single_choice",
    question: "在点动操作机器人时要采用较低的倍率速度，以增加对机器人的控制机会。一般控制速率在（ ）以下。",
    options: {
      A: "5%",
      B: "25%",
      C: "50%",
      D: "75%"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 119,
    type: "single_choice",
    question: "机器人周围区域必须清洁、无油、无水、无（ ）。",
    options: {
      A: "异味",
      B: "杂质",
      C: "强光",
      D: "噪声"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 120,
    type: "single_choice",
    question: "（ ）按钮（红色蘑菇头)：立即停止机器人运行（紧急情况使用）。",
    options: {
      A: "急停",
      B: "启动",
      C: "循环",
      D: "调试"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 121,
    type: "single_choice",
    question: "对机器人进行示教时，作为示教人员必须事先接受过专门的培训才行，与示教作业人员一起进行作业的监护人员，处在机器人可动范围外时，（ ），可进行共同作业。",
    options: {
      A: "必须事先接受过专门的培训",
      B: "不需要事先接受过专门的培训",
      C: "没有事先接受过专门的培训也可以",
      D: "具有经验即可"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 122,
    type: "single_choice",
    question: "为了确保安全，用示教编程器手动运行机器人时，机器人的最高速度限制为(）。",
    options: {
      A: "250mm/s",
      B: "50mm/s",
      C: "800mm/s",
      D: "1600mm/s"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 123,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时，以（ ）。",
    options: {
      A: "示教最高速度来限制运行",
      B: "程序给定的速度运行",
      C: "示教最低速度来运行",
      D: "程序报错"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 124,
    type: "single_choice",
    question: "机器人轨迹控制过程需要通过求解（ ）。",
    options: {
      A: "运动学逆问题",
      B: "运动学正问题",
      C: "动力学正问题",
      D: "动力学逆问题"
    },
    answer: "A",
    category: "机器人基础知识"
  },
  {
    id: 125,
    type: "single_choice",
    question: "下列变量不属于模拟量的是（ ）。",
    options: {
      A: "电压",
      B: "电流",
      C: "温度",
      D: "开关量"
    },
    answer: "D",
    category: "输入输出控制"
  },
  {
    id: 126,
    type: "single_choice",
    question: "OUT是设置（ ）为指定的值。",
    options: {
      A: "模拟量输入值",
      B: "模拟量输出值",
      C: "数字量输入值",
      D: "数字量输出值"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 127,
    type: "single_choice",
    question: "WAITFORIN指令功能是等待（ ）",
    options: {
      A: "模拟量输入值",
      B: "模拟量输出值",
      C: "数字量输入值",
      D: "数字量输出值"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 128,
    type: "single_choice",
    question: "WAIT TIME 这指令功能是（ ）。",
    options: {
      A: "时间等待",
      B: "模拟量等待",
      C: "数字量等待",
      D: "数字量输等待"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 129,
    type: "single_choice",
    question: "机器人与PLC做Profinet通讯时，应安装（ ）文件。",
    options: {
      A: "GSF",
      B: "GSD",
      C: "GFD",
      D: "GDF"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 130,
    type: "single_choice",
    question: "机器人与PLC做Profinet通讯时，数据交互应用的是（ ）。",
    options: {
      A: "数据块",
      B: "Modbus协议",
      C: "PPI协议",
      D: "TCP/IP协议"
    },
    answer: "A",
    category: "通信技术"
  },
  {
    id: 131,
    type: "single_choice",
    question: "在PLC里，与机器人进行数据交互的数据类型是（ ）。",
    options: {
      A: "BOOL",
      B: "Int",
      C: "Byte",
      D: "全都包含"
    },
    answer: "D",
    category: "通信技术"
  },
  {
    id: 132,
    type: "single_choice",
    question: "机器人和外部PLC做Profinet通信时，外部PLC发送的关于视觉的坐标等数据类型为（ ）。",
    options: {
      A: "Int",
      B: "BooI",
      C: "Real",
      D: "Byte"
    },
    answer: "A",
    category: "通信技术"
  },
  {
    id: 133,
    type: "single_choice",
    question: "（ ）坐标系用于描述工具的特性，例如焊枪或者夹具。",
    options: {
      A: "用户",
      B: "关节",
      C: "世界",
      D: "工具"
    },
    answer: "D",
    category: "坐标系统"
  },
  {
    id: 134,
    type: "single_choice",
    question: "库卡机器人TCP坐标系的手动示教，需要示教（ ）个点。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "C",
    category: "坐标系统"
  },
  {
    id: 135,
    type: "single_choice",
    question: "机器人零点丢失后会有（ ）后果。",
    options: {
      A: "仅能单轴运行",
      B: "仅能在规定路径上运行",
      C: "仅能用专用装置驱动",
      D: "机器人不能运动"
    },
    answer: "A",
    category: "零点标定"
  },
  {
    id: 136,
    type: "single_choice",
    question: "工业机器人（ ）适合夹持圆柱形工件。",
    options: {
      A: "V型手指",
      B: "平面指",
      C: "尖指",
      D: "特型指"
    },
    answer: "A",
    category: "机器人基础知识"
  },
  {
    id: 137,
    type: "single_choice",
    question: "利用（ ）抓取一般制品是最廉价的一种方法。",
    options: {
      A: "手指气缸",
      B: "柔性手指",
      C: "真空吸盘",
      D: "电磁铁"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 138,
    type: "single_choice",
    question: "在PLC里，机器人控制夹爪打开以及关闭信号的数据类型为（ )。",
    options: {
      A: "BOOL",
      B: "Int",
      C: "Byte",
      D: "Word"
    },
    answer: "A",
    category: "通信技术"
  },
  {
    id: 139,
    type: "single_choice",
    question: "IF条件判断表达式必须是（ ）类型。",
    options: {
      A: "num",
      B: "bool",
      C: "robtarget",
      D: "jointtarget"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 140,
    type: "single_choice",
    question: "CALL调用指令，能够调用其它程序作为子程序，且调用的程序必须在（ ）中。",
    options: {
      A: "编写程序的项目",
      B: "其他程序的项目",
      C: "其他项目的子程序",
      D: "主程序"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 141,
    type: "single_choice",
    question: "CALL调用指令，只能调用（ ）下的子程序，且子程序中不应有循环。",
    options: {
      A: "相同工程名",
      B: "相同工程名",
      C: "任何项目",
      D: "主程序所在项目"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 142,
    type: "single_choice",
    question: "新建完项目及程序后，我们还需要（ ）程序才能开始对程序的编辑。",
    options: {
      A: "加载",
      B: "打开",
      C: "刷新",
      D: "终止"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 143,
    type: "single_choice",
    question: "修改或加载程序时，点击（ ），启动指针（绿色箭头）就会与光标对齐",
    options: {
      A: "编辑",
      B: "新建",
      C: "高级",
      D: "设置PC"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 144,
    type: "single_choice",
    question: "机器人经常使用的程序可以设置为主程序，每台机器人可以设置（ ）主程序。",
    options: {
      A: "1个",
      B: "5个",
      C: "3个",
      D: "无限制"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 145,
    type: "single_choice",
    question: "目前工业机器人常用编程方法有（ ）和离线编程两种。",
    options: {
      A: "示教编程",
      B: "PLC编程",
      C: "软件编程",
      D: "计算机编程"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 146,
    type: "single_choice",
    question: "TP示教盒的作用不包括（ ）",
    options: {
      A: "点动机器人",
      B: "离线编程",
      C: "试运行程序",
      D: "查阅机器人状态"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 147,
    type: "single_choice",
    question: "在GO的程序运行方式下，程序不停地运行，直到程序结尾，所需的用户权限为功能组（ ）设置。",
    options: {
      A: "程序运行",
      B: "关键手动",
      C: "线性运动",
      D: "以上都不对"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 148,
    type: "single_choice",
    question: "CALL称为（ ）指令，能够调用其它程序作为子程序，且调用的程序必须在编写项目中。",
    options: {
      A: "中断",
      B: "延时",
      C: "调用",
      D: "等待"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 149,
    type: "single_choice",
    question: "下列是中断类型的是（ ）",
    options: {
      A: "Procdur",
      B: "Trap",
      C: "Function",
      D: "num"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 150,
    type: "single_choice",
    question: "WAIT指令作用是（ ）",
    options: {
      A: "下一个运动段的某点",
      B: "某一触发平面",
      C: "经过指定位置",
      D: "等待命令"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 151,
    type: "single_choice",
    question: "（ ）指令用于等待信号。",
    options: {
      A: "WAIT",
      B: "SET",
      C: "WAITTIME",
      D: "RESET"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 152,
    type: "single_choice",
    question: "不属于机器人触发指令的是（ ）",
    options: {
      A: "OnDistance",
      B: "OnParameter",
      C: "OnPlane",
      D: "GetRobotPos"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 153,
    type: "single_choice",
    question: "（ ）指令用于等待输入信号。",
    options: {
      A: "WAITFOR",
      B: "WAITFOROUT",
      C: "OnPlane",
      D: "WAITFORIN"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 154,
    type: "single_choice",
    question: "kuka机器人的管理权限中（ ）是最高权限。",
    options: {
      A: "维修员",
      B: "程序员",
      C: "管理员",
      D: "操作员"
    },
    answer: "C",
    category: "KUKA机器人操作"
  },
  {
    id: 155,
    type: "single_choice",
    question: "要降低库卡机器人的运行速度，应按下示教器上的（ ）按钮。",
    options: {
      A: "V+",
      B: "START",
      C: "STOP",
      D: "V-"
    },
    answer: "D",
    category: "KUKA机器人操作"
  },
  {
    id: 156,
    type: "single_choice",
    question: "要提高库卡机器人的运行速度，应按下示教器上的（ ）按钮。",
    options: {
      A: "V+",
      B: "START",
      C: "STOP",
      D: "V-"
    },
    answer: "A",
    category: "KUKA机器人操作"
  },
  {
    id: 157,
    type: "single_choice",
    question: "能通过扩展IO连接外部按钮对机器人进行启停控制的是（ ）模式。",
    options: {
      A: "手动",
      B: "自动",
      C: "远程",
      D: "调试"
    },
    answer: "C",
    category: "KUKA机器人操作"
  },
  {
    id: 158,
    type: "single_choice",
    question: "（ ）状态下程序从启动指针开始运行，直到程序结束或松开启动按钮停止。",
    options: {
      A: "连续",
      B: "单步",
      C: "反向",
      D: "微速"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 159,
    type: "single_choice",
    question: "（ ）模式下运行完成启动指针对应的程序或者松开启动按钮后停止。",
    options: {
      A: "连续",
      B: "单步",
      C: "反向",
      D: "微速"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 160,
    type: "single_choice",
    question: "（ ）也是程序连续运行，只是运行顺序相反。",
    options: {
      A: "连续",
      B: "单步",
      C: "反向",
      D: "微速"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 161,
    type: "single_choice",
    question: "要实现程序在每一程序行后暂停，应该选择（ ）程序运行方式。",
    options: {
      A: "GO",
      B: "#BSTEP",
      C: "#MSTEP",
      D: "#ISIEP"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 162,
    type: "single_choice",
    question: "参考坐标系是外部PLC功能块通过端口映射赋给机器人的，所以主要参数有（ ）和映射端口。",
    options: {
      A: "工件坐标系",
      B: "工具坐标系",
      C: "基坐标系",
      D: "世界坐标系"
    },
    answer: "C",
    category: "坐标系统"
  },
  {
    id: 163,
    type: "single_choice",
    question: "下面关于WAITFOROUT命令的说法正确的是（ ）。",
    options: {
      A: "WAITFOROUT命令仅对CARTPOS类型的点不起作用",
      B: "加载用户坐标系后，示教记录的WAITFOROUT类型点的数值是在World坐标系下的值，不再是用户坐标系下的值。",
      C: "如果未使用WAITFOROUT命令加载用户坐标系，又希望手动时应用用户坐标系，可在位置界面快速选择",
      D: "以上都不对"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 164,
    type: "single_choice",
    question: "指令（ ）可以实现使机器人各关节相对于参考点移动设定。",
    options: {
      A: "PTP",
      B: "LIN",
      C: "GetRobotPos",
      D: "LINTR"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 165,
    type: "single_choice",
    question: "指令（ ）使机器人对于参考点平行移动的设定。",
    options: {
      A: "PTPAbs",
      B: "LIN",
      C: "GetRobotPos",
      D: "LINTR"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 166,
    type: "single_choice",
    question: "LIN运动指令可添加（ ）和（ ）。",
    options: {
      A: "速度，转弯区半径",
      B: "工具坐标，用户坐标",
      C: "目标点，偏移量",
      D: "目标点，转弯区半径"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 167,
    type: "single_choice",
    question: "允许机器人手臂各零件之间发生相对运动的机构称为（ ）",
    options: {
      A: "机座",
      B: "机身",
      C: "手腕",
      D: "关节"
    },
    answer: "D",
    category: "机器人基础知识"
  },
  {
    id: 168,
    type: "single_choice",
    question: "要修改kuka机器人的示教点位置，从（ ）界面进入。",
    options: {
      A: "系统",
      B: "文件",
      C: "项目",
      D: "变量"
    },
    answer: "D",
    category: "KUKA机器人操作"
  },
  {
    id: 169,
    type: "single_choice",
    question: "机器人的控制方式分为点位控制和（ ）。",
    options: {
      A: "点对点控制",
      B: "点到点控制",
      C: "连续轨迹控制",
      D: "任意位置控制"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 170,
    type: "single_choice",
    question: "末端的位姿是由（ ）两部分变量构成。",
    options: {
      A: "位置与速度",
      B: "姿态与位置",
      C: "位置与运行状态",
      D: "姿态与速度"
    },
    answer: "B",
    category: "机器人基础知识"
  },
  {
    id: 171,
    type: "single_choice",
    question: "位置等级是指机器人经过示教的位置时的接近程度，其中位置等级表述正确的是（ ）。",
    options: {
      A: "PL值越小，运行轨迹越精准",
      B: "PL值与运行轨迹关系不大",
      C: "PL值越小，运行轨迹越精准",
      D: "PL值越小，运行轨迹越精准"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 172,
    type: "single_choice",
    question: "运动学主要是研究机器人的（ ）。",
    options: {
      A: "运动的应用",
      B: "动力的传递与转换",
      C: "动力源是什么",
      D: "运动和时间的关系"
    },
    answer: "D",
    category: "机器人基础知识"
  },
  {
    id: 173,
    type: "single_choice",
    question: "机器人动力学主要研究（ ）。",
    options: {
      A: "动力源是什么",
      B: "动力的传递与转换",
      C: "运动和时间的关系",
      D: "动力的应用"
    },
    answer: "B",
    category: "机器人基础知识"
  },
  {
    id: 174,
    type: "single_choice",
    question: "机器人轨迹控制过程需要通过求解（ ）获得各个关节角的位置控制系统的设定值。",
    options: {
      A: "运动学正问题",
      B: "动力学正问题",
      C: "运动学逆问题",
      D: "动力学逆问题"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 175,
    type: "single_choice",
    question: "一个刚体在空间运动具有（ ）个自由度。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "D",
    category: "机器人基础知识"
  },
  {
    id: 176,
    type: "single_choice",
    question: "为了获得非常平稳的加工过程，希望作业启动位置为零时（ ）。",
    options: {
      A: "速度为零，加速度恒定",
      B: "速度为零，加速度为零",
      C: "速度恒定，加速度为零",
      D: "速度恒定，加速度恒定"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 177,
    type: "single_choice",
    question: "示教再现控制为一种在线编程方式，它的最大问题是（ ）。",
    options: {
      A: "劳动强度大",
      B: "占用生产时间",
      C: "操作人员安全问题",
      D: "容易产生废品"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 178,
    type: "single_choice",
    question: "要调整机器人在示教点末段工具的姿态，一般使用（ ）方式。",
    options: {
      A: "关节运动",
      B: "线性运动的XYZ",
      C: "调整4-6轴",
      D: "调整ABC参数"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 179,
    type: "single_choice",
    question: "在位置界面的（ ）区域可以监视末端实时运动速度。",
    options: {
      A: "位置信息",
      B: "运动方向",
      C: "电机数值",
      D: "信息显示"
    },
    answer: "D",
    category: "KUKA机器人操作"
  },
  {
    id: 180,
    type: "single_choice",
    question: "设置加速度的加速类型参数是（ ）。",
    options: {
      A: "ramp",
      B: "acceleration",
      C: "rate of rise",
      D: "improve"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 181,
    type: "single_choice",
    question: "END指令可以（ ）正在运行的程序，如同步机器人的运动。",
    options: {
      A: "同步",
      B: "异步",
      C: "停止",
      D: "等待"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 182,
    type: "single_choice",
    question: "工业机器人程序包括三个等级：（ ）、模块、例行程序。",
    options: {
      A: "项目",
      B: "主程序",
      C: "任务",
      D: "文件"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 183,
    type: "single_choice",
    question: "PLC的指令系统中用于与母线连接的常开触点，指令格式为（ ）字节一位。",
    options: {
      A: "LDI",
      B: "LD",
      C: "OUT",
      D: "以上都不是"
    },
    answer: "B",
    category: "PLC编程"
  },
  {
    id: 184,
    type: "single_choice",
    question: "PLC的指令系统中用于与母线连接的常闭触点，指令格式为（ ）字节一位。",
    options: {
      A: "LDI",
      B: "LD",
      C: "OUT",
      D: "以上都不是"
    },
    answer: "A",
    category: "PLC编程"
  },
  {
    id: 185,
    type: "single_choice",
    question: "（ ）是用于连接两个或者两个以上的并行回路。",
    options: {
      A: "ORB",
      B: "ANB",
      C: "LD",
      D: "LDI"
    },
    answer: "A",
    category: "PLC编程"
  },
  {
    id: 186,
    type: "single_choice",
    question: "当WAIT表达式的值为（ ），下一步指令就会执行，否则的话，程序一直等待。",
    options: {
      A: "TRUE",
      B: "FALSE",
      C: "2",
      D: "0"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 187,
    type: "single_choice",
    question: "PLC的循环向右移位运算函数是（ ）。",
    options: {
      A: "ROR",
      B: "ROL",
      C: "SHR",
      D: "SHL"
    },
    answer: "A",
    category: "PLC编程"
  },
  {
    id: 188,
    type: "single_choice",
    question: "PLC的循环向左移位运算函数是（ ）。",
    options: {
      A: "ROR",
      B: "ROL",
      C: "SHR",
      D: "SHL"
    },
    answer: "B",
    category: "PLC编程"
  },
  {
    id: 189,
    type: "single_choice",
    question: "（ ）是用于连接两个或者两个以上的串行回路。",
    options: {
      A: "ORB",
      B: "ANB",
      C: "LD",
      D: "LDI"
    },
    answer: "B",
    category: "PLC编程"
  },
  {
    id: 190,
    type: "single_choice",
    question: "PLC的寄存器结果输出RST=1时，CTR处于（ ）状态，输出始终保持低电平。",
    options: {
      A: "复位",
      B: "计数",
      C: "重置",
      D: "以上都不对"
    },
    answer: "A",
    category: "PLC编程"
  },
  {
    id: 191,
    type: "single_choice",
    question: "PLC的寄存器结果输出RST=0时，CTR处于（ ）状态，输出始终保持低电平。",
    options: {
      A: "复位",
      B: "计数",
      C: "重置",
      D: "以上都不对"
    },
    answer: "B",
    category: "PLC编程"
  },
  {
    id: 192,
    type: "single_choice",
    question: "机器视觉系统是一种（ ）的光传感系统，同时集成软硬件，综合现代计算机、光学、电子技术。",
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
    id: 193,
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
    id: 194,
    type: "single_choice",
    question: "CCD(Charge Coupled Device)摄像头输出信号为（ ）帧/秒。",
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
    id: 195,
    type: "single_choice",
    question: "机器视觉系统主要由图像的获取、图像的处理和分析及（ ）三部分组成。",
    options: {
      A: "图像恢复",
      B: "图像增强",
      C: "输出或显示",
      D: "图形绘制"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 196,
    type: "single_choice",
    question: "传感器能感知的输入变化量越小，表示传感器的（ ）。",
    options: {
      A: "线性度越好",
      B: "迟滞越小",
      C: "重复性越好",
      D: "分辨率越高"
    },
    answer: "D",
    category: "传感器技术"
  },
  {
    id: 197,
    type: "single_choice",
    question: "视觉传感器的扫描部分的主要作用是（ ）。",
    options: {
      A: "聚成光学图像信号",
      B: "将光学图像信号转换成电信号",
      C: "将二维图像信号转换为时间序列一维信号",
      D: "抽出有效信号"
    },
    answer: "B",
    category: "视觉系统"
  },
  {
    id: 198,
    type: "single_choice",
    question: "1+X证书实操考核平台中使用的NANO视觉相机不能实现物料（ ）的识别。",
    options: {
      A: "角度",
      B: "形状",
      C: "颜色",
      D: "厚度"
    },
    answer: "D",
    category: "视觉系统"
  },
  {
    id: 199,
    type: "single_choice",
    question: "通讯协议（ ）用于PLC与相机建立通讯。",
    options: {
      A: "modbuser",
      B: "modbus",
      C: "modbuset",
      D: "modbusing"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 200,
    type: "single_choice",
    question: "视觉系统与PLC通过（ ）进行数据交换和传递。",
    options: {
      A: "Profinet",
      B: "DeviceNet",
      C: "EthernetIP",
      D: "TCP/IP"
    },
    answer: "D",
    category: "通信技术"
  },
  {
    id: 201,
    type: "single_choice",
    question: "在射频识别系统中，最常用的防碰撞算法是（ ）。",
    options: {
      A: "空分多址法",
      B: "频分多址法",
      C: "时分多址法",
      D: "码分多址法"
    },
    answer: "C",
    category: "RFID技术"
  },
  {
    id: 202,
    type: "single_choice",
    question: "射频识别系统中的（ ）工作频率决定了整个射频识别系统的工作频率，功率大小决定了整个射频识别系统的工作距离。",
    options: {
      A: "电子标签",
      B: "上位机",
      C: "读写器",
      D: "计算机通信网络"
    },
    answer: "C",
    category: "RFID技术"
  },
  {
    id: 203,
    type: "single_choice",
    question: "（ ）是电子标签的一个重要组成部分，它主要负责存储标签内部信息，还负责对标签接收到的信号以及发送出去的信号做一些必要的处理。",
    options: {
      A: "天线",
      B: "电子标签芯片",
      C: "射频接口",
      D: "读写模块"
    },
    answer: "B",
    category: "RFID技术"
  },
  {
    id: 204,
    type: "single_choice",
    question: "读写器中负责将读写器中的电流信号转换成射频载波信号并发送给电子标签，或者接收标签发送过来的射频载波信号并将其转化为电流信号的设备是（ ）。",
    options: {
      A: "射频模块",
      B: "天线",
      C: "读写模块",
      D: "控制模块"
    },
    answer: "B",
    category: "RFID技术"
  },
  {
    id: 205,
    type: "single_choice",
    question: "RFID系统中的标签(Tag)由（ ）及标签组成，每个标签具有唯一的电子编码。",
    options: {
      A: "耦合元件",
      B: "读写器",
      C: "射频模块",
      D: "电子感应器"
    },
    answer: "B",
    category: "RFID技术"
  },
  {
    id: 206,
    type: "single_choice",
    question: "RfidCmd控制字能实现的功能不包括（ ）。",
    options: {
      A: "写数据",
      B: "读数据",
      C: "复位",
      D: "写完成"
    },
    answer: "D",
    category: "RFID技术"
  },
  {
    id: 207,
    type: "single_choice",
    question: "IEC.RfidCmd：=30能实现的功能是（ ）。",
    options: {
      A: "RFID复位",
      B: "等待复位完成",
      C: "复位指令清除",
      D: "以上都不是"
    },
    answer: "A",
    category: "RFID技术"
  },
  {
    id: 208,
    type: "single_choice",
    question: "WAITIEC.Rfidstatus=31能实现的功能是（ ）。",
    options: {
      A: "RFID复位",
      B: "等待复位完成",
      C: "复位指令清除",
      D: "以上都不是"
    },
    answer: "B",
    category: "RFID技术"
  },
  {
    id: 209,
    type: "single_choice",
    question: "IEC.RfidCmd：=0能实现的功能是（ ）。",
    options: {
      A: "RFID复位",
      B: "等待复位完成",
      C: "复位指令清除",
      D: "以上都不是"
    },
    answer: "C",
    category: "RFID技术"
  },
  {
    id: 210,
    type: "single_choice",
    question: "利用RFID、传感器、二维码等随时随地获取物体的信息，指的是（ ）。",
    options: {
      A: "可靠传递",
      B: "全面感知",
      C: "智能处理",
      D: "互联网"
    },
    answer: "B",
    category: "RFID技术"
  },
  {
    id: 211,
    type: "single_choice",
    question: "RFID应用能够运用于（ ）。",
    options: {
      A: "物流过程中的货物追踪，信息采集",
      B: "训养动物，畜牧牲口，宠物等识别管理",
      C: "ETC路桥不停车收费系统",
      D: "以上都是"
    },
    answer: "D",
    category: "RFID技术"
  },
  {
    id: 212,
    type: "single_choice",
    question: "基于RFID的智能仓储系统把标签附在被识别物品上的表面或内部，当（ ）时，RFID读写器自动读取标签中的物品识别数据，从而实现自动识别物品或自动收集物品信息数据的功能。",
    options: {
      A: "标签进入识别范围内",
      B: "读写器发出信号",
      C: "标签发出信号",
      D: "机器人发出信号"
    },
    answer: "A",
    category: "RFID技术"
  },
  {
    id: 213,
    type: "single_choice",
    question: "能够编写西门子专用屏人机界面的软件是（ ）",
    options: {
      A: "RobotArt",
      B: "UG",
      C: "RobotStudio",
      D: "Wincc"
    },
    answer: "D",
    category: "人机界面"
  },
  {
    id: 214,
    type: "single_choice",
    question: "西门子SIMATIC触摸屏系列产品主要有三种Comfort panels、Basic panels以及Smartpanels，其中（ ）属于高端屏，功能较为丰富。",
    options: {
      A: "Comfort panels",
      B: "Basic panels",
      C: "Smart panels",
      D: "Super panels"
    },
    answer: "A",
    category: "人机界面"
  },
  {
    id: 215,
    type: "single_choice",
    question: "触摸屏按钮控件中的显示菜单中不包含（ ）",
    options: {
      A: "外观",
      B: "可控性",
      C: "可见性",
      D: "颜色"
    },
    answer: "D",
    category: "人机界面"
  },
  {
    id: 216,
    type: "single_choice",
    question: "博途软件中不能对触摸屏的画面进行（ ）操作。",
    options: {
      A: "重命名",
      B: "定义为起始画面",
      C: "交叉引用",
      D: "定义为隐藏画面"
    },
    answer: "D",
    category: "人机界面"
  },
  {
    id: 217,
    type: "single_choice",
    question: "焊接机器人的焊接作业主要包括（ ）",
    options: {
      A: "点焊和弧焊",
      B: "间断焊和连续焊",
      C: "平焊和竖焊",
      D: "气体保护焊和氩弧焊"
    },
    answer: "A",
    category: "焊接机器人"
  },
  {
    id: 218,
    type: "single_choice",
    question: "使用焊枪示教前，检查焊枪的均压装置是否良好，动作是否正常，同时对电极头的要求是（ ）。",
    options: {
      A: "更换新的电极头",
      B: "使用磨耗量大的电极头",
      C: "旧的磨损量小的电极头",
      D: "新的或旧的都行"
    },
    answer: "A",
    category: "焊接机器人"
  },
  {
    id: 219,
    type: "single_choice",
    question: "LOOP…DO…END_LOOP指令是循环（ ）控制指令。",
    options: {
      A: "次数",
      B: "时间",
      C: "长度",
      D: "频率"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 220,
    type: "single_choice",
    question: "RUN指令调用一个用户程序，该程序与主程序平行运行。RUN调用的程序必须用（ ）指令终止。",
    options: {
      A: "KILL",
      B: "END",
      C: "FINISH",
      D: "SHUT"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 221,
    type: "single_choice",
    question: "码垛点前点与后点的s、h的值是相对（ ）的。",
    options: {
      A: "前点",
      B: "后点",
      C: "码垛点",
      D: "工具末端"
    },
    answer: "C",
    category: "码垛应用"
  },
  {
    id: 222,
    type: "single_choice",
    question: "在下列逻辑的连接运算符中，（ ）用于否定即使值逆反（由'真'变为'假'）。",
    options: {
      A: "NOT",
      B: "AND",
      C: "OR",
      D: "EXOR"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 223,
    type: "single_choice",
    question: "在下列逻辑的连接运算符中，当连接的两个表达式为真时，（ ）表达式的结果为真。",
    options: {
      A: "NOT",
      B: "AND",
      C: "OR",
      D: "EXOR"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 224,
    type: "single_choice",
    question: "在下列逻辑的连接运算符中，当由（ ）连接符的命题有不同的真值时，表达式的结果为真。",
    options: {
      A: "NOT",
      B: "AND",
      C: "OR",
      D: "EXOR"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 225,
    type: "single_choice",
    question: "在下列逻辑的连接运算符中，当连接的两个表达式中至少一个为真时，（ ）表达式的结果为真。",
    options: {
      A: "NOT",
      B: "AND",
      C: "OR",
      D: "EXOR"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 226,
    type: "single_choice",
    question: "选择焊接模式的前提条件是进入（ ）用户组模式。",
    options: {
      A: "操作人员",
      B: "专家",
      C: "管理员",
      D: "安全维护人员"
    },
    answer: "B",
    category: "焊接机器人"
  },
  {
    id: 227,
    type: "single_choice",
    question: "库卡机器人在进行焊接时，最理想的是焊丝位于起始位置与搜索方向约呈（ ）度角。",
    options: {
      A: "30",
      B: "45",
      C: "60",
      D: "90"
    },
    answer: "B",
    category: "焊接机器人"
  },
  {
    id: 228,
    type: "single_choice",
    question: "下列语句中（ ）表示机器人轴2沿负方向移动30度，其他的轴不动。",
    options: {
      A: "PTP_REL{X200，A2-30}",
      B: "PTP_REL{X200，A230}",
      C: "PTP_REL{A230}",
      D: "PTP_REL{A2-30}"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 229,
    type: "single_choice",
    question: "如果要进行循环控制，应该使用（ ）指令。",
    options: {
      A: "IF",
      B: "CALL",
      C: "WHILE",
      D: "RUN"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 230,
    type: "single_choice",
    question: "WHILE指令在满足条件的时候循环执行子语句，循环控制表达式必须是（ ）类型。",
    options: {
      A: "num",
      B: "bool",
      C: "robtarget",
      D: "jointtarget"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 231,
    type: "single_choice",
    question: "IF条件判断表达式必须是（ ）类型。",
    options: {
      A: "BOOL",
      B: "WORD",
      C: "INT",
      D: "BYTE"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 232,
    type: "single_choice",
    question: "模拟程序在运行模式下应该打在（ ）模式下。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "EXT"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 233,
    type: "single_choice",
    question: "RUN指令调用一个用户程序，该程序与主程序平行运行。RUN指令调用的程序必须用（ ）指令终止。",
    options: {
      A: "END",
      B: "KILL",
      C: "STOP",
      D: "WAIT"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 234,
    type: "single_choice",
    question: "RUN指令调用一个用户程序，该程序与（ ）平行运行。",
    options: {
      A: "主程序",
      B: "子程序",
      C: "中断程序",
      D: "例行程序"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 235,
    type: "single_choice",
    question: "GOTO指令用于跳转到程序不同部分。跳转目标通过（ ）指令定义。",
    options: {
      A: "test",
      B: "KILL",
      C: "IF",
      D: "LABEL"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 236,
    type: "single_choice",
    question: "用于条件跳转控制的指令是（ ）。",
    options: {
      A: "IF",
      B: "LOOP",
      C: "RUN",
      D: "RETURN"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 237,
    type: "single_choice",
    question: "每一个IF指令必须以关键字（ ）做为条件控制结束。",
    options: {
      A: "END_IF",
      B: "END",
      C: "FINISH",
      D: "以上都不是"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 238,
    type: "single_choice",
    question: "IF指令用于条件跳转控制，IF条件判断表达式必须是（ ）类型。",
    options: {
      A: "DWORD",
      B: "WORD",
      C: "BYTE",
      D: "BOOL"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 239,
    type: "single_choice",
    question: "WHILE指令在满足条件的时候循环执行子语句，循环控制表达式必须是（ ）类型。",
    options: {
      A: "DWORD",
      B: "WORD",
      C: "BYTE",
      D: "BOOL"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 240,
    type: "single_choice",
    question: "用SimPro进行机器人离线仿真前，通常需要对SimPro的（ ）进行设置，以便顺利地导入三维模型数据和流畅地运行机器人离线仿真。",
    options: {
      A: "安装路径",
      B: "网络",
      C: "存储位置",
      D: "相关参数"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 241,
    type: "single_choice",
    question: "CAD数据导入的精度设置主要有表面直线精度、表面角精度和（ ）。",
    options: {
      A: "曲面精度",
      B: "曲线精度",
      C: "多边形精度",
      D: "三角形精度"
    },
    answer: "B",
    category: "仿真软件"
  },
  {
    id: 242,
    type: "single_choice",
    question: "CAD导入精度的设置是在option对话框中的（ ）选项卡。",
    options: {
      A: "CAD",
      B: "DISPLAY",
      C: "MOTION",
      D: "CAM"
    },
    answer: "A",
    category: "仿真软件"
  },
  {
    id: 243,
    type: "single_choice",
    question: "清除3D世界布局的快捷键是（ ）。",
    options: {
      A: "Alt",
      B: "Alt + Shift",
      C: "Ctrl + P",
      D: "Ctrl + N"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 244,
    type: "single_choice",
    question: "常用的三维模型数据格式是IGES和（ ）。",
    options: {
      A: "bin",
      B: "hex",
      C: "step",
      D: "docx"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 245,
    type: "single_choice",
    question: "autocad软件的二维设计文件后缀名是（ ）。",
    options: {
      A: "bmp",
      B: "CAD",
      C: "*.dwg",
      D: "wmf"
    },
    answer: "C",
    category: "CAD软件"
  },
  {
    id: 246,
    type: "single_choice",
    question: "SimPro软件一般可以从（ ）获得。",
    options: {
      A: "厂家官网",
      B: "淘宝购买",
      C: "网盘下载",
      D: "论坛下载"
    },
    answer: "A",
    category: "仿真软件"
  },
  {
    id: 247,
    type: "single_choice",
    question: "SimPro的帮助操作及快捷键主要在菜单栏中（ ）一栏。",
    options: {
      A: "'file'",
      B: "'edit'",
      C: "'view'",
      D: "'help'"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 248,
    type: "single_choice",
    question: "视图操作包括选择、移动、旋转、缩放，通常使用（ ）完成这些操作。",
    options: {
      A: "摇杆",
      B: "体感输入",
      C: "手写笔",
      D: "鼠标"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 249,
    type: "single_choice",
    question: "使用3D世界中的所有组件填充视图快捷键是（ ）。",
    options: {
      A: "Alt",
      B: "Alt + Shift",
      C: "Ctrl + P",
      D: "Ctrl + F"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 250,
    type: "single_choice",
    question: "保存系统布局的快捷键是（ ）",
    options: {
      A: "Alt",
      B: "Alt + Shift",
      C: "Ctrl + S",
      D: "Ctrl + 1"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 251,
    type: "single_choice",
    question: "当工作站和工件导入完成后，操作人员必须导入相应型号的机器人模型，RoboDK中机器人模型文件格式是（ ）。",
    options: {
      A: "*.vcmx",
      B: "*.3ds",
      C: "*.igs",
      D: "dwg"
    },
    answer: "A",
    category: "仿真软件"
  },
  {
    id: 252,
    type: "single_choice",
    question: "SimPro的（ ）主要用于演示机器人仿真运动。",
    options: {
      A: "菜单栏",
      B: "仿真区域",
      C: "工具栏",
      D: "项目栏"
    },
    answer: "B",
    category: "仿真软件"
  },
  {
    id: 253,
    type: "single_choice",
    question: "要移动SimPro的视图，应（ ）并移动鼠标。",
    options: {
      A: "按住中键",
      B: "按住左键",
      C: "按住右键",
      D: "同时按住左右键"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 254,
    type: "single_choice",
    question: "基坐标系固定于机器人底座（ ）。",
    options: {
      A: "中心",
      B: "左边",
      C: "右边",
      D: "前面"
    },
    answer: "A",
    category: "坐标系统"
  },
  {
    id: 255,
    type: "single_choice",
    question: "SimPro的打开文件快捷键是（ ）。",
    options: {
      A: "Alt",
      B: "Alt + Shift",
      C: "Ctrl + P",
      D: "Ctrl + O"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 256,
    type: "single_choice",
    question: "SimPro设置显示比例参数，一般设置（ ）。",
    options: {
      A: "0或0.5",
      B: "5或10",
      C: "2或3",
      D: "1或0.5"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 257,
    type: "single_choice",
    question: "SimPro中导入的三维数模的位置信息都是相对于某一（ ）而言的。",
    options: {
      A: "参考轴",
      B: "参考平面",
      C: "参考坐标系",
      D: "参考三维空间"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 258,
    type: "single_choice",
    question: "在布局过程中，要设置工件对象的位置参数应（ ）。",
    options: {
      A: "右击对象",
      B: "双击对象",
      C: "按回车键",
      D: "按空格键"
    },
    answer: "B",
    category: "仿真软件"
  },
  {
    id: 259,
    type: "single_choice",
    question: "机器人操作面板中，A1是指（ ）。",
    options: {
      A: "参考坐标系",
      B: "工具坐标系",
      C: "TCP位置",
      D: "关节坐标系"
    },
    answer: "D",
    category: "坐标系统"
  },
  {
    id: 260,
    type: "single_choice",
    question: "工具坐标系在SimPro的机器人操作面板中用（ ）表示。",
    options: {
      A: "Reference Frame",
      B: "Joint axis",
      C: "Tool DATA",
      D: "Other configurations"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 261,
    type: "single_choice",
    question: "工件坐标系的校准方法有（ ）种。",
    options: {
      A: "6",
      B: "5",
      C: "4",
      D: "3"
    },
    answer: "D",
    category: "坐标系统"
  },
  {
    id: 262,
    type: "single_choice",
    question: "校准工件坐标系时，可选择X轴正方向上两个点和（ ）。",
    options: {
      A: "Z轴上一个点",
      B: "第一象限内点",
      C: "Y轴正方向上一个点",
      D: "第三象限内点"
    },
    answer: "C",
    category: "坐标系统"
  },
  {
    id: 263,
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
    id: 264,
    type: "single_choice",
    question: "SimPro中工具模型文件的格式都是（ ）。",
    options: {
      A: "*.VCMX",
      B: "*.TCP",
      C: "*.AXIS",
      D: "*.hand"
    },
    answer: "A",
    category: "仿真软件"
  },
  {
    id: 265,
    type: "single_choice",
    question: "创建工具模型操作人员需要在SimPro中导入工具模型的（ ），然后安装到机器人上。",
    options: {
      A: "三维软件",
      B: "二维数据",
      C: "三维数据",
      D: "二维软件"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 266,
    type: "single_choice",
    question: "工具安装到机器人法兰盘上，工具的参考坐标系和机器人（ ）坐标系重合。",
    options: {
      A: "大地",
      B: "法兰盘",
      C: "工件",
      D: "轴"
    },
    answer: "B",
    category: "坐标系统"
  },
  {
    id: 267,
    type: "single_choice",
    question: "将工具模型安装到机器人上后，可以通过右键单击，选择（ ）将工具保存为*，下次可以直接使用。",
    options: {
      A: "export",
      B: "save",
      C: "copy",
      D: "open"
    },
    answer: "B",
    category: "仿真软件"
  },
  {
    id: 268,
    type: "single_choice",
    question: "软件中校准工具坐标系的第一步是（ ）",
    options: {
      A: "移动机器人姿态",
      B: "打开'CalibrateToolFrame(TCP)'面板",
      C: "找一个参考点",
      D: "记录姿态点"
    },
    answer: "C",
    category: "坐标系统"
  },
  {
    id: 269,
    type: "single_choice",
    question: "进行TCP校准，需要示教（ ）个点。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "D",
    category: "坐标系统"
  },
  {
    id: 270,
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
    id: 271,
    type: "single_choice",
    question: "CalibrateToolDATA是指（ ）",
    options: {
      A: "校准基坐标系",
      B: "校准工具坐标系",
      C: "校准工件坐标系",
      D: "校准关节坐标系"
    },
    answer: "B",
    category: "坐标系统"
  },
  {
    id: 272,
    type: "single_choice",
    question: "创建仿真程序，主要是根据工作站的（ ）",
    options: {
      A: "规模大小",
      B: "机器人品牌",
      C: "通讯方式",
      D: "工作流程"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 273,
    type: "single_choice",
    question: "在仿真中释放物料对应的选项是（ ）",
    options: {
      A: "OFF",
      B: "'Attach Object'",
      C: "'Detach Object'",
      D: "out"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 274,
    type: "single_choice",
    question: "创建目标点之前先要明确（ ）",
    options: {
      A: "工件坐标系",
      B: "工具坐标系",
      C: "大地坐标系",
      D: "轴坐标系"
    },
    answer: "A",
    category: "坐标系统"
  },
  {
    id: 275,
    type: "single_choice",
    question: "执行KRL代码的自定义语句为（ ）",
    options: {
      A: "'Cartesian target'",
      B: "'Joint target'",
      C: "'USERKRL'",
      D: "'option'"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 276,
    type: "single_choice",
    question: "目标点的数值可以通过打开（ ）选项来修改。",
    options: {
      A: "'Cartesian target'",
      B: "'Joint target'",
      C: "'option'",
      D: "'Visible'"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 277,
    type: "single_choice",
    question: "保存文件图形时默认后缀为（ ）",
    options: {
      A: "rbt",
      B: "CSV",
      C: "stu",
      D: "sta"
    },
    answer: "B",
    category: "文件格式"
  },
  {
    id: 278,
    type: "single_choice",
    question: "添加移动语句时，默认会给你新建（ ）",
    options: {
      A: "一个目标点",
      B: "一个过渡点",
      C: "两个目标点",
      D: "两个过渡点"
    },
    answer: "A",
    category: "仿真软件"
  },
  {
    id: 279,
    type: "single_choice",
    question: "'Attach Object'是指（ ）",
    options: {
      A: "添加工具",
      B: "释放工具",
      C: "抓取工件",
      D: "释放工件"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 280,
    type: "single_choice",
    question: "'Pause Instruction'是指（ ）",
    options: {
      A: "中断指令",
      B: "条件指令",
      C: "等待指令",
      D: "测试指令"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 281,
    type: "single_choice",
    question: "（ ）是SimPro最主要的功能。",
    options: {
      A: "离线仿真",
      B: "模型设计",
      C: "数据恢复",
      D: "通信管理"
    },
    answer: "A",
    category: "仿真软件"
  },
  {
    id: 282,
    type: "single_choice",
    question: "运行仿真程序，在虚拟环境中真实模拟实际工作站的（ ）。",
    options: {
      A: "电气性能",
      B: "工作流程",
      C: "机械性能",
      D: "损耗情况"
    },
    answer: "B",
    category: "仿真软件"
  },
  {
    id: 283,
    type: "single_choice",
    question: "为了确保程序能在实际机器人中运行，一般SimPro的显示语言应选择( )。",
    options: {
      A: "Chinese",
      B: "Japan",
      C: "English",
      D: "French"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 284,
    type: "single_choice",
    question: "选中创建的仿真程序，按（ ）可以全屏运行。",
    options: {
      A: "F5",
      B: "F4",
      C: "F3",
      D: "F11"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 285,
    type: "single_choice",
    question: "编辑仿真程序，主要包括坐标系和目标点的创建、（ ）。",
    options: {
      A: "程序命名",
      B: "程序轨迹规划",
      C: "模型设计",
      D: "机器人系统校准"
    },
    answer: "B",
    category: "仿真软件"
  },
  {
    id: 286,
    type: "single_choice",
    question: "显示程序路径，应选择（ ）菜单选项。",
    options: {
      A: "'Run'",
      B: "控制器图",
      C: "'ShowInstruction'",
      D: "'Loop'"
    },
    answer: "B",
    category: "仿真软件"
  },
  {
    id: 287,
    type: "single_choice",
    question: "设置对象的参考坐标系函数是（ ）",
    options: {
      A: "setParent(parent)",
      B: "setFrame(frame)",
      C: "setTool(tool)",
      D: "setSpeed（ ）"
    },
    answer: "B",
    category: "仿真软件"
  },
  {
    id: 288,
    type: "single_choice",
    question: "可以通过激光跟踪传感器或立体摄像机，获得机器人的相关数据，得到机器人的（ ）报告。",
    options: {
      A: "性能精度",
      B: "能耗等级",
      C: "噪音等级",
      D: "平均无故障时间"
    },
    answer: "A",
    category: "机器人测试"
  },
  {
    id: 289,
    type: "single_choice",
    question: "位姿准确度和位姿重复性属于（ ）测试。",
    options: {
      A: "能耗",
      B: "动态",
      C: "寿命",
      D: "静态"
    },
    answer: "D",
    category: "机器人测试"
  },
  {
    id: 290,
    type: "single_choice",
    question: "最小定位时间属于（ ）测试。",
    options: {
      A: "静态",
      B: "动态",
      C: "噪音等级",
      D: "能耗"
    },
    answer: "B",
    category: "机器人测试"
  },
  {
    id: 291,
    type: "single_choice",
    question: "离线编程技术的发展要求机器人必须具备很高的（ ）。",
    options: {
      A: "响应速度",
      B: "相对定位精度",
      C: "绝对定位精度",
      D: "结构强度"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 292,
    type: "single_choice",
    question: "工业机器人由于减速机等柔性环节的存在，在定位时极易在末端甚至整个装置都发生（ ）现象。",
    options: {
      A: "脱落",
      B: "偏移",
      C: "抖动",
      D: "卡死"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 293,
    type: "single_choice",
    question: "机器人的（ ）是指机器人的每个轴能够实现的最小的移动距离或者最小的转动角度。",
    options: {
      A: "自由度",
      B: "分辨率",
      C: "工作速度",
      D: "工作载荷"
    },
    answer: "B",
    category: "机器人基础知识"
  },
  {
    id: 294,
    type: "single_choice",
    question: "（ ）是工业机器人第一指标。",
    options: {
      A: "重复定位精度",
      B: "轴数",
      C: "最大速度",
      D: "插补能力"
    },
    answer: "A",
    category: "机器人基础知识"
  },
  {
    id: 295,
    type: "single_choice",
    question: "工业机器人性能测试方面的检测设备常用（ ）。",
    options: {
      A: "直尺",
      B: "激光跟踪仪",
      C: "称重仪",
      D: "照度计"
    },
    answer: "B",
    category: "机器人测试"
  },
  {
    id: 296,
    type: "single_choice",
    question: "（ ）是工业测量系统中一种高精度的大尺寸测量仪器。",
    options: {
      A: "超声波测距",
      B: "多普勒测速",
      C: "激光跟踪测量系统",
      D: "高频雷达"
    },
    answer: "C",
    category: "测量仪器"
  },
  {
    id: 297,
    type: "single_choice",
    question: "更换齿轮箱后，机器人需要进行（ ）。",
    options: {
      A: "重新编程",
      B: "零点标定",
      C: "重新刷机",
      D: "外部清洁"
    },
    answer: "B",
    category: "维护保养"
  },
  {
    id: 298,
    type: "single_choice",
    question: "机器人未进行零点标定，会导致（ ）。",
    options: {
      A: "无法运动",
      B: "无法在坐标系中移动",
      C: "死机",
      D: "重启"
    },
    answer: "B",
    category: "零点标定"
  },
  {
    id: 299,
    type: "single_choice",
    question: "机械手的（ ）参数反映了机器人的结构形式和尺寸。",
    options: {
      A: "电机",
      B: "齿轮",
      C: "编码器",
      D: "连杆"
    },
    answer: "D",
    category: "机器人基础知识"
  },
  {
    id: 300,
    type: "single_choice",
    question: "机器人出厂时可使用三坐标仪、激光测量仪等工具进行外部（ ）参数测量并修正。",
    options: {
      A: "直径",
      B: "半径",
      C: "杆长",
      D: "杆径"
    },
    answer: "C",
    category: "机器人测试"
  },
  {
    id: 301,
    type: "single_choice",
    question: "（ ）是目前最流行的机器人运动学模型。",
    options: {
      A: "2D模型",
      B: "DH模型",
      C: "3D模型",
      D: "仿真模型"
    },
    answer: "B",
    category: "机器人基础知识"
  },
  {
    id: 302,
    type: "single_choice",
    question: "机器人（ ）模型用于建立机器人关节空间和工作空间（笛卡尔空间）的映射关系。",
    options: {
      A: "计算机学",
      B: "机械学",
      C: "电学",
      D: "运动学"
    },
    answer: "D",
    category: "机器人基础知识"
  },
  {
    id: 303,
    type: "single_choice",
    question: "用DH模型描述机器人相邻连杆坐标系的变换只需要（ ）个参数。",
    options: {
      A: "4",
      B: "5",
      C: "3",
      D: "6"
    },
    answer: "A",
    category: "机器人基础知识"
  },
  {
    id: 304,
    type: "single_choice",
    question: "得到修正的DH参数和减速比后，更新（ ）内部参数即可进行参数补偿。",
    options: {
      A: "示教器",
      B: "PLC",
      C: "控制器",
      D: "触摸屏"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 305,
    type: "single_choice",
    question: "在（ ）的示教类型应用中只要编码器、减速器精度足够高即可省去标定工作。",
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
    id: 306,
    type: "single_choice",
    question: "大多数的工业机器人对关节减速机的旋转角精度要求达到（ ）级。",
    options: {
      A: "一",
      B: "度",
      C: "分",
      D: "秒"
    },
    answer: "D",
    category: "精度要求"
  },
  {
    id: 307,
    type: "single_choice",
    question: "影响机器人绝对精度的主要误差源是机器人的杆件（ ）过程中产生的几何误差。",
    options: {
      A: "使用",
      B: "设计",
      C: "加工和装配",
      D: "维修"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 308,
    type: "single_choice",
    question: "标定关节脉冲量和角度值的映射关系需要获取脉冲零位、关节角度偏置和( )。",
    options: {
      A: "减速比",
      B: "脉冲数与单位角度的比例",
      C: "编码器分辨率",
      D: "驱动器功率"
    },
    answer: "B",
    category: "零点标定"
  },
  {
    id: 309,
    type: "single_choice",
    question: "（ ）指令用于标定回零位置。",
    options: {
      A: "ptp",
      B: "RefRobotAxis",
      C: "lin",
      D: "cire"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 310,
    type: "single_choice",
    question: "仅在工业机器人得到充分和正确（ ）时，它的使用效果才会最好。",
    options: {
      A: "编程",
      B: "示教",
      C: "维修",
      D: "标定零点"
    },
    answer: "D",
    category: "零点标定"
  },
  {
    id: 311,
    type: "single_choice",
    question: "机器人机构能够独立运动的（ ）数目，称为机器人机构的运动自由度。",
    options: {
      A: "方向",
      B: "关节",
      C: "电机",
      D: "工具"
    },
    answer: "B",
    category: "机器人基础知识"
  },
  {
    id: 312,
    type: "single_choice",
    question: "机器人空间是指机器人（ ）运动描述参考点所能达到的空间点的集合。",
    options: {
      A: "最远端",
      B: "最近点",
      C: "末端执行器",
      D: "中轴中点"
    },
    answer: "C",
    category: "机器人基础知识"
  },
  {
    id: 313,
    type: "single_choice",
    question: "最大加速度受到（ ）和系统过度的限制。",
    options: {
      A: "驱动功率",
      B: "减速比",
      C: "钢性",
      D: "绝缘强度"
    },
    answer: "A",
    category: "机器人基础知识"
  },
  {
    id: 314,
    type: "single_choice",
    question: "机器人的轨迹精度，一般是指轨迹（ ）精度。",
    options: {
      A: "初始",
      B: "重复",
      C: "单次",
      D: "抖动"
    },
    answer: "B",
    category: "机器人基础知识"
  },
  {
    id: 315,
    type: "single_choice",
    question: "机器人的速度测试，一般采用（ ）进行。",
    options: {
      A: "视觉分析",
      B: "超声波定位",
      C: "激光跟踪仪",
      D: "人工测试"
    },
    answer: "C",
    category: "机器人测试"
  },
  {
    id: 316,
    type: "single_choice",
    question: "（ ）就是重复到达某一点的精度。",
    options: {
      A: "定位精度",
      B: "重复精度",
      C: "工作精度",
      D: "控制精度"
    },
    answer: "B",
    category: "机器人基础知识"
  },
  {
    id: 317,
    type: "single_choice",
    question: "大多数的工业机器人重复定位精度都能达到（ ）级别。",
    options: {
      A: "mm",
      B: "cm",
      C: "μm",
      D: "nm"
    },
    answer: "A",
    category: "机器人基础知识"
  },
  {
    id: 318,
    type: "single_choice",
    question: "进行定位精度测量时，机器人以（ ）运行。",
    options: {
      A: "空载",
      B: "25%负载",
      C: "50%负载",
      D: "满载"
    },
    answer: "D",
    category: "机器人测试"
  },
  {
    id: 319,
    type: "single_choice",
    question: "（ ）是速度变化量与发生这一变化所用时间的比值Δv/Δt，是描述物体速度变化快慢的物理量。",
    options: {
      A: "最终速度",
      B: "起始速度",
      C: "运行速度",
      D: "加速度"
    },
    answer: "D",
    category: "物理概念"
  },
  {
    id: 320,
    type: "single_choice",
    question: "激光跟踪测量系统基本都是由激光跟踪头、控制器、用户计算机、（ ）及测量附件等组成。",
    options: {
      A: "发射器",
      B: "吸收器",
      C: "聚光器",
      D: "反射器"
    },
    answer: "D",
    category: "测量仪器"
  },
  {
    id: 321,
    type: "single_choice",
    question: "编码器的分辨率越高，定位精度（ ）",
    options: {
      A: "越差",
      B: "越高",
      C: "不受影响",
      D: "弹性越强"
    },
    answer: "B",
    category: "传感器技术"
  },
  {
    id: 322,
    type: "single_choice",
    question: "机器人连杆的钢性越高，末端（ ）",
    options: {
      A: "加速度越高",
      B: "速度越快",
      C: "负载能力越大",
      D: "抖动越少"
    },
    answer: "D",
    category: "机器人基础知识"
  },
  {
    id: 323,
    type: "single_choice",
    question: "原始记录和报告的保存期限不少于（ ）年。",
    options: {
      A: "3",
      B: "5",
      C: "6",
      D: "9"
    },
    answer: "C",
    category: "管理规范"
  },
  {
    id: 324,
    type: "single_choice",
    question: "用于测试的仪器仪表，必须具有（ ）",
    options: {
      A: "发票",
      B: "有效期内校准证书",
      C: "说明书",
      D: "合格证"
    },
    answer: "B",
    category: "管理规范"
  },
  {
    id: 325,
    type: "single_choice",
    question: "进行测量工作，测量方法和数据应该参照（ ）标准。",
    options: {
      A: "行业",
      B: "自定义",
      C: "客户",
      D: "国家"
    },
    answer: "D",
    category: "管理规范"
  },
  {
    id: 326,
    type: "single_choice",
    question: "测量报告的最后应该给出（ ）",
    options: {
      A: "功能描述",
      B: "问题报告",
      C: "风险分析",
      D: "测试结论"
    },
    answer: "D",
    category: "管理规范"
  },
  {
    id: 327,
    type: "single_choice",
    question: "测试报告是测试阶段（ ）的文档产出物。",
    options: {
      A: "商讨后",
      B: "测量前",
      C: "过程中",
      D: "最后"
    },
    answer: "D",
    category: "管理规范"
  },
  {
    id: 328,
    type: "single_choice",
    question: "测试报告中通过项一般用（ ）表示。",
    options: {
      A: "good",
      B: "ok",
      C: "true",
      D: "PASS"
    },
    answer: "D",
    category: "管理规范"
  },
  {
    id: 329,
    type: "single_choice",
    question: "测试报告中未通过项一般用（ ）表示。",
    options: {
      A: "poor",
      B: "fail",
      C: "false",
      D: "NA"
    },
    answer: "B",
    category: "管理规范"
  },
  {
    id: 330,
    type: "single_choice",
    question: "出具检测报告的机构必须（ ）。",
    options: {
      A: "获得资质",
      B: "资金雄厚",
      C: "从业人员学历高",
      D: "场地宽"
    },
    answer: "A",
    category: "管理规范"
  },
  {
    id: 331,
    type: "single_choice",
    question: "检验检测机构资质认定标志，由英文缩写（ ）形成的图案和资质认定证书编号组成。",
    options: {
      A: "CMA",
      B: "MCA",
      C: "ACM",
      D: "AMC"
    },
    answer: "A",
    category: "管理规范"
  },
  {
    id: 332,
    type: "single_choice",
    question: "检验检测机构对其出具的检验检测（ ）、结果负责，并承担相应法律责任。",
    options: {
      A: "样品",
      B: "数据",
      C: "标准",
      D: "方法"
    },
    answer: "B",
    category: "管理规范"
  },
  {
    id: 333,
    type: "single_choice",
    question: "关于职业素养的叙述，不正确的一项是（ ）。",
    options: {
      A: "职业素养是一个人在职业过程中表现出来的综合品质",
      B: "职业素养主要是由先天素养决定的，与后天努力关系不大",
      C: "资质.知识.行为和技能是显性职业素养，人力资源管理中比较重视",
      D: "职业道德.职业意识.职业态度隐性职业素养更深刻影响着员工发展"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 334,
    type: "single_choice",
    question: "关于价值观的说法，正确的是（ ）。",
    options: {
      A: "企业只要能盈利，价值观并不重要",
      B: "一个家庭出生的人价值观就一模一样",
      C: "企业价值观对员工影响很大",
      D: "人的行为选择完全不受价值观的影响"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 335,
    type: "single_choice",
    question: "关于职业生涯规划的叙述，不正确的一项是（ ）。",
    options: {
      A: "职业生涯规划就是一个人有意识地计划个人工作的全过程",
      B: "正确合理的职业生涯规划是事业取得成功的关键因素",
      C: "不管在什么情况下都要坚定不移地按照规划执行",
      D: "制定职业生涯规划，有利于认识特质，发掘潜力，实现长远发展"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 336,
    type: "single_choice",
    question: "中国人评价一个人最核心的尺度是（ ）。",
    options: {
      A: "外貌",
      B: "地位",
      C: "性格",
      D: "道德"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 337,
    type: "single_choice",
    question: "下列不属于换位思考的是（ ）",
    options: {
      A: "用别人的思维去思考",
      B: "己所不欲，勿施于人",
      C: "理解至上，善待他人",
      D: "坚持自我"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 338,
    type: "single_choice",
    question: "下列（ ）是正确的倾听他人的方式。",
    options: {
      A: "表达自己",
      B: "尽量占主导地位",
      C: "思维跳跃",
      D: "体察对方感受"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 339,
    type: "single_choice",
    question: "下列不属于积极态度的构成部分的是（ ）",
    options: {
      A: "乐观",
      B: "热情",
      C: "勇气",
      D: "懦弱"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 340,
    type: "single_choice",
    question: "（ ）是指个人结合自身情况，对主观因素和客观环境进行分析，为自己确立职业方向和职业目标，选择职业道路，以及制定用于实施的教育计划、发展计划，以实现职业生涯目标。",
    options: {
      A: "职业意识",
      B: "自我评价",
      C: "职业生涯规划",
      D: "素质准备"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 341,
    type: "single_choice",
    question: "（ ）是人的综合素养的主题和核心。",
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
    id: 342,
    type: "single_choice",
    question: "（ ）对职业生涯发展具有决定性作用。",
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
    id: 343,
    type: "single_choice",
    question: "下列选项中是职业匹配的非关键要素的是（ ）。",
    options: {
      A: "兴趣匹配",
      B: "能力匹配",
      C: "企业",
      D: "以上选项全是"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 344,
    type: "single_choice",
    question: "（ ）是一种良好的职业精神和职业修养，是一种软实力。",
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
    id: 345,
    type: "single_choice",
    question: "提升交往效果和交往质量的重要方法是（ ）。",
    options: {
      A: "良好的心理素质",
      B: "自身的人格魅力",
      C: "良好的交往态度",
      D: "强大的沟通能力"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 346,
    type: "single_choice",
    question: "面对不理想的工作环境，以下态度错误的是（ ）。",
    options: {
      A: "认清楚自己的责任，努力做好手上的工作",
      B: "努力改善自己缺点，磨练自己的专业技能",
      C: "为了目标，可以放弃自己的价值观底线",
      D: "坚守自己的价值观底线"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 347,
    type: "single_choice",
    question: "提升交往效果和交往质量的重要方法是（ ）。",
    options: {
      A: "良好的心理素质",
      B: "自身的人格魅力",
      C: "良好的交往态度",
      D: "强大的沟通能力"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 348,
    type: "single_choice",
    question: "（ ）对职业生涯发展具有决定性作用。",
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
    id: 349,
    type: "single_choice",
    question: "（ ）是指个人对职业的看法和想法，他是职业生活的最初动力。",
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
    id: 350,
    type: "single_choice",
    question: "提升交往效果和交往质量的重要方法是（ ）。",
    options: {
      A: "良好的心理素质",
      B: "自身的人格魅力",
      C: "良好的交往态度",
      D: "强大的沟通能力"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 351,
    type: "single_choice",
    question: "（ ）不好的人往往在个人形象展示时会受到一定的影响，被人们误认为气质不好。",
    options: {
      A: "心理素质",
      B: "人格魅力",
      C: "交往态度",
      D: "沟通能力"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 352,
    type: "single_choice",
    question: "团队是一个协作互补的群体，他需要团队成员之间建立相互（ ）的关系，他是合作的基石。",
    options: {
      A: "讲究诚信",
      B: "尊重对方",
      C: "宽容谅解",
      D: "理性信任"
    },
    answer: "D",
    category: "团队合作"
  },
  {
    id: 353,
    type: "single_choice",
    question: "（ ）具有效率高、责任感强、守纪律但做事比较保守的典型特征。",
    options: {
      A: "协调者",
      B: "实干者",
      C: "推进者",
      D: "创新者"
    },
    answer: "B",
    category: "团队合作"
  },
  {
    id: 354,
    type: "single_choice",
    question: "关机的正确方法是：主页面-（ ）模式-主页面-关机。",
    options: {
      A: "操作人员",
      B: "专家",
      C: "管理员",
      D: "用户"
    },
    answer: "B",
    category: "KUKA机器人操作"
  },
  {
    id: 355,
    type: "single_choice",
    question: "如发生机器人运行中发生碰撞，正确的第一时间应该（ ）。",
    options: {
      A: "拉开安全门",
      B: "机器人速度降到0%",
      C: "切换到T1模式",
      D: "按下紧急停止按钮"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 356,
    type: "single_choice",
    question: "（ ）是机器人机械系统主体。",
    options: {
      A: "A1轴",
      B: "机械手",
      C: "KuKa",
      D: "A6轴"
    },
    answer: "B",
    category: "机器人基础知识"
  },
  {
    id: 357,
    type: "single_choice",
    question: "KUKA机器人的紧急停止装置是位于（ ）。",
    options: {
      A: "示教器（KCP）",
      B: "机器人本体",
      C: "控制柜",
      D: "以上都有"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 358,
    type: "single_choice",
    question: "下列选项属于正确的求职择业心理的是（ ）。",
    options: {
      A: "自卑畏缩",
      B: "盲目从众",
      C: "正视挫折",
      D: "过度依赖"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 359,
    type: "single_choice",
    question: "（ ）是一种良好的职业精神和职业修养，是一种软实力。",
    options: {
      A: "职业计划",
      B: "职业素养",
      C: "职业技能",
      D: "以上选项都不正确"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 360,
    type: "single_choice",
    question: "下列不属于换位思考的是（ ）。",
    options: {
      A: "用别人的思考去思考",
      B: "己所不欲，勿施于人",
      C: "理解至上，善待他人",
      D: "坚持自我"
    },
    answer: "D",
    category: "职业素养"
  },

  // 判断题部分 (361-594)
  {
    id: 361,
    type: "true_false",
    question: "机器人初次通电连接时，若有确定不接入的电气线路，直接将相应的通道短接即可。",
    answer: "true",
    category: "KUKA机器人操作"
  },
  {
    id: 362,
    type: "true_false",
    question: "安全配置的目的是为了控制柜系统的数据、KSS软件的机器参数与实际机器人一致。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 363,
    type: "true_false",
    question: "PULSE的联机表格输出端被切换成的状态不止有TURE和FALSE两种。",
    answer: "false",
    category: "输入输出控制"
  },
  {
    id: 364,
    type: "true_false",
    question: "PULSE的联机表格以SYNOUT为参照的点为START和END。",
    answer: "true",
    category: "输入输出控制"
  },
  {
    id: 365,
    type: "true_false",
    question: "数字量是由0和1组成的信号，经过编码形成有规律的信号，量化后的模拟量就是数字量。",
    answer: "true",
    category: "输入输出控制"
  },
  {
    id: 366,
    type: "true_false",
    question: "模拟量的概念与数字量相对应，但是经过量化之后又可以转化为数字量。",
    answer: "true",
    category: "输入输出控制"
  },
  {
    id: 367,
    type: "true_false",
    question: "数字量在时间和数量上都是离散的物理量，其表示的信号则为数字信号。",
    answer: "true",
    category: "输入输出控制"
  },
  {
    id: 368,
    type: "true_false",
    question: "开关量与数字量是同一个概念。",
    answer: "false",
    category: "输入输出控制"
  },
  {
    id: 369,
    type: "true_false",
    question: "模拟量在连续的变化过程中任何一个取值都是一个具体有意义的物理量，如温度，电压，电流等。",
    answer: "true",
    category: "输入输出控制"
  },
  {
    id: 370,
    type: "true_false",
    question: "KUKA机器人的输入和输出全部为高电平（即24V+）。",
    answer: "true",
    category: "KUKA机器人操作"
  },
  {
    id: 371,
    type: "true_false",
    question: "要进行I/O的信号点查看，直接点击信号就可以查看到里面的输入输出。",
    answer: "true",
    category: "输入输出控制"
  },
  {
    id: 372,
    type: "true_false",
    question: "进行零位校正时，库卡机器人各轴会移动至目标位置，这个位置被称为机械零点。",
    answer: "true",
    category: "零点标定"
  },
  {
    id: 373,
    type: "true_false",
    question: "示教器进行亮度设置后无需重启直接生效。",
    answer: "true",
    category: "KUKA机器人操作"
  },
  {
    id: 374,
    type: "true_false",
    question: "长按示教器左上角'菜单'键，可调出'Display'选项。",
    answer: "true",
    category: "KUKA机器人操作"
  },
  {
    id: 375,
    type: "true_false",
    question: "对示教器进行亮度设置，需要使用'操作人员'用户登录才能设置。",
    answer: "false",
    category: "KUKA机器人操作"
  },
  {
    id: 376,
    type: "true_false",
    question: "当库卡机器人到达及机械零点后，各轴当前的编码器绝对位置值会被保存下来。",
    answer: "true",
    category: "零点标定"
  },
  {
    id: 377,
    type: "true_false",
    question: "库卡机器人零位校正后，可以用直角坐标系移动库卡机器人或运行程序。",
    answer: "true",
    category: "零点标定"
  },
  {
    id: 378,
    type: "true_false",
    question: "当机器人零点丢失后，机器人对于TCP精度要求较高时，肉眼通过零点刻度对零点进行标定无法满足精度需求，可以通过KUKA电子调零设备来取代人工调零。",
    answer: "true",
    category: "零点标定"
  },
  {
    id: 379,
    type: "true_false",
    question: "标零过程中，会听到电机抱闸打开/关闭的声音，属正常现象。",
    answer: "true",
    category: "零点标定"
  },
  {
    id: 380,
    type: "true_false",
    question: "示教器内屏损坏或示教器线缆损坏一定不会造成示教器黑屏。",
    answer: "false",
    category: "故障诊断"
  },
  {
    id: 381,
    type: "true_false",
    question: "示教器在受到外力振动或触摸屏划伤情况下，可能会出现触摸屏不准，或开机直接进入了校准界面的情况。",
    answer: "true",
    category: "故障诊断"
  },
  {
    id: 382,
    type: "true_false",
    question: "购买示教器备件时，收到原厂未拆封的新示教器时，可能会出现开机后无法启动连接到控制器的情况。",
    answer: "true",
    category: "故障诊断"
  },
  {
    id: 383,
    type: "true_false",
    question: "在进行新的零点标定之前不需要删除旧的零点标定数据，直接通过手动删除轴的零点来删除零点标定数据。",
    answer: "false",
    category: "零点标定"
  },
  {
    id: 384,
    type: "true_false",
    question: "基准零点标定仅用于某些维护措施之后的零点标定。",
    answer: "true",
    category: "零点标定"
  },
  {
    id: 385,
    type: "true_false",
    question: "机器人坐标系的转角A是绕X轴旋转。",
    answer: "false",
    category: "坐标系统"
  },
  {
    id: 386,
    type: "true_false",
    question: "机器人坐标系的转角B是绕Y轴旋转。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 387,
    type: "true_false",
    question: "机器人坐标系的转角C是绕Z轴旋转。",
    answer: "false",
    category: "坐标系统"
  },
  {
    id: 388,
    type: "true_false",
    question: "基坐标系是一个笛卡尔坐标系，用来说明工件的位置。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 389,
    type: "true_false",
    question: "工具坐标系中的姿态标定进一步标定了工具坐标系的X、Y、Z轴的方向，使得机器人可沿工具坐标系运动。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 390,
    type: "true_false",
    question: "工具坐标系是一个笛卡尔坐标系，位于工具的工作点。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 391,
    type: "true_false",
    question: "基坐标系、工具坐标系、全局坐标系都属于直角坐标系。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 392,
    type: "true_false",
    question: "建立用户坐标系时，用三点法进行标定。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 393,
    type: "true_false",
    question: "三点法示教时，需示教基坐标的原点、x正向某点、y正向某点。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 394,
    type: "true_false",
    question: "三点法示教时，包含X正向某点、y正向某点、z正向某点。",
    answer: "false",
    category: "坐标系统"
  },
  {
    id: 395,
    type: "true_false",
    question: "如果加载的工程中不包含工具坐标系变量，这里的工具手示教选项是隐藏的。因此我们要先新建工具坐标系变量。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 396,
    type: "true_false",
    question: "基坐标系的点Z方向符合以x/y正向为基础的右手定则。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 397,
    type: "true_false",
    question: "如果机器人使用到了多个工具，可在运动指令中使用不同Tool序号进行切换。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 398,
    type: "true_false",
    question: "每条运动语句都有特定的基坐标与工具坐标的选择项。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 399,
    type: "true_false",
    question: "直角坐标系的方向规定X轴方向后，Z轴方向向上，Y轴根据右手定则确定。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 400,
    type: "true_false",
    question: "已知坐标系的任意两个方向，即可根据右手定则推断出第三个轴的方向。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 401,
    type: "true_false",
    question: "已经标定好的基坐标和工具坐标系将自动成为运动语句中的默认应用坐标系。",
    answer: "false",
    category: "坐标系统"
  },
  {
    id: 402,
    type: "true_false",
    question: "工业机器人的研究涉及学科很少，与电子学无关。",
    answer: "false",
    category: "机器人基础知识"
  },
  {
    id: 403,
    type: "true_false",
    question: "在直角坐标系中，机器人的运动指机器人控制中心点的运动。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 404,
    type: "true_false",
    question: "用户坐标系一般使用三点法示教方法进行标定。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 405,
    type: "true_false",
    question: "在轴的方向特别精准确定之后才可以使用三点示教方法。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 406,
    type: "true_false",
    question: "一般的应用是将用户坐标系建立在工件上或者码垛的码盘上，根据工件或码盘的实际摆放方向进行定义，操作直观方便。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 407,
    type: "true_false",
    question: "建立用户坐标系时，若用户坐标系的方向与极坐标一致，则仅需要示教一个原点即可。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 408,
    type: "true_false",
    question: "用户坐标系示教完成后，手动和自动运行程序时都需要加载用户坐标系。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 409,
    type: "true_false",
    question: "当程序执行到最后一行，跳回第一行时，所加载的用户坐标系自动会卸载，回到机器人World坐标系。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 410,
    type: "true_false",
    question: "如果程序中仅仅使用关节运动即PTP运动，建议不管使用与否都加载用户坐标系，预防发生误操作。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 411,
    type: "true_false",
    question: "建立用户坐标系点动时，应先选择参考坐标系。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 412,
    type: "true_false",
    question: "工具坐标系示教完成后，手动和自动运行程序时都需要加载工具坐标系。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 413,
    type: "true_false",
    question: "当程序执行到最后一行，跳回第一行时，所加载的工具坐标系会自动卸载，回到机器人默认的工具坐标系。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 414,
    type: "true_false",
    question: "三点法与四点法都是用于基坐标系的标定的方法。",
    answer: "false",
    category: "坐标系统"
  },
  {
    id: 415,
    type: "true_false",
    question: "三点法标定基坐标系过程中，Z向是无需标定的。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 416,
    type: "true_false",
    question: "三点法是用于工具坐标系标定的方法。",
    answer: "false",
    category: "坐标系统"
  },
  {
    id: 417,
    type: "true_false",
    question: "标定的工具坐标系中各轴与世界坐标系的各轴的矢量夹角相同。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 418,
    type: "true_false",
    question: "当工件运动方向与世界坐标系存在一定角度时，考虑创建使用基坐标系进行示教。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 419,
    type: "true_false",
    question: "基坐标系与用户坐标系是一种坐标系的不同叫法。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 420,
    type: "true_false",
    question: "通过示教器上的模式旋钮可以进行基坐标系与工具坐标系的选择。",
    answer: "false",
    category: "坐标系统"
  },
  {
    id: 421,
    type: "true_false",
    question: "基坐标系与世界坐标系的方向都符合右手定则。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 422,
    type: "true_false",
    question: "机器人焊接工作站搭建前，首先要确定焊接方式，然后分析焊件的特性，比如焊件的板材，板厚，焊缝的形状与宽度等。",
    answer: "true",
    category: "焊接机器人"
  },
  {
    id: 423,
    type: "true_false",
    question: "搭建机器人焊接工作站时，在工装夹具的设计过程中，要尽量保证工件的焊缝安装在工装夹具上以后保持平焊姿态。",
    answer: "true",
    category: "焊接机器人"
  },
  {
    id: 424,
    type: "true_false",
    question: "焊接机器人一般把工具坐标系定义在焊枪的顶端。",
    answer: "true",
    category: "焊接机器人"
  },
  {
    id: 425,
    type: "true_false",
    question: "机器人在焊接过程中，操作人员不得离开现场，以应对突发事故的及时处理。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 426,
    type: "true_false",
    question: "外围设备与机器人输入输出回路相连的电缆需要使用屏蔽电缆，防止周围高频噪声干扰。",
    answer: "true",
    category: "输入输出控制"
  },
  {
    id: 427,
    type: "true_false",
    question: "如果使用PLC发送高频脉冲给伺服驱动器，控制伺服电机运行，则PLC的输出端的类型必须选择继电器形式。",
    answer: "false",
    category: "控制系统"
  },
  {
    id: 428,
    type: "true_false",
    question: "变频器的输入电源有三相380V、三相220V和单相220V等规格，但变频器输出都是三相交流电，因此变频器只能控制三相交流异步电动机。",
    answer: "true",
    category: "控制系统"
  },
  {
    id: 429,
    type: "true_false",
    question: "弧焊机器人的末端执行器是焊枪。",
    answer: "true",
    category: "焊接机器人"
  },
  {
    id: 430,
    type: "true_false",
    question: "点焊机器人X形焊钳适用于点焊垂直及近于垂直位置的焊点。",
    answer: "false",
    category: "焊接机器人"
  },
  {
    id: 431,
    type: "true_false",
    question: "弧焊机器人送丝机构的送丝电机速度与焊接电流的大小有关。",
    answer: "true",
    category: "焊接机器人"
  },
  {
    id: 432,
    type: "true_false",
    question: "在变频器设置了上限频率为50Hz，下限频率为25Hz，若给定频率为20Hz，则实际输出频率为25Hz。",
    answer: "true",
    category: "控制系统"
  },
  {
    id: 433,
    type: "true_false",
    question: "机器人示教时，对于有规律的轨迹，原则上仅需示教几个关键点。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 434,
    type: "true_false",
    question: "涂装机器人的工具中心点（TCP）通常设在喷枪的末端中心处。",
    answer: "true",
    category: "机器人应用"
  },
  {
    id: 435,
    type: "true_false",
    question: "关于搬运机器人TCP点，吸盘类一般设置在法兰中心线与吸盘底面的交点处。",
    answer: "true",
    category: "机器人应用"
  },
  {
    id: 436,
    type: "true_false",
    question: "最大工作速度通常是指机器人单关节速度。",
    answer: "false",
    category: "机器人基础知识"
  },
  {
    id: 437,
    type: "true_false",
    question: "工业机器人末端执行器在搬运过程中可能遇到障碍，需要设置一些点位规避障碍，这些点称为过渡点。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 438,
    type: "true_false",
    question: "机器人在点到点的移动中，实现精确定位时将准确的抵达每个目标点，能够精确地预计机器人的轨迹。",
    answer: "false",
    category: "机器人编程"
  },
  {
    id: 439,
    type: "true_false",
    question: "一般可以根据实际情况，定义一个或多个工件坐标系。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 440,
    type: "true_false",
    question: "在应用人员和操作人员用户组中，只能在文件夹R1中创建新的文件夹。",
    answer: "true",
    category: "KUKA机器人操作"
  },
  {
    id: 441,
    type: "true_false",
    question: "根据车间场地面积，在有利于提高生产节拍的前提下，搬运机器人工作站可采用L型、环状、'品'字、'一'字等布局。",
    answer: "true",
    category: "机器人应用"
  },
  {
    id: 442,
    type: "true_false",
    question: "只有两台以上的机器人相互配合才能构成机器人工作站。",
    answer: "false",
    category: "机器人应用"
  },
  {
    id: 443,
    type: "true_false",
    question: "在进行语句选择时，使用语句选择可使一个程序在任意点启动。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 444,
    type: "true_false",
    question: "在启动外部自动运行中，BCO运行必须作为LIN或PTP运动从实际位置移动到目标位置。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 445,
    type: "true_false",
    question: "由于变频器内部设置有电子过电流保护装置，故电机就不需要热继电器进行过载保护了。",
    answer: "true",
    category: "控制系统"
  },
  {
    id: 446,
    type: "true_false",
    question: "为了延长示教器的使用寿命，应佩戴手套操作示教器。",
    answer: "false",
    category: "KUKA机器人操作"
  },
  {
    id: 447,
    type: "true_false",
    question: "在点动操作机器人时要采用较低的倍率速度，以增加对机器人的控制机会。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 448,
    type: "true_false",
    question: "在点动操作机器人时要采用较高的倍率速度，以减少调试时间降低风险。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 449,
    type: "true_false",
    question: "使能按钮有两个档位，用力按住第二档可以使机器人上电运行。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 450,
    type: "true_false",
    question: "工业机器人的紧急停止装置是位于smartPAD上的急停装置，在出现危险情况或紧急停止情况时必须按下该装置。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 451,
    type: "true_false",
    question: "在手动模式下要使机器人运动必须处于使能状态。",
    answer: "true",
    category: "KUKA机器人操作"
  },
  {
    id: 452,
    type: "true_false",
    question: "不管是自动运动或者手动示教，都要保证工具坐标系的加载。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 453,
    type: "true_false",
    question: "调用用户坐标系需要将之前用于标定该坐标系的工具坐标系也同时调用。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 454,
    type: "true_false",
    question: "手动模式，一般用于调整机器人位姿，及调试程序。",
    answer: "true",
    category: "KUKA机器人操作"
  },
  {
    id: 455,
    type: "true_false",
    question: "点击'Jog'，运动按钮旁出现下图'X、Y、Z、A、B、C'标志后，可以进行世界坐标系运动操作。",
    answer: "true",
    category: "KUKA机器人操作"
  },
  {
    id: 456,
    type: "true_false",
    question: "点击'Jog'，运动按钮旁出现下图'J1、J2、J3、J4、J5、J6'标志后，可以进行世界坐标系运动操作。",
    answer: "false",
    category: "KUKA机器人操作"
  },
  {
    id: 457,
    type: "true_false",
    question: "重新示教点可以改变一个已示教的点的坐标，为此必须移至所需的新位置，并用新位置的坐标盖写旧的点。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 458,
    type: "true_false",
    question: "OUT指令用于设置模拟量输出为指定的值。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 459,
    type: "true_false",
    question: "I/O模块是设计机器人弧焊工作站时的必选器件，有模拟量I/O和数字量I/O两种形式，模拟量和数字量信号的区别在于数字信号大小和时间均连续，而模拟信号相反。",
    answer: "false",
    category: "输入输出控制"
  },
  {
    id: 460,
    type: "true_false",
    question: "IN指令功能是等待直到模拟量输入值在一个数值区间外，或者直至可选的时间超时。",
    answer: "false",
    category: "机器人编程"
  },
  {
    id: 461,
    type: "true_false",
    question: "WAITFOR指令功能是等待直到模拟量输入值。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 462,
    type: "true_false",
    question: "OUT指令用于设置输出字节为指定的值。",
    answer: "false",
    category: "机器人编程"
  },
  {
    id: 463,
    type: "true_false",
    question: "GO指令用于跳转到程序不同部分，跳转目标通过指令定义，允许从外部跳转进入内部程序块。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 464,
    type: "true_false",
    question: "IN指令用于同步触发，当机器人经过指定位置时触发。",
    answer: "false",
    category: "机器人编程"
  },
  {
    id: 465,
    type: "true_false",
    question: "PTP指令是设置参考系统指令，通过该指令可以为后续运行的位置指令设定一个新的参考坐标系。",
    answer: "false",
    category: "机器人编程"
  },
  {
    id: 466,
    type: "true_false",
    question: "END指令用于异步程序平行运行。",
    answer: "false",
    category: "机器人编程"
  },
  {
    id: 467,
    type: "true_false",
    question: "边缘检测是将边缘像素标识出来的一种图像分割技术。",
    answer: "true",
    category: "视觉系统"
  },
  {
    id: 468,
    type: "true_false",
    question: "视觉系统与机器人通过TCP/IP进行数据交换和传递，其中视觉系统只能作为客户端，机器人只能作为服务器。",
    answer: "false",
    category: "视觉系统"
  },
  {
    id: 469,
    type: "true_false",
    question: "RFID的电子标签必须完全接触阅读器才能读出电子标签信息。",
    answer: "false",
    category: "RFID技术"
  },
  {
    id: 470,
    type: "true_false",
    question: "如果加载的工程中不包含码垛变量，则不需要新建码垛变量。",
    answer: "false",
    category: "码垛应用"
  },
  {
    id: 471,
    type: "true_false",
    question: "库卡弧焊机器人，在预定的距离内，是以焊丝接触工件、形成电流回路，来检测寻找工件的正确焊缝位置的。",
    answer: "true",
    category: "焊接机器人"
  },
  {
    id: 472,
    type: "true_false",
    question: "库卡弧焊机器人的焊接起始点位置的寻找确定，可以通过一至三个点的接触传感完成。",
    answer: "true",
    category: "焊接机器人"
  },
  {
    id: 473,
    type: "true_false",
    question: "电弧跟踪原理，在焊接厚板或角焊缝时，焊枪摆动，干伸长的不同，导致实际的焊接电流与设定的电流不同，干伸长越短，实际电流就越大，干伸长越长，实际电流就越小。",
    answer: "true",
    category: "焊接机器人"
  },
  {
    id: 474,
    type: "true_false",
    question: "焊接摆动图形的形状和焊接速度有关，焊接速度越高，摆动图形的轨迹逼近就越强。",
    answer: "true",
    category: "焊接机器人"
  },
  {
    id: 475,
    type: "true_false",
    question: "程序中的变量存储在局部SRC文件中时，变量仅在局部DEF和END行之间可用。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 476,
    type: "true_false",
    question: "焊接摆动图形的形状不止和焊接速度有关，还取决于用户为摆动长度和振幅设定的数值。",
    answer: "true",
    category: "焊接机器人"
  },
  {
    id: 477,
    type: "true_false",
    question: "机器人速度倍率的大小必须按顺序排列，一旦设置错误，则速度倍率总保持在VFINE。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 478,
    type: "true_false",
    question: "若机器人在启动之后以编程的速度到达第一个编程位置，并且在那里没有停止，则在外部自动运行中有BCO运行。",
    answer: "false",
    category: "机器人编程"
  },
  {
    id: 479,
    type: "true_false",
    question: "从外部启动程序时，如果已经执行了BCO运行，则在外部启动时不再执行BCO运行。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 480,
    type: "true_false",
    question: "机器人碰撞监测功能，能够在机器人发生碰撞时停止机器人运行，减少损失。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 481,
    type: "true_false",
    question: "机器人碰撞监测功能，只能适用于机器人垂直于地面安装工况，不支持倒挂，斜装等工况。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 482,
    type: "true_false",
    question: "每一个IF指令必须以关键字END_IF做为条件控制结束。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 483,
    type: "true_false",
    question: "Sim Pro支持包括库卡机器人、埃伏特、广州数控等多种品牌机器人的离线仿真。",
    answer: "false",
    category: "仿真软件"
  },
  {
    id: 484,
    type: "true_false",
    question: "重命名、删除和粘贴不管是对项目还是程序的操作，本质上都是对项目的编辑。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 485,
    type: "true_false",
    question: "当程序执行到最后一行，跳回第一行时，所加载的工具坐标系会自动卸载，并且回到机器人默认的工具坐标系。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 486,
    type: "true_false",
    question: "输入是从外部存储导入项目或程序。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 487,
    type: "true_false",
    question: "PTP指令的优点是不容易到达极限位置或奇异点。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 488,
    type: "true_false",
    question: "PTP指令的各轴运动是相对独立的，不存在插补关系，系统的运算量很小。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 489,
    type: "true_false",
    question: "PTP指令也有可能出现奇异点。",
    answer: "false",
    category: "机器人编程"
  },
  {
    id: 490,
    type: "true_false",
    question: "PTP指令可以用于工具的插补动作。",
    answer: "false",
    category: "机器人编程"
  },
  {
    id: 491,
    type: "true_false",
    question: "Lin指令空间直线距离不宜太远，否则容易到达机器人的轴限位或死点。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 492,
    type: "true_false",
    question: "LIN直线移动时，直线上的轨迹速度始终保持不变。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 493,
    type: "true_false",
    question: "Sim Pro具有可扩展机器人关节的外部轴模型和不同品牌的机器人工具模型。",
    answer: "false",
    category: "仿真软件"
  },
  {
    id: 494,
    type: "true_false",
    question: "交互系统是实现机器人与外部环境中的设备相互联系和协调的系统。",
    answer: "true",
    category: "机器人基础知识"
  },
  {
    id: 495,
    type: "true_false",
    question: "目前机器人中较为常用的是旋转型光电式编码器。",
    answer: "true",
    category: "传感器技术"
  },
  {
    id: 496,
    type: "true_false",
    question: "液压传动系统具有无环境污染、易于控制、运动精度高、成本低和驱动效率高等优点，在机器人工作站中最为常用。",
    answer: "false",
    category: "机器人基础知识"
  },
  {
    id: 497,
    type: "true_false",
    question: "图像增强是指调整图像的色度、亮度、饱和度、对比度和分辨率，使得图像效果清晰和颜色分明。",
    answer: "true",
    category: "视觉系统"
  },
  {
    id: 498,
    type: "true_false",
    question: "机器人上常用的可以测量转速的传感器有测度发电机和增量式码盘。",
    answer: "true",
    category: "传感器技术"
  },
  {
    id: 499,
    type: "true_false",
    question: "传感器是与人感觉器官相对应的原件。",
    answer: "true",
    category: "传感器技术"
  },
  {
    id: 500,
    type: "true_false",
    question: "电磁阀是利用电磁力的作用，推动阀芯换位，以实现气流或液流换向的阀类，通常由电磁控制部分和换向部分部分两部分组成。",
    answer: "true",
    category: "控制系统"
  },
  {
    id: 501,
    type: "true_false",
    question: "感应同步器只能测线位移，而不能测角位移。",
    answer: "false",
    category: "传感器技术"
  },
  {
    id: 502,
    type: "true_false",
    question: "机器人常用驱动方式主要是液压驱动、气压驱动和电气驱动三种基本类型。",
    answer: "true",
    category: "机器人基础知识"
  },
  {
    id: 503,
    type: "true_false",
    question: "步进电机主要用于开环控制系统，也可以用于闭环控制系统。",
    answer: "true",
    category: "控制系统"
  },
  {
    id: 504,
    type: "true_false",
    question: "三相步进电机是靠三相绕组按照一定的相序轮流通电驱动的。",
    answer: "true",
    category: "控制系统"
  },
  {
    id: 505,
    type: "true_false",
    question: "机床的点位控制不仅实现由一个位置点到另一个位置点的精确移动，而且在移动和定位的过程中仍需要不断加工。",
    answer: "false",
    category: "机器人基础知识"
  },
  {
    id: 506,
    type: "true_false",
    question: "工业机器人外部传感器主要是为了反馈伺服控制系统的信号。",
    answer: "false",
    category: "传感器技术"
  },
  {
    id: 507,
    type: "true_false",
    question: "在机器人调试和检修时，可对I/O信号的状态和数值进行仿真和强制操作。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 508,
    type: "true_false",
    question: "SimPro能够对机器人及其外部设备进行碰撞检测。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 509,
    type: "true_false",
    question: "SimPro支持三维建模功能，可以在软件中临时设计机械结构。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 510,
    type: "true_false",
    question: "工具安装到机器人法兰盘上，工具的参考坐标系和机器人法兰盘坐标系重合。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 511,
    type: "true_false",
    question: "仿真程序要必须和理想应用工况一致。",
    answer: "false",
    category: "仿真软件"
  },
  {
    id: 512,
    type: "true_false",
    question: "SimPro通常采用预先定义好目标点，然后在移动语句中调用该目标点。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 513,
    type: "true_false",
    question: "机器人示教时，对于有规律的轨迹，原则上仅需示教几个关键点。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 514,
    type: "true_false",
    question: "涂装机器人的工具中心点（TCP）通常设在喷枪的末端中心处。",
    answer: "true",
    category: "机器人应用"
  },
  {
    id: 515,
    type: "true_false",
    question: "关于搬运机器人TCP点，吸盘类一般设置在法兰中心线与吸盘底面的交点处。",
    answer: "true",
    category: "机器人应用"
  },
  {
    id: 516,
    type: "true_false",
    question: "最大工作速度通常是指机器人单关节速度。",
    answer: "false",
    category: "机器人基础知识"
  },
  {
    id: 517,
    type: "true_false",
    question: "工业机器人末端执行器在搬运过程中可能遇到障碍，需要设置一些点位规避障碍，这些点称为过渡点。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 518,
    type: "true_false",
    question: "机器人在点到点的移动中，实现精确定位时将准确的抵达每个目标点，能够精确地预计机器人的轨迹。",
    answer: "false",
    category: "机器人编程"
  },
  {
    id: 519,
    type: "true_false",
    question: "一般可以根据实际情况，定义一个或多个工件坐标系。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 520,
    type: "true_false",
    question: "在应用人员和操作人员用户组中，只能在文件夹R1中创建新的文件夹。",
    answer: "true",
    category: "KUKA机器人操作"
  },
  {
    id: 521,
    type: "true_false",
    question: "根据车间场地面积，在有利于提高生产节拍的前提下，搬运机器人工作站可采用L型、环状、'品'字、'一'字等布局。",
    answer: "true",
    category: "机器人应用"
  },
  {
    id: 522,
    type: "true_false",
    question: "只有两台以上的机器人相互配合才能构成机器人工作站。",
    answer: "false",
    category: "机器人应用"
  },
  {
    id: 523,
    type: "true_false",
    question: "在进行语句选择时，使用语句选择可使一个程序在任意点启动。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 524,
    type: "true_false",
    question: "在启动外部自动运行中，BCO运行必须作为LIN或PTP运动从实际位置移动到目标位置。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 525,
    type: "true_false",
    question: "Sim Pro中有各个品牌机器人的示教器的操作界面，可在虚拟示教器中操作机器人。",
    answer: "false",
    category: "仿真软件"
  },
  {
    id: 526,
    type: "true_false",
    question: "离线仿真软件生成离线程序前，需要校准工具坐标系和工件坐标系。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 527,
    type: "true_false",
    question: "SimPro可以创建的仿真程序类型有两种。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 528,
    type: "true_false",
    question: "添加机器人关节移动指令可点击Move具栏按钮。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 529,
    type: "true_false",
    question: "在SimPro中，放置动作是通过输出信号控制电磁阀动作指令来实现的。",
    answer: "false",
    category: "仿真软件"
  },
  {
    id: 530,
    type: "true_false",
    question: "SimPro中机器人仿真程序完成后，一键就可以生成机器人离线程序。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 531,
    type: "true_false",
    question: "工业机器人的性能测试一般采用激光非接触测量技术与振动测量设备。",
    answer: "true",
    category: "机器人测试"
  },
  {
    id: 532,
    type: "true_false",
    question: "可达工作空间(reachable workspace)，即机器人末端可达位置点的集合。",
    answer: "true",
    category: "机器人基础知识"
  },
  {
    id: 533,
    type: "true_false",
    question: "机器人本体的实际精度和理论设计模型可能会存在一定的误差。",
    answer: "true",
    category: "机器人基础知识"
  },
  {
    id: 534,
    type: "true_false",
    question: "机器人在装配后不需要进行标定工作。",
    answer: "false",
    category: "机器人测试"
  },
  {
    id: 535,
    type: "true_false",
    question: "机器人在执行某作业时可能会因为存在手部不能到达的作业死区(dead zone)而不能完成任务。",
    answer: "true",
    category: "机器人基础知识"
  },
  {
    id: 536,
    type: "true_false",
    question: "重复定位精度中不包括姿态。",
    answer: "false",
    category: "机器人基础知识"
  },
  {
    id: 537,
    type: "true_false",
    question: "SimPro可以通过激光跟踪传感器或立体摄像机，获得机器人的相关数据，得到机器人的能耗报告，且能够对机器人参数进行标定。",
    answer: "false",
    category: "仿真软件"
  },
  {
    id: 538,
    type: "true_false",
    question: "测量重复定位精度时，以空载运行。",
    answer: "false",
    category: "机器人测试"
  },
  {
    id: 539,
    type: "true_false",
    question: "只要检测仪器达到标准就可以从事检验检测工作。",
    answer: "false",
    category: "管理规范"
  },
  {
    id: 540,
    type: "true_false",
    question: "从事检验检测活动的人员，不得同时在两个以上检验检测机构从业。",
    answer: "true",
    category: "管理规范"
  },
  {
    id: 541,
    type: "true_false",
    question: "非授权签字人不得签发检验检测报告。",
    answer: "true",
    category: "管理规范"
  },
  {
    id: 542,
    type: "true_false",
    question: "投入作业前检查机器人防护罩挡板是否正确紧固，确定没有活动或松动部件，检查控制单元部件是否完整。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 543,
    type: "true_false",
    question: "如可能，将机器人气动系统连接在排气管道上，将系统设置为指定气压值。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 544,
    type: "true_false",
    question: "工业机器人工作站在工作区外安装控制单元，控制单元不得用作围栏的一部分。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 545,
    type: "true_false",
    question: "工业机器人工作站在控制单元通电前，检查确定电源的电路断流器处于打开位置。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 546,
    type: "true_false",
    question: "工业机器人在作业前，要确定控制单元的门已经锁定。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 547,
    type: "true_false",
    question: "机器人在手动示教模式时，仅能由指定人员编程。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 548,
    type: "true_false",
    question: "开始设定程序前，操作员必须检查机器人和控制系统，确保没有潜在的危险、不规范情况，并且没有人在工作区内。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 549,
    type: "true_false",
    question: "手动示教模式时，操作员在工作区内操作前，必须从外面确保所有所需的保护和安全措施到位并运作良好，特别是示教器端已进行调整(慢速、紧急制动、启动设备等)。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 550,
    type: "true_false",
    question: "程序创建过程中，只有持有手持式终端的操作员允许进入工作区。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 551,
    type: "true_false",
    question: "在为工业机器人检查程序时，需要有第二个操作员在工作区域内时，该操作员必须有与安全设备连锁的启动设备。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 552,
    type: "true_false",
    question: "在为工业机器人进行程序设定时，操作员必须与机器人保持一定距离，以避免任何违规机器运动。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 553,
    type: "true_false",
    question: "在某些情况下，如需近距离目视检查，只有当一个完整的检测周期低速执行完毕后，操作员才能在工作区内按照正常作业速度检测程序设定周期，检测时应注意机器人的运动方向。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 554,
    type: "true_false",
    question: "一个新的程序首次运行时，机器人可能以沿着出乎意料的路径移动。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 555,
    type: "true_false",
    question: "手动示教模式时应小心操作，时刻保持在机器人动作范围之外，慢速度检测。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 556,
    type: "true_false",
    question: "机器人启动自动模式前，操作员应检查机器人和控制系统以及工作区，确保没有潜在危险违规条件存在。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 557,
    type: "true_false",
    question: "选择机器人自动远程模式时应特别注意，PLC可执行自动操作，打开电机并启动程序。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 558,
    type: "true_false",
    question: "机器零件或控制单元的维护作业和更换仅在总开关处于断开状态并用扣锁锁住时才可进行。",
    answer: "true",
    category: "维护保养"
  },
  {
    id: 559,
    type: "true_false",
    question: "对机器人进行维护时，请确保控制单元没有通电(总开关断开)以及外部电源断开。",
    answer: "true",
    category: "维护保养"
  },
  {
    id: 560,
    type: "true_false",
    question: "机器人和控制系统的终止作业及拆卸仅限授权人员执行。",
    answer: "true",
    category: "维护保养"
  },
  {
    id: 561,
    type: "true_false",
    question: "机器终止作业前，应确保控制单元电源电压切断。",
    answer: "true",
    category: "维护保养"
  },
  {
    id: 562,
    type: "true_false",
    question: "机器人拆卸前，先切断机器人和控制单元之间的连接电缆，然后切断接地电缆。",
    answer: "true",
    category: "维护保养"
  },
  {
    id: 563,
    type: "true_false",
    question: "机器人拆卸时，如有连接气动系统，请从空气分布管道上切断机器人气动系统。",
    answer: "true",
    category: "维护保养"
  },
  {
    id: 564,
    type: "true_false",
    question: "职业技能是指从业者就业所需的技术和能力。",
    answer: "true",
    category: "职业素养"
  },
  {
    id: 565,
    type: "true_false",
    question: "自我的发展只有自己能把握，做好自己的主人，不能屈服于名誉，更不能自卑。",
    answer: "true",
    category: "职业素养"
  },
  {
    id: 566,
    type: "true_false",
    question: "通过职业生涯规划，人们可以确定自己的职业目标，选择自己的职业道路。",
    answer: "true",
    category: "职业素养"
  },
  {
    id: 567,
    type: "true_false",
    question: "职业待遇就是薪酬待遇，是人们在从事相关的劳动活动后获得的合法收入。",
    answer: "true",
    category: "职业素养"
  },
  {
    id: 568,
    type: "true_false",
    question: "职业生涯规划应在毕业参加工作后再进行规划。",
    answer: "false",
    category: "职业素养"
  },
  {
    id: 569,
    type: "true_false",
    question: "只有授权了的人员才能进行系统安装和投入作业。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 570,
    type: "true_false",
    question: "非操作人员也可以在车间自由出入。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 571,
    type: "true_false",
    question: "每次操作完成后都可以直接关闭电源。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 572,
    type: "true_false",
    question: "作业结束，必须关电源、关气阀、清理设备、整理现场。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 573,
    type: "true_false",
    question: "机器人操作以高效精准为首要原则。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 574,
    type: "true_false",
    question: "在执行例行程序时不必先回'HOME'点。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 575,
    type: "true_false",
    question: "当机器人控制系统关闭时，smartPAD上的紧急停止装置不起作用。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 576,
    type: "true_false",
    question: "在出现信号缺失后，只有当防护装置已重新关闭且关闭过程得到了确认之后，才可以继续自动运行方式。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 577,
    type: "true_false",
    question: "在规划设备时，也必须规划并设计总设备的安全功能。必须将工业机器人集成到总设备的安全系统中。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 578,
    type: "true_false",
    question: "在程序运行期间，可以自由更换运行。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 579,
    type: "true_false",
    question: "在机器人系统的导电部件上作业前必须将主开关关闭并采取措施以防重新接通，之后必须确定其无电压。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 580,
    type: "true_false",
    question: "只允许在技术完好的状态下按规定且有安全防患意识地使用工业机器人。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 581,
    type: "true_false",
    question: "应用安全预防措施是指定指导或监督适用范围规定活动的人员应尽的责任。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 582,
    type: "true_false",
    question: "系统安装和投入作业即能在拥有足够空间安放机器人及其配套的工作区内进行，也能在安全围栏内通行。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 583,
    type: "true_false",
    question: "机器人坐标系的转角A是绕Z轴旋转。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 584,
    type: "true_false",
    question: "机器人坐标系的转角B是绕X轴旋转。",
    answer: "false",
    category: "坐标系统"
  },
  {
    id: 585,
    type: "true_false",
    question: "机器人坐标系的转角C是绕Y轴旋转。",
    answer: "false",
    category: "坐标系统"
  },
  {
    id: 586,
    type: "true_false",
    question: "工业机器人的停止运转、仓储和废料处理必须按照各国的法律、规定及标准进行。",
    answer: "true",
    category: "管理规范"
  },
  {
    id: 587,
    type: "true_false",
    question: "在测试运行方式下，不允许对机器人控制系统的程序、输出端或其他参数进行更改",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 588,
    type: "true_false",
    question: "不遵守《安全规范》可能对操作人员造成人身伤害或对机器人和控制系统造成破坏。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 589,
    type: "true_false",
    question: "执行机构的腰部又称立柱，是支撑手臂的部件，其作用是带动臂部运动，与臂部运动结合，把腕部传递到需到的工作位置。",
    answer: "true",
    category: "机器人基础知识"
  },
  {
    id: 590,
    type: "true_false",
    question: "机器人的运动学模型，包括正运动学和逆运动学两部分内容。",
    answer: "true",
    category: "机器人基础知识"
  },
  {
    id: 591,
    type: "true_false",
    question: "自由度英文名称为Degree of freedom，缩写为DOF。自由度是机器人的一种重要技术指标，它是由机器人的结构决定的，并间接影响到机器人的机动性。",
    answer: "false",
    category: "机器人基础知识"
  },
  {
    id: 592,
    type: "true_false",
    question: "机器人的手部只有两个手指，通过手指的张开与闭合来实现手部松开和夹紧工件。",
    answer: "false",
    category: "机器人基础知识"
  },
  {
    id: 593,
    type: "true_false",
    question: "工业机器人的手部用以连接腰部和腕部。",
    answer: "false",
    category: "机器人基础知识"
  },
  {
    id: 594,
    type: "true_false",
    question: "项目团队成员在工作时，应摒弃个人喜好，围绕团队目标努力工作。",
    answer: "true",
    category: "团队合作"
  }
];

// 统计函数
export const getQuestionStats = () => {
  const stats = {};
  questionBank.forEach(question => {
    if (!stats[question.category]) {
      stats[question.category] = {
        total: 0,
        singleChoice: 0,
        trueFalse: 0
      };
    }
    stats[question.category].total++;
    if (question.type === 'single_choice') {
      stats[question.category].singleChoice++;
    } else if (question.type === 'true_false') {
      stats[question.category].trueFalse++;
    }
  });
  return stats;
};

// 题目总数
export const totalQuestions = questionBank.length;