// questionBank.js - 工业机器人应用编程职业技能等级理论知识考核题库(FNK中级)
export const questionBank = [
  // 单选题
  {
    id: 1,
    type: "single_choice",
    question: "下列各项，给DeviceNET总线分配I/O地址，正确的一项是（）。",
    options: {
      A: "机架81，槽号12，开始点1",
      B: "机架80，槽号12，开始点1",
      C: "机架48，槽号1，开始点1",
      D: "机架89，槽号1，开始点1"
    },
    answer: "A",
    category: "I/O配置"
  },
  {
    id: 2,
    type: "single_choice",
    question: "机器人手动设置DO[101]=ON/OFF时，需打开DO一览页面，正确的打开方法是（）。",
    options: {
      A: "MENU——SETUP",
      B: "MENU——I/O信号",
      C: "DATA——R[i]",
      D: "SELECT——CREATE"
    },
    answer: "B",
    category: "手动操作"
  },
  {
    id: 3,
    type: "single_choice",
    question: "下列各项，给CRMA15板接口分配一个DO地址，正确的一项是（）。",
    options: {
      A: "机架81，槽号12，开始点1",
      B: "机架80，槽号12，开始点1",
      C: "机架48，槽号1，开始点1",
      D: "机架89，槽号1，开始点1"
    },
    answer: "C",
    category: "I/O配置"
  },
  {
    id: 4,
    type: "single_choice",
    question: "下列各项，给外界模拟量接口分配一个AI地址，正确的一项是（）。",
    options: {
      A: "机架0，槽号12，开始点1",
      B: "机架48，槽号1，开始点1",
      C: "机架89，槽号1，通道号1",
      D: "机架0，槽号1，通道号1"
    },
    answer: "D",
    category: "I/O配置"
  },
  {
    id: 5,
    type: "single_choice",
    question: "物理编号指I/O模块内的信号编号。下列（）能表述模拟输出信号的物理编号",
    options: {
      A: "inl",
      B: "out1",
      C: "aout1",
      D: "ain1"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 6,
    type: "single_choice",
    question: "数值寄存器指令R[i]=(VAL1)MOD（VAL2）含义是将VAL1与VAL两个数的（）代入数值寄存器。",
    options: {
      A: "商",
      B: "余数",
      C: "成绩",
      D: "差"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 7,
    type: "single_choice",
    question: "下列属于调用子程序的指令是（）。",
    options: {
      A: "CALL",
      B: "JUMP",
      C: "SKIP",
      D: "COPY"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 8,
    type: "single_choice",
    question: "程序平移转换的步骤如下，正确的顺序为（）。 ① 单击MENU——1实用工具； (2) 单击F1类型一一程序移转； (3) 对变换源和变换目的地的代表点进行示教； (4) 设置移转量或位置； (5) 修改程序名称，并设定转换范围； (6) 按下F2”执行变换”。",
    options: {
      A: "①②③④⑤⑥",
      B: "①②⑤④③6",
      C: "①⑥②③④5",
      D: "①⑥②⑤④③"
    },
    answer: "B",
    category: "程序管理"
  },
  {
    id: 9,
    type: "single_choice",
    question: "从ROBOGUIDE仿真环境中导出TP程序，再导入到实际机器人控制器的步骤如下，正确顺序为（）。 ① 在ROBOGUIDE中，选中待导出的TP程序，右击一一另存为一一选择“TP格式”； (2) 找到导出的TP程序，并复制到U盘中； (3) 将U盘插入实际示教盒的USB接口； (4) 单击MENU——7文件——ENTER； (5) 选择F5“工具”——1切换设备； (6) 选择F1“类型”——7TP上的USB； (7) 查找到待导入的TP程序，点击F3”加载”。",
    options: {
      A: "①②③④⑤⑥⑦",
      B: "①②③④⑦6⑤",
      C: "①②③④⑤⑦6",
      D: "①②③⑤⑥④⑦"
    },
    answer: "A",
    category: "程序管理"
  },
  {
    id: 10,
    type: "single_choice",
    question: "在执行跳过指令时，若跳过条件满足，程序执行（）。",
    options: {
      A: "目的地标签",
      B: "下一行",
      C: "上一个标签",
      D: "跳过下一行"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 11,
    type: "single_choice",
    question: "当机器人的运动轨迹需要在现有基础上向Z方向向下平移 100mm 时，可添加指令（），并在每一条运动指令末尾添加OFFSETPR[3]的方法来实现。",
    options: {
      A: "PR[3,1] = -100",
      B: "PR[3,2] = 100",
      C: "PR[3,3] = -100",
      D: "PR[3,4] = 100"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 12,
    type: "single_choice",
    question: "当机器人的运动轨迹需要在现有基础上沿Y轴旋转 30° 时，可添加指令（），并在每一条运动指令末尾添加OFFSETPR[3]的方法来实现。",
    options: {
      A: "PR[3,2] = -30",
      B: "PR[3,3] = 30",
      C: "PR[3,4] = -30",
      D: "PR[3,5] = 30"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 13,
    type: "single_choice",
    question: "FANUC工业机器人程序偏移或旋转时，需要在每一条运动指令末尾添加OFFSETPR[i]，对于较长的程序，手动逐条添加过于繁琐，可以（）指令一次性修改。",
    options: {
      A: "FIND",
      B: "REMARK",
      C: "COMMENT",
      D: "REPLACE"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 14,
    type: "single_choice",
    question: "位置寄存器PR[1，3]在Jpos（关节坐标）中3的含义是（）。",
    options: {
      A: "Z轴",
      B: "Y轴",
      C: "J1",
      D: "J3"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 15,
    type: "single_choice",
    question: "下列各项，不属于外部信号程序选择与启停控制方式的一项是（ )。",
    options: {
      A: "RSR方式",
      B: "PNS方式",
      C: "JOB方式",
      D: "SYTLE方式"
    },
    answer: "C",
    category: "外部信号控制"
  },
  {
    id: 16,
    type: "single_choice",
    question: "将机器人UI[1-18]分配在机架48、插槽1、开始点1；将外部数字输入信号DI[101-118]也分配在同一物理地址。则用于外部启停控制的RSR1～RSR8对应的控制线应该接在（）。",
    options: {
      A: "DI[101]~DI[108]",
      B: "DI[108]~DI[116]",
      C: "DI[109]~DI[116]",
      D: "DI[110]~DI[118]"
    },
    answer: "C",
    category: "外部信号控制"
  },
  {
    id: 17,
    type: "single_choice",
    question: "通过外围设备输入信号来启停机器人程序时，需要将机器人置于遥控状态。下列各项，不属于遥控条件的是（）。",
    options: {
      A: "TP 开关置于 OFF",
      B: "单步执行状态",
      C: "模式开关打到 AUTO 挡",
      D: "“专用外部信号”为“启用”"
    },
    answer: "B",
    category: "外部信号控制"
  },
  {
    id: 18,
    type: "single_choice",
    question: "采用RSR方式，进行外部信号选择机器人程序与启停控制时，为了使UO[1]信号（CMDENBL）命令使能信号输出为ON，应满足（ ）条件。 ① UI[1]=ON (2) UI[2]=ON (3) UI[3]=ON (4) UI[4]=ON (5) UI[8]=ON",
    options: {
      A: "①②③⑤",
      B: "①②③④",
      C: "②③④",
      D: "①②③④③"
    },
    answer: "A",
    category: "外部信号控制"
  },
  {
    id: 19,
    type: "single_choice",
    question: "用外部信号启停控制机器人时，若要紧急停止当前运行的程序，应使专用系统输入信号（） = ON 0",
    options: {
      A: "UI[1] IMSTP",
      B: "UI[2] HOLD",
      C: "UI[3]SFSPD",
      D: "UI[4]CSTOPI"
    },
    answer: "A",
    category: "外部信号控制"
  },
  {
    id: 20,
    type: "single_choice",
    question: "一般情况下，系统出现报警时，伺服电源被关断。若要使系统重新接通伺服电源，启动伺服装置，必须清除报警。专用系统输入信号中，用于解除报警的是（）。",
    options: {
      A: "UI[1] IMSTP",
      B: "UI[7] HOME",
      C: "UI[4]CSTOPI",
      D: "UI[5]Fault Reset"
    },
    answer: "D",
    category: "外部信号控制"
  },
  {
    id: 21,
    type: "single_choice",
    question: "下列各种外部信号程序选择与启停控制方式中，具有多个程序排队执行功能的是（）。",
    options: {
      A: "RSR方式",
      B: "PNS方式",
      C: "JOB方式",
      D: "SYTLE方式"
    },
    answer: "A",
    category: "外部信号控制"
  },
  {
    id: 22,
    type: "single_choice",
    question: "S7- 1200系统不能接入哪种现场总线？（）",
    options: {
      A: "MPI",
      B: "PROFINET",
      C: "PROFIBUS",
      D: "MODBUS"
    },
    answer: "A",
    category: "PLC通信"
  },
  {
    id: 23,
    type: "single_choice",
    question: "生成程序时，自动生成的块是（）",
    options: {
      A: "OB100",
      B: "OB1",
      C: "FC1",
      D: "FB1"
    },
    answer: "B",
    category: "PLC编程"
  },
  {
    id: 24,
    type: "single_choice",
    question: "以下指令中，用于比较两个数大小的是（",
    options: {
      A: "MOVE",
      B: "CMP",
      C: "CTU",
      D: "TON"
    },
    answer: "B",
    category: "PLC编程"
  },
  {
    id: 25,
    type: "single_choice",
    question: "以下指令中，用于转换数据类型的指令是（",
    options: {
      A: "CALCULATE",
      B: "CTUD",
      C: "CONVERT",
      D: "TON"
    },
    answer: "C",
    category: "PLC编程"
  },
  {
    id: 26,
    type: "single_choice",
    question: "一个典型机器视觉的图像获取系统不包括（",
    options: {
      A: "相机",
      B: "镜头",
      C: "图像采集卡",
      D: "图像处理软件"
    },
    answer: "C",
    category: "机器视觉"
  },
  {
    id: 27,
    type: "single_choice",
    question: "一个典型机器视觉系统工作的一般流程，不包括（",
    options: {
      A: "图像过滤",
      B: "图像捕获",
      C: "图像传输",
      D: "图像处理"
    },
    answer: "A",
    category: "机器视觉"
  },
  {
    id: 28,
    type: "single_choice",
    question: "下列各指令，（）是码垛动作指令。",
    options: {
      A: "PALLETIZING-B_1",
      B: "JPAL_1[A_1] 80% FINE",
      C: "PALLETIZING-END_1",
      D: "LP[1]80mm/sec Preset[1]"
    },
    answer: "B",
    category: "码垛应用"
  },
  {
    id: 29,
    type: "single_choice",
    question: "工业机器人典型工作站应用编程的步骤顺序为：（ )。 ① 熟悉工艺流程， (2) 绘制程序流程图， (3) 机器人I/O信号配置与系统参数设置， (4) 搭建仿真环境，进行系统验证与优化， (5) 程序试运行， (6) 关键位置示教与保存， (7) 程序编写、调试与优化。",
    options: {
      A: "①②③④⑤⑥⑦",
      B: "①③④②⑥⑦⑤",
      C: "①②③④⑥⑦⑤",
      D: "①④②③⑥②⑤"
    },
    answer: "D",
    category: "工作站应用"
  },
  {
    id: 30,
    type: "single_choice",
    question: "工业机器人切割应用主要有（ ）三种类型的作业。",
    options: {
      A: "激光切割、水切割、火焰切割",
      B: "激光切割、等离子切割、火焰切割",
      C: "激光切割、氧乙炔切割、火焰切割",
      D: "水切割、等离子切割、火焰切割"
    },
    answer: "B",
    category: "切割应用"
  },
  {
    id: 31,
    type: "single_choice",
    question: "在调试机器人程序时，为了使机器人不至于为了等待某一个输入DI/RI而一直等待下去，可以用（ ）指令，使等待超时后，跳入报警中断。",
    options: {
      A: "WAIT",
      B: "TIMEOUT",
      C: "UFRAME_NUM",
      D: "RELEASEWAIT"
    },
    answer: "B",
    category: "程序调试"
  },
  {
    id: 32,
    type: "single_choice",
    question: "下列关于数字I/O，描述有误的一项是（ )。",
    options: {
      A: "是从外围设备通过处理I/O引述电路板（或I/O单元）的输入输出信号线来进行数据交换的标准数字信号",
      B: "属于专用数字信号",
      C: "它的值只有ON和OFF两种",
      D: "它的输出可以通过程序的执行或手动操作来设定，输入不能强制设定"
    },
    answer: "B",
    category: "I/O信号"
  },
  {
    id: 33,
    type: "single_choice",
    question: "对同一输出信号设定了多个不同的输入信号的情况下，如下所示：1.有效RI[1] => DO[1];2.有效RI[2] => DO[1];则当RI[1] = ON,且RI[2] = OFF时，输出DO[1]的状态是（）。",
    options: {
      A: "ON",
      B: "OFF",
      C: "不确定",
      D: "每隔1s，ON和OFF进行切换。"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 34,
    type: "single_choice",
    question: "下列关于模拟I/O，描述有误的一项是（",
    options: {
      A: "从外围设备通过处理I/O印刷电路板（或I/O单元）的输入输出信号线而进行模拟输入/输出电压值的交换。",
      B: "可通过程序的执行或手动操作来设定模拟输出值。",
      C: "进行读写时，将模拟输入/输出电压转换为数字值，因此，转换值与输入输出电压值完全一致。",
      D: "对程序进行测试时，可通过仿真输入/输出的设定，不用实际向外部装置进行输入/输出数据交互。"
    },
    answer: "C",
    category: "I/O信号"
  },
  {
    id: 35,
    type: "single_choice",
    question: "设置HOME点的正确步骤是：（ ）。① 按下示教器的按键“DATA” (2) 按下REPRE【F5】，选择2Joint，修改坐标系，进入关节坐标系J1~J6 (3) 按下TYPE【F1】，选择2PositionReg,进入位置寄存器页面 (4) 修改点位置信息J1,J2,J3,J4,J6均为0， J5 = - 90 ，按下DONE【F4】 (5) 按下POSITION【F4】，进入位置设定界面",
    options: {
      A: "①②③④⑤",
      B: "①③⑤②④",
      C: "①④③⑤②",
      D: "①③②⑤④"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 36,
    type: "single_choice",
    question: "在FANUC工业机器人仿真环境中，修改物料part1的颜色和透明度的步骤如下，正确的顺序是（）。 ① 双击物料partl； (2) 点击color旁边的小圆球，更改partl的颜色； (3) 点击General标签； (5) 单击APPLY——OK。",
    options: {
      A: "①②③④⑤",
      B: "①④②③⑤",
      C: "①④②⑤③",
      D: "②③①④⑤"
    },
    answer: "B",
    category: "仿真环境"
  },
  {
    id: 37,
    type: "single_choice",
    question: "在Roboguide仿真环境中添加一个传输带的正确操作顺序是（ ）。① 电机方向设置 (2) 添加Link (3) Link参数设置 (4) 添加Machine(5) Motion设置",
    options: {
      A: "①②③④⑤",
      B: "②③①④5",
      C: "④②③①5",
      D: "①④②③5"
    },
    answer: "C",
    category: "仿真环境"
  },
  {
    id: 38,
    type: "single_choice",
    question: "当示教操作盘有效时，停止信号画面显示为（",
    options: {
      A: "Fence Open TRUE",
      B: "TP Deadman TRUE",
      C: "Belt Broken TRUE",
      D: "TP Enable TRUE"
    },
    answer: "D",
    category: "手动操作"
  },
  {
    id: 39,
    type: "single_choice",
    question: "下列有关FANUC工业机器人创建工具坐标系的方法中，错误的一项是（ )。",
    options: {
      A: "三点法",
      B: "四点法",
      C: "六点法",
      D: "直接输入法"
    },
    answer: "B",
    category: "坐标系"
  },
  {
    id: 40,
    type: "single_choice",
    question: "工具坐标系或用户坐标系的设置被保存在（ ）文件中。",
    options: {
      A: "SYSGRAME.SV",
      B: "FRAMEVAR.SV",
      C: "SYSMACRO.SV",
      D: "SYSVARS.SV"
    },
    answer: "A",
    category: "系统文件"
  },
  {
    id: 41,
    type: "single_choice",
    question: "下列哪种指令是错误的（",
    options: {
      A: "IF 〈条件1〉and（条件2）and（条件3）",
      B: "IF 〈条件1〉and（条件2）or（条件3）",
      C: "IF R[1] <= 3 AND DI[1]〈〉ON,JMP LBL[2]",
      D: "IF R[1] >= 3 OR DI[1]=ON,CALL TEST2"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 42,
    type: "single_choice",
    question: "下列说法中，选择最合适的（",
    options: {
      A: "当PR[1]=LPOS时，PR[1,1]～PR[1,6]分别代表坐标值：X、Y、Z、W、P、R",
      B: "当PR[1]=JPOS时，PR[1,1]～PR[1,6]分别代表坐标值：J1～J6",
      C: "运动指令： J@P[1]100% FINE表明当前的位置数据P[1]与机器人的TCP坐标相等",
      D: "以上说法都正确"
    },
    answer: "D",
    category: "编程指令"
  },
  {
    id: 43,
    type: "single_choice",
    question: "Roboguide是一款核心应用软件，它包含了许多不同的应用模块用于创建所需的机器人工作站，其中用于搬运的是（）。",
    options: {
      A: "HandlingPRO",
      B: "ChamferingPRO",
      C: "PalletPROTP",
      D: "WeldPRO"
    },
    answer: "A",
    category: "仿真软件"
  },
  {
    id: 44,
    type: "single_choice",
    question: "Roboguide是一款核心应用软件，它包含了许多不同的应用模块用于创建所需的机器人工作站，其中用于码垛的是（）。",
    options: {
      A: "HandlingPRO",
      B: "ChamferingPRO",
      C: "PalletPROTP",
      D: "WeldPRO"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 45,
    type: "single_choice",
    question: "Roboguide是一款核心应用软件，它包含了许多不同的应用模块用于创建所需的机器人工作站，其中用于打磨的是（）。",
    options: {
      A: "HandlingPRO",
      B: "ChamferingPRO",
      C: "PalletPROTP",
      D: "WeldPRO"
    },
    answer: "B",
    category: "仿真软件"
  },
  {
    id: 46,
    type: "single_choice",
    question: "Roboguide是一款核心应用软件，它包含了许多不同的应用模块用于创建所需的机器人工作站，其中用于焊接的是（）。",
    options: {
      A: "HandlingPRO",
      B: "ChamferingPRO",
      C: "PalletPROTP",
      D: "WeldPRO"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 47,
    type: "single_choice",
    question: "Roboguide是一款核心应用软件，它包含了许多不同的应用模块用于创建所需的机器人工作站，其中一种最基本的机器人工作站仿真的是（）。",
    options: {
      A: "HandlingPRO",
      B: "OlpcPRO",
      C: "PalletPROTP",
      D: "WeldPRO"
    },
    answer: "A",
    category: "仿真软件"
  },
  {
    id: 48,
    type: "single_choice",
    question: "Roboguide仿真环境创建时，可选择的应用工具中，用于弧焊的是（）。",
    options: {
      A: "DispenseTool",
      B: "HandlingTool",
      C: "ArcTool",
      D: "LR"
    },
    answer: "C",
    category: "仿真环境"
  },
  {
    id: 49,
    type: "single_choice",
    question: "Roboguide仿真环境创建时，可选择的应用工具中，用于喷涂的是（）。",
    options: {
      A: "DispenseTool",
      B: "HandlingTool",
      C: "ArcTool",
      D: "LR"
    },
    answer: "A",
    category: "仿真环境"
  },
  {
    id: 50,
    type: "single_choice",
    question: "Roboguide仿真环境创建时，可选择的应用工具中，用于激光切割的是（）。",
    options: {
      A: "DispenseTool",
      B: "HandlingTool",
      C: "ArcTool",
      D: "LR"
    },
    answer: "D",
    category: "仿真环境"
  },
  {
    id: 51,
    type: "single_choice",
    question: "Roboguide仿真环境创建时，可选择的应用工具中，用于点焊的是（ )。",
    options: {
      A: "DispenseTool",
      B: "SpotTool",
      C: "ArcTool",
      D: "LR"
    },
    answer: "B",
    category: "仿真环境"
  },
  {
    id: 52,
    type: "single_choice",
    question: "运动指令写入的方法有（① POINT ② SHIFT+POINT (3) EDCMD ④ TOUCHUP",
    options: {
      A: "①②③④",
      B: "①②③",
      C: "②③④",
      D: "①②④"
    },
    answer: "A",
    category: "编程指令"
  },
  {
    id: 53,
    type: "single_choice",
    question: "使用TP手动启动程序的说法正确的是（① SHIFT+BWD可以顺序执行程序 (2) 松开SHIFT键暂停执行程序 (3) SHIFT + FWD可以顺序执行程序 (4) SHIFT + FWD可以单步执行程序",
    options: {
      A: "①③",
      B: "③④",
      C: "②③",
      D: "①④"
    },
    answer: "B",
    category: "手动操作"
  },
  {
    id: 54,
    type: "single_choice",
    question: "IF R[1]<3 AND R[2]>2, CALL TEST 以下哪种情况可以调用 TEST（）。",
    options: {
      A: "R[1]=2，R[2]=2",
      B: "R[1]=3，R[2]=3",
      C: "R[1]=2, R[2]=3",
      D: "R[1]=3, R[2]=4"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 55,
    type: "single_choice",
    question: "以下哪些是影响程序执行的因素（）。① 示教坐标系； (2) 动作类型； (3) 位置信息； (4) 速度倍率",
    options: {
      A: "①②③",
      B: "②③④",
      C: "①②③④",
      D: "①③④"
    },
    answer: "B",
    category: "程序执行"
  },
  {
    id: 56,
    type: "single_choice",
    question: "指令WAITDI[2] <> OFF是（ )指令。",
    options: {
      A: "等待输出信号为OFF",
      B: "等待输入信号不为OFF",
      C: "等待输出信号大于或小于OFF",
      D: "等待输入信号大于或小于OFF"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 57,
    type: "single_choice",
    question: "紧靠WAIT指令前的动作中附加有中断指令时，下一个动作（ )。",
    options: {
      A: "会开始",
      B: "不会开始",
      C: "等待WAIT条件满足后再开始",
      D: "跳过下一行开始"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 58,
    type: "single_choice",
    question: "指令JP[1] 50% FINETool Offset,PR[2]是（",
    options: {
      A: "高速跳过指令",
      B: "位置补偿指令",
      C: "直接工具补偿指令",
      D: "码垛指令"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 59,
    type: "single_choice",
    question: "在所有的工件抓取位置应使用（ )定位形式。",
    options: {
      A: "CNT",
      B: "FINE",
      C: "SET",
      D: "ACC"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 60,
    type: "single_choice",
    question: "当PR[4]=Lpos时，PR[4,3]代表的含义是（",
    options: {
      A: "P[3]点的J4",
      B: "P[4]点的J3",
      C: "P[4]点的Z值",
      D: "P[3]点的W值"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 61,
    type: "single_choice",
    question: "示教器进行复制粘贴运动指令时，如果希望粘贴位置信息并生成新的位置编号，应按下（ ）。",
    options: {
      A: "PASTE",
      B: "POS-ID",
      C: "POSITION",
      D: "COPY"
    },
    answer: "B",
    category: "编程指令"
  },
  {
    id: 62,
    type: "single_choice",
    question: "不同群(组)的机器人由同一个控制器控制，下列各项，不能共用的是（ ）。",
    options: {
      A: "程序",
      B: "Toolings",
      C: "Parts",
      D: "Machines"
    },
    answer: "B",
    category: "多机器人系统"
  },
  {
    id: 63,
    type: "single_choice",
    question: "FANUC工业机器人同一个控制器下，最多可以添加（ ）个GROUP。",
    options: {
      A: "2",
      B: "3",
      C: "8",
      D: "10"
    },
    answer: "C",
    category: "多机器人系统"
  },
  {
    id: 64,
    type: "single_choice",
    question: "Roboguide中，多机之间的协调主要通过对控制器的编程控制来实现。其实现方式主要有（ ）。",
    options: {
      A: "同一控制器的多轴控制技术",
      B: "不同控制器之间信号通信技术",
      C: "不同控制器之间的多轴控制技术和同一控制器之间信号通信技术",
      D: "同一控制器的多轴控制技术和不同控制器之间信号通信技术"
    },
    answer: "D",
    category: "多机器人系统"
  },
  {
    id: 65,
    type: "single_choice",
    question: "使用Roboguide创建机器人工作站，选中第一台普通机器人后，在第七步Step7中，若选择Group2为一个6轴的工业机器人，那么，机器人控制器实际上控制了（ ）个轴。",
    options: {
      A: "12",
      B: "6",
      C: "7",
      D: "2"
    },
    answer: "A",
    category: "仿真环境"
  },
  {
    id: 66,
    type: "single_choice",
    question: "在 Solidworks 中，要改变已经绘制好的椭圆的形状，可（ ）。",
    options: {
      A: "按住 Ctrl 键移动鼠标",
      B: "左键拖动特征点",
      C: "右键拖动特征点",
      D: "按住 Ctrl 键移动鼠标中键"
    },
    answer: "B",
    category: "Solidworks"
  },
  {
    id: 67,
    type: "single_choice",
    question: "利用旋转特征建模时，旋转轴和旋转轮廓应位于（ ）。",
    options: {
      A: "同一草图中",
      B: "不同草图中",
      C: "可在同一草图中，也可不在同一草图中",
      D: "以上说法均不对"
    },
    answer: "A",
    category: "Solidworks"
  },
  {
    id: 68,
    type: "single_choice",
    question: "Solidworks 是（ ）原创的三维实体建模软件。",
    options: {
      A: "UNIX",
      B: "WINDOWS",
      C: "LINUX",
      D: "EDS"
    },
    answer: "D",
    category: "Solidworks"
  },
  {
    id: 69,
    type: "single_choice",
    question: "Solidworks 是市面上主流三维建模软件之一，能够与绝大多数 CAD 软件进行格式转换，以下各种格式，不能转换的是（ ）。",
    options: {
      A: "EXB",
      B: "IGES",
      C: "DWG",
      D: "STP"
    },
    answer: "A",
    category: "Solidworks"
  },
  {
    id: 70,
    type: "single_choice",
    question: "Solidworks 模型由零件、装配体和工程图组成，它们的文件格式分别为（ ）。",
    options: {
      A: "sldasm, sldprt, slddrw",
      B: "sldprt, sldasm, slddrw",
      C: "sldasm, slddrw, sldprt",
      D: "slddrw, sldasm, sldprt"
    },
    answer: "B",
    category: "Solidworks"
  },
  {
    id: 71,
    type: "single_choice",
    question: "Solidworks 软件旋转视图的快捷方法是（ ）。",
    options: {
      A: "Ctrl+左键",
      B: "滚动鼠标滚轮",
      C: "按下滚轮不松时移动鼠标",
      D: "按下右键不松时移动鼠标"
    },
    answer: "C",
    category: "Solidworks"
  },
  {
    id: 72,
    type: "single_choice",
    question: "要创建频繁显示的画面的菜单，通常将它追加到（）中。",
    options: {
      A: "菜单收藏夹",
      B: "履历记录",
      C: "触摸面板设置",
      D: "用户界面"
    },
    answer: "A",
    category: "用户界面"
  },
  {
    id: 73,
    type: "single_choice",
    question: "气动三大件是大多数气动设备必不可少的气源装置，大多数情况下，三大件组合使用，安装在用气设备的近处，下列各项不属于气动三大件的一项是（）。",
    options: {
      A: "空气过滤器",
      B: "减压阀",
      C: "油雾器",
      D: "气泵"
    },
    answer: "D",
    category: "气动系统"
  },
  {
    id: 74,
    type: "single_choice",
    question: "下列各项，不属于典型气动系统组成部分的是（）。",
    options: {
      A: "通信元件",
      B: "执行元件",
      C: "控制元件",
      D: "气源部分"
    },
    answer: "A",
    category: "气动系统"
  },
  {
    id: 75,
    type: "single_choice",
    question: "排气节流阀一般安装在（）的排气口。",
    options: {
      A: "空压机",
      B: "执行元件",
      C: "控制元件",
      D: "辅助元件"
    },
    answer: "C",
    category: "气动系统"
  },
  {
    id: 76,
    type: "single_choice",
    question: "真空度是指（）。",
    options: {
      A: "绝对压力和相对压力的差值",
      B: "当绝对压力低于大气压时，此绝对压力就是真空度",
      C: "当绝对压力低于大气压时，此绝对压力与大气压的差值",
      D: "大气压与相对压力的差值"
    },
    answer: "C",
    category: "真空技术"
  },
  {
    id: 77,
    type: "single_choice",
    question: "下列各项属于气动系统执行元件的是（",
    options: {
      A: "空压机和气泵",
      B: "气缸和马达",
      C: "节流阀和方向阀",
      D: "电动机"
    },
    answer: "B",
    category: "气动系统"
  },
  {
    id: 78,
    type: "single_choice",
    question: "气源装置的核心元件是（",
    options: {
      A: "马达",
      B: "空压机",
      C: "方向阀",
      D: "油水分离器"
    },
    answer: "B",
    category: "气动系统"
  },
  {
    id: 79,
    type: "single_choice",
    question: "在要求双向行程时间相同的场合，应选用（ ）气缸。",
    options: {
      A: "多位式",
      B: "膜片式",
      C: "伸缩套筒式",
      D: "双出杆活塞式"
    },
    answer: "D",
    category: "气动系统"
  },
  {
    id: 80,
    type: "single_choice",
    question: "机器人对外部气缸进行运动控制时，常通过（）信号连接控制气缸运动的电磁阀通断来实现。",
    options: {
      A: "DO",
      B: "DI",
      C: "AO",
      D: "GO"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 81,
    type: "single_choice",
    question: "下列各项，不属于传感器主要组成部分的是（",
    options: {
      A: "变送器",
      B: "敏感元件",
      C: "传感元件",
      D: "测验转换电路"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 82,
    type: "single_choice",
    question: "根据被测量是否随时间变化，可分为静态测量和动态测量。下列各种检测，属于动态检测的是（）。",
    options: {
      A: "建筑物的缓慢沉降",
      B: "苹果的重量",
      C: "圆形工件的直径",
      D: "用陀螺仪测量火箭的飞行方向"
    },
    answer: "D",
    category: "传感器"
  },
  {
    id: 83,
    type: "single_choice",
    question: "根据检测的手段不同，可分为直接测量、间接测量和组合测量。下列各种检测，属于间接检测的是（）。",
    options: {
      A: "用电感传感器测物料的厚度",
      B: "阿基米德测皇冠比重",
      C: "热电偶测液体温度",
      D: "用光电传感器测量物料的位置"
    },
    answer: "B",
    category: "传感器"
  },
  {
    id: 84,
    type: "single_choice",
    question: "根据测量结果的显示方式，可分为模拟式测量和数字式测量.下列各种检测，属于数字式检测的是（）。",
    options: {
      A: "接近开关测物体的有无",
      B: "电子称称重",
      C: "超声波传感器测身高",
      D: "热辐射温度计测温"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 85,
    type: "single_choice",
    question: "根据测量时是否与被测对象接触，可分为接触式测量和非接触式测量。下列各种检测，属于接触式检测的是（）。",
    options: {
      A: "接近开关测物体的有无",
      B: "电子称称重",
      C: "超声波传感器测身高",
      D: "热辐射温度计测温"
    },
    answer: "B",
    category: "传感器"
  },
  {
    id: 86,
    type: "single_choice",
    question: "接近开关能在一定的距离（几毫米～几十毫米）内检测有无物体靠近。当需要检测铝合金材料的物料感知时，最物美价廉的选择是（）。",
    options: {
      A: "霍尔式接近开关",
      B: "电涡流式接近开关",
      C: "电容式接近开关",
      D: "光电式接近开关"
    },
    answer: "B",
    category: "传感器"
  },
  {
    id: 87,
    type: "single_choice",
    question: "接近开关能在一定的距离（几毫米～几十毫米）内检测有无物体靠近。当需要检测磁性材料的物料感知时，最物美价廉的选择是（）。",
    options: {
      A: "霍尔式接近开关",
      B: "电涡流式接近开关",
      C: "电容式接近开关",
      D: "光电式接近开关"
    },
    answer: "A",
    category: "传感器"
  },
  {
    id: 88,
    type: "single_choice",
    question: "接近开关能在一定的距离内检测有无物体靠近。当需要检测距离较远（1m左右）的白色物料感知时，最佳的选择是（）。",
    options: {
      A: "霍尔式接近开关",
      B: "电涡流式接近开关",
      C: "电容式接近开关",
      D: "光电式接近开关"
    },
    answer: "D",
    category: "传感器"
  },
  {
    id: 89,
    type: "single_choice",
    question: "下列指令，能实现将寄存器的值经过二进制转换后输出到指定的组输出中的是（）。",
    options: {
      A: "R[1]=GI[2]",
      B: "R[R[1]]=GI[R[4]]",
      C: "GO[R[5]]=R[R[1]]",
      D: "GO[1]=0"
    },
    answer: "C",
    category: "编程指令"
  },
  {
    id: 90,
    type: "single_choice",
    question: "GI/GO可以将信号号码作为1个组进行定义，可以将（）条信号线作为一个组进行定义。",
    options: {
      A: "2~16",
      B: "1~16",
      C: "2~32",
      D: "1~32"
    },
    answer: "A",
    category: "I/O信号"
  },
  {
    id: 91,
    type: "single_choice",
    question: "程序复制的正确操作是（",
    options: {
      A: "NEXT——EDCMD——3 COPY/CUT——PASTE——R- LOGIC",
      B: "SELECT——NEXT——COPY——重命名——ENTER——确认",
      C: "SELECT——选中待复制程序——ENTER——COPY——确认",
      D: "NEXT——EDCMD——3 COPY/CUT——PASTE——R- POSID"
    },
    answer: "C",
    category: "程序管理"
  },
  {
    id: 92,
    type: "single_choice",
    question: "Solidworks中，复制并粘贴一个或多个草图实体，以下方法中，不能实现的是（）。",
    options: {
      A: "鼠标选中实体并拖动",
      B: "菜单编辑——复制——粘贴",
      C: "Crtl+C Ctrl+V",
      D: "右击菜单复制——粘贴"
    },
    answer: "A",
    category: "Solidworks"
  },
  {
    id: 93,
    type: "single_choice",
    question: "Solidworks中，对一个轮廓不封闭的草图进行拉伸，会（）。",
    options: {
      A: "自动生成薄壁实体",
      B: "不能进行拉伸操作",
      C: "无反应",
      D: "不能确定"
    },
    answer: "D",
    category: "Solidworks"
  },
  {
    id: 94,
    type: "single_choice",
    question: "建模时，对两个没有交集的圆进行拉伸，会（）。",
    options: {
      A: "生成两个实体",
      B: "不能进行拉伸操作",
      C: "无反应",
      D: "不能确定"
    },
    answer: "A",
    category: "Solidworks"
  },
  {
    id: 95,
    type: "single_choice",
    question: "建模时，下列不属于实体间的布尔操作的是（）。",
    options: {
      A: "求和",
      B: "求差",
      C: "求交",
      D: "缝合"
    },
    answer: "D",
    category: "Solidworks"
  },
  {
    id: 96,
    type: "single_choice",
    question: "ROBOGUIDE软件的Tools菜单主要提供了仿真系统各种工具使用的操作。下列各项，用于创建组合件图库模型的是（）。",
    options: {
      A: "Plug In Manager",
      B: "Modeler",
      C: "Rail Unit Creator Menu",
      D: "Set Interlock"
    },
    answer: "B",
    category: "仿真软件"
  },
  {
    id: 97,
    type: "single_choice",
    question: "ROBOGUIDE软件的Tools菜单中，用于创建导轨的是（）。",
    options: {
      A: "Plug In Manager",
      B: "Modeler",
      C: "Rail Unit Creator Menu",
      D: "Set Interlock"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 98,
    type: "single_choice",
    question: "一个典型的机器视觉系统的与人类的视觉环境相似，（）可类比人类的视神经。",
    options: {
      A: "镜头",
      B: "相机",
      C: "图像采集卡",
      D: "输入输出单元"
    },
    answer: "C",
    category: "机器视觉"
  },
  {
    id: 99,
    type: "single_choice",
    question: "机器视觉检测半透明物体时，宜选用的照明方式是（ ）。",
    options: {
      A: "背光照明",
      B: "漫反射照明",
      C: "单向照明",
      D: "环状照明"
    },
    answer: "A",
    category: "机器视觉"
  },
  {
    id: 100,
    type: "single_choice",
    question: "机器视觉系统想要过滤掉包装上的红色文字，宜选用的光源是（ ）。",
    options: {
      A: "红光",
      B: "白光",
      C: "蓝光",
      D: "紫外光"
    },
    answer: "C",
    category: "机器视觉"
  },
  {
    id: 101,
    type: "single_choice",
    question: "图像采集卡的主要功能是（ ）。",
    options: {
      A: "图像获取",
      B: "图像处理与传输",
      C: "检测结果输出",
      D: "图像过滤"
    },
    answer: "B",
    category: "机器视觉"
  },
  {
    id: 102,
    type: "single_choice",
    question: "机器视觉的输出结果可以是（ ）。① 状态信息、 (2) 测量结果、 (3) 测量值、 (4) 字符串、 (5) 文本文件",
    options: {
      A: "①②③",
      B: "①②③④",
      C: "②③④",
      D: "②③④③"
    },
    answer: "B",
    category: "机器视觉"
  },
  {
    id: 103,
    type: "single_choice",
    question: "下列各项，不属于工业中常用的机器视觉系统上位机的是（ ）。",
    options: {
      A: "PLC",
      B: "PC机",
      C: "机器人控制器",
      D: "单片机"
    },
    answer: "D",
    category: "机器视觉"
  },
  {
    id: 104,
    type: "single_choice",
    question: "RFID读写器的主要功能有（）。 ① 与电子标签通信、 (2) 标签供能、 (3) 多标签识别、 (4) 移动目标识别、 (5) 信号转换",
    options: {
      A: "①②③④",
      B: "①②③④③",
      C: "②③④③",
      D: "①③④③"
    },
    answer: "A",
    category: "RFID"
  },
  {
    id: 105,
    type: "single_choice",
    question: "ROBOGUIDE软件的Tools菜单中，用于设置机器人互锁关系的是（）。",
    options: {
      A: "Plug In Manager",
      B: "Modeler",
      C: "Rail Unit Creator Menu",
      D: "Set Interlock"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 106,
    type: "single_choice",
    question: "ROBOGUIDE软件中，用于工程文件的添加、新建、设置默认存储文件夹位置以及文件的导入/导出等操作的菜单是（）。",
    options: {
      A: "Files",
      B: "Project",
      C: "Tools",
      D: "VIEW"
    },
    answer: "B",
    category: "仿真软件"
  },
  {
    id: 107,
    type: "single_choice",
    question: "ROBOGUIDE软件中，用于添加机器人及周围设备、更改属性、配置不同设备通信信号配置的菜单是（）。",
    options: {
      A: "Robot",
      B: "Project",
      C: "Tools",
      D: "Cell"
    },
    answer: "A",
    category: "仿真软件"
  },
  {
    id: 108,
    type: "single_choice",
    question: "ROBOGUIDE软件的Robot菜单中，用于打开或隐藏模拟示教器的是（）。",
    options: {
      A: "Lock Teach Tool Selection",
      B: "Show Work Envelope",
      C: "Teach Pendant",
      D: "Show Joint Jog Tool"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 109,
    type: "single_choice",
    question: "ROBOGUIDE软件的Robot菜单中，用于显示机器人各关节工作范围的是（）。",
    options: {
      A: "Lock Teach Tool Selection",
      B: "Show Work Envelope",
      C: "Teach Pendant",
      D: "Show Joint Jog Tool"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 110,
    type: "single_choice",
    question: "ROBOGUIDE软件中，当需要添加机器人工作站围栏时，应选则Cell菜单下的（）。",
    options: {
      A: "Add Part",
      B: "Add Fixture",
      C: "Add Obstacle",
      D: "Add Machine"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 111,
    type: "single_choice",
    question: "ROBOGUIDE软件中，操纵鼠标可以实现机器人TCP点快速运动到目标面、点、边或中心。下列各项，能使TCP快速运动到面的是（）。",
    options: {
      A: "Ctrl+Shift+左键",
      B: "Ctrl+Alt+左键",
      C: "Alt+Shift+左键",
      D: "Ctrl+Shift+Alt+左键"
    },
    answer: "A",
    category: "仿真软件"
  },
  {
    id: 112,
    type: "single_choice",
    question: "ROBOGUIDE软件中，操纵鼠标可以实现机器人TCP点快速运动到目标面、点、边或中心。下列各项，能使TCP快速运动到中心的是（）。",
    options: {
      A: "Ctrl+Shift+左键",
      B: "Ctrl+Alt+左键",
      C: "Alt+Shift+左键",
      D: "Ctrl+Shift+Alt+左键"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 113,
    type: "single_choice",
    question: "ROBOGUIDE软件中，操纵鼠标可以实现机器人TCP点快速运动到目标面、点、边或中心。下列各项，能使TCP快速运动到顶点的是（）。",
    options: {
      A: "Ctrl+Shift+左键",
      B: "Ctrl+Alt+左键",
      C: "Alt+Shift+左键",
      D: "Ctrl+Shift+Alt+左键"
    },
    answer: "B",
    category: "仿真软件"
  },
  {
    id: 114,
    type: "single_choice",
    question: "ROBOGUIDE软件中，操纵鼠标可以实现机器人TCP点快速运动到目标面、点、边或中心。下列各项，能使TCP快速运动到边的是（）。",
    options: {
      A: "Ctrl+Shift+左键",
      B: "Ctrl+Alt+左键",
      C: "Alt+Shift+左键",
      D: "Ctrl+Shift+Alt+左键"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 115,
    type: "single_choice",
    question: "ROBOGUIDE软件中，查看仿真环境的视图主要由5种，缺少（）。",
    options: {
      A: "仰视图",
      B: "俯视图",
      C: "前视图",
      D: "后视图"
    },
    answer: "A",
    category: "仿真软件"
  },
  {
    id: 116,
    type: "single_choice",
    question: "ROBOGUIDE软件的VIEW菜单中，用于把工作站中选中的物体显示在窗口中央的是（）。",
    options: {
      A: "Orthogonal View",
      B: "Full View",
      C: "Perspective",
      D: "Center on Selected Object"
    },
    answer: "D",
    category: "仿真软件"
  },
  {
    id: 117,
    type: "single_choice",
    question: "ROBOGUIDE软件中，当需要添加机器人工作站围栏时，应选则Cell菜单下的（）。",
    options: {
      A: "Add Part",
      B: "Add Fixture",
      C: "Add Obstacle",
      D: "Add Machine"
    },
    answer: "C",
    category: "仿真软件"
  },
  {
    id: 118,
    type: "single_choice",
    question: "下列有关防干涉区域设定，说法有误的一项是（）。",
    options: {
      A: "外围设备或其他机器人（称干涉物）与本工作机器人预先定义干涉区域后，只要干涉物处于干涉区域内，机器人将停止进入干涉区域，但一旦干涉物离开干涉区域，机器人将解除停滞状态。",
      B: "不论什么情况下，只要机器人的运行位置处于预先定义的干涉区域时，机器人将自动停止。",
      C: "外围设备和机器人之间，通过向一个干涉区域分配一个互锁信号进行通信。",
      D: "FANUC R-30iB/R-30iB Mate型机器人最多可设定3个防干涉区域。"
    },
    answer: "B",
    category: "安全功能"
  },
  {
    id: 119,
    type: "single_choice",
    question: "从外围设备要重新启动一度暂停的程序，要使用（）输入。",
    options: {
      A: "START",
      B: "RESET",
      C: "ON",
      D: "BEGIN"
    },
    answer: "A",
    category: "外部信号控制"
  },
  {
    id: 120,
    type: "single_choice",
    question: "下列各项ROBOGUIDE工具选项中，属于点焊的一项是（）。",
    options: {
      A: "ArcTool",
      B: "Dispense Tool",
      C: "Handing Tool",
      D: "Spot Tool+"
    },
    answer: "D",
    category: "仿真环境"
  },
  {
    id: 121,
    type: "single_choice",
    question: "（）是离开机床和外围设备的可动区域的安全位置。",
    options: {
      A: "X轴",
      B: "干涉区域",
      C: "单元底板",
      D: "参考位置"
    },
    answer: "D",
    category: "安全操作"
  },
  {
    id: 122,
    type: "single_choice",
    question: "更换脉冲编码器、SRVO-062 BZAL alarm、SRVO-038 Pulse mismatch、气压异常这几种情况发生时，其中（）发生时需要进行零点标定。",
    options: {
      A: "更换脉冲编码器、SRVO-062 BZAL alarm",
      B: "SRVO-062 BZAL alarm、SRVO-038 Pulse mismatch",
      C: "SRVO-038 Pulse mismatch、气压异常",
      D: "更换脉冲编码器、SRVO-062 BZAL alarm、SRVO-038 Pulse mismatch、气压异常"
    },
    answer: "D",
    category: "系统维护"
  },
  {
    id: 123,
    type: "single_choice",
    question: "对于T1方式，若示教速度为 2000mm / sec 的情况下，若倍率为 100% ，速度被限制为（）。",
    options: {
      A: "250mm/sec",
      B: "500mm/sec",
      C: "2000mm/sec",
      D: "1000mm/sec"
    },
    answer: "A",
    category: "手动操作"
  },
  {
    id: 124,
    type: "single_choice",
    question: "对于T2方式，在JOG动作时的机器人速度，其工具中心点和法兰盘的最高速度是（）。",
    options: {
      A: "250mm/sec",
      B: "500mm/sec",
      C: "2000mm/sec",
      D: "1000mm/sec"
    },
    answer: "C",
    category: "手动操作"
  },
  {
    id: 125,
    type: "true_false",
    question: "六点法能设置新的 TCP 点与 J6 轴法兰盘中心的位移，也能设置新的工具坐标系与默认工具坐标的旋转角度。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 126,
    type: "true_false",
    question: "机器人工作空间的形状是固定的，不因机器人的运动坐标形式不同而不同。",
    answer: "false",
    category: "机器人基础"
  },
  {
    id: 127,
    type: "true_false",
    question: "依靠关节可动范围功能来控制机器人的动作范围时，应同时使用极限开关和机械式制动器，否则，恐会导致人员受伤或损坏装置。",
    answer: "true",
    category: "安全操作"
  },
  {
    id: 128,
    type: "true_false",
    question: "用户坐标系在尚未设定时，默认以工具坐标系替代。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 129,
    type: "true_false",
    question: "以直角形式示教的情况下，位置变量、位置寄存器不会受到用户坐标系的影响。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 130,
    type: "true_false",
    question: "选择辅助菜单“禁止前进后退”时，能通过示教器来启动程序。",
    answer: "false",
    category: "程序执行"
  },
  {
    id: 131,
    type: "true_false",
    question: "示教器可以在无效状态下进行背景编辑。",
    answer: "true",
    category: "编程环境"
  },
  {
    id: 132,
    type: "true_false",
    question: "如果已经创建了一个“HAND OPEN”宏指令，那么示教编程时可以示教这一指令。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 133,
    type: "true_false",
    question: "创建宏指令时，如不输入宏指令的名称，那么宏指令名称就是用对应的程序名称。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 134,
    type: "true_false",
    question: "机器人本体中的交流伺服马达由抱闸单元、直流伺服电机、绝对值脉冲编码器等部分组成。",
    answer: "false",
    category: "机器人硬件"
  },
  {
    id: 135,
    type: "true_false",
    question: "使用 3 方式开关切换操作方式时，要将开关固定在某一位置，需要将钥匙从开关上拔出。",
    answer: "true",
    category: "手动操作"
  },
  {
    id: 136,
    type: "true_false",
    question: "在进行文件的输入输出时，要设定通信端口，对于 R- 30iB 机型，若要连接操作面板，则通信端口是 RS- 232- C。",
    answer: "false",
    category: "通信"
  },
  {
    id: 137,
    type: "true_false",
    question: "机器人程序不仅可以平移、旋转，还可以镜像转换。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 138,
    type: "true_false",
    question: "机器人的对称转移功能是指把已经示教程序的某一范围的动作语句，使示教位置以点对称的方式转移到别的位置。",
    answer: "false",
    category: "程序管理"
  },
  {
    id: 139,
    type: "true_false",
    question: "运行指令 J P[2] 100% FINE OFFSET CONDITION PR[1]后，实际的 P2 位置是在示教 P2 的基础上加上 PR[1]偏移量后的新位置。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 140,
    type: "true_false",
    question: "复制粘贴位置时，选择 POS- ID 不仅会粘贴位置信息，而且会自动生成新的位置编号。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 141,
    type: "true_false",
    question: "FANUC工业机器人按作业任务的不同可以分为焊接、搬运、装配、码垛、喷涂、涂胶、切割、雕刻、打磨等类型机器人。",
    answer: "true",
    category: "机器人应用"
  },
  {
    id: 142,
    type: "true_false",
    question: "码垛动作指令是以使用具有趋近点、堆叠点、回退点的路径点作为位置数据的动作指令，是码垛专用的动作指令。该位置数据数据在当前码垛完成前，都不会改变。",
    answer: "false",
    category: "码垛应用"
  },
  {
    id: 143,
    type: "true_false",
    question: "物料的码垛既可以通过专门的码垛指令PALLETZING来实现，也可以通过OFFSET偏移结合循环指令来实现。",
    answer: "true",
    category: "码垛应用"
  },
  {
    id: 144,
    type: "true_false",
    question: "在码垛动作指令中，动作类型有J（关节运动）、L（直线运动）和C（圆弧运动）",
    answer: "false",
    category: "码垛应用"
  },
  {
    id: 145,
    type: "true_false",
    question: "焊接输入（WDI）和焊接输出（WO）信号是由用户自己控制的输入/输出信号。",
    answer: "false",
    category: "焊接应用"
  },
  {
    id: 146,
    type: "true_false",
    question: "WO[i]=PULSE（time）指令的作用是将一个指定的焊接输出打开一定的时间。如\"WO[1]=PULSE,60sec\"指令的含义是焊接输出打开60秒。",
    answer: "false",
    category: "焊接应用"
  },
  {
    id: 147,
    type: "true_false",
    question: "工业机器人点焊工作站主要是由示教盒、控制柜、机器人本体、自动送丝装置及焊接电源等部分组成，通过编写机器人程序实现连续轨迹焊接或点位焊接。",
    answer: "false",
    category: "焊接应用"
  },
  {
    id: 148,
    type: "true_false",
    question: "点焊工业机器人按照示教程序规定的动作、顺序和参数进行点焊作业，其过程是完全自动化的。",
    answer: "true",
    category: "焊接应用"
  },
  {
    id: 149,
    type: "true_false",
    question: "工业机器人在喷涂环境的大量运用，极大地解放了在危险环境下工作的劳动力，也极大地提高了制造企业的生产效率，并带来稳定的喷涂质量，降低成品的返修率，提高了油漆利用率，因此，喷涂机器人完全可以替代人工喷涂。",
    answer: "false",
    category: "喷涂应用"
  },
  {
    id: 150,
    type: "true_false",
    question: "模拟 I/O 是从外围设备通过处理 I/O 印刷电路板（或 I/O 单元）的输入/输出信号线进行模拟电压值的交换。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 151,
    type: "true_false",
    question: "模拟 AI/AO 进行读写时，将模拟输入/输出电压转换为数字量。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 152,
    type: "true_false",
    question: "模拟 I/O 读写出来的数字值与实际的输入/输出电压值一致。",
    answer: "false",
    category: "I/O信号"
  },
  {
    id: 153,
    type: "true_false",
    question: "气动马达是将压缩空气的压力能转换成直线运动的机械能的装置。",
    answer: "false",
    category: "气动系统"
  },
  {
    id: 154,
    type: "true_false",
    question: "气压传动系统所使用的压缩空气必须经过干燥和净化处理后才能使用。",
    answer: "true",
    category: "气动系统"
  },
  {
    id: 155,
    type: "true_false",
    question: "由于空气具有很强的可压缩性，气动执行元件的工作速度稳定性和定位性较差。",
    answer: "true",
    category: "气动系统"
  },
  {
    id: 156,
    type: "true_false",
    question: "用位置检出开关确认气缸活塞的移动情况，常作为外部设备的一个模拟输入量 AI 接入机器人，作为执行到位的反馈信号。",
    answer: "false",
    category: "气动系统"
  },
  {
    id: 157,
    type: "true_false",
    question: "皮带输送机广泛应用于家电、电子、电器、机械、烟草、注塑、邮电、印刷、食品等各行各业，可实现物件的组装、检测、调试、包装及运输等。皮带输送机可分为普通连续运行、节拍运行、变速运行等多种控制方式。",
    answer: "true",
    category: "输送系统"
  },
  {
    id: 158,
    type: "true_false",
    question: "皮带输送机的普通连续运行控制方式，是指变频器参数设定完毕后，机器人 DO[i]接入变频器运动控制信号端，当 DO[i]=ON 时，电机正转/反转/停止，从而实现皮带输送机的启停控制。",
    answer: "false",
    category: "输送系统"
  },
  {
    id: 159,
    type: "true_false",
    question: "皮带输送机的节拍运行控制方式，是指将机器人的 DO[i]信号接入皮带运动控制电机的接触器/继电器线圈回路，当机器人 DO[i]=ON，接触器/继电器线圈得电，触点闭合，使异步电动机正转/反转，输送带开启运行。",
    answer: "false",
    category: "输送系统"
  },
  {
    id: 160,
    type: "true_false",
    question: "检测是利用各种物理、化学效应，选择合适的方法与装置，将生产、科研、生活等各方面的有关信息通过检查与测量的方法，赋予定性或定量结果的过程。",
    answer: "true",
    category: "传感器"
  },
  {
    id: 161,
    type: "true_false",
    question: "在被测量不随时间变化时所产生的误差成为静态误差。常见的静态误差有粗大误差、系统误差、随机误差等。",
    answer: "true",
    category: "传感器"
  },
  {
    id: 162,
    type: "true_false",
    question: "系统误差反映了测量值偏离真值的程度，它是不可避免的误差。",
    answer: "false",
    category: "传感器"
  },
  {
    id: 163,
    type: "true_false",
    question: "传感器是自动检测系统的关键元件，用于将非电量的被测量，如温度、压力、距离、尺寸、力、转速、振动、流量、流速等转换为易于处理的电压、电流、频率或数字信号。",
    answer: "true",
    category: "传感器"
  },
  {
    id: 164,
    type: "true_false",
    question: "非线性度是指传感器在稳态下输出变化值与输入变化值之比，用K表示。",
    answer: "false",
    category: "传感器"
  },
  {
    id: 165,
    type: "true_false",
    question: "灵敏度是指传感器实际特性曲线与拟合直线之间的最大偏差与传感器量程范围内的输出之百分比。",
    answer: "false",
    category: "传感器"
  },
  {
    id: 166,
    type: "true_false",
    question: "大多数传感器的输出为非线性，现在多采用计算机来纠正检测系统的非线性误差。",
    answer: "true",
    category: "传感器"
  },
  {
    id: 167,
    type: "true_false",
    question: "接近开关可以用于高速计数、测速、确定物体的存在和位置、测量物位或液位，用于人体保护和防盗等。",
    answer: "true",
    category: "传感器"
  },
  {
    id: 168,
    type: "true_false",
    question: "FANUC工业机器人当需要复制整个程序时，可以采用程序复制的方式实现。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 169,
    type: "true_false",
    question: "程序语句一旦复制，即可多次插入到别的位置，直到拷贝了新的语句为止。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 170,
    type: "true_false",
    question: "FANUC工业机器人采用COPY- PASTE指令既可进行单行代码的复制，也可进行多行代码的复制，甚至连不连续的多行代码也可以复制。",
    answer: "false",
    category: "程序管理"
  },
  {
    id: 171,
    type: "true_false",
    question: "程序复制功能既可以复制成已有的文件名，也可以复制成新的文件名。",
    answer: "false",
    category: "程序管理"
  },
  {
    id: 172,
    type: "true_false",
    question: "在动作指令中，位置资料以位置变量P[i]或位置寄存器PR[i]来表示。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 173,
    type: "true_false",
    question: "位置寄存器是用来存储位置资料的存储变量，用PR[i]来表示。i只能是直接的位置寄存器号码，如1，2，3等。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 174,
    type: "true_false",
    question: "位置寄存器PR[1:3,2]中“1\"表示该位置寄存器是属于1号机器人的位置寄存器。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 175,
    type: "true_false",
    question: "在FANUC机器人程序中，位置补偿指令的基本格式是OFFSETPR[i]。若在位置补偿指令前面已经添加有位置条件指令OFFSETCONDITIONPR[i]，则进行位置补偿时，可仅添加OFFSET。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 176,
    type: "true_false",
    question: "FANUC工业机器人改变程序示教位置可以通过位置平移、旋转及移转三种方法。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 177,
    type: "true_false",
    question: "机器人的移转功能是指已经示教程序的某一范围的动作语句，使示教位置移转并变换到别的位置。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 178,
    type: "true_false",
    question: "RFID系统中的数据传输可分为两种方式：阅读器向电子标签的数据传输，称为上行链路传输；电子标签向阅读器的数据传输，称为下行链路传输。",
    answer: "false",
    category: "RFID"
  },
  {
    id: 179,
    type: "true_false",
    question: "典型的读写器终端一般由天线、调制器、编码发生器、时钟、存储电路组成。",
    answer: "false",
    category: "RFID"
  },
  {
    id: 180,
    type: "true_false",
    question: "电子标签一般由天线、射频模块、逻辑控制模块三部分构成。",
    answer: "true",
    category: "RFID"
  },
  {
    id: 181,
    type: "true_false",
    question: "自动识别技术是应用一定的识别装置，通过被识别物品和识别装置之间的接近活动，自动地获取被识别物品的相关信息，常见的自动识别技术有语音识别技术、图像识别技术、射频识别技术、条码识别技术。",
    answer: "true",
    category: "自动识别"
  },
  {
    id: 182,
    type: "true_false",
    question: "AGV的导向采用光纤陀螺仪，由陀螺仪判定行走方向和行走距离，由IC卡记录搬运路线指示图。",
    answer: "false",
    category: "AGV"
  },
  {
    id: 183,
    type: "true_false",
    question: "链板输送机适用于运送单元货物，特别适用于矩形条板箱或纸板箱。",
    answer: "true",
    category: "输送系统"
  },
  {
    id: 184,
    type: "true_false",
    question: "露天式仓库俗称货场，其最大的优点是装卸作业非常方便，适宜存放大型的货物。",
    answer: "true",
    category: "仓储"
  },
  {
    id: 185,
    type: "true_false",
    question: "FANUC工业机器人搭建仿真环境时，通过Moderler工具直接创建了多种组件，当如要组合成一个组合模型时，可通过选择一个组件作为母件，其余组件作为子件，通过Attach Component完成组件黏合。使用该方法，如有需要，可以拆除一个或多个子件。",
    answer: "true",
    category: "仿真环境"
  },
  {
    id: 186,
    type: "true_false",
    question: "不同学员之间经常会使用同一台机器人训练，自己创建的坐标系经常会被别人删除或更改掉，只能每次训练时，用三点法或六点法创建一次新的坐标系。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 187,
    type: "true_false",
    question: "FANUC工业机器人默认工具坐标系数量有9个。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 188,
    type: "true_false",
    question: "I/O Unit-MODELA是具备数字输入输出信号以及模拟输入输出信号的I/O连接设备从机装置。信号的种类以及数量随种类的不同而不同。",
    answer: "true",
    category: "I/O硬件"
  },
  {
    id: 189,
    type: "true_false",
    question: "标准I/O分配的内容，根据系统设定画面“UOP自动配置”的设定而不同。",
    answer: "true",
    category: "I/O配置"
  },
  {
    id: 190,
    type: "true_false",
    question: "SVOFF信号是伺服开启信号。",
    answer: "false",
    category: "系统信号"
  },
  {
    id: 191,
    type: "true_false",
    question: "工作在13.56MHz频段的RFID系统其识别距离一般为<75cm。",
    answer: "true",
    category: "RFID"
  },
  {
    id: 192,
    type: "true_false",
    question: "广泛应用于防伪、物流、人员识别等领域的高频RFID系统典型的工作频率是13.56MHz。",
    answer: "true",
    category: "RFID"
  },
  {
    id: 193,
    type: "true_false",
    question: "指令DO[1]=PULSE,2sec的脉冲信号表示T=2s。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 194,
    type: "true_false",
    question: "机器人最常用的信号配置就是I/O分配，它是建立机器人的软件端口与外围设备之间关系的重要途径。下列各项中，表示已经成功分配该地址，但还需要重启才能使用的状态是PEND。",
    answer: "true",
    category: "I/O配置"
  },
  {
    id: 195,
    type: "true_false",
    question: "机器人最常用的信号配置就是I/O分配，它是建立机器人的软件端口与外围设备之间关系的重要途径。下列各项中，表示已经成功激活该地址分配，可正确使用该分配的状态是ACTIVE。",
    answer: "true",
    category: "I/O配置"
  },
  {
    id: 196,
    type: "true_false",
    question: "在FANUC工业机器人控制器中，若要实现8位数据流从机器人的GO[2]传输到PLC的IB0，则下列操作是错误的或多余的：将CRMA15I/O板上的DORSC1必须接+24V。",
    answer: "true",
    category: "I/O配置"
  },
  {
    id: 197,
    type: "true_false",
    question: "ABORT报警用来强制结束程序的执行，使机器人的动作在减速后停止。",
    answer: "true",
    category: "系统报警"
  },
  {
    id: 198,
    type: "true_false",
    question: "中断指令常与WAIT DI[1]=ON指令一起编程，以便在中断后，在重新触发程序。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 199,
    type: "true_false",
    question: "从仿真软件 ROBOGUIDE 中创建的 TP 程序，如果想要用普通写字板或 word 等软件打开，则应该将 ROBOGUIDE 的 TP 程序导出为 LS 文件。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 200,
    type: "true_false",
    question: "梯形图程序由指令助记符和操作数组成。",
    answer: "true",
    category: "PLC编程"
  },
  {
    id: 201,
    type: "true_false",
    question: "根据需要，可以在 S7- 1200 控制器中对 I、Q、M 及 DB 中存储的数据进行保持性设定。",
    answer: "false",
    category: "PLC编程"
  },
  {
    id: 202,
    type: "true_false",
    question: "CTU 计数器的当前值大于等于预置数 PV 时置位，停止计数。",
    answer: "false",
    category: "PLC编程"
  },
  {
    id: 203,
    type: "true_false",
    question: "通过工厂复位，可以将 S7- 1200 CPU 中存储的程序清除，但无法清除 CPU 所使用的 IP 地址。",
    answer: "false",
    category: "PLC编程"
  },
  {
    id: 204,
    type: "true_false",
    question: "利用 JUMP 指令，可以从主程序（OB）跳转到子程序（FC、FB）中。",
    answer: "false",
    category: "PLC编程"
  },
  {
    id: 205,
    type: "true_false",
    question: "TON 是接通延时定时器。",
    answer: "true",
    category: "PLC编程"
  },
  {
    id: 206,
    type: "true_false",
    question: "用户生成的变量表在调试用户程序时用于监视和修改变量。",
    answer: "true",
    category: "PLC编程"
  },
  {
    id: 207,
    type: "true_false",
    question: "下载用户程序是指将 PLC 中的程序和数据通过通信设备传送到计算机中进行程序的检查和修改。",
    answer: "false",
    category: "PLC编程"
  },
  {
    id: 208,
    type: "true_false",
    question: "模拟 I/O 是从外围设备通过处理 I/O 印刷电路板（或 I/O 单元）的输入/输出信号线进行模拟电压值的交换。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 209,
    type: "true_false",
    question: "模拟 AI/AO 进行读写时，将模拟输入/输出电压转换为数字量。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 210,
    type: "true_false",
    question: "模拟 I/O 读写出来的数字值与实际的输入/输出电压值一致。",
    answer: "false",
    category: "I/O信号"
  },
  {
    id: 211,
    type: "true_false",
    question: "气动马达是将压缩空气的压力能转换成直线运动的机械能的装置。",
    answer: "false",
    category: "气动系统"
  },
  {
    id: 212,
    type: "true_false",
    question: "气压传动系统所使用的压缩空气必须经过干燥和净化处理后才能使用。",
    answer: "true",
    category: "气动系统"
  },
  {
    id: 213,
    type: "true_false",
    question: "由于空气具有很强的可压缩性，气动执行元件的工作速度稳定性和定位性较差。",
    answer: "true",
    category: "气动系统"
  },
  {
    id: 214,
    type: "true_false",
    question: "用位置检出开关确认气缸活塞的移动情况，常作为外部设备的一个模拟输入量 AI 接入机器人，作为执行到位的反馈信号。",
    answer: "false",
    category: "气动系统"
  },
  {
    id: 215,
    type: "true_false",
    question: "皮带输送机广泛应用于家电、电子、电器、机械、烟草、注塑、邮电、印刷、食品等各行各业，可实现物件的组装、检测、调试、包装及运输等。皮带输送机可分为普通连续运行、节拍运行、变速运行等多种控制方式。",
    answer: "true",
    category: "输送系统"
  },
  {
    id: 216,
    type: "true_false",
    question: "皮带输送机的普通连续运行控制方式，是指变频器参数设定完毕后，机器人 DO[i]接入变频器运动控制信号端，当 DO[i]=ON 时，电机正转/反转/停止，从而实现皮带输送机的启停控制。",
    answer: "false",
    category: "输送系统"
  },
  {
    id: 217,
    type: "true_false",
    question: "皮带输送机的节拍运行控制方式，是指将机器人的 DO[i]信号接入皮带运动控制电机的接触器/继电器线圈回路，当机器人 DO[i]=ON，接触器/继电器线圈得电，触点闭合，使异步电动机正转/反转，输送带开启运行。",
    answer: "false",
    category: "输送系统"
  },
  {
    id: 218,
    type: "true_false",
    question: "检测是利用各种物理、化学效应，选择合适的方法与装置，将生产、科研、生活等各方面的有关信息通过检查与测量的方法，赋予定性或定量结果的过程。",
    answer: "true",
    category: "传感器"
  },
  {
    id: 219,
    type: "true_false",
    question: "在被测量不随时间变化时所产生的误差成为静态误差。常见的静态误差有粗大误差、系统误差、随机误差等。",
    answer: "true",
    category: "传感器"
  },
  {
    id: 220,
    type: "true_false",
    question: "系统误差反映了测量值偏离真值的程度，它是不可避免的误差。",
    answer: "false",
    category: "传感器"
  },
  {
    id: 221,
    type: "true_false",
    question: "传感器是自动检测系统的关键元件，用于将非电量的被测量，如温度、压力、距离、尺寸、力、转速、振动、流量、流速等转换为易于处理的电压、电流、频率或数字信号。",
    answer: "true",
    category: "传感器"
  },
  {
    id: 222,
    type: "true_false",
    question: "非线性度是指传感器在稳态下输出变化值与输入变化值之比，用K表示。",
    answer: "false",
    category: "传感器"
  },
  {
    id: 223,
    type: "true_false",
    question: "灵敏度是指传感器实际特性曲线与拟合直线之间的最大偏差与传感器量程范围内的输出之百分比。",
    answer: "false",
    category: "传感器"
  },
  {
    id: 224,
    type: "true_false",
    question: "大多数传感器的输出为非线性，现在多采用计算机来纠正检测系统的非线性误差。",
    answer: "true",
    category: "传感器"
  },
  {
    id: 225,
    type: "true_false",
    question: "接近开关可以用于高速计数、测速、确定物体的存在和位置、测量物位或液位，用于人体保护和防盗等。",
    answer: "true",
    category: "传感器"
  },
  {
    id: 226,
    type: "true_false",
    question: "接近开关根据输出方式的不同，可分为PNP型和NPN型两种，信号端平时为高电平，有信号输入时，信号端为低电平（负）输出的是PNP型接近开关。",
    answer: "false",
    category: "传感器"
  },
  {
    id: 227,
    type: "true_false",
    question: "群组输入GI及群组输出GO信号，对几个数字输入输出信号进行分组，以一个指令来控制这些信号。",
    answer: "false",
    category: "I/O信号"
  },
  {
    id: 228,
    type: "true_false",
    question: "GI/GO是用来汇总多条信号线并进行数据交换的通用模拟信号。",
    answer: "false",
    category: "I/O信号"
  },
  {
    id: 229,
    type: "true_false",
    question: "GI/GO信号的值用十进制数或16进制数来表达，转变或逆变为二进制数后通过信号线交换数据。",
    answer: "true",
    category: "I/O信号"
  },
  {
    id: 230,
    type: "true_false",
    question: "FANUC工业机器人当需要复制一段程序代码时，既能在本程序内部复制与粘贴，也能实现不同程序之间的代码复制与粘贴。",
    answer: "false",
    category: "程序管理"
  },
  {
    id: 231,
    type: "true_false",
    question: "FANUC工业机器人当需要复制一段程序代码时，可以采用COPY指令，再选择PASTE完成。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 232,
    type: "true_false",
    question: "FANUC工业机器人当需要插入一行程序代码时，可以将光标选择在需要插入行的位置，调用INSERT指令，即可在光标位置行之后插入一行空白行。",
    answer: "false",
    category: "程序管理"
  },
  {
    id: 233,
    type: "true_false",
    question: "FANUC工业机器人编程时，INSERT指令既可以实现单行插入，也可以实现多行插入。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 234,
    type: "true_false",
    question: "FANUC工业机器人采用COPY指令复制多行代码后，再选择PASTE插入多行代码时，必须要插入多行空白，否则会覆盖后面的程序代码，使程序混乱出错。",
    answer: "false",
    category: "程序管理"
  },
  {
    id: 235,
    type: "true_false",
    question: "FANUC工业机器人当需要复制整个程序时，可以采用程序复制的方式实现。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 236,
    type: "true_false",
    question: "程序语句一旦复制，即可多次插入到别的位置，直到拷贝了新的语句为止。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 237,
    type: "true_false",
    question: "FANUC工业机器人采用COPY- PASTE指令既可进行单行代码的复制，也可进行多行代码的复制，甚至连不连续的多行代码也可以复制。",
    answer: "false",
    category: "程序管理"
  },
  {
    id: 238,
    type: "true_false",
    question: "程序复制功能既可以复制成已有的文件名，也可以复制成新的文件名。",
    answer: "false",
    category: "程序管理"
  },
  {
    id: 239,
    type: "true_false",
    question: "在动作指令中，位置资料以位置变量P[i]或位置寄存器PR[i]来表示。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 240,
    type: "true_false",
    question: "位置寄存器是用来存储位置资料的存储变量，用PR[i]来表示。i只能是直接的位置寄存器号码，如1，2，3等。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 241,
    type: "true_false",
    question: "位置寄存器PR[1:3,2]中“1\"表示该位置寄存器是属于1号机器人的位置寄存器。",
    answer: "false",
    category: "编程指令"
  },
  {
    id: 242,
    type: "true_false",
    question: "在FANUC机器人程序中，位置补偿指令的基本格式是OFFSETPR[i]。若在位置补偿指令前面已经添加有位置条件指令OFFSETCONDITIONPR[i]，则进行位置补偿时，可仅添加OFFSET。",
    answer: "true",
    category: "编程指令"
  },
  {
    id: 243,
    type: "true_false",
    question: "FANUC工业机器人改变程序示教位置可以通过位置平移、旋转及移转三种方法。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 244,
    type: "true_false",
    question: "机器人的移转功能是指已经示教程序的某一范围的动作语句，使示教位置移转并变换到别的位置。",
    answer: "true",
    category: "程序管理"
  },
  {
    id: 245,
    type: "true_false",
    question: "一个典型的机器视觉系统的与人类的视觉环境相似，包括光源、镜头、相机、图像采集卡、图像处理软件、输入输出单元等。其中，只有光源是相同的，都表示正在发光的物体。",
    answer: "false",
    category: "机器视觉"
  },
  {
    id: 246,
    type: "true_false",
    question: "机器人视觉拍照时，希望获得景深浅的照片，应选用小光圈。",
    answer: "false",
    category: "机器视觉"
  },
  {
    id: 247,
    type: "true_false",
    question: "视觉系统检测输送链上的产品时，应选用较高的快门速度。",
    answer: "true",
    category: "机器视觉"
  },
  {
    id: 248,
    type: "true_false",
    question: "机器视觉系统的照明方式主要有单向照明、掠光照明、漫反射照明、环状照明、背光照明和结构光照明等。其中，以光源高亮作为背景，而以目标黑暗为特征的照明方式是漫反射照明。",
    answer: "false",
    category: "机器视觉"
  },
  {
    id: 249,
    type: "true_false",
    question: "灰度图像和二值图像是类似的，都是黑白图像。",
    answer: "false",
    category: "机器视觉"
  },
  {
    id: 250,
    type: "true_false",
    question: "图像数字化的最终结果是图像的二维矩阵。",
    answer: "true",
    category: "机器视觉"
  },
  {
    id: 251,
    type: "true_false",
    question: "二值图像是指每个像素只有一个采样颜色的图像，我们常说的黑白照片，黑白电影指的都是二值图像。",
    answer: "false",
    category: "机器视觉"
  },
  {
    id: 252,
    type: "true_false",
    question: "在RGB彩色空间中，GRB（255，255，255）代表的是黑色。",
    answer: "false",
    category: "机器视觉"
  },
  {
    id: 253,
    type: "true_false",
    question: "模板匹配是图像分析领域的技术，其本质是基于内容的图像检索。",
    answer: "true",
    category: "机器视觉"
  },
  {
    id: 254,
    type: "true_false",
    question: "相机标定的最终目的是通过相机内外参的值，来确定物体图像像素坐标系与物体实际物理坐标系的映射关系，最后转换为执行装置（机器人）的坐标。",
    answer: "true",
    category: "机器视觉"
  },
  {
    id: 255,
    type: "true_false",
    question: "RFID检测时，控制系统和应用软件之间的数据交换主要通过读写器的接口来完成。",
    answer: "true",
    category: "RFID"
  },
  {
    id: 256,
    type: "true_false",
    question: "一般读写器的I/O接口形式主要有：USB、WLAN、以太网接口、RS- 232串行接口、RS- 485串行接口等。",
    answer: "true",
    category: "RFID"
  },
  {
    id: 257,
    type: "true_false",
    question: "RFID系统中的数据传输可分为两种方式：阅读器向电子标签的数据传输，称为上行链路传输；电子标签向阅读器的数据传输，称为下行链路传输。",
    answer: "false",
    category: "RFID"
  },
  {
    id: 258,
    type: "true_false",
    question: "典型的读写器终端一般由天线、调制器、编码发生器、时钟、存储电路组成。",
    answer: "false",
    category: "RFID"
  },
  {
    id: 259,
    type: "true_false",
    question: "电子标签一般由天线、射频模块、逻辑控制模块三部分构成。",
    answer: "true",
    category: "RFID"
  },
  {
    id: 260,
    type: "true_false",
    question: "自动识别技术是应用一定的识别装置，通过被识别物品和识别装置之间的接近活动，自动地获取被识别物品的相关信息，常见的自动识别技术有语音识别技术、图像识别技术、射频识别技术、条码识别技术。",
    answer: "true",
    category: "自动识别"
  },
  {
    id: 261,
    type: "true_false",
    question: "AGV的导向采用光纤陀螺仪，由陀螺仪判定行走方向和行走距离，由IC卡记录搬运路线指示图。",
    answer: "false",
    category: "AGV"
  },
  {
    id: 262,
    type: "true_false",
    question: "链板输送机适用于运送单元货物，特别适用于矩形条板箱或纸板箱。",
    answer: "true",
    category: "输送系统"
  },
  {
    id: 263,
    type: "true_false",
    question: "露天式仓库俗称货场，其最大的优点是装卸作业非常方便，适宜存放大型的货物。",
    answer: "true",
    category: "仓储"
  },
  {
    id: 264,
    type: "true_false",
    question: "FANUC工业机器人搭建仿真环境时，通过Moderler工具直接创建了多种组件，当如要组合成一个组合模型时，可通过选择一个组件作为母件，其余组件作为子件，通过Attach Component完成组件黏合。使用该方法，如有需要，可以拆除一个或多个子件。",
    answer: "true",
    category: "仿真环境"
  },
  {
    id: 265,
    type: "true_false",
    question: "FANUC工业机器人搭建仿真环境时，通过Moderler工具直接创建了多种组件，当如要组合成一个组合模型时，可通过选择一个组件作为母件，其余组件作为子件，通过Ope——Attach Component完成组件黏合。使用该方法，如有需要，可以拆除一个或多个子件。",
    answer: "true",
    category: "仿真环境"
  },
  {
    id: 266,
    type: "true_false",
    question: "FANUC工业机器人搭建仿真环境时，通过Moderler工具直接创建了多种组件，当如要组合成一个组合模型时，可通过选择一个组件作为母件，其余组件作为子件，通过Children——Child Components完成组件黏合。使用该方法，一旦组件黏合，就不可拆分。",
    answer: "false",
    category: "仿真环境"
  },
  {
    id: 267,
    type: "true_false",
    question: "草图实体中绘制的中心线也参与拉伸或旋转特征的生成。",
    answer: "false",
    category: "Solidworks"
  },
  {
    id: 268,
    type: "true_false",
    question: "在 Solidworks 中，只能对特征的颜色进行设置，不能对面进行颜色设置。",
    answer: "false",
    category: "Solidworks"
  },
  {
    id: 269,
    type: "true_false",
    question: "在 Solidworks 中，直线命令只能绘制直线，不能绘制切线。",
    answer: "false",
    category: "Solidworks"
  },
  {
    id: 270,
    type: "true_false",
    question: "在 Solidworks 中，比例缩放命令可以缩放模型几何体，也能缩放尺寸。",
    answer: "true",
    category: "Solidworks"
  },
  {
    id: 271,
    type: "true_false",
    question: "在 Solidworks 中，对零件进行镜像操作时，约束也会同时被镜像。",
    answer: "true",
    category: "Solidworks"
  },
  {
    id: 272,
    type: "true_false",
    question: "旋转特征中的旋转轴，只能位于与草图绘制平面垂直的平面上。",
    answer: "false",
    category: "Solidworks"
  },
  {
    id: 273,
    type: "true_false",
    question: "ROBOGUIDE 软件中，工具条的命令与菜单中的相关命令是对应的，主要用于仿真项目的创建与编辑。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 274,
    type: "true_false",
    question: "ROBOGUIDE 软件中，可以用鼠标直接拖动机器人的 TCP，将机器人整体进行平移。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 275,
    type: "true_false",
    question: "在ROBOGUIDE软件中，改变模型位置的方法主要有两种：一是直接修改其坐标参数；另一种时直接用鼠标拖拽。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 276,
    type: "true_false",
    question: "ROBOGUIDE修改模型大小可以通过双击模型，打开属性对话框后，修改Scale大小即可。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 277,
    type: "true_false",
    question: "ROBOGUIDE修改模型透明度可以通过双击模型，打开属性对话框后，拖动Transparent滑动条位置来实现。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 278,
    type: "true_false",
    question: "ROBOGUIDE仿真时，可以使物料被抓取后，每隔一段时间自动产生一个新的物料。该功能是通过Part Simulation中设定Allow part to be placed来实现的。",
    answer: "false",
    category: "仿真软件"
  },
  {
    id: 279,
    type: "true_false",
    question: "ROBOGUIDE仿真时，可以使物料被抓取后，再次产生的物料与原始位置具有一定的偏移。该功能是通过设置 Part Random Offset 的值来实现的。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 280,
    type: "true_false",
    question: "ROBOGUIDE 仿真工业机器人工作站时，若添加的工作台（Fixture）过矮，若想使工作台变高，可双击该工作台，打开属性对话框，修改 Scale 的 Z 值为原来的 2 倍。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 281,
    type: "true_false",
    question: "ROBOGUIDE 仿真工业机器人工作站时，要实现把物料放置到某一 Fixture 后，隔一段时间后自动消失，应在 Part Simulation 中设定 Allow part to be picked。",
    answer: "true",
    category: "仿真软件"
  },
  {
    id: 282,
    type: "true_false",
    question: "ROBOGUIDE 仿真工业机器人工作站时，将某 Part 关联到 Fixture 后，若需要移动两者之间的相对距离，需勾选 Part Random Offset 后，再鼠标拖动即可。",
    answer: "false",
    category: "仿真软件"
  },
  {
    id: 283,
    type: "true_false",
    question: "FANUC 工业机器人仿真工具的添加可以通过双击机器人末端的法兰盘来打开工具属性对话框，从而完成工具的添加与修改。",
    answer: "false",
    category: "仿真环境"
  },
  {
    id: 284,
    type: "true_false",
    question: "FANUC 工业机器人仿真工具更换或修改属性时，可以通过双击机器人原有的工具来打开工具属性对话框，从而完成工具的修改。",
    answer: "true",
    category: "仿真环境"
  },
  {
    id: 285,
    type: "true_false",
    question: "FANUC 工业机器人仿真工具既可以通过 CAD Library 中添加现有的工具模型，也可以通过 Add Link 来创建新的仿真工具。",
    answer: "true",
    category: "仿真环境"
  },
  {
    id: 286,
    type: "true_false",
    question: "三点法能设置新的 TCP 点与 J6 轴法兰盘中心的位移，也能设置新的工具坐标系与默认工具坐标的旋转角度。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 287,
    type: "true_false",
    question: "三点法只能设置对应工具坐标系与默认工具坐标系的旋转角度。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 288,
    type: "true_false",
    question: "FANUC 工业机器人的末端执行器只要求确定 TCP 的位置，而可忽略其位姿时，最方便的创建工具坐标系的方法是直接输入法。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 289,
    type: "true_false",
    question: "由于不同学员之间经常会使用同一台机器人训练，自己创建的坐标系经常会被别人删除或更改掉，可以记录自己的坐标系参数，下次再训练时，采用直接输入法重建自己的坐标系。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 290,
    type: "true_false",
    question: "由于不同学员之间经常会使用同一台机器人训练，自己创建的坐标系经常会被别人删除或更改掉，可以在训练结束前，将当前坐标系库文件备份到U盘中，下次再训练时进行加载。",
    answer: "true",
    category: "坐标系"
  },
  {
    id: 291,
    type: "true_false",
    question: "不同学员之间经常会使用同一台机器人训练，自己创建的坐标系经常会被别人删除或更改掉，只能每次训练时，用三点法或六点法创建一次新的坐标系。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 292,
    type: "true_false",
    question: "FANUC工业机器人默认工具坐标系数量有9个。",
    answer: "false",
    category: "坐标系"
  },
  {
    id: 293,
    type: "true_false",
    question: "专用夹具零点标定法，使用专用的零点标定夹具，可进行准确的零点标定。",
    answer: "true",
    category: "系统维护"
  },
  {
    id: 294,
    type: "true_false",
    question: "全轴零点标定法是通过目测进行调节，因此零点标定的精度较低。",
    answer: "true",
    category: "系统维护"
  },
  {
    id: 295,
    type: "true_false",
    question: "简易零点标定是一种用户可以在任意位置进行零点标定的方法。",
    answer: "true",
    category: "系统维护"
  },
  {
    id: 296,
    type: "true_false",
    question: "只要事先将零点标定数据记录下来，当需要零点标定时，将零点标定数据值直接输入到相关系统变量中即可。",
    answer: "false",
    category: "系统维护"
  },
  {
    id: 297,
    type: "true_false",
    question: "工业机器人性能测试包括静态特性测试和动态特性测试，下列属于静态特性测试的是位姿准确度和位姿重复性。",
    answer: "true",
    category: "性能测试"
  },
  {
    id: 298,
    type: "true_false",
    question: "测试前，机器人应按安装说明书进行安装和调整。",
    answer: "true",
    category: "性能测试"
  },
  {
    id: 299,
    type: "true_false",
    question: "在测试前，应对机器人进行各种性能的试操作，在确认机器人一切正常后，再进行测试。",
    answer: "true",
    category: "性能测试"
  },
  {
    id: 300,
    type: "true_false",
    question: "位姿特性和轨迹特性的所有测量项目，都应在空载的情况下进行性能测试。",
    answer: "false",
    category: "性能测试"
  },
  {
    id: 301,
    type: "true_false",
    question: "对所有测试，所用试验载荷的重心都应在机器人产品标准规定的位置上。",
    answer: "true",
    category: "性能测试"
  },
  {
    id: 302,
    type: "true_false",
    question: "根据GB/T12645工业机器人性能测试方法，测量工业机器人位姿特性，如位姿准确度及重复性、距离准确度及重复性时，一般需重复测量30次。",
    answer: "false",
    category: "性能测试"
  }
];

export const totalQuestions = questionBank.length;

// 可选：导出统计函数
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