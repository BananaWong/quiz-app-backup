// src/questionBanks/industrialRoboticsYLR.js

export const questionBank = [
  {
    id: 1,
    type: "single_choice",
    question: "在机器人设置中，HRT-120机器人构型为（）。",
    options: {
      A: "六轴常规型",
      B: "六轴协作型",
      C: "单姿态DELTA型",
      D: "三姿态DELTA型"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 2,
    type: "single_choice",
    question: "恒锐机器人运动参数是在（）中设置。",
    options: {
      A: "机器人设置",
      B: "坐标系设置",
      C: "高级设置",
      D: "常规设置"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 3,
    type: "single_choice",
    question: "恒锐机器人比例参数是在（）中设置。",
    options: {
      A: "机器人设置",
      B: "坐标系设置",
      C: "高级设置",
      D: "常规设置"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 4,
    type: "single_choice",
    question: "恒锐机器人驱动参数是在（）中设置。",
    options: {
      A: "机器人设置",
      B: "坐标系设置",
      C: "高级设置",
      D: "常规设置"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 5,
    type: "single_choice",
    question: "恒锐机器人模型参数是在（）中设置。",
    options: {
      A: "机器人设置",
      B: "坐标系设置",
      C: "高级设置",
      D: "常规设置"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 6,
    type: "single_choice",
    question: "以下哪一个用户组可以使用外部启动信号（）。",
    options: {
      A: "厂家",
      B: "专家",
      C: "用户",
      D: "都可以"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 7,
    type: "single_choice",
    question: "在存档时，用户自定义的（程序）存档时需要选择（）。",
    options: {
      A: "机械参数",
      B: "Log数据",
      C: "自定义的文件名",
      D: "KrcDiag"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 8,
    type: "single_choice",
    question: "恒锐机器人设置中不包括（）。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "零位设置"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 9,
    type: "single_choice",
    question: "以下属于恒锐机器人设置的是（）。",
    options: {
      A: "比例参数设置",
      B: "零位设置",
      C: "坐标系设置",
      D: "关节初始位置设置"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 10,
    type: "single_choice",
    question: "机器人关节，末端最大速度，加速度，冲击比例在（）中设置。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 11,
    type: "single_choice",
    question: "恒锐机器人软限位在（）中设置。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 12,
    type: "single_choice",
    question: "在恒锐机器人中关节末端最大速度加速度冲击在（）中设置。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 13,
    type: "single_choice",
    question: "在恒锐机器人中轴额定转矩在（）中设置。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 14,
    type: "single_choice",
    question: "在恒锐机器人中轴编码器分辨率在（）中设置。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 15,
    type: "single_choice",
    question: "恒锐机器人出现故障后可以将（）文件提供给厂家进行故障分析。",
    options: {
      A: "机械参数",
      B: "Log数据",
      C: "应用",
      D: "当前系统"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 16,
    type: "single_choice",
    question: "仅在工业机器人得到充分和正确标定（）时，它的使用效果才会最好。",
    options: {
      A: "零点",
      B: "HOME点",
      C: "工具坐标系",
      D: "世界坐标系"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 17,
    type: "single_choice",
    question: "为了使轴的机械位置和电气位置保持一致，机器人的轴都有多少个角度值？",
    options: {
      A: "唯一一个",
      B: "两个",
      C: "六个",
      D: "大于六个"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 18,
    type: "single_choice",
    question: "在恒锐机器人中轴减速比在（）中设置。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 19,
    type: "single_choice",
    question: "机器人的DH参数即是机器人（）。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 20,
    type: "single_choice",
    question: "在运动参数“轴最大速度/加速度/冲击限制”数值的基础上，再乘上的（）中的系数，作为当前机器人最大性能限制。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 21,
    type: "single_choice",
    question: "在对参与定位值感测的部件（例如带分解器或RDC的电机）采取了维护措施之后，必须要（）？",
    options: {
      A: "零点标定",
      B: "投入运行",
      C: "示教器调整至AUT模式",
      D: "示教器调整至EXY模式"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 22,
    type: "single_choice",
    question: "如果机器人以各种不同负载工作，则必须对每个负载都进行（）？",
    options: {
      A: "重心偏移",
      B: "偏量学习",
      C: "负载计算",
      D: "零点标定"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 23,
    type: "single_choice",
    question: "辅助零点标定的千分表的英文名称为（）？",
    options: {
      A: "AMD",
      B: "EMD",
      C: "AFC",
      D: "FPA"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 24,
    type: "single_choice",
    question: "（）设置关系到机器人运动效率性能和使用寿命。过大的参数设置可能会导致机器人使用寿命的降低及极差的运动效果，需根据工作任务需求、机器人本体刚度以及减速机和伺服电机谨慎设置。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 25,
    type: "single_choice",
    question: "示教编程器上安全开关握紧为ON，松开为OFF状态，作为进而追加的功能，当握紧力过大时，为（）状态。",
    options: {
      A: "ON",
      B: "OFF",
      C: "急停",
      D: "无效"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 26,
    type: "single_choice",
    question: "在恒锐机器人中示教器控制对应的机器人本体时选择界面控制器IP地址因该选择为（）。",
    options: {
      A: "本机IP",
      B: "任意机器人本体IP",
      C: "127.0.0.1",
      D: "0.0.0.0"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 27,
    type: "single_choice",
    question: "示教器控制其他机器人本体示教器选择界面控制器IP地址因该选择为（）。",
    options: {
      A: "本机IP",
      B: "对应机器人本体IP",
      C: "127.0.0.1",
      D: "0.0.0.0"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 28,
    type: "single_choice",
    question: "在恒锐机器人中本体示教器的端口号设置为（）。",
    options: {
      A: "1234",
      B: "8080",
      C: "127.0.0.1",
      D: "0000"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 29,
    type: "single_choice",
    question: "在恒锐机器人远程平板示教器端口号设置为（）。",
    options: {
      A: "1234",
      B: "8080",
      C: "127.0.0.1",
      D: "0000"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 30,
    type: "single_choice",
    question: "在恒锐机器人示教器亮度显示可在（）界面修改。",
    options: {
      A: "程序",
      B: "IO",
      C: "设置",
      D: "模型"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 31,
    type: "single_choice",
    question: "在恒锐机器人中示教器亮度显示可在模型界面中（）界面修改。",
    options: {
      A: "机器人设置",
      B: "高级设置",
      C: "坐标系设置",
      D: "其他设置"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 32,
    type: "single_choice",
    question: "在恒锐机机器人中示教器在（）界面中校准界面。",
    options: {
      A: "程序",
      B: "IO",
      C: "设置",
      D: "模型"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 33,
    type: "single_choice",
    question: "在恒锐机器人中示教器在设置界面中（）界面进行校准。",
    options: {
      A: "机器人设置",
      B: "高级设置",
      C: "坐标系设置",
      D: "其他设置"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 34,
    type: "single_choice",
    question: "机器人紧急情况下可拍下示教器上的（）立即停止机器人动作。",
    options: {
      A: "关机按钮",
      B: "伺服状态按钮",
      C: "急停按钮",
      D: "以上都是"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 35,
    type: "single_choice",
    question: "在恒锐机器人中以下哪点不是示教盒示教的缺点（）。",
    options: {
      A: "难以获得高控制精度",
      B: "难以获得高速度",
      C: "难以与其他设备同步",
      D: "不易与传感器信息相配合"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 36,
    type: "single_choice",
    question: "在恒锐机器人中如果示教器卡死无法操作时，我们第一步应当（）。",
    options: {
      A: "更换新的示教器",
      B: "重启控制器电源",
      C: "立即拔掉示教器",
      D: "更换示教器保险丝"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 37,
    type: "single_choice",
    question: "恒锐机器人中示教器在示教模式下（）。",
    options: {
      A: "可手动控制机器人",
      B: "可自动运行机器人程序",
      C: "可用外部信号控制机器人",
      D: "以上都是"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 38,
    type: "single_choice",
    question: "在专用IO信号（外围设备）中，RST表示什么系统功能（）。",
    options: {
      A: "回归初始位置",
      B: "启动信号",
      C: "停止信号",
      D: "暂停信号"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 39,
    type: "single_choice",
    question: "远程模式程序运行过程中机器人若将要与模块碰撞，不可以进行什么操作（）。",
    options: {
      A: "按下按钮盒急停按钮",
      B: "按下按钮盒停止按钮按钮",
      C: "按下按钮盒复位按钮按钮",
      D: "按下机器人示教器急停按钮"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 40,
    type: "single_choice",
    question: "恒锐机器人控制器使用哪种编程语言？",
    options: {
      A: "HR Language",
      B: "C++",
      C: "KEC",
      D: "KRL"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 41,
    type: "single_choice",
    question: "恒锐左侧界面有（）种菜单窗口？",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "7"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 42,
    type: "single_choice",
    question: "恒锐机器人有（）种运行方式？",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 43,
    type: "single_choice",
    question: "再现模式通过机器人端子（）信号输入控制机器人的启动/停止程序。",
    options: {
      A: "STO",
      B: "STA",
      C: "RST",
      D: "STOP"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 44,
    type: "single_choice",
    question: "再现模式通过机器人端子（）信号输入控制机器人的暂停/继续程序。",
    options: {
      A: "STO",
      B: "STA",
      C: "RST",
      D: "STOP"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 45,
    type: "single_choice",
    question: "在恒锐机器人中模型参数是在（）中设置。",
    options: {
      A: "机器人设置",
      B: "坐标系设置",
      C: "高级设置",
      D: "常规设置"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 46,
    type: "single_choice",
    question: "在恒锐机器人中轴1-轴6最大速度的值在（）中设置。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 47,
    type: "single_choice",
    question: "在恒锐机器人中轴1-轴6减速器减速比在（）中设置。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 48,
    type: "single_choice",
    question: "在恒锐机器人中轴1-轴6正负向限制（度）在（）中设置。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 49,
    type: "single_choice",
    question: "恒锐机器人中示教器在再现模式下（）。",
    options: {
      A: "可手动控制机器人",
      B: "可自动运行机器人程序",
      C: "可用外部信号控制机器人",
      D: "以上都是"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 50,
    type: "single_choice",
    question: "恒锐机器人中示教器在远程模式下（）。",
    options: {
      A: "可手动控制机器人",
      B: "可自动运行机器人程序",
      C: "可用外部信号控制机器人",
      D: "以上都是"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 51,
    type: "single_choice",
    question: "在恒锐机器人示教盒的作用有：点动机器人、运行机器人程序、（）等。",
    options: {
      A: "机器人仿真",
      B: "机器人离线编程",
      C: "控制输出口状态",
      D: "配置面板I/O"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 52,
    type: "single_choice",
    question: "附加轴的点动进给，我们应该配置的运动键为（）。",
    options: {
      A: "J1/J2",
      B: "J2/J3",
      C: "J4/J5",
      D: "J7/J8"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 53,
    type: "single_choice",
    question: "在恒锐机器人中要定义预定义按键1控制输入口DI1，需要将DI1地址分配给（）。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 54,
    type: "single_choice",
    question: "在恒锐机器人中要定义预定义按键1控制输出口DO1，需要将DO1地址分配给（）。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 55,
    type: "single_choice",
    question: "要定义预定义按键2控制输入口DI2与输出口DO2，需要将两个输入输出的地址分配给（）。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 56,
    type: "single_choice",
    question: "要定义预定义按键3，4同时控制输入口DI3，需要将DI3地址分配给（）。",
    options: {
      A: "1",
      B: "23",
      C: "34",
      D: "0"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 57,
    type: "single_choice",
    question: "输入口DI1无需分配给预定义按键，需要将DI1地址分配给（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 58,
    type: "single_choice",
    question: "在恒锐机器人中示教器在（）中可修改配置参数。",
    options: {
      A: "用户权限",
      B: "技术员权限",
      C: "管理员权限",
      D: "厂商权限"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 59,
    type: "single_choice",
    question: "在恒锐机器人中用户权限可以（）。",
    options: {
      A: "编写，修改机器人程序",
      B: "修改机器人零位补偿",
      C: "修改机器人系统配置",
      D: "修改系统时间"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 60,
    type: "single_choice",
    question: "在恒锐机器人中示教器校准可以使（）。",
    options: {
      A: "触摸屏点击更准确",
      B: "机器人定位更准确",
      C: "机器人运行更稳定",
      D: "机器人运行速度更快"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 61,
    type: "single_choice",
    question: "在恒锐机器人中在什么情况下才需要进行示教器校准。",
    options: {
      A: "每次开机",
      B: "不需要",
      C: "机器人精度变低",
      D: "示教器触屏不准确"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 62,
    type: "single_choice",
    question: "在恒锐机器人中以下哪一个权限可以进行示教器校准。",
    options: {
      A: "用户权限",
      B: "技术员权限",
      C: "管理员权限",
      D: "厂商权限"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 63,
    type: "single_choice",
    question: "在恒锐机器人中背光关闭的情况下， $100\\%$ 的亮度和 $50\\%$ 的亮度（）。",
    options: {
      A: "一样亮",
      B: "$100\\%$ 亮度更亮",
      C: "$50\\%$ 亮度更亮",
      D: "屏幕无法显示"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 64,
    type: "single_choice",
    question: "恒锐机器人中将亮度调整到 $100\\%$ 后，若是关闭背光，则会（）。",
    options: {
      A: "屏幕变暗",
      B: "屏幕亮度不变",
      C: "屏幕更亮",
      D: "屏幕无法显示"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 65,
    type: "single_choice",
    question: "示教器USB接口仅适于（）格式的USB。",
    options: {
      A: "NTFS",
      B: "fat32",
      C: "exfat",
      D: "Vista"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 66,
    type: "single_choice",
    question: "在恒锐机器人中关节最大速度比例在（）中设置。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 67,
    type: "single_choice",
    question: "在恒锐机器人中末端最大冲击比例在（）中设置。",
    options: {
      A: "比例参数",
      B: "运动参数",
      C: "驱动参数",
      D: "模型参数"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 68,
    type: "single_choice",
    question: "在恒锐机器人中运动参数是在（）中设置。",
    options: {
      A: "机器人设置",
      B: "坐标系设置",
      C: "高级设置",
      D: "常规设置"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 69,
    type: "single_choice",
    question: "恒锐机器人中将亮度调整到 $0\\%$ 后，打开和关闭背光相比（）。",
    options: {
      A: "关闭背光更暗",
      B: "一样亮",
      C: "关闭背光显示更清晰",
      D: "屏幕无法显示"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 70,
    type: "single_choice",
    question: "在使用焊枪示教前，检查焊枪的压均装置是否良好，动作是否正常，同时对电极头的要求是（）。",
    options: {
      A: "更换新的电极头",
      B: "使用磨耗量大的电极头",
      C: "新的旧的都行",
      D: "电极头无影响"
    },
    answer: "A",
    category: "工艺应用"
  },
  {
    id: 71,
    type: "single_choice",
    question: "在使用焊枪时，可通过标定（）方便机器人示教操作。",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "世界坐标系",
      D: "基坐标系"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 72,
    type: "single_choice",
    question: "恒锐机器人与外部设备通讯的方式有（）。",
    options: {
      A: "I/O",
      B: "以太网",
      C: "RS485",
      D: "以上都是"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 73,
    type: "single_choice",
    question: "在机器人进行弧焊作业中，对夹具描述错误的是（）。",
    options: {
      A: "减少定位误差",
      B: "装拆方便",
      C: "工件的固定和定位自动化",
      D: "回避与焊枪的干涉"
    },
    answer: "C",
    category: "工艺应用"
  },
  {
    id: 74,
    type: "single_choice",
    question: "手爪的主要功能是抓住工件，握持工件，（）工件。",
    options: {
      A: "固定",
      B: "定位",
      C: "释放",
      D: "触摸"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 75,
    type: "single_choice",
    question: "用于检测物体接触面之间相对运动大小和方向的传感器是（）。",
    options: {
      A: "接近传感器",
      B: "触觉传感器",
      C: "滑动传感器",
      D: "压觉传感器"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 76,
    type: "single_choice",
    question: "以下是工业机器人的末端操作器的分类的是（）。",
    options: {
      A: "取料手",
      B: "吸附式取料手",
      C: "灵巧手",
      D: "以上都是"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 77,
    type: "single_choice",
    question: "在该设备中视觉模块的安装，应注意取下相机的（），才可正常使用。",
    options: {
      A: "镜头",
      B: "光源",
      C: "镜头盖",
      D: "通讯线缆"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 78,
    type: "single_choice",
    question: "模块的安装在台面上时，应安装在（），并且（）。",
    options: {
      A: "任意位置，无需固定牢靠",
      B: "任意位置，固定牢靠",
      C: "固定牢靠即可",
      D: "机器人工作范围，并固定牢靠"
    },
    answer: "D",
    category: "设备维护"
  },
  {
    id: 79,
    type: "single_choice",
    question: "该设备中打磨模块选用气动打磨头，在使用前我们应该将设备的供气气压应调整为（）最合适。",
    options: {
      A: "0.1MPa",
      B: "0.2MPa",
      C: "0.5MPa",
      D: "1MPa"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 80,
    type: "single_choice",
    question: "在光线较暗的情况下，视觉模块的显示器无法看清相机传回的图像时应（）。",
    options: {
      A: "关断电源重启",
      B: "手动擦拭相机镜头",
      C: "打开相机光源",
      D: "调整相机焦距"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 81,
    type: "single_choice",
    question: "视觉模块的显示器显示出的图像很小时应该调整相机的（）。",
    options: {
      A: "焦距",
      B: "镜头位置",
      C: "光源亮度",
      D: "像素"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 82,
    type: "single_choice",
    question: "旋转供料模块选用的为步进电机，步进驱动器的拨码开关拨至左侧的为（）号拨码。",
    options: {
      A: "1.3.5",
      B: "2.4",
      C: "3.6",
      D: "1.2"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 83,
    type: "single_choice",
    question: "变位机模块的伺服驱动器参数调整，调整前先回复出厂设置需要将参数P2-08设置为（）。",
    options: {
      A: "0",
      B: "1",
      C: "10",
      D: "15"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 84,
    type: "single_choice",
    question: "视觉模块亮度过低时可以调节模块的（）。",
    options: {
      A: "镜头",
      B: "光源",
      C: "焦距",
      D: "通讯线缆"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 85,
    type: "single_choice",
    question: "打磨模块的桌面的安装方式为（）。",
    options: {
      A: "单一位置摆放，快速更换",
      B: "单一位置摆放，不可更换",
      C: "随意组合摆放，不可更换",
      D: "随意组合摆放，快速更换"
    },
    answer: "D",
    category: "设备维护"
  },
  {
    id: 86,
    type: "single_choice",
    question: "雕刻模块的桌面的安装方式为（）。",
    options: {
      A: "单一位置摆放，快速更换",
      B: "单一位置摆放，不可更换",
      C: "随意组合摆放，不可更换",
      D: "随意组合摆放，快速更换"
    },
    answer: "D",
    category: "设备维护"
  },
  {
    id: 87,
    type: "single_choice",
    question: "该设备中模块安装完成后需要检查各模块的气路接口，以下叙述错误的是（）。",
    options: {
      A: "手动拉扯接口检测是够牢靠",
      B: "观察气管是否有漏气",
      C: "油水分离器是否正常工作",
      D: "检测有无气管对折"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 88,
    type: "single_choice",
    question: "该设备油水分离器处调大气压的方法为（）？",
    options: {
      A: "向上拉调节阀",
      B: "向下按调节阀",
      C: "顺时针旋转调节阀",
      D: "逆时针旋转调节阀"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 89,
    type: "single_choice",
    question: "在输送模块的交流驱动器中，下列选项代表数字输入的信号为（）。",
    options: {
      A: "DI1",
      B: "DO1",
      C: "OB",
      D: "MON1"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 90,
    type: "single_choice",
    question: "在输送模块的交流驱动器中，下列选项代表信号接地的信号为（）。",
    options: {
      A: "OZ",
      B: "OA",
      C: "GND",
      D: "PULSE"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 91,
    type: "single_choice",
    question: "下列哪个选项不是输送模块中交流驱动器的基本控制模式。",
    options: {
      A: "位置",
      B: "方向",
      C: "速度",
      D: "扭矩"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 92,
    type: "single_choice",
    question: "为使变位机能够平稳运行，需要将调整速度控制增益，需要将伺服参数p2-04设置为（）。",
    options: {
      A: "1000~1500",
      B: "5000~6000",
      C: "7000~8000",
      D: "10000~12000"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 93,
    type: "single_choice",
    question: "将伺服驱动器的参数p1-00设置为1表示（）。",
    options: {
      A: "脉冲控制",
      B: "方向控制",
      C: "脉冲+方向控制",
      D: "PR模式控制"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 94,
    type: "single_choice",
    question: "想用脉冲+方向控制模式来控制伺服驱动器应将参数p1-00设置为（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 95,
    type: "single_choice",
    question: "伺服驱动器的伺服ON信号的电平的高低由参数p2-10决定的，高电平需要将其设置为（）。",
    options: {
      A: "0",
      B: "1",
      C: "100",
      D: "101"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 96,
    type: "single_choice",
    question: "变位机模块做位置定位，则需要电机转动到指定位置立即停止，需将参数p1-32设置为（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "100"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 97,
    type: "single_choice",
    question: "输送模块的交流驱动器，带有面板式调节，想用面板来调节电机的转动只需要将参数F03设置为（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 98,
    type: "single_choice",
    question: "输送模块的交流驱动器，带有面板式调节，想用外部开关来调节电机的转动需要将参数F03设置为（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "4"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 99,
    type: "single_choice",
    question: "输送模块电机的旋转方式由参数F-04控制，只允许正转时只需将参数值设置为（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 100,
    type: "single_choice",
    question: "输送模块电机的旋转方式由参数F-04控制，即允许正转也允许反转时只需将参数值设置为（）。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 101,
    type: "single_choice",
    question: "输送带在实际应用时需要失电便制动功能，正转失电便制动功能只需将参数（）设置为1。",
    options: {
      A: "F- 01",
      B: "F- 05",
      C: "F- 07",
      D: "F- 11"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 102,
    type: "single_choice",
    question: "输送带在实际应用时需要失电便制动功能，反转失电便制动功能只需将参数（）设置为1。",
    options: {
      A: "F- 05",
      B: "F- 07",
      C: "F- 11",
      D: "F- 16"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 103,
    type: "single_choice",
    question: "为保证该设备各模块能正常使用，必须保证设备电源及模块电源电压为（）。",
    options: {
      A: "AC380V/DC24V",
      B: "AC220V/DC24V",
      C: "AC380V",
      D: "AC220V"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 104,
    type: "single_choice",
    question: "该设备的视觉模块的特征匹配尺度模式有（）。",
    options: {
      A: "手动模式",
      B: "自动模式",
      C: "随机模式",
      D: "手动和自动模式"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 105,
    type: "single_choice",
    question: "视觉模块的粗糙尺度参数设置的越小则可以得到的轮廓边缘点会（）。",
    options: {
      A: "增多",
      B: "减少",
      C: "不变",
      D: "先增多后减少"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 106,
    type: "single_choice",
    question: "如果检测的模块表面有很多杂质，我们可以在视觉系统的运行参数里打开（）选项。",
    options: {
      A: "延拓阈值",
      B: "超时控制",
      C: "是否考虑杂斑",
      D: "最大重叠率"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 107,
    type: "single_choice",
    question: "下列哪个选项不是输送模块中交流驱动器的通讯模式。",
    options: {
      A: "CANopen",
      B: "DMCNET",
      C: "EtherCAT",
      D: "Profinet"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 108,
    type: "single_choice",
    question: "不论是搭配17-bit、20-bit或22-bit分辨率的编码器，电子齿轮比都是依照（）分辨率24-bit做设定。",
    options: {
      A: "B1",
      B: "B2",
      C: "B3",
      D: "B4"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 109,
    type: "single_choice",
    question: "在输送模块的交流驱动器中，任何一种模式的最大速度都受到内部参数（）的限制。",
    options: {
      A: "P1.055",
      B: "P1.001",
      C: "P1.255",
      D: "P2.001"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 110,
    type: "single_choice",
    question: "以下哪个交流驱动器的参数可以帮助输送模块进行模拟输出监控？",
    options: {
      A: "P0.001",
      B: "P0.003",
      C: "P4.020",
      D: "P4.021"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 111,
    type: "single_choice",
    question: "当（）功能启动后，伺服驱动器将立即停止输出电流给电机。",
    options: {
      A: "STO",
      B: "PR",
      C: "PT",
      D: "CAN"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 112,
    type: "single_choice",
    question: "安全功能由（）个独立的硬件线路控制电机电流供给，于必要时切断电机动力电源，达到无扭力的状态。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 113,
    type: "single_choice",
    question: "当两个安全信号源中任意一个遗失时，硬件线路将在（）内切断电机电流。",
    options: {
      A: "2s",
      B: "200ms",
      C: "20ms",
      D: "2ms"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 114,
    type: "single_choice",
    question: "调试伺服导轨时，应对导轨进行（）。",
    options: {
      A: "点动正转",
      B: "点动反转",
      C: "连续运行",
      D: "手动回原点"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 115,
    type: "single_choice",
    question: "旋转供料模块完成一个完整的流程需要转动（）次。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 116,
    type: "single_choice",
    question: "视觉检测圆查找模块包括基本参数、运行参数和（）3个设置页面。",
    options: {
      A: "高级参数",
      B: "结果显示",
      C: "结果对比",
      D: "图形参数"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 117,
    type: "single_choice",
    question: "调试各模块前，需要对设备进行取电，该设备的取电方式为（）。",
    options: {
      A: "人脸识别",
      B: "虹膜识别",
      C: "指纹识别",
      D: "密码识别"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 118,
    type: "single_choice",
    question: "该设备每次重新开机后变位机模块在使用前，需要手动进行（）操作。",
    options: {
      A: "点动正转",
      B: "点动反转",
      C: "连续运行",
      D: "手动回原点"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 119,
    type: "single_choice",
    question: "该设备每次重新开机后行走轴模块在调试时，需要手动进行（）操作。",
    options: {
      A: "点动正转",
      B: "点动反转",
      C: "连续运行",
      D: "手动回原点"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 120,
    type: "single_choice",
    question: "由于变位机模块没有设置左右限位，在使用时，需要手动将其移至（），在进行回原点操作。",
    options: {
      A: "随意位置",
      B: "零点位置",
      C: "正极限位置",
      D: "负极限位置"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 121,
    type: "single_choice",
    question: "装配模块的调试，在使得气缸能伸缩到正确位置时需要调节（）至合适位置。",
    options: {
      A: "节流阀",
      B: "气缸位置",
      C: "调高设备气压",
      D: "调低设备气压"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 122,
    type: "single_choice",
    question: "RFID模块的调试前需确认该模块与PLC的通讯是否正常，如果正常，我们将载码体放置在读写头上会出现（）。",
    options: {
      A: "灯光由黄变红",
      B: "灯光连续闪烁",
      C: "灯光亮度提升",
      D: "灯光亮度下降"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 123,
    type: "single_choice",
    question: "搬运模块在调试时除了可以使用简单的程序化编程还可以选择（）方法进行简化编程。",
    options: {
      A: "码垛指令",
      B: "焊接指令",
      C: "宏指令",
      D: "离线编程"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 124,
    type: "single_choice",
    question: "在调试码垛模块时，使用真空吸盘需要配备真空发生器，真空发生器的气压的流向为（）。",
    options: {
      A: "由P流向V",
      B: "由V流向P",
      C: "由P流向B",
      D: "由B流向P"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 125,
    type: "single_choice",
    question: "旋转供料模块在调试时，使用机器人给转盘发送转动信号时等待转动到位时需要将转动信号（），以免下次无法使用。",
    options: {
      A: "在发送一次",
      B: "复位一次",
      C: "重新配置",
      D: "重新定义"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 126,
    type: "single_choice",
    question: "调试伺服导轨时，应注意导轨的原点位置为（）。",
    options: {
      A: "左限位处",
      B: "右限位处",
      C: "中间位",
      D: "随意位置"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 127,
    type: "single_choice",
    question: "当发现机器人手指的开合与调试信号逻辑相反时，正确的做法为（）。",
    options: {
      A: "更换节流阀",
      B: "调节节流阀气压",
      C: "调节手指位置",
      D: "对调手指气缸进气管与出气管的一端"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 128,
    type: "single_choice",
    question: "机器人程序重新开始运行，在仓库有料没有取出复位的情况下，机器人在自动模式下会（）。",
    options: {
      A: "正常运行",
      B: "无法启动有报警信息",
      C: "等待物料取出正常运行",
      D: "运行至该工位时停止"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 129,
    type: "single_choice",
    question: "机器人在编写旋转供料模块的应用程序时，需注意（）机器人才可以去抓取物料。",
    options: {
      A: "机器人运动到位",
      B: "转盘开始转动",
      C: "转盘转动到位",
      D: "机器人回到HOME点"
    },
    answer: "D", // Note: Original answer was D, but logic seems to suggest C. Kept original.
    category: "编程操作"
  },
  {
    id: 130,
    type: "single_choice",
    question: "RFID模块的读写头检测载码体的距离为（）。",
    options: {
      A: "1\\~2mm",
      B: "2\\~5cm",
      C: "5\\~10mm",
      D: "5\\~10cm"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 131,
    type: "single_choice",
    question: "输送模块在调试时，平皮带的停止条件为（）。",
    options: {
      A: "中间传感器检测到物料",
      B: "末端传感器检测到物料",
      C: "手动强制才会停止",
      D: "延时停止"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 132,
    type: "single_choice",
    question: "在调试码垛模块时，发现吸盘末端在出气，正确的做法为（）。",
    options: {
      A: "更换节流阀",
      B: "调节节流阀气压",
      C: "调节吸盘位置",
      D: "对调真空发生器"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 133,
    type: "single_choice",
    question: "装配模块的调试，推料气缸伸出过快，正确的做法为（）。",
    options: {
      A: "调节推料气缸前段节流阀",
      B: "调节推料气缸末端节流阀",
      C: "调节顶料气缸末端节流阀",
      D: "调节顶料气缸前段节流阀"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 134,
    type: "single_choice",
    question: "装配模块的调试，推料气缸缩回过快，正确的做法为（）。",
    options: {
      A: "调节推料气缸前段节流阀",
      B: "调节推料气缸末端节流阀",
      C: "调节顶料气缸末端节流阀",
      D: "调节顶料气缸前段节流阀"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 135,
    type: "single_choice",
    question: "装配模块的调试，顶料气缸伸出过快，正确的做法为（）。",
    options: {
      A: "调节推料气缸前段节流阀",
      B: "调节推料气缸末端节流阀",
      C: "调节顶料气缸末端节流阀",
      D: "调节顶料气缸前段节流阀"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 136,
    type: "single_choice",
    question: "装配模块的调试，顶料气缸缩回过快，正确的做法为（）。",
    options: {
      A: "调节推料气缸前段节流阀",
      B: "调节推料气缸末端节流阀",
      C: "调节顶料气缸末端节流阀",
      D: "调节顶料气缸前段节流阀"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 137,
    type: "single_choice",
    question: "输送模块在调试时，平皮带的传动条件为（）。",
    options: {
      A: "检测到物料时开始传动",
      B: "一直保持传动",
      C: "手动强制才会传动",
      D: "每50s传动20s"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 138,
    type: "single_choice",
    question: "恒锐机器人中数字输入输出的标识是（）。",
    options: {
      A: "AI/AO",
      B: "GI/GO",
      C: "DI/DO",
      D: "RI/RO"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 139,
    type: "single_choice",
    question: "恒锐机器人中模拟输入输出的标识是（）。",
    options: {
      A: "AI/AO",
      B: "GI/GO",
      C: "DI/DO",
      D: "RI/RO"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 140,
    type: "single_choice",
    question: "在该设备模块中开关，传感器等在工业机器人系统中对应（）信号。",
    options: {
      A: "DO",
      B: "DI",
      C: "AI",
      D: "AO"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 141,
    type: "single_choice",
    question: "在该设备模块中气缸，滑台等在工业机器人系统中对应的（）信号。",
    options: {
      A: "DO",
      B: "DI",
      C: "AI",
      D: "AO"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 142,
    type: "single_choice",
    question: "在恒锐机器人系统中，等待数字输入信号DI1为1语句的编程格式为（）。",
    options: {
      A: "DI1=1",
      B: "WAITDINDI1ON",
      C: "WAITDINDI1=1",
      D: "WAITDINDI1=ON"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 143,
    type: "single_choice",
    question: "机器人控制系统最多可以管理（）个DI数字输入端。",
    options: {
      A: "16",
      B: "4096",
      C: "256",
      D: "128"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 144,
    type: "single_choice",
    question: "控制系统在此等待DI信号的指令为（）。",
    options: {
      A: "CYCFLAG",
      B: "TIMER",
      C: "WAIT",
      D: "WAITDINDI=ON"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 145,
    type: "single_choice",
    question: "RFID检测单元检测时，信号反馈到机器人（）信号。",
    options: {
      A: "DI2",
      B: "DI3",
      C: "DI4",
      D: "DI5"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 146,
    type: "single_choice",
    question: "在恒锐机器人系统中，设置数字输出信号DO1为1语句的编程格式为（）。",
    options: {
      A: "DO1=1",
      B: "WAITDINDIOON",
      C: "DOUTDO1ON",
      D: "DOUTDO1=ON"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 147,
    type: "single_choice",
    question: "在恒锐机器人系统中，置反数字输出信号DO1语句的编程格式为（）。",
    options: {
      A: "DO1=1",
      B: "WAITDINDIOFLIP",
      C: "DOUTDO1FLIP",
      D: "DOUTDO1=FLIP"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 148,
    type: "single_choice",
    question: "S7- 12001214C的模拟量物理地址为（）。",
    options: {
      A: "IW12",
      B: "IW32",
      C: "IW64",
      D: "IW96"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 149,
    type: "single_choice",
    question: "在S7- 12001214C的PLC中支持的模拟量信号有（）。",
    options: {
      A: "仅电流型号",
      B: "仅电压信号",
      C: "电流电压信号都支持",
      D: "电流电压信号都不支持"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 150,
    type: "single_choice",
    question: "恒锐工业机器人中将模拟量AI1输入信号的值存储于整形变量A中的正确编程式为（）。",
    options: {
      A: "A=AI1",
      B: "AI1=A",
      C: "CALCU A=AI1",
      D: "CALCU AI1=A"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 151,
    type: "single_choice",
    question: "恒锐工业机器人中向模拟量AO1输出变量B中的值，正确编程格式为（）。",
    options: {
      A: "B=AO1",
      B: "AO1=B",
      C: "CALCU B=AO1",
      D: "CALCU AO1=B"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 152,
    type: "single_choice",
    question: "旋转供料转盘到位后，信号反馈到机器人的（）信号。",
    options: {
      A: "DI2",
      B: "DI3",
      C: "DI4",
      D: "DI5"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 153,
    type: "single_choice",
    question: "导轨原点到位后，信号反馈到机器人的（）信号。",
    options: {
      A: "DI2",
      B: "DI3",
      C: "DI4",
      D: "DI5"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 154,
    type: "single_choice",
    question: "信号一直存在，直至赋予输出端另一个值的功能我们称为（）",
    options: {
      A: "脉冲切换",
      B: "静态切换",
      C: "动态切换",
      D: "随机切换"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 155,
    type: "single_choice",
    question: "称重传感器采用模拟量输入信号，在使用前应当对其进行（）。",
    options: {
      A: "调零",
      B: "数据分析",
      C: "手动分配物理地址",
      D: "性能测试"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 156,
    type: "single_choice",
    question: "由于电压的波动性，在使用模拟量采集数据的时候需要进行（）。",
    options: {
      A: "多次采集进行分析，对变送器进行标定",
      B: "一次采集分析，无需标定",
      C: "多次采集，无需标定",
      D: "一次采集分析，进行标定"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 157,
    type: "single_choice",
    question: "恒锐机器人编程中不可用DI1编程的格式（）。",
    options: {
      A: "WHILE DI1==ON",
      B: "IF DI1==ON",
      C: "WAITDIN DI1 ON",
      D: "FOR DI1==ON"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 158,
    type: "single_choice",
    question: "恒锐机器人共有（）个数字输入，（）数字输出，（）模拟输入，（）模拟输出。",
    options: {
      A: "8，8，8，8",
      B: "16，16，4，4",
      C: "16，16，16，16",
      D: "4，4，4，4"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 159,
    type: "single_choice",
    question: "脉冲切换功能中，脉冲长度的范围是（）",
    options: {
      A: "0.10…1.5s",
      B: "0.10…3s",
      C: "1…3s",
      D: "0…3s"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 160,
    type: "single_choice",
    question: "机器人输出RFID开始检测信号为（）",
    options: {
      A: "DO4",
      B: "DO5",
      C: "DO6",
      D: "DO7"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 161,
    type: "single_choice",
    question: "在恒锐机器人中模拟量的输入输出值范围（）。",
    options: {
      A: "1-10",
      B: "0-5",
      C: "0-15",
      D: "0-10"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 162,
    type: "single_choice",
    question: "在恒锐机器人中为了方便模块化编程，我们可以。",
    options: {
      A: "建立多个程序文件",
      B: "添加子函数编程",
      C: "添加程序等级",
      D: "添加程序编号"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 163,
    type: "single_choice",
    question: "恒锐高级编程功能，以下为调用子函数指令的是（）。",
    options: {
      A: "FOR",
      B: "CALL",
      C: "PALLETIZING",
      D: "OFFSET"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 164,
    type: "single_choice",
    question: "在编写程序时，想在相邻二行之间在写一行指令的方法为（）。",
    options: {
      A: "光标移至上方行，再选择插入行",
      B: "光标移至下方行，再选择插入行",
      C: "随意位置，选择插入行",
      D: "下方行出直接添加自己所需的指令"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 165,
    type: "single_choice",
    question: "在编写程序时，想要连续的多行复制某一段程序时的做法正确的是（）。",
    options: {
      A: "选中程序点击点复制",
      B: "选中多行程序点出复制",
      C: "选中程序第一行点击复制，选择最后一行再次点击复制",
      D: "无法进行多行复制"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 166,
    type: "single_choice",
    question: "中断指令的下一条指令为wite指令时，机器人下一个动作（）。",
    options: {
      A: "不会执行，程序结束",
      B: "等待wite条件成立，继续执行",
      C: "继续运行无影响",
      D: "跳过wite指令"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 167,
    type: "single_choice",
    question: "在主程序中调用子程序，此时需要用到的指令是（）。",
    options: {
      A: "UP[] $=$",
      B: "ProCall",
      C: "Call",
      D: "LBL"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 168,
    type: "single_choice",
    question: "在恒锐机器人程序编辑中，使用（）可以无限循环一段程序。",
    options: {
      A: "A=1 WHILE A==0",
      B: "LBL[] JIMPLBL[]",
      C: "IF ENDIF",
      D: "IF THEN"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 169,
    type: "single_choice",
    question: "恒锐机器人系统中，工具坐标系指令为（）。",
    options: {
      A: "TOOL",
      B: "WORK",
      C: "FOR",
      D: "IF"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 170,
    type: "single_choice",
    question: "恒锐机器人系统中，工件坐标系指令为（）。",
    options: {
      A: "TOOL",
      B: "WORK",
      C: "FOR",
      D: "IF"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 171,
    type: "single_choice",
    question: "恒锐机器人系统中，视觉指令为（）。",
    options: {
      A: "TOOL",
      B: "WORK",
      C: "FVLOCATE",
      D: "IF"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 172,
    type: "single_choice",
    question: "恒锐工业机器人中直线运动偏移的指令为（）。",
    options: {
      A: "MOVJR",
      B: "MOVLR",
      C: "MOVABSJR",
      D: "MOVCR"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 173,
    type: "single_choice",
    question: "恒锐工业机器人中圆弧运动偏移的指令为（）。",
    options: {
      A: "MOVJR",
      B: "MOVLR",
      C: "MOVABSJR",
      D: "MOVCR"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 174,
    type: "single_choice",
    question: "当DI1满足条件时，执行程序TERMINALMOVLPI，下列指令格式正确的是（）。",
    options: {
      A: "IF DI1=ON THEN TERMINALMOVLPI ENDIF",
      B: "IF DI1[1]=ON THEN MOVL P1",
      C: "IF DI1=ON TERMINALMOVLPI ENDIF",
      D: "IF DI1 TERMINALMOVL P1"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 175,
    type: "single_choice",
    question: "以下程序名，命名格式错误的是（）。",
    options: {
      A: "Style",
      B: "yalong",
      C: "@#￥%",
      D: "主程序"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 176,
    type: "single_choice",
    question: "码垛中除了偏移指令外，还可以用添加临时点并用（）完成相同功能。",
    options: {
      A: "计算指令",
      B: "循环指令",
      C: "判断指令",
      D: "跳转指令"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 177,
    type: "single_choice",
    question: "恒锐机器人系统中计算指令的用法（）。",
    options: {
      A: "计算相同类型变量",
      B: "计算不同类型变量",
      C: "计算数字输入",
      D: "计算数字输出"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 178,
    type: "single_choice",
    question: "在编写程序时，我们除了可以使用示教盒编制外还可以使用（）后导入机器人系统。",
    options: {
      A: "离线编程软件",
      B: "3维软件",
      C: "机器人调试软件",
      D: "只能使用示教盒编制"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 179,
    type: "single_choice",
    question: "在编制码垛程序或者搬运程序时，除了点位示教法还可以使用（）。",
    options: {
      A: "偏移指令",
      B: "循环指令",
      C: "判断指令",
      D: "跳转指令"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 180,
    type: "single_choice",
    question: "在编制码垛程序或者搬运程序时，最简单的程序编制方法为（）。",
    options: {
      A: "偏移指令",
      B: "点位示教",
      C: "码垛指令",
      D: "循环指令"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 181,
    type: "single_choice",
    question: "以P1点为基准点，在其X方向偏移一段距离，以下指令格式正确的是（）。",
    options: {
      A: "1.L P[1] $50\\%$ FINE OFFSET PR[1,1]",
      B: "1.J P[1] 200mm/s CNT20 OFFSET PR[1]",
      C: "1.THEN MOVL P1 2.MOVLR MOVLR P2",
      D: "1.PR[1]=JPOS 2.PR[1]=0 2.PR[1，1]=20 3.J P[1] $100\\%$ OFFSET PR[1]"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 182,
    type: "single_choice",
    question: "创建多个程序，以下说法正确的是（）。",
    options: {
      A: "只有初始化可以作为主程序",
      B: "主程序命名不能有字母",
      C: "子程序命名可以数字开头",
      D: "程序名可以重复"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 183,
    type: "single_choice",
    question: "在编制程序时，我们可以选择一个程序写完所有的逻辑，也可以选择（）进行编制。",
    options: {
      A: "分为多个子程序",
      B: "分为多个主程序",
      C: "分为多个例行程序",
      D: "程序集合"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 184,
    type: "single_choice",
    question: "恒锐机器人创建子函数时，以下说法正确的是（）。",
    options: {
      A: "子函数名不能有大写字母",
      B: "子函数名不能有小写字母",
      C: "子程序命名可以数字开头",
      D: "子函数名可以重复"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 185,
    type: "single_choice",
    question: "循环语句配合判断语句，以下哪点不可以实现（）",
    options: {
      A: "循环判断多个条件",
      B: "循环判断单个条件",
      C: "无法判断信号输入",
      D: "循环多次"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 186,
    type: "single_choice",
    question: "工业机器人与PLC之间的通讯方式为（）。",
    options: {
      A: "I/O",
      B: "EtherNet IP",
      C: "Profibus-DP",
      D: "Modbus TCP"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 187,
    type: "single_choice",
    question: "机器人与PLC之间的信息交互，其机器人的数字输入信号对应PLC的数字（）信号。",
    options: {
      A: "模拟量",
      B: "组",
      C: "输出",
      D: "输入"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 188,
    type: "single_choice",
    question: "各模块里面的气缸、快换对应机器人的（）信号。",
    options: {
      A: "输入",
      B: "模拟量",
      C: "输出",
      D: "组"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 189,
    type: "single_choice",
    question: "各模块里面的光电传感器、限位传感器对应的机器人的（）信号。",
    options: {
      A: "输入",
      B: "模拟量",
      C: "输出",
      D: "组"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 190,
    type: "single_choice",
    question: "在该设备中外部控制系统中选用的PLC设备型号为（）。",
    options: {
      A: "s7-1214C",
      B: "s7-1215",
      C: "s7-200",
      D: "s7-200SMART"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 191,
    type: "single_choice",
    question: "外部控制系统中选用的1200系列CPU做多可以添加（）个RS-485串行通信模块？",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 192,
    type: "single_choice",
    question: "闭环过程控制是对温度、压力、流量等连续变化的（）的闭环控制。",
    options: {
      A: "模拟量",
      B: "数字量",
      C: "脉冲信号",
      D: "局域网信号"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 193,
    type: "single_choice",
    question: "操作系统与用户程序的接口是（）？",
    options: {
      A: "组织块",
      B: "功能块",
      C: "背景数据块",
      D: "全局数据块"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 194,
    type: "single_choice",
    question: "在该设备中外部控制系统中选用的PLC设备型号为西门子s7-1214C，其输入/输出点位为（）。",
    options: {
      A: "16输入/16输出",
      B: "16输入/10输出",
      C: "14输入/10输出",
      D: "10输入/14输出"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 195,
    type: "single_choice",
    question: "在设备中外部设备变位机原点开关对应PLC的（）信号。",
    options: {
      A: "模拟量",
      B: "输入",
      C: "输出",
      D: "组"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 196,
    type: "single_choice",
    question: "在该设备中外部设备转盘的原点开关对应PLC的（）信号。",
    options: {
      A: "模拟量",
      B: "输入",
      C: "输出",
      D: "组"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 197,
    type: "single_choice",
    question: "在该设备中外部设备称重传感器的量程为（）千克。",
    options: {
      A: "0~1",
      B: "1~2",
      C: "0~5",
      D: "1~5"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 198,
    type: "single_choice",
    question: "在该设备中外部设备称重传感器在PLC中对应的物理地址是（）。",
    options: {
      A: "固定不变的",
      B: "随机分配的",
      C: "手动指定的",
      D: "浮动的地址"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 199,
    type: "single_choice",
    question: "在该设备中外部设备称重传感器通过变送器给PLC输入的为（）信号。",
    options: {
      A: "电压",
      B: "电流",
      C: "二进制",
      D: "十进制"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 200,
    type: "single_choice",
    question: "S7-1200集成了两个 $100\\mathrm{kHz}$ 的高速脉冲输出，组态为PTO时，它们提供最高频率为（）kHz的 $50\\%$ 占空比的高速脉冲输出",
    options: {
      A: "50",
      B: "100",
      C: "150",
      D: "200"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 201,
    type: "single_choice",
    question: "控制电动机速度、阀门位置或加热元件的占空比时，将生成一个具有可变占空比、周期固定的输出信号，该信号为（）？",
    options: {
      A: "DO输出",
      B: "PID输出",
      C: "PWM输出",
      D: "运动控制输出"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 202,
    type: "single_choice",
    question: "外部控制系统中选用的1200系列CPU支持多达（）个用于闭环过程控制的PID控制回路？",
    options: {
      A: "4",
      B: "8",
      C: "16",
      D: "24"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 203,
    type: "single_choice",
    question: "在该设备中外部设备机器视觉的判断反馈信号对应PLC的（）信号。",
    options: {
      A: "模拟量",
      B: "输入",
      C: "输出",
      D: "组"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 204,
    type: "single_choice",
    question: "RFID模块的检测信号对应工业机器人的信号为（）。",
    options: {
      A: "DO",
      B: "DI",
      C: "GI",
      D: "GO"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 205,
    type: "single_choice",
    question: "RFID模块的检测结果反馈信号对应工业机器人的信号为（）。",
    options: {
      A: "DI5",
      B: "DI6",
      C: "DI7",
      D: "以上都是"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 206,
    type: "single_choice",
    question: "RFID模块与西门子PLC走的通讯协议为（）。",
    options: {
      A: "RS485",
      B: "Modbus TCP",
      C: "Profibus-DP",
      D: "EtherNet IP"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 207,
    type: "single_choice",
    question: "为了获得非常平稳的加工过程，希望作业启动（位置为零）时（）。",
    options: {
      A: "速度为零，加速度为零",
      B: "速度为零，加速度恒定",
      C: "速度恒定，加速度为零",
      D: "速度恒定，加速度恒定"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 208,
    type: "single_choice",
    question: "为了提高工业机器人进行装配的精度，则可以外加（）。",
    options: {
      A: "光电传感器",
      B: "视觉系统",
      C: "编码器",
      D: "对射传感器"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 209,
    type: "single_choice",
    question: "外部控制系统中选用的1200系列CPU可以添加通信模块，它们安装在CPU模块的（）？",
    options: {
      A: "左侧",
      B: "右侧",
      C: "下方",
      D: "上方"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 210,
    type: "single_choice",
    question: "外部控制系统中选用的1200系列CPU有（）种定时器？",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 211,
    type: "single_choice",
    question: "外部控制系统中选用的1200系列CPU有（）种计数器？",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 212,
    type: "single_choice",
    question: "RFID为射屏识别，以下也可以代表RFID名称的为（）。",
    options: {
      A: "CD卡",
      B: "IC卡",
      C: "非接触卡",
      D: "电子标签"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 213,
    type: "single_choice",
    question: "在该设备中有关RFID标签的数据写入功能叙述错误的是（）。",
    options: {
      A: "RFID标签数据写入越多越好",
      B: "RFID数据写入的方式为射屏耦合",
      C: "数据写入可以采用读写器的形式",
      D: "数据写入可以采用标打印机的形式"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 214,
    type: "single_choice",
    question: "多种工艺流程组的称重测量任务，称重模块测得的数据小于设定数据时，则机器人会将该物料放置于（）。",
    options: {
      A: "废料区",
      B: "合格区",
      C: "1号位",
      D: "2号位"
    },
    answer: "A",
    category: "工艺应用"
  },
  {
    id: 215,
    type: "single_choice",
    question: "多种工艺流程组的电机装配任务，在进行入库之前需要（）进行检测，反馈给机器人应该入几号库位。",
    options: {
      A: "视觉",
      B: "RFID",
      C: "光电传感器",
      D: "称重传感器"
    },
    answer: "B",
    category: "工艺应用"
  },
  {
    id: 216,
    type: "single_choice",
    question: "在该设备中智能仓储模块的工位数为（）个。",
    options: {
      A: "2",
      B: "4",
      C: "6",
      D: "8"
    },
    answer: "C",
    category: "工艺应用"
  },
  {
    id: 217,
    type: "single_choice",
    question: "智能仓储模块的光电传感器检测物料时距离有偏差时可以（）。",
    options: {
      A: "调整侧面旋钮",
      B: "调整设备电压",
      C: "调整设备电流",
      D: "调整传感器位置"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 218,
    type: "single_choice",
    question: "外部控制系统中的传感器需要（）才能与机器人相连接？",
    options: {
      A: "高电平",
      B: "低电平",
      C: "脉冲信号",
      D: "ABC都可以"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 219,
    type: "single_choice",
    question: "外部控制系统中选用的1200系列CPU中有一指令可以将IN输入端的源数据复制给OUT1输出的目的地址，并且转换为OUT1指定的数据类型，源数据保持不变。该指令为（）？",
    options: {
      A: "OUT",
      B: "MOVE",
      C: "SWAP",
      D: "ADD"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 220,
    type: "single_choice",
    question: "将输入参数1N设置的值填充到输出参数OUT指定起始地址的目标数据区的指令是（）？",
    options: {
      A: "MOVE_BLK",
      B: "FILL_BLK",
      C: "SWAP_BLK",
      D: "ADD"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 221,
    type: "single_choice",
    question: "人机界面的编程有多个画面时，以下哪种操作可以将某一页设置为第一页画面（）。",
    options: {
      A: "添加画面",
      B: "拖动至第一位",
      C: "选择设为起始页",
      D: "重命名为1"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 222,
    type: "single_choice",
    question: "该设备中选用的西门子人机界面的型号为（）。",
    options: {
      A: "TP700",
      B: "TP1200",
      C: "TP1500",
      D: "TP1700"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 223,
    type: "single_choice",
    question: "人机界面想要进行二次修改或者编辑需要（），否则只可以重新编辑在装载。",
    options: {
      A: "源文件",
      B: "直接下载",
      C: "打开即可",
      D: "不可编辑"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 224,
    type: "single_choice",
    question: "人机界面的配置需要和PLC建立起通讯，通讯的连接与否（）。",
    options: {
      A: "点动界面是否有效",
      B: "查看通讯指示灯是否闪烁",
      C: "查看通讯指示灯是否常亮",
      D: "查看PLC指示灯是否闪烁"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 225,
    type: "single_choice",
    question: "人机界面的编程使用的变量需要与（）关联起来才可正常使用。",
    options: {
      A: "机器人",
      B: "机器人控制器",
      C: "设备模块",
      D: "PLC"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 226,
    type: "single_choice",
    question: "西门子TP700的触摸屏使用的编程软件为（）。",
    options: {
      A: "MCGS",
      B: "博图",
      C: "Touchwin",
      D: "InoTouch Editor"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 227,
    type: "single_choice",
    question: "外部控制系统中选用的1200系列CPU的减法运算指令为（）？",
    options: {
      A: "ADD",
      B: "MUL",
      C: "SUB",
      D: "DIV"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 228,
    type: "single_choice",
    question: "外部控制系统中选用的1200系列CPU的除法指令只能得到商，想要获得余数的指令为（）？",
    options: {
      A: "MOD",
      B: "NEG",
      C: "ABS",
      D: "MAX"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 229,
    type: "single_choice",
    question: "外部控制系统中选用的1200系列CPU中，比较两个数大小，将大的数输出的指令为（）？",
    options: {
      A: "MOD",
      B: "NEG",
      C: "ABS",
      D: "MAX"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 230,
    type: "single_choice",
    question: "该设备中的RFID的检测位置为读写头的（）。",
    options: {
      A: "左变 $0\\sim 5\\mathrm{mm}$",
      B: "底部 $0\\sim 5\\mathrm{mm}$",
      C: "上方 $0\\sim 5\\mathrm{mm}$",
      D: "右边 $0\\sim 5\\mathrm{mm}$"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 231,
    type: "single_choice",
    question: "在恒锐机器人中码垛程序的编写用到的循环指令为（）。",
    options: {
      A: "FOR/ENDFOR",
      B: "OFFSET",
      C: "FOR",
      D: "IF"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 232,
    type: "single_choice",
    question: "在恒锐机器人中搬运程序的编写用到的条件循环指令为（）。",
    options: {
      A: "IF/ENDIF",
      B: "WHILE",
      C: "WITE",
      D: "CASE"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 233,
    type: "single_choice",
    question: "在恒锐机器人中打磨程序的编写用到的等待指令为（）。",
    options: {
      A: "CALL",
      B: "WHILE",
      C: "FOR",
      D: "WAIT"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 234,
    type: "single_choice",
    question: "在恒锐机器人中喷涂程序需要某一区域循环摆动，其编写用到的条件指令为（）。",
    options: {
      A: "FOR/ENDFOR",
      B: "IF/ENDIF",
      C: "FOR",
      D: "IF"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 235,
    type: "single_choice",
    question: "在恒锐机器人中支持加减乘除运算的变量为（）。",
    options: {
      A: "INT型",
      B: "JOINT",
      C: "TERMINAL",
      D: "以上都是"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 236,
    type: "single_choice",
    question: "在各模块初始化程序中需要将（）数据初始化。",
    options: {
      A: "I/O",
      B: "点位数据",
      C: "机器人位置",
      D: "都不需要"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 237,
    type: "single_choice",
    question: "程序的优化中下列不适合使用使用示教编程的为（）。",
    options: {
      A: "货物码垛",
      B: "车轮点焊",
      C: "轮毂去毛刺",
      D: "零件装配"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 238,
    type: "single_choice",
    question: "对程序的优化和调整即为优化程序的（）。",
    options: {
      A: "语句",
      B: "指令",
      C: "结构",
      D: "参数"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 239,
    type: "single_choice",
    question: "多种工艺流程组的称重测量任务，称重模块测得的数据等于设定数据时，则机器人会将该物料放置于（）。",
    options: {
      A: "废料区",
      B: "合格区",
      C: "1号位",
      D: "2号位"
    },
    answer: "B",
    category: "工艺应用"
  },
  {
    id: 240,
    type: "single_choice",
    question: "机械式摆动时，轨迹运动与摆动运动组合，以便焊接摆动焊缝，摆动时，焊嘴最多可沿（）个方向偏转。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "工艺应用"
  },
  {
    id: 241,
    type: "single_choice",
    question: "摆动频率对于摆动焊缝的质量起关键作用，摆动频率的计算方法为（）。",
    options: {
      A: "（焊接速度 $\\times 1000$ ）/（摆动长度 $\\times 60$ ）",
      B: "（焊接速度 $\\times 1000$ ）/（摆动频率 $\\times 60$ ）",
      C: "（摆动频率 $\\mathbf{X}$ 摆动长度 $\\times 60$ ）/1000",
      D: "（焊接速度 $\\times 6000$ ）/（摆动频率）"
    },
    answer: "A",
    category: "工艺应用"
  },
  {
    id: 242,
    type: "single_choice",
    question: "接缝跟踪程序使用时，传感器控制器的通讯和轨迹修正以（）节拍与机器人运动同时进行。",
    options: {
      A: "2 ms",
      B: "6 ms",
      C: "12 ms",
      D: "20 ms"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 243,
    type: "single_choice",
    question: "使用焊枪示教前，检查焊枪的均压装置是否良好，动作是否正常，同时对电极头的要求是（）。",
    options: {
      A: "使用磨耗量大的电极头",
      B: "电极头无影响",
      C: "更换新的电极头",
      D: "新的或旧的都行"
    },
    answer: "C",
    category: "工艺应用"
  },
  {
    id: 244,
    type: "single_choice",
    question: "为了获得非常平稳的加工过程，希望作业启动（位置为零）时（）。",
    options: {
      A: "速度为零，加速度为零",
      B: "速度为零，加速度恒定",
      C: "速度恒定，加速度为零",
      D: "速度恒定，加速度恒定"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 245,
    type: "single_choice",
    question: "该设备的视觉检测系统控制器上的U盘作用为（）。",
    options: {
      A: "数据存储",
      B: "数据读写",
      C: "授权解密",
      D: "数据的存储与读写"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 246,
    type: "single_choice",
    question: "该设备的视觉检测系统相机的成相为（）。",
    options: {
      A: "黑白",
      B: "彩色",
      C: "不可图像输出",
      D: "不能确定"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 247,
    type: "single_choice",
    question: "该设备的视觉检测系统相机的光源为（）。",
    options: {
      A: "条形光源",
      B: "方形光源",
      C: "对射光源",
      D: "圆形光源"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 248,
    type: "single_choice",
    question: "该设备的视觉系统的控制器连接上外接显示屏，可以使用鼠标进行（）。",
    options: {
      A: "光源的亮度调节",
      B: "相机的像素调节",
      C: "相机的开启与关闭",
      D: "逻辑编程"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 249,
    type: "single_choice",
    question: "多种工艺流程组的输送线物料检测任务，视觉检测的为（）。",
    options: {
      A: "物料大小",
      B: "物料位置",
      C: "物料颜色",
      D: "物料材质"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 250,
    type: "single_choice",
    question: "在该设备中RFID上位机PC软件设计方法为（）。",
    options: {
      A: "协议命令",
      B: "IAR",
      C: "程序向导",
      D: "识别获取"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 251,
    type: "single_choice",
    question: "该设备的视觉检测系统除了可以检测物料的颜色外还可以检测物料的（）。",
    options: {
      A: "形状",
      B: "材质",
      C: "大小",
      D: "重量"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 252,
    type: "single_choice",
    question: "程序的优化中下列不适合使用使用示教编程的为（）。",
    options: {
      A: "货物码垛",
      B: "车轮点焊",
      C: "轮毂去毛刺",
      D: "零件装配"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 253,
    type: "single_choice",
    question: "多种工艺流程组的电机装配任务，在进行入库之前需要RFID进行检测，反馈给（）应该入几号库位。",
    options: {
      A: "视觉",
      B: "机器人",
      C: "光电传感器",
      D: "称重传感器"
    },
    answer: "B",
    category: "工艺应用"
  },
  {
    id: 254,
    type: "single_choice",
    question: "在优化程序的结构后我们也可以优化语句的（）",
    options: {
      A: "语言",
      B: "指令",
      C: "结构",
      D: "参数"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 255,
    type: "single_choice",
    question: "为了提高工业机器人进行装配的精度，则可以外加（）。",
    options: {
      A: "光电传感器",
      B: "视觉系统",
      C: "编码器",
      D: "对射传感器"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 256,
    type: "single_choice",
    question: "伺服焊枪电极头烧损的最大允许数值（两个电极总计）为（）？",
    options: {
      A: "0-20mm",
      B: "0-50mm",
      C: "0-100mm",
      D: "0-200mm"
    },
    answer: "A",
    category: "工艺应用"
  },
  {
    id: 257,
    type: "single_choice",
    question: "主程序中最多可相互嵌入（）个子程序？",
    options: {
      A: "8",
      B: "12",
      C: "20",
      D: "没有限制"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 258,
    type: "single_choice",
    question: "在程序建立很多的情况下，查找程序会变得很麻烦，可以将常用的程序名称按（）进行命名。",
    options: {
      A: "数字大小",
      B: "字母先后顺序",
      C: "程序名称长度",
      D: "程序字母大小写"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 259,
    type: "single_choice",
    question: "在程序执行时用（）可结束子程序，并由此跳回到先前调用该子程序的程序模块中。",
    options: {
      A: "STOP",
      B: "RETURN",
      C: "PROCALL",
      D: "JUMP"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 260,
    type: "single_choice",
    question: "在编辑程序时，可以使用（）快速将一段程序移动到其他位置。",
    options: {
      A: "删除",
      B: "复制/粘贴",
      C: "剪切/粘贴",
      D: "插入"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 261,
    type: "single_choice",
    question: "在多种工艺流程组的多边形搬运任务中，机器人去抓取或者放置夹具时，需要将导轨移至（）。",
    options: {
      A: "1号位",
      B: "2号位",
      C: "3号位",
      D: "4号位"
    },
    answer: "A",
    category: "工艺应用"
  },
  {
    id: 262,
    type: "single_choice",
    question: "在多种工艺流程组的多边形搬运任务中，机器人去进行检测入库时，需要将导轨移至（）。",
    options: {
      A: "1号位",
      B: "2号位",
      C: "3号位",
      D: "4号位"
    },
    answer: "C",
    category: "工艺应用"
  },
  {
    id: 263,
    type: "single_choice",
    question: "在多种工艺流程组的多边形搬运任务中，机器人去一号位置抓取或者放置夹具时，需要（），机器人才可以进行下一步动作。",
    options: {
      A: "等待导轨位置到达",
      B: "等待机器人运动完成",
      C: "等待夹具库放满夹具",
      D: "等待5S的延时"
    },
    answer: "A",
    category: "工艺应用"
  },
  {
    id: 264,
    type: "single_choice",
    question: "程序可以被复制，但是程序名不能相同，其复制过来的程序点位数据（）。",
    options: {
      A: "保持不变",
      B: "完全丢失",
      C: "逻辑改变",
      D: "名称相同，数据丢失"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 265,
    type: "single_choice",
    question: "在码垛任务中，可通过（）方式多次运行程序。",
    options: {
      A: "无限循环",
      B: "条件循环",
      C: "计数",
      D: "条件判断"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 266,
    type: "single_choice",
    question: "首先按下按钮盒的（）按钮，然后操作触摸屏的功能按钮，才能够实现对设备进行相关操作。",
    options: {
      A: "启动",
      B: "停止",
      C: "复位",
      D: "急停"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 267,
    type: "single_choice",
    question: "该设备运行时按下按钮盒的（）按钮，红灯亮起。",
    options: {
      A: "启动",
      B: "停止/急停",
      C: "复位",
      D: "暂停"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 268,
    type: "single_choice",
    question: "该设备准备就绪时按下按钮盒的（）按钮，绿灯亮起。",
    options: {
      A: "启动",
      B: "停止",
      C: "复位",
      D: "急停"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 269,
    type: "single_choice",
    question: "当PLC处于（）状态且触摸屏和PLC处于连接状态时，触摸屏状态灯以0.5HZ频率闪烁。",
    options: {
      A: "运行",
      B: "停止",
      C: "复位",
      D: "暂停"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 270,
    type: "single_choice",
    question: "下列指令不属于机器人流程控制指令的是（）。",
    options: {
      A: "IF",
      B: "FOR/ENDFOR",
      C: "LBL[]",
      D: "L"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 271,
    type: "single_choice",
    question: "直到型循环也称为（）。",
    options: {
      A: "后测试循环",
      B: "当型循环",
      C: "计数循环",
      D: "无限循环"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 272,
    type: "single_choice",
    question: "下列坐标系与其他坐标差异较为明显的是（）。",
    options: {
      A: "用户坐标系",
      B: "关节坐标系",
      C: "世界坐标系",
      D: "手动坐标系"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 273,
    type: "single_choice",
    question: "编写机器人程序，完成从P[1]到P[2]点的直线运动，要求精准到位，下列程序正确的是（）。",
    options: {
      A: "1.L P[1] $50\\%$ FINE\n2. L P[2] 100mm/sec FINE",
      B: "1.J P[1] $50\\%$ FINE\n2. L P[2] 100mm/sec Cnt10",
      C: "1.MOVL P1\n2.MOVL R P2",
      D: "1.J P[1] $50\\%$ FINE\n2. J P[2] $100\\%$ FINE"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 274,
    type: "single_choice",
    question: "码垛模块在吸取物料时出现吸取失败，可以通过（）指令等待吸盘与物料贴合后再吸取。",
    options: {
      A: "DELAY",
      B: "WAITDIN",
      C: "WAITTIME",
      D: "DOUT"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 275,
    type: "single_choice",
    question: "机器人处于安全位置时，按下（）按钮导轨会做寻原点运动。",
    options: {
      A: "电机正转",
      B: "电机反转",
      C: "寻原点",
      D: "暂停"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 276,
    type: "single_choice",
    question: "创建工作站环境应该在（）环境下进行。",
    options: {
      A: "零件",
      B: "装配体",
      C: "钣金",
      D: "焊接"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 277,
    type: "single_choice",
    question: "仿真软件支持输入（）格式的三维模型。",
    options: {
      A: ".step",
      B: ".sldprt",
      C: ".igs",
      D: "以上均可"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 278,
    type: "single_choice",
    question: "以下哪个选项不属于模型的装配关系（）。",
    options: {
      A: "贴合",
      B: "插入",
      C: "同轴",
      D: "竖直"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 279,
    type: "single_choice",
    question: "定义机器人的旋转特征通过（）命令实现。",
    options: {
      A: "同轴",
      B: "角度",
      C: "同轴 $^+$ 角度",
      D: "以上均不是"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 280,
    type: "single_choice",
    question: "定义机器人的平移特征通过（）命令实现。",
    options: {
      A: "插入",
      B: "贴合",
      C: "路径",
      D: "连接"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 281,
    type: "single_choice",
    question: "用step格式输入模型时需使用（）文件名。",
    options: {
      A: "中文",
      B: "英文",
      C: "中英文均可",
      D: "以上均不可"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 282,
    type: "single_choice",
    question: "创建状态机至少需要（）个状态。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 283,
    type: "single_choice",
    question: "下列关于恒锐仿真软件叙述正确的是（）。",
    options: {
      A: "各模型具有单独的分类和列表",
      B: "各模型可直接拖入工作空间使用",
      C: "所有模型都可以在电子目录下找到",
      D: "以上说法均为错误"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 284,
    type: "single_choice",
    question: "常用的搬运机器人属于（）类型。",
    options: {
      A: "关节型",
      B: "球坐标型",
      C: "笛卡尔型",
      D: "点到点型"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 285,
    type: "single_choice",
    question: "恒锐机器人仿真中有（）种坐标系。",
    options: {
      A: "3种",
      B: "4种",
      C: "5种",
      D: "6种"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 286,
    type: "single_choice",
    question: "下列操作中，机器人工作站模型创建不需要考虑的是（）。",
    options: {
      A: "机器人选型",
      B: "布局",
      C: "末端工具选型",
      D: "供电"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 287,
    type: "single_choice",
    question: "创建底座需要包含（）特征。",
    options: {
      A: "cp坐标系",
      B: "TCP坐标系",
      C: "安装坐标系",
      D: "以上都是"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 288,
    type: "single_choice",
    question: "以下属于工作站布局的是（）。",
    options: {
      A: "工具",
      B: "状态机",
      C: "机器人",
      D: "以上都是"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 289,
    type: "single_choice",
    question: "工作站环境的默认保存格式为（）。",
    options: {
      A: ".asm",
      B: ".psm",
      C: ".par",
      D: ".dft"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 290,
    type: "single_choice",
    question: "下列哪项不属于工作站的分类（）。",
    options: {
      A: "基础教学工作站",
      B: "工艺实训工作站",
      C: "技能竞赛工作站",
      D: "加工工作站"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 291,
    type: "single_choice",
    question: "工作站中的位置布局可以用（）功能实现。",
    options: {
      A: "三维球",
      B: "电动机",
      C: "替换",
      D: "插入"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 292,
    type: "single_choice",
    question: "以下（）属于三维球的属性。",
    options: {
      A: "旋转轴",
      B: "平移轴",
      C: "中心点",
      D: "以上都是"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 293,
    type: "single_choice",
    question: "在工作站环境中导入定义好的机器人，（）属性要重写激活。",
    options: {
      A: "与运动相关装配关系",
      B: "零部件相关属性",
      C: "所有装配关系",
      D: "无需重写激活"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 294,
    type: "single_choice",
    question: "在工作站环境中导入定义好的状态机，（）属性要重写激活。",
    options: {
      A: "与状态相关装配关系",
      B: "零部件相关属性",
      C: "所有装配关系",
      D: "无需重写激活"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 295,
    type: "single_choice",
    question: "下列设计原则中，机器人工作站在系统布局时必须优先考虑的是（）。",
    options: {
      A: "便于维护修理",
      B: "操作系统简单明了，便于操作和人工干预",
      C: "各设备及控制系统应具有故障显示及报警装置",
      D: "操作系统便于联网控制"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 296,
    type: "single_choice",
    question: "下列不是机器人仿真工作站运作过程中必要组成部分的是（）。",
    options: {
      A: "控制系统",
      B: "辅助设备",
      C: "机器人本体",
      D: "安全装置"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 297,
    type: "single_choice",
    question: "下列不是机器人系统布局所需配置的是（）。",
    options: {
      A: "工程配置",
      B: "人机系统配置",
      C: "操作箱、电器柜的配置",
      D: "维护修理和安全设施配置"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 298,
    type: "single_choice",
    question: "机器人工作站的设计方案主要取决于（）。",
    options: {
      A: "工装效率",
      B: "工装环境",
      C: "工装对象产品",
      D: "以上都是"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 299,
    type: "single_choice",
    question: "在工作站环境中编辑导入的工具、零件等需在（）环境在进行。",
    options: {
      A: "同步建模",
      B: "顺序建模",
      C: "收敛建模",
      D: "以上均不是"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 300,
    type: "single_choice",
    question: "整体的透明度特征可以在（）界面进行修改。",
    options: {
      A: "自定义",
      B: "Add-in",
      C: "设置选项",
      D: "主题"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 301,
    type: "single_choice",
    question: "颜色的缺省值信息可以在设置界面的（）下修改。",
    options: {
      A: "视图",
      B: "颜色",
      C: "文件位置",
      D: "存储"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 302,
    type: "single_choice",
    question: "以下哪项不包含于几何属性特征（）。",
    options: {
      A: "材质",
      B: "颜色",
      C: "透明度",
      D: "大小"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 303,
    type: "single_choice",
    question: "机器人程序跟踪的提示颜色是（）。",
    options: {
      A: "红色",
      B: "灰色",
      C: "黑色",
      D: "黄色"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 304,
    type: "single_choice",
    question: "使用仿真搭建的机器人程序控制真实机器人需要登录到（）模式。",
    options: {
      A: "用户权限",
      B: "技术员权限",
      C: "管理员权限",
      D: "厂家"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 305,
    type: "single_choice",
    question: "使用平板远程控制机器人时，平板需要和控制器连接（）。",
    options: {
      A: "局域网",
      B: "中继网",
      C: "转接网",
      D: "传输网"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 306,
    type: "single_choice",
    question: "恒锐机器人仿真信息提示栏提示状态信息的颜色为（）。",
    options: {
      A: "红色",
      B: "黄色",
      C: "蓝色",
      D: "绿色"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 307,
    type: "single_choice",
    question: "几何属性特征会被记录在文件的（）属性界面中。",
    options: {
      A: "常规",
      B: "共享",
      C: "以前的版本",
      D: "自定义"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 308,
    type: "single_choice",
    question: "下面哪项属于工具的分类（）。",
    options: {
      A: "法兰工具",
      B: "快换工具",
      C: "外部工具",
      D: "以上都是"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 309,
    type: "single_choice",
    question: "法兰工具中含有（）FL坐标系。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "无数"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 310,
    type: "single_choice",
    question: "快换工具中含有（）CP坐标系。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "无数"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 311,
    type: "single_choice",
    question: "外部工具中含有（）FL/CP坐标系。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "无数"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 312,
    type: "single_choice",
    question: "以下哪项不是自定义工具时需存储的信息（）。",
    options: {
      A: "机器人",
      B: "FL/CP坐标系",
      C: "TCP坐标系",
      D: "工具类型"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 313,
    type: "single_choice",
    question: "与机器人直接相连的是（）工具。",
    options: {
      A: "快换工具",
      B: "法兰工具",
      C: "外部工具",
      D: "以上都是"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 314,
    type: "single_choice",
    question: "工具的相关坐标系的定位是通过（）功能实现。",
    options: {
      A: "三维球",
      B: "变量表",
      C: "装配关系",
      D: "以上都是"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 315,
    type: "single_choice",
    question: "自定义工具在（）环境下。",
    options: {
      A: "asm",
      B: "psm",
      C: ".par",
      D: "dft"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 316,
    type: "single_choice",
    question: "当工具模型初次加载到仿真环境中，位置发生错误，正确的操作是（）。",
    options: {
      A: "删除此模型并重新加载",
      B: "调整机器人的位置适应工具",
      C: "调整工具模型的位置适应机器人",
      D: "修改模型的坐标"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 317,
    type: "single_choice",
    question: "工具的默认存储格式为（）。",
    options: {
      A: "asm",
      B: "psm",
      C: ".par",
      D: "dft"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 318,
    type: "single_choice",
    question: "下列关于快换工具说法错误的是（）。",
    options: {
      A: "可直接与机器人相连",
      B: "分为机器人侧用和工具侧用",
      C: "有且仅有1个CP坐标系",
      D: "可以有多个TCP坐标系"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 319,
    type: "single_choice",
    question: "下列关于工具负载数据的可能来源叙述错误的是（）。",
    options: {
      A: "生产厂商数据",
      B: "机器人示教",
      C: "人工计算",
      D: "CAD程序"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 320,
    type: "single_choice",
    question: "下列关于正确输入负载数据叙述有误的是（）。",
    options: {
      A: "可以从其高精度中受益",
      B: "可以使运动过程具有最佳的节拍时间",
      C: "可以使机器人达到长的使用寿命",
      D: "可以使其计算更加便捷"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 321,
    type: "single_choice",
    question: "修改机器人工具坐标所需权限为（）。",
    options: {
      A: "用户",
      B: "厂家",
      C: "管理员",
      D: "安全维护人员"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 322,
    type: "single_choice",
    question: "下列关于因素影响测量结果质量的叙述正确的是（）。",
    options: {
      A: "TCP点与法兰的距离越长越精确",
      B: "错误的零点标定会导致不精确的测量结果",
      C: "创建过程中机器人各轴位置差异越大越精确",
      D: "创建过程中定位点发生偏移，将其手动调回原位便不会影响TCP的精确度"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 323,
    type: "single_choice",
    question: "下列关于法兰工具说法正确的是（）。",
    options: {
      A: "有多个FL坐标系",
      B: "可与机器人直接相连",
      C: "有且仅有一个TCP坐标系",
      D: "定义时需绑定机器人"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 324,
    type: "single_choice",
    question: "以下（）属于码垛的类型",
    options: {
      A: "三花垛",
      B: "五花垛",
      C: "八花垛",
      D: "以上都是"
    },
    answer: "D",
    category: "工艺应用"
  },
  {
    id: 325,
    type: "single_choice",
    question: "焊接，抛光，喷涂等模块的桌面的安装方式为（）。",
    options: {
      A: "单一位置摆放，快速更换",
      B: "单一位置摆放，不可更换",
      C: "随意组合摆放，不可更换",
      D: "随意组合摆放，快速更换"
    },
    answer: "D",
    category: "工艺应用"
  },
  {
    id: 326,
    type: "single_choice",
    question: "不同模块的安装应该遵从的原则为（）。",
    options: {
      A: "随意安装，无需固定牢靠",
      B: "随意安装，固定牢靠",
      C: "固定牢靠即可",
      D: "工作范围内安装并固定牢靠"
    },
    answer: "D",
    category: "工艺应用"
  },
  {
    id: 327,
    type: "single_choice",
    question: "在工件的所在平面只需要定义（）个点就可以建立工件坐标。",
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
    id: 328,
    type: "single_choice",
    question: "若想对工作站进行缩放的话，（）可以对工作站进行放大缩小。",
    options: {
      A: "滚动鼠标的滚动键",
      B: "ctrl+shift+鼠标左键，拖动鼠标",
      C: "ctrl+鼠标左键，拖动鼠标",
      D: "按住键盘上的\"+\"、\"-\""
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 329,
    type: "single_choice",
    question: "机器人模型再工作站中有（）种运动模式。",
    options: {
      A: "手动关节运动",
      B: "手动线性运动",
      C: "手动重定位运动",
      D: "以上都是"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 330,
    type: "single_choice",
    question: "下列说法正确的是（）。",
    options: {
      A: "创建路径点击编译功能，若绿色打钩说明都可达",
      B: "在工作站中有多个机器人时，控制某个机器人运动需先下拉选择对应机器人",
      C: "软件支持较复杂的模型建模",
      D: "以上都是"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 331,
    type: "single_choice",
    question: "下列关于自动焊接的描述最为准确的是（）。",
    options: {
      A: "操作人员能远离噪音或高温区进行作业",
      B: "能缩短生产节拍，提高产量",
      C: "能实现无人运行",
      D: "能提高企业的形象"
    },
    answer: "A",
    category: "工艺应用"
  },
  {
    id: 332,
    type: "single_choice",
    question: "焊接过程中，速度的稳定性是一项重要的指标。一般情况下，焊接速度可取的最佳范围为（）。",
    options: {
      A: "5~100mm/s",
      B: "20~50mm/s",
      C: "5~50mm/s",
      D: "20~100mm/s"
    },
    answer: "C",
    category: "工艺应用"
  },
  {
    id: 333,
    type: "single_choice",
    question: "下列关于码垛机器人的叙述正确的是（）。",
    options: {
      A: "码垛机器人码放货物时机械手需“靠”入码放点对货物进行码放",
      B: "码垛机器人可取代工人的工作，大大降低了工人的工作强度",
      C: "码垛机器人具有适应能力强、可靠性高、稳定性强等特点",
      D: "码垛机器人可在高温、高湿、低温等特殊环境下正常运作"
    },
    answer: "A",
    category: "工艺应用"
  },
  {
    id: 334,
    type: "single_choice",
    question: "下列系统变量中不能用于查询机器人状态的是（）。",
    options: {
      A: "定时器",
      B: "调用",
      C: "标记",
      D: "输入、输出信号"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 335,
    type: "single_choice",
    question: "若想对工作站进行旋转的话，（）可以实现。",
    options: {
      A: "按住鼠标滚轮拖动",
      B: "ctrl+shift+鼠标左键，拖动鼠标",
      C: "ctrl+鼠标左键，拖动鼠标",
      D: "按住键盘上的\"+\"、\"-\""
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 336,
    type: "single_choice",
    question: "码垛中除了偏移指令外，还可以用添加临时点并用（）完成相同功能。",
    options: {
      A: "计算指令",
      B: "循环指令",
      C: "判断指令",
      D: "跳转指令"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 337,
    type: "single_choice",
    question: "对机器人进行示教编程时，通常要求最初机器人程序点和最终程序点的位置（），可提高工作效率。",
    options: {
      A: "相同",
      B: "不相同",
      C: "无所谓",
      D: "分离越大越好"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 338,
    type: "single_choice",
    question: "在恒锐机器人中工具的功能包括（）。",
    options: {
      A: "抓取物体",
      B: "放开物体",
      C: "插入POS点",
      D: "以上都是"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 339,
    type: "single_choice",
    question: "当工件上的边缘曲线自动生成运动轨迹发现机器人位姿不可达，此时（）正确做法。",
    options: {
      A: "删除路径",
      B: "调整机器人位姿",
      C: "重新生成轨迹",
      D: "更换机器人"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 340,
    type: "single_choice",
    question: "下列关于路径的操作正确的是（）。",
    options: {
      A: "可以在轴超限的情况下使用路径",
      B: "可以使用存在干涉点的路径",
      C: "路径正常编译通过可使用",
      D: "以上都不对"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 341,
    type: "single_choice",
    question: "焊接工艺时自动生成的路径上的机器人姿态是（）。",
    options: {
      A: "机器人默认初始姿态",
      B: "执行路径前一个点的姿态",
      C: "随机生成姿态",
      D: "以上都不对"
    },
    answer: "B",
    category: "工艺应用"
  },
  {
    id: 342,
    type: "single_choice",
    question: "下列关于出入刀点说法正确的是（）。",
    options: {
      A: "执行动作时必须设置出入刀点",
      B: "入刀和出刀偏移量必须设定相同",
      C: "不同机器人默认偏移方向可能不同",
      D: "以上都正确"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 343,
    type: "single_choice",
    question: "下列指令中，不能循环指令的是（）。",
    options: {
      A: "WHILE",
      B: "FOR",
      C: "1.FOR 42D .IF A==B 3.ENDIF 4.ENDFOR",
      D: "IFA=B"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 344,
    type: "single_choice",
    question: "下列不属于恒锐仿真的特性是（）。",
    options: {
      A: "可用的程序编译器进行KRL句法检查",
      B: "可以随时和定期在标准计算机上优化程序",
      C: "能够与恒锐机器人进行I/O模拟",
      D: "可以完成机器人动作节拍的仿真"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 345,
    type: "single_choice",
    question: "恒锐机器人有几种运动方式（）。",
    options: {
      A: "3种",
      B: "4种",
      C: "5种",
      D: "6种"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 346,
    type: "single_choice",
    question: "下列运动方式指令中，在轴同步的情况下运动最快的是（）。",
    options: {
      A: "MOVABSJ",
      B: "LIN",
      C: "CIRC",
      D: "ARC"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 347,
    type: "single_choice",
    question: "如果工作站中的某一个元素需要顺时针调整 90° 方向，下列操作正确的是（）。",
    options: {
      A: "空格键 + →",
      B: "ctrl+\"→\"",
      C: "ctrl+shift+\"→\"",
      D: "三维球调整"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 348,
    type: "single_choice",
    question: "在测量机器人底座高度时，下列哪种测量方式最合适（）。",
    options: {
      A: "PMI标注",
      B: "测量角度",
      C: "测量距离",
      D: "智能测量"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 349,
    type: "single_choice",
    question: "自定义机器人时下列哪个无需设定（）。",
    options: {
      A: "实时关节角度",
      B: "零点位置",
      C: "角度范围",
      D: "DH参数"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 350,
    type: "single_choice",
    question: "机器人在手动线性运动后，位置会发生改变，下列哪种操作一定能使机器人回到原始位置。（）",
    options: {
      A: "插入pos点",
      B: "回到Home点",
      C: "回到机械原点",
      D: "控制面板调节关节参数"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 351,
    type: "single_choice",
    question: "通用六轴机器人有（）个自由度。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 352,
    type: "single_choice",
    question: "协作机器人一般有（）个自由度。",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 353,
    type: "single_choice",
    question: "以下哪项不属于机器人工作空间的性能指标。（）",
    options: {
      A: "机器人的结构形式",
      B: "每个关节的运动范围",
      C: "腕部参考点",
      D: "机器人的品牌"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 354,
    type: "single_choice",
    question: "自定义状态机保存格式为（）。",
    options: {
      A: ".asm",
      B: "psm",
      C: ".par",
      D: "dft"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 355,
    type: "single_choice",
    question: "自定义底座保存格式为（）。",
    options: {
      A: ".asm",
      B: "psm",
      C: ".par",
      D: "dft"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 356,
    type: "single_choice",
    question: "以下关于自定义状态机说法错误的是（）。",
    options: {
      A: "状态机至少有2个状态",
      B: "转动状态对应变量表中的角度值",
      C: "平移状态对应变量表中的距离值",
      D: "无法在工作站环境下修改状态机"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 357,
    type: "single_choice",
    question: "以下关于自定义底座说法错误的是（）。",
    options: {
      A: "底座是安装机器人的载具",
      B: "机器人安装完成后拖动底座机器人不会跟着动",
      C: "每个底座有且仅有一个安装坐标系",
      D: "底座在定义时需在零件环境下"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 358,
    type: "single_choice",
    question: "以下关于自定义零件说法错误的是（）。",
    options: {
      A: "零件可以有多个CP坐标系",
      B: "零件可以有多个RP坐标系",
      C: "零件的CP坐标系唯一",
      D: "定义零件需在零件环境下"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 359,
    type: "single_choice",
    question: "以下关于自定义工具说法错误的是（）。",
    options: {
      A: "不同工具对应需要添加的坐标系不一样",
      B: "外部工具只需设置TCP信息",
      C: "快换工具只有唯一的TCP",
      D: "法兰工具直接与机器人相连接"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 360,
    type: "single_choice",
    question: "以下对于仿真事件说法错误的是（）。",
    options: {
      A: "仿真事件的执行设备可以是机器人、零件、状态机等",
      B: "仿真事件的类型不唯一",
      C: "可以选择在点前或者点后执行",
      D: "状态机不能添加到仿真事件中"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 361,
    type: "single_choice",
    question: "以下（）不包含于仿真事件。",
    options: {
      A: "抓取事件",
      B: "运动事件",
      C: "放开事件",
      D: "等待事件"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 362,
    type: "single_choice",
    question: "以下（）不属于仿真事件。",
    options: {
      A: "发送事件",
      B: "自定义事件",
      C: "停止事件",
      D: "模拟事件"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 363,
    type: "single_choice",
    question: "下列属于变量的是（）。",
    options: {
      A: "$TIMER[1]",
      B: "INT",
      C: "DECL",
      D: "XP1"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 364,
    type: "single_choice",
    question: "下列运动方式中，不属于基本运动指令的是（）。",
    options: {
      A: "MOVJ",
      B: "ARC",
      C: "MOVL",
      D: "MOVC"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 365,
    type: "single_choice",
    question: "下列操作中，机器人无法进极限识别（）。",
    options: {
      A: "示教模式",
      B: "再现模式",
      C: "远程模式",
      D: "以上都可以"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 366,
    type: "single_choice",
    question: "下列不属于工具测量途径的是（）。",
    options: {
      A: "TCP测量的XYZ4点法",
      B: "TCP测量的XYZ参照法",
      C: "姿态测量的ABC2点法",
      D: "姿态测量的ABC参照法"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 367,
    type: "single_choice",
    question: "下列关于机器人系统离线仿真叙述不正确的是（）。",
    options: {
      A: "可以提高设计效率",
      B: "可以优化工装夹具和运动轨迹",
      C: "可以确认干涉点和干涉位置",
      D: "可以提高生产效率"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 368,
    type: "single_choice",
    question: "状态机在工作站是以（）形式呈现。",
    options: {
      A: "添加仿真事件",
      B: "自定义驱动",
      C: "无法模拟运动",
      D: "与机器人协同操作"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 369,
    type: "single_choice",
    question: "手部的位姿由（）构成。",
    options: {
      A: "位置与速度",
      B: "位置与姿态",
      C: "位置与运行状态",
      D: "姿态与速度"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 370,
    type: "single_choice",
    question: "机器人轨迹控制过程需要通过求解（）获得各个关节角的位置控制系统的设定值。",
    options: {
      A: "运动学正问题",
      B: "运动学逆问题",
      C: "动力学正问题",
      D: "动力学逆问题"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 371,
    type: "single_choice",
    question: "对于转动关节而言，关节变量是D-H参数中的（）。",
    options: {
      A: "关节角",
      B: "连杆偏距",
      C: "连杆长度",
      D: "连杆扭转角"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 372,
    type: "single_choice",
    question: "对于移动关节而言，关节变量是D-H参数中的（）。",
    options: {
      A: "关节角",
      B: "连杆偏距",
      C: "连杆长度",
      D: "连杆扭转角"
    },
    answer: "B",
    category: "编程操作"
  },
  {
    id: 373,
    type: "single_choice",
    question: "运动正问题是实现（）变换。",
    options: {
      A: "从关节空间到操作空间的变换",
      B: "从操作空间到笛卡尔空间的变换",
      C: "从笛卡尔空间到关节空间的变换",
      D: "从操作空间到关节空间的变换"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 374,
    type: "single_choice",
    question: "运动逆问题是实现（）变换。",
    options: {
      A: "从关节空间到操作空间的变换",
      B: "从操作空间到笛卡尔空间的变换",
      C: "从笛卡尔空间到关节空间的变换",
      D: "从操作空间到关节空间的变换"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 375,
    type: "single_choice",
    question: "动力学的研究内容是将机器人的（）联系起来。",
    options: {
      A: "运动与控制",
      B: "传感器与控制",
      C: "结构与运动",
      D: "传感系统与运动"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 376,
    type: "single_choice",
    question: "动力学主要是研究机器人的（）。",
    options: {
      A: "动力源是什么",
      B: "运动和时间的关系",
      C: "动力的传递和转换",
      D: "动力的应用"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 377,
    type: "single_choice",
    question: "如果要修改关节的零点位置参数，可以在（）下进行。",
    options: {
      A: "控制面板",
      B: "调试面板",
      C: "修改机器人设置功能",
      D: "运动参数设置"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 378,
    type: "single_choice",
    question: "下列哪项不属于插入POS点的类型（）。",
    options: {
      A: "Movej",
      B: "MoveL",
      C: "MoveC",
      D: "MoveABSJJ"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 379,
    type: "single_choice",
    question: "机器人的精度主要存在于机械误差、控制算法误差与分辨率系统误差。一般来说（）。",
    options: {
      A: "绝对定位精度高于重复定位精度",
      B: "重复定位精度高于绝对定位精度",
      C: "机械精度高于控制精度",
      D: "控制精度高于分辨率精度"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 380,
    type: "single_choice",
    question: "对于有规律的轨迹，仅示教几个特征点，就能利用（）获得中间点的坐标。",
    options: {
      A: "优化算法",
      B: "平滑算法",
      C: "预测算法",
      D: "插补算法"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 381,
    type: "single_choice",
    question: "下列属于不使用MOVL的优点是（）。",
    options: {
      A: "减少磨损",
      B: "运动过程慢、稳定",
      C: "运动路径更精确",
      D: "程序简洁明了"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 382,
    type: "single_choice",
    question: "遇到下列情况后不需要进行校零的是（）。",
    options: {
      A: "码盘电池亏电或码盘供电线路有过断开时，驱动器因为码盘圈数丢失报警",
      B: "拆装更换电机、减速机、机械传动部件后",
      C: "机器人的机械部分因为撞击导致脉冲记数不能指示轴的角度",
      D: "机器人操作过程中碰到极限位报警后"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 383,
    type: "single_choice",
    question: "若不进行零点标定，不会出现的状况是（）。",
    options: {
      A: "不能沿编程设定的点运行",
      B: "不能在坐标系中移动。",
      C: "不能对机器人进行编程",
      D: "软件限位开关关闭"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 384,
    type: "single_choice",
    question: "下列方法中，对恒锐机器人零位标定方法错误的是（）。",
    options: {
      A: "输入各轴出厂关节值",
      B: "使用水平仪",
      C: "使用EMD",
      D: "使用预零点标定位置"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 385,
    type: "single_choice",
    question: "在零点标定过程中，不会出现的现象是（）。",
    options: {
      A: "回零完成",
      B: "回零失败",
      C: "因带有负载而导致零点标定失败",
      D: "急停未复位"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 386,
    type: "single_choice",
    question: "下列关于使用已有路点正确的是（）。",
    options: {
      A: "已有路点必须为目标点额外示教一个辅助点机器人才能完成动作",
      B: "机器人会逼近目标点但不重合",
      C: "使用之前的路点，机器人最大速度被限制",
      D: "准确移动到已有路点"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 387,
    type: "single_choice",
    question: "所谓无姿态插补，即保持第一个示教点时的姿态，在大多数情况下机器人沿（）运动时出现。",
    options: {
      A: "平面圆弧",
      B: "直线",
      C: "平面曲线",
      D: "空间曲线"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 388,
    type: "single_choice",
    question: "为了获得非常稳定的加工过程，希望作业启动（位置为零）时：（）",
    options: {
      A: "速度为零，加速度为零",
      B: "速度为零，加速度恒定",
      C: "速度恒定，加速度为零",
      D: "速度恒定，加速度恒定"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 389,
    type: "single_choice",
    question: "下列关于DH参数设定说法正确的是（）。",
    options: {
      A: "转动关节而言，关节变量是参数中的关节角",
      B: "转动关节而言，关节变量是参数中的连杆扭转角",
      C: "移动关节而言，关节变量是连杆扭转角",
      D: "移动关节而言，关节变量是连杆长度"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 390,
    type: "single_choice",
    question: "机器人的速度特征可以在（）进行设置。",
    options: {
      A: "属性",
      B: "几何属性",
      C: "设置机器人",
      D: "运动参数设置"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 391,
    type: "single_choice",
    question: "机器人的加速度特征可以在（）进行设置。",
    options: {
      A: "属性",
      B: "几何属性",
      C: "设置机器人",
      D: "运动参数设置"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 392,
    type: "single_choice",
    question: "下列关于工作空间的选项错误的是（）。",
    options: {
      A: "可以设置不显示工作空间",
      B: "可以直接修改工作空间",
      C: "可以显示当前工具的工作空间",
      D: "可以显示机器人法兰的工作空间"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 393,
    type: "single_choice",
    question: "下列关于坐标系的选项错误的是（）。",
    options: {
      A: "创建点轨迹的实质是在空间中创建坐标系",
      B: "在同步建模环境下可以用三维球移动坐标系",
      C: "基座标系的位置无法修改",
      D: "可以在工作站环境下显示相应坐标系"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 394,
    type: "single_choice",
    question: "在仿真软件中轨迹逼近的模式是（）。",
    options: {
      A: "定位到点",
      B: "定位到线",
      C: "定位到面",
      D: "无法定位"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 395,
    type: "single_choice",
    question: "以下不属于轨迹编辑方式的是（）。",
    options: {
      A: "z轴固定",
      B: "轨迹优化",
      C: "生成出入刀点",
      D: "轨迹模拟"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 396,
    type: "single_choice",
    question: "对工具右键TCP设置的目的是（）。",
    options: {
      A: "工具添加TCP点",
      B: "使虚拟环境与现实环境的安装位置保持一致",
      C: "修改已经设置的TCP",
      D: "方便夹取或者示教"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 397,
    type: "single_choice",
    question: "下列关于工件校准说法不正确的是（）。",
    options: {
      A: "为了让真实环境和虚拟环境保持一致",
      B: "一般采用三点校准法",
      C: "现实中指定的点应该与虚拟环境中一致",
      D: "虚拟环境中的点无法直接测出点位坐标信息"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 398,
    type: "single_choice",
    question: "关于Home点说法正确的是（）。",
    options: {
      A: "机器人运动状态时的点",
      B: "点的位置固定",
      C: "一个机器人只能有一个Home点",
      D: "由用户选择，一般选取距离工件较远的位置点。"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 399,
    type: "single_choice",
    question: "下列关于Z轴固定说法不正确的是（）。",
    options: {
      A: "用于轨迹优化",
      B: "选择后在此点之后的点位姿保持一致",
      C: "设置后关节可以任意旋转",
      D: "运行轨迹中没有出现轴超限可以不使用"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 400,
    type: "single_choice",
    question: "下列关于机器人轴的运动控制叙述正确的是（）。",
    options: {
      A: "各轴均有正负两个方向可供旋转",
      B: "各轴可通过XYZ单独控制",
      C: "只要一按移动键或者3D鼠标就可动作",
      D: "只有T1运动模式下才能手动移动"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 401,
    type: "single_choice",
    question: "下列选择中，仅供用户组“厂家”使用的是（）。",
    options: {
      A: "零位补偿",
      B: "固定的IP地址",
      C: "MSTEP",
      D: "ISTEPA"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 402,
    type: "single_choice",
    question: "仿真软件中，恒锐机器人创建基坐标最简便的方法为（）。",
    options: {
      A: "三点法",
      B: "四点法",
      C: "间接法",
      D: "数字输入"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 403,
    type: "single_choice",
    question: "下列不会影响机器人本体精度的因素是（）。",
    options: {
      A: "杆长",
      B: "装配误差",
      C: "质量",
      D: "减速器精度"
    },
    answer: "A",
    category: "仿真应用"
  },
  {
    id: 404,
    type: "single_choice",
    question: "下列工作空间模式中，属于工作空间监控关闭的是（）。",
    options: {
      A: "#INSIDE",
      B: "#OFF",
      C: "#OUTSIDE",
      D: "#INSIDE_STOP"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 405,
    type: "single_choice",
    question: "当仿真模拟完成需要生成后置代码，下列操作正确的是（）。",
    options: {
      A: "直接到程序编辑窗口进行调试",
      B: "先将仿真与程序相同步",
      C: "直接导出上实际机器人查看",
      D: "以上操作都不正确"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 406,
    type: "single_choice",
    question: "在仿真运行无误时，离线程序（）直接导出到存储设备，并下载到真实的机器人中运行。",
    options: {
      A: "小范围修改",
      B: "无需修改",
      C: "小范围修改甚至无需修改",
      D: "不可以"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 407,
    type: "single_choice",
    question: "该软件支持机器人系统布局设计和动作模拟仿真，以及一系列的检测与分析，以下叙述错的是（）。",
    options: {
      A: "可进行机器人干涉性、可达性的分析",
      B: "可进行系统的节拍估算",
      C: "可进行自动生成机器人的离线程序",
      D: "可进行系统安全性的评估"
    },
    answer: "D",
    category: "仿真应用"
  },
  {
    id: 408,
    type: "single_choice",
    question: "下列关于重复精度叙述最为准确的是（）。",
    options: {
      A: "重复进度与精度一样重要",
      B: "重复精度是指重复多次所测得的精度",
      C: "重复精度是一个随机误差的范围",
      D: "重复精度不能避免因此无法校正"
    },
    answer: "C",
    category: "仿真应用"
  },
  {
    id: 409,
    type: "single_choice",
    question: "机器人的主要性能指标包括（）。",
    options: {
      A: "位姿准确度和重复性",
      B: "距离准确度和重复性",
      C: "位置稳定时间和超调量",
      D: "以上都是"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 410,
    type: "single_choice",
    question: "下列不属于恒锐机器人存储位置的是（）。",
    options: {
      A: "USB(KCP)",
      B: "USB(控制柜)",
      C: "网络",
      D: "USB（LOG）"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 411,
    type: "single_choice",
    question: "通常情况下，机器人使用下列哪种启动方式启动（）。",
    options: {
      A: "冷启动",
      B: "休眠",
      C: "强制冷启动",
      D: "重新启动控制系统PC"
    },
    answer: "A",
    category: "编程操作"
  },
  {
    id: 412,
    type: "single_choice",
    question: "下列关于机器人奇点位置叙述错误但是（）。",
    options: {
      A: "6个自由度的机器人具有3个不同的奇点位置",
      B: "奇点只存在于轨迹运动范围内，而在轴运动时不存在",
      C: "手轴奇点是指轴A5与A6彼此平行所造成的奇点",
      D: "当机器人以标准方式到达手轴奇点时可以使用手动PTP调整"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 413,
    type: "single_choice",
    question: "下列不属于使用子程序技术进行工作的原因是（）。",
    options: {
      A: "可以多次被调用",
      B: "可以避免程序的重复编写",
      C: "使程序结构化",
      D: "机器人动作更便捷"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 414,
    type: "single_choice",
    question: "下列关于机器人的叙述正确的是（）。",
    options: {
      A: "只要能实现所需功能，可不考虑机器人安全空间",
      B: "机器人可以代替工人进行任何工作",
      C: "使用机器人进行工作可以提高产品质量和生产效率",
      D: "以上说法均为错误"
    },
    answer: "C",
    category: "工艺应用"
  },
  {
    id: 415,
    type: "single_choice",
    question: "在软件中进行程序的仿真运行相对于（），观察结果是否符合预期和检测程序的可行性。",
    options: {
      A: "仿真场景的测试",
      B: "真实机器人运行程序",
      C: "仿真场景得到的结果",
      D: "仿真场景的虚拟运行"
    },
    answer: "B",
    category: "仿真应用"
  },
  {
    id: 416,
    type: "single_choice",
    question: "我们将人们在进行职业活动的过程中，一切符合职业要求的心理意识、行为准则和行为规范的总和称之为（）。",
    options: {
      A: "职业道德",
      B: "职业技能",
      C: "职业行为",
      D: "职业意识"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 417,
    type: "single_choice",
    question: "( )是职业人最为重要的职业素质之一，是从业人员在生产活动中必须遵循的行为准则。",
    options: {
      A: "岗位道德素养",
      B: "岗位担当素养",
      C: "岗位复位素养",
      D: "岗位安全素养"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 418,
    type: "single_choice",
    question: "以下（）有伤害人身安全隐患的存在。",
    options: {
      A: "测试机器人负载时，远离机器人工作范围并确认周围无其他人员",
      B: "有人员在作业范围内使用高速模式验证程序和干涉区",
      C: "降低机器人速度",
      D: "在安全门以外"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 419,
    type: "single_choice",
    question: "必须在（）的情况下进行调试。",
    options: {
      A: "认识程序模板",
      B: "小心翼翼",
      C: "没要求",
      D: "了解工作流程及工艺流程"
    },
    answer: "D",
    category: "编程操作"
  },
  {
    id: 420,
    type: "single_choice",
    question: "在非项目机器人标准/工艺要求过渡点（）。",
    options: {
      A: "任何动作指令都可以",
      B: "只能用直线指令",
      C: "禁止用直线指令",
      D: "没要求"
    },
    answer: "C",
    category: "编程操作"
  },
  {
    id: 421,
    type: "single_choice",
    question: "在出现盲区时，需要怎么做（）。",
    options: {
      A: "走单步运行程序",
      B: "相信之前同事做的很好",
      C: "凭感觉慢慢运行程序",
      D: "及时向上级申请增加人员进行协同作业"
    },
    answer: "D",
    category: "安全规范"
  },
  {
    id: 422,
    type: "single_choice",
    question: "首次联动或手动运行速度必须从（）%以下开始。",
    options: {
      A: "10",
      B: "15",
      C: "20",
      D: "25"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 423,
    type: "single_choice",
    question: "在自动联调是禁止手离开急停按钮，特殊情况下（）。",
    options: {
      A: "眼睛注意观察",
      B: "必须一步内触碰急停按钮",
      C: "注意观察程序",
      D: "没要求"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 424,
    type: "single_choice",
    question: "若机器人运行中发生碰撞，以下措施不正确的是（）。",
    options: {
      A: "若有快换夹具在机器人上，可通过示教器强制I/O信号，并用手接好卸下的快换",
      B: "确认周围安全的情况下，手动低速尝试关节动作",
      C: "尽最快的速度按下急停按钮",
      D: "在没有其他人员一起协助的情况下，直接按下控制柜抱闸释放按钮"
    },
    answer: "D",
    category: "安全规范"
  },
  {
    id: 425,
    type: "single_choice",
    question: "万一发生火灾，请使用对机器人进行灭火。",
    options: {
      A: "二氧化碳灭火器",
      B: "泡沫灭火器",
      C: "水",
      D: "拖把"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 426,
    type: "single_choice",
    question: "工业机器人工作站安全装置包括（）。",
    options: {
      A: "安全栅栏",
      B: "安全门",
      C: "安全插销和槽、",
      D: "以上都是"
    },
    answer: "D",
    category: "安全规范"
  },
  {
    id: 427,
    type: "single_choice",
    question: "为保障人身安全，在正常情况下，电气设备的安全电压规定为（）。",
    options: {
      A: "42V",
      B: "36V",
      C: "24V",
      D: "12V"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 428,
    type: "single_choice",
    question: "职业道德是指从事一定职业劳动的人们,在长期的职业活动中形成的（）。",
    options: {
      A: "行为规范",
      B: "操作程序",
      C: "劳动技能",
      D: "思维习惯"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 429,
    type: "single_choice",
    question: "职业道德是人们事业成功的（）。",
    options: {
      A: "重要保证",
      B: "最终结果",
      C: "决定条件",
      D: "显著标志"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 430,
    type: "single_choice",
    question: "职业道德与人们事业的关系是（）。",
    options: {
      A: "有职业道德的人一定能够获得事业成功",
      B: "没有职业道德的人不会获得成功",
      C: "事业成功的人往往具有较高的职业道德",
      D: "缺乏职业道德的人往往更容易获得成功"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 431,
    type: "single_choice",
    question: "下列说法中，不符合语言规范具体要求的是（）。",
    options: {
      A: "语感自然，不呆板",
      B: "用尊称，不用忌语",
      C: "语速适中，不快不慢",
      D: "多使用幽默语言，调节气氛"
    },
    answer: "D",
    category: "安全规范"
  },
  {
    id: 432,
    type: "single_choice",
    question: "对待职业和岗位，（）并不是爱岗敬业所要求的。",
    options: {
      A: "树立职业理想",
      B: "干一行爱一行专一行",
      C: "遵守企业的规章制度",
      D: "一职定终身，不改行"
    },
    answer: "D",
    category: "安全规范"
  },
  {
    id: 433,
    type: "single_choice",
    question: "下列选项中，关于职业道德与人们事业成功的关系的叙述中正确的是（）。",
    options: {
      A: "职业道德是人事业成功的重要条件",
      B: "职业道德水平高的人肯定能够取得事业的成功",
      C: "缺乏职业道德的人更容易获得事业的成功",
      D: "人的事业成功与否与职业道德无关"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 434,
    type: "single_choice",
    question: "职业道德就是人们在（）的职业活动中应遵循的行为规范的总和。",
    options: {
      A: "特定",
      B: "所有",
      C: "一般",
      D: "规定"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 435,
    type: "single_choice",
    question: "文明礼貌的职业道德规范要求员工做到（）。",
    options: {
      A: "忠于职守",
      B: "待人热情",
      C: "办事公道",
      D: "讲究卫生"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 436,
    type: "single_choice",
    question: "在职业交往活动中，符合仪表端庄具体要求的是（）。",
    options: {
      A: "着装华贵",
      B: "适当化妆或戴饰品",
      C: "饰品俏丽",
      D: "发型要突出个性"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 437,
    type: "single_choice",
    question: "职业纪律是企业的行为规范，职业纪律具有（）的特点。",
    options: {
      A: "明确的规定性",
      B: "高度的强制性",
      C: "通用性",
      D: "自愿性"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 438,
    type: "single_choice",
    question: "职业道德是一种（）的约束机制。",
    options: {
      A: "强制性",
      B: "非强制性",
      C: "随意性",
      D: "自发性"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 439,
    type: "single_choice",
    question: "对职业生涯发展具有决定性作用（）。",
    options: {
      A: "职业生涯规划",
      B: "职业素养",
      C: "职业技能",
      D: "身体状况"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 440,
    type: "single_choice",
    question: "( )是指个人对职业的看法和想法，他是职业生活的最初动力。",
    options: {
      A: "职业意识",
      B: "岗位评估",
      C: "职业生涯规划",
      D: "自我评价"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 441,
    type: "single_choice",
    question: "机器人设备事故的预防，错误的做法是（）",
    options: {
      A: "机器人设备布线使用专用电线和安装熔断器",
      B: "使用和示教机器人时人不得离开",
      C: "机器人设备示教器乱扔，电线乱拉",
      D: "对规定使用接地的机器人控制柜做好接地保护"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 442,
    type: "single_choice",
    question: "( )是一种良好的职业精神和职业修养，是一种软实力。",
    options: {
      A: "职业技能",
      B: "职业素养",
      C: "职业计划",
      D: "以上选项都不正确"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 443,
    type: "single_choice",
    question: "职业纪律是从事这一职业的员工应该共同遵守的行为准则，它包括的内容有(）。",
    options: {
      A: "交往规则",
      B: "操作程序",
      C: "群众观念",
      D: "外事纪律"
    },
    answer: "D",
    category: "安全规范"
  },
  {
    id: 444,
    type: "single_choice",
    question: "下列选项中属于职业道德作用的是（）。",
    options: {
      A: "增强企业的凝聚力",
      B: "增强企业的离心力",
      C: "决定企业的经济效益",
      D: "增强企业员工的独立性"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 445,
    type: "single_choice",
    question: "机械暗安装维护是机器人设备调试之一，在其过程中，机械设备、工具或工件的非正常选择和使用、人的违章作业等都可能导致机械伤害。下列伤害类型中，不属于机械伤害的是（）。",
    options: {
      A: "锤子击伤",
      B: "高空坠落",
      C: "机械手打伤",
      D: "夹具打崩伤人"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 446,
    type: "single_choice",
    question: "被电击的人能否获救，关键在于（）。",
    options: {
      A: "触电的方式",
      B: "人体电阻大小",
      C: "触电电压高低",
      D: "能否尽快脱离电源和施行紧急救护"
    },
    answer: "D",
    category: "安全规范"
  },
  {
    id: 447,
    type: "single_choice",
    question: "下列关于职业素养的叙述，不正确的一项是（）",
    options: {
      A: "职业素养是一个人在职业过程中表现出来的综合品质",
      B: "职业素养主要是由先天素养决定的，与后天努力关系不大",
      C: "资质、知识、行为和技能是显性职业素养，人力资源管理中比较重视。",
      D: "职业道德、职业意识、职业态度隐形职业素养更深刻影响着员工发展"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 448,
    type: "single_choice",
    question: "下列关于职业生涯规划的叙述，不正确的是（）",
    options: {
      A: "职业生涯规划就是一个人有意识地计划个人工作的全过程",
      B: "正确合理的职业生涯规划是事业取得成功的关键因素",
      C: "不管在什么情况下都要坚定不移地按照规划执行",
      D: "制定职业生涯规划，有利于认识特质，发掘潜力，实现长远发展"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 449,
    type: "single_choice",
    question: "（）是个人根据自己的意愿在众多的职业中做出最终选择的过程。",
    options: {
      A: "职业意识",
      B: "职业抉择",
      C: "职业生涯规划",
      D: "素质准备"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 450,
    type: "single_choice",
    question: "（）是职场的主要规则，也是职场运行的核心动力。",
    options: {
      A: "职业意识",
      B: "职业抉择",
      C: "职业生涯规划",
      D: "竞争"
    },
    answer: "D",
    category: "安全规范"
  },
  {
    id: 451,
    type: "single_choice",
    question: "在职业分析中，（）可以作为基础准则。",
    options: {
      A: "职业测验",
      B: "职业评估",
      C: "职业调查",
      D: "以上都不正确"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 452,
    type: "single_choice",
    question: "在炽热高温场所从事机器人设备安装调试或检修工作时，应（）。",
    options: {
      A: "戴工作帽穿防辐射服",
      B: "有通风降温等措施",
      C: "戴护目眼镜",
      D: "穿防辐射服"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 453,
    type: "single_choice",
    question: "利用二氧化碳灭火器灭火时在注意安全，根据灭火器使用知识，当空气中二氧化碳浓度达到 10% 时，会使人（）",
    options: {
      A: "中毒",
      B: "窒息",
      C: "头晕",
      D: "呼吸困难"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 454,
    type: "single_choice",
    question: "触电者无呼吸和心跳时，首先是通畅气道，然后进行（）抢救。",
    options: {
      A: "口对口（鼻）人工呼吸法",
      B: "胸外心脏按压法",
      C: "胸外心脏按压法和口对口（鼻）人工呼吸法",
      D: "注射强心针法"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 455,
    type: "single_choice",
    question: "发生人身触电时会同时发生二次伤害的地方应选择动作电流小于（）毫安，动作时间不大于0.1秒的漏电开关。",
    options: {
      A: "50",
      B: "30",
      C: "15",
      D: "6"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 456,
    type: "single_choice",
    question: "机器人工作站中电气设备起火时应使用什么类型的灭火器（）。",
    options: {
      A: "二氧化碳",
      B: "水",
      C: "泡沫",
      D: "以上都对"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 457,
    type: "single_choice",
    question: "以下说法错误的是（）。",
    options: {
      A: "熔断（保险）丝熔断后。可以使用其它金属丝代替熔断（保险）丝。",
      B: "发现用电设备因电器故障或漏电起火时，要立即切断电源，在未切断电源前，禁止使用水或酸、碱灭火器灭火。",
      C: "对用电设备送电或断电完毕后，要及时关好配电箱的箱门。",
      D: "电线损坏或断线落地时，不要靠近，应及时停电，找电工处理"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 458,
    type: "single_choice",
    question: "人电击后危及生命的电流称为（）",
    options: {
      A: "感知电流",
      B: "持续电流",
      C: "致命电流",
      D: "摆脱电流"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 459,
    type: "single_choice",
    question: "机器人设备事故的预防，错误的做法是（）",
    options: {
      A: "机器人设备布线使用专用电线和安装熔断器",
      B: "使用和示教机器人时人不得离开",
      C: "机器人设备示教器乱扔，电线乱拉",
      D: "对规定使用接地的机器人控制柜做好接地保护"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 460,
    type: "single_choice",
    question: "机械暗安装维护是机器人设备调试之一，在其过程中，机械设备、工具或工件的非正常选择和使用、人的违章作业等都可能导致机械伤害。下列伤害类型中，不属于机械伤害的是（）。",
    options: {
      A: "锤子击伤",
      B: "高空坠落",
      C: "机械手打伤",
      D: "夹具打崩伤人"
    },
    answer: "B",
    category: "安全规范"
  },
   {
    id: 461,
    type: "true_false",
    question: "恒锐机器人外部自动运行时可以进行信号的设置与修改。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 462,
    type: "true_false",
    question: "机器人设置中包含比例参数，运动参数，驱动参数，模型参数。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 463,
    type: "true_false",
    question: "恒锐机器人IO配置的输出可以编制26个数字输出口。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 464,
    type: "true_false",
    question: "机器人运动参数数据可随意更改。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 465,
    type: "true_false",
    question: "在运动参数“轴最大速度/加速度/冲击限制”数值的基础上，再乘上的比例参数中的系数，作为当前机器人最大性能限制。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 466,
    type: "true_false",
    question: "模型参数即使机器人DH参数。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 467,
    type: "true_false",
    question: "示教器蜂鸣器在模型界面中开关。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 468,
    type: "true_false",
    question: "示教器语言在高级设置中切换。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 469,
    type: "true_false",
    question: "示教器语言切换后需重启示教器。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 470,
    type: "true_false",
    question: "示教器登录界面中控制器输入本地IP地址可控制本机。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 471,
    type: "true_false",
    question: "恒锐机器人自动运行时运动控制 X + 可以移动机器人。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 472,
    type: "true_false",
    question: "恒锐机器人主要使用3D鼠标移动机器人。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 473,
    type: "true_false",
    question: "示教器登录界面中控制器控制本机IP地址为127.0.0.1。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 474,
    type: "true_false",
    question: "机器人联网后，示教器登录界面中输入本体IP号可远程控制机器人。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 475,
    type: "true_false",
    question: "Windows版本示教器登录端口号为8080。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 476,
    type: "true_false",
    question: "平板及本体示教器登录端口号为1234。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 477,
    type: "true_false",
    question: "在设置界面高级设置中修改屏幕亮度。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 478,
    type: "true_false",
    question: "恒锐机器人自带焊接工艺包。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 479,
    type: "true_false",
    question: "远程模式下用停止键可暂停正运行中的程序。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 480,
    type: "true_false",
    question: "触摸屏幕可以识别需要通过键盘输入的情况并自动显示键盘。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 481,
    type: "true_false",
    question: "在设置界面高级设置中校准屏幕。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 482,
    type: "true_false",
    question: "工业机器人的控制系统可分为两大部分：一部分是对其自身运动的控制；另一部分是工业机器人与周边设备的协调控制。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 483,
    type: "true_false",
    question: "工业机器人的手我们一般称为末端操作器。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 484,
    type: "true_false",
    question: "使用外部设备专用末端操作器时，必须标定对应工具坐标系才能使用。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 485,
    type: "true_false",
    question: "使用外部设备专用末端操作器时，标定工具坐标系可使示教操作更加方便。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 486,
    type: "true_false",
    question: "设备启动时应该将气路调节到最大，方便调试使用。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 487,
    type: "true_false",
    question: "当取出或放置伺服电机时，不可只拉着线材拖曳电机或只握住旋转轴芯。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 488,
    type: "true_false",
    question: "EMC等级会因为安装结构或配线方式而有差异。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 489,
    type: "true_false",
    question: "在使用外部设备时需配置对应的系统参数。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 490,
    type: "true_false",
    question: "在通用机器人上安装焊枪就成为一台焊接机器人，安装拧螺母机则成为一台装配机器人。",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 491,
    type: "true_false",
    question: "弹性力手爪的特点是其夹持物体的抓力是由弹性元件提供的，不需要专门的驱动装置，在抓取物体时需要一定的拉力，而在卸料时，则需要一定的压力。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 492,
    type: "true_false",
    question: "承载能力是指机器人在工作范围内的特定位姿上所能承受的最大质量。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 493,
    type: "true_false",
    question: "用传感器采集环境信息是机器人智能化的第一步。",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 494,
    type: "true_false",
    question: "发生STO异警时，客户端可依据回授监控信号反馈的接脚状态来判断当下的异警为何。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 495,
    type: "true_false",
    question: "按下伺服驱动器的MODE键可以切换监视模式、参数模式及自动模式。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 496,
    type: "true_false",
    question: "灵活性低的工业机器人，其外围设备较为复杂。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 497,
    type: "true_false",
    question: "工业机器人的规格和外围设备的规格都是随着自动化规模的变化而变化的。",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 498,
    type: "true_false",
    question: "规模大、完全无人化的机械生产方案是最合理的方案。",
    answer: "false",
    category: "工艺应用"
  },
  {
    id: 499,
    type: "true_false",
    question: "焊接引入工业机器人以后，一切工作都是自动进行的。",
    answer: "false",
    category: "工艺应用"
  },
  {
    id: 500,
    type: "true_false",
    question: "在用机器人进行弧焊作业中夹具应回避与焊枪的干涉。",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 501,
    type: "true_false",
    question: "按下伺服驱动器的SHIFT键可以在参数模式下改变群组码。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 502,
    type: "true_false",
    question: "行走轴的原点位置说固定不变的。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 503,
    type: "true_false",
    question: "视觉系统需要我们手动进行物体的拍照进行识别。",
    answer: "false",
    category: "工艺应用"
  },
  {
    id: 504,
    type: "true_false",
    question: "在用机器人进行弧焊作业中夹具应考虑工件的固定与自动化。",
    answer: "false",
    category: "工艺应用"
  },
  {
    id: 505,
    type: "true_false",
    question: "NOT运算符用于肯定，即使值逆反（由“真\"变为\"假\"）。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 506,
    type: "true_false",
    question: "WAITDI指令可将指定的数字输入口状态置ON/OFF。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 507,
    type: "true_false",
    question: "一个具有逻辑运算符的函数始终以一个真值为结果。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 508,
    type: "true_false",
    question: "DOUT指令可将指定的数字输出口状态置ON/OFF。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 509,
    type: "true_false",
    question: "AOUT指令可将指定的模拟输出在0-10范围内。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 510,
    type: "true_false",
    question: "WAITDI DI1 ON指令语句是指程序等待DI输入口ON后运行之后的程序，否则一直等待。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 511,
    type: "true_false",
    question: "过程指令中包括有循环指令，条件循环指令，条件判断指令，输入输出指令，函数指令，延时指令以及注释。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 512,
    type: "true_false",
    question: "计算指令可随意计算变量。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 513,
    type: "true_false",
    question: "计算指令只可对相同类型变量进行计算。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 514,
    type: "true_false",
    question: "恒锐机器人中MOVLR可以进行MOVLR的偏移。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 515,
    type: "true_false",
    question: "WHILE DI1=ON指令语句是指满足数字输入DI1的状态为ON则无限循环WHILE...ENDWHILE之间的程序，不满足则跳过不执行。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 516,
    type: "true_false",
    question: "恒锐机器人中主函数可以调用多个子函数。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 517,
    type: "true_false",
    question: "机器人与外部设备通讯方式可以是I/O通讯。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 518,
    type: "true_false",
    question: "设备控制系统中PLC选用的型号为S7-1215。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 519,
    type: "true_false",
    question: "机器人与外部设备通讯方式可以是以太网通讯。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 520,
    type: "true_false",
    question: "机器人与外部设备通讯方式可以是RS485通讯。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 521,
    type: "true_false",
    question: "视觉模块亮度可以调节模块上的光源旋钮。",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 522,
    type: "true_false",
    question: "视觉检测单元由工业视觉系统、视觉光源、称重模块、固定底板等组成。",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 523,
    type: "true_false",
    question: "机器人通过工业总线和以太网通信控制读写头对RFID芯片进行信息的读取和写入。",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 524,
    type: "true_false",
    question: "RFID模块的读写头检测载码体的距离为 1mm",
    answer: "false",
    category: "工艺应用"
  },
  {
    id: 525,
    type: "true_false",
    question: "RFID模块的读写头检测载码体的距离为 2~5m",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 526,
    type: "true_false",
    question: "S7- 12001214C的模拟量物理地址为IW32。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 527,
    type: "true_false",
    question: "设备运行前当仓储模块有物料时则无法复位。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 528,
    type: "true_false",
    question: "S7- 12001214C的模拟量物理地址为IW64。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 529,
    type: "true_false",
    question: "在S7- 12001214C的PLC中支持的模拟量信号仅有电压信号。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 530,
    type: "true_false",
    question: "人机界面按钮可以用M辅助继电器来控制。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 531,
    type: "true_false",
    question: "视觉模块的粗糙尺度参数设置的越小则可以得到的轮廓边缘点会减少。",
    answer: "false",
    category: "工艺应用"
  },
  {
    id: 532,
    type: "true_false",
    question: "工业机器人最早应用于汽车制造工业，常用于焊接、喷漆、上下料和搬运工作。",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 533,
    type: "true_false",
    question: "机器人的作业内容大致可以分为装卸、搬运作业和喷涂、焊接作业两种基本类型。",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 534,
    type: "true_false",
    question: "工业机器人码垛通常需要用到MOVL直线运动，计算和偏移指令。",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 535,
    type: "true_false",
    question: "恒锐机器人焊接开始指令是ArLStart。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 536,
    type: "true_false",
    question: "恒锐机器人焊接结束指令是ArLEnd。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 537,
    type: "true_false",
    question: "为了获得平稳的加工过程，希望程序启动（位置为零）时，速度为零。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 538,
    type: "true_false",
    question: "为了获得平稳的加工过程，希望程序启动（位置为零）时，速度恒定。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 539,
    type: "true_false",
    question: "为了获得平稳的加工过程，希望程序启动（位置为零）时，加速度为零。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 540,
    type: "true_false",
    question: "为了获得平稳的加工过程，希望程序启动（位置为零）时，加速度恒定。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 541,
    type: "true_false",
    question: "恒锐机器人雕刻主要由运动指令来完成。",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 542,
    type: "true_false",
    question: "循环语句配合计算指令可以使点位进行顺序偏移。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 543,
    type: "true_false",
    question: "柔顺性装配技术分两种：主动柔顺装配和被动柔顺装配。",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 544,
    type: "true_false",
    question: "机器人编程就是针对机器人为完成某项作业进行程序设计。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 545,
    type: "true_false",
    question: "当偏移不准时，我们可以使用修改语句调整变量中的数据。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 546,
    type: "true_false",
    question: "机器人装配工作站的设计编程时，不考虑承载能力。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 547,
    type: "true_false",
    question: "创建工作站应在装配体环境下。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 548,
    type: "true_false",
    question: "OfficeLite可以完成程序逻辑的调试，也可以完成机器人动作节拍的仿真。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 549,
    type: "true_false",
    question: "模型导入可以支持多种常用CAD格式。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 550,
    type: "true_false",
    question: "在仿真软件中模型无法修改透明度特征。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 551,
    type: "true_false",
    question: "在工作中的系统布局时需考虑机器人、周边设备及配套设施的安装、调试运行状况，避免出现不必要的碰撞/事故发生。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 552,
    type: "true_false",
    question: "工作站可以有多个机器人。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 553,
    type: "true_false",
    question: "自定义工具需要定义工具的TCP点。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 554,
    type: "true_false",
    question: "机器人系统布局时需考虑机器人型号、人机系统配置、操作箱、电器柜位置以及维护修理和安全设施配置等内容。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 555,
    type: "true_false",
    question: "可以修改模型的相关颜色特征。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 556,
    type: "true_false",
    question: "可以修改模型的相关透明度特征。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 557,
    type: "true_false",
    question: "如果用错误的负载数据或不适当的负载来运行机器人，则会导致有人员受伤、生命危险或严重财产损失等。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 558,
    type: "true_false",
    question: "自定义法兰工具可以定义多个FL点。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 559,
    type: "true_false",
    question: "自定义工具可以定义多个TCP点。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 560,
    type: "true_false",
    question: "使用机器人焊接可提高产品质量和生产效率。",
    answer: "true",
    category: "工艺应用"
  },
  {
    id: 561,
    type: "true_false",
    question: "在碰撞检测时量工具编程红色，表明已经发生了碰撞。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 562,
    type: "true_false",
    question: "不同工艺可以在一个工作站下完成。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 563,
    type: "true_false",
    question: "进行焊接操作前，操作人员需输入焊接程序并设定焊接条件才可进行自动焊接。",
    answer: "false",
    category: "工艺应用"
  },
  {
    id: 564,
    type: "true_false",
    question: "气爪、滑台等可以通过状态机来定义。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 565,
    type: "true_false",
    question: "保存工作时可以将保存的路径和文件名称使用中文字符保存。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 566,
    type: "true_false",
    question: "系统提供的机器人库中的参数可以进行修改。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 567,
    type: "true_false",
    question: "本地机器人库中的参数可以进行修改。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 568,
    type: "true_false",
    question: "机器人的后置类型可以在设定时选择。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 569,
    type: "true_false",
    question: "自定义的机器人在工作站中无法再次修改参数。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 570,
    type: "true_false",
    question: "在机器人系统变量标准数据类型共有5种，其中整型（INT）最为常用。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 571,
    type: "true_false",
    question: "LIN 指令可用于更改机器人位置数据。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 572,
    type: "true_false",
    question: "可以设定机器人的相关材质、颜色、透明度特征。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 573,
    type: "true_false",
    question: "创建工件空间坐标系时，可以采用三点法来创建。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 574,
    type: "true_false",
    question: "机器人的零点位置应该在定义机器人时设定完成。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 575,
    type: "true_false",
    question: "机器人的关节角无法通过控制面板拖动调整。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 576,
    type: "true_false",
    question: "机器人的Home点位置可以进行修改。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 577,
    type: "true_false",
    question: "机器人零位是机器人操作模型的初始位置。当零位不正确时，机器人不能正确运动。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 578,
    type: "true_false",
    question: "当机器人以高于 200mm / s 的速度上行移动至一个终端止挡之后必需进行零点标定。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 579,
    type: "true_false",
    question: "机器人库中的DH参数可以编辑修改。",
    answer: "false",
    category: "设备维护"
  },
  {
    id: 580,
    type: "true_false",
    question: "根据三维球与控制面板可以知道空间中的位置是否可达。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 581,
    type: "true_false",
    question: "在进行仿真编程时，机器人的运行速度与真实示教器设置方法必须保持一致。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 582,
    type: "true_false",
    question: "任务执行时，使用离线编程可以减少机器人的工作时间，对下一个任务进行编程时，机器人仍可以不中断当前的工作。",
    answer: "false",
    category: "设计制造"
  },
  {
    id: 583,
    type: "true_false",
    question: "机器人的工作空间与机器人的结构形式有关。",
    answer: "true",
    category: "设备维护"
  },
  {
    id: 584,
    type: "true_false",
    question: "在仿真运行无误时，离线程序可以小范围修改或者无需修改导出到真实机器人中运行。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 585,
    type: "true_false",
    question: "机器人是一种高速的运动设备，在其进行自动运行时绝对不允许人靠近机器人。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 586,
    type: "true_false",
    question: "恒锐机器人共有5个用户组，分别为操作员、用户、专家、安全维护人员、管理员。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 587,
    type: "true_false",
    question: "机器人后置类型与机器人的型号相关。",
    answer: "true",
    category: "设计制造"
  },
  {
    id: 588,
    type: "true_false",
    question: "总控箱应远离大功率、强电磁干扰的电器或环境，注意接地良好。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 589,
    type: "true_false",
    question: "机器人本体接线时，可以带电接线。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 590,
    type: "true_false",
    question: "操作机器人前必须确定周围无障碍物，保证安全情况下才可运行。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 591,
    type: "true_false",
    question: "机器人运行过程中，严禁操作者离开现场，以确保意外情况的及时处理。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 592,
    type: "true_false",
    question: "在控制柜内随便放置配件、工具、杂物、安全帽等对设备没有任何影响。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 593,
    type: "true_false",
    question: "遵守赛场纪律，无安全事故。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 594,
    type: "true_false",
    question: "工位保持清洁，物品随意摆放。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 595,
    type: "true_false",
    question: "着装规范整洁，佩戴安全帽。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 596,
    type: "true_false",
    question: "操作规范，爱护设备。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 597,
    type: "true_false",
    question: "职业道德不是从业人员职业资质评价的唯一指标。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 598,
    type: "true_false",
    question: "为了解救触电人员，可以不允许切断电源，事后立即向上级汇报。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 599,
    type: "true_false",
    question: "自我的发展只有自己能把握，做好自己的主人，不能屈服于名誉，更不能自卑。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 600,
    type: "true_false",
    question: "职业待遇就是薪酬待遇。是人们在从事相关的劳动活动后获得的合法收入。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 601,
    type: "true_false",
    question: "职场适应能力是一个人职业形象的外在表现形式，是内在素质的外化。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 602,
    type: "true_false",
    question: "考核过程中，不需要服从裁判安排。",
    answer: "false",
    category: "安全规范"
  }
];

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