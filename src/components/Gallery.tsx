import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface Photo {
  id: number
  url: string
  alt: string
  className?: string
}

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const photos: Photo[] = [
    {
      id: 1,
      url: '/images/toti1.jpeg',
      alt: 'House of ToTi Room 1',
      className: 'row-span-2',
    },
    {
      id: 2,
      url: '/images/toti2.jpeg',
      alt: 'House of ToTi Room 2',
    },
    {
      id: 3,
      url: '/images/toti3.jpeg',
      alt: 'House of ToTi Room 3',
    },
    {
      id: 4,
      url: '/images/toti4.jpeg',
      alt: 'House of ToTi Room 4',
      className: 'row-span-2',
    },
    {
      id: 5,
      url: '/images/toti5.jpeg',
      alt: 'House of ToTi Room 5',
    },
    {
      id: 6,
      url: '/images/toti6.jpeg',
      alt: 'House of ToTi Room 6',
    },
    {
      id: 7,
      url: '/images/toti7.jpeg',
      alt: 'House of ToTi Room 7',
    },
    {
      id: 8,
      url: '/images/toti8.jpeg',
      alt: 'House of ToTi Room 8',
    },
    {
      id: 9,
      url: '/images/toti9.jpeg',
      alt: 'House of ToTi Room 9',
    },
    {
      id: 10,
      url: '/images/toti10.jpeg',
      alt: 'House of ToTi Room 10',
    },
  ]

  // Prepare slides for lightbox
  const slides = photos.map((photo) => ({
    src: photo.url,
    alt: photo.alt,
  }))

  // Open lightbox at specific index
  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-4xl font-bold text-foreground">
            Photos of our rooms
          </h2>
          <Button
            variant="outline"
            onClick={() => openLightbox(0)}
            className="gap-2 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:text-blue-800 hover:border-blue-300"
          >
            <Eye className="w-4 h-4" />
            View all photos
          </Button>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                photo.className || ''
              }`}
            >
              {/* Image */}
              <motion.img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500"
                whileHover={{ scale: 1.1 }}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium line-clamp-2">
                    {photo.alt}
                  </p>
                </div>
              </div>

              {/* Zoom icon on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                  <Eye className="w-4 h-4 text-gray-800" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button (Mobile) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center md:hidden"
        >
          <Button 
            onClick={() => openLightbox(0)}
            className="w-full max-w-sm bg-blue-600 hover:bg-blue-700 text-white gap-2"
          >
            <Eye className="w-4 h-4" />
            View all photos
          </Button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentIndex}
        on={{
          view: ({ index }) => setCurrentIndex(index),
        }}
      />
    </div>
  )
}

export default Gallery
