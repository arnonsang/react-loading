import { LoadingVariant, LoadingSize, LoadingThemeColor, LoadingProps } from '../types';

describe('TypeScript Type Exports', () => {
  it('exports LoadingVariant type correctly', () => {
    const variants: LoadingVariant[] = [
      'spinner',
      'dots', 
      'pulse',
      'skeleton',
      'bars',
      'bubbles',
      'cylon',
      'spinningBubbles',
      'ripple',
      'wave',
      'orbit',
      'bounce',
      'snake',
      'grid',
      'heart',
      'spiral',
      'blank'
    ];
    
    expect(variants).toHaveLength(17);
    expect(variants).toContain('spinner');
    expect(variants).toContain('blank');
  });

  it('exports LoadingSize type correctly', () => {
    const sizes: LoadingSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    
    expect(sizes).toHaveLength(6);
    expect(sizes).toContain('xs');
    expect(sizes).toContain('sm');
    expect(sizes).toContain('md');
    expect(sizes).toContain('lg');
    expect(sizes).toContain('xl');
    expect(sizes).toContain('2xl');
  });

  it('exports LoadingThemeColor type correctly', () => {
    const themeColors: LoadingThemeColor[] = [
      'red',
      'blue', 
      'green',
      'yellow',
      'purple',
      'pink',
      'gray'
    ];
    
    expect(themeColors).toHaveLength(7);
    expect(themeColors).toContain('red');
    expect(themeColors).toContain('blue');
    expect(themeColors).toContain('gray');
  });

  it('exports LoadingProps interface correctly', () => {
    const props: LoadingProps = {
      variant: 'spinner',
      size: 'md',
      themeColor: 'blue',
      color: '#ff0000',
      width: 100,
      height: 50,
      delay: 300,
      text: 'Loading...',
      fullPage: false,
      hideText: false,
      className: 'custom-class'
    };

    expect(props.variant).toBe('spinner');
    expect(props.size).toBe('md');
    expect(props.themeColor).toBe('blue');
    expect(props.color).toBe('#ff0000');
    expect(props.width).toBe(100);
    expect(props.height).toBe(50);
    expect(props.delay).toBe(300);
    expect(props.text).toBe('Loading...');
    expect(props.fullPage).toBe(false);
    expect(props.hideText).toBe(false);
    expect(props.className).toBe('custom-class');
  });

  it('allows optional props', () => {
    const minimalProps: LoadingProps = {};
    expect(minimalProps).toBeDefined();
  });

  it('allows string dimensions', () => {
    const propsWithStringDimensions: LoadingProps = {
      width: '200px',
      height: '100px'
    };
    
    expect(propsWithStringDimensions.width).toBe('200px');
    expect(propsWithStringDimensions.height).toBe('100px');
  });
});