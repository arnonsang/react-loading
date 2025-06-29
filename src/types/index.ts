export type LoadingVariant = 
  | 'spinner'
  | 'dots'
  | 'pulse'
  | 'skeleton'
  | 'bars'
  | 'bubbles'
  | 'cylon'
  | 'spinningBubbles'
  | 'ripple'
  | 'wave'
  | 'orbit'
  | 'bounce'
  | 'snake'
  | 'grid'
  | 'heart'
  | 'spiral'
  | 'blank';

export type LoadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type LoadingThemeColor = 
  | 'red'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'pink'
  | 'gray';

export interface LoadingProps {
  variant?: LoadingVariant;
  size?: LoadingSize;
  themeColor?: LoadingThemeColor;
  color?: string;
  width?: number | string;
  height?: number | string;
  delay?: number;
  text?: string;
  fullPage?: boolean;
  hideText?: boolean;
  className?: string;
}