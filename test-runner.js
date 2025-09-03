#!/usr/bin/env node

/**
 * 题库学习应用自动测试脚本
 * 包含：代码质量检查、构建测试、功能测试、性能测试等
 */

import { execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 测试配置
const TEST_CONFIG = {
  // 测试超时时间
  timeout: 30000,
  // 构建超时时间
  buildTimeout: 60000,
  // 开发服务器启动超时
  devServerTimeout: 15000,
  // 测试结果输出目录
  outputDir: './test-results',
  // 是否运行详细测试
  verbose: process.argv.includes('--verbose') || process.argv.includes('-v'),
  // 是否跳过构建测试
  skipBuild: process.argv.includes('--skip-build'),
  // 是否跳过开发服务器测试
  skipDevServer: process.argv.includes('--skip-dev')
};

// 颜色输出工具
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  reset: '\x1b[0m',
  bright: '\x1b[1m'
};

// 日志工具
const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  title: (msg) => console.log(`\n${colors.bright}${colors.cyan}${msg}${colors.reset}\n`),
  debug: (msg) => TEST_CONFIG.verbose && console.log(`${colors.magenta}🔍${colors.reset} ${msg}`)
};

// 测试结果记录
const testResults = {
  total: 0,
  passed: 0,
  failed: 0,
  skipped: 0,
  errors: [],
  warnings: []
};

// 执行命令并捕获输出
function executeCommand(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      cwd: __dirname,
      timeout: options.timeout || TEST_CONFIG.timeout,
      ...options 
    });
    return { success: true, output: result.trim() };
  } catch (error) {
    return { 
      success: false, 
      output: error.stdout ? error.stdout.trim() : '', 
      error: error.stderr ? error.stderr.trim() : error.message 
    };
  }
}

// 检查文件是否存在
function fileExists(filePath) {
  return fs.existsSync(path.resolve(__dirname, filePath));
}

// 检查依赖项
async function checkDependencies() {
  log.title('📦 检查项目依赖');
  testResults.total++;

  // 检查 package.json
  if (!fileExists('package.json')) {
    log.error('package.json 文件不存在');
    testResults.failed++;
    testResults.errors.push('package.json missing');
    return false;
  }

  // 检查 node_modules
  if (!fileExists('node_modules')) {
    log.warning('node_modules 目录不存在，尝试安装依赖...');
    const installResult = executeCommand('npm install', { timeout: 120000 });
    if (!installResult.success) {
      log.error('依赖安装失败');
      testResults.failed++;
      testResults.errors.push('npm install failed');
      return false;
    }
  }

  log.success('项目依赖检查通过');
  testResults.passed++;
  return true;
}

// 代码质量检查
async function lintCheck() {
  log.title('🔍 代码质量检查');
  testResults.total++;

  const lintResult = executeCommand('npm run lint');
  
  if (lintResult.success) {
    log.success('代码质量检查通过');
    testResults.passed++;
    return true;
  } else {
    log.error('代码质量检查失败');
    log.debug(`错误信息: ${lintResult.error}`);
    testResults.failed++;
    testResults.errors.push('lint failed');
    return false;
  }
}

// TypeScript 类型检查
async function typeCheck() {
  log.title('📝 TypeScript 类型检查');
  testResults.total++;

  const tscResult = executeCommand('npx tsc --noEmit');
  
  if (tscResult.success) {
    log.success('TypeScript 类型检查通过');
    testResults.passed++;
    return true;
  } else {
    log.error('TypeScript 类型检查失败');
    log.debug(`错误信息: ${tscResult.error}`);
    testResults.failed++;
    testResults.errors.push('TypeScript type check failed');
    return false;
  }
}

// 项目文件结构检查
async function fileStructureCheck() {
  log.title('📁 项目文件结构检查');
  
  const requiredFiles = [
    'src/App.tsx',
    'src/main.tsx',
    'src/index.css',
    'index.html',
    'vite.config.ts',
    'tsconfig.json',
    'tailwind.config.js'
  ];

  const requiredDirs = [
    'src',
    'src/questionBanks',
    'src/components',
    'public'
  ];

  let allPassed = true;

  // 检查必需文件
  for (const file of requiredFiles) {
    testResults.total++;
    if (fileExists(file)) {
      log.success(`文件存在: ${file}`);
      testResults.passed++;
    } else {
      log.error(`文件缺失: ${file}`);
      testResults.failed++;
      testResults.errors.push(`Missing file: ${file}`);
      allPassed = false;
    }
  }

  // 检查必需目录
  for (const dir of requiredDirs) {
    testResults.total++;
    if (fileExists(dir)) {
      log.success(`目录存在: ${dir}`);
      testResults.passed++;
    } else {
      log.error(`目录缺失: ${dir}`);
      testResults.failed++;
      testResults.errors.push(`Missing directory: ${dir}`);
      allPassed = false;
    }
  }

  return allPassed;
}

// 题库文件检查
async function questionBankCheck() {
  log.title('📚 题库文件检查');
  
  const questionBanksDir = path.resolve(__dirname, 'src/questionBanks');
  if (!fs.existsSync(questionBanksDir)) {
    log.error('题库目录不存在');
    testResults.total++;
    testResults.failed++;
    testResults.errors.push('Question banks directory missing');
    return false;
  }

  const files = fs.readdirSync(questionBanksDir);
  const jsFiles = files.filter(file => file.endsWith('.js'));
  
  testResults.total++;
  if (jsFiles.length > 0) {
    log.success(`发现 ${jsFiles.length} 个题库文件`);
    testResults.passed++;
    
    // 检查题库文件格式
    let validBanks = 0;
    for (const file of jsFiles.slice(0, 3)) { // 检查前3个文件
      try {
        testResults.total++;
        const content = fs.readFileSync(path.join(questionBanksDir, file), 'utf8');
        if (content.includes('export') && content.includes('questionBank')) {
          log.success(`题库格式正确: ${file}`);
          testResults.passed++;
          validBanks++;
        } else {
          log.warning(`题库格式可能有问题: ${file}`);
          testResults.warnings.push(`Question bank format issue: ${file}`);
          testResults.passed++; // 不算失败，只是警告
        }
      } catch (error) {
        log.error(`无法读取题库文件: ${file}`);
        testResults.failed++;
        testResults.errors.push(`Cannot read question bank: ${file}`);
      }
    }
    
    return validBanks > 0;
  } else {
    log.error('没有找到题库文件');
    testResults.failed++;
    testResults.errors.push('No question bank files found');
    return false;
  }
}

// 构建测试
async function buildTest() {
  if (TEST_CONFIG.skipBuild) {
    log.info('跳过构建测试');
    testResults.total++;
    testResults.skipped++;
    return true;
  }

  log.title('🔨 构建测试');
  testResults.total++;

  log.info('开始构建...');
  const buildResult = executeCommand('npm run build', { 
    timeout: TEST_CONFIG.buildTimeout 
  });

  if (buildResult.success) {
    log.success('构建成功');
    
    // 检查构建输出
    if (fileExists('dist')) {
      log.success('构建输出目录存在');
      
      // 检查关键文件
      const distFiles = fs.readdirSync(path.resolve(__dirname, 'dist'));
      if (distFiles.some(file => file.endsWith('.html'))) {
        log.success('HTML 文件生成成功');
        testResults.passed++;
        return true;
      } else {
        log.error('HTML 文件未生成');
        testResults.failed++;
        testResults.errors.push('HTML file not generated');
        return false;
      }
    } else {
      log.error('构建输出目录不存在');
      testResults.failed++;
      testResults.errors.push('Build output directory missing');
      return false;
    }
  } else {
    log.error('构建失败');
    log.debug(`错误信息: ${buildResult.error}`);
    testResults.failed++;
    testResults.errors.push('Build failed');
    return false;
  }
}

// 开发服务器测试
async function devServerTest() {
  if (TEST_CONFIG.skipDevServer) {
    log.info('跳过开发服务器测试');
    testResults.total++;
    testResults.skipped++;
    return true;
  }

  log.title('🚀 开发服务器测试');
  testResults.total++;

  return new Promise((resolve) => {
    log.info('启动开发服务器...');
    
    const devServer = spawn('npm', ['run', 'dev'], {
      cwd: __dirname,
      stdio: ['pipe', 'pipe', 'pipe']
    });

    let serverStarted = false;
    let timeout;

    // 设置超时
    timeout = setTimeout(() => {
      if (!serverStarted) {
        log.error('开发服务器启动超时');
        testResults.failed++;
        testResults.errors.push('Dev server startup timeout');
        devServer.kill();
        resolve(false);
      }
    }, TEST_CONFIG.devServerTimeout);

    // 监听输出
    devServer.stdout.on('data', (data) => {
      const output = data.toString();
      log.debug(`Dev server output: ${output.trim()}`);
      
      if (output.includes('Local:') || output.includes('localhost')) {
        if (!serverStarted) {
          serverStarted = true;
          clearTimeout(timeout);
          log.success('开发服务器启动成功');
          testResults.passed++;
          
          // 等待一秒后关闭服务器
          setTimeout(() => {
            devServer.kill();
            resolve(true);
          }, 1000);
        }
      }
    });

    devServer.stderr.on('data', (data) => {
      const error = data.toString();
      log.debug(`Dev server error: ${error.trim()}`);
      
      if (error.includes('Error') || error.includes('error')) {
        if (!serverStarted) {
          clearTimeout(timeout);
          log.error('开发服务器启动失败');
          testResults.failed++;
          testResults.errors.push('Dev server startup failed');
          devServer.kill();
          resolve(false);
        }
      }
    });

    devServer.on('error', (error) => {
      if (!serverStarted) {
        clearTimeout(timeout);
        log.error(`开发服务器错误: ${error.message}`);
        testResults.failed++;
        testResults.errors.push(`Dev server error: ${error.message}`);
        resolve(false);
      }
    });
  });
}

// 性能检查
async function performanceCheck() {
  log.title('⚡ 性能检查');
  
  // 检查包大小
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const dependencies = Object.keys(packageJson.dependencies || {});
  const devDependencies = Object.keys(packageJson.devDependencies || {});
  
  testResults.total++;
  log.info(`生产依赖: ${dependencies.length} 个`);
  log.info(`开发依赖: ${devDependencies.length} 个`);
  
  if (dependencies.length > 20) {
    log.warning('生产依赖数量较多，可能影响构建大小');
    testResults.warnings.push('High number of production dependencies');
  }
  
  testResults.passed++;
  
  // 检查大文件
  testResults.total++;
  const srcDir = path.resolve(__dirname, 'src');
  let largeFiles = [];
  
  function checkFileSize(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.')) {
        checkFileSize(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const sizeKB = stat.size / 1024;
        if (sizeKB > 100) { // 大于100KB
          largeFiles.push({ file: filePath.replace(__dirname, '.'), size: sizeKB.toFixed(2) });
        }
      }
    }
  }
  
  checkFileSize(srcDir);
  
  if (largeFiles.length > 0) {
    log.warning('发现大文件:');
    largeFiles.forEach(({ file, size }) => {
      log.warning(`  ${file}: ${size}KB`);
    });
    testResults.warnings.push(`Large files found: ${largeFiles.length}`);
  } else {
    log.success('没有发现过大的文件');
  }
  
  testResults.passed++;
  return true;
}

// 创建测试报告
async function generateReport() {
  log.title('📊 测试报告');
  
  // 确保输出目录存在
  if (!fs.existsSync(TEST_CONFIG.outputDir)) {
    fs.mkdirSync(TEST_CONFIG.outputDir, { recursive: true });
  }
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: testResults.total,
      passed: testResults.passed,
      failed: testResults.failed,
      skipped: testResults.skipped,
      successRate: testResults.total > 0 ? ((testResults.passed / testResults.total) * 100).toFixed(2) : 0
    },
    errors: testResults.errors,
    warnings: testResults.warnings,
    environment: {
      node: process.version,
      platform: process.platform,
      cwd: __dirname
    }
  };
  
  // 写入 JSON 报告
  const reportPath = path.join(TEST_CONFIG.outputDir, 'test-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  // 生成 HTML 报告
  const htmlReport = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>测试报告 - ${new Date().toLocaleString()}</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 40px; background: #f5f5f5; }
        .container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 30px; }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center; }
        .stat-card.passed { background: #d4edda; color: #155724; }
        .stat-card.failed { background: #f8d7da; color: #721c24; }
        .stat-card.skipped { background: #fff3cd; color: #856404; }
        .stat-number { font-size: 2em; font-weight: bold; margin-bottom: 5px; }
        .section { margin-bottom: 25px; }
        .section h3 { color: #495057; border-bottom: 2px solid #dee2e6; padding-bottom: 10px; }
        .list { background: #f8f9fa; padding: 15px; border-radius: 5px; }
        .list li { margin: 5px 0; }
        .success-rate { font-size: 1.2em; color: ${report.summary.successRate >= 80 ? '#28a745' : report.summary.successRate >= 60 ? '#ffc107' : '#dc3545'}; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🧪 自动测试报告</h1>
            <p>生成时间: ${new Date().toLocaleString()}</p>
            <p class="success-rate">总体成功率: ${report.summary.successRate}%</p>
        </div>
        
        <div class="summary">
            <div class="stat-card">
                <div class="stat-number">${report.summary.total}</div>
                <div>总计</div>
            </div>
            <div class="stat-card passed">
                <div class="stat-number">${report.summary.passed}</div>
                <div>通过</div>
            </div>
            <div class="stat-card failed">
                <div class="stat-number">${report.summary.failed}</div>
                <div>失败</div>
            </div>
            <div class="stat-card skipped">
                <div class="stat-number">${report.summary.skipped}</div>
                <div>跳过</div>
            </div>
        </div>
        
        ${report.errors.length > 0 ? `
        <div class="section">
            <h3>❌ 错误信息</h3>
            <div class="list">
                <ul>
                    ${report.errors.map(error => `<li>${error}</li>`).join('')}
                </ul>
            </div>
        </div>
        ` : ''}
        
        ${report.warnings.length > 0 ? `
        <div class="section">
            <h3>⚠️ 警告信息</h3>
            <div class="list">
                <ul>
                    ${report.warnings.map(warning => `<li>${warning}</li>`).join('')}
                </ul>
            </div>
        </div>
        ` : ''}
        
        <div class="section">
            <h3>🔧 环境信息</h3>
            <div class="list">
                <p><strong>Node.js版本:</strong> ${report.environment.node}</p>
                <p><strong>运行平台:</strong> ${report.environment.platform}</p>
                <p><strong>工作目录:</strong> ${report.environment.cwd}</p>
            </div>
        </div>
    </div>
</body>
</html>
  `;
  
  const htmlReportPath = path.join(TEST_CONFIG.outputDir, 'test-report.html');
  fs.writeFileSync(htmlReportPath, htmlReport);
  
  log.success(`测试报告已生成:`);
  log.info(`  JSON: ${reportPath}`);
  log.info(`  HTML: ${htmlReportPath}`);
  
  return report;
}

// 显示最终结果
function displayResults(report) {
  console.log('\n' + '='.repeat(50));
  log.title('🎯 测试完成');
  
  if (report.summary.failed === 0) {
    log.success(`所有测试通过! (${report.summary.passed}/${report.summary.total})`);
  } else {
    log.error(`有 ${report.summary.failed} 个测试失败 (${report.summary.passed}/${report.summary.total} 通过)`);
  }
  
  if (report.warnings.length > 0) {
    log.warning(`有 ${report.warnings.length} 个警告`);
  }
  
  log.info(`成功率: ${report.summary.successRate}%`);
  console.log('='.repeat(50) + '\n');
  
  // 返回退出码
  return report.summary.failed === 0 ? 0 : 1;
}

// 主函数
async function runTests() {
  console.log(`${colors.bright}${colors.cyan}`);
  console.log('🧪 题库学习应用 - 自动测试脚本');
  console.log('=====================================');
  console.log(`${colors.reset}\n`);
  
  const startTime = Date.now();
  
  try {
    // 依次执行测试
    await checkDependencies();
    await fileStructureCheck();
    await questionBankCheck();
    await lintCheck();
    await typeCheck();
    await buildTest();
    await devServerTest();
    await performanceCheck();
    
    // 生成报告
    const report = await generateReport();
    
    // 显示结果
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    log.info(`测试耗时: ${duration}秒`);
    
    const exitCode = displayResults(report);
    process.exit(exitCode);
    
  } catch (error) {
    log.error(`测试过程中发生错误: ${error.message}`);
    testResults.failed++;
    testResults.errors.push(`Unexpected error: ${error.message}`);
    
    const report = await generateReport();
    displayResults(report);
    process.exit(1);
  }
}

// 显示帮助信息
function showHelp() {
  console.log(`
🧪 题库学习应用自动测试脚本

用法:
  node test-runner.js [选项]

选项:
  -v, --verbose      显示详细输出
  --skip-build      跳过构建测试
  --skip-dev        跳过开发服务器测试
  -h, --help        显示此帮助信息

测试内容:
  📦 依赖检查       - 检查 package.json 和 node_modules
  📁 文件结构       - 检查项目必需文件和目录
  📚 题库文件       - 检查题库文件格式和内容
  🔍 代码质量       - ESLint 代码风格检查
  📝 类型检查       - TypeScript 类型验证
  🔨 构建测试       - 验证项目构建过程
  🚀 开发服务器     - 测试开发环境启动
  ⚡ 性能检查       - 检查文件大小和依赖

示例:
  node test-runner.js                    # 运行所有测试
  node test-runner.js --verbose          # 详细模式
  node test-runner.js --skip-build       # 跳过构建测试
  `);
}

// 处理命令行参数
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  showHelp();
  process.exit(0);
}

// 运行测试
runTests().catch(error => {
  log.error(`测试脚本执行失败: ${error.message}`);
  process.exit(1);
});