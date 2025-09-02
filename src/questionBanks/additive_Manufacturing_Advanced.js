// 增材制造模型设计职业技能等级证书理论题库（高级）
export const questionBank = [
  // ==================== 多选题部分 ====================
  // 第1题
  {
    id: 1,
    type: "multiple_choice",
    question: "FDM打印机影响精度的因素是",
    options: {
      A: "失步",
      B: "共振",
      C: "材料",
      D: "电压"
    },
    answer: ["A", "B"],
    category: "打印技术"
  },
  
  // 第2题
  {
    id: 2,
    type: "multiple_choice",
    question: "FDM3D打印机，在长时间打印后，出现了出料不畅的情况，有可能是下面哪一问题导致的？（）",
    options: {
      A: "电机丢步",
      B: "送丝轮顶丝松动",
      C: "喷嘴堵料",
      D: "喉管老化"
    },
    answer: ["A", "B", "C", "D"],
    category: "设备管理"
  },
  
  // 第3题
  {
    id: 3,
    type: "multiple_choice",
    question: "以下是FDM设备的功能是",
    options: {
      A: "断电续打",
      B: "断料打印",
      C: "断电检测",
      D: "断电报警"
    },
    answer: ["A", "B", "C", "D"],
    category: "打印技术"
  },
  
  // 第4题
  {
    id: 4,
    type: "multiple_choice",
    question: "下列选项中，哪些是LCD光固化3D打印机的调平操作？（）",
    options: {
      A: "断开电源",
      B: "更换离型膜",
      C: "解锁平台",
      D: "拆下料槽",
      E:"将平台上的树脂擦拭干净"
    },
    answer: ["C", "D", "E"],
    category: "打印技术"
  },
  
  // 第5题
  {
    id: 5,
    type: "multiple_choice",
    question: "下面对光敏树脂材料使用完后的处理办法错误的是（）",
    options: {
      A: "将光敏树脂直接倒入下水道",
      B: "使用过滤网过滤后，回收到透光的瓶子里",
      C: "使用过滤网过滤后，回收到不透光的瓶子里",
      D: "使用过滤网过滤后，放在料槽内即可"
    },
    answer: ["A", "B", "D"],
    category: "材料工程"
  },
  
  // 第6题
  {
    id: 6,
    type: "multiple_choice",
    question: "E4FDM3D打印机可以直接使用（）传输文件",
    options: {
      A: "SD卡",
      B: "网络",
      C: "NM卡",
      D: "U盘"
    },
    answer: ["B", "D"],
    category: "设备管理"
  },
  
  // 第7题
  {
    id: 7,
    type: "multiple_choice",
    question: "Hotpoint回零后一直在撞轴，与其无关的是",
    options: {
      A: "LCD显示屏",
      B: "限位开关",
      C: "开关按钮",
      D: "电机驱动"
    },
    answer: ["A", "C"],
    category: "设备管理"
  },
  
  // 第8题
  {
    id: 8,
    type: "multiple_choice",
    question: "下列不是步进电机特点的是（）。",
    options: {
      A: "是将电脉冲信号转变为角位移或线位移的开环控制元件",
      B: "一般电机的转速、停止位置只取决于脉冲信号的频率和脉冲数",
      C: "给电机加一个脉冲信号，转过步距角",
      D: "有周期性误差"
    },
    answer: ["A", "B", "D"],
    category: "技术基础"
  },
  
  // 第9题
  {
    id: 9,
    type: "multiple_choice",
    question: "5S管理包含以下哪些",
    options: {
      A: "整理",
      B: "整顿",
      C: "清扫",
      D: "清洁"
    },
    answer: ["A", "B", "C", "D"],
    category: "安全规范"
  },
  
  // 第10题
  {
    id: 10,
    type: "multiple_choice",
    question: "5S管理是指（）。",
    options: {
      A: "整理",
      B: "整顿",
      C: "清扫",
      D: "清洁",
      E: "素养"
    },
    answer: ["A", "B", "C", "D", "E"],
    category: "安全规范"
  },
  
  // 第11题
  {
    id: 11,
    type: "multiple_choice",
    question: "光敏树脂不适合于下列那种环境中长期保存",
    options: {
      A: "潮湿的地下室",
      B: "室外堆放",
      C: "在有温度、湿度控制的且密闭的环境中",
      D: "与金属粉末材料同放"
    },
    answer: ["A", "B", "D"],
    category: "材料工程"
  },
  
  // 第12题
  {
    id: 12,
    type: "multiple_choice",
    question: "FDM3D打印机开启后，屏幕提示温度传感器故障有可能是（）损坏造成的。",
    options: {
      A: "加热棒线",
      B: "热敏电阻线",
      C: "加热棒",
      D: "压敏开关线",
      E:"热敏电阻"
    },
    answer: ["B", "E"],
    category: "设备管理"
  },
  
  // 第13题
  {
    id: 13,
    type: "multiple_choice",
    question: "FDM打印机长期不使用后使用发现Z轴上升困难，噪音较大错误的处理方法是（）",
    options: {
      A: "在丝杠上涂抹润滑脂",
      B: "在丝杠上喷水",
      C: "不管不顾",
      D: "加大电压"
    },
    answer: ["B", "C", "D"],
    category: "设备管理"
  },
  
  // 第14题
  {
    id: 14,
    type: "multiple_choice",
    question: "E轴转接板故障不会引起以下哪项问题。（）",
    options: {
      A: "打印头不出料",
      B: "打印错位",
      C: "低温报警",
      D: "打印机不测温"
    },
    answer: ["A", "C", "D"],
    category: "设备管理"
  },
  
  // 第15题
  {
    id: 15,
    type: "multiple_choice",
    question: "设备丝杆运动出现轻微卡顿，以下临时处理方法正确的是：",
    options: {
      A: "用水清洗",
      B: "涂上润滑油",
      C: "涂上机油",
      D: "涂上凡士林"
    },
    answer: ["B", "C", "D"],
    category: "设备管理"
  },
  
  // 第16题
  {
    id: 16,
    type: "multiple_choice",
    question: "以下选项是FDM打印机喷头不加温的故障原因的是。（）",
    options: {
      A: "热敏电阻损坏",
      B: "加热棒损坏",
      C: "主板损坏",
      D: "屏幕损坏"
    },
    answer: ["A", "B", "C"],
    category: "设备管理"
  },
  
  // 第17题
  {
    id: 17,
    type: "multiple_choice",
    question: "GeomagicControlX对齐方式有（）。",
    options: {
      A: "初始对齐",
      B: "最佳拟合对齐",
      C: "RPS对齐",
      D: "转换对齐"
    },
    answer: ["A", "B", "C", "D"],
    category: "软件应用"
  },
  
  // 第18题
  {
    id: 18,
    type: "multiple_choice",
    question: "在GeomagicControlX软件中，（）元素能够通过构造拟合获得。",
    options: {
      A: "平面",
      B: "镀槽",
      C: "椭圆",
      D: "圆柱",
      E:"球"
    },
    answer: ["A", "B", "D", "E"],
    category: "软件应用"
  },
  
  // 第19题
  {
    id: 19,
    type: "multiple_choice",
    question: "用了多年的铅球，其表面磨损了一些，发生变化的是铅球的（）。",
    options: {
      A: "质量",
      B: "体积",
      C: "表面积",
      D: "密度",
      E:"直径"
    },
    answer: ["A", "B", "C", "E"],
    category: "技术基础"
  },
  
  // 第20题
  {
    id: 20,
    type: "multiple_choice",
    question: "IGAM金属机，缸体的升降精度是由（）控制的。",
    options: {
      A: "电机",
      B: "驱动器",
      C: "丝杠",
      D: "减速器"
    },
    answer: ["A", "B", "C"],
    category: "设备管理"
  },
  
  // 第21题
  {
    id: 21,
    type: "multiple_choice",
    question: "在扫描激光点之前，需要进行扫描参数的设置，包括（）等参数。",
    options: {
      A: "扫描解析度",
      B: "精度设置",
      C: "曝光参数设置",
      D: "扫描环境设置",
      E:"扫描物体类型选择"
    },
    answer: ["A", "C", "D", "E"],
    category: "高级应用"
  },
  
  // 第22题
  {
    id: 22,
    type: "multiple_choice",
    question: "IGAM金属机，（）能影响铺粉装置精度。",
    options: {
      A: "刮刀架",
      B: "两侧导轨安装不一致",
      C: "过滤风机风太大",
      D: "两侧滑道损坏"
    },
    answer: ["A", "B", "D"],
    category: "设备管理"
  },
  
  // 第23题
  {
    id: 23,
    type: "multiple_choice",
    question: "下列（）结构的零件不适合做粘合处理",
    options: {
      A: "实心",
      B: "薄壁",
      C: "复杂",
      D: "镂空"
    },
    answer: ["B", "C", "D"],
    category: "工艺优化"
  },
  
  // 第24题
  {
    id: 24,
    type: "multiple_choice",
    question: "3D打印的模型，最常使用的粘合剂为（）。",
    options: {
      A: "AB胶",
      B: "亚克力胶",
      C: "502",
      D: "热熔胶"
    },
    answer: ["A", "C", "D"],
    category: "工艺优化"
  },
  
  // 第25题
  {
    id: 25,
    type: "multiple_choice",
    question: "IGAM金属机，以下数据中哪个不是316L不锈钢粉末材料的熔点",
    options: {
      A: "1300-1500",
      B: "1600-2000",
      C: "2000-2500",
      D: "2500-3000"
    },
    answer: ["B", "C", "D"],
    category: "材料工程"
  },
  
  // 第26题
  {
    id: 26,
    type: "multiple_choice",
    question: "打印的塑料件可以采用（)方式提升表面效果。",
    options: {
      A: "机械加工",
      B: "细砂纸打磨",
      C: "抛光液",
      D: "什锦锉刀"
    },
    answer: ["B", "C", "D"],
    category: "工艺优化"
  },
  
  // 第27题
  {
    id: 27,
    type: "multiple_choice",
    question: "使用喷砂机打磨的主要缺点是（）。",
    options: {
      A: "打磨速度快",
      B: "设备价格相对较昂贵",
      C: "部分特别小的细节会被打磨掉",
      D: "打磨效率高",
      E:"尺寸过大的模型无法放入喷砂机"
    },
    answer: ["B", "C", "E"],
    category: "工艺优化"
  },
  
  // 第28题
  {
    id: 28,
    type: "multiple_choice",
    question: "IGAM金属机，激光不出光，是由下面（）原因导致的。",
    options: {
      A: "冷却机没开，激光过热保护",
      B: "冷却机开了，温度调节过高，导致激光过热保护",
      C: "激光头损坏",
      D: "激光光纤太长"
    },
    answer: ["A", "B", "C"],
    category: "设备管理"
  },
  
  // 第29题
  {
    id: 29,
    type: "multiple_choice",
    question: "FDM3D打印设备，热床跟喷嘴之间的距离下列错误的工具是",
    options: {
      A: "A4纸",
      B: "塞尺",
      C: "板尺",
      D: "卡尺"
    },
    answer: ["B", "C", "D"],
    category: "设备管理"
  },
  
  // 第30题
  {
    id: 30,
    type: "multiple_choice",
    question: "以下不属于化学处理打印制件的是：",
    options: {
      A: "支撑切割",
      B: "电解抛光",
      C: "震动抛光",
      D: "喷砂"
    },
    answer: ["A", "C", "D"],
    category: "工艺优化"
  },
  
  // 第31题
  {
    id: 31,
    type: "multiple_choice",
    question: "只有（）可以使用化学抛光。",
    options: {
      A: "PETG",
      B: "TPU",
      C: "ABS",
      D: "碳纤维",
      E:"PLA"
    },
    answer: ["C", "E"],
    category: "材料工程"
  },
  
  // 第32题
  {
    id: 32,
    type: "multiple_choice",
    question: "IGAM金属机，过滤器没有风运行，下列选项正确的是",
    options: {
      A: "过滤器损坏",
      B: "变频器设置出问题",
      C: "管道接反了",
      D: "供电问题"
    },
    answer: ["A", "B", "D"],
    category: "设备管理"
  },
  
  // 第33题
  {
    id: 33,
    type: "multiple_choice",
    question: "对金属增材制造后处理中，方法正确的是（）。",
    options: {
      A: "喷砂处理",
      B: "高压气处理",
      C: "用盐酸清洗",
      D: "去除支撑"
    },
    answer: ["A", "B", "D"],
    category: "工艺优化"
  },
  
  // 第34题
  {
    id: 34,
    type: "multiple_choice",
    question: "在更换X轴转接板时，需要将（）一并拆下。",
    options: {
      A: "E轴转接板",
      B: "E轴电机线",
      C: "X轴排线",
      D: "E轴排线",
      E:"X轴电机"
    },
    answer: ["C", "E"],
    category: "设备管理"
  },
  
  // 第35题
  {
    id: 35,
    type: "multiple_choice",
    question: "FDM设备，Z轴下降精度不准，下列选项正确的是：",
    options: {
      A: "Z轴丝杠紧固螺钉松动",
      B: "电机损坏",
      C: "丝杆损坏",
      D: "打印零件过重"
    },
    answer: ["A", "B", "C"],
    category: "设备管理"
  },
  
  // 第36题
  {
    id: 36,
    type: "multiple_choice",
    question: "金属3D打印的零件，零件后处理会用到哪些工具（）。",
    options: {
      A: "线切割机",
      B: "喷砂机",
      C: "抛光机",
      D: "切割机"
    },
    answer: ["A", "B", "C"],
    category: "工艺优化"
  },
  
  // 第37题
  {
    id: 37,
    type: "multiple_choice",
    question: "喷涂法的主要是使用（）上色。",
    options: {
      A: "喷笔",
      B: "自喷漆",
      C: "排笔",
      D: "色粉"
    },
    answer: ["A", "B"],
    category: "工艺优化"
  },
  
  // 第38题
  {
    id: 38,
    type: "multiple_choice",
    question: "IGAM金属机，电气柜布局，下列哪项正确",
    options: {
      A: "强电，弱电分开",
      B: "强电跟信号线一起",
      C: "电器元件位置摆放合理",
      D: "电气原件需接地线"
    },
    answer: ["A", "C", "D"],
    category: "设备管理"
  },
  
  // 第39题
  {
    id: 39,
    type: "multiple_choice",
    question: "下列对于金属3D打印制件的后处理描述正确的是。",
    options: {
      A: "金属打印机在制件工作结束后，我们需要做制件的内部和表面的清洁工作。",
      B: "把基板和制件从打印机取出，清洁干净剩余物料。",
      C: "对于复杂的有空心内腔的制件，用嘴吹除剩余的物料。",
      D: "深孔和弯曲的复杂内腔可以借助试管毛刷清除内部剩余物料。"
    },
    answer: ["A", "B", "D"],
    category: "工艺优化"
  },
  
  // 第40题
  {
    id: 40,
    type: "multiple_choice",
    question: "E4FDM3D打印机有（）根光杠，（）根丝杠。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: ["B", "C"],
    category: "设备管理"
  },
  
  // 第41题
  {
    id: 41,
    type: "multiple_choice",
    question: "IGAM金属机，铺粉系统的皮带轮跟笺用以下哪几种工具无法使其紧固",
    options: {
      A: "AB胶",
      B: "502胶",
      C: "顶丝",
      D: "螺钉"
    },
    answer: ["A", "B", "D"],
    category: "设备管理"
  },
  
  // 第42题
  {
    id: 42,
    type: "multiple_choice",
    question: "3D打印技术后处理的关键技术包括以下哪项（）。",
    options: {
      A: "打磨抛光",
      B: "溶浸",
      C: "热等静压烧结",
      D: "高温烧结"
    },
    answer: ["A", "B", "D"],
    category: "工艺优化"
  },
  
  // 第43题
  {
    id: 43,
    type: "multiple_choice",
    question: "对于高精的零件，单一的打磨方式并不能完全满足零件需求，往往需要（）。",
    options: {
      A: "打磨笔打磨",
      B: "砂纸打磨",
      C: "根据零件结构选择多种方式配合操作",
      D: "喷砂机打磨",
      E:"根据不同结构选择不同工具进行打磨"
    },
    answer: ["C", "E"],
    category: "工艺优化"
  },
  
  // 第44题
  {
    id: 44,
    type: "multiple_choice",
    question: "IGAM金属机，铺粉系统不是由下列哪种流程完成的",
    options: {
      A: "电机带动同步带运动",
      B: "同步带带动电机运动",
      C: "减速机带动同步带运动",
      D: "同步带带动减速机运动"
    },
    answer: ["B", "C", "D"],
    category: "技术基础"
  },
  
  // 第45题
  {
    id: 45,
    type: "multiple_choice",
    question: "在3D打印机打印过程中，（）不能控制打印操作",
    options: {
      A: "系统",
      B: "机械组件",
      C: "打印头",
      D: "送料机"
    },
    answer: ["B", "C", "D"],
    category: "设备管理"
  },
  
  // 第46题
  {
    id: 46,
    type: "multiple_choice",
    question: "工件定位中，由于（）基准和（）基准不重合而产生的加工误差，称为基准不重合误差。",
    options: {
      A: "设计",
      B: "工艺",
      C: "测量",
      D: "定位"
    },
    answer: ["B", "D"],
    category: "技术基础"
  },
  
  // 第47题
  {
    id: 47,
    type: "multiple_choice",
    question: "产品的结构工艺性是指在满足使用要求的前提下，其制造、维修的（）。",
    options: {
      A: "继承性",
      B: "经济性",
      C: "可行性",
      D: "可靠性"
    },
    answer: ["B", "C"],
    category: "技术基础"
  },
  
  // 第48题
  {
    id: 48,
    type: "multiple_choice",
    question: "SLM工艺打印，打印316L不锈钢，以下参数不满足打印工艺的是：",
    options: {
      A: "层厚0.05mm，激光功率50瓦，速度1000mm/s",
      B: "层厚0.03mm，激光功率400瓦，速度1000mm/s",
      C: "层厚0.03mm，激光功率260瓦，速度500mm/s",
      D: "层厚0.05mm，激光功率260瓦，速度1000mm/s"
    },
    answer: ["A", "B", "C"],
    category: "打印技术"
  },
  
  // 第49题
  {
    id: 49,
    type: "multiple_choice",
    question: "下列缺陷中的（）是使用过程中出现的缺陷",
    options: {
      A: "疲劳裂纹",
      B: "气孔",
      C: "发纹",
      D: "应力腐蚀裂纹"
    },
    answer: ["A", "D"],
    category: "工艺优化"
  },
  
  // 第50题
  {
    id: 50,
    type: "multiple_choice",
    question: "SLM工艺打印金属制件扫描方式对制件性能至关重要，以下属于SLM激光扫描方式的是",
    options: {
      A: "逐行扫描",
      B: "倾斜分区",
      C: "螺旋扫描",
      D: "逐列扫描"
    },
    answer: ["A", "B", "C", "D"],
    category: "打印技术"
  },
  
  // 第51题
  {
    id: 51,
    type: "multiple_choice",
    question: "零件渗碳后一般须经（）和（）处理，才能使表面硬而耐磨。",
    options: {
      A: "淬火",
      B: "低温回火",
      C: "正火",
      D: "调质"
    },
    answer: ["A", "B"],
    category: "材料工程"
  },
  
  // 第52题
  {
    id: 52,
    type: "multiple_choice",
    question: "常见的力学性能测试，包括（）。",
    options: {
      A: "拉伸试验",
      B: "压缩试验",
      C: "金相试验",
      D: "剪切试验",
      E:"抗弯试验"
    },
    answer: ["A", "B", "D", "E"],
    category: "工艺优化"
  },
  
  // 第53题
  {
    id: 53,
    type: "multiple_choice",
    question: "SLA打印完成后正确的操作是（）",
    options: {
      A: "流出多余的树脂",
      B: "酒精清洗",
      C: "二次固化",
      D: "放在太阳光下"
    },
    answer: ["A", "B", "C"],
    category: "打印技术"
  },
  
  // 第54题
  {
    id: 54,
    type: "multiple_choice",
    question: "光固化打印机曝光时间太短会导致哪些问题（）。",
    options: {
      A: "模型脱落",
      B: "打印翘边",
      C: "模型细节打印不出来",
      D: "模型比较难取"
    },
    answer: ["A", "B", "C"],
    category: "打印技术"
  },
  
  // 第55题
  {
    id: 55,
    type: "multiple_choice",
    question: "常见的硬度单位有（）。",
    options: {
      A: "HB",
      B: "HRC",
      C: "HV",
      D: "HL"
    },
    answer: ["A", "B", "C"],
    category: "工艺优化"
  },
  
  // 第56题
  {
    id: 56,
    type: "multiple_choice",
    question: "光固化机型，打印完成后，需要做的是（）。",
    options: {
      A: "取下模型",
      B: "取下料槽",
      C: "超声波清洗",
      D: "二次固化"
    },
    answer: ["A", "C", "D"],
    category: "打印技术"
  },
  
  // 第57题
  {
    id: 57,
    type: "multiple_choice",
    question: "力学性能指标包括（）。",
    options: {
      A: "拉伸强度",
      B: "断裂伸长率",
      C: "硬度",
      D: "弹性模量",
      E:"冲击强度"
    },
    answer: ["A", "B", "C", "D", "E"],
    category: "工艺优化"
  },
  
  // 第58题
  {
    id: 58,
    type: "multiple_choice",
    question: "以下哪些参数可以控制成型效果（）",
    options: {
      A: "打印层厚",
      B: "打印速度",
      C: "打印温度",
      D: "风扇转速"
    },
    answer: ["A", "B"],
    category: "设备管理"
  },
  
  // 第59题
  {
    id: 59,
    type: "multiple_choice",
    question: "常用于硬度检测的仪器有（）。",
    options: {
      A: "显微镜",
      B: "布氏硬度计",
      C: "洛氏硬度计",
      D: "里氏硬度计",
      E:"维氏硬度计 "
    },
    answer: ["B", "C", "D", "E"],
    category: "工艺优化"
  },
  
  // 第60题
  {
    id: 60,
    type: "multiple_choice",
    question: "下列关于SLM制件描述正确的是（）",
    options: {
      A: "检查工艺参数是否符合加工工艺，机器内是否留有杂物",
      B: "冲入保护气进行加工，观察打印零件时必须佩戴安全防护眼镜。",
      C: "在加工的过程中，经常观察氧含量、粉盒剩下的粉量等。",
      D: "加工过程中可直接打开工作腔观察制件是否发生球化、发黑、翘起等不利现象。"
    },
    answer: ["A", "B", "C"],
    category: "打印技术"
  },
  
  // 第61题
  {
    id: 61,
    type: "multiple_choice",
    question: "下列是EBSM核心器件的是",
    options: {
      A: "电子枪系统",
      B: "真空系统",
      C: "控制系统",
      D: "软件系统"
    },
    answer: ["A", "B", "C", "D"],
    category: "打印技术"
  },
  
  // 第62题
  {
    id: 62,
    type: "multiple_choice",
    question: "目前不是激光选区熔化沉积技术材料（）",
    options: {
      A: "丝材",
      B: "球形粉",
      C: "板材",
      D: "棒材"
    },
    answer: ["A", "C", "D"],
    category: "材料工程"
  },
  
  // 第63题
  {
    id: 63,
    type: "multiple_choice",
    question: "以下对激光类3D打印设备扫描测量描述正确的是（）",
    options: {
      A: "SLM工艺打印设备，只要打印开始后，就无需修改打印策略",
      B: "SLA工艺在打印过程中，可以修改扫描参数",
      C: "SLM工艺在打印过程中，可以根据打印件的表面效果，进行工艺参数及扫描策略的修改",
      D: "在打印过程中，可以随时修改扫描策略，扫描策略无需考虑打印件结构"
    },
    answer: ["B", "C"],
    category: "设备管理"
  },
  
  // 第64题
  {
    id: 64,
    type: "multiple_choice",
    question: "以下对打印耗材管理描述正确的是（）",
    options: {
      A: "能对打印耗进行编码标准，并进行归类存储",
      B: "FDM打印丝材需要长期不用需要进行密封保存",
      C: "光敏树脂打印耗材需要隔绝紫外光",
      D: "打印耗材可以长期存放在打印设备中"
    },
    answer: ["A", "B", "C"],
    category: "材料工程"
  },
  
  // 第65题
  {
    id: 65,
    type: "multiple_choice",
    question: "电弧增材制造技术描述正确的是：（）",
    options: {
      A: "打印耗材为金属丝材",
      B: "适合应用在修复或大型毛坯件的制造",
      C: "打印制件表面效果精细，无需二次加工",
      D: "电弧增材制造技术可应用在医疗领域"
    },
    answer: ["A", "B"],
    category: "打印技术"
  },
  
  // 第66题
  {
    id: 66,
    type: "multiple_choice",
    question: "电子束选区熔化成型技术（EBM）用于金属制件的快速成型，对其描述正确的是",
    options: {
      A: "电子束选区熔化成型技术成型速度比SLM技术快，电子束扫描速度可达60m/s",
      B: "电子束成型技术在真空环境下成型，制件不会被氧气氧化",
      C: "电子束成型技术打印的金属制件表面效果光滑，优于SLM成型技术打印的制件表面效果",
      D: "电子束成型技术预热温度可达到300°C以上，制件力学性能更好"
    },
    answer: ["A", "B", "C"],
    category: "打印技术"
  },
  
  // 第67题
  {
    id: 67,
    type: "multiple_choice",
    question: "下列关于EBSM说法正确的是（）",
    options: {
      A: "EBSM利用激光束为能量源，在真空保护下高速扫描加热预置的粉末，通过逐层熔化叠加制造零件",
      B: "EBSM成形技术无法满足大尺寸零件成形",
      C: "EBSM成形技术尤其适用于成形稀有难熔金属及脆性材料，在航空航天、医疗、石油化工及汽车等领域有巨大的需求",
      D: "EBSM成形工艺粉末溃散特点是指当电子束高速轰击金属原子使之加热、升温时，电子的部分动能也直接转化为粉末微粒的动能，金属粉末在成形熔化前偏离原来位置，无法进行后续的成形工作"
    },
    answer: ["B", "C", "D"],
    category: "打印技术"
  },
  
  // 第68题
  {
    id: 68,
    type: "multiple_choice",
    question: "以下关于SLM加工过程中涉及的工艺参数描述正确的是（）",
    options: {
      A: "熔覆道，指激光融化粉末凝固后形成的熔池。",
      B: "扫描速度，指激光光斑沿扫描轨迹运动的速度。",
      C: "激光功率，指激光器的额定输出功率，单位为W。",
      D: "铺粉层厚，指每一次铺粉前工作缸下降的高度。"
    },
    answer: ["A", "B", "D"],
    category: "打印技术"
  },
  
  // 第69题
  {
    id: 69,
    type: "multiple_choice",
    question: "Modellight切片软件中，设置一栏可以进行哪些设置？（）",
    options: {
      A: "切片设置",
      B: "不同高度切片设置",
      C: "逐个打印设置",
      D: "导出设置",
      E: "工厂模式设置" 
    },
    answer: ["A", "B", "C", "E"],
    category: "软件应用"
  },
  
  // 第70题
  {
    id: 70,
    type: "multiple_choice",
    question: "以下能提升打印件力学性能的是：（）",
    options: {
      A: "提升铺粉速度",
      B: "打印制件热处理",
      C: "进行激光二次淬火",
      D: "喷砂处理"
    },
    answer: ["B", "C"],
    category: "工艺优化"
  },
  
  // 第71题
  {
    id: 71,
    type: "multiple_choice",
    question: "SLM在制件中，往往会添加支撑结构，下列选项中是添加支撑结构起到的作用的是（）",
    options: {
      A: "防止零件局部翘曲",
      B: "防止零件局部变形",
      C: "保持加工稳定性",
      D: "增加制件美观性"
    },
    answer: ["A", "B", "C"],
    category: "技术基础"
  },
  
  // 第72题
  {
    id: 72,
    type: "multiple_choice",
    question: "以下属于立体光固化技术打印的后处理主要步骤的是（）",
    options: {
      A: "用蒸馏水泡洗拆除支撑",
      B: "干燥样件",
      C: "清水冲洗样件",
      D: "以上都是"
    },
    answer: ["A", "B", "C", "D"],
    category: "工艺优化"
  },
  
  // 第73题
  {
    id: 73,
    type: "multiple_choice",
    question: "在金属3D打印机制件前需对其进行设备调试，下列描述中正确的是（）",
    options: {
      A: "观察氧含量仪表读数和实际氧含量仪表读数是否一致。",
      B: "调试缸体和铺粉系统正常升降和铺粉送粉。",
      C: "打开加热功能，使得温度快速上升。",
      D: "观察振镜开关按钮是否已打开。"
    },
    answer: ["A", "B", "D"],
    category: "设备管理"
  },
  
  // 第74题
  {
    id: 74,
    type: "multiple_choice",
    question: "在FDM切片软件中，修改（）参数可以缩短打印时间。",
    options: {
      A: "材料类型",
      B: "外壳打印速度",
      C: "填充打印速度",
      D: "填充率",
      E:"层高"
    },
    answer: ["B", "C", "D", "E"],
    category: "软件应用"
  },
  
  // 第75题
  {
    id: 75,
    type: "multiple_choice",
    question: "属于打印切片文件的是",
    options: {
      A: "slc",
      B: "cbt",
      C: "gcode",
      D: "nc"
    },
    answer: ["A", "B", "C"],
    category: "软件应用"
  },
  
  // 第76题
  {
    id: 76,
    type: "multiple_choice",
    question: "将模型导入Modellight后，模型上呈现绿色，说明（）。",
    options: {
      A: "模型法线出现问题",
      B: "壁厚太薄",
      C: "壁厚太厚",
      D: "有漏洞",
      E: "模型存在错误面"
    },
    answer: ["A", "D", "E"],
    category: "软件应用"
  },
  
  // 第77题
  {
    id: 77,
    type: "multiple_choice",
    question: "光固化快速成型工艺中，有时需要添加支撑结构，支撑结构的主要作用正确的是（）。",
    options: {
      A: "防止翘曲变形保证形状",
      B: "有利于美观",
      C: "防止悬空",
      D: "以上都是"
    },
    answer: ["A", "B", "D"],
    category: "技术基础"
  },
  
  // 第78题
  {
    id: 78,
    type: "multiple_choice",
    question: "虚拟仿真平台中可以使用的工具有",
    options: {
      A: "塞尺",
      B: "毛刷",
      C: "螺栓",
      D: "六角扳手"
    },
    answer: ["A", "B", "C", "D"],
    category: "软件应用"
  },
  
  // 第79题
  {
    id: 79,
    type: "multiple_choice",
    question: "金属3D打印中需要冷水机的使用，冷水机不能加入的水为（）",
    options: {
      A: "蒸馏水",
      B: "自来水",
      C: "碳酸水",
      D: "苏打水"
    },
    answer: ["B", "C", "D"],
    category: "设备管理"
  },
  
  // 第80题
  {
    id: 80,
    type: "multiple_choice",
    question: "E4型号FDM3D打印机有（）。",
    options: {
      A: "调平旋钮",
      B: "离型膜",
      C: "SD卡卡槽",
      D: "近端送料电机",
      E:"远端送料电机"
    },
    answer: ["D", "E"],
    category: "设备管理"
  },
  
  // 第81题
  {
    id: 81,
    type: "multiple_choice",
    question: "金属3D打印前，需选用刮刀，下列中哪些是铺粉刮刀采用的种类（）",
    options: {
      A: "塑料",
      B: "金属",
      C: "陶瓷",
      D: "橡胶"
    },
    answer: ["A", "B", "C"],
    category: "设备管理"
  },
  
  // 第82题
  {
    id: 82,
    type: "multiple_choice",
    question: "FDM3D打印机，在调平时，涉及到的硬件有（）.",
    options: {
      A: "X轴排线",
      B: "压敏开关",
      C: "平台玻璃板",
      D: "打印头"
    },
    answer: ["B", "C", "D"],
    category: "设备管理"
  },
  
  // 第83题
  {
    id: 83,
    type: "multiple_choice",
    question: "冷水机温度应该设置为主回路（）外光路（）",
    options: {
      A: "22",
      B: "23",
      C: "25",
      D: "26"
    },
    answer: ["A", "D"],
    category: "设备管理"
  },
  
  // 第84题
  {
    id: 84,
    type: "multiple_choice",
    question: "SLM作为增材制造技术的一种，它具备了增材制造的一般优点，下列关于SLM成型的金属零部件的特点描述正确的是（）",
    options: {
      A: "从理论上讲，任何金属粉末都可以通过SLM技术直接成型具有一定功能的金属零部件",
      B: "SLM制件的内部组织是在快速融化/凝固的条件下形成的，显微组织往往具备晶粒尺寸大、组织细化、增强相弥散分布等优点。",
      C: "SLM过程中金属粉末被完全融化而达到一个液态平衡，大大提高了金属部件的致密度。",
      D: "激光束光斑直径小，能量密度高，全程由计算机系统控制成型路径，成型尺寸精度高，表面粗糙度低。"
    },
    answer: ["A", "B", "C", "D"],
    category: "打印技术"
  },
  
  // 第85题
  {
    id: 85,
    type: "multiple_choice",
    question: "金属3D打印中，工作腔体中需要通入保护气氛，下列中哪些气氛是错误的（）",
    options: {
      A: "氩气",
      B: "氧气",
      C: "氨气",
      D: "一氧化碳"
    },
    answer: ["B", "C", "D"],
    category: "设备管理"
  },
  
  // 第86题
  {
    id: 86,
    type: "multiple_choice",
    question: "金属3D打印前，需设置打印参数，加工层厚，下列哪项参数可以打印。",
    options: {
      A: "0.03mm",
      B: "0.04mm",
      C: "0.05mm",
      D: "0.1mm"
    },
    answer: ["A", "B", "C"],
    category: "设备管理"
  },
  
  // 第87题
  {
    id: 87,
    type: "multiple_choice",
    question: "在增材制造虚拟仿真平台中，下列那些属于实操模拟需要使用的工具",
    options: {
      A: "六方扳手",
      B: "塞尺",
      C: "橡胶刮刀",
      D: "卷尺"
    },
    answer: ["A", "B", "C"],
    category: "软件应用"
  },
  
  // 第88题
  {
    id: 88,
    type: "multiple_choice",
    question: "在SLM制件中，往往会添加支撑结构，下列选项中是添加支撑结构起到的作用的是（）",
    options: {
      A: "防止零件局部翘曲",
      B: "防止零件局部变形",
      C: "保持加工稳定性",
      D: "增加制件美观性"
    },
    answer: ["A", "B", "C"],
    category: "技术基础"
  },
  
  // 第89题
  {
    id: 89,
    type: "multiple_choice",
    question: "下列属于STL文件常见的缺陷",
    options: {
      A: "法向错误",
      B: "孔洞",
      C: "缝隙",
      D: "错误边界"
    },
    answer: ["A", "B", "C", "D"],
    category: "软件应用"
  },
  
  // 第90题
  {
    id: 90,
    type: "multiple_choice",
    question: "在GeoagicDesignX软件中，创建曲面可以使用（）命令。",
    options: {
      A: "面片拟合",
      B: "放样向导",
      C: "延长曲面",
      D: "布尔运算"
    },
    answer: ["A", "B"],
    category: "软件应用"
  },
  
  // 第91题
  {
    id: 91,
    type: "multiple_choice",
    question: "在（）软件中可以对STL文件进行优化和修补。",
    options: {
      A: "Geomagicwrap",
      B: "GeomagicDesignX",
      C: "GeomagicControlX",
      D: "NX"
    },
    answer: ["A", "B"],
    category: "软件应用"
  },
  
  // 第92题
  {
    id: 92,
    type: "multiple_choice",
    question: "绘制领域组，里面包含（）命令。",
    options: {
      A: "合并",
      B: "分割",
      C: "插入",
      D: "重分块"
    },
    answer: ["A", "B", "C", "D"],
    category: "软件应用"
  },
  
  // 第93题
  {
    id: 93,
    type: "multiple_choice",
    question: "在（）软件中可以查看实体模型与点云模型对比的精度。",
    options: {
      A: "Geomagicwrap",
      B: "GeomagicDesignX",
      C: "GeomagicControlX",
      D: "NX"
    },
    answer: ["B", "C"],
    category: "软件应用"
  },
  
  // 第94题
  {
    id: 94,
    type: "multiple_choice",
    question: "三角面片数据的简化可以按（）设置",
    options: {
      A: "80",
      B: "60",
      C: "120",
      D: "20"
    },
    answer: ["A", "B", "D"],
    category: "软件应用"
  },
  
  // 第95题
  {
    id: 95,
    type: "multiple_choice",
    question: "封装的三角面片数据在打印前需要（）操作",
    options: {
      A: "填充缺失的孔洞",
      B: "删除凸起钉状物",
      C: "减少噪音优化三角面片",
      D: "修改单位为mm"
    },
    answer: ["A", "B", "C", "D"],
    category: "软件应用"
  },
  
  // 第96题
  {
    id: 96,
    type: "multiple_choice",
    question: "在进行多个模型导入时可（）操作",
    options: {
      A: "多个数据一起拖入",
      B: "分别拖入模型树",
      C: "点导入依次导入",
      D: "拖入视图显示区域"
    },
    answer: ["A", "B", "C", "D"],
    category: "软件应用"
  },
  
  // 第97题
  {
    id: 97,
    type: "multiple_choice",
    question: "填充单个孔的时候（）位置不容易修补",
    options: {
      A: "平面",
      B: "曲面",
      C: "圆角",
      D: "孔洞"
    },
    answer: ["C", "D"],
    category: "软件应用"
  },
  
  // 第98题
  {
    id: 98,
    type: "multiple_choice",
    question: "扫描工件时要注意（）",
    options: {
      A: "公共点最少2个",
      B: "扫描距离为600m",
      C: "黑色材质物体需喷粉",
      D: "粘贴标志点避免对此粘贴"
    },
    answer: ["C", "D"],
    category: "高级应用"
  },
  
  // 第99题
  {
    id: 99,
    type: "multiple_choice",
    question: "一般分析工作流程包含以下选项（）",
    options: {
      A: "材料属性应用于几何体",
      B: "创建新的FEM和仿真",
      C: "修复多边形几何体",
      D: "分割面"
    },
    answer: ["A", "B"],
    category: "软件应用"
  },
  
  // 第100题
  {
    id: 100,
    type: "multiple_choice",
    question: "在进行扫描时我们可用调整（）来使扫描质量更优",
    options: {
      A: "曝光度",
      B: "扫描距离",
      C: "扫描角度",
      D: "体外孤点"
    },
    answer: ["A", "B", "C"],
    category: "高级应用"
  },
  
  // 第101题
  {
    id: 101,
    type: "multiple_choice",
    question: "3D偏差中涵盖的偏差类型有",
    options: {
      A: "最大名义值",
      B: "最大临界值",
      C: "最小名义值",
      D: "最小临界值"
    },
    answer: ["A", "B", "C", "D"],
    category: "工艺优化"
  },
  
  // 第102题
  {
    id: 102,
    type: "multiple_choice",
    question: "在GeomagicDesignX软件中，手动对齐下，3-2-1的方式中包含以下哪几项（）",
    options: {
      A: "领域",
      B: "位置",
      C: "平面",
      D: "线"
    },
    answer: ["B", "C", "D"],
    category: "软件应用"
  },
  
  // 第103题
  {
    id: 103,
    type: "multiple_choice",
    question: "境界偏差命令可应用于以下哪些内容（）",
    options: {
      A: "分析外部形状",
      B: "分析磨损",
      C: "分析钣金件中的孔",
      D: "剪切线检测"
    },
    answer: ["A", "C", "D"],
    category: "软件应用"
  },
  
  // 第104题
  {
    id: 104,
    type: "multiple_choice",
    question: "为了处理三角面片数据可以通过（）命令进行优化",
    options: {
      A: "删除非连接项",
      B: "减少噪音",
      C: "删除钉状物",
      D: "去除特征"
    },
    answer: ["B", "C", "D"],
    category: "软件应用"
  },
  
  // 第105题
  {
    id: 105,
    type: "multiple_choice",
    question: "关于粘贴标志点的方法错误的是（）。",
    options: {
      A: "粘贴在同一直线上",
      B: "粘贴在特征较多位置",
      C: "尽量粘贴在平面",
      D: "随意任何位置粘贴"
    },
    answer: ["A", "B", "D"],
    category: "高级应用"
  },
  
  // 第106题
  {
    id: 106,
    type: "multiple_choice",
    question: "数据对比可执行的命令有",
    options: {
      A: "2D比较",
      B: "3D比较",
      C: "3D尺寸",
      D: "3D尺寸"
    },
    answer: ["A", "B", "C"],
    category: "软件应用"
  },
  
  // 第107题
  {
    id: 107,
    type: "multiple_choice",
    question: "在使用扫描仪时，扫描的方式分别包括（）。",
    options: {
      A: "利用转盘",
      B: "不使用转盘",
      C: "手动拼接",
      D: "以上都错"
    },
    answer: ["A", "B"],
    category: "高级应用"
  },
  
  // 第108题
  {
    id: 108,
    type: "multiple_choice",
    question: "装配方法有哪些（）",
    options: {
      A: "互换装配法",
      B: "分组装配法",
      C: "修配法",
      D: "调整法"
    },
    answer: ["A", "B", "C", "D"],
    category: "技术基础"
  },
  
  // 第109题
  {
    id: 109,
    type: "multiple_choice",
    question: "世界范围内的FDM3D打印机使用的耗材主要有三种规格分别是（）。",
    options: {
      A: "1.75mm",
      B: "2.85mm",
      C: "3.25mm",
      D: "2.00mm",
      E: "3.00mm"
    },
    answer: ["A", "B", "E"],
    category: "材料工程"
  },
  
  // 第110题
  {
    id: 110,
    type: "multiple_choice",
    question: "影响成型效果的因素有（）",
    options: {
      A: "打印层厚",
      B: "打印速度",
      C: "支撑参数",
      D: "后处理工艺"
    },
    answer: ["A", "B", "C", "D"],
    category: "工艺优化"
  },
  
  // 第111题
  {
    id: 111,
    type: "multiple_choice",
    question: "Modellight切片软件中，修改哪些参数可以增加打印件的强度。",
    options: {
      A: "打印速度",
      B: "支撑密度",
      C: "填充率",
      D: "壁厚",
      E:"内部填充图案"
    },
    answer: ["C", "D", "E"],
    category: "软件应用"
  },
  
  // 第112题
  {
    id: 112,
    type: "multiple_choice",
    question: "FDM常用的材料（）",
    options: {
      A: "ABS",
      B: "PLA",
      C: "尼龙",
      D: "玻璃"
    },
    answer: ["A", "B", "C"],
    category: "材料工程"
  },
  
  // 第113题
  {
    id: 113,
    type: "multiple_choice",
    question: "某个模型由多个零部件组成，不同部件分别有柔性、轻量化及强度、环保的要求，请问用哪些材料比较合适（）。",
    options: {
      A: "TPU",
      B: "PETG",
      C: "PLA",
      D: "碳纤维"
    },
    answer: ["A", "C", "D"],
    category: "材料工程"
  },
  
  // 第114题
  {
    id: 114,
    type: "multiple_choice",
    question: "在切片软件中，与拉丝有关的切片参数是（）。",
    options: {
      A: "回抽长度",
      B: "回抽速度",
      C: "打印温度",
      D: "模型结构"
    },
    answer: ["A", "B", "C"],
    category: "软件应用"
  },
  
  // ==================== 单选题部分 ====================
  // 第115题
  {
    id: 115,
    type: "single_choice",
    question: "设备故障维修中最长使用的方法是（）。",
    options: {
      A: "枚举法",
      B: "排除法",
      C: "穷举法",
      D: "假设法"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第116题
  {
    id: 116,
    type: "single_choice",
    question: "FDM的耗材如果长时间为使用，在打印时不出料，最优先考虑的情况是（）。",
    options: {
      A: "快拆块",
      B: "耗材受潮断裂",
      C: "导料管",
      D: "送料电机"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第117题
  {
    id: 117,
    type: "single_choice",
    question: "在停电后保证FDM设备还能继续工作20分钟左右的功能是（）。",
    options: {
      A: "断电续打",
      B: "断料打印",
      C: "断电检测",
      D: "断电报警"
    },
    answer: "A",
    category: "打印技术"
  },
  
  // 第118题
  {
    id: 118,
    type: "single_choice",
    question: "LCD光固化3D打印机调平需要（）。",
    options: {
      A: "断开电源",
      B: "取下平台",
      C: "取下料槽",
      D: "取下调平螺丝"
    },
    answer: "C",
    category: "打印技术"
  },
  
  // 第119题
  {
    id: 119,
    type: "single_choice",
    question: "LCD光固化3D打印机调平使用（）辅助操作。",
    options: {
      A: "卡尺",
      B: "卷尺",
      C: "调平尺",
      D: "A4纸"
    },
    answer: "D",
    category: "打印技术"
  },
  
  // 第120题
  {
    id: 120,
    type: "single_choice",
    question: "LCD光固化3D打印机调平需先将（）。",
    options: {
      A: "电源断开",
      B: "平台解锁",
      C: "锁定平台",
      D: "三轴复位"
    },
    answer: "B",
    category: "打印技术"
  },
  
  // 第121题
  {
    id: 121,
    type: "single_choice",
    question: "EL1型号的3D打印机可以使用（）传输文件",
    options: {
      A: "数据线",
      B: "SD卡",
      C: "U盘",
      D: "TF卡"
    },
    answer: "C",
    category: "设备管理"
  },
  
  // 第122题
  {
    id: 122,
    type: "single_choice",
    question: "下面对光敏树脂材料使用完后的处理办法正确的是()",
    options: {
      A: "将光敏树脂直接倒入下水道",
      B: "使用过滤网过滤后，回收到透光的瓶子里",
      C: "使用过滤网过滤后，回收到不透光的瓶子里",
      D: "使用过滤网过滤后，放在料槽内即可"
    },
    answer: "C",
    category: "材料工程"
  },
  
  // 第123题
  {
    id: 123,
    type: "single_choice",
    question: "HotPiont型号的3D打印机可以使用（）传输文件",
    options: {
      A: "数据线",
      B: "SD卡",
      C: "U盘",
      D: "TF卡"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第124题
  {
    id: 124,
    type: "single_choice",
    question: "Hotpoint更换喷头后，应在喷头上安装（）",
    options: {
      A: "步进电机",
      B: "加热棒及热敏电阻",
      C: "开关按钮",
      D: "电机驱动"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第125题
  {
    id: 125,
    type: "single_choice",
    question: "FDM3D打印机可以直接使用（）传输文件",
    options: {
      A: "SD卡",
      B: "TF卡",
      C: "NM卡",
      D: "U盘"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第126题
  {
    id: 126,
    type: "single_choice",
    question: "FDM设备开机后点击喷头加温后，温度始终无法升上去有可能是（）的问题",
    options: {
      A: "加热棒线",
      B: "热敏电阻线",
      C: "Z轴排线",
      D: "压敏开关线"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第127题
  {
    id: 127,
    type: "single_choice",
    question: "料槽底部透明薄膜是（）",
    options: {
      A: "R0膜",
      B: "防水膜",
      C: "反渗透膜",
      D: "离型膜"
    },
    answer: "D",
    category: "打印技术"
  },
  
  // 第128题
  {
    id: 128,
    type: "single_choice",
    question: "Hotpoint回零后一直在撞轴，应检查（）",
    options: {
      A: "步进电机",
      B: "限位开关",
      C: "开关按钮",
      D: "电机驱动"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第129题
  {
    id: 129,
    type: "single_choice",
    question: "Hotpoint导入切片程序后一直不启动打印，检查切片程序无误，喷头温度为26°C，后应检查（）",
    options: {
      A: "步进电机",
      B: "热敏电阻",
      C: "开关按钮",
      D: "电机驱动"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第130题
  {
    id: 130,
    type: "single_choice",
    question: "Hotpoint导入切片程序后一直不启动打印，检查切片程序无误后应检查（）",
    options: {
      A: "步进电机",
      B: "喷头加热",
      C: "开关按钮",
      D: "电机驱动"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第131题
  {
    id: 131,
    type: "single_choice",
    question: "Hotpoint导入切片程序后一直不启动打印，应检查（）",
    options: {
      A: "步进电机",
      B: "G代码文件",
      C: "开关按钮",
      D: "电机驱动"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第132题
  {
    id: 132,
    type: "single_choice",
    question: "Hotpoint设备启动无反应，应检查（）",
    options: {
      A: "步进电机",
      B: "电源接口",
      C: "开关按钮",
      D: "电机驱动"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第133题
  {
    id: 133,
    type: "single_choice",
    question: "常用的3D打印材料不包含哪个？（）",
    options: {
      A: "光敏树脂",
      B: "PLA",
      C: "ABS",
      D: "纸片"
    },
    answer: "D",
    category: "材料工程"
  },
  
  // 第134题
  {
    id: 134,
    type: "single_choice",
    question: "SLA3D打印机打印完成后，需将周围桌面和设备内部的（）清理干净。",
    options: {
      A: "平台",
      B: "树脂",
      C: "灰尘",
      D: "污水"
    },
    answer: "A",
    category: "打印技术"
  },
  
  // 第135题
  {
    id: 135,
    type: "single_choice",
    question: "LCD3D打印机使用的耗材，未使用完时（）。",
    options: {
      A: "高温保存",
      B: "可直接倒掉",
      C: "不可随意倾倒入下水道",
      D: "直接放在外面等待下次使用"
    },
    answer: "C",
    category: "材料工程"
  },
  
  // 第136题
  {
    id: 136,
    type: "single_choice",
    question: "在清理LCD3D打印机时，可以使用（）进行擦拭。",
    options: {
      A: "报纸",
      B: "卫生纸",
      C: "湿巾",
      D: "无纺布+酒精"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第137题
  {
    id: 137,
    type: "single_choice",
    question: "在清理FDM3D打印机时，可以使用（）。",
    options: {
      A: "铜丝刷",
      B: "软毛刷",
      C: "铲子",
      D: "镊子"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第138题
  {
    id: 138,
    type: "single_choice",
    question: "LCD3D打印机打印完成后，需将周围桌面和设备内部的（）清理干净。",
    options: {
      A: "尘土",
      B: "树脂",
      C: "灰尘",
      D: "污水"
    },
    answer: "B",
    category: "打印技术"
  },
  
  // 第139题
  {
    id: 139,
    type: "single_choice",
    question: "FDM3D打印机打印完成后，需将周围桌面和设备内部的（）清理干净。",
    options: {
      A: "残料、灰尘",
      B: "喷嘴",
      C: "打印头",
      D: "平台"
    },
    answer: "A",
    category: "打印技术"
  },
  
  // 第140题
  {
    id: 140,
    type: "single_choice",
    question: "以下哪项不是实行5S管理的目的的是（）",
    options: {
      A: "改善库存周转率，改善品质，提高效率。",
      B: "努力提高员工的自身修养，使员工养成良好的工作、生活习惯和作风",
      C: "创造一个良好的工作环境，使职工能愉快地工作。",
      D: "用最快的速度取得所需之物，在最有效的规章、制度和最简洁的流程下完成作业。"
    },
    answer: "D",
    category: "安全规范"
  },
  
  // 第141题
  {
    id: 141,
    type: "single_choice",
    question: "5S管理的兴起时间（）",
    options: {
      A: "上世纪60年代",
      B: "上世纪40年代",
      C: "上世纪50年代",
      D: "上世纪30年代"
    },
    answer: "C",
    category: "安全规范"
  },
  
  // 第142题
  {
    id: 142,
    type: "single_choice",
    question: "5S管理是指（）",
    options: {
      A: "使环境不受污染，进一步消除浑浊的空气、粉尘、噪音和污染源，消灭职业病。",
      B: "对生产现场的现实摆放和停滞的各种物品进行分类",
      C: "生产现场需要留下的物品进行科学合理的布置和摆放。",
      D: "生产现场对生产要素进行有效管理"
    },
    answer: "D",
    category: "安全规范"
  },
  
  // 第143题
  {
    id: 143,
    type: "single_choice",
    question: "以下是实行5S管理的目的的是（）",
    options: {
      A: "改善库存周转率，改善品质，提高效率。",
      B: "努力提高员工的自身修养，使员工养成良好的工作、生活习惯和作风",
      C: "创造一个良好的工作环境，使职工能愉快地工作。",
      D: "用最快的速度取得所需之物，在最有效的规章、制度和最简洁的流程下完成作业。"
    },
    answer: "A",
    category: "安全规范"
  },
  
  // 第144题
  {
    id: 144,
    type: "single_choice",
    question: "5S管理中的整理定义是（）",
    options: {
      A: "清除现场内的脏污、清除作业区域的物料垃圾。",
      B: "必需品依规定定位、定方法摆放整齐有序，明确标示。",
      C: "区分要与不要的物品，现场只保留必需的物品。",
      D: "将整理、整顿、清扫实施的做法制度化、规范化，维持其成果。"
    },
    answer: "C",
    category: "安全规范"
  },
  
  // 第145题
  {
    id: 145,
    type: "single_choice",
    question: "5S管理中的整顿是指（）",
    options: {
      A: "清除现场内的脏污、清除作业区域的物料垃圾。",
      B: "必需品依规定定位、定方法摆放整齐有序，明确标示。",
      C: "区分要与不要的物品，现场只保留必需的物品。",
      D: "人人按章操作、依规行事，养成良好的习惯，使每个人都成为有教养的人。"
    },
    answer: "B",
    category: "安全规范"
  },
  
  // 第146题
  {
    id: 146,
    type: "single_choice",
    question: "LCD光固化3D打印机使用的树脂，为了清洗设备上的树脂，使用的清洗剂为（）。",
    options: {
      A: "碘伏",
      B: "酒精",
      C: "消毒液",
      D: "盐酸稀释液"
    },
    answer: "B",
    category: "材料工程"
  },
  
  // 第147题
  {
    id: 147,
    type: "single_choice",
    question: "LCD光固化3D打印机，影响其成型的重点考虑的环境因素是（）。",
    options: {
      A: "自然光",
      B: "环境温度",
      C: "通风",
      D: "空气湿度"
    },
    answer: "A",
    category: "打印技术"
  },
  
  // 第148题
  {
    id: 148,
    type: "single_choice",
    question: "LCD光固化3D打印机所使用的液态树脂，使用完成后，需要及时（）。",
    options: {
      A: "清理干净",
      B: "丢弃",
      C: "消毒",
      D: "回收"
    },
    answer: "D",
    category: "材料工程"
  },
  
  // 第149题
  {
    id: 149,
    type: "single_choice",
    question: "FDM技术所使用的PC线状耗材，在使用前需（）。",
    options: {
      A: "加热",
      B: "加湿",
      C: "烘干",
      D: "不用处理"
    },
    answer: "C",
    category: "材料工程"
  },
  
  // 第150题
  {
    id: 150,
    type: "single_choice",
    question: "FDM技术所使用的PLA线状耗材，在保存时需要控制环境湿度在（）以下。",
    options: {
      A: "40%",
      B: "45%",
      C: "50%",
      D: "55%"
    },
    answer: "C",
    category: "材料工程"
  },
  
  // 第151题
  {
    id: 151,
    type: "single_choice",
    question: "PLA材料长期保存需要（）",
    options: {
      A: "密封且干燥",
      B: "室外存放",
      C: "潮湿的地下室存放",
      D: "浸入水中"
    },
    answer: "A",
    category: "材料工程"
  },
  
  // 第152题
  {
    id: 152,
    type: "single_choice",
    question: "光敏树脂适合于下列那种环境中长期保存",
    options: {
      A: "潮湿的地下室",
      B: "室外堆放",
      C: "在有温度、湿度控制的且密闭的环境中",
      D: "与金属粉末材料同放"
    },
    answer: "C",
    category: "材料工程"
  },
  
  // 第153题
  {
    id: 153,
    type: "single_choice",
    question: "FDM技术所使用的一些特殊的高温材料，需将设备（）后才可进行打印。",
    options: {
      A: "开机",
      B: "预热",
      C: "上料",
      D: "调节打印温度"
    },
    answer: "B",
    category: "打印技术"
  },
  
  // 第154题
  {
    id: 154,
    type: "single_choice",
    question: "FDM技术所使用的线状耗材变质后，打印出的模型容易（）。",
    options: {
      A: "开裂、拉丝",
      B: "无法粘合到一起",
      C: "表面粗糙不光滑",
      D: "不影响打印模型"
    },
    answer: "A",
    category: "材料工程"
  },
  
  // 第155题
  {
    id: 155,
    type: "single_choice",
    question: "FDM技术所使用的线状耗材，在打印时出现啪、啪的声音，很大概率是（）导致的。",
    options: {
      A: "耗材到了使用期限",
      B: "打印头故障",
      C: "受潮",
      D: "耗材变质"
    },
    answer: "C",
    category: "材料工程"
  },
  
  // 第156题
  {
    id: 156,
    type: "single_choice",
    question: "FDM技术所使用的线状耗材，长时间不使用，应（）。",
    options: {
      A: "泡沫箱除湿保存",
      B: "塑封除湿保存",
      C: "低温密封保存",
      D: "不需要特殊保存"
    },
    answer: "B",
    category: "材料工程"
  },
  
  // 第157题
  {
    id: 157,
    type: "single_choice",
    question: "FDM技术所使用的线状耗材，影响其保存的因素是（）。",
    options: {
      A: "温度",
      B: "空间封闭性",
      C: "光照",
      D: "湿度"
    },
    answer: "D",
    category: "材料工程"
  },
  
  // 第158题
  {
    id: 158,
    type: "single_choice",
    question: "在清理LCD光固化设备的料槽底部的残料时（）",
    options: {
      A: "可以直接用手抠掉料槽底部的残料",
      B: "可以使用镊子夹取料槽底部的残料",
      C: "可以使用金属铲铲掉料槽底部的残料",
      D: "可以使用塑料铲铲掉料槽底部的残料"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第159题
  {
    id: 159,
    type: "single_choice",
    question: "FDM3D打印机使用最多的喷嘴直径是（）",
    options: {
      A: "0.2mm",
      B: "0.4mm",
      C: "0.6mm",
      D: "0.8mm"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第160题
  {
    id: 160,
    type: "single_choice",
    question: "FDM的3D打印机，在长时间打印后，出现了出料不畅的情况优先更换的硬件是（）",
    options: {
      A: "送丝轮",
      B: "E轴电机",
      C: "快拆块",
      D: "压敏开关"
    },
    answer: "C",
    category: "设备管理"
  },
  
  // 第161题
  {
    id: 161,
    type: "single_choice",
    question: "FDM的3D打印机，在长时间打印后，出现了出料不畅的情况最先排除的是下面哪一问题（）。",
    options: {
      A: "电机丢步",
      B: "送丝轮顶丝松动",
      C: "喷嘴堵料",
      D: "喉管老化"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第162题
  {
    id: 162,
    type: "single_choice",
    question: "FDM3D打印机开启后，屏幕提示温度传感器故障首先应排除（）的问题",
    options: {
      A: "加热棒线",
      B: "热敏电阻线",
      C: "Z轴排线",
      D: "压敏开关线"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第163题
  {
    id: 163,
    type: "single_choice",
    question: "FDM打印机长期不使用后使用发现Z轴上升困难，噪音较大应（）",
    options: {
      A: "在丝杠上涂抹润滑脂",
      B: "在丝杠上喷水",
      C: "不管不顾",
      D: "加大电压"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第164题
  {
    id: 164,
    type: "single_choice",
    question: "出现故障时要注意（），待维修人员来后如实说明故障前后的情况，并参与共同分析问题，尽早排除故障。",
    options: {
      A: "先处理",
      B: "保留现场",
      C: "放弃现场",
      D: "清理"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第165题
  {
    id: 165,
    type: "single_choice",
    question: "现场的FDM3D打印机使用的是（）调平系统。",
    options: {
      A: "人工",
      B: "自动",
      C: "手动",
      D: "机械"
    },
    answer: "B",
    category: "打印技术"
  },
  
  // 第166题
  {
    id: 166,
    type: "single_choice",
    question: "以下哪项不是防止翘边的方法（）。",
    options: {
      A: "调平台",
      B: "涂胶水",
      C: "贴美纹纸",
      D: "清理打印仓"
    },
    answer: "D",
    category: "工艺优化"
  },
  
  // 第167题
  {
    id: 167,
    type: "single_choice",
    question: "为了防止打印过程中模型翘边最有效的方法是（）。",
    options: {
      A: "在切片时增加模型密度",
      B: "打印前增大风扇转速，让模型快速冷却",
      C: "在切片时降低打印速度",
      D: "打印前在打印平台上提前涂抹胶水"
    },
    answer: "D",
    category: "工艺优化"
  },
  
  // 第168题
  {
    id: 168,
    type: "single_choice",
    question: "E4型号的3D打印机是（）。",
    options: {
      A: "双电机供料",
      B: "单电机供料",
      C: "远端电机供料",
      D: "近端电机供料"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第169题
  {
    id: 169,
    type: "single_choice",
    question: "以下哪一个不是打印机未调平导致的后果（）。",
    options: {
      A: "模型翘曲",
      B: "模型拉丝",
      C: "首层不出料",
      D: "模型拆除困难"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第170题
  {
    id: 170,
    type: "single_choice",
    question: "关于喷头堵塞的处理，正确的是：",
    options: {
      A: "找根针捅捅，常温的时候桶。",
      B: "无需处理",
      C: "拆喷头，清理喷头里面残留的耗材",
      D: "接着打印，打印时，可以融化里面的残留物"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第171题
  {
    id: 171,
    type: "single_choice",
    question: "设备丝杆运动出现轻微卡顿，以下不正确处理方法：",
    options: {
      A: "用水清洗",
      B: "涂上润滑油",
      C: "涂上机油",
      D: "涂上凡士林"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第172题
  {
    id: 172,
    type: "single_choice",
    question: "设备同步带出现异响，错误处理方法",
    options: {
      A: "涂上机油",
      B: "涂上润滑油",
      C: "涂上汽油",
      D: "涂上凡士林"
    },
    answer: "C",
    category: "设备管理"
  },
  
  // 第173题
  {
    id: 173,
    type: "single_choice",
    question: "FDM3D打印机使用之前进行调平操作主要是为了（）。",
    options: {
      A: "打印不同颜色的模型",
      B: "例行调试",
      C: "打印时让模型很好的粘到底板上",
      D: "打印完成后，模型更好拆除"
    },
    answer: "C",
    category: "打印技术"
  },
  
  // 第174题
  {
    id: 174,
    type: "single_choice",
    question: "就制备工件尺寸相比较，四种成型工艺制备尺寸最大的是（）。",
    options: {
      A: "SLA",
      B: "LOM",
      C: "SLS",
      D: "FDM"
    },
    answer: "C",
    category: "打印技术"
  },
  
  // 第175题
  {
    id: 175,
    type: "single_choice",
    question: "E轴转接板故障不会引起以下那行问题。",
    options: {
      A: "打印头不出料",
      B: "打印错位",
      C: "低温报警",
      D: "打印机不测温"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第176题
  {
    id: 176,
    type: "single_choice",
    question: "以下不是FDM打印机喷头不加温的故障原因的是。",
    options: {
      A: "热敏电阻损坏",
      B: "加热棒损坏",
      C: "主板损坏",
      D: "屏幕损坏"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第177题
  {
    id: 177,
    type: "single_choice",
    question: "用GeomagicControlX软件分析比对时，扫描仪需要保存（）格式文件。",
    options: {
      A: "step",
      B: "iges",
      C: "pj3",
      D: "stl"
    },
    answer: "D",
    category: "软件应用"
  },
  
  // 第178题
  {
    id: 178,
    type: "single_choice",
    question: "手持式激光扫描仪描扫描过渡时，满足相机公共视野中有（）以上标记点。",
    options: {
      A: "三个",
      B: "五个",
      C: "二个",
      D: "四个"
    },
    answer: "D",
    category: "高级应用"
  },
  
  // 第179题
  {
    id: 179,
    type: "single_choice",
    question: "BYSCAN750LE手持式激光扫描仪，除（）外都可扫描",
    options: {
      A: "黑色材质",
      B: "透明材质",
      C: "白色材质",
      D: "褐色材质"
    },
    answer: "B",
    category: "高级应用"
  },
  
  // 第180题
  {
    id: 180,
    type: "single_choice",
    question: "手持式激光扫描仪描工件表面时，扫描头与工件间的距离约为（）。",
    options: {
      A: "200-450mm",
      B: "100-350mm",
      C: "250-500mm",
      D: "150-400mm"
    },
    answer: "A",
    category: "高级应用"
  },
  
  // 第181题
  {
    id: 181,
    type: "single_choice",
    question: "扫描仪是使用激光探测进行扫描的，所以，被检测物体材质以及表面颜色若属于下列情况时，会对扫描产生一定的影响。",
    options: {
      A: "白色",
      B: "黄色",
      C: "黑色",
      D: "红色"
    },
    answer: "C",
    category: "高级应用"
  },
  
  // 第182题
  {
    id: 182,
    type: "single_choice",
    question: "在GeomagicControlX软件中，（）工具将用于获得所需位置的偏差结果。",
    options: {
      A: "3D比较",
      B: "2D比较",
      C: "比较点",
      D: "智能尺寸"
    },
    answer: "C",
    category: "软件应用"
  },
  
  // 第183题
  {
    id: 183,
    type: "single_choice",
    question: "在GeomagicControlX软件中，（）工具将用于计算和显示参考和测试数据之间的断面偏差。",
    options: {
      A: "2D比较",
      B: "3D比较",
      C: "比较点",
      D: "智能尺寸"
    },
    answer: "A",
    category: "软件应用"
  },
  
  // 第184题
  {
    id: 184,
    type: "single_choice",
    question: "在GeomagicControlX软件中，（）工具将用于计算和显示参考和测试数据之间的整体偏差。",
    options: {
      A: "3D比较",
      B: "2D比较",
      C: "比较点",
      D: "智能尺寸"
    },
    answer: "A",
    category: "软件应用"
  },
  
  // 第185题
  {
    id: 185,
    type: "single_choice",
    question: "使用最佳拟合对齐前，首先必须进行（）。",
    options: {
      A: "初始对齐",
      B: "基准对齐",
      C: "RPS对齐",
      D: "321对齐"
    },
    answer: "A",
    category: "软件应用"
  },
  
  // 第186题
  {
    id: 186,
    type: "single_choice",
    question: "在GeomagicControlX软件中，Ctrl+F是（）。",
    options: {
      A: "全部不选",
      B: "取消选着数据",
      C: "适合窗口",
      D: "移动模型"
    },
    answer: "C",
    category: "软件应用"
  },
  
  // 第187题
  {
    id: 187,
    type: "single_choice",
    question: "IGAM金属机，缸体的升降精度不是由（）控制的",
    options: {
      A: "电机",
      B: "驱动器",
      C: "丝杠",
      D: "减速器"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第188题
  {
    id: 188,
    type: "single_choice",
    question: "夏天，从冰箱内拿出一瓶结了冰的矿泉水。一段时间后，瓶内的冰全部化成了水。瓶内的冰化成水的过程中，不变的是（）。",
    options: {
      A: "体积",
      B: "质量",
      C: "密度",
      D: "状态"
    },
    answer: "B",
    category: "材料工程"
  },
  
  // 第189题
  {
    id: 189,
    type: "single_choice",
    question: "工人师傅根据用料需要，把一块钢板切割成大小不同的两块，则切割后的这两块钢板（）。",
    options: {
      A: "质量相等",
      B: "密度相等",
      C: "体积相等",
      D: "以上几个量都相等"
    },
    answer: "B",
    category: "材料工程"
  },
  
  // 第190题
  {
    id: 190,
    type: "single_choice",
    question: "在食用油、酱油、白酒和水这几种常见液体中，密度最大的是（）。",
    options: {
      A: "食用油",
      B: "酱油",
      C: "白酒",
      D: "水"
    },
    answer: "B",
    category: "材料工程"
  },
  
  // 第191题
  {
    id: 191,
    type: "single_choice",
    question: "氧气瓶里的氧气（气态）用去一半之后，则瓶内剩余的氧气（）。",
    options: {
      A: "质量和密度都不变",
      B: "质量和密度都变小",
      C: "质量和密度都增大",
      D: "无法判断"
    },
    answer: "B",
    category: "材料工程"
  },
  
  // 第192题
  {
    id: 192,
    type: "single_choice",
    question: "通常人们所说的：'铁比棉花重'，其实质是（）。",
    options: {
      A: "铁的密度比棉花大",
      B: "铁的质量比棉花大",
      C: "棉花比铁轻一些",
      D: "铁的质量和棉花的质量实际上是一样的"
    },
    answer: "A",
    category: "材料工程"
  },
  
  // 第193题
  {
    id: 193,
    type: "single_choice",
    question: "IGAM金属机，（）不能影响铺粉装置精度",
    options: {
      A: "刮刀架",
      B: "两侧导轨安装不一致",
      C: "过滤风机风太大",
      D: "两侧滑道损坏"
    },
    answer: "C",
    category: "设备管理"
  },
  
  // 第194题
  {
    id: 194,
    type: "single_choice",
    question: "IGAM金属机，铺粉装置精度是由（）测量的",
    options: {
      A: "卷尺",
      B: "卡尺",
      C: "激光测距仪",
      D: "角尺"
    },
    answer: "C",
    category: "设备管理"
  },
  
  // 第195题
  {
    id: 195,
    type: "single_choice",
    question: "将标定板放置稳定的平面，扫描仪正对标定板，距离（），按一下扫描仪开关键，发出激光束。",
    options: {
      A: "300mm",
      B: "350mm",
      C: "400mm",
      D: "200mm"
    },
    answer: "A",
    category: "高级应用"
  },
  
  // 第196题
  {
    id: 196,
    type: "single_choice",
    question: "BYSCAN750LE手持式激光扫描仪红光扫描仪最高分辨率可达（）。",
    options: {
      A: "0.03mm",
      B: "0.04mm",
      C: "0.05mm",
      D: "0.06mm"
    },
    answer: "C",
    category: "高级应用"
  },
  
  // 第197题
  {
    id: 197,
    type: "single_choice",
    question: "BYSCAN750LE手持式激光扫描仪蓝光扫描仪最高分辨率可达（）。",
    options: {
      A: "0.01mm",
      B: "0.015mm",
      C: "0.02mm",
      D: "0.03mm"
    },
    answer: "C",
    category: "高级应用"
  },
  
  // 第198题
  {
    id: 198,
    type: "single_choice",
    question: "BYSCAN750LE手持式激光扫描仪五束蓝色平行线激光扫描，扫描（）。",
    options: {
      A: "细节度好",
      B: "速度快",
      C: "大型工件",
      D: "黑色工件"
    },
    answer: "A",
    category: "高级应用"
  },
  
  // 第199题
  {
    id: 199,
    type: "single_choice",
    question: "扫描标记点时，我们要尽量使扫描仪与被扫表面（）。",
    options: {
      A: "垂直",
      B: "成一定角度",
      C: "45度",
      D: "60度"
    },
    answer: "A",
    category: "高级应用"
  },
  
  // 第200题
  {
    id: 200,
    type: "single_choice",
    question: "IGAM金属机，316L不锈钢粉末材料熔点是多少",
    options: {
      A: "1300-1500",
      B: "1600-2000",
      C: "2000-2500",
      D: "2500-3000"
    },
    answer: "A",
    category: "材料工程"
  },
  
  // 第201题
  {
    id: 201,
    type: "single_choice",
    question: "IGAM金属机，零件表面粗糙度不是由（）控制的",
    options: {
      A: "填充功率",
      B: "边框功率",
      C: "扫面速度",
      D: "加工层厚"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第202题
  {
    id: 202,
    type: "single_choice",
    question: "IGAM金属机，打印尺寸精度误差是（）",
    options: {
      A: "0.1",
      B: "0.2",
      C: "0.3",
      D: "0.4"
    },
    answer: "A",
    category: "工艺优化"
  },
  
  // 第203题
  {
    id: 203,
    type: "single_choice",
    question: "IGAM金属机，打印尺寸用（）工具测量",
    options: {
      A: "卷尺",
      B: "板尺",
      C: "游标卡尺",
      D: "角尺"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第204题
  {
    id: 204,
    type: "single_choice",
    question: "IGAM金属机，由下列（）来调试激光焦距",
    options: {
      A: "A4纸",
      B: "激光调试纸",
      C: "热敏纸",
      D: "塑料"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第205题
  {
    id: 205,
    type: "single_choice",
    question: "下列（）结构的零件适合做粘合处理",
    options: {
      A: "实心",
      B: "薄壁",
      C: "复杂",
      D: "镂空"
    },
    answer: "A",
    category: "工艺优化"
  },
  
  // 第206题
  {
    id: 206,
    type: "single_choice",
    question: "针对大型零件尝尝采用分块打印，之后再拼接粘接，不是常用的粘接剂是：",
    options: {
      A: "502胶水",
      B: "AB胶",
      C: "结构胶",
      D: "水溶胶"
    },
    answer: "D",
    category: "工艺优化"
  },
  
  // 第207题
  {
    id: 207,
    type: "single_choice",
    question: "目前粘接效果相对来说较差的是（）。",
    options: {
      A: "热熔胶",
      B: "免钉胶",
      C: "极速胶",
      D: "白乳胶"
    },
    answer: "A",
    category: "工艺优化"
  },
  
  // 第208题
  {
    id: 208,
    type: "single_choice",
    question: "对于小尺寸的3D打印模型，如果不需要活动的情况下，也可以使用（）进行粘接。",
    options: {
      A: "强力固体胶",
      B: "白乳胶",
      C: "502",
      D: "101"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第209题
  {
    id: 209,
    type: "single_choice",
    question: "3D打印的模型，最长使用的粘合剂为（）。",
    options: {
      A: "602丁晴胶",
      B: "AB胶",
      C: "502",
      D: "哥俩好"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第210题
  {
    id: 210,
    type: "single_choice",
    question: "拆分打印的模型，最终需要进行（）处理。",
    options: {
      A: "抛光",
      B: "拼接",
      C: "上色",
      D: "粘合"
    },
    answer: "D",
    category: "工艺优化"
  },
  
  // 第211题
  {
    id: 211,
    type: "single_choice",
    question: "对于尺寸较大的模型或者细节较多的模型，可以进行（）。",
    options: {
      A: "整体一起打印",
      B: "无法打印",
      C: "拆件打印",
      D: "摆放合理位置打印"
    },
    answer: "C",
    category: "技术基础"
  },
  
  // 第212题
  {
    id: 212,
    type: "single_choice",
    question: "IGAM金属机，打印零件时激光出光只出一个点，是由下列哪项原因导致的",
    options: {
      A: "激光损害",
      B: "扫描仪故障",
      C: "机械故障",
      D: "激光头故障"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第213题
  {
    id: 213,
    type: "single_choice",
    question: "IGAM金属机，激光器用的是哪种类型",
    options: {
      A: "CO2",
      B: "光纤",
      C: "红外",
      D: "紫外"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第214题
  {
    id: 214,
    type: "single_choice",
    question: "IGAM金属机，激光不出光，不是由下面（）原因导致的",
    options: {
      A: "冷却机没开，激光过热保护",
      B: "冷却机开了，温度调节过高，导致激光过热保护",
      C: "激光头损坏",
      D: "激光光纤太长"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第215题
  {
    id: 215,
    type: "single_choice",
    question: "IGAM金属机，加热系统是有（）来调控的",
    options: {
      A: "测温仪",
      B: "温控仪",
      C: "热成像仪",
      D: "光谱仪"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第216题
  {
    id: 216,
    type: "single_choice",
    question: "IGAM金属机，粉缸运动异常，不是由下列哪种情况导致的",
    options: {
      A: "工作缸跟缸壁之有异物卡死",
      B: "电机损坏",
      C: "丝杠损坏",
      D: "皮带损坏"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第217题
  {
    id: 217,
    type: "single_choice",
    question: "对于一些拉丝比较严重的模型，还可以使用（）去除拉丝。",
    options: {
      A: "吹风机",
      B: "镊子",
      C: "笔刀",
      D: "砂纸"
    },
    answer: "A",
    category: "工艺优化"
  },
  
  // 第218题
  {
    id: 218,
    type: "single_choice",
    question: "模型表面如果需要彻底抛光，还需要使用（）。",
    options: {
      A: "锉刀",
      B: "打磨膏",
      C: "水砂纸",
      D: "丙烯"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第219题
  {
    id: 219,
    type: "single_choice",
    question: "对于表面非常粗糙的结构，除了使用低目数砂纸，还可以使用（）进行清理。",
    options: {
      A: "笔刀",
      B: "热风枪",
      C: "锉刀",
      D: "抛光液"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第220题
  {
    id: 220,
    type: "single_choice",
    question: "喷砂机无法处理（）。",
    options: {
      A: "表面太过粗糙",
      B: "弧形模型",
      C: "细节较多的结构",
      D: "凹凸不平的模型"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第221题
  {
    id: 221,
    type: "single_choice",
    question: "使用喷砂机打磨的主要缺点是（）。",
    options: {
      A: "打磨速度慢效率低",
      B: "模型表面会受污染",
      C: "不容易处理凹槽",
      D: "设备价格相对较昂贵"
    },
    answer: "D",
    category: "工艺优化"
  },
  
  // 第222题
  {
    id: 222,
    type: "single_choice",
    question: "IGAM金属机，基板与刮刀之间的距离用（）工具来调节",
    options: {
      A: "A4纸",
      B: "塞尺",
      C: "板尺",
      D: "卡尺"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第223题
  {
    id: 223,
    type: "single_choice",
    question: "FDM3D打印设备，热床跟喷嘴之间的距离用（）工具来调节",
    options: {
      A: "A4纸",
      B: "塞尺",
      C: "板尺",
      D: "卡尺"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第224题
  {
    id: 224,
    type: "single_choice",
    question: "FDM设备，工作平台不加热，下列选项不正确的是",
    options: {
      A: "加热板损坏",
      B: "供电损坏",
      C: "加热板没接受信号",
      D: "喷头温度过高"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第225题
  {
    id: 225,
    type: "single_choice",
    question: "IGAM金属机，铺粉系统前后移动不停止，下列选项不正确的是",
    options: {
      A: "电机损坏",
      B: "限位损坏",
      C: "限位信号错误",
      D: "限位跟铺粉系统位置有偏差"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第226题
  {
    id: 226,
    type: "single_choice",
    question: "FDM设备，喷头是（）材质",
    options: {
      A: "铜合金",
      B: "不锈钢",
      C: "铁",
      D: "钛合金"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第227题
  {
    id: 227,
    type: "single_choice",
    question: "IGAM金属机，过滤器没有风运行，下列选项不正确的是",
    options: {
      A: "过滤器损坏",
      B: "变频器设置出问题",
      C: "供电问题",
      D: "管道接反了"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第228题
  {
    id: 228,
    type: "single_choice",
    question: "IGAM金属机，工作腔电推杠无法升降，下列选项不正确的是",
    options: {
      A: "电推杠供电电源损坏",
      B: "电推杠损坏",
      C: "电推杠信号线损坏",
      D: "腔门太重"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第229题
  {
    id: 229,
    type: "single_choice",
    question: "（）后处理方法不可以改善零件的机械性能",
    options: {
      A: "机加工",
      B: "化学腐蚀",
      C: "喷丸",
      D: "抛光"
    },
    answer: "D",
    category: "工艺优化"
  },
  
  // 第230题
  {
    id: 230,
    type: "single_choice",
    question: "化学腐蚀对（）结构的金属零件不适用",
    options: {
      A: "轻量化",
      B: "实体",
      C: "复杂",
      D: "镂空"
    },
    answer: "A",
    category: "工艺优化"
  },
  
  // 第231题
  {
    id: 231,
    type: "single_choice",
    question: "以下属于化学处理打印制件的是：",
    options: {
      A: "支撑切割",
      B: "电解抛光",
      C: "震动抛光",
      D: "喷砂"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第232题
  {
    id: 232,
    type: "single_choice",
    question: "喷砂完的模型表面是（）。",
    options: {
      A: "磨砂质感",
      B: "光滑质感",
      C: "粘腻",
      D: "硬度低"
    },
    answer: "A",
    category: "工艺优化"
  },
  
  // 第233题
  {
    id: 233,
    type: "single_choice",
    question: "（）是目前效率最高的表面处理方式。",
    options: {
      A: "喷涂",
      B: "手工砂纸打磨",
      C: "表面喷砂",
      D: "使用打磨笔"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第234题
  {
    id: 234,
    type: "single_choice",
    question: "丙酮化学抛光的主要缺点是（）",
    options: {
      A: "效率低",
      B: "无法精确控制模型的规格尺寸。",
      C: "容易使模型受损",
      D: "对人体有伤害"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第235题
  {
    id: 235,
    type: "single_choice",
    question: "化学抛光的主要优点是（）。",
    options: {
      A: "化学抛光绿色无污染",
      B: "操作简单",
      C: "所用溶液的比较容易再生",
      D: "抛光溶液使用寿命长"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第236题
  {
    id: 236,
    type: "single_choice",
    question: "只有（）可以使用丙酮化学抛光。",
    options: {
      A: "ABS",
      B: "TPU",
      C: "PETG",
      D: "PVA"
    },
    answer: "A",
    category: "材料工程"
  },
  
  // 第237题
  {
    id: 237,
    type: "single_choice",
    question: "IGAM金属机，铺粉系统不动，下列选项不正确的是",
    options: {
      A: "电机线序接的有问题",
      B: "电机损坏",
      C: "电机跟皮带轮之间的紧固顶丝松了",
      D: "限位损坏"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第238题
  {
    id: 238,
    type: "single_choice",
    question: "IGAM金属机，工作缸上下升降不动，下列选项不正确的是",
    options: {
      A: "工作缸跟缸壁之有异物卡死",
      B: "电机损坏",
      C: "丝杆损坏",
      D: "工作缸太重"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第239题
  {
    id: 239,
    type: "single_choice",
    question: "FDM设备，喷头不出丝，下列选项不正确的是",
    options: {
      A: "喷头堵了",
      B: "喷头不加热",
      C: "上料齿轮损坏",
      D: "打印平台不加热"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第240题
  {
    id: 240,
    type: "single_choice",
    question: "FDM设备，Z轴下降精度不准，下列选项不正确的是：",
    options: {
      A: "Z轴丝杠紧固螺钉松动",
      B: "电机损坏",
      C: "丝杆损坏",
      D: "打印零件过重"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第241题
  {
    id: 241,
    type: "single_choice",
    question: "FDM设备，X运动轴抖动，下列不正确的是",
    options: {
      A: "电机损坏",
      B: "紧固皮带轮顶丝松动",
      C: "皮带松动",
      D: "Y轴干扰"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第242题
  {
    id: 242,
    type: "single_choice",
    question: "FDM3D打印机的主板位于（）。",
    options: {
      A: "成型仓最后方",
      B: "热床处",
      C: "料仓的底部",
      D: "成型仓的最底部"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第243题
  {
    id: 243,
    type: "single_choice",
    question: "在更换X轴排线时，需要将（）一并拆下。",
    options: {
      A: "热床排线",
      B: "E轴排线",
      C: "打印头",
      D: "压敏开关"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第244题
  {
    id: 244,
    type: "single_choice",
    question: "FDM3D打印机如果送丝轮损坏，需要将（）拆下才能更换。",
    options: {
      A: "打印头",
      B: "快拆块",
      C: "电机",
      D: "压敏开关"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第245题
  {
    id: 245,
    type: "single_choice",
    question: "LCD光固化3D打印机的料槽，如果需要重新更换离型膜，更换时需要使用（）辅助密封。",
    options: {
      A: "胶带",
      B: "美纹纸",
      C: "密封条",
      D: "橡皮筋"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第246题
  {
    id: 246,
    type: "single_choice",
    question: "LCD光固化3D打印机的LCD屏位于（）的下方。",
    options: {
      A: "平台",
      B: "UV灯",
      C: "离型膜",
      D: "光筒"
    },
    answer: "C",
    category: "设备管理"
  },
  
  // 第247题
  {
    id: 247,
    type: "single_choice",
    question: "不能够直接上色，不需要后期上色的是（）技术。",
    options: {
      A: "SLA",
      B: "FDM",
      C: "SLS",
      D: "3DP"
    },
    answer: "D",
    category: "打印技术"
  },
  
  // 第248题
  {
    id: 248,
    type: "single_choice",
    question: "对金属增材制造后处理中，方法不正确的是（）",
    options: {
      A: "喷砂处理",
      B: "高压气处理",
      C: "用盐酸清洗",
      D: "去除支撑"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第249题
  {
    id: 249,
    type: "single_choice",
    question: "以下是SLA成型件后处理流程的是",
    options: {
      A: "清洗一去支撑一表面处理打磨一喷砂一喷漆",
      B: "去支撑一表面打磨",
      C: "热处理一机加工一表面处理",
      D: "热处理一机加工一表面处理"
    },
    answer: "A",
    category: "工艺优化"
  },
  
  // 第250题
  {
    id: 250,
    type: "single_choice",
    question: "（）是门槛最低的上色工艺。",
    options: {
      A: "全自动法",
      B: "手涂法",
      C: "喷漆",
      D: "电镀法"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第251题
  {
    id: 251,
    type: "single_choice",
    question: "电镀上色工艺只适合用在（）材料的模型上。",
    options: {
      A: "耐紫外线",
      B: "高韧性",
      C: "高强度",
      D: "耐高温"
    },
    answer: "D",
    category: "工艺优化"
  },
  
  // 第252题
  {
    id: 252,
    type: "single_choice",
    question: "浸染工艺只适合用在（）材料的模型上。",
    options: {
      A: "TPE",
      B: "TPU",
      C: "碳纤维",
      D: "尼龙"
    },
    answer: "D",
    category: "工艺优化"
  },
  
  // 第253题
  {
    id: 253,
    type: "single_choice",
    question: "喷笔上色过程中还需要的工具是（）。",
    options: {
      A: "喷枪",
      B: "砂纸",
      C: "美纹纸",
      D: "补土"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第254题
  {
    id: 254,
    type: "single_choice",
    question: "喷笔使用的颜料可以是（）。",
    options: {
      A: "乙烯",
      B: "丙烯",
      C: "二甲苯",
      D: "丙酮"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第255题
  {
    id: 255,
    type: "single_choice",
    question: "IGAM金属机，电气柜中，直流电源均为（）",
    options: {
      A: "24V",
      B: "48V",
      C: "220",
      D: "380V"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第256题
  {
    id: 256,
    type: "single_choice",
    question: "IGAM金属机，电气柜中，温控仪所需电压为（）",
    options: {
      A: "24V",
      B: "48V",
      C: "220V",
      D: "380"
    },
    answer: "C",
    category: "设备管理"
  },
  
  // 第257题
  {
    id: 257,
    type: "single_choice",
    question: "IGAM金属机，电气柜布局，下列哪项不正确",
    options: {
      A: "强电，弱电分开",
      B: "强电跟信号线一起",
      C: "电器元件位置摆放合理",
      D: "电气原件需接地线"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第258题
  {
    id: 258,
    type: "single_choice",
    question: "IGAM金属机，电器柜中，2.5平方线能负载（）电流",
    options: {
      A: "15A",
      B: "30A",
      C: "45A",
      D: "60A"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第259题
  {
    id: 259,
    type: "single_choice",
    question: "IGAM金属机，电气柜中电器元件不需要下列（）电压",
    options: {
      A: "24V",
      B: "48V",
      C: "220V",
      D: "380V"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第260题
  {
    id: 260,
    type: "single_choice",
    question: "金属3D打印的零件，零件后处理用不上的工具（）。",
    options: {
      A: "线切割机",
      B: "喷砂机",
      C: "抛光机",
      D: "切割机"
    },
    answer: "D",
    category: "工艺优化"
  },
  
  // 第261题
  {
    id: 261,
    type: "single_choice",
    question: "自喷漆的主要缺点是（）。",
    options: {
      A: "有毒性",
      B: "上色效果多样性差",
      C: "喷出率较低",
      D: "附着率较低"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第262题
  {
    id: 262,
    type: "single_choice",
    question: "自喷漆的主要优点是（）。",
    options: {
      A: "操作方法简单",
      B: "环保指数高",
      C: "不容易出现划痕",
      D: "造价低"
    },
    answer: "A",
    category: "工艺优化"
  },
  
  // 第263题
  {
    id: 263,
    type: "single_choice",
    question: "喷笔的主要缺点是（）。",
    options: {
      A: "不容易上色",
      B: "噪音大",
      C: "喷出的颜料不易干",
      D: "需要一定的基础"
    },
    answer: "D",
    category: "工艺优化"
  },
  
  // 第264题
  {
    id: 264,
    type: "single_choice",
    question: "喷笔的主要优点是（）。",
    options: {
      A: "使用方便快捷",
      B: "颜色细腻",
      C: "操作效率高",
      D: "容易上手"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第265题
  {
    id: 265,
    type: "single_choice",
    question: "喷涂法的主要工具是（）。",
    options: {
      A: "胶水",
      B: "保护漆",
      C: "喷笔和自喷漆",
      D: "镊子"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第266题
  {
    id: 266,
    type: "single_choice",
    question: "IGAM金属机，用（）密封以达到气密性",
    options: {
      A: "304硅胶",
      B: "502胶水",
      C: "AB胶",
      D: "透明胶"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第267题
  {
    id: 267,
    type: "single_choice",
    question: "IGAM金属机，铺粉系统的皮带轮跟笺用（）紧固",
    options: {
      A: "AB胶",
      B: "502胶",
      C: "顶丝",
      D: "螺钉"
    },
    answer: "C",
    category: "设备管理"
  },
  
  // 第268题
  {
    id: 268,
    type: "single_choice",
    question: "FDM3D打印机送丝轮顶丝松动会导致（）。",
    options: {
      A: "无法加温",
      B: "出料故障",
      C: "错位",
      D: "翘边"
    },
    answer: "C",
    category: "设备管理"
  },
  
  // 第269题
  {
    id: 269,
    type: "single_choice",
    question: "FDM3D打印机控制平台上下移动的电机有（）个。",
    options: {
      A: "4",
      B: "3",
      C: "2",
      D: "1"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第270题
  {
    id: 270,
    type: "single_choice",
    question: "FDM3D打印机控制X轴移动的电机数量为（）个。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第271题
  {
    id: 271,
    type: "single_choice",
    question: "FDM3D打印机有（）根光杠。",
    options: {
      A: "5",
      B: "4",
      C: "3",
      D: "2"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第272题
  {
    id: 272,
    type: "single_choice",
    question: "FDM3D打印机有（）根丝杠。",
    options: {
      A: "1",
      B: "3",
      C: "4",
      D: "2"
    },
    answer: "B",
    category: "设备管理"
  },
  
  // 第273题
  {
    id: 273,
    type: "single_choice",
    question: "下列对于金属3D打印制件的后处理描述错误的是。",
    options: {
      A: "金属打印机在制件工作结束后，我们需要做制件的内部和表面的清洁工作。",
      B: "把基板和制件从打印机取出，清洁干净剩余物料。",
      C: "对于复杂的有空心内腔的制件，用嘴吹除剩余的物料。",
      D: "深孔和弯曲的复杂内腔可以借助试管毛刷清除内部剩余物料。"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第274题
  {
    id: 274,
    type: "single_choice",
    question: "IGAM金属3D打印机，打印的零件，用（）工具把零件与基板分离",
    options: {
      A: "剪刀",
      B: "老虎钳",
      C: "斜口钳",
      D: "锤子"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第275题
  {
    id: 275,
    type: "single_choice",
    question: "对于深孔和弯曲的复杂制件，用（）清除剩余的物料",
    options: {
      A: "毛刷",
      B: "试管毛刷",
      C: "钢刷",
      D: "鞋刷"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第276题
  {
    id: 276,
    type: "single_choice",
    question: "下列描述错误的是（）。",
    options: {
      A: "剪钳的作用主要是为了在不损伤模型的情况下快捷地拆除支撑",
      B: "喷漆是当前3D打印产品主要上色工艺之一",
      C: "水砂纸无法将模型打磨光滑",
      D: "对模型表面进行打磨时，最常用的工具就是砂纸"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第277题
  {
    id: 277,
    type: "single_choice",
    question: "下列描述正确的是（）。",
    options: {
      A: "锉刀可以处理弧面残留瑕疵，尤其是内凹弧面",
      B: "偏口钳除了可以拆除支撑，还可以，修剪模型",
      C: "笔刀可以替代砂纸进行工具打磨",
      D: "镊子只能用来夹取小物品"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第278题
  {
    id: 278,
    type: "single_choice",
    question: "打磨笔除了效率高的优点，还有（）的优点。",
    options: {
      A: "多种打磨头方便打磨各种类型的细节",
      B: "强力的吸尘效果",
      C: "打磨后容易抛光",
      D: "用途广泛，除锈效果最好"
    },
    answer: "A",
    category: "工艺优化"
  },
  
  // 第279题
  {
    id: 279,
    type: "single_choice",
    question: "多目数砂纸的叠加使用，主要为了（）。",
    options: {
      A: "打磨掉之前的打印痕迹",
      B: "让模型更细腻",
      C: "后期上色",
      D: "让模型更美观"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第280题
  {
    id: 280,
    type: "single_choice",
    question: "高目数砂纸的使用，主要是为了（）。",
    options: {
      A: "减轻模型重量",
      B: "打磨掉打印痕迹",
      C: "让模型更精致",
      D: "打磨掉之前的打磨痕迹"
    },
    answer: "D",
    category: "工艺优化"
  },
  
  // 第281题
  {
    id: 281,
    type: "single_choice",
    question: "FDM设备，XY轴运动是由下列哪种流程完成的",
    options: {
      A: "电机带动同步带运动",
      B: "同步带带动电机运动",
      C: "减速机带动同步带运动",
      D: "同步带带动减速机运动"
    },
    answer: "A",
    category: "技术基础"
  },
  
  // 第282题
  {
    id: 282,
    type: "single_choice",
    question: "FDM设备，工作平台是由下列哪种流程完成的",
    options: {
      A: "电机带动同步带运动",
      B: "同步带带动电机运动",
      C: "电机带动丝杆运动",
      D: "丝杆带动电机运动"
    },
    answer: "C",
    category: "技术基础"
  },
  
  // 第283题
  {
    id: 283,
    type: "single_choice",
    question: "IGAM金属机，调试设备水平，使用下列哪种工具",
    options: {
      A: "水平仪",
      B: "板尺",
      C: "测温仪",
      D: "温控仪"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第284题
  {
    id: 284,
    type: "single_choice",
    question: "IGAM金属机，工作缸运动是由下列哪种流程完成的",
    options: {
      A: "电机带动同步带运动",
      B: "同步带带动电机运动",
      C: "电机带动丝杆运动",
      D: "丝杆带动电机运动"
    },
    answer: "C",
    category: "技术基础"
  },
  
  // 第285题
  {
    id: 285,
    type: "single_choice",
    question: "IGAM金属机，铺粉系统是由下列哪种流程完成的",
    options: {
      A: "电机带动同步带运动",
      B: "同步带带动电机运动",
      C: "减速机带动同步带运动",
      D: "同步带带动减速机运动"
    },
    answer: "A",
    category: "技术基础"
  },
  
  // 第286题
  {
    id: 286,
    type: "single_choice",
    question: "FDM3D打印机内部有灰尘时应使用无纺布沾（）擦拭。",
    options: {
      A: "酒精",
      B: "水",
      C: "WD40",
      D: "热水"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第287题
  {
    id: 287,
    type: "single_choice",
    question: "FDM3D打印机用手左右推动打印头，感觉阻力较大时吗可以适当添加（）。",
    options: {
      A: "机油",
      B: "齿轮油",
      C: "缝纫机油",
      D: "酒精"
    },
    answer: "C",
    category: "设备管理"
  },
  
  // 第288题
  {
    id: 288,
    type: "single_choice",
    question: "当FDM3D打印机开机后温度始终加不上去需要排除故障的硬件有（）。",
    options: {
      A: "电机、加热棒、转接板、主板",
      B: "快拆块、电机、主板",
      C: "快拆块、加热棒、转接板、电机",
      D: "快拆块、加热棒、转接板、主板"
    },
    answer: "D",
    category: "设备管理"
  },
  
  // 第289题
  {
    id: 289,
    type: "single_choice",
    question: "当FDM3D打印机温度上下跳动时说明是（）。",
    options: {
      A: "热床故障",
      B: "加热棒故障",
      C: "测温异常",
      D: "打印头供电异常"
    },
    answer: "C",
    category: "设备管理"
  },
  
  // 第290题
  {
    id: 290,
    type: "single_choice",
    question: "E轴转接板位于打印头的（）。",
    options: {
      A: "正后方",
      B: "底部",
      C: "左侧",
      D: "正前方"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第291题
  {
    id: 291,
    type: "single_choice",
    question: "金属零部件3D打印后处理主要包括热处理．（）等过程。",
    options: {
      A: "逆向设计",
      B: "数控加工",
      C: "机械加工",
      D: "除尘"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第292题
  {
    id: 292,
    type: "single_choice",
    question: "3D打印技术成型件的后处理过程中最关键的步骤是（）。",
    options: {
      A: "取出成型件",
      B: "打磨成型件",
      C: "去除支撑部分",
      D: "涂覆成型件"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第293题
  {
    id: 293,
    type: "single_choice",
    question: "3D打印技术后处理的关键技术不包括以下哪一项（）。",
    options: {
      A: "打磨抛光",
      B: "溶浸",
      C: "热等静压烧结",
      D: "高温烧结"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第294题
  {
    id: 294,
    type: "single_choice",
    question: "某客户使用FDM工艺打印了一把仿古道具剑，因为需要拍摄特写，可以建议剑身处使用（）进行打磨。",
    options: {
      A: "电动打磨机",
      B: "砂纸棒",
      C: "打磨笔",
      D: "砂带机"
    },
    answer: "D",
    category: "工艺优化"
  },
  
  // 第295题
  {
    id: 295,
    type: "single_choice",
    question: "对于一些球形凹槽结构可以使用（）进行打磨。",
    options: {
      A: "砂纸",
      B: "电动打磨机",
      C: "球头打磨笔",
      D: "砂带机"
    },
    answer: "C",
    category: "工艺优化"
  },
  
  // 第296题
  {
    id: 296,
    type: "single_choice",
    question: "砂纸打磨的零件第一遍使用低目数的，主要是为了（）。",
    options: {
      A: "打磨掉打印痕迹",
      B: "让后续打磨更容易",
      C: "消除模型瑕疵",
      D: "减少模型处理时间"
    },
    answer: "A",
    category: "工艺优化"
  },
  
  // 第297题
  {
    id: 297,
    type: "single_choice",
    question: "使用砂纸打磨零件时，砂纸型号的使用顺序是（）。",
    options: {
      A: "从高到低",
      B: "从低到高",
      C: "一直使用低目数",
      D: "一直使用高目数"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第298题
  {
    id: 298,
    type: "single_choice",
    question: "对于高精的零件，单一的打磨方式并不能完全满足零件需求，往往需要（）。",
    options: {
      A: "再使用两至三种打磨工具进行打磨处理",
      B: "根据零件结构多种方式配合操作",
      C: "找到最适合处理高精零件的工具",
      D: "根据零件结构确定所需要的操作方式"
    },
    answer: "B",
    category: "工艺优化"
  },
  
  // 第299题
  {
    id: 299,
    type: "single_choice",
    question: "在3D打印机打印过程中，（）能控制打印操作",
    options: {
      A: "控制系统",
      B: "机械组件",
      C: "打印头",
      D: "送料机"
    },
    answer: "A",
    category: "设备管理"
  },
  
  // 第300题
  {
    id: 300,
    type: "single_choice",
    question: "连续钻削几个相同直径的孔可视为一个（）。",
    options: {
      A: "工序",
      B: "工位",
      C: "工步",
      D: "安装"
    },
    answer: "C",
    category: "技术基础"
  },
  
  // 第301题
  {
    id: 301,
    type: "single_choice",
    question: "在某机床上加工某零件时，先加工零件的一端，然后调头再夹紧零件加工另一端，这应该是（）。",
    options: {
      A: "一个工序、一次安装",
      B: "一个工序、两次安装",
      C: "两个工序、一次安装",
      D: "两个工序、两次安装"
    },
    answer: "B",
    category: "技术基础"
  },
  
  // 第302题
  {
    id: 302,
    type: "single_choice",
    question: "中批量生产中用以确定机加工余量的方法是（）。",
    options: {
      A: "查表法",
      B: "计算法",
      C: "经验估算法",
      D: "自定义法"
    },
    answer: "A",
    category: "技术基础"
  },
  
  // 第303题
  {
    id: 303,
    type: "single_choice",
    question: "编制零件机械加工工艺规程，编制生产计划和进行成本核算最基本的单元是（）。",
    options: {
      A: "工步",
      B: "工序",
      C: "工位",
      D: "安装"
    },
    answer: "B",
    category: "技术基础"
  },
  
  // 第304题
  {
    id: 304,
    type: "single_choice",
    question: "在机械加工中直接改变工件的形状、尺寸和表面质量，使之成为所需零件的过程称为（）。",
    options: {
      A: "生产过程",
      B: "工艺过程",
      C: "工艺规程",
      D: "机械加工工艺过程"
    },
    answer: "D",
    category: "技术基础"
  },
  
  // 第305题
  {
    id: 305,
    type: "single_choice",
    question: "工件在机械加工中允许存在合理的加工误差，这是因为（）。",
    options: {
      A: "生产中不可能无加工误差",
      B: "零件允许存在一定的误差",
      C: "精度要求过高、制造费用太高",
      D: "包括上述所有原因"
    },
    answer: "D",
    category: "技术基础"
  },
  
  // 第306题
  {
    id: 306,
    type: "single_choice",
    question: "误差的敏感方向是（）。",
    options: {
      A: "主运动方向",
      B: "进给运动方向",
      C: "过刀尖的加工表面的法向",
      D: "过刀尖的加工表面的切向"
    },
    answer: "C",
    category: "技术基础"
  },
  
  // 第307题
  {
    id: 307,
    type: "single_choice",
    question: "下列不符合夹紧力作用点选择原则的是（）。",
    options: {
      A: "尽量作用在不加工表面上",
      B: "尽量靠近加工表面",
      C: "尽量靠近支承面的几何中心",
      D: "尽量作用在工件刚性好处"
    },
    answer: "A",
    category: "技术基础"
  },
  
  // 第308题
  {
    id: 308,
    type: "single_choice",
    question: "夹紧力作用方向的确定原则是（）。",
    options: {
      A: "应垂直向下",
      B: "应垂直于主要定位基准面",
      C: "使所需夹紧力最大",
      D: "使工件变形尽可能大"
    },
    answer: "B",
    category: "技术基础"
  },
  
  // 第309题
  {
    id: 309,
    type: "single_choice",
    question: "加工铸铁时，产生表面粗糙度主要原因是残留面积和（）等因素引起的。",
    options: {
      A: "塑性变形",
      B: "塑性变形和积屑瘤",
      C: "积屑瘤",
      D: "切屑崩碎"
    },
    answer: "D",
    category: "技术基础"
  },
  
  // 第310题
  {
    id: 310,
    type: "single_choice",
    question: "SLM工艺打印金属制件扫描方式对制件性能至关重要，以下适合打印较大实心面的扫描方式是：",
    options: {
      A: "逐行扫描",
      B: "倾斜分区",
      C: "螺旋扫描",
      D: "逐列扫描"
    },
    answer: "B",
    category: "打印技术"
  },
  
  // 第311题
  {
    id: 311,
    type: "single_choice",
    question: "铸件上由于厚薄截面冷却度不同而产生的宽度不均匀，有许多分枝的线状显示，最可能是（）。",
    options: {
      A: "疏松",
      B: "冷隔",
      C: "热裂",
      D: "折叠"
    },
    answer: "C",
    category: "材料工程"
  },
  
  // 第312题
  {
    id: 312,
    type: "single_choice",
    question: "烧结的未涂釉的陶瓷产品上出现的交织在一起的锯齿状的网络可能是（）。",
    options: {
      A: "热激变显示",
      B: "疲劳裂纹",
      C: "缩裂",
      D: "磨削裂纹"
    },
    answer: "A",
    category: "材料工程"
  },
  
  // 第313题
  {
    id: 313,
    type: "single_choice",
    question: "容易产生气孔瑕疵的工件是（）。",
    options: {
      A: "焊接件",
      B: "锻件",
      C: "板材",
      D: "以上都不是"
    },
    answer: "A",
    category: "工艺优化"
  },
  
  // 第314题
  {
    id: 314,
    type: "single_choice",
    question: "焊接时，引弧处最容易产生（）。",
    options: {
      A: "夹杂",
      B: "气孔",
      C: "未焊透",
      D: "弧坑裂纹"
    },
    answer: "D",
    category: "工艺优化"
  },
  
  // 第315题
  {
    id: 315,
    type: "single_choice",
    question: "对金属毛坯施加压力或冲击力使其产生塑性变形，制成所需几何形状，尺寸，组织性能的工件，这种加工方法是（）。",
    options: {
      A: "铸造",
      B: "机械加工",
      C: "锻造",
      D: "冶炼"
    },
    answer: "C",
    category: "技术基础"
  },
  
  // 第316题
  {
    id: 316,
    type: "single_choice",
    question: "SLM工艺打印时，激光光斑直径一般为：",
    options: {
      A: "0.2mm",
      B: "80um",
      C: "2mm",
      D: "15um"
    },
    answer: "B",
    category: "打印技术"
  },
  
  // 第317题
  {
    id: 317,
    type: "single_choice",
    question: "SLM工艺打印之间，打印316L不锈钢，一下参数满足打印工艺的是：",
    options: {
      A: "层厚0.05mm，激光功率50瓦，速度1000mm/s",
      B: "层厚0.03mm，激光功率400瓦，速度1000mm/s",
      C: "层厚0.03mm，激光功率260瓦，速度500mm/s",
      D: "层厚0.05mm，激光激光功率260瓦，速度1000mm/s"
    },
    answer: "D",
    category: "打印技术"
  },
  
  // 第318题
  {
    id: 318,
    type: "single_choice",
    question: "下列符合SLA打印工艺常用层厚的是：",
    options: {
      A: "1mm",
      B: "0.03mm",
      C: "0.1mm",
      D: "0.2mm"
    },
    answer: "C",
    category: "打印技术"
  },
  
  // 第319题
  {
    id: 319,
    type: "single_choice",
    question: "淬火介质的冷却速度必须（）临界冷却速度。",
    options: {
      A: "大于",
      B: "小于",
      C: "等于",
      D: "无关"
    },
    answer: "A",
    category: "材料工程"
  },
  
  // 第320题
  {
    id: 320,
    type: "single_choice",
    question: "钢在一定条件下淬火后，获得马氏体的能力，称为（）。",
    options: {
      A: "淬硬性",
      B: "淬透性",
      C: "耐磨性",
      D: "耐蚀性"
    },
    answer: "B",
    category: "材料工程"
  },
  
  // 第321题
  {
    id: 321,
    type: "single_choice",
    question: "钢的淬硬性主要取决于钢的（）。",
    options: {
      A: "含硫量",
      B: "含锰量",
      C: "含碳量",
      D: "含硅量"
    },
    answer: "C",
    category: "材料工程"
  },
  
  // 第322题
  {
    id: 322,
    type: "single_choice",
    question: "过共析钢正火的目的是（）。",
    options: {
      A: "调整硬度，改善切削加工性",
      B: "细化晶粒，为淬火作组织准备",
      C: "消除网状二次渗碳体",
      D: "防止淬火变形与开裂"
    },
    answer: "C",
    category: "材料工程"
  },
  
  // 第323题
  {
    id: 323,
    type: "single_choice",
    question: "为使高碳钢便于机械加工，常预先进行（）。",
    options: {
      A: "淬火",
      B: "正火",
      C: "球化退火",
      D: "回火"
    },
    answer: "C",
    category: "材料工程"
  },
  
  // 第324题
  {
    id: 324,
    type: "single_choice",
    question: "立体光固化工艺设备扫描振镜的扫描速度一般为（）mm/s",
    options: {
      A: "6000-12000",
      B: "4000-12000",
      C: "6000-20000",
      D: "4000-20000"
    },
    answer: "A",
    category: "打印技术"
  },
  
  // 第325题
  {
    id: 325,
    type: "single_choice",
    question: "在SLA工艺中，通常为了减少固化应力导致的变形，扫描截面时往往采用（）扫面曝光的工艺",
    options: {
      A: "高速B单层单次",
      B: "两次交叉",
      C: "两次同一方向重复",
      D: "无规则扫描"
    },
    answer: "C",
    category: "打印技术"
  },
  
  // 第326题
  {
    id: 326,
    type: "single_choice",
    question: "构件在拉伸或压缩时的变形特点（）。",
    options: {
      A: "仅有轴向变形",
      B: "仅有横向变形",
      C: "轴向和横向变形",
      D: "轴向变形和截面转动"
    },
    answer: "C",
    category: "技术基础"
  },
  
  // 第327题
  {
    id: 327,
    type: "single_choice",
    question: "一般情况下，剪切面与外力的关系是（）。",
    options: {
      A: "相互垂直",
      B: "相互平行",
      C: "相互成45°",
      D: "无规律"
    },
    answer: "B",
    category: "技术基础"
  },
  
  // 第328题
  {
    id: 328,
    type: "single_choice",
    question: "应力集中现象会使构件的承载能力有所（）。",
    options: {
      A: "提高",
      B: "下降",
      C: "不变",
      D: "无法确定"
    },
    answer: "B",
    category: "技术基础"
  },
  
  // 第329题
  {
    id: 329,
    type: "single_choice",
    question: "挤压与压缩比较，两者（）。",
    options: {
      A: "完全一样",
      B: "不一样",
      C: "变形特征一样",
      D: "应力特征一样"
    },
    answer: "B",
    category: "技术基础"
  },
  
  // 第330题
  {
    id: 330,
    type: "single_choice",
    question: "只有一个剪切面的剪切称为（）。",
    options: {
      A: "挤压",
      B: "双剪",
      C: "单剪",
      D: "多剪"
    },
    answer: "C",
    category: "技术基础"
  },
  
  // 第331题
  {
    id: 331,
    type: "single_choice",
    question: "挤压面为平面时，计算挤压面积为（）。",
    options: {
      A: "实际挤压面积",
      B: "实际挤压面积的一半",
      C: "半圆柱面积的正投影",
      D: "不能确定"
    },
    answer: "A",
    category: "技术基础"
  },
  
  // 第332题
  {
    id: 332,
    type: "single_choice",
    question: "脆性材料的唯一的强度指标是（）。",
    options: {
      A: "屈服极限",
      B: "比例极限",
      C: "弹性极限",
      D: "强度极限"
    },
    answer: "D",
    category: "材料工程"
  },
  
  // 第333题
  {
    id: 333,
    type: "single_choice",
    question: "载荷卸掉后不能消失的变形称（）变形。",
    options: {
      A: "弹性",
      B: "塑性",
      C: "柔性",
      D: "弹-塑性"
    },
    answer: "B",
    category: "材料工程"
  },
  
  // 第334题
  {
    id: 334,
    type: "single_choice",
    question: "铸铁的抗拉强度比其抗压强度要（）。",
    options: {
      A: "大",
      B: "小",
      C: "相等",
      D: "无法确定"
    },
    answer: "B",
    category: "材料工程"
  },
  
  // 第335题
  {
    id: 335,
    type: "single_choice",
    question: "钢材进入屈服阶段后，表面会沿（）出现滑移线。",
    options: {
      A: "横截面",
      B: "纵截面",
      C: "最大剪应力所在的面",
      D: "最大正应力所在面"
    },
    answer: "C",
    category: "材料工程"
  },
  
  // 第336题
  {
    id: 336,
    type: "single_choice",
    question: "以上属于立体光固化技术打印的后处理主要步骤之一的是",
    options: {
      A: "钛基催化剂",
      B: "铬基催化剂",
      C: "路易斯酸催化剂",
      D: "茂金属催化剂"
    },
    answer: "A",
    category: "工艺优化"
  },
  
  // 第337题
  {
    id: 337,
    type: "single_choice",
    question: "以下属于立体光固化技术打印的后处理主要步骤之一的是",
    options: {
      A: "干燥样件",
      B: "清水冲洗样件",
      C: "用蒸馏水泡洗",
      D: "以上都是"
    },
    answer: "A",
    category: "工艺优化"
  },

  {
    id: 338,
    type: "single_choice",
    question: "SLA打印完成后不正确的操作是（）",
    options: {
      A: "流出多余的树脂",
      B: "酒精清洗",
      C: "二次固化",
      D: "放在太阳光下"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 339,
    type: "single_choice",
    question: "LCD光固化切片得到的是（）颜色的图片。",
    options: {
      A: "黄、白",
      B: "蓝、橙",
      C: "黑、白",
      D: "黄、绿"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 340,
    type: "single_choice",
    question: "以下哪一个属于光固化的违规操作（）。",
    options: {
      A: "打印时不盖保护罩",
      B: "使用塑料铲产料槽",
      C: "全程戴手套操作",
      D: "使用酒精清洗模型"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 341,
    type: "single_choice",
    question: "光固化打印机使用的光敏树脂具有（）。",
    options: {
      A: "腐蚀性",
      B: "挥发性",
      C: "稳定性",
      D: "脱水性"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 342,
    type: "single_choice",
    question: "使用光固化打印机要注意的事项（）。",
    options: {
      A: "戴一次性手套",
      B: "模型需要用酒精清理",
      C: "模型要二次固化",
      D: "可以使用模型铲料槽"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 343,
    type: "single_choice",
    question: "光固化打印机曝光时间太短不会导致哪种问题（）。",
    options: {
      A: "模型脱落",
      B: "打印翘边",
      C: "模型细节打印不出来",
      D: "模型比较难取"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 344,
    type: "single_choice",
    question: "危险截面是指（）。",
    options: {
      A: "轴力大的截面",
      B: "尺寸小的截面",
      C: "应力大的截面",
      D: "尺寸大的截面"
    },
    answer: "C",
    category: "技术基础"
  },
  {
    id: 345,
    type: "single_choice",
    question: "应力集中一般出现在（）。",
    options: {
      A: "光滑圆角处",
      B: "孔槽附近",
      C: "等直轴段的中点",
      D: "截面均匀变化处"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 346,
    type: "single_choice",
    question: "冷作硬化，提高了材料的（）。",
    options: {
      A: "屈服极限",
      B: "比例极限",
      C: "强度极限",
      D: "应力极限"
    },
    answer: "B",
    category: "材料工程"
  },
  {
    id: 347,
    type: "single_choice",
    question: "构件承载能力不包括（）。",
    options: {
      A: "足够的强度",
      B: "足够的刚度",
      C: "足够的韧性",
      D: "足够的稳定性"
    },
    answer: "C",
    category: "技术基础"
  },
  {
    id: 348,
    type: "single_choice",
    question: "物体受力作用而发生变形，当外力去掉后又能恢复原来的形状和尺寸的性质称为（）。",
    options: {
      A: "弹性",
      B: "塑性",
      C: "刚性",
      D: "稳定性"
    },
    answer: "A",
    category: "材料工程"
  },
  {
    id: 349,
    type: "single_choice",
    question: "光固化打印机在打印时发生模型脱落是（）造成的。",
    options: {
      A: "打印时断电",
      B: "层高太高",
      C: "曝光时间太长",
      D: "平台未调平"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 350,
    type: "single_choice",
    question: "光固化打印之前需要对料槽进行过滤清理的原因是（）。",
    options: {
      A: "以防杂物对模型产生影响",
      B: "节省耗材",
      C: "进行调平",
      D: "以上都不是"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 351,
    type: "single_choice",
    question: "光固化模型打印错层的原因可能有（）",
    options: {
      A: "料槽能存在杂质",
      B: "屏幕损坏",
      C: "耗材变质",
      D: "以上均有"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 352,
    type: "single_choice",
    question: "长时间不使用光固化机器应清洗好料槽，因为（）",
    options: {
      A: "防止材料在料槽中固化",
      B: "防止有杂物进入料槽",
      C: "防止料槽内有残余模型",
      D: "以上均有"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 353,
    type: "single_choice",
    question: "光固化机型，每层固化时间为（）",
    options: {
      A: "5~10s",
      B: "0~5s",
      C: "15~20s",
      D: "10~15s"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 354,
    type: "single_choice",
    question: "轴力最大的轴端，应力（）。",
    options: {
      A: "一定大",
      B: "一定小",
      C: "一定不会最小",
      D: "以上答案不正确"
    },
    answer: "D",
    category: "技术基础"
  },
  {
    id: 355,
    type: "single_choice",
    question: "求构件内力普遍采用（）。",
    options: {
      A: "几何法",
      B: "实验法",
      C: "截面法",
      D: "估量法"
    },
    answer: "C",
    category: "技术基础"
  },
  {
    id: 356,
    type: "single_choice",
    question: "二力直杆（）。",
    options: {
      A: "受剪切作用",
      B: "受扭转作用",
      C: "受弯曲作用",
      D: "受拉伸作用"
    },
    answer: "D",
    category: "技术基础"
  },
  {
    id: 357,
    type: "single_choice",
    question: "杆件的基本变形中，不包括（）。",
    options: {
      A: "弯-扭变形",
      B: "弯曲",
      C: "剪切和挤压",
      D: "扭转"
    },
    answer: "A",
    category: "技术基础"
  },
  {
    id: 358,
    type: "single_choice",
    question: "SLA工艺的优点是（）",
    options: {
      A: "成型产品对储存要求低",
      B: "对工作环境要求低",
      C: "设备造假低",
      D: "尺寸精度高"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 359,
    type: "single_choice",
    question: "SLA 对于成形材料选择，要求不正确的是（）",
    options: {
      A: "成形材料易于固化，且成形后具有一定的粘结强度。",
      B: "成形材料的黏度必须要高，以保证成形后具有一定的粘结强度。",
      C: "成形材料本身的热影响区小，收缩应力小。",
      D: "成形材料对光有一定的透过深度，以获得具有一定固化深度的层片。"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 360,
    type: "single_choice",
    question: "SLA 技术使用的原材料是（）。",
    options: {
      A: "光敏树脂",
      B: "粉末材料",
      C: "陶瓷材料",
      D: "金属材料"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 361,
    type: "single_choice",
    question: "光固化机型，打印完成后，先后顺序正确的是（）",
    options: {
      A: "先固化后清洗",
      B: "先清洗不固化",
      C: "先清洗后固化",
      D: "先固化不清洗"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 362,
    type: "single_choice",
    question: "光固化机型，回收保存材料时，不要放入原瓶，用（）盛放。",
    options: {
      A: "一次性纸杯",
      B: "透明玻璃瓶",
      C: "透明塑料瓶",
      D: "不透光的有盖子的瓶子"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 363,
    type: "single_choice",
    question: "光固化机型，固化光为（），不要长时间肉眼注视。",
    options: {
      A: "紫外光",
      B: "激光",
      C: "LED 光",
      D: "UV 光"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 364,
    type: "single_choice",
    question: "光固化机型，如果发现材料沉淀，建议（）。",
    options: {
      A: "兑入其他材料",
      B: "将沉淀摇匀后继续使用",
      C: "继续使用",
      D: "更换新的材料"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 365,
    type: "single_choice",
    question: "光固化机型，如发现料槽漏液，应（）。",
    options: {
      A: "不用在意",
      B: "立即停止打印",
      C: "将漏掉的耗材重新补上",
      D: "直接将料槽取下"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 366,
    type: "single_choice",
    question: "在金属增材制造中，以下哪种情况会造成零件层间粘结不好()",
    options: {
      A: "激光能量过高",
      B: "激光能量不足",
      C: "腔体温度过高",
      D: "腔体温度过低"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 367,
    type: "single_choice",
    question: "在金属3D打印工艺中，需要提前准备工作，下列中那些准备工作是不正确的（）",
    options: {
      A: "须佩戴手套和口罩等防护用品，并用专业工具清理机器。",
      B: "使用干燥的脱脂棉擦拭基板，使用沾有酒精的脱脂棉擦拭腔体上方的保护镜。",
      C: "提前30分钟打开冷水机，并打开冷水机RUN按钮，使冷水机温度保持在22°C后，再进行下一步操作。",
      D: "使用纸巾仔细擦拭镜头"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 368,
    type: "single_choice",
    question: "EBSM技术打印的金属部件沉积态的热应力比SLM技术打印的同种零件（）",
    options: {
      A: "低",
      B: "中",
      C: "高",
      D: "快"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 369,
    type: "single_choice",
    question: "EBSM技术打印所用的金属粉末比SLM技术所用的粉末的粒径",
    options: {
      A: "小",
      B: "大",
      C: "相同",
      D: "以上都不是"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 370,
    type: "single_choice",
    question: "目前激光选区熔化沉积技术应用于金属、非金属，所选用的材料有（）",
    options: {
      A: "丝材",
      B: "球形粉",
      C: "板材",
      D: "棒材"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 371,
    type: "single_choice",
    question: "一般SLM扫描路径设置参数在哪里修改？（）",
    options: {
      A: "设备工艺参数",
      B: "切片参数",
      C: "支撑参数",
      D: "调试参数"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 372,
    type: "single_choice",
    question: "下列不是SLM技术中不常见的扫描路径是（）",
    options: {
      A: "逐行扫描",
      B: "分块扫描",
      C: "倾斜扫描",
      D: "蜂窝扫描"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 373,
    type: "single_choice",
    question: "一般SLM材料可以新旧配比来避免材料浪费，配比比例为（）",
    options: {
      A: "1：1",
      B: "1：2",
      C: "1：3",
      D: "根据材料选择"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 374,
    type: "single_choice",
    question: "光敏树脂新旧配比为（）",
    options: {
      A: "1：1",
      B: "1：2",
      C: "1：3",
      D: "根据材料选择"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 375,
    type: "single_choice",
    question: "以下对粉末耗材存储描述正确的是：（）",
    options: {
      A: "粉末耗材存储应防止干燥阴凉的位置，如果容易发生反应，则应隔绝反应源",
      B: "粉末耗材可以存放在玻璃瓶中，无需密封",
      C: "高分子粉末耗材可以长期反复使用，无需添加新粉末",
      D: "金属粉末耗材在常温下不会与空气发生反应，无需进行密封保存"
    },
    answer: "A",
    category: "材料工程"
  },
  {
    id: 376,
    type: "single_choice",
    question: "以下对打印废料的描述正确的是：（）",
    options: {
      A: "可以将打印废料随垃圾一起处理",
      B: "打印废料可以回收二次利用",
      C: "不同工艺的打印废料需要根据垃圾分类方法进行单独处理，不可与其他物品放在同一空间",
      D: "光敏树脂打印废料可以直接倒入下水道"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 377,
    type: "single_choice",
    question: "以下对打印后未利用的耗材描述正确的是：（）",
    options: {
      A: "可以存放在打印机中",
      B: "应根据每种材料的存放要求及时处理并存放",
      C: "FDM耗材可以长期存放在空气中",
      D: "金属粉末耗材应防止与氧气接触，可存放在氮气中"
    },
    answer: "B",
    category: "材料工程"
  },
  {
    id: 378,
    type: "single_choice",
    question: "适用于SLM工艺金属粉末耗材颗粒直径为：（）",
    options: {
      A: "0-15um",
      B: "0-53um",
      C: "50-80um",
      D: "60-120um"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 379,
    type: "single_choice",
    question: "电弧增材制造技术在（）领域应用较广",
    options: {
      A: "医疗领域",
      B: "汽车领域",
      C: "航空领域",
      D: "模具领域"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 380,
    type: "single_choice",
    question: "电弧增材制造技术主要适合制造（）零件",
    options: {
      A: "大型结构件",
      B: "小型精细件",
      C: "表面光滑零件",
      D: "塑料件"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 381,
    type: "single_choice",
    question: "电弧增材制造3D打印技术是将（）与计算机辅助设计结合起来的一种加工技术",
    options: {
      A: "焊接方法",
      B: "车削方法",
      C: "铣削方法",
      D: "铨削方法"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 382,
    type: "single_choice",
    question: "电弧增材制造技术是采用（）的方式制造致密金属实体构件",
    options: {
      A: "逐层堆焊",
      B: "层层堆积",
      C: "熔融堆积",
      D: "激光固化"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 383,
    type: "single_choice",
    question: "电弧送丝增材制造技术，即WAAM（WireandArcAdditiveManufacturing）技术采用( )作为热源将金属丝材熔化，按设定成形路径在基板上堆积每一层片，层层堆敷直至成形金属件。",
    options: {
      A: "焊接电弧",
      B: "激光器",
      C: "加热棒",
      D: "微波"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 384,
    type: "single_choice",
    question: "EBSM技术是利用高能（）将金属粉体熔化并迅速冷却的过程。",
    options: {
      A: "电子束",
      B: "激光",
      C: "喷头",
      D: "UV激光"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 385,
    type: "single_choice",
    question: "EBSM铺粉层厚一般设置为（）",
    options: {
      A: "0.05-0.2",
      B: "0.2-0.4",
      C: "0.4-0.6",
      D: "0.1-0.3"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 386,
    type: "single_choice",
    question: "调节哪个参数不能提升零件打印表面效果",
    options: {
      A: "打印层厚",
      B: "边框激光功率",
      C: "边框激光扫描速度",
      D: "填充激光功率"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 387,
    type: "single_choice",
    question: "SLM工艺打印金属零件适用于加工（）",
    options: {
      A: "大批量生产的零件",
      B: "大尺寸零件",
      C: "机械加工难加工多零件",
      D: "低吸光率金属"
    },
    answer: "C",
    category: "打印技术"
  },
    {
    id: 388,
    type: "single_choice",
    question: "SLM工艺修改（）参数不可以提高打印速度",
    options: {
      A: "激光扫描速度",
      B: "扫描间距",
      C: "打印层厚",
      D: "打印功率"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 389,
    type: "single_choice",
    question: "SLM工艺金属打印零件影响打印表面粗糙度的参数是（）",
    options: {
      A: "填充激光功率",
      B: "铺粉速度",
      C: "边框功率",
      D: "工作缸升降精度"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 390,
    type: "single_choice",
    question: "以下是导致SLM工艺金属打印零件断层的原因是：（）",
    options: {
      A: "打印金属粉末过于干燥",
      B: "打印激光器功率设置过大",
      C: "打印支撑添加过于稀疏导致应力过大将支撑拉断",
      D: "工作缸卡住不动"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 391,
    type: "single_choice",
    question: "以下关于SLM加工过程中涉及的工艺参数描述不正确的是（）",
    options: {
      A: "熔覆道，指激光融化粉末凝固后形成的熔池。",
      B: "扫描速度，指激光光斑沿扫描轨迹运动的速度。",
      C: "激光功率，指激光器的额定输出功率，单位为W。",
      D: "铺粉层厚，指每一次铺粉前工作缸下降的高度。"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 392,
    type: "single_choice",
    question: "金属3D打印前，需设置打印参数，扫描间距，下列哪项参数适合打印。",
    options: {
      A: "0.05-0.15mm",
      B: "0.15-0.25mm",
      C: "0.25-0.35mm",
      D: "0.35-0.5mm"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 393,
    type: "single_choice",
    question: "金属3D打印前，需设置打印参数，加工层厚，下列哪项参数不适合打印。",
    options: {
      A: "0.03mm",
      B: "0.04mm",
      C: "0.05mm",
      D: "0.1mm"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 394,
    type: "single_choice",
    question: "在（）中可以根据设备硬件修改打印头直径。",
    options: {
      A: "工厂模式设置",
      B: "切片设置",
      C: "打印管理",
      D: "原理"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 395,
    type: "single_choice",
    question: "在工厂模式设置中，可以在（）中切换切片软件的技术类型。",
    options: {
      A: "切片设置",
      B: "原理",
      C: "打印管理",
      D: "型号"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 396,
    type: "single_choice",
    question: "在工厂模式设置中，可以在（）中修改设备型号。",
    options: {
      A: "切片设置",
      B: "不同高度切片设置",
      C: "打印管理",
      D: "打印机设置"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 397,
    type: "single_choice",
    question: "SLA技术有后固化工艺，后固化时间比一次固化时间（）",
    options: {
      A: "长",
      B: "短",
      C: "相当",
      D: "无法确定"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 398,
    type: "single_choice",
    question: "以下是SLA技术特有的后处理技术是？（）",
    options: {
      A: "去除成型件",
      B: "去除支撑",
      C: "后固化成型件",
      D: "排除为固化的光敏树脂"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 399,
    type: "single_choice",
    question: "以下属于立体光固化技术打印的后处理主要步骤之一的是（）",
    options: {
      A: "用蒸馏水泡洗",
      B: "以上都是",
      C: "干燥样件",
      D: "清水冲洗样件"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 400,
    type: "single_choice",
    question: "SLA原型的变形量中由于后固化收缩产生的比例是（）。",
    options: {
      A: "5%～10%",
      B: "70%～90%",
      C: "20%～50%",
      D: "25%～40%"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 401,
    type: "single_choice",
    question: "SLM在制件中，往往会添加支撑结构，下列选项中不是添加支撑结构起到的作用的是（）",
    options: {
      A: "防止零件局部翘曲",
      B: "防止零件局部变形",
      C: "保持加工稳定性",
      D: "增加制件美观性"
    },
    answer: "D",
    category: "技术基础"
  },
  {
    id: 402,
    type: "single_choice",
    question: "模型加支撑时，支撑间隙的设置距离为（）时，打印效果较好，支撑亦清理。",
    options: {
      A: "0.01-0.03mm",
      B: "0.03-0.06mm",
      C: "0.06-1mm",
      D: "1-2mm"
    },
    answer: "C",
    category: "技术基础"
  },
  {
    id: 403,
    type: "single_choice",
    question: "模型加支撑时，摆放角度设置为（）可保证零件打印效果比较好",
    options: {
      A: "30°以上",
      B: "45°以上",
      C: "45°以下",
      D: "30°以下"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 404,
    type: "single_choice",
    question: "设备打印工件添加辅助支撑的作用（）。",
    options: {
      A: "避免悬空分层漂移",
      B: "美观",
      C: "防止变脆",
      D: "方便分层"
    },
    answer: "A",
    category: "技术基础"
  },
  {
    id: 405,
    type: "single_choice",
    question: "下面哪种支撑类型从顶视图来看是Z字型？（）",
    options: {
      A: "树状支撑",
      B: "网格支撑",
      C: "柱状支撑",
      D: "线状支撑"
    },
    answer: "C",
    category: "技术基础"
  },
  {
    id: 406,
    type: "single_choice",
    question: "面状支撑的主要优点是（）。",
    options: {
      A: "最容易拆取",
      B: "底部是弧面的模型，支撑效果好",
      C: "最省料",
      D: "拆模型后不易留下痕迹"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 407,
    type: "single_choice",
    question: "下面哪种支撑最容易拆取（）。",
    options: {
      A: "线状支撑",
      B: "柱状支撑",
      C: "网格支撑",
      D: "树状支撑"
    },
    answer: "A",
    category: "技术基础"
  },
  {
    id: 408,
    type: "single_choice",
    question: "下面哪种支撑最省料（）。",
    options: {
      A: "面状支撑",
      B: "树状支撑",
      C: "网格支撑",
      D: "面状支撑"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 409,
    type: "single_choice",
    question: "下列哪个切片程序属于SLA切片文件？",
    options: {
      A: ".slc",
      B: "gcode",
      C: ".txt",
      D: ".nc"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 410,
    type: "single_choice",
    question: "在金属3D打印机制件前需对其进行设备调试，下列描述中不正确的是（）",
    options: {
      A: "观察氧含量仪表读数和实际氧含量仪表读数是否一致。",
      B: "调试缸体和铺粉系统正常升降和铺粉送粉。",
      C: "打开加热功能，使得温度快速上升。",
      D: "观察振镜开关按钮是否已打开。"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 411,
    type: "single_choice",
    question: "在FDM切片软件中，ABS材料的打印头工作温度预设为（）",
    options: {
      A: "240度",
      B: "255度",
      C: "245度",
      D: "250度"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 412,
    type: "single_choice",
    question: "在FDM切片软件中，（）可以调整支撑的数量。",
    options: {
      A: "支撑结构类型",
      B: "封闭面策略",
      C: "支撑临界角和支撑密度",
      D: "模型支撑类型"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 413,
    type: "single_choice",
    question: "在FDM切片软件中，修改（）可以做到保证模型体积的同时尽可能减轻模型的重量。",
    options: {
      A: "边缘宽度",
      B: "填充率",
      C: "填充打印速度",
      D: "内部填充图案"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 414,
    type: "single_choice",
    question: "在FDM切片软件中，修改（）参数可以增加模型强度。",
    options: {
      A: "边缘宽度",
      B: "层高",
      C: "填充率",
      D: "打印头工作温度"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 415,
    type: "single_choice",
    question: "在FDM切片软件中，修改（）参数可以缩短打印时间。",
    options: {
      A: "层高",
      B: "外壳打印速度",
      C: "填充打印速度",
      D: "填充率"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 416,
    type: "single_choice",
    question: "光固化立体成型工艺中影响原型精度的因素不包括（）",
    options: {
      A: "温度变化产生误差",
      B: "成型过程产生的误差",
      C: "数据处理产生的误差",
      D: "树脂材料产生的误差"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 417,
    type: "single_choice",
    question: "光固化成型工艺中用来刮去每层多余树脂的装置是（）",
    options: {
      A: "刮刀",
      B: "升降台",
      C: "激光器",
      D: "加工平台"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 418,
    type: "single_choice",
    question: "光固化快速成型工艺中，有时需要添加支撑结构，支撑结构的主要作用错误的是（）。",
    options: {
      A: "防止翘曲变形",
      B: "保证形状",
      C: "有利于美观",
      D: "防止悬空"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 419,
    type: "single_choice",
    question: "SLA技术使用的树脂材料在（）℃以上的温度下可以完全烧蚀。",
    options: {
      A: "450",
      B: "700",
      C: "900",
      D: "950"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 420,
    type: "single_choice",
    question: "在SLA工艺中，通常为了减少固化应力导致的变形，扫描截面时往往采用（）扫描曝光的工艺",
    options: {
      A: "高速",
      B: "单层单次",
      C: "两次交叉",
      D: "两次同一方向重复"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 421,
    type: "single_choice",
    question: "SLA工艺制作压蜡模具，进行蜡模的制造，属于（）",
    options: {
      A: "金属基",
      B: "陶瓷基",
      C: "耐火材料",
      D: "树脂基"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 422,
    type: "single_choice",
    question: "下列哪种情况会导致STL文件导入设备切片软件后图文文件不正常（）",
    options: {
      A: "工作腔氧含量过低",
      B: "工作腔氧含量过高",
      C: "STL文件错误",
      D: "工作腔温度过高"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 423,
    type: "single_choice",
    question: "建模完成后，模型导出下列哪种格式（），导入切片软件进行打印。",
    options: {
      A: "STP",
      B: "STL",
      C: "EXE",
      D: "OBJ"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 424,
    type: "single_choice",
    question: "将模型导入Modellight后，法线模型底部不平，可以使用（）功能对模型底部进行修改。",
    options: {
      A: "翻转法线",
      B: "X轴切割",
      C: "自由切割",
      D: "Z轴切割"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 425,
    type: "single_choice",
    question: "将模型导入Modellight后，下面哪种情况软件不会报错。()",
    options: {
      A: "模型与模型之间有交集",
      B: "模型超出界面上方边缘",
      C: "模型位于操作界面以内，且与其他模型无交集",
      D: "模型超出左右两侧边缘"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 426,
    type: "single_choice",
    question: "模型导入Modellight后，发现模型法线出现问题，可以尝试使用（）进行修复。",
    options: {
      A: "旋转模型至选中平面",
      B: "翻转法线（面）",
      C: "重新导入模型",
      D: "将模型置于平面"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 427,
    type: "single_choice",
    question: "模型导入切片软件后，模型上呈现绿色，说明（）",
    options: {
      A: "模型法线出现问题或者有漏洞",
      B: "模型超出机器打印大小",
      C: "模型可以正常打印",
      D: "模型和其他模型有交集"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 428,
    type: "single_choice",
    question: "模型导入切片软件中，模型如果未与平台接触，可以使用（）功能。",
    options: {
      A: "模型居中",
      B: "自动放置",
      C: "置于平面",
      D: "旋转模型至选中平面"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 429,
    type: "single_choice",
    question: "在增材制造虚拟仿真平台中进行实操模拟首先应该（）",
    options: {
      A: "佩戴手套和口罩等防护用品",
      B: "打开冷水机",
      C: "打开设备总电",
      D: "打开工作腔"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 430,
    type: "single_choice",
    question: "通过记录工艺参数及打印失败的零件能够初步判断打印失败原因，以下不是判断的主要参数为：（）",
    options: {
      A: "激光功率",
      B: "打印材料",
      C: "打印时长",
      D: "打印层厚"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 431,
    type: "single_choice",
    question: "以下对工艺参数记录描述正确的是：（）",
    options: {
      A: "工艺参数包括但不限于：激光功率、扫描速度、打印层厚",
      B: "工艺参数记录完成后即可，无需保存",
      C: "工艺参数只影响打印速度，所以只需记录打印层厚",
      D: "工艺参数影响打印件的速度，为了更快的记录结果，可以修改工艺参数"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 432,
    type: "single_choice",
    question: "导致SLM打印工艺失败的原因不包括：（）",
    options: {
      A: "激光功率过小",
      B: "打印层厚过高",
      C: "环境温度在30°C",
      D: "铺粉不平"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 433,
    type: "single_choice",
    question: "SLM工艺零件打印失败后，无需记录的工艺参数为：（）",
    options: {
      A: "激光功率",
      B: "扫描间距",
      C: "激光速度",
      D: "Z轴精度"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 434,
    type: "single_choice",
    question: "下列不属于打印失败的原因是（）",
    options: {
      A: "支撑参数设置",
      B: "激光功率",
      C: "层厚设置",
      D: "未佩戴防护镜"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 435,
    type: "single_choice",
    question: "金属3D打印中，工作腔体中需要通入保护气体，下列中哪种气体是正确的（）",
    options: {
      A: "氩气",
      B: "氧气",
      C: "二氧化碳",
      D: "一氧化碳"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 436,
    type: "single_choice",
    question: "金属3D打印前，需开启冷水机，使冷水机温度保持在（）°后，再进行下一步操作。",
    options: {
      A: "18-20",
      B: "22-26",
      C: "28-32",
      D: "30-34"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 437,
    type: "single_choice",
    question: "金属3D打印中需要冷水机的使用，使用中冷水机加入的水为（）",
    options: {
      A: "蒸馏水",
      B: "自来水",
      C: "碳酸水",
      D: "苏打水"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 438,
    type: "single_choice",
    question: "金属3D打印前，检查氧含量，到达（）才可打印",
    options: {
      A: "10000ppm以上",
      B: "10000ppm以下",
      C: "1000ppm以上",
      D: "1000ppm以下"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 439,
    type: "single_choice",
    question: "观察加工的熔化情况，第一层熔化后应该是()，若有一定的球化、发黑，需调高激光功率。",
    options: {
      A: "球化",
      B: "发黑",
      C: "红光",
      D: "亮光"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 440,
    type: "single_choice",
    question: "FDM3D打印机，远端送料电机处有（）可以辅助控制进料。",
    options: {
      A: "导料管",
      B: "摇臂",
      C: "传动轴",
      D: "断料检测开关"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 441,
    type: "single_choice",
    question: "FDM3D打印机，正常情况下进料应该从（）开始进料。",
    options: {
      A: "直接进料",
      B: "近端进料口",
      C: "远端进料口",
      D: "进、远端结合进料"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 442,
    type: "single_choice",
    question: "下列中对于SLM技术中发生的球化现象描述不正确的是(）",
    options: {
      A: "球化的产生导致了金属部件内部形成空隙",
      B: "球化的产生会使铺粉棍在铺粉的过程中与前一层产生较大的摩擦力",
      C: "球化现象会损坏金属表面质量",
      D: "从热力学角度讲，SLM的润湿是自由能升高的过程"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 443,
    type: "single_choice",
    question: "金属3D打印过程是一个复杂的成型过程，为了提高打印成功概率，一般在打印前会用（）技术，模拟打印过程。",
    options: {
      A: "CAD技术",
      B: "CAM技术",
      C: "CAE技术",
      D: "PDM技术"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 444,
    type: "single_choice",
    question: "在SLM过程中，因高斯光束光强的分布特点，熔池内会形成张力梯度，在张力梯度下熔池内液态金属沿径向的流动方向为（）",
    options: {
      A: "由左向右",
      B: "由上向下",
      C: "由边缘向中心",
      D: "由中心向边缘"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 445,
    type: "single_choice",
    question: "在SLM技术中，孔隙的存在急剧降低了零件的力学性能，下列选项中不是孔隙形成的原因是（）",
    options: {
      A: "SLM中球化",
      B: "气体的引入",
      C: "腔体温度升高",
      D: "裂纹的产生"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 446,
    type: "single_choice",
    question: "SLM过程中，激光能量过高会引起金属零部件的缺陷，其缺陷不包括（）",
    options: {
      A: "球化",
      B: "热应力",
      C: "翘曲变形",
      D: "软化变形"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 447,
    type: "single_choice",
    question: "金属3D打印前，基板需调平，用塞尺调节基板跟刮刀的距离为（），即可。",
    options: {
      A: "0.05mm",
      B: "0.1mm",
      C: "0.15mm",
      D: "0.2mm"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 448,
    type: "single_choice",
    question: "如果点击三轴复位后，FDM设备发出嘀一一的声音，说明（）",
    options: {
      A: "开始进行复位",
      B: "压敏开关过于灵敏",
      C: "压敏开关需要修理",
      D: "压敏开关过于迟钝"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 449,
    type: "single_choice",
    question: "自动调平结果为正常，但打印时仍然过紧或过松，需要调整（）。",
    options: {
      A: "调节板",
      B: "Z轴限位补偿",
      C: "升降台",
      D: "基板"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 450,
    type: "single_choice",
    question: "对于FDM3D打印设备来说，平台校准位于（）界面。",
    options: {
      A: "调整",
      B: "打印",
      C: "查看",
      D: "设置"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 451,
    type: "single_choice",
    question: "IGAMSLM金属打印机导入模型出错，不可能的原因是()",
    options: {
      A: "STL模型需要修复",
      B: "软件运行环境不符",
      C: "模型导入格式不正确",
      D: "机器故障"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 452,
    type: "single_choice",
    question: "IGAMSLM金属打印机多层制造前应该先使用（）",
    options: {
      A: "单层制造",
      B: "仿真模拟",
      C: "扫描策略",
      D: "设备参数"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 453,
    type: "single_choice",
    question: "IGAMSLM金属打印机想开启工作腔需要在工控机中打开（）",
    options: {
      A: "电推杆",
      B: "激光器",
      C: "过滤",
      D: "振镜"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 454,
    type: "single_choice",
    question: "IGAMSLM金属打印机多层制造结束后应先关闭（）",
    options: {
      A: "保护气阀门",
      B: "工作腔",
      C: "激光器",
      D: "冷水机"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 455,
    type: "single_choice",
    question: "IGAMSLM金属打印机开启时，先打开（）",
    options: {
      A: "冷水机",
      B: "激光器",
      C: "工作腔",
      D: "工控机"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 456,
    type: "single_choice",
    question: "金属3D打印前，需开启冷水机，使冷水机温度保持在（）后，再进行下一步操作。",
    options: {
      A: "18-20",
      B: "22-26",
      C: "28-32",
      D: "30-34"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 457,
    type: "single_choice",
    question: "粉末的氧含量也是粉末的重要特性，对用于SLM成型的金属粉末其氧含量一般要求在（）",
    options: {
      A: "10000ppm以上",
      B: "10000ppm以下",
      C: "1000ppm以上",
      D: "1000ppm以下"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 458,
    type: "single_choice",
    question: "SLM打印钛合金时，工作腔体中需要通入（）形成保护气氛。",
    options: {
      A: "氧气",
      B: "氩气",
      C: "二氧化碳",
      D: "氮气"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 459,
    type: "single_choice",
    question: "SLM工艺适用于打印医疗领域的金属牙冠，以下那种材料不适用于金属牙冠的打印：（）",
    options: {
      A: "钴铬合金",
      B: "钛合金",
      C: "纯钛",
      D: "铜合金"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 460,
    type: "single_choice",
    question: "SLM打印成型技术是将模型切片，利用激光选区熔化金属粉末，一般SLM打印技术工艺中，切片厚度为：（）",
    options: {
      A: "0.02-0.08mm",
      B: "0.1-0.2mm",
      C: "0.2-0.4mm",
      D: "1-2mm"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 461,
    type: "single_choice",
    question: "金属3D打印前，需选用刮刀，下列中哪种不是铺粉刮刀采用的种类（）",
    options: {
      A: "塑料",
      B: "金属",
      C: "陶瓷",
      D: "橡胶"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 462,
    type: "single_choice",
    question: "金属3D打印前，基板需要清理，需用（）擦拭基板。",
    options: {
      A: "擦镜布",
      B: "铁刷",
      C: "抹布",
      D: "干燥棉"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 463,
    type: "single_choice",
    question: "金属3D打印耗材存放，粉末耗材易受潮，粉末储存方式正确的是（）",
    options: {
      A: "真空干燥箱",
      B: "自然空间中",
      C: "阴暗避光处",
      D: "光照处"
    },
    answer: "A",
    category: "材料工程"
  },
  {
    id: 464,
    type: "single_choice",
    question: "金属3D打印前，需要选择耗材，用不锈钢基板，需要选择下列哪种耗材（）。",
    options: {
      A: "不锈钢",
      B: "钛合金",
      C: "铜合金",
      D: "钼镁合金"
    },
    answer: "A",
    category: "材料工程"
  },
  {
    id: 465,
    type: "single_choice",
    question: "在金属3D制件前，需要对工作腔体清理干净，在清理中不包括（）",
    options: {
      A: "缸体",
      B: "腔壁",
      C: "透镜",
      D: "主机外壳"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 466,
    type: "single_choice",
    question: "金属3D打印中，工作腔体中需要通入保护气氛，下列中哪种气氛是正确的（）。",
    options: {
      A: "氩气",
      B: "氧气",
      C: "二氧化碳",
      D: "一氧化碳"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 467,
    type: "single_choice",
    question: "每次打印前，使用（）擦拭腔体上方的保护镜，来保证保护镜干净。",
    options: {
      A: "抹布",
      B: "卫生纸",
      C: "铁刷",
      D: "酒精棉"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 468,
    type: "single_choice",
    question: "粉末的氧含量也是粉末的重要特性，对用于SLM成型的金属粉其氧含量一般要求在（）",
    options: {
      A: "10000ppm以上",
      B: "10000ppm以下",
      C: "1000ppm以上",
      D: "1000ppm以下"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 469,
    type: "single_choice",
    question: "LCD光固化3D打印机固化材料使用的是（）。",
    options: {
      A: "激光",
      B: "喷墨",
      C: "升温加热",
      D: "紫外光"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 470,
    type: "single_choice",
    question: "下列选项中哪个是LCD技术可以使用的材料（）。",
    options: {
      A: "PETG",
      B: "TPU",
      C: "液态树脂",
      D: "粉末"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 471,
    type: "single_choice",
    question: "下列选项中哪个不是FDM技术可以使用的材料（）。",
    options: {
      A: "柔性树脂",
      B: "TPU",
      C: "PLA",
      D: "ABS"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 472,
    type: "single_choice",
    question: "下列选项中哪个是FDM技术可以使用的材料（）。",
    options: {
      A: "树脂",
      B: "PLA",
      C: "粉末",
      D: "金属"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 473,
    type: "single_choice",
    question: "FDM技术所使用的材料的特征是（）。",
    options: {
      A: "固化程度高",
      B: "融化挤出后能迅速凝固",
      C: "可以烧结并层层堆积",
      D: "通过振动镜系统控制激光点的扫描，可以有选择的被固化"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 474,
    type: "single_choice",
    question: "实操模拟中在连续制造前应先进行（）",
    options: {
      A: "打开工作腔",
      B: "打开冷水机",
      C: "单层制造",
      D: "双层制造"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 475,
    type: "single_choice",
    question: "实操模拟中（）作为工作腔保护气",
    options: {
      A: "氮气",
      B: "氢气",
      C: "氨气",
      D: "氧气"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 476,
    type: "single_choice",
    question: "实操模拟中使用（）来调整橡胶刮刀",
    options: {
      A: "卡尺",
      B: "卷尺",
      C: "直尺",
      D: "塞尺"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 477,
    type: "single_choice",
    question: "实操模拟中观察氧含量仪表数值为（）可以开始打印。",
    options: {
      A: "0.1%及以下",
      B: "0.2%及以下",
      C: "0.3%及以下",
      D: "0.4%及以下"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 478,
    type: "single_choice",
    question: "SLM3D打印技术成型件的后处理过程中最关键的步骤是（）",
    options: {
      A: "取出成型件",
      B: "打磨成型件",
      C: "去除支撑部分",
      D: "涂覆成型件"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 479,
    type: "single_choice",
    question: "金属3D打印过程中需要对模型添加支撑，以下对支撑的描述不正确的是：（）",
    options: {
      A: "将打印模型摆放在打印区域内，模型与打印平台面夹角小于53°的需添加支撑。",
      B: "模型可以任意形状摆放，添加支撑后即可切片打印。",
      C: "打印的模型应选择理论投影面积最小的方式摆放，添加支撑后，需要对干涉的支撑进行手动修改。",
      D: "添加的支撑不能过密，防止打印后不易清除；"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 480,
    type: "single_choice",
    question: "SLM金属制件一般选择（）支撑",
    options: {
      A: "块状",
      B: "实体",
      C: "三角",
      D: "不使用"
    },
    answer: "A",
    category: "技术基础"
  },
  {
    id: 481,
    type: "single_choice",
    question: "下列关于生成支撑的说法不正确的是（）",
    options: {
      A: "没有平台不能添加支撑",
      B: "可以自动生成支撑但是需要检查修改",
      C: "自动生成支撑不需要修改",
      D: "可以手动添加支撑"
    },
    answer: "C",
    category: "技术基础"
  },
  {
    id: 482,
    type: "single_choice",
    question: "在SLM制件中，往往会添加支撑结构，下列选项中不是添加支撑结构起到的作用的是（）",
    options: {
      A: "防止零件局部翘曲",
      B: "防止零件局部变形",
      C: "保持加工稳定性",
      D: "增加制件美观性"
    },
    answer: "D",
    category: "技术基础"
  },
  {
    id: 483,
    type: "single_choice",
    question: "3D打印一次摆放多个零件需要注意（）",
    options: {
      A: "不能超出成型平台",
      B: "数量",
      C: "大小",
      D: "质量"
    },
    answer: "A",
    category: "技术基础"
  },
  {
    id: 484,
    type: "single_choice",
    question: "在STL格式中，每一个三角面片与周围的三角面片都应该保持良好的连接。如果某个连接处出了问题，这个边界称为（）",
    options: {
      A: "无边界",
      B: "错误边界",
      C: "丢失桥",
      D: "错误连接"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 485,
    type: "single_choice",
    question: "据统计，从CAD到STL转换时会有将近70%文件存在各种不同的错误，一般都有对STL文件进行（），然后再进行分层和打印",
    options: {
      A: "检测及修复",
      B: "编辑",
      C: "切片",
      D: "转换"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 486,
    type: "single_choice",
    question: "当CAD模型的表面有较大曲率的曲面相交时，在曲面相交部分会出现丢失三角面片而造成（）",
    options: {
      A: "缝隙",
      B: "重叠或相交",
      C: "孔洞",
      D: "法向错误"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 487,
    type: "single_choice",
    question: "在MaterialiseMagics软件中，导入模型后应该先（）",
    options: {
      A: "检查模型文件",
      B: "添加支撑",
      C: "编辑三角面片",
      D: "直接打印"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 488,
    type: "single_choice",
    question: "下列哪款软件可以对STL模型进行修复",
    options: {
      A: "Solidworks",
      B: "CAXA3D实体设计",
      C: "MaterialiseMagics",
      D: "Cura"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 489,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，创建平面时若需要绘制任意直线方法可以选择（）。",
    options: {
      A: "提取",
      B: "多个点",
      C: "相切",
      D: "绘制直线"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 490,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，移动面功能可以移动面的类型有（）。",
    options: {
      A: "面片",
      B: "实体曲面",
      C: "实体曲面和面片",
      D: "三角面片"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 491,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，阵列的方式有矩形阵列，曲线阵列和（）。",
    options: {
      A: "圆形阵列",
      B: "直线阵列",
      C: "实体阵列",
      D: "回转阵列"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 492,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，在平面上绘制不规则曲线可以选用（）。",
    options: {
      A: "面片草图",
      B: "3D草图",
      C: "3D面片草图",
      D: "放样向导"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 493,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，在2D面片草图中想要删除某直线可以使用（）命令。",
    options: {
      A: "调整",
      B: "剪切",
      C: "自动草图",
      D: "变换要素"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 494,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，（）指令可以将相邻曲面结合到单个曲面或实体中。",
    options: {
      A: "放样",
      B: "拉伸",
      C: "填补",
      D: "缝合"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 495,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，曲面法线方向错误可以使用（）功能更正法线。",
    options: {
      A: "面片拟合",
      B: "翻转法线",
      C: "曲面偏移",
      D: "面填补"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 496,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，实体放样中至少需要（）闭合的轮廓线创建放样的实体。",
    options: {
      A: "1个",
      B: "2个",
      C: "3个",
      D: "4个"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 497,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，布尔运算结果有合并切割和（）。",
    options: {
      A: "消失",
      B: "交差",
      C: "删除",
      D: "重叠"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 498,
    type: "single_choice",
    question: "自由曲面形状，平滑度水平一般（）。",
    options: {
      A: "3",
      B: "5",
      C: "7",
      D: "10"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 499,
    type: "single_choice",
    question: "删除钉状物中平滑级别是一般是（）。",
    options: {
      A: "低",
      B: "高",
      C: "中",
      D: "最高"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 500,
    type: "single_choice",
    question: "在Geomagicwrap软件中，（）命令可以使整体的模型表面更加光顺。",
    options: {
      A: "填充孔",
      B: "去除特征",
      C: "删除钉状物",
      D: "砂纸"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 501,
    type: "single_choice",
    question: "在Geomagicwrap软件中，填充单个孔命令里面包括（）种填充方式。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 502,
    type: "single_choice",
    question: "在Geomagicwrap软件中利用（）命令可以对缺失部位进行填充。",
    options: {
      A: "填充单个孔",
      B: "去除特征",
      C: "删除钉状物",
      D: "减少噪音"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 503,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，将几何形状、圆角、自由曲面等领域分类为形状特征的基准的是（）。",
    options: {
      A: "敏感度",
      B: "面片",
      C: "领域组",
      D: "模型"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 504,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，线段里面包含自动分割命令和（）命令。",
    options: {
      A: "合并",
      B: "重分块",
      C: "分割",
      D: "插入"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 505,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，绘制领域时按住Shift鼠标左键绘制表示（）。",
    options: {
      A: "删除部分区域",
      B: "添加部分区域",
      C: "新建领域组",
      D: "分割领域组"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 506,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，自动分割领域后若需要再次拆分可以使用（）。",
    options: {
      A: "放样",
      B: "重分块",
      C: "分割",
      D: "回转"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 507,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，追加平面时需要根据已创建的领域进行添加平面，方法可以选择（）。",
    options: {
      A: "多个点",
      B: "定义",
      C: "提取",
      D: "绘制直线"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 508,
    type: "single_choice",
    question: "在GeoagicControl软件中，既可以修改点云文件还可以（）",
    options: {
      A: "精度分析",
      B: "正向建模",
      C: "逆向建模",
      D: "以上都错"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 509,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，对比误差蓝颜色显示精度为（）",
    options: {
      A: "偏高",
      B: "合适",
      C: "偏小",
      D: "以上都错"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 510,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，对比误差红颜色显示精度为（）",
    options: {
      A: "偏高",
      B: "合适",
      C: "偏小",
      D: "以上都错"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 511,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，对比误差（）颜色显示精度较高。",
    options: {
      A: "红",
      B: "绿",
      C: "蓝",
      D: "以上都错"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 512,
    type: "single_choice",
    question: "在GeomgicDesignX软件中，想要查看整体精度可以点击（）来查看。",
    options: {
      A: "体偏差",
      B: "领域",
      C: "面片拟合",
      D: "回转"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 513,
    type: "single_choice",
    question: "为了使面片数据更加平滑可以将减少噪音许可偏差控制在（）以内进行减少",
    options: {
      A: "0.01",
      B: "0.1",
      C: "0.5",
      D: "0.05"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 514,
    type: "single_choice",
    question: "面片和点云均可通过（）来控制模型精度",
    options: {
      A: "减少噪音",
      B: "体外孤点",
      C: "非连接项",
      D: "快速光顺"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 515,
    type: "single_choice",
    question: "为了面片的光顺，可以通过（）命令进行约束，使表面更加光顺",
    options: {
      A: "减少噪音许可偏差",
      B: "删除钉状物平滑级别",
      C: "顺驰的强度",
      D: "简化的公差"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 516,
    type: "single_choice",
    question: "封装后的面片数据发现很多钉状物，同时表面较粗糙应该（）来进行优化",
    options: {
      A: "简化",
      B: "开流形",
      C: "闭流形",
      D: "网格医生"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 517,
    type: "single_choice",
    question: "封装后的面片数据显示为黑色通过（）使其回复蓝色便于观察处理",
    options: {
      A: "修复法线",
      B: "删除法线",
      C: "着色",
      D: "关闭顶点颜色"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 518,
    type: "single_choice",
    question: "封装后发现生成的面片就只有几个点是（）原因造成的",
    options: {
      A: "封装前选中的是个别点云",
      B: "软件计算问题",
      C: "点云的单位为微米",
      D: "点云数据为txt"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 519,
    type: "single_choice",
    question: "封装完以后的模型分层不是（）原因造成的",
    options: {
      A: "点云处理时没有全局注册",
      B: "未进行减少噪音操作",
      C: "未进行联合点对象命令",
      D: "模型材质为玻璃"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 520,
    type: "single_choice",
    question: "封装后的模型有一部分特征在扫描时丢失可以（）操作进行模型修复",
    options: {
      A: "逆向设计后在反推stl",
      B: "多边形命令修复",
      C: "网格医生进行修补",
      D: "再次补扫"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 521,
    type: "single_choice",
    question: "封装完成后的数据无法打印切片是（）原因",
    options: {
      A: "数据内部有多余面片",
      B: "数据不是一个封闭壳体",
      C: "数据钉状物较多",
      D: "数据单位不是mm"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 522,
    type: "single_choice",
    question: "导入初始的wrp点云数据无法打开是（）原因",
    options: {
      A: "点云未处理",
      B: "点云数据格式不正确",
      C: "点云未进行封装",
      D: "点云未删除法线"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 523,
    type: "single_choice",
    question: "导入stl数据时，软件内无显示或显示不正确是（）原因",
    options: {
      A: "保存stl数据有问题",
      B: "单位不是mm",
      C: "处理、逆向软件版本不一致",
      D: "面片数据不完整"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 524,
    type: "single_choice",
    question: "导入数据时，提示格式不对是（）原因造成的",
    options: {
      A: "版本",
      B: "模型保存尺寸",
      C: "点云数据质量",
      D: "数据完整性"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 525,
    type: "single_choice",
    question: "GeomagicDesignX中导入的数据尺寸不正确应该通过（）命令进行换算",
    options: {
      A: "转换体",
      B: "移动体",
      C: "转换面",
      D: "移动面"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 526,
    type: "single_choice",
    question: "GeomagicDesignX不可导入（）数据",
    options: {
      A: "asc",
      B: "stl",
      C: "txt",
      D: "wrp"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 527,
    type: "single_choice",
    question: "注释信息不包含（）",
    options: {
      A: "状态",
      B: "公差",
      C: "法线",
      D: "轴线"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 528,
    type: "single_choice",
    question: "在3D颜色比较中红色部分代表（）",
    options: {
      A: "远超出模型尺寸",
      B: "符合模型尺寸",
      C: "略高于模型尺寸",
      D: "略低于模型尺寸"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 529,
    type: "single_choice",
    question: "测试报告中不包含（）信息",
    options: {
      A: "2D尺寸",
      B: "3D注释",
      C: "3D尺寸",
      D: "零件视图"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 530,
    type: "single_choice",
    question: "测试报告不包含以下（）视图",
    options: {
      A: "轴测图",
      B: "仰视图",
      C: "正视图",
      D: "俯视图"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 531,
    type: "single_choice",
    question: "GeomagicControlX的实时检测功能可以快速实现（）",
    options: {
      A: "零件变形量的检测分析",
      B: "剪切线检测",
      C: "零件材质质量分析",
      D: "零件面片采样"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 532,
    type: "single_choice",
    question: "2D尺寸标注中不包含下列哪一个（）",
    options: {
      A: "过渡配合",
      B: "长度",
      C: "半径",
      D: "角度"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 533,
    type: "single_choice",
    question: "虚拟边线偏差指令可应用于（）",
    options: {
      A: "剪切线检测",
      B: "偏移",
      C: "创建法线",
      D: "检测形状"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 534,
    type: "single_choice",
    question: "投影偏差指令可应用于（）",
    options: {
      A: "分析塑料件的外部轮廓",
      B: "分析磨损",
      C: "分析孔",
      D: "硬度分析"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 535,
    type: "single_choice",
    question: "3D尺寸标注中不包含（）",
    options: {
      A: "水平",
      B: "圆角",
      C: "垂直",
      D: "弧度"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 536,
    type: "single_choice",
    question: "GeomagicControl软件中，2D比较需要添加（）。",
    options: {
      A: "模型平面截面",
      B: "添加直线",
      C: "添加3D线",
      D: "以上都对"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 537,
    type: "single_choice",
    question: "在Control软件里可以修补点云文件以及（）",
    options: {
      A: "验证精度",
      B: "逆向设计",
      C: "扫描处理",
      D: "以上都对"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 538,
    type: "single_choice",
    question: "GeomagicControl软件中，手动注册（n点注册）最少()个点。",
    options: {
      A: "3",
      B: "5",
      C: "4",
      D: "6"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 539,
    type: "single_choice",
    question: "GeomagicControl软件中，点云数据一般设置为()对象。",
    options: {
      A: "基准对象",
      B: "测试对象",
      C: "无对象",
      D: "基准与测试对象"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 540,
    type: "single_choice",
    question: "GeomagicControl软件中，出具的测试报告可以包含()。",
    options: {
      A: "2D比较数据",
      B: "3D比较数据",
      C: "注释数据",
      D: "以上都对"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 541,
    type: "single_choice",
    question: "在删除多余面片数据时，可设置（）只实现只删除多余面片",
    options: {
      A: "关闭背景选择可见",
      B: "打开背景选择贯通",
      C: "打开背景选择可见",
      D: "关闭背景选择贯通"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 542,
    type: "single_choice",
    question: "点云及面片删除时不可将选择方式设置为（）",
    options: {
      A: "套索",
      B: "画笔",
      C: "三角形",
      D: "椭圆"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 543,
    type: "single_choice",
    question: "（）不可做数据进行平滑处理的命令",
    options: {
      A: "减少噪音",
      B: "快速光顺",
      C: "开流形",
      D: "砂纸"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 544,
    type: "single_choice",
    question: "减少噪音是控制（）",
    options: {
      A: "点云质量",
      B: "点云精度",
      C: "点云数量",
      D: "点云分层"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 545,
    type: "single_choice",
    question: "删除杂点可通过（）进行操作",
    options: {
      A: "多边形阶段",
      B: "删除非连接项",
      C: "填补孔",
      D: "网格医生"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 546,
    type: "single_choice",
    question: "以下选项中（）不属于一般分析工作流程",
    options: {
      A: "创建新的FEM和仿真",
      B: "材料属性应用于几何体",
      C: "解算模型",
      D: "创建坐标系"
    },
    answer: "D",
    category: "技术基础"
  },
  {
    id: 547,
    type: "single_choice",
    question: "UG中处理仿真文件时，可以定义单元（），可更改选定单元属性的值",
    options: {
      A: "编辑",
      B: "替代",
      C: "评估",
      D: "定向"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 548,
    type: "single_choice",
    question: "指定加入到部件的FEM多形几何体表示的任何可选定非部件几何体，可以选择加入",
    options: {
      A: "样条",
      B: "草图曲线",
      C: "坐标系",
      D: "以上都对"
    },
    answer: "D",
    category: "技术基础"
  },
  {
    id: 549,
    type: "single_choice",
    question: "高级仿真的数据很有特色，具有独立的仿真文件和（）",
    options: {
      A: "STL",
      B: "FEM",
      C: "PAT",
      D: "DWG"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 550,
    type: "single_choice",
    question: "高级仿真支持补充以下（）单元类型",
    options: {
      A: "1D",
      B: "2D",
      C: "3D",
      D: "以上都是"
    },
    answer: "D",
    category: "技术基础"
  },
  {
    id: 551,
    type: "single_choice",
    question: "扫描工件粘贴标志点应贴在（）位置",
    options: {
      A: "工件边缘",
      B: "模型凹槽",
      C: "曲率较小曲面",
      D: "细节特征较多的曲面"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 552,
    type: "single_choice",
    question: "扫描工件时需调整扫描距离一般（）然后将十字对齐合适",
    options: {
      A: "在扫描工件上方",
      B: "在扫描工件中间",
      C: "在扫描工件底部",
      D: "在转盘表面"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 553,
    type: "single_choice",
    question: "扫描仪扫描工件时（）扫描效果最好",
    options: {
      A: "90°",
      B: "45°",
      C: "60°",
      D: "30°"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 554,
    type: "single_choice",
    question: "单目扫描仪扫描工件时（）材质最不适用于扫描",
    options: {
      A: "塑料",
      B: "金属",
      C: "玻璃",
      D: "石膏"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 555,
    type: "single_choice",
    question: "拼合扫描时公共点需要最少（）才可以",
    options: {
      A: "3个",
      B: "4个",
      C: "5个",
      D: "2个"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 556,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，想要快速的从带有领域的面片中提取实体，应使用（）功能。",
    options: {
      A: "放样",
      B: "拉伸",
      C: "基础实体",
      D: "回转"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 557,
    type: "single_choice",
    question: "从产品几何模型重建的角度来看，逆向工程可狭义地定义为将产品原型转化为数字化模型的有关计算机辅助技术、数字化测量技术和（）技术的总称。",
    options: {
      A: "几何模型重建",
      B: "快速成型",
      C: "产品创新",
      D: "曲面重构"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 558,
    type: "single_choice",
    question: "在GeoagicDesignX软件中，追加平面时想要得到一个关于某模型对称的平面，方法可以选择（）。",
    options: {
      A: "多个点",
      B: "镜像",
      C: "提取",
      D: "绘制直线"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 559,
    type: "single_choice",
    question: "从产品几何模型重建的角度来看，逆向工程可狭义地定义为将产品原型转化为（）的有关计算机辅助技术。",
    options: {
      A: "三角面片",
      B: "CAD模型",
      C: "新产品",
      D: "数字化模型"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 560,
    type: "single_choice",
    question: "DX主要用于（）方面。",
    options: {
      A: "点云处理",
      B: "逆向建模",
      C: "数据采集",
      D: "质量分析"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 561,
    type: "single_choice",
    question: "扫描物体的点云质量由（）进行约束控制的",
    options: {
      A: "噪音点",
      B: "模型复杂程度",
      C: "模型的材质",
      D: "模型大小"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 562,
    type: "single_choice",
    question: "三维扫描校准需（）进行校准",
    options: {
      A: "每次使用前",
      B: "半天",
      C: "一天",
      D: "晃动设备后"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 563,
    type: "single_choice",
    question: "扫描完数据保存前需将单位改成（）然后进行保存",
    options: {
      A: "毫米",
      B: "英寸",
      C: "厘米",
      D: "微米"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 564,
    type: "single_choice",
    question: "在使用单目设备前，需进行设备校准（）mm以内可以开始扫描",
    options: {
      A: "0.05",
      B: "0.1",
      C: "1",
      D: "0.5"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 565,
    type: "single_choice",
    question: "在针对金属材质物体进行扫描时，需进行（）调整，避免相机卡死",
    options: {
      A: "噪音点",
      B: "体外孤点",
      C: "曝光值",
      D: "扫描距离"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 566,
    type: "single_choice",
    question: "以下哪种形式需要填充孔（）。",
    options: {
      A: "点云局部缺失",
      B: "点云完整",
      C: "简化点云",
      D: "细化特征"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 567,
    type: "single_choice",
    question: "光学测量方法获得的点云数据密度大，而且拼合后的点云包含一些冗余的数据，因此（）。",
    options: {
      A: "重采样",
      B: "减少噪音点",
      C: "简化",
      D: "去除特征"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 568,
    type: "single_choice",
    question: "GeomagicWrap软件面片处理关于去除特征功能说法正确的是（）。",
    options: {
      A: "可大面积使用去除不平整的面",
      B: "可大面积使用",
      C: "尽量不大面积使用，用于去除小范围特征",
      D: "可运用在有关键特征处"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 569,
    type: "single_choice",
    question: "面片数据的缺失部分曲率较大，一般使用（）类型的填充孔方式",
    options: {
      A: "平面填充",
      B: "曲率填充",
      C: "自动判断填充",
      D: "以上对的"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 570,
    type: "single_choice",
    question: "对人体头像或超薄形物体进行扫描时，则需要采用()测量方法，它的特点是速度快，工作距离远，无材质要求，但设备成本较高。",
    options: {
      A: "非接触式",
      B: "静态",
      C: "接触式扫描",
      D: "动态"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 571,
    type: "single_choice",
    question: "Win3DD扫描仪主要有哪两个重要光学零件（）。",
    options: {
      A: "相机和光机",
      B: "两个相机",
      C: "光机和线缆",
      D: "相机和线缆"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 572,
    type: "single_choice",
    question: "Win3DD扫描仪是属于哪种扫描方式（）。",
    options: {
      A: "光学",
      B: "传感器",
      C: "光栅",
      D: "电学"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 573,
    type: "single_choice",
    question: "材质为硬质且形状较为简单、容易定位的物体，应尽量使用()测量方法，成本较低，设备损耗费相对较少，且可以输出扫描形式，便于扫描数据的进一步处理。",
    options: {
      A: "非接触式",
      B: "静态测量",
      C: "接触式扫描",
      D: "动态测量"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 574,
    type: "single_choice",
    question: "扫描过程中除了使用设备本身具有的自动拼接功能，还可以使用（）。",
    options: {
      A: "手动拼接",
      B: "自动拼接加手动拼接",
      C: "自动拼接",
      D: "以上都错"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 575,
    type: "single_choice",
    question: "下列对设备扫描环境描述正确的（）。",
    options: {
      A: "有强光最佳",
      B: "有镜面反射最佳",
      C: "暗黑环境最佳",
      D: "以上都错"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 576,
    type: "single_choice",
    question: "扫描的多少数据具体步骤在（）窗口查看",
    options: {
      A: "显示窗口",
      B: "模型管理器窗口",
      C: "任务栏",
      D: "对话框窗口"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 577,
    type: "single_choice",
    question: "下列对使用转盘扫描描述正确的（）。",
    options: {
      A: "转盘和工件可以随便移动",
      B: "不需要标志点",
      C: "转盘与工件相对位置不能改变",
      D: "以上都错"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 578,
    type: "single_choice",
    question: "扫描过程中出现公共框架点过少，下列说法正确的是（）。",
    options: {
      A: "软件错误",
      B: "未识别标志点",
      C: "数据错误",
      D: "以上都错"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 579,
    type: "single_choice",
    question: "部分模型在扫描时需要粘贴标志点，原因在于（）。",
    options: {
      A: "更加美观",
      B: "覆盖模型特征",
      C: "容易判断扫描方向",
      D: "方便扫描系统拼合点云"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 580,
    type: "single_choice",
    question: "粘贴标志点时应当（）。",
    options: {
      A: "粘贴在同一直线上",
      B: "粘贴在特征较多位置",
      C: "尽量粘贴在平面",
      D: "随意任何位置粘贴"
    },
    answer: "C",
    category: "高级应用"
  },
  {
    id: 581,
    type: "single_choice",
    question: "点云数据拼合主要采用两种方式：辅助标志点方式和()。",
    options: {
      A: "自动拼合方式",
      B: "轮廓拼合",
      C: "特征拼合",
      D: "端点拼合"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 582,
    type: "single_choice",
    question: "在扫描部分模型时特征较多不易贴点，我们可以使用（）来进行辅助扫描。",
    options: {
      A: "转盘",
      B: "相似工件",
      C: "云台",
      D: "显像剂"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 583,
    type: "single_choice",
    question: "若扫描模型为无色透明材质扫描前必需要（）。",
    options: {
      A: "打磨",
      B: "喷显像剂",
      C: "关灯扫描",
      D: "无需任何操作"
    },
    answer: "B",
    category: "高级应用"
  },
  {
    id: 584,
    type: "single_choice",
    question: "在切片软件参数设置中，已知喷嘴直径为0.4mm，边缘宽度设置为0.8mm，层高设置为0.2mm，封闭面厚度设置为0.8mm，请问顶层封闭面会打印多少层？（）",
    options: {
      A: "8",
      B: "6",
      C: "4",
      D: "2"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 585,
    type: "single_choice",
    question: "在切片软件参数设置中，已知喷嘴直径为0.4mm，层高设置为0.1mm，封闭面厚度设置为0.6mm，请问顶层封闭面会打印多少层？（）",
    options: {
      A: "6",
      B: "4",
      C: "1.5",
      D: "1"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 586,
    type: "single_choice",
    question: "FDM3D打印机所使用的材料线径为（）",
    options: {
      A: "1.72",
      B: "1.73",
      C: "1.74",
      D: "1.75"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 587,
    type: "single_choice",
    question: "距离模型较近的支撑无法生成需要调整切片参数（）",
    options: {
      A: "支撑密度",
      B: "支撑与模型间距-Z（mm）",
      C: "支撑与模型间距-X/Y（mm）",
      D: "支撑临界角"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 588,
    type: "single_choice",
    question: "距离模型较近的支撑无法生成有可能是因为（）",
    options: {
      A: "支撑与模型间距-Z（mm）过大",
      B: "支撑与模型间距-X/Y（mm）过大",
      C: "支撑与模型间距-X（mm）过大",
      D: "支撑与模型间距-Y（mm）过大"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 589,
    type: "single_choice",
    question: "FDM打印机打印速度过快也会影响（）",
    options: {
      A: "成型质量",
      B: "打印速度",
      C: "打印时间",
      D: "打印过程"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 590,
    type: "single_choice",
    question: "在Hotpoint打印参数设置中，如果想获得较高精度的模型可以将层高设置为（）",
    options: {
      A: "0.1",
      B: "0.2",
      C: "0.3",
      D: "0.4"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 591,
    type: "single_choice",
    question: "什么情况下需要把打印板工作温度升高？（）",
    options: {
      A: "模型错位",
      B: "打印高温特殊材料",
      C: "打印速度过快",
      D: "模型拉丝"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 592,
    type: "single_choice",
    question: "以下哪项是PLA材料的建议打印温度（）",
    options: {
      A: "150-220°C",
      B: "190-270°C",
      C: "190-220°C",
      D: "210-270°C"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 593,
    type: "single_choice",
    question: "切片参数中，第一层打印头流量默认是（）",
    options: {
      A: "100",
      B: "95",
      C: "110",
      D: "105"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 594,
    type: "single_choice",
    question: "第一层与平台间距过小会导致（）",
    options: {
      A: "拉丝",
      B: "翘边",
      C: "支撑不容易拆除",
      D: "模型不容易拆除"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 595,
    type: "single_choice",
    question: "层高参数设置为0.2mm与层高设置为0.3mm的切片相比，打印速度会（）",
    options: {
      A: "快",
      B: "一致",
      C: "慢",
      D: "以上都不对"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 596,
    type: "single_choice",
    question: "下列不是FDM技术所使用的材料是（）",
    options: {
      A: "PLA",
      B: "ABS",
      C: "316L",
      D: "尼龙"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 597,
    type: "single_choice",
    question: "在满足零件的使用条件下，使用Hotpoint我们尽可能使用PLA材料，因为（）",
    options: {
      A: "环保",
      B: "便宜",
      C: "只能使用PLA材料",
      D: "成型效果好"
    },
    answer: "A",
    category: "材料工程"
  },
  {
    id: 598,
    type: "single_choice",
    question: "Tpu材料除了柔软的特性，还有（）的特性。",
    options: {
      A: "绿色环保",
      B: "强度大",
      C: "耐低温性",
      D: "韧性好"
    },
    answer: "B",
    category: "材料工程"
  },
  {
    id: 599,
    type: "single_choice",
    question: "如果要打印灯罩类的模型，我们可以选择使用（）材料进行打印。",
    options: {
      A: "PLA",
      B: "PP",
      C: "PETG",
      D: "PE"
    },
    answer: "C",
    category: "材料工程"
  },
  {
    id: 600,
    type: "single_choice",
    question: "对于有一定耐温要求的模型，我们可以选择使用（）材料打印。",
    options: {
      A: "ABS",
      B: "TPU",
      C: "PLA",
      D: "PP"
    },
    answer: "A",
    category: "材料工程"
  },
  {
    id: 601,
    type: "single_choice",
    question: "FDM切片软件的切片设置中，外壳打印速度和（）参数决定了模型打印速度的快慢。",
    options: {
      A: "封闭面打印速度",
      B: "每层打印速度",
      C: "填充打印速度",
      D: "第一层打印速度"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 602,
    type: "single_choice",
    question: "FDM切片软件的切片设置中，默认喷嘴边缘宽度是（）",
    options: {
      A: "1.2mm",
      B: "0.8mm",
      C: "0.4mm",
      D: "0.2mm"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 603,
    type: "single_choice",
    question: "FDM切片软件的切片设置中，默认喷嘴0.4mm的基础上边缘宽度的设置单位是（）",
    options: {
      A: "0.4mm",
      B: "0.8mm",
      C: "0.2mm",
      D: "0.1mm"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 604,
    type: "single_choice",
    question: "打印过程中喷嘴温度过高会出现（）。",
    options: {
      A: "模型打印效果编号",
      B: "模型翘边",
      C: "没有影响",
      D: "模型表面效果差"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 605,
    type: "single_choice",
    question: "什么情况下可以使用逐个打印。（）",
    options: {
      A: "多个高度小于10cm的模型",
      B: "多个高度大于10cm的模型",
      C: "没有限制的多个模型",
      D: "一个模型"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 606,
    type: "single_choice",
    question: "打印多个小模型时，最有效的减少模型与模型之间拉丝的设置是（）。",
    options: {
      A: "不同高度切片设置",
      B: "断层续打",
      C: "默认参数打印",
      D: "逐个打印"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 607,
    type: "single_choice",
    question: "以下哪一个参数可以解决模型拉丝问题。",
    options: {
      A: "打印速度",
      B: "回抽长度",
      C: "打印温度",
      D: "热床温度"
    },
    answer: "B",
    category: "打印技术"
  },
    {
    id: 608,
    type: "true_false",
    question: "现场的3D打印机，在长时间打印后，出现了出料不畅的情况最先检查的是电机丢步。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 609,
    type: "true_false",
    question: "FDM的耗材如果长时间没使用，在打印时不出料，最优先考虑的情况是耗材受潮断裂。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 610,
    type: "true_false",
    question: "设备故障维修中最长使用的方法是假设法。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 611,
    type: "true_false",
    question: "在停电后保证FDM设备还能继续工作20分钟左右的功能是断电续打。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 612,
    type: "true_false",
    question: "光敏树脂材料使用完后，再用过滤网过滤后，回收到不透光的瓶子里。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 613,
    type: "true_false",
    question: "Hotpoint导入切片程序后一直不启动打印，检查切片程序无误，喷头温度为26℃，后应检查热敏电阻。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 614,
    type: "true_false",
    question: "Hotpoint导入切片程序后一直不启动打印，应检查G代码文件。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 615,
    type: "true_false",
    question: "Hotpoint设备启动无反应，应检查开关按钮。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 616,
    type: "true_false",
    question: "在清理LCD光固化3D打印时，可以使用无纺布沾水进行擦拭。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 617,
    type: "true_false",
    question: "在清理FDM3D打印机打印仓时，可以使用钢刷。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 618,
    type: "true_false",
    question: "在清理LCD3D打印机时，可以使用湿巾进行擦拭。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 619,
    type: "true_false",
    question: "在清理FDM3D打印机时，可以使用铲子。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 620,
    type: "true_false",
    question: "SLA3D打印机打印完成后，需将周围桌面和设备内部的平台清理干净。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 621,
    type: "true_false",
    question: "5S管理的目的是将生产要素进行有效管理。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 622,
    type: "true_false",
    question: "5S管理中整理的定义是，依规定摆放整齐有序。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 623,
    type: "true_false",
    question: "以下是实行5S管理的目的的是：用最快的速度取得所需之物，在最有效的规章、制度和最简洁的流程下完成作业。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 624,
    type: "true_false",
    question: "5S管理中的整理定义是指把必要的东西放在规定的地方，并能很快取出，规定放置区，明确标示。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 625,
    type: "true_false",
    question: "5S管理中的整顿是指把必要的东西放在规定的地方，并能很快取出，规定放置区，明确标示。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 626,
    type: "true_false",
    question: "在清理LCD光固化设备时，可以使用酒精作为清洗剂。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 627,
    type: "true_false",
    question: "FDM技术所使用的耗材在长时间不打印时也不用回收，安装在设备上即可。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 628,
    type: "true_false",
    question: "线状耗材变质之后，容易导致打印件开裂。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 629,
    type: "true_false",
    question: "线状耗材影响其保存的因素是温度。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 630,
    type: "true_false",
    question: "PLA材料长期保存需要密封且干燥。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 631,
    type: "true_false",
    question: "光敏树脂适合于在有温度、湿度控制的且密闭的环境中长期保存。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 632,
    type: "true_false",
    question: "FDM打印机使用之前进行调平操作，太紧的话会不出料。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 633,
    type: "true_false",
    question: "自动调平的FDM3D打印机，点击平台校准后，3个点都显示1。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 634,
    type: "true_false",
    question: "FDM打印机长期不使用后使用发现Z轴上升困难，噪音较大时，应在丝杠上涂抹润滑油。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 635,
    type: "true_false",
    question: "出现故障时要注意保留现场，待维修人员来后如实说明故障前后的情况，并参与共同分析问题，尽早排除故障。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 636,
    type: "true_false",
    question: "不同颜色的光敏树脂，回收时可以混装入一个瓶子内。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 637,
    type: "true_false",
    question: "树脂耗材回收时，需要先用过滤网过滤一下。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 638,
    type: "true_false",
    question: "当喷头堵塞的时候，应该接着打印，打印时，可以融化里面的残留物。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 639,
    type: "true_false",
    question: "当设备丝杆运动出现轻微卡顿时，应该用水清洗。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 640,
    type: "true_false",
    question: "设备同步带出现异响时，应该涂上凡士林。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 641,
    type: "true_false",
    question: "LCD光固化设备，料槽里的耗材如果长时间不打印，不用回收到瓶子里。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 642,
    type: "true_false",
    question: "E43D打印机可以连接WIFI。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 643,
    type: "true_false",
    question: "相机定标的精度是决定系统扫描精度的重要因素。2个CCD相机位置调整后，或长途运输，或使用过程中严重震动等，都要重新定标，以保证设备的精度。",
    answer: "true",
    category: "高级应用"
  },
  {
    id: 644,
    type: "true_false",
    question: "非接触式测量的光学测量机理决定了其对微小结构、深缝、坚锐边缘等特殊区域的测量误差较小。",
    answer: "false",
    category: "高级应用"
  },
  {
    id: 645,
    type: "true_false",
    question: "使用电子显微镜可以用来检测激光光斑。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 646,
    type: "true_false",
    question: "IGAM金属机，缸体的升降精度不是由减速器控制的。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 647,
    type: "true_false",
    question: "IGAM金属机，过滤风机风太大能影响铺粉装置精度。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 648,
    type: "true_false",
    question: "IGAM金属机，铺粉装置的精度是由卡尺测量的。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 649,
    type: "true_false",
    question: "IGAM金属机，打印尺寸精度误差是0.2。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 650,
    type: "true_false",
    question: "使用IGAM金属机打印完模型后，使用游标卡尺来测量模型的打印尺寸。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 651,
    type: "true_false",
    question: "在调试IGAM金属机的激光焦距时，用热敏纸来调试激光焦距。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 652,
    type: "true_false",
    question: "IGAM金属机，激光不出光，是因为激光光纤太长。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 653,
    type: "true_false",
    question: "IGAM金属机，激光器用的是红外线激光器。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 654,
    type: "true_false",
    question: "IGAM金属机，加热系统是温控仪来调控的。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 655,
    type: "true_false",
    question: "IGAM金属机，基板与刮刀之间的距离用A4纸来调节。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 656,
    type: "true_false",
    question: "震动抛光可以使零件机械性能增强。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 657,
    type: "true_false",
    question: "FDM3D打印设备，热床跟喷嘴之间的距离用A4纸来调节。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 658,
    type: "true_false",
    question: "IGAM金属机，铺粉系统前后移动不停止，是因为电机损坏。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 659,
    type: "true_false",
    question: "在进行IGAM金属机打印模型时，过滤器没有风运行，是因为变频器设置出现问题。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 660,
    type: "true_false",
    question: "FDM设备，喷头是钛合金材质。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 661,
    type: "true_false",
    question: "FDM3D打印机的主板位于成型仓的最底部。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 662,
    type: "true_false",
    question: "在给料槽安装离型膜时需要美纹纸辅助密封。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 663,
    type: "true_false",
    question: "在使用IGAM金属机时，工作缸上下升降不动，是因为工作缸太重。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 664,
    type: "true_false",
    question: "FDM设备，Z轴下降精度不准的其中一个原因是Z轴丝杠紧固螺钉松动。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 665,
    type: "true_false",
    question: "FDM设备，X运动轴抖动，不是因为Y轴干扰。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 666,
    type: "true_false",
    question: "IGAM金属机，电器柜中，2.5平方线能负载15A电流。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 667,
    type: "true_false",
    question: "IGAM金属机，电气柜中电器元件需要48V的电压。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 668,
    type: "true_false",
    question: "IGAM金属机，电气柜中，直流电源均为24V。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 669,
    type: "true_false",
    question: "控制FDM3D打印机Z轴平台上下移动的电机有三个。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 670,
    type: "true_false",
    question: "FDM3D打印机有3根光杠。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 671,
    type: "true_false",
    question: "IGAM金属机，用304硅胶密封以达到气密性。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 672,
    type: "true_false",
    question: "在使用IGAM金属机打印工作完成后，对于复杂的有空心内腔的制件，我们应用嘴吹除剩余的物料。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 673,
    type: "true_false",
    question: "IGAM金属机，铺粉系统的皮带轮跟轴用螺钉紧固。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 674,
    type: "true_false",
    question: "当FDM3D打印机打印头始终不加温时，有可能是热敏电阻出问题了。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 675,
    type: "true_false",
    question: "E轴转接板位于打印头的正后方。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 676,
    type: "true_false",
    question: "FDM设备，工作平台是由电机带动同步带运动完成工作流程的。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 677,
    type: "true_false",
    question: "IGAM金属机，铺粉系统是由同步带带动电机运动完成工作流程。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 678,
    type: "true_false",
    question: "IGAM金属机，调试设备时使用水平仪将设备调试至水平。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 679,
    type: "true_false",
    question: "工序卡片主要用于大批大量生产中所有零件，中批生产中的复杂产品的关键零件以及单件小批生产中的关键工序。",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 680,
    type: "true_false",
    question: "在贯彻加工顺序安排原则中，应以保证加工精度要求高的主要表面为前提，着重它们的加工问题，而次要表面的加工穿插在适当时候解决。",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 681,
    type: "true_false",
    question: "工件夹紧后，工件的六个自由度都被限制了。",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 682,
    type: "true_false",
    question: "为了原理误差的加工方法不能算是完善的加工方法。",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 683,
    type: "true_false",
    question: "气孔是锻造过程中产生的一种缺陷。",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 684,
    type: "true_false",
    question: "锻造钢锭的目的是破碎并改善其内部各种非金属夹杂物的分布，细化晶粒，提高金属的致密性。",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 685,
    type: "true_false",
    question: "亚共析钢加热至Ac1和Ac3之间将获得奥氏体+铁素体二相组织，在此区间，奥氏体的含碳量总是大于钢的含碳量。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 686,
    type: "true_false",
    question: "淬火钢在回火时，其基本趋势是随着回火温度的升高，钢的强度、硬度下降，而塑性、韧性提高。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 687,
    type: "true_false",
    question: "构件的工作应力可以和其极限应力相等。",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 688,
    type: "true_false",
    question: "在轴向拉、压杆中，轴力最大的截面一定是危险截面。",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 689,
    type: "true_false",
    question: "低碳钢和铸铁试件在拉断前都有\"缩颈\"现象。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 690,
    type: "true_false",
    question: "硬度，就是材料抵抗更硬物压入其表面的能力。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 691,
    type: "true_false",
    question: "外径相同的空心圆轴和实心圆轴相比，空心圆轴的承载能力更大。",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 692,
    type: "true_false",
    question: "正应力是指垂直于杆件横截面的应力。正应力又可分为正值正应力和负值正应力。",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 693,
    type: "true_false",
    question: "剪切和挤压总是同时产生，所以剪切面和挤压面是同一个面。",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 694,
    type: "true_false",
    question: "硬度测试是检测材料性能的重要指标之一，也是最快速最经济的试验方法之一。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 695,
    type: "true_false",
    question: "震动抛光能改善零件的表面效果。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 696,
    type: "true_false",
    question: "实心零件不适合震动抛光。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 697,
    type: "true_false",
    question: "SLM工艺打印设备，只要打印开始后，就无需修改打印策略。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 698,
    type: "true_false",
    question: "影响打印金属粉熔池大小的主要因素是激光功率。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 699,
    type: "true_false",
    question: "一般SLM材料新旧配比为1：1。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 700,
    type: "true_false",
    question: "一般SLM材料可以新旧配比来避免材料浪费。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 701,
    type: "true_false",
    question: "不同工艺的打印废料需要根据垃圾分类方法进行单独处理，不可与其他物品放在同一空间。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 702,
    type: "true_false",
    question: "打印后未利用的耗材应根据每种材料的存放要求及时处理并存放。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 703,
    type: "true_false",
    question: "光敏树脂打印材料应存放在阴凉干燥的环境下。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 704,
    type: "true_false",
    question: "适用于SLM工艺金属粉末耗材颗粒直径为0~15μm。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 705,
    type: "true_false",
    question: "电弧增材制造技术在打印过程中无需惰性气体保护即可加工零件，低碳环保。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 706,
    type: "true_false",
    question: "电弧增材制造技术集机械工程、电气自动化和焊接等专业知识，具有广泛的应用前景。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 707,
    type: "true_false",
    question: "电子束成型技术打印的金属制件表面效果光滑，优于SLM成型技术打印的制件表面效果。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 708,
    type: "true_false",
    question: "电子束成型技术在真空环境下成型，制件不会被氧气氧化。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 709,
    type: "true_false",
    question: "EBSM技术也可以使用激光器。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 710,
    type: "true_false",
    question: "EBSM技术是利用高能电子束将金属粉体熔化并迅速冷却的过程。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 711,
    type: "true_false",
    question: "修改打印层厚可以改变打印时间。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 712,
    type: "true_false",
    question: "打印金属粉末过于干燥是导致SLM工艺金属打印零件断层的原因。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 713,
    type: "true_false",
    question: "SLA后处理二次固化使用的是UV紫外线光。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 714,
    type: "true_false",
    question: "SLA特有的后处理步骤是二次固化。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 715,
    type: "true_false",
    question: ".gcode是SLA切片文件。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 716,
    type: "true_false",
    question: ".slc是SLA切片文件。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 717,
    type: "true_false",
    question: "光固化立体成型工艺中影响原型精度的原因之一是成型过程产生的误差。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 718,
    type: "true_false",
    question: "工艺参数只影响打印速度，所以只需记录打印层厚。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 719,
    type: "true_false",
    question: "工艺参数包括但不限于：激光功率、扫描速度、打印层厚。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 720,
    type: "true_false",
    question: "球化的产生会使铺粉棍在铺粉的过程中与前一层产生较大的摩擦力。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 721,
    type: "true_false",
    question: "球化现象会损坏金属表面质量。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 722,
    type: "true_false",
    question: "IGAMSLM金属打印机开启时，先打开冷水机。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 723,
    type: "true_false",
    question: "IGAMSLM金属打印机多层制造结束后应先关闭设备电源。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 724,
    type: "true_false",
    question: "IGAM设备参数中目标氧含量应该设置为2%。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 725,
    type: "true_false",
    question: "适用于SLM成型技术成型金属材料的粒径范围为0~53μm。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 726,
    type: "true_false",
    question: "SLM3D打印前，需开启冷水机，使冷水机温度保持在设定温度后，再进行下一步操作。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 727,
    type: "true_false",
    question: "实操模拟中先打开设备总电然后在开启冷水机。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 728,
    type: "true_false",
    question: "实操模拟中可以不穿戴防护用具。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 729,
    type: "true_false",
    question: "实操模拟中可在打印过程中打开工作腔观察。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 730,
    type: "true_false",
    question: "STL文件可能存在由非常少的面片组成、表面积和体积为零的干扰壳体。这些壳体没有几何意义，可以直接删除。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 731,
    type: "true_false",
    question: "一个正确的STL模型通常只有一个壳。存在多个壳体通常是由于零件块造型时没有进行布尔运算，结构与结构之间存在分割面引起的。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 732,
    type: "true_false",
    question: "壳体的定义是一组相互正确连接的三角形的有限集合。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 733,
    type: "true_false",
    question: "从CAD到STL转换时会有将近70%文件存在各种不同的错误，一般都有对STL文件进行检测和修复，然后再进行分层和打印。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 734,
    type: "true_false",
    question: "报告中偏差分布包括\">= Min\"，\"< Max\"\"#点\"\"%\"。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 735,
    type: "true_false",
    question: "GeomagicControlX的实时检测功能不适用于抽样检测。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 736,
    type: "true_false",
    question: "GeomagicControl软件只能出数据测试报告。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 737,
    type: "true_false",
    question: "GeomagicControl软件出的测试报告文件包括图形说明。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 738,
    type: "true_false",
    question: "GeomagicControl软件中测量包括距离、计算、点坐标。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 739,
    type: "true_false",
    question: "对比数据包括2D比较、3D比较、注释数据比较等。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 740,
    type: "true_false",
    question: "分割模型工具提供了关联地分割仿真模型中实体的方法。这个特征最常用于将体分割成可扫略的实体，以创建扫略的网格模型。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 741,
    type: "true_false",
    question: "在FEM和仿真对话框下几何体选项中默认情况下，选项全部设置为关。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 742,
    type: "true_false",
    question: "STL数据中小三角形数量越少，则成型件的精度越高。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 743,
    type: "true_false",
    question: "wrap软件可以对模型进行面积、体积进行计算。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 744,
    type: "true_false",
    question: "wrap软件中删除钉状物命令，作用是删除不要特征及光顺模型面。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 745,
    type: "true_false",
    question: "扫描数据拥有上千万个点，可以为了保证其细节特征，不做简化处理，直接封装。",
    answer: "false",
    category: "高级应用"
  },
  {
    id: 746,
    type: "true_false",
    question: "对文物等进行数据采集，通过两次模型的比较，找到破坏点，从而制定相应的保护措施，或者进行相应的修复。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 747,
    type: "true_false",
    question: "扫描不同材质的物体，均需根据其材质进行喷粉，便于扫描。",
    answer: "false",
    category: "高级应用"
  }
];
export const bankInfo = {
  "id": "additive_manufacturing_advanced",
  "name": "增材制造模型设计职业技能等级证书理论题库（高级）",
  "version": "1.0.0",
  "author": "北京赛育达科教有限责任公司",
  "lastUpdate": "2025-07-17",
  "description": "增材制造模型设计职业技能等级证书高级理论考试题库"
};

export default {
  bankInfo,
  questionBank
};
