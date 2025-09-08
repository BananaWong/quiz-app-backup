import React from 'react';
import { useSettings } from '../../hooks/useSettings';

// 卡片组件类型定义
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

// 改进的卡片组件
export const Card: React.FC<CardProps> = ({ children, className = '', hoverable = false, onClick, style }) => {
  const { settings } = useSettings();
  
  return (
    <div 
      className={`
        rounded-xl border transition-all duration-200
        ${settings.darkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
        }
        ${hoverable 
          ? settings.darkMode 
            ? 'hover:border-gray-600 hover:shadow-lg cursor-pointer' 
            : 'hover:border-gray-300 hover:shadow-lg cursor-pointer'
          : ''
        }
        ${className}
      `}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};