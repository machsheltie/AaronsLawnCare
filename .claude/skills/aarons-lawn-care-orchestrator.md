# Aaron's Lawn Care - Master Development Orchestrator

## Overview
This master skill orchestrates optimal usage of MCP servers, agents, and workflows for building the Aaron's Lawn Care marketing website. It integrates both the MCP Server Guide and Agent Workflow Guide into a unified decision-making system.

## Invocation
Use this skill at the start of any development session or when beginning a new task to automatically determine the best resources to use.

---

## Quick Start Commands

### For Claude Code Instance:

**Starting a new task:**
```
What I'm working on: [describe task]
Invoke: aarons-lawn-care-orchestrator
→ Returns: Optimal MCP servers, agents, and step-by-step plan
```

**Examples:**
```
What I'm working on: Building the quote request form
Invoke: aarons-lawn-care-orchestrator
→ MCP: Context7 (React Hook Form), Playwright (testing), Chrome DevTools (debugging)
→ Agent: frontend-developer
→ Plan: 1) Get patterns from Context7, 2) Build form, 3) Test with Playwright
```

```
What I'm working on: Creating Service Page for "Lawn Mowing Louisville KY"
Invoke: aarons-lawn-care-orchestrator
→ MCP: Context7 (React), Memory (template), Chrome DevTools (validation)
→ Agents: seo-content-writer → seo-meta-optimizer → frontend-developer → seo-content-auditor
→ Plan: 1) Write SEO content, 2) Create meta tags, 3) Implement in React, 4) Audit
```

---

## Orchestration Decision Tree

### Level 1: Task Category Identification

```
INPUT: Task description
OUTPUT: Primary category and resources

Categories:
1. PROJECT_SETUP → Architecture planning, initial configuration
2. FRONTEND_COMPONENT → UI components, layouts, styling
3. SEO_CONTENT → Content creation, optimization, meta tags
4. FORM_DEVELOPMENT → Forms, validation, submissions
5. TESTING_QA → Testing, debugging, quality assurance
6. PERFORMANCE → Optimization, speed, bundle size
7. ACCESSIBILITY → WCAG compliance, screen readers
8. DEPLOYMENT → CI/CD, hosting, production
9. DOCUMENTATION → Code docs, guides, READMEs
```

### Level 2: Resource Allocation

#### PROJECT_SETUP
**MCP Servers:**
- Primary: `github-integration` (repo setup)
- Secondary: `memory-integration` (store decisions)
- Tertiary: `upstash-context-7-mcp` (Vite + React docs)

**Agents:**
- Primary: `feature-dev:code-architect`
- Secondary: `cicd-automation:deployment-engineer`

**Workflow:**
1. Use `code-architect` to design app architecture
2. Store decisions in `memory-integration`
3. Use `github-integration` to create repository
4. Use `deployment-engineer` to setup CI/CD + Netlify

---

#### FRONTEND_COMPONENT
**MCP Servers:**
- Primary: `upstash-context-7-mcp` (React/Tailwind docs)
- Secondary: `memory-integration` (component patterns)
- Tertiary: `chrome-devtools` (inspect/debug)

**Agents:**
- Primary: `frontend-mobile-development:frontend-developer`
- Secondary: `javascript-typescript:javascript-pro`

**Workflow:**
1. Query `Context7` for React component patterns
2. Use `frontend-developer` to build component
3. Test with `chrome-devtools` for styling/layout
4. Store reusable patterns in `memory-integration`

**Accessibility Note:**
- Use `accessibility-compliance:ui-visual-validator` for each component
- Target: WCAG 2.1 AA compliance

---

#### SEO_CONTENT (CRITICAL FOR THIS PROJECT!)
**MCP Servers:**
- Primary: `memory-integration` (SEO strategy, keywords)
- Secondary: `chrome-devtools` (meta tag validation)
- Tertiary: `upstash-context-7-mcp` (React Helmet/head management)

**Agents (Sequential Chain):**
1. `seo-content-creation:seo-content-planner` → Overall strategy
2. `seo-technical-optimization:seo-keyword-strategist` → Keyword research
3. `seo-content-creation:seo-content-writer` → Write content
4. `seo-technical-optimization:seo-meta-optimizer` → Meta tags
5. `seo-technical-optimization:seo-structure-architect` → Schema markup
6. `seo-content-creation:seo-content-auditor` → Final audit

**Workflow:**
1. Plan SEO strategy for page/section
2. Research and map keywords (Louisville, KY focus)
3. Write SEO-optimized content (20 years experience emphasis)
4. Create meta titles/descriptions
5. Implement LocalBusiness schema
6. Audit for E-E-A-T signals
7. Validate with `chrome-devtools` Lighthouse SEO audit

**Target Keywords (from PRD):**
- lawn care Louisville KY
- lawn service Louisville
- landscaping Louisville Kentucky
- [service] Louisville KY (for each service page)

---

#### FORM_DEVELOPMENT
**MCP Servers:**
- Primary: `upstash-context-7-mcp` (React Hook Form, validation)
- Secondary: `playwright-mcp-server` (automated testing)
- Tertiary: `chrome-devtools` (debug form issues)

**Agents:**
- Primary: `frontend-mobile-development:frontend-developer`
- Secondary: `backend-api-security:backend-security-coder` (security review)
- Tertiary: `unit-testing:test-automator` (test creation)

**Workflow:**
1. Query `Context7` for React Hook Form patterns
2. Use `frontend-developer` to build form
3. Use `backend-security-coder` to review for XSS/CSRF
4. Create tests with `test-automator`
5. Run automated tests with `playwright-mcp-server`
6. Debug issues with `chrome-devtools`

**Forms in Project:**
- Quote Request Form (complex, multi-field)
- Newsletter Signup (simple, email only)

---

#### TESTING_QA
**MCP Servers:**
- Primary: `playwright-mcp-server` (E2E testing)
- Secondary: `chrome-devtools` (unit testing, debugging)
- Tertiary: `memory-integration` (test patterns)

**Agents:**
- Primary: `unit-testing:test-automator`
- Secondary: `debugging-toolkit:debugger`
- Tertiary: `accessibility-compliance:ui-visual-validator`

**Workflow:**
1. Use `test-automator` to create test suite
2. Run E2E tests with `playwright-mcp-server`
3. Debug failures with `debugger` + `chrome-devtools`
4. Validate accessibility with `ui-visual-validator`
5. Store test patterns in `memory-integration`

**Test Coverage Targets:**
- Unit tests: All components
- Integration tests: Forms, navigation
- E2E tests: Critical user paths
- Accessibility tests: All pages (WCAG 2.1 AA)

---

#### PERFORMANCE
**MCP Servers:**
- Primary: `chrome-devtools` (Lighthouse, profiling)
- Secondary: `upstash-context-7-mcp` (optimization patterns)
- Tertiary: `playwright-mcp-server` (performance testing)

**Agents:**
- Primary: `application-performance:performance-engineer`
- Secondary: `frontend-mobile-development:frontend-developer`

**Workflow:**
1. Run Lighthouse audit with `chrome-devtools`
2. Analyze bottlenecks with `performance-engineer`
3. Query `Context7` for React optimization patterns
4. Implement optimizations (code splitting, lazy loading, image optimization)
5. Measure improvements with `chrome-devtools`
6. Run performance tests with `playwright-mcp-server`

**Targets:**
- Lighthouse Performance: 90+
- Lighthouse SEO: 90+
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: 90+

---

#### ACCESSIBILITY
**MCP Servers:**
- Primary: `chrome-devtools` (Lighthouse accessibility audit)
- Secondary: `playwright-mcp-server` (keyboard navigation tests)
- Tertiary: `upstash-context-7-mcp` (ARIA patterns)

**Agents:**
- Primary: `accessibility-compliance:ui-visual-validator`
- Secondary: `frontend-mobile-development:frontend-developer`

**Workflow:**
1. Run accessibility audit with `chrome-devtools`
2. Use `ui-visual-validator` for comprehensive analysis
3. Query `Context7` for ARIA best practices
4. Fix issues with `frontend-developer`
5. Test keyboard navigation with `playwright-mcp-server`
6. Validate screen reader compatibility

**Requirements:**
- WCAG 2.1 AA compliance (from PRD)
- Target: Lighthouse Accessibility score 100

---

#### DEPLOYMENT
**MCP Servers:**
- Primary: `github-integration` (repo management, releases)
- Secondary: `chrome-devtools` (production validation)
- Tertiary: `playwright-mcp-server` (smoke tests)

**Agents:**
- Primary: `cicd-automation:deployment-engineer`
- Secondary: `observability-monitoring:observability-engineer`

**Workflow:**
1. Use `deployment-engineer` to setup CI/CD
2. Configure GitHub Actions with `github-integration`
3. Deploy to Netlify (configured in workflow)
4. Run smoke tests with `playwright-mcp-server`
5. Validate production with `chrome-devtools`
6. Setup monitoring with `observability-engineer`

**Hosting:** Netlify (from PRD)
**Domain:** TBD (suggestions in PRD)

---

#### DOCUMENTATION
**MCP Servers:**
- Primary: `memory-integration` (decisions, patterns)
- Secondary: `github-integration` (wiki, markdown)

**Agents:**
- Primary: `code-documentation:docs-architect`
- Secondary: `code-documentation:tutorial-engineer`

**Workflow:**
1. Use `docs-architect` to create comprehensive docs
2. Use `tutorial-engineer` for guides
3. Store in `github-integration` (wiki or /docs)
4. Track decisions in `memory-integration`

---

## Common Task Mappings

### "Build Header component"
→ **Category:** FRONTEND_COMPONENT
→ **MCP:** Context7, Chrome DevTools
→ **Agent:** frontend-developer
→ **Steps:**
1. Query Context7 for React component patterns
2. Build Header with logo, navigation, responsive menu
3. Test responsiveness with Chrome DevTools
4. Validate accessibility

### "Create Mowing service page"
→ **Category:** SEO_CONTENT + FRONTEND_COMPONENT
→ **MCP:** Context7, Memory, Chrome DevTools
→ **Agents:** seo-content-writer → seo-meta-optimizer → frontend-developer → seo-content-auditor
→ **Steps:**
1. Write SEO content (target: "lawn mowing service Louisville KY")
2. Create meta tags (50-60 char title, 150-160 char description)
3. Implement in React using service page template
4. Add LocalBusiness schema
5. Audit content quality
6. Validate with Chrome DevTools Lighthouse

### "Build quote request form"
→ **Category:** FORM_DEVELOPMENT
→ **MCP:** Context7, Playwright, Chrome DevTools
→ **Agents:** frontend-developer → backend-security-coder → test-automator
→ **Steps:**
1. Get React Hook Form patterns from Context7
2. Build form with all required fields (from PRD)
3. Security review for XSS/CSRF
4. Create automated tests
5. Run E2E tests with Playwright
6. Debug with Chrome DevTools

### "Pre-launch performance optimization"
→ **Category:** PERFORMANCE
→ **MCP:** Chrome DevTools (primary), Playwright
→ **Agent:** performance-engineer
→ **Steps:**
1. Run full Lighthouse audit
2. Identify bottlenecks
3. Implement optimizations (images, code splitting, caching)
4. Re-measure with Lighthouse
5. Run performance tests with Playwright

### "Accessibility audit all pages"
→ **Category:** ACCESSIBILITY
→ **MCP:** Chrome DevTools, Playwright
→ **Agent:** ui-visual-validator
→ **Steps:**
1. Run Lighthouse accessibility on all 10 pages
2. Comprehensive analysis with ui-visual-validator
3. Fix issues
4. Test keyboard navigation with Playwright
5. Validate WCAG 2.1 AA compliance

---

## Project Phase Orchestration

### Phase 1: Project Setup (Week 1)
```yaml
Tasks:
  - Initialize React + Vite + TypeScript project
  - Setup Tailwind CSS
  - Configure React Router
  - Setup GitHub repository
  - Configure Netlify deployment
  - Setup CI/CD pipeline

Resources:
  MCP:
    - upstash-context-7-mcp (docs)
    - github-integration (repo)
    - memory-integration (decisions)

  Agents:
    - feature-dev:code-architect (architecture)
    - cicd-automation:deployment-engineer (CI/CD)

  Outcome:
    - Project initialized
    - Development environment ready
    - CI/CD pipeline active
    - Deployment configured
```

### Phase 2: Core Layout (Week 2)
```yaml
Tasks:
  - Build Header component (logo, navigation)
  - Build Footer component (social links, newsletter, contact)
  - Build Layout component (wrapper)
  - Create Home page
  - Create About page
  - Create Contact page

Resources:
  MCP:
    - upstash-context-7-mcp (React patterns)
    - chrome-devtools (inspect/debug)
    - memory-integration (component patterns)

  Agents:
    - frontend-mobile-development:frontend-developer (all components)
    - accessibility-compliance:ui-visual-validator (each component)

  SEO:
    - seo-content-writer (content for Home, About, Contact)
    - seo-meta-optimizer (meta tags for each page)

  Outcome:
    - Core layout complete
    - 3 main pages functional
    - Accessible and responsive
    - SEO optimized
```

### Phase 3: Service Pages (Weeks 3-4)
```yaml
Tasks:
  - Create Services hub page
  - Create 10 individual service pages:
    1. Mowing
    2. Edging
    3. Leaf Removal
    4. Aeration
    5. Landscaping
    6. Garden Bed Design
    7. Hedge Trimming
    8. Tree Removal
    9. Tilling
    10. Snow Removal

Resources:
  MCP:
    - memory-integration (service page template)
    - upstash-context-7-mcp (React routing)
    - chrome-devtools (validation)

  Agents (Sequential per page):
    1. seo-content-creation:seo-content-planner (strategy)
    2. seo-technical-optimization:seo-keyword-strategist (keywords)
    3. seo-content-creation:seo-content-writer (content)
    4. seo-technical-optimization:seo-meta-optimizer (meta tags)
    5. frontend-mobile-development:frontend-developer (implementation)
    6. seo-technical-optimization:seo-structure-architect (schema)
    7. seo-content-creation:seo-content-auditor (audit)

  Strategy:
    - Create template from first service page
    - Store template in memory-integration
    - Parallelize remaining 9 pages

  Outcome:
    - All 10 service pages complete
    - Fully SEO optimized (target keywords from PRD)
    - LocalBusiness schema implemented
    - Internal linking configured
```

### Phase 4: Interactive Features (Week 5)
```yaml
Tasks:
  - Quote Request Form
  - Newsletter Signup Form
  - Gallery page with filters
  - Service area map (Google Maps)

Resources:
  MCP:
    - upstash-context-7-mcp (forms, maps)
    - playwright-mcp-server (form testing)
    - chrome-devtools (debugging)

  Agents:
    - frontend-mobile-development:frontend-developer (implementation)
    - backend-api-security:backend-security-coder (security review)
    - unit-testing:test-automator (test creation)

  Testing:
    - Automated form tests with Playwright
    - Security audit for XSS/CSRF
    - Validation testing

  Outcome:
    - Functional quote request form (Netlify Forms)
    - Newsletter integrated with Mailchimp
    - Gallery with before/after photos
    - Interactive service area map
```

### Phase 5: Quality & Launch (Week 6)
```yaml
Tasks:
  - Performance optimization
  - Accessibility audit
  - Security audit
  - SEO audit
  - Cross-browser testing
  - Mobile responsiveness testing
  - Launch preparation

Resources:
  MCP:
    - chrome-devtools (all audits)
    - playwright-mcp-server (E2E tests)
    - github-integration (release)

  Agents:
    - application-performance:performance-engineer (performance)
    - accessibility-compliance:ui-visual-validator (accessibility)
    - comprehensive-review:security-auditor (security)
    - seo-content-creation:seo-content-auditor (SEO final audit)

  Workflow:
    - Use: workflows:full-review skill

  Targets:
    - Lighthouse Performance: 90+
    - Lighthouse SEO: 90+
    - Lighthouse Accessibility: 100
    - Lighthouse Best Practices: 90+
    - WCAG 2.1 AA: Pass
    - Zero security vulnerabilities

  Outcome:
    - Production-ready website
    - All audits passed
    - Deployed to Netlify
    - Domain configured
    - Google Business Profile setup
```

---

## Smart Recommendations

### For Repetitive Tasks (10 Service Pages)
**Recommendation:** Template + Parallel Execution
1. Create first service page with full SEO workflow
2. Extract template and store in `memory-integration`
3. Use template for remaining 9 pages
4. Parallelize with 9 concurrent `frontend-developer` agents
5. Final audit with `seo-content-auditor`

**Why:** Saves ~70% time vs. sequential execution

---

### For SEO (Critical for This Project)
**Recommendation:** SEO-First Approach
1. Never build a page without SEO strategy first
2. Always use the full SEO agent chain:
   - Planner → Keyword Strategist → Writer → Meta Optimizer → Structure Architect → Auditor
3. Validate every page with Chrome DevTools Lighthouse SEO audit
4. Target: 90+ SEO score on every page

**Why:** This is a local business marketing website - SEO is the primary driver of business value

---

### For Performance
**Recommendation:** Measure Early, Optimize Often
1. Run Lighthouse after each major feature
2. Don't wait until pre-launch for performance
3. Use code splitting from the start
4. Optimize images immediately (WebP format)
5. Lazy load non-critical components

**Why:** Easier to maintain performance than to fix it later

---

### For Accessibility
**Recommendation:** Build Accessible from the Start
1. Use `ui-visual-validator` for every component
2. Don't retrofit accessibility later
3. Test keyboard navigation continuously
4. Use semantic HTML
5. Target: Lighthouse Accessibility 100

**Why:** Retrofitting accessibility is expensive and often incomplete

---

## Environment Setup Reminder

Before starting development, ensure:

1. **MCP Servers Configured:** `.mcp.json` ✅
2. **Environment Variables:**
   ```bash
   # Required for GitHub Integration
   GITHUB_PERSONAL_ACCESS_TOKEN=your_token

   # Optional (for future phases)
   SUPABASE_URL=your_url
   SUPABASE_SERVICE_ROLE_KEY=your_key
   ```

3. **Skills Available:**
   - `.claude/skills/mcp-server-guide.md` ✅
   - `.claude/skills/agent-workflow-guide.md` ✅
   - `.claude/skills/aarons-lawn-care-orchestrator.md` ✅

4. **Documentation Updated:**
   - `CLAUDE.md` with skills reference ⏳
   - `.env.example` with all variables ✅

---

## Quick Reference: Task → Resources

| Task | MCP Servers | Agents | Skill |
|------|-------------|--------|-------|
| Setup project | Context7, GitHub, Memory | code-architect, deployment-engineer | - |
| Build component | Context7, Chrome DevTools | frontend-developer | - |
| SEO optimize | Memory, Chrome DevTools | SEO chain (7 agents) | - |
| Build form | Context7, Playwright, Chrome | frontend-developer, security-coder | - |
| Test features | Playwright, Chrome DevTools | test-automator, debugger | - |
| Optimize perf | Chrome DevTools, Playwright | performance-engineer | performance-optimization |
| Audit access | Chrome DevTools, Playwright | ui-visual-validator | - |
| Pre-launch | All MCPs | Multiple agents | full-review |
| Deploy | GitHub, Chrome DevTools | deployment-engineer | - |

---

## Success Criteria

This orchestration is working effectively when:

✅ Every task starts with appropriate MCP server selection
✅ SEO agents are used for every page (this is a marketing website!)
✅ Frontend development is consistent and reusable
✅ All forms have security review + automated tests
✅ Every component has accessibility validation
✅ Performance targets are met (Lighthouse 90+)
✅ Documentation is comprehensive and up-to-date
✅ GitHub tracks all progress with issues/commits
✅ Memory stores decisions and patterns for reuse

---

**Last Updated:** 2026-01-11
**Project:** Aaron's Lawn Care Website
**Status:** Orchestration system ready for Phase 1
**Next Step:** Initialize React project with proper architecture
