export function Logo({ className = "h-10 w-10", ...props }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Agilo Labs logo"
      {...props}
    >
      <title>Agilo Labs - AI Solutions Studio</title>
      
      {/* Simple "A" letter */}
      <path
        d="M 20 10 L 28 30 L 24 30 L 22.5 25 L 17.5 25 L 16 30 L 12 30 Z M 20 14 L 18.5 22 L 21.5 22 Z"
        fill="currentColor"
        className="text-white"
      />
    </svg>
  )
}
