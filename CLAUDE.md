# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Note**: This is a demonstration project. We are creating template pages to showcase to clients.

This is a Vue 3 application built with Vite, using:
- Vue Router for routing
- Pinia for state management
- Vue i18n for internationalization (French/English)
- Tailwind CSS for styling
- Vitest for unit testing
- Playwright for E2E testing
- Animate.css for CSS animations
- Fontsource for self-hosted fonts (Inter Variable)
- Font Awesome for icons

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

## Fonts (Fontsource)

This project uses [Fontsource](https://fontsource.org/) for self-hosted fonts. The Inter Variable font is configured and available globally.

### Configuration
- Font is imported in `src/main.js`
- Tailwind is configured to use Inter as the default sans-serif font
- Supports all font weights from 100 to 900 (variable font)

### Usage
The font is applied automatically via Tailwind's `font-sans` class or through the base CSS. You can use font weight utilities:
```html
<p class="font-light">Light text (300)</p>
<p class="font-normal">Normal text (400)</p>
<p class="font-medium">Medium text (500)</p>
<p class="font-semibold">Semibold text (600)</p>
<p class="font-bold">Bold text (700)</p>
```

## Icons (Font Awesome)

This project uses [Font Awesome](https://fontawesome.com/) for icons. The `<font-awesome-icon>` component is registered globally.

### Best Practices
**IMPORTANT**: Use icons sparingly and intelligently:
- Only use icons when they add genuine value to the user experience
- Prefer text labels over icons when the meaning isn't immediately clear
- Don't add icons purely for decoration - every icon should serve a purpose
- Avoid icon overload: too many icons create visual noise and reduce clarity
- When in doubt, leave the icon out

### Available Icon Sets
- **Solid** (`fas`) - Filled icons
- **Regular** (`far`) - Outlined icons
- **Brands** (`fab`) - Brand logos (GitHub, Twitter, etc.)

### Usage
Use the `<font-awesome-icon>` component in any Vue template:
```html
<!-- Solid icons -->
<font-awesome-icon icon="fa-solid fa-home" />
<font-awesome-icon :icon="['fas', 'user']" />

<!-- Regular icons -->
<font-awesome-icon icon="fa-regular fa-heart" />
<font-awesome-icon :icon="['far', 'bell']" />

<!-- Brand icons -->
<font-awesome-icon icon="fa-brands fa-github" />
<font-awesome-icon :icon="['fab', 'linkedin']" />
```

### Icon Modifiers
```html
<!-- Sizes -->
<font-awesome-icon icon="fa-solid fa-spinner" size="xs" />
<font-awesome-icon icon="fa-solid fa-spinner" size="lg" />
<font-awesome-icon icon="fa-solid fa-spinner" size="2x" />

<!-- Animations -->
<font-awesome-icon icon="fa-solid fa-spinner" spin />
<font-awesome-icon icon="fa-solid fa-heart" beat />

<!-- Rotation & Flip -->
<font-awesome-icon icon="fa-solid fa-arrow-right" rotation="90" />
<font-awesome-icon icon="fa-solid fa-arrow-right" flip="horizontal" />
```

### Icon Reference
Browse available icons at: https://fontawesome.com/icons