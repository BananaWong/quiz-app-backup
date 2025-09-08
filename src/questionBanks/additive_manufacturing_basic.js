// 增材制造模型设计理论题库（初级）
export const questionBank = [
  // 单选题部分
  {
    id: 1,
    type: "single_choice",
    question: "采集产品数据，基本的原则：沿着特征方向走，顺着（）方向采集。",
    options: {
      A: "垂直",
      B: "法向",
      C: "径向",
      D: "Z轴坐标"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 2,
    type: "single_choice",
    question: "三维扫描仪扫描时正确的是（）。",
    options: {
      A: "避免阳光直射",
      B: "扫描时晃动",
      C: "可随意暂停扫描",
      D: "可随意调整扫描位置"
    },
    answer: "A",
    category: "高级应用"
  },
  {
    id: 3,
    type: "single_choice",
    question: "三维扫描仪的初始化设置不包含（）。",
    options: {
      A: "标定扫描仪",
      B: "检查三脚架稳定",
      C: "检查相机角度",
      D: "随意调整云台倾斜"
    },
    answer: "D",
    category: "高级应用"
  },
  {
    id: 4,
    type: "single_choice",
    question: "Win3DD扫描仪相机曝光参数一般为（）。",
    options: {
      A: "300",
      B: "400",
      C: "500",
      D: "600"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 5,
    type: "single_choice",
    question: "扫描仪远经过远距离运输后再次使用应当（）。",
    options: {
      A: "标定后使用",
      B: "检查外观无损坏即可使用",
      C: "直接使用",
      D: "静置2小时后使用"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 6,
    type: "single_choice",
    question: "三维数据采集过程中需喷涂（）颜色显影剂。",
    options: {
      A: "白",
      B: "黑",
      C: "红",
      D: "蓝"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 7,
    type: "single_choice",
    question: "Win3DD扫描仪最佳扫描距离为（）。",
    options: {
      A: "300MM",
      B: "400MM",
      C: "500MM",
      D: "600MM"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 8,
    type: "single_choice",
    question: "Wrap_Win3D三维数据采集系统中投射十字的作用是（）。",
    options: {
      A: "对齐",
      B: "调整位置",
      C: "判别设备最佳扫描位置",
      D: "投光正常"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 9,
    type: "single_choice",
    question: "对橡胶采用（）测量方法，它的特点是速度快，工作距离远，无材质要求，但设备成本较高。",
    options: {
      A: "非接触式",
      B: "静态",
      C: "接触式扫描",
      D: "动态"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 10,
    type: "single_choice",
    question: "接触式测量相比较非接触式测量的优点是（）。",
    options: {
      A: "精度高",
      B: "速度快",
      C: "速度慢",
      D: "以上都对"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 11,
    type: "single_choice",
    question: "光学测量方法获取的点云数据密度大，而且拼合后的点云包含一些冗余的数据，因此通常需要利用（）的方法进行数据删减，从而得到分布较为均匀的点云数据。",
    options: {
      A: "重采样",
      B: "减少噪音点",
      C: "简化",
      D: "去除特征"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 12,
    type: "single_choice",
    question: "GeomagicDesignX软件一般以（）数据进行构建模型。",
    options: {
      A: "点云数据",
      B: "面片数据",
      C: "尺寸数据",
      D: "以上的都对"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 13,
    type: "single_choice",
    question: "GeomagicDesignX软件一般默认（）个平面进行建模。",
    options: {
      A: "3",
      B: "5",
      C: "4",
      D: "5"
    },
    answer: "A",
    category: "技术基础"
  },
  {
    id: 14,
    type: "single_choice",
    question: "GeomagicDesignX软件一般是用于（）建模软件。",
    options: {
      A: "正向建模",
      B: "逆向建模",
      C: "正逆向建模",
      D: "以上的都对"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 15,
    type: "single_choice",
    question: "逆向工程的基本目的主要是复制原型和进行与原型有关的制造，包含有三维重构、逆向制造两个阶段，（）制造正好体现了逆向工程的基本目标。",
    options: {
      A: "模具",
      B: "快速成型",
      C: "快速精铸",
      D: "开发新产品"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 16,
    type: "single_choice",
    question: "3D打印模型一般需要是（）格式模型进行切片操作。",
    options: {
      A: ".wrp",
      B: ".prt",
      C: ".asc",
      D: ".stl"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 17,
    type: "single_choice",
    question: "FDM技术的成型原理是（）。",
    options: {
      A: "熔融挤出成型",
      B: "烧结",
      C: "消减",
      D: "雕刻"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 18,
    type: "single_choice",
    question: "FDM3D打印机通常使用的耗材为PLA和（）。",
    options: {
      A: "ABS",
      B: "PAL",
      C: "STL",
      D: "SLS"
    },
    answer: "A",
    category: "材料工程"
  },
  {
    id: 19,
    type: "single_choice",
    question: "在使用GeomagicWrap软件减少面片嘈杂的部分可以使用（）命令。",
    options: {
      A: "减少噪音",
      B: "网格医生",
      C: "重划网格",
      D: "删除"
    },
    answer: "A",
    category: "技术基础"
  },
  {
    id: 20,
    type: "single_choice",
    question: "GeomagicWrap软件中封装命令，作用是（）。",
    options: {
      A: "修改点云",
      B: "光顺点云",
      C: "删除点云",
      D: "点云变成面片"
    },
    answer: "D",
    category: "技术基础"
  },
  {
    id: 21,
    type: "single_choice",
    question: "不是3D打印切片软件的是（）。",
    options: {
      A: "Cura",
      B: "XBuilder",
      C: "Modellight",
      D: "Magics"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 22,
    type: "single_choice",
    question: "3D打印技术包括（）、3D打印过程和3D打印后处理。",
    options: {
      A: "3D打印前处理",
      B: "切片",
      C: "上料",
      D: "调平"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 23,
    type: "single_choice",
    question: "下列哪些内容包括在3D打印的过程中（）",
    options: {
      A: "三维模型设计",
      B: "切片处理",
      C: "逆向扫描",
      D: "以上内容均包含"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 24,
    type: "single_choice",
    question: "Modellight切片软件所能读取的文件格式为（）。",
    options: {
      A: "FBX",
      B: "Z1",
      C: "Zxed",
      D: "STL"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 25,
    type: "single_choice",
    question: "切片完成后我们导出的文件是（）格式的。",
    options: {
      A: "OBJ",
      B: "STL",
      C: "Gcode",
      D: "Ged"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 26,
    type: "single_choice",
    question: "熔融沉积增材制造工艺英文简称（）。",
    options: {
      A: "FDM",
      B: "SLS",
      C: "DLP",
      D: "EBM"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 27,
    type: "single_choice",
    question: "以下不是切片软件能够读取的格式是（）。",
    options: {
      A: "STL",
      B: "OBJ",
      C: "3DS",
      D: "3MF"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 28,
    type: "single_choice",
    question: "在切片软件中，哪个选项可以修改设备型号（）。",
    options: {
      A: "打印机设置",
      B: "切片设置",
      C: "喷头设置",
      D: "打印管理"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 29,
    type: "single_choice",
    question: "在切片软件中，层高在下列哪个选项中设置（）。",
    options: {
      A: "不同高度切片设置",
      B: "切片设置",
      C: "打印机设置",
      D: "工厂模式设置"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 30,
    type: "single_choice",
    question: "当打印模型超程时需要检查切片软件内（）。",
    options: {
      A: "机型是否选择正确",
      B: "模型是否太大",
      C: "模型摆放位置是否正确",
      D: "以上均正确"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 31,
    type: "single_choice",
    question: "Modellight 可以进行哪种技术类型的切片（）。",
    options: {
      A: "LCD",
      B: "SLM",
      C: "SLS",
      D: "SLA"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 32,
    type: "single_choice",
    question: "以下哪个选项是 Modellight 中的支撑类型（）。",
    options: {
      A: "倾斜支撑",
      B: "曲线支撑",
      C: "面状支撑",
      D: "八字形支撑"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 33,
    type: "single_choice",
    question: "以下哪个选项不是 Modellight 中的支撑类型（）。",
    options: {
      A: "线性支撑",
      B: "球状支撑",
      C: "网格支撑",
      D: "树状支撑"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 34,
    type: "single_choice",
    question: "合理摆放模型的主要作用不包括（）。",
    options: {
      A: "保证打印精度",
      B: "保证模型质量",
      C: "保证模型重量",
      D: "减少支撑以此减少打印时间"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 35,
    type: "single_choice",
    question: "切片参数中，擦丝圈数默认为（）。",
    options: {
      A: "2",
      B: "4",
      C: "0.6",
      D: "40"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 36,
    type: "single_choice",
    question: "底层扩展宽度的意义是（）。",
    options: {
      A: "在无法加支撑的情况下，辅助模型粘接至平台",
      B: "在无法加支撑的情况下，辅助添加支撑",
      C: "在允许加支撑的情况下，辅助模型粘接至平台",
      D: "在允许加支撑的情况下，辅助添加支撑"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 37,
    type: "single_choice",
    question: "在切片参数中，封闭面厚度增加的意义下，下列错误描述的是（）。",
    options: {
      A: "为了保证模型强度",
      B: "为了增加顶层厚度",
      C: "为了加快打印速度",
      D: "为了使模型顶面打印效果更好"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 38,
    type: "single_choice",
    question: "封闭面厚度设置的单位参考是（）。",
    options: {
      A: "打印速度",
      B: "层高",
      C: "填充率",
      D: "边缘宽度"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 39,
    type: "single_choice",
    question: "底层打印速度如果设置得过高，会导致（）。",
    options: {
      A: "模型无法粘接到平台上",
      B: "模型打印完很难取下",
      C: "模型无法正常打印",
      D: "模型打印第一层不出料"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 40,
    type: "single_choice",
    question: "模型悬空部分支撑较少，可以考虑增加（）参数。",
    options: {
      A: "支撑数量",
      B: "支撑大小",
      C: "支撑角度",
      D: "支撑密度"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 41,
    type: "single_choice",
    question: "FDM技术的优点不包括以下哪一项？（）",
    options: {
      A: "绿色环保",
      B: "设备价格低",
      C: "尺寸精度高，表面质量好",
      D: "可用耗材种类相对较多"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 42,
    type: "single_choice",
    question: "FDM技术打印的模型表面质量是由（）决定的。",
    options: {
      A: "温度、打印速度",
      B: "层高、支撑、摆放等",
      C: "填充率",
      D: "打印头直径"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 43,
    type: "single_choice",
    question: "FDM技术打印的模型表面横纹的精细程度是由（）参数决定的。",
    options: {
      A: "层高",
      B: "打印速度",
      C: "打印头直径",
      D: "打印温度"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 44,
    type: "single_choice",
    question: "以下哪个选项可以决定FDM模型的表面质量（）。",
    options: {
      A: "临界角",
      B: "壁厚",
      C: "模型的不同摆放方式",
      D: "填充"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 45,
    type: "single_choice",
    question: "PLA材料的主要特性是？（）",
    options: {
      A: "耗能高",
      B: "不易降解",
      C: "制作原料稀缺",
      D: "绿色环保"
    },
    answer: "D",
    category: "材料工程"
  },
  {
    id: 46,
    type: "single_choice",
    question: "对于FDM技术来说最适合的支撑材料是（）。",
    options: {
      A: "金属",
      B: "粉末材料",
      C: "水溶性材料",
      D: "PLA"
    },
    answer: "C",
    category: "材料工程"
  },
  {
    id: 47,
    type: "single_choice",
    question: "市场上常见的3D打印机所用的打印材料直径为（）。",
    options: {
      A: "1.75mm或3mm",
      B: "1.85mm或3mm",
      C: "1.85mm或2mm",
      D: "1.75mm或2mm"
    },
    answer: "A",
    category: "材料工程"
  },
  {
    id: 48,
    type: "single_choice",
    question: "不是ABS材料特性的是（）。",
    options: {
      A: "力学性能优良",
      B: "耐磨性优良",
      C: "绝缘性好",
      D: "紫外光耐候性优良"
    },
    answer: "D",
    category: "材料工程"
  },
  {
    id: 49,
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
  {
    id: 50,
    type: "single_choice",
    question: "下列哪一项不是FDM设备使用前需要进行的调试操作。（）",
    options: {
      A: "调平",
      B: "更换离型膜",
      C: "涂胶",
      D: "上料"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 51,
    type: "single_choice",
    question: "FDM设备的进料系统分为（）。",
    options: {
      A: "近端送料系统",
      B: "远端送料系统",
      C: "近端和远端送料系统",
      D: "直接送料系统"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 52,
    type: "single_choice",
    question: "不论何种送料系统，都需要的硬件是？（）",
    options: {
      A: "电机",
      B: "螺杆",
      C: "传动齿轮",
      D: "滚动轴承"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 53,
    type: "single_choice",
    question: "配置为手动调平FDM技术的3D打印机，是依靠（）进行调平的。",
    options: {
      A: "设置X、Y、Z三轴高度",
      B: "移动热床板",
      C: "设置电机细分级别",
      D: "调平旋钮"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 54,
    type: "single_choice",
    question: "FDM3D打印机自动调平系统主要是基于（）。",
    options: {
      A: "喷头悬臂",
      B: "压敏开关",
      C: "效应器球轴",
      D: "调平旋钮"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 55,
    type: "single_choice",
    question: "FDM打印工艺的优点是（）。",
    options: {
      A: "高精度",
      B: "总体造价低廉",
      C: "所有材质都可以打印",
      D: "打印速度快"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 56,
    type: "single_choice",
    question: "LCD打印工艺的主要优点是（）。",
    options: {
      A: "成型精度高",
      B: "材料环保无异味",
      C: "可以打印大尺寸",
      D: "造价偏低更受众"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 57,
    type: "single_choice",
    question: "对于一个尺寸为28mm*15mm*20mm的模型，为了尽可能表现其细节，使用（）工艺进行打印更合适。",
    options: {
      A: "FDM",
      B: "SLS",
      C: "LCD",
      D: "SLM"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 58,
    type: "single_choice",
    question: "某设计师准备设计一款喷气式无人机，机翼部分使用（）工艺进行打印更符合产品需求。",
    options: {
      A: "FDM",
      B: "EBM",
      C: "SLS",
      D: "3DP"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 59,
    type: "single_choice",
    question: "精度较高的手办，可以使用（）工艺进行打印。",
    options: {
      A: "SLM",
      B: "LCD",
      C: "FDM",
      D: "SLS"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 60,
    type: "single_choice",
    question: "在FDM打印前切片时，如果同时有多个模型，可以使用（）功能进行模型摆放。",
    options: {
      A: "旋转模型至选中平面",
      B: "置于平面",
      C: "模型居中",
      D: "自动放置"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 61,
    type: "single_choice",
    question: "FDM3D打印机一次能够打印的模型数量是由（）决定的。",
    options: {
      A: "摆放位置",
      B: "切片软件的内存",
      C: "打印平台的尺寸",
      D: "文件的大小"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 62,
    type: "single_choice",
    question: "如果在切片软件中模型摆放角度不合适，可以使用（）功能进行摆放。",
    options: {
      A: "旋转模型至选中平面",
      B: "置于平面",
      C: "模型居中",
      D: "自动放置"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 63,
    type: "single_choice",
    question: "LCD光固化设备在操作前需要佩戴（）",
    options: {
      A: "防护眼镜",
      B: "防护口罩",
      C: "防护面罩",
      D: "丁晴手套"
    },
    answer: "D",
    category: "安全规范"
  },
  {
    id: 64,
    type: "single_choice",
    question: "LCD光固化设备如果需要长时间操作，还应佩戴（）。",
    options: {
      A: "防毒面具",
      B: "防护口罩",
      C: "橡胶靴",
      D: "丁晴手套"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 65,
    type: "single_choice",
    question: "LCD光固化设备在打印完拆件时，应使用（）。",
    options: {
      A: "金属铲",
      B: "镊子",
      C: "刀片",
      D: "钳子"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 66,
    type: "single_choice",
    question: "LCD光固化设备在清理料槽时应使用（）。",
    options: {
      A: "喷枪",
      B: "镊子",
      C: "铲刀",
      D: "塑料铲"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 67,
    type: "single_choice",
    question: "光固化打印的模型，在拆除支撑时可以使用（）。",
    options: {
      A: "美工刀",
      B: "锤子",
      C: "偏口钳",
      D: "笔刀"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 68,
    type: "single_choice",
    question: "对于一些有韧性、弹性需求的工件，我们可以选择使用（）进行打印。",
    options: {
      A: "TPU",
      B: "ABS",
      C: "蜡基材料",
      D: "PA"
    },
    answer: "A",
    category: "材料工程"
  },
  {
    id: 69,
    type: "single_choice",
    question: "对于强度和轻量化的工件，我们可以选择使用（）材料进行打印。",
    options: {
      A: "碳纤维",
      B: "TPU",
      C: "尼龙粉末",
      D: "PLA"
    },
    answer: "A",
    category: "材料工程"
  },
  {
    id: 70,
    type: "single_choice",
    question: "打印柔性材料时，对于近远端双电机供料的设备，我们应该使用（）供料。",
    options: {
      A: "直接进料",
      B: "近远端送料",
      C: "远端送料",
      D: "近端送料"
    },
    answer: "D",
    category: "材料工程"
  },
  {
    id: 71,
    type: "single_choice",
    question: "LCD光固化材料在回收时为什么要尽量避光？",
    options: {
      A: "因为环境中的紫外光会固化树脂材料",
      B: "因为设备怕阳光照射",
      C: "因为光敏树脂容易挥发",
      D: "因为光敏树脂材料预光会变质"
    },
    answer: "A",
    category: "材料工程"
  },
  {
    id: 72,
    type: "single_choice",
    question: "相对于传统制造方式，3D打印的优点是（）。",
    options: {
      A: "可以打印任何材料",
      B: "打印精度最高",
      C: "满足少量化、个性化生产需求",
      D: "可以满足大批量生产要求"
    },
    answer: "C",
    category: "安全规范"
  },
  {
    id: 73,
    type: "single_choice",
    question: "以下对于打印完成的设备操作，描述正确的是（）。",
    options: {
      A: "无需等待打印头停止移动即可铲下模型",
      B: "等待打印头停止移动，并完全降低至室温后，铲下模型",
      C: "等待打印头停止移动，无需等待降低至室温，即可铲下模型",
      D: "未显示打印完成，即可将手放入设备中，取下模型"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 74,
    type: "single_choice",
    question: "设备在（）禁止用手触碰打印头加热部分。",
    options: {
      A: "未彻底降温时",
      B: "未开机",
      C: "打印头没加温",
      D: "彻底降温"
    },
    answer: "A",
    category: "安全规范"
  },
  {
    id: 75,
    type: "single_choice",
    question: "在更换打印头的热敏电阻时，需（）。",
    options: {
      A: "给打印头降温",
      B: "关闭打印机",
      C: "三轴复位",
      D: "给打印头加温"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 76,
    type: "single_choice",
    question: "在已经执行完三轴复位的前提下，更换打印头快拆块时，需(）。",
    options: {
      A: "关闭设备",
      B: "给打印头降温",
      C: "将打印平台下降",
      D: "将打印平台调平"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 77,
    type: "single_choice",
    question: "在更换主板时，除了需要关机，还需要（）。",
    options: {
      A: "关闭总电源",
      B: "关闭切片软件",
      C: "断开网络连接",
      D: "微信解绑设备"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 78,
    type: "single_choice",
    question: "LCD光固化设备在使用完成后，需要清理（）。",
    options: {
      A: "喷嘴",
      B: "料槽",
      C: "打印平台",
      D: "打印屏幕"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 79,
    type: "single_choice",
    question: "LCD光固化设备在清理时需要使用（）。",
    options: {
      A: "钳子",
      B: "口罩",
      C: "湿巾",
      D: "酒精"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 80,
    type: "single_choice",
    question: "LCD光固化设备在使用后除了要对设备进行清理，还需要对（）清理。",
    options: {
      A: "离型膜",
      B: "Z轴丝杠",
      C: "设备放置的平台",
      D: "光筒"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 81,
    type: "single_choice",
    question: "FDM设备打印仓底部长时间使用会积累灰尘，主要的影响是(）。",
    options: {
      A: "影响打印平台正常移动",
      B: "影响打印模型质量和精度",
      C: "影响设备使用寿命",
      D: "影响打印仓内温度"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 82,
    type: "single_choice",
    question: "FDM设备在使用前需在玻璃板上涂抹（）保证模型底部与平台玻璃板的粘接。",
    options: {
      A: "固体胶棒",
      B: "502胶水",
      C: "亚克力粘合剂",
      D: "防翘边胶水"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 83,
    type: "single_choice",
    question: "FDM技术的成型原理是什么？（）",
    options: {
      A: "在料槽中盛满液态光敏树脂，树脂在紫外激光束的照射下快速固化",
      B: "高温加热融化，按规定路径挤出后迅速冷却凝固成型",
      C: "利用喷头喷黏结剂，选择性的黏结粉末来成型",
      D: "采用金属粉末和陶瓷粉末为打印材料，通过激光一层层烧结来黏结"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 84,
    type: "single_choice",
    question: "FDM技术中的平台是由哪个轴向的电机控制的？",
    options: {
      A: "Z",
      B: "X",
      C: "Y",
      D: "三轴共同控制"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 85,
    type: "single_choice",
    question: "FDM成型工艺所使用的材料类型是？",
    options: {
      A: "强韧性",
      B: "半透明性",
      C: "热塑性",
      D: "抗紫外线"
    },
    answer: "C",
    category: "材料工程"
  },
  {
    id: 86,
    type: "single_choice",
    question: "FDM成型工艺中打印头的左右移动是由（）轴电机控制的。",
    options: {
      A: "X和Y",
      B: "X",
      C: "X和Z",
      D: "X、Y、Z"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 87,
    type: "single_choice",
    question: "FDM成型工艺中材料的主要特性是？",
    options: {
      A: "固体",
      B: "液体",
      C: "粉末",
      D: "线状"
    },
    answer: "D",
    category: "材料工程"
  },
  {
    id: 88,
    type: "single_choice",
    question: "Modellight切片完成后如何观察每层的切片效果？",
    options: {
      A: "切片完成后，界面右上角处可以选择并滑动观察",
      B: "鼠标滚轮直接上下滑动",
      C: "选中模型，滑动鼠标滚轮",
      D: "直接就能看到"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 89,
    type: "single_choice",
    question: "切片完成后怎么查看打印时间？",
    options: {
      A: "切片过程中直接可以看到",
      B: "界面左下角显示",
      C: "切片完成后，在打印管理中查看",
      D: "无法查看"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 90,
    type: "single_choice",
    question: "切片后不能导出的文件为（）。",
    options: {
      A: "3MF",
      B: "Gcode",
      C: "egcode",
      D: "hori"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 91,
    type: "single_choice",
    question: "判断模型能否正常打印的最基本方法为？",
    options: {
      A: "导入到切片软件后都能进行打印",
      B: "看切片软件中模型的尺寸",
      C: "模型导入切片软件后，从各个方位观察是否在模型框内",
      D: "模型导入切片软件后，观察模型表面有没有其他颜色"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 92,
    type: "single_choice",
    question: "切片后如果对现有的层高、壁厚、时间不满意，可以通过修改（）达到满意的效果。",
    options: {
      A: "打印管理",
      B: "切片设置",
      C: "工厂模式设置",
      D: "逐个打印设置"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 93,
    type: "single_choice",
    question: "如何在FDM切片界面和LCD切片界面中进行切换？",
    options: {
      A: "切片设置",
      B: "打印管理",
      C: "在工厂模式设置中进行调整",
      D: "逐个打印设置"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 94,
    type: "single_choice",
    question: "FDM切片切片软件的切片设置中，以下哪个不是底垫中的选项（）",
    options: {
      A: "无底垫",
      B: "普通底垫",
      C: "防翘边底垫",
      D: "不透水底垫"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 95,
    type: "single_choice",
    question: "FDM切片切片软件的切片设置中，以下哪个不是模型风扇中的选项（）",
    options: {
      A: "逐渐全开",
      B: "逐渐关闭",
      C: "全程关闭",
      D: "一直全开"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 96,
    type: "single_choice",
    question: "FDM切片切片软件的切片设置中，以下哪个不是模型支撑类型中的选项（）",
    options: {
      A: "防翘边支撑",
      B: "无支撑",
      C: "底层支撑",
      D: "完全支撑"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 98,
    type: "single_choice",
    question: "FDM切片切片软件的切片设置中，以下哪个不是内部填充图案中的选项（）",
    options: {
      A: "线",
      B: "网格",
      C: "柱",
      D: "圆环"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 100,
    type: "single_choice",
    question: "FDM3D打印机的操作界面，控制打印头移动的界面是？（）",
    options: {
      A: "调整",
      B: "首页",
      C: "打印",
      D: "设置"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 101,
    type: "single_choice",
    question: "FDM打印机操作界面中，三轴复位位于（）界面。",
    options: {
      A: "首页",
      B: "调整",
      C: "打印",
      D: "设置"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 102,
    type: "single_choice",
    question: "FDM打印机操作界面中，（）界面可以调整打印速度。",
    options: {
      A: "首页",
      B: "调整",
      C: "打印",
      D: "设置"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 103,
    type: "single_choice",
    question: "FDM打印机操作界面中，（）界面可以开启打印完自动关机功能。",
    options: {
      A: "首页",
      B: "调整",
      C: "打印",
      D: "设置"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 104,
    type: "single_choice",
    question: "LCD的3D打印机区别于SLA最显著特点是其具有（）",
    options: {
      A: "二极管",
      B: "激光头",
      C: "LED屏",
      D: "LCD屏"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 105,
    type: "single_choice",
    question: "LCD光固化3D打印机，有（）个Z轴电机。",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 106,
    type: "single_choice",
    question: "LCD光固化打印机的打印时间是由（）决定的。",
    options: {
      A: "模型长度",
      B: "模型宽度",
      C: "模型高度",
      D: "模型体积"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 107,
    type: "single_choice",
    question: "光固化机型，打印文件是（）形式。",
    options: {
      A: "Z1",
      B: "gcode",
      C: "stl",
      D: "文件夹"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 108,
    type: "single_choice",
    question: "光固化机型，打印过程中模型脱落，从调试角度来考虑是因为（）。",
    options: {
      A: "模型太大",
      B: "平台没有涂胶",
      C: "数值颜色太浅",
      D: "平台过松"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 109,
    type: "single_choice",
    question: "下列哪种产品仅使用3D打印技术无法制造完成（）",
    options: {
      A: "首饰",
      B: "手机",
      C: "服装",
      D: "义齿"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 110,
    type: "single_choice",
    question: "（）又称为光固化立体成型",
    options: {
      A: "SLA",
      B: "FDM",
      C: "SLS",
      D: "3DP"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 111,
    type: "single_choice",
    question: "一般情况下，SLA技术使用的基本原材料是？（）",
    options: {
      A: "粉末材料",
      B: "光敏树脂",
      C: "金属材料",
      D: "高分子材料"
    },
    answer: "B",
    category: "材料工程"
  },
  {
    id: 112,
    type: "single_choice",
    question: "SLA对于成形材料选择，要求不正确的是（）",
    options: {
      A: "成形材料易于固化，且成形后具有一定的粘结强度。",
      B: "成形材料的黏度必须要高，以保证成形后具有一定的粘结强度。",
      C: "成形材料本身的热影响区小，收缩应力小。",
      D: "成形材料对光有一定的透过深度，以获得具有一定固化深度的层片。"
    },
    answer: "B",
    category: "材料工程"
  },
  {
    id: 113,
    type: "single_choice",
    question: "光固化树脂成型材料主要包括（）",
    options: {
      A: "齐聚物和反应稀释剂",
      B: "齐聚物和光引发剂",
      C: "反应性稀释剂和光引发剂",
      D: "齐聚物、反应性稀释剂和光引发剂"
    },
    answer: "D",
    category: "材料工程"
  },
  {
    id: 114,
    type: "single_choice",
    question: "以下不属于立体光固化技术成型，对材料的要求是（）",
    options: {
      A: "低黏度",
      B: "快速固化，光敏性不好",
      C: "微小的固化形变",
      D: "固化物产生良好的耐溶剂性能"
    },
    answer: "B",
    category: "材料工程"
  },
  {
    id: 115,
    type: "single_choice",
    question: "以下不是SLA材料特性的是（）",
    options: {
      A: "粘度低",
      B: "固定收缩大",
      C: "湿态强度高",
      D: "杂质少"
    },
    answer: "B",
    category: "材料工程"
  },
  {
    id: 116,
    type: "single_choice",
    question: "以下不是SLA的缺陷的是",
    options: {
      A: "硬度很低而相对脆弱",
      B: "模型精度高",
      C: "后期处理相对复杂",
      D: "价格昂贵"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 117,
    type: "single_choice",
    question: "3D打印的主流技术包括SLA、FDM、SLS、3DP、LOM等，（）是把本来液态的光敏树脂，用紫外激光照射，照到哪儿，哪儿就从液态变成了固态",
    options: {
      A: "SLA",
      B: "FDM",
      C: "SLS",
      D: "3DP"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 118,
    type: "single_choice",
    question: "LCD光固化打印机的打印时间和（）是成正比的。",
    options: {
      A: "层高",
      B: "壳厚",
      C: "壁厚",
      D: "支撑数量"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 119,
    type: "single_choice",
    question: "光固化机型，打印完成后，先后顺序正确的是（）",
    options: {
      A: "先固化后清洗",
      B: "先清洗不固化",
      C: "先清洗后固化",
      D: "先固化不清洗"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 120,
    type: "single_choice",
    question: "光固化机型，每层固化时间为（）",
    options: {
      A: "5~10s",
      B: "0~5s",
      C: "15~20s",
      D: "根据树脂决定"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 121,
    type: "single_choice",
    question: "光固化打印机使用的光敏树脂具有（）",
    options: {
      A: "腐蚀性",
      B: "挥发性",
      C: "稳定性",
      D: "脱水性"
    },
    answer: "A",
    category: "材料工程"
  },
  {
    id: 122,
    type: "single_choice",
    question: "光固化打印机曝光时间太短不会导致哪种问题。",
    options: {
      A: "模型脱落",
      B: "打印翘边",
      C: "模型细节打印不出来",
      D: "模型比较难取"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 123,
    type: "single_choice",
    question: "SLA原型的变形量中由于后固化收缩产生的比例是（）。",
    options: {
      A: "5%~10%",
      B: "70%~90%",
      C: "20%~50%",
      D: "25%~40%"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 124,
    type: "single_choice",
    question: "下列符合SLA激光扫描速度范围的是：（）",
    options: {
      A: "800mm/s",
      B: "60m/s",
      C: "7000mm/s",
      D: "5000m/s"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 125,
    type: "single_choice",
    question: "下列符合SLA打印工艺常用层厚的是：（）",
    options: {
      A: "1mm",
      B: "0.03mm",
      C: "0.1mm",
      D: "0.2mm"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 126,
    type: "single_choice",
    question: "针对大型零件尝尝采用分块打印，之后再拼接粘接，不是常用的粘接剂是：（）",
    options: {
      A: "502胶水",
      B: "AB胶",
      C: "结构胶",
      D: "水溶胶"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 127,
    type: "single_choice",
    question: "（）又称为选择性激光烧结",
    options: {
      A: "SLA",
      B: "FDM",
      C: "SLS",
      D: "3DP"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 128,
    type: "single_choice",
    question: "光固化立体成型工艺中影响原型精度的因素不包括（）",
    options: {
      A: "数据处理产生的误差",
      B: "成形过程产生的误差",
      C: "树脂材料的影响产生的误差",
      D: "温度变化产生的误差"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 129,
    type: "single_choice",
    question: "支撑填充率参数设置为比较常用的范围为（）",
    options: {
      A: "10~25%",
      B: "10~30%",
      C: "15~25%",
      D: "20~30%"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 130,
    type: "single_choice",
    question: "光固化成型工艺树脂发生收缩的原因主要是（）",
    options: {
      A: "树脂固化收缩",
      B: "热胀冷缩",
      C: "范德华力导致的收缩",
      D: "树脂固化收缩和热涨冷缩"
    },
    answer: "D",
    category: "材料工程"
  },
  {
    id: 131,
    type: "single_choice",
    question: "立体固化工艺设备扫描振镜的扫描速度一般为（）mm/s。",
    options: {
      A: "6000---12000",
      B: "4000---12000",
      C: "6000---20000",
      D: "4000---20000"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 132,
    type: "single_choice",
    question: "做小件或精细件时SLA与FDM的精度（）",
    options: {
      A: "前者较高",
      B: "后者较高",
      C: "相同",
      D: "不确定"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 134,
    type: "single_choice",
    question: "LCD光固化打印机，已知打印一个模型的时间是2小时，现在临时要在平台上多增加两个同样的模型，请问需要多久才能打印完这三个模型？（）",
    options: {
      A: "1",
      B: "2",
      C: "4",
      D: "6"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 135,
    type: "single_choice",
    question: "LCD光固化打印在切片时，点击自动生成支撑后，并未在模型悬空部分生成支撑可能是因为",
    options: {
      A: "层高太高",
      B: "切片软件运算错误",
      C: "模型高度过高",
      D: "模型高度过低"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 136,
    type: "single_choice",
    question: "在使用LCD光固化打印机时，打印完成后发现模型只打印完成了一半，有可能是因为。（）",
    options: {
      A: "层高设置错误",
      B: "打印速度过快",
      C: "料槽中树脂不够",
      D: "曝光时间太短"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 137,
    type: "single_choice",
    question: "在向LCD光固化3D打印机料槽中添加耗材时，需先轻微摇晃使耗材，目的是（）",
    options: {
      A: "使模型拆取更方便",
      B: "使设备运行更稳定",
      C: "使打印的模型更光滑",
      D: "使添加到料槽内的耗材更均匀"
    },
    answer: "D",
    category: "材料工程"
  },
  {
    id: 138,
    type: "single_choice",
    question: "以下那款软件为SLA工艺设备的常用软件（）",
    options: {
      A: "chitubox",
      B: "Cura",
      C: "PrusaSlicer",
      D: "Simplify3D"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 139,
    type: "single_choice",
    question: "SLA成型技术的优势是成型件的尺寸精度较高，一般情况下可以达到",
    options: {
      A: "±0.05mm",
      B: "±0.08mm",
      C: "±0.01mm",
      D: "±0.15mm"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 140,
    type: "single_choice",
    question: "以下使用激光技术最多的3D打印技术是（）",
    options: {
      A: "SLA",
      B: "LOM",
      C: "3DP",
      D: "FDM"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 141,
    type: "single_choice",
    question: "一般来说，（）格式文件是3D打印领域的准标准接口文件。",
    options: {
      A: "SAL",
      B: "LED",
      C: "STL",
      D: "RAD"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 142,
    type: "single_choice",
    question: "LCD光固化设备操作的顺序是（）",
    options: {
      A: "开机-上料-打印-调万向轴",
      B: "开机-上料-调平-打印",
      C: "开机-调平-上料-打印",
      D: "开机-调万向轴-上料-打印"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 143,
    type: "single_choice",
    question: "LCD光固化设备操作顺序正确的是（）",
    options: {
      A: "取下平台后，将模型置于料槽内",
      B: "取下料槽后，取下平台，清理平台",
      C: "取下平台的同时取下模型，将模型二次固化",
      D: "取下模型放入清洗机，取下平台进行清理"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 144,
    type: "single_choice",
    question: "LCD光固化设备打印完成后，发现平台上没有东西，第一时间要做的是（）",
    options: {
      A: "重新切片打印",
      B: "使用塑料铲检查料槽内部",
      C: "检查切片文件",
      D: "重新调平"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 145,
    type: "single_choice",
    question: "LCD光固化设备打印完成后，拆取模型时，应该用（）辅助拆取。",
    options: {
      A: "金属铲",
      B: "塑料铲",
      C: "丁晴手套",
      D: "酒精"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 146,
    type: "single_choice",
    question: "使用LCD光固化打印机不需要注意的事项（）。",
    options: {
      A: "戴一次性手套",
      B: "模型需要用酒精清理",
      C: "模型要二次固话",
      D: "可以使用不锈钢铲料槽"
    },
    answer: "D",
    category: "安全规范"
  },
  {
    id: 147,
    type: "single_choice",
    question: "SLA技术的优势不包括以下哪一项（）",
    options: {
      A: "加工速度快，产品生产周期短，无需切削工具和模具",
      B: "材料种类丰富，覆盖行业领域广",
      C: "工艺成熟稳定，已有30多年技术积累",
      D: "尺寸精度高，表面质量好"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 148,
    type: "single_choice",
    question: "对于SLA快速成形系统硬件精度包括",
    options: {
      A: "激光束扫描精度",
      B: "形状位置精度",
      C: "涂层精度",
      D: "动态聚焦精度"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 149,
    type: "single_choice",
    question: "光固化快速成型工艺以（）为原料，通过计算机控制紫外激光使其凝固成型。",
    options: {
      A: "光敏树脂",
      B: "ABS",
      C: "金属箔",
      D: "金属粉"
    },
    answer: "A",
    category: "材料工程"
  },
  {
    id: 150,
    type: "single_choice",
    question: "（）在工业市场上采用得比较多，因为它和工业结合得很紧密，而且使用的材料广泛。",
    options: {
      A: "SLA",
      B: "FDM",
      C: "SLS",
      D: "3DP"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 151,
    type: "single_choice",
    question: "粉末密度依定义不同而存在不同情况，对于SLM而言，粉末铺粉密度越高，成型件的致密度也会越高，其工艺中采用的粉末密度为（）",
    options: {
      A: "真密度",
      B: "粒子密度",
      C: "松装密度",
      D: "振实密度"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 152,
    type: "single_choice",
    question: "SLS技术最重要的是使用领域是（）",
    options: {
      A: "高分子材料成型",
      B: "树脂材料成型",
      C: "金属材料成型",
      D: "薄片材料成型"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 153,
    type: "single_choice",
    question: "SLS技术即（）",
    options: {
      A: "选择性激光烧结技术",
      B: "分层实体制造技术",
      C: "立体光固化成型技术",
      D: "熔积成型技术"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 154,
    type: "single_choice",
    question: "SLS成型技术使用的材料是（）的粉末材料",
    options: {
      A: "纳米级",
      B: "厘米级",
      C: "微米级",
      D: "毫米级"
    },
    answer: "C",
    category: "材料工程"
  },
  {
    id: 155,
    type: "single_choice",
    question: "SLS工艺设备是利用（）激光烧结粉末的。",
    options: {
      A: "紫外",
      B: "红外",
      C: "可视",
      D: "X射线"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 156,
    type: "single_choice",
    question: "选择性激光烧结成型工艺可成型的材料不包括（）",
    options: {
      A: "塑料粉",
      B: "陶瓷粉",
      C: "金属粉",
      D: "泡沫"
    },
    answer: "D",
    category: "材料工程"
  },
  {
    id: 157,
    type: "single_choice",
    question: "SLS使用的是红外激光束，材料可以是塑料、蜡、（）、金属或者复合物的粉末。",
    options: {
      A: "淀粉",
      B: "纳米粉",
      C: "陶瓷材料",
      D: "碳酸钙粉"
    },
    answer: "C",
    category: "材料工程"
  },
  {
    id: 158,
    type: "single_choice",
    question: "下列关于SLS说法错误的是（）。",
    options: {
      A: "SLS烧结机理分为四大类，每一种烧结过程中，同时伴随其他几种烧结的进行。",
      B: "粉末的预热温度能明显改善成形品的性能质量。但是预热温度最高不能超过粉末材料的最低熔点或塑变温度。",
      C: "SLS成形技术不可以打印金属零件。",
      D: "从理论上讲，所有受热后能相互粘结的粉末材料或表面覆有热塑（固）性粘结剂的粉末都能作为SLS的成形材料。"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 159,
    type: "single_choice",
    question: "目前激光选区熔化沉积技术应用于金属、非金属，所选用的材料有（）。",
    options: {
      A: "丝材",
      B: "球形粉",
      C: "板材",
      D: "棒材"
    },
    answer: "B",
    category: "材料工程"
  },
  {
    id: 160,
    type: "single_choice",
    question: "下列哪种技术不需要加支撑的是。",
    options: {
      A: "SLA",
      B: "SLS",
      C: "SLM",
      D: "FDM"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 161,
    type: "single_choice",
    question: "（）技术最重要的使用领域是金属材料成型",
    options: {
      A: "SLA",
      B: "SLS",
      C: "FDM",
      D: "LOM"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 162,
    type: "single_choice",
    question: "3D打印技术在金属增材制造中使用（）最多",
    options: {
      A: "FDM",
      B: "3DP",
      C: "SLS",
      D: "SLA"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 163,
    type: "single_choice",
    question: "激光功率大小决定着（）",
    options: {
      A: "最大分层厚度",
      B: "光斑的大小",
      C: "制件的表面光洁度",
      D: "模型的尺寸精度"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 164,
    type: "single_choice",
    question: "关于SLS制造工艺参数对成形零件质量影响，错误的是（）",
    options: {
      A: "成形零件的致密度和强度随着激光输出能量的加大而增高，随着扫描速度的增大而变小。",
      B: "较高的扫描速度和激光能量达到较好的烧结结果。",
      C: "高的激光能量密度使得成形零件内部产生大的应力作用。",
      D: "预热温度最高不能超过粉末材料的最低熔点或塑变温度。"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 165,
    type: "single_choice",
    question: "在SLA工艺中，通常为了减少固化应力导致的变形，扫描截面是往往采用（）扫描曝光的功率。",
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
    id: 166,
    type: "single_choice",
    question: "（）以下不是SLA工艺的主要缺点。",
    options: {
      A: "打印效率低",
      B: "材料强度和耐热性一般",
      C: "系统造价高",
      D: "设备对工作环境的湿度和温度要求较严"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 167,
    type: "single_choice",
    question: "选择性激光烧结成型工艺可成型的材料包括一下哪几种（）。",
    options: {
      A: "塑料",
      B: "陶瓷",
      C: "金属",
      D: "以上都对"
    },
    answer: "D",
    category: "材料工程"
  },
  {
    id: 168,
    type: "single_choice",
    question: "在操作SLS工艺设备前需开启冷水机，使冷水机温度保持在（）后，再进行下一步操作。",
    options: {
      A: "18-20",
      B: "22-26",
      C: "28-32",
      D: "30-34"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 169,
    type: "single_choice",
    question: "在取出用SLS工艺设备打印出来的模型时应采用以下哪种口",
    options: {
      A: "一次性医用外科口罩",
      B: "3M防毒面具",
      C: "家用保暖口罩",
      D: "N95口罩"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 170,
    type: "single_choice",
    question: "粉末粘结技术在开机操作前，必须（）",
    options: {
      A: "佩戴手套",
      B: "佩戴手套和口罩",
      C: "佩戴口罩",
      D: "安全鞋"
    },
    answer: "B",
    category: "安全规范"
  },
  {
    id: 171,
    type: "single_choice",
    question: "SLS成型系统中负责提供能量的部分是。",
    options: {
      A: "加热装置",
      B: "振镜动态聚焦扫描系统",
      C: "扑粉辊装置",
      D: "激光器"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 172,
    type: "single_choice",
    question: "使用SLS技术成型金属原件时，为确保烧结过程的安全性，在成型过程中会不断的补充（）。",
    options: {
      A: "氩气",
      B: "氨气",
      C: "氰气",
      D: "氯气"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 173,
    type: "single_choice",
    question: "SLA工艺制作压蜡模具，进行蜡模的制造，属于（）。",
    options: {
      A: "直接制壳",
      B: "直接制型",
      C: "一次转型",
      D: "二次转型"
    },
    answer: "D",
    category: "打印技术"
  },
  {
    id: 174,
    type: "single_choice",
    question: "光固化模型正确的后处理流程是（）。",
    options: {
      A: "取模型--去支撑--酒精清洗--打磨支撑点--二次固话",
      B: "取模型--去支撑--打磨支撑点--酒精清洗--二次固话",
      C: "取模型--酒精清洗--去支撑--打磨支撑点--二次固话",
      D: "取模型--二次固话--酒精清洗--去支撑--打磨支撑点"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 175,
    type: "single_choice",
    question: "FDM技术生产构件后处理过程不包括（）。",
    options: {
      A: "静置",
      B: "拆支撑",
      C: "打磨",
      D: "喷漆"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 176,
    type: "single_choice",
    question: "以下四种成型工艺不需要支撑结构的是（）。",
    options: {
      A: "FDM",
      B: "LOM",
      C: "SLA",
      D: "DLP"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 177,
    type: "single_choice",
    question: "光固化快速成型工艺中，有时需要添加支撑结构，支撑结构的主要作用是（）。",
    options: {
      A: "防止翘曲变形",
      B: "提升打印成功率",
      C: "防止模型脱落",
      D: "以上都对"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 178,
    type: "single_choice",
    question: "以下对切片参数支撑与模型间距-Z（mm）解释正确的是（）。",
    options: {
      A: "模型左右两侧的支撑效果不好，需要调整该参数",
      B: "模型悬空部分未形成支撑，需要调整该参数",
      C: "模型左右两侧未形成支撑，需要调整该参数",
      D: "模型悬空部分支撑效果不好，需要调整该参数"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 179,
    type: "single_choice",
    question: "SLA打印完成后不正确的操作是（）。",
    options: {
      A: "倒处多余的树脂",
      B: "酒精清洗",
      C: "二次固化",
      D: "放在太阳光下"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 180,
    type: "single_choice",
    question: "针对3D打印制件特殊处理表述错误的是",
    options: {
      A: "金属打印制件通过热处理提升力学性能",
      B: "金属打印制件可以采用物理或化学抛光方法进行表面抛光，但是对尺寸有影响",
      C: "在多个打印零件粘接时，选择粘接剂不能与粘接件的材料发生化学反应，否则影响粘接制件",
      D: "打印制件通过打磨工具抛光后，会提升性能"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 181,
    type: "single_choice",
    question: "以下不是打磨、表面处理的目的的是（）。",
    options: {
      A: "表面更光洁",
      B: "手感更好",
      C: "强度更高",
      D: "视觉效果更好"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 182,
    type: "single_choice",
    question: "手工砂纸打磨的缺点是（）。",
    options: {
      A: "速度慢",
      B: "使用不方便",
      C: "对人体不健康",
      D: "只有一种型号"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 183,
    type: "single_choice",
    question: "砂纸打磨的优点是（）。",
    options: {
      A: "效率高",
      B: "自由度高",
      C: "打磨速度快",
      D: "所有物件都可以打磨"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 184,
    type: "single_choice",
    question: "打磨笔打磨的优点是（）。",
    options: {
      A: "效率高",
      B: "最好用的打磨工具",
      C: "比砂纸打磨更精细",
      D: "任何粗糙程度的打印件都能打磨"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 185,
    type: "single_choice",
    question: "砂带机更适合打磨有（）形状的打印件。",
    options: {
      A: "凹凸不平",
      B: "表面粗糙程度不一",
      C: "光滑平面、弧面",
      D: "曲面"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 186,
    type: "single_choice",
    question: "以下是SLA成形技术特有的后处理技术（）",
    options: {
      A: "取出成型件",
      B: "去除支撑",
      C: "后固化成型件",
      D: "排出未固化的光敏树脂"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 187,
    type: "single_choice",
    question: "如何让模型表面看起来更光滑（）。",
    options: {
      A: "用砂纸或锉刀进行打磨（但这属于材料去除工艺，如果分寸拿捏不当，则可能反而对精度和细节有损害），然后进行表面喷漆处理",
      B: "采用他们称之为材料转移技术的方法达到抛光目的，将零件表面突出部分的材料转移到凸槽部分，对零件表面的精度影响非常小",
      C: "使用丙酮、丁酮、氯仿、四氢呋喃等剧毒物质抛光",
      D: "水洗抛光"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 188,
    type: "single_choice",
    question: "以下属于化学处理打印制件的是：（）",
    options: {
      A: "支撑切割",
      B: "电解抛光",
      C: "震动抛光",
      D: "喷砂"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 189,
    type: "single_choice",
    question: "以下对震动抛光描述正确的是：（）",
    options: {
      A: "震动抛光可以抛光零部件表面",
      B: "震动抛光可以抛光内部结构",
      C: "震动抛光可以长时间抛光，不影响产品细节",
      D: "震动抛光不会影响制件尺寸精度"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 190,
    type: "single_choice",
    question: "以下对打印制件表面处理描述不正确的是：（）",
    options: {
      A: "打印的塑料件可以采用机械加工方式提升表面效果",
      B: "打印的金属零件可以直接使用，无需进行表面处理",
      C: "打印的光固化零件表面效果光滑，简单打磨后即可进行上色处理",
      D: "FDM打印的制件表面光滑，可上色处理"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 191,
    type: "single_choice",
    question: "一般情况下用以下哪种液体清理通过SLA技术打印出来的模型（）",
    options: {
      A: "矿泉水",
      B: "酒精",
      C: "纯净水",
      D: "自来水"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 192,
    type: "single_choice",
    question: "SLS3D打印技术成型件的后处理过程中最关键的步骤是（）",
    options: {
      A: "打磨成型件",
      B: "涂渡成型件",
      C: "取出成型件",
      D: "去除支撑部分"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 193,
    type: "single_choice",
    question: "以下是SLA成型件后处理流程的是（）",
    options: {
      A: "清洗一去支撑一表面处理打磨一喷砂一喷漆",
      B: "去支撑一表面打磨",
      C: "清粉处理一脱脂降解一烧结成型",
      D: "热处理一机加工一表面处理"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 194,
    type: "single_choice",
    question: "SLS技术常用的后处理方法不包括（）",
    options: {
      A: "高温烧结",
      B: "溶浸",
      C: "浸渍",
      D: "涂覆"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 196,
    type: "single_choice",
    question: "LCD技术打印的模型，二次固化的目的是（）。",
    options: {
      A: "方便拆除支撑",
      B: "增加模型精度",
      C: "可有可无的操作",
      D: "彻底固化表面树脂"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 197,
    type: "single_choice",
    question: "为什么需要二次固化？（）",
    options: {
      A: "材料需要",
      B: "增强打印件的强度",
      C: "增加表面精细度",
      D: "利于拆除支撑"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 198,
    type: "single_choice",
    question: "二次固化过程中需要注意的是（）。",
    options: {
      A: "紫外光的强度及固化时间",
      B: "固化温度的高低",
      C: "外界空气的净化",
      D: "模型大小"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 199,
    type: "single_choice",
    question: "最好在（）之后进行二次固化。",
    options: {
      A: "第一次固化完成后",
      B: "设备降温后",
      C: "拆除支撑",
      D: "模型冷却后"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 200,
    type: "single_choice",
    question: "在选取固化箱时，固化箱的光波越接近（）纳米越好。",
    options: {
      A: "404",
      B: "405",
      C: "505",
      D: "605"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 201,
    type: "single_choice",
    question: "LCD光固化3D打印机，在打印完成后需要（）。",
    options: {
      A: "清洗打印件",
      B: "把设备清理干净",
      C: "给机器冷却降温",
      D: "给机器封闭保存"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 202,
    type: "single_choice",
    question: "清洗打印件时，条件允许的情况下尽量使用（）辅助清洗。",
    options: {
      A: "起泡清洗机",
      B: "干冰清洗机",
      C: "高压喷淋清洗机",
      D: "超声波清洗机"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 203,
    type: "single_choice",
    question: "（）打印件尤其需要进行后处理。",
    options: {
      A: "玩具",
      B: "装配",
      C: "教辅用具",
      D: "装饰品"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 204,
    type: "single_choice",
    question: "下面关于后处理的描述正确的是（）。",
    options: {
      A: "一共有四种后处理方法",
      B: "后处理可有可无，必要时刻对打印件稍做处理就可以",
      C: "后处理是对3D打印机产出的打印件必要的优化手段",
      D: "抛光是后处理过程中最重要的步骤"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 205,
    type: "single_choice",
    question: "下列选项中不是3D打印件常用的后处理工具的是（）。",
    options: {
      A: "拉马",
      B: "砂纸",
      C: "锉刀",
      D: "剪钳"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 206,
    type: "single_choice",
    question: "针对金属打印件进行性能提升，常采用的特殊处理的方法有：（）",
    options: {
      A: "打磨",
      B: "机械加工",
      C: "热处理",
      D: "喷砂"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 207,
    type: "single_choice",
    question: "使用SLS3D打印原型件后，将液态金属物质浸入多孔的SLS坯体的孔隙内的工艺是（）",
    options: {
      A: "浸渍",
      B: "热等静压烧结",
      C: "熔浸",
      D: "高温烧结"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 208,
    type: "single_choice",
    question: "以下属于光固化技术打印的后处理主要步骤之一的是（）",
    options: {
      A: "干燥样件",
      B: "清水冲洗样件",
      C: "用蒸馏水泡洗",
      D: "以上都是"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 209,
    type: "single_choice",
    question: "SLS3D打印技术后处理的关键技术不包括以下哪一项。",
    options: {
      A: "打磨抛光",
      B: "溶浸",
      C: "热等静压烧结",
      D: "高温烧结"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 210,
    type: "single_choice",
    question: "能够直接上色，不需要后期上色的是（）技术。",
    options: {
      A: "SLA",
      B: "FDM",
      C: "SLS",
      D: "3DP"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 211,
    type: "single_choice",
    question: "游标卡尺不能测量（）尺寸。",
    options: {
      A: "长度",
      B: "阶梯差",
      C: "角度",
      D: "直径"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 212,
    type: "single_choice",
    question: "允许尺寸变化的两个界限值称为（）。",
    options: {
      A: "基本尺寸",
      B: "实际尺寸",
      C: "极限尺寸",
      D: "测量尺寸"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 213,
    type: "single_choice",
    question: "实际尺寸是（）。",
    options: {
      A: "设计时给定的",
      B: "通过测量获得的",
      C: "装配时给定的",
      D: "通过计算获得的"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 214,
    type: "single_choice",
    question: "外径千分尺能测量（）尺寸。",
    options: {
      A: "内孔",
      B: "阶梯差",
      C: "角度",
      D: "轴径"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 215,
    type: "single_choice",
    question: "最大极限尺寸与公称尺寸的关系是（）。",
    options: {
      A: "前者大于后者",
      B: "前者小于后者",
      C: "前者等于后者",
      D: "两者之间的大小无法确定"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 216,
    type: "single_choice",
    question: "同轴度的被测元素为（）。",
    options: {
      A: "平面",
      B: "圆柱面",
      C: "直线",
      D: "圆"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 217,
    type: "single_choice",
    question: "（）的公差带项目为一个球。",
    options: {
      A: "圆度",
      B: "空间点的位置度",
      C: "圆柱度",
      D: "同心度"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 218,
    type: "single_choice",
    question: "直线度误差属于哪一类误差（）。",
    options: {
      A: "轮廓误差",
      B: "定向误差",
      C: "形状误差",
      D: "跳动误差"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 219,
    type: "single_choice",
    question: "公差原则是指（）。",
    options: {
      A: "确定公差值大小的原则",
      B: "确定公差与配合标准的原则",
      C: "形状公差与位置公差的关系",
      D: "尺寸公差与几何公差的关系"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 220,
    type: "single_choice",
    question: "最大实体尺寸是指（）。",
    options: {
      A: "孔和轴的最大极限尺寸",
      B: "孔和轴的最小极限尺寸",
      C: "孔的最小极限尺寸和轴的最大极限尺寸",
      D: "孔的最大极限尺寸和轴的最小极限尺寸"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 222,
    type: "single_choice",
    question: "表面粗糙度对零件性能有很大影响，表面越粗糙，（）。",
    options: {
      A: "磨损就越快",
      B: "接触刚度高",
      C: "越不易积存污物",
      D: "精度越高"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 223,
    type: "single_choice",
    question: "表面粗糙度是（）误差。",
    options: {
      A: "宏观几何形状",
      B: "微观几何形状",
      C: "宏观相互位置",
      D: "微观相互位置"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 224,
    type: "single_choice",
    question: "Ra表示的是（）。",
    options: {
      A: "轮廓算数平均偏差",
      B: "轮廓最大高度",
      C: "轮廓单元",
      D: "轮廓单元平均宽度"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 225,
    type: "single_choice",
    question: "Rz表示的是（）。",
    options: {
      A: "轮廓算数平均偏差",
      B: "轮廓最大高度",
      C: "轮廓单元",
      D: "轮廓单元平均宽度"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 226,
    type: "single_choice",
    question: "配合公差的数值可确定孔、轴配合的（）。",
    options: {
      A: "配合精度",
      B: "松紧程度",
      C: "配合类别",
      D: "公差带图"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 227,
    type: "single_choice",
    question: "当孔的基本偏差为下偏差时，计算上偏差数值的计算公式为（）。",
    options: {
      A: "ES = EI + IT",
      B: "EI = ES - IT",
      C: "EI = ES + IT",
      D: "ei = es - IT"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 228,
    type: "single_choice",
    question: "下列孔与基准轴配合，组成间隙配合的孔是（）。",
    options: {
      A: "孔的上下偏差为正值",
      B: "孔的上偏差为正，下偏差为负",
      C: "孔的上下偏差均为负值",
      D: "孔的上偏差为零，下偏差为负"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 229,
    type: "single_choice",
    question: "下列情况中，不能采用基轴制配合的是（）。",
    options: {
      A: "采用冷拔圆型材作轴",
      B: "滚动轴承内圈与转轴轴颈的配合",
      C: "滚动轴承外圈与壳体孔的配合",
      D: "为标准轴制作配和件时"
    },
    answer: "C",
    category: "工艺优化"
  },
  {
    id: 230,
    type: "single_choice",
    question: "怎样启动E43D打印机的自动调平（）。",
    options: {
      A: "在调整界面点击三轴复位",
      B: "在设置界面点击限位补偿",
      C: "在调整界面点击平台校准",
      D: "在设置界面点击自动调平"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 231,
    type: "single_choice",
    question: "自动调平后，平台还是不平说明是初次使用，需要调整（）。",
    options: {
      A: "限位补偿",
      B: "Z轴高度",
      C: "三轴复位",
      D: "Y轴尺寸"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 232,
    type: "single_choice",
    question: "限位补偿指的是（）。",
    options: {
      A: "压敏开关与平台之间高度的补偿值",
      B: "压敏开关与打印头之间高度的补偿值",
      C: "打印喷嘴与平台之间高度的补偿值",
      D: "打印喷嘴与压敏开关之间高度的补偿值"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 233,
    type: "single_choice",
    question: "自动调平后平台已经平整了，调平界面会显示（）。",
    options: {
      A: "1.01.01.0",
      B: "101010",
      C: "0.00.00.0",
      D: "0.10.10.1"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 234,
    type: "single_choice",
    question: "自动进料的设备，将耗材送入远端进料口后，打印机会（）。",
    options: {
      A: "加温",
      B: "进料",
      C: "复位",
      D: "移轴"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 235,
    type: "single_choice",
    question: "以下不是描述送料电机挤出丝状耗材类3D打印机的是（）。",
    options: {
      A: "材料挤出型",
      B: "FBX",
      C: "FFF",
      D: "FDM"
    },
    answer: "B",
    category: "打印技术"
  },
  {
    id: 236,
    type: "single_choice",
    question: "3D打印机舱室内的灰尘、残料最好每（）清理一次。",
    options: {
      A: "6天",
      B: "10天",
      C: "2周",
      D: "1周"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 237,
    type: "single_choice",
    question: "打印头喷嘴处如果有残料堆积，会导致（）。",
    options: {
      A: "翘边",
      B: "喷嘴周围堆积残料",
      C: "打印断料",
      D: "模型错位"
    },
    answer: "B",
    category: "工艺优化"
  },
  {
    id: 238,
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
  {
    id: 239,
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
  {
    id: 240,
    type: "single_choice",
    question: "SLS3D打印中，工作腔体中需要通入保护气体，下列中哪种气体是正确的（）",
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
    id: 241,
    type: "single_choice",
    question: "以下对打印废料的描述正确的是。",
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
    id: 242,
    type: "single_choice",
    question: "光敏树脂打印材料应存放在（）的环境下。",
    options: {
      A: "真空",
      B: "高温",
      C: "阴凉干燥",
      D: "湿热"
    },
    answer: "C",
    category: "材料工程"
  },
  {
    id: 243,
    type: "single_choice",
    question: "以下对打印后未利用的耗材描述正确的是",
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
    id: 244,
    type: "single_choice",
    question: "以下对粉末耗材存储描述正确的是",
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
    id: 245,
    type: "single_choice",
    question: "FDM3D打印机，打印头部分需要定期维护的部件是（）",
    options: {
      A: "电机",
      B: "加热装置",
      C: "喷嘴",
      D: "喉管"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 246,
    type: "single_choice",
    question: "FDM3D打印机打印头中的特氟龙管为什么要在使用一段时间后就定期检查？（）",
    options: {
      A: "长时间使用会导致特氟龙管老化变形",
      B: "以防特氟龙管受损影响其他部件",
      C: "清洗特氟龙管以防影响打印工作",
      D: "更换特氟龙管使设备稳定操作"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 247,
    type: "single_choice",
    question: "FDM3D打印机，打印的模型错位不可能是因为（）。",
    options: {
      A: "E轴电机老化",
      B: "没有调平",
      C: "打印机Z轴电机丢步",
      D: "没有定期更新固件"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 248,
    type: "single_choice",
    question: "LCD光固化3D打印机，需要定期检查的部件是（）。",
    options: {
      A: "液槽",
      B: "离型膜",
      C: "托板",
      D: "聚光透镜"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 249,
    type: "single_choice",
    question: "LCD光固化3D打印机，如果不对料槽和平台以外的地方进行定时清理，会导致（）。",
    options: {
      A: "错位",
      B: "模型质量变差",
      C: "其他机构被溅出的树脂固化",
      D: "平台无法正常调平"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 250,
    type: "single_choice",
    question: "在SLS3D打印中需要冷水机的使用，使用中冷水机加入的水为（）",
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
    id: 251,
    type: "single_choice",
    question: "关于喷头堵塞的处理，正确的是（）",
    options: {
      A: "找根针捅捅，常温的时候桶。",
      B: "拆喷头，清理喷头里面残留的耗材",
      C: "无需处理",
      D: "接着打印，打印时，可以融化里面的残留物"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 252,
    type: "single_choice",
    question: "在安装调试、使用和维修机器时，装配图也是了解机器结构和性能的重要（）文件",
    options: {
      A: "介绍",
      B: "阐述",
      C: "技术",
      D: "装配"
    },
    answer: "C",
    category: "技术基础"
  },
  {
    id: 253,
    type: "single_choice",
    question: "设备有几个重要温度参数不包括（）",
    options: {
      A: "树脂温度",
      B: "空气温度",
      C: "LED温度",
      D: "液晶温度"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 254,
    type: "single_choice",
    question: "以下不属于堵头故障的是（）。",
    options: {
      A: "料盘缠料",
      B: "特氟龙管变形",
      C: "平台太紧",
      D: "喷嘴堵塞"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 255,
    type: "single_choice",
    question: "以下不属于E4打印缺料的故障是（）",
    options: {
      A: "耗材粗细不均",
      B: "回抽速度太快",
      C: "特氟龙管变形",
      D: "喷嘴损坏"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 256,
    type: "single_choice",
    question: "以下不属于E4错位故障的是（）。",
    options: {
      A: "电机丢步",
      B: "X轴或Y轴顶丝松动",
      C: "打印断电",
      D: "固件问题"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 257,
    type: "single_choice",
    question: "下面哪些方式可以解决打印翘边问题（）。",
    options: {
      A: "升高平台温度",
      B: "减小Z轴补偿值",
      C: "平台涂胶",
      D: "以上都是"
    },
    answer: "D",
    category: "工艺优化"
  },
  {
    id: 258,
    type: "single_choice",
    question: "打印头不出料是快拆块中的（）导致的。",
    options: {
      A: "热敏电阻损坏",
      B: "加热棒损坏",
      C: "特氟龙管变形",
      D: "快拆块触电松动"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 259,
    type: "single_choice",
    question: "打印头送丝轮处粉末太多会出现（）问题。",
    options: {
      A: "打印头不出料",
      B: "翘边",
      C: "模型表面质量差",
      D: "打印速度减慢"
    },
    answer: "A",
    category: "设备管理"
  },
  {
    id: 260,
    type: "single_choice",
    question: "打印头出料不畅是快拆块中的（）导致的。",
    options: {
      A: "热敏电阻损坏",
      B: "喷嘴损坏",
      C: "加热棒损坏",
      D: "没有特氟龙管"
    },
    answer: "B",
    category: "设备管理"
  },
  {
    id: 261,
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
  {
    id: 262,
    type: "single_choice",
    question: "打印机需要定期维护的传动部件有（）",
    options: {
      A: "打印机板",
      B: "打印喷头",
      C: "激光器",
      D: "导轨丝杠"
    },
    answer: "D",
    category: "设备管理"
  },
  {
    id: 263,
    type: "single_choice",
    question: "FDM打印机需要定期进行喷头清理工作，一下描述正确的是",
    options: {
      A: "将喷头用打火机烤热，融合内部丝材",
      B: "将顶针直接插入喷头内部，清理内部余料",
      C: "采用打印机自动加热功能对喷头进行加热，用顶针清理喷头内部余料",
      D: "直接更换新的喷头"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 264,
    type: "single_choice",
    question: "SLS工艺3D打印机需要定期记性维护，在维护中需要定期清理的是",
    options: {
      A: "激光器",
      B: "振镜",
      C: "导轨",
      D: "反射镜"
    },
    answer: "C",
    category: "设备管理"
  },
  {
    id: 265,
    type: "single_choice",
    question: "机械制图标准中规定A3图幅的尺寸是297×420，A2图幅的尺寸是。",
    options: {
      A: "420×594",
      B: "210×297",
      C: "594×841",
      D: "841×1189"
    },
    answer: "A",
    category: "技术基础"
  },
  {
    id: 266,
    type: "single_choice",
    question: "某图样的标题栏中的比例为1:5，该图样中有一个图形是局部剖切后单独画出的，其上方有1:2，则该图形。",
    options: {
      A: "因采用缩小比例1:2，它不是局部放大图",
      B: "是采用剖视画出的局部放大图",
      C: "既不是局部放大图，也不是剖视图",
      D: "不是局部放大图，是采用缩小比例画出的局部剖视"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 267,
    type: "single_choice",
    question: "作图时遇到各种图线重合，应按（）的先后顺序选用线型。",
    options: {
      A: "点画线---虚线---粗实线",
      B: "粗实线---虚线---点画线",
      C: "虚线---点画线---粗实线",
      D: "虚线---粗实线---点画线"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 268,
    type: "single_choice",
    question: "下图所示，下列关于线、面的投影，叙述正确的是（）。",
    options: {
      A: "直线AB为正平线，平面P为正垂面",
      B: "直线CD为侧垂线，平面Q为水平面",
      C: "直线AB为一般位置直线，平面P为一般位置平面",
      D: "直线CD为一般位置直线，平面Q为正平面"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img268.jpg",
    imageDescription: "工程制图中线面投影关系示意图",
    imagePlaceholder: "📐 此题包含几何投影图，需要参考图形理解线面关系"
  },  {
    id: 269,
    type: "single_choice",
    question: "选择正确的左视图。",
    options: {
      A: "图A",
      B: "图B",
      C: "图C",
      D: "图D"
    },
    answer: "D",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img269.jpg",
    imageDescription: "工程制图中线面投影关系示意图",
    imagePlaceholder: "📐 此题包含几何投影图，需要参考图形理解线面关系"
  },
  {
    id: 270,
    type: "single_choice",
    question: "当前所示图纸为：",
    options: {
      A: "中心投影法",
      B: "正投影法",
      C: "斜投影法",
      D: "以上都不是"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img270.jpg",
    imageDescription: "投影法图纸示例",
    imagePlaceholder: "📐 此题包含投影法图纸，需要参考图形判断投影类型"
  },
  {
    id: 271,
    type: "single_choice",
    question: "图中属于正投影法的是（B）",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img271.jpg",
    imageDescription: "投影法对比图",
    imagePlaceholder: "📐 此题包含投影法对比图，需要参考图形选择正投影法"
  },
  {
    id: 272,
    type: "single_choice",
    question: "与三视图对应的立体示意图，正确的是：（C）",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "C",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img272.jpg",
    imageDescription: "三视图与立体图对应关系",
    imagePlaceholder: "📐 此题包含三视图与立体图对应关系，需要参考图形选择正确答案"
  },
  {
    id: 273,
    type: "single_choice",
    question: "与三视图对应的立体示意图，正确的是：（D）",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "D",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img273.jpg",
    imageDescription: "三视图与立体图对应关系",
    imagePlaceholder: "📐 此题包含三视图与立体图对应关系，需要参考图形选择正确答案"
  },
  {
    id: 274,
    type: "single_choice",
    question: "与立体示意图对应的三视图，正确的是：（B）",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img274.jpg",
    imageDescription: "立体图与三视图对应关系",
    imagePlaceholder: "📐 此题包含立体图与三视图对应关系，需要参考图形选择正确答案"
  },
  {
    id: 275,
    type: "single_choice",
    question: "已知物体的三个视图方向，则正确的主视图为：（B）",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img275.jpg",
    imageDescription: "三视图主视图选择",
    imagePlaceholder: "📐 此题包含三视图选择，需要参考图形选择正确的主视图"
  },
  {
    id: 276,
    type: "single_choice",
    question: "根据给定的主、俯视图，正确的左视图为：B",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img276.jpg",
    imageDescription: "主俯视图与左视图对应关系",
    imagePlaceholder: "📐 此题包含主俯视图与左视图对应关系，需要参考图形选择正确的左视图"
  },
  {
    id: 277,
    type: "single_choice",
    question: "下列断面图画法正确的是 D",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "D",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img277.jpg",
    imageDescription: "断面图画法示例",
    imagePlaceholder: "📐 此题包含断面图画法示例，需要参考图形选择正确的画法"
  },
  {
    id: 278,
    type: "single_choice",
    question: "下列四组剖视图，表达不正确的一组视图是 D",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "D",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img278.jpg",
    imageDescription: "剖视图表达正确性比较",
    imagePlaceholder: "📐 此题包含剖视图表达正确性比较，需要参考图形选择不正确的表达"
  },
  {
    id: 279,
    type: "single_choice",
    question: "选择正确的键连接画法（A）。",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "A",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img279.jpg",
    imageDescription: "键连接画法示例",
    imagePlaceholder: "📐 此题包含键连接画法示例，需要参考图形选择正确的画法"
  },
  {
    id: 280,
    type: "single_choice",
    question: "装配图中当剖切平面（）螺栓、螺母、垫圈等紧固件及实心件时，按不剖绘制。",
    options: {
      A: "纵剖",
      B: "横剖",
      C: "局部剖",
      D: "半剖"
    },
    answer: "A",
    category: "技术基础"
  },
  {
    id: 281,
    type: "single_choice",
    question: "内、外螺纹旋合画法正确的是 B",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img281.jpg",
    imageDescription: "内外螺纹旋合画法",
    imagePlaceholder: "📐 此题包含内外螺纹旋合画法，需要参考图形选择正确的画法"
  },
  {
    id: 282,
    type: "single_choice",
    question: "下列图中的尺寸标注，最合理的是 A",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "A",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img282.jpg",
    imageDescription: "尺寸标注合理性比较",
    imagePlaceholder: "📐 此题包含尺寸标注合理性比较，需要参考图形选择最合理的标注"
  },
  {
    id: 283,
    type: "single_choice",
    question: "当球阀扳手处于下列（A）位置时，阻断介质流动。",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "A",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img283.jpg",
    imageDescription: "球阀扳手位置示意图",
    imagePlaceholder: "⚙️ 此题包含球阀扳手位置示意图，需要参考图形判断阻断流动的位置"
  },
  {
    id: 284,
    type: "single_choice",
    question: "在一个草图中，绘制两个没有交集的园，对其进行拉伸，会出现以下哪种情况？（B）",
    options: {
      A: "提示不能生成不连续的实体",
      B: "生成两个实体",
      C: "生成一个实体",
      D: "生成两个曲面"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 285,
    type: "single_choice",
    question: "已知图纸比例为5：1，图纸上测量长度为62.5，标注长度为28该特征的实际长度为：（C）",
    options: {
      A: "100",
      B: "62.5",
      C: "28",
      D: "25"
    },
    answer: "C",
    category: "技术基础"
  },
  {
    id: 286,
    type: "single_choice",
    question: "下图所示红色的部分，是一段（A）。",
    options: {
      A: "相贯线",
      B: "截交线",
      C: "一段圆弧",
      D: "平面曲线"
    },
    answer: "A",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img286.jpg",
    imageDescription: "相贯线示意图",
    imagePlaceholder: "📐 此题包含相贯线示意图，需要参考图形识别红色部分"
  },
  {
    id: 287,
    type: "single_choice",
    question: "主视图左侧轴段上，如图中圈出的矩形线框，其含义是（A)",
    options: {
      A: "此处是圆柱面的投影",
      B: "此处有一个方形通槽",
      C: "此处有一个方形凸台",
      D: "此处图样绘制错误"
    },
    answer: "A",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img287.jpg",
    imageDescription: "主视图轴段投影",
    imagePlaceholder: "📐 此题包含主视图轴段投影，需要参考图形理解矩形线框含义"
  },
  {
    id: 288,
    type: "single_choice",
    question: "尺寸8-0.08的尺寸公差是（A）",
    options: {
      A: "0.09",
      B: "0.25",
      C: "0.08",
      D: "-0.09"
    },
    answer: "A",
    category: "工艺优化"
  },
  {
    id: 289,
    type: "single_choice",
    question: "不是首尾相连的封闭轮廓草图，是无法通过拉伸等特征造型命令转换成实体的，下列四个草图轮廓中，哪个是不封闭的？（C）",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "C",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img289.jpg",
    imageDescription: "草图轮廓封闭性示例",
    imagePlaceholder: "🖥️ 此题包含草图轮廓封闭性示例，需要参考图形选择不封闭的轮廓"
  },
  {
    id: 290,
    type: "single_choice",
    question: "下面花瓶的轮廓草图不是封闭的，有开放端，无法通过旋转命令生成花瓶实体。在草图环境中，可以使用（A）命令把它修改成封闭草图。",
    options: {
      A: "单击修剪",
      B: "镜像",
      C: "分割",
      D: "减运算"
    },
    answer: "A",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img290.jpg",
    imageDescription: "花瓶轮廓草图修改",
    imagePlaceholder: "🏺 此题包含花瓶轮廓草图修改示例，需要参考图形选择修改命令"
  },
  {
    id: 291,
    type: "single_choice",
    question: "不是首尾相连的封闭轮廓草图，有交叉或断开口等线条，就无法通过拉伸等特征造型命令转化成三维实体。下列四个二维草图轮廓中，哪个是可以通过拉伸命令转化成三维实体的？（B）",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img291.jpg",
    imageDescription: "二维草图轮廓拉伸可行性",
    imagePlaceholder: "📐 此题包含二维草图轮廓拉伸可行性示例，需要参考图形选择可拉伸的轮廓"
  },
  {
    id: 292,
    type: "single_choice",
    question: "首尾不相连或有互相交叉的轮廓草图，是无法通过拉伸等特征造型命令转换成实体的，下列四个草图轮廓中，哪个是不能通过拉伸得到实体的？（B）",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img292.jpg",
    imageDescription: "草图轮廓拉伸限制示例",
    imagePlaceholder: "📐 此题包含草图轮廓拉伸限制示例，需要参考图形选择不能拉伸的轮廓"
  },
  {
    id: 293,
    type: "single_choice",
    question: "下图花瓶的轮廓草图不是封闭的，有开放端，无法通过旋转命令生成花瓶实体。在草图环境中，除了使用线条连接两点以外，还可以使用（B）命令把它修改成封闭草图。",
    options: {
      A: "单击修剪",
      B: "修剪/延伸曲线",
      C: "偏移曲线",
      D: "加运算"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img293.jpg",
    imageDescription: "花瓶轮廓草图修改方法",
    imagePlaceholder: "🏺 此题包含花瓶轮廓草图修改方法示例，需要参考图形选择修改命令"
  },
  {
    id: 294,
    type: "single_choice",
    question: "不是首尾相连的封闭轮廓草图，是无法通过拉伸等特征造型命令转换成实体的，下列四个草图轮廓中，哪个是不封闭的？（B）",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img294.jpg",
    imageDescription: "草图轮廓封闭性判断",
    imagePlaceholder: "📐 此题包含草图轮廓封闭性判断示例，需要参考图形选择不封闭的轮廓"
  },
  {
    id: 295,
    type: "single_choice",
    question: "在草图绘制过程中可以通过（A）检查草图是否封闭。",
    options: {
      A: "显示曲线连通性",
      B: "鼠标",
      C: "镜像",
      D: "移动"
    },
    answer: "A",
    category: "技术基础"
  },
  {
    id: 296,
    type: "single_choice",
    question: "如下图所示的花瓶模型，是用其截面草图旋转得到的，哪个旋转轴线正确？（A）",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "A",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img296.jpg",
    imageDescription: "花瓶模型旋转轴线",
    imagePlaceholder: "🏺 此题包含花瓶模型旋转轴线示例，需要参考图形选择正确的旋转轴线"
  },
  {
    id: 297,
    type: "single_choice",
    question: "3D One Plus软件修改已有模型的尺寸和形状的方法有多种，如把下图圆环体的内孔半径缩小3，使用的命令是（D）。",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "D",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img297.jpg",
    imageDescription: "圆环体内孔半径修改",
    imagePlaceholder: "🔧 此题包含圆环体内孔半径修改示例，需要参考图形选择修改命令"
  },
  {
    id: 298,
    type: "single_choice",
    question: "小红无法把下图中的五角星草图拉伸成实体，原因是这张草图不是首尾相连的封闭草图，有交叉线，这种情况是无法拉伸成实体的。在草图环境中，可以使用（A）命令把它修改成封闭草图。",
    options: {
      A: "单击修剪",
      B: "分离块",
      C: "分割",
      D: "减运算"
    },
    answer: "A",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img298.jpg",
    imageDescription: "五角星草图修改",
    imagePlaceholder: "⭐ 此题包含五角星草图修改示例，需要参考图形选择修改命令"
  },
  {
    id: 299,
    type: "single_choice",
    question: "如图所示的模型，它是由下列哪张草图拉伸而成的？（B）",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img299.jpg",
    imageDescription: "模型与草图对应关系",
    imagePlaceholder: "🔧 此题包含模型与草图对应关系示例，需要参考图形选择正确的草图"
  },
  {
    id: 300,
    type: "single_choice",
    question: "可以使用基本实体工具栏中的（C）命令，直接绘制出如图所示的圆台。",
    options: {
      A: "六面体",
      B: "圆柱体",
      C: "圆锥体",
      D: "球体"
    },
    answer: "C",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img300.jpg",
    imageDescription: "圆台绘制方法",
    imagePlaceholder: "🔺 此题包含圆台绘制方法示例，需要参考图形选择正确的命令"
  },
  {
    id: 301,
    type: "single_choice",
    question: "某同学利用三维创意软件设计了一款多功能粉笔套，其制作环节主要有：①收集汇总数据 ②打印三维实体模型 ③运用三维软件设计模型。正确的顺序是（C）",
    options: {
      A: "①②③",
      B: "②①③",
      C: "①③②",
      D: "③②①"
    },
    answer: "C",
    category: "技术基础"
  },
  {
    id: 302,
    type: "single_choice",
    question: "某同学想设计并制作永动机，始终没有得以实现，其主要原因是（C）。",
    options: {
      A: "对三维软件建模不熟悉",
      B: "资金投入不足",
      C: "这个问题不符合基本的科学原理",
      D: "现有的科学技术不能解决"
    },
    answer: "C",
    category: "技术基础"
  },
  {
    id: 303,
    type: "single_choice",
    question: "绘制飞碟时，它的探照灯我们只需绘制一个，然后使用阵列命令得到一圈，那么它的阵列方式属于（B）方式。",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img303.jpg",
    imageDescription: "飞碟探照灯阵列方式",
    imagePlaceholder: "🛸 此题包含飞碟探照灯阵列方式示例，需要参考图形选择阵列方式"
  },
  {
    id: 304,
    type: "single_choice",
    question: "3D One Plus软件的特殊功能工具栏中有许多好玩有趣的命令，可以对实体进行各种变形，使用哪个命令可以把下图左侧直梯变成右侧的螺旋效果？（B）",
    options: {
      A: "旋转",
      B: "扭曲",
      C: "圆环折弯",
      D: "通过点变形实体"
    },
    answer: "B",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_basic_img304.jpg",
    imageDescription: "直梯变螺旋效果",
    imagePlaceholder: "🌀 此题包含直梯变螺旋效果示例，需要参考图形选择变形命令"
  },

  // 判断题部分
  {
    id: 400,
    type: "true_false",
    question: "在一个圆形草图和一个点草图（两个草图不在同一平面上）之间，可以添加放样特征。",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 401,
    type: "true_false",
    question: "在装配体中，压缩某个零部件，与其有关的装配关系不会被压缩",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 402,
    type: "true_false",
    question: "目前桌面FDM 3D打印机主要识别的3D模型文件是STL格式的文件。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 403,
    type: "true_false",
    question: "用鼠标左键拖动某实体，可以把该实体移动到二维空间的任意位置。",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 404,
    type: "true_false",
    question: "在使用抽壳命令把实心体抽成薄壳时，可以选择开放面，也可以不选择开放面。",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 405,
    type: "true_false",
    question: "扭曲命令的基准面必须是平面。",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 406,
    type: "true_false",
    question: "浮雕命令可以在实体曲面上将图片转变成立体的浮雕造型，设置的分辨率数值越大，其清晰度也越高。",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 407,
    type: "true_false",
    question: "使用圆角命令对实体边进行圆角操作时，一次只能对一条边进行圆角。",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 408,
    type: "true_false",
    question: "当空间的直线倾斜于投影面时，则其在投影面上的投影积聚成一个点。",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 409,
    type: "true_false",
    question: "投影曲线和镶嵌曲线配合使用可以在空间曲面上做出均匀凸起或凹陷的效果。",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 410,
    type: "true_false",
    question: "在3DOnePlus中，当选到不同类型的对象，比如实体、面或边，系统自动弹出的工具栏中的命令是不一样的，均是对该特征对象最常用的操作。",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 411,
    type: "true_false",
    question: "使用组合编辑的加运算把几个实体组合成一个整体时，基体和合并体的对象是可以任意选的。",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 412,
    type: "true_false",
    question: "实体抽壳只能使物体表面向内偏移抽出薄壳。",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 413,
    type: "true_false",
    question: "扭曲命令的基准面必须是平面。",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 414,
    type: "true_false",
    question: "当被测要素为轮廓几何要素时，几何公差代号指引线的箭头只能指向该要素的投影线。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 415,
    type: "true_false",
    question: "使用圆角命令编辑图形时，可以先生成圆角再修改半径，也可以选择完线段后直接输入圆角半径。",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 416,
    type: "true_false",
    question: "扫描仪长时间未使用应先标定后在扫描",
    answer: "true",
    category: "高级应用"
  },
  {
    id: 417,
    type: "true_false",
    question: "扫描仪经过远距离运输后不需要重新标定可直接使用",
    answer: "false",
    category: "高级应用"
  },
  {
    id: 418,
    type: "true_false",
    question: "Win3DD扫描仪扫描最佳距离为600MM",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 419,
    type: "true_false",
    question: "Win3DD扫描仪在扫描过程中可以移动扫描仪",
    answer: "false",
    category: "高级应用"
  },
  {
    id: 420,
    type: "true_false",
    question: "可以使用GeomagicWrap软件进行逆向设计",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 421,
    type: "true_false",
    question: "GeomagicDesignX软件属于正向类型建模软件。",
    answer: "false",
    category: "技术基础"
  },
  {
    id: 422,
    type: "true_false",
    question: "STP文件可以直接被打印机使用",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 423,
    type: "true_false",
    question: "GeomagicWrap软件可以将STP文件转化为STL文件",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 424,
    type: "true_false",
    question: "快速成型技术目前采用的数据格式主要是STL格式。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 425,
    type: "true_false",
    question: "STL格式的三维数据中，输出的小三角形数量越少，则成型件的精度越高。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 426,
    type: "true_false",
    question: "针对所有的快速成型工艺，层厚越小，成型零件精度越低",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 427,
    type: "true_false",
    question: "三维模型切片过程中，层高设置的过高，可能遗失两相邻切片层之间的小特征结构（如窄槽等）。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 428,
    type: "true_false",
    question: "对STL格式的三维电子模型进行分层，一般来说都是对Y轴方向上的等分。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 429,
    type: "true_false",
    question: "STL文件中的坐标值可以是正数，也可以说是负数。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 430,
    type: "true_false",
    question: "对三维模型进行切片处理时，层厚越小，成型精度越高，成型时间也越长，效率也越低。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 431,
    type: "true_false",
    question: "CAD模型切片分层，每层的厚度都是由升降设备的精准度决定。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 432,
    type: "true_false",
    question: "FDM原理的模型打印过程中，要注意材料是否出现断裂、打结等现象，若出现上述情况需要及时处理。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 433,
    type: "true_false",
    question: "三维模型用在三维空间的集合，表示由各种几何元素如三角形、线、面等连接的已知数据（点和其他信息）的集合。",
    answer: "true",
    category: "技术基础"
  },
  {
    id: 434,
    type: "true_false",
    question: "熔融沉积快速成型工艺（单喷头）可以同时成型两种或以上材料。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 435,
    type: "true_false",
    question: "FDM技术要将材料加热到其熔点以上，加热的硬件主要是加热块。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 436,
    type: "true_false",
    question: "FDM打印机使用之前进行调平操作是为了防止出料不畅。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 437,
    type: "true_false",
    question: "现场的FDM 3D打印机需不要调平。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 438,
    type: "true_false",
    question: "FDM设备现在使用的最多的耗材是PETG。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 439,
    type: "true_false",
    question: "FDM和LCD的设备都可以使用光敏树脂这种材料。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 440,
    type: "true_false",
    question: "在Modelight切片软件中，可以使用自动放置来摆放多个模型。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 441,
    type: "true_false",
    question: "在Modelight切片软件中，想让模型的某一个面与平台接触可以使用旋转模型至选中平面功能。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 442,
    type: "true_false",
    question: "LCD光固化清洗打印件时无需使用手套。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 443,
    type: "true_false",
    question: "LCD光固化3D打印机，在打印完成后使用金属铲清理料槽。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 444,
    type: "true_false",
    question: "光固化打印速度相对于FDM机器而言会更快一点。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 445,
    type: "true_false",
    question: "三角洲是FDM 3D打印机中不需要调平的机器。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 446,
    type: "true_false",
    question: "FDM打印机的打印模型成型后，可通过将热床温度设置为50-70度，待温度达到设置温度后，用铲刀轻轻铲下模型的方式将模型取下来。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 447,
    type: "true_false",
    question: "FDM打印机打开UPS开关后，灯带没有亮，有可能是总电源开关没开。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 448,
    type: "true_false",
    question: "LCD光固化3D打印机，在清洗平台时最好使用清水。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 449,
    type: "true_false",
    question: "LCD光固化3D打印机，在使用完成后需要将耗材过滤回收。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 450,
    type: "true_false",
    question: "FDM技术的成型原理是叠层实体制造。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 451,
    type: "true_false",
    question: "FDM一般不需要支撑结构。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 452,
    type: "true_false",
    question: "模型的打印时间一定程度是有由切片软件决定的。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 453,
    type: "true_false",
    question: "切片软件经过切片处理后，可以生成每一层的3D打印路径",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 454,
    type: "true_false",
    question: "LCD光固化打印的模型，也可以使用Model11ight进行切片。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 455,
    type: "true_false",
    question: "切片软件中，可以进行草图命令。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 456,
    type: "true_false",
    question: "现场的FDM3D打印机有四个操作界面。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 457,
    type: "true_false",
    question: "在首页界面选择我们的模型进行打印。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 458,
    type: "true_false",
    question: "LCD 3D打印机属于光固化技术的3D打印机。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 459,
    type: "true_false",
    question: "LCD 3D打印机使用的是蓝光成型。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 460,
    type: "true_false",
    question: "SLA材料包括类工程塑料、类金属塑料、金属树脂等",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 461,
    type: "true_false",
    question: "SLA技术使用的原材料是高分子材料",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 462,
    type: "true_false",
    question: "光固化成型工艺的优点之一是：预处理软件与驱动软件运算量大，与加工效果关联性高",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 463,
    type: "true_false",
    question: "EL1 3D打印机可以使用SD卡直接传输文件。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 464,
    type: "true_false",
    question: "LCD光固化打印的模型，切片之后得到的是一张图片。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 465,
    type: "true_false",
    question: "SLA原型的变形量中由后固化收缩产生的比例是25%--45%",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 466,
    type: "true_false",
    question: "SLA工艺制件打印前需要进行辅助支撑的添加，以免悬空分层飘移，同时也便于打印完成后从工作台上快速分离",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 467,
    type: "true_false",
    question: "光敏树脂的浓度和吸收系数成反比浓度越大，吸收系数越小",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 468,
    type: "true_false",
    question: "SLA系统最主要的优点在于它可迅速将适当强度波段的辐射集中，引导至液体光固树脂表面，根据计算机生成的截面，形成固化光聚合物的图案",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 469,
    type: "true_false",
    question: "光固化机型，中途不可以补充光敏树脂材料。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 470,
    type: "true_false",
    question: "光固化机型，不需要加热，即可打印。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 471,
    type: "true_false",
    question: "分层后，模型表面整体性被打破，层与层之间的关联信息不会丢失，产生分层处理误差",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 472,
    type: "true_false",
    question: "光固化机型，机器摆放可以倾斜。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 473,
    type: "true_false",
    question: "光固化机型，打印完成的模型，用固化箱二次固化，也可以用阳光暴晒。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 474,
    type: "true_false",
    question: "扫描策略对打印制件的性能没有任何影响",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 475,
    type: "true_false",
    question: "SLA技术可联机操作，可远程控制，利于生产中的自动化",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 476,
    type: "true_false",
    question: "光固化树脂成型的成型效率主要与扫描速度，扫描间隙，激光功率等因素有关",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 477,
    type: "true_false",
    question: "所有的增材制造系统按使用材料的形态方式可以简单地分为：液态材料，固态材料，粉末材料",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 478,
    type: "true_false",
    question: "SLA加工方法材料利用率高，但性能不可靠",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 479,
    type: "true_false",
    question: "SLS成形材料主要有金属粉末、陶瓷粉末、塑料粉末",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 480,
    type: "true_false",
    question: "SLS技术和SLM技术是一回事",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 481,
    type: "true_false",
    question: "SLS、SLM、SLA都是金属增材制造激光选区熔融技术的简称",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 482,
    type: "true_false",
    question: "SLS工艺多采用CO2激光器，其成本较SLA工艺固体激光器低",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 483,
    type: "true_false",
    question: "SLS与SLA工艺所使用的激光器不同",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 484,
    type: "true_false",
    question: "SLM技术的工作原理与SLS相同",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 485,
    type: "true_false",
    question: "高分子材料适用于FDM、SLA、3DP、SLS等工艺，金属材料适用于SLM、EBM和LENS等工艺。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 486,
    type: "true_false",
    question: "SLS工作室的气氛一般为氧气气氛",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 487,
    type: "true_false",
    question: "选择型激光烧结成型工艺的工艺参数主要包括分层厚度，扫描速度，体积成型，聚焦光斑直径等",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 488,
    type: "true_false",
    question: "由于有固态粉末的支撑，在SLS工艺制件时不需要添加辅助支撑",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 489,
    type: "true_false",
    question: "SLS工艺的打印精度与材料类型有关，与微粒大小无关",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 490,
    type: "true_false",
    question: "SLS技术打印的金属零部件致密度不能达到100%",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 491,
    type: "true_false",
    question: "由于SLS技术并不完全熔化粉末，而仅是将其烧结在一起，因此制造速度快打印精度高",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 492,
    type: "true_false",
    question: "SLS成形技术，打印过程中粉末的预热能明显改善成形品的性能质量",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 493,
    type: "true_false",
    question: "SLS的工作过程是基于激光扫描粉末床表面进行的",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 494,
    type: "true_false",
    question: "SLS在预热时，要将材料加热到熔点以下",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 495,
    type: "true_false",
    question: "SLS不是快速成型方法",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 496,
    type: "true_false",
    question: "无支撑结构或支撑结构间距大将会造成三维零件坍塌，以致成形失败。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 497,
    type: "true_false",
    question: "支撑结构间距小将会增加加工时间和浪费材料。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 498,
    type: "true_false",
    question: "在去除支撑后为了能够获得更好的外观质量，有时需要对外表面进行抛光、修补、上色等工序。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 499,
    type: "true_false",
    question: "光固化后处理包括原型的清洗、去除支撑、后固化以及必要的打磨等等。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 500,
    type: "true_false",
    question: "化学处理不可以进行表面抛光，也不可以提升组织性能",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 501,
    type: "true_false",
    question: "金属增材制造后处理中，可以对制件进行喷砂处理",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 502,
    type: "true_false",
    question: "震动抛光时间越久，抛光效果越好，对抛光件无影响",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 503,
    type: "true_false",
    question: "在紫外线的作用下，部件材料及支撑材料都会完全固化。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 504,
    type: "true_false",
    question: "刚打印的光固化模型可以立即投入使用而无需后期固化处理。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 505,
    type: "true_false",
    question: "SLA过程有后固化工艺，后固化时间比一次固化时间短",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 506,
    type: "true_false",
    question: "固化完全的模型可以立即投入使用而无需后期固化处理",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 507,
    type: "true_false",
    question: "3D打印又称增材制造又称快速成型。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 508,
    type: "true_false",
    question: "加注材料时不应加注太满，以防平台下降材料溢出。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 509,
    type: "true_false",
    question: "在料槽搅拌材料时应用塑料的铲子，以防离型膜破损。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 510,
    type: "true_false",
    question: "3D打印特别适合于复杂结构的快速制造、个性化定制、高附加值的产品制造。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 511,
    type: "true_false",
    question: "LCD打印技术对支撑材料的要求与成形材料相互不同。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 512,
    type: "true_false",
    question: "零件的实际尺寸就是零件的真实尺寸。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 513,
    type: "true_false",
    question: "游标卡尺的尺身每一格为1mm，游标共有50格，当两爪合拢时，游标的50格，正好与尺身的49格对齐，则该游标卡尺的测量精度为0.02mm。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 514,
    type: "true_false",
    question: "圆柱度的公差带形状是一个圆。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 515,
    type: "true_false",
    question: "同轴度的公差带形状是一个圆。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 516,
    type: "true_false",
    question: "在Ra、Rz、Ry三个参数中，Ra能充分反映充分地表面微观几何形状高度方面的特性。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 517,
    type: "true_false",
    question: "零件的尺寸精度越高，它的表面粗糙度数字越小。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 518,
    type: "true_false",
    question: "在间隙配合中，间隙的大小等于孔的实际尺寸减去相配合的轴的实际尺寸。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 519,
    type: "true_false",
    question: "过盈配合中，若最大过盈与最小过盈相差很大，则说明相配的孔、轴精度很低。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 520,
    type: "true_false",
    question: "模型粘不住与平台调没调好无关。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 521,
    type: "true_false",
    question: "当打印头X轴归位时碰到限位开关但是依旧不停时需要检查排线是否损坏。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 522,
    type: "true_false",
    question: "打印过程中，修改扫描策略需要参考打印件表面效果及结构",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 523,
    type: "true_false",
    question: "SLA设备工作完成后，工作台会自动沉入底部",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 524,
    type: "true_false",
    question: "3D打印机长时间不用时应退出材料，防止材料氧化变脆卡住料管。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 525,
    type: "true_false",
    question: "光固化机型，打印完成，再次打印时，不需要过滤料槽内的材料。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 526,
    type: "true_false",
    question: "SLA设备打印成型的制件多为树脂类，其强度和耐热性有限，也不利于长时间保存",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 527,
    type: "true_false",
    question: "SLA技术成型件多为树脂类，强度，刚度，耐热性高，可长时间保持",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 528,
    type: "true_false",
    question: "光固化设备长时间不使用时，可将耗材放在打印槽内",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 529,
    type: "true_false",
    question: "打印耗材使用后无需处理，即可回收入库",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 530,
    type: "true_false",
    question: "SLA技术使用的原材料是光敏树脂。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 531,
    type: "true_false",
    question: "FDM的成型原理是熔融挤出成型。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 532,
    type: "true_false",
    question: "SLA工艺设备对工作环境无具体要求",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 533,
    type: "true_false",
    question: "设备的正常使用和做好设备的日常修理和维护保养工作，是使设备寿命周期费用经济合理和充分发挥设备综合效率的重要保证",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 534,
    type: "true_false",
    question: "SLS工艺设备在日常维护中，需要使用纸巾定期擦拭激光器",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 535,
    type: "true_false",
    question: "FDM工艺设备在日常维护中，需要清理光杆、丝杠等传动部件，并定期涂抹润滑油",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 536,
    type: "true_false",
    question: "LCD光固化机型，不能在阳光充足的条件下打印。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 537,
    type: "true_false",
    question: "当需要插拔各种电子元器件以及更换电子元器件，无需断电操作。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 538,
    type: "true_false",
    question: "SLA设备中直线导轨只允许滑块和导轨做相对移动",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 539,
    type: "true_false",
    question: "3D打印设备需要定期的维护",
    answer: "true",
    category: "设备管理"
  }
];

// 统计函数
export const getQuestionStats = () => {
  const stats = {};
  questionBank.forEach(question => {
    if (!stats[question.category]) {
      stats[question.category] = {
        total: 0,
        singleChoice: 0,
        trueFalse: 0,
        hasImage: 0
      };
    }
    stats[question.category].total++;
    if (question.type === 'single_choice') {
      stats[question.category].singleChoice++;
    } else if (question.type === 'true_false') {
      stats[question.category].trueFalse++;
    }
    if (question.hasImage) {
      stats[question.category].hasImage++;
    }
  });
  return stats;
};

// 题目总数
export const totalQuestions = questionBank.length;
      