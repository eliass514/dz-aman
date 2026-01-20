'use client';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 120 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="#6B6560"
        opacity="0.9"
      />
      
      {/* Inner circle */}
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="#8B8680"
      />
      
      {/* Olive leaf/branch - representing peace and healing */}
      <g transform="translate(45, 40)">
        {/* Main leaf shape */}
        <ellipse
          cx="15"
          cy="20"
          rx="12"
          ry="20"
          fill="#D4A054"
          transform="rotate(-15 15 20)"
        />
        
        {/* Leaf vein detail */}
        <path
          d="M 15 5 Q 14 20 15 35"
          stroke="#6B6560"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />
        
        {/* Left side vein */}
        <path
          d="M 15 15 Q 8 18 6 22"
          stroke="#6B6560"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        
        {/* Right side vein */}
        <path
          d="M 15 25 Q 22 26 24 28"
          stroke="#6B6560"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
      </g>
    </svg>
  );
}
