# Eggmpire - Professional Company Profile

A modern, professional Next.js company profile website built with best practices for senior-level frontend development.

## 📁 Project Structure

```
eggmpire/
├── app/
│   ├── (sections)/                  # Route groups for feature sections
│   │   ├── about/                   # About page
│   │   ├── services/                # Services page
│   │   ├── contact/                 # Contact page
│   │   └── team/                    # Team page
│   │
│   ├── api/                         # API routes (future use)
│   │
│   ├── components/                  # Reusable React components
│   │   ├── header/                  # Header/Navigation component
│   │   ├── footer/                  # Footer component
│   │   ├── hero/                    # Hero section component
│   │   └── common/                  # Common components (Button, etc.)
│   │
│   ├── lib/                         # Utility and configuration files
│   │   ├── constants/               # Constants and configuration
│   │   │   └── config.ts            # Site config, navigation, services
│   │   ├── utils/                   # Utility functions
│   │   │   └── helpers.ts           # Common helpers (cn, formatDate, etc.)
│   │   └── hooks/                   # Custom React hooks
│   │       └── index.ts             # useIsMounted, useScrollPosition, useDarkMode
│   │
│   ├── layout.tsx                   # Root layout with metadata
│   ├── page.tsx                     # Home page
│   └── globals.css                  # Global styles with Lexend font
│
├── public/                          # Static assets
│   ├── images/                      # Image files
│   └── fonts/                       # Local font files (if needed)
│
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts              # Tailwind CSS configuration
└── next.config.ts                  # Next.js configuration
```

## 🎨 Typography - Lexend Font

The project uses the **Lexend** font family for all typography. This font is:

- Loaded from Google Fonts
- Optimized for screen readability
- Available in weights: 400, 500, 600, 700
- Configured as a CSS variable: `var(--font-primary)`

### Global Styles Features

- **CSS Variables** for consistent theming
- **Dark Mode Support** with automatic detection
- **Responsive Typography** scales for different screen sizes
- **Semantic HTML** with proper heading hierarchy
- **Accessibility** features built-in

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Key Technologies

- **Next.js 16** - React framework with App Router
- **TailwindCSS 4** - Utility-first CSS framework
- **TypeScript** - Static type checking
- **React 19** - UI library
- **ESLint** - Code quality

## 🏗️ Architecture Guidelines

### File Organization

- **Components** are functional, reusable, and focused
- **Utilities** contain pure functions without side effects
- **Hooks** encapsulate stateful logic
- **Constants** centralize configuration

### Naming Conventions

- Components: PascalCase (e.g., `Header.tsx`)
- Utilities/Hooks: camelCase (e.g., `useScrollPosition`)
- Constants: UPPER_CASE for exports (e.g., `SERVICES`)
- CSS Variables: kebab-case (e.g., `--font-primary`)

### Best Practices

1. **Use 'use client'** only when necessary (interactive components)
2. **Leverage CSS Variables** for theming
3. **Keep components small** and focused
4. **Extract reusable logic** into custom hooks
5. **Use TypeScript** for type safety
6. **Optimize images** with Next.js Image component
7. **Implement proper error handling**
8. **Follow accessibility guidelines**

## 🧩 Components

### Header

- Responsive navigation
- Mobile menu support
- Fixed navigation bar

### Footer

- Multi-column layout
- Useful links
- Social connections
- Copyright notice

### HeroSection

- Eye-catching headline
- Call-to-action buttons
- Gradient background

### Button

- Multiple variants (primary, secondary, outline)
- Size options (sm, md, lg)
- Consistent styling with dark mode

## 🎯 Customization

### Colors

Update CSS variables in `app/globals.css`:

- `--primary`: Primary brand color
- `--secondary`: Secondary brand color
- `--accent`: Accent color

### Content

Edit the configuration in `app/lib/constants/config.ts`:

- Site metadata
- Navigation links
- Services list
- Social links

### Pages

All pages follow the same pattern:

1. Import Header and Footer
2. Create content sections
3. Apply consistent styling

## 📱 Responsive Design

The design is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Use TailwindCSS utilities for responsive design.

## 🔒 Performance Considerations

- Static generation for pages
- Optimized font loading
- Tailwind CSS purging of unused styles
- Image optimization
- Code splitting with App Router

## 📝 Development Tips

1. **Use TypeScript** - Enable strict mode in `tsconfig.json`
2. **Follow ESLint rules** - Run `npm run lint`
3. **Test components** - Create `.test.tsx` files
4. **Use semantic HTML** - Improves accessibility
5. **Optimize bundle size** - Check with `next build`

## 🚀 Deployment

The project is ready to deploy on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Self-hosted servers**

## 📄 License

This project is part of Eggmpire's company profile solution.

## 👥 Support

For questions or issues, contact the development team at hello@eggmpire.com

