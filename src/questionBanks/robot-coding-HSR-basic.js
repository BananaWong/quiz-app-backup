// questionBank.js - 华数机器人题库
export const questionBank = [
  {
    id: 1,
    type: "single_choice",
    question: "华数机器人最多有（）种操作模式。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "D",
    category: "基础知识与安全"
  },
  {
    id: 2,
    type: "single_choice",
    question: "华数机器人在（）进行操作模式的切换。",
    options: {
      A: "控制柜",
      B: "示教器",
      C: "本体",
      D: "控制柜或示教器"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 3,
    type: "single_choice",
    question: "正常联动生产时，华数机器人示教器上模式应该打到（）位置上。",
    options: {
      A: "自动模式",
      B: "T1模式",
      C: "T2模式",
      D: "外部模式"
    },
    answer: "D",
    category: "基础知识与安全"
  },
  {
    id: 4,
    type: "single_choice",
    question: "华数机器人在（）模式下，使能器无效。",
    options: {
      A: "自动模式",
      B: "T1模式",
      C: "T2模式",
      D: "以上都是"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 5,
    type: "single_choice",
    question: "华数机器人的操作模式有（）。",
    options: {
      A: "自动模式",
      B: "T1模式",
      C: "T2模式",
      D: "以上都是"
    },
    answer: "D",
    category: "基础知识与安全"
  },
  {
    id: 6,
    type: "single_choice",
    question: "T2模式应仅用于所有人员都处于安全保护空间之外时，而且操作人员（），熟知潜在的危险。",
    options: {
      A: "经过特殊训练",
      B: "没经过特殊训练",
      C: "不熟练操作",
      D: "熟悉操作"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 7,
    type: "single_choice",
    question: "示教器提供左侧（）个辅助按键，用于用户自定义按键操作，可配置按键按下后输出的指令。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "C",
    category: "系统配置与操作"
  },
  {
    id: 8,
    type: "single_choice",
    question: "华数机器人的运行模式有四种，其中属于手动高速模式的是（）。",
    options: {
      A: "自动模式",
      B: "外部模式",
      C: "T1模式",
      D: "T2模式"
    },
    answer: "D",
    category: "基础知识与安全"
  },
  {
    id: 9,
    type: "single_choice",
    question: "当我们想要切换机器人运行模式时，我们可以通过（）进行设置。",
    options: {
      A: "辅助按钮",
      B: "主菜单按键",
      C: "钥匙开关",
      D: "急停按键"
    },
    answer: "C",
    category: "系统配置与操作"
  },
  {
    id: 10,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时，以（）。",
    options: {
      A: "程序给定的速度运行",
      B: "示教最高速度来限制运行",
      C: "示教最低速度来运行",
      D: "示教中等速度来运行"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 11,
    type: "single_choice",
    question: "为了确保安全，用示教编程器手动运行机器人时，机器人的最高速度限制为（）。",
    options: {
      A: "50mm/s",
      B: "250mm/s",
      C: "800mm/s",
      D: "1600mm/s"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 12,
    type: "single_choice",
    question: "为了获得非常平稳的加工过程，希望作业启动（位置为零）时（）。",
    options: {
      A: "速度为零，加速度为零",
      B: "速度为零，加速度恒定",
      C: "速度恒定，加速度为零",
      D: "速度恒定，加速度恒定"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 13,
    type: "single_choice",
    question: "机器人的（）是指单关节速度。",
    options: {
      A: "工作速度",
      B: "最大运动速度",
      C: "运动速度",
      D: "最小运动速度"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 14,
    type: "single_choice",
    question: "工业机器人单轴额定速度测试方法，是在额定负载下，使被测（）进入稳定工作状态。",
    options: {
      A: "关节",
      B: "范围",
      C: "方向",
      D: "手臂"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 15,
    type: "single_choice",
    question: "华数机器人的编程语句LP1VEL  $= 30$  ；编程语句中30的单位是（）。",
    options: {
      A: "mm/s",
      B: "cm/s",
      C: "m/s",
      D: "°/s"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 16,
    type: "single_choice",
    question: "以下哪点不是示教盒示教的缺点：（）。",
    options: {
      A: "难以获得高控制精度",
      B: "难以获得高速度",
      C: "难以与其他设备同步",
      D: "不易与传感器信息相配合"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 17,
    type: "single_choice",
    question: "华数机器人网络连接状态不包括（）。",
    options: {
      A: "红色",
      B: "黄色",
      C: "绿色",
      D: "蓝色"
    },
    answer: "D",
    category: "系统配置与操作"
  },
  {
    id: 18,
    type: "single_choice",
    question: "增量是手动运行模式，可以使机器人移动所定义的距离应用范围不包括（）。",
    options: {
      A: "以同等距离进行点的定位",
      B: "从一个位置移出所定义的距离",
      C: "使用测量表调整",
      D: "持续的"
    },
    answer: "D",
    category: "系统配置与操作"
  },
  {
    id: 19,
    type: "single_choice",
    question: "华数机器人报警语言界面在（）菜单中。",
    options: {
      A: "系统",
      B: "投入运行",
      C: "帮助",
      D: "配置"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 20,
    type: "single_choice",
    question: "华数机器人报警语言在系统的（）中进行设置。",
    options: {
      A: "报警语言",
      B: "关闭系统",
      C: "清理系统",
      D: "系统升级"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 21,
    type: "single_choice",
    question: "华数机器人用户登录在（）菜单中设置。",
    options: {
      A: "系统",
      B: "投入运行",
      C: "帮助",
      D: "配置"
    },
    answer: "D",
    category: "系统配置与操作"
  },
  {
    id: 22,
    type: "single_choice",
    question: "华数机器人需要用户权限的是（）。",
    options: {
      A: "校准",
      B: "工具坐标系标定",
      C: "工件坐标系标定",
      D: "限位修改"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 23,
    type: "single_choice",
    question: "机器人经常使用的程序可以设置为主程序，每台机器人可以设置（）主程序。",
    options: {
      A: "3个",
      B: "5个",
      C: "1个",
      D: "无限制"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 24,
    type: "single_choice",
    question: "华数机器人权限管理不包括（）。",
    options: {
      A: "Normal用户",
      B: "Super用户",
      C: "Debug用户",
      D: "Admin用户"
    },
    answer: "D",
    category: "系统配置与操作"
  },
  {
    id: 25,
    type: "single_choice",
    question: "使用示教器按下使能按钮，点击进入开启状态，可以在（）中确认。",
    options: {
      A: "状态栏",
      B: "事件栏",
      C: "数据栏",
      D: "任务栏"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 26,
    type: "single_choice",
    question: "可以在（）查看机器人发生的报警信息。",
    options: {
      A: "事件日志",
      B: "系统信息",
      C: "控制面板",
      D: "FlexPendant资源管理器"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 27,
    type: "single_choice",
    question: "作业路径通常用（）坐标系相对于工件坐标系的运动来描述。",
    options: {
      A: "手爪",
      B: "固定",
      C: "运动",
      D: "工具"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 28,
    type: "single_choice",
    question: "华数机器人有四种坐标系可供选择，分别是世界坐标系、基坐标系、工具坐标系及（）。",
    options: {
      A: "工件坐标系",
      B: "圆柱坐标",
      C: "极坐标",
      D: "关节坐标"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 29,
    type: "single_choice",
    question: "（）位于机器人基座。它是最便于机器人从一个位置移动到另一个位置的坐标系。",
    options: {
      A: "基坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 30,
    type: "single_choice",
    question: "（）与工件相关，通常是最适于对机器人进行编程的坐标系。",
    options: {
      A: "基坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 31,
    type: "single_choice",
    question: "（）定义机器人到达预设目标时所使用工具的位置。",
    options: {
      A: "基坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 32,
    type: "single_choice",
    question: "（）是用来描述当前机器人第六轴末端工具位姿特性的坐标系。",
    options: {
      A: "极坐标",
      B: "关节坐标",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 33,
    type: "single_choice",
    question: "一个工作站中只有一个（）。",
    options: {
      A: "基坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 34,
    type: "single_choice",
    question: "当有多台机器人或者同一台机器人安装在工作站的不同位置就会需要多次定义（）。",
    options: {
      A: "基坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 35,
    type: "single_choice",
    question: "在机器人第六轴末端未加载任何工具时，默认状态下的初始机器人（）坐标系位于第六轴末端法兰的中心。",
    options: {
      A: "工具",
      B: "工件",
      C: "手部",
      D: "基座"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 36,
    type: "single_choice",
    question: "工具坐标系是以工具中心点作为零点，机器人的轨迹参照（）。",
    options: {
      A: "工件的中心点",
      B: "工具中心点",
      C: "基座的中心点",
      D: "外部轴的中心点"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 37,
    type: "single_choice",
    question: "为工业机器人当前所装工具建立（），将机器人的控制点转移到工具末端，方便手动操纵和编程调试。",
    options: {
      A: "基坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 38,
    type: "single_choice",
    question: "华数的TOOL是描述工业机器人第六轴上面（）的TCP点的数据。",
    options: {
      A: "基坐标",
      B: "世界坐标",
      C: "工具坐标",
      D: "工件坐标"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 39,
    type: "single_choice",
    question: "（）在机器人基座有相应的零点。",
    options: {
      A: "基坐标",
      B: "世界坐标",
      C: "工具坐标",
      D: "工件坐标"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 40,
    type: "single_choice",
    question: "两台机器人或多台机器人协作时，若有一台安装于地面，另一台或多台倒置于地面，可以标定一个共同（）。",
    options: {
      A: "基坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 41,
    type: "single_choice",
    question: "华数机器人系统自带的TCP坐标原点在第六轴的法栏盘中心，垂直方向为（）轴，符合右手法则。",
    options: {
      A: "X轴",
      B: "Y轴",
      C: "Z轴",
      D: "外部轴"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 42,
    type: "single_choice",
    question: "按机器人结构坐标系统特点可将机器人分为（）。  $①$  直角坐标机器人；  $(2)$  圆柱坐标机器人；  $(3)$  球面坐标机器人；  $(4)$  关节坐标机器人",
    options: {
      A: "$①②$",
      B: "①②③",
      C: "①②④",
      D: "①②③④"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 43,
    type: "single_choice",
    question: "下列哪项是指机器人执行末端在正常工作情况下所能承受的最大的负载能力（）。",
    options: {
      A: "承载能力",
      B: "运动范围",
      C: "到达距离",
      D: "重复定位精度"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 44,
    type: "single_choice",
    question: "控制点不变动作是指只改变工具姿态而不改变工具尖端点（控制点）位置的操作，下面（ ）不可以实现控制点不变动作。",
    options: {
      A: "关节坐标系",
      B: "直角坐标系",
      C: "工具坐标系",
      D: "用户坐标系"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 45,
    type: "single_choice",
    question: "工业机器人一般有四个坐标系，下列不属于机器人坐标系的是（）。",
    options: {
      A: "基坐标系",
      B: "关节坐标系",
      C: "工具坐标系",
      D: "外部坐标系"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 46,
    type: "single_choice",
    question: "出厂情况下机器人工具坐标系原点在哪儿（）。",
    options: {
      A: "机器人底座中心",
      B: "机器人外部某一个点",
      C: "机器人六轴关节处",
      D: "机器人六轴法兰盘中心"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 47,
    type: "single_choice",
    question: "以下坐标系属于笛卡尔坐标系的有（）。 $①$ 、工具坐标系  $②$ 、工件坐标系  $③$ 、世界坐标系  $④$ 、轴坐标系",
    options: {
      A: "①②③④",
      B: "①②③",
      C: "①④",
      D: "①③④"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 48,
    type: "single_choice",
    question: "以下坐标系可以由用户创建的是（）。 $①$ 、基坐标系  $②$ 、工件坐标系  $③$ 、工具坐标系  $④$ 、轴坐标系",
    options: {
      A: "①②③④",
      B: "②③",
      C: "①②③",
      D: "①③④"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 49,
    type: "single_choice",
    question: "工程上常采用（）或者（）来寻找工具对象末端TCP的位置。",
    options: {
      A: "四点法，六点法",
      B: "四点法，五点法",
      C: "五点法，六点法",
      D: "三点法，四点法"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 50,
    type: "single_choice",
    question: "外部夹具被更换，重新定义（）后，可以不更改程序，直接运行。",
    options: {
      A: "TOOL_FRAME",
      B: "BASE_FRAME",
      C: "tool0",
      D: "basecoord0"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 51,
    type: "single_choice",
    question: "华数机器人有个预定义的工具坐标（）(）是默认第六轴法兰的中心点。",
    options: {
      A: "Default,Default",
      B: "Default,tool",
      C: "tool1,Default",
      D: "Default,too2"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 52,
    type: "single_choice",
    question: "如果工业机器人夹具在外形较大的时候，应该创建新的（）。",
    options: {
      A: "基坐标数据",
      B: "世界坐标数据",
      C: "工件坐标数据",
      D: "工具坐标数据"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 53,
    type: "single_choice",
    question: "安装在机器人末端的（），原点及方向都是随着末端位置与角度不断变化的",
    options: {
      A: "基坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 54,
    type: "single_choice",
    question: "（）必须事先进行设定。客户可以根据工具的外形、尺寸等建立与工具相对应的（）。",
    options: {
      A: "基坐标，基坐标",
      B: "工具坐标，工具坐标",
      C: "工件坐标，工件坐标",
      D: "世界坐标，世界坐标"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 55,
    type: "single_choice",
    question: "工业机器人可以与多个夹具配合工作，在每个夹具上建立一个（）。",
    options: {
      A: "基坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 56,
    type: "single_choice",
    question: "机器人在示教操作时，末端点位信息都是基于（）进行记录和调整。",
    options: {
      A: "基坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 57,
    type: "single_choice",
    question: "工业机器人的工具坐标系是由（）与坐标方位组成。",
    options: {
      A: "工具中心点",
      B: "工件中心点",
      C: "工具坐标",
      D: "工件坐标"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 58,
    type: "single_choice",
    question: "当工业机器人安装新夹具后必须重新定义（），否则会影响机器人的稳定运\n行。",
    options: {
      A: "基坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 59,
    type: "single_choice",
    question: "TCP表示工业机器人手腕上工具的（），用来反映工具的坐标值。",
    options: {
      A: "中心点",
      B: "附加点",
      C: "上方点",
      D: "碰撞点"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 60,
    type: "single_choice",
    question: "工具坐标系将（）设为零点，由此定义工具的位置和方向。",
    options: {
      A: "工件中心点",
      B: "工具中心点",
      C: "工具坐标",
      D: "工件坐标"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 61,
    type: "single_choice",
    question: "更改工业机器人工具及（）后，工业机器人的移动将随之更改，以便新的TCP到达目标。",
    options: {
      A: "基坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "工件坐标系"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 62,
    type: "single_choice",
    question: "华数机器人在手腕处都有一个预定义工具坐标系，该坐标系被称为（）。",
    options: {
      A: "Default",
      B: "tool2",
      C: "TOOL_FRAME",
      D: "BASE_FRAME"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 63,
    type: "single_choice",
    question: "工具坐标标定最少采用（）个点标定，即可自动生成工具坐标系的参数。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 64,
    type: "single_choice",
    question: "4点法进行工具坐标系标定时采用4种不同的工具姿态，使机器人工具上的位置点尽可能与（）刚好接触。",
    options: {
      A: "选定的固定点",
      B: "选定的中心点",
      C: "选定的附加点",
      D: "选定的上方点"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 65,
    type: "single_choice",
    question: "华数机器人六点法标定工具坐标系时，机器人必须以不同的姿态使机器人的末端处于不同位置，其中第四点以竖直方向接近于（）。",
    options: {
      A: "选定的固定点",
      B: "选定的中心点",
      C: "选定的附加点",
      D: "选定的上方点"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 66,
    type: "single_choice",
    question: "创建工件坐标系时可以使用（）方法进行工件坐标系标定。",
    options: {
      A: "四点和六点",
      B: "三点",
      C: "五点",
      D: "九点"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 67,
    type: "single_choice",
    question: "在工件所在的平面上只需要定义（）个点，就可以建立工件坐标系。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 68,
    type: "single_choice",
    question: "当重新定位工作站中的工件时，修改（），所有的路径随之跟新。",
    options: {
      A: "基坐标",
      B: "世界坐标",
      C: "工具坐标",
      D: "工件坐标"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 69,
    type: "single_choice",
    question: "建立工件坐标系，可以选择（）进行工件标定。",
    options: {
      A: "3点法",
      B: "4点法",
      C: "5点法",
      D: "6点法"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 70,
    type: "single_choice",
    question: "设置（），允许操作以外部轴或传送导轨移动的工件，整个工件可连同其路径一起移动。",
    options: {
      A: "基坐标",
      B: "工件坐标",
      C: "工具坐标",
      D: "世界坐标"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 71,
    type: "single_choice",
    question: "工件坐标可以设置（）。",
    options: {
      A: "1个",
      B: "2个",
      C: "3个",
      D: "多个"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 72,
    type: "single_choice",
    question: "工件坐标系定义在（）上，在工业机器人动作允许范围内的任意位置，设定任意角度的X、Y、Z轴。",
    options: {
      A: "末端执行器",
      B: "工具中心点",
      C: "工件",
      D: "工业机器人关节"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 73,
    type: "single_choice",
    question: "工件坐标系原点位于（）上，坐标系的方向根据客户需要任意定义。",
    options: {
      A: "末端执行器",
      B: "工具中心点",
      C: "工件",
      D: "工业机器人关节"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 74,
    type: "single_choice",
    question: "工件坐标标定方法一般通过示教（）实现。",
    options: {
      A: "3个点",
      B: "4个点",
      C: "5个点",
      D: "6个点"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 75,
    type: "single_choice",
    question: "工件坐标标定通过三点法实现，第一个示教点是工件坐标系的（），第二个示教点在X轴上，第三个示教点在Y轴的正方向区域内，Z轴由右手手法则确定。",
    options: {
      A: "终点",
      B: "原点",
      C: "参考点",
      D: "任意点"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 76,
    type: "single_choice",
    question: "在工件坐标系中，以（）的X、Y、Z轴为基准进行回转。",
    options: {
      A: "基坐标",
      B: "工件坐标",
      C: "工具坐标",
      D: "世界坐标"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 77,
    type: "single_choice",
    question: "工件数据列表中默认的工件坐标Default，是以工业机器人本体（）为基准建立的。",
    options: {
      A: "基坐标",
      B: "工件坐标",
      C: "工具坐标",
      D: "世界坐标"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 78,
    type: "single_choice",
    question: "工件应该始终保持（）状态，以便用于程序中的所有模块。",
    options: {
      A: "全局",
      B: "局部",
      C: "部分",
      D: "局限"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 79,
    type: "single_choice",
    question: "选定X1、X2、Y1三点，设定工件坐标，其中X1为起始点，X1与X2、X1与Y1之间距离（），精度越高。",
    options: {
      A: "越小",
      B: "越大",
      C: "平均",
      D: "相等"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 80,
    type: "single_choice",
    question: "工件坐标声明属性设置，使用声明来改变（）在程序中使用方法。",
    options: {
      A: "工件变量",
      B: "工具变量",
      C: "数据变量",
      D: "整型变量"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 81,
    type: "single_choice",
    question: "建立（）采用的是坐标系偏移转换的原理。",
    options: {
      A: "基坐标系",
      B: "工件坐标系",
      C: "工具坐标系",
      D: "世界坐标系"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 82,
    type: "single_choice",
    question: "工件坐标系（）定义在工件的基准点上，表示工件相对于机器人的位置。",
    options: {
      A: "终点",
      B: "原点",
      C: "参考点",
      D: "任意点"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 83,
    type: "single_choice",
    question: "示教点位置是基于所选的（ ）存储的，如果需要把很多点做整体平移时，只要变更（ ）的值即可。",
    options: {
      A: "基坐标，工件坐标",
      B: "基坐标，工具坐标",
      C: "工件坐标，工件坐标",
      D: "世界坐标，工具坐标"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 84,
    type: "single_choice",
    question: "作业路径通常用工具坐标系相对于（ ）坐标系的运动来描述。",
    options: {
      A: "手爪",
      B: "固定",
      C: "运动",
      D: "工件"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 85,
    type: "single_choice",
    question: "创建工具坐标系时可以使用（ ）方法进行工具坐标系标定。",
    options: {
      A: "四点和六点",
      B: "三点",
      C: "五点",
      D: "九点"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 86,
    type: "single_choice",
    question: "采用三点法进行工件坐标系标定时，不需要记录（ ）坐标。",
    options: {
      A: "原点",
      B: "X 轴方向",
      C: "Y 轴方向",
      D: "Z 轴方向"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 87,
    type: "single_choice",
    question: "操作机手持粉笔在黑板上写字，在（ ）方向只有力的约束而无速度约束。",
    options: {
      A: "X 轴",
      B: "Y 轴",
      C: "Z 轴",
      D: "R 轴"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 88,
    type: "single_choice",
    question: "对于HSR-JR608工业机器人，当所使用的工具相对于默认工具0的坐标方向和TCP（工具中心点）都发生变化时，需要采用的工具坐标系标定方法是（）。",
    options: {
      A: "三点法",
      B: "四点法",
      C: "六点法",
      D: "以上都可以"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 89,
    type: "single_choice",
    question: "采用三点法进行工件坐标系标定时，需要记录（）坐标。  $①$  原点  $(2)$  .X轴方向 $(3)$  .Y轴方向  $(4).Z$  轴方向",
    options: {
      A: "①②③④",
      B: "①②④",
      C: "①②③",
      D: "①③④"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 90,
    type: "single_choice",
    question: "在华数三型的工具坐标系数据中，A轴的含义是( )。",
    options: {
      A: "工具Z轴的自旋角",
      B: "工具X轴的与默认工具X轴的夹角",
      C: "TCP的X轴的自旋角",
      D: "工具X轴的与基座标的X轴夹角"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 91,
    type: "single_choice",
    question: "6点法建立工具坐标系重新设定了TCP的（ )方向。",
    options: {
      A: "X、Y、Z",
      B: "X和Y",
      C: "X和Z",
      D: "Y和Z"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 92,
    type: "single_choice",
    question: "6点法建立工具坐标系，需要在第5点和第6点设定TCP的（ )方向。",
    options: {
      A: "X",
      B: "Z",
      C: "Y",
      D: "X和Z"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 93,
    type: "single_choice",
    question: "示教编程器上安全开关握紧为ON,松开为OFF状态,作为进而追加的功能,当握紧力过大时,为（ ）状态。",
    options: {
      A: "OFF",
      B: "ON",
      C: "不变",
      D: "无"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 94,
    type: "single_choice",
    question: "通常对机器人进行示教编程时,要求最初程序点与最终程序点的位置（），可提高工作效率。",
    options: {
      A: "不同",
      B: "相同",
      C: "无所谓",
      D: "等间距"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 95,
    type: "single_choice",
    question: "为了确保安全，用示教编程器手动运行机器人时，机器人的最高速度限制为(）。",
    options: {
      A: "50mm/s",
      B: "250mm/s",
      C: "100mm/s",
      D: "300mm/s"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 96,
    type: "single_choice",
    question: "示教编程器上安全开关握紧为ON，松开为OFF状态，作为进而追加的功能，当握紧力过大时，为（）状态。",
    options: {
      A: "不变",
      B: "ON",
      C: "OFF",
      D: "急停报错"
    },
    answer: "C",
    category: "基础知识与安全"
  },
  {
    id: 97,
    type: "single_choice",
    question: "下列哪一项违反了示教器的安全使用条例（）。",
    options: {
      A: "小心操作，不摔打、重击示教器。",
      B: "不使用锋利的物体操作示教器",
      C: "定期清洁示教器触摸屏，灰尘和小颗粒可能会挡住屏幕造成故障。",
      D: "使用溶剂、洗涤剂或擦洗海绵清洁示教器"
    },
    answer: "D",
    category: "基础知识与安全"
  },
  {
    id: 98,
    type: "single_choice",
    question: "Hspad正常连接控制器时，示教器左下角的网络状态颜色为（ )。",
    options: {
      A: "红色",
      B: "绿色",
      C: "黄色",
      D: "灰色"
    },
    answer: "B",
    category: "系统配置与操作"
  },
  {
    id: 99,
    type: "single_choice",
    question: "保护线（接地或接零线）的颜色按标准应采用（",
    options: {
      A: "红色",
      B: "绿色",
      C: "黄绿双色",
      D: "黑色"
    },
    answer: "C",
    category: "基础知识与安全"
  },
  {
    id: 100,
    type: "single_choice",
    question: "当机器人本体出现漏油现象时，下列哪一做法是错误的（）。",
    options: {
      A: "立即停止机器人运行",
      B: "继续工作，等机器人工作完成后再检查问",
      C: "立即联系相关工作人员进行检查",
      D: "立即停止机器人相关外围设备，防止意外情况发生"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 101,
    type: "single_choice",
    question: "现场操作机器人时，下列做法正确的是（）。",
    options: {
      A: "操作机器人前，应戴好安全帽",
      B: "示教器使用完后随意摆放",
      C: "在机器人运动时，进入机器人工作空间",
      D: "随意更改机器人参数"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 102,
    type: "single_choice",
    question: "工业机器人的主电源开关在什么位置（）。",
    options: {
      A: "机器人本体上",
      B: "示教器上",
      C: "控制柜上",
      D: "需外接"
    },
    answer: "C",
    category: "基础知识与安全"
  },
  {
    id: 103,
    type: "single_choice",
    question: "工业机器人由主体、（）和控制系统三个基本部分组成。",
    options: {
      A: "机柜",
      B: "驱动系统",
      C: "计算机",
      D: "气动系统"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 104,
    type: "single_choice",
    question: "工业机器人现场示教时，示教器应（）。",
    options: {
      A: "专人保管",
      B: "随身携带",
      C: "放置在专用支架上",
      D: "放置在设备上"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 105,
    type: "single_choice",
    question: "\"必须知道机器人控制器和外围控制设备上的（）按钮的位置，准备在紧急情况下使用这些按钮。",
    options: {
      A: "紧急停止",
      B: "启动",
      C: "使能",
      D: "速度调节"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 106,
    type: "single_choice",
    question: "机器人运动中，工作区域内有工作人员进入时、应按下（）。",
    options: {
      A: "安全开关",
      B: "紧急停止开关",
      C: "使能开关",
      D: "电源开关"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 107,
    type: "single_choice",
    question: "一般情况下工业机器人系统中下列（）位置不存在紧急按钮。",
    options: {
      A: "机器人示教器上",
      B: "机器人控制器上",
      C: "系统主控面板上",
      D: "机器人本体上"
    },
    answer: "D",
    category: "基础知识与安全"
  },
  {
    id: 108,
    type: "single_choice",
    question: "对机器人进行示教时，作为示教人员必须事先接受过专门的培训才行.与示教作业人员一起进行作业的监护人员，处在机器人可动范围外时，（）可进行共同作业。",
    options: {
      A: "不需要事先接受过专门的培训",
      B: "必须事先接受过专门的培训",
      C: "没有事先接受过专门的培训也可以",
      D: "无所谓"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 109,
    type: "single_choice",
    question: "在机器人动作范围内示教时，需要遵守的事项有（）。",
    options: {
      A: "保持从侧面观看机器人",
      B: "遵守操作步骤",
      C: "不用考虑机器人突然向自己所处方位运行时的应变方案",
      D: "不用设置躲避场所，以防万一"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 110,
    type: "single_choice",
    question: "在机器人动作范围内示教时，需要遵守的事项有（）。 $①$  保持从正面观看机器人  $(2)$  遵守操作步骤  $(3)$  考虑机器人突然向自己所处方位运行时的应变方案 $(4)$  确保设置躲避场所，以防万一",
    options: {
      A: "①②③",
      B: "①②",
      C: "①④",
      D: "①②③④"
    },
    answer: "D",
    category: "基础知识与安全"
  },
  {
    id: 111,
    type: "single_choice",
    question: "\"对机器人进行示教时，为了防止机器人的异常动作给操作人员造成危险，作业前必须进行的项目检查有（）等。 $①$  机器人外部电缆线外皮有无破损  $(2)$  机器人有无动作异  $(3)$  机器人制动装置是否有效  $(4)$  机器人紧急停止装置是否有效",
    options: {
      A: "①②③④",
      B: "①②③",
      C: "①④",
      D: "①③④"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 112,
    type: "single_choice",
    question: "示教编程器上安全开关（）情况下使能为OFF。 $①$  松开  $(2)$  握紧  $(3)$  握紧力过大  $(4)$  急停",
    options: {
      A: "③④",
      B: "①③",
      C: "①④",
      D: "①③④"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 113,
    type: "single_choice",
    question: "全局变量中J_VEL参数表示（）。",
    options: {
      A: "关节加速度",
      B: "关节速度",
      C: "关节减速度",
      D: "直线速度"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 114,
    type: "single_choice",
    question: "点焊机器人末端持握的作业工具是（ ）。",
    options: {
      A: "焊枪",
      B: "焊钳",
      C: "吸盘",
      D: "夹爪"
    },
    answer: "B",
    category: "应用技术"
  },
  {
    id: 115,
    type: "single_choice",
    question: "用来表征机器人重复定位其手部于同一目标位置的能力的参数是（）。",
    options: {
      A: "定位精度",
      B: "速度",
      C: "工作范围",
      D: "重复定位精度"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 116,
    type: "single_choice",
    question: "在更换机器人末端工具后，需要触摸工具和基坐标状态图标选择对应的（）。",
    options: {
      A: "工件坐标系",
      B: "工具坐标系",
      C: "基坐标",
      D: "轴坐标"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 117,
    type: "single_choice",
    question: "在机器人控制系统中最多可以存储（）个工具坐标系。",
    options: {
      A: "13",
      B: "14",
      C: "15",
      D: "16"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 118,
    type: "single_choice",
    question: "工具坐标系标定时，需使用默认的（）。",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "轴坐标",
      D: "世界坐标"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 119,
    type: "single_choice",
    question: "真空吸盘要求工件表面（）、干燥清洁，同时气密性好",
    options: {
      A: "粗糙",
      B: "凸凹不平",
      C: "平缓突起",
      D: "平整光滑"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 120,
    type: "single_choice",
    question: "手爪的主要功能是抓住工件、握持工件和（）工件。",
    options: {
      A: "固定",
      B: "定位",
      C: "释放",
      D: "触摸"
    },
    answer: "C",
    category: "硬件与IO控制"
  },
  {
    id: 121,
    type: "single_choice",
    question: "气吸附式取料手不包括（）",
    options: {
      A: "真空吸附",
      B: "气流负压吸附",
      C: "挤压排气负压吸附",
      D: "增压式吸附"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 122,
    type: "single_choice",
    question: "下列哪种运行方式最高限速  $125\\mathrm{mm / s}$",
    options: {
      A: "手动 T1",
      B: "手动 T2",
      C: "自动",
      D: "外部"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 123,
    type: "single_choice",
    question: "下列四种寄存器中哪种是数值寄存器是（）。",
    options: {
      A: "UT",
      B: "R",
      C: "JR",
      D: "LR"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 124,
    type: "single_choice",
    question: "华数工业机器人（）寄存器存放自定义工具坐标系参数",
    options: {
      A: "UT",
      B: "UF",
      C: "LR",
      D: "JR"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 125,
    type: "single_choice",
    question: "控制单轴进行操作，应该选择（）坐标系",
    options: {
      A: "世界坐标系",
      B: "轴坐标系",
      C: "基坐标系",
      D: "工具坐标系"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 126,
    type: "single_choice",
    question: "（）是一个笛卡尔坐标系，位于工具的工作点中。",
    options: {
      A: "世界坐标系",
      B: "轴坐标系",
      C: "基坐标系",
      D: "工具坐标系"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 127,
    type: "single_choice",
    question: "将控制系统中输出信号（如速度、位置）的部分或全部通过一定方式，加\n送到输入端，并与输入信号叠加，从而可改善系统的性能，这一过程称为（）",
    options: {
      A: "检测",
      B: "反馈",
      C: "控制",
      D: "调整"
    },
    answer: "B",
    category: "通信与集成"
  },
  {
    id: 128,
    type: "single_choice",
    question: "当机器人运行方式为手动，对机器人进行单轴操作时，切换坐标系为（）。",
    options: {
      A: "轴坐标系",
      B: "世界坐标系",
      C: "工具坐标系",
      D: "基坐标系"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 129,
    type: "single_choice",
    question: "对机器人进行示教时，模式旋钮打到手动模式后，在此模式中，外部设备发出的启动信号（）。",
    options: {
      A: "无效",
      B: "有效",
      C: "延时后有效",
      D: "视情况而定"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 130,
    type: "single_choice",
    question: "如果我们想让工业机器人沿着后安装的工具的TCP点进行重定位运动，那么工具坐标系应该选择（）。",
    options: {
      A: "Tool0的TCP点",
      B: "后安装的工具的TCP点",
      C: "自定义坐标系",
      D: "默认坐标系"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 131,
    type: "single_choice",
    question: "工作范围是指机器人（）或手腕中心所能到达的点的集合。",
    options: {
      A: "机械手",
      B: "手臂末端",
      C: "手臂",
      D: "行走部分"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 132,
    type: "single_choice",
    question: "线性运动指令的特点是（",
    options: {
      A: "对路径精度要求不高",
      B: "确保从起点到终点之间的路径始终保持为直线",
      C: "确保从起点到终点之间的路径始终保持为圆弧",
      D: "以上都不是"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 133,
    type: "single_choice",
    question: "对于（）的文件不能进行重命名、删除、打开操作。",
    options: {
      A: "恢复",
      B: "备份",
      C: "锁定",
      D: "其他"
    },
    answer: "C",
    category: "系统配置与操作"
  },
  {
    id: 134,
    type: "single_choice",
    question: "华数II型机器人在外部模式运行程序前，必须先设置（）变量。",
    options: {
      A: "REF",
      B: "IR",
      C: "EXT-PRG",
      D: "ROBOT"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 135,
    type: "single_choice",
    question: "（）模式下可用于带有外部控制系统的工业机器人进行控制。",
    options: {
      A: "手动T1",
      B: "手动T1",
      C: "自动",
      D: "外部"
    },
    answer: "D",
    category: "基础知识与安全"
  },
  {
    id: 136,
    type: "single_choice",
    question: "机器人经常使用的程序可以设置为主程序，每台机器人可以设置（）主程序。",
    options: {
      A: "3个",
      B: "5个",
      C: "1个",
      D: "无限制"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 137,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时，机器人将以（）运行。",
    options: {
      A: "程序给定的速度",
      B: "示教最高速度",
      C: "示教最低速度",
      D: "程序报错"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 138,
    type: "single_choice",
    question: "示教-再现控制为一种在线编程方式，它的最大问题是（）。",
    options: {
      A: "操作人员劳动强度大",
      B: "占用生产时间",
      C: "操作人员安全问题",
      D: "容易产生废品"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 139,
    type: "single_choice",
    question: "手部的位姿是由位置和（ ）构成的。",
    options: {
      A: "姿态",
      B: "速度",
      C: "运行状态",
      D: "工具中心点"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 140,
    type: "single_choice",
    question: "当代机器人大军中最主要的机器人为（ ）。",
    options: {
      A: "工业机器人",
      B: "军用机器人",
      C: "服务机器人",
      D: "特种机器人"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 141,
    type: "single_choice",
    question: "机器人三原则是由（ ）提出的。",
    options: {
      A: "森政弘",
      B: "约瑟夫·英格伯格",
      C: "托莫维奇",
      D: "阿西莫夫"
    },
    answer: "D",
    category: "基础知识与安全"
  },
  {
    id: 142,
    type: "single_choice",
    question: "一个刚体在空间运动具有（ ）个自由度",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "D",
    category: "基础知识与安全"
  },
  {
    id: 143,
    type: "single_choice",
    question: " $1 + \\mathrm{X}$  实训系统中，末端操作器不包括（ ）。",
    options: {
      A: "手爪",
      B: "吸盘",
      C: "激光笔",
      D: "焊枪"
    },
    answer: "C",
    category: "应用技术"
  },
  {
    id: 144,
    type: "single_choice",
    question: "额定负载条件不包括以下哪一个（ ）。",
    options: {
      A: "质量",
      B: "重心位置",
      C: "测量时间",
      D: "测量点位置"
    },
    answer: "C",
    category: "硬件与IO控制"
  },
  {
    id: 145,
    type: "single_choice",
    question: "（）表示加载程序信号，加载指定的用户程序。",
    options: {
      A: "Iprg_start",
      B: "Iprg_stop",
      C: "Iprg_pause",
      D: "Iprg_load"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 146,
    type: "single_choice",
    question: "示教作业完成后，应以（）状态检查机器人的动作",
    options: {
      A: "手动低速",
      B: "手动高速",
      C: "自动低速",
      D: "自动高速"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 147,
    type: "single_choice",
    question: "若要修改程序运行方式为单步运行，需要点击示教器状态栏中（）进行选择。",
    options: {
      A: "小人图标",
      B: "使能状态图标",
      C: "扳手图标",
      D: "倍率图标"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 148,
    type: "single_choice",
    question: "在默认情况下，程序是以（ ）的运行方式运行。",
    options: {
      A: "单步",
      B: "连续",
      C: "外部",
      D: "自动"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 149,
    type: "single_choice",
    question: "机器人发生碰撞后，必须进行（ ），否则不能正常运行。",
    options: {
      A: "重启",
      B: "轴校准",
      C: "程序备份",
      D: "程序恢复"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 150,
    type: "single_choice",
    question: "如果程序正在运行，则在取消程序选择前必须将程序（ ）。",
    options: {
      A: "执行完",
      B: "保存",
      C: "停止",
      D: "加载"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 151,
    type: "single_choice",
    question: "工业机器人是机器人的一种，工业机器人是由哪些学科交叉领域形成的具有高新技术的机器人  $①$  计算机；  $(2)$  控制技术；  $(3)$  机构学；  $(4)$  信息及传感技术；  $(5)$\n人工智能",
    options: {
      A: " $①②③④$ ",
      B: "①②③⑤",
      C: "①③④⑤",
      D: "①②③④⑤"
    },
    answer: "D",
    category: "基础知识与安全"
  },
  {
    id: 152,
    type: "single_choice",
    question: "机器人运动的类型不包括（）。",
    options: {
      A: "直线运动",
      B: "关节定位",
      C: "圆弧运动",
      D: "曲线运动"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 153,
    type: "single_choice",
    question: "关节运动指令的特点是（）。",
    options: {
      A: "对路径精度要求不高",
      B: "确保从起点到终点之间的路径始终保持为直线",
      C: "确保从起点到终点之间的路径始终保持为圆弧",
      D: "以上都不是"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 154,
    type: "single_choice",
    question: "圆弧指令的特点是（）。",
    options: {
      A: "对路径精度要求不高",
      B: "确保从起点到终点之间的路径始终保持为直线",
      C: "确保从起点到终点之间的路径始终保持为圆弧",
      D: "以上都不是"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 155,
    type: "single_choice",
    question: "下面（）指令为华数系统中的循环指令。",
    options: {
      A: "FOR",
      B: "END",
      C: "GOTO",
      D: "DESCRIBLE"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 156,
    type: "single_choice",
    question: "机器人行走轨迹是由示教点决定的，一段圆弧至少需要示教（）点。",
    options: {
      A: "2",
      B: "5",
      C: "4",
      D: "3"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 157,
    type: "single_choice",
    question: "工业机器人的TCP是指（）。",
    options: {
      A: "工具中心点",
      B: "法兰中心点",
      C: "工件中心点",
      D: "工作台中心点"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 158,
    type: "single_choice",
    question: "（）指令用于选择一个点位之后，当前点机器人位置与选择点之间的任意运动，运动过程中不进行轨迹控制和姿态控制。",
    options: {
      A: "J",
      B: "L",
      C: "C",
      D: "MOVES"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 159,
    type: "single_choice",
    question: "下列指令不属于循环指令的是（）。",
    options: {
      A: "WHILE",
      B: "FOR",
      C: "ENDWHILE",
      D: "DO"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 160,
    type: "single_choice",
    question: "工业机器人最多可以设置（）个工具坐标系。",
    options: {
      A: "9",
      B: "10",
      C: "16",
      D: "12"
    },
    answer: "C",
    category: "坐标系与运动控制"
  },
  {
    id: 161,
    type: "single_choice",
    question: "FORR[1]=0TO3BY1;JP[1];JP[2];ENDFOR总共循环（）次。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 162,
    type: "single_choice",
    question: "（）寄存器存储局部位置数据。",
    options: {
      A: "R[]",
      B: "JR[]",
      C: "LR[]",
      D: "P[]"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 163,
    type: "single_choice",
    question: "3点法标定用户坐标系不需要标定（）点。",
    options: {
      A: "原点",
      B: "X方向点",
      C: "Y方向点",
      D: "Z方向点"
    },
    answer: "D",
    category: "坐标系与运动控制"
  },
  {
    id: 164,
    type: "single_choice",
    question: "下列指令可以调用子程序的是（）。",
    options: {
      A: "GOTO",
      B: "CALL",
      C: "IF",
      D: "L"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 165,
    type: "single_choice",
    question: "GOTO 指令和（）指令结合使用完成程序的跳转。",
    options: {
      A: "IF",
      B: "CALL",
      C: "WHILE",
      D: "LBL"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 166,
    type: "single_choice",
    question: "C运动指令是（）类型的运动指令。",
    options: {
      A: "圆弧运动指令",
      B: "关节运动指令",
      C: "绝对运动指令",
      D: "直线运动指令"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 167,
    type: "single_choice",
    question: "变量列表中JR指（）寄存器。",
    options: {
      A: "工件坐标系变量",
      B: "工件坐标系变量",
      C: "数值变量",
      D: "关节型坐标"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 168,
    type: "single_choice",
    question: "JP[1]VEL  $= 100\\mathrm{ACC} = 100\\mathrm{DEC} = 100$  中的  $\\mathrm{VEL} = 100$  是（ )参数。",
    options: {
      A: "回转半径参数",
      B: "加速比",
      C: "减速比",
      D: "速度参数"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 169,
    type: "single_choice",
    question: "（）寄存器用于存储自定义创建的工件坐标系。",
    options: {
      A: "UF",
      B: "JR",
      C: "UT",
      D: "LR"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 170,
    type: "single_choice",
    question: "控制机器人非线性运动时，需要将坐标系切换为（）。",
    options: {
      A: "轴坐标",
      B: "世界坐标",
      C: "基坐标",
      D: "工具坐标"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 171,
    type: "single_choice",
    question: "坐标系指令分为（）指令和工具坐标系指令，在程序中可以选择定义的坐标系编号，在程序中切换坐标系。",
    options: {
      A: "基坐标系",
      B: "轴坐标系",
      C: "世界坐标系",
      D: "机器人默认坐标系"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 172,
    type: "single_choice",
    question: "下面（）指令属于IO指令。",
    options: {
      A: "WAIT",
      B: "SLEEP",
      C: "WHILE",
      D: "GOTO"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 173,
    type: "single_choice",
    question: "工业机器人的机械主体的主要组成部分包括（）。  $①$  传动单元  $(2)$  控制器  $(3)$  示教器  $(4)$  驱动装置  $(5)$  执行机构",
    options: {
      A: " $①③④$ ",
      B: "①④5",
      C: "①5",
      D: "②③5"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 174,
    type: "single_choice",
    question: "可以对工业机器人参数调整的参数不包括（）。",
    options: {
      A: "位置",
      B: "传感器",
      C: "姿态",
      D: "速度"
    },
    answer: "B",
    category: "系统配置与操作"
  },
  {
    id: 175,
    type: "single_choice",
    question: "如语句  $\\mathrm{JP[1]VEL = 50}$  ，其中VEL代表（）。",
    options: {
      A: "速度",
      B: "平滑系数",
      C: "加速比",
      D: "姿态速度"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 176,
    type: "single_choice",
    question: "变量列表用于存在不同类型的寄存器数据，其中JR表示（）。",
    options: {
      A: "工具坐标系变量",
      B: "数值寄存器",
      C: "关节坐标寄存器",
      D: "笛卡尔坐标寄存器"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 177,
    type: "single_choice",
    question: "（ ）是指机器人在立体空间中所能达到的半径。",
    options: {
      A: "承载能力",
      B: "运动范围",
      C: "到达距离",
      D: "重复定位精度"
    },
    answer: "C",
    category: "硬件与IO控制"
  },
  {
    id: 178,
    type: "single_choice",
    question: "手动示教机器人需要移动位置时，通常选择（ ）。",
    options: {
      A: "单轴运动",
      B: "线性运动",
      C: "重定位运动",
      D: "旋转运动"
    },
    answer: "B",
    category: "系统配置与操作"
  },
  {
    id: 179,
    type: "single_choice",
    question: "手动示教机器人需要变换姿态时，通常选择（ ）。",
    options: {
      A: "单轴运动",
      B: "线性运动",
      C: "重定位运动",
      D: "旋转运动"
    },
    answer: "C",
    category: "系统配置与操作"
  },
  {
    id: 180,
    type: "single_choice",
    question: "为对备份和还原进行配置，点击菜单中的（ ）下的相应功能进行配置。",
    options: {
      A: "文件",
      B: "配置",
      C: "显示",
      D: "诊断"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 181,
    type: "single_choice",
    question: "华数机器人程序运行状态不包含（ ）。",
    options: {
      A: "自动",
      B: "手动T1",
      C: "手动T2",
      D: "手动T3"
    },
    answer: "D",
    category: "基础知识与安全"
  },
  {
    id: 182,
    type: "single_choice",
    question: "华数机器人提供4个辅助按键，配置类型有3种，不包括（ ）。",
    options: {
      A: "IO型",
      B: "工艺包",
      C: "无配置",
      D: "开关"
    },
    answer: "D",
    category: "系统配置与操作"
  },
  {
    id: 183,
    type: "single_choice",
    question: "机器人二轴初始关节角度为（ ）。",
    options: {
      A: "0",
      B: "-90",
      C: "90",
      D: "180"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 184,
    type: "single_choice",
    question: "工业机器人的主要技术参数不包括（ ）和重复定位精度、作业范围、运动速度和承载能力。",
    options: {
      A: "自由度",
      B: "加速度",
      C: "分辨率",
      D: "定位精度"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 185,
    type: "single_choice",
    question: "文件还原前提条件包括（ ）。",
    options: {
      A: "必须通过U盘还原",
      B: "还原时必须按下急停按钮",
      C: "还原文件已处于设置的目录下",
      D: "必须开启使能"
    },
    answer: "C",
    category: "系统配置与操作"
  },
  {
    id: 186,
    type: "single_choice",
    question: "机器人视觉系统主要由三部分组成，包括图像的获取、（ ）和输出显示。",
    options: {
      A: "图像增强",
      B: "图像的处理和分析",
      C: "图像恢复",
      D: "图像绘制"
    },
    answer: "B",
    category: "应用技术"
  },
  {
    id: 187,
    type: "single_choice",
    question: "机械结构系统：由机身、手臂、手腕、（ ）四大件组成。",
    options: {
      A: "末端执行器",
      B: "步进电机",
      C: "3相直流电机",
      D: "驱动器"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 188,
    type: "single_choice",
    question: "变位机的运动由（ ）控制。",
    options: {
      A: "机器人外部轴第七轴",
      B: "PLC脉冲串",
      C: "PLC的IO点",
      D: "IO点"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 189,
    type: "single_choice",
    question: "如果没有中断，CPU循环执行（ ）。",
    options: {
      A: "OB1",
      B: "OB100",
      C: "OB82",
      D: "OB35"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 190,
    type: "single_choice",
    question: "在PLC编程中，最常用的编程语言是（ ）。",
    options: {
      A: "STL",
      B: "LAD",
      C: "FBD",
      D: "SFC"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 191,
    type: "single_choice",
    question: "PLC工作方式为（）。",
    options: {
      A: "等待工作方式",
      B: "中断工作方式",
      C: "扫描工作方式",
      D: "循环扫描工作方式"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 192,
    type: "single_choice",
    question: "每一个PLC控制系统必须有一台（），才能正常工作。",
    options: {
      A: "CPU模块",
      B: "扩展模块",
      C: "通信模块",
      D: "编程器"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 193,
    type: "single_choice",
    question: "立即输出指令可以用于下列哪个量中（）。",
    options: {
      A: "I",
      B: "Q",
      C: "V",
      D: "M"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 194,
    type: "single_choice",
    question: "PLC是通过拓展（）模块来识别立体仓库的物料的。",
    options: {
      A: "数字量输入",
      B: "数字量输出",
      C: "模拟量输入",
      D: "模拟量输出"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 195,
    type: "single_choice",
    question: "工业机器人示教器上新建机器人主程序和子程序，每台机器人可以建立（）个主程序。",
    options: {
      A: "3",
      B: "1",
      C: "5",
      D: "无限制"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 196,
    type: "single_choice",
    question: "工业机器人示教器上新建主程序的后缀名是（）。",
    options: {
      A: "LIB",
      B: "MAIN",
      C: "PRG",
      D: "RBT"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 197,
    type: "single_choice",
    question: "机器人运动的速度可以由程序指令直接指定，直线运动指令速度的单位是()。",
    options: {
      A: "mm/s",
      B: "cm/s",
      C: "m/s",
      D: "以上都可以"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 198,
    type: "single_choice",
    question: "工业机器人示教器可以对程序指令进行（）。",
    options: {
      A: "复制",
      B: "粘贴",
      C: "删除",
      D: "以上都可以"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 199,
    type: "single_choice",
    question: "工业机器人程序命名为（）。",
    options: {
      A: "汉字",
      B: "数字",
      C: "字母",
      D: "其他"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 200,
    type: "single_choice",
    question: "工业机器人程序之间（）。",
    options: {
      A: "可以互相调用",
      B: "不可以互相调用",
      C: "只能主程序调用子程序",
      D: "子程序可以调用主程序"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 201,
    type: "single_choice",
    question: "工业机器人的复制程序点击（）。",
    options: {
      A: "右键",
      B: "更多",
      C: "左键",
      D: "打开"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 202,
    type: "single_choice",
    question: "示教器内的提示信息共有三种级别，分别是提示、警告和错误，其中错误用（）颜色表示。",
    options: {
      A: "红色",
      B: "黄色",
      C: "绿色",
      D: "灰色"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 203,
    type: "single_choice",
    question: "工业机器人的粘贴程序点击（）。",
    options: {
      A: "右键",
      B: "更多",
      C: "左键",
      D: "打开"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 204,
    type: "single_choice",
    question: "工业机器人如何取消加载（）。",
    options: {
      A: "示教器左侧停止按钮",
      B: "更多里的取消加载",
      C: "加载",
      D: "A或B"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 205,
    type: "single_choice",
    question: "工业机器人可以新建（）。",
    options: {
      A: "子程序",
      B: "主程序",
      C: "子程序和主程序",
      D: "主程序和文件夹"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 206,
    type: "single_choice",
    question: "工业机器人的运行点击（）。",
    options: {
      A: "新建",
      B: "加载",
      C: "打开",
      D: "恢复"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 207,
    type: "single_choice",
    question: "工业机器人的编辑程序点击（）。",
    options: {
      A: "新建",
      B: "加载",
      C: "打开",
      D: "恢复"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 208,
    type: "single_choice",
    question: "工业机器人打开（）进行重命名。",
    options: {
      A: "新建",
      B: "加载",
      C: "打开",
      D: "更多"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 209,
    type: "single_choice",
    question: "工业机器人命名最多（）字节。",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 210,
    type: "single_choice",
    question: "工业机器人新建程序保存在（）。",
    options: {
      A: "文件夹",
      B: "导航器",
      C: "HSRobot",
      D: "以上都可以"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 211,
    type: "single_choice",
    question: "增量指令的英文缩写是（）。",
    options: {
      A: "ACC",
      B: "INC",
      C: "CNT",
      D: "FINE"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 212,
    type: "single_choice",
    question: "机械结构系统由机身、手臂、手腕、（）四大件组成",
    options: {
      A: "末端执行器",
      B: "步进电机",
      C: "3 相直流电机",
      D: "驱动器"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 213,
    type: "single_choice",
    question: "允许机器人手臂各零件之间发生相对运动的机构称为（）。",
    options: {
      A: "机座",
      B: "手腕",
      C: "机身",
      D: "关节"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 214,
    type: "single_choice",
    question: "机器人技术参数不包括（）。",
    options: {
      A: "自由度",
      B: "精度",
      C: "工作范围",
      D: "重量"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 215,
    type: "single_choice",
    question: "华数工业机器人运行模式不包括（）。",
    options: {
      A: "手动模式",
      B: "自动模式",
      C: "外部模式",
      D: "远程模式"
    },
    answer: "D",
    category: "基础知识与安全"
  },
  {
    id: 216,
    type: "single_choice",
    question: "下列关于程序名描述错误的是（）。",
    options: {
      A: "用以识别存入控制器内存中的程序",
      B: "在同一个目录下不能出现包含两个或更多拥有相同程序名的程序。",
      C: "程序名长度不超过8个字符",
      D: "有字母、数字、下划线（_）和汉字组成"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 217,
    type: "single_choice",
    question: "延时指令有( )。",
    options: {
      A: "DELAY",
      B: "SLEEP",
      C: "WAITTIME",
      D: "以上都可以"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 218,
    type: "single_choice",
    question: "示教器上的使能状态按钮为( )时，代表使能开启。",
    options: {
      A: "红色",
      B: "黄色",
      C: "绿色",
      D: "灰色"
    },
    answer: "C",
    category: "系统配置与操作"
  },
  {
    id: 219,
    type: "single_choice",
    question: "工业机器人手部的位姿是由（）变量构成的。",
    options: {
      A: "位置与速度",
      B: "姿态与位置",
      C: "位置与运行状态",
      D: "姿态与速度"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 220,
    type: "single_choice",
    question: "通常对机器人进行示教编程时，要求最初程序点与最终程序点的位置（），可提高工作效率。",
    options: {
      A: "相同",
      B: "不同",
      C: "无所谓",
      D: "分离越大越好"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 221,
    type: "single_choice",
    question: "为了确保安全，用示教编程器手动运行机器人时，机器人的最高速度限制为( )。",
    options: {
      A: "50mm/s",
      B: "250mm/s",
      C: "800mm/s",
      D: "1600mm/s"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 222,
    type: "single_choice",
    question: "工业机器人示教器中用于表示整型数值寄存器的是（）。",
    options: {
      A: "LR",
      B: "IR",
      C: "DR",
      D: "JR"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 223,
    type: "single_choice",
    question: "( )是直线指令。",
    options: {
      A: "J",
      B: "C",
      C: "L",
      D: "MOVEL"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 224,
    type: "single_choice",
    question: "( )是圆弧指令。",
    options: {
      A: "J",
      B: "C",
      C: "L",
      D: "MOVEL"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 225,
    type: "single_choice",
    question: "( )是关节指令。",
    options: {
      A: "J",
      B: "C",
      C: "L",
      D: "MOVEL"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 226,
    type: "single_choice",
    question: "机器人在（ )模式下可以调整为单步运行。",
    options: {
      A: "手动模式",
      B: "自动模式",
      C: "外部模式",
      D: "示教模式"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 227,
    type: "single_choice",
    question: "( )指令用于选择一个点位之后，当前点机器人位置与记录点之间的直线运动。",
    options: {
      A: "J",
      B: "C",
      C: "L",
      D: "MOVEL"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 228,
    type: "single_choice",
    question: "( )指令用于选择一个点位之后，当前点机器人位置与选择点之间的任意运动，运动过程中不进行轨迹控制和姿态控制。",
    options: {
      A: "J",
      B: "C",
      C: "L",
      D: "MOVEL"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 229,
    type: "single_choice",
    question: "圆弧指令（ ）点成个半圆。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 230,
    type: "single_choice",
    question: "运动指令包括（ ）。",
    options: {
      A: "J",
      B: "L",
      C: "C",
      D: "以上都有"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 231,
    type: "single_choice",
    question: "( )指令用于子程序调用，执行子程序的程序内容。",
    options: {
      A: "CALL",
      B: "IF",
      C: "DO",
      D: "JR"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 232,
    type: "single_choice",
    question: "备注某行程序后，将会（ ）。",
    options: {
      A: "执行该行程序",
      B: "删除该行程序",
      C: "隐去该行程序",
      D: "其他"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 233,
    type: "single_choice",
    question: "运动指令不包括（ ）。",
    options: {
      A: "J",
      B: "L",
      C: "C",
      D: "LR"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 234,
    type: "single_choice",
    question: "下列（ ）指令不能实现程序循环运行。",
    options: {
      A: "GOTOLBL[]",
      B: "LBL[]",
      C: "WHILE",
      D: "IF"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 235,
    type: "single_choice",
    question: "机器人的位置数据可存放在（ ）寄存器。",
    options: {
      A: "R",
      B: "BR",
      C: "DR",
      D: "JR"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 236,
    type: "single_choice",
    question: "( )指令控制TCP（工具中心点）沿直线轨迹运动到目标位置，其速度由程序指令直接指定。",
    options: {
      A: "J指令",
      B: "C指令",
      C: "L指令",
      D: "以上都不是"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 237,
    type: "single_choice",
    question: "华数机器人用示教编程器手动运行机器人时，T2机器人的速度限制为（）。",
    options: {
      A: "125mm/s",
      B: "250mm/s",
      C: "800mm/s",
      D: "2000"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 238,
    type: "single_choice",
    question: "华数机器人用示教编程器手动运行机器人时，T1机器人的速度限制为（）。",
    options: {
      A: "125mm/s",
      B: "250mm/s",
      C: "800mm/s",
      D: "2000"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 239,
    type: "single_choice",
    question: "\"下列指令解释正确的是()。",
    options: {
      A: "MOVJ：用直线插补方式移动到示教位置",
      B: "MOVL：以圆弧插补方式移动到示教位置",
      C: "CALL：调出指定程序",
      D: "MOVC：以关节插补方式移动到示教位置"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 240,
    type: "single_choice",
    question: "\"下列指令解释不正确的是（）。",
    options: {
      A: "MOVJ：用直线插补方式移动到示教位置",
      B: "MOVL：以直线插补方式移动到示教位置",
      C: "CALL：调出指定程序",
      D: "MOVC：以圆弧插补方式移动到示教位置"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 241,
    type: "single_choice",
    question: "程序在运行时，如果需要更改程序的点位，先使用( )按钮，停止机器人的运行。",
    options: {
      A: "停止",
      B: "急停",
      C: "运行",
      D: "暂停"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 242,
    type: "single_choice",
    question: "( )指令为阻塞等待一个指定信号。",
    options: {
      A: "DO",
      B: "SLEEP",
      C: "WAIT",
      D: "DELAY"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 243,
    type: "single_choice",
    question: "( )指令的功能是满足不同条件，执行对应程序。",
    options: {
      A: "WHILE",
      B: "FOR",
      C: "WAIT",
      D: "IF"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 244,
    type: "single_choice",
    question: "WAITTIME等待的最短时间为( )。",
    options: {
      A: "1s",
      B: "1ms",
      C: "1000s",
      D: "其他"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 245,
    type: "single_choice",
    question: "修改指令的速度参数，点击( )。",
    options: {
      A: "VEL",
      B: "ACC",
      C: "DEC",
      D: "VROT"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 246,
    type: "single_choice",
    question: "修改指令的加速比参数，点击( )。",
    options: {
      A: "VEL",
      B: "ACC",
      C: "DEC",
      D: "VROT"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 247,
    type: "single_choice",
    question: "修改指令的减速比参数，点击( )。",
    options: {
      A: "VEL",
      B: "ACC",
      C: "DEC",
      D: "VROT"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 248,
    type: "single_choice",
    question: "修改指令的速度姿态速度参数，点击( )。",
    options: {
      A: "VEL",
      B: "ACC",
      C: "DEC",
      D: "VROT"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 249,
    type: "single_choice",
    question: "修改指令的平滑系数，点击( )。",
    options: {
      A: "VEL",
      B: "CNT",
      C: "DEC",
      D: "VROT"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 250,
    type: "single_choice",
    question: "点击( )可以更改指令。",
    options: {
      A: "指令",
      B: "更改",
      C: "备注",
      D: "说明"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 251,
    type: "single_choice",
    question: "对程序行进行说明，需点击( )。",
    options: {
      A: "指令",
      B: "更给",
      C: "备注",
      D: "说明"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 252,
    type: "single_choice",
    question: "添加指令需要点击( )。",
    options: {
      A: "指令",
      B: "更给",
      C: "备注",
      D: "说明"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 253,
    type: "single_choice",
    question: "JR( )快速回到目标位置点。",
    options: {
      A: "直线到点",
      B: "关节到点",
      C: "手动运行",
      D: "提高速度手动运行"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 254,
    type: "single_choice",
    question: "J指令的目标点位置通过（ )获取。",
    options: {
      A: "记录关节坐标",
      B: "记录笛卡尔坐标",
      C: "手动修改",
      D: "获取坐标"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 255,
    type: "single_choice",
    question: "JR指令的目标点位置通过（ )获取。",
    options: {
      A: "记录关节坐标",
      B: "记录笛卡尔坐标",
      C: "手动修改",
      D: "获取坐标"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 256,
    type: "single_choice",
    question: "LR( )快速回到目标位置点。",
    options: {
      A: "直线到点",
      B: "关节到点",
      C: "手动运行",
      D: "提高速度手动运行"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 257,
    type: "single_choice",
    question: "HSR-JR603机器人TOOL变量是（）。",
    options: {
      A: "工具坐标系变量",
      B: "工件坐标系变量",
      C: "关节坐标寄存器",
      D: "笛卡尔坐标寄存器"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 258,
    type: "single_choice",
    question: "HSR-JR603机器人BASE变量是（）。",
    options: {
      A: "工具坐标系变量",
      B: "工件坐标系变量",
      C: "关节坐标寄存器",
      D: "笛卡尔坐标寄存器"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 259,
    type: "single_choice",
    question: "HSR-JR603机器人BASE变量个数（）。",
    options: {
      A: "8",
      B: "16",
      C: "32",
      D: "64"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 260,
    type: "single_choice",
    question: "HSR-JR603机器人TOOL变量个数（）。",
    options: {
      A: "8",
      B: "16",
      C: "32",
      D: "64"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 261,
    type: "single_choice",
    question: "工业机器人常用的编程方式是：（）。",
    options: {
      A: "示教编程和离线编程",
      B: "示教编程和在线编程",
      C: "在线编程和离线编程",
      D: "示教编程和软件编程"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 262,
    type: "single_choice",
    question: "由P[1]点开始沿着过P[2]点的圆弧以  $2000\\mathrm{mm / sec}$  的速度运动至P[3]点的程序为（）。",
    options: {
      A: "CP[1]P[2]P[3]2000mm/secFINE",
      B: "CP[1]P[2]2000mm/secFINE",
      C: "CP[1]P[3]2000mm/secFINE",
      D: "CP[2]P[3]2000mm/secFINE"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 263,
    type: "single_choice",
    question: "原点位置校准是将机器人位置与绝对编码器位置进行对照的操作。华数机器人在（）情况下不需要再次进行原点位置校准。",
    options: {
      A: "碰撞硬限位时",
      B: "更换电机、绝对编码器时",
      C: "存储内存被删除时",
      D: "机器人碰撞工件，原点偏移时"
    },
    answer: "C",
    category: "硬件与IO控制"
  },
  {
    id: 264,
    type: "single_choice",
    question: "机器人运动的进给速度，由程序指令直接指定，直线运动指令的进给速度的\n单位可以为( )。",
    options: {
      A: "mm/sec",
      B: "cm/min",
      C: "-inch/min",
      D: "以上都可以"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 265,
    type: "single_choice",
    question: "机器人零点丢失后会有什么后果( )。",
    options: {
      A: "仅能单轴运行",
      B: "仅能在规定路径上运行",
      C: "仅能用专用装置驱动",
      D: "机器人不能运动"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 266,
    type: "single_choice",
    question: "六轴工业机器人靠近机器人底座的轴通常定义为( )。",
    options: {
      A: "0轴",
      B: "1轴",
      C: "6轴",
      D: "附加轴"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 267,
    type: "single_choice",
    question: "\"（）指令是以单个轴或某组轴（机器人组）的当前位置为起点，移动某个轴或某组轴（机器人组）到目标点位置。移动过程不进行轨迹以及姿态控制。",
    options: {
      A: "J",
      B: "L",
      C: "C",
      D: "JR"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 268,
    type: "single_choice",
    question: "以下哪种不属于机器人触觉（ )。",
    options: {
      A: "压觉",
      B: "力觉",
      C: "滑觉",
      D: "视觉"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 269,
    type: "single_choice",
    question: "以下哪种不是接触觉传感器的用途（ )。",
    options: {
      A: "探测物体位置",
      B: "检测物体距离",
      C: "探索路径",
      D: "安全保护"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 270,
    type: "single_choice",
    question: "（）指令用来等待数字输入信号为0。",
    options: {
      A: "wait(D_OUT[9],ON)",
      B: "wait(D_IN[9],ON)",
      C: "wait(D_OUT[9],OFF)",
      D: "wait(D_IN[9],OFF)"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 271,
    type: "single_choice",
    question: "以下不属于PLC外围输入故障的是（ )。",
    options: {
      A: "接近开关故障",
      B: "按钮开关短路",
      C: "电机故障",
      D: "传感器故障"
    },
    answer: "C",
    category: "硬件与IO控制"
  },
  {
    id: 272,
    type: "single_choice",
    question: "PLC与计算机通信要进行（ )设置。",
    options: {
      A: "数据设置",
      B: "字节设置",
      C: "电平设置",
      D: "串口设置"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 273,
    type: "single_choice",
    question: "（）指令用来等待数字输出信号为1。",
    options: {
      A: "wait(D_OUT[12],ON)",
      B: "wait(D_IN[12],ON)",
      C: "wait(D_OUT[12],OFF)",
      D: "wait(D_IN[12],OFF)"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 274,
    type: "single_choice",
    question: "配置机器人外部I/O信号，可以实现外部信号控制程序启动的是（）。",
    options: {
      A: "iPRG_START",
      B: "iPRG_PAUSE",
      C: "iPRG_RESUME",
      D: "iPRG_KIL"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 275,
    type: "single_choice",
    question: "PLC监控不到的是( )。",
    options: {
      A: "本机输入量",
      B: "本地输出量",
      C: "计数状态",
      D: "上位机的状态"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 276,
    type: "single_choice",
    question: "配置机器人外部I/O信号，可以实现外部信号控制程序恢复执行的是（）。",
    options: {
      A: "iPRG_START",
      B: "oPRG_READY",
      C: "iPRG_RESUME",
      D: "oPRG_RUNNING"
    },
    answer: "C",
    category: "硬件与IO控制"
  },
  {
    id: 277,
    type: "single_choice",
    question: "在调试程序时，PLC处于（）状态。",
    options: {
      A: "STOP",
      B: "RUN",
      C: "断电",
      D: "报警"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 278,
    type: "single_choice",
    question: "机器人控制柜内部伺服驱动器绿色指示灯常亮，代表（）。",
    options: {
      A: "主电源闭合",
      B: "伺服使能成功",
      C: "初始化成功",
      D: "网络安全运行"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 279,
    type: "single_choice",
    question: "应变式传感器采用全桥差动等臂电桥转换电路时，若电源电压为U时，其输出电压Uo为（）。",
    options: {
      A: "(ARU)/(2R)",
      B: "(ARU)/(4R)",
      C: "(ARU)/(R)",
      D: "(ARU)/(8R)"
    },
    answer: "C",
    category: "硬件与IO控制"
  },
  {
    id: 280,
    type: "single_choice",
    question: "若机器人手爪松开的控制信号为：DO[2]=OFF,DO[3]=ON，则手爪夹紧的控制信号是（）。",
    options: {
      A: "DO[2]=OFF,DO[3]=ON",
      B: "DO[2]=ON,DO[3]=OFF",
      C: "DO[2]=OFF,DO[3]=OFF",
      D: "DO[2]=ON,DO[3]=ON"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 281,
    type: "single_choice",
    question: "对机器人进行示教时，模式旋钮打到示教模式后，在此模式中，外部设备发出的启动信号（）。",
    options: {
      A: "无效",
      B: "有效",
      C: "延时后有效",
      D: "视情况而定"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 282,
    type: "single_choice",
    question: "在哪个窗口可以定义机器人输入输出（）。",
    options: {
      A: "程序编辑器",
      B: "手动操作",
      C: "输入输出",
      D: "控制面板"
    },
    answer: "C",
    category: "系统配置与操作"
  },
  {
    id: 283,
    type: "single_choice",
    question: "指令将数字输出信号置1的是（）。",
    options: {
      A: "Set",
      B: "Reset",
      C: "SetDO",
      D: "DO[n]=ON"
    },
    answer: "D",
    category: "编程与指令"
  },
  {
    id: 284,
    type: "single_choice",
    question: "传感器的输出信号达到稳定时，输出信号变化与输入信号变化的比值代表传感器的（）参数。",
    options: {
      A: "抗干扰能力",
      B: "精度",
      C: "线性度",
      D: "灵敏度"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 285,
    type: "single_choice",
    question: "压电式传感器，即应用半导体压电效应可以测量（）。",
    options: {
      A: "电压",
      B: "亮度",
      C: "力和力矩",
      D: "距离"
    },
    answer: "C",
    category: "硬件与IO控制"
  },
  {
    id: 286,
    type: "single_choice",
    question: "发光二极管利用的是（）。",
    options: {
      A: "光电效应",
      B: "光化学效应",
      C: "光热效应",
      D: "感光效应"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 287,
    type: "single_choice",
    question: "用于检测物体接触面之间相对运动大小和方向的传感器是（）。",
    options: {
      A: "接近觉传感器",
      B: "接触觉传感器",
      C: "滑动觉传感器",
      D: "压觉传感器"
    },
    answer: "C",
    category: "硬件与IO控制"
  },
  {
    id: 288,
    type: "single_choice",
    question: "关于电磁阀的描述不正确的是（）。",
    options: {
      A: "电磁阀一般用于控制",
      B: "电磁阀开关动作慢",
      C: "电磁阀开关动作快",
      D: "电磁阀前一般装有过滤器"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 289,
    type: "single_choice",
    question: "电磁阀在安装前应进行校验检查，铁芯应无卡涩现象，线圈与阀间的（）应合格。",
    options: {
      A: "间隙",
      B: "固定",
      C: "位置",
      D: "绝缘电阻"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 290,
    type: "single_choice",
    question: "我国通用电磁阀的控制信号电压是（）。",
    options: {
      A: "220VAC,12VDC",
      B: "220VAC,24VDC",
      C: "6VDC,12VDC",
      D: "12VDC,24VDC"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 291,
    type: "single_choice",
    question: "传感器主要包含了敏感元件和（）两个组成部分。",
    options: {
      A: "放大电路",
      B: "数据采集电路",
      C: "转换元件",
      D: "滤波元件"
    },
    answer: "C",
    category: "硬件与IO控制"
  },
  {
    id: 292,
    type: "single_choice",
    question: "机器人外部传感器不包括（）传感器。",
    options: {
      A: "力或力矩",
      B: "接近觉",
      C: "触觉",
      D: "位置"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 293,
    type: "single_choice",
    question: "I/O指令用于（）。",
    options: {
      A: "数字信号的输入输出",
      B: "模拟信号的输入输出",
      C: "所有信号的输入输出",
      D: "ABC都不对"
    },
    answer: "C",
    category: "编程与指令"
  },
  {
    id: 294,
    type: "single_choice",
    question: "使工件在夹具中占据正确位置的装置是（）。",
    options: {
      A: "夹紧装置",
      B: "夹具体",
      C: "定位装置",
      D: "分度装置"
    },
    answer: "C",
    category: "通信与集成"
  },
  {
    id: 295,
    type: "single_choice",
    question: "工业机器人的主要机械部分不包括以下哪一部分：（",
    options: {
      A: "末端操作器",
      B: "手掌",
      C: "手腕",
      D: "手臂"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 296,
    type: "single_choice",
    question: "（ ）适用于较长距离和较大物体的探测。",
    options: {
      A: "电磁式传感器",
      B: "超声波传感",
      C: "光反射式传感器",
      D: "静电容式传感器"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 297,
    type: "single_choice",
    question: "工业机器人末端执行器不包括（）",
    options: {
      A: "外夹式",
      B: "内夹式",
      C: "内撑式",
      D: "外撑式"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 298,
    type: "single_choice",
    question: "机器人的驱动方式不包括（）。",
    options: {
      A: "液压",
      B: "电动",
      C: "气动",
      D: "联动"
    },
    answer: "D",
    category: "硬件与IO控制"
  },
  {
    id: 299,
    type: "single_choice",
    question: "作为一个机器人，一般由三个部分组成，不包括（）。",
    options: {
      A: "控制系统",
      B: "计算机系统",
      C: "传感系统",
      D: "机械系统"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 300,
    type: "single_choice",
    question: "设置工业机器人参考点时，在手动模式下控制机器人各关节轴移动至标准零点姿态，然后在校准界面中输入各关节轴的零点值，下列数值为HSR-603正确的零点值的是（）",
    options: {
      A: "0,90,0,0，-90,0",
      B: "0,-90,180,0,90,0",
      C: "0,90,90,90，-90,90",
      D: "90,0,0,0，-90,0"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 301,
    type: "single_choice",
    question: "机器人末端执行器的位置和姿态简称为位姿。在空间坐标系中，位置是和姿态分别是由（）旋转自由度确定。",
    options: {
      A: "6个,6个",
      B: "3个,3个",
      C: "3个,6个",
      D: "6个,3个"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "空间中一个刚体的位置由3个平移自由度（x, y, z）确定，姿态由3个旋转自由度（绕x, y, z轴）确定。"
  },
  {
    id: 302,
    type: "single_choice",
    question: "对于6轴工业机器人，（）关节的转动主要实现位置的改变。",
    options: {
      A: "1、2、3轴",
      B: "2、3、4轴",
      C: "3、4、5轴",
      D: "4、5、6轴"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "前三个轴（基座、肩部、肘部）主要负责机器人末端执行器在空间中的大范围位置移动。"
  },
  {
    id: 303,
    type: "single_choice",
    question: "对于6轴工业机器人，（）关节的转动主要实现姿态的改变。",
    options: {
      A: "1、2、3轴",
      B: "2、3、4轴",
      C: "3、4、5轴",
      D: "4、5、6轴"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "后三个轴（腕部旋转、腕部弯曲、法兰旋转）主要负责调整末端执行器的姿态（方向）。"
  },
  {
    id: 304,
    type: "single_choice",
    question: "对于未安装工具的工业机器人，（）关节的转动无法确定其空间位置。",
    options: {
      A: "7轴",
      B: "6轴",
      C: "5轴",
      D: "4轴"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "6轴是腕部法兰的旋转轴，对于没有工具（即工具坐标系原点与法兰重合）的机器人，这个轴的转动不会改变法兰中心点（TCP）的空间位置，只会改变其姿态。"
  },
  {
    id: 305,
    type: "single_choice",
    question: "机器人的精度主要依存于（）、控制算法误差与分辨率系统误差。",
    options: {
      A: "传动误差",
      B: "关节间隙",
      C: "机械误差",
      D: "连杆机构的挠性"
    },
    answer: "C",
    category: "硬件与IO控制",
    explanation: "机器人的精度是一个综合指标，主要受机械结构本身的制造和装配误差（机械误差）、控制系统的算法误差以及传感器和驱动器的分辨率限制等因素影响。"
  },
  {
    id: 306,
    type: "single_choice",
    question: "工业机器人的制动器通常是按照（）方式工作。",
    options: {
      A: "通电抱闸",
      B: "有效抱闸",
      C: "无效放闸",
      D: "失效抱闸"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "工业机器人伺服电机的制动器通常设计为“失效抱闸”（Fail-Safe），即在断电或失去控制信号时，制动器会自动抱紧，确保机器人停止并保持位置，这是一种安全设计。"
  },
  {
    id: 307,
    type: "single_choice",
    question: "下列不属于机器人专用I/O的是（）。",
    options: {
      A: "数字I/O",
      B: "机器人I/O",
      C: "外围设备I/O",
      D: "操作面板I/O"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "机器人I/O、外围设备I/O、操作面板I/O 是机器人系统中特定功能的I/O信号。而数字I/O是一个通用术语，指代数字输入输出信号，是构成上述专用I/O的基础，本身不是一种“专用”类型。"
  },
  {
    id: 308,
    type: "single_choice",
    question: "步进电机、直流伺服电机、交流伺服电机的英文字母表示依次为：（）。",
    options: {
      A: "SM、DM、AC",
      B: "SM、DC、AC",
      C: "SM、AC、DC",
      D: "SC、AC、DC"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "Stepper Motor (SM), Direct Current Servo Motor (DC), Alternating Current Servo Motor (AC)。"
  },
  {
    id: 309,
    type: "single_choice",
    question: "光电池属于（）。",
    options: {
      A: "外光电效应",
      B: "内光电效应",
      C: "光生伏特效应",
      D: "光热效应"
    },
    answer: "C",
    category: "硬件与IO控制",
    explanation: "光电池（如硅光电池）是基于光生伏特效应工作的器件，光照在半导体PN结上产生电动势。"
  },
  {
    id: 310,
    type: "single_choice",
    question: "力传感器安装在工业机器人上的位置，通常不会在以下哪个位置（）。",
    options: {
      A: "关节驱动器轴上",
      B: "机器人腕部",
      C: "手指指尖",
      D: "机座"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "力/力矩传感器常安装在关节驱动器轴上（测量关节力矩）、机器人腕部（测量腕部受力/力矩）、手指指尖（测量抓取力）。机座主要用于支撑，一般不直接安装力传感器来测量操作力。"
  },
  {
    id: 311,
    type: "single_choice",
    question: "下面哪一项不属于工业机器人子系统（）。",
    options: {
      A: "驱动系统",
      B: "机械结构系统",
      C: "人机交互系统",
      D: "导航系统"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "工业机器人的基本子系统通常包括机械结构系统、驱动系统、控制系统和传感系统（可视为人机交互的一部分）。导航系统更多是移动机器人（AGV/AMR）或特定应用机器人的功能。"
  },
  {
    id: 312,
    type: "single_choice",
    question: "（）是指传感器在其输入信号按同一方式全量程连续多次测量时，相应测量结果的变化程度，即多次测量之间的误差。",
    options: {
      A: "灵敏度",
      B: "重复性",
      C: "精度",
      D: "分辨性"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "重复性（Repeatability）描述传感器在相同条件下，对同一被测量进行连续多次测量所得结果之间的一致程度。"
  },
  {
    id: 313,
    type: "single_choice",
    question: "（）传感器用于检测机器人作业对象及作业环境状态的传感器，也就是测量机器人本身以外传感器。",
    options: {
      A: "内部",
      B: "外部",
      C: "电子",
      D: "电磁"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "外部传感器用于感知机器人外部环境或与外部对象交互的信息，如视觉、触觉、接近觉传感器等。"
  },
  {
    id: 314,
    type: "single_choice",
    question: "内装型PLC与机床之间信息传送则通过CNC的（）电路来实现。",
    options: {
      A: "输入输出接口",
      B: "以太网接口",
      C: "RS232接口",
      D: "光电隔离电路"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "内装型PLC（内置式PLC）通常集成在CNC装置内，它与机床侧的信号交换通过CNC装置的I/O接口电路完成。"
  },
  {
    id: 315,
    type: "single_choice",
    question: "伺服电机是将电脉冲信号转换成（）的变换驱动部件。",
    options: {
      A: "角位移",
      B: "直线位移",
      C: "数字信号",
      D: "模拟信号"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "伺服电机接收控制信号（常为脉冲信号），将其转换为精确的角位移（或角速度）输出，从而实现精确的位置、速度控制。"
  },
  {
    id: 316,
    type: "single_choice",
    question: "传感器的电源一般采用（）。",
    options: {
      A: "直流电源",
      B: "交流电源",
      C: "脉冲电源",
      D: "变频电源"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "大多数传感器（尤其是电子传感器）需要稳定的直流电源供电，以保证其正常工作和测量精度。"
  },
  {
    id: 317,
    type: "single_choice",
    question: "配置机器人外部I/O信号，可以实现外部信号控制程序停止的是（）。",
    options: {
      A: "iPRG_START",
      B: "oPRG_PAUSE",
      C: "iPRG_KILL",
      D: "oPRG_KILLED"
    },
    answer: "C",
    category: "硬件与IO控制",
    explanation: "iPRG_KILL 信号通常用于从外部紧急停止正在运行的程序。"
  },
  {
    id: 318,
    type: "single_choice",
    question: "关于伺服驱动器和编码器信号的连接，错误的说法是（）。",
    options: {
      A: "插头上未用到的引脚也必须连接上导线",
      B: "编码器信号电缆，要用带有屏蔽层的双绞线",
      C: "编码器电缆的屏蔽层接到电机侧的接地端子上",
      D: "信号电缆与电源电缆不要放到同一线槽内"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "未使用的引脚不应随意连接导线，这可能导致短路或干扰。正确的做法是根据实际需要连接必要的引脚。"
  },
  {
    id: 319,
    type: "single_choice",
    question: "机器人运动时，每个关节的运动通过驱动装置和（）实现。",
    options: {
      A: "传动机构",
      B: "执行机构",
      C: "步进电机",
      D: "控制程序"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "驱动装置（如电机）提供动力，通过传动机构（如减速器、同步带、滚珠丝杠等）将动力传递给关节，实现关节运动。"
  },
  {
    id: 320,
    type: "single_choice",
    question: "步进电动机，又称电脉冲马达，是通过（）决定转角位移的一种伺服电动机。",
    options: {
      A: "脉冲的宽度",
      B: "脉冲的相位",
      C: "脉冲的占空比",
      D: "脉冲的数量"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "步进电机的角位移量与输入的脉冲数量成正比。每个脉冲使电机转动一个固定的角度（步距角）。"
  },
  {
    id: 321,
    type: "single_choice",
    question: "条件等待指令中，等待时间的单位是（）。",
    options: {
      A: "分钟",
      B: "秒",
      C: "毫秒",
      D: "微秒"
    },
    answer: "C",
    category: "编程与指令",
    explanation: "在大多数机器人编程语言中，条件等待或延时指令（如WAIT_TIME）的时间单位通常是毫秒（ms）。"
  },
  {
    id: 322,
    type: "single_choice",
    question: "机器人控制柜内部伺服驱动器绿色指示灯快速闪烁，代表（）。",
    options: {
      A: "主电源闭合",
      B: "伺服使能成功",
      C: "初始化成功",
      D: "网络安全运行"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "伺服驱动器的绿色指示灯快速闪烁通常表示驱动器已准备好，伺服使能（Servo On）成功，可以接收运动指令。"
  },
  {
    id: 323,
    type: "single_choice",
    question: "配置机器人外部 I/O 信号，可以实现外部信号控制程序加载的是（）。",
    options: {
      A: "iPRG_LOAD",
      B: "iENABLE",
      C: "oENABLE_STATE",
      D: "oPRG_READY"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "iPRG_LOAD 信号用于从外部触发加载指定的程序。"
  },
  {
    id: 324,
    type: "single_choice",
    question: "（）指令用来等待数字输入信号为1。",
    options: {
      A: "wait(D_OUT[10],ON)",
      B: "wait(D_IN[10],ON)",
      C: "wait(D_OUT[10],OFF)",
      D: "wait(D_IN[10],OFF)"
    },
    answer: "B",
    category: "编程与指令",
    explanation: "等待数字输入信号（D_IN）变为ON（1）状态。"
  },
  {
    id: 325,
    type: "single_choice",
    question: "PLC 在工作时采用（）原理。",
    options: {
      A: "循环扫描",
      B: "输入输出",
      C: "集中采样",
      D: "分段输出"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "PLC的基本工作原理是循环扫描（Cycle Scan），依次执行输入采样、程序执行、输出刷新等阶段。"
  },
  {
    id: 326,
    type: "single_choice",
    question: "PLC 外部接点坏了以后，换到另外一个好的点上后，用软件中的（）菜单进行操作可实现程序快速修改。",
    options: {
      A: "编辑",
      B: "替换",
      C: "监控",
      D: "写出"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "在PLC编程软件中，通常有“替换”或“查找替换”功能，可以快速将程序中旧的I/O点地址替换为新的地址。"
  },
  {
    id: 327,
    type: "single_choice",
    question: "PLC 的一输入行程开关动作后，输入继电器无响应，同时指示灯也不亮。下列对故障的分析不正确的是（）。",
    options: {
      A: "行程开关故障",
      B: "CPU 模块故障",
      C: "输入模块故障",
      D: "传感器供电电源故障"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "行程开关是无源器件，它本身不需要传感器供电电源。如果行程开关动作后PLC无响应，问题可能在于行程开关本身、输入模块通道或CPU模块。传感器供电电源故障通常影响有源传感器。"
  },
  {
    id: 328,
    type: "single_choice",
    question: "下列传感器中属于开关量传感器的是（）。",
    options: {
      A: "热电阻",
      B: "温度开关",
      C: "加热开关",
      D: "热电偶"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "温度开关是一种根据温度变化输出开关信号（ON/OFF）的传感器。热电阻和热电偶是模拟量传感器。加热开关是执行器。"
  },
  {
    id: 329,
    type: "single_choice",
    question: "华数 HIO-1121 开关量输出子模块：提供（）路开关量输出。",
    options: {
      A: "8",
      B: "16",
      C: "21",
      D: "32"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "根据型号命名规则和常见配置，HIO-1121 通常指16路开关量输出模块。"
  },
  {
    id: 330,
    type: "single_choice",
    question: "不属于 PLC 输出点类型的是（）。",
    options: {
      A: "继电器",
      B: "可控硅",
      C: "晶体管",
      D: "IC 驱动电路"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "PLC输出点常见的类型有继电器输出、晶体管输出（通常是NPN或PNP型）和双向可控硅（TRIAC）输出，用于驱动不同类型的负载。IC驱动电路不是PLC输出点的基本类型。"
  },
  {
    id: 331,
    type: "single_choice",
    question: "皮带机运行过程因负荷过大，造成电机温度过高，可采取的处理方法是（）。",
    options: {
      A: "更换电机",
      B: "调紧拉紧装置",
      C: "停止运行",
      D: "减轻负荷"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "电机因负荷过大而过热，最直接有效的解决方法是减轻负载，使电机在额定工况下运行。"
  },
  {
    id: 332,
    type: "single_choice",
    question: "以下哪个元件不属于光电编码器的主要元件。（）",
    options: {
      A: "多路光源",
      B: "光敏元件",
      C: "电阻器",
      D: "光电码盘"
    },
    answer: "C",
    category: "硬件与IO控制",
    explanation: "光电编码器的核心部件包括光源、光电码盘和光敏元件（光电探测器）。电阻器不是其主要组成部分。"
  },
  {
    id: 333,
    type: "single_choice",
    question: "传感器包括以下三个功能部件：敏感元件、传感元件、（）元件。",
    options: {
      A: "辅助",
      B: "控制",
      C: "执行",
      D: "测量"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "传感器的基本组成通常包括敏感元件（感受被测量）、传感元件（将感受到的被测量转换成可用输出信号）和测量转换电路（将传感元件输出信号转换为标准电信号）。"
  },
  {
    id: 334,
    type: "single_choice",
    question: "通常机器人的力传感器不包括（）。",
    options: {
      A: "握力传感器",
      B: "腕力传感器",
      C: "关节力传感器",
      D: "指力传感器"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "机器人常用的力传感器包括腕力传感器（安装在腕部）、关节力传感器（测量关节力矩）和指力传感器（安装在手指上）。'握力传感器'不是一个标准的机器人传感器分类。"
  },
  {
    id: 335,
    type: "single_choice",
    question: "机器人作业过程分两类，一类是非接触式，一类是接触式。下面哪种机器人属于非接触式作业机器人。（ ）。",
    options: {
      A: "拧螺钉机器人",
      B: "装配机器人",
      C: "抛光机器人",
      D: "弧焊机器人"
    },
    answer: "D",
    category: "应用技术",
    explanation: "弧焊机器人在焊接过程中，焊枪与工件之间有电弧，属于非接触式作业（物理上不直接接触）。拧螺钉、装配、抛光都需要机器人末端执行器与工件直接接触。"
  },
  {
    id: 336,
    type: "single_choice",
    question: "机器人终端效应器（手）的力量来自（）。",
    options: {
      A: "机器人的全部关节",
      B: "机器人手部的关节",
      C: "决定机器人手部位置的各关节",
      D: "决定机器人手部位姿的各个关节"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "机器人末端执行器（手）的力量和力矩是由所有关节（特别是腕部关节）的驱动力通过连杆机构传递和合成得到的，这些关节共同决定了手部的位姿和施加的力。"
  },
  {
    id: 337,
    type: "single_choice",
    question: "机器人电机编码器分为（ ）。 ① 增量式  (2) 绝对式  (3) 模拟量  (4) 编码盘",
    options: {
      A: "①②③④",
      B: "①②",
      C: "①②③",
      D: "①③④"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "机器人电机编码器主要分为增量式编码器和绝对式编码器两种基本类型。编码盘是编码器的物理部件，模拟量不是编码器的分类。"
  },
  {
    id: 338,
    type: "single_choice",
    question: "若将计算机比喻成人的大脑，那么传感器则可以比喻为（）。",
    options: {
      A: "眼睛",
      B: "感觉器官",
      C: "手",
      D: "皮肤"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "传感器用于感知外界信息，如同人的感觉器官（眼、耳、鼻、舌、皮肤等）收集环境数据传递给大脑。"
  },
  {
    id: 339,
    type: "single_choice",
    question: "机器人视觉系统是一种（）光传感系统，同时集成软硬件，综合现代计算机、光学和电子技术。",
    options: {
      A: "非接触式",
      B: "接触式",
      C: "自动控制",
      D: "智能控制"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "视觉系统通过摄像头捕捉光线信息，无需与被测物体直接接触，属于非接触式传感。"
  },
  {
    id: 340,
    type: "single_choice",
    question: "现在的机器人采用压觉传感器一般都是采用（），当受到压力时，产生电流。",
    options: {
      A: "压觉材料",
      B: "压阻材料",
      C: "压磁材料",
      D: "压敏材料"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "压敏材料（如压敏电阻、压电材料）在受到压力时其电学特性（如电阻、电荷）会发生变化，常用于压觉传感器。"
  },
  {
    id: 341,
    type: "single_choice",
    question: "将电阻R和电容C串联后再并联到继电器或电源开关两端所构成的RC吸收电路，其作用是（）。",
    options: {
      A: "抑制共模噪声",
      B: "抑制差模噪声",
      C: "克服串扰",
      D: "消除电火花干扰"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "RC吸收电路（或称阻容吸收电路、缓冲电路）主要用于吸收感性负载（如继电器线圈、电机）在断开瞬间产生的反向电动势，抑制由此产生的电火花和电磁干扰。"
  },
  {
    id: 342,
    type: "single_choice",
    question: "将电阻应变片贴在()上，就可以分别做成测力、位移、加速度等参数的传感器。",
    options: {
      A: "质量块",
      B: "导体",
      C: "弹性元件",
      D: "机器组件"
    },
    answer: "C",
    category: "硬件与IO控制",
    explanation: "电阻应变片工作原理是将应变片粘贴在弹性元件上，当弹性元件受力发生弹性变形时，应变片也随之变形，其电阻值发生变化，通过测量电阻变化可以推算出力、位移或加速度等物理量。"
  },
  {
    id: 343,
    type: "single_choice",
    question: "蜂鸣器中发出\"嘀.....嘀.....\"声的压电片发声原理是利用压电材料的（）。",
    options: {
      A: "应变效应",
      B: "电涡流效应",
      C: "压电效应",
      D: "逆压电效应"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "蜂鸣器中的压电片是通过施加电压使其发生机械振动来发声的，这是逆压电效应（电致伸缩效应）的应用。压电效应是指机械应力产生电荷。"
  },
  {
    id: 344,
    type: "single_choice",
    question: "配置机器人外部I/O信号，可以实现外部信号控制伺服使能的是（）。",
    options: {
      A: "iPRG_LOAD",
      B: "iENABLE",
      C: "oENABLE_STATE",
      D: "oPRG_READY"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "iENABLE 信号通常用于从外部控制机器人的伺服使能状态（开启或关闭伺服电源）。"
  },
  {
    id: 345,
    type: "single_choice",
    question: "光敏二极管属于（）。",
    options: {
      A: "外光电效应",
      B: "内光电效应",
      C: "光生伏特效应",
      D: "光热效应"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "光敏二极管（光电二极管）是基于内光电效应（光电导效应）工作的半导体器件，光照会改变其内部载流子浓度，从而改变其电导率或产生光生电动势。"
  },
  {
    id: 346,
    type: "single_choice",
    question: "下面哪种传感器不属于触觉传感器（ ）。",
    options: {
      A: "接近觉传感器",
      B: "接触觉传感器",
      C: "压觉传感器",
      D: "热敏电阻"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "接近觉、接触觉、压觉传感器都属于广义的触觉传感器范畴，用于感知物体与机器人之间的接触或接近状态。热敏电阻是温度传感器。"
  },
  {
    id: 347,
    type: "single_choice",
    question: "下列光电器件是基于光电导效应的是（ ）。",
    options: {
      A: "光电管",
      B: "光电池",
      C: "光敏电阻",
      D: "光敏二极管"
    },
    answer: "C",
    category: "硬件与IO控制",
    explanation: "光敏电阻（又称光导管）是典型的基于光电导效应的器件，光照使其电阻值发生变化。光电管基于外光电效应，光电池基于光生伏特效应，光敏二极管也基于内光电效应（但机制略有不同）。"
  },
  {
    id: 348,
    type: "single_choice",
    question: "基于光生伏特效应工作的光电器件是（ ）。",
    options: {
      A: "光电管",
      B: "光电池",
      C: "光敏电阻",
      D: "光敏二极管"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "光电池（如硅光电池）是利用光照在半导体PN结上直接产生电动势（电压）的器件，这是光生伏特效应的典型应用。"
  },
  {
    id: 349,
    type: "single_choice",
    question: "某些电介质，当在电介质极化方向施加电场，它会产生变形，这种现象称为( )。",
    options: {
      A: "负压电效应",
      B: "逆压电效应",
      C: "无压电效应",
      D: "正压电效应"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "逆压电效应（也称电致伸缩效应）是指在外加电场作用下，压电材料发生机械变形的现象。正压电效应则是指机械应力产生电荷。"
  },
  {
    id: 350,
    type: "single_choice",
    question: "应变式传感器采用半桥差动等臂电桥转换电路时，若电源电压为U时，其输出电压Uo为（ ）。",
    options: {
      A: "(ΔRU)/(2R)",
      B: "(ΔRU)/(4R)",
      C: "(ΔRU)/(R)",
      D: "(ΔRU)/(8R)"
    },
    answer: "C",
    category: "硬件与IO控制",
    explanation: "对于半桥差动等臂电桥，两个桥臂的电阻变化分别为+ΔR和-ΔR。输出电压 Uo = U * (ΔR/R)。题目中选项C符合此公式。"
  },
  {
    id: 351,
    type: "single_choice",
    question: "（）指令可用来等待数字输出信号为0。",
    options: {
      A: "wait(D_OUT[11],ON)",
      B: "wait(D_IN[11],ON)",
      C: "wait(D_OUT[11],OFF)",
      D: "wait(D_IN[11],OFF)"
    },
    answer: "C",
    category: "编程与指令",
    explanation: "等待数字输出信号（D_OUT）变为OFF（0）状态。"
  },
  {
    id: 352,
    type: "single_choice",
    question: "电桥测量电路的作用是把传感器的参数变化为( )的输出。",
    options: {
      A: "电阻",
      B: "电容",
      C: "电压",
      D: "电荷"
    },
    answer: "C",
    category: "硬件与IO控制",
    explanation: "电桥电路（如惠斯通电桥）常用于将电阻、电容或电感等参数的变化转换为易于测量和处理的电压信号输出。"
  },
  {
    id: 353,
    type: "single_choice",
    question: "下面（）不是PLC输入输出滞后时间的组成部分。",
    options: {
      A: "输入模块滤波时间",
      B: "输出模块滤波时间",
      C: "扫描工作方式产生的滞后时间",
      D: "内部处理所用的时间"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "PLC的I/O滞后时间主要包括输入滤波延迟、输出滤波延迟以及扫描周期导致的延迟。'内部处理所用的时间'是CPU执行程序的时间，虽然影响整体响应，但不直接构成I/O滞后时间的定义部分。"
  },
  {
    id: 354,
    type: "single_choice",
    question: "PLC中的输入继电器采用（）进制的数字编号。",
    options: {
      A: "二",
      B: "八",
      C: "十",
      D: "十六"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "为了方便表示和寻址I/O点，许多PLC（如三菱、欧姆龙等）采用八进制编号方式对输入输出继电器进行编号。"
  },
  {
    id: 355,
    type: "single_choice",
    question: "传感器在整个测量范围内所能辨别的被测量的最小变化量，或者所能辨别的不同被测量的个数，被称之为传感器的（）。",
    options: {
      A: "精度",
      B: "重复性",
      C: "分辨率",
      D: "灵敏度"
    },
    answer: "C",
    category: "硬件与IO控制",
    explanation: "分辨率（Resolution）是指传感器能够检测到的被测量的最小变化量，是衡量传感器分辨能力的指标。"
  },
  {
    id: 356,
    type: "single_choice",
    question: "PLC在工业生产现场工作，对PLC的I/O接口的要求说法正确的是（）。",
    options: {
      A: "应具有良好的接地能力",
      B: "应具有良好的抗干扰能力",
      C: "应具有断电保持功能",
      D: "应具有报警功能"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "工业现场环境复杂，存在大量电磁干扰源。因此，PLC的I/O接口必须具备良好的抗干扰能力，以保证信号的准确传输和系统的稳定运行。"
  },
  {
    id: 357,
    type: "single_choice",
    question: "在输入处理阶段，PLC以扫描方式按循序将所有输入信号的状态读入到（）中存储起来。",
    options: {
      A: "CPU",
      B: "输入映像寄存器",
      C: "输出映像寄存器",
      D: "系统程序存储器"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "PLC在输入采样阶段，会将所有输入端子的状态读入到输入映像寄存器（Input Image Register）中，供后续程序执行时使用。"
  },
  {
    id: 358,
    type: "single_choice",
    question: "国内外PLC各生产厂家都把（）作为第一用户编程语言。",
    options: {
      A: "梯形图",
      B: "指令表",
      C: "逻辑功能图",
      D: "C语言"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "梯形图（Ladder Diagram, LD）因其直观、易懂，接近继电器控制逻辑，是目前最广泛使用的PLC编程语言。"
  },
  {
    id: 359,
    type: "single_choice",
    question: "在输出处理阶段，PLC以扫描方式按循序将所有输入信号的状态读入到（）中存储起来。",
    options: {
      A: "CPU",
      B: "输入映像寄存器",
      C: "输出映像寄存器",
      D: "系统程序存储器"
    },
    answer: "C",
    category: "硬件与IO控制",
    explanation: "在程序执行阶段，PLC会根据逻辑运算结果更新输出映像寄存器（Output Image Register）中的状态。在输出刷新阶段，再将输出映像寄存器的内容传送到实际的输出端子。"
  },
  {
    id: 360,
    type: "single_choice",
    question: "示教器菜单栏（）更改机器人输入信号配置。",
    options: {
      A: "机器人参数",
      B: "用户PLC配置",
      C: "外部运行配置",
      D: "输入映射到输出"
    },
    answer: "C",
    category: "硬件与IO控制",
    explanation: "机器人输入信号的配置，特别是与外部设备交互的信号，通常在示教器的“外部运行配置”或类似名称的菜单下进行设置。"
  },
  {
    id: 361,
    type: "single_choice",
    question: "华数机器人INPUT输入板（HIO-1111）输入的点数是（）个。",
    options: {
      A: "8",
      B: "16",
      C: "11",
      D: "10"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "根据型号命名规则和常见配置，HIO-1111 通常指16路开关量输入模块。"
  },
  {
    id: 362,
    type: "single_choice",
    question: "华数HIO-1161通讯模块电源电压（）",
    options: {
      A: "DC32V",
      B: "DC24V",
      C: "AC110V",
      D: "AC220V"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "工业自动化设备，特别是I/O模块和PLC，常用的标准直流电源电压是DC24V。"
  },
  {
    id: 363,
    type: "single_choice",
    question: "下列不属于华数机器人I/O模块的是（）",
    options: {
      A: "NPN输入模块",
      B: "PNP输入模块",
      C: "NPN输出模块",
      D: "PNP输出模块"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "常见的I/O模块类型包括NPN输入、PNP输入、NPN输出。PNP输出模块相对少见，可能题目意在指出一种不常见的或错误的分类。"
  },
  {
    id: 364,
    type: "single_choice",
    question: "工业中传感器控制电压一般是（）伏。",
    options: {
      A: "24",
      B: "36",
      C: "110",
      D: "220"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "在工业控制领域，为了安全和标准化，传感器、PLC、变送器等设备的控制电源和信号电平常用DC24V。"
  },
  {
    id: 365,
    type: "single_choice",
    question: "以下属于PLC外围输出故障的是（）",
    options: {
      A: "电磁阀故障",
      B: "继电器故障",
      C: "电机故障",
      D: "以上都是"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "PLC的输出通常连接到执行器，如电磁阀、继电器、接触器（控制电机）等。这些执行器的故障都属于PLC外围输出故障。"
  },
  {
    id: 366,
    type: "single_choice",
    question: "PLC输出模块常见的故障是（）。 ① 供电电源故障  (2) 端子接线故障  (3) 模板安装故障  (4) 现场操作故障",
    options: {
      A: "①②③④",
      B: "②③④",
      C: "①③④",
      D: "①②④"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "PLC输出模块的故障可能来源于供电问题、接线松动或错误、模块安装不当（如插拔不到位）以及现场操作失误（如过载、短路）等多种原因。"
  },
  {
    id: 367,
    type: "single_choice",
    question: "配置机器人外部I/O信号，可以实现外部信号控制程序暂停的是（）。",
    options: {
      A: "iPRG_START",
      B: "iPRG_PAUSE",
      C: "iPRG_RESUME",
      D: "oPRG_PAUSE"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "iPRG_PAUSE 信号用于从外部触发暂停正在运行的程序。"
  },
  {
    id: 368,
    type: "single_choice",
    question: "（）是一种旋转式测量元件，通常装在被检测轴上，随被检测轴一起转动。可将被测轴的角位移转换成增量脉冲形式或绝对式的代码形式。",
    options: {
      A: "旋转变压器",
      B: "编码器",
      C: "圆光栅",
      D: "测速发电机"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "编码器（Encoder）是将角位移或角速度转换为数字信号（脉冲或代码）的传感器，广泛应用于伺服电机反馈。"
  },
  {
    id: 369,
    type: "single_choice",
    question: "检测各种非金属制品，应选用（）型的接近开关。",
    options: {
      A: "高频振荡",
      B: "永磁型及磁敏元件",
      C: "电容",
      D: "霍尔"
    },
    answer: "C",
    category: "硬件与IO控制",
    explanation: "电容式接近开关可以检测各种材料，包括金属和非金属（如塑料、液体、粉末等），因为它检测的是电容的变化。高频振荡型（电感式）主要用于金属检测。"
  },
  {
    id: 370,
    type: "single_choice",
    question: "对现有工业机器人控制器存在的问题表述正确的是（）。",
    options: {
      A: "软件兼容性好",
      B: "软件容错性高",
      C: "软件扩展性好",
      D: "开放性差"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "传统工业机器人控制器往往由各厂家自行开发，软硬件紧密耦合，开放性较差，不利于第三方集成和二次开发。"
  },
  {
    id: 371,
    type: "single_choice",
    question: "绝对式光电编码器其分辨率取决于二进制编码的（ ）。",
    options: {
      A: "位数",
      B: "码道",
      C: "0",
      D: "1"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "绝对式编码器的分辨率由其输出二进制码的位数决定。n位二进制码可以表示2^n个不同的位置。码道数通常与位数相关，但直接决定分辨率的是位数。"
  },
  {
    id: 372,
    type: "single_choice",
    question: "假设检测角度精度为0.1，则增量式光电编码器的透光缝隙数不少于（）。",
    options: {
      A: "500",
      B: "3600",
      C: "6000",
      D: "无法确定"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "一圈360度，精度要求0.1度，则需要 360 / 0.1 = 3600 个脉冲。增量式编码器通常每转产生与透光缝隙数相等的脉冲数（或其倍数），因此缝隙数不少于3600。"
  },
  {
    id: 373,
    type: "single_choice",
    question: "传感器的输出量通常为（）。",
    options: {
      A: "非电量信号",
      B: "电量信号",
      C: "位移信号",
      D: "光信号"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "传感器的核心功能是将感受到的非电量信息（如温度、压力、光强等）按一定规律转换成便于传输、处理的电量信号（如电压、电流、频率等）。"
  },
  {
    id: 374,
    type: "single_choice",
    question: "机器人外部传感器有（）。 ① 视觉  (2) 触觉  (3) 压觉  (4) 滑觉",
    options: {
      A: "①②③④",
      B: "①②",
      C: "①②③",
      D: "①③④"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "这些都是机器人常用的外部传感器类型，用于感知环境和与物体交互。"
  },
  {
    id: 375,
    type: "single_choice",
    question: "以下那个是循环指令（）。",
    options: {
      A: "WHILE...ENDWHILE",
      B: "if...endif",
      C: "WAITTIME",
      D: "SLEEP"
    },
    answer: "A",
    category: "编程与指令",
    explanation: "WHILE...ENDWHILE 是条件循环指令，当条件满足时重复执行中间的程序段。"
  },
  {
    id: 376,
    type: "single_choice",
    question: "()指令的功能是根据制定的次数，重复执行对应程序。",
    options: {
      A: "IF",
      B: "FOR",
      C: "WAIT",
      D: "DO"
    },
    answer: "B",
    category: "编程与指令",
    explanation: "FOR循环指令根据设定的起始值、结束值和步长，重复执行指定次数的程序。"
  },
  {
    id: 377,
    type: "single_choice",
    question: "以下不属于运动参数的是()。",
    options: {
      A: "VEL",
      B: "CNT",
      C: "ACC",
      D: "TCPD"
    },
    answer: "D",
    category: "编程与指令",
    explanation: "VEL (Velocity) 速度, CNT (Continuous) 转弯半径/连续性, ACC (Acceleration) 加速度，都是控制机器人运动过程的参数。TCPD (Tool Center Point Distance?) 不是标准的运动控制参数，更可能是工具坐标系相关的设定。"
  },
  {
    id: 378,
    type: "single_choice",
    question: "通常对机器人进行复位时，需要（）。",
    options: {
      A: "末端执行器上无夹具",
      B: "机器人回工作原点",
      C: "夹紧气缸松开",
      D: "以上都是"
    },
    answer: "D",
    category: "基础知识与安全",
    explanation: "机器人复位（回零/初始化）时，通常要求处于安全状态，包括无负载、回到已知参考位置、释放夹具等，以确保过程安全和位置准确。"
  },
  {
    id: 379,
    type: "single_choice",
    question: "作业路径通常用()坐标系相对于工件坐标系的运动来描述。",
    options: {
      A: "手爪",
      B: "固定",
      C: "运动",
      D: "工具"
    },
    answer: "D",
    category: "编程与指令",
    explanation: "在机器人编程中，描述作业路径（如焊接、涂胶轨迹）时，通常是以工具坐标系（Tool Center Point, TCP）为参考点，相对于工件坐标系（Work Object Coordinate System）进行编程。"
  },
  {
    id: 380,
    type: "single_choice",
    question: "工业机器人应用编程考核平台机器人HSR-JR603的自由度是（）。",
    options: {
      A: "3个",
      B: "4个",
      C: "5个",
      D: "6个"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "HSR-JR603 是一款6轴关节型工业机器人。"
  },
  {
    id: 381,
    type: "single_choice",
    question: "在示教器中对已打开程序可以给程序添加注释，注释要求（）。 A.只能以英文进行注释 B.只能以中文进行注释 C.中英文都可以进行注释 D.以上都可以",
    options: {
      A: "只能以英文进行注释",
      B: "只能以中文进行注释",
      C: "中英文都可以进行注释",
      D: "以上都可以"
    },
    answer: "A",
    category: "编程与指令",
    explanation: "根据题目描述，参考答案是A，即只能以英文进行注释。"
  },
  {
    id: 382,
    type: "single_choice",
    question: "示教器中对已打开程序，可以对（）程序进行复制和粘贴。",
    options: {
      A: "一行",
      B: "两行",
      C: "三行",
      D: "多行"
    },
    answer: "D",
    category: "编程与指令",
    explanation: "现代示教器通常支持选择和复制粘贴多行程序代码。"
  },
  {
    id: 383,
    type: "single_choice",
    question: "工业机器人涂胶的轨迹如果是一个圆形，至少需要（）C指令。",
    options: {
      A: "1条",
      B: "2条",
      C: "3条",
      D: "4条"
    },
    answer: "B",
    category: "编程与指令",
    explanation: "使用圆弧运动指令（C或CIRC），一个完整的圆通常需要两条圆弧指令来完成。"
  },
  {
    id: 384,
    type: "single_choice",
    question: "关于循环指令WHILE和FOR，下列说法正确的是（）。 A.WHILE指令是针对运动的循环指令 B.WHILE指令是条件不满足后执行的循环指令 C.FOR指令是带步进的有限的循环指令 D.以上说法都不正确",
    options: {
      A: "WHILE指令是针对运动的循环指令",
      B: "WHILE指令是条件不满足后执行的循环指令",
      C: "FOR指令是带步进的有限的循环指令",
      D: "以上说法都不正确"
    },
    answer: "C",
    category: "编程与指令",
    explanation: "FOR指令通常有明确的起始、结束和步进值，执行次数是有限且可预知的。WHILE是条件循环，只要条件满足就执行。"
  },
  {
    id: 385,
    type: "single_choice",
    question: "LR表示（ )寄存器。",
    options: {
      A: "关节坐标",
      B: "笛卡尔坐标",
      C: "数据",
      D: "整型数值"
    },
    answer: "B",
    category: "编程与指令",
    explanation: "在许多机器人编程语言中，LR (Linear Register) 通常用于存储笛卡尔坐标（X, Y, Z, W, P, R）信息。"
  },
  {
    id: 386,
    type: "single_choice",
    question: "机器人示教器面板上显示的程序的运行方式有连续和单步方式，以下说法正确的是（）。",
    options: {
      A: "单步方式程序不停顿地运行，直至程序结尾。",
      B: "连续方式程序每次点击开始按钮之后只运行一行。",
      C: "单步方式程序每次点击开始按钮之后只运行一行。",
      D: "以上说法都不正确"
    },
    answer: "C",
    category: "编程与指令",
    explanation: "单步模式下，每次触发（如按下启动按钮）程序执行一行指令。连续模式下，程序会连续不断地执行直到结束或被暂停。"
  },
  {
    id: 387,
    type: "single_choice",
    question: "工业机器人按用途可分为：（） ① 装配机器人  ② 焊接机器人；  (3) 搬运机器人；  (4) 智能机器人；  (5) 喷涂机器人。",
    options: {
      A: "①②③④",
      B: "①②③⑤",
      C: "①③④⑤",
      D: "②③④⑤"
    },
    answer: "B",
    category: "应用技术",
    explanation: "装配、焊接、搬运、喷涂都是工业机器人的具体应用领域。'智能机器人'是一个更宽泛的概念，不是按用途细分的类别。"
  },
  {
    id: 388,
    type: "single_choice",
    question: "使用焊枪示教前检查焊枪的均压装置是否良好，动作是否正常，同时对电极头的要求是（）。",
    options: {
      A: "更换新的电机头",
      B: "使用磨耗量大的电极头",
      C: "新旧都行",
      D: "电极头无影响"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "为了保证焊接质量和安全，示教前应使用状态良好的焊枪和新的电极头。"
  },
  {
    id: 389,
    type: "single_choice",
    question: "如程序示例FOR R[1]=0 TO 3 BY 1，步进值为（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "B",
    category: "编程与指令",
    explanation: "FOR循环语句中的'BY 1'明确指定了步进值（增量）为1。"
  },
  {
    id: 390,
    type: "single_choice",
    question: "如程序示例FOR R[1]=0 TO 3 BY 1，ENDFOR，FOR循环（）次。",
    options: {
      A: "4",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "A",
    category: "编程与指令",
    explanation: "循环从0开始，到3结束，步进为1，即执行R[1]=0, 1, 2, 3，共4次。"
  },
  {
    id: 391,
    type: "single_choice",
    question: "以下关于顺序控制流程图描述正确的是：（）。",
    options: {
      A: "系统从一个状态退出进入另一个状态必须满足转移条件",
      B: "每个状态都必须有动作",
      C: "状态之间的有向线段必须有箭头",
      D: "系统工作的任意时刻只能有一个状态是活动的"
    },
    answer: "A",
    category: "编程与指令",
    explanation: "在顺序功能图（SFC）中，状态（步）之间的转换确实需要满足特定的转移条件。其他选项描述不够严谨或不完全正确。"
  },
  {
    id: 392,
    type: "single_choice",
    question: "（）年代是工业机器人进入成长期，机器人开始向实用化发展，并被用于焊接和喷涂作业中。",
    options: {
      A: "40",
      B: "50",
      C: "60",
      D: "70"
    },
    answer: "C",
    category: "应用技术",
    explanation: "20世纪60年代，工业机器人技术逐渐成熟，开始在汽车等行业得到实际应用，如点焊和喷涂。"
  },
  {
    id: 393,
    type: "single_choice",
    question: "2013年，全球第一大工业机器人市场是（）。",
    options: {
      A: "中国",
      B: "美国",
      C: "日本",
      D: "欧洲"
    },
    answer: "A",
    category: "应用技术",
    explanation: "根据国际机器人联合会（IFR）等机构的数据，中国在2013年已成为全球最大的工业机器人市场。"
  },
  {
    id: 394,
    type: "single_choice",
    question: "工业机器人（ ）适合夹持圆柱形工件。",
    options: {
      A: "V型手指",
      B: "平面指",
      C: "尖指",
      D: "特型指"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "V型手指的设计可以自动定心，适合抓取圆柱形工件。"
  },
  {
    id: 395,
    type: "single_choice",
    question: "工业机器人由主体、驱动系统和（）三个基本部分组成。",
    options: {
      A: "机柜",
      B: "控制系统",
      C: "计算机",
      D: "气动系统"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "工业机器人的三大核心组成部分是机械主体（执行机构）、驱动系统（动力源）和控制系统（大脑）。"
  },
  {
    id: 396,
    type: "single_choice",
    question: "在执行以下程序过程中，工业机器人将调用几次abc子程序（）。 R[1]=5 LBL[1] IF R[1]<1 JMP LBL[2] CALL abc R[1]=R[1]- 1 JMP LBL[1]",
    options: {
      A: "5次",
      B: "4次",
      C: "3次",
      D: "6次"
    },
    answer: "A",
    category: "编程与指令",
    explanation: "R[1]从5开始，每次循环减1，直到R[1]<1（即R[1]=0）时跳出。循环体执行了5次（R[1]=5,4,3,2,1），所以CALL abc执行了5次。"
  },
  {
    id: 397,
    type: "single_choice",
    question: "按坐标形式分类，机器人可分为（）等几种基本类型。 ① 直角坐标型  (2) 圆柱坐标型  (3) 球坐标型  (4) 关节坐标型  (5) 位置坐标型",
    options: {
      A: "①②③④",
      B: "①②③⑤",
      C: "①④⑤",
      D: "①②③④⑤"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "常见的机器人结构类型包括直角坐标型（笛卡尔）、圆柱坐标型、球坐标型（极坐标）、关节坐标型（多关节）。'位置坐标型'不是标准分类。"
  },
  {
    id: 398,
    type: "single_choice",
    question: "工业机器人精度是指（）。 ① 定位精度  (2) 重复定位精度  (3) 运动精度  (4) 重复运动精度",
    options: {
      A: "①②",
      B: "①②③",
      C: "①④",
      D: "①③④"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "工业机器人精度的核心指标是定位精度（到达指定位置的准确度）和重复定位精度（多次到达同一位置的一致性）。运动精度和重复运动精度不是标准术语。"
  },
  {
    id: 399,
    type: "single_choice",
    question: "工业机器人可以用于以下哪些工作（）。 ① 搬运  (2) 焊接  (3) 组装  (4) 喷漆",
    options: {
      A: "①②③④",
      B: "①②③",
      C: "①②④",
      D: "①③④"
    },
    answer: "A",
    category: "应用技术",
    explanation: "工业机器人广泛应用于搬运、焊接、组装（装配）、喷漆等多种工业场景。"
  },
  {
    id: 400,
    type: "single_choice",
    question: "在示教器数字I/O控制界面，下列操作（）不能执行。",
    options: {
      A: "切换",
      B: "值",
      C: "说明",
      D: "删除"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "在示教器的I/O监控界面，通常可以查看和强制（切换）I/O状态、查看当前值和信号说明，但不能直接删除系统定义的I/O信号。"
  },
  {
    id: 401,
    type: "single_choice",
    question: "WAIT 指令可以等待以下（ ）信号值。",
    options: {
      A: "DO",
      B: "DI",
      C: "R",
      D: "都可以"
    },
    answer: "D",
    category: "编程与指令",
    explanation: "WAIT指令通常可以等待数字输入（DI）、数字输出（DO）信号达到指定状态，也可以等待寄存器（R）等变量的值满足条件。"
  },
  {
    id: 402,
    type: "single_choice",
    question: "以下属于IO指令的是（ ）。",
    options: {
      A: "DO",
      B: "DI",
      C: "WAIT",
      D: "A和C"
    },
    answer: "D",
    category: "编程与指令",
    explanation: "DO（数字输出）和WAIT（等待）都是与I/O操作相关的指令。DI（数字输入）是信号类型，WAIT是操作指令。"
  },
  {
    id: 403,
    type: "single_choice",
    question: "以下属于流程指令的是（ ）。",
    options: {
      A: "CALL",
      B: "GOTO",
      C: "LABEL",
      D: "以上都有"
    },
    answer: "D",
    category: "编程与指令",
    explanation: "CALL（调用子程序）、GOTO（跳转）和LABEL（标签）都是用于控制程序执行流程的指令。"
  },
  {
    id: 404,
    type: "single_choice",
    question: "机器人夹爪的开合的控制指令为（ ）。",
    options: {
      A: "DO",
      B: "DI",
      C: "wait",
      D: "Waittime"
    },
    answer: "A",
    category: "编程与指令",
    explanation: "机器人夹爪（气动或电动）的开合动作通常由数字输出（DO）信号控制气缸电磁阀或电机驱动器。"
  },
  {
    id: 405,
    type: "single_choice",
    question: "机器人在综合示教的过程中需要选择（ ）模式。",
    options: {
      A: "手动模式",
      B: "自动模式",
      C: "外部模式",
      D: "示教模式"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "根据题目描述，参考答案是B（自动模式）。虽然示教本身在手动模式下进行，但“综合示教”可能指包含自动运行测试的完整流程。"
  },
  {
    id: 406,
    type: "single_choice",
    question: "寄存器有（ ）。",
    options: {
      A: "LR",
      B: "JR",
      C: "R",
      D: "以上都有"
    },
    answer: "D",
    category: "编程与指令",
    explanation: "R（数据寄存器）、JR（关节坐标寄存器）、LR（笛卡尔坐标寄存器）都是机器人编程中常用的寄存器类型。"
  },
  {
    id: 407,
    type: "single_choice",
    question: "JR表示是（ ）寄存器。",
    options: {
      A: "关节坐标",
      B: "笛卡尔坐标",
      C: "数据",
      D: "整型数值"
    },
    answer: "A",
    category: "编程与指令",
    explanation: "JR (Joint Register) 用于存储机器人各关节的角度值。"
  },
  {
    id: 408,
    type: "single_choice",
    question: "延时指令WAIT是针对编程指令的延时指令，单位为（ ）。",
    options: {
      A: "秒",
      B: "毫秒",
      C: "分",
      D: "微秒"
    },
    answer: "B",
    category: "编程与指令",
    explanation: "WAIT（或WAIT_TIME）指令的延时单位通常是毫秒（ms）。"
  },
  {
    id: 409,
    type: "single_choice",
    question: "R是（ ）寄存器。",
    options: {
      A: "关节坐标",
      B: "笛卡尔坐标",
      C: "数据",
      D: "整型数值"
    },
    answer: "C",
    category: "编程与指令",
    explanation: "R (Register) 通常指通用数据寄存器，用于存储数值型数据。"
  },
  {
    id: 410,
    type: "single_choice",
    question: "全局参数包括（  ）。 A.工具坐标系 B.工件坐标系 C.全局运动参数 D.以上都有",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "全局运动参数",
      D: "以上都有"
    },
    answer: "D",
    category: "编程与指令",
    explanation: "工具坐标系、工件坐标系和全局运动参数（如速度、加速度倍率）都是影响机器人全局行为的设置。"
  },
  {
    id: 411,
    type: "single_choice",
    question: "码垛示教前准备有（ ）。",
    options: {
      A: "运动规划",
      B: "动作规划",
      C: "路径规划",
      D: "以上都有"
    },
    answer: "D",
    category: "应用技术",
    explanation: "码垛任务示教前需要进行整体的规划，包括如何运动、执行什么动作、路径如何安排等。"
  },
  {
    id: 412,
    type: "single_choice",
    question: "以下那个是条件指令（ ）。",
    options: {
      A: "while...Endwhile",
      B: "if...endif",
      C: "waittime",
      D: "sleep"
    },
    answer: "B",
    category: "编程与指令",
    explanation: "IF...ENDIF 是典型的条件判断指令，根据条件的真假执行不同的程序分支。WHILE是循环指令。"
  },
  {
    id: 413,
    type: "single_choice",
    question: "编码功能就是将R寄存器映射到IO的输出，根据R的值置为IO序列，该过程为（ ）进制编码。",
    options: {
      A: "二",
      B: "十",
      C: "八",
      D: "十六"
    },
    answer: "A",
    category: "编程与指令",
    explanation: "将寄存器的数值转换为对应的I/O输出组合，通常是基于二进制逻辑进行的，每一位对应一个输出点。"
  },
  {
    id: 414,
    type: "single_choice",
    question: "（ ）指令用于阻塞等待一个指定信号。",
    options: {
      A: "BREAK",
      B: "WHILE",
      C: "WAIT",
      D: "GOTO"
    },
    answer: "C",
    category: "编程与指令",
    explanation: "WAIT指令用于暂停程序执行，直到等待的条件（如信号状态、时间延迟）满足。"
  },
  {
    id: 415,
    type: "single_choice",
    question: "IO 指令不包括（ ）指令。",
    options: {
      A: "DI",
      B: "DO",
      C: "LBL",
      D: "WAIT"
    },
    answer: "C",
    category: "编程与指令",
    explanation: "DI（数字输入）、DO（数字输出）、WAIT（等待I/O信号）都是I/O相关指令。LBL（标签）是程序流程控制指令，不直接操作I/O。"
  },
  {
    id: 416,
    type: "single_choice",
    question: "在执行以下程序过程中，工业机器人将调用（ ）次abc 子程序。 IR[1]=6 WHILE IR[1]<0 CALL abc IR[1]=IR[1]-1 ENDWHILE",
    options: {
      A: "6",
      B: "5",
      C: "4",
      D: "0",
    },
    answer: "D",
    category: "编程与指令",
    explanation: "程序开始时 IR[1]=6。WHILE循环的条件是 IR[1]<0。由于6不小于0，循环体一次也不会执行，因此CALL abc指令不会被执行。"
  },
  {
    id: 417,
    type: "single_choice",
    question: "IO 指令中的PULSE 指令用于产生脉冲，编程语句PULSE(15,2000)是()含义？A.表示将15号输入端口输出一个2秒钟的脉冲信号；B.表示将15号输入端口输出一个2000秒钟的脉冲信号；C.表示将15号输出端口输出一个2000秒钟的脉冲信号；D.表示将15号输出端口输出一个2秒钟的脉冲信号；",
    options: {
      A: "表示将15号输入端口输出一个2秒钟的脉冲信号；",
      B: "表示将15号输入端口输出一个2000秒钟的脉冲信号；",
      C: "表示将15号输出端口输出一个2000秒钟的脉冲信号；",
      D: "表示将15号输出端口输出一个2秒钟的脉冲信号；"
    },
    answer: "D",
    category: "编程与指令",
    explanation: "PULSE指令通常用于数字输出（DO）端口。格式 PULSE(端口号, 时间)。时间单位常为毫秒。因此PULSE(15, 2000)表示将15号输出端口置为ON持续2000毫秒（2秒），然后自动复位为OFF。"
  },
  {
    id: 418,
    type: "single_choice",
    question: "WHILE循环的判断条件是（）。 IR[1]=5 WHILE ??? CALL abc IR[1]=IR[1]- 1 ENDWHILE A.IR[1]>10 B.IR[1]<10 C.IR[1]>0 D.IR[1]<0",
    options: {
      A: "IR[1]>10",
      B: "IR[1]<10",
      C: "IR[1]>0",
      D: "IR[1]<0"
    },
    answer: "C",
    category: "编程与指令",
    explanation: "IR[1]初始值为5，每次循环减1。为了让循环在IR[1]减到0之前执行（即执行5次），循环条件应为IR[1]>0。当IR[1]变为0时，条件不满足，循环结束。"
  },
  {
    id: 419,
    type: "single_choice",
    question: "IO 指令包括了（ ）指令。①DI②DO③LBL④WAIT",
    options: {
      A: "①②③④",
      B: "①②④",
      C: "①②③",
      D: "①③④"
    },
    answer: "B",
    category: "编程与指令",
    explanation: "DI（数字输入）、DO（数字输出）、WAIT（等待I/O信号）都直接与I/O操作相关。LBL（标签）是程序流程标记，不属于I/O指令。"
  },
  {
    id: 420,
    type: "single_choice",
    question: "配置外部信号时将（ ）索引建立映射关系的过程。①系统信号②IO输入输出③系统变量④寄存器数据",
    options: {
      A: "①②③④",
      B: "①②",
      C: "①②③",
      D: "①③④"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "配置外部信号主要是将机器人内部的系统信号（如启动、暂停、急停状态）和物理I/O输入输出点（DI/DO）与外部设备的信号进行映射关联。系统变量和寄存器数据是内部数据，不是直接映射的外部信号。"
  },
  {
    id: 421,
    type: "single_choice",
    question: "以下不属于机器人码垛的主要优点（ ）。",
    options: {
      A: "码垛速度快",
      B: "动作稳定和提高码垛准备性",
      C: "改善工人劳作条件，摆脱有毒、有害环境",
      D: "定位准确、保证批量一致性"
    },
    answer: "A",
    category: "应用技术",
    explanation: "根据题目描述，参考答案是A。虽然机器人码垛效率高，但“速度快”可能不是其相对于人工的最核心优势，或者在某些复杂垛型下速度未必最快。其他选项都是机器人码垛的公认优点。"
  },
  {
    id: 422,
    type: "single_choice",
    question: "在HSpad上转动钥匙开关，HSpad界面会显示选择运行方式的界面，当选择手动T1运行方式表示（ ）。",
    options: {
      A: "低速运行",
      B: "高速运行",
      C: "外部轴运行",
      D: "以上都有"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "手动T1模式是低速手动模式，用于示教和调试，确保操作安全。"
  },
  {
    id: 423,
    type: "single_choice",
    question: "机器人码垛的过程中，用以下（）指令可以进行位置计算，减少示教的位置数量。",
    options: {
      A: "R指令",
      B: "JR指令",
      C: "C指令",
      D: "CALL指令"
    },
    answer: "A",
    category: "编程与指令",
    explanation: "通过使用寄存器（R）存储偏移量或计算参数，配合位置指令（如L或J）和偏移功能，可以用少量示教点通过计算生成多个相似位置，从而减少示教点数量。"
  },
  {
    id: 424,
    type: "single_choice",
    question: "工业机器人应用编程考核平台机器人本体采用的是（ ）。",
    options: {
      A: "HSR-JR603",
      B: "HSR-JR605",
      C: "HSR-JR612",
      D: "HSR-JR620"
    },
    answer: "A",
    category: "应用技术",
    explanation: "题目明确指出考核平台使用的是HSR-JR603型号。"
  },
  {
    id: 425,
    type: "single_choice",
    question: "工业机器人应用编程考核平台触摸屏采用的是（ ）。",
    options: {
      A: "台达",
      B: "昆仑通态",
      C: "西门子",
      D: "其他"
    },
    answer: "C",
    category: "应用技术",
    explanation: "根据题目描述，参考答案是C（西门子）。"
  },
  {
    id: 426,
    type: "single_choice",
    question: "HSR-JR603机器人的最大负荷是（ ）。",
    options: {
      A: "3KG",
      B: "6KG",
      C: "12KG",
      D: "60KG"
    },
    answer: "A",
    category: "硬件与IO控制",
    explanation: "HSR-JR603是一款小负载机器人，其最大负载能力为3公斤。"
  },
  {
    id: 427,
    type: "single_choice",
    question: "示教完成后，保存好的程序，必须在自动运行模式下，才能自动运行。任何程序都必须（）后才能运行。",
    options: {
      A: "新建",
      B: "加载",
      C: "编辑",
      D: "打开"
    },
    answer: "B",
    category: "编程与指令",
    explanation: "编写或示教完成的程序需要先加载（Load）到运行内存中，然后才能在自动模式下执行。"
  },
  {
    id: 428,
    type: "single_choice",
    question: "搬运机器人的轨迹规划有（ ）。 A.工作原点-取料点-放料点 B.工作原点-取料点过渡点-取料点-放料点 C.工作原点-取料点过渡点-取料点-放料过渡点-放料点 D.以上都不对",
    options: {
      A: "工作原点-取料点-放料点",
      B: "工作原点-取料点过渡点-取料点-放料点",
      C: "工作原点-取料点过渡点-取料点-放料过渡点-放料点",
      D: "以上都不对"
    },
    answer: "C",
    category: "编程与指令",
    explanation: "为了运动平稳、避免碰撞，搬运机器人通常在接近和离开物料时设置过渡点（Approach/Departure Points）。"
  },
  {
    id: 429,
    type: "single_choice",
    question: "HSR-608工业机器人最大可搬运质量（ ）。",
    options: {
      A: "6千克",
      B: "8千克",
      C: "10千克",
      D: "12千克"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "根据型号命名，HSR-608的最大负载能力应为8公斤。但根据题目参考答案为D（12千克），可能存在型号命名差异或题目信息有误。此处按参考答案D。"
  },
  {
    id: 430,
    type: "single_choice",
    question: "参数 6Kg 表示工业机器人的哪项？（）",
    options: {
      A: "型号",
      B: "运动范围",
      C: "自由度",
      D: "承载能力"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "机器人的负载能力（或称承载能力）是其重要参数之一，通常以kg为单位表示。"
  },
  {
    id: 431,
    type: "single_choice",
    question: "使用（）可实现程序循环运行。 ① GOTO LBL[②LBL[③WHILE④IF",
    options: {
      A: "①②③④",
      B: "①②④",
      C: "①②③",
      D: "①③"
    },
    answer: "C",
    category: "编程与指令",
    explanation: "GOTO与LBL配合可以实现跳转循环；WHILE是条件循环指令。IF是条件判断，本身不构成循环。"
  },
  {
    id: 432,
    type: "single_choice",
    question: "寄存器指令用于寄存器赋值更改，包含（ ）。 ① 浮点型R寄存器  (2) JR 寄存器  (3) LR 寄存器  (4) LP 寄存器",
    options: {
      A: "①②③④",
      B: "①②④",
      C: "①②③",
      D: "①③④"
    },
    answer: "C",
    category: "编程与指令",
    explanation: "常见的寄存器赋值操作包括通用数据寄存器R、关节坐标寄存器JR和笛卡尔坐标寄存器LR。LP寄存器不是通用术语。"
  },
  {
    id: 433,
    type: "single_choice",
    question: "当出现紧急情况的时候，你需要迅速做的第一件事情是（ ）。",
    options: {
      A: "拔下机器人的电源",
      B: "拍急停按钮",
      C: "关闭气源",
      D: "卸下机器人的夹具"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "在紧急情况下，最快速有效的方法是按下急停按钮，立即停止机器人所有运动。"
  },
  {
    id: 434,
    type: "single_choice",
    question: "当600V以下带电电器设备、仪表仪器着火时，需要哪些灭火器最佳（）。",
    options: {
      A: "干粉灭火器",
      B: "二氧化碳灭火器",
      C: "1211灭火器",
      D: "机械泡沫灭火器"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "对于带电设备火灾，应选用不导电的灭火器。二氧化碳灭火器灭火后不留残留物，适合扑灭电气火灾和保护精密仪器。"
  },
  {
    id: 435,
    type: "single_choice",
    question: "机器人运动中，工作区域内有工作人员进入时、应按下（）。",
    options: {
      A: "安全开关",
      B: "紧急停止开关",
      C: "暂停开关",
      D: "电源开关"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "当有人进入机器人工作区域时，存在碰撞风险，应立即按下紧急停止开关（急停按钮）以确保人员安全。"
  },
  {
    id: 436,
    type: "single_choice",
    question: "示教作业完成后，应以（ )状态检查机器人的动作。",
    options: {
      A: "手动低速",
      B: "手动高速",
      C: "自动低速",
      D: "自动高速"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "示教完成后，应在手动低速模式下检查程序，以确保安全，避免高速运动造成意外。"
  },
  {
    id: 437,
    type: "single_choice",
    question: "华数机器人本体检查与保养中发现腕部有松动应该调整( )。",
    options: {
      A: "锥齿轮",
      B: "安装螺钉",
      C: "牙轮皮带",
      D: "圆柱齿轮"
    },
    answer: "B",
    category: "硬件与IO控制",
    explanation: "机器人腕部松动通常涉及连接法兰或关节的安装螺钉需要紧固。"
  },
  {
    id: 438,
    type: "single_choice",
    question: "机器人示教工件时，示教器的挂带要套在左手上，应该时刻保持（ )操作。",
    options: {
      A: "双手",
      B: "单手",
      C: "左手",
      D: "右手"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "示教时保持双手操作，一手持示教器，另一手可随时拍下急停，确保安全。"
  },
  {
    id: 439,
    type: "single_choice",
    question: "在接手工业机器人冲压工作站后，应该需要首先知道（ )开关的位置。",
    options: {
      A: "总停止",
      B: "总急停",
      C: "机器人急停",
      D: "冲压机床急停"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "总急停开关是整个工作站的最高优先级安全开关，应首先了解其位置以便在紧急情况下快速响应。"
  },
  {
    id: 440,
    type: "single_choice",
    question: "在通电妥备的状态下，启动一个工业机器人配套工作站，需要首先清楚（）操作过程。",
    options: {
      A: "停止",
      B: "系统复位",
      C: "启动顺序",
      D: "通电顺序"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "设备通电后，通常需要先进行系统复位，清除可能存在的报警或错误状态，然后才能正常启动运行。"
  },
  {
    id: 441,
    type: "single_choice",
    question: "公司在推行6S管理中，应该有哪些人员参与（ )。",
    options: {
      A: "总经理",
      B: "推行办公室",
      C: "车间主任",
      D: "全体员工"
    },
    answer: "D",
    category: "基础知识与安全",
    explanation: "6S管理（整理、整顿、清扫、清洁、素养、安全）是一项全员参与的活动，需要公司所有员工共同执行和维护。"
  },
  {
    id: 442,
    type: "single_choice",
    question: "企业安全生产管理人员对安全检查中发现的问题应当如何处理（）。",
    options: {
      A: "立即处理，对不能处理的及时报告单位负责人",
      B: "提交处理意见经企业负责人审批后处理",
      C: "请示领导并等待企业负责人发布处理文件后处理",
      D: "报告并请示单位负责人处理意见"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "安全管理人员对检查中发现的问题应立即采取措施处理，对于自身权限无法解决的问题，应及时向上级负责人报告。"
  },
  {
    id: 443,
    type: "single_choice",
    question: "企业应在有较大危险因素的生产经营场所和有关设备、设施上设置什么（）。",
    options: {
      A: "详细的事故应急处理措施的标牌",
      B: "显示该场所、设备安全管理责任人姓名、联系电话的标志",
      C: "明显的安全警示标志",
      D: "该场所及设备的信息提示及警告标志"
    },
    answer: "C",
    category: "基础知识与安全",
    explanation: "根据《安全生产法》等相关法规，企业应在有较大危险因素的场所和设施、设备上设置明显的安全警示标志。"
  },
  {
    id: 444,
    type: "single_choice",
    question: "企业采购特种劳动防护用品时，应采购哪些企业生产的（ )。",
    options: {
      A: "取得特种劳动防护用品生产许可证的企业",
      B: "经过质量管理体系认证的企业",
      C: "取得生产许可证并经质量管理体系认证的企业",
      D: "取得当地卫生认证及行业劳动防护用品生产保障的企业"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "采购特种劳动防护用品，必须选择具有国家规定生产许可证的企业产品，确保产品质量和安全性能符合标准。"
  },
  {
    id: 445,
    type: "single_choice",
    question: "企业对员工进行安全生产教育和培训、员工应如何对待（）。",
    options: {
      A: "选择自己有需要的课程，参加培训",
      B: "必须参加并通过学习提高自己的安全素质",
      C: "按自己的兴趣自由参加",
      D: "全部参加，获得培训签到即可"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "安全生产教育和培训是强制性的，员工必须参加并认真对待，通过学习切实提高自身的安全意识和技能。"
  },
  {
    id: 446,
    type: "single_choice",
    question: "企业组织员工进行安全生产教育和培训、员工应如何对待（）。",
    options: {
      A: "选择自己有需要的课程，参加培训",
      B: "必须参加并通过学习提高自己的安全素质",
      C: "按自己的兴趣自由参加",
      D: "全部参加，获得培训签到即可"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "安全生产教育和培训是强制性的，员工必须参加并认真对待，通过学习切实提高自身的安全意识和技能。"
  },
  {
    id: 447,
    type: "single_choice",
    question: "安全生产责任制的责任划分依据什么原则（）。",
    options: {
      A: "知识和能力水平高低",
      B: "职务级别高低",
      C: "管生产必须管安全，谁主管谁负责",
      D: "职称等级及能力高低"
    },
    answer: "C",
    category: "基础知识与安全",
    explanation: "安全生产责任制遵循“管生产必须管安全”和“谁主管谁负责”的基本原则，明确各级管理人员和员工的安全职责。"
  },
  {
    id: 448,
    type: "single_choice",
    question: "（）是职业人最为重要的职业素质之一，是从业人员在生产活动中必须遵循的行为准则。",
    options: {
      A: "岗位道德素养",
      B: "岗位担当素养",
      C: "岗位服务素养",
      D: "岗位安全素养"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "职业道德素养是职业人员在工作中应遵守的基本道德规范和行为准则，是重要的职业素质。"
  },
  {
    id: 449,
    type: "single_choice",
    question: "按照职业道德要求，职业化是指从业人员工作状态的（）。",
    options: {
      A: "标准化、规范化、制度化",
      B: "全球化、现代化、市场化",
      C: "一致化、动作化、简约化",
      D: "高效化、人性化、科学化"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "职业化强调的是工作行为的标准化、规范化和制度化，形成符合职业要求的工作习惯和态度。"
  },
  {
    id: 450,
    type: "single_choice",
    question: "生产安全事故发生后，首先要抢救受伤人员，并采取措施防止事故扩大，还要（），给事故调查提供条件。",
    options: {
      A: "保护现场",
      B: "清理现场",
      C: "停产整顿",
      D: "视频记录"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "事故发生后，在确保安全的前提下，应保护好现场，以便于后续的事故原因调查和分析。"
  },
  {
    id: 451,
    type: "single_choice",
    question: "从业人员发现直接危及人身安全的紧急情况时，有权（）或者在采取可能的应急措施后撤离作业场所停止作业。",
    options: {
      A: "停止作业",
      B: "继续作业",
      C: "停一会儿再干",
      D: "干完应急工作后"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "从业人员在面临直接危及人身安全的紧急情况时，有权立即停止作业并撤离，这是自我保护的权利。"
  },
  {
    id: 452,
    type: "single_choice",
    question: "清洁工作中应该（ ）。A.清除工作中无用的物品 B.将物品摆放得整整齐齐C.在全公司范围内进行大扫除D.将整理、整顿、清扫工作制度化，并定期检查评比",
    options: {
      A: "清除工作中无用的物品",
      B: "将物品摆放得整整齐齐",
      C: "在全公司范围内进行大扫除",
      D: "将整理、整顿、清扫工作制度化，并定期检查评比"
    },
    answer: "D",
    category: "基础知识与安全",
    explanation: "清洁（Seiso）在6S中不仅指打扫卫生，更重要的是将整理（Seiri）、整顿（Seiton）、清扫（Seiso）工作常态化、制度化，并通过定期检查评比来维持和改进。"
  },
  {
    id: 453,
    type: "single_choice",
    question: "6S和产品品质的关系？（）",
    options: {
      A: "工作方便",
      B: "改善品质",
      C: "增加产量",
      D: "没有多大关系"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "6S管理通过创造整洁、有序、安全的工作环境，减少错误和浪费，提高工作效率和员工素养，从而有助于改善产品品质。"
  },
  {
    id: 454,
    type: "single_choice",
    question: "每天的下班前清理卫生属于6S中的（）",
    options: {
      A: "整理",
      B: "整顿",
      C: "清扫",
      D: "安全"
    },
    answer: "C",
    category: "基础知识与安全",
    explanation: "每天下班前清理卫生是“清扫”（Seiso）活动的一部分，旨在保持工作场所的干净整洁。"
  },
  {
    id: 455,
    type: "single_choice",
    question: "影响人的安全行为的环境因素是（）",
    options: {
      A: "气质、性格、情绪、能力、兴趣等",
      B: "社会知觉、角色、价值观等",
      C: "风俗、时尚等",
      D: "光亮、气温、气压、温度、风速、空气含氧量等"
    },
    answer: "D",
    category: "基础知识与安全",
    explanation: "选项A是个人因素，B是社会心理因素，C是社会文化因素。选项D列举的是物理环境因素，直接影响人的生理状态和安全行为。"
  },
  {
    id: 456,
    type: "single_choice",
    question: "组织的产品和服务质量取决于满足（ )的能力，以及所受到的有关的相关方的有意和无意的影响。",
    options: {
      A: "顾客",
      B: "要求",
      C: "市场",
      D: "顾客期望"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "组织的产品和服务质量的核心是满足顾客的需求和期望。"
  },
  {
    id: 457,
    type: "single_choice",
    question: "对机器人进行示教时，为了防止机器人的异常动作给操作人员造成危险，作业前必须进行的项目检查有（ ）。 ① 机器人外部电缆线外皮有无破损； (2) 机器人有无动作异常； (3) 机器人制动装置是否有效； (4) 机器人紧急停止装置是否有效。",
    options: {
      A: "①②③④",
      B: "①②③",
      C: "①②④",
      D: "①③④"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "示教前进行全面检查是保障安全的重要步骤，包括电缆、动作、制动和急停装置的有效性。"
  },
  {
    id: 458,
    type: "single_choice",
    question: "拆卸一轴或二轴电机可能会使其他各轴受（ )影响坠落，拆卸前请确保机器人其他轴处于安全状态。",
    options: {
      A: "联动",
      B: "传动",
      C: "电机",
      D: "自身重力"
    },
    answer: "D",
    category: "基础知识与安全",
    explanation: "拆卸支撑其他轴的电机或部件时，失去支撑的轴可能会因自身重力作用而坠落，造成损坏或安全事故。"
  },
  {
    id: 459,
    type: "single_choice",
    question: "机器人检修需要重点检查（ )螺钉。(1)机器人安装用 (2)各轴马达安装用 (3)手腕部件安装用 (4)末端负载安装用",
    options: {
      A: "(1)(2)(3)",
      B: "(2)(3)(4)",
      C: "(1)(3)(4)",
      D: "(1)(2)(3)(4)"
    },
    answer: "D",
    category: "硬件与IO控制",
    explanation: "机器人的安装、各轴电机、手腕部件以及末端负载的固定螺钉都至关重要，需要定期检查紧固。"
  },
  {
    id: 460,
    type: "single_choice",
    question: "现场管理核心内容（）。",
    options: {
      A: "合理的工艺路线，最短路线的平面设置",
      B: "压缩搬运距离、时间和空间",
      C: "提高员工工作效率，可以应变现场工作环境的改变",
      D: "目视管理指示、信息和问题，找出问题的根源并加以解决"
    },
    answer: "C",
    category: "基础知识与安全",
    explanation: "根据题目描述，参考答案是C，强调提高效率和适应性。"
  },
  {
    id: 461,
    type: "single_choice",
    question: "质量检验把关是指：（）。",
    options: {
      A: "不合格品进行统计分析",
      B: "测定过程工序能力",
      C: "不合格品不放行",
      D: "不合格工序不准运行"
    },
    answer: "C",
    category: "基础知识与安全",
    explanation: "质量检验的“把关”功能核心是识别并阻止不合格品流入下一道工序或出厂，即“不合格品不放行”。"
  },
  {
    id: 462,
    type: "single_choice",
    question: "生产经营单位应当对从业人员进行（）安全生产教育和培训，经考核合格的从业人员方可上岗作业。",
    options: {
      A: "全面的",
      B: "重点突出的",
      C: "全员",
      D: "与其职业相关的"
    },
    answer: "D",
    category: "基础知识与安全",
    explanation: "根据《安全生产法》，从业人员应接受与其所从事工作相关的安全生产教育和培训。"
  },
  {
    id: 463,
    type: "single_choice",
    question: "生产经营单位的主要经营管理者应当经过（）。",
    options: {
      A: "安全生产教育培训和安全资格考核",
      B: "安全生产教育",
      C: "安全生产培训",
      D: "安全资格考核"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "主要负责人需要接受安全生产教育培训，并通过相应的安全资格考核。"
  },
  {
    id: 464,
    type: "single_choice",
    question: "安全设施投资（）纳入工程项目概算。",
    options: {
      A: "不得",
      B: "可以",
      C: "允许",
      D: "应当"
    },
    answer: "D",
    category: "基础知识与安全",
    explanation: "根据相关法规，安全设施投资必须纳入工程项目概算，确保安全生产投入。"
  },
  {
    id: 465,
    type: "single_choice",
    question: "对重大危险源，采取响应的防范、监控措施，对重大事故隐患，采取整改措施，并报（）备案。",
    options: {
      A: "有关部门",
      B: "安全生产监督管理部门",
      C: "公安部门",
      D: "消防部门"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "重大危险源和重大事故隐患的管理需向安全生产监督管理部门备案。"
  },
  {
    id: 466,
    type: "single_choice",
    question: "（）就是对自身的长处和短处做出事实上求是的分析和判断。一遍了解自己的职业能力倾项。",
    options: {
      A: "自我评价",
      B: "职业意识",
      C: "职业生涯规划",
      D: "团队意见"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "自我评价是个人对自己能力、兴趣、价值观等进行客观分析和判断的过程。"
  },
  {
    id: 467,
    type: "single_choice",
    question: "市场经济条件下，职业道德最终将对企业起到（ )的作用。",
    options: {
      A: "决策科学化",
      B: "提高竞争力",
      C: "决定经济效益",
      D: "决定前途与命运"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "良好的职业道德能提升企业形象、员工素质和工作效率，从而增强企业的市场竞争力。"
  },
  {
    id: 468,
    type: "single_choice",
    question: "对待职业和岗位，（ )并不是爱岗敬业所要求的。",
    options: {
      A: "树立职业理想",
      B: "干一行爱一行专一行",
      C: "遵守企业的规章制度",
      D: "一职定终身，不改行"
    },
    answer: "D",
    category: "基础知识与安全",
    explanation: "爱岗敬业强调热爱本职工作、尽职尽责，但并不意味着要求员工必须一生从事一个职业（一职定终身）。"
  },
  {
    id: 469,
    type: "single_choice",
    question: "企业生产经营活动中，要求员工遵纪守法是（）。",
    options: {
      A: "约束人的体现",
      B: "保证经济活动正常进行所决定的",
      C: "领导者人为的规定",
      D: "追求利益的体现"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "遵纪守法是市场经济和社会正常运行的基础，是保证企业经济活动合法、有序进行的必要条件。"
  },
  {
    id: 470,
    type: "single_choice",
    question: "正确阐述职业道德与人的事业的关系的选项是( )。",
    options: {
      A: "没有职业道德的人不会获得成功",
      B: "要取得事业的成功，前提条件是要有职业道德",
      C: "事业成功的人往往并不需要较高的职业道德",
      D: "职业道德是人获得事业成功的重要条件"
    },
    answer: "D",
    category: "基础知识与安全",
    explanation: "职业道德是个人在职场中建立信任、获得合作、提升形象的重要因素，是事业成功的重要条件之一，但不是唯一条件。"
  },
  {
    id: 471,
    type: "single_choice",
    question: "企业生产经营活动中，促进员工之间平等尊重的措施是( )。",
    options: {
      A: "互利互惠，平均分配",
      B: "加强交流，平等对话",
      C: "只要合作，不要竞争",
      D: "人心巨测，谨慎行事"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "通过加强员工之间的交流和平等对话，可以增进理解，促进相互尊重和平等。"
  },
  {
    id: 472,
    type: "single_choice",
    question: "人体（）是最危险的触电形式。",
    options: {
      A: "单相触电",
      B: "两相触电",
      C: "接触电压触电",
      D: "跨步电压触电"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "两相触电是指人体同时接触到两根不同相位的带电导线，电流直接通过人体，路径短，电压高，是最危险的触电方式。"
  },
  {
    id: 473,
    type: "single_choice",
    question: "市场经济条件下，不符合爱岗敬业要求的是( )的观念。",
    options: {
      A: "树立职业理想",
      B: "强化职业责任",
      C: "干一行爱一行",
      D: "多转行多受锻炼"
    },
    answer: "D",
    category: "基础知识与安全",
    explanation: "爱岗敬业强调的是对当前岗位的热爱和专注。虽然转行和锻炼有其价值，但频繁转行、不安于岗不符合爱岗敬业的精神。"
  },
  {
    id: 474,
    type: "single_choice",
    question: "有关文明生产的说法，（ )是正确的。",
    options: {
      A: "为了及时下班，可以直接拉断电源总开关",
      B: "下班时没有必要搞好工作现场的卫生",
      C: "工具使用后应按规定放置到工具箱中",
      D: "电工工具不全时，可以冒险带电作业"
    },
    answer: "C",
    category: "基础知识与安全",
    explanation: "文明生产要求工作结束后整理现场，工具归位。其他选项都是不安全或不规范的行为。"
  },
  {
    id: 475,
    type: "single_choice",
    question: "从业人员在职业交往活动中，符合仪表端庄具体要求的是( )。",
    options: {
      A: "着装华贵",
      B: "适当化妆或戴饰品",
      C: "饰品俏丽",
      D: "发型要突出个性"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "仪表端庄要求整洁、得体、大方。适当化妆或佩戴简洁的饰品符合职场礼仪。过于华贵、俏丽或个性化的装扮可能不合适。"
  },
  {
    id: 476,
    type: "single_choice",
    question: "爱岗敬业作为职业道德的重要内容，是指员工( )。",
    options: {
      A: "热爱自己喜欢的岗位",
      B: "热爱有钱的岗位",
      C: "强化职业责任",
      D: "不应多转行"
    },
    answer: "C",
    category: "基础知识与安全",
    explanation: "爱岗敬业的核心是忠于职守，认真履行职业责任。"
  },
  {
    id: 477,
    type: "single_choice",
    question: "工作认真负责是( )。",
    options: {
      A: "衡量员工职业道德水平的一个重要方面",
      B: "提高生产效率的障碍",
      C: "一种思想保守的观念",
      D: "胆小怕事的做法"
    },
    answer: "A",
    category: "基础知识与安全",
    explanation: "工作认真负责体现了良好的职业道德和敬业精神，是评价员工职业素养的重要指标。"
  },
  {
    id: 478,
    type: "single_choice",
    question: "下面关于严格执行安全操作规程的描述，错误的是（）。",
    options: {
      A: "每位员工都必须严格执行安全操作规程",
      B: "单位的领导不需要严格执行安全操作规程",
      C: "严格执行安全操作规程是维持企业正常生产的根本保证",
      D: "不同行业安全操作规程的具体内容是不同的"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "安全生产人人有责，领导同样需要带头并严格执行安全操作规程。"
  },
  {
    id: 479,
    type: "single_choice",
    question: "职工对企业诚实守信应该做到的是( )。",
    options: {
      A: "忠诚所属企业，无论何种情况都始终把企业利益放在第一位",
      B: "维护企业信誉，树立质量意识和服务意识",
      C: "扩大企业影响，多对外谈论企业之事",
      D: "完成本职工作即可，谋划企业发展由有见识的人来做"
    },
    answer: "B",
    category: "基础知识与安全",
    explanation: "职工对企业诚实守信，应体现在维护企业声誉，做好本职工作，保证产品和服务质量上。"
  },
  {
    id: 480,
    type: "single_choice",
    question: "作为一名工作认真负责的员工，应该是( )。",
    options: {
      A: "领导说什么就做什么",
      B: "领导亲自安排的工作认真做，其他工作可以马虎一点",
      C: "面上的工作要做仔细一些，看不到的工作可以快一些",
      D: "工作不分大小，都要认真去做"
    },
    answer: "D",
    category: "基础知识与安全",
    explanation: "认真负责意味着对所有工作都应尽心尽力，无论任务大小或是否被关注。"
  },
  {
    id: 481,
    type: "single_choice",
    question: "工业机器人能够通过示教盒或控制柜设定机器人手动自动运行模式。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 482,
    type: "single_choice",
    question: "机器人关机时应将急停按钮旋开。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 483,
    type: "single_choice",
    question: "工业机器人传感部分用于感知内部和外部的信息。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 484,
    type: "single_choice",
    question: "华数机器人报警语言界面在系统菜单中。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 485,
    type: "single_choice",
    question: "华数机器人用户登录在投入运行中设置。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 486,
    type: "single_choice",
    question: "华数机器人示教器可以更改系统时间。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 487,
    type: "single_choice",
    question: "华数机器人进行校准需要登录nomal用户。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 488,
    type: "single_choice",
    question: "示教器编程一般用于对大型机器人或危险作业条件下的机器人示教，仍然沿用在线编程的思路，有着在线编程的缺点。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 489,
    type: "single_choice",
    question: "一台工业机器人只有一个世界坐标系。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 490,
    type: "single_choice",
    question: "一台工业机器人只有一个工件坐标系。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 491,
    type: "single_choice",
    question: "工业机器人的世界坐标系、用户坐标系、工具坐标系均可以用正交的右手定则来确定。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 492,
    type: "single_choice",
    question: "在默认情况下，华数机器人的世界坐标系与基坐标系是一致的。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 493,
    type: "single_choice",
    question: "工业机器人可以拥有若干工件坐标系，或者表示不同工件，或者表示同一工件在不同位置的若干副本。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 494,
    type: "single_choice",
    question: "工业机器人的机械部分主要包括末端操作器、手腕、手臂和机座。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 495,
    type: "single_choice",
    question: "工业机器人的机械部分主要包括末端操作器、手腕、手肘和手臂。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 496,
    type: "single_choice",
    question: "工业机器人根据工作任务，根据要求可以选择调用世界坐标、基坐标、用户坐标、工具坐标等。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 497,
    type: "single_choice",
    question: "按坐标形式分类，机器人可分为直角坐标型、圆柱坐标型、球坐标型。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "通信与集成"
  },
  {
    id: 498,
    type: "single_choice",
    question: "华数机器人工作时，在机器人的末端必须固定工具，根据工作的内容和要求的不同，需要选择合适的工具，在更换工具时，不一定需要重新标定华数机器人的工具坐标系。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 499,
    type: "single_choice",
    question: "机器人的工具坐标系与其末端坐标系，以及工具的位置和姿态无关。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 500,
    type: "single_choice",
    question: "工具坐标系的标定过程中，首先在机器人工作范围内找到一个非常精确的固定点作为参考点，一般采用TCP点作为参考点。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 501,
    type: "single_choice",
    question: "焊接机器人我们常使用工具坐标系。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 502,
    type: "single_choice",
    question: "焊接机器人我们常使用工件坐标系。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "应用技术"
  },
  {
    id: 503,
    type: "single_choice",
    question: "在手动操作界面，选择定义工件坐标系，可以选择3点法进行工件标定。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 504,
    type: "single_choice",
    question: "在进行所有示教工作之前，必须为工作轨迹建立对应的工件坐标，这是所有示教工作的起点。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 505,
    type: "single_choice",
    question: "机器人工件坐标系是由工件原点与座标方位组成。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 506,
    type: "single_choice",
    question: "外部夹具被更换，重新定义工件坐标系后，必须更改程序。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 507,
    type: "single_choice",
    question: "可以使用四点标定法设定基坐标系。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 508,
    type: "single_choice",
    question: "机器人的工件坐标不一定是在水平的，也可能是一个斜面。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 509,
    type: "single_choice",
    question: "变位机的装配台气缸松紧状态由机器人数字IO信号控制。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 510,
    type: "single_choice",
    question: "立体仓库模块由PLC本地IO模块连接。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "通信与集成"
  },
  {
    id: 511,
    type: "single_choice",
    question: "PLC采取循环扫描的工作方式，且性能稳定。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 512,
    type: "single_choice",
    question: "在点动操作机器人时要采用较低的速度倍率。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 513,
    type: "single_choice",
    question: "在按下示教盒上的点动运行键之前要考虑机器人的运动趋势。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 514,
    type: "single_choice",
    question: "机器人运行前，不需要进行轴零点校准。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "其他"
  },
  {
    id: 515,
    type: "single_choice",
    question: "在工业机器人自动运行模式中，程序执行可以从任意的起点进行执行。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统配置与操作"
  },
  {
    id: 516,
    type: "single_choice",
    question: "工业机器人急停开关不允许被短接。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 517,
    type: "single_choice",
    question: "机器人处于自动模式下时，不允许进入其运动所及的区域。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 518,
    type: "single_choice",
    question: "在直角坐标系下，机器人各轴可实现单独正向或反向运动。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "坐标系与运动控制"
  },
  {
    id: 519,
    type: "single_choice",
    question: "在弧焊机器人作业过程中，焊枪是一个重要的执行工具，需要定期更换或清理。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 520,
    type: "single_choice",
    question: "手爪、吸盘等夹具主要作用为定位和夹紧工件。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 521,
    type: "single_choice",
    question: "笛卡尔式手动运行机器人可使TCP沿着一个坐标系的正向或反向运行。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "其他"
  },
  {
    id: 522,
    type: "single_choice",
    question: "机器人的自由度数大于关节数目。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 523,
    type: "single_choice",
    question: "在自动模式下，点击界面开/关可设置使能开关状态。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 524,
    type: "single_choice",
    question: "在取消加载后，按下程序，进入到程序编辑器，可以对程序进行更改。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 525,
    type: "single_choice",
    question: "在程序加载或者运行的过程中可以切换模式。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统配置与操作"
  },
  {
    id: 526,
    type: "single_choice",
    question: "工业机器人单步运行方式下程序每次点击开始按钮之后只运行一行。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 527,
    type: "single_choice",
    question: "工业机器人连续运行方式下程序不停顿地运行，直至程序结尾。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 528,
    type: "single_choice",
    question: "在运行方式手动T1中，最大速度为 125mm / s ，T2运行方式中，最大速度限制为 250mm / s 。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 529,
    type: "single_choice",
    question: "增量式手动运行模式可以使机器人移动所定义的距离，如 10mm 或 3°。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "其他"
  },
  {
    id: 530,
    type: "single_choice",
    question: "JR[0][0]指的是JR[0]点的一轴角度。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 531,
    type: "single_choice",
    question: "最大工作速度通常指机器人单关节速度。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 532,
    type: "single_choice",
    question: "机器人文件备份路径一般选择为U盘，表示当前示教器的程序备份到哪里。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 533,
    type: "single_choice",
    question: "机器人文件还原路径一般设置为U盘，表示程序从哪里恢复到示教器。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 534,
    type: "single_choice",
    question: "在工业机器人示教器编写的程序中，可以对程序的多行内容进行复制操作。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 535,
    type: "single_choice",
    question: "在工业机器人示教器中，可以建立若干主程序。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 536,
    type: "single_choice",
    question: "打开工业机器人示教器，不可以对已经建立的主程序复制操作。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 537,
    type: "single_choice",
    question: "打开工业机器人示教器，可以对已经建立的文件夹进行重命名。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 538,
    type: "single_choice",
    question: "L运动指令是指用于选择一个点位之后，机器人当前点位置与记录点之间的直线运动。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 539,
    type: "single_choice",
    question: "圆弧指令C是指以当前位置为起点，通过一个圆弧上的点，到到圆弧的终点的一段圆弧。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 540,
    type: "single_choice",
    question: "为了确保安全，用示教编程器手动运行机器人时，机器人的最高速度限制为 800mm / s 。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 541,
    type: "single_choice",
    question: "L运动指令和J运动指令没有区别，都指的是直线运动。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 542,
    type: "single_choice",
    question: "工业机器人示教器进行编程时，主程序可以对子程序进行调用。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 543,
    type: "single_choice",
    question: "程序加载后不能对程序进行编辑操作。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 544,
    type: "single_choice",
    question: "机器人运行方式分为三种，即手动T1、手动T2或自动模式。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统配置与操作"
  },
  {
    id: 545,
    type: "single_choice",
    question: "在手动示教的过程中，发生奇异点，通过提高手动速率让机器人依据惯性越过奇异点。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "其他"
  },
  {
    id: 546,
    type: "single_choice",
    question: "L指令应用选择一个点位后，当前点机器人位置与记录点之间的直线运动。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 547,
    type: "single_choice",
    question: "工业机器人电柜中总线与电器元件的连接顺序为HPC—驱动器—IO盒。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 548,
    type: "single_choice",
    question: "机器人与外部设备联动时，外部设备IO是低电平有效，因此机器人输出IO板对应匹配PNP型。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 549,
    type: "single_choice",
    question: "机器人与外部设备联动时，机器人输入IO板只配置了PNP型，因此外部设备只能通过输出低电平才能向机器人传递信号。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 550,
    type: "single_choice",
    question: "交流电磁阀接入直流电源，会烧毁线圈。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "通信与集成"
  },
  {
    id: 551,
    type: "single_choice",
    question: "直流电磁阀接入交流电源，电磁吸力会很小导致无法工作。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "通信与集成"
  },
  {
    id: 552,
    type: "single_choice",
    question: "机器人的位置寄存器包括REF、TOOL-FRAME、BASE-FRAME、JR、LR。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "编程与指令"
  },
  {
    id: 553,
    type: "single_choice",
    question: "华数II型系统中循环只能用WHILE实现。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 554,
    type: "single_choice",
    question: "华数机器人6个关节是用同一个电机驱动的。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 555,
    type: "single_choice",
    question: "磁力吸盘能够吸住所有金属材料制成的工件。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 556,
    type: "single_choice",
    question: "机器人轨迹泛指工业机器人在运动过程中的运动轨迹，即运动点的位移、速度和加速度。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 557,
    type: "single_choice",
    question: "在手动、自动和外部模式下，没有定义配置占用的数字信号输出点，都可以强制输出。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 558,
    type: "single_choice",
    question: "伺服驱动包括电动、气动、液压等各种类型的驱动。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 559,
    type: "single_choice",
    question: "气压式伺服驱动系统常用在定位精度较高的场合使用。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 560,
    type: "single_choice",
    question: "位置传感器，能感受被测物的位置并转换成可用输出信号的传感器。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 561,
    type: "single_choice",
    question: "光电编码器及测速发电机，是两种广泛采用的角速度传感器。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 562,
    type: "single_choice",
    question: "华数I/O模块扩展：需要再连接一个IO模块时，通过IN接口连接到另一个IO模块的IN口。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 563,
    type: "single_choice",
    question: "关于搬运机器人的TCP，吸盘类一般设置在法兰中心线与吸盘底面的交点处，而夹钳类通常设置在法兰中心线与手爪前端面的交点处。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标系与运动控制"
  },
  {
    id: 564,
    type: "single_choice",
    question: "当机器人需要同时和多台设备联动，并且子功能需求较多，对IO点位总数要求多达几百时，可以通过使用数个IO点位的状态组成二进制编码的方式来满足需求。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 565,
    type: "single_choice",
    question: "IO盒上所显示的类型标志为PNP，则表示低电平有效。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 566,
    type: "single_choice",
    question: "在手动示教的过程中发现机器人运动路径上有物体则需立即松开使能开关，强制停止机器人。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 567,
    type: "single_choice",
    question: "在程序里设置的全局变量也可以在子程序里应用。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 568,
    type: "single_choice",
    question: "对于接触式码盘来说，码道的圈数越多，则其所能分辨的角度越小，测量精度越高。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 569,
    type: "single_choice",
    question: "目前机器人中较为常用的是旋转型光电式编码器。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 570,
    type: "single_choice",
    question: "位置传感器主要采用光电式增码盘",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 571,
    type: "single_choice",
    question: "机器人电控柜中PLC的X0.1对应示教器中的D_IN[1]。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 572,
    type: "single_choice",
    question: "机器人电控柜中PLC的Y0.0对应示教器中的D_OUT[0]。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "硬件与IO控制"
  },
  {
    id: 573,
    type: "single_choice",
    question: "码垛操作台主要由自动上料平台和码垛工作台两部分组成。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 574,
    type: "single_choice",
    question: "HSR-JR603机器人最大负载是6KG。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 575,
    type: "single_choice",
    question: "RFID模块是读写头和固定底板等组成，机器人通过工业总线和以太网通信控制读写头对芯片进行信息的读取和写入。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "通信与集成"
  },
  {
    id: 576,
    type: "single_choice",
    question: "承载能力是指机器人在工作范围内的任何位姿上所能承受的最大质量。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 577,
    type: "single_choice",
    question: "工业机器人根据工作任务要求，可以选择和使用手爪、吸盘、焊枪等末端操作器。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 578,
    type: "single_choice",
    question: "循环中为防止CPU过载一般要求加入SLEEP指令。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 579,
    type: "single_choice",
    question: "工业机器人控制软件可以用任何语言来编制。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "通信与集成"
  },
  {
    id: 580,
    type: "single_choice",
    question: "工业机器人应用编程考核平台控制系统PLC采用西门子S7-200可编程逻辑控制器。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "通信与集成"
  },
  {
    id: 581,
    type: "single_choice",
    question: "工业机器人应用编程考核平台视觉检查系统包括工业相机、镜头、光源、视觉控制器等组成。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 582,
    type: "single_choice",
    question: "工业机器人应用编程考核平台机器人与视觉软件通过以太网通信的。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "通信与集成"
  },
  {
    id: 583,
    type: "single_choice",
    question: "机器人负载指机器人在工作时能够承受的最大载重。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 584,
    type: "single_choice",
    question: "工业机器人应用编程考核平台视觉检查模块采用西门子视觉系统。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "应用技术"
  },
  {
    id: 585,
    type: "single_choice",
    question: "工业机器人应用编程考核平台仓储模块上每个仓位都检测传感器，通过传感器信号检测，将每个仓位信息数据传输给PLC控制器。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "通信与集成"
  },
  {
    id: 586,
    type: "single_choice",
    question: "机器人机座的作用是支承着机器人自身重量及作业时的负载。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "硬件与IO控制"
  },
  {
    id: 587,
    type: "single_choice",
    question: "机器人示教时，对于有规律的轨迹，原则上仅需示教几个关键点。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与指令"
  },
  {
    id: 588,
    type: "single_choice",
    question: "职业道德体现的是职业对社会所负的道德责任与义务。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 589,
    type: "single_choice",
    question: "从业者从事职业的态度是价值观、道德观的具体表现。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 590,
    type: "single_choice",
    question: "因为人体电阻为800Ω，所以36V工频电压能绝对保证人身安全。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 591,
    type: "single_choice",
    question: "只要人不接触带电体，就不会造成触电事故。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 592,
    type: "single_choice",
    question: "安全技能教育就是结合本工种、本专业的特点，实现安全操作、安全防护所必需具备。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 593,
    type: "single_choice",
    question: "安全带上的各种配件不适合时可自行拆换。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 594,
    type: "single_choice",
    question: "生产经营规模较小，可以不建立应急救援组织的，应当指定兼职的应急救援人员。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 595,
    type: "single_choice",
    question: "生产经营单位发生生产安全事故后，事故现场有关人员不应当立即报告本单位负责人。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 596,
    type: "single_choice",
    question: "单位负责人接到事故报告后，委托他人迅速采取有效措施组织抢救，防止事故扩大，减少人员伤亡和财产损失。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "基础知识与安全"
  },
  {
    id: 597,
    type: "single_choice",
    question: "任何单位和个人都应当支持，配合事故抢救，并提供一切便利条件。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 598,
    type: "single_choice",
    question: "职业作为社会关系的一个重要方面，对社会成员的精神生活和精神传统产生着重大影响。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
  },
  {
    id: 599,
    type: "single_choice",
    question: "社会主义集体主义在强调集体利益高于个人利益的前提下，同时强调要充分满足个人的正当利益，促进了个性发展和个人价值的实现，这也是集体主义原则的重要方面。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "基础知识与安全"
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