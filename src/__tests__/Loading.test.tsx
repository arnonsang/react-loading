import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from '../index';
import { LoadingProps } from '../types';

describe('Loading Component', () => {
  it('renders without crashing', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders with default spinner variant', () => {
    const { container } = render(<Loading />);
    expect(container.querySelector('.loading-spinner')).toBeInTheDocument();
    expect(container.querySelector('.loading-md')).toBeInTheDocument();
  });

  it('renders custom text', () => {
    render(<Loading text="Please wait..." />);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
  });

  it('hides text when hideText is true', () => {
    render(<Loading text="Loading..." hideText={true} />);
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Loading className="custom-class" />);
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('renders fullPage mode', () => {
    const { container } = render(<Loading fullPage={true} />);
    expect(container.querySelector('.loading-fullpage')).toBeInTheDocument();
  });

  describe('Variants', () => {
    const variants: Array<{ variant: LoadingProps['variant']; selector: string }> = [
      { variant: 'spinner', selector: '.loading-spinner' },
      { variant: 'dots', selector: '.loading-dots' },
      { variant: 'pulse', selector: '.loading-pulse' },
      { variant: 'skeleton', selector: '.loading-skeleton' },
      { variant: 'bars', selector: '.loading-bars' },
      { variant: 'bubbles', selector: '.loading-bubbles' },
      { variant: 'cylon', selector: '.loading-cylon' },
      { variant: 'spinningBubbles', selector: '.loading-spinning-bubbles' },
      { variant: 'ripple', selector: '.loading-ripple' },
      { variant: 'wave', selector: '.loading-wave' },
      { variant: 'orbit', selector: '.loading-orbit' },
      { variant: 'bounce', selector: '.loading-bounce' },
      { variant: 'snake', selector: '.loading-snake' },
      { variant: 'grid', selector: '.loading-grid' },
      { variant: 'heart', selector: '.loading-heart' },
      { variant: 'spiral', selector: '.loading-spiral' }
    ];

    variants.forEach(({ variant, selector }) => {
      it(`renders ${variant} variant correctly`, () => {
        const { container } = render(<Loading variant={variant} />);
        expect(container.querySelector(selector)).toBeInTheDocument();
      });
    });

    it('renders blank variant with no content', () => {
      const { container } = render(<Loading variant="blank" />);
      expect(container.querySelector('.loading-container')).toBeInTheDocument();
      expect(container.querySelector('.loading-spinner')).not.toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('renders extra small size', () => {
      const { container } = render(<Loading size="xs" />);
      expect(container.querySelector('.loading-xs')).toBeInTheDocument();
    });

    it('renders small size', () => {
      const { container } = render(<Loading size="sm" />);
      expect(container.querySelector('.loading-sm')).toBeInTheDocument();
    });

    it('renders medium size (default)', () => {
      const { container } = render(<Loading size="md" />);
      expect(container.querySelector('.loading-md')).toBeInTheDocument();
    });

    it('renders large size', () => {
      const { container } = render(<Loading size="lg" />);
      expect(container.querySelector('.loading-lg')).toBeInTheDocument();
    });

    it('renders extra large size', () => {
      const { container } = render(<Loading size="xl" />);
      expect(container.querySelector('.loading-xl')).toBeInTheDocument();
    });

    it('renders 2xl size', () => {
      const { container } = render(<Loading size="2xl" />);
      expect(container.querySelector('.loading-2xl')).toBeInTheDocument();
    });
  });

  describe('Colors and Themes', () => {
    it('applies custom color via CSS variable', () => {
      const { container } = render(<Loading color="#ff0000" />);
      const loadingContainer = container.querySelector('.loading-container');
      expect(loadingContainer).toHaveStyle('--loading-color: #ff0000');
    });

    it('applies theme color', () => {
      const { container } = render(<Loading themeColor="red" />);
      const loadingContainer = container.querySelector('.loading-container');
      expect(loadingContainer).toHaveStyle('--loading-color: #f56565');
    });

    it('custom color overrides theme color', () => {
      const { container } = render(<Loading themeColor="blue" color="#ff0000" />);
      const loadingContainer = container.querySelector('.loading-container');
      expect(loadingContainer).toHaveStyle('--loading-color: #ff0000');
    });
  });

  describe('Custom Dimensions', () => {
    it('applies custom width and height', () => {
      const { container } = render(<Loading width={100} height={50} />);
      const loadingContainer = container.querySelector('.loading-container');
      expect(loadingContainer).toHaveStyle('width: 100px');
      expect(loadingContainer).toHaveStyle('height: 50px');
    });

    it('applies string dimensions', () => {
      const { container } = render(<Loading width="200px" height="100px" />);
      const loadingContainer = container.querySelector('.loading-container');
      expect(loadingContainer).toHaveStyle('width: 200px');
      expect(loadingContainer).toHaveStyle('height: 100px');
    });
  });

  describe('Animation Delay', () => {
    it('applies animation delay', () => {
      const { container } = render(<Loading delay={500} />);
      const loadingContainer = container.querySelector('.loading-container');
      expect(loadingContainer).toHaveStyle('animation-delay: 500ms');
    });
  });

  describe('Dots Variant Specific', () => {
    it('renders three dots', () => {
      const { container } = render(<Loading variant="dots" />);
      const dots = container.querySelectorAll('.loading-dot');
      expect(dots).toHaveLength(3);
    });
  });

  describe('Skeleton Variant Specific', () => {
    it('renders skeleton lines', () => {
      const { container } = render(<Loading variant="skeleton" />);
      const lines = container.querySelectorAll('.skeleton-line');
      expect(lines).toHaveLength(3);
    });
  });

  describe('Bars Variant Specific', () => {
    it('renders five bars', () => {
      const { container } = render(<Loading variant="bars" />);
      const bars = container.querySelectorAll('.bar');
      expect(bars).toHaveLength(5);
    });
  });

  describe('Snake Variant Specific', () => {
    it('renders eight snake segments', () => {
      const { container } = render(<Loading variant="snake" />);
      const segments = container.querySelectorAll('.snake-segment');
      expect(segments).toHaveLength(8);
    });
  });

  describe('Grid Variant Specific', () => {
    it('renders nine grid squares', () => {
      const { container } = render(<Loading variant="grid" />);
      const squares = container.querySelectorAll('.grid-square');
      expect(squares).toHaveLength(9);
    });
  });

  describe('Spiral Variant Specific', () => {
    it('renders six spiral dots', () => {
      const { container } = render(<Loading variant="spiral" />);
      const dots = container.querySelectorAll('.spiral-dot');
      expect(dots).toHaveLength(6);
    });
  });

  describe('Accessibility', () => {
    it('has proper loading text for screen readers', () => {
      render(<Loading text="Loading content" />);
      expect(screen.getByText('Loading content')).toBeInTheDocument();
    });

    it('maintains accessibility with custom text', () => {
      render(<Loading text="Please wait while we process your request" />);
      expect(screen.getByText('Please wait while we process your request')).toBeInTheDocument();
    });
  });
});