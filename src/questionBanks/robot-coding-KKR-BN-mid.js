// questionBank.js - 工业机器人应用编程X证书理论知识命题KKR-BN中级
export const questionBank = [
  {
    id: 1,
    type: "single_choice",
    question: "考虑到工业生产安全，以下不是目前工业机器人与外部设备进行通信的通信方式（）。",
    options: {
      A: "以太网",
      B: "互联网",
      C: "IO通信",
      D: "485"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 2,
    type: "single_choice",
    question: "当现场要求只能IO通信时，机器人IO不够用的情况下可以考虑（）。",
    options: {
      A: "使用串口信",
      B: "使用扩展IO模块",
      C: "使用Modbus通信",
      D: "使用Profibus"
    },
    answer: "B",
    category: "IO通信"
  },
  {
    id: 3,
    type: "single_choice",
    question: "以下不属于TCP/IP通信特点的是（）。",
    options: {
      A: "光电开关及磁性开关",
      B: "PLC/PC数据交互",
      C: "开放的协议标准",
      D: "具有惟一的地址"
    },
    answer: "A",
    category: "通信技术"
  },
  {
    id: 4,
    type: "single_choice",
    question: "ProfiNetIO总线，数据交换按主从原理（设备控制器）来进行，不属于工业以太网输入/输出端器材的是（）。",
    options: {
      A: "管理器",
      B: "控制器",
      C: "从属装置",
      D: "以上都不是"
    },
    answer: "D",
    category: "总线技术"
  },
  {
    id: 5,
    type: "single_choice",
    question: "测速发电机的输出信号为（）。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "开关量",
      D: "脉冲量"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 6,
    type: "single_choice",
    question: "模拟通信系统与数字通信系统的主要区别是（）。",
    options: {
      A: "载波频率不一样",
      B: "信道传送的信号不一样",
      C: "调制方式不一样",
      D: "编码方式不一样"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 7,
    type: "single_choice",
    question: "KRC4与ProfiNet的连接，可接受控制的操作和监控的装置是（）。",
    options: {
      A: "管理器",
      B: "控制器",
      C: "从属装置",
      D: "以上都不是"
    },
    answer: "B",
    category: "总线技术"
  },
  {
    id: 8,
    type: "single_choice",
    question: "下列不是现场总线技术与集散控制相比而言的优点的是（）。",
    options: {
      A: "开放性",
      B: "网络化信息共享",
      C: "非智能化",
      D: "高度分散性"
    },
    answer: "C",
    category: "总线技术"
  },
  {
    id: 9,
    type: "single_choice",
    question: "ProfiNet（工业以太网）是基于TCP/IP的工业通讯系统，特点描述错误的（）。",
    options: {
      A: "不能按名称分配地址",
      B: "实现开放式和分配式的自动化",
      C: "凭借现场总线和以太网实现全面通讯",
      D: "可实现现场层面直至主控层面的通讯，不可实IO信号设置中，表示机器人输出信号的是（）。"
    },
    answer: "D",
    category: "总线技术"
  },
  {
    id: 10,
    type: "single_choice",
    question: "在IO信号设置中，表示机器人输出信号的是（）。",
    options: {
      A: "DI",
      B: "DO",
      C: "DA",
      D: "DS"
    },
    answer: "B",
    category: "IO通信"
  },
  {
    id: 11,
    type: "single_choice",
    question: "不属于工业机器人的工作空间设置考虑范围的是（）。",
    options: {
      A: "碰撞",
      B: "负载",
      C: "美观",
      D: "效率"
    },
    answer: "C",
    category: "工作空间"
  },
  {
    id: 12,
    type: "single_choice",
    question: "I/O信号叙述错误的是（）。",
    options: {
      A: "I/O信号分为输入信号和输出信号两大类",
      B: "输入信号中又可划分为数字量输入信号，模拟量输入信号和组输入信号",
      C: "输出信号中包括数字量输出信号，不包括模拟量输出信号和组输出信号",
      D: "I/O信号包括模拟量信号"
    },
    answer: "C",
    category: "IO通信"
  },
  {
    id: 13,
    type: "single_choice",
    question: "国产机器人控制系统中通常包括（）个输入（）个输出。",
    options: {
      A: "1,1",
      B: "2,2",
      C: "3,3",
      D: "8,8"
    },
    answer: "D",
    category: "控制系统"
  },
  {
    id: 14,
    type: "single_choice",
    question: "当前大部分通信总线技术类型是（）。",
    options: {
      A: "串口通信技术",
      B: "实时工业以太网总线技术",
      C: "485通信",
      D: "232通信"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 15,
    type: "single_choice",
    question: "KUKA机器人中的KRC4控制柜进行输入输出模块要进行（）配置。",
    options: {
      A: "① 硬件准备； (2) 软件准备； (3) 硬件连接； (4) 软件配置",
      B: "③④",
      C: "①②③",
      D: "①②③④"
    },
    answer: "D",
    category: "控制系统"
  },
  {
    id: 16,
    type: "true_false",
    question: "对于气动焊枪，每一套参数，程序中会体现压力电流值，由焊接控制柜直接控制。",
    answer: "true",
    category: "焊接技术"
  },
  {
    id: 17,
    type: "true_false",
    question: "一般情况下，弧焊焊接速度约为 $5\\sim 50\\mathrm{mm / s}$",
    answer: "true",
    category: "焊接技术"
  },
  {
    id: 18,
    type: "true_false",
    question: "元器件表面粘污或氧化严重时，可以用刮刀或砂纸去除污物或氧化层。",
    answer: "false",
    category: "维护保养"
  },
  {
    id: 19,
    type: "true_false",
    question: "清除焊接多余物一般用无水乙醇、三氯三氟乙烷、异丙醇等清洗剂进行清洗。",
    answer: "true",
    category: "焊接技术"
  },
  {
    id: 20,
    type: "true_false",
    question: "变位机是机器人焊接生产线及焊接柔性加工单元的重要组成部分。",
    answer: "true",
    category: "焊接设备"
  },
  {
    id: 21,
    type: "true_false",
    question: "弧焊过程中，要求焊枪严格按焊道轨迹运动，焊丝可以间隔填充。",
    answer: "true",
    category: "焊接技术"
  },
  {
    id: 22,
    type: "true_false",
    question: "对于熔化极气体保护焊而言，电流越大，电弧越稳定，在焊接作业过程中尽可能采用大电流。",
    answer: "false",
    category: "焊接技术"
  },
  {
    id: 23,
    type: "true_false",
    question: "为了避免飞溅对导电嘴的损伤，在施焊过程中尽可能增大焊丝的伸出长度。",
    answer: "false",
    category: "焊接技术"
  },
  {
    id: 24,
    type: "true_false",
    question: "因为氧气的氧化性较强，所以绝不允许出现在保护气体中。",
    answer: "true",
    category: "焊接技术"
  },
  {
    id: 25,
    type: "true_false",
    question: "由于药芯焊丝芯部填充有药粉，所以操作时送丝的压力较实芯焊丝要小。",
    answer: "true",
    category: "焊接技术"
  },
  {
    id: 26,
    type: "true_false",
    question: "描述物体相对于坐标系进行独立运动的数目称为自由度。",
    answer: "true",
    category: "机器人基础"
  },
  {
    id: 27,
    type: "true_false",
    question: "I/O 是 Input/Output 的缩写，即输入/输出端口，工业机器人可通过 I/O 与外部设备进行交互。",
    answer: "true",
    category: "IO通信"
  },
  {
    id: 28,
    type: "true_false",
    question: "KUKA 机器人可以选配标准 KUKA 的 PLC，省去了原来与外部 PLC 进行通信设置的麻烦，并且在机器人的示教器上就能实现与 PLC 的相关操作。",
    answer: "true",
    category: "控制系统"
  },
  {
    id: 29,
    type: "true_false",
    question: "库卡机器人有两种可以调节的倍率的方法为程序倍率和手动倍率。",
    answer: "true",
    category: "操作"
  },
  {
    id: 30,
    type: "true_false",
    question: "在库卡机器人中，程序倍率，简称 HOV。",
    answer: "true",
    category: "操作"
  },
  {
    id: 31,
    type: "true_false",
    question: "在库卡机器人中，手动倍率，简称 POV。",
    answer: "true",
    category: "操作"
  },
  {
    id: 32,
    type: "single_choice",
    question: "工具坐标系实际是由（）通过旋转和位移变换得到的。",
    options: {
      A: "关节坐标系",
      B: "机器人坐标系",
      C: "工具坐标系",
      D: "末端执行器坐标系"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 33,
    type: "single_choice",
    question: "用户坐标系实际是对（）通过轴向偏转角度变换得出。",
    options: {
      A: "关节坐标系",
      B: "机器人坐标系",
      C: "工具坐标系",
      D: "基础坐标系"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 34,
    type: "single_choice",
    question: "库卡机器人操作模式中，用于测试运行、编程和示教的是（）。",
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
    id: 35,
    type: "single_choice",
    question: "库卡机器人操作模式中，用于测试运行是（）。",
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
    id: 36,
    type: "single_choice",
    question: "库卡机器人操作模式中，用于不带上级控制系统的工业机器人的是（）。",
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
    id: 37,
    type: "single_choice",
    question: "库卡机器人操作模式中，用于带上级控制系统的工业机器人的是（）。",
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
    id: 38,
    type: "single_choice",
    question: "在库卡机器人中，系列系统变量中，内部自动的为（）。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "AUT EXT"
    },
    answer: "C",
    category: "控制系统"
  },
  {
    id: 39,
    type: "single_choice",
    question: "系列系统变量中，外部自动的为（）。",
    options: {
      A: "T1",
      B: "T2",
      C: "AUT",
      D: "AUT EXT"
    },
    answer: "D",
    category: "控制系统"
  },
  {
    id: 40,
    type: "single_choice",
    question: "承载能力不仅决定于负载的质量，而且还与机器人运行的速度和（）的大小和（）有关。",
    options: {
      A: "加速度.方向",
      B: "加速度.位移",
      C: "质量.方向",
      D: "平均速度.位移"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 41,
    type: "single_choice",
    question: "用何功能保存模块（）。",
    options: {
      A: "程序另存为",
      B: "另存模块为",
      C: "另存工具为",
      D: "系统另存为"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 42,
    type: "single_choice",
    question: "库卡机器人外部设备中，控制柜缩写为（）。",
    options: {
      A: "CCU",
      B: "KPC",
      C: "LWL",
      D: "EDS"
    },
    answer: "B",
    category: "硬件"
  },
  {
    id: 43,
    type: "single_choice",
    question: "库卡机器人外部设备中，电子数据存储卡缩写为（）。",
    options: {
      A: "CCU",
      B: "KPC",
      C: "LWL",
      D: "EDS"
    },
    answer: "D",
    category: "硬件"
  },
  {
    id: 44,
    type: "single_choice",
    question: "库卡机器人外部设备中，光缆缩写为（）。",
    options: {
      A: "CCU",
      B: "KPC",
      C: "LWL",
      D: "EDS"
    },
    answer: "C",
    category: "硬件"
  },
  {
    id: 45,
    type: "single_choice",
    question: "弧焊机器人的末端执行器是（）。",
    options: {
      A: "伺服焊钳",
      B: "搅拌头",
      C: "焊枪",
      D: "激光加工头"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 46,
    type: "single_choice",
    question: "点焊机器人的末端执行器是（）。",
    options: {
      A: "伺服焊钳",
      B: "搅拌头",
      C: "焊枪",
      D: "激光加工头"
    },
    answer: "A",
    category: "末端执行器"
  },
  {
    id: 47,
    type: "single_choice",
    question: "激光焊机器人的末端执行器是（）。",
    options: {
      A: "伺服焊钳",
      B: "搅拌头",
      C: "焊枪",
      D: "激光加工头"
    },
    answer: "D",
    category: "末端执行器"
  },
  {
    id: 48,
    type: "single_choice",
    question: "工业机器人在哪个工业领域应用占比最大（）。",
    options: {
      A: "装配",
      B: "码垛",
      C: "喷涂",
      D: "焊接"
    },
    answer: "D",
    category: "应用领域"
  },
  {
    id: 49,
    type: "single_choice",
    question: "以下哪个不是生产设备中的末端工具？（）",
    options: {
      A: "夹爪/笔工具",
      B: "夹爪工具",
      C: "定位工具",
      D: "夹爪吸盘工具"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 50,
    type: "single_choice",
    question: "正常焊接时，200A以上薄板焊接，CO2的流量为（）。",
    options: {
      A: "5L/min~10L/min",
      B: "5L/min~15L/min",
      C: "10L/min~25L/min",
      D: "15L/min~35L/min"
    },
    answer: "D",
    category: "焊接技术"
  },
  {
    id: 51,
    type: "single_choice",
    question: "焊接用CO2气体的纯度应大于（）。",
    options: {
      A: "99.9%",
      B: "95.5%",
      C: "80%",
      D: "99.5%"
    },
    answer: "A",
    category: "焊接技术"
  },
  {
    id: 52,
    type: "single_choice",
    question: "熔化极氩弧焊的熔滴过渡形式通常采用（）。",
    options: {
      A: "短路过渡",
      B: "粗滴过渡",
      C: "喷射过渡",
      D: "细滴过渡"
    },
    answer: "C",
    category: "焊接技术"
  },
  {
    id: 53,
    type: "single_choice",
    question: "焊接机器人的外围设备不包括（）。",
    options: {
      A: "倒袋机",
      B: "变位机",
      C: "滑移平台",
      D: "快换装置"
    },
    answer: "A",
    category: "外围设备"
  },
  {
    id: 54,
    type: "single_choice",
    question: "以下说法错误的是（）。",
    options: {
      A: "执行焊接作业的四周请勿放置引火性或可燃.易爆物品",
      B: "在焊接作业场所附近请勿使用可燃性气体",
      C: "请在远离焊接电弧或其它高温机器的场所放置气瓶",
      D: "保护气瓶只要放置牢固不需要固定于专用的支架上"
    },
    answer: "D",
    category: "安全"
  },
  {
    id: 55,
    type: "single_choice",
    question: "若配置2轴变位机时，则可以用（）进行变位机坐标系设定。",
    options: {
      A: "直接输入法和三点法",
      B: "直接输入法和五点法",
      C: "三点法.和五点法",
      D: "直接输入法.三点法.和五点法"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 56,
    type: "single_choice",
    question: "下列不属于焊接机器人的优点的是（）。",
    options: {
      A: "稳定",
      B: "不均匀",
      C: "可在有环境下工作",
      D: "可长时间工作"
    },
    answer: "B",
    category: "焊接技术"
  },
  {
    id: 57,
    type: "single_choice",
    question: "库卡运动指令中，点到点运动为（）。",
    options: {
      A: "PTP",
      B: "LIN",
      C: "CIRC",
      D: "SPTP"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 58,
    type: "single_choice",
    question: "库卡运动指令中，直线运动为（）。",
    options: {
      A: "PTP",
      B: "LIN",
      C: "CIRC",
      D: "SPTP"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 59,
    type: "single_choice",
    question: "在库卡机器人示教器中，全局设定中的（）为默认设定即可。",
    options: {
      A: "Prozess Settings",
      B: "Ignition error strategies",
      C: "Weld error strategy",
      D: "以上都是"
    },
    answer: "D",
    category: "操作"
  },
  {
    id: 60,
    type: "single_choice",
    question: "在库卡机器人示教器中，机器人发往焊机输入信号中，开始焊接为（）。",
    options: {
      A: "EO1",
      B: "EO2",
      C: "EO3",
      D: "EO4"
    },
    answer: "A",
    category: "IO通信"
  },
  {
    id: 61,
    type: "single_choice",
    question: "在库卡机器人示教器中，机器人发往焊机输入信号中，机器人准备好为（）。",
    options: {
      A: "EO1",
      B: "EO2",
      C: "EO3",
      D: "EO4"
    },
    answer: "B",
    category: "IO通信"
  },
  {
    id: 62,
    type: "single_choice",
    question: "库卡编程中，将一个布尔值作为参数传递的是（）。",
    options: {
      A: "Par_Type",
      B: "Par_text",
      C: "Par_Int",
      D: "Par_Boo1"
    },
    answer: "D",
    category: "编程"
  },
  {
    id: 63,
    type: "single_choice",
    question: "库卡编程中，使用参数/通配符的类型是（）。",
    options: {
      A: "Par_Type",
      B: "Par_text",
      C: "Par_Int",
      D: "Par_Real"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 64,
    type: "single_choice",
    question: "库卡编程中，将参数的文字或关键字的是（）。",
    options: {
      A: "Par_Type",
      B: "Par_text",
      C: "Par_Int",
      D: "Par_Real"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 65,
    type: "single_choice",
    question: "库卡编程中，将一个整数作为参数传递的是（）。",
    options: {
      A: "Par_Type",
      B: "Par_text",
      C: "Par_Int",
      D: "Par_Real"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 66,
    type: "single_choice",
    question: "库卡编程中，将一个实数值作为参数传递的是（）。",
    options: {
      A: "Par_Type",
      B: "Par_text",
      C: "Par_Int",
      D: "Par_Real"
    },
    answer: "D",
    category: "编程"
  },
  {
    id: 67,
    type: "single_choice",
    question: "在库卡机器人中，下列运算符中说明逻辑“或”的是（）。",
    options: {
      A: "NOT",
      B: "AND",
      C: "OR",
      D: "EXOR"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 68,
    type: "single_choice",
    question: "在库卡机器人中，下列运算符中说明逆转的是（）。",
    options: {
      A: "NOT",
      B: "AND",
      C: "OR",
      D: "EXOR"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 69,
    type: "single_choice",
    question: "位置等级是指机器人经过示教的位置时的接近程度，设定了合适的位置等级时，可使机器人运行出与周围状况和工件相适应的轨迹，其中位置等级（）。",
    options: {
      A: "CNT值越小，运行轨迹越精准",
      B: "CNT值大小，与运行轨迹关系不大",
      C: "CNT值越大，运行轨迹越精准",
      D: "只与运动速度有关"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 70,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时，以（）。",
    options: {
      A: "程序给定的速度运行",
      B: "示教最高速度来限制运行",
      C: "示教最低速度来运行",
      D: "程序报错"
    },
    answer: "B",
    category: "操作"
  },
  {
    id: 71,
    type: "single_choice",
    question: "机器人经常使用的程序可以设置为主程序，每台机器人可以设置（）主程序。",
    options: {
      A: "3个",
      B: "5个",
      C: "1个",
      D: "无限制"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 72,
    type: "single_choice",
    question: "传感器的基本转换电路是将敏感元件产生的易测量小信号进行变换，使传感器的信号输出符合具体工业系统的要求。一般为（）。",
    options: {
      A: "4~20mA.-5~5V",
      B: "0~20mA.0~5V",
      C: "-20mA~20mA.-5~5V",
      D: "-20mA~20mA.0~5V"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 73,
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
    id: 74,
    type: "single_choice",
    question: "132.6维力与力矩传感器主要用于（）。",
    options: {
      A: "精密加工",
      B: "精密测量",
      C: "精密计算",
      D: "精密装配"
    },
    answer: "B",
    category: "传感器"
  },
  {
    id: 75,
    type: "single_choice",
    question: "在工业机器人应用中，（）应用于汽车制造行业。",
    options: {
      A: "22%",
      B: "36%",
      C: "42%",
      D: "78%"
    },
    answer: "C",
    category: "应用领域"
  },
  {
    id: 76,
    type: "single_choice",
    question: "在工业机器人应用中，（）应用于制造行业。",
    options: {
      A: "22%",
      B: "36%",
      C: "42%",
      D: "78%"
    },
    answer: "D",
    category: "应用领域"
  },
  {
    id: 77,
    type: "single_choice",
    question: "在工业机器人应用中，（）应用于非汽车制造行业。",
    options: {
      A: "22%",
      B: "36%",
      C: "42%",
      D: "78%"
    },
    answer: "B",
    category: "应用领域"
  },
  {
    id: 78,
    type: "single_choice",
    question: "焊接机器人分为点焊机器人和（）。",
    options: {
      A: "线焊机器人",
      B: "面焊机器人",
      C: "弧焊机器人",
      D: "非点焊机器人"
    },
    answer: "C",
    category: "焊接技术"
  },
  {
    id: 79,
    type: "single_choice",
    question: "工业机器人在各行业应用中，用于焊接的机器人，我们称为（）。",
    options: {
      A: "焊接机器人",
      B: "喷涂机器人",
      C: "装配机器人",
      D: "码垛机器人"
    },
    answer: "A",
    category: "应用领域"
  },
  {
    id: 80,
    type: "single_choice",
    question: "工业机器人在各行业应用中，用于雕刻的机器人，我们称为（）。",
    options: {
      A: "焊接机器人",
      B: "雕刻机器人",
      C: "装配机器人",
      D: "码垛机器人"
    },
    answer: "B",
    category: "应用领域"
  },
  {
    id: 81,
    type: "single_choice",
    question: "KUKA机器人中的KRC4控制柜进行输入输出模块要进行（）配置。",
    options: {
      A: "① 硬件准备； (2) 软件准备； (3) 硬件连接； (4) 软件配置",
      B: "③④",
      C: "①②③",
      D: "①②③④"
    },
    answer: "D",
    category: "控制系统"
  },
  {
    id: 82,
    type: "single_choice",
    question: "库卡机器人在进行输入输出模块硬件准备时EK1100是进行（）配置。",
    options: {
      A: "控制器",
      B: "耦合模块",
      C: "输入模块",
      D: "输出模块"
    },
    answer: "B",
    category: "硬件"
  },
  {
    id: 83,
    type: "single_choice",
    question: "关于机器人工作空间设置，正确的是（）。",
    options: {
      A: "机器人一般出厂设置的工作空间不能修改",
      B: "设置工作空间后要打开空间监控才能生效",
      C: "工作空间区域不能自定义",
      D: "只能设置轴工作空间，笛卡尔空间不允许设置"
    },
    answer: "B",
    category: "工作空间"
  },
  {
    id: 84,
    type: "single_choice",
    question: "关于机器人IO信号错误的是（）。",
    options: {
      A: "数字IO信号一般从O开始设置",
      B: "数字IO信号一般从1开始设置",
      C: "数字信号0通常代表停止，1代表信号启动",
      D: "I/O信号变量是布尔量"
    },
    answer: "B",
    category: "IO通信"
  },
  {
    id: 85,
    type: "single_choice",
    question: "机器人的轴工作空间设置（）。",
    options: {
      A: "当轴位于工作空间内，定义信号可以被赋值",
      B: "当轴位于工作空间外，定义信号可以被赋值",
      C: "用户工作空间设置可以作为软限位使用",
      D: "以上三种情况都可以选择设置"
    },
    answer: "C",
    category: "工作空间"
  },
  {
    id: 86,
    type: "single_choice",
    question: "工业机器人通信模块，正确的是（）。",
    options: {
      A: "出厂就配好了，不能扩展，改装",
      B: "可以根据需求随意增加",
      C: "可以根据需要选择符合机器人系统要求的模块进行扩展",
      D: "需要厂商定制"
    },
    answer: "C",
    category: "通信技术"
  },
  {
    id: 87,
    type: "single_choice",
    question: "工业机器人的笛卡尔点或者轴进入设置的工作空间后（）。",
    options: {
      A: "只要设置了安全工作空间对于设备和人员都是安全的",
      B: "如果有多台机器人进入同一个工作空间，可以通过PLC等外部设备来设置优先级来避免碰撞",
      C: "如果有多台机器人进入同一个工作空间，只能采用本身系统来设置优先级避免碰撞",
      D: "机器人只能在工作空间内部运行"
    },
    answer: "B",
    category: "工作空间"
  },
  {
    id: 88,
    type: "single_choice",
    question: "工业机器人系统集成设计需要考虑哪些方面（）。",
    options: {
      A: "布局形式与人机性能.系统总控与通信方式",
      B: "工业机器人选型与外部轴配置",
      C: "安全保护与环保.协同单元的配置.经济性",
      D: "以上皆错"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 89,
    type: "single_choice",
    question: "按照计算机所传输的信息种类，不属于计算机的总线的是（）。",
    options: {
      A: "数据总线",
      B: "地址总线",
      C: "内部总线",
      D: "控制总线"
    },
    answer: "C",
    category: "计算机基础"
  },
  {
    id: 90,
    type: "single_choice",
    question: "为什么需要进行零点标定（标准）（）。",
    options: {
      A: "为设定机器人的重复精度",
      B: "为了也可进行轴坐标式（与轴相关的）运行",
      C: "为设定机器人的绝对精确度",
      D: "为了以一个固定参考点为基准设定机器人的每根轴"
    },
    answer: "D",
    category: "校准"
  },
  {
    id: 91,
    type: "single_choice",
    question: "什么是带偏量的负载零点标定（）。",
    options: {
      A: "首先将机器人不带工具进行“首次零点标定”，然后带安装好的工具进行带偏量的负载零点标定。",
      B: "仅将机器人带工具（偏量）进行零点标定，系统由此算出首次零点标定。",
      C: "负载零点标定仅可通过库卡千分表进行",
      D: "负载零点标定时，仅须带偏量标定手轴的零点"
    },
    answer: "A",
    category: "校准"
  },
  {
    id: 92,
    type: "single_choice",
    question: "工具测量的意义是什么（）。",
    options: {
      A: "工具测量后，可进行沿工具作业方向的直线手动移动.机器人法兰的改向和使工具头部（TCP）沿轨迹运动。",
      B: "通过工具测量可避开Alpha5问题",
      C: "工具测量后，可进行沿工具作业方向的直线手动移动.围绕工具头部（TCP）的改向和使工具头部（TCP）沿轨迹运动",
      D: "仅使用一个工具时，测量无意义"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 93,
    type: "single_choice",
    question: "进行工具测量有何意义，正确的是（）。",
    options: {
      A: "不可围绕工具TCP点改变姿态",
      B: "可以沿工具作业方向移动",
      C: "不能沿着TCP上的轨迹保持已编程的运行速度",
      D: "定义的姿态不能沿着轨迹"
    },
    answer: "B",
    category: "校准"
  },
  {
    id: 94,
    type: "single_choice",
    question: "示教器上设置亮度，时间等一般从哪个界面进行设置（）。",
    options: {
      A: "输入输出",
      B: "手动操纵",
      C: "程序编辑器",
      D: "控制面板"
    },
    answer: "D",
    category: "操作"
  },
  {
    id: 95,
    type: "single_choice",
    question: "查看机器人的事件日志有什么作用（）。",
    options: {
      A: "遇到机器人系统报错时，单击状态栏进入到事件日志界面，分析报错记录可以很方便地找到解决方法",
      B: "遇到机器人系统报错时，单击状态栏进入到事件日志界面，清楚故障信息可以直接排除故障",
      C: "查看机器人系统设置",
      D: "查看机器人状态"
    },
    answer: "A",
    category: "操作"
  },
  {
    id: 96,
    type: "single_choice",
    question: "工具坐标系的设置不能在下列哪个模式中进行（）。",
    options: {
      A: "操作模式",
      B: "编辑模式",
      C: "管理模式",
      D: "示教模式"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 97,
    type: "single_choice",
    question: "当机器人机械原点丢失或发生偏移需重新进行（）。",
    options: {
      A: "机械复位",
      B: "参数设置",
      C: "原点校准",
      D: "以上说法都不正确"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 98,
    type: "single_choice",
    question: "机器人的零点标定方式，正确的是（）。",
    options: {
      A: "标准零点标定",
      B: "零点标定，带负载校正",
      C: "AB都对",
      D: "以上都是错的"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 99,
    type: "single_choice",
    question: "设置负载参数时，承载能力不仅决定于负载的质量，而且还与机器人运行的速度和（）的大小和（）有关。",
    options: {
      A: "加速度.方向",
      B: "加速度.位移",
      C: "质量.方向",
      D: "平均速度.位移"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 100,
    type: "single_choice",
    question: "工业机器人示教器的主要工作部分是（）。",
    options: {
      A: "操作键和显示屏",
      B: "操作杆和显示屏",
      C: "传感器和显示屏",
      D: "开关"
    },
    answer: "A",
    category: "操作"
  },
  {
    id: 101,
    type: "single_choice",
    question: "以下叙述正确的是（）。",
    options: {
      A: "若工业机器人不具备信息反馈特征，则为闭环控制系统；若具备信息反馈特征，则为开环控制系统",
      B: "控制系统包括包含了高层次的外围接口与低层次的工厂接口",
      C: "多机器人不能通过一个控制器实时编程和协调同步",
      D: "被动柔顺结构的响应远快于利用计算机控制算法实现的主动重定位"
    },
    answer: "D",
    category: "控制系统"
  },
  {
    id: 102,
    type: "single_choice",
    question: "为何要进行带负载的偏量学习（）。",
    options: {
      A: "提高精确度",
      B: "称出负载重量",
      C: "提高机器人运行速度",
      D: "测出负责中心"
    },
    answer: "A",
    category: "校准"
  },
  {
    id: 103,
    type: "single_choice",
    question: "什么下列情况下必须再次进行原点位置校准？（）。",
    options: {
      A: "机器人碰撞工件，原点偏移时",
      B: "机器人重新启动时",
      C: "每次机器人正常启动系统时",
      D: "编写程序前"
    },
    answer: "A",
    category: "校准"
  },
  {
    id: 104,
    type: "single_choice",
    question: "KKA3示教器中，下列选项中可以设置IP地址的为（）。",
    options: {
      A: "系统启动",
      B: "轴参数",
      C: "应用选择",
      D: "Mes监控"
    },
    answer: "B",
    category: "操作"
  },
  {
    id: 105,
    type: "single_choice",
    question: "库卡机器人解释器R未选定程序是什么颜色（）。",
    options: {
      A: "灰色",
      B: "黄色",
      C: "绿色",
      D: "红色"
    },
    answer: "A",
    category: "操作"
  },
  {
    id: 106,
    type: "single_choice",
    question: "库卡机器人解释器R语句指针位于所选程序的首行是什么颜色（）。",
    options: {
      A: "灰色",
      B: "黄色",
      C: "绿色",
      D: "红色"
    },
    answer: "B",
    category: "操作"
  },
  {
    id: 107,
    type: "single_choice",
    question: "库卡机器人解释器R已经选择程序，而且程序正在运行是什么颜色（）。",
    options: {
      A: "灰色",
      B: "黄色",
      C: "绿色",
      D: "红色"
    },
    answer: "C",
    category: "操作"
  },
  {
    id: 108,
    type: "single_choice",
    question: "（）机器人不带负荷，校正过程将存储用于每根轴的绝对检测。",
    options: {
      A: "首次校正",
      B: "偏置学习",
      C: "负荷校正",
      D: "绝对校正"
    },
    answer: "A",
    category: "校准"
  },
  {
    id: 109,
    type: "single_choice",
    question: "用于首次校正的检测偏移量将针对这个负载得出并且存储的行为称为（）。",
    options: {
      A: "工具学习",
      B: "偏置学习",
      C: "自我学习",
      D: "A和B"
    },
    answer: "D",
    category: "校准"
  },
  {
    id: 110,
    type: "single_choice",
    question: "机器人（），也就是机器人能到达的最大距离。",
    options: {
      A: "臂展",
      B: "载重",
      C: "高度",
      D: "速度"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 111,
    type: "single_choice",
    question: "如果机器人轴未经零点标定，则会造成以下哪几种情况（）",
    options: {
      A: "① 编程无法进行； (2) 软件限位开关关闭； (3) 仍可进行笛卡尔式手动运行； (4) 机器人本体失衡倾倒",
      B: "②③",
      C: "①②",
      D: "③④"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 112,
    type: "single_choice",
    question: "测量工业机器人旋转轴旋转角度的传感器为（）。",
    options: {
      A: "角度传感器",
      B: "压力传感器",
      C: "振动传感器",
      D: "射线辐射传感器"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 113,
    type: "single_choice",
    question: "具有六自由度的机器人大多都是（）机器人。",
    options: {
      A: "并联",
      B: "直线",
      C: "关节",
      D: "坐标"
    },
    answer: "C",
    category: "机器人类型"
  },
  {
    id: 114,
    type: "single_choice",
    question: "（）型机器人主要由回转和旋转自由度构成，可以看成是仿人手臂设计。",
    options: {
      A: "关节",
      B: "直线",
      C: "并联",
      D: "圆柱坐标"
    },
    answer: "A",
    category: "机器人类型"
  },
  {
    id: 115,
    type: "single_choice",
    question: "（）是允许机器人本体与零件之间发生相对运动的机构。",
    options: {
      A: "构件",
      B: "关节",
      C: "机器",
      D: "零件"
    },
    answer: "B",
    category: "机械结构"
  },
  {
    id: 116,
    type: "single_choice",
    question: "对于转动关节而言，关节变量是D-H参数中的（）。",
    options: {
      A: "关节角",
      B: "杆件长度",
      C: "横距",
      D: "扭转角"
    },
    answer: "A",
    category: "运动学"
  },
  {
    id: 117,
    type: "single_choice",
    question: "对于移动（平动）关节而言，关节变量是D-H参数中的（）。",
    options: {
      A: "关节角",
      B: "杆件长度",
      C: "横距",
      D: "扭转角"
    },
    answer: "C",
    category: "运动学"
  },
  {
    id: 118,
    type: "single_choice",
    question: "（）是机器人末端参考点实际到达的位置与所需要到达的理想位置之间的差距。",
    options: {
      A: "定位精度",
      B: "距离差值",
      C: "运动实差",
      D: "重复差值"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 119,
    type: "single_choice",
    question: "（）是工业机器人在同以条件下用同一方法操作时重复n次所测得位置与姿态的一致程度。",
    options: {
      A: "重复定位精度",
      B: "定位精度",
      C: "定位差值",
      D: "重复定位差值"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 120,
    type: "single_choice",
    question: "如果机器人在进行轨迹控制时一直以工业机器人理论上建模的杆长进行规划，（）的变化会导致工业机器人在定位精度和重复精度上产生较大误差。",
    options: {
      A: "理论杆长",
      B: "建模杆长",
      C: "实际杆长",
      D: "规划杆长"
    },
    answer: "C",
    category: "运动学"
  },
  {
    id: 121,
    type: "single_choice",
    question: "通过对工业机器人控制系统中（）参数的定时检测和修正，可使工业机器人控制轨迹得到补偿，可提高产品一致性要求和避免事故发生。",
    options: {
      A: "杆长",
      B: "载重",
      C: "高度",
      D: "臂展"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 122,
    type: "single_choice",
    question: "原点位置校准是将机器人机械原点位置与电机（）进行对照的操作。",
    options: {
      A: "增量编码器的位置",
      B: "增量编码器的零点",
      C: "绝对编码器的绝对值",
      D: "绝对编码器的零点"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 123,
    type: "single_choice",
    question: "工业机器人的额定负载是指在规定范围内（）所能承受的最大负载允许值（）。",
    options: {
      A: "手腕机械接口处",
      B: "手臂",
      C: "末端执行器",
      D: "机座"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 124,
    type: "single_choice",
    question: "机器人手部的位姿是由哪两部分变量构成的（）、（）。",
    options: {
      A: "位置与速度",
      B: "姿态与位置",
      C: "位置与运行状态",
      D: "姿态与速度"
    },
    answer: "B",
    category: "运动学"
  },
  {
    id: 125,
    type: "single_choice",
    question: "按下机器人控制柜门上的急停按钮与示教盒上的急停按钮才能达到的效果是（）。",
    options: {
      A: "关闭伺服驱动单元的电源",
      B: "机器人立即停止动作",
      C: "系统出现急停报警",
      D: "关闭系统电源"
    },
    answer: "B",
    category: "安全"
  },
  {
    id: 126,
    type: "single_choice",
    question: "工业机器人的技术参数不包括哪些？（）",
    options: {
      A: "自由度",
      B: "定位精度.工作范围",
      C: "速度和加速度.承载能力",
      D: "颜色及工具"
    },
    answer: "D",
    category: "性能参数"
  },
  {
    id: 127,
    type: "single_choice",
    question: "工业机器人控制器的人机界面不包含（）。",
    options: {
      A: "传感器",
      B: "计算机键盘",
      C: "鼠标",
      D: "显示器"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 128,
    type: "single_choice",
    question: "（）是指机器人重复定位其手部于同一目标位置的能力，可以用标准偏差这个统计量来表示，它是衡量一列误差值的密集度。",
    options: {
      A: "定位精度",
      B: "重复定位精度",
      C: "密集度",
      D: "承载能力"
    },
    answer: "B",
    category: "性能参数"
  },
  {
    id: 129,
    type: "single_choice",
    question: "工具坐标系实际是由（）通过旋转和位移变换得到的。",
    options: {
      A: "关节坐标系",
      B: "机器人坐标系",
      C: "工具坐标系",
      D: "末端执行器坐标系"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 130,
    type: "single_choice",
    question: "（）指总工作空间边界面上的点所对应的机器人的位置和姿态。",
    options: {
      A: "末端执行器",
      B: "TCP",
      C: "工作空间",
      D: "奇异形位"
    },
    answer: "D",
    category: "工作空间"
  },
  {
    id: 131,
    type: "single_choice",
    question: "末端执行器以任意姿态达到的点所构成的工作空间称为（）。",
    options: {
      A: "灵活工作空间",
      B: "次工作空间",
      C: "工作空间",
      D: "奇异形位"
    },
    answer: "A",
    category: "工作空间"
  },
  {
    id: 132,
    type: "single_choice",
    question: "工作空间用字母（）表示。",
    options: {
      A: "W(p)",
      B: "Wp(p)",
      C: "Ws(p)",
      D: "Wp(s)"
    },
    answer: "A",
    category: "工作空间"
  },
  {
    id: 133,
    type: "single_choice",
    question: "灵活工作空间用字母（）表示。",
    options: {
      A: "W(p)",
      B: "Wp(p)",
      C: "Ws(p)",
      D: "Wp(s)"
    },
    answer: "B",
    category: "工作空间"
  },
  {
    id: 134,
    type: "single_choice",
    question: "次工作空间用字母（）表示。",
    options: {
      A: "W(p)",
      B: "Wp(p)",
      C: "Ws(p)",
      D: "Wp(s)"
    },
    answer: "C",
    category: "工作空间"
  },
  {
    id: 135,
    type: "single_choice",
    question: "工业机器人的手部也称为（），是连接在J6轴的末端法兰上的工具。",
    options: {
      A: "爪部",
      B: "手抓",
      C: "工具",
      D: "末端执行器"
    },
    answer: "D",
    category: "末端执行器"
  },
  {
    id: 136,
    type: "single_choice",
    question: "工业机器人的手部也称末端执行器，由（）和手指三部分组成，是一个独立的部件。",
    options: {
      A: "驱动机构、执行机构",
      B: "传动机构、执行机构",
      C: "驱动机构、传动机构",
      D: "传动机构、动力机构"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 137,
    type: "single_choice",
    question: "机械式夹持器按照夹取东西的方式不同，分为（）两种。",
    options: {
      A: "内夹式夹持器和外撑式夹持器",
      B: "内撑式夹持器和外夹式夹持器",
      C: "内夹式夹持器和外夹式夹持器",
      D: "内撑式夹持器和外撑式夹持器"
    },
    answer: "B",
    category: "末端执行器"
  },
  {
    id: 138,
    type: "single_choice",
    question: "常见机器人手部分为（）三类。",
    options: {
      A: "夹持类、吸附类、专用工具",
      B: "夹持类、吸附类、通用工具",
      C: "夹持类、吸附类、智能工具",
      D: "夹持类、吸附类、特殊工具"
    },
    answer: "A",
    category: "末端执行器"
  },
  {
    id: 139,
    type: "single_choice",
    question: "在库卡机器人中，下列基于RS485的现场总线中网关为EK1100+EL6731的是（）。",
    options: {
      A: "ProfiBus主站",
      B: "Profibu从站",
      C: "DeviceNet主站",
      D: "DeviceNet从站"
    },
    answer: "A",
    category: "总线技术"
  },
  {
    id: 140,
    type: "single_choice",
    question: "在库卡机器人中，下列基于RS485的现场总线中网关为EK1100+EL6732-0010的是（）。",
    options: {
      A: "ProfiBus主站",
      B: "Profibu从站",
      C: "DeviceNet主站",
      D: "DeviceNet从站"
    },
    answer: "B",
    category: "总线技术"
  },
  {
    id: 141,
    type: "single_choice",
    question: "在库卡机器人中，下列基于RS485的现场总线中网关为EK1100+EL6752的是（）。",
    options: {
      A: "ProfiBus主站",
      B: "Profibu从站",
      C: "DeviceNet主站",
      D: "DeviceNet从站"
    },
    answer: "C",
    category: "总线技术"
  },
  {
    id: 142,
    type: "single_choice",
    question: "在库卡机器人中，下列基于RS485的现场总线中网关为EK1100+EL6752-0010的是（）。",
    options: {
      A: "ProfiBus主站",
      B: "Profibu从站",
      C: "DeviceNet主站",
      D: "DeviceNet从站"
    },
    answer: "D",
    category: "总线技术"
  },
  {
    id: 143,
    type: "single_choice",
    question: "KRC4具有（）模拟输入端。",
    options: {
      A: "4个",
      B: "8个",
      C: "16个",
      D: "32个"
    },
    answer: "D",
    category: "硬件"
  },
  {
    id: 144,
    type: "single_choice",
    question: "在库卡机器人中，每隔（）一次循环读取一个模拟输入端。",
    options: {
      A: "1mm",
      B: "5mm",
      C: "10mm",
      D: "12mm"
    },
    answer: "D",
    category: "硬件"
  },
  {
    id: 145,
    type: "single_choice",
    question: "在库卡机器人中，数字信号32位输出，占用2位地址的为（）。",
    options: {
      A: "AM600-0016XXX",
      B: "AM600-0016XXX",
      C: "AM600-0016END",
      D: "AM600-0032END"
    },
    answer: "D",
    category: "硬件"
  },
  {
    id: 146,
    type: "single_choice",
    question: "涂胶机器人根据（）值得大小控制定量机输出胶量。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "布尔量",
      D: "开关量"
    },
    answer: "A",
    category: "应用"
  },
  {
    id: 147,
    type: "single_choice",
    question: "工业机器人的I/O板的模拟量输出信号的范围是（）。",
    options: {
      A: "0~10V",
      B: "0~24V",
      C: "0~20V",
      D: "12~24V"
    },
    answer: "A",
    category: "IO通信"
  },
  {
    id: 148,
    type: "single_choice",
    question: "机器人在进行编程时“ANOUT表示（）。",
    options: {
      A: "数字量输出",
      B: "数字量输入",
      C: "模拟量输出",
      D: "模拟量输入"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 149,
    type: "single_choice",
    question: "机器人在进行编程时“ANIN表示（）。",
    options: {
      A: "数字量输出",
      B: "数字量输入",
      C: "模拟量输出",
      D: "模拟量输入"
    },
    answer: "D",
    category: "编程"
  },
  {
    id: 150,
    type: "single_choice",
    question: "工业机器人模拟量输入端电压范围是（）。",
    options: {
      A: "0~10V",
      B: "0~24V",
      C: "-5~5V",
      D: "-14~14V"
    },
    answer: "C",
    category: "IO通信"
  },
  {
    id: 151,
    type: "single_choice",
    question: "工业机器人模拟量输出端电压范围是（）。",
    options: {
      A: "0~10V",
      B: "0~24V",
      C: "-5~5V",
      D: "-14~14V"
    },
    answer: "D",
    category: "IO通信"
  },
  {
    id: 152,
    type: "single_choice",
    question: "在时间上或数值上都是连续的物理量称为（）。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "布尔量",
      D: "开关量"
    },
    answer: "A",
    category: "基础知识"
  },
  {
    id: 153,
    type: "single_choice",
    question: "（）通常是对压力.温度.流量.物位等利用相应的传感器进行测量得来。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "布尔量",
      D: "开关量"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 154,
    type: "single_choice",
    question: "模拟信号输入，占用4位地址的是（）。",
    options: {
      A: "AM600-0016XXX",
      B: "AM600-4AD",
      C: "AM600-4DA",
      D: "AM600-0032END"
    },
    answer: "B",
    category: "硬件"
  },
  {
    id: 155,
    type: "single_choice",
    question: "模拟信号输出，占用4位地址的是（）。",
    options: {
      A: "AM600-0016XXX",
      B: "AM600-4AD",
      C: "AM600-4DA",
      D: "AM600-0032END"
    },
    answer: "C",
    category: "硬件"
  },
  {
    id: 156,
    type: "single_choice",
    question: "在工业机器人运行工业生产线中，（）是整个工控系统的中枢。",
    options: {
      A: "HMI",
      B: "PLC",
      C: "CCD",
      D: "PC"
    },
    answer: "B",
    category: "控制系统"
  },
  {
    id: 157,
    type: "single_choice",
    question: "工业生产过程对温度.压力.速度等模拟量进行的（）控制。",
    options: {
      A: "开环",
      B: "闭环",
      C: "半闭环",
      D: "半开环"
    },
    answer: "B",
    category: "控制系统"
  },
  {
    id: 158,
    type: "single_choice",
    question: "（）是一种专门为在工业环境下应用而设计的数字运算操作的电子装置。",
    options: {
      A: "HMI",
      B: "PLC",
      C: "CCD",
      D: "PC"
    },
    answer: "B",
    category: "控制系统"
  },
  {
    id: 159,
    type: "single_choice",
    question: "主要由微处理器和存储器组成的（）。",
    options: {
      A: "通信模块",
      B: "信号模块",
      C: "信号板",
      D: "CPU模块"
    },
    answer: "D",
    category: "硬件"
  },
  {
    id: 160,
    type: "single_choice",
    question: "输入模块和输出模块的总称是（）。",
    options: {
      A: "通信模块",
      B: "信号模块",
      C: "信号板",
      D: "CPU模块"
    },
    answer: "B",
    category: "硬件"
  },
  {
    id: 161,
    type: "single_choice",
    question: "工业机器人与PLC基于工业以太网进行通信的协议是（）。",
    options: {
      A: "Profibus",
      B: "ProfifNET",
      C: "Modbus",
      D: "USB"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 162,
    type: "single_choice",
    question: "工业机器人与PLC基于485串行总线进行通信的协议是（）。",
    options: {
      A: "Profibus",
      B: "ProfifNET",
      C: "Modbus",
      D: "USB"
    },
    answer: "A",
    category: "通信技术"
  },
  {
    id: 163,
    type: "single_choice",
    question: "在库卡机器人中，耦合器E-bus中，用于E-bus接口的为（）。",
    options: {
      A: "EK1100",
      B: "EK1000",
      C: "EK1101",
      D: "EK1501"
    },
    answer: "A",
    category: "硬件"
  },
  {
    id: 164,
    type: "single_choice",
    question: "在库卡机器人中，耦合器E-bus中，用于可直接与交换机连接的E-bus接口的为（）。",
    options: {
      A: "EK1100",
      B: "EK1000",
      C: "EK1101",
      D: "EK1501"
    },
    answer: "B",
    category: "硬件"
  },
  {
    id: 165,
    type: "single_choice",
    question: "在库卡机器人中，耦合器E-bus中，用于带ID拨码开关功能的EtherCAT耦合器的为（）。",
    options: {
      A: "EK1100",
      B: "EK1000",
      C: "EK1101",
      D: "EK1501"
    },
    answer: "C",
    category: "硬件"
  },
  {
    id: 166,
    type: "single_choice",
    question: "在库卡机器人中，以太网通讯中，需要OPC Server软件的为（）。",
    options: {
      A: "Modbus TCP",
      B: "OPC DA",
      C: "OPC UA",
      D: "PC SDK"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 167,
    type: "single_choice",
    question: "在（）下运行整个程序，可以通过测试程序运行过程是否达到任务要求，及时修改防止自动运行出现碰撞等问题。",
    options: {
      A: "手动模式",
      B: "自动模式",
      C: "安全模式",
      D: "运行模式"
    },
    answer: "A",
    category: "操作"
  },
  {
    id: 168,
    type: "single_choice",
    question: "在库卡机器人中，（）用于设置关联中断INTR变量的触发中断的条件。",
    options: {
      A: "INTRALLOW",
      B: "INTRCOND",
      C: "INTRDENY",
      D: "INTRENA"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 169,
    type: "single_choice",
    question: "在库卡机器人中，（）用于禁用特殊中断的触发。",
    options: {
      A: "INTRALLOW",
      B: "INTRCOND",
      C: "INTRDENY",
      D: "INTRENA"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 170,
    type: "single_choice",
    question: "在库卡机器人中，中断只有从对（）进行声明的层面起才能被识别。",
    options: {
      A: "GLOBAL",
      B: "WITH BRAKEFIFF",
      C: "BOOL",
      D: "中断子程序"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 171,
    type: "single_choice",
    question: "在库卡机器人中，中断中的制动机器人BRAKE，应用在在高速时柔和停止的是（）。",
    options: {
      A: "BRAKE",
      B: "BRAKEF",
      C: "BRAKEFF",
      D: "BRAKEFFF"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 172,
    type: "single_choice",
    question: "在库卡机器人中，中断中的制动机器人BRAKE，应用在低速时极快停止的是（）。",
    options: {
      A: "BRAKE",
      B: "BRAKEF",
      C: "BRAKEFF",
      D: "BRAKEFFF"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 173,
    type: "single_choice",
    question: "（）就已经示教的程序的某一范围的动作语句，使示教位置进行平行位移变换到别的位置。",
    options: {
      A: "程序位移",
      B: "镜像位移",
      C: "角度输入位移",
      D: "平面位移"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 174,
    type: "single_choice",
    question: "（）就已经示教的程序的某一范围的动作语句，使示教位置以面对称的方式进行对称位移变换到别的位置。",
    options: {
      A: "程序位移",
      B: "镜像位移",
      C: "角度输入位移",
      D: "平面位移"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 175,
    type: "single_choice",
    question: "在进行编写机器人程序过程时出现的机器人运动学涉及旋转移动坐标的变换是（）。",
    options: {
      A: "齐次变换",
      B: "复合变换",
      C: "平移变换",
      D: "旋转变换"
    },
    answer: "C",
    category: "运动学"
  },
  {
    id: 176,
    type: "single_choice",
    question: "在进行编写机器人程序过程时出现的机器人运动学涉及水平移动坐标的变换是（）。",
    options: {
      A: "齐次变换",
      B: "复合变换",
      C: "平移变换",
      D: "旋转变换"
    },
    answer: "D",
    category: "运动学"
  },
  {
    id: 177,
    type: "single_choice",
    question: "在库卡机器人中，下列触发预读停止的指令和变量中，当前机器人轴坐标系位置为（）。",
    options: {
      A: "$AXIS_ACT",
      B: "$AXIS_BACK",
      C: "$AXIS_FOR",
      D: "$AXIS_INT"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 178,
    type: "single_choice",
    question: "在库卡机器人中，下列触发预读停止的指令和变量中，机器人运动块起始轴坐标系位置为（）。",
    options: {
      A: "$AXIS_ACT",
      B: "$AXIS_BACK",
      C: "$AXIS_FOR",
      D: "$AXIS_INT"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 179,
    type: "single_choice",
    question: "（）处理功能是指多个程序被并列执行的功能。",
    options: {
      A: "多任务",
      B: "单任务",
      C: "双任务",
      D: "单程序"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 180,
    type: "single_choice",
    question: "在库卡机器人中，下列触发预读停止的指令和变量中，机器人运动块目标轴坐标系位置为（）。",
    options: {
      A: "$AXIS_ACT",
      B: "$AXIS_BACK",
      C: "$AXIS_FOR",
      D: "$AXIS_INT"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 181,
    type: "single_choice",
    question: "工业机器人的笛卡尔点或者轴进入设置的工作空间后（）。",
    options: {
      A: "只要设置了安全工作空间对于设备和人员都是安全的",
      B: "如果有多台机器人进入同一个工作空间，可以通过PLC等外部设备来设置优先级来避免碰撞",
      C: "如果有多台机器人进入同一个工作空间，只能采用本身系统来设置优先级避免碰撞",
      D: "机器人只能在工作空间内部运行"
    },
    answer: "B",
    category: "工作空间"
  },
  {
    id: 182,
    type: "single_choice",
    question: "工业机器人系统集成设计需要考虑哪些方面（）。",
    options: {
      A: "布局形式与人机性能.系统总控与通信方式",
      B: "工业机器人选型与外部轴配置",
      C: "安全保护与环保.协同单元的配置.经济性",
      D: "以上皆错"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 183,
    type: "single_choice",
    question: "按照计算机所传输的信息种类，不属于计算机的总线的是（）。",
    options: {
      A: "数据总线",
      B: "地址总线",
      C: "内部总线",
      D: "控制总线"
    },
    answer: "C",
    category: "计算机基础"
  },
  {
    id: 184,
    type: "single_choice",
    question: "为什么需要进行零点标定（标准）（）。",
    options: {
      A: "为设定机器人的重复精度",
      B: "为了也可进行轴坐标式（与轴相关的）运行",
      C: "为设定机器人的绝对精确度",
      D: "为了以一个固定参考点为基准设定机器人的每根轴"
    },
    answer: "D",
    category: "校准"
  },
  {
    id: 185,
    type: "single_choice",
    question: "什么是带偏量的负载零点标定（）。",
    options: {
      A: "首先将机器人不带工具进行“首次零点标定”，然后带安装好的工具进行带偏量的负载零点标定。",
      B: "仅将机器人带工具（偏量）进行零点标定，系统由此算出首次零点标定。",
      C: "负载零点标定仅可通过库卡千分表进行",
      D: "负载零点标定时，仅须带偏量标定手轴的零点"
    },
    answer: "A",
    category: "校准"
  },
  {
    id: 186,
    type: "single_choice",
    question: "工具测量的意义是什么（）。",
    options: {
      A: "工具测量后，可进行沿工具作业方向的直线手动移动.机器人法兰的改向和使工具头部（TCP）沿轨迹运动。",
      B: "通过工具测量可避开Alpha5问题",
      C: "工具测量后，可进行沿工具作业方向的直线手动移动.围绕工具头部（TCP）的改向和使工具头部（TCP）沿轨迹运动",
      D: "仅使用一个工具时，测量无意义"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 187,
    type: "single_choice",
    question: "进行工具测量有何意义，正确的是（）。",
    options: {
      A: "不可围绕工具TCP点改变姿态",
      B: "可以沿工具作业方向移动",
      C: "不能沿着TCP上的轨迹保持已编程的运行速度",
      D: "定义的姿态不能沿着轨迹"
    },
    answer: "B",
    category: "校准"
  },
  {
    id: 188,
    type: "single_choice",
    question: "示教器上设置亮度，时间等一般从哪个界面进行设置（）。",
    options: {
      A: "输入输出",
      B: "手动操纵",
      C: "程序编辑器",
      D: "控制面板"
    },
    answer: "D",
    category: "操作"
  },
  {
    id: 189,
    type: "single_choice",
    question: "查看机器人的事件日志有什么作用（）。",
    options: {
      A: "遇到机器人系统报错时，单击状态栏进入到事件日志界面，分析报错记录可以很方便地找到解决方法",
      B: "遇到机器人系统报错时，单击状态栏进入到事件日志界面，清楚故障信息可以直接排除故障",
      C: "查看机器人系统设置",
      D: "查看机器人状态"
    },
    answer: "A",
    category: "操作"
  },
  {
    id: 190,
    type: "single_choice",
    question: "工具坐标系的设置不能在下列哪个模式中进行（）。",
    options: {
      A: "操作模式",
      B: "编辑模式",
      C: "管理模式",
      D: "示教模式"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 191,
    type: "single_choice",
    question: "当机器人机械原点丢失或发生偏移需重新进行（）。",
    options: {
      A: "机械复位",
      B: "参数设置",
      C: "原点校准",
      D: "以上说法都不正确"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 192,
    type: "single_choice",
    question: "机器人的零点标定方式，正确的是（）。",
    options: {
      A: "标准零点标定",
      B: "零点标定，带负载校正",
      C: "AB都对",
      D: "以上都是错的"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 193,
    type: "single_choice",
    question: "设置负载参数时，承载能力不仅决定于负载的质量，而且还与机器人运行的速度和（）的大小和（）有关。",
    options: {
      A: "加速度.方向",
      B: "加速度.位移",
      C: "质量.方向",
      D: "平均速度.位移"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 194,
    type: "single_choice",
    question: "工业机器人示教器的主要工作部分是（）。",
    options: {
      A: "操作键和显示屏",
      B: "操作杆和显示屏",
      C: "传感器和显示屏",
      D: "开关"
    },
    answer: "A",
    category: "操作"
  },
  {
    id: 195,
    type: "single_choice",
    question: "以下叙述正确的是（）。",
    options: {
      A: "若工业机器人不具备信息反馈特征，则为闭环控制系统；若具备信息反馈特征，则为开环控制系统",
      B: "控制系统包括包含了高层次的外围接口与低层次的工厂接口",
      C: "多机器人不能通过一个控制器实时编程和协调同步",
      D: "被动柔顺结构的响应远快于利用计算机控制算法实现的主动重定位"
    },
    answer: "D",
    category: "控制系统"
  },
  {
    id: 196,
    type: "single_choice",
    question: "为何要进行带负载的偏量学习（）。",
    options: {
      A: "提高精确度",
      B: "称出负载重量",
      C: "提高机器人运行速度",
      D: "测出负责中心"
    },
    answer: "A",
    category: "校准"
  },
  {
    id: 197,
    type: "single_choice",
    question: "什么下列情况下必须再次进行原点位置校准？（）。",
    options: {
      A: "机器人碰撞工件，原点偏移时",
      B: "机器人重新启动时",
      C: "每次机器人正常启动系统时",
      D: "编写程序前"
    },
    answer: "A",
    category: "校准"
  },
  {
    id: 198,
    type: "single_choice",
    question: "KKA3示教器中，下列选项中可以设置IP地址的为（）。",
    options: {
      A: "系统启动",
      B: "轴参数",
      C: "应用选择",
      D: "Mes监控"
    },
    answer: "B",
    category: "操作"
  },
  {
    id: 199,
    type: "single_choice",
    question: "库卡机器人解释器R未选定程序是什么颜色（）。",
    options: {
      A: "灰色",
      B: "黄色",
      C: "绿色",
      D: "红色"
    },
    answer: "A",
    category: "操作"
  },
  {
    id: 200,
    type: "single_choice",
    question: "库卡机器人解释器R语句指针位于所选程序的首行是什么颜色（）。",
    options: {
      A: "灰色",
      B: "黄色",
      C: "绿色",
      D: "红色"
    },
    answer: "B",
    category: "操作"
  },
  {
    id: 201,
    type: "single_choice",
    question: "库卡机器人解释器R已经选择程序，而且程序正在运行是什么颜色（）。",
    options: {
      A: "灰色",
      B: "黄色",
      C: "绿色",
      D: "红色"
    },
    answer: "C",
    category: "操作"
  },
  {
    id: 202,
    type: "single_choice",
    question: "（）机器人不带负荷，校正过程将存储用于每根轴的绝对检测。",
    options: {
      A: "首次校正",
      B: "偏置学习",
      C: "负荷校正",
      D: "绝对校正"
    },
    answer: "A",
    category: "校准"
  },
  {
    id: 203,
    type: "single_choice",
    question: "用于首次校正的检测偏移量将针对这个负载得出并且存储的行为称为（）。",
    options: {
      A: "工具学习",
      B: "偏置学习",
      C: "自我学习",
      D: "A和B"
    },
    answer: "D",
    category: "校准"
  },
  {
    id: 204,
    type: "single_choice",
    question: "机器人（），也就是机器人能到达的最大距离。",
    options: {
      A: "臂展",
      B: "载重",
      C: "高度",
      D: "速度"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 205,
    type: "single_choice",
    question: "如果机器人轴未经零点标定，则会造成以下哪几种情况（）",
    options: {
      A: "① 编程无法进行； (2) 软件限位开关关闭； (3) 仍可进行笛卡尔式手动运行； (4) 机器人本体失衡倾倒",
      B: "②③",
      C: "①②",
      D: "③④"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 206,
    type: "single_choice",
    question: "测量工业机器人旋转轴旋转角度的传感器为（）。",
    options: {
      A: "角度传感器",
      B: "压力传感器",
      C: "振动传感器",
      D: "射线辐射传感器"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 207,
    type: "single_choice",
    question: "具有六自由度的机器人大多都是（）机器人。",
    options: {
      A: "并联",
      B: "直线",
      C: "关节",
      D: "坐标"
    },
    answer: "C",
    category: "机器人类型"
  },
  {
    id: 208,
    type: "single_choice",
    question: "（）型机器人主要由回转和旋转自由度构成，可以看成是仿人手臂设计。",
    options: {
      A: "关节",
      B: "直线",
      C: "并联",
      D: "圆柱坐标"
    },
    answer: "A",
    category: "机器人类型"
  },
  {
    id: 209,
    type: "single_choice",
    question: "（）是允许机器人本体与零件之间发生相对运动的机构。",
    options: {
      A: "构件",
      B: "关节",
      C: "机器",
      D: "零件"
    },
    answer: "B",
    category: "机械结构"
  },
  {
    id: 210,
    type: "single_choice",
    question: "对于转动关节而言，关节变量是D-H参数中的（）。",
    options: {
      A: "关节角",
      B: "杆件长度",
      C: "横距",
      D: "扭转角"
    },
    answer: "A",
    category: "运动学"
  },
  {
    id: 211,
    type: "single_choice",
    question: "对于移动（平动）关节而言，关节变量是D-H参数中的（）。",
    options: {
      A: "关节角",
      B: "杆件长度",
      C: "横距",
      D: "扭转角"
    },
    answer: "C",
    category: "运动学"
  },
  {
    id: 212,
    type: "single_choice",
    question: "（）是机器人末端参考点实际到达的位置与所需要到达的理想位置之间的差距。",
    options: {
      A: "定位精度",
      B: "距离差值",
      C: "运动实差",
      D: "重复差值"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 213,
    type: "single_choice",
    question: "（）是工业机器人在同以条件下用同一方法操作时重复n次所测得位置与姿态的一致程度。",
    options: {
      A: "重复定位精度",
      B: "定位精度",
      C: "定位差值",
      D: "重复定位差值"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 214,
    type: "single_choice",
    question: "如果机器人在进行轨迹控制时一直以工业机器人理论上建模的杆长进行规划，（）的变化会导致工业机器人在定位精度和重复精度上产生较大误差。",
    options: {
      A: "理论杆长",
      B: "建模杆长",
      C: "实际杆长",
      D: "规划杆长"
    },
    answer: "C",
    category: "运动学"
  },
  {
    id: 215,
    type: "single_choice",
    question: "通过对工业机器人控制系统中（）参数的定时检测和修正，可使工业机器人控制轨迹得到补偿，可提高产品一致性要求和避免事故发生。",
    options: {
      A: "杆长",
      B: "载重",
      C: "高度",
      D: "臂展"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 216,
    type: "single_choice",
    question: "原点位置校准是将机器人机械原点位置与电机（）进行对照的操作。",
    options: {
      A: "增量编码器的位置",
      B: "增量编码器的零点",
      C: "绝对编码器的绝对值",
      D: "绝对编码器的零点"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 217,
    type: "single_choice",
    question: "工业机器人的额定负载是指在规定范围内（）所能承受的最大负载允许值（）。",
    options: {
      A: "手腕机械接口处",
      B: "手臂",
      C: "末端执行器",
      D: "机座"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 218,
    type: "single_choice",
    question: "机器人手部的位姿是由哪两部分变量构成的（）、（）。",
    options: {
      A: "位置与速度",
      B: "姿态与位置",
      C: "位置与运行状态",
      D: "姿态与速度"
    },
    answer: "B",
    category: "运动学"
  },
  {
    id: 219,
    type: "single_choice",
    question: "按下机器人控制柜门上的急停按钮与示教盒上的急停按钮才能达到的效果是（）。",
    options: {
      A: "关闭伺服驱动单元的电源",
      B: "机器人立即停止动作",
      C: "系统出现急停报警",
      D: "关闭系统电源"
    },
    answer: "B",
    category: "安全"
  },
  {
    id: 220,
    type: "single_choice",
    question: "工业机器人的技术参数不包括哪些？（）",
    options: {
      A: "自由度",
      B: "定位精度.工作范围",
      C: "速度和加速度.承载能力",
      D: "颜色及工具"
    },
    answer: "D",
    category: "性能参数"
  },
  {
    id: 221,
    type: "single_choice",
    question: "工业机器人控制器的人机界面不包含（）。",
    options: {
      A: "传感器",
      B: "计算机键盘",
      C: "鼠标",
      D: "显示器"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 222,
    type: "single_choice",
    question: "（）是指机器人重复定位其手部于同一目标位置的能力，可以用标准偏差这个统计量来表示，它是衡量一列误差值的密集度。",
    options: {
      A: "定位精度",
      B: "重复定位精度",
      C: "密集度",
      D: "承载能力"
    },
    answer: "B",
    category: "性能参数"
  },
  {
    id: 223,
    type: "single_choice",
    question: "工具坐标系实际是由（）通过旋转和位移变换得到的。",
    options: {
      A: "关节坐标系",
      B: "机器人坐标系",
      C: "工具坐标系",
      D: "末端执行器坐标系"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 224,
    type: "single_choice",
    question: "（）指总工作空间边界面上的点所对应的机器人的位置和姿态。",
    options: {
      A: "末端执行器",
      B: "TCP",
      C: "工作空间",
      D: "奇异形位"
    },
    answer: "D",
    category: "工作空间"
  },
  {
    id: 225,
    type: "single_choice",
    question: "末端执行器以任意姿态达到的点所构成的工作空间称为（）。",
    options: {
      A: "灵活工作空间",
      B: "次工作空间",
      C: "工作空间",
      D: "奇异形位"
    },
    answer: "A",
    category: "工作空间"
  },
  {
    id: 226,
    type: "single_choice",
    question: "工作空间用字母（）表示。",
    options: {
      A: "W(p)",
      B: "Wp(p)",
      C: "Ws(p)",
      D: "Wp(s)"
    },
    answer: "A",
    category: "工作空间"
  },
  {
    id: 227,
    type: "single_choice",
    question: "灵活工作空间用字母（）表示。",
    options: {
      A: "W(p)",
      B: "Wp(p)",
      C: "Ws(p)",
      D: "Wp(s)"
    },
    answer: "B",
    category: "工作空间"
  },
  {
    id: 228,
    type: "single_choice",
    question: "次工作空间用字母（）表示。",
    options: {
      A: "W(p)",
      B: "Wp(p)",
      C: "Ws(p)",
      D: "Wp(s)"
    },
    answer: "C",
    category: "工作空间"
  },
  {
    id: 229,
    type: "single_choice",
    question: "工业机器人的手部也称为（），是连接在J6轴的末端法兰上的工具。",
    options: {
      A: "爪部",
      B: "手抓",
      C: "工具",
      D: "末端执行器"
    },
    answer: "D",
    category: "末端执行器"
  },
  {
    id: 230,
    type: "single_choice",
    question: "工业机器人的手部也称末端执行器，由（）和手指三部分组成，是一个独立的部件。",
    options: {
      A: "驱动机构、执行机构",
      B: "传动机构、执行机构",
      C: "驱动机构、传动机构",
      D: "传动机构、动力机构"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 231,
    type: "single_choice",
    question: "机械式夹持器按照夹取东西的方式不同，分为（）两种。",
    options: {
      A: "内夹式夹持器和外撑式夹持器",
      B: "内撑式夹持器和外夹式夹持器",
      C: "内夹式夹持器和外夹式夹持器",
      D: "内撑式夹持器和外撑式夹持器"
    },
    answer: "B",
    category: "末端执行器"
  },
  {
    id: 232,
    type: "single_choice",
    question: "常见机器人手部分为（）三类。",
    options: {
      A: "夹持类、吸附类、专用工具",
      B: "夹持类、吸附类、通用工具",
      C: "夹持类、吸附类、智能工具",
      D: "夹持类、吸附类、特殊工具"
    },
    answer: "A",
    category: "末端执行器"
  },
  {
    id: 233,
    type: "single_choice",
    question: "在库卡机器人中，下列基于RS485的现场总线中网关为EK1100+EL6731的是（）。",
    options: {
      A: "ProfiBus主站",
      B: "Profibu从站",
      C: "DeviceNet主站",
      D: "DeviceNet从站"
    },
    answer: "A",
    category: "总线技术"
  },
  {
    id: 234,
    type: "single_choice",
    question: "在库卡机器人中，下列基于RS485的现场总线中网关为EK1100+EL6732-0010的是（）。",
    options: {
      A: "ProfiBus主站",
      B: "Profibu从站",
      C: "DeviceNet主站",
      D: "DeviceNet从站"
    },
    answer: "B",
    category: "总线技术"
  },
  {
    id: 235,
    type: "single_choice",
    question: "在库卡机器人中，下列基于RS485的现场总线中网关为EK1100+EL6752的是（）。",
    options: {
      A: "ProfiBus主站",
      B: "Profibu从站",
      C: "DeviceNet主站",
      D: "DeviceNet从站"
    },
    answer: "C",
    category: "总线技术"
  },
  {
    id: 236,
    type: "single_choice",
    question: "在库卡机器人中，下列基于RS485的现场总线中网关为EK1100+EL6752-0010的是（）。",
    options: {
      A: "ProfiBus主站",
      B: "Profibu从站",
      C: "DeviceNet主站",
      D: "DeviceNet从站"
    },
    answer: "D",
    category: "总线技术"
  },
  {
    id: 237,
    type: "single_choice",
    question: "KRC4具有（）模拟输入端。",
    options: {
      A: "4个",
      B: "8个",
      C: "16个",
      D: "32个"
    },
    answer: "D",
    category: "硬件"
  },
  {
    id: 238,
    type: "single_choice",
    question: "在库卡机器人中，每隔（）一次循环读取一个模拟输入端。",
    options: {
      A: "1mm",
      B: "5mm",
      C: "10mm",
      D: "12mm"
    },
    answer: "D",
    category: "硬件"
  },
  {
    id: 239,
    type: "single_choice",
    question: "在库卡机器人中，数字信号32位输出，占用2位地址的为（）。",
    options: {
      A: "AM600-0016XXX",
      B: "AM600-0016XXX",
      C: "AM600-0016END",
      D: "AM600-0032END"
    },
    answer: "D",
    category: "硬件"
  },
  {
    id: 240,
    type: "single_choice",
    question: "涂胶机器人根据（）值得大小控制定量机输出胶量。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "布尔量",
      D: "开关量"
    },
    answer: "A",
    category: "应用"
  },
  {
    id: 241,
    type: "single_choice",
    question: "工业机器人的I/O板的模拟量输出信号的范围是（）。",
    options: {
      A: "0~10V",
      B: "0~24V",
      C: "0~20V",
      D: "12~24V"
    },
    answer: "A",
    category: "IO通信"
  },
  {
    id: 242,
    type: "single_choice",
    question: "机器人在进行编程时“ANOUT\"表示（）。",
    options: {
      A: "数字量输出",
      B: "数字量输入",
      C: "模拟量输出",
      D: "模拟量输入"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 243,
    type: "single_choice",
    question: "机器人在进行编程时“ANIN\"表示（）。",
    options: {
      A: "数字量输出",
      B: "数字量输入",
      C: "模拟量输出",
      D: "模拟量输入"
    },
    answer: "D",
    category: "编程"
  },
  {
    id: 244,
    type: "single_choice",
    question: "工业机器人模拟量输入端电压范围是（）。",
    options: {
      A: "0~10V",
      B: "0~24V",
      C: "-5~5V",
      D: "-14~14V"
    },
    answer: "C",
    category: "IO通信"
  },
  {
    id: 245,
    type: "single_choice",
    question: "工业机器人模拟量输出端电压范围是（）。",
    options: {
      A: "0~10V",
      B: "0~24V",
      C: "-5~5V",
      D: "-14~14V"
    },
    answer: "D",
    category: "IO通信"
  },
  {
    id: 246,
    type: "single_choice",
    question: "在时间上或数值上都是连续的物理量称为（）。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "布尔量",
      D: "开关量"
    },
    answer: "A",
    category: "基础知识"
  },
  {
    id: 247,
    type: "single_choice",
    question: "（）通常是对压力.温度.流量.物位等利用相应的传感器进行测量得来。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "布尔量",
      D: "开关量"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 248,
    type: "single_choice",
    question: "模拟信号输入，占用4位地址的是（）。",
    options: {
      A: "AM600-0016XXX",
      B: "AM600-4AD",
      C: "AM600-4DA",
      D: "AM600-0032END"
    },
    answer: "B",
    category: "硬件"
  },
  {
    id: 249,
    type: "single_choice",
    question: "模拟信号输出，占用4位地址的是（）。",
    options: {
      A: "AM600-0016XXX",
      B: "AM600-4AD",
      C: "AM600-4DA",
      D: "AM600-0032END"
    },
    answer: "C",
    category: "硬件"
  },
  {
    id: 250,
    type: "single_choice",
    question: "在工业机器人运行工业生产线中，（）是整个工控系统的中枢。",
    options: {
      A: "HMI",
      B: "PLC",
      C: "CCD",
      D: "PC"
    },
    answer: "B",
    category: "控制系统"
  },
  {
    id: 251,
    type: "single_choice",
    question: "工业生产过程对温度.压力.速度等模拟量进行的（）控制。",
    options: {
      A: "开环",
      B: "闭环",
      C: "半闭环",
      D: "半开环"
    },
    answer: "B",
    category: "控制系统"
  },
  {
    id: 252,
    type: "single_choice",
    question: "（）是一种专门为在工业环境下应用而设计的数字运算操作的电子装置。",
    options: {
      A: "HMI",
      B: "PLC",
      C: "CCD",
      D: "PC"
    },
    answer: "B",
    category: "控制系统"
  },
  {
    id: 253,
    type: "single_choice",
    question: "主要由微处理器和存储器组成的（）。",
    options: {
      A: "通信模块",
      B: "信号模块",
      C: "信号板",
      D: "CPU模块"
    },
    answer: "D",
    category: "硬件"
  },
  {
    id: 254,
    type: "single_choice",
    question: "输入模块和输出模块的总称是（）。",
    options: {
      A: "通信模块",
      B: "信号模块",
      C: "信号板",
      D: "CPU模块"
    },
    answer: "B",
    category: "硬件"
  },
  {
    id: 255,
    type: "single_choice",
    question: "工业机器人与PLC基于工业以太网进行通信的协议是（）。",
    options: {
      A: "Profibus",
      B: "ProfifNET",
      C: "Modbus",
      D: "USB"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 256,
    type: "single_choice",
    question: "工业机器人与PLC基于485串行总线进行通信的协议是（）。",
    options: {
      A: "Profibus",
      B: "ProfifNET",
      C: "Modbus",
      D: "USB"
    },
    answer: "A",
    category: "通信技术"
  },
  {
    id: 257,
    type: "single_choice",
    question: "在库卡机器人中，耦合器E-bus中，用于E-bus接口的为（）。",
    options: {
      A: "EK1100",
      B: "EK1000",
      C: "EK1101",
      D: "EK1501"
    },
    answer: "A",
    category: "硬件"
  },
  {
    id: 258,
    type: "single_choice",
    question: "在库卡机器人中，耦合器E-bus中，用于可直接与交换机连接的E-bus接口的为（）。",
    options: {
      A: "EK1100",
      B: "EK1000",
      C: "EK1101",
      D: "EK1501"
    },
    answer: "B",
    category: "硬件"
  },
  {
    id: 259,
    type: "single_choice",
    question: "在库卡机器人中，耦合器E-bus中，用于带ID拨码开关功能的EtherCAT耦合器的为（）。",
    options: {
      A: "EK1100",
      B: "EK1000",
      C: "EK1101",
      D: "EK1501"
    },
    answer: "C",
    category: "硬件"
  },
  {
    id: 260,
    type: "single_choice",
    question: "在库卡机器人中，以太网通讯中，需要OPC Server软件的为（）。",
    options: {
      A: "Modbus TCP",
      B: "OPC DA",
      C: "OPC UA",
      D: "PC SDK"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 261,
    type: "single_choice",
    question: "在（）下运行整个程序，可以通过测试程序运行过程是否达到任务要求，及时修改防止自动运行出现碰撞等问题。",
    options: {
      A: "手动模式",
      B: "自动模式",
      C: "安全模式",
      D: "运行模式"
    },
    answer: "A",
    category: "操作"
  },
  {
    id: 262,
    type: "single_choice",
    question: "在库卡机器人中，（）用于设置关联中断INTR变量的触发中断的条件。",
    options: {
      A: "INTRALLOW",
      B: "INTRCOND",
      C: "INTRDENY",
      D: "INTRENA"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 263,
    type: "single_choice",
    question: "在库卡机器人中，（）用于禁用特殊中断的触发。",
    options: {
      A: "INTRALLOW",
      B: "INTRCOND",
      C: "INTRDENY",
      D: "INTRENA"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 264,
    type: "single_choice",
    question: "在库卡机器人中，中断只有从对（）进行声明的层面起才能被识别。",
    options: {
      A: "GLOBAL",
      B: "WITH BRAKEFIFF",
      C: "BOOL",
      D: "中断子程序"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 265,
    type: "single_choice",
    question: "在库卡机器人中，中断中的制动机器人BRAKE，应用在在高速时柔和停止的是（）。",
    options: {
      A: "BRAKE",
      B: "BRAKEF",
      C: "BRAKEFF",
      D: "BRAKEFFF"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 266,
    type: "single_choice",
    question: "在库卡机器人中，中断中的制动机器人BRAKE，应用在低速时极快停止的是（）。",
    options: {
      A: "BRAKE",
      B: "BRAKEF",
      C: "BRAKEFF",
      D: "BRAKEFFF"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 267,
    type: "single_choice",
    question: "（）就已经示教的程序的某一范围的动作语句，使示教位置进行平行位移变换到别的位置。",
    options: {
      A: "程序位移",
      B: "镜像位移",
      C: "角度输入位移",
      D: "平面位移"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 268,
    type: "single_choice",
    question: "（）就已经示教的程序的某一范围的动作语句，使示教位置以面对称的方式进行对称位移变换到别的位置。",
    options: {
      A: "程序位移",
      B: "镜像位移",
      C: "角度输入位移",
      D: "平面位移"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 269,
    type: "single_choice",
    question: "在进行编写机器人程序过程时出现的机器人运动学涉及旋转移动坐标的变换是（）。",
    options: {
      A: "齐次变换",
      B: "复合变换",
      C: "平移变换",
      D: "旋转变换"
    },
    answer: "C",
    category: "运动学"
  },
  {
    id: 270,
    type: "single_choice",
    question: "在进行编写机器人程序过程时出现的机器人运动学涉及水平移动坐标的变换是（）。",
    options: {
      A: "齐次变换",
      B: "复合变换",
      C: "平移变换",
      D: "旋转变换"
    },
    answer: "D",
    category: "运动学"
  },
  {
    id: 271,
    type: "single_choice",
    question: "在库卡机器人中，下列触发预读停止的指令和变量中，当前机器人轴坐标系位置为（）。",
    options: {
      A: "$AXIS_ACT",
      B: "$AXIS_BACK",
      C: "$AXIS_FOR",
      D: "$AXIS_INT"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 272,
    type: "single_choice",
    question: "在库卡机器人中，下列触发预读停止的指令和变量中，机器人运动块起始轴坐标系位置为（）。",
    options: {
      A: "$AXIS_ACT",
      B: "$AXIS_BACK",
      C: "$AXIS_FOR",
      D: "$AXIS_INT"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 273,
    type: "single_choice",
    question: "（）处理功能是指多个程序被并列执行的功能。",
    options: {
      A: "多任务",
      B: "单任务",
      C: "双任务",
      D: "单程序"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 274,
    type: "single_choice",
    question: "在库卡机器人中，下列触发预读停止的指令和变量中，机器人运动块目标轴坐标系位置为（）。",
    options: {
      A: "$AXIS_ACT",
      B: "$AXIS_BACK",
      C: "$AXIS_FOR",
      D: "$AXIS_INT"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 275,
    type: "single_choice",
    question: "工业机器人的笛卡尔点或者轴进入设置的工作空间后（）。",
    options: {
      A: "只要设置了安全工作空间对于设备和人员都是安全的",
      B: "如果有多台机器人进入同一个工作空间，可以通过PLC等外部设备来设置优先级来避免碰撞",
      C: "如果有多台机器人进入同一个工作空间，只能采用本身系统来设置优先级避免碰撞",
      D: "机器人只能在工作空间内部运行"
    },
    answer: "B",
    category: "工作空间"
  },
  {
    id: 276,
    type: "single_choice",
    question: "工业机器人系统集成设计需要考虑哪些方面（）。",
    options: {
      A: "布局形式与人机性能.系统总控与通信方式",
      B: "工业机器人选型与外部轴配置",
      C: "安全保护与环保.协同单元的配置.经济性",
      D: "以上皆错"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 277,
    type: "single_choice",
    question: "按照计算机所传输的信息种类，不属于计算机的总线的是（）。",
    options: {
      A: "数据总线",
      B: "地址总线",
      C: "内部总线",
      D: "控制总线"
    },
    answer: "C",
    category: "计算机基础"
  },
  {
    id: 278,
    type: "single_choice",
    question: "为什么需要进行零点标定（标准）（）。",
    options: {
      A: "为设定机器人的重复精度",
      B: "为了也可进行轴坐标式（与轴相关的）运行",
      C: "为设定机器人的绝对精确度",
      D: "为了以一个固定参考点为基准设定机器人的每根轴"
    },
    answer: "D",
    category: "校准"
  },
  {
    id: 279,
    type: "single_choice",
    question: "什么是带偏量的负载零点标定（）。",
    options: {
      A: "首先将机器人不带工具进行“首次零点标定”，然后带安装好的工具进行带偏量的负载零点标定。",
      B: "仅将机器人带工具（偏量）进行零点标定，系统由此算出首次零点标定。",
      C: "负载零点标定仅可通过库卡千分表进行",
      D: "负载零点标定时，仅须带偏量标定手轴的零点"
    },
    answer: "A",
    category: "校准"
  },
  {
    id: 280,
    type: "single_choice",
    question: "工具测量的意义是什么（）。",
    options: {
      A: "工具测量后，可进行沿工具作业方向的直线手动移动.机器人法兰的改向和使工具头部（TCP）沿轨迹运动。",
      B: "通过工具测量可避开Alpha5问题",
      C: "工具测量后，可进行沿工具作业方向的直线手动移动.围绕工具头部（TCP）的改向和使工具头部（TCP）沿轨迹运动",
      D: "仅使用一个工具时，测量无意义"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 281,
    type: "single_choice",
    question: "进行工具测量有何意义，正确的是（）。",
    options: {
      A: "不可围绕工具TCP点改变姿态",
      B: "可以沿工具作业方向移动",
      C: "不能沿着TCP上的轨迹保持已编程的运行速度",
      D: "定义的姿态不能沿着轨迹"
    },
    answer: "B",
    category: "校准"
  },
  {
    id: 282,
    type: "single_choice",
    question: "示教器上设置亮度，时间等一般从哪个界面进行设置（）。",
    options: {
      A: "输入输出",
      B: "手动操纵",
      C: "程序编辑器",
      D: "控制面板"
    },
    answer: "D",
    category: "操作"
  },
  {
    id: 283,
    type: "single_choice",
    question: "查看机器人的事件日志有什么作用（）。",
    options: {
      A: "遇到机器人系统报错时，单击状态栏进入到事件日志界面，分析报错记录可以很方便地找到解决方法",
      B: "遇到机器人系统报错时，单击状态栏进入到事件日志界面，清楚故障信息可以直接排除故障",
      C: "查看机器人系统设置",
      D: "查看机器人状态"
    },
    answer: "A",
    category: "操作"
  },
  {
    id: 284,
    type: "single_choice",
    question: "工具坐标系的设置不能在下列哪个模式中进行（）。",
    options: {
      A: "操作模式",
      B: "编辑模式",
      C: "管理模式",
      D: "示教模式"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 285,
    type: "single_choice",
    question: "当机器人机械原点丢失或发生偏移需重新进行（）。",
    options: {
      A: "机械复位",
      B: "参数设置",
      C: "原点校准",
      D: "以上说法都不正确"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 286,
    type: "single_choice",
    question: "机器人的零点标定方式，正确的是（）。",
    options: {
      A: "标准零点标定",
      B: "零点标定，带负载校正",
      C: "AB都对",
      D: "以上都是错的"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 287,
    type: "single_choice",
    question: "设置负载参数时，承载能力不仅决定于负载的质量，而且还与机器人运行的速度和（）的大小和（）有关。",
    options: {
      A: "加速度.方向",
      B: "加速度.位移",
      C: "质量.方向",
      D: "平均速度.位移"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 288,
    type: "single_choice",
    question: "工业机器人示教器的主要工作部分是（）。",
    options: {
      A: "操作键和显示屏",
      B: "操作杆和显示屏",
      C: "传感器和显示屏",
      D: "开关"
    },
    answer: "A",
    category: "操作"
  },
  {
    id: 289,
    type: "single_choice",
    question: "以下叙述正确的是（）。",
    options: {
      A: "若工业机器人不具备信息反馈特征，则为闭环控制系统；若具备信息反馈特征，则为开环控制系统",
      B: "控制系统包括包含了高层次的外围接口与低层次的工厂接口",
      C: "多机器人不能通过一个控制器实时编程和协调同步",
      D: "被动柔顺结构的响应远快于利用计算机控制算法实现的主动重定位"
    },
    answer: "D",
    category: "控制系统"
  },
  {
    id: 290,
    type: "single_choice",
    question: "为何要进行带负载的偏量学习（）。",
    options: {
      A: "提高精确度",
      B: "称出负载重量",
      C: "提高机器人运行速度",
      D: "测出负责中心"
    },
    answer: "A",
    category: "校准"
  },
  {
    id: 291,
    type: "single_choice",
    question: "什么下列情况下必须再次进行原点位置校准？（）。",
    options: {
      A: "机器人碰撞工件，原点偏移时",
      B: "机器人重新启动时",
      C: "每次机器人正常启动系统时",
      D: "编写程序前"
    },
    answer: "A",
    category: "校准"
  },
  {
    id: 292,
    type: "single_choice",
    question: "KKA3示教器中，下列选项中可以设置IP地址的为（）。",
    options: {
      A: "系统启动",
      B: "轴参数",
      C: "应用选择",
      D: "Mes监控"
    },
    answer: "B",
    category: "操作"
  },
  {
    id: 293,
    type: "single_choice",
    question: "库卡机器人解释器R未选定程序是什么颜色（）。",
    options: {
      A: "灰色",
      B: "黄色",
      C: "绿色",
      D: "红色"
    },
    answer: "A",
    category: "操作"
  },
  {
    id: 294,
    type: "single_choice",
    question: "库卡机器人解释器R语句指针位于所选程序的首行是什么颜色（）。",
    options: {
      A: "灰色",
      B: "黄色",
      C: "绿色",
      D: "红色"
    },
    answer: "B",
    category: "操作"
  },
  {
    id: 295,
    type: "single_choice",
    question: "库卡机器人解释器R已经选择程序，而且程序正在运行是什么颜色（）。",
    options: {
      A: "灰色",
      B: "黄色",
      C: "绿色",
      D: "红色"
    },
    answer: "C",
    category: "操作"
  },
  {
    id: 296,
    type: "single_choice",
    question: "（）机器人不带负荷，校正过程将存储用于每根轴的绝对检测。",
    options: {
      A: "首次校正",
      B: "偏置学习",
      C: "负荷校正",
      D: "绝对校正"
    },
    answer: "A",
    category: "校准"
  },
  {
    id: 297,
    type: "single_choice",
    question: "用于首次校正的检测偏移量将针对这个负载得出并且存储的行为称为（）。",
    options: {
      A: "工具学习",
      B: "偏置学习",
      C: "自我学习",
      D: "A和B"
    },
    answer: "D",
    category: "校准"
  },
  {
    id: 298,
    type: "single_choice",
    question: "机器人（），也就是机器人能到达的最大距离。",
    options: {
      A: "臂展",
      B: "载重",
      C: "高度",
      D: "速度"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 299,
    type: "single_choice",
    question: "如果机器人轴未经零点标定，则会造成以下哪几种情况（）",
    options: {
      A: "① 编程无法进行； (2) 软件限位开关关闭； (3) 仍可进行笛卡尔式手动运行； (4) 机器人本体失衡倾倒",
      B: "②③",
      C: "①②",
      D: "③④"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 300,
    type: "single_choice",
    question: "测量工业机器人旋转轴旋转角度的传感器为（）。",
    options: {
      A: "角度传感器",
      B: "压力传感器",
      C: "振动传感器",
      D: "射线辐射传感器"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 301,
    type: "single_choice",
    question: "具有六自由度的机器人大多都是（）机器人。",
    options: {
      A: "并联",
      B: "直线",
      C: "关节",
      D: "坐标"
    },
    answer: "C",
    category: "机器人类型"
  },
  {
    id: 302,
    type: "single_choice",
    question: "（）型机器人主要由回转和旋转自由度构成，可以看成是仿人手臂设计。",
    options: {
      A: "关节",
      B: "直线",
      C: "并联",
      D: "圆柱坐标"
    },
    answer: "A",
    category: "机器人类型"
  },
  {
    id: 303,
    type: "single_choice",
    question: "（）是允许机器人本体与零件之间发生相对运动的机构。",
    options: {
      A: "构件",
      B: "关节",
      C: "机器",
      D: "零件"
    },
    answer: "B",
    category: "机械结构"
  },
  {
    id: 304,
    type: "single_choice",
    question: "对于转动关节而言，关节变量是D-H参数中的（）。",
    options: {
      A: "关节角",
      B: "杆件长度",
      C: "横距",
      D: "扭转角"
    },
    answer: "A",
    category: "运动学"
  },
  {
    id: 305,
    type: "single_choice",
    question: "对于移动（平动）关节而言，关节变量是D-H参数中的（）。",
    options: {
      A: "关节角",
      B: "杆件长度",
      C: "横距",
      D: "扭转角"
    },
    answer: "C",
    category: "运动学"
  },
  {
    id: 306,
    type: "single_choice",
    question: "（）是机器人末端参考点实际到达的位置与所需要到达的理想位置之间的差距。",
    options: {
      A: "定位精度",
      B: "距离差值",
      C: "运动实差",
      D: "重复差值"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 307,
    type: "single_choice",
    question: "（）是工业机器人在同以条件下用同一方法操作时重复n次所测得位置与姿态的一致程度。",
    options: {
      A: "重复定位精度",
      B: "定位精度",
      C: "定位差值",
      D: "重复定位差值"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 308,
    type: "single_choice",
    question: "如果机器人在进行轨迹控制时一直以工业机器人理论上建模的杆长进行规划，（）的变化会导致工业机器人在定位精度和重复精度上产生较大误差。",
    options: {
      A: "理论杆长",
      B: "建模杆长",
      C: "实际杆长",
      D: "规划杆长"
    },
    answer: "C",
    category: "运动学"
  },
  {
    id: 309,
    type: "single_choice",
    question: "通过对工业机器人控制系统中（）参数的定时检测和修正，可使工业机器人控制轨迹得到补偿，可提高产品一致性要求和避免事故发生。",
    options: {
      A: "杆长",
      B: "载重",
      C: "高度",
      D: "臂展"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 310,
    type: "single_choice",
    question: "原点位置校准是将机器人机械原点位置与电机（）进行对照的操作。",
    options: {
      A: "增量编码器的位置",
      B: "增量编码器的零点",
      C: "绝对编码器的绝对值",
      D: "绝对编码器的零点"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 311,
    type: "single_choice",
    question: "工业机器人的额定负载是指在规定范围内（）所能承受的最大负载允许值（）。",
    options: {
      A: "手腕机械接口处",
      B: "手臂",
      C: "末端执行器",
      D: "机座"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 312,
    type: "single_choice",
    question: "机器人手部的位姿是由哪两部分变量构成的（）、（）。",
    options: {
      A: "位置与速度",
      B: "姿态与位置",
      C: "位置与运行状态",
      D: "姿态与速度"
    },
    answer: "B",
    category: "运动学"
  },
  {
    id: 313,
    type: "single_choice",
    question: "按下机器人控制柜门上的急停按钮与示教盒上的急停按钮才能达到的效果是（）。",
    options: {
      A: "关闭伺服驱动单元的电源",
      B: "机器人立即停止动作",
      C: "系统出现急停报警",
      D: "关闭系统电源"
    },
    answer: "B",
    category: "安全"
  },
  {
    id: 314,
    type: "single_choice",
    question: "工业机器人的技术参数不包括哪些？（）",
    options: {
      A: "自由度",
      B: "定位精度.工作范围",
      C: "速度和加速度.承载能力",
      D: "颜色及工具"
    },
    answer: "D",
    category: "性能参数"
  },
  {
    id: 315,
    type: "single_choice",
    question: "工业机器人控制器的人机界面不包含（）。",
    options: {
      A: "传感器",
      B: "计算机键盘",
      C: "鼠标",
      D: "显示器"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 316,
    type: "single_choice",
    question: "（）是指机器人重复定位其手部于同一目标位置的能力，可以用标准偏差这个统计量来表示，它是衡量一列误差值的密集度。",
    options: {
      A: "定位精度",
      B: "重复定位精度",
      C: "密集度",
      D: "承载能力"
    },
    answer: "B",
    category: "性能参数"
  },
  {
    id: 317,
    type: "single_choice",
    question: "工具坐标系实际是由（）通过旋转和位移变换得到的。",
    options: {
      A: "关节坐标系",
      B: "机器人坐标系",
      C: "工具坐标系",
      D: "末端执行器坐标系"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 318,
    type: "single_choice",
    question: "（）指总工作空间边界面上的点所对应的机器人的位置和姿态。",
    options: {
      A: "末端执行器",
      B: "TCP",
      C: "工作空间",
      D: "奇异形位"
    },
    answer: "D",
    category: "工作空间"
  },
  {
    id: 319,
    type: "single_choice",
    question: "末端执行器以任意姿态达到的点所构成的工作空间称为（）。",
    options: {
      A: "灵活工作空间",
      B: "次工作空间",
      C: "工作空间",
      D: "奇异形位"
    },
    answer: "A",
    category: "工作空间"
  },
  {
    id: 320,
    type: "single_choice",
    question: "工作空间用字母（）表示。",
    options: {
      A: "W(p)",
      B: "Wp(p)",
      C: "Ws(p)",
      D: "Wp(s)"
    },
    answer: "A",
    category: "工作空间"
  },
  {
    id: 321,
    type: "single_choice",
    question: "灵活工作空间用字母（）表示。",
    options: {
      A: "W(p)",
      B: "Wp(p)",
      C: "Ws(p)",
      D: "Wp(s)"
    },
    answer: "B",
    category: "工作空间"
  },
  {
    id: 322,
    type: "single_choice",
    question: "次工作空间用字母（）表示。",
    options: {
      A: "W(p)",
      B: "Wp(p)",
      C: "Ws(p)",
      D: "Wp(s)"
    },
    answer: "C",
    category: "工作空间"
  },
  {
    id: 323,
    type: "single_choice",
    question: "工业机器人的手部也称为（），是连接在J6轴的末端法兰上的工具。",
    options: {
      A: "爪部",
      B: "手抓",
      C: "工具",
      D: "末端执行器"
    },
    answer: "D",
    category: "末端执行器"
  },
  {
    id: 324,
    type: "single_choice",
    question: "工业机器人的手部也称末端执行器，由（）和手指三部分组成，是一个独立的部件。",
    options: {
      A: "驱动机构、执行机构",
      B: "传动机构、执行机构",
      C: "驱动机构、传动机构",
      D: "传动机构、动力机构"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 325,
    type: "single_choice",
    question: "机械式夹持器按照夹取东西的方式不同，分为（）两种。",
    options: {
      A: "内夹式夹持器和外撑式夹持器",
      B: "内撑式夹持器和外夹式夹持器",
      C: "内夹式夹持器和外夹式夹持器",
      D: "内撑式夹持器和外撑式夹持器"
    },
    answer: "B",
    category: "末端执行器"
  },
  {
    id: 326,
    type: "single_choice",
    question: "常见机器人手部分为（）三类。",
    options: {
      A: "夹持类、吸附类、专用工具",
      B: "夹持类、吸附类、通用工具",
      C: "夹持类、吸附类、智能工具",
      D: "夹持类、吸附类、特殊工具"
    },
    answer: "A",
    category: "末端执行器"
  },
  {
    id: 327,
    type: "single_choice",
    question: "在库卡机器人中，下列基于RS485的现场总线中网关为EK1100+EL6731的是（）。",
    options: {
      A: "ProfiBus主站",
      B: "Profibu从站",
      C: "DeviceNet主站",
      D: "DeviceNet从站"
    },
    answer: "A",
    category: "总线技术"
  },
  {
    id: 328,
    type: "single_choice",
    question: "在库卡机器人中，下列基于RS485的现场总线中网关为EK1100+EL6732-0010的是（）。",
    options: {
      A: "ProfiBus主站",
      B: "Profibu从站",
      C: "DeviceNet主站",
      D: "DeviceNet从站"
    },
    answer: "B",
    category: "总线技术"
  },
  {
    id: 329,
    type: "single_choice",
    question: "在库卡机器人中，下列基于RS485的现场总线中网关为EK1100+EL6752的是（）。",
    options: {
      A: "ProfiBus主站",
      B: "Profibu从站",
      C: "DeviceNet主站",
      D: "DeviceNet从站"
    },
    answer: "C",
    category: "总线技术"
  },
  {
    id: 330,
    type: "single_choice",
    question: "在库卡机器人中，下列基于RS485的现场总线中网关为EK1100+EL6752-0010的是（）。",
    options: {
      A: "ProfiBus主站",
      B: "Profibu从站",
      C: "DeviceNet主站",
      D: "DeviceNet从站"
    },
    answer: "D",
    category: "总线技术"
  },
  {
    id: 331,
    type: "single_choice",
    question: "KRC4具有（）模拟输入端。",
    options: {
      A: "4个",
      B: "8个",
      C: "16个",
      D: "32个"
    },
    answer: "D",
    category: "硬件"
  },
  {
    id: 332,
    type: "single_choice",
    question: "在库卡机器人中，每隔（）一次循环读取一个模拟输入端。",
    options: {
      A: "1mm",
      B: "5mm",
      C: "10mm",
      D: "12mm"
    },
    answer: "D",
    category: "硬件"
  },
  {
    id: 333,
    type: "single_choice",
    question: "在库卡机器人中，数字信号32位输出，占用2位地址的为（）。",
    options: {
      A: "AM600-0016XXX",
      B: "AM600-0016XXX",
      C: "AM600-0016END",
      D: "AM600-0032END"
    },
    answer: "D",
    category: "硬件"
  },
  {
    id: 334,
    type: "single_choice",
    question: "涂胶机器人根据（）值得大小控制定量机输出胶量。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "布尔量",
      D: "开关量"
    },
    answer: "A",
    category: "应用"
  },
  {
    id: 335,
    type: "single_choice",
    question: "工业机器人的I/O板的模拟量输出信号的范围是（）。",
    options: {
      A: "0~10V",
      B: "0~24V",
      C: "0~20V",
      D: "12~24V"
    },
    answer: "A",
    category: "IO通信"
  },
  {
    id: 336,
    type: "single_choice",
    question: "机器人在进行编程时“ANOUT\"表示（）。",
    options: {
      A: "数字量输出",
      B: "数字量输入",
      C: "模拟量输出",
      D: "模拟量输入"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 337,
    type: "single_choice",
    question: "机器人在进行编程时“ANIN\"表示（）。",
    options: {
      A: "数字量输出",
      B: "数字量输入",
      C: "模拟量输出",
      D: "模拟量输入"
    },
    answer: "D",
    category: "编程"
  },
  {
    id: 338,
    type: "single_choice",
    question: "工业机器人模拟量输入端电压范围是（）。",
    options: {
      A: "0~10V",
      B: "0~24V",
      C: "-5~5V",
      D: "-14~14V"
    },
    answer: "C",
    category: "IO通信"
  },
  {
    id: 339,
    type: "single_choice",
    question: "工业机器人模拟量输出端电压范围是（）。",
    options: {
      A: "0~10V",
      B: "0~24V",
      C: "-5~5V",
      D: "-14~14V"
    },
    answer: "D",
    category: "IO通信"
  },
  {
    id: 340,
    type: "single_choice",
    question: "在时间上或数值上都是连续的物理量称为（）。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "布尔量",
      D: "开关量"
    },
    answer: "A",
    category: "基础知识"
  },
  {
    id: 341,
    type: "single_choice",
    question: "（）通常是对压力.温度.流量.物位等利用相应的传感器进行测量得来。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "布尔量",
      D: "开关量"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 342,
    type: "single_choice",
    question: "模拟信号输入，占用4位地址的是（）。",
    options: {
      A: "AM600-0016XXX",
      B: "AM600-4AD",
      C: "AM600-4DA",
      D: "AM600-0032END"
    },
    answer: "B",
    category: "硬件"
  },
  {
    id: 343,
    type: "single_choice",
    question: "模拟信号输出，占用4位地址的是（）。",
    options: {
      A: "AM600-0016XXX",
      B: "AM600-4AD",
      C: "AM600-4DA",
      D: "AM600-0032END"
    },
    answer: "C",
    category: "硬件"
  },
   {
    id: 344,
    type: "single_choice",
    question: "在库卡机器人中，EKrlMsgType中将该信息提示作为等待信息发出的是（）。",
    options: {
      A: "Quit:",
      B: "STATE:",
      C: "NOTIFY",
      D: "WAITING"
    },
    answer: "D",
    category: "编程"
  },
  {
    id: 345,
    type: "single_choice",
    question: "按住（）可进行视图视角旋转。",
    options: {
      A: "鼠标右键",
      B: "鼠标中键",
      C: "中键滚轮",
      D: "鼠标左键"
    },
    answer: "B",
    category: "操作"
  },
  {
    id: 346,
    type: "single_choice",
    question: "在运动逆解中，在“其他”的（）中，可选择IK分组的执行条——\"Performalways\"或\"IK_Group was performed and failed\"。",
    options: {
      A: "计算方法",
      B: "编辑条件参数",
      C: "添加新IK分组",
      D: "阻尼"
    },
    answer: "B",
    category: "运动学"
  },
  {
    id: 347,
    type: "single_choice",
    question: "监控机器人速度是否超 $350\\mathrm{m / s}$ ，警告颜色为（）。",
    options: {
      A: "红色",
      B: "蓝色",
      C: "黄色",
      D: "黑色"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 348,
    type: "single_choice",
    question: "在库卡机器人中，设置离线轨迹曲线及路径时，选择Edge或曲线Curve来识别并选取相应的路径的是（）。",
    options: {
      A: "选取Pick",
      B: "自动扩展",
      C: "曲线偏移",
      D: "点位密度"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 349,
    type: "single_choice",
    question: "虚拟传感器一次能检测（）个物体。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 350,
    type: "single_choice",
    question: "在LogicMux中的Selector是指（）。",
    options: {
      A: "当为低时，选中第一个输入信号；当为高时，选中第二个输入信号",
      B: "当为高时，选中第一个输入信号；当为低时，选中第二个输入信号",
      C: "当为低时，选中第一个输出信号；当为高时，选中第二个输出信号",
      D: "当为高时，选中第一个输出信号；当为低时，选中第二个输出信号"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 351,
    type: "single_choice",
    question: "在库卡机器人中，设置离线轨迹曲线及路径时，用于定义选中曲线中路径的扩展的是（）。",
    options: {
      A: "选取Pick",
      B: "自动扩展",
      C: "曲线偏移",
      D: "点位密度"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 352,
    type: "single_choice",
    question: "在库卡机器人中，设置离线轨迹曲线及路径时，使曲线中点的位姿达到偏移的目的的是（）。",
    options: {
      A: "选取Pick",
      B: "自动扩展",
      C: "曲线偏移",
      D: "点位密度"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 353,
    type: "single_choice",
    question: "在库卡机器人中，设置离线轨迹曲线及路径时，可以影响点位的数量和视觉效果的是（）。",
    options: {
      A: "选取Pick",
      B: "自动扩展",
      C: "曲线偏移",
      D: "点位密度"
    },
    answer: "D",
    category: "编程"
  },
  {
    id: 354,
    type: "single_choice",
    question: "搭建标准六轴机器人的关节1的位置参数Rx,Ry,Rz是（）。",
    options: {
      A: "180，0，0",
      B: "-90，0，0",
      C: "90，0，00，",
      D: "180，0，0"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 355,
    type: "single_choice",
    question: "设置机器人逆解算法中最大选代数是（）。",
    options: {
      A: "6",
      B: "50",
      C: "25",
      D: "99"
    },
    answer: "D",
    category: "运动学"
  },
  {
    id: 356,
    type: "single_choice",
    question: "搭建标准六轴机器人的关节6的位置参数Rx,Ry,Rz是（）。",
    options: {
      A: "0,180,0",
      B: "90,-90,90",
      C: "180,-90,0",
      D: "0,-90,0"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 357,
    type: "single_choice",
    question: "搭建标准六轴机器人的关节4的位置参数Rx,Ry,Rz是（）。",
    options: {
      A: "90,90,90",
      B: "180,90,90",
      C: "0,-90,0",
      D: "90,-90,90"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 358,
    type: "single_choice",
    question: "在离线编程软件中，机器人和设备模型均为三维显示，可（）。",
    options: {
      A: "直观设置",
      B: "观察机器人的位置",
      C: "动作与干涉情况",
      D: "以上均是"
    },
    answer: "D",
    category: "操作"
  },
  {
    id: 359,
    type: "single_choice",
    question: "仿真码垛工作过程时，末端执行器需要（）传感器，确保在检测范围内精确的检测到物体。",
    options: {
      A: "陀螺仪传感器",
      B: "速度传感器",
      C: "距离传感器",
      D: "力传感器"
    },
    answer: "C",
    category: "传感器"
  },
  {
    id: 360,
    type: "single_choice",
    question: "机器人离线编程的基本流程（）。",
    options: {
      A: "几何建模-位置布局-运动规划-动画仿真",
      B: "几何建模-动画仿真-运动规划-位置布局",
      C: "位置布局-运动规划-动画仿真-几何建模",
      D: "几何建模-位置布局-动画仿真-运动规划"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 361,
    type: "single_choice",
    question: "机器人离线编辑的基本流程中，编辑作业程序包括（）。",
    options: {
      A: "添加程序点",
      B: "修改程序点",
      C: "删除程序点",
      D: "以上都是"
    },
    answer: "D",
    category: "编程"
  },
  {
    id: 362,
    type: "single_choice",
    question: "无论是采用在线示教还是离线编程，其主要目的是（）。",
    options: {
      A: "完成机器人运动轨迹",
      B: "作业条件示教",
      C: "作业顺序示教",
      D: "以上都是"
    },
    answer: "D",
    category: "应用领域"
  },
  {
    id: 363,
    type: "single_choice",
    question: "机器人程序的编辑一般不能一步到位，在作业任务的示教过程中，需不断调试和完善程序，常见的操作是（）。",
    options: {
      A: "程序点的追加",
      B: "程序点的变更",
      C: "程序点的删除",
      D: "以上都是"
    },
    answer: "D",
    category: "操作"
  },
  {
    id: 364,
    type: "single_choice",
    question: "通常对机器人进行离线编程时，要求最初程序点与最终程序点的位置（），可提高工作效率。",
    options: {
      A: "相同",
      B: "不同",
      C: "无所谓",
      D: "分离越大越好"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 365,
    type: "single_choice",
    question: "仿真机器人轨迹控制过程需要通过求解（）获得各个关节角的位置控制系统的设定值。",
    options: {
      A: "运动学正问题",
      B: "运动学逆问题",
      C: "动力学正问题",
      D: "动力学逆问题"
    },
    answer: "B",
    category: "运动学"
  },
  {
    id: 366,
    type: "single_choice",
    question: "仿真中任何一个刚体在仿真空间运动具有（）自由度。",
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
    id: 367,
    type: "single_choice",
    question: "工业机器人有搬运.（）.装配.喷涂等机器人，主要用于现代化的工厂和柔性加工系统中。",
    options: {
      A: "喷涂",
      B: "装配",
      C: "搬运",
      D: "焊接"
    },
    answer: "D",
    category: "应用领域"
  },
  {
    id: 368,
    type: "single_choice",
    question: "在选择机器人端I/O信号时，下拉列表中的机器人系统指的是（）。",
    options: {
      A: "Feeder",
      B: "SC-Gripper",
      C: "SC-InFeeder",
      D: "SC-Practise"
    },
    answer: "D",
    category: "IO通信"
  },
  {
    id: 369,
    type: "single_choice",
    question: "离线编程特点（）。",
    options: {
      A: "编程时不影响机器人工作",
      B: "需要实际机器人系统和工作环境",
      C: "难以实现复杂的机器人运行轨迹",
      D: "在实际系统上实验程序"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 370,
    type: "single_choice",
    question: "离线编程系统构成不包括（）。",
    options: {
      A: "传感器",
      B: "图形仿真",
      C: "机器人系统CAD建模",
      D: "示教器"
    },
    answer: "D",
    category: "编程"
  },
  {
    id: 371,
    type: "single_choice",
    question: "手部的位姿是由（）构成的。",
    options: {
      A: "位置与速度",
      B: "姿态与位置",
      C: "位置与运行状态",
      D: "姿态与速度"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 372,
    type: "single_choice",
    question: "搬运过程中机器人终端效应器/手的力量来自（）。",
    options: {
      A: "决定机器人手部位置的各关节",
      B: "机器人手部的关节",
      C: "决定机器人手部位姿的各个关节",
      D: "机器人的全部关节"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 373,
    type: "single_choice",
    question: "根据工作任务实现搬运.码垛.焊接.抛光.喷涂等典型应用的工业机器人系统的离线编程和应用调试，解决了示教-再现编程最大的（）问题。",
    options: {
      A: "操作人员劳动强度大",
      B: "占用生产时间",
      C: "操作人员安全问题",
      D: "容易产生废品"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 374,
    type: "single_choice",
    question: "图形化编程即根据3D模型的曲线特征自动转换成机器人的运动轨迹，该方法省时.省力且能保证（）。",
    options: {
      A: "轨迹精度",
      B: "机器人安全",
      C: "装配精度",
      D: "人身安全"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 375,
    type: "single_choice",
    question: "目前KUKA机器人编程方式不包括（）。",
    options: {
      A: "示教法在线编程",
      B: "离线编程",
      C: "文字编程",
      D: "手写编程"
    },
    answer: "D",
    category: "编程"
  },
  {
    id: 376,
    type: "single_choice",
    question: "搭建一套虚拟的机器人工作站，完成轨迹编程工作和通过仿真观察.优化机器人工作轨迹，然后进行后处理，输出对应的执行代码到机器人的（），驱动机器人工作。",
    options: {
      A: "控制器",
      B: "末端",
      C: "示教器",
      D: "plc"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 377,
    type: "single_choice",
    question: "对工业机器人进行作业编程，主要内容不包括（）",
    options: {
      A: "运动轨迹",
      B: "作业条件",
      C: "作业顺序",
      D: "插补方式"
    },
    answer: "D",
    category: "编程"
  },
  {
    id: 378,
    type: "single_choice",
    question: "以下是机器人运动轨迹的示教主要是确认程序点的属性的是（）",
    options: {
      A: "位置坐标",
      B: "插补方式",
      C: "再现速度",
      D: "以上都是"
    },
    answer: "D",
    category: "操作"
  },
  {
    id: 379,
    type: "single_choice",
    question: "与传统的在线示教相比，以下不属于离线编程的优点是（）",
    options: {
      A: "可结合各种人工智能等技术提高编程效率",
      B: "机器人的程序固定不变",
      C: "减少机器人的非工作时间",
      D: "使编辑者远离苛刻的工作环境"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 380,
    type: "single_choice",
    question: "在创建运动轨迹并仿真运行时，需要（）",
    options: {
      A: "将变位机关节1旋转90度",
      B: "将变位机关节2旋转90度",
      C: "将变位机关节3旋转90度",
      D: "将变位机关节4旋转90度"
    },
    answer: "A",
    category: "操作"
  },
  {
    id: 381,
    type: "single_choice",
    question: "脱离真实的机器人工作系统来规划轨迹，谓之为()，生产同时可进行编程，节省机器人系统非工作时间。",
    options: {
      A: "远程",
      B: "仿真",
      C: "离线",
      D: "编程"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 382,
    type: "single_choice",
    question: "下列中关于离线编程的说法正确的是（）。",
    options: {
      A: "现场示教",
      B: "脱机工作",
      C: "目测精度",
      D: "不适用于复杂路径"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 383,
    type: "single_choice",
    question: "下列关于离线编程与仿真技术说法错误的是（）。",
    options: {
      A: "融入了计算机图形学技术",
      B: "轨迹可自动进行规划",
      C: "编程周期长.效率低",
      D: "仿真运行以检验离线程序"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 384,
    type: "single_choice",
    question: "目前工业机器人应用于多数的制造领域，下列工艺中适合采用离线编程的是（）。",
    options: {
      A: "码垛",
      B: "点焊",
      C: "不锈钢字切割",
      D: "零件装配"
    },
    answer: "C",
    category: "应用领域"
  },
  {
    id: 385,
    type: "single_choice",
    question: "工业机器人离线编程的主要的步骤有 $①$ 轨迹规划 $(2)$ 场景搭建 $(3)$ 工序优化 $(4)$ 程序输出，下列排序正确的是（）。",
    options: {
      A: "②①③④",
      B: "②③①④",
      C: "②①④③",
      D: "③②①④"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 386,
    type: "single_choice",
    question: "下列设备中属于机器人可支持的外部群组的是（）。",
    options: {
      A: "行走轴",
      B: "变位机",
      C: "电焊机",
      D: "弧焊机"
    },
    answer: "B",
    category: "控制系统"
  },
  {
    id: 387,
    type: "single_choice",
    question: "下列中关于离线编程的说法正确的是（）。",
    options: {
      A: "现场示教",
      B: "脱机工作",
      C: "目测精度",
      D: "不适用于复杂路径"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 388,
    type: "single_choice",
    question: "测试环境 $=$ （） $+$ 硬件 $+$ 网络 $+$ 数据准备 $+$ 测试工具。",
    options: {
      A: "软件",
      B: "网络",
      C: "硬件",
      D: "数据"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 389,
    type: "single_choice",
    question: "工业机器人测试系统的三个环境也可以说是系统开发的三个阶段：开发、（）、上线，其中生产环境也就是通常说的真实环境。",
    options: {
      A: "测试",
      B: "硬件",
      C: "模拟",
      D: "软件"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 390,
    type: "single_choice",
    question: "工业机器人由3个大部分和6个子系统组成。3大部分是机械部分、传感部分和（）。",
    options: {
      A: "驱动部分",
      B: "控制部分",
      C: "人机交互",
      D: "末端执行器"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 391,
    type: "single_choice",
    question: "工业机器人的结构.用途等有所不同，且用户的要求也不相同，但工业机器人的主要技术参数一般应该有（）、定位精度和重复定位精度、工作范围、最大工作速度和承载能力等。",
    options: {
      A: "关节角",
      B: "自由度",
      C: "杆长",
      D: "零点标定"
    },
    answer: "B",
    category: "性能参数"
  },
  {
    id: 392,
    type: "single_choice",
    question: "工业机器人精度是指定位精度和（）。",
    options: {
      A: "尺寸精度",
      B: "加工精度",
      C: "重复定位精度",
      D: "相对位置精度"
    },
    answer: "C",
    category: "性能参数"
  },
  {
    id: 393,
    type: "single_choice",
    question: "（）是指机器人重复定位其手部于同一目标位置的能力，可以用标准偏差这个统计量来表示，它是衡量一系列误差值的密集度。",
    options: {
      A: "定位精度",
      B: "加工精度",
      C: "重复定位精度",
      D: "相对位置精度"
    },
    answer: "C",
    category: "性能参数"
  },
  {
    id: 394,
    type: "single_choice",
    question: "是指机器人手臂末端或手腕中心所能到达的所有点的集合。",
    options: {
      A: "定位精度",
      B: "运动轨迹",
      C: "最佳区域",
      D: "工作范围"
    },
    answer: "D",
    category: "工作空间"
  },
  {
    id: 395,
    type: "single_choice",
    question: "承载能力不仅决定于（）的质量，而且还与机器人运行的速度和加速度的大小和方向有关。",
    options: {
      A: "六轴",
      B: "底座",
      C: "机器人本体",
      D: "负载"
    },
    answer: "D",
    category: "性能参数"
  },
  {
    id: 396,
    type: "single_choice",
    question: "根据测试任务复杂程度的不同，测试系统中传感器、中间变换装置和显示记录装置等每个环节又可由（）模块组成。",
    options: {
      A: "多个",
      B: "不知道",
      C: "无",
      D: "无穷个"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 397,
    type: "single_choice",
    question: "测试系统包括（）、信号调理、数据采集、数据处理显示。",
    options: {
      A: "电机",
      B: "传感器",
      C: "示教器",
      D: "控制器"
    },
    answer: "B",
    category: "传感器"
  },
  {
    id: 398,
    type: "single_choice",
    question: "测试系统中的静态参数：（）、测量范围、精度、线性度等。",
    options: {
      A: "稳定性",
      B: "温漂",
      C: "灵敏度",
      D: "动态误差"
    },
    answer: "C",
    category: "传感器"
  },
  {
    id: 399,
    type: "single_choice",
    question: "测试系统中的动态参数：稳定性、温漂、（）、带宽等。",
    options: {
      A: "精度",
      B: "线性度",
      C: "灵敏度",
      D: "动态误差"
    },
    answer: "D",
    category: "传感器"
  },
  {
    id: 400,
    type: "single_choice",
    question: "机械产品的灵魂是测试系统，测试系统需要信息化的支持，信息化的两大特点是：（）、信息化。",
    options: {
      A: "网络化",
      B: "机械化",
      C: "通信",
      D: "传感"
    },
    answer: "A",
    category: "通信技术"
  },
  {
    id: 401,
    type: "single_choice",
    question: "测试技术是实验科学的一部分，研究的主要内容为：被测量的测量原理、测量方法.测试系统以及（）四个方面。",
    options: {
      A: "有限元分析",
      B: "数据处理",
      C: "磁场分析",
      D: "模型优化"
    },
    answer: "B",
    category: "传感器"
  },
  {
    id: 402,
    type: "single_choice",
    question: "根据工业机器人性能参数要求配置测试环境，搭建（）。",
    options: {
      A: "虚拟系统",
      B: "控制系统",
      C: "测试系统",
      D: "驱动系统"
    },
    answer: "C",
    category: "控制系统"
  },
  {
    id: 303,
    type: "single_choice",
    question: "工具栏中的图标所具有的功能是（）。",
    options: {
      A: "坐标系切换",
      B: "运动速度设定",
      C: "显示工作范围",
      D: "机器人工具切换"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 404,
    type: "single_choice",
    question: "（）指机器人手臂上被相邻两关节分开的刚性杆件。",
    options: {
      A: "连杆",
      B: "杠杆",
      C: "铰链",
      D: "关节"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 405,
    type: "single_choice",
    question: "机器人终端效应器（手）的力量来自（）。",
    options: {
      A: "机器人的全部关节",
      B: "机器人手部的关节",
      C: "决定机器人手部位置的各关节",
      D: "决定机器人手部位姿的各个关节"
    },
    answer: "D",
    category: "末端执行器"
  },
  {
    id: 406,
    type: "single_choice",
    question: "（）是机器人坐标系的基准。",
    options: {
      A: "零点",
      B: "关节坐标系",
      C: "世界坐标系",
      D: "工具坐标系"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 407,
    type: "single_choice",
    question: "目前工业机器人应用于多数制造领域，下列工艺中适合采用离线编程的是（）。",
    options: {
      A: "码垛",
      B: "电焊",
      C: "工不锈钢字切割",
      D: "零件装配"
    },
    answer: "C",
    category: "应用领域"
  },
  {
    id: 408,
    type: "single_choice",
    question: "工业机器人离线编程的主要的步骤有 $①$ 轨迹规划； $②$ 场景搭建； $(3)$ 工序优化； $(4)$ 程序输出。",
    options: {
      A: "②①③④",
      B: "②③①④",
      C: "②①④③",
      D: "③②①④"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 409,
    type: "single_choice",
    question: "机器人逆运动学求解有多种方法，一般分为（）类。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "A",
    category: "运动学"
  },
  {
    id: 410,
    type: "single_choice",
    question: "下面哪种传感器不属于触觉传感器（）。",
    options: {
      A: "接近觉传感器",
      B: "接触觉传感器",
      C: "压觉传感器",
      D: "热敏传感器"
    },
    answer: "D",
    category: "传感器"
  },
  {
    id: 411,
    type: "single_choice",
    question: "如果机器人轴未经零点标定，则会造成以下哪几种情况（） $①$ 编程无法进行； $(2)$ 软件限位开关关闭； $(3)$ 仍可进行笛卡尔式手动运行； $(\\widehat{\\Delta})$ 机器人本体失衡倾倒。",
    options: {
      A: "①②③④",
      B: "②③",
      C: "①②",
      D: "③④"
    },
    answer: "C",
    category: "校准"
  },
  {
    id: 412,
    type: "single_choice",
    question: "（）机器人不带负荷，校正过程将存储用于每根轴的绝对检测。",
    options: {
      A: "首次校正",
      B: "偏置学习",
      C: "负荷校正",
      D: "绝对校正"
    },
    answer: "A",
    category: "校准"
  },
  {
    id: 413,
    type: "single_choice",
    question: "用于首次校正的检测偏移量将针对这个负载得出并且存储的行为称为（）。",
    options: {
      A: "工具学习",
      B: "偏置学习",
      C: "自我学习",
      D: "A和B"
    },
    answer: "D",
    category: "校准"
  },
  {
    id: 414,
    type: "single_choice",
    question: "机器人（），也就是机器人能到达的最大距离。",
    options: {
      A: "臂展",
      B: "载重",
      C: "高度",
      D: "速度"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 415,
    type: "single_choice",
    question: "如果机器人在进行轨迹控制时一直以工业机器人理论上建模的杆长进行规划，（）的变化会导致工业机器人在定位精度和重复精度上产生较大误差。",
    options: {
      A: "理论杆长",
      B: "建模杆长",
      C: "实际杆长",
      D: "规划杆长"
    },
    answer: "C",
    category: "性能参数"
  },
  {
    id: 416,
    type: "single_choice",
    question: "通过对工业机器人控制系统中（）参数的定时检测和修正，可使工业机器人控制轨迹得到补偿，可提高产品一致性要求和避免事故发生。",
    options: {
      A: "杆长",
      B: "载重",
      C: "高度",
      D: "臂展"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 417,
    type: "single_choice",
    question: "测量工业机器人旋转轴旋转角度的传感器为（）。",
    options: {
      A: "角度传感器",
      B: "压力传感器",
      C: "振动传感器",
      D: "射线辐射传感器"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 418,
    type: "single_choice",
    question: "具有六自由度的机器人大多都是（）机器人。",
    options: {
      A: "并联",
      B: "直线",
      C: "关节",
      D: "坐标"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 419,
    type: "single_choice",
    question: "（）型机器人主要由回转和旋转自由度构成，可以看成是仿人手臂设计。",
    options: {
      A: "关节",
      B: "直线",
      C: "并联",
      D: "圆柱坐标"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 420,
    type: "single_choice",
    question: "（）是允许机器人本体与零件之间发生相对运动的机构。",
    options: {
      A: "构件",
      B: "关节",
      C: "机器",
      D: "零件"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 421,
    type: "single_choice",
    question: "对于转动关节而言，关节变量是D-H参数中的（）。",
    options: {
      A: "关节角",
      B: "杆件长度",
      C: "横距",
      D: "扭转角"
    },
    answer: "A",
    category: "运动学"
  },
  {
    id: 422,
    type: "single_choice",
    question: "对于移动（平动）关节而言，关节变量是D-H参数中的（）。",
    options: {
      A: "关节角",
      B: "杆件长度",
      C: "横距",
      D: "扭转角"
    },
    answer: "C",
    category: "运动学"
  },
  {
    id: 423,
    type: "single_choice",
    question: "下列关于离线编程与仿真技术说法错误的是（）。",
    options: {
      A: "融入了计算机图形学技术",
      B: "轨迹可自动进行规划",
      C: "编程周期长、效率低",
      D: "仿真运行以检验离线程序"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 424,
    type: "single_choice",
    question: "（）是机器人末端参考点实际到达的位置与所需要到达的理想位置之间的差距。",
    options: {
      A: "定位精度",
      B: "距离差值",
      C: "运动实差",
      D: "重复差值"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 425,
    type: "single_choice",
    question: "（）是工业机器人在同以条件下用同一方法操作时重复n次所测得位置与姿态的一致程度。",
    options: {
      A: "重复定位精度",
      B: "定位精度",
      C: "定位差值",
      D: "重复定位差值"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 426,
    type: "single_choice",
    question: "用来表征机器人重复定位其手部于同一目标位置的能力的参数是（）。",
    options: {
      A: "定位精度",
      B: "速度",
      C: "工作范围",
      D: "重复定位精度"
    },
    answer: "D",
    category: "性能参数"
  },
  {
    id: 427,
    type: "single_choice",
    question: "下面哪一项不属于工业机器人子系统（）。",
    options: {
      A: "驱动系统",
      B: "机械结构系统",
      C: "人机交互系统",
      D: "导航系统"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 428,
    type: "single_choice",
    question: "工业机器人的额定负载是指在规定范围内（）所能承受的最大负载允许值。",
    options: {
      A: "手腕机械接口处",
      B: "手臂",
      C: "末端执行器",
      D: "机座"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 429,
    type: "single_choice",
    question: "示教-再现控制为一种在线编程方式，它最大的问题是（）。",
    options: {
      A: "操作人员劳动强度大",
      B: "占用生产时间",
      C: "操作人员安全问题",
      D: "容易产生废品"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 430,
    type: "single_choice",
    question: "操作机手持粉笔在黑板上写字，在（）方向只有力的约束而无速度约束。",
    options: {
      A: "X轴",
      B: "Y轴",
      C: "Z轴",
      D: "R轴"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 431,
    type: "single_choice",
    question: "机器人经常使用的程序可以设置为主程序，每台机器人可以设置（）主程序。",
    options: {
      A: "3个",
      B: "2个",
      C: "1个",
      D: "无限"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 432,
    type: "single_choice",
    question: "对于大型机器人，典型的末端执行器峰值速度为（）。",
    options: {
      A: "50m/s",
      B: "80m/s",
      C: "5m/s",
      D: "20m/s"
    },
    answer: "D",
    category: "性能参数"
  },
  {
    id: 433,
    type: "single_choice",
    question: "机器人的最大速度是在各轴联动的情况下，机器人（）所能达到的最大线速度。",
    options: {
      A: "手腕中心",
      B: "末端执行器",
      C: "集体",
      D: "第六轴"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 434,
    type: "single_choice",
    question: "机器人的精度主要依存于机械误差、控制算法误差与分辨率系统误差。，一般说来（）。",
    options: {
      A: "绝对定位精度高于重复定位精度",
      B: "重复定位精度高于绝对定位精度",
      C: "机械精度高于控制精度",
      D: "机械精度高于控制精度"
    },
    answer: "B",
    category: "性能参数"
  },
  {
    id: 435,
    type: "single_choice",
    question: "如果末端装置.工具或周围环境的刚性很高，那么机械手要执行与某个表面有接触的操作作业将会变得相当困难，此时应该考虑（）。",
    options: {
      A: "柔顺控制",
      B: "PID控制",
      C: "模糊控制",
      D: "最优控制"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 436,
    type: "single_choice",
    question: "用来表征机器人重复定位其手部于同一目标位置的能力的参数是（）。",
    options: {
      A: "定位精度",
      B: "速度",
      C: "工作范围",
      D: "重复定位精度"
    },
    answer: "D",
    category: "性能参数"
  },
  {
    id: 437,
    type: "single_choice",
    question: "机器人技术参数有哪些（） $①$ 自由度； $(2)$ 高度； $(3)$ 精度； $(4)$ 臂长； $(5)$ 工作范围； $(6)$ 速度； $(7)$ 承载能力",
    options: {
      A: "①②③④⑦",
      B: "①③⑤⑦",
      C: "①②③④⑤⑥",
      D: "①③⑤⑥⑦"
    },
    answer: "D",
    category: "性能参数"
  },
  {
    id: 438,
    type: "single_choice",
    question: "速度和（）是表明机器人运动特性的主要指标。",
    options: {
      A: "加速度",
      B: "角速度",
      C: "线速度",
      D: "载重"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 439,
    type: "single_choice",
    question: "机器人机械系统的精度主要涉及（）。 $①$ 位姿精度； $(2)$ 负载精度； $(3)$ 重复位姿精度； $(4)$ 轨迹精度； $(5)$ 重复轨迹精度",
    options: {
      A: "①②③④⑤",
      B: "②③④③",
      C: "①③④③",
      D: "①②④③"
    },
    answer: "C",
    category: "性能参数"
  },
  {
    id: 440,
    type: "single_choice",
    question: "机器人工作范围是指机器人手臂末端和（）所能到达的所有点的集合，也叫工作区域。",
    options: {
      A: "手臂前端",
      B: "手臂中端",
      C: "手腕中心",
      D: "手腕"
    },
    answer: "C",
    category: "工作空间"
  },
  {
    id: 441,
    type: "single_choice",
    question: "机器人的轨迹指操作臂在运动过程中的位移，速度和（）。",
    options: {
      A: "加速度",
      B: "角速度",
      C: "旋转",
      D: "平移"
    },
    answer: "A",
    category: "运动学"
  },
  {
    id: 442,
    type: "single_choice",
    question: "重复定位精度是关于（）的统计数据。",
    options: {
      A: "精度",
      B: "速度",
      C: "质量",
      D: "加速度"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 443,
    type: "single_choice",
    question: "机器人的控制方式分为点控制和（）。",
    options: {
      A: "点对点控制",
      B: "点到点控制",
      C: "连续轨迹控制",
      D: "任意位置控制"
    },
    answer: "C",
    category: "控制系统"
  },
  {
    id: 444,
    type: "single_choice",
    question: "焊接机器人的焊接作业主要包括（）。",
    options: {
      A: "点焊和弧焊",
      B: "间断焊和连续焊",
      C: "平焊和竖焊",
      D: "气体保护焊和氩弧焊"
    },
    answer: "A",
    category: "焊接技术"
  },
  {
    id: 445,
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
    id: 446,
    type: "single_choice",
    question: "所谓无姿态插补，既保持第一个示教点时的姿态，在大多数情况下是机器人沿（）运动时出现。",
    options: {
      A: "平面圆弧",
      B: "直线",
      C: "平面曲线",
      D: "空间曲线"
    },
    answer: "B",
    category: "编程"
  },
  {
    id: 447,
    type: "single_choice",
    question: "滚转能实现360度无障碍旋转的关节运动，通常用（）来标记。",
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
    id: 448,
    type: "single_choice",
    question: "RRR型手腕是（）自由度手腕。",
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
    id: 449,
    type: "single_choice",
    question: "作业路径通常用（）坐标系相对于工件坐标系的运动来描述。",
    options: {
      A: "手爪",
      B: "固定",
      C: "运动",
      D: "工具"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 450,
    type: "single_choice",
    question: "为了获得非常平稳的加工过程，希望作业启动时位置为零时（）。",
    options: {
      A: "速度为零，加速度为零",
      B: "速度为零，加速度恒定",
      C: "速度恒定，加速度为零",
      D: "速度恒定，加速度恒定"
    },
    answer: "A",
    category: "控制系统"
  },
  {
    id: 451,
    type: "single_choice",
    question: "（）是指机器人每根轴能够实现的最小移动距离或最小转动角度。",
    options: {
      A: "分辨率",
      B: "精度",
      C: "旋转角",
      D: "关节角"
    },
    answer: "A",
    category: "性能参数"
  },
  {
    id: 452,
    type: "single_choice",
    question: "工业机器人离线编程测试应对测试环境与操作环境的差异进行评估，并分析（）对测试结果造成的影响。",
    options: {
      A: "差异",
      B: "测试环境",
      C: "操作环境",
      D: "工业机器人"
    },
    answer: "A",
    category: "编程"
  },
  {
    id: 453,
    type: "single_choice",
    question: "测试报告用表格的形式列出每一项测试的标识符及其测试内容，并指明实际进行的测试工作内容与（）中预先设计的内容之间的差别。",
    options: {
      A: "测试想象",
      B: "测试计划",
      C: "测试表现",
      D: "测试结果"
    },
    answer: "B",
    category: "控制系统"
  },
  {
    id: 454,
    type: "single_choice",
    question: "工业机器人离线编程测试报告对每项缺陷提出改进建议包含（）。 $①$ 各项修改可采用的修改方法； $②$ 各项修改的紧迫程度； $(3)$ 各项修改预计的工作量",
    options: {
      A: "①②",
      B: "①③",
      C: "①②③",
      D: "②③"
    },
    answer: "C",
    category: "编程"
  },
  {
    id: 455,
    type: "single_choice",
    question: "生产安全管理模式特点（）。 $①$ 责任大； $②$ 难度大； $(3)$ 压力大； $(4)$ 风险大",
    options: {
      A: "①②③④",
      B: "①②③",
      C: "①②",
      D: "②③④"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 456,
    type: "single_choice",
    question: "（）是跳出传统企业边界，从供应链管理范围去优化企业的资源和经营管理新一代信息系统。",
    options: {
      A: "ERP",
      B: "PDA",
      C: "ABB",
      D: "KEPA"
    },
    answer: "A",
    category: "计算机基础"
  },
  {
    id: 457,
    type: "single_choice",
    question: "（）系统的人力资源管理系统在组织机构设计、岗位管理、薪酬体系以及人力资源开发等方面同样集成了先进的理念。",
    options: {
      A: "ERP",
      B: "PDA",
      C: "ABB",
      D: "KEPA"
    },
    answer: "A",
    category: "计算机基础"
  },
  {
    id: 458,
    type: "single_choice",
    question: "生产经营单位的（）对本单位的安全生产工作全面负责。",
    options: {
      A: "部长",
      B: "组长",
      C: "班长",
      D: "主要负责人"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 459,
    type: "single_choice",
    question: "生产经营单位采用（）时，必须了解掌握其安全技术特性，采取有效的安全防护措施，并对从业人员进行专门的安全生产教育和培训。 $①$ 新工艺； $②$ 新技术； $(3)$ 新材料； $(4)$ 新设备",
    options: {
      A: "①②",
      B: "①②③",
      C: "①②③④",
      D: "②③④"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 460,
    type: "single_choice",
    question: "（）的范围由国务院负责安全生产监督管理的部门会同国务院有关部门确定。",
    options: {
      A: "操作人员",
      B: "特种作业人员",
      C: "管理人员",
      D: "普通作业人员"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 461,
    type: "single_choice",
    question: "生产经营单位在进行（）危险物品或处置废弃危险物品时，必须执行国家法律、法规、标准。 $①$ 生产； $②$ 经营； $(3)$ 运输； $(4)$ 储存； $(5)$ 使用",
    options: {
      A: "①",
      B: "①②",
      C: "①②③④",
      D: "①②③④③"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 462,
    type: "single_choice",
    question: "（）以上生产经营单位在同一作业区域内进行可能危及对方安全生产的生产经营活动，未签订安全生产管理协议或未指定专职安全生产管理人员进行安全检查与协调要责令限期改正。",
    options: {
      A: "1个",
      B: "2个",
      C: "3个",
      D: "4个"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 463,
    type: "single_choice",
    question: "（）应当安排用于配备劳动防护用品.进行安全生产培训的经费。",
    options: {
      A: "生产经营单位",
      B: "经理办公室",
      C: "综合办",
      D: "人力资源部"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 464,
    type: "single_choice",
    question: "安全教育从业人员的三会是指（）。 $①$ 会检查； $②$ 会使用； $(3)$ 会维护保养； $(4)$ 会调查",
    options: {
      A: "①②④",
      B: "②③④",
      C: "①②③",
      D: "①③④"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 465,
    type: "single_choice",
    question: "（）是职业素养的核心。",
    options: {
      A: "职业道德",
      B: "职业信心",
      C: "职业信仰",
      D: "职业信念"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 466,
    type: "single_choice",
    question: "职业素养包括（）。 $①$ 职业道德； $(2)$ 职业思想； $(3)$ 职业行为习惯； $(4)$ 职业技能",
    options: {
      A: "①②③",
      B: "①②④",
      C: "②③④",
      D: "①②③④"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 467,
    type: "single_choice",
    question: "职业素养的最根基部分（）。 $①$ 职业道德； $(2)$ 职业思想； $(3)$ 职业行为习惯； $(4)$ 职业技能",
    options: {
      A: "①②③",
      B: "①②④",
      C: "②③④",
      D: "①③④"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 468,
    type: "single_choice",
    question: "（）是支撑职业人生的表象内容。 $①$ 职业道德； $(2)$ 职业思想； $(3)$ 职业行为习惯； $(4)$ 职业技能",
    options: {
      A: "①",
      B: "②",
      C: "③",
      D: "④"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 469,
    type: "single_choice",
    question: "（）是指职业内在的规范和要求，是在职业过程中表现出来的综合品质。",
    options: {
      A: "职业道德",
      B: "职业素养",
      C: "职业信仰",
      D: "职业信念"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 470,
    type: "single_choice",
    question: "（）是指从业者在一定生理和心理条件基础上，通过教育培训、职业实践、自我修炼等途径形成和发展起来的。",
    options: {
      A: "职业道德",
      B: "职业素养",
      C: "职业素质",
      D: "职业信念"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 471,
    type: "single_choice",
    question: "综合实践活动课程包括（）。 ① 信息技术教育； ② 研究性学习；③ 社区服务； ④ 社会实践； ⑤ 劳动； ⑥ 技术教育",
    options: {
      A: "①②③",
      B: "④③⑥",
      C: "①②③④⑤",
      D: "①②③④⑤⑥"
    },
    answer: "D",
    category: "教育理论"
  },
  {
    id: 472,
    type: "single_choice",
    question: "在中国现代教育史上，被誉为“伟大的人民教育家”的教育家是（）。",
    options: {
      A: "陶行知",
      B: "孔子",
      C: "孟子",
      D: "钱学森"
    },
    answer: "A",
    category: "教育理论"
  },
  {
    id: 473,
    type: "single_choice",
    question: "儒家的主要经典'四书'通常指（）。  ① 《大学》； ② 《中庸》； ③ 《论语》；④ 《孟子》； ⑤ 《春秋》； ⑥ 《尚书》",
    options: {
      A: "①②③④",
      B: "①②③⑤",
      C: "②③④⑤",
      D: "③④⑤⑥"
    },
    answer: "A",
    category: "教育理论"
  },
  {
    id: 474,
    type: "single_choice",
    question: "儒家的主要经典“五经”通常指（）。 ① 《诗经》； ② 《尚书》； ③ 《周易》； ④ 《礼记》； ⑤ 《春秋》； ⑥ 《大学》",
    options: {
      A: "⑥⑤④③②",
      B: "⑤④③②①",
      C: "⑥④③②①",
      D: "⑥④③②①"
    },
    answer: "B",
    category: "教育理论"
  },
  {
    id: 475,
    type: "single_choice",
    question: "新时期公民应具有的基本道德规范是（）。 ① 尊老爱幼； ② 爱国守法； ③ 明礼诚信； ④ 团结友善； ⑤ 勤俭自强； ⑥ 敬业奉献",
    options: {
      A: "①②③④⑤",
      B: "①③④⑤⑥",
      C: "②③④⑤⑥",
      D: "①③④⑤⑥"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 476,
    type: "single_choice",
    question: "第一个明确提出将教育学建成一门科学的教育家是（）。",
    options: {
      A: "赫尔巴特德国",
      B: "蔡元培中国",
      C: "奈美纽斯捷克",
      D: "陶行知中国"
    },
    answer: "A",
    category: "教育理论"
  },
  {
    id: 477,
    type: "single_choice",
    question: "多行智能理论是由（）提出的。",
    options: {
      A: "霍华德·加德纳美国",
      B: "蔡元培中国",
      C: "杜威美国",
      D: "陶行知中国"
    },
    answer: "A",
    category: "教育理论"
  },
  {
    id: 478,
    type: "single_choice",
    question: "下列法律中有和学校安全工作有关的条文的法律是（）。",
    options: {
      A: "教育法",
      B: "高等教育法",
      C: "职业教育法",
      D: "未成年人保护法"
    },
    answer: "B",
    category: "教育理论"
  },
  {
    id: 479,
    type: "single_choice",
    question: "多层校舍建筑每栋不少于（）部楼梯。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "教育理论"
  },
  {
    id: 480,
    type: "single_choice",
    question: "成功的人必定是高度（）的人必定是以高标准要求自己的人。",
    options: {
      A: "自负",
      B: "嚣张",
      C: "严谨自律",
      D: "自爱"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 481,
    type: "single_choice",
    question: "宽容别人就等于（），在我宽容别人的时候，我也得到了别人的宽容。",
    options: {
      A: "放过别人",
      B: "放虎归山",
      C: "宽容自己",
      D: "体谅别人"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 482,
    type: "single_choice",
    question: "（）是一种素质一种修养一种情操，也是衡量一个人高低层次的标准。",
    options: {
      A: "品质",
      B: "自负",
      C: "刻薄",
      D: "宽容"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 483,
    type: "single_choice",
    question: "（）是人生的天平。",
    options: {
      A: "失去与得到",
      B: "拿来与送出",
      C: "索取与给与",
      D: "付出与回报"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 484,
    type: "single_choice",
    question: "（）上级的指令是员工的天职。",
    options: {
      A: "服从",
      B: "配合",
      C: "更改",
      D: "听取"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 485,
    type: "single_choice",
    question: "下列关于职业素养的叙述，不正确的一项是（）。",
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
    id: 486,
    type: "single_choice",
    question: "关于价值观的说法，正确的是（）。",
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
    id: 487,
    type: "true_false",
    question: "机器人的I/O通信方式有PC通信、现场总线、标准I/O板。",
    answer: "true",
    category: "通信技术"
  },
  
  // 题目2
  {
    id: 488,
    type: "true_false",
    question: "工业机器人通过IO模块直接与送丝机和保护气电磁阀进行通讯。",
    answer: "false",
    category: "IO通信"
  },
  
  // 题目3
  {
    id: 489,
    type: "true_false",
    question: "工业以太网输入/输出端使得分散现场装置（输入/输出装置，例如：信号处理板卡）可直接接入工业以太网。",
    answer: "true",
    category: "通信技术"
  },
  
  // 题目4
  {
    id: 490,
    type: "true_false",
    question: "工业机器人和外部通信有无协议和通信协议通信。",
    answer: "true",
    category: "通信技术"
  },
  
  // 题目5
  {
    id: 491,
    type: "true_false",
    question: "工业机器人只能通过网线与外部设备进行通信。",
    answer: "false",
    category: "通信技术"
  },
  
  // 题目6
  {
    id: 492,
    type: "true_false",
    question: "工业机器人I/O板是挂在DeviceNet网络上的，所以要设定模块在网络中的位置。",
    answer: "true",
    category: "IO通信"
  },
  
  // 题目7
  {
    id: 493,
    type: "true_false",
    question: "紧急停止优先于任何其它工业机器人的控制操作，它会断开工业机器人电机的驱动电源，停止所有运转部件，并切断工业机器人运动控制系统及存在潜在危险的功能部件的电源。",
    answer: "true",
    category: "安全操作"
  },
  
  // 题目8
  {
    id: 494,
    type: "true_false",
    question: "工作空间又叫做可达空间。",
    answer: "true",
    category: "工作空间"
  },
  
  // 题目9
  {
    id: 495,
    type: "true_false",
    question: "工作空间又叫做总工作空间。",
    answer: "false",
    category: "工作空间"
  },
  
  // 题目10
  {
    id: 496,
    type: "true_false",
    question: "三个工作空间的关系式是： W(p) = Wp(p) + Wp(s)",
    answer: "false",
    category: "工作空间"
  },
  
  // 题目11
  {
    id: 497,
    type: "true_false",
    question: "工业机器人示教器操作界面上的状态栏上的可以显示机器人程序运行状态。",
    answer: "true",
    category: "操作"
  },
  
  // 题目12
  {
    id: 498,
    type: "true_false",
    question: "正常联动生产时，机器人示教编程器上安全模式应该打到管理模式位置上。",
    answer: "false",
    category: "操作"
  },
  
  // 题目13
  {
    id: 499,
    type: "true_false",
    question: "对机器人进行示教时，模式旋钮打到示教模式后，在此模式中，外部设备发出的启动信号为有效的。",
    answer: "false",
    category: "操作"
  },
  
  // 题目14
  {
    id: 500,
    type: "true_false",
    question: "KUKA控制屏是人机交流的接口，简称KCP。",
    answer: "true",
    category: "控制系统"
  },
  
  // 题目15
  {
    id: 501,
    type: "true_false",
    question: "示教器一般具有手动操纵机器人运动、程序编写、程序调试和显示运行状态等功能。",
    answer: "true",
    category: "操作"
  },
  
  // 题目16
  {
    id: 502,
    type: "true_false",
    question: "手动操纵按钮可以对机器人、坐标系、增量的大小、杆速率以及运动方式进行修改和设置。",
    answer: "true",
    category: "操作"
  },
  
  // 题目17
  {
    id: 503,
    type: "true_false",
    question: "操纵杆的速率是稳定的，不能进行调节。",
    answer: "true",
    category: "操作"
  },
  
  // 题目18
  {
    id: 504,
    type: "true_false",
    question: "工业机器人示教器操作界面上的状态栏上的可以显示机器人程序运行状态。",
    answer: "true",
    category: "操作"
  },
  
  // 题目19
  {
    id: 505,
    type: "true_false",
    question: "示教器操作界面上的状态栏上显示的“手动”，是指可以手动移动机器人。",
    answer: "false",
    category: "操作"
  },
  
  // 题目20
  {
    id: 506,
    type: "true_false",
    question: "工具的测量是以工具参照点来创建一个坐标系，该参照点被称为 TCP 点。",
    answer: "true",
    category: "坐标系"
  },
  
  // 题目21
  {
    id: 507,
    type: "true_false",
    question: "示教器复位按钮可以使机器人复位。",
    answer: "false",
    category: "操作"
  },
  
  // 题目22
  {
    id: 508,
    type: "true_false",
    question: "使能器按钮设置为两档，可以有效地保护操作人员的安全。",
    answer: "true",
    category: "安全操作"
  },
  
  // 题目23
  {
    id: 509,
    type: "true_false",
    question: "不可以通过示教器配置机器人紧急停止信号。",
    answer: "false",
    category: "操作"
  },
  
  // 题目24
  {
    id: 510,
    type: "true_false",
    question: "机器人轴进行零点标定与否，对机器人的功能没有影响。",
    answer: "false",
    category: "校准"
  },
  
  // 题目25
  {
    id: 511,
    type: "true_false",
    question: "示教编程器上安全开关握紧为 ON，松开为 OFF 状态，作为进而追加的功能，当握紧力过大时，为 OFF 状态。",
    answer: "true",
    category: "安全操作"
  },
  
  // 题目26
  {
    id: 512,
    type: "true_false",
    question: "工业机器人外围设备是指可以附加到机器人系统中用来加强机器人功能的设备。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目27
  {
    id: 513,
    type: "true_false",
    question: "在一般情况下，灵活性高的工业机器人，其外围设备较简单，可适应产品型号的变化，反之，灵活性低的工业机器人，其外围设备较复杂，当产品型号改变时，就需要付出高额的投资更换外围设备。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目28
  {
    id: 514,
    type: "true_false",
    question: "喷漆机器人主要由机器人本体、计算机和相应的控制系统组成，配有自动喷枪、供漆装置、变更颜色装置等喷漆设备。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目29
  {
    id: 515,
    type: "true_false",
    question: "电动喷涂机器人的电机多采用耐压或内压防爆结构，不限定环境使用。",
    answer: "false",
    category: "应用领域"
  },
  
  // 题目30
  {
    id: 516,
    type: "true_false",
    question: "电动喷涂机器人不具有与液压喷涂机器人一样的控制功能。",
    answer: "false",
    category: "应用领域"
  },
  
  // 题目31
  {
    id: 517,
    type: "true_false",
    question: "喷涂机器人采用交流或直流伺服电机驱动时，电机运转可能会产生火花，电缆线与电器接线盒的接口等处，也可能会产生火花。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目32
  {
    id: 518,
    type: "true_false",
    question: "机器人自动喷涂线内的电器设备可以不具备防爆功能。",
    answer: "false",
    category: "安全操作"
  },
  
  // 题目33
  {
    id: 519,
    type: "true_false",
    question: "工业机器人打磨工作站能够在打磨工程中，可以实时监测打磨的力度，并及时进行调整。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目34
  {
    id: 520,
    type: "true_false",
    question: "一台机器手臂可以同时处理多条生产线的不同产品，产品更新时，需要硬件、设备上的改造与设置。",
    answer: "false",
    category: "应用领域"
  },
  
  // 题目35
  {
    id: 521,
    type: "true_false",
    question: "码垛机器人部分操作可在控制柜屏幕上手触式完成。",
    answer: "false",
    category: "操作"
  },
  
  // 题目36
  {
    id: 522,
    type: "true_false",
    question: "焊接电流、电压、焊接速度及焊接伸长度等对焊接结果起决定作用。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目37
  {
    id: 523,
    type: "true_false",
    question: "焊接机器人分为点焊机器人与弧焊机器人两种。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目38
  {
    id: 524,
    type: "true_false",
    question: "电阻点焊的过程相对比较简单，控制方便，且不需要焊缝轨迹跟踪，对机器人的精度和重复精度的控制要求比较低。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目39
  {
    id: 525,
    type: "true_false",
    question: "在焊接作业前和焊接过程中，变位机通过夹具来装卡和定位被焊工件，对工件的不同要求决定了变位机的负载能力及其运行方式。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目40
  {
    id: 526,
    type: "true_false",
    question: "焊接系统是焊接机器人完成作业的核心装备，由焊钳或焊枪、焊接控制器及水、电、气等辅助部分组成。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目41
  {
    id: 527,
    type: "true_false",
    question: "装配机器人是专门为装配而设计的工业机器人，可以完成一种产品或设备的某一特定装配任务的工业机器人。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目42
  {
    id: 528,
    type: "true_false",
    question: "装配机器人是柔性自动化装配系统的核心设备，由机器人操作机、控制器、末端执行器和传感系统组成。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目43
  {
    id: 529,
    type: "true_false",
    question: "焊接机器人其实就是在焊接生产领域代替焊工从事焊接任务的工业机器人。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目44
  {
    id: 530,
    type: "true_false",
    question: "在组成焊接系统的五大组成部分中，除附加部分以外，其余部分缺一不可。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目45
  {
    id: 531,
    type: "true_false",
    question: "机器人焊接时对于每条焊缝的焊接参数是变化的。",
    answer: "false",
    category: "焊接技术"
  },
  
  // 题目46
  {
    id: 532,
    type: "true_false",
    question: "对于气动焊枪，每一套参数，程序中会体现压力电流值，由焊接控制柜直接控制。",
    answer: "false",
    category: "焊接技术"
  },
  
  // 题目47
  {
    id: 533,
    type: "true_false",
    question: "一般情况下，弧焊焊接速度约为 5~50mm/s。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目48
  {
    id: 534,
    type: "true_false",
    question: "元器件表面粘污或氧化严重时，可以用刮刀或砂纸去除污物或氧化层。",
    answer: "true",
    category: "维护保养"
  },
  
  // 题目49
  {
    id: 535,
    type: "true_false",
    question: "清除焊接多余物一般用无水乙醇、三氯三氟乙烷、异丙醇等清洗剂进行清洗。",
    answer: "true",
    category: "维护保养"
  },
  
  // 题目50
  {
    id: 536,
    type: "true_false",
    question: "变位机是机器人焊接生产线及焊接柔性加工单元的重要组成部分。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目51
  {
    id: 537,
    type: "true_false",
    question: "弧焊过程中，要求焊枪严格按焊道轨迹运动，焊丝可以间隔填充。",
    answer: "false",
    category: "焊接技术"
  },
  
  // 题目52
  {
    id: 538,
    type: "true_false",
    question: "对于熔化极气体保护焊而言，电流越大，电弧越稳定，在焊接作业过程中尽可能采用大电流。",
    answer: "false",
    category: "焊接技术"
  },
  
  // 题目53
  {
    id: 539,
    type: "true_false",
    question: "为了避免飞溅对导电嘴的损伤，在施焊过程中尽可能增大焊丝的伸出长度。",
    answer: "false",
    category: "焊接技术"
  },
  
  // 题目54
  {
    id: 540,
    type: "true_false",
    question: "因为氧气的氧化性较强，所以绝不允许出现在保护气体中。",
    answer: "false",
    category: "焊接技术"
  },
  
  // 题目55
  {
    id: 541,
    type: "true_false",
    question: "由于药芯焊丝芯部填充有药粉，所以操作时送丝的压力较实芯焊丝要小。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目56
  {
    id: 542,
    type: "true_false",
    question: "描述物体相对于坐标系进行独立运动的数目称为自由度。",
    answer: "true",
    category: "机器人基础"
  },
  
  // 题目57
  {
    id: 543,
    type: "true_false",
    question: "I/O 是 Input/Output 的缩写，即输入/输出端口，工业机器人可通过 I/O 与外部设备进行交互。",
    answer: "true",
    category: "IO通信"
  },
  
  // 题目58
  {
    id: 544,
    type: "true_false",
    question: "KUKA 机器人可以选配标准 KUKA 的 PLC，省去了原来与外部 PLC 进行通信设置的麻烦，并且在机器人的示教器上就能实现与 PLC 的相关操作。",
    answer: "true",
    category: "控制系统"
  },
  
  // 题目59
  {
    id: 545,
    type: "true_false",
    question: "库卡机器人有两种可以调节的倍率的方法为程序倍率和手动倍率。",
    answer: "true",
    category: "操作"
  },
  
  // 题目60
  {
    id: 546,
    type: "true_false",
    question: "在库卡机器人中，程序倍率，简称 HOV。",
    answer: "false",
    category: "操作"
  },
  
  // 题目61
  {
    id: 547,
    type: "true_false",
    question: "在库卡机器人中，手动倍率，简称 POV。",
    answer: "false",
    category: "操作"
  },
  
  // 题目62
  {
    id: 548,
    type: "true_false",
    question: "库卡机器人倍率调节有两种操作方法是触摸屏调节和物理按键调节。",
    answer: "true",
    category: "操作"
  },
  
  // 题目63
  {
    id: 549,
    type: "true_false",
    question: "PLC 端可以通过 CPU 集成的通信接口，或扩展通信模块方式增加通信功能。",
    answer: "true",
    category: "控制系统"
  },
  
  // 题目64
  {
    id: 550,
    type: "true_false",
    question: "bool 用于存储逻辑值（真/假）数据，即 bool 型数据值可以为 TRUE 或 FALSE。",
    answer: "true",
    category: "编程"
  },
  
  // 题目65
  {
    id: 551,
    type: "true_false",
    question: "多任务程序最多可以有 20 个不带机器人运动指令的后台并行的 RAPID 程序。",
    answer: "true",
    category: "编程"
  },
  
  // 题目66
  {
    id: 552,
    type: "true_false",
    question: "WaitTime 时间等待指令，用于程序在等待一个指定的时间以后，再继续向下执行，也称为延时指令。",
    answer: "true",
    category: "编程"
  },
  
  // 题目67
  {
    id: 553,
    type: "true_false",
    question: "EXIT 指令为当无法处理时将程序停止执行。",
    answer: "true",
    category: "编程"
  },
  
  // 题目68
  {
    id: 554,
    type: "true_false",
    question: "实现循环操作的条件判断指令除了 FOR 以外，还有 WHILE 指令。",
    answer: "true",
    category: "编程"
  },
  
  // 题目69
  {
    id: 555,
    type: "true_false",
    question: "可以根据不同的用途创建多个程序模块。",
    answer: "true",
    category: "编程"
  },
  
  // 题目70
  {
    id: 556,
    type: "true_false",
    question: "工业机器人与PLC通信协议通常采用的是Modbus协议。",
    answer: "true",
    category: "通信技术"
  },
  
  // 题目71
  {
    id: 557,
    type: "true_false",
    question: "工业机器人与PLC之间的通信传输有“I/O”连接和通信线连接两种。",
    answer: "true",
    category: "通信技术"
  },
  
  // 题目72
  {
    id: 558,
    type: "true_false",
    question: "通过指令中相应的数据，机器人调用相应例行程序，也可以调用带例行程序。",
    answer: "false",
    category: "编程"
  },
  
  // 题目73
  {
    id: 559,
    type: "true_false",
    question: "典型的机器视觉系统可以分为：图像采集部分、图像处理部分和运动控制部分。",
    answer: "true",
    category: "传感器"
  },
  
  // 题目74
  {
    id: 560,
    type: "true_false",
    question: "机器人视觉初步处理采用常规CCD或CMOS图像传感器不能将常规的二维灰度图中提取三维特征。",
    answer: "false",
    category: "传感器"
  },
  
  // 题目75
  {
    id: 561,
    type: "true_false",
    question: "启动位置方位调整，机器人运动时，为避免死机，位置点允许其方位有些改变。",
    answer: "true",
    category: "操作"
  },
  
  // 题目76
  {
    id: 562,
    type: "true_false",
    question: "典型的机器视觉系统可以分为：图像采集部分、图像处理部分和运动控制部分。",
    answer: "true",
    category: "传感器"
  },
  
  // 题目77
  {
    id: 563,
    type: "true_false",
    question: "机器人视觉初步处理采用常规CCD或CMOS图像传感器不能将常规的二维灰度图中提取三维特征。",
    answer: "false",
    category: "传感器"
  },
  
  // 题目78
  {
    id: 564,
    type: "true_false",
    question: "RFID识别系统是一种接触式的自动识别技术。",
    answer: "false",
    category: "传感器"
  },
  
  // 题目79
  {
    id: 565,
    type: "true_false",
    question: "RFID的基本组成包括数据存储器、读写器、天线、通信模块。",
    answer: "true",
    category: "传感器"
  },
  
  // 题目80
  {
    id: 566,
    type: "true_false",
    question: "RFID标签已经广泛使用在汽车喷涂、数控加工、物流等方面。",
    answer: "true",
    category: "传感器"
  },
  
  // 题目81
  {
    id: 567,
    type: "true_false",
    question: "智能仓储通常配有入库机、出库机、查询机等诸多硬件设备。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目82
  {
    id: 568,
    type: "true_false",
    question: "机器人应用在仓储分拣流水线上能大大提高货物分拣的效率和准确性。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目83
  {
    id: 569,
    type: "true_false",
    question: "物资入库时，ERP系统根据物资信息向作业终端推送储位信息。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目84
  {
    id: 570,
    type: "true_false",
    question: "智能仓储通常配有入库机、出库机、查询机等诸多硬件设备。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目85
  {
    id: 571,
    type: "true_false",
    question: "机器人应用在仓储分拣流水线上能大大提高货物分拣的效率和准确性。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目86
  {
    id: 572,
    type: "true_false",
    question: "机器人不能与外部人机界面直接进行通信。",
    answer: "false",
    category: "通信技术"
  },
  
  // 题目87
  {
    id: 573,
    type: "true_false",
    question: "机器人外部通信人机界面是系统和用户之间进行交互和信息交换的媒介。",
    answer: "true",
    category: "通信技术"
  },
  
  // 题目88
  {
    id: 574,
    type: "true_false",
    question: "机器人末端执行器通常包括机械手爪、磁力吸盘、真空式吸盘。",
    answer: "true",
    category: "末端执行器"
  },
  
  // 题目89
  {
    id: 575,
    type: "true_false",
    question: "焊接机器人系统主要包括机器人和焊接设备两部分。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目90
  {
    id: 576,
    type: "true_false",
    question: "喷涂机器人的选型通常依赖于工件的大小。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目91
  {
    id: 577,
    type: "true_false",
    question: "焊接时，过大的Zone值会造成机器人运动时候的停顿和扰动。",
    answer: "false",
    category: "焊接技术"
  },
  
  // 题目92
  {
    id: 578,
    type: "true_false",
    question: "码垛结束命令，计算下一个堆叠点，不能改写码垛寄存器的值。",
    answer: "false",
    category: "编程"
  },
  
  // 题目93
  {
    id: 579,
    type: "true_false",
    question: "机器人只做平行于地面的上升、下降及平移和平面转动，称为平行移动。",
    answer: "true",
    category: "运动学"
  },
  
  // 题目94
  {
    id: 580,
    type: "true_false",
    question: "喷涂机器人通常需自带净化装置用于净化机器人本体内部。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目95
  {
    id: 581,
    type: "true_false",
    question: "焊接机器人进行焊接时需进行横向偏差矫正和垂直偏差矫正。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目96
  {
    id: 582,
    type: "true_false",
    question: "弧焊应用金属板与电极之间的电弧产生热量，溶合金属。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目97
  {
    id: 583,
    type: "true_false",
    question: "机器人只做平行于地面的上升、下降及平移和平面转动，称为平行移动。",
    answer: "true",
    category: "运动学"
  },
  
  // 题目98
  {
    id: 584,
    type: "true_false",
    question: "喷涂机器人通常需自带净化装置用于净化机器人本体内部。",
    answer: "true",
    category: "应用领域"
  },
  
  // 题目99
  {
    id: 585,
    type: "true_false",
    question: "焊接机器人进行焊接时需进行横向偏差矫正和垂直偏差矫正。",
    answer: "true",
    category: "焊接技术"
  },
  
  // 题目100
  {
    id: 586,
    type: "true_false",
    question: "雕刻机器人在雕刻过程速度越快、波动越大，雕刻的质量才能越好。",
    answer: "false",
    category: "应用领域"
  },
  
  // 题目101
  {
    id: 587,
    type: "true_false",
    question: "打磨机器人在打磨过程速度越快、波动越大，打磨的质量才能越好。",
    answer: "false",
    category: "应用领域"
  },
  
  // 题目102
  {
    id: 588,
    type: "true_false",
    question: "涂胶机器人在涂胶过程速度越快、波动越大，涂胶的质量才能越好。",
    answer: "false",
    category: "应用领域"
  },
  
  // 题目103
  {
    id: 589,
    type: "true_false",
    question: "焊接控制器只能补偿单一变量。",
    answer: "false",
    category: "焊接技术"
  },
  
  // 题目104
  {
    id: 590,
    type: "true_false",
    question: "如果对周边模型要求不是非常精细，可以用简单的等同实际大小的基本模型进行代替，从而节约仿真验证时间。",
    answer: "true",
    category: "仿真"
  },
  
  // 题目105
  {
    id: 591,
    type: "true_false",
    question: "可通过软件中仿真功能，虚拟验证机器人工作过程中可能出现的问题。",
    answer: "true",
    category: "仿真"
  },
  
  // 题目106
  {
    id: 592,
    type: "true_false",
    question: "使用键盘与鼠标的按键组合，调整工作站视图，实现平移的操作是：Ctrl+Shift+鼠标左键。",
    answer: "false",
    category: "仿真"
  },
  
  // 题目107
  {
    id: 593,
    type: "true_false",
    question: "在导入3D模型之前，自专业的制图软件中进行处理，可以在数模表面绘制相关曲线，导入仿真软件后，根据已有曲线直接转换成机器轨迹。",
    answer: "true",
    category: "仿真"
  },
  
  // 题目108
  {
    id: 594,
    type: "true_false",
    question: "在不影响仿真效果的前提下几何模型的搭建不可以进行简化。",
    answer: "false",
    category: "仿真"
  },
  
  // 题目109
  {
    id: 595,
    type: "true_false",
    question: "欲使得零件模型在图形区域看上去比较真实，应该采用着色模式显示模式。",
    answer: "true",
    category: "仿真"
  },
  
  // 题目110
  {
    id: 596,
    type: "true_false",
    question: "为了能够准确的捕捉对象特征，选中捕捉工具的“选择部件”和“捕捉末端”。",
    answer: "true",
    category: "仿真"
  },
  
  // 题目111
  {
    id: 597,
    type: "true_false",
    question: "在导入3D模型之前，自专业的制图软件中进行处理，可以在数模表面绘制相关曲线，导入仿真软件后，根据已有曲线直接转换成机器轨迹。",
    answer: "true",
    category: "仿真"
  },
  
  // 题目112
  {
    id: 598,
    type: "true_false",
    question: "在不影响仿真效果的前提下几何模型的搭建不可以进行简化。",
    answer: "false",
    category: "仿真"
  },
  
  // 题目113
  {
    id: 599,
    type: "true_false",
    question: "在仿真环境中，工作站系统布局中涉及的各模块可以随便摆放。",
    answer: "false",
    category: "仿真"
  },
  
  // 题目114
  {
    id: 600,
    type: "true_false",
    question: "试验台对工作站系统布局不产生影响，所以可以将其三维模型进行简化。",
    answer: "true",
    category: "仿真"
  },
  
  // 题目115
  {
    id: 601,
    type: "true_false",
    question: "为了避免工作站地面特征影响视线及捕捉，我们先将地面设定为隐藏。",
    answer: "true",
    category: "仿真"
  },
  
  // 题目116
  {
    id: 602,
    type: "true_false",
    question: "在仿真环境中，工作站系统布局中涉及的各模块可以随便摆放。",
    answer: "false",
    category: "仿真"
  },
  
  // 题目117
  {
    id: 603,
    type: "true_false",
    question: "试验台对工作站系统布局不产生影响，所以可以将其三维模型进行简化。",
    answer: "true",
    category: "仿真"
  },
  
  // 题目118
  {
    id: 604,
    type: "true_false",
    question: "模型布局只能通过手动粗略定位。",
    answer: "false",
    category: "仿真"
  },
  
  // 题目119
  {
    id: 605,
    type: "true_false",
    question: "仿真中的工作站系统布局不应该与真实工作站系统布局一致。",
    answer: "false",
    category: "仿真"
  },
  
  // 题目120
  {
    id: 606,
    type: "true_false",
    question: "工具安装过程中的安装原理：首先在工具法兰盘端创建本地坐标系框架，之后在工具末端创建工具坐标系框架。",
    answer: "true",
    category: "坐标系"
  },
  
  // 题目121
  {
    id: 607,
    type: "true_false",
    question: "模型布局只能通过手动粗略定位。",
    answer: "false",
    category: "仿真"
  },
  
  // 题目122
  {
    id: 608,
    type: "true_false",
    question: "仿真中的工作站系统布局不应该与真实工作站系统布局一致。",
    answer: "false",
    category: "仿真"
  },
  
  // 题目123
  {
    id: 609,
    type: "true_false",
    question: "在库卡机器人中，UltraVNC是客户端/服务器软件，允许你经由TCP/IP连线，控制远端的电脑。",
    answer: "true",
    category: "控制系统"
  },
  
  // 题目124
  {
    id: 610,
    type: "true_false",
    question: "工业机器人系统仿真中不需要传感器。",
    answer: "false",
    category: "传感器"
  },
  
  // 题目125
  {
    id: 611,
    type: "true_false",
    question: "在工具安装过程中，首先放置工具模型的位置，使其法兰盘所在面与大地坐标系正交，将工具法兰盘所在平面的上边缘与工作站大地坐标系的Y轴重合。",
    answer: "false",
    category: "坐标系"
  },
  
  // 题目126
  {
    id: 612,
    type: "true_false",
    question: "搭建标准六轴机器人的关节1的位置参数Rx,Ry,Rz是. -90° ， 0° ， 0°。",
    answer: "false",
    category: "运动学"
  },
  
  // 题目127
  {
    id: 613,
    type: "true_false",
    question: "库卡机器人程序目录下有一个程序名为BAS.SRC主要是用来设置机器人运动相关参数。",
    answer: "true",
    category: "编程"
  },
  
  // 题目128
  {
    id: 614,
    type: "true_false",
    question: "工业机器人系统仿真中不需要传感器。",
    answer: "false",
    category: "传感器"
  },
  
  // 题目129
  {
    id: 615,
    type: "true_false",
    question: "仿真环境中，工业机器人手臂有4个自由度。",
    answer: "false",
    category: "机器人基础"
  },
  
  // 题目130
  {
    id: 616,
    type: "true_false",
    question: "无论简单或复杂的机器人动作，都需要先设计流程图，再进行编程。",
    answer: "false",
    category: "编程"
  },
  
  // 题目131
  {
    id: 617,
    type: "true_false",
    question: "仿真中任何一个刚体在仿真空间运动具有5个自由度。",
    answer: "false",
    category: "运动学"
  },
  
  // 题目132
  {
    id: 618,
    type: "true_false",
    question: "仿真环境中，工业机器人手臂有4个自由度。",
    answer: "false",
    category: "机器人基础"
  },
  
  // 题目133
  {
    id: 619,
    type: "true_false",
    question: "无论简单或复杂的机器人动作，都需要先设计流程图，再进行编程。",
    answer: "false",
    category: "编程"
  },
  
  // 题目134
  {
    id: 620,
    type: "true_false",
    question: "生产中“没有测试，就没有新产品”。",
    answer: "true",
    category: "测试"
  },
  
  // 题目135
  {
    id: 621,
    type: "true_false",
    question: "测试环境是指为了完成软件测试工作所必需的计算机硬件、软件、网络设备、历史数据的总称。",
    answer: "true",
    category: "测试"
  },
  
  // 题目136
  {
    id: 622,
    type: "true_false",
    question: "工业机器人由3个大部分和6个子系统组成。3大部分是机械部分、传感部分和控制部分。",
    answer: "true",
    category: "机器人基础"
  },
  
  // 题目137
  {
    id: 623,
    type: "true_false",
    question: "根据工业机器人性能参数要求配置测试环境，搭建驱动系统。",
    answer: "false",
    category: "测试"
  },
  
  // 题目138
  {
    id: 624,
    type: "true_false",
    question: "工业机器人标定与测试中需根据工业机器人性能参数要求培支测试环境，搭建测试系统。",
    answer: "true",
    category: "测试"
  },
  
  // 题目139
  {
    id: 625,
    type: "true_false",
    question: "生产中“没有测试，就没有新产品”",
    answer: "true",
    category: "测试"
  },
  
  // 题目140
  {
    id: 626,
    type: "true_false",
    question: "测试环境是指为了完成软件测试工作所必需的计算机硬件、软件、网络设备、历史数据的总称。",
    answer: "true",
    category: "测试"
  },
  
  // 题目141
  {
    id: 627,
    type: "true_false",
    question: "工业机器人标定与测试中需根据工业机器人性能参数要求培支测试环境，搭建测试系统。",
    answer: "true",
    category: "测试"
  },
  
  // 题目142
  {
    id: 628,
    type: "true_false",
    question: "连杆两端分别与主动和从动构件铰接以传递运动和力。",
    answer: "true",
    category: "机械原理"
  },
  
  // 题目143
  {
    id: 629,
    type: "true_false",
    question: "旋转关节由直线运动机构和在整个运动范围内起直线导向作用的直线导轨部分组成。",
    answer: "false",
    category: "机械原理"
  },
  
  // 题目144
  {
    id: 630,
    type: "true_false",
    question: "零点是机器人坐标系的基准。",
    answer: "true",
    category: "校准"
  },
  
  // 题目145
  {
    id: 631,
    type: "true_false",
    question: "自动路径中反转的定义为轨迹运行方向直反，默认为顺时针运行，反转后则为逆时针运行。",
    answer: "true",
    category: "编程"
  },
  
  // 题目146
  {
    id: 632,
    type: "true_false",
    question: "连杆两端分别与主动和从动构件铰接以传递运动和力。",
    answer: "true",
    category: "机械原理"
  },
  
  // 题目147
  {
    id: 633,
    type: "true_false",
    question: "旋转关节由直线运动机构和在整个运动范围内起直线导向作用的直线导轨部分组成。",
    answer: "false",
    category: "机械原理"
  },
  
  // 题目148
  {
    id: 634,
    type: "true_false",
    question: "零点是机器人坐标系的基准。",
    answer: "true",
    category: "校准"
  },
  
  // 题目149
  {
    id: 635,
    type: "true_false",
    question: "定位精度对于非重复型的任务非常重要，与机器人制造工艺、驱动器的分辨率和反馈装置有关。",
    answer: "true",
    category: "性能参数"
  },
  
  // 题目150
  {
    id: 636,
    type: "true_false",
    question: "一般情况下，重复定位精度是呈指数分布的。",
    answer: "false",
    category: "性能参数"
  },
  
  // 题目151
  {
    id: 637,
    type: "true_false",
    question: "工作空间指机器人手腕参考点或末端操作器安装点（不包含末端操作器）所能达到的所有空间区域，也包括末端执行器本身所能到达的区域。",
    answer: "false",
    category: "工作空间"
  },
  
  // 题目152
  {
    id: 638,
    type: "true_false",
    question: "自动路径中参照面的定义为生成的目标点X轴方向与选定表面处于垂直状态。",
    answer: "false",
    category: "编程"
  },
  
  // 题目153
  {
    id: 639,
    type: "true_false",
    question: "定位精度对于非重复型的任务非常重要，与机器人制造工艺、驱动器的分辨率和反馈装置有关。",
    answer: "true",
    category: "性能参数"
  },
  
  // 题目154
  {
    id: 640,
    type: "true_false",
    question: "一般情况下，重复定位精度是呈指数分布的。",
    answer: "false",
    category: "性能参数"
  },
  
  // 题目155
  {
    id: 641,
    type: "true_false",
    question: "工作空间指机器人手腕参考点或末端操作器安装点（不包含末端操作器）所能达到的所有空间区域，也包括末端执行器本身所能到达的区域。",
    answer: "false",
    category: "工作空间"
  },
  
  // 题目156
  {
    id: 642,
    type: "true_false",
    question: "在测试分析的基础上，进行测试后需要对测试的结果以及测试的数据等加以记录和分析总结。",
    answer: "true",
    category: "测试"
  },
  
  // 题目157
  {
    id: 643,
    type: "true_false",
    question: "测试是对工业机器人离线编程性能的一个总的分析和对认识不足的说明。为以后的优化升级提供了丰富的经验。",
    answer: "true",
    category: "测试"
  },
  
  // 题目158
  {
    id: 644,
    type: "true_false",
    question: "工业机器人离线编程测试基本达到用户要求的预期目标，但还需要完善和改进，可先暂时交付用户使用。",
    answer: "false",
    category: "测试"
  },
  
  // 题目159
  {
    id: 645,
    type: "true_false",
    question: "在修改碰撞中：碰撞检测设定对话框中，接近丢失的定义为选择的两组对象之间的距离大于该数值时，则颜色提示。",
    answer: "false",
    category: "仿真"
  },
  
  // 题目160
  {
    id: 646,
    type: "true_false",
    question: "机器人的关节轴运动范围不超过360度。",
    answer: "false",
    category: "机器人基础"
  },
  
  // 题目161
  {
    id: 647,
    type: "true_false",
    question: "在测试分析的基础上，进行测试后需要对测试的结果以及测试的数据等加以记录和分析总结。",
    answer: "true",
    category: "测试"
  },
  
  // 题目162
  {
    id: 648,
    type: "true_false",
    question: "测试是对工业机器人离线编程性能的一个总的分析和对认识不足的说明，为以后的优化升级提供了丰富的经验。",
    answer: "true",
    category: "测试"
  },
  
  // 题目163
  {
    id: 649,
    type: "true_false",
    question: "工业机器人离线编程测试基本达到用户要求的预期目标，但还需要完善和改进，可先暂时交付用户使用。",
    answer: "false",
    category: "测试"
  },
  
  // 题目164
  {
    id: 650,
    type: "true_false",
    question: "工作、职业与事业其实就是一个概念。",
    answer: "false",
    category: "职业素养"
  },
  
  // 题目165
  {
    id: 651,
    type: "true_false",
    question: "只要在学校学好一门专业，就可以一辈子不需要再进行学习。",
    answer: "false",
    category: "职业素养"
  },
  
  // 题目166
  {
    id: 652,
    type: "true_false",
    question: "应聘信是在不知道用人单位是否需要聘用人员的情况下，向用人单位介绍自己的基本情况，标明自己就业意向的一种书信。",
    answer: "false",
    category: "职业素养"
  },
  
  // 题目167
  {
    id: 653,
    type: "true_false",
    question: "计划不如变化快，在自我管理中，可以先做事情，不必做好计划再去执行。",
    answer: "false",
    category: "职业素养"
  },
  
  // 题目168
  {
    id: 654,
    type: "true_false",
    question: "自我的发展只有自己能把握，做好自己的主人，不能屈服于名誉，更不能自卑。",
    answer: "true",
    category: "职业素养"
  },
  
  // 题目169
  {
    id: 655,
    type: "true_false",
    question: "依法治教的主体就是各级行政机关。",
    answer: "false",
    category: "职业素养"
  },
  
  // 题目170
  {
    id: 656,
    type: "true_false",
    question: "由于职业的规定性，教师的道德人格与一般道德人格有显著的不同。",
    answer: "true",
    category: "职业素养"
  },
  
  // 题目171
  {
    id: 657,
    type: "true_false",
    question: "伦理学与心理学对人格的解释是一样的。",
    answer: "false",
    category: "职业素养"
  },
  
  // 题目172
  {
    id: 658,
    type: "true_false",
    question: "孔子说：“少成若天性，习惯如自然”。可见，早期家庭教育是学校教育的基础。",
    answer: "true",
    category: "职业素养"
  },
  
  // 题目173
  {
    id: 659,
    type: "true_false",
    question: "团结协作与相互激励公平竞争是矛盾的。",
    answer: "false",
    category: "职业素养"
  },
  
  // 题目174
  {
    id: 660,
    type: "true_false",
    question: "主动是一种态度，反映着一个人对待问题，对待工作的行为趋向和价值取向。",
    answer: "true",
    category: "职业素养"
  }
];