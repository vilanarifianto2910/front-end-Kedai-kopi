import { ArrowRight, Clock3, Instagram, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/menuData";

export function QuickInfoSection() {
  return (
    <section className="quick-info" aria-label="Informasi singkat kedai" data-testid="quick-info-section">
      <div className="site-container quick-info-grid">
        <article className="info-tile info-tile--hours"><span className="info-icon"><Clock3 aria-hidden="true" /></span><div><p>Jam operasional</p><strong data-testid="contact-hours">{SITE_CONFIG.openingHours}</strong><span>Buka setiap hari</span></div></article>
        <article className="info-tile info-tile--address"><span className="info-icon"><MapPin aria-hidden="true" /></span><div><p>Temukan kami</p><strong data-testid="contact-address">{SITE_CONFIG.address}</strong><span>Datang, duduk, dan nikmati</span></div></article>
        <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="info-tile info-tile--social" data-testid="quick-instagram-link"><span className="info-icon"><Instagram aria-hidden="true" /></span><div><p>Ikuti cerita kami</p><strong>{SITE_CONFIG.instagramHandle}</strong><span>Lihat kabar terbaru <ArrowRight aria-hidden="true" /></span></div></a>
      </div>
    </section>
  );
}
