import { motion } from 'motion/react'
import {
  Sparkles,
  Award,
  Clock,
  Wifi,
  Car,
  Check,
  Globe,
  HeadphonesIcon,
} from 'lucide-react'

interface MainFacility {
  icon: React.ReactNode
  title: string
  rating?: string
  description: string
}

interface ExtraFacility {
  name: string
  icon: React.ReactNode
}

const Facilities = () => {
  const mainFacilities: MainFacility[] = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Bersih higienis',
      rating: '9.8/10',
      description: '"Kamarnya luas, bersih, dan rapi!"',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Pilihan Terbaik',
      rating: '9.6/10',
      description: 'untuk harga berbanding mutu',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Check-in 24 jam',
      description: 'Fleksibilitas waktu check-in untuk kenyamanan Anda',
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'WiFi gratis di semua kamar',
      description: 'Internet cepat dan stabil untuk kebutuhan digital Anda',
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Tempat parkir mobil',
      description: 'Area parkir yang aman dan luas untuk kendaraan Anda',
    },
  ]

  const outstandingFacilities: ExtraFacility[] = [
    { name: 'Wifi gratis', icon: <Wifi className="w-4 h-4" /> },
    { name: 'Layanan Internet', icon: <Globe className="w-4 h-4" /> },
    { name: 'Parkir gratis', icon: <Car className="w-4 h-4" /> },
    { name: 'Resepsionis 24 jam', icon: <HeadphonesIcon className="w-4 h-4" /> },
    { name: 'Bahasa Indonesia', icon: <Globe className="w-4 h-4" /> },
  ]

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Main Facilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Fasilitas utama
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainFacilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center relative">
                      <div className="text-green-600">{facility.icon}</div>
                      {facility.rating && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground">
                        {facility.title}
                      </h3>
                      {facility.rating && (
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                          {facility.rating}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outstanding Facilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Fasilitas luar biasa
            <span className="text-blue-600 text-base font-normal ml-2">
              - dinilai 9,4 oleh tamu
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {outstandingFacilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm text-foreground">{facility.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Facilities
