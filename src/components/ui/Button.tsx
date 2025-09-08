import React from 'react';
import { useSettings } from '../../hooks/useSettings';

// 按钮组件类型定义
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  iconPosition?: 'left' | 'right';
}

// 改进的按钮组件
export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  disabled, 
  className = '', 
  icon: Icon, 
  iconPosition = 'left' 
}) => {
  const { settings } = useSettings();
  
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: settings.darkMode 
      ? 'bg-green-600 hover:bg-green-700 text-white border-green-600 shadow-sm' 
      : 'bg-green-500 hover:bg-green-600 text-white border-green-500 shadow-sm',
    secondary: settings.darkMode 
      ? 'bg-gray-700 hover:bg-gray-600 text-gray-100 border-gray-600' 
      : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-200',
    danger: settings.darkMode
      ? 'bg-red-600 hover:bg-red-700 text-white border-red-600 shadow-sm'
      : 'bg-red-500 hover:bg-red-600 text-white border-red-500 shadow-sm',
    success: settings.darkMode
      ? 'bg-green-600 hover:bg-green-700 text-white border-green-600 shadow-sm'
      : 'bg-green-500 hover:bg-green-600 text-white border-green-500 shadow-sm',
    warning: settings.darkMode
      ? 'bg-yellow-600 hover:bg-yellow-700 text-white border-yellow-600 shadow-sm'
      : 'bg-yellow-500 hover:bg-yellow-600 text-white border-yellow-500 shadow-sm',
    ghost: settings.darkMode 
      ? 'bg-transparent hover:bg-gray-800 text-gray-300 border-gray-600' 
      : 'bg-transparent hover:bg-gray-50 text-gray-700 border-gray-200',
  };
  
  const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-4 py-2 text-sm font-medium',
    md: 'px-6 py-3 text-base font-medium',
    lg: 'px-8 py-4 text-lg font-semibold',
  };
  
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-2xl
        border transition-all duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
        disabled:opacity-60 disabled:cursor-not-allowed active:scale-95
        ${variants[variant!]} ${sizes[size!]} ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 20} className="mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 20} className="ml-2" />}
    </button>
  );
};