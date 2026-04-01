interface LogoProps {
  size?: number
  className?: string
  withText?: boolean
}

export default function Logo({ size = 48, className = '', withText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Large outer circle */}
        <circle cx="188" cy="200" r="108" stroke="#D4848A" strokeWidth="2.2" />
        {/* Small inner circle (offset — crescent/moon effect) */}
        <circle cx="212" cy="200" r="80" stroke="#D4848A" strokeWidth="2.2" />

        {/* Top circuit node */}
        <circle cx="274" cy="138" r="6" fill="#EDD0D2" />
        <line x1="274" y1="131" x2="274" y2="112" stroke="#D4848A" strokeWidth="2" />
        <line x1="274" y1="112" x2="304" y2="112" stroke="#D4848A" strokeWidth="2" />
        <circle cx="308" cy="112" r="4.5" fill="#D4848A" />

        {/* Bottom circuit node */}
        <circle cx="274" cy="262" r="6" fill="#EDD0D2" />
        <line x1="274" y1="269" x2="274" y2="288" stroke="#D4848A" strokeWidth="2" />
        <line x1="274" y1="288" x2="304" y2="288" stroke="#D4848A" strokeWidth="2" />
        <circle cx="308" cy="288" r="4.5" fill="#D4848A" />
      </svg>

      {withText && (
        <span
          className="font-serif text-ct-off-white tracking-wide"
          style={{ fontSize: size * 0.55 }}
        >
          Celine Tech
        </span>
      )}
    </div>
  )
}
