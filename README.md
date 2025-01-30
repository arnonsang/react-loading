# @arnonsang/react-loading

A highly customizable and lightweight React loading component library that provides multiple loading animations and variants for your React applications.

## Installation

```bash
npm install @arnonsang/react-loading
# or
yarn add @arnonsang/react-loading
# or
pnpm add @arnonsang/react-loading
```

## Features

- 🎨 Multiple loading variants (spinner, dots, pulse, skeleton, and more)
- 📐 Customizable sizes and colors
- 🎯 TypeScript support
- 🪶 Lightweight and zero dependencies
- 📱 Responsive and accessible
- 🔧 Easy to customize and extend

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
| `variant` | `string` | `"spinner"` | Loading animation variant. Available options: `"spinner"`, `"dots"`, `"pulse"`, `"skeleton"`, `"blank"`, `"balls"`, `"bars"`, `"bubbles"`, `"cubes"`, `"cylon"`, `"spin"`, `"spinningBubbles"`, `"spokes"` |
| `size` | `string` | `"md"` | Size of the loading animation. Options: `"sm"`, `"md"`, `"lg"` |
| `themeColor` | `string` | `"blue"` | Predefined color theme. Options: `"red"`, `"blue"`, `"green"`, `"yellow"`, `"purple"`, `"pink"`, `"gray"` |
| `color` | `string` | `"#ffffff"` | Custom color for the loading animation |
| `width` | `number \| string` | - | Custom width of the loading container |
| `height` | `number \| string` | - | Custom height of the loading container |
| `delay` | `number` | `0` | Delay before the animation starts (in milliseconds) |
| `text` | `string` | `"Loading..."` | Loading text to display |
| `fullPage` | `boolean` | `false` | Whether to display the loading in full page mode |
| `hideText` | `boolean` | `false` | Whether to hide the loading text |
| `className` | `string` | `""` | Additional CSS class names |

## Variants

### Basic Variants
- `spinner`: Classic rotating spinner
- `dots`: Three bouncing dots
- `pulse`: Pulsing circle
- `skeleton`: Skeleton loading placeholder

### Advanced Variants
- `balls`: Bouncing balls animation
- `bars`: Animated loading bars
- `bubbles`: Floating bubbles
- `cubes`: rotating cubes
- `cylon`: Scanning animation
- `spin`: Smooth spinning animation
- `spinningBubbles`: Rotating bubble pattern
- `spokes`: Rotating spokes pattern
- `blank`: Empty placeholder

## Examples

```jsx
// Spinner with custom color
<Loading variant="spinner" color="#FF5733" />

// Full-page loading
<Loading variant="dots" fullPage={true} />

// Custom size and themed loading
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
```

## TypeScript Support

This package includes TypeScript definitions. You can import types directly:

```typescript
import { LoadingProps } from '@arnonsang/react-loading';
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
