import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, Download, Trash2, Eye, EyeOff, AlertCircle, CheckCircle, Plus, FileJson, Database, Edit, Save, Copy, Shield, Code } from 'lucide-react';

// 题库管理系统组件
const QuestionBankManager = ({ onClose }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  
  const [customBanks, setCustomBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingBank, setEditingBank] = useState(null);
  const [importError, setImportError] = useState('');
  const [importSuccess, setImportSuccess] = useState('');
  
  const fileInputRef = useRef(null);
  
  // 管理密码（可以根据需要修改）
  const ADMIN_PASSWORD = 'admin2024';
  
  // 从localStorage加载自定义题库
  useEffect(() => {
    const loadCustomBanks = () => {
      try {
        const banks = localStorage.getItem('questionBanks');
        if (banks) {
          setCustomBanks(JSON.parse(banks));
        }
      } catch (error) {
        console.error('加载题库失败:', error);
      }
    };
    
    if (isAuthenticated) {
      loadCustomBanks();
    }
  }, [isAuthenticated]);
  
  // 保存题库到localStorage
  const saveCustomBanks = (banks) => {
    try {
      localStorage.setItem('questionBanks', JSON.stringify(banks));
      setCustomBanks(banks);
      return true;
    } catch (error) {
      console.error('保存题库失败:', error);
      if (error.name === 'QuotaExceededError') {
        setImportError('存储空间不足，请删除一些旧题库');
      } else {
        setImportError('保存失败，请重试');
      }
      return false;
    }
  };
  
  // 验证密码
  const handleAuth = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('密码错误，请重试');
    }
  };
  
  // 解析JavaScript模块内容
  const parseJavaScriptModule = (content) => {
    try {
      // 移除export语句，提取questionBank数组
      const jsContent = content.replace(/export\s+const\s+/g, 'const ');
      
      // 创建一个安全的执行环境
      const func = new Function(jsContent + '; return questionBank;');
      const questions = func();
      
      if (!Array.isArray(questions)) {
        throw new Error('questionBank必须是数组');
      }
      
      return questions;
    } catch (error) {
      throw new Error('JavaScript模块解析失败: ' + error.message);
    }
  };
  
  // 验证题库格式（支持两种格式）
  const validateQuestionBank = (data) => {
    // 检查是否是新格式（直接是题目数组）
    if (Array.isArray(data)) {
      return validateQuestions(data);
    }
    
    // 检查是否是旧格式（包含name和questions）
    if (data.name && Array.isArray(data.questions)) {
      const nameValidation = validateBankName(data.name);
      if (!nameValidation.valid) return nameValidation;
      
      return validateQuestions(data.questions);
    }
    
    return { valid: false, error: '题库格式错误：必须是题目数组或包含name和questions字段的对象' };
  };
  
  // 验证题库名称
  const validateBankName = (name) => {
    if (!name || typeof name !== 'string' || !name.trim()) {
      return { valid: false, error: '题库必须包含有效的名称' };
    }
    return { valid: true };
  };
  
  // 验证题目数组
  const validateQuestions = (questions) => {
    if (!Array.isArray(questions) || questions.length === 0) {
      return { valid: false, error: '题库必须包含至少一道题目' };
    }
    
    // 验证每道题的格式
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const questionValidation = validateSingleQuestion(question, i + 1);
      if (!questionValidation.valid) {
        return questionValidation;
      }
    }
    
    return { valid: true };
  };
  
  // 验证单个题目
  const validateSingleQuestion = (question, index) => {
    // 检查必要字段
    if (!question.id || !question.type || !question.question || question.answer === undefined) {
      return { valid: false, error: `第 ${index} 题格式错误：缺少必要字段（id、type、question、answer）` };
    }
    
    // 验证题目类型
    const validTypes = ['single_choice', 'multiple_choice', 'true_false', 'fill_blank', 'short_answer'];
    if (!validTypes.includes(question.type)) {
      return { valid: false, error: `第 ${index} 题类型错误：${question.type}，支持的类型：${validTypes.join(', ')}` };
    }
    
    // 根据题型验证选项和答案
    if (question.type === 'single_choice') {
      return validateSingleChoice(question, index);
    } else if (question.type === 'multiple_choice') {
      return validateMultipleChoice(question, index);
    } else if (question.type === 'true_false') {
      return validateTrueFalse(question, index);
    }
    
    return { valid: true };
  };
  
  // 验证单选题
  const validateSingleChoice = (question, index) => {
    if (!question.options && !question.optionsWithImages) {
      return { valid: false, error: `第 ${index} 题缺少选项（options）` };
    }
    
    const options = question.options || question.optionsWithImages;
    if (typeof options !== 'object' || Object.keys(options).length < 2) {
      return { valid: false, error: `第 ${index} 题选项至少需要2个` };
    }
    
    if (!Object.keys(options).includes(question.answer)) {
      return { valid: false, error: `第 ${index} 题答案不在选项中` };
    }
    
    return { valid: true };
  };
  
  // 验证多选题
  const validateMultipleChoice = (question, index) => {
    if (!question.options && !question.optionsWithImages) {
      return { valid: false, error: `第 ${index} 题缺少选项（options）` };
    }
    
    const options = question.options || question.optionsWithImages;
    if (typeof options !== 'object' || Object.keys(options).length < 2) {
      return { valid: false, error: `第 ${index} 题选项至少需要2个` };
    }
    
    if (!Array.isArray(question.answer) || question.answer.length < 2) {
      return { valid: false, error: `第 ${index} 题多选题答案必须是包含至少2个选项的数组` };
    }
    
    const optionKeys = Object.keys(options);
    for (const ans of question.answer) {
      if (!optionKeys.includes(ans)) {
        return { valid: false, error: `第 ${index} 题答案 ${ans} 不在选项中` };
      }
    }
    
    return { valid: true };
  };
  
  // 验证判断题
  const validateTrueFalse = (question, index) => {
    const validAnswers = ['true', 'false', true, false, '正确', '错误'];
    if (!validAnswers.includes(question.answer)) {
      return { valid: false, error: `第 ${index} 题判断题答案必须是 true/false 或 "true"/"false"` };
    }
    
    return { valid: true };
  };
  
  // 导入题库
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        let data;
        let bankName = '导入的题库';
        let bankDescription = '通过文件导入的题库';
        
        // 根据文件扩展名判断格式
        if (file.name.endsWith('.js')) {
          // JavaScript模块格式
          const questions = parseJavaScriptModule(e.target.result);
          data = questions;
          
          // 尝试从文件名推断题库名称
          bankName = file.name.replace('.js', '').replace(/([A-Z])/g, ' $1').trim();
          bankDescription = '从JavaScript模块导入的题库';
        } else {
          // JSON格式
          data = JSON.parse(e.target.result);
        }
        
        // 验证题库格式
        const validation = validateQuestionBank(data);
        if (!validation.valid) {
          setImportError(validation.error);
          setImportSuccess('');
          return;
        }
        
        // 处理数据格式，统一为内部格式
        let questions, name, description;
        
        if (Array.isArray(data)) {
          // 新格式：直接是题目数组
          questions = data;
          name = bankName;
          description = bankDescription;
        } else {
          // 旧格式：包含name和questions
          questions = data.questions;
          name = data.name;
          description = data.description || '导入的题库';
        }
        
        // 生成唯一ID并规范化题目格式
        const normalizedQuestions = questions.map((q, index) => {
          const question = { ...q };
          
          // 确保有ID
          if (!question.id) {
            question.id = index + 1;
          }
          
          // 规范化答案格式
          if (question.type === 'true_false') {
            if (question.answer === true || question.answer === '正确') {
              question.answer = 'true';
            } else if (question.answer === false || question.answer === '错误') {
              question.answer = 'false';
            }
          }
          
          return question;
        });
        
        // 创建新的题库对象
        const newBank = {
          id: `custom_${Date.now()}`,
          name: name,
          description: description,
          questions: normalizedQuestions,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        
        // 检查是否已存在同名题库
        const existingBank = customBanks.find(bank => bank.name === newBank.name);
        if (existingBank) {
          if (!confirm(`已存在同名题库"${newBank.name}"，是否覆盖？`)) {
            return;
          }
          // 覆盖现有题库
          const updatedBanks = customBanks.map(bank => 
            bank.name === newBank.name ? { ...newBank, id: bank.id } : bank
          );
          if (saveCustomBanks(updatedBanks)) {
            setImportSuccess(`题库"${newBank.name}"已更新，共 ${newBank.questions.length} 道题`);
            setImportError('');
          }
        } else {
          // 添加新题库
          if (saveCustomBanks([...customBanks, newBank])) {
            setImportSuccess(`成功导入题库"${newBank.name}"，共 ${newBank.questions.length} 道题`);
            setImportError('');
          }
        }
      } catch (error) {
        console.error('导入失败:', error);
        setImportError('文件格式错误：' + error.message);
        setImportSuccess('');
      }
    };
    
    reader.readAsText(file);
    event.target.value = '';
  };
  
  // 导出题库（支持两种格式）
  const handleExport = (bank, format = 'js') => {
    let exportData, fileName, mimeType;
    
    if (format === 'js') {
      // 导出为JavaScript模块格式
      const questionsStr = JSON.stringify(bank.questions, null, 2);
      
      exportData = `// ${bank.name}
export const questionBank = ${questionsStr};

// 统计函数
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

// 题目总数
export const totalQuestions = questionBank.length;
`;
      
      fileName = `${bank.name.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_')}_${new Date().toISOString().split('T')[0]}.js`;
      mimeType = 'text/javascript';
    } else {
      // 导出为JSON格式（兼容旧版本）
      exportData = JSON.stringify({
        name: bank.name,
        description: bank.description,
        questions: bank.questions
      }, null, 2);
      
      fileName = `${bank.name}_题库_${new Date().toISOString().split('T')[0]}.json`;
      mimeType = 'application/json';
    }
    
    const blob = new Blob([exportData], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  
  // 删除题库
  const handleDelete = (bankId) => {
    const bank = customBanks.find(b => b.id === bankId);
    if (!bank) return;
    
    if (confirm(`确定要删除题库"${bank.name}"吗？此操作不可恢复。`)) {
      const updatedBanks = customBanks.filter(b => b.id !== bankId);
      if (saveCustomBanks(updatedBanks)) {
        setImportSuccess(`已删除题库"${bank.name}"`);
        if (selectedBank?.id === bankId) {
          setSelectedBank(null);
        }
      }
    }
  };
  
  // 编辑题库基本信息
  const handleEdit = (bank) => {
    setEditingBank({ ...bank });
    setIsEditing(true);
  };
  
  // 保存编辑
  const handleSaveEdit = () => {
    if (!editingBank.name.trim()) {
      setImportError('题库名称不能为空');
      return;
    }
    
    const updatedBanks = customBanks.map(bank => 
      bank.id === editingBank.id 
        ? { ...editingBank, updatedAt: new Date().toISOString() }
        : bank
    );
    
    if (saveCustomBanks(updatedBanks)) {
      setImportSuccess('题库信息已更新');
      setIsEditing(false);
      setEditingBank(null);
      setImportError('');
      if (selectedBank?.id === editingBank.id) {
        setSelectedBank(editingBank);
      }
    }
  };
  
  // 创建示例题库（更新为符合规范的格式）
  const createSampleBank = () => {
    const sampleBank = {
      name: "示例题库",
      description: "展示不同题型格式的示例题库",
      questions: [
        {
          id: 1,
          type: "single_choice",
          question: "以下哪个是JavaScript的基本数据类型？",
          options: {
            "A": "Array",
            "B": "Object", 
            "C": "String",
            "D": "Function"
          },
          answer: "C",
          category: "基础知识"
        },
        {
          id: 2,
          type: "multiple_choice",
          question: "FDM 3D打印技术的优点包括（可选择多个答案）？",
          options: {
            "A": "设备成本相对较低",
            "B": "操作简单易学",
            "C": "材料选择丰富", 
            "D": "打印精度最高"
          },
          answer: ["A", "B", "C"],
          category: "FDM技术"
        },
        {
          id: 3,
          type: "true_false",
          question: "JavaScript是一种编译型语言。",
          answer: "false",
          category: "基础知识"
        }
      ]
    };
    
    const blob = new Blob([JSON.stringify(sampleBank, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = '示例题库模板.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  
  // 获取题型显示名称
  const getQuestionTypeName = (type) => {
    const typeNames = {
      'single_choice': '单选',
      'multiple_choice': '多选',
      'true_false': '判断',
      'fill_blank': '填空',
      'short_answer': '简答'
    };
    return typeNames[type] || '未知';
  };
  
  // 获取题目统计
  const getBankStats = (bank) => {
    const stats = {};
    let imageCount = 0;
    
    bank.questions.forEach(question => {
      if (!stats[question.type]) {
        stats[question.type] = 0;
      }
      stats[question.type]++;
      
      if (question.hasImage) {
        imageCount++;
      }
    });
    
    return { ...stats, imageCount };
  };
  
  // 渲染认证界面
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
              <Shield className="mr-2" size={24} />
              题库管理系统
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X size={20} className="text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                管理员密码
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAuth();
                    }
                  }}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  placeholder="请输入管理员密码"
                  autoFocus
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            {authError && (
              <div className="flex items-center text-red-600 dark:text-red-400 text-sm">
                <AlertCircle size={16} className="mr-1" />
                {authError}
              </div>
            )}
            
            <button
              onClick={handleAuth}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              进入管理系统
            </button>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            仅限管理员使用
          </div>
        </div>
      </div>
    );
  }
  
  // 渲染管理界面
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-6xl w-full h-[90vh] flex flex-col">
        {/* 标题栏 */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
            <Database className="mr-2" size={24} />
            题库管理系统
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X size={20} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        
        <div className="flex flex-1 overflow-hidden">
          {/* 左侧题库列表 */}
          <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 p-4 overflow-y-auto">
            <div className="mb-4 space-y-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
              >
                <Upload size={18} className="mr-2" />
                导入题库
              </button>
              
              <button
                onClick={createSampleBank}
                className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg transition-colors flex items-center justify-center"
              >
                <FileJson size={18} className="mr-2" />
                下载模板
              </button>
              
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,.js"
                onChange={handleImport}
                className="hidden"
              />
            </div>
            
            {importError && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
                <AlertCircle size={16} className="inline mr-1" />
                {importError}
              </div>
            )}
            
            {importSuccess && (
              <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-600 dark:text-green-400 text-sm">
                <CheckCircle size={16} className="inline mr-1" />
                {importSuccess}
              </div>
            )}
            
            <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
              已导入题库 ({customBanks.length})
            </h3>
            
            <div className="space-y-2">
              {customBanks.length === 0 ? (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <Database size={48} className="mx-auto mb-2 opacity-50" />
                  <p>暂无题库</p>
                  <p className="text-sm mt-1">支持导入 .json 和 .js 格式</p>
                </div>
              ) : (
                customBanks.map((bank) => (
                  <div
                    key={bank.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedBank?.id === bank.id
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500'
                        : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedBank(bank)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 dark:text-gray-100">
                          {bank.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {bank.questions.length} 道题
                        </p>
                      </div>
                      {selectedBank?.id === bank.id && (
                        <CheckCircle size={18} className="text-blue-500" />
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* 右侧题库详情 */}
          <div className="flex-1 p-6 overflow-y-auto">
            {selectedBank ? (
              <div>
                {isEditing && editingBank?.id === selectedBank.id ? (
                  // 编辑模式
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">
                      编辑题库信息
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          题库名称
                        </label>
                        <input
                          type="text"
                          value={editingBank.name}
                          onChange={(e) => setEditingBank({ ...editingBank, name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          题库描述
                        </label>
                        <textarea
                          value={editingBank.description}
                          onChange={(e) => setEditingBank({ ...editingBank, description: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                          rows={3}
                        />
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSaveEdit}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors flex items-center"
                        >
                          <Save size={16} className="mr-1" />
                          保存
                        </button>
                        <button
                          onClick={() => {
                            setIsEditing(false);
                            setEditingBank(null);
                            setImportError('');
                          }}
                          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 font-medium rounded-lg transition-colors"
                        >
                          取消
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // 查看模式
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                          {selectedBank.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {selectedBank.description}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(selectedBank)}
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title="编辑"
                        >
                          <Edit size={18} className="text-gray-600 dark:text-gray-400" />
                        </button>
                        <div className="relative group">
                          <button
                            onClick={() => handleExport(selectedBank, 'js')}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            title="导出为JS模块"
                          >
                            <Code size={18} className="text-gray-600 dark:text-gray-400" />
                          </button>
                        </div>
                        <div className="relative group">
                          <button
                            onClick={() => handleExport(selectedBank, 'json')}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            title="导出为JSON"
                          >
                            <Download size={18} className="text-gray-600 dark:text-gray-400" />
                          </button>
                        </div>
                        <button
                          onClick={() => handleDelete(selectedBank.id)}
                          className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                          title="删除"
                        >
                          <Trash2 size={18} className="text-red-600 dark:text-red-400" />
                        </button>
                      </div>
                    </div>
                    
                    {/* 题库统计信息 */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                          {selectedBank.questions.length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">题目总数</div>
                      </div>
                      {(() => {
                        const stats = getBankStats(selectedBank);
                        return (
                          <>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                {stats.single_choice || 0}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">单选题</div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                {(stats.multiple_choice || 0) + (stats.true_false || 0)}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">多选/判断</div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                {stats.imageCount || 0}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">图片题</div>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
                        题目预览
                      </h4>
                      <div className="space-y-3 max-h-96 overflow-y-auto">
                        {selectedBank.questions.slice(0, 10).map((question, index) => (
                          <div
                            key={question.id}
                            className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                                  {index + 1}. {question.question}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mt-1">
                                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                                    {getQuestionTypeName(question.type)}
                                  </span>
                                  {question.category && (
                                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">
                                      {question.category}
                                    </span>
                                  )}
                                  {question.hasImage && (
                                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded">
                                      📷 图片题
                                    </span>
                                  )}
                                  {question.difficulty && (
                                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded">
                                      {question.difficulty}
                                    </span>
                                  )}
                                </div>
                                {/* 显示答案信息 */}
                                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                  答案: {Array.isArray(question.answer) 
                                    ? question.answer.join(', ') 
                                    : question.answer}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        {selectedBank.questions.length > 10 && (
                          <p className="text-center text-sm text-gray-500 dark:text-gray-400 py-2">
                            还有 {selectedBank.questions.length - 10} 道题目...
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <Database size={64} className="mx-auto mb-4 opacity-50" />
                  <p>请选择一个题库查看详情</p>
                  <p className="text-sm mt-2">支持 JavaScript 模块 (.js) 和 JSON (.json) 格式</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBankManager;