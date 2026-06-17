/**
 * CVE Module Index
 * Export all CVE monitoring, scanning and alerting tools
 */

// CVE Monitor - NVD NIST API Client
export { CveMonitor, CveItem, CveSearchOptions, CveSearchResponse, RateLimitInfo } from './cve-monitor';

// CVE Summarizer - Smart summary generator
export { CveSummarizer, CveSummary, ReportOptions, DigestItem } from './cve-summarizer';

// CVE Alert System - Continuous monitoring
export { CveAlertSystem, AlertFilter, AlertCallback, CveAlert, MonitorConfig, MonitorState } from './cve-alert-system';

// Dependency Scanner - Scan project dependencies for vulnerabilities
export { DependencyScanner, DependencyInfo, VulnerableDependency, ScanOptions as DependencyScanOptions, ScanResult as DependencyScanResult } from './dependency-scanner';

export {
  analyzeCveForJsTsNode,
  categorizeWeaknessText,
  buildHeuristicPlan,
  listKnownJsTsNodeWeaknessSignals,
} from './cve-xploiter';
export type { CveXploiterAnalysis, AtomicSignal, JsTsNodeWeaknessCategory, CveXploiterCveLike } from './cve-xploiter';
