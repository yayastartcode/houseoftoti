import { motion } from "motion/react";
import {
  Wifi,
  Car,
  MapPin,
  Star,
  Plane,
  GraduationCap,
  ShoppingBag,
  Train,
  Sparkles,
} from "lucide-react";

const About = () => {
  const ratings = [
    { label: "Nilai uang", score: 9.3 },
    { label: "Fasilitas", score: 8.9 },
    { label: "Kebersihan", score: 9.6 },
    { label: "Lokasi", score: 9.1 },
    { label: "Pelayanan", score: 9.3 },
  ];

  const facilities = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Wi-Fi Gratis",
      description:
        "Wi-Fi gratis tersedia di semua kamar untuk tetap terhubung dengan keluarga, teman, atau kebutuhan bisnis selama menginap.",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Parkir Luas",
      description:
        "Fasilitas parkir yang luas dan aman dengan lokasi strategis memudahkan akses dan menjamin keamanan kendaraan Anda.",
    },
  ];

  const landmarks = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      name: "Universitas Gadjah Mada",
    },
    { icon: <GraduationCap className="w-5 h-5" />, name: "UNY Yogyakarta" },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      name: "Universitas Sunan Kalijaga",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      name: "Museum Affandi",
    },
  ];

  const shoppingCenters = [
    { icon: <ShoppingBag className="w-5 h-5" />, name: "Plaza Ambarukmo" },
    { icon: <ShoppingBag className="w-5 h-5" />, name: "Hartono Mall" },
    { icon: <ShoppingBag className="w-5 h-5" />, name: "Galeria Mall" },
  ];

  return (
    <div className="py-16 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-primary mb-4">
            House of ToTi
          </h3>
          <p className="text-xl font-semibold text-foreground mb-4">
            Penginapan Eksklusif di Jantung Yogyakarta
          </p>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Selamat datang di House of ToTi, guest house yang menawarkan
              pengalaman menginap yang nyaman dan penuh gaya di pusat kota
              Yogyakarta. Dengan suasana yang hangat dan pelayanan yang ramah,
              hotel ini menjadi pilihan ideal bagi wisatawan yang mencari
              akomodasi berkualitas tinggi selama menjelajahi keindahan budaya
              dan sejarah kota ini.
            </p>
            <p>
              Setiap detail dirancang untuk memastikan kenyamanan dan kepuasan
              tamu selama menginap. House of ToTi memiliki kamar yang luas dan
              elegan, dilengkapi dengan fasilitas lengkap untuk memenuhi
              kebutuhan tamu. Check-in dimulai dari pukul 2 siang, sementara
              proses check-out harus diselesaikan paling lambat pukul 12 siang.
            </p>
          </div>
        </motion.div>

        {/* Facilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Fasilitas Utama
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                    {facility.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {facility.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Room Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Fasilitas Kamar yang Nyaman
          </h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground mb-4">
              Nikmati kenyamanan maksimal selama menginap di House of ToTi
              dengan fasilitas kamar yang lengkap dan memanjakan:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Pendingin udara (AC) yang sejuk
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Televisi dengan berbagai pilihan saluran
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Air mineral kemasan gratis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Perlengkapan mandi lengkap
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Linen dan handuk bersih
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Location & Transportation */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-lg p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  Akses dari Bandara
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Perjalanan dari Bandara Internasional Adisutjipto memakan waktu
                sekitar 20-30 menit dengan jarak 10 kilometer.
              </p>
              <p className="text-sm text-muted-foreground">
                Tersedia taksi resmi dan layanan ride-hailing seperti Gojek dan
                Grab untuk kemudahan transportasi.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-lg p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Train className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  Stasiun Terdekat
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Stasiun Tugu atau Lempuyangan berada tidak jauh dari properti,
                menawarkan kemudahan akses ke berbagai destinasi.
              </p>
              <p className="text-sm text-muted-foreground">
                Terintegrasi dengan sistem transportasi lokal untuk kemudahan
                berkeliling kota.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Nearby Landmarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Landmark Sekitar
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4">
                Institusi Pendidikan
              </h4>
              <div className="space-y-3">
                {landmarks.map((landmark, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="text-primary">{landmark.icon}</div>
                    <span>{landmark.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4">
                Pusat Perbelanjaan
              </h4>
              <div className="space-y-3">
                {shoppingCenters.map((center, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="text-primary">{center.icon}</div>
                    <span>{center.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Depok Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-border rounded-lg p-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Eksplorasi Depok, Yogyakarta
                </h3>
                <p className="text-muted-foreground">
                  Depok adalah kawasan yang menawan di Yogyakarta yang
                  menawarkan suasana tenang dan penuh keindahan alam.
                  Dikelilingi oleh sawah hijau yang luas dan pepohonan rindang,
                  Depok menjadi tempat sempurna untuk bersantai dan menikmati
                  keindahan alam Indonesia. Nikmati udara segar sambil
                  berjalan-jalan di jalanan yang tenang, merasakan suasana desa
                  yang autentik dan penuh kedamaian.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Harga Kamar
            </h3>
            <p className="text-muted-foreground mb-4">
              House of ToTi menawarkan pengalaman menginap yang unik dan nyaman
              dengan kisaran harga kamar antara{" "}
              <span className="font-semibold text-foreground">
                mulai dari Rp 200.000
              </span>
              . Dibandingkan dengan rata-rata harga kamar hotel di Yogyakarta
              yang berkisar antara Rp 450.000 hingga Rp. 1.000.000 , House of
              ToTi jelas menonjol sebagai pilihan yang lebih premium dan
              eksklusif.
            </p>
            <p className="text-sm text-muted-foreground">
              Keistimewaan yang ditawarkan House of ToTi, mulai dari desain
              interior yang khas hingga layanan yang personal, menjadikannya
              pilihan yang menarik bagi wisatawan yang ingin merasakan
              pengalaman menginap yang berbeda di kota budaya ini.
            </p>
          </div>
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Ulasan Tamu
          </h3>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600">9.2</div>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-blue-600 text-blue-600"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">Luar Biasa</p>
              </div>
              <div className="h-20 w-px bg-border mx-4"></div>
              <div className="flex-1">
                <p className="text-foreground font-medium mb-2">
                  House of ToTi mendapatkan penilaian luar biasa dari para tamu
                  yang mencerminkan pengalaman menginap berkualitas tinggi.
                </p>
                <p className="text-sm text-muted-foreground">
                  Para tamu sangat menghargai nilai, fasilitas, kebersihan, dan
                  pelayanan yang diberikan.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {ratings.map((rating, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {rating.score}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {rating.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
