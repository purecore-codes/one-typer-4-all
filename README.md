<p>
<img src="https://i.imgur.com/dUqOBQb.png" alt="1ntruder">
</p>

> **Advanced HTTP Security Scanner & Pentesting Toolkit**
>
> _"Um toolkit completo para testes de segurança HTTP, incluindo scanner de vulnerabilidades, análise de headers, fuzzing e reconhecimento de tecnologias. Ideal para pentesters, desenvolvedores de segurança e equipes de DevSecOps."_

---

## 📦 Instalação

```bash
# Instalação local (para desenvolvimento)
cd path/to/1ntruder
npm i   # ou bun i
```

Para usar globalmente (via `npx` ou como comando instalado):

```bash
# Instalação global (opcional)
npm i -g .   # ou bun i -g .
```

Depois disso os seguintes comandos estarão disponíveis:

- `1ntruder`
- `intruder`

## 🛠️ Funcionalidades Principais

- **HTTP Security Scanner**: Varredura completa de URLs em busca de vulnerabilidades
- **Header Analyzer**: Análise detalhada de headers de segurança com score e recomendações
- **HTTP Fuzzer**: Testes automatizados de SQL Injection, XSS, Path Traversal e mais
- **Technology Reconnaissance**: Detecção de 25+ tecnologias (WordPress, React, Nginx, etc.)
- **Advanced HTTP Client**: Cliente HTTP com retry automático, logging e métricas

## 🚀 Como funciona

1. **Scan** – o `HttpScanner` analisa URLs em busca de vulnerabilidades e configurações inseguras
2. **Analyze** – o `HttpHeaderAnalyzer` avalia headers de segurança e gera scores
3. **Fuzz** – o `HttpFuzzer` testa entradas maliciosas para detectar falhas
4. **Recon** – o `HttpRecon` identifica tecnologias e coleta informações do alvo
5. **Execução** – ao rodar `1ntruder` (ou `intruder`) você acessa todas as ferramentas de pentesting

## 🎮 Como usar

### Via Código TypeScript

```typescript
import { HttpScanner, HttpFuzzer, AdvancedHttpClient } from '1ntruder';

// Scanner de segurança
const scanner = new HttpScanner();
const result = await scanner.scan({
  url: 'https://example.com',
  scanDepth: 'deep'
});

console.log('Vulnerabilidades:', result.vulnerabilities);
console.log('Headers de segurança:', result.securityHeaders);

// Fuzzing
const fuzzer = new HttpFuzzer(new AdvancedHttpClient().getInstance());
const vulns = await fuzzer.performBasicFuzzing('https://target.com');

// Cliente HTTP avançado
const client = new AdvancedHttpClient({ logRequests: true, retryCount: 3 });
const response = await client.get('https://api.example.com');
```

### Via CLI (em desenvolvimento)

```bash
# Scan rápido
1ntruder scan https://example.com

# Scan profundo
1ntruder scan --deep https://example.com

# Fuzzing básico
1ntruder fuzz https://target.com
```

## 📁 Estrutura do Projeto

```
1ntruder/
├── src/
│   ├── pentest/
│   │   ├── http-scanner.ts       # Scanner principal
│   │   ├── header-analyzer.ts    # Análise de headers
│   │   ├── fuzzer.ts             # Testes de fuzzing
│   │   ├── recon.ts              # Reconhecimento
│   │   └── index.ts              # Exports
│   ├── http/
│   │   └── advanced-client.ts    # Cliente HTTP avançado
│   └── index.ts                  # Entry point
├── examples/
│   └── pentest-example.ts        # Exemplos de uso
├── test/                         # Testes unitários
├── PENTEST_GUIDE.md              # Guia completo
└── SECURITY_REPORT.md            # Relatório de segurança
```

## 🔒 Segurança

O 1ntruder utiliza **axios 1.15.0** (última versão), que inclui correções para todas as CVEs conhecidas:
- ✅ CVE-2023-45857 (CSRF Exposure)
- ✅ CVE-2021-3749 (ReDoS)
- ✅ CVE-2020-28168 (SSRF)
- ✅ CVE-2019-10742 (Prototype Pollution)

Execute `npm audit` para verificar vulnerabilidades.

## 📄 Licença

ISC

## 🤝 Contribuindo

Contribuições são bem-vindas! Abra issues e pull requests no repositório.
