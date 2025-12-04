# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 application built with Vite, using:
- Vue Router for routing
- Pinia for state management
- Vue i18n for internationalization (French/English)
- Tailwind CSS for styling
- Vitest for unit testing
- Playwright for E2E testing
- Animate.css for CSS animations

## Common Commands

### Development
```bash
npm run dev        # Start development server with hot-reload
npm run build      # Build for production
npm run preview    # Preview production build locally
```

### Testing
```bash
npm run test:unit                      # Run all unit tests with Vitest
npm run test:unit -- path/to/test.js   # Run specific test file
npm run test:unit -- --watch           # Run tests in watch mode

npm run test:e2e                       # Run all E2E tests with Playwright
npm run test:e2e -- --project=chromium # Run tests only on Chromium
npm run test:e2e -- tests/example.spec.ts # Run specific test file
npm run test:e2e -- --debug            # Run tests in debug mode
```

### First-time E2E setup
```bash
npx playwright install  # Install browsers for Playwright
```

## Project Architecture

### Key Directory Structure
- `src/` - Main application source code
  - `router/` - Vue Router configuration
  - `stores/` - Pinia stores using composition API style
  - `views/` - Route-level components
  - `components/` - Reusable Vue components
  - `assets/` - Static assets and styles
  - `locales/` - i18n translation files (fr.json, en.json)

### Important Configurations
- **Path Alias**: `@` maps to `./src` directory (configured in vite.config.js)
- **Vue DevTools**: Enabled in development via vite-plugin-vue-devtools
- **Tailwind CSS**: Configured to scan `index.html` and all files in `src/**/*.{vue,js,ts,jsx,tsx}`

### Testing Structure
- Unit tests are co-located with components in `__tests__` directories
- E2E tests are in the `e2e/` directory at the project root
- Vitest uses jsdom environment for component testing

## Internationalization

This application supports French and English languages using Vue i18n.

### i18n Configuration Files
- `src/locales/fr.json` - French translations
- `src/locales/en.json` - English translations

### Widget Translation Requirements
**IMPORTANT**: When creating any new widget or component, you MUST:
1. Add all text strings to both translation files (`fr.json` and `en.json`)
2. Use the `$t()` function for all user-facing text
3. Never hardcode text strings in French or English directly in components
4. Follow the existing translation key structure in the locale files

## Animations

This project uses [Animate.css](https://animate.style/) for CSS animations.

### Usage
Add animation classes directly to elements:
```html
<div class="animate__animated animate__fadeIn">Animated element</div>
```

### Common Animation Classes
- `animate__fadeIn`, `animate__fadeOut` - Fade effects
- `animate__slideInLeft`, `animate__slideInRight` - Slide effects
- `animate__bounce`, `animate__pulse` - Attention seekers
- `animate__zoomIn`, `animate__zoomOut` - Zoom effects

### With Vue Transitions
```html
<Transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
  <div v-if="show">Content</div>
</Transition>
```

### Animation Utilities
- `animate__delay-1s` to `animate__delay-5s` - Add delays
- `animate__faster`, `animate__fast`, `animate__slow`, `animate__slower` - Speed modifiers