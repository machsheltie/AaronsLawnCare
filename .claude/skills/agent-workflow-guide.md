# Agent & Subagent Workflow Guide - Aaron's Lawn Care Website

## Overview
This skill provides intelligent guidance on which agents, subagents, and workflows to use for specific tasks while building the Aaron's Lawn Care marketing website.

## When to Use This Skill
Invoke this skill when planning any development task to determine the optimal agent orchestration strategy.

---

## Agent Selection Matrix

### 🏗️ Architecture & Planning Tasks

**Task: Initial Project Architecture Design**
- **Agent:** `feature-dev:code-architect`
- **Purpose:** Design overall React application architecture
- **Deliverables:**
  - Component hierarchy design
  - Folder structure recommendations
  - State management approach
  - Routing configuration
  - Build system setup
- **When:** Before writing any code
- **Follow-up:** Store decisions in memory-integration MCP

**Task: Exploring Existing React/Tailwind Patterns**
- **Agent:** `Explore` with thoroughness="very thorough"
- **Purpose:** Research best practices for marketing websites
- **Deliverables:**
  - Component patterns
  - Routing strategies
  - SEO implementations
  - Form handling approaches
- **When:** Early planning phase
- **Follow-up:** Document findings for team

**Task: Creating Implementation Plans**
- **Agent:** `Plan`
- **Purpose:** Break down features into actionable steps
- **Deliverables:**
  - Step-by-step implementation guide
  - File creation/modification list
  - Testing strategy
  - Risk assessment
- **When:** Before major features (quote form, gallery, navigation)
- **Follow-up:** Use EnterPlanMode for approval

---

### 💻 Frontend Development Tasks

**Task: Building React Components**
- **Agent:** `frontend-mobile-development:frontend-developer`
- **Purpose:** Create production-ready React components
- **Deliverables:**
  - Functional React components
  - Responsive layouts
  - Accessible markup (WCAG 2.1 AA)
  - State management
  - Props validation
- **When:** Building any UI component
- **MCP Integration:** Use Context7 for React patterns
- **Skills:** Can use `frontend-design:frontend-design` for UI creativity

**Task: TypeScript Type Safety**
- **Agent:** `javascript-typescript:typescript-pro`
- **Purpose:** Implement strict TypeScript patterns
- **Deliverables:**
  - Type definitions
  - Interface declarations
  - Generic types
  - Type guards
- **When:** Setting up types or fixing type errors
- **Note:** Aaron's Lawn Care may use JavaScript - adjust as needed

**Task: JavaScript Best Practices**
- **Agent:** `javascript-typescript:javascript-pro`
- **Purpose:** Modern ES6+ JavaScript patterns
- **Deliverables:**
  - Clean async/await patterns
  - Proper error handling
  - Modern array/object methods
  - Module organization
- **When:** Writing core JavaScript logic

---

### 🎨 SEO & Content Creation

**Task: SEO Strategy & Implementation**
- **Agent:** `seo-content-creation:seo-content-planner`
- **Purpose:** Plan comprehensive SEO approach
- **Deliverables:**
  - Content calendar for 10 service pages
  - Keyword strategy per page
  - Topic cluster design
  - Internal linking structure
- **When:** Before creating content
- **Criticality:** HIGH - This is a local business marketing site

**Task: Writing Optimized Service Page Content**
- **Agent:** `seo-content-creation:seo-content-writer`
- **Purpose:** Create SEO-optimized content
- **Deliverables:**
  - Service page content (10 pages)
  - Keyword-rich headings
  - Meta descriptions
  - Engaging copy
- **When:** Creating each service page
- **Input Needed:** Keywords from PRD

**Task: Meta Tags & Technical SEO**
- **Agent:** `seo-technical-optimization:seo-meta-optimizer`
- **Purpose:** Optimize meta tags and technical SEO
- **Deliverables:**
  - Meta titles (50-60 chars)
  - Meta descriptions (150-160 chars)
  - URL slugs
  - OpenGraph tags
- **When:** For each page created
- **Validation:** Use Chrome DevTools MCP

**Task: Structured Data Implementation**
- **Agent:** `seo-technical-optimization:seo-structure-architect`
- **Purpose:** Implement schema markup
- **Deliverables:**
  - LocalBusiness JSON-LD schema
  - Service schema markup
  - Review schema
  - Breadcrumb schema
- **When:** After pages are built
- **Validation:** Google Rich Results Test

**Task: Keyword Optimization**
- **Agent:** `seo-technical-optimization:seo-keyword-strategist`
- **Purpose:** Optimize keyword density and semantic variations
- **Deliverables:**
  - Primary keyword placement
  - LSI keyword suggestions
  - Semantic variations
  - Keyword density analysis
- **When:** After content is written
- **Target:** Louisville, Kentucky local keywords

**Task: Featured Snippet Optimization**
- **Agent:** `seo-technical-optimization:seo-snippet-hunter`
- **Purpose:** Format content for featured snippets
- **Deliverables:**
  - FAQ sections
  - How-to formats
  - List structures
  - Table formats
- **When:** After initial content creation
- **Goal:** Capture local service search snippets

**Task: Content Quality Audit**
- **Agent:** `seo-content-creation:seo-content-auditor`
- **Purpose:** Review content for quality and E-E-A-T signals
- **Deliverables:**
  - Content quality score
  - E-E-A-T improvements
  - Readability analysis
  - Improvement recommendations
- **When:** Before publishing
- **Focus:** 20 years experience emphasis

---

### 🧪 Testing & Quality Assurance

**Task: Automated Testing Setup**
- **Agent:** `unit-testing:test-automator` or `full-stack-orchestration:test-automator`
- **Purpose:** Create comprehensive test suite
- **Deliverables:**
  - Component unit tests
  - Integration tests
  - E2E test scenarios
  - Test coverage reports
- **When:** Alongside component development
- **MCP Integration:** Use Playwright MCP for E2E tests

**Task: Debugging Issues**
- **Agent:** `debugging-toolkit:debugger` or `error-debugging:debugger`
- **Purpose:** Diagnose and fix bugs
- **Deliverables:**
  - Root cause analysis
  - Bug fix implementation
  - Regression tests
  - Documentation of fix
- **When:** When encountering errors
- **MCP Integration:** Use Chrome DevTools MCP

**Task: Performance Optimization**
- **Agent:** `application-performance:performance-engineer`
- **Purpose:** Optimize website performance
- **Deliverables:**
  - Performance analysis
  - Code splitting implementation
  - Image optimization
  - Caching strategy
  - Bundle size reduction
- **When:** Before launch (target: Lighthouse 90+)
- **MCP Integration:** Chrome DevTools for profiling

**Task: Accessibility Audit**
- **Agent:** `accessibility-compliance:ui-visual-validator`
- **Purpose:** Ensure WCAG 2.1 AA compliance
- **Deliverables:**
  - Accessibility audit report
  - ARIA label fixes
  - Keyboard navigation improvements
  - Color contrast adjustments
  - Screen reader compatibility
- **When:** For each component and page
- **Target:** 100% accessibility score
- **MCP Integration:** Chrome DevTools accessibility audit

---

### 📝 Code Quality & Review

**Task: Code Review Before Commit**
- **Agent:** `code-review-ai:architect-review` or `comprehensive-review:code-reviewer`
- **Purpose:** Review code for quality, patterns, and best practices
- **Deliverables:**
  - Code quality assessment
  - Architecture integrity check
  - Best practices validation
  - Improvement suggestions
- **When:** Before major commits
- **Focus:** Component reusability, maintainability

**Task: Security Review**
- **Agent:** `comprehensive-review:security-auditor` or `security-compliance:security-auditor`
- **Purpose:** Identify security vulnerabilities
- **Deliverables:**
  - XSS vulnerability assessment
  - CSRF protection check
  - Input sanitization validation
  - Secure form handling
- **When:** Before launch
- **Critical:** Quote form must be secure

**Task: Technical Documentation**
- **Agent:** `code-documentation:docs-architect`
- **Purpose:** Create comprehensive documentation
- **Deliverables:**
  - Component documentation
  - Setup instructions
  - Deployment guide
  - Maintenance procedures
- **When:** Throughout development
- **Output:** README, component docs

**Task: Architecture Decision Records**
- **Agent:** `code-review-ai:architect-review`
- **Purpose:** Document architectural decisions
- **Deliverables:**
  - ADR documents
  - Trade-off analysis
  - Decision rationale
  - Alternative approaches considered
- **When:** After major architectural decisions
- **Storage:** Memory MCP + GitHub docs

---

### 🚀 Deployment & Operations

**Task: CI/CD Pipeline Setup**
- **Agent:** `cicd-automation:deployment-engineer`
- **Purpose:** Set up automated deployment
- **Deliverables:**
  - GitHub Actions workflow (or similar)
  - Build automation
  - Test automation in pipeline
  - Deployment to Netlify
- **When:** Early in project (after initial components)
- **Target Platform:** Netlify

**Task: Deployment Strategy**
- **Agent:** `deployment-strategies:deployment-engineer`
- **Purpose:** Plan deployment approach
- **Deliverables:**
  - Deployment checklist
  - Environment configuration
  - Rollback procedures
  - Launch plan
- **When:** Before first deployment
- **Hosting:** Netlify static hosting

**Task: Performance Monitoring Setup**
- **Agent:** `observability-monitoring:observability-engineer`
- **Purpose:** Set up monitoring and analytics
- **Deliverables:**
  - Google Analytics 4 setup
  - Core Web Vitals monitoring
  - Error tracking
  - User behavior analytics
- **When:** During deployment
- **Tools:** Google Analytics, Netlify Analytics

---

### 🔄 Workflow Orchestration (Complex Tasks)

**Workflow: Feature Development (Multi-Step)**
- **Skill:** `workflows:feature-development`
- **Purpose:** Orchestrate complete feature implementation
- **Agents Involved:**
  1. Plan agent (architecture)
  2. Frontend developer (implementation)
  3. Test automator (testing)
  4. Code reviewer (review)
- **When:** Building complex features (quote form, gallery)
- **Example:** "Build quote request form with validation"

**Workflow: Full Stack Review**
- **Skill:** `workflows:full-review`
- **Purpose:** Comprehensive pre-launch review
- **Agents Involved:**
  1. Code reviewer (code quality)
  2. Security auditor (security)
  3. Performance engineer (performance)
  4. Accessibility validator (accessibility)
- **When:** Before launch
- **Output:** Launch readiness report

**Workflow: Performance Optimization Sprint**
- **Skill:** `workflows:performance-optimization`
- **Purpose:** End-to-end performance improvements
- **Agents Involved:**
  1. Performance engineer (analysis)
  2. Frontend developer (optimizations)
  3. Deployment engineer (CDN/caching)
  4. Test automator (performance tests)
- **When:** After initial development, before launch
- **Target:** Lighthouse 90+ all metrics

**Workflow: SEO Optimization Campaign**
- **Custom Orchestration:**
  1. `seo-content-creation:seo-content-planner` - Strategy
  2. `seo-content-creation:seo-content-writer` - Content
  3. `seo-technical-optimization:seo-meta-optimizer` - Meta tags
  4. `seo-technical-optimization:seo-structure-architect` - Schema
  5. `seo-content-creation:seo-content-auditor` - Final audit
- **When:** For each of the 10 service pages
- **Critical:** This is a local marketing website

---

## Task-to-Agent Quick Reference

| Task Category | Primary Agent | Secondary Agent | Skill Alternative |
|--------------|---------------|-----------------|-------------------|
| **Project Setup** | feature-dev:code-architect | Explore | - |
| **React Components** | frontend-developer | javascript-pro | frontend-design:frontend-design |
| **Styling (Tailwind)** | frontend-developer | - | - |
| **Forms & Validation** | frontend-developer | backend-security-coder | - |
| **Navigation/Routing** | frontend-developer | javascript-pro | - |
| **SEO Strategy** | seo-content-planner | seo-keyword-strategist | - |
| **Content Writing** | seo-content-writer | seo-content-auditor | - |
| **Meta Tags** | seo-meta-optimizer | seo-structure-architect | - |
| **Schema Markup** | seo-structure-architect | - | - |
| **Testing** | test-automator | debugger | workflows:tdd-cycle |
| **Debugging** | debugger | error-detective | workflows:smart-fix |
| **Performance** | performance-engineer | observability-engineer | workflows:performance-optimization |
| **Accessibility** | ui-visual-validator | frontend-developer | - |
| **Code Review** | code-reviewer | architect-review | workflows:full-review |
| **Security Audit** | security-auditor | backend-security-coder | workflows:security-hardening |
| **Documentation** | docs-architect | tutorial-engineer | - |
| **Deployment** | deployment-engineer | devops-troubleshooter | - |
| **Monitoring** | observability-engineer | performance-engineer | - |

---

## Decision Flowchart

```
START: What type of task?
│
├─ PLANNING / ARCHITECTURE?
│  ├─ New feature architecture? → feature-dev:code-architect
│  ├─ Research patterns? → Explore (very thorough)
│  ├─ Create implementation plan? → Plan
│  └─ Document decision? → Memory MCP + architect-review
│
├─ FRONTEND DEVELOPMENT?
│  ├─ React components? → frontend-developer
│  ├─ TypeScript types? → typescript-pro
│  ├─ JavaScript logic? → javascript-pro
│  └─ Creative UI design? → frontend-design skill
│
├─ SEO & CONTENT? (CRITICAL FOR THIS PROJECT!)
│  ├─ SEO strategy? → seo-content-planner
│  ├─ Write content? → seo-content-writer
│  ├─ Optimize meta tags? → seo-meta-optimizer
│  ├─ Schema markup? → seo-structure-architect
│  ├─ Keyword research? → seo-keyword-strategist
│  ├─ Featured snippets? → seo-snippet-hunter
│  └─ Content audit? → seo-content-auditor
│
├─ TESTING & QA?
│  ├─ Create tests? → test-automator
│  ├─ Debug issues? → debugger + Chrome DevTools MCP
│  ├─ Performance test? → performance-engineer + Chrome DevTools MCP
│  └─ Accessibility test? → ui-visual-validator + Chrome DevTools MCP
│
├─ CODE QUALITY?
│  ├─ Code review? → code-reviewer or architect-review
│  ├─ Security audit? → security-auditor
│  └─ Write docs? → docs-architect
│
├─ DEPLOYMENT?
│  ├─ Setup CI/CD? → deployment-engineer
│  ├─ Deploy to Netlify? → deployment-engineer
│  └─ Setup monitoring? → observability-engineer
│
└─ COMPLEX WORKFLOW?
   ├─ Full feature? → workflows:feature-development
   ├─ Pre-launch review? → workflows:full-review
   ├─ Performance sprint? → workflows:performance-optimization
   └─ Custom orchestration? → Multiple agents sequentially
```

---

## Agent Orchestration Patterns

### Pattern 1: Single Agent Task
**Use when:** Simple, focused task with clear scope
```
Example: "Build Header component with logo and navigation"
→ Agent: frontend-developer
→ MCP: Context7 for React patterns
→ Deliverable: Header.jsx component
```

### Pattern 2: Sequential Agent Chain
**Use when:** Task requires multiple specializations in sequence
```
Example: "Create About Us page with SEO optimization"
→ Step 1: seo-content-writer (write content)
→ Step 2: seo-meta-optimizer (meta tags)
→ Step 3: seo-structure-architect (schema markup)
→ Step 4: frontend-developer (implement in React)
→ Step 5: seo-content-auditor (final review)
→ MCP: Memory to store patterns, Context7 for React
→ Deliverable: Optimized About page
```

### Pattern 3: Parallel Agent Execution
**Use when:** Multiple independent tasks can run simultaneously
```
Example: "Build all 10 service pages"
→ Parallel: 10x frontend-developer (one per page)
→ MCP: Memory for template, Context7 for patterns
→ Coordination: Use same template, SEO strategy
→ Deliverable: All 10 service pages
```

### Pattern 4: Workflow Skill Orchestration
**Use when:** Complex, multi-phase task with interdependencies
```
Example: "Full website launch preparation"
→ Skill: workflows:full-review
→ Agents: code-reviewer, security-auditor, performance-engineer, ui-visual-validator
→ MCP: Chrome DevTools for audits, Playwright for E2E tests
→ Deliverable: Launch readiness report
```

---

## SEO Agent Priority (Critical for Aaron's Lawn Care)

**This is a local business marketing website - SEO is paramount!**

### Priority 1: SEO Strategy (Before Any Content)
1. **Agent:** `seo-content-creation:seo-content-planner`
2. **Task:** Plan SEO strategy for all 10 service pages
3. **Deliverables:**
   - Keyword mapping per page
   - Topic clusters
   - Internal linking strategy
   - Content calendar

### Priority 2: Content Creation (For Each Page)
1. **Agent:** `seo-content-creation:seo-content-writer`
2. **Task:** Write SEO-optimized content
3. **Keywords:** From PRD (lawn care Louisville KY, etc.)
4. **Focus:** 20 years experience, local service area

### Priority 3: Technical SEO (After Content)
1. **Agent:** `seo-technical-optimization:seo-meta-optimizer`
2. **Task:** Create meta titles/descriptions
3. **Character limits:** Title 50-60, Description 150-160

### Priority 4: Structured Data (Before Launch)
1. **Agent:** `seo-technical-optimization:seo-structure-architect`
2. **Task:** Implement LocalBusiness schema
3. **Required:** Business name, address, phone, hours, services

### Priority 5: Quality Audit (Before Launch)
1. **Agent:** `seo-content-creation:seo-content-auditor`
2. **Task:** Final SEO audit
3. **Target:** E-E-A-T signals, keyword optimization

---

## Agent Usage Best Practices

### ✅ DO:

1. **Use specific agents for specialized tasks**
   - SEO agents for content/optimization
   - Frontend developer for React components
   - Performance engineer for Lighthouse improvements

2. **Chain agents for complex workflows**
   - Plan → Implement → Test → Review → Deploy

3. **Store decisions in Memory MCP**
   - Component patterns
   - SEO strategies
   - Coding conventions

4. **Use Context7 MCP before agents**
   - Get React/Tailwind docs first
   - Then have agent implement

5. **Run parallel agents for independent tasks**
   - 10 service pages can be built in parallel

### ❌ DON'T:

1. **Don't use backend agents for this project**
   - No database (static website)
   - No API endpoints (Netlify Forms handles submissions)
   - Supabase is for future phases only

2. **Don't skip SEO agents**
   - This is a marketing website - SEO is critical
   - Every page needs SEO optimization

3. **Don't use agents for simple tasks**
   - Direct implementation is faster for trivial changes
   - Use agents for substantial work

4. **Don't forget to validate with MCP servers**
   - Chrome DevTools for performance
   - Playwright for functionality
   - Context7 for pattern verification

---

## Project-Specific Agent Strategy

### Phase 1: Project Setup (Week 1)
```
1. feature-dev:code-architect
   → Design React application architecture

2. seo-content-creation:seo-content-planner
   → Plan SEO strategy for 10 service pages

3. deployment-engineer
   → Setup GitHub repo, CI/CD, Netlify
```

### Phase 2: Core Development (Weeks 2-3)
```
1. frontend-developer (primary agent)
   → Build layout components (Header, Footer, Navigation)
   → Build Home page
   → Build About page
   → Build Services hub page
   → Build Contact page

2. seo-content-writer + seo-meta-optimizer
   → For each page: content + meta tags

3. test-automator
   → Unit tests for components
```

### Phase 3: Service Pages (Week 4)
```
1. Parallel execution: 10x frontend-developer
   → Build all 10 service pages using template

2. Sequential: seo-content-writer → seo-meta-optimizer → seo-structure-architect
   → For each page: content → meta tags → schema

3. seo-content-auditor
   → Audit all 10 pages
```

### Phase 4: Forms & Gallery (Week 5)
```
1. frontend-developer
   → Quote request form
   → Newsletter signup form
   → Gallery with filters

2. test-automator + Playwright MCP
   → Automated form testing

3. backend-security-coder
   → Form security review (XSS, CSRF)
```

### Phase 5: Quality & Launch (Week 6)
```
1. workflows:full-review
   → code-reviewer
   → security-auditor
   → performance-engineer
   → ui-visual-validator

2. Chrome DevTools MCP
   → Lighthouse audits (target: 90+ all metrics)

3. Playwright MCP
   → Full E2E test suite

4. deployment-engineer
   → Production deployment to Netlify
```

---

## Success Metrics

You're using agents effectively when:

✅ SEO agents are used for every page (this is a marketing website!)
✅ Frontend developer creates consistent, reusable components
✅ Performance engineer achieves Lighthouse 90+ scores
✅ Accessibility validator ensures WCAG 2.1 AA compliance
✅ Test automator provides comprehensive test coverage
✅ Code reviewer validates quality before commits
✅ Deployment engineer sets up reliable CI/CD
✅ Documentation architect creates maintainable docs

---

## Quick Command Templates

### Template: Build Component
```
Use Task tool with subagent_type="frontend-mobile-development:frontend-developer"
Prompt: "Build {ComponentName} component with {requirements}.
Use React 18 best practices, Tailwind CSS for styling, and ensure WCAG 2.1 AA accessibility."
Context: {relevant context}
MCP: Use Context7 for React patterns
```

### Template: SEO Optimize Page
```
Sequential execution:
1. seo-content-writer: "Write SEO-optimized content for {service} page targeting keywords: {keywords}"
2. seo-meta-optimizer: "Create meta tags for {service} page"
3. seo-structure-architect: "Implement LocalBusiness schema for {service} page"
4. seo-content-auditor: "Audit {service} page for SEO quality"
MCP: Use Memory to store SEO patterns
```

### Template: Pre-Launch Review
```
Use Skill: workflows:full-review
Description: "Comprehensive pre-launch review for Aaron's Lawn Care website"
Agents: code-reviewer, security-auditor, performance-engineer, ui-visual-validator
MCP: Chrome DevTools for audits, Playwright for tests
```

---

**Last Updated:** 2026-01-11
**Project:** Aaron's Lawn Care Website
**Phase:** Planning & Development
**Agent Count:** 100+ available, ~15 relevant for this project
