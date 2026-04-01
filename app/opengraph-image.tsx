import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Celine Tech — Desenvolvimento, Automação e IA'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0E0B0D',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '72px 96px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Background radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '40%',
            transform: 'translate(-50%, -50%)',
            width: 900,
            height: 600,
            background:
              'radial-gradient(ellipse, rgba(192,96,112,0.18) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* Decorative rings — right side */}
        <div
          style={{
            position: 'absolute',
            right: 100,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 340,
            height: 340,
            border: '1.5px solid rgba(192,96,112,0.18)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 155,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 230,
            height: 230,
            border: '1.5px solid rgba(212,132,138,0.12)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 200,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 140,
            height: 140,
            border: '1.5px solid rgba(192,96,112,0.10)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />

        {/* Dot grid — subtle */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(192,96,112,0.25) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            opacity: 0.15,
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxWidth: 720,
            position: 'relative',
          }}
        >
          {/* Label */}
          <div
            style={{
              fontSize: 15,
              color: '#D4848A',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: 28,
              display: 'flex',
              fontFamily: '"Trebuchet MS", sans-serif',
            }}
          >
            Desenvolvimento · Automação · Inteligência Artificial
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 82,
              fontWeight: 600,
              color: '#FDF5F5',
              lineHeight: 1.05,
              marginBottom: 28,
              display: 'flex',
              letterSpacing: '-0.01em',
            }}
          >
            Celine Tech
          </div>

          {/* Accent divider */}
          <div
            style={{
              width: 56,
              height: 2,
              background: '#C06070',
              marginBottom: 28,
              display: 'flex',
              borderRadius: 2,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: 'rgba(237,208,210,0.68)',
              lineHeight: 1.45,
              display: 'flex',
              fontFamily: '"Trebuchet MS", sans-serif',
              maxWidth: 620,
            }}
          >
            Transforme seu negócio com tecnologia que funciona.
          </div>

          {/* URL badge */}
          <div
            style={{
              marginTop: 48,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 22px',
              border: '1px solid rgba(192,96,112,0.35)',
              borderRadius: 999,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#C06070',
                display: 'flex',
              }}
            />
            <span
              style={{
                fontSize: 16,
                color: 'rgba(237,208,210,0.55)',
                letterSpacing: '0.08em',
                fontFamily: '"Trebuchet MS", sans-serif',
                display: 'flex',
              }}
            >
              celinetech.com.br
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
