import type { Metadata } from 'next'
import { EB_Garamond, Outfit } from 'next/font/google'
import './globals.css'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Rebuild Tigray',
    template: '%s — Rebuild Tigray',
  },
  description:
    'A platform of record for the Tigrayan diaspora — the organizations and individuals doing the work of rebuilding, in their own words.',
  openGraph: {
    siteName: 'Rebuild Tigray',
    locale: 'en_US',
    type: 'website',
  },
}

// This script runs before React hydrates — prevents dark mode flash
const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
    // Add transition class after initial paint to avoid flash
    requestAnimationFrame(function() {
      document.documentElement.classList.add('theme-loaded');
    });
  })();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${garamond.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-parchment dark:bg-night text-night dark:text-parchment">
        {children}
      </body>
    </html>
  )
}
