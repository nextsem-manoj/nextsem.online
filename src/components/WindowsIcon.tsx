import React from 'react';

interface WindowsIconProps {
  className?: string;
  fill?: string;
  size?: number;
}

/**
 * Authentic Monochromatic Windows 11 Grid Logo (4 equal tiles)
 * Strictly conforms to monochrome & theme styling rules (currentColor / white / emerald / slate).
 */
export function WindowsIcon({ className = "w-4 h-4 inline-block align-text-bottom", fill = "currentColor", size }: WindowsIconProps) {
  const sizeStyle = size ? { width: size, height: size } : undefined;
  return (
    <svg 
      viewBox="-24 0 136 88" 
      className={`mx-1 ${className}`} 
      style={sizeStyle}
      fill={fill} 
      aria-label="Windows" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h40v40H0zM48 0h40v40H48zM0 48h40v40H0zM48 48h40v40H48z" />
    </svg>
  );
}

export default WindowsIcon;
