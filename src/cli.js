#!/usr/bin/env node

/**
 * 1ntruder CLI - Advanced HTTP Security Scanner
 * Executado automaticamente durante o build para verificar segurança
 */

const axios = require('axios');
const path = require('path');
const fs = require('fs');

// Cores para terminal
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bold: '\x1b[1m'
};

const logo = `
${colors.cyan}${colors.bold}
 ██╗███╗   ██╗███████╗████████╗ █████╗ ██╗     ██╗     ███████╗██████╗ 
 ██║████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██║     ██║     ██╔════╝██╔══██╗
 ██║██╔██╗ ██║███████╗   ██║   ███████║██║     ██║     █████╗  ██████╔╝
 ██║██║╚██╗██║╚════██║   ██║   ██╔══██║██║     ██║     ██╔══╝  ██╔══██╗
 ██║██║ ╚████║███████║   ██║   ██║  ██║███████╗███████╗███████╗██║  ██║
 ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
${colors.reset}
${colors.white}Advanced HTTP Security Scanner & Pentesting Toolkit${colors.reset}
${colors.yellow}v0.1.0 | ${colors.magenta}PureCore Codes${colors.reset}
`;

function log(msg, type = 'info') {
  const colorMap = {
    info: colors.blue,
    success: colors.green,
    warn: colors.yellow,
    error: colors.red,
    security: colors.magenta
  };
  console.log(`${colorMap[type] || colors.white}[1ntruder]${colors.reset} ${msg}`);
}

function showBanner() {
  console.log(logo);
  log('Security toolkit initialized successfully!', 'success');
  log('Available commands:', 'info');
  console.log(`  ${colors.cyan}npm run scan <url>${colors.reset}        - Run security scan on target`);
  console.log(`  ${colors.cyan}npm run fuzz <url>${colors.reset}        - Perform basic fuzzing tests`);
  console.log(`  ${colors.cyan}npm run recon <url>${colors.reset}       - Technology reconnaissance`);
  console.log(`  ${colors.cyan}npx 1ntruder --help${colors.reset}       - Show all options`);
  console.log('');
}

async function securityCheck() {
  log('Running pre-build security check...', 'security');
  
  try {
    // Verificar versão do axios
    const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
    const axiosVersion = packageJson.dependencies?.axios || packageJson.devDependencies?.axios;
    
    if (axiosVersion) {
      log(`Axios version: ${axiosVersion}`, 'info');
      
      // Versões seguras conhecidas
      const safeVersions = ['^1.15.0', '>=1.15.0', 'latest'];
      const isSafe = safeVersions.some(v => axiosVersion.includes(v));
      
      if (!isSafe && !axiosVersion.includes('1.15')) {
        log('WARNING: Axios version may have known vulnerabilities!', 'warn');
        log('Consider updating to axios@^1.15.0', 'warn');
      } else {
        log('Axios version is secure ✓', 'success');
      }
    }
    
    // Verificar se arquivos de pentest existem
    const requiredFiles = [
      'src/pentest/http-scanner.ts',
      'src/pentest/header-analyzer.ts',
      'src/pentest/fuzzer.ts',
      'src/pentest/recon.ts'
    ];
    
    let missingFiles = [];
    requiredFiles.forEach(file => {
      if (!fs.existsSync(path.join(process.cwd(), file))) {
        missingFiles.push(file);
      }
    });
    
    if (missingFiles.length > 0) {
      log('Missing pentest modules:', 'warn');
      missingFiles.forEach(f => console.log(`  - ${f}`));
    } else {
      log('All pentest modules present ✓', 'success');
    }
    
    log('Security check completed!', 'success');
    return true;
  } catch (error) {
    log(`Security check failed: ${error.message}`, 'error');
    return false;
  }
}

function showWelcome() {
  console.log(logo);
  log('Thank you for installing 1ntruder!', 'success');
  log('Quick start guide:', 'info');
  console.log('');
  console.log(`  ${colors.bold}1. Run a security scan:${colors.reset}`);
  console.log(`     ${colors.cyan}npx 1ntruder scan https://example.com${colors.reset}`);
  console.log('');
  console.log(`  ${colors.bold}2. Test for vulnerabilities:${colors.reset}`);
  console.log(`     ${colors.cyan}npx 1ntruder fuzz https://target.com${colors.reset}`);
  console.log('');
  console.log(`  ${colors.bold}3. Reconnaissance:${colors.reset}`);
  console.log(`     ${colors.cyan}npx 1ntruder recon https://site.com${colors.reset}`);
  console.log('');
  log('Stay safe and hack ethically! 🛡️', 'security');
}

function showHelp() {
  console.log(logo);
  console.log(`${colors.bold}USAGE:${colors.reset}`);
  console.log(`  npx 1ntruder <command> [options]`);
  console.log('');
  console.log(`${colors.bold}COMMANDS:${colors.reset}`);
  console.log(`  scan <url>     Full security scan with header analysis`);
  console.log(`  fuzz <url>     Basic fuzzing tests (SQLi, XSS, Path Traversal)`);
  console.log(`  recon <url>    Technology detection and information gathering`);
  console.log(`  headers <url>  Detailed header security analysis`);
  console.log(`  help           Show this help message`);
  console.log('');
  console.log(`${colors.bold}NPM SCRIPTS:${colors.reset}`);
  console.log(`  npm run scan   - Quick scan (requires URL in .env or args)`);
  console.log(`  npm run fuzz   - Quick fuzz test`);
  console.log(`  npm run recon  - Quick recon`);
  console.log(`  npm run build  - Build project with security checks`);
  console.log('');
  console.log(`${colors.bold}EXAMPLES:${colors.reset}`);
  console.log(`  npx 1ntruder scan https://example.com --depth=deep`);
  console.log(`  npx 1ntruder fuzz https://target.com --payloads=custom`);
  console.log(`  npx 1ntruder recon https://site.com --output=json`);
  console.log('');
  console.log(`${colors.yellow}⚠️  DISCLAIMER: Use only on systems you have permission to test.${colors.reset}`);
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case '--banner':
    case '-b':
      showBanner();
      break;
      
    case '--security-check':
    case '-s':
      await securityCheck();
      break;
      
    case '--welcome':
    case '-w':
      showWelcome();
      break;
      
    case '--help':
    case '-h':
    case 'help':
      showHelp();
      break;
      
    default:
      showBanner();
      log('No command specified. Use --help for usage information.', 'info');
  }
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    log,
    showBanner,
    securityCheck,
    showWelcome,
    showHelp,
    main
  };
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
 * ATOMIC TYPE MANAGER CLI
 * * Este script gerencia a sincronização de tipos entre o projeto local
 * e o cache global do usuário.
 */

const fs = require("fs");
const path = require("path");
const os = require("os");
const { execSync } = require("child_process");

// --- CONFIGURAÇÕES ---

// Pasta Global (na home do usuário)
const USER_HOME = os.homedir();
const GLOBAL_NAMESPACE = ".purecore/atomicbehaviortypes/shared";
const GLOBAL_SHARED_PATH = path.join(USER_HOME, GLOBAL_NAMESPACE, "shared");

// Configurações do Projeto Local
const PROJECT_ROOT = process.cwd();
const SRC_DIR = path.join(PROJECT_ROOT, "src");
const LOCAL_TYPES_DIR = path.join(SRC_DIR, "types");
const LOCAL_SHARED_LINK_DIR = path.join(LOCAL_TYPES_DIR, "shared"); // Onde os symlinks ficarão
const INDEX_FILE = path.join(LOCAL_TYPES_DIR, "index.ts");

// Padrão de arquivos de tipos para buscar (ex: user.type.ts ou *.at.ts)
// Vamos assumir que seus tipos terminam com .type.ts ou .interface.ts
const TYPE_FILE_SUFFIX = ".type.ts";

// --- UTILITÁRIOS ---

function log(msg, type = "info") {
  const colors = {
    info: "\x1b[36m%s\x1b[0m", // Cyan
    success: "\x1b[32m%s\x1b[0m", // Green
    warn: "\x1b[33m%s\x1b[0m", // Yellow
    error: "\x1b[31m%s\x1b[0m", // Red
  };
  console.log(colors[type] || colors.info, `[AtomicCLI] ${msg}`);
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Varre pastas recursivamente
function findFiles(dir, suffix, fileList = []) {
  // Segurança: Resolve o caminho absoluto e verifica se está dentro do SRC_DIR
  const absoluteDir = path.resolve(dir);
  if (!absoluteDir.startsWith(SRC_DIR)) {
    log(`Tentativa de acesso fora do diretório permitido: ${absoluteDir}`, "warn");
    return fileList;
  }

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.lstatSync(filePath); // Usa lstatSync para detectar symlinks

    // Ignora node_modules, a pasta de tipos gerados e symlinks para evitar loops e escapes
    if (
      filePath.includes("node_modules") ||
      filePath.includes(LOCAL_TYPES_DIR) ||
      stat.isSymbolicLink()
    )
      return;

    if (stat.isDirectory()) {
      findFiles(filePath, suffix, fileList);
    } else if (file.endsWith(suffix)) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// --- COMANDOS PRINCIPAIS ---

/**
 * 1. HARVEST (COLHEITA)
 * Varre o src, pega os tipos originais e atualiza a Global Store
 */
function harvestTypes() {
  log("Iniciando varredura de tipos locais...", "info");
  ensureDir(GLOBAL_SHARED_PATH);

  const files = findFiles(SRC_DIR, TYPE_FILE_SUFFIX);

  if (files.length === 0) {
    log("Nenhum arquivo de tipo encontrado para exportar.", "warn");
    return [];
  }

  const processedFiles = [];

  files.forEach((filePath) => {
    const filename = path.basename(filePath);

    // Segurança: Impede path traversal no nome do arquivo
    if (filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
      log(`Nome de arquivo inválido detectado: ${filename}`, "error");
      return;
    }

    const content = fs.readFileSync(filePath, "utf-8");
    const globalPath = path.join(GLOBAL_SHARED_PATH, filename);

    // Opcional: Verificar se o conteúdo mudou antes de escrever (hash)
    // Aqui vamos apenas sobrescrever para garantir a versão mais recente
    fs.writeFileSync(globalPath, content);
    processedFiles.push(filename);
    log(`Sincronizado globalmente: ${filename}`, "success");
  });

  return processedFiles;
}

/**
 * 2. LINK (VINCULAÇÃO)
 * Cria symlinks no projeto local apontando para a Global Store
 * Baseado no que foi encontrado ou no que já existe na global.
 */
function linkTypes() {
  log("Gerando links simbólicos e index...", "info");

  // Limpa e recria a pasta local de links compartilhados
  if (fs.existsSync(LOCAL_SHARED_LINK_DIR)) {
    fs.rmSync(LOCAL_SHARED_LINK_DIR, { recursive: true, force: true });
  }
  ensureDir(LOCAL_SHARED_LINK_DIR);

  // Pega tudo que está na pasta Global
  // (Num cenário real, você filtraria apenas o que o projeto usa lendo os imports)
  const globalFiles = fs
    .readdirSync(GLOBAL_SHARED_PATH)
    .filter((f) => f.endsWith(TYPE_FILE_SUFFIX));
  const exports = [];

  globalFiles.forEach((file) => {
    const sourcePath = path.join(GLOBAL_SHARED_PATH, file);
    const destPath = path.join(LOCAL_SHARED_LINK_DIR, file);

    // Segurança: Verifica se o sourcePath está realmente dentro de GLOBAL_SHARED_PATH
    const absoluteSource = path.resolve(sourcePath);
    if (!absoluteSource.startsWith(GLOBAL_SHARED_PATH)) {
      log(`Tentativa de linkar arquivo fora do diretório global: ${absoluteSource}`, "error");
      return;
    }

    try {
      // Cria o Link Simbólico
      // 'junction' é melhor para Windows, 'file' para Linux/Mac
      const linkType = os.platform() === "win32" ? "junction" : "file";

      // Nota: Para arquivos no Windows, fs.symlink requer perm de admin às vezes.
      // Copiar é mais seguro se não tiver perm, mas Symlink é o pedido.
      // Vamos tentar criar symlink.
      fs.symlinkSync(sourcePath, destPath, linkType);

      // Remove a extensão .ts para o import
      const importName = file.replace(".ts", "");
      exports.push(`export * from './shared/${importName}';`);
    } catch (err) {
      log(`Erro ao linkar ${file}: ${err.message}`, "error");
    }
  });

  return exports;
}

/**
 * 3. GENERATE INDEX
 * Cria o arquivo central de exportação
 */
function generateIndex(exports) {
  const header = `/**
 * ARQUIVO GERADO AUTOMATICAMENTE PELO ATOMIC CLI
 * NÃO EDITE MANUALMENTE ESTE ARQUIVO.
 * * Tipos sincronizados de: ${GLOBAL_SHARED_PATH}
 */\n\n`;

  const content = header + exports.join("\n");
  fs.writeFileSync(INDEX_FILE, content);
  log(`Arquivo de índice gerado em: ${INDEX_FILE}`, "success");
}

// --- EXECUÇÃO ---

function main() {
  try {
    log("=== ATOMIC TYPE MANAGER ===", "info");

    // 1. Pega tipos espalhados no projeto e joga pra global
    const harvested = harvestTypes();

    // 2. Cria estrutura local baseada na global (Symlinks)
    const exportLines = linkTypes();

    // 3. Gera o arquivo de entrada para o TS reconhecer
    generateIndex(exportLines);

    log("Sincronização concluída com sucesso!", "success");
    log('Agora você pode importar de "src/types"', "info");
  } catch (error) {
    log(`Falha crítica: ${error.message}`, "error");
    console.error(error);
    process.exit(1);
  }
}

// Export functions for testing purposes
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    log,
    ensureDir,
    findFiles,
    harvestTypes,
    linkTypes,
    generateIndex,
    main,
    // Configuration constants for testing
    GLOBAL_SHARED_PATH,
    LOCAL_TYPES_DIR,
    LOCAL_SHARED_LINK_DIR,
    INDEX_FILE,
    TYPE_FILE_SUFFIX,
    PROJECT_ROOT,
    SRC_DIR
  };
}

// Only run main if this is the main module (not required by another module)
if (require.main === module) {
  main();
}
