#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
华数机器人题库分类整合脚本 - 改进版
将HSR基础和中级题库的分类统一为8个主要分类
"""

import re
import os

# 定义完整的分类映射规则
CATEGORY_MAPPING = {
    # 基础知识与安全
    "基础知识与安全": [
        "华数机器人基础", "华数机器人", "基础知识", "机器人概述", "机器人类型",
        "华数机器人安全", "安全操作", "安全管理", "职业素养", "职业道德", 
        "安全生产法规", "安全教育", "安全防护", "安全培训", "安全标准",
        "电气安全", "消防安全", "安全系统", "安全文化", "安全生产", 
        "安全设计", "设备安全", "工业机器人操作安全", "工业机器人安全",
        "企业管理", "质量管理", "职业规划", "应急管理", "现场管理",
        "工业机器人基础", "机械原理", "安全法规"
    ],
    
    # 编程与指令  
    "编程与指令": [
        "华数机器人编程", "编程基础", "工业机器人编程", "编程技术",
        "工业机器人编程指令", "运动指令", "焊接编程", "PLC编程", 
        "离线编程", "寄存器系统", "数据管理", "文件管理", "工业机器人文件管理"
    ],
    
    # 坐标系与运动控制
    "坐标系与运动控制": [
        "华数机器人坐标系", "坐标系统", "工业机器人坐标系", "华数机器人运动控制",
        "运动控制", "工业机器人运动控制", "轨迹规划", "运动学", "动力学",
        "奇异点处理", "关节限值", "精度控制", "力控制"
    ],
    
    # 系统配置与操作
    "系统配置与操作": [
        "华数机器人系统", "华数机器人示教器", "华数机器人操作", "示教操作",
        "操作模式", "工业机器人运行模式", "华数机器人权限", "系统设置",
        "人机界面", "系统构成", "系统设计", "系统安装", "校准标定"
    ],
    
    # 硬件与IO控制
    "硬件与IO控制": [
        "华数机器人技术参数", "设备参数", "技术参数", "工业机器人性能参数",
        "华数机器人结构", "工业机器人结构", "机械结构", "机械原理", "机械系统",
        "华数机器人I/O", "工业机器人IO", "IO控制", "PLC控制", "PLC技术",
        "PLC基础", "PLC应用", "PLC通信", "PLC监控", "PLC故障诊断", "PLC调试",
        "传感器", "传感器技术", "传感器原理", "机器人传感器", "RFID技术",
        "华数机器人末端执行器", "工业机器人末端执行器", "末端执行器",
        "硬件配置", "工业机器人硬件", "华数机器人外围设备", "外围设备",
        "华数机器人驱动", "驱动系统", "伺服驱动", "传动系统", "气动元件", 
        "气动系统", "设备维护", "华数机器人维护", "电气基础"
    ],
    
    # 应用技术
    "应用技术": [
        "焊接系统", "视觉系统", "工业机器人视觉", "机器人视觉", "打磨系统",
        "码垛应用", "加工应用", "仓储系统", "行业应用", "华数机器人应用", 
        "工业机器人应用", "应用技术", "生产工艺", "虚拟仿真", "仿真技术"
    ],
    
    # 维护与诊断
    "维护与诊断": [
        "维护保养", "故障诊断", "故障处理", "性能测试", "性能分析", 
        "调试技术", "设备管理"
    ],
    
    # 通信与集成
    "通信与集成": [
        "通信技术", "网络通信", "工业机器人系统集成", "智能控制", 
        "控制技术", "华数机器人控制", "控制系统", "电气控制", "电气基础",
        "工业机器人软件", "工业机器人分类", "机器人类型", "标准规范",
        "行业发展", "机械加工基础", "机械系统"
    ]
}

def create_reverse_mapping():
    """创建反向映射字典：原分类 -> 新分类"""
    reverse_map = {}
    for new_category, old_categories in CATEGORY_MAPPING.items():
        for old_category in old_categories:
            reverse_map[old_category] = new_category
    return reverse_map

def consolidate_categories(file_path):
    """整合文件中的分类"""
    reverse_map = create_reverse_mapping()
    
    # 读取文件
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找并替换分类
    def replace_category(match):
        old_category = match.group(1)
        new_category = reverse_map.get(old_category, old_category)  # 保持原分类如果没有映射
        return f'category: "{new_category}"'
    
    # 使用正则表达式替换分类
    new_content = re.sub(r'category: "([^"]*)"', replace_category, content)
    
    # 写回文件
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"已处理文件: {file_path}")

def analyze_unmapped_categories(file_path):
    """分析未映射的分类"""
    reverse_map = create_reverse_mapping()
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    categories = re.findall(r'category: "([^"]*)"', content)
    unmapped = set()
    
    for category in categories:
        if category not in reverse_map:
            unmapped.add(category)
    
    if unmapped:
        print(f"\n{file_path} 中未映射的分类:")
        for cat in sorted(unmapped):
            print(f"  - {cat}")

if __name__ == "__main__":
    # 处理华数机器人题库文件
    files_to_process = [
        "src/questionBanks/robot-coding-HSR-basic.js",
        "src/questionBanks/robot-coding-HSR-mid.js"
    ]
    
    # 首先分析未映射的分类
    print("=== 分析未映射的分类 ===")
    for file_path in files_to_process:
        if os.path.exists(file_path):
            analyze_unmapped_categories(file_path)
    
    print("\n=== 开始整合分类 ===")
    for file_path in files_to_process:
        if os.path.exists(file_path):
            consolidate_categories(file_path)
            print(f"已整合 {file_path} 的分类")
        else:
            print(f"文件不存在: {file_path}")
    
    print("分类整合完成！")
    print("\n新的分类体系:")
    for i, category in enumerate(CATEGORY_MAPPING.keys(), 1):
        print(f"{i}. {category}")