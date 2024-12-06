import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        'lg-card': '1390px',
      },
      colors: {
        'mb-black': '#09090B',
        'mb-gray-1000': '#171720',
        'mb-gray-950': '#141418',
        'mb-gray-900': '#0D0D0F',
        'mb-gray-850': '#0F172A',
        'mb-gray-800': '#334155',
        'mb-gray-750': '#313e52',
        'mb-gray-700': '#1A1A1E',
        'mb-gray-650': '#1e293b00',
        'mb-gray-600': '#27272A',
        'mb-gray-550': '#18181B',
        'mb-gray-500': '#475569',
        'mb-gray-450': '#45536B',
        'mb-gray-400': '#94A3B8',
        'mb-gray-350': '#A1A1A9',
        'mb-gray-300': '#CBD5E1',
        'mb-gray-250': '#24242B',
        'mb-gray-200': '#B4B4B4',
        'mb-white-300': '#EEEEEE',
        'mb-white-100': '#FAFAFA',
        'mb-blue': '#3C82F6',
        'mb-blue-10': '#3c82f61a',
        'mb-blue-20': '#3c82f633',
        'mb-green': '#70FF7D',
        'mb-red': '#FF2424',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        custom: '0px 0px 10px 4px rgba(224, 135, 255, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
