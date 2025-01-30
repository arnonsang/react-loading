import React from "react";
import "./styles.css";

interface LoadingProps {
  // Combined variants
  variant?:
    | "spinner"
    | "dots"
    | "pulse"
    | "skeleton"
    | "blank"
    | "balls"
    | "bars"
    | "bubbles"
    | "cubes"
    | "cylon"
    | "spin"
    | "spinningBubbles"
    | "spokes";

  // Size presets from original version
  size?: "sm" | "md" | "lg";

  // Original color options
  themeColor?: "red" | "blue" | "green" | "yellow" | "purple" | "pink" | "gray";

  // New customization options
  color?: string;
  width?: number | string;
  height?: number | string;
  delay?: number;

  // Original options
  text?: string;
  fullPage?: boolean;
  hideText?: boolean;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  variant = "spinner",
  size = "md",
  themeColor = "blue",
  color = "#ffffff",
  width,
  height,
  delay = 0,
  text = "Loading...",
  fullPage = false,
  hideText = false,
  className = "",
}) => {
  const getClassName = (...classes: string[]) =>
    [...classes, className].filter(Boolean).join(" ");

  const containerClass = fullPage
    ? "loading-container loading-fullpage"
    : "loading-container";

  const sizeClass = `loading-${size}`;
  const colorClass = `loading-${themeColor}`;

  // Convert size/width/height to CSS value
  const getSize = (size: number | string | undefined) =>
    typeof size === "number" ? `${size}px` : size;

  // Base styles for custom size variants
  const containerStyle: React.CSSProperties = {
    width: getSize(width),
    height: getSize(height),
    animationDelay: `${delay}ms`,
    "--loading-color": color,
  } as React.CSSProperties;

  const renderOriginalVariants = () => {
    switch (variant) {
      case "dots":
        return (
          <div className="loading-dots">
            {[1, 2, 3].map((dot) => (
              <div
                key={dot}
                className={getClassName("loading-dot", sizeClass, colorClass)}
                style={{ animationDelay: `${dot * 0.15}s` }}
              />
            ))}
          </div>
        );

      case "pulse":
        return (
          <div
            className={getClassName("loading-pulse", sizeClass, colorClass)}
          />
        );

      case "skeleton":
        return (
          <div className="loading-skeleton">
            <div className="skeleton-line" />
            <div className="skeleton-line" style={{ width: "83%" }} />
            <div className="skeleton-line" style={{ width: "66%" }} />
          </div>
        );

      case "spinner":
      default:
        return (
          <div
            className={getClassName("loading-spinner", sizeClass, colorClass)}
          />
        );
    }
  };

  const renderNewVariants = () => {
    const defaultSize = {
      width: width || "60px",
      height: height || "60px",
      "--loading-color": color,
    } as React.CSSProperties;

    switch (variant) {
      case "balls":
        return (
          <div className="loading-balls" style={defaultSize}>
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="ball" 
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        );

      case "bars":
        return (
          <div className="loading-bars" style={defaultSize}>
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="bar" 
                style={{ animationDelay: `${-1.0 + (i * 0.1)}s` }}
              />
            ))}
          </div>
        );

      case "bubbles":
        return (
          <div className="loading-bubbles" style={defaultSize}>
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="bubble" 
                style={{
                  left: `${(i % 3) * 40}%`,
                  top: `${Math.floor(i / 3) * 40}%`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        );

      case "cubes":
        return (
          <div className="loading-cubes" style={defaultSize}>
            <div className="cube1" />
            <div className="cube2" />
          </div>
        );

      case "cylon":
        return (
          <div className="loading-cylon" style={defaultSize}>
            <div className="cylon-line" />
          </div>
        );

      case "spin":
        return (
          <div className="loading-spin" style={defaultSize}>
            <div className="spinner" />
          </div>
        );

      case "spinningBubbles":
        return (
          <div className="loading-spinning-bubbles" style={defaultSize}>
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="bubble" 
                style={{
                  left: `${(i % 3) * 40}%`,
                  top: `${Math.floor(i / 3) * 40}%`,
                  animationDelay: `${i * 0.1}s`,
                  transform: `rotate(${i * 45}deg)`
                }}
              />
            ))}
          </div>
        );

      case "spokes":
        return (
          <div className="loading-spokes" style={defaultSize}>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="spoke"
                style={{
                  transform: `rotate(${i * 45}deg)`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        );

      case "blank":
        return <div className="loading-blank" style={containerStyle} />;
    }
  };

  return (
    <div className={containerClass}>
      <div className="loading-content">
        {["spinner", "dots", "pulse", "skeleton"].indexOf(variant) !== -1
          ? renderOriginalVariants()
          : renderNewVariants()}

        {!hideText && text && (
          <span className={`loading-text loading-text-${size}`}>{text}</span>
        )}
      </div>
    </div>
  );
};

export default Loading;