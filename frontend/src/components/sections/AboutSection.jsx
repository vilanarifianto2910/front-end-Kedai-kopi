import { ArrowRight, Bean, Coffee, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/menuData";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="tentang" className="about-section" data-testid="about-section">
      <div className="site-container about-grid">
        <div className="about-story">
          <span className="section-kicker section-kicker--light">Tentang {SITE_CONFIG.brandName}</span>
          <h2>Dekat dengan petani.<br /><em>Dekat dengan Anda.</em></h2>
          <p>Kami percaya secangkir kopi yang baik dimulai dari hubungan yang baik. {SITE_CONFIG.brandName} hadir untuk membawa karakter biji Nusantara ke meja Anda—diracik dengan teliti, disajikan tanpa pretensi.</p>
          <Button asChild variant="outline" className="mt-7 h-12 rounded-xl border-[#8d715f] bg-transparent px-5 text-[#fff5dc] hover:bg-[#fff5dc] hover:text-[#2c1810]"><a href="#lokasi" data-testid="about-location-button">Kunjungi kedai <ArrowRight aria-hidden="true" /></a></Button>
        </div>
        <div className="values-grid">
          <article className="value-card"><span>01</span><Bean aria-hidden="true" /><h3>Biji pilihan</h3><p>Karakter kopi Nusantara yang kami pilih dengan cermat.</p></article>
          <article className="value-card"><span>02</span><Coffee aria-hidden="true" /><h3>Racikan jujur</h3><p>Diseduh segar saat dipesan, selalu dengan takaran terbaik.</p></article>
          <article className="value-card value-card--wide"><span>03</span><Sparkles aria-hidden="true" /><h3>Ruang yang hangat</h3><p>Untuk rehat sebentar, menuntaskan ide, atau berbagi cerita panjang.</p></article>
        </div>
      </div>
    </section>
  );
}
