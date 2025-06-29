import React from 'react';
import './index.css';
import { LoadingProps, LoadingVariant, LoadingSize, LoadingThemeColor } from './types';
import { themeColors } from './types/constants';

// Re-export types for external use
export type { LoadingProps, LoadingVariant, LoadingSize, LoadingThemeColor };

const Loading: React.FC<LoadingProps> = ({
  variant = 'spinner',
  size = 'md',
  themeColor = 'blue',
  color,
  width,
  height,
  delay = 0,
  text = 'Loading...',
  fullPage = false,
  hideText = false,
  className = ''
}) => {
  const finalColor = color || themeColors[themeColor];
  
  const containerStyle: React.CSSProperties = {
    '--loading-color': finalColor,
    animationDelay: `${delay}ms`
  } as React.CSSProperties;

  // Apply custom dimensions if provided
  if (width) {
    containerStyle.width = typeof width === 'number' ? `${width}px` : width;
  }
  if (height) {
    containerStyle.height = typeof height === 'number' ? `${height}px` : height;
  }

  const renderLoadingContent = () => {
    switch (variant) {
      case 'spinner':
        return <div className={`loading-spinner loading-${size}`} />;
      
      case 'dots':
        return (
          <div className={`loading-dots loading-${size}`}>
            <div className="loading-dot" />
            <div className="loading-dot" />
            <div className="loading-dot" />
          </div>
        );
      
      case 'pulse':
        return <div className={`loading-pulse loading-${size}`} />;
      
      case 'skeleton':
        return (
          <div className={`loading-skeleton loading-${size}`}>
            <div className="skeleton-line" />
            <div className="skeleton-line" style={{ width: '83%' }} />
            <div className="skeleton-line" style={{ width: '66%' }} />
          </div>
        );
      
      case 'bars':
        return (
          <div className={`loading-bars loading-${size}`}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        );
      
      case 'bubbles':
        return (
          <div className={`loading-bubbles loading-${size}`}>
            <div className="bubble" style={{ left: '20%', top: '20%', animationDelay: '0s' }} />
            <div className="bubble" style={{ left: '60%', top: '20%', animationDelay: '0.2s' }} />
            <div className="bubble" style={{ left: '20%', top: '60%', animationDelay: '0.4s' }} />
            <div className="bubble" style={{ left: '60%', top: '60%', animationDelay: '0.6s' }} />
          </div>
        );
      
      case 'cylon':
        return (
          <div className={`loading-cylon loading-${size}`}>
            <div className="cylon-line" />
          </div>
        );
      
      case 'spinningBubbles':
        return (
          <div className={`loading-spinning-bubbles loading-${size}`}>
            <div className="bubble" style={{ transform: 'rotate(0deg) translateX(1.5em)' }} />
            <div className="bubble" style={{ transform: 'rotate(120deg) translateX(1.5em)' }} />
            <div className="bubble" style={{ transform: 'rotate(240deg) translateX(1.5em)' }} />
          </div>
        );
      
      case 'ripple':
        return (
          <div className={`loading-ripple loading-${size}`}>
            <div className="ripple-circle" style={{ animationDelay: '0s' }} />
            <div className="ripple-circle" style={{ animationDelay: '0.5s' }} />
            <div className="ripple-circle" style={{ animationDelay: '1s' }} />
          </div>
        );
      
      case 'wave':
        return (
          <div className={`loading-wave loading-${size}`}>
            <div className="wave-dot" style={{ animationDelay: '0s' }} />
            <div className="wave-dot" style={{ animationDelay: '0.1s' }} />
            <div className="wave-dot" style={{ animationDelay: '0.2s' }} />
            <div className="wave-dot" style={{ animationDelay: '0.3s' }} />
            <div className="wave-dot" style={{ animationDelay: '0.4s' }} />
          </div>
        );
      
      case 'orbit':
        return (
          <div className={`loading-orbit loading-${size}`}>
            <div className="orbit-center" />
            <div className="orbit-dot" style={{ animationDelay: '0s', transform: 'rotate(0deg) translateX(1.5em)' }} />
            <div className="orbit-dot" style={{ animationDelay: '0.3s', transform: 'rotate(120deg) translateX(1.5em)' }} />
            <div className="orbit-dot" style={{ animationDelay: '0.6s', transform: 'rotate(240deg) translateX(1.5em)' }} />
          </div>
        );
      
      case 'bounce':
        return (
          <div className={`loading-bounce loading-${size}`}>
            <div className="bounce-ball" />
            <div className="bounce-shadow" />
          </div>
        );
      
      case 'snake':
        return (
          <div className={`loading-snake loading-${size}`}>
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="snake-segment" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        );
      
      case 'grid':
        return (
          <div className={`loading-grid loading-${size}`}>
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="grid-square" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        );
      
      case 'heart':
        return (
          <div className={`loading-heart loading-${size}`}>
            <div className="heart-shape" />
          </div>
        );
      
      case 'spiral':
        return (
          <div className={`loading-spiral loading-${size}`}>
            {Array.from({ length: 6 }, (_, i) => (
              <div 
                key={i} 
                className="spiral-dot" 
                style={{ 
                  animationDelay: `${i * 0.2}s`, 
                  transform: `rotate(${i * 60}deg) translateX(1.2em)` 
                }} 
              />
            ))}
          </div>
        );
      
      case 'blank':
        return null;
      
      default:
        return <div className={`loading-spinner loading-${size}`} />;
    }
  };

  const content = (
    <div 
      className={`loading-container ${className}`}
      style={containerStyle}
    >
      <div className="loading-content">
        {renderLoadingContent()}
        {!hideText && variant !== 'blank' && (
          <div className="loading-text">{text}</div>
        )}
      </div>
    </div>
  );

  if (fullPage) {
    return (
      <div className="loading-fullpage">
        {content}
      </div>
    );
  }

  return content;
};

export default Loading;