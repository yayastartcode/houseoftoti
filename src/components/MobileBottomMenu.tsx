import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileBottomMenu = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "6281804111552";
    const message = "Halo, saya ingin bertanya tentang House of ToTi. Terima kasih!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleMapsClick = () => {
    // Google Maps link for House of ToTi Yogyakarta
    // You can replace with actual coordinates
    const mapsUrl = "https://www.google.com/maps/search/House+of+ToTi+Yogyakarta";
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-border shadow-lg">
      <div className="grid grid-cols-2 gap-0">
        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppClick}
          className="h-16 rounded-none bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 border-r border-white/20"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">WhatsApp</span>
        </Button>

        {/* Google Maps Button */}
        <Button
          onClick={handleMapsClick}
          className="h-16 rounded-none bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
        >
          <MapPin className="w-5 h-5" />
          <span className="font-semibold">Google Maps</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomMenu;
