import React from 'react';
import { ChevronLeft, Moon, Sun, Volume2, VolumeX, Maximize, Minimize, Keyboard } from 'lucide-react';
import { Button, Card } from '../ui';
import { useSettings } from '../../hooks/useSettings';
import { useSoundSystem } from '../../hooks/useSoundSystem';

interface SettingsScreenProps {
  onBack: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack }) => {
  const { settings, updateSettings } = useSettings();
  const { playSound } = useSoundSystem();

  const handleToggle = (key: keyof typeof settings, value: any) => {
    playSound('click');
    updateSettings({ [key]: value });
  };

  return (
    <div className="space-y-6">
      {/* 标题栏 */}
      <div className="flex items-center mb-6">
        <Button
          onClick={() => {
            playSound('click');
            onBack();
          }}
          variant="ghost"
          size="sm"
          icon={ChevronLeft}
          className="mr-3"
        >
        </Button>
        <h1 className={`text-xl font-bold ${
          settings.darkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          应用设置
        </h1>
      </div>

      {/* 外观设置 */}
      <Card className="p-4">
        <h2 className={`text-lg font-semibold mb-4 ${
          settings.darkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          外观设置
        </h2>
        
        <div className="space-y-4">
          {/* 暗黑模式 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {settings.darkMode ? (
                <Moon className="text-blue-500" size={20} />
              ) : (
                <Sun className="text-yellow-500" size={20} />
              )}
              <div>
                <p className={`font-medium ${
                  settings.darkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  暗黑模式
                </p>
                <p className={`text-sm ${
                  settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  切换深色主题
                </p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('darkMode', !settings.darkMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.darkMode 
                  ? 'bg-green-600' 
                  : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* 紧凑模式 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Minimize className="text-gray-500" size={20} />
              <div>
                <p className={`font-medium ${
                  settings.darkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  紧凑模式
                </p>
                <p className={`text-sm ${
                  settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  减少界面元素间距
                </p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('compactMode', !settings.compactMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.compactMode 
                  ? 'bg-green-600' 
                  : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.compactMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </Card>

      {/* 学习设置 */}
      <Card className="p-4">
        <h2 className={`text-lg font-semibold mb-4 ${
          settings.darkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          学习设置
        </h2>
        
        <div className="space-y-4">
          {/* 音效开关 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {settings.soundEnabled ? (
                <Volume2 className="text-blue-500" size={20} />
              ) : (
                <VolumeX className="text-gray-500" size={20} />
              )}
              <div>
                <p className={`font-medium ${
                  settings.darkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  音效反馈
                </p>
                <p className={`text-sm ${
                  settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  答题时播放音效
                </p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('soundEnabled', !settings.soundEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.soundEnabled 
                  ? 'bg-green-600' 
                  : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* 自动下一题 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ChevronLeft className="text-green-500 rotate-180" size={20} />
              <div>
                <p className={`font-medium ${
                  settings.darkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  自动下一题
                </p>
                <p className={`text-sm ${
                  settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  答题后自动跳转
                </p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('autoNextQuestion', !settings.autoNextQuestion)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.autoNextQuestion 
                  ? 'bg-green-600' 
                  : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.autoNextQuestion ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* 键盘快捷键 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {settings.keyboardShortcuts ? (
                <Keyboard className="text-purple-500" size={20} />
              ) : (
                <Keyboard className="text-gray-500" size={20} />
              )}
              <div>
                <p className={`font-medium ${
                  settings.darkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  键盘快捷键
                </p>
                <p className={`text-sm ${
                  settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  使用数字键选择答案
                </p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('keyboardShortcuts', !settings.keyboardShortcuts)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.keyboardShortcuts 
                  ? 'bg-green-600' 
                  : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.keyboardShortcuts ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </Card>

      {/* 字体大小 */}
      <Card className="p-4">
        <h2 className={`text-lg font-semibold mb-4 ${
          settings.darkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          显示设置
        </h2>
        
        <div>
          <label className={`block text-sm font-medium mb-2 ${
            settings.darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            字体大小: {settings.fontSize}px
          </label>
          <input
            type="range"
            min="12"
            max="24"
            value={settings.fontSize}
            onChange={(e) => handleToggle('fontSize', parseInt(e.target.value))}
            className={`w-full ${
              settings.darkMode ? 'accent-green-600' : 'accent-green-500'
            }`}
          />
          <div className="flex justify-between text-xs mt-1">
            <span className={settings.darkMode ? 'text-gray-400' : 'text-gray-600'}>小</span>
            <span className={settings.darkMode ? 'text-gray-400' : 'text-gray-600'}>大</span>
          </div>
        </div>
      </Card>

      {/* 底部信息 */}
      <Card className="p-4">
        <h2 className={`text-lg font-semibold mb-4 ${
          settings.darkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          关于应用
        </h2>
        <div className="space-y-2">
          <p className={`text-sm ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            赛育达学习系统 v1.0
          </p>
          <p className={`text-sm ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            专业的1+x证书刷题工具
          </p>
        </div>
      </Card>
    </div>
  );
};