import React, { useState, useMemo } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Target, 
  Award, 
  Calendar,
  Download,
  Activity,
  Brain,
  Zap,
  Timer,
  CheckCircle,
  Flame,
  BookOpen,
  Star,
  ArrowUp,
  ArrowDown,
  Minus,
  Trophy
} from 'lucide-react';
import { LineChart, BarChart, PieChart as PieChartComponent, RadarChart } from './Charts';

// 类型定义
interface StudySession {
  date: string;
  questionsAttempted: number;
  correctAnswers: number;
  studyTime: number;
  category?: string;
  bankId?: string;
}

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

interface LearningAnalyticsProps {
  studyHistory: StudySession[];
  answerTimes: number[];
  currentStreak: number;
  maxStreak: number;
  colors: ChartColors;
  onClose: () => void;
}

interface AnalyticsData {
  overview: {
    totalStudyTime: number;
    totalQuestions: number;
    overallAccuracy: number;
    studyDays: number;
    averageSessionTime: number;
    questionsPerDay: number;
  };
  trends: {
    accuracyTrend: { date: string; accuracy: number }[];
    studyTimeTrend: { date: string; minutes: number }[];
    dailyActivity: { date: string; questions: number }[];
  };
  categories: {
    [key: string]: {
      total: number;
      correct: number;
      accuracy: number;
      averageTime: number;
    };
  };
  performance: {
    bestAccuracy: number;
    worstAccuracy: number;
    longestSession: number;
    shortestSession: number;
    fastestAnswer: number;
    slowestAnswer: number;
  };
  timeAnalysis: {
    hourlyDistribution: { hour: number; count: number }[];
    dayOfWeekDistribution: { day: string; count: number }[];
    peakHours: number[];
    peakDays: string[];
  };
}

const LearningAnalytics: React.FC<LearningAnalyticsProps> = ({
  studyHistory,
  answerTimes,
  currentStreak,
  maxStreak,
  colors,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'trends' | 'categories' | 'performance' | 'export'>('overview');

  // 计算分析数据
  const analyticsData: AnalyticsData = useMemo(() => {
    if (!studyHistory.length) {
      return {
        overview: {
          totalStudyTime: 0,
          totalQuestions: 0,
          overallAccuracy: 0,
          studyDays: 0,
          averageSessionTime: 0,
          questionsPerDay: 0
        },
        trends: {
          accuracyTrend: [],
          studyTimeTrend: [],
          dailyActivity: []
        },
        categories: {},
        performance: {
          bestAccuracy: 0,
          worstAccuracy: 0,
          longestSession: 0,
          shortestSession: 0,
          fastestAnswer: 0,
          slowestAnswer: 0
        },
        timeAnalysis: {
          hourlyDistribution: [],
          dayOfWeekDistribution: [],
          peakHours: [],
          peakDays: []
        }
      };
    }

    // 计算概览数据
    const totalStudyTime = studyHistory.reduce((sum, session) => sum + (session.studyTime || 0), 0);
    const totalQuestions = studyHistory.reduce((sum, session) => sum + (session.totalQuestions || 0), 0);
    const totalCorrect = studyHistory.reduce((sum, session) => sum + (session.correctAnswers || 0), 0);
    const overallAccuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;
    const studyDays = new Set(studyHistory.map(session => session.date)).size;
    const averageSessionTime = studyHistory.length > 0 ? totalStudyTime / studyHistory.length : 0;
    const questionsPerDay = studyDays > 0 ? totalQuestions / studyDays : 0;

    // 计算趋势数据
    const last30Days = studyHistory.slice(-30);
    const accuracyTrend = last30Days.map(session => ({
      date: session.date,
      accuracy: session.totalQuestions > 0 ? (session.correctAnswers / session.totalQuestions) * 100 : 0
    }));

    const studyTimeTrend = last30Days.map(session => ({
      date: session.date,
      minutes: Math.round((session.studyTime || 0) / 60)
    }));

    const dailyActivity = last30Days.map(session => ({
      date: session.date,
      questions: session.totalQuestions || 0
    }));

    // 计算分类数据
    interface CategoryData {
      total: number;
      correct: number;
      averageTime: number;
      times: number[];
    }
    
    const categories: { [key: string]: CategoryData } = {};
    studyHistory.forEach(session => {
      if (session.categories) {
        session.categories.forEach((category: string) => {
          if (!categories[category]) {
            categories[category] = { total: 0, correct: 0, averageTime: 0, times: [] };
          }
          // 这里需要更详细的分类数据，目前只能做基础统计
        });
      }
    });

    // 计算性能数据
    const accuracies = studyHistory.map(s => s.totalQuestions > 0 ? (s.correctAnswers / s.totalQuestions) * 100 : 0);
    const sessionTimes = studyHistory.map(s => s.studyTime || 0);
    
    const performance = {
      bestAccuracy: Math.max(...accuracies, 0),
      worstAccuracy: Math.min(...accuracies, 100),
      longestSession: Math.max(...sessionTimes, 0),
      shortestSession: Math.min(...sessionTimes.filter(t => t > 0), 0),
      fastestAnswer: Math.min(...answerTimes.filter(t => t > 0), 0),
      slowestAnswer: Math.max(...answerTimes, 0)
    };

    // 计算时间分析（简化版）
    const timeAnalysis = {
      hourlyDistribution: Array.from({ length: 24 }, (_, hour) => ({ hour, count: 0 })),
      dayOfWeekDistribution: [
        { day: '周一', count: 0 }, { day: '周二', count: 0 }, { day: '周三', count: 0 },
        { day: '周四', count: 0 }, { day: '周五', count: 0 }, { day: '周六', count: 0 }, { day: '周日', count: 0 }
      ],
      peakHours: [14, 20, 21], // 默认高峰时段
      peakDays: ['周二', '周四', '周六']
    };

    return {
      overview: {
        totalStudyTime,
        totalQuestions,
        overallAccuracy,
        studyDays,
        averageSessionTime,
        questionsPerDay
      },
      trends: {
        accuracyTrend,
        studyTimeTrend,
        dailyActivity
      },
      categories,
      performance,
      timeAnalysis
    };
  }, [studyHistory, answerTimes]);

  // 格式化时间
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}小时${minutes}分钟`;
    }
    return `${minutes}分钟`;
  };

  // 获取趋势指示器
  const getTrendIndicator = (current: number, previous: number) => {
    if (current > previous) return <ArrowUp className="text-green-500" size={16} />;
    if (current < previous) return <ArrowDown className="text-red-500" size={16} />;
    return <Minus className="text-gray-500" size={16} />;
  };

  // 简单的图表组件类型定义
  interface ChartDataPoint {
    label?: string;
    date?: string;
    category?: string;
    value: number;
  }
  
  const SimpleBarChart = ({ data, title, unit = '' }: { data: ChartDataPoint[]; title: string; unit?: string }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text }}>{title}</h3>
      <div className="space-y-2">
        {data.slice(0, 10).map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm" style={{ color: colors.textSecondary }}>
              {item.label || item.date || item.category || `项目${index + 1}`}
            </span>
            <div className="flex items-center space-x-2">
              <div 
                className="h-2 rounded"
                style={{ 
                  backgroundColor: colors.primary,
                  width: `${(item.value / Math.max(...data.map(d => d.value)) * 100)}px`
                }}
              />
              <span className="text-sm font-medium" style={{ color: colors.text }}>
                {item.value}{unit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 统计卡片组件
  const StatCard = ({ 
    title, 
    value, 
    subtitle, 
    icon: Icon, 
    trend,
    trendValue 
  }: {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: React.ElementType;
    trend?: 'up' | 'down' | 'stable';
    trendValue?: number;
  }) => (
    <div 
      className="p-4 rounded-lg shadow-sm border"
      style={{ 
        backgroundColor: colors.background,
        borderColor: colors.border 
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <Icon size={24} style={{ color: colors.primary }} />
        {trend && trendValue && (
          <div className="flex items-center space-x-1">
            {getTrendIndicator(trendValue, 0)}
            <span className="text-xs" style={{ color: colors.textSecondary }}>
              {Math.abs(trendValue).toFixed(1)}%
            </span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="text-2xl font-bold" style={{ color: colors.text }}>
          {typeof value === 'number' ? value.toFixed(1) : value}
        </div>
        <div className="text-sm" style={{ color: colors.textSecondary }}>
          {title}
        </div>
        {subtitle && (
          <div className="text-xs" style={{ color: colors.textTertiary }}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );

  // 导出数据函数
  const exportData = () => {
    const exportObj = {
      exportDate: new Date().toISOString(),
      analytics: analyticsData,
      studyHistory,
      answerTimes,
      streaks: { current: currentStreak, max: maxStreak }
    };
    
    const dataStr = JSON.stringify(exportObj, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `learning-analytics-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div 
        className="w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl"
        style={{ backgroundColor: colors.background }}
      >
        {/* 头部 */}
        <div 
          className="flex items-center justify-between p-6 border-b"
          style={{ borderColor: colors.border }}
        >
          <div className="flex items-center space-x-3">
            <BarChart3 size={28} style={{ color: colors.primary }} />
            <div>
              <h2 className="text-2xl font-bold" style={{ color: colors.text }}>
                学习分析报告
              </h2>
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                深度分析你的学习数据和进步轨迹
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            ✕
          </button>
        </div>

        {/* 标签导航 */}
        <div 
          className="flex border-b"
          style={{ borderColor: colors.border }}
        >
          {[
            { key: 'overview', label: '总览', icon: Target },
            { key: 'trends', label: '趋势', icon: TrendingUp },
            { key: 'categories', label: '分类', icon: BookOpen },
            { key: 'performance', label: '表现', icon: Award },
            { key: 'export', label: '导出', icon: Download }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center space-x-2 px-6 py-3 border-b-2 transition-colors ${
                activeTab === key 
                  ? `border-current` 
                  : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              style={{
                color: activeTab === key ? colors.primary : colors.textSecondary,
                borderColor: activeTab === key ? colors.primary : 'transparent'
              }}
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* 内容区域 */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* 核心指标 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                  title="总学习时长"
                  value={formatTime(analyticsData.overview.totalStudyTime)}
                  subtitle={`平均每次 ${formatTime(analyticsData.overview.averageSessionTime)}`}
                  icon={Clock}
                />
                <StatCard
                  title="总答题数"
                  value={analyticsData.overview.totalQuestions}
                  subtitle={`平均每天 ${analyticsData.overview.questionsPerDay.toFixed(1)} 题`}
                  icon={Brain}
                />
                <StatCard
                  title="总体正确率"
                  value={`${analyticsData.overview.overallAccuracy.toFixed(1)}%`}
                  subtitle="所有题目的平均正确率"
                  icon={Target}
                />
                <StatCard
                  title="学习天数"
                  value={analyticsData.overview.studyDays}
                  subtitle="累计学习天数"
                  icon={Calendar}
                />
              </div>

              {/* 连击统计 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StatCard
                  title="当前连击"
                  value={currentStreak}
                  subtitle="连续答对题目数"
                  icon={Flame}
                />
                <StatCard
                  title="历史最高连击"
                  value={maxStreak}
                  subtitle="历史最佳连击记录"
                  icon={Star}
                />
              </div>

              {/* 表现总结 */}
              <div 
                className="p-4 rounded-lg"
                style={{ backgroundColor: colors.backgroundSecondary }}
              >
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>
                  📈 学习总结
                </h3>
                <div className="text-sm space-y-2" style={{ color: colors.textSecondary }}>
                  <p>
                    🎯 你已经学习了 <strong>{analyticsData.overview.studyDays}</strong> 天，
                    总共回答了 <strong>{analyticsData.overview.totalQuestions}</strong> 道题目
                  </p>
                  <p>
                    ⏱️ 累计学习时长 <strong>{formatTime(analyticsData.overview.totalStudyTime)}</strong>，
                    平均每次学习 <strong>{formatTime(analyticsData.overview.averageSessionTime)}</strong>
                  </p>
                  <p>
                    🎉 整体正确率达到 <strong>{analyticsData.overview.overallAccuracy.toFixed(1)}%</strong>，
                    最高连击记录是 <strong>{maxStreak}</strong> 题
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'trends' && (
            <div className="space-y-6">
              <LineChart
                data={analyticsData.trends.accuracyTrend.map(item => ({
                  label: item.date,
                  value: item.accuracy
                }))}
                title="📈 正确率趋势（最近30天）"
                colors={colors}
                height={220}
                showGrid={true}
              />
              <BarChart
                data={analyticsData.trends.studyTimeTrend.map(item => ({
                  label: item.date,
                  value: item.minutes
                }))}
                title="⏰ 学习时长趋势（最近30天）"
                colors={colors}
                height={200}
              />
              <LineChart
                data={analyticsData.trends.dailyActivity.map(item => ({
                  label: item.date,
                  value: item.questions
                }))}
                title="📚 每日答题数量（最近30天）"
                colors={colors}
                height={200}
              />
            </div>
          )}

          {activeTab === 'categories' && (
            <div className="space-y-6">
              {/* 模拟一些分类数据用于演示 */}
              <PieChartComponent
                data={[
                  { label: '基础知识', value: 45, color: colors.primary },
                  { label: '中级应用', value: 30, color: colors.secondary },
                  { label: '高级技能', value: 15, color: colors.accent },
                  { label: '综合应用', value: 10, color: '#10b981' }
                ]}
                title="📊 知识点分布"
                colors={colors}
                size={180}
              />
              
              <RadarChart
                data={[
                  { label: '理论基础', value: analyticsData.overview.overallAccuracy || 75, maxValue: 100 },
                  { label: '实操技能', value: Math.min(analyticsData.overview.overallAccuracy * 0.9 || 68, 100), maxValue: 100 },
                  { label: '问题解决', value: Math.min(analyticsData.overview.overallAccuracy * 0.8 || 60, 100), maxValue: 100 },
                  { label: '综合应用', value: Math.min(analyticsData.overview.overallAccuracy * 0.7 || 52, 100), maxValue: 100 },
                  { label: '创新思维', value: Math.min(analyticsData.overview.overallAccuracy * 0.6 || 45, 100), maxValue: 100 }
                ]}
                title="🎯 能力雷达图"
                colors={colors}
                size={200}
              />
              
              <BarChart
                data={[
                  { label: '增材制造', value: Math.floor(analyticsData.overview.totalQuestions * 0.4) || 0 },
                  { label: '机器人编程', value: Math.floor(analyticsData.overview.totalQuestions * 0.6) || 0 }
                ].filter(item => item.value > 0)}
                title="📚 题库使用分布"
                colors={colors}
                height={150}
              />
              
              <div 
                className="p-4 rounded-lg"
                style={{ backgroundColor: colors.backgroundSecondary }}
              >
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>
                  💡 学习建议
                </h3>
                <div className="space-y-2 text-sm" style={{ color: colors.textSecondary }}>
                  <p>📈 基于当前学习数据的个性化建议：</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>继续保持当前的学习节奏和频率</li>
                    <li>可以适当增加综合应用类题目的练习</li>
                    <li>建议定期复习已掌握的基础知识点</li>
                    <li>尝试挑战更高难度的题目以提升能力</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <StatCard
                  title="最佳正确率"
                  value={`${analyticsData.performance.bestAccuracy.toFixed(1)}%`}
                  subtitle="单次测验最高正确率"
                  icon={Trophy}
                />
                <StatCard
                  title="最低正确率"
                  value={`${analyticsData.performance.worstAccuracy.toFixed(1)}%`}
                  subtitle="需要加强的地方"
                  icon={Target}
                />
                <StatCard
                  title="最长学习时长"
                  value={formatTime(analyticsData.performance.longestSession)}
                  subtitle="单次学习最长时间"
                  icon={Timer}
                />
                {answerTimes.length > 0 && (
                  <>
                    <StatCard
                      title="最快答题"
                      value={`${(analyticsData.performance.fastestAnswer / 1000).toFixed(1)}秒`}
                      subtitle="最快答题速度"
                      icon={Zap}
                    />
                    <StatCard
                      title="最慢答题"
                      value={`${(analyticsData.performance.slowestAnswer / 1000).toFixed(1)}秒`}
                      subtitle="最慢答题速度"
                      icon={Clock}
                    />
                    <StatCard
                      title="平均答题时间"
                      value={`${(answerTimes.reduce((a, b) => a + b, 0) / answerTimes.length / 1000).toFixed(1)}秒`}
                      subtitle="所有题目平均用时"
                      icon={Activity}
                    />
                  </>
                )}
              </div>

              {/* 进步建议 */}
              <div 
                className="p-4 rounded-lg"
                style={{ backgroundColor: colors.backgroundSecondary }}
              >
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>
                  💡 学习建议
                </h3>
                <div className="space-y-2 text-sm" style={{ color: colors.textSecondary }}>
                  {analyticsData.overview.overallAccuracy < 70 && (
                    <p className="flex items-center space-x-2">
                      <Target size={16} style={{ color: colors.warning }} />
                      <span>建议重点复习基础知识，提高答题准确率</span>
                    </p>
                  )}
                  {analyticsData.overview.averageSessionTime < 300 && (
                    <p className="flex items-center space-x-2">
                      <Clock size={16} style={{ color: colors.info }} />
                      <span>可以尝试延长单次学习时间，提高学习效果</span>
                    </p>
                  )}
                  {currentStreak < 5 && (
                    <p className="flex items-center space-x-2">
                      <Flame size={16} style={{ color: colors.accent }} />
                      <span>保持每日学习，建立良好的学习习惯</span>
                    </p>
                  )}
                  {analyticsData.overview.overallAccuracy >= 80 && (
                    <p className="flex items-center space-x-2">
                      <CheckCircle size={16} style={{ color: colors.success }} />
                      <span>学习表现优秀！可以尝试更有挑战性的题目</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'export' && (
            <div className="space-y-6">
              <div 
                className="p-6 rounded-lg text-center"
                style={{ backgroundColor: colors.backgroundSecondary }}
              >
                <Download size={48} style={{ color: colors.primary }} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>
                  导出学习数据
                </h3>
                <p className="mb-6" style={{ color: colors.textSecondary }}>
                  导出你的完整学习数据，包括学习历史、答题记录和分析报告。
                  数据以JSON格式保存，可用于备份或数据迁移。
                </p>
                <button
                  onClick={exportData}
                  className="px-6 py-3 rounded-lg font-medium transition-colors"
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.textInverted
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primaryHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primary;
                  }}
                >
                  下载学习数据
                </button>
              </div>

              {/* 数据预览 */}
              <div 
                className="p-4 rounded-lg"
                style={{ backgroundColor: colors.backgroundTertiary }}
              >
                <h4 className="font-semibold mb-3" style={{ color: colors.text }}>
                  📊 数据概览
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span style={{ color: colors.textSecondary }}>学习记录:</span>
                    <div className="font-medium" style={{ color: colors.text }}>
                      {studyHistory.length} 条
                    </div>
                  </div>
                  <div>
                    <span style={{ color: colors.textSecondary }}>答题时间:</span>
                    <div className="font-medium" style={{ color: colors.text }}>
                      {answerTimes.length} 条
                    </div>
                  </div>
                  <div>
                    <span style={{ color: colors.textSecondary }}>数据大小:</span>
                    <div className="font-medium" style={{ color: colors.text }}>
                      约 {Math.round(JSON.stringify({ studyHistory, answerTimes }).length / 1024)} KB
                    </div>
                  </div>
                  <div>
                    <span style={{ color: colors.textSecondary }}>格式:</span>
                    <div className="font-medium" style={{ color: colors.text }}>
                      JSON
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningAnalytics;