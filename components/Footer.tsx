import Link from 'next/link'
import { Emblem } from './Emblem'

const links = [
  { href: '/manifesto', label: 'Manifesto' },
]

export function Footer() {
  return (
    <footer className="bg-night text-parchment border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Emblem */}
        <div className="flex justify-center mb-12">
          <Emblem size={120} className="text-parchment" />
        </div>

        {/* Motto */}
        <div className="text-center mb-12">
          <p
            className="font-sans text-sm text-gold mb-2"
            title="zeynidiyibo gobo zeynisegiro ruba — there are no mountains we would not climb, no rivers we would not cross"
          >
            ዘይንድይቦ ጎቦ ዘይንሰግሮ ሩባ
          </p>
          <p className="font-sans text-xs text-parchment italic">
            There are no mountains we would not climb, no rivers we would not cross
          </p>
        </div>

        {/* Nav links */}
        <nav
          className="flex flex-wrap justify-center gap-6 mb-12"
          aria-label="Footer navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs text-parchment hover:text-parchment transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-sans text-xs text-parchment text-center">
          © {new Date().getFullYear()} Rebuild Tigray. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
