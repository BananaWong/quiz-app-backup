// questionBank.js - 工业机器人应用编程职业技能等级理论知识考核题库(ABB中级)
export const questionBank = [
  {
    id: 1,
    type: "single_choice",
    question: "机器人的（）是机器人末端的最大速度。",
    options: {
      A: "工作速度",
      B: "运动速度",
      C: "最大工作速度",
      D: "最佳工作速度"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 2,
    type: "single_choice",
    question: "光电开关的接受器根据所接收到的光线强弱对目标物体实现探测，产生（）。",
    options: {
      A: "开关信号",
      B: "压力信号",
      C: "警示信号",
      D: "频率信号"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 3,
    type: "single_choice",
    question: "直流电动机结构复杂、价格贵、制造麻烦、维护困难，但是（）、调速范围大。",
    options: {
      A: "启动性能差",
      B: "启动性能好",
      C: "启动电流小",
      D: "启动转矩小"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 4,
    type: "single_choice",
    question: "选用接近开关时应注意对工作电压、负载电流、（）、检测距离等各项指标的要求。",
    options: {
      A: "工作功率",
      B: "响应频率",
      C: "工作电流",
      D: "工作速度"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 5,
    type: "single_choice",
    question: "触摸屏通过（）方式与PCL交流信息。",
    options: {
      A: "通讯",
      B: "I/O信号控制",
      C: "继电器连接",
      D: "电气连接"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 6,
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
    id: 7,
    type: "single_choice",
    question: "机器人每次能回到它的各自轴零点，靠的是（）装置。",
    options: {
      A: "机械准星",
      B: "编码器",
      C: "控制器",
      D: "内部存储器"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 8,
    type: "single_choice",
    question: "在机器人操作中，决定姿态的是（）。",
    options: {
      A: "末端工具",
      B: "基座",
      C: "手臂",
      D: "手腕"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 9,
    type: "single_choice",
    question: "关于机器人操作，下列说法错误的是（）",
    options: {
      A: "不要佩戴手套操作示教盒",
      B: "工作结束时，应将机器人置于零位位置或安全位置",
      C: "操作人员只要保持在机器人工作范围外，可不佩戴防具",
      D: "操作人员必须经过培训上岗"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 10,
    type: "single_choice",
    question: "使用示教盒操作机器人时，按下使能键，哪种模式下无法获得使能？（）",
    options: {
      A: "手动",
      B: "自动",
      C: "示教",
      D: "增量"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 11,
    type: "single_choice",
    question: "位姿是由（）两部分构成。",
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
    id: 12,
    type: "single_choice",
    question: "所谓无姿态插补，即保持第一个示教点时的姿态，在大多数情况下是机器人沿（）运动时出现。",
    options: {
      A: "平面圆弧",
      B: "直线",
      C: "平面曲线",
      D: "空间曲线"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 13,
    type: "single_choice",
    question: "机器人轨迹控制过程需要通过求解（）获得各个关节角的位置控制系统的设定值。",
    options: {
      A: "运动学正问题",
      B: "运动学逆问题",
      C: "动力学正问题",
      D: "动力学逆问题"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 14,
    type: "single_choice",
    question: "通常对机器人进行示教编程时，要求最初程序点与最终程序点的位置（），以提高工作效率。",
    options: {
      A: "相同",
      B: "不同",
      C: "无所谓",
      D: "分离越大越好"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 15,
    type: "single_choice",
    question: "传感器的输出信号达到稳定时，输出信号变化与输入信号变化的比值代表传感器的（）参数。",
    options: {
      A: "抗干扰能力",
      B: "精度",
      C: "线性度",
      D: "灵敏度"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 16,
    type: "single_choice",
    question: "为了确保安全，用示教编程器手动运行机器人时，ABB机器人的最高速度限制为（）。",
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
    id: 17,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时，以（）。",
    options: {
      A: "程序给定的速度运行",
      B: "示教最高速度来限制运行",
      C: "示教最低速度来运行",
      D: "报错"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 18,
    type: "single_choice",
    question: "射频识别技术是一项利用（）通过空间耦合(交变磁场或电磁场)实现无接触信息传递并通过所传递的信息达到识别目的的技术。",
    options: {
      A: "电磁信号",
      B: "射频信号",
      C: "电流信号",
      D: "电压信号"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 19,
    type: "single_choice",
    question: "RFID系统中的标签(Tag)由（）及芯片组成，每个标签具有唯一的电子编码。",
    options: {
      A: "耦合元件",
      B: "读写器",
      C: "射频模块",
      D: "电子感应器"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 20,
    type: "single_choice",
    question: "程序reg1 := 14 DIV 4 所得到的reg1的值为（）。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 21,
    type: "single_choice",
    question: "数据类型BOOL在程序中所代表的类型为（）。",
    options: {
      A: "数字量",
      B: "模拟量",
      C: "逻辑量",
      D: "布尔量"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 22,
    type: "single_choice",
    question: "定义Speeddata S1 := [1000,30,200,15], 其中30指的是（）。",
    options: {
      A: "机器人运动时线速度",
      B: "机器人运动时角速度",
      C: "机器人运动时重定位速度",
      D: "机器人6轴转速"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 23,
    type: "single_choice",
    question: "机器人程序中，中断程序一般是以（）字符来定义的。",
    options: {
      A: "TRAP",
      B: "ROUTINE",
      C: "PROC",
      D: "BREAK"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 24,
    type: "single_choice",
    question: "指令ACTUNIT一般用在什么场景中（）。",
    options: {
      A: "机器人程序初始化",
      B: "机器人带外轴电机时",
      C: "机器人带多任务处理功能时",
      D: "机器人带视觉相机时"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 25,
    type: "single_choice",
    question: "当在机器人程序中设定一个时钟，以下哪个时间最靠近最大计时容量（）。",
    options: {
      A: "35天",
      B: "50天",
      C: "55天",
      D: "65天"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 26,
    type: "single_choice",
    question: "以下哪个指令一般会用在机器人初始化子程序中（）。",
    options: {
      A: "MOVEABSJ",
      B: "OFFS",
      C: "ACCSET",
      D: "CROBT"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 27,
    type: "single_choice",
    question: "安全门停止一般常用那种保护机制（）。",
    options: {
      A: "紧急停止",
      B: "自动停止",
      C: "常规停止",
      D: "监控停止"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 28,
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
    id: 29,
    type: "single_choice",
    question: "紧急事件的及时响应，一般使用什么类型的例行程序（）。",
    options: {
      A: "FUNCTION",
      B: "TRAP",
      C: "PROCEDURE",
      D: "ROUTINE"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 30,
    type: "single_choice",
    question: "对NUM进行加1的操作，下列表达式正确的是（）。",
    options: {
      A: "NUM:=1",
      B: "NUM:=NUM+1",
      C: "DECR NUM",
      D: "NUM+1"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 31,
    type: "single_choice",
    question: "以关节移动，并在拐弯处设置数字输出的指令是（）。",
    options: {
      A: "MoveJ",
      B: "MoveJDO",
      C: "MoveL",
      D: "MoveLDO"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 32,
    type: "single_choice",
    question: "若创建一个数据，只需被该数据所在的程序模块所调用，则其范围需要设为（）。",
    options: {
      A: "全局",
      B: "本地",
      C: "任务",
      D: "程序"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 33,
    type: "single_choice",
    question: "标准IO模块所提供的数字量电压为（）。",
    options: {
      A: "5V",
      B: "12V",
      C: "24V",
      D: "10V"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 34,
    type: "single_choice",
    question: "如果用3个IO数字信号组成一个组输出，那么此输出最大可发送的数值为（）。",
    options: {
      A: "3",
      B: "6",
      C: "7",
      D: "9"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 35,
    type: "single_choice",
    question: "调用例行程序R1的正确写法是（）。",
    options: {
      A: "PROCALL R1",
      B: "R1",
      C: "CALL R1",
      D: "ROUTINE R1"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 36,
    type: "single_choice",
    question: "Offs偏移指令参考的坐标系是（）。",
    options: {
      A: "大地坐标系",
      B: "当前使用的工具坐标系",
      C: "当前使用的工件坐标系",
      D: "基坐标系"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 37,
    type: "single_choice",
    question: "Reltool偏移指令参考的坐标系是（）。",
    options: {
      A: "大地坐标系",
      B: "当前使用的工具坐标系",
      C: "当前使用的工件坐标系",
      D: "基坐标系"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 38,
    type: "single_choice",
    question: "组输出信号是将几个数字输出信号组合起来使用，用于输出BCD编码的（）。",
    options: {
      A: "二进制数",
      B: "八进制数",
      C: "十进制",
      D: "十六进制"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 39,
    type: "single_choice",
    question: "ABB IRB120机器人标配的16位数字量输入输出的I/O板是（）。",
    options: {
      A: "DSQC651",
      B: "DSQC652",
      C: "DSQC653",
      D: "DSQC355A"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 40,
    type: "single_choice",
    question: "MoveAbsJ指令的参数\"NoEoffs\"表示（）。",
    options: {
      A: "外轴的角度数据",
      B: "外轴不带偏移数据",
      C: "外轴带偏移数据",
      D: "外轴的位置数据"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 41,
    type: "single_choice",
    question: "定义组输入信号gi1占用地址1-4共4位，可以代表十进制数（）。",
    options: {
      A: "0-8",
      B: "0-15",
      C: "0-31",
      D: "0-63"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 42,
    type: "single_choice",
    question: "机器人进行焊接作业时，一般应保持焊枪工具 Z 轴方向与工件表面保持（ ）。",
    options: {
      A: "45 度",
      B: "平行",
      C: "垂直",
      D: "任意角度"
    },
    answer: "C",
    category: "应用技术"
  },
  {
    id: 43,
    type: "single_choice",
    question: "通过输入坐标偏差量，使机器人坐标通过编程进行实时转换的指令是（ ）。",
    options: {
      A: "PDispSet",
      B: "PDispOn",
      C: "EOffsOn",
      D: "EOffsOff"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 44,
    type: "single_choice",
    question: "在机器人搬运工作站中，用于控制机器人夹爪工具开合的动作信号是（ ）。",
    options: {
      A: "数字量输出信号",
      B: "数字量输入信号",
      C: "模拟量输入信号",
      D: "模拟量输出信号"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 45,
    type: "single_choice",
    question: "将 ABB IRB120 机器人伺服电机编码器接口板数据传送给控制器的是（ ）。",
    options: {
      A: "电机动力电缆线",
      B: "编码器电缆线",
      C: "示教盒电缆线",
      D: "电源线"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 46,
    type: "single_choice",
    question: "连接 ABB IRB120 机器人示教盒和控制器的是（ ）。",
    options: {
      A: "电机动力电缆线",
      B: "编码器电缆线",
      C: "示教盒电缆线",
      D: "电源线"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 47,
    type: "single_choice",
    question: "在ABB机器人示教盒的状态栏，可显示的机器人当前的工作模式、电机状态和（）。",
    options: {
      A: "运行程序",
      B: "坐标系信息",
      C: "报警信息",
      D: "参数和变量"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 48,
    type: "single_choice",
    question: "示教盒的触摸屏校准，需要准确点击（ ）个校准点。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "D",
    category: "安全维护"
  },
  {
    id: 49,
    type: "single_choice",
    question: "为防止触摸屏误操作，可通过示教盒的“主菜单”，点击（ ）来锁定触摸屏。",
    options: {
      A: "锁定屏幕",
      B: "手动操纵",
      C: "校准",
      D: "资源管理器"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 50,
    type: "single_choice",
    question: "在恢复机器人系统的文件夹中，存储机器人程序代码的文件夹是（）。",
    options: {
      A: "RAPID",
      B: "SYSPAR",
      C: "System.xml",
      D: "HOME"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 51,
    type: "single_choice",
    question: "声明RawBytes变量时，将RawBytes中的所有字节设置为（）。",
    options: {
      A: "1",
      B: "0",
      C: "2",
      D: "4"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 52,
    type: "single_choice",
    question: "声明RawBytes变量时，将变量中的当前有效字节长度设置为（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "4"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 53,
    type: "single_choice",
    question: "工业机器人端与PLC的通信一般是在（ ）任务中进行的。",
    options: {
      A: "TASK",
      B: "T_ROB1",
      C: "Com",
      D: "Main"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 54,
    type: "single_choice",
    question: "配置ABB机器人的组输入信号，最多可配置（ ）个点。",
    options: {
      A: "16",
      B: "32",
      C: "64",
      D: "8"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 55,
    type: "single_choice",
    question: "ABB机器人出厂时，控制器采用（ ）急停保护机制，位于（ ）端口。",
    options: {
      A: "单回路；X7",
      B: "双回路；X7,X8",
      C: "三回路；X7,X8,X9",
      D: "双回路；X7,X9"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 56,
    type: "single_choice",
    question: "ABB控制器上的（ ）和（ ）端口同时接通时才能消除急停。",
    options: {
      A: "X7,X8",
      B: "X7,X9",
      C: "X8,X9",
      D: "X7,X5"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 57,
    type: "single_choice",
    question: "定义机械臂和外轴移动速率的数据是（ ）。",
    options: {
      A: "robspeed",
      B: "robjoint",
      C: "speeddata",
      D: "robtarget"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 58,
    type: "single_choice",
    question: "将reg2数值赋值给reg1的指令是（ ）。",
    options: {
      A: "reg1 := reg2",
      B: "reg2 := reg1",
      C: "reg1 = reg2",
      D: "reg1 ≡ reg2"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 59,
    type: "single_choice",
    question: "工业机器人用吸盘工具拾取物体，是靠（ ）把吸附头与物体压在一起，实现物体拾取。",
    options: {
      A: "机械手指",
      B: "电线圈产生的电磁",
      C: "大气压力",
      D: "摩擦力"
    },
    answer: "C",
    category: "应用技术"
  },
  {
    id: 60,
    type: "single_choice",
    question: "RobotStudio软件中，子组件LineSensor属于（）。",
    options: {
      A: "动作",
      B: "本体",
      C: "传感器",
      D: "其他"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 61,
    type: "single_choice",
    question: "检测物体接触面之间相对运动速度大小和方向的传感器是（）。",
    options: {
      A: "接近觉传感器",
      B: "接触觉传感器",
      C: "滑觉传感器",
      D: "压觉传感器"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 62,
    type: "single_choice",
    question: "RAPID编程中，使用一个数字输出信号触发中断的指令是（）。",
    options: {
      A: "ISignalAO",
      B: "ISignalAI",
      C: "ISignalDO",
      D: "ISignalDI"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 63,
    type: "single_choice",
    question: "视觉应用中，随着工作距离变小，视野相应（）。",
    options: {
      A: "不变",
      B: "变小",
      C: "变大",
      D: "不确定"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 64,
    type: "single_choice",
    question: "下列设备中，不属于焊接机器人系统的是（）。",
    options: {
      A: "机器人本体",
      B: "焊枪",
      C: "焊接电源",
      D: "夹爪工具"
    },
    answer: "D",
    category: "应用技术"
  },
  {
    id: 65,
    type: "single_choice",
    question: "RAPID编程中，连接一个中断符号到中断程序的指令是（）。",
    options: {
      A: "GetTrap",
      B: "Ipers",
      C: "CONNECT",
      D: "GetTrapData"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 66,
    type: "single_choice",
    question: "指令ISignalDI中的Singal参数启用后，此中断会响应指定输入信号（）次。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "无限"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 67,
    type: "single_choice",
    question: "以下无需“请求写权限”即可使用的RobotStudio软件在线的功能有（）。",
    options: {
      A: "在线修改程序",
      B: "机器人系统恢复",
      C: "在线添加指令",
      D: "机器人系统备份"
    },
    answer: "D",
    category: "安全维护"
  },
  {
    id: 68,
    type: "single_choice",
    question: "RAPID编程中，限制机器人运行最高速度的指令是（）。",
    options: {
      A: "AccSet",
      B: "ConfL",
      C: "VelSet",
      D: "Speed"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 69,
    type: "single_choice",
    question: "关于中断程序TRAP，以下说法错误的是（）。",
    options: {
      A: "中断程序执行时，原程序处于等待状态",
      B: "中断程序可以嵌套",
      C: "可以使用中断失效指令来限制中断程序的执行",
      D: "运动类指令不能出现在中断程序中"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 70,
    type: "single_choice",
    question: "ABB IRB120机器人本体基座上不包含（ ）。",
    options: {
      A: "集成气源接口",
      B: "集成信号接口",
      C: "动力电缆接口",
      D: "示教器接口"
    },
    answer: "D",
    category: "安全维护"
  },
  {
    id: 71,
    type: "single_choice",
    question: "以下在ABB示教盒上使用“快速设置菜单”不能设置的是（）。",
    options: {
      A: "速度",
      B: "运行模式",
      C: "增量",
      D: "工具坐标系"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 72,
    type: "single_choice",
    question: "以下不属于现场总线通讯的是（）。",
    options: {
      A: "DeviceNet",
      B: "ProfibusDP",
      C: "EtherNet/IP",
      D: "Socket Message"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 73,
    type: "single_choice",
    question: "在RobotStudio软件中使用TCP跟踪功能，“TCP跟踪\"选项不能设置（）。",
    options: {
      A: "跟踪长度",
      B: "接近丢失距离",
      C: "跟踪轨迹颜色",
      D: "提示颜色"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 74,
    type: "single_choice",
    question: "ABB IRB120机器人的紧凑型控制器，其安全信号位于（）接口上。",
    options: {
      A: "XS7,XS8",
      B: "XS8,XS9",
      C: "XS7,XS8,XS9",
      D: "XS7,XS9"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 75,
    type: "single_choice",
    question: "气管接头一般分为金属接头和（）。",
    options: {
      A: "炭纤维接头",
      B: "木质接头",
      C: "塑料接头",
      D: "玻璃纤维"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 76,
    type: "single_choice",
    question: "下列Smart组件中，不属于子组件“动作”的有（）。",
    options: {
      A: "Attacher",
      B: "Rotator",
      C: "Detacher",
      D: "Show"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 77,
    type: "single_choice",
    question: "机器视觉系统不能进行物体（）的判断。",
    options: {
      A: "材质",
      B: "尺寸",
      C: "形状",
      D: "颜色"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 78,
    type: "single_choice",
    question: "以下属于工业机器人内部传感器的是（）。",
    options: {
      A: "视觉传感器",
      B: "力觉传感器",
      C: "距离传感器",
      D: "速度传感器"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 79,
    type: "single_choice",
    question: "执行“VelSet 50,800;MoveL p1,v1000,z10,tool1;”两条指令后，机器人的运行速度为（）。",
    options: {
      A: "800mm/s",
      B: "1000mm/s",
      C: "500mm/s",
      D: "400mm/s"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 80,
    type: "single_choice",
    question: "激活机器人外轴的指令是（）。",
    options: {
      A: "DeactUnit",
      B: "ActUnit",
      C: "ConfL",
      D: "Confl"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 81,
    type: "single_choice",
    question: "Incr reg1；等同于（）。",
    options: {
      A: "reg1:=reg1-1;",
      B: "reg1:=0;",
      C: "reg1:=1;",
      D: "reg1:=reg1+1;"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 82,
    type: "single_choice",
    question: "将机器人输出信号值置反的指令是（）。",
    options: {
      A: "Set DO",
      B: "InvertDO",
      C: "IOEnable",
      D: "SetGO"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 83,
    type: "single_choice",
    question: "机器人在执行程序时，动作指针通常比程序指针移动的速度（）。",
    options: {
      A: "更慢",
      B: "更快",
      C: "一样",
      D: "不确定"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 84,
    type: "single_choice",
    question: "在机器人弧焊中，控制焊接电流或送丝速度的信号类型为（）。",
    options: {
      A: "DO",
      B: "AO",
      C: "AI",
      D: "DI"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 85,
    type: "single_choice",
    question: "在机器人弧焊中，起弧和送气控制的机器人信号类型为（）。",
    options: {
      A: "DO",
      B: "AO",
      C: "AI",
      D: "DI"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 86,
    type: "single_choice",
    question: "在机器人弧焊中，焊机起弧成功后通知机器人的信号类型为（）。",
    options: {
      A: "DO",
      B: "AO",
      C: "AI",
      D: "DI"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 87,
    type: "single_choice",
    question: "使用焊枪示教前，检查焊枪的均压装置是否良好，动作是否正常，同时对电极头的要求是（）。",
    options: {
      A: "更换新的电极头",
      B: "使用磨耗量大的电极头",
      C: "新的或旧的都行",
      D: "电极头无影响"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 88,
    type: "single_choice",
    question: "示教编程器上安全开关握紧为ON，松开为OFF状态，作为进而追加的功能，当握紧力过大时，为（）状态。",
    options: {
      A: "OFF",
      B: "ON",
      C: "不变",
      D: "急停报错"
    },
    answer: "A",
    category: "安全维护"
  },
  {
    id: 89,
    type: "single_choice",
    question: "PLC采用了一系列可靠性设计，如（）、掉电保护、故障诊断和性信息保护及恢复等。",
    options: {
      A: "简单设计",
      B: "简化设计",
      C: "冗余设计",
      D: "功能设计"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 90,
    type: "single_choice",
    question: "对于有规律的轨迹，仅示教几个特征点，计算机就能利用（）获得中间点的坐标。",
    options: {
      A: "优化算法",
      B: "平滑算法",
      C: "预测算法",
      D: "插补算法"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 91,
    type: "single_choice",
    question: "( )是整个机器人系统设计的关键环节，它直接影响工作站的总体布局、机器人型号的选定、末端执行器和变位机的设计等，在进行总体方案设计时应引起足够的重视。",
    options: {
      A: "分析作业对象，拟定合理的作业工艺",
      B: "生产节拍",
      C: "系统维护",
      D: "安全规范和标准"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 92,
    type: "single_choice",
    question: "I/O模块是设计机器人弧焊工作站时的必选器件，其包含模拟量I/O和数字量I/O两种形式，模拟信号和数字信号的区别在于（）。",
    options: {
      A: "数字信号大小不连续，时间上连续，而模拟信号相反",
      B: "数字信号大小连续，时间上不连续，而模拟信号相反",
      C: "数字信号大小和时间均不连续，而模拟信号相反",
      D: "数字信号大小和时间均连续，而模拟信号相反"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 93,
    type: "single_choice",
    question: "指令（）可用于读取当前机器人TCP位置数据。",
    options: {
      A: "CRobtT",
      B: "CJointT",
      C: "Confl",
      D: "ConfJ"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 94,
    type: "single_choice",
    question: "机器视觉系统不能对图像进行（）。",
    options: {
      A: "获取",
      B: "处理和分析",
      C: "输出或显示",
      D: "绘制"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 95,
    type: "single_choice",
    question: "清除rawbytes数据类型变量的内容的指令是（）。",
    options: {
      A: "ClsRawBytes",
      B: "ClearRawBytes",
      C: "DelRawBytes",
      D: "VarRawBytes"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 96,
    type: "single_choice",
    question: "机器人的精度主要依存于（）、控制算法误差与分辨率系统误差。",
    options: {
      A: "传动误差",
      B: "关节间隙",
      C: "机械误差",
      D: "连杆机构的挠性"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 97,
    type: "single_choice",
    question: "焊接机器人分为点焊机器人和（）。",
    options: {
      A: "线焊机器人",
      B: "弧焊机器人",
      C: "非点焊机器人",
      D: "面焊机器人"
    },
    answer: "B",
    category: "应用技术"
  },
  {
    id: 98,
    type: "single_choice",
    question: "用于检测机器人作业对象及作业环境状态的是（）传感器。",
    options: {
      A: "内部",
      B: "外部",
      C: "电子",
      D: "电磁"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 99,
    type: "single_choice",
    question: "RobotStudio软件中，在XY平面上移动工件的位置，可选中Freehand中（）按钮，再拖动工件。",
    options: {
      A: "移动",
      B: "拖曳",
      C: "旋转",
      D: "手动关节"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 100,
    type: "single_choice",
    question: "RobotStudio 软件中，创建固体部件，其参考坐标系为（ ）。",
    options: {
      A: "基坐标系",
      B: "大地坐标系",
      C: "工件坐标系",
      D: "工具坐标系"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 101,
    type: "single_choice",
    question: "RobotStudio 软件中，测量椎体顶角的角度，需要选中（ ）个点。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 102,
    type: "single_choice",
    question: "不创建虚拟控制系统，RobotStudio 软件中机器人的以下操作无效（ ）。",
    options: {
      A: "机械手动关节",
      B: "机械手动线性",
      C: "回到机械原点",
      D: "显示工作区域"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 103,
    type: "single_choice",
    question: "RobotStudio 软件中，创建机器人用工具“设定本地原点”的参考坐标系为( )。",
    options: {
      A: "基坐标系",
      B: "大地坐标系",
      C: "工件坐标系",
      D: "工具坐标系"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 104,
    type: "single_choice",
    question: "将机器人示教盒屏幕上所有显示清除的指令是（ ）。",
    options: {
      A: "TPReadFK",
      B: "ErrWrite",
      C: "TPWrite",
      D: "TPErase"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 105,
    type: "single_choice",
    question: "使用人机交互指令（ ），可在示教盒屏上显示指定内容。",
    options: {
      A: "TPReadFK",
      B: "ErrWrite",
      C: "TPWrite",
      D: "TPErase"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 106,
    type: "single_choice",
    question: "同一程序内部的跳转可以用指令（ ）实现。",
    options: {
      A: "LABEL、GOTO",
      B: "ProCall",
      C: "CallByVar",
      D: "FOR"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 107,
    type: "single_choice",
    question: "机器人SMB电池位于（ ）。",
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
    id: 108,
    type: "single_choice",
    question: "下列不属于RobotStudio离线编程软件的特点的是（）。",
    options: {
      A: "支持多种格式的三维CAD模型",
      B: "支持多种品牌及型号的机器人",
      C: "可自动识别CAD模型的点、线、面信息生成轨迹",
      D: "可制作工作站仿真动画"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 109,
    type: "single_choice",
    question: "以下哪种机器人的运动方式不可控（）。",
    options: {
      A: "关节运动",
      B: "线性运动",
      C: "圆周运动",
      D: "绝对位置运动"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 110,
    type: "single_choice",
    question: "机器人的精度主要依存于机械误差、控制算法误差与分辨率系统误差。一般说来（）。",
    options: {
      A: "重复定位精度高于绝对定位精度",
      B: "绝对定位精度高于重复定位精度",
      C: "机械精度高于控制精度",
      D: "控制精度高于分辨率精度"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 111,
    type: "single_choice",
    question: "关于机器人与PLC的I/O通信，以下正确的有（ )。",
    options: {
      A: "PLC的输入是机器人的输入",
      B: "PLC的输出是机器人的输入",
      C: "机器人的输出是PLC的输出",
      D: "以上都不正确"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 112,
    type: "single_choice",
    question: "以下不属于焊接机器人系统的安全与卫生装置的是（ ）。",
    options: {
      A: "安全围栏",
      B: "安全光栅",
      C: "排烟装置",
      D: "大风扇"
    },
    answer: "D",
    category: "安全维护"
  },
  {
    id: 113,
    type: "single_choice",
    question: "关于DSQC652描述不正确的是（）。",
    options: {
      A: "16点输入",
      B: "16点输出",
      C: "输出高电平",
      D: "2个模拟量输出"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 114,
    type: "single_choice",
    question: "在RobotStudio软件中，实现物料沿X方向移动，可以使用（ ）Smar组件。",
    options: {
      A: "Source",
      B: "LinerMover",
      C: "Attacher",
      D: "Detacher"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 115,
    type: "single_choice",
    question: "在RobotStudio软件中，实现吸盘工具对物料的抓取，可使用（ ）Smar组件。",
    options: {
      A: "LinerMover",
      B: "Source",
      C: "Attacher",
      D: "Detacher"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 116,
    type: "single_choice",
    question: "RobotStudio软件中，将指定部件放置到指定位置的方法不包括（ ）。",
    options: {
      A: "一点法",
      B: "两点法",
      C: "三点法",
      D: "四点法"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 117,
    type: "single_choice",
    question: "一个刚体在空间运动具有（ ）自由度。",
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
    id: 118,
    type: "single_choice",
    question: "对于转动关节而言，关节变量是D-H参数中的（ ）。",
    options: {
      A: "关节角",
      B: "杆件长度",
      C: "横距",
      D: "扭转角"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 119,
    type: "single_choice",
    question: "对于移动（平动）关节而言，关节变量是D-H参数中的（ ）。",
    options: {
      A: "关节角",
      B: "杆件长度",
      C: "横距",
      D: "扭转角"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 120,
    type: "single_choice",
    question: "以下对ABB IRB120型机器人描述不正确的是（ ）。",
    options: {
      A: "重复定位精度±0.01mm",
      B: "额定负载3kg",
      C: "工作范围580mm",
      D: "本体重量3kg"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 121,
    type: "single_choice",
    question: "机器人手部的力量来自于（ ）。",
    options: {
      A: "机器人的全部关节",
      B: "机器人手部的关节",
      C: "决定机器人手部位置的各关节",
      D: "决定机器人手部位姿的各个关节"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 122,
    type: "single_choice",
    question: "RobotStudio软件的测量功能不包括（）。",
    options: {
      A: "直径",
      B: "角度",
      C: "重心",
      D: "最短距离"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 123,
    type: "single_choice",
    question: "以机器人TCP点的位置和姿态记录机器人位置的数据是（ ）。",
    options: {
      A: "jointtarget",
      B: "inposdata",
      C: "robtarget",
      D: "loaddata"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 124,
    type: "single_choice",
    question: "以机器人各个关节值来记录机器人位置的数据是（ ）。",
    options: {
      A: "jointtarget",
      B: "inposdata",
      C: "robtarget",
      D: "loaddata"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 125,
    type: "single_choice",
    question: "通过设定坐标偏差量使工业机器人坐标通过编程进行实时转换的指令是（）。",
    options: {
      A: "EoffsOn",
      B: "PDispOn",
      C: "PDispOff",
      D: "PDispSet"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 126,
    type: "single_choice",
    question: "机器人脉冲输出指令PulseDO默认输出长度（ ）。",
    options: {
      A: "0.1s",
      B: "0.2s",
      C: "1s",
      D: "32s"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 127,
    type: "single_choice",
    question: "机器人目标点robtarget的数据不包括（ ）。",
    options: {
      A: "TCP位置数据",
      B: "TCP姿态数据",
      C: "轴配置数据",
      D: "TCP运行速度"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 128,
    type: "single_choice",
    question: "通过数字输入信号触发中断的指令是（ ）。",
    options: {
      A: "ISignalDI",
      B: "Isleep",
      C: "ISignalDO",
      D: "ISignalAO"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 129,
    type: "single_choice",
    question: "指令“VAR num reg1{3} := [1,2,3];reg2:=reg1{2};”reg2 被赋值为（ ）。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "0"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 130,
    type: "single_choice",
    question: "RobotStudio仿真的碰撞监控功能，不能设定的碰撞设置为（ ）。",
    options: {
      A: "碰撞颜色",
      B: "接近丢失颜色",
      C: "碰撞速度",
      D: "接近丢失距离"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 131,
    type: "single_choice",
    question: "身上着火后，下列哪种灭火方法是错误的（ ）。",
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
    id: 132,
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
    id: 133,
    type: "single_choice",
    question: "人体触电的致命因素是（ ）。",
    options: {
      A: "电压",
      B: "电阻",
      C: "电流",
      D: "通电时间"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 134,
    type: "single_choice",
    question: "在防静电场所，下列哪种行为是正确的？（ ）",
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
    id: 135,
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
    id: 136,
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
    id: 137,
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
    id: 138,
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
    id: 139,
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
    id: 140,
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
    id: 141,
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
    id: 142,
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
    id: 143,
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
    id: 144,
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
    id: 145,
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
    id: 146,
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
    id: 147,
    type: "single_choice",
    question: "维修人员进入设备维修需要将启动控制锁住并挂标志锁（LOTO锁），目的是：（）",
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
    id: 148,
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
    id: 149,
    type: "single_choice",
    question: "对机器人进行示教时，模式旋钮打到示教模式后，在此模式中，外部设备发出的启动程序信号（）。",
    options: {
      A: "无效",
      B: "有效",
      C: "延时后有效",
      D: "视情况而"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 150,
    type: "single_choice",
    question: "示教器不能放在以下哪个地方？（）",
    options: {
      A: "机器人控制柜上",
      B: "随手携带",
      C: "变位机上",
      D: "挂在操作位置"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 151,
    type: "single_choice",
    question: "变频器是通过改变交流电动机定子电压、频率等参数来调节（）的装置。",
    options: {
      A: "电动机转速",
      B: "电动机转矩",
      C: "电动机功率",
      D: "电动机性能"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 152,
    type: "single_choice",
    question: "十六进制的1F，转变为十进制是（）",
    options: {
      A: "31",
      B: "15",
      C: "30",
      D: "32"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 153,
    type: "single_choice",
    question: "触摸屏实现数值输入时，要对应PLC内部的（ ）。",
    options: {
      A: "输入点X",
      B: "输入点Y",
      C: "数据存储器",
      D: "中间继电器M"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 154,
    type: "single_choice",
    question: "二进制数1011101等于十进制数的（）",
    options: {
      A: "92",
      B: "93",
      C: "94",
      D: "95"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 155,
    type: "single_choice",
    question: "PLC的实际输出状态取决于（）",
    options: {
      A: "输出锁存器的状态",
      B: "输出映像寄存器的状态",
      C: "程序执行阶段的结果",
      D: "其它"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 156,
    type: "single_choice",
    question: "传感器的运用，使得机器人具有了一定的（）能力。",
    options: {
      A: "一般",
      B: "重复工作",
      C: "识别判断",
      D: "逻辑思维"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 157,
    type: "single_choice",
    question: "远程控制，从主程序启动机器人程序，可使用系统输入（）。",
    options: {
      A: "START",
      B: "MOTORONSTART",
      C: "STARTATMAIN",
      D: "RUN"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 158,
    type: "single_choice",
    question: "下列设备中，不属于工作站机械系统维护范畴的是（）。",
    options: {
      A: "机器人本体",
      B: "工件传输单元",
      C: "焊接电源",
      D: "末端执行器"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 159,
    type: "single_choice",
    question: "无障碍旋转的关节运动，通常用（ ）来标记。",
    options: {
      A: "R",
      B: "S",
      C: "T",
      D: "W"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 160,
    type: "single_choice",
    question: "压力控制阀包括（ ）。",
    options: {
      A: "单向阀",
      B: "顺序阀",
      C: "节流阀",
      D: "压力表"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 161,
    type: "single_choice",
    question: "机器人故障排查中，发现伺服驱动器的抱闸电压输出正常，为24V，而伺服电机侧的抱闸电压为0V，则故障原因为（ ）。",
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
    id: 162,
    type: "single_choice",
    question: "正常情况下机器人第六轴可以运行（ ）。",
    options: {
      A: "180°",
      B: "360°",
      C: "大于 360°",
      D: "90°"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 163,
    type: "single_choice",
    question: "模拟通信系统与数字通信系统的主要区别是（ ）。",
    options: {
      A: "载波频率不一样",
      B: "信道传送的信号不一样",
      C: "调制方式不一样",
      D: "编码方式不一样"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 164,
    type: "single_choice",
    question: "创建信号组输出 go1，地址占用 2、4、5、7，则地址正确写法为（ ）。",
    options: {
      A: "2、4、5、7",
      B: "2,4,5,7",
      C: "2-7",
      D: "5-7"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 165,
    type: "single_choice",
    question: "标准 IO 板卡总线端子上，剪断第 8、10、11 针脚产生的地址为（ ）。",
    options: {
      A: "11",
      B: "26",
      C: "29",
      D: "27"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 166,
    type: "single_choice",
    question: "ABB 提供的标准 IO 板卡一般为（ ）类型。",
    options: {
      A: "PNP 类型",
      B: "NPN 类型",
      C: "PNP\\NPN 通用类型",
      D: "MPM 类型"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 167,
    type: "single_choice",
    question: "在一般焊接应用中，机器人常使用（ ）类型的标准 IO 板卡。",
    options: {
      A: "DSQC651",
      B: "DSQC652",
      C: "DSQC653",
      D: "DSQC654"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 168,
    type: "single_choice",
    question: "力传感器通常不会安装在工业机器人的哪个位置（ ）。",
    options: {
      A: "机座",
      B: "机器人腕部",
      C: "手指指尖",
      D: "关节驱动器轴上"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 169,
    type: "single_choice",
    question: "用来表征机器人重复定位其手部到达同一目标位置的能力的参数是（ ）。",
    options: {
      A: "重复定位精度",
      B: "速度",
      C: "工作范围",
      D: "定位精度"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 170,
    type: "single_choice",
    question: "下面哪一项不属于工业机器人子系统（ ）。",
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
    id: 171,
    type: "single_choice",
    question: "（ ）是指机器人的指、肢和关节等在运动中所受力的感知。",
    options: {
      A: "视觉传感器",
      B: "触觉传感器",
      C: "力觉传感器",
      D: "速度传感器"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 172,
    type: "single_choice",
    question: "测量机器人关节（ ）和角位移的传感器是机器人位置反馈控制中必不可少的元件。",
    options: {
      A: "脉冲位移",
      B: "增量位移",
      C: "线位移",
      D: "重量增量"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 173,
    type: "single_choice",
    question: "在（），采用谐波传动减速器更显示出其优越性。",
    options: {
      A: "传动系统中",
      B: "高扭矩传动系统中",
      C: "高动态性能的伺服系统中",
      D: "高负载传动系统中"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 174,
    type: "single_choice",
    question: "减速机按照传动的布置形式可分为展开式、分流式和（）。",
    options: {
      A: "双轴式",
      B: "分层式",
      C: "同进轴式",
      D: "反向轴式"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 175,
    type: "single_choice",
    question: "摩擦带传动是依靠（）来传递运动和功率的。",
    options: {
      A: "带与带轮接触面之间的正压力",
      B: "带的紧边拉力",
      C: "带与带轮接触面之间的摩擦力",
      D: "带的松边拉力"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 176,
    type: "single_choice",
    question: "一般机器人操作机中，决定姿态的机构是（）。",
    options: {
      A: "端拾器",
      B: "基座",
      C: "手臂",
      D: "手腕"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 177,
    type: "single_choice",
    question: "允许机器人手臂各零件之间发生相对运动的机构称为（）。",
    options: {
      A: "机座",
      B: "机身",
      C: "手腕",
      D: "关节"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 178,
    type: "single_choice",
    question: "机器人语言是由（）表示的\"0\"和\"1\"组成的字串机器码。",
    options: {
      A: "二进制",
      B: "十进制",
      C: "八进制",
      D: "十六进制"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 179,
    type: "single_choice",
    question: "在恢复机器人系统的文件夹中，存储机器人系统信息的文件夹是（）。",
    options: {
      A: "RAPID",
      B: "SYSPAR",
      C: "System.xml",
      D: "HOME"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 180,
    type: "single_choice",
    question: "示教盒的作用不包括（）。",
    options: {
      A: "点动机器人",
      B: "离线编程",
      C: "试运行程序",
      D: "查阅机器人状态"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 181,
    type: "single_choice",
    question: "机器人手腕上的自由度主要起的作用为（）。",
    options: {
      A: "支承手部",
      B: "固定手部",
      C: "弯曲手部",
      D: "装饰"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 182,
    type: "single_choice",
    question: "工业机器人由主体、（）和控制系统三个基本部分组成。",
    options: {
      A: "机柜",
      B: "驱动系统",
      C: "计算机",
      D: "气动系统"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 183,
    type: "single_choice",
    question: "伺服控制系统一般包括控制器、被控对象、执行环节、比较环节和（）。",
    options: {
      A: "换向结构",
      B: "转换电路",
      C: "存储电路",
      D: "检测环节"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 184,
    type: "single_choice",
    question: "数字图像处理研究的内容不包括（）。",
    options: {
      A: "图像数字化",
      B: "图像增强",
      C: "图像分割",
      D: "图像存储"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 185,
    type: "single_choice",
    question: "大小为1024X1024，灰度级别为256色的图像文件大小为（）。",
    options: {
      A: "512KB",
      B: "1MB",
      C: "1.5MB",
      D: "2MB"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 186,
    type: "single_choice",
    question: "通过（）方式，可以进一步减小步进电机的步距角，从而提高其走步精度。",
    options: {
      A: "细分",
      B: "提高频率",
      C: "减小电压",
      D: "改变控制算法"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 187,
    type: "single_choice",
    question: "具有监测对象与平面相交功能的子组件是（）。",
    options: {
      A: "JointMover",
      B: "VolumeSensor",
      C: "PlaneSensor",
      D: "Queue"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 188,
    type: "single_choice",
    question: "ABB机器人在仿真环境下，进行手动线性运动后，位置会发生变化，（）操作可使机器人回到原始位置。",
    options: {
      A: "设定位置",
      B: "修改机械装置",
      C: "机械装置手动关节",
      D: "回到机械原点"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 189,
    type: "single_choice",
    question: "RobotStudio软件中，子组件Source属于（）。",
    options: {
      A: "动作",
      B: "本体",
      C: "传感器",
      D: "其他"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 190,
    type: "single_choice",
    question: "下列指令中哪一个不是计数器指令（）",
    options: {
      A: "TON",
      B: "CTUD",
      C: "CTU",
      D: "CTD"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 191,
    type: "single_choice",
    question: "在PLC编程中，最常用的编程语言是（）。",
    options: {
      A: "LAD",
      B: "STL",
      C: "FBD",
      D: "C"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 192,
    type: "single_choice",
    question: "Z100指机器人TCP在规定路径上，（），使机器人动作圆滑、流畅。",
    options: {
      A: "在直径圆中转向",
      B: "在目标点速度降为零",
      C: "速度为100",
      D: "转弯角度为100度"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 193,
    type: "single_choice",
    question: "在工件所在的平面上只需要定义（）个点，就可以建立工件坐标系。",
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
    id: 194,
    type: "single_choice",
    question: "射频识别技术是一项利用（）通过空间耦合(交变磁场或电磁场)实现无接触信息传递并通过所传递的信息达到识别目的的技术。",
    options: {
      A: "电磁信号",
      B: "射频信号",
      C: "电流信号",
      D: "电压信号"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 195,
    type: "single_choice",
    question: "传感器的输出信号达到稳定时，输出信号变化与输入信号变化的比值代表传感器的（）参数。",
    options: {
      A: "抗干扰能力",
      B: "精度",
      C: "线性度",
      D: "灵敏度"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 196,
    type: "single_choice",
    question: "机器人的精度主要依存于（）、控制算法误差与分辨率系统误差。",
    options: {
      A: "传动误差",
      B: "关节间隙",
      C: "机械误差",
      D: "连杆机构的挠性"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 197,
    type: "single_choice",
    question: "六自由度关节式工业机器人因其高速、高重复定位精度等特点，在焊接、搬运、码垛等领域实现了广泛的应用，在设计机器人上下料工作站时，除负载、臂展等指标外，应着重关注的指标是（）。",
    options: {
      A: "重复定位精度",
      B: "绝对定位精度",
      C: "轨迹精度和重复性",
      D: "关节最大速度"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 198,
    type: "single_choice",
    question: "水平作业的流水生产线主要由传输单元来实现工件在各工位的有序流动，（）是一种常用的水平传输单元。",
    options: {
      A: "动力输送机",
      B: "重力式输送机",
      C: "搬运机器人",
      D: "悬臂式移载机构"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 199,
    type: "single_choice",
    question: "要搬运体积大、重量轻的物料，如冰箱壳体、纸壳箱等，应该优先选用（）",
    options: {
      A: "机械式气动夹爪",
      B: "磁力吸盘",
      C: "真空式吸盘",
      D: "机械式液动夹爪"
    },
    answer: "C",
    category: "应用技术"
  },
  {
    id: 200,
    type: "single_choice",
    question: "机器视觉系统是一种（）的光传感系统，同时集成软硬件，综合现代计算机，光学、电子技术。",
    options: {
      A: "非接触式",
      B: "接触式",
      C: "自动控制",
      D: "智能控制"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 201,
    type: "single_choice",
    question: "视觉应用中，随着工作距离变大，视野相应（）。",
    options: {
      A: "不变",
      B: "变小",
      C: "变大",
      D: "不确定"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 202,
    type: "single_choice",
    question: "传感器包括以下三个功能部件：敏感元件、传感元件、（）元件。",
    options: {
      A: "辅助",
      B: "控制",
      C: "执行",
      D: "转换"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 203,
    type: "single_choice",
    question: "传感器在整个测量范围内所能辨别的被测量的最小变化量，或者所能辨别的不同被测量的个数，被称之为传感器的（）。",
    options: {
      A: "精度",
      B: "重复性",
      C: "分辨率",
      D: "灵敏度"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 204,
    type: "single_choice",
    question: "压电式传感器，即应用半导体压电效应可以测量（）。",
    options: {
      A: "电压",
      B: "亮度",
      C: "力和力矩",
      D: "距离"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 205,
    type: "single_choice",
    question: "6维力与力矩传感器主要用于（）",
    options: {
      A: "精密加工",
      B: "精密测量",
      C: "精密计算",
      D: "精密装配"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 206,
    type: "single_choice",
    question: "PLC的CPU逐条执行程序，将执行结果放到（）。",
    options: {
      A: "中间寄存器",
      B: "输出映像寄存器",
      C: "辅助寄存器",
      D: "输入映像寄存器"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 207,
    type: "single_choice",
    question: "步行机器人的行走机构多为（）。",
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
    id: 208,
    type: "single_choice",
    question: "高速在线测量中，为减小被测物模糊，需要选用（）照明技术。",
    options: {
      A: "条形光",
      B: "平行光",
      C: "频闪光",
      D: "结构光"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 209,
    type: "single_choice",
    question: "以下对梯形图编写的基本规则描述不正确的是（）。",
    options: {
      A: "线圈右边无触点",
      B: "线圈不能重复使用",
      C: "触点可水平可垂直书写",
      D: "顺序不同结果不同"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 210,
    type: "single_choice",
    question: "（ ）编程语言不能用于S7-1200编程。",
    options: {
      A: "LAD",
      B: "FBD",
      C: "STL",
      D: "SCL"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 211,
    type: "single_choice",
    question: "ABB机器人示教点的数据类型是（）。",
    options: {
      A: "tooldata",
      B: "string",
      C: "robtarget",
      D: "singdata"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 212,
    type: "single_choice",
    question: "在（）情况下，需要进行示教盒的触摸屏校准。",
    options: {
      A: "示教盒无法启动",
      B: "机器人系统丢失",
      C: "触摸屏出现点击错位",
      D: "机器人发生碰撞"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 213,
    type: "single_choice",
    question: "在恢复机器人系统的文件夹中，存储机器人配置参数的文件夹是（）。",
    options: {
      A: "RAPID",
      B: "SYSPAR",
      C: "System.xml",
      D: "HOME"
    },
    answer: "B",
    category: "安全维护"
  },
  {
    id: 214,
    type: "single_choice",
    question: "继电器电路图可用转换法向PLC梯形图转换，它们存在一一对应的关系。以下能用PLC的输出继电器取代的是（）。",
    options: {
      A: "交流接触器或电磁阀",
      B: "热继电器",
      C: "按钮开关",
      D: "限位开关"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 215,
    type: "single_choice",
    question: "时间继电器的作用是（）",
    options: {
      A: "短路保护",
      B: "过电流保护",
      C: "延时通断主回路",
      D: "研室通断控制回路"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 216,
    type: "single_choice",
    question: "RAPID编程中，取消制定的中断指令是（）",
    options: {
      A: "Idisable",
      B: "Idelete",
      C: "Ierror",
      D: "Ipers"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 217,
    type: "single_choice",
    question: "RobotStudio软件中，不属于捕捉模式的是（）",
    options: {
      A: "捕捉末端",
      B: "捕捉对象",
      C: "捕捉中点",
      D: "捕捉表面"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 218,
    type: "single_choice",
    question: "RRR型手腕是（ ）自由度手腕。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 219,
    type: "single_choice",
    question: "同步带传动属于（ ）传动，适合于在电动机和高速比减速器之间使用。",
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
    id: 220,
    type: "single_choice",
    question: "机器人的控制方式分为点位控制和（）",
    options: {
      A: "点对点控制",
      B: "点到点控制",
      C: "连续轨迹控制",
      D: "任意位置控制"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 221,
    type: "single_choice",
    question: "机器人作业路径通常用（ ）坐标系相对于工件坐标系的运动来描述。",
    options: {
      A: "手爪",
      B: "大地",
      C: "运动",
      D: "工具"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 222,
    type: "single_choice",
    question: "谐波传动的缺点是（）",
    options: {
      A: "扭转刚度低",
      B: "传动侧隙小",
      C: "惯量低",
      D: "精度高"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 223,
    type: "single_choice",
    question: "下列被测物理量适合于使用红外传感器进行测量的是（）",
    options: {
      A: "压力",
      B: "力矩",
      C: "温度",
      D: "厚度"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 224,
    type: "single_choice",
    question: "属于传感器动态特性指标的是（）",
    options: {
      A: "重复性",
      B: "线性度",
      C: "灵敏度",
      D: "固有频率"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 225,
    type: "single_choice",
    question: "按照工作原理分类，固体图象式传感器属于（ ）。",
    options: {
      A: "光电式传感器",
      B: "电容式传感器",
      C: "压电式传感器",
      D: "磁电式传感器"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 226,
    type: "single_choice",
    question: "传感检测系统目前正迅速地由模拟式、数字式，向（ ）方向发展。",
    options: {
      A: "机械化",
      B: "柔性化",
      C: "灵巧化",
      D: "智能化"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 227,
    type: "single_choice",
    question: "结构型传感器是依靠传感器（ ）的变化实现信号变换的。",
    options: {
      A: "材料物理特性",
      B: "体积大小",
      C: "结构参数",
      D: "电阻值"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 228,
    type: "single_choice",
    question: "速度继电器的动作转速一般不低于（ ）",
    options: {
      A: "0r/m",
      B: "120r/m",
      C: "1000r/m",
      D: "3600r/m"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 229,
    type: "single_choice",
    question: "将一个输入信号变成多个输出信号或将信号放大的继电器是（ ）。",
    options: {
      A: "中间继电器",
      B: "交流继电器",
      C: "热继电器",
      D: "时间继电器"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 230,
    type: "single_choice",
    question: "PLC的三种输出形式中，只能带直流负载是（ ）。",
    options: {
      A: "继电器输出",
      B: "晶体管输出",
      C: "晶闸管输出",
      D: "其它"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 231,
    type: "single_choice",
    question: "在电气控制回路中，启动按键在多地控制中是（ ）联结。",
    options: {
      A: "串联",
      B: "并联",
      C: "既可串联又可并联",
      D: "其它"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 232,
    type: "single_choice",
    question: "电机正反转运行中的两接触器必须实现相互间（ ）。",
    options: {
      A: "联锁",
      B: "自锁",
      C: "禁止",
      D: "记忆"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 233,
    type: "single_choice",
    question: "开关量输入模块的电压应与现场有源输入设备一致，如是无源输入信号，应根据（ ）选择电压。",
    options: {
      A: "与PLC的距离",
      B: "负载额定电压",
      C: "负载最大电压",
      D: "现场环境"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 234,
    type: "single_choice",
    question: "选用直流电源供电的PLC，原则上应选用稳压电源供电，至少应通过三相桥式整流、（ ）后供电。",
    options: {
      A: "滤波",
      B: "逆变",
      C: "抗干扰",
      D: "放大"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 235,
    type: "single_choice",
    question: "PLC的使用环境湿度一般在 20% ~ 90% ，环境湿度无法满足时，可采用安装（ ）等措施。",
    options: {
      A: "除尘器",
      B: "空气净化器",
      C: "空调",
      D: "自动除湿装置"
    },
    answer: "D",
    category: "安全维护"
  },
  {
    id: 236,
    type: "single_choice",
    question: "如果PLC共有1K个存储单元，每个单元能存储1个字的信息，其容量可表示为（）。",
    options: {
      A: "1000X16位",
      B: "1024W",
      C: "1024B",
      D: "1000W"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 237,
    type: "single_choice",
    question: "在梯形图编程中，常开触点与母线连接指令的助记符为（）。",
    options: {
      A: "LDI",
      B: "LD",
      C: "OR",
      D: "ORI"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 238,
    type: "single_choice",
    question: "PLC是把（）功能用特定的指令记忆在存储器中，通过数字或模拟输入、输出装置对机械自动化或过程自动化进行控制的数字式电子装置。",
    options: {
      A: "逻辑运算，顺序控制",
      B: "计数，计时，算术运算",
      C: "逻辑运算、顺序控制、计时、计数和算术运算等",
      D: "算术运算、逻辑运算"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 239,
    type: "single_choice",
    question: "通常PLC使用的编程语言为语句表、（）、功能图三种语言。",
    options: {
      A: "逻辑图",
      B: "BASIC",
      C: "梯形图",
      D: "步进图"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 240,
    type: "single_choice",
    question: "以下不属于PLC系统外部故障的是（）。",
    options: {
      A: "连接的传感器故障",
      B: "连接的网络通信设备故障",
      C: "连接的检测开关故障",
      D: "程序存储卡故障"
    },
    answer: "D",
    category: "安全维护"
  },
  {
    id: 241,
    type: "single_choice",
    question: "以下不属于PLC硬件系统组成的是（）。",
    options: {
      A: "中央处理单元",
      B: "输入输出接口",
      C: "用户程序",
      D: "I/O扩展接口"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 242,
    type: "single_choice",
    question: "以下不属于PLC的模拟量控制的是（）。",
    options: {
      A: "温度",
      B: "液位",
      C: "压力",
      D: "灯亮灭"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 243,
    type: "single_choice",
    question: "以下不属于PLC通信联网时用到的设备是（）。",
    options: {
      A: "RS-232或RS-422接口",
      B: "PLC专用通信模块",
      C: "普通电线",
      D: "光缆双绞线、同轴电缆"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 244,
    type: "single_choice",
    question: "热继电器在电路中做电动机的（）保护。",
    options: {
      A: "短路",
      B: "过载",
      C: "过流",
      D: "过压"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 245,
    type: "single_choice",
    question: "PLC的输出方式为晶体管型时，它适用于以下哪种负载？（）",
    options: {
      A: "感性",
      B: "交流",
      C: "直流",
      D: "交直流"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 246,
    type: "single_choice",
    question: "一副灰度级均匀分布的图像，其灰度范围在[0,255]，则该图像像素的存储位数为（）。",
    options: {
      A: "2",
      B: "4",
      C: "6",
      D: "8"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 247,
    type: "single_choice",
    question: "图像与灰度直方图间的对应关系是（）",
    options: {
      A: "一一对应",
      B: "多对一",
      C: "一对多",
      D: "多对多"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 248,
    type: "single_choice",
    question: "计算机显示器的颜色模型为（）",
    options: {
      A: "CMYK",
      B: "HIS",
      C: "RGB",
      D: "YIQ"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 249,
    type: "single_choice",
    question: "大小为1024X1024，灰度级别为256色的图像文件大小为（）。",
    options: {
      A: "512KB",
      B: "1MB",
      C: "1.5MB",
      D: "2MB"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 250,
    type: "single_choice",
    question: "十进制中的数字3对应的压缩BCD码为（）",
    options: {
      A: "00011",
      B: "0011",
      C: "0101",
      D: "#0011"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 251,
    type: "single_choice",
    question: "下列对PLC软继电器的描述，正确的是（）",
    options: {
      A: "有无数对常开和常闭触点供编程时使用",
      B: "只有2对常开和常闭触点供编程时使用",
      C: "不同型号的PLC的情况可能不一样",
      D: "以上说法都不正确"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 252,
    type: "single_choice",
    question: "PLC编程时的在线模拟的运行方式可分为扫描模式、连续单步运行和（）。",
    options: {
      A: "编程模式运行",
      B: "单步模式运行",
      C: "监视模式运行",
      D: "循环模式运行"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 253,
    type: "single_choice",
    question: "以下哪一项不属于RFID应用。（）",
    options: {
      A: "物流过程中的货物追踪，信息采集",
      B: "宠物识别管理",
      C: "ATM自助取存款机",
      D: "ETC路桥不停车收费系统"
    },
    answer: "C",
    category: "应用技术"
  },
  {
    id: 254,
    type: "single_choice",
    question: "以下对于RFID标签数据写入不正确描述是（）",
    options: {
      A: "RFID标签数据写入就是以射频耦合方式将标识对象的ID存储于标签内存之中",
      B: "数据写入量越多越好",
      C: "在确定的应用集成度下，数据写入越早越好",
      D: "数据写入可以采用读写器、智能标签打印机（编码器）等形式"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 255,
    type: "single_choice",
    question: "属于传感器静态特性指标的是（）",
    options: {
      A: "固有频率",
      B: "临界频率",
      C: "阻尼比",
      D: "重复比"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 256,
    type: "single_choice",
    question: "通常用应变式传感器测量（）",
    options: {
      A: "温度",
      B: "密度",
      C: "加速度",
      D: "电阻"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 257,
    type: "single_choice",
    question: "压电式传感器目前多用于测量（）",
    options: {
      A: "静态的力或压力",
      B: "动态的力或压力",
      C: "位移",
      D: "温度"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 258,
    type: "single_choice",
    question: "光敏电阻的特性是（）",
    options: {
      A: "有光照时亮电阻很大",
      B: "无光照时暗电阻很小",
      C: "无光照时暗电流很大",
      D: "受一定波长范围的光照时亮电流很大"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 259,
    type: "single_choice",
    question: "PLC系统中的指令根据功能划分可分为（）",
    options: {
      A: "常用指令和特殊指令",
      B: "基本指令和特殊功能指令",
      C: "逻辑指令和算术指令",
      D: "顺序指令和逻辑功能指令"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 260,
    type: "single_choice",
    question: "PLC在输入采样阶段执行的程序是（）",
    options: {
      A: "用户程序",
      B: "系统程序",
      C: "初始化程序",
      D: "其它"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 261,
    type: "single_choice",
    question: "常用的手臂回转运动机构不包括以下哪种。（）",
    options: {
      A: "齿轮传动机构",
      B: "链轮传动机构",
      C: "连杆机构",
      D: "丝杠螺母机构"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 262,
    type: "single_choice",
    question: "直线驱动机构中，传动效率最高的是（）",
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
    id: 263,
    type: "single_choice",
    question: "轨迹规划即将所有的关节变量表示为（ ）的函数。",
    options: {
      A: "位移",
      B: "速度",
      C: "时间",
      D: "加速度"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 264,
    type: "single_choice",
    question: "点位控制方式（PTP）的主要技术指标是（ ）。",
    options: {
      A: "定位精度和运动时间",
      B: "定位精度和运动速度",
      C: "运动速度和运动时间",
      D: "位姿轨迹和运动速度"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 265,
    type: "single_choice",
    question: "连续轨迹控制方式（CP）的主要技术指标是（ ）。",
    options: {
      A: "定位精度和运动时间",
      B: "位姿轨迹跟踪精度和平稳性",
      C: "位姿轨迹和平稳性",
      D: "位姿轨迹跟踪精度和运动时间"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 266,
    type: "single_choice",
    question: "机器人仿真轨迹路径中的（ ）点，根据需要可设定在机械原点处。",
    options: {
      A: "轨迹起始接近点",
      B: "轨迹结束离开点",
      C: "安全位置",
      D: "轨迹任意点"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 267,
    type: "single_choice",
    question: "创建夹爪Smart组件时，若要使夹爪释放工件后保持工件位置不变，需勾选动作Detacher中的（ ）。",
    options: {
      A: "Transition",
      B: "KeepPosition",
      C: "Active",
      D: "SensorOut"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 268,
    type: "single_choice",
    question: "处理目标点时可以批量进行，（ ）+鼠标左键选中剩余的所有目标点，再统一进行调整。",
    options: {
      A: "Alt",
      B: "Ctrl",
      C: "Shift",
      D: "Shift+Ctrl"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 269,
    type: "single_choice",
    question: "以下不属于PLC的数据处理功能应用的场合是（ ）。",
    options: {
      A: "大、中型控制系统",
      B: "柔性制造系统",
      C: "机器人控制系统",
      D: "普通机床电气系统"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 270,
    type: "single_choice",
    question: "对于转动关节而言，关节变量是D-H参数中的（ ）。",
    options: {
      A: "关节角",
      B: "杆件长度",
      C: "横距",
      D: "扭转角"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 271,
    type: "single_choice",
    question: "动力学的研究内容是将机器人的（ ）联系起来。",
    options: {
      A: "运动与控制",
      B: "传感器与控制",
      C: "结构与运动",
      D: "传感系统与运动"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 272,
    type: "single_choice",
    question: "用来表征机器人每根轴能够实现的最小移动距离或最小转动角度的参数是( )。",
    options: {
      A: "定位精度",
      B: "重复定位精度",
      C: "分辨率",
      D: "刚度"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 273,
    type: "single_choice",
    question: "机器人轨迹控制过程需要通过求解（ ），获得各个关节角的位置控制系统的设定值。",
    options: {
      A: "运动学正问题",
      B: "运动学逆问题",
      C: "动力学正问题",
      D: "动力学逆问题"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 274,
    type: "single_choice",
    question: "对于平移关节，关节变量D-H参数中的（）",
    options: {
      A: "关节角",
      B: "杆件长度",
      C: "横距",
      D: "扭转角"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 275,
    type: "single_choice",
    question: "对于有（）",
    options: {
      A: "优化算法",
      B: "平滑算法",
      C: "预测算法",
      D: "插补算法"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 276,
    type: "single_choice",
    question: "所谓无姿态插补，即保持第一个示教点时的姿态，在大多数情况下是机器人沿（ ）运动时出现。",
    options: {
      A: "平面圆弧",
      B: "直线",
      C: "平面曲线",
      D: "空间曲线"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 277,
    type: "single_choice",
    question: "传感器包括以下三个功能部件：敏感元件、传感元件、（）元件。",
    options: {
      A: "辅助",
      B: "控制",
      C: "执行",
      D: "转换"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 278,
    type: "single_choice",
    question: "传感器的运用，使得机器人具有了一定的（）能力。",
    options: {
      A: "一般",
      B: "重复工作",
      C: "识别判断",
      D: "逻辑思维"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 279,
    type: "single_choice",
    question: "远程控制，从主程序启动机器人程序，可使用系统输入（）。",
    options: {
      A: "START",
      B: "MOTORONSTART",
      C: "STARTATMAIN",
      D: "RUN"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 280,
    type: "single_choice",
    question: "下列设备中，不属于工作站机械系统维护范畴的是（）。",
    options: {
      A: "机器人本体",
      B: "工件传输单元",
      C: "焊接电源",
      D: "末端执行器"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 281,
    type: "single_choice",
    question: "无障碍旋转的关节运动，通常用（ ）来标记。",
    options: {
      A: "R",
      B: "S",
      C: "T",
      D: "W"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 282,
    type: "single_choice",
    question: "压力控制阀包括（ ）。",
    options: {
      A: "单向阀",
      B: "顺序阀",
      C: "节流阀",
      D: "压力表"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 283,
    type: "single_choice",
    question: "机器人故障排查中，发现伺服驱动器的抱闸电压输出正常，为24V，而伺服电机侧的抱闸电压为0V，则故障原因为（ ）。",
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
    id: 284,
    type: "single_choice",
    question: "正常情况下机器人第六轴可以运行（ ）。",
    options: {
      A: "180°",
      B: "360°",
      C: "大于 360°",
      D: "90°"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 285,
    type: "single_choice",
    question: "模拟通信系统与数字通信系统的主要区别是（ ）。",
    options: {
      A: "载波频率不一样",
      B: "信道传送的信号不一样",
      C: "调制方式不一样",
      D: "编码方式不一样"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 286,
    type: "single_choice",
    question: "机器人示教点的数据类型是（ ）。",
    options: {
      A: "tooldata",
      B: "string",
      C: "robtarget",
      D: "singdata"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 287,
    type: "single_choice",
    question: "在（），采用谐波传动减速器更显示出其优越性。",
    options: {
      A: "传动系统中",
      B: "高扭矩传动系统中",
      C: "高动态性能的伺服系统中",
      D: "高负载传动系统中"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 288,
    type: "single_choice",
    question: "减速机按照传动的布置形式可分为展开式、分流式和（）。",
    options: {
      A: "双轴式",
      B: "分层式",
      C: "同进轴式",
      D: "反向轴式"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 289,
    type: "single_choice",
    question: "摩擦带传动是依靠（）来传递运动和功率的。",
    options: {
      A: "带与带轮接触面之间的正压力",
      B: "带的紧边拉力",
      C: "带与带轮接触面之间的摩擦力",
      D: "带的松边拉力"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 290,
    type: "single_choice",
    question: "一般机器人操作机中，决定姿态的机构是（）。",
    options: {
      A: "端拾器",
      B: "基座",
      C: "手臂",
      D: "手腕"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 291,
    type: "single_choice",
    question: "允许机器人手臂各零件之间发生相对运动的机构称为（）。",
    options: {
      A: "机座",
      B: "机身",
      C: "手腕",
      D: "关节"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 292,
    type: "single_choice",
    question: "机器人语言是由（）表示的\"0\"和\"1\"组成的字串机器码。",
    options: {
      A: "二进制",
      B: "十进制",
      C: "八进制",
      D: "十六进制"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 293,
    type: "single_choice",
    question: "在恢复机器人系统的文件夹中，存储机器人系统信息的文件夹是（）。",
    options: {
      A: "RAPID",
      B: "SYSPAR",
      C: "System.xml",
      D: "HOME"
    },
    answer: "C",
    category: "安全维护"
  },
  {
    id: 294,
    type: "single_choice",
    question: "示教盒的作用不包括（）。",
    options: {
      A: "点动机器人",
      B: "离线编程",
      C: "试运行程序",
      D: "查阅机器人状态"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 295,
    type: "single_choice",
    question: "机器人手腕上的自由度主要起的作用为（）。",
    options: {
      A: "支承手部",
      B: "固定手部",
      C: "弯曲手部",
      D: "装饰"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 296,
    type: "single_choice",
    question: "工业机器人由主体、（）和控制系统三个基本部分组成。",
    options: {
      A: "机柜",
      B: "驱动系统",
      C: "计算机",
      D: "气动系统"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 297,
    type: "single_choice",
    question: "伺服控制系统一般包括控制器、被控对象、执行环节、比较环节和（）。",
    options: {
      A: "换向结构",
      B: "转换电路",
      C: "存储电路",
      D: "检测环节"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 298,
    type: "single_choice",
    question: "数字图像处理研究的内容不包括（）。",
    options: {
      A: "图像数字化",
      B: "图像增强",
      C: "图像分割",
      D: "图像存储"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 299,
    type: "single_choice",
    question: "大小为1024X1024，灰度级别为256色的图像文件大小为（）。",
    options: {
      A: "512KB",
      B: "1MB",
      C: "1.5MB",
      D: "2MB"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 300,
    type: "single_choice",
    question: "通过（）方式，可以进一步减小步进电机的步距角，从而提高其走步精度。",
    options: {
      A: "细分",
      B: "提高频率",
      C: "减小电压",
      D: "改变控制算法"
    },
    answer: "A",
    category: "设备管理"
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