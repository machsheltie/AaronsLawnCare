# MCP Server Usage Guide - Aaron's Lawn Care Website

## Overview
This skill provides intelligent guidance on which MCP servers to use for specific tasks while building the Aaron's Lawn Care marketing website.

## When to Use This Skill
Invoke this skill at the start of any development task to determine which MCP servers should be active and how to leverage them optimally.

---

## MCP Server Decision Matrix

### 🎨 Frontend Development Tasks

**Task: Creating React Components**
- **Primary MCP:** `upstash-context-7-mcp`
  - Query: Latest React 18 hooks patterns (useState, useEffect, useContext)
  - Query: React component lifecycle best practices
  - Query: React Router v6 navigation patterns
- **Secondary MCP:** `memory-integration`
  - Store: Component naming conventions
  - Store: Folder structure decisions
  - Store: State management patterns chosen

**Task: Styling with Tailwind CSS**
- **Primary MCP:** `upstash-context-7-mcp`
  - Query: Tailwind CSS utility classes for responsive design
  - Query: Tailwind configuration for custom colors
  - Query: Tailwind best practices for mobile-first design
- **Secondary MCP:** `chrome-devtools`
  - Use: Inspect computed styles
  - Use: Debug responsive breakpoints
  - Use: Performance profiling of CSS

**Task: Building Forms (Quote Request, Newsletter)**
- **Primary MCP:** `upstash-context-7-mcp`
  - Query: React Hook Form with validation patterns
  - Query: HTML5 form validation
  - Query: Accessible form patterns (WCAG 2.1 AA)
- **Secondary MCP:** `playwright-mcp-server`
  - Use: Automated form testing
  - Use: Validation error testing
  - Use: Cross-browser form submission testing
- **Tertiary MCP:** `chrome-devtools`
  - Use: Debug form submission issues
  - Use: Network tab for form POST inspection

**Task: Implementing Navigation & Routing**
- **Primary MCP:** `upstash-context-7-mcp`
  - Query: React Router v6 setup and configuration
  - Query: Nested routes for service pages
  - Query: Link component best practices
- **Secondary MCP:** `playwright-mcp-server`
  - Use: Test navigation flows
  - Use: Validate all 10 pages are accessible
  - Use: Test mobile navigation menu

---

### 🔍 SEO & Content Tasks

**Task: Implementing SEO Meta Tags**
- **Primary MCP:** `upstash-context-7-mcp`
  - Query: React Helmet or head management in React
  - Query: OpenGraph meta tags
  - Query: Structured data (JSON-LD schema)
- **Secondary MCP:** `chrome-devtools`
  - Use: Inspect meta tags in browser
  - Use: Lighthouse SEO audit
  - Use: Validate structured data

**Task: Image Optimization**
- **Primary MCP:** `chrome-devtools`
  - Use: Lighthouse performance audit
  - Use: Network tab to analyze image load times
  - Use: Performance profiling
- **Secondary MCP:** `upstash-context-7-mcp`
  - Query: React lazy loading patterns
  - Query: Next.js Image component (if applicable)
  - Query: WebP format best practices

**Task: Creating Service Pages (10 pages)**
- **Primary MCP:** `memory-integration`
  - Store: Service page template structure
  - Store: SEO keyword strategy per service
  - Store: Content hierarchy pattern
- **Secondary MCP:** `upstash-context-7-mcp`
  - Query: Dynamic routing for similar pages
  - Query: Component reusability patterns
  - Query: Props drilling vs Context for shared data

---

### 🧪 Testing & Quality Assurance

**Task: E2E Testing for User Flows**
- **Primary MCP:** `playwright-mcp-server`
  - Use: Test quote request flow (form fill → submission → confirmation)
  - Use: Test navigation across all 10 pages
  - Use: Test mobile responsive behavior
  - Use: Screenshot capture for visual regression
- **Secondary MCP:** `chrome-devtools`
  - Use: Debug test failures
  - Use: Inspect element states during tests
  - Use: Network monitoring during tests

**Task: Performance Testing**
- **Primary MCP:** `chrome-devtools`
  - Use: Lighthouse performance audit (target: 90+)
  - Use: Core Web Vitals measurement (LCP, FID, CLS)
  - Use: Bundle size analysis
  - Use: Network waterfall analysis
- **Secondary MCP:** `playwright-mcp-server`
  - Use: Performance metrics collection across pages
  - Use: Load time measurements

**Task: Accessibility Testing**
- **Primary MCP:** `chrome-devtools`
  - Use: Lighthouse accessibility audit (target: 100)
  - Use: Inspect ARIA labels and roles
  - Use: Color contrast checking
  - Use: Keyboard navigation testing
- **Secondary MCP:** `playwright-mcp-server`
  - Use: Automated accessibility tests
  - Use: Keyboard-only navigation testing
  - Use: Screen reader simulation

---

### 🔧 Development Workflow & Tooling

**Task: Project Setup & Configuration**
- **Primary MCP:** `upstash-context-7-mcp`
  - Query: Vite + React + TypeScript setup
  - Query: Tailwind CSS configuration with Vite
  - Query: React Router v6 setup
- **Secondary MCP:** `github-integration`
  - Use: Create GitHub repository
  - Use: Initialize with README and .gitignore
  - Use: Set up branch protection rules

**Task: Version Control & Collaboration**
- **Primary MCP:** `github-integration`
  - Use: Create issues for each of the 10 service pages
  - Use: Create milestones (Planning, Development, Testing, Launch)
  - Use: Commit code with descriptive messages
  - Use: Create pull requests for reviews
- **Secondary MCP:** `memory-integration`
  - Store: Commit message conventions
  - Store: Branch naming strategy
  - Store: Code review checklist

**Task: Documentation & Knowledge Sharing**
- **Primary MCP:** `memory-integration`
  - Store: Component documentation standards
  - Store: Setup instructions for new developers
  - Store: Environment variable requirements
  - Store: Deployment procedures
- **Secondary MCP:** `github-integration`
  - Use: Create wiki pages
  - Use: Document issues and solutions
  - Use: Maintain changelog

---

### 🚀 Deployment & Production

**Task: Pre-Deployment Checklist**
- **Primary MCP:** `chrome-devtools`
  - Use: Final Lighthouse audit (Performance, Accessibility, SEO, Best Practices)
  - Use: Test on multiple browsers (Chrome, Firefox, Safari, Edge)
  - Use: Mobile device simulation
- **Secondary MCP:** `playwright-mcp-server`
  - Use: Run full E2E test suite
  - Use: Test all critical user paths
  - Use: Validate form submissions

**Task: Post-Deployment Monitoring**
- **Primary MCP:** `chrome-devtools`
  - Use: Production performance monitoring
  - Use: Real User Monitoring (RUM) data analysis
  - Use: Console error detection
- **Secondary MCP:** `playwright-mcp-server`
  - Use: Smoke tests on production URL
  - Use: Continuous monitoring tests

**Task: Future Backend Integration (Phase 2+)**
- **Primary MCP:** `supabase`
  - Use: Database schema design
  - Use: API endpoint testing
  - Use: Real-time subscriptions setup
- **Secondary MCP:** `upstash-context-7-mcp`
  - Query: Supabase React integration
  - Query: Authentication patterns
  - Query: Database query optimization

---

## MCP Server Combinations for Common Workflows

### Workflow: Building a New Service Page

1. **Context7** → Get React component patterns and Tailwind utilities
2. **Memory** → Retrieve service page template structure
3. **Context7** → Get SEO meta tag implementation patterns
4. **Chrome DevTools** → Validate meta tags and performance
5. **Playwright** → Test page navigation and responsiveness
6. **GitHub** → Commit changes with issue reference

### Workflow: Implementing Quote Request Form

1. **Context7** → Get React Hook Form patterns and validation
2. **Context7** → Get accessible form design patterns (WCAG)
3. **Chrome DevTools** → Test form in browser, inspect network requests
4. **Playwright** → Automate form testing (validation, submission)
5. **Memory** → Store form handling patterns for newsletter form
6. **GitHub** → Create issue for form spam protection

### Workflow: Performance Optimization Sprint

1. **Chrome DevTools** → Run Lighthouse audit, identify bottlenecks
2. **Context7** → Get React code-splitting and lazy loading patterns
3. **Context7** → Get image optimization techniques
4. **Chrome DevTools** → Measure improvements
5. **Playwright** → Test performance across all pages
6. **Memory** → Document optimization decisions and results

### Workflow: Launch Preparation

1. **Playwright** → Full E2E test suite execution
2. **Chrome DevTools** → Final Lighthouse audits (all 90+)
3. **Chrome DevTools** → Cross-browser compatibility testing
4. **GitHub** → Create release tag and changelog
5. **Memory** → Document launch checklist completion
6. **Playwright** → Production smoke tests

---

## Decision Flowchart

```
START: What are you working on?
│
├─ Frontend Component/UI?
│  ├─ Need documentation? → Context7
│  ├─ Need to test? → Playwright + Chrome DevTools
│  └─ Need to remember pattern? → Memory
│
├─ SEO/Meta Tags?
│  ├─ Implementation patterns? → Context7
│  ├─ Validation? → Chrome DevTools
│  └─ Strategy tracking? → Memory
│
├─ Forms/User Input?
│  ├─ Form library patterns? → Context7
│  ├─ Automated testing? → Playwright
│  ├─ Debug issues? → Chrome DevTools
│  └─ Store patterns? → Memory
│
├─ Performance/Optimization?
│  ├─ Measure metrics? → Chrome DevTools
│  ├─ Automated perf tests? → Playwright
│  ├─ Optimization techniques? → Context7
│  └─ Track improvements? → Memory
│
├─ Version Control/Collaboration?
│  ├─ Repository management? → GitHub
│  ├─ Issue tracking? → GitHub
│  └─ Document conventions? → Memory
│
└─ Future Backend? (Phase 2+)
   ├─ Database operations? → Supabase
   ├─ Integration patterns? → Context7
   └─ API testing? → Playwright
```

---

## Best Practices

### MCP Server Usage Principles

1. **Context7 First** - Always start with documentation lookup for unfamiliar patterns
2. **Test Early** - Use Playwright as soon as UI is functional
3. **Debug Smart** - Chrome DevTools for real-time inspection
4. **Remember Decisions** - Memory for patterns that will repeat
5. **Version Everything** - GitHub for all code changes
6. **Validate Often** - Chrome DevTools Lighthouse after each major feature

### Performance Considerations

- **Context7** queries are fast (HTTP transport, no installation)
- **Chrome DevTools** operations can be slow (actual browser launch)
- **Playwright** tests can be time-consuming (run strategically)
- **Memory** operations are instant (local persistence)
- **GitHub** operations require network (batch when possible)
- **Supabase** not needed until Phase 2+ (keep disabled for now)

### Environment Variables Reminder

Before using **GitHub Integration**:
```bash
GITHUB_PERSONAL_ACCESS_TOKEN=your_token_here
```

Before using **Supabase** (Phase 2+):
```bash
SUPABASE_URL=your_project_url
SUPABASE_SERVICE_ROLE_KEY=your_key
```

---

## Quick Reference Card

| Task | Primary MCP | Secondary MCP | When to Use |
|------|-------------|---------------|-------------|
| React component | Context7 | Memory | Every component |
| Tailwind styling | Context7 | Chrome DevTools | Styling phase |
| Form building | Context7 | Playwright | Quote/Newsletter forms |
| Navigation setup | Context7 | Playwright | Initial routing |
| SEO meta tags | Context7 | Chrome DevTools | Every page |
| Image optimization | Chrome DevTools | Context7 | Assets phase |
| E2E testing | Playwright | Chrome DevTools | After features done |
| Performance audit | Chrome DevTools | Playwright | Pre-launch |
| Accessibility check | Chrome DevTools | Playwright | Every component |
| Git operations | GitHub | Memory | Continuous |
| Documentation | Memory | GitHub | Continuous |
| Backend (future) | Supabase | Context7 | Phase 2+ only |

---

## Success Criteria

You're using MCP servers effectively when:

✅ Context7 is queried before implementing unfamiliar patterns
✅ Memory stores are used for repeating patterns (10 service pages)
✅ Playwright tests exist for all critical user flows
✅ Chrome DevTools Lighthouse scores are 90+ across all metrics
✅ GitHub tracks all development progress with issues/PRs
✅ No environment variable errors for active MCP servers

---

**Last Updated:** 2026-01-11
**Project:** Aaron's Lawn Care Website
**Phase:** Planning & Development
