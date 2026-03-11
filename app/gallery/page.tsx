import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'The land, the people, and the future — a visual record of what we are building toward.',
}

// TODO: Replace placeholder items with real photos in /public/gallery/
const placeholderItems = [
  {
    id: 1,
    caption: '[Landscape — Geralta mountains, Tigray]',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 2,
    caption: '[Community gathering, diaspora event]',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 3,
    caption: '[Portraits — organizers in Minneapolis]',
    aspect: 'aspect-square',
  },
  {
    id: 4,
    caption: '[Relief workers, Northern Tigray]',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 5,
    caption: '[Cultural event — Tigrinya language class]',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 6,
    caption: '[Agricultural recovery, rural community]',
    aspect: 'aspect-[4/3]',
  },
]

export default function GalleryPage() {
  return (
    <>
      <Nav />

      <main className="px-6 pt-24 pb-32">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="pt-12 mb-16">
            <p className="font-sans text-xs font-semibold tracking-widest text-gold uppercase mb-6">
              Gallery
            </p>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-night dark:text-parchment mb-6 max-w-xl">
              What we are fighting for
            </h1>
            <p className="font-sans text-base text-night dark:text-parchment max-w-lg leading-relaxed">
              The land, the people, and the future we are building toward.
            </p>
          </div>

          {/* Grid */}
          {/* TODO: Replace with real images from /public/gallery/ */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {placeholderItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid mb-4 group"
              >
                <div
                  className={`${item.aspect} w-full bg-sand dark:bg-night-surface rounded-lg flex items-end overflow-hidden`}
                >
                  {/* TODO: Replace with <Image> from next/image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-sans text-xs text-night dark:text-parchment px-4 text-center">
                      [Photo placeholder]
                    </span>
                  </div>
                </div>
                <p className="font-sans text-xs text-night dark:text-parchment mt-2 px-1">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
