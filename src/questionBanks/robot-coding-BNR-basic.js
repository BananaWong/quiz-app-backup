// industrialRobotics.js - 工业机器人题库文件
export const questionBank = [
  {
    id: 1,
    type: "single_choice",
    question: "在手动操作模型下，工业机器人共有三种运动模式，这三种运动模块不包括（）。",
    options: {
      A: "单轴运动",
      B: "线性运动",
      C: "重定位运动",
      D: "连续运动"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 2,
    type: "single_choice",
    question: "工业机器人手动运行时，伺服伺服使能键按下为ON，松开为OFF，作为追加功能，用力过大时呈（）状态。",
    options: {
      A: "ON",
      B: "OFF",
      C: "报警",
      D: "无反应"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 3,
    type: "single_choice",
    question: "手动操作机器人的时候，机器人的速度与操作杆的（）有关。",
    options: {
      A: "幅度",
      B: "大小",
      C: "颜色",
      D: "方向"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 4,
    type: "single_choice",
    question: "为了确保安全，用示教编程手动运行机器人时，机器人的最高速度限制为（）。",
    options: {
      A: "50mm/s",
      B: "250mm/s",
      C: "800mm/s",
      D: "1600mm/s"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 5,
    type: "single_choice",
    question: "机器人运行过程中，需要打开伺服开关，伺服打开后状态指示灯颜色变为（）。",
    options: {
      A: "绿色",
      B: "红色",
      C: "黄色",
      D: "蓝色"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 6,
    type: "single_choice",
    question: "机器人在运行过程中发生碰撞，通常将机器人调到（）进行恢复。",
    options: {
      A: "手动模式",
      B: "自动模式",
      C: "半自动模式",
      D: "单步运行"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 7,
    type: "single_choice",
    question: "在程序编程过程中，需要对新建程序进行验证，通常将机器人调到（）下进行程序验证。",
    options: {
      A: "手动高速运行",
      B: "自动运行",
      C: "手动连续运行",
      D: "手动单步低速运行"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 8,
    type: "single_choice",
    question: "在程序编程过程中，对新建程序在手动低速单步运行方式验证后，通常还需要在（）下进一步进行程序验证。",
    options: {
      A: "手动高速运行",
      B: "自动运行",
      C: "手动低速连续运行",
      D: "手动单步低速运行"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 9,
    type: "single_choice",
    question: "在手动操作机器人时，在按下伺服伺服使能键会听到声音，当听到声音说明（）。",
    options: {
      A: "松开抱闸",
      B: "启动机器人",
      C: "松开急停",
      D: "接通电源"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 10,
    type: "single_choice",
    question: "工业机器人手动全速模式下，速度可调范围（）。",
    options: {
      A: "1%-100%",
      B: "5%-100%",
      C: "20%-90%",
      D: "30%-80%"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 11,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时，以（）。",
    options: {
      A: "程序给定的速度运行",
      B: "示教最高速度来限制运行",
      C: "示教最低速度来运行",
      D: "程序报错"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 12,
    type: "single_choice",
    question: "工业机器人手动低速模式下，其速度可调范围为（）。",
    options: {
      A: "5%-30%",
      B: "1%-20%",
      C: "1%-30%",
      D: "5%-20%"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 13,
    type: "single_choice",
    question: "对机器人进行示教编程时，通常将模式旋钮打到示教模式，在此模式下，外部设备发出的启动信号（）。",
    options: {
      A: "无效",
      B: "有效",
      C: "延时后有效",
      D: "视情况而定"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 14,
    type: "single_choice",
    question: "机器人的最大工作速度通常指机器人的（）最大速度。",
    options: {
      A: "六轴",
      B: "小臂",
      C: "大臂",
      D: "手臂末端"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 15,
    type: "single_choice",
    question: "工业机器人（）模式下，速度可调范围为  $1\\% -100\\%$",
    options: {
      A: "自动快速",
      B: "手动全速",
      C: "手动慢速",
      D: "自动慢速"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 16,
    type: "single_choice",
    question: "博诺BN-R3机器人速度调节最小步长为（）",
    options: {
      A: "1%",
      B: "2%",
      C: "3%",
      D: "5%"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 17,
    type: "single_choice",
    question: "博诺BN-R3机器人速度设置有（）种方式。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 18,
    type: "single_choice",
    question: "博诺BN-R3工业机器人运行方式有（）种。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 19,
    type: "single_choice",
    question: "示教器属于哪个机器人子系统（）。",
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
    id: 20,
    type: "single_choice",
    question: "以下不是示教器示教的缺点的是（）。",
    options: {
      A: "难以获得高精度控制",
      B: "难以获得高速度",
      C: "难以与其他设备同步",
      D: "不易与传感器信息相配合"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 21,
    type: "single_choice",
    question: "博诺BN-R3机器人的示教器不包括哪国语言（）。",
    options: {
      A: "英语",
      B: "汉语",
      C: "日语",
      D: "意大利语"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 22,
    type: "single_choice",
    question: "工业机器人的权限可以分为（）。",
    options: {
      A: "控制器权限",
      B: "应用程序权限",
      C: "控制器权限和应用程序权限",
      D: "以上都不是"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 23,
    type: "single_choice",
    question: "（）不属于工业机器人基本配置。",
    options: {
      A: "系统时间设定",
      B: "速度设定",
      C: "语言设定",
      D: "用户权限"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 24,
    type: "single_choice",
    question: "IP设置界面不可以设置（）。",
    options: {
      A: "控制器的IP地址",
      B: "示教器的IP地址",
      C: "子网掩码",
      D: "上位机的IP地址"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 25,
    type: "single_choice",
    question: "工业机器人的权限可以分为（）和应用程序权限。",
    options: {
      A: "示教器权限",
      B: "应用程序权限",
      C: "控制器权限",
      D: "以上都不是"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 26,
    type: "single_choice",
    question: "博诺BN-R3机器人中语言设置界面，语言选项用（）代表。",
    options: {
      A: "意大利语",
      B: "中文",
      C: "国旗",
      D: "地图"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 27,
    type: "single_choice",
    question: "博诺BN-R3机器人的示教器需要输入哪个密码可以进入管理员模式（）。",
    options: {
      A: "111111",
      B: "555555",
      C: "666666",
      D: "999999"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 28,
    type: "single_choice",
    question: "博诺BN-R3机器人的示教器需要输入哪个密码可以进入操作员模式（）。",
    options: {
      A: "777777",
      B: "666666",
      C: "999999",
      D: "888888"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 29,
    type: "single_choice",
    question: "机器人在设置IP过程中，通常机器人IP地址的前（）位代表与其它通信设备处于同一个网段。",
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
    id: 30,
    type: "single_choice",
    question: "机器人在设置IP过程中，通常机器人IP地址的前（）位与和它通信设备相同。",
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
    id: 31,
    type: "single_choice",
    question: "工业机器人的工具中心点（TCP）的位置是在（）。",
    options: {
      A: "法兰盘中心",
      B: "末端执行器中心",
      C: "末端执行器尾部",
      D: "以上说法都不正确"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 32,
    type: "single_choice",
    question: "工业机器人一般有4个坐标系，不包括以下哪一项。（）",
    options: {
      A: "基坐标系",
      B: "关节坐标系",
      C: "工件坐标系",
      D: "空间坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 33,
    type: "single_choice",
    question: "通常用来定义机器人相对于其它物体的运动的参考坐标系是（）。",
    options: {
      A: "全局参考坐标系",
      B: "关节参考坐标系",
      C: "工具参考坐标系",
      D: "工件参考坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 34,
    type: "single_choice",
    question: "用来描述机器人每一个独立关节运动参考坐标系是（）。",
    options: {
      A: "全局参考坐标系",
      B: "关节参考坐标系",
      C: "工具参考坐标系",
      D: "工件参考坐标系"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 35,
    type: "single_choice",
    question: "世界坐标系是系统的绝对坐标系，世界坐标系又称为（）。",
    options: {
      A: "全局参考坐标系",
      B: "关节参考坐标系",
      C: "工具参考坐标系",
      D: "大地坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 36,
    type: "single_choice",
    question: "世界坐标系是一个固定的直角坐标系，默认为世界坐标系位于（）。",
    options: {
      A: "工作台上",
      B: "工具中心点",
      C: "机器人底部",
      D: "地面"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 37,
    type: "single_choice",
    question: "示教器面板上可以进行坐标系类型切换，其中坐标系类型不包括（）。",
    options: {
      A: "关节坐标系",
      B: "笛卡尔坐标系",
      C: "用户坐标系",
      D: "空间坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 38,
    type: "single_choice",
    question: "基坐标系又称为（）。",
    options: {
      A: "机座坐标系",
      B: "世界坐标系",
      C: "用户坐标系",
      D: "工具坐标系"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 39,
    type: "single_choice",
    question: "机器人工具坐标系是由坐标方位与（）组成。",
    options: {
      A: "工件中心点",
      B: "工具中心点 TCP",
      C: "机器人底部",
      D: "机器人末端"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 40,
    type: "single_choice",
    question: "机器人在编程过程中，需要在不同的工作台进行示教编程，为了方便编程，可以在每个工作台上建立（）。",
    options: {
      A: "世界坐标系",
      B: "基坐标系",
      C: "用户坐标系",
      D: "工具坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 41,
    type: "single_choice",
    question: "当需要机器人一轴旋转一定角度，通常需要将坐标系类型切换至（）。",
    options: {
      A: "用户坐标系",
      B: "工具坐标系",
      C: "笛卡尔坐标系",
      D: "关节坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 42,
    type: "single_choice",
    question: "机器人默认TCP方向为（）。",
    options: {
      A: "需要标定确定",
      B: "与法兰末端一致",
      C: "垂直于底座",
      D: "工具法向面"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 43,
    type: "single_choice",
    question: "进行机器人TCP点标定，至少需要示教（）位姿点。",
    options: {
      A: "2个",
      B: "3个",
      C: "4个",
      D: "6个"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 44,
    type: "single_choice",
    question: "在机器人学科中，常用参考坐标系和（）来描述空间机器人的位姿。",
    options: {
      A: "工件坐标系",
      B: "世界坐标系",
      C: "关节坐标系",
      D: "空间坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 45,
    type: "single_choice",
    question: "参考坐标系的位置和（）不随机器人各关节的运动而变化。",
    options: {
      A: "方向",
      B: "大小",
      C: "数量",
      D: "精度"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 46,
    type: "single_choice",
    question: "机器人在斜面进行喷涂作业时，在编写程序前需要建立（）。",
    options: {
      A: "世界坐标系",
      B: "关节坐标系",
      C: "用户坐标系",
      D: "空间坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 47,
    type: "single_choice",
    question: "（）是以机器人安装基座为基准、用来描述机器人本体运动的直角坐标系。",
    options: {
      A: "笛卡尔坐标系",
      B: "直角坐标系",
      C: "关节坐标系",
      D: "基坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 48,
    type: "single_choice",
    question: "工业机器人本体坐标系有两个，一个是关节坐标系，另一个是（）。",
    options: {
      A: "关节坐标系",
      B: "空间坐标系",
      C: "基坐标系",
      D: "世界坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 49,
    type: "single_choice",
    question: "机器人在在焊接过程中，通常焊枪带有弯头，为了程序编写方便，我们需要建立（）。",
    options: {
      A: "关节坐标系",
      B: "工件坐标系",
      C: "工具坐标系",
      D: "大地坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 50,
    type: "single_choice",
    question: "（）是用户自定义的直角坐标系，通常作为程序中记录所有位置信息的参考坐标系。",
    options: {
      A: "球坐标系",
      B: "工具坐标系",
      C: "用户坐标系",
      D: "大地坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 51,
    type: "single_choice",
    question: "参考坐标系的（）和方向不随机器人各关节的运动而变化。",
    options: {
      A: "位置",
      B: "位姿",
      C: "方向",
      D: "大小"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 52,
    type: "single_choice",
    question: "（）又称为机座坐标系。",
    options: {
      A: "大地坐标",
      B: "用户坐标系",
      C: "工具坐标系",
      D: "基坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 53,
    type: "single_choice",
    question: "（）又称为大地坐标系。",
    options: {
      A: "全局参考坐标系",
      B: "关节参考坐标系",
      C: "工具参考坐标系",
      D: "大地坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 54,
    type: "single_choice",
    question: "（）方向为与法兰末端一致。",
    options: {
      A: "笛卡尔坐标系",
      B: "基坐标系",
      C: "世界坐标系",
      D: "用户坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 55,
    type: "single_choice",
    question: "机器人工具坐标系是由（）与工具中心点TCP组成。",
    options: {
      A: "工件中心点",
      B: "坐标方向",
      C: "机器人底部",
      D: "机器人末端"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 56,
    type: "single_choice",
    question: "当机器人运动到奇点位置，需要将坐标系切换至（），通过手动低速操作绕过奇点。",
    options: {
      A: "用户坐标系",
      B: "工具坐标系",
      C: "笛卡尔坐标系",
      D: "关节坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 57,
    type: "single_choice",
    question: "机器人工具坐标系实际是由（）通过旋转和位移变换得出。",
    options: {
      A: "用户坐标系",
      B: "关节坐标系",
      C: "直角坐标系",
      D: "笛卡尔坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 58,
    type: "single_choice",
    question: "目前主流机器人TCP默认工具（tool0）的工具中心点位于（）。",
    options: {
      A: "机器人安装法兰的中心",
      B: "机器人基坐标原点",
      C: "世界坐标系零点",
      D: "所安装工具的中心点"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 59,
    type: "single_choice",
    question: "工件坐标系的设置一般采用（）点法。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "6"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 60,
    type: "single_choice",
    question: "通常用来定义机器人相对于与机器人通信的其它部件以及运动部件的参考坐标系是（）。",
    options: {
      A: "全局参考坐标系",
      B: "关节参考坐标系",
      C: "工具参考坐标系",
      D: "工件参考坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 61,
    type: "single_choice",
    question: "在进行（）标定时，示教点数应该不少于4个。",
    options: {
      A: "TTP点",
      B: "TPP点",
      C: "TCP点",
      D: "TPC点"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 62,
    type: "single_choice",
    question: "工业机器人关节运动形式不包括（）。",
    options: {
      A: "球型",
      B: "移动型",
      C: "旋转型",
      D: "圆型"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 63,
    type: "single_choice",
    question: "坐标系通常由三个（）的轴来表示。",
    options: {
      A: "垂直",
      B: "相交",
      C: "正交",
      D: "以上都不对"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 64,
    type: "single_choice",
    question: "关节坐标系是设定在工业机器人（）中的坐标系。",
    options: {
      A: "底座",
      B: "关节",
      C: "本体",
      D: "工具"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 65,
    type: "single_choice",
    question: "在关节坐标系中，工业机器人的位置和姿态以（）为基准。",
    options: {
      A: "工件坐标系",
      B: "工具坐标系",
      C: "笛卡尔坐标系",
      D: "各个关节底座侧的原点角度"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 66,
    type: "single_choice",
    question: "关节坐标系中的数值即为（）的角度值。",
    options: {
      A: "关节正负方向转动",
      B: "关节正负方向移动",
      C: "关节上下方向移动",
      D: "关节上下方向转动"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 67,
    type: "single_choice",
    question: "手动标定工具坐标系的方法不包括（）。",
    options: {
      A: "TCP（默认）",
      B: "TCP&Z",
      C: "TCP&Z,Y",
      D: "TCP&Z,X"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 68,
    type: "single_choice",
    question: "在建立机器人（）时，各个位姿点的位置与法兰盘位置必须相同，各个位姿点位姿不同。",
    options: {
      A: "工件坐标系",
      B: "笛卡尔坐标系",
      C: "关节坐标系",
      D: "工具坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 69,
    type: "single_choice",
    question: "工业机器人在运行过程中，修改工具坐标系值的正确操作（）。",
    options: {
      A: "修改值并保存",
      B: "修改后激活",
      C: "不允许保存和激活",
      D: "上述都不对"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 70,
    type: "single_choice",
    question: "采用（）建立的工具坐标系必须检验TCP和方向。",
    options: {
      A: "六点法",
      B: "四点法",
      C: "三点法",
      D: "上述都不对"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 71,
    type: "single_choice",
    question: "（）是把机器人腕部法兰盘所握工具的有效方向定为Z轴，把坐标定义在工具尖端点。",
    options: {
      A: "工件坐标系",
      B: "笛卡尔坐标系",
      C: "笛卡尔坐标系",
      D: "工具坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 72,
    type: "single_choice",
    question: "工具坐标系包含三部分内容，下列哪项不属于（）。",
    options: {
      A: "位置数据",
      B: "姿态数据",
      C: "重量信息",
      D: "角度信息"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 73,
    type: "single_choice",
    question: "（）是指工具尖端点在法兰盘坐标系下的坐标值。",
    options: {
      A: "位置数据",
      B: "姿态数据",
      C: "重量信息",
      D: "角度信息"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 74,
    type: "single_choice",
    question: "姿态数据是指表现机器人的法兰盘坐标与（）关系的角度数据。",
    options: {
      A: "工件坐标系",
      B: "笛卡尔坐标系",
      C: "关节坐标系",
      D: "工具坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 75,
    type: "single_choice",
    question: "（）为机器人每个轴相对原点位置的绝对精度。",
    options: {
      A: "工件坐标系",
      B: "笛卡尔坐标系",
      C: "关节坐标系",
      D: "工具坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 76,
    type: "single_choice",
    question: "下列哪个不属于机器人工具坐标系标定法（）。",
    options: {
      A: "六点法",
      B: "四点法",
      C: "三点法",
      D: "五点法"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 77,
    type: "single_choice",
    question: "用于六点法标定工具坐标系，其中第四点的方向必须（）。",
    options: {
      A: "平行于x轴",
      B: "平行于y轴",
      C: "垂直于y轴",
      D: "垂直于xoy面"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 78,
    type: "single_choice",
    question: "任务中要求在一个带有坡度的平面上进行搬运，此时需要建立（）。",
    options: {
      A: "工具坐标系",
      B: "用户坐标系",
      C: "笛卡尔坐标系",
      D: "直角坐标系"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 79,
    type: "single_choice",
    question: "六点法标定中的第一个、第二个点和第三个点的方向必须（）。",
    options: {
      A: "一样",
      B: "完全不一样",
      C: "相似",
      D: "两个相同"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 80,
    type: "single_choice",
    question: "用户坐标系标定方法包括（）。",
    options: {
      A: "有原点",
      B: "无原点",
      C: "有原点和无原点",
      D: "零点"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 81,
    type: "single_choice",
    question: "四点法标定中的第一个、第二个点和第三个点的方向必须（）。",
    options: {
      A: "一样",
      B: "完全不一样",
      C: "相似",
      D: "两个相同"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 82,
    type: "single_choice",
    question: "博诺BN-R3机器人在完成六点标定后，在示教器上按（）可以进行验证是否标定成功。",
    options: {
      A: "1、2、3轴",
      B: "4、5、6轴",
      C: "1轴",
      D: "6轴"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 83,
    type: "single_choice",
    question: "标定工具坐标系时，首先应移动机器人将（）对准参考尖点。",
    options: {
      A: "工具中点",
      B: "工具末端",
      C: "第六关节末端",
      D: "工具任意位置"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 84,
    type: "single_choice",
    question: "标定工具坐标系时，每一个记录点的机器人姿态变化尽量（）。",
    options: {
      A: "保持不变",
      B: "小一点",
      C: "大一点",
      D: "不同于上一点"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 85,
    type: "single_choice",
    question: "标定工具坐标系的X或Z方向时，机器人应（）。",
    options: {
      A: "保持不变",
      B: "靠近参考尖点",
      C: "远离参考尖点",
      D: "以上都不对"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 86,
    type: "single_choice",
    question: "标定工具坐标系的（）时，机器人应远离参考尖点。",
    options: {
      A: "X或Z方向",
      B: "Z或Y方向",
      C: "X或Y方向",
      D: "以上都不对"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 87,
    type: "single_choice",
    question: "（）是机器人其它坐标系的参照基础，是机器人示教与编程时经常使用的坐标系之一，它的y原点位置没有硬性的规定，一般定义在机器人安装面与第一转动轴的交点处。",
    options: {
      A: "基坐标系",
      B: "大地坐标系",
      C: "关节坐标系",
      D: "工件坐标系"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 88,
    type: "single_choice",
    question: "（）的原点设置在机器人各关节中心点处，反映了该关节处每个轴相对该关节坐标系原点位置的绝对角度。",
    options: {
      A: "基坐标系",
      B: "大地坐标系",
      C: "关节坐标系",
      D: "工件坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 89,
    type: "single_choice",
    question: "（）是原点安装在机器人末端的工具中心点（TCP）处的坐标系，原点及方向都是随着末端位置与角度不断变化的。",
    options: {
      A: "基坐标系",
      B: "大地坐标系",
      C: "关节坐标系",
      D: "工具坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 90,
    type: "single_choice",
    question: "机器人中，用户需要自定义坐标系有两个：（）。",
    options: {
      A: "基坐标系和工具坐标系",
      B: "大地坐标系和工件坐标系",
      C: "工具坐标系和工件坐标系",
      D: "基坐标系和工件坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 91,
    type: "single_choice",
    question: "工具坐标系手动标定方法不包括（）。",
    options: {
      A: "原点法",
      B: "TCP法",
      C: "TCP&Z法",
      D: "TCP&Z.X法"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 92,
    type: "single_choice",
    question: "用户坐标系定义在工件上，在机器人动作允许范围内的（）上。",
    options: {
      A: "指定一点",
      B: "任意位置",
      C: "两个点",
      D: "三个点"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 93,
    type: "single_choice",
    question: "用户坐标系只需要用（）进行标定。",
    options: {
      A: "三点法",
      B: "四点法",
      C: "五点法",
      D: "六点法"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 94,
    type: "single_choice",
    question: "用户坐标系标定在点的选取上方法包括（）。",
    options: {
      A: "三点法",
      B: "四点法",
      C: "五点法",
      D: "有原点法"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 95,
    type: "single_choice",
    question: "（）实际是通过基础坐标系将轴向偏转角度变化而来。",
    options: {
      A: "用户坐标系",
      B: "笛卡尔坐标系",
      C: "关节坐标系",
      D: "工具坐标系"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 96,
    type: "single_choice",
    question: "有多个夹具台时，设定（）可使手动操作更为简单。",
    options: {
      A: "用户坐标系",
      B: "笛卡尔坐标系",
      C: "关节坐标系",
      D: "工具坐标系"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 97,
    type: "single_choice",
    question: "使用工业机器人用户坐标系运动机器人前，先要选择当前使用的（）。",
    options: {
      A: "用户坐标系",
      B: "笛卡尔坐标系",
      C: "关节坐标系",
      D: "工具坐标系"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 98,
    type: "single_choice",
    question: "用户坐标系标定首先标定（）。",
    options: {
      A: "原点",
      B: "X轴",
      C: "Y轴",
      D: "Z轴"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 99,
    type: "single_choice",
    question: "工业机器人用户坐标系的方向（）。",
    options: {
      A: "X轴正方向",
      B: "Y轴正方向",
      C: "根据需要任意定义",
      D: "Z轴正方向"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 100,
    type: "single_choice",
    question: "（）可用于表示固定装置、工作台等设备。",
    options: {
      A: "笛卡尔坐标系",
      B: "关节坐标系",
      C: "工具坐标系",
      D: "用户坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 101,
    type: "single_choice",
    question: "工件坐标系未标定前默认与（）重合。",
    options: {
      A: "大地坐标系",
      B: "关节坐标系",
      C: "机器人基坐标",
      D: "工具坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 102,
    type: "single_choice",
    question: "重定位工作站的工件时，只需要改变（）的位置，所有的工作路径将随之同步更新。",
    options: {
      A: "用户坐标系",
      B: "工件坐标系",
      C: "关节坐标系",
      D: "工具坐标系"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 103,
    type: "single_choice",
    question: "三菱RV系列工业机器人中用户坐标系最多可以建立（）。",
    options: {
      A: "4个",
      B: "8个",
      C: "9个",
      D: "32个"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 104,
    type: "single_choice",
    question: "（）标定首先标定原点。",
    options: {
      A: "工件坐标系",
      B: "用户坐标系",
      C: "球坐标系",
      D: "大地坐标系"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 105,
    type: "single_choice",
    question: "（）标定中的第四点的方向必须垂直于xoy面。",
    options: {
      A: "六点法",
      B: "四点法",
      C: "三点法",
      D: "五点法"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 106,
    type: "single_choice",
    question: "博诺BN-R3机器人中用户坐标系最多可以建立（）。",
    options: {
      A: "4个",
      B: "7个",
      C: "16个",
      D: "32个"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 107,
    type: "single_choice",
    question: "博诺BN-R3机器人中的工具坐标系简称是（）。",
    options: {
      A: "WORLD",
      B: "ROBROOT",
      C: "BASE",
      D: "TOOL"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 108,
    type: "single_choice",
    question: "博诺BN-R3机器人在测量基座时，用户要为工作面或工件指定一个（）。",
    options: {
      A: "工件坐标系",
      B: "笛卡尔坐标系",
      C: "工具坐标系",
      D: "基坐标系"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 109,
    type: "single_choice",
    question: "博诺BN-R3机器人“wobj”是代表（）。",
    options: {
      A: "世界坐标系",
      B: "基坐标系",
      C: "用户坐标系",
      D: "工具坐标系"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 110,
    type: "single_choice",
    question: "在机器人坐标系的判定中，我们用拇指指向（）。",
    options: {
      A: "X轴",
      B: "Y轴",
      C: "Z轴",
      D: "都可以"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 111,
    type: "single_choice",
    question: "在机器人坐标系的判定中，我们用食指指向（）",
    options: {
      A: "X轴",
      B: "Y轴",
      C: "Z轴",
      D: "都可以"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 112,
    type: "single_choice",
    question: "在机器人坐标系的判定中，我们用中指指向（）",
    options: {
      A: "X轴",
      B: "Y轴",
      C: "Z轴",
      D: "都可以"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 113,
    type: "single_choice",
    question: "J1、J2、J3为（），机器人手腕的位置主要由这三个关节决定，称之为位置机构。",
    options: {
      A: "定位关节",
      B: "定向关节",
      C: "定姿关节",
      D: "定态关节"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 114,
    type: "single_choice",
    question: "J4、J5、J6为（），主要用于改变手腕姿态，称之为姿态机构。",
    options: {
      A: "定位关节",
      B: "定向关节",
      C: "定姿关节",
      D: "定态关节"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 115,
    type: "single_choice",
    question: "当工业机器人末端执行器被更换，需要重新定义（）后，可以不更改程序直接运行。",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "基坐标系",
      D: "大地坐标系"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 116,
    type: "single_choice",
    question: "建立（），可以避免对重复的轨迹进行示教编程。",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "基坐标系",
      D: "大地坐标系"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 117,
    type: "single_choice",
    question: "当工业机器人在进行单轴运动，需将坐标系切换为（）。",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "基角坐标系",
      D: "关节坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 118,
    type: "single_choice",
    question: "当工业机器人仅需要4轴旋转运动，需将坐标系切换为（）。",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "基角坐标系",
      D: "关节坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 119,
    type: "single_choice",
    question: "当工业机器人以最短距离从A点运到到B点，需将坐标系切换为（）。",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "基角坐标系",
      D: "关节坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 120,
    type: "single_choice",
    question: "当工业机器人在进行线性运动，需将坐标系切换为（）。",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "基角坐标系",
      D: "关节坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 121,
    type: "single_choice",
    question: "在启动工业机器人过程中，正确的启动顺序为（）。",
    options: {
      A: "启动伺服一松开急停按钮一按下三段开关",
      B: "松开急停按钮一启动伺服一按下三段开关",
      C: "按下三段开关一松开急停按钮一启动伺服",
      D: "启动伺服一按下三段开关一松开急停按钮"
    },
    answer: "A",
    category: "安全与维护"
  },
  {
    id: 122,
    type: "single_choice",
    question: "需要让工业机器人停止运行，正确的停止操作顺序为（）。",
    options: {
      A: "关闭伺服一按下急停按钮一松开三段开关",
      B: "按下急停按钮一关闭伺服一松开三段开关",
      C: "松开三段开关一按下急停按钮一关闭伺服",
      D: "关闭伺服一松开三段开关一按下急停按钮"
    },
    answer: "C",
    category: "安全与维护"
  },
  {
    id: 123,
    type: "single_choice",
    question: "工业机器人工作范围是指工业机器人（）或手腕中心所能到达的点的集合。",
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
    id: 124,
    type: "single_choice",
    question: "工业机器人一般需要（）个自由度才能使手部达到目标位置并处于期望的状态。",
    options: {
      A: "4",
      B: "5",
      C: "3",
      D: "6"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 125,
    type: "single_choice",
    question: "用工业机器人进行焊接过程中，对夹具的要求描述错误的是（）。",
    options: {
      A: "减少定位误差",
      B: "拆装方便",
      C: "回避和焊枪的干涉",
      D: "工件的固定和定位自动化"
    },
    answer: "D",
    category: "应用技术"
  },
  {
    id: 126,
    type: "single_choice",
    question: "机器人在手动运行模式下运行程序，需要按下示教器面板上的（）启动程序。",
    options: {
      A: "绿色三角按钮",
      B: "红色三角按钮",
      C: "PWM按键",
      D: "F1按键"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 127,
    type: "single_choice",
    question: "机器人在手动运行模式下运行程序，需要按下示教器面板上的（）中止程序。",
    options: {
      A: "绿色三角按钮",
      B: "红色三角按钮",
      C: "PWM按键",
      D: "F1按键"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 128,
    type: "single_choice",
    question: "当操作工业机器人作业即将发生危险时，应该立即（）。",
    options: {
      A: "断电",
      B: "按下急停",
      C: "立刻逃跑",
      D: "立刻喊人帮忙处理"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 129,
    type: "single_choice",
    question: "如需要手动控制机器人时，应确保机器人动作范围内无任何人员或障碍物，将速度（），避免速度突变造成伤害或损失。",
    options: {
      A: "由快到慢逐渐调整",
      B: "保持最慢速",
      C: "保持恒定速度",
      D: "由慢到快逐渐调整"
    },
    answer: "D",
    category: "安全与维护"
  },
  {
    id: 130,
    type: "single_choice",
    question: "因故离开工业机器人工作区域前应（），避免突然断电或者关机零位丢失，并将示教器放置在安全位置。",
    options: {
      A: "松开三段开关",
      B: "按下急停开关",
      C: "关闭伺服",
      D: "关闭示教器"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 131,
    type: "single_choice",
    question: "当机器人由低速动作突然变成高速动作，应当（）。",
    options: {
      A: "松开三段开关",
      B: "按下急停开关",
      C: "关闭伺服",
      D: "关闭示教器"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 132,
    type: "single_choice",
    question: "机器人示教编程后验证新程序，在机器人运行的过程中要将手放置在（）开关上，以防发生事故。",
    options: {
      A: "电源",
      B: "急停",
      C: "PWM开关",
      D: "关机"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 133,
    type: "single_choice",
    question: "（）是属于主令控制电器的一种，当机器处于危险状态时，通过急停开关切断电源，停止设备运转，达到保护人身和设备的安全。",
    options: {
      A: "三段开关",
      B: "急停开关",
      C: "伺服开关",
      D: "电源开关"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 134,
    type: "single_choice",
    question: "（）通常为手动控制的按压式开关(按键为红色)，串联接入设备的控制电路，用于紧急情况下直接断开控制电路电源从而快速停止设备避免非正常工作。",
    options: {
      A: "三段开关",
      B: "急停开关",
      C: "伺服开关",
      D: "电源开关"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 135,
    type: "single_choice",
    question: "（）一般形式是按下锁住旋转释放红色蘑菇头按钮开关或圆形按钮开关，也有的急停开关为了方便操作而加装LED灯的。",
    options: {
      A: "三段开关",
      B: "急停开关",
      C: "伺服开关",
      D: "电源开关"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 136,
    type: "single_choice",
    question: "（）的作用和特点是当发生紧急情况的时候人们可以通过快速按下此按钮来达到保护。",
    options: {
      A: "三段开关",
      B: "急停开关",
      C: "伺服开关",
      D: "电源开关"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 137,
    type: "single_choice",
    question: "真空吸盘要求工作表面（），干燥清洁，同时气密性好。",
    options: {
      A: "粗糙",
      B: "凹凸不平",
      C: "平缓突起",
      D: "平整光滑"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 138,
    type: "single_choice",
    question: "手爪的主要功能是抓住工件.握持工件和（）工件。",
    options: {
      A: "固定",
      B: "定位",
      C: "释放",
      D: "触摸"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 139,
    type: "single_choice",
    question: "焊接机器人的焊接作业主要包括（）",
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
    id: 140,
    type: "single_choice",
    question: "机械手按照坐标型式分为直角坐标式机械手、（）、极坐标式机械手和多关节式机械手。",
    options: {
      A: "直角坐标机械手",
      B: "机器人坐标机械手",
      C: "圆柱坐标式机械手",
      D: "工具坐标式机械手"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 141,
    type: "single_choice",
    question: "工业机器人的手部也称末端执行器，由（）和手指三部分组成，是一个独立的部件。",
    options: {
      A: "驱动机构、执行机构",
      B: "传动机构、执行机构",
      C: "驱动机构、传动机构",
      D: "传动机构、动力机构"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 142,
    type: "single_choice",
    question: "机械式夹持器按照夹取东西的方式不同，分为（）两种。",
    options: {
      A: "内夹式夹持器和外撑式夹持器",
      B: "内撑式夹持器和外夹式夹持器",
      C: "内夹式夹持器和外夹式夹持器",
      D: "内撑式夹持器和外撑式夹持器"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 143,
    type: "single_choice",
    question: "气吸式执行器又可分为（）三类。",
    options: {
      A: "真空气吸、喷气式负压气吸、吸气式负压气吸",
      B: "真空气吸、吸气式负压气吸、挤压排气负压气吸",
      C: "喷气式负压气吸、吸气式负压气吸、挤压排气负压气吸",
      D: "真空气吸、喷气式负压气吸、挤压排气负压气吸"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 144,
    type: "single_choice",
    question: "常见机器人手部分为（）三类。",
    options: {
      A: "机械式夹持器、吸附式执行器、专用工具",
      B: "电磁式夹持器、吸附式执行器、通用工具",
      C: "通用工具、吸附工具、专用工具",
      D: "磁吸式执行器、气吸式执行器、专用工具"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 145,
    type: "single_choice",
    question: "手动操作机器人需要在XOY平面微动调节，通常选择（）方式操作机器人。",
    options: {
      A: "单轴运动",
      B: "线性运动",
      C: "重定位运动",
      D: "都选"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 146,
    type: "single_choice",
    question: "机器人的（）是指单关节速度。",
    options: {
      A: "工作速度",
      B: "运动速度",
      C: "最大运动速度",
      D: "最小运动速度"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 147,
    type: "single_choice",
    question: "用来表征机器人重复定位其手部于同一目标位置的能力的参数是（）。",
    options: {
      A: "定位精度",
      B: "速度",
      C: "工作范围",
      D: "重复定位精度"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 148,
    type: "single_choice",
    question: "常用的手臂回转运动机构不包括以下哪种（）。",
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
    id: 149,
    type: "single_choice",
    question: "在用机器人进行弧焊作业中，对夹具的要求描述错误的是（）。",
    options: {
      A: "减少定位误差",
      B: "装拆方便",
      C: "工件的固定和定位自动化",
      D: "回避与焊枪的干涉"
    },
    answer: "C",
    category: "应用技术"
  },
  {
    id: 150,
    type: "single_choice",
    question: "在码垛过程中，工业机器人末端执行器吸盘不是垂直向下，通常选择（）方式操作机器人使末端执行器水平。",
    options: {
      A: "单轴运动",
      B: "线性运动",
      C: "重定位运动",
      D: "都选"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 151,
    type: "single_choice",
    question: "当工业机器人在进行（）运动，需将坐标系切换为关节坐标系。",
    options: {
      A: "两轴",
      B: "多轴",
      C: "单轴",
      D: "三轴"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 152,
    type: "single_choice",
    question: "当工业机器人在进行（）运动，需将坐标系切换为机器人坐标系。",
    options: {
      A: "四轴",
      B: "单轴",
      C: "三轴",
      D: "线性"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 153,
    type: "single_choice",
    question: "博诺BN-R3工业机器人手动操作机器人运动有（）运动方式。",
    options: {
      A: "单轴运动",
      B: "线性运动",
      C: "重定位运动",
      D: "都选"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 154,
    type: "single_choice",
    question: "在手动加载工业机器人程序的过程中，一定要将机器人运行模式设为（）。",
    options: {
      A: "手动模式",
      B: "自动模式",
      C: "远程模式",
      D: "以上三种模式都行"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 155,
    type: "single_choice",
    question: "选中相应的工业机器人程序，点击重命名按钮，可以将程序名字改为（）的组合。",
    options: {
      A: "字符和数字",
      B: "字母和数字",
      C: "字符和汉字",
      D: "字母和汉字"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 156,
    type: "single_choice",
    question: "工业机器人的程序文件都存储在（）。",
    options: {
      A: "控制器",
      B: "示教器",
      C: "U盘",
      D: "伺服驱动器"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 157,
    type: "single_choice",
    question: "程序指针用于显示当前程序运行位置及状态，当程序指针变为绿色箭头，表示当前运行（）。",
    options: {
      A: "处于预备状态",
      B: "处于激活状态",
      C: "有错误",
      D: "有运动"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 158,
    type: "single_choice",
    question: "程序指针用于显示当前程序运行位置及状态，当程序指针变为红色箭头，表示当前运行（）。",
    options: {
      A: "处于预备状态",
      B: "处于激活状态",
      C: "有错误",
      D: "有运动"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 159,
    type: "single_choice",
    question: "程序指针用于显示当前程序运行位置及状态，当程序指针变为灰色箭头，表示当前运行（）。",
    options: {
      A: "处于预备状态",
      B: "处于激活状态",
      C: "当前没有任何操作",
      D: "有运动"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 160,
    type: "single_choice",
    question: "程序指针用于显示当前程序运行位置及状态，当程序指针变为单独的感叹号，表示当前运行（）。",
    options: {
      A: "处于预备状态",
      B: "处于激活状态",
      C: "有错误",
      D: "有运动"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 161,
    type: "single_choice",
    question: "选中相应的工业机器人程序，点击（），可以将程序名字改为字符和数字的组合。",
    options: {
      A: "命名按钮",
      B: "重命名按钮",
      C: "新建按钮",
      D: "程序"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 162,
    type: "single_choice",
    question: "程序指针用于显示当前程序运行位置及状态，当程序指针变为（）箭头，表示当前运行当前没有任何操作。",
    options: {
      A: "灰色",
      B: "蓝色",
      C: "绿色",
      D: "红色"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 163,
    type: "single_choice",
    question: "工业机器人的（）都存储在控制器。",
    options: {
      A: "程序",
      B: "文件",
      C: "程序文件",
      D: "主程序"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 164,
    type: "single_choice",
    question: "程序指针用于显示当前程序运行位置及状态，当程序指针变为单个黄色机器人，表示当前行（）。",
    options: {
      A: "处于预备状态",
      B: "处于激活状态",
      C: "当前没有任何操作",
      D: "有运动"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 165,
    type: "single_choice",
    question: "工业机器人程序循环方式有（）。",
    options: {
      A: "单次运行",
      B: "连续运行",
      C: "单步跳过",
      D: "都选"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 166,
    type: "single_choice",
    question: "工业机器人手腕的运动中，通常把手腕的翻转，用（）表示。",
    options: {
      A: "B",
      B: "Y",
      C: "R",
      D: "P"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 167,
    type: "single_choice",
    question: "工业机器人手腕的运动中，通常把手腕的俯仰，用（）表示。",
    options: {
      A: "B",
      B: "Y",
      C: "R",
      D: "P"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 168,
    type: "single_choice",
    question: "工业机器人手腕的运动中，通常把手腕的偏转，用（）表示。",
    options: {
      A: "B",
      B: "Y",
      C: "R",
      D: "P"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 169,
    type: "single_choice",
    question: "机器人编程过程中，（）是直接指定操作内容，机器人必须一边思考一边工作言。",
    options: {
      A: "任务级语言",
      B: "对象级语言",
      C: "动作级语言",
      D: "操作级语言"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 170,
    type: "single_choice",
    question: "工业机器人初次示教编程后，通常采用（）进行测试程序。",
    options: {
      A: "单步运行",
      B: "连续运行",
      C: "单步跳过",
      D: "间断运行"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 171,
    type: "single_choice",
    question: "工业机器人程序在测试稳定后，可以采用（）进行程序运行。",
    options: {
      A: "单步运行",
      B: "连续运行",
      C: "单步跳过",
      D: "间断运行"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 172,
    type: "single_choice",
    question: "工业机器人修改程序后，需要采用（）进行验证程序。",
    options: {
      A: "单步运行",
      B: "连续运行",
      C: "单步跳过",
      D: "间断运行"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 173,
    type: "single_choice",
    question: "（）是通过按压示教器面板右侧的点动按键“-”和“+”使机器人运动，点动操作分为和增量点动两种方式。",
    options: {
      A: "短动操作",
      B: "长动操作",
      C: "点动操作",
      D: "微动操作"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 174,
    type: "single_choice",
    question: "程序指针用于显示当前程序运行位置及状态，当程序指针变为单独的（），表示当前运行有错误。",
    options: {
      A: "问号",
      B: "感叹号",
      C: "逗号",
      D: "句号"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 175,
    type: "single_choice",
    question: "博诺BN-R3工业机器人，在自动运行程序时，选择（）模式，程序每执行一行结束都将停下，当执行到子程序时不会进入子程序的界面。",
    options: {
      A: "单次运行",
      B: "连续运行",
      C: "单步跳过",
      D: "间断运行"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 176,
    type: "single_choice",
    question: "博诺BN-R3工业机器人，在自动运行程序时，选择（）模式，程序每执行一行结束都将停下，当执行到子程序时会进入子程序的界面。",
    options: {
      A: "单次运行",
      B: "连续运行",
      C: "单步跳过",
      D: "间断运行"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 177,
    type: "single_choice",
    question: "博诺BN-R3工业机器人，在自动运行程序时，共有（）种程序运行模式。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 178,
    type: "single_choice",
    question: "点位控制方式（PTP）的主要技术指标是（）。",
    options: {
      A: "定位精度和运动时间",
      B: "定位精度和运动速度",
      C: "运动速度和运动时间",
      D: "位姿轨迹和运动速度"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 179,
    type: "single_choice",
    question: "连续轨迹控制方式（CP）的主要技术指标是（）。",
    options: {
      A: "定位精度和运动时间",
      B: "位姿轨迹跟踪精度和平稳性",
      C: "位姿轨迹和平稳性",
      D: "位姿轨迹跟踪精度和运动时间"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 180,
    type: "single_choice",
    question: "在程序中需要新建一个包含三个位置和三个旋转姿态的信息的变量，该变量类型为（）。",
    options: {
      A: "POINTC",
      B: "POINTJ",
      C: "BOOL",
      D: "DINT"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 181,
    type: "single_choice",
    question: "在程序中需要新建一个用于表示0和1两种状态的变量，该变量类型为（）。",
    options: {
      A: "POINTC",
      B: "POINTJ",
      C: "BOOL",
      D: "DINT"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 182,
    type: "single_choice",
    question: "在程序中需要新建一个包含轴组中各个关节的数值的变量，该变量类型为（）。",
    options: {
      A: "POINTC",
      B: "POINTJ",
      C: "BOOL",
      D: "DINT"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 183,
    type: "single_choice",
    question: "点动操作是通过按压示教器面板右侧的点动按键“-”。“+”使机器人运动，点动操作分为连续点动和（）两种方式。",
    options: {
      A: "离散点动",
      B: "增量点动",
      C: "半增量点动",
      D: "全增量点动"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 184,
    type: "single_choice",
    question: "工业机器人在进行点动增量式运动，不需要设置的（）。",
    options: {
      A: "坐标系",
      B: "步长",
      C: "运动速率",
      D: "运动方向"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 185,
    type: "single_choice",
    question: "在关节坐标系中，工业机器人各关节坐标系中的数值即为关节正负方向（）。",
    options: {
      A: "转动的角度值",
      B: "转动的速度值",
      C: "移动的速度值",
      D: "移动的位置"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 186,
    type: "single_choice",
    question: "将工业机器人坐标系切换到（），通过点动操作将六轴顺时针旋转  $60^{\\circ}$  。",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "笛卡尔坐标系",
      D: "关节坐标系"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 187,
    type: "single_choice",
    question: "当工业机器人坐标系切换到（），通过点动操作不能实现X、Y和Z三个方向移动。",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "关节坐标系",
      D: "笛卡尔坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 188,
    type: "single_choice",
    question: "当工业机器人坐标系切换到（），通过点动操作不能实现A、B和C三个方向旋转运动。",
    options: {
      A: "工具坐标系",
      B: "工件坐标系",
      C: "关节坐标系",
      D: "笛卡尔坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 189,
    type: "single_choice",
    question: "在工业机器人程序中新建一个变量，需要设置该变量的（）。",
    options: {
      A: "数据类型",
      B: "变量的存储类型",
      C: "变量的作用域",
      D: "选"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 190,
    type: "single_choice",
    question: "工业机器人的位姿是由（）构成。",
    options: {
      A: "位置与速度",
      B: "姿态与位置",
      C: "位置与运动状态",
      D: "姿态与速度"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 191,
    type: "single_choice",
    question: "工业机器人在自动运行过程中，程序运行整体速度为v500，为了将部分程序语句速度降低，可以将速度设置为（）。",
    options: {
      A: "v100",
      B: "v400",
      C: "v300",
      D: "都行"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 192,
    type: "single_choice",
    question: "工业机器人在自动运行过程中容易与实训台设备发生碰撞，下面哪种（）方式不能避免与实训台设备发生碰撞。",
    options: {
      A: "增加运动点",
      B: "修改运动点姿态",
      C: "修改运动点位置",
      D: "降低运行速度"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 193,
    type: "single_choice",
    question: "试运行是指在（）示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时，以示教最高速度来限制运行。",
    options: {
      A: "不改变",
      B: "改变",
      C: "随便",
      D: "任何时候改变"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 194,
    type: "single_choice",
    question: "手部的位姿是由（）构成的。",
    options: {
      A: "姿态与速度",
      B: "位置与动作姿态",
      C: "位置与速度",
      D: "姿态与位置"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 195,
    type: "single_choice",
    question: "工业机器人的位姿是由（）构成。",
    options: {
      A: "位置与速度",
      B: "姿态与位置",
      C: "位置与运动状态",
      D: "姿态与速度"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 196,
    type: "single_choice",
    question: "（）的主要技术指标是位姿轨迹跟踪精度和平稳性。",
    options: {
      A: "轨迹控制方式",
      B: "断续",
      C: "位姿轨迹和平稳性",
      D: "连续轨迹控制方式"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 197,
    type: "single_choice",
    question: "博诺BN-R3工业机器人坐标系切换顺序依次为（）。",
    options: {
      A: "关节坐标系->笛卡尔坐标系->工具坐标系->用户坐标系",
      B: "笛卡尔坐标系->关节坐标系->工具坐标系->用户坐标系",
      C: "关节坐标系->工具坐标系笛->卡尔坐标系->用户坐标系",
      D: "关节坐标系->用户坐标系->工具坐标系->笛卡尔坐标系"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 198,
    type: "single_choice",
    question: "在博诺BN-R3工业机器人程序中新建一个（）变量，该变量可以在RPL程序中赋值，当RPL程序重新启动时它的值就会丢失。",
    options: {
      A: "CONST",
      B: "RETAIN",
      C: "AR",
      D: "DINT"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 199,
    type: "single_choice",
    question: "在博诺BN-R3工业机器人程序中新建一个（）变量，该变量不能在RPL程序中赋值，必须使用初始值来赋值。",
    options: {
      A: "CONST",
      B: "RETAIN",
      C: "VAR",
      D: "DINT"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 200,
    type: "single_choice",
    question: "在博诺BN-R3工业机器人程序中新建一个（）变量，当RPL程序从内存中卸载时，变量的值将被保留。",
    options: {
      A: "CONST",
      B: "RETAIN",
      C: "VAR",
      D: "DINT"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 201,
    type: "single_choice",
    question: "博诺BN-R3机器人运行方式有（）。",
    options: {
      A: "手动低速",
      B: "手动全速",
      C: "自动",
      D: "都选"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 202,
    type: "single_choice",
    question: "机器人的精度主要依存于机械误差.控制算法误差与分辨率系统误差。一般说来（）。",
    options: {
      A: "绝对定位精度高于重复定位精度",
      B: "重复定位精度高于绝对定位精度",
      C: "机械精度高于控制精度",
      D: "控制精度高于分辨率精度"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 203,
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
    id: 204,
    type: "single_choice",
    question: "对工业机器人进行系统备份，备份数据不包括哪个内容（）。",
    options: {
      A: "所有存储在home目录下的文件和文件夹",
      B: "机器人类型",
      C: "系统参数",
      D: "系统信息"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 205,
    type: "single_choice",
    question: "为了防止操作人员对机器人系统文件误删，通常在进行机器人操作（）备份机器人系统。",
    options: {
      A: "过程中",
      B: "任何时候",
      C: "前",
      D: "后"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 206,
    type: "single_choice",
    question: "对工业机器人进行系统备份，备份数据不包括哪些内容（）。",
    options: {
      A: "IP",
      B: "机器人类型",
      C: "轴参数",
      D: "DH杆长参数"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 207,
    type: "single_choice",
    question: "当机器人系统遇到无法重启或重新安装新系统时，可以通过（）机器人系统的备份文件解决。",
    options: {
      A: "备份",
      B: "恢复",
      C: "更新",
      D: "不用做任何事情"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 208,
    type: "single_choice",
    question: "为防止操作人员对机器人系统文件误删除，通常在进行机器人操作前（）机器人系统。",
    options: {
      A: "备份",
      B: "恢复",
      C: "更新",
      D: "不用做任何事情"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 209,
    type: "single_choice",
    question: "博诺BN-R3工业机器人C30提供多种权限等级账号，在（）权限下可以根据用户要求对工业机器人系统程序的参数进行备份。",
    options: {
      A: "操作员",
      B: "工程师",
      C: "管理员",
      D: "运维员"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 210,
    type: "single_choice",
    question: "通常情况下，在工业机器人系统恢复过程中只允许载入具有相应软件版本的文档。如果载入其它文档，则可能出现以下后果（）。\n $①$  故障信息；  $(2)$  机器人控制器无法运行；  $(3)$  人员受伤以及财产损失",
    options: {
      A: "$①②③$",
      B: "①③",
      C: "②③",
      D: "①②"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 211,
    type: "single_choice",
    question: "博诺BN-R3工业机器人C30提供多种权限等级账号，在（）权限下可以根\n据用户要求对工业机器人系统程序的参数进行恢复。",
    options: {
      A: "操作员",
      B: "工程师",
      C: "管理员",
      D: "运维员"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 212,
    type: "single_choice",
    question: "安川工业机器人备份正确操作步骤为（）。\n $①$  在【外部储存】中选择【文件夹】；  $(2)$  在【文件夹】显示画面中按屏幕左上角的【数据】——选择【创建文件夹】；  $(3)$  在【装置】显示画面中选择要备份在的装置U盘/CF卡；  $(4)$  进入主菜单，按下一页，按【外部储存】——选择【装置】",
    options: {
      A: "④③①②",
      B: "①③②④",
      C: "①④②③",
      D: "③④①②"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 213,
    type: "single_choice",
    question: "博诺BN-R3工业机器人提供多种权限等级账号，在（）权限下可以进行工业机器人程序文件的导入。",
    options: {
      A: "操作员",
      B: "工程师",
      C: "管理员",
      D: "运维员"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 214,
    type: "single_choice",
    question: "博诺BN-R3工业机器人提供多种权限等级账号，在（）权限下可以进行工业机器人配置文件的导入。",
    options: {
      A: "操作员",
      B: "工程师",
      C: "运维员",
      D: "管理员"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 215,
    type: "single_choice",
    question: "博诺BN-R3工业机器人提供多种权限等级账号，在（）权限下可以进行工业机器人程序文件和配置文件的导出。",
    options: {
      A: "操作员",
      B: "工程师",
      C: "管理员",
      D: "运维员"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 216,
    type: "single_choice",
    question: "博诺BN-R3工业机器人程序存档位置可以是（）。\n $①$  示教器上的U盘；  $(2)$  控制器；  $(3)$  网络",
    options: {
      A: "①②③",
      B: "①③",
      C: "②③",
      D: "①②"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 217,
    type: "single_choice",
    question: "关于博诺BN-R3机器人示教器上的日志，说法错误的是（）。",
    options: {
      A: "工业机器人错误信息和状态记录在日志上",
      B: "日志上记录有工业机器人控制系统所有操作",
      C: "日志可以随时随地删除",
      D: "日志不能删除"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 218,
    type: "single_choice",
    question: "博诺BN-R3机器人程序中程序名是（）。",
    options: {
      A: "XPL",
      B: "END",
      C: "INT",
      D: "NOT"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 219,
    type: "single_choice",
    question: "博诺BN-R3机器人程序运行过程中主程序是（）。",
    options: {
      A: "DEF",
      B: "END",
      C: "MAIN.",
      D: "NOT"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 220,
    type: "single_choice",
    question: "博诺BN-R3机器人进行编程时用于调用的是（）。",
    options: {
      A: "DEF",
      B: "END",
      C: "INT",
      D: "CALL"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 221,
    type: "single_choice",
    question: "对工业机器人进行示教时，同时对速度、位置、操作顺序等进行示教方式是（）。",
    options: {
      A: "集中示教",
      B: "分离示教",
      C: "手把手示教",
      D: "示教器示教"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 222,
    type: "single_choice",
    question: "对工业机器人进行示教时，示教位置后，分别对速度、操作顺序等进行示教方式是（）。",
    options: {
      A: "集中示教",
      B: "分离示教",
      C: "手把手示教",
      D: "示教器示教"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 223,
    type: "single_choice",
    question: "工业机器人的编程方式有语言编程方式和（）。",
    options: {
      A: "自动编程方式",
      B: "示教编程方式",
      C: "模拟方式",
      D: "自动控制方式"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 224,
    type: "single_choice",
    question: "对机器人进行示教时，模式旋钮打到示教模式后，在此模式中，外部设备发出的启动信号（）。",
    options: {
      A: "无效",
      B: "有效",
      C: "延时后有效",
      D: "不确定"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 225,
    type: "single_choice",
    question: "示教-再现控制为一种在线编程方式，它的最大问题是（）。",
    options: {
      A: "操作人员劳动强度大",
      B: "占用生产时间",
      C: "操作人员安全问题",
      D: "容易产生废品"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 226,
    type: "single_choice",
    question: "示教编程器上的三段式安全开关，握紧为ON状态，松开为OFF状态，作为进而追加的功能，当握紧力过大时，为（）状态。",
    options: {
      A: "不变",
      B: "ON",
      C: "OFF",
      D: "不确定"
    },
    answer: "C",
    category: "安全与维护"
  },
  {
    id: 227,
    type: "single_choice",
    question: "示教编程器上安全开关握紧为ON，松开为OFF状态，作为进而追加的功能，当握紧力过大时，为（）状态。",
    options: {
      A: "不变",
      B: "ON",
      C: "OFF",
      D: "不确定"
    },
    answer: "C",
    category: "安全与维护"
  },
  {
    id: 228,
    type: "single_choice",
    question: "通常对机器人进行示教编程时，要求最初程序点与最终程序点的位置（），可提高工作效率。",
    options: {
      A: "相同",
      B: "不同",
      C: "无所谓",
      D: "分离越大越好"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 229,
    type: "single_choice",
    question: "下列（）不属于机器人编程语言的特点。",
    options: {
      A: "结构简明",
      B: "概念统一",
      C: "容易扩展",
      D: "语句复杂"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 230,
    type: "single_choice",
    question: "工业机器人主要编程方式不包括下面哪个阶段（）。",
    options: {
      A: "示教再现编程阶段",
      B: "离线编程阶段",
      C: "自主编程阶段",
      D: "手动编程阶段"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 231,
    type: "single_choice",
    question: "常见的示教再现编程方式为直接示教和（）。",
    options: {
      A: "示教器示教",
      B: "手动示教",
      C: "自动示教",
      D: "离线示教"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 232,
    type: "single_choice",
    question: "示教-再现控制的优点不包括（）。",
    options: {
      A: "只需要简单的装置和控制设备即可",
      B: "操作简便，易于掌握",
      C: "过程快，马上应用",
      D: "重复性差"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 233,
    type: "single_choice",
    question: "示教-再现控制为一种在线编程方式，它的最大问题是（）。",
    options: {
      A: "操作人员劳动强度大",
      B: "工作效率低、占用大量生产时间",
      C: "容易发生碰撞",
      D: "容易产生废品"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 234,
    type: "single_choice",
    question: "对机器人进行示教时，作为示教人员（）。",
    options: {
      A: "不需要事先接受过专门培训",
      B: "必须事先接受过专门的培训",
      C: "没有事先接受过专门的培训也可以",
      D: "靠估计、猜测示教器按键功能"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 235,
    type: "single_choice",
    question: "试运行是指在不改变示教模式的前提下执行模拟再现动作的功能，机器人动作速度超过示教最高速度时（）。",
    options: {
      A: "程序给定的速度运行",
      B: "示教最高速度来限制运行",
      C: "示教最低速度来运行",
      D: "机器人自由分配速度"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 236,
    type: "single_choice",
    question: "机器人经常使用的程序可以设置为主程序，每台机器人可以设置（）主程序。",
    options: {
      A: "1个",
      B: "2个",
      C: "5个",
      D: "自由设定"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 237,
    type: "single_choice",
    question: "示教器中以每一个关节运动为单元的坐标系为（）。",
    options: {
      A: "世界坐标系",
      B: "关节坐标系",
      C: "用户坐标系",
      D: "工具坐标系"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 238,
    type: "single_choice",
    question: "工作人员操作示教器在机器人工作区域范围内进行示教编程时，需要（）。",
    options: {
      A: "佩戴安全帽",
      B: "提高安全意识即可",
      C: "不用戴帽子",
      D: "盘起长发"
    },
    answer: "A",
    category: "安全与维护"
  },
  {
    id: 239,
    type: "single_choice",
    question: "工业机器人示教编程器的作用不包括（）。",
    options: {
      A: "点动机器人",
      B: "试运行程序",
      C: "离线编程",
      D: "查阅机器人状态"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 240,
    type: "single_choice",
    question: "工业机器人工具坐标系的标定方法不包含（）。",
    options: {
      A: "三点法",
      B: "六点法",
      C: "直接输入法",
      D: "十八点法"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 241,
    type: "single_choice",
    question: "在博诺 BN-R3 机器人进行示教编程时，常要对程序文件进行（）。",
    options: {
      A: "无动作",
      B: "删除",
      C: "保存",
      D: "备份"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 242,
    type: "single_choice",
    question: "在博诺 BN-R3 机器人示教器中进行不同目录间的文件复制、删除等操作需要点击（）。",
    options: {
      A: "更多",
      B: "复制",
      C: "删除",
      D: "粘贴"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 243,
    type: "single_choice",
    question: "在博诺 BN-R3 机器人程序文件中变量的存储类型不包括（）。",
    options: {
      A: "VAR",
      B: "CONST",
      C: "BOOL",
      D: "RETAIN"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 244,
    type: "single_choice",
    question: "博诺 BN-R3 机器人建立的程序模块始终放置在（）文件夹里。",
    options: {
      A: "AIR",
      B: "Program",
      C: "Main",
      D: "BIN"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 245,
    type: "single_choice",
    question: "机器人程序编辑方式与常见的文件系统类似，下面不属于机器人编辑方式的是（）。",
    options: {
      A: "复制",
      B: "删除",
      C: "改名",
      D: "撤回"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 246,
    type: "single_choice",
    question: "博诺 BN-R3 机器人编程中常用于机器人空间大范围运动的指令是（）。",
    options: {
      A: "关节运动指令",
      B: "直线运动指令",
      C: "圆弧运动指令",
      D: "绝对位置运动指令"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 247,
    type: "single_choice",
    question: "运动学主要是研究机器人的（）。",
    options: {
      A: "动力源是什么",
      B: "运动和时间的关系",
      C: "动力的传递与转换",
      D: "运动的应用"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 248,
    type: "single_choice",
    question: "动力学的研究内容是将机器人的（）联系起来。",
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
    id: 249,
    type: "single_choice",
    question: "下列机构不能实现机器人手臂回转的为（）。",
    options: {
      A: "齿轮传动机构",
      B: "链轮传动机构",
      C: "连杆机构",
      D: "齿轮齿条机构"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 250,
    type: "single_choice",
    question: "机器人运动时，每个关节的运动通过驱动装置和（）实现。",
    options: {
      A: "执行机构",
      B: "传动机构",
      C: "步进电机",
      D: "控制程序"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 251,
    type: "single_choice",
    question: "机器人的控制方式分为点位控制和（）。",
    options: {
      A: "点对点控制",
      B: "点到点控制",
      C: "连续轨迹控制",
      D: "任意位置控制"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 252,
    type: "single_choice",
    question: "所谓无姿态插补，即保持第一个示教点时的姿态，在大多数情况下是机器人沿（）运动时出现。",
    options: {
      A: "平面圆弧",
      B: "直线",
      C: "平面曲线",
      D: "空间曲线"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 253,
    type: "single_choice",
    question: "机器人行走轨迹是由示教点决定的，一段圆弧至少需要示教（）点。",
    options: {
      A: "2",
      B: "5",
      C: "4",
      D: "3"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 254,
    type: "single_choice",
    question: "作业路径通常用（）坐标系相对于工件坐标系的运动来描述。",
    options: {
      A: "手爪",
      B: "固定",
      C: "运动",
      D: "工具"
    },
    answer: "D",
    category: "坐标与运动学"
  },
  {
    id: 255,
    type: "single_choice",
    question: "工业机器人示教的内容不包括（）。",
    options: {
      A: "机器人运动轨迹的示教",
      B: "机器人重复定位的示教",
      C: "机器人作业条件的示教",
      D: "机器人作业顺序的示教"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 256,
    type: "single_choice",
    question: "机器人进行算术运算时用的寄存器指令不包括（）。",
    options: {
      A: "B寄存器",
      B: "R寄存器",
      C: "位置寄存器指令PR[i]",
      D: "位置寄存器轴指令PR[i,j]"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 257,
    type: "single_choice",
    question: "机器人进行条件运算指令不包括（）。",
    options: {
      A: "中断",
      B: "比较",
      C: "逻辑与",
      D: "逻辑或"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 258,
    type: "single_choice",
    question: "对于机器人的零点标定，有两个零点标定工具可用是（）。",
    options: {
      A: "千分表和零点标定组件",
      B: "量角器和直尺",
      C: "扭力扳手和张力测试仪",
      D: "高精度秒表和高精度量角器"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 259,
    type: "single_choice",
    question: "博诺BN-R3机器人中点到点的指令为（）。",
    options: {
      A: "MOVJ",
      B: "MOVL",
      C: "MOVC",
      D: "MOVS"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 260,
    type: "single_choice",
    question: "博诺BN-R3机器人延时指令的单位是（）。",
    options: {
      A: "秒",
      B: "毫秒",
      C: "分钟",
      D: "小时"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 261,
    type: "single_choice",
    question: "博诺BN-R3机器人示教程序的运行模式包括（）种。",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 262,
    type: "single_choice",
    question: "（）是机器人沿最快的轨道将TCP从起始点引至目标点。",
    options: {
      A: "点到点运动",
      B: "线性运动",
      C: "沿轨迹运动",
      D: "圆周运动"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 263,
    type: "single_choice",
    question: "博诺BN-R3机器人的编程语言中，抓取指令是（）。",
    options: {
      A: "SPTP",
      B: "SLIN",
      C: "SCIRC",
      D: "PICK"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 264,
    type: "single_choice",
    question: "博诺 BN-R3 机器人的编程语言中，标签指令为（）。",
    options: {
      A: "LABEL",
      B: "LIN",
      C: "CIRC",
      D: "SLIN"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 265,
    type: "single_choice",
    question: "博诺 BN-R3 机器人的编程语言中，关节运动指令为（）。",
    options: {
      A: "PTP",
      B: "LIN",
      C: "MJOINT",
      D: "SLIN"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 266,
    type: "single_choice",
    question: "博诺 BN-R3 机器人示教器中“AUTO”指令的意思是（）。",
    options: {
      A: "自动运行",
      B: "手动低速",
      C: "手动高速",
      D: "暂停"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 267,
    type: "single_choice",
    question: "博诺 BN-R3 机器人示教编程器“E-STOP”的含义为（）。",
    options: {
      A: "目标点被轨迹逼近",
      B: "目标删除",
      C: "停止",
      D: "继续"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 268,
    type: "single_choice",
    question: "博诺 BN-R3 机器人示教编程器上的 PWR 按键的作用为（）。",
    options: {
      A: "伺服上电",
      B: "调节机器人稳定性",
      C: "多余设置、没有作用",
      D: "装饰品"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 269,
    type: "single_choice",
    question: "当工业机器人（）被更换，需要重新定义工具坐标系后，可以不更改程序直接运行。",
    options: {
      A: "世界坐标系",
      B: "大地坐标系",
      C: "末端执行器",
      D: "基坐标系"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 270,
    type: "single_choice",
    question: "通过路径上容易超限的地方，然后在这个位置上往其他方向偏移多设置一个中间点，避开奇异位置，下列哪项不是机器人奇异点（）。",
    options: {
      A: "腕部中心位于1轴旋转中心线时",
      B: "腕部中心和2轴3轴一条线时",
      C: "4轴和6轴垂直时",
      D: "4轴和6轴平行时"
    },
    answer: "C",
    category: "坐标与运动学"
  },
  {
    id: 271,
    type: "single_choice",
    question: "为使机器人进行正确的直线插补、圆弧插补等插补动作，需正确地输入焊枪、抓手、焊钳等工具的尺寸信息，定义控制点的位置。工具校验是可以简单和正确的进行尺寸信息输入的功能。进行工具校验，需以控制点为基准示教4个不同的姿态。实践证明4个不同的姿态（）。",
    options: {
      A: "动作变化越大其工具控制点越精确",
      B: "动作变化越大其工具控制点越不精确",
      C: "动作变化越小其工具控制点越精确",
      D: "动作变化与其工具控制点无关"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 272,
    type: "single_choice",
    question: "对于有规律的轨迹，仅示教几个特征点，计算机就能利用（）获得中间点的坐标。",
    options: {
      A: "优化算法",
      B: "平滑算法",
      C: "预测算法",
      D: "插补算法"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 273,
    type: "single_choice",
    question: "点位控制下的轨迹规划是在（）进行的。",
    options: {
      A: "关节坐标空间",
      B: "矢量坐标空间",
      C: "直角坐标空间",
      D: "极坐标空间"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 274,
    type: "single_choice",
    question: "机器人轨迹控制过程需要通过求解（）获得各个关节角的位置控制系统的设计定值。",
    options: {
      A: "运动学正问题",
      B: "运动学逆问题",
      C: "动力学正问题",
      D: "动力学逆问题"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 275,
    type: "single_choice",
    question: "工业机器人常用的作业条件输入法不包括（）。",
    options: {
      A: "使用作业条件文件",
      B: "在作业指令中直接设定",
      C: "自动设定",
      D: "手动设定"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 276,
    type: "single_choice",
    question: "机器人示教时最常用的指令（）。",
    options: {
      A: "运动指令",
      B: "中断指令",
      C: "逻辑指令",
      D: "循环指令"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 277,
    type: "single_choice",
    question: "博诺BN-R3机器人点到点运动指令代码是（）。",
    options: {
      A: "MoveJ",
      B: "PTC",
      C: "MJOINT",
      D: "MOVJ"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 278,
    type: "single_choice",
    question: "博诺BN-R3机器人直线运动指令代码是（）。",
    options: {
      A: "MoveL",
      B: "MLIN",
      C: "CLIND",
      D: "MOVL"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 279,
    type: "single_choice",
    question: "博诺BN-R3机器人圆弧运动指令代码是（）。",
    options: {
      A: "MoveC",
      B: "MCIRC",
      C: "MOVC",
      D: "CIRC"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 280,
    type: "single_choice",
    question: "博诺BN-R3机器人建立的子程序类型包括（）种。",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 281,
    type: "single_choice",
    question: "博诺BN-R3机器人建立的一条圆弧指令需要几个点（）",
    options: {
      A: "1个",
      B: "2个",
      C: "5个",
      D: "18个"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 282,
    type: "single_choice",
    question: "博诺BN-R3机器人修改一条直线指令的最末点位置，可采用（）。",
    options: {
      A: "示教到该位置，修改记录位置参数",
      B: "删除程序文件，重头开始",
      C: "不用修改，依旧使用原来位置",
      D: "手动输入，目测数据"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 283,
    type: "single_choice",
    question: "当博诺BN-R3机器人示教器编程界面上面有一条完全相同的可以在当前编程处使用的指令时，最快的、最节省时间的操作是（）。",
    options: {
      A: "复制、粘贴相同的指令到此处",
      B: "重新写入一条指令",
      C: "复制、粘贴相似的指令，进行局部修改",
      D: "复制、粘贴相反的指令，进行局部修改"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 284,
    type: "single_choice",
    question: "博诺BN-R3机器人中断设置指令代码是（）。",
    options: {
      A: "INTRSET",
      B: "MOVLC",
      C: "J",
      D: "MOVJ"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 285,
    type: "single_choice",
    question: "博诺BN-R3机器人中断触发指令代码是（）。",
    options: {
      A: "MoveL",
      B: "L",
      C: "INTRENA",
      D: "MOVL"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 286,
    type: "single_choice",
    question: "博诺BN-R3机器人中断禁止指令代码是（）。",
    options: {
      A: "MoveC",
      B: "CCMOVC",
      C: "INTRDIS",
      D: "INVD"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 287,
    type: "single_choice",
    question: "博诺BN-R3机器人示教器编程界面上关于Module说法正确的是（）。",
    options: {
      A: "始终出现在程序开头，只有专业用户组可见",
      B: "可以自主设定可见或者隐藏",
      C: "它的出现与哪种用户没有关系",
      D: "没有实际作用"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 288,
    type: "single_choice",
    question: "关于博诺BN-R3机器人说法错误的是（）。",
    options: {
      A: "程序最后的“END”表示程序结束",
      B: "“INI”行包含程序正确运行所需的标准参数的调用",
      C: "“INI”行必须最先运行",
      D: "博诺BN-R3机器人示教器有多个伺服使能键"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 289,
    type: "single_choice",
    question: "机器人IO盒更换输出模块时，要在（）下进行。",
    options: {
      A: "输出开路状态下",
      B: "短路状态下",
      C: "断电状态下",
      D: "以上都是"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 290,
    type: "single_choice",
    question: "I/O指令用于（）。",
    options: {
      A: "数字信号的输入输出",
      B: "模拟信号的输入输出",
      C: "所有信号的输入输出",
      D: "ABC都不对"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 291,
    type: "single_choice",
    question: "传感器的基本转换电路是将敏感元件产生的易测量小信号进行变换，使传感器的信号输出符合具体工业系统的要求，一般为（）。",
    options: {
      A: "4\\~20mA.-5\\~5V",
      B: "0\\~20mA.0\\~5V",
      C: "-20mA\\~20mA.-5\\~5V",
      D: "-20mA\\~20mA.0\\~5V"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 292,
    type: "single_choice",
    question: "应用电容式传感器测量微米级的距离，应该采用改变（）的方式。",
    options: {
      A: "极间物质介电系数",
      B: "极板面积",
      C: "极板距离",
      D: "电压"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 293,
    type: "single_choice",
    question: "下面那种传感器不属于触觉传感器（）。",
    options: {
      A: "接近觉传感器",
      B: "接触觉传感器",
      C: "压觉传感器",
      D: "热敏电阻"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 294,
    type: "single_choice",
    question: "进行机器人搬运示教程序时会用到（）沿一条直线以定义的速度将TCP引至目标点。",
    options: {
      A: "点到点运动",
      B: "线性运动",
      C: "圆周运动",
      D: "样条运动"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 295,
    type: "single_choice",
    question: "日本日立公司研制的经验学习机器人装配系统采用触觉传感器来有效地反映装配情况，其触觉传感器属于下列（）传感器。",
    options: {
      A: "接触觉",
      B: "接近觉",
      C: "力觉",
      D: "压觉"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 296,
    type: "single_choice",
    question: "通过（）的巧妙控制，机器人即能抓取豆腐及鸡蛋等软物体，也能抓取易碎的物体。",
    options: {
      A: "接近觉",
      B: "接触觉",
      C: "滑觉",
      D: "压觉"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 297,
    type: "single_choice",
    question: "机器人对传感器的选择不包括（）。",
    options: {
      A: "尺寸和重量",
      B: "可插接性",
      C: "大小",
      D: "输出形式"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 298,
    type: "single_choice",
    question: "机器人上下料驱动方式通常包括机械式机械手、液压式机械手、气动式机械手和（）。",
    options: {
      A: "电动式机械手",
      B: "真空式机械手",
      C: "连杆式机械手",
      D: "旋转式机械手"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 299,
    type: "single_choice",
    question: "机器人机械手按照重量可分为微型机械手、小型机械手、中型机械手和（）。",
    options: {
      A: "大型机械手",
      B: "纳米型机械手",
      C: "超大型机械手",
      D: "超小型机械手"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 300,
    type: "single_choice",
    question: "气动三联件包括（）、减压阀、油雾器。",
    options: {
      A: "空气过滤器",
      B: "电磁阀",
      C: "换向阀",
      D: "传感器"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 301,
    type: "single_choice",
    question: "下面不属于接近传感器的是（）。",
    options: {
      A: "电感式传感器",
      B: "电容式传感器",
      C: "微动开关",
      D: "红外反射传感器"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 302,
    type: "single_choice",
    question: "力觉传感器按其所在位置不同分为关节力传感器、腕力传感器和（）。",
    options: {
      A: "支座传感器",
      B: "电阻式传感器",
      C: "压电元件传感器",
      D: "接近传感器"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 303,
    type: "single_choice",
    question: "位置传感器可分为直线位移传感器和（）。",
    options: {
      A: "曲位传感器",
      B: "直角传感器",
      C: "曲线传感器",
      D: "角位移传感器"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 304,
    type: "single_choice",
    question: "码垛手爪常见的三种形式分为托举、吸取和（）。",
    options: {
      A: "吸附",
      B: "拼接",
      C: "夹持",
      D: "夹紧"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 305,
    type: "single_choice",
    question: "为检测机器人内部状态下面哪种传感器不属于机器人内部常见传感器。",
    options: {
      A: "位移传感器",
      B: "速度传感器",
      C: "加速度传感器",
      D: "加加速度传感器"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 306,
    type: "single_choice",
    question: "下面哪部分不属于传感器里面的基本组成部分。（）",
    options: {
      A: "接近开关",
      B: "敏感元件",
      C: "转化元件",
      D: "基本转化电路"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 307,
    type: "single_choice",
    question: "机器人传感器基本参数包括（）、灵敏度、静态精度和动态精度。",
    options: {
      A: "量程",
      B: "温度",
      C: "尺寸",
      D: "安装方式"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 308,
    type: "single_choice",
    question: "传感器的灵敏度越大，传感器输出信号精度越高，线性程度（）。",
    options: {
      A: "越差",
      B: "越低",
      C: "越好",
      D: "越小"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 309,
    type: "single_choice",
    question: "（）是指传感器在整个测量范围内所能辨别的被测量的最小变化量。",
    options: {
      A: "灵敏度",
      B: "线性度",
      C: "重复性",
      D: "分辨性"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 310,
    type: "single_choice",
    question: "（）是传感器的动态特性指标。",
    options: {
      A: "响应时间",
      B: "抗干扰能力",
      C: "分别性",
      D: "精度"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 311,
    type: "single_choice",
    question: "按照测量信号结果可分为绝对式编码器和（）。",
    options: {
      A: "光电式编码器",
      B: "相对式编码器",
      C: "增量式编码器",
      D: "磁电式编码器"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 312,
    type: "single_choice",
    question: "测速发电机的输出信号为（）。",
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
    id: 313,
    type: "single_choice",
    question: "工业机器人外部I/O指令是为了控制什么（）。",
    options: {
      A: "工业机器人本体",
      B: "1轴",
      C: "5轴",
      D: "工业机器人周边设备"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 314,
    type: "single_choice",
    question: "工业机器人外部I/O指令通过（）的通讯设置来实现信号的交互。",
    options: {
      A: "PLC",
      B: "TCP",
      C: "WIFI",
      D: "机器人本体"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 315,
    type: "single_choice",
    question: "常用的IO信号处理，表示数字输入的是（）。",
    options: {
      A: "DI",
      B: "DO",
      C: "AI",
      D: "AOA"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 316,
    type: "single_choice",
    question: "常用的IO信号处理，表示模拟输入的是（）。",
    options: {
      A: "DI",
      B: "DO",
      C: "AI",
      D: "AO"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 317,
    type: "single_choice",
    question: "IO信号主要有什么（）。",
    options: {
      A: "数字量信号",
      B: "模拟量信号",
      C: "A和B",
      D: "电波信号"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 318,
    type: "single_choice",
    question: "数字量信号的特点是什么（）。",
    options: {
      A: "时间和数量上都是连续的",
      B: "有0和1两种状态",
      C: "用于物理点的断开和闭合",
      D: "B和C"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 319,
    type: "single_choice",
    question: "模拟量信号的特点是（）。",
    options: {
      A: "时间和数量上都是离散的",
      B: "有0和1两种状态",
      C: "用于标识压力、速度、流量等连续变化的量",
      D: "表示物理触点的断开和闭合"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 320,
    type: "single_choice",
    question: "电磁阀从原理上分为几大类，除了（）。",
    options: {
      A: "直动式",
      B: "分布直动式",
      C: "先导式",
      D: "接触式交流电磁阀"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 321,
    type: "single_choice",
    question: "三位电磁阀的功能不包含（）。",
    options: {
      A: "接通",
      B: "断开",
      C: "控制开度",
      D: "传输数据"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 322,
    type: "single_choice",
    question: "电磁阀由电磁力驱动，通过改变电磁阀内（）的位置来改变流通的通断状态。",
    options: {
      A: "阀芯",
      B: "动铁芯",
      C: "静铁芯",
      D: "弹簧"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 323,
    type: "single_choice",
    question: "由电磁力直接驱动阀芯运动改变流道通断和换向的方式为（）。",
    options: {
      A: "直动式",
      B: "被动式",
      C: "分布直动式",
      D: "间接直动式"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 324,
    type: "single_choice",
    question: "设备的皮带运输模块，在检测是否有物料通过时，用的传感器为（）。",
    options: {
      A: "光电传感器",
      B: "压力传感器",
      C: "温度传感器",
      D: "角度传感器"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 325,
    type: "single_choice",
    question: "设备的井式供料推出物料的动力为（）。",
    options: {
      A: "电力",
      B: "气动",
      C: "电磁力",
      D: "惯性力"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 326,
    type: "single_choice",
    question: "电磁阀的构成不包括（）。",
    options: {
      A: "定铁芯",
      B: "动铁芯",
      C: "线圈",
      D: "末端执行器"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 327,
    type: "single_choice",
    question: "电磁阀通电不工作的原因常有（）。",
    options: {
      A: "无电压",
      B: "线圈电阻短路或断路",
      C: "压降过大",
      D: "ABC"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 328,
    type: "single_choice",
    question: "博诺BN-R3机器人编程io设置中iooutput[15]=true的意思为（）",
    options: {
      A: "15io口输入为真",
      B: "15io口输入为假",
      C: "15io口输出为真",
      D: "15io口输出为假"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 329,
    type: "single_choice",
    question: "6维力与力矩传感器主要用于（）。",
    options: {
      A: "精密加工",
      B: "精密测量",
      C: "精密计算",
      D: "精密装配"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 330,
    type: "single_choice",
    question: "将控制系统中输出信号(如速度、位置)的部分或全部通过一定方式，加送到输入端，并与输入信号叠加，从而可改善系统的性能，这一过程称为（）。",
    options: {
      A: "检测",
      B: "反馈",
      C: "控制",
      D: "调整"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 331,
    type: "single_choice",
    question: "两相继电器接线的过电流保护装置（）。",
    options: {
      A: "既可以作相间短路保护，又可以作单相短路保护",
      B: "只能作相间短路保护，不能作单相短路保护",
      C: "只能作单相短路保护，不能作相间短路保护",
      D: "既不可作相间短路保护，又不可作单相短路保护"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 332,
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
    id: 333,
    type: "single_choice",
    question: "压电式传感器，即应用半导体压电效应可以测量（）。",
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
    id: 334,
    type: "single_choice",
    question: "用于检测物体接触面之间相对运动大小和方向的传感器是（）。",
    options: {
      A: "接近觉传感器",
      B: "接触觉传感器",
      C: "滑动觉传感器",
      D: "压觉传感器"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 335,
    type: "single_choice",
    question: "增量式光轴编码器一般应用（）套光电元件，从而可以实现计数、测速、鉴向和定位。",
    options: {
      A: "一",
      B: "二",
      C: "三",
      D: "四"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 336,
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
    id: 337,
    type: "single_choice",
    question: "选取V带型号，主要取决于（）。",
    options: {
      A: "带的线速度",
      B: "带的紧边拉力",
      C: "带的有效拉力",
      D: "带传递的功率和小带轮转速"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 338,
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
    id: 339,
    type: "single_choice",
    question: "曲柄摇杆机构的死点位置在（）。",
    options: {
      A: "原动杆与连杆共线",
      B: "原动杆与机架共线",
      C: "从动杆与连杆共线",
      D: "从动杆与机架共线"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 340,
    type: "single_choice",
    question: "测量角速度的传感器有（）。",
    options: {
      A: "超声波传感器",
      B: "STM",
      C: "光学测距法",
      D: "旋转编码器"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 341,
    type: "single_choice",
    question: "步进电动机主要是（）控制。",
    options: {
      A: "开环",
      B: "闭环",
      C: "半闭环",
      D: "自动"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 342,
    type: "single_choice",
    question: "下列不属于光纤式传感器的优点的是（）。",
    options: {
      A: "抗电磁干扰能力强",
      B: "灵敏度高",
      C: "响应快",
      D: "测距小"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 343,
    type: "single_choice",
    question: "下列不属于光纤式传感器的是（）。",
    options: {
      A: "射束中断型光纤传感器",
      B: "回射型光纤传感器",
      C: "扩散型光纤传感器",
      D: "集中式光纤传感器"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 344,
    type: "single_choice",
    question: "超声波传感器通常由超声波发射器、超声波接收器、定时电路和（）组成。",
    options: {
      A: "控制电路",
      B: "反馈电路",
      C: "敏感元件",
      D: "电源"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 345,
    type: "single_choice",
    question: "（）利用材料的内阻压力变化而变化的压觉传感器",
    options: {
      A: "压阻效应式压觉传感器",
      B: "压电效应式压觉传感器",
      C: "集成压敏压觉传感器",
      D: "利用压磁传感器"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 346,
    type: "single_choice",
    question: "（）利用材料压力的作用产生电荷而变化的压觉传感器",
    options: {
      A: "压阻效应式压觉传感器",
      B: "压电效应式压觉传感器",
      C: "集成压敏压觉传感器",
      D: "利用压磁传感器"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 347,
    type: "single_choice",
    question: "（）利用半导体力敏器件与信号电路构成的压觉传感器",
    options: {
      A: "压阻效应式压觉传感器",
      B: "压电效应式压觉传感器",
      C: "集成压敏压觉传感器",
      D: "利用压磁传感器"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 348,
    type: "single_choice",
    question: "（）是扫描电路和针式差动变压器式触觉传感器构成的压觉传感器。",
    options: {
      A: "压阻效应式压觉传感器",
      B: "压电效应式压觉传感器",
      C: "集成压敏压觉传感器",
      D: "利用压磁传感器"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 349,
    type: "single_choice",
    question: "（）是机器人用来探测机器人自身与周围物体之间相对位置或距离的一种传感器。",
    options: {
      A: "力觉传感器",
      B: "接近传感器",
      C: "触觉传感器",
      D: "速度传感器"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 350,
    type: "single_choice",
    question: "工业机器人进行装配、搬运、研磨等作业时需要控制力时采用的（）传感器。",
    options: {
      A: "力觉传感器",
      B: "接近传感器",
      C: "触觉传感器",
      D: "速度传感器"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 351,
    type: "single_choice",
    question: "（）用于感知机械手与对象之间的作用力。",
    options: {
      A: "力觉传感器",
      B: "接近传感器",
      C: "触觉传感器",
      D: "速度传感器"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 352,
    type: "single_choice",
    question: "伺服电机按照电流类型分为直流伺服电动机和（）。",
    options: {
      A: "交流伺服电动机",
      B: "同步电动机",
      C: "异步电动机",
      D: "制动电动机"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 353,
    type: "single_choice",
    question: "（）是工业机器人的主要驱动力。",
    options: {
      A: "减速器",
      B: "滑轨",
      C: "伺服电动机",
      D: "同步带"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 354,
    type: "single_choice",
    question: "下列不属于谐波减速器的组成部分（）。",
    options: {
      A: "刚轮",
      B: "柔轮",
      C: "波发生器",
      D: "齿轮"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 355,
    type: "single_choice",
    question: "（）由一个行星轮减速器的前级和一个摆线针轮减速器的后级组成。",
    options: {
      A: "谐波减速器",
      B: "同轴减速器",
      C: "行星减速器",
      D: "摆线针轮减速器"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 356,
    type: "single_choice",
    question: "工业机器人自动化系统中使用最广泛的运输设备是（）。",
    options: {
      A: "码垛机",
      B: "旋转平台",
      C: "输送机",
      D: "定位机构"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 357,
    type: "single_choice",
    question: "工业机器人六个轴所用的电机为（）。",
    options: {
      A: "直流电机",
      B: "直流伺服电机",
      C: "交流伺服电机",
      D: "步进电机"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 358,
    type: "single_choice",
    question: "电感式传感器是利用线圈的自感或互感来实现测量的装置，可以用来测量（）。\n$①$  位移；  $(2)$  振动；  $(3)$  压力；  $(4)$  流量；  $(5)$  温度；  $(6)$  湿度\nA.  $①②③④$  \nB.③④③⑥ \nC.②③④③ \nD.①②③⑥",
    options: {
      A: "①②③④",
      B: "③④③⑥",
      C: "②③④③",
      D: "①②③⑥"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 359,
    type: "single_choice",
    question: "电感式传感器的特点是（）。\n$①$  抗干扰能力强；  $(2)$  对环境要求不高；  $(3)$  分辨率高；  $(4)$  适合用于快速动态测量\nA.②③④ \nB.①③④ \nC.①②③ \nD.①②④",
    options: {
      A: "②③④",
      B: "①③④",
      C: "①②③",
      D: "①②④"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 360,
    type: "single_choice",
    question: "力敏传感器是将（）的大小转换成便于测量的电量的装置。",
    options: {
      A: "角度",
      B: "动态或静态力",
      C: "温度",
      D: "力矩"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 361,
    type: "single_choice",
    question: "电容式传感器是一种将被测物理量变化转变为电容量变化的装置，再将电容转化为（）等信号输出。",
    options: {
      A: "电压",
      B: "电流",
      C: "频率",
      D: "ABC"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 362,
    type: "single_choice",
    question: "电容式传感器的特点是（）。\n$①$  阻抗高；  $②$  灵敏度高；  $(3)$  结构简单，轻巧易于制造；  $(\\widehat{\\Delta})$  负载能力强\nA.  $①②③④$  \nB.①② \nC.②③④ \nD.①②③",
    options: {
      A: "①②③④",
      B: "①②",
      C: "②③④",
      D: "①②③"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 363,
    type: "single_choice",
    question: "湿度传感器是将（）转换为电信号的装置。",
    options: {
      A: "环境湿度",
      B: "环境温度",
      C: "环境亮度",
      D: "环境颜色"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 364,
    type: "single_choice",
    question: "一个理想的湿度传感器，应该具有的特征是（）。\n$①$  寿命长，  $(2)$  稳定性好；  $(3)$  灵敏度高；  $(\\widehat{\\Delta})$  测量范围宽；  $(5)$  响应时间短\nA.  $①②③④⑤$  \nB.③④③ \nC.②③④ \nD.①②③④",
    options: {
      A: "①②③④⑤",
      B: "③④③",
      C: "②③④",
      D: "①②③④"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 365,
    type: "single_choice",
    question: "温度传感器一般是利用材料（）特性，实现温度到电参量的变化。",
    options: {
      A: "热敏特性",
      B: "压敏特性",
      C: "力反馈特性",
      D: "湿度敏感特性"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 366,
    type: "single_choice",
    question: "防疫机器人上面安装的红外温度传感器属于（）。",
    options: {
      A: "接触方式同热电偶温度传感器一样",
      B: "接触方式同热电阻温度传感器一样",
      C: "非直接接触式温度传感器",
      D: "直接接触式温度传感器"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 367,
    type: "single_choice",
    question: "温度传感器中用于测量温度的热电阻材料应该具有的特征为（）。\n$①$  高温度系数，高电阻率；  $(2)$  物理化学性能稳定；  $(3)$  电阻随温度线性变化；  $(\\widehat{\\Delta})$  抗高温氧化\nA.  $①②③$  \nB.①②③④ \nC.①③④ \nD.③④",
    options: {
      A: "①②③",
      B: "①②③④",
      C: "①③④",
      D: "③④"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 368,
    type: "single_choice",
    question: "消防机器人常用到的半导体气体传感器，当气体附着于元件表面，半导体导电率发生变化，从而可以测出待测气体的（）。",
    options: {
      A: "成分、浓度",
      B: "颜色、毒性",
      C: "气体源头",
      D: "运动速度"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 369,
    type: "single_choice",
    question: "气敏电阻需要本身的温度比外界温度高很多，所以，气敏电阻结构上需要（）。",
    options: {
      A: "电阻丝加热器",
      B: "真空隔温包",
      C: "密封胶套",
      D: "散热风扇"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 370,
    type: "single_choice",
    question: "光电传感器的组成（）。\n$①$  光源；  $(2)$  光学通路；  $(3)$  光学元件；  $(\\widehat{\\Delta})$  电磁感应器\nA.  $①②③④$  \nB.②③④ \nC.①③④ \nD.①②③",
    options: {
      A: "①②③④",
      B: "②③④",
      C: "①③④",
      D: "①②③"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 371,
    type: "single_choice",
    question: "光电检测方法的优点是（）。",
    options: {
      A: "精度高",
      B: "反应快",
      C: "非接触性",
      D: "①②③"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 372,
    type: "single_choice",
    question: "光纤传感器与传统传感器比较，优缺点有（）。\n$①$  抗电磁干扰弱；  $②$  耐腐蚀；  $(3)$  电绝缘性好；  $(4)$  防燃防爆\nA.②③④ \nB.①③④ \nC.①②④ \nD.②④",
    options: {
      A: "②③④",
      B: "①③④",
      C: "①②④",
      D: "②④"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 373,
    type: "single_choice",
    question: "CCD图像传感器是将（）转别为数字电信号的元件。",
    options: {
      A: "光学信号",
      B: "物理信号",
      C: "压力信号",
      D: "体积信号"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 374,
    type: "single_choice",
    question: "机器人各关节使用的交流伺服电动机结构是（）。",
    options: {
      A: "转子、定子都装有永磁体和绕组",
      B: "转子和定子都是绕组",
      C: "定子装有永磁体，转子是绕组",
      D: "转子装有永磁体，定子是绕组"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 375,
    type: "single_choice",
    question: "减速机是在原动机和工作机或执行机构之间起（）转速和传递转矩的作用。",
    options: {
      A: "提高",
      B: "降低",
      C: "匹配",
      D: "调整"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 376,
    type: "single_choice",
    question: "应用通常的物理定律构成的传感器称之为（）。",
    options: {
      A: "物性型",
      B: "结构型",
      C: "一次仪表",
      D: "二次仪表"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 377,
    type: "single_choice",
    question: "利用物质本身的某种客观性质制作的传感器称之为（）。",
    options: {
      A: "物性型",
      B: "结构型",
      C: "一次仪表",
      D: "二次仪表"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 378,
    type: "single_choice",
    question: "传感器在整个测量范围内所能辨别的被测量的最小变化量，或者所能辨别的不同被测量的个数，被称之为传感器的（）。",
    options: {
      A: "精度",
      B: "重复性",
      C: "分辨率",
      D: "灵敏度"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 379,
    type: "single_choice",
    question: "机器人外部传感器不包括（）传感器。",
    options: {
      A: "力或力矩",
      B: "接近觉",
      C: "触觉",
      D: "位置"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 380,
    type: "single_choice",
    question: "低压电器中，接触器触头的动作特点是：（）。",
    options: {
      A: "断开的触头先闭合，闭合的触头后打开",
      B: "断开的触头与闭合的触头同时闭合与打开",
      C: "闭合的触头先打开，断开的触头后闭合",
      D: "以上均不是"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 381,
    type: "single_choice",
    question: "传感器的运用，使得机器人具有了一定的（）能力。",
    options: {
      A: "一般",
      B: "重复工作",
      C: "识别判断",
      D: "逻辑思维"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 382,
    type: "single_choice",
    question: "机器人测距传感器不包括（）。",
    options: {
      A: "超声波传感器",
      B: "STM",
      C: "光学测距法",
      D: "旋转编码器"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 383,
    type: "single_choice",
    question: "下列不属于按照货物存取形式划分的自动立体仓库（）。",
    options: {
      A: "单元货架式",
      B: "移动货架式",
      C: "抹选货架式",
      D: "集中货架式"
    },
    answer: "D",
    category: "应用技术"
  },
  {
    id: 384,
    type: "single_choice",
    question: "（）是保管.储存物品的建筑物和场所的总称。",
    options: {
      A: "仓库",
      B: "自动化仓库",
      C: "立体仓库",
      D: "货架"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 385,
    type: "single_choice",
    question: "（）是由电子计算机进行管理和控制的，不需要人工搬运作业而实现收发作业的仓库。",
    options: {
      A: "仓库",
      B: "自动化仓库",
      C: "立体仓库",
      D: "货架"
    },
    answer: "B",
    category: "应用技术"
  },
  {
    id: 386,
    type: "single_choice",
    question: "（）是指采用高层货架配以货箱或托盘储存货物，用巷道堆垛起重机及其他机械进行作业的仓库。",
    options: {
      A: "仓库",
      B: "自动化仓库",
      C: "立体仓库",
      D: "货架"
    },
    answer: "C",
    category: "应用技术"
  },
  {
    id: 387,
    type: "single_choice",
    question: "（）用于识别、接收和处理分抹信号。",
    options: {
      A: "控制装置",
      B: "分类装置",
      C: "输送装置",
      D: "分抹道口"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 388,
    type: "single_choice",
    question: "（）是执行控制系统发来的分抹指令，使商品进入相应的分抹道口。",
    options: {
      A: "控制装置",
      B: "分类装置",
      C: "输送装置",
      D: "分抹道口"
    },
    answer: "B",
    category: "应用技术"
  },
  {
    id: 389,
    type: "single_choice",
    question: "（）是将已分抹好的商品输送到相应的分抹道口，以便进行后续作业。",
    options: {
      A: "控制装置",
      B: "分类装置",
      C: "输送装置",
      D: "分抹道口"
    },
    answer: "C",
    category: "应用技术"
  },
  {
    id: 390,
    type: "single_choice",
    question: "（）是将商品脱离输送装置并进入相应集货区域的通道。",
    options: {
      A: "控制装置",
      B: "分类装置",
      C: "输送装置",
      D: "分抹道口"
    },
    answer: "D",
    category: "应用技术"
  },
  {
    id: 391,
    type: "single_choice",
    question: "（）是通过发射器发出的光线直接进入接收器，当被检测物体经过发射器和接收器之前阻断光线时，光电开关就产生开关信号。",
    options: {
      A: "对射式光电开关",
      B: "漫反射光电开关",
      C: "槽型光电开关",
      D: "微型电感传感器"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 392,
    type: "single_choice",
    question: "（）可辨别不透明的反光物体，有效距离大，不易受干扰，高灵敏度，高亮度，低功耗，响应时间快，使用寿命长，无铅等特点。",
    options: {
      A: "对射式光电开关",
      B: "漫反射光电开关",
      C: "槽型光电开关",
      D: "微型电感传感器"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 393,
    type: "single_choice",
    question: "（）是当有被检测物体经过时，物体将光电开关发射器发射的足够量的光线反射到接收器源，于是光电开关就产生了开关信号。",
    options: {
      A: "对射式光电开关",
      B: "漫反射光电开关",
      C: "槽型光电开关",
      D: "微型电感传感器"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 394,
    type: "single_choice",
    question: "（）具有检测距离长.不受检测物体的制约、响应速度快、镜头容易受有机尘土等的影响，受环境强光的影响等特点。",
    options: {
      A: "对射式光电开关",
      B: "漫反射光电开关",
      C: "槽型光电开关",
      D: "微型电感传感器"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 395,
    type: "single_choice",
    question: "（）是一款红外线感应光电产品，由红外线发射管和红外线接收管组合而成。",
    options: {
      A: "对射式光电开关",
      B: "漫反射光电开关",
      C: "槽型光电开关",
      D: "微型电感传感器"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 396,
    type: "single_choice",
    question: "（）是无接触式的光电开关，具有受检测体的制约少，且检测距离长，可进行长距离的检测，检测精度高能等特点。",
    options: {
      A: "对射式光电开关",
      B: "漫反射光电开关",
      C: "槽型光电开关",
      D: "微型电感传感器"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 397,
    type: "single_choice",
    question: "通常将机器人IO变量设置为（）类型变量。",
    options: {
      A: "BOOL",
      B: "DINT",
      C: "UDINT",
      D: "LREAL"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 398,
    type: "single_choice",
    question: "转子与定子旋转磁场以相同的方向、不同的转速成旋转，存在转差率电机是（）。",
    options: {
      A: "三相异步电机",
      B: "同步电机",
      C: "直流电机",
      D: "交流电机"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 399,
    type: "single_choice",
    question: "转子本身产生固定方向的磁场，定子旋转磁场“拖着”转子磁场(转子)转动的电机是（）。",
    options: {
      A: "三相异步电机",
      B: "同步电机",
      C: "直流电机",
      D: "交流电机"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 400,
    type: "single_choice",
    question: "将直流电能转换为机械能的电动机是（）。",
    options: {
      A: "三相异步电机",
      B: "同步电机",
      C: "直流电机",
      D: "交流电机"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 401,
    type: "single_choice",
    question: "励磁绕组与电枢绕组无联接关系，而由其他直流电源对励磁绕组供电的直流电机称（）。",
    options: {
      A: "并励直流电机",
      B: "他励直流电动机",
      C: "串励直流电机",
      D: "复励直流电动机"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 402,
    type: "single_choice",
    question: "（）的励磁绕组与电枢绕组相并联，是电机本身发出来的端电压为励磁绕组供电。",
    options: {
      A: "并励直流电机",
      B: "他励直流电动机",
      C: "串励直流电机",
      D: "复励直流电动机"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 403,
    type: "single_choice",
    question: "什么是步进电机（）。",
    options: {
      A: "是一种将电脉冲转化为角位移的装置",
      B: "通过控制脉冲时间长短控制转动角度",
      C: "具有较强过载能力",
      D: "加速性能好，反应速度快"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 404,
    type: "single_choice",
    question: "伺服电机的特点（）。",
    options: {
      A: "将电脉冲转化为角位移的装置",
      B: "从静止加速到工作转速较慢，需要200-400Ms",
      C: "会出现低频振动",
      D: "运行平稳，低速时也不会出现振动"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 405,
    type: "single_choice",
    question: "电动机的欠压保护是（）。",
    options: {
      A: "电压低于额定范围内，电机保护原件必须断掉电机电源",
      B: "当电流持续大于额定电流，导致熔断丝高温熔断",
      C: "瞬间电压过高保护，空气开关断开",
      D: "电机持续在超载的环境下断开电源"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 406,
    type: "single_choice",
    question: "一般步进电机的运行频率比启动频率（）。",
    options: {
      A: "低",
      B: "高",
      C: "相等",
      D: "大小不确定"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 407,
    type: "single_choice",
    question: "以下哪一项不是对伺服系统的基本要求（）。",
    options: {
      A: "稳定性好",
      B: "精度高",
      C: "快速响应无超调",
      D: "高速、转矩小"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 408,
    type: "single_choice",
    question: "通过以下哪种方式可以减小步进电机步距角，提高求步距精（）。",
    options: {
      A: "细分",
      B: "提高频率",
      C: "减小电源电压",
      D: "改变控制算法"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 409,
    type: "single_choice",
    question: "使用感应同步器作为位置检测装置，从而构成位置闭环的控制系统属于何种控制方式（）。",
    options: {
      A: "开环",
      B: "闭环",
      C: "半闭环",
      D: "前馈"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 410,
    type: "single_choice",
    question: "无刷电机的换相状态由以下什么因素决定（）。",
    options: {
      A: "转子位置",
      B: "位置传感器的安装位置",
      C: "电机的电流",
      D: "电机的电压"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 411,
    type: "single_choice",
    question: "步进电机控制信号的脉冲频率越高，动态转矩也就（）。",
    options: {
      A: "越小",
      B: "越大",
      C: "没有影响",
      D: "可能大也可能小"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 412,
    type: "single_choice",
    question: "PWM调速方式称为（）。",
    options: {
      A: "变电流调速",
      B: "变电压调速",
      C: "变频调速",
      D: "脉宽调速"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 413,
    type: "single_choice",
    question: "交流伺服电机的优点为（）。\n$①$  结构简单；  $(2)$  成本低廉；  $(3)$  无电刷磨损；  $(4)$  维修方便\nA.  $①②③④$  \nB.①② \nC.③④ \nD.①④",
    options: {
      A: "①②③④",
      B: "①②",
      C: "③④",
      D: "①④"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 414,
    type: "single_choice",
    question: "对伺服系统的基本要求是（）。\n$①$  稳定性好；  $(2)$  快速响应无超调；  $(3)$  低速时小转矩；  $(4)$  调速范围宽\nA.  $①②③④$  \nB.①②④ \nC.②③④ \nD.①③④",
    options: {
      A: "①②③④",
      B: "①②④",
      C: "②③④",
      D: "①③④"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 415,
    type: "single_choice",
    question: "反馈补偿型的步进电机伺服系统，这种系统基本上解决了步进电机丢失脉冲的问题，但是这种系统从控制方式来看（）真正意义上的闭环控制。",
    options: {
      A: "是",
      B: "不是",
      C: "不确定",
      D: "等同于"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 416,
    type: "single_choice",
    question: "同步电机的常见的启动方式有三种，除（）外。",
    options: {
      A: "异步起动",
      B: "变频起动",
      C: "其他电机拖入同步",
      D: "点动气动"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 417,
    type: "single_choice",
    question: "在工业机器人执行码垛工艺时，编制的示教点越多，路径越（）。",
    options: {
      A: "准确",
      B: "不准确",
      C: "程序执行迅速",
      D: "与示教点多少无关"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 418,
    type: "single_choice",
    question: "博诺BN-R3机器人中Dwell（4），其中4指的是（）。",
    options: {
      A: "4s",
      B: "4min",
      C: "4h",
      D: "无意义"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 419,
    type: "single_choice",
    question: "（）型机器人具有三个相互垂直的移动轴线，通过手臂的上下、左右移动和前后伸缩构成坐标系。",
    options: {
      A: "直角坐标",
      B: "圆柱坐标",
      C: "极坐标",
      D: "多关节坐标"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 420,
    type: "single_choice",
    question: "工业机器人手臂的复合运动多数用于动作程序（）的专用机器人。",
    options: {
      A: "固定不变",
      B: "灵活变动",
      C: "定期改变",
      D: "无法确定"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 421,
    type: "single_choice",
    question: "自工业机器人诞生以来，（）行业一直是其应用的主要领域。",
    options: {
      A: "电子",
      B: "航天",
      C: "通信",
      D: "汽车"
    },
    answer: "D",
    category: "应用技术"
  },
  {
    id: 422,
    type: "single_choice",
    question: "（）是励磁绕组与电枢绕组串联后，再接于直流电源。",
    options: {
      A: "并励直流电机",
      B: "他励直流电动机",
      C: "串励直流电机",
      D: "复励直流电动机"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 423,
    type: "single_choice",
    question: "（）是并励和串励两个励磁绕组的总称。",
    options: {
      A: "并励直流电机",
      B: "他励直流电动机",
      C: "串直流电机",
      D: "复励直流电动机"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 424,
    type: "single_choice",
    question: "机器人终端效应器手的力量来自（）。",
    options: {
      A: "决定机器人手部位姿的各个关节",
      B: "机器人手部的关节",
      C: "决定机器人手部位置的各关节",
      D: "机器人的全部关节"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 425,
    type: "single_choice",
    question: "有些工作环境气味难闻.挥发性强.易燃易爆，对人体有很大危害。（）结构简单，无论何种情况下都能保证工作质量，而且机器人自带防爆系统，可保证工作安全可靠。",
    options: {
      A: "喷涂机器人",
      B: "焊接机器人",
      C: "机器加工机器人",
      D: "医疗康复机器人"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 426,
    type: "single_choice",
    question: "滚动轴承与轴颈配合，随轴颈旋转的零件是（）。",
    options: {
      A: "内圈",
      B: "外圈",
      C: "滚动体",
      D: "保持架"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 427,
    type: "single_choice",
    question: "测速发电机的输出信号为（）。",
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
    id: 428,
    type: "single_choice",
    question: "当对伺服驱动输入伺服使能信号后，表明（）。",
    options: {
      A: "可以清除伺服一般的报警；",
      B: "伺服复位的功能；",
      C: "伺服此时可以上强电；",
      D: "伺服电机已有电流，此时可以接受动作指令；"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 429,
    type: "single_choice",
    question: "工业机器人集精密化、柔性化、智能化、软件应用开发等先进制造技术于一体体现了工业机器人工作站的（）特点。",
    options: {
      A: "技术先进",
      B: "技术升级",
      C: "应用领域广泛",
      D: "技术综合性强"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 430,
    type: "single_choice",
    question: "工业机器人与自动化装备是继动力机械、计算机之后出现的延伸人的体力和智力的新一代生产工具体现了工业机器人工作站的（）特点。",
    options: {
      A: "技术先进",
      B: "技术升级",
      C: "应用领域广泛",
      D: "技术综合性强"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 431,
    type: "single_choice",
    question: "工业机器人与自动化装备可用于制造、安装、检测、物流等生产环节体现了工业机器人工作站的（）特点。",
    options: {
      A: "技术先进",
      B: "技术升级",
      C: "应用领域广泛",
      D: "技术综合性强"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 432,
    type: "single_choice",
    question: "工业机器人与自动化装备融合了多项学科，涉及机器人控制技术、机器人动力学及仿真、智能测量等技术体现了工业机器人工作站的（）特点。",
    options: {
      A: "技术先进",
      B: "技术升级",
      C: "应用领域广泛",
      D: "技术综合性强"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 433,
    type: "single_choice",
    question: "早期的工业机器人采用液压、气动的方式进行伺服驱动，但是现在仍然采用液压、气动的场合原因是液压、气动具有（）。\n$①$  输出功率高、  $(2)$  防爆性能好、  $(3)$  运动精度要求低、  $(4)$  响应快\nA.  $①②③$  \nB.①②④ \nC.②③④ \nD.①③④",
    options: {
      A: "①②③",
      B: "①②④",
      C: "②③④",
      D: "①③④"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 434,
    type: "single_choice",
    question: "在工业机器人涂胶过程中，通常会用到圆弧指令，圆弧指令中第一个点代表（）。",
    options: {
      A: "起点",
      B: "目标点",
      C: "过渡点",
      D: "圆弧点"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 435,
    type: "single_choice",
    question: "工业机器人控制系统按控制方式可分为三种结构，分别为（）。\n$①$  集中控制；  $(2)$  主从控制；  $(3)$  分布式控制；  $(4)$  开环控制\nA.  $①②④$  \nB.②③④ \nC.①③④ \nD.①②③",
    options: {
      A: "①②④",
      B: "②③④",
      C: "①③④",
      D: "①②③"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 436,
    type: "single_choice",
    question: "在博诺BN-R3机器人进行手动示教搬运、码垛时，需要将机器人运动模式调到（）。",
    options: {
      A: "T1",
      B: "T2",
      C: "aut",
      D: "T3"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 437,
    type: "single_choice",
    question: "工业机器人电机驱动的特点是（）。\n$①$  适用于重载；  $(2)$  维修方便；  $(3)$  密封要求不严格；  $(4)$  位置控制精度高；  $(5)$  轨迹控制精度高\nA.①②⑤ \nB.①③⑤ \nC.①④⑤ \nD.③④⑤",
    options: {
      A: "①②⑤",
      B: "①③⑤",
      C: "①④⑤",
      D: "③④⑤"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 438,
    type: "single_choice",
    question: "工业机器人搬运的过程中用气动夹具来抓取物料和放物料，通常气动夹具用到（）个数字量输出信号。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 439,
    type: "single_choice",
    question: "工业机器人码垛的的过程中用气动吸盘来吸取物料，通常气动吸盘用到（）个数字量输出信号。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 440,
    type: "single_choice",
    question: "通常所说的焊接机器人主要指的是（）。\n$①$  点焊机器人；  $(2)$  弧焊机器人；  $(3)$  等离子焊接机器人；  $(4)$  激光焊接机器人\nA.①② \nB.①②④ \nC.①③ \nD.①②③④",
    options: {
      A: "①②",
      B: "①②④",
      C: "①③",
      D: "①②③④"
    },
    answer: "B",
    category: "应用技术"
  },
  {
    id: 441,
    type: "single_choice",
    question: "工业机器人弧焊工作站通常由（）组成。\n$①$  机器人系统；  $(2)$  焊枪；  $(3)$  焊接电源；  $(4)$  送丝装置；  $(5)$  变位机；  $(6)$  清枪装置\nA.  $①②$  \nB.①②④ \nC.①③ \nD.①②③④⑤⑥",
    options: {
      A: "①②",
      B: "①②④",
      C: "①③",
      D: "①②③④⑤⑥"
    },
    answer: "D",
    category: "应用技术"
  },
  {
    id: 442,
    type: "single_choice",
    question: "工业机器人工作站的特点是（）。\n$①$  技术先进；  $(2)$  技术升级；  $(3)$  应用领域广泛；  $(4)$  技术综合性强\nA.  $①②$  \nB.①③ \nC.②④ \nD.①②③④",
    options: {
      A: "①②",
      B: "①③",
      C: "②④",
      D: "①②③④"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 443,
    type: "single_choice",
    question: "工业机器人码垛时必须的三个点是（）。\n$①$  抓取点；  $(2)$  过度点；  $(3)$  放置点；  $(4)$  原点\nA.  $①②③$  \nB.①②④ \nC.②③④ \nD.①③④",
    options: {
      A: "①②③",
      B: "①②④",
      C: "②③④",
      D: "①③④"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 444,
    type: "single_choice",
    question: "工业机器人装配工艺中，工件接近装配位置时（）。",
    options: {
      A: "降低速度、缓慢进入",
      B: "快速，直接进入",
      C: "保持原速进入",
      D: "速度不用考虑"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 445,
    type: "single_choice",
    question: "工业机器人装配工艺中，产品的装配顺序是（）。",
    options: {
      A: "指定工件、顺序唯一",
      B: "根据个人爱好自由调整",
      C: "为节省时间，可减少部件装配",
      D: "装配顺序可不固定"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 446,
    type: "single_choice",
    question: "工业机器人搬运工艺中，抓取点、过度点、放置点的末端执行器状态为（）。",
    options: {
      A: "抓取点：手抓放开",
      B: "过度点：手抓闭合、并状态保持",
      C: "放置点：手抓闭合",
      D: "过度点：手爪放开"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 447,
    type: "single_choice",
    question: "博诺BN-R3工业机器人执行装配任务时，从乙方向进入时，最好选择的指令是（）。",
    options: {
      A: "OFFSET",
      B: "MLIN",
      C: "MJOINT",
      D: "CRIC"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 448,
    type: "single_choice",
    question: "在工业机器人系统中，（）相当于机器人的“大脑”",
    options: {
      A: "机械结构",
      B: "控制系统",
      C: "示教器",
      D: "驱动系统"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 449,
    type: "single_choice",
    question: "如果末端装置、工具或周围环境的刚性很高，那么机械手要执行与某个表面有接触的操作作业将会变得相当困难，此时应该考虑（）。",
    options: {
      A: "柔顺控制",
      B: "PID控制",
      C: "模糊控制",
      D: "最优控制"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 450,
    type: "single_choice",
    question: "机器人手臂的伸缩、升降及横向移动都属于直线运动，下列运动不属于直线运动的是（）。",
    options: {
      A: "活塞气缸",
      B: "活塞油缸",
      C: "齿轮齿条",
      D: "连杆机构"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 451,
    type: "single_choice",
    question: "涂胶方法有（）。\n$①$  刮涂；  $(2)$  辊涂；  $(3)$  浸涂；  $(4)$  喷涂\nA.  $①②$  \nB.②④ \nC.①②④ \nD.①②③④",
    options: {
      A: "①②",
      B: "②④",
      C: "①②④",
      D: "①②③④"
    },
    answer: "D",
    category: "应用技术"
  },
  {
    id: 452,
    type: "single_choice",
    question: "码垛机械手的程序里通常需要（）个定位点。",
    options: {
      A: "3个",
      B: "4个",
      C: "1个",
      D: "5个"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 453,
    type: "single_choice",
    question: "工业机器人进行编程时出现weld是进行（）工艺。",
    options: {
      A: "装配",
      B: "涂胶",
      C: "焊接",
      D: "码垛"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 454,
    type: "single_choice",
    question: "工业机器人进行编程时出现pallet是进行（）工艺。",
    options: {
      A: "装配",
      B: "涂胶",
      C: "焊接",
      D: "码垛"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 455,
    type: "single_choice",
    question: "在工业机器人码垛工艺中，当出现工业机器人末端掉工件时，错误的说法或做法是（）。",
    options: {
      A: "影响后面的码垛",
      B: "损坏工件",
      C: "可继续后续码垛",
      D: "停止机器人，进行检查调整"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 456,
    type: "single_choice",
    question: "博诺BN-R3机器人中，OFFSET（P1、0、30、0）表示的意思是（）。",
    options: {
      A: "P1点位置",
      B: "P1点位置X轴方向30单位长度",
      C: "P1点位置Y轴方向30单位长度",
      D: "P1点位置Z轴方向30单位长度"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 457,
    type: "single_choice",
    question: "博诺BN-R3机器人中，OFFSET（P1、30、0、0）表示的意思是（）。",
    options: {
      A: "P1点位置",
      B: "P1点位置X轴方向30单位长度",
      C: "P1点位置Y轴方向30单位长度",
      D: "P1点位置Z轴方向30单位长度"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 458,
    type: "single_choice",
    question: "在博诺BN-R3机器人的码垛工艺包中，pallet.enterPalletPos代表（）。",
    options: {
      A: "当前工件点的进入点",
      B: "当前工件点的中间过渡点代表",
      C: "当前工件点的上方点",
      D: "当前工件点"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 459,
    type: "single_choice",
    question: "在博诺BN-R3机器人的码垛工艺包中，pallet.approachPosl（）。",
    options: {
      A: "当前工件点的进入点",
      B: "当前工件点的中间过渡点代表",
      C: "当前工件点的上方点",
      D: "当前工件点"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 460,
    type: "single_choice",
    question: "在博诺 BN-R3 机器人的码垛工艺包中，pallet.overPiecePos1 代表（）。",
    options: {
      A: "当前工件点的进入点",
      B: "当前工件点的中间过渡点代表",
      C: "当前工件点的上方点",
      D: "当前工件点"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 461,
    type: "single_choice",
    question: "在博诺 BN-R3 机器人的码垛工艺包中，pallet.piecePos 代表（）。",
    options: {
      A: "当前工件点的进入点",
      B: "当前工件点的中间过渡点代表",
      C: "当前工件点的上方点",
      D: "当前工件点"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 462,
    type: "single_choice",
    question: "在博诺 BN-R3 机器人的码垛工艺包中，pallet.maxPieces 代表（）。",
    options: {
      A: "当前工件点的进入点",
      B: "当前垛盘中的工件点的数量",
      C: "当前工件点的上方点",
      D: "当前工件点"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 463,
    type: "single_choice",
    question: "在博诺 BN-R3 机器人的码垛工艺包中，pallet.maxPallets 代表（）。",
    options: {
      A: "有效垛盘的数量",
      B: "当前垛盘中的工件点的数量",
      C: "当前工件点的上方点",
      D: "当前工件点"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 464,
    type: "single_choice",
    question: "在博诺 BN-R3 机器人的码垛工艺包中，pallet.update(DINTPalletID,DINTType,DINTPieceID)函数，用于更新当前工件点的位置信息，其中 DINTPalletID 代表（）。",
    options: {
      A: "垛盘的序号",
      B: "码垛",
      C: "取垛",
      D: "工件点的序号"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 465,
    type: "single_choice",
    question: "在博诺 BN-R3 机器人的码垛工艺包中，pallet.update(DINTPalletID,DINTType,DINTPieceID)函数，用于更新当前工件点的位置信息，其中 DINTType 值为 0 代表（）。",
    options: {
      A: "垛盘的序号",
      B: "码垛",
      C: "取垛",
      D: "工件点的序号"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 466,
    type: "single_choice",
    question: "在博诺 BN-R3 机器人的码垛工艺包中，pallet.update(DINTPalletID,DINTType,DINTPieceID)函数，用于更新当前工件点的位置信息，其中DINTPieceID代表（）。",
    options: {
      A: "垛盘的序号",
      B: "码垛",
      C: "取垛",
      D: "工件点的序号"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 467,
    type: "single_choice",
    question: "博诺BN-R3机器人在码垛工艺中，吸盘在吸取工件时，常用（）延时指令进行延时操作。",
    options: {
      A: "DWELL",
      B: "WAIT",
      C: "FOR",
      D: "IF"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 468,
    type: "single_choice",
    question: "博诺BN-R3机器人在同一个工作平台上搬运相同工件需要更改位置时可以（）。\n$①$  删除原有程序，重新写；  $(2)$  不改变程序，重新定位新的坐标点；  $(3)$  把新位置上的工件，手动搬运到原来的位置。\nA.  $③$  \nB.①③ \nC.②③ \nD.①②",
    options: {
      A: "③",
      B: "①③",
      C: "②③",
      D: "①②"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 469,
    type: "single_choice",
    question: "博诺BN-R3机器人涂胶工艺中需要建立（）坐标系。",
    options: {
      A: "工件坐标系",
      B: "工具坐标系",
      C: "世界坐标系",
      D: "不需建立坐标系"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 470,
    type: "single_choice",
    question: "博诺BN-R3机器人中，进行码垛工艺时，OFFSET指令的意思是（）。",
    options: {
      A: "迫近指令",
      B: "等待命令",
      C: "延时操作",
      D: "偏移位置"
    },
    answer: "D",
    category: "编程与操作"
  },
  {
    id: 471,
    type: "single_choice",
    question: "博诺BN-R3机器人中，OFFSET（P1、0、0、30）中的30表示的是（）。",
    options: {
      A: "绕Z轴旋转  $30^{\\circ}$",
      B: "绕X轴旋转  $30^{\\circ}$",
      C: "P1点位置Z轴正方向偏移  $30\\mathrm{mm}$",
      D: "绕Y轴旋转  $30^{\\circ}$"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 472,
    type: "single_choice",
    question: "在博诺BN-R3机器人的码垛工艺包中，pallet.update(DINTPalletID,DINTType,DINTPieceID)函数，用于更新当前工件点的位置信息，其中DINTType值为1代表（）。",
    options: {
      A: "垛盘的序号",
      B: "码垛",
      C: "取垛",
      D: "工件点的序号"
    },
    answer: "C",
    category: "编程与操作"
  },
  {
    id: 473,
    type: "single_choice",
    question: "不属于气源净化装置的是（）。",
    options: {
      A: "后冷却器",
      B: "减压阀",
      C: "除油器",
      D: "空气过滤器"
    },
    answer: "D",
    category: "系统集成"
  },
  {
    id: 474,
    type: "single_choice",
    question: "在设备的维护保养制度中，（）保养是基础。",
    options: {
      A: "日常；",
      B: "一级；",
      C: "二级；",
      D: "三级；"
    },
    answer: "A",
    category: "安全与维护"
  },
  {
    id: 475,
    type: "single_choice",
    question: "保持电气设备正常运行要做到（）。",
    options: {
      A: "保持电压.电流.温升等不超过允许值。",
      B: "保持电气设备绝缘良好，保持各导电部分连接可靠良好。",
      C: "保持电气设备清洁，通风良好。",
      D: "以上都是。"
    },
    answer: "D",
    category: "安全与维护"
  },
  {
    id: 476,
    type: "single_choice",
    question: "一种故障现象可能是因多个不同部件导致，下列哪项不是减速机故障导致的（）。",
    options: {
      A: "位置偏差",
      B: "发生异响",
      C: "运动时振动",
      D: "失控飞车"
    },
    answer: "D",
    category: "安全与维护"
  },
  {
    id: 477,
    type: "single_choice",
    question: "一般取（）mA作为人体触电后所能摆脱的最大电流。",
    options: {
      A: "30",
      B: "20",
      C: "10",
      D: "5"
    },
    answer: "A",
    category: "安全与维护"
  },
  {
    id: 478,
    type: "single_choice",
    question: "动力系统主要包含什么（）。\n$①$  电机；  $(2)$  电池组；  $(3)$  充电装置；  $(\\underline{A})$  安全装置\nA.  $①②$  \nB.①②③ \nC.①②③④ \nD.②③",
    options: {
      A: "①②",
      B: "①②③",
      C: "①②③④",
      D: "②③"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 479,
    type: "single_choice",
    question: "下列关于从业人员与职业道德关系的说法中，正确的是（）。",
    options: {
      A: "每个从业人员都应该以德为先，做有职业道德之人",
      B: "没有人遵守职业道德，职业道德不起作用",
      C: "是否遵守职业道德应视具体情况而定，不应有明确规定",
      D: "知识和技能决定个人前途，职业道德处于次要地位"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 480,
    type: "single_choice",
    question: "以下关于职业进德的说法中，正确的是（）。",
    options: {
      A: "没有职业道德的人干不好任何工作",
      B: "有了职业道德的人一定能够胜任工作",
      C: "职业道德无关紧要，可有可无",
      D: "职业道德有时有作用，有时没有作用"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 481,
    type: "single_choice",
    question: "较法律而言，道德在调处社会关系时具有（）的特点。",
    options: {
      A: "特殊的强制性",
      B: "社会功能差",
      C: "原则性不稳定",
      D: "适用范围广"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 482,
    type: "single_choice",
    question: "洗衣机、电冰箱等家用电器的金属外壳硬链接（）。",
    options: {
      A: "地线",
      B: "零线",
      C: "相线",
      D: "火线"
    },
    answer: "A",
    category: "安全与维护"
  },
  {
    id: 483,
    type: "single_choice",
    question: "在一般情况下，人体所能感知的  $50\\mathrm{Hz}$  交流电流可按（）mA考虑。",
    options: {
      A: "100",
      B: "50",
      C: "10",
      D: "1.5"
    },
    answer: "C",
    category: "安全与维护"
  },
  {
    id: 484,
    type: "single_choice",
    question: "凡特别危险环境里以及在金属容器、矿井、隧道里的手提灯，均应采用（）安全电压。",
    options: {
      A: "36V",
      B: "24V",
      C: "12V",
      D: "6V"
    },
    answer: "C",
    category: "安全与维护"
  },
  {
    id: 485,
    type: "single_choice",
    question: "（）是触电事故中最危险的一种。",
    options: {
      A: "电烙印",
      B: "皮肤金属化",
      C: "电灼伤",
      D: "电烧伤"
    },
    answer: "D",
    category: "安全与维护"
  },
  {
    id: 486,
    type: "single_choice",
    question: "短路保护的操作电源可取自（）。",
    options: {
      A: "电压互感器",
      B: "电流互感器",
      C: "空气开关",
      D: "电容器"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 487,
    type: "single_choice",
    question: "过电流保护提高灵敏度的措施是（）。",
    options: {
      A: "低电压闭锁保护",
      B: "阶梯原则",
      C: "克服死区",
      D: "负荷率要高"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 488,
    type: "single_choice",
    question: "排气节流阀一般安装在（）的排气口。",
    options: {
      A: "空压机",
      B: "控制元件",
      C: "执行元件",
      D: "辅助元件"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 489,
    type: "single_choice",
    question: "电器设备铭牌上所标出的电压.电流值都是指（）。",
    options: {
      A: "最大值",
      B: "有效值",
      C: "瞬时值",
      D: "平均值"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 490,
    type: "single_choice",
    question: "变压器降压使用时，能输出较大的（）。",
    options: {
      A: "功率",
      B: "电流",
      C: "电能",
      D: "电功"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 491,
    type: "single_choice",
    question: "电气控制线路原理图中，触头的位置是处于（）。",
    options: {
      A: "未通电状态",
      B: "通电状态",
      C: "根据情况确定状态",
      D: "不确定"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 492,
    type: "single_choice",
    question: "关于提高功率因数的说法，正确的是（）。",
    options: {
      A: "在阻性负载上并联电感可以提高功率因数",
      B: "在阻性负载上并联电容可以降低功率因数",
      C: "在感性负载上并联电容可以提高功率因数",
      D: "在感性负载上并联电容可以降低功率因数"
    },
    answer: "C",
    category: "系统集成"
  },
  {
    id: 493,
    type: "single_choice",
    question: "稳压管的动态电阻（）稳压性能越好。",
    options: {
      A: "越大",
      B: "越小",
      C: "较合适",
      D: "不一定"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 494,
    type: "single_choice",
    question: "办事公道是指职业人员在进行职业活动时要做到（）。",
    options: {
      A: "原则至上，不徇私情，举贤任能，不避亲疏",
      B: "奉献社会，襟怀坦荡，待人热情，勤俭持家",
      C: "支持真理，公私分明，公平公正，光明磊落",
      D: "牺牲自我，助人为乐，邻里和睦，正大光明"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 495,
    type: "single_choice",
    question: "与法律相比，道德在调控人与人.人与社会以及人与自然之间的各种关系时，它的（）。",
    options: {
      A: "时效性差",
      B: "作用力弱",
      C: "操作性强",
      D: "适用范围广"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 496,
    type: "single_choice",
    question: "在实现方式上，职业道德具有（）。",
    options: {
      A: "专业性和特定性",
      B: "稳定性和继承性",
      C: "灵活性和多样性",
      D: "自觉性和实践性"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 497,
    type: "single_choice",
    question: "下列关于爱岗敬业的说法中，认为是正确的是（）。",
    options: {
      A: "市场经济鼓励人才流动，再提倡爱岗敬业已不合时宜",
      B: "即使在市场经济时代，也要提倡“干一行，爱一行，专一行”",
      C: "要做到爱岗敬业就应一辈子在岗位上无私奉献",
      D: "在现实中，我们不得不承认，“爱岗敬业”的观念阻碍了人们的择业自由"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 498,
    type: "single_choice",
    question: "（）的行为准则是区分善与恶.好与坏.正义与非正义的行为准则。",
    options: {
      A: "法律法规",
      B: "政治规范",
      C: "道德理论体系",
      D: "道德规范"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 499,
    type: "single_choice",
    question: "商业服务人员职业道德（）。",
    options: {
      A: "文明礼貌.诚信无欺",
      B: "救死扶伤.高度负责",
      C: "教书育人.为人师表",
      D: "遵纪守法.买卖公平"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 500,
    type: "single_choice",
    question: "医疗服务人员职业道德（）。",
    options: {
      A: "文明礼貌.诚信无欺",
      B: "救死扶伤.高度负责",
      C: "教书育人.为人师表",
      D: "遵纪守法.买卖公平"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 501,
    type: "single_choice",
    question: "教育工作人员职业道德（）。",
    options: {
      A: "文明礼貌.诚信无欺",
      B: "廉洁奉公.甘当公仆",
      C: "教书育人.为人师表",
      D: "遵纪守法.买卖公平"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 502,
    type: "single_choice",
    question: "个体经营人员职业道德（）。",
    options: {
      A: "文明礼貌.诚信无欺",
      B: "廉洁奉公.甘当公仆",
      C: "秉公执法.铁面无私",
      D: "遵纪守法.买卖公平"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 503,
    type: "single_choice",
    question: "行政执法人员职业道德（）。",
    options: {
      A: "文明礼貌.诚信无欺",
      B: "廉洁奉公.甘当公仆",
      C: "秉公执法.铁面无私",
      D: "遵纪守法.买卖公平"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 504,
    type: "single_choice",
    question: "国家公务人员职业道德（）。",
    options: {
      A: "文明礼貌.诚信无欺",
      B: "廉洁奉公.甘当公仆",
      C: "秉公执法.铁面无私",
      D: "遵纪守法.买卖公平"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 505,
    type: "single_choice",
    question: "关于价值观的说法，正确的是（）。",
    options: {
      A: "企业只要能盈利，价值观并不重要",
      B: "一个家庭出生的人价值观就一模一样",
      C: "企业价值观对员工影响很大",
      D: "人的行为选择完全不受价值观的影响"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 506,
    type: "single_choice",
    question: "下列关于职业生涯规划的叙述，不正确的一项是（）。",
    options: {
      A: "职业生涯规划就是一个人有意识地计划个人工作的全过程",
      B: "正确合理的职业生涯规划是事业取得成功的关键因素",
      C: "不管在什么情况下都要坚定不移地按照规划执行",
      D: "制定职业生涯规划，有利于认识特质，发掘潜力，实现长远发展"
    },
    answer: "C",
    category: "机器人基础"
  },
  {
    id: 507,
    type: "single_choice",
    question: "下列（）是正确的倾听他人的方式",
    options: {
      A: "表达自己",
      B: "尽量占主导地位",
      C: "思维跳跃",
      D: "体察对方感受"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 508,
    type: "single_choice",
    question: "下列不属于积极态度的构成部分的是（）。",
    options: {
      A: "乐观",
      B: "热情",
      C: "勇气",
      D: "懦弱"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 509,
    type: "single_choice",
    question: "（）是人的综合素养的主题和核心。",
    options: {
      A: "职业技能",
      B: "职业行为",
      C: "职业意识",
      D: "职业素养"
    },
    answer: "D",
    category: "机器人基础"
  },
  {
    id: 510,
    type: "single_choice",
    question: "（）对职业生涯发展具有决定性作用。",
    options: {
      A: "职业生涯规划",
      B: "职业素养",
      C: "职业技能",
      D: "身体状况"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 511,
    type: "single_choice",
    question: "工业机器人在自动模式下无法进行微动控制。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "安全与维护"
  },
  {
    id: 512,
    type: "single_choice",
    question: "工业机器人示教器使能键的设置是为保证操作人员人身安全而设置的。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "安全与维护"
  },
  {
    id: 513,
    type: "single_choice",
    question: "工业机器人控制柜处于自动模式时，可进行手动操作。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 514,
    type: "single_choice",
    question: "用户在示教机器人轨迹时，不需要调节机器人的速度倍率。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 515,
    type: "single_choice",
    question: "用户在示教器中可以切换语言。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 516,
    type: "single_choice",
    question: "用户权限管理查看器页面显示当前登录控制器用户的权限信息和其所属的用户组。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 517,
    type: "single_choice",
    question: "IP设置界面可以设置上位机的IP地址。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 518,
    type: "single_choice",
    question: "工业机器人只有将控制柜打到手动模式才可以进行语言设置。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 519,
    type: "single_choice",
    question: "非手动模式下，博诺BN-R3机器人允许操作人员进行系统信息修改。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 520,
    type: "single_choice",
    question: "机器人工具被更换后，只要重新定义TCP后，不需要修改程序，机器人会沿着之前的轨迹运行。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 521,
    type: "single_choice",
    question: "如果工具在工件坐标系A中和在工件坐标系B中的轨迹相同，则可将A中的轨迹复制一份给B，无须对一样的重复轨迹编程。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 522,
    type: "single_choice",
    question: "在直角坐标系中，可以进行六个轴的移动操作。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 523,
    type: "single_choice",
    question: "在关节坐标系中，不可以进行单个轴的移动操作。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 524,
    type: "single_choice",
    question: "在用户坐标系中，不可以进行单个轴的移动操作。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 525,
    type: "single_choice",
    question: "工具坐标系的标定用六点法进行标定更精确。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 526,
    type: "single_choice",
    question: "用户坐标系的标定用三点法就可以进行标定。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 527,
    type: "single_choice",
    question: "机器人学中，任一刚体的位置、姿态由其上任基准点（通常选作物体的质心）和过该点的坐标系相对于参考系的相对关系来确定。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 528,
    type: "single_choice",
    question: "在机器人运行过程中，坐标系建立时保存和激活的操作是不允许的。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 529,
    type: "single_choice",
    question: "机器人在一个斜面上进行画轨迹时，需要建立一个用户坐标系。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 530,
    type: "single_choice",
    question: "机器人在一个斜面上进行搬运时，不需要建立一个用户坐标系。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 531,
    type: "single_choice",
    question: "工件坐标系是在工具活动区域内相对于基坐标系设定的坐标系。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 532,
    type: "single_choice",
    question: "每一个工件坐标系与标定工件坐标系时使用的工具相对应。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 533,
    type: "single_choice",
    question: "只要工业机器人处于停止状态，可以随时进入工业机器人的动作范围内进行作业。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 534,
    type: "single_choice",
    question: "当工业机器人运行过程中遇到突发情况，作业人员应当及时按下示教器上的急停按钮，进行工业机器人检查。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 535,
    type: "single_choice",
    question: "手动更换工业机器人末端执行器时也要注意轻拿轻放，不要与任何东西发生碰撞。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "安全与维护"
  },
  {
    id: 536,
    type: "single_choice",
    question: "手动更换工业机器人末端执行器需要双人配合完成。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "安全与维护"
  },
  {
    id: 537,
    type: "single_choice",
    question: "任何复杂的运动都可以分解为由多个平移和绕轴转动的简单运动的合成。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 538,
    type: "single_choice",
    question: "在进行六点法坐标系标定时，需要六个轴的不同动作才能确保标定的准确。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 539,
    type: "single_choice",
    question: "博诺BN-R3工业机器人编辑程序包括两个方面，一方面是程序指令的操作，另一方面是程序变量的操作。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 540,
    type: "single_choice",
    question: "博诺BN-R3工业机器人在文件管理器界面，新建或者加载一个程序，示教器界面会自动跳转到程序编辑器界面。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 541,
    type: "single_choice",
    question: "在工业机器人编程过程中，不用提前新建变量，可以建立工业机器人运动程序。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 542,
    type: "single_choice",
    question: "工业机器人在程序运行的过程中，不需要让机器人停止，直接可以将程序运行模式从单步运行改为连续运行。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 543,
    type: "single_choice",
    question: "通过工业机器人示教点编写机器人运行程序，首次进行程序验证可采用慢速单次运行方式进行观察效果。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 544,
    type: "single_choice",
    question: "通过示教器编程对已编好的程序进行修改，必须添加新的变量。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 545,
    type: "single_choice",
    question: "博诺BN-R3工业机器人进行示教编程，必须先建立新的变量，才能记录示教点位置信息。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 546,
    type: "single_choice",
    question: "博诺BN-R3工业机器人进行示教编程，可以直接使用相同速度编程。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 547,
    type: "single_choice",
    question: "通过示教编程对博诺BN-R3工业机器人程序做姿态参数修整，应将机器人坐标系设置为-笛卡尔坐标系。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 548,
    type: "single_choice",
    question: "博诺 BN-R3 工业机器人进行系统程序参数数据备份，仅需备份程序文件即可。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 549,
    type: "single_choice",
    question: "博诺 BN-R3 工业机器人的对象是所有正在系统内存运行的程序和系统参数。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 550,
    type: "single_choice",
    question: "工业机器人在恢复过程中，所有的系统参数被替换，并且所有的备份目录下的模块被重新装载。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 551,
    type: "single_choice",
    question: "博诺 BN-R3 工业机器人示教器可以随时插 U 盘导入导出程序。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 552,
    type: "single_choice",
    question: "备份系统文件是具有唯一性的，只能将备份文件恢复到原来的机器人中去。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 553,
    type: "single_choice",
    question: "机器人每个程序点的属性主要包含：位置坐标、插补方式、空走点、进给速度。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 554,
    type: "single_choice",
    question: "示教方式编程一般用于大型机器人或危险作业条件下的机器人编程。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 555,
    type: "single_choice",
    question: "工业机器人工具坐标系标定的标定点数可随意设置。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 556,
    type: "single_choice",
    question: "可使用工业机器人示教编程器进行离线编程操作。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 557,
    type: "single_choice",
    question: "通常对机器人进行示教编程时，要求最初程序点与最终程序点的位置相同，可提高工作效率。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 558,
    type: "single_choice",
    question: "基于生产现场的复杂性、作业的可靠性等方面的考虑，工业机器人的作业示教在短期内仍将无法脱离在线示教的现状。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 559,
    type: "single_choice",
    question: "为了确保安全，用示教编程器手动运行机器人时，机器人的最高速度限制是 200mm / s。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 560,
    type: "single_choice",
    question: "条件比较指令包括寄存器条件比较指令和 I/O 条件比较指令。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 561,
    type: "single_choice",
    question: "机器人的手部是一个执行命令的机构，它不具有识别的功能。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 562,
    type: "single_choice",
    question: "采用直线插补示教的程序点指的是从当前程序点移动到下一程序点运行一段直线。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 563,
    type: "single_choice",
    question: "轨迹插补运算是伴随着轨迹控制过程一步步完成的，而不是在得到示教点之后，一次完成，再提交给再现过程的。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 564,
    type: "single_choice",
    question: "千分表和零点标定组件，可用于机器人的零点标定。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 565,
    type: "single_choice",
    question: "博诺 BN-R3 机器人示教编程器 MoveJ 的含义为目标点被轨迹逼近。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "编程与操作"
  },
  {
    id: 566,
    type: "single_choice",
    question: "点到点运动是机器人沿最快的轨道将 TCP 从起始点引至目标点。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 567,
    type: "single_choice",
    question: "线性运动是机器人沿一条直线以定义的速度将 TCP 引至目标点。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 568,
    type: "single_choice",
    question: "编写工业机器人圆弧轨迹时至少需要 3 个示教点位。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "编程与操作"
  },
  {
    id: 569,
    type: "single_choice",
    question: "博诺 BN-R3 机器人示教器只有唯一的一个使能键。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 570,
    type: "single_choice",
    question: "博诺 BN-R3 机器人示教器上的日志可随意自由删除。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 571,
    type: "single_choice",
    question: "具备 6 个自由度的博诺 BN-R3 机器人具有 1 个不同的奇点位置。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 572,
    type: "single_choice",
    question: "工业机器人传感部分用于感知内部和外部的信息。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 573,
    type: "single_choice",
    question: "工业机器人是面向工业领域的多关节机械手或多自由度的机器装置，它能自动执行工作，是靠自身动力和控制能力来实现各种功能的一种机器。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 574,
    type: "single_choice",
    question: "完成某一特定作业时具有多余自由度的机器人称为冗余自由度机器人。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 575,
    type: "single_choice",
    question: "机器人的机身只由臂部运动机构组成。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 576,
    type: "single_choice",
    question: "工作范围是指机器人手臂末端或手腕中心所能到达的所有点的集合，也叫工作区域。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 577,
    type: "single_choice",
    question: "工业机器人的腕部传动多采用RV减速器，臂部则多采用谐波减速器。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 578,
    type: "single_choice",
    question: "直角坐标机器人具有结构紧凑、灵活、占用空间小等优点，是目前工业机器人大多采用的结构形式。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 579,
    type: "single_choice",
    question: "数字量信号的特点是时间和数量上都是离散的。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 580,
    type: "single_choice",
    question: "模拟量信号的特点是时间和数量上都是离散的。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 581,
    type: "single_choice",
    question: "模拟量信号是有0和1两种状态。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 582,
    type: "single_choice",
    question: "球面关节允许两边杆之间有三个独立的相对轴动，这种关节具有三个自由度。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 583,
    type: "single_choice",
    question: "在同一时间，两个同频率正弦交流电的相位之差叫做相位差。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 584,
    type: "single_choice",
    question: "由电阻应变片组成电桥可以构成测量重量的传感器。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 585,
    type: "single_choice",
    question: "激光测距仪可以进行散装物料重量的检测。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 586,
    type: "single_choice",
    question: "电压互感器的二次侧可以短路。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 587,
    type: "single_choice",
    question: "电流互感器的二次侧不允许开路。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "安全与维护"
  },
  {
    id: 588,
    type: "single_choice",
    question: "伺服电动机是工业机器人的主要驱动力，是工业机器人的最关键部件。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 589,
    type: "single_choice",
    question: "摩擦带传动是依靠带与带轮接触面之间的摩擦力来传递运动和功率的。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 590,
    type: "single_choice",
    question: "同步带传动属于低惯性传动。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 591,
    type: "single_choice",
    question: "光纤式传感器的优点的是测距小。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 592,
    type: "single_choice",
    question: "当机器人需要同时和多台设备联动，并且子功能需求较多，对I/O点位总数要求多达几百时，可以通过使用数个I/O点位的状态组成二进制编码的方式来满足需求。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 593,
    type: "single_choice",
    question: "谐波减速机的名称来源是因为刚轮齿圈上任一点的径向位移呈近似于余弦波形的变化。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 594,
    type: "single_choice",
    question: "格林（格雷）码被大量用在相对光轴编码器中。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 595,
    type: "single_choice",
    question: "工业机器人根据所完成的任务的不同，配置的传感器类型和规格也不相同，一般分为内部信息传感器和外部信息传感器。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 596,
    type: "single_choice",
    question: "接触觉传感器主要有：机械式、弹性式和光纤式等。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 597,
    type: "single_choice",
    question: "工字形线性滑轨分为轻型线性滑轨和重型线性滑轨。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 598,
    type: "single_choice",
    question: "常见的仓库分为迷你仓库、单层仓库、多层仓库、圆筒形仓库。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 599,
    type: "single_choice",
    question: "压力传感器是一款红外线感应光电产品，由红外线发射管和红外线接收管组合而成。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 600,
    type: "single_choice",
    question: "电动机在生活中用处很大，其中将直流电能转换为机械能的电动机是交流电机。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 601,
    type: "single_choice",
    question: "微型电感传感器是无接触式的光电开关，具有受检测体的制约少，且检测距离长，可进行长距离的检测，检测精度高能等特点。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 602,
    type: "single_choice",
    question: "在机器人运行过程中，控制装置用于识别、接收和处理分拣信号。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 603,
    type: "single_choice",
    question: "我国的机器人从应用环境出发，将机器人分为两大类：工业机器人和服务机器人。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 604,
    type: "single_choice",
    question: "机器人的腕部是直接连接、支撑和传动手臂及行走机构的部件。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 605,
    type: "single_choice",
    question: "末端执行器具有模仿人手动作的功能，并安装于机器人手臂的前端。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 606,
    type: "single_choice",
    question: "机器人末端执行器的力量来自机器人的全部关节。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "系统集成"
  },
  {
    id: 607,
    type: "single_choice",
    question: "机器人在关节坐标系下完成的动作，无法在直角坐标系下实现。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "坐标与运动学"
  },
  {
    id: 608,
    type: "single_choice",
    question: "夹持式手部分为三种：夹钳式、弹簧式、钩拖式。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "系统集成"
  },
  {
    id: 609,
    type: "single_choice",
    question: "手腕按自由度数目来分，可分为单自由度手腕、二自由度手腕和三自由度手腕。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 610,
    type: "single_choice",
    question: "工业机器人末端手持粉笔在黑板上写字，在Z轴方向只有力的约束而无速度约束。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 611,
    type: "single_choice",
    question: "搬运机器人的TCP的建立尤为重要，一般吸盘类设置在法兰中心线与吸盘底面的交点处，而夹钳类通常设置在法兰中心线与手爪前端面的交点处。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 612,
    type: "single_choice",
    question: "原点位置校准是在出厂前进行的，但在改变机器人与控制柜的组合情况下必须再次进行原点位置校准。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "坐标与运动学"
  },
  {
    id: 613,
    type: "single_choice",
    question: "工业机器人的额定负载是指在规定范围内末端执行器所能承受的最大负载允许值。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 614,
    type: "single_choice",
    question: "目前应用最广泛的装配机器人为六轴垂直关节型，因为其柔性化程度最高，可精确到达动作范围内的任意位姿。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "应用技术"
  },
  {
    id: 615,
    type: "single_choice",
    question: "涂胶方法有刮涂、辊涂、浸涂、喷涂。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "应用技术"
  },
  {
    id: 616,
    type: "single_choice",
    question: "码垛机械手的程序里通常需要1个定位点即可。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "应用技术"
  },
  {
    id: 617,
    type: "single_choice",
    question: "倡导以问题为中心教学并对世界教育产生“前无古人，后无来者”的重大影响的教育家是夸美纽斯。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 618,
    type: "single_choice",
    question: "当前处理学校事故最主要的依据是《学校安全条例》。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 619,
    type: "single_choice",
    question: "学校的安全责任体系中不应当包括普通的任课教师。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 620,
    type: "single_choice",
    question: "任课教师上好课就行了，学生的安全管理应当全部由班主任负责。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 621,
    type: "single_choice",
    question: "学校发生安全事故后，校长要第一时间会见记者。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 622,
    type: "single_choice",
    question: "当遇到危险时一定要等别人来救自己。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 623,
    type: "single_choice",
    question: "学校可以将其他学校制作的应急预案直接作为自己学校的应急预案。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "安全与维护"
  },
  {
    id: 624,
    type: "single_choice",
    question: "学校开展应急演练过程中如有发生危险可能时，应及时停止。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "安全与维护"
  },
  {
    id: 625,
    type: "single_choice",
    question: "操作调整工应该能以企业生产流程为导向，考虑跨越每个人的工作领域的部门间的合作。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 626,
    type: "single_choice",
    question: "在任务的解决过程中，工人不需要体现出创新性。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "B",
    category: "机器人基础"
  },
  {
    id: 627,
    type: "single_choice",
    question: "社会公德是约定俗成的大家共同遵循的行为准则。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
    category: "机器人基础"
  },
  {
    id: 628,
    type: "single_choice",
    question: "提升交往效果和交往质量的重要方法是良好的交往态度。",
    options: {
      A: "正确",
      B: "错误"
    },
    answer: "A",
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