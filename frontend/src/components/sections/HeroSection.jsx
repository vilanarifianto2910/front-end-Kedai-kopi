import { ArrowRight, Check, Coffee, MessageCircle, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/menuData";
import { buildWhatsAppUrl } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="beranda" className="hero-section" data-testid="hero-section">
      <div className="hero-grain" aria-hidden="true" />
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow" data-testid="hero-eyebrow"><span /> Seduhan lokal, rasa personal</div>
          <h1 className="hero-title" data-testid="hero-title">Rasa lokal berkualitas, <em>diseduh hangat</em> setiap hari.</h1>
          <p className="hero-subtitle">Dari biji pilihan hingga obrolan yang panjang—kami meracik tiap cangkir untuk menemani cerita Anda.</p>
          <div className="hero-actions">
            <Button asChild className="h-13 rounded-xl bg-[#c79a2b] px-6 py-6 text-base font-bold text-[#2c1810] shadow-[0_8px_22px_rgba(116,75,15,0.18)] hover:bg-[#d5a83c]"><a href="#menu" data-testid="hero-cta-lihat-menu">Lihat Menu <ArrowRight aria-hidden="true" /></a></Button>
            <Button asChild variant="outline" className="h-13 rounded-xl border-[#c9b48e] bg-[#fffaf0] px-6 py-6 text-base font-bold text-[#2c1810] hover:bg-[#eee0c3]"><a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" data-testid="hero-cta-buka-whatsapp"><MessageCircle aria-hidden="true" /> Buka WhatsApp</a></Button>
          </div>
          <div className="hero-proof" aria-label={`Keunggulan ${SITE_CONFIG.brandName}`}>
            <div><Check aria-hidden="true" /><span>Biji pilihan</span></div><div><Check aria-hidden="true" /><span>Diracik segar</span></div><div><Check aria-hidden="true" /><span>Pesan cepat</span></div>
          </div>
        </div>
        <div className="hero-media-wrap">
          <div className="hero-media-frame">
            <img src="https://images.pexels.com/photos/33790097/pexels-photo-33790097.jpeg?auto=compress&cs=tinysrgb&w=1200" alt={`Suasana hangat ${SITE_CONFIG.brandName}`} className="hero-image" data-testid="hero-image" />
            <div className="hero-media-caption"><span className="caption-icon"><Sparkles aria-hidden="true" /></span><div><strong>Slow down, sip better.</strong><span>Tempat singgah favoritmu.</span></div></div>
          </div>
          <div className="hero-stamp" aria-hidden="true"><Coffee /><span>BREWED<br />DAILY</span></div>
        </div>
      </div>
    </section>
  );
}
