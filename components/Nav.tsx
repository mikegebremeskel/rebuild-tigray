'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HorizonMark } from './HorizonMark'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '/manifesto', label: 'Manifesto' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 dark:bg-night/90 backdrop-blur-sm border-b border-sand dark:border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-night dark:text-parchment hover:opacity-80 transition-opacity"
          aria-label="Rebuild Tigray — home"
        >
          <HorizonMark size={32} />
          <span
            className="font-sans text-sm font-bold tracking-[0.06em] text-night dark:text-parchment"
            style={{ letterSpacing: '0.06em' }}
          >
            REBUILD TIGRAY
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                'font-sans text-[13px] transition-colors',
                pathname === link.href || pathname.startsWith(link.href + '/')
                  ? 'text-gold'
                  : 'text-night dark:text-parchment hover:text-gold',
              ].join(' ')}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="w-8 h-8 flex flex-col items-center justify-center gap-[5px] text-night dark:text-parchment hover:text-gold transition-colors"
          >
            <span
              className={[
                'block h-[1.5px] w-5 bg-current transition-transform duration-200',
                open ? 'translate-y-[6.5px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block h-[1.5px] w-5 bg-current transition-opacity duration-200',
                open ? 'opacity-0' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block h-[1.5px] w-5 bg-current transition-transform duration-200',
                open ? '-translate-y-[6.5px] -rotate-45' : '',
              ].join(' ')}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden border-t border-sand dark:border-white/10 bg-parchment dark:bg-night px-6 py-6"
          aria-label="Mobile menu"
        >
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={[
                    'block font-sans text-sm py-2 transition-colors',
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? 'text-gold'
                      : 'text-night dark:text-parchment hover:text-gold',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
