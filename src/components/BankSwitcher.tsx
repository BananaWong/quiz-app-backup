import React from 'react';
import { X, BookOpen, Database } from 'lucide-react';
import { Button, Card } from './ui';
import { useSettings } from '../hooks/useSettings';
import { useSoundSystem } from '../hooks/useSoundSystem';

interface Bank {
  id: string;
  name: string;
  color: string;
  questionCount: number;
  description?: string;
}

interface BankSwitcherProps {
  isOpen: boolean;
  onClose: () => void;
  availableBanks: Bank[];
  currentBankId: string;
  onSelectBank: (bankId: string) => void;
}

export const BankSwitcher: React.FC<BankSwitcherProps> = ({
  isOpen,
  onClose,
  availableBanks,
  currentBankId,
  onSelectBank,
}) => {
  const { settings } = useSettings();
  const { playSound } = useSoundSystem();

  if (!isOpen) return null;

  const handleSelectBank = async (bankId: string) => {
    if (bankId !== currentBankId) {
      playSound('click');
      await onSelectBank(bankId);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <Card className={`w-full max-w-md max-h-[80vh] overflow-hidden ${
        settings.darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* 标题栏 */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className={`text-lg font-semibold ${
            settings.darkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            选择题库
          </h2>
          <Button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            variant="ghost"
            size="sm"
            icon={X}
          >
          </Button>
        </div>

        {/* 题库列表 */}
        <div className="overflow-y-auto max-h-96">
          {availableBanks.map((bank) => (
            <div
              key={bank.id}
              className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${
                bank.id === currentBankId
                  ? settings.darkMode 
                    ? 'bg-green-900/20 border-green-700' 
                    : 'bg-green-50 border-green-200'
                  : ''
              }`}
              onClick={() => handleSelectBank(bank.id)}
            >
              <div className="flex items-center space-x-3">
                {/* 题库图标 */}
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border"
                  style={{ 
                    backgroundColor: `${bank.color}15`,
                    borderColor: `${bank.color}25`,
                  }}
                >
                  <img 
                    src={`/images/logos/banks/${bank.id}.png`}
                    alt={`${bank.name} Logo`}
                    className="w-6 h-6 rounded-lg object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.nextElementSibling) {
                        (target.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div 
                    className={`w-6 h-6 rounded-lg items-center justify-center text-xs font-medium ${
                      settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} 
                    style={{ 
                      backgroundColor: `${bank.color}40`,
                      display: 'none'
                    }}
                  >
                    <BookOpen size={14} />
                  </div>
                </div>

                {/* 题库信息 */}
                <div className="flex-1">
                  <h3 className={`font-medium ${
                    settings.darkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {bank.name}
                    {bank.id === currentBankId && (
                      <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                        settings.darkMode 
                          ? 'bg-green-600 text-green-100' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        当前
                      </span>
                    )}
                  </h3>
                  <p className={`text-sm ${
                    settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {bank.questionCount > 0 ? `${bank.questionCount} 道题目` : '加载中...'}
                  </p>
                  {bank.description && (
                    <p className={`text-xs mt-1 ${
                      settings.darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {bank.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部信息 */}
        <div className={`p-4 border-t border-gray-200 dark:border-gray-700 text-center ${
          settings.darkMode ? 'bg-gray-750' : 'bg-gray-50'
        }`}>
          <p className={`text-xs ${
            settings.darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <Database size={12} className="inline mr-1" />
            共 {availableBanks.length} 个题库可用
          </p>
        </div>
      </Card>
    </div>
  );
};