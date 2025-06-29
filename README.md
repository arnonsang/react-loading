# @arnonsang/react-loading

[![npm version](https://badge.fury.io/js/@arnonsang%2Freact-loading.svg)](https://badge.fury.io/js/@arnonsang%2Freact-loading)
[![npm downloads](https://img.shields.io/npm/dm/@arnonsang/react-loading.svg)](https://www.npmjs.com/package/@arnonsang/react-loading)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@arnonsang/react-loading.svg)](https://bundlephobia.com/package/@arnonsang/react-loading)
[![license](https://img.shields.io/npm/l/@arnonsang/react-loading.svg)](https://github.com/arnonsang/react-loading/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-%3E%3D16.8.0-blue.svg)](https://reactjs.org/)
[![GitHub stars](https://img.shields.io/github/stars/arnonsang/react-loading.svg?style=social&label=Star)](https://github.com/arnonsang/react-loading)

A customizable and lightweight React loading component powered by **pure CSS**. Zero JavaScript animations for optimal performance - all effects use CSS transforms and keyframes for smooth rendering in your React applications.

## Installation

```bash
npm i @arnonsang/react-loading
# or
yarn add @arnonsang/react-loading
# or
pnpm add @arnonsang/react-loading
# or
bun add @arnonsang/react-loading
```

## Features

- 🎨 **17 Beautiful Loading Variants** - From classic spinners to modern animations
- 📐 **6 Tailwind-Inspired Sizes** - xs, sm, md, lg, xl, 2xl for perfect scaling
- 🎯 **Full TypeScript Support** - Complete type definitions and IntelliSense
- 🪶 **Zero Dependencies** - Lightweight with only React as peer dependency
- 📱 **Responsive & Accessible** - Works on all devices with accessibility support
- 🔧 **Highly Customizable** - Colors, dimensions, delays, and styling options
- ⚡ **Optimized Performance** - CSS-based animations for smooth 60fps

## Usage

```jsx
import Loading from '@arnonsang/react-loading';

// Basic usage
function MyComponent() {
  return <Loading />;
}

// With custom props
function CustomLoadingExample() {
  return (
    <Loading
      variant="spinner"
      size="md"
      themeColor="blue"
      text="Please wait..."
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `string` | `"spinner"` | Loading animation variant. Available options: `"spinner"`, `"dots"`, `"pulse"`, `"skeleton"`, `"blank"`, `"bars"`, `"bubbles"`, `"cylon"`, `"spinningBubbles"`, `"ripple"`, `"wave"`, `"orbit"`, `"bounce"`, `"snake"`, `"grid"`, `"heart"`, `"spiral"` |
| `size` | `string` | `"md"` | Size of the loading animation. Options: `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`, `"2xl"` |
| `themeColor` | `string` | `"blue"` | Predefined color theme. Options: `"red"`, `"blue"`, `"green"`, `"yellow"`, `"purple"`, `"pink"`, `"gray"` |
| `color` | `string` | `"#4299e1"` | Custom color for the loading animation (overrides themeColor) |
| `width` | `number \| string` | - | Custom width of the loading container |
| `height` | `number \| string` | - | Custom height of the loading container |
| `delay` | `number` | `0` | Delay before the animation starts (in milliseconds) |
| `text` | `string` | `"Loading..."` | Loading text to display |
| `fullPage` | `boolean` | `false` | Whether to display the loading in full page mode |
| `hideText` | `boolean` | `false` | Whether to hide the loading text |
| `className` | `string` | `""` | Additional CSS class names |

## All 17 Variants

### Basic Animations
- **`spinner`** - Classic rotating spinner (perfect for general loading)
- **`dots`** - Three bouncing dots with smooth motion
- **`pulse`** - Pulsing circle with expanding rings
- **`bars`** - Animated vertical bars rising and falling

### Advanced Animations  
- **`skeleton`** - Skeleton loading placeholder with shimmer effect
- **`bubbles`** - Floating bubbles appearing and disappearing
- **`cylon`** - Scanning line animation (Battlestar Galactica inspired)
- **`spinningBubbles`** - Rotating bubbles around central point

### Modern Effects
- **`ripple`** - Expanding ripple effect with concentric circles
- **`wave`** - Wave motion animation with sequential dots
- **`orbit`** - Orbiting dots around center with physics
- **`bounce`** - Bouncing ball with realistic shadow

### Creative Variants
- **`snake`** - Snake-like movement with flowing segments  
- **`grid`** - 3x3 grid of pulsing squares
- **`heart`** - Heartbeat pulse animation
- **`spiral`** - Spiral rotating dots with fade effect
- **`blank`** - Invisible placeholder for conditional loading

## Size Options

Following Tailwind CSS size conventions:

| Size | Dimensions | Use Case |
|------|------------|----------|
| `xs` | 12px | Inline text, small buttons |
| `sm` | 20px | Form inputs, compact UI |
| `md` | 36px | **Default** - General purpose |
| `lg` | 56px | Card headers, prominent sections |
| `xl` | 80px | Page centers, major loading states |
| `2xl` | 112px | Full-screen overlays, splash screens |

## Examples

```jsx
// Spinner with custom color
<Loading variant="spinner" color="#FF5733" />

// Full-page loading
<Loading variant="dots" fullPage={true} />

// Different sizes (Tailwind-inspired)
<Loading variant="spinner" size="xs" />   {/* 12px */}
<Loading variant="dots" size="sm" />     {/* 20px */}
<Loading variant="pulse" size="md" />    {/* 36px - default */}
<Loading variant="bars" size="lg" />     {/* 56px */}
<Loading variant="grid" size="xl" />     {/* 80px */}
<Loading variant="heart" size="2xl" />   {/* 112px */}

// Custom themed loading
<Loading
  variant="pulse"
  size="lg"
  themeColor="purple"
  text="Processing..."
/>

// Skeleton loading
<Loading variant="skeleton" width={200} height={100} />

// Delayed animation
<Loading variant="spinningBubbles" delay={500} />

// Advanced variants with custom styling
<Loading variant="ripple" size="lg" color="#e91e63" />
<Loading variant="wave" size="xl" themeColor="purple" />
<Loading variant="orbit" size="lg" color="#2196f3" />
<Loading variant="bounce" size="md" color="#ff9800" />
<Loading variant="snake" size="sm" themeColor="green" />
<Loading variant="grid" size="lg" color="#607d8b" />
<Loading variant="heart" size="xl" color="#f44336" />
<Loading variant="spiral" size="2xl" delay={200} />

// Custom dimensions (overrides size)
<Loading variant="skeleton" width={200} height={100} />
<Loading variant="cylon" width="300px" height="8px" />
<Loading variant="orbit" width={120} height={120} />
```

## CSS Customization

For advanced customization, you can override styles using CSS classes. Each variant has specific class names:

### CSS Class Structure

```css
/* Main container */
.loading-container { }

/* Content wrapper */
.loading-content { }

/* Loading text */
.loading-text { }

/* Full page overlay */
.loading-fullpage { }

/* Size classes */
.loading-xs, .loading-sm, .loading-md, .loading-lg, .loading-xl, .loading-2xl { }
```

### Variant-Specific Classes

Each loading variant uses specific CSS classes that you can customize:

```css
/* Spinner */
.loading-spinner { }

/* Dots */
.loading-dots { }
.loading-dot { }

/* Pulse */
.loading-pulse { }

/* Skeleton */
.loading-skeleton { }
.skeleton-line { }

/* Bars */
.loading-bars { }
.bar { }

/* Bubbles */
.loading-bubbles { }
.bubble { }

/* Cylon */
.loading-cylon { }
.cylon-line { }

/* Spinning Bubbles */
.loading-spinning-bubbles { }

/* Ripple */
.loading-ripple { }
.ripple-circle { }

/* Wave */
.loading-wave { }
.wave-dot { }

/* Orbit */
.loading-orbit { }
.orbit-center { }
.orbit-dot { }

/* Bounce */
.loading-bounce { }
.bounce-ball { }
.bounce-shadow { }

/* Snake */
.loading-snake { }
.snake-segment { }

/* Grid */
.loading-grid { }
.grid-square { }

/* Heart */
.loading-heart { }
.heart-shape { }

/* Spiral */
.loading-spiral { }
.spiral-dot { }
```

### Custom Styling Examples

```css
/* Custom spinner with gradient */
.my-custom-loading .loading-spinner {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 50%;
}

/* Custom dots with different colors */
.my-custom-loading .loading-dot:nth-child(1) { background: #ff6b6b; }
.my-custom-loading .loading-dot:nth-child(2) { background: #4ecdc4; }
.my-custom-loading .loading-dot:nth-child(3) { background: #45b7d1; }

/* Custom text styling */
.my-custom-loading .loading-text {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.1rem;
}

/* Custom container background */
.my-custom-loading.loading-container {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
}
```

```jsx
// Usage with custom className
<Loading 
  variant="spinner" 
  className="my-custom-loading"
  text="Custom Loading..."
/>
```

## TypeScript Support

This package includes complete TypeScript definitions with full IntelliSense support:

```typescript
import Loading, { 
  LoadingProps, 
  LoadingVariant, 
  LoadingSize, 
  LoadingThemeColor 
} from '@arnonsang/react-loading';

// Type-safe component usage
const MyComponent: React.FC = () => {
  const variant: LoadingVariant = 'spinner';
  const size: LoadingSize = 'lg';
  
  return (
    <Loading 
      variant={variant}
      size={size}
      themeColor="blue"
      delay={300}
    />
  );
};
```

## Performance & Best Practices

- **CSS-based animations** ensure smooth 60fps performance
- **Zero JavaScript animations** - all effects use CSS transforms and keyframes  
- **Lightweight bundle** - ~15KB minified, ~5KB gzipped
- **Tree-shakeable** - Only import what you need
- **Server-side rendering** compatible
- **Accessibility-friendly** - Respects `prefers-reduced-motion`

```jsx
// Conditional loading with performance in mind
{isLoading && (
  <Loading 
    variant="dots" 
    size="sm" 
    hideText={true}
    delay={100} // Prevents flash for quick loads
  />
)}

// Full-page loading overlay
<Loading 
  variant="spinner"
  size="xl" 
  fullPage={true}
  text="Loading your content..."
/>
```

## Browser Support

The loading animations are supported in all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [arnonsang](https://github.com/arnonsang)
