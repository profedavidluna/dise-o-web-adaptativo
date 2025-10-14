# Diseño Web Adaptativo - AI Coding Instructions

This is a **Spanish-language responsive web design course** focused on practical mobile-first development using CSS Media Queries.

## Project Architecture

### Course Structure
- Each lesson is contained in `clase XX/` folders with self-contained exercises
- Standard file pattern: `template.html` (base structure), `styles.css` (implementation target), `readme.md` (exercise instructions)
- HTML structures are **read-only** - focus entirely on CSS implementation

### Core Learning Methodology
This course follows **Mobile-First Responsive Design** principles:

1. **Base styles** (no media queries) = Mobile layout (`< 601px`)
2. **Tablet breakpoint**: `@media screen and (min-width: 601px)` 
3. **Desktop breakpoint**: `@media screen and (min-width: 1025px)`

## Key Patterns & Conventions

### CSS Organization Pattern
```css
/* 1. ESTILOS BASE (MOBILE FIRST: < 601px) */
/* Reset, base styles, mobile layout */

/* 2. MEDIA QUERY PARA TABLET (min-width: 601px) */
/* 2-column layouts, horizontal navigation */

/* 3. MEDIA QUERY PARA DESKTOP (min-width: 1025px) */  
/* 3-column grids, dramatic scaling, max-width containers */
```

### Responsive Navigation Pattern
- **Mobile**: Show `.mobile-menu-button` (☰), hide `.desktop-menu`
- **Tablet+**: Hide `.mobile-menu-button`, show `.desktop-menu` with `display: flex`
- Use semantic class names like `.hidden-by-default` for mobile navigation

### Layout Transformation Strategy
- **Mobile**: Single column, stacked content
- **Tablet**: 2-column flexbox layouts (`flex: 1` for equal distribution)  
- **Desktop**: CSS Grid with 3 columns (`grid-template-columns: repeat(3, 1fr)`)

### Typography Scaling
Progressive font-size increases across breakpoints:
- Mobile: `2.5em` → Tablet: `3em` → Desktop: `5em` (dramatic impact)

## Spanish Language Context

- All content, comments, and class names are in Spanish
- Exercise instructions use Spanish terminology: "breakpoints", "layout", "responsive"
- CSS comments follow Spanish educational format with numbered sections

## Device Testing Features

The project includes `user-agent-detector.js` for cross-device testing:
- URL parameter simulation: `?view=mobile|tablet|desktop`
- Automatic user-agent detection fallback
- Dynamic stylesheet loading based on device type

## Development Workflow

1. **Never modify HTML structure** - work exclusively in CSS
2. **Start mobile-first** - base styles should work at narrow widths
3. **Test at breakpoints**: 601px and 1025px transitions
4. **Focus on layout transformation** - not just scaling but reorganizing content hierarchy

## Common Implementation Targets

- `.hero-section`: Single column → Flexbox 2-col → Centered max-width container
- `.features-container`: Stacked → 2-col grid → 3-col grid  
- Navigation: Hamburger → Horizontal → Enhanced horizontal with max-width
- Typography: Progressive scaling with dramatic desktop increase

When implementing responsive designs, prioritize **user experience transformation** over simple scaling - each breakpoint should feel purpose-built for its device category.