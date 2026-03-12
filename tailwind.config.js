/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4A843',
        burgundy: '#7A2E2E',
        'soft-gold': '#C9A96E',
        night: '#1A1A1A',
        'dark-earth': '#4A3728',
        sandstone: '#9B8068',
        sand: '#F2EDE6',
        parchment: '#FAFAF7',
        'night-surface': '#242424',
      },
      fontFamily: {
        serif: ['var(--font-garamond)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'reading': ['1.125rem', { lineHeight: '1.8' }],
      },
      maxWidth: {
        'reading': '680px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.night'),
            fontFamily: [theme('fontFamily.serif')].flat().join(', '),
            fontSize: '1.125rem',
            lineHeight: '1.8',
            maxWidth: '680px',
            '--tw-prose-body': theme('colors.night'),
            '--tw-prose-headings': theme('colors.night'),
            '--tw-prose-links': theme('colors.gold'),
            '--tw-prose-bold': theme('colors.night'),
            '--tw-prose-hr': theme('colors.sand'),
            '--tw-prose-quotes': theme('colors.night'),
            '--tw-prose-quote-borders': theme('colors.gold'),
            '--tw-prose-captions': theme('colors.sandstone'),
            '--tw-prose-code': theme('colors.burgundy'),
            '--tw-prose-pre-bg': theme('colors.sand'),
            'h1, h2, h3, h4': {
              fontFamily: [theme('fontFamily.serif')].flat().join(', '),
              fontWeight: '600',
            },
            a: {
              color: theme('colors.gold'),
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            },
            'a:hover': {
              color: theme('colors.soft-gold'),
            },
            hr: {
              borderColor: theme('colors.sand'),
              marginTop: '2.5em',
              marginBottom: '2.5em',
            },
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
          },
        },
        invert: {
          css: {
            // Override the direct color property set in DEFAULT
            color: theme('colors.parchment'),
            '--tw-prose-body': theme('colors.parchment'),
            '--tw-prose-headings': theme('colors.parchment'),
            '--tw-prose-links': theme('colors.gold'),
            '--tw-prose-bold': theme('colors.parchment'),
            '--tw-prose-hr': '#2a2a2a',
            '--tw-prose-quotes': theme('colors.parchment'),
            '--tw-prose-quote-borders': theme('colors.gold'),
            '--tw-prose-captions': theme('colors.sandstone'),
            '--tw-prose-code': theme('colors.soft-gold'),
            '--tw-prose-pre-bg': '#2a2a2a',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
