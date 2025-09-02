// 工业机器人应用编程职业技能等级理论知识考核题库（KKR-RZ初级）
export const questionBank = [
  // 单选题部分（1-323）
  {
    id: 1,
    type: "single_choice",
    question: "KUKA机器人有（）种基本的运动方式。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "C",
    category: "KUKA机器人基础"
  },
  {
    id: 2,
    type: "single_choice",
    question: "KUKA机器人PTP的含义是（）。",
    options: {
      A: "运动方式是点到点",
      B: "运动方式是直线",
      C: "运动方式是圆弧",
      D: "运动方式不确定"
    },
    answer: "A",
    category: "机器人运动方式"
  },
  {
    id: 3,
    type: "single_choice",
    question: "在选择机器人运行方式时，手动快速运行应打到（）模式下。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "AUTEXT"
    },
    answer: "B",
    category: "机器人操作模式"
  },
  {
    id: 4,
    type: "single_choice",
    question: "工业机器人有'T1'、'T2'、'AUT'运行方式，其中（）属于手动运行方式。",
    options: {
      A: "T1和T2",
      B: "T1和AUT",
      C: "T2和AUT",
      D: "AUT"
    },
    answer: "A",
    category: "机器人操作模式"
  },
  {
    id: 5,
    type: "single_choice",
    question: "对机器人进行示教时，模式旋钮打到示教模式后，在此模式中，外部设备发出的自动启动信号（）。",
    options: {
      A: "无效",
      B: "有效",
      C: "超前有效",
      D: "滞后有效"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 6,
    type: "single_choice",
    question: "手动运行模式用于调试工作，调试工作是指所有为使机器人系统上可进入（）运行模式而必须在其上所执行的工作。",
    options: {
      A: "操作",
      B: "编辑",
      C: "管理",
      D: "自动"
    },
    answer: "D",
    category: "机器人操作模式"
  },
  {
    id: 7,
    type: "single_choice",
    question: "（）输入，表示输入输出端的值存储在系统变量中，并且此输入输出端已写保护。",
    options: {
      A: "SYS",
      B: "SIM",
      C: "SIMS",
      D: "TRUE"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 8,
    type: "single_choice",
    question: "外部IO接线，数字输入和数字输出接线均为（）V。",
    options: {
      A: "20",
      B: "24",
      C: "18",
      D: "36"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 9,
    type: "single_choice",
    question: "机器人初次通电时，用于接入库卡示教器SMartPAD的控制柜接口为（）。",
    options: {
      A: "X21- X31",
      B: "X20- X30",
      C: "X51",
      D: "X19"
    },
    answer: "D",
    category: "设备接口"
  },
  {
    id: 10,
    type: "single_choice",
    question: "机器人初次通电时，用于接入库卡零点校正工具，校正机器人零点的机器人本体接口为（）。",
    options: {
      A: "X21- X31",
      B: "X20- X30",
      C: "X32",
      D: "X19"
    },
    answer: "C",
    category: "设备接口"
  },
  {
    id: 11,
    type: "single_choice",
    question: "（）控制柜接口是指控制柜到机器人本体的动力线。",
    options: {
      A: "X21- X31",
      B: "X20- X30",
      C: "X32",
      D: "X19"
    },
    answer: "B",
    category: "设备接口"
  },
  {
    id: 12,
    type: "single_choice",
    question: "在库卡机器人的输入输出接口配置中按键状态（）表示，在显示中切换到之前的100个输入或输出端。",
    options: {
      A: "+10",
      B: "+100",
      C: "-10",
      D: "-100"
    },
    answer: "D",
    category: "IO控制"
  },
  {
    id: 13,
    type: "single_choice",
    question: "在库卡机器人的输入输出接口配置中按键状态（）表示，在显示中切换到之后的100个输入或输出端。",
    options: {
      A: "+10",
      B: "+100",
      C: "-10",
      D: "-100"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 14,
    type: "single_choice",
    question: "动态ANOUT联机最多可以同时接通（）个动态模拟输出端。",
    options: {
      A: "2",
      B: "4",
      C: "6",
      D: "8"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 15,
    type: "single_choice",
    question: "在（）指令组中选择DOUT指令，可创建数字量输出信号。",
    options: {
      A: "输入输出模块",
      B: "系统及技术",
      C: "坐标系统和工具",
      D: "基本类别"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 16,
    type: "single_choice",
    question: "在IO的信号点查看中，需要查看KUKA机器人本体的IO，则选择（）。",
    options: {
      A: "Board10",
      B: "Board8",
      C: "profibus8",
      D: "profibus10"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 17,
    type: "single_choice",
    question: "在IO的信号点查看中，需要查看KUKA机器人与PLC之间的IO，则选择（）进行。",
    options: {
      A: "Board10",
      B: "Board8",
      C: "profibus8",
      D: "profibus10"
    },
    answer: "C",
    category: "IO控制"
  },
  {
    id: 18,
    type: "single_choice",
    question: "（）是指工业机器人执行任务时，其腕轴交点能在空间活动的范围。",
    options: {
      A: "工作空间",
      B: "自由度",
      C: "工作载荷",
      D: "以上都是"
    },
    answer: "A",
    category: "机器人基础概念"
  },
  {
    id: 19,
    type: "single_choice",
    question: "对于编程控制的机器人运动，在程序连续运行，直至程序结尾，在测试过程中必须按住启动键的是（）运行方式。",
    options: {
      A: "GO",
      B: "MSTEP",
      C: "ISTEP",
      D: "BSTEP"
    },
    answer: "A",
    category: "程序运行"
  },
  {
    id: 20,
    type: "single_choice",
    question: "对于编程控制的机器人运动，在步进运动方式下，每个运动指令都是单个执行，每一个运动结束后，都必须重新按下启动键的是（）运行方式。",
    options: {
      A: "GO",
      B: "MSTEP",
      C: "ISTEP",
      D: "BSTEP"
    },
    answer: "B",
    category: "程序运行"
  },
  {
    id: 21,
    type: "single_choice",
    question: "对于编程控制的机器人运动，在增量步进时，把单句定义也单次运行，每步执行后都必须按下启动键的是（）运行方式。",
    options: {
      A: "GO",
      B: "MSTEP",
      C: "ISTEP",
      D: "BSTEP"
    },
    answer: "C",
    category: "程序运行"
  },
  {
    id: 22,
    type: "single_choice",
    question: "在KUKS导航器中编辑smartPAD程序模块，编辑方式为（）。",
    options: {
      A: "复制",
      B: "删除",
      C: "重命名",
      D: "以上都是"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 23,
    type: "single_choice",
    question: "（）界面可查看机器人、示教器及相关工具的版本信息。",
    options: {
      A: "设置",
      B: "版本",
      C: "信息",
      D: "网络"
    },
    answer: "C",
    category: "系统信息"
  },
  {
    id: 24,
    type: "single_choice",
    question: "在（）用户组中可进行文件操作，如新建程序、重命名或者删除。",
    options: {
      A: "管理员",
      B: "操作人员",
      C: "用户",
      D: "专家"
    },
    answer: "C",
    category: "用户权限"
  },
  {
    id: 25,
    type: "single_choice",
    question: "（）界面可查看机器人、示教器的版本信息。",
    options: {
      A: "设置",
      B: "版本",
      C: "信息",
      D: "网络"
    },
    answer: "C",
    category: "系统信息"
  },
  {
    id: 26,
    type: "single_choice",
    question: "开机后，示教器黑屏且无任何显示，不可能的原因是（）。",
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
    id: 27,
    type: "single_choice",
    question: "当开机后示教器停留在等待界面一直无法进入，可能的原因是（）。",
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
    id: 28,
    type: "single_choice",
    question: "设置示教器显示亮度，（）账户登录方可设置。",
    options: {
      A: "operator",
      B: "service",
      C: "Administrator",
      D: "不需要"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 29,
    type: "single_choice",
    question: "在'ControlPanel'菜单中，选择（）选项可弹出示教器亮度设置选项。",
    options: {
      A: "Network",
      B: "Display",
      C: "Screensaver",
      D: "SoftwareVersion"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 30,
    type: "single_choice",
    question: "在给机器人进行零点标定时，与EMD连接后在零点标定区域内的EMD都为（）颜色时可以进行标定。",
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
    id: 31,
    type: "single_choice",
    question: "进行零位矫正时，机器人各轴会移动至目标位置，这个位置被称为（）。",
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
    id: 32,
    type: "single_choice",
    question: "（）是导致机器人零点失效的原因。",
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
    id: 33,
    type: "single_choice",
    question: "LED指示灯与EMD连接后，测头没有与接口X32相连接，则零点标定LED指示灯显示（）。",
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
    id: 34,
    type: "single_choice",
    question: "LED指示灯与EMD连接后，测头与接口X32相连接，则零点标定LED指示灯显示（）。",
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
    id: 35,
    type: "single_choice",
    question: "测头没有与接口X32相连接，则在零点标定区域内的EMD的零点标定LED指示灯显示（）。",
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
    id: 36,
    type: "single_choice",
    question: "测头位于无法进行零点标定的位置上时，在零点标定区域内的EMD的零点标定LED指示灯显示（）。",
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
    id: 37,
    type: "single_choice",
    question: "测头直接位于用于零点标定的槽口旁或在凹口中时，在零点标定区域内的EMD的零点标定LED指示灯显示（）。",
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
    id: 38,
    type: "single_choice",
    question: "进行首次零点标定时应该选择（）运行方式。",
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
    id: 39,
    type: "single_choice",
    question: "用千分表标定零点时，应将机器人手动倍率降低到（）。",
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
    id: 40,
    type: "single_choice",
    question: "示教器的背面三个白色按钮是使能开关，用在（）模式下。",
    options: {
      A: "T1和T2",
      B: "T1和AUT",
      C: "T2和AUT",
      D: "AUT和EXT"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 41,
    type: "single_choice",
    question: "示教器的向后运行键，仅在（）模式下有用。",
    options: {
      A: "T1和T2",
      B: "T1和AUT",
      C: "T2和AUT",
      D: "AUT和EXT"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 42,
    type: "single_choice",
    question: "选择机器人的操作状态是用示教器的（）键。",
    options: {
      A: "状态",
      B: "软",
      C: "菜单",
      D: "NUM"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 43,
    type: "single_choice",
    question: "手动或自动模式下，机器人在直角坐标系下走XYZ方向若出现走直线不正确，姿态发生变化的原因可能是（）。",
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
    id: 44,
    type: "single_choice",
    question: "造成示教器触摸不准或停留在校准界面可能的原因是：（）。①示教器受到外力振动 ②触摸屏划伤 ③空气潮湿 ④电压不稳",
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
    id: 45,
    type: "single_choice",
    question: "原点位置校准是在出厂前进行的，但在下列情况必须再次进行原点位置校准：（）。①改变机器人与控制柜的组合时 ②更换电机、绝对编码器时 ③存储内存被删除时 ④机器人碰撞工件、原点偏移时",
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
    id: 46,
    type: "single_choice",
    question: "选择并应用屏幕下方显示的功能是（）键。",
    options: {
      A: "状态",
      B: "软",
      C: "菜单",
      D: "NUM"
    },
    answer: "B",
    category: "示教器操作"
  },
  {
    id: 47,
    type: "single_choice",
    question: "在示教器的信息窗口中，（）按键主要是用来提示操作者下一步将要做什么的。",
    options: {
      A: "通知信息",
      B: "等待信息",
      C: "对话信息",
      D: "状态信息"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 48,
    type: "single_choice",
    question: "机器人各个轴进行单独运动，称为（）坐标系。",
    options: {
      A: "轴坐标系",
      B: "世界坐标系",
      C: "基坐标",
      D: "工具坐标"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 49,
    type: "single_choice",
    question: "机器人从一点移动到另一点，最好使用（）坐标系。",
    options: {
      A: "轴坐标系",
      B: "世界坐标系",
      C: "基坐标",
      D: "工具坐标"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 50,
    type: "single_choice",
    question: "气吸附式手部是利用（）工作的。",
    options: {
      A: "吸盘内的压力和大气压之间的压力差",
      B: "驱动装置的驱动力",
      C: "弹性元件的弹性力",
      D: "通电后产生的电磁吸力"
    },
    answer: "A",
    category: "末端执行器"
  },
  {
    id: 51,
    type: "single_choice",
    question: "在示教器的信息窗口中，（）按键提示机器人目前所处的状态。",
    options: {
      A: "通知信息",
      B: "等待信息",
      C: "对话信息",
      D: "状态信息"
    },
    answer: "D",
    category: "示教器操作"
  },
  {
    id: 52,
    type: "single_choice",
    question: "在示教器的信息窗口中，（）按键表示某操作正在进行还没有结束。",
    options: {
      A: "通知信息",
      B: "等待信息",
      C: "对话信息",
      D: "状态信息"
    },
    answer: "B",
    category: "示教器操作"
  },
  {
    id: 53,
    type: "single_choice",
    question: "湿度保持在（）库卡机器人示教器能正常工作。",
    options: {
      A: "30%",
      B: "30%到80%",
      C: "80%",
      D: "100%"
    },
    answer: "B",
    category: "设备环境"
  },
  {
    id: 54,
    type: "single_choice",
    question: "示教器按键不良或者不灵，应该更换（）。",
    options: {
      A: "触摸面板",
      B: "数据线",
      C: "按键面板",
      D: "高压板"
    },
    answer: "C",
    category: "设备维护"
  },
  {
    id: 55,
    type: "single_choice",
    question: "示教器有显示无背光，应该更换（）。",
    options: {
      A: "触摸面板",
      B: "数据线",
      C: "按键面板",
      D: "高压板"
    },
    answer: "D",
    category: "设备维护"
  },
  {
    id: 56,
    type: "single_choice",
    question: "在四点法标定工具坐标系中，对第（）个点的方向是有要求的。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 57,
    type: "single_choice",
    question: "四点法中，要求设定最后一个点的方向，使工具坐标系的（）与世界坐标系的-Z方向相同。",
    options: {
      A: "+X",
      B: "+Y",
      C: "+Z",
      D: "-Z"
    },
    answer: "A",
    category: "坐标系标定"
  },
  {
    id: 58,
    type: "single_choice",
    question: "系统内提供了（）种方法进行工具坐标系的示教。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "C",
    category: "坐标系标定"
  },
  {
    id: 59,
    type: "single_choice",
    question: "建立工具坐标系时，用未知工具示教一个在全局参考系已经示教过的点P，该方法属于（）示教方法。",
    options: {
      A: "一点法",
      B: "三点法",
      C: "四点法",
      D: "六点法"
    },
    answer: "A",
    category: "坐标系标定"
  },
  {
    id: 60,
    type: "single_choice",
    question: "建立工具坐标时，用未知工具对示教点P进行4个不同姿态的示教，该方法属于（）示教方法。",
    options: {
      A: "一点法",
      B: "三点法",
      C: "四点法",
      D: "六点法"
    },
    answer: "C",
    category: "坐标系标定"
  },
  {
    id: 61,
    type: "single_choice",
    question: "六点(XZ)示教法中，取一个方向原点、一个与所需工具坐标系平行的X轴方向点、一个XZ平面上的点。此时，通过笛卡尔点动或工具点动进行示教，以使工具的（）保持不变。",
    options: {
      A: "垂直",
      B: "倾斜",
      C: "横向",
      D: "纵向"
    },
    answer: "B",
    category: "坐标系标定"
  },
  {
    id: 62,
    type: "single_choice",
    question: "采用（）示教方法对工具坐标标定，即在机器人附近找一点，使工具中心点对准该点切换姿态，共记录四次，即可自动生成工具坐标系的参数。",
    options: {
      A: "一点法",
      B: "三点法",
      C: "四点法",
      D: "六点法"
    },
    answer: "C",
    category: "坐标系标定"
  },
  {
    id: 63,
    type: "single_choice",
    question: "创建工具坐标系，可采用（）示教方法，找到示教物体，将机器人的TCP末端示教到示教物体处以不同姿态。",
    options: {
      A: "一点法和三点法",
      B: "三点法和四点法",
      C: "三点法和六点法",
      D: "四点法和六点法"
    },
    answer: "D",
    category: "坐标系标定"
  },
  {
    id: 64,
    type: "single_choice",
    question: "下列指令中属于数字量输入指令组的是（）。",
    options: {
      A: "IN",
      B: "DOUT",
      C: "OUT",
      D: "DOUTW.Set"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 65,
    type: "single_choice",
    question: "下列指令中属于数字量输出指令组的是（）。",
    options: {
      A: "OUT",
      B: "IN",
      C: "DIN",
      D: "DIN.Wait"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 66,
    type: "single_choice",
    question: "下列采集的信号不属于数字信号的是（）。",
    options: {
      A: "按钮的打开和闭合",
      B: "热电偶在工作时输出的电压信号",
      C: "物料的有和无",
      D: "以上都不对"
    },
    answer: "B",
    category: "信号处理"
  },
  {
    id: 67,
    type: "single_choice",
    question: "（）将数字输出端口设置为TRUE或者FALSE。",
    options: {
      A: "DOUT",
      B: "OUT",
      C: "IN",
      D: "DOUT.Pulse"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 68,
    type: "single_choice",
    question: "在按下示教器上的点动按键之前要考虑机器人的（），确认不受干涉。",
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
    id: 69,
    type: "single_choice",
    question: "在点动操作机器人时要采用较低的倍率速度，以增加对机器人的控制机会。一般控制速率在（）以下。",
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
    id: 70,
    type: "single_choice",
    question: "机器人周围区域必须清洁、无油、无水、无（）。",
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
    id: 71,
    type: "single_choice",
    question: "（）按钮（红色蘑菇头）：立即停止机器人运行（紧急情况使用）。",
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
    id: 72,
    type: "single_choice",
    question: "对机器人进行示教时，作为示教人员必须事先接受过专门的培训才行，与示教作业人员一起进行作业的监护人员，处在机器人可动范围外时，（），可进行共同作业。",
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
    id: 73,
    type: "single_choice",
    question: "为了确保安全，用示教编程器手动运行机器人时，机器人的最高速度限制为（）。",
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
    id: 74,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时，以（）。",
    options: {
      A: "示教最高速度来限制运行",
      B: "程序给定的速度运行",
      C: "示教最低速度来运行",
      D: "程序报错"
    },
    answer: "A",
    category: "程序运行"
  },
  {
    id: 75,
    type: "single_choice",
    question: "机器人轨迹控制过程需要通过求解（）。",
    options: {
      A: "运动学逆问题",
      B: "运动学正问题",
      C: "动力学正问题",
      D: "动力学逆问题"
    },
    answer: "A",
    category: "机器人理论"
  },
  {
    id: 76,
    type: "single_choice",
    question: "下列变量不属于模拟量的是（）。",
    options: {
      A: "电压",
      B: "电流",
      C: "温度",
      D: "开关量"
    },
    answer: "D",
    category: "信号处理"
  },
  {
    id: 77,
    type: "single_choice",
    question: "OUT是设置（）为指定的值。",
    options: {
      A: "模拟量输入值",
      B: "模拟量输出值",
      C: "数字量输入值",
      D: "数字量输出值"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 78,
    type: "single_choice",
    question: "WAITFORIN指令功能是等待（）。",
    options: {
      A: "模拟量输入值",
      B: "模拟量输出值",
      C: "数字量输入值",
      D: "数字量输出值"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 79,
    type: "single_choice",
    question: "WAITTIME这指令功能是（）。",
    options: {
      A: "时间等待",
      B: "模拟量等待",
      C: "数字量等待",
      D: "数字量输等待"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 80,
    type: "single_choice",
    question: "机器人与PLC做Profinet通讯时，应安装（）文件。",
    options: {
      A: "GSF",
      B: "GSD",
      C: "GFD",
      D: "GDF"
    },
    answer: "B",
    category: "通信协议"
  },
  {
    id: 81,
    type: "single_choice",
    question: "机器人与PLC做Profinet通讯时，数据交互应用的是（）。",
    options: {
      A: "数据块",
      B: "Modbus协议",
      C: "PPI协议",
      D: "TCP/IP协议"
    },
    answer: "A",
    category: "通信协议"
  },
  {
    id: 82,
    type: "single_choice",
    question: "在PLC里，与机器人进行数据交互的数据类型是（）。",
    options: {
      A: "BOOL",
      B: "Int",
      C: "Byte",
      D: "全都包含"
    },
    answer: "D",
    category: "通信协议"
  },
  {
    id: 83,
    type: "single_choice",
    question: "机器人和外部PLC做Profinet通信时，外部PLC发送的关于视觉的坐标等数据类型为（）。",
    options: {
      A: "Int",
      B: "Bool",
      C: "Real",
      D: "Byte"
    },
    answer: "A",
    category: "通信协议"
  },
  {
    id: 84,
    type: "single_choice",
    question: "（）坐标系用于描述工具的特性，例如焊枪或者夹具。",
    options: {
      A: "用户",
      B: "关节",
      C: "世界",
      D: "工具"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 85,
    type: "single_choice",
    question: "库卡机器人TCP坐标系的手动示教，需要示教（）个点。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "C",
    category: "坐标系标定"
  },
  {
    id: 86,
    type: "single_choice",
    question: "机器人零点丢失后会有（）后果。",
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
    id: 87,
    type: "single_choice",
    question: "工业机器人（）适合夹持圆柱形工件。",
    options: {
      A: "V型手指",
      B: "平面指",
      C: "尖指",
      D: "特型指"
    },
    answer: "A",
    category: "末端执行器"
  },
  {
    id: 88,
    type: "single_choice",
    question: "利用（）抓取一般制品是最廉价的一种方法。",
    options: {
      A: "手指气缸",
      B: "柔性手指",
      C: "真空吸盘",
      D: "电磁铁"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 89,
    type: "single_choice",
    question: "在PLC里，机器人控制夹爪打开以及关闭信号的数据类型为（）。",
    options: {
      A: "Bool",
      B: "Int",
      C: "Byte",
      D: "Word"
    },
    answer: "A",
    category: "通信协议"
  },
  {
    id: 90,
    type: "single_choice",
    question: "IF条件判断表达式必须是（）类型。",
    options: {
      A: "num",
      B: "bool",
      C: "robtarget",
      D: "jointtarget"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 91,
    type: "single_choice",
    question: "CALL调用指令，能够调用其它程序作为子程序，且调用的程序必须在（）中。",
    options: {
      A: "编写程序的项目",
      B: "其他程序的项目",
      C: "其他项目的子程序",
      D: "主程序"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 92,
    type: "single_choice",
    question: "CALL调用指令，只能调用（）下的子程序，且子程序中不应有循环。",
    options: {
      A: "相同工程名",
      B: "相同工程名",
      C: "任何项目",
      D: "主程序所在项目"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 93,
    type: "single_choice",
    question: "新建完项目及程序后，我们还需要（）程序才能开始对程序的编辑。",
    options: {
      A: "加载",
      B: "打开",
      C: "刷新",
      D: "终止"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 94,
    type: "single_choice",
    question: "修改或加载程序时，点击（），启动指针（绿色箭头）就会与光标对齐。",
    options: {
      A: "编辑",
      B: "新建",
      C: "高级",
      D: "设置PC"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 95,
    type: "single_choice",
    question: "机器人经常使用的程序可以设置为主程序，每台机器人可以设置（）主程序。",
    options: {
      A: "1个",
      B: "5个",
      C: "3个",
      D: "无限制"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 96,
    type: "single_choice",
    question: "目前工业机器人常用编程方法有（）和离线编程两种。",
    options: {
      A: "示教编程",
      B: "PLC编程",
      C: "软件编程",
      D: "计算机编程"
    },
    answer: "A",
    category: "编程方法"
  },
  {
    id: 97,
    type: "single_choice",
    question: "TP示教盒的作用不包括（）。",
    options: {
      A: "点动机器人",
      B: "离线编程",
      C: "试运行程序",
      D: "查阅机器人状态"
    },
    answer: "B",
    category: "示教器功能"
  },
  {
    id: 98,
    type: "single_choice",
    question: "在GO的程序运行方式下，程序不停地运行，直到程序结尾，所需的用户权限为功能组（）设置。",
    options: {
      A: "程序运行",
      B: "关键手动",
      C: "线性运动",
      D: "以上都不对"
    },
    answer: "A",
    category: "用户权限"
  },
  {
    id: 99,
    type: "single_choice",
    question: "CALL称为（）指令，能够调用其它程序作为子程序，且调用的程序必须在编写项目中。",
    options: {
      A: "中断",
      B: "延时",
      C: "调用",
      D: "等待"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 100,
    type: "single_choice",
    question: "下列是中断类型的是（）。",
    options: {
      A: "Procedure",
      B: "Trap",
      C: "Function",
      D: "num"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 101,
    type: "single_choice",
    question: "WAIT指令作用是（）。",
    options: {
      A: "下一个运动段的某点",
      B: "某一触发平面",
      C: "经过指定位置",
      D: "等待命令"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 102,
    type: "single_choice",
    question: "（）指令用于等待信号。",
    options: {
      A: "WAIT",
      B: "SET",
      C: "WAITTIME",
      D: "RESET"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 103,
    type: "single_choice",
    question: "不属于机器人触发指令的是（）。",
    options: {
      A: "OnDistance",
      B: "OnParameter",
      C: "OnPlane",
      D: "GetRobotPos"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 104,
    type: "single_choice",
    question: "（）指令用于等待输入信号。",
    options: {
      A: "WAITFOR",
      B: "WAITFOROUT",
      C: "OnPlane",
      D: "WAITFORIN"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 105,
    type: "single_choice",
    question: "kuka机器人的管理权限中（）是最高权限。",
    options: {
      A: "维修员",
      B: "程序员",
      C: "管理员",
      D: "操作员"
    },
    answer: "C",
    category: "用户权限"
  },
  {
    id: 106,
    type: "single_choice",
    question: "要降低库卡机器人的运行速度，应按下示教器上的（）按钮。",
    options: {
      A: "V+",
      B: "START",
      C: "STOP",
      D: "V-"
    },
    answer: "D",
    category: "示教器操作"
  },
  {
    id: 107,
    type: "single_choice",
    question: "要提高库卡机器人的运行速度，应按下示教器上的（）按钮。",
    options: {
      A: "V+",
      B: "START",
      C: "STOP",
      D: "V-"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 108,
    type: "single_choice",
    question: "能通过扩展IO连接外部按钮对机器人进行启停控制的是（）模式。",
    options: {
      A: "手动",
      B: "自动",
      C: "远程",
      D: "调试"
    },
    answer: "C",
    category: "机器人操作模式"
  },
  {
    id: 109,
    type: "single_choice",
    question: "（）状态下程序从启动指针开始运行，直到程序结束或松开启动按钮停止。",
    options: {
      A: "连续",
      B: "单步",
      C: "反向",
      D: "微速"
    },
    answer: "A",
    category: "程序运行"
  },
  {
    id: 110,
    type: "single_choice",
    question: "（）模式下运行完成启动指针对应的程序或者松开启动按钮后停止。",
    options: {
      A: "连续",
      B: "单步",
      C: "反向",
      D: "微速"
    },
    answer: "B",
    category: "程序运行"
  },
  {
    id: 111,
    type: "single_choice",
    question: "（）也是程序连续运行，只是运行顺序相反。",
    options: {
      A: "连续",
      B: "单步",
      C: "反向",
      D: "微速"
    },
    answer: "C",
    category: "程序运行"
  },
  {
    id: 112,
    type: "single_choice",
    question: "要实现程序在每一程序行后暂停，应该选择（）程序运行方式。",
    options: {
      A: "GO",
      B: "#BSTEP",
      C: "#MSTEP",
      D: "#ISTEP"
    },
    answer: "D",
    category: "程序运行"
  },
  {
    id: 113,
    type: "single_choice",
    question: "参考坐标系是外部PLC功能块通过端口映射赋给机器人的，所以主要参数有（）和映射端口。",
    options: {
      A: "工件坐标系",
      B: "工具坐标系",
      C: "基坐标系",
      D: "世界坐标系"
    },
    answer: "C",
    category: "坐标系"
  },
  {
    id: 114,
    type: "single_choice",
    question: "下面关于WAITFOROUT命令的说法正确的是（）。",
    options: {
      A: "WAITFOROUT命令仅对CARTPOS类型的点不起作用",
      B: "加载用户坐标系后，示教记录的WAITFOROUT类型点的数值是在World坐标系下的值，不再是用户坐标系下的值。",
      C: "如果未使用WAITFOROUT命令加载用户坐标系，又希望手动时应用用户坐标系，可在位置界面快速选择",
      D: "以上都不对"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 115,
    type: "single_choice",
    question: "指令（）可以实现使机器人各关节相对于参考点移动设定。",
    options: {
      A: "PTP",
      B: "LIN",
      C: "GetRobotPos",
      D: "LINTR"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 116,
    type: "single_choice",
    question: "指令（）使机器人对于参考点平行移动的设定。",
    options: {
      A: "PTPAbs",
      B: "LIN",
      C: "GetRobotPos",
      D: "LINTR"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 117,
    type: "single_choice",
    question: "LIN运动指令可添加（）和（）。",
    options: {
      A: "速度，转弯区半径",
      B: "工具坐标，用户坐标",
      C: "目标点，偏移量",
      D: "目标点，转弯区半径"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 118,
    type: "single_choice",
    question: "允许机器人手臂各零件之间发生相对运动的机构称为（）。",
    options: {
      A: "机座",
      B: "机身",
      C: "手腕",
      D: "关节"
    },
    answer: "D",
    category: "机器人结构"
  },
  {
    id: 119,
    type: "single_choice",
    question: "要修改kuka机器人的示教点位置，从（）界面进入。",
    options: {
      A: "系统",
      B: "文件",
      C: "项目",
      D: "变量"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 120,
    type: "single_choice",
    question: "机器人的控制方式分为点位控制和（）。",
    options: {
      A: "点对点控制",
      B: "点到点控制",
      C: "连续轨迹控制",
      D: "任意位置控制"
    },
    answer: "C",
    category: "控制方式"
  },
  {
    id: 121,
    type: "single_choice",
    question: "末端的位姿是由（）两部分变量构成。",
    options: {
      A: "位置与速度",
      B: "姿态与位置",
      C: "位置与运行状态",
      D: "姿态与速度"
    },
    answer: "B",
    category: "机器人理论"
  },
  {
    id: 122,
    type: "single_choice",
    question: "位置等级是指机器人经过示教的位置时的接近程度，其中位置等级表述正确的是（）。",
    options: {
      A: "PL值越小，运行轨迹越精准",
      B: "PL值与运行轨迹关系不大",
      C: "PL值越小，运行轨迹越精准",
      D: "PL值越小，运行轨迹越精准"
    },
    answer: "A",
    category: "机器人参数"
  },
  {
    id: 123,
    type: "single_choice",
    question: "运动学主要是研究机器人的（）。",
    options: {
      A: "运动的应用",
      B: "动力的传递与转换",
      C: "动力源是什么",
      D: "运动和时间的关系"
    },
    answer: "D",
    category: "机器人理论"
  },
  {
    id: 124,
    type: "single_choice",
    question: "机器人动力学主要研究（）。",
    options: {
      A: "动力源是什么",
      B: "动力的传递与转换",
      C: "运动和时间的关系",
      D: "动力的应用"
    },
    answer: "B",
    category: "机器人理论"
  },
  {
    id: 125,
    type: "single_choice",
    question: "机器人轨迹控制过程需要通过求解（）获得各个关节角的位置控制系统的设定值。",
    options: {
      A: "运动学正问题",
      B: "动力学正问题",
      C: "运动学逆问题",
      D: "动力学逆问题"
    },
    answer: "C",
    category: "机器人理论"
  },
  {
    id: 126,
    type: "single_choice",
    question: "一个刚体在空间运动具有（）个自由度。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "D",
    category: "机器人理论"
  },
  {
    id: 127,
    type: "single_choice",
    question: "为了获得非常平稳的加工过程，希望作业启动位置为零时（）。",
    options: {
      A: "速度为零，加速度恒定",
      B: "速度为零，加速度为零",
      C: "速度恒定，加速度为零",
      D: "速度恒定，加速度恒定"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 128,
    type: "single_choice",
    question: "示教再现控制为一种在线编程方式，它的最大问题是（）。",
    options: {
      A: "劳动强度大",
      B: "占用生产时间",
      C: "操作人员安全问题",
      D: "容易产生废品"
    },
    answer: "B",
    category: "编程方法"
  },
  {
    id: 129,
    type: "single_choice",
    question: "要调整机器人在示教点末段工具的姿态，一般使用（）方式。",
    options: {
      A: "关节运动",
      B: "线性运动的XYZ",
      C: "调整4-6轴",
      D: "调整ABC参数"
    },
    answer: "B",
    category: "示教编程"
  },
  {
    id: 130,
    type: "single_choice",
    question: "在位置界面的（）区域可以监视末端实时运动速度。",
    options: {
      A: "位置信息",
      B: "运动方向",
      C: "电机数值",
      D: "信息显示"
    },
    answer: "D",
    category: "系统监控"
  },
  {
    id: 131,
    type: "single_choice",
    question: "设置加速度的加速类型参数是（）。",
    options: {
      A: "ramp",
      B: "acceleration",
      C: "rate of rise",
      D: "improve"
    },
    answer: "A",
    category: "运动参数"
  },
  {
    id: 132,
    type: "single_choice",
    question: "管理员的用户名为（）。",
    options: {
      A: "root",
      B: "administrator",
      C: "master",
      D: "boss"
    },
    answer: "B",
    category: "用户权限"
  },
  {
    id: 133,
    type: "single_choice",
    question: "kuka机器人有（）种操作权限等级。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "A",
    category: "用户权限"
  },
  {
    id: 134,
    type: "single_choice",
    question: "维护、故障排除和维修仅限（）人员进行。",
    options: {
      A: "操作",
      B: "指定",
      C: "财务",
      D: "管理"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 135,
    type: "single_choice",
    question: "系统正常启动后，（）灯常亮。",
    options: {
      A: "POW",
      B: "RUN",
      C: "ERR",
      D: "REDY"
    },
    answer: "B",
    category: "系统状态"
  },
  {
    id: 136,
    type: "single_choice",
    question: "报警产生时，（）灯常亮。",
    options: {
      A: "RUN",
      B: "REDY",
      C: "POW",
      D: "ERR"
    },
    answer: "D",
    category: "系统状态"
  },
  {
    id: 137,
    type: "single_choice",
    question: "关闭机器人系统之前需要先关闭（）。",
    options: {
      A: "辅助电源",
      B: "控制器电源",
      C: "示教器电源",
      D: "伺服系统电源"
    },
    answer: "D",
    category: "系统操作"
  },
  {
    id: 138,
    type: "single_choice",
    question: "机器人系统的备份，一般采用（）做为数据媒介。",
    options: {
      A: "磁带",
      B: "光盘",
      C: "U盘",
      D: "硬盘"
    },
    answer: "C",
    category: "数据管理"
  },
  {
    id: 139,
    type: "single_choice",
    question: "如果多次用KreDiag进行存档，则最多能创建（）个档案，档案再增加时则覆盖最老的档案。",
    options: {
      A: "10",
      B: "1",
      C: "100",
      D: "1000"
    },
    answer: "A",
    category: "数据管理"
  },
  {
    id: 140,
    type: "single_choice",
    question: "若通过菜单项将所有数据进行存档，并且已有一个存档，则原有存档被（）。",
    options: {
      A: "保存",
      B: "覆盖",
      C: "重命名",
      D: "以上都不对"
    },
    answer: "B",
    category: "数据管理"
  },
  {
    id: 141,
    type: "single_choice",
    question: "程序文件的导入和导出可以使用（）。",
    options: {
      A: "网线",
      B: "串口",
      C: "USB口",
      D: "RS485口"
    },
    answer: "C",
    category: "数据传输"
  },
  {
    id: 142,
    type: "single_choice",
    question: "要导入或者导出程序，应该在（）界面操作。",
    options: {
      A: "系统",
      B: "变量",
      C: "全局",
      D: "项目"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 143,
    type: "single_choice",
    question: "示教器文件菜单中的输入是指（）。",
    options: {
      A: "向外接设备导出程序",
      B: "向CF卡导入程序",
      C: "创建程序",
      D: "关闭程序"
    },
    answer: "B",
    category: "文件操作"
  },
  {
    id: 144,
    type: "single_choice",
    question: "示教器文件菜单中的输出是指（）。",
    options: {
      A: "向CF卡导入程序",
      B: "向外接设备导出程序",
      C: "关闭程序",
      D: "创建程序"
    },
    answer: "B",
    category: "文件操作"
  },
  {
    id: 145,
    type: "single_choice",
    question: "设置PC按钮的作用是（）。",
    options: {
      A: "设置程序指针",
      B: "设置电脑",
      C: "设置只读",
      D: "减速运行"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 146,
    type: "single_choice",
    question: "程序界面的'高级'按钮中的格式化菜单作用是（）。",
    options: {
      A: "缩进排序",
      B: "删除程序",
      C: "打开子程序",
      D: "查找指令"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 147,
    type: "single_choice",
    question: "位置界面中的'电机数值'显示的是各轴（）的角度。",
    options: {
      A: "关节",
      B: "电机实际转动",
      C: "法兰",
      D: "平均"
    },
    answer: "B",
    category: "系统监控"
  },
  {
    id: 148,
    type: "single_choice",
    question: "程序结束的标记是（）。",
    options: {
      A: "CRLF",
      B: "END",
      C: "ENDFILE",
      D: "LAST"
    },
    answer: "B",
    category: "程序结构"
  },
  {
    id: 149,
    type: "single_choice",
    question: "在项目管理中，除了系统、（）是系统默认的项目，其他的项目都是用户自己建立的。",
    options: {
      A: "root",
      B: "user",
      C: "参数",
      D: "全局"
    },
    answer: "D",
    category: "项目管理"
  },
  {
    id: 150,
    type: "single_choice",
    question: "新建一个程序时，需将这个程序放到某个（）下。",
    options: {
      A: "文件夹",
      B: "变量",
      C: "坐标",
      D: "项目"
    },
    answer: "D",
    category: "项目管理"
  },
  {
    id: 151,
    type: "single_choice",
    question: "每一个项目必须包含一个（）。",
    options: {
      A: "TCP",
      B: "程序",
      C: "变量",
      D: "工件坐标"
    },
    answer: "B",
    category: "项目结构"
  },
  {
    id: 152,
    type: "single_choice",
    question: "项目的默认名称是（）。",
    options: {
      A: "project1",
      B: "group1",
      C: "file1",
      D: "document1"
    },
    answer: "A",
    category: "项目管理"
  },
  {
    id: 153,
    type: "single_choice",
    question: "（）不会随程序复制。",
    options: {
      A: "数组",
      B: "示教点",
      C: "局部变量",
      D: "全局变量"
    },
    answer: "D",
    category: "程序复制"
  },
  {
    id: 154,
    type: "single_choice",
    question: "系统默认的指令插入方式是向光标（）插入。",
    options: {
      A: "后",
      B: "左",
      C: "右",
      D: "前"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 155,
    type: "single_choice",
    question: "复制程序的操作在（）界面中。",
    options: {
      A: "变量",
      B: "系统",
      C: "项目",
      D: "局部"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 156,
    type: "single_choice",
    question: "复制、粘贴都需要通过（）进行数据中转。",
    options: {
      A: "硬盘",
      B: "U盘",
      C: "剪贴板",
      D: "网络"
    },
    answer: "C",
    category: "数据操作"
  },
  {
    id: 157,
    type: "single_choice",
    question: "文件系统是操作系统用于明确存储设备或分区上的（）的方法和数据结构。",
    options: {
      A: "音频",
      B: "视频",
      C: "文件",
      D: "动画"
    },
    answer: "C",
    category: "文件系统"
  },
  {
    id: 158,
    type: "single_choice",
    question: "FAT32和NTFS是目前最常用的两种（）。",
    options: {
      A: "文件系统",
      B: "后缀名",
      C: "硬盘",
      D: "U盘"
    },
    answer: "A",
    category: "文件系统"
  },
  {
    id: 159,
    type: "single_choice",
    question: "FAT32分区格式能存放的单个文件最大（）。",
    options: {
      A: "4TB",
      B: "4GB",
      C: "4MB",
      D: "4KB"
    },
    answer: "B",
    category: "文件系统"
  },
  {
    id: 160,
    type: "single_choice",
    question: "当在电脑上向U盘存入一个程序而在示教器上无法找到它，原因可能是（）。",
    options: {
      A: "U盘接口损坏",
      B: "文件系统不一致",
      C: "U盘品牌不符",
      D: "U盘尺寸不符"
    },
    answer: "B",
    category: "故障诊断"
  },
  {
    id: 161,
    type: "single_choice",
    question: "NTFS支持的分区大小可以达到（）。",
    options: {
      A: "2GB",
      B: "2MB",
      C: "2TB",
      D: "2KB"
    },
    answer: "C",
    category: "文件系统"
  },
  {
    id: 162,
    type: "single_choice",
    question: "对文件进行重命名，不能（）。",
    options: {
      A: "使用字母",
      B: "与现有文件重名",
      C: "使用数字",
      D: "使用键盘"
    },
    answer: "B",
    category: "文件操作"
  },
  {
    id: 163,
    type: "single_choice",
    question: "对文件进行重命名，系统将会（）。",
    options: {
      A: "将内容清空",
      B: "将内容重新排列",
      C: "仅修改文件名",
      D: "修改内容和文件名"
    },
    answer: "C",
    category: "文件操作"
  },
  {
    id: 164,
    type: "single_choice",
    question: "（）指令也叫关节指令。",
    options: {
      A: "Circ",
      B: "LIN",
      C: "PTP",
      D: "MOVE"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 165,
    type: "single_choice",
    question: "（）指令也叫线性指令。",
    options: {
      A: "Circ",
      B: "LIN",
      C: "PTP",
      D: "MOVE"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 166,
    type: "single_choice",
    question: "（）指令又叫圆弧指令。",
    options: {
      A: "Circ",
      B: "LIN",
      C: "PTP",
      D: "MOVE"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 167,
    type: "single_choice",
    question: "点击（）按键可以进入到指令选择菜单。",
    options: {
      A: "粘贴",
      B: "复制",
      C: "新建",
      D: "剪切"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 168,
    type: "single_choice",
    question: "机器人的指令主要有运动指令、（）流程控制指令、运算指令以及特殊功能指令。",
    options: {
      A: "网络",
      B: "输入输出指令",
      C: "电源控制",
      D: "夹具控制"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 169,
    type: "single_choice",
    question: "PTP指令，两个位置之间的路径（）。",
    options: {
      A: "是虚线",
      B: "一定是弧线",
      C: "一定是直线",
      D: "不一定是直线"
    },
    answer: "D",
    category: "运动指令"
  },
    {
    id: 170,
    type: "single_choice",
    question: "焊接、涂胶等应用对路径要求高的场合进行使用（）指令。",
    options: {
      A: "IO",
      B: "网络",
      C: "PTP",
      D: "LIN"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 171,
    type: "single_choice",
    question: "lin 指令在（）目录下。",
    options: {
      A: "运动",
      B: "收藏",
      C: "输入输出",
      D: "功能块"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 172,
    type: "single_choice",
    question: "直线指令lin使用时要注意空间直线距离（）。",
    options: {
      A: "越远越好",
      B: "不宜太近",
      C: "不宜太远",
      D: "不超过5cm"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 173,
    type: "single_choice",
    question: "系统自动生成的lin示教点默认名称为（）。",
    options: {
      A: "cp",
      B: "ap",
      C: "1",
      D: "gp"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 174,
    type: "single_choice",
    question: "Circ指令，第一个点是（）。",
    options: {
      A: "圆弧的起点",
      B: "曲率控制",
      C: "圆弧的终点",
      D: "定位点"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 175,
    type: "single_choice",
    question: "Circ指令，第二个点是（）。",
    options: {
      A: "圆弧的起点",
      B: "曲率控制",
      C: "圆弧的终点",
      D: "定位点"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 176,
    type: "single_choice",
    question: "Circ指令，第三个点是（）。",
    options: {
      A: "圆弧的起点",
      B: "曲率控制",
      C: "圆弧的终点",
      D: "定位点"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 177,
    type: "single_choice",
    question: "如果机器人在标准模式下出现了手轴奇点，则可使用手动（）运动。",
    options: {
      A: "LIN",
      B: "CIRC",
      C: "PTP",
      D: "以上都不对"
    },
    answer: "C",
    category: "奇点处理"
  },
  {
    id: 178,
    type: "single_choice",
    question: "两点间的插补沿着直线的点群来逼近的是（）。",
    options: {
      A: "点插补",
      B: "直线插补",
      C: "空间插补",
      D: "随机插补"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 179,
    type: "single_choice",
    question: "插补即系统依照一定方法确定（）的过程。",
    options: {
      A: "运动轨迹",
      B: "IO状态",
      C: "系统步骤",
      D: "信号输入"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 180,
    type: "single_choice",
    question: "不会产生奇异点的运动指令是（）。",
    options: {
      A: "直线运动",
      B: "关节运动",
      C: "圆弧运动",
      D: "码垛"
    },
    answer: "B",
    category: "奇点处理"
  },
  {
    id: 181,
    type: "single_choice",
    question: "添加PTP指令后，（）是必须设定的。",
    options: {
      A: "pos",
      B: "dyn",
      C: "ovl",
      D: "mass"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 182,
    type: "single_choice",
    question: "指令中的pos参数是指（）。",
    options: {
      A: "速度",
      B: "位置",
      C: "平滑率",
      D: "半径"
    },
    answer: "B",
    category: "运动参数"
  },
  {
    id: 183,
    type: "single_choice",
    question: "在切换成自动化外部运行方式时，3D鼠标自动定位为（）度。",
    options: {
      A: "0",
      B: "30",
      C: "60",
      D: "90"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 184,
    type: "single_choice",
    question: "系统自动生成的PTP示教点默认名称为（）。",
    options: {
      A: "P",
      B: "ap",
      C: "1",
      D: "gp"
    },
    answer: "B",
    category: "示教编程"
  },
  {
    id: 185,
    type: "single_choice",
    question: "平面2轴机器人的直线指令起始点必须（）。",
    options: {
      A: "在同一轴方向",
      B: "在不同平面内",
      C: "相距3cm以内",
      D: "在同一平面内"
    },
    answer: "D",
    category: "运动约束"
  },
  {
    id: 186,
    type: "single_choice",
    question: "有着6个自由度的KUKA机器人具有（）个不同的奇点位置。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "6"
    },
    answer: "C",
    category: "奇点处理"
  },
  {
    id: 187,
    type: "single_choice",
    question: "假如直线运动的起点与目标点的TCP姿态不同，那么会（）的方式从起点姿态过渡到目标点的姿态。",
    options: {
      A: "通过姿态连续插补",
      B: "通过关节插补",
      C: "不进行姿态控制",
      D: "随机姿态"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 188,
    type: "single_choice",
    question: "机器人TCP末端做整圆运动，必须执行（）圆弧运动指令。",
    options: {
      A: "一个",
      B: "三个",
      C: "六个",
      D: "两个"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 189,
    type: "single_choice",
    question: "圆弧指令中，起始位置、辅助位置以及目标位置必须能够（）的被区分开。",
    options: {
      A: "稍微",
      B: "随意",
      C: "大约",
      D: "明显"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 190,
    type: "single_choice",
    question: "圆弧指令起始位置是上一个运动指令的（）或者当前机器人 TCP 位置。",
    options: {
      A: "目标位置",
      B: "起始位置",
      C: "过程中一点",
      D: "任一点"
    },
    answer: "A",
    category: "运动指令"
  },
  {
    id: 191,
    type: "single_choice",
    question: "PTPRel 指令的（）可以是位移也可以是角度。",
    options: {
      A: "绝对偏移",
      B: "速度",
      C: "距离",
      D: "相对偏移"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 192,
    type: "single_choice",
    question: "LinRel 指令为线性插补（）运动指令。",
    options: {
      A: "随机",
      B: "补偿",
      C: "绝对",
      D: "相对"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 193,
    type: "single_choice",
    question: "MoveRobotAxis 指令可将机器人某（）运动至指定角度。",
    options: {
      A: "信号",
      B: "工具",
      C: "坐标",
      D: "一轴"
    },
    answer: "D",
    category: "运动指令"
  },
  {
    id: 194,
    type: "single_choice",
    question: "StopRobot 指令是用来停止机器人运动并且（）已经计算好的插补路径。",
    options: {
      A: "补偿",
      B: "重算",
      C: "丢弃",
      D: "保留"
    },
    answer: "C",
    category: "运动指令"
  },
  {
    id: 195,
    type: "single_choice",
    question: "压电式传感器，即应用半导体压电效应可以测量（）。",
    options: {
      A: "电压",
      B: "亮度",
      C: "力和力矩",
      D: "距离"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 196,
    type: "single_choice",
    question: "光电开关的接收器根据所接收到的光线强弱对目标物体实现探测，产生（）。",
    options: {
      A: "开关信号",
      B: "压力信号",
      C: "警示信号",
      D: "频率信号"
    },
    answer: "A",
    category: "传感器技术"
  },
  {
    id: 197,
    type: "single_choice",
    question: "选用接近开关时应注意对工作电压、负载电流、（）、检测距离等各项指标的要求。",
    options: {
      A: "工作功率",
      B: "响应频率",
      C: "工作电流",
      D: "工作速度"
    },
    answer: "B",
    category: "传感器技术"
  },
  {
    id: 198,
    type: "single_choice",
    question: "机器人力传感器就安装部位来讲，可以分为关节力传感器、腕力传感器、（）。",
    options: {
      A: "阻力传感器",
      B: "加速度传感器",
      C: "压力传感器",
      D: "指力传感器"
    },
    answer: "D",
    category: "传感器技术"
  },
  {
    id: 199,
    type: "single_choice",
    question: "光电开关的接受器根据所接收到的光线强弱对目标物体实现探测，产生（）。",
    options: {
      A: "开关信号",
      B: "压力信号",
      C: "警示信号",
      D: "频率信号"
    },
    answer: "A",
    category: "传感器技术"
  },
  {
    id: 200,
    type: "single_choice",
    question: "传感器在整个测量范围内所能辨别的被测量的最小变化量，或者所能辨别的不同被测量的个数，被称之为传感器的（）。",
    options: {
      A: "精度",
      B: "重复性",
      C: "分辨率",
      D: "灵敏度"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 201,
    type: "single_choice",
    question: "机器视觉系统是一种（）的光传感系统，同时集成软硬件，综合现代计算机，光学、电子技术。",
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
    id: 202,
    type: "single_choice",
    question: "高速在线测量中，为减小被测物模糊，需要选用（）照明技术。",
    options: {
      A: "条形光",
      B: "平行光",
      C: "频闪光",
      D: "结构光"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 203,
    type: "single_choice",
    question: "视觉应用中，随着工作距离变大，视野相应（）。",
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
    id: 204,
    type: "single_choice",
    question: "传感器包括以下三个功能部件：敏感元件、传感元件、（）元件。",
    options: {
      A: "辅助",
      B: "控制",
      C: "执行",
      D: "转换"
    },
    answer: "D",
    category: "传感器技术"
  },
  {
    id: 205,
    type: "single_choice",
    question: "传感器的运用，使得机器人具有了一定的（）能力。",
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
    id: 206,
    type: "single_choice",
    question: "测量机器人关节（）和角位移的传感器是机器人位置反馈控制中必不可少的元件。",
    options: {
      A: "脉冲位移",
      B: "增量位移",
      C: "线位移",
      D: "重量增量"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 207,
    type: "single_choice",
    question: "数字图像处理研究的内容不包括（）。",
    options: {
      A: "图像数字化",
      B: "图像增强",
      C: "图像分割",
      D: "图像存储"
    },
    answer: "D",
    category: "图像处理"
  },
  {
    id: 208,
    type: "single_choice",
    question: "通常意义上的传感器包含了敏感元件和（）两个组成部分。",
    options: {
      A: "放大电路",
      B: "数据采集电路",
      C: "转换元件",
      D: "滤波元件"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 209,
    type: "single_choice",
    question: "若将计算机比喻成人的大脑，那么传感器则可以比喻为（）。",
    options: {
      A: "眼睛",
      B: "感觉器官",
      C: "手",
      D: "皮肤"
    },
    answer: "B",
    category: "传感器技术"
  },
  {
    id: 210,
    type: "single_choice",
    question: "属于传感器静态特性指标的是（）。",
    options: {
      A: "固有频率",
      B: "临界频率",
      C: "阻尼比",
      D: "重复性"
    },
    answer: "D",
    category: "传感器技术"
  },
  {
    id: 211,
    type: "single_choice",
    question: "衡量传感器静态特性的指标不包括（）。",
    options: {
      A: "线性度",
      B: "灵敏度",
      C: "频域响应",
      D: "重复性"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 212,
    type: "single_choice",
    question: "某6码道的循环码光电码盘，光线照射时得到的编码是001100，则转角为（）。",
    options: {
      A: "90°",
      B: "75°",
      C: "45°",
      D: "30°"
    },
    answer: "C",
    category: "编码器技术"
  },
  {
    id: 213,
    type: "single_choice",
    question: "不是基于物质的内光电效应的器件有（）。",
    options: {
      A: "光电管",
      B: "光电池",
      C: "光敏电阻",
      D: "光敏晶体管"
    },
    answer: "A",
    category: "光电器件"
  },
  {
    id: 214,
    type: "single_choice",
    question: "光敏电阻的特性是（）。",
    options: {
      A: "有光照时亮电阻很大",
      B: "无光照时暗电阻很小",
      C: "无光照时暗电流很大",
      D: "受一定波长范围的光照时亮电流很大"
    },
    answer: "D",
    category: "光电器件"
  },
  {
    id: 215,
    type: "single_choice",
    question: "数值孔径NA是光纤的一个重要参数，以下说法不正确的是（）。",
    options: {
      A: "数值孔径反映了光纤的集光能力",
      B: "光纤的数值孔径与其几何尺寸有关",
      C: "数值孔径越大，光纤与光源的耦合越容易",
      D: "数值孔径越大，光信号的畸变也越大"
    },
    answer: "B",
    category: "光纤技术"
  },
  {
    id: 216,
    type: "single_choice",
    question: "下面的哪些传感器不属于内光电传感器（）。",
    options: {
      A: "光电管",
      B: "光电池",
      C: "光敏电阻",
      D: "光电二/三极管"
    },
    answer: "A",
    category: "光电器件"
  },
  {
    id: 217,
    type: "single_choice",
    question: "三位四通电液换向阀的液动滑阀为弹簧对中型，其先导电磁换向阀中位必须是（）机能。",
    options: {
      A: "H型",
      B: "M型",
      C: "Y型",
      D: "P型"
    },
    answer: "C",
    category: "液压系统"
  },
  {
    id: 218,
    type: "single_choice",
    question: "液动滑阀为液压对中型，其先导电磁换向阀中位必须是（）机能。",
    options: {
      A: "H型",
      B: "M型",
      C: "Y型",
      D: "P型"
    },
    answer: "D",
    category: "液压系统"
  },
  {
    id: 219,
    type: "single_choice",
    question: "电磁阀的线圈应接在（）。",
    options: {
      A: "气缸的进气口",
      B: "气缸的排气口",
      C: "PLC的I端",
      D: "PLC的Q端"
    },
    answer: "D",
    category: "气动系统"
  },
  {
    id: 220,
    type: "single_choice",
    question: "（）传感器可用于检测金属。",
    options: {
      A: "光纤传感器",
      B: "电感传感器",
      C: "旋转编码器",
      D: "磁性开关"
    },
    answer: "B",
    category: "传感器技术"
  },
  {
    id: 221,
    type: "single_choice",
    question: "漫反射光电开关的工作原理是利用光照射到（）上后反射回来的光线而工作的。",
    options: {
      A: "被测工件",
      B: "感光元件",
      C: "光敏电阻",
      D: "光敏二极管"
    },
    answer: "A",
    category: "传感器技术"
  },
  {
    id: 222,
    type: "single_choice",
    question: "（）是指传感器的测量输出值与实际测量值之间的误差。",
    options: {
      A: "灵敏度",
      B: "分辨率",
      C: "精度",
      D: "线性度"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 223,
    type: "single_choice",
    question: "传感器的基本转换电路是将敏感元件产生的易测量小信号进行变换，使传感器的信号输出符合具体工业系统的要求，一般为（）。",
    options: {
      A: "4~20mA、-5~5V",
      B: "0~20mA、0~5V",
      C: "-20mA~20mA、-5~5V",
      D: "-20mA~20mA、0~5V"
    },
    answer: "A",
    category: "信号处理"
  },
  {
    id: 224,
    type: "single_choice",
    question: "增量型编码器通常为A相、B相、（）相输出。",
    options: {
      A: "C相",
      B: "X相",
      C: "Y相",
      D: "Z相"
    },
    answer: "D",
    category: "编码器技术"
  },
  {
    id: 225,
    type: "single_choice",
    question: "（）是将信号(如比特流)或数据进行编制、转换为可用以通讯、传输和存储的信号形式的设备。",
    options: {
      A: "编码器",
      B: "电流表",
      C: "电压表",
      D: "译码器"
    },
    answer: "A",
    category: "编码器技术"
  },
  {
    id: 226,
    type: "single_choice",
    question: "编码器屏蔽线的作用是（）。",
    options: {
      A: "抗干扰性",
      B: "抗折断",
      C: "导电性",
      D: "美观"
    },
    answer: "A",
    category: "编码器技术"
  },
  {
    id: 227,
    type: "single_choice",
    question: "6维力与力矩传感器主要用于（）。",
    options: {
      A: "精密加工",
      B: "精密测量",
      C: "精密计算",
      D: "精密装配"
    },
    answer: "D",
    category: "力传感器"
  },
  {
    id: 228,
    type: "single_choice",
    question: "编码器A、B为相差（）度的脉冲。",
    options: {
      A: "90",
      B: "180",
      C: "45",
      D: "270"
    },
    answer: "A",
    category: "编码器技术"
  },
  {
    id: 229,
    type: "single_choice",
    question: "应用电容式传感器测量微米级的距离，应该采用改变（）的方式。",
    options: {
      A: "极间物质介电系数",
      B: "极板面积",
      C: "极板距离",
      D: "电压"
    },
    answer: "C",
    category: "电容传感器"
  },
  {
    id: 230,
    type: "single_choice",
    question: "DIN.Wait指令表示等待直到（）端口被设置或重置，或者直到可选的时间终止。",
    options: {
      A: "数字输入",
      B: "数字输出",
      C: "模拟输入",
      D: "模拟输出"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 231,
    type: "single_choice",
    question: "DOUT.Pulse指令表示将（）端口设置为TRUE或者FALSE持续一段时间。",
    options: {
      A: "数字输入",
      B: "数字输出",
      C: "模拟输入",
      D: "模拟输出"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 232,
    type: "single_choice",
    question: "DOUT.Connect指令表示用状态变量来连接（）。",
    options: {
      A: "数字量输入",
      B: "数字量输出",
      C: "模拟量输入",
      D: "模拟量输出"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 233,
    type: "single_choice",
    question: "DINW.WaitBit指令表示等待直到一个输入（）指定位被设置或重置。",
    options: {
      A: "位",
      B: "字节",
      C: "字",
      D: "双字"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 234,
    type: "single_choice",
    question: "DINW.Wait这个指令会一直等待直到输入（）适合设定值，或者直到可选的时间超时了。",
    options: {
      A: "位",
      B: "字节",
      C: "字",
      D: "双字"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 235,
    type: "single_choice",
    question: "DOUTW.Set指令表示设置输出（）为指定的值。",
    options: {
      A: "位",
      B: "字节",
      C: "字",
      D: "双字"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 236,
    type: "single_choice",
    question: "AIN.WaitLess该指令功能是等待直到（）值小于指定的值，或者直至可选的时间超时。",
    options: {
      A: "数字量输入",
      B: "数字量输出",
      C: "模拟量输入",
      D: "模拟量输出"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 237,
    type: "single_choice",
    question: "AIN.WaitGreater该指令功能是等待直到（）值大于指定的值，或者直至可选的时间超时。",
    options: {
      A: "数字量输入",
      B: "数字量输出",
      C: "模拟量输入",
      D: "模拟量输出"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 238,
    type: "single_choice",
    question: "AIN.WaitInside这指令功能是等待直到（）值在一个数值区间内，或者直至可选的时间超时。",
    options: {
      A: "数字量输入",
      B: "数字量输出",
      C: "模拟量输入",
      D: "模拟量输出"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 239,
    type: "single_choice",
    question: "AIN.WaitOutside这指令功能是等待直到（）值在一个数值区间外，或者直至可选的时间超时。",
    options: {
      A: "数字量输入",
      B: "数字量输出",
      C: "模拟量输入",
      D: "模拟量输出"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 240,
    type: "single_choice",
    question: "AOUT.Set设置（）为指定的值。",
    options: {
      A: "数字量输入",
      B: "数字量输出",
      C: "模拟量输入",
      D: "模拟量输出"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 241,
    type: "single_choice",
    question: "力控制方式的输入量和反馈量是（）。",
    options: {
      A: "位置信号",
      B: "力或者力矩信号",
      C: "速度信号",
      D: "加速度信号"
    },
    answer: "B",
    category: "控制方式"
  },
  {
    id: 242,
    type: "single_choice",
    question: "（）的主要技术指标是工业机器人末端执行器位姿的轨迹跟踪精度及平稳性，通常弧焊、喷漆、去毛边和检测作业机器人都采用这种控制方式。",
    options: {
      A: "点位控制方式",
      B: "连续轨迹控制方式",
      C: "力或者力矩控制方式",
      D: "智能控制方式"
    },
    answer: "B",
    category: "控制方式"
  },
  {
    id: 243,
    type: "single_choice",
    question: "伺服控制系统一般包括控制器、被控对象、执行环节、比较环节和（）。",
    options: {
      A: "换向结构",
      B: "转换电路",
      C: "存储电路",
      D: "检测环节"
    },
    answer: "D",
    category: "伺服系统"
  },
  {
    id: 244,
    type: "single_choice",
    question: "传感器的输出信号达到稳定时，输出信号变化与输入信号变化的比值代表传感器的（）参数。",
    options: {
      A: "抗干扰能力",
      B: "精度",
      C: "线性度",
      D: "灵敏度"
    },
    answer: "D",
    category: "传感器技术"
  },
  {
    id: 245,
    type: "single_choice",
    question: "步进电动机按其工作原理主要分为（）、反应式两类。",
    options: {
      A: "磁电式",
      B: "光电式",
      C: "互感式",
      D: "激励式"
    },
    answer: "A",
    category: "电机技术"
  },
  {
    id: 246,
    type: "single_choice",
    question: "直流电动机结构复杂、价格贵、制造麻烦、维护困难，但是（）、调速范围大。",
    options: {
      A: "启动性能差",
      B: "启动性能好",
      C: "启动电流小",
      D: "启动转矩小"
    },
    answer: "B",
    category: "电机技术"
  },
  {
    id: 247,
    type: "single_choice",
    question: "变频器是通过改变交流电动机定子电压、频率等参数来调节（）的装置。",
    options: {
      A: "电动机转速",
      B: "电动机转矩",
      C: "电动机功率",
      D: "电动机性能"
    },
    answer: "A",
    category: "变频器技术"
  },
  {
    id: 248,
    type: "single_choice",
    question: "三相异步电动机的位置控制电路中，除了用行程开关外，还可用（）。",
    options: {
      A: "断路器",
      B: "速度继电器",
      C: "热继电器",
      D: "光电传感器"
    },
    answer: "D",
    category: "电机控制"
  },
  {
    id: 249,
    type: "single_choice",
    question: "减速机按照传动的布置形式可分为展开式、分流式和（）。",
    options: {
      A: "双轴式",
      B: "分层式",
      C: "同轴式",
      D: "反向轴式"
    },
    answer: "C",
    category: "传动系统"
  },
  {
    id: 250,
    type: "single_choice",
    question: "摩擦带传动是依靠（）来传递运动和功率的。",
    options: {
      A: "带与带轮接触面之间的正压力",
      B: "带的紧边拉力",
      C: "带与带轮接触面之间的摩擦力",
      D: "带的松边拉力"
    },
    answer: "C",
    category: "传动系统"
  },
  {
    id: 251,
    type: "single_choice",
    question: "通过（）方式，可以进一步减小步进电机的步距角，从而提高其走步精度。",
    options: {
      A: "细分",
      B: "提高频率",
      C: "减小电压",
      D: "改变控制算法"
    },
    answer: "A",
    category: "电机技术"
  },
  {
    id: 252,
    type: "single_choice",
    question: "机器人故障排查中，发现伺服驱动器的抱闸电压输出正常，为24V，而伺服电机侧的抱闸电压为0V，则故障原因为（）。",
    options: {
      A: "编码器线磨损断线",
      B: "抱闸线磨损断线",
      C: "动力线磨损断线",
      D: "编码器线短路"
    },
    answer: "B",
    category: "故障诊断"
  },
  {
    id: 253,
    type: "single_choice",
    question: "下列哪一项是金属式应变计的主要缺点（）。",
    options: {
      A: "非线性明显",
      B: "灵敏度低",
      C: "准确度低",
      D: "响应时间慢"
    },
    answer: "A",
    category: "应变计技术"
  },
  {
    id: 254,
    type: "single_choice",
    question: "为使三位四通阀在中位工作时能使液压缸闭锁，应采用（）型阀。",
    options: {
      A: "'O'型阀",
      B: "'P'型阀",
      C: "'Y'型阀",
      D: "'S'型阀"
    },
    answer: "A",
    category: "液压系统"
  },
  {
    id: 255,
    type: "single_choice",
    question: "一水平放置的双杆液压缸，采用三位四通电磁换向阀，要求阀处于中位时，液压泵卸荷，液压缸浮动，其中位机能应选用H型；要求阀处于中位时，液压泵卸荷，且液压缸闭锁不动，其中位机能应选用（）。",
    options: {
      A: "O型",
      B: "M型",
      C: "Y型",
      D: "X型"
    },
    answer: "B",
    category: "液压系统"
  },
  {
    id: 256,
    type: "single_choice",
    question: "在液压系统图中，与三位阀连接的油路一般应画在换向阀符号的（）位置上。",
    options: {
      A: "左格",
      B: "右格",
      C: "中格",
      D: "上格"
    },
    answer: "C",
    category: "液压系统"
  },
  {
    id: 257,
    type: "single_choice",
    question: "以下（）不是对伺服系统的基本要求。",
    options: {
      A: "稳定性好",
      B: "精度高",
      C: "快速响应无超调",
      D: "高速，转矩小"
    },
    answer: "D",
    category: "伺服系统"
  },
  {
    id: 258,
    type: "single_choice",
    question: "通过（）可以进一步增大步进电机的速度。",
    options: {
      A: "细分",
      B: "提高频率",
      C: "减小电源电压",
      D: "改变控制算法"
    },
    answer: "B",
    category: "电机技术"
  },
  {
    id: 259,
    type: "single_choice",
    question: "使用感应同步器作为位置检测装置，从而构成位置闭环的控制系统属于（）控制方式。",
    options: {
      A: "开环",
      B: "闭环",
      C: "半闭环",
      D: "前馈"
    },
    answer: "B",
    category: "控制系统"
  },
  {
    id: 260,
    type: "single_choice",
    question: "无刷直流电动机的换相状态由以下（）因素决定。",
    options: {
      A: "转子的位置",
      B: "位置传感器的安装位置",
      C: "电机的电流",
      D: "电机的电压"
    },
    answer: "A",
    category: "电机技术"
  },
  {
    id: 261,
    type: "single_choice",
    question: "下面（）不属于用微机控制步进电机主要解决的问题。",
    options: {
      A: "用软件的方法产生脉冲序列",
      B: "方向控制",
      C: "控制程序设计",
      D: "选择合适的脉冲分配器"
    },
    answer: "D",
    category: "电机控制"
  },
  {
    id: 262,
    type: "single_choice",
    question: "使用测速电机作为检测装置从而构成位置闭环的控制系统属于（）控制方式。",
    options: {
      A: "开环",
      B: "闭环",
      C: "半闭环",
      D: "前馈"
    },
    answer: "C",
    category: "控制系统"
  },
  {
    id: 263,
    type: "single_choice",
    question: "PWM调速方式称为（）。",
    options: {
      A: "变电流调速",
      B: "变电压调速",
      C: "变频调速",
      D: "脉宽调速"
    },
    answer: "D",
    category: "电机控制"
  },
  {
    id: 264,
    type: "single_choice",
    question: "二位五通电磁阀有（）。",
    options: {
      A: "两个工作位置，两个通路",
      B: "两个工作位置，五个通路",
      C: "一个工作位置，两个通路",
      D: "五个工作位置，两个通路"
    },
    answer: "B",
    category: "气动系统"
  },
  {
    id: 265,
    type: "single_choice",
    question: "脉冲当量是指（）。",
    options: {
      A: "每发一个脉冲信号，电机的位移量",
      B: "每发一个脉冲信号，电机转过的角度",
      C: "电机转过1mm时，发出的脉冲数",
      D: "电机转过1°角时，发出的脉冲数"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 266,
    type: "single_choice",
    question: "变频器主电路的输出与（）连接。",
    options: {
      A: "三相异步电动机",
      B: "PLC",
      C: "驱动器",
      D: "步进电机"
    },
    answer: "A",
    category: "变频器技术"
  },
  {
    id: 267,
    type: "single_choice",
    question: "气动回路是为了驱动完成不同操作的机械装置，靠压力控制阀、方向控制阀和（）来控制力的大小、方向和运动速度。",
    options: {
      A: "按钮阀",
      B: "光电管",
      C: "限位阀",
      D: "流量控制阀"
    },
    answer: "D",
    category: "气动系统"
  },
  {
    id: 268,
    type: "single_choice",
    question: "下面（）不是机器人控制系统的控制形式。",
    options: {
      A: "集中控制方式",
      B: "集散控制方式",
      C: "主从控制方式",
      D: "分散控制方式"
    },
    answer: "B",
    category: "控制系统"
  },
  {
    id: 269,
    type: "single_choice",
    question: "在KUKA机器人编程中，等待2秒，指令应写成（）。",
    options: {
      A: "WaitTime=(2)sec",
      B: "WaitTime20sec",
      C: "WaitTime(20)sec",
      D: "WaitTime=2sec"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 270,
    type: "single_choice",
    question: "检测机器人与握持工件之间滑移程度的传感器是（）。",
    options: {
      A: "接近觉传感器",
      B: "接触觉传感器",
      C: "滑觉传感器",
      D: "压觉传感器"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 271,
    type: "single_choice",
    question: "测速发电机的输出信号为（）。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "开关量",
      D: "脉冲量"
    },
    answer: "A",
    category: "信号处理"
  },
  {
    id: 272,
    type: "single_choice",
    question: "I/O模块是设计机器人弧焊工作站时的必选器件，有模拟量I/O和数字量I/O两种形式，模拟型号和数字信号的区别在于（）。",
    options: {
      A: "数字信号大小不连续，时间上连续，而模拟信号相反",
      B: "数字信号大小连续，时间上不连续，而模拟信号相反",
      C: "数字信号大小和时间均不连续，而模拟信号相反",
      D: "数字信号大小和时间均连续，而模拟信号相反"
    },
    answer: "C",
    category: "信号处理"
  },
  {
    id: 273,
    type: "single_choice",
    question: "模拟通信系统与数字通信系统的主要区别是（）。",
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
    id: 274,
    type: "single_choice",
    question: "标准IO模块所提供的数字量电压为（）。",
    options: {
      A: "5V",
      B: "12V",
      C: "24V",
      D: "10V"
    },
    answer: "C",
    category: "IO控制"
  },
  {
    id: 275,
    type: "single_choice",
    question: "如果用3个IO数字信号组成一个组输出，那么此输出最大可发送的数值为（）。",
    options: {
      A: "3",
      B: "6",
      C: "8",
      D: "9"
    },
    answer: "C",
    category: "IO控制"
  },
  {
    id: 276,
    type: "single_choice",
    question: "定义组输入信号gil占用地址1-4共4位，可以代表十进制数（）。",
    options: {
      A: "0-8",
      B: "0-15",
      C: "0-31",
      D: "0-63"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 277,
    type: "single_choice",
    question: "下列设备中，电气设备（）属于输出负载类型。",
    options: {
      A: "继电器",
      B: "步进驱动器",
      C: "PLC单片机",
      D: "接触器"
    },
    answer: "D",
    category: "电气设备"
  },
  {
    id: 278,
    type: "single_choice",
    question: "要搬运体积大、重量轻的物料，如冰箱壳、纸壳箱等，应该优先选用（）。",
    options: {
      A: "机械式气动夹爪",
      B: "磁力吸盘",
      C: "真空式吸盘",
      D: "机械式液动夹爪"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 279,
    type: "single_choice",
    question: "在操作机器人时，其末端操作器的位姿是由变量（）构成的。",
    options: {
      A: "位置与速度",
      B: "位置与姿态",
      C: "位置与运行状态",
      D: "姿态与速度"
    },
    answer: "B",
    category: "机器人理论"
  },
  {
    id: 280,
    type: "single_choice",
    question: "机器人控制中，PTP是机器人（）控制方式。",
    options: {
      A: "点到点",
      B: "连续轨迹",
      C: "智能",
      D: "示教-再现"
    },
    answer: "A",
    category: "控制方式"
  },
  {
    id: 281,
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
    id: 282,
    type: "single_choice",
    question: "在机器人搬运工作站中，用于控制机器人夹爪工具开合的动作信号是（）。",
    options: {
      A: "数字量输出信号",
      B: "数字量输入信号",
      C: "模拟量输入信号",
      D: "模拟量输出信号"
    },
    answer: "A",
    category: "控制信号"
  },
  {
    id: 283,
    type: "single_choice",
    question: "工业机器人编程时，在语句前加上（），则整条语句作为注释行，不被程序执行。",
    options: {
      A: "!",
      B: "*",
      C: "//",
      D: "**"
    },
    answer: "C",
    category: "编程语法"
  },
  {
    id: 284,
    type: "single_choice",
    question: "根据国家标准，工业机器人定义为'其操作机是自动控制的，可重复、多用途，并可以（）个以上轴进行编程。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 285,
    type: "single_choice",
    question: "工业机器人是以（）直接编制程序的。",
    options: {
      A: "直角坐标",
      B: "迪卡尔坐标",
      C: "矢量坐标",
      D: "关节坐标"
    },
    answer: "D",
    category: "编程方法"
  },
  {
    id: 286,
    type: "single_choice",
    question: "当机器人关节第5轴为（）度时，同时关节轴4和6一样时，机器人处于奇异点。",
    options: {
      A: "30",
      B: "90",
      C: "0",
      D: "60"
    },
    answer: "C",
    category: "奇点处理"
  },
  {
    id: 287,
    type: "single_choice",
    question: "连续轨迹控制方式的主要技术指标是（）。",
    options: {
      A: "定位精度和运动时间",
      B: "位姿轨迹跟踪精度和平稳性",
      C: "位姿轨迹和平稳性",
      D: "位姿轨迹跟踪精度和运动时间"
    },
    answer: "B",
    category: "控制方式"
  },
  {
    id: 288,
    type: "single_choice",
    question: "正常情况下机器人第六轴可以运行（）。",
    options: {
      A: "180°",
      B: "360°",
      C: "大于360°",
      D: "90°"
    },
    answer: "C",
    category: "机器人运动"
  },
  {
    id: 289,
    type: "single_choice",
    question: "机器语言是由（）表示的'0'和'1'组成的字串机器码。",
    options: {
      A: "二进制",
      B: "十进制",
      C: "八进制",
      D: "十六进制"
    },
    answer: "A",
    category: "计算机基础"
  },
  {
    id: 290,
    type: "single_choice",
    question: "IF 指令用于条件跳转控制，IF 条件判断表达式必须是（）类型。",
    options: {
      A: "robjoint",
      B: "string",
      C: "robtarget",
      D: "bool"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 291,
    type: "single_choice",
    question: "作业路径通常用（）坐标系相对于工件坐标系的运动来描述。",
    options: {
      A: "手爪",
      B: "固定",
      C: "运动",
      D: "工具"
    },
    answer: "D",
    category: "路径规划"
  },
  {
    id: 292,
    type: "single_choice",
    question: "对程序进行编辑修改，必须在（）模式下进行。",
    options: {
      A: "管理员",
      B: "操作人",
      C: "用户",
      D: "专家"
    },
    answer: "D",
    category: "用户权限"
  },
  {
    id: 293,
    type: "single_choice",
    question: "（）循环是一种直到型或者检验循环，这种循环会在第一次执行完循环指令部分后才会检测终止条件。",
    options: {
      A: "REPEAT",
      B: "WHILE",
      C: "ELSE",
      D: "SWITCH"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 294,
    type: "single_choice",
    question: "在SMartPad界面的顶部，（）表示程序状态。",
    options: {
      A: "R",
      B: "A",
      C: "C",
      D: "I"
    },
    answer: "A",
    category: "系统状态"
  },
  {
    id: 295,
    type: "single_choice",
    question: "机器人编程中（）行必须最先运行。",
    options: {
      A: "DEF",
      B: "PTP",
      C: "OUT",
      D: "INI"
    },
    answer: "D",
    category: "程序结构"
  },
  {
    id: 296,
    type: "single_choice",
    question: "机器人中的编程中有且只能有一个的是（）。",
    options: {
      A: "程序模块",
      B: "例行程序",
      C: "功能指令",
      D: "主程序"
    },
    answer: "D",
    category: "程序结构"
  },
  {
    id: 297,
    type: "single_choice",
    question: "编制程序时，程序模块的建立和例行程序的数量是根据（）确定的。",
    options: {
      A: "任务的复杂性",
      B: "工作对象的个数",
      C: "工作的环境",
      D: "随性确定的"
    },
    answer: "A",
    category: "程序设计"
  },
  {
    id: 298,
    type: "single_choice",
    question: "（）是整个机器人系统设计的关键环节，它直接影响工作站的总体布局、机器人型号的选定、末端执行器和变位机的设计等，在进行总体方案设计时应引起足够的重视。",
    options: {
      A: "分析作业对象，拟定合理的作业工艺",
      B: "生产节拍",
      C: "系统维护",
      D: "安全规范和标准"
    },
    answer: "D",
    category: "系统设计"
  },
  {
    id: 299,
    type: "single_choice",
    question: "人机协作机器人最重要的性能是（）。",
    options: {
      A: "互动性",
      B: "负载性",
      C: "安全性",
      D: "用电量低"
    },
    answer: "C",
    category: "协作机器人"
  },
  {
    id: 300,
    type: "single_choice",
    question: "通常对机器人进行示教编程时，要求最初程序点与最终程序点的位置（），可提高工作效率。",
    options: {
      A: "相同",
      B: "不同",
      C: "分离越大越好",
      D: "分离越小越好"
    },
    answer: "A",
    category: "示教编程"
  },
  {
    id: 301,
    type: "single_choice",
    question: "工业机器人码垛搬运过程中，编制机器人末端工具安装或拆卸程序时，示教放置快换点位时，应注意低速运行，并以（）运动方式示教接近点与退出点。",
    options: {
      A: "PTP指令",
      B: "Lin指令",
      C: "Circ指令",
      D: "LinRel指令"
    },
    answer: "B",
    category: "码垛应用"
  },
  {
    id: 302,
    type: "single_choice",
    question: "编制程序示教点的时候，示教的点越多，路径越（）。",
    options: {
      A: "不准确",
      B: "准确",
      C: "与点位无关",
      D: "麻烦"
    },
    answer: "B",
    category: "示教编程"
  },
  {
    id: 303,
    type: "single_choice",
    question: "对于有规律的轨迹，仅示教几个特征点，计算机就能利用（）获得中间点的坐标。",
    options: {
      A: "优化算法",
      B: "平滑算法",
      C: "预测算法",
      D: "插补算法"
    },
    answer: "D",
    category: "轨迹规划"
  },
  {
    id: 304,
    type: "single_choice",
    question: "（）对职业生涯发展具有决定性作用。",
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
    id: 305,
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
    id: 306,
    type: "single_choice",
    question: "提升交往效果和交往质量的重要方法是（）。",
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
    id: 307,
    type: "single_choice",
    question: "（）不好的人往往在个人形象展示时会受到一定的影响，被人们误认为气质不好。",
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
    id: 308,
    type: "single_choice",
    question: "团队是一个协作互补的群体，他需要团队成员之间建立相互（）的关系，他是合作的基石。",
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
    id: 309,
    type: "single_choice",
    question: "（）具有效率高、责任感强、守纪律但做事比较保守的典型特征。",
    options: {
      A: "协调者",
      B: "实干者",
      C: "推进者",
      D: "创新者"
    },
    answer: "B",
    category: "团队角色"
  },
  {
    id: 310,
    type: "single_choice",
    question: "关机的正确方法是：主页面-（）模式-主页面-关机。",
    options: {
      A: "操作人员",
      B: "专家",
      C: "管理员",
      D: "用户"
    },
    answer: "B",
    category: "系统操作"
  },
  {
    id: 311,
    type: "single_choice",
    question: "如发生机器人运行中发生碰撞，正确的第一时间应该（）。",
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
    id: 312,
    type: "single_choice",
    question: "（）是机器人机械系统主体。",
    options: {
      A: "A1轴",
      B: "机械手",
      C: "KuKa",
      D: "A6轴"
    },
    answer: "B",
    category: "机器人结构"
  },
  {
    id: 313,
    type: "single_choice",
    question: "KUKA机器人的紧急停止装置是位于（）。",
    options: {
      A: "示教器（KCP）",
      B: "机器人本体",
      C: "控制柜",
      D: "以上都有"
    },
    answer: "A",
    category: "安全装置"
  },
  {
    id: 314,
    type: "single_choice",
    question: "下列选项属于正确的求职择业心理的是（）。",
    options: {
      A: "自卑畏缩",
      B: "盲目从众",
      C: "正视挫折",
      D: "过度依赖"
    },
    answer: "C",
    category: "职业心理"
  },
  {
    id: 315,
    type: "single_choice",
    question: "（）是一种良好的职业精神和职业修养，是一种软实力。",
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
    id: 316,
    type: "single_choice",
    question: "下列不属于换位思考的是（）。",
    options: {
      A: "用别人的思考去思考",
      B: "己所不欲，勿施于人",
      C: "理解至上，善待他人",
      D: "坚持自我"
    },
    answer: "D",
    category: "沟通技巧"
  },
  {
    id: 317,
    type: "single_choice",
    question: "由员工和管理层组成的一个共同体，能合理利用每一个成员的知识和技能，协同工作，解决问题，达到共同的目标，这个共同体被称之为（）。",
    options: {
      A: "群体",
      B: "团队",
      C: "公司",
      D: "社会"
    },
    answer: "B",
    category: "团队合作"
  },
  {
    id: 318,
    type: "single_choice",
    question: "每次操作完成后，应急将机器人上的电缆、示教器等归位，将机器人回到（）点。",
    options: {
      A: "世界坐标系原点",
      B: "工具坐标系原点",
      C: "程序开始点",
      D: "HOME"
    },
    answer: "D",
    category: "操作规范"
  },
  {
    id: 319,
    type: "single_choice",
    question: "独立的外围设备与机器人系统配线连接时应使用（）隔离。",
    options: {
      A: "接触器",
      B: "断路器",
      C: "继电器",
      D: "以上选项都不正确"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 320,
    type: "single_choice",
    question: "（）是约定俗成的大家共同遵循的行为准则。",
    options: {
      A: "社会公德",
      B: "社会责任",
      C: "社会文化",
      D: "社会价值"
    },
    answer: "A",
    category: "职业道德"
  },
  {
    id: 321,
    type: "single_choice",
    question: "机器人操作以（）为原则。",
    options: {
      A: "高效",
      B: "安全第一，预防为主",
      C: "精准",
      D: "美观"
    },
    answer: "B",
    category: "安全原则"
  },
  {
    id: 322,
    type: "single_choice",
    question: "（）是要求大家共同遵守的办事规程或行动准则。",
    options: {
      A: "组织",
      B: "文化",
      C: "制度",
      D: "环境"
    },
    answer: "C",
    category: "管理制度"
  },
  {
    id: 323,
    type: "single_choice",
    question: "工业机器人是自动执行工作的（），是靠自身动力和控制能力来实现各种功能的一种机器。",
    options: {
      A: "装备",
      B: "机械装置",
      C: "机械装备",
      D: "智能设备"
    },
    answer: "B",
    category: "机器人基础"
  },

  // 判断题部分（324-607）
  {
    id: 324,
    type: "true_false",
    question: "只有在采用自动运行模式和外部自动运行模式时，确认开关才起作用。",
    answer: "false",
    category: "机器人操作模式"
  },
  {
    id: 325,
    type: "true_false",
    question: "机器人初次通电连接时，若有确定不接入的电气线路，直接将相应的通道短接即可。",
    answer: "true",
    category: "系统连接"
  },
  {
    id: 326,
    type: "true_false",
    question: "安全配置的目的是为了控制柜系统的数据、KSS软件的机器参数与实际机器人一致。",
    answer: "true",
    category: "安全配置"
  },
  {
    id: 327,
    type: "true_false",
    question: "PULSE的联机表格输出端被切换成的状态不止有TURE和FALSE两种。",
    answer: "false",
    category: "IO控制"
  },
  {
    id: 328,
    type: "true_false",
    question: "PULSE的联机表格以SYNOUT为参照的点为START和END。",
    answer: "true",
    category: "IO控制"
  },
  {
    id: 329,
    type: "true_false",
    question: "数字量是由0和1组成的信号，经过编码形成有规律的信号，量化后的模拟量就是数字量。",
    answer: "true",
    category: "信号处理"
  },
  {
    id: 330,
    type: "true_false",
    question: "模拟量的概念与数字量相对应，但是经过量化之后又可以转化为数字量。",
    answer: "true",
    category: "信号处理"
  },
  {
    id: 331,
    type: "true_false",
    question: "数字量在时间和数量上都是离散的物理量，其表示的信号则为数字信号。",
    answer: "true",
    category: "信号处理"
  },
  {
    id: 332,
    type: "true_false",
    question: "开关量与数字量是同一个概念。",
    answer: "false",
    category: "信号处理"
  },
  {
    id: 333,
    type: "true_false",
    question: "模拟量在连续的变化过程中任何一个取值都是一个具体有意义的物理量，如温度，电压，电流等。",
    answer: "true",
    category: "信号处理"
  },
  {
    id: 334,
    type: "true_false",
    question: "KUKA 机器人的输入和输出全部为高电平（即24V+）。",
    answer: "true",
    category: "IO控制"
  },
  {
    id: 335,
    type: "true_false",
    question: "要进行 I/O 的信号点查看，直接点击信号就可以查看到里面的输入输出。",
    answer: "true",
    category: "IO控制"
  },
  {
    id: 336,
    type: "true_false",
    question: "在手动运行方式下，手动运行的最高速度为250mm/s。",
    answer: "true",
    category: "手动运行"
  },
  {
    id: 337,
    type: "true_false",
    question: "手动运行机器人只有一种方式即笛卡尔式运行。",
    answer: "false",
    category: "手动运行"
  },
  {
    id: 338,
    type: "true_false",
    question: "手动运行机器人时在与轴相关的运行中每个轴都不可以独立地正向或反向运行。",
    answer: "false",
    category: "手动运行"
  },
  {
    id: 339,
    type: "true_false",
    question: "在选择运行模式时，T2 模式下的手动运行速度最高为250mm/s。",
    answer: "false",
    category: "机器人操作模式"
  },
  {
    id: 340,
    type: "true_false",
    question: "机器人坐标系的转角 A 是绕 X 轴旋转。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 341,
    type: "true_false",
    question: "机器人坐标系的转角 B 是绕 Y 轴旋转。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 342,
    type: "true_false",
    question: "机器人坐标系的转角 C 是绕 Z 轴旋转。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 343,
    type: "true_false",
    question: "基坐标系是一个笛卡尔坐标系，用来说明工件的位置。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 344,
    type: "true_false",
    question: "工具坐标系中的姿态标定进一步标定了工具坐标系的 X、Y、Z 轴的方向，使得机器人可沿工具坐标系运动。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 345,
    type: "true_false",
    question: "工具坐标系是一个笛卡尔坐标系，位于工具的工作点。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 346,
    type: "true_false",
    question: "基坐标系、工具坐标系、全局坐标系都属于直角坐标系。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 347,
    type: "true_false",
    question: "进行零位校正时，库卡机器人各轴会移动至目标位置，这个位置被称为机械零点。",
    answer: "true",
    category: "零点标定"
  },
  {
    id: 348,
    type: "true_false",
    question: "示教器进行亮度设置后无需重启直接生效。",
    answer: "true",
    category: "示教器操作"
  },
  {
    id: 349,
    type: "true_false",
    question: "长按示教器左上角'菜单'键，可调出'Display'选项。",
    answer: "true",
    category: "示教器操作"
  },
  {
    id: 350,
    type: "true_false",
    question: "对示教器进行亮度设置，需要使用'操作人员'用户登录才能设置。",
    answer: "false",
    category: "用户权限"
  },
  {
    id: 351,
    type: "true_false",
    question: "当库卡机器人到达及机械零点后，各轴当前的编码器绝对位置值会被保存下来。",
    answer: "true",
    category: "零点标定"
  },
  {
    id: 352,
    type: "true_false",
    question: "库卡机器人零位校正后，可以用直角坐标系移动库卡机器人或运行程序。",
    answer: "true",
    category: "零点标定"
  },
  {
    id: 353,
    type: "true_false",
    question: "当机器人零点丢失后，机器人对于TCP精度要求较高时，肉眼通过零点刻度对零点进行标定无法满足精度需求，可以通过KUKA电子调零设备来取代人工调零。",
    answer: "true",
    category: "零点标定"
  },
  {
    id: 354,
    type: "true_false",
    question: "标零过程中，会听到电机抱闸打开/关闭的声音，属正常现象。",
    answer: "true",
    category: "零点标定"
  },
  {
    id: 355,
    type: "true_false",
    question: "示教器内屏损坏或示教器线缆损坏一定不会造成示教器黑屏。",
    answer: "false",
    category: "故障诊断"
  },
  {
    id: 356,
    type: "true_false",
    question: "示教器在受到外力振动或触摸屏划伤情况下，可能会出现触摸屏不准，或开机直接进入了校准界面的情况。",
    answer: "true",
    category: "故障诊断"
  },
  {
    id: 357,
    type: "true_false",
    question: "购买示教器备件时，收到原厂未拆封的新示教器时，可能会出现开机后无法启动连接到控制器的情况。",
    answer: "true",
    category: "设备配置"
  },
  {
    id: 358,
    type: "true_false",
    question: "在进行新的零点标定之前不需要删除旧的零点标定数据，直接通过手动删除轴的零点来删除零点标定数据。",
    answer: "false",
    category: "零点标定"
  },
  {
    id: 359,
    type: "true_false",
    question: "基准零点标定仅用于某些维护措施之后的零点标定。",
    answer: "true",
    category: "零点标定"
  },
  {
    id: 360,
    type: "true_false",
    question: "用户坐标系示教完成后，手动和自动运行程序时都需要加载用户坐标系。",
    answer: "true",
    category: "坐标系应用"
  },
  {
    id: 361,
    type: "true_false",
    question: "当程序执行到最后一行，跳回第一行时，所加载的用户坐标系自动会卸载，回到机器人World坐标系。",
    answer: "true",
    category: "坐标系应用"
  },
  {
    id: 362,
    type: "true_false",
    question: "如果程序中仅仅使用关节运动即PTP运动，建议不管使用与否都加载用户坐标系，预防发生误操作。",
    answer: "true",
    category: "坐标系应用"
  },
  {
    id: 363,
    type: "true_false",
    question: "建立用户坐标系点动时，应先选择参考坐标系。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 364,
    type: "true_false",
    question: "工具坐标系示教完成后，手动和自动运行程序时都需要加载工具坐标系。",
    answer: "true",
    category: "坐标系应用"
  },
  {
    id: 365,
    type: "true_false",
    question: "当程序执行到最后一行，跳回第一行时，所加载的工具坐标系会自动卸载，回到机器人默认的工具坐标系。",
    answer: "true",
    category: "坐标系应用"
  },
  {
    id: 366,
    type: "true_false",
    question: "三点法与四点法都是用于基坐标系的标定的方法。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 367,
    type: "true_false",
    question: "三点法标定基坐标系过程中，Z向是无需标定的。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 368,
    type: "true_false",
    question: "三点法是用于工具坐标系标定的方法。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 369,
    type: "true_false",
    question: "标定的工具坐标系中各轴与世界坐标系的各轴的矢量夹角相同。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 370,
    type: "true_false",
    question: "当工件运动方向与世界坐标系存在一定角度时，考虑创建使用基坐标系进行示教。",
    answer: "true",
    category: "坐标系应用"
  },
  {
    id: 371,
    type: "true_false",
    question: "基坐标系与用户坐标系是一种坐标系的不同叫法。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 372,
    type: "true_false",
    question: "通过示教器上的模式旋钮可以进行基坐标系与工具坐标系的选择。",
    answer: "false",
    category: "坐标系选择"
  },
  {
    id: 373,
    type: "true_false",
    question: "基坐标系与世界坐标系的方向都符合右手定则。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 374,
    type: "true_false",
    question: "建立用户坐标系时，用三点法进行标定。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 375,
    type: "true_false",
    question: "三点法示教时，需示教基坐标的原点、x正向某点、y正向某点。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 376,
    type: "true_false",
    question: "三点法示教时，包含x正向某点、y正向某点、z正向某点。",
    answer: "false",
    category: "坐标系标定"
  },
  {
    id: 377,
    type: "true_false",
    question: "如果加载的工程中不包含工具坐标系变量，这里的工具手示教选项是隐藏的。因此我们要先新建工具坐标系变量。",
    answer: "true",
    category: "坐标系配置"
  },
  {
    id: 378,
    type: "true_false",
    question: "基坐标系的点z方向符合以x/y正向为基础的右手定则。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 379,
    type: "true_false",
    question: "如果机器人使用到了多个工具，可在运动指令中使用不同 Tool 序号进行切换。",
    answer: "true",
    category: "工具管理"
  },
  {
    id: 380,
    type: "true_false",
    question: "每条运动语句都有特定的基坐标与工具坐标的选择项。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 381,
    type: "true_false",
    question: "直角坐标系的方向规定X轴方向向后，Z轴方向向上，Y轴根据右手定则确定。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 382,
    type: "true_false",
    question: "已知坐标系的任意两个方向，即可根据右手定则推断出第三个轴的方向。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 383,
    type: "true_false",
    question: "已经标定好的基坐标和工具坐标系将自动成为运动语句中的默认应用坐标系。",
    answer: "false",
    category: "坐标系应用"
  },
  {
    id: 384,
    type: "true_false",
    question: "工业机器人的研究涉及学科很少，与电子学无关。",
    answer: "false",
    category: "机器人基础"
  },
  {
    id: 385,
    type: "true_false",
    question: "在直角坐标系中，机器人的运动指机器人控制中心点的运动。",
    answer: "true",
    category: "机器人运动"
  },
  {
    id: 386,
    type: "true_false",
    question: "用户坐标系一般使用三点法示教方法进行标定。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 387,
    type: "true_false",
    question: "在轴的方向特别精准确定之后才可以使用三点示教方法。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 388,
    type: "true_false",
    question: "一般的应用是将用户坐标系建立在工件上或者码垛的码盘上，根据工件或码盘的实际摆放方向进行定义，操作直观方便。",
    answer: "true",
    category: "坐标系应用"
  },
  {
    id: 389,
    type: "true_false",
    question: "建立用户坐标系时，若用户坐标系的方向与极坐标一致，则仅需要示教一个原点即可。",
    answer: "true",
    category: "坐标系标定"
  },
  {
    id: 390,
    type: "true_false",
    question: "机器人焊接工作站搭建前，首先要确定焊接方式，然后分析焊件的特性，比如焊件的板材，板厚，焊缝的形状与宽度等。",
    answer: "true",
    category: "焊接应用"
  },
  {
    id: 391,
    type: "true_false",
    question: "搭建机器人焊接工作站时，在工装夹具的设计过程中，要尽量保证工件的焊缝安装在工装夹具上以后保持平焊姿态。",
    answer: "true",
    category: "焊接应用"
  },
  {
    id: 392,
    type: "true_false",
    question: "焊接机器人一般把工具坐标系定义在焊枪的顶端。",
    answer: "true",
    category: "焊接应用"
  },
  {
    id: 393,
    type: "true_false",
    question: "机器人在焊接过程中，操作人员不得离开现场，以应对突发事故的及时处理。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 394,
    type: "true_false",
    question: "外围设备与机器人输入输出回路相连的电缆需要使用屏蔽电缆，防止周围高频噪声干扰。",
    answer: "true",
    category: "系统集成"
  },
  {
    id: 395,
    type: "true_false",
    question: "如果使用PLC发送高频脉冲给伺服驱动器，控制伺服电机运行，则PLC的输出端的类型必须选择继电器形式。",
    answer: "false",
    category: "控制系统"
  },
  {
    id: 396,
    type: "true_false",
    question: "变频器的输入电源有三相380V、三相220V和单相220V等规格，但变频器输出都是三相交流电，因此变频器只能控制三相交流异步电动机。",
    answer: "true",
    category: "变频器技术"
  },
  {
    id: 397,
    type: "true_false",
    question: "弧焊机器人的末端执行器是焊枪。",
    answer: "true",
    category: "焊接应用"
  },
  {
    id: 398,
    type: "true_false",
    question: "点焊机器人X形焊钳适用于点焊垂直及近于垂直位置的焊点。",
    answer: "false",
    category: "焊接应用"
  },
  {
    id: 399,
    type: "true_false",
    question: "弧焊机器人送丝机构的送丝电机速度与焊接电流的大小有关。",
    answer: "true",
    category: "焊接应用"
  },
  {
    id: 400,
    type: "true_false",
    question: "在变频器设置了上限频率为50Hz，下限频率为25Hz，若给定频率为20Hz，则实际输出频率为25Hz。",
    answer: "true",
    category: "变频器技术"
  },
  {
    id: 401,
    type: "true_false",
    question: "OUT指令用于设置模拟量输出为指定的值。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 402,
    type: "true_false",
    question: "I/O 模块是设计机器人弧焊工作站时的必选器件，有模拟量 I/O 和数字量 I/O 两种形式，模拟量和数字量信号的区别在于数字信号大小和时间均连续，而模拟信号相反。",
    answer: "false",
    category: "IO控制"
  },
  {
    id: 403,
    type: "true_false",
    question: "为了延长示教器的使用寿命，应佩戴手套操作示教器。",
    answer: "false",
    category: "示教器操作"
  },
  {
    id: 404,
    type: "true_false",
    question: "IN 指令功能是等待直到模拟量输入值在一个数值区间外，或者直至可选的时间超时。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 405,
    type: "true_false",
    question: "WAIT FOR 指令功能是等待直到模拟量输入值。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 406,
    type: "true_false",
    question: "在点动操作机器人时要采用较高的倍率速度，以减少调试时间降低风险。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 407,
    type: "true_false",
    question: "使能按钮有两个档位，用力按住第二档可以使机器人上电运行。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 408,
    type: "true_false",
    question: "工业机器人的紧急停止装置是位于 smartPAD 上的急停装置，在出现危险情况或紧急停止情况时必须按下该装置。",
    answer: "true",
    category: "安全装置"
  },
  {
    id: 409,
    type: "true_false",
    question: "在手动模式下要使机器人运动必须处于使能状态。",
    answer: "true",
    category: "手动模式"
  },
  {
    id: 410,
    type: "true_false",
    question: "OUT 指令用于设置输出字节为指定的值。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 411,
    type: "true_false",
    question: "不管是自动运动或者手动示教，都要保证工具坐标系的加载。",
    answer: "true",
    category: "坐标系应用"
  },
  {
    id: 412,
    type: "true_false",
    question: "调用用户坐标系需要将之前用于标定该坐标系的工具坐标系也同时调用。",
    answer: "true",
    category: "坐标系应用"
  },
  {
    id: 413,
    type: "true_false",
    question: "手动模式，一般用于调整机器人位姿，及调试程序。",
    answer: "true",
    category: "手动模式"
  },
  {
    id: 414,
    type: "true_false",
    question: "点击'Jog'，运动按钮旁出现下图'X、Y、Z、A、B、C'标志后，可以进行世界坐标系运动操作。",
    answer: "true",
    category: "手动运行"
  },
  {
    id: 415,
    type: "true_false",
    question: "点击'Jog'，运动按钮旁出现下图'J1、J2、J3、J4、J5、J6'标志后，可以进行世界坐标系运动操作。",
    answer: "false",
    category: "手动运行"
  },
  {
    id: 416,
    type: "true_false",
    question: "重新示教点可以改变一个已示教的点的坐标，为此必须移至所需的新位置，并用新位置的坐标盖写旧的点。",
    answer: "true",
    category: "示教编程"
  },
  {
    id: 417,
    type: "true_false",
    question: "GO指令用于跳转到程序不同部分，跳转目标通过指令定义，允许从外部跳转进入内部程序块。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 418,
    type: "true_false",
    question: "库卡机器人的操作员权限可以修改程序。",
    answer: "false",
    category: "用户权限"
  },
  {
    id: 419,
    type: "true_false",
    question: "库卡机器人的管理员权限可以做所有的操作。",
    answer: "true",
    category: "用户权限"
  },
  {
    id: 420,
    type: "true_false",
    question: "IN指令用于同步触发，当机器人经过指定位置时触发。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 421,
    type: "true_false",
    question: "自动模式，用于程序自动运行。",
    answer: "true",
    category: "自动模式"
  },
  {
    id: 422,
    type: "true_false",
    question: "反向运行只在手动模式下有效，所有机器人都具备。",
    answer: "false",
    category: "程序运行"
  },
  {
    id: 423,
    type: "true_false",
    question: "PTP指令是设置参考系统指令，通过该指令可以为后续运行的位置指令设定一个新的参考坐标系。",
    answer: "false",
    category: "运动指令"
  },
  {
    id: 424,
    type: "true_false",
    question: "快速到目标点功能可以让机器人移动至程序中的某些点。",
    answer: "true",
    category: "程序功能"
  },
  {
    id: 425,
    type: "true_false",
    question: "END指令用于异步程序平行运行。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 426,
    type: "true_false",
    question: "边缘检测是将边缘像素标识出来的一种图像分割技术。",
    answer: "true",
    category: "图像处理"
  },
  {
    id: 427,
    type: "true_false",
    question: "视觉系统与机器人通过 TCP/IP 进行数据交换和传递，其中视觉系统只能作为客户端，机器人只能作为服务器。",
    answer: "false",
    category: "视觉系统"
  },
  {
    id: 428,
    type: "true_false",
    question: "RFID 的电子标签必须完全接触阅读器才能读出电子标签信息。",
    answer: "false",
    category: "RFID技术"
  },
  {
    id: 429,
    type: "true_false",
    question: "如果加载的工程中不包含码垛变量，则不需要新建码垛变量。",
    answer: "false",
    category: "码垛应用"
  },
  {
    id: 430,
    type: "true_false",
    question: "库卡弧焊机器人，在预定的距离内，是以焊丝接触工件、形成电流回路，来检测寻找工件的正确焊缝位置的。",
    answer: "true",
    category: "弧焊技术"
  },
  {
    id: 431,
    type: "true_false",
    question: "库卡弧焊机器人的焊接起始点位置的寻找确定，可以通过一至三个点的接触传感完成。",
    answer: "true",
    category: "弧焊技术"
  },
  {
    id: 432,
    type: "true_false",
    question: "电弧跟踪原理，在焊接厚板或角焊缝时，焊枪摆动，干伸长的不同，导致实际的焊接电流与设定的电流不同，干伸长越短，实际电流就越大，干伸长越长，实际电流就越小。",
    answer: "true",
    category: "弧焊技术"
  },
  {
    id: 433,
    type: "true_false",
    question: "焊接摆动图形的形状和焊接速度有关，焊接速度越高，摆动图形的轨迹逼近就越强。",
    answer: "true",
    category: "焊接技术"
  },
  {
    id: 434,
    type: "true_false",
    question: "程序中的变量存储在局部 SRC 文件中时，变量仅在局部 DEF 和 END 行之间可用。",
    answer: "true",
    category: "变量管理"
  },
  {
    id: 435,
    type: "true_false",
    question: "焊接摆动图形的形状不止和焊接速度有关，还取决于用户为摆动长度和振幅设定的数值。",
    answer: "true",
    category: "焊接技术"
  },
  {
    id: 436,
    type: "true_false",
    question: "机器人速度倍率的大小必须按顺序排列，一旦设置错误，则速度倍率总保持在 VFINE。",
    answer: "true",
    category: "运动参数"
  },
  {
    id: 437,
    type: "true_false",
    question: "若机器人在启动之后以编程的速度到达第一个编程位置，并且在那里没有停止，则在外部自动运行中有 BCO 运行。",
    answer: "false",
    category: "程序运行"
  },
  {
    id: 438,
    type: "true_false",
    question: "从外部启动程序时，如果已经执行了 BCO 运行，则在外部启动时不再执行 BCO 运行。",
    answer: "true",
    category: "程序运行"
  },
  {
    id: 439,
    type: "true_false",
    question: "机器人碰撞监测功能，能够在机器人发生碰撞时停止机器人运行，减少损失。",
    answer: "true",
    category: "安全功能"
  },
  {
    id: 440,
    type: "true_false",
    question: "机器人碰撞监测功能，只能适用于机器人垂直于地面安装工况，不支持倒挂，斜装等工况。",
    answer: "true",
    category: "安全功能"
  },
  {
    id: 441,
    type: "true_false",
    question: "每一个 IF 指令必须以关键字 END_IF 做为条件控制结束。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 442,
    type: "true_false",
    question: "Sim Pro 支持包括库卡机器人、埃伏特、广州数控等多种品牌机器人的离线仿真。",
    answer: "false",
    category: "仿真软件"
  },
  {
    id: 443,
    type: "true_false",
    question: "重命名、删除和粘贴不管是对项目还是程序的操作，本质上都是对项目的编辑。",
    answer: "true",
    category: "项目管理"
  },
  {
    id: 444,
    type: "true_false",
    question: "输入是从外部存储导入项目或程序。",
    answer: "true",
    category: "文件操作"
  },
  {
    id: 445,
    type: "true_false",
    question: "PTP指令的优点是不容易到达极限位置或奇异点。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 446,
    type: "true_false",
    question: "PTP指令的各轴运动是相对独立的，不存在插补关系，系统的运算量很小。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 447,
    type: "true_false",
    question: "PTP指令也有可能出现奇异点。",
    answer: "false",
    category: "运动指令"
  },
  {
    id: 448,
    type: "true_false",
    question: "PTP指令可以用于工具的插补动作。",
    answer: "false",
    category: "运动指令"
  },
  {
    id: 449,
    type: "true_false",
    question: "Lin指令空间直线距离不宜太远，否则容易到达机器人的轴限位或死点。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 450,
    type: "true_false",
    question: "LIN直线移动时，直线上的轨迹速度始终保持不变。",
    answer: "true",
    category: "运动指令"
  },
  {
    id: 451,
    type: "true_false",
    question: "SimPro具有可扩展机器人关节的外部轴模型和不同品牌的机器人工具模型。",
    answer: "false",
    category: "仿真软件"
  },
  {
    id: 452,
    type: "true_false",
    question: "交互系统是实现机器人与外部环境中的设备相互联系和协调的系统。",
    answer: "true",
    category: "系统集成"
  },
  {
    id: 453,
    type: "true_false",
    question: "目前机器人中较为常用的是旋转型光电式编码器。",
    answer: "true",
    category: "编码器技术"
  },
  {
    id: 454,
    type: "true_false",
    question: "液压传动系统具有无环境污染、易于控制、运动精度高、成本低和驱动效率高等优点，在机器人工作站中最为常用。",
    answer: "false",
    category: "传动系统"
  },
  {
    id: 455,
    type: "true_false",
    question: "图像增强是指调整图像的色度、亮度、饱和度、对比度和分辨率，使得图像效果清晰和颜色分明。",
    answer: "true",
    category: "图像处理"
  },
  {
    id: 456,
    type: "true_false",
    question: "机器人上常用的可以测量转速的传感器有测度发电机和增量式码盘。",
    answer: "true",
    category: "传感器技术"
  },
  {
    id: 457,
    type: "true_false",
    question: "传感器是与人感觉器官相对应的原件。",
    answer: "true",
    category: "传感器技术"
  },
  {
    id: 458,
    type: "true_false",
    question: "电磁阀是利用电磁力的作用，推动阀芯换位，以实现气流或液流换向的阀类，通常由电磁控制部分和换向部分部分两部分组成。",
    answer: "true",
    category: "电磁阀技术"
  },
  {
    id: 459,
    type: "true_false",
    question: "感应同步器只能测线位移，而不能测角位移。",
    answer: "false",
    category: "感应同步器"
  },
  {
    id: 460,
    type: "true_false",
    question: "机器人常用驱动方式主要是液压驱动、气压驱动和电气驱动三种基本类型。",
    answer: "true",
    category: "驱动系统"
  },
  {
    id: 461,
    type: "true_false",
    question: "步进电机主要用于开环控制系统，也可以用于闭环控制系统。",
    answer: "true",
    category: "步进电机"
  },
  {
    id: 462,
    type: "true_false",
    question: "三相步进电机是靠三相绕组按照一定的相序轮流通电驱动的。",
    answer: "true",
    category: "步进电机"
  },
  {
    id: 463,
    type: "true_false",
    question: "机床的点位控制不仅实现由一个位置点到另一个位置点的精确移动，而且在移动和定位的过程中仍需要不断加工。",
    answer: "false",
    category: "数控技术"
  },
  {
    id: 464,
    type: "true_false",
    question: "工业机器人外部传感器主要是为了反馈伺服控制系统的信号。",
    answer: "false",
    category: "传感器技术"
  },
  {
    id: 465,
    type: "true_false",
    question: "在机器人调试和检修时，可对I/O信号的状态和数值进行仿真和强制操作。",
    answer: "true",
    category: "调试维护"
  },
  {
    id: 466,
    type: "true_false",
    question: "Sim Pro能够对机器人及其外部设备进行碰撞检测。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 467,
    type: "true_false",
    question: "Sim Pro 支持三维建模功能，可以在软件中临时设计机械结构。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 468,
    type: "true_false",
    question: "工具安装到机器人法兰盘上，工具的参考坐标系和机器人法兰盘坐标系重合。",
    answer: "true",
    category: "工具安装"
  },
  {
    id: 469,
    type: "true_false",
    question: "仿真程序要必须和理想应用工况一致。",
    answer: "false",
    category: "仿真应用"
  },
  {
    id: 470,
    type: "true_false",
    question: "Sim Pro 通常采用预先定义好目标点，然后在移动语句中调用该目标点。",
    answer: "true",
    category: "仿真编程"
  },
  {
    id: 471,
    type: "true_false",
    question: "机器人示教时，对于有规律的轨迹，原则上仅需示教几个关键点。",
    answer: "true",
    category: "示教编程"
  },
  {
    id: 472,
    type: "true_false",
    question: "涂装机器人的工具中心点（TCP）通常设在喷枪的末端中心处。",
    answer: "true",
    category: "涂装应用"
  },
  {
    id: 473,
    type: "true_false",
    question: "关于搬运机器人 TCP 点，吸盘类一般设置在法兰中心线与吸盘底面的交点处。",
    answer: "true",
    category: "搬运应用"
  },
  {
    id: 474,
    type: "true_false",
    question: "最大工作速度通常是指机器人单关节速度。",
    answer: "false",
    category: "机器人参数"
  },
  {
    id: 475,
    type: "true_false",
    question: "工业机器人末端执行器在搬运过程中可能遇到障碍，需要设置一些点位规避障碍，这些点称为过渡点。",
    answer: "true",
    category: "路径规划"
  },
  {
    id: 476,
    type: "true_false",
    question: "机器人在点到点的移动中，实现精确定位时将准确的抵达每个目标点，能够精确地预计机器人的轨迹。",
    answer: "false",
    category: "运动控制"
  },
  {
    id: 477,
    type: "true_false",
    question: "一般可以根据实际情况，定义一个或多个工件坐标系。",
    answer: "true",
    category: "坐标系应用"
  },
  {
    id: 478,
    type: "true_false",
    question: "在应用人员和操作人员用户组中，只能在文件夹R1中创建新的文件夹。",
    answer: "true",
    category: "用户权限"
  },
  {
    id: 479,
    type: "true_false",
    question: "根据车间场地面积，在有利于提高生产节拍的前提下，搬运机器人工作站可采用L型、环状、'品'字、'一'字等布局。",
    answer: "true",
    category: "工作站布局"
  },
  {
    id: 480,
    type: "true_false",
    question: "只有两台以上的机器人相互配合才能构成机器人工作站。",
    answer: "false",
    category: "工作站构成"
  },
  {
    id: 481,
    type: "true_false",
    question: "在进行语句选择时，使用语句选择可使一个程序在任意点启动。",
    answer: "true",
    category: "程序控制"
  },
  {
    id: 482,
    type: "true_false",
    question: "在启动外部自动运行中，BCO运行必须作为LIN或PTP运动从实际位置移动到目标位置。",
    answer: "true",
    category: "外部运行"
  },
  {
    id: 483,
    type: "true_false",
    question: "Sim Pro 中有各个品牌机器人的示教器的操作界面，可在虚拟示教器中操作机器人。",
    answer: "false",
    category: "仿真软件"
  },
  {
    id: 484,
    type: "true_false",
    question: "离线仿真软件生成离线程序前，需要校准工具坐标系和工件坐标系。",
    answer: "true",
    category: "离线仿真"
  },
  {
    id: 485,
    type: "true_false",
    question: "SimPro可以创建的仿真程序类型有两种。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 486,
    type: "true_false",
    question: "添加机器人关节移动指令可点击Move具栏按钮。",
    answer: "true",
    category: "仿真编程"
  },
  {
    id: 487,
    type: "true_false",
    question: "在SimPro中，放置动作是通过输出信号控制电磁阀动作指令来实现的。",
    answer: "false",
    category: "仿真编程"
  },
  {
    id: 488,
    type: "true_false",
    question: "SimPro中机器人仿真程序完成后，一键就可以生成机器人离线程序。",
    answer: "true",
    category: "离线仿真"
  },
  {
    id: 489,
    type: "true_false",
    question: "工业机器人的性能测试一般采用激光非接触测量技术与振动测量设备。",
    answer: "true",
    category: "性能测试"
  },
  {
    id: 490,
    type: "true_false",
    question: "可达工作空间(reachable workspace)，即机器人末端可达位置点的集合。",
    answer: "true",
    category: "工作空间"
  },
  {
    id: 491,
    type: "true_false",
    question: "机器人本体的实际精度和理论设计模型可能会存在一定的误差。",
    answer: "true",
    category: "机器人精度"
  },
  {
    id: 492,
    type: "true_false",
    question: "机器人在装配后不需要进行标定工作。",
    answer: "false",
    category: "机器人标定"
  },
  {
    id: 493,
    type: "true_false",
    question: "机器人在执行某作业时可能会因为存在手部不能到达的作业死区(dead zone)而不能完成任务。",
    answer: "true",
    category: "工作空间"
  },
  {
    id: 494,
    type: "true_false",
    question: "重复定位精度中不包括姿态。",
    answer: "false",
    category: "定位精度"
  },
  {
    id: 495,
    type: "true_false",
    question: "Sim Pro 可以通过激光跟踪传感器或立体摄像机，获得机器人的相关数据，得到机器人的能耗报告，且能够对机器人参数进行标定。",
    answer: "false",
    category: "仿真软件"
  },
  {
    id: 496,
    type: "true_false",
    question: "测量重复定位精度时，以空载运行。",
    answer: "false",
    category: "定位精度"
  },
  {
    id: 497,
    type: "true_false",
    question: "只要检测仪器达到标准就可以从事检验检测工作。",
    answer: "false",
    category: "质量检测"
  },
  {
    id: 498,
    type: "true_false",
    question: "从事检验检测活动的人员，不得同时在两个以上检验检测机构从业。",
    answer: "true",
    category: "质量检测"
  },
  {
    id: 499,
    type: "true_false",
    question: "非授权签字人不得签发检验检测报告。",
    answer: "true",
    category: "质量检测"
  },
  {
    id: 500,
    type: "true_false",
    question: "在机器人系统的导电部件上作业前必须将主开关关闭并采取措施以防重新接通，之后必须确定其无电压。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 501,
    type: "true_false",
    question: "只允许在技术完好的状态下按规定且有安全防患意识地使用工业机器人。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 502,
    type: "true_false",
    question: "应用安全预防措施是指定指导或监督适用范围规定活动的人员应尽的责任。",
    answer: "true",
    category: "安全责任"
  },
  {
    id: 503,
    type: "true_false",
    question: "系统安装和投入作业即能在拥有足够空间安放机器人及其配套的工作区内进行，也能在安全围栏内通行。",
    answer: "false",
    category: "系统安装"
  },
  {
    id: 504,
    type: "true_false",
    question: "机器人坐标系的转角 A 是绕 Z 轴旋转。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 505,
    type: "true_false",
    question: "机器人坐标系的转角 B 是绕 X 轴旋转。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 506,
    type: "true_false",
    question: "机器人坐标系的转角C是绕Y轴旋转。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 507,
    type: "true_false",
    question: "工业机器人的停止运转、仓储和废料处理必须按照各国的法律、规定及标准进行。",
    answer: "true",
    category: "环保法规"
  },
  {
    id: 508,
    type: "true_false",
    question: "在测试运行方式下，不允许对机器人控制系统的程序、输出端或其他参数进行更改。",
    answer: "true",
    category: "测试运行"
  },
  {
    id: 509,
    type: "true_false",
    question: "不遵守《安全规范》可能对操作人员造成人身伤害或对机器人和控制系统造成破坏。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 510,
    type: "true_false",
    question: "执行机构的腰部又称立柱，是支撑手臂的部件，其作用是带动臂部运动，与臂部运动结合，把腕部传递到需到的工作位置。",
    answer: "true",
    category: "机器人结构"
  },
  {
    id: 511,
    type: "true_false",
    question: "机器人的运动学模型，包括正运动学和逆运动学两部分内容。",
    answer: "true",
    category: "机器人理论"
  },
  {
    id: 512,
    type: "true_false",
    question: "自由度英文名称为 Degree of freedom，缩写为 DOF。自由度是机器人的一种重要技术指标，它是由机器人的结构决定的，并间接影响到机器人的机动性。",
    answer: "false",
    category: "机器人理论"
  },
  {
    id: 513,
    type: "true_false",
    question: "机器人的手部只有两个手指，通过手指的张开与闭合来实现手部松开和夹紧工件。",
    answer: "false",
    category: "末端执行器"
  },
  {
    id: 514,
    type: "true_false",
    question: "工业机器人的手部用以连接腰部和腕部。",
    answer: "false",
    category: "机器人结构"
  },
  {
    id: 515,
    type: "true_false",
    question: "投入作业前检查机器人防护罩挡板是否正确紧固，确定没有活动或松动部件，检查控制单元部件是否完整。",
    answer: "true",
    category: "作业准备"
  },
  {
    id: 516,
    type: "true_false",
    question: "如可能，将机器人气动系统连接在排气管道上，将系统设置为指定气压值。",
    answer: "false",
    category: "系统连接"
  },
  {
    id: 517,
    type: "true_false",
    question: "工业机器人工作站在工作区外安装控制单元，控制单元不得用作围栏的一部分。",
    answer: "false",
    category: "安全布局"
  },
  {
    id: 518,
    type: "true_false",
    question: "工业机器人工作站在控制单元通电前，检查确定电源的电路断流器处于打开位置。",
    answer: "true",
    category: "系统启动"
  },
  {
    id: 519,
    type: "true_false",
    question: "工业机器人在作业前，要确定控制单元的门已经锁定。",
    answer: "false",
    category: "安全检查"
  },
  {
    id: 520,
    type: "true_false",
    question: "机器人在手动示教模式时，仅能由指定人员编程。",
    answer: "false",
    category: "示教编程"
  },
  {
    id: 521,
    type: "true_false",
    question: "开始设定程序前，操作员必须检查机器人和控制系统，确保没有潜在的危险、不规范情况，并且没有人在工作区内。",
    answer: "true",
    category: "程序设定"
  },
  {
    id: 522,
    type: "true_false",
    question: "手动示教模式时，操作员在工作区内操作前，必须从外面确保所有所需的保护和安全措施到位并运作良好，特别是示教器端已进行调整(慢速、紧急制动、启动设备等)。",
    answer: "true",
    category: "手动示教"
  },
  {
    id: 523,
    type: "true_false",
    question: "程序创建过程中，只有持有手持式终端的操作员允许进入工作区。",
    answer: "true",
    category: "程序创建"
  },
  {
    id: 524,
    type: "true_false",
    question: "在为工业机器人检查程序时，需要有第二个操作员在工作区域内时，该操作员必须有与安全设备连锁的启动设备。",
    answer: "false",
    category: "程序检查"
  },
  {
    id: 525,
    type: "true_false",
    question: "在为工业机器人进行程序设定时，操作员必须与机器人保持一定距离，以避免任何违规机器运动。",
    answer: "true",
    category: "程序设定"
  },
  {
    id: 526,
    type: "true_false",
    question: "在某些情况下，如需近距离目视检查，只有当一个完整的检测周期低速执行完毕后，操作员才能在工作区内按照正常作业速度检测程序设定周期，检测时应注意机器人的运动方向。",
    answer: "true",
    category: "程序检测"
  },
  {
    id: 527,
    type: "true_false",
    question: "一个新的程序首次运行时，机器人可能以沿着出乎意料的路径移动。",
    answer: "true",
    category: "程序运行"
  },
  {
    id: 528,
    type: "true_false",
    question: "手动示教模式时应小心操作，时刻保持在机器人动作范围之外，慢速度检测。",
    answer: "false",
    category: "手动示教"
  },
  {
    id: 529,
    type: "true_false",
    question: "机器人启动自动模式前，操作员应检查机器人和控制系统以及工作区，确保没有潜在危险违规条件存在。",
    answer: "true",
    category: "自动模式"
  },
  {
    id: 530,
    type: "true_false",
    question: "选择机器人自动远程模式时应特别注意，PLC可执行自动操作，打开电机并启动程序。",
    answer: "false",
    category: "远程模式"
  },
  {
    id: 531,
    type: "true_false",
    question: "机器零件或控制单元的维护作业和更换仅在总开关处于断开状态并用扣锁锁住时才可进行。",
    answer: "false",
    category: "维护作业"
  },
  {
    id: 532,
    type: "true_false",
    question: "对机器人进行维护时，请确保控制单元没有通电(总开关断开)以及外部电源断开。",
    answer: "true",
    category: "维护安全"
  },
  {
    id: 533,
    type: "true_false",
    question: "机器人和控制系统的终止作业及拆卸仅限授权人员执行。",
    answer: "true",
    category: "系统拆卸"
  },
  {
    id: 534,
    type: "true_false",
    question: "机器终止作业前，应确保控制单元电源电压切断。",
    answer: "true",
    category: "系统关闭"
  },
  {
    id: 535,
    type: "true_false",
    question: "机器人拆卸前，先切断机器人和控制单元之间的连接电缆，然后切断接地电缆。",
    answer: "true",
    category: "系统拆卸"
  },
  {
    id: 536,
    type: "true_false",
    question: "机器人拆卸时，如有连接气动系统，请从空气分布管道上切断机器人气动系统。",
    answer: "true",
    category: "系统拆卸"
  },
  {
    id: 537,
    type: "true_false",
    question: "职业技能是指从业者就业所需的技术和能力。",
    answer: "false",
    category: "职业素养"
  },
  {
    id: 538,
    type: "true_false",
    question: "自我的发展只有自己能把握，做好自己的主人，不能屈服于名誉，更不能自卑。",
    answer: "false",
    category: "个人发展"
  },
  {
    id: 539,
    type: "true_false",
    question: "通过职业生涯规划，人们可以确定自己的职业目标，选择自己的职业道路。",
    answer: "false",
    category: "职业规划"
  },
  {
    id: 540,
    type: "true_false",
    question: "职业待遇就是薪酬待遇，是人们在从事相关的劳动活动后获得的合法收入。",
    answer: "true",
    category: "职业待遇"
  },
  {
    id: 541,
    type: "true_false",
    question: "职业生涯规划应在毕业参加工作后再进行规划。",
    answer: "true",
    category: "职业规划"
  },
  {
    id: 542,
    type: "true_false",
    question: "只有授权了的人员才能进行系统安装和投入作业。",
    answer: "true",
    category: "系统安装"
  },
  {
    id: 543,
    type: "true_false",
    question: "非操作人员也可以在车间自由出入。",
    answer: "true",
    category: "车间管理"
  },
  {
    id: 544,
    type: "true_false",
    question: "每次操作完成后都可以直接关闭电源。",
    answer: "true",
    category: "操作规范"
  },
  {
    id: 545,
    type: "true_false",
    question: "作业结束，必须关电源、关气阀、清理设备、整理现场。",
    answer: "true",
    category: "作业规范"
  },
  {
    id: 546,
    type: "true_false",
    question: "机器人操作以高效精准为首要原则。",
    answer: "true",
    category: "操作原则"
  },
  {
    id: 547,
    type: "true_false",
    question: "在执行例行程序时不必先回'HOME'点。",
    answer: "true",
    category: "程序执行"
  },
  {
    id: 548,
    type: "true_false",
    question: "当机器人控制系统关闭时，smartPAD上的紧急停止装置不起作用。",
    answer: "true",
    category: "安全装置"
  },
  {
    id: 549,
    type: "true_false",
    question: "在出现信号缺失后，只有当防护装置已重新关闭且关闭过程得到了确认之后，才可以继续自动运行方式。",
    answer: "true",
    category: "安全防护"
  },
  {
    id: 550,
    type: "true_false",
    question: "在规划设备时，也必须规划并设计总设备的安全功能。必须将工业机器人集成到总设备的安全系统中。",
    answer: "true",
    category: "安全设计"
  },
  {
    id: 551,
    type: "true_false",
    question: "在程序运行期间，可以自由更换运行。",
    answer: "true",
    category: "程序运行"
  },
  {
    id: 552,
    type: "true_false",
    question: "项目团队成员在工作时，应摒弃个人喜好，围绕团队目标努力工作。",
    answer: "false",
    category: "团队合作"
  },
  {
    id: 553,
    type: "true_false",
    question: "在机器人系统的导电部件上作业前必须将主开关关闭并采取措施以防重新接通，之后必须确定其无电压。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 554,
    type: "true_false",
    question: "只允许在技术完好的状态下按规定且有安全防患意识地使用工业机器人。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 555,
    type: "true_false",
    question: "应用安全预防措施是指定指导或监督适用范围规定活动的人员应尽的责任。",
    answer: "true",
    category: "安全责任"
  },
  {
    id: 556,
    type: "true_false",
    question: "系统安装和投入作业即能在拥有足够空间安放机器人及其配套的工作区内进行，也能在安全围栏内通行。",
    answer: "true",
    category: "系统安装"
  },
  {
    id: 557,
    type: "true_false",
    question: "机器人坐标系的转角A是绕Z轴旋转。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 558,
    type: "true_false",
    question: "机器人坐标系的转角B是绕X轴旋转。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 559,
    type: "true_false",
    question: "机器人坐标系的转角C是绕Y轴旋转。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 560,
    type: "true_false",
    question: "工业机器人的停止运转、仓储和废料处理必须按照各国的法律、规定及标准进行。",
    answer: "true",
    category: "环保法规"
  },
  {
    id: 561,
    type: "true_false",
    question: "在测试运行方式下，不允许对机器人控制系统的程序、输出端或其他参数进行更改。",
    answer: "true",
    category: "测试运行"
  },
  {
    id: 562,
    type: "true_false",
    question: "不遵守《安全规范》可能对操作人员造成人身伤害或对机器人和控制系统造成破坏。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 563,
    type: "true_false",
    question: "执行机构的腰部又称立柱，是支撑手臂的部件，其作用是带动臂部运动，与臂部运动结合，把腕部传递到需到的工作位置。",
    answer: "true",
    category: "机器人结构"
  },
  {
    id: 564,
    type: "true_false",
    question: "机器人的运动学模型，包括正运动学和逆运动学两部分内容。",
    answer: "true",
    category: "机器人理论"
  },
  {
    id: 565,
    type: "true_false",
    question: "自由度英文名称为 Degree of freedom，缩写为 DOF。自由度是机器人的一种重要技术指标，它是由机器人的结构决定的，并间接影响到机器人的机动性。",
    answer: "true",
    category: "机器人理论"
  },
  {
    id: 566,
    type: "true_false",
    question: "机器人的手部只有两个手指，通过手指的张开与闭合来实现手部松开和夹紧工件。",
    answer: "true",
    category: "末端执行器"
  },
  {
    id: 567,
    type: "true_false",
    question: "工业机器人的手部用以连接腰部和腕部。",
    answer: "true",
    category: "机器人结构"
  },
  {
    id: 568,
    type: "true_false",
    question: "投入作业前检查机器人防护罩挡板是否正确紧固，确定没有活动或松动部件，检查控制单元部件是否完整。",
    answer: "true",
    category: "作业准备"
  },
  {
    id: 569,
    type: "true_false",
    question: "如可能，将机器人气动系统连接在排气管道上，将系统设置为指定气压值。",
    answer: "false",
    category: "系统连接"
  },
  {
    id: 570,
    type: "true_false",
    question: "工业机器人工作站在工作区外安装控制单元，控制单元不得用作围栏的一部分。",
    answer: "false",
    category: "安全布局"
  },
  {
    id: 571,
    type: "true_false",
    question: "工业机器人工作站在控制单元通电前，检查确定电源的电路断流器处于打开位置。",
    answer: "true",
    category: "系统启动"
  },
  {
    id: 572,
    type: "true_false",
    question: "工业机器人在作业前，要确定控制单元的门已经锁定。",
    answer: "false",
    category: "安全检查"
  },
  {
    id: 573,
    type: "true_false",
    question: "机器人在手动示教模式时，仅能由指定人员编程。",
    answer: "false",
    category: "示教编程"
  },
  {
    id: 574,
    type: "true_false",
    question: "开始设定程序前，操作员必须检查机器人和控制系统，确保没有潜在的危险、不规范情况，并且没有人在工作区内。",
    answer: "true",
    category: "程序设定"
  },
  {
    id: 575,
    type: "true_false",
    question: "手动示教模式时，操作员在工作区内操作前，必须从外面确保所有所需的保护和安全措施到位并运作良好，特别是示教器端已进行调整(慢速、紧急制动、启动设备等)。",
    answer: "true",
    category: "手动示教"
  },
  {
    id: 576,
    type: "true_false",
    question: "程序创建过程中，只有持有手持式终端的操作员允许进入工作区。",
    answer: "true",
    category: "程序创建"
  },
  {
    id: 577,
    type: "true_false",
    question: "在为工业机器人检查程序时，需要有第二个操作员在工作区域内时，该操作员必须有与安全设备连锁的启动设备。",
    answer: "false",
    category: "程序检查"
  },
  {
    id: 578,
    type: "true_false",
    question: "在为工业机器人进行程序设定时，操作员必须与机器人保持一定距离，以避免任何违规机器运动。",
    answer: "true",
    category: "程序设定"
  },
  {
    id: 579,
    type: "true_false",
    question: "在某些情况下，如需近距离目视检查，只有当一个完整的检测周期低速执行完毕后，操作员才能在工作区内按照正常作业速度检测程序设定周期，检测时应注意机器人的运动方向。",
    answer: "true",
    category: "程序检测"
  },
  {
    id: 580,
    type: "true_false",
    question: "一个新的程序首次运行时，机器人可能以沿着出乎意料的路径移动。",
    answer: "true",
    category: "程序运行"
  },
  {
    id: 581,
    type: "true_false",
    question: "手动示教模式时应小心操作，时刻保持在机器人动作范围之外，慢速度检测。",
    answer: "false",
    category: "手动示教"
  },
  {
    id: 582,
    type: "true_false",
    question: "机器人启动自动模式前，操作员应检查机器人和控制系统以及工作区，确保没有潜在危险违规条件存在。",
    answer: "true",
    category: "自动模式"
  },
  {
    id: 583,
    type: "true_false",
    question: "选择机器人自动远程模式时应特别注意，PLC可执行自动操作，打开电机并启动程序。",
    answer: "false",
    category: "远程模式"
  },
  {
    id: 584,
    type: "true_false",
    question: "机器零件或控制单元的维护作业和更换仅在总开关处于断开状态并用扣锁锁住时才可进行。",
    answer: "false",
    category: "维护作业"
  },
  {
    id: 585,
    type: "true_false",
    question: "对机器人进行维护时，请确保控制单元没有通电(总开关断开)以及外部电源断开。",
    answer: "true",
    category: "维护安全"
  },
  {
    id: 586,
    type: "true_false",
    question: "机器人和控制系统的终止作业及拆卸仅限授权人员执行。",
    answer: "true",
    category: "系统拆卸"
  },
  {
    id: 587,
    type: "true_false",
    question: "机器终止作业前，应确保控制单元电源电压切断。",
    answer: "true",
    category: "系统关闭"
  },
  {
    id: 588,
    type: "true_false",
    question: "机器人拆卸前，先切断机器人和控制单元之间的连接电缆，然后切断接地电缆。",
    answer: "true",
    category: "系统拆卸"
  },
  {
    id: 589,
    type: "true_false",
    question: "机器人拆卸时，如有连接气动系统，请从空气分布管道上切断机器人气动系统。",
    answer: "true",
    category: "系统拆卸"
  },
  {
    id: 590,
    type: "true_false",
    question: "职业技能是指从业者就业所需的技术和能力。",
    answer: "false",
    category: "职业素养"
  },
  {
    id: 591,
    type: "true_false",
    question: "自我的发展只有自己能把握，做好自己的主人，不能屈服于名誉，更不能自卑。",
    answer: "false",
    category: "个人发展"
  },
  {
    id: 592,
    type: "true_false",
    question: "通过职业生涯规划，人们可以确定自己的职业目标，选择自己的职业道路。",
    answer: "false",
    category: "职业规划"
  },
  {
    id: 593,
    type: "true_false",
    question: "职业待遇就是薪酬待遇，是人们在从事相关的劳动活动后获得的合法收入。",
    answer: "true",
    category: "职业待遇"
  },
  {
    id: 594,
    type: "true_false",
    question: "职业生涯规划应在毕业参加工作后再进行规划。",
    answer: "true",
    category: "职业规划"
  },
  {
    id: 595,
    type: "true_false",
    question: "只有授权了的人员才能进行系统安装和投入作业。",
    answer: "true",
    category: "系统安装"
  },
  {
    id: 596,
    type: "true_false",
    question: "非操作人员也可以在车间自由出入。",
    answer: "true",
    category: "车间管理"
  },
  {
    id: 597,
    type: "true_false",
    question: "每次操作完成后都可以直接关闭电源。",
    answer: "true",
    category: "操作规范"
  },
  {
    id: 598,
    type: "true_false",
    question: "作业结束，必须关电源、关气阀、清理设备、整理现场。",
    answer: "true",
    category: "作业规范"
  },
  {
    id: 599,
    type: "true_false",
    question: "机器人操作以高效精准为首要原则。",
    answer: "true",
    category: "操作原则"
  },
  {
    id: 600,
    type: "true_false",
    question: "在执行例行程序时不必先回'HOME'点。",
    answer: "true",
    category: "程序执行"
  },
  {
    id: 601,
    type: "true_false",
    question: "当机器人控制系统关闭时，smartPAD上的紧急停止装置不起作用。",
    answer: "true",
    category: "安全装置"
  },
  {
    id: 602,
    type: "true_false",
    question: "在出现信号缺失后，只有当防护装置已重新关闭且关闭过程得到了确认之后，才可以继续自动运行方式。",
    answer: "true",
    category: "安全防护"
  },
  {
    id: 603,
    type: "true_false",
    question: "在规划设备时，也必须规划并设计总设备的安全功能。必须将工业机器人集成到总设备的安全系统中。",
    answer: "true",
    category: "安全设计"
  },
  {
    id: 604,
    type: "true_false",
    question: "在程序运行期间，可以自由更换运行。",
    answer: "true",
    category: "程序运行"
  },
  {
    id: 605,
    type: "true_false",
    question: "在机器人系统的导电部件上作业前必须将主开关关闭并采取措施以防重新接通，之后必须确定其无电压。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 606,
    type: "true_false",
    question: "只允许在技术完好的状态下按规定且有安全防患意识地使用工业机器人。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 607,
    type: "true_false",
    question: "应用安全预防措施是指定指导或监督适用范围规定活动的人员应尽的责任。",
    answer: "true",
    category: "安全责任"
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

