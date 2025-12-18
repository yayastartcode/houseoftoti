import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Home, BedDouble } from "lucide-react";

interface Room {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  roomSize?: string;
  roomSizeSqFt?: string;
  beds: Array<{
    type: string;
    count: number;
  }>;
}

const Rooms = () => {
  // Function to handle WhatsApp booking for specific room
  const handleRoomWhatsApp = (room: Room) => {
    const whatsappNumber = "6281804111552"; // Format international
    
    // Format message with room details
    let message = `Halo, saya ingin memesan kamar di House of ToTi:\n\n`;
    message += `🏨 Tipe Kamar: ${room.title}`;
    
    if (room.subtitle) {
      message += ` ${room.subtitle}`;
    }
    message += `\n`;
    
    if (room.roomSize) {
      message += `📐 Ukuran: ${room.roomSize} (${room.roomSizeSqFt})\n`;
    }
    
    message += `🛏️ Fasilitas Tempat Tidur:\n`;
    room.beds.forEach((bed) => {
      message += `   - ${bed.count} ${bed.type}\n`;
    });
    
    message += `\nMohon informasi ketersediaan dan harganya. Terima kasih! 🙏`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const rooms: Room[] = [
    {
      id: 1,
      title: "Suite",
      image: "/images/suite.jpg",
      roomSize: "24 m²",
      roomSizeSqFt: "258 ft²",
      beds: [
        { type: "kasur king size", count: 1 },
        { type: "kasur king size", count: 1 },
      ],
    },
    {
      id: 2,
      title: "Kamar Deluxe",
      subtitle: "(Deluxe)",
      image: "/images/deluxe.webp",
      roomSize: "21 m²",
      roomSizeSqFt: "226 ft²",
      beds: [
        { type: "kasur king size", count: 1 },
        { type: "kasur king size", count: 1 },
      ],
    },
    {
      id: 3,
      title: "Suite Deluxe",
      subtitle: "(Deluxe Suite)",
      image: "/images/sudel.webp",
      roomSize: "25 m²",
      roomSizeSqFt: "269 ft²",
      beds: [
        { type: "kasur king size", count: 1 },
        { type: "kasur king size", count: 1 },
      ],
    },
    {
      id: 4,
      title: "Kamar Standard Single",
      subtitle: "(Standard Single Room)",
      image: "/images/single.jpg",
      beds: [
        { type: "kasur double", count: 1 },
        { type: "kasur double", count: 1 },
      ],
    },
    {
      id: 5,
      title: "Standard 1-Bed Room",
      subtitle: "(Standard 1-bed Room)",
      image: "/images/s1bed.webp",
      roomSize: "15 m²",
      roomSizeSqFt: "161 ft²",
      beds: [
        { type: "kasur single", count: 1 },
        { type: "kasur single", count: 1 },
      ],
    },
    {
      id: 6,
      title: "Pavilium Ekonomi",
      image: "/images/pavek.webp",
      roomSize: "20 m²",
      roomSizeSqFt: "215 ft²",
      beds: [
        { type: "kasur king size", count: 1 },
        { type: "kasur king size", count: 1 },
      ],
    },
    {
      id: 7,
      title: "Budget Double",
      image: "/images/budob.jpg",
      roomSize: "13 m²",
      roomSizeSqFt: "140 ft²",
      beds: [
        { type: "kasur single", count: 2 },
        { type: "kasur single", count: 2 },
      ],
    },
    {
      id: 8,
      title: "Pavilium Budget",
      image: "/images/pavbud.jpeg",
      roomSize: "40 m²",
      roomSizeSqFt: "431 ft²",
      beds: [
        { type: "kasur king size", count: 1 },
        { type: "kasur king size", count: 1 },
      ],
    },
    {
      id: 9,
      title: "Kamar Standard",
      subtitle: "(Standard)",
      image: "/images/std.webp",
      beds: [
        { type: "kasur single", count: 1 },
        { type: "kasur single", count: 1 },
      ],
    },
    {
      id: 10,
      title: "Deluxe Suite Room",
      subtitle: "(Deluxe Suite room)",
      image: "/images/delsu.webp",
      roomSize: "25 m²",
      roomSizeSqFt: "269 ft²",
      beds: [
        { type: "kasur king size", count: 1 },
        { type: "kasur king size", count: 1 },
      ],
    },
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-12">
            House of ToTi rooms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-48 md:h-full overflow-hidden">
                      <motion.img
                        src={room.image}
                        alt={room.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {room.title}
                          </h3>
                          {room.subtitle && (
                            <p className="text-sm text-muted-foreground">
                              {room.subtitle}
                            </p>
                          )}
                        </div>

                        {/* Room Size */}
                        {room.roomSize && (
                          <div className="flex items-start gap-2 text-sm">
                            <Home className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>
                              Ukuran kamar: {room.roomSize}/{room.roomSizeSqFt}
                            </span>
                          </div>
                        )}

                        {/* Bed Information */}
                        <div className="space-y-2">
                          {room.beds.map((bed, bedIndex) => (
                            <div
                              key={bedIndex}
                              className="flex items-start gap-2 text-sm"
                            >
                              <BedDouble className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>
                                {bed.count} {bed.type}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-4">
                        <Button 
                          onClick={() => handleRoomWhatsApp(room)}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Pesan via Whatsapp
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Rooms;
