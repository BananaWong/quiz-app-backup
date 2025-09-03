import React from 'react';

// 图表组件的类型定义
interface ChartColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  background: string;
  border: string;
  borderLight: string;
  success: string;
  [key: string]: string;
}

interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

interface LineChartProps {
  data: ChartDataPoint[];
  title: string;
  colors: ChartColors;
  height?: number;
  showGrid?: boolean;
}

// 简单的线性图表组件
export const LineChart: React.FC<LineChartProps> = ({ data, title, colors, height = 200, showGrid = true }) => {
  if (!data.length) return null;

  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue || 1;

  // 生成SVG路径
  const generatePath = () => {
    const width = 300;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    const points = data.map((point, index) => {
      const x = padding + (index / (data.length - 1)) * chartWidth;
      const y = padding + ((maxValue - point.value) / range) * chartHeight;
      return `${x},${y}`;
    });

    return `M ${points.join(' L ')}`;
  };

  const generateGridLines = () => {
    const lines = [];
    const width = 300;
    const padding = 40;
    const chartHeight = height - padding * 2;
    
    // 水平网格线
    for (let i = 0; i <= 4; i++) {
      const y = padding + (i / 4) * chartHeight;
      lines.push(
        <line
          key={`h-${i}`}
          x1={padding}
          y1={y}
          x2={width - padding}
          y2={y}
          stroke={colors.borderLight}
          strokeWidth="0.5"
          opacity="0.5"
        />
      );
    }

    return lines;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text }}>{title}</h3>
      <div className="relative">
        <svg width="300" height={height} className="overflow-visible">
          {showGrid && generateGridLines()}
          
          {/* 主线条 */}
          <path
            d={generatePath()}
            stroke={colors.primary}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* 数据点 */}
          {data.map((point, index) => {
            const x = 40 + (index / (data.length - 1)) * (300 - 80);
            const y = 40 + ((maxValue - point.value) / range) * (height - 80);
            
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill={colors.primary}
                  stroke="white"
                  strokeWidth="2"
                />
                
                {/* 数值标签 */}
                <text
                  x={x}
                  y={y - 10}
                  textAnchor="middle"
                  fontSize="10"
                  fill={colors.textSecondary}
                  fontWeight="500"
                >
                  {point.value.toFixed(1)}
                </text>
              </g>
            );
          })}
          
          {/* X轴标签 */}
          {data.map((point, index) => {
            if (index % Math.ceil(data.length / 5) === 0) {
              const x = 40 + (index / (data.length - 1)) * (300 - 80);
              return (
                <text
                  key={`label-${index}`}
                  x={x}
                  y={height - 10}
                  textAnchor="middle"
                  fontSize="9"
                  fill={colors.textTertiary}
                >
                  {point.label.length > 6 ? point.label.substring(5) : point.label}
                </text>
              );
            }
            return null;
          })}
        </svg>
        
        {/* Y轴标签 */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-10">
          {[maxValue, maxValue * 0.75, maxValue * 0.5, maxValue * 0.25, minValue].map((value, index) => (
            <span
              key={index}
              className="text-xs"
              style={{ color: colors.textTertiary }}
            >
              {value.toFixed(1)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

interface BarChartProps {
  data: ChartDataPoint[];
  title: string;
  colors: ChartColors;
  height?: number;
}

// 简单的柱状图组件
export const BarChart: React.FC<BarChartProps> = ({ data, title, colors }) => {
  if (!data.length) return null;

  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text }}>{title}</h3>
      <div className="space-y-3">
        {data.slice(0, 8).map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div 
              className="text-xs font-medium min-w-20 text-right"
              style={{ color: colors.textSecondary }}
            >
              {item.label.length > 8 ? item.label.substring(0, 8) + '...' : item.label}
            </div>
            <div className="flex-1 relative">
              <div 
                className="h-6 rounded-full transition-all duration-700 ease-out flex items-center justify-end px-2"
                style={{ 
                  backgroundColor: item.color || colors.primary,
                  width: `${Math.max((item.value / maxValue) * 100, 5)}%`,
                  opacity: 0.8
                }}
              >
                <span 
                  className="text-xs font-semibold text-white"
                  style={{ 
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                  }}
                >
                  {item.value}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface PieChartProps {
  data: ChartDataPoint[];
  title: string;
  colors: ChartColors;
  size?: number;
}

// 饼图组件
export const PieChart: React.FC<PieChartProps> = ({ data, title, colors, size = 200 }) => {
  if (!data.length) return null;

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;
  
  const radius = size / 2 - 10;
  const centerX = size / 2;
  const centerY = size / 2;

  const createArcPath = (startAngle: number, endAngle: number) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return `M ${centerX},${centerY} L ${start.x},${start.y} A ${radius},${radius} 0 ${largeArcFlag} 0 ${end.x},${end.y} Z`;
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const defaultColors = [colors.primary, colors.secondary, colors.accent, '#10b981', '#f59e0b', '#ef4444'];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text }}>{title}</h3>
      <div className="flex items-center space-x-4">
        <svg width={size} height={size}>
          {data.map((item, index) => {
            const angle = (item.value / total) * 360;
            const path = createArcPath(currentAngle, currentAngle + angle);
            const color = item.color || defaultColors[index % defaultColors.length];
            
            currentAngle += angle;
            
            return (
              <path
                key={index}
                d={path}
                fill={color}
                stroke="white"
                strokeWidth="2"
                opacity="0.9"
              />
            );
          })}
          
          {/* 中心圆 */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius * 0.4}
            fill={colors.background}
            stroke={colors.border}
            strokeWidth="1"
          />
          
          {/* 中心文字 */}
          <text
            x={centerX}
            y={centerY}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="12"
            fontWeight="bold"
            fill={colors.text}
          >
            总计
          </text>
          <text
            x={centerX}
            y={centerY + 15}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14"
            fontWeight="bold"
            fill={colors.primary}
          >
            {total}
          </text>
        </svg>
        
        {/* 图例 */}
        <div className="space-y-2">
          {data.map((item, index) => {
            const color = item.color || defaultColors[index % defaultColors.length];
            const percentage = ((item.value / total) * 100).toFixed(1);
            
            return (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="text-sm">
                  <span style={{ color: colors.text }} className="font-medium">
                    {item.label}
                  </span>
                  <br />
                  <span style={{ color: colors.textSecondary }} className="text-xs">
                    {item.value} ({percentage}%)
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface RadarDataPoint {
  label: string;
  value: number;
  maxValue?: number;
}

interface RadarChartProps {
  data: RadarDataPoint[];
  title: string;
  colors: ChartColors;
  size?: number;
}

// 雷达图组件
export const RadarChart: React.FC<RadarChartProps> = ({ data, title, colors, size = 200 }) => {
  if (!data.length) return null;

  const radius = size / 2 - 20;
  const centerX = size / 2;
  const centerY = size / 2;
  const levels = 5;

  // 计算多边形的点
  const getPoint = (angle: number, value: number, maxValue: number = 100) => {
    const radian = (angle - 90) * Math.PI / 180;
    const r = (value / maxValue) * radius;
    return {
      x: centerX + r * Math.cos(radian),
      y: centerY + r * Math.sin(radian)
    };
  };

  // 生成网格线
  const generateGridLevels = () => {
    const elements = [];
    for (let i = 1; i <= levels; i++) {
      const points = data.map((_, index) => {
        const angle = (360 / data.length) * index;
        const point = getPoint(angle, (i / levels) * 100, 100);
        return `${point.x},${point.y}`;
      });
      
      elements.push(
        <polygon
          key={i}
          points={points.join(' ')}
          fill="none"
          stroke={colors.borderLight}
          strokeWidth="0.5"
          opacity="0.5"
        />
      );
    }
    return elements;
  };

  // 生成射线
  const generateAxes = () => {
    return data.map((_, index) => {
      const angle = (360 / data.length) * index;
      const endPoint = getPoint(angle, 100, 100);
      
      return (
        <line
          key={index}
          x1={centerX}
          y1={centerY}
          x2={endPoint.x}
          y2={endPoint.y}
          stroke={colors.borderLight}
          strokeWidth="0.5"
          opacity="0.5"
        />
      );
    });
  };

  // 数据多边形
  const dataPoints = data.map((item, index) => {
    const angle = (360 / data.length) * index;
    const maxValue = item.maxValue || 100;
    return getPoint(angle, Math.min(item.value, maxValue), maxValue);
  });

  const dataPolygon = dataPoints.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text }}>{title}</h3>
      <div className="flex items-center justify-center">
        <svg width={size} height={size}>
          {/* 背景网格 */}
          {generateGridLevels()}
          {generateAxes()}
          
          {/* 数据区域 */}
          <polygon
            points={dataPolygon}
            fill={colors.primary}
            fillOpacity="0.2"
            stroke={colors.primary}
            strokeWidth="2"
          />
          
          {/* 数据点 */}
          {dataPoints.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="3"
              fill={colors.primary}
              stroke="white"
              strokeWidth="2"
            />
          ))}
          
          {/* 标签 */}
          {data.map((item, index) => {
            const angle = (360 / data.length) * index;
            const labelPoint = getPoint(angle, 110, 100);
            
            return (
              <text
                key={index}
                x={labelPoint.x}
                y={labelPoint.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fontWeight="500"
                fill={colors.textSecondary}
              >
                {item.label}
              </text>
            );
          })}
        </svg>
      </div>
      
      {/* 数值显示 */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span style={{ color: colors.textSecondary }}>{item.label}:</span>
            <span style={{ color: colors.text }} className="font-medium">
              {item.value.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};