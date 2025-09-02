// industrialRoboticsABB.js - 工业机器人应用编程职业技能等级理论知识考核题库（ABB初级）

export const questionBank = [
  {
    id: 1,
    type: "single_choice",
    question: "当一个或者多个指令重复多次时，可使用FOR指令，FOR指令是（ ）指令。",
    options: {
      A: "循环递增减",
      B: "循环",
      C: "偏移",
      D: "判断"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 2,
    type: "single_choice",
    question: "使用焊枪示教前，检查焊枪的均压装置是否良好，动作是否正常，同时对电极头的要求是（）。",
    options: {
      A: "更换新的电极头",
      B: "使用磨耗量大的电极头",
      C: "旧的磨损量小的",
      D: "新的或旧的都行"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 3,
    type: "single_choice",
    question: "焊接机器人的焊接作业主要包括（）。",
    options: {
      A: "点焊和弧焊",
      B: "间断焊和连续焊",
      C: "平焊和竖焊",
      D: "气体保护焊和氩弧焊"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 4,
    type: "single_choice",
    question: "I/O模块是设计机器人弧焊工作站时的必选器件，其包含模拟量I/O和数字量I/O两种形式，模拟信号和数字信号的区别在于（）。",
    options: {
      A: "数字信号大小不连续，时间上连续，而模拟信号相反",
      B: "数字信号大小连续，时间上不连续，而模拟信号相反",
      C: "数字信号大小和时间均不连续，而模拟信号相反",
      D: "数字信号大小和时间均连续，而模拟信号相反"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 5,
    type: "single_choice",
    question: "机器人故障排查中，发现伺服驱动器的抱闸电压输出正常，为24V，而伺服电机侧的抱闸电压为0V，则故障原因为（）。",
    options: {
      A: "编码器线磨损断线",
      B: "抱闸线磨损断线",
      C: "动力线磨损断线",
      D: "编码器线短路"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 6,
    type: "single_choice",
    question: "伺服控制系统一般包括控制器、被控对象、执行环节、比较环节和（）。",
    options: {
      A: "换向结构",
      B: "转换电路",
      C: "存储电路",
      D: "检测环节"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 7,
    type: "single_choice",
    question: "使用示教盒操作机器人时，在（）模式下无法通过使能按键获得使能。",
    options: {
      A: "手动",
      B: "自动",
      C: "单步调试",
      D: "增量"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 8,
    type: "single_choice",
    question: "工业机器人主要由三大系统组成，分别是（）、传感系统和控制系统。",
    options: {
      A: "软件部分",
      B: "机械系统",
      C: "视觉系统",
      D: "电机系统"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 9,
    type: "single_choice",
    question: "机器人调试过程中，一般将其置于（）状态。",
    options: {
      A: "自动状态",
      B: "防护装置停止状态",
      C: "手动全速状态",
      D: "手动限速状态"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 10,
    type: "single_choice",
    question: "机器人自动模式下，（）可以正确控制电机上电。",
    options: {
      A: "触发一下白色的马达上电按钮",
      B: "按下使能装置按钮",
      C: "按下程序运行按钮",
      D: "什么都不用做"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 11,
    type: "single_choice",
    question: "对机器人进行示教时，示教盒上手动速度为（ ）。",
    options: {
      A: "高速",
      B: "微动",
      C: "低速",
      D: "中速"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 12,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，当机器人动作速度超过示教最高速度时，以（）。",
    options: {
      A: "程序给定的速度运行",
      B: "示教最高速度来限制运行",
      C: "示教最低速度来运行",
      D: "示教最高速度来运行"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 13,
    type: "single_choice",
    question: "为确保安全，在使用示教盒手动操作机器人时，需将机器人的最高速度限制为（）。",
    options: {
      A: "50mm/s",
      B: "250mm/s",
      C: "800mm/s",
      D: "1600mm/s"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 14,
    type: "single_choice",
    question: "可以在（）菜单中设置机器人系统时间。",
    options: {
      A: "手动操纵",
      B: "控制面板",
      C: "系统信息",
      D: "程序数据"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 15,
    type: "single_choice",
    question: "在（）窗口可以设置操作时所用的工具。",
    options: {
      A: "程序编辑器",
      B: "手动操作",
      C: "输入输出",
      D: "其他窗口"
    },
    answer: "B",
    category: "工具工件"
  },
  {
    id: 16,
    type: "single_choice",
    question: "（）不是机器人常用坐标系。",
    options: {
      A: "环境坐标系",
      B: "基坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 17,
    type: "single_choice",
    question: "重定位操作时，一般参考（）。",
    options: {
      A: "基座标系",
      B: "工件坐标系",
      C: "工具坐标系",
      D: "大地坐标系"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 18,
    type: "single_choice",
    question: "下列哪种做法有助于提高机器人TCP的标定精度？（）",
    options: {
      A: "固定参考点设置在机器人极限边界处",
      B: "TCP标定点之间的姿态比较接近",
      C: "减少TCP标定参考点的数量",
      D: "增加TCP标定参考点的数量"
    },
    answer: "D",
    category: "工具工件"
  },
  {
    id: 19,
    type: "single_choice",
    question: "标定工具坐标系时，若需要重新定义TCP及所有方向，应使用哪种方法？",
    options: {
      A: "TCP和默认方向",
      B: "TCP和Z",
      C: "TCP和Z、X",
      D: "TCP和X"
    },
    answer: "C",
    category: "工具工件"
  },
  {
    id: 20,
    type: "single_choice",
    question: "光电开关的接收器根据所接收到的光线强弱对目标物体实现探测，产生（）。",
    options: {
      A: "开关信号",
      B: "压力信号",
      C: "警示信号",
      D: "频率信号"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 21,
    type: "single_choice",
    question: "工件坐标系中的用户框架是相对于（ ）创建的。",
    options: {
      A: "基座标系",
      B: "工件坐标系",
      C: "工具坐标系",
      D: "大地坐标系"
    },
    answer: "D",
    category: "工具工件"
  },
  {
    id: 22,
    type: "single_choice",
    question: "对机器人进行示教时，作为操作人员必须事先接受过专门的培训，与操作人员一起进行作业的监护人员，处在机器人可动范围外时，（），方可进行共同作业。",
    options: {
      A: "不需要事先接受过专门的培训",
      B: "必须事先接受过专门的培训",
      C: "没有事先接受过专门的培训也可以",
      D: "师傅教教即可"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 23,
    type: "single_choice",
    question: "ABBIRB120机器人的主电源开关位于（）。",
    options: {
      A: "机器人本体上",
      B: "示教器上",
      C: "控制柜上",
      D: "需外接"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 24,
    type: "single_choice",
    question: "机器人运行发现异常时，应立即按下（）按钮。",
    options: {
      A: "紧急停止",
      B: "伺服使能",
      C: "伺服停止",
      D: "电源启动"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 25,
    type: "single_choice",
    question: "示教盒上安全开关握紧为ON，松开为OFF状态，当握紧力过大时，为（）状态。",
    options: {
      A: "不变",
      B: "ON",
      C: "OFF",
      D: "其他"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 26,
    type: "single_choice",
    question: "示教编程方法是指机器人由操作者引导，控制机器人运动，记录机器人作业的程序点，并插入所需的机器人指令来完成程序的编写，一般包括示教、（）和再现三个步骤。",
    options: {
      A: "连续运行",
      B: "存储",
      C: "再现",
      D: "示教"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 27,
    type: "single_choice",
    question: "直线运动指令是机器人示教编程时常用的运动指令，编写程序时需通过示教或输入来确定机器人末端控制点移动的起点和（）。",
    options: {
      A: "运动方向",
      B: "终点",
      C: "移动速度",
      D: "直线距离"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 28,
    type: "single_choice",
    question: "机器人自动运行过程中，按下示教盒上的急停按钮，机器人停止运动，此时若要恢复机器人的运动，无需进行（）操作。",
    options: {
      A: "旋开急停按钮",
      B: "伺服上电",
      C: "按下开始键",
      D: "断电重启"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 29,
    type: "single_choice",
    question: "关于机器人操作安全，下列哪种说法是错误的（）。",
    options: {
      A: "不要佩戴手套操作示教盒",
      B: "手动操作机器人时要采用较低的速度",
      C: "操作人员只要保持在机器人工作范围外，可不佩戴防具",
      D: "操作人员必须经过培训上岗"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 30,
    type: "single_choice",
    question: "位置数据（robotarget）的作用域不包括（）。",
    options: {
      A: "全局",
      B: "本地",
      C: "任务",
      D: "指令"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 31,
    type: "single_choice",
    question: "通常对机器人进行示教编程时，要求最初程序点与最终程序点的位置（），这样可提高工作效率。",
    options: {
      A: "相同",
      B: "不同",
      C: "分离越大越好",
      D: "分离越小越好"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 32,
    type: "single_choice",
    question: "机器人进行关节运动时，使用的程序命令为（）。",
    options: {
      A: "MoveC",
      B: "MoveJ",
      C: "MoveL",
      D: "MoveABSJ"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 33,
    type: "single_choice",
    question: "机器人进行直线运动时，使用的程序命令为（）。",
    options: {
      A: "MoveC",
      B: "MoveJ",
      C: "MoveL",
      D: "MoveABSJ"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 34,
    type: "single_choice",
    question: "机器人进行圆弧运动时，使用的程序命令为（）。",
    options: {
      A: "MoveC",
      B: "MoveJ",
      C: "MoveL",
      D: "MoveABSJ"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 35,
    type: "single_choice",
    question: "机器人进行绝对关节运动时，使用的程序命令为（）。",
    options: {
      A: "MoveC",
      B: "MoveJ",
      C: "MoveL",
      D: "MoveABSJ"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 36,
    type: "single_choice",
    question: "在机器人运动指令中，Z50是指（）。",
    options: {
      A: "运动方式",
      B: "速度数据",
      C: "转弯半径数据",
      D: "工具数据"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 37,
    type: "single_choice",
    question: "在机器人运动指令中，V100是指（）。",
    options: {
      A: "运动方式",
      B: "速度数据",
      C: "区域数据",
      D: "工具数据"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 38,
    type: "single_choice",
    question: "在机器人运动指令中，tool0是指（）",
    options: {
      A: "运动方式",
      B: "速度数据",
      C: "区域数据",
      D: "工具数据"
    },
    answer: "D",
    category: "工具工件"
  },
  {
    id: 39,
    type: "single_choice",
    question: "在机器人运动指令中，wobj0是指（）。",
    options: {
      A: "运动方式",
      B: "速度数据",
      C: "工件数据",
      D: "工具数据"
    },
    answer: "C",
    category: "工具工件"
  },
  {
    id: 40,
    type: "single_choice",
    question: "现有一条圆弧指令“MoveCP1，P2，V500，Z30，tool2”，其中P1指的是",
    options: {
      A: "圆弧的起点",
      B: "圆弧的中间点",
      C: "圆弧的终点",
      D: "圆弧的圆心"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 41,
    type: "single_choice",
    question: "现有一条圆弧指令“MoveCP1，P2，V500，Z30，tool2”，其中P2指的是",
    options: {
      A: "圆弧的起点",
      B: "圆弧的中间点",
      C: "圆弧的终点",
      D: "圆弧的圆心"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 42,
    type: "single_choice",
    question: "机器人的工具数据不包括（）。",
    options: {
      A: "工具坐标系",
      B: "工具重量",
      C: "工具重心",
      D: "工具形状"
    },
    answer: "D",
    category: "工具工件"
  },
  {
    id: 43,
    type: "single_choice",
    question: "机器人中的编程中有且只能有一个的是( )。",
    options: {
      A: "程序模块",
      B: "例行程序",
      C: "功能指令",
      D: "主程序"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 44,
    type: "single_choice",
    question: "机器人的任何位置和姿态都可以用（ )自由度来描述。",
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
    id: 45,
    type: "single_choice",
    question: "对机器人进行编程时，是在（）中创建目标和路径",
    options: {
      A: "大地坐标系",
      B: "基坐标系",
      C: "工件坐标系",
      D: "工具坐标系"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 46,
    type: "single_choice",
    question: "以下哪个不是机器人示教器上的组件（",
    options: {
      A: "触摸屏",
      B: "摇杆",
      C: "快捷按键",
      D: "开机启动按钮"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 47,
    type: "single_choice",
    question: "示教盒上的快捷键不包括(",
    options: {
      A: "动作模式切换",
      B: "轴切换",
      C: "坐标切换",
      D: "增量模式切换"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 48,
    type: "single_choice",
    question: "机器人示教盒的语言变换必须在（ )模式下进行。",
    options: {
      A: "手动",
      B: "自动",
      C: "线性",
      D: "编程"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 49,
    type: "single_choice",
    question: "在机器人运行过程中，如果工作区域内有工作人员进入时，应按下（）。",
    options: {
      A: "安全开关",
      B: "紧急停止按钮",
      C: "暂停开关",
      D: "电源开关"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 50,
    type: "single_choice",
    question: "机器人行走轨迹是由示教点决定的，一段圆弧至少需要示教（）点。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 51,
    type: "single_choice",
    question: "通常机器人的TCP是指（",
    options: {
      A: "工具中心点",
      B: "法兰中心点",
      C: "工件中心点",
      D: "工作台中心点"
    },
    answer: "A",
    category: "工具工件"
  },
  {
    id: 52,
    type: "single_choice",
    question: "编程时，在语句前加上（），则整条语句作为注释行，不会被程序执行。",
    options: {
      A: "!",
      B: "#",
      C: "*",
      D: "**"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 53,
    type: "single_choice",
    question: "当机器人关节第5轴为（）度，同关节轴4和6一样时，机器人处于奇异点。",
    options: {
      A: "30",
      B: "90",
      C: "0",
      D: "60"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 54,
    type: "single_choice",
    question: "在机器人程序运行时，无论程序指针如何，都会保持最后赋值的变量是（）。",
    options: {
      A: "VAR",
      B: "PERS",
      C: "CONST",
      D: "AUTO"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 55,
    type: "single_choice",
    question: "机器人的各部分组成中，作用相当于人的大脑的部分是（）。",
    options: {
      A: "驱动系统",
      B: "控制系统",
      C: "感知系统",
      D: "机械系统"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 56,
    type: "single_choice",
    question: "在创建程序时，下面哪一项不是系统自动生成的模块（）。",
    options: {
      A: "MainModule",
      B: "BASE",
      C: "user",
      D: "SYSTEM"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 57,
    type: "single_choice",
    question: "在示教盒的（）菜单中可以设置机器人系统时间。",
    options: {
      A: "手动操纵",
      B: "程序编辑器",
      C: "控制面板",
      D: "程序数据"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 58,
    type: "single_choice",
    question: "使用气动夹爪作为工业机器人的末端执行器，夹爪不能正常抓起物体时，无需对（）进行检修。",
    options: {
      A: "电磁铁",
      B: "气路控制系统",
      C: "夹爪执行机构",
      D: "气源及气路"
    },
    answer: "A",
    category: "工具工件"
  },
  {
    id: 59,
    type: "single_choice",
    question: "在示教盒的（）菜单中可以设置机器人系统语言。",
    options: {
      A: "手动操纵",
      B: "程序编辑器",
      C: "控制面板",
      D: "程序数据"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 60,
    type: "single_choice",
    question: "在示教盒的（）菜单中可以设置机器人的坐标系。",
    options: {
      A: "手动操纵",
      B: "程序编辑器",
      C: "控制面板",
      D: "程序数据"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 61,
    type: "single_choice",
    question: "在示教盒的（）菜单中可以查看机器人的输入输出信号。",
    options: {
      A: "手动操纵",
      B: "输入输出",
      C: "控制面板",
      D: "程序数据"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 62,
    type: "single_choice",
    question: "使用以下哪个选项的功能可以“加载电机校准参数”。",
    options: {
      A: "转数计数器",
      B: "校准参数",
      C: "机械手存储器",
      D: "基座"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 63,
    type: "single_choice",
    question: "在示教盒的（）菜单中可以配置机器人的输入输出信号。",
    options: {
      A: "手动操纵",
      B: "输入输出",
      C: "控制面板",
      D: "程序数据"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 64,
    type: "single_choice",
    question: "可以通过示教盒控制面板菜单里的（）功能选项校准触摸屏。",
    options: {
      A: "配置",
      B: "外观",
      C: "触摸屏",
      D: "监控"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 65,
    type: "single_choice",
    question: "可以通过示教盒控制面板菜单里的（）功能选项调整触摸屏的亮度。",
    options: {
      A: "配置",
      B: "外观",
      C: "触摸屏",
      D: "监控"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 66,
    type: "single_choice",
    question: "机器人六个轴的运动正方向可以通过示教盒（）菜单里的操作杆方向来查看。",
    options: {
      A: "控制面板",
      B: "配置",
      C: "手动操纵",
      D: "程序编辑器"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 67,
    type: "single_choice",
    question: "可使机器人绕着工具TCP点作姿态调整的运动方式是（ )。",
    options: {
      A: "单轴运动",
      B: "线性运动",
      C: "重定位运动",
      D: "绝对位置运动"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 68,
    type: "single_choice",
    question: "机器人工具TCP在空间中沿XYZ轴平移时，便于调整机器人位置的运动方式是（）。",
    options: {
      A: "单轴运动",
      B: "线性运动",
      C: "重定位运动",
      D: "绝对位置运动"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 69,
    type: "single_choice",
    question: "标定工业机器人工件坐标系，一般需要示教（ ）个点。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "6"
    },
    answer: "B",
    category: "工具工件"
  },
  {
    id: 70,
    type: "single_choice",
    question: "在增量模式下，摇杆每偏转一次，机器人移动（）步。摇杆偏转持续一秒钟或数秒钟时，机器人以每秒（）步的速度移动。",
    options: {
      A: "2,10",
      B: "1,10",
      C: "1,20",
      D: "2,20"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 71,
    type: "single_choice",
    question: "下列哪一项不是快捷键“步进模式”的选项（",
    options: {
      A: "步进入",
      B: "步进出",
      C: "跳过",
      D: "循环"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 72,
    type: "single_choice",
    question: "以下不属于ABB机器人DSQC652标准I/O板的接口是（ )。",
    options: {
      A: "数字输入接口",
      B: "数字输出接口",
      C: "DeviceNet接口",
      D: "以太网接口"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 73,
    type: "single_choice",
    question: "ABB机器人标准I0板的供电电压为（",
    options: {
      A: "10V",
      B: "24V",
      C: "48V",
      D: "60V"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 74,
    type: "single_choice",
    question: "将ABB标准I/O板添加到DeviceNet总线上，需要在示教盒“控制面板”的（）选项中设置。",
    options: {
      A: "监控",
      B: "ProgKeys",
      C: "I/O",
      D: "配置"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 75,
    type: "single_choice",
    question: "取值为TRUE或FALSE的数据类型为（",
    options: {
      A: "bool",
      B: "byte",
      C: "num",
      D: "string"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 76,
    type: "single_choice",
    question: "存储仅含数字的字符串时，应选择的数据类型是（",
    options: {
      A: "byte",
      B: "string",
      C: "stringdig",
      D: "dnum"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 77,
    type: "single_choice",
    question: "手动操作机器人不熟练时，为防止速度过快或碰撞，需要在示教盒上打开快捷按钮中的（）模式。",
    options: {
      A: "单轴运动",
      B: "增量",
      C: "自动模式",
      D: "线性运动"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 78,
    type: "single_choice",
    question: "（）对应工件，它定义工件相对于大地坐标的位置。",
    options: {
      A: "工件坐标系",
      B: "工具坐标系",
      C: "大地坐标系",
      D: "基坐标系"
    },
    answer: "A",
    category: "工具工件"
  },
  {
    id: 79,
    type: "single_choice",
    question: "使用“TCP（默认方向）”方法计算得到的工具数据不改变默认工具坐标系方向，仅计算工具在（）方向的偏移值。",
    options: {
      A: "X",
      B: "Y",
      C: "Z",
      D: "原点O"
    },
    answer: "C",
    category: "工具工件"
  },
  {
    id: 80,
    type: "single_choice",
    question: "重新定位工作站的工件时，在不重新示教点的情况下，只需要重新标定（），所有路径将随之更改。",
    options: {
      A: "基坐标系",
      B: "工具坐标系",
      C: "大地坐标系",
      D: "工件坐标系"
    },
    answer: "D",
    category: "工具工件"
  },
  {
    id: 81,
    type: "single_choice",
    question: "使用ABB机器人编程过程中，模块列表中的BASE是（）类型。",
    options: {
      A: "系统参数",
      B: "系统模块",
      C: "程序模块",
      D: "程序参数"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 82,
    type: "single_choice",
    question: "使用ABB机器人编程过程中，模块列表中的User是（）类型。",
    options: {
      A: "系统参数",
      B: "系统模块",
      C: "程序模块",
      D: "程序参数"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 83,
    type: "single_choice",
    question: "使用ABB机器人编程过程中，模块列表中的Module1是（）类型。",
    options: {
      A: "系统参数",
      B: "系统模块",
      C: "程序模块",
      D: "程序参数"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 84,
    type: "single_choice",
    question: "在调试程序时，先应该进行（）调试，然后再进行连续运行调试。",
    options: {
      A: "自动运行",
      B: "循环运行",
      C: "单步运行",
      D: "单程序完整运行"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 85,
    type: "single_choice",
    question: "使用（）功能，可在指令前添加一个“感叹号”，机器人运行时将忽略这条指令。",
    options: {
      A: "备注行",
      B: "撤销",
      C: "更改选择内容",
      D: "重做"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 86,
    type: "single_choice",
    question: "服务例行程序LoadIdentify可以测定（），确认数据：质量、重心和转动惯量。",
    options: {
      A: "工具形状",
      B: "工具运动速度",
      C: "工具负载",
      D: "工具位移"
    },
    answer: "C",
    category: "工具工件"
  },
  {
    id: 87,
    type: "single_choice",
    question: "使用ABB机器人编程过程中，“等待2秒”对应的指令是（）。",
    options: {
      A: "Wait 2s",
      B: "WaitUntil 2",
      C: "While time=2",
      D: "WaitTime 2"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 88,
    type: "single_choice",
    question: "描述机器人末端工具数据的参数不包括工具的（）。",
    options: {
      A: "TCP",
      B: "大小",
      C: "质量",
      D: "重心"
    },
    answer: "B",
    category: "工具工件"
  },
  {
    id: 89,
    type: "single_choice",
    question: "TCP设定方法不包括（）。",
    options: {
      A: "三点法",
      B: "四点法",
      C: "五点法",
      D: "六点法"
    },
    answer: "A",
    category: "工具工件"
  },
  {
    id: 90,
    type: "single_choice",
    question: "将机器人切换到自动模式下运行时，下列操作中可以实现的操作是（）。",
    options: {
      A: "编辑程序",
      B: "切换坐标系",
      C: "更改速度",
      D: "查看系统参数"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 91,
    type: "single_choice",
    question: "新建例行程序类型不包括（）。",
    options: {
      A: "程序",
      B: "功能",
      C: "中断",
      D: "系统"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 92,
    type: "single_choice",
    question: "位置数据（robotarget）的存储类型不包括（）。",
    options: {
      A: "常量",
      B: "变量",
      C: "可变量",
      D: "数字量"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 93,
    type: "single_choice",
    question: "采用直接输入法标定工具坐标系时，直接输入的工具数据不包括（）。",
    options: {
      A: "工具重量",
      B: "工具重心",
      C: "TCP偏移值",
      D: "工具尺寸"
    },
    answer: "D",
    category: "工具工件"
  },
  {
    id: 94,
    type: "single_choice",
    question: "ABB机器人程序数据的存储类型不包括（）。",
    options: {
      A: "VAR",
      B: "PERS",
      C: "CONST",
      D: "AUTO"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 95,
    type: "single_choice",
    question: "定义工具的特征以及工具负载的数据是（）。",
    options: {
      A: "speeddata",
      B: "zonedata",
      C: "tooldata",
      D: "wobjdata"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 96,
    type: "single_choice",
    question: "定义工件的位置及状态的数据是（）。",
    options: {
      A: "speeddata",
      B: "zonedata",
      C: "tooldata",
      D: "wobjdata"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 97,
    type: "single_choice",
    question: "以下赋值指令写法正确的是（）。",
    options: {
      A: "reg1==reg2",
      B: "reg1=reg2",
      C: "reg1:=reg2",
      D: "reg1!=reg2"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 98,
    type: "single_choice",
    question: "以下程序“reg1:=2;FOR i FROM 1 to 3 STEP 2 DO reg1:=reg1+2;ENDFOR”的执行结果reg1为（）。",
    options: {
      A: "2",
      B: "4",
      C: "6",
      D: "8"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 99,
    type: "single_choice",
    question: "Z100指机器人TCP在规定路径上，（）机器人动作圆滑、流畅。",
    options: {
      A: "在直径圆中转向",
      B: "在目标点速度降为零",
      C: "速度为100",
      D: "转弯角度为100度"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 100,
    type: "single_choice",
    question: "MoveAbsJ指令的参数\"NoEoffs\"表示（）。",
    options: {
      A: "外轴的角度数据",
      B: "外轴不带偏移数据",
      C: "外轴带偏移数据",
      D: "外轴的位置数据"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 101,
    type: "single_choice",
    question: "ABBIRB120机器人标配的16位数字量输入输出的I/O板是（）。",
    options: {
      A: "DSQC651",
      B: "DSQC652",
      C: "DSQC653",
      D: "DSQC355A"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 102,
    type: "single_choice",
    question: "使用PROCALL调用例行程序Routine1的正确写法是（）。",
    options: {
      A: "PROCALL Routine1",
      B: "Routine1",
      C: "CALL Routine1",
      D: "ROUTINE Routine1"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 103,
    type: "single_choice",
    question: "Offs偏移指令参考的坐标系是（）。",
    options: {
      A: "大地坐标系",
      B: "当前使用的工具坐标系",
      C: "当前使用的工件坐标系",
      D: "基坐标系"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 104,
    type: "single_choice",
    question: "Reltool偏移指令参考的坐标系是（）。",
    options: {
      A: "大地坐标系",
      B: "当前使用的工具坐标系",
      C: "当前使用的工件坐标系",
      D: "基坐标系"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 105,
    type: "single_choice",
    question: "连接ABBIRB120机器人示教盒和控制器的是（）。",
    options: {
      A: "电机动力电缆线",
      B: "编码器电缆线",
      C: "示教盒电缆线",
      D: "电源线"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 106,
    type: "single_choice",
    question: "在恢复机器人系统的文件夹中，存储机器人配置参数的文件夹是（）。",
    options: {
      A: "RAPID",
      B: "SYSPAR",
      C: "System.xml",
      D: "HOME"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 107,
    type: "single_choice",
    question: "在恢复机器人系统的文件夹中，存储机器人程序代码的文件夹是（）。",
    options: {
      A: "RAPID",
      B: "SYSPAR",
      C: "System.xml",
      D: "HOME"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 108,
    type: "single_choice",
    question: "在恢复机器人系统的文件夹中，存储机器人系统信息的文件夹是（）。",
    options: {
      A: "RAPID",
      B: "SYSPAR",
      C: "System.xml",
      D: "HOME"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 109,
    type: "single_choice",
    question: "使用Offs偏移指令返回的是（）数据类型。",
    options: {
      A: "robjoint",
      B: "string",
      C: "robtarget",
      D: "singdata"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 110,
    type: "single_choice",
    question: "机器人SMB电池位于（）。",
    options: {
      A: "控制柜里面",
      B: "机器人本体上",
      C: "外挂电池盒",
      D: "机器人电机内"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 111,
    type: "single_choice",
    question: "定义Speeddata S1 := [1000,50,200,15],其中50指的是（）。",
    options: {
      A: "机器人运动时线速度",
      B: "机器人运动时角速度",
      C: "机器人运动时重定位速度",
      D: "机器人6轴转速"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 112,
    type: "single_choice",
    question: "等待直至满足逻辑条件的指令是（）。",
    options: {
      A: "Wait",
      B: "WaitTime",
      C: "WaitUntil",
      D: "While"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 113,
    type: "single_choice",
    question: "机器人控制系统恢复出厂设置，需执行（）。",
    options: {
      A: "重置系统（I启动）",
      B: "重置RAPID（P启动）",
      C: "关机",
      D: "冷启动"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 114,
    type: "single_choice",
    question: "机器人自动运行时，首先调用的程序是（）。",
    options: {
      A: "mainmodule",
      B: "main",
      C: "routine",
      D: "任意程序"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 115,
    type: "single_choice",
    question: "ABBIRB120机器人本体基座上不包含（）。",
    options: {
      A: "集成气源接口",
      B: "集成信号接口",
      C: "动力电缆接口",
      D: "示教器接口"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 116,
    type: "single_choice",
    question: "在ABB机器人编程中，用户自定义的坐标系有（",
    options: {
      A: "基坐标系和工具坐标系",
      B: "基坐标系和工件坐标系",
      C: "大地坐标系和工件坐标系",
      D: "工具坐标系和工件坐标系"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 117,
    type: "single_choice",
    question: "基于工件坐标系进行xyz平移的功能函数是（",
    options: {
      A: "ORobT",
      B: "CRobT",
      C: "RelTool",
      D: "Offs"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 118,
    type: "single_choice",
    question: "基于工具坐标系进行xyz平移的功能函数是（",
    options: {
      A: "ORobT",
      B: "CRobT",
      C: "RelTool",
      D: "Offs"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 119,
    type: "single_choice",
    question: "以下对ABBIRB120型机器人描述不正确的是（",
    options: {
      A: "重复定位精度±0.01mm",
      B: "额定负载3kg",
      C: "工作范围 580mm",
      D: "本体重量3kg"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 120,
    type: "single_choice",
    question: "以下哪种机器人运动方式不可控（",
    options: {
      A: "关节运动",
      B: "线性运动",
      C: "圆周运动",
      D: "绝对位置运动"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 121,
    type: "single_choice",
    question: "WaitTime指令的单位为（",
    options: {
      A: "us",
      B: "ms",
      C: "s",
      D: "min"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 122,
    type: "single_choice",
    question: "表征机器人重复定位其末端到达同一目标位置的能力的参数是（",
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
    id: 123,
    type: "single_choice",
    question: "将数字输出信号置为1的指令为（",
    options: {
      A: "setdo1",
      B: "setdi11",
      C: "resetdi1",
      D: "resetdi1"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 124,
    type: "single_choice",
    question: "将数字输出信号置为0的指令为（",
    options: {
      A: "setdo1",
      B: "setdi11",
      C: "resetdi1",
      D: "resetdi1"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 125,
    type: "single_choice",
    question: "等待数字输入信号为1的指令为（",
    options: {
      A: "WaitDo do1,1",
      B: "WaitDI di1,1",
      C: "WaitUntil 1",
      D: "WaitAO ail,1"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 126,
    type: "single_choice",
    question: "当循环条件满足时，重复执行相关指令的指令是（",
    options: {
      A: "Wait Until",
      B: "While",
      C: "IF ELSE",
      D: "WaitTime"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 127,
    type: "single_choice",
    question: "以关节移动，并在拐弯处设置数字输出的指令是（）。",
    options: {
      A: "MoveJ",
      B: "MoveJDO",
      C: "MoveL",
      D: "MoveLDO"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 128,
    type: "single_choice",
    question: "以线性移动，并在拐弯处设置数字输出的指令是（）。",
    options: {
      A: "MoveJ",
      B: "MoveJDO",
      C: "MoveL",
      D: "MoveLDO"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 129,
    type: "single_choice",
    question: "指令“Set do1;InvertDO do1;”的执行结果为do1为（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "-1"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 130,
    type: "single_choice",
    question: "设置数字脉冲输出信号的指令是（）。",
    options: {
      A: "Set pulse",
      B: "pulseDO",
      C: "reset pulse",
      D: "pulseDI"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 131,
    type: "single_choice",
    question: "机器人搬运任务的主要环节有工艺分析、运动规划、示教准备、（）和程序调试。",
    options: {
      A: "视觉检测",
      B: "原点标定",
      C: "示教编程",
      D: "路径规划"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 132,
    type: "single_choice",
    question: "用电设备金属外壳接地属于（）。",
    options: {
      A: "工作接地",
      B: "保护接地",
      C: "避雷接地",
      D: "散热接地"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 133,
    type: "single_choice",
    question: "工业机器人常用的行走机构是（）。",
    options: {
      A: "二轮车",
      B: "三轮车",
      C: "四轮车",
      D: "导轨"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 134,
    type: "single_choice",
    question: "下面在作业过程中，属于非接触式作业机器人的是（）。",
    options: {
      A: "分抹机器人",
      B: "码垛机器人",
      C: "抛光机器人",
      D: "弧焊机器人"
    },
    answer: "D",
    category: "应用技术"
  },
  {
    id: 135,
    type: "single_choice",
    question: "当按下ABB机器人示教盒上的使能按键时，握紧力过大时，为（）状态。",
    options: {
      A: "ON",
      B: "OFF",
      C: "报警",
      D: "没反应"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 136,
    type: "single_choice",
    question: "示教盒属于以下哪一类机器人子系统（）。",
    options: {
      A: "驱动系统",
      B: "机器人-环境交互系统",
      C: "人机交互系统",
      D: "控制系统"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 137,
    type: "single_choice",
    question: "以下不属于工业机器人控制系统硬件主要组成部分的是（）。",
    options: {
      A: "传感装置",
      B: "控制装置",
      C: "关节伺服驱动部分",
      D: "减速装置"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 138,
    type: "single_choice",
    question: "下面哪一项不属于工业机器人子系统（）。",
    options: {
      A: "驱动系统",
      B: "机械系统",
      C: "人机交互系统",
      D: "导航系统"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 139,
    type: "single_choice",
    question: "使用机器人进行弧焊作业过程中，对夹具的要求描述错误的是（）。",
    options: {
      A: "较少定位误差",
      B: "装拆方便",
      C: "工件的固定和定位自动化",
      D: "回避与焊枪的干涉"
    },
    answer: "C",
    category: "应用技术"
  },
  {
    id: 140,
    type: "single_choice",
    question: "IRB120 机器人的（ ）指令可最方便地回到六个轴的校准位置。",
    options: {
      A: "MoveL",
      B: "MoveJ",
      C: "MoveAbsJ",
      D: "ArcL"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 141,
    type: "single_choice",
    question: "IRB120 机器人额定负载为（ ）。",
    options: {
      A: "1KG",
      B: "2KG",
      C: "3KG",
      D: "4KG"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 142,
    type: "single_choice",
    question: "当机器人出现意外事故导致机器人无法正常运行时，可在（ ）中查看事件类型。",
    options: {
      A: "控制面板",
      B: "程序数据",
      C: "事件日志",
      D: "系统信息"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 143,
    type: "single_choice",
    question: "第一次手动运行机器人程序时，需要将（ ）。",
    options: {
      A: "工作模式切换至“手动”",
      B: "机器人移动至安全区域",
      C: "运行模式切换至“单步”",
      D: "以上都是"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 144,
    type: "single_choice",
    question: "对机器人进行示教时，将模式旋钮打到示教模式，外部设备发出的启动信号（ ）。",
    options: {
      A: "无效",
      B: "有效",
      C: "延时后有效",
      D: "延时后无效"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 145,
    type: "single_choice",
    question: "对机器人进行示教时，示教盒的挂带要套在左手上，还应时刻保持（ ）操作。",
    options: {
      A: "双手",
      B: "单手",
      C: "左手",
      D: "右手"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 146,
    type: "single_choice",
    question: "下列哪种情况不需要进行机器人零点校准（ ）。",
    options: {
      A: "新购买的机器人",
      B: "本体电池没电",
      C: "转数计数器丢失",
      D: "断电重启"
    },
    answer: "D",
    category: "安全维护"
  },
  {
    id: 147,
    type: "single_choice",
    question: "下列属于系统输出动作的是（ ）。",
    options: {
      A: "Start at Main",
      B: "Motors On",
      C: "Stop",
      D: "Motor on"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 148,
    type: "single_choice",
    question: "下列选项中不属于机器人焊接系统的是（ ）。",
    options: {
      A: "机器人",
      B: "控制器",
      C: "嵌入式PC",
      D: "焊接系统"
    },
    answer: "C",
    category: "应用技术"
  },
  {
    id: 149,
    type: "single_choice",
    question: "以下是等待数字输入信号的指令是（ ）。",
    options: {
      A: "Reset",
      B: "Set",
      C: "WaitDI",
      D: "WaitDO"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 150,
    type: "single_choice",
    question: "以下是等待数字输出信号的指令是（ ）。",
    options: {
      A: "Reset",
      B: "Set",
      C: "WaitDI",
      D: "WaitDO"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 151,
    type: "single_choice",
    question: "以下不属于工业机器人关节运动的特点的是（ )。",
    options: {
      A: "运动轨迹不可控",
      B: "运动过程不存在奇异点",
      C: "运动时各轴同时到达目标位置",
      D: "不可以设置转弯区域"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 152,
    type: "single_choice",
    question: "以下字符串不可以作为程序名称的是（",
    options: {
      A: "prg01",
      B: "01prg",
      C: "prg_01",
      D: "_prg01"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 153,
    type: "single_choice",
    question: "使ABB机器人完全到达时再输出DO信号，则运动指令转弯半径需指定为(）。",
    options: {
      A: "fine",
      B: "z0",
      C: "z5",
      D: "无法实现"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 154,
    type: "single_choice",
    question: "在机器人急停解除后，在（ ）复位可以使电机上电。",
    options: {
      A: "控制柜上按钮",
      B: "示教器",
      C: "控制器内部",
      D: "机器人本体"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 155,
    type: "single_choice",
    question: "在工业机器人的生产过程中，要避免出现（",
    options: {
      A: "关节运动",
      B: "线性运动",
      C: "圆周运动",
      D: "绝对位置运动"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 156,
    type: "single_choice",
    question: "下列没有出现在IRC5紧凑型控制器面板上的是（",
    options: {
      A: "按钮面板",
      B: "电缆接口面板",
      C: "电源接口面板",
      D: "集成气源接口"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 157,
    type: "single_choice",
    question: "以下不属于ABB机器人示教盒功能的是（",
    options: {
      A: "进行程序编辑",
      B: "进行参数配置",
      C: "进行手动操纵",
      D: "进行离线仿真"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 158,
    type: "single_choice",
    question: "在什么情况下需要校准示教盒的触摸屏（）。",
    options: {
      A: "触摸屏黑屏",
      B: "机器人系统断电后重启",
      C: "触摸屏出现点击错位",
      D: "示教盒无法启动"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 159,
    type: "single_choice",
    question: "为以下机器人工具标定工具坐标系时，需要使用辅助标定工具来确定工具几何中心的是（）。",
    options: {
      A: "焊枪",
      B: "金属笔",
      C: "弧口夹爪",
      D: "以上都不需要"
    },
    answer: "C",
    category: "工具工件"
  },
  {
    id: 160,
    type: "single_choice",
    question: "校准触摸屏，可选择示教盒控制面板菜单，选择（ ）来设置。",
    options: {
      A: "外观",
      B: "配置",
      C: "FlexPendant",
      D: "触摸屏"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 161,
    type: "single_choice",
    question: "调用机器人测算工具负载程序，在测算程序运行过程中，需要将机器人切换至（）模式。",
    options: {
      A: "自动",
      B: "手动",
      C: "线性运动",
      D: "重定位运动"
    },
    answer: "A",
    category: "工具工件"
  },
  {
    id: 162,
    type: "single_choice",
    question: "以下表示wobj1工件框架原点沿着X轴正方向偏移 10mm 的程序是（）。",
    options: {
      A: "wobj1.x:=wobj1.x+10",
      B: "wobj1.oframe.x:=wobj1.oframe.x+10",
      C: "wobj1.oframe.trans.x:=wobj1.oframe.trans.x+10",
      D: "wobj1.oframe.O:=wobj1.oframe.O+10"
    },
    answer: "C",
    category: "工具工件"
  },
  {
    id: 163,
    type: "single_choice",
    question: "同时对多个数字输出执行setdo操作的指令是（ ）。",
    options: {
      A: "setGI",
      B: "setGO",
      C: "setAll",
      D: "setAO"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 164,
    type: "single_choice",
    question: "（）是指连接在机器人末端法兰盘上的工具。",
    options: {
      A: "末端执行器",
      B: "TCP",
      C: "工作空间",
      D: "奇异位形"
    },
    answer: "A",
    category: "工具工件"
  },
  {
    id: 165,
    type: "single_choice",
    question: "等待数字输入信号的指令是（ ）。",
    options: {
      A: "WaitDi",
      B: "WaitDi",
      C: "WaitDi",
      D: "WaitDi"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 166,
    type: "single_choice",
    question: "机器人线性运动的速度单位是（ ）。",
    options: {
      A: "cm/min",
      B: "in/min",
      C: "mm/s",
      D: "in/s"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 167,
    type: "single_choice",
    question: "下列表示设置组信号的指令是（ ）。",
    options: {
      A: "SET",
      B: "RESET",
      C: "SETGO",
      D: "PulseDo"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 168,
    type: "single_choice",
    question: "安装在机器人末端的工具中心点（TCP）处，原点及方向均随末端位置与角度不断变化的坐标系是（ ）。",
    options: {
      A: "基坐标系",
      B: "大地坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 169,
    type: "single_choice",
    question: "以下是平面关节机器人的是（ ）。",
    options: {
      A: "码垛机器人",
      B: "SCARA机器人",
      C: "喷涂机器人",
      D: "焊接机器人"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 170,
    type: "single_choice",
    question: "以下没有ABB机器人序列号显示的是（ ）。",
    options: {
      A: "示教盒",
      B: "控制柜",
      C: "机器人本体",
      D: "驱动板"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 171,
    type: "single_choice",
    question: "单步进入已调用的例行程序并逐步执行的快捷选项为（ ）。",
    options: {
      A: "步进入",
      B: "步进出",
      C: "跳过",
      D: "下一步行动"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 172,
    type: "single_choice",
    question: "RAPID编程中，新建例行程序时，默认的程序名称为（ ）。",
    options: {
      A: "Routine1",
      B: "Module11",
      C: "Procedure",
      D: "T_ROB1"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 173,
    type: "single_choice",
    question: "添加I/O板，应该在示教盒控制面板的（ ）选项中添加。",
    options: {
      A: "监控",
      B: "I/O",
      C: "配置",
      D: "触摸屏"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 174,
    type: "single_choice",
    question: "配置可编程按键，应该选择控制面板的（ ）选项。",
    options: {
      A: "FlexPendant",
      B: "I/O",
      C: "ProgKeys",
      D: "配置"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 175,
    type: "single_choice",
    question: "终止程序的指令是（ ），执行后，程序终止，指针失效。",
    options: {
      A: "EXIT",
      B: "Break",
      C: "GOTO",
      D: "TEST"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 176,
    type: "single_choice",
    question: "执行程序“WaitUntil di1=1 AND di2=1;”，在以下（ ）情况下结束等待。",
    options: {
      A: "di1=1",
      B: "di2=1",
      C: "di1=1, di2=0",
      D: "di1=1, di2=1"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 177,
    type: "single_choice",
    question: "使用Reltool指令返回的是（ ）数据类型。",
    options: {
      A: "robjoint",
      B: "string",
      C: "robtarget",
      D: "singdata"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 178,
    type: "single_choice",
    question: "给字符型变量string1赋值的正确表达是（ ）。",
    options: {
      A: "string1:=\"abc\"",
      B: "string1:='abc'",
      C: "string1:='abc'",
      D: "string1:={abc}"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 179,
    type: "single_choice",
    question: "给数字型变量num1赋值的正确表达是（ ）。",
    options: {
      A: "num1:={123}",
      B: "num1:='123'",
      C: "num1:='123'",
      D: "num1:={123}"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 180,
    type: "single_choice",
    question: "ABB机器人示教盒的状态栏可显示的机器人当前的工作模式、电机状态和（ ）。",
    options: {
      A: "运行程序",
      B: "坐标系信息",
      C: "报警信息",
      D: "参数和变量"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 181,
    type: "single_choice",
    question: "返回原例行程序的指令是（ ）。",
    options: {
      A: "ProcCall",
      B: "CallByVar",
      C: "RETURN",
      D: "STOP"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 182,
    type: "single_choice",
    question: "通过带变量的例行程序名称调用例行程序的指令是（ ）。",
    options: {
      A: "ProcCall",
      B: "CallByVar",
      C: "RETURN",
      D: "STOP"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 183,
    type: "single_choice",
    question: "对一个变量进行判断，从而执行不同程序的逻辑控制指令是（ ）。",
    options: {
      A: "WHILE",
      B: "GOTO",
      C: "Lable",
      D: "TEST"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 184,
    type: "single_choice",
    question: "根据指定的次数，重复执行对应程序的逻辑控制指令是（ ）。",
    options: {
      A: "WHILE",
      B: "GOTO",
      C: "FOR",
      D: "TEST"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 185,
    type: "single_choice",
    question: "跳转至例行程序内标签位置的逻辑控制指令是（ ）。",
    options: {
      A: "WHILE",
      B: "GOTO",
      C: "FOR",
      D: "TEST"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 186,
    type: "single_choice",
    question: "停止程序执行与机器人运动的指令是（ ）。",
    options: {
      A: "System Stop Action",
      B: "Stop",
      C: "EXIT",
      D: "Break"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 187,
    type: "single_choice",
    question: "等待一个指定的时间后，程序再往下执行的指令是（ ）。",
    options: {
      A: "Wait",
      B: "Wait Time",
      C: "Wait Until",
      D: "WaitDI"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 188,
    type: "single_choice",
    question: "等待一个条件满足后，程序继续往下执行的指令是（ ）。",
    options: {
      A: "Wait",
      B: "Wait Time",
      C: "Wait Until",
      D: "WaitDI"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 189,
    type: "single_choice",
    question: "从机器人硬盘加载一个程序模块到运行内存的指令是（ ）。",
    options: {
      A: "Load",
      B: "UnLoad",
      C: "StarLoad",
      D: "WaitLoad"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 190,
    type: "single_choice",
    question: "从运行内存中卸载一个程序模块的指令是（ ）。",
    options: {
      A: "Load",
      B: "UnLoad",
      C: "StarLoad",
      D: "WaitLoad"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 191,
    type: "single_choice",
    question: "在程序执行过程中，加载一个程序模块到运行内容中的指令是（ ）。",
    options: {
      A: "Load",
      B: "UnLoad",
      C: "StarLoad",
      D: "WaitLoad"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 192,
    type: "single_choice",
    question: "读取机器人当前的XYZ值的功能函数是（ ）。",
    options: {
      A: "Cpos",
      B: "CRobT",
      C: "CJointT",
      D: "ReadMotor"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 193,
    type: "single_choice",
    question: "读取机器人当前的robtarget数据的功能函数是（ ）。",
    options: {
      A: "Cpos",
      B: "CRobT",
      C: "CJointT",
      D: "ReadMotor"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 194,
    type: "single_choice",
    question: "读取机器人当前的关节轴角度的功能函数是（ ）。",
    options: {
      A: "Cpos",
      B: "CRobT",
      C: "CJointT",
      D: "ReadMotor"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 195,
    type: "single_choice",
    question: "读取工具坐标当前的数据的功能函数是（ ）。",
    options: {
      A: "Cpos",
      B: "CRobT",
      C: "Ctool",
      D: "Cwobj"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 196,
    type: "single_choice",
    question: "读取工件坐标当前的数据的功能函数是（ ）。",
    options: {
      A: "Cpos",
      B: "CRobT",
      C: "Ctool",
      D: "Cwobj"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 197,
    type: "single_choice",
    question: "ABB编程指令的数学运算中，加1运算的指令是（ ）。",
    options: {
      A: "Add",
      B: "Incr",
      C: "Decr",
      D: "Abs"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 198,
    type: "single_choice",
    question: "ABB编程指令的数学运算中，减1运算的指令是（ ）。",
    options: {
      A: "Add",
      B: "Incr",
      C: "Decr",
      D: "Abs"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 199,
    type: "single_choice",
    question: "在（ ）情况下，需要进行示教盒的触摸屏校准。",
    options: {
      A: "示教盒无法启动",
      B: "机器人系统丢失",
      C: "触摸屏出现点击错位",
      D: "机器人发生碰撞"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 200,
    type: "single_choice",
    question: "配置ABB机器人的组输入信号，最多可配置（ ）个点。",
    options: {
      A: "16",
      B: "32",
      C: "64",
      D: "8"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 201,
    type: "single_choice",
    question: "身上着火后，下列哪种灭火方法是错误的（）。",
    options: {
      A: "就地打滚",
      B: "用厚重衣物覆盖压灭火苗",
      C: "迎风快跑",
      D: "立即脱下着火衣物"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 202,
    type: "single_choice",
    question: "机器人控制柜发生火灾，用何种灭火方式合适？",
    options: {
      A: "浇水",
      B: "二氧化碳灭火器",
      C: "泡沫灭火器",
      D: "用衣物扑打"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 203,
    type: "single_choice",
    question: "人体触电的致命因素是（）。",
    options: {
      A: "电压",
      B: "电阻",
      C: "电流",
      D: "通电时间"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 204,
    type: "single_choice",
    question: "在防静电场所，下列哪种行为是正确的？（）",
    options: {
      A: "穿防静电服时，必须与防静电鞋配套使用",
      B: "在防静电服上需附加或佩戴金属物件",
      C: "可在易燃易爆物附近穿脱防静电服",
      D: "穿防静电服后便可随意触碰防静电场所内物品"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 205,
    type: "single_choice",
    question: "对于骨折同时伴有大出血者的处理顺序说法正确的是（）。",
    options: {
      A: "先呼救，等待救护人员来处理",
      B: "立刻进行止血，防止出血过多导致休克",
      C: "先固定骨折，再止血",
      D: "立刻搬动患者送去医院处理"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 206,
    type: "single_choice",
    question: "出现烫伤后不正确的处理办法是（）。",
    options: {
      A: "用冷水冲洗",
      B: "大水泡可用消毒针刺破水泡边缘放水",
      C: "严重时立即到医院治疗",
      D: "伤口灼破时可涂点牙膏"
    },
    answer: "D",
    category: "安全维护"
  },
  {
    id: 207,
    type: "single_choice",
    question: "危险现场需要紧急撤离，应注意的事项中错误的是？（）",
    options: {
      A: "看到出口往外跑",
      B: "善选通道，不要使用电梯",
      C: "抓紧固物，巧避藏知，溜边前行",
      D: "迅速撤离，不要贪恋财物，重返危险境地"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 208,
    type: "single_choice",
    question: "当遇到火灾时，要迅速向（）逃生。",
    options: {
      A: "着火相反的方向",
      B: "人员多的方向",
      C: "安全出口的方向",
      D: "着火的方向"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 209,
    type: "single_choice",
    question: "进行整顿工作时，要将必要的东西分门别类，这样做的目的是：（）",
    options: {
      A: "使工作场所一目了然",
      B: "营造整齐的工作环境",
      C: "缩短寻找物品的时间",
      D: "清除过多的积压物品"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 210,
    type: "single_choice",
    question: "为了自身的安全，操作前第一项应做到的工作是（）。",
    options: {
      A: "做好现场清理",
      B: "做好设备维修",
      C: "戴好劳动保护用品",
      D: "休息好"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 211,
    type: "single_choice",
    question: "在操作示教器时，以下哪种做法是正确的（）",
    options: {
      A: "不戴手套操作",
      B: "带着手套操作",
      C: "不带安全帽操作",
      D: "不穿防护鞋操作"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 212,
    type: "single_choice",
    question: "进入某工厂机器人（人工）焊接车间作业或者考察，除戴安全帽之外还需要佩戴或穿着（）",
    options: {
      A: "防尘服、护目镜",
      B: "护目镜、手套",
      C: "手套、防静电帽",
      D: "口罩、防静电帽"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 213,
    type: "single_choice",
    question: "假如你是一名机器人维修人员，现有一台机器人运行过程中发生故障需要维修，你需要（）。",
    options: {
      A: "加标锁定",
      B: "只需放置维修标识",
      C: "跟操作人员口头协定",
      D: "找一名同伴帮你把风"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 214,
    type: "single_choice",
    question: "机器人动作速度较快，存在危险性，操作人员应负责维护工作站正常运转秩序（）。",
    options: {
      A: "只有领导和工作人员可以进入工作区域",
      B: "严禁非工作人员进入工作区域",
      C: "清洁人员和工作人员可以进入工作区域",
      D: "领导和清洁人员可以进入工作区域"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 215,
    type: "single_choice",
    question: "LOTO（上锁挂牌）的作用是什么？（）",
    options: {
      A: "控制能量源，防止能量泄漏造成伤害",
      B: "挂上标签，告诉其他人员此处危险",
      C: "满足甲方的要求",
      D: "防止其他人员误制设备"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 216,
    type: "single_choice",
    question: "进行整顿工作时，要将必要的东西分门别类，这样做的目的是（）",
    options: {
      A: "使工作场所一目了然",
      B: "营造整齐的工作环境",
      C: "缩短寻找物品的时间",
      D: "清除过多的积压物品"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 217,
    type: "single_choice",
    question: "维修人员进入设备维修需要将启动控制锁住并挂标志锁（LOTO锁)，目的是：（）",
    options: {
      A: "防止其他人员进入",
      B: "防止其他操作人员误开机器伤到维修人员",
      C: "便于领导检查",
      D: "工作签到"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 218,
    type: "single_choice",
    question: "操作人员因故离开设备工作区域前应按下（），避免突然断电或者关机零位丢失，并将示教器放置在安全位置。",
    options: {
      A: "急停开关",
      B: "限位开关",
      C: "电源开关",
      D: "停止开关"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 219,
    type: "single_choice",
    question: "对机器人进行示教时，模式旋钮打到示教模式后，在此模式中，外部设备发出的启动程序信号（）。",
    options: {
      A: "无效",
      B: "有效",
      C: "延时后有效",
      D: "视情况而"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 220,
    type: "single_choice",
    question: "示教器不能放在以下哪个地方？（）",
    options: {
      A: "机器人控制柜上",
      B: "随手携带",
      C: "变位机上",
      D: "挂在操作位置"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 221,
    type: "single_choice",
    question: "无障碍旋转的关节运动，通常用（）来标记。",
    options: {
      A: "R",
      B: "W",
      C: "B",
      D: "L"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 222,
    type: "single_choice",
    question: "真空吸盘要求工件表面（）、干燥清洁，同时气密性好。",
    options: {
      A: "粗糙",
      B: "凸凹不平",
      C: "平缓突起",
      D: "平整光滑"
    },
    answer: "D",
    category: "工具工件"
  },
  {
    id: 223,
    type: "single_choice",
    question: "同步带传动属于（）传动，适合于在电动机和高速比减速器之间使用。",
    options: {
      A: "高惯性",
      B: "低惯性",
      C: "高速比",
      D: "大转矩"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 224,
    type: "single_choice",
    question: "下列元件中，属于开关电器的是（）。",
    options: {
      A: "组合开关",
      B: "接触器",
      C: "行程开关",
      D: "时间继电器"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 225,
    type: "single_choice",
    question: "熔断器的作用是（",
    options: {
      A: "控制行程",
      B: "控制速度",
      C: "防止短路或严重过载",
      D: "弱磁保护"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 226,
    type: "single_choice",
    question: "黄绿相间的双色线，按电气规范只能用作（",
    options: {
      A: "火线",
      B: "零线",
      C: "接地线",
      D: "网络线"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 227,
    type: "single_choice",
    question: "在控制电路中，如果两个常开触点串联，则它们是（",
    options: {
      A: "与逻辑关系",
      B: "或逻辑关系",
      C: "非逻辑关系",
      D: "与非逻辑关系"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 228,
    type: "single_choice",
    question: "以下（ ）是数字伺服系统的测量元件。",
    options: {
      A: "脉冲编码器",
      B: "旋转变压器",
      C: "感应同步器",
      D: "磁尺"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 229,
    type: "single_choice",
    question: "下列电动机中，（ ）可以不设置过电流保护。",
    options: {
      A: "直流电动机",
      B: "三相笼型异步电动机",
      C: "绕线式异步电动机",
      D: "以上三种电动机"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 230,
    type: "single_choice",
    question: "接近开关属于（",
    options: {
      A: "有触点开关",
      B: "无触点开关",
      C: "机械开关",
      D: "继电器的一种"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 231,
    type: "single_choice",
    question: "万能转换开关是（",
    options: {
      A: "主令电器",
      B: "开关电器",
      C: "继电器",
      D: "保护电器"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 232,
    type: "single_choice",
    question: "以下不属于ABB机器人运动指令的是（",
    options: {
      A: "MoveC",
      B: "MoveJ",
      C: "MoveS",
      D: "MoveABSJ"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 233,
    type: "single_choice",
    question: "选用接近开关时应注意对工作电压、负载电流、（）、检测距离等各项指标的要求。",
    options: {
      A: "工作功率",
      B: "响应频率",
      C: "工作电流",
      D: "工作速度"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 234,
    type: "single_choice",
    question: "对一个变量进行判断，从而执行不同的程序的逻辑控制指令是（）。",
    options: {
      A: "WHILE",
      B: "GOTO",
      C: "Lable",
      D: "TEST"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 235,
    type: "single_choice",
    question: "电气接线时，A、B、C三相按相序，线的颜色配置为（）。",
    options: {
      A: "红、绿、黄",
      B: "黄、绿、红",
      C: "绿、黄、红",
      D: "绿、红、黄"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 236,
    type: "single_choice",
    question: "跳转到例行程序内标签的位置的逻辑控制指令是（",
    options: {
      A: "WHILE",
      B: "GOTO",
      C: "FOR",
      D: "TEST"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 237,
    type: "single_choice",
    question: "停止程序执行于机器人运动的指令是（",
    options: {
      A: "System Stop Action",
      B: "Stop",
      C: "EXIT",
      D: "Break"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 238,
    type: "single_choice",
    question: "临时停止程序的执行，用于手动调试的指令是（",
    options: {
      A: "System Stop Action",
      B: "Stop",
      C: "EXIT",
      D: "Break"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 239,
    type: "single_choice",
    question: "传感器包括以敏感元件、传感元件、（）元件三个功能部件。",
    options: {
      A: "辅助",
      B: "控制",
      C: "执行",
      D: "测量"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 240,
    type: "single_choice",
    question: "力控制方式的输入量和反馈量是（）。",
    options: {
      A: "位置信号",
      B: "力（力矩）信号",
      C: "速度信号",
      D: "加速度信号"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 241,
    type: "single_choice",
    question: "传感器的输出信号达到稳定时，输出信号变化与输入信号变化的比值代表传感器的（）参数。",
    options: {
      A: "抗干扰能力",
      B: "精度",
      C: "线性度",
      D: "灵敏度"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 242,
    type: "single_choice",
    question: "发现机器人运行异常时，应立即按下（）按钮。",
    options: {
      A: "紧急停止",
      B: "伺服使能",
      C: "伺服停止",
      D: "电源启动"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 243,
    type: "single_choice",
    question: "机器人的手部也称末端执行器，它是装在机器人的（）部上，直接抓握工作或执行作业的部件。",
    options: {
      A: "臂",
      B: "腕",
      C: "手",
      D: "关节"
    },
    answer: "B",
    category: "工具工件"
  },
  {
    id: 244,
    type: "single_choice",
    question: "示教-再现控制为一种在线编程方式，它的最大问题是（）。",
    options: {
      A: "操作人员劳动强度大",
      B: "占用生产时间",
      C: "操作人员安全问题",
      D: "容易产生废品"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 245,
    type: "single_choice",
    question: "通常机器人示教编程时，要求最初程序点和最终程序点的位置（），可提高工作效率。",
    options: {
      A: "相同",
      B: "不同",
      C: "无所谓",
      D: "分离越大越好"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 246,
    type: "single_choice",
    question: "工业机器人控制指令不能实现的控制逻辑为（）。",
    options: {
      A: "条件判断",
      B: "条件循环",
      C: "程序间无条件跳转",
      D: "程序内无条件跳转"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 247,
    type: "single_choice",
    question: "等待一个输入信号状态变为设定值的指令是（）。",
    options: {
      A: "Wait Do",
      B: "Wait DI",
      C: "Wait AI",
      D: "Wait AO"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 248,
    type: "single_choice",
    question: "定义机械臂和外轴移动速率的数据是（）。",
    options: {
      A: "speeddata",
      B: "zonedata",
      C: "tooldata",
      D: "wobjdata"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 249,
    type: "single_choice",
    question: "机械臂和外轴移动速度数据不包含的参数是（）。",
    options: {
      A: "工具中心点速率",
      B: "TCP重定位速率",
      C: "线性外轴的速率",
      D: "机械臂的位置"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 250,
    type: "single_choice",
    question: "压电式传感器，即应用半导体压电效应可以测量（ ）。",
    options: {
      A: "电压",
      B: "亮度",
      C: "力和力矩",
      D: "距离"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 251,
    type: "single_choice",
    question: "以下属于工业机器人内部传感器的是（ ）。",
    options: {
      A: "视觉传感器",
      B: "力觉传感器",
      C: "距离传感器",
      D: "速度传感器"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 252,
    type: "single_choice",
    question: "为限定机器人各轴的运动，可以采用各种限制机器人运动范围的方式，以下限位方式属于机械限位的是（ ）。",
    options: {
      A: "光幕",
      B: "限位开关",
      C: "激光扫描器件",
      D: "挡块"
    },
    answer: "D",
    category: "安全维护"
  },
  {
    id: 253,
    type: "single_choice",
    question: "隔板或栅栏式固定防护装置，隔板或栅栏的高度不低于（ ）。",
    options: {
      A: "1.5米",
      B: "1.2米",
      C: "1.0米",
      D: "0.8米"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 254,
    type: "single_choice",
    question: "工业机器人本体的安装环境，应控制在（ ）为宜，低温启动会造成异常的偏差或超负荷，必要时需进行暖机。",
    options: {
      A: "0°C-45°C",
      B: "-10°C-40°C",
      C: "20°C-50°C",
      D: "-10°C-60°C"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 255,
    type: "single_choice",
    question: "应用于弧焊作业的工业机器人，末端工具安装时，应将（ ）与机器人末端法兰盘进行连接。",
    options: {
      A: "冷却装置",
      B: "导丝管",
      C: "焊枪",
      D: "防撞传感器"
    },
    answer: "C",
    category: "应用技术"
  },
  {
    id: 256,
    type: "single_choice",
    question: "机器人本体是工业机器人机械主体，是完成各种作业的（ ）。",
    options: {
      A: "执行机构",
      B: "控制系统",
      C: "传输系统",
      D: "搬运机构"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 257,
    type: "single_choice",
    question: "（ ）是利用行星轮传动原理发展起来的减速器，是依靠柔性零件产生弹性机械波来传递动力和运动的一种行星轮传动。",
    options: {
      A: "蜗轮减速器",
      B: "齿轮减速器",
      C: "蜗杆减速器",
      D: "谐波减速器"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 258,
    type: "single_choice",
    question: "下列选项中，不属于机器人电气系统维护的范畴的是（ ）。",
    options: {
      A: "主电源滤波器的更换",
      B: "内外部风扇的更换",
      C: "伺服电机型号和品牌的更换",
      D: "与安全有关的PLC信号检查"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 259,
    type: "single_choice",
    question: "步行机器人的行走机构多为（ ）。",
    options: {
      A: "滚轮",
      B: "履带",
      C: "连杆机构",
      D: "齿轮机构"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 260,
    type: "single_choice",
    question: "为了获得非常平稳的加工过程，希望作业启动时（ ）。",
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
    id: 261,
    type: "single_choice",
    question: "多传感器融合技术是将几个传感器组合在一体，形成能够检测（）传感器无法检测的高性能信息的传感器系统。",
    options: {
      A: "单个",
      B: "温度",
      C: "速度",
      D: "位移"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 262,
    type: "single_choice",
    question: "机器人结构中起着支撑作用的部件是（ ）。",
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
    id: 263,
    type: "single_choice",
    question: "步进电机的分类中不包括（ ）。",
    options: {
      A: "反应式",
      B: "永磁式",
      C: "无刷式",
      D: "混合式"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 264,
    type: "single_choice",
    question: "谐波减速器的部件构成不包括（ ）。",
    options: {
      A: "刚轮",
      B: "柔轮",
      C: "波发生器",
      D: "连杆"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 265,
    type: "single_choice",
    question: "谐波传动的缺点是（ ）。",
    options: {
      A: "扭转刚度低",
      B: "传动侧隙小",
      C: "惯量抵",
      D: "精度高"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 266,
    type: "single_choice",
    question: "带传动是由带和（ ）组成。",
    options: {
      A: "带轮",
      B: "链条",
      C: "齿轮",
      D: "齿条"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 267,
    type: "single_choice",
    question: "变频器是通过改变交流电动机定子电压、频率等参数来调节（ ）的装置。",
    options: {
      A: "电动机转速",
      B: "电动机转矩",
      C: "电动机功率",
      D: "电动机性能"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 268,
    type: "single_choice",
    question: "PLC采用了一系列可靠性设计，如（ ）、掉电保护、故障诊断和信息保护及恢复等。",
    options: {
      A: "简单设计",
      B: "简化设计",
      C: "冗余设计",
      D: "功能设计"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 269,
    type: "single_choice",
    question: "测速发电机的输出信号为（ ）。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "开关量",
      D: "脉冲量"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 270,
    type: "single_choice",
    question: "在气动系统中，把压缩空气的压力转换成机械能，用来驱动不同机械装置的是（ ）。",
    options: {
      A: "辅助元件",
      B: "控制元件",
      C: "执行元件",
      D: "传动元件"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 271,
    type: "single_choice",
    question: "正常情况下，机器人第六轴可以运行（ ）。",
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
    id: 272,
    type: "single_choice",
    question: "模拟通信系统和数字通信系统的主要区别是（ ）。",
    options: {
      A: "载波频率不一样",
      B: "信道传送的信号不一样",
      C: "调制方式不一样",
      D: "编码方式不一样"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 273,
    type: "single_choice",
    question: "工业机器人（ ）适合夹持形状不规则的工件。",
    options: {
      A: "V型指",
      B: "平面指",
      C: "尖指",
      D: "特型指"
    },
    answer: "D",
    category: "工具工件"
  },
  {
    id: 274,
    type: "single_choice",
    question: "当检测远距离物体时，应优先选用（ ）光电开关。",
    options: {
      A: "光纤式",
      B: "槽式",
      C: "对射式",
      D: "漫反射式"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 275,
    type: "single_choice",
    question: "工业机器人（ ）适合夹持小型工件。",
    options: {
      A: "V型指",
      B: "平面指",
      C: "尖指",
      D: "特型指"
    },
    answer: "C",
    category: "工具工件"
  },
  {
    id: 276,
    type: "single_choice",
    question: "工业机器人（ ）适合夹持方形工件。",
    options: {
      A: "V型指",
      B: "平面指",
      C: "尖指",
      D: "特型指"
    },
    answer: "B",
    category: "工具工件"
  },
  {
    id: 277,
    type: "single_choice",
    question: "IF指令是（ ）指令。",
    options: {
      A: "循环递增减",
      B: "循环",
      C: "偏移",
      D: "判断"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 278,
    type: "single_choice",
    question: "以下不属于工业机器人外围信号故障的是（ ）",
    options: {
      A: "使能信号连接断路",
      B: "气源断路",
      C: "通讯信号线断路",
      D: "急停回路被触发"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 279,
    type: "single_choice",
    question: "以下（ ）功能是IRC5控制器不具备的。",
    options: {
      A: "急停",
      B: "电机上电",
      C: "示教",
      D: "机器人开关机"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 280,
    type: "single_choice",
    question: "以下的RAPID程序段中，哪个是正确的？（",
    options: {
      A: "MoveJ P1,v1000,fine,tool0",
      B: "MoveJ,P1,v1000,fine,tool0",
      C: "MoveJ P1,fine,v1000,tool0",
      D: "MoveJ,P1,fine,v1000,tool0"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 281,
    type: "single_choice",
    question: "关于中断程序TRAP，以下说法不正确的是（ ）",
    options: {
      A: "中断程序执行时，原程序处于等待状态",
      B: "中断程序可以嵌套",
      C: "可以使用中断失效指令来限制中断程序的执行",
      D: "运动类指令不能出现在中断程序中"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 282,
    type: "single_choice",
    question: "工业控制中，PLC直流控制电压一般为（ ）",
    options: {
      A: "AC110V",
      B: "DC24V",
      C: "DC36V",
      D: "AC220V"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 283,
    type: "single_choice",
    question: "PLC程序中，哪种输入按钮不能用触摸屏的软件按钮来替代。（ ）",
    options: {
      A: "急停按钮",
      B: "数值输入按钮",
      C: "数值显示按钮",
      D: "手动按钮"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 284,
    type: "single_choice",
    question: "接触器的型号为CJ10-160，其额定电流是（ ）",
    options: {
      A: "10A",
      B: "160A",
      C: "10A-160A",
      D: "大于160A"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 285,
    type: "single_choice",
    question: "梯形图是一种以（）及其在图中的相互关系表示控制关系的编程语言。",
    options: {
      A: "图形符号",
      B: "电气符号",
      C: "流程符号",
      D: "变量符号"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 286,
    type: "single_choice",
    question: "在电气控制中，将被空电器元件的常开触点与启动控制信号并联，称其为()。",
    options: {
      A: "联锁控制",
      B: "互锁控制",
      C: "自锁控制",
      D: "解锁控制"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 287,
    type: "single_choice",
    question: "热保护继电器主要用于电气设备和电动机的（）。",
    options: {
      A: "过载保护",
      B: "短路保护",
      C: "漏电保护",
      D: "过热保护"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 288,
    type: "single_choice",
    question: "通常PLC使用的编程语言为语句表、（）、功能图三种语言。",
    options: {
      A: "逻辑图",
      B: "BASIC",
      C: "梯形图",
      D: "步进图"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 289,
    type: "single_choice",
    question: "交流接触器在不同的额定电压下，额定电流（）。",
    options: {
      A: "相同",
      B: "不相同",
      C: "与电压无关",
      D: "与电压成正比"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 290,
    type: "single_choice",
    question: "机器人按照应用类型来分，以下哪种属于错误分类。（）",
    options: {
      A: "工业机器人",
      B: "极限作业机器人",
      C: "服务机器人",
      D: "智能机器人"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 291,
    type: "single_choice",
    question: "步进电机、直流伺服电机、交流伺服电机的英文字母表示依次为（）。",
    options: {
      A: "SM、DM、AC",
      B: "SM、DC、AC",
      C: "SM、AC、DC",
      D: "SC、AC、DC"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 292,
    type: "single_choice",
    question: "以下哪种不属于机器人触觉。（）",
    options: {
      A: "压觉",
      B: "力觉",
      C: "滑觉",
      D: "视觉"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 293,
    type: "single_choice",
    question: "以下属于非接触式作业的机器人是（）。",
    options: {
      A: "拧螺丝机器人",
      B: "装配机器人",
      C: "抛光机器人",
      D: "弧焊机器人"
    },
    answer: "D",
    category: "应用技术"
  },
  {
    id: 294,
    type: "single_choice",
    question: "以下不属于光电编码器主要元件的是（）。",
    options: {
      A: "多路光源",
      B: "光敏元件",
      C: "电阻器",
      D: "光电码盘"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 295,
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
    id: 296,
    type: "single_choice",
    question: "改变感应电动机的速度，不能采用（）。",
    options: {
      A: "电压控制法",
      B: "电容控制法",
      C: "极数变换法",
      D: "频率控制法"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 297,
    type: "single_choice",
    question: "以下哪种不是接触觉传感器的用途。（）",
    options: {
      A: "探测物体位置",
      B: "检测物体距离",
      C: "探索路径",
      D: "安全保护"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 298,
    type: "single_choice",
    question: "直线驱动机构中，传动效率最高的是（ ）。",
    options: {
      A: "齿轮齿条装置",
      B: "普通丝杠",
      C: "滚珠丝杠",
      D: "曲柄滑块"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 299,
    type: "single_choice",
    question: "6维力与力矩传感器主要用于（ ）。",
    options: {
      A: "精密加工",
      B: "精密测量",
      C: "精密计算",
      D: "精密装配"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 300,
    type: "single_choice",
    question: "用来表征机器人重复定位其手部于同一目标位置的能力的参数是（ ）。",
    options: {
      A: "定位精度",
      B: "速度",
      C: "工作范围",
      D: "重复定位精度"
    },
    answer: "D",
    category: "机器人基础"
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