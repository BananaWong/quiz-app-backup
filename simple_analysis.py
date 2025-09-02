#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re

def extract_categories_from_file(file_path):
    """从文件中提取分类信息"""
    categories = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # 使用正则表达式提取所有category值
            matches = re.findall(r'category\s*:\s*["\']([^"\']*)["\']', content)
            categories = matches
    except Exception as e:
        print(f"读取文件 {file_path} 时出错: {e}")
    
    return categories

def count_categories(categories):
    """统计分类数量"""
    category_count = {}
    for category in categories:
        if category in category_count:
            category_count[category] += 1
        else:
            category_count[category] = 1
    return category_count

def main():
    # 文件路径
    basic_file = r"C:\Users\banan\OneDrive\桌面\project\src\questionBanks\robot-coding-BNR-basic.js"
    mid_file = r"C:\Users\banan\OneDrive\桌面\project\src\questionBanks\robot-coding-BNR-mid.js"
    
    print("博诺(BNR)题库分类统计分析")
    print("=" * 60)
    
    # 提取分类
    basic_categories = extract_categories_from_file(basic_file)
    mid_categories = extract_categories_from_file(mid_file)
    
    # 统计分类
    basic_count = count_categories(basic_categories)
    mid_count = count_categories(mid_categories)
    
    # 打印基础题库统计
    print(f"\n1. robot-coding-BNR-basic.js 分类统计:")
    print(f"   总题目数量: {len(basic_categories)}")
    print(f"   分类数量: {len(basic_count)}")
    print("   前20个主要分类:")
    sorted_basic = sorted(basic_count.items(), key=lambda x: x[1], reverse=True)
    for i, (category, count) in enumerate(sorted_basic[:20], 1):
        print(f"   {i:2d}. {category:<25} : {count:3d} 题")
    
    # 打印中级题库统计
    print(f"\n2. robot-coding-BNR-mid.js 分类统计:")
    print(f"   总题目数量: {len(mid_categories)}")
    print(f"   分类数量: {len(mid_count)}")
    print("   前20个主要分类:")
    sorted_mid = sorted(mid_count.items(), key=lambda x: x[1], reverse=True)
    for i, (category, count) in enumerate(sorted_mid[:20], 1):
        print(f"   {i:2d}. {category:<25} : {count:3d} 题")
    
    # 对比分析
    all_categories = set(basic_count.keys()) | set(mid_count.keys())
    basic_only = set(basic_count.keys()) - set(mid_count.keys())
    mid_only = set(mid_count.keys()) - set(basic_count.keys())
    common = set(basic_count.keys()) & set(mid_count.keys())
    
    print(f"\n3. 分类对比分析:")
    print(f"   总分类数量: {len(all_categories)}")
    print(f"   仅在基础题库: {len(basic_only)} 个分类")
    print(f"   仅在中级题库: {len(mid_only)} 个分类")
    print(f"   两个题库共有: {len(common)} 个分类")
    
    # 合并统计
    merged_count = {}
    for category, count in basic_count.items():
        merged_count[category] = merged_count.get(category, 0) + count
    for category, count in mid_count.items():
        merged_count[category] = merged_count.get(category, 0) + count
    
    print(f"\n4. 完整分类清单 (按总题目数排序):")
    print(f"   总分类数: {len(merged_count)}")
    print(f"   总题目数: {sum(merged_count.values())}")
    print(f"   {'序号':<4} {'分类名称':<25} {'总数':<6} {'基础':<6} {'中级':<6}")
    print("   " + "-" * 50)
    
    sorted_merged = sorted(merged_count.items(), key=lambda x: x[1], reverse=True)
    for i, (category, total_count) in enumerate(sorted_merged, 1):
        basic_num = basic_count.get(category, 0)
        mid_num = mid_count.get(category, 0)
        print(f"   {i:<4} {category:<25} {total_count:<6} {basic_num:<6} {mid_num:<6}")

if __name__ == "__main__":
    main()