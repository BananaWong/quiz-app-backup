// 工业机器人应用编程职业技能等级理论知识考核题库(FNK-YL中级)
export const questionBank = [
  // 单选题部分 (1-501)
  {
    id: 1,
    type: "single_choice",
    question: "发那科机器人系统中，以下（ ）为数字I/O。",
    options: {
      A: "GI",
      B: "GO",
      C: "DI", 
      D: "AI"
    },
    answer: "C",
    category: "机器人I/O系统"
  },
  {
    id: 2,
    type: "single_choice",
    question: "发那科机器人系统中，以下（ ）为机器人I/O。",
    options: {
      A: "RO",
      B: "DO",
      C: "GO",
      D: "AO"
    },
    answer: "A",
    category: "机器人I/O系统"
  },
  {
    id: 3,
    type: "single_choice",
    question: "发那科机器人系统中，以下（ ）为专用I/O型号。",
    options: {
      A: "AI",
      B: "DI",
      C: "UI",
      D: "GI"
    },
    answer: "C",
    category: "机器人I/O系统"
  },
  {
    id: 4,
    type: "single_choice",
    question: "机器人系统中，将机架设置为48表示的含义为（ ）。",
    options: {
      A: "R-30iB-MATE的主板",
      B: "CC-LINK",
      C: "DeviceNet",
      D: "Modbus TCP"
    },
    answer: "A",
    category: "机器人通讯配置"
  },
  {
    id: 5,
    type: "single_choice",
    question: "发那科机器人可实现系列那些通讯类型（ ）。",
    options: {
      A: "Cc-Link",
      B: "Modbus TCP",
      C: "EtherNet",
      D: "以上都是"
    },
    answer: "D",
    category: "机器人通讯配置"
  },
  {
    id: 6,
    type: "single_choice",
    question: "发那科机器人系统中，标配的IO数量（ ）",
    options: {
      A: "16入16出",
      B: "8入8出",
      C: "28入24出",
      D: "32入32出"
    },
    answer: "C",
    category: "机器人I/O系统"
  },
  {
    id: 7,
    type: "single_choice", 
    question: "发那科机器人输入输出信号中，机器人手臂上的输入输出是（ ）",
    options: {
      A: "RI/RO",
      B: "AI/AO",
      C: "DI/DO",
      D: "UI/UO"
    },
    answer: "A",
    category: "机器人I/O系统"
  },
  {
    id: 8,
    type: "single_choice",
    question: "发那科机器人系统中，数字输出信号的进入点是（ ）",
    options: {
      A: "1-24",
      B: "0-23",
      C: "0-15",
      D: "1-28"
    },
    answer: "A",
    category: "机器人I/O系统"
  },
  {
    id: 9,
    type: "single_choice",
    question: "发那科机器人系统中，数字输入信号的进入点是（ ）",
    options: {
      A: "1-24",
      B: "0-23",
      C: "0-15",
      D: "1-28"
    },
    answer: "D",
    category: "机器人I/O系统"
  },
  {
    id: 10,
    type: "single_choice",
    question: "发那科机器人输入输出信号中，急停、暂停等信号属于（ ）",
    options: {
      A: "RI/RO",
      B: "AI/AO",
      C: "DI/DO",
      D: "UI/UO"
    },
    answer: "D",
    category: "机器人安全系统"
  },
  {
    id: 11,
    type: "single_choice",
    question: "UI[1]和DI[1]被分配在相同的I/O设备端口，系统是否会发生报警？（ ）",
    options: {
      A: "会",
      B: "不会"
    },
    answer: "B",
    category: "机器人I/O系统"
  },
  {
    id: 12,
    type: "single_choice",
    question: "发那科机器人输入输出信号中，数字量输入输出信号是（ ）",
    options: {
      A: "RI/RO",
      B: "AI/AO", 
      C: "DI/DO",
      D: "UI/UO"
    },
    answer: "C",
    category: "机器人I/O系统"
  },
  {
    id: 13,
    type: "single_choice",
    question: "机器人系统中，机架35表示为（ ）",
    options: {
      A: "点为常闭触点",
      B: "点为常开触点",
      C: "点为脉冲式",
      D: "无效"
    },
    answer: "A",
    category: "机器人I/O配置"
  },
  {
    id: 14,
    type: "single_choice",
    question: "发那科机器人系统中I/O连接设备从机接口、R-30iB-MATE的主板中，我们在配置插槽时需要将数值设为（ ）。",
    options: {
      A: "0",
      B: "1",
      C: "48",
      D: "35"
    },
    answer: "B",
    category: "机器人I/O配置"
  },
  {
    id: 15,
    type: "single_choice",
    question: "发那科机器人系统输入输出配置配置完成后，状态显示为（ ），表示分配错误。",
    options: {
      A: "ACTIV",
      B: "PEND",
      C: "INVAL",
      D: "UNASG"
    },
    answer: "C",
    category: "机器人I/O配置"
  },
  {
    id: 16,
    type: "single_choice",
    question: "机器人经常使用的程序可以设置为主程序，每台机器人可以设置（ ）主程序。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "无限制"
    },
    answer: "A",
    category: "机器人程序管理"
  },
  {
    id: 17,
    type: "single_choice",
    question: "在发那科机器人的I/O分配方式中不包括以下哪项分配分配方式（ ）。",
    options: {
      A: "简略分配",
      B: "完整分配",
      C: "随机分配",
      D: "自定义分配"
    },
    answer: "C",
    category: "机器人I/O配置"
  },
  {
    id: 18,
    type: "single_choice",
    question: "如果选择的输入输出方式为简略分配，则发那科机器人的程序选择方式只能为（ ）。",
    options: {
      A: "RSR",
      B: "Main",
      C: "ACK",
      D: "PNS"
    },
    answer: "C",
    category: "机器人程序管理"
  },
  {
    id: 19,
    type: "single_choice",
    question: "发那科机器人系统中如果想将某个信号分配为常ON的状态，需要将该信号的机架设置为（ ），插槽设置为1。",
    options: {
      A: "48",
      B: "30",
      C: "32",
      D: "35"
    },
    answer: "D",
    category: "机器人I/O配置"
  },
  {
    id: 20,
    type: "single_choice",
    question: "发那科机器人系统中如果想将某个信号分配为常ON的状态，需要将该信号的机架设置为35，插槽设置为（ ）。",
    options: {
      A: "1",
      B: "3",
      C: "5",
      D: "7"
    },
    answer: "A",
    category: "机器人I/O配置"
  },
  {
    id: 21,
    type: "single_choice",
    question: "将变量UI[1]设置为常闭点位，下列分配正确的是（ ）",
    options: {
      A: "机架48 插槽2 进入点1",
      B: "机架48 插槽1 进入点1", 
      C: "机架35 插槽1 进入点1",
      D: "机架35 插槽2 进入点1"
    },
    answer: "C",
    category: "机器人I/O配置"
  },
  {
    id: 22,
    type: "single_choice",
    question: "在专用IO信号（外围设备UOP）中，UI[1]表示什么系统功能（ ）",
    options: {
      A: "瞬时停止信号",
      B: "暂停信号",
      C: "使能信号",
      D: "PNS"
    },
    answer: "A",
    category: "机器人专用信号"
  },
  {
    id: 23,
    type: "single_choice",
    question: "在专用IO信号中，表示操作面板（SOP）输入输出信号的符号是（ ）",
    options: {
      A: "UI/UO",
      B: "DI/DO",
      C: "SI/SO",
      D: "RI/RO"
    },
    answer: "C",
    category: "机器人专用信号"
  },
  {
    id: 24,
    type: "single_choice",
    question: "在专用IO信号中，外围设备（UOP）输入输出信号的个数是（ ）",
    options: {
      A: "18/20",
      B: "28/24",
      C: "8/8",
      D: "15/15"
    },
    answer: "A",
    category: "机器人专用信号"
  },
  {
    id: 25,
    type: "single_choice",
    question: "在专用IO信号中，操作面板（SOP）输入输出信号的个数是（ ）",
    options: {
      A: "18/20",
      B: "28/24",
      C: "8/8",
      D: "15/15"
    },
    answer: "D",
    category: "机器人专用信号"
  },
  {
    id: 26,
    type: "single_choice",
    question: "在专用IO信号中，机器人IO输入输出信号的个数是（ ）",
    options: {
      A: "18/20",
      B: "28/24",
      C: "8/8",
      D: "15/15"
    },
    answer: "C",
    category: "机器人专用信号"
  },
  {
    id: 27,
    type: "single_choice",
    question: "发那科机器人IO分类（ ）",
    options: {
      A: "通用和外围设备",
      B: "专用和数字",
      C: "通用和专用",
      D: "通用和群组"
    },
    answer: "C",
    category: "机器人I/O系统"
  },
  {
    id: 28,
    type: "single_choice",
    question: "机器人通讯IO模块机架0表示（ ）",
    options: {
      A: "控制面板",
      B: "外围设备接口",
      C: "处理I/O印刷电路板",
      D: "I/O从动装置"
    },
    answer: "C",
    category: "机器人通讯配置"
  },
  {
    id: 29,
    type: "single_choice",
    question: "机器人通讯IO模块机架48表示（ ）",
    options: {
      A: "从动装置",
      B: "外围设备控制接口（CRMA15/CRMA16）",
      C: "I/O单元MODEL A/B",
      D: "通讯接口"
    },
    answer: "B",
    category: "机器人通讯配置"
  },
  {
    id: 30,
    type: "single_choice",
    question: "发那科机器人PROFIBUS通讯选项对应机架号是（ ）",
    options: {
      A: "96",
      B: "67",
      C: "48",
      D: "35"
    },
    answer: "B",
    category: "机器人通讯配置"
  },
  {
    id: 31,
    type: "single_choice",
    question: "发那科机器人MODEBUS TCP通讯选项对应机架号是（ ）",
    options: {
      A: "96",
      B: "67",
      C: "48",
      D: "35"
    },
    answer: "A",
    category: "机器人通讯配置"
  },
  {
    id: 32,
    type: "single_choice",
    question: "机器人IO分配后出现INVALID表示（ ）",
    options: {
      A: "激活",
      B: "无效",
      C: "重启后生效",
      D: "未分配"
    },
    answer: "B",
    category: "机器人I/O配置"
  },
  {
    id: 33,
    type: "single_choice",
    question: "机器人UOP分配方式选择完整分配，那么其支持主程序命名（ ）",
    options: {
      A: "PNS",
      B: "PNS/RSR",
      C: "RSR",
      D: "RSR/TEST"
    },
    answer: "B",
    category: "机器人程序管理"
  },
  {
    id: 34,
    type: "single_choice",
    question: "发那科机器人DeviceNet通讯选项对应机架号是（ ）",
    options: {
      A: "35",
      B: "1-16",
      C: "82",
      D: "32"
    },
    answer: "C",
    category: "机器人通讯配置"
  },
  {
    id: 35,
    type: "single_choice",
    question: "发那科机器人Ethernet/IP通讯选项对应机架号是（ ）",
    options: {
      A: "89",
      B: "32",
      C: "96",
      D: "0"
    },
    answer: "A",
    category: "机器人通讯配置"
  },
  {
    id: 36,
    type: "single_choice",
    question: "关于YL-18型考核设备上发那科工业机器人（200id/4S）的最大运动范围为（ ）。",
    options: {
      A: "320mm",
      B: "480mm",
      C: "550mm",
      D: "1120mm"
    },
    answer: "C",
    category: "机器人技术参数"
  },
  {
    id: 37,
    type: "single_choice",
    question: "发那科机器人系统中防止干涉区域功能可设置数量为（ ）。",
    options: {
      A: "3个",
      B: "6个",
      C: "10个",
      D: "12个"
    },
    answer: "C",
    category: "机器人安全配置"
  },
  {
    id: 38,
    type: "single_choice",
    question: "以下（ ）不属于发那科机器人的用户坐标系设定方法。",
    options: {
      A: "3点法",
      B: "4点法",
      C: "直接示教法",
      D: "6点示教法"
    },
    answer: "D",
    category: "机器人坐标系设定"
  },
  {
    id: 39,
    type: "single_choice",
    question: "可以使用（ ）功能来设定发那科机器人的工作范围。",
    options: {
      A: "设定参考位置",
      B: "关节可动范围",
      C: "用户坐标系",
      D: "工具坐标系"
    },
    answer: "B",
    category: "机器人工作范围"
  },
  {
    id: 40,
    type: "single_choice", 
    question: "200id/4s机器人第一轴动作范围是（ ）",
    options: {
      A: "230°/720°",
      B: "340°/360°", 
      C: "402°/560°",
      D: "380°/560°"
    },
    answer: "B",
    category: "机器人技术参数"
  },
  {
    id: 41,
    type: "single_choice",
    question: "200id/4s机器人第二轴动作范围是（ ）",
    options: {
      A: "230°",
      B: "720°",
      C: "380°",
      D: "240°"
    },
    answer: "A",
    category: "机器人技术参数"
  },
  {
    id: 42,
    type: "single_choice",
    question: "200id/4s机器人第三轴动作范围是（ ）",
    options: {
      A: "±360°",
      B: "230°",
      C: "402°",
      D: "560°"
    },
    answer: "C",
    category: "机器人技术参数"
  },
  {
    id: 43,
    type: "single_choice",
    question: "200id/4s机器人第四轴动作范围是（ ）",
    options: {
      A: "380°",
      B: "720°",
      C: "360°",
      D: "230°"
    },
    answer: "A",
    category: "机器人技术参数"
  },
  {
    id: 44,
    type: "single_choice",
    question: "200id/4s机器人第五轴动作范围是（ ）",
    options: {
      A: "±240°",
      B: "240°",
      C: "±230°",
      D: "230°"
    },
    answer: "A",
    category: "机器人技术参数"
  },
  {
    id: 45,
    type: "single_choice",
    question: "200id/4s机器人第六轴动作范围是（ ）",
    options: {
      A: "±360°",
      B: "360°",
      C: "±170°",
      D: "-120°~+170°"
    },
    answer: "A",
    category: "机器人技术参数"
  },
  {
    id: 46,
    type: "single_choice",
    question: "机器人采用倾斜安装方式时受那两个（ ）轴限制。",
    options: {
      A: "J1轴和J3轴",
      B: "J2轴和J3轴",
      C: "J1轴和J2轴",
      D: "J4轴和J3轴"
    },
    answer: "C",
    category: "机器人安装配置"
  },
  {
    id: 47,
    type: "single_choice",
    question: "200id/4s机器人内部含几个电磁阀（ ）",
    options: {
      A: "3组",
      B: "4组",
      C: "1组",
      D: "2组"
    },
    answer: "D",
    category: "机器人技术参数"
  },
  {
    id: 48,
    type: "single_choice",
    question: "200id/4s机器人重复定位精度是（ ）",
    options: {
      A: "±0.01",
      B: "±0.02",
      C: "±0.03",
      D: "±0.04"
    },
    answer: "B",
    category: "机器人技术参数"
  },
  {
    id: 49,
    type: "single_choice",
    question: "200id/4s机器人负载是（ ）",
    options: {
      A: "3kg",
      B: "4kg",
      C: "2kg",
      D: "5kg"
    },
    answer: "B",
    category: "机器人技术参数"
  },
  {
    id: 50,
    type: "single_choice",
    question: "200id/4s机器人第一轴最大运动速度是（ ）",
    options: {
      A: "360°/s",
      B: "460°/s",
      C: "540°/s",
      D: "720°/s"
    },
    answer: "B",
    category: "机器人技术参数"
  },
  {
    id: 51,
    type: "single_choice",
    question: "200id/4s机器人第二轴最大运动速度是（ ）",
    options: {
      A: "360°/s",
      B: "460°/s",
      C: "540°/s",
      D: "720°/s"
    },
    answer: "B",
    category: "机器人技术参数"
  },
  {
    id: 52,
    type: "single_choice",
    question: "200id/4s机器人第三轴最大运动速度是（ ）",
    options: {
      A: "360°/s",
      B: "402°/s",
      C: "460°/s",
      D: "720°/s"
    },
    answer: "C",
    category: "机器人技术参数"
  },
  {
    id: 53,
    type: "single_choice",
    question: "200id/4s机器人第四轴最大运动速度是（ ）",
    options: {
      A: "360°/s",
      B: "380°/s",
      C: "560°/s",
      D: "720°/s"
    },
    answer: "C",
    category: "机器人技术参数"
  },
  {
    id: 54,
    type: "single_choice",
    question: "200id/4s机器人第五轴最大运动速度是（ ）",
    options: {
      A: "360°/s",
      B: "240°/s",
      C: "540°/s",
      D: "560°/s"
    },
    answer: "D",
    category: "机器人技术参数"
  },
  {
    id: 55,
    type: "single_choice",
    question: "200id/4s机器人第六轴最大运动速度是（ ）",
    options: {
      A: "900°/s",
      B: "400°/s",
      C: "540°/s",
      D: "720°/s"
    },
    answer: "A",
    category: "机器人技术参数"
  },
  {
    id: 56,
    type: "single_choice",
    question: "机器人工作区域设定受哪些条件限制（ ）",
    options: {
      A: "机器人工作范围",
      B: "干扰区域",
      C: "工作范围及干扰区域",
      D: "无限制"
    },
    answer: "C",
    category: "机器人工作范围"
  },
  {
    id: 57,
    type: "single_choice",
    question: "机器人干涉区域设定功能在（ ）",
    options: {
      A: "菜单下设置选项内",
      B: "菜单下报警选项内",
      C: "菜单下系统选项内",
      D: "菜单下4D显示内"
    },
    answer: "A",
    category: "机器人安全配置"
  },
  {
    id: 58,
    type: "single_choice",
    question: "机器人控制柜发生火灾时，用何种方式灭火合适（ ）",
    options: {
      A: "浇水",
      B: "二氧化碳灭火器",
      C: "泡沫灭火器",
      D: "毛毯扑打"
    },
    answer: "B",
    category: "机器人安全操作"
  },
  {
    id: 59,
    type: "single_choice",
    question: "精确到达工作点用哪个（ ）",
    options: {
      A: "CNT1",
      B: "FINE",
      C: "CNT20",
      D: "CNT5"
    },
    answer: "B",
    category: "机器人运动控制"
  },
  {
    id: 60,
    type: "single_choice",
    question: "机器人的运动速度是指（ ）的运动速度。",
    options: {
      A: "J6轴法兰中心点",
      B: "工具中心点",
      C: "机器人零刻度位",
      D: "一轴零刻度位"
    },
    answer: "B",
    category: "机器人运动控制"
  },
  {
    id: 61,
    type: "single_choice",
    question: "下列选项中，哪些是fanuc机器人型号（ ）",
    options: {
      A: "R-J3iB",
      B: "R-2000iB",
      C: "R-30iA",
      D: "R-30iB"
    },
    answer: "B",
    category: "机器人型号规格"
  },
  {
    id: 62,
    type: "single_choice",
    question: "机器人本体大约需要多久更换一次电池（ ）",
    options: {
      A: "20000小时",
      B: "每年",
      C: "半年",
      D: "只有当示教器上出现电池电压报警时"
    },
    answer: "B",
    category: "机器人维护保养"
  },
  {
    id: 63,
    type: "single_choice",
    question: "当示教盒的屏幕出现误触或者触摸不准的情况，可以使用（ ）进行校准。",
    options: {
      A: "校正功能",
      B: "系统还原",
      C: "初始化系统",
      D: "重启系统"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 64,
    type: "single_choice",
    question: "机器人示教盒的作用有：点动机器人、运行机器人程序、（ ）等。",
    options: {
      A: "程序编辑",
      B: "校准机器人零点",
      C: "配置I/O参数",
      D: "以上都是"
    },
    answer: "D",
    category: "示教器操作"
  },
  {
    id: 65,
    type: "single_choice",
    question: "下列哪种方法使发那科机器人系统显示4D界面（ ）。",
    options: {
      A: "主菜单一状态",
      B: "主菜单一4D图形",
      C: "主菜单一设置",
      D: "主菜单一数据"
    },
    answer: "B",
    category: "示教器操作"
  },
  {
    id: 66,
    type: "single_choice",
    question: "发那科机器人系统中如果想要进行多屏幕使用，应当按下shift键和（ ）。",
    options: {
      A: "窗口键",
      B: "COORD",
      C: "F1",
      D: "PREV"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 67,
    type: "single_choice",
    question: "发那科机器人开机时，同时按下PREV和NEXT键时，以下哪一项会出现在屏幕有内：（ ）。",
    options: {
      A: "BMON MENU",
      B: "Controlled Start",
      C: "Master/Cal",
      D: "System"
    },
    answer: "B",
    category: "示教器操作"
  },
  {
    id: 68,
    type: "single_choice",
    question: "示教盒在手动模式下状态下（ ）",
    options: {
      A: "使得PLC能够控制机器人",
      B: "使得操作人员通过示教盒与PLC进行通讯",
      C: "使得PLC和示教盒都能操作机器人",
      D: "使得操作人员拥有使用示教盒唯一操作机器人的权限"
    },
    answer: "D",
    category: "示教器操作"
  },
  {
    id: 69,
    type: "single_choice",
    question: "发那科机器人示教盒的背景颜色不可以设置为（ ）。",
    options: {
      A: "黑色",
      B: "红色",
      C: "白色",
      D: "绿色"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 70,
    type: "single_choice",
    question: "发那科机器人示教盒的安全开关按钮有（ ）种状态。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    category: "示教器操作"
  },
  {
    id: 71,
    type: "single_choice",
    question: "发那科机器人示教盒的窗口最大化设置方式为按下（ ），在选择最大化。",
    options: {
      A: "shift键",
      B: "disp键",
      C: "shift+disp键",
      D: "shift+pend键"
    },
    answer: "C",
    category: "示教器操作"
  },
  {
    id: 72,
    type: "single_choice",
    question: "发那科机器人示教盒中按下（ ）按键可以进行单一坐标系的切换。",
    options: {
      A: "COORD",
      B: "FCTN",
      C: "DATA",
      D: "EDIT"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 73,
    type: "single_choice",
    question: "发那科机器人示教盒中按下（ ）按键可以进行所有坐标系的选择。",
    options: {
      A: "shift+fcntl",
      B: "shift+edit",
      C: "shift+coord",
      D: "shift+pend"
    },
    answer: "C",
    category: "示教器操作"
  },
  {
    id: 74,
    type: "single_choice",
    question: "发那科机器人示教盒中背景颜色的设置，各颜色的比例为（ ）。",
    options: {
      A: "随意拖动",
      B: "固定不变",
      C: "分段显示",
      D: "比例显示"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 75,
    type: "single_choice",
    question: "发那科机器人示教盒背景颜色的设置，要返回原厂的淡水色只需要按下（ ）键。",
    options: {
      A: "F1",
      B: "F2",
      C: "F3",
      D: "F4"
    },
    answer: "D",
    category: "示教器操作"
  },
  {
    id: 76,
    type: "single_choice",
    question: "发那科机器人示教盒背景颜色的设置，要设置为白色背景只需要按下（ ）键。",
    options: {
      A: "F1",
      B: "F2",
      C: "F4",
      D: "F5"
    },
    answer: "D",
    category: "示教器操作"
  },
  {
    id: 77,
    type: "single_choice",
    question: "发那科机器人HMI的菜单设置，不可设置的种类为（ ）。",
    options: {
      A: "完全菜单",
      B: "简易菜单",
      C: "远程菜单",
      D: "自定义菜单"
    },
    answer: "D",
    category: "示教器操作"
  },
  {
    id: 78,
    type: "single_choice",
    question: "进入分屏界面需要操作什么按键？（ ）",
    options: {
      A: "DISP",
      B: "shift",
      C: "i",
      D: "shift+DISP"
    },
    answer: "D",
    category: "示教器操作"
  },
  {
    id: 79,
    type: "single_choice",
    question: "如何进入程序界面（ ）",
    options: {
      A: "SELECT",
      B: "DATA",
      C: "MENU",
      D: "Shift+COORD"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 80,
    type: "single_choice",
    question: "如何快速进入IO指令界面（ ）",
    options: {
      A: "MENU+IO",
      B: "IO",
      C: "Shift+IO",
      D: "i+IO"
    },
    answer: "B",
    category: "示教器操作"
  },
  {
    id: 81,
    type: "single_choice",
    question: "移动机器人时需要预先操作示教盒上的（ ）按键。",
    options: {
      A: "使能按键+reset",
      B: "Shift+运动键",
      C: "Shift+COORD",
      D: "RESET"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 82,
    type: "single_choice",
    question: "示教盒上的POSN表示（ ）",
    options: {
      A: "机器人当前位置",
      B: "设备状态",
      C: "帮助",
      D: "设置"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 83,
    type: "single_choice",
    question: "示教盒上RESET键的功能是（ ）",
    options: {
      A: "清除报警信息",
      B: "单步连续切换",
      C: "配置",
      D: "返回"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 84,
    type: "single_choice",
    question: "机器人示教盒的作用包括点动机器人、试运行程序、生产运行及（ ）等。",
    options: {
      A: "编写机器人程序",
      B: "确定机器人运动范围",
      C: "松开机器人抱闸",
      D: "无"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 85,
    type: "single_choice",
    question: "示教盒上EDIT键的功能是（ ）",
    options: {
      A: "编写机器人程序",
      B: "显示当前使用或编辑的机器人程序",
      C: "选择机器人程序",
      D: "删除机器人程序"
    },
    answer: "B",
    category: "示教器操作"
  },
  {
    id: 86,
    type: "single_choice",
    question: "示教盒上FWD键的功能是（ ）",
    options: {
      A: "正向执行程序",
      B: "反向执行程序",
      C: "停止程序",
      D: "暂停程序"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 87,
    type: "single_choice",
    question: "当示教盒上出现（ ）报警时需更换电池。",
    options: {
      A: "SRVO-035",
      B: "SRVO-075",
      C: "SRVO-062",
      D: "SRVO-002"
    },
    answer: "C",
    category: "机器人维护保养"
  },
  {
    id: 88,
    type: "single_choice",
    question: "如何在示教盒上查看机器人当前各轴角度（ ）",
    options: {
      A: "POSN+世界坐标",
      B: "POSN+关节坐标",
      C: "POSN+用户坐标",
      D: "POSN+点动坐标"
    },
    answer: "B",
    category: "示教器操作"
  },
  {
    id: 89,
    type: "single_choice",
    question: "示教盒上STEP键的功能是（ ）",
    options: {
      A: "在T1模式下单步及连续切换",
      B: "在T2模式下单步及连续切换",
      C: "在T1/T2模式下单步及连续切换",
      D: "任意模式下两种运行方式的切换"
    },
    answer: "C",
    category: "示教器操作"
  },
  {
    id: 90,
    type: "single_choice",
    question: "使用示教盒分配信号时，需要一个一直位ON的信号，那么机架应设置为（ ）",
    options: {
      A: "87",
      B: "48",
      C: "96",
      D: "35"
    },
    answer: "D",
    category: "机器人I/O配置"
  },
  {
    id: 91,
    type: "single_choice",
    question: "远程控制设备运行时，示教盒开关状态应调至为（ ）",
    options: {
      A: "ON",
      B: "OFF",
      C: "ON或OFF都可以"
    },
    answer: "B",
    category: "示教器操作"
  },
  {
    id: 92,
    type: "single_choice",
    question: "同时按住SHIFT和COORD按键，可（ ）",
    options: {
      A: "切换工具坐标系",
      B: "切换当前示教坐标系",
      C: "切换用户坐标系",
      D: "激活USER和TOOL坐标系"
    },
    answer: "D",
    category: "示教器操作"
  },
  {
    id: 93,
    type: "single_choice",
    question: "当开机时，同时按下示教盒上的PREV和NEXT键，一下哪一项会出现在屏幕内（ ）",
    options: {
      A: "BMON MENU",
      B: "Controlled Start",
      C: "Master/Cal",
      D: "System"
    },
    answer: "B",
    category: "示教器操作"
  },
  {
    id: 94,
    type: "single_choice",
    question: "发那科机器人外部启动时，按下示教盒的红色急停按钮，机器人会（ ）",
    options: {
      A: "缓慢减速停止",
      B: "立即停止",
      C: "机器人无响应",
      D: "机器人延迟停止"
    },
    answer: "B",
    category: "机器人安全操作"
  },
  {
    id: 95,
    type: "single_choice",
    question: "发那科机器人宏指令预定义的功能键在执行程序时，当被中断在启动时（ ）。",
    options: {
      A: "继续运行",
      B: "需要按下复位后继续运行",
      C: "停止运行",
      D: "从第一行开始运行"
    },
    answer: "D",
    category: "机器人程序编程"
  },
  {
    id: 96,
    type: "single_choice",
    question: "发那科机器人在执行动作群组的宏指令的情况下，不可以从UK[1]~[7]来启动宏指令，应该将设备分配给（ ）。",
    options: {
      A: "SU[1]~[7]",
      B: "RO[1]~[7]",
      C: "AO[1]~[7]",
      D: "GO[1]~[7]"
    },
    answer: "A",
    category: "机器人程序编程"
  },
  {
    id: 97,
    type: "single_choice",
    question: "发那科机器人要定义预定义按键MOVE MENU，需要将宏指令分配给（ ）。",
    options: {
      A: "SU[1]",
      B: "SU[2]",
      C: "SU[3]",
      D: "SU[4]"
    },
    answer: "C",
    category: "示教器配置"
  },
  {
    id: 98,
    type: "single_choice",
    question: "发那科机器人要定义预定义按键STATUS，需要将宏指令分配给（ ）。",
    options: {
      A: "SU[1]",
      B: "SU[2]",
      C: "SU[4]",
      D: "SU[5]"
    },
    answer: "D",
    category: "示教器配置"
  },
  {
    id: 99,
    type: "single_choice",
    question: "发那科机器人要定义预定义按键SETUP，需要将宏指令分配给（ ）。",
    options: {
      A: "UK[1]",
      B: "UK[3]",
      C: "UK[4]",
      D: "UK[5]"
    },
    answer: "C",
    category: "示教器配置"
  },
  {
    id: 100,
    type: "single_choice",
    question: "发那科机器人要定义预定义按键I/O，需要将宏指令分配给（ ）。",
    options: {
      A: "UK[1]",
      B: "UK[3]",
      C: "UK[6]",
      D: "UK[7]"
    },
    answer: "C",
    category: "示教器配置"
  },
  {
    id: 101,
    type: "single_choice",
    question: "发那科机器人要定义预定义按键posn，需要将宏指令分配给（ ）。",
    options: {
      A: "UK[1]",
      B: "UK[3]",
      C: "UK[5]",
      D: "UK[7]"
    },
    answer: "D",
    category: "示教器配置"
  },
  {
    id: 102,
    type: "single_choice",
    question: "发那科机器人要定义预定义按键TOOL2，需要将宏指令分配给（ ）。",
    options: {
      A: "SU[1]",
      B: "SU[2]",
      C: "SU[3]",
      D: "SU[4]"
    },
    answer: "B",
    category: "示教器配置"
  },
  {
    id: 103,
    type: "single_choice",
    question: "发那科机器人要定义预定义按键TOOL1，需要将宏指令分配给（ ）。",
    options: {
      A: "SU[1]",
      B: "SU[2]",
      C: "SU[3]",
      D: "SU[4]"
    },
    answer: "A",
    category: "示教器配置"
  },
  {
    id: 104,
    type: "single_choice",
    question: "发那科机器人预定义功能键也可以进行（ ）来进行设定功能，后分配给对应的按键。",
    options: {
      A: "宏指令",
      B: "系统程序",
      C: "TP程序",
      D: "输入输出"
    },
    answer: "A",
    category: "示教器配置"
  },
  {
    id: 105,
    type: "single_choice",
    question: "发那科机器人将功能定义到预定义按键上后、原有的按键功能会（ ）。",
    options: {
      A: "仍然保留，但不可用",
      B: "仍然保留，可切换使用",
      C: "完全失效",
      D: "没有影响继续使用"
    },
    answer: "C",
    category: "示教器配置"
  },
  {
    id: 106,
    type: "single_choice",
    question: "发那科机器人搬运工具的预定义键为以下哪一种（ ）。",
    options: {
      A: "TOOL1/TOOL2",
      B: "POSN",
      C: "STATUS",
      D: "MOVEMENU"
    },
    answer: "A",
    category: "示教器配置"
  },
  {
    id: 107,
    type: "single_choice",
    question: "发那科机器人示教盒的预定义键可以配置的功能不包含（ ）。",
    options: {
      A: "焊接应用",
      B: "搬运工具应用",
      C: "外部轴",
      D: "模式转换"
    },
    answer: "D",
    category: "示教器配置"
  },
  {
    id: 108,
    type: "single_choice",
    question: "发那科机器人附加轴的点动进给，我们应该配置的预定义键为（ ）。",
    options: {
      A: "J1/J2",
      B: "J2/J3",
      C: "J4/J5",
      D: "J7/J8"
    },
    answer: "D",
    category: "示教器配置"
  },
  {
    id: 109,
    type: "single_choice",
    question: "焊接，打磨，雕刻等模块的桌面的安装方式为（ ）。",
    options: {
      A: "单一位置摆放，快速更换",
      B: "单一位置摆放，不可更换",
      C: "随意组合摆放，不可更换",
      D: "随意组合摆放，快速更换"
    },
    answer: "D",
    category: "设备模块安装"
  },
  {
    id: 110,
    type: "single_choice",
    question: "模块的安装应该遵从的原则为（ ）。",
    options: {
      A: "随意安装，无需固定牢靠",
      B: "随意安装，固定牢靠",
      C: "固定牢靠即可",
      D: "工作范围内安装并固定牢靠"
    },
    answer: "D",
    category: "设备模块安装"
  },
  {
    id: 111,
    type: "single_choice",
    question: "模块的安装与拆卸应该在（ ）进行。",
    options: {
      A: "设备断电状态下",
      B: "设备任意情况下",
      C: "设备运行中",
      D: "设备上电状态"
    },
    answer: "A",
    category: "设备模块安装"
  },
  {
    id: 112,
    type: "single_choice",
    question: "模块安装完成后需要检查各模块的电气接口，以下叙述错误的是（ ）。",
    options: {
      A: "手动拉扯接口检测是够牢靠",
      B: "测量电压是否正常",
      C: "检测接地是否正常",
      D: "检测有无短接漏接"
    },
    answer: "A",
    category: "设备模块安装"
  },
  {
    id: 113,
    type: "single_choice",
    question: "打磨模块的打磨头的安装，应该关闭设备的（ ）。",
    options: {
      A: "机器人控制器电源",
      B: "设备总电源即可",
      C: "设备总电源和设备总进气",
      D: "设备模块电源即可"
    },
    answer: "C",
    category: "设备模块安装"
  },
  {
    id: 114,
    type: "single_choice",
    question: "视觉模块的安装调试前，应注意取下相机的（ ）。",
    options: {
      A: "镜头",
      B: "光源",
      C: "镜头盖",
      D: "通讯线缆"
    },
    answer: "C",
    category: "设备模块安装"
  },
  {
    id: 115,
    type: "single_choice",
    question: "输送模块的安装与供料模块拼接时注意事项，以下叙述正确的是（ ）。",
    options: {
      A: "紧挨着安装",
      B: "适当距离并保持高度一致",
      C: "输送模块应远离供料模块安装",
      D: "输送模块应高于供料模块安装"
    },
    answer: "A",
    category: "设备模块安装"
  },
  {
    id: 116,
    type: "single_choice",
    question: "（ ）是防止低合金钢产生冷裂纹、热裂纹和热影响区出现淬硬组织的最有效的措施。",
    options: {
      A: "预热",
      B: "减小热输入",
      C: "用直流反接电源",
      D: "焊后热处理"
    },
    answer: "A",
    category: "焊接工艺"
  },
  {
    id: 117,
    type: "single_choice",
    question: "设备各模块在桌面上的安装方式为（ ）",
    options: {
      A: "卡扣固定",
      B: "定位销式固定",
      C: "铝型材螺丝螺母锁死式固定",
      D: "连接器式固定"
    },
    answer: "C",
    category: "设备模块安装"
  },
  {
    id: 118,
    type: "single_choice",
    question: "焊接电源是由（ ）供电。",
    options: {
      A: "清洁母线",
      B: "焊接母线",
      C: "机器人电源",
      D: "其他电源"
    },
    answer: "B",
    category: "焊接工艺"
  },
  {
    id: 119,
    type: "single_choice",
    question: "若在System(系统设定)中找不到'Master/Cal'，可将系统变量MASTER_ENB的值改为？（ ）",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "0"
    },
    answer: "A",
    category: "机器人系统配置"
  },
  {
    id: 120,
    type: "single_choice",
    question: "视觉模块亮度过低时可以调节模块的（ ）",
    options: {
      A: "镜头",
      B: "光源",
      C: "焦距",
      D: "通讯线缆"
    },
    answer: "B",
    category: "视觉系统"
  },
  {
    id: 121,
    type: "single_choice",
    question: "打磨模块的桌面的安装方式为（ ）。",
    options: {
      A: "单一位置摆放，快速更换",
      B: "单一位置摆放，不可更换",
      C: "随意组合摆放，不可更换",
      D: "随意组合摆放，快速更换"
    },
    answer: "D",
    category: "设备模块安装"
  },
  {
    id: 122,
    type: "single_choice",
    question: "雕刻模块的桌面的安装方式为（ ）。",
    options: {
      A: "单一位置摆放，快速更换",
      B: "单一位置摆放，不可更换",
      C: "随意组合摆放，不可更换",
      D: "随意组合摆放，快速更换"
    },
    answer: "D",
    category: "设备模块安装"
  },
  {
    id: 123,
    type: "single_choice",
    question: "该设备中模块安装完成后需要检查各模块的气路接口，以下叙述错误的是（ ）。",
    options: {
      A: "手动拉扯接口检测是够牢靠",
      B: "观察气管是否有漏气",
      C: "油水分离器是否正常工作",
      D: "检测有无气管对折"
    },
    answer: "A",
    category: "设备模块安装"
  },
  {
    id: 124,
    type: "single_choice",
    question: "该设备油水分离器处调大气压的方法为（ ）？",
    options: {
      A: "向上拉调节阀",
      B: "向下按调节阀",
      C: "顺时针旋转调节阀",
      D: "逆时针旋转调节阀"
    },
    answer: "B",
    category: "设备模块调试"
  },
  {
    id: 125,
    type: "single_choice",
    question: "在输送模块的交流驱动器中，下列选项代表数字输入的信号为（ ）",
    options: {
      A: "DI1",
      B: "DO1",
      C: "OB",
      D: "MON1"
    },
    answer: "A",
    category: "输送系统"
  },
  {
    id: 126,
    type: "single_choice",
    question: "在输送模块的交流驱动器中，下列选项代表信号接地的信号为（ ）",
    options: {
      A: "OZ",
      B: "OA",
      C: "GND",
      D: "PULSE"
    },
    answer: "C",
    category: "输送系统"
  },
  {
    id: 127,
    type: "single_choice",
    question: "下列哪个选项不是输送模块中交流驱动器的基本控制模式。",
    options: {
      A: "位置",
      B: "方向",
      C: "速度",
      D: "扭矩"
    },
    answer: "B",
    category: "输送系统"
  },
  {
    id: 128,
    type: "single_choice",
    question: "打磨的模块选用气动打磨头，在使用前我们应该将设备的供气气压应调整为不小于（ ）。",
    options: {
      A: "0.1MPa",
      B: "0.2MPa",
      C: "0.25MPa",
      D: "0.5MPa"
    },
    answer: "D",
    category: "打磨系统"
  },
  {
    id: 129,
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
    id: 130,
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
    id: 131,
    type: "single_choice",
    question: "旋转供料模块选用的为步进电机，步进驱动器的拨码开关拨至左侧的为（ ）号拨码。",
    options: {
      A: "1.3.5",
      B: "2.4",
      C: "3.6",
      D: "1.2"
    },
    answer: "D",
    category: "供料系统"
  },
  {
    id: 132,
    type: "single_choice",
    question: "变位机模块的伺服驱动器参数调整，调整前先回复出厂设置需要将参数P2-08设置为（ ）。",
    options: {
      A: "0",
      B: "1",
      C: "10",
      D: "15"
    },
    answer: "C",
    category: "变位机系统"
  },
  {
    id: 133,
    type: "single_choice",
    question: "为使变位机能够平稳运行，需要将调整速度控制增益，需要将伺服参数p2-04设置为（ ）。",
    options: {
      A: "1000~1500",
      B: "5000~6000",
      C: "7000~8000",
      D: "10000~12000"
    },
    answer: "A",
    category: "变位机系统"
  },
  {
    id: 134,
    type: "single_choice",
    question: "关于YL-18型设备台达伺服驱动器的参数p1-00设置为2表示（ ）。",
    options: {
      A: "脉冲控制",
      B: "方向控制",
      C: "脉冲+方向控制",
      D: "PR模式控制"
    },
    answer: "C",
    category: "伺服系统"
  },
  {
    id: 135,
    type: "single_choice",
    question: "关于YL-18型设备用PR模式来控制伺服驱动器应将参数p1-00设置为（ ）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "B",
    category: "伺服系统"
  },
  {
    id: 136,
    type: "single_choice",
    question: "关于YL-18型设备伺服驱动器的伺服ON信号的电平的高低由参数p2-10决定的，高电平需要将其设置为（ ）。",
    options: {
      A: "0",
      B: "1",
      C: "100",
      D: "101"
    },
    answer: "D",
    category: "伺服系统"
  },
  {
    id: 137,
    type: "single_choice",
    question: "关于YL-18型设备变位机模块做位置定位，则需要电机转动到指定位置立即停止，需将参数p1-32设置为（ ）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "100"
    },
    answer: "A",
    category: "变位机系统"
  },
  {
    id: 138,
    type: "single_choice",
    question: "关于YL-18型设备输送模块的交流驱动器，带有面板式调节，想用面板来调节电机的转动只需要将参数F03设置为（ ）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "B",
    category: "输送系统"
  },
  {
    id: 139,
    type: "single_choice",
    question: "关于YL-18型设备输送模块的交流驱动器，带有面板式调节，想用外部开关来调节电机的转动需要将参数F03设置为（ ）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "4"
    },
    answer: "C",
    category: "输送系统"
  },
  {
    id: 140,
    type: "single_choice",
    question: "关于YL-18型设备输送模块电机的旋转方式由参数F-04控制，只允许正转时只需将参数值设置为（ ）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "C",
    category: "输送系统"
  },
  {
    id: 141,
    type: "single_choice",
    question: "关于YL-18型设备输送模块电机的旋转方式由参数F-04控制，即允许正转也允许反转时只需将参数值设置为（ ）。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "输送系统"
  },
  {
    id: 142,
    type: "single_choice",
    question: "关于YL-18型设备输送带在实际应用时需要失电便制动功能，正转失电便制动功能只需将参数（ ）设置为1。",
    options: {
      A: "F-01",
      B: "F-05",
      C: "F-07",
      D: "F-11"
    },
    answer: "D",
    category: "输送系统"
  },
  {
    id: 143,
    type: "single_choice",
    question: "关于YL-18型设备输送带在实际应用时需要失电便制动功能，反转失电便制动功能只需将参数（ ）设置为1。",
    options: {
      A: "F-05",
      B: "F-07",
      C: "F-11",
      D: "F-16"
    },
    answer: "D",
    category: "输送系统"
  },
  {
    id: 144,
    type: "single_choice",
    question: "关于YL-18型设备各模块要正常使用，必须保证设备电源及模块电源为（ ）。",
    options: {
      A: "AC380V/DC24V",
      B: "AC220V/DC24V",
      C: "AC380V",
      D: "AC220V"
    },
    answer: "B",
    category: "设备电源系统"
  },
  {
    id: 145,
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
    id: 146,
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
    id: 147,
    type: "single_choice",
    question: "关于YL-18型设备如果检测的模块表面有很多杂质，可以在视觉系统的运行参数里打开（ ）选项。",
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
    id: 148,
    type: "single_choice",
    question: "海康视觉检测圆查找模块包括基本参数、运行参数和（ ）3个设置页面。",
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
    id: 149,
    type: "single_choice",
    question: "下列哪个选项不是输送模块中交流驱动器的通讯模式。",
    options: {
      A: "CANopen",
      B: "DMCNET",
      C: "EtherCAT",
      D: "Profinet"
    },
    answer: "D",
    category: "输送系统"
  },
  {
    id: 150,
    type: "single_choice",
    question: "不论是搭配17-bit、20-bit或22-bit分辨率的编码器，电子齿轮比都是依照（ ）分辨率24-bit做设定。",
    options: {
      A: "B1",
      B: "B2",
      C: "B3",
      D: "B4"
    },
    answer: "C",
    category: "伺服系统"
  },
  {
    id: 151,
    type: "single_choice",
    question: "在输送模块的交流驱动器中，任何一种模式的最大速度都受到内部参数（ ）的限制。",
    options: {
      A: "P1.055",
      B: "P1.001",
      C: "P1.255",
      D: "P2.001"
    },
    answer: "A",
    category: "输送系统"
  },
  {
    id: 152,
    type: "single_choice",
    question: "以下哪个交流驱动器的参数可以帮助输送模块进行模拟输出监控？",
    options: {
      A: "P0.001",
      B: "P0.003",
      C: "P4.020",
      D: "P4.021"
    },
    answer: "B",
    category: "输送系统"
  },
  {
    id: 153,
    type: "single_choice",
    question: "当（ ）功能启动后，伺服驱动器将立即停止输出电流给电机。",
    options: {
      A: "STO",
      B: "PR",
      C: "PT",
      D: "CAN"
    },
    answer: "A",
    category: "伺服系统"
  },
  {
    id: 154,
    type: "single_choice",
    question: "安全功能由（ ）个独立的硬件线路控制电机电流供给，于必要时切断电机动力电源，达到无扭力的状态。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "伺服系统"
  },
  {
    id: 155,
    type: "single_choice",
    question: "当两个安全信号源中任意一个遗失时，硬件线路将在（ ）内切断电机电流。",
    options: {
      A: "2s",
      B: "200ms",
      C: "20ms",
      D: "2ms"
    },
    answer: "C",
    category: "伺服系统"
  },
  {
    id: 156,
    type: "single_choice",
    question: "调试伺服导轨时，应对导轨进行（ ）。",
    options: {
      A: "点动正转",
      B: "点动反转",
      C: "连续运行",
      D: "手动回原点"
    },
    answer: "D",
    category: "伺服系统"
  },
  {
    id: 157,
    type: "single_choice",
    question: "旋转供料模块完成一个完整的流程需要转动（ ）次。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "D",
    category: "供料系统"
  },
  {
    id: 158,
    type: "single_choice",
    question: "关于YL-18型设备调试各模块前，需要对设备进行取电，该设备的取电方式为（ ）。",
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
    id: 159,
    type: "single_choice",
    question: "电弧焊过程中，熔化母材的热量主要来自于（ ）。",
    options: {
      A: "电阻热",
      B: "物理热",
      C: "电弧热",
      D: "化学热"
    },
    answer: "C",
    category: "焊接工艺"
  },
  {
    id: 160,
    type: "single_choice",
    question: "与手工电弧焊相比，CO2气保焊所具备的优点不包括（ ）。",
    options: {
      A: "引弧性能好",
      B: "熔深大",
      C: "成形美观",
      D: "熔敷效率高"
    },
    answer: "C",
    category: "焊接工艺"
  },
  {
    id: 161,
    type: "single_choice",
    question: "焊接电流太小，易引起（ ）缺陷。",
    options: {
      A: "咬边",
      B: "烧穿",
      C: "夹渣",
      D: "焊瘤"
    },
    answer: "C",
    category: "焊接工艺"
  },
  {
    id: 162,
    type: "single_choice",
    question: "装配模块的调试，在使得气缸能伸缩到正确位置时需要调节（ ）至合适位置。",
    options: {
      A: "节流阀",
      B: "气缸位置",
      C: "调高设备气压",
      D: "调低设备气压"
    },
    answer: "A",
    category: "装配系统"
  },
  {
    id: 163,
    type: "single_choice",
    question: "关于YL-18型设备RFID模块的调试前需确认该模块与PLC的通讯是否正常，如果正常，我们将载码体放置在读写头上会出现（ ）。",
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
    id: 164,
    type: "single_choice",
    question: "关于YL-18型设备搬运模块在调试时除了可以使用简单的程序化编程还可以选择（ ）方法进行简化编程。",
    options: {
      A: "码垛指令",
      B: "焊接指令",
      C: "宏指令",
      D: "离线编程"
    },
    answer: "A",
    category: "搬运系统"
  },
  {
    id: 165,
    type: "single_choice",
    question: "使用真空吸盘需要配备真空发生器，真空发生器的气压方向为（ ）。",
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
    id: 166,
    type: "single_choice",
    question: "以下哪一项不是对伺服系统的基本要求（ ）。",
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
    id: 167,
    type: "single_choice",
    question: "调试伺服导轨时，应注意导轨的原点位置为（ ）。",
    options: {
      A: "左限位处",
      B: "右限位处",
      C: "中间位附近",
      D: "随意位置"
    },
    answer: "C",
    category: "伺服系统"
  },
  {
    id: 168,
    type: "single_choice",
    question: "通过以下哪种方式可以进一步减小步进电机的步距角，从而提高其走步精度（ ）。",
    options: {
      A: "细分",
      B: "提高频率",
      C: "调节手指位置",
      D: "改变控制算法"
    },
    answer: "A",
    category: "步进系统"
  },
  {
    id: 169,
    type: "single_choice",
    question: "机器人程序重新开始运行，在仓库有料没有取出复位的情况下，机器人在自动模式下会（ ）。",
    options: {
      A: "正常运行",
      B: "无法启动有报警信息",
      C: "等待物料取出正常运行",
      D: "运行至该工位时停止"
    },
    answer: "C",
    category: "仓储系统"
  },
  {
    id: 170,
    type: "single_choice",
    question: "下列关于步进电机的描述正确的是（ ）",
    options: {
      A: "抗干扰能力强",
      B: "带负载能力强",
      C: "功能是将电脉冲转化成角位移",
      D: "误差不会积累"
    },
    answer: "C",
    category: "步进系统"
  },
  {
    id: 171,
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
    id: 172,
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
    id: 173,
    type: "single_choice",
    question: "输送模块在调试时，平皮带的停止条件为（ ）。",
    options: {
      A: "中间传感器检测到物料",
      B: "末端传感器检测到物料",
      C: "手动强制才会停止",
      D: "延时停止"
    },
    answer: "B",
    category: "输送系统"
  },
  {
    id: 174,
    type: "single_choice",
    question: "在调试码垛模块时，发现吸盘末端在出气，正确的做法为（ ）。",
    options: {
      A: "更换节流阀",
      B: "调节节流阀气压",
      C: "调节吸盘位置",
      D: "对调真空发生器"
    },
    answer: "D",
    category: "码垛系统"
  },
  {
    id: 175,
    type: "single_choice",
    question: "装配模块的调试，推料气缸伸出过快，正确的做法为（ ）。",
    options: {
      A: "调节推料气缸前段节流阀",
      B: "调节推料气缸末端节流阀",
      C: "调节顶料气缸末端节流阀",
      D: "调节顶料气缸前段节流阀"
    },
    answer: "A",
    category: "装配系统"
  },
  {
    id: 176,
    type: "single_choice",
    question: "装配模块的调试，推料气缸缩回过快，正确的做法为（ ）。",
    options: {
      A: "调节推料气缸前段节流阀",
      B: "调节推料气缸末端节流阀",
      C: "调节顶料气缸末端节流阀",
      D: "调节顶料气缸前段节流阀"
    },
    answer: "B",
    category: "装配系统"
  },
  {
    id: 177,
    type: "single_choice",
    question: "装配模块的调试，顶料气缸伸出过快，正确的做法为（ ）。",
    options: {
      A: "调节推料气缸前段节流阀",
      B: "调节推料气缸末端节流阀",
      C: "调节顶料气缸末端节流阀",
      D: "调节顶料气缸前段节流阀"
    },
    answer: "C",
    category: "装配系统"
  },
  {
    id: 178,
    type: "single_choice",
    question: "装配模块的调试，顶料气缸缩回过快，正确的做法为（ ）。",
    options: {
      A: "调节推料气缸前段节流阀",
      B: "调节推料气缸末端节流阀",
      C: "调节顶料气缸末端节流阀",
      D: "调节顶料气缸前段节流阀"
    },
    answer: "D",
    category: "装配系统"
  },
  {
    id: 179,
    type: "single_choice",
    question: "在工业机器人中数字量I/O信号对应的标识为（ ）。",
    options: {
      A: "AI/AO",
      B: "GI/GO",
      C: "DI/DO",
      D: "RI/RO"
    },
    answer: "C",
    category: "机器人I/O系统"
  },
  {
    id: 180,
    type: "single_choice",
    question: "供料模块中，气缸的I/O信号在工业机器人系统中对应的为（ ）信号。",
    options: {
      A: "DO",
      B: "DI",
      C: "AI",
      D: "AO"
    },
    answer: "A",
    category: "供料系统"
  },
  {
    id: 181,
    type: "single_choice",
    question: "供料模块中，光电传感器的I/O信号在工业机器人系统中对应的为（ ）信号。",
    options: {
      A: "DO",
      B: "DI",
      C: "AI",
      D: "AO"
    },
    answer: "B",
    category: "供料系统"
  },
  {
    id: 182,
    type: "single_choice",
    question: "发那科工业机器人系统中将信号DO101置为1的正确编程格式为（ ）。",
    options: {
      A: "DO[101]=1",
      B: "SETDO[101]",
      C: "RESETDO[101]",
      D: "DO[101]=ON"
    },
    answer: "D",
    category: "机器人程序编程"
  },
  {
    id: 183,
    type: "single_choice",
    question: "发那科工业机器人系统中给信号DO101发2S的脉冲，正确的编程格适为（ ）",
    options: {
      A: "DO[101]=ON",
      B: "DO[101]=PILSE，2S",
      C: "DO[101]=2S",
      D: "DO[101]=ON,2S"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 184,
    type: "single_choice",
    question: "变位机装配单元，控制变位机动作的机器人信号为（ ）。",
    options: {
      A: "DO",
      B: "DI",
      C: "RI",
      D: "UO"
    },
    answer: "A",
    category: "变位机系统"
  },
  {
    id: 185,
    type: "single_choice",
    question: "视觉检测单元中，触发视觉拍照的机器人信号是（ ）。",
    options: {
      A: "DO242",
      B: "DO241",
      C: "DO188",
      D: "GO17"
    },
    answer: "A",
    category: "视觉系统"
  },
  {
    id: 186,
    type: "single_choice",
    question: "使用转盘单元，当转盘到位后，到位信号反馈到机器人（ ）信号。",
    options: {
      A: "DI148",
      B: "DI150",
      C: "DI152",
      D: "DI145"
    },
    answer: "C",
    category: "转盘系统"
  },
  {
    id: 187,
    type: "single_choice",
    question: "单元模块通过PLC与机器人间通讯时，机器人的通讯选项机架号是（ ）。",
    options: {
      A: "87",
      B: "32",
      C: "0",
      D: "96"
    },
    answer: "D",
    category: "机器人通讯配置"
  },
  {
    id: 188,
    type: "single_choice",
    question: "机器人与PLC间通讯是使用的（ ）通讯。",
    options: {
      A: "MODEBUS TCP",
      B: "PROFIBUS",
      C: "CC-LINK",
      D: "Ethernet/IP"
    },
    answer: "A",
    category: "机器人通讯配置"
  },
  {
    id: 189,
    type: "single_choice",
    question: "机器人接收供料单元推料气缸限位反馈状态的是（ ）信号。",
    options: {
      A: "DI208",
      B: "DI209",
      C: "DI210",
      D: "DI211"
    },
    answer: "B",
    category: "供料系统"
  },
  {
    id: 190,
    type: "single_choice",
    question: "S7-1200 1214C的模拟量物理地址为（ ）。",
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
    id: 191,
    type: "single_choice",
    question: "在发那科机器人系统中模拟量的信号表示为（ ）。",
    options: {
      A: "AI/AO",
      B: "GI/GO",
      C: "DI/DO",
      D: "RI/RO"
    },
    answer: "A",
    category: "机器人I/O系统"
  },
  {
    id: 192,
    type: "single_choice",
    question: "称重传感器采用模拟量输入信号，在使用前应当对其进行（ ）。",
    options: {
      A: "调零",
      B: "数据分析",
      C: "手动分配物理地址",
      D: "性能测试"
    },
    answer: "A",
    category: "称重系统"
  },
  {
    id: 193,
    type: "single_choice",
    question: "在S7-1200 1214C的PLC中支持的模拟量信号有（ ）。",
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
    id: 194,
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
    id: 195,
    type: "single_choice",
    question: "发那科工业机器人中将模拟量[1]输入信号的值存储于寄存器[2]中的正确编程格式为（ ）。",
    options: {
      A: "R[1]=AI[2]",
      B: "R[1]=AO[2]",
      C: "R[2]=AO[1]",
      D: "R[2]=AI[1]"
    },
    answer: "D",
    category: "机器人程序编程"
  },
  {
    id: 196,
    type: "single_choice",
    question: "发那科工业机器人中向模拟量[2]输出寄存器[3]中的值，正确编程格式为（ ）。",
    options: {
      A: "AO[2]=R[3]",
      B: "AO[3]=R[2]",
      C: "AI[2]=R[3]",
      D: "AI[3]=R[2]"
    },
    answer: "A",
    category: "机器人程序编程"
  },
  {
    id: 197,
    type: "single_choice",
    question: "发那科工业机器人系统中组信号的标识为（ ）。",
    options: {
      A: "AI/AO",
      B: "GI/GO",
      C: "DI/DO",
      D: "RI/RO"
    },
    answer: "B",
    category: "机器人I/O系统"
  },
  {
    id: 198,
    type: "single_choice",
    question: "发那科工业机器人中利用Modbus TCP通讯时，配置组信号机架设置为（ ）。",
    options: {
      A: "1",
      B: "34",
      C: "96",
      D: "98"
    },
    answer: "C",
    category: "机器人通讯配置"
  },
  {
    id: 199,
    type: "single_choice",
    question: "发那科工业机器人中将寄存器R[2]的值通过二进制转化后输出到组2中的正确编程格式为（ ）。",
    options: {
      A: "GI[2]=R[2]",
      B: "GO[2]=R[2]",
      C: "AI[2]=R[2]",
      D: "AO[2]=R[2]"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 200,
    type: "single_choice",
    question: "发那科工业机器人中将组[1]输入信号的二进制数转为十进制数的值代入寄存R[2]中的正确编程格式为（ ）。",
    options: {
      A: "GO[1]=R[2]",
      B: "GI[2]=R[1]",
      C: "R[2]=GI[1]",
      D: "GO[2]=R[1]"
    },
    answer: "C",
    category: "机器人程序编程"
  },
  {
    id: 201,
    type: "single_choice",
    question: "RFID检测单元检测时，信号反馈到机器人（ ）信号。",
    options: {
      A: "DI182",
      B: "GI5",
      C: "GI8",
      D: "DI192"
    },
    answer: "B",
    category: "RFID系统"
  },
  {
    id: 202,
    type: "single_choice",
    question: "使用RFID检测单元时，使用的机器人组信号地址是（ ）。",
    options: {
      A: "65-80",
      B: "65-81",
      C: "65-72",
      D: "65-75"
    },
    answer: "C",
    category: "RFID系统"
  },
  {
    id: 203,
    type: "single_choice",
    question: "程序创建太多时，易记不住对应的程序功能，此时我们可以（ ）。",
    options: {
      A: "用文件夹分类",
      B: "添加程序注解",
      C: "添加程序等级",
      D: "添加程序编号"
    },
    answer: "B",
    category: "机器人程序管理"
  },
  {
    id: 204,
    type: "single_choice",
    question: "发那科机器人高级编程功能，以下为码垛指令的是（ ）。",
    options: {
      A: "FOR",
      B: "CALL",
      C: "PALLETIZING",
      D: "OFFSET"
    },
    answer: "C",
    category: "机器人程序编程"
  },
  {
    id: 205,
    type: "single_choice",
    question: "发那科机器人在编写程序时，想在相邻二行之间在写一行指令的方法为（ ）。",
    options: {
      A: "光标移至上方行，再选择插入行",
      B: "光标移至下方行，再选择插入行",
      C: "随意位置，选择插入行",
      D: "下方行出直接添加自己所需的指令"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 206,
    type: "single_choice",
    question: "发那科机器人在编写程序时，想要连续的多行删除某一段程序时的做法正确的是（ ）。",
    options: {
      A: "点删除即可",
      B: "点出删除，在点击多行删除即可",
      C: "点击剪切，再点击选择，选择需要剪切的行即可",
      D: "无法进行多行删除"
    },
    answer: "C",
    category: "机器人程序编程"
  },
  {
    id: 207,
    type: "single_choice",
    question: "在主程序中调用子程序，此时需要用到的指令是（ ）。",
    options: {
      A: "UP[]=",
      B: "ProCall",
      C: "Call",
      D: "LBL"
    },
    answer: "C",
    category: "机器人程序编程"
  },
  {
    id: 208,
    type: "single_choice",
    question: "在发那科机器人程序编辑中，使用（ ）指令无限循环一段程序。",
    options: {
      A: "FOR ERNFOR",
      B: "LBL[] JIMP LBL[]",
      C: "IF ENDIF",
      D: "IF THEN"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 209,
    type: "single_choice",
    question: "以下程序名，命名格式错误的是（ ）。",
    options: {
      A: "Style",
      B: "yalong",
      C: "123",
      D: "主程序"
    },
    answer: "C",
    category: "机器人程序管理"
  },
  {
    id: 210,
    type: "single_choice",
    question: "发那科机器人中断指令的下一条指令为wite指令时，机器人下一个动作（ ）。",
    options: {
      A: "不会执行，程序结束",
      B: "等待wite条件成立，继续执行",
      C: "继续运行无影响",
      D: "跳过wite指令"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 211,
    type: "single_choice",
    question: "发那科机器人系统中，中止程序的指令为（ ）。",
    options: {
      A: "ABORT",
      B: "NEXT",
      C: "ENDFOR",
      D: "ENDIF"
    },
    answer: "A",
    category: "机器人程序编程"
  },
  {
    id: 212,
    type: "single_choice",
    question: "发那科机器人系统先执行指令功能时间范围是（ ）。",
    options: {
      A: "0-20s",
      B: "0-30s",
      C: "0-40s",
      D: "0-100s"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 213,
    type: "single_choice",
    question: "等待输送模块触发物料检测传感器DI110为ON时，输送带动作，其编写格式正确的为（ ）。",
    options: {
      A: "DI[110]=ON",
      B: "DI[110]=1",
      C: "WITE DI[110]=ON",
      D: "WITE DI[110]=1"
    },
    answer: "C",
    category: "机器人程序编程"
  },
  {
    id: 214,
    type: "single_choice",
    question: "当DI1满足条件时，执行程序RSR0001，下列指令格式正确的是（ ）。",
    options: {
      A: "IFDI1=ONTHEN RSR0001 ENDIF",
      B: "IFDI[1]=ONTHENRSR0001",
      C: "IFDI[1]=ONTHEN RSR0001 ENDIF",
      D: "IFDI1RSR0001"
    },
    answer: "C",
    category: "机器人程序编程"
  },
  {
    id: 215,
    type: "single_choice",
    question: "发那科工业机器人中平移的指令为（ ）。",
    options: {
      A: "OFFSET",
      B: "SET",
      C: "RESET",
      D: "OFF"
    },
    answer: "A",
    category: "机器人程序编程"
  },
  {
    id: 216,
    type: "single_choice",
    question: "发那科工业机器人系统的偏移量一般指定在（ ）寄存器中。",
    options: {
      A: "数值",
      B: "码垛",
      C: "位置",
      D: "字符串"
    },
    answer: "C",
    category: "机器人程序编程"
  },
  {
    id: 217,
    type: "single_choice",
    question: "发那科机器人偏移指令中使用位置寄存器（ ）进行偏移量的指定。",
    options: {
      A: "P",
      B: "PR",
      C: "R",
      D: "PL"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 218,
    type: "single_choice",
    question: "发那科机器人在使用偏移时$PR[10,1]=20，表示的含义为（ ）。",
    options: {
      A: "轴1旋转20°",
      B: "X轴正方向偏移20",
      C: "X轴负方向偏移20",
      D: "X轴赋值等于20"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 219,
    type: "single_choice",
    question: "以P1点为基准点，在其X方向偏移一段距离，以下指令格式正确的是（ ）。",
    options: {
      A: "1.LP[1] 50% FINE OFFSET PR[1,1]",
      B: "1.JP[1] 200mm/s CNT20 OFFSET PR[1]",
      C: "1.PR[1]=LPOS 2.PR[1]=0 3.PR[1,1]=20 4.L P[1] 100mm/sec OFFSET PR[1]",
      D: "1.PR[1]=JPOS 2.PR[1]=0 2.PR[1，1]=20 3.JP[1] 100% OFFSET PR[1]"
    },
    answer: "C",
    category: "机器人程序编程"
  },
  {
    id: 220,
    type: "single_choice",
    question: "定义直角坐标，以PR[2，4]为条件执行完成后，下列解释正确的是（ ）。",
    options: {
      A: "执行完成，以基准点为准沿X方向移动一段距离",
      B: "执行完成，以基准点为准绕着X方向旋转指定角度",
      C: "执行完成，以基准点为准沿着Y方向移动一段距离",
      D: "执行完成，以基准点为准绕着Y方向旋转指定角度"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 221,
    type: "single_choice",
    question: "使用偏移指令做偏移时，以下可作为偏移条件的寄存器是（ ）。",
    options: {
      A: "PL",
      B: "R",
      C: "PR",
      D: "AL"
    },
    answer: "C",
    category: "机器人程序编程"
  },
  {
    id: 222,
    type: "single_choice",
    question: "在编写程序时，我们除了可以使用示教盒编制外还可以使用（ ）后导入机器人系统。",
    options: {
      A: "离线编程软件",
      B: "3维软件",
      C: "机器人调试软件",
      D: "只能使用示教盒编制"
    },
    answer: "A",
    category: "机器人程序编程"
  },
  {
    id: 223,
    type: "single_choice",
    question: "在编制码垛程序或者搬运程序时，除了点位示教法还可以使用（ ）。",
    options: {
      A: "偏移指令",
      B: "循环指令",
      C: "判断指令",
      D: "跳转指令"
    },
    answer: "A",
    category: "机器人程序编程"
  },
  {
    id: 224,
    type: "single_choice",
    question: "在编制码垛程序或者搬运程序时，最简单的程序编制方法为（ ）。",
    options: {
      A: "偏移指令",
      B: "点位示教",
      C: "码垛指令",
      D: "循环指令"
    },
    answer: "C",
    category: "机器人程序编程"
  },
  {
    id: 225,
    type: "single_choice",
    question: "在编制程序时，我们可以选择一个程序写完所有的逻辑，也可以选择（ ）进行编制。",
    options: {
      A: "分为多个子程序",
      B: "分为多个主程序",
      C: "分为多个例行程序",
      D: "程序集合"
    },
    answer: "A",
    category: "机器人程序编程"
  },
  {
    id: 226,
    type: "single_choice",
    question: "创建多个程序，以下说法正确的是（ ）",
    options: {
      A: "每个程序都可以作为主程序",
      B: "主程序命名方式有要求",
      C: "子程序命名必须以数字开头",
      D: "程序名可以重复"
    },
    answer: "B",
    category: "机器人程序管理"
  },
  {
    id: 227,
    type: "single_choice",
    question: "关于YL-18型设备发那科工业机器人与PLC之间的通讯方式为（ ）。",
    options: {
      A: "CC-LINK",
      B: "EtherNet IP",
      C: "Profibus-DP",
      D: "Modbus TCP"
    },
    answer: "D",
    category: "机器人通讯配置"
  },
  {
    id: 228,
    type: "single_choice",
    question: "机器人与PLC之间的信息交互，其机器人的数字输入信号对应PLC的数字（ ）信号。",
    options: {
      A: "模拟量",
      B: "组",
      C: "输出",
      D: "输入"
    },
    answer: "D",
    category: "机器人通讯配置"
  },
  {
    id: 229,
    type: "single_choice",
    question: "各模块里面的气缸、快换对应机器人的（ ）信号。",
    options: {
      A: "输入",
      B: "模拟量",
      C: "输出",
      D: "组"
    },
    answer: "C",
    category: "机器人I/O系统"
  },
  {
    id: 230,
    type: "single_choice",
    question: "各模块里面的光电传感器、限位传感器对应的机器人的（ ）信号。",
    options: {
      A: "输入",
      B: "模拟量",
      C: "输出",
      D: "组"
    },
    answer: "A",
    category: "机器人I/O系统"
  },
  {
    id: 231,
    type: "single_choice",
    question: "在扫描输入阶段，PLC将所有输入端的状态送到（ ）保存。",
    options: {
      A: "输出映象寄存器",
      B: "变量寄存器",
      C: "内部寄存器",
      D: "输入映象寄存器"
    },
    answer: "D",
    category: "PLC系统"
  },
  {
    id: 232,
    type: "single_choice",
    question: "可编程控制器的核心是（ ）。",
    options: {
      A: "存储器",
      B: "总线",
      C: "CPU",
      D: "I/O接口"
    },
    answer: "C",
    category: "PLC系统"
  },
  {
    id: 233,
    type: "single_choice",
    question: "机器人信号与PLC硬连接的信号是（ ）。",
    options: {
      A: "数字信号",
      B: "模拟量信号",
      C: "组信号",
      D: "系统信号"
    },
    answer: "A",
    category: "机器人通讯配置"
  },
  {
    id: 234,
    type: "single_choice",
    question: "PNS的启动信号个数是（ ）。",
    options: {
      A: "4",
      B: "6",
      C: "8",
      D: "255"
    },
    answer: "D",
    category: "机器人程序管理"
  },
  {
    id: 235,
    type: "single_choice",
    question: "YL-18设备机器人使用的UOP分配方式是（ ）",
    options: {
      A: "完整CRMA16",
      B: "简略CRMA16",
      C: "禁用",
      D: "从机CRMA16"
    },
    answer: "C",
    category: "机器人配置"
  },
  {
    id: 236,
    type: "single_choice",
    question: "当使用外部设备（PLC）控制机器人运行时需将控制方式设置为（ ）。",
    options: {
      A: "远程",
      B: "其他",
      C: "本地",
      D: "外部设备"
    },
    answer: "A",
    category: "机器人控制模式"
  },
  {
    id: 237,
    type: "single_choice",
    question: "使用PLC控制机器人程序时，关联机器人系统变量ENABLE与数字信号时，其机架及插槽为（ ）。",
    options: {
      A: "351",
      B: "481",
      C: "482",
      D: "871"
    },
    answer: "B",
    category: "机器人控制配置"
  },
  {
    id: 238,
    type: "single_choice",
    question: "当使用外部设备（PLC）控制机器人运行时，需下列设置正确的是（ ）。",
    options: {
      A: "示教开关打到ON；系统配置里专用外部信号设置启用；控制方式设置为本地；控制柜模式开关打到AUTO；",
      B: "示教开关打到ON；系统配置里专用外部信号设置启用；控制方式设置为远程；控制柜模式开关打到AUTO；",
      C: "示教开关打到OFF；系统配置里专用外部信号设置启用；控制方式设置为远程；控制柜模式开关打到AUTO；",
      D: "示教开关打到OFF；系统配置里专用外部信号设置启用；控制方式设置为本地；控制柜模式开关打到AUTO；"
    },
    answer: "C",
    category: "机器人控制配置"
  },
  {
    id: 239,
    type: "single_choice",
    question: "关于YL-18型设备机器视觉的拍照信号对应PLC的（ ）信号。",
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
    id: 240,
    type: "single_choice",
    question: "关于YL-18型设备称重传感器对应PLC的（ ）信号。",
    options: {
      A: "模拟量",
      B: "输入",
      C: "输出",
      D: "组"
    },
    answer: "A",
    category: "称重系统"
  },
  {
    id: 241,
    type: "single_choice",
    question: "关于YL-18型设备称重传感器的量程为（ ）千克。",
    options: {
      A: "0~1",
      B: "1~2",
      C: "0~5",
      D: "1~5"
    },
    answer: "C",
    category: "称重系统"
  },
  {
    id: 242,
    type: "single_choice",
    question: "关于YL-18型设备称重传感器在PLC中对应的物理地址是（ ）。",
    options: {
      A: "固定不变的",
      B: "随机分配的",
      C: "手动指定的",
      D: "浮动的地址"
    },
    answer: "A",
    category: "称重系统"
  },
  {
    id: 243,
    type: "single_choice",
    question: "关于YL-18型设备称重传感器通过变送器给PLC输入的为（ ）信号。",
    options: {
      A: "电压",
      B: "电流",
      C: "二进制",
      D: "十进制"
    },
    answer: "A",
    category: "称重系统"
  },
  {
    id: 244,
    type: "single_choice",
    question: "关于YL-18型设备机器视觉的判断反馈信号对应PLC的（ ）信号。",
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
    id: 245,
    type: "single_choice",
    question: "YL-18设备FANUC机器人控制视觉拍照的信号是（ ）。",
    options: {
      A: "DO186",
      B: "DO242",
      C: "DI10034",
      D: "DO10034"
    },
    answer: "B",
    category: "视觉系统"
  },
  {
    id: 246,
    type: "single_choice",
    question: "关于YL-18设备视觉模块，不是视觉系统的组成部分的是（ ）。",
    options: {
      A: "加密狗",
      B: "控制器",
      C: "IO板",
      D: "光源"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 247,
    type: "single_choice",
    question: "关于YL-18设备视觉模块，视觉系统与PLC采用哪种通讯方式（ ）。",
    options: {
      A: "PROFIBUS",
      B: "以太网",
      C: "CC-LINK",
      D: "MODEBUSTCP"
    },
    answer: "D",
    category: "视觉系统"
  },
  {
    id: 248,
    type: "single_choice",
    question: "关于YL-18型设备RFID模块的检测信号对应工业机器人的信号为（ ）。",
    options: {
      A: "DO",
      B: "DI",
      C: "RO",
      D: "RI"
    },
    answer: "A",
    category: "RFID系统"
  },
  {
    id: 249,
    type: "single_choice",
    question: "关于YL-18型设备RFID模块的检测结果反馈信号对应工业机器人的信号为（ ）。",
    options: {
      A: "DO",
      B: "DI",
      C: "RO",
      D: "RI"
    },
    answer: "B",
    category: "RFID系统"
  },
  {
    id: 250,
    type: "single_choice",
    question: "关于YL-18型设备RFID模块与西门子PLC走的通讯协议为（ ）。",
    options: {
      A: "RS485",
      B: "Modbus TCP",
      C: "Profibus-DP",
      D: "EtherNet IP"
    },
    answer: "A",
    category: "RFID系统"
  },
  {
    id: 251,
    type: "single_choice",
    question: "RFID卡的读取方式（ ）。",
    options: {
      A: "CCD或光束扫描",
      B: "电磁转换",
      C: "无线通信",
      D: "电擦除、写入"
    },
    answer: "C",
    category: "RFID系统"
  },
  {
    id: 252,
    type: "single_choice",
    question: "RFID卡可分为：有源(Active)标签和无源(Passive)标签（ ）。",
    options: {
      A: "按供电方式分",
      B: "按工作频率分",
      C: "按通信方式分",
      D: "按标签芯片分"
    },
    answer: "A",
    category: "RFID系统"
  },
  {
    id: 253,
    type: "single_choice",
    question: "RFID的技术特点不包含（ ）。",
    options: {
      A: "非接触式，中远距离工作",
      B: "大批量、由读写器快速自动读取",
      C: "信息量大、可以细分单品",
      D: "芯片存储，但不可多次读取"
    },
    answer: "D",
    category: "RFID系统"
  },
  {
    id: 254,
    type: "single_choice",
    question: "关于YL-18设备RFID检测模块，其RFID读写数据的范围是（ ）。",
    options: {
      A: "0-63",
      B: "0-127",
      C: "0-255",
      D: "0-512"
    },
    answer: "C",
    category: "RFID系统"
  },
  {
    id: 255,
    type: "single_choice",
    question: "关于YL-18设备RFID检测模块，其RFID与PLC间的通讯方式是（ ）。",
    options: {
      A: "RS232",
      B: "RS485",
      C: "CAN",
      D: "DP"
    },
    answer: "B",
    category: "RFID系统"
  },
  {
    id: 256,
    type: "single_choice",
    question: "关于YL-18设备仓储模块，此模块使用传感器为（ ）检测工作方式。",
    options: {
      A: "PNP",
      B: "NPN",
      C: "高低都可以",
      D: "对射式"
    },
    answer: "B",
    category: "仓储系统"
  },
  {
    id: 257,
    type: "single_choice",
    question: "仓库按技术处理方式及保管方式分类，可分为普通仓库、冷藏仓库、恒温仓库和（ ）。",
    options: {
      A: "立体仓库",
      B: "食品仓库",
      C: "流通型仓库",
      D: "危险品仓库"
    },
    answer: "D",
    category: "仓储系统"
  },
  {
    id: 258,
    type: "single_choice",
    question: "智能仓储为实现机器人自动判断物料的对应库位应结合（ ）模块一起使用。",
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
    id: 259,
    type: "single_choice",
    question: "当我们编写机器人入库程序时，不需要知道下列哪一项也可进行（ ）。",
    options: {
      A: "仓库每行高度",
      B: "仓库列与列之间的距离",
      C: "仓库的重量",
      D: "机器人所持入库物体的长宽高"
    },
    answer: "C",
    category: "仓储系统"
  },
  {
    id: 260,
    type: "single_choice",
    question: "智能仓储模块的光电传感器检测物料时距离有偏差时可以（ ）。",
    options: {
      A: "调整侧面旋钮",
      B: "调整设备电压",
      C: "调整设备电流",
      D: "调整传感器位置"
    },
    answer: "A",
    category: "仓储系统"
  },
  {
    id: 261,
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
    id: 262,
    type: "single_choice",
    question: "关于YL-18设备仓储模块，此模块使用传感器为（ ）检测工作方式。",
    options: {
      A: "PNP",
      B: "NPN",
      C: "高低都可以",
      D: "对射式"
    },
    answer: "B",
    category: "仓储系统"
  },
  {
    id: 263,
    type: "single_choice",
    question: "当使用偏移指令编写产品的入库程序时，我们需要知道（ ）。",
    options: {
      A: "每行库位的距离",
      B: "每列库位的距离",
      C: "每行及每列库位间的距离",
      D: "基准点及库位间的距离"
    },
    answer: "D",
    category: "机器人程序编程"
  },
  {
    id: 264,
    type: "single_choice",
    question: "关于YL-18型设备选用的西门子人机界面的型号为（ ）。",
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
    id: 265,
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
    id: 266,
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
    id: 267,
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
    id: 268,
    type: "single_choice",
    question: "TP700的触摸屏使用的编程软件为（ ）。",
    options: {
      A: "MCGS",
      B: "TIA博图软件",
      C: "Touchwin",
      D: "InoTouch Editor"
    },
    answer: "B",
    category: "人机界面"
  },
  {
    id: 269,
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
    id: 270,
    type: "single_choice",
    question: "人机界面与PLC做通讯连接时，其IP地址应与PLC的IP地址设置成（ ）。",
    options: {
      A: "同一IP地址",
      B: "同一网关不同地址",
      C: "不同网关相同地址",
      D: "任意设置"
    },
    answer: "B",
    category: "人机界面"
  },
  {
    id: 271,
    type: "single_choice",
    question: "通过人机界面创建及关联，不能实现的功能是（ ）。",
    options: {
      A: "编写机器人程序",
      B: "控制设备的启停",
      C: "监控设备运行状态",
      D: "监控机器人状态"
    },
    answer: "A",
    category: "人机界面"
  },
  {
    id: 272,
    type: "single_choice",
    question: "发那科机器人中主程序对子程序的调用的指令为（ ）。",
    options: {
      A: "CALL",
      B: "JMP/LBL",
      C: "SELECT",
      D: "WAIT"
    },
    answer: "A",
    category: "机器人程序编程"
  },
  {
    id: 273,
    type: "single_choice",
    question: "发那科机器人应用程序的编写需要用到的标签跳转指令为（ ）。",
    options: {
      A: "CALL",
      B: "JMP/LBL",
      C: "SELECT",
      D: "WAIT"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 274,
    type: "single_choice",
    question: "发那科机器人打磨程序的编写用到的等待指令为（ ）。",
    options: {
      A: "CALL",
      B: "JMP/LBL",
      C: "SELECT",
      D: "WAIT"
    },
    answer: "D",
    category: "机器人程序编程"
  },
  {
    id: 275,
    type: "single_choice",
    question: "发那科机器人喷涂程序的编写用到的循环的指令为（ ）。",
    options: {
      A: "FOR/ENDFOR",
      B: "OFFSET",
      C: "FOR",
      D: "IF"
    },
    answer: "C",
    category: "机器人程序编程"
  },
  {
    id: 276,
    type: "single_choice",
    question: "支持加减乘除运算的寄存器为（ ）。",
    options: {
      A: "数值寄存器",
      B: "位置寄存器",
      C: "码垛寄存器",
      D: "字符串寄存器"
    },
    answer: "A",
    category: "机器人程序编程"
  },
  {
    id: 277,
    type: "single_choice",
    question: "发那科机器人中，根据逻辑加入保护程序，其用户报警指令为（ ）。",
    options: {
      A: "TIMER",
      B: "UALM",
      C: "REMARK",
      D: "MESSAGE"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 278,
    type: "single_choice",
    question: "想直观看出程序的运行时间，可以在程序的前后加入计时器指令（ ）。",
    options: {
      A: "TIMER",
      B: "UALM",
      C: "REMARK",
      D: "MESSAGE"
    },
    answer: "A",
    category: "机器人程序编程"
  },
  {
    id: 279,
    type: "single_choice",
    question: "工业机器人计时器的数量共有（ ）个。",
    options: {
      A: "5",
      B: "10",
      C: "15",
      D: "无数"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 280,
    type: "single_choice",
    question: "工业机器人如果选用PNS进行外部启动时，必须使用的系统信号为（ ）。",
    options: {
      A: "HOME",
      B: "SFSPD",
      C: "HOLD",
      D: "PNSTROBE"
    },
    answer: "D",
    category: "机器人控制配置"
  },
  {
    id: 281,
    type: "single_choice",
    question: "工业机器人选用RSR0001进行外部启动时去，需要将基准号码设置为（ ）。",
    options: {
      A: "0",
      B: "1",
      C: "10",
      D: "100"
    },
    answer: "A",
    category: "机器人控制配置"
  },
  {
    id: 282,
    type: "single_choice",
    question: "FANUC机器人焊接时使用的指令格式书写正确的是（ ）。",
    options: {
      A: "WELDSTART[A,B]ENDWELD[A,B]",
      B: "LP[1]100cm/secfine WELDSTART[A,B] ENDWELD[A,B]",
      C: "LP[1]100cm/secFINE WELDSTART[A,B] LP[2]WELD_SPEEDFINE ENDWELD[A,B]",
      D: "WELDSTART[A,B] LP[2]WELD_SPEEDFINE ENDWELD[A,B]"
    },
    answer: "C",
    category: "焊接编程"
  },
  {
    id: 283,
    type: "single_choice",
    question: "使用焊接指令时，下列不属于焊接条件的是（ ）。",
    options: {
      A: "焊接电压",
      B: "焊接电流",
      C: "焊接速度",
      D: "转弯半径"
    },
    answer: "D",
    category: "焊接编程"
  },
  {
    id: 284,
    type: "single_choice",
    question: "如果码垛的堆垛样式比较复杂，径路样式一种即可，那么选择的码垛指令方式是（ ）。",
    options: {
      A: "B",
      B: "E",
      C: "BX",
      D: "EX"
    },
    answer: "B",
    category: "码垛编程"
  },
  {
    id: 285,
    type: "single_choice",
    question: "当为机器人添加一个外部轴时，那么它的开始轴号是（ ）。",
    options: {
      A: "6",
      B: "7",
      C: "8",
      D: "任意"
    },
    answer: "B",
    category: "机器人配置"
  },
  {
    id: 286,
    type: "single_choice",
    question: "弧焊开始指令WledStart[A,B]中的序号位置代表什么（ ）。",
    options: {
      A: "A焊接数据编号B焊接设定编号",
      B: "A焊接设定编号B焊接数据编号",
      C: "A焊接电压B焊接数据编号",
      D: "A焊接电压B焊接电流"
    },
    answer: "A",
    category: "焊接编程"
  },
  {
    id: 287,
    type: "single_choice",
    question: "下列哪种方法不是用来设定工具坐标系的（ ）。",
    options: {
      A: "三点法",
      B: "四点法",
      C: "直接输入法",
      D: "六点法"
    },
    answer: "B",
    category: "机器人坐标系设定"
  },
  {
    id: 288,
    type: "single_choice",
    question: "创建工具坐标系时，其最多可以设定几个工具坐标系（ ）。",
    options: {
      A: "8个",
      B: "10个",
      C: "16个",
      D: "任意"
    },
    answer: "B",
    category: "机器人坐标系设定"
  },
  {
    id: 289,
    type: "single_choice",
    question: "编写机器人工艺流程程序时，注意事宜是（ ）。",
    options: {
      A: "程序可读性",
      B: "结构合理性",
      C: "编辑子程序",
      D: "以上都是"
    },
    answer: "D",
    category: "机器人程序编程"
  },
  {
    id: 290,
    type: "single_choice",
    question: "工业机器人在工艺流程中主要应用于（ ）。",
    options: {
      A: "搬运",
      B: "码垛",
      C: "焊接",
      D: "以上都是"
    },
    answer: "D",
    category: "机器人应用"
  },
  {
    id: 291,
    type: "single_choice",
    question: "分抹系统主要组成机构（ ）。",
    options: {
      A: "分抹机器人",
      B: "工业视觉",
      C: "吸盘",
      D: "以上都是"
    },
    answer: "D",
    category: "分拣系统"
  },
  {
    id: 292,
    type: "single_choice",
    question: "喷涂机器人的主要优点（ ）",
    options: {
      A: "柔性大，工作范围大",
      B: "提高喷涂质量和材料使用率",
      C: "设备利用率高",
      D: "以上都是"
    },
    answer: "D",
    category: "喷涂系统"
  },
  {
    id: 293,
    type: "single_choice",
    question: "下列哪些应用可使用工业机器人工作（ ）",
    options: {
      A: "焊接应用",
      B: "码垛应用",
      C: "涂胶应用",
      D: "以上都是"
    },
    answer: "D",
    category: "机器人应用"
  },
  {
    id: 294,
    type: "single_choice",
    question: "基础的视觉系统除了控制器、相机、光源等还由哪部分组成（ ）。",
    options: {
      A: "PLC",
      B: "镜头",
      C: "机器人",
      D: "交换机"
    },
    answer: "B",
    category: "视觉系统"
  },
  {
    id: 295,
    type: "single_choice",
    question: "相机图像模板的建立是在灰白相机的基础上建立的，要想把彩色相机图像转变为灰白图像，应该添加哪个功能块（ ）。",
    options: {
      A: "本地图像",
      B: "颜色转换",
      C: "图像二值化",
      D: "自动装换"
    },
    answer: "B",
    category: "视觉系统"
  },
  {
    id: 296,
    type: "single_choice",
    question: "关于YL-18型设备的多边形搬运任务，RFID检测的数据为1，则机器人通常将该物料放置于（ ）。",
    options: {
      A: "1号位",
      B: "2号位",
      C: "3号位",
      D: "4号位"
    },
    answer: "A",
    category: "搬运系统"
  },
  {
    id: 297,
    type: "single_choice",
    question: "关于YL-18型设备进行称重测量任务，称重模块测得的数据小于设定数据时，则机器人会将该物料放置于（ ）。",
    options: {
      A: "废料区",
      B: "合格区",
      C: "1号位",
      D: "2号位"
    },
    answer: "A",
    category: "称重系统"
  },
  {
    id: 298,
    type: "single_choice",
    question: "关于YL-18型设备电机装配工艺流程，在进行入库之前需要（ ）进行检测，反馈给机器人应该入几号库位。",
    options: {
      A: "视觉",
      B: "RFID",
      C: "光电传感器",
      D: "称重传感器"
    },
    answer: "B",
    category: "装配系统"
  },
  {
    id: 299,
    type: "single_choice",
    question: "编写机器人程序，完成从P[1]到P[2]点的直线运动，要求精准到位，下列程序正确的是（ ）。",
    options: {
      A: "1.LP[1] 50% FINE 2.L P[2] 100mm/sec FINE",
      B: "1.J P[1] 50% FINE 2.L P[2] 100mm/sec Cnt10",
      C: "1.L P[1] 20mm/sec FINE 2.L P[2] 100mm/sec FINE",
      D: "1.J P[1] 50% FINE 2.J P[2] 100% FINE"
    },
    answer: "C",
    category: "机器人程序编程"
  },
  {
    id: 300,
    type: "single_choice",
    question: "下列指令不属于机器人流程控制指令的是（ ）。",
    options: {
      A: "IF",
      B: "FOR/ENDFOR",
      C: "LBL[]",
      D: "L"
    },
    answer: "D",
    category: "机器人程序编程"
  },
  {
    id: 301,
    type: "single_choice",
    question: "构成程序名称的元素不包括（ ）。",
    options: {
      A: "数字",
      B: "汉字",
      C: "英文字母",
      D: "下划线"
    },
    answer: "B",
    category: "机器人程序管理"
  },
  {
    id: 302,
    type: "single_choice",
    question: "下列坐标系与其他坐标差异较为明显的是（ ）。",
    options: {
      A: "用户坐标系",
      B: "关节坐标系",
      C: "世界坐标系",
      D: "手动坐标系"
    },
    answer: "B",
    category: "机器人坐标系"
  },
  {
    id: 303,
    type: "single_choice",
    question: "对程序的优化和调整即为优化程序的（ ）。",
    options: {
      A: "语句",
      B: "指令",
      C: "结构",
      D: "参数"
    },
    answer: "C",
    category: "机器人程序优化"
  },
  {
    id: 304,
    type: "single_choice",
    question: "程序的优化中下列不适合使用使用示教编程的为（ ）。",
    options: {
      A: "货物码垛",
      B: "车轮点焊",
      C: "轮毂去毛刺",
      D: "零件装配"
    },
    answer: "C",
    category: "机器人程序优化"
  },
  {
    id: 305,
    type: "single_choice",
    question: "程序的优化中下列哪种工艺适合采用工程轨迹模块来进行离线编程（ ）。",
    options: {
      A: "三通管相贯线的焊接",
      B: "大型曲面工件的喷涂",
      C: "轮毂边缘的去毛刺",
      D: "不锈钢字的切割"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 306,
    type: "single_choice",
    question: "程序可以被复制，但是程序名不能相同，其复制过来的程序点位数据（ ）。",
    options: {
      A: "保持不变",
      B: "完全丢失",
      C: "逻辑改变",
      D: "名称相同，数据丢失"
    },
    answer: "A",
    category: "机器人程序管理"
  },
  {
    id: 307,
    type: "single_choice",
    question: "在编制程序时，同一段逻辑语句，我们可以选择（ ）工具简化编程。",
    options: {
      A: "删除",
      B: "复制/粘贴",
      C: "调用",
      D: "插入"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 308,
    type: "single_choice",
    question: "数字图像处理的研究内容不包括（ ）。",
    options: {
      A: "图像数字化",
      B: "图像增强",
      C: "数字图像存储",
      D: "图像分割"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 309,
    type: "single_choice",
    question: "图像与灰度直方图间的对应关系是（ ）",
    options: {
      A: "一一对应",
      B: "一对多",
      C: "多对一",
      D: "都不对"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 310,
    type: "single_choice",
    question: "以下哪些属于RFID应用（ ）",
    options: {
      A: "物流过程中的货物追踪，信息采集",
      B: "训养动物，畜牧牲口，宠物等识别管理",
      C: "ETC路桥不停车收费系统",
      D: "以上都是"
    },
    answer: "D",
    category: "RFID系统"
  },
  {
    id: 311,
    type: "single_choice",
    question: "在程序建立很多的情况下，查找程序会变得很麻烦，可以将常用的程序名称按（ ）进行命名。",
    options: {
      A: "数字大小",
      B: "字母先后顺序",
      C: "程序名称长度",
      D: "程序字母大小写"
    },
    answer: "B",
    category: "机器人程序管理"
  },
  {
    id: 312,
    type: "single_choice",
    question: "需要使用大于100个程序当主程序进行外部触发时可以用（ ）命名形式。",
    options: {
      A: "RSR",
      B: "PNS",
      C: "TRL",
      D: "TCB"
    },
    answer: "B",
    category: "机器人程序管理"
  },
  {
    id: 313,
    type: "single_choice",
    question: "关于机器人TP程序指令，下列说法错误的是（ ）。",
    options: {
      A: "可以移动机器人",
      B: "模式开关",
      C: "DEMADMAN开关",
      D: "修改机器人系统变量"
    },
    answer: "D",
    category: "机器人程序编程"
  },
  {
    id: 314,
    type: "single_choice",
    question: "需要编写程序时，哪个按键可快速进入程序编辑界面（ ）。",
    options: {
      A: "DATA",
      B: "SELECT",
      C: "EDIT",
      D: "ENTER"
    },
    answer: "C",
    category: "示教器操作"
  },
  {
    id: 315,
    type: "single_choice",
    question: "在FANUC伺服电机中使用的编码器，系列描述正确的是（ ）。",
    options: {
      A: "连接动力线缆",
      B: "更新轴位置",
      C: "记录转子的位置",
      D: "控制运动速度"
    },
    answer: "C",
    category: "伺服系统"
  },
  {
    id: 316,
    type: "single_choice",
    question: "如果RSR3的记录号为8，技术为200，那么启动的程序名称为（ ）。",
    options: {
      A: "RSR2",
      B: "RSR280",
      C: "RSR0280",
      D: "RSR0208"
    },
    answer: "D",
    category: "机器人程序管理"
  },
  {
    id: 317,
    type: "single_choice",
    question: "如果要在仿真环境中创建一个工装模型，那么应该在下列哪个模块下进行操作（ ）。",
    options: {
      A: "PART",
      B: "OBSTACLE",
      C: "FIXTURE",
      D: "MACHINE"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 318,
    type: "single_choice",
    question: "下列对于EOAT模型描述错误的是（ ）。",
    options: {
      A: "末端执行器",
      B: "TOOLING模块",
      C: "模拟工件",
      D: "随机器人运动"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 319,
    type: "single_choice",
    question: "仿真工作站中如果要建立围栏等场景元素，那么最好选择在哪个模块下进行创建（ ）。",
    options: {
      A: "PART",
      B: "OBSTACLE",
      C: "FIXTURE",
      D: "MACHINE"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 320,
    type: "single_choice",
    question: "下列关于ROBOGUIDE仿真机器人工作站的说法错误的是（ ）。",
    options: {
      A: "仿真和离线编程的平台",
      B: "尽量还原真实现场",
      C: "采用模型进行搭建",
      D: "机器人品牌可任意选择"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 321,
    type: "single_choice",
    question: "点击机器人模型属性设置窗口中的[Serialize Robot]，软件会进行的操作是（ ）。",
    options: {
      A: "进入机器人工程文件创建界面",
      B: "关闭机器人工程文件",
      C: "重新加载机器人工程文件",
      D: "新建机器人工程文件"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 322,
    type: "single_choice",
    question: "要让机器人模型实体半透明显示，那么应该进行的操作是（ ）。",
    options: {
      A: "勾选[Wire Frame]",
      B: "取消勾选[Edge Visible]",
      C: "不勾选[Wire Frame]，调节后方的按钮",
      D: "取消勾选[Visible]"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 323,
    type: "single_choice",
    question: "当工具模型初次加载到仿真环境中，其位置发生错误，应该进行的操作是（ ）。",
    options: {
      A: "删除此模型并重新加载",
      B: "调整机器人的位置适应工具",
      C: "调整工具模型的位置适应机器人",
      D: "修改模型的坐标"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 324,
    type: "single_choice",
    question: "下列关于FIXTURE模型中说法错误的是（ ）。",
    options: {
      A: "在原有的FIXTURE模型上多级链接创建",
      B: "一般可模拟工装台",
      C: "作为工件模型的载体之一",
      D: "数量上不做限制"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 325,
    type: "single_choice",
    question: "若要使用仿真软件实现去毛刺、倒角等工件加工的仿真应用，在创建仿真模型时需要选择加载（ ）软件安装包。",
    options: {
      A: "HandingPRO",
      B: "WeldPRO",
      C: "PalletPRO",
      D: "ChamferingPRO"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 326,
    type: "single_choice",
    question: "若要使用仿真软件实现去喷涂工件加工的仿真应用，在创建仿真模型时需要选择加载（ ）软件安装包。",
    options: {
      A: "ChamferingPRO",
      B: "PalletPRO",
      C: "PaintPRO",
      D: "HandingPRO"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 327,
    type: "single_choice",
    question: "如果想在仿真环境中创建一个工装模型，那么需在哪个模块下进行操作（ ）。",
    options: {
      A: "OBSTACLE",
      B: "PART",
      C: "MACHINE",
      D: "FIXTURE"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 328,
    type: "single_choice",
    question: "仿真工作站中若要建立围栏、光幕等场景元素，那么最好在哪个模块下创建（ ）最好。",
    options: {
      A: "OBSTACLE",
      B: "PART",
      C: "MACHINE",
      D: "FIXTURE"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 329,
    type: "single_choice",
    question: "工装台的尺寸如果过大，则下列做法正确的是（ ）",
    options: {
      A: "放大机器人模型的尺寸",
      B: "降低工装台的高度",
      C: "缩小工装台的尺寸",
      D: "默认保持不动"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 330,
    type: "single_choice",
    question: "发那科仿真软件关于Part模型下列说法中错误的是（ ）。",
    options: {
      A: "模型下方有个托板",
      B: "模拟工件",
      C: "可添加到载体模型上",
      D: "只有立方体、圆柱体和球体"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 331,
    type: "single_choice",
    question: "工业机器人离线编程的主要的步骤有①轨迹规划(2)场景搭建(3)工序优化(4)程序输出，下列排序正确的是（ ）。",
    options: {
      A: "②①③④",
      B: "②③①④",
      C: "②①④③",
      D: "③②①④"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 332,
    type: "single_choice",
    question: "如果要在ROBOGUIDE中建立一个关于焊接的仿真，则应该选择的仿真模块是（ ）。",
    options: {
      A: "HandlingPRO",
      B: "PalletPRO",
      C: "WeldPRO",
      D: "ChamferingPRO"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 333,
    type: "single_choice",
    question: "关于CoordinatedMotion功能下列说法正确的是（ ）。",
    options: {
      A: "补偿工件随导轨运动的位移",
      B: "优化程序的路径和节拍",
      C: "控制机器人与外部轴做协调运动",
      D: "对机器人的报警进行诊断"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 334,
    type: "single_choice",
    question: "ROBOGUIDE生成的工程文件压缩包的格式是（ ）。",
    options: {
      A: "FRW",
      B: "RGX",
      C: "EXE",
      D: "IGS"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 335,
    type: "single_choice",
    question: "下列设备中属于机器人可支持的外部群组的是（ ）。",
    options: {
      A: "行走轴",
      B: "变位机",
      C: "电焊机",
      D: "弧焊枪"
    },
    answer: "B",
    category: "机器人配置"
  },
  {
    id: 336,
    type: "single_choice",
    question: "软件菜单栏中的Teach下拉选项是关于工程文件中哪一部分的操作（ ）。",
    options: {
      A: "模型编辑",
      B: "视图显示",
      C: "程序编辑",
      D: "仿真运行"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 337,
    type: "single_choice",
    question: "要让机器人模型实体半透明显示，那么需要进行下面哪种操作（ ）。",
    options: {
      A: "取消勾选[Visible]",
      B: "勾选[Wire Frame]",
      C: "不勾选[Wire Frame]，调节后方的按钮",
      D: "取消勾选[Edg Visible]"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 338,
    type: "single_choice",
    question: "当工具模型第一次加载到仿真环境中时，其位置会发生错误，此时应该进行的操作是（ ）。",
    options: {
      A: "删除此模型并重新加载",
      B: "调整机器人的位置适应工具",
      C: "调整工具模型的位置适应机器人",
      D: "修改模型的坐标"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 339,
    type: "single_choice",
    question: "工作台的尺寸倘若过大或过小的话，那么下列哪种做法是正确的（ ）。",
    options: {
      A: "放大机器人模型的尺寸",
      B: "降低工装台的高度",
      C: "调整工作台的尺寸",
      D: "默认保持不动"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 340,
    type: "single_choice",
    question: "点击机器人模型属性设置窗口中的[Serialize Robot]，此时软件中对应的操作是（ ）。",
    options: {
      A: "新建机器人工程文件",
      B: "进入机器人工程文件创建界面",
      C: "关闭机器人工程文件",
      D: "重新加载机器人工程文件"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 341,
    type: "single_choice",
    question: "ROBOGUIDE软件中虚拟示教没有的开关按键是（ ）。",
    options: {
      A: "SHIFT",
      B: "F1-F5",
      C: "MENU",
      D: "ON/OFF"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 342,
    type: "single_choice",
    question: "在将外部模型导入ROBOGUIDE之前，最好将模型文件的格式装换成（ ）。",
    options: {
      A: "SAT",
      B: "IGS",
      C: "3DS",
      D: "STL"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 343,
    type: "single_choice",
    question: "ROBOGUIDE选项中支持贴图功能的是（ ）。",
    options: {
      A: "圆柱体模型",
      B: "球体模型",
      C: "立方体模型",
      D: "任意模型"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 344,
    type: "single_choice",
    question: "ROBOGUIDE软件中贴图功能不支持的图片格式是（ ）。",
    options: {
      A: "JPG",
      B: "TGA",
      C: "PNS",
      D: "BMP"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 345,
    type: "single_choice",
    question: "在仿真环境中，下列设置工具坐标系的方法中最合适的是（ ）。",
    options: {
      A: "三点法",
      B: "六点法",
      C: "直接输入法",
      D: "TCP拖拽法"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 346,
    type: "single_choice",
    question: "在仿真环境中，下列设置用户坐标系的方法中最合适的是（ ）。",
    options: {
      A: "三点法",
      B: "六点法",
      C: "直接输入法",
      D: "坐标系拖拽法"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 347,
    type: "single_choice",
    question: "将机器人TCP点移动到模型边缘上的点，快捷键（ ）。",
    options: {
      A: "[Ctrl]+[Alt]+[鼠标左键]",
      B: "[Ctrl]+[SHIFT]+[鼠标左键]",
      C: "[Ctrl]+[Alt]+[鼠标右键]",
      D: "[Ctrl]+[SHIFT]+[鼠标右键]"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 348,
    type: "single_choice",
    question: "仿真程序编辑器中哪个选项是添加动作指令的工具（ ）。",
    options: {
      A: "RECORD",
      B: "TOUCHUP",
      C: "MOVETO",
      D: "INST"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 349,
    type: "single_choice",
    question: "使用贴图功能时，其无法识别的图片格式是（ ）。",
    options: {
      A: "PNS",
      B: "TGA",
      C: "BMP",
      D: "JPG"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 350,
    type: "single_choice",
    question: "在仿真环境下，设置工具坐标系时最适中的创建方法是（ ）。",
    options: {
      A: "六点法",
      B: "三点法",
      C: "TCP拖拽法",
      D: "直接输入法"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 351,
    type: "single_choice",
    question: "在将外部模型导入ROBOGUIDE前，最好将模型文件的格式转换成（ ）。",
    options: {
      A: "3DS",
      B: "STL",
      C: "SAT",
      D: "IGS"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 352,
    type: "single_choice",
    question: "在发那科仿真软件中，在程序编辑器中编辑程序时，其哪个选项是添加动作指令的工具（ ）。",
    options: {
      A: "RECORD",
      B: "TOCHUP",
      C: "MOVE TO",
      D: "INST"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 353,
    type: "single_choice",
    question: "离线程序未经处理直接下载到真实的机器人中运行，可能导致的结果下列说法错误的是（ ）。",
    options: {
      A: "实际运行的路径和预期存在位置偏差",
      B: "运行过程中出现奇异点",
      C: "运行过程中发生轴的限位",
      D: "不会出现其他问题"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 354,
    type: "single_choice",
    question: "程序校准功能的作用原理是（ ）",
    options: {
      A: "偏移工具坐标系",
      B: "更新记录点数据",
      C: "偏移用户坐标系",
      D: "使用点位置偏移指令"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 355,
    type: "single_choice",
    question: "示教盒如果要切换成彩色版，应该进行的操作是（ ）。",
    options: {
      A: "点击小键盘",
      B: "关闭示教器并重新启动示教器",
      C: "点击ip按钮",
      D: "重启机器人系统再打开示教器"
    },
    answer: "B",
    category: "示教器操作"
  },
  {
    id: 356,
    type: "single_choice",
    question: "下列不是满足模型被抓取的条件是（ ）",
    options: {
      A: "PART模型",
      B: "依附于载体",
      C: "设置了仿真允许条件",
      D: "设置了质量"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 357,
    type: "single_choice",
    question: "下列关于ROBOGUIDE搬运仿真技术的说法正确的是（ ）。",
    options: {
      A: "模型的迁移",
      B: "模型的隐藏与显示",
      C: "物理碰撞引擎",
      D: "模型的形变"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 358,
    type: "single_choice",
    question: "下列选项中不属于PART模型属性设置窗口的是（ ）。",
    options: {
      A: "线框显示",
      B: "模型尺寸",
      C: "模型质量",
      D: "仿真条件"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 359,
    type: "single_choice",
    question: "仿真条件PART SIMULATION中的延迟时间允许设置的最大值是（ ）。",
    options: {
      A: "9999.99S",
      B: "10000S",
      C: "1000S",
      D: "无限制"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 360,
    type: "single_choice",
    question: "真实的示教器中不包含下列哪种指令（ ）。",
    options: {
      A: "WAIT指令",
      B: "/O指令",
      C: "码垛指令",
      D: "PICKUP指令"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 361,
    type: "single_choice",
    question: "仿真环境中对于多个工具的说法描述正确的是（ ）。",
    options: {
      A: "工具坐标系相同",
      B: "通过AI/AO控制信号进行切换",
      C: "模块的属性不同",
      D: "通过运行不同的仿真程序进行切换"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 362,
    type: "single_choice",
    question: "程序校准功能的工作原理是（ ）",
    options: {
      A: "偏移工具坐标系",
      B: "更新记录点数据",
      C: "更新关节坐标数据",
      D: "偏移用户坐标系"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 363,
    type: "single_choice",
    question: "关于PART模型下列说法不正确的是（ ）",
    options: {
      A: "模拟工件",
      B: "可加载到载体模型上",
      C: "模型下方有托板",
      D: "只有立方体、圆柱体和球体"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 364,
    type: "single_choice",
    question: "以下关于仿真机器人工作站的说法有误的是（ ）",
    options: {
      A: "仿真和离线编程的平台",
      B: "机器人型号可任意选择",
      C: "采用模型进行搭建",
      D: "尽可能的还原真实场景"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 365,
    type: "single_choice",
    question: "一个虚拟电机至少应该有几部分模型组成（ ）",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 366,
    type: "single_choice",
    question: "虚拟电机的运动轴不可以采用什么控制（ ）",
    options: {
      A: "机器人伺服控制",
      B: "外部控制器伺服控制",
      C: "机器人IO控制",
      D: "仿真指令控制"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 367,
    type: "single_choice",
    question: "下列说法中关于仿真程序的说法错误的是（ ）。",
    options: {
      A: "虚拟示教可执行全部指令",
      B: "虚拟指令可作用于仿真效果",
      C: "由仿真程序编辑器创建",
      D: "可以转化为TP程序"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 368,
    type: "single_choice",
    question: "PICKUP指令中的WITH设置项对应的模块是（ ）。",
    options: {
      A: "PART模块",
      B: "FIXTURE模块",
      C: "工具模块",
      D: "MACHINE模块"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 369,
    type: "single_choice",
    question: "下列关于仿真运行的说法错误的是（ ）。",
    options: {
      A: "可运行仿真程序",
      B: "只能运行仿真程序",
      C: "可运行TP程序",
      D: "展示仿真的效果"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 370,
    type: "single_choice",
    question: "下列属于仿真指令的是（ ）",
    options: {
      A: "WAIT指令",
      B: "I/O指令",
      C: "码垛指令",
      D: "DROP指令"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 371,
    type: "single_choice",
    question: "DROP指令中的ON设置项对应的模块是（ ）。",
    options: {
      A: "PART模块",
      B: "FIXTURE模块",
      C: "工具模块",
      D: "MACHINE模块"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 372,
    type: "single_choice",
    question: "建立一个单次工件搬运的仿真，如果运行总时间为20秒，那么设置[Allowpart to be picked]的延迟时间应该是（ ）。",
    options: {
      A: "小于20秒",
      B: "等于20秒",
      C: "大于20秒",
      D: "任意"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 373,
    type: "single_choice",
    question: "一下条件中哪种不是模型被抓取时需要满足的条件（ ）。",
    options: {
      A: "PART模型",
      B: "依附于载体",
      C: "设置了仿真允许条件",
      D: "设置了重量"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 374,
    type: "single_choice",
    question: "下面关于ROBOGUIDE搬运仿真技术的解释合理的是（ ）。",
    options: {
      A: "模型的转移",
      B: "模型的隐藏于显示",
      C: "物理的碰撞引擎",
      D: "模型的变化"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 375,
    type: "single_choice",
    question: "以下指令中，属于仿真指令的是（ ）。",
    options: {
      A: "IF指令",
      B: "I/O指令",
      C: "跳转指令",
      D: "DROP指令"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 376,
    type: "single_choice",
    question: "虚拟电机的运动轴模型上添加有PART模型，下列说法正确额是（ ）。",
    options: {
      A: "可以隐藏，但不会影响仿真效果",
      B: "可以隐藏，但会影响仿真效果",
      C: "可设置成运动学",
      D: "不可以隐藏，但会影响仿真效果"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 377,
    type: "single_choice",
    question: "位于工具架上待拾取的末端执行工具模型应该是哪种模块下的模型（ ）。",
    options: {
      A: "FIXTURE",
      B: "PART",
      C: "TOOLING",
      D: "MACHINE"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 378,
    type: "single_choice",
    question: "采用模型替代法创建的末端执行工具，如何实现工具的动作（ ）。",
    options: {
      A: "IO控制",
      B: "仿真指令控制",
      C: "伺服控制",
      D: "TP程序控制"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 379,
    type: "single_choice",
    question: "下列关于MACHINE模组的第二层级的描述错误的是（ ）。",
    options: {
      A: "可以作为固定件",
      B: "可以附加PART模型",
      C: "必须作为运动件",
      D: "必须作为运动件"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 380,
    type: "single_choice",
    question: "下列哪种模型不是PART模型的载体（ ）",
    options: {
      A: "FIXTURE",
      B: "TOOLING",
      C: "MACHINE",
      D: "OBSTACLE"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 381,
    type: "single_choice",
    question: "对于多个并列工具的说法正确的是（ ）",
    options: {
      A: "工具坐标系相同",
      B: "通过运行不同的仿真程序进行切换",
      C: "模型的属性不同",
      D: "通过IO控制信号进行切换"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 382,
    type: "single_choice",
    question: "如果一个夹爪工具的常态为张开，要设置它的闭合态，应该选择（ ）。",
    options: {
      A: "Static Tool",
      B: "Material Handling-Vaccuum",
      C: "Material Handling-Clamp",
      D: "Bin Picking"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 383,
    type: "single_choice",
    question: "对于MACHINE模组第一级固定部分的说法正确的是（ ）。",
    options: {
      A: "可以隐藏，不会影响仿真效果",
      B: "将要运动的PART添加到此",
      C: "也可设置成运动学",
      D: "下一层级只能允许存在一个模块"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 384,
    type: "single_choice",
    question: "虚拟电机的运动轴模型上添加有PART模型，下列说法正确的是（ ）。",
    options: {
      A: "可以隐藏，不会影响仿真效果",
      B: "将要运动的PART添加到此",
      C: "也可设置成运动学",
      D: "下一层级只能允许存在一个模块"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 385,
    type: "single_choice",
    question: "以下不可以用于虚拟电机IO控制的信号是（ ）。",
    options: {
      A: "机器人信号RO/RI",
      B: "数字信号DO/DI",
      C: "组信号GO/GI",
      D: "模拟量信号AO/AI"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 386,
    type: "single_choice",
    question: "若夹具的常态为打开，想要设置其闭合状态，需选择（ ）。",
    options: {
      A: "BinPicking",
      B: "Static",
      C: "MaterialHanding-Vaccuum",
      D: "MaterialHanding-Clamp"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 387,
    type: "single_choice",
    question: "关于仿真运行时的说法，以下正确的是（ ）。",
    options: {
      A: "可运行仿真程序",
      B: "只能运行仿真程序",
      C: "可运行TP程序",
      D: "展示仿真的效果"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 388,
    type: "single_choice",
    question: "DROP指令中的ON设置项对应额模块是（ ）。",
    options: {
      A: "PART模块",
      B: "FIXTURE模块",
      C: "工具模块",
      D: "MACHINE模块"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 389,
    type: "single_choice",
    question: "下列不能用于虚拟电机IO控制的信号是（ ）。",
    options: {
      A: "DI/DO",
      B: "RI/RO",
      C: "AI/AO",
      D: "GI/GO"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 390,
    type: "single_choice",
    question: "如果让夹爪工具去拾取工件，打开载体模型属性设置，点击[MoveTo]使工具到达拾取点，其位置和姿态由什么决定（ ）。",
    options: {
      A: "工具坐标系的原点位置和各轴方向",
      B: "工具模型上添加的PART模型的位置和方向",
      C: "按形状自动契合",
      D: "模型的坐标系原点和各轴方向"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 391,
    type: "single_choice",
    question: "仿真指令中选择目标载体除了FIXTURE外，还可以有哪种选择（ ）。",
    options: {
      A: "OBSTACLE",
      B: "MACHINE",
      C: "PART",
      D: "CABLE"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 392,
    type: "single_choice",
    question: "\"CAD-TO-PATH\"功能是基于下列哪种模型的编程方式（ ）。",
    options: {
      A: "FIXTURE",
      B: "MACHINE",
      C: "PART",
      D: "OBSTACLE"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 393,
    type: "single_choice",
    question: "关于\"CAD-TO-PATH\"功能下列说法错误的是（ ）。",
    options: {
      A: "可在工件模型的表面绘制直线、多段线和样条曲线",
      B: "可识别工件模型表面的数字信息",
      C: "机器人根据工件的形状调节姿态",
      D: "无法识别工件的轮廓信息"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 394,
    type: "single_choice",
    question: "\"EdgeLine\"是PART模型画线的一种方式，下列说法中错误的是（ ）。",
    options: {
      A: "整段线必须处于同一平面内",
      B: "识别工件模型的边缘",
      C: "可检测出直线与弧线",
      D: "定义边缘线的任意局部"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 395,
    type: "single_choice",
    question: "下列哪种画线方式支持模型表面内部的形状契合（ ）。",
    options: {
      A: "Freehand Line",
      B: "Curve",
      C: "Edge Line",
      D: "Closed Loop"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 396,
    type: "single_choice",
    question: "如果要拾取一个工件模型的完整轮廓，应该使用哪种画线方式（ ）。",
    options: {
      A: "Freehand Line",
      B: "Curve",
      C: "Edge Line",
      D: "Closed Loop"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 397,
    type: "single_choice",
    question: "ROBOGUIDE中不含有哪种样式的工程轨迹（ ）。",
    options: {
      A: "X型",
      B: "Y型",
      C: "Z型",
      D: "矩形"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 398,
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
    id: 399,
    type: "single_choice",
    question: "工程轨迹中哪个方向表示轨迹重复振动的方向（ ）。",
    options: {
      A: "X",
      B: "Y",
      C: "Z",
      D: "W"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 400,
    type: "single_choice",
    question: "在工程轨迹的设置项目中\"IndexSpacing\"中的数值越小表示（ ）。",
    options: {
      A: "往返路线的振幅越小",
      B: "整个轨迹的起伏深度越小",
      C: "往返路线的密度越高",
      D: "往返路线的密度越低"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 401,
    type: "single_choice",
    question: "以下不适合使用示教编程的是（ ）",
    options: {
      A: "货物码垛",
      B: "车架电焊",
      C: "轮廓去毛刺",
      D: "零件装配"
    },
    answer: "C",
    category: "机器人程序编程"
  },
  {
    id: 402,
    type: "single_choice",
    question: "若想要拾取一个工件模型的完整轮廓，应该使用的画线方式是（ ）。",
    options: {
      A: "Curve",
      B: "Freehand Line",
      C: "Edge Line",
      D: "Closed Loop"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 403,
    type: "single_choice",
    question: "用于直线导轨的软件\"ExtendedAxisControl\"的软件代号是（ ）。",
    options: {
      A: "H854",
      B: "J518",
      C: "J686",
      D: "H896"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 404,
    type: "single_choice",
    question: "在搭建变位机模组过程中，轴的控制类型应选择（ ）。",
    options: {
      A: "Servo Motor Controlled",
      B: "Device I/O Controlled",
      C: "Exterbal Servo Motion",
      D: "exterbal I/O motion"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 405,
    type: "single_choice",
    question: "\"CAD_TO_PATH\"功能是基于以下哪种模型的编程方式（ ）。",
    options: {
      A: "OBSTACLE",
      B: "FIXTURE",
      C: "MACHINE",
      D: "PART"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 406,
    type: "single_choice",
    question: "关于\"CAD_TO_PATH\"的功能，以下说法有误的是（ ）。",
    options: {
      A: "可在工件模型的表面绘制直线、多段线和样条曲线",
      B: "可识别工件模型表面的数字信息",
      C: "机器人根据工件的形状调节姿态",
      D: "无法识别工件的轮廓信息"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 407,
    type: "single_choice",
    question: "下面对EORT模型描述错误的是（ ）",
    options: {
      A: "末端执行器",
      B: "TOOLING模块",
      C: "模拟工件",
      D: "随机器人运动"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 408,
    type: "single_choice",
    question: "下面关于FIXTURE模型中说法有误的是（ ）",
    options: {
      A: "在原有的FIXTURE模型上多级链接创建",
      B: "一般可模拟工装台",
      C: "作为工件模型的载体之一",
      D: "数量上不做限制"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 409,
    type: "single_choice",
    question: "下面关于离线编程与仿真技术说法有误的是（ ）",
    options: {
      A: "融入了计算机图形学技术",
      B: "编程周期长、效率低",
      C: "轨迹可自动进行规划",
      D: "仿真运行以检验离线程序"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 410,
    type: "single_choice",
    question: "软件通过识别模型上的特征轨迹转换为程序的动作指令，下列不属于转换方式的是（ ）。",
    options: {
      A: "检测圆弧添加圆弧指令",
      B: "检测直线添加直线指令",
      C: "全部用单位直线划分添加直线指令",
      D: "全部用单位圆弧线划分添加圆弧指令"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 411,
    type: "single_choice",
    question: "在搭建变位机模组的过程中，轴的控制类型应该选择（ ）。",
    options: {
      A: "Servo Motor Controlled",
      B: "Device I/O Controlled",
      C: "External Servo Motion",
      D: "External I/O Motion"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 412,
    type: "single_choice",
    question: "关于仿真中的碰撞检测功能，下列说法错误的（ ）。",
    options: {
      A: "碰撞的两个模型全部设置了该功能，碰撞时两者同时高亮",
      B: "只有当机器人工具和手臂与他模型发生碰撞时，才会触发信号",
      C: "只有当MACHINE模组的第一级设置该功能，下面的层级才可以设置",
      D: "碰撞检测信号只有DI和RI两种"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 413,
    type: "single_choice",
    question: "关于仿真软件中参数的设定，下列为设置参数值得为（ ）。",
    options: {
      A: "Enter gear Ratio",
      B: "Extended axis type",
      C: "Master Position Setting",
      D: "Enter Amplifier Number"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 414,
    type: "single_choice",
    question: "选中点动机器人时六根轴处都会出现一绿色的箭头，可以用鼠标拖动箭头来调整对应的轴的转动。当绿色的箭头变为红色时，表示该轴（ ）。",
    options: {
      A: "超出机器人运动范围",
      B: "机器人负载过大",
      C: "机器人位置报错",
      D: "关节轴高温报警"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 415,
    type: "single_choice",
    question: "虚拟示教器最右侧POSN面板最上面显示该机器人选中的Group，下面是机器人的位置信息，其中Joint是机器人（ ）。",
    options: {
      A: "六根轴的位置",
      B: "世界坐标系下机器人TCP的位置",
      C: "用户坐标系下机器人TCP的位置",
      D: "当前位置"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 416,
    type: "single_choice",
    question: "虚拟示教器最右侧POSN面板最上面显示该机器人选中的Group，下面是机器人的位置信息，其中X、Y、Z是机器人（ ）。",
    options: {
      A: "六根轴的位置",
      B: "世界坐标系下机器人TCP的位置",
      C: "用户坐标系下机器人TCP的位置",
      D: "当前位置"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 417,
    type: "single_choice",
    question: "虚拟示教器最右侧POSN面板最上面显示该机器人选中的Group，下面是机器人的位置信息，其中USER是机器人（ ）。",
    options: {
      A: "六根轴的位置",
      B: "世界坐标系下机器人TCP的位置",
      C: "用户坐标系下机器人TCP的位置",
      D: "当前位置"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 418,
    type: "single_choice",
    question: "属性面板上一些信息与Fixture的信息相同，其中显示机器人的运动范围的是（ ）。",
    options: {
      A: "Show Work Envelop",
      B: "Radius",
      C: "Teach Tool Visible",
      D: "Serialize Robot"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 419,
    type: "single_choice",
    question: "如果想在Relative菜单中直接输入工业机器人的角度信息，需要将选项选择为（ ）。",
    options: {
      A: "TOOL",
      B: "Joint",
      C: "X.Y.Z",
      D: "USER"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 420,
    type: "single_choice",
    question: "改变模型的位置，一种方法是用鼠标直接拖曳，另一种方法是（ ）。",
    options: {
      A: "直接修改其坐标参数",
      B: "使用自动排版",
      C: "直接滚动滚轮",
      D: "同时按住左右键，并前后移动"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 421,
    type: "single_choice",
    question: "创建被抓取和摆放的Part仿真需要定义抓取Fixture上的Part（ ）。",
    options: {
      A: "高度",
      B: "大小",
      C: "方向",
      D: "参数"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 422,
    type: "single_choice",
    question: "以下出现哪种情况机器人需要做零点标定（ ）。",
    options: {
      A: "急停被按下后",
      B: "机器人碰撞后",
      C: "电池更换后",
      D: "断电重启后"
    },
    answer: "C",
    category: "机器人维护保养"
  },
  {
    id: 423,
    type: "single_choice",
    question: "当机器人工具是笔形夹具时，离线程序下载运行时不必考虑的是（ ）。",
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
    id: 424,
    type: "single_choice",
    question: "零点丢失后，若不进行零点标定，不会出现的状况是（ ）。",
    options: {
      A: "不能沿编程设定的点运行",
      B: "只能单轴操作机器人动作",
      C: "不能在世界坐标系下操控机器人移动",
      D: "软件限位开关关闭"
    },
    answer: "D",
    category: "机器人维护保养"
  },
  {
    id: 425,
    type: "single_choice",
    question: "若机器人需要进行零点复归操作，会表现为下列哪种情况（ ）。",
    options: {
      A: "指示灯HOLD常亮",
      B: "异常指示灯FAULT常亮",
      C: "有一个伺服不能正常操作，且无法使用RESET键复位",
      D: "只能以关节坐标系移动"
    },
    answer: "D",
    category: "机器人维护保养"
  },
  {
    id: 426,
    type: "single_choice",
    question: "消除SRVO_062 BZAL报警复位后，必须要完成的操作是（ ）。",
    options: {
      A: "重新上载软件操作",
      B: "机器人零点复归操作",
      C: "关机重启操作",
      D: "消除SRVO-075"
    },
    answer: "B",
    category: "机器人维护保养"
  },
  {
    id: 427,
    type: "single_choice",
    question: "如果第六轴的限制设置不正确会导致（ ）",
    options: {
      A: "损坏机械臂前端的工具、线缆和软管",
      B: "机器人会剧烈停止或抖动",
      C: "超行程开关将会引发机器人倾斜或摔倒",
      D: "机器人会出现其他错误"
    },
    answer: "A",
    category: "机器人安全配置"
  },
  {
    id: 428,
    type: "single_choice",
    question: "想要修改组件的名称和在空间中的位置，需要选择（ ）选项。",
    options: {
      A: "Component",
      B: "General",
      C: "Struct",
      D: "scal"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 429,
    type: "single_choice",
    question: "控制机器人执行程序时的运动速度选项为（ ）。",
    options: {
      A: "Close Hand",
      B: "Hide Jog Coordinates Quick Bar",
      C: "Hide Gen Override Quick Bar",
      D: "Hide Work Envelope"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 430,
    type: "single_choice",
    question: "显示工业机器人运动范围的选项为（ ）",
    options: {
      A: "Close Hand",
      B: "Hide Jog Coordinates Quick Bar",
      C: "Hide Gen Override Quick Bar",
      D: "Hide Work Envelope"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 431,
    type: "single_choice",
    question: "提高ROBOGUIDE运行速度的方法，以下叙述错误的是（ ）。",
    options: {
      A: "关掉Collect TCP Trace可以减小CPU的占用率",
      B: "在导入大型igs格式的模型文件时尽量在三维软件中先做些处理减小文件大小，可以略去一些对仿真没有影响的部件。",
      C: "在仿真时尽量关掉不需要的窗口如关掉ProgramTeach和Profiler窗口能略微提高性能。",
      D: "在仿真时，可以打开多任务窗口进行信息交互。"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 432,
    type: "single_choice",
    question: "轴的最大速度设置选项为（ ）",
    options: {
      A: "Upper Limit Setting",
      B: "Direction",
      C: "Motor Type Setting",
      D: "Master Position Setting"
    },
    answer: "A",
    category: "机器人配置"
  },
  {
    id: 433,
    type: "single_choice",
    question: "轴的最底速度设置选项为（ ）",
    options: {
      A: "Upper Limit Setting",
      B: "Lower Limit Setting",
      C: "Motor Type Setting",
      D: "Master Position Setting"
    },
    answer: "B",
    category: "机器人配置"
  },
  {
    id: 434,
    type: "single_choice",
    question: "在属性的Motion画面下，运动速度参数为（ ）",
    options: {
      A: "Motion Control Type",
      B: "Axis Type",
      C: "Speed",
      D: "Inputs"
    },
    answer: "C",
    category: "机器人配置"
  },
  {
    id: 435,
    type: "single_choice",
    question: "工业机器人性能参数的最小加速度时间对应的参数为（ ）。",
    options: {
      A: "Master Position Setting",
      B: "Enter Servo Off Time",
      C: "Minimum Accel Time Setting",
      D: "Select Amplifier Type"
    },
    answer: "C",
    category: "机器人配置"
  },
  {
    id: 436,
    type: "single_choice",
    question: "使用虚拟示教器进行编程时，对机器人的速度设置与真实示教器设置的方法（ ）。",
    options: {
      A: "保持一致",
      B: "不同参数",
      C: "不同设置方法",
      D: "虚拟示教器无需设置"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 437,
    type: "single_choice",
    question: "在虚拟示教器中的定位精度取决于（ ）",
    options: {
      A: "操作者的参数设置",
      B: "操作者的示教精度",
      C: "软件的算法能力",
      D: "模块的安装精度"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 438,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟在线动作的功能，机器人动作速度超过示教最高速度时，以（ ）。",
    options: {
      A: "程序给定的速度运行",
      B: "示教最高速度来限制运行",
      C: "程序出错",
      D: "示教最低速度来运行"
    },
    answer: "B",
    category: "机器人运动控制"
  },
  {
    id: 439,
    type: "single_choice",
    question: "位置等级是指机器人经过示教的位置时接近目标点的程度，设定了合适的位置等级时，可使机器人运行出与周围状况和工件相适应的轨迹，其中位置等级（ ）。",
    options: {
      A: "CNT值越小，运行轨迹越精准",
      B: "CNT值越大，运行轨迹越精确",
      C: "只与运动速度有关",
      D: "CNT值大小，与运动轨迹无关"
    },
    answer: "A",
    category: "机器人运动控制"
  },
  {
    id: 440,
    type: "single_choice",
    question: "机器人运动轨迹控制过程需通过求解（ ）而获得各个关节角的位置控制系统的设定值。",
    options: {
      A: "运动学正问题",
      B: "运动学逆问题",
      C: "动力学正问题",
      D: "动力学逆问题"
    },
    answer: "B",
    category: "机器人运动控制"
  },
  {
    id: 441,
    type: "single_choice",
    question: "（ ）是原点设置在机器人各关节中心点位，反映了该关节处各个轴相对该关节坐标系原点位置的绝对角度。",
    options: {
      A: "世界坐标系",
      B: "用户坐标系",
      C: "工具坐标系",
      D: "关节坐标系"
    },
    answer: "D",
    category: "机器人坐标系"
  },
  {
    id: 442,
    type: "single_choice",
    question: "机器人正常运行时，末端执行器工具中心点所能在空间活动范围称为（ ）。",
    options: {
      A: "灵活工作空间",
      B: "工作空间",
      C: "次工作空间",
      D: "奇异形位"
    },
    answer: "B",
    category: "机器人工作范围"
  },
  {
    id: 443,
    type: "single_choice",
    question: "ROBOGUIDE在测试分析中，以下不能达到的功能是（ ）。",
    options: {
      A: "寿命评估",
      B: "负荷评估",
      C: "运动诊断",
      D: "风险评估"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 444,
    type: "single_choice",
    question: "安装（ ）插件可在给定的节拍内，优化程序使能源消耗降到最低，也可在给定的能源消耗内，优化程序使节拍至最短。",
    options: {
      A: "寿命评估功能",
      B: "能源评估功能",
      C: "Spray Simulation",
      D: "Coordinated Motion"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 445,
    type: "single_choice",
    question: "在ROBOGUIDE中安装Line Tracking直线跟踪功能后，机器人可以（ ）工件随导轨流动而产生的位移（ ）。",
    options: {
      A: "自动标定",
      B: "自动追踪",
      C: "自动补偿",
      D: "自动跟随"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 446,
    type: "single_choice",
    question: "安装CoordinatedMotion协调运动软件时，机器人本体轴与外部附加轴做协调运动，使机器人处于合适的焊接姿态来提高焊接（ ）。",
    options: {
      A: "质量",
      B: "效率",
      C: "强度",
      D: "范围"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 447,
    type: "single_choice",
    question: "（ ）插件可以根据实际情况建立喷枪模型，然后在Roboguide中模拟喷涂效果，查看膜厚的分布情况。",
    options: {
      A: "Coordinated Motion",
      B: "Axis Type",
      C: "Spray Simulation",
      D: "Minimum Accel Time Setting"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 448,
    type: "single_choice",
    question: "（ ）插件可在给定的节拍内，优化程序使减速机寿命最长，也可在给定的寿命内，优化程序使节拍最短。",
    options: {
      A: "能源评估功能",
      B: "寿命评估功能",
      C: "Spray Simulation",
      D: "Coordinated Motion"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 449,
    type: "single_choice",
    question: "在软件中进行程序的仿真运行相对于（ ），观察结果是否符合预期和检测程序的可行性。",
    options: {
      A: "仿真场景的测试",
      B: "真实机器人运行程序",
      C: "仿真场景得到的结果",
      D: "仿真场景的虚拟运行"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 450,
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
    id: 451,
    type: "single_choice",
    question: "在仿真运行无误时，离线程序小范围修改甚至无需修改直接导出到存储设备，并下载到真实的机器人中，机器人点位需要（ ）。",
    options: {
      A: "重新示教",
      B: "无需示教",
      C: "看虚拟场景与现实场景是否符合来决定",
      D: "无法确定"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 452,
    type: "single_choice",
    question: "在机器人的安装方式为倾斜安装时，根据倾斜角度分析需要设置的参数为（ ）。",
    options: {
      A: "MOUNT ANGLE SETTING",
      B: "Axis Type",
      C: "Speed",
      D: "Inputs"
    },
    answer: "A",
    category: "机器人安装配置"
  },
  {
    id: 453,
    type: "single_choice",
    question: "该软件支持机器人系统布局设计和动作模拟仿真，以及一系列的检测与分析，以下叙述错的是（ ）。",
    options: {
      A: "可进行机器人干涉性、可达性的分析",
      B: "可进行系统的节拍估算",
      C: "可进行自动生成机器人的离线程序",
      D: "可进行系统安全性的评估"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 454,
    type: "single_choice",
    question: "当机器人在T1模式下运行时，其最大速度为（ ）",
    options: {
      A: "250mm/s",
      B: "200mm/s",
      C: "500mm/s",
      D: "150mm/s"
    },
    answer: "A",
    category: "机器人运动控制"
  },
  {
    id: 455,
    type: "single_choice",
    question: "在设置机器人与变位机协调功能时，同一轴使用的三个校准点的点位之间的差值（ ）。",
    options: {
      A: "任意",
      B: "必须大于60°",
      C: "必须大于30°",
      D: "不能大于180°"
    },
    answer: "C",
    category: "变位机系统"
  },
  {
    id: 456,
    type: "single_choice",
    question: "当位置寄存器记录数据后，显示结果是（ ）",
    options: {
      A: "YES",
      B: "R",
      C: "OK",
      D: "*"
    },
    answer: "B",
    category: "机器人程序编程"
  },
  {
    id: 457,
    type: "single_choice",
    question: "下列关于职业素养的叙述，不正确的一项是（ ）",
    options: {
      A: "职业素养是一个人在职业过程中表现出来的综合品质",
      B: "职业素养主要是由先天素养决定的，与后天努力关系不大",
      C: "资质、知识、行为和技能是显性职业素养，人力资源管理中比较重视",
      D: "职业道德、职业意识、职业态度隐性职业素养更深刻影响着员工发展"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 458,
    type: "single_choice",
    question: "关于价值观的说法，正确的是（ ）",
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
    id: 459,
    type: "single_choice",
    question: "下列关于职业生涯规划的叙述，不正确的一项是（ ）。",
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
    id: 460,
    type: "single_choice",
    question: "中国人评价一个人的最核心尺度是（ ）",
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
    id: 461,
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
    id: 462,
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
    id: 463,
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
    id: 464,
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
    id: 465,
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
    id: 466,
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
    id: 467,
    type: "single_choice",
    question: "下列选项属于正确的求职择业心理的是（ ）",
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
    id: 468,
    type: "single_choice",
    question: "由员工和管理层组成的一个共同体，能合理利用每一个成员的知识和技能，协同工作，解决问题，达到共同的目标，这个共同体被称之为（ ）。",
    options: {
      A: "群体",
      B: "团队",
      C: "公司",
      D: "社会"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 469,
    type: "single_choice",
    question: "下列选项中是职业匹配的非关键要素的是（ ）",
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
    id: 470,
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
    id: 471,
    type: "single_choice",
    question: "（ ）是职业人最为重要的职业素质之一，是从业人员在生产活动中必须遵循的行为准则。",
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
    id: 472,
    type: "single_choice",
    question: "（ ）沟通的关键技巧是。",
    options: {
      A: "随意的表态",
      B: "可以随时打断对方的谈话，帮助对方分析问题",
      C: "倾听和尊重对方",
      D: "以上描述全部错误"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 473,
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
    id: 474,
    type: "single_choice",
    question: "提升交往效果和交往质量的重要方法是（ ）",
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
    id: 475,
    type: "single_choice",
    question: "（ ）是约定俗成的大家共同遵循的行为准则。",
    options: {
      A: "社会公德",
      B: "社会责任",
      C: "社会文化",
      D: "社会价值"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 476,
    type: "single_choice",
    question: "面对不理想的工作环境，以下态度错误的是（ ）",
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
    id: 477,
    type: "single_choice",
    question: "机器人控制柜、钳台局部照明电压不得超过的电压是（ ）。",
    options: {
      A: "36V",
      B: "220V",
      C: "24V",
      D: "12V"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 478,
    type: "single_choice",
    question: "下面哪项作业不需要办理工作许可（ ）",
    options: {
      A: "高空作业",
      B: "煤磨车间焊接作业",
      C: "起重作业",
      D: "密闭空间作业"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 479,
    type: "single_choice",
    question: "安全带的主要作用是（ ）",
    options: {
      A: "阻止坠落",
      B: "预防坠落",
      C: "协助安全",
      D: "辅助生产"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 480,
    type: "single_choice",
    question: "任何电气设备在未验明无电之前，一律认为（ ）。",
    options: {
      A: "有电",
      B: "无电",
      C: "可能有电",
      D: "也可能无电"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 481,
    type: "single_choice",
    question: "我国交流电的频率是（ ）",
    options: {
      A: "50HZ",
      B: "36HZ",
      C: "220HZ",
      D: "110HZ"
    },
    answer: "A",
    category: "电气基础"
  },
  {
    id: 482,
    type: "single_choice",
    question: "在劳动生产过程中违反生产经营单位制定的各种规章制度，包括违反工艺技术、安全管理等方面的规定，均属于（ ）。",
    options: {
      A: "违反劳动纪律",
      B: "违章操作",
      C: "违反法律法规",
      D: "违反道德品质"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 483,
    type: "single_choice",
    question: "下列情形中属于工伤范围的是（ ）",
    options: {
      A: "因醉酒导致伤亡的情形",
      B: "自残或者自杀的情形",
      C: "因犯罪或者违反治安管理伤亡的情形",
      D: "工作时间前后在工作场所内，从事与工作有关的收尾性工作受到事故伤害的"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 484,
    type: "single_choice",
    question: "电气设备在发生火灾时，在未断电的情况下，不能使用（ ）进行灭火。",
    options: {
      A: "干粉灭火器",
      B: "化学泡沫灭火器",
      C: "二氧化碳灭火器",
      D: "压缩气体灭火器"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 485,
    type: "single_choice",
    question: "下列部署以头部防护用品的是（ ）",
    options: {
      A: "耳罩",
      B: "电绝缘安全帽",
      C: "方案安全帽",
      D: "防护面罩"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 486,
    type: "single_choice",
    question: "在安全生产管理中，危险度通常由（ ）决定。",
    options: {
      A: "事故发生的可能性",
      B: "事故后果的严重性",
      C: "事故发生的可能性和事故后果的严重性",
      D: "事故发生的时间节点"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 487,
    type: "single_choice",
    question: "被电击的人能否获救，关键在于（ ）",
    options: {
      A: "触电的方式",
      B: "人体电阻大小",
      C: "触电电压高低",
      D: "能否尽快脱离电源和施行紧急救护"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 488,
    type: "single_choice",
    question: "下列关于职业素养的叙述，不正确的一项是（ ）",
    options: {
      A: "职业素养是一个人在职业过程中表现出来的综合品质",
      B: "职业素养主要是由先天素养决定的，与后天努力关系不大",
      C: "资质、知识、行为和技能是显性职业素养，人力资源管理中比较重视。",
      D: "职业道德、职业意识、职业态度隐形职业素养更深刻影响着员工发展"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 489,
    type: "single_choice",
    question: "下列关于职业生涯规划的叙述，不正确的是（ ）",
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
    id: 490,
    type: "single_choice",
    question: "（ ）是个人根据自己的意愿在众多的职业中做出最终选择的过程。",
    options: {
      A: "职业意识",
      B: "职业抉择",
      C: "职业生涯规划",
      D: "素质准备"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 491,
    type: "single_choice",
    question: "（ ）是职场的主要规则，也是职场运行的核心动力。",
    options: {
      A: "职业意识",
      B: "职业抉择",
      C: "职业生涯规划",
      D: "竞争"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 492,
    type: "single_choice",
    question: "在职业分析中，（ ）可以作为基础准则。",
    options: {
      A: "职业测验",
      B: "职业评估",
      C: "职业调查",
      D: "以上都不正确"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 493,
    type: "single_choice",
    question: "在炽热高温场所从事机器人设备安装调试或检修工作时，应（ ）",
    options: {
      A: "戴工作帽穿防辐射服",
      B: "有通风降温等措施",
      C: "戴护目眼镜",
      D: "穿防辐射服"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 494,
    type: "single_choice",
    question: "利用二氧化碳灭火器灭火时在注意安全，根据灭火器使用知识，当空气中二氧化碳浓度达到10%时，会使人（ ）",
    options: {
      A: "中毒",
      B: "窒息",
      C: "头晕",
      D: "呼吸困难"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 495,
    type: "single_choice",
    question: "触电者无呼吸和心跳时，首先是通畅气道，然后进行（ ）抢救。",
    options: {
      A: "口对口（鼻）人工呼吸法",
      B: "胸外心脏按压法",
      C: "胸外心脏按压法和口对口（鼻）人工呼吸法",
      D: "注射强心针法"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 496,
    type: "single_choice",
    question: "发生人身触电时会同时发生二次伤害的地方应选择动作电流小于（ ）毫安，动作时间不大于0.1秒的漏电开关。",
    options: {
      A: "50",
      B: "30",
      C: "15",
      D: "6"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 497,
    type: "single_choice",
    question: "机器人工作站中电气设备起火时应使用什么类型的灭火器（ ）。",
    options: {
      A: "二氧化碳",
      B: "水",
      C: "泡沫",
      D: "以上都对"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 498,
    type: "single_choice",
    question: "以下说法错误的是（ ）。",
    options: {
      A: "熔断（保险）丝熔断后。可以使用其它金属丝代替熔断（保险）丝。",
      B: "发现用电设备因电器故障或漏电起火时，要立即切断电源，在未切断电源前，禁止使用水或酸、碱灭火器灭火。",
      C: "对用电设备送电或断电完毕后，要及时关好配电箱的箱门。",
      D: "电线损坏或断线落地时，不要靠近，应及时停电，找电工处理"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 499,
    type: "single_choice",
    question: "人电击后危及生命的电流称为（ ）",
    options: {
      A: "感知电流",
      B: "持续电流",
      C: "致命电流",
      D: "摆脱电流"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 500,
    type: "single_choice",
    question: "机器人设备事故的预防，错误的做法是（ ）",
    options: {
      A: "机器人设备布线使用专用电线和安装熔断器",
      B: "使用和示教机器人时人不得离开",
      C: "机器人设备示教器乱扔，电线乱拉",
      D: "对规定使用接地的机器人控制柜做好接地保护"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 501,
    type: "single_choice",
    question: "机械暗安装维护是机器人设备调试之一，在其过程中，机械设备、工具或工件的非正常选择和使用、人的违章作业等都可能导致机械伤害。下列伤害类型中，不属于机械伤害的是（ ）。",
    options: {
      A: "锤子击伤",
      B: "高空坠落",
      C: "机械手打伤",
      D: "夹具打崩伤人"
    },
    answer: "B",
    category: "安全操作"
  },
  
  // 判断题部分 (502-656)
  {
    id: 502,
    type: "true_false",
    question: "RO[1]为机器人的专用I/O信号。",
    answer: "true",
    category: "机器人I/O系统"
  },
  {
    id: 503,
    type: "true_false",
    question: "机器人的I/O模块种类为EthernetIP，那么它的机架应该设置为90。",
    answer: "false",
    category: "机器人通讯配置"
  },
  {
    id: 504,
    type: "true_false",
    question: "发那科机器人组IO信号属于通用信号。",
    answer: "true",
    category: "机器人I/O系统"
  },
  {
    id: 505,
    type: "true_false",
    question: "发那科机器人外围设备（UOP）属于专用IO信号。",
    answer: "true",
    category: "机器人专用信号"
  },
  {
    id: 506,
    type: "true_false",
    question: "配置或者修改了该机器人的输入输出信号，需要关机重启后才能生效。",
    answer: "true",
    category: "机器人I/O配置"
  },
  {
    id: 507,
    type: "true_false",
    question: "使用处理IO印刷电路板，IO连接设备连接单元时，按连接额顺序为插槽1、2、3、3、3。",
    answer: "true",
    category: "机器人I/O配置"
  },
  {
    id: 508,
    type: "true_false",
    question: "使用通讯模块配置信号时该模块的站号即为插槽值。",
    answer: "true",
    category: "机器人通讯配置"
  },
  {
    id: 509,
    type: "true_false",
    question: "机器人外围设备（UOP）信号可同时与单个数字信号关联。",
    answer: "false",
    category: "机器人专用信号"
  },
  {
    id: 510,
    type: "true_false",
    question: "配置机器人数字信号与外围设备信号关联时其对应插槽为87。",
    answer: "false",
    category: "机器人I/O配置"
  },
  {
    id: 511,
    type: "true_false",
    question: "机器人IO信号中外围设备（UOP）为通用信号。",
    answer: "false",
    category: "机器人专用信号"
  },
  {
    id: 512,
    type: "true_false",
    question: "发那科机器人设置防干涉区域后就是非常安全的。",
    answer: "false",
    category: "机器人安全配置"
  },
  {
    id: 513,
    type: "true_false",
    question: "机器人防干扰区域可任意设置。",
    answer: "false",
    category: "机器人安全配置"
  },
  {
    id: 514,
    type: "true_false",
    question: "机器人运行时可任意设置运行速度，无需考虑其他区域因素。",
    answer: "false",
    category: "机器人运动控制"
  },
  {
    id: 515,
    type: "true_false",
    question: "当机器人防干扰区域设置完成后，机器人至干扰区域时，机器人会自动停止。",
    answer: "true",
    category: "机器人安全配置"
  },
  {
    id: 516,
    type: "true_false",
    question: "机器人进入干扰区域后，只有当机器人移出此区域，解除停止状态后方可重新开始操作。",
    answer: "true",
    category: "机器人安全配置"
  },
  {
    id: 517,
    type: "true_false",
    question: "当机器人工具末端承载超过其最大负载时，对机器人精度无影响。",
    answer: "false",
    category: "机器人技术参数"
  },
  {
    id: 518,
    type: "true_false",
    question: "机器人使用编码器为绝对值脉冲编码器。",
    answer: "true",
    category: "机器人技术参数"
  },
  {
    id: 519,
    type: "true_false",
    question: "设备上机器人实际工作范围受机器人运动路径、干扰区域等因素影响。",
    answer: "true",
    category: "机器人工作范围"
  },
  {
    id: 520,
    type: "true_false",
    question: "200id/4s机器人可支持倒吊安装、地面安装、倾斜安装。",
    answer: "true",
    category: "机器人安装配置"
  },
  {
    id: 521,
    type: "true_false",
    question: "可以带着手套进行示教器的操作。",
    answer: "false",
    category: "示教器操作"
  },
  {
    id: 522,
    type: "true_false",
    question: "调高示教器的亮度不会对示教器有影响。",
    answer: "false",
    category: "示教器操作"
  },
  {
    id: 523,
    type: "true_false",
    question: "示教盒的背景颜色可以更改为任意颜色。",
    answer: "true",
    category: "示教器操作"
  },
  {
    id: 524,
    type: "true_false",
    question: "示教盒的亮度调高，会导致示教盒的发热增加，不建议长时间开启高亮度模式。",
    answer: "false",
    category: "示教器操作"
  },
  {
    id: 525,
    type: "true_false",
    question: "示教盒在手动模式下可以进行外部启动机器人。",
    answer: "false",
    category: "示教器操作"
  },
  {
    id: 526,
    type: "true_false",
    question: "示教盒使用完成要放置在规定位置，不能随意摆放。",
    answer: "true",
    category: "示教器操作"
  },
  {
    id: 527,
    type: "true_false",
    question: "使用示教盒操控机器人移动时，使能需一直保持ON状态。",
    answer: "true",
    category: "示教器操作"
  },
  {
    id: 528,
    type: "true_false",
    question: "机器人在零点位置，可直接通过示教盒操控机器人做线性移动。",
    answer: "false",
    category: "示教器操作"
  },
  {
    id: 529,
    type: "true_false",
    question: "远程控制机器人机器人时，通过示教盒上的FWD键也可执行程序。",
    answer: "false",
    category: "机器人控制模式"
  },
  {
    id: 530,
    type: "true_false",
    question: "在手动模式下，使操作员借助于示教盒对机器人运动具有唯一的控制权。",
    answer: "true",
    category: "示教器操作"
  },
  {
    id: 531,
    type: "true_false",
    question: "示教盒的预定义按键可以随意定义系统功能。",
    answer: "false",
    category: "示教器配置"
  },
  {
    id: 532,
    type: "true_false",
    question: "示教盒的预定义键可以配置焊接功能键。",
    answer: "true",
    category: "示教器配置"
  },
  {
    id: 533,
    type: "true_false",
    question: "示教盒的预定义键可以配置搬运工具功能键。",
    answer: "true",
    category: "示教器配置"
  },
  {
    id: 534,
    type: "true_false",
    question: "示教盒的预定义键配置需要相对应的机器人包含该功能包。",
    answer: "true",
    category: "示教器配置"
  },
  {
    id: 535,
    type: "true_false",
    question: "示教盒的预定义键不可以配置外部轴的点动功能。",
    answer: "false",
    category: "示教器配置"
  },
  {
    id: 536,
    type: "true_false",
    question: "模块的安装可以不用固定牢靠，方便更换。",
    answer: "false",
    category: "设备模块安装"
  },
  {
    id: 537,
    type: "true_false",
    question: "模块的安装在机器人工作范围内可以随意组合摆放，体现训练任务的多样化。",
    answer: "true",
    category: "设备模块安装"
  },
  {
    id: 538,
    type: "true_false",
    question: "模块的安装与拆卸，快接线缆的插拔都应该在设备断电的情况下才可进行。",
    answer: "true",
    category: "设备模块安装"
  },
  {
    id: 539,
    type: "true_false",
    question: "模块安装完成，就可以直接使用了，无需做其他更改。",
    answer: "false",
    category: "设备模块安装"
  },
  {
    id: 540,
    type: "true_false",
    question: "模块安装完成后，我们应该检查该模块是否需要连接快速插拔线缆和气管，检查工作气压等。",
    answer: "true",
    category: "设备模块安装"
  },
  {
    id: 541,
    type: "true_false",
    question: "设备启动时应该将气路调节到最大，方便调试使用。",
    answer: "false",
    category: "设备模块调试"
  },
  {
    id: 542,
    type: "true_false",
    question: "当取出或放置伺服电机时，不可只拉着线材拖曳电机或只握住旋转轴芯。",
    answer: "true",
    category: "伺服系统"
  },
  {
    id: 543,
    type: "true_false",
    question: "EMC等级会因为安装结构或配线方式而有差异。",
    answer: "true",
    category: "设备安装"
  },
  {
    id: 544,
    type: "true_false",
    question: "打磨站在使用前，检查设备气压为0.1MPa，这时可以正常使用。",
    answer: "false",
    category: "打磨系统"
  },
  {
    id: 545,
    type: "true_false",
    question: "视觉模块的显示器传输的画面较为模糊，这时我们应该手动调整相机的焦距直至画面清晰。",
    answer: "true",
    category: "视觉系统"
  },
  {
    id: 546,
    type: "true_false",
    question: "视觉模块在使用前，应该打开视觉模块的光源并取下相机的镜头盖子。",
    answer: "true",
    category: "视觉系统"
  },
  {
    id: 547,
    type: "true_false",
    question: "焊接模块在使用前，应该检查设备的电压是否正常。",
    answer: "true",
    category: "焊接工艺"
  },
  {
    id: 548,
    type: "true_false",
    question: "变位机模块在正常使用之前需要手动回原点操作。",
    answer: "true",
    category: "变位机系统"
  },
  {
    id: 549,
    type: "true_false",
    question: "发生STO异警时，客户端可依据回授监控信号反馈的接脚状态来判断当下的异警为何。",
    answer: "true",
    category: "伺服系统"
  },
  {
    id: 550,
    type: "true_false",
    question: "按下伺服驱动器的MODE键可以切换监视模式、参数模式及自动模式。",
    answer: "false",
    category: "伺服系统"
  },
  {
    id: 551,
    type: "true_false",
    question: "在调试各模块之前应检查，设备电源电压、接地等是否正常，才可进行调试。",
    answer: "true",
    category: "设备模块调试"
  },
  {
    id: 552,
    type: "true_false",
    question: "在调试打磨、焊接、雕刻等外部设备时，调试技术员不需要做防护措施。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 553,
    type: "true_false",
    question: "在调试打磨、焊接、雕刻等外部设备时，调试技术员应该正确佩戴防护眼镜以及安全帽。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 554,
    type: "true_false",
    question: "外部轴的调试，应该将机器人的姿态回到安全位置并以低速的模式进行调试。",
    answer: "true",
    category: "机器人配置"
  },
  {
    id: 555,
    type: "true_false",
    question: "在外部设备的模块调试中，如发生紧急情况，我们应当立即按下设备上的急停按钮。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 556,
    type: "true_false",
    question: "按下伺服驱动器的SHIFT键可以在参数模式下改变群组码。",
    answer: "true",
    category: "伺服系统"
  },
  {
    id: 557,
    type: "true_false",
    question: "行走轴的原点位置说固定不变的。",
    answer: "false",
    category: "导轨系统"
  },
  {
    id: 558,
    type: "true_false",
    question: "视觉系统需要我们手动进行物体的拍照进行识别。",
    answer: "false",
    category: "视觉系统"
  },
  {
    id: 559,
    type: "true_false",
    question: "供料单元的气缸对应的工业机器人I/O信号为DI信号。",
    answer: "false",
    category: "供料系统"
  },
  {
    id: 560,
    type: "true_false",
    question: "可通过机器人的输入信号，控制气缸的推送动作。",
    answer: "false",
    category: "机器人I/O系统"
  },
  {
    id: 561,
    type: "true_false",
    question: "各检测的传感器信号对应机器人的型号为DI信号。",
    answer: "true",
    category: "传感器系统"
  },
  {
    id: 562,
    type: "true_false",
    question: "称重单元反馈信息是通过模拟量信号反馈。",
    answer: "true",
    category: "称重系统"
  },
  {
    id: 563,
    type: "true_false",
    question: "工业机器人的组信号标识为AI/AO。",
    answer: "false",
    category: "机器人I/O系统"
  },
  {
    id: 564,
    type: "true_false",
    question: "工业机器人的组信号标识为GI/GO。",
    answer: "true",
    category: "机器人I/O系统"
  },
  {
    id: 565,
    type: "true_false",
    question: "高级编程中，进行连续多行删除程序段的方法为剪切该段程序。",
    answer: "true",
    category: "机器人程序编程"
  },
  {
    id: 566,
    type: "true_false",
    question: "忽略暂停被设置为ON时，示教盒和操作面板的急停功能还是能够中断程序。",
    answer: "false",
    category: "机器人安全操作"
  },
  {
    id: 567,
    type: "true_false",
    question: "执行中的机器人程序可以被编辑。",
    answer: "false",
    category: "机器人程序编程"
  },
  {
    id: 568,
    type: "true_false",
    question: "在P1点的基础上向X正方向平移100的距离可以使用OFFSET指令进行平移。",
    answer: "true",
    category: "机器人程序编程"
  },
  {
    id: 569,
    type: "true_false",
    question: "使用偏移指令时，需预先设置好偏移条件。",
    answer: "true",
    category: "机器人程序编程"
  },
  {
    id: 570,
    type: "true_false",
    question: "码垛指令步科应用于设备搬运模块的编程使用。",
    answer: "false",
    category: "码垛编程"
  },
  {
    id: 571,
    type: "true_false",
    question: "工业机器人控制外围PLC时其输入信号对应PLC的输入信号。",
    answer: "false",
    category: "机器人通讯配置"
  },
  {
    id: 572,
    type: "true_false",
    question: "工业机器人控制外围PLC时其输出信号对应PLC的输入信号。",
    answer: "true",
    category: "机器人通讯配置"
  },
  {
    id: 573,
    type: "true_false",
    question: "使用外围设备控制机器人程序运行时需要做系统变量与CRMA15/16上数字信号的关联。",
    answer: "true",
    category: "机器人控制配置"
  },
  {
    id: 574,
    type: "true_false",
    question: "视觉传感器的拍照信号为PLC的输出信号。",
    answer: "true",
    category: "视觉系统"
  },
  {
    id: 575,
    type: "true_false",
    question: "称重传感器的模拟量信号对应的物理地址为IW64。",
    answer: "true",
    category: "称重系统"
  },
  {
    id: 576,
    type: "true_false",
    question: "视觉系统无需加密狗也可以使用。",
    answer: "false",
    category: "视觉系统"
  },
  {
    id: 577,
    type: "true_false",
    question: "RFID的检测数据可以用机器人控制。",
    answer: "true",
    category: "RFID系统"
  },
  {
    id: 578,
    type: "true_false",
    question: "RFID的读写头检测载码体时，检测距离为可调的。",
    answer: "false",
    category: "RFID系统"
  },
  {
    id: 579,
    type: "true_false",
    question: "使用RFID检测时，需预先将数据写入RFID检测系统中。",
    answer: "true",
    category: "RFID系统"
  },
  {
    id: 580,
    type: "true_false",
    question: "仓储位置都装有光电传感器，可以检测物料有无状态。",
    answer: "true",
    category: "仓储系统"
  },
  {
    id: 581,
    type: "true_false",
    question: "仓储各位置的光电传感器检测到物料时会有灯光的变化，其检测距离可调。",
    answer: "true",
    category: "仓储系统"
  },
  {
    id: 582,
    type: "true_false",
    question: "使用仓储模块时，无需与其他模块配合使用。",
    answer: "false",
    category: "仓储系统"
  },
  {
    id: 583,
    type: "true_false",
    question: "选用的西门子TP700的触摸屏，在无原程序的情况下可以下载屏内已有的程序。",
    answer: "false",
    category: "人机界面"
  },
  {
    id: 584,
    type: "true_false",
    question: "人机界面的编程，需要与PLC的变成关联起对应的变量才可使用，使用时需要建立通讯连接。",
    answer: "true",
    category: "人机界面"
  },
  {
    id: 585,
    type: "true_false",
    question: "做人机界面时，首先要确定并选择对应的人机面的型号。",
    answer: "true",
    category: "人机界面"
  },
  {
    id: 586,
    type: "true_false",
    question: "工业机器人各程序在编制时可采用多层次子程序进行简化编程。",
    answer: "true",
    category: "机器人程序编程"
  },
  {
    id: 587,
    type: "true_false",
    question: "工业机器人在编写打磨站程序时，需要保证设备供气气压正常。",
    answer: "true",
    category: "打磨系统"
  },
  {
    id: 588,
    type: "true_false",
    question: "在打磨程序的程序编制中，我们采用机器人的输入信号控制我们打磨头的开启和关闭。",
    answer: "false",
    category: "打磨系统"
  },
  {
    id: 589,
    type: "true_false",
    question: "在使用焊接机器人编写焊接程序时，执行程序前必须设好焊接参数。",
    answer: "true",
    category: "焊接编程"
  },
  {
    id: 590,
    type: "true_false",
    question: "焊接开始指令和结束指令是分开独立存在的。",
    answer: "false",
    category: "焊接编程"
  },
  {
    id: 591,
    type: "true_false",
    question: "每个动作组都拥有机器人的组坐标系，且操作相互独立。",
    answer: "true",
    category: "机器人配置"
  },
  {
    id: 592,
    type: "true_false",
    question: "编写多种工艺流程的电机装配任务时快换夹具的打开和闭和采用的信号为RO。",
    answer: "true",
    category: "装配系统"
  },
  {
    id: 593,
    type: "true_false",
    question: "多工艺流程的输送线模块编制程序时，机器人可以单独控制输送线的启停。",
    answer: "false",
    category: "输送系统"
  },
  {
    id: 594,
    type: "true_false",
    question: "多工艺流程的RFID模块在编制程序时，可以使用机器人程序来控制检测信号的开启和关闭。",
    answer: "true",
    category: "RFID系统"
  },
  {
    id: 595,
    type: "true_false",
    question: "使用跳转指令编辑程序时，必须对应标签指令同时使用。",
    answer: "true",
    category: "机器人程序编程"
  },
  {
    id: 596,
    type: "true_false",
    question: "在多工艺流程的模块程序编制时，我们可以将按工艺流程来建立多个子程序进行分类编写。",
    answer: "true",
    category: "机器人程序编程"
  },
  {
    id: 597,
    type: "true_false",
    question: "在多个工艺流程的模块程序编制时，相同逻辑不同点位的程序不可以使用复制功能来进行程序复制。",
    answer: "false",
    category: "机器人程序编程"
  },
  {
    id: 598,
    type: "true_false",
    question: "在多个工艺流程的模块程序编制时，二个不同的程序同时调用时，里面的点位P[1]是同一个点。",
    answer: "false",
    category: "机器人程序编程"
  },
  {
    id: 599,
    type: "true_false",
    question: "多个工艺流程的模块程序编制时，每个单独的模块都可以用一个子程序来编写，再由主程序调用。",
    answer: "true",
    category: "机器人程序编程"
  },
  {
    id: 600,
    type: "true_false",
    question: "编辑工艺流程是，要考虑工作空间、运动路径、限制条件等条件。",
    answer: "true",
    category: "机器人程序编程"
  },
  {
    id: 601,
    type: "true_false",
    question: "为了仿真工作站模型的集中管理，可以将所有的模型全部创建在FIXTUER模块下。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 602,
    type: "true_false",
    question: "在创建PART模型后，必须将其添加到载体模型（如FIXTURE）上才能使用。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 603,
    type: "true_false",
    question: "如果在创建工程文件结束后，发现机器人型号出现差异，那么此时必须要删除整个温江并重新创建。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 604,
    type: "true_false",
    question: "软件模型库中对不同模型进行了分类整理，只能加载到对应的模块下。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 605,
    type: "true_false",
    question: "如果勾选了[Lock All Location Values]，那么模型的尺寸数据会被锁定。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 606,
    type: "true_false",
    question: "创建各个模块下的模型时，均可以用外部模型导入的方式创建。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 607,
    type: "true_false",
    question: "如果要调整PART模型的位置，直接双击模型打开属性设置窗口，调整位置数据。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 608,
    type: "true_false",
    question: "MotionPRO运动优化模块可以对TP程序进行优化，包括对节拍和路径的优化。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 609,
    type: "true_false",
    question: "为了便于仿真工作站的模型集中管理，可将任意的模型全部创建在FIXTUER模块下。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 610,
    type: "true_false",
    question: "点击工具栏中的放大镜图标，可以将视图进行缩小处理。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 611,
    type: "true_false",
    question: "如果在创建工程文件结束后，发现机器人型号错误，此时必须删除整个文件并重新创建。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 612,
    type: "true_false",
    question: "创建模块下的模型时，均可用外部模型导入的方式进行创建。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 613,
    type: "true_false",
    question: "如果要进行码垛的仿真，则应选择的仿真模块是PaintPRO。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 614,
    type: "true_false",
    question: "外部模型导入的模块决定了其本身的作用，与形状无关。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 615,
    type: "true_false",
    question: "软件实现搬运仿真的过程中将工件移动了位置。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 616,
    type: "true_false",
    question: "在仿真环境中被搬运的对象是FIXTURE模型。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 617,
    type: "true_false",
    question: "在仿真环境中示教编程不属于离线编程。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 618,
    type: "true_false",
    question: "点击虚拟示教器上的急停按钮，可迅速停止仿真机器人的运行。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 619,
    type: "true_false",
    question: "仿真程序编辑器以其快速的编程方法可完全替代虚拟示教器编程。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 620,
    type: "true_false",
    question: "仿真环境中运行程序可有效避免真实环境中的碰撞。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 621,
    type: "true_false",
    question: "程序校准过程中，用于计算偏差的基准是世界坐标系。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 622,
    type: "true_false",
    question: "仿真机器人工作站是计算机图形技术与机器人控制技术的结合体，是离线编程与仿真演示的平台。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 623,
    type: "true_false",
    question: "组建仿真工作站的四项最基本的要素是机器人模型、FIXTURE模型、工具模型和工件模型。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 624,
    type: "true_false",
    question: "软件模型库中对不同模型进行了分类整理，只能加载到对应模块下。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 625,
    type: "true_false",
    question: "圆柱体模型不支持贴图的功能。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 626,
    type: "true_false",
    question: "软件实现搬运仿真的过程中将工件移动了位置。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 627,
    type: "true_false",
    question: "虚拟示教器可运行仿真程序中的真实指令行。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 628,
    type: "true_false",
    question: "一个虚拟电机中可并列存在多个运动轴，并且可由一个或多个信号控制。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 629,
    type: "true_false",
    question: "在工具的属性设置中导入了模型并设置了新的坐标系，若对该工具坐标系执行清除还原，模型将会被删除，但工具坐标系的数据会被保留。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 630,
    type: "true_false",
    question: "机器人零点丢失后执行零点复归时，执行零点标定前，需现将机器人手动将各个关节轴移动至零刻度位置。",
    answer: "true",
    category: "机器人维护保养"
  },
  {
    id: 631,
    type: "true_false",
    question: "工程文件默认的界面中，平面格栅的中心与机器人底座平面的中心都位于界面坐标原点，此原点的位置不可更改。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 632,
    type: "true_false",
    question: "仿真运行中，通过仿真指令的使用进行工具的切换。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 633,
    type: "true_false",
    question: "在不同的载体模型上都出现了同一个PART模型，如果修改了PART模型的尺寸大小，那么整个仿真中的PART都会改变。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 634,
    type: "true_false",
    question: "工程轨迹只能在一个平面内做往返运动。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 635,
    type: "true_false",
    question: "CNT指定50时，机器人在目标位置附近不减速而马上向着下一个点开始动作。",
    answer: "true",
    category: "机器人运动控制"
  },
  {
    id: 636,
    type: "true_false",
    question: "工业机器人的驱动系统指驱动操作机动作的装置，即机器人的动力装置。",
    answer: "true",
    category: "机器人技术参数"
  },
  {
    id: 637,
    type: "true_false",
    question: "将模型上的轨迹转换成程序的过程中，如果在设置动作指令时勾选了[Indirect]，那么速度值将使用寄存器中的值。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 638,
    type: "true_false",
    question: "在进行模型画线时，轨迹上间隔竖线决定着工具的初始姿态。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 639,
    type: "true_false",
    question: "Edge Line和Closed Loop都可以捕捉模型的边缘，前者是局部，后者是完整的轮廓。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 640,
    type: "true_false",
    question: "在设置由模型画线创建的程序时，勾选[Feature Begin/End Normals]可以预览路径上的工具的始点和末点的姿态。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 641,
    type: "true_false",
    question: "机器人执行零点标定后，必须执行更新操作方可将标定结果更新到转数计数器中，否则标定未完成。",
    answer: "true",
    category: "机器人维护保养"
  },
  {
    id: 642,
    type: "true_false",
    question: "工作、职业与事业其实就是一个概念。",
    answer: "false",
    category: "职业素养"
  },
  {
    id: 643,
    type: "true_false",
    question: "只要在学校学好一门专业，就可以一辈子不需要再进行学习。",
    answer: "false",
    category: "职业素养"
  },
  {
    id: 644,
    type: "true_false",
    question: "应聘信是在不知道用人单位是否需要聘用人员的情况下，向用人单位介绍自己的基本情况，标明自己就业意向的一种书信。",
    answer: "false",
    category: "职业素养"
  },
  {
    id: 645,
    type: "true_false",
    question: "计划不如变化快，在自我管理中，可以先做事情，不必做好计划再去执行。",
    answer: "false",
    category: "职业素养"
  },
  {
    id: 646,
    type: "true_false",
    question: "自我的发展只有自己能把握，做好自己的主人，不能屈服于名誉，更不能自卑。",
    answer: "true",
    category: "职业素养"
  },
  {
    id: 647,
    type: "true_false",
    question: "安全生产是指在劳动生产过程中消除可能导致人员伤亡、职业危害或设备、财产损失的因素，保障人身安全、健康和资产安全。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 648,
    type: "true_false",
    question: "生产经营单位发生的生产安全事故的原因是：人的不安全行为，物的不安全状态，管理上的缺陷。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 649,
    type: "true_false",
    question: "生产经营单位里发生的生产安全事故的原因是多方面的，但主要是\"物的因素\"。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 650,
    type: "true_false",
    question: "在生产过程中，发现安全防护装置对操作带来不方便，可以不用或者拆除。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 651,
    type: "true_false",
    question: "使用手持电动工具必须绝缘可靠，有良好的接地或接零措施，并应戴好绝缘手套进行操作。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 652,
    type: "true_false",
    question: "职业道德不是从业人员职业资质评价的唯一指标。",
    answer: "true",
    category: "职业素养"
  },
  {
    id: 653,
    type: "true_false",
    question: "为了解救触电人员，可以不允许切断电源，事后立即向上级汇报。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 654,
    type: "true_false",
    question: "自我的发展只有自己能把握，做好自己的主人，不能屈服于名誉，更不能自卑。",
    answer: "true",
    category: "职业素养"
  },
  {
    id: 655,
    type: "true_false",
    question: "职业待遇就是薪酬待遇。是人们在从事相关的劳动活动后获得的合法收入。",
    answer: "true",
    category: "职业素养"
  },
  {
    id: 656,
    type: "true_false",
    question: "职场适应能力是一个人职业形象的外在表现形式，是内在素质的外化。",
    answer: "false",
    category: "职业素养"
  }
];

// 题目统计函数
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
