// Primary mark — nav, favicon, social avatar
// Uses currentColor for mountain strokes so it adapts to light/dark mode.
// The gold sun fill (#D4A843) is intentionally hardcoded — it stays gold in both modes.

interface HorizonMarkProps {
  size?: number
  className?: string
}

export function HorizonMark({ size = 40, className = '' }: HorizonMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Rebuild Tigray horizon mark"
      className={className}
    >
      {/* Sun */}
      <circle cx="50" cy="38" r="24" fill="#D4A843" opacity="0.9" />
      {/* Mountain fill */}
      <path
        d="M5 80 L25 45 L40 58 L50 38 L63 56 L75 42 L95 80 Z"
        fill="currentColor"
        opacity="0.12"
      />
      {/* Mountain line */}
      <path
        d="M5 80 L25 45 L40 58 L50 38 L63 56 L75 42 L95 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
