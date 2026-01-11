# Aaron's Lawn Care Website

A professional marketing website for Aaron's Lawn Care, a premier lawn care and landscaping service in Louisville, Kentucky. Built with React, TypeScript, and Tailwind CSS.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## 🌿 About

Aaron's Lawn Care has been serving the greater Louisville area for over 20 years, providing professional lawn care and landscaping services. This website showcases our services, allows customers to request quotes, and provides information about our business.

### Key Features

- **10 Service Pages**: Detailed information about each service we offer
- **Quote Request Form**: Easy online quote requests
- **Photo Gallery**: Showcase of our work
- **Customer Reviews**: Testimonials from satisfied clients
- **Service Area Map**: Interactive map showing our coverage area
- **Newsletter Signup**: Stay updated with lawn care tips
- **Mobile Responsive**: Optimized for all devices
- **SEO Optimized**: Built for search engine visibility
- **WCAG 2.1 AA Compliant**: Accessible to all users
- **Performance Optimized**: Lighthouse score 90+ target

## 🚀 Features

- ⚡ **Lightning Fast**: Built with Vite for instant HMR
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎨 **Custom Branding**: Green color palette reflecting lawn care
- 🔍 **SEO Ready**: Meta tags, structured data, and semantic HTML
- ♿ **Accessible**: WCAG 2.1 AA compliance
- 🎯 **Type Safe**: Full TypeScript support
- 📦 **Code Splitting**: Optimized bundle sizes
- 🔒 **Secure**: Security headers and best practices

## 🛠️ Tech Stack

### Core

- **React 19.2.3** - UI library
- **TypeScript 5.x** - Type safety
- **Vite** - Build tool and dev server
- **React Router v7** - Client-side routing

### Styling

- **Tailwind CSS 3.4+** - Utility-first CSS
- **@tailwindcss/forms** - Form styling
- **@tailwindcss/typography** - Rich text styling
- **@tailwindcss/aspect-ratio** - Aspect ratio utilities

### Forms & Validation

- **React Hook Form** - Form management
- **Zod** - Schema validation
- **@hookform/resolvers** - Resolver for Zod

### SEO

- **react-helmet-async** - Meta tag management
- **JSON-LD Structured Data** - LocalBusiness schema

### Deployment

- **Netlify** - Hosting and CI/CD
- **Netlify Functions** - Serverless backend (future)

## 🏁 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   cd website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env.local` and fill in your values:

   ```bash
   cp .env.example .env.local
   ```

   See [Environment Variables](#environment-variables) for details.

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

## 💻 Development

### Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Lint code with ESLint
- **`npm run type-check`** - Check TypeScript types

### Development Workflow

1. **Create a new branch** for your feature

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the project structure

3. **Test your changes** locally

   ```bash
   npm run dev
   ```

4. **Lint and type-check** before committing

   ```bash
   npm run lint
   npm run type-check
   ```

5. **Build to verify** production build works

   ```bash
   npm run build
   npm run preview
   ```

6. **Commit and push** your changes

   ```bash
   git add .
   git commit -m "feat: your feature description"
   git push origin feature/your-feature-name
   ```

### Path Aliases

The project uses TypeScript path aliases for cleaner imports:

```typescript
// Instead of this:
import Button from '../../../components/shared/Button';

// Use this:
import Button from '@components/shared/Button';
```

**Available aliases:**

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@pages/*` → `src/pages/*`
- `@hooks/*` → `src/hooks/*`
- `@contexts/*` → `src/contexts/*`
- `@services/*` → `src/services/*`
- `@utils/*` → `src/utils/*`
- `@types/*` → `src/types/*`
- `@data/*` → `src/data/*`
- `@assets/*` → `src/assets/*`

## 🚀 Deployment

### Netlify Deployment

This site is configured for automatic deployment on Netlify.

1. **Connect your repository** to Netlify

2. **Configure build settings** (already set in `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Set environment variables** in Netlify dashboard:
   - Go to Site settings → Environment variables
   - Add variables from `.env.example`

4. **Deploy**: Push to your main branch to trigger deployment

### Manual Deployment

```bash
# Build the project
npm run build

# Preview the build
npm run preview

# Deploy the dist/ folder to your hosting provider
```

## 📁 Project Structure

```
website/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, icons, styles
│   │   ├── icons/
│   │   └── styles/
│   ├── components/      # React components
│   │   ├── layout/      # Layout components (Header, Footer, etc.)
│   │   ├── shared/      # Reusable components (Button, Card, etc.)
│   │   ├── home/        # Home page components
│   │   ├── services/    # Service page components
│   │   ├── gallery/     # Gallery components
│   │   ├── forms/       # Form components
│   │   └── maps/        # Map components
│   ├── pages/           # Page components
│   │   └── services/    # Individual service pages (10 pages)
│   ├── hooks/           # Custom React hooks
│   ├── contexts/        # React contexts (Toast, Theme)
│   ├── services/        # API and external services
│   │   ├── api/         # API functions
│   │   └── analytics/   # Analytics integration
│   ├── utils/           # Utility functions
│   ├── types/           # TypeScript type definitions
│   ├── data/            # Static data (services, testimonials, etc.)
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   ├── router.tsx       # Route configuration
│   └── index.css        # Global styles
├── .env.example         # Environment variables template
├── netlify.toml         # Netlify configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` and configure:

### Required Variables

```bash
VITE_CONTACT_EMAIL=gnaua429@gmail.com
VITE_CONTACT_PHONE=5029268524
VITE_BUSINESS_NAME="Aaron's Lawn Care"
VITE_BUSINESS_ADDRESS="Louisville, KY"
VITE_SITE_URL=https://aaronslawncare.com
```

### Optional Variables (for Phase 2+)

```bash
# Google Maps API
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here

# Mailchimp (Newsletter)
VITE_MAILCHIMP_API_KEY=your_api_key_here
VITE_MAILCHIMP_AUDIENCE_ID=your_audience_id_here

# Google Analytics
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Social Media URLs
VITE_FACEBOOK_URL=https://facebook.com/aaronslawncare
VITE_INSTAGRAM_URL=https://instagram.com/aaronslawncare
VITE_TWITTER_URL=https://twitter.com/aaronslawncare
```

## 🎨 Branding Guidelines

### Colors

- **Primary Green**: `#16a34a` (Tailwind green-600)
- **Secondary Gray**: `#57534e` (Tailwind stone-600)
- **Accent Orange**: `#f59e0b` (Tailwind amber-500)

### Typography

- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

### Logo

The logo should incorporate green elements to reflect lawn care. Consider using a leaf, grass blade, or lawn mower icon.

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Convention

We follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Build process or tooling changes

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Contact

**Aaron's Lawn Care**
- Email: gnaua429@gmail.com
- Phone: (502) 926-8524
- Location: Louisville, KY

---

Built with ❤️ by Claude Code
