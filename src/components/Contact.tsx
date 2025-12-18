import { motion } from "motion/react";
import { MessageCircle, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "6281804111552";
    const message =
      "Halo, saya ingin bertanya tentang House of ToTi. Terima kasih!";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const contactInfo = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      lines: ["+62 818-0411-1552", "Chat with us anytime"],
      onClick: handleWhatsAppClick,
      clickable: true,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Lokasi",
      lines: [
        "Perum Jl. Samironobaru No.42, Samirono, Caturtunggal, Kec. Depok, ",
        "Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Buka",
      lines: ["Everyday", "24 hours"],
    },
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Contacts
            </h2>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={info.clickable ? info.onClick : undefined}
                  className={`flex items-start gap-4 bg-secondary/30 rounded-lg p-4 hover:bg-secondary/50 transition-colors ${
                    info.clickable
                      ? "cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                      : ""
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      info.clickable
                        ? "bg-green-600 text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h3>
                    {info.lines.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className="text-sm text-muted-foreground"
                      >
                        {line}
                      </p>
                    ))}
                    {info.clickable && (
                      <p className="text-xs text-green-600 font-medium mt-1">
                        Click to chat →
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px] lg:min-h-[500px]"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1027128251735!2d110.38398817687272!3d-7.778933092240644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a597946993c95%3A0x6e8a4441b5c4117!2sHouse%20of%20ToTi!5e0!3m2!1sen!2sid!4v1765973937972!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="House of ToTi Location"
                className="w-full h-full"
              />
            </div>

            {/* Location Pin Marker (Optional Decorative Element) */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
              viewport={{ once: true }}
              className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center"
            >
              <MapPin className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
