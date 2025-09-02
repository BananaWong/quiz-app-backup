// questionBankHBR.js - 工业机器人应用编程职业技能等级理论知识考核题库（HBR中级）
export const questionBank = [
  {
    id: 1,
    type: "single_choice",
    question: "在（）菜单中可创建数字量IO变量。",
    options: {
      A: "输入输出检测",
      B: "变量检测",
      C: "监控",
      D: "维护"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 2,
    type: "single_choice",
    question: "在（）指令组中选择DOUT指令，可创建数字量输出信号。",
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
    id: 3,
    type: "single_choice",
    question: "DOUT指令创建的数字量输出信号属于（）类型。",
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
    id: 4,
    type: "single_choice",
    question: "（）指令可将将数字输出端口设置为TRUE或者FALSE。",
    options: {
      A: "DOUTW.Set",
      B: "DOUT.Connect",
      C: "DOUT.Set",
      D: "DIN.Wait"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 5,
    type: "single_choice",
    question: "（）指令将数字输出端口设置为TRUE或者FALSE持续一段时间。",
    options: {
      A: "DOUTW.Set",
      B: "DOUT.Connect",
      C: "DOUT.Set",
      D: "DIN.Pulse"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 6,
    type: "single_choice",
    question: "模拟/数字（A/D）转换，是（）的过程。",
    options: {
      A: "模拟信号转换为数字信号",
      B: "数字信号转换为模拟信号",
      C: "模拟信号放大",
      D: "模拟信号减小"
    },
    answer: "A",
    category: "电气控制"
  },
  {
    id: 7,
    type: "single_choice",
    question: "数字/模拟（D/A）转换，是（）的过程。",
    options: {
      A: "模拟信号转换为数字信号",
      B: "数字信号转换为模拟信号",
      C: "模拟信号放大",
      D: "模拟信号减小"
    },
    answer: "B",
    category: "电气控制"
  },
  {
    id: 8,
    type: "single_choice",
    question: "数字系统和模拟系统之间的接口常采用（）。",
    options: {
      A: "计数器",
      B: "多谐振荡器",
      C: "数/模和模/数转换器",
      D: "滤波器"
    },
    answer: "C",
    category: "电气控制"
  },
  {
    id: 9,
    type: "single_choice",
    question: "I/O模块是设计机器人弧焊工作站时的必选器件，有模拟量I/O和数字量I/O两种形式，模拟型号和数字信号的区别在于（）。",
    options: {
      A: "数字信号大小不连续，时间上连续，而模拟信号相反",
      B: "数字信号大小连续，时间上不连续，而模拟信号相反",
      C: "数字信号大小和时间均不连续，而模拟信号相反",
      D: "数字信号大小和时间均连续，而模拟信号相反"
    },
    answer: "C",
    category: "机器人应用"
  },
  {
    id: 10,
    type: "single_choice",
    question: "（ ）编程语言不能用于S7-1200编程。",
    options: {
      A: "LAD",
      B: "FBD",
      C: "STL",
      D: "SCL"
    },
    answer: "C",
    category: "PLC编程"
  },
  {
    id: 11,
    type: "single_choice",
    question: "如果用3个IO数字信号组成一个组输出，那么此输出最大可发送的数值为(）。",
    options: {
      A: "3",
      B: "6",
      C: "8",
      D: "9"
    },
    answer: "C",
    category: "PLC编程"
  },
  {
    id: 12,
    type: "single_choice",
    question: "在PLC中，用来存放用户程序的是( )。",
    options: {
      A: "RAM",
      B: "ROM",
      C: "EPROM",
      D: "EEPROM"
    },
    answer: "A",
    category: "PLC基础"
  },
  {
    id: 13,
    type: "single_choice",
    question: "下列指令中，当前值既可以增加又可以减少的是（ )。",
    options: {
      A: "TON",
      B: "TONR",
      C: "CTUD",
      D: "CTU"
    },
    answer: "C",
    category: "PLC编程"
  },
  {
    id: 14,
    type: "single_choice",
    question: "S7- 1200CPU的系统存储位中不包括( )。",
    options: {
      A: "首循环标志位",
      B: "常1信号位",
      C: "常0信号位",
      D: "2Hz频率位"
    },
    answer: "D",
    category: "PLC编程"
  },
  {
    id: 15,
    type: "single_choice",
    question: "GOTO指令用于跳转到程序不同部分，跳转目标通过( )指令定义。",
    options: {
      A: "LABEL",
      B: "IF",
      C: "RUN",
      D: "KILL"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 16,
    type: "single_choice",
    question: "机器人每次能回到它的各自轴零点，靠的是（）装置。",
    options: {
      A: "机械准星",
      B: "编码器",
      C: "控制器",
      D: "内部存储器"
    },
    answer: "B",
    category: "机器人原理"
  },
  {
    id: 17,
    type: "single_choice",
    question: "若创建一个数据，只能够被该数据所在的程序模块所调用，则其范围需要设为（）。",
    options: {
      A: "全局",
      B: "本地",
      C: "任务",
      D: "程序"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 18,
    type: "single_choice",
    question: "OnPlane在笛卡尔空间里定义机器人在某一触发（ )上触发。",
    options: {
      A: "角度",
      B: "平面",
      C: "距离",
      D: "位置"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 19,
    type: "single_choice",
    question: "OnPosition指令用于同步触发，当机器人经过指定（）时触发。",
    options: {
      A: "角度",
      B: "平面",
      C: "距离",
      D: "位置"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 20,
    type: "single_choice",
    question: "以下哪种机器人的运动方式不可控（",
    options: {
      A: "关节运动",
      B: "线性运动",
      C: "圆周运动",
      D: "绝对位置运动"
    },
    answer: "D",
    category: "机器人运动控制"
  },
  {
    id: 21,
    type: "single_choice",
    question: "( )指令可将机器人某一轴运动至指定角度。",
    options: {
      A: "MoveRobotAxis",
      B: "LinRel",
      C: "StopRobot",
      D: "PTPSearch"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 22,
    type: "single_choice",
    question: "指令（）用于控制进程的先后顺序，使一些进程在指定等待参数之前被中断，直到该参数被激活后进程再持续执行。",
    options: {
      A: "WaitIsFinished",
      B: "LinSearch",
      C: "StopRobot",
      D: "WaitJustInTime"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 23,
    type: "single_choice",
    question: "当在机器人程序中设定一个时钟，以下哪个时间最靠近最大计时容量（）。",
    options: {
      A: "35天",
      B: "50天",
      C: "55天",
      D: "65天"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 24,
    type: "single_choice",
    question: "IO指令为预处理指令，会在程序运行前提前编译，所以需在这些指令前加上指令（）。",
    options: {
      A: "WAIT",
      B: "STOP",
      C: "END",
      D: "WaitIsFinished"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 25,
    type: "single_choice",
    question: "不占用机器人，可以使用软件工具在计算机上建模并编程的编程方式是（）。",
    options: {
      A: "在线编程",
      B: "离线编程",
      C: "自主编程",
      D: "示教器示教编程"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 26,
    type: "single_choice",
    question: "选择“程序Program→MoveCircularInstruction”即可添加（）指令。",
    options: {
      A: "重复运动",
      B: "计算运动",
      C: "旋转运动",
      D: "圆弧运动"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 27,
    type: "single_choice",
    question: "选择“程序Program→ShowMessageInstruction”，指令可以在示教器上（）。",
    options: {
      A: "显示提醒信息",
      B: "显示错误信息",
      C: "显示警告信息",
      D: "显示系统信息"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 28,
    type: "single_choice",
    question: "选择“程序Program→Fast simulation”即可加快（）速度",
    options: {
      A: "导出",
      B: "工艺",
      C: "仿真",
      D: "传送带"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 29,
    type: "single_choice",
    question: "检测系统的带宽应（）机器人最高速度。",
    options: {
      A: "等于",
      B: "大于等于",
      C: "小于",
      D: "不等于"
    },
    answer: "B",
    category: "机器人性能"
  },
  {
    id: 30,
    type: "single_choice",
    question: "通过机器人校准，可以将机器人精度（）。",
    options: {
      A: "随机调整",
      B: "降低",
      C: "固定",
      D: "提高"
    },
    answer: "D",
    category: "机器人标定"
  },
  {
    id: 31,
    type: "single_choice",
    question: "使用激光跟踪仪时，应将（）目标连接到机器人工具。",
    options: {
      A: "1个或多个",
      B: "1个",
      C: "3个",
      D: "5个"
    },
    answer: "B",
    category: "机器人标定"
  },
  {
    id: 32,
    type: "single_choice",
    question: "需要激光跟踪器的（）才能正确设置与RoboDK的通信。",
    options: {
      A: "许可证",
      B: "序列号",
      C: "IP",
      D: "秘钥"
    },
    answer: "B",
    category: "机器人标定"
  },
  {
    id: 33,
    type: "single_choice",
    question: "机器人校准分为（）个步骤。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "B",
    category: "机器人标定"
  },
  {
    id: 34,
    type: "single_choice",
    question: "位置误差是机器人相对于（）可以达到的一点精度。",
    options: {
      A: "基座标",
      B: "参考系",
      C: "参考点",
      D: "参考面"
    },
    answer: "B",
    category: "机器人精度"
  },
  {
    id: 35,
    type: "single_choice",
    question: "RoboDK可以连接支持的测量系统，例如（）或者CreaformOpticalCMM，连接这些设备可以实现机器人校准与性能测试的全自动化。",
    options: {
      A: "电阻尺",
      B: "拉线位移传感器",
      C: "应变计",
      D: "激光追踪仪"
    },
    answer: "D",
    category: "机器人标定"
  },
  {
    id: 36,
    type: "single_choice",
    question: "校准机器人需要（）系统。",
    options: {
      A: "气动",
      B: "液压",
      C: "测量",
      D: "数据分析"
    },
    answer: "C",
    category: "机器人标定"
  },
  {
    id: 37,
    type: "single_choice",
    question: "机器人校准可以显著提高离线编程机器人的（）",
    options: {
      A: "准确性",
      B: "可靠性",
      C: "柔和性",
      D: "速度"
    },
    answer: "A",
    category: "机器人标定"
  },
  {
    id: 38,
    type: "single_choice",
    question: "距离误差是通过测量（）的距离误差获得的。",
    options: {
      A: "任意两点",
      B: "三点间",
      C: "四点间",
      D: "成对点"
    },
    answer: "D",
    category: "机器人精度"
  },
  {
    id: 39,
    type: "single_choice",
    question: "必须使用参考目标来正确设置轴6的（）位置。",
    options: {
      A: "当前",
      B: "移动",
      C: "原始",
      D: "无"
    },
    answer: "C",
    category: "机器人标定"
  },
  {
    id: 40,
    type: "single_choice",
    question: "进行更换电机、机械系统零部件之后需要进行（）。",
    options: {
      A: "速度标定",
      B: "角度标定",
      C: "负荷标定",
      D: "零点标定"
    },
    answer: "D",
    category: "机器人维护"
  },
  {
    id: 41,
    type: "single_choice",
    question: "机器人工作空间一般用水平面和垂直面的（）表示。",
    options: {
      A: "距离",
      B: "投影",
      C: "尺寸",
      D: "角度"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 42,
    type: "single_choice",
    question: "工业机器人的速度一般用（）表示。",
    options: {
      A: "m/min",
      B: "mm/s",
      C: "rad/min",
      D: "r/s"
    },
    answer: "B",
    category: "机器人运动控制"
  },
  {
    id: 43,
    type: "single_choice",
    question: "加速度传感器是一种能够测量加速度的传感器。通常由（）、阻尼器、弹性元件、敏感元件和适调电路等部分组成。",
    options: {
      A: "重锤",
      B: "支架",
      C: "质量块",
      D: "化学试剂"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 44,
    type: "single_choice",
    question: "影响工业机器人定位精度的因素大体上可以归为三类：（）因素、控制因素、执行因素。",
    options: {
      A: "代码",
      B: "轴承",
      C: "装配",
      D: "结构"
    },
    answer: "D",
    category: "机器人精度"
  },
  {
    id: 45,
    type: "single_choice",
    question: "机器人中的电机编码器分辨率越高则定位精度（）。",
    options: {
      A: "越低",
      B: "越高",
      C: "不变",
      D: "没有关系"
    },
    answer: "B",
    category: "机器人精度"
  },
  {
    id: 46,
    type: "single_choice",
    question: "伺服电机保持转矩不变的情况下，转速越高（）。",
    options: {
      A: "功率越高",
      B: "功率越低",
      C: "所需电压越低",
      D: "所需电压不变"
    },
    answer: "A",
    category: "伺服控制"
  },
  {
    id: 47,
    type: "single_choice",
    question: "工业机器人驱动类型可以划分为液压驱动、气压驱动、电力驱动和（）驱动四种类型。",
    options: {
      A: "电机",
      B: "自动",
      C: "新型",
      D: "智能"
    },
    answer: "C",
    category: "机器人驱动"
  },
  {
    id: 48,
    type: "single_choice",
    question: "工业机器人机座有固定式和（）两种。",
    options: {
      A: "移动式",
      B: "行走式",
      C: "旋转式",
      D: "电动式"
    },
    answer: "B",
    category: "机器人结构"
  },
  {
    id: 49,
    type: "single_choice",
    question: "通常所说的焊接机器人主要指的是（$①$ 点焊机器人； $(2)$ 弧焊机器人； $(3)$ 等离子焊接机器人； $(\\widehat{\\Delta})$ 激光焊接机器人$$\n\\begin{array}{rlr}{\\mathrm{A.①②}}&{}&{\\mathrm{B.①②④}}&{\\mathrm{C.①③}}&{\\mathrm{D.①②③④}}\\end{array}$$",
    options: {
      A: "①②",
      B: "①②④",
      C: "①③",
      D: "①②③④"
    },
    answer: "B",
    category: "机器人应用"
  },
  {
    id: 50,
    type: "single_choice",
    question: "机器人的手部也称末端执行器，它是装在机器人的（）部上，直接抓握工作或执行作业的部件。",
    options: {
      A: "臂",
      B: "腕",
      C: "手",
      D: "关节"
    },
    answer: "B",
    category: "机器人结构"
  },
  {
    id: 51,
    type: "single_choice",
    question: "（）是利用行星轮传动原理发展起来的一种新型减速器，是依靠柔性零件产生弹性机械波来传递动力和运动的一种行星轮传动。",
    options: {
      A: "蜗轮减速器",
      B: "齿轮减速器",
      C: "蜗杆减速器",
      D: "谐波减速器"
    },
    answer: "D",
    category: "机器人传动"
  },
  {
    id: 52,
    type: "single_choice",
    question: "机器视觉系统是一种（）的光传感系统，同时集成软硬件，综合现代计算机，光学、电子技术。",
    options: {
      A: "非接触式",
      B: "接触式",
      C: "自动控制",
      D: "智能控制"
    },
    answer: "A",
    category: "机器视觉"
  },
  {
    id: 53,
    type: "single_choice",
    question: "动作级编程语言又可以分为（）和末端执行器编程两种动作编程。",
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
    id: 54,
    type: "single_choice",
    question: "盖有（）章的检验报告可用于产品质量评价、成果及司法鉴定，具有法律效力。",
    options: {
      A: "CCC",
      B: "CMA",
      C: "EMI",
      D: "EMC"
    },
    answer: "B",
    category: "质量管理"
  },
  {
    id: 55,
    type: "single_choice",
    question: "取得计量认证合格证书的产品质量检验机构，可开展（）检验项目。",
    options: {
      A: "有效期内",
      B: "人员资质内",
      C: "仪器性能范围内",
      D: "证书上所限定的"
    },
    answer: "D",
    category: "质量管理"
  },
  {
    id: 56,
    type: "single_choice",
    question: "计量认证分为（）和省级两级。",
    options: {
      A: "行业级",
      B: "实验室级",
      C: "市级",
      D: "国家级"
    },
    answer: "D",
    category: "质量管理"
  },
  {
    id: 57,
    type: "single_choice",
    question: "没有经过计量认证的检定或检测实验室，其发布的检定、检测报告（）",
    options: {
      A: "可民用",
      B: "可做科学分析用",
      C: "可做参考",
      D: "没有法律效力"
    },
    answer: "D",
    category: "质量管理"
  },
  {
    id: 58,
    type: "single_choice",
    question: "用于检测的仪器仪表应该（）。",
    options: {
      A: "随意选用",
      B: "限制品牌",
      C: "定期校准",
      D: "自行验证"
    },
    answer: "C",
    category: "质量管理"
  },
  {
    id: 59,
    type: "single_choice",
    question: "工业机器人性能规范及其试验方法标准号是（）。",
    options: {
      A: "GB/T20867-2007",
      B: "GB/T33267-2016",
      C: "GB/T19400-2003",
      D: "GB/T12642-2013"
    },
    answer: "D",
    category: "标准规范"
  },
  {
    id: 60,
    type: "true_false",
    question: "数字量在时间和数量上都是离散的物理量，其表示的信号则为数字信号。",
    answer: "true",
    category: "电气控制"
  },
  {
    id: 61,
    type: "true_false",
    question: "开关量与数字量是同一个概念。",
    answer: "false",
    category: "电气控制"
  },
  {
    id: 62,
    type: "true_false",
    question: "模拟量在连续的变化过程中任何一个取值都是一个具体有意义的物理量，如温度，电压，电流等。",
    answer: "true",
    category: "电气控制"
  },
  {
    id: 63,
    type: "true_false",
    question: "数字量是由0和1组成的信号，经过编码形成有规律的信号，量化后的模拟量就是数字量。",
    answer: "true",
    category: "电气控制"
  },
  {
    id: 64,
    type: "true_false",
    question: "模拟量的概念与数字量相对应，但是经过量化之后又可以转化为数字量。",
    answer: "true",
    category: "电气控制"
  },
  {
    id: 65,
    type: "single_choice",
    question: "动作级编程语言又可以分为（）和末端执行器编程两种动作编程。",
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
    id: 66,
    type: "single_choice",
    question: "下面哪一项不属于工业机器人子系统（）。",
    options: {
      A: "驱动系统",
      B: "机械结构系统",
      C: "人机交互系统",
      D: "导航系统"
    },
    answer: "D",
    category: "机器人系统"
  },
  {
    id: 67,
    type: "single_choice",
    question: "陀螺仪是利用（）原理制作的。",
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
    id: 68,
    type: "single_choice",
    question: "摩擦带传动是依靠（ ）来传递运动和功率的。",
    options: {
      A: "带与带轮接触面之间的正压力",
      B: "带的紧边拉力",
      C: "带与带轮接触面之间的摩擦力",
      D: "带的松边拉力"
    },
    answer: "C",
    category: "机械传动"
  },
  {
    id: 69,
    type: "single_choice",
    question: "传感器的运用，使得机器人具有了一定的（ ）能力。",
    options: {
      A: "一般",
      B: "重复工作",
      C: "识别判断",
      D: "逻辑思维"
    },
    answer: "C",
    category: "机器人感知"
  },
  {
    id: 70,
    type: "single_choice",
    question: "机器人驱动方式有（ ）。$①$ 手工驱动 $(2)$ 电力驱动 $(3)$ 气压驱动 $(\\widehat{\\Delta})$ 液压驱动",
    options: {
      A: "$①②$",
      B: "①②④",
      C: "②③④",
      D: "①②③④"
    },
    answer: "C",
    category: "机器人驱动"
  },
  {
    id: 71,
    type: "single_choice",
    question: "电液动换向阀中的电磁阀，应确保电磁阀在中间位置时液动阀两端控制的油路应卸荷，电磁阀的滑阀机能应是（ ）型。",
    options: {
      A: "M",
      B: "Y",
      C: "K",
      D: "H"
    },
    answer: "D",
    category: "液压控制"
  },
  {
    id: 72,
    type: "single_choice",
    question: "工业机器人的主电源开关在什么位置（ ）。",
    options: {
      A: "机器人本体上",
      B: "示教器上",
      C: "控制柜上",
      D: "需外接"
    },
    answer: "C",
    category: "机器人安全"
  },
  {
    id: 73,
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
    id: 74,
    type: "true_false",
    question: "DOUT.Set指令可以设置输出后等待某个输入反馈信号，若反馈信号没有响应，则出现报警。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 75,
    type: "true_false",
    question: "如果加载的工程中不包含区域监控变量，则工作区监控选项是隐藏的，因此我们要先新建区域监控变量。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 76,
    type: "true_false",
    question: "长按示教器左上角“菜单”键，可调出“Display”选项。",
    answer: "true",
    category: "示教器操作"
  },
  {
    id: 77,
    type: "true_false",
    question: "对示教器进行亮度设置，需要使用“teacher”用户登录才能设置。",
    answer: "false",
    category: "示教器操作"
  },
  {
    id: 78,
    type: "true_false",
    question: "示教器进行亮度设置后无需重启直接生效。",
    answer: "true",
    category: "示教器操作"
  },
  {
    id: 79,
    type: "true_false",
    question: "当机器人零点丢失后，机器人对于TCP精度要求较高时，肉眼通过零点刻度对零点进行标定无法满足精度需求，需要通过软件计算零点偏差值。",
    answer: "true",
    category: "机器人标定"
  },
  {
    id: 80,
    type: "true_false",
    question: "标零过程中，会听到电机抱闸打开/关闭的声音，属正常现象。",
    answer: "true",
    category: "机器人标定"
  },
  {
    id: 81,
    type: "true_false",
    question: "示教器内屏损坏或示教器线缆损坏可造成示教器黑屏。",
    answer: "true",
    category: "示教器故障"
  },
  {
    id: 82,
    type: "true_false",
    question: "示教器受到外力振动或触摸屏划伤情况下，可能会出现触摸屏不准，或开机直接进入了校准界面的情况。",
    answer: "true",
    category: "示教器故障"
  },
  {
    id: 83,
    type: "true_false",
    question: "购买示教器备件时，收到原厂未拆封的新示教器时，可能会出现开机后无法启动连接到控制器的情况。",
    answer: "true",
    category: "示教器故障"
  },
  {
    id: 84,
    type: "true_false",
    question: "机器人执行编码器清零操作后，电机编码器多圈值被置零，导致机器人保存的位置信息丢失。",
    answer: "true",
    category: "机器人维护"
  },
  {
    id: 85,
    type: "true_false",
    question: "编码器清零后，机器人零点数据丢失，必须执行机器人清零程序。",
    answer: "true",
    category: "机器人标定"
  },
  {
    id: 86,
    type: "true_false",
    question: "机器人焊接工作站搭建前，首先要确定焊接方式，然后分析焊件的特性，比如焊件的板材，板厚，焊缝的形状与宽度等。",
    answer: "true",
    category: "机器人应用"
  },
  {
    id: 87,
    type: "true_false",
    question: "搭建机器人焊接工作站时，对于工装夹具的设计过程中，要尽量保证工件的焊缝安装在工装夹具上以后保持平焊姿态。",
    answer: "true",
    category: "机器人应用"
  },
  {
    id: 88,
    type: "true_false",
    question: "焊接机器人一般把工具坐标系定义在焊枪的顶端",
    answer: "true",
    category: "机器人应用"
  },
  {
    id: 89,
    type: "true_false",
    question: "机器人在焊接过程中，操作人员不得离开现场，以应对突发事故的及时处理。",
    answer: "true",
    category: "机器人安全"
  },
  {
    id: 90,
    type: "true_false",
    question: "外围设备与机器人输入输出回路相连的电缆需要使用屏蔽电缆，防止周围高频噪声干扰。",
    answer: "true",
    category: "电气控制"
  },
  {
    id: 91,
    type: "true_false",
    question: "如果使用PLC发送高频脉冲给伺服驱动器，控制伺服电机运行，则PLC的输出端的类型必须选择继电器形式。",
    answer: "false",
    category: "PLC控制"
  },
  {
    id: 92,
    type: "true_false",
    question: "点焊机器人X形焊钳适用于点焊垂直及近于垂直位置的焊点。",
    answer: "true",
    category: "机器人应用"
  },
  {
    id: 93,
    type: "true_false",
    question: "远程控制机器人启动时，要求机器人已选择远程模式且机器人在作业原点等初始条件。",
    answer: "true",
    category: "机器人控制"
  },
  {
    id: 94,
    type: "true_false",
    question: "弧焊机器人送丝机构的送丝电机速度与焊接电流的大小有关。",
    answer: "true",
    category: "机器人应用"
  },
  {
    id: 95,
    type: "true_false",
    question: "通过伺服驱动器参数设定，只能使伺服电机工作在位置控制模式下，无法使伺服电机工作在速度控制或转矩控制模式下。",
    answer: "false",
    category: "伺服控制"
  },
  {
    id: 96,
    type: "true_false",
    question: "由于变频器内部设置有电子过电流保护装置，故电机就不需要热继电器进行过载保护了。",
    answer: "false",
    category: "电气控制"
  },
  {
    id: 97,
    type: "true_false",
    question: "AOUT.Set指令用于设置模拟量输出为指定的值。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 98,
    type: "true_false",
    question: "I/O模块是设计机器人弧焊工作站时的必选器件，有模拟量I/O和数字量I/O两种形式，模拟量和数字量信号的区别在于数字信号大小和时间均连续，而模拟信号相反。",
    answer: "false",
    category: "机器人应用"
  },
  {
    id: 99,
    type: "true_false",
    question: "AIN.WaitOutside指令功能是等待直到模拟量输入值在一个数值区间外，或者直至可选的时间超时。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 100,
    type: "true_false",
    question: "AIN.WaitInside指令功能是等待直到模拟量输入值在一个数值区间内，或者直至可选的时间超时。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 101,
    type: "true_false",
    question: "DOUTW.Set指令用于设置输出字节为指定的值。",
    answer: "true",
    category: "机器人编程"
  },
  {
    id: 102,
    type: "single_choice",
    question: "AIN.WaitGreater该指令功能是等待直到（）大于指定的值，或者直至可选的时间超时。",
    options: {
      A: "模拟量输入值",
      B: "模拟量输出值",
      C: "数字量输入值",
      D: "数字量输出值"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 103,
    type: "single_choice",
    question: "AIN.WaitInside 这指令功能是等待直到（）在一个数值区间内，或者直至可选的时间超时。",
    options: {
      A: "模拟量输入值",
      B: "模拟量输出值",
      C: "数字量输入值",
      D: "数字量输出值"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 104,
    type: "single_choice",
    question: "AIN.WaitOutside 这指令功能是等待直到（）在一个数值区间外，或者直至可选的时间超时。",
    options: {
      A: "模拟量输入值",
      B: "模拟量输出值",
      C: "数字量输入值",
      D: "数字量输出值"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 105,
    type: "single_choice",
    question: "AOUT.Set 设置（）为指定的值。",
    options: {
      A: "模拟量输入值",
      B: "模拟量输出值",
      C: "数字量输入值",
      D: "数字量输出值"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 106,
    type: "single_choice",
    question: "汇博机器人控制器作为 ModbusTCP 服务器，目前支持（）个 INT、REAL 类型的输入和输出。",
    options: {
      A: "16",
      B: "32",
      C: "8",
      D: "64"
    },
    answer: "B",
    category: "机器人通信"
  },
  {
    id: 107,
    type: "single_choice",
    question: "汇博机器人和外部 PLC 做 ModBusTCP 通信时，外部 PLC 发送 INT 类型数据的默认首地址是（）。",
    options: {
      A: "40001",
      B: "40002",
      C: "40003",
      D: "40004"
    },
    answer: "A",
    category: "机器人通信"
  },
  {
    id: 108,
    type: "single_choice",
    question: "汇博机器人和外部 PLC 做 ModBusTCP 通信时，外部 PLC 接收 INT 类型数据的默认首地址是（）。",
    options: {
      A: "40033",
      B: "40034",
      C: "40035",
      D: "40036"
    },
    answer: "A",
    category: "机器人通信"
  },
  {
    id: 109,
    type: "true_false",
    question: "离线仿真软件生成离线程序前，需要校准工具坐标系和工件坐标系。",
    answer: "true",
    category: "机器人仿真"
  },
  {
    id: 110,
    type: "true_false",
    question: "RoboDK 可以创建的仿真程序类型有两种。",
    answer: "true",
    category: "机器人仿真"
  },
  {
    id: 111,
    type: "true_false",
    question: "添加机器人关节移动指令可点击 Move Joint Instruction 工具栏按钮。",
    answer: "true",
    category: "机器人仿真"
  },
  {
    id: 112,
    type: "true_false",
    question: "在 RoboDK 中，放置动作是通过输出信号控制电磁阀动作指令来实现的。",
    answer: "true",
    category: "机器人仿真"
  },
  {
    id: 113,
    type: "true_false",
    question: "RoboDK 中机器人仿真程序完成后，一键就可以生成相应品牌的机器人离线程序。",
    answer: "true",
    category: "机器人仿真"
  },
  {
    id: 114,
    type: "true_false",
    question: "工业机器人的性能测试一般采用激光非接触测量技术与振动测量设备。",
    answer: "true",
    category: "机器人性能测试"
  },
  {
    id: 115,
    type: "true_false",
    question: "可达工作空间 (reachable workspace)，即机器人末端可达位置点的集合。",
    answer: "true",
    category: "机器人基础"
  },
  {
    id: 116,
    type: "true_false",
    question: "机器人本体的实际精度和理论设计模型可能会存在一定的误差。",
    answer: "true",
    category: "机器人精度"
  },
  {
    id: 117,
    type: "true_false",
    question: "标定机器人的基本参数，必须选用具有计量器具许可证的测量工具和仪器。",
    answer: "true",
    category: "机器人标定"
  },
  {
    id: 118,
    type: "true_false",
    question: "机器人在装配后不需要进行标定工作。",
    answer: "false",
    category: "机器人标定"
  },
  {
    id: 119,
    type: "true_false",
    question: "机器人在执行某作业时可能会因为存在手部不能到达的作业死区(dead zone)而不能完成任务。",
    answer: "true",
    category: "机器人应用"
  },
  {
    id: 120,
    type: "true_false",
    question: "重复定位精度中不包括姿态。",
    answer: "true",
    category: "机器人精度"
  },
  {
    id: 121,
    type: "true_false",
    question: "RoboDK可以通过激光跟踪传感器或立体摄像机，获得机器人的相关数据，得到机器人的能耗报告，且能够对机器人参数进行标定。",
    answer: "true",
    category: "机器人仿真"
  },
  {
    id: 122,
    type: "true_false",
    question: "测量重复定位精度时，以空载运行。",
    answer: "true",
    category: "机器人精度"
  },
  {
    id: 123,
    type: "true_false",
    question: "只要检测仪器达到标准就可以从事检验检测工作。",
    answer: "false",
    category: "质量管理"
  },
  {
    id: 124,
    type: "true_false",
    question: "从事检验检测活动的人员，不得同时在两个以上检验检测机构从业。",
    answer: "true",
    category: "质量管理"
  },
  {
    id: 125,
    type: "true_false",
    question: "非授权签字人不得签发检验检测报告。",
    answer: "true",
    category: "质量管理"
  },
  {
    id: 126,
    type: "true_false",
    question: "投入作业前检查机器人防护罩挡板是否正确紧固，确定没有活动或松动部件，检查控制单元部件是否完整。",
    answer: "true",
    category: "机器人安全"
  },
  {
    id: 127,
    type: "single_choice",
    question: "下列是中断类型的是（",
    options: {
      A: "Procdur",
      B: "Trap",
      C: "Function",
      D: "num"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 128,
    type: "single_choice",
    question: "OnDistance指令作用是：触发器可以在（ ）时触发。",
    options: {
      A: "下一个运动段的某点",
      B: "某一触发平面",
      C: "经过指定位置",
      D: "从起点运动一定距离或者距离终点一定距离"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 129,
    type: "single_choice",
    question: "Stop命令用于停止所有激活程序的执行。如果指不带参数，等同按下了示教器终端上的停止按钮。为防止该指令提前触发，应在该指令前添加WaitIsFinished或者（ ）。",
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
    id: 130,
    type: "single_choice",
    question: "不属于机器人触发指令的是（",
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
    id: 131,
    type: "single_choice",
    question: "( )指令用于同步触发，当机器人经过指定位置时触发。",
    options: {
      A: "OnDistance",
      B: "OnParameter",
      C: "OnPlane",
      D: "OnPosition"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 132,
    type: "single_choice",
    question: "CARTREFSYSEXT类型的参考坐标系是外部PLC功能块通过端口映射赋给RC的，所以主要参数有（ ）和映射端口。",
    options: {
      A: "工件坐标系",
      B: "工具坐标系",
      C: "基坐标系",
      D: "世界坐标系"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 133,
    type: "single_choice",
    question: "当WAIT表达式的值为（），下一步指令就会执行，否则的话，程序一直等待。",
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
    id: 134,
    type: "single_choice",
    question: "循环向右移位运算函数是（ ）。",
    options: {
      A: "ROR",
      B: "ROL",
      C: "SHR",
      D: "SHL"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 135,
    type: "single_choice",
    question: "循环向左移位运算函数是（ ）。",
    options: {
      A: "ROR",
      B: "ROL",
      C: "SHR",
      D: "SHL"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 136,
    type: "single_choice",
    question: "Modbus数据传输，目前支持（ ）个INT、REAL类型的输入，（ ）个INT、REAL类型的输出。",
    options: {
      A: "16,16",
      B: "16,32",
      C: "32,32",
      D: "32,16"
    },
    answer: "A",
    category: "机器人通信"
  },
  {
    id: 137,
    type: "single_choice",
    question: "汇博机器Modbus数据类型有ER_Modbus Get（外部PLC发送给机器人数据）和（）（机器人发送给外部PLC数据）。",
    options: {
      A: "ER_Modbus Set",
      B: "ER_Modbus Put",
      C: "ER_Modbus Send",
      D: "ER_Modbus Received"
    },
    answer: "B",
    category: "机器人通信"
  },
  {
    id: 138,
    type: "single_choice",
    question: "机器人内部程序中默认添加FM265/A从站模块，可与安装主站模块FM260/A的系统进行数据传输。目前支持（）个BOOL、（）个INT、（）个REAL类型的输入。",
    options: {
      A: "32,10,8",
      B: "32,16,16",
      C: "64,32,8",
      D: "64,10,8"
    },
    answer: "D",
    category: "机器人通信"
  },
  {
    id: 139,
    type: "single_choice",
    question: "数据类型BOOL在程序中所代表的类型为（）。",
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
    id: 140,
    type: "single_choice",
    question: "机器人的精度主要依存于（）、控制算法误差与分辨率系统误差。",
    options: {
      A: "传动误差",
      B: "关节间隙",
      C: "机械误差",
      D: "连杆机构的挠性"
    },
    answer: "C",
    category: "机器人精度"
  },
  {
    id: 141,
    type: "single_choice",
    question: "PLC采用了一系列可靠性设计，如（）、掉电保护、故障诊断和性信息保护及恢复等。",
    options: {
      A: "简单设计",
      B: "简化设计",
      C: "冗余设计",
      D: "功能设计"
    },
    answer: "C",
    category: "PLC基础"
  },
  {
    id: 142,
    type: "single_choice",
    question: "STOP模式下，S7-1200CPU单元集成DO通道输出的信号状态不包括（）。",
    options: {
      A: "输出STOP前状态",
      B: "输出替代值1",
      C: "输出替代值0",
      D: "输出随机状态"
    },
    answer: "D",
    category: "PLC编程"
  },
  {
    id: 143,
    type: "single_choice",
    question: "机器视觉系统是一种( )的光传感系统，同时集成软硬件，综合现代计算机，光学、电子技术。",
    options: {
      A: "非接触式",
      B: "接触式",
      C: "自动控制",
      D: "智能控制"
    },
    answer: "A",
    category: "机器视觉"
  },
  {
    id: 144,
    type: "single_choice",
    question: "高速在线测量中，为减小被测物模糊，需要选用（ )照明技术。",
    options: {
      A: "条形光",
      B: "平行光",
      C: "频闪光",
      D: "结构光"
    },
    answer: "C",
    category: "机器视觉"
  },
  {
    id: 145,
    type: "single_choice",
    question: "大小为1024X1024，灰度级别为256色的图像文件大小为（）。",
    options: {
      A: "512KB",
      B: "1MB",
      C: "1.5MB",
      D: "2MB"
    },
    answer: "B",
    category: "机器视觉"
  },
  {
    id: 146,
    type: "single_choice",
    question: "工业相机能识别的图像上的最小单元是（ )。",
    options: {
      A: "分辨率",
      B: "精度",
      C: "像素",
      D: "视野"
    },
    answer: "C",
    category: "机器视觉"
  },
  {
    id: 147,
    type: "single_choice",
    question: "相机镜头到被检测物体之间的距离是（ )。",
    options: {
      A: "物距",
      B: "焦距",
      C: "景深",
      D: "视野"
    },
    answer: "A",
    category: "机器视觉"
  },
  {
    id: 148,
    type: "single_choice",
    question: "触摸屏通过（ ）方式与PCL交流信息。",
    options: {
      A: "通讯",
      B: "I/O信号控制",
      C: "继电器连接",
      D: "电气连接"
    },
    answer: "A",
    category: "人机界面"
  },
  {
    id: 149,
    type: "single_choice",
    question: "机器人内部程序中默认添加FM265/A从站模块，可与安装主站模块FM260/A的系统进行数据传输。目前支持（）个BOOL、（）个INT、（）个REAL类型的输出。",
    options: {
      A: "64.10.8",
      B: "64,32,8",
      C: "32,16,16",
      D: "32,10,8"
    },
    answer: "A",
    category: "机器人通信"
  },
  {
    id: 150,
    type: "single_choice",
    question: "S7-1200系统不能接入的现场总线是（",
    options: {
      A: "MPI",
      B: "PROFINET",
      C: "PROFIBUS",
      D: "MODBUS"
    },
    answer: "A",
    category: "PLC通信"
  },
  {
    id: 151,
    type: "single_choice",
    question: "S7-1200CPU的系统存储位中不包括的内容是（",
    options: {
      A: "首循环标志位",
      B: "常1信号位",
      C: "常0信号位",
      D: "2Hz频率位"
    },
    answer: "D",
    category: "PLC编程"
  },
  {
    id: 152,
    type: "single_choice",
    question: "用于汇博机器人与CognexInsight系列相机建立通讯的指令是（ ）。",
    options: {
      A: "ctVisConnect",
      B: "ctVisTrigger",
      C: "ctVisReset",
      D: "以上都不是"
    },
    answer: "A",
    category: "机器人视觉"
  },
  {
    id: 153,
    type: "single_choice",
    question: "用于CognexInsight系列相机触发滤波模块获取工件信息的汇博机器人指令是（）。",
    options: {
      A: "ctVisConnect",
      B: "ctVisTrigger",
      C: "ctVisReset",
      D: "以上都不是"
    },
    answer: "B",
    category: "机器人视觉"
  },
  {
    id: 154,
    type: "single_choice",
    question: "视觉系统与机器人通过TCP/IP进行数据交换和传递，网线连接一端接入相机网口，一端接入机器人控制器Ethernet1网口，该网口默认地址为192.168.100.100，因此相机的IP地址为（）。",
    options: {
      A: "192.168.0.0",
      B: "192.168.100.0",
      C: "192.168.100.100",
      D: "192.168.100.168"
    },
    answer: "D",
    category: "机器人视觉"
  },
  {
    id: 155,
    type: "single_choice",
    question: "ain0.WaitGreater(10.0)释义正确的是（",
    options: {
      A: "等待模拟量输入值 $\\mathrm{ain0 = 10}$",
      B: "等待模拟量输入值 $\\mathrm{ain0< 10}$",
      C: "等待模拟量输入值 $\\mathrm{ain0 > 10}$",
      D: "模拟量输入值ain0设为10"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 156,
    type: "single_choice",
    question: "bSigOut0.Set(TRUE,IoDIn[15],100,TRUE)：程序执行这一指令时，将输出端口（）被设置为TRUE，并在 $100\\mathrm{ms}$ 内等待输入口IoDin[15]被设置为TRUE，超过等待时间后还没响应，产生错误；若时间被设置为无效值，则程序一直等待下去，直到输入口IoDin[15]被设置为TRUE。",
    options: {
      A: "IoDin[15]",
      B: "IoDin[14]",
      C: "IoDout[15]",
      D: "IoDout[14]"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 157,
    type: "single_choice",
    question: "焊接机器人的焊接作业主要包括（",
    options: {
      A: "点焊和弧焊",
      B: "间断焊和连续焊",
      C: "平焊和竖焊",
      D: "气体保护焊和氩弧焊"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 158,
    type: "single_choice",
    question: "使用焊枪示教前，检查焊枪的均压装置是否良好，动作是否正常，同时对电极头的要求是（）。",
    options: {
      A: "更换新的电极头",
      B: "使用磨耗量大的电极头",
      C: "旧的磨损量小的电极头",
      D: "新的或旧的都行"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 159,
    type: "single_choice",
    question: "LOOP…DO…END_LOOP指令是循环（）控制指令。",
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
    id: 160,
    type: "single_choice",
    question: "RUN指令调用一个用户程序，该程序与主程序平行运行。RUN调用的程序必须用（）指令终止。",
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
    id: 161,
    type: "single_choice",
    question: "码垛点前点与后点的s、h的值是相对（ ）点的。",
    options: {
      A: "前点",
      B: "后点",
      C: "码垛点",
      D: "工具末端"
    },
    answer: "C",
    category: "机器人应用"
  },
  {
    id: 162,
    type: "single_choice",
    question: "PTPAbs指令的作用是（",
    options: {
      A: "使机器人末端相对于参考点移动设定的偏移量",
      B: "用于获取机器人当前位置信息",
      C: "用于修改机器人全局速度",
      D: "使机器人各关节相对于参考点移动设定的偏移量"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 163,
    type: "single_choice",
    question: "PACK.Reachability位置可达性检查，如果位置不能到达，系统发送警告信号，并返回一个（ ）值。",
    options: {
      A: "预设",
      B: "随机",
      C: "FALSE",
      D: "TRUE"
    },
    answer: "C",
    category: "机器人应用"
  },
  {
    id: 164,
    type: "single_choice",
    question: "数学运算指令（ ）用于判断某位是否为1函数。",
    options: {
      A: "CheckBit",
      B: "SetBit",
      C: "ResetBit",
      D: "STR"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 165,
    type: "single_choice",
    question: "系统功能指令CLOCK.Read的作用是（ ）。",
    options: {
      A: "重置时钟",
      B: "启动时钟",
      C: "停止时钟",
      D: "读取被测时间"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 166,
    type: "single_choice",
    question: "将汽车前挡风玻璃固定在车架上前，应进行（ ）处理。",
    options: {
      A: "焊接",
      B: "涂胶",
      C: "打磨抛光",
      D: "人工去毛刺"
    },
    answer: "B",
    category: "机器人应用"
  },
  {
    id: 167,
    type: "single_choice",
    question: "为去掉冲压工件表面的毛刺，应进行（ ）处理。",
    options: {
      A: "焊接",
      B: "涂胶",
      C: "打磨抛光",
      D: "人工去毛刺"
    },
    answer: "D",
    category: "机器人应用"
  },
  {
    id: 168,
    type: "single_choice",
    question: "通常所说的焊接机器人主要指的是(",
    options: {
      A: "点焊机器人",
      B: "弧焊机器人",
      C: "等离子焊接机器人",
      D: "激光焊机器人"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 169,
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
    id: 170,
    type: "single_choice",
    question: "WHILE指令在满足条件的时候循环执行子语句，循环控制表达式必须是（）类型。",
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
    id: 171,
    type: "single_choice",
    question: "IF条件判断表达式必须是（）类型",
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
    id: 172,
    type: "single_choice",
    question: "RETURN，RUN，KILL,IF···THEN··END_IF，ELSIF···THEN，ELSE，IO等指令为预处理指令，会在程序运行前提前编译，所以需在这些指令前加上指令（）。",
    options: {
      A: "WaitIsFinished",
      B: "Waitsignal",
      C: "Stop",
      D: "Wait"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 173,
    type: "single_choice",
    question: "WAITdin0.port $\\equiv$ TRUE释义正确的是（ ）。",
    options: {
      A: "程序执行完上一行程序，等待数字输入din0.port为TRUE时才执行后面的程序，否则机器人暂停运行，并处于一直等待状态。",
      B: "程序执行上一行程序的同时，等待数字输入din0.port为TRUE时才执行后面的程序，否则机器人暂停运行，并处于一直等待状态。",
      C: "程序执行完上一行程序，等待数字输入din0.port为TRUE时才执行后面的程序，否则机器人结束运行程序。",
      D: "程序执行完上一行程序，等待数字输入din0.port为TRUE时才执行后面的程序，否则机器人继续执行上一行程序。"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 174,
    type: "single_choice",
    question: "GetRobotPos 指令用于获取机器人当前（ ）信息。",
    options: {
      A: "速度",
      B: "位置",
      C: "角度",
      D: "姿态"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 175,
    type: "single_choice",
    question: "GOTO 指令用于跳转到程序不同部分。跳转目标通过（ ）指令定义。",
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
    id: 176,
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
    id: 177,
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
    id: 178,
    type: "single_choice",
    question: "区域监控功能可以有效的保护机器人或者现场设备，当TCP将要离开允许工作区域或入禁止区域时，提前给出报警停机器人运动。撤销区域监控的指令是（ ）。",
    options: {
      A: "AREA.Activate",
      B: "AREA.Deactivate",
      C: "AREA.Connect",
      D: "AREA.Disconnect"
    },
    answer: "B",
    category: "机器人安全"
  },
  {
    id: 179,
    type: "single_choice",
    question: "GOTO 指令用于跳转到程序不同部分，目标通过（ ）定义。",
    options: {
      A: "Label 指令",
      B: "赋值指令",
      C: "调用指令",
      D: "注释"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 180,
    type: "single_choice",
    question: "执行setoverride（50）指令后，机器人全局速度改为（ ）。",
    options: {
      A: "50mm/s",
      B: "50°/min",
      C: "5%",
      D: "50%"
    },
    answer: "D",
    category: "机器人运动控制"
  },
  {
    id: 181,
    type: "single_choice",
    question: "用RoboDK进行机器人离线仿真前，通常需要对RoboDK的（ ）进行设置，以便顺利地导入三维模型数据和流畅地运行机器人离线仿真。",
    options: {
      A: "安装路径",
      B: "网络",
      C: "存储位置",
      D: "相关参数"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 182,
    type: "single_choice",
    question: "在“ControlPanel”菜单中，选择（）选项可弹出示教器亮度设置选项。",
    options: {
      A: "Network",
      B: "Display",
      C: "Screensaver",
      D: "SoftwareVersion"
    },
    answer: "B",
    category: "示教器操作"
  },
  {
    id: 183,
    type: "single_choice",
    question: "对示教器进行亮度设置时，点击“MAX”将亮度设置到最大，此时亮度数值为（）。",
    options: {
      A: "10",
      B: "20",
      C: "50",
      D: "100"
    },
    answer: "D",
    category: "示教器操作"
  },
  {
    id: 184,
    type: "single_choice",
    question: "开机后，示教器黑屏且无任何显示，不可能的原因是（）。",
    options: {
      A: "示教器电源供电不正常",
      B: "示教器系统故障",
      C: "示教器硬件出现故障",
      D: "各轴电机抱闸"
    },
    answer: "D",
    category: "示教器故障"
  },
  {
    id: 185,
    type: "single_choice",
    question: "T70示教器无故重启，并报\"T70R disconnect\"或\"T70Q disconnect\"，以下操作不正确的是（）。",
    options: {
      A: "检查示教器接头有无插牢",
      B: "轻轻摇晃控制器ETHERNET0网口上的网线，看是否会掉线",
      C: "尝试打开示教器后盖，将内部的接头重新插牢处理",
      D: "控制器预留网口网线接入路由器"
    },
    answer: "D",
    category: "示教器故障"
  },
  {
    id: 186,
    type: "single_choice",
    question: "当开机后示教器停留在等待界面一直无法进入，可能的远因是（）。",
    options: {
      A: "控制器的状态不正确",
      B: "示教器的网线连接不正常",
      C: "示教器的内部IP设置不正确",
      D: "以上全部"
    },
    answer: "D",
    category: "示教器故障"
  },
  {
    id: 187,
    type: "single_choice",
    question: "在菜单中点击（）图标，可弹出“编码器清零”选项。",
    options: {
      A: "用户管理",
      B: "设置",
      C: "变量",
      D: "文件夹"
    },
    answer: "A",
    category: "机器人维护"
  },
  {
    id: 188,
    type: "single_choice",
    question: "机器人标零操作时需创建标零程序，使用（）指令执行标零操作。",
    options: {
      A: "RefRobotAxis",
      B: "RefRobotAxisAsync",
      C: "WaitRefFinished",
      D: "AXISPOS"
    },
    answer: "A",
    category: "机器人标定"
  },
  {
    id: 189,
    type: "single_choice",
    question: "CAD数据导入的精度设置主要有表面直线精度、表面角精度和（ ）。",
    options: {
      A: "曲面精度",
      B: "曲线精度",
      C: "多边形精度",
      D: "三角形精度"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 190,
    type: "single_choice",
    question: "CAD导入精度的设置是在option对话框中的（）选项卡。",
    options: {
      A: "CAD",
      B: "DISPLAY",
      C: "MOTION",
      D: "CAM"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 191,
    type: "single_choice",
    question: "RoboDK的显示选项中，（）表示最佳性能。",
    options: {
      A: "best speed",
      B: "best quality",
      C: "best performance",
      D: "best path"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 192,
    type: "single_choice",
    question: "加载最近的文件和工作站快捷键是（）。",
    options: {
      A: "Alt",
      B: "Alt $^+$ Shift",
      C: "Ctrl+P",
      D: "Ctrl+1"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 193,
    type: "single_choice",
    question: "常用的三维模型数据格式是IGES和（）。",
    options: {
      A: "bin",
      B: "hex",
      C: "step",
      D: "docx"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 194,
    type: "single_choice",
    question: "AutoCAD软件的二维设计文件后缀名是（）。",
    options: {
      A: "bmp",
      B: "CAD",
      C: "*.dwg",
      D: "wmf"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 195,
    type: "single_choice",
    question: "RoboDK软件一般可以从（）获得。",
    options: {
      A: "RoboDK官网",
      B: "淘宝购买",
      C: "网盘下载",
      D: "论坛下载"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 196,
    type: "single_choice",
    question: "RoboDK的视图操作及快捷键主要在菜单栏中（）一栏。",
    options: {
      A: "“file”",
      B: "“edit”",
      C: "“view”",
      D: "“help”"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 197,
    type: "single_choice",
    question: "视图操作包括选择、移动、旋转、缩放，通常使用（）完成这些操作。",
    options: {
      A: "摇杆",
      B: "体感输入",
      C: "手写笔",
      D: "鼠标"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 198,
    type: "single_choice",
    question: "相对彼此，移动参考坐标系、物体或者机器人快捷键是（）。",
    options: {
      A: "Alt",
      B: "Alt $^+$ Shift",
      C: "Ctrl+P",
      D: "Ctrl+1"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 199,
    type: "single_choice",
    question: "调整参考坐标系快捷键是（）。",
    options: {
      A: "Alt",
      B: "Alt $^+$ Shift",
      C: "Ctrl+P",
      D: "Ctrl+1"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 200,
    type: "single_choice",
    question: "当工作站和工件导入完成后，操作人员必须导入相应型号的机器人模型，RoboDK中机器人模型文件格式是（）。",
    options: {
      A: "*.robot",
      B: "*.3ds",
      C: "*.igs",
      D: "dwg"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 201,
    type: "single_choice",
    question: "RoboDK的（）主要用于演示机器人仿真运动。",
    options: {
      A: "菜单栏",
      B: "仿真区域",
      C: "工具栏",
      D: "项目栏"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 202,
    type: "single_choice",
    question: "要移动RoboDK的视图，应（）并移动鼠标。",
    options: {
      A: "按住中键",
      B: "按住左键",
      C: "按住右键",
      D: "同时按住左右键"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 203,
    type: "single_choice",
    question: "基坐标系固定于机器人底座（）。",
    options: {
      A: "中心",
      B: "左边",
      C: "右边",
      D: "前面"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 204,
    type: "single_choice",
    question: "RoboDK的截屏快捷键是（）。",
    options: {
      A: "Alt",
      B: "Alt $^+$ Shift",
      C: "Ctrl+P",
      D: "Ctrl+1"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 205,
    type: "single_choice",
    question: "RoboDK设置显示比例参数，一般设置（）。",
    options: {
      A: "0或0.5",
      B: "5或10",
      C: "2或3",
      D: "1或0.5"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 206,
    type: "single_choice",
    question: "RoboDK中导入的三维数模的位置信息都是相对于某一（）而言的。",
    options: {
      A: "参考轴",
      B: "参考平面",
      C: "参考坐标系",
      D: "参考三维空间"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 207,
    type: "single_choice",
    question: "在布局过程中，要设置工件对象的位置参数应（）。",
    options: {
      A: "右击对象",
      B: "双击对象",
      C: "按回车键",
      D: "按空格键"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 208,
    type: "single_choice",
    question: "将工具模型安装到机器人上后，可以通过右键单击，选择（）将工具保存为*.tool下次可以直接使用。",
    options: {
      A: "export",
      B: "save as",
      C: "copy",
      D: "open"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 209,
    type: "single_choice",
    question: "RoboDK软件中校准工具坐标系的第一步是（ )。",
    options: {
      A: "移动机器人姿态",
      B: "打开“CalibrateToolFrame(TCP)”面板",
      C: "找一个参考点",
      D: "记录姿态点"
    },
    answer: "C",
    category: "机器人标定"
  },
  {
    id: 210,
    type: "single_choice",
    question: "在RoboDK中进行TCP校准，需要示教（）个点。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "D",
    category: "机器人标定"
  },
  {
    id: 211,
    type: "single_choice",
    question: "机器人夹持工件的工具在选择时主要考虑（）。",
    options: {
      A: "工件形状和材质",
      B: "机器人法兰",
      C: "夹具价格",
      D: "夹具驱动方式"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 212,
    type: "single_choice",
    question: "CalibrateToolFrame是指（）。",
    options: {
      A: "校准基坐标系",
      B: "校准工具坐标系",
      C: "校准工件坐标系",
      D: "校准关节坐标系"
    },
    answer: "B",
    category: "机器人标定"
  },
  {
    id: 213,
    type: "single_choice",
    question: "创建仿真程序，主要是根据工作站的（）。",
    options: {
      A: "规模大小",
      B: "机器人品牌",
      C: "通讯方式",
      D: "工作流程"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 214,
    type: "single_choice",
    question: "在仿真中释放物料对应的选项是（）。",
    options: {
      A: "OFF",
      B: "“Attach Object”",
      C: "“Detach Object”",
      D: "ON"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 215,
    type: "single_choice",
    question: "创建目标点之前先要明确（）。",
    options: {
      A: "工件坐标系",
      B: "工具坐标系",
      C: "大地坐标系",
      D: "轴坐标系"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 216,
    type: "single_choice",
    question: "勾选目标点（）选项可以显示/隐藏目标点。",
    options: {
      A: "“Cartesian target”",
      B: "“Joint target”",
      C: "“Visible”",
      D: "“option”"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 217,
    type: "single_choice",
    question: "目标点的数值可以通过打开（）选项来修改。",
    options: {
      A: "“Cartesian target”",
      B: "“Joint target”",
      C: "“option”",
      D: "“Visible”"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 218,
    type: "single_choice",
    question: "保存工作站时默认后缀为（），不可手动修改为其他后缀。",
    options: {
      A: "*.rbt",
      B: "*.rdk",
      C: "*.stu",
      D: "*.sta"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 219,
    type: "single_choice",
    question: "添加移动语句时，RoboDK默认会给你新建（）。",
    options: {
      A: "一个目标点",
      B: "一个过渡点",
      C: "两个目标点",
      D: "两个过渡点"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 220,
    type: "single_choice",
    question: "“Attach Object”是指（）。",
    options: {
      A: "添加工具",
      B: "释放工具",
      C: "抓取工件",
      D: "释放工件"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 221,
    type: "single_choice",
    question: "“Pause Instruction”是指（）。",
    options: {
      A: "中断指令",
      B: "条件指令",
      C: "等待指令",
      D: "测试指令"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 222,
    type: "single_choice",
    question: "（）是RoboDK最主要的功能。",
    options: {
      A: "离线仿真",
      B: "模型设计",
      C: "数据恢复",
      D: "通信管理"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 223,
    type: "single_choice",
    question: "运行仿真程序，在虚拟环境中真实模拟实际工作站的（）。",
    options: {
      A: "电气性能",
      B: "工作流程",
      C: "机械性能",
      D: "损耗情况"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 224,
    type: "single_choice",
    question: "RoboDK通过（）扩展后处理器，可以直接生成对应品牌机器人的离线程序。",
    options: {
      A: "VB API",
      B: "C# API",
      C: "JAVA API",
      D: "Python API"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 225,
    type: "single_choice",
    question: "为了确保程序能在实际机器人运行，一般RoboDK的显示语言应选择（）。",
    options: {
      A: "Chinese",
      B: "Japan",
      C: "English",
      D: "French"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 226,
    type: "single_choice",
    question: "选中创建的仿真程序，按（）可以修改程序名。",
    options: {
      A: "F5",
      B: "F4",
      C: "F3",
      D: "F2"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 227,
    type: "single_choice",
    question: "编辑仿真程序，主要包括坐标系和目标点的创建、（）。",
    options: {
      A: "程序命名",
      B: "程序轨迹规划",
      C: "模型设计",
      D: "机器人系统校准"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 228,
    type: "single_choice",
    question: "要在RoboDK中显示程序路径，应选择（）菜单选项。",
    options: {
      A: "“Run”",
      B: "“Display path”",
      C: "“Show Instruction”",
      D: "“Loop”"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 229,
    type: "single_choice",
    question: "设置对象的参考坐标系函数是（）。",
    options: {
      A: "setParent(parent)",
      B: "setFrame(frame)",
      C: "setTool(tool)",
      D: "setSpeed()"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 230,
    type: "single_choice",
    question: "RoboDK可以通过激光跟踪传感器或立体摄像机，获得机器人的相关数据，得到机器人的（）报告。",
    options: {
      A: "性能精度",
      B: "能耗等级",
      C: "噪音等级",
      D: "平均无故障时间"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 231,
    type: "single_choice",
    question: "《工业机器人性能规范及其试验方法》代号为（）。",
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
    id: 232,
    type: "single_choice",
    question: "位姿准确度和位姿重复性属于（）测试。",
    options: {
      A: "能耗",
      B: "动态",
      C: "寿命",
      D: "静态"
    },
    answer: "D",
    category: "机器人性能测试"
  },
  {
    id: 233,
    type: "single_choice",
    question: "最小定位时间属于（）测试。",
    options: {
      A: "静态",
      B: "动态",
      C: "噪音等级",
      D: "能耗"
    },
    answer: "B",
    category: "机器人性能测试"
  },
  {
    id: 234,
    type: "single_choice",
    question: "离线编程技术的发展要求机器人必须具备很高的（）。",
    options: {
      A: "响应速度",
      B: "相对定位精度",
      C: "绝对定位精度",
      D: "结构强度"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 235,
    type: "single_choice",
    question: "机器人（）模型用于建立机器人关节空间和工作空间（笛卡尔空间）的映射关系。",
    options: {
      A: "计算机学",
      B: "机械学",
      C: "电学",
      D: "运动学"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 236,
    type: "single_choice",
    question: "用DH模型描述机器人相邻连杆坐标系的变换只需要（）个参数。",
    options: {
      A: "4",
      B: "5",
      C: "3",
      D: "6"
    },
    answer: "A",
    category: "机器人运动学"
  },
  {
    id: 237,
    type: "single_choice",
    question: "得到修正的DH参数和减速比后，更新（）内部参数即可进行参数补偿。",
    options: {
      A: "示教器",
      B: "PLC",
      C: "控制器",
      D: "触摸屏"
    },
    answer: "C",
    category: "机器人标定"
  },
  {
    id: 238,
    type: "single_choice",
    question: "在（）的示教类应用中只要编码器、减速器精度足够高即可省去标定工作。",
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
    id: 239,
    type: "single_choice",
    question: "大多数的工业机器人对关节减速机的旋转角精度要求达到（）级。",
    options: {
      A: "一",
      B: "度",
      C: "分",
      D: "秒"
    },
    answer: "D",
    category: "机器人精度"
  },
  {
    id: 240,
    type: "single_choice",
    question: "影响机器人绝对精度的主要误差源是机器人的杆件（）过程中产生的几何误差。",
    options: {
      A: "使用",
      B: "设计",
      C: "加工和装配",
      D: "维修"
    },
    answer: "C",
    category: "机器人精度"
  },
  {
    id: 241,
    type: "single_choice",
    question: "标定关节脉冲量和角度值的映射关系需要获取脉冲零位、关节角度偏置和( )。",
    options: {
      A: "减速比",
      B: "脉冲数与单位角度的比例",
      C: "编码器分辨率",
      D: "驱动器功率"
    },
    answer: "A",
    category: "机器人标定"
  },
  {
    id: 242,
    type: "single_choice",
    question: "（）指令用于标定回零位置。",
    options: {
      A: "ptp",
      B: "RefRobotAxis",
      C: "lin",
      D: "cire"
    },
    answer: "B",
    category: "机器人标定"
  },
  {
    id: 243,
    type: "single_choice",
    question: "仅在工业机器人得到充分和正确（）时，它的使用效果才会最好。",
    options: {
      A: "编程",
      B: "示教",
      C: "维修",
      D: "标定零点"
    },
    answer: "D",
    category: "机器人标定"
  },
  {
    id: 244,
    type: "single_choice",
    question: "机器人机构能够独立运动的（）数目，称为机器人机构的运动自由度。",
    options: {
      A: "方向",
      B: "关节",
      C: "电机",
      D: "工具"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 245,
    type: "single_choice",
    question: "工作中要保持激情与自律，下列哪些行为是不对的( )。",
    options: {
      A: "只要感觉有困难的工作就交给更有能力的人，只做自己擅长的事",
      B: "不断找机会历练自己以提升能力",
      C: "远离抱怨",
      D: "遇到问题要迎难而上，能力才会得到提高"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 246,
    type: "single_choice",
    question: "关于心态和沟通的关系，下列表述中不正确的是( )。",
    options: {
      A: "日常工作与生活中，会有心态与沟通脱节的情况出现",
      B: "心态不会影响一个人的沟通方式",
      C: "可以通过调整沟通方式来影响和修炼自己的心态",
      D: "一个人的心态可以通过沟通体现出来"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 247,
    type: "single_choice",
    question: "人生价值包括自我价值和社会价值两个方面，其中衡量一个人社会价值的标准是( )。",
    options: {
      A: "个人拥有财富的多少",
      B: "个人对社会奉献的多少",
      C: "个人所从事的职业是否重要",
      D: "个人的行为动机是否高尚"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 248,
    type: "single_choice",
    question: "从法律的本质看，法律所体现的是（",
    options: {
      A: "绝大多数人的意志",
      B: "人民的意志和利益",
      C: "统治阶级的意志",
      D: "年满18周岁的全体公民的意志"
    },
    answer: "C",
    category: "法律法规"
  },
  {
    id: 249,
    type: "single_choice",
    question: "道德最突出最重要的社会功能是（",
    options: {
      A: "激励功能",
      B: "认识功能",
      C: "调节功能",
      D: "导向功能"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 250,
    type: "single_choice",
    question: "新的国家安全观不仅包括政治安全和国防安全，还包括经济安全、科技安全、文化安全、生态安全和社会公共安全等内容，其中（）是国家安全的支柱与核心。",
    options: {
      A: "政治安全和国防安全",
      B: "经济和科技安全",
      C: "文化安全和生态安全",
      D: "国防安全和社会公共安全"
    },
    answer: "A",
    category: "法律法规"
  },
  {
    id: 251,
    type: "single_choice",
    question: "安装在主板上的电池的更换周期为(",
    options: {
      A: "两年一次",
      B: "当主板上的指示灯亮时",
      C: "每年一次",
      D: "看情况"
    },
    answer: "A",
    category: "计算机基础"
  },
  {
    id: 252,
    type: "single_choice",
    question: "对于有规律的轨迹，仅示教几个特征点，计算机就能利用（）获得中间点的坐标。",
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
    id: 253,
    type: "single_choice",
    question: "机器人的示教方式，有（）种方式。$①$ 直接示教 $(2)$ 间接示教 $(3)$ 远程示教",
    options: {
      A: "$①②③$",
      B: "①②",
      C: "①③",
      D: "②③"
    },
    answer: "A",
    category: "机器人示教"
  },
  {
    id: 254,
    type: "single_choice",
    question: "在机器人动作范围内示教时，需要遵守的事项有（）。$①$ 保持从正面观看机器人 $(2)$ 遵守操作步骤 $(3)$ 考虑机器人突然向自己所处方位运行时的应变方案 $(4)$ 确保设置躲避场所，以防万一",
    options: {
      A: "$①②③④$",
      B: "①②③",
      C: "①②④",
      D: "①③④"
    },
    answer: "A",
    category: "机器人安全"
  },
  {
    id: 255,
    type: "single_choice",
    question: "示教盒属于（）机器人子系统。",
    options: {
      A: "驱动系统",
      B: "机器人-环境交互系统",
      C: "人机交互系统",
      D: "控制系统"
    },
    answer: "C",
    category: "机器人系统"
  },
  {
    id: 256,
    type: "single_choice",
    question: "对于T1方式，若示教速度为2000mm/sec的情况下，若倍率为100%，速度被限制为哪个。",
    options: {
      A: "200mm/sec",
      B: "100mm/sec",
      C: "250mm/sec",
      D: "500mm/sec"
    },
    answer: "C",
    category: "机器人示教"
  },
  {
    id: 257,
    type: "single_choice",
    question: "示教器示教编程的优点有（）。 $①$ 现场操作，简单直接 $(2)$ 编程周期短 $(3)$ 控制精确 $(4)$ 同步性好 $(5)$ 危险性低",
    options: {
      A: "$①②③④⑤$",
      B: "①②③④",
      C: "①②③",
      D: "①②"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 258,
    type: "single_choice",
    question: "示教编程广泛应用于（）的应用领域",
    options: {
      A: "轨迹简单.精度不高",
      B: "轨迹复杂.精度高",
      C: "轨迹复杂.精度不高",
      D: "轨迹简单.精度高"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 259,
    type: "single_choice",
    question: "设备如长时间不使用，需要将机器人运动到（），并用防护装置罩住各设备。",
    options: {
      A: "程序原点",
      B: "作业原点",
      C: "指定位置",
      D: "初始位置"
    },
    answer: "D",
    category: "机器人维护"
  },
  {
    id: 260,
    type: "single_choice",
    question: "工业机器人搬运的对象是吸盘工具，气爪拾放吸盘工具时，负载是（）",
    options: {
      A: "不变化",
      B: "先减少后增加",
      C: "不清楚",
      D: "先增加后减少"
    },
    answer: "B",
    category: "机器人应用"
  },
  {
    id: 261,
    type: "single_choice",
    question: "机器人作业过程分两类，一类是非接触式，一类式接触式。下面哪钟机器人属于非接触式作业机器人。（）",
    options: {
      A: "拧螺丝机器人",
      B: "装配机器人",
      C: "抛光机器人",
      D: "弧焊机器人"
    },
    answer: "D",
    category: "机器人应用"
  },
  {
    id: 262,
    type: "single_choice",
    question: "点位控制方式（PTP)的主要技术指标是：（）。",
    options: {
      A: "定位精度和运动时间",
      B: "定位精度和运动速度",
      C: "运动速度和运动时间",
      D: "位置轨迹和运动速度"
    },
    answer: "A",
    category: "机器人控制"
  },
  {
    id: 263,
    type: "single_choice",
    question: "连续运动控制方式（CP）的主要技术指标是：（）。",
    options: {
      A: "定位精度和运动时间",
      B: "位姿轨迹跟踪精度和平稳性",
      C: "位姿轨迹和平稳性",
      D: "位姿轨迹跟踪精度和运动时间"
    },
    answer: "B",
    category: "机器人控制"
  },
  {
    id: 264,
    type: "single_choice",
    question: "要在生产中引入工业机器人系统的工程，在制造与试运行阶段不包括（）。",
    options: {
      A: "制作准备",
      B: "制作与采购",
      C: "安装与试运行",
      D: "运转率检查"
    },
    answer: "D",
    category: "机器人系统集成"
  },
  {
    id: 265,
    type: "single_choice",
    question: "装配机器人的规格确定，不考虑以下哪个问题。（）",
    options: {
      A: "作业行程",
      B: "机器重量",
      C: "工作速度",
      D: "承载能力"
    },
    answer: "B",
    category: "机器人应用"
  },
  {
    id: 266,
    type: "single_choice",
    question: "在汽车焊接生产线上引入机器人的主要原因不包括哪一条。（）",
    options: {
      A: "可以提高汽车产量",
      B: "适应汽车产品的多样化",
      C: "可以提高产品质量",
      D: "能提高生产率"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 267,
    type: "single_choice",
    question: "焊接工艺评定是指（）。",
    options: {
      A: "在产品施焊前对产品焊接工艺指导书进行验证的试验，通过焊接工艺评定确定正确的焊接工艺",
      B: "从焊接工艺上对焊接质量进行评定",
      C: "焊接工艺评定是对母材的焊接性能进行试验",
      D: "焊接工艺评定是指在产品施焊后对焊接工艺进行验证"
    },
    answer: "A",
    category: "焊接工艺"
  },
  {
    id: 268,
    type: "single_choice",
    question: "焊缝表面不得有裂纹焊瘤等缺陷。对一级、二级焊缝不得存在的缺陷表述不准确的是（）。",
    options: {
      A: "表面气孔",
      B: "夹渣",
      C: "弧坑裂纹",
      D: "接头不良"
    },
    answer: "D",
    category: "焊接工艺"
  },
  {
    id: 269,
    type: "single_choice",
    question: "在“焊后检验”过程中，外观检验是指（）。",
    options: {
      A: "利用低倍放大镜或肉眼观察焊缝表面是否有咬边.夹渣.气孔.裂纹等表面缺陷",
      B: "用焊接检验尺测量焊缝余高.焊瘤.凹陷.错口等",
      C: "检验焊件是否变形",
      D: "以上均正确"
    },
    answer: "D",
    category: "焊接工艺"
  },
  {
    id: 270,
    type: "single_choice",
    question: "焊接用的工业机器人基本上都属于电驱动的（）关节式机器人。",
    options: {
      A: "3轴",
      B: "4轴",
      C: "5轴",
      D: "6轴"
    },
    answer: "D",
    category: "机器人应用"
  },
  {
    id: 271,
    type: "single_choice",
    question: "以下不属于弧焊机器人工作站安全防护设备的是()。",
    options: {
      A: "安全围栏",
      B: "门上的微动开关",
      C: "排烟装置",
      D: "焊装夹具"
    },
    answer: "D",
    category: "机器人安全"
  },
  {
    id: 272,
    type: "single_choice",
    question: "在进行模拟量输入AI地址分配时，不需要分配的一项是（ )。",
    options: {
      A: "机架",
      B: "开始点",
      C: "通道号",
      D: "槽号"
    },
    answer: "B",
    category: "PLC编程"
  },
  {
    id: 273,
    type: "single_choice",
    question: "如果用3个IO数字信号组成一个组输出，那么此输出最大可发送的数值为(）。",
    options: {
      A: "3",
      B: "6",
      C: "8",
      D: "9"
    },
    answer: "C",
    category: "PLC编程"
  },
  {
    id: 274,
    type: "single_choice",
    question: "机器人进行下列I/O量的检测或控制时，需要添加模拟量I/O扩展板的一项是（ )。",
    options: {
      A: "电磁阀控制",
      B: "温度检测",
      C: "光电限位开关检测",
      D: "指示灯显示"
    },
    answer: "B",
    category: "PLC应用"
  },
  {
    id: 275,
    type: "single_choice",
    question: "在程序中，以下内容不属于全局变量的是（",
    options: {
      A: "“Tag_1”",
      B: "“Data”.Record\"",
      C: "#Globle_Var",
      D: "“Data”ST.Var"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 276,
    type: "single_choice",
    question: "下列指令中，不属于预处理指令的是（",
    options: {
      A: "WaitIsFinished",
      B: "RETURN",
      C: "RUN",
      D: "KILL"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 277,
    type: "single_choice",
    question: "当STEP或IGES文件过大时，可以通过Tools→Options→（）→Fast importsettings操作加快导入的速度。",
    options: {
      A: "RUN",
      B: "LOAD",
      C: "ADV",
      D: "CAD"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 278,
    type: "single_choice",
    question: "要使用SolidWorks制作的模型，需要（）。",
    options: {
      A: "修改后缀",
      B: "升级软件版本",
      C: "SolidWorks的RoboDK插件",
      D: "与SolidWorks洽谈"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 279,
    type: "single_choice",
    question: "通过选择实用程序，可以从（）或文本文件在RoboDK中导入曲线→口入曲线。",
    options: {
      A: "bin",
      B: "CSV文件",
      C: "xls",
      D: "mdb"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 280,
    type: "single_choice",
    question: "在机器人控制面板可以通过（）关节轴点动控制或直接输入各关节轴角度值来移动机器人位置。",
    options: {
      A: "Joint axis run",
      B: "Joint motor jog",
      C: "Joint axis jog",
      D: "Joint rotate jog"
    },
    answer: "C",
    category: "机器人控制"
  },
  {
    id: 281,
    type: "single_choice",
    question: "选择“程序Program→Set Tool Frame Instruction”即可设置（）。",
    options: {
      A: "用户坐标系",
      B: "工具坐标系",
      C: "工件坐标系",
      D: "基座标系"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 282,
    type: "single_choice",
    question: "每当在RoboDK中加载一台新的机器人时，一个新的（）会随之出现，用于表达机器人的基坐标。",
    options: {
      A: "工件坐标",
      B: "工具坐标",
      C: "参考坐标",
      D: "外部坐标"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 283,
    type: "single_choice",
    question: "（）个RoboDK项目可以同时存在于RoboDK中。",
    options: {
      A: "多",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 284,
    type: "single_choice",
    question: "参考坐标系用于定义一个项目的（），相对于另一已知位置与方向的项目。",
    options: {
      A: "尺寸",
      B: "方向",
      C: "距离",
      D: "方位"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 285,
    type: "single_choice",
    question: "使用More options…菜单可以改变物体的（）、按比例缩放尺寸、或者根据自身的参考坐标移动它的几何位置。",
    options: {
      A: "密度",
      B: "尺寸",
      C: "颜色",
      D: "材质"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 286,
    type: "single_choice",
    question: "可以选择两个或多个物体（按Ctrl键），右键单击并选择（），将它们合并为一个物体。",
    options: {
      A: "Merge",
      B: "Group",
      C: "Add",
      D: "Stack"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 287,
    type: "single_choice",
    question: "在工作站树型结构或者3D视图中（）一个物体，可以打开它的设置窗口。",
    options: {
      A: "按下滚轮",
      B: "右键点击",
      C: "单击",
      D: "双击"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 288,
    type: "single_choice",
    question: "RoboDK允许用户使用（）点标定TCP。使用的点越多，标定结果的准确性越高。",
    options: {
      A: "3点",
      B: "无限多的",
      C: "4点",
      D: "6点"
    },
    answer: "C",
    category: "机器人标定"
  },
  {
    id: 289,
    type: "single_choice",
    question: "（）机器人工具可以查看该工具的更多信息",
    options: {
      A: "双击",
      B: "右键点击",
      C: "按下滚轮",
      D: "单击"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 290,
    type: "single_choice",
    question: "点击More options…可通过（）改变机器人工具的大小",
    options: {
      A: "表达式",
      B: "比例系数",
      C: "描述方程",
      D: "数组"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 291,
    type: "single_choice",
    question: "产生焊缝尺寸不符合要求的主要原因是焊件坡口开得不当或装配间隙不均匀及（）选择不当。",
    options: {
      A: "焊接工艺参数",
      B: "焊接方法",
      C: "焊接电弧",
      D: "焊接线能量"
    },
    answer: "A",
    category: "焊接工艺"
  },
  {
    id: 292,
    type: "single_choice",
    question: "焊接过种中，熔化金属自坡口背面流出，形成穿孔的缺陷称为（）。",
    options: {
      A: "烧穿",
      B: "焊瘤",
      C: "咬边",
      D: "凹坑"
    },
    answer: "A",
    category: "焊接工艺"
  },
  {
    id: 293,
    type: "single_choice",
    question: "世界各国生产的焊接用机器人基本上都属关节机器人，绝大部分有6个轴。其中（）可将末端工具送到不同的空间位置。",
    options: {
      A: "1轴",
      B: "2轴",
      C: "3轴",
      D: "以上全部"
    },
    answer: "D",
    category: "机器人应用"
  },
  {
    id: 294,
    type: "single_choice",
    question: "如果用外部信号控制机器人运行，机器人的工作模式应选择（）。",
    options: {
      A: "操作模式",
      B: "编辑模式",
      C: "管理模式",
      D: "远程模式"
    },
    answer: "D",
    category: "机器人控制"
  },
  {
    id: 295,
    type: "single_choice",
    question: "真空吸盘要求工件表面（）、干燥清洁，同时气密性好。",
    options: {
      A: "粗糙",
      B: "凸凹不平",
      C: "平缓突起",
      D: "平整光滑"
    },
    answer: "D",
    category: "机器人应用"
  },
  {
    id: 296,
    type: "single_choice",
    question: "同步带传动属于（）传动，适合于在电动机和高速比减速器之间使用。",
    options: {
      A: "高惯性",
      B: "低惯性",
      C: "高速比",
      D: "大转矩"
    },
    answer: "B",
    category: "机械传动"
  },
  {
    id: 297,
    type: "single_choice",
    question: "机器人外部传感器不包括（）传感器。",
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
    id: 298,
    type: "single_choice",
    question: "焊接机器人的焊接作业主要包括（）。",
    options: {
      A: "点焊和弧焊",
      B: "间断焊和连续焊",
      C: "平焊和竖焊",
      D: "气体保护焊和氩弧焊"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 299,
    type: "single_choice",
    question: "用于检测物体接触面之间相对运动大小和方向的传感器是（）。",
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
    id: 300,
    type: "single_choice",
    question: "使用焊枪示教前，检查焊枪的均压装置是否良好，动作是否正常，同时对电极头的要求是（）。",
    options: {
      A: "更换新的电极头",
      B: "使用磨耗量大的电极头",
      C: "新的或旧的都行",
      D: "使用磨耗量小的电极头"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 301,
    type: "single_choice",
    question: "正常联动生产时，机器人示教编程器上安全模式不应该打到（）位置上。",
    options: {
      A: "操作模式",
      B: "编辑模式",
      C: "管理模式",
      D: "安全模式"
    },
    answer: "D",
    category: "机器人安全"
  },
  {
    id: 302,
    type: "single_choice",
    question: "在伺服电机的伺服控制器中，为了获得高性能的控制效果，一般具有3个反馈回路，分别是：（）。 $①$ 电压环 $(2)$ 电流环 $(3)$ 功率环 $(4)$ 速度环 $(5)$ 位置环 $(6)$ 加速度环",
    options: {
      A: "$①③⑥$",
      B: "②④⑥",
      C: "②④⑤",
      D: "①④⑤"
    },
    answer: "C",
    category: "伺服控制"
  },
  {
    id: 303,
    type: "single_choice",
    question: "CCD（Charge Coupled Device）摄像头输出信号为（）帧/秒。",
    options: {
      A: "20",
      B: "25",
      C: "30",
      D: "50"
    },
    answer: "B",
    category: "机器视觉"
  },
  {
    id: 304,
    type: "single_choice",
    question: "测速发电机的输出信号为（）。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "开关量",
      D: "脉冲量"
    },
    answer: "A",
    category: "传感器技术"
  },
  {
    id: 305,
    type: "single_choice",
    question: "如果末端装置、工具或周围环境的刚性很高，那么机械手要执行与某个表面有接触的操作作业将会变得相当困难。此时应该考虑（）。",
    options: {
      A: "柔顺控制",
      B: "PID控制",
      C: "模糊控制",
      D: "最优控制"
    },
    answer: "A",
    category: "机器人控制"
  },
  {
    id: 306,
    type: "single_choice",
    question: "（）是指机器人不进行任何运算，依靠传感器的输入信息能够直接执行机器人下一步任务的能力。",
    options: {
      A: "运算",
      B: "控制",
      C: "决策",
      D: "通信"
    },
    answer: "C",
    category: "机器人智能"
  },
  {
    id: 307,
    type: "single_choice",
    question: "伺服控制系统一般包括控制器、被控对象、执行环节、比较环节和（）。",
    options: {
      A: "换向结构",
      B: "转换电路",
      C: "存储电路",
      D: "检测环节"
    },
    answer: "D",
    category: "伺服控制"
  },
  {
    id: 308,
    type: "single_choice",
    question: "伺服控制系统一般包括控制器、被控对象、执行环节、比较环节和（）。",
    options: {
      A: "换向结构",
      B: "转换电路",
      C: "存储电路",
      D: "检测环节"
    },
    answer: "D",
    category: "伺服控制"
  },
  {
    id: 309,
    type: "single_choice",
    question: "机器人外部传感器不包括（）传感器。",
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
    id: 310,
    type: "single_choice",
    question: "用于检测物体接触面之间相对运动大小和方向的传感器是（）。",
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
    id: 311,
    type: "single_choice",
    question: "测速发电机的输出信号为（）。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "开关量",
      D: "脉冲量"
    },
    answer: "A",
    category: "传感器技术"
  },
  {
    id: 312,
    type: "single_choice",
    question: "CCD（Charge Coupled Device）摄像头输出信号为（）帧/秒。",
    options: {
      A: "20",
      B: "25",
      C: "30",
      D: "50"
    },
    answer: "B",
    category: "机器视觉"
  },
  {
    id: 313,
    type: "single_choice",
    question: "在伺服电机的伺服控制器中，为了获得高性能的控制效果，一般具有3个反馈回路，分别是：（）。 $①$ 电压环 $(2)$ 电流环 $(3)$ 功率环 $(4)$ 速度环 $(5)$ 位置环 $(6)$ 加速度环",
    options: {
      A: "$①③⑥$",
      B: "②④⑥",
      C: "②④⑤",
      D: "①④⑤"
    },
    answer: "C",
    category: "伺服控制"
  },
  {
    id: 314,
    type: "single_choice",
    question: "正常联动生产时，机器人示教编程器上安全模式不应该打到（）位置上。",
    options: {
      A: "操作模式",
      B: "编辑模式",
      C: "管理模式",
      D: "安全模式"
    },
    answer: "D",
    category: "机器人安全"
  },
  {
    id: 315,
    type: "single_choice",
    question: "使用焊枪示教前，检查焊枪的均压装置是否良好，动作是否正常，同时对电极头的要求是（）。",
    options: {
      A: "更换新的电极头",
      B: "使用磨耗量大的电极头",
      C: "新的或旧的都行",
      D: "使用磨耗量小的电极头"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 316,
    type: "single_choice",
    question: "焊接机器人的焊接作业主要包括（）。",
    options: {
      A: "点焊和弧焊",
      B: "间断焊和连续焊",
      C: "平焊和竖焊",
      D: "气体保护焊和氩弧焊"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 317,
    type: "single_choice",
    question: "同步带传动属于（）传动，适合于在电动机和高速比减速器之间使用。",
    options: {
      A: "高惯性",
      B: "低惯性",
      C: "高速比",
      D: "大转矩"
    },
    answer: "B",
    category: "机械传动"
  },
  {
    id: 318,
    type: "single_choice",
    question: "真空吸盘要求工件表面（）、干燥清洁，同时气密性好。",
    options: {
      A: "粗糙",
      B: "凸凹不平",
      C: "平缓突起",
      D: "平整光滑"
    },
    answer: "D",
    category: "机器人应用"
  },
  {
    id: 319,
    type: "single_choice",
    question: "如果用外部信号控制机器人运行，机器人的工作模式应选择（）。",
    options: {
      A: "操作模式",
      B: "编辑模式",
      C: "管理模式",
      D: "远程模式"
    },
    answer: "D",
    category: "机器人控制"
  },
  {
    id: 320,
    type: "single_choice",
    question: "世界各国生产的焊接用机器人基本上都属关节机器人，绝大部分有6个轴。其中（）可将末端工具送到不同的空间位置。",
    options: {
      A: "1轴",
      B: "2轴",
      C: "3轴",
      D: "以上全部"
    },
    answer: "D",
    category: "机器人应用"
  },
  {
    id: 321,
    type: "single_choice",
    question: "焊接过种中，熔化金属自坡口背面流出，形成穿孔的缺陷称为（）。",
    options: {
      A: "烧穿",
      B: "焊瘤",
      C: "咬边",
      D: "凹坑"
    },
    answer: "A",
    category: "焊接工艺"
  },
  {
    id: 322,
    type: "single_choice",
    question: "产生焊缝尺寸不符合要求的主要原因是焊件坡口开得不当或装配间隙不均匀及（）选择不当。",
    options: {
      A: "焊接工艺参数",
      B: "焊接方法",
      C: "焊接电弧",
      D: "焊接线能量"
    },
    answer: "A",
    category: "焊接工艺"
  },
  {
    id: 323,
    type: "single_choice",
    question: "选择“程序Program→Set Tool Frame Instruction”即可设置（）。",
    options: {
      A: "用户坐标系",
      B: "工具坐标系",
      C: "工件坐标系",
      D: "基座标系"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 324,
    type: "single_choice",
    question: "在机器人控制面板可以通过（）关节轴点动控制或直接输入各关节轴角度值来移动机器人位置。",
    options: {
      A: "Joint axis run",
      B: "Joint motor jog",
      C: "Joint axis jog",
      D: "Joint rotate jog"
    },
    answer: "C",
    category: "机器人控制"
  },
  {
    id: 325,
    type: "single_choice",
    question: "通过选择实用程序，可以从（）或文本文件在RoboDK中导入曲线→口入曲线。",
    options: {
      A: "bin",
      B: "CSV文件",
      C: "xls",
      D: "mdb"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 326,
    type: "single_choice",
    question: "要使用SolidWorks制作的模型，需要（）。",
    options: {
      A: "修改后缀",
      B: "升级软件版本",
      C: "SolidWorks的RoboDK插件",
      D: "与SolidWorks洽谈"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 327,
    type: "single_choice",
    question: "当STEP或IGES文件过大时，可以通过Tools→Options→（）→Fast importsettings操作加快导入的速度。",
    options: {
      A: "RUN",
      B: "LOAD",
      C: "ADV",
      D: "CAD"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 328,
    type: "single_choice",
    question: "下列指令中，不属于预处理指令的是（",
    options: {
      A: "WaitIsFinished",
      B: "RETURN",
      C: "RUN",
      D: "KILL"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 329,
    type: "single_choice",
    question: "在程序中，以下内容不属于全局变量的是（",
    options: {
      A: "“Tag_1”",
      B: "“Data”.Record\"",
      C: "#Globle_Var",
      D: "“Data”ST.Var"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 330,
    type: "single_choice",
    question: "机器人进行下列I/O量的检测或控制时，需要添加模拟量I/O扩展板的一项是（ )。",
    options: {
      A: "电磁阀控制",
      B: "温度检测",
      C: "光电限位开关检测",
      D: "指示灯显示"
    },
    answer: "B",
    category: "PLC应用"
  },
  {
    id: 331,
    type: "single_choice",
    question: "如果用3个IO数字信号组成一个组输出，那么此输出最大可发送的数值为(）。",
    options: {
      A: "3",
      B: "6",
      C: "8",
      D: "9"
    },
    answer: "C",
    category: "PLC编程"
  },
  {
    id: 332,
    type: "single_choice",
    question: "在进行模拟量输入AI地址分配时，不需要分配的一项是（ )。",
    options: {
      A: "机架",
      B: "开始点",
      C: "通道号",
      D: "槽号"
    },
    answer: "B",
    category: "PLC编程"
  },
  {
    id: 333,
    type: "single_choice",
    question: "以下不属于弧焊机器人工作站安全防护设备的是()。",
    options: {
      A: "安全围栏",
      B: "门上的微动开关",
      C: "排烟装置",
      D: "焊装夹具"
    },
    answer: "D",
    category: "机器人安全"
  },
  {
    id: 334,
    type: "single_choice",
    question: "焊接用的工业机器人基本上都属于电驱动的（）关节式机器人。",
    options: {
      A: "3轴",
      B: "4轴",
      C: "5轴",
      D: "6轴"
    },
    answer: "D",
    category: "机器人应用"
  },
  {
    id: 335,
    type: "single_choice",
    question: "在“焊后检验”过程中，外观检验是指（）。",
    options: {
      A: "利用低倍放大镜或肉眼观察焊缝表面是否有咬边.夹渣.气孔.裂纹等表面缺陷",
      B: "用焊接检验尺测量焊缝余高.焊瘤.凹陷.错口等",
      C: "检验焊件是否变形",
      D: "以上均正确"
    },
    answer: "D",
    category: "焊接工艺"
  },
  {
    id: 336,
    type: "single_choice",
    question: "焊缝表面不得有裂纹焊瘤等缺陷。对一级、二级焊缝不得存在的缺陷表述不准确的是（）。",
    options: {
      A: "表面气孔",
      B: "夹渣",
      C: "弧坑裂纹",
      D: "接头不良"
    },
    answer: "D",
    category: "焊接工艺"
  },
  {
    id: 337,
    type: "single_choice",
    question: "焊接工艺评定是指（）。",
    options: {
      A: "在产品施焊前对产品焊接工艺指导书进行验证的试验，通过焊接工艺评定确定正确的焊接工艺",
      B: "从焊接工艺上对焊接质量进行评定",
      C: "焊接工艺评定是对母材的焊接性能进行试验",
      D: "焊接工艺评定是指在产品施焊后对焊接工艺进行验证"
    },
    answer: "A",
    category: "焊接工艺"
  },
  {
    id: 338,
    type: "single_choice",
    question: "在汽车焊接生产线上引入机器人的主要原因不包括哪一条。（）",
    options: {
      A: "可以提高汽车产量",
      B: "适应汽车产品的多样化",
      C: "可以提高产品质量",
      D: "能提高生产率"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 339,
    type: "single_choice",
    question: "装配机器人的规格确定，不考虑以下哪个问题。（）",
    options: {
      A: "作业行程",
      B: "机器重量",
      C: "工作速度",
      D: "承载能力"
    },
    answer: "B",
    category: "机器人应用"
  },
  {
    id: 340,
    type: "single_choice",
    question: "要在生产中引入工业机器人系统的工程，在制造与试运行阶段不包括（）。",
    options: {
      A: "制作准备",
      B: "制作与采购",
      C: "安装与试运行",
      D: "运转率检查"
    },
    answer: "D",
    category: "机器人系统集成"
  },
  {
    id: 341,
    type: "single_choice",
    question: "连续运动控制方式（CP）的主要技术指标是：（）。",
    options: {
      A: "定位精度和运动时间",
      B: "位姿轨迹跟踪精度和平稳性",
      C: "位姿轨迹和平稳性",
      D: "位姿轨迹跟踪精度和运动时间"
    },
    answer: "B",
    category: "机器人控制"
  },
  {
    id: 342,
    type: "single_choice",
    question: "点位控制方式（PTP)的主要技术指标是：（）。",
    options: {
      A: "定位精度和运动时间",
      B: "定位精度和运动速度",
      C: "运动速度和运动时间",
      D: "位置轨迹和运动速度"
    },
    answer: "A",
    category: "机器人控制"
  },
  {
    id: 343,
    type: "single_choice",
    question: "机器人作业过程分两类，一类是非接触式，一类式接触式。下面哪钟机器人属于非接触式作业机器人。（）",
    options: {
      A: "拧螺丝机器人",
      B: "装配机器人",
      C: "抛光机器人",
      D: "弧焊机器人"
    },
    answer: "D",
    category: "机器人应用"
  },
  {
    id: 344,
    type: "single_choice",
    question: "工业机器人搬运的对象是吸盘工具，气爪拾放吸盘工具时，负载是（）",
    options: {
      A: "不变化",
      B: "先减少后增加",
      C: "不清楚",
      D: "先增加后减少"
    },
    answer: "B",
    category: "机器人应用"
  },
  {
    id: 345,
    type: "single_choice",
    question: "设备如长时间不使用，需要将机器人运动到（），并用防护装置罩住各设备。",
    options: {
      A: "程序原点",
      B: "作业原点",
      C: "指定位置",
      D: "初始位置"
    },
    answer: "D",
    category: "机器人维护"
  },
  {
    id: 346,
    type: "single_choice",
    question: "示教编程广泛应用于（）的应用领域",
    options: {
      A: "轨迹简单.精度不高",
      B: "轨迹复杂.精度高",
      C: "轨迹复杂.精度不高",
      D: "轨迹简单.精度高"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 347,
    type: "single_choice",
    question: "示教编程广泛应用于（）的应用领域",
    options: {
      A: "轨迹简单.精度不高",
      B: "轨迹复杂.精度高",
      C: "轨迹复杂.精度不高",
      D: "轨迹简单.精度高"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 348,
    type: "single_choice",
    question: "示教盒属于（）机器人子系统。",
    options: {
      A: "驱动系统",
      B: "机器人-环境交互系统",
      C: "人机交互系统",
      D: "控制系统"
    },
    answer: "C",
    category: "机器人系统"
  },
  {
    id: 349,
    type: "single_choice",
    question: "对于T1方式，若示教速度为2000mm/sec的情况下，若倍率为100%，速度被限制为哪个。",
    options: {
      A: "200mm/sec",
      B: "100mm/sec",
      C: "250mm/sec",
      D: "500mm/sec"
    },
    answer: "C",
    category: "机器人示教"
  },
  {
    id: 350,
    type: "single_choice",
    question: "示教编程广泛应用于（）的应用领域",
    options: {
      A: "轨迹简单.精度不高",
      B: "轨迹复杂.精度高",
      C: "轨迹复杂.精度不高",
      D: "轨迹简单.精度高"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 351,
    type: "single_choice",
    question: "对于有规律的轨迹，仅示教几个特征点，计算机就能利用（）获得中间点的坐标。",
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
    id: 352,
    type: "single_choice",
    question: "安装在主板上的电池的更换周期为(",
    options: {
      A: "两年一次",
      B: "当主板上的指示灯亮时",
      C: "每年一次",
      D: "看情况"
    },
    answer: "A",
    category: "计算机基础"
  },
  {
    id: 353,
    type: "single_choice",
    question: "新的国家安全观不仅包括政治安全和国防安全，还包括经济安全、科技安全、文化安全、生态安全和社会公共安全等内容，其中（）是国家安全的支柱与核心。",
    options: {
      A: "政治安全和国防安全",
      B: "经济和科技安全",
      C: "文化安全和生态安全",
      D: "国防安全和社会公共安全"
    },
    answer: "A",
    category: "法律法规"
  },
  {
    id: 354,
    type: "single_choice",
    question: "道德最突出最重要的社会功能是（",
    options: {
      A: "激励功能",
      B: "认识功能",
      C: "调节功能",
      D: "导向功能"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 355,
    type: "single_choice",
    question: "从法律的本质看，法律所体现的是（",
    options: {
      A: "绝大多数人的意志",
      B: "人民的意志和利益",
      C: "统治阶级的意志",
      D: "年满18周岁的全体公民的意志"
    },
    answer: "C",
    category: "法律法规"
  },
  {
    id: 356,
    type: "single_choice",
    question: "人生价值包括自我价值和社会价值两个方面，其中衡量一个人社会价值的标准是( )。",
    options: {
      A: "个人拥有财富的多少",
      B: "个人对社会奉献的多少",
      C: "个人所从事的职业是否重要",
      D: "个人的行为动机是否高尚"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 357,
    type: "single_choice",
    question: "关于心态和沟通的关系，下列表述中不正确的是( )。",
    options: {
      A: "日常工作与生活中，会有心态与沟通脱节的情况出现",
      B: "心态不会影响一个人的沟通方式",
      C: "可以通过调整沟通方式来影响和修炼自己的心态",
      D: "一个人的心态可以通过沟通体现出来"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 358,
    type: "single_choice",
    question: "工作中要保持激情与自律，下列哪些行为是不对的( )。",
    options: {
      A: "只要感觉有困难的工作就交给更有能力的人，只做自己擅长的事",
      B: "不断找机会历练自己以提升能力",
      C: "远离抱怨",
      D: "遇到问题要迎难而上，能力才会得到提高"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 359,
    type: "single_choice",
    question: "机器人机构能够独立运动的（）数目，称为机器人机构的运动自由度。",
    options: {
      A: "方向",
      B: "关节",
      C: "电机",
      D: "工具"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 360,
    type: "single_choice",
    question: "仅在工业机器人得到充分和正确（）时，它的使用效果才会最好。",
    options: {
      A: "编程",
      B: "示教",
      C: "维修",
      D: "标定零点"
    },
    answer: "D",
    category: "机器人标定"
  },
  {
    id: 361,
    type: "single_choice",
    question: "（）指令用于标定回零位置。",
    options: {
      A: "ptp",
      B: "RefRobotAxis",
      C: "lin",
      D: "cire"
    },
    answer: "B",
    category: "机器人标定"
  },
  {
    id: 362,
    type: "single_choice",
    question: "标定关节脉冲量和角度值的映射关系需要获取脉冲零位、关节角度偏置和( )。",
    options: {
      A: "减速比",
      B: "脉冲数与单位角度的比例",
      C: "编码器分辨率",
      D: "驱动器功率"
    },
    answer: "A",
    category: "机器人标定"
  },
  {
    id: 363,
    type: "single_choice",
    question: "影响机器人绝对精度的主要误差源是机器人的杆件（）过程中产生的几何误差。",
    options: {
      A: "使用",
      B: "设计",
      C: "加工和装配",
      D: "维修"
    },
    answer: "C",
    category: "机器人精度"
  },
  {
    id: 364,
    type: "single_choice",
    question: "大多数的工业机器人对关节减速机的旋转角精度要求达到（）级。",
    options: {
      A: "一",
      B: "度",
      C: "分",
      D: "秒"
    },
    answer: "D",
    category: "机器人精度"
  },
  {
    id: 365,
    type: "single_choice",
    question: "在（）的示教类应用中只要编码器、减速器精度足够高即可省去标定工作。",
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
    id: 366,
    type: "single_choice",
    question: "得到修正的DH参数和减速比后，更新（）内部参数即可进行参数补偿。",
    options: {
      A: "示教器",
      B: "PLC",
      C: "控制器",
      D: "触摸屏"
    },
    answer: "C",
    category: "机器人标定"
  },
  {
    id: 367,
    type: "single_choice",
    question: "用DH模型描述机器人相邻连杆坐标系的变换只需要（）个参数。",
    options: {
      A: "4",
      B: "5",
      C: "3",
      D: "6"
    },
    answer: "A",
    category: "机器人运动学"
  },
  {
    id: 368,
    type: "single_choice",
    question: "机器人（）模型用于建立机器人关节空间和工作空间（笛卡尔空间）的映射关系。",
    options: {
      A: "计算机学",
      B: "机械学",
      C: "电学",
      D: "运动学"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 369,
    type: "single_choice",
    question: "离线编程技术的发展要求机器人必须具备很高的（）。",
    options: {
      A: "响应速度",
      B: "相对定位精度",
      C: "绝对定位精度",
      D: "结构强度"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 370,
    type: "single_choice",
    question: "最小定位时间属于（）测试。",
    options: {
      A: "静态",
      B: "动态",
      C: "噪音等级",
      D: "能耗"
    },
    answer: "B",
    category: "机器人性能测试"
  },
  {
    id: 371,
    type: "single_choice",
    question: "位姿准确度和位姿重复性属于（）测试。",
    options: {
      A: "能耗",
      B: "动态",
      C: "寿命",
      D: "静态"
    },
    answer: "D",
    category: "机器人性能测试"
  },
  {
    id: 372,
    type: "single_choice",
    question: "《工业机器人性能规范及其试验方法》代号为（）。",
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
    id: 373,
    type: "single_choice",
    question: "RoboDK可以通过激光跟踪传感器或立体摄像机，获得机器人的相关数据，得到机器人的（）报告。",
    options: {
      A: "性能精度",
      B: "能耗等级",
      C: "噪音等级",
      D: "平均无故障时间"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 374,
    type: "single_choice",
    question: "设置对象的参考坐标系函数是（）。",
    options: {
      A: "setParent(parent)",
      B: "setFrame(frame)",
      C: "setTool(tool)",
      D: "setSpeed()"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 375,
    type: "single_choice",
    question: "要在RoboDK中显示程序路径，应选择（）菜单选项。",
    options: {
      A: "“Run”",
      B: "“Display path”",
      C: "“Show Instruction”",
      D: "“Loop”"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 376,
    type: "single_choice",
    question: "编辑仿真程序，主要包括坐标系和目标点的创建、（）。",
    options: {
      A: "程序命名",
      B: "程序轨迹规划",
      C: "模型设计",
      D: "机器人系统校准"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 377,
    type: "single_choice",
    question: "选中创建的仿真程序，按（）可以修改程序名。",
    options: {
      A: "F5",
      B: "F4",
      C: "F3",
      D: "F2"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 378,
    type: "single_choice",
    question: "为了确保程序能在实际机器人运行，一般RoboDK的显示语言应选择（）。",
    options: {
      A: "Chinese",
      B: "Japan",
      C: "English",
      D: "French"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 379,
    type: "single_choice",
    question: "RoboDK通过（）扩展后处理器，可以直接生成对应品牌机器人的离线程序。",
    options: {
      A: "VB API",
      B: "C# API",
      C: "JAVA API",
      D: "Python API"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 380,
    type: "single_choice",
    question: "运行仿真程序，在虚拟环境中真实模拟实际工作站的（）。",
    options: {
      A: "电气性能",
      B: "工作流程",
      C: "机械性能",
      D: "损耗情况"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 381,
    type: "single_choice",
    question: "（）是RoboDK最主要的功能。",
    options: {
      A: "离线仿真",
      B: "模型设计",
      C: "数据恢复",
      D: "通信管理"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 382,
    type: "single_choice",
    question: "“Pause Instruction”是指（）。",
    options: {
      A: "中断指令",
      B: "条件指令",
      C: "等待指令",
      D: "测试指令"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 383,
    type: "single_choice",
    question: "“Attach Object”是指（）。",
    options: {
      A: "添加工具",
      B: "释放工具",
      C: "抓取工件",
      D: "释放工件"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 384,
    type: "single_choice",
    question: "添加移动语句时，RoboDK默认会给你新建（）。",
    options: {
      A: "一个目标点",
      B: "一个过渡点",
      C: "两个目标点",
      D: "两个过渡点"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 385,
    type: "single_choice",
    question: "保存工作站时默认后缀为（），不可手动修改为其他后缀。",
    options: {
      A: "*.rbt",
      B: "*.rdk",
      C: "*.stu",
      D: "*.sta"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 386,
    type: "single_choice",
    question: "目标点的数值可以通过打开（）选项来修改。",
    options: {
      A: "“Cartesian target”",
      B: "“Joint target”",
      C: "“option”",
      D: "“Visible”"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 387,
    type: "single_choice",
    question: "勾选目标点（）选项可以显示/隐藏目标点。",
    options: {
      A: "“Cartesian target”",
      B: "“Joint target”",
      C: "“Visible”",
      D: "“option”"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 388,
    type: "single_choice",
    question: "创建目标点之前先要明确（）。",
    options: {
      A: "工件坐标系",
      B: "工具坐标系",
      C: "大地坐标系",
      D: "轴坐标系"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 389,
    type: "single_choice",
    question: "在仿真中释放物料对应的选项是（）。",
    options: {
      A: "OFF",
      B: "“Attach Object”",
      C: "“Detach Object”",
      D: "ON"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 390,
    type: "single_choice",
    question: "创建仿真程序，主要是根据工作站的（）。",
    options: {
      A: "规模大小",
      B: "机器人品牌",
      C: "通讯方式",
      D: "工作流程"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 391,
    type: "single_choice",
    question: "CalibrateToolFrame是指（）。",
    options: {
      A: "校准基坐标系",
      B: "校准工具坐标系",
      C: "校准工件坐标系",
      D: "校准关节坐标系"
    },
    answer: "B",
    category: "机器人标定"
  },
  {
    id: 392,
    type: "single_choice",
    question: "机器人夹持工件的工具在选择时主要考虑（）。",
    options: {
      A: "工件形状和材质",
      B: "机器人法兰",
      C: "夹具价格",
      D: "夹具驱动方式"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 393,
    type: "single_choice",
    question: "在RoboDK中进行TCP校准，需要示教（）个点。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "D",
    category: "机器人标定"
  },
  {
    id: 394,
    type: "single_choice",
    question: "RoboDK软件中校准工具坐标系的第一步是（ )。",
    options: {
      A: "移动机器人姿态",
      B: "打开“CalibrateToolFrame(TCP)”面板",
      C: "找一个参考点",
      D: "记录姿态点"
    },
    answer: "C",
    category: "机器人标定"
  },
  {
    id: 395,
    type: "single_choice",
    question: "将工具模型安装到机器人上后，可以通过右键单击，选择（）将工具保存为*.tool下次可以直接使用。",
    options: {
      A: "export",
      B: "save as",
      C: "copy",
      D: "open"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 396,
    type: "single_choice",
    question: "在布局过程中，要设置工件对象的位置参数应（）。",
    options: {
      A: "右击对象",
      B: "双击对象",
      C: "按回车键",
      D: "按空格键"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 397,
    type: "single_choice",
    question: "RoboDK中导入的三维数模的位置信息都是相对于某一（）而言的。",
    options: {
      A: "参考轴",
      B: "参考平面",
      C: "参考坐标系",
      D: "参考三维空间"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 398,
    type: "single_choice",
    question: "RoboDK设置显示比例参数，一般设置（）。",
    options: {
      A: "0或0.5",
      B: "5或10",
      C: "2或3",
      D: "1或0.5"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 399,
    type: "single_choice",
    question: "RoboDK的截屏快捷键是（）。",
    options: {
      A: "Alt",
      B: "Alt $^+$ Shift",
      C: "Ctrl+P",
      D: "Ctrl+1"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 400,
    type: "single_choice",
    question: "基坐标系固定于机器人底座（）。",
    options: {
      A: "中心",
      B: "左边",
      C: "右边",
      D: "前面"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 401,
    type: "single_choice",
    question: "要移动RoboDK的视图，应（）并移动鼠标。",
    options: {
      A: "按住中键",
      B: "按住左键",
      C: "按住右键",
      D: "同时按住左右键"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 402,
    type: "single_choice",
    question: "RoboDK的（）主要用于演示机器人仿真运动。",
    options: {
      A: "菜单栏",
      B: "仿真区域",
      C: "工具栏",
      D: "项目栏"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 403,
    type: "single_choice",
    question: "RoboDK软件中机器人模型文件格式是（）。",
    options: {
      A: "*.robot",
      B: "*.3ds",
      C: "*.igs",
      D: "dwg"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 404,
    type: "single_choice",
    question: "调整参考坐标系快捷键是（）。",
    options: {
      A: "Alt",
      B: "Alt $^+$ Shift",
      C: "Ctrl+P",
      D: "Ctrl+1"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 405,
    type: "single_choice",
    question: "相对彼此，移动参考坐标系、物体或者机器人快捷键是（）。",
    options: {
      A: "Alt",
      B: "Alt $^+$ Shift",
      C: "Ctrl+P",
      D: "Ctrl+1"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 406,
    type: "single_choice",
    question: "视图操作包括选择、移动、旋转、缩放，通常使用（）完成这些操作。",
    options: {
      A: "摇杆",
      B: "体感输入",
      C: "手写笔",
      D: "鼠标"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 407,
    type: "single_choice",
    question: "RoboDK的视图操作及快捷键主要在菜单栏中（）一栏。",
    options: {
      A: "“file”",
      B: "“edit”",
      C: "“view”",
      D: "“help”"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 408,
    type: "single_choice",
    question: "RoboDK软件一般可以从（）获得。",
    options: {
      A: "RoboDK官网",
      B: "淘宝购买",
      C: "网盘下载",
      D: "论坛下载"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 409,
    type: "single_choice",
    question: "AutoCAD软件的二维设计文件后缀名是（）。",
    options: {
      A: "bmp",
      B: "CAD",
      C: "*.dwg",
      D: "wmf"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 410,
    type: "single_choice",
    question: "常用的三维模型数据格式是IGES和（）。",
    options: {
      A: "bin",
      B: "hex",
      C: "step",
      D: "docx"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 411,
    type: "single_choice",
    question: "加载最近的文件和工作站快捷键是（）。",
    options: {
      A: "Alt",
      B: "Alt $^+$ Shift",
      C: "Ctrl+P",
      D: "Ctrl+1"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 412,
    type: "single_choice",
    question: "RoboDK的显示选项中，（）表示最佳性能。",
    options: {
      A: "best speed",
      B: "best quality",
      C: "best performance",
      D: "best path"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 413,
    type: "single_choice",
    question: "CAD导入精度的设置是在option对话框中的（）选项卡。",
    options: {
      A: "CAD",
      B: "DISPLAY",
      C: "MOTION",
      D: "CAM"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 414,
    type: "single_choice",
    question: "CAD数据导入的精度设置主要有表面直线精度、表面角精度和（ ）。",
    options: {
      A: "曲面精度",
      B: "曲线精度",
      C: "多边形精度",
      D: "三角形精度"
    },
    answer: "B",
    category: "机器人仿真"
  },
  {
    id: 415,
    type: "single_choice",
    question: "用RoboDK进行机器人离线仿真前，通常需要对RoboDK的（ ）进行设置，以便顺利地导入三维模型数据和流畅地运行机器人离线仿真。",
    options: {
      A: "安装路径",
      B: "网络",
      C: "存储位置",
      D: "相关参数"
    },
    answer: "D",
    category: "机器人仿真"
  },
  {
    id: 416,
    type: "single_choice",
    question: "执行setoverride（50）指令后，机器人全局速度改为（ ）。",
    options: {
      A: "50mm/s",
      B: "50°/min",
      C: "5%",
      D: "50%"
    },
    answer: "D",
    category: "机器人运动控制"
  },
  {
    id: 417,
    type: "single_choice",
    question: "GOTO 指令用于跳转到程序不同部分，目标通过（ ）定义。",
    options: {
      A: "Label 指令",
      B: "赋值指令",
      C: "调用指令",
      D: "注释"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 418,
    type: "single_choice",
    question: "区域监控功能可以有效的保护机器人或者现场设备，当TCP将要离开允许工作区域或入禁止区域时，提前给出报警停机器人运动。撤销区域监控的指令是（ ）。",
    options: {
      A: "AREA.Activate",
      B: "AREA.Deactivate",
      C: "AREA.Connect",
      D: "AREA.Disconnect"
    },
    answer: "B",
    category: "机器人安全"
  },
  {
    id: 419,
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
    id: 420,
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
    id: 421,
    type: "single_choice",
    question: "GOTO 指令用于跳转到程序不同部分。跳转目标通过（ ）指令定义。",
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
    id: 422,
    type: "single_choice",
    question: "GetRobotPos 指令用于获取机器人当前（ ）信息。",
    options: {
      A: "速度",
      B: "位置",
      C: "角度",
      D: "姿态"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 423,
    type: "single_choice",
    question: "WAITdin0.port $\\equiv$ TRUE释义正确的是（ ）。",
    options: {
      A: "程序执行完上一行程序，等待数字输入din0.port为TRUE时才执行后面的程序，否则机器人暂停运行，并处于一直等待状态。",
      B: "程序执行上一行程序的同时，等待数字输入din0.port为TRUE时才执行后面的程序，否则机器人暂停运行，并处于一直等待状态。",
      C: "程序执行完上一行程序，等待数字输入din0.port为TRUE时才执行后面的程序，否则机器人结束运行程序。",
      D: "程序执行完上一行程序，等待数字输入din0.port为TRUE时才执行后面的程序，否则机器人继续执行上一行程序。"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 424,
    type: "single_choice",
    question: "RETURN，RUN，KILL,IF···THEN··END_IF，ELSIF···THEN，ELSE，IO等指令为预处理指令，会在程序运行前提前编译，所以需在这些指令前加上指令（）。",
    options: {
      A: "WaitIsFinished",
      B: "Waitsignal",
      C: "Stop",
      D: "Wait"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 425,
    type: "single_choice",
    question: "IF条件判断表达式必须是（）类型",
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
    id: 426,
    type: "single_choice",
    question: "WHILE指令在满足条件的时候循环执行子语句，循环控制表达式必须是（）类型。",
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
    id: 427,
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
    id: 428,
    type: "single_choice",
    question: "通常所说的焊接机器人主要指的是(",
    options: {
      A: "点焊机器人",
      B: "弧焊机器人",
      C: "等离子焊接机器人",
      D: "激光焊机器人"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 429,
    type: "single_choice",
    question: "为去掉冲压工件表面的毛刺，应进行（ ）处理。",
    options: {
      A: "焊接",
      B: "涂胶",
      C: "打磨抛光",
      D: "人工去毛刺"
    },
    answer: "D",
    category: "机器人应用"
  },
  {
    id: 430,
    type: "single_choice",
    question: "将汽车前挡风玻璃固定在车架上前，应进行（ ）处理。",
    options: {
      A: "焊接",
      B: "涂胶",
      C: "打磨抛光",
      D: "人工去毛刺"
    },
    answer: "B",
    category: "机器人应用"
  },
  {
    id: 431,
    type: "single_choice",
    question: "系统功能指令CLOCK.Read的作用是（ ）。",
    options: {
      A: "重置时钟",
      B: "启动时钟",
      C: "停止时钟",
      D: "读取被测时间"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 432,
    type: "single_choice",
    question: "数学运算指令（ ）用于判断某位是否为1函数。",
    options: {
      A: "CheckBit",
      B: "SetBit",
      C: "ResetBit",
      D: "STR"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 433,
    type: "single_choice",
    question: "PACK.Reachability位置可达性检查，如果位置不能到达，系统发送警告信号，并返回一个（ ）值。",
    options: {
      A: "预设",
      B: "随机",
      C: "FALSE",
      D: "TRUE"
    },
    answer: "C",
    category: "机器人应用"
  },
  {
    id: 434,
    type: "single_choice",
    question: "PTPAbs指令的作用是（",
    options: {
      A: "使机器人末端相对于参考点移动设定的偏移量",
      B: "用于获取机器人当前位置信息",
      C: "用于修改机器人全局速度",
      D: "使机器人各关节相对于参考点移动设定的偏移量"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 435,
    type: "single_choice",
    question: "码垛点前点与后点的s、h的值是相对（ ）点的。",
    options: {
      A: "前点",
      B: "后点",
      C: "码垛点",
      D: "工具末端"
    },
    answer: "C",
    category: "机器人应用"
  },
  {
    id: 436,
    type: "single_choice",
    question: "RUN指令调用一个用户程序，该程序与主程序平行运行。RUN调用的程序必须用（）指令终止。",
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
    id: 437,
    type: "single_choice",
    question: "LOOP…DO…END_LOOP指令是循环（）控制指令。",
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
    id: 438,
    type: "single_choice",
    question: "使用焊枪示教前，检查焊枪的均压装置是否良好，动作是否正常，同时对电极头的要求是（）。",
    options: {
      A: "更换新的电极头",
      B: "使用磨耗量大的电极头",
      C: "旧的磨损量小的电极头",
      D: "新的或旧的都行"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 439,
    type: "single_choice",
    question: "焊接机器人的焊接作业主要包括（",
    options: {
      A: "点焊和弧焊",
      B: "间断焊和连续焊",
      C: "平焊和竖焊",
      D: "气体保护焊和氩弧焊"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 440,
    type: "single_choice",
    question: "DOUTW.Set指令用于设置输出字节为指定的值。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 441,
    type: "single_choice",
    question: "AIN.WaitInside指令功能是等待直到模拟量输入值在一个数值区间内，或者直至可选的时间超时。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 442,
    type: "single_choice",
    question: "AIN.WaitOutside指令功能是等待直到模拟量输入值在一个数值区间外，或者直至可选的时间超时。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 443,
    type: "single_choice",
    question: "I/O模块是设计机器人弧焊工作站时的必选器件，有模拟量I/O和数字量I/O两种形式，模拟量和数字量信号的区别在于数字信号大小和时间均连续，而模拟信号相反。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "机器人应用"
  },
  {
    id: 444,
    type: "single_choice",
    question: "AOUT.Set指令用于设置模拟量输出为指定的值。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 445,
    type: "single_choice",
    question: "由于变频器内部设置有电子过电流保护装置，故电机就不需要热继电器进行过载保护了。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "电气控制"
  },
  {
    id: 446,
    type: "single_choice",
    question: "通过伺服驱动器参数设定，只能使伺服电机工作在位置控制模式下，无法使伺服电机工作在速度控制或转矩控制模式下。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "伺服控制"
  },
  {
    id: 447,
    type: "single_choice",
    question: "弧焊机器人送丝机构的送丝电机速度与焊接电流的大小有关。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 448,
    type: "single_choice",
    question: "远程控制机器人启动时，要求机器人已选择远程模式且机器人在作业原点等初始条件。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人控制"
  },
  {
    id: 449,
    type: "single_choice",
    question: "点焊机器人X形焊钳适用于点焊垂直及近于垂直位置的焊点。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 450,
    type: "single_choice",
    question: "如果使用PLC发送高频脉冲给伺服驱动器，控制伺服电机运行，则PLC的输出端的类型必须选择继电器形式。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "PLC控制"
  },
  {
    id: 451,
    type: "single_choice",
    question: "外围设备与机器人输入输出回路相连的电缆需要使用屏蔽电缆，防止周围高频噪声干扰。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "电气控制"
  },
  {
    id: 452,
    type: "single_choice",
    question: "机器人在焊接过程中，操作人员不得离开现场，以应对突发事故的及时处理。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人安全"
  },
  {
    id: 453,
    type: "single_choice",
    question: "焊接机器人一般把工具坐标系定义在焊枪的顶端",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 454,
    type: "single_choice",
    question: "搭建机器人焊接工作站时，对于工装夹具的设计过程中，要尽量保证工件的焊缝安装在工装夹具上以后保持平焊姿态。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 455,
    type: "single_choice",
    question: "机器人焊接工作站搭建前，首先要确定焊接方式，然后分析焊件的特性，比如焊件的板材，板厚，焊缝的形状与宽度等。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 456,
    type: "single_choice",
    question: "编码器清零后，机器人零点数据丢失，必须执行机器人清零程序。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人标定"
  },
  {
    id: 457,
    type: "single_choice",
    question: "机器人执行编码器清零操作后，电机编码器多圈值被置零，导致机器人保存的位置信息丢失。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人维护"
  },
  {
    id: 458,
    type: "single_choice",
    question: "购买示教器备件时，收到原厂未拆封的新示教器时，可能会出现开机后无法启动连接到控制器的情况。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "示教器故障"
  },
  {
    id: 459,
    type: "single_choice",
    question: "示教器受到外力振动或触摸屏划伤情况下，可能会出现触摸屏不准，或开机直接进入了校准界面的情况。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "示教器故障"
  },
  {
    id: 460,
    type: "single_choice",
    question: "示教器内屏损坏或示教器线缆损坏可造成示教器黑屏。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "示教器故障"
  },
  {
    id: 461,
    type: "single_choice",
    question: "标零过程中，会听到电机抱闸打开/关闭的声音，属正常现象。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人标定"
  },
  {
    id: 462,
    type: "single_choice",
    question: "当机器人零点丢失后，机器人对于TCP精度要求较高时，肉眼通过零点刻度对零点进行标定无法满足精度需求，需要通过软件计算零点偏差值。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人标定"
  },
  {
    id: 463,
    type: "single_choice",
    question: "示教器进行亮度设置后无需重启直接生效。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 464,
    type: "single_choice",
    question: "对示教器进行亮度设置，需要使用“teacher”用户登录才能设置。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "示教器操作"
  },
  {
    id: 465,
    type: "single_choice",
    question: "长按示教器左上角“菜单”键，可调出“Display”选项。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "示教器操作"
  },
  {
    id: 466,
    type: "single_choice",
    question: "如果加载的工程中不包含区域监控变量，则工作区监控选项是隐藏的，因此我们要先新建区域监控变量。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 467,
    type: "single_choice",
    question: "DOUT.Set指令可以设置输出后等待某个输入反馈信号，若反馈信号没有响应，则出现报警。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 468,
    type: "single_choice",
    question: "模拟量的概念与数字量相对应，但是经过量化之后又可以转化为数字量。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "电气控制"
  },
  {
    id: 469,
    type: "single_choice",
    question: "数字量是由0和1组成的信号，经过编码形成有规律的信号，量化后的模拟量就是数字量。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "电气控制"
  },
  {
    id: 470,
    type: "single_choice",
    question: "模拟量在连续的变化过程中任何一个取值都是一个具体有意义的物理量，如温度，电压，电流等。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "电气控制"
  },
  {
    id: 471,
    type: "single_choice",
    question: "开关量与数字量是同一个概念。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "电气控制"
  },
  {
    id: 472,
    type: "single_choice",
    question: "数字量在时间和数量上都是离散的物理量，其表示的信号则为数字信号。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "电气控制"
  },
  {
    id: 473,
    type: "single_choice",
    question: "bSigOut0.Set(TRUE,IoDIn[15],100,TRUE)：程序执行这一指令时，将输出端口（）被设置为TRUE，并在 $100\\mathrm{ms}$ 内等待输入口IoDin[15]被设置为TRUE，超过等待时间后还没响应，产生错误；若时间被设置为无效值，则程序一直等待下去，直到输入口IoDin[15]被设置为TRUE。",
    options: {
      A: "IoDin[15]",
      B: "IoDin[14]",
      C: "IoDout[15]",
      D: "IoDout[14]"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 474,
    type: "single_choice",
    question: "ain0.WaitGreater(10.0)释义正确的是（",
    options: {
      A: "等待模拟量输入值 $\\mathrm{ain0 = 10}$",
      B: "等待模拟量输入值 $\\mathrm{ain0< 10}$",
      C: "等待模拟量输入值 $\\mathrm{ain0 > 10}$",
      D: "模拟量输入值ain0设为10"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 475,
    type: "single_choice",
    question: "视觉系统与机器人通过TCP/IP进行数据交换和传递，网线连接一端接入相机网口，一端接入机器人控制器Ethernet1网口，该网口默认地址为192.168.100.100，因此相机的IP地址为（）。",
    options: {
      A: "192.168.0.0",
      B: "192.168.100.0",
      C: "192.168.100.100",
      D: "192.168.100.168"
    },
    answer: "D",
    category: "机器人视觉"
  },
  {
    id: 476,
    type: "single_choice",
    question: "用于CognexInsight系列相机触发滤波模块获取工件信息的汇博机器人指令是（）。",
    options: {
      A: "ctVisConnect",
      B: "ctVisTrigger",
      C: "ctVisReset",
      D: "以上都不是"
    },
    answer: "B",
    category: "机器人视觉"
  },
  {
    id: 477,
    type: "single_choice",
    question: "用于汇博机器人与CognexInsight系列相机建立通讯的指令是（ ）。",
    options: {
      A: "ctVisConnect",
      B: "ctVisTrigger",
      C: "ctVisReset",
      D: "以上都不是"
    },
    answer: "A",
    category: "机器人视觉"
  },
  {
    id: 478,
    type: "single_choice",
    question: "S7-1200CPU的系统存储位中不包括的内容是（",
    options: {
      A: "首循环标志位",
      B: "常1信号位",
      C: "常0信号位",
      D: "2Hz频率位"
    },
    answer: "D",
    category: "PLC编程"
  },
  {
    id: 479,
    type: "single_choice",
    question: "S7-1200系统不能接入的现场总线是（",
    options: {
      A: "MPI",
      B: "PROFINET",
      C: "PROFIBUS",
      D: "MODBUS"
    },
    answer: "A",
    category: "PLC通信"
  },
  {
    id: 480,
    type: "single_choice",
    question: "机器人内部程序中默认添加FM265/A从站模块，可与安装主站模块FM260/A的系统进行数据传输。目前支持（）个BOOL、（）个INT、（）个REAL类型的输出。",
    options: {
      A: "64.10.8",
      B: "64,32,8",
      C: "32,16,16",
      D: "32,10,8"
    },
    answer: "A",
    category: "机器人通信"
  },
  {
    id: 481,
    type: "single_choice",
    question: "触摸屏通过（ ）方式与PCL交流信息。",
    options: {
      A: "通讯",
      B: "I/O信号控制",
      C: "继电器连接",
      D: "电气连接"
    },
    answer: "A",
    category: "人机界面"
  },
  {
    id: 482,
    type: "single_choice",
    question: "相机镜头到被检测物体之间的距离是（ )。",
    options: {
      A: "物距",
      B: "焦距",
      C: "景深",
      D: "视野"
    },
    answer: "A",
    category: "机器视觉"
  },
  {
    id: 483,
    type: "single_choice",
    question: "工业相机能识别的图像上的最小单元是（ )。",
    options: {
      A: "分辨率",
      B: "精度",
      C: "像素",
      D: "视野"
    },
    answer: "C",
    category: "机器视觉"
  },
  {
    id: 484,
    type: "single_choice",
    question: "大小为1024X1024，灰度级别为256色的图像文件大小为（）。",
    options: {
      A: "512KB",
      B: "1MB",
      C: "1.5MB",
      D: "2MB"
    },
    answer: "B",
    category: "机器视觉"
  },
  {
    id: 485,
    type: "single_choice",
    question: "高速在线测量中，为减小被测物模糊，需要选用（ )照明技术。",
    options: {
      A: "条形光",
      B: "平行光",
      C: "频闪光",
      D: "结构光"
    },
    answer: "C",
    category: "机器视觉"
  },
  {
    id: 486,
    type: "single_choice",
    question: "机器视觉系统是一种( )的光传感系统，同时集成软硬件，综合现代计算机，光学、电子技术。",
    options: {
      A: "非接触式",
      B: "接触式",
      C: "自动控制",
      D: "智能控制"
    },
    answer: "A",
    category: "机器视觉"
  },
  {
    id: 487,
    type: "single_choice",
    question: "STOP模式下，S7-1200CPU单元集成DO通道输出的信号状态不包括（）。",
    options: {
      A: "输出STOP前状态",
      B: "输出替代值1",
      C: "输出替代值0",
      D: "输出随机状态"
    },
    answer: "D",
    category: "PLC编程"
  },
  {
    id: 488,
    type: "single_choice",
    question: "PLC采用了一系列可靠性设计，如（）、掉电保护、故障诊断和性信息保护及恢复等。",
    options: {
      A: "简单设计",
      B: "简化设计",
      C: "冗余设计",
      D: "功能设计"
    },
    answer: "C",
    category: "PLC基础"
  },
  {
    id: 489,
    type: "single_choice",
    question: "机器人的精度主要依存于（）、控制算法误差与分辨率系统误差。",
    options: {
      A: "传动误差",
      B: "关节间隙",
      C: "机械误差",
      D: "连杆机构的挠性"
    },
    answer: "C",
    category: "机器人精度"
  },
  {
    id: 490,
    type: "single_choice",
    question: "数据类型BOOL在程序中所代表的类型为（）。",
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
    id: 491,
    type: "single_choice",
    question: "机器人内部程序中默认添加FM265/A从站模块，可与安装主站模块FM260/A的系统进行数据传输。目前支持（）个BOOL、（）个INT、（）个REAL类型的输入。",
    options: {
      A: "32,10,8",
      B: "32,16,16",
      C: "64,32,8",
      D: "64,10,8"
    },
    answer: "D",
    category: "机器人通信"
  },
  {
    id: 492,
    type: "single_choice",
    question: "汇博机器Modbus数据类型有ER_Modbus Get（外部PLC发送给机器人数据）和（）（机器人发送给外部PLC数据）。",
    options: {
      A: "ER_Modbus Set",
      B: "ER_Modbus Put",
      C: "ER_Modbus Send",
      D: "ER_Modbus Received"
    },
    answer: "B",
    category: "机器人通信"
  },
  {
    id: 493,
    type: "single_choice",
    question: "Modbus数据传输，目前支持（ ）个INT、REAL类型的输入，（ ）个INT、REAL类型的输出。",
    options: {
      A: "16,16",
      B: "16,32",
      C: "32,32",
      D: "32,16"
    },
    answer: "A",
    category: "机器人通信"
  },
  {
    id: 494,
    type: "single_choice",
    question: "循环向左移位运算函数是（ ）。",
    options: {
      A: "ROR",
      B: "ROL",
      C: "SHR",
      D: "SHL"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 495,
    type: "single_choice",
    question: "循环向右移位运算函数是（ ）。",
    options: {
      A: "ROR",
      B: "ROL",
      C: "SHR",
      D: "SHL"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 496,
    type: "single_choice",
    question: "当WAIT表达式的值为（），下一步指令就会执行，否则的话，程序一直等待。",
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
    id: 497,
    type: "single_choice",
    question: "CARTREFSYSEXT类型的参考坐标系是外部PLC功能块通过端口映射赋给RC的，所以主要参数有（ ）和映射端口。",
    options: {
      A: "工件坐标系",
      B: "工具坐标系",
      C: "基坐标系",
      D: "世界坐标系"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 498,
    type: "single_choice",
    question: "( )指令用于同步触发，当机器人经过指定位置时触发。",
    options: {
      A: "OnDistance",
      B: "OnParameter",
      C: "OnPlane",
      D: "OnPosition"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 499,
    type: "single_choice",
    question: "不属于机器人触发指令的是（",
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
    id: 500,
    type: "single_choice",
    question: "Stop命令用于停止所有激活程序的执行。如果指不带参数，等同按下了示教器终端上的停止按钮。为防止该指令提前触发，应在该指令前添加WaitIsFinished或者（ ）。",
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
    id: 501,
    type: "single_choice",
    question: "OnDistance指令作用是：触发器可以在（ ）时触发。",
    options: {
      A: "下一个运动段的某点",
      B: "某一触发平面",
      C: "经过指定位置",
      D: "从起点运动一定距离或者距离终点一定距离"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 502,
    type: "single_choice",
    question: "下列是中断类型的是（",
    options: {
      A: "Procdur",
      B: "Trap",
      C: "Function",
      D: "num"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 503,
    type: "single_choice",
    question: "投入作业前检查机器人防护罩挡板是否正确紧固，确定没有活动或松动部件，检查控制单元部件是否完整。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人安全"
  },
  {
    id: 504,
    type: "single_choice",
    question: "非授权签字人不得签发检验检测报告。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "质量管理"
  },
  {
    id: 505,
    type: "single_choice",
    question: "从事检验检测活动的人员，不得同时在两个以上检验检测机构从业。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "质量管理"
  },
  {
    id: 506,
    type: "single_choice",
    question: "只要检测仪器达到标准就可以从事检验检测工作。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "质量管理"
  },
  {
    id: 507,
    type: "single_choice",
    question: "测量重复定位精度时，以空载运行。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人精度"
  },
  {
    id: 508,
    type: "single_choice",
    question: "RoboDK可以通过激光跟踪传感器或立体摄像机，获得机器人的相关数据，得到机器人的能耗报告，且能够对机器人参数进行标定。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 509,
    type: "single_choice",
    question: "重复定位精度中不包括姿态。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人精度"
  },
  {
    id: 510,
    type: "single_choice",
    question: "机器人在执行某作业时可能会因为存在手部不能到达的作业死区(dead zone)而不能完成任务。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人应用"
  },
  {
    id: 511,
    type: "single_choice",
    question: "机器人在装配后不需要进行标定工作。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "机器人标定"
  },
  {
    id: 512,
    type: "single_choice",
    question: "标定机器人的基本参数，必须选用具有计量器具许可证的测量工具和仪器。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人标定"
  },
  {
    id: 513,
    type: "single_choice",
    question: "机器人本体的实际精度和理论设计模型可能会存在一定的误差。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人精度"
  },
  {
    id: 514,
    type: "single_choice",
    question: "可达工作空间 (reachable workspace)，即机器人末端可达位置点的集合。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 515,
    type: "single_choice",
    question: "工业机器人的性能测试一般采用激光非接触测量技术与振动测量设备。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人性能测试"
  },
  {
    id: 516,
    type: "single_choice",
    question: "RoboDK 中机器人仿真程序完成后，一键就可以生成相应品牌的机器人离线程序。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 517,
    type: "single_choice",
    question: "在 RoboDK 中，放置动作是通过输出信号控制电磁阀动作指令来实现的。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 518,
    type: "single_choice",
    question: "添加机器人关节移动指令可点击 Move Joint Instruction 工具栏按钮。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 519,
    type: "single_choice",
    question: "RoboDK 可以创建的仿真程序类型有两种。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 520,
    type: "single_choice",
    question: "离线仿真软件生成离线程序前，需要校准工具坐标系和工件坐标系。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人仿真"
  },
  {
    id: 521,
    type: "single_choice",
    question: "AIN.WaitOutside 这指令功能是等待直到（）在一个数值区间外，或者直至可选的时间超时。",
    options: {
      A: "模拟量输入值",
      B: "模拟量输出值",
      C: "数字量输入值",
      D: "数字量输出值"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 522,
    type: "single_choice",
    question: "AIN.WaitInside 这指令功能是等待直到（）在一个数值区间内，或者直至可选的时间超时。",
    options: {
      A: "模拟量输入值",
      B: "模拟量输出值",
      C: "数字量输入值",
      D: "数字量输出值"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 523,
    type: "single_choice",
    question: "AIN.WaitGreater该指令功能是等待直到（）大于指定的值，或者直至可选的时间超时。",
    options: {
      A: "模拟量输入值",
      B: "模拟量输出值",
      C: "数字量输入值",
      D: "数字量输出值"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 524,
    type: "single_choice",
    question: "AOUT.Set 设置（）为指定的值。",
    options: {
      A: "模拟量输入值",
      B: "模拟量输出值",
      C: "数字量输入值",
      D: "数字量输出值"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 525,
    type: "single_choice",
    question: "汇博机器人和外部 PLC 做 ModBusTCP 通信时，外部 PLC 接收 INT 类型数据的默认首地址是（）。",
    options: {
      A: "40033",
      B: "40034",
      C: "40035",
      D: "40036"
    },
    answer: "A",
    category: "机器人通信"
  },
  {
    id: 526,
    type: "single_choice",
    question: "汇博机器人和外部 PLC 做 ModBusTCP 通信时，外部 PLC 发送 INT 类型数据的默认首地址是（）。",
    options: {
      A: "40001",
      B: "40002",
      C: "40003",
      D: "40004"
    },
    answer: "A",
    category: "机器人通信"
  },
  {
    id: 527,
    type: "single_choice",
    question: "汇博机器人控制器作为 ModbusTCP 服务器，目前支持（）个 INT、REAL 类型的输入和输出。",
    options: {
      A: "16",
      B: "32",
      C: "8",
      D: "64"
    },
    answer: "B",
    category: "机器人通信"
  },
  {
    id: 528,
    type: "single_choice",
    question: "AOUT.Set指令用于设置模拟量输出为指定的值。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 529,
    type: "single_choice",
    question: "AIN.WaitInside指令功能是等待直到模拟量输入值在一个数值区间内，或者直至可选的时间超时。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 530,
    type: "single_choice",
    question: "AIN.WaitOutside指令功能是等待直到模拟量输入值在一个数值区间外，或者直至可选的时间超时。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 531,
    type: "single_choice",
    question: "I/O模块是设计机器人弧焊工作站时的必选器件，有模拟量I/O和数字量I/O两种形式，模拟型号和数字信号的区别在于（）。",
    options: {
      A: "数字信号大小不连续，时间上连续，而模拟信号相反",
      B: "数字信号大小连续，时间上不连续，而模拟信号相反",
      C: "数字信号大小和时间均不连续，而模拟信号相反",
      D: "数字信号大小和时间均连续，而模拟信号相反"
    },
    answer: "C",
    category: "机器人应用"
  },
  {
    id: 532,
    type: "single_choice",
    question: "（ ）编程语言不能用于S7-1200编程。",
    options: {
      A: "LAD",
      B: "FBD",
      C: "STL",
      D: "SCL"
    },
    answer: "C",
    category: "PLC编程"
  },
  {
    id: 533,
    type: "single_choice",
    question: "下列指令中，当前值既可以增加又可以减少的是（ )。",
    options: {
      A: "TON",
      B: "TONR",
      C: "CTUD",
      D: "CTU"
    },
    answer: "C",
    category: "PLC编程"
  },
  {
    id: 534,
    type: "single_choice",
    question: "在PLC中，用来存放用户程序的是( )。",
    options: {
      A: "RAM",
      B: "ROM",
      C: "EPROM",
      D: "EEPROM"
    },
    answer: "A",
    category: "PLC基础"
  },
  {
    id: 535,
    type: "single_choice",
    question: "GOTO指令用于跳转到程序不同部分，跳转目标通过( )指令定义。",
    options: {
      A: "LABEL",
      B: "IF",
      C: "RUN",
      D: "KILL"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 536,
    type: "single_choice",
    question: "机器人每次能回到它的各自轴零点，靠的是（）装置。",
    options: {
      A: "机械准星",
      B: "编码器",
      C: "控制器",
      D: "内部存储器"
    },
    answer: "B",
    category: "机器人原理"
  },
  {
    id: 537,
    type: "single_choice",
    question: "数字/模拟（D/A）转换，是（）的过程。",
    options: {
      A: "模拟信号转换为数字信号",
      B: "数字信号转换为模拟信号",
      C: "模拟信号放大",
      D: "模拟信号减小"
    },
    answer: "B",
    category: "电气控制"
  },
  {
    id: 538,
    type: "single_choice",
    question: "模拟/数字（A/D）转换，是（）的过程。",
    options: {
      A: "模拟信号转换为数字信号",
      B: "数字信号转换为模拟信号",
      C: "模拟信号放大",
      D: "模拟信号减小"
    },
    answer: "A",
    category: "电气控制"
  },
  {
    id: 539,
    type: "single_choice",
    question: "DOUT指令创建的数字量输出信号属于（）类型。",
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
    id: 540,
    type: "single_choice",
    question: "在（）指令组中选择DOUT指令，可创建数字量输出信号。",
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
    id: 541,
    type: "single_choice",
    question: "在（）菜单中可创建数字量IO变量。",
    options: {
      A: "输入输出检测",
      B: "变量检测",
      C: "监控",
      D: "维护"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 542,
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
    id: 543,
    type: "single_choice",
    question: "工业机器人的主电源开关在什么位置（ ）。A.机器人本体上",
    options: {
      A: "机器人本体上",
      B: "示教器上",
      C: "控制柜上",
      D: "需外接"
    },
    answer: "C",
    category: "机器人安全"
  },
  {
    id: 544,
    type: "single_choice",
    question: "电液动换向阀中的电磁阀，应确保电磁阀在中间位置时液动阀两端控制的油路应卸荷，电磁阀的滑阀机能应是（ ）型。",
    options: {
      A: "M",
      B: "Y",
      C: "K",
      D: "H"
    },
    answer: "D",
    category: "液压控制"
  },
  {
    id: 545,
    type: "single_choice",
    question: "机器人驱动方式有（ ）。$①$ 手工驱动 $(2)$ 电力驱动 $(3)$ 气压驱动 $(\\widehat{\\Delta})$ 液压驱动",
    options: {
      A: "$①②$",
      B: "①②④",
      C: "②③④",
      D: "①②③④"
    },
    answer: "C",
    category: "机器人驱动"
  },
  {
    id: 546,
    type: "single_choice",
    question: "传感器的运用，使得机器人具有了一定的（ ）能力。",
    options: {
      A: "一般",
      B: "重复工作",
      C: "识别判断",
      D: "逻辑思维"
    },
    answer: "C",
    category: "机器人感知"
  },
  {
    id: 547,
    type: "single_choice",
    question: "摩擦带传动是依靠（ ）来传递运动和功率的。",
    options: {
      A: "带与带轮接触面之间的正压力",
      B: "带的紧边拉力",
      C: "带与带轮接触面之间的摩擦力",
      D: "带的松边拉力"
    },
    answer: "C",
    category: "机械传动"
  },
  {
    id: 548,
    type: "single_choice",
    question: "陀螺仪是利用（）原理制作的。",
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
    id: 549,
    type: "single_choice",
    question: "下面哪一项不属于工业机器人子系统（）。",
    options: {
      A: "驱动系统",
      B: "机械结构系统",
      C: "人机交互系统",
      D: "导航系统"
    },
    answer: "D",
    category: "机器人系统"
  },
  {
    id: 550,
    type: "single_choice",
    question: "动作级编程语言又可以分为（）和末端执行器编程两种动作编程。",
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
    id: 551,
    type: "single_choice",
    question: "机器视觉系统是一种（）的光传感系统，同时集成软硬件，综合现代计算机，光学、电子技术。",
    options: {
      A: "非接触式",
      B: "接触式",
      C: "自动控制",
      D: "智能控制"
    },
    answer: "A",
    category: "机器视觉"
  },
  {
    id: 552,
    type: "single_choice",
    question: "（）是利用行星轮传动原理发展起来的一种新型减速器，是依靠柔性零件产生弹性机械波来传递动力和运动的一种行星轮传动。",
    options: {
      A: "蜗轮减速器",
      B: "齿轮减速器",
      C: "蜗杆减速器",
      D: "谐波减速器"
    },
    answer: "D",
    category: "机器人传动"
  },
  {
    id: 553,
    type: "single_choice",
    question: "机器人的手部也称末端执行器，它是装在机器人的（）部上，直接抓握工作或执行作业的部件。",
    options: {
      A: "臂",
      B: "腕",
      C: "手",
      D: "关节"
    },
    answer: "B",
    category: "机器人结构"
  },
  {
    id: 554,
    type: "single_choice",
    question: "通常所说的焊接机器人主要指的是（$①$ 点焊机器人； $(2)$ 弧焊机器人； $(3)$ 等离子焊接机器人； $(\\widehat{\\Delta})$ 激光焊接机器人$$\n\\begin{array}{rlr}{\\mathrm{A.①②}}&{}&{\\mathrm{B.①②④}}&{\\mathrm{C.①③}}&{\\mathrm{D.①②③④}}\\end{array}$$",
    options: {
      A: "①②",
      B: "①②④",
      C: "①③",
      D: "①②③④"
    },
    answer: "B",
    category: "机器人应用"
  },
  {
    id: 555,
    type: "single_choice",
    question: "工业机器人机座有固定式和（）两种。",
    options: {
      A: "移动式",
      B: "行走式",
      C: "旋转式",
      D: "电动式"
    },
    answer: "B",
    category: "机器人结构"
  },
  {
    id: 556,
    type: "single_choice",
    question: "工业机器人驱动类型可以划分为液压驱动、气压驱动、电力驱动和（）驱动四种类型。",
    options: {
      A: "电机",
      B: "自动",
      C: "新型",
      D: "智能"
    },
    answer: "C",
    category: "机器人驱动"
  },
  {
    id: 557,
    type: "single_choice",
    question: "伺服电机保持转矩不变的情况下，转速越高（）。",
    options: {
      A: "功率越高",
      B: "功率越低",
      C: "所需电压越低",
      D: "所需电压不变"
    },
    answer: "A",
    category: "伺服控制"
  },
  {
    id: 558,
    type: "single_choice",
    question: "机器人中的电机编码器分辨率越高则定位精度（）。",
    options: {
      A: "越低",
      B: "越高",
      C: "不变",
      D: "没有关系"
    },
    answer: "B",
    category: "机器人精度"
  },
  {
    id: 559,
    type: "single_choice",
    question: "影响工业机器人定位精度的因素大体上可以归为三类：（）因素、控制因素、执行因素。",
    options: {
      A: "代码",
      B: "轴承",
      C: "装配",
      D: "结构"
    },
    answer: "D",
    category: "机器人精度"
  },
  {
    id: 560,
    type: "single_choice",
    question: "加速度传感器是一种能够测量加速度的传感器。通常由（）、阻尼器、弹性元件、敏感元件和适调电路等部分组成。",
    options: {
      A: "重锤",
      B: "支架",
      C: "质量块",
      D: "化学试剂"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 561,
    type: "single_choice",
    question: "工业机器人的速度一般用（）表示。",
    options: {
      A: "m/min",
      B: "mm/s",
      C: "rad/min",
      D: "r/s"
    },
    answer: "B",
    category: "机器人运动控制"
  },
  {
    id: 562,
    type: "single_choice",
    question: "机器人工作空间一般用水平面和垂直面的（）表示。",
    options: {
      A: "距离",
      B: "投影",
      C: "尺寸",
      D: "角度"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 563,
    type: "single_choice",
    question: "进行更换电机、机械系统零部件之后需要进行（）。",
    options: {
      A: "速度标定",
      B: "角度标定",
      C: "负荷标定",
      D: "零点标定"
    },
    answer: "D",
    category: "机器人维护"
  },
  {
    id: 564,
    type: "single_choice",
    question: "必须使用参考目标来正确设置轴6的（）位置。",
    options: {
      A: "当前",
      B: "移动",
      C: "原始",
      D: "无"
    },
    answer: "C",
    category: "机器人标定"
  },
  {
    id: 565,
    type: "single_choice",
    question: "距离误差是通过测量（）的距离误差获得的。",
    options: {
      A: "任意两点",
      B: "三点间",
      C: "四点间",
      D: "成对点"
    },
    answer: "D",
    category: "机器人精度"
  },
  {
    id: 566,
    type: "single_choice",
    question: "机器人校准可以显著提高离线编程机器人的（）",
    options: {
      A: "准确性",
      B: "可靠性",
      C: "柔和性",
      D: "速度"
    },
    answer: "A",
    category: "机器人标定"
  },
  {
    id: 567,
    type: "single_choice",
    question: "校准机器人需要（）系统。",
    options: {
      A: "气动",
      B: "液压",
      C: "测量",
      D: "数据分析"
    },
    answer: "C",
    category: "机器人标定"
  },
  {
    id: 568,
    type: "single_choice",
    question: "RoboDK可以连接支持的测量系统，例如（）或者CreaformOpticalCMM，连接这些设备可以实现机器人校准与性能测试的全自动化。",
    options: {
      A: "电阻尺",
      B: "拉线位移传感器",
      C: "应变计",
      D: "激光追踪仪"
    },
    answer: "D",
    category: "机器人标定"
  },
  {
    id: 569,
    type: "single_choice",
    question: "位置误差是机器人相对于（）可以达到的一点精度。",
    options: {
      A: "基座标",
      B: "参考系",
      C: "参考点",
      D: "参考面"
    },
    answer: "B",
    category: "机器人精度"
  },
  {
    id: 570,
    type: "single_choice",
    question: "机器人校准分为（）个步骤。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "B",
    category: "机器人标定"
  },
  {
    id: 571,
    type: "single_choice",
    question: "需要激光跟踪器的（）才能正确设置与RoboDK的通信。",
    options: {
      A: "许可证",
      B: "序列号",
      C: "IP",
      D: "秘钥"
    },
    answer: "B",
    category: "机器人标定"
  },
  {
    id: 572,
    type: "single_choice",
    question: "使用激光跟踪仪时，应将（）目标连接到机器人工具。",
    options: {
      A: "1个或多个",
      B: "1个",
      C: "3个",
      D: "5个"
    },
    answer: "B",
    category: "机器人标定"
  },
  {
    id: 573,
    type: "single_choice",
    question: "通过机器人校准，可以将机器人精度（）。",
    options: {
      A: "随机调整",
      B: "降低",
      C: "固定",
      D: "提高"
    },
    answer: "D",
    category: "机器人标定"
  },
  {
    id: 574,
    type: "single_choice",
    question: "检测系统的带宽应（）机器人最高速度。",
    options: {
      A: "等于",
      B: "大于等于",
      C: "小于",
      D: "不等于"
    },
    answer: "B",
    category: "机器人性能"
  },
  {
    id: 575,
    type: "single_choice",
    question: "选择“程序Program→Fast simulation”即可加快（）速度",
    options: {
      A: "导出",
      B: "工艺",
      C: "仿真",
      D: "传送带"
    },
    answer: "C",
    category: "机器人仿真"
  },
  {
    id: 576,
    type: "single_choice",
    question: "选择“程序Program→ShowMessageInstruction”，指令可以在示教器上（）。",
    options: {
      A: "显示提醒信息",
      B: "显示错误信息",
      C: "显示警告信息",
      D: "显示系统信息"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 577,
    type: "single_choice",
    question: "选择“程序Program→MoveCircularInstruction”即可添加（）指令。",
    options: {
      A: "重复运动",
      B: "计算运动",
      C: "旋转运动",
      D: "圆弧运动"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 578,
    type: "single_choice",
    question: "不占用机器人，可以使用软件工具在计算机上建模并编程的编程方式是（）。",
    options: {
      A: "在线编程",
      B: "离线编程",
      C: "自主编程",
      D: "示教器示教编程"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 579,
    type: "single_choice",
    question: "IO指令为预处理指令，会在程序运行前提前编译，所以需在这些指令前加上指令（）。",
    options: {
      A: "WAIT",
      B: "STOP",
      C: "END",
      D: "WaitIsFinished"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 580,
    type: "single_choice",
    question: "当在机器人程序中设定一个时钟，以下哪个时间最靠近最大计时容量（）。",
    options: {
      A: "35天",
      B: "50天",
      C: "55天",
      D: "65天"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 581,
    type: "single_choice",
    question: "指令（）用于控制进程的先后顺序，使一些进程在指定等待参数之前被中断，直到该参数被激活后进程再持续执行。",
    options: {
      A: "WaitIsFinished",
      B: "LinSearch",
      C: "StopRobot",
      D: "WaitJustInTime"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 582,
    type: "single_choice",
    question: "( )指令可将机器人某一轴运动至指定角度。",
    options: {
      A: "MoveRobotAxis",
      B: "LinRel",
      C: "StopRobot",
      D: "PTPSearch"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 583,
    type: "single_choice",
    question: "以下哪种机器人的运动方式不可控（",
    options: {
      A: "关节运动",
      B: "线性运动",
      C: "圆周运动",
      D: "绝对位置运动"
    },
    answer: "D",
    category: "机器人运动控制"
  },
  {
    id: 584,
    type: "single_choice",
    question: "OnPosition指令用于同步触发，当机器人经过指定（）时触发。",
    options: {
      A: "角度",
      B: "平面",
      C: "距离",
      D: "位置"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 585,
    type: "single_choice",
    question: "OnPlane在笛卡尔空间里定义机器人在某一触发（ )上触发。",
    options: {
      A: "角度",
      B: "平面",
      C: "距离",
      D: "位置"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 586,
    type: "single_choice",
    question: "若创建一个数据，只能够被该数据所在的程序模块所调用，则其范围需要设为（）。",
    options: {
      A: "全局",
      B: "本地",
      C: "任务",
      D: "程序"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 587,
    type: "single_choice",
    question: "机器人每次能回到它的各自轴零点，靠的是（）装置。",
    options: {
      A: "机械准星",
      B: "编码器",
      C: "控制器",
      D: "内部存储器"
    },
    answer: "B",
    category: "机器人原理"
  },
  {
    id: 588,
    type: "single_choice",
    question: "GOTO指令用于跳转到程序不同部分，跳转目标通过( )指令定义。",
    options: {
      A: "LABEL",
      B: "IF",
      C: "RUN",
      D: "KILL"
    },
    answer: "A",
    category: "机器人编程"
  },
  {
    id: 589,
    type: "single_choice",
    question: "S7- 1200CPU的系统存储位中不包括( )。",
    options: {
      A: "首循环标志位",
      B: "常1信号位",
      C: "常0信号位",
      D: "2Hz频率位"
    },
    answer: "D",
    category: "PLC编程"
  },
  {
    id: 590,
    type: "single_choice",
    question: "下列指令中，当前值既可以增加又可以减少的是（ )。",
    options: {
      A: "TON",
      B: "TONR",
      C: "CTUD",
      D: "CTU"
    },
    answer: "C",
    category: "PLC编程"
  },
  {
    id: 591,
    type: "single_choice",
    question: "在PLC中，用来存放用户程序的是( )。",
    options: {
      A: "RAM",
      B: "ROM",
      C: "EPROM",
      D: "EEPROM"
    },
    answer: "A",
    category: "PLC基础"
  },
  {
    id: 592,
    type: "single_choice",
    question: "如果用3个IO数字信号组成一个组输出，那么此输出最大可发送的数值为(）。",
    options: {
      A: "3",
      B: "6",
      C: "8",
      D: "9"
    },
    answer: "C",
    category: "PLC编程"
  },
  {
    id: 593,
    type: "single_choice",
    question: "（ ）编程语言不能用于S7-1200编程。",
    options: {
      A: "LAD",
      B: "FBD",
      C: "STL",
      D: "SCL"
    },
    answer: "C",
    category: "PLC编程"
  },
  {
    id: 594,
    type: "single_choice",
    question: "I/O模块是设计机器人弧焊工作站时的必选器件，有模拟量I/O和数字量I/O两种形式，模拟型号和数字信号的区别在于（）。",
    options: {
      A: "数字信号大小不连续，时间上连续，而模拟信号相反",
      B: "数字信号大小连续，时间上不连续，而模拟信号相反",
      C: "数字信号大小和时间均不连续，而模拟信号相反",
      D: "数字信号大小和时间均连续，而模拟信号相反"
    },
    answer: "C",
    category: "机器人应用"
  },
  {
    id: 595,
    type: "single_choice",
    question: "数字系统和模拟系统之间的接口常采用（）。",
    options: {
      A: "计数器",
      B: "多谐振荡器",
      C: "数/模和模/数转换器",
      D: "滤波器"
    },
    answer: "C",
    category: "电气控制"
  },
  {
    id: 596,
    type: "single_choice",
    question: "（）指令将数字输出端口设置为TRUE或者FALSE持续一段时间。",
    options: {
      A: "DOUTW.Set",
      B: "DOUT.Connect",
      C: "DOUT.Set",
      D: "DIN.Pulse"
    },
    answer: "D",
    category: "机器人编程"
  },
  {
    id: 597,
    type: "single_choice",
    question: "（）指令可将将数字输出端口设置为TRUE或者FALSE。",
    options: {
      A: "DOUTW.Set",
      B: "DOUT.Connect",
      C: "DOUT.Set",
      D: "DIN.Wait"
    },
    answer: "C",
    category: "机器人编程"
  },
  {
    id: 598,
    type: "single_choice",
    question: "DOUT指令创建的数字量输出信号属于（）类型。",
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
    id: 599,
    type: "single_choice",
    question: "在（）指令组中选择DOUT指令，可创建数字量输出信号。",
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
    id: 600,
    type: "single_choice",
    question: "在（）菜单中可创建数字量IO变量。",
    options: {
      A: "输入输出检测",
      B: "变量检测",
      C: "监控",
      D: "维护"
    },
    answer: "B",
    category: "机器人编程"
  },
  {
    id: 601,
    type: "single_choice",
    question: "工业机器人性能规范及其试验方法标准号是（）。",
    options: {
      A: "GB/T20867-2007",
      B: "GB/T33267-2016",
      C: "GB/T19400-2003",
      D: "GB/T12642-2013"
    },
    answer: "D",
    category: "标准规范"
  },
  {
    id: 602,
    type: "single_choice",
    question: "用于检测的仪器仪表应该（）。",
    options: {
      A: "随意选用",
      B: "限制品牌",
      C: "定期校准",
      D: "自行验证"
    },
    answer: "C",
    category: "质量管理"
  }
];

export const totalQuestions = questionBank.length;