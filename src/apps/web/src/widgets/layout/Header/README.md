# Header (Navbar) Widget

## Architecture

The Header widget follows a modular architecture with clear separation of concerns:

```
Header/
├── Header.tsx              # Root orchestrator
├── index.ts                # Barrel export
├── components/
│   ├── ActionButtons.tsx    # Theme, Language, Login/User buttons
│   ├── DesktopNav.tsx       # Desktop navigation (lg+)
│   ├── MobileMenu.tsx       # Slide-in mobile menu
│   ├── MobileToggle.tsx     # Hamburger toggle button
│   ├── WebNavbarLoginButton/  # Login button with popover
│   └── WebNavbarUserButton/   # User menu button
├── hooks/
│   ├── useNavbarLogin.ts    # Login popover state management
│   ├── useNavbarMobile.ts   # Mobile menu open/close state
│   └── useNavbarScroll.ts   # Scroll detection for styling
└── styles/
    └── navbarVariants.ts    # Tailwind-variants styles
```

## Key Features

- **Mobile-first**: Hamburger menu on mobile, full nav on desktop
- **Sticky header**: Fixed position with backdrop blur
- **Scroll-aware**: Changes size and shadow on scroll
- **Dark mode**: Supports theme switching via ThemeProvider
- **Accessible**: ARIA labels, keyboard navigation
- **Animated**: Smooth transitions for menu open/close
