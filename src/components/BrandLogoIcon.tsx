import React from "react";

interface BrandLogoIconProps {
  className?: string;
  size?: number;
  roundedClass?: string;
}

/**
 * Official Monochromatic Nextsem NS Brand Icon
 * Dark rounded rectangle with vibrant glowing emerald green border and bold green "NS" monogram.
 */
export function BrandLogoIcon({
  className = "w-8 h-8",
  size,
  roundedClass = "rounded-xl",
}: BrandLogoIconProps) {
  const sizeStyle = size ? { width: size, height: size } : undefined;
  return (
    <div
      className={`relative bg-[#080d1a] border-[2px] border-[#04AA6D] flex items-center justify-center shadow-[0_0_12px_rgba(4,170,109,0.35)] select-none shrink-0 ${roundedClass} ${className}`}
      style={sizeStyle}
    >
      <span className="font-sans font-black text-[#04AA6D] tracking-tight leading-none text-center select-none text-[0.9em]">
        NS
      </span>
    </div>
  );
}

export default BrandLogoIcon;
