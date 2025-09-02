// 工业机器人应用编程题库 (HSR中级)
export const questionBank = [
  // 单选题部分
  {
    id: 1,
    type: "single_choice",
    question: "华数三型系统的MODBUS通讯下作为客户端，寄存器可调用的设置范围为（）。",
    options: {
      A: "0-200",
      B: "1-999", 
      C: "0-63",
      D: "没有限制，随意设定"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 2,
    type: "single_choice",
    question: "华数机器人HCNC上的IO提供（）个数字输入信号和（）个数字输出信号。",
    options: {
      A: "32；32",
      B: "16；16",
      C: "32；16", 
      D: "16；32"
    },
    answer: "A",
    category: "硬件配置"
  },
  {
    id: 3,
    type: "single_choice",
    question: "华数的IO板是通过（）总线与IPC建立通讯。",
    options: {
      A: "Profibus",
      B: "NCUC",
      C: "Profinet",
      D: "Internet"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 4,
    type: "single_choice",
    question: "控制面板中哪个选项不属于机器人手动示教操作模式（）",
    options: {
      A: "手动T1模式",
      B: "单步模式",
      C: "增量模式",
      D: "外部模式"
    },
    answer: "D",
    category: "操作模式"
  },
  {
    id: 5,
    type: "single_choice",
    question: "华数机器人的运行模式有四种，其中属于手动高速模式的是（）",
    options: {
      A: "自动模式",
      B: "外部模式",
      C: "T1模式",
      D: "T2模式"
    },
    answer: "D",
    category: "操作模式"
  },
  {
    id: 6,
    type: "single_choice",
    question: "当我们想要切换机器人运行模式时，我们可以通过（）进行设置。",
    options: {
      A: "辅助按钮",
      B: "主菜单按键",
      C: "钥匙开关",
      D: "急停按键"
    },
    answer: "C",
    category: "操作模式"
  },
  {
    id: 7,
    type: "single_choice",
    question: "在程序切换坐标系时，华数三型系统默认定义的系统坐标系编号为（）",
    options: {
      A: "1",
      B: "-1",
      C: "2",
      D: "-2"
    },
    answer: "B",
    category: "坐标系统"
  },
  {
    id: 8,
    type: "single_choice",
    question: "变量列表用于存在不同类型的寄存器数据，其中JR表示（）",
    options: {
      A: "工具坐标系变量",
      B: "数值寄存器",
      C: "关节坐标寄存器",
      D: "笛卡尔坐标寄存器"
    },
    answer: "C",
    category: "寄存器系统"
  },
  {
    id: 9,
    type: "single_choice",
    question: "变量列表用于存在不同类型的寄存器数据，其中LR表示（）",
    options: {
      A: "工具坐标系变量",
      B: "数值寄存器",
      C: "关节坐标寄存器",
      D: "笛卡尔坐标寄存器"
    },
    answer: "D",
    category: "寄存器系统"
  },
  {
    id: 10,
    type: "single_choice",
    question: "变量列表用于存在不同类型的寄存器数据，其中JR[1][6]表示（）",
    options: {
      A: "工具坐标系变量",
      B: "外部轴关节变量",
      C: "关节坐标寄存器",
      D: "笛卡尔坐标寄存器"
    },
    answer: "B",
    category: "寄存器系统"
  },
  {
    id: 11,
    type: "single_choice",
    question: "下列关于HSR-612工业机器人工具坐标系描述错误的是（）。",
    options: {
      A: "默认0号工具坐标系位于J4、J5、J6关节轴线共同的交点处",
      B: "默认0号工具坐标系的Z轴与J6关节轴线重合",
      C: "默认0号工具坐标系X轴与J5与J6关节轴线的公垂线重合",
      D: "默认0号工具坐标系Y轴按左手螺旋法则确定"
    },
    answer: "D",
    category: "坐标系统"
  },
  {
    id: 12,
    type: "single_choice",
    question: "在示教器数字I/O控制界面，下列操作（）不能执行。",
    options: {
      A: "切换",
      B: "值",
      C: "说明",
      D: "删除"
    },
    answer: "D",
    category: "IO控制"
  },
  {
    id: 13,
    type: "single_choice",
    question: "华数工业机器人示教器的四个辅助按键可以配置（）信号，并对其进行强置。",
    options: {
      A: "数字量输入",
      B: "数字量输出",
      C: "模拟量输入",
      D: "模拟量输出"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 14,
    type: "single_choice",
    question: "示教器编程时，下列表示华数机器人运动速度的选项为",
    options: {
      A: "BLENDINGFACTOR=0",
      B: "vel=1000",
      C: "tool2",
      D: "default"
    },
    answer: "B",
    category: "编程基础"
  },
  {
    id: 15,
    type: "single_choice",
    question: "工业机器人的速度单位是（",
    options: {
      A: "mm/s",
      B: "Km/s",
      C: "cm/s",
      D: "mm/min"
    },
    answer: "A",
    category: "基础知识"
  },
  {
    id: 16,
    type: "single_choice",
    question: "工业机器人的制动器通常是按照（）方式工作。",
    options: {
      A: "通电抱闸",
      B: "有效抱闸",
      C: "无效放闸",
      D: "失效抱闸"
    },
    answer: "D",
    category: "机械系统"
  },
  {
    id: 17,
    type: "single_choice",
    question: "工业机器人每次通电时必需校准的编码器是（）",
    options: {
      A: "相对型光电编码器",
      B: "绝对型光电编码器",
      C: "测速发电机",
      D: "旋转编码器"
    },
    answer: "A",
    category: "传感器技术"
  },
  {
    id: 18,
    type: "single_choice",
    question: "机器人手臂或手部安装点所能达到的所有空间区域称为（）",
    options: {
      A: "自由度",
      B: "灵活空间",
      C: "最大空间",
      D: "最小空间"
    },
    answer: "C",
    category: "基础知识"
  },
  {
    id: 19,
    type: "single_choice",
    question: "工作范围是指机器人（）或手腕中心所能到达的点的集合。",
    options: {
      A: "机械手",
      B: "手臂末端",
      C: "手臂",
      D: "行走部分"
    },
    answer: "B",
    category: "基础知识"
  },
  {
    id: 20,
    type: "single_choice",
    question: "直角坐标机器人的工作范围是（）形状；",
    options: {
      A: "长方形",
      B: "圆柱形",
      C: "锥形",
      D: "三角形"
    },
    answer: "A",
    category: "机器人类型"
  },
  {
    id: 21,
    type: "single_choice",
    question: "圆柱坐标机器人的工作范围是（）形状。",
    options: {
      A: "长方形",
      B: "圆柱形",
      C: "锥形",
      D: "三角形"
    },
    answer: "B",
    category: "机器人类型"
  },
  {
    id: 22,
    type: "single_choice",
    question: "工业机器人示教器哪个窗口可以看到故障信息（）。",
    options: {
      A: "日志文件管理",
      B: "调整",
      C: "运行日志",
      D: "配置"
    },
    answer: "C",
    category: "故障诊断"
  },
  {
    id: 23,
    type: "single_choice",
    question: "哪个窗口可以定义机器人的输入和输出（）。",
    options: {
      A: "输入/输出端",
      B: "变量列表",
      C: "调整",
      D: "示教器配置"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 24,
    type: "single_choice",
    question: "华数机器人报警语言在系统的（）中进行设置。",
    options: {
      A: "报警语言",
      B: "关闭系统",
      C: "清理系统",
      D: "系统升级"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 25,
    type: "single_choice",
    question: "谐波传动的缺点是（",
    options: {
      A: "扭转刚度低",
      B: "传动侧隙小",
      C: "惯量低",
      D: "精度高"
    },
    answer: "A",
    category: "传动系统"
  },
  {
    id: 26,
    type: "single_choice",
    question: "设置工业机器人参考点时，在手动模式下控制机器人各关节轴移动至标准零点姿态，然后在校准界面中输入各关节轴的零点值，下列数值为HSR-603正确的零点值的是（）。",
    options: {
      A: "0,90,0,0，-90,0",
      B: "0,-90,180,0,90,0",
      C: "0,90,90,90，-90,90",
      D: "90,0,0,0，-90,0"
    },
    answer: "B",
    category: "校准标定"
  },
  {
    id: 27,
    type: "single_choice",
    question: "对于6轴工业机器人，哪些关节的转动主要实现位置的改变（）",
    options: {
      A: "1、2、3轴",
      B: "2、3、4轴",
      C: "3、4、5轴",
      D: "4、5、6轴"
    },
    answer: "A",
    category: "基础知识"
  },
  {
    id: 28,
    type: "single_choice",
    question: "机器人零点丢失后会有什么后果？（）",
    options: {
      A: "仅能单轴运行",
      B: "仅能在规定路径上运行",
      C: "仅能用专用装置驱动",
      D: "机器人不能运动"
    },
    answer: "A",
    category: "校准标定"
  },
  {
    id: 29,
    type: "single_choice",
    question: "工业机器人现场示教时，示教器应（）。",
    options: {
      A: "专人保管",
      B: "随身携带",
      C: "放置在专用支架上",
      D: "放置在设备上"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 30,
    type: "single_choice",
    question: "工业机器人系统时间在（）界面中可以查看。",
    options: {
      A: "手动操纵",
      B: "左侧状态栏",
      C: "系统信息",
      D: "程序数据"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 31,
    type: "single_choice",
    question: "下列（）情况下，一般不需要更新机器人各轴转数计数器",
    options: {
      A: "更换伺服电机转数计数器电池后",
      B: "断电后，机器人的关节轴发生了移动",
      C: "转数计数器与测量板之间断开以后",
      D: "机器人首次开机后"
    },
    answer: "D",
    category: "校准标定"
  },
  {
    id: 32,
    type: "single_choice",
    question: "可以在（）查看机器人发生的报警信息。",
    options: {
      A: "运行日志",
      B: "系统信息",
      C: "控制面板",
      D: "FlexPendant资源管理器"
    },
    answer: "A",
    category: "故障诊断"
  },
  {
    id: 33,
    type: "single_choice",
    question: "在以下（）情况下必须对机器人进行校准，否则不能正常运行。",
    options: {
      A: "机器人调试投入运行时",
      B: "机器人发送碰撞后",
      C: "更换电机或者编码器时",
      D: "以上都有"
    },
    answer: "D",
    category: "校准标定"
  },
  {
    id: 34,
    type: "single_choice",
    question: "机器人可以通过示教器设置中（）更改示教器的亮度。",
    options: {
      A: "外观",
      B: "FlexPendant",
      C: "ProgKeys",
      D: "配置"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 35,
    type: "single_choice",
    question: "机器人可以通过示教器设置中（）更改示教器的语言。",
    options: {
      A: "外观",
      B: "监控",
      C: "语言",
      D: "配置"
    },
    answer: "C",
    category: "系统设置"
  },
  {
    id: 36,
    type: "single_choice",
    question: "示教盒的作用不包括（）。",
    options: {
      A: "点动机器人",
      B: "离线编程",
      C: "试运行程序",
      D: "查阅机器人状态"
    },
    answer: "B",
    category: "示教操作"
  },
  {
    id: 37,
    type: "single_choice",
    question: "机器人在各轴的转数计数器更新操作时，每台机器人的校准参数（）。",
    options: {
      A: "同型号相同",
      B: "不同型号不同",
      C: "都不相同",
      D: "同批次相同"
    },
    answer: "C",
    category: "校准标定"
  },
  {
    id: 38,
    type: "single_choice",
    question: "机器人示教器状态栏中显示的信息不包括（）。",
    options: {
      A: "机器人状态",
      B: "机器人系统信息",
      C: "机器人程序运行状态",
      D: "机器人事件信息"
    },
    answer: "D",
    category: "示教操作"
  },
  {
    id: 39,
    type: "single_choice",
    question: "示教器使能器按钮第一档按下，机器人电机将处于（）。",
    options: {
      A: "电动机开启状态",
      B: "电动机停止状态",
      C: "电动机保护状态",
      D: "电动机锁定状态"
    },
    answer: "A",
    category: "示教操作"
  },
  {
    id: 40,
    type: "single_choice",
    question: "在重定位操作中，一般参考（）。",
    options: {
      A: "基坐标系",
      B: "工件坐标系",
      C: "世界坐标系",
      D: "工具坐标系"
    },
    answer: "D",
    category: "坐标系统"
  },
  {
    id: 41,
    type: "single_choice",
    question: "在机器人的状态栏显示中不能查看的信息是（）。",
    options: {
      A: "I/O信息",
      B: "机器人状态",
      C: "系统信息",
      D: "电机状态"
    },
    answer: "A",
    category: "示教操作"
  },
  {
    id: 42,
    type: "single_choice",
    question: "示教器不具备的功能是（）。",
    options: {
      A: "手动操纵",
      B: "自动操纵",
      C: "程序编写",
      D: "参数配置"
    },
    answer: "B",
    category: "示教操作"
  },
  {
    id: 43,
    type: "single_choice",
    question: "工业机器人备份数据具有（）。",
    options: {
      A: "唯一性",
      B: "通用性",
      C: "标准性",
      D: "统一性"
    },
    answer: "A",
    category: "数据管理"
  },
  {
    id: 44,
    type: "single_choice",
    question: "示教器使能按钮是为保证操作人员（）而设置的。",
    options: {
      A: "舒适",
      B: "便捷",
      C: "安全",
      D: "保密"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 45,
    type: "single_choice",
    question: "HSR- JR603机器人UT变量是（）。",
    options: {
      A: "工具坐标系变量",
      B: "工件坐标系变量",
      C: "关节坐标寄存器",
      D: "笛卡尔坐标寄存器"
    },
    answer: "A",
    category: "寄存器系统"
  },
  {
    id: 46,
    type: "single_choice",
    question: "HSR- JR603机器人UF变量是（）。",
    options: {
      A: "工具坐标系变量",
      B: "工件坐标系变量",
      C: "关节坐标寄存器",
      D: "笛卡尔坐标寄存器"
    },
    answer: "B",
    category: "寄存器系统"
  },
  {
    id: 47,
    type: "single_choice",
    question: "HSR-JR603 机器人 UF 变量个数（）。",
    options: {
      A: "8",
      B: "16",
      C: "32",
      D: "64"
    },
    answer: "B",
    category: "寄存器系统"
  },
  {
    id: 48,
    type: "single_choice",
    question: "HSR-JR603 机器人 UT 变量个数（）。",
    options: {
      A: "8",
      B: "16",
      C: "32",
      D: "64"
    },
    answer: "B",
    category: "寄存器系统"
  },
  {
    id: 49,
    type: "single_choice",
    question: "在增量模式下使用单轴按键持续 5 秒以上操作，机器人的移动速率为（）。",
    options: {
      A: "1 厘米/S",
      B: "10 厘米/S",
      C: "1 步/次",
      D: "10 步/次"
    },
    answer: "C",
    category: "示教操作"
  },
  {
    id: 50,
    type: "single_choice",
    question: "手动示教机器人需要移动位置时，通常选择（）。",
    options: {
      A: "单轴运动",
      B: "线性运动",
      C: "重定位运动",
      D: "旋转运动"
    },
    answer: "B",
    category: "示教操作"
  },
  {
    id: 51,
    type: "single_choice",
    question: "手动示教机器人需要变换姿态时，通常选择（）。",
    options: {
      A: "单轴运动",
      B: "线性运动",
      C: "重定位运动",
      D: "旋转运动"
    },
    answer: "C",
    category: "示教操作"
  },
  {
    id: 52,
    type: "single_choice",
    question: "机器人的手动操纵在重定位运动中，参考（）旋转工具姿态。",
    options: {
      A: "基座中心点",
      B: "法兰盘的中心",
      C: "重心",
      D: "当前选中的工具坐标 TCP 点"
    },
    answer: "D",
    category: "示教操作"
  },
  {
    id: 53,
    type: "single_choice",
    question: "以下哪点不是示教盒示教的缺点（）",
    options: {
      A: "难以获得高控制精度",
      B: "难以获得高速度",
      C: "难以与其他设备同步",
      D: "不易与传感器信息相配合"
    },
    answer: "B",
    category: "示教操作"
  },
  {
    id: 54,
    type: "single_choice",
    question: "使用示教器按下使能按钮，点击进入开启状态，可以在（）中确认。",
    options: {
      A: "状态栏",
      B: "事件栏",
      C: "数据栏",
      D: "任务栏"
    },
    answer: "A",
    category: "示教操作"
  },
  {
    id: 55,
    type: "single_choice",
    question: "手动快捷键按钮不能实现快速切换的是（）。",
    options: {
      A: "起弧点火/收弧",
      B: "机器人轴/外轴",
      C: "工艺包界面/编程界面",
      D: "夹具松开/夹具夹紧"
    },
    answer: "B",
    category: "示教操作"
  },
  {
    id: 56,
    type: "single_choice",
    question: "六轴机器人在进行转速计数器更新时，各关节运动到原点的合理顺序是（）。1.1轴；2.2轴；3.3轴；4.4轴；5.5轴；6.6轴。",
    options: {
      A: "1-2-3-4-5-6",
      B: "6-5-4-3-2-1",
      C: "1-3-5-2-4-6",
      D: "4-5-6-1-2-3"
    },
    answer: "D",
    category: "校准标定"
  },
  {
    id: 57,
    type: "single_choice",
    question: "进行 I/O 信号的监控与操作时，进入输入输出界面后，通过（）查看对应的 IO 信号实际输出状态。",
    options: {
      A: "值",
      B: "变量",
      C: "说明",
      D: "状态"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 58,
    type: "single_choice",
    question: "在机器人直接导入程序时需要在操作界面中选择（）打开。",
    options: {
      A: "输入输出",
      B: "程序编辑器",
      C: "程序数据",
      D: "控制面板"
    },
    answer: "B",
    category: "编程基础"
  },
  {
    id: 59,
    type: "single_choice",
    question: "示教器提供日志功能，可查看产生的运行日志。下列（）是日志信息。",
    options: {
      A: "提示信息",
      B: "警告信息",
      C: "错误信息",
      D: "以上全部是"
    },
    answer: "D",
    category: "故障诊断"
  },
  {
    id: 60,
    type: "single_choice",
    question: "示教器提供用户保存当前系统内部的寄存器至U盘的功能，该功能的按键为（）。",
    options: {
      A: "发送",
      B: "获取",
      C: "保存",
      D: "备份"
    },
    answer: "B",
    category: "数据管理"
  },
  {
    id: 61,
    type: "single_choice",
    question: "示教器操作面板上提供了（）个辅助按键，用于用户自定义按键操作，可配置按键按下后输出的指令。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "D",
    category: "示教操作"
  },
  {
    id: 62,
    type: "single_choice",
    question: "对有效载荷数据进行设定时，设定参数不包括（）。",
    options: {
      A: "有效载荷质量",
      B: "有效载荷尺寸",
      C: "有效载荷重心",
      D: "力矩轴方向"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 63,
    type: "single_choice",
    question: "机器人第六轴法兰盘更换新的工具时，需要新建（）。",
    options: {
      A: "工具坐标",
      B: "工件坐标",
      C: "世界坐标",
      D: "基坐标"
    },
    answer: "A",
    category: "坐标系统"
  },
  {
    id: 64,
    type: "single_choice",
    question: "在示教器上可以修改以下（）参数。",
    options: {
      A: "第一轴的最大速度",
      B: "第一轴的最大加速度",
      C: "第一轴的最大减速度",
      D: "以上都不可以"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 65,
    type: "single_choice",
    question: "焊接变位机一般由工作台（）和（）组成。",
    options: {
      A: "回转机构、翻转机构",
      B: "回转机构、齿轮机构",
      C: "传动机构、翻转机构",
      D: "齿轮机构、滚珠丝杠机构"
    },
    answer: "A",
    category: "焊接系统"
  },
  {
    id: 66,
    type: "single_choice",
    question: "机器人焊接作业时，焊接设备不包括（）。",
    options: {
      A: "焊接电源",
      B: "送丝机",
      C: "焊枪",
      D: "安全围栏"
    },
    answer: "D",
    category: "焊接系统"
  },
  {
    id: 67,
    type: "single_choice",
    question: "焊接电源应通过（）与被焊工件连接。",
    options: {
      A: "电缆",
      B: "接地电缆",
      C: "工作台",
      D: "数据线"
    },
    answer: "B",
    category: "焊接系统"
  },
  {
    id: 68,
    type: "single_choice",
    question: "弧焊机器人各单元系统连接完成后要根据工艺要求，调整（）、气瓶压力及焊丝盘的制动力。",
    options: {
      A: "电源电压",
      B: "送丝机轮",
      C: "数字通信",
      D: "模拟通信"
    },
    answer: "B",
    category: "焊接系统"
  },
  {
    id: 69,
    type: "single_choice",
    question: "配置水冷焊枪时，焊机的出水口和进水口应连接送丝机的（）。",
    options: {
      A: "没有要求",
      B: "不需要连接",
      C: "出水口和进水口",
      D: "进水口和出水口"
    },
    answer: "C",
    category: "焊接系统"
  },
  {
    id: 70,
    type: "single_choice",
    question: "为保证焊接质量，通常焊接机器人系统配置（）。",
    options: {
      A: "视觉系统",
      B: "电压监控",
      C: "烟雾净化系统",
      D: "剪丝清洗设备"
    },
    answer: "D",
    category: "焊接系统"
  },
  {
    id: 71,
    type: "single_choice",
    question: "工具主动型打磨机器人是通过机器人末端执行器夹持（）进行工作的。",
    options: {
      A: "打磨工具",
      B: "打磨工件",
      C: "工作平台",
      D: "变位机"
    },
    answer: "A",
    category: "打磨系统"
  },
  {
    id: 72,
    type: "single_choice",
    question: "工件主动型打磨机器人是通过机器人末端执行器夹持（）进行工作的。",
    options: {
      A: "打磨工具",
      B: "打磨工件",
      C: "工作平台",
      D: "变位机"
    },
    answer: "B",
    category: "打磨系统"
  },
  {
    id: 73,
    type: "single_choice",
    question: "雕刻机器人适合加工的材料不包括（）。",
    options: {
      A: "石材",
      B: "木材",
      C: "铝合金",
      D: "不锈钢"
    },
    answer: "D",
    category: "加工应用"
  },
  {
    id: 74,
    type: "single_choice",
    question: "机器人焊接设备安装时要按照（）进行。",
    options: {
      A: "先电气后机械",
      B: "先机械后电气",
      C: "工艺要求",
      D: "先简单后复杂"
    },
    answer: "C",
    category: "焊接系统"
  },
  {
    id: 75,
    type: "single_choice",
    question: "小型工件适合采用机器人（）方式打磨。",
    options: {
      A: "工具主动性",
      B: "工件主动型",
      C: "多台协作",
      D: "变位机配合"
    },
    answer: "B",
    category: "打磨系统"
  },
  {
    id: 76,
    type: "single_choice",
    question: "焊接机器人送丝轮压力调节目的是（）。",
    options: {
      A: "快速出丝",
      B: "保证出丝",
      C: "不打滑不损坏",
      D: "过快出丝"
    },
    answer: "C",
    category: "焊接系统"
  },
  {
    id: 77,
    type: "single_choice",
    question: "送丝机出丝速度是通过（）来调节的。",
    options: {
      A: "电压调节旋钮",
      B: "电流调节旋钮",
      C: "机器人移动速度",
      D: "送丝轮压力"
    },
    answer: "B",
    category: "焊接系统"
  },
  {
    id: 78,
    type: "single_choice",
    question: "工件抛光前一般要经过（）处理。",
    options: {
      A: "切削",
      B: "冲压",
      C: "去毛刺",
      D: "打磨"
    },
    answer: "D",
    category: "打磨系统"
  },
  {
    id: 79,
    type: "single_choice",
    question: "焊接变位机的类型不包括（）。",
    options: {
      A: "伸臂式",
      B: "座式",
      C: "轨道式",
      D: "双座式"
    },
    answer: "C",
    category: "焊接系统"
  },
  {
    id: 80,
    type: "single_choice",
    question: "工件主动型打磨机器人夹具安装必须满足（）、不能影响机器人运动。",
    options: {
      A: "工件加紧",
      B: "速度快",
      C: "成本低",
      D: "使用方便"
    },
    answer: "A",
    category: "打磨系统"
  },
  {
    id: 81,
    type: "single_choice",
    question: "为了获得非常平稳的加工过程，希望作业启动（位置为零）时：（）。",
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
    id: 82,
    type: "single_choice",
    question: "操作机手持粉笔在黑板上写字，在（）方向只有力的约束而无速度约束",
    options: {
      A: "X轴",
      B: "Y轴",
      C: "Z轴",
      D: "R轴"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 83,
    type: "single_choice",
    question: "在汽车焊接生产线上引入机器人的主要原因不包括哪一条。（）",
    options: {
      A: "可以提高汽车产量",
      B: "适应汽车产品的多样化",
      C: "可以提高产品质量",
      D: "能提高生产率"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 84,
    type: "single_choice",
    question: "工业机器人在激光切割、打磨、焊接等应用中，经常对不规则的曲线进行处理，通常采用（）进行编程。",
    options: {
      A: "在线描点法、离线示教法",
      B: "在线拖动法、离线图形法",
      C: "在线图形法、离线图形法",
      D: "在线描点法、离线图形法"
    },
    answer: "D",
    category: "编程技术"
  },
  {
    id: 85,
    type: "single_choice",
    question: "为避免工具末端与所加工的表面碰撞，在创建工具坐标框架时，一般要沿（）正方向偏移TCP。",
    options: {
      A: "X轴",
      B: "Y轴",
      C: "Z轴",
      D: "法兰盘表面"
    },
    answer: "C",
    category: "坐标系统"
  },
  {
    id: 86,
    type: "single_choice",
    question: "在弧焊作业中，焊枪的尖端沿着预设的焊枪轨迹运动，并不断填充金属以形成焊缝。因此移动过程中速度的（）是两项重要指标。",
    options: {
      A: "平稳性、定位精度",
      B: "平稳性、重复定位精度",
      C: "无极调节性、定位精度",
      D: "无极调节性、重复定位精度"
    },
    answer: "B",
    category: "焊接系统"
  },
  {
    id: 87,
    type: "single_choice",
    question: "机器人焊接中产生的飞溅，会逐渐粘在焊枪的喷嘴和导电嘴上，影响焊接质量、送丝的稳定性。因此喷嘴和导电嘴需要进行定期（）。",
    options: {
      A: "更换",
      B: "维修",
      C: "清理",
      D: "润滑"
    },
    answer: "C",
    category: "焊接系统"
  },
  {
    id: 88,
    type: "single_choice",
    question: "在焊接机器人系统中，需要设置焊接数据，下列（）是需要设置的。",
    options: {
      A: "焊接电流",
      B: "焊接速度",
      C: "焊接电压",
      D: "以上都是"
    },
    answer: "D",
    category: "焊接系统"
  },
  {
    id: 89,
    type: "single_choice",
    question: "在机器人焊接程序中，焊接起始通常以（）作为起始语句。",
    options: {
      A: "起弧",
      B: "加热",
      C: "焊接",
      D: "收弧"
    },
    answer: "A",
    category: "焊接编程"
  },
  {
    id: 90,
    type: "single_choice",
    question: "在焊接系统中，国际单位制的焊接速度是（）",
    options: {
      A: "mm/s",
      B: "dm/s",
      C: "cm/s",
      D: "m/s"
    },
    answer: "A",
    category: "焊接系统"
  },
  {
    id: 91,
    type: "single_choice",
    question: "焊接程序中，起弧指令的是（）。",
    options: {
      A: "ArcL",
      B: "ARC_OFF",
      C: "ArcCEnd",
      D: "ARC_ON"
    },
    answer: "D",
    category: "焊接编程"
  },
  {
    id: 92,
    type: "single_choice",
    question: "焊接控制系统的I/O信号主要有（）。",
    options: {
      A: "数字量输入信号",
      B: "数字量输出信号",
      C: "模拟量输入输出信号",
      D: "以上全是"
    },
    answer: "D",
    category: "焊接系统"
  },
  {
    id: 93,
    type: "single_choice",
    question: "在焊接控制系统中，下列（）是数字量输出信号。",
    options: {
      A: "焊接电流",
      B: "焊接电压",
      C: "起弧",
      D: "起弧成功"
    },
    answer: "C",
    category: "焊接系统"
  },
  {
    id: 94,
    type: "single_choice",
    question: "在焊接控制系统中，下列（）是模拟量输入信号。",
    options: {
      A: "送气",
      B: "焊接电压",
      C: "起弧",
      D: "送丝"
    },
    answer: "B",
    category: "焊接系统"
  },
  {
    id: 95,
    type: "single_choice",
    question: "在焊接控制系统中，下列（）是数字量输入信号。",
    options: {
      A: "送丝",
      B: "焊接电压",
      C: "起弧",
      D: "起弧成功"
    },
    answer: "D",
    category: "焊接系统"
  },
  {
    id: 96,
    type: "single_choice",
    question: "在焊接控制系统的I/O信号配置中，停止焊接功能属于（）。",
    options: {
      A: "数字量输入信号",
      B: "数字量输出信号",
      C: "模拟量输入信号",
      D: "模拟量输出信号"
    },
    answer: "B",
    category: "焊接系统"
  },
  {
    id: 97,
    type: "single_choice",
    question: "在焊接控制系统的I/O信号配置中，碰撞保护功能属于（）。",
    options: {
      A: "数字量输入信号",
      B: "数字量输出信号",
      C: "模拟量输入信号",
      D: "模拟量输出信号"
    },
    answer: "A",
    category: "焊接系统"
  },
  {
    id: 98,
    type: "single_choice",
    question: "在一个完整的工业机器人弧焊程序包括（）。",
    options: {
      A: "起弧阶段",
      B: "焊接阶段",
      C: "收弧阶段",
      D: "以上全是"
    },
    answer: "D",
    category: "焊接编程"
  },
  {
    id: 99,
    type: "single_choice",
    question: "在进行焊机参数设置时不需要进行（）设置。",
    options: {
      A: "焊丝直径",
      B: "焊丝材料",
      C: "操作模式",
      D: "焊丝阻值"
    },
    answer: "D",
    category: "焊接系统"
  },
  {
    id: 100,
    type: "single_choice",
    question: "在用机器人进行弧焊作业中，对夹具的要求描述错误的是：（）",
    options: {
      A: "减少定位误差",
      B: "装拆方便",
      C: "工件的固定和定位自动化",
      D: "回避与焊枪的干涉"
    },
    answer: "C",
    category: "焊接系统"
  },
  {
    id: 101,
    type: "single_choice",
    question: "机器人运动的进给速度，由程序指令直接指定，直线运动指令的进给速度的单位可以为（）。",
    options: {
      A: "mm/sec",
      B: "cm/min",
      C: "inch/min",
      D: "以上都可以"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 102,
    type: "single_choice",
    question: "埋弧焊机控制系统的调试不包括测试（）。",
    options: {
      A: "小车行走速度",
      B: "焊剂的铺撒和回收",
      C: "引弧操作性能",
      D: "焊丝的送丝速度"
    },
    answer: "B",
    category: "焊接系统"
  },
  {
    id: 103,
    type: "single_choice",
    question: "焊接调试中将近控有无设置为ON时，则正常焊接规范由（）确定。",
    options: {
      A: "机器人",
      B: "PLC",
      C: "显示板调节旋钮",
      D: "运行程序"
    },
    answer: "C",
    category: "焊接系统"
  },
  {
    id: 104,
    type: "single_choice",
    question: "实际应用中，在远程模式下，机器人的焊接电压和焊接电流模拟量信号连接（）。",
    options: {
      A: "先连接送丝机，再到焊机",
      B: "先连接焊机，再到送丝机",
      C: "先连接机器人，再到焊机",
      D: "先连接焊机，再到机器人"
    },
    answer: "A",
    category: "焊接系统"
  },
  {
    id: 105,
    type: "single_choice",
    question: "在进行焊接电流的模拟量校正时，I/O板模拟量输出信号电流范围是（）。",
    options: {
      A: "0~5V",
      B: "0~10V",
      C: "0~5A",
      D: "0~10A"
    },
    answer: "D",
    category: "焊接系统"
  },
  {
    id: 106,
    type: "single_choice",
    question: "焊接机器人系统在进行模拟量校正时（）。",
    options: {
      A: "只校正电流模拟量",
      B: "只校正电压模拟量",
      C: "先校正电压模拟量，再校正电流模拟量",
      D: "先校正电流模拟量，再校正电压模拟量"
    },
    answer: "D",
    category: "焊接系统"
  },
  {
    id: 107,
    type: "single_choice",
    question: "焊接机器人系统模拟量校正在（）中进行设置。",
    options: {
      A: "控制面板",
      B: "出入输出",
      C: "程序数据",
      D: "校准"
    },
    answer: "A",
    category: "焊接系统"
  },
  {
    id: 108,
    type: "single_choice",
    question: "弧焊机器人需要根据IO板的地址情况进行信号的分配，主要信号有数字输出信号和（）。",
    options: {
      A: "数字输入信号",
      B: "模拟输入信号",
      C: "模拟输出信号",
      D: "I/O信号"
    },
    answer: "C",
    category: "焊接系统"
  },
  {
    id: 109,
    type: "single_choice",
    question: "焊接系统中的周边辅助设备控制信号用于控制焊接系统周边辅助设备的运行，下列（）是辅助设备控制信号.",
    options: {
      A: "起弧",
      B: "送丝",
      C: "送气",
      D: "变位机启动"
    },
    answer: "D",
    category: "焊接系统"
  },
  {
    id: 110,
    type: "single_choice",
    question: "焊接指令用于轨迹焊接的控制，该指令包含（）基本弧焊指令。",
    options: {
      A: "SET_ARCMODE",
      B: "SETCURWIRE",
      C: "SET_ONPER",
      D: "以上都是"
    },
    answer: "D",
    category: "焊接编程"
  },
  {
    id: 111,
    type: "single_choice",
    question: "调试的目的主要是检查程序运行的点位是否正确，（）控制是否合理。",
    options: {
      A: "速度",
      B: "动作",
      C: "安全",
      D: "逻辑"
    },
    answer: "D",
    category: "调试技术"
  },
  {
    id: 112,
    type: "single_choice",
    question: "机器人雕刻作业时，力控制方式的输入量和反馈量是（）。",
    options: {
      A: "位置信号",
      B: "力（力矩）信号",
      C: "速度信号",
      D: "加速度信号"
    },
    answer: "B",
    category: "力控制"
  },
  {
    id: 113,
    type: "single_choice",
    question: "力传感器安装在工业机器人上的位置，通常不会在以下哪个位置（）。",
    options: {
      A: "关节驱动器轴上",
      B: "机器人腕部",
      C: "基座",
      D: "手指指尖"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 114,
    type: "single_choice",
    question: "机器人在去毛刺时，去毛刺装置通常采用电机驱动和（）驱动。",
    options: {
      A: "轴驱动",
      B: "齿轮驱动",
      C: "液压驱动",
      D: "气动驱动"
    },
    answer: "D",
    category: "打磨系统"
  },
  {
    id: 115,
    type: "single_choice",
    question: "在机器人打磨过程中通常利用偏移指令和绝对位置指令来分别设置（）。",
    options: {
      A: "起始点和结束点",
      B: "缓冲点和过渡点",
      C: "过渡点和缓冲点",
      D: "安全点和起始点"
    },
    answer: "C",
    category: "打磨系统"
  },
  {
    id: 116,
    type: "single_choice",
    question: "在示教器操作界面中，锁定工艺项中锁定焊接速度时，机器人将（）。",
    options: {
      A: "停止移动",
      B: "按照焊机设置速度运行",
      C: "按照指令中的速度运行",
      D: "以上说法都不正确"
    },
    answer: "C",
    category: "焊接系统"
  },
  {
    id: 117,
    type: "single_choice",
    question: "一般情况下，焊枪出丝长度与（）有关。",
    options: {
      A: "焊丝材质",
      B: "焊接方式",
      C: "焊缝宽度",
      D: "焊丝直径"
    },
    answer: "D",
    category: "焊接系统"
  },
  {
    id: 118,
    type: "single_choice",
    question: "如果末端装置、工具或周围环境的刚性很高，那么机械手要执行与某个表面有接触的操作作业将会变得相当困难。此时应该考虑（）。",
    options: {
      A: "柔顺控制",
      B: "PID控制",
      C: "模糊控制",
      D: "最优控制"
    },
    answer: "A",
    category: "控制技术"
  },
  {
    id: 119,
    type: "single_choice",
    question: "步进电机、直流伺服电机、交流伺服电机的英文字母表示依次为：（）。",
    options: {
      A: "SM、DM、AC",
      B: "SM、DC、AC",
      C: "SM、AC、DC",
      D: "SC、AC、DC"
    },
    answer: "B",
    category: "驱动系统"
  },
  {
    id: 120,
    type: "single_choice",
    question: "焊接机器人的焊接作业主要包括（",
    options: {
      A: "点焊和弧焊",
      B: "间断焊和连续焊",
      C: "平焊和竖焊",
      D: "气体保护焊和氩弧焊"
    },
    answer: "A",
    category: "焊接系统"
  },
  {
    id: 121,
    type: "single_choice",
    question: "工业机器人按用途可分为：（）①装配机器人；②焊接机器人；③搬运机器人；④智能机器人；⑤喷涂机器人。",
    options: {
      A: "①②③④",
      B: "①②③⑤",
      C: "①③④⑤",
      D: "②③④⑤"
    },
    answer: "B",
    category: "机器人类型"
  },
  {
    id: 122,
    type: "single_choice",
    question: "原点位置校准是将机器人位置与绝对编码器位置进行对照的操作。华数机器人在（）情况下不需要再次进行原点位置校准。",
    options: {
      A: "碰撞硬限位时",
      B: "更换电机、绝对编码器时",
      C: "存储内存被删除时",
      D: "机器人碰撞工件，原点偏移时"
    },
    answer: "C",
    category: "校准标定"
  },
  {
    id: 123,
    type: "single_choice",
    question: "机器人的位置数据可存放在（）寄存器。",
    options: {
      A: "R",
      B: "BR",
      C: "DR",
      D: "LR"
    },
    answer: "D",
    category: "寄存器系统"
  },
  {
    id: 124,
    type: "single_choice",
    question: "一般教学中机器人和PLC通信常用的是（）。",
    options: {
      A: "Device Net",
      B: "I/O 通信",
      C: "Profinet",
      D: "Profibus- DP"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 125,
    type: "single_choice",
    question: "在示教器的（）子菜单下可以查看IO信号属性。",
    options: {
      A: "配置",
      B: "显示",
      C: "诊断",
      D: "系统"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 126,
    type: "single_choice",
    question: "示教器提供左侧（）个辅助按键，用于用户自定义按键操作，可配置按键按下后输出的指令。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "C",
    category: "示教操作"
  },
  {
    id: 127,
    type: "single_choice",
    question: "编码功能就是将R寄存器映射到IO的输出，根据R的值置为IO序列，该过程为（）进制编码。",
    options: {
      A: "二",
      B: "十",
      C: "八",
      D: "十六"
    },
    answer: "A",
    category: "编程技术"
  },
  {
    id: 128,
    type: "single_choice",
    question: "PLC称重模块采用（）信号读取工件重量。",
    options: {
      A: "数字量输入",
      B: "数字量输出",
      C: "模拟量输入",
      D: "模拟量输出"
    },
    answer: "C",
    category: "PLC控制"
  },
  {
    id: 129,
    type: "single_choice",
    question: "项目树种'AI4*13'表示（）",
    options: {
      A: "4路模拟量输入",
      B: "4路模拟量输出",
      C: "13路模拟量输入",
      D: "13路模拟量输出"
    },
    answer: "A",
    category: "PLC控制"
  },
  {
    id: 130,
    type: "single_choice",
    question: "PLC的模拟量输入模块一般是（）位分辨率",
    options: {
      A: "8",
      B: "12",
      C: "16",
      D: "32"
    },
    answer: "B",
    category: "PLC控制"
  },
  {
    id: 131,
    type: "single_choice",
    question: "1+X应用编程平台PLC通过（）方式控制旋转台模块运行。",
    options: {
      A: "PTO",
      B: "PROFIdrive",
      C: "模拟量",
      D: "变频器"
    },
    answer: "A",
    category: "PLC控制"
  },
  {
    id: 132,
    type: "single_choice",
    question: "1+X应用编程平台PLC通过（）控制井式供料模块。",
    options: {
      A: "本地数字量IO",
      B: "模拟量IO",
      C: "远程IO",
      D: "扩展数字量IO"
    },
    answer: "A",
    category: "PLC控制"
  },
  {
    id: 133,
    type: "single_choice",
    question: "1+X应用编程平台称重模块对应的模拟量地址为（）。",
    options: {
      A: "AI0",
      B: "AI1",
      C: "AO0",
      D: "AO1"
    },
    answer: "A",
    category: "PLC控制"
  },
  {
    id: 134,
    type: "single_choice",
    question: "视觉模块生成的工件坐标值（x,y,θ）保存在（）寄存器中。",
    options: {
      A: "JR",
      B: "UF",
      C: "LR",
      D: "R"
    },
    answer: "D",
    category: "视觉系统"
  },
  {
    id: 135,
    type: "single_choice",
    question: "若DO[1]-DO[4]与R[1]关联，其中R[1]=3，则DO[1]=（）。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "编程技术"
  },
  {
    id: 136,
    type: "single_choice",
    question: "（）指令用于阻塞等待一个指定信号。",
    options: {
      A: "BREAK",
      B: "WHILE",
      C: "WAIT",
      D: "GOTO"
    },
    answer: "C",
    category: "编程基础"
  },
  {
    id: 137,
    type: "single_choice",
    question: "如程序示例FORR[1]=0TO3BY1，步进值为（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "B",
    category: "编程基础"
  },
  {
    id: 138,
    type: "single_choice",
    question: "如程序示例FOR R[1]=0 TO 3 BY 1，END FOR，FOR 循环（）次。",
    options: {
      A: "4",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "A",
    category: "编程基础"
  },
  {
    id: 139,
    type: "single_choice",
    question: "1200PLC与机器人IPC之间传输坐标轴采用（）通信方式。",
    options: {
      A: "数字量IO通信",
      B: "模拟量通信",
      C: "串口通信",
      D: "网络通信"
    },
    answer: "D",
    category: "通信技术"
  },
  {
    id: 140,
    type: "single_choice",
    question: "对于RFID数据，PLC的操作方式是（）。",
    options: {
      A: "只读",
      B: "只写",
      C: "可读写",
      D: "其他"
    },
    answer: "C",
    category: "RFID技术"
  },
  {
    id: 141,
    type: "single_choice",
    question: "系统平台选用的PLC型号为（）。",
    options: {
      A: "1215CAC/DC/Rly",
      B: "1215CDC/DC/DC",
      C: "1215CDC/DC/Rly",
      D: "1214CDC/DC/DC"
    },
    answer: "B",
    category: "PLC控制"
  },
  {
    id: 142,
    type: "single_choice",
    question: "IPC中的MODBUS TCP通讯程序块仅支持（）数据类型传递数据。",
    options: {
      A: "REAL",
      B: "UInt",
      C: "LREAL",
      D: "BOOL"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 143,
    type: "single_choice",
    question: "PLC与IPC进行（）字节的R寄存器数据交互。",
    options: {
      A: "8",
      B: "16",
      C: "32",
      D: "64"
    },
    answer: "D",
    category: "通信技术"
  },
  {
    id: 144,
    type: "single_choice",
    question: "PLC控制变位机模块中装配台气缸夹紧的地址是（）。",
    options: {
      A: "Q0.1",
      B: "Q0.2",
      C: "Q0.3",
      D: "Q0.4"
    },
    answer: "C",
    category: "PLC控制"
  },
  {
    id: 145,
    type: "single_choice",
    question: "下列指令搭配合理使用正确的是（）。",
    options: {
      A: "1.LBL[0] 2.IF DO[1]=ON GOTO LBL[0]",
      B: "1.GOTO LBL[6] 2.JR[7] 3.LBL[6]",
      C: "1.LBL[4] 2.WHILE R[4]=5 3.GOTO LBL[4]",
      D: "1.LBL[7] 2.MOVE JR[0] 3. IF R[70] THEN LBL[7]"
    },
    answer: "B",
    category: "编程基础"
  },
  {
    id: 146,
    type: "single_choice",
    question: "华数3型系统中流程指令在程序中可以实现的功能为（）。",
    options: {
      A: "跳转至指定子程序",
      B: "依据条件判断跳转",
      C: "跳转标签指定的程序段",
      D: "指定跳转的次数"
    },
    answer: "C",
    category: "编程基础"
  },
  {
    id: 147,
    type: "single_choice",
    question: "下列哪些类型指令可以实现机器人空间的动作平移（）。",
    options: {
      A: "赋值",
      B: "镜像",
      C: "偏移",
      D: "旋转"
    },
    answer: "C",
    category: "编程基础"
  },
  {
    id: 148,
    type: "single_choice",
    question: "在动作级编程语言里，程序位置的改变实际是（）。",
    options: {
      A: "点位的映射",
      B: "点位的计算",
      C: "点位的平移",
      D: "点位的调用"
    },
    answer: "B",
    category: "编程基础"
  },
  {
    id: 149,
    type: "single_choice",
    question: "IO指令不包括（）指令。",
    options: {
      A: "DI",
      B: "DO",
      C: "LBL",
      D: "WAIT"
    },
    answer: "C",
    category: "编程基础"
  },
  {
    id: 150,
    type: "single_choice",
    question: "赋值指令包含（）和全局变量指令两部分。",
    options: {
      A: "寄存器",
      B: "IO指令",
      C: "循环指令",
      D: "LBL指令"
    },
    answer: "A",
    category: "编程基础"
  },
  {
    id: 151,
    type: "single_choice",
    question: "下列关于程序名描述错误的是（",
    options: {
      A: "用以识别存入控制器内存中的程序",
      B: "在同一个目录下不能出现包含两个或更多拥有相同程序名的程序。",
      C: "程序名长度不超过8个字符",
      D: "有字母、数字、下划线（）和汉字组成"
    },
    answer: "D",
    category: "编程基础"
  },
  {
    id: 152,
    type: "single_choice",
    question: "全局参数包括（）。",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "全局运动参数",
      D: "以上都有"
    },
    answer: "D",
    category: "编程基础"
  },
  {
    id: 153,
    type: "single_choice",
    question: "中断指令与调用指令的主要区别在于，中断是（）。",
    options: {
      A: "程序安排的",
      B: "随机",
      C: "程序请求的",
      D: "顺序执行"
    },
    answer: "B",
    category: "编程基础"
  },
  {
    id: 154,
    type: "single_choice",
    question: "下面（）指令为华数系统中的循环指令。",
    options: {
      A: "FOR",
      B: "END",
      C: "GOTO",
      D: "DESCRIBLE"
    },
    answer: "A",
    category: "编程基础"
  },
  {
    id: 155,
    type: "single_choice",
    question: "华数三型系统中，若要时刻监控DI[20]的信号。若为1，则机器人运动到P2点。以下编程正确的是（）。",
    options: {
      A: "1.ONEVENTEV1D_IN[20]=1; 2.JROBOTP2",
      B: "1.WAITDI[20]=ON 3.JROBOTP2",
      C: "1.ONEVENTEV3D_IN[20]=1 2.MOVEROBOTP2 3.EVENTOFFEV3",
      D: "1. EVENTON EV4 D_IN[20]=12. MOVE ROBOT P23. EVENTOFF EV4"
    },
    answer: "B",
    category: "编程基础"
  },
  {
    id: 156,
    type: "single_choice",
    question: "在华数3型系统中，手拿工具加工的模式下，若想将目前的工件加工程序的基座标系的Z轴方向夹角添加45°，应该在（）添加对应角度数值。",
    options: {
      A: "A轴",
      B: "B轴",
      C: "C轴",
      D: "以上三个"
    },
    answer: "A",
    category: "坐标系统"
  },
  {
    id: 157,
    type: "single_choice",
    question: "机器人程序的坐标系发生移动，会影响（）坐标系下的点位信息。",
    options: {
      A: "关节",
      B: "空间",
      C: "世界",
      D: "实轴"
    },
    answer: "B",
    category: "坐标系统"
  },
  {
    id: 158,
    type: "single_choice",
    question: "某点在指定工具和工件坐标系下进行手动示教记录后。编写程序中（）处，需要添加指定的工具号和工件号。",
    options: {
      A: "主程序开头",
      B: "子程序开头",
      C: "某点位运动指令之前",
      D: "坐标系选择栏"
    },
    answer: "C",
    category: "编程基础"
  },
  {
    id: 159,
    type: "single_choice",
    question: "华数1型系统中，若要实现工件坐标系自动选择转换，需要先（），再调用对应的坐标系号。",
    options: {
      A: "坐标系寄存器赋值指定坐标系号数值",
      B: "数值寄存器赋值指定坐标系号数值",
      C: "关节点位寄存器赋值指定坐标系号数值",
      D: "直角点位寄存器赋值指定坐标系号数值"
    },
    answer: "D",
    category: "坐标系统"
  },
  {
    id: 160,
    type: "single_choice",
    question: "工业机器人的坐标变换不包括（",
    options: {
      A: "平移变换",
      B: "垂直变换",
      C: "旋转变换",
      D: "复合变换"
    },
    answer: "B",
    category: "坐标系统"
  },
  {
    id: 161,
    type: "single_choice",
    question: "一般情况下，动作级编程语言是（）执行单条指令。",
    options: {
      A: "按周期扫描",
      B: "按顺序",
      C: "按条件",
      D: "按次数"
    },
    answer: "B",
    category: "编程基础"
  },
  {
    id: 162,
    type: "single_choice",
    question: "多任务模式下，以下哪个说法错误的是（）。",
    options: {
      A: "多个程序在后台同时进行。",
      B: "多任务必须同时进退加载。",
      C: "在设置信号扫描程序时，多任务模式可以接受和发送信号。",
      D: "多个程序中出现同一点位时，依次程序主次关系进行运动。"
    },
    answer: "D",
    category: "编程基础"
  },
  {
    id: 163,
    type: "single_choice",
    question: "在华数3型编程中，对于如下运动轨迹的控制，可以通过Z在3处添加（）指令，实现轨迹的两个选择。1. L P[6] VEL=100 2. L P[7] CNT=10 3. 4. L P[8]",
    options: {
      A: "WAIT DI[5]=ON",
      B: "DI[5]=ON",
      C: "STOP DI[5]=ON",
      D: "IF DI[5]=ON GOTO LBL[]"
    },
    answer: "D",
    category: "编程基础"
  },
  {
    id: 164,
    type: "single_choice",
    question: "在多任务模式，每个任务能有（）个主程序。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "无限制"
    },
    answer: "A",
    category: "编程基础"
  },
  {
    id: 165,
    type: "single_choice",
    question: "机器人末端执行器的位置和姿态简称为位姿。在空间坐标系中，位置是和姿态分别是由（）旋转自由度确定。",
    options: {
      A: "6个和6个",
      B: "3个和3个",
      C: "3个和6个",
      D: "6个和3个"
    },
    answer: "B",
    category: "基础知识"
  },
  {
    id: 166,
    type: "single_choice",
    question: "以下那个是循环指令（）。",
    options: {
      A: "WHILE...END WHILE",
      B: "ifend if",
      C: "WAITTIME",
      D: "SLEEP"
    },
    answer: "A",
    category: "编程基础"
  },
  {
    id: 167,
    type: "single_choice",
    question: "( )指令的功能是根据制定的次数，重复执行对应程序。",
    options: {
      A: "IF",
      B: "FOR",
      C: "WAIT",
      D: "DO"
    },
    answer: "B",
    category: "编程基础"
  },
  {
    id: 168,
    type: "single_choice",
    question: "以下那个是条件指令（）。",
    options: {
      A: "while...End while",
      B: "ifend if",
      C: "waittime",
      D: "sleep"
    },
    answer: "B",
    category: "编程基础"
  },
  {
    id: 169,
    type: "single_choice",
    question: "PLC的一输出继电器控制的接触器不动作，检查发现对应的继电器指示灯亮。下列对故障的分析不正确的是（）。",
    options: {
      A: "接触器故障",
      B: "端子接触不良",
      C: "输出继电器故障",
      D: "软件故障"
    },
    answer: "D",
    category: "故障诊断"
  },
  {
    id: 170,
    type: "single_choice",
    question: "PLC采用了一系列可靠性设计，如（）、掉电保护、故障诊断和性信息保护及恢复等。",
    options: {
      A: "简单设计",
      B: "简化设计",
      C: "冗余设计",
      D: "功能设计"
    },
    answer: "C",
    category: "PLC控制"
  },
  {
    id: 171,
    type: "single_choice",
    question: "选用接近开关时应注意对工作电压、负载电流、（）检测距离等各项指标的要求。",
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
    id: 172,
    type: "single_choice",
    question: "工业机器人和PLC之间使用（）通信。",
    options: {
      A: "以太网",
      B: "并行通信",
      C: "无线短距通信",
      D: "局域网"
    },
    answer: "A",
    category: "通信技术"
  },
  {
    id: 173,
    type: "single_choice",
    question: "PLC的工作方式是（）。",
    options: {
      A: "等待工作方式",
      B: "中断工作方式",
      C: "扫描工作方式",
      D: "循环扫描工作方式"
    },
    answer: "D",
    category: "PLC控制"
  },
  {
    id: 174,
    type: "single_choice",
    question: "IPC为华数三型系统，IPC中的MODBUS TCP通讯程序块仅支持采用（）数据类型传递数据。",
    options: {
      A: "String",
      B: "Uint",
      C: "REAL",
      D: "LREAL"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 175,
    type: "single_choice",
    question: "配置外部信号是将（）和I/O输入输出索引建立映射关系的过程。",
    options: {
      A: "系统信号",
      B: "系统变量",
      C: "寄存器数据",
      D: "REF变量"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 176,
    type: "single_choice",
    question: "工业机器人的主要编程方式不包括（",
    options: {
      A: "在线编程",
      B: "自主编程",
      C: "离线编程",
      D: "仿真编程"
    },
    answer: "D",
    category: "编程技术"
  },
  {
    id: 177,
    type: "single_choice",
    question: "若波特率为1200，若每个字符有12位二进制数，则每秒钟传送的字符数为多少个？（）",
    options: {
      A: "120",
      B: "100",
      C: "1000",
      D: "1200"
    },
    answer: "B",
    category: "通信技术"
  },
  {
    id: 178,
    type: "single_choice",
    question: "以下关于顺序控制流程图描述正确的是：",
    options: {
      A: "系统从一个状态退出进入另一个状态必须满足转移条件",
      B: "每个状态都必须有动作",
      C: "状态之间的有向线段必须有箭头",
      D: "系统工作的任意时刻只能有一个状态是活动的"
    },
    answer: "A",
    category: "控制技术"
  },
  {
    id: 179,
    type: "single_choice",
    question: "视觉弧焊机器人的系统硬件不包括（",
    options: {
      A: "机器人系统",
      B: "视觉系统",
      C: "检测系统",
      D: "焊接系统"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 180,
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
    id: 181,
    type: "single_choice",
    question: "工业机器人和PLC之间使用（）通信。",
    options: {
      A: "以太网",
      B: "并行通信",
      C: "无线短距通信",
      D: "局域网"
    },
    answer: "A",
    category: "通信技术"
  },
  {
    id: 182,
    type: "single_choice",
    question: "机器人传感器分内部和外部传感器，其中哪种传感器在内部不常用？（）",
    options: {
      A: "位置",
      B: "速度",
      C: "视觉",
      D: "压力"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 183,
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
    id: 184,
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
    id: 185,
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
    id: 186,
    type: "single_choice",
    question: "（）是指机器人的指、肢和关节等运动中所受力的感知。",
    options: {
      A: "视觉传感器",
      B: "触觉传感器",
      C: "力觉距离传感器",
      D: "速度传感器"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 187,
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
    id: 188,
    type: "single_choice",
    question: "机器人轨迹控制过程需要通过求解（）获得各个关节角的位置控制系统的设计定值。",
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
    id: 189,
    type: "single_choice",
    question: "以下哪个元件不属于光电编码器的主要元件。（）",
    options: {
      A: "多路光源",
      B: "光敏元件",
      C: "电阻器",
      D: "光电码盘"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 190,
    type: "single_choice",
    question: "五位二进制光电编码盘（格雷码编码盘）分辨的最小角度为（）。",
    options: {
      A: "11.25°",
      B: "22.5°",
      C: "5.625°",
      D: "45°"
    },
    answer: "A",
    category: "传感器技术"
  },
  {
    id: 191,
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
    id: 192,
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
    id: 193,
    type: "single_choice",
    question: "下列不属于机器人专用I/O的是哪些？",
    options: {
      A: "数字I/O",
      B: "机器人I/O",
      C: "外围设备I/O",
      D: "操作面板I/O"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 194,
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
    id: 195,
    type: "single_choice",
    question: "机器视觉系统的特点不包括（",
    options: {
      A: "精度高",
      B: "连续性",
      C: "灵活性",
      D: "独特性"
    },
    answer: "D",
    category: "视觉系统"
  },
  {
    id: 196,
    type: "single_choice",
    question: "常用的图像处理方法不包括（",
    options: {
      A: "图像展开",
      B: "图像增强",
      C: "图像平滑",
      D: "图像识别"
    },
    answer: "A",
    category: "视觉系统"
  },
  {
    id: 197,
    type: "single_choice",
    question: "机器人视觉伺服控制系统按摄像机的数目分类不包括（",
    options: {
      A: "单目视觉伺服系统",
      B: "双目视觉伺服系统",
      C: "多目视觉伺服系统",
      D: "基于图像的视觉伺服系统"
    },
    answer: "D",
    category: "视觉系统"
  },
  {
    id: 198,
    type: "single_choice",
    question: "视觉系统中用来识别颜色设置的参数不包括（）。",
    options: {
      A: "R",
      B: "B",
      C: "Y",
      D: "G"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 199,
    type: "single_choice",
    question: "机器视觉系统主要由（)组成。①图像的获取；②图像恢复；③图像增强；④图像的处理和分析；⑤输出或显示。",
    options: {
      A: "①②③④",
      B: "①②③⑤",
      C: "①④⑤",
      D: "①②③④⑤"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 200,
    type: "single_choice",
    question: "机器人电机编码器分为（）①增量式；②绝对式；③模拟量；④编码盘",
    options: {
      A: "①②③④",
      B: "①②",
      C: "①②③",
      D: "①③④"
    },
    answer: "B",
    category: "传感器技术"
  },
  {
    id: 201,
    type: "single_choice",
    question: "机器人外部传感器有（）。①视觉；②触觉；③压觉；④滑觉",
    options: {
      A: "①②③④",
      B: "①②",
      C: "①②③",
      D: "①③④"
    },
    answer: "A",
    category: "传感器技术"
  },
  {
    id: 202,
    type: "single_choice",
    question: "以下属于PLC外围输出故障的是（",
    options: {
      A: "电磁阀故障",
      B: "继电器故障",
      C: "电机故障",
      D: "以上都是"
    },
    answer: "D",
    category: "故障诊断"
  },
  {
    id: 203,
    type: "single_choice",
    question: "PLC输出模块常见的故障是（)①供电电源故障；②端子接线故障；③模板安装故障；④现场操作故障",
    options: {
      A: "①②③④",
      B: "②③④",
      C: "①③④",
      D: "①②④"
    },
    answer: "A",
    category: "故障诊断"
  },
  {
    id: 204,
    type: "single_choice",
    question: "配置机器人外部I/O信号，可以实现外部信号控制程序暂停的是（)。",
    options: {
      A: "iPRG_START",
      B: "iPRG_PAUSE",
      C: "iPRG_RESUME",
      D: "oPRG_PAUSE"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 205,
    type: "single_choice",
    question: "下列操作中属于视觉标定的必需步骤不包括（",
    options: {
      A: "相机图像",
      B: "拍照",
      C: "高精度特征匹配",
      D: "N点标定"
    },
    answer: "B",
    category: "视觉系统"
  },
  {
    id: 206,
    type: "single_choice",
    question: "RFID属于物联网的哪个层（",
    options: {
      A: "感知层",
      B: "网络层",
      C: "业务层",
      D: "应用层"
    },
    answer: "A",
    category: "RFID技术"
  },
  {
    id: 207,
    type: "single_choice",
    question: "RFID卡（）可分为：主动式标签（TTF）和被动式标签（RTF）。",
    options: {
      A: "按供电方式分",
      B: "按工作频率分",
      C: "按通讯方式分",
      D: "按标签芯片分"
    },
    answer: "C",
    category: "RFID技术"
  },
  {
    id: 208,
    type: "single_choice",
    question: "射频识别系统中的（）的工作频率决定了整个射频识别系统的工作频率，功率大小决定了整个射频识别系统的工作距离。",
    options: {
      A: "电子标签",
      B: "上位机",
      C: "读写器",
      D: "计算机通讯网络"
    },
    answer: "A",
    category: "RFID技术"
  },
  {
    id: 209,
    type: "single_choice",
    question: "（）是电子标签的一个重要组成部分，它主要负责存储标签内部信息，还负责对标签接收到的信号以及发送出去的信号做一些必要的处理。",
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
    id: 210,
    type: "single_choice",
    question: "ISO18000- 3、ISO14443和ISO15693这三项通信协议针对的是（）RFID系统。",
    options: {
      A: "高频系统",
      B: "低频系统",
      C: "超高频系统",
      D: "微波系统"
    },
    answer: "A",
    category: "RFID技术"
  },
  {
    id: 211,
    type: "single_choice",
    question: "在RFID系统中，电子标签的天线必须满足一些性能要求。下列几项要求中哪一项不需要满足（）。",
    options: {
      A: "阻抗要足够大",
      B: "要具有鲁棒性",
      C: "价格不应过高",
      D: "体积要足够小"
    },
    answer: "A",
    category: "RFID技术"
  },
  {
    id: 212,
    type: "single_choice",
    question: "配置机器人外部I/O信号，可以实现外部信号控制程序停止的是（）。",
    options: {
      A: "iPRG_START",
      B: "oPRG_PAUSE",
      C: "iPRG_KIL",
      D: "oPRG_KILLED"
    },
    answer: "C",
    category: "IO控制"
  },
  {
    id: 213,
    type: "single_choice",
    question: "配置机器人外部I/O信号，可以实现外部信号控制程序加载的是（）。",
    options: {
      A: "iPRG_LOAD",
      B: "iENABLE",
      C: "oENABLE_STATE",
      D: "oPRG_READY"
    },
    answer: "A",
    category: "IO控制"
  },
  {
    id: 214,
    type: "single_choice",
    question: "经常作为智能控制典型研究对象的是（）。",
    options: {
      A: "智能机器人",
      B: "智能故障诊断系统",
      C: "智能制造系统",
      D: "智能决策系统"
    },
    answer: "A",
    category: "智能控制"
  },
  {
    id: 215,
    type: "single_choice",
    question: "解决自动控制面临问题的一条有效途径就是，把人工智能等技术用入自动控制系统中，其核心是（）。",
    options: {
      A: "控制器智能化",
      B: "控制算法",
      C: "控制结构",
      D: "控制系统仿真"
    },
    answer: "A",
    category: "智能控制"
  },
  {
    id: 216,
    type: "single_choice",
    question: "PLC是在（）控制系统基础上发展起来的。",
    options: {
      A: "继电器",
      B: "单片机",
      C: "工业电脑",
      D: "机器人"
    },
    answer: "A",
    category: "PLC控制"
  },
  {
    id: 217,
    type: "single_choice",
    question: "不属于智能控制是（）。",
    options: {
      A: "确定性反馈控制",
      B: "专家控制",
      C: "模糊控制",
      D: "神经网络控制"
    },
    answer: "A",
    category: "智能控制"
  },
  {
    id: 218,
    type: "single_choice",
    question: "以下不属于智能控制主要特点的是（）。",
    options: {
      A: "具有反馈结构",
      B: "具有自组织能力",
      C: "具有分层递阶组织结构",
      D: "具有自适应能力"
    },
    answer: "A",
    category: "智能控制"
  },
  {
    id: 219,
    type: "single_choice",
    question: "机器人能力的评价标准不包括（）。",
    options: {
      A: "动能",
      B: "机能",
      C: "智能",
      D: "物理能"
    },
    answer: "A",
    category: "基础知识"
  },
  {
    id: 220,
    type: "single_choice",
    question: "含有微处理器，可进行程序编制或适应条件变化的接口是（）。",
    options: {
      A: "智能接口",
      B: "被动接口",
      C: "主动接口",
      D: "零接口"
    },
    answer: "A",
    category: "硬件配置"
  },
  {
    id: 221,
    type: "single_choice",
    question: "夹持式手部分为三种：分别是（）。①夹钳式；②气吸附；③弹簧式；④钩拖式；⑤磁吸附",
    options: {
      A: "①②③",
      B: "①③④",
      C: "③④③",
      D: "①④③"
    },
    answer: "B",
    category: "末端执行器"
  },
  {
    id: 222,
    type: "single_choice",
    question: "绝对式光电编码器其分辨率取决于二进制编码的（",
    options: {
      A: "位数",
      B: "码道",
      C: "0",
      D: "1"
    },
    answer: "A",
    category: "传感器技术"
  },
  {
    id: 223,
    type: "single_choice",
    question: "假设检测角度精度为0.1，则增量式光电编码器的透光缝隙数不少于（）。",
    options: {
      A: "500",
      B: "3600",
      C: "6000",
      D: "无法确定"
    },
    answer: "B",
    category: "传感器技术"
  },
  {
    id: 224,
    type: "single_choice",
    question: "气吸附式取料手不包括（）",
    options: {
      A: "真空吸附",
      B: "气流负压吸附",
      C: "挤压排气负压吸附",
      D: "增压式吸附"
    },
    answer: "D",
    category: "末端执行器"
  },
  {
    id: 225,
    type: "single_choice",
    question: "工业机器人末端执行器不包括（）",
    options: {
      A: "外夹式",
      B: "内夹式",
      C: "内撑式",
      D: "外撑式"
    },
    answer: "D",
    category: "末端执行器"
  },
  {
    id: 226,
    type: "single_choice",
    question: "机器人的驱动方式不包括（）",
    options: {
      A: "液压",
      B: "电动",
      C: "气动",
      D: "联动"
    },
    answer: "D",
    category: "驱动系统"
  },
  {
    id: 227,
    type: "single_choice",
    question: "PLC输出类型有三种输出形式，不包括（）",
    options: {
      A: "继电器",
      B: "晶体管",
      C: "双向晶闸管",
      D: "发光二极管"
    },
    answer: "D",
    category: "PLC控制"
  },
  {
    id: 228,
    type: "single_choice",
    question: "IO指令中的WAIT指令用于产生脉冲，编程语句WAIT R[1] = 1 是（）含义？",
    options: {
      A: "表示将R[1]的数值设置为1的时候程序继续执行",
      B: "表示等待R[1]的数值为1的时候程序跳过后面一段继续执行",
      C: "表示将R[1]的数值改为1的时候程序跳过后面一段继续执行",
      D: "表示等待R[1]的数值为1的时候程序继续执行"
    },
    answer: "D",
    category: "编程基础"
  },
  {
    id: 229,
    type: "single_choice",
    question: "配置外部信号时将（）索引建立映射关系的过程。①，系统信号；②.IO输入输出；③，系统变量；④.寄存器数据",
    options: {
      A: "①②③④",
      B: "①②",
      C: "①②③",
      D: "①③④"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 230,
    type: "single_choice",
    question: "（）指令用来等待数字输入信号为1。",
    options: {
      A: "wait(D_OUT[10],ON)",
      B: "wait(D_IN[10],ON)",
      C: "wait(D_OUT[10],OFF)",
      D: "wait(D_IN[10],OFF)"
    },
    answer: "B",
    category: "编程基础"
  },
  {
    id: 231,
    type: "single_choice",
    question: "配置机器人外部I/O信号，可以实现外部信号控制伺服使能的是（）。",
    options: {
      A: "iPRG_LOAD",
      B: "iENABLE",
      C: "oENABLE_STATE",
      D: "oPRG_READY"
    },
    answer: "B",
    category: "IO控制"
  },
  {
    id: 232,
    type: "single_choice",
    question: "（）指令可用来等待数字输出信号为0。",
    options: {
      A: "wait(D_OUT[11],ON)",
      B: "wait(D_IN[11],ON)",
      C: "wait(D_OUT[11],OFF)",
      D: "wait(D_IN[11],OFF)"
    },
    answer: "C",
    category: "编程基础"
  },
  {
    id: 233,
    type: "single_choice",
    question: "触摸屏实现数值输入时，要对应PLC内部的（",
    options: {
      A: "输入点X",
      B: "输入点Y",
      C: "数据存储器",
      D: "中间继电器M"
    },
    answer: "C",
    category: "人机界面"
  },
  {
    id: 234,
    type: "single_choice",
    question: "在制作HMI画面时，如果需要做一个按钮，点击按钮跳转到其他画面中，需要在按钮属性的（）中进行设置。",
    options: {
      A: "属性",
      B: "动画",
      C: "事件",
      D: "文本"
    },
    answer: "C",
    category: "人机界面"
  },
  {
    id: 235,
    type: "single_choice",
    question: "在'添加新设备'对话框中可以看到所有型号的CPU，下面那些信息是不能够在此对话框中显示出来的（）。",
    options: {
      A: "型号",
      B: "订货号",
      C: "版本",
      D: "CPU支持的IO点数"
    },
    answer: "D",
    category: "硬件配置"
  },
  {
    id: 236,
    type: "single_choice",
    question: "PLC希望收到HMI反馈的画面号，需要在（）设置反馈的数据地址。",
    options: {
      A: "连接/区域指针",
      B: "连接/参数",
      C: "运行系统设置",
      D: "设备组态"
    },
    answer: "A",
    category: "人机界面"
  },
  {
    id: 237,
    type: "single_choice",
    question: "在在HMI中使用面板时，接口变量的数量由（）决定。",
    options: {
      A: "面板的动态属性",
      B: "面板变量的数量",
      C: "面板中使用按钮的数量",
      D: "面板中事件的数量"
    },
    answer: "A",
    category: "人机界面"
  },
  {
    id: 238,
    type: "single_choice",
    question: "在HMI中建立面板，如果面板中使用的结构数据和PLC中使用的UDT数据地址相同，需要去掉（）选项，才能够正常使用。",
    options: {
      A: "保持性",
      B: "在HMI中可见",
      C: "设置值",
      D: "启动值"
    },
    answer: "B",
    category: "人机界面"
  },
  {
    id: 239,
    type: "single_choice",
    question: "用于HMI的报警变量需要是一个（）数据。",
    options: {
      A: "BOOL",
      B: "BYTE",
      C: "WORD",
      D: "DWORD"
    },
    answer: "C",
    category: "人机界面"
  },
  {
    id: 240,
    type: "single_choice",
    question: "华数工业机器人运行模式不包括（）。",
    options: {
      A: "手动模式",
      B: "自动模式",
      C: "外部模式",
      D: "远程模式"
    },
    answer: "D",
    category: "操作模式"
  },
  {
    id: 241,
    type: "single_choice",
    question: "下列不属于S7-1200系列PLC的编程元件的是（）。",
    options: {
      A: "输入继电器I",
      B: "输出继电器Q",
      C: "辅助继电器M",
      D: "输出继电器Y"
    },
    answer: "D",
    category: "PLC控制"
  },
  {
    id: 242,
    type: "single_choice",
    question: "在执行以下程序过程中，工业机器人将调用（）次abc子程序。IR[1]=6 WHILEIR[1] < 0 CALL abc IR[1]=IR[1]- 1 END WHILE",
    options: {
      A: "6",
      B: "5",
      C: "4",
      D: "7"
    },
    answer: "A",
    category: "编程基础"
  },
  {
    id: 243,
    type: "single_choice",
    question: "IO指令包括了（）指令。①.DI；②.DO；③.LBL；④.WAIT",
    options: {
      A: "①②③④",
      B: "①②④",
      C: "①②③",
      D: "①③④"
    },
    answer: "B",
    category: "编程基础"
  },
  {
    id: 244,
    type: "single_choice",
    question: "使用焊枪示教前，检查焊枪的均压装置是否良好，动作是否正常，同时对电极头的要求是（）。",
    options: {
      A: "更换新的电极头",
      B: "使用磨耗量大的电极头",
      C: "电极头无影响",
      D: "新的或旧的都行"
    },
    answer: "A",
    category: "焊接系统"
  },
  {
    id: 245,
    type: "single_choice",
    question: "在汽车焊接生产线上引入机器人的主要原因不包括哪一条。（）",
    options: {
      A: "可以提高汽车产量",
      B: "适应汽车产品的多样化",
      C: "可以提高产品质量",
      D: "能提高生产率"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 246,
    type: "single_choice",
    question: "机器人作业过程分两类，一类是非接触式，一类是接触式。下面哪种机器人属于非接触式作业机器人。（）",
    options: {
      A: "拧螺钉机器人",
      B: "装配机器人",
      C: "抛光机器人",
      D: "弧焊机器人"
    },
    answer: "D",
    category: "机器人类型"
  },
  {
    id: 247,
    type: "single_choice",
    question: "工业机器人的额定负载是指在规定范围内（）所能承受的最大负载允许值。",
    options: {
      A: "末端执行器",
      B: "手臂",
      C: "手腕机械接口处",
      D: "机座"
    },
    answer: "C",
    category: "基础知识"
  },
  {
    id: 248,
    type: "single_choice",
    question: "为了确保安全，用示教编程器手动运行机器人时，机器人的最高速度限制为( )。",
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
    id: 249,
    type: "single_choice",
    question: "正常联动生产时，机器人示教编程器上运行模式应该打到（）位置上。",
    options: {
      A: "外部模式",
      B: "编辑模式",
      C: "操作模式",
      D: "安全模式"
    },
    answer: "A",
    category: "操作模式"
  },
  {
    id: 250,
    type: "single_choice",
    question: "示教编程器上安全开关握紧为ON,松开为OFF状态，作为进而追加的功能，当握紧力过大时，为（）状态。",
    options: {
      A: "OFF",
      B: "ON",
      C: "不变",
      D: "急停报错"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 251,
    type: "single_choice",
    question: "装配机器人这类机器人要有较高的位姿精度，手腕具有较大的柔性。目前大多用于（）的装配作业。",
    options: {
      A: "工业产品",
      B: "服务行业",
      C: "医疗产品",
      D: "机电产品"
    },
    answer: "D",
    category: "机器人类型"
  },
  {
    id: 252,
    type: "single_choice",
    question: "点位控制方式的应用范围不包括（）。",
    options: {
      A: "视觉分抹",
      B: "上下料",
      C: "搬运",
      D: "点焊"
    },
    answer: "A",
    category: "控制技术"
  },
  {
    id: 253,
    type: "single_choice",
    question: "机器人作业过程分两类，一类是非接触式，一类是接触式。下面哪种机器人属于非接触式作业机器人。（）",
    options: {
      A: "拧螺钉机器人",
      B: "装配机器人",
      C: "抛光机器人",
      D: "弧焊机器人"
    },
    answer: "D",
    category: "机器人类型"
  },
  {
    id: 254,
    type: "single_choice",
    question: "喷涂机器人一般采用（）驱动，具有动作速度快、防爆性能好等特点。",
    options: {
      A: "气动",
      B: "液压",
      C: "电力",
      D: "步进电机"
    },
    answer: "B",
    category: "机器人类型"
  },
  {
    id: 255,
    type: "single_choice",
    question: "焊接机器人的焊接作业主要包括（）。①点焊；②间断焊；③平焊；④气体保护焊；⑤弧焊",
    options: {
      A: "①②③④",
      B: "①②③⑤",
      C: "①⑤",
      D: "①②③④⑤"
    },
    answer: "C",
    category: "焊接系统"
  },
  {
    id: 256,
    type: "single_choice",
    question: "点位控制方式的应用范围（）①．视觉分抹；②．上下料；③．搬运；④．点焊",
    options: {
      A: "②③④",
      B: "①②",
      C: "①②③",
      D: "①④"
    },
    answer: "A",
    category: "控制技术"
  },
  {
    id: 257,
    type: "single_choice",
    question: "一副灰度级均匀分布的图像，其灰度范围在[0,255]，则该图像的信息量为( )。",
    options: {
      A: "0",
      B: "6",
      C: "8",
      D: "255"
    },
    answer: "C",
    category: "视觉系统"
  },
  {
    id: 258,
    type: "single_choice",
    question: "数字图像处理研究的内容不包括（）",
    options: {
      A: "图像数字化",
      B: "图像增强",
      C: "图像分割",
      D: "图像存储"
    },
    answer: "D",
    category: "视觉系统"
  },
  {
    id: 259,
    type: "single_choice",
    question: "大小为1024X1024，灰度级别为256色的图像文件大小为（)。",
    options: {
      A: "512KB",
      B: "1MB",
      C: "1.5MB",
      D: "2MB"
    },
    answer: "B",
    category: "视觉系统"
  },
  {
    id: 260,
    type: "single_choice",
    question: "下列关于梯形图叙述错误的是（",
    options: {
      A: "按自上而下、从左到右的顺序排列",
      B: "所有继电器既有线圈，又有触点",
      C: "一般情况下，某个编号继电器线圈只能出现一次，而继电器触点可出现无数多",
      D: "梯形图中的继电器不是物理继电器，而是软继电器"
    },
    answer: "B",
    category: "PLC控制"
  },
  {
    id: 261,
    type: "single_choice",
    question: "下列指令中哪一个不是计数器指令（",
    options: {
      A: "TON",
      B: "CTUD",
      C: "CTU",
      D: "CTD"
    },
    answer: "A",
    category: "PLC控制"
  },
  {
    id: 262,
    type: "single_choice",
    question: "立即输入指令可以用于下面那个量中（",
    options: {
      A: "I",
      B: "Q",
      C: "V",
      D: "M"
    },
    answer: "A",
    category: "PLC控制"
  },
  {
    id: 263,
    type: "single_choice",
    question: "在PLC编程中，最常用的编程语言是（",
    options: {
      A: "LAD",
      B: "STL",
      C: "FBD",
      D: "C"
    },
    answer: "A",
    category: "PLC控制"
  },
  {
    id: 264,
    type: "single_choice",
    question: "对机器人进行示教时，模式旋钮打到示教模式后，在此模式中，外部设备发出的启动信号（)。",
    options: {
      A: "无效",
      B: "有效",
      C: "延时后有效",
      D: "视情况而定"
    },
    answer: "A",
    category: "示教操作"
  },
  {
    id: 265,
    type: "single_choice",
    question: "机器人经常使用的程序可以设置为主程序，每台机器人可以设置（）主程序。",
    options: {
      A: "1个",
      B: "5个",
      C: "3个",
      D: "无限制"
    },
    answer: "A",
    category: "编程基础"
  },
  {
    id: 266,
    type: "single_choice",
    question: "机器人三原则是由（）提出的。",
    options: {
      A: "阿西莫夫",
      B: "约瑟夫·英格伯格",
      C: "托莫维奇",
      D: "森政弘"
    },
    answer: "A",
    category: "基础知识"
  },
  {
    id: 267,
    type: "single_choice",
    question: "运动学主要是研究机器人的（",
    options: {
      A: "运动和时间的关系",
      B: "动力源是什么",
      C: "动力的传递与转换",
      D: "运动的应用"
    },
    answer: "A",
    category: "运动学"
  },
  {
    id: 268,
    type: "single_choice",
    question: "动力学主要是研究机器人的（",
    options: {
      A: "动力的传递与转换",
      B: "运动和时间的关系",
      C: "动力源是什么",
      D: "动力的应用"
    },
    answer: "A",
    category: "动力学"
  },
  {
    id: 269,
    type: "single_choice",
    question: "气动控制元件不能够控制和调节压缩空气（）",
    options: {
      A: "流量",
      B: "压力",
      C: "方向",
      D: "温度"
    },
    answer: "D",
    category: "气动系统"
  },
  {
    id: 270,
    type: "single_choice",
    question: "气动三联件不包括（）。",
    options: {
      A: "过滤器",
      B: "减压阀",
      C: "油雾器",
      D: "截止阀"
    },
    answer: "D",
    category: "气动系统"
  },
  {
    id: 271,
    type: "single_choice",
    question: "下列指令实现循环执行5次，空白处应该填写的指令是（）IR[1]=5 WHILE CALL abc IR[1]=IR[1]- 1 END WHILE",
    options: {
      A: "IR[1]>10",
      B: "IR[1]<10",
      C: "IR[1]>0",
      D: "IR[1]<0"
    },
    answer: "C",
    category: "编程基础"
  },
  {
    id: 272,
    type: "single_choice",
    question: "下列属于工业机器人连续轨迹控制方式的应用有（）①喷涂；②弧焊；③点焊；④切割",
    options: {
      A: "①②④",
      B: "①②",
      C: "①④",
      D: "①③④"
    },
    answer: "A",
    category: "控制技术"
  },
  {
    id: 273,
    type: "single_choice",
    question: "位置等级是指机器人经过示教的位置时的接近程度，设定了合适的位置等级时，可使机器人运行出与周围状况和工件相适应的轨迹，其中位置等级（）。",
    options: {
      A: "CNT值越小，运行轨迹越精准",
      B: "CNT值大小，与运行轨迹关系不大",
      C: "CNT值越大，运行轨迹越精准",
      D: "只与运动速度有关"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 274,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时，以（）。",
    options: {
      A: "示教最高速度来限制运行",
      B: "程序给定的速度运行",
      C: "示教最低速度来运行",
      D: "程序报错"
    },
    answer: "A",
    category: "示教操作"
  },
  {
    id: 275,
    type: "single_choice",
    question: "当代机器人大军中最主要的机器人为（",
    options: {
      A: "工业机器人",
      B: "军用机器人",
      C: "服务机器人",
      D: "特种机器人"
    },
    answer: "A",
    category: "机器人类型"
  },
  {
    id: 276,
    type: "single_choice",
    question: "手部的位姿是由（）构成的。",
    options: {
      A: "姿态与位置",
      B: "位置与速度",
      C: "位置与运行状态",
      D: "姿态与速度"
    },
    answer: "A",
    category: "基础知识"
  },
  {
    id: 277,
    type: "single_choice",
    question: "机器人轨迹控制过程需要通过求解（）获得各个关节角的位置控制系统的设定值。",
    options: {
      A: "运动学逆问题",
      B: "运动学正问题",
      C: "动力学正问题",
      D: "动力学逆问题"
    },
    answer: "A",
    category: "运动控制"
  },
  {
    id: 278,
    type: "single_choice",
    question: "电机正反转运行中的两接触器必须实现相互间（）。",
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
    id: 279,
    type: "single_choice",
    question: "在S7-1215CPLC中，以下关于数据块的保持性的描述中，正确的是（）。",
    options: {
      A: "全局数据块只能进行整体性保持性设定",
      B: "FB的背景数据不能进行保持性设定",
      C: "IEC定时器的背景数据不能进行保持性设定",
      D: "IEC计数器的背景数据可进行保持性设定"
    },
    answer: "D",
    category: "PLC控制"
  },
  {
    id: 280,
    type: "single_choice",
    question: "在S7-1215CPLC中，对于FB，声明区中的（）不存放于背景DB中。",
    options: {
      A: "IN",
      B: "OUT",
      C: "STATIC",
      D: "TEMP"
    },
    answer: "D",
    category: "PLC控制"
  },
  {
    id: 281,
    type: "single_choice",
    question: "（）编程语言不能用于S7-1200编程。",
    options: {
      A: "LAD",
      B: "FBD",
      C: "STL",
      D: "SCL"
    },
    answer: "C",
    category: "PLC控制"
  },
  {
    id: 282,
    type: "single_choice",
    question: "下面哪种类型的学习能够用于移动机器人的路径规划（）。",
    options: {
      A: "遗传算法",
      B: "PID神经网络",
      C: "自适应线性神经网络",
      D: "多层前向神经网络"
    },
    answer: "A",
    category: "智能控制"
  },
  {
    id: 283,
    type: "single_choice",
    question: "通常对机器人进行示教编程时，要求最初程序点与最终程序点的位置（），可提高工作效率。",
    options: {
      A: "相同",
      B: "不同",
      C: "无所谓",
      D: "分离越大越好"
    },
    answer: "A",
    category: "编程技术"
  },
  {
    id: 284,
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
    id: 285,
    type: "single_choice",
    question: "对点焊机器人而言，TCP一般设在焊钳开口的（）处。",
    options: {
      A: "起点",
      B: "中点",
      C: "终点",
      D: "任意位置"
    },
    answer: "B",
    category: "焊接系统"
  },
  {
    id: 286,
    type: "single_choice",
    question: "在执行以下程序过程中，工业机器人将调用几次abc子程序（）。R[1]=5 LBL[1]IF R[1]<1 GOTO LBL[2]CALL abcR[1]=R[1]- 1JMP LBL[1]",
    options: {
      A: "5次",
      B: "4次",
      C: "3次",
      D: "6次"
    },
    answer: "A",
    category: "编程基础"
  },
  {
    id: 287,
    type: "single_choice",
    question: "工业机器人应用编程平台一个子网中有两台设备，下列（）IP地址不能实现这两台设备能够通信？",
    options: {
      A: "192.168.0.10/24和192.168.0.250/24",
      B: "192.168.0.123/16和192.168.1.132/16",
      C: "192.168.0.123/26和192.168.0.133/26",
      D: "192.168.0.123/27和192.168.0.100/27"
    },
    answer: "B",
    category: "网络通信"
  },
  {
    id: 288,
    type: "single_choice",
    question: "使用（）可实现程序循环运行。①.GOTO LBL[]；②.LBL[]；③WHILE；④.IF",
    options: {
      A: "①②③④",
      B: "①②④",
      C: "①②③",
      D: "①③"
    },
    answer: "C",
    category: "编程基础"
  },
  {
    id: 289,
    type: "single_choice",
    question: "寄存器指令用于寄存器赋值更改，包含（）。①．浮点型R寄存器；②.JR寄存器；③.LR寄存器；④.LP寄存器",
    options: {
      A: "①②③④",
      B: "①②④",
      C: "①②③",
      D: "①③④"
    },
    answer: "C",
    category: "寄存器系统"
  },
  {
    id: 290,
    type: "single_choice",
    question: "工业机器人系统编程中可以对（）编程.①数字量IO信号对供料输送；②模拟量信号对输送检测；③组信号与PLC实现通讯；④多任务方式",
    options: {
      A: "①②③④",
      B: "②③④",
      C: "①③④",
      D: "①②③"
    },
    answer: "D",
    category: "编程技术"
  },
  {
    id: 291,
    type: "single_choice",
    question: "华数机器人采用（）离线编程软件。",
    options: {
      A: "RobotMaster",
      B: "RobotStudio",
      C: "simpro",
      D: "InteRobot"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 292,
    type: "single_choice",
    question: "下列软件中不是工业机器人离线编程仿真软件的是（）。",
    options: {
      A: "RobotGuide",
      B: "RobotCAD",
      C: "Solidworks",
      D: "Delmia"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 293,
    type: "single_choice",
    question: "InteRobot是知名的工业机器人离线编程仿真软件，它是哪个公司的产品（）。",
    options: {
      A: "发那科",
      B: "ABB",
      C: "华数",
      D: "安川"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 294,
    type: "single_choice",
    question: "工业机器人离线编程的主要的步骤有①轨迹规划；②场景搭建；③工序优化；④程序输出，下列排序正确的是（",
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
    id: 295,
    type: "single_choice",
    question: "在InteRobot中，缩放视图的快捷操作是（",
    options: {
      A: "按住【Ctrl键】【鼠标左键】拖动",
      B: "按住【Ctrl键】【鼠标左键】拖动",
      C: "按住【右键】拖动",
      D: "滚动【鼠标滚轮】"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 296,
    type: "single_choice",
    question: "InteRobot中，对（）格式模型不可进行标定，只可进行姿态调整。",
    options: {
      A: "STL",
      B: "STP",
      C: "STEP",
      D: "IGS"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 297,
    type: "single_choice",
    question: "仿真控制器不能实现的功能是（",
    options: {
      A: "编程",
      B: "控制仿真时间",
      C: "控制仿真开始和停止",
      D: "控制仿真速度"
    },
    answer: "A",
    category: "仿真技术"
  },
  {
    id: 298,
    type: "single_choice",
    question: "在虚拟仿真系统中，下列关于各坐标系描述中，正确的是（）。",
    options: {
      A: "可以使用世界坐标系进行全局定位",
      B: "父系坐标系是全局坐标系，具有固定的原点",
      C: "一个对象只能拥有一个物体坐标系",
      D: "父系坐标是其它坐标系的基础"
    },
    answer: "A",
    category: "仿真技术"
  },
  {
    id: 299,
    type: "single_choice",
    question: "工业机器人常用的编程方式是：（",
    options: {
      A: "示教编程和离线编程",
      B: "示教编程和在线编程",
      C: "在线编程和离线编程",
      D: "示教编程和软件编程"
    },
    answer: "A",
    category: "编程技术"
  },
  {
    id: 300,
    type: "single_choice",
    question: "Interobot生成的工程文件压缩包的格式是（",
    options: {
      A: "INC",
      B: "RGX",
      C: "EXE",
      D: "IGS"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 301,
    type: "single_choice",
    question: "目前工业机器人应用于多数的制造领域，下列工艺中适合采用离线编程的是（）。",
    options: {
      A: "码垛",
      B: "点焊",
      C: "不锈钢字切割",
      D: "零件装配"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 302,
    type: "single_choice",
    question: "下列关于离线编程与仿真技术说法错误的是（",
    options: {
      A: "融入了计算机图形学技术",
      B: "轨迹可自动进行规划",
      C: "编程周期长、效率低",
      D: "仿真运行以检验离线程序"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 303,
    type: "single_choice",
    question: "下列中关于离线编程的说法正确的是（",
    options: {
      A: "现场示教",
      B: "脱机工作",
      C: "目测精度",
      D: "不适用于复杂路径"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 304,
    type: "single_choice",
    question: "下面哪个不是智能制造虚拟仿真系统的功能模块（）。",
    options: {
      A: "成本预估",
      B: "离线仿真编程",
      C: "PLC仿真验证",
      D: "工业机器人运动控制编程"
    },
    answer: "A",
    category: "仿真技术"
  },
  {
    id: 305,
    type: "single_choice",
    question: "下列设备中属于机器人可支持的外部群组的是（）。",
    options: {
      A: "行走轴",
      B: "变位机",
      C: "电焊机",
      D: "焊弧枪"
    },
    answer: "B",
    category: "外围设备"
  },
  {
    id: 306,
    type: "single_choice",
    question: "Interobot软件中，变位机新建界面的Base建模参数决定变位机建模坐标相对于（）的位置，修改该参数会改变变位机的位置。",
    options: {
      A: "世界坐标系",
      B: "笛卡尔坐标系",
      C: "工件坐标系",
      D: "工具坐标系"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 307,
    type: "single_choice",
    question: "Interobot软件中，对工件位置的标定通过（）确定。",
    options: {
      A: "2点",
      B: "3点",
      C: "6点",
      D: "9点"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 308,
    type: "single_choice",
    question: "现需要创建滑台模型，在工作场景的导入模型中可以选择（）类型的模型",
    options: {
      A: "STP",
      B: "TXT",
      C: "DWG",
      D: "PRT"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 309,
    type: "single_choice",
    question: "通过（）可以修改模型在空间中摆放的位置",
    options: {
      A: "CTRL+左击",
      B: "CTRL+右击",
      C: "shift+左击",
      D: "shift+右击"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 310,
    type: "single_choice",
    question: "在工作场景刚导入的模型上（），在弹出的快捷菜单中可以进行颜色、移动、显示等相关的设定",
    options: {
      A: "点击左键",
      B: "双击",
      C: "单击右键",
      D: "长按鼠标"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 311,
    type: "single_choice",
    question: "可以通过第三方的建模软件进行建模，并通过（）格式导入到InteRobot中来完成建模布局。",
    options: {
      A: "*.step",
      B: "*.pdf",
      C: "*.c",
      D: "*.doc"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 312,
    type: "single_choice",
    question: "可以在草图的（）菜单中，建立立体模型进行仿真",
    options: {
      A: "立方体",
      B: "矩阵",
      C: "工件组",
      D: "圆"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 313,
    type: "single_choice",
    question: "在刚创建的模型上单击右键，在弹出的菜单中选择（），可以将模型更改为蓝色。",
    options: {
      A: "设定颜色",
      B: "图形显示",
      C: "链接几何体",
      D: "更改设置"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 314,
    type: "single_choice",
    question: "离线编程中在工作场景中刚创建的模型上单击右键，在弹出的菜单中选择（），可以将模型更改为蓝色。",
    options: {
      A: "位姿调整",
      B: "属性",
      C: "链接几何体",
      D: "更改设置"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 315,
    type: "single_choice",
    question: "离线编程中，在工具栏菜单中选择（），可以修改模型的透明度。",
    options: {
      A: "实体视图",
      B: "线框视图",
      C: "等轴测试图",
      D: "更改设置"
    },
    answer: "B",
    category: "离线编程"
  },
  {
    id: 316,
    type: "single_choice",
    question: "工具模型的本地坐标系要与机器人法兰盘坐标系（）重合。",
    options: {
      A: "高度",
      B: "Tool0",
      C: "位置",
      D: "坐标方向"
    },
    answer: "B",
    category: "坐标系统"
  },
  {
    id: 317,
    type: "single_choice",
    question: "在华数三型的工具坐标系数据中，A轴的含义是（）。",
    options: {
      A: "工具Z轴的自旋角",
      B: "工具X轴的与默认工具X轴的夹角",
      C: "TCP的X轴的自旋角",
      D: "工具X轴的与基座标的X轴夹角"
    },
    answer: "A",
    category: "坐标系统"
  },
  {
    id: 318,
    type: "single_choice",
    question: "一般地默认工具中心点TCP位于工业机器人（）",
    options: {
      A: "法兰盘中心",
      B: "工具尖端点",
      C: "工具任一点",
      D: "工具中心点"
    },
    answer: "A",
    category: "坐标系统"
  },
  {
    id: 319,
    type: "single_choice",
    question: "6点法建立工具坐标系重新设定了TCP的（）方向。",
    options: {
      A: "X、Y、Z",
      B: "X和Y",
      C: "X和Z",
      D: "Y和Z"
    },
    answer: "A",
    category: "坐标系统"
  },
  {
    id: 320,
    type: "single_choice",
    question: "在工件所在的平面上只需要定义（）个点，就可以建立工件坐标系。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "B",
    category: "坐标系统"
  },
  {
    id: 321,
    type: "single_choice",
    question: "6点法建立工具坐标系，需要在第5点和第6点设定TCP的（）方向。",
    options: {
      A: "X",
      B: "Z",
      C: "Y",
      D: "X和Z"
    },
    answer: "D",
    category: "坐标系统"
  },
  {
    id: 322,
    type: "single_choice",
    question: "在虚拟搬运工作站中需依次完成（）、轨迹路径创建、目标点示教、程序编写及调试。",
    options: {
      A: "六轴原点校正",
      B: "TCP设置",
      C: "回机械原点",
      D: "启动虚拟示教器"
    },
    answer: "B",
    category: "虚拟仿真"
  },
  {
    id: 323,
    type: "single_choice",
    question: "( )是整个机器人系统设计的关键环节，它直接影响工作站的总体布局、机器人型号的选定、末端执行器和变位机的设计等，在进行总体方案设计时应引起足够的重视。",
    options: {
      A: "分析作业对象，拟定合理的作业工艺",
      B: "生产节拍",
      C: "系统维护",
      D: "安全规范和标准"
    },
    answer: "A",
    category: "系统设计"
  },
  {
    id: 324,
    type: "single_choice",
    question: "在切割、涂胶、焊接等工作站中，常会需要处理一些不规则的曲线，（）即根据3D模型的曲线特征自动转换成机器人的运行轨迹。",
    options: {
      A: "描点法",
      B: "图形化编程",
      C: "示教点",
      D: "TCP跟踪"
    },
    answer: "B",
    category: "轨迹规划"
  },
  {
    id: 325,
    type: "single_choice",
    question: "在离线编程创建用户坐标系时，需单击'工作站'中的'创建坐标系'，选择（），捕捉坐标点点，创建坐标系。",
    options: {
      A: "3点法",
      B: "坐标系原点",
      C: "机器人",
      D: "姿态调整"
    },
    answer: "C",
    category: "离线编程"
  },
  {
    id: 326,
    type: "single_choice",
    question: "离线编程中在完成布局以后，要为工作站加载（），才可进行运动仿真。",
    options: {
      A: "路径",
      B: "通讯",
      C: "工具",
      D: "模型"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 327,
    type: "single_choice",
    question: "装盘码垛是指在托盘上装放同一形状的立体形包装物品，可以采取各种交错咬合的办法码垛，这样可以保证托盘具有足够的稳定，甚至不需要再用其他方式加固。下列属于托盘上货体码放方式的是（）。",
    options: {
      A: "重叠式",
      B: "纵横交错式",
      C: "旋转交错式",
      D: "以上都是"
    },
    answer: "D",
    category: "码垛应用"
  },
  {
    id: 328,
    type: "single_choice",
    question: "在（）编辑器中可以进行添加、复制、粘贴、删除等常规文本编辑操作。",
    options: {
      A: "仿真",
      B: "建模",
      C: "基本",
      D: "文本文档"
    },
    answer: "D",
    category: "编程基础"
  },
  {
    id: 329,
    type: "single_choice",
    question: "右击'工序组'菜单中'操作'的（）按钮可以开始进行仿真。",
    options: {
      A: "动作仿真",
      B: "重置",
      C: "监控",
      D: "I/O仿真器"
    },
    answer: "A",
    category: "仿真技术"
  },
  {
    id: 330,
    type: "single_choice",
    question: "在码垛工作站，常会用到FOR指令用于编写位置逻辑计算程序段，该指令有（）的作用？",
    options: {
      A: "测试",
      B: "计算",
      C: "循环",
      D: "偏移"
    },
    answer: "C",
    category: "码垛应用"
  },
  {
    id: 331,
    type: "single_choice",
    question: "（）控制TCP（工具中心点）沿直线轨迹运动到目标位置，其速度由程序指令直接指定。",
    options: {
      A: "J指令",
      B: "L指令",
      C: "C指令",
      D: "以上都不是"
    },
    answer: "B",
    category: "运动指令"
  },
  {
    id: 332,
    type: "single_choice",
    question: "作业路径通常用（）坐标系相对于工件坐标系的运动来描述。",
    options: {
      A: "手抓",
      B: "固定",
      C: "运动",
      D: "工具"
    },
    answer: "D",
    category: "轨迹规划"
  },
  {
    id: 333,
    type: "single_choice",
    question: "点位控制方式（PTP）的主要技术指标是：（",
    options: {
      A: "定位精度和运动时间",
      B: "定位精度和运动速度",
      C: "运动速度和运动时间",
      D: "位姿轨迹和运动速度"
    },
    answer: "A",
    category: "控制技术"
  },
  {
    id: 334,
    type: "single_choice",
    question: "在用机器人进行弧焊作业中，对夹具的要求描述错误的是：（）。",
    options: {
      A: "减少定位误差",
      B: "装拆方便",
      C: "工件的固定和定位自动化",
      D: "回避与焊枪的干涉"
    },
    answer: "C",
    category: "焊接系统"
  },
  {
    id: 335,
    type: "single_choice",
    question: "离线编程中通过（）功能，可以验证机器人当前轨迹是否会与周边设备发生干涉。",
    options: {
      A: "TCP跟踪",
      B: "急停",
      C: "报警",
      D: "碰撞检测"
    },
    answer: "D",
    category: "离线编程"
  },
  {
    id: 336,
    type: "single_choice",
    question: "离线编程中（）选项卡中有专门用于检测碰撞的功能---碰撞监控。",
    options: {
      A: "仿真",
      B: "建模",
      C: "控制器",
      D: "RAPID"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 337,
    type: "single_choice",
    question: "可在工作站的仿真内设置多碰撞干涉时，能包含（）组对象。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "任意"
    },
    answer: "D",
    category: "仿真技术"
  },
  {
    id: 338,
    type: "single_choice",
    question: "离线编程采用（）功能，可以使选择的两组对象之间的距离小于该数值时，则颜色提示。",
    options: {
      A: "碰撞检测",
      B: "接近丢失",
      C: "碰撞设置",
      D: "TCP跟踪"
    },
    answer: "A",
    category: "离线编程"
  },
  {
    id: 339,
    type: "single_choice",
    question: "在机器人运行过程中，我们可以监控（）的运动轨迹以及运动速度，以便进行性能分析。",
    options: {
      A: "轴",
      B: "法兰盘",
      C: "TCP",
      D: "基座"
    },
    answer: "C",
    category: "性能分析"
  },
  {
    id: 340,
    type: "single_choice",
    question: "如需控制机器人的速度为缓慢，需在仿真菜单中设定（）的值为50%",
    options: {
      A: "TCP跟踪",
      B: "仿真速度",
      C: "TCP加速度",
      D: "手腕奇异点"
    },
    answer: "B",
    category: "仿真技术"
  },
  {
    id: 341,
    type: "single_choice",
    question: "如需控制机器人的加速度不超过限定值，需在生成的程序中设定（）指令的临界值。",
    options: {
      A: "TCP跟踪",
      B: "TCP速度",
      C: "TCP加速度",
      D: "手腕奇异点"
    },
    answer: "C",
    category: "运动控制"
  },
  {
    id: 342,
    type: "single_choice",
    question: "如需判断机器人是否接近奇异点，需在生成（）轴程序中改变点位姿态参数。",
    options: {
      A: "单",
      B: "关节",
      C: "实",
      D: "虚"
    },
    answer: "D",
    category: "奇异点处理"
  },
  {
    id: 343,
    type: "single_choice",
    question: "如需控制机器人是否接近关节限值，需在仿真模型属性中设定（），指定在发出警报之前每个关节与其限值的接近程度。",
    options: {
      A: "TCP跟踪",
      B: "关节限值",
      C: "TCP加速度",
      D: "手腕奇异点"
    },
    answer: "B",
    category: "关节限值"
  },
  {
    id: 344,
    type: "single_choice",
    question: "力控制方式的输入量和反馈量是（",
    options: {
      A: "位置信号",
      B: "力（力矩）信号",
      C: "速度信号",
      D: "加速度信号"
    },
    answer: "B",
    category: "力控制"
  },
  {
    id: 345,
    type: "single_choice",
    question: "机器人应用时，对控制系统电柜内的电气元器件接地有着严格的要求，进线接地线线径不可低于（）平方毫米，进入电柜后接入接地排，电柜内各电器必须接地，且线径不可低于（）平方毫米。",
    options: {
      A: "2.5,1.5",
      B: "2.0,1.5",
      C: "1.5,2.0",
      D: "1.5,1.5"
    },
    answer: "A",
    category: "电气安全"
  },
  {
    id: 346,
    type: "single_choice",
    question: "下列设备中，不属于工作站机械系统维护范畴的是（",
    options: {
      A: "机器人本体",
      B: "工件传输单元",
      C: "焊接电源",
      D: "末端执行器"
    },
    answer: "C",
    category: "维护保养"
  },
  {
    id: 347,
    type: "single_choice",
    question: "手动操作使工业机器人各关节轴运动到机械原点刻度位置时，关节轴的调整顺序为（）。1.1轴；2.轴；3.3轴；4.4轴；5.5轴；6.6轴",
    options: {
      A: "123456",
      B: "456123",
      C: "635421",
      D: "123654"
    },
    answer: "B",
    category: "校准标定"
  },
  {
    id: 348,
    type: "single_choice",
    question: "机器人标定零点时，应处于以下哪种工作模式下（）。",
    options: {
      A: "手动",
      B: "自动",
      C: "远程控制",
      D: "以上都不是"
    },
    answer: "A",
    category: "校准标定"
  },
  {
    id: 349,
    type: "single_choice",
    question: "以下哪种情况需要对工业机器人进行零点标定（）。",
    options: {
      A: "重启机器后",
      B: "机器人碰撞工件造成原点偏移时",
      C: "程序修改后",
      D: "工具坐标更改后"
    },
    answer: "B",
    category: "校准标定"
  },
  {
    id: 350,
    type: "single_choice",
    question: "进行零点标定时，一般采用（）操作模式。",
    options: {
      A: "关节运动",
      B: "线性运动",
      C: "重定位运动",
      D: "都可以"
    },
    answer: "A",
    category: "校准标定"
  },
  {
    id: 351,
    type: "single_choice",
    question: "断电后，（）情况下，需要进行零点校准。",
    options: {
      A: "机器人安装了夹爪",
      B: "机器人线路重新连接",
      C: "关节轴发生了移位",
      D: "都需要"
    },
    answer: "C",
    category: "校准标定"
  },
  {
    id: 352,
    type: "single_choice",
    question: "以下哪种会影响零点的位置（）。",
    options: {
      A: "夹爪的大小",
      B: "夹爪的重量",
      C: "安装误差",
      D: "线路的连接"
    },
    answer: "C",
    category: "校准标定"
  },
  {
    id: 353,
    type: "single_choice",
    question: "在示教器上进行校准操作之前，应该确认机器人的6个轴在（）。",
    options: {
      A: "标记零点的位置",
      B: "0度",
      C: "第五轴90度，其余轴0度",
      D: "第五轴30度，其余轴0度"
    },
    answer: "A",
    category: "校准标定"
  },
  {
    id: 354,
    type: "single_choice",
    question: "在机器人零点校准过程中，如果靠近校准点，应使用（）运动模式。",
    options: {
      A: "增量模式（1）",
      B: "增量模式（10）",
      C: "增量模式（100）",
      D: "以上都不对"
    },
    answer: "A",
    category: "校准标定"
  },
  {
    id: 355,
    type: "single_choice",
    question: "关于电机校准偏移量，说法正确的是（）。",
    options: {
      A: "刚出厂的机器人均为0",
      B: "运行一段时间后电机校准偏移量会增加",
      C: "运行一段时间后偏移量会减少",
      D: "电机校准偏移量在出厂时就已确定"
    },
    answer: "D",
    category: "校准标定"
  },
  {
    id: 356,
    type: "single_choice",
    question: "HSR机器人的零点标定在哪个子目录下（）。",
    options: {
      A: "手动操纵",
      B: "输入输出",
      C: "控制面板",
      D: "投入运行"
    },
    answer: "D",
    category: "校准标定"
  },
  {
    id: 357,
    type: "single_choice",
    question: "以下选项中属于工业机器人的轨迹特性的是（）。",
    options: {
      A: "拐角偏差",
      B: "位置超调量",
      C: "多方向位姿准确度变动",
      D: "位置稳定时间"
    },
    answer: "A",
    category: "性能测试"
  },
  {
    id: 358,
    type: "single_choice",
    question: "以下选项中不属于工业机器人的轨迹特性的是（）。",
    options: {
      A: "拐角偏差",
      B: "重复定向轨迹准确度",
      C: "摆动偏差",
      D: "位姿特性漂移"
    },
    answer: "D",
    category: "性能测试"
  },
  {
    id: 359,
    type: "single_choice",
    question: "以下选项中属于工业机器人的位姿特性的是（）。",
    options: {
      A: "摆动偏差",
      B: "轨迹速度特性",
      C: "最小定位时间",
      D: "拐角偏差"
    },
    answer: "C",
    category: "性能测试"
  },
  {
    id: 360,
    type: "single_choice",
    question: "进行位姿特性漂移试验时，需连续循环（）。",
    options: {
      A: "2小时",
      B: "4小时",
      C: "6小时",
      D: "8小时"
    },
    answer: "D",
    category: "性能测试"
  },
  {
    id: 361,
    type: "single_choice",
    question: "进行轨迹速度特性试验时，需循环试验（）。",
    options: {
      A: "6次",
      B: "8次",
      C: "10次",
      D: "30次"
    },
    answer: "C",
    category: "性能测试"
  },
  {
    id: 362,
    type: "single_choice",
    question: "多方向位姿准确度变动表示从（）相互垂直方向对相同指令位姿响应n次时，各平均实到位姿间的偏差。",
    options: {
      A: "2个",
      B: "3个",
      C: "4个",
      D: "5个"
    },
    answer: "B",
    category: "性能测试"
  },
  {
    id: 363,
    type: "single_choice",
    question: "（）表示指令位姿和从同一方向接近该指令位姿时的实到位姿平均值之间的偏差。",
    options: {
      A: "位姿准确度",
      B: "位姿重复性",
      C: "距离准确度",
      D: "距离重复性"
    },
    answer: "A",
    category: "性能测试"
  },
  {
    id: 364,
    type: "single_choice",
    question: "（）表示对同一指令位姿从同一方向重复响应n次后实到位姿的一致程度。",
    options: {
      A: "位姿准确度",
      B: "位姿重复性",
      C: "距离准确度",
      D: "距离重复性"
    },
    answer: "B",
    category: "性能测试"
  },
  {
    id: 365,
    type: "single_choice",
    question: "（）表示在同一方向对相同指令距离重复运动n次后实到距离的一致程度。",
    options: {
      A: "距离准确度",
      B: "位姿重复性",
      C: "距离重复性",
      D: "位姿准确度"
    },
    answer: "C",
    category: "性能测试"
  },
  {
    id: 366,
    type: "single_choice",
    question: "（）表示在指令距离和实到距离平均值之间位置和姿态的偏差。",
    options: {
      A: "距离准确度",
      B: "位姿重复性",
      C: "距离重复性",
      D: "位姿准确度"
    },
    answer: "A",
    category: "性能测试"
  },
  {
    id: 367,
    type: "single_choice",
    question: "用于衡量机器人停止在实到位姿快慢程度的性能的是（）。",
    options: {
      A: "位置超调量",
      B: "位姿准确度",
      C: "位姿重复性",
      D: "位置稳定时间"
    },
    answer: "D",
    category: "性能测试"
  },
  {
    id: 368,
    type: "single_choice",
    question: "（）表示在相同环境条件、机械安装和使用相同作业程序的情况下，更换同一型号的机器人时集群中心的偏差。",
    options: {
      A: "互补性",
      B: "同一性",
      C: "互换性",
      D: "重复性"
    },
    answer: "C",
    category: "性能测试"
  },
  {
    id: 369,
    type: "single_choice",
    question: "拐角偏差通常可以分为（）和圆滑拐角。",
    options: {
      A: "过渡拐角",
      B: "尖锐拐角",
      C: "微小拐角",
      D: "垂直拐角"
    },
    answer: "B",
    category: "性能测试"
  },
  {
    id: 370,
    type: "single_choice",
    question: "圆角误差定义为连续（）测量循环计算所得的最大值。",
    options: {
      A: "两次",
      B: "三次",
      C: "四次",
      D: "五次"
    },
    answer: "B",
    category: "性能测试"
  },
  {
    id: 371,
    type: "single_choice",
    question: "在额定负载条件下，使被测关节进入稳定工作状态，其他关节固定，令机器人被测关节以最大速度做出最大范围的运动，测出速度的最大值为（）。",
    options: {
      A: "最大工作速度",
      B: "最大速度",
      C: "最佳工作速度",
      D: "最大单轴速度"
    },
    answer: "D",
    category: "性能测试"
  },
  {
    id: 372,
    type: "single_choice",
    question: "机器人的（)是指机械接口中心或工具中心点在单位时间内所移动的距离或转动的角度。",
    options: {
      A: "工作速度",
      B: "运动速度",
      C: "最大工作速度",
      D: "最佳工作速度"
    },
    answer: "A",
    category: "性能测试"
  },
  {
    id: 373,
    type: "single_choice",
    question: "机器人的（)是机器人末端的最大速度。",
    options: {
      A: "工作速度",
      B: "运动速度",
      C: "最大工作速度",
      D: "最佳工作速度"
    },
    answer: "C",
    category: "性能测试"
  },
  {
    id: 374,
    type: "single_choice",
    question: "工业机器人中，连接机身和手腕的部分是（）。",
    options: {
      A: "头部",
      B: "臂部",
      C: "手部",
      D: "基座"
    },
    answer: "B",
    category: "机械结构"
  },
  {
    id: 375,
    type: "single_choice",
    question: "工业机器人中，连接手臂和手的部分是（）。",
    options: {
      A: "手腕",
      B: "臂部",
      C: "手指",
      D: "基座"
    },
    answer: "A",
    category: "机械结构"
  },
  {
    id: 376,
    type: "single_choice",
    question: "试验结果表格应提供所进行的各项试验数据的汇总及（）的不确定性。",
    options: {
      A: "试验方法",
      B: "试验设备",
      C: "试验流程",
      D: "试验条件"
    },
    answer: "B",
    category: "性能测试"
  },
  {
    id: 377,
    type: "single_choice",
    question: "GBT12642-2013中，位姿准确度的简写是（）",
    options: {
      A: "AP",
      B: "AT",
      C: "AV",
      D: "CR"
    },
    answer: "A",
    category: "性能测试"
  },
  {
    id: 378,
    type: "single_choice",
    question: "所有位姿特性试验都应在指定位姿间可达到的（）速度下进行。",
    options: {
      A: "最小",
      B: "平均",
      C: "最大",
      D: "较小"
    },
    answer: "C",
    category: "性能测试"
  },
  {
    id: 379,
    type: "single_choice",
    question: "位姿特性试验的附加试验，可以在（）速度下进行。",
    options: {
      A: "50%或10%",
      B: "40%或10%",
      C: "40%或20%",
      D: "70%或10%"
    },
    answer: "A",
    category: "性能测试"
  },
  {
    id: 380,
    type: "single_choice",
    question: "请问以下哪个不是对超出预期范围状态的说明（）。",
    options: {
      A: "试验场所",
      B: "预热时间",
      C: "测量时间",
      D: "测量停顿时间"
    },
    answer: "A",
    category: "性能测试"
  },
  {
    id: 381,
    type: "single_choice",
    question: "额定负载条件不包括以下哪一个（）。",
    options: {
      A: "质量",
      B: "重心位置",
      C: "测量时间",
      D: "测量点位置"
    },
    answer: "C",
    category: "性能测试"
  },
  {
    id: 382,
    type: "single_choice",
    question: "以下哪项不是GB/T12642所进行的试验（）。",
    options: {
      A: "位姿准确度",
      B: "轨迹准确度和轨迹重复性",
      C: "位姿重复性",
      D: "启动时间"
    },
    answer: "D",
    category: "性能测试"
  },
  {
    id: 383,
    type: "single_choice",
    question: "GBT12642-2013中，轨迹准确度的简写是（）。",
    options: {
      A: "AP",
      B: "AT",
      C: "AV",
      D: "CR"
    },
    answer: "B",
    category: "性能测试"
  },
  {
    id: 384,
    type: "single_choice",
    question: "GBT12642-2013中，拐角圆角误差的简写是（）。",
    options: {
      A: "AP",
      B: "AT",
      C: "AV",
      D: "CR"
    },
    answer: "D",
    category: "性能测试"
  },
  {
    id: 385,
    type: "single_choice",
    question: "GBT12642-2013中，位姿重复性的简写是（）。",
    options: {
      A: "RD",
      B: "RP",
      C: "RT",
      D: "RV"
    },
    answer: "B",
    category: "性能测试"
  },
  {
    id: 386,
    type: "single_choice",
    question: "GBT12642-2013中，a,b,c表示的是（）。",
    options: {
      A: "X、Y、Z轴的直线坐标",
      B: "X、Y、Z轴的姿态特性",
      C: "表示沿X、Y、Z轴的定位特性",
      D: "位姿编号1、2、3"
    },
    answer: "B",
    category: "性能测试"
  },
  {
    id: 387,
    type: "single_choice",
    question: "摆动偏差中的，WS和WF分别代表（）？",
    options: {
      A: "摆幅误差、摆频误差",
      B: "摆频误差、摆幅误差",
      C: "负载、摆幅误差",
      D: "速度、摆频误差"
    },
    answer: "A",
    category: "性能测试"
  },
  {
    id: 388,
    type: "single_choice",
    question: "试验报告的结果表格应提供所进行的各项试验数据的汇总及测量设备的（）。",
    options: {
      A: "不确定性",
      B: "软件参数",
      C: "程序",
      D: "实例"
    },
    answer: "A",
    category: "性能测试"
  },
  {
    id: 389,
    type: "single_choice",
    question: "以下机器人生产步骤合理的是（）。（1）整机线束装配（2）机械装配及检测（3）跑机测试（4）喷漆（5）电柜装配及检测",
    options: {
      A: "(1)(2)(4)(5)(3)",
      B: "(3)(4)(5)(1)(2)",
      C: "(2)(1)(5)(4)(3)",
      D: "(4)(1)(5)(2)(3)"
    },
    answer: "C",
    category: "生产工艺"
  },
  {
    id: 390,
    type: "single_choice",
    question: "打上电源开关，电柜内没有任何动静，这有可能因为（）",
    options: {
      A: "变压器坏了",
      B: "接触器坏了",
      C: "继电器坏了",
      D: "伺服驱动器坏了"
    },
    answer: "A",
    category: "故障诊断"
  },
  {
    id: 391,
    type: "single_choice",
    question: "投入电源时，需要确认机器人的（)内无作业人员。",
    options: {
      A: "动作范围",
      B: "工作前部区域",
      C: "末端运动范围",
      D: "程序运行范围"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 392,
    type: "single_choice",
    question: "下列哪些不属于人的不安全行为？（）",
    options: {
      A: "使用不安全设备",
      B: "拆除安全装置",
      C: "个人防护用品不符合安全标准",
      D: "在自动化生产红线内作业"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 393,
    type: "single_choice",
    question: "下列哪些不属于物的不安全状态？（）",
    options: {
      A: "穿戴穿孔的耐酸手套",
      B: "作业环境粉尘浓度超过卫生限值标准",
      C: "作业场地物料堆放杂乱",
      D: "氧气瓶放置焊接区域"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 394,
    type: "single_choice",
    question: "发生重伤、死亡事故的生产经营单位，应当（）？",
    options: {
      A: "立即组织抢救，并如实报告当地安全生产监督管理部门、公安部门、工会和生产经营单位主管部门",
      B: "立即组织抢救",
      C: "如实上报",
      D: "逐级上报"
    },
    answer: "A",
    category: "安全法规"
  },
  {
    id: 395,
    type: "single_choice",
    question: "下列关于《安全生产法》适用范围的说法错误的是（）？",
    options: {
      A: "正在使用中的民用建筑物发生跨塌造成的安全问题属于其调整范围",
      B: "公共场所集会活动中的安全问题不属于其调整范围",
      C: "各类工程建设和商业、娱乐业及其他服务业的经营活动属于其调整范围",
      D: "香港、澳门特别行政区的安全生产工作不属于其调整范围"
    },
    answer: "A",
    category: "安全法规"
  },
  {
    id: 396,
    type: "single_choice",
    question: "生产经营单位（）以任何形式与从业人员订立协议，免除或者减轻其对从业人员因生产安全事故伤亡依法应承担的责任。",
    options: {
      A: "不得",
      B: "可以",
      C: "允许",
      D: "禁止"
    },
    answer: "A",
    category: "安全法规"
  },
  {
    id: 397,
    type: "single_choice",
    question: "生产经营单位的主要经营管理者应当经过（）。",
    options: {
      A: "安全生产教育培训和安全资格考核",
      B: "安全生产教育",
      C: "安全生产培训",
      D: "安全资格考核"
    },
    answer: "A",
    category: "安全法规"
  },
  {
    id: 398,
    type: "single_choice",
    question: "安全设施投资（)纳入工程项目概算。",
    options: {
      A: "不得",
      B: "可以",
      C: "允许",
      D: "应当"
    },
    answer: "D",
    category: "安全法规"
  },
  {
    id: 399,
    type: "single_choice",
    question: "ISO14000系列标准是国际标准化组织制定的有关（）的系列标准。",
    options: {
      A: "健康标准",
      B: "食品工业",
      C: "药品生产",
      D: "环境管理"
    },
    answer: "D",
    category: "标准规范"
  },
  {
    id: 400,
    type: "single_choice",
    question: "岗位工作环境包括（）",
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
    id: 401,
    type: "single_choice",
    question: "影响岗位关联中的组织内部与岗位在生产或工作中的互动效果的因素主要是（）。",
    options: {
      A: "现有岗位的拓展性和新技术",
      B: "新产品的潜在性对岗位能力的要求",
      C: "技能的潜在要求",
      D: "非专业能力或技能"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 402,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时，以（）。",
    options: {
      A: "程序给定的速度运行",
      B: "示教最高速度来限制运行",
      C: "示教最低速度来运行",
      D: "示教最高速度50%来运行"
    },
    answer: "B",
    category: "示教操作"
  },
  {
    id: 403,
    type: "single_choice",
    question: "为了确保安全，用示教编程器手动运行华数机器人时，华数机器人的最高速度限制为（）。",
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
    id: 404,
    type: "single_choice",
    question: "正常联动生产时，机器人示教编程器上运行模式不应该选择（）功能。",
    options: {
      A: "手动T1操作",
      B: "自动操作",
      C: "外部操作",
      D: "手动T2操作"
    },
    answer: "A",
    category: "操作模式"
  },
  {
    id: 405,
    type: "single_choice",
    question: "我国安全色标准规定为（）。",
    options: {
      A: "红、黄、黑、蓝",
      B: "红、黄、蓝、绿",
      C: "红、蓝、白、绿",
      D: "白、蓝、棕、黄"
    },
    answer: "B",
    category: "安全标准"
  },
  {
    id: 406,
    type: "single_choice",
    question: "安全培训的目的不包括（）。",
    options: {
      A: "提供安全意识",
      B: "提高安全素质",
      C: "以人为本",
      D: "保障利益"
    },
    answer: "D",
    category: "安全培训"
  },
  {
    id: 407,
    type: "single_choice",
    question: "以下安全警示标志错误的是（）。",
    options: {
      A: "红色：禁止",
      B: "黄色：延时操作",
      C: "蓝色：遵守指令",
      D: "绿色：安全状态"
    },
    answer: "B",
    category: "安全标准"
  },
  {
    id: 408,
    type: "single_choice",
    question: "机器人编辑程序后，试机的操作前应当（）。",
    options: {
      A: "清空工件，速度设置为低速",
      B: "摆放工件，速度设定为低速",
      C: "清空工件，速度设定为中速",
      D: "摆放工件，速度设置为中速"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 409,
    type: "single_choice",
    question: "在操作工业机器人的时，应优先注意的是（）。",
    options: {
      A: "是否通电",
      B: "示教器是否方便快捷",
      C: "工作区域是否安全",
      D: "机器人是否精度高"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 410,
    type: "single_choice",
    question: "以下正确的是（）。",
    options: {
      A: "操作机器人前，投入电源时，无需确认机器人的动作范围内没有作业人员",
      B: "必须在切断电源后，作业人员才可进入机器人的动作范围内进行作业",
      C: "若检修、维修、保养等作业必须在通电状态下，2人1组进行作业时。2人都在机器人的动作范围内，保持警惕并迅速进行作业。此外，应确认好撤退路径后再行作业",
      D: "带手套进行操作示教盒"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 411,
    type: "single_choice",
    question: "小明在进行机器人操作实训时，出于好奇，将机器人动作到老师未指定区域或危险区域进行运动。此行为（）。",
    options: {
      A: "无所谓，只有不发生危险即可",
      B: "是探索新事物的必经之路，人没事就好",
      C: "不提倡，但不反对，随他人自生自灭",
      D: "危险的，涉及到人身和财产安全。立即阻止"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 412,
    type: "single_choice",
    question: "以下那项操作为正确（）。",
    options: {
      A: "工作中累了，在确保机器人无动作下，背靠机器人编辑程序。",
      B: "机器人的中间机构的电机故障，直接拆除排查故障。",
      C: "工业机器人停止期间，靠近或者抚摸工业机器人",
      D: "工业机器人动作期间，在确保安全的范围内，也不可以穿过其工作区间"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 413,
    type: "single_choice",
    question: "我国的消防工作方针是（）、防消结合。",
    options: {
      A: "预防为主",
      B: "生产为主",
      C: "防护为主",
      D: "利益为主"
    },
    answer: "A",
    category: "消防安全"
  },
  {
    id: 414,
    type: "single_choice",
    question: "在协同和交叉作业上要做到'三不伤害'，不包括（）。",
    options: {
      A: "不伤害自己",
      B: "不伤害他人",
      C: "不伤害设备",
      D: "不被他人伤害"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 415,
    type: "single_choice",
    question: "员工的职业化素养塑造过程中，以下哪些职业态度不是我们所提倡的（）。",
    options: {
      A: "坚持永不放弃",
      B: "你在为老板工作",
      C: "塑造职业品牌",
      D: "忠于你的职业"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 416,
    type: "single_choice",
    question: "要事第一，以下哪件事情应该先做（）。",
    options: {
      A: "不重要不紧急",
      B: "紧急不重要",
      C: "重要不紧急",
      D: "重要又紧急"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 417,
    type: "single_choice",
    question: "与上级领导的沟通中，我们应该避免（）。",
    options: {
      A: "一遇到困难，就请领导给出解决方案",
      B: "自动报告工作进度",
      C: "接受批评，不犯三次错误",
      D: "对自己的业务，主动提出改善计划。"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 418,
    type: "single_choice",
    question: "关于80/20时间管理原则，以下表述不正确的是（）",
    options: {
      A: "80%的工作占整个工作20%的价值",
      B: "20%的工作占整个工作80%的价值",
      C: "集中80%的精力要做20%的工作",
      D: "投入20%精力做另外80%的工作"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 419,
    type: "single_choice",
    question: "干一行，爱一行，兢兢业业做好本职工作是服务（），同志之间的互相关心、帮助也是服务（）。",
    options: {
      A: "群众",
      B: "员工",
      C: "领导",
      D: "客户"
    },
    answer: "A",
    category: "职业素养"
  },
  {
    id: 420,
    type: "single_choice",
    question: "从业人员都要树立全心全意为人民服务的思想，树立（）的从业观念，热爱本职工作，甘当群众的服务员。",
    options: {
      A: "爱屋及乌",
      B: "团结友爱，互帮互助",
      C: "顾客就是上帝",
      D: "人人为我，我为人人"
    },
    answer: "D",
    category: "职业素养"
  },
  {
    id: 421,
    type: "single_choice",
    question: "当机器人本体出现漏油现象时，下列哪一做法是错误的（）。",
    options: {
      A: "立即停止机器人运行",
      B: "继续工作，等机器人工作完成后再检查问题",
      C: "立即联系相关工作人员进行检查",
      D: "立即停止机器人相关外围设备，防止意外情况发生"
    },
    answer: "B",
    category: "故障处理"
  },
  {
    id: 422,
    type: "single_choice",
    question: "现场操作机器人时，下列做法正确的是（）。",
    options: {
      A: "操作机器人前，应戴好安全帽",
      B: "示教器使用完后随意摆放",
      C: "在机器人运动时，进入机器人工作空间",
      D: "随意更改机器人参数"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 423,
    type: "single_choice",
    question: "对机器人进行示教时，作为示教人员必须事先接受过专门的培训才行．与示教作业人员一起进行作业的监护人员，处在机器人可动范围外时，（）可进行共同作业。",
    options: {
      A: "不需要事先接受过专门的培训",
      B: "必须事先接受过专门的培训",
      C: "没有事先接受过专门的培训也可以",
      D: "无所谓"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 424,
    type: "single_choice",
    question: "在机器人动作范围内示教时，需要遵守的事项有（",
    options: {
      A: "保持从侧面观看机器人",
      B: "遵守操作步骤",
      C: "不用考虑机器人突然向自己所处方位运行时的应变方案",
      D: "不用设置躲避场所，以防万一"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 425,
    type: "single_choice",
    question: "在机器人动作范围内示教时，需要遵守的事项有（）。①保持从正面观看机器人；②遵守操作步骤；③考虑机器人突然向自己所处方位运行时的应变方案；④确保设置躲避场所，以防万一",
    options: {
      A: "①②③",
      B: "①②",
      C: "①④",
      D: "①②③④"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 426,
    type: "single_choice",
    question: "对机器人进行示教时，为了防止机器人的异常动作给操作人员造成危险，作业前必须进行的项目检查有（）等。①机器人外部电缆线外皮有无破损；②机器人有无动作异响；③机器人制动装置是否有效；④机器人紧急停止装置是否有效",
    options: {
      A: "①②③④",
      B: "①②③",
      C: "①④",
      D: "①③④"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 427,
    type: "single_choice",
    question: "企业创新要求员工努力做到(",
    options: {
      A: "不能墨守成规，但也不能标新立异",
      B: "大胆地破除现有的结论，自创理论体系",
      C: "大胆地试大胆地闯，敢于提出新问题",
      D: "激发人的灵感，遏制冲动和情感"
    },
    answer: "C",
    category: "职业素养"
  },
  {
    id: 428,
    type: "single_choice",
    question: "安全生产要做到（）。",
    options: {
      A: "防患于未然",
      B: "认真学习岗位安全规程，和技术操作规程",
      C: "工作时小心谨慎",
      D: "车间抓得紧，安全员具体检查落实"
    },
    answer: "A",
    category: "安全生产"
  },
  {
    id: 429,
    type: "single_choice",
    question: "安全文化的核心是树立（）的价值观念，真正做到'安全第一，预防为主'。",
    options: {
      A: "以经济效益为主",
      B: "以人为本",
      C: "以产品质量为主",
      D: "以管理为主"
    },
    answer: "B",
    category: "安全文化"
  },
  {
    id: 430,
    type: "single_choice",
    question: "我国规定的常用安全电压是（）。",
    options: {
      A: "42V",
      B: "24V",
      C: "12V",
      D: "36V"
    },
    answer: "D",
    category: "电气安全"
  },
  {
    id: 431,
    type: "single_choice",
    question: "6S的基本内容是：（）、素养、安全。①整理；②整顿；③清扫；④清洁",
    options: {
      A: "①②③④",
      B: "②③④",
      C: "①③④",
      D: "①②③"
    },
    answer: "A",
    category: "现场管理"
  },
  {
    id: 432,
    type: "single_choice",
    question: "要做到遵纪守法，对每个职工来说，必须做到（）。",
    options: {
      A: "反对'管'、'卡'、'压'",
      B: "努力学法，知法、守法、用法",
      C: "反对自由主义",
      D: "有法可依"
    },
    answer: "B",
    category: "职业素养"
  },
  {
    id: 433,
    type: "single_choice",
    question: "生产人员在质量管理方面须做好'三按和一控'工作，一控是指自控正确率应达（）。",
    options: {
      A: "100%",
      B: "95%",
      C: "99%",
      D: "90%"
    },
    answer: "A",
    category: "质量管理"
  },
  {
    id: 434,
    type: "single_choice",
    question: "不爱护工、卡、量具的做法是（）。",
    options: {
      A: "工、卡、量具要放在工作台上",
      B: "按规定维护工、卡、量具",
      C: "正确使用工、卡、量具",
      D: "工、卡、量具要放在指定地点"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 435,
    type: "single_choice",
    question: "下面关于严格执行安全操作规程的描述，错误的是（）",
    options: {
      A: "每位员工都必须严格执行安全操作规程",
      B: "单位的领导不需要严格执行安全操作规程",
      C: "严格执行安全操作规程是维持企业正常生产的根本保证",
      D: "不同行业安全操作规程的具体内容是不同的"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 436,
    type: "single_choice",
    question: "并联机器人可以定义为（）通过至少两个独立的运动链相连接，机构具有两个或两个以上自由度，且以并联方式驱动的一种闭环机器人。",
    options: {
      A: "动平台和定平台",
      B: "串联机器人和并联机器人",
      C: "平面移动和空间移动",
      D: "动态响应和静态响应"
    },
    answer: "A",
    category: "机器人类型"
  },
  {
    id: 437,
    type: "single_choice",
    question: "伺服控制的机器人一般又细分为（）控制类和（）控制类。",
    options: {
      A: "连续、定位",
      B: "间断、定位",
      C: "开环、连续",
      D: "闭环、定位"
    },
    answer: "A",
    category: "控制技术"
  },
  {
    id: 438,
    type: "single_choice",
    question: "6维力与力矩传感器主要用于（）。",
    options: {
      A: "精密加工",
      B: "精密测量",
      C: "精密计算",
      D: "精密装配"
    },
    answer: "D",
    category: "传感器技术"
  },
  {
    id: 439,
    type: "single_choice",
    question: "通常机器人的力传感器不包括（",
    options: {
      A: "握力传感器",
      B: "腕力传感器",
      C: "关节力传感器",
      D: "指力传感器"
    },
    answer: "A",
    category: "传感器技术"
  },
  {
    id: 440,
    type: "single_choice",
    question: "运动逆问题是实现如下变换（）。",
    options: {
      A: "从关节空间到操作空间的变换",
      B: "从操作空间到迪卡尔空间的变换",
      C: "从迪卡尔空间到关节空间的变换",
      D: "从操作空间到任务空间的变换"
    },
    answer: "C",
    category: "运动学"
  },
  {
    id: 441,
    type: "single_choice",
    question: "机器人的精度主要依存于（)、控制算法误差与分辨率系统误差。",
    options: {
      A: "传动误差",
      B: "关节间隙",
      C: "机械误差",
      D: "连杆机构的挠性"
    },
    answer: "C",
    category: "精度控制"
  },
  {
    id: 442,
    type: "single_choice",
    question: "作业路径通常用（）坐标系相对于工件坐标系的运动来描述。",
    options: {
      A: "手爪",
      B: "固定",
      C: "运动",
      D: "工具"
    },
    answer: "D",
    category: "轨迹规划"
  },
  {
    id: 443,
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
    id: 444,
    type: "single_choice",
    question: "RV摆线针轮减速器特别适用于工业机器人的轴的传动，不包括（）。",
    options: {
      A: "J1轴",
      B: "J2轴",
      C: "J3轴",
      D: "J4轴"
    },
    answer: "D",
    category: "传动系统"
  },
  {
    id: 445,
    type: "single_choice",
    question: "谐波减速器特别适用于工业机器人的轴的传动，不包括（）。",
    options: {
      A: "J3轴",
      B: "J4轴",
      C: "J5轴",
      D: "J6轴"
    },
    answer: "A",
    category: "传动系统"
  },
  {
    id: 446,
    type: "single_choice",
    question: "按机器人结构坐标系统特点可将机器人分为：（）①直角坐标机器人；②圆柱坐标机器人；③球面坐标机器人；④关节坐标机器人",
    options: {
      A: "①②",
      B: "①②③",
      C: "①②④",
      D: "①②③④"
    },
    answer: "D",
    category: "机器人类型"
  },
  {
    id: 447,
    type: "single_choice",
    question: "参数6Kg表示工业机器人的哪项？（）",
    options: {
      A: "型号",
      B: "运动范围",
      C: "自由度",
      D: "承载能力"
    },
    answer: "D",
    category: "技术参数"
  },
  {
    id: 448,
    type: "single_choice",
    question: "下列哪项是指机器人执行末端在正常工作情况下所能承受的最大的负载能力？（）",
    options: {
      A: "承载能力",
      B: "运动范围",
      C: "到达距离",
      D: "重复定位精度"
    },
    answer: "A",
    category: "技术参数"
  },
  {
    id: 449,
    type: "single_choice",
    question: "一般情况下工业机器人系统中下列（）位置不存在紧急按钮。",
    options: {
      A: "机器人示教器上",
      B: "机器人控制器上",
      C: "系统主控面板上",
      D: "机器人本体上"
    },
    answer: "D",
    category: "安全系统"
  },
  {
    id: 450,
    type: "single_choice",
    question: "伺服控制系统一般包括控制器、被控对象、执行环节、比较环节和（）。",
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
    id: 451,
    type: "single_choice",
    question: "通常机器人的力传感器不包括（）。",
    options: {
      A: "握力传感器",
      B: "腕力传感器",
      C: "关节力传感器",
      D: "指力传感器"
    },
    answer: "A",
    category: "传感器技术"
  },
  {
    id: 452,
    type: "single_choice",
    question: "当希望机器人进行快速运动而选定电动机时，选择（）的电动机比较好。",
    options: {
      A: "转动惯量大且转矩系数大",
      B: "转动惯量大且转矩系数小",
      C: "转动惯量小且转矩系数大",
      D: "转动惯量小且转矩系数小"
    },
    answer: "C",
    category: "驱动系统"
  },
  {
    id: 453,
    type: "single_choice",
    question: "设位置的确定精度为0.02mm，滚珠丝杠每转一转，滚珠螺母移动5mm，减速比为Z1/Z2=1/10，则每一转对应的脉冲数应为（）。",
    options: {
      A: "50",
      B: "100",
      C: "250",
      D: "25"
    },
    answer: "D",
    category: "精度控制"
  },
  {
    id: 454,
    type: "single_choice",
    question: "对现有工业机器人控制器存在的问题表述正确的是（）。",
    options: {
      A: "软件兼容性好",
      B: "软件容错性高",
      C: "软件扩展性好",
      D: "开放性差"
    },
    answer: "D",
    category: "控制系统"
  },
  {
    id: 455,
    type: "single_choice",
    question: "（）是指机器人在立体空间中所能达到的半径。",
    options: {
      A: "承载能力",
      B: "运动范围",
      C: "到达距离",
      D: "重复定位精度"
    },
    answer: "C",
    category: "技术参数"
  },
  {
    id: 456,
    type: "single_choice",
    question: "2013年，全球第一大工业机器人市场是（",
    options: {
      A: "中国",
      B: "美国",
      C: "日本",
      D: "欧洲"
    },
    answer: "A",
    category: "行业发展"
  },
  {
    id: 457,
    type: "single_choice",
    question: "机器人内部部传感器不包括（）传感器。",
    options: {
      A: "电位器",
      B: "光电编码器",
      C: "测速发电机",
      D: "光电传感器"
    },
    answer: "D",
    category: "传感器技术"
  },
  {
    id: 458,
    type: "single_choice",
    question: "作为一个机器人，一般由三个部分组成，不包括（）。",
    options: {
      A: "控制系统",
      B: "计算机系统",
      C: "传感系统",
      D: "机械系统"
    },
    answer: "B",
    category: "系统构成"
  },
  {
    id: 459,
    type: "single_choice",
    question: "机器人技术参数不包括（）。",
    options: {
      A: "自由度",
      B: "精度",
      C: "工作范围",
      D: "重量"
    },
    answer: "D",
    category: "技术参数"
  },
  {
    id: 460,
    type: "single_choice",
    question: "对于6轴工业机器人，哪些关节的转动主要实现姿态的改变（）。",
    options: {
      A: "1、2、3轴",
      B: "2、3、4轴",
      C: "3、4、5轴",
      D: "4、5、6轴"
    },
    answer: "D",
    category: "基础知识"
  },
  {
    id: 461,
    type: "single_choice",
    question: "对于未安装工具的工业机器人，哪个关节的转动无法确定其空间位置（）。",
    options: {
      A: "7轴",
      B: "6轴",
      C: "5轴",
      D: "4轴"
    },
    answer: "B",
    category: "基础知识"
  },
  {
    id: 462,
    type: "single_choice",
    question: "机器人的精度主要依存于（）、控制算法误差与分辨率系统误差。",
    options: {
      A: "传动误差",
      B: "关节间隙",
      C: "机械误差",
      D: "连杆机构的挠性"
    },
    answer: "C",
    category: "精度控制"
  },
  {
    id: 463,
    type: "single_choice",
    question: "机器人轨迹控制过程需要通过求解（）获得各个关节角的位置控制系统的设定值。",
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
    id: 464,
    type: "single_choice",
    question: "机器人终端效应器（手）的力量来自（）。",
    options: {
      A: "机器人的全部关节",
      B: "机器人手部的关节",
      C: "决定机器人手部位置的各关节",
      D: "决定机器人手部位姿的各个关节"
    },
    answer: "D",
    category: "基础知识"
  },
  {
    id: 465,
    type: "single_choice",
    question: "目前，在工业机器人中主要使用的减速器是（）两种。①RV减速器；②蜗杆减速器；③谐波齿轮减速器；④齿轮减速器",
    options: {
      A: "①③",
      B: "①②",
      C: "①④",
      D: "②③"
    },
    answer: "A",
    category: "传动系统"
  },
  {
    id: 466,
    type: "single_choice",
    question: "下列指令解释不正确的是（",
    options: {
      A: "J：用直线插补方式移动到示教位置",
      B: "L：以直线插补方式移动到示教位置",
      C: "CALL：调出指定程序",
      D: "C：以圆弧插补方式移动到示教位置"
    },
    answer: "A",
    category: "编程基础"
  },
  {
    id: 467,
    type: "single_choice",
    question: "机器人的控制方式分为（）。①.点对点控制；②.点到点控制；③.连续轨迹控制；④.点位控制",
    options: {
      A: "①②③④",
      B: "①②",
      C: "①②③",
      D: "①④"
    },
    answer: "D",
    category: "控制技术"
  },
  {
    id: 468,
    type: "single_choice",
    question: "操作机手持粉笔在黑板上写字，在其世界坐标的（）方向只有力的约束而无速度约束",
    options: {
      A: "X轴",
      B: "Y轴",
      C: "Z轴",
      D: "R轴"
    },
    answer: "C",
    category: "力控制"
  },
  {
    id: 469,
    type: "single_choice",
    question: "以下哪个元件不属于光电编码器的主要元件（",
    options: {
      A: "多路光源",
      B: "光敏元件",
      C: "电阻器",
      D: "光电码盘"
    },
    answer: "C",
    category: "传感器技术"
  },
  {
    id: 470,
    type: "single_choice",
    question: "增量是手动运行模式，可以使机器人移动所定义的距离应用范围不包括（）。",
    options: {
      A: "以同等距离进行点的定位",
      B: "从一个位置移出所定义的距离",
      C: "使用测量表调整",
      D: "持续的"
    },
    answer: "D",
    category: "示教操作"
  },
  {
    id: 471,
    type: "true_false",
    question: "在自动运行模式下，可连续运行也可单步运行。",
    answer: "false",
    category: "操作模式"
  },
  {
    id: 472,
    type: "true_false",
    question: "机器人只有在零点校准之后方可进行笛卡尔运动，并且要将机器人移置安全位置。",
    answer: "true",
    category: "校准标定"
  },
  {
    id: 473,
    type: "true_false",
    question: "'关节到点'与'直线到点'适用关节和笛卡尔坐标。",
    answer: "false",
    category: "运动控制"
  },
  {
    id: 474,
    type: "true_false",
    question: "工业机器人传感部分用于感知内部和外部的信息。",
    answer: "true",
    category: "传感器技术"
  },
  {
    id: 475,
    type: "true_false",
    question: "华数工业机器人数字量输入输出信号配置完成后无需重启系统就可以使用。",
    answer: "true",
    category: "IO控制"
  },
  {
    id: 476,
    type: "true_false",
    question: "华数工业机器人数字量输出信号可在示教器中进行监控和强置。",
    answer: "true",
    category: "IO控制"
  },
  {
    id: 477,
    type: "true_false",
    question: "配置外部信号是将系统信号与IO信号输入输出索引建立映射关系的过程。",
    answer: "true",
    category: "IO控制"
  },
  {
    id: 478,
    type: "true_false",
    question: "InteRobot中不仅可以查看机器人腕节工作空间，也可以显示当前工具的工作空间。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 479,
    type: "true_false",
    question: "机器人的工作空间是指机器人手臂或手部安装点所能达到的所有空间区域，以及手部本身所能到达的区域。",
    answer: "true",
    category: "基础知识"
  },
  {
    id: 480,
    type: "true_false",
    question: "虽然机器人的结构差异很大，但所有机器人均能将一个部件移动到空间的某一点。",
    answer: "true",
    category: "基础知识"
  },
  {
    id: 481,
    type: "true_false",
    question: "校准触摸屏是用来调整屏幕灵敏度的。",
    answer: "false",
    category: "人机界面"
  },
  {
    id: 482,
    type: "true_false",
    question: "手动操作时，遇到紧急情况时，必须松开示教器使能器按钮，才能是机器人停下。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 483,
    type: "true_false",
    question: "通过批量导入备份数据能够实现多台机器人快速生产使用。",
    answer: "false",
    category: "数据管理"
  },
  {
    id: 484,
    type: "true_false",
    question: "机器人示教器手动操纵时，可以有多种方式实现切换。",
    answer: "true",
    category: "示教操作"
  },
  {
    id: 485,
    type: "true_false",
    question: "在运行方式手动T1或手动T2中，确认开关必须保持在中间位置，即使能必须按下，方可使机器人运动。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 486,
    type: "true_false",
    question: "机器人各轴校准操作时，可以单轴也可以多轴同时更新。",
    answer: "true",
    category: "校准标定"
  },
  {
    id: 487,
    type: "true_false",
    question: "六轴机器人单轴操作时由于奇异点的存在，所以不能将四、六轴共线。",
    answer: "false",
    category: "奇异点处理"
  },
  {
    id: 488,
    type: "true_false",
    question: "新建工具坐标系时直接修改 Tool[0] 就可以。",
    answer: "false",
    category: "坐标系统"
  },
  {
    id: 489,
    type: "true_false",
    question: "选择最小增量控制时，每步移动0.01mm",
    answer: "false",
    category: "示教操作"
  },
  {
    id: 490,
    type: "true_false",
    question: "工业机器人在打磨不规则曲线时，可以采用描点法和图形化编程方法进行处理。",
    answer: "true",
    category: "轨迹规划"
  },
  {
    id: 491,
    type: "true_false",
    question: "机器人焊接作业时，焊接变位机的应用只能提高生产效率，不能提高焊接质量。",
    answer: "false",
    category: "焊接系统"
  },
  {
    id: 492,
    type: "true_false",
    question: "焊接中常采用'前进法'是因为气体保护效果好。",
    answer: "true",
    category: "焊接系统"
  },
  {
    id: 493,
    type: "true_false",
    question: "在用机器人进行弧焊作业中，夹具要求回避与焊枪的干涉",
    answer: "true",
    category: "焊接系统"
  },
  {
    id: 494,
    type: "true_false",
    question: "运行焊接程序时，只要将焊接启动锁定就不会发生起弧焊接。",
    answer: "true",
    category: "焊接系统"
  },
  {
    id: 495,
    type: "true_false",
    question: "按下向前出丝按键时，焊丝将以10mm/s的速度向前出丝。",
    answer: "false",
    category: "焊接系统"
  },
  {
    id: 496,
    type: "true_false",
    question: "每按一下伸出按键，焊丝将伸出15mm。",
    answer: "true",
    category: "焊接系统"
  },
  {
    id: 497,
    type: "true_false",
    question: "机器人焊接时必须与焊机进行通讯才能保证焊接过程自动实现。",
    answer: "true",
    category: "焊接系统"
  },
  {
    id: 498,
    type: "true_false",
    question: "焊接引入工业机器人以后，一切工作都是自动进行的。",
    answer: "false",
    category: "焊接系统"
  },
  {
    id: 499,
    type: "true_false",
    question: "工业机器人的规格和外围设备的规格都是随着自动化规模的变化而变化的。",
    answer: "true",
    category: "外围设备"
  },
  {
    id: 500,
    type: "true_false",
    question: "灵活性低的工业机器人，其外围设备较为复杂。",
    answer: "true",
    category: "外围设备"
  },
  {
    id: 501,
    type: "true_false",
    question: "用传感器采集环境信息是机器人智能化的第一步。",
    answer: "true",
    category: "智能控制"
  },
  {
    id: 502,
    type: "true_false",
    question: "工业机器人外围设备是指可以附加在机器人系统中加强机器人功能的设备。",
    answer: "true",
    category: "外围设备"
  },
  {
    id: 503,
    type: "true_false",
    question: "喷漆机器人属于非接触式作业机器人。",
    answer: "true",
    category: "机器人类型"
  },
  {
    id: 504,
    type: "true_false",
    question: "IF...CALL子程序，当条件成立时，则执行子程序.PRG内容后再顺利往下执行。",
    answer: "true",
    category: "编程基础"
  },
  {
    id: 505,
    type: "true_false",
    question: "GOTO 指令和 LBL 指令结合使用完成程序的跳转。",
    answer: "true",
    category: "编程基础"
  },
  {
    id: 506,
    type: "true_false",
    question: "可采用三点法完成工业机器人工具坐标系的标定。",
    answer: "false",
    category: "坐标系统"
  },
  {
    id: 507,
    type: "true_false",
    question: "传感器的敏感元件的基本功能是将某种不易测量的物理量转换为易于测量的物理量。",
    answer: "true",
    category: "传感器技术"
  },
  {
    id: 508,
    type: "true_false",
    question: "超声波式传感器属于接近觉传感器。",
    answer: "true",
    category: "传感器技术"
  },
  {
    id: 509,
    type: "true_false",
    question: "1200PLC 模拟量输入模块地址范围可以在组态时任意指定。",
    answer: "true",
    category: "PLC控制"
  },
  {
    id: 510,
    type: "true_false",
    question: "传感器的灵敏度是指传感器的输出信号达到稳定时，输入信号变化与输出信号变化的比值。",
    answer: "false",
    category: "传感器技术"
  },
  {
    id: 511,
    type: "true_false",
    question: "位置传感器主要采用光电式增码盘。",
    answer: "true",
    category: "传感器技术"
  },
  {
    id: 512,
    type: "true_false",
    question: "接近觉是指机器人手接近对象物体的距离几米远时，就能检测出对象物体表面的距离、斜度和表面状态的传感器。",
    answer: "false",
    category: "传感器技术"
  },
  {
    id: 513,
    type: "true_false",
    question: "光电编码器及测速发电机，是两种广泛采用的角速度传感器。",
    answer: "false",
    category: "传感器技术"
  },
  {
    id: 514,
    type: "true_false",
    question: "PLC与机器人IPC之间的通信时，PLC属于MODBUS的客户端。",
    answer: "true",
    category: "通信技术"
  },
  {
    id: 515,
    type: "true_false",
    question: "MODBUS TCP通信协议是基于PROFINET总线的一种网络通信协议。",
    answer: "true",
    category: "通信技术"
  },
  {
    id: 516,
    type: "true_false",
    question: "采用数组的功能进行数据传输时，传输的数据类型必须为整数。",
    answer: "true",
    category: "通信技术"
  },
  {
    id: 517,
    type: "true_false",
    question: "数组处理数据的结果是将PLC传输的十进制数转化为二进制，并保存至R寄存器中。",
    answer: "false",
    category: "通信技术"
  },
  {
    id: 518,
    type: "true_false",
    question: "当采用数组进行信号交互，通过配置外部运行配置，可以共同使用同一物理端口进行状态映射。",
    answer: "false",
    category: "通信技术"
  },
  {
    id: 519,
    type: "true_false",
    question: "PLC的元件是软元件，其触点可无限次使用。",
    answer: "true",
    category: "PLC控制"
  },
  {
    id: 520,
    type: "true_false",
    question: "可编程控制器的工作方式是采用一个不断循环的扫描工作方式。",
    answer: "true",
    category: "PLC控制"
  },
  {
    id: 521,
    type: "true_false",
    question: "华数3型系统中，若要实现跳转程序段，可以采用单独LBL指令。",
    answer: "false",
    category: "编程基础"
  },
  {
    id: 522,
    type: "true_false",
    question: "在3型系统中，标签指令是属于事件指令。",
    answer: "false",
    category: "编程基础"
  },
  {
    id: 523,
    type: "true_false",
    question: "重复执行判断指令是FOR。",
    answer: "true",
    category: "编程基础"
  },
  {
    id: 524,
    type: "true_false",
    question: "当电源失电时，定时器与计数器均复位。",
    answer: "false",
    category: "PLC控制"
  },
  {
    id: 525,
    type: "true_false",
    question: "中断指令编写在PROGRAM指令的下方时，程序运行指针无法周期内扫描事件指令。",
    answer: "false",
    category: "编程基础"
  },
  {
    id: 526,
    type: "true_false",
    question: "华数3型系统中，子程序嵌套可以无限层",
    answer: "false",
    category: "编程基础"
  },
  {
    id: 527,
    type: "true_false",
    question: "两个或两个以上的线圈可以串联输出。",
    answer: "false",
    category: "PLC控制"
  },
  {
    id: 528,
    type: "true_false",
    question: "WaitUntil等待一个条件满足后，程序继续往下执行。",
    answer: "true",
    category: "编程基础"
  },
  {
    id: 529,
    type: "true_false",
    question: "变量用const定义。",
    answer: "false",
    category: "编程基础"
  },
  {
    id: 530,
    type: "true_false",
    question: "工件坐标系：它定义工件相对于大地坐标系的位置。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 531,
    type: "true_false",
    question: "工业机器人的负载承受闸值在空间中不同位置，其数值各不相同。",
    answer: "true",
    category: "技术参数"
  },
  {
    id: 532,
    type: "true_false",
    question: "任何复杂的运动都可以分解为由多个平移和绕轴转动的简单运动的合成。",
    answer: "true",
    category: "运动学"
  },
  {
    id: 533,
    type: "true_false",
    question: "华数Ⅱ型系统中运动指令和非运行指令之间必须加DELAY。",
    answer: "true",
    category: "编程基础"
  },
  {
    id: 534,
    type: "true_false",
    question: "WAIT指令用于等待IO信号，超过设定时限后退出等待。",
    answer: "false",
    category: "编程基础"
  },
  {
    id: 535,
    type: "true_false",
    question: "在PLC选型时，若负载要求响应速度快，负载电流小，宜选用晶体管输出型。",
    answer: "true",
    category: "PLC控制"
  },
  {
    id: 536,
    type: "true_false",
    question: "使用博途软件编制PLC程序的语言最常用的是梯形图。",
    answer: "true",
    category: "PLC控制"
  },
  {
    id: 537,
    type: "true_false",
    question: "与超声传感器相比，红外测距的准确度更高。",
    answer: "false",
    category: "传感器技术"
  },
  {
    id: 538,
    type: "true_false",
    question: "视觉获得的感知信息占人对外界感知信息的60%",
    answer: "false",
    category: "视觉系统"
  },
  {
    id: 539,
    type: "true_false",
    question: "视觉传感器是将景物的光信号转换成电信号的器件。",
    answer: "true",
    category: "视觉系统"
  },
  {
    id: 540,
    type: "true_false",
    question: "图像输入部分通常由CCD固体摄像机、镜头和胶卷组成。",
    answer: "false",
    category: "视觉系统"
  },
  {
    id: 541,
    type: "true_false",
    question: "多感觉信息融合技术在智能机器人系统中的应用，则提高了机器人的认知水平。",
    answer: "true",
    category: "智能控制"
  },
  {
    id: 542,
    type: "true_false",
    question: "图像增强是调整图像的色度、亮度、饱和度、对比度和分辨率，使得图像效果清晰和颜色分明。",
    answer: "true",
    category: "视觉系统"
  },
  {
    id: 543,
    type: "true_false",
    question: "图像二值化处理便是将图像中感兴趣的部分置1，背景部分置2。",
    answer: "false",
    category: "视觉系统"
  },
  {
    id: 544,
    type: "true_false",
    question: "RFID是Radio Frequency Identification 的缩写，即无线射频识别。",
    answer: "true",
    category: "RFID技术"
  },
  {
    id: 545,
    type: "true_false",
    question: "RFID拥有耐环境性，穿透性，形状容易小型化和多样化等特性。",
    answer: "true",
    category: "RFID技术"
  },
  {
    id: 546,
    type: "true_false",
    question: "仓储模块含4层*3个存储位，下面两层配置有共6个工件检测传感器，与PLC控制器通过modbus TCP进行信号交互。",
    answer: "true",
    category: "仓储系统"
  },
  {
    id: 547,
    type: "true_false",
    question: "博途软件是一个高度集成的软件，所以在HMI中建立的数据类型和PLC中数据类型的长度相同，就可以在HMI中使用。",
    answer: "false",
    category: "人机界面"
  },
  {
    id: 548,
    type: "true_false",
    question: "机器人轨迹泛指工业机器人在运动过程中所走过的路径。",
    answer: "false",
    category: "轨迹规划"
  },
  {
    id: 549,
    type: "true_false",
    question: "在平焊中，编写机器人焊接程序时，起弧指令必须在起弧点前设置，防止滞后起弧。",
    answer: "false",
    category: "焊接编程"
  },
  {
    id: 550,
    type: "true_false",
    question: "采用立焊进行坡口的填充时，机器人的轨迹编程应该从下向上进行运动。",
    answer: "true",
    category: "焊接编程"
  },
  {
    id: 551,
    type: "true_false",
    question: "在调用焊接通道时，可以在编写程序界面中对通道的参数进行直接修改。",
    answer: "true",
    category: "焊接编程"
  },
  {
    id: 552,
    type: "true_false",
    question: "起弧后，设置等待时间为0.1S，可以运用如此指令WAIT100，起到起弧加热的效果。",
    answer: "false",
    category: "焊接编程"
  },
  {
    id: 553,
    type: "true_false",
    question: "轨迹规划与控制就是按时间规划和控制手部或工具中心走过的空间路径。",
    answer: "true",
    category: "轨迹规划"
  },
  {
    id: 554,
    type: "true_false",
    question: "轨迹插补运算是伴随着轨迹控制过程一步步完成的，而不是在得到示教点之后，一次完成，再提交给再现过程的。",
    answer: "true",
    category: "轨迹规划"
  },
  {
    id: 555,
    type: "true_false",
    question: "在S7-1200PLC中TON的启动输入端IN由'1'变'0'时定时器复位。",
    answer: "true",
    category: "PLC控制"
  },
  {
    id: 556,
    type: "true_false",
    question: "在S7-1200PLC中PTO为高速脉冲串输出，它总是输出占空比为50%的方波脉冲。",
    answer: "true",
    category: "PLC控制"
  },
  {
    id: 557,
    type: "true_false",
    question: "输入映象寄存器1用于存放CPU执行程序的结果。",
    answer: "false",
    category: "PLC控制"
  },
  {
    id: 558,
    type: "true_false",
    question: "在S7-1200PLC中，通过工厂复位，可以将S7-1200CPU中存储的程序清除，也可以同时清除 CPU 所使用的 IP 地址。",
    answer: "true",
    category: "PLC控制"
  },
  {
    id: 559,
    type: "true_false",
    question: "在 S7-1200 PLC 中，TONR 的启动输入端 IN 由'1'变'0'时定时器复位。",
    answer: "false",
    category: "PLC控制"
  },
  {
    id: 560,
    type: "true_false",
    question: "InteRobot 只支持用户导入华数品牌的机器人模型。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 561,
    type: "true_false",
    question: "在 InteRobot 中，工作站导航树是以工作站作为根节点，下有三个子节点，包括机器人组、工件坐标系组和工序组。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 562,
    type: "true_false",
    question: "在 InteRobot 中，变位机属性栏主要作用是对变位机进行仿真控制，控制变位机的姿态，让变位机运动到用户指定的位置上。",
    answer: "true",
    category: "离线编程"
  },
  {
    id: 563,
    type: "true_false",
    question: "在 InteRobot 中，导出的工具文件后缀名为.incRob 文件。",
    answer: "false",
    category: "离线编程"
  },
  {
    id: 564,
    type: "true_false",
    question: "完成某一特定作业时有多余自由度的，称为冗余自由度机器人。",
    answer: "true",
    category: "基础知识"
  },
  {
    id: 565,
    type: "true_false",
    question: "机器人出厂时默认的工具坐标系原点位于第 1 轴中心。",
    answer: "false",
    category: "坐标系统"
  },
  {
    id: 566,
    type: "true_false",
    question: "机器人常用驱动方式主要是液压驱动、气压驱动和电气驱动三种基本类型。",
    answer: "true",
    category: "驱动系统"
  },
  {
    id: 567,
    type: "true_false",
    question: "工业机器人是面向工业领域的多关节机械手或多自由度的机器装置，它能自动执行工作，是靠自身动力和控制能力来实现各种功能的一种机器。",
    answer: "true",
    category: "基础知识"
  },
  {
    id: 568,
    type: "true_false",
    question: "工业机器人由主体、驱动系统、控制系统和操作系统四个基本部分组成。",
    answer: "false",
    category: "系统构成"
  },
  {
    id: 569,
    type: "true_false",
    question: "对机器人进行示教时，模式旋钮打到示教模式后，在此模式中，外部设备发出的启动信号无效。",
    answer: "true",
    category: "示教操作"
  },
  {
    id: 570,
    type: "true_false",
    question: "承载能力是指机器人在工作范围内的任何位姿上所能承受的最大质量。",
    answer: "true",
    category: "技术参数"
  },
  {
    id: 571,
    type: "true_false",
    question: "工业机器人系统由四大部分组成：机械系统、驱动系统、控制系统和感知系统。",
    answer: "true",
    category: "系统构成"
  },
  {
    id: 572,
    type: "true_false",
    question: "在切割、涂胶、焊接等虚拟工作站中，常会需要处理一些不规则的曲线，通过描点法可以根据3D模型的曲线特征自动转换成机器人的运行轨迹。",
    answer: "false",
    category: "轨迹规划"
  },
  {
    id: 573,
    type: "true_false",
    question: "TCP点又称工具中心点，是为了保证机器人程序和位置的重复执行而引入的。",
    answer: "true",
    category: "坐标系统"
  },
  {
    id: 574,
    type: "true_false",
    question: "在机器人运行过程中，我们可以监控TCP的运动轨迹以及运动速度，以便进行性能分析。",
    answer: "true",
    category: "性能分析"
  },
  {
    id: 575,
    type: "true_false",
    question: "目前机器人中较为常用的是旋转型光电式编码器。",
    answer: "true",
    category: "传感器技术"
  },
  {
    id: 576,
    type: "true_false",
    question: "进行工作站机器人系统安装施工时，按照设计布局图，先将机器人整机固定于预定位置后，即可通电调试，安全防护措施及其他传输设备的安装可同步进行。",
    answer: "false",
    category: "系统安装"
  },
  {
    id: 577,
    type: "true_false",
    question: "定期对机器人保养可以延长机器人的使用寿命。",
    answer: "true",
    category: "维护保养"
  },
  {
    id: 578,
    type: "true_false",
    question: "工业机器人进行零点标定时，并不需要对每一个轴标定零点。",
    answer: "false",
    category: "校准标定"
  },
  {
    id: 579,
    type: "true_false",
    question: "工业机器人的最大工作速度通常是指机器人手臂末端的最大速度。",
    answer: "true",
    category: "技术参数"
  },
  {
    id: 580,
    type: "true_false",
    question: "机器人轨迹泛指工业机器人在运动过程中的运动轨迹，即运动点的位移、速度和加速度。",
    answer: "true",
    category: "轨迹规划"
  },
  {
    id: 581,
    type: "true_false",
    question: "机器人上常用的可以测量转速的传感器有测度发电机和增量式码盘。",
    answer: "true",
    category: "传感器技术"
  },
  {
    id: 582,
    type: "true_false",
    question: "所有试验报告应包含每一种试验所用的机器人程序与软件参数。",
    answer: "true",
    category: "性能测试"
  },
  {
    id: 583,
    type: "true_false",
    question: "设计工业机器人应用系统时，在识别危险后需评估其与机器人系统相关的风险，可通过机器人系统设计、机器人系统替代、设计安全防护措施、编写使用资料并组织培训等措施有效降低风险。",
    answer: "true",
    category: "安全设计"
  },
  {
    id: 584,
    type: "true_false",
    question: "在机器人的自动操作期间，允许人员进入其工作区域。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 585,
    type: "true_false",
    question: "机器人调试人员进入机器人工作区域范围内时需佩戴安全帽。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 586,
    type: "true_false",
    question: "机器人调试人员操作机器人示教器时不许带手套。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 587,
    type: "true_false",
    question: "为了确保安全，用示教编程器手动运行机器人时，机器人的最高速度限制为50mm/s。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 588,
    type: "true_false",
    question: "棉安全帽必须有耳孔，不影响听觉。",
    answer: "true",
    category: "安全防护"
  },
  {
    id: 589,
    type: "true_false",
    question: "从业人员应接受安全生产教育和培训，掌握本职工作所需的相关知识，提高安全生产。",
    answer: "true",
    category: "安全培训"
  },
  {
    id: 590,
    type: "true_false",
    question: "使用灭火器灭火时应站在上风口，对准火源根部进行喷射。",
    answer: "true",
    category: "消防安全"
  },
  {
    id: 591,
    type: "true_false",
    question: "施工机械和设备要保持性能完好，有符合要求的安全防护装置。",
    answer: "true",
    category: "设备安全"
  },
  {
    id: 592,
    type: "true_false",
    question: "因为人体电阻为800Ω，所以36V工频电压能绝对保证人身安全。",
    answer: "false",
    category: "电气安全"
  },
  {
    id: 593,
    type: "true_false",
    question: "职业作为社会关系的一个重要方面，对社会成员的精神生活和精神传统产生着重大影响。",
    answer: "true",
    category: "职业素养"
  },
  {
    id: 594,
    type: "true_false",
    question: "从业者从事职业的态度是价值观、道德观的具体表现",
    answer: "true",
    category: "职业素养"
  },
  {
    id: 595,
    type: "true_false",
    question: "生产经营规模较小，可以不建立应急救援组织的，应当指定兼职的应急救援人员。",
    answer: "true",
    category: "应急管理"
  },
  {
    id: 596,
    type: "true_false",
    question: "C指令为圆弧指令，机器人示教圆弧的当前位置与选择的三个点形成一个圆弧。",
    answer: "false",
    category: "运动指令"
  },
  {
    id: 597,
    type: "true_false",
    question: "机器人单轴运动时，不需要一直按着示教器使能键。",
    answer: "false",
    category: "示教操作"
  },
  {
    id: 598,
    type: "true_false",
    question: "柱坐标机器人一般旋转允许旋转360°",
    answer: "false",
    category: "机器人类型"
  },
  {
    id: 599,
    type: "true_false",
    question: "在大多数伺服电动机的控制回路中，都采用了电压控制方式。",
    answer: "false",
    category: "控制系统"
  },
  {
    id: 600,
    type: "true_false",
    question: "参数IP54表示工业机器人的重复定位精度。",
    answer: "false",
    category: "技术参数"
  }
];

export const totalQuestions = questionBank.length;

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