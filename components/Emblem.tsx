// Ceremonial mark — manifesto seal, footer, about page
// Uses currentColor for rings, mountain, and wordmark text.
// The gold (#D4A843) elements are intentionally hardcoded.
// Never rendered below 120px.

interface EmblemProps {
  size?: number
  className?: string
}

export function Emblem({ size = 160, className = '' }: EmblemProps) {
  // Unique arc IDs to avoid SVG conflicts when multiple emblems render on a page
  const topArcId = `emblem-top-arc-${size}`
  const bottomArcId = `emblem-bottom-arc-${size}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Rebuild Tigray emblem"
      className={className}
    >
      {/* Outer rings */}
      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="100"
        cy="100"
        r="86"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.25"
      />
      {/* Sun */}
      <circle cx="100" cy="72" r="28" fill="#D4A843" opacity="0.9" />
      {/* Mountain fill */}
      <path
        d="M20 140 L55 80 L72 100 L100 72 L118 96 L135 76 L180 140 Z"
        fill="currentColor"
        opacity="0.12"
      />
      {/* Mountain line */}
      <path
        d="M20 140 L55 80 L72 100 L100 72 L118 96 L135 76 L180 140"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      {/* REBUILD TIGRAY on top arc */}
      <path id={topArcId} d="M25 95 A78 78 0 0 1 175 95" fill="none" />
      <text
        fontFamily="Outfit, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="5"
        fill="currentColor"
      >
        <textPath href={`#${topArcId}`} startOffset="50%" textAnchor="middle">
          REBUILD TIGRAY
        </textPath>
      </text>
      {/* Ge'ez motto on bottom arc */}
      <path id={bottomArcId} d="M30 125 A78 78 0 0 0 170 125" fill="none" />
      <text fontFamily="sans-serif" fontSize="10" fill="#D4A843" opacity="0.85">
        <textPath
          href={`#${bottomArcId}`}
          startOffset="50%"
          textAnchor="middle"
        >
          ዘይንድይቦ ጎቦ ዘይንሰግሮ ሩባ
        </textPath>
      </text>
    </svg>
  )
}
