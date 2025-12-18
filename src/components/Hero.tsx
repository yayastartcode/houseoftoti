import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, addDays } from "date-fns";
import { CalendarIcon, User } from "lucide-react";
import { toast } from "sonner";

const Hero = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("1");

  const handleCheckInSelect = (date: Date | undefined) => {
    setCheckIn(date);
    // Reset check-out if it's before the new check-in date
    if (date && checkOut && checkOut <= date) {
      setCheckOut(undefined);
    }
  };

  // Function to disable dates before today for check-in
  const disableCheckInDates = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Function to disable dates before check-in for check-out
  const disableCheckOutDates = (date: Date) => {
    if (!checkIn) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date < today;
    }
    // Disable all dates on or before check-in date
    const minCheckOut = addDays(checkIn, 1);
    minCheckOut.setHours(0, 0, 0, 0);
    return date < minCheckOut;
  };

  // Function to handle WhatsApp booking
  const handleWhatsAppClick = () => {
    // Validation: Check if both dates are selected
    if (!checkIn || !checkOut) {
      toast.error("Silahkan pilih tanggal terlebih dahulu!", {
        description: "Pilih tanggal check-in dan check-out untuk melanjutkan",
        duration: 3000,
      });
      return;
    }

    const whatsappNumber = "6281804111552"; // Format international
    
    // Format message with booking details
    let message = "Halo, saya ingin cek ketersediaan kamar di House of ToTi:\n\n";
    
    message += `📅 Check-in: ${format(checkIn, "dd MMMM yyyy")}\n`;
    message += `📅 Check-out: ${format(checkOut, "dd MMMM yyyy")}\n`;
    message += `👥 Jumlah tamu: ${guests} dewasa\n\n`;
    message += `Mohon informasi ketersediaan dan harganya. Terima kasih! 🙏`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                House of ToTi — Penginapan di Tengah Kota Aman & Terjangkau
              </h1>
              <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4">
                Mulai 200 Rb an dekat dengan Malioboro. UGM , UNY , Sanata
                Dharma lokasi tengah kota strategis aman dan nyaman. Pesan
                Sekarang Juga
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-lg border border-border"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Check-in
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? (
                          format(checkIn, "PPP")
                        ) : (
                          <span className="text-muted-foreground">
                            Pilih tanggal
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={handleCheckInSelect}
                        disabled={disableCheckInDates}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Check-out
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                        disabled={!checkIn}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? (
                          format(checkOut, "PPP")
                        ) : (
                          <span className="text-muted-foreground">
                            Pilih tanggal
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={disableCheckOutDates}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Guests
                  </label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="w-full">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 dewasa</SelectItem>
                      <SelectItem value="2">2 dewasa</SelectItem>
                      <SelectItem value="3">3 dewasa</SelectItem>
                      <SelectItem value="4">4 dewasa</SelectItem>
                      <SelectItem value="5">5+ dewasa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
              >
                Cek Ketersediaan
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/main.jpeg"
                alt="Modern minimalist hotel room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Best Price</p>
                  <p className="text-sm text-muted-foreground">Guaranteed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
