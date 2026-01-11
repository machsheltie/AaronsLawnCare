# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Aaron's Lawn Care Website** - A professional marketing website for a solo lawn care and landscaping business serving the greater Louisville, Kentucky area. This is phase one of a larger digital ecosystem.

| Field | Value |
|-------|-------|
| **Project Type** | Marketing Website (React) |
| **Business** | Aaron's Lawn Care |
| **Service Area** | Greater Louisville, Kentucky |
| **Years in Business** | 20 years |
| **Primary Stack** | React 18+, Tailwind CSS, Netlify |

---

## Project Structure

```
Aarons_Lawn_Care/
├── 01_Documentation/          # Product requirements and specifications
│   └── Aarons_Lawn_Care_Website_PRD.md
├── 02_Prompts/               # Development prompt guides
│   ├── Brief_Prompts.txt
│   └── Expanded_Prompts_Master.txt
├── 03_Screenshots/           # Design mockups and screenshots
└── 04_Iterations/            # Version iterations and history
```

**Note:** The src/ directory and React application code have not been created yet. This repository is currently in the planning and documentation phase.

---

## Core Services

The website showcases 10 lawn care services:

| Category | Services | Season |
|----------|----------|--------|
| Lawn Maintenance | Mowing, Edging, Leaf Removal | Spring/Summer/Fall |
| Lawn Health | Aeration | Spring/Fall |
| Landscaping | General Landscaping, Garden Bed Design | Year-round/Spring/Summer |
| Trimming | Hedge Trimming | Spring/Summer/Fall |
| Tree Services | Tree Removal | Year-round |
| Ground Prep | Tilling | Spring |
| Winter Services | Snow Removal | Winter |

---

## Site Architecture

### Required Pages (10 total)

1. **Home Page** - Hero, services overview, trust indicators, newsletter signup
2. **About Us** - Business story, 20 years experience, service area
3. **Services Hub** - Overview of all services with seasonal highlights
4. **Individual Service Pages (10)** - One page per service:
   - `/services/mowing`
   - `/services/edging`
   - `/services/leaf-removal`
   - `/services/aeration`
   - `/services/landscaping`
   - `/services/garden-bed-design`
   - `/services/hedge-trimming`
   - `/services/tree-removal`
   - `/services/tilling`
   - `/services/snow-removal`
5. **Gallery** - Filterable before/after photos by service type
6. **Reviews/Testimonials** - Customer testimonials (placeholder initially)
7. **Request a Quote** - Comprehensive quote request form
8. **Contact** - Contact information, service area map, business hours
9. **Privacy Policy** - Data collection and usage policies
10. **Terms of Service** - Website terms and quote disclaimers

---

## Key Features

### Quote Request Form

**Required Fields:**
- Full Name, Property Address, Phone, Email (all required)
- Service Type(s) - multi-select checkboxes (at least one required)
- Property Size - dropdown (Small/Medium/Large/Not Sure)
- Photos - file upload (optional, multiple allowed)
- Preferred Contact - radio (Phone/Email/Either)
- Urgency - dropdown (Routine/Soon/Urgent)
- Additional Details - textarea (optional)

**Form Behavior:**
- Submissions sent to: `gnaua429@gmail.com`
- Auto-response email confirming receipt
- Response time messaging: "We will get back to you as soon as possible"
- Response method: Phone call to schedule on-site visit

### Newsletter Integration

- **Platform:** Mailchimp
- **Signup Locations:** Home page, footer (all pages), contact page
- **Fields:** Email (required), First name (optional)
- **Purpose:** Seasonal tips, promotions, service availability updates

---

## Technical Specifications

### Tech Stack

| Component | Technology |
|-----------|-----------|
| **Framework** | React 18+ |
| **Routing** | React Router v6 |
| **Styling** | Tailwind CSS v3.4+ |
| **Hosting** | Netlify |
| **Forms** | Netlify Forms or custom |
| **Analytics** | Google Analytics 4 |
| **Performance Target** | 90+ Lighthouse score |

### Recommended Project Structure

```
src/
├── components/
│   ├── layout/         # Header, Footer, Navigation
│   ├── common/         # Button, Card, ServiceCard
│   ├── forms/          # QuoteForm, NewsletterSignup
│   └── gallery/        # Gallery, GalleryFilter, BeforeAfter
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx    # Reusable for all 10 services
│   ├── Gallery.jsx
│   ├── Reviews.jsx
│   ├── Quote.jsx
│   ├── Contact.jsx
│   ├── PrivacyPolicy.jsx
│   └── TermsOfService.jsx
├── data/
│   ├── services.js     # Service content and metadata
│   └── gallery.js      # Gallery image data
├── styles/
└── assets/
    └── images/
```

---

## Branding & Design

### Color Palette

| Color | Usage | Suggested Hex |
|-------|-------|---------------|
| **Primary** | Deep forest green (professional) | `#2D5016` |
| **Secondary** | Warm earth brown/tan | `#8B7355` |
| **Accent** | Fresh grass green (energy) | `#4A7D26` |
| **Neutrals** | Cream, off-white, charcoal | Various |

### Brand Attributes

- **Vibe:** Professional and polished
- **Experience:** 20 years serving Louisville
- **Trust Signals:** Fully insured, established business

### Logo Requirements

- Works in full color and single color
- Works at favicon size (16x16, 32x32)
- Includes business name "Aaron's Lawn Care"
- Suitable for uniforms and vehicle decals

---

## SEO Strategy

### Primary Local Keywords

Use in page titles, H1 tags, meta descriptions, and body content:

- lawn care Louisville KY
- lawn service Louisville
- landscaping Louisville Kentucky
- lawn mowing Louisville
- landscaper near me Louisville
- lawn care services Louisville KY
- professional lawn care Louisville

### Service-Specific Keywords

Each service page targets specific keywords:
- **Mowing:** "lawn mowing service Louisville", "grass cutting Louisville KY"
- **Tree Removal:** "tree removal Louisville KY", "tree service Louisville"
- **Snow Removal:** "snow removal Louisville KY", "snow plowing service Louisville"
- **Aeration:** "lawn aeration Louisville KY", "core aeration service"
- (See PRD for complete list)

### SEO Implementation Checklist

- Dedicated service pages targeting service + location keywords
- Meta titles: 50-60 characters with primary keyword and location
- Meta descriptions: 150-160 characters with compelling CTA
- Descriptive, keyword-rich image filenames (e.g., `lawn-mowing-louisville-before-after.jpg`)
- Alt text on all images with relevant keywords
- Schema markup for LocalBusiness
- Google Business Profile setup (critical for local SEO)
- NAP consistency (Name, Address, Phone) across all pages

### Meta Tag Templates

**Home Page Example:**
```
Title: Aaron's Lawn Care | Professional Lawn Service in Louisville KY
Description: 20 years of professional lawn care and landscaping in Louisville, Kentucky. Mowing, landscaping, tree removal, snow removal & more. Request a free quote today!
```

**Service Page Example (Mowing):**
```
Title: Lawn Mowing Service Louisville KY | Aaron's Lawn Care
Description: Professional lawn mowing service in Louisville, Kentucky. Weekly, bi-weekly, or one-time mowing. 20 years experience. Request your free quote today!
```

---

## Contact Information

| Field | Value |
|-------|-------|
| **Phone** | (502) 926-8524 |
| **Email** | gnaua429@gmail.com |
| **Business Hours** | By appointment |
| **Service Area** | Greater Louisville, Kentucky |

---

## Accessibility Requirements

Compliance: **WCAG 2.1 AA**

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast minimum 4.5:1
- Alt text on all images
- Focus indicators on interactive elements
- Skip navigation link

---

## Image Requirements

### Gallery Images

- Before/after pairs for each service type
- Minimum 1200px wide (high resolution)
- Consistent aspect ratio (16:9 recommended)
- Optimized file sizes for web (WebP where supported)
- Descriptive filenames for SEO

### File Naming Convention

```
{service}-{location}-{descriptor}-{before|after}.jpg

Examples:
lawn-mowing-louisville-residential-before.jpg
lawn-mowing-louisville-residential-after.jpg
tree-removal-louisville-backyard-before.jpg
tree-removal-louisville-backyard-after.jpg
```

---

## Development Commands

**Note:** These commands are for the planned React application. The project structure has not been initialized yet.

### Planned Commands (Once Initialized)

```bash
# Development
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Testing (Planned)
npm run test         # Run Vitest unit tests
npm run test:e2e     # Run Playwright E2E tests
npm run test:coverage # Run tests with coverage report
```

### Setup Instructions (When Starting Development)

1. Initialize React project:
   ```bash
   npm create vite@latest . -- --template react
   ```

2. Install dependencies:
   ```bash
   npm install react-router-dom
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. Configure environment variables (create `.env.local`):
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_key_here
   VITE_MAILCHIMP_API_KEY=your_key_here
   VITE_GOOGLE_ANALYTICS_ID=your_id_here
   ```

4. Set up Netlify deployment:
   - Connect repository to Netlify
   - Configure build settings: `npm run build`
   - Publish directory: `dist`
   - Set environment variables in Netlify dashboard

---

## Content Placeholders

### About Page Placeholder

> "For over 20 years, Aaron's Lawn Care has been serving the greater Louisville area with professional, reliable lawn care and landscaping services. As a locally-owned business, we take pride in treating every property as if it were our own. We're fully insured and committed to delivering quality work that exceeds your expectations."
>
> *[Expand with Aaron's personal story and values]*

### Service Description Template

Each service page needs:
1. H1 headline with service name and location
2. Intro paragraph explaining the service
3. Benefits section (why choose Aaron's for this service)
4. "What to expect" process description
5. CTA to request a quote
6. Related gallery images

---

## Launch Checklist

**Pre-Launch Requirements:**

- [ ] All 10 pages built and content populated
- [ ] Quote form tested and email delivery confirmed
- [ ] Newsletter signup connected to Mailchimp
- [ ] All images optimized and alt text added
- [ ] Meta titles and descriptions added to all pages
- [ ] Schema markup (LocalBusiness) implemented
- [ ] Google Analytics installed
- [ ] SSL certificate active (Netlify provides free)
- [ ] Mobile responsiveness tested on real devices
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Lighthouse score 90+ achieved
- [ ] Privacy policy and terms published
- [ ] Google Business Profile created/updated
- [ ] 404 page created
- [ ] Favicon installed (16x16, 32x32 sizes)
- [ ] Domain DNS configured (TBD - domain to be registered)
- [ ] Form spam protection implemented

**Suggested Domains to Check:**
- aaronslawncare.com
- aaronslawncarelou.com
- aaronslawncare502.com
- aaronslawncareky.com
- aaronslawnlouisville.com

---

## Social Media Integration

Links to be added in header and/or footer:
- Facebook
- Instagram
- X (Twitter)

*Note: Actual profile URLs to be added once accounts are created.*

---

## Future Considerations (Out of Scope)

Items planned for phase 2+ (not included in this website):
- Customer portal/login functionality
- Online scheduling system
- Online payment processing
- Customer mobile app
- Business operations app (job management, billing)
- Blog for content marketing
- Live chat functionality
- SMS notifications

---

## MCP Server Configuration

The project has 7 MCP servers configured for development assistance:

### Active MCP Servers

| Server | Purpose | Use Cases |
|--------|---------|-----------|
| **upstash-context-7-mcp** | Library documentation and API examples | React, Tailwind, Router docs in real-time |
| **knowall-ai-mcp-neo-4-j-agent-memory** | Agent memory and context management | Track development progress across sessions |
| **memory-integration** | Session memory and context persistence | Remember decisions, patterns, preferences |
| **playwright-mcp-server** | Browser automation and E2E testing | Test website flows, forms, navigation |
| **github-integration** | GitHub repository management | Issues, PRs, code search, commits |
| **supabase** | Supabase database operations | Future backend integration (Phase 2+) |
| **chrome-devtools** | Chrome DevTools automation | Debug, inspect, performance profiling |

### Configuration File

Location: `.mcp.json`

### Environment Variables Required

**For github-integration:**
```bash
GITHUB_PERSONAL_ACCESS_TOKEN=your_token_here
```

**For supabase (optional, for future phases):**
```bash
SUPABASE_URL=your_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### How to Use MCP Servers

**Context7 (Library Documentation):**
- Automatically fetches latest React 18+ documentation
- Get Tailwind CSS class references
- React Router v6 API examples
- No configuration needed (HTTP transport)

**Memory Integration:**
- Persists development decisions across sessions
- Remembers component patterns and preferences
- Tracks project progress and todos

**Playwright (Browser Testing):**
- Automate form testing (quote request form)
- Test responsive layouts across breakpoints
- Validate navigation flows
- Screenshot comparison testing

**GitHub Integration:**
- Create issues for bugs/features
- Search similar projects for inspiration
- Review commit history
- Manage pull requests

**Chrome DevTools:**
- Inspect performance bottlenecks
- Debug CSS/layout issues
- Analyze bundle sizes
- Lighthouse score monitoring

**Supabase (Future):**
- When phase 2 adds backend functionality
- Database schema management
- API endpoint testing

Configuration file: `.mcp.json`

---

## Custom Development Skills

The project includes three custom skills that orchestrate optimal usage of MCP servers, agents, and workflows.

### Available Skills

Located in `.claude/skills/`:

#### 1. MCP Server Usage Guide (`mcp-server-guide.md`)
**Purpose:** Intelligent guidance on which MCP servers to use for specific development tasks

**Use When:** Starting any frontend development, testing, SEO, or deployment task

**Key Features:**
- Decision matrix for each task type (Frontend, SEO, Testing, Deployment)
- MCP server combinations for common workflows
- Performance considerations for each MCP server
- Quick reference card mapping tasks to MCP servers

**Example Usage:**
- Building React components → Context7 + Chrome DevTools
- SEO optimization → Context7 + Memory + Chrome DevTools
- Form testing → Playwright + Chrome DevTools
- Performance optimization → Chrome DevTools + Playwright

#### 2. Agent & Subagent Workflow Guide (`agent-workflow-guide.md`)
**Purpose:** Guidance on which agents and subagents to use for specific tasks

**Use When:** Planning implementation of features, content creation, testing, or deployment

**Key Features:**
- Agent selection matrix by task category
- SEO agent prioritization (critical for this marketing website)
- Sequential agent chains for complex workflows
- Parallel agent execution strategies
- Project-specific agent strategy (6-week timeline)

**Example Usage:**
- React components → frontend-developer
- SEO content → seo-content-planner → seo-content-writer → seo-meta-optimizer
- Testing → test-automator + Playwright MCP
- Performance → performance-engineer + Chrome DevTools MCP

**SEO Agent Chain (Used for Every Page):**
1. seo-content-planner - Overall strategy
2. seo-keyword-strategist - Keyword mapping
3. seo-content-writer - Content creation
4. seo-meta-optimizer - Meta tags
5. seo-structure-architect - Schema markup
6. seo-content-auditor - Final quality audit

#### 3. Master Orchestrator (`aarons-lawn-care-orchestrator.md`)
**Purpose:** Unified orchestration system integrating MCP servers and agents

**Use When:** Starting any development session or beginning a new task

**Key Features:**
- Orchestration decision tree
- Task category identification
- Resource allocation for each category
- Common task mappings with step-by-step workflows
- Project phase orchestration (Weeks 1-6)
- Smart recommendations for repetitive tasks

**Example Orchestrations:**
```yaml
Task: "Build Header component"
→ MCP: Context7 (React patterns), Chrome DevTools (inspect)
→ Agent: frontend-developer
→ Steps: Query patterns → Build → Test → Validate accessibility

Task: "Create Mowing service page"
→ MCP: Context7, Memory, Chrome DevTools
→ Agents: SEO chain (planner → writer → meta → frontend → auditor)
→ Steps: Strategy → Content → Meta tags → Implement → Schema → Audit

Task: "Build quote request form"
→ MCP: Context7, Playwright, Chrome DevTools
→ Agents: frontend-developer → security-coder → test-automator
→ Steps: Get patterns → Build → Security review → Test → Debug
```

### How to Use These Skills

**In Development Sessions:**
1. Read the task or feature requirement
2. Refer to **Master Orchestrator** for initial guidance
3. Consult **MCP Server Guide** for MCP server selection
4. Consult **Agent Workflow Guide** for agent selection
5. Execute with recommended resources

**For SEO Tasks (Critical):**
- Always use the full SEO agent chain
- This is a local marketing website - SEO is primary business driver
- Every page must be SEO-optimized before implementation
- Target: Lighthouse SEO score 90+ on every page

**For Repetitive Tasks (10 Service Pages):**
1. Create first page with full workflow
2. Extract template and store in Memory MCP
3. Use template + parallel agents for remaining 9 pages
4. Final audit with seo-content-auditor

### Skill Integration with Project Workflow

These skills integrate into the 6-week development timeline:

**Week 1 (Setup):** Use Master Orchestrator → Project Setup workflow
**Weeks 2-3 (Core):** Use MCP Guide + Agent Guide for components
**Week 4 (Services):** Use Master Orchestrator → Service Pages workflow
**Week 5 (Features):** Use Agent Guide for forms, gallery
**Week 6 (Launch):** Use Master Orchestrator → Pre-launch workflow

---

## Design Resources

**Location:** `03_Screenshots/` directory
- Contains design mockups and visual references
- Use these as guidance for implementing the UI

**Additional Resources:**
- PRD: `01_Documentation/Aarons_Lawn_Care_Website_PRD.md`
- Development Prompts: `02_Prompts/Brief_Prompts.txt` (500 sequential prompts)
- Extended Prompts: `02_Prompts/Expanded_Prompts_Master.txt`

---

## Important Notes

### Current Status

This repository is in the **planning and documentation phase**. No React code has been written yet. The next steps are:

1. Initialize React project with Vite
2. Set up Tailwind CSS
3. Configure React Router
4. Create component structure
5. Implement pages according to PRD

### Development Philosophy

- **Mobile-first approach** - Design for mobile, enhance for desktop
- **Performance-focused** - Target 90+ Lighthouse score
- **SEO-optimized** - Every page targets specific local keywords
- **Accessibility compliant** - WCAG 2.1 AA standards
- **Professional and polished** - Reflects 20 years of experience

### Key Business Context

- Solo operator (Aaron) with 20 years experience
- Fully insured
- Serves greater Louisville, Kentucky area
- Quote-based pricing model
- One-time jobs and recurring service plans
- Business contact: gnaua429@gmail.com, (502) 926-8524

---

**Last Updated:** 2026-01-09
**Document Version:** 1.0
**Status:** Planning Phase - No code written yet
