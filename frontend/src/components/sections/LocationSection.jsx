import { Clock3, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/menuData";
import { Button } from "@/components/ui/button";

export function LocationSection() {
  return (
    <section id="lokasi" className="location-section" data-testid="location-section">
      <div className="site-container location-grid">
        <div className="location-copy">
          <span className="section-kicker">Singgah ke kedai</span>
          <h2>Kopi enak terasa lebih baik saat dinikmati bersama.</h2>
          <p>Temukan sudut favorit Anda di {SITE_CONFIG.brandName}. Kami buka setiap hari, dari pagi hingga malam.</p>
          <div className="location-details">
            <div><MapPin aria-hidden="true" /><span><small>Alamat</small><strong>{SITE_CONFIG.address}</strong></span></div>
            <div><Clock3 aria-hidden="true" /><span><small>Setiap hari</small><strong>{SITE_CONFIG.openingHours}</strong></span></div>
          </div>
          <Button asChild className="mt-8 h-12 rounded-xl bg-[#2c1810] px-5 text-[#fffaf0] hover:bg-[#4b2e20]"><a href={SITE_CONFIG.mapsUrl} target="_blank" rel="noopener noreferrer" data-testid="location-maps-button"><MapPin aria-hidden="true" /> Buka di Google Maps</a></Button>
        </div>
        <div className="map-card" aria-label={`Ilustrasi lokasi ${SITE_CONFIG.brandName}`}>
          <div className="map-grid-lines" aria-hidden="true" /><div className="map-road map-road--one" aria-hidden="true" /><div className="map-road map-road--two" aria-hidden="true" />
          <div className="map-pin-card"><span><MapPin aria-hidden="true" /></span><div><strong>{SITE_CONFIG.brandName}</strong><small>{SITE_CONFIG.address}</small></div></div>
          <div className="map-note">OPEN DAILY · 08—23</div>
        </div>
      </div>
    </section>
  );
}
