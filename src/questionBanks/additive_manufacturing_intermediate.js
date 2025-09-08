// 增材制造模型设计职业技能等级证书理论题库 - 中级
export const questionBank = [
  // 单选题部分
  {
    id: 1,
    type: "single_choice",
    question: "某同学利用三维创意软件设计了一款多功能粉笔套，其制作环节主要有：①收集汇总数据 ②打印三维实体模型 ③运用三维软件设计模型。正确的顺序是（）",
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
    id: 2,
    type: "single_choice",
    question: "某同学想设计并制作永动机，始终没有得以实现，其主要原因是（）。",
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
    id: 3,
    type: "single_choice",
    question: "在使用基本实体中的椭球体命令绘制椭球时，可以直接调节的尺寸有（）个。",
    options: {
      A: "1",
      B: "2",
      C: "3", 
      D: "4"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 4,
    type: "single_choice",
    question: "产品的结构，影响着它们的性质和功能，重心就是影响结构稳定性的因素之一。不倒翁之所以不倒，是因为它的重心在（）位置。",
    options: {
      A: "头顶",
      B: "脖子",
      C: "腹部",
      D: "与地面的接触点"
    },
    answer: "D",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img4.jpg",
    imageDescription: "不倒翁结构示意图",
    imagePlaceholder: "🎭 此题包含不倒翁结构图，需要参考图形理解重心位置"
  },
  {
    id: 5,
    type: "single_choice",
    question: "某同学设计了如图所示的虫虫沙发。绘制身体时，她只需要绘制一段，然后使用阵列命令即可得到整齐排列的其它段，那么她使用的阵列方式属于（）方式。",
    options: {
      A: "线性",
      B: "圆形",
      C: "任意",
      D: "曲线"
    },
    answer: "A",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img5.jpg",
    imageDescription: "虫虫沙发设计图",
    imagePlaceholder: "🪑 此题包含虫虫沙发设计图，需要参考图形理解阵列方式"
  },
  {
    id: 6,
    type: "single_choice",
    question: "3D模型表达出的实体效果更逼真，更具有真实感，并且随着三维建模技术的发展，越来越多的应用到各种领域。下列没有用到3D模型的是？（）",
    options: {
      A: "3D打印人体内脏的数据",
      B: "虚拟现实（VR）",
      C: "三维扫描仪的成像",
      D: "3D电影中的3D效果"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 7,
    type: "single_choice",
    question: "下列以倡导造物、鼓励分享为主的教育模式是（）。",
    options: {
      A: "素质教育",
      B: "全面教育",
      C: "创客教育",
      D: "个别教育"
    },
    answer: "C",
    category: "技术基础"
  },
  {
    id: 8,
    type: "single_choice",
    question: "3DOnePlus的特殊功能工具栏中有许多好玩有趣的命令，可以对实体进行各种变形。如图所示是叶老师绘制的麻花灯座，它的螺旋形状是使用哪个命令得到的？（）",
    options: {
      A: "旋转",
      B: "圆环折弯",
      C: "扭曲",
      D: "通过点变形实体"
    },
    answer: "B",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img8.jpg",
    imageDescription: "麻花灯座模型",
    imagePlaceholder: "💡 此题包含麻花灯座模型图，需要参考图形理解变形命令"
  },
  {
    id: 9,
    type: "single_choice",
    question: "小熊饰品模型，它的耳朵、眼睛、眉毛等都是只需绘制一侧的，另一侧使用（）命令便可以得到。",
    options: {
      A: "移动",
      B: "镜像",
      C: "阵列",
      D: "偏移"
    },
    answer: "B",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img9.jpg",
    imageDescription: "小熊饰品模型",
    imagePlaceholder: "🧸 此题包含小熊饰品模型图，需要参考图形理解对称操作"
  },
  {
    id: 10,
    type: "single_choice",
    question: "3D打印即快速成型技术的一种，它是一种以数字模型文件为基础，运用粉末状金属或塑料等可粘合材料，通过（）的方式来构造物体的技术。",
    options: {
      A: "逐层打印",
      B: "锻造",
      C: "烧结",
      D: "激光切割"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 11,
    type: "single_choice",
    question: "3D打印成型技术是一种（）技术。",
    options: {
      A: "装配制造",
      B: "减材制造",
      C: "增材制造",
      D: "手动加工"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 12,
    type: "single_choice",
    question: "如图所示的汽车是使用3D打印机打印出来的，它的名字叫'斯特拉迪'，这种应用属于3D打印的（）领域。",
    options: {
      A: "医疗",
      B: "交通",
      C: "食品",
      D: "建筑"
    },
    answer: "B",
    category: "安全规范",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img12.jpg",
    imageDescription: "3D打印汽车斯特拉迪",
    imagePlaceholder: "🚗 此题包含3D打印汽车图片，需要参考图形理解应用领域"
  },
  {
    id: 13,
    type: "single_choice",
    question: "三维设计的好坏是通过（）来评判的。",
    options: {
      A: "三维设计的结果",
      B: "鼠标使用熟练度",
      C: "三维设计使用的软件",
      D: "电脑的好坏"
    },
    answer: "A",
    category: "技术基础"
  },
  {
    id: 14,
    type: "single_choice",
    question: "设计软件和打印机之间协作的标准文件格式是（）文件格式。",
    options: {
      A: "dwg",
      B: "doc",
      C: "ppt",
      D: "stl"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 15,
    type: "single_choice",
    question: "下列哪种类型的3D打印机在中小学中的使用较为普遍，主要是因为其操作简单、材料安全环保而成为众多类型3D打印机的首选的。（）",
    options: {
      A: "FDM熔融沉积成型",
      B: "SLA光固化成型",
      C: "3DP三维粉末粘接",
      D: "SLS选择性激光烧结"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 16,
    type: "single_choice",
    question: "下面哪个功能不是草图绘制工具栏中的功能。",
    options: {
      A: "多段线",
      B: "通过点绘制曲线",
      C: "链状圆角",
      D: "预制文字"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 17,
    type: "single_choice",
    question: "以下几个命令中，（）是3D成型命令。",
    options: {
      A: "草图绘制",
      B: "旋转",
      C: "尺寸测量",
      D: "颜色渲染"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 18,
    type: "single_choice",
    question: "要将唯一的一个封闭轮廓且不互相交叉的草图生成3D的模型，可以用以下哪些操作（）。",
    options: {
      A: "拉伸",
      B: "扫掠",
      C: "放样",
      D: "修剪"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 19,
    type: "single_choice",
    question: "可以使用下列哪个命令对已有实体模型的边进行光顺处理。",
    options: {
      A: "打磨",
      B: "圆角",
      C: "单击修剪",
      D: "放样"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 20,
    type: "single_choice",
    question: "小王从网上下载了一个STL模型，其中包含两个结构，可以通过（）命令可以将STL模型中的两个结构分离成可单独编辑的两部分。",
    options: {
      A: "单击修剪",
      B: "分离块",
      C: "实体分割",
      D: "炸开组"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 21,
    type: "single_choice",
    question: "在三维建模软件中，有许多命令可以对实体进行各种变形，使用哪个命令可以把下面左侧图形变成右侧的效果？",
    options: {
      A: "圆柱折弯",
      B: "圆环折弯",
      C: "扭曲",
      D: "通过点变形实体"
    },
    answer: "A",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img21.jpg",
    imageDescription: "圆柱变形示意图",
    imagePlaceholder: "🔄 此题包含圆柱变形示意图，需要参考图形理解变形命令"
  },
  {
    id: 22,
    type: "single_choice",
    question: "如图所示六面体中，黄色槽往右侧发生位置改变，可以通过（）操作实现。",
    options: {
      A: "DE移动",
      B: "移动",
      C: "DE面偏移",
      D: "阵列"
    },
    answer: "A",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img22.jpg",
    imageDescription: "六面体槽位变化示意图",
    imagePlaceholder: "📦 此题包含六面体槽位变化图，需要参考图形理解移动操作"
  },
  {
    id: 23,
    type: "single_choice",
    question: "雕刻模块中，可以设计（）图形。",
    options: {
      A: "二维平面",
      B: "标准尺寸",
      C: "三维人物",
      D: "海报"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 24,
    type: "single_choice",
    question: "绘制如图所示圣诞树的树冠，可使用（）工具栏中的圆锥体命令。",
    options: {
      A: "基本实体",
      B: "草图绘制",
      C: "基本编辑",
      D: "特殊功能"
    },
    answer: "A",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img24.jpg",
    imageDescription: "圣诞树模型",
    imagePlaceholder: "🎄 此题包含圣诞树模型图，需要参考图形理解基本实体命令"
  },
  {
    id: 25,
    type: "single_choice",
    question: "三维建模软件的建模及成型原理，就是基于数学运算的，如图示一个六面体和一个圆锥体，两者做组合运算中的（），便可得到右侧的实体。",
    options: {
      A: "加运算",
      B: "减运算",
      C: "交运算",
      D: "基体"
    },
    answer: "C",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img25.jpg",
    imageDescription: "六面体与圆锥体组合运算示意图",
    imagePlaceholder: "🔺 此题包含组合运算示意图，需要参考图形理解布尔运算"
  },
  {
    id: 26,
    type: "single_choice",
    question: "使用圆柱体命令绘制圆柱体时，默认的尺寸是（）。",
    options: {
      A: "底面半径15，高度15",
      B: "底面半径25，高度25",
      C: "底面半径20，高度20",
      D: "底面半径30，高度30"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 27,
    type: "single_choice",
    question: "下图中的圆柱体，做成笔筒的造型，用（）命令是最方便的。",
    options: {
      A: "拔模",
      B: "拉伸",
      C: "抽壳",
      D: "修剪"
    },
    answer: "C",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img27.jpg",
    imageDescription: "圆柱体笔筒造型",
    imagePlaceholder: "🖊️ 此题包含圆柱体笔筒造型图，需要参考图形理解抽壳命令"
  },
  {
    id: 28,
    type: "single_choice",
    question: "模型锋利的边缘不仅仅加大在打印时的难度，更会出现在使用不当的情况下伤到手，所以在设计的过程中，我们可以使用（）命令，将锋利的边缘去掉。",
    options: {
      A: "DE移动",
      B: "组合编辑",
      C: "倒圆角",
      D: "抽壳"
    },
    answer: "C",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img28.jpg",
    imageDescription: "锋利边缘处理示意图",
    imagePlaceholder: "⚠️ 此题包含锋利边缘处理图，需要参考图形理解倒圆角命令"
  },
  {
    id: 29,
    type: "single_choice",
    question: "在三维设计软件的右侧资源栏中，提供了美化模型的功能------视觉样式，例如图中桃花图案的花瓶。使用了（）的方式。",
    options: {
      A: "投影曲线",
      B: "贴图",
      C: "拉伸",
      D: "雕刻"
    },
    answer: "B",
    category: "材料工程",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img29.jpg",
    imageDescription: "桃花图案花瓶",
    imagePlaceholder: "🌸 此题包含桃花图案花瓶图，需要参考图形理解贴图功能"
  },
  {
    id: 30,
    type: "single_choice",
    question: "观察下面两幅图，通过（）命令，可将左图模型做成右图模型效果。",
    options: {
      A: "圆柱折弯",
      B: "扭曲",
      C: "旋转",
      D: "圆环折弯"
    },
    answer: "B",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img30.jpg",
    imageDescription: "扭曲变形对比图",
    imagePlaceholder: "🌪️ 此题包含扭曲变形对比图，需要参考图形理解扭曲命令"
  },
  {
    id: 31,
    type: "single_choice",
    question: "计算机三维技术由于其高效、自由的特点在国际舞台上得到了空前高速的发展，三维技术无法直接应用在哪个领域？",
    options: {
      A: "机械制造",
      B: "植物繁殖",
      C: "3D打印",
      D: "建筑设计"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 32,
    type: "single_choice",
    question: "（）技术是一种以数字模型文件为基础，运用粉末状金属或塑料等可粘合材料，通过逐层堆积的方式来构造物体的技术。",
    options: {
      A: "激光切割",
      B: "铸造",
      C: "3D打印",
      D: "钣金"
    },
    answer: "C",
    category: "打印技术"
  },
  {
    id: 33,
    type: "single_choice",
    question: "以下描述正确的是（）。",
    options: {
      A: "三维设计也可以应用在电影行业",
      B: "三维设计只能设计机械模型",
      C: "三维设计的模型只能在电脑中观看，不能用于生产",
      D: "三维设计与二维设计都只能在电脑中完成"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 34,
    type: "single_choice",
    question: "打开一个模型文件，它的文件名显示在软件界面的（）。",
    options: {
      A: "标题栏",
      B: "左侧工具栏",
      C: "底部工具栏",
      D: "资源栏"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 35,
    type: "single_choice",
    question: "关于点、线、面、体的关系，说法错误的是？（）",
    options: {
      A: "体是面移动的轨迹",
      B: "面是线移动的轨迹",
      C: "线是点移动的轨迹",
      D: "线是面移动的轨迹"
    },
    answer: "D",
    category: "技术基础"
  },
  {
    id: 36,
    type: "single_choice",
    question: "当我们需要旋转视角，调整观察物体的角度时，可以按住鼠标（）键拖动鼠标。",
    options: {
      A: "左",
      B: "右",
      C: "中",
      D: "中+右"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 37,
    type: "single_choice",
    question: "在三维创意设计的学习过程中，以下哪项活动对学习是没有帮助的？（）",
    options: {
      A: "注意观察生活细节，联想建模方法",
      B: "在知名三维创意设计平台上欣赏、点评他人优秀作品",
      C: "在互联网上搜索三维设计视频教程",
      D: "购买一个新的键盘"
    },
    answer: "D",
    category: "技术基础"
  },
  {
    id: 38,
    type: "single_choice",
    question: "小明想要从网上下载可以直接用于3D打印机打印的模型文件，他应该搜索以下哪种格式的模型？（）",
    options: {
      A: "jpg",
      B: "stl",
      C: "png",
      D: "doc"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 39,
    type: "single_choice",
    question: "小王设计了一个非常有创意和个性的笔筒，如果他想在上面刻上自己的名字，那么需要从（）菜单中找到预制文字命令来写上它的名字。",
    options: {
      A: "基本实体",
      B: "草图编辑",
      C: "草图绘制",
      D: "基本编辑"
    },
    answer: "C",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img39.jpg",
    imageDescription: "个性化笔筒设计",
    imagePlaceholder: "✏️ 此题包含个性化笔筒设计图，需要参考图形理解文字添加"
  },
  {
    id: 40,
    type: "single_choice",
    question: "如图所示，是用3D打印技术制造的发动机涡轮，你认为打印它所使用的材料是下列哪个？（）",
    options: {
      A: "石膏粉末",
      B: "金属粉末",
      C: "塑料",
      D: "黏土"
    },
    answer: "B",
    category: "材料工程",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img40.jpg",
    imageDescription: "3D打印发动机涡轮",
    imagePlaceholder: "⚙️ 此题包含3D打印发动机涡轮图，需要参考图形理解材料选择"
  },
  {
    id: 41,
    type: "single_choice",
    question: "丝状热塑性材料在喷头内被加热熔化，喷头沿切片软件计算的轨迹运动，同时将熔化的材料挤出，材料迅速凝固，并与周围的材料凝结成型的3D打印技术是（），它是目前3D打印机普及度最高的类型。",
    options: {
      A: "FDM熔融沉积成型",
      B: "SLA光固化成型",
      C: "3DP三维粉末粘结",
      D: "SLS选择性激光烧结"
    },
    answer: "A",
    category: "打印技术"
  },
  {
    id: 42,
    type: "single_choice",
    question: "如图所示是使用3D打印机打印出来的形色各异的可食用糖果。这是3D打印技术在（）领域的出色运用。",
    options: {
      A: "医疗",
      B: "服装",
      C: "食品",
      D: "建筑"
    },
    answer: "C",
    category: "安全规范",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img42.jpg",
    imageDescription: "3D打印可食用糖果",
    imagePlaceholder: "🍬 此题包含3D打印可食用糖果图，需要参考图形理解应用领域"
  },
  {
    id: 43,
    type: "single_choice",
    question: "三维建模软件的绘图区是一个虚拟的三维空间，三维空间中造型的方位是使用三维坐标系来定义的。一般使用的是（），它有三个相互垂直的方向轴，分别为：X轴、Y轴、Z轴，三个方向轴的交点即为坐标原点。",
    options: {
      A: "球面坐标系",
      B: "笛卡尔直角坐标系",
      C: "极坐标系",
      D: "网络坐标系"
    },
    answer: "B",
    category: "技术基础"
  },
  {
    id: 44,
    type: "single_choice",
    question: "小谢同学想要自己设计并打印制作笔筒作为礼物送给同学，他需要经历的制作流程主要有：①在三维软件上设计笔筒的数字模型 ②使用3D打印机打印笔筒的实物模型 ③构思造型，在A4纸上手绘草图。三个流程的正确排序应该是（）",
    options: {
      A: "①②③",
      B: "②①③",
      C: "①③②",
      D: "③①②"
    },
    answer: "D",
    category: "技术基础"
  },
  {
    id: 45,
    type: "single_choice",
    question: "在三维建模软件中绘制完成的模型，如果要转换成其它文件格式，例如'.stl'格式，可使用文件菜单中的（）命令。",
    options: {
      A: "新建",
      B: "输入",
      C: "导入",
      D: "导出"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 46,
    type: "single_choice",
    question: "如图所示的五角星草图图形，使用拉伸命令时无法直接拉伸成功，下列分析中正确的是？（）",
    options: {
      A: "五角星线条有交叉，不是首尾相连的封闭轮廓",
      B: "五角星的绘制方法不对",
      C: "五角星的角太尖了",
      D: "五角星位置不正"
    },
    answer: "A",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img46.jpg",
    imageDescription: "五角星草图",
    imagePlaceholder: "⭐ 此题包含五角星草图图，需要参考图形理解拉伸条件"
  },
  {
    id: 47,
    type: "single_choice",
    question: "下面哪个命令不是草图绘制工具栏中的命令？（）",
    options: {
      A: "多段线",
      B: "镶嵌曲线",
      C: "通过点绘制曲线",
      D: "预制文字"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 48,
    type: "single_choice",
    question: "检查草图轮廓是否封闭在建模过程中是非常重要的，如图所示的射箭草图图形，可以使用（）命令让系统自动检测出开放端位置并显示出来。",
    options: {
      A: "显示曲线连通性",
      B: "偏移曲线",
      C: "修剪/延伸曲线",
      D: "单击修剪"
    },
    answer: "A",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img48.jpg",
    imageDescription: "射箭草图",
    imagePlaceholder: "🏹 此题包含射箭草图图，需要参考图形理解连通性检测"
  },
  {
    id: 49,
    type: "single_choice",
    question: "通过下列哪个命令，可以由左图的轮廓得到如右图所示的草图图形？（）",
    options: {
      A: "单击修剪",
      B: "修剪/延伸曲线",
      C: "偏移曲线",
      D: "链状圆角"
    },
    answer: "D",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img49.jpg",
    imageDescription: "轮廓圆角处理对比图",
    imagePlaceholder: "🔄 此题包含轮廓圆角处理对比图，需要参考图形理解圆角命令"
  },
  {
    id: 50,
    type: "single_choice",
    question: "通过下列哪个命令，可以由左图的草图图形快速得到右图的草图图形？（）",
    options: {
      A: "修剪/延伸曲线",
      B: "通过点绘制曲线",
      C: "偏移曲线",
      D: "草图绘制"
    },
    answer: "C",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img50.jpg",
    imageDescription: "草图偏移对比图",
    imagePlaceholder: "📏 此题包含草图偏移对比图，需要参考图形理解偏移命令"
  },
  {
    id: 51,
    type: "single_choice",
    question: "如图所示，通过一个圆柱体得到围绕半球体均匀排列的6个圆柱体，可以使用（）命令直接得到。",
    options: {
      A: "移动",
      B: "镜像",
      C: "阵列",
      D: "偏移"
    },
    answer: "C",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img51.jpg",
    imageDescription: "圆柱体阵列排列示意图",
    imagePlaceholder: "🔵 此题包含圆柱体阵列排列图，需要参考图形理解阵列命令"
  },
  {
    id: 52,
    type: "single_choice",
    question: "两次单击选中某个实体的边线时，在弹出的智能浮动工具栏中不含下列哪个命令？（）",
    options: {
      A: "拉伸",
      B: "圆角",
      C: "倒角",
      D: "移动"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 53,
    type: "single_choice",
    question: "下面左图的球体里面有一个'乐'字草图，但是在着色模式下看不到、也选不到它，选择（）命令，可以将右图转变成左图的效果。",
    options: {
      A: "线框模式",
      B: "着色模式",
      C: "显示模式",
      D: "显示几何体"
    },
    answer: "A",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img53.jpg",
    imageDescription: "球体内部文字显示对比图",
    imagePlaceholder: "🎵 此题包含球体内部文字显示对比图，需要参考图形理解显示模式"
  },
  {
    id: 54,
    type: "single_choice",
    question: "如图所示的杯子主体造型，可以由圆锥体和棱台体经过组合运算中的（）得到。",
    options: {
      A: "加运算",
      B: "减运算",
      C: "交运算",
      D: "基体"
    },
    answer: "B",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img54.jpg",
    imageDescription: "杯子主体造型分解图",
    imagePlaceholder: "☕ 此题包含杯子主体造型分解图，需要参考图形理解布尔运算"
  },
  {
    id: 55,
    type: "single_choice",
    question: "对实体进行抽壳时，开放面选择的个数是（）。",
    options: {
      A: "只能选择1个",
      B: "最多选择2个",
      C: "最多选择3个",
      D: "按需选择合适个数"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 56,
    type: "single_choice",
    question: "如图所示是小芳设计的课题------'亭台水榭'中的古建筑亭子，那么在古建筑中，（）不是飞檐设计的主要考虑因素。",
    options: {
      A: "提高建筑的美观性",
      B: "增强建筑的稳定性",
      C: "便于攀爬",
      D: "有利于排泄雨水"
    },
    answer: "C",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img56.jpg",
    imageDescription: "古建筑亭子设计",
    imagePlaceholder: "🏛️ 此题包含古建筑亭子设计图，需要参考图形理解飞檐设计"
  },
  {
    id: 57,
    type: "single_choice",
    question: "关于创新，下列说法中正确的是（）",
    options: {
      A: "创新不是一般人能够做到的",
      B: "只有大的发明创造才是创新",
      C: "只有被专利局认可才是真正的创新",
      D: "普通的事情也能体现创新"
    },
    answer: "D",
    category: "技术基础"
  },
  {
    id: 58,
    type: "single_choice",
    question: "如图所示的螺旋花架，它靠中间的立柱来支撑，这种结构是稳固和安全的。它的稳固性是符合了以下哪个学科的原理？（）",
    options: {
      A: "工程力学",
      B: "历史",
      C: "心理学",
      D: "经济学"
    },
    answer: "A",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img58.jpg",
    imageDescription: "螺旋花架结构设计",
    imagePlaceholder: "🌸 此题包含螺旋花架结构设计图，需要参考图形理解力学原理"
  },
  {
    id: 59,
    type: "single_choice",
    question: "小明想在如图所示的火箭模型上刻上自己的名字，那么需要从草图绘制中找到（）命令来快速的写上他的名字。",
    options: {
      A: "参考几何体",
      B: "草图编辑",
      C: "预制文字",
      D: "多段线"
    },
    answer: "C",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img59.jpg",
    imageDescription: "火箭模型设计",
    imagePlaceholder: "🚀 此题包含火箭模型设计图，需要参考图形理解文字添加"
  },
  {
    id: 60,
    type: "single_choice",
    question: "如图所示的花瓶，是由其右侧的半个截面轮廓绕其中心轴线旋转一周得到的，花瓶轮廓的外轮廓是一条光顺的曲线，可以从（）工具栏中找到'通过点绘制曲线'的命令。",
    options: {
      A: "基本实体",
      B: "草图绘制",
      C: "草图编辑",
      D: "基本编辑"
    },
    answer: "B",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img60.jpg",
    imageDescription: "花瓶轮廓绘制示意图",
    imagePlaceholder: "🏺 此题包含花瓶轮廓绘制示意图，需要参考图形理解曲线绘制"
  },
  {
    id: 61,
    type: "single_choice",
    question: "小强设计了一个小熊存钱罐，用椭球体绘制胳膊时，一开始椭球体的方位是水平的，小强可以在基本编辑工具栏中找到（）命令，利用其中的 “动态移动” 调整胳膊的角度。",
    options: {
      A: "移动",
      B: "DE移动",
      C: "对齐移动",
      D: "缩放"
    },
    answer: "A",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img61.jpg",
    imageDescription: "小熊存钱罐设计",
    imagePlaceholder: "🐻 此题包含小熊存钱罐设计图，需要参考图形理解移动命令"
  },
  {
    id: 62,
    type: "single_choice",
    question: "三维建模软件的绘图区是一个虚拟的三维空间，我们可以从任意视角观察绘图区的模型。比如下图中的三个摞起来的正方体，当我们从正前方观察时，是一个高度为宽度3倍的长方形，如果对正到‘下’视图从正下方看，那么看到的是（）。",
    options: {
      A: "圆环形",
      B: "正方形",
      C: "三角形",
      D: "锥形"
    },
    answer: "B",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img62.jpg",
    imageDescription: "三个摞起来的正方体",
    imagePlaceholder: "📦 此题包含三个摞起来的正方体图，需要参考图形理解视图变换"
  },
  {
    id: 63,
    type: "single_choice",
    question: "新雨同学设计了数学上的计数器，在绘制算珠架及算珠时，她只需要绘制一个，然后使用阵列命令即可得到整齐排列的其它段，那么她使用的阵列方式属于（）方式。",
    options: {
      A: "线性",
      B: "圆形",
      C: "任意",
      D: "曲线"
    },
    answer: "A",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img63.jpg",
    imageDescription: "计数器算珠架设计",
    imagePlaceholder: "🧮 此题包含计数器算珠架设计图，需要参考图形理解阵列方式"
  },
  {
    id: 64,
    type: "single_choice",
    question: "如图所示的树形书架，参考树的轮廓，设计简洁大方，清新自然，使紧凑的空间拥有轻灵感，凸显人们对自然的热爱。它的设计手法应属于下列哪种？（）",
    options: {
      A: "机械设计",
      B: "延伸设计",
      C: "动漫设计",
      D: "仿生设计"
    },
    answer: "D",
    category: "技术基础",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img64.jpg",
    imageDescription: "树形书架设计",
    imagePlaceholder: "🌳 此题包含树形书架设计图，需要参考图形理解仿生设计"
  },
  {
    id: 65,
    type: "single_choice",
    question: "在生产的过程中，尖锐的边角容易对使用者造成不必要的伤害，所以在设计过程中，如图所示的椅子座面边缘，我们可以使用（）命令将其做圆滑处理。",
    options: {
      A: "DE移动",
      B: "组合编辑",
      C: "圆角",
      D: "抽壳"
    },
    answer: "C",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img65.jpg",
    imageDescription: "椅子座面边缘处理",
    imagePlaceholder: "🪑 此题包含椅子座面边缘处理图，需要参考图形理解圆角处理"
  },
  {
    id: 66,
    type: "single_choice",
    question: "某老师设计了一个有趣的巧克力模型，它的螺旋形状可以使用下列哪个命令得到？（）",
    options: {
      A: "旋转",
      B: "圆环折弯",
      C: "扭曲",
      D: "通过点变形实体"
    },
    answer: "C",
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img66.jpg",
    imageDescription: "巧克力螺旋模型",
    imagePlaceholder: "🍫 此题包含巧克力螺旋模型图，需要参考图形理解扭曲命令"
  },
  {
    id: 67,
    type: "single_choice",
    question: "CAE的含义是指（）。",
    options: {
      A: "计算机辅助设计",
      B: "计算机辅助工程",
      C: "计算机辅助加工",
      D: "计算机辅助制造"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 68,
    type: "single_choice",
    question: "CAE软件操作流程包括下述哪个步骤（）",
    options: {
      A: "前处理",
      B: "运算",
      C: "后处理",
      D: "全部都是"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 69,
    type: "single_choice",
    question: "CAE软件前处理环节不包括以下哪些步骤（）",
    options: {
      A: "几何创建",
      B: "给定材料",
      C: "添加载荷约束",
      D: "网格划分",
      E: "分析结果"
    },
    answer: "E",
    category: "软件应用"
  },
  {
    id: 70,
    type: "single_choice",
    question: "线性静态分析中，必须在CAE软件输入的材料参数不包括（）",
    options: {
      A: "材料密度",
      B: "弹性模量",
      C: "泊松比",
      D: "屈服强度"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 71,
    type: "single_choice",
    question: "线性静力分析的结果中，不包括以下哪个内容（）",
    options: {
      A: "位移",
      B: "应力",
      C: "单元应变能",
      D: "剪力弯矩图"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 72,
    type: "single_choice",
    question: "以下哪个不属于‘约束’（）",
    options: {
      A: "固定",
      B: "滚轴/滑块",
      C: "固定铰链",
      D: "扭矩"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 73,
    type: "single_choice",
    question: "以下哪个不属于‘机械载荷’（）",
    options: {
      A: "压力",
      B: "扭矩",
      C: "重力",
      D: "固定铰链"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 74,
    type: "single_choice",
    question: "结构CAE分析往往也被称为有限元力学分析，因为采用下述哪种方法（）",
    options: {
      A: "有限元法",
      B: "有限体积法",
      C: "边界元法",
      D: "差分法"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 75,
    type: "single_choice",
    question: "分析线性金属材料在线性变形范围内，在稳定载荷下的受力问题，需要用到以下哪个分析模块（）",
    options: {
      A: "线性静力分析",
      B: "屈曲分析",
      C: "模态分析",
      D: "非线性分析"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 76,
    type: "single_choice",
    question: "线性静力分析模块不能用来分析以下哪种材料（）",
    options: {
      A: "合金",
      B: "铜",
      C: "岩土",
      D: "铝"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 77,
    type: "single_choice",
    question: "将一个零件平面添加上‘固定约束’后，该表面（）",
    options: {
      A: "沿各个方向均不能移动",
      B: "沿垂直与表面的方向不能移动",
      C: "沿平行于表面的方向不能移动",
      D: "沿平行X平面的方向不能移动"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 78,
    type: "single_choice",
    question: "以下哪一个参数可以解决模型拉丝问题。（）",
    options: {
      A: "打印速度",
      B: "回抽长度",
      C: "打印温度",
      D: "热床温度"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 79,
    type: "single_choice",
    question: "打印多个小模型时，最有效的减少模型与模型之间拉丝的设置是（）。",
    options: {
      A: "不同高度切片设置",
      B: "断层续打",
      C: "默认参数打印",
      D: "逐个打印"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 80,
    type: "single_choice",
    question: "什么情况下可以使用逐个打印。（）",
    options: {
      A: "多个高度小于10cm的模型",
      B: "多个高度大于10cm的模型",
      C: "没有限制的多个模型",
      D: "一个模型"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 81,
    type: "single_choice",
    question: "打印过程中喷嘴温度过高会出现（）。",
    options: {
      A: "模型打印效果变好",
      B: "模型翘边",
      C: "没有影响",
      D: "模型表面效果差"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 82,
    type: "single_choice",
    question: "FDM切片软件的切片设置中，默认喷嘴0.4mm的基础上边缘宽度的设置单位是（）",
    options: {
      A: "0.4mm",
      B: "0.8mm",
      C: "0.2mm",
      D: "0.1mm"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 83,
    type: "single_choice",
    question: "FDM切片软件的切片设置中，默认喷嘴边缘宽度是（）",
    options: {
      A: "1.2mm",
      B: "0.8mm",
      C: "0.4mm",
      D: "0.2mm"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 84,
    type: "single_choice",
    question: "FDM切片软件的切片设置中，外壳打印速度和（）参数决定了模型打印速度的快慢。",
    options: {
      A: "封闭面打印速度",
      B: "每层打印速度",
      C: "填充打印速度",
      D: "第一层打印速度"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 85,
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
    id: 86,
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
    id: 87,
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
    id: 88,
    type: "single_choice",
    question: "在满足零件的使用条件下，使用Hot point我们尽可能使用PLA材料，因为（）",
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
    id: 89,
    type: "single_choice",
    question: "下列不是FDM技术所使用的材料是（）",
    options: {
      A: "PLA",
      B: "ABS",
      C: "316L",
      D: "尼龙"
    },
    answer: "C",
    category: "材料工程"
  },
  {
    id: 90,
    type: "single_choice",
    question: "层高参数设置为0.2mm与层高设置为0.3mm的切片相比，打印速度会（）",
    options: {
      A: "快",
      B: "一致",
      C: "慢",
      D: "以上都不对"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 91,
    type: "single_choice",
    question: "第一层与平台间距过小会导致（）",
    options: {
      A: "拉丝",
      B: "翘边",
      C: "支撑不容易拆除",
      D: "模型不容易拆除"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 92,
    type: "single_choice",
    question: "切片参数中，第一层打印头流量默认是（）",
    options: {
      A: "100",
      B: "95",
      C: "110",
      D: "105"
    },
    answer: "D",
    category: "软件应用"
  },
  {
    id: 93,
    type: "single_choice",
    question: "以下哪项是PLA材料的建议打印温度（）",
    options: {
      A: "150-220°C",
      B: "190-270°C",
      C: "190-220°C",
      D: "210-270°C"
    },
    answer: "C",
    category: "材料工程"
  },
  {
    id: 94,
    type: "single_choice",
    question: "什么情况下需要把打印板工作温度升高？（）",
    options: {
      A: "模型错位",
      B: "打印高温特殊材料",
      C: "打印速度过快",
      D: "模型拉丝"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 95,
    type: "single_choice",
    question: "在Hotpoint打印参数设置中，如果想获得较高精度的模型可以将层高设置为（）",
    options: {
      A: "0.1",
      B: "0.2",
      C: "0.3",
      D: "0.4"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 96,
    type: "single_choice",
    question: "FDM打印机打印速度过快也会影响（）",
    options: {
      A: "成型质量",
      B: "打印高度",
      C: "打印宽度",
      D: "打印过程"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 97,
    type: "single_choice",
    question: "如果成型模型对速度有很大需求我们可以将层高设置为（）",
    options: {
      A: "0.1",
      B: "1.1",
      C: "2.1",
      D: "3.1"
    },
    answer: "A",
    category: "软件应用"
  },
  {
    id: 98,
    type: "single_choice",
    question: "模型较近的支撑无法生成有可能是因为（）",
    options: {
      A: "支撑与模型间距-Z（mm）过大",
      B: "支撑与模型间距-X/Y（mm）过大",
      C: "支撑与模型间距-X（mm）过大",
      D: "支撑与模型间距-Y（mm）过大"
    },
    answer: "B",
    category: "软件应用"
  },
  {
    id: 99,
    type: "single_choice",
    question: "距离模型较近的支撑无法生成需要调整切片参数（）",
    options: {
      A: "支撑密度",
      B: "支撑与模型间距-Z（mm）",
      C: "支撑与模型间距-X/Y（mm）",
      D: "支撑临界角"
    },
    answer: "C",
    category: "软件应用"
  },
  {
    id: 100,
    type: "single_choice",
    question: "FDM 3D打印机所使用的材料线径为（）",
    options: {
      A: "1.72",
      B: "1.73",
      C: "1.74",
      D: "1.75"
    },
    answer: "D",
    category: "材料工程"
  },

  // 多选题部分（从ID 413开始）
  {
    id: 413,
    type: "multiple_choice",
    question: "以下关于3D打印技术的说法正确的是（）",
    options: {
      A: "是一种不需要传统刀具和机床就能打造出任意形状、根据物体的三维模型数据制成实物模型的技术，被认为是一项改变世界的新技术",
      B: "3D打印使用的不是传统的‘墨’，而是那些能发生固化反应的材料，比如树脂、塑料、陶瓷、金属等，因而能‘打印’出三维立体实物，就像童话中的‘复制机’一般神奇",
      C: "3D打印即快速成型技术的一种，它是一种以数字模型文件为基础，运用可粘合材料，通过逐层打印的方式构造物体的技术",
      D: "3D打印技术目前已成功应用于政府、航天和国防、医疗设备、高科技、教育业以及制造业等行业"
    },
    answer: ["A", "B", "C", "D"],
    category: "打印技术"
  },
  {
    id: 414,
    type: "multiple_choice",
    question: "圆角是我们在产品设计中常用的工艺要求，如图的蛋椅模型，在它的腿部加上圆角可以增加稳固性，也更美观。以下属于圆角命令的功能有（）",
    options: {
      A: "美观",
      B: "安全",
      C: "增加稳固性",
      D: "减少磨损"
    },
    answer: ["A", "B", "C", "D"],
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img414.jpg",
    imageDescription: "蛋椅模型圆角设计",
    imagePlaceholder: "🪑 此题包含蛋椅模型图，需要参考图形理解圆角功能"
  },
  {
    id: 415,
    type: "multiple_choice",
    question: "在三维建模过程中，绘制二维草图是不可避免的。如图所示的生日礼物盒，‘Happy birthday’和棒棒糖的螺旋线都是绘制草图后拉伸而成的。在3DOne软件中，以下关于草图的说法正确的有（）",
    options: {
      A: "绘制草图时，必须选定一个平面作为草图绘制平面",
      B: "绘制完成的草图，可以双击激活它，继续进行编辑",
      C: "草图必须是封闭的轮廓，否则无法对其进行拉伸或旋转等特征造型的操作",
      D: "对草图也可以进行移动、复制等基本操作"
    },
    answer: ["A", "B", "D"],
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img415.jpg",
    imageDescription: "生日礼物盒草图设计",
    imagePlaceholder: "🎁 此题包含生日礼物盒草图设计图，需要参考图形理解草图操作"
  },
  {
    id: 416,
    type: "multiple_choice",
    question: "下图中茶壶的把手是用扫掠特征创建的，扫掠命令操作过程中哪两种草图必须定义？（）",
    options: {
      A: "轮廓草图",
      B: "路径草图",
      C: "投影草图",
      D: "跟踪草图"
    },
    answer: ["A", "B"],
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img416.jpg",
    imageDescription: "茶壶把手扫掠特征",
    imagePlaceholder: "🫖 此题包含茶壶把手扫掠特征图，需要参考图形理解扫掠命令"
  },
  {
    id: 417,
    type: "multiple_choice",
    question: "随着仿生技术的发展，仿生家具不断地应用到人类的生活中去。设计师从普通的大自然生物上，结合自己的创造力和设计理念从生物的形态、结构功能上得到启发，开发出更符合人类生理和心理上需求的家具。让设计回归自然，增进人类与自然的和谐统一。以下属于仿生家具的有（）",
    options: {
      A: "青蛙纸巾筒",
      B: "蛋椅",
      C: "方口",
      D: "金鱼书架"
    },
    answer: ["A", "B", "D"],
    category: "软件应用",
    hasImage: true,
    imagePath: "/images/questionbank/additive_manufacturing_intermediate_img417.jpg",
    imageDescription: "仿生家具设计案例",
    imagePlaceholder: "🐸 此题包含仿生家具设计案例图，需要参考图形理解仿生设计"
  },
  {
    id: 418,
    type: "multiple_choice",
    question: "某兴趣小组设计一款夜间楼道自动照明装置，在设计中需要考虑（）。",
    options: {
      A: "传感器的类型",
      B: "照明装置可拆卸，方便后期维护",
      C: "照明装置的安装位置",
      D: "照明的延迟时间"
    },
    answer: ["A", "B", "C", "D"],
    category: "软件应用"
  },
  {
    id: 419,
    type: "multiple_choice",
    question: "创新源于生活，很多创新、创意都是通过观察生活发现的，比如鲁班通过观察带刺的草发明了锯子，以下哪些发明创造就是这样而来的？（）",
    options: {
      A: "通过鲸鱼流线型的身体发明了潜水艇的外形",
      B: "通过蜻蜓的飞行原理发明了直升机",
      C: "通过蝙蝠的超声波发明了雷达",
      D: "通过桌子发明了凳子"
    },
    answer: ["A", "B", "C"],
    category: "软件应用"
  },
  {
    id: 420,
    type: "multiple_choice",
    question: "拓扑优化分析步骤（）",
    options: {
      A: "定义结构问题",
      B: "选择单元类型",
      C: "确定优化区域",
      D: "定义并控制载荷工况或者频率提取",
      E: "定义并控制优化过程",
      F: "查看和分析拓扑优化结果"
    },
    answer: ["A", "B", "C", "D", "E", "F"],
    category: "软件应用"
  },
  {
    id: 421,
    type: "multiple_choice",
    question: "拓扑优化分析可以使用的单元类型有二维平面单元、三维块单元和壳单元。如果使用这种功能，模型中只能有下列单元类型：（）",
    options: {
      A: "二维实体单元：PLANE2和PLANE82，用于平面应力和轴对称问题",
      B: "三维实体单元：SOLID92和SOLID95",
      C: "壳单元：SHELL93",
      D: "以上全错"
    },
    answer: ["A", "B", "C"],
    category: "软件应用"
  },
  {
    id: 422,
    type: "multiple_choice",
    question: "非线性问题与线弹性问题的区别：（）",
    options: {
      A: "非线性问题的方程是非线性的，一般需要迭代求解",
      B: "非线性问题不能采用叠加原理",
      C: "非线性问题不总有一致解，有时甚至没有解",
      D: "非线性问题求解更简单"
    },
    answer: ["A", "B", "C"],
    category: "软件应用"
  },
  {
    id: 423,
    type: "multiple_choice",
    question: "有限元求解非线性问题可分为以下几类：（）",
    options: {
      A: "材料非线性问题",
      B: "几何非线性问题",
      C: "非线性边界问题",
      D: "其他"
    },
    answer: ["A", "B", "C"],
    category: "软件应用"
  },
  {
    id: 424,
    type: "multiple_choice",
    question: "在切片软件中，与拉丝有关的切片参数是（）。",
    options: {
      A: "回抽长度",
      B: "回抽速度",
      C: "打印温度",
      D: "模型结构",
      E: "环境温度"
    },
    answer: ["A", "B", "C"],
    category: "软件应用"
  },
  {
    id: 425,
    type: "multiple_choice",
    question: "某个模型由多个零部件组成，不同部件分别有柔性、轻量化及强度、环保的要求，请问用哪些材料比较合适（）。",
    options: {
      A: "TPU",
      B: "PETG",
      C: "PLA",
      D: "碳纤维",
      E: "ABS"
    },
    answer: ["A", "C", "D"],
    category: "材料工程"
  },
  {
    id: 426,
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
  {
    id: 427,
    type: "multiple_choice",
    question: "Modellight切片软件中，修改哪些参数可以增加打印件的强度。",
    options: {
      A: "打印速度",
      B: "支撑密度",
      C: "填充率",
      D: "壁厚",
      E: "内部填充图案"
    },
    answer: ["C", "D", "E"],
    category: "软件应用"
  },
  {
    id: 428,
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
  {
    id: 429,
    type: "multiple_choice",
    question: "世界范围内的FDM 3D打印机使用的耗材主要有规格分别是（）。",
    options: {
      A: "1.75mm",
      B: "10mm",
      C: "4.25mm",
      D: "0.08mm",
      E: "3.00mm"
    },
    answer: ["A", "E"],
    category: "材料工程"
  },
  {
    id: 430,
    type: "multiple_choice",
    question: "装配方法有哪些（）",
    options: {
      A: "互换装配法",
      B: "分组装配法",
      C: "修配法",
      D: "调整法"
    },
    answer: ["A", "B", "C", "D"],
    category: "工艺优化"
  },

  // 判断题部分（从ID 513开始）
  {
    id: 513,
    type: "true_false",
    question: "目前桌面FDM 3D打印机主要识别的3D模型文件是STL格式的文件。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 514,
    type: "true_false",
    question: "使用组合编辑的加运算把几个实体组合成一个整体时，基体和合并体的对象是可以任意选的。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 515,
    type: "true_false",
    question: "目前3D打印机可以打印任何实物，不受材料、环境、温度等因素限制。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 516,
    type: "true_false",
    question: "可以通过扭曲、折弯、锥度等变形，用简单的操作实现复杂的造型。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 517,
    type: "true_false",
    question: "对具有破面效果的STL模型可以使用补孔功能进行补孔，使其完整，便于打印。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 518,
    type: "true_false",
    question: "世界第一台3D打印汽车------\"Strati\"，它身上的40个部件全部都是3D打印出来的。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 519,
    type: "true_false",
    question: "3D打印机打印之前，需要导入打印文件，3D打印机支持打印任意格式的3D模型文件。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 520,
    type: "true_false",
    question: "古代鲁班发明锯子其实就属于仿生设计。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 521,
    type: "true_false",
    question: "\"阵列\"命令中包括\"线性\"、\"圆形\"和\"在曲线上\"三种阵列方式。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 522,
    type: "true_false",
    question: "圆锥体命令可以建立圆锥，也可以建立圆台。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 523,
    type: "true_false",
    question: "绘制完成的草图，只能通过拉伸才能得到三维实体模型。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 524,
    type: "true_false",
    question: "自然界中很多生物的构造都对人类的研究有着重要的线索，比如壁虎、蜻蜓、荷叶等等，设计师通过对它们的观察、研究、模拟可以做出很创意的仿生作品。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 525,
    type: "true_false",
    question: "三维设计是在二维设计的基础上增加一个新的维度，它已经完全脱离了二维设计。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 526,
    type: "true_false",
    question: "通过草图绘制工具栏中的工具，可以绘制出形态各不相同的草图图形。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 527,
    type: "true_false",
    question: "线弹性有限元是以理想弹性体为研究对象的，所考虑的变形建立在小变形假设的基础上。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 528,
    type: "true_false",
    question: "拓扑优化是指形状优化，有时也称为外型优化。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 529,
    type: "true_false",
    question: "拓扑优化的目标是寻找承受单载荷或多载荷的物体的最佳材料分配方案。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 530,
    type: "true_false",
    question: "定义拓扑优化问题同定义其他线性，弹性结构问题做法一样。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 531,
    type: "true_false",
    question: "二维单元用于平面应力问题，指定要优化和不优化的区域。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 532,
    type: "true_false",
    question: "拓扑优化分析可以使用的单元类型有二维平面单元、三维块单元和壳单元。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 533,
    type: "true_false",
    question: "有限元模型：它是真实系统理想化的数学抽象。由一些简单形状的单元组成，单元之间通过节点连接，并承受一定载荷。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 534,
    type: "true_false",
    question: "有限元分析：是利用数学近似的方法对真实物理系统（几何和载荷工况）进行模拟。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 535,
    type: "true_false",
    question: "喷头仅沿着XY轴运作，打印的每一层都是由软件规划好的切片截面。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 536,
    type: "true_false",
    question: "控制Z轴高度的升降器水平面必须非常精确，以计算对应那一层截面切片的厚度。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 537,
    type: "true_false",
    question: "不同的模型可以用同一套参数解决拉丝的问题。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 538,
    type: "true_false",
    question: "比正常温度加高5度，可以有效缓解拉丝的情况。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 539,
    type: "true_false",
    question: "在满足零件的使用条件下，使用Hotpoint我们尽可能使用PLA材料，因为PLA比较环保。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 540,
    type: "true_false",
    question: "尼龙不是FDM技术所使用的材料。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 541,
    type: "true_false",
    question: "在FDM的切片软件中，模型顶层厚度设置的单位是喷嘴直径。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 542,
    type: "true_false",
    question: "在FDM的切片软件中，喷嘴直径默认为0.4毫米。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 543,
    type: "true_false",
    question: "在Hotpoint打印参数设置中，如果想获得较高精度的模型可以将层高设置为0.1。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 544,
    type: "true_false",
    question: "FDM打印机打印速度过快也会影响成型质量。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 545,
    type: "true_false",
    question: "如果成型模型对速度有很大需求我们可以将层高设置为1.1。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 546,
    type: "true_false",
    question: "PLA材料的建议打印温度为250度。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 547,
    type: "true_false",
    question: "TPU材料是唯一带有柔性的FDM材料。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 548,
    type: "true_false",
    question: "扫描物体为透明玻璃材料时可以喷涂显像剂来得到更好的点云质量。",
    answer: "true",
    category: "高级应用"
  },
  {
    id: 549,
    type: "true_false",
    question: "扫描前粘贴标志点是为了方便扫描系统拼合点云。",
    answer: "true",
    category: "高级应用"
  },
  {
    id: 550,
    type: "true_false",
    question: "Win3DD扫描仪是属于光栅扫描。",
    answer: "true",
    category: "高级应用"
  },
  {
    id: 551,
    type: "true_false",
    question: "光栅式扫描仪在扫描时可以受阳光直射。",
    answer: "false",
    category: "高级应用"
  },
  {
    id: 552,
    type: "true_false",
    question: "扫描时不论什么材质，不需要调整曝光就可进行扫描。",
    answer: "false",
    category: "高级应用"
  },
  {
    id: 553,
    type: "true_false",
    question: "扫描时不论模型大小，都需要使扫描头到扫描工件的距离为600mm。",
    answer: "false",
    category: "高级应用"
  },
  {
    id: 554,
    type: "true_false",
    question: "在进行数据采集时，需根据周围环境进行曝光值调整。",
    answer: "true",
    category: "高级应用"
  },
  {
    id: 555,
    type: "true_false",
    question: "在使用扫描仪扫描工件时，必须每次都进行校准。",
    answer: "false",
    category: "高级应用"
  },
  {
    id: 556,
    type: "true_false",
    question: "减少噪音点云数据和面片数据都可以执行。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 557,
    type: "true_false",
    question: "为了使面片数据更加光顺，可执行开流形命令。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 558,
    type: "true_false",
    question: "若导入GeomagicDesignX的点云数据有问题可以通过逆向软件中的命令进行修补。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 559,
    type: "true_false",
    question: "以英寸导入的数据在做完逆向设计后在进行移动体换算成mm是可以执行的。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 560,
    type: "true_false",
    question: "未封装完以后的三角面片数据可以直接打印切片。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 561,
    type: "true_false",
    question: "封装三角面片后有缺失的地方可以逆向设计后反推出stl面片数据进行切片打印。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 562,
    type: "true_false",
    question: "面片和点云的简化只可按百分比减少不可增加。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 563,
    type: "true_false",
    question: "面片数据的简化可以使模型更加光顺。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 564,
    type: "true_false",
    question: "三坐标测量机龙门式属于按结构形式。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 565,
    type: "true_false",
    question: "测量系统的支撑结构存在压力及动态误差。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 566,
    type: "true_false",
    question: "在逆向建模绘制领域组过程中，包含的命令仅有插入、合并两个命令。",
    answer: "false",
    category: "高级应用"
  },
  {
    id: 567,
    type: "true_false",
    question: "在逆行建模过程中，领域组可以选自动分割也可以进行手动分割。",
    answer: "true",
    category: "高级应用"
  },
  {
    id: 568,
    type: "true_false",
    question: "wrap软件中填充单个孔命令，只有一种填充方式。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 569,
    type: "true_false",
    question: "wrap软件中删除钉状物命令，作用是删除不要特征及光顺模型面。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 570,
    type: "true_false",
    question: "GeomagicDesignX软件中3D草图只包含3D面片草图。",
    answer: "false",
    category: "高级应用"
  },
  {
    id: 571,
    type: "true_false",
    question: "在GeomagicDesignX软件中，参照面片、追加/编辑3D草图的模式是3D面片草图。",
    answer: "true",
    category: "高级应用"
  },
  {
    id: 572,
    type: "true_false",
    question: "GeomagicControl软件出的测试报告文件包括图形说明。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 573,
    type: "true_false",
    question: "GeomagicControl软件中比较包括3D比较、2D比较、创建注释、特征比较。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 574,
    type: "true_false",
    question: "FDM打印技术最常用的材料是PLA。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 575,
    type: "true_false",
    question: "LCD光固化技术使用的是400纳米的紫外光。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 576,
    type: "true_false",
    question: "粉末的氧含量也是粉末的重要特性，对用于SLM成型的金属粉其氧含量一般要求在1000ppm以下。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 577,
    type: "true_false",
    question: "金属3D打印中，工作腔体中需要通入氩气，来保证打印过程中的安全性。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 578,
    type: "true_false",
    question: "金属3D打印前，需要选择耗材，用不锈钢基板，则需要用钛合金的耗材。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 579,
    type: "true_false",
    question: "对于FDM 3D打印机来说，压敏开关不灵敏是无法正常自动调平的。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 580,
    type: "true_false",
    question: "FDM 3D打印机，点击三轴复位后打印头一直在压向平台，说明压敏开关太灵敏了。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 581,
    type: "true_false",
    question: "对于柔性的材料，应该选择从远端送料口进料。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 582,
    type: "true_false",
    question: "自动调平设备的压敏开关处于进料口处。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 583,
    type: "true_false",
    question: "金属3D打印中需要冷水机的使用，使用中冷水机加入的水为自来水。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 584,
    type: "true_false",
    question: "金属3D打印前，需开启冷水机，使冷水机温度保持在22-26°后，再进行下一步操作。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 585,
    type: "true_false",
    question: "观察加工的熔化情况，第一层熔化后应该是光亮，若有一定的球化、发黑，需调高激光功率。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 586,
    type: "true_false",
    question: "在增材制造虚拟仿真平台中进行实操模拟首先应该佩戴手套口罩等防护用品。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 587,
    type: "true_false",
    question: "实操模拟中在连续制造前应先进行单层制作。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 588,
    type: "true_false",
    question: "实操模拟中观察氧含量仪表数值为0.2%以下之后可以开始打印。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 589,
    type: "true_false",
    question: "将模型导入FDM切片软件后，如果模型的旋转角度不对，只能使用默认的旋转功能，对其校准。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 590,
    type: "true_false",
    question: "建模完成后，模型导出STP格式之后，导入切片软件进行打印。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 591,
    type: "true_false",
    question: "STL文件错误的情况下会导致STL文件导入设备切片软件后图文文件不正常。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 592,
    type: "true_false",
    question: "在FDM切片软件中修改切片参数中的填充，可以增强打印件的强度。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 593,
    type: "true_false",
    question: "FDM切片软件中，ABS材料的预设温度为210度。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 594,
    type: "true_false",
    question: "在金属3D打印机制件前需对其进行设备调试时，需要调试缸体和铺粉系统正常升降和铺粉送粉。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 595,
    type: "true_false",
    question: "网格状支撑是最省料的支撑方式。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 596,
    type: "true_false",
    question: "线状支撑最容易拆取。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 597,
    type: "true_false",
    question: "设备打印工件添加辅助支撑的作用是为了美观。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 598,
    type: "true_false",
    question: "模型加支撑时，摆放角度设置为30°以下可保证零件打印效果比较好。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 599,
    type: "true_false",
    question: "模型加支撑时，支撑间隙的设置距离为0.06-0.1mm时，打印效果较好，支撑亦清理。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 600,
    type: "true_false",
    question: "切片软件中修改设备型号不会改变操作区域的大小。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 601,
    type: "true_false",
    question: "在切片软件中，可以在工厂模式设置里修改设备型号。",
    answer: "true",
    category: "软件应用"
  },
  {
    id: 602,
    type: "true_false",
    question: "金属3D打印前，需设置打印参数，加工层厚为0.01时模型的打印效果较好。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 603,
    type: "true_false",
    question: "金属3D打印前，需设置打印参数，扫描间距为0.05-0.15mm时打印效果较好。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 604,
    type: "true_false",
    question: "激光功率，指激光器的额定输出功率，单位为W。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 605,
    type: "true_false",
    question: "目前激光选区熔化沉积技术应用于金属、非金属，所选用的材料是球形粉。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 606,
    type: "true_false",
    question: "EBSM技术打印所用的金属粉末比SLM技术所用的粉末的粒径小。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 607,
    type: "true_false",
    question: "EBSM技术打印的金属部件沉积态的热应力比SLM技术打印的同种零件低。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 608,
    type: "true_false",
    question: "在做打印前的准备工作中，要使用纸巾来仔细擦拭镜头。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 609,
    type: "true_false",
    question: "关于SLM制件，加工过程中可直接打开工作腔观察制件是否发生球化、发黑、翘起等不利现象。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 610,
    type: "true_false",
    question: "在金属增材制造中，激光能量不足会造成零件层间粘结不好。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 611,
    type: "true_false",
    question: "LCD光固化打印完成后，打印件需要使用酒精清洗。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 612,
    type: "true_false",
    question: "LCD光固化打印完成后，打印件需要放回打印机中进行二次固化。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 613,
    type: "true_false",
    question: "SLA技术使用的原材料是粉末材料。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 614,
    type: "true_false",
    question: "SLA工艺的优点是对工作环境要求低。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 615,
    type: "true_false",
    question: "SLS技术使用的原材料是粉末材料。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 616,
    type: "true_false",
    question: "LCD光固化打印机料槽底部的薄膜叫钢化膜。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 617,
    type: "true_false",
    question: "有效防止在打印过程中进程中断的方法之一是将切片文件导入到设备中进行打印。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 618,
    type: "true_false",
    question: "EL1 3D打印机最高可以打印100mm的模型。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 619,
    type: "true_false",
    question: "EL1采用的是磁吸式打印平台。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 620,
    type: "true_false",
    question: "SLA打印完成后不正确的操作是酒精清洗。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 621,
    type: "true_false",
    question: "以下属于立体光固化技术打印的后处理主要步骤之一的是干燥样件。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 622,
    type: "true_false",
    question: "在去除支撑后为了能够获得更好的外观质量，有时需要对外表面进行抛光、修补、上色等工序。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 623,
    type: "true_false",
    question: "在SLA工艺中，通常为了减少固化应力导致的变形，扫描截面时往往采用两次交叉扫面曝光的工艺。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 624,
    type: "true_false",
    question: "立体光固化工艺设备扫描振镜的扫描速度一般为6000-12000mm/s。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 625,
    type: "true_false",
    question: "扫描速度，指激光光斑沿扫描轨迹运动的速度。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 626,
    type: "true_false",
    question: "下列符合SLA打印工艺常用层厚的是0.2mm。",
    answer: "false",
    category: "打印技术"
  },
  {
    id: 627,
    type: "true_false",
    question: "SLM工艺打印之间，打印316L不锈钢，‘层厚0.05mm，激光激光功率260瓦，速度1000mm/s’这个参数可以满足打印工艺。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 628,
    type: "true_false",
    question: "SLM工艺打印时，激光光斑直径一般为80um。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 629,
    type: "true_false",
    question: "SLM工艺打印金属制件扫描方式对制件性能至关重要，倾斜分区的工艺比较符合大实心面的扫描方式。",
    answer: "true",
    category: "打印技术"
  },
  {
    id: 630,
    type: "true_false",
    question: "在打印过程中，如果发现模型表面发黑，起球和翘边等现象应立即停止打印工作。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 631,
    type: "true_false",
    question: "在3D打印机打印过程中，机械组件能控制打印操作。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 632,
    type: "true_false",
    question: "使用砂纸进行打磨时，刚开始可以使用1000目的砂纸。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 633,
    type: "true_false",
    question: "对于一些球形结构的凹槽，可以使用打磨笔进行打磨。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 634,
    type: "true_false",
    question: "3D打印技术后处理的关键技术不包括高温烧结。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 635,
    type: "true_false",
    question: "3D打印技术成型件的后处理过程中最关键的步骤是打磨成型件。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 636,
    type: "true_false",
    question: "金属零部件3D打印后处理主要包括热处理和机械加工等过程。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 637,
    type: "true_false",
    question: "模型打印完之后，偏口钳的主要作用是拆除支撑。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 638,
    type: "true_false",
    question: "砂纸是打磨效率最高的打磨工具。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 639,
    type: "true_false",
    question: "对于深孔和弯曲的复杂制件，用试管毛刷清除剩余的物料。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 640,
    type: "true_false",
    question: "IGAM金属3D打印机，打印的零件，用老虎钳把零件与基板分离。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 641,
    type: "true_false",
    question: "金属打印机在制件工作结束后，我们需要做制件的内部和表面的清洁工作。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 642,
    type: "true_false",
    question: "在上色时自喷漆上色是最简单的上色方式。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 643,
    type: "true_false",
    question: "喷涂法指的是使用自喷漆对模型上色。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 644,
    type: "true_false",
    question: "金属3D打印的零件，零件后处理用不上切割机。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 645,
    type: "true_false",
    question: "手涂法是门槛最低的上色工艺。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 646,
    type: "true_false",
    question: "电镀上色工艺对于模型的耐温是没有要求的。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 647,
    type: "true_false",
    question: "SLA成型件后处理流程的是：去支撑---表面打磨。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 648,
    type: "true_false",
    question: "对金属增材制造后处理中，不应该用盐酸清洗打印件。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 649,
    type: "true_false",
    question: "ABS材料可以使用丙酮抛光。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 650,
    type: "true_false",
    question: "喷砂机可以对模型表面做磨砂质感。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 651,
    type: "true_false",
    question: "电解抛光不属于化学处理。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 652,
    type: "true_false",
    question: "化学腐蚀对镂空结构的金属零件不适用。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 653,
    type: "true_false",
    question: "抛光这种后处理方法不可以改善零件的机械性能。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 654,
    type: "true_false",
    question: "震动抛光可以长时间抛光，不影响产品细节。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 655,
    type: "true_false",
    question: "复杂零件不适合震动抛光。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 656,
    type: "true_false",
    question: "震动抛光能改善零件的表面效果。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 657,
    type: "true_false",
    question: "对于细节较多的模型，我们可以使用喷砂机进行打磨。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 658,
    type: "true_false",
    question: "对于表面特别粗糙的模型，可以考虑使用锉刀进行打磨。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 659,
    type: "true_false",
    question: "打印的塑料件可以采用细砂纸打磨的方式来提升表面效果。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 660,
    type: "true_false",
    question: "打印的光固化零件表面效果光滑，简单打磨后即可进行上色处理。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 661,
    type: "true_false",
    question: "最基础的模型粘合剂是502胶水。",
    answer: "true",
    category: "工艺优化"
  },
  {
    id: 662,
    type: "true_false",
    question: "热熔胶粘接的模型效果好，粘接面非常牢固。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 663,
    type: "true_false",
    question: "针对大型零件常常采用分块打印，之后再用水溶胶拼接粘接。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 664,
    type: "true_false",
    question: "薄壁结构的零件适合做粘合处理。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 665,
    type: "true_false",
    question: "手持式激光扫描仪按预览按钮，显示十字光标的同时也会进行数据采集。",
    answer: "false",
    category: "高级应用"
  },
  {
    id: 666,
    type: "true_false",
    question: "扫描时会在三维查看器左侧出现一个条状计量器来说明扫描头与被扫描物之间的距离，扫描头顶上的三个LED发光点（红、绿、红）也同样是一个距离计量器。",
    answer: "true",
    category: "高级应用"
  },
  {
    id: 667,
    type: "true_false",
    question: "野战部队携带的压缩饼干与普通饼干相比，好处在于质量相等的情况下，它的密度较大，体积较小。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 668,
    type: "true_false",
    question: "用天平称量体积相同的木块、铝块和铁块，它们的质量相同；同一物质，体积越大，质量越大。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 669,
    type: "true_false",
    question: "在GeomagicControlX软件中操作时不需要注意保存，因为出错后可以一直回退。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 670,
    type: "true_false",
    question: "Geomagic软件中鼠标滚轮为平移功能，即左右上下移动。",
    answer: "false",
    category: "软件应用"
  },
  {
    id: 671,
    type: "true_false",
    question: "非接触式测量的光学测量机理决定了其对微小结构、深缝、坚锐边缘等特殊区域的测量误差较小。",
    answer: "false",
    category: "工艺优化"
  },
  {
    id: 672,
    type: "true_false",
    question: "相机定标的精度是决定系统扫描精度的重要因素。2个CCD相机位置调整后，或长途运输，或使用过程中严重震动等，都要重新定标，以保证设备的精度。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 673,
    type: "true_false",
    question: "LCD光固化设备，料槽里的耗材如果长时间不打印，不用回收到瓶子里。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 674,
    type: "true_false",
    question: "设备同步带出现异响时，应该涂上水。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 675,
    type: "true_false",
    question: "当设备丝杆运动出现轻微卡顿时，应该用水清洗。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 676,
    type: "true_false",
    question: "当喷头堵塞的时候，应该接着打印，打印时，可以融化里面的残留物。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 677,
    type: "true_false",
    question: "树脂耗材回收时，需要先用过滤网过滤一下。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 678,
    type: "true_false",
    question: "不同颜色的光敏树脂，回收时可以混装入一个瓶子内。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 679,
    type: "true_false",
    question: "出现故障时要注意保留现场，待维修人员来后如实说明故障前后的情况，并参与共同分析问题，尽早排除故障。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 680,
    type: "true_false",
    question: "FDM打印机长期不使用后使用发现Z轴上升困难，噪音较大时，应在丝杠上涂抹润滑油。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 681,
    type: "true_false",
    question: "FDM打印机使用之前进行调平操作，太紧的话会不出料。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 682,
    type: "true_false",
    question: "光敏树脂适合于在有温度、湿度控制的且密闭的环境中长期保存。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 683,
    type: "true_false",
    question: "PLA材料长期保存需要密封且干燥。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 684,
    type: "true_false",
    question: "线状耗材影响其保存的因素是温度。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 685,
    type: "true_false",
    question: "线状耗材变质之后，容易导致打印件开裂。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 686,
    type: "true_false",
    question: "FDM技术所使用的耗材在长时间不打印时也不用回收，安装在设备上即可。",
    answer: "false",
    category: "材料工程"
  },
  {
    id: 687,
    type: "true_false",
    question: "在清理LCD光固化设备时，可以使用酒精作为清洗剂。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 688,
    type: "true_false",
    question: "5S管理中的整顿是指把必要的东西放在规定的地方，并能很快取出，规定放置区，明确标示。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 689,
    type: "true_false",
    question: "5S管理中的整理定义是指把必要的东西放在规定的地方，并能很快取出，规定放置区，明确标示。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 690,
    type: "true_false",
    question: "以下是实行5S管理的目的的是：用最快的速度取得所需之物，在最有效的规章、制度和最简洁的流程下完成作业。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 691,
    type: "true_false",
    question: "5S管理中整理的定义是，依规定摆放整齐有序。",
    answer: "false",
    category: "安全规范"
  },
  {
    id: 692,
    type: "true_false",
    question: "5S管理的目的是将生产要素进行有效管理。",
    answer: "true",
    category: "安全规范"
  },
  {
    id: 693,
    type: "true_false",
    question: "SLA 3D打印机打印完成后，需将周围桌面和设备内部的平台清理干净。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 694,
    type: "true_false",
    question: "在清理FDM 3D打印机时，可以使用铲子。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 695,
    type: "true_false",
    question: "在清理LCD 3D打印机时，可以使用湿巾进行擦拭。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 696,
    type: "true_false",
    question: "在清理FDM 3D打印机打印仓时，可以使用钢刷。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 697,
    type: "true_false",
    question: "在清理LCD光固化3D打印时，可以使用无纺布沾水进行擦拭。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 698,
    type: "true_false",
    question: "Hotpoint设备启动无反应，应检查开关按钮。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 699,
    type: "true_false",
    question: "Hotpoint导入切片程序后一直不启动打印，应检查G代码文件。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 700,
    type: "true_false",
    question: "Hotpoint导入切片程序后一直不启动打印，检查切片程序无误，喷头温度为26°C，后应检查热敏电阻。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 701,
    type: "true_false",
    question: "FDM设备开机后点击喷头加温后，温度始终无法升上去有可能是加热棒线的问题。",
    answer: "true",
    category: "设备管理"
  },
  {
    id: 702,
    type: "true_false",
    question: "光敏树脂材料使用完后，再用过滤网过滤后，回收到不透光的瓶子里。",
    answer: "true",
    category: "材料工程"
  },
  {
    id: 703,
    type: "true_false",
    question: "设备故障维修中最常使用的方法是假设法。",
    answer: "false",
    category: "设备管理"
  },
  {
    id: 704,
    type: "true_false",
    question: "FDM的耗材如果长时间没使用，在打印时不出料，最优先考虑的情况是耗材受潮断裂。",
    answer: "true",
    category: "设备管理"
  }
];

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

// 导出题目总数
export const totalQuestions = questionBank.length;