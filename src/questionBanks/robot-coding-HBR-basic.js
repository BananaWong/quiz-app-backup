// questionBank.js - 工业机器人应用编程职业技能等级理论知识考核题库（HBR初级）
export const questionBank = [
  {
    id: 1,
    type: "single_choice",
    question: "系统正常启动后，RUN灯常亮（绿色），电机使能后，（）灯常亮（绿色）。",
    options: {
      A: "PRO",
      B: "RUN",
      C: "ERR",
      D: "PWR"
    },
    answer: "D",
    category: "设备参数"
  },
  {
    id: 2,
    type: "single_choice",
    question: "报警产生时，（）熄灭，并且ERR灯常亮（红色）。",
    options: {
      A: "PRO",
      B: "RUN",
      C: "ERR",
      D: "PWR"
    },
    answer: "B",
    category: "设备参数"
  },
  {
    id: 3,
    type: "single_choice",
    question: "对机器人进行示教时，模式旋钮打到示教模式后，在此模式中，外部设备发出的自动启动信号（）。",
    options: {
      A: "无效",
      B: "有效",
      C: "超前有效",
      D: "滞后有效"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 4,
    type: "single_choice",
    question: "正常联动生产时，机器人示教编程器上安全模式不应该打到（）位置上。",
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
    id: 5,
    type: "single_choice",
    question: "工业机器人有“T1”、“T2”、“AUT”运行方式，其中（）属于手动运行方式。",
    options: {
      A: "T1和T2",
      B: "T1和AUT",
      C: "T2和AUT",
      D: "AUT"
    },
    answer: "A",
    category: "设备参数"
  },
  {
    id: 6,
    type: "single_choice",
    question: "工业机器人使用“T1”运行方式，程序执行时最大速度为（）。",
    options: {
      A: "50mm/s",
      B: "250mm/s",
      C: "800mm/s",
      D: "1600mm/s"
    },
    answer: "B",
    category: "设备参数"
  },
  {
    id: 7,
    type: "single_choice",
    question: "手动运行模式用于调试工作，调试工作是指所有为使机器人系统上可进入（）运行模式而必须在其上所执行的工作。",
    options: {
      A: "操作",
      B: "编辑",
      C: "管理",
      D: "自动"
    },
    answer: "D",
    category: "设备参数"
  },
  {
    id: 8,
    type: "single_choice",
    question: "对机器人进行示教时，示教编程器上手动速度可设置为（）。",
    options: {
      A: "高速",
      B: "微动",
      C: "低速",
      D: "中速"
    },
    answer: "B",
    category: "设备参数"
  },
  {
    id: 9,
    type: "single_choice",
    question: "机器人的（）是指单关节速度。",
    options: {
      A: "工作速度",
      B: "运动速度",
      C: "最大运动速度",
      D: "最小运动速度"
    },
    answer: "A",
    category: "设备参数"
  },
  {
    id: 10,
    type: "single_choice",
    question: "OnPosition指令用于同步触发，当机器人经过指定（ ）时触发。",
    options: {
      A: "位移",
      B: "角度",
      C: "时间",
      D: "位置"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 11,
    type: "single_choice",
    question: "GetRobotPos指令用于获取机器人当前（ ）信息。",
    options: {
      A: "位移",
      B: "角度",
      C: "时间",
      D: "位置"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 12,
    type: "single_choice",
    question: "SetOverride指令用于修改机器人（ ）。",
    options: {
      A: "局部速度",
      B: "局部变量",
      C: "全局速度",
      D: "全局变量"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 13,
    type: "single_choice",
    question: "PTPAbs指令使机器人各关节相对于参考点移动设定的( )。",
    options: {
      A: "位移",
      B: "角度",
      C: "速度",
      D: "偏移量"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 14,
    type: "single_choice",
    question: "LINAbs指令使机器人末端相对于（ ）移动设定的偏移量。",
    options: {
      A: "目标点",
      B: "参考点",
      C: "工具中心点",
      D: "工件中心点"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 15,
    type: "single_choice",
    question: "机器人搬运任务的主要环节有工艺分析、运动规划、示教准备、（ ）和程序调试。",
    options: {
      A: "视觉检测",
      B: "原点标定",
      C: "示教编程",
      D: "路径规划"
    },
    answer: "C",
    category: "应用编程"
  },
  {
    id: 16,
    type: "single_choice",
    question: "对工业机器人进行作业编程，主要内容包含（ ）。$①$ 运动轨迹 $(2)$ 作业条件 $(3)$ 作业顺序 $(\widehat{\Delta})$ 插补方式",
    options: {
      A: "$①②$",
      B: "①②③",
      C: "①③",
      D: "①②③④"
    },
    answer: "B",
    category: "应用编程"
  },
  {
    id: 17,
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
    id: 18,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时，以（）。",
    options: {
      A: "程序给定的速度运行",
      B: "示教最高速度来限制运行",
      C: "示教最低速度来运行",
      D: "以给定的所有速度平均值运行"
    },
    answer: "B",
    category: "应用编程"
  },
  {
    id: 19,
    type: "single_choice",
    question: "示教器按键有“Start”、“Stop”、“Step”、“Jog”、“F1”、“F2”、“PWR”、“V+”、“V-”等，其中“V+”的功能为（）。",
    options: {
      A: "手动模式速度加",
      B: "自动模式速度加",
      C: "全局速度加",
      D: "使能伺服电机"
    },
    answer: "C",
    category: "设备操作"
  },
  {
    id: 20,
    type: "single_choice",
    question: "在（）界面中可设定机器人系统的日期与时间。",
    options: {
      A: "设置",
      B: "用户",
      C: "信息",
      D: "网络"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 21,
    type: "single_choice",
    question: "在（）界面中可设定示教器显示语言。",
    options: {
      A: "设置",
      B: "用户",
      C: "信息",
      D: "网络"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 22,
    type: "single_choice",
    question: "登录相应的用户，方可获得对应的操作权，这样才能对机器人进行编程、示教、移动等操作，（）用户权限最高。",
    options: {
      A: "operator",
      B: "service",
      C: "teacher",
      D: "Administrator"
    },
    answer: "D",
    category: "系统操作"
  },
  {
    id: 23,
    type: "single_choice",
    question: "（ ）界面可查看当前登录用户的相关信息。",
    options: {
      A: "管理",
      B: "信息",
      C: "用户",
      D: "网络"
    },
    answer: "C",
    category: "系统操作"
  },
  {
    id: 24,
    type: "single_choice",
    question: "在（）界面可配置、管理当前用户，新建用户，修改当前用户的登录密码及显示语言。",
    options: {
      A: "管理",
      B: "信息",
      C: "用户",
      D: "网络"
    },
    answer: "C",
    category: "系统操作"
  },
  {
    id: 25,
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
    id: 26,
    type: "single_choice",
    question: "目前工业机器人常用编程方法有（）和离线编程两种。",
    options: {
      A: "示教编程",
      B: "在线编程",
      C: "软件编程",
      D: "计算机编程"
    },
    answer: "A",
    category: "应用编程"
  },
  {
    id: 27,
    type: "single_choice",
    question: "根据工作任务要求，一般要先调用（）程序。",
    options: {
      A: "具体作业动作",
      B: "工具更换",
      C: "工具入库",
      D: "成品检测"
    },
    answer: "B",
    category: "应用编程"
  },
  {
    id: 28,
    type: "single_choice",
    question: "加载机器人程序是在（）界面中操作。",
    options: {
      A: "系统",
      B: "文件",
      C: "项目",
      D: "变量"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 29,
    type: "single_choice",
    question: "单步运行程序时，每次按下运行键，程序运行（）。",
    options: {
      A: "一个子程序",
      B: "一个字符",
      C: "一行",
      D: "一个主程序"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 30,
    type: "single_choice",
    question: "连续运行程序时，松开使能按钮，机器人（）。",
    options: {
      A: "停止运行程序",
      B: "机器人减速运行",
      C: "机器人照常运行",
      D: "机器人微速运行"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 31,
    type: "single_choice",
    question: "连续运行程序时，要提高汇博机器人的运行速度，应按下示教器上的（）按钮。",
    options: {
      A: "V+",
      B: "START",
      C: "STOP",
      D: "V-"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 32,
    type: "single_choice",
    question: "连续运行程序前，应（）试运行以确保示教点合理且不会发生碰撞。",
    options: {
      A: "全速",
      B: "半速",
      C: "单步",
      D: "正常"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 33,
    type: "single_choice",
    question: "（）状态下程序从启动指针开始运行，直到程序结束或松开启动按钮停止。",
    options: {
      A: "连续",
      B: "单步",
      C: "反向",
      D: "微速"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 34,
    type: "single_choice",
    question: "（）模式下运行完成启动指针对应的程序或者松开启动按钮后停止。",
    options: {
      A: "连续",
      B: "单步",
      C: "反向",
      D: "微速"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 35,
    type: "single_choice",
    question: "（）也是程序连续运行，只是运行顺序相反。",
    options: {
      A: "连续",
      B: "单步",
      C: "反向",
      D: "微速"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 36,
    type: "single_choice",
    question: "只要按住（ ）按钮不放，机器人就会将程序运行一遍。",
    options: {
      A: "power",
      B: "start",
      C: "stop",
      D: "jog"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 37,
    type: "single_choice",
    question: "所谓无姿态插补，即保持第一个示教点时的姿态，在大多数情况下是机器人沿（ ）动时出现。",
    options: {
      A: "直线",
      B: "平面圆弧",
      C: "平面曲线",
      D: "空间曲线"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 38,
    type: "single_choice",
    question: "机器人抓取工具时若会将工具台架提起，应（ ）。",
    options: {
      A: "降低指令速度",
      B: "重新示教抓取位",
      C: "更换为关节运动",
      D: "调整IO延时"
    },
    answer: "B",
    category: "应用编程"
  },
  {
    id: 39,
    type: "single_choice",
    question: "当一个示教点发生偏移时，应当（ ）。",
    options: {
      A: "删掉指令重新编程",
      B: "调整速度",
      C: "调整安装结构",
      D: "重新示教该点"
    },
    answer: "D",
    category: "应用编程"
  },
  {
    id: 40,
    type: "single_choice",
    question: "要修改汇博机器人的示教点位置，从（ ）界面进入。",
    options: {
      A: "系统",
      B: "文件",
      C: "项目",
      D: "变量"
    },
    answer: "C",
    category: "应用编程"
  },
  {
    id: 41,
    type: "single_choice",
    question: "机器人的控制方式分为点位控制和（ ）。",
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
    id: 42,
    type: "single_choice",
    question: "末端的位姿是由（ ）两部分变量构成。",
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
    id: 43,
    type: "single_choice",
    question: "位置等级是指机器人经过示教的位置时的接近程度，其中位置等级表述正确的是（）。",
    options: {
      A: "APL值越小，运行轨迹越精准",
      B: "BPL值与运行轨迹关系不大",
      C: "CPL值越小，运行轨迹越精准",
      D: "DPL值越小，运行轨迹越精准"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 44,
    type: "single_choice",
    question: "对于较重的工件，编程时应（）。",
    options: {
      A: "根据机器人性能确定速度",
      B: "随意确定移动速度",
      C: "提高指令的速度",
      D: "根据夹具降低指令的速度"
    },
    answer: "A",
    category: "应用编程"
  },
  {
    id: 45,
    type: "single_choice",
    question: "若夹具的刚性不足导致工件晃动，应（）。",
    options: {
      A: "降低加减速时间",
      B: "适度增加加减速时间",
      C: "提高工作电压",
      D: "提高供气压力"
    },
    answer: "B",
    category: "应用编程"
  },
  {
    id: 46,
    type: "single_choice",
    question: "机器人轨迹控制过程需要通过求解（）获得各个关节角的位置控制系统的设定值。",
    options: {
      A: "运动学正问题",
      B: "动力学正问题",
      C: "运动学逆问题",
      D: "动力学逆问题"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 47,
    type: "single_choice",
    question: "一个刚体在空间运动具有（）个自由度。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "D",
    category: "机械原理"
  },
  {
    id: 48,
    type: "single_choice",
    question: "对于有规律的轨迹，仅示教几个特征点，计算机就能利用（）获得中间点的坐标。",
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
    id: 49,
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
    id: 50,
    type: "single_choice",
    question: "调整机器人程序参数时要（）。",
    options: {
      A: "只考虑机器人性能",
      B: "综合考虑多方因素",
      C: "只考虑夹具性能",
      D: "只考虑电气部件性能"
    },
    answer: "B",
    category: "应用编程"
  },
  {
    id: 51,
    type: "single_choice",
    question: "要调整机器人在示教点末段工具的姿态，一般使用（）方式。",
    options: {
      A: "关节运动",
      B: "线性运动的XYZ",
      C: "调整4-6轴",
      D: "调整ABC参数"
    },
    answer: "C",
    category: "应用编程"
  },
  {
    id: 52,
    type: "single_choice",
    question: "在位置界面的（）区域可以监视末端实时运动速度。",
    options: {
      A: "位置信息",
      B: "运动方向",
      C: "电机数值",
      D: "信息显示"
    },
    answer: "B",
    category: "系统操作"
  },
  {
    id: 53,
    type: "single_choice",
    question: "设置加速度的加速类型参数是（）。",
    options: {
      A: "ramp",
      B: "acceleration",
      C: "rate of rise",
      D: "improve"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 54,
    type: "single_choice",
    question: "要设置加速类型为正弦波加速，应选择（）选项。",
    options: {
      A: "sine",
      B: "sinsquare",
      C: "trapezoid",
      D: "minjerk"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 55,
    type: "single_choice",
    question: "管理员的用户名为（）。",
    options: {
      A: "root",
      B: "administrator",
      C: "master",
      D: "boss"
    },
    answer: "B",
    category: "系统操作"
  },
  {
    id: 56,
    type: "single_choice",
    question: "汇博机器人有（）种操作权限等级。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "B",
    category: "系统操作"
  },
  {
    id: 57,
    type: "single_choice",
    question: "备份程序后，应该（）。",
    options: {
      A: "留存在U盘",
      B: "转移到专用备份介质或设备中",
      C: "任意复制到电脑中",
      D: "转移到另一个U盘"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 58,
    type: "single_choice",
    question: "备份的程序应（）。",
    options: {
      A: "随意命名",
      B: "详细说明程序情况",
      C: "随意修改",
      D: "由个人保管"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 59,
    type: "single_choice",
    question: "当（）时，应该对机器人程序进行备份。",
    options: {
      A: "每次交班",
      B: "每次开机",
      C: "随机",
      D: "修改程序并调试正常后"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 60,
    type: "single_choice",
    question: "若备份时示教器找不到插入的U盘，可能的原因是（）。",
    options: {
      A: "U盘过热",
      B: "U盘颜色不对",
      C: "U盘品牌不符",
      D: "U盘文件系统格式不正确"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 61,
    type: "single_choice",
    question: "机器人系统的备份，一般采用（）做为数据媒介。",
    options: {
      A: "磁带",
      B: "光盘",
      C: "U盘",
      D: "硬盘"
    },
    answer: "C",
    category: "系统维护"
  },
  {
    id: 62,
    type: "single_choice",
    question: "一般在（）时，需要进行程序的恢复。",
    options: {
      A: "停电",
      B: "保养",
      C: "程序被误删",
      D: "盘点"
    },
    answer: "C",
    category: "系统维护"
  },
  {
    id: 63,
    type: "single_choice",
    question: "程序文件的导入和导出可以使用（）。",
    options: {
      A: "网线",
      B: "串口",
      C: "USB口",
      D: "RS485口"
    },
    answer: "C",
    category: "系统维护"
  },
  {
    id: 64,
    type: "single_choice",
    question: "要导入或者导出程序，应该在（）界面操作。",
    options: {
      A: "系统",
      B: "变量",
      C: "全局",
      D: "项目"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 65,
    type: "single_choice",
    question: "KEBA示教器文件菜单中的输入是指（）。",
    options: {
      A: "向外接设备导出程序",
      B: "向CF卡导入程序",
      C: "创建程序",
      D: "关闭程序"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 66,
    type: "single_choice",
    question: "keba示教器文件菜单中的输出是指（）。",
    options: {
      A: "向CF卡导入程序",
      B: "向外接设备导出程序",
      C: "关闭程序",
      D: "创建程序"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 67,
    type: "single_choice",
    question: "当进行程序的导入时，要（）。",
    options: {
      A: "小心确认备份的程序版本和来源",
      B: "仅检查程序类型",
      C: "仅检查程序备份日期",
      D: "仅检查程序的格式"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 68,
    type: "single_choice",
    question: "要导入的程序或参数导入前（）。",
    options: {
      A: "不能随意修改",
      B: "可随意修改",
      C: "可进行加密",
      D: "可进行拆分"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 69,
    type: "single_choice",
    question: "位置界面中的“电机数值”显示的是各轴（）的角度。",
    options: {
      A: "关节",
      B: "电机实际转动",
      C: "法兰",
      D: "平均"
    },
    answer: "B",
    category: "系统操作"
  },
  {
    id: 70,
    type: "single_choice",
    question: "程序结束的标记是（）。",
    options: {
      A: "CRLF",
      B: "EOF",
      C: "ENDFILE",
      D: "LAST"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 71,
    type: "single_choice",
    question: "在项目管理中，除了系统、（）是系统默认的项目，其他的项目都是用户自己建立的。",
    options: {
      A: "root",
      B: "user",
      C: "参数",
      D: "全局"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 72,
    type: "single_choice",
    question: "新建一个程序时，需将这个程序放到某个（）下。",
    options: {
      A: "文件夹",
      B: "变量",
      C: "坐标",
      D: "项目"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 73,
    type: "single_choice",
    question: "每一个项目必须包含一个（）。",
    options: {
      A: "TCP",
      B: "程序",
      C: "变量",
      D: "工件坐标"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 74,
    type: "single_choice",
    question: "项目的默认名称是（）。",
    options: {
      A: "project1",
      B: "group1",
      C: "file1",
      D: "document1"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 75,
    type: "single_choice",
    question: "（）不会随程序复制。",
    options: {
      A: "数组",
      B: "示教点",
      C: "局部变量",
      D: "全局变量"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 76,
    type: "single_choice",
    question: "系统默认的指令插入方式是向光标（）插入。",
    options: {
      A: "后",
      B: "左",
      C: "右",
      D: "前"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 77,
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
    id: 78,
    type: "single_choice",
    question: "复制、粘贴都需要通过（）进行数据中转。",
    options: {
      A: "硬盘",
      B: "U盘",
      C: "剪贴板",
      D: "网络"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 79,
    type: "single_choice",
    question: "文件系统是操作系统用于明确存储设备或分区上的（）的方法和数据结构。",
    options: {
      A: "音频",
      B: "视频",
      C: "文件",
      D: "动画"
    },
    answer: "C",
    category: "计算机基础"
  },
  {
    id: 80,
    type: "single_choice",
    question: "FAT32和NTFS是目前最常用的两种（）。",
    options: {
      A: "文件系统",
      B: "后缀名",
      C: "硬盘",
      D: "U盘"
    },
    answer: "A",
    category: "计算机基础"
  },
  {
    id: 81,
    type: "single_choice",
    question: "重命名文件时，文件名（）。",
    options: {
      A: "可随意命名",
      B: "不能使用特殊字符",
      C: "可使用特殊字符",
      D: "可为任意长度"
    },
    answer: "B",
    category: "计算机基础"
  },
  {
    id: 82,
    type: "single_choice",
    question: "当在电脑上向U盘存入一个程序而在示教器上无法找到它，原因可能是（）。",
    options: {
      A: "U盘接口损坏",
      B: "文件系统不一致",
      C: "U盘品牌不符",
      D: "U盘尺寸不符"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 83,
    type: "single_choice",
    question: "粘贴程序时，（）模式会将插入点后的程序向后移动。",
    options: {
      A: "叠加",
      B: "覆盖",
      C: "插入",
      D: "清空"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 84,
    type: "single_choice",
    question: "对文件进行重命名，不能（）。",
    options: {
      A: "使用字母",
      B: "与现有文件重名",
      C: "使用数字",
      D: "使用键盘"
    },
    answer: "B",
    category: "计算机基础"
  },
  {
    id: 85,
    type: "single_choice",
    question: "对文件进行重命名，系统将会（）。",
    options: {
      A: "将内容清空",
      B: "将内容重新排列",
      C: "仅修改文件名",
      D: "修改内容和文件名"
    },
    answer: "C",
    category: "计算机基础"
  },
  {
    id: 86,
    type: "single_choice",
    question: "（）指令也叫关节指令。",
    options: {
      A: "Circ",
      B: "LIN",
      C: "PTP",
      D: "MOVE"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 87,
    type: "single_choice",
    question: "（）指令也叫线性指令。",
    options: {
      A: "Circ",
      B: "LIN",
      C: "PTP",
      D: "MOVE"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 88,
    type: "single_choice",
    question: "（）指令又叫圆弧指令。",
    options: {
      A: "Circ",
      B: "LIN",
      C: "PTP",
      D: "MOVE"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 89,
    type: "single_choice",
    question: "点击（）按键可以进入到指令选择菜单。",
    options: {
      A: "粘贴",
      B: "复制",
      C: "新建",
      D: "剪切"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 90,
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
    id: 91,
    type: "single_choice",
    question: "PTP指令，两个位置之间的路径（）。",
    options: {
      A: "是虚线",
      B: "一定是弧线",
      C: "一定是直线",
      D: "不一定是直线"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 92,
    type: "single_choice",
    question: "焊接、涂胶等应用对路径要求高的场合进行使用（）指令。",
    options: {
      A: "IO",
      B: "网络",
      C: "PTP",
      D: "LIN"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 93,
    type: "single_choice",
    question: "lin指令在（）目录下。",
    options: {
      A: "运动",
      B: "收藏",
      C: "输入输出",
      D: "功能块"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 94,
    type: "single_choice",
    question: "直线指令lin使用时要注意空间直线距离（）。",
    options: {
      A: "越远越好",
      B: "不宜太近",
      C: "不宜太远",
      D: "不超过5cm"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 95,
    type: "single_choice",
    question: "系统自动生成的lin示教点默认名称为（）。",
    options: {
      A: "cp",
      B: "ap",
      C: "l",
      D: "gp"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 96,
    type: "single_choice",
    question: "Circ指令，第一个点是（）。",
    options: {
      A: "圆弧的起点",
      B: "曲率控制",
      C: "圆弧的终点",
      D: "定位点"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 97,
    type: "single_choice",
    question: "Circ指令，第二个点是（）。",
    options: {
      A: "圆弧的起点",
      B: "曲率控制",
      C: "圆弧的终点",
      D: "定位点"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 98,
    type: "single_choice",
    question: "Circ指令，第三个点是（）。",
    options: {
      A: "圆弧的起点",
      B: "曲率控制",
      C: "圆弧的终点",
      D: "定位点"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 99,
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
    id: 100,
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
    id: 101,
    type: "single_choice",
    question: "不会产生奇异点的运动指令是（）。",
    options: {
      A: "直线运动",
      B: "关节运动",
      C: "圆弧运动",
      D: "码垛"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 102,
    type: "single_choice",
    question: "一般情况下，将RefSys命令放在程序的（），方便加载及应用。",
    options: {
      A: "首行",
      B: "末行",
      C: "任意行",
      D: "中间行"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 103,
    type: "single_choice",
    question: "添加PTP指令后，（）是必须设定的。",
    options: {
      A: "pos",
      B: "dyn",
      C: "ovl",
      D: "mass"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 104,
    type: "single_choice",
    question: "指令中的pos参数是指（）。",
    options: {
      A: "速度",
      B: "位置",
      C: "平滑率",
      D: "半径"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 105,
    type: "single_choice",
    question: "指令中的dyn参数是指（）。",
    options: {
      A: "速率",
      B: "位置",
      C: "平滑率",
      D: "半径"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 106,
    type: "single_choice",
    question: "指令中的ovl参数是指（）。",
    options: {
      A: "速度",
      B: "位置",
      C: "过渡曲率",
      D: "半径"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 107,
    type: "single_choice",
    question: "系统自动生成的PTP示教点默认名称为（）。",
    options: {
      A: "P",
      B: "ap",
      C: "l",
      D: "gp"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 108,
    type: "single_choice",
    question: "平面2轴机器人的直线指令起始点必须（）。",
    options: {
      A: "在同一轴方向",
      B: "在不同平面内",
      C: "相距3cm以内",
      D: "在同一平面内"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 109,
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
    id: 110,
    type: "single_choice",
    question: "机器人TCP末端做整圆运动，必须执行（）圆弧运动指令。",
    options: {
      A: "一个",
      B: "三个",
      C: "六个",
      D: "两个"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 111,
    type: "single_choice",
    question: "圆弧指令中，起始位置、辅助位置以及目标位置必须能够（）的被区分开。",
    options: {
      A: "稍微",
      B: "随意",
      C: "大约",
      D: "明显"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 112,
    type: "single_choice",
    question: "圆弧指令起始位置是上一个运动指令的（）或者当前机器人TCP位置。",
    options: {
      A: "目标位置",
      B: "起始位置",
      C: "过程中一点",
      D: "任一点"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 113,
    type: "single_choice",
    question: "在Administrator权限下，用户可配置、更改不同用户的登录密码，其默认登录密码为（）。",
    options: {
      A: "Pass",
      B: "pass",
      C: "Password",
      D: "password"
    },
    answer: "B",
    category: "系统操作"
  },
  {
    id: 114,
    type: "single_choice",
    question: "（）界面可进行系统信息查看、HMI（示教器）重启、系统重启、PLC/示教器状态报告的生成与输出。",
    options: {
      A: "设置",
      B: "用户",
      C: "信息",
      D: "网络"
    },
    answer: "C",
    category: "系统操作"
  },
  {
    id: 115,
    type: "single_choice",
    question: "( )界面可查看控制器、示教器及相关工具的版本信息。",
    options: {
      A: "设置",
      B: "版本",
      C: "信息",
      D: "网络"
    },
    answer: "C",
    category: "系统操作"
  },
  {
    id: 116,
    type: "single_choice",
    question: "只要没有设置外部TCP，机器人的TCP和通过（）命令设置的参考系统都将保持激活状态。",
    options: {
      A: "Refsys",
      B: "Tool",
      C: "PTPRel",
      D: "LinRel"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 117,
    type: "single_choice",
    question: "使用（）指令将停用外部TCP，机器人的TCP将重新激活。",
    options: {
      A: "Refsys",
      B: "Tool",
      C: "PTPRel",
      D: "LinRel"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 118,
    type: "single_choice",
    question: "机器人坐标系分为（）。 $①$ 关节坐标系 $(2)$ 直角坐标系 $(3)$ 世界坐标系 $(4)$ 工具坐标系 $(5)$ 用户坐标系。",
    options: {
      A: "$①②④⑤$",
      B: "①④③",
      C: "D.①③④③",
      D: "①②③④③"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 119,
    type: "single_choice",
    question: "（）坐标系是设定在工业机器人关节中的坐标系。",
    options: {
      A: "关节坐标系",
      B: "直角坐标系",
      C: "工具坐标系",
      D: "用户坐标系"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 120,
    type: "single_choice",
    question: "（）坐标系是被固定在空间上的标准直角坐标系，其被固定在由工业机器人事前确定的位置。",
    options: {
      A: "直角坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "用户坐标系"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 121,
    type: "single_choice",
    question: "使用CALL调用例行程序Routine1的正确写法是（）。",
    options: {
      A: "PROCALL Routine1()",
      B: "Routine1()",
      C: "CALL Routine1()",
      D: "ROUTINE Routine1()"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 122,
    type: "single_choice",
    question: "机器人自动运行时，首先调用的程序是（ ）。",
    options: {
      A: "mainmodule",
      B: "main",
      C: "routine",
      D: "任意程序"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 123,
    type: "single_choice",
    question: "机器人在进行焊接作业时候，一般应保持焊枪工具Z轴方向与工件表面保持（）。",
    options: {
      A: "45度",
      B: "平行",
      C: "垂直",
      D: "任意角度"
    },
    answer: "C",
    category: "应用编程"
  },
  {
    id: 124,
    type: "single_choice",
    question: "对于速度V1000错误的描述是（）。",
    options: {
      A: "1000的单位是毫米每秒",
      B: "1000描述的是TCP的线性移动速度",
      C: "移动1000毫米需要1秒",
      D: "是一个SPEEDDATA"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 125,
    type: "single_choice",
    question: "汇博机器人编程指令的数学运算中，加1运算的指令是（）。",
    options: {
      A: "INC",
      B: "DEC",
      C: "AND",
      D: "OR"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 126,
    type: "single_choice",
    question: "汇博机器人编程指令的数学运算中，减1运算的指令是（）。",
    options: {
      A: "INC",
      B: "DEC",
      C: "AND",
      D: "OR"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 127,
    type: "single_choice",
    question: "( )指令是用来停止机器人运动并且丢弃已经计算好的插补路径。",
    options: {
      A: "StopRobot",
      B: "PTPSearch",
      C: "MoveRobotAxis",
      D: "LinRel"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 128,
    type: "single_choice",
    question: "WaitTime指令的单位为（）",
    options: {
      A: "us",
      B: "ms",
      C: "s",
      D: "min"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 129,
    type: "single_choice",
    question: "IF指令用于条件（）控制。",
    options: {
      A: "跳转",
      B: "循环",
      C: "终止",
      D: "调用"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 130,
    type: "single_choice",
    question: "传感器在整个测量范围内所能辨别的被测量的最小变化量，或者所能辨别的不同被测量的个数，被称之为传感器的（）。",
    options: {
      A: "精度",
      B: "重复性",
      C: "分辨率",
      D: "灵敏度"
    },
    answer: "C",
    category: "传感器"
  },
  {
    id: 131,
    type: "single_choice",
    question: "压电式传感器，即应用半导体压电效应可以测量（）。",
    options: {
      A: "电压",
      B: "亮度",
      C: "力和力矩",
      D: "距离"
    },
    answer: "C",
    category: "传感器"
  },
  {
    id: 132,
    type: "single_choice",
    question: "传感器的输出信号达到稳定时，输出信号变化与输入信号变化的比值代表传感器的（）参数。",
    options: {
      A: "抗干扰能力",
      B: "精度",
      C: "线性度",
      D: "灵敏度"
    },
    answer: "D",
    category: "传感器"
  },
  {
    id: 133,
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
    id: 134,
    type: "single_choice",
    question: "高速在线测量中，为减小被测物模糊，需要选用( )照明技术。",
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
    id: 135,
    type: "single_choice",
    question: "视觉应用中，随着工作距离变大，视野相应( )。",
    options: {
      A: "不变",
      B: "变小",
      C: "变大",
      D: "不确定"
    },
    answer: "C",
    category: "机器视觉"
  },
  {
    id: 136,
    type: "single_choice",
    question: "传感器包括以下三个功能部件：敏感元件、传感元件、( )元件。",
    options: {
      A: "辅助",
      B: "控制",
      C: "执行",
      D: "转换"
    },
    answer: "D",
    category: "传感器"
  },
  {
    id: 137,
    type: "single_choice",
    question: "传感器的运用，使得机器人具有了一定的( )能力。",
    options: {
      A: "一般",
      B: "重复工作",
      C: "识别判断",
      D: "逻辑思维"
    },
    answer: "C",
    category: "传感器"
  },
  {
    id: 138,
    type: "single_choice",
    question: "测量机器人关节（）和角位移的传感器是机器人位置反馈控制中必不可少的元件。",
    options: {
      A: "脉冲位移",
      B: "增量位移",
      C: "线位移",
      D: "重量增量"
    },
    answer: "C",
    category: "传感器"
  },
  {
    id: 139,
    type: "single_choice",
    question: "数字图像处理研究的内容不包括（）。",
    options: {
      A: "图像数字化",
      B: "图像增强",
      C: "图像分割",
      D: "图像存储"
    },
    answer: "D",
    category: "机器视觉"
  },
  {
    id: 140,
    type: "single_choice",
    question: "通常意义上的传感器包含了敏感元件和( )两个组成部分。",
    options: {
      A: "放大电路",
      B: "数据采集电路",
      C: "转换元件",
      D: "滤波元件"
    },
    answer: "C",
    category: "传感器"
  },
  {
    id: 141,
    type: "single_choice",
    question: "若将计算机比喻成人的大脑，那么传感器则可以比喻为( )。",
    options: {
      A: "眼睛",
      B: "感觉器官",
      C: "手",
      D: "皮肤"
    },
    answer: "B",
    category: "传感器"
  },
  {
    id: 142,
    type: "single_choice",
    question: "属于传感器静态特性指标的是( )。",
    options: {
      A: "固有频率",
      B: "临界频率",
      C: "阻尼比",
      D: "重复性"
    },
    answer: "D",
    category: "传感器"
  },
  {
    id: 143,
    type: "single_choice",
    question: "衡量传感器静态特性的指标不包括( )。",
    options: {
      A: "线性度",
      B: "灵敏度",
      C: "频域响应",
      D: "重复性"
    },
    answer: "C",
    category: "传感器"
  },
  {
    id: 144,
    type: "single_choice",
    question: "某6码道的循环码光电码盘，光线照射时得到的编码是001100，则转角为( )。",
    options: {
      A: "90°",
      B: "75°",
      C: "45°",
      D: "30°"
    },
    answer: "B",
    category: "传感器"
  },
  {
    id: 145,
    type: "single_choice",
    question: "不是基于物质的内光电效应的器件有( )。",
    options: {
      A: "光电管",
      B: "光电池",
      C: "光敏电阻",
      D: "光敏晶体管"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 146,
    type: "single_choice",
    question: "光敏电阻的特性是( )。",
    options: {
      A: "有光照时亮电阻很大",
      B: "无光照时暗电阻很小",
      C: "无光照时暗电流很大",
      D: "受一定波长范围的光照时亮电流很大"
    },
    answer: "D",
    category: "传感器"
  },
  {
    id: 147,
    type: "single_choice",
    question: "数值孔径NA是光纤的一个重要参数，以下说法不正确的是（）。",
    options: {
      A: "数值孔径反映了光纤的集光能力",
      B: "光纤的数值孔径与其几何尺寸有关",
      C: "数值孔径越大，光纤与光源的耦合越容易",
      D: "数值孔径越大，光信号的畸变也越大"
    },
    answer: "B",
    category: "传感器"
  },
  {
    id: 148,
    type: "single_choice",
    question: "（）是指机器人的指、肢和关节等运动中所受力的感知。",
    options: {
      A: "视觉传感器",
      B: "触觉传感器",
      C: "力觉传感器",
      D: "速度传感器"
    },
    answer: "C",
    category: "传感器"
  },
  {
    id: 149,
    type: "single_choice",
    question: "三位四通电液换向阀的液动滑阀为弹簧对中型，其先导电磁换向阀中位必须是（）机能。",
    options: {
      A: "H型",
      B: "M型",
      C: "Y型",
      D: "P型"
    },
    answer: "C",
    category: "电气控制"
  },
  {
    id: 150,
    type: "single_choice",
    question: "液动滑阀为液压对中型，其先导电磁换向阀中位必须是（）机能。",
    options: {
      A: "H型",
      B: "M型",
      C: "Y型",
      D: "P型"
    },
    answer: "D",
    category: "电气控制"
  },
  {
    id: 151,
    type: "single_choice",
    question: "电磁阀的线圈应接在（）。",
    options: {
      A: "气缸的进气口",
      B: "气缸的排气口",
      C: "PLC的I端",
      D: "PLC的Q端"
    },
    answer: "D",
    category: "电气控制"
  },
  {
    id: 152,
    type: "single_choice",
    question: "（ ）传感器可用于检测金属。",
    options: {
      A: "光纤传感器",
      B: "电感传感器",
      C: "旋转编码器",
      D: "磁性开关"
    },
    answer: "B",
    category: "传感器"
  },
  {
    id: 153,
    type: "single_choice",
    question: "漫反射光电开关的工作原理是利用光照射到（）上后反射回来的光线而工作的。",
    options: {
      A: "被测工件",
      B: "感光元件",
      C: "光敏电阻",
      D: "光敏二极管"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 154,
    type: "single_choice",
    question: "（）是指传感器的测量输出值与实际测量值之间的误差。",
    options: {
      A: "灵敏度",
      B: "分辨率",
      C: "精度",
      D: "线性度"
    },
    answer: "C",
    category: "传感器"
  },
  {
    id: 155,
    type: "single_choice",
    question: "传感器的基本转换电路是将敏感元件产生的易测量小信号进行变换，使传感器的信号输出符合具体工业系统的要求，一般为（）。",
    options: {
      A: "$\\mathrm{4\\sim 20mA, - 5\\sim 5V}$",
      B: "$\\mathrm{0\\sim 20\\mathrm{mA},0\\sim 5\\mathrm{V}}$",
      C: "$\\mathrm{- 20mA\\sim 20mA, - 5\\sim 5V}$",
      D: "$\\mathrm{- 20mA\\sim 20mA,0\\sim 5V}$"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 156,
    type: "single_choice",
    question: "增量型编码器通常为A相、B相、（）相输出。",
    options: {
      A: "C相",
      B: "X相",
      C: "Y相",
      D: "Z相"
    },
    answer: "D",
    category: "传感器"
  },
  {
    id: 157,
    type: "single_choice",
    question: "( )是将信号(如比特流)或数据进行编制、转换为可用以通讯、传输和存储的信号形式的设备。",
    options: {
      A: "编码器",
      B: "电流表",
      C: "电压表",
      D: "译码器"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 158,
    type: "single_choice",
    question: "编码器屏蔽线的作用是（ ）。",
    options: {
      A: "抗干扰性",
      B: "抗折断",
      C: "导电性",
      D: "美观"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 159,
    type: "single_choice",
    question: "215.6维力与力矩传感器主要用于（ ）。",
    options: {
      A: "精密加工",
      B: "精密测量",
      C: "精密计算",
      D: "精密装配"
    },
    answer: "D",
    category: "传感器"
  },
  {
    id: 160,
    type: "single_choice",
    question: "编码器A、B为相差（ ）度的脉冲。",
    options: {
      A: "90",
      B: "180",
      C: "45",
      D: "270"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 161,
    type: "single_choice",
    question: "应用电容式传感器测量微米级的距离，应该采用改变（ ）的方式。",
    options: {
      A: "极间物质介电系数",
      B: "极板面积",
      C: "极板距离",
      D: "电压"
    },
    answer: "C",
    category: "传感器"
  },
  {
    id: 162,
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
    id: 163,
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
    id: 164,
    type: "single_choice",
    question: "DOUT.Connect指令表示用状态变量来连接（ ）。",
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
    id: 165,
    type: "single_choice",
    question: "DINW.WaitBit 指令表示等待直到一个输入（ ）指定位被设置或重置。",
    options: {
      A: "位",
      B: "字节",
      C: "字",
      D: "双字"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 166,
    type: "single_choice",
    question: "DINW.Wait 这个指令会一直等待直到输入（ ）适合设定值，或者直到可选的时间超时了。",
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
    id: 167,
    type: "single_choice",
    question: "以下哪种情况会将电源供给单元上的输入保险丝F1熔断（）。",
    options: {
      A: "伺服驱动晶体管短路",
      B: "FAN电线容量短路",
      C: "示教盒缆线短路",
      D: "机器人超行程开关短路"
    },
    answer: "A",
    category: "电气安全"
  },
  {
    id: 168,
    type: "single_choice",
    question: "步进电动机按其工作原理主要分为（ ）、反应式两类。",
    options: {
      A: "磁电式",
      B: "光电式",
      C: "互感式",
      D: "激励式"
    },
    answer: "A",
    category: "电气驱动"
  },
  {
    id: 169,
    type: "single_choice",
    question: "直流电动机结构复杂、价格贵、制造麻烦、维护困难，但是（）、调速范围大。",
    options: {
      A: "启动性能差",
      B: "启动性能好",
      C: "启动电流小",
      D: "启动转矩小"
    },
    answer: "B",
    category: "电气驱动"
  },
  {
    id: 170,
    type: "single_choice",
    question: "变频器是通过改变交流电动机定子电压、频率等参数来调节（）的装置。",
    options: {
      A: "电动机转速",
      B: "电动机转矩",
      C: "电动机功率",
      D: "电动机性能"
    },
    answer: "A",
    category: "电气驱动"
  },
  {
    id: 171,
    type: "single_choice",
    question: "三相异步电动机的位置控制电路中，除了用行程开关外，还可用（）。",
    options: {
      A: "断路器",
      B: "速度继电器",
      C: "热继电器",
      D: "光电传感器"
    },
    answer: "D",
    category: "电气控制"
  },
  {
    id: 172,
    type: "single_choice",
    question: "工业机器人驱动类型可以划分为液压驱动、气压驱动、电力驱动和（）驱动四种类型。",
    options: {
      A: "电机",
      B: "自动",
      C: "新型",
      D: "智能"
    },
    answer: "C",
    category: "电气驱动"
  },
  {
    id: 173,
    type: "single_choice",
    question: "减速机按照传动的布置形式可分为展开式、分流式和（）。",
    options: {
      A: "双轴式",
      B: "分层式",
      C: "同进轴式",
      D: "反向轴式"
    },
    answer: "C",
    category: "机械原理"
  },
  {
    id: 174,
    type: "single_choice",
    question: "摩擦带传动是依靠（ ）来传递运动和功率的。",
    options: {
      A: "带与带轮接触面之间的正压力",
      B: "带的紧边拉力",
      C: "带与带轮接触面之间的摩擦力",
      D: "带的松边拉力"
    },
    answer: "C",
    category: "机械原理"
  },
  {
    id: 175,
    type: "single_choice",
    question: "通过（）方式，可以进一步减小步进电机的步距角，从而提高其走步精度。",
    options: {
      A: "细分",
      B: "提高频率",
      C: "减小电压",
      D: "改变控制算法"
    },
    answer: "A",
    category: "电气驱动"
  },
  {
    id: 176,
    type: "single_choice",
    question: "如果将变位机翻转作为机器人的外部轴，与机器人实现联动，达到同步运动的目的。则可采用的驱动电机类型一般为（）。",
    options: {
      A: "直流电机",
      B: "异步电机",
      C: "步进电机",
      D: "伺服电机"
    },
    answer: "D",
    category: "电气驱动"
  },
  {
    id: 177,
    type: "single_choice",
    question: "下面（）不属于用微机控制步进电机主要解决的问题。",
    options: {
      A: "用软件的方法产生脉冲序列",
      B: "方向控制",
      C: "控制程序设计",
      D: "选择合适的脉冲分配器"
    },
    answer: "D",
    category: "电气驱动"
  },
  {
    id: 178,
    type: "single_choice",
    question: "使用测速电机作为检测装置从而构成位置闭环的控制系统属于（）控制方式。",
    options: {
      A: "开环",
      B: "闭环",
      C: "半闭环",
      D: "前馈"
    },
    answer: "C",
    category: "电气控制"
  },
  {
    id: 179,
    type: "single_choice",
    question: "PWM调速方式称为（）",
    options: {
      A: "变电流调速",
      B: "变电压调速",
      C: "变频调速",
      D: "脉宽调速"
    },
    answer: "D",
    category: "电气驱动"
  },
  {
    id: 180,
    type: "single_choice",
    question: "二位五通电磁阀有（）。",
    options: {
      A: "两个工作位置，两个通路",
      B: "两个工作位置，五个通路",
      C: "一个工作位置，两个通路",
      D: "五个工作位置，两个通路"
    },
    answer: "B",
    category: "气动控制"
  },
  {
    id: 181,
    type: "single_choice",
    question: "脉冲当量是指（）",
    options: {
      A: "每发一个脉冲信号，电机的位移量",
      B: "每发一个脉冲信号，电机转过的角度",
      C: "电机转过 $1\\mathrm{mm}$ 时，发出的脉冲数",
      D: "电机转过 $1^{\\circ}$ 角时，发出的脉冲数"
    },
    answer: "A",
    category: "电气驱动"
  },
  {
    id: 182,
    type: "single_choice",
    question: "变频器主电路的输出与（）连接。",
    options: {
      A: "三相异步电动机",
      B: "PLC",
      C: "驱动器",
      D: "步进电机"
    },
    answer: "A",
    category: "电气驱动"
  },
  {
    id: 183,
    type: "single_choice",
    question: "气动回路是为了驱动完成不同操作的机械装置，靠压力控制阀、方向控制阀和（）来控制力的大小、方向和运动速度。",
    options: {
      A: "按钮阀",
      B: "光电管",
      C: "限位阀",
      D: "流量控制阀"
    },
    answer: "D",
    category: "气动控制"
  },
  {
    id: 184,
    type: "single_choice",
    question: "定义组输入信号gi1占用地址1-4共4位，可以代表十进制数（）。",
    options: {
      A: "0-8",
      B: "0-15",
      C: "0-31",
      D: "0-63"
    },
    answer: "B",
    category: "IO信号"
  },
  {
    id: 185,
    type: "single_choice",
    question: "在机器人搬运工作站中，用于控制机器人夹爪工具开合的动作信号是（ ）。",
    options: {
      A: "数字量输出信号",
      B: "数字量输入信号",
      C: "模拟量输入信号",
      D: "模拟量输出信号"
    },
    answer: "A",
    category: "IO信号"
  },
  {
    id: 186,
    type: "single_choice",
    question: "下列设备中，电气设备（）属于输出负载类型",
    options: {
      A: "继电器",
      B: "步进驱动器",
      C: "PLC单片机",
      D: "接触器"
    },
    answer: "D",
    category: "电气控制"
  },
  {
    id: 187,
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
    id: 188,
    type: "single_choice",
    question: "在操作机器人时，其末端操作器的位姿是由变量（ )构成的。",
    options: {
      A: "位置与速度",
      B: "位置与姿态",
      C: "位置与运行状态",
      D: "姿态与速度"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 189,
    type: "single_choice",
    question: "机器人控制中，PTP是机器人（）控制方式。",
    options: {
      A: "点到点",
      B: "连续轨迹",
      C: "智能",
      D: "示教-再现"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 190,
    type: "single_choice",
    question: "机器人调试过程中，一般将其置于（ ）状态。",
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
    id: 191,
    type: "single_choice",
    question: "在机器人搬运工作站中，用于控制机器人夹爪工具开合的动作信号是（）。",
    options: {
      A: "数字量输出信号",
      B: "数字量输入信号",
      C: "模拟量输入信号",
      D: "模拟量输出信号"
    },
    answer: "A",
    category: "IO信号"
  },
  {
    id: 192,
    type: "single_choice",
    question: "对NUM加1的操作，下列正确的是（）",
    options: {
      A: "NUM $\\coloneqq 1$",
      B: "NUM $\\coloneqq$ NUM+1",
      C: "DECRNUM",
      D: "NUM+1"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 193,
    type: "single_choice",
    question: "工业机器人编程时，在语句前加上（），则整条语句作为注释行，不被程序执行。",
    options: {
      A: "!",
      B: "#",
      C: "//",
      D: "**"
    },
    answer: "C",
    category: "编程基础"
  },
  {
    id: 194,
    type: "single_choice",
    question: "在用机器人进行弧焊作业中，对夹具的要求描述错误的是（ ）。",
    options: {
      A: "减少定位误差",
      B: "装拆方便",
      C: "工件的固定和定位自动化",
      D: "回避与焊枪的干涉"
    },
    answer: "C",
    category: "应用编程"
  },
  {
    id: 195,
    type: "single_choice",
    question: "工业机器人是以（ ）直接编制程序的。",
    options: {
      A: "直角坐标",
      B: "迪卡尔坐标",
      C: "矢量坐标",
      D: "关节坐标"
    },
    answer: "D",
    category: "编程基础"
  },
  {
    id: 196,
    type: "single_choice",
    question: "当机器人关节第5轴为（ ）度时，同时关节轴4和6一样时，机器人处于奇异点。",
    options: {
      A: "30",
      B: "90",
      C: "0",
      D: "60"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 197,
    type: "single_choice",
    question: "连续轨迹控制方式的主要技术指标是（ ）。",
    options: {
      A: "定位精度和运动时间",
      B: "位姿轨迹跟踪精度和平稳性",
      C: "位姿轨迹和平稳性",
      D: "位姿轨迹跟踪精度和运动时间"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 198,
    type: "single_choice",
    question: "正常情况下机器人第六轴可以运行（ ）。",
    options: {
      A: "180°",
      B: "360°",
      C: "大于360°",
      D: "90°"
    },
    answer: "C",
    category: "机械原理"
  },
  {
    id: 199,
    type: "single_choice",
    question: "机器语言是由（ ）表示的“0”和“1”组成的字串机器码。",
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
    id: 200,
    type: "single_choice",
    question: "在汽车焊接生产线上引入机器人的主要原因不包括哪一条（ ）。",
    options: {
      A: "可以提高汽车产量",
      B: "适应汽车产品的多样化",
      C: "可以提高产品质量",
      D: "能提高生产率"
    },
    answer: "A",
    category: "行业应用"
  },
  {
    id: 201,
    type: "single_choice",
    question: "IF 指令用于条件跳转控制，IF 条件判断表达式必须是（ ）类型。",
    options: {
      A: "robjoint",
      B: "string",
      C: "robtarget",
      D: " bool"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 202,
    type: "single_choice",
    question: "工业机器人码垛搬运过程中，编制机器人末端工具安装或拆卸程序时，示教放置快换点位时，应注意低速运行，并以（）运动方式示教接近点与退出点。",
    options: {
      A: "PTP指令",
      B: "Lin指令",
      C: "Circ指令",
      D: "LinRel指令"
    },
    answer: "B",
    category: "应用编程"
  },
  {
    id: 203,
    type: "single_choice",
    question: "编制程序示教点的时候，示教的点越多，路径越（ )。",
    options: {
      A: "不准确",
      B: "准确",
      C: "与点位无关",
      D: "麻烦"
    },
    answer: "B",
    category: "应用编程"
  },
  {
    id: 204,
    type: "single_choice",
    question: "由数控机床和其它自动化工艺设备组成的（），可以按照任意顺序加工一组不同工序与不同节拍的工件，并能适时地自由调度和管理。",
    options: {
      A: "刚性制造系统",
      B: "柔性制造系统",
      C: "弹性制造系统",
      D: "挠性制造系统"
    },
    answer: "B",
    category: "行业应用"
  },
  {
    id: 205,
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
    id: 206,
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
    id: 207,
    type: "single_choice",
    question: "下列选项属于正确的求职择业心理的是（）。",
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
    id: 208,
    type: "single_choice",
    question: "（）是要求大家共同遵守的办事规程或行动准则。",
    options: {
      A: "组织",
      B: "文化",
      C: "制度",
      D: "环境"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 209,
    type: "single_choice",
    question: "由员工和管理层组成的一个共同体，能合理利用每一个成员的知识和技能，协同工作，解决问题，达到共同的目标，这个共同体被称之为（）。",
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
    id: 210,
    type: "single_choice",
    question: "当你处于压力之下时，注意力不集中、优柔寡断、记忆力减退、判断力减弱，这是压力发出的预警信号，此预警信号是（）。",
    options: {
      A: "生理信号",
      B: "情绪信号",
      C: "精神信号",
      D: "行为信号"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 211,
    type: "single_choice",
    question: "（）是约定俗成的大家共同遵循的行为准则。",
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
    id: 212,
    type: "single_choice",
    question: "（）具有效率高、责任感强、守纪律但做事比较保守的典型特征。",
    options: {
      A: "实干者",
      B: "协调者",
      C: "推进者",
      D: "创新者"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 213,
    type: "single_choice",
    question: "团队是一个协作互补的群体，他需要团队成员之间建立相互（）的关系，他是合作的基石。",
    options: {
      A: "讲究诚信",
      B: "尊重对方",
      C: "宽容谅解",
      D: "理性信任"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 214,
    type: "single_choice",
    question: "岗位工作环境包括（）。",
    options: {
      A: "大环境和小环境",
      B: "同事环境和领导环境",
      C: "宏观环境和微观环境",
      D: "硬环境和软环境"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 215,
    type: "single_choice",
    question: "在自主发展中，（）是自己知道而他人未知的部分，通常是我们所说的隐私、个人秘密以及不愿意或不能让别人知道的事实或心理。",
    options: {
      A: "开放我",
      B: "隐藏我",
      C: "盲目我",
      D: "未知我"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 216,
    type: "single_choice",
    question: "（）主要是指满足员工的精神世界需求，形成企业凝聚力与和谐的企业环境。",
    options: {
      A: "岗位文化的价值特征",
      B: "岗位文化的品牌特征",
      C: "岗位文化的人文特征",
      D: "岗位文化的禁忌特征"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 217,
    type: "single_choice",
    question: "一个人的综合素质在社会生活中的体现是（）。",
    options: {
      A: "心理素质",
      B: "人格魅力",
      C: "交往态度",
      D: "沟通能力"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 218,
    type: "single_choice",
    question: "我们将人们在进行职业活动的过程中，一切符合职业要求的心理意识、行为准则和行为规范的总和称之为（）。",
    options: {
      A: "职业道德",
      B: "职业技能",
      C: "职业行为",
      D: "职业意识"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 219,
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
    id: 220,
    type: "single_choice",
    question: "（）是个人根据自己的意愿在众多的职业中做出最终选择的过程。",
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
    id: 221,
    type: "single_choice",
    question: "（）是满足职业发展的必要条件。",
    options: {
      A: "职业生涯规划",
      B: "职业素养",
      C: "职业技能",
      D: "职业道德"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 222,
    type: "single_choice",
    question: "岗位文化的核心是（）。",
    options: {
      A: "岗位员工的价值观念和价值行为",
      B: "岗位员工所受到的公司的培训",
      C: "岗位员工所受到的公司的奖励",
      D: "岗位员工能够在公司所获得的报酬"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 223,
    type: "single_choice",
    question: "影响岗位关联中的组织内部与岗位在生产或工作中的互动效果的因素主要是（）。",
    options: {
      A: "现有岗位的拓展性和新技术",
      B: "新产品的潜在性对岗位能力的要求",
      C: "技能的潜在要求",
      D: "非专业能力或技能"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 224,
    type: "single_choice",
    question: "（）就是对自身的长处和短处做出实事求是的分析和判断，一边了解自己的职业能力倾向。",
    options: {
      A: "职业意识",
      B: "自我评价",
      C: "职业生涯规划",
      D: "自我评价"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 225,
    type: "single_choice",
    question: "下列（）安全警示标志警示可能发生中等程度伤害或轻伤以及物品损坏等事故。",
    options: {
      A: "危险",
      B: "注意",
      C: "强制",
      D: "禁止"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 226,
    type: "single_choice",
    question: "进行工具校验，需以控制点为基准示教（ ）个不同的姿态，根据其数据自动算出工具尺寸。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "C",
    category: "坐标系"
  },
  {
    id: 227,
    type: "single_choice",
    question: "一个用户坐标系中可以包含多个（ ），用于表示固定装置、工作台等设备。",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "基坐标系",
      D: "大地坐标系"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 228,
    type: "single_choice",
    question: "工作范围是指机器人（ ）或手腕中心所能到达的点的集合。",
    options: {
      A: "机械手",
      B: "手臂末端",
      C: "手臂",
      D: "行走部分。"
    },
    answer: "B",
    category: "机械原理"
  },
  {
    id: 229,
    type: "single_choice",
    question: "六点（XY）法是主要用来设置（ ）。",
    options: {
      A: "用户坐标系",
      B: "工具坐标系",
      C: "关节坐标系",
      D: "全局坐标系"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 230,
    type: "single_choice",
    question: "在WORLD坐标系下，相对A-B-C移动的转动关系是（ ）。",
    options: {
      A: "X-Y-Z",
      B: "Z-Y-X",
      C: "Y-X-Z",
      D: "不确定"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 231,
    type: "single_choice",
    question: "在用3点示教法设定点动坐标系时，用（ ）的始点作为坐标系的原点使用。",
    options: {
      A: "Y轴",
      B: "X轴",
      C: "Z轴",
      D: "任意轴"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 232,
    type: "single_choice",
    question: "使用3点法建立工具坐标系时，应使得三个点的姿态差异（ ）。",
    options: {
      A: "尽量大",
      B: "尽量小",
      C: "X方向垂直",
      D: "Y方向垂直"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 233,
    type: "single_choice",
    question: "投入电源时，请确认机器人的动作范围内没有（ ）。",
    options: {
      A: "作业人员",
      B: "贵重物品",
      C: "二氧化碳",
      D: "氧气"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 234,
    type: "single_choice",
    question: "若检修、维修、保养等作业必须在通电状态下进行，此时，应该（）进行作业。",
    options: {
      A: "4人2组",
      B: "3人1组",
      C: "单独1人",
      D: "2人1组"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 235,
    type: "single_choice",
    question: "手腕部位及机械臂上的负荷必须控制在（）以内。",
    options: {
      A: "10kg",
      B: "20kg",
      C: "40kg",
      D: "允许搬运重量"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 236,
    type: "single_choice",
    question: "Tool命令为机器人的工具（抓手）设置新的位置，可从（）调出该指令。",
    options: {
      A: "运动指令组",
      B: "设置指令组",
      C: "系统功能指令组",
      D: "流程控制指令组"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 237,
    type: "single_choice",
    question: "在用户坐标系下手动方法是，按（）键将坐标系切换至RX，RY，RZ，RA，RB，RC，再进行运动即可。",
    options: {
      A: "Step",
      B: "Jog",
      C: "F1",
      D: "Start"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 238,
    type: "single_choice",
    question: "关节坐标系是按照机器人D-H法建立的各轴坐标系，轴的转动为绕轴坐标系的（）轴按照右手定则转动。",
    options: {
      A: "X",
      B: "Y",
      C: "Z",
      D: "任意"
    },
    answer: "C",
    category: "坐标系"
  },
  {
    id: 239,
    type: "single_choice",
    question: "机器人各轴进行单独动作，称（）。",
    options: {
      A: "关节坐标系",
      B: "工具坐标系",
      C: "用户坐标系",
      D: "世界坐标系"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 240,
    type: "single_choice",
    question: "直角坐标系的原点定义在机器人轴轴线上，是与（）所在水平面的交点。",
    options: {
      A: "1轴",
      B: "2轴",
      C: "3轴",
      D: "4轴"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 241,
    type: "single_choice",
    question: "直角坐标系的方向规定X轴方向（），Z轴方向向上，Y轴根据右手定则确定。",
    options: {
      A: "向前",
      B: "向后",
      C: "向左",
      D: "向右"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 242,
    type: "single_choice",
    question: "用户坐标系的意义是将（）的偏移除去，原点和方向按照用户的指定进行设置。",
    options: {
      A: "世界坐标系",
      B: "基坐标系",
      C: "工件坐标系",
      D: "工具坐标系"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 243,
    type: "single_choice",
    question: "当工业机器人安装新夹具后就必需要重新定义（）坐标系，否则会影响机器人的稳定运行。",
    options: {
      A: "世界坐标系",
      B: "基坐标系",
      C: "工件坐标系",
      D: "工具坐标系"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 244,
    type: "single_choice",
    question: "加载工具坐标系后，若希望工具坐标系的方向与世界坐标系的方向进行对齐，在工具手（）界面可进行快速操作。",
    options: {
      A: "设置",
      B: "用户",
      C: "信息",
      D: "对齐"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 245,
    type: "single_choice",
    question: "2人1组进行作业时，1人保持可立即按下（）按钮的姿势。",
    options: {
      A: "手动/自动",
      B: "运行",
      C: "紧急停止",
      D: "暂停"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 246,
    type: "single_choice",
    question: "一般来说，利用（）抓取通用制品是最廉价的一种方法。",
    options: {
      A: "夹爪",
      B: "柔性手指",
      C: "电磁铁",
      D: "真空吸盘"
    },
    answer: "D",
    category: "末端执行器"
  },
  {
    id: 247,
    type: "single_choice",
    question: "为了得到最大吸入流量或最高吸入口处压力，真空发生器都设计成（）喷管型。",
    options: {
      A: "亚声速",
      B: "声速",
      C: "真声速",
      D: "超声速"
    },
    answer: "D",
    category: "气动控制"
  },
  {
    id: 248,
    type: "single_choice",
    question: "要使机器人本体进行回旋动作，应操作机器人的（）轴。",
    options: {
      A: "第1轴",
      B: "第2轴",
      C: "第5轴",
      D: "第6轴"
    },
    answer: "A",
    category: "机械原理"
  },
  {
    id: 249,
    type: "single_choice",
    question: "让机器人绕着选定的工具TCP的某个轴进行旋转是（）操作。",
    options: {
      A: "线性",
      B: "关节",
      C: "用户坐标",
      D: "重定位"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 250,
    type: "single_choice",
    question: "将装配完成的电机成品置于仓库对应位置的程序是（）。",
    options: {
      A: "PARTPUT",
      B: "MOTORSTORE",
      C: "RELEASE",
      D: "ZEROING"
    },
    answer: "B",
    category: "应用编程"
  },
  {
    id: 251,
    type: "single_choice",
    question: "使变位机回零，将装配模块置于0度的子程序是（）。",
    options: {
      A: "CLAMP",
      B: "RELEASE",
      C: "PARTPICK",
      D: "ZEROING"
    },
    answer: "D",
    category: "应用编程"
  },
  {
    id: 252,
    type: "single_choice",
    question: "机器人末端手爪松开，配合装配、定位和入库动作的程序是（）。",
    options: {
      A: "MOTORPICK",
      B: "MOTORSTORE",
      C: "RELEASE",
      D: "PARTPICK"
    },
    answer: "C",
    category: "应用编程"
  },
  {
    id: 253,
    type: "single_choice",
    question: "拾取电机装配模块上的工件的程序是（）。",
    options: {
      A: "CLAMP",
      B: "MOTORPICK",
      C: "RELEASE",
      D: "PARTPICK"
    },
    answer: "D",
    category: "应用编程"
  },
  {
    id: 254,
    type: "single_choice",
    question: "拾取电机成品工件，在装配模块上进行定位的程序是（）。",
    options: {
      A: "MOTORSTORE",
      B: "CLAMP",
      C: "MOTORPICK",
      D: "PARTPICK"
    },
    answer: "C",
    category: "应用编程"
  },
  {
    id: 255,
    type: "single_choice",
    question: "按“Start”按键后，程序由上至下连续不间断运行是（）模式。",
    options: {
      A: "单步运行",
      B: "手动运行",
      C: "动作单步",
      D: "连续运行"
    },
    answer: "D",
    category: "程序调试"
  },
  {
    id: 256,
    type: "single_choice",
    question: "每按一次“Start”按键，程序由上至下只执行一句指令是（）模式。",
    options: {
      A: "动作单步",
      B: "单步运行",
      C: "手动运行",
      D: "连续运行"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 257,
    type: "single_choice",
    question: "在执行运动指令时，程序运行方式为单步运行，在执行非运动指令时，程序运行方式为连续运行，是（）模式。",
    options: {
      A: "动作单步",
      B: "连续运行",
      C: "单步运行",
      D: "手动运行"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 258,
    type: "single_choice",
    question: "在动作单步方式中，赋值指令会（）运行。",
    options: {
      A: "单步",
      B: "隔行",
      C: "连续",
      D: "分区"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 259,
    type: "single_choice",
    question: "“MSTP”方式是指（）。",
    options: {
      A: "动作单步",
      B: "连续运行",
      C: "单步运行",
      D: "块运行"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 260,
    type: "single_choice",
    question: "如果吸盘到达物料上方不能将物料吸起，应该（）调整机器人位置。",
    options: {
      A: "向左",
      B: "向右",
      C: "向上",
      D: "向下"
    },
    answer: "D",
    category: "应用编程"
  },
  {
    id: 261,
    type: "single_choice",
    question: "如果物料已被吸起，在搬运过程中掉落，应该（）。",
    options: {
      A: "增加移动速度",
      B: "更换物料",
      C: "更换机器人",
      D: "降低移动速度"
    },
    answer: "D",
    category: "应用编程"
  },
  {
    id: 262,
    type: "single_choice",
    question: "使用快换工具的机器人系统，进行工具更换时，出现明显卡壳，应（）。",
    options: {
      A: "进行润滑处理",
      B: "检修机器人",
      C: "修正快换示教点",
      D: "检修快换支架"
    },
    answer: "C",
    category: "应用编程"
  },
  {
    id: 263,
    type: "single_choice",
    question: "使用V形手抓抓取物料，手抓动作后，物料发生偏移，说明（）。",
    options: {
      A: "物料太轻",
      B: "手抓太软",
      C: "手抓太硬",
      D: "手抓中心未对齐物料"
    },
    answer: "D",
    category: "应用编程"
  },
  {
    id: 264,
    type: "single_choice",
    question: "装配物料时，当机器人释放物料，物料落下后总是弹出安装位置，应（）。",
    options: {
      A: "降低释放高度",
      B: "更换物料",
      C: "更换手抓",
      D: "更换装配平台"
    },
    answer: "A",
    category: "应用编程"
  },
  {
    id: 265,
    type: "single_choice",
    question: "装配柱状配件时，初始正常，但装配到一定距离机器人发生碰撞报警，原因可能是（）。",
    options: {
      A: "同轴度不够",
      B: "夹具太松",
      C: "速度太慢",
      D: "电压不足"
    },
    answer: "A",
    category: "应用编程"
  },
  {
    id: 266,
    type: "single_choice",
    question: "工业机器人系统备份包括用户程序和（）。",
    options: {
      A: "系统参数",
      B: "外部设备参数",
      C: "系统固件",
      D: "交班记录"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 267,
    type: "single_choice",
    question: "进行备份工作时，一般要确定备份的内容和（）。",
    options: {
      A: "U盘品牌",
      B: "备份路径",
      C: "环境情况",
      D: "无"
    },
    answer: "B",
    category: "系统维护"
  },
  {
    id: 268,
    type: "single_choice",
    question: "备份后的数据应当（）。",
    options: {
      A: "留在U盘中",
      B: "分析优化",
      C: "网络分发",
      D: "妥善保管不得修改"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 269,
    type: "single_choice",
    question: "对机器人整机进行恢复可以恢复用户程序和（）。",
    options: {
      A: "系统参数",
      B: "外部设备参数",
      C: "系统固件",
      D: "交班记录"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 270,
    type: "single_choice",
    question: "机器人在出厂时，会有（）零点位置。",
    options: {
      A: "2个",
      B: "1个唯一的",
      C: "3个",
      D: "4个对称"
    },
    answer: "B",
    category: "机械原理"
  },
  {
    id: 271,
    type: "single_choice",
    question: "必须点动机器人各轴至（）附近才能恢复零点。",
    options: {
      A: "坐标零位",
      B: "TCP中心",
      C: "关节零位",
      D: "机械零位标识"
    },
    answer: "D",
    category: "机械原理"
  },
  {
    id: 272,
    type: "single_choice",
    question: "导入机器人程序后应（）。",
    options: {
      A: "连续运行测试",
      B: "重新示教",
      C: "重新编程",
      D: "单步运行检查"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 273,
    type: "single_choice",
    question: "导入机器人系统配置文件后往往需要（）。",
    options: {
      A: "检修机器人",
      B: "检修外部设备",
      C: "重启机器人",
      D: "重新示教"
    },
    answer: "C",
    category: "系统维护"
  },
  {
    id: 274,
    type: "single_choice",
    question: "导出的配置文件需要用（）进行查看。",
    options: {
      A: "专用软件",
      B: "word",
      C: "excel",
      D: "画图"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 275,
    type: "single_choice",
    question: "创建程序应该在（）模式中进行。",
    options: {
      A: "手动",
      B: "自动",
      C: "远程",
      D: "在线"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 276,
    type: "single_choice",
    question: "程序与项目之间的关系是（）。",
    options: {
      A: "相互独立",
      B: "没有关系",
      C: "程序包含项目",
      D: "项目包含程序"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 277,
    type: "single_choice",
    question: "在程序界面中，剪切、复制、粘贴等操作在（）按钮内。",
    options: {
      A: "编辑",
      B: "高级",
      C: "返回",
      D: "帮助"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 278,
    type: "single_choice",
    question: "对选中的程序进行缩进排序是（）功能。",
    options: {
      A: "查找",
      B: "格式化",
      C: "加注释",
      D: "不可以"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 279,
    type: "single_choice",
    question: "要将指令在同一个程序中移动，应使用（）。",
    options: {
      A: "复制/粘贴",
      B: "复制/删除",
      C: "剪切/粘贴",
      D: "粘贴/删除"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 280,
    type: "single_choice",
    question: "要将几条指令在同一个程序中多次使用，应使用（）。",
    options: {
      A: "剪切/粘贴",
      B: "格式化/粘贴",
      C: "复制/粘贴",
      D: "选择全部/粘贴"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 281,
    type: "single_choice",
    question: "要恢复到编辑前几步的程序状态应使用（）。",
    options: {
      A: "格式化",
      B: "删除",
      C: "撤销",
      D: "返回"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 282,
    type: "single_choice",
    question: "要在程序中寻找某个指令应该使用（）。",
    options: {
      A: "键盘",
      B: "格式化",
      C: "查找",
      D: "选择全部"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 283,
    type: "single_choice",
    question: "LIN指令x，y，z分别表示TCP点在参考坐标系（）上的位置。",
    options: {
      A: "1个轴",
      B: "2个轴",
      C: "3个轴",
      D: "4个轴"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 284,
    type: "single_choice",
    question: "LIN指令a，b，c分别表示TCP点（）。",
    options: {
      A: "姿态",
      B: "位置",
      C: "形状",
      D: "坐标系"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 285,
    type: "single_choice",
    question: "沿着某个球面绘制一条圆弧，应使用（）。",
    options: {
      A: "IO指令",
      B: "关节指令",
      C: "直线指令",
      D: "圆弧指令"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 286,
    type: "single_choice",
    question: "要画出一个圆形轨迹至少要（）条圆弧指令。",
    options: {
      A: "4",
      B: "3",
      C: "2",
      D: "1"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 287,
    type: "single_choice",
    question: "如果3个点相邻太近，有可能导致（）。",
    options: {
      A: "撞机",
      B: "过流",
      C: "损坏",
      D: "圆弧指令失败"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 288,
    type: "single_choice",
    question: "执行PTP指令时，（）会同时插补运动到目标点。",
    options: {
      A: "1-3轴",
      B: "4-6轴",
      C: "所有的轴",
      D: "1,3,5轴"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 289,
    type: "single_choice",
    question: "PTP指令中，如果是旋转轴，则单位是（）。",
    options: {
      A: "度",
      B: "分",
      C: "秒",
      D: "毫米"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 290,
    type: "single_choice",
    question: "PTP指令中，如果是直线轴，则单位是（）。",
    options: {
      A: "mm",
      B: "cm",
      C: "μm",
      D: "dm"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 291,
    type: "single_choice",
    question: "要使机器人回零，较为简便的方法是使用（）指令然后修改示教点关节坐标值。",
    options: {
      A: "LIN",
      B: "PTP",
      C: "CIRC",
      D: "IO"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 292,
    type: "single_choice",
    question: "LIN指令执行过程中，TCP姿态会（）。",
    options: {
      A: "连续插补",
      B: "不改变",
      C: "根据负载变",
      D: "根据速度变"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 293,
    type: "single_choice",
    question: "在绘图过程中，若笔迹变得越来越细，应（）。",
    options: {
      A: "下压起点",
      B: "抬起轨迹终点",
      C: "下压轨迹终点",
      D: "抬起起点"
    },
    answer: "C",
    category: "应用编程"
  },
  {
    id: 294,
    type: "single_choice",
    question: "若在绘制圆弧过程中，笔迹两头大中间细，应（）。",
    options: {
      A: "下压中间点",
      B: "抬起起点",
      C: "抬起终点",
      D: "抬起中间点"
    },
    answer: "A",
    category: "应用编程"
  },
  {
    id: 295,
    type: "single_choice",
    question: "在PTP指令中，如果要旋转法兰盘，应修改（）。",
    options: {
      A: "a6",
      B: "a5",
      C: "a4",
      D: "a3"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 296,
    type: "single_choice",
    question: "( )指令用于条件跳转控制。",
    options: {
      A: "SIN",
      B: "IF",
      C: "COS",
      D: "WHILE"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 297,
    type: "single_choice",
    question: "等待某条件满足才继续往下执行指令应使用（）。",
    options: {
      A: "STOP",
      B: "Random",
      C: "CALL",
      D: "WAIT"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 298,
    type: "single_choice",
    question: "传感器能感知的输入变化量越小，表示传感器的( )。",
    options: {
      A: "线性度越好",
      B: "迟滞越小",
      C: "重复性越好",
      D: "分辨力越高"
    },
    answer: "D",
    category: "传感器"
  },
  {
    id: 299,
    type: "single_choice",
    question: "传感器的输出量通常为（）",
    options: {
      A: "非电量信号",
      B: "电量信号",
      C: "位移信号",
      D: "光信号"
    },
    answer: "B",
    category: "传感器"
  },
  {
    id: 300,
    type: "single_choice",
    question: "以下哪个质量是直接影响传感器的性能和精度（）",
    options: {
      A: "应变计",
      B: "弹性敏感元件",
      C: "敏感栅",
      D: "电路电阻"
    },
    answer: "B",
    category: "传感器"
  },
  {
    id: 301,
    type: "single_choice",
    question: "主要用于电动机的长期过载保护的继电器是（）",
    options: {
      A: "低压断路器",
      B: "熔断器",
      C: "热继电器",
      D: "接触器"
    },
    answer: "C",
    category: "电气控制"
  },
  {
    id: 302,
    type: "single_choice",
    question: "电机正反转运行中的两接触器必须实现相互间（），否则容易发生电源短路事故。",
    options: {
      A: "联锁",
      B: "自锁",
      C: "禁止",
      D: "记忆"
    },
    answer: "A",
    category: "电气控制"
  },
  {
    id: 303,
    type: "single_choice",
    question: "能用来表示电机控制电路中电气元件实际安装位置的是（ )。",
    options: {
      A: "电气原理图",
      B: "电气布置图",
      C: "电气接线图",
      D: "电气系统图"
    },
    answer: "B",
    category: "电气控制"
  },
  {
    id: 304,
    type: "single_choice",
    question: "三相异步电机采用能耗制动时，当切断电源时，将（）",
    options: {
      A: "转子回路串入电阻",
      B: "转子绕组进行反接",
      C: "定子任意两相绕组进行反接",
      D: "定子绕组送入直流电"
    },
    answer: "D",
    category: "电气控制"
  },
  {
    id: 305,
    type: "single_choice",
    question: "在控制电路中，如果两个常开触点串联，则它们是（）",
    options: {
      A: "与逻辑关系",
      B: "与非逻辑关系",
      C: "或逻辑关系",
      D: "或非逻辑关系"
    },
    answer: "A",
    category: "电气控制"
  },
  {
    id: 306,
    type: "single_choice",
    question: "为了确保人身安全，在一般正常情况下，电气设备的安全电压规定为( )。",
    options: {
      A: "12V以下",
      B: "24V以下",
      C: "36V以下",
      D: "48V以下"
    },
    answer: "C",
    category: "电气安全"
  },
  {
    id: 307,
    type: "single_choice",
    question: "热继电器在电机控制线路中不能作（）",
    options: {
      A: "短路保护",
      B: "过载保护",
      C: "缺相保护",
      D: "电流不平衡保护"
    },
    answer: "A",
    category: "电气控制"
  },
  {
    id: 308,
    type: "single_choice",
    question: "标定工具坐标系时，用待测工具的尖端点从四个任意不同的方向靠近同一个点的方法称为（）。",
    options: {
      A: "一点法",
      B: "三点法",
      C: "四点法",
      D: "六点法"
    },
    answer: "C",
    category: "坐标系"
  },
  {
    id: 309,
    type: "single_choice",
    question: "使用“四点法”只能确定工具尖端点TCP相对机器人末端法兰安装面的位置偏移值，当用户需要确定工具姿态分量时，要额外再使用（），或直接使用“六点法”。",
    options: {
      A: "一点法",
      B: "三点法",
      C: "四点法",
      D: "六点法"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 310,
    type: "single_choice",
    question: "采用（）来确定工具姿态时，位置点只能用笛卡尔空间下的移动运动来示教，否则不能计算出工具坐标系的姿态分量，并给出错误警告。",
    options: {
      A: "一点法",
      B: "三点法",
      C: "四点法",
      D: "六点法"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 311,
    type: "single_choice",
    question: "用户坐标系的设置是通过（）命令实现的。",
    options: {
      A: "Refsys",
      B: "Tool",
      C: "PTPRel",
      D: "LinRel"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 312,
    type: "single_choice",
    question: "系统内提供了（）种方法进行工具坐标系的示教。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 313,
    type: "single_choice",
    question: "建立工具坐标系时，用未知工具示教一个在全局参考系已经示教过的点P，该方法属于（）示教方法。",
    options: {
      A: "一点法",
      B: "三点法",
      C: "四点法",
      D: "六点法"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 314,
    type: "single_choice",
    question: "建立工具坐标时，用未知工具对示教点P进行3个不同姿态的示教，该方法属于（）示教方法。",
    options: {
      A: "一点法",
      B: "三点法",
      C: "四点法",
      D: "六点法"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 315,
    type: "single_choice",
    question: "如果程序中仅仅使用关节运动即PTP运动，示教点的类型为（），则Tool命令的加载与否对末端轨迹不产生影响。",
    options: {
      A: "AXISPOS",
      B: "CARTPOS",
      C: "jointtarget",
      D: "robottarget"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 316,
    type: "true_false",
    question: "对于物品重量这类变量，应使用 string 型。",
    answer: "false",
    category: "编程基础"
  },
  {
    id: 317,
    type: "true_false",
    question: "输入是从外部存储导入项目或程序。",
    answer: "true",
    category: "系统维护"
  },
  {
    id: 318,
    type: "true_false",
    question: "Ketop 指的是控制器上的 USB 接口。",
    answer: "true",
    category: "系统操作"
  },
  {
    id: 319,
    type: "true_false",
    question: "PTP 指令的优点是不容易到达极限位置或奇异点。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 320,
    type: "true_false",
    question: "PTP 指令的各轴运动是相对独立的，不存在插补关系，系统的运算量很小。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 321,
    type: "true_false",
    question: "PTP 指令也有可能出现奇异点。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 322,
    type: "true_false",
    question: "PTP 指令可以用于工具的插补动作。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 323,
    type: "true_false",
    question: "Lin 指令空间直线距离不宜太远，否则容易到达机器人的轴限位或死点。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 324,
    type: "true_false",
    question: "交互系统是实现机器人与外部环境中的设备相互联系和协调的系统。",
    answer: "true",
    category: "系统组成"
  },
  {
    id: 325,
    type: "true_false",
    question: "目前机器人中较为常用的传感器是旋转型光电式编码器。",
    answer: "true",
    category: "传感器"
  },
  {
    id: 326,
    type: "true_false",
    question: "液压传动系统具有无环境污染、易于控制、运动精度高、成本低和驱动效率高等优点，在机器人工作站中最为常用。",
    answer: "false",
    category: "电气驱动"
  },
  {
    id: 327,
    type: "true_false",
    question: "图像增强是调整图像的色度、亮度、饱和度、对比度和分辨率，使得图像效果清晰和颜色分明。",
    answer: "true",
    category: "机器视觉"
  },
  {
    id: 328,
    type: "true_false",
    question: "机器人上常用的可以测量转速的传感器有测度发电机和增量式码盘。",
    answer: "true",
    category: "传感器"
  },
  {
    id: 329,
    type: "true_false",
    question: "传感器是与人感觉器官相对应的元件。",
    answer: "true",
    category: "传感器"
  },
  {
    id: 330,
    type: "true_false",
    question: "电磁阀是利用电磁力的作用，推动阀芯换位，以实现气流或液流换向的阀类，通常由电磁控制部分和换向部分部分两部分组成。",
    answer: "true",
    category: "气动控制"
  },
  {
    id: 331,
    type: "true_false",
    question: "感应同步器只能测线位移，而不能测角位移。",
    answer: "false",
    category: "传感器"
  },
  {
    id: 332,
    type: "true_false",
    question: "保险丝更换，只要能使机器人恢复正常运行即可。",
    answer: "false",
    category: "电气安全"
  },
  {
    id: 333,
    type: "true_false",
    question: "步进电机主要用于开环控制系统，也可以用于闭环控制系统。",
    answer: "true",
    category: "电气驱动"
  },
  {
    id: 334,
    type: "true_false",
    question: "三相步进电机是靠三相绕组按照一定的相序轮流通电驱动的。",
    answer: "false",
    category: "电气驱动"
  },
  {
    id: 335,
    type: "single_choice",
    question: "一般的应用是将（）系建立在工件上或者码垛的码盘上，根据工件或码盘的实际摆放方向进行定义，操作直观方便。",
    options: {
      A: "直角坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "用户坐标系"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 336,
    type: "single_choice",
    question: "重定位工作站的工件时，只需要改变（）的位置，那么所有的路径都将跟随坐标系同步更新，极大简化了程序的编程。",
    options: {
      A: "直角坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "用户坐标系"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 337,
    type: "single_choice",
    question: "在工件对象的平面上，只需要确定三个点，就可以建立一个工件坐标系，称之为（）。",
    options: {
      A: "一点法",
      B: "三点法",
      C: "四点法",
      D: "六点法"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 338,
    type: "single_choice",
    question: "在RefSys命令的参数类型中选择（），可通过界面向导或者程序进行设置创建用户坐标系。",
    options: {
      A: "CARTREFSYS",
      B: "CARTREFSYSEXT",
      C: "CARTREFSYSVAR",
      D: "EXTERNALTCP"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 339,
    type: "single_choice",
    question: "（）类型的用户坐标系通过机器人外部的数据采集进行设置。一般需要增加模拟量模块，或者总线通讯模块，多用于简单的非实时性数据补偿。",
    options: {
      A: " CARTREFSYS",
      B: " CARTREFSYSEXT",
      C: " CARTREFSYSVAR",
      D: " EXTERNALTCP"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 340,
    type: "single_choice",
    question: "（ ）类型的用户坐标系为变量型用户坐标系，加载后，用户坐标系可进行实时变化，多用于机器人实时跟踪应用。",
    options: {
      A: " CARTREFSYS",
      B: " CARTREFSYSEXT",
      C: " CARTREFSYSVAR",
      D: " EXTERNALTCP"
    },
    answer: "C",
    category: "坐标系"
  },
  {
    id: 341,
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
    id: 342,
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
    id: 343,
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
    id: 344,
    type: "single_choice",
    question: "（ ）按钮（红色蘑菇头）：立即停止机器人运行（紧急情况使用）。",
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
    id: 345,
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
    id: 346,
    type: "single_choice",
    question: "通常对机器人进行示教编程时，要求最初程序点与最终程序点的位置（ ），可提高工作效率。",
    options: {
      A: "相同",
      B: "不同",
      C: "无所谓",
      D: "分离越大越好"
    },
    answer: "A",
    category: "应用编程"
  },
  {
    id: 347,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时，以（ ）。",
    options: {
      A: "示教最高速度来限制运行",
      B: "程序给定的速度运行",
      C: "示教最低速度来运行",
      D: "程序报错"
    },
    answer: "A",
    category: "应用编程"
  },
  {
    id: 348,
    type: "single_choice",
    question: "进入机器人工作站围栏内示教，应将机器人的运行模式设置为（ )。",
    options: {
      A: "自动模式",
      B: "手动模式",
      C: "维修模式",
      D: "联网模式"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 349,
    type: "single_choice",
    question: "进入机器人工作站围栏内示教，应将机器人的运行模式设置为（ )。",
    options: {
      A: "自动模式",
      B: "手动模式",
      C: "维修模式",
      D: "联网模式"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 350,
    type: "single_choice",
    question: "机器人在自动模式运行时，示教器（ ）。",
    options: {
      A: "可以示教编程",
      B: "可以修改程序",
      C: "可以切换坐标系",
      D: "安全栅栏门打开时无法启动"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 351,
    type: "single_choice",
    question: "在机器人系统中，（ ）确保操作人员安全，防止机器人碰撞或误操作造成伤害。",
    options: {
      A: "急停按钮",
      B: "使能开关",
      C: "安全光栅",
      D: "以上都是"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 352,
    type: "single_choice",
    question: "机器人在（ ）模式下运行时，即使安全门打开，机器人也可能继续运行，存在较大风险。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "EXT"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 353,
    type: "single_choice",
    question: "在机器人自动运行过程中，如果需要进入工作区域，应首先（ ）。",
    options: {
      A: "降低机器人运行速度",
      B: "切换到T1模式",
      C: "按下急停按钮",
      D: "通知同事"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 354,
    type: "single_choice",
    question: "工业机器人安全操作规程要求，操作人员（ ）。",
    options: {
      A: "必须经过专业培训并考核合格",
      B: "可以边操作边学习",
      C: "只需了解基本操作即可",
      D: "无需培训，直接上岗"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 355,
    type: "single_choice",
    question: "机器人在（ ）模式下，即使触发了安全信号（如安全门打开），机器人也会继续运行，直到程序执行完毕或手动停止。",
    options: {
      A: "手动T1",
      B: "手动T2",
      C: "自动",
      D: "外部自动"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 356,
    type: "single_choice",
    question: "机器人示教器上的使能开关（Enabling Switch）的作用是（ ）。",
    options: {
      A: "启动机器人",
      B: "停止机器人",
      C: "作为操作人员的安全确认，只有按下时才能进行点动操作",
      D: "切换运行模式"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 357,
    type: "single_choice",
    question: "在机器人自动运行前，必须确认（ ）。",
    options: {
      A: "机器人工作区域内无人",
      B: "程序加载正确",
      C: "安全防护装置正常",
      D: "以上全部"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 358,
    type: "single_choice",
    question: "工业机器人系统中，（ ）是防止人员进入危险区域的第一道安全防线。",
    options: {
      A: "安全门锁",
      B: "安全光栅",
      C: "物理围栏",
      D: "急停按钮"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 359,
    type: "single_choice",
    question: "在机器人维护保养时，为了防止机器人意外启动，应将机器人置于（ ）状态并悬挂警示牌。",
    options: {
      A: "自动模式",
      B: "手动模式",
      C: "急停状态",
      D: "关机状态"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 360,
    type: "single_choice",
    question: "机器人安全操作中，关于示教器的使用，下列说法错误的是（ ）。",
    options: {
      A: "示教器是操作人员与机器人交互的重要工具",
      B: "示教器可以在机器人自动运行时随时修改程序",
      C: "示教器上的急停按钮可以立即停止机器人",
      D: "示教器应妥善保管，防止非授权人员操作"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 361,
    type: "single_choice",
    question: "机器人在自动运行时，如果发生异常情况需要立即停止，最快捷的方法是（ ）。",
    options: {
      A: "在示教器上按停止键",
      B: "关闭控制柜电源",
      C: "按下急停按钮",
      D: "在PLC上发送停止信号"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 362,
    type: "single_choice",
    question: "工业机器人安全标准要求，机器人的（ ）必须始终处于安全人员的控制之下。",
    options: {
      A: "示教器",
      B: "控制柜",
      C: "本体",
      D: "所有部件"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 363,
    type: "single_choice",
    question: "机器人在（ ）模式下，最大速度被限制在较低的水平，以确保操作人员的安全。",
    options: {
      A: "自动",
      B: "手动T1",
      C: "手动T2",
      D: "外部自动"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 364,
    type: "single_choice",
    question: "在机器人编程和调试过程中，为了保证安全，通常要求操作人员（ ）。",
    options: {
      A: "佩戴安全帽",
      B: "穿着防静电服",
      C: "站在安全区域并保持注意力集中",
      D: "佩戴防护眼镜"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 365,
    type: "single_choice",
    question: "机器人系统中的安全信号（如安全门、光栅信号）通常连接到（ ）。",
    options: {
      A: "机器人本体",
      B: "示教器",
      C: "PLC或安全控制器",
      D: "伺服驱动器"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 366,
    type: "single_choice",
    question: "在机器人自动运行时，如果需要进入机器人工作区域，必须（ ）。",
    options: {
      A: "将机器人切换到T1模式",
      B: "确保有同事在旁边监护",
      C: "完全遵守安全锁定/挂牌程序（LOTO）",
      D: "穿戴好防护用品"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 367,
    type: "single_choice",
    question: "工业机器人安全操作的基本原则是（ ）。",
    options: {
      A: "效率优先，安全其次",
      B: "安全第一，预防为主",
      C: "生产需要，可以适当冒险",
      D: "熟练操作，无需过多担心"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 368,
    type: "single_choice",
    question: "机器人在自动运行过程中，如果出现程序异常或路径错误，最安全的做法是（ ）。",
    options: {
      A: "立即进入安全区域手动调整",
      B: "等待程序自行结束",
      C: "立即按下急停按钮，并在排除故障后重新启动",
      D: "通过示教器远程修改程序"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 369,
    type: "single_choice",
    question: "在进行机器人程序调试时，为了确保安全，应首先（ ）。",
    options: {
      A: "以最高速度运行程序",
      B: "以单步模式运行程序",
      C: "以连续模式运行程序",
      D: "以自动模式运行程序"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 370,
    type: "single_choice",
    question: "机器人在（ ）模式下，安全门打开会立即停止机器人运行。",
    options: {
      A: "手动T1",
      B: "手动T2",
      C: "自动",
      D: "外部自动"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 371,
    type: "single_choice",
    question: "工业机器人系统中，（ ）用于在紧急情况下快速切断机器人电源或运动。",
    options: {
      A: "使能开关",
      B: "急停按钮",
      C: "模式选择开关",
      D: "启动按钮"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 372,
    type: "single_choice",
    question: "机器人操作人员在进行示教编程前，应（ ）。",
    options: {
      A: "熟悉机器人的运动范围和速度",
      B: "了解程序的基本逻辑",
      C: "确认安全防护装置正常",
      D: "以上全部"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 373,
    type: "single_choice",
    question: "在机器人系统维护时，如果需要带电作业，必须（ ）。",
    options: {
      A: "由一人独立完成",
      B: "至少两人协同作业，一人操作，一人监护",
      C: "穿戴绝缘手套即可",
      D: "关闭主电源"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 374,
    type: "single_choice",
    question: "工业机器人安全操作中，关于工作区域的管理，下列说法正确的是（ ）。",
    options: {
      A: "工作区域内可以放置工具和杂物",
      B: "工作区域地面应保持清洁、无障碍物",
      C: "安全门可以长期开启以便于操作",
      D: "警示灯亮起时可以进入工作区域"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 375,
    type: "single_choice",
    question: "机器人在自动运行时，如果操作人员需要与机器人进行交互（如装卸工件），应（ ）。",
    options: {
      A: "直接进入工作区域操作",
      B: "通过示教器远程操作",
      C: "将机器人切换到手动模式，并确保安全措施到位",
      D: "加快机器人运行速度以减少等待时间"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 376,
    type: "single_choice",
    question: "工业机器人安全标准规定，机器人的（ ）必须清晰可见且易于操作。",
    options: {
      A: "急停按钮",
      B: "使能开关",
      C: "模式选择开关",
      D: "启动按钮"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 377,
    type: "single_choice",
    question: "在机器人系统中，（ ）用于检测人员或物体是否进入危险区域。",
    options: {
      A: "压力传感器",
      B: "温度传感器",
      C: "安全光栅或安全地毯",
      D: "位置传感器"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 378,
    type: "single_choice",
    question: "机器人操作人员发现设备异常或安全隐患时，应（ ）。",
    options: {
      A: "继续操作，看是否能自行恢复",
      B: "立即停止操作并报告相关人员",
      C: "尝试自行修理",
      D: "忽略异常，完成当前任务"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 379,
    type: "single_choice",
    question: "工业机器人在（ ）模式下，即使是经验丰富的操作员也不应进入其工作范围。",
    options: {
      A: "手动T1",
      B: "手动T2",
      C: "自动",
      D: "点动"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 380,
    type: "single_choice",
    question: "机器人安全操作规程要求，未经授权的人员（ ）操作机器人系统。",
    options: {
      A: "可以",
      B: "在指导下可以",
      C: "严禁",
      D: "偶尔可以"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 381,
    type: "single_choice",
    question: "在机器人自动运行期间，如果需要临时停止（例如装卸工件），应使用（ ）。",
    options: {
      A: "急停按钮",
      B: "示教器上的暂停/启动按钮",
      C: "关闭控制柜电源",
      D: "拔掉使能开关"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 382,
    type: "single_choice",
    question: "机器人安全操作中，关于个人防护装备（PPE），下列说法错误的是（ ）。",
    options: {
      A: "进入机器人工作区域必须穿戴安全帽",
      B: "操作机器人时必须佩戴防护手套",
      C: "根据具体作业风险评估结果选择合适的PPE",
      D: "在安全围栏外操作示教器时通常不需要特殊PPE"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 383,
    type: "single_choice",
    question: "工业机器人系统中，（ ）用于确保在维护或检修时，机器人不会意外启动。",
    options: {
      A: "安全门",
      B: "安全光栅",
      C: "锁定/挂牌装置（LOTO）",
      D: "急停按钮"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 384,
    type: "single_choice",
    question: "机器人在（ ）模式下，速度可以高于T1模式，但仍需确保操作人员安全。",
    options: {
      A: "自动",
      B: "手动T1",
      C: "手动T2",
      D: "外部自动"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 385,
    type: "single_choice",
    question: "在机器人编程调试过程中，如果需要进入机器人工作范围，应（ ）。",
    options: {
      A: "确保机器人处于T1模式且速度较低",
      B: "按下急停按钮并悬挂警示牌",
      C: "通知同事在旁边协助",
      D: "穿戴好防护服"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 386,
    type: "single_choice",
    question: "工业机器人安全标准要求，机器人的（ ）应定期进行检查和维护。",
    options: {
      A: "急停按钮",
      B: "安全光栅",
      C: "安全门锁",
      D: "以上全部"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 387,
    type: "single_choice",
    question: "机器人在自动运行时，如果安全信号（如安全门）失效，系统应（ ）。",
    options: {
      A: "继续运行",
      B: "报警但不停止",
      C: "立即停止机器人运行",
      D: "减速运行"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 388,
    type: "single_choice",
    question: "在机器人系统中，（ ）是操作人员与机器人进行交互、编程和控制的主要设备。",
    options: {
      A: "控制柜",
      B: "示教器（TP）",
      C: "PLC",
      D: "HMI触摸屏"
    },
    answer: "B",
    category: "设备操作"
  },
  {
    id: 389,
    type: "single_choice",
    question: "示教器上的（ ）按键用于切换机器人的坐标系，如世界坐标系、基坐标系、工具坐标系、用户坐标系等。",
    options: {
      A: "COORD",
      B: "SELECT",
      C: "EDIT",
      D: "DATA"
    },
    answer: "A",
    category: "设备操作"
  },
  {
    id: 390,
    type: "single_choice",
    question: "在示教器上，（ ）按键通常用于确认操作或进入下一级菜单。",
    options: {
      A: "ESC",
      B: "ENTER",
      C: "SHIFT",
      D: "MENU"
    },
    answer: "B",
    category: "设备操作"
  },
  {
    id: 391,
    type: "single_choice",
    question: "机器人示教器上的（ ）按键用于取消当前操作或返回上一级菜单。",
    options: {
      A: "ENTER",
      B: "SHIFT",
      C: "ESC",
      D: "MENU"
    },
    answer: "C",
    category: "设备操作"
  },
  {
    id: 392,
    type: "single_choice",
    question: "在示教器上，（ ）按键通常用于配合其他按键执行特定功能，如切换坐标轴、修改程序等。",
    options: {
      A: "SHIFT",
      B: "ALT",
      C: "CTRL",
      D: "TAB"
    },
    answer: "A",
    category: "设备操作"
  },
  {
    id: 393,
    type: "single_choice",
    question: "示教器上的（ ）按键用于打开主菜单，访问各种功能模块，如手动操作、程序编辑、输入输出等。",
    options: {
      A: "SELECT",
      B: "MENU",
      C: "EDIT",
      D: "DATA"
    },
    answer: "B",
    category: "设备操作"
  },
  {
    id: 394,
    type: "single_choice",
    question: "在示教器上进行程序编辑时，（ ）按键用于进入编辑模式，可以修改程序指令。",
    options: {
      A: "SELECT",
      B: "EDIT",
      C: "ENTER",
      D: "DATA"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 395,
    type: "single_choice",
    question: "示教器上的（ ）按键用于选择菜单项或程序指令。",
    options: {
      A: "SELECT",
      B: "ENTER",
      C: "SHIFT",
      D: "MENU"
    },
    answer: "A",
    category: "设备操作"
  },
  {
    id: 396,
    type: "single_choice",
    question: "在示教器上，（ ）按键用于访问数据窗口，可以查看和修改位置数据、I/O信号等。",
    options: {
      A: "SELECT",
      B: "EDIT",
      C: "DATA",
      D: "MENU"
    },
    answer: "C",
    category: "设备操作"
  },
  {
    id: 397,
    type: "single_choice",
    question: "示教器上的F1、F2、F3、F4、F5键通常被称为（ ）。",
    options: {
      A: "功能键",
      B: "软键",
      C: "快捷键",
      D: "辅助键"
    },
    answer: "B",
    category: "设备操作"
  },
  {
    id: 398,
    type: "single_choice",
    question: "在示教器上，软键（Soft Key）的功能（ ）。",
    options: {
      A: "是固定不变的",
      B: "根据当前屏幕显示和操作上下文而变化",
      C: "只能用于程序编辑",
      D: "只能用于手动操作"
    },
    answer: "B",
    category: "设备操作"
  },
  {
    id: 399,
    type: "single_choice",
    question: "示教器上的（ ）按键用于手动操作机器人，使机器人沿特定轴或坐标系移动。",
    options: {
      A: "SELECT",
      B: "EDIT",
      C: "JOG",
      D: "DATA"
    },
    answer: "C",
    category: "设备操作"
  },
  {
    id: 400,
    type: "single_choice",
    question: "在示教器上进行手动操作时，（ ）按键用于逐行执行程序指令。",
    options: {
      A: "START",
      B: "STEP",
      C: "STOP",
      D: "RESET"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 401,
    type: "single_choice",
    question: "示教器上的（ ）按键用于启动程序的自动运行。",
    options: {
      A: "STEP",
      B: "STOP",
      C: "START",
      D: "RESET"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 402,
    type: "single_choice",
    question: "在示教器上，（ ）按键用于停止正在运行的程序。",
    options: {
      A: "START",
      B: "STEP",
      C: "STOP",
      D: "RESET"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 403,
    type: "single_choice",
    question: "示教器上的（ ）按键用于重置程序指针到程序开头或指定位置。",
    options: {
      A: "START",
      B: "STEP",
      C: "STOP",
      D: "RESET"
    },
    answer: "D",
    category: "程序调试"
  },
  {
    id: 404,
    type: "single_choice",
    question: "在示教器上，（ ）按键用于切换机器人的运行模式，如手动T1、手动T2、自动等。",
    options: {
      A: "COORD",
      B: "SELECT",
      C: "MODE",
      D: "MENU"
    },
    answer: "C",
    category: "设备操作"
  },
  {
    id: 405,
    type: "single_choice",
    question: "示教器上的（ ）开关用于控制机器人的电机使能，只有在按下时（T1/T2模式下）才能进行点动操作。",
    options: {
      A: "急停开关",
      B: "模式选择开关",
      C: "使能开关（Enabling Device）",
      D: "启动开关"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 406,
    type: "single_choice",
    question: "在示教器上，（ ）按键用于打开程序管理界面，可以加载、创建、删除程序等。",
    options: {
      A: "SELECT",
      B: "EDIT",
      C: "FILE",
      D: "MENU"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 407,
    type: "single_choice",
    question: "示教器上的（ ）按键用于访问输入输出（I/O）监控界面。",
    options: {
      A: "SELECT",
      B: "EDIT",
      C: "I/O",
      D: "DATA"
    },
    answer: "C",
    category: "IO信号"
  },
  {
    id: 408,
    type: "single_choice",
    question: "在示教器上，（ ）按键用于打开位置（Position）界面，可以查看和修改机器人的当前位置、关节角度等信息。",
    options: {
      A: "SELECT",
      B: "POSN",
      C: "JOG",
      D: "DATA"
    },
    answer: "B",
    category: "设备操作"
  },
  {
    id: 409,
    type: "single_choice",
    question: "示教器上的（ ）按键用于访问系统设置和配置界面。",
    options: {
      A: "SELECT",
      B: "SETUP",
      C: "MENU",
      D: "DATA"
    },
    answer: "B",
    category: "系统操作"
  },
  {
    id: 410,
    type: "single_choice",
    question: "在示教器上进行程序编辑时，（ ）功能用于查找特定的指令或文本。",
    options: {
      A: "Replace",
      B: "Find",
      C: "Copy",
      D: "Paste"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 411,
    type: "single_choice",
    question: "示教器上的（ ）功能用于将选中的程序指令复制到剪贴板。",
    options: {
      A: "Cut",
      B: "Copy",
      C: "Paste",
      D: "Delete"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 412,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于将剪贴板中的内容粘贴到当前光标位置。",
    options: {
      A: "Cut",
      B: "Copy",
      C: "Paste",
      D: "Insert"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 413,
    type: "single_choice",
    question: "示教器上的（ ）功能用于剪切选中的程序指令，将其移动到剪贴板。",
    options: {
      A: "Cut",
      B: "Copy",
      C: "Paste",
      D: "Delete"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 414,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于删除选中的程序指令。",
    options: {
      A: "Cut",
      B: "Copy",
      C: "Paste",
      D: "Delete"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 415,
    type: "single_choice",
    question: "示教器上的（ ）功能用于撤销上一步操作。",
    options: {
      A: "Redo",
      B: "Undo",
      C: "Save",
      D: "Exit"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 416,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于重做被撤销的操作。",
    options: {
      A: "Redo",
      B: "Undo",
      C: "Save",
      D: "Exit"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 417,
    type: "single_choice",
    question: "示教器上的（ ）功能用于保存对程序所做的修改。",
    options: {
      A: "Redo",
      B: "Undo",
      C: "Save",
      D: "Exit"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 418,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于退出当前界面或程序编辑状态。",
    options: {
      A: "Redo",
      B: "Undo",
      C: "Save",
      D: "Exit"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 419,
    type: "single_choice",
    question: "示教器上的（ ）功能用于新建一个程序或文件。",
    options: {
      A: "New",
      B: "Open",
      C: "Save",
      D: "Delete"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 420,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于打开一个已存在的程序或文件。",
    options: {
      A: "New",
      B: "Open",
      C: "Save",
      D: "Close"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 421,
    type: "single_choice",
    question: "示教器上的（ ）功能用于格式化程序代码，使其结构更清晰、易读。",
    options: {
      A: "Find",
      B: "Replace",
      C: "Format",
      D: "Comment"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 422,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于在程序中添加注释，提高代码可读性。",
    options: {
      A: "Find",
      B: "Replace",
      C: "Format",
      D: "Comment"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 423,
    type: "single_choice",
    question: "示教器上的（ ）功能用于替换程序中的特定文本或指令。",
    options: {
      A: "Find",
      B: "Replace",
      C: "Format",
      D: "Comment"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 424,
    type: "single_choice",
    question: "在示教器上进行手动操作时，（ ）坐标系下，机器人沿世界坐标系的X、Y、Z轴移动。",
    options: {
      A: "关节坐标系（JOINT）",
      B: "世界坐标系（WORLD）",
      C: "工具坐标系（TOOL）",
      D: "用户坐标系（USER）"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 425,
    type: "single_choice",
    question: "示教器上的（ ）坐标系下，机器人各关节轴独立运动。",
    options: {
      A: "关节坐标系（JOINT）",
      B: "世界坐标系（WORLD）",
      C: "工具坐标系（TOOL）",
      D: "用户坐标系（USER）"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 426,
    type: "single_choice",
    question: "在示教器上进行手动操作时，（ ）坐标系下，机器人沿工具坐标系的X、Y、Z轴移动，常用于调整工具姿态。",
    options: {
      A: "关节坐标系（JOINT）",
      B: "世界坐标系（WORLD）",
      C: "工具坐标系（TOOL）",
      D: "用户坐标系（USER）"
    },
    answer: "C",
    category: "坐标系"
  },
  {
    id: 427,
    type: "single_choice",
    question: "示教器上的（ ）坐标系是用户自定义的坐标系，可以根据工件或工作台的位置进行设定。",
    options: {
      A: "关节坐标系（JOINT）",
      B: "世界坐标系（WORLD）",
      C: "工具坐标系（TOOL）",
      D: "用户坐标系（USER）"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 428,
    type: "single_choice",
    question: "在示教器上，（ ）按键通常用于增大机器人的运动速度或程序运行速度。",
    options: {
      A: "V-",
      B: "V+",
      C: "F1",
      D: "F2"
    },
    answer: "B",
    category: "设备操作"
  },
  {
    id: 429,
    type: "single_choice",
    question: "示教器上的（ ）按键通常用于减小机器人的运动速度或程序运行速度。",
    options: {
      A: "V+",
      B: "V-",
      C: "F3",
      D: "F4"
    },
    answer: "B",
    category: "设备操作"
  },
  {
    id: 430,
    type: "single_choice",
    question: "在示教器上，速度倍率通常以百分比（%）显示，表示当前速度相对于（ ）的百分比。",
    options: {
      A: "程序设定速度",
      B: "机器人最大速度",
      C: "手动模式最高速度",
      D: "默认速度"
    },
    answer: "C",
    category: "设备操作"
  },
  {
    id: 431,
    type: "single_choice",
    question: "示教器上的（ ）指示灯亮起，表示机器人伺服电机已使能，可以进行手动操作。",
    options: {
      A: "FAULT",
      B: "SERVO",
      C: "RUN",
      D: "HOLD"
    },
    answer: "B",
    category: "设备参数"
  },
  {
    id: 432,
    type: "single_choice",
    question: "在示教器上，（ ）指示灯亮起，表示机器人正在运行程序。",
    options: {
      A: "FAULT",
      B: "SERVO",
      C: "RUN",
      D: "HOLD"
    },
    answer: "C",
    category: "设备参数"
  },
  {
    id: 433,
    type: "single_choice",
    question: "示教器上的（ ）指示灯亮起，表示机器人处于暂停状态。",
    options: {
      A: "FAULT",
      B: "SERVO",
      C: "RUN",
      D: "HOLD"
    },
    answer: "D",
    category: "设备参数"
  },
  {
    id: 434,
    type: "single_choice",
    question: "在示教器上，（ ）指示灯亮起（通常是红色），表示机器人系统发生故障。",
    options: {
      A: "FAULT",
      B: "SERVO",
      C: "RUN",
      D: "HOLD"
    },
    answer: "A",
    category: "设备参数"
  },
  {
    id: 435,
    type: "single_choice",
    question: "示教器上的（ ）指示灯亮起（通常是绿色），表示系统电源正常。",
    options: {
      A: "POWER",
      B: "SERVO",
      C: "RUN",
      D: "HOLD"
    },
    answer: "A",
    category: "设备参数"
  },
  {
    id: 436,
    type: "single_choice",
    question: "在示教器上，屏幕通常会显示机器人的（ ），方便操作人员了解机器人状态。",
    options: {
      A: "当前位置",
      B: "当前速度",
      C: "运行模式",
      D: "以上全部"
    },
    answer: "D",
    category: "设备操作"
  },
  {
    id: 437,
    type: "single_choice",
    question: "示教器上的（ ）功能用于备份和恢复机器人程序及系统参数。",
    options: {
      A: "File",
      B: "Setup",
      C: "Backup/Restore",
      D: "I/O"
    },
    answer: "C",
    category: "系统维护"
  },
  {
    id: 438,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置机器人的系统时间、日期、语言等基本参数。",
    options: {
      A: "File",
      B: "Setup",
      C: "Backup/Restore",
      D: "I/O"
    },
    answer: "B",
    category: "系统操作"
  },
  {
    id: 439,
    type: "single_choice",
    question: "示教器上的（ ）功能用于校准机器人的零点位置。",
    options: {
      A: "Calibrate",
      B: "Setup",
      C: "Backup/Restore",
      D: "I/O"
    },
    answer: "A",
    category: "机械原理"
  },
  {
    id: 440,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置和管理工具坐标系（Tool Frame）。",
    options: {
      A: "Calibrate",
      B: "Tool Setup",
      C: "User Frame",
      D: "I/O"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 441,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和管理用户坐标系（User Frame）。",
    options: {
      A: "Calibrate",
      B: "Tool Setup",
      C: "User Frame",
      D: "I/O"
    },
    answer: "C",
    category: "坐标系"
  },
  {
    id: 442,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于监控和强制（强制置位/复位）数字量和模拟量输入输出信号。",
    options: {
      A: "Calibrate",
      B: "Tool Setup",
      C: "User Frame",
      D: "I/O Monitor"
    },
    answer: "D",
    category: "IO信号"
  },
  {
    id: 443,
    type: "single_choice",
    question: "示教器上的（ ）功能用于查看机器人的报警信息和历史记录。",
    options: {
      A: "Alarm",
      B: "Tool Setup",
      C: "User Frame",
      D: "I/O Monitor"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 444,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看机器人的状态信息、版本号等。",
    options: {
      A: "Status",
      B: "Tool Setup",
      C: "User Frame",
      D: "I/O Monitor"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 445,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置机器人的安全参数，如安全区域、安全速度等。",
    options: {
      A: "Safety",
      B: "Tool Setup",
      C: "User Frame",
      D: "I/O Monitor"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 446,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置通信参数，如以太网、串口通信等。",
    options: {
      A: "Communication",
      B: "Tool Setup",
      C: "User Frame",
      D: "I/O Monitor"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 447,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置机器人的运动参数，如加速度、减速度等。",
    options: {
      A: "Motion",
      B: "Tool Setup",
      C: "User Frame",
      D: "I/O Monitor"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 448,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置程序运行的相关参数，如连续运行、单步运行等。",
    options: {
      A: "Program",
      B: "Tool Setup",
      C: "User Frame",
      D: "I/O Monitor"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 449,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置用户权限和密码。",
    options: {
      A: "Security",
      B: "Tool Setup",
      C: "User Frame",
      D: "I/O Monitor"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 450,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看和修改系统变量、位置变量等。",
    options: {
      A: "Data",
      B: "Tool Setup",
      C: "User Frame",
      D: "I/O Monitor"
    },
    answer: "A",
    category: "变量"
  },
  {
    id: 451,
    type: "single_choice",
    question: "机器人在（ ）模式下，可以进行程序的创建、编辑和管理。",
    options: {
      A: "自动模式",
      B: "手动模式",
      C: "远程模式",
      D: "所有模式"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 452,
    type: "single_choice",
    question: "在示教器上进行程序编辑时，通常需要先进入（ ）界面。",
    options: {
      A: "Manual",
      B: "Auto",
      C: "Program",
      D: "Setup"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 453,
    type: "single_choice",
    question: "示教器上的（ ）界面用于管理机器人程序文件，如新建、打开、保存、删除程序等。",
    options: {
      A: "Manual",
      B: "Auto",
      C: "Program",
      D: "File"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 454,
    type: "single_choice",
    question: "在示教器上，程序通常以（ ）为单位进行组织和管理。",
    options: {
      A: "指令",
      B: "函数",
      C: "模块",
      D: "文件"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 455,
    type: "single_choice",
    question: "示教器上的（ ）功能用于将程序指令插入到当前光标位置。",
    options: {
      A: "Insert",
      B: "Delete",
      C: "Copy",
      D: "Paste"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 456,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于将程序指令追加到程序末尾。",
    options: {
      A: "Insert",
      B: "Append",
      C: "Copy",
      D: "Paste"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 457,
    type: "single_choice",
    question: "示教器上的（ ）功能用于修改程序指令的参数，如位置、速度、IO信号等。",
    options: {
      A: "Edit",
      B: "Modify",
      C: "Change",
      D: "Update"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 458,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于搜索程序中的特定指令或文本内容。",
    options: {
      A: "Find",
      B: "Search",
      C: "Locate",
      D: "Seek"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 459,
    type: "single_choice",
    question: "示教器上的（ ）功能用于在程序中设置或清除断点，用于程序调试。",
    options: {
      A: "Breakpoint",
      B: "Debug",
      C: "Trace",
      D: "Watch"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 460,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于单步执行程序，逐行查看程序运行效果。",
    options: {
      A: "Single Step",
      B: "Continuous Run",
      C: "Cycle Run",
      D: "Backward Run"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 461,
    type: "single_choice",
    question: "示教器上的（ ）功能用于连续运行程序，直到程序结束或遇到断点。",
    options: {
      A: "Single Step",
      B: "Continuous Run",
      C: "Cycle Run",
      D: "Backward Run"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 462,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于循环运行程序，即程序执行完毕后自动从头开始执行。",
    options: {
      A: "Single Step",
      B: "Continuous Run",
      C: "Cycle Run",
      D: "Backward Run"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 463,
    type: "single_choice",
    question: "示教器上的（ ）功能用于反向运行程序，即从当前行向上执行。",
    options: {
      A: "Single Step",
      B: "Continuous Run",
      C: "Cycle Run",
      D: "Backward Run"
    },
    answer: "D",
    category: "程序调试"
  },
  {
    id: 464,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看程序运行时的变量值变化。",
    options: {
      A: "Breakpoint",
      B: "Debug",
      C: "Trace",
      D: "Watch"
    },
    answer: "D",
    category: "程序调试"
  },
  {
    id: 465,
    type: "single_choice",
    question: "示教器上的（ ）功能用于模拟程序运行，检查程序逻辑是否正确，而不实际驱动机器人运动。",
    options: {
      A: "Dry Run",
      B: "Simulation",
      C: "Test Run",
      D: "Virtual Run"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 466,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于将程序下载到机器人控制器中执行。",
    options: {
      A: "Upload",
      B: "Download",
      C: "Transfer",
      D: "Sync"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 467,
    type: "single_choice",
    question: "示教器上的（ ）功能用于将程序从机器人控制器上传到示教器进行备份或编辑。",
    options: {
      A: "Upload",
      B: "Download",
      C: "Transfer",
      D: "Sync"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 468,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于比较两个程序文件的差异。",
    options: {
      A: "Compare",
      B: "Diff",
      C: "Merge",
      D: "Sync"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 469,
    type: "single_choice",
    question: "示教器上的（ ）功能用于将一个程序的内容合并到另一个程序中。",
    options: {
      A: "Compare",
      B: "Diff",
      C: "Merge",
      D: "Sync"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 470,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于将程序与备份文件进行同步，确保一致性。",
    options: {
      A: "Compare",
      B: "Diff",
      C: "Merge",
      D: "Sync"
    },
    answer: "D",
    category: "程序管理"
  },
  {
    id: 471,
    type: "single_choice",
    question: "机器人在（ ）模式下，可以进行手动操作，如点动、示教等。",
    options: {
      A: "自动模式",
      B: "手动模式",
      C: "远程模式",
      D: "所有模式"
    },
    answer: "B",
    category: "设备操作"
  },
  {
    id: 472,
    type: "single_choice",
    question: "在示教器上进行手动操作时，通常需要先按下（ ）开关，并确保机器人处于手动模式。",
    options: {
      A: "急停开关",
      B: "模式选择开关",
      C: "使能开关（Enabling Device）",
      D: "启动开关"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 473,
    type: "single_choice",
    question: "示教器上的（ ）坐标系下，机器人各轴可以独立运动，常用于机器人回零点或避开奇异点。",
    options: {
      A: "关节坐标系（JOINT）",
      B: "世界坐标系（WORLD）",
      C: "工具坐标系（TOOL）",
      D: "用户坐标系（USER）"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 474,
    type: "single_choice",
    question: "在示教器上进行手动操作时，（ ）坐标系下，机器人TCP（工具中心点）沿选定坐标系的X、Y、Z轴直线移动。",
    options: {
      A: "关节坐标系（JOINT）",
      B: "直角坐标系（RECTANGULAR）",
      C: "工具坐标系（TOOL）",
      D: "用户坐标系（USER）"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 475,
    type: "single_choice",
    question: "示教器上的（ ）功能用于记录机器人的当前位置为示教点（Position）。",
    options: {
      A: "Record",
      B: "Teach",
      C: "Learn",
      D: "Store"
    },
    answer: "A",
    category: "应用编程"
  },
  {
    id: 476,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于修改已记录的示教点的位置数据。",
    options: {
      A: "Record",
      B: "Modify",
      C: "Edit",
      D: "Update"
    },
    answer: "B",
    category: "应用编程"
  },
  {
    id: 477,
    type: "single_choice",
    question: "示教器上的（ ）功能用于删除不需要的示教点。",
    options: {
      A: "Record",
      B: "Modify",
      C: "Delete",
      D: "Clear"
    },
    answer: "C",
    category: "应用编程"
  },
  {
    id: 478,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看和管理所有已定义的示教点。",
    options: {
      A: "Position List",
      B: "Point Manager",
      C: "Teach Point",
      D: "Location"
    },
    answer: "A",
    category: "应用编程"
  },
  {
    id: 479,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置机器人的运动速度，通常以mm/s或百分比表示。",
    options: {
      A: "Speed",
      B: "Velocity",
      C: "Rate",
      D: "Pace"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 480,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置机器人运动过程中的平滑过渡程度，影响路径的曲率。",
    options: {
      A: "Speed",
      B: "Zone",
      C: "Blend",
      D: "Smooth"
    },
    answer: "B",
    category: "运动控制"
  },
  {
    id: 481,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置机器人运动的加速度和减速度，影响启动和停止的快慢。",
    options: {
      A: "Acceleration",
      B: "Deceleration",
      C: "Ramp",
      D: "Dynamics"
    },
    answer: "D",
    category: "运动控制"
  },
  {
    id: 482,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置机器人工具的负载参数，如重量、重心等，以保证运动精度和安全性。",
    options: {
      A: "Load",
      B: "Payload",
      C: "Tool Load",
      D: "Mass"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 483,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和管理机器人与外部设备（如PLC）之间的I/O通信信号。",
    options: {
      A: "Communication",
      B: "I/O Config",
      C: "Signal",
      D: "Interface"
    },
    answer: "B",
    category: "IO信号"
  },
  {
    id: 484,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于监控数字量输入（DI）信号的状态，如传感器信号、按钮信号等。",
    options: {
      A: "DI Monitor",
      B: "DO Monitor",
      C: "AI Monitor",
      D: "AO Monitor"
    },
    answer: "A",
    category: "IO信号"
  },
  {
    id: 485,
    type: "single_choice",
    question: "示教器上的（ ）功能用于监控数字量输出（DO）信号的状态，如电磁阀、指示灯等。",
    options: {
      A: "DI Monitor",
      B: "DO Monitor",
      C: "AI Monitor",
      D: "AO Monitor"
    },
    answer: "B",
    category: "IO信号"
  },
  {
    id: 486,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于监控模拟量输入（AI）信号的状态，如压力传感器、温度传感器等。",
    options: {
      A: "DI Monitor",
      B: "DO Monitor",
      C: "AI Monitor",
      D: "AO Monitor"
    },
    answer: "C",
    category: "IO信号"
  },
  {
    id: 487,
    type: "single_choice",
    question: "示教器上的（ ）功能用于监控模拟量输出（AO）信号的状态，如变频器控制信号、比例阀控制信号等。",
    options: {
      A: "DI Monitor",
      B: "DO Monitor",
      C: "AI Monitor",
      D: "AO Monitor"
    },
    answer: "D",
    category: "IO信号"
  },
  {
    id: 488,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于强制置位（强制为1）或强制复位（强制为0）数字量输出信号。",
    options: {
      A: "Force DI",
      B: "Force DO",
      C: "Set AO",
      D: "Reset AO"
    },
    answer: "B",
    category: "IO信号"
  },
  {
    id: 489,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置模拟量输出信号的值。",
    options: {
      A: "Force DI",
      B: "Force DO",
      C: "Set AO",
      D: "Reset AO"
    },
    answer: "C",
    category: "IO信号"
  },
  {
    id: 490,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于清除对I/O信号的强制状态，恢复正常的程序控制。",
    options: {
      A: "Clear Force",
      B: "Release Force",
      C: "Reset Force",
      D: "Unforce"
    },
    answer: "A",
    category: "IO信号"
  },
  {
    id: 491,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置I/O信号的名称、地址、类型等属性。",
    options: {
      A: "I/O Config",
      B: "I/O Mapping",
      C: "I/O Properties",
      D: "I/O Setup"
    },
    answer: "C",
    category: "IO信号"
  },
  {
    id: 492,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于将I/O信号与程序中的变量或指令进行关联。",
    options: {
      A: "I/O Config",
      B: "I/O Mapping",
      C: "I/O Link",
      D: "I/O Bind"
    },
    answer: "B",
    category: "IO信号"
  },
  {
    id: 493,
    type: "single_choice",
    question: "机器人在（ ）模式下，由外部设备（如PLC）通过I/O信号或通信接口控制其启动、停止和程序选择。",
    options: {
      A: "手动T1模式",
      B: "手动T2模式",
      C: "自动模式",
      D: "远程模式"
    },
    answer: "C",
    category: "设备操作"
  },
  {
    id: 494,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置机器人在自动模式下的安全相关参数，如安全速度限制、安全区域等。",
    options: {
      A: "Safety Config",
      B: "Auto Config",
      C: "Remote Config",
      D: "System Config"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 495,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置机器人与外部设备通信的协议和参数，如Profibus、Ethernet等。",
    options: {
      A: "Network Config",
      B: "Bus Config",
      C: "Communication Config",
      D: "Protocol Config"
    },
    answer: "C",
    category: "系统操作"
  },
  {
    id: 496,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看和修改机器人的系统变量，如系统时间、计数器、标志位等。",
    options: {
      A: "System Variables",
      B: "User Variables",
      C: "Global Variables",
      D: "Local Variables"
    },
    answer: "A",
    category: "变量"
  },
  {
    id: 497,
    type: "single_choice",
    question: "示教器上的（ ）功能用于定义和管理用户自定义的变量，用于存储程序运行过程中的数据。",
    options: {
      A: "System Variables",
      B: "User Variables",
      C: "Global Variables",
      D: "Local Variables"
    },
    answer: "B",
    category: "变量"
  },
  {
    id: 498,
    type: "single_choice",
    question: "在示教器上，（ ）变量在整个程序中都可以访问，所有程序模块共享同一份数据。",
    options: {
      A: "System Variables",
      B: "User Variables",
      C: "Global Variables",
      D: "Local Variables"
    },
    answer: "C",
    category: "变量"
  },
  {
    id: 499,
    type: "single_choice",
    question: "示教器上的（ ）变量只在定义它的程序模块内部有效，其他模块无法直接访问。",
    options: {
      A: "System Variables",
      B: "User Variables",
      C: "Global Variables",
      D: "Local Variables"
    },
    answer: "D",
    category: "变量"
  },
  {
    id: 500,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于对变量进行赋值操作。",
    options: {
      A: "Assign",
      B: "Set",
      C: "=",
      D: "Define"
    },
    answer: "A",
    category: "变量"
  },
  {
    id: 501,
    type: "single_choice",
    question: "示教器上的（ ）功能用于对数值型变量进行加1操作。",
    options: {
      A: "Inc",
      B: "Add",
      C: "Plus",
      D: "Increment"
    },
    answer: "A",
    category: "变量"
  },
  {
    id: 502,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于对数值型变量进行减1操作。",
    options: {
      A: "Dec",
      B: "Sub",
      C: "Minus",
      D: "Decrement"
    },
    answer: "A",
    category: "变量"
  },
  {
    id: 503,
    type: "single_choice",
    question: "示教器上的（ ）功能用于比较两个变量的值，并根据比较结果执行不同的程序分支。",
    options: {
      A: "Compare",
      B: "If",
      C: "Jump",
      D: "Branch"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 504,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于根据条件判断结果，跳转到程序中的指定标签处继续执行。",
    options: {
      A: "Compare",
      B: "If",
      C: "Label",
      D: "Goto"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 505,
    type: "single_choice",
    question: "示教器上的（ ）功能用于定义程序中的标签，作为跳转指令的目标位置。",
    options: {
      A: "Compare",
      B: "If",
      C: "Label",
      D: "Goto"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 506,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于重复执行一段程序代码，直到满足退出条件。",
    options: {
      A: "Loop",
      B: "While",
      C: "For",
      D: "Repeat"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 507,
    type: "single_choice",
    question: "示教器上的（ ）功能用于在满足条件时执行循环体，条件在循环体执行前进行判断。",
    options: {
      A: "Loop",
      B: "While",
      C: "For",
      D: "Repeat"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 508,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于执行固定次数的循环。",
    options: {
      A: "Loop",
      B: "While",
      C: "For",
      D: "Repeat"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 509,
    type: "single_choice",
    question: "示教器上的（ ）功能用于调用子程序，执行完子程序后返回到调用点继续执行。",
    options: {
      A: "Call",
      B: "Jump",
      C: "Goto",
      D: "Execute"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 510,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于定义子程序的名称和入口点。",
    options: {
      A: "Function",
      B: "Procedure",
      C: "Routine",
      D: "Subprogram"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 511,
    type: "single_choice",
    question: "示教器上的（ ）功能用于在程序中添加延时，使机器人暂停指定的时间后再继续执行。",
    options: {
      A: "Delay",
      B: "Wait",
      C: "Pause",
      D: "Sleep"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 512,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于等待某个条件满足（如I/O信号状态变化）后再继续执行程序。",
    options: {
      A: "Delay",
      B: "Wait",
      C: "Pause",
      D: "Sleep"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 513,
    type: "single_choice",
    question: "示教器上的（ ）功能用于在程序执行过程中显示信息或提示，方便调试和监控。",
    options: {
      A: "Print",
      B: "Display",
      C: "Show",
      D: "Message"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 514,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于将程序中的错误信息或状态信息写入系统日志。",
    options: {
      A: "Log",
      B: "Write",
      C: "Record",
      D: "Trace"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 515,
    type: "single_choice",
    question: "示教器上的（ ）功能用于处理程序运行过程中出现的异常情况，防止程序崩溃。",
    options: {
      A: "Error",
      B: "Exception",
      C: "Trap",
      D: "Catch"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 516,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于终止当前正在执行的程序。",
    options: {
      A: "Stop",
      B: "End",
      C: "Exit",
      D: "Abort"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 517,
    type: "single_choice",
    question: "示教器上的（ ）功能用于立即停止所有程序的执行，并使机器人停止运动。",
    options: {
      A: "Stop",
      B: "Halt",
      C: "Emergency Stop",
      D: "Kill"
    },
    answer: "D",
    category: "程序调试"
  },
  {
    id: 518,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于重置程序执行状态，清除错误信息，使程序可以重新开始运行。",
    options: {
      A: "Reset",
      B: "Clear",
      C: "Initialize",
      D: "Restart"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 519,
    type: "single_choice",
    question: "示教器上的（ ）功能用于初始化机器人系统，恢复到默认状态。",
    options: {
      A: "Reset",
      B: "Clear",
      C: "Initialize",
      D: "Reboot"
    },
    answer: "C",
    category: "系统操作"
  },
  {
    id: 520,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于重新启动机器人控制器系统。",
    options: {
      A: "Reset",
      B: "Clear",
      C: "Initialize",
      D: "Reboot"
    },
    answer: "D",
    category: "系统操作"
  },
  {
    id: 521,
    type: "single_choice",
    question: "示教器上的（ ）功能用于备份机器人当前的程序、参数和系统设置到存储介质（如U盘）。",
    options: {
      A: "Backup",
      B: "Save",
      C: "Export",
      D: "Archive"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 522,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于从存储介质（如U盘）恢复之前备份的程序、参数和系统设置。",
    options: {
      A: "Restore",
      B: "Load",
      C: "Import",
      D: "Recover"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 523,
    type: "single_choice",
    question: "示教器上的（ ）功能用于将程序或数据导出到外部存储设备或计算机。",
    options: {
      A: "Backup",
      B: "Save",
      C: "Export",
      D: "Archive"
    },
    answer: "C",
    category: "系统维护"
  },
  {
    id: 524,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于从外部存储设备或计算机导入程序或数据。",
    options: {
      A: "Restore",
      B: "Load",
      C: "Import",
      D: "Recover"
    },
    answer: "C",
    category: "系统维护"
  },
  {
    id: 525,
    type: "single_choice",
    question: "示教器上的（ ）功能用于校准机器人的机械零点，确保位置精度。",
    options: {
      A: "Calibrate",
      B: "Zero",
      C: "Home",
      D: "Reference"
    },
    answer: "A",
    category: "机械原理"
  },
  {
    id: 526,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于使机器人各轴回到机械零点位置。",
    options: {
      A: "Calibrate",
      B: "Zero",
      C: "Home",
      D: "Reference"
    },
    answer: "C",
    category: "机械原理"
  },
  {
    id: 527,
    type: "single_choice",
    question: "示教器上的（ ）功能用于校准机器人工具坐标系，确定工具中心点（TCP）的位置和姿态。",
    options: {
      A: "Tool Calibration",
      B: "TCP Calibration",
      C: "Tool Center Point",
      D: "Tool Frame"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 528,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于校准用户坐标系，根据工件或工作台的实际位置设定坐标系原点和方向。",
    options: {
      A: "User Calibration",
      B: "Workpiece Calibration",
      C: "Frame Calibration",
      D: "Coordinate Calibration"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 529,
    type: "single_choice",
    question: "示教器上的（ ）功能用于查看机器人的系统报警信息，包括报警代码、报警描述和发生时间。",
    options: {
      A: "Alarm",
      B: "Error",
      C: "Fault",
      D: "Warning"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 530,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于清除已确认的报警信息。",
    options: {
      A: "Clear Alarm",
      B: "Reset Alarm",
      C: "Acknowledge Alarm",
      D: "Delete Alarm"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 531,
    type: "single_choice",
    question: "示教器上的（ ）功能用于确认报警信息，表明操作人员已知晓该报警。",
    options: {
      A: "Clear Alarm",
      B: "Reset Alarm",
      C: "Acknowledge Alarm",
      D: "Delete Alarm"
    },
    answer: "C",
    category: "系统操作"
  },
  {
    id: 532,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看机器人的历史报警记录。",
    options: {
      A: "Alarm History",
      B: "Error Log",
      C: "Event Log",
      D: "System Log"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 533,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置用户账户和密码，管理不同用户的操作权限。",
    options: {
      A: "User Management",
      B: "Account",
      C: "Login",
      D: "Permission"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 534,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于切换不同的用户账户登录系统。",
    options: {
      A: "User Management",
      B: "Account",
      C: "Login",
      D: "Permission"
    },
    answer: "C",
    category: "系统操作"
  },
  {
    id: 535,
    type: "single_choice",
    question: "示教器上的（ ）功能用于修改当前登录用户的密码。",
    options: {
      A: "Change Password",
      B: "Reset Password",
      C: "Update Password",
      D: "Modify Password"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 536,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置示教器屏幕的显示语言、亮度、对比度等。",
    options: {
      A: "Display Settings",
      B: "Screen Config",
      C: "UI Settings",
      D: "Appearance"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 537,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置系统时间、日期和时区。",
    options: {
      A: "Time Settings",
      B: "Clock Config",
      C: "Date/Time",
      D: "System Time"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 538,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看机器人的硬件信息、软件版本和序列号等。",
    options: {
      A: "System Info",
      B: "Hardware Info",
      C: "Software Info",
      D: "Device Info"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 539,
    type: "single_choice",
    question: "示教器上的（ ）功能用于查看控制器的内存使用情况、CPU占用率等系统资源信息。",
    options: {
      A: "System Info",
      B: "Resource Monitor",
      C: "Performance",
      D: "Diagnostics"
    },
    answer: "B",
    category: "系统操作"
  },
  {
    id: 540,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于执行系统诊断测试，检查硬件和软件是否正常工作。",
    options: {
      A: "System Info",
      B: "Resource Monitor",
      C: "Performance",
      D: "Diagnostics"
    },
    answer: "D",
    category: "系统操作"
  },
  {
    id: 541,
    type: "single_choice",
    question: "示教器上的（ ）功能用于更新机器人控制器的系统软件。",
    options: {
      A: "Software Update",
      B: "Firmware Update",
      C: "System Upgrade",
      D: "Patch"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 542,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于格式化存储卡或U盘等外部存储设备。",
    options: {
      A: "Format",
      B: "Erase",
      C: "Clear",
      D: "Delete"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 543,
    type: "single_choice",
    question: "示教器上的（ ）功能用于查看和管理连接到机器人控制器的外部设备，如I/O模块、通信模块等。",
    options: {
      A: "Device Manager",
      B: "Hardware Manager",
      C: "Peripheral",
      D: "Module"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 544,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置和配置网络连接参数，如IP地址、子网掩码、网关等。",
    options: {
      A: "Network Settings",
      B: "IP Config",
      C: "Ethernet",
      D: "LAN"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 545,
    type: "single_choice",
    question: "示教器上的（ ）功能用于启用或禁用机器人控制器的网络服务，如FTP、Web Server等。",
    options: {
      A: "Network Services",
      B: "Network Protocols",
      C: "Network Applications",
      D: "Network Utilities"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 546,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于测试网络连接是否正常，如ping命令等。",
    options: {
      A: "Network Diagnostics",
      B: "Network Test",
      C: "Ping",
      D: "Connectivity"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 547,
    type: "single_choice",
    question: "示教器上的（ ）功能用于查看和修改机器人的运动学参数，如DH参数等。",
    options: {
      A: "Kinematics",
      B: "Dynamics",
      C: "Mechanics",
      D: "Geometry"
    },
    answer: "A",
    category: "机械原理"
  },
  {
    id: 548,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置和调整机器人的动力学参数，如摩擦、惯量等，以优化运动性能。",
    options: {
      A: "Kinematics",
      B: "Dynamics",
      C: "Mechanics",
      D: "Geometry"
    },
    answer: "B",
    category: "机械原理"
  },
  {
    id: 549,
    type: "single_choice",
    question: "示教器上的（ ）功能用于配置机器人的安全选项，如安全速度限制、安全区域、安全门等。",
    options: {
      A: "Safety Config",
      B: "Security",
      C: "Protection",
      D: "Guard"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 550,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看和管理机器人的安全状态和安全信号。",
    options: {
      A: "Safety Status",
      B: "Security",
      C: "Protection",
      D: "Guard"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 551,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和配置机器人的视觉系统，如相机参数、图像处理算法等。",
    options: {
      A: "Vision Config",
      B: "Camera",
      C: "Image Processing",
      D: "Machine Vision"
    },
    answer: "A",
    category: "机器视觉"
  },
  {
    id: 552,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于执行视觉引导的机器人运动，如视觉定位、视觉抓取等。",
    options: {
      A: "Vision Guidance",
      B: "Visual Servoing",
      C: "Vision Control",
      D: "Image-Based Control"
    },
    answer: "A",
    category: "机器视觉"
  },
  {
    id: 553,
    type: "single_choice",
    question: "示教器上的（ ）功能用于查看和分析视觉系统的图像数据和处理结果。",
    options: {
      A: "Vision Data",
      B: "Image Viewer",
      C: "Vision Results",
      D: "Image Analysis"
    },
    answer: "A",
    category: "机器视觉"
  },
  {
    id: 554,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置和配置机器人的力/力矩控制参数，用于精密装配、打磨等应用。",
    options: {
      A: "Force Control",
      B: "Compliance Control",
      C: "Impedance Control",
      D: "Admittance Control"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 555,
    type: "single_choice",
    question: "示教器上的（ ）功能用于监控和显示机器人末端执行器受到的力/力矩反馈信号。",
    options: {
      A: "Force Feedback",
      B: "Torque Feedback",
      C: "Force/Torque Data",
      D: "Load Cell"
    },
    answer: "C",
    category: "传感器"
  },
  {
    id: 556,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于执行力控引导的机器人运动，如顺应性装配、轮廓跟踪等。",
    options: {
      A: "Force Guidance",
      B: "Compliance Motion",
      C: "Force-Controlled Motion",
      D: "Adaptive Motion"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 557,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和配置机器人的外部轴，如变位机、导轨等。",
    options: {
      A: "External Axis",
      B: "Additional Axis",
      C: "Linear Axis",
      D: "Rotary Axis"
    },
    answer: "A",
    category: "机械原理"
  },
  {
    id: 558,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于同步控制机器人本体和外部轴的运动。",
    options: {
      A: "Synchronized Motion",
      B: "Coordinated Motion",
      C: "Multi-Axis Control",
      D: "Combined Motion"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 559,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和管理机器人的多任务处理，允许同时运行多个程序。",
    options: {
      A: "Multi-Tasking",
      B: "Parallel Processing",
      C: "Concurrent Execution",
      D: "Background Tasks"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 560,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置和配置机器人的实时通信接口，如Profinet、Ethernet/IP等工业以太网协议。",
    options: {
      A: "Real-Time Communication",
      B: "Industrial Ethernet",
      C: "Fieldbus",
      D: "Network Protocol"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 561,
    type: "single_choice",
    question: "示教器上的（ ）功能用于监控和诊断机器人的实时通信状态和数据交换情况。",
    options: {
      A: "Communication Diagnostics",
      B: "Network Monitoring",
      C: "Data Exchange",
      D: "Protocol Analysis"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 562,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置和配置机器人的远程访问功能，允许通过网络远程监控和控制机器人。",
    options: {
      A: "Remote Access",
      B: "Web Interface",
      C: "Remote Control",
      D: "Network Access"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 563,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和管理机器人的用户自定义界面，允许用户创建个性化的操作界面。",
    options: {
      A: "Custom UI",
      B: "User Interface",
      C: "HMI Builder",
      D: "Screen Customization"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 564,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于创建和编辑用户自定义的软键（Soft Keys）及其对应的功能。",
    options: {
      A: "Soft Key Editor",
      B: "Custom Keys",
      C: "Function Keys",
      D: "Macro Keys"
    },
    answer: "A",
    category: "设备操作"
  },
  {
    id: 565,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和配置机器人的数据记录功能，可以记录运行数据、报警信息等。",
    options: {
      A: "Data Logging",
      B: "Event Logging",
      C: "Trace Data",
      D: "Record Data"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 566,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看和分析已记录的数据文件。",
    options: {
      A: "Data Analysis",
      B: "Log Viewer",
      C: "Data Review",
      D: "Report Generator"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 567,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和配置机器人的能耗管理选项，以优化能源使用效率。",
    options: {
      A: "Energy Management",
      B: "Power Saving",
      C: "Efficiency",
      D: "Consumption"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 568,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看机器人的能耗统计数据和报告。",
    options: {
      A: "Energy Statistics",
      B: "Power Report",
      C: "Consumption Data",
      D: "Efficiency Report"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 569,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和配置机器人的维护计划和提醒，确保设备得到及时保养。",
    options: {
      A: "Maintenance",
      B: "Service",
      C: "Preventive Maintenance",
      D: "Scheduled Maintenance"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 570,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看机器人的维护历史记录和保养信息。",
    options: {
      A: "Maintenance History",
      B: "Service Log",
      C: "Repair Record",
      D: "Upkeep Data"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 571,
    type: "single_choice",
    question: "示教器上的（ ）功能用于执行机器人的自检程序，检查各部件是否正常工作。",
    options: {
      A: "Self-Diagnosis",
      B: "Self-Test",
      C: "Diagnostic Test",
      D: "System Check"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 572,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看机器人的故障诊断结果和维修建议。",
    options: {
      A: "Troubleshooting",
      B: "Fault Finding",
      C: "Repair Guide",
      D: "Maintenance Tips"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 573,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和配置机器人的仿真环境，用于离线编程和测试。",
    options: {
      A: "Simulation",
      B: "Offline Programming",
      C: "Virtual Environment",
      D: "3D Simulation"
    },
    answer: "A",
    category: "应用编程"
  },
  {
    id: 574,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于在仿真环境中测试和验证机器人程序，而无需实际驱动机器人。",
    options: {
      A: "Simulation",
      B: "Dry Run",
      C: "Program Test",
      D: "Virtual Execution"
    },
    answer: "B",
    category: "应用编程"
  },
  {
    id: 575,
    type: "single_choice",
    question: "示教器上的（ ）功能用于将仿真验证后的程序同步到真实的机器人控制器中执行。",
    options: {
      A: "Program Transfer",
      B: "Code Download",
      C: "Simulation to Real",
      D: "Deploy"
    },
    answer: "A",
    category: "应用编程"
  },
  {
    id: 576,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置和管理机器人的生产节拍和周期时间，优化生产效率。",
    options: {
      A: "Cycle Time",
      B: "Production Rate",
      C: "Throughput",
      D: "Takt Time"
    },
    answer: "A",
    category: "行业应用"
  },
  {
    id: 577,
    type: "single_choice",
    question: "示教器上的（ ）功能用于监控和统计机器人的生产数据，如产量、合格率、停机时间等。",
    options: {
      A: "Production Data",
      B: "Performance Metrics",
      C: "KPI",
      D: "Statistics"
    },
    answer: "A",
    category: "行业应用"
  },
  {
    id: 578,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置和配置机器人的质量控制参数，如检测标准、公差范围等。",
    options: {
      A: "Quality Control",
      B: "Inspection",
      C: "QC Settings",
      D: "Quality Assurance"
    },
    answer: "A",
    category: "质量控制"
  },
  {
    id: 579,
    type: "single_choice",
    question: "示教器上的（ ）功能用于执行质量检测程序，并记录检测结果。",
    options: {
      A: "Quality Check",
      B: "Inspection Run",
      C: "QC Execution",
      D: "Quality Test"
    },
    answer: "A",
    category: "质量控制"
  },
  {
    id: 580,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看和分析质量检测的历史数据和趋势。",
    options: {
      A: "Quality Analysis",
      B: "QC Report",
      C: "Defect Analysis",
      D: "Quality Trends"
    },
    answer: "A",
    category: "质量控制"
  },
  {
    id: 581,
    type: "single_choice",
    question: "示教器上的（ ）功能用于与其他机器人或设备进行协同工作，实现复杂的自动化生产线。",
    options: {
      A: "Coordination",
      B: "Synchronization",
      C: "Collaboration",
      D: "Integration"
    },
    answer: "A",
    category: "行业应用"
  },
  {
    id: 582,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置和管理机器人单元（Robot Cell）的配置，包括机器人、外围设备、安全装置等。",
    options: {
      A: "Cell Configuration",
      B: "Workcell Setup",
      C: "Station Config",
      D: "Layout"
    },
    answer: "A",
    category: "行业应用"
  },
  {
    id: 583,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和配置机器人的工艺参数，如焊接电流、喷涂压力、搬运速度等。",
    options: {
      A: "Process Parameters",
      B: "Application Settings",
      C: "工艺参数",
      D: "Operating Parameters"
    },
    answer: "A",
    category: "行业应用"
  },
  {
    id: 584,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于调用和管理预定义的应用程序模块，如焊接程序、喷涂程序、码垛程序等。",
    options: {
      A: "Application Library",
      B: "Program Library",
      C: "工艺库",
      D: "Routine Library"
    },
    answer: "A",
    category: "行业应用"
  },
  {
    id: 585,
    type: "single_choice",
    question: "示教器上的（ ）功能用于创建和编辑机器人的人机交互界面（HMI），方便操作人员进行操作和监控。",
    options: {
      A: "HMI Editor",
      B: "User Interface",
      C: "Screen Builder",
      D: "Operator Panel"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 586,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置和配置机器人的报警和事件通知机制，如声音报警、灯光报警、邮件通知等。",
    options: {
      A: "Alarm Notification",
      B: "Event Handling",
      C: "Alert System",
      D: "Warning System"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 587,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和管理机器人的数字孪生（Digital Twin）模型，用于虚拟调试和预测性维护。",
    options: {
      A: "Digital Twin",
      B: "Virtual Model",
      C: "仿真模型",
      D: "Twin System"
    },
    answer: "A",
    category: "行业应用"
  },
  {
    id: 588,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于访问和使用机器人制造商提供的在线帮助文档和资源。",
    options: {
      A: "Online Help",
      B: "Documentation",
      C: "User Manual",
      D: "Support"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 589,
    type: "single_choice",
    question: "示教器上的（ ）功能用于联系技术支持或提交服务请求。",
    options: {
      A: "Online Help",
      B: "Documentation",
      C: "User Manual",
      D: "Support"
    },
    answer: "D",
    category: "系统操作"
  },
  {
    id: 590,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看和管理机器人的软件许可证和功能模块激活状态。",
    options: {
      A: "License Management",
      B: "Software License",
      C: "Activation",
      D: "Feature Control"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 591,
    type: "single_choice",
    question: "示教器上的（ ）功能用于更新或激活机器人的软件许可证。",
    options: {
      A: "License Management",
      B: "License Update",
      C: "Activation",
      D: "Feature Control"
    },
    answer: "B",
    category: "系统操作"
  },
  {
    id: 592,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看机器人的保修信息和合同状态。",
    options: {
      A: "Warranty",
      B: "Service Contract",
      C: "Support Agreement",
      D: "Maintenance Contract"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 593,
    type: "single_choice",
    question: "示教器上的（ ）功能用于注册产品并获取在线服务和支持。",
    options: {
      A: "Product Registration",
      B: "Online Registration",
      C: "Activation",
      D: "Setup Wizard"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 594,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于执行机器人的出厂设置恢复，将所有参数恢复到默认值。",
    options: {
      A: "Factory Reset",
      B: "System Restore",
      C: "Default Settings",
      D: "Initialization"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 595,
    type: "single_choice",
    question: "示教器上的（ ）功能用于查看和打印机器人的操作日志和事件记录。",
    options: {
      A: "Event Log",
      B: "Operation Log",
      C: "System Log",
      D: "Audit Trail"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 596,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于设置和配置机器人的时钟同步，确保与外部系统的时间一致性。",
    options: {
      A: "Clock Sync",
      B: "Time Sync",
      C: "NTP",
      D: "Synchronization"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 597,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和管理机器人的环境参数，如温度、湿度等，用于特殊应用场景。",
    options: {
      A: "Environmental Settings",
      B: "Ambient Conditions",
      C: "Climate Control",
      D: "Operating Environment"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 598,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看和分析机器人的性能基准测试结果。",
    options: {
      A: "Performance Benchmark",
      B: "Benchmark Test",
      C: "Performance Analysis",
      D: "System Evaluation"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 599,
    type: "single_choice",
    question: "示教器上的（ ）功能用于设置和配置机器人的冗余系统，提高系统的可靠性和可用性。",
    options: {
      A: "Redundancy",
      B: "Failover",
      C: "Backup System",
      D: "High Availability"
    },
    answer: "A",
    category: "系统操作"
  },
  {
    id: 600,
    type: "single_choice",
    question: "在示教器上，（ ）功能用于查看和管理机器人的固件版本，并执行固件升级操作。",
    options: {
      A: "Firmware Management",
      B: "Firmware Update",
      C: "Bootloader",
      D: "Embedded Software"
    },
    answer: "A",
    category: "系统维护"
  },
  {
    id: 601,
    type: "true_false",
    question: "工业机器人系统中，急停按钮（Emergency Stop）是保障操作人员安全的最后一道防线，按下后应立即切断所有驱动电源。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 602,
    type: "true_false",
    question: "在机器人自动运行模式下，安全门打开会导致机器人立即减速停止，以确保安全。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 603,
    type: "true_false",
    question: "示教器（Teach Pendant）是操作人员与机器人交互的主要设备，可以在机器人自动运行时随时修改程序。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 604,
    type: "true_false",
    question: "机器人在手动模式（T1/T2）下操作时，即使触发了安全信号（如安全门打开），机器人也会继续运行，直到程序执行完毕或手动停止。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 605,
    type: "true_false",
    question: "工业机器人操作人员必须经过专业培训并考核合格后才能上岗操作，这是安全操作的基本要求。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 606,
    type: "true_false",
    question: "在机器人系统维护时，如果需要带电作业，可以由一人独立完成，以提高效率。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 607,
    type: "true_false",
    question: "机器人安全操作规程要求，未经授权的人员严禁操作机器人系统，即使是简单的示教操作也不允许。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 608,
    type: "true_false",
    question: "在机器人自动运行过程中，如果出现程序异常或路径错误，应立即进入安全区域手动调整机器人位置。",
    answer: "false",
    category: "安全操作"
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

