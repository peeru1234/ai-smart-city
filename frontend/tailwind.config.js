/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#070a10',
          800: '#0d131f',
          700: '#141d2f',
          600: '#1e293b',
          500: '#334155'
        },
        cyan: {
          glow: '#00f0ff',
          neon: '#00d8f6',
        },
        accent: {
          blue: '#2563eb',
          purple: '#7c3aed',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#f43f5e'
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite alternate',
        'radar-sweep': 'radarSweep 4s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'scan': 'scanLine 3s linear infinite'
      },
      keyframes: {
        pulseGlow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 240, 255, 0.4), 0 0 15px rgba(0, 240, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.8), 0 0 35px rgba(0, 240, 255, 0.5)' }
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        scanLine: {
          '0%': { top: '0%' },
          '100%': { top: '100%' }
        }
      }
    },
  },
  plugins: [],
}
