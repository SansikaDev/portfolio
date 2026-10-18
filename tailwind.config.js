/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pine: {
          DEFAULT: '#12141A',
          deep: '#0A0B0E',
          mid: '#1C1F28',
        },
        birch: {
          DEFAULT: '#F2F3F6',
          soft: '#F7F8FA',
        },
        moss: {
          DEFAULT: '#3D5A73',
          bright: '#4E7190',
        },
        copper: {
          DEFAULT: '#E23B1A',
          hover: '#F04A28',
        },
        mist: '#C5C9D1',
        ink: {
          DEFAULT: '#12141A',
        },
        cream: {
          DEFAULT: '#F2F3F6',
          muted: 'rgba(242, 243, 246, 0.7)',
        },
        ember: {
          DEFAULT: '#E23B1A',
        },
        primary: {
          DEFAULT: '#3D5A73',
          foreground: '#F2F3F6',
        },
        sand: {
          DEFAULT: '#8B919C',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        lift: '0 18px 50px rgba(18, 20, 26, 0.14)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
}
