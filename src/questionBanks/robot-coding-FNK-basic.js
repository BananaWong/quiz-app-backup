// FANUC工业机器人应用编程职业技能等级理论知识考核题库

export const questionBank = [
  // 单选题部分
  {
    id: 1,
    type: "single_choice",
    question: "在使用FANUC工业机器人进行点动操作时，模式开关应打到（）位置。",
    options: {
      A: "AUTO",
      B: "T1或T2",
      C: "AUTO或T2",
      D: "任意位置"
    },
    answer: "B",
    category: "机器人操作"
  },
  {
    id: 2,
    type: "single_choice",
    question: "FANUC工业机器人在使用RSR自动运行方式工作前，模式开关应处于（）位置。",
    options: {
      A: "AUTO",
      B: "T1",
      C: "T2",
      D: "任意位置"
    },
    answer: "A",
    category: "机器人操作"
  },
  {
    id: 3,
    type: "single_choice",
    question: "在使用FANUC工业机器人进行全速验证程序时，模式开关应打到（）位置。",
    options: {
      A: "AUTO",
      B: "T1",
      C: "T2",
      D: "任意位置"
    },
    answer: "C",
    category: "机器人操作"
  },
  {
    id: 4,
    type: "single_choice",
    question: "FANUC工业机器人速度倍率值的范围为（）。",
    options: {
      A: "VFINE- 100%",
      B: "FINE- 100%",
      C: "1%- 100%",
      D: "5%- 100%"
    },
    answer: "A",
    category: "速度控制"
  },
  {
    id: 5,
    type: "single_choice",
    question: "VFINE- 5% 之间，每按下一次示教器'+ %'键，倍率增加（）。",
    options: {
      A: "0.1%",
      B: "0.5%",
      C: "1%",
      D: "5%"
    },
    answer: "C",
    category: "速度控制"
  },
  {
    id: 6,
    type: "single_choice",
    question: "5% - 100% 之间，每按下一次示教器'+ %'键，倍率增加（）。",
    options: {
      A: "0.1%",
      B: "0.5%",
      C: "1%",
      D: "5%"
    },
    answer: "D",
    category: "速度控制"
  },
  {
    id: 7,
    type: "single_choice",
    question: "VFINE- 5% 之间，每按下一次示教器'- %'键，倍率减少（）。",
    options: {
      A: "0.1%",
      B: "0.5%",
      C: "1%",
      D: "5%"
    },
    answer: "C",
    category: "速度控制"
  },
  {
    id: 8,
    type: "single_choice",
    question: "5% - 100% 之间，每按下一次示教器'- %'键，倍率减少（）。",
    options: {
      A: "0.1%",
      B: "0.5%",
      C: "1%",
      D: "5%"
    },
    answer: "D",
    category: "速度控制"
  },
  {
    id: 9,
    type: "single_choice",
    question: "按下示教器'+0'键，倍率从小到大的变化规律为（）。",
    options: {
      A: "FINE- 1% - 2% - - 5% - 10% - 15% - - 100%",
      B: "VFINE- 1% - 2% - - 5% - 10% - 15% - - 100%",
      C: "VFINE-FINE- 1% - 2% - - 5% - 10% - 15% - - 100%",
      D: "VFINE-FINE- 1% - 2% - - 100%"
    },
    answer: "C",
    category: "速度控制"
  },
  {
    id: 10,
    type: "single_choice",
    question: "按下示教器'-0'键，倍率从小到大的变化规律为（）。",
    options: {
      A: "FINE- 1% - 2% - - 5% - 10% - 15% - - 100%",
      B: "VFINE- 1% - 2% - - 5% - 10% - 15% - - 100%",
      C: "VFINE-FINE- 1% - 2% = - 5% - 10% - 15% - - 100%",
      D: "VFINE-FINE- 1% - 2% - - 100%"
    },
    answer: "C",
    category: "速度控制"
  },
  {
    id: 11,
    type: "single_choice",
    question: "当前倍率为 1% ，按下示教器'+0'键，倍率值变化为（）。",
    options: {
      A: "2%",
      B: "3%",
      C: "5%",
      D: "FINE"
    },
    answer: "A",
    category: "速度控制"
  },
  {
    id: 12,
    type: "single_choice",
    question: "当前倍率为 1% ，按下示教器'-0'键，倍率值变化为（）。",
    options: {
      A: "2%",
      B: "3%",
      C: "5%",
      D: "FINE"
    },
    answer: "D",
    category: "速度控制"
  },
  {
    id: 13,
    type: "single_choice",
    question: "当前倍率为 3% ，同时按下示教器'SHIFT'键和'+0'键，倍率值变化为（）。",
    options: {
      A: "1%",
      B: "3%",
      C: "5%",
      D: "FINE"
    },
    answer: "C",
    category: "速度控制"
  },
  {
    id: 14,
    type: "single_choice",
    question: "当前倍率为 3% ，同时按下示教器'SHIFT'键和'-0'键，倍率值变化为（）。",
    options: {
      A: "1%",
      B: "3%",
      C: "5%",
      D: "FINE"
    },
    answer: "A",
    category: "速度控制"
  },
  {
    id: 15,
    type: "single_choice",
    question: "当前倍率为 10% ，按下示教器'+0'键，倍率值变化为（）。",
    options: {
      A: "11%",
      B: "13%",
      C: "15%",
      D: "FINE"
    },
    answer: "C",
    category: "速度控制"
  },
  {
    id: 16,
    type: "single_choice",
    question: "当前倍率为 10% ，按下示教器'-0'键，倍率值变化为（）。",
    options: {
      A: "5%",
      B: "15%",
      C: "20%",
      D: "FINE"
    },
    answer: "A",
    category: "速度控制"
  },
  {
    id: 17,
    type: "single_choice",
    question: "当前倍率为 20% ，同时按下示教器'SHIFT'键和'+ %'键，倍率值变化为( )。",
    options: {
      A: "10%",
      B: "20%",
      C: "30%",
      D: "FINE"
    },
    answer: "C",
    category: "速度控制"
  },
  {
    id: 18,
    type: "single_choice",
    question: "当前倍率为 20% ，同时按下示教器'SHIFT'键和'- %'键，倍率值变化为( )。",
    options: {
      A: "10%",
      B: "20%",
      C: "30%",
      D: "FINE"
    },
    answer: "A",
    category: "速度控制"
  },
  {
    id: 19,
    type: "single_choice",
    question: "FANUC机器人切换语言界面的菜单路径为（）。",
    options: {
      A: "MANU-SETUP-GENERAL-CURREN LANGUAGE",
      B: "MANU-IO-GENERAL-CURREN LANGUAGE",
      C: "MANU-USER-GENERAL-CURREN LANGUAGE",
      D: "MANU-SETUP-CURREN LANGUAGE"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 20,
    type: "single_choice",
    question: "FANUC机器人查看系统计时器界面的菜单路径为（）。",
    options: {
      A: "MANU-STATUS-SYS TIMER",
      B: "MANU-SETUP-GENERAL-CURREN LANGUAGE",
      C: "MANU-SETUP-SYS TIMER",
      D: "MANU-GENERAL-SYS TIMER"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 21,
    type: "single_choice",
    question: "FANUC机器人最高权限为（）。",
    options: {
      A: "INSTALL",
      B: "SETUP",
      C: "PROGRAM",
      D: "USER"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 22,
    type: "single_choice",
    question: "在实施零点复归操作时，应采用（）坐标系校对机器人各轴零点。",
    options: {
      A: "WORLD",
      B: "JOINT",
      C: "TOOL",
      D: "USER"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 23,
    type: "single_choice",
    question: "在机器人发生碰撞停止时，应切换到（）坐标系将机器人移出安全位置。",
    options: {
      A: "WORLD",
      B: "JOINT",
      C: "TOOL",
      D: "USER"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 24,
    type: "single_choice",
    question: "以下哪种坐标系，TCP点的运动轨迹不按照笛卡尔坐标移动。（）",
    options: {
      A: "WORLD",
      B: "JOINT",
      C: "TOOL",
      D: "USER"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 25,
    type: "single_choice",
    question: "世界坐标系各轴的运动方向可通过（）判断。",
    options: {
      A: "左手法则",
      B: "右手法则",
      C: "关节坐标",
      D: "以上皆可"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 26,
    type: "single_choice",
    question: "通过示教器上的（）键切换各个坐标系。",
    options: {
      A: "COORD",
      B: "SHIFT",
      C: "ITEM",
      D: "ENTER"
    },
    answer: "A",
    category: "机器人操作"
  },
  {
    id: 27,
    type: "single_choice",
    question: "通过示教器上的（）键改变当前TOOL坐标系号。",
    options: {
      A: "SHIFT+COORD",
      B: "SHIFT",
      C: "COORD",
      D: "ENTER"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 28,
    type: "single_choice",
    question: "通过示教器上的（）键改变当前USER坐标系号。",
    options: {
      A: "SHIFT+COORD",
      B: "SHIFT",
      C: "COORD",
      D: "ENTER"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 29,
    type: "single_choice",
    question: "默认的用户坐标系User0和（）坐标系重合。",
    options: {
      A: "WORLD",
      B: "JOINT",
      C: "TOOL",
      D: "USER"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 30,
    type: "single_choice",
    question: "使用不同的快换夹具时，应切换该快换夹具对应的（）坐标系。",
    options: {
      A: "WORLD",
      B: "JOINT",
      C: "TOOL",
      D: "USER"
    },
    answer: "C",
    category: "坐标系"
  },
  {
    id: 31,
    type: "single_choice",
    question: "用户自定义之前，以下哪个坐标与其它坐标不重合。（）",
    options: {
      A: "WORLD",
      B: "JGFRM",
      C: "TOOL",
      D: "USER"
    },
    answer: "C",
    category: "坐标系"
  },
  {
    id: 32,
    type: "single_choice",
    question: "FANUC机器人在默认情况下为用户提供有（）个工具坐标系。",
    options: {
      A: "1",
      B: "5",
      C: "9",
      D: "10"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 33,
    type: "single_choice",
    question: "关于TCP点的位置设置，以下说法不正确的是（）。",
    options: {
      A: "TCP点设置在手抓中心",
      B: "TCP点设置在焊丝端部",
      C: "TCP点设置在点焊静臂前段",
      D: "TCP点设置在一轴底座中心"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 34,
    type: "single_choice",
    question: "工业机器人针对斜面上的工件进行搬运示教编程时，使用（）坐标系更快速简便。",
    options: {
      A: "WORLD",
      B: "JOINT",
      C: "TOOL",
      D: "USER"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 35,
    type: "single_choice",
    question: "FANUC机器人在默认情况下为用户提供有（）个用户坐标系。",
    options: {
      A: "1",
      B: "5",
      C: "9",
      D: "10"
    },
    answer: "C",
    category: "坐标系"
  },
  {
    id: 36,
    type: "single_choice",
    question: "使用三点法定义工具坐标系时，以下说法错误的是（）。",
    options: {
      A: "TCP点位置发生了变化",
      B: "TCP点XYZ方向发生了改变",
      C: "TCP点XYZ方向没有发生改变",
      D: "新的工具坐标系是在原有坐标系的偏移"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 37,
    type: "single_choice",
    question: "使用六点法定义工具坐标系时，以下说法错误的是（）。",
    options: {
      A: "TCP点位置发生了变化",
      B: "TCP点XYZ方向不能改变",
      C: "TCP点XYZ方向可以改变",
      D: "新的工具坐标系是在原有坐标系的偏移"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 38,
    type: "single_choice",
    question: "（）不是用来创建工具坐标系的设置方法。",
    options: {
      A: "三点法",
      B: "六点法",
      C: "直接输入法",
      D: "记录法"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 39,
    type: "single_choice",
    question: "使用三点法定义工具坐标系时，工具需要以不同的姿态对应（）。",
    options: {
      A: "同一个固定点",
      B: "三个不同的点",
      C: "六个不同的点",
      D: "以上皆可"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 40,
    type: "single_choice",
    question: "使用六点法定义工具坐标系时，工具需要以不同的姿态对应（）。",
    options: {
      A: "同一个固定点",
      B: "三个不同的点",
      C: "六个不同的点",
      D: "以上说法皆错误"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 41,
    type: "single_choice",
    question: "在三点法设置坐标系界面中，X、Y、Z中的数据代表（）。",
    options: {
      A: "当前TCP点与六轴法兰盘中心的偏移量",
      B: "当前TCP点在世界坐标系中的坐标",
      C: "当前TCP点在关节坐标系中的坐标",
      D: "当前TCP点与基点的距离"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 42,
    type: "single_choice",
    question: "在六点法设置坐标系界面中，X、Y、Z中的数据代表（）。",
    options: {
      A: "当前TCP点与六轴法兰盘中心的偏移量",
      B: "当前TCP点在世界坐标系中的坐标",
      C: "当前TCP点在关节坐标系中的坐标",
      D: "当前TCP点与基点的距离"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 43,
    type: "single_choice",
    question: "在三点法设置坐标系界面中，W、P、R中的数据代表（）。",
    options: {
      A: "工具坐标系与默认工具坐标系的旋转量",
      B: "当前TCP点在世界坐标系中的坐标",
      C: "当前TCP点与六轴法兰盘中心的偏移量",
      D: "当前TCP点与基点的距离"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 44,
    type: "single_choice",
    question: "在六点法设置坐标系界面中，W、P、R中的数据代表（）。",
    options: {
      A: "工具坐标系与默认工具坐标系的旋转量",
      B: "当前TCP点在世界坐标系中的坐标",
      C: "当前TCP点与六轴法兰盘中心的偏移量",
      D: "当前TCP点与基点的距离"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 45,
    type: "single_choice",
    question: "当为机器人配备由两个夹具组成的组合夹具时，应为该组合夹具设置（）个工具坐标系。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 46,
    type: "single_choice",
    question: "机器人上的夹具由一个气爪和一个吸盘组成，应为该组合夹具设置（）个工具坐标系。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 47,
    type: "single_choice",
    question: "关于工具坐标系，以下说法正确的是（）。",
    options: {
      A: "必须为安装夹具定义一个工具坐标系",
      B: "工具坐标系可有可无",
      C: "为安装夹具定义一个工具坐标系",
      D: "是否需要定义工具坐标系，可依据夹具的使用用途确定"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 48,
    type: "single_choice",
    question: "以下关于工具坐标系说法正确的是（）。",
    options: {
      A: "默认的工具坐标系，TCP点在六轴法兰盘中心",
      B: "必须为每一个夹具定义一个新的工具坐标系",
      C: "使用三点法新建工具坐标系，可以任意改变工具坐标系方向",
      D: "三点法设置的工具坐标系平均误差要高于六点法"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 49,
    type: "single_choice",
    question: "以下关于工具坐标系说法错误的是（）。",
    options: {
      A: "默认的工具坐标系，TCP点在六轴法兰盘中心",
      B: "是否需要定义工具坐标系，可依据夹具的使用用途确定",
      C: "使用三点法新建工具坐标系，不可以改变工具坐标系方向",
      D: "使用六点法新建工具坐标系，不可以改变工具坐标系方向"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 50,
    type: "single_choice",
    question: "关于工具坐标系设置方法的选择，以下说法正确的是（）。",
    options: {
      A: "三点法适用于为任何夹具建立工具坐标系",
      B: "三点法适用于（X,Y,Z）发生变化，（W,P,R)不发生变化的情况",
      C: "六点法适用于（X,Y,Z）发生变化，（W,P,R)不发生变化的情况",
      D: "直接输入法适用于知道夹具具体尺寸的情况"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 51,
    type: "single_choice",
    question: "使用三点法建立工具坐标系时，各个点的机器人姿态应（）。",
    options: {
      A: "相同",
      B: "不相同",
      C: "不用全相同",
      D: "以上说法皆错误"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 52,
    type: "single_choice",
    question: "机器人使用吸盘完成（）的操作，应为吸盘建立工具坐标系。",
    options: {
      A: "工件从一个位置搬运到另一个位置",
      B: "工件搬运过程中有姿态变化需求",
      C: "工件要搬运到好几个位置",
      D: "ABC全部正确"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 53,
    type: "single_choice",
    question: "使用三点法创建工具坐标系时，通常使用（）调整姿态后去接触基准点。",
    options: {
      A: "WORLD",
      B: "JOINT",
      C: "TOOL",
      D: "USER"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 54,
    type: "single_choice",
    question: "使用六点法创建工具坐标系时，通常使用（）调整姿态后去接触基准点。",
    options: {
      A: "WORLD",
      B: "JOINT",
      C: "TOOL",
      D: "USER"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 55,
    type: "single_choice",
    question: "使用直接输入法创建工具坐标系时，输入的数值为（）。",
    options: {
      A: "新的TCP点的绝对坐标值",
      B: "新的TCP点与六轴法兰盘中心的偏移值",
      C: "六个数值必须不为零",
      D: "以上说法都正确"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 56,
    type: "single_choice",
    question: "使用以下哪种方法创建工具坐标系时，不可改变坐标系各轴的方向。（）",
    options: {
      A: "三点法",
      B: "六点法（XZ)",
      C: "六点法（XY）",
      D: "直接输入法"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 57,
    type: "single_choice",
    question: "在创建工具坐标系时，可以采用（）创建新的工具坐标系。",
    options: {
      A: "三点法、六点法以及直接输入法中的一种",
      B: "三点法结合直接输入法",
      C: "六点法结合直接输入法",
      D: "三点法结合六点法"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 58,
    type: "single_choice",
    question: "机器人在工作中需要使用两个快换夹具，需为快换夹具各设置（）个工具坐标系。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 59,
    type: "single_choice",
    question: "使用三点法设置工具坐标系时，三个点都需要变换工业机器人的（）去对准基准点。",
    options: {
      A: "TCP点",
      B: "姿态",
      C: "位置",
      D: "角度"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 60,
    type: "single_choice",
    question: "在创建工具坐标系时，关于三点法和六点法的比较，以下说法正确的是（）。",
    options: {
      A: "三点法的精度高",
      B: "六点法的精度高",
      C: "六点法只是比三点法在基准点上多对3个点",
      D: "六点法可以改变工具坐标系方向，三点法无法改变"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 61,
    type: "single_choice",
    question: "使用六点法(XZ)创建工具坐标系，第四、第五点用来确定工具坐标系的（）。",
    options: {
      A: "方向",
      B: "绝对位置",
      C: "TCP",
      D: "相对位置"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 62,
    type: "single_choice",
    question: "使用六点法（XY)创建工具坐标系，第四、第五点用来确定工具坐标系的（）。",
    options: {
      A: "方向",
      B: "绝对位置",
      C: "TCP",
      D: "相对位置"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 63,
    type: "single_choice",
    question: "使用六点法（XZ)创建工具坐标系，第一到第三个点用来确定工具坐标系的（）。",
    options: {
      A: "方向",
      B: "绝对位置",
      C: "TCP",
      D: "相对位置"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 64,
    type: "single_choice",
    question: "使用六点法（XY)创建工具坐标系，第一到第三个点用来确定工具坐标系的(）。",
    options: {
      A: "方向",
      B: "绝对位置",
      C: "TCP",
      D: "相对位置"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 65,
    type: "single_choice",
    question: "使用三点法（XY)创建工具坐标系，三个点都是用来确定工具坐标系的（）。",
    options: {
      A: "方向",
      B: "绝对位置",
      C: "TCP",
      D: "相对位置"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 66,
    type: "single_choice",
    question: "关于创建用户坐标系，以下说法正确的是（）。",
    options: {
      A: "必须为机器人创建新的用户坐标系",
      B: "是否需要创建用户坐标系取决于机器人现场工作需求",
      C: "一个工作场合智能创建一个用户坐标系",
      D: "以上说法全错"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 67,
    type: "single_choice",
    question: "以下哪种方法不是用来设置用户坐标系的。（）",
    options: {
      A: "三点法",
      B: "四点法",
      C: "直接输入法",
      D: "六点法（XY)"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 68,
    type: "single_choice",
    question: "在使用三点法设置用户坐标系时，第一个点是用户坐标系的（）。",
    options: {
      A: "坐标原点",
      B: "基准点",
      C: "X方向点",
      D: "Y方向点"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 69,
    type: "single_choice",
    question: "在用户坐标系设置界面，X,Y,Z的数据代表的是（）。",
    options: {
      A: "当前用户坐标系原点相对于世界坐标系原点的偏移量",
      B: "当前用户坐标系相对于六轴法兰盘中心的偏移量",
      C: "机器人新的TCP点",
      D: "当前用户坐标系原点相对于世界坐标系原点的偏移量"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 70,
    type: "single_choice",
    question: "工业机器人是通过（）手动操作各轴运动。",
    options: {
      A: "示教器",
      B: "控制柜",
      C: "PLC",
      D: "搬动本体"
    },
    answer: "A",
    category: "机器人操作"
  },
  {
    id: 71,
    type: "single_choice",
    question: "手动操作FANUC机器人时，需同时按下（）按键方可运动。",
    options: {
      A: "DEADMAN+SHIFT+运动键",
      B: "DEADMAN+运动键",
      C: "运动键",
      D: "SHIFT+运动键"
    },
    answer: "A",
    category: "机器人操作"
  },
  {
    id: 72,
    type: "single_choice",
    question: "手动操作FANUC机器人时，运动模式开关应处于（）。",
    options: {
      A: "T1或T2",
      B: "T1或AUTO",
      C: "T2或AUTO",
      D: "ABC皆可"
    },
    answer: "A",
    category: "机器人操作"
  },
  {
    id: 73,
    type: "single_choice",
    question: "关于手动操作FANUC机器人，以下说法错误的是（）。",
    options: {
      A: "松开运动键，机器人停止运动",
      B: "松开DEADMAN，机器人停止运动",
      C: "松开SHIFT键，机器人停止运动",
      D: "按下停止按钮，机器人停止运动"
    },
    answer: "D",
    category: "机器人操作"
  },
  {
    id: 74,
    type: "single_choice",
    question: "手动操作FANUC机器人时，按下（），机器人无法运动。",
    options: {
      A: "紧急停止按钮",
      B: "DEADMAN+运动键",
      C: "运动键",
      D: "SHIFT+运动键"
    },
    answer: "A",
    category: "机器人操作"
  },
  {
    id: 75,
    type: "single_choice",
    question: "关于机器人紧急停止按钮，以下说法错误的是（）。",
    options: {
      A: "按下示教器紧急停止按钮，机器人立即停止",
      B: "按下控制柜紧急停止按钮，机器人立即停机",
      C: "必须同时按下示教以及控制柜的紧急停止按钮，机器人才会停止",
      D: "单独按下示教器紧急停止按钮或者控制柜紧急停止按钮，机器人都会停止"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 76,
    type: "single_choice",
    question: "当机器人即将发生碰撞时，应快速按下（）。",
    options: {
      A: "停止按钮",
      B: "运动键",
      C: "紧急停止按钮",
      D: "电源开关"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 77,
    type: "single_choice",
    question: "当发现有人无意靠近工业机器人运动范围内时，应快速按下（）。",
    options: {
      A: "停止按钮",
      B: "运动键",
      C: "紧急停止按钮",
      D: "电源开关"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 78,
    type: "single_choice",
    question: "当机器人的搬运对象较为轻巧，上表面为光滑平面，侧面为不规则表面，为机器人配置（）为较优方案。",
    options: {
      A: "气动吸盘",
      B: "两折气爪",
      C: "三折气爪",
      D: "电磁吸盘"
    },
    answer: "A",
    category: "末端执行器"
  },
  {
    id: 79,
    type: "single_choice",
    question: "工业机器人（）适合夹持方形工件。",
    options: {
      A: "V型手指",
      B: "平面指",
      C: "尖指",
      D: "特型指"
    },
    answer: "B",
    category: "末端执行器"
  },
  {
    id: 80,
    type: "single_choice",
    question: "吸盘适用于夹持（）的工件。",
    options: {
      A: "圆形",
      B: "不规则",
      C: "具有光滑平面",
      D: "任意类型"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 81,
    type: "single_choice",
    question: "工业机器人在（）情况下，应选用快换夹具。",
    options: {
      A: "搬运圆形工件",
      B: "搬运方形工件",
      C: "搬运形状不规则工件",
      D: "搬运多种形状不一的工件"
    },
    answer: "D",
    category: "末端执行器"
  },
  {
    id: 82,
    type: "single_choice",
    question: "手动操作机器人实现单轴运动，应在示教器上切换成（）坐标系。",
    options: {
      A: "WORLD",
      B: "JOINT",
      C: "TOOL",
      D: "USER"
    },
    answer: "B",
    category: "机器人操作"
  },
  {
    id: 83,
    type: "single_choice",
    question: "手动操作机器人实现线性运动，在示教器上切换到（）坐标系无法实现。",
    options: {
      A: "WORLD",
      B: "JOINT",
      C: "TOOL",
      D: "USER"
    },
    answer: "B",
    category: "机器人操作"
  },
  {
    id: 84,
    type: "single_choice",
    question: "手动操作机器人时，同时按下两个轴的运动键，机器人（）。",
    options: {
      A: "不动",
      B: "单轴运动",
      C: "两个轴一起动作",
      D: "一个轴先动，另一个轴后动"
    },
    answer: "C",
    category: "机器人操作"
  },
  {
    id: 85,
    type: "single_choice",
    question: "当前坐标系为工具坐标系，按下示教器中的J4-J6的各个按键，机器人（）。",
    options: {
      A: "沿直线运动",
      B: "关节运动",
      C: "绕着TCP点转动",
      D: "TCP点沿着相应方向运动"
    },
    answer: "C",
    category: "机器人操作"
  },
  {
    id: 86,
    type: "single_choice",
    question: "使用示教器试运行程序，所运行的当前程序为（）。",
    options: {
      A: "示教器界面打开的程序",
      B: "程序表中的第一个程序",
      C: "程序表中的最后一个程序",
      D: "指定程序名的程序"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 87,
    type: "single_choice",
    question: "使用示教器试运行程序，按下（）按键进行程序选择。",
    options: {
      A: "MENU",
      B: "SECLET",
      C: "EDIT",
      D: "DATA"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 88,
    type: "single_choice",
    question: "使用示教器试运行程序，以下说法正确的是（）。",
    options: {
      A: "FANUC机器人需先加载程序才能试运行",
      B: "只需要切换到某程序界面，就可以直接试运行该程序",
      C: "被调用的程序不能进行试运行",
      D: "试运行程序必须从第一行程序开始执行"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 89,
    type: "single_choice",
    question: "当示教器状态栏中的STEP灯处于绿色背光状态，打开程序进行试运行时，机器人（）执行程序。",
    options: {
      A: "单步",
      B: "连续",
      C: "顺序",
      D: "逆序"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 90,
    type: "single_choice",
    question: "当示教器状态栏中的STEP灯处于黄色背光状态，打开程序进行试运行时，机器人（）执行程序。",
    options: {
      A: "单步",
      B: "连续",
      C: "顺序",
      D: "逆序"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 91,
    type: "single_choice",
    question: "当示教器状态栏中的STEP灯处于绿色背光状态，按下'FWD'按键试运行程序，机器人（）执行程序。",
    options: {
      A: "顺序单步",
      B: "逆序单步",
      C: "顺序连续",
      D: "逆序连续"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 92,
    type: "single_choice",
    question: "当示教器状态栏中的STEP灯处于黄色背光状态，按下'FWD'按键试运行程序，机器人（）执行程序。",
    options: {
      A: "顺序单步",
      B: "逆序单步",
      C: "顺序连续",
      D: "逆序连续"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 93,
    type: "single_choice",
    question: "当示教器状态栏中的STEP灯处于绿色背光状态，按下'BWD'按键试运行程序，机器人（）执行程序。",
    options: {
      A: "顺序单步",
      B: "逆序单步",
      C: "顺序连续",
      D: "逆序连续"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 94,
    type: "single_choice",
    question: "当示教器状态栏中的STEP灯处于黄色背光状态，按下'BWD'按键试运行程序，机器人（）执行程序。",
    options: {
      A: "顺序单步",
      B: "逆序单步",
      C: "顺序连续",
      D: "逆序连续"
    },
    answer: "D",
    category: "程序调试"
  },
  {
    id: 95,
    type: "single_choice",
    question: "按下'WFD'按键试运行程序，机器人（）执行程序。",
    options: {
      A: "单步",
      B: "连续",
      C: "顺序",
      D: "逆序"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 96,
    type: "single_choice",
    question: "按下'WFD'按键试运行程序，机器人（）执行程序。",
    options: {
      A: "单步",
      B: "连续",
      C: "顺序",
      D: "逆序"
    },
    answer: "D",
    category: "程序调试"
  },
  {
    id: 97,
    type: "single_choice",
    question: "模式开关处于T1位置时，关于程序试运行时的速度，说法正确的是（）。",
    options: {
      A: "程序设置的速度",
      B: "真实工作时的实际速度",
      C: "被限速的速度",
      D: "100%速度"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 98,
    type: "single_choice",
    question: "模式开关处于T2位置时，关于程序试运行时的速度，说法错误的是（）。",
    options: {
      A: "程序设置的速度",
      B: "真实工作时的实际速度",
      C: "被限速的速度",
      D: "100%速度"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 99,
    type: "single_choice",
    question: "使用示教器试运行程序时，机器人顺序单步执行程序所走的路径与实际工作时的路径（）。",
    options: {
      A: "一致",
      B: "不一致",
      C: "有可能一致",
      D: "ABC均不对"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 100,
    type: "single_choice",
    question: "示教器的DEADMAN有三个位置，当使用示教器试运行程序时，DEADMAN应一直处于（）。",
    options: {
      A: "放松位置",
      B: "抓紧位置",
      C: "中间位置",
      D: "放松或抓紧位置都可以"
    },
    answer: "C",
    category: "机器人操作"
  },
  {
    id: 101,
    type: "single_choice",
    question: "使用示教器试运行程序时，机器人逆序单步执行程序所走的路径与实际工作时的路径（）。",
    options: {
      A: "一致",
      B: "不一致",
      C: "有可能一致",
      D: "ABC均不对"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 102,
    type: "single_choice",
    question: "在AUTO模式下试运行程序，以下说法错误的是（）。",
    options: {
      A: "示教器TP开关应处于off位置",
      B: "应在运行前按下RESET键消除报警信息",
      C: "示教器TP开关可处于on位置",
      D: "按下控制柜的循环启动按钮启动程序"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 103,
    type: "single_choice",
    question: "使用单步试运行程序，以下说法正确的是（）。",
    options: {
      A: "示教器状态栏中的STEP灯处于绿色背光",
      B: "示教器状态栏中的STEP灯处于熄灭状态",
      C: "只需按一次FWD键，程序就一步步的执行下去",
      D: "只需按一次BWD键，程序就一步步的执行下去"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 104,
    type: "single_choice",
    question: "使用连续试运行程序，以下说法错误的是（）。",
    options: {
      A: "示教器状态栏中的STEP灯处于绿色背光",
      B: "示教器状态栏中的STEP灯处于熄灭状态",
      C: "只需按一次FWD键，程序就一步步的执行下去",
      D: "只需按一次BWD键，程序就一步步的执行下去"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 105,
    type: "single_choice",
    question: "某FANUC机器人程序有10个行号，使用顺序单步试运行该程序，需要按下FWD键（）次才能运行完整个程序。",
    options: {
      A: "1",
      B: "2",
      C: "10",
      D: "11"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 106,
    type: "single_choice",
    question: "某FANUC机器人程序有10个行号，使用逆序单步试运行该程序，需要按下BWD键（）次才能运行完整个程序。",
    options: {
      A: "1",
      B: "2",
      C: "10",
      D: "11"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 107,
    type: "single_choice",
    question: "某机器人程序在使用单步试运行时，机器人执行某行程序后能准确到达A点，但在实际连续工作中，机器人不再通过该点，其原因是（）。",
    options: {
      A: "该行程序CNT参数设置了转弯半径",
      B: "该行程序CNT参数没有设置转弯半径",
      C: "该行程序使用了FINE",
      D: "以上说法均错误"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 108,
    type: "single_choice",
    question: "通过试运行程序后，观察机器人运动过程，发现有一个点误差较大，以下正确的修改方法为（）。",
    options: {
      A: "将光标移至该行，重新示教好该点位置并记录",
      B: "除了修正该点位置，其前点和后点都必须重新示教和记录",
      C: "重新编写程序",
      D: "重新示教每一个点"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 109,
    type: "single_choice",
    question: "使用示教器试运行调试程序，确认机器人运行速度是否符合工作任务要求，应该将模式开关打到（）模式。",
    options: {
      A: "T1或T2",
      B: "T1",
      C: "T2",
      D: "AUTO"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 110,
    type: "single_choice",
    question: "在各种模式下试运行程序，（）模式下的运行速度是一致的。",
    options: {
      A: "T1和T2",
      B: "T1和AUTO",
      C: "T2和AUTO",
      D: "T1、T2和AUTO"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 111,
    type: "single_choice",
    question: "机器人的末端操作器是吸盘，单步试运行，能到达A点去吸取工件，切换到AUTO模式下运行程序，机器人没有到达该点去吸取工件，应如何修改程序？（）",
    options: {
      A: "将程序中的CNT参数修改为FINE",
      B: "将程序中的FINE参数修改为CNT",
      C: "重新示教该点",
      D: "增加一个示教点"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 112,
    type: "single_choice",
    question: "机器人试运行过程中，使用（）指令使得轨迹经过奇异点，不发生报警。",
    options: {
      A: "J",
      B: "L",
      C: "C",
      D: "L或C"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 113,
    type: "single_choice",
    question: "随着焊接过程推进，焊枪能依据焊接工艺相应调整焊接姿态，应为该焊枪设置（）。",
    options: {
      A: "工具坐标系",
      B: "用户坐标系",
      C: "世界坐标系",
      D: "关节坐标系"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 114,
    type: "single_choice",
    question: "在程序试运行过程中，WAIT指令后的时间参数，与实际时间（）。",
    options: {
      A: "一致",
      B: "比实际时间慢",
      C: "比实际时间快",
      D: "不一致"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 115,
    type: "single_choice",
    question: "在程序试运行过程中，发现某行程序的执行速度过慢，以下说法正确的是（）。",
    options: {
      A: "修改速度参数",
      B: "需要重新示教该点",
      C: "需要重新调整姿态",
      D: "重新示教该点并修改速度参数"
    },
    answer: "A",
    category: "程序调试"
  },
  {
    id: 116,
    type: "single_choice",
    question: "在程序试运行过程中，发现机器人执行某行程序时位置发生偏离，以下说法正确的是（）。",
    options: {
      A: "只需要修改速度参数",
      B: "需要重新示教该点",
      C: "需要重新调整姿态",
      D: "重新示教该点并修改速度参数"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 117,
    type: "single_choice",
    question: "在程序试运行过程中，发现机器人执行某行程序时姿态不符合工作任务要求，以下说法正确的是（）。",
    options: {
      A: "只需要修改速度参数",
      B: "需要重新示教该点位置",
      C: "需要重新调整姿态并示教该点",
      D: "重新示教该点并修改速度参数"
    },
    answer: "C",
    category: "程序调试"
  },
  {
    id: 118,
    type: "single_choice",
    question: "FANUC机器人R-30iBMate控制柜不支持（）备份。",
    options: {
      A: "Memory Card",
      B: "USB",
      C: "PC",
      D: "MC、USB、PC"
    },
    answer: "A",
    category: "数据备份"
  },
  {
    id: 119,
    type: "single_choice",
    question: "备份文件形式为(*.TP)的文件类型为（）。",
    options: {
      A: "程序文件",
      B: "默认的逻辑文件",
      C: "系统文件",
      D: "IO配置文件"
    },
    answer: "A",
    category: "数据备份"
  },
  {
    id: 120,
    type: "single_choice",
    question: "备份文件形式为(*.DF)的文件类型为（）。",
    options: {
      A: "程序文件",
      B: "默认的逻辑文件",
      C: "系统文件",
      D: "IO配置文件"
    },
    answer: "B",
    category: "数据备份"
  },
  {
    id: 121,
    type: "single_choice",
    question: "备份文件形式为(*.SV)的文件类型为（）。",
    options: {
      A: "程序文件",
      B: "默认的逻辑文件",
      C: "系统文件",
      D: "IO配置文件"
    },
    answer: "C",
    category: "数据备份"
  },
  {
    id: 122,
    type: "single_choice",
    question: "备份文件形式为(*.I/O)的文件类型为（）。",
    options: {
      A: "程序文件",
      B: "默认的逻辑文件",
      C: "系统文件",
      D: "IO配置文件"
    },
    answer: "D",
    category: "数据备份"
  },
  {
    id: 123,
    type: "single_choice",
    question: "备份文件形式为(*.VR)的文件类型为（）。",
    options: {
      A: "程序文件",
      B: "默认的逻辑文件",
      C: "系统文件",
      D: "数据文件"
    },
    answer: "D",
    category: "数据备份"
  },
  {
    id: 124,
    type: "single_choice",
    question: "以下选项中的（）不是FANUC机器人的备份/加载方法。",
    options: {
      A: "一般模式",
      B: "控制启动模式",
      C: "BootMonitor模式",
      D: "自动模式"
    },
    answer: "D",
    category: "数据备份"
  },
  {
    id: 125,
    type: "single_choice",
    question: "在一般模式下，关于单个文件加载，以下说法错误的是（）。",
    options: {
      A: "写保护文件不能被加载",
      B: "处于编辑状态的文件不能被加载",
      C: "部分系统文件不能被加载",
      D: "所有程序文件不能被加载"
    },
    answer: "D",
    category: "数据备份"
  },
  {
    id: 126,
    type: "single_choice",
    question: "在控制启动模式模式下，关于单个文件加载，以下说法错误的是（）。",
    options: {
      A: "写保护文件不能被加载",
      B: "处于编辑状态的文件不能被加载",
      C: "部分系统文件不能被加载",
      D: "未写保护程序文件可以被加载"
    },
    answer: "C",
    category: "数据备份"
  },
  {
    id: 127,
    type: "single_choice",
    question: "在BootMonitor模式下，关于备份文件加载，以下说法错误的是（）。",
    options: {
      A: "程序文件可以被加载",
      B: "IO配置文件可以被加载",
      C: "数据文件可以被加载",
      D: "所有系统文件不能被加载"
    },
    answer: "D",
    category: "数据备份"
  },
  {
    id: 128,
    type: "single_choice",
    question: "BootMonitor模式下备份与加载，需同时按下（）开机进入BMONMENU菜单。",
    options: {
      A: "F1+F2",
      B: "F1+F3",
      C: "F1+F4",
      D: "F1+F5"
    },
    answer: "D",
    category: "数据备份"
  },
  {
    id: 129,
    type: "single_choice",
    question: "在一般模式下，导出程序文件的操作为（）。",
    options: {
      A: "依次按键操作：MENU-FILE-UTIL-Set device-TP programs",
      B: "依次按键操作：MENU-SETUP-UTIL-Set device-TP programs",
      C: "依次按键操作：MENU-IO-UTIL-Set device-TP programs",
      D: "依次按键操作：MENU-USER-UTIL-Set device-TP programs"
    },
    answer: "A",
    category: "数据备份"
  },
  {
    id: 130,
    type: "single_choice",
    question: "在一般模式下，导出诊断文件的操作为（）。",
    options: {
      A: "依次按键操作：MENU-FILE-UTIL-Set device-Diagnastic",
      B: "依次按键操作：MENU-SETUP-UTIL-Set device-Diagnastic",
      C: "依次按键操作：MENU-IO-UTIL-Set device-Diagnastic",
      D: "依次按键操作：MENU-USER-UTIL-Set device-Diagnastic"
    },
    answer: "A",
    category: "数据备份"
  },
  {
    id: 131,
    type: "single_choice",
    question: "在控制启动模式下的备份与加载，同时按下（）按键开机进入CONTROLLED START模式。",
    options: {
      A: "PREV+NEXT",
      B: "F1+F2",
      C: "F1+F4",
      D: "F1+F5"
    },
    answer: "A",
    category: "数据备份"
  },
  {
    id: 132,
    type: "single_choice",
    question: "在控制启动模式下导入备份后，以下说法正确的是（）。",
    options: {
      A: "可以直接正常操作机器人",
      B: "备份文件直接生效",
      C: "需冷开机后进入一般模式，机器人才可以正常操作",
      D: "以上说法均正确"
    },
    answer: "C",
    category: "数据备份"
  },
  {
    id: 133,
    type: "single_choice",
    question: "BootMonitor模式下备份与加载，以下说法正确的是（）。",
    options: {
      A: "可以直接正常操作机器人",
      B: "备份文件直接生效",
      C: "需冷开机后进入一般模式，机器人才可以正常操作",
      D: "以上说法均正确"
    },
    answer: "C",
    category: "数据备份"
  },
  {
    id: 134,
    type: "single_choice",
    question: "创建程序时，程序名不能以（）作为开头。",
    options: {
      A: "空格、符号",
      B: "符号、数字",
      C: "空格、数字",
      D: "空格、符号、数字"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 135,
    type: "single_choice",
    question: "按下（）按键可以显示程序目录界面。",
    options: {
      A: "【SELECT】",
      B: "【EDIT】",
      C: "【DATA】",
      D: "【MENU】"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 136,
    type: "single_choice",
    question: "在创建程序时，程序命名方式有哪几种？（）",
    options: {
      A: "单词、大写、小写、数字",
      B: "单词、数字、字母、其他/键盘",
      C: "大写、小写、其他/键盘、数字",
      D: "单词、大写、小写、其他/键盘"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 137,
    type: "single_choice",
    question: "创建程序时，在单词方式下，功能键'F1'对应于哪个单词。（）",
    options: {
      A: "RSR",
      B: "PNS",
      C: "STYLE",
      D: "JOB"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 138,
    type: "single_choice",
    question: "创建程序时，在单词方式下，功能键'F2'对应于哪个单词。（）",
    options: {
      A: "RSR",
      B: "PNS",
      C: "STYLE",
      D: "JOB"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 139,
    type: "single_choice",
    question: "创建程序时，在单词方式下，功能键'F3'对应于哪个单词。（）",
    options: {
      A: "RSR",
      B: "PNS",
      C: "STYLE",
      D: "JOB"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 140,
    type: "single_choice",
    question: "创建程序时，在单词方式下，功能键'F4'对应于哪个单词。（）",
    options: {
      A: "RSR",
      B: "PNS",
      C: "STYLE",
      D: "JOB"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 141,
    type: "single_choice",
    question: "创建程序时，在单词方式下，功能键'F5'对应于哪个单词。（）",
    options: {
      A: "RSR",
      B: "PNS",
      C: "STYLE",
      D: "TEST"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 142,
    type: "single_choice",
    question: "创建程序时，在单词方式下，没有以下哪个单词。（）",
    options: {
      A: "RSR",
      B: "PNS",
      C: "STYLE",
      D: "SELECT"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 143,
    type: "single_choice",
    question: "程序名的长度最多为（）个字符？",
    options: {
      A: "6",
      B: "7",
      C: "8",
      D: "9"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 144,
    type: "single_choice",
    question: "程序的详细信息界面不包含以下哪个信息？（）",
    options: {
      A: "创建日期",
      B: "读保护",
      C: "程序名",
      D: "修改日期"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 145,
    type: "single_choice",
    question: "以下哪个程序命名是不符合要求的。（）",
    options: {
      A: "Test1",
      B: "1Test",
      C: "Test_",
      D: "Test_1"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 146,
    type: "single_choice",
    question: "程序一览界面底部的功能不包含以下哪个。（）",
    options: {
      A: "创建",
      B: "复制",
      C: "粘贴",
      D: "删除"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 147,
    type: "single_choice",
    question: "当机器人需要进行RSR自动运行时，其程序命名格式应为。（）",
    options: {
      A: "RSR +3 位数字",
      B: "RSR +4 位数字",
      C: "RSR +5 位数字",
      D: "任意命名即可"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 148,
    type: "single_choice",
    question: "当机器人需要进行PNS自动运行时，其程序命名格式应为。（）",
    options: {
      A: "PNS +3 位数字",
      B: "PNS +4 位数字",
      C: "PNS +5 位数字",
      D: "任意命名即可"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 149,
    type: "single_choice",
    question: "FANUC工业机器人运动类型不包含以下哪个？（）",
    options: {
      A: "直线运动",
      B: "关节运动",
      C: "圆弧运动",
      D: "曲线运动"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 150,
    type: "single_choice",
    question: "当CNT为以下哪个值时，离目标位置最远。（）",
    options: {
      A: "100",
      B: "60",
      C: "30",
      D: "0"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 151,
    type: "single_choice",
    question: "当CNT为以下哪个值时，离目标位置最近。（）",
    options: {
      A: "100",
      B: "60",
      C: "30",
      D: "0"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 152,
    type: "single_choice",
    question: "以下哪种运动类型不进行轨迹和姿势控制。（）",
    options: {
      A: "直线运动L",
      B: "关节运动J",
      C: "圆弧运动C",
      D: "圆弧运动A"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 153,
    type: "single_choice",
    question: "以下哪个是关节运动的速度单位。（）",
    options: {
      A: "mm/s",
      B: "cm/min",
      C: "%",
      D: "in/min"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 154,
    type: "single_choice",
    question: "在位置数据中，UF表示什么坐标系？（）",
    options: {
      A: "用户坐标系",
      B: "关节坐标系",
      C: "工具坐标系",
      D: "世界坐标系"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 155,
    type: "single_choice",
    question: "在位置数据中，UT表示什么坐标系？（）",
    options: {
      A: "用户坐标系",
      B: "关节坐标系",
      C: "工具坐标系",
      D: "世界坐标系"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 156,
    type: "single_choice",
    question: "以下哪个单位是三种运动类型共有的运动单位。（）",
    options: {
      A: "mm/s",
      B: "cm/min",
      C: "%",
      D: "ms"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 157,
    type: "single_choice",
    question: "以下哪个不能作为运动指令中位置数据？（）",
    options: {
      A: "R[i]",
      B: "P[i]",
      C: "PR[i]",
      D: "PR[R[i]]"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 158,
    type: "single_choice",
    question: "运动指令中的CNT表示什么？（）",
    options: {
      A: "计数器",
      B: "累加器",
      C: "转弯半径",
      D: "精确定位"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 159,
    type: "single_choice",
    question: "以下哪个不是FANUC工业机器人运动指令中包含的信息。（）",
    options: {
      A: "运动类型",
      B: "定位类型",
      C: "移动速度",
      D: "运动长度"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 160,
    type: "single_choice",
    question: "deg/sec是那种运动的速度单位。（）",
    options: {
      A: "旋转运动",
      B: "关节运动J",
      C: "圆弧运动C",
      D: "圆弧运动A"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 161,
    type: "single_choice",
    question: "在运动指令中，位置数据前的'@'表示什么？（）",
    options: {
      A: "上一次到达的位置",
      B: "下一次即将到达的位置",
      C: "当前位置",
      D: "程序运行到该条运动指令"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 162,
    type: "single_choice",
    question: "运动指令中的FINE表示什么？（）",
    options: {
      A: "精确定位",
      B: "非精确定位",
      C: "模糊定位",
      D: "机器人准备就绪"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 163,
    type: "single_choice",
    question: "当关节运动的移动速度单位为'%'时，其可以取值的范围是多少？（）",
    options: {
      A: "0%~100%",
      B: "1%~100%",
      C: "2%~100%",
      D: "1%~99%"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 164,
    type: "single_choice",
    question: "以下哪个不是运动附加指令？（）",
    options: {
      A: "ACC",
      B: "Offset",
      C: "CNT",
      D: "INC"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 165,
    type: "single_choice",
    question: "机器人在运动时，CNT值一定，此时（）",
    options: {
      A: "速度越小，越接近示教点",
      B: "速度越大，越接近示教点",
      C: "速度适中，最接近示教点",
      D: "轨迹与速度无关"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 166,
    type: "single_choice",
    question: "在编写运动指令时，直线运动用什么符号表示。（）",
    options: {
      A: "L",
      B: "J",
      C: "C",
      D: "A"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 167,
    type: "single_choice",
    question: "在编写运动指令时，关节运动用什么符号表示。（）",
    options: {
      A: "L",
      B: "J",
      C: "C",
      D: "A"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 168,
    type: "single_choice",
    question: "在编写运动指令时，圆弧运动用什么符号表示。（）",
    options: {
      A: "L",
      B: "J",
      C: "C或A",
      D: "以上均不正确"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 169,
    type: "single_choice",
    question: "在基于直角坐标系的位置数据中，不包括以下哪些值。（）",
    options: {
      A: "X，Y，Z",
      B: "W，P，R",
      C: "J1，J2，J3，J4，J5，J6",
      D: "以上均包括"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 170,
    type: "single_choice",
    question: "在基于关节坐标系的位置数据中，包括以下哪些值。（）",
    options: {
      A: "X，Y，Z",
      B: "W，P，R",
      C: "J1，J2，J3，J4，J5，J6",
      D: "以上均包括"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 171,
    type: "single_choice",
    question: "在位置数据中，'UF：0'表示什么坐标系？（）",
    options: {
      A: "编号为0的用户坐标系",
      B: "编号为0的工具坐标系",
      C: "默认的用户坐标系",
      D: "关节坐标系"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 172,
    type: "single_choice",
    question: "以下哪个单位不能作为关节运动的速度单位。（）",
    options: {
      A: "%",
      B: "s",
      C: "ms",
      D: "mm/s"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 173,
    type: "single_choice",
    question: "以下哪个单位不能作为直线运动的速度单位。（）",
    options: {
      A: "%",
      B: "s",
      C: "ms",
      D: "mm/s"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 174,
    type: "single_choice",
    question: "以下哪个单位不能作为圆弧运动的速度单位。（）",
    options: {
      A: "%",
      B: "s",
      C: "ms",
      D: "mm/s"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 175,
    type: "single_choice",
    question: "在直线运动中，mm/s 是常用的运动速度单位，LRmate200iD机器人其取值范围是（）。",
    options: {
      A: "1~500mm/s",
      B: "1~1000mm/s",
      C: "1~4000mm/s",
      D: "1~3000mm/s"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 176,
    type: "single_choice",
    question: "当定位类型为（）时，机器人会在目标位置停止后再向下一个目标位置移动。",
    options: {
      A: "FINE",
      B: "CNT1",
      C: "CNT50",
      D: "CNT100"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 177,
    type: "single_choice",
    question: "常用的运动附加指令'Offset'是什么指令？",
    options: {
      A: "加减速倍率指令",
      B: "位置补偿指令",
      C: "工具补偿指令",
      D: "增量指令"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 178,
    type: "single_choice",
    question: "直接按下TP上哪个按键可以直接进入程序编辑界面。",
    options: {
      A: "MENU",
      B: "SELECT",
      C: "EDIT",
      D: "DATA"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 179,
    type: "single_choice",
    question: "在编辑程序时，当把光标移动至运动指令的行号上，同时按下'SHIFT'+'F5'（TOUCHUP），此时位置数据（ ）",
    options: {
      A: "会被清空",
      B: "会被重置",
      C: "会被更新为机器人当前位置",
      D: "会被复制到剪贴板"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 180,
    type: "single_choice",
    question: "常用的运动附加指令'ACC'是什么指令？",
    options: {
      A: "加减速倍率指令",
      B: "位置补偿指令",
      C: "工具补偿指令",
      D: "增量指令"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 181,
    type: "single_choice",
    question: "常用的运动附加指令'Tool_Offset'是什么指令？",
    options: {
      A: "加减速倍率指令",
      B: "位置补偿指令",
      C: "工具补偿指令",
      D: "增量指令"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 182,
    type: "single_choice",
    question: "以下哪种信号不属于通用I/O信号。",
    options: {
      A: "DI/DO数字信号",
      B: "GI/GO组信号",
      C: "AI/AO模拟信号",
      D: "RI/RO机器人信号"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 183,
    type: "single_choice",
    question: "以下哪种信号不属于专用I/O信号。",
    options: {
      A: "RI/RO 机器人信号",
      B: "UI/UO 外围设备信号",
      C: "SI/SO 操作面板信号",
      D: "DI/DO 数字信号"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 184,
    type: "single_choice",
    question: "FANUC 机器人的通用 I/O 信号有（ ）种。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 185,
    type: "single_choice",
    question: "FANUC 机器人的专用 I/O 信号有（ ）种。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 186,
    type: "single_choice",
    question: "在 FANUC 机器人中，使用机架来标记 I/O 模块的种类，当机架号为 0 时表示以下哪种 I/O 模块。",
    options: {
      A: "处理I/O印制电路板",
      B: "I/O单元MODELAB",
      C: "I/O连接设备从机接口",
      D: "CRMA15/CRMA16"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 187,
    type: "single_choice",
    question: "在 FANUC 机器人中，使用机架来标记 I/O 模块的种类，当机架号为 1~16 时表示以下哪种 I/O 模块。",
    options: {
      A: "处理I/O印制电路板",
      B: "I/O单元MODELAB",
      C: "I/O连接设备从机接口",
      D: "CRMA15/CRMA16"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 188,
    type: "single_choice",
    question: "在 FANUC 机器人中，使用机架来标记 I/O 模块的种类，当机架号为 32 时表示以下哪种 I/O 模块。",
    options: {
      A: "处理I/O印制电路板",
      B: "I/O单元MODELAB",
      C: "I/O连接设备从机接口",
      D: "CRMA15/CRMA16"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 189,
    type: "single_choice",
    question: "在FANUC机器人中，使用机架来标记I/O模块的种类，当机架号为48时表示以下哪种I/O模块。",
    options: {
      A: "处理I/O印制电路板",
      B: "I/O单元MODELAB",
      C: "I/O连接设备从机接口",
      D: "CRMA15/CRMA16"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 190,
    type: "single_choice",
    question: "对I/O信号配置，需要进行一些参数进行设定，如RANGE（范围）、RACK（机架）、SLOT（插槽）等，那么，当STAT（状态）为ACTIVE时表示（）",
    options: {
      A: "激活",
      B: "未分配",
      C: "重启后生效",
      D: "无效"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 191,
    type: "single_choice",
    question: "对I/O信号配置，需要进行一些参数进行设定，如RANGE（范围）、RACK（机架）、SLOT（插槽）等，那么，当STAT（状态）为UNASG时表示（）",
    options: {
      A: "激活",
      B: "未分配",
      C: "重启后生效",
      D: "无效"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 192,
    type: "single_choice",
    question: "对I/O信号配置，需要进行一些参数进行设定，如RANGE（范围）、RACK（机架）、SLOT（插槽）等，那么，当STAT（状态）为PEND时表示（）",
    options: {
      A: "激活",
      B: "未分配",
      C: "重启后生效",
      D: "无效"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 193,
    type: "single_choice",
    question: "对I/O信号配置，需要进行一些参数进行设定，如RANGE（范围）、RACK（机架）、SLOT（插槽）等，那么，当STAT（状态）为Invalid时表示（）",
    options: {
      A: "激活",
      B: "未分配",
      C: "重启后生效",
      D: "无效"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 194,
    type: "single_choice",
    question: "在FANUC机器人中，数字输入信号DI[i]共有（）个。",
    options: {
      A: "128",
      B: "256",
      C: "512",
      D: "1024"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 195,
    type: "single_choice",
    question: "在FANUC机器人中，数字输出信号DO[i]共有（）个。",
    options: {
      A: "128",
      B: "256",
      C: "512",
      D: "1024"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 196,
    type: "single_choice",
    question: "在FANUC机器人中，外围设备输入信号UI[i]共有（）个。",
    options: {
      A: "18",
      B: "19",
      C: "20",
      D: "21"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 197,
    type: "single_choice",
    question: "在FANUC机器人中，外围设备输出信号UO[i]共有（）个。",
    options: {
      A: "18",
      B: "19",
      C: "20",
      D: "21"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 198,
    type: "single_choice",
    question: "在FANUC机器人中，操作面板输入信号SI[i]共有（）个。",
    options: {
      A: "13",
      B: "14",
      C: "15",
      D: "16"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 199,
    type: "single_choice",
    question: "在FANUC机器人中，操作面板输出信号SO[i]共有（）个。",
    options: {
      A: "13",
      B: "14",
      C: "15",
      D: "16"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 200,
    type: "single_choice",
    question: "在FANUC机器人中，工业机器人输入信号RI[i]共有（）个。",
    options: {
      A: "6",
      B: "7",
      C: "8",
      D: "9"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 201,
    type: "single_choice",
    question: "在FANUC机器人中，工业机器人输出信号RO[i]共有（）个。",
    options: {
      A: "6",
      B: "7",
      C: "8",
      D: "9"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 202,
    type: "single_choice",
    question: "外围设备输入信号UI[1]表示（）",
    options: {
      A: "IMSTP：紧急停机信号",
      B: "HOLD：暂停信号",
      C: "SFSPD：安全速度信号",
      D: "CycleStop：周期停止信号"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 203,
    type: "single_choice",
    question: "外围设备输入信号UI[2]表示（）",
    options: {
      A: "IMSTP：紧急停机信号",
      B: "HOLD: 暂停信号",
      C: "SFSPD: 安全速度信号",
      D: "Cycle Stop: 周期停止信号"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 204,
    type: "single_choice",
    question: "外围设备输入信号UI[3]表示（）",
    options: {
      A: "IMSTP：紧急停机信号",
      B: "HOLD：暂停信号",
      C: "SFSPD：安全速度信号",
      D: "CycleStop：周期停止信号"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 205,
    type: "single_choice",
    question: "外围设备输入信号UI[4]表示（）",
    options: {
      A: "IMSTP：紧急停机信号",
      B: "HOLD：暂停信号",
      C: "SFSPD：安全速度信号",
      D: "CycleStop：周期停止信号"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 206,
    type: "single_choice",
    question: "外围设备输入信号UI[5]表示（）",
    options: {
      A: "SFSPD：安全速度信号",
      B: "CycleStop：周期停止信号",
      C: "FaultReset：报警复位信号",
      D: "Start：启动信号"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 207,
    type: "single_choice",
    question: "外围设备输入信号UI[6]表示（）",
    options: {
      A: "SFSPD：安全速度信号",
      B: "CycleStop：周期停止信号",
      C: "FaultReset：报警复位信号",
      D: "Start：启动信号"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 208,
    type: "single_choice",
    question: "外围设备输入信号UI[7]表示（）",
    options: {
      A: "Home：回HOME信号",
      B: "Enable：使能信号",
      C: "Start：启动信号",
      D: "PNSTROBE：PNS选通信号"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 209,
    type: "single_choice",
    question: "外围设备输入信号UI[8]表示（）",
    options: {
      A: "Home：回HOME信号",
      B: "PNSTROBE：PNS选通信号",
      C: "FaultReset：报警复位信号",
      D: "Enable：使能信号"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 210,
    type: "single_choice",
    question: "外围设备输入信号UI[17]表示（）",
    options: {
      A: "Hold：暂停信号",
      B: "PNSTROBE：PNS选通信号",
      C: "Start：启动信号",
      D: "IMSTP：紧急停机信号"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 211,
    type: "single_choice",
    question: "外围设备输出信号UO[1]表示（）",
    options: {
      A: "Cmdenable：命令使能输出",
      B: "Systemready：系统准备完毕输出",
      C: "Prgrunning：程序执行状态输出",
      D: "Prgpaused：程序暂停状态输出"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 212,
    type: "single_choice",
    question: "外围设备输出信号UO[2]表示（）",
    options: {
      A: "Cmdenable：命令使能输出",
      B: "Systemready：系统准备完毕输出",
      C: "Prgrunning：程序执行状态输出",
      D: "Prgpaused：程序暂停状态输出"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 213,
    type: "single_choice",
    question: "外围设备输出信号UO[3]表示（）",
    options: {
      A: "Cmdenable：命令使能输出",
      B: "Systemready：系统准备完毕输出",
      C: "Prgrunning：程序执行状态输出",
      D: "Prgpaused：程序暂停状态输出"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 214,
    type: "single_choice",
    question: "外围设备输出信号UO[4]表示（）",
    options: {
      A: "Cmdenable：命令使能输出",
      B: "Systemready：系统准备完毕输出",
      C: "Prgrunning：程序执行状态输出",
      D: "Prgpaused：程序暂停状态输出"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 215,
    type: "single_choice",
    question: "外围设备输出信号UO[5]表示（）",
    options: {
      A: "Motionheld：暂停输出",
      B: "Fault：错误输出",
      C: "ATperch：工业机器人就位输出",
      D: "示教器使能输出"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 216,
    type: "single_choice",
    question: "外围设备输出信号UO[6]表示（）",
    options: {
      A: "Motionheld：暂停输出",
      B: "Fault：错误输出",
      C: "ATperch：工业机器人就位输出",
      D: "示教器使能输出"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 217,
    type: "single_choice",
    question: "外围设备输出信号UO[7]表示（）",
    options: {
      A: "Motionheld：暂停输出",
      B: "Fault：错误输出",
      C: "ATperch：工业机器人就位输出",
      D: "示教器使能输出"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 218,
    type: "single_choice",
    question: "外围设备输出信号UO[8]表示（）",
    options: {
      A: "Motionheld：暂停输出",
      B: "Fault：错误输出",
      C: "ATperch：工业机器人就位输出",
      D: "示教器使能输出"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 219,
    type: "single_choice",
    question: "外围设备输出信号UO[9]表示（）",
    options: {
      A: "Battalarm：电池报警输出",
      B: "Busy：处理器忙输出",
      C: "SNACK：信号数确认输出",
      D: "Fault：错误输出"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 220,
    type: "single_choice",
    question: "外围设备输出信号UO[10]表示（）",
    options: {
      A: "Battalarm：电池报警输出",
      B: "Busy：处理器忙输出",
      C: "SNACK：信号数确认输出",
      D: "Fault：错误输出"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 221,
    type: "single_choice",
    question: "外围设备输出信号UO[19]表示（）",
    options: {
      A: "Battalarm：电池报警输出",
      B: "Busy：处理器忙输出",
      C: "SNACK：信号数确认输出",
      D: "Fault：错误输出"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 222,
    type: "single_choice",
    question: "外围设备输出信号UO[20]表示（）",
    options: {
      A: "Battalarm：电池报警输出",
      B: "Busy：处理器忙输出",
      C: "SNACK：信号数确认输出",
      D: "Reserved: 预留信号"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 223,
    type: "single_choice",
    question: "系统信号UOP是工业机器人发送给和接收自远端控制器或周边设备的信号，可以实现以下哪些功能？（）",
    options: {
      A: "选择程序",
      B: "开始和停止程序",
      C: "从报警状态中恢复系统",
      D: "以上都可以实现"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 224,
    type: "single_choice",
    question: "UI[9]可以启动的RSR程序是（）",
    options: {
      A: "RSR1",
      B: "RSR2",
      C: "RSR3",
      D: "RSR4"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 225,
    type: "single_choice",
    question: "UI[10]可以启动的RSR程序是（）",
    options: {
      A: "RSR1",
      B: "RSR2",
      C: "RSR3",
      D: "RSR4"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 226,
    type: "single_choice",
    question: "UI[11]可以启动的RSR程序是（）",
    options: {
      A: "RSR1",
      B: "RSR2",
      C: "RSR3",
      D: "RSR4"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 227,
    type: "single_choice",
    question: "UI[12]可以启动的RSR程序是（）",
    options: {
      A: "RSR1",
      B: "RSR2",
      C: "RSR3",
      D: "RSR4"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 228,
    type: "single_choice",
    question: "UI[13]可以启动的RSR程序是（）",
    options: {
      A: "RSR5",
      B: "RSR6",
      C: "RSR7",
      D: "RSR8"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 229,
    type: "single_choice",
    question: "UI[14]可以启动的RSR程序是（）",
    options: {
      A: "RSR5",
      B: "RSR6",
      C: "RSR7",
      D: "RSR8"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 230,
    type: "single_choice",
    question: "UI[15]可以启动的RSR程序是（）",
    options: {
      A: "RSR5",
      B: "RSR6",
      C: "RSR7",
      D: "RSR8"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 231,
    type: "single_choice",
    question: "UI[16]可以启动的RSR程序是（）",
    options: {
      A: "RSR5",
      B: "RSR6",
      C: "RSR7",
      D: "RSR8"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 232,
    type: "single_choice",
    question: "标准情况下，FANUC工业机器人提供（）个一般寄存器R[i]。",
    options: {
      A: "50",
      B: "100",
      C: "200",
      D: "500"
    },
    answer: "C",
    category: "寄存器"
  },
  {
    id: 233,
    type: "single_choice",
    question: "标准情况下，FANUC工业机器人提供（）个位置寄存器PR[i]。",
    options: {
      A: "50",
      B: "100",
      C: "200",
      D: "500"
    },
    answer: "B",
    category: "寄存器"
  },
  {
    id: 234,
    type: "single_choice",
    question: "位置寄存器要素指令PR[i,j]中，i和j最大分别可以取到什么值？（）",
    options: {
      A: "100,5",
      B: "100,6",
      C: "200,5",
      D: "200,6"
    },
    answer: "B",
    category: "寄存器"
  },
  {
    id: 235,
    type: "single_choice",
    question: "PR[i,j]是位置寄存器要素指令，当 j = 1 时，在笛卡尔坐标系下表示哪个要素？（）",
    options: {
      A: "X",
      B: "Y",
      C: "Z",
      D: "W"
    },
    answer: "A",
    category: "寄存器"
  },
  {
    id: 236,
    type: "single_choice",
    question: "PR[i,j]是位置寄存器要素指令，当 j = 2 时，在笛卡尔坐标系下表示哪个要素？（）",
    options: {
      A: "X",
      B: "Y",
      C: "Z",
      D: "W"
    },
    answer: "B",
    category: "寄存器"
  },
  {
    id: 237,
    type: "single_choice",
    question: "PR[i,j]是位置寄存器要素指令，当 j = 3 时，在笛卡尔坐标系下表示哪个要素？（）",
    options: {
      A: "X",
      B: "Y",
      C: "Z",
      D: "W"
    },
    answer: "C",
    category: "寄存器"
  },
  {
    id: 238,
    type: "single_choice",
    question: "PR[i,j]是位置寄存器要素指令，当 j = 4 时，在笛卡尔坐标系下表示哪个要素？（）",
    options: {
      A: "X",
      B: "Y",
      C: "Z",
      D: "W"
    },
    answer: "D",
    category: "寄存器"
  },
  {
    id: 239,
    type: "single_choice",
    question: "PR[i,j]是位置寄存器要素指令，当 j = 5 时，在笛卡尔坐标系下表示哪个要素？(）",
    options: {
      A: "Z",
      B: "W",
      C: "P",
      D: "R"
    },
    answer: "C",
    category: "寄存器"
  },
  {
    id: 240,
    type: "single_choice",
    question: "PR[i,j]是位置寄存器要素指令，当 j = 6 时，在笛卡尔坐标系下表示哪个要素？(）",
    options: {
      A: "Z",
      B: "W",
      C: "P",
      D: "R"
    },
    answer: "D",
    category: "寄存器"
  },
  {
    id: 241,
    type: "single_choice",
    question: "PR[i，j]是位置寄存器要素指令，当 j = 1 时，在关节坐标系下表示哪个要素？(）",
    options: {
      A: "J1",
      B: "W",
      C: "X",
      D: "J4"
    },
    answer: "A",
    category: "寄存器"
  },
  {
    id: 242,
    type: "single_choice",
    question: "PR[i，j]是位置寄存器要素指令，当 j = 2 时，在关节坐标系下表示哪个要素？(）",
    options: {
      A: "X",
      B: "J2",
      C: "J3",
      D: "P"
    },
    answer: "B",
    category: "寄存器"
  },
  {
    id: 243,
    type: "single_choice",
    question: "PR[i，j]是位置寄存器要素指令，当 j = 3 时，在关节坐标系下表示哪个要素？(）",
    options: {
      A: "X",
      B: "R",
      C: "J3",
      D: "J4"
    },
    answer: "C",
    category: "寄存器"
  },
  {
    id: 244,
    type: "single_choice",
    question: "PR[i，j]是位置寄存器要素指令，当 j = 4 时，在关节坐标系下表示哪个要素？(）",
    options: {
      A: "Y",
      B: "J2",
      C: "Z",
      D: "J4"
    },
    answer: "D",
    category: "寄存器"
  },
  {
    id: 245,
    type: "single_choice",
    question: "PR[i，j]是位置寄存器要素指令，当 j = 5 时，在关节坐标系下表示哪个要素？(）",
    options: {
      A: "Z",
      B: "W",
      C: "J5",
      D: "J6"
    },
    answer: "C",
    category: "寄存器"
  },
  {
    id: 246,
    type: "single_choice",
    question: "PR[i，j]是位置寄存器要素指令，当 j = 6 时，在关节坐标系下表示哪个要素？(）",
    options: {
      A: "J3",
      B: "X",
      C: "P",
      D: "J6"
    },
    answer: "D",
    category: "寄存器"
  },
  {
    id: 247,
    type: "single_choice",
    question: "以下哪种信号不能自定义用途。（）",
    options: {
      A: "DI/DO数字信号",
      B: "GI/GO组信号",
      C: "AI/AO模拟信号",
      D: "RI/RO机器人信号"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 248,
    type: "single_choice",
    question: "以下哪种信号可以自定义用途。（）",
    options: {
      A: "RI/RO机器人信号",
      B: "UI/uo外围设备信号",
      C: "SI/SO操作面板信号",
      D: "DI/DO数字信号"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 249,
    type: "single_choice",
    question: "R[i]是什么寄存器？（）",
    options: {
      A: "数值寄存器",
      B: "位置寄存器",
      C: "码垛寄存器",
      D: "字符串寄存器"
    },
    answer: "A",
    category: "寄存器"
  },
  {
    id: 250,
    type: "single_choice",
    question: "PR[i]是什么寄存器？（）",
    options: {
      A: "数值寄存器",
      B: "位置寄存器",
      C: "码垛寄存器",
      D: "字符串寄存器"
    },
    answer: "B",
    category: "寄存器"
  },
  {
    id: 251,
    type: "single_choice",
    question: "PL[i]是什么寄存器？（）",
    options: {
      A: "数值寄存器",
      B: "位置寄存器",
      C: "码垛寄存器",
      D: "字符串寄存器"
    },
    answer: "C",
    category: "寄存器"
  },
  {
    id: 252,
    type: "single_choice",
    question: "DI[1]状态为OFF，R[1]的初始值为1，执行'R[1]=DI[R[1]]+R[1]'，则R[1]的结果是（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "执行错乱，产生随机数"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 253,
    type: "single_choice",
    question: "R[1]的初始值为5，R[2]=R[1]，R[3]=R[1]，则R[1]=R[2]+R[3]结果是（）",
    options: {
      A: "2",
      B: "5",
      C: "6",
      D: "10"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 254,
    type: "single_choice",
    question: "以下哪个赋值指令是不成立的？",
    options: {
      A: "DO[1]=PULSE",
      B: "DO[1]=PULSE，0.2sec",
      C: "DO[1]=R[1]",
      D: "DO[1]=PR[1]"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 255,
    type: "single_choice",
    question: "LPOS表示什么？",
    options: {
      A: "直角坐标系中的当前位置",
      B: "关节坐标系中的当前位置",
      C: "工具坐标系中的当前位置",
      D: "世界坐标系中的当前位置"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 256,
    type: "single_choice",
    question: "JPOS表示什么？",
    options: {
      A: "直角坐标系中的当前位置",
      B: "关节坐标系中的当前位置",
      C: "工具坐标系中的当前位置",
      D: "世界坐标系中的当前位置"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 257,
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
    id: 258,
    type: "single_choice",
    question: "传感器在全量程范围内实际特性曲线与拟合直线之间的最大偏差值与满量程输出值之比表示传感器的（）参数",
    options: {
      A: "抗干扰能力",
      B: "精度",
      C: "线性度",
      D: "灵敏度"
    },
    answer: "C",
    category: "传感器"
  },
  {
    id: 259,
    type: "single_choice",
    question: "传感器的基本转换电路是将敏感元件产生的易测量小信号进行变换，使传感器的信号输出符合具体工业系统的要求。一般为（）",
    options: {
      A: "4~20mA, -5~5V",
      B: "0~20mA,0~5V",
      C: "-20mA~20mA, -5~5V",
      D: "-20mA~20mA,0~5V"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 260,
    type: "single_choice",
    question: "以下哪种信号不能通过指令控制其输出。",
    options: {
      A: "AO",
      B: "DO",
      C: "GO",
      D: "UO"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 261,
    type: "single_choice",
    question: "SR[i]是什么寄存器？",
    options: {
      A: "数值寄存器",
      B: "位置寄存器",
      C: "码垛寄存器",
      D: "字符串寄存器"
    },
    answer: "D",
    category: "寄存器"
  },
  {
    id: 262,
    type: "single_choice",
    question: "码垛堆积根据堆上式样和经路式样设定方法的不同可分为（）种。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "C",
    category: "码垛"
  },
  {
    id: 263,
    type: "single_choice",
    question: "码垛堆积的方法有多种，以下哪个选项可以设定多个经路式样。",
    options: {
      A: "码垛堆积B、E",
      B: "码垛堆积B、BX",
      C: "码垛堆积E、EX",
      D: "码垛堆积BX、EX"
    },
    answer: "D",
    category: "码垛"
  },
  {
    id: 264,
    type: "single_choice",
    question: "在码垛堆积指令中，码垛堆积号码取值范围是（）",
    options: {
      A: "1~15",
      B: "1~16",
      C: "1~17",
      D: "1~18"
    },
    answer: "B",
    category: "码垛"
  },
  {
    id: 265,
    type: "single_choice",
    question: "码垛堆积动作指令是以使用具有（）的路径点作为位置数据的动作指令",
    options: {
      A: "接近点、原点、堆上点",
      B: "堆上点、逃点、原点",
      C: "逃点、接近点、原点",
      D: "接近点、堆上点、逃点"
    },
    answer: "D",
    category: "码垛"
  },
  {
    id: 266,
    type: "single_choice",
    question: "在示教码垛时，码垛堆积BX、EX比码垛堆积B、E多了哪个步骤。",
    options: {
      A: "输入初期资料",
      B: "示教堆上式样",
      C: "示教经路式样条件",
      D: "示教经路式样"
    },
    answer: "C",
    category: "码垛"
  },
  {
    id: 267,
    type: "single_choice",
    question: "以下哪个码垛堆积方法功能最强",
    options: {
      A: "码垛堆积B",
      B: "码垛堆积E",
      C: "码垛堆积BX",
      D: "码垛堆积EX"
    },
    answer: "D",
    category: "码垛"
  },
  {
    id: 268,
    type: "single_choice",
    question: "关于JMP指令使用说法正确的是（）",
    options: {
      A: "必须配合CALL指令使用",
      B: "必须在第一行使用",
      C: "跳转行数跨度不能大于256行",
      D: "必须配合标签指令LBL[i]使用"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 269,
    type: "single_choice",
    question: "码垛寄存器共有（）个。",
    options: {
      A: "10",
      B: "18",
      C: "32",
      D: "64"
    },
    answer: "C",
    category: "寄存器"
  },
  {
    id: 270,
    type: "single_choice",
    question: "寄存器可以进行运算操作，以下哪个运算是有错误的。",
    options: {
      A: "R[2]=R[3]-R[4]+R[5]-R[6]",
      B: "R[2]=R[3]*100/R[5]",
      C: "R[2]=R[3]*100-R[5]",
      D: "以上都没错"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 271,
    type: "single_choice",
    question: "在示教无补助点的堆上式样时，需要示教（）个点。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "B",
    category: "码垛"
  },
  {
    id: 272,
    type: "single_choice",
    question: "码垛堆积的方法有多种，以下哪个选项只可以设定1个经路式样。",
    options: {
      A: "码垛堆积B、E",
      B: "码垛堆积B、BX",
      C: "码垛堆积E、EX",
      D: "码垛堆积BX、EX"
    },
    answer: "A",
    category: "码垛"
  },
  {
    id: 273,
    type: "single_choice",
    question: "在码垛中，需要示教的经路式样的接近点、逃点、堆上点共有多少个？",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "不一定，可根据情况而定"
    },
    answer: "D",
    category: "码垛"
  },
  {
    id: 274,
    type: "single_choice",
    question: "在码垛堆积中，指令'J PAL_1[A_1] 30% FINE'表示经路式样的哪个路径点",
    options: {
      A: "接近点",
      B: "堆上点",
      C: "逃点",
      D: "原点"
    },
    answer: "A",
    category: "码垛"
  },
  {
    id: 275,
    type: "single_choice",
    question: "在码垛堆积中，指令'J PAL_1[BTM] 30% FINE'表示经路式样的哪个路径点",
    options: {
      A: "接近点",
      B: "堆上点",
      C: "逃点",
      D: "原点"
    },
    answer: "B",
    category: "码垛"
  },
  {
    id: 276,
    type: "single_choice",
    question: "在码垛堆积中，指令'J PAL_1[R_1] 30% FINE'表示经路式样的哪个路径点",
    options: {
      A: "接近点",
      B: "堆上点",
      C: "逃点",
      D: "原点"
    },
    answer: "C",
    category: "码垛"
  },
  {
    id: 277,
    type: "single_choice",
    question: "关于等待指令WAIT，以下哪条指令是错误的。",
    options: {
      A: "WAIT R[1]",
      B: "WAIT PR[1]",
      C: "WAIT R[2] < >1 ，TIMEOUT，LBL[1]",
      D: "WAIT RI[R[1]]=R[1]"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 278,
    type: "single_choice",
    question: "Select指令的作用是（）。",
    options: {
      A: "循环",
      B: "选择性执行",
      C: "计数",
      D: "定时"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 279,
    type: "single_choice",
    question: "R[1]的初始值为0，执行'R[1]=R[1]+1'，R[1]的结果是（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "执行错乱，产生随机数"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 280,
    type: "single_choice",
    question: "指令CALL的作用是（）。",
    options: {
      A: "比较",
      B: "跳转",
      C: "程序调用",
      D: "等待"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 281,
    type: "single_choice",
    question: "运算符AND的作用是（）。",
    options: {
      A: "与运算",
      B: "或运算",
      C: "非运算",
      D: "与非运算"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 282,
    type: "single_choice",
    question: "运算符OR的作用是（）。",
    options: {
      A: "与运算",
      B: "或运算",
      C: "非运算",
      D: "与非运算"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 283,
    type: "single_choice",
    question: "R[1]=5，AO[1]=R[1]，则AO[1]为（）。",
    options: {
      A: "0",
      B: "1",
      C: "5",
      D: "ON"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 284,
    type: "single_choice",
    question: "IF指令的意思为（）。",
    options: {
      A: "否则",
      B: "如果",
      C: "但是",
      D: "唯一"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 285,
    type: "single_choice",
    question: "FOR指令的作用是（）。",
    options: {
      A: "循环",
      B: "判断",
      C: "计数",
      D: "定时"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 286,
    type: "single_choice",
    question: "数字输入DI[1]为ON，DI[2]为OFF，执行'R[1]=DI[1]+DI[2]'，则R[1]的结果是（）。",
    options: {
      A: "0",
      B: "1",
      C: "3",
      D: "执行错乱，产生随机数"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 287,
    type: "single_choice",
    question: "R[1]的初始值为2,执行'DO[1]=R[1]',则DO[1]的结果是( )。",
    options: {
      A: "ON",
      B: "OFF",
      C: "2",
      D: "执行错乱,产生随机数"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 288,
    type: "single_choice",
    question: "PR[10] = (500,252,100， -10° ， 5° ， -7° ),PR[11] = (350,-285,80， 20° ， -8° ， 10° ),若PR[12]=PR[10],PR[12，3]=PR[12，3]+PR[11，3],则PR[12]最终结果是( )。",
    options: {
      A: "（850,-33,180， 10° ， 25° ， -15° )",
      B: "（850,252,100， -10° ， 5° ， -7° )",
      C: "（500,-33,100， -10° ， 5° ， -7° )",
      D: "（500,252,180， -10° ， 5° ， -7° )"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 289,
    type: "single_choice",
    question: "指令'LP[2]1000mmm/secFINE'中'FINE'是( )。",
    options: {
      A: "运动类型",
      B: "运动附加指令",
      C: "加速度",
      D: "定位类型"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 290,
    type: "single_choice",
    question: "'R[i]=值'为一般寄存器赋值指令,那么'='右边不可以为下列哪个值?( )",
    options: {
      A: "PR[i, j]",
      B: "DO[i]",
      C: "PR[i]",
      D: "UI[i]"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 291,
    type: "single_choice",
    question: "'PR[i]=值'为位置寄存器赋值指令,那么'='右边不可以为下列哪个值?( )",
    options: {
      A: "PR[i, j]",
      B: "P[i]",
      C: "Lpos",
      D: "Jpos"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 292,
    type: "single_choice",
    question: "'PR[i, j]=值'为位置寄存器要素赋值指令,那么'='右边不可以为( )。",
    options: {
      A: "R[i]",
      B: "DO[i]",
      C: "PR[i]",
      D: "UI[i]"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 293,
    type: "single_choice",
    question: "在运动指令中,( )类型指令运行不会因为奇异点而中断。",
    options: {
      A: "L",
      B: "J",
      C: "C",
      D: "A"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 294,
    type: "single_choice",
    question: "机器人控制柜发生火灾时,用何种灭火方式合适。",
    options: {
      A: "泡沫灭火",
      B: "毛毯扑打",
      C: "二氧化碳灭火器",
      D: "浇水"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 295,
    type: "single_choice",
    question: "为了安全，用示教器编程器上手动运行机器人时，机器人的最高速度应限制为（）。",
    options: {
      A: "50mm/s",
      B: "800mm/s",
      C: "1600mm/s",
      D: "250mm/s"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 296,
    type: "single_choice",
    question: "正常联动生产时，应事前确保机器人模式开关打到（）位置上。",
    options: {
      A: "AUTO",
      B: "T1",
      C: "T2",
      D: "T1或T2"
    },
    answer: "A",
    category: "机器人操作"
  },
  {
    id: 297,
    type: "single_choice",
    question: "工业机器人运行中，工作区域内有人意外进入应按下（）按钮。",
    options: {
      A: "启动按钮",
      B: "暂停按钮",
      C: "紧急停止按钮",
      D: "复位按钮"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 298,
    type: "single_choice",
    question: "在工业机器人即将伤害工作人员或损伤机器设备之前，应快速按下（）。",
    options: {
      A: "紧急停止按钮",
      B: "复位按钮",
      C: "启动按钮",
      D: "暂停按钮"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 299,
    type: "single_choice",
    question: "在（）处解除机器人急停状态。",
    options: {
      A: "旋转复位控制柜按钮与示教器急停旋钮",
      B: "按下控制柜按钮或示教器急停旋钮",
      C: "控制柜内部",
      D: "机器人本体"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 300,
    type: "single_choice",
    question: "示教编程器上安全开关握紧为ON，松开为OFF状态，作为进而追加的功能，当握紧力过大时，为（）状态。",
    options: {
      A: "不变",
      B: "启动",
      C: "停止",
      D: "急停报错"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 301,
    type: "single_choice",
    question: "在点动操作机器人时，应采用（）的速度倍率以增加对机器人的控制机会。",
    options: {
      A: "较高",
      B: "较快",
      C: "较低",
      D: "不变"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 302,
    type: "single_choice",
    question: "在按下示教器上的点动键之前要考虑到机器人的（）。",
    options: {
      A: "运动轨迹",
      B: "工具坐标",
      C: "运动趋势",
      D: "移动方向"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 303,
    type: "single_choice",
    question: "工业机器人手动操作示教的速度原则上不超过最高速度的（）。",
    options: {
      A: "10%",
      B: "30%",
      C: "50%",
      D: "70%"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 304,
    type: "single_choice",
    question: "工业机器人工作范围是指（）或手腕中心所能达到的集合。",
    options: {
      A: "手臂末端",
      B: "手臂",
      C: "机械手",
      D: "行走部分"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 305,
    type: "single_choice",
    question: "工业机器人进行示教时，模式旋钮打到示教模式后，在此模式中，外部设备发出的启动信号（）。",
    options: {
      A: "有效",
      B: "无效",
      C: "延时后有效",
      D: "不变"
    },
    answer: "B",
    category: "机器人操作"
  },
  {
    id: 306,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再动作的功能，为确保安全，机器人动作速度超过示教最高速度时，机器人（）。",
    options: {
      A: "以程序给定的速度运行",
      B: "以示教最高速度来限制运行",
      C: "以示教最低速度来运行",
      D: "程序报错"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 307,
    type: "single_choice",
    question: "下列关于工业机器人安全操作描述正确的是（）",
    options: {
      A: "调试人员进入机器人工作区域时，必须随身携带示教器，以防他人误操作。",
      B: "用示教盒操作机器人运行作业时，请确认机器人动作范围没有人员及障碍物。",
      C: "机器人处于自动模式时，任何人员都不允许进入其运动所及的区域。",
      D: "以上都正确"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 308,
    type: "single_choice",
    question: "进入汽车焊装线生产车间，必须佩戴（）",
    options: {
      A: "工作服",
      B: "电工鞋",
      C: "安全帽",
      D: "以上全选"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 309,
    type: "single_choice",
    question: "与示教作业人员一起进行作业的监护员，处在机器人可动范围时，（）方可进行共同作业。",
    options: {
      A: "不需要事先接受过专门的培训",
      B: "必须事先接受过专门培训",
      C: "没有事先接受过专门的培训也可以",
      D: "完全没必要"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 310,
    type: "single_choice",
    question: "关于机器人更换编码器电池，以下说法正确的是（）。",
    options: {
      A: "确保按下急停后更换",
      B: "机器人处于带电状态下更换",
      C: "机器人处于关电状态下更换",
      D: "为了节省电池，只更换一部分电池"
    },
    answer: "B",
    category: "维护保养"
  },
  {
    id: 311,
    type: "single_choice",
    question: "对工业机器人进行示教时，为了防止机器人的异常动作给操作人员造成危险，作业前必须进行的项目检查有（）等。",
    options: {
      A: "机器人外部电缆线外皮有无破损",
      B: "机器人制动装置是否异常",
      C: "紧急停止装置是否有效",
      D: "以上都全是"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 312,
    type: "single_choice",
    question: "打开安全门时，机器人执行如下（）动作。",
    options: {
      A: "报警",
      B: "自动停止",
      C: "继续运行",
      D: "程序无效"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 313,
    type: "single_choice",
    question: "进入机器人作业区的人员（）佩戴头盔。",
    options: {
      A: "没有硬性要求",
      B: "不需",
      C: "必须",
      D: "以上说法皆错误"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 314,
    type: "single_choice",
    question: "工业机器人在开机状态下没有移动，表示其程序（）。",
    options: {
      A: "执行完毕",
      B: "没有开始运行",
      C: "可能正在等待信号",
      D: "以上说法皆不对"
    },
    answer: "C",
    category: "机器人操作"
  },
  {
    id: 315,
    type: "single_choice",
    question: "在操作工业机器人过程中（）戴着手套来操作示教器和操作盘。",
    options: {
      A: "可以",
      B: "不可以",
      C: "无所谓",
      D: "一定"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 316,
    type: "single_choice",
    question: "手动操作机器人时，运行速度应处于（）模式降低速度运行。",
    options: {
      A: "T1",
      B: "自动模式",
      C: "T2",
      D: "任意位置"
    },
    answer: "A",
    category: "机器人操作"
  },
  {
    id: 317,
    type: "single_choice",
    question: "操作人员在开机远程控制机器人前，必须清楚的知道（）。",
    options: {
      A: "机器人即将执行的程序以及该程序要执行的全部任务",
      B: "机器人是否有报警",
      C: "没有人处于机器人工作区域",
      D: "以上说法都正确"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 318,
    type: "single_choice",
    question: "机器人周围区域必须保持（）。",
    options: {
      A: "清洁",
      B: "无油",
      C: "无水",
      D: "以上说法都正确"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 319,
    type: "single_choice",
    question: "进入机器人操作区域必须按要求穿戴（）。",
    options: {
      A: "手套",
      B: "电工鞋",
      C: "耳塞",
      D: "防护眼镜"
    },
    answer: "B",
    category: "安全操作"
  },
  {
    id: 320,
    type: "single_choice",
    question: "为保障FANUC机器人数据安全不丢失，控制器主板上的电池通常需要（）更换电池。",
    options: {
      A: "一年",
      B: "二年",
      C: "半年",
      D: "三个月"
    },
    answer: "B",
    category: "维护保养"
  },
  {
    id: 321,
    type: "single_choice",
    question: "为保障FANUC机器人编码器的数据安全不丢失，机器人本体上的电池通常需要（）更换。",
    options: {
      A: "半年",
      B: "一年",
      C: "二年",
      D: "三年"
    },
    answer: "B",
    category: "维护保养"
  },
  {
    id: 322,
    type: "single_choice",
    question: "为了保障FANUC机器人J1、J2、J3、J4、J5、J6各个的轴减速器以及齿轮盒的齿轮磨损，降低设备的故障率，通常需要每（）更换一次润滑油。",
    options: {
      A: "半年",
      B: "一年",
      C: "两年",
      D: "三年"
    },
    answer: "D",
    category: "维护保养"
  },
  {
    id: 323,
    type: "single_choice",
    question: "机器人在搬迁或运输过程中，机器人各个轴要求处于（ ）状态。",
    options: {
      A: "收拢",
      B: "展开",
      C: "零点",
      D: "不变"
    },
    answer: "A",
    category: "维护保养"
  },
  {
    id: 324,
    type: "single_choice",
    question: "当更换机器人机身电池时，设备的电源应保持（ ）的状态。",
    options: {
      A: "开机",
      B: "关机",
      C: "断电",
      D: "无所谓"
    },
    answer: "A",
    category: "维护保养"
  },
  {
    id: 325,
    type: "single_choice",
    question: "FANUC工业机器人当TP上出现SRVO-065报警时，表示（）。",
    options: {
      A: "机器人处奇异点",
      B: "示教器上紧急停止按钮被按下",
      C: "控制器主板电池没电",
      D: "机器人本体上电池电压下降"
    },
    answer: "D",
    category: "故障诊断"
  },
  {
    id: 326,
    type: "single_choice",
    question: "以下哪个选项不是进行FANUC工业机器人点动操作时的条件。（）",
    options: {
      A: "将安全开关按到中间档位",
      B: "模式开关旋到T1/T2档",
      C: "示教器有效开关置于OFF档",
      D: "一直按住SHIFT"
    },
    answer: "C",
    category: "机器人操作"
  },
  {
    id: 327,
    type: "single_choice",
    question: "以下哪个选项不是进行FANUC工业机器人自动运行时的条件。（）",
    options: {
      A: "TP有效开关置于OFF档",
      B: "非单步执行",
      C: "模式开关旋到AUTO档",
      D: "将安全开关按到中间档位"
    },
    answer: "D",
    category: "机器人操作"
  },
  {
    id: 328,
    type: "single_choice",
    question: "以下哪个选项是进行FANUC工业机器人自动运行时的条件。（）",
    options: {
      A: "TP有效开关置于ON档",
      B: "单步执行状态",
      C: "系统变量$RMTMASTER为0",
      D: "自动模式为LOCAL（本地控制）"
    },
    answer: "C",
    category: "机器人操作"
  },
  {
    id: 329,
    type: "single_choice",
    question: "系统变量 $RMT_MASTER的值为0时，表示（）",
    options: {
      A: "外围设备",
      B: "显示器/键盘",
      C: "主控计算机",
      D: "无外围设备"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 330,
    type: "single_choice",
    question: "系统变量 $RMT_MASTER的值为1时，表示（）",
    options: {
      A: "外围设备",
      B: "显示器/键盘",
      C: "主控计算机",
      D: "无外围设备"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 331,
    type: "single_choice",
    question: "系统变量 $RMT_MASTER的值为2时，表示（）",
    options: {
      A: "外围设备",
      B: "显示器/键盘",
      C: "主控计算机",
      D: "无外围设备"
    },
    answer: "C",
    category: "系统设置"
  },
  {
    id: 332,
    type: "single_choice",
    question: "系统变量 $RMT_MASTER的值为3时，表示（）",
    options: {
      A: "外围设备",
      B: "显示器/键盘",
      C: "主控计算机",
      D: "无外围设备"
    },
    answer: "D",
    category: "系统设置"
  },
  {
    id: 333,
    type: "single_choice",
    question: "若机器人进行RSR自动运行，以下哪个信号不是必须为ON。（）",
    options: {
      A: "UI[1]",
      B: "UI[2]",
      C: "UI[6]",
      D: "UI[8]"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 334,
    type: "single_choice",
    question: "FANUC工业机器人共有（）种坐标系。",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 335,
    type: "single_choice",
    question: "以下哪种不是直角坐标系。",
    options: {
      A: "关节坐标系",
      B: "世界坐标系",
      C: "用户坐标系",
      D: "手动坐标系"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 336,
    type: "single_choice",
    question: "手动坐标系在未定义时，将由（）来代替该坐标系。",
    options: {
      A: "世界坐标系",
      B: "工具坐标系",
      C: "用户坐标系",
      D: "关节坐标系"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 337,
    type: "single_choice",
    question: "TCP的中文名是（）。",
    options: {
      A: "工具中心点",
      B: "起始点",
      C: "HOME点",
      D: "坐标点"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 338,
    type: "single_choice",
    question: "世界坐标系的原点定义为（）。",
    options: {
      A: "第六轴法兰盘中心",
      B: "HOME 点",
      C: "工具中心点",
      D: "机器人减速器 J1 轴线与减速器 J2 轴线的交点"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 339,
    type: "single_choice",
    question: "点击'POSN'（位置）按钮，不能查看到机器人在（）坐标系下的位置信息。",
    options: {
      A: "关节坐标系",
      B: "世界坐标系",
      C: "用户坐标系",
      D: "工具坐标系"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 340,
    type: "single_choice",
    question: "在查看机器人在世界坐标系下的位置信息时共有六个参数（X、Y、Z、W、P、R），前三个参数和后三个参数的单位分别是（）。",
    options: {
      A: "mm 和 deg",
      B: "s 和 deg",
      C: "mm 和%",
      D: "s 和%"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 341,
    type: "single_choice",
    question: "（）坐标系下，机器人可以单关节旋转，主要用于调节手腕姿态",
    options: {
      A: "世界",
      B: "用户",
      C: "工具",
      D: "关节"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 342,
    type: "single_choice",
    question: "按下'COORD'键，可依次按照（）顺序切换坐标系。",
    options: {
      A: "关节 ⇄ 手动 ⇄ 世界 ⇄ 工具 ⇄ 用户",
      B: "世界 ⇄ 手动 ⇄ 关节 ⇄ 工具 ⇄ 用户",
      C: "世界 ⇄ 关节 ⇄ 手动 ⇄ 工具 ⇄ 用户",
      D: "关节 ⇄ 手动 ⇄ 世界 ⇄ 用户 ⇄ 工具"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 343,
    type: "single_choice",
    question: "以下哪个坐标系不能由用户自己定义（）。",
    options: {
      A: "用户坐标系",
      B: "手动坐标系",
      C: "工具坐标系",
      D: "世界坐标系"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 344,
    type: "single_choice",
    question: "（）是原点设置在机器人末端的 TCP 处的坐标系，原点及方向都是随着末端位置和角度不断变化的。",
    options: {
      A: "世界坐标系",
      B: "用户坐标系",
      C: "工具坐标系",
      D: "手动坐标系"
    },
    answer: "C",
    category: "坐标系"
  },
  {
    id: 345,
    type: "single_choice",
    question: "使用三点法设置完工具坐标系后，需要对新工具坐标系的（）进行检验。",
    options: {
      A: "检验X、Y、Z方向",
      B: "检验TCP位置",
      C: "检验X、Y、Z方向和TCP位置",
      D: "检验W、P、R方向"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 346,
    type: "single_choice",
    question: "使用六点法设置完工具坐标系后，需要对新工具坐标系的（）进行检验。",
    options: {
      A: "检验X、Y、Z方向",
      B: "检验TCP位置",
      C: "检验X、Y、Z方向和TCP位置",
      D: "检验坐标系原点位置"
    },
    answer: "C",
    category: "坐标系"
  },
  {
    id: 347,
    type: "single_choice",
    question: "以下表述中哪个是默认工具坐标系的 +X 方向（）。",
    options: {
      A: "法兰盘中心指向法兰盘定位孔的方向",
      B: "垂直法兰盘向外的方向",
      C: "垂直法兰盘向内的方向",
      D: "机器人向前的方向"
    },
    answer: "A",
    category: "坐标系"
  },
  {
    id: 348,
    type: "single_choice",
    question: "以下表述中哪个是默认工具坐标系的 +Z 方向（）。",
    options: {
      A: "法兰盘中心指向法兰盘定位孔的方向",
      B: "垂直法兰盘向外的方向",
      C: "垂直法兰盘向内的方向",
      D: "机器人向上的方向"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 349,
    type: "single_choice",
    question: "以下关于工具坐标系的说法错误的是（）。",
    options: {
      A: "确定工具的TCP点，方便调整工具姿态",
      B: "利用工具坐标系，可以确定工具进给方向，方便工具位置调整",
      C: "新的工具坐标系是相对于默认的工具坐标系变化得到的",
      D: "新的工具坐标系一旦设置好以后，其原点及方向在空间上是不变的"
    },
    answer: "D",
    category: "坐标系"
  },
  {
    id: 350,
    type: "single_choice",
    question: "以下关于用户坐标系的说法错误的是（）。",
    options: {
      A: "新的用户坐标系是根据默认的用户坐标系User0变化得到的",
      B: "新的用户坐标系的位置和姿态相对空间是不断变化的。",
      C: "用户坐标系是直角坐标系",
      D: "利用用户坐标系可以很方便进行斜面工作台的调试"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 351,
    type: "single_choice",
    question: "指端为平面的夹钳式手部，一般适合拾取（）零件。",
    options: {
      A: "棒类",
      B: "球类",
      C: "具有平行平面",
      D: "易碎类"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 352,
    type: "single_choice",
    question: "真空发生器利用了（）进行工作。",
    options: {
      A: "热力学效应",
      B: "光学效应",
      C: "伯努利效应",
      D: "以上都不对"
    },
    answer: "C",
    category: "末端执行器"
  },
  {
    id: 353,
    type: "single_choice",
    question: "气吸式手部的工作原理为吸盘内部气压应（）外界大气压。",
    options: {
      A: "大于",
      B: "小于",
      C: "等于",
      D: "不等于"
    },
    answer: "B",
    category: "末端执行器"
  },
  {
    id: 354,
    type: "single_choice",
    question: "具有齿形指面的夹钳式手部，一般适合拾取（）。",
    options: {
      A: "已加工且具有光滑表面的零件",
      B: "粗糙的毛坯件",
      C: "具有较大平面的零件",
      D: "易碎类零件"
    },
    answer: "B",
    category: "末端执行器"
  },
  {
    id: 355,
    type: "single_choice",
    question: "气吸式手部的应用特点有（）。",
    options: {
      A: "依靠摩擦力拾取工件",
      B: "需要工件有两个可夹持的表面",
      C: "适合拾取表面粗糙有凹槽的零件",
      D: "适合拾取易碎类零件"
    },
    answer: "D",
    category: "末端执行器"
  },
  {
    id: 356,
    type: "single_choice",
    question: "通常对机器人进行示教编程时，要求最初程序点和最终程序点的位置（）。",
    options: {
      A: "相同",
      B: "不同",
      C: "偏差越大越好",
      D: "无所谓"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 357,
    type: "single_choice",
    question: "工业机器人的额定负载是指在规定性能范围内（）所能承受的最大负载允许值。",
    options: {
      A: "手腕机械接口处",
      B: "夹具",
      C: "机身",
      D: "机座"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 358,
    type: "single_choice",
    question: "（）是指连接在机器人末端法兰上的工具，也就是机器人的手部。",
    options: {
      A: "TCP",
      B: "末端执行器",
      C: "工作空间",
      D: "关节"
    },
    answer: "B",
    category: "末端执行器"
  },
  {
    id: 359,
    type: "single_choice",
    question: "（）指末端执行器的工作点。",
    options: {
      A: "奇异点",
      B: "TCP",
      C: "HOME点",
      D: "方向点"
    },
    answer: "B",
    category: "末端执行器"
  },
  {
    id: 360,
    type: "single_choice",
    question: "常见机器人末端执行器分为（）。",
    options: {
      A: "机械式夹持器、吸附式执行器、专用工具",
      B: "电磁式夹持器、吸附式执行器、通用工具",
      C: "通用工具、专用工具、吸附工具",
      D: "通用工具、专用工具、电磁工具"
    },
    answer: "A",
    category: "末端执行器"
  },
  {
    id: 361,
    type: "single_choice",
    question: "PNS启动方式中，如果同时按下UI[10]、UI[11]、UI[14]启动了1个程序，程序基数为100，那么这个程序的名称是（）。",
    options: {
      A: "PNS0138",
      B: "PNS0126",
      C: "PNS0142",
      D: "PNS0148"
    },
    answer: "A",
    category: "程序编辑"
  },
  {
    id: 362,
    type: "single_choice",
    question: "FANUC工业机器人的RSR自动运行方式最多能够选择（）个程序。",
    options: {
      A: "7个",
      B: "8个",
      C: "255个",
      D: "100个"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 363,
    type: "single_choice",
    question: "FANUC工业机器人的RSR自动运行方式的程序命名必须为（）位。",
    options: {
      A: "6",
      B: "7",
      C: "8",
      D: "9"
    },
    answer: "B",
    category: "程序编辑"
  },
  {
    id: 364,
    type: "single_choice",
    question: "FANUC工业机器人的PNS自动运行方式最多能够选择（）个程序。",
    options: {
      A: "7个",
      B: "8个",
      C: "255个",
      D: "100个"
    },
    answer: "C",
    category: "程序编辑"
  },
  {
    id: 365,
    type: "single_choice",
    question: "以下哪个不是FANUC工业机器人的自动运行方式。",
    options: {
      A: "RSR",
      B: "PNS",
      C: "STYLE",
      D: "JOB"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 366,
    type: "single_choice",
    question: "示教器运行程序的方式不包括以下哪种（）。",
    options: {
      A: "顺序单步",
      B: "逆序单步",
      C: "顺序连续",
      D: "逆序连续"
    },
    answer: "D",
    category: "程序调试"
  },
  {
    id: 367,
    type: "single_choice",
    question: "在点动操作机器人时，以下说法正确的是（）。",
    options: {
      A: "必须同时按住按两个shift键",
      B: "必须同时按住按两个安全开关",
      C: "必须打到T1档",
      D: "TP有效开关必须为ON"
    },
    answer: "D",
    category: "机器人操作"
  },
  {
    id: 368,
    type: "single_choice",
    question: "按下（）可以切换'单步/连续'。",
    options: {
      A: "COORD",
      B: "HOLD",
      C: "STEP",
      D: "ITEM"
    },
    answer: "C",
    category: "机器人操作"
  },
  {
    id: 369,
    type: "single_choice",
    question: "当屏幕页面选项行数过多，可以通过（）键来快速移动光标至目标行。",
    options: {
      A: "COORD",
      B: "HOLD",
      C: "STEP",
      D: "ITEM"
    },
    answer: "D",
    category: "机器人操作"
  },
  {
    id: 370,
    type: "single_choice",
    question: "在System（系统设定）中找不到'Master/Cal（零度点调整）'，可将系统变量$MASTER_ENB的值修改为（）。",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 371,
    type: "single_choice",
    question: "以下哪个不是零点复归的方法（）",
    options: {
      A: "零度点核对",
      B: "单轴核对",
      C: "多轴核对",
      D: "快速核对"
    },
    answer: "C",
    category: "系统设置"
  },
  {
    id: 372,
    type: "single_choice",
    question: "机器人的位姿是由（）构成。",
    options: {
      A: "速度和位置",
      B: "位置和姿态",
      C: "速度和姿态",
      D: "方向和姿态"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 373,
    type: "single_choice",
    question: "机器人正常运行时，末端执行器工具中心点所能在空间活动的范围称为（）。",
    options: {
      A: "灵活工作空间",
      B: "次工作空间",
      C: "工作空间",
      D: "奇异形位"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 374,
    type: "single_choice",
    question: "末端执行器以任意姿态达到的点所构成的工作空间称为（）。",
    options: {
      A: "灵活工作空间",
      B: "次工作空间",
      C: "工作空间",
      D: "奇异形位"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 375,
    type: "single_choice",
    question: "TP的液晶显示界面的左上部共有（）个软件LED显示。",
    options: {
      A: "6",
      B: "8",
      C: "10",
      D: "12"
    },
    answer: "B",
    category: "机器人操作"
  },
  {
    id: 376,
    type: "single_choice",
    question: "通常所说的机器人轨迹和速度，其实指的是（）的轨迹和速度。",
    options: {
      A: "HOME点",
      B: "奇异点",
      C: "TCP点",
      D: "经由点"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 377,
    type: "single_choice",
    question: "Image模式的备份文件被分割成多个（）MB的压缩文件。",
    options: {
      A: "1",
      B: "2",
      C: "5",
      D: "10"
    },
    answer: "A",
    category: "数据备份"
  },
  {
    id: 378,
    type: "single_choice",
    question: "对于R-30iB控制柜，镜像文件可以在（）模式下备份。",
    options: {
      A: "一般模式",
      B: "控制启动模式",
      C: "BootMonitor模式",
      D: "以上都可以"
    },
    answer: "D",
    category: "数据备份"
  },
  {
    id: 379,
    type: "single_choice",
    question: "镜像文件可以在（）模式下加载。",
    options: {
      A: "一般模式",
      B: "控制启动模式",
      C: "BootMonitor模式",
      D: "以上都可以"
    },
    answer: "C",
    category: "数据备份"
  },
  {
    id: 380,
    type: "single_choice",
    question: "以下哪种系统文件是用来存储参考位置、关节可动范围、制动器控制等系统变量的设定。（）",
    options: {
      A: "SYSVARS.SV",
      B: "SYSFRAME.SV",
      C: "SYSSERVO.SV",
      D: "SYSMAST.SV"
    },
    answer: "A",
    category: "数据备份"
  },
  {
    id: 381,
    type: "single_choice",
    question: "以下哪种系统文件是用来存储坐标系的设定。（）",
    options: {
      A: "SYSVARS.SV",
      B: "SYSFRAME.SV",
      C: "SYSSERVO.SV",
      D: "SYSMAST.SV"
    },
    answer: "B",
    category: "数据备份"
  },
  {
    id: 382,
    type: "single_choice",
    question: "以下哪种系统文件是用来存储伺服参数的设定。（）",
    options: {
      A: "SYSVARS.SV",
      B: "SYSFRAME.SV",
      C: "SYSSERVO.SV",
      D: "SYSMAST.SV"
    },
    answer: "C",
    category: "数据备份"
  },
  {
    id: 383,
    type: "single_choice",
    question: "以下哪种系统文件是用来存储零点标定的数据。（）",
    options: {
      A: "SYSVARS.SV",
      B: "SYSFRAME.SV",
      C: "SYSSERVO.SV",
      D: "SYSMAST.SV"
    },
    answer: "D",
    category: "数据备份"
  },
  {
    id: 384,
    type: "single_choice",
    question: "以下哪种系统文件是用来存储宏指令的设定。（）",
    options: {
      A: "SYSSERVO.SV",
      B: "SYSMAST.SV",
      C: "SYSMACRO",
      D: "FRAMEVAR"
    },
    answer: "C",
    category: "数据备份"
  },
  {
    id: 385,
    type: "single_choice",
    question: "以下哪种系统文件是用来存储坐标参考点的设定。（）",
    options: {
      A: "SYSSERVO.SV",
      B: "SYSMAST.SV",
      C: "SYSMACRO",
      D: "FRAMEVAR"
    },
    answer: "D",
    category: "数据备份"
  },
  {
    id: 386,
    type: "single_choice",
    question: "以下哪种数据文件是用来存储数值寄存器的数据。（）",
    options: {
      A: "NUMREG.VR",
      B: "POSREG.VR",
      C: "STRREG.VR",
      D: "PALREG.VR"
    },
    answer: "A",
    category: "数据备份"
  },
  {
    id: 387,
    type: "single_choice",
    question: "以下哪种数据文件是用来存储位置寄存器的数据。（）",
    options: {
      A: "NUMREG.VR",
      B: "POSREG.VR",
      C: "STRREG.VR",
      D: "PALREG.VR"
    },
    answer: "B",
    category: "数据备份"
  },
  {
    id: 388,
    type: "single_choice",
    question: "以下哪种数据文件是用来存储字符串寄存器的数据。（）",
    options: {
      A: "NUMREG.VR",
      B: "POSREG.VR",
      C: "STRREG.VR",
      D: "PALREG.VR"
    },
    answer: "C",
    category: "数据备份"
  },
  {
    id: 389,
    type: "single_choice",
    question: "以下哪种数据文件是用来存储码垛寄存器的数据。（）",
    options: {
      A: "NUMREG.VR",
      B: "POSREG.VR",
      C: "STRREG.VR",
      D: "PALREG.VR"
    },
    answer: "D",
    category: "数据备份"
  },
  {
    id: 390,
    type: "single_choice",
    question: "FANUC工业机器人中以下哪个程序名命名方式是错误的。（）",
    options: {
      A: "RSR0111",
      B: "PNS1999",
      C: "TEST001",
      D: "199RSR"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 391,
    type: "single_choice",
    question: "FANUC工业机器人程序类型不包括以下那种。（）",
    options: {
      A: "TP",
      B: "宏",
      C: "条件",
      D: "SYSTEM"
    },
    answer: "D",
    category: "程序编辑"
  },
  {
    id: 392,
    type: "single_choice",
    question: "FANUC工业机器人奇异点出现在（）及附近。",
    options: {
      A: "J5 = 0°",
      B: "J6=0°",
      C: "J4=0°",
      D: "J3=0°"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 393,
    type: "single_choice",
    question: "FANUC工业机器人在奇异点时，机器人只能进行（）运动。",
    options: {
      A: "关节",
      B: "直线",
      C: "圆弧",
      D: "世界"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 394,
    type: "single_choice",
    question: "FANUC工业机器人绘制圆时最少需要（）个点。",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 395,
    type: "single_choice",
    question: "FANUC工业机器人绘制圆弧需要（）个点。",
    options: {
      A: "4",
      B: "3",
      C: "6",
      D: "7"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 396,
    type: "single_choice",
    question: "FANUC工业机器人运动类型不包含（）。",
    options: {
      A: "直线",
      B: "关节",
      C: "圆弧",
      D: "圆弧"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 397,
    type: "single_choice",
    question: "FANUC工业机器人直线运动速度单位不包含（）。",
    options: {
      A: "mm/s",
      B: "cm/min",
      C: "%",
      D: "in/min"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 398,
    type: "single_choice",
    question: "FANUC工业机器人旋转调整工具姿态时，运动速度要用（）为单位。",
    options: {
      A: "mm/sec",
      B: "cm/min",
      C: "deg/s",
      D: "in/min"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 399,
    type: "single_choice",
    question: "FANUC工业机器人直线运动是以（）方式从开始点运动到结束点。",
    options: {
      A: "线性",
      B: "非线性",
      C: "关节",
      D: "用户"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 400,
    type: "single_choice",
    question: "FANUC工业机器人绘制轨迹绕TCP点为中心旋转时，需要使用（）运动指令。",
    options: {
      A: "直线",
      B: "关节",
      C: "圆弧",
      D: "圆弧"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 401,
    type: "single_choice",
    question: "FANUC工业机器人一个圆弧运动指令是由（）和目标点进行示教。",
    options: {
      A: "起始点",
      B: "HOME点",
      C: "经由点",
      D: "目标点"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 402,
    type: "single_choice",
    question: "FANUC工业机器人执行程序时运动指令的4要素不包含（）。",
    options: {
      A: "运动类型",
      B: "位置信息",
      C: "运动速度",
      D: "偏移条件"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 403,
    type: "single_choice",
    question: "以下哪个指令不属于运动附加指令。（）",
    options: {
      A: "Offset",
      B: "Tool_Offset",
      C: "For",
      D: "INC"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 404,
    type: "single_choice",
    question: "常用的运动附加指令'INC'是（）指令。",
    options: {
      A: "增量指令",
      B: "路径指令",
      C: "直接位置补偿指令",
      D: "工具补偿指令"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 405,
    type: "single_choice",
    question: "常用的运动附加指令'PTH'是（）指令。",
    options: {
      A: "增量指令",
      B: "路径指令",
      C: "直接位置补偿指令",
      D: "工具补偿指令"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 406,
    type: "single_choice",
    question: "常用的运动附加指令'Offset,PR[i]'是（）指令。",
    options: {
      A: "增量指令",
      B: "路径指令",
      C: "直接位置补偿指令",
      D: "工具补偿指令"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 407,
    type: "single_choice",
    question: "FANUC工业机器人中程序注释最多允许输入（）个字符。",
    options: {
      A: "20",
      B: "15",
      C: "10",
      D: "16"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 408,
    type: "single_choice",
    question: "FANUC工业机器人不进行轨迹控制/姿势控制需要使用（）运动指令。",
    options: {
      A: "关节",
      B: "直线",
      C: "圆弧",
      D: "A圆弧"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 409,
    type: "single_choice",
    question: "FANUC工业机器人动作指令中P[i]位置变量为（）变量。",
    options: {
      A: "局部",
      B: "全局",
      C: "固定",
      D: "数字"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 410,
    type: "single_choice",
    question: "FANUC工业机器人动作指令中PR[i]位置寄存器为（）变量。",
    options: {
      A: "局部",
      B: "全局",
      C: "固定",
      D: "数字"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 411,
    type: "single_choice",
    question: "出现奇异点报警时，需要用JOINT（关节）坐标将（）轴调开 0° ，按RESET复位报警。",
    options: {
      A: "J5",
      B: "J6",
      C: "J4",
      D: "J3"
    },
    answer: "A",
    category: "故障诊断"
  },
  {
    id: 412,
    type: "single_choice",
    question: "用于过渡点，不会因为奇异点而中断的运动指令是（）。",
    options: {
      A: "关节",
      B: "直线",
      C: "圆弧",
      D: "A圆弧"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 413,
    type: "single_choice",
    question: "绕开工件的运动使用（）定位，可使工业机器人的运动更连贯。",
    options: {
      A: "FINE",
      B: "CNT",
      C: "直线",
      D: "关节"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 414,
    type: "single_choice",
    question: "输出 DO[i] = ON ，用万用表测试对应端口，电压值为接近（）的高电平。",
    options: {
      A: "+24V",
      B: "+12V",
      C: "+48V",
      D: "+5V"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 415,
    type: "single_choice",
    question: "机架号（RACK）为I/O通讯设备种类，机架号81-84表示（）",
    options: {
      A: "Process I/O board",
      B: "CRMA15/CRMA16",
      C: "DeviceNET总线",
      D: "TCP网络通信"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 416,
    type: "single_choice",
    question: "机架号（RACK）为I/O通讯设备种类，机架号89表示（）",
    options: {
      A: "Process I/O board",
      B: "CRMA15/CRMA16",
      C: "DeviceNET总线",
      D: "TCP网络通信"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 417,
    type: "single_choice",
    question: "机器人RI/RO信号已被固定为逻辑信号，可通过（）与外部设备进行数据交互。",
    options: {
      A: "工业以太网",
      B: "CRMA15/CRMA16",
      C: "DeviceNET总线",
      D: "专用EE接口"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 418,
    type: "single_choice",
    question: "CRMA15/CRMA16接口输入信号与外部设备接线中，（）为输入信号的公共端。",
    options: {
      A: "SDICOM",
      B: "DOSRC",
      C: "DISCOM",
      D: "SDOSRC"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 419,
    type: "single_choice",
    question: "通用(I/O)是可由用户自定义而使用的I/O，不包含下列那种。（）",
    options: {
      A: "DI[i]/DO[i]",
      B: "GI[i]/GO[i]",
      C: "AI[i]/AO[i]",
      D: "UI[i]/UO[i]"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 420,
    type: "single_choice",
    question: "专用I/O是用途已经确定的I/O，不包含下列那种。（）",
    options: {
      A: "UI[i]/UO[i]",
      B: "SI[i]/SO[i]",
      C: "RI[i]/RO[i]",
      D: "AI[i]/AO[i]"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 421,
    type: "single_choice",
    question: "CRMA15/CRMA16接口输入信号与外部设备接线中，（）为输出信号的公共端。",
    options: {
      A: "SDICOM",
      B: "DOSRC",
      C: "DISCOM",
      D: "SDOSRC"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 422,
    type: "single_choice",
    question: "CRMA15/CRMA16接口最多支持（）个输入信号。",
    options: {
      A: "20",
      B: "25",
      C: "28",
      D: "30"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 423,
    type: "single_choice",
    question: "CRMA15/CRMA16接口最多支持（）个输出信号。",
    options: {
      A: "24",
      B: "26",
      C: "29",
      D: "31"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 424,
    type: "single_choice",
    question: "在FANUC机器人中，模拟量输入信AI[i]共有（）个。",
    options: {
      A: "28",
      B: "35",
      C: "64",
      D: "100"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 425,
    type: "single_choice",
    question: "在FANUC机器人中，模拟量输出信号AO[i]共有（）个。",
    options: {
      A: "28",
      B: "35",
      C: "64",
      D: "100"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 426,
    type: "single_choice",
    question: "在FANUC机器人中，组输入信GI[i]共有（）个。",
    options: {
      A: "100",
      B: "200",
      C: "300",
      D: "400"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 427,
    type: "single_choice",
    question: "工业机器人I/O地址正确分配等待重启时，信号状态为（）。",
    options: {
      A: "ACTIVE",
      B: "UNASG",
      C: "PEND",
      D: "INVAL"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 428,
    type: "single_choice",
    question: "LRMate200iD机器人EE口所对应的机器人输出信号范围是（）。",
    options: {
      A: "RO[5-9]",
      B: "RO[6-7]",
      C: "RO[7-9]",
      D: "RO[7-8]"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 429,
    type: "single_choice",
    question: "先执行/后执行功能指令中直接添加信号输出时，只支持DO、RO、（）AO四种信号输出。",
    options: {
      A: "SO",
      B: "GO",
      C: "UO",
      D: "DI"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 430,
    type: "single_choice",
    question: "R[1]=3，RO[1]=R[1]，则RO[1]为（）。",
    options: {
      A: "0",
      B: "1",
      C: "5",
      D: "ON"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 431,
    type: "single_choice",
    question: "为了在机器人控制装置上对I/O信号进行控制，必须建立（）信号和（）信号的关联。",
    options: {
      A: "物理，逻辑",
      B: "输入，输出",
      C: "数字，模拟",
      D: "内部，外部"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 432,
    type: "single_choice",
    question: "PEND表示信号已经被正确分配，重新通电后状态变为（）。",
    options: {
      A: "ACTIVE",
      B: "UNASG",
      C: "PEND",
      D: "INVAL"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 433,
    type: "single_choice",
    question: "系统变量 $I/OMASTER=0 时，机器人控制装置成为I/O连接设备（）模式。",
    options: {
      A: "从机",
      B: "主站",
      C: "离线",
      D: "在线"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 434,
    type: "single_choice",
    question: "系统变量 $I/OMASTER=1 时，机器人控制装置成为I/O连接设备（）模式。",
    options: {
      A: "从机",
      B: "主站",
      C: "离线",
      D: "在线"
    },
    answer: "B",
    category: "系统设置"
  },
  {
    id: 435,
    type: "single_choice",
    question: "系统变量$RMT_MASTER定义的远端设备包括0外围设备，1显示器/键盘，2控计算机和（）。",
    options: {
      A: "3无外围设备",
      B: "3鼠标",
      C: "3HUB集线器",
      D: "3SPI总线"
    },
    answer: "A",
    category: "系统设置"
  },
  {
    id: 436,
    type: "single_choice",
    question: "CRMA15板中包含50个接线端，其中有（）个端子是未定义状态，也就是没有任何作用",
    options: {
      A: "10",
      B: "11",
      C: "12",
      D: "13"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 437,
    type: "single_choice",
    question: "CRMA16板中包含50个接线端，其中有（）个端子是未定义状态，也就是没有任何作用。",
    options: {
      A: "12",
      B: "15",
      C: "17",
      D: "19"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 438,
    type: "single_choice",
    question: "数字I/O信号有2个值，ON和OFF，在时序图中用（）和（）表示。",
    options: {
      A: "高电平，低电平",
      B: "上升沿，下降沿",
      C: "0，1",
      D: "STARTEND"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 439,
    type: "single_choice",
    question: "在I/O连接设备模式上，R-30iB控制装置始终为I/O设备（）模式。",
    options: {
      A: "从机",
      B: "主站",
      C: "离线",
      D: "在线"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 440,
    type: "single_choice",
    question: "机器人输出RO接口与外设连接线路中，EE接口RO的每一点的最大输出电流为（ ）mA。",
    options: {
      A: "100",
      B: "200",
      C: "300",
      D: "400"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 441,
    type: "single_choice",
    question: "在FANUC工业机器人的EE接口外接一些工具状态传感器，当传感器信号有输出时，对应（）",
    options: {
      A: "RI[i]=ON",
      B: "DI[i]=ON",
      C: "AI[i]=ON",
      D: "UI[i]=ON"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 442,
    type: "single_choice",
    question: "LR Mate 200iD工业机器人的EE接口共有（）组24V直流电源。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 443,
    type: "single_choice",
    question: "FANUC机器人模拟量输出信号AO在一定的时间范围内可以有（）多个不同的取值。",
    options: {
      A: "10",
      B: "100",
      C: "1000",
      D: "无限"
    },
    answer: "D",
    category: "I/O信号"
  },
  {
    id: 444,
    type: "single_choice",
    question: "DO[i]=PULSE，[时间]指令中，脉冲输出时间宽幅最大值为（）。",
    options: {
      A: "15.5",
      B: "20.5",
      C: "25.5",
      D: "30.5"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 445,
    type: "single_choice",
    question: "DO[i]=PULSE，[时间]指令中，没有指定时间的情况下，脉冲输出由变量（）指定。",
    options: {
      A: "$DEFPULSE",
      B: "$DEFPOGENB",
      C: "$DEFLOGIC",
      D: "$DEF_ACCLIM"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 446,
    type: "single_choice",
    question: "脉冲输出宽度可由变量$DEFPULSE指定，其单位为（）。",
    options: {
      A: "1s",
      B: "0.1s",
      C: "0.5s",
      D: "0.2s"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 447,
    type: "single_choice",
    question: "当控制装置或机器人的脉冲编码器的后备电池电量不足时，（）信号强制为ON。",
    options: {
      A: "UO[9] BATALM",
      B: "UO[7]ATPERCH",
      C: "UO[10]BUSY",
      D: "UO[7]ATPERCH"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 448,
    type: "single_choice",
    question: "UI[i]始终保持ON状态，机架插槽起始点需配置为。",
    options: {
      A: "48-1-1",
      B: "35-1-1",
      C: "0-1-1",
      D: "82-1-1"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 449,
    type: "single_choice",
    question: "LR Mate 200iD 机器人 EE 口所对应的机器人输入信号范围是（）。",
    options: {
      A: "SI[1-6]",
      B: "RI[1-6]",
      C: "RI[2-6]",
      D: "UI[1-9]"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 450,
    type: "single_choice",
    question: "仅使用硬接线连接，不需要配置的信号有 RI[i]/RO[i]和（）。",
    options: {
      A: "SI[i]和SO[i]",
      B: "DI[i]和DO[i]",
      C: "UI[i]和UO[i]",
      D: "AI[i]和AO[i]"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 451,
    type: "single_choice",
    question: "在FANUC机器人中，组输出信号GO[i]共有（）个。",
    options: {
      A: "100",
      B: "200",
      C: "300",
      D: "400"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 452,
    type: "single_choice",
    question: "R[i]=G[i]是将所指定组输入信号的二进制转换为（）代入所指定的寄存器。",
    options: {
      A: "二进制",
      B: "八进制",
      C: "十进制",
      D: "十六进制"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 453,
    type: "single_choice",
    question: "常用的GI/GO指令有R[i]=GI[j]，GO[i]=(value)以及（）三种",
    options: {
      A: "GO[i]=R[i]",
      B: "GO[i]=PR[i]",
      C: "GO[i]=PL[i]",
      D: "GO[i]=DO[i]"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 454,
    type: "single_choice",
    question: "码垛寄存器在所有全程序需中可以使用（）个",
    options: {
      A: "16",
      B: "32",
      C: "48",
      D: "无限制"
    },
    answer: "B",
    category: "寄存器"
  },
  {
    id: 455,
    type: "single_choice",
    question: "码垛寄存器运算指令可进行代入、（）、减法运算处理",
    options: {
      A: "加法",
      B: "乘法",
      C: "整除",
      D: "除法"
    },
    answer: "A",
    category: "寄存器"
  },
  {
    id: 456,
    type: "single_choice",
    question: "码垛工艺中，叠栈（）、EX可以设定多个经路样式",
    options: {
      A: "B",
      B: "E",
      C: "BX",
      D: "DX"
    },
    answer: "C",
    category: "码垛"
  },
  {
    id: 457,
    type: "single_choice",
    question: "码垛B和BX指令适用于工件姿势恒定，堆叠时的底面形状为直线或（）",
    options: {
      A: "四角形",
      B: "五角形",
      C: "圆形",
      D: "六角形"
    },
    answer: "A",
    category: "码垛"
  },
  {
    id: 458,
    type: "single_choice",
    question: "码垛结束指令值在计算下一个堆叠点，改写（）的值",
    options: {
      A: "数值寄存器",
      B: "位置寄存器",
      C: "码垛寄存器",
      D: "字符串寄存器"
    },
    answer: "C",
    category: "码垛"
  },
  {
    id: 459,
    type: "single_choice",
    question: "码垛寄存器要素是指定要与码垛寄存器的值进行比较的要素，指定的方法有（）种",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "C",
    category: "码垛"
  },
  {
    id: 460,
    type: "single_choice",
    question: "FANUC工业机器人中堆栈时，码垛寄存器PL[i]的初始化状态为：",
    options: {
      A: "1-1-1",
      B: "*- *- *",
      C: "5-5-5",
      D: "0-0-0"
    },
    answer: "A",
    category: "码垛"
  },
  {
    id: 461,
    type: "single_choice",
    question: "FANUC工业机器人中位置寄存器PR[i]的形式有正交和（）",
    options: {
      A: "世界",
      B: "关节",
      C: "工具",
      D: "用户"
    },
    answer: "B",
    category: "寄存器"
  },
  {
    id: 462,
    type: "single_choice",
    question: "码垛堆积由堆上式样和（）两种式样组成",
    options: {
      A: "经路式样",
      B: "循环式样",
      C: "等待式样",
      D: "堆下式样"
    },
    answer: "A",
    category: "码垛"
  },
  {
    id: 463,
    type: "single_choice",
    question: "堆上方法的设定主要包含种类、增加、码垛寄存器和（）四部分内容",
    options: {
      A: "数值寄存器",
      B: "顺序",
      C: "位置寄存器",
      D: "循环条件"
    },
    answer: "B",
    category: "码垛"
  },
  {
    id: 464,
    type: "single_choice",
    question: "字符串寄存器用于存储包含英文、数字的字符串，每个字符串寄存器最多可以存储（）个字符",
    options: {
      A: "253",
      B: "254",
      C: "255",
      D: "256"
    },
    answer: "B",
    category: "寄存器"
  },
  {
    id: 465,
    type: "single_choice",
    question: "寄存器运算可以通过多项式进行运算，1行中可以记述的运算符最多为（）个",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "无限制"
    },
    answer: "B",
    category: "寄存器"
  },
  {
    id: 466,
    type: "single_choice",
    question: "PR[i] = （值）指令中，值不包括（）",
    options: {
      A: "PR[i]",
      B: "P[i]",
      C: "R[i]",
      D: "UFRAME[i]"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 467,
    type: "single_choice",
    question: "码垛寄存器PL[i]进行算数运算时，运算符包含（）",
    options: {
      A: "+，-",
      B: "+，-，*，/",
      C: "+，-，MOD，DIV",
      D: "+，-，*，/，MOD，DIV"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 468,
    type: "single_choice",
    question: "搬运程序中，等待超时设置$WAITTMOUT = n ，若 n = 100 则等待时间为（）",
    options: {
      A: "100ms",
      B: "1s",
      C: "10s",
      D: "100s"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 469,
    type: "single_choice",
    question: "完整的码垛指令包括码垛堆积指令、（）和码垛堆积结束指令",
    options: {
      A: "码垛堆积动作指令",
      B: "码垛堆积寄存器指令",
      C: "码垛堆积循环指令",
      D: "码垛堆积判断指令"
    },
    answer: "A",
    category: "码垛"
  },
  {
    id: 470,
    type: "single_choice",
    question: "下列关于安全栅栏的说法错误的是（）",
    options: {
      A: "栅栏的范围应大于机器人的运动区域",
      B: "栅栏必须接地以防止发生触电事故",
      C: "不管什么情况，栅栏都不需要固定，这样方便移动和更改布局",
      D: "栅栏必须能抵挡可预见的操作及周围的冲击"
    },
    answer: "C",
    category: "安全操作"
  },
  {
    id: 471,
    type: "single_choice",
    question: "FANUC工业机器人的主电源开关在什么位置（）。",
    options: {
      A: "机器人本体上",
      B: "控制柜上",
      C: "示教器上",
      D: "需外接"
    },
    answer: "B",
    category: "机器人操作"
  },
  {
    id: 472,
    type: "single_choice",
    question: "以下哪种不是机器人控制装置的开机方法（）",
    options: {
      A: "控制开机",
      B: "非控制开机",
      C: "冷开机",
      D: "热开机"
    },
    answer: "B",
    category: "机器人操作"
  },
  {
    id: 473,
    type: "single_choice",
    question: "在示教和手动操作机器人时，以下说法错误的是（）",
    options: {
      A: "为保证安全，在操作示教器是应该戴着手套",
      B: "在点动操作机器人时要采用较低的倍率速度以增加对机器人的控制机会",
      C: "在按下示教器上的点动键之前要考虑到机器人的运动趋势",
      D: "机器人周围区域必须清洁、无油、水及杂志等"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 474,
    type: "single_choice",
    question: "通常情况下，以下哪种人员不能在安全栅栏内进行作业（）",
    options: {
      A: "操作人员",
      B: "编程人员",
      C: "维护人员",
      D: "以上都可以"
    },
    answer: "A",
    category: "安全操作"
  },
  {
    id: 475,
    type: "single_choice",
    question: "在更换减速器和齿轮盒润滑油时，操作人员应该（）",
    options: {
      A: "可以不使用使用规定的润滑油",
      B: "务必使用工厂提供的压缩空气作为油枪的动力源",
      C: "最好使用自动有枪快速加入润滑油",
      D: "以上都不正确"
    },
    answer: "D",
    category: "维护保养"
  },
  {
    id: 476,
    type: "single_choice",
    question: "型号为S-430、R-2000的机器人每（）需要更换平衡块轴承的润滑油",
    options: {
      A: "1年或工作1920h",
      B: "半年或工作1920h",
      C: "半年或工作3840h",
      D: "1年或工作3840h"
    },
    answer: "B",
    category: "维护保养"
  },
  {
    id: 477,
    type: "single_choice",
    question: "FANUC工业机器人当TP上出现SYST-035报警时，表示（）。",
    options: {
      A: "机器人处奇异点",
      B: "示教器上紧急停止按钮被按下",
      C: "控制器主板电池没电",
      D: "机器人本体上电池电压下降"
    },
    answer: "C",
    category: "故障诊断"
  },
  {
    id: 478,
    type: "single_choice",
    question: "FANUC工业机器人当TP上出现SRVO-065报警时，以下说法正确的是（）",
    options: {
      A: "机器人还可以动作，但需要更换电池",
      B: "机器人动作缓慢",
      C: "此时机器人需要更换电池，更换电池后需要做零点复归",
      D: "以上说法均不正确"
    },
    answer: "B",
    category: "故障诊断"
  },
  {
    id: 479,
    type: "single_choice",
    question: "在使用FANUC工业机器人进行点动操作时，示教器上安全开关应该（）。",
    options: {
      A: "按到中间位置",
      B: "完全释放",
      C: "用力将其握住",
      D: "任意位置均可"
    },
    answer: "A",
    category: "机器人操作"
  },
  {
    id: 480,
    type: "single_choice",
    question: "以下哪个不是控制柜上模式开关的档位（）。",
    options: {
      A: "AUTO",
      B: "手动",
      C: "T1",
      D: "T2"
    },
    answer: "B",
    category: "机器人操作"
  },
  {
    id: 481,
    type: "single_choice",
    question: "控制柜上模式开关中的T1、T2模式的区别是（）",
    options: {
      A: "T1模式可以全速运行，T2不行",
      B: "T2模式可以全速运行，T1不行",
      C: "T1模式可以由数字输入信号DI控制启动，T2不行",
      D: "T2模式可以由数字输入信号DI控制启动，T1不行"
    },
    answer: "B",
    category: "机器人操作"
  },
  {
    id: 482,
    type: "single_choice",
    question: "示教器显示屏'异常'显示为红色，并且报警显示'SRVO-003安全开关已释放'，请问该如何消除报警。（）。",
    options: {
      A: "按下'RESET'键，消除报警",
      B: "轻轻按住安全开关不放，将其置于中间档位并按下'RESET'键",
      C: "用力按住安全开关不放并按下'RESET'键",
      D: "按一下安全开关，松开后再按一下'RESET'即可消除报警"
    },
    answer: "B",
    category: "故障诊断"
  },
  {
    id: 483,
    type: "single_choice",
    question: "示教器显示屏的状态栏出现'示教器禁用'的警告，这种情况是因为（）",
    options: {
      A: "TP有效开关处于OFF",
      B: "示教器上紧急停止按钮被按下",
      C: "安全开关被释放",
      D: "模式开关处于AUTO状态"
    },
    answer: "A",
    category: "故障诊断"
  },
  {
    id: 484,
    type: "single_choice",
    question: "通过按下（）可以分割屏幕，将屏幕切换成多屏",
    options: {
      A: "SHIFT+COORD",
      B: "COORD",
      C: "DISP",
      D: "SHIFT+DISP"
    },
    answer: "D",
    category: "机器人操作"
  },
  {
    id: 485,
    type: "single_choice",
    question: "以下哪个不是示教器的作用（）",
    options: {
      A: "移动机器人",
      B: "编写机器人程序",
      C: "查看机器人状态（I/O设置，位置信息等",
      D: "切换运行模式（AUTO/T1/T2）"
    },
    answer: "D",
    category: "机器人操作"
  },

  // 判断题部分
  {
    id: 486,
    type: "true_false",
    question: "在使用FANUC工业机器人进行点动操作时，模式开关必须处于T1位置。",
    answer: "false",
    category: "机器人操作"
  },
  {
    id: 487,
    type: "true_false",
    question: "FANUC工业机器人速度倍率值的范围为VFINE- 100%",
    answer: "true",
    category: "速度控制"
  },
  {
    id: 488,
    type: "true_false",
    question: "相比于单独按下'+%'键，同时按下示教器'SHIFT'键和'+%'键，会使得倍率变化值变大。",
    answer: "true",
    category: "速度控制"
  },
  {
    id: 489,
    type: "true_false",
    question: "当前倍率值在 5% -100% 之间，每按下一次示教器'+%'键，倍率增加 1% 。",
    answer: "false",
    category: "速度控制"
  },
  {
    id: 490,
    type: "true_false",
    question: "手动操作工业机器人从一个点直线走到另一个点，通常切换到joint坐标系下操作会比较快速简便。",
    answer: "false",
    category: "机器人操作"
  },
  {
    id: 491,
    type: "true_false",
    question: "可通过右手法则判断工业机器人在世界坐标系下各个轴的运动方向。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 492,
    type: "true_false",
    question: "工业机器人需要在斜面上搬运工件，通常建立一个用户坐标系会使得操作更加简便。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 493,
    type: "true_false",
    question: "0号用户坐标系与世界坐标系是重合的。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 494,
    type: "true_false",
    question: "使用六点法创建工具坐标系精度要比使用三点法高。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 495,
    type: "true_false",
    question: "使用三点法创建工具坐标系不能改变坐标系的XYZ轴方向。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 496,
    type: "true_false",
    question: "使用六点法创建工具坐标系不能改变坐标系的XYZ轴方向。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 497,
    type: "true_false",
    question: "必须为每一个配备给机器人的夹具创建工具坐标系，机器人才能正常工作。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 498,
    type: "true_false",
    question: "使用三点法创建工具坐标系时，三个点需要以不同的姿态去对准基准点。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 499,
    type: "true_false",
    question: "使用六点法创建工具坐标系时，六个点需要以不同的姿态去对准基准点。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 500,
    type: "true_false",
    question: "必须为每一台工业机器人创建用户坐标系，机器人才能正常工作。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 501,
    type: "true_false",
    question: "使用三点法创建用户坐标系时，第一个点为坐标系原点。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 502,
    type: "true_false",
    question: "使用示教器手动操作工业机器人，松开DEADMAN后，机器人依然可以运动。",
    answer: "false",
    category: "机器人操作"
  },
  {
    id: 503,
    type: "true_false",
    question: "按下紧急停止按钮后，才能手动操作机器人运动。",
    answer: "false",
    category: "机器人操作"
  },
  {
    id: 504,
    type: "true_false",
    question: "CO2气保焊焊枪通常安装在机器人六轴法兰盘。",
    answer: "true",
    category: "末端执行器"
  },
  {
    id: 505,
    type: "true_false",
    question: "对机器人进行零点复归操作时，使用单轴运动校对零点。",
    answer: "true",
    category: "系统设置"
  },
  {
    id: 506,
    type: "true_false",
    question: "FANUC机器人在进行试运行调试时，只需要切换到某程序界面，就可以直接试运行该程序",
    answer: "true",
    category: "程序调试"
  },
  {
    id: 507,
    type: "true_false",
    question: "使用示教器试运行程序时，机器人顺序单步执行程序所走的路径与实际工作时的路径绝对一致。",
    answer: "false",
    category: "程序调试"
  },
  {
    id: 508,
    type: "true_false",
    question: "使用示教器试运行程序时，机器人逆序单步执行程序所走的路径与实际工作时的路径绝对一致。",
    answer: "false",
    category: "程序调试"
  },
  {
    id: 509,
    type: "true_false",
    question: "使用单步试运行程序，只需按一次FWD键，程序就一步步的执行下去。",
    answer: "false",
    category: "程序调试"
  },
  {
    id: 510,
    type: "true_false",
    question: "当使用示教器试运行程序时，DEADMAN不需要一直按着。",
    answer: "false",
    category: "程序调试"
  },
  {
    id: 511,
    type: "true_false",
    question: "当示教器状态栏中的STEP灯处于亮着状态，机器人将执行单步运行。",
    answer: "true",
    category: "程序调试"
  },
  {
    id: 512,
    type: "true_false",
    question: "调试程序过程中，发现某行J指令使得机器人发生奇异点报警，应修改成L指令。",
    answer: "false",
    category: "程序调试"
  },
  {
    id: 513,
    type: "true_false",
    question: "通过试运行程序后，观察机器人运动过程，发现有一个点误差较大，将光标移至该行，重新示教好该点位置并记录。",
    answer: "true",
    category: "程序调试"
  },
  {
    id: 514,
    type: "true_false",
    question: "FANUC机器人R-30iBMate控制柜支持USB设备备份。",
    answer: "true",
    category: "数据备份"
  },
  {
    id: 515,
    type: "true_false",
    question: "在一般模式下，关于单个文件加载，写保护文件不能被加载。",
    answer: "true",
    category: "数据备份"
  },
  {
    id: 516,
    type: "true_false",
    question: "不是所有的FANUC机器人控制柜都支持镜像备份。",
    answer: "true",
    category: "数据备份"
  },
  {
    id: 517,
    type: "true_false",
    question: "在一般模式下，导出系统文件的操作与导出程序文件的操作是一样的。",
    answer: "true",
    category: "数据备份"
  },
  {
    id: 518,
    type: "true_false",
    question: "在复制程序时，写保护状态的程序不能被复制。",
    answer: "false",
    category: "程序编辑"
  },
  {
    id: 519,
    type: "true_false",
    question: "在相同控制装置内不能创建2个或2个以上相同名称的程序。",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 520,
    type: "true_false",
    question: "复制程序时，可以继续使用原程序的程序名，不用修改",
    answer: "false",
    category: "程序编辑"
  },
  {
    id: 521,
    type: "true_false",
    question: "位置指示符号'@'表示下一个将要到达的位置",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 522,
    type: "true_false",
    question: "关节运动是不进行轨迹控制和姿势控制的",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 523,
    type: "true_false",
    question: "直线运动中的工具姿势可以受到控制",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 524,
    type: "true_false",
    question: "圆弧运动中的工具姿势可以受到控制",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 525,
    type: "true_false",
    question: "机器人的运动速度是指第6轴法兰盘中心点的运动速度。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 526,
    type: "true_false",
    question: "运动指令中位置数据类型可以是一般位置P[i]，也可以是位置寄存器PR[i]",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 527,
    type: "true_false",
    question: "P[i]是位置变量，属于全局变量。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 528,
    type: "true_false",
    question: "PR[i]是位置寄存器，属于局部变量。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 529,
    type: "true_false",
    question: "在运动指令的定位类型中，CNT的值越大则越远离目标位置",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 530,
    type: "true_false",
    question: "在FANUC机器人中，I/O信号可以分为两大类：通用I/O信号和专用I/O信号。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 531,
    type: "true_false",
    question: "通用I/O信号包括数字I/O信号、组I/O信号和模拟I/O信号。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 532,
    type: "true_false",
    question: "专用I/O信号包括外围设备I/O信号、操作面板I/O信号和机器人I/O信号。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 533,
    type: "true_false",
    question: "数字I/O信号是指信息参数在给定范围内表现为连续地信号。",
    answer: "false",
    category: "I/O信号"
  },
  {
    id: 534,
    type: "true_false",
    question: "模拟I/O信号是离散的。",
    answer: "false",
    category: "I/O信号"
  },
  {
    id: 535,
    type: "true_false",
    question: "模拟I/O信号通常用来表征连续变化的物理量，如温度、湿度、压力、长度、电流、电压等。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 536,
    type: "true_false",
    question: "I/O连接设备从机接口的插槽值始终为1。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 537,
    type: "true_false",
    question: "主板（CRMA15/CRMA16）的插槽值始终为1。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 538,
    type: "true_false",
    question: "在RSR自动运行中，外围设备输入信号UI[9]~UI[16]表示机器人启动请求信号。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 539,
    type: "true_false",
    question: "所有的I/O信号都可以将值赋予寄存器R[i]。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 540,
    type: "true_false",
    question: "指令UTOOL_NUM表示改变当前所选的用户坐标系编号。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 541,
    type: "true_false",
    question: "指令UFRAME_NUM表示改变当前所选的工具坐标系编号。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 542,
    type: "true_false",
    question: "位置寄存器要素指令 PR[3,4] 表示位置寄存器 PR[4] 的第 3 个要素。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 543,
    type: "true_false",
    question: "外围设备 I/O 信号可分为两种：全部分配和简略分配。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 544,
    type: "true_false",
    question: "无条件转移指令有两类：标签/跳跃指令、程序调用指令。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 545,
    type: "true_false",
    question: "RI/RO 信号被固定，不能进行信号的分配。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 546,
    type: "true_false",
    question: "UI/UO 信号被固定，不能进行信号的分配。",
    answer: "false",
    category: "I/O信号"
  },
  {
    id: 547,
    type: "true_false",
    question: "DI/DO 信号被固定，不能进行信号的分配。",
    answer: "false",
    category: "I/O信号"
  },
  {
    id: 548,
    type: "true_false",
    question: "FOR 指令一定要和 ENDFOR 配合使用。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 549,
    type: "true_false",
    question: "SO 信号不能通过指令控制其输出。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 550,
    type: "true_false",
    question: "码垛堆积有码垛堆积 B 和码垛堆积 E 两种设定方法。",
    answer: "false",
    category: "码垛"
  },
  {
    id: 551,
    type: "true_false",
    question: "码垛堆积由两种式样构成：堆上式样和经路式样。",
    answer: "true",
    category: "码垛"
  },
  {
    id: 552,
    type: "true_false",
    question: "码垛堆积 EX 比码垛堆积 B、BX、E 功能更加强。",
    answer: "true",
    category: "码垛"
  },
  {
    id: 553,
    type: "true_false",
    question: "码垛指令一旦设置完成，不能修改。",
    answer: "false",
    category: "码垛"
  },
  {
    id: 554,
    type: "true_false",
    question: "搬运机器人不一定要为夹具设置工具坐标系。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 555,
    type: "true_false",
    question: "机器人在进行装配任务时，为保证效率，机器人全程应当高速运行。",
    answer: "false",
    category: "机器人操作"
  },
  {
    id: 556,
    type: "true_false",
    question: "机器人在进行搬运任务时，在夹取物料前后，应短暂停留一段时间，以确保位置准确、夹取平稳。",
    answer: "true",
    category: "机器人操作"
  },
  {
    id: 557,
    type: "true_false",
    question: "码垛寄存器有（i，j，k）三个要素。",
    answer: "true",
    category: "码垛"
  },
  {
    id: 558,
    type: "true_false",
    question: "在使用FANUC工业机器人进行点动操作时，模式开关必须处于T1位置。",
    answer: "false",
    category: "机器人操作"
  },
  {
    id: 559,
    type: "true_false",
    question: "机器人不需要定期保养或者维护。",
    answer: "false",
    category: "维护保养"
  },
  {
    id: 560,
    type: "true_false",
    question: "机器人工作时，工作范围可以进入或者站人。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 561,
    type: "true_false",
    question: "操作机器人示教器和操作面板必须带手套。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 562,
    type: "true_false",
    question: "在日常维护保养中，用湿毛巾清洁机器人控制柜内部以及示教器。",
    answer: "false",
    category: "维护保养"
  },
  {
    id: 563,
    type: "true_false",
    question: "工业机器人的编程示教器可以放在任何地方。",
    answer: "false",
    category: "安全操作"
  },
  {
    id: 564,
    type: "true_false",
    question: "机器人停机时，夹具上不应该置物，必须空机。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 565,
    type: "true_false",
    question: "工业机器人在发生意外或运行不正常等情况下，均可使用急停按钮，停止运行。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 566,
    type: "true_false",
    question: "调试人员进入机器人工作区域时，必须随身携带示教器，以防他人误操作。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 567,
    type: "true_false",
    question: "在使用FANUC工业机器人进行点动操作时，示教器背后的两个安全开关必须全部按到中间档位才能点动",
    answer: "false",
    category: "机器人操作"
  },
  {
    id: 568,
    type: "true_false",
    question: "在进行RSR自动运行方式设置时，若记录号为12，基数为100，则程序名为RSR112",
    answer: "false",
    category: "程序编辑"
  },
  {
    id: 569,
    type: "true_false",
    question: "用户可以自己定义世界坐标系的方向。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 570,
    type: "true_false",
    question: "默认的工具坐标系原点在机器人第六轴法兰盘中心。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 571,
    type: "true_false",
    question: "工具坐标系在未被用户设置时，其方向和世界坐标系一致。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 572,
    type: "true_false",
    question: "在设置工具坐标系时，通常将工具坐标系原点设置在工具的作用点，如焊丝端部、手抓中心等。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 573,
    type: "true_false",
    question: "在使用三点法设置工具坐标系时，为了保证新的TCP更精确，应使3种姿态的差异尽量大些。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 574,
    type: "true_false",
    question: "在使用三点法设置工具坐标系后，新工具坐标系的方向与默认工具坐标系方向保持一致。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 575,
    type: "true_false",
    question: "FANUC机器人在T1模式下，程序只能通过示教器启动，机器人能以指定的最大速度运行。",
    answer: "false",
    category: "机器人操作"
  },
  {
    id: 576,
    type: "true_false",
    question: "FANUC机器人在T2模式下，程序只能通过示教器启动，机器人的运行速度不能高于 250mm/s 。",
    answer: "false",
    category: "机器人操作"
  },
  {
    id: 577,
    type: "true_false",
    question: "不管TP有效开关的状态如何，TP上的急停按钮被按下时，机器人都会急停",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 578,
    type: "true_false",
    question: "一个程序只能使用一套工具坐标系和一套用户坐标系运行",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 579,
    type: "true_false",
    question: "在Image加载过程中，可以断电",
    answer: "false",
    category: "数据备份"
  },
  {
    id: 580,
    type: "true_false",
    question: "程序文件是记述程序指令，并向机器人发出一连串指令的文件。",
    answer: "true",
    category: "数据备份"
  },
  {
    id: 581,
    type: "true_false",
    question: "系统文件是存储运行应用工具软件系统的控制程序或系统使用的数据的文件。",
    answer: "true",
    category: "数据备份"
  },
  {
    id: 582,
    type: "true_false",
    question: "数据文件是用来存储系统使用数据的文件。",
    answer: "true",
    category: "数据备份"
  },
  {
    id: 583,
    type: "true_false",
    question: "程序和系统变量等信息可以保存在外部存储装置中",
    answer: "true",
    category: "数据备份"
  },
  {
    id: 584,
    type: "true_false",
    question: "TP 有效开关为 OFF 时，点动进给、程序创建、测试执行等操作都无法进行",
    answer: "true",
    category: "机器人操作"
  },
  {
    id: 585,
    type: "true_false",
    question: "FANUC 工业机器人 TP 程序中最多允许创建 999 行程序",
    answer: "false",
    category: "程序编辑"
  },
  {
    id: 586,
    type: "true_false",
    question: "FANUC 工业机器人程序命名不允许使用数字或符号作为开头",
    answer: "true",
    category: "程序编辑"
  },
  {
    id: 587,
    type: "true_false",
    question: "开启程序写保护后不能修改程序内容但仍然能对程序进行重命名操作",
    answer: "false",
    category: "程序编辑"
  },
  {
    id: 588,
    type: "true_false",
    question: "FANUC 工业机器人关节运动中的工具姿态可以受到控制",
    answer: "false",
    category: "设备参数",
    explanation: "在关节运动(J)中，工具姿态不受控制，仅控制各关节角度"
  },
  {
    id: 589,
    type: "true_false",
    question: "FANUC 工业机器人第 5 轴可以旋转 360 度",
    answer: "false",
    category: "设备参数",
    explanation: "FANUC工业机器人第5轴通常有旋转限制，不能达到360度全旋转"
  },
  {
    id: 590,
    type: "true_false",
    question: "FANUC 工业机器人定位类型 FINE 和 CNT0 工业机器人都会到达目标位置",
    answer: "false",
    category: "设备参数",
    explanation: "CNT0是近似定位，机器人不会精确到达目标点，而FINE会精确到达"
  },
  {
    id: 591,
    type: "true_false",
    question: "CRMA15/CRMA16 输入信号公共端 SDICOM 数量一致",
    answer: "false",
    category: "设备参数",
    explanation: "CRMA15和CRMA16的SDICOM数量不同，CRMA15有8个，CRMA16有16个"
  },
  {
    id: 592,
    type: "true_false",
    question: "在 FANUC 工业机器人中模拟量输出信号 AO[i]输出的是布尔量",
    answer: "false",
    category: "设备参数",
    explanation: "AO[i]输出的是模拟量(0-10V或4-20mA)，不是布尔量"
  },
  {
    id: 593,
    type: "true_false",
    question: "在 FANUC 工业机器人，DO[1]=R[1]，若 R[1]=3 则 DO[1]断开",
    answer: "false",
    category: "设备参数",
    explanation: "R[1]=3时，DO[1]应为接通状态，0表示断开，1表示接通"
  },
  {
    id: 594,
    type: "true_false",
    question: "在 FANUC 工业机器人，DO[i]或 DI[i]信号不能通过数值寄存间接指定",
    answer: "false",
    category: "设备参数",
    explanation: "FANUC机器人支持通过数值寄存器间接指定I/O信号，如DO[R[1]]"
  },
  {
    id: 595,
    type: "true_false",
    question: "脉冲输出宽度可由变量$DEFPULSE 指定，最大值可设置为 100",
    answer: "false",
    category: "设备参数",
    explanation: "$DEFPULSE最大值为99，不能设置为100"
  },
  {
    id: 596,
    type: "true_false",
    question: "使用 I/O Model A/B 时，SLOT 号由每个单元所连接的模块顺序确定",
    answer: "true",
    category: "设备参数",
    explanation: "I/O Model A/B的SLOT号确实由模块连接顺序决定"
  },
  {
    id: 597,
    type: "true_false",
    question: "CRMA15/CRMA16 输入和输出起始信号位和接线端子序号一致",
    answer: "false",
    category: "设备参数",
    explanation: "CRMA15/CRMA16的信号位编号与接线端子序号不一致，有特定对应关系"
  },
  {
    id: 598,
    type: "true_false",
    question: "工业机器人 I/O 地址分配完毕，必须重启机器人控制器，使分配生效",
    answer: "true",
    category: "设备维护",
    explanation: "I/O地址分配后需要重启控制器才能使配置生效"
  },
  {
    id: 599,
    type: "true_false",
    question: "数字 I/O 指令（DI/DO）是对多个数字 I/O 进行读取或赋值的指令",
    answer: "false",
    category: "设备参数",
    explanation: "DI/DO指令是针对单个数字I/O的指令，不是多个"
  },
  {
    id: 600,
    type: "true_false",
    question: "机器人 RI/RO 的物理信号已被固定为逻辑信号，因而不能进行再定义",
    answer: "true",
    category: "设备参数",
    explanation: "RI/RO信号是预定义的物理信号，不能重新定义"
  },
  {
    id: 601,
    type: "true_false",
    question: "拆垛寄存器和码垛寄存器初始化状态一致",
    answer: "false",
    category: "设备参数",
    explanation: "拆垛和码垛寄存器的初始化状态不同，拆垛寄存器初始值为堆垛层数"
  },
  {
    id: 602,
    type: "true_false",
    question: "码垛寄存器 PL[i]的值在程序执行过程中始终保持不变",
    answer: "false",
    category: "设备参数",
    explanation: "PL[i]值在码垛操作过程中会随着堆垛动作而变化"
  },
  {
    id: 603,
    type: "true_false",
    question: "码垛堆上式样点中接近点和逃离点可以设置为同一点",
    answer: "true",
    category: "设备参数",
    explanation: "接近点和逃离点可以设置为同一点，但通常不推荐这样做"
  },
  {
    id: 604,
    type: "true_false",
    question: "一段程序中码垛指令，码垛动作指令和码垛结束指令同时使用才有效",
    answer: "true",
    category: "设备参数",
    explanation: "完整的码垛操作需要包含码垛指令、动作指令和结束指令"
  },
  {
    id: 605,
    type: "true_false",
    question: "机器人处于自动模式下时，不允许进入其运动所及的区域",
    answer: "true",
    category: "安全操作",
    explanation: "自动模式下进入机器人工作区域存在严重安全隐患"
  },
  {
    id: 606,
    type: "true_false",
    question: "在不了解机器人运动方向及速度的情况，初次点动机器人，为了更好地观察，人与机器人的距离越近越好",
    answer: "false",
    category: "安全操作",
    explanation: "安全操作要求保持安全距离，近距离观察非常危险"
  },
  {
    id: 607,
    type: "true_false",
    question: "操作示教器时必须戴手套",
    answer: "false",
    category: "安全操作",
    explanation: "戴手套操作示教器可能影响操作精度，通常不建议戴手套操作"
  },
  {
    id: 608,
    type: "true_false",
    question: "机器人系统的主要安全设备有紧急停止设备、模式选择开关、DEADMAN开关及安全装置",
    answer: "true",
    category: "安全操作",
    explanation: "这些是FANUC机器人标准安全配置的关键组件"
  },
  {
    id: 609,
    type: "true_false",
    question: "生产运行时，安全门必须一直保持关闭状态，若机器人运行时有人打开了安全门，就发送信号使机器人动作停止",
    answer: "true",
    category: "安全操作",
    explanation: "安全门打开时机器人应立即停止运行，这是基本安全要求"
  },
  {
    id: 610,
    type: "true_false",
    question: "如果有外部设备诸如打印机、视觉系统等与机器人相连，在关电前，要先将这些外部设备关闭，以免损坏",
    answer: "true",
    category: "设备维护",
    explanation: "正确关闭外部设备可避免数据丢失或设备损坏"
  },
  {
    id: 611,
    type: "true_false",
    question: "接通电源前，需要检查工作区域（包括工业机器人、控制柜等）以及所有安全设备是否正常",
    answer: "true",
    category: "安全操作",
    explanation: "这是标准的安全操作程序，确保工作环境安全"
  }
];

// 题目总数
export const totalQuestions = questionBank.length;

// 题库统计函数
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
    if (question.type === 'true_false') {
      stats[question.category].trueFalse++;
    }
    if (question.hasImage) {
      stats[question.category].hasImage++;
    }
  });
  return stats;
};