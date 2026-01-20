'use client';

interface AlgerianPatternProps {
  className?: string;
  opacity?: number;
}

export default function AlgerianPattern({ className = '', opacity = 0.05 }: AlgerianPatternProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="algerian-pattern"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          {/* Geometric zellige-inspired pattern */}
          <g opacity={opacity}>
            {/* Star pattern */}
            <polygon
              points="40,10 45,25 60,25 48,35 52,50 40,42 28,50 32,35 20,25 35,25"
              fill="#6B6560"
            />
            
            {/* Corner decorations */}
            <circle cx="10" cy="10" r="3" fill="#D4A054" />
            <circle cx="70" cy="10" r="3" fill="#D4A054" />
            <circle cx="10" cy="70" r="3" fill="#D4A054" />
            <circle cx="70" cy="70" r="3" fill="#D4A054" />
            
            {/* Connecting lines */}
            <line x1="10" y1="10" x2="70" y2="70" stroke="#8B8680" strokeWidth="0.5" />
            <line x1="70" y1="10" x2="10" y2="70" stroke="#8B8680" strokeWidth="0.5" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#algerian-pattern)" />
    </svg>
  );
}
