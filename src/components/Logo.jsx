import { useState } from "react"

export function Logo({ className = "h-7 w-auto", ...props }) {
  const [imgError, setImgError] = useState(false)
  
  // Try to load the PNG first, fallback to SVG if not found
  return (
    <>
      <img
        src="/logo.png"
        alt="Intelidge"
        className={`object-contain ${className}`}
        onError={() => setImgError(true)}
        style={{ display: imgError ? 'none' : 'block' }}
        {...props}
      />
      {imgError && (
        <svg
          viewBox="0 0 145 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Intelidge logo"
          {...props}
        >
          {/* Intelidge text in white - Bricolage Grotesque font */}
          <text
            x="0"
            y="28"
            fontSize="28"
            fontWeight="700"
            fill="white"
            fontFamily="'Bricolage Grotesque', sans-serif"
            letterSpacing="0"
          >
            Intelidge
          </text>
          {/* Orange dot immediately after the 'e' - positioned as a period */}
          <circle cx="125" cy="24" r="3.5" fill="#f97316" />
        </svg>
      )}
    </>
  )
}
