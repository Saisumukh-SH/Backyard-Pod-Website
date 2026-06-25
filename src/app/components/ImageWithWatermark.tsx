import React from "react";

interface ImageWithWatermarkProps {
  src: string;
  alt?: string;
  className?: string;
  fit?: "cover" | "contain";

  // Watermark options
  watermark?: boolean;
  watermarkOpacity?: number;
  watermarkPosition?: "center" | "bottom-right";

  children?: React.ReactNode;
}

export default function ImageWithWatermark({
  src,
  alt = "",
  className = "",
  fit = "cover",

  watermark = true,
  watermarkOpacity = 1,
  watermarkPosition = "bottom-right",

  children,
}: ImageWithWatermarkProps) {
  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div
        role="img"
        aria-label={alt}
        className={`w-full h-full bg-center bg-no-repeat ${
          fit === "cover" ? "bg-cover" : "bg-contain"
        }`}
        style={{
          backgroundImage: `url(${src})`,
        }}
      />

      {/* Watermark */}
      {/* Watermark */}
      {watermark && (
        <div
          className="
      absolute
      bottom-3
      right-3
      sm:bottom-4
      sm:right-4
      md:bottom-5
      md:right-5
      lg:bottom-6
      lg:right-6
      pointer-events-none
      select-none
      z-20
    "
          style={{
            opacity: watermarkOpacity,
          }}
        >
          <span
            className="
        text-white
        font-light
        uppercase
        tracking-[0.35em]
        text-[6px]
sm:text-[8px]
md:text-[10px]
lg:text-xs
        whitespace-nowrap
        drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]
      "
          >
            © BACKYARD NEST
          </span>
        </div>
      )}

      {children}
    </div>
  );
}
