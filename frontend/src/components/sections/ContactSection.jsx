import { Instagram, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/menuData";
import { buildWhatsAppUrl } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="kontak" className="contact-section" data-testid="contact-section">
      <div className="site-container"><div className="contact-card">
        <div><span className="section-kicker section-kicker--light">Siap menemani harimu</span><h2>Mau pesan yang mana hari ini?</h2><p>Pilih dari katalog atau langsung chat kami. Pesanan Anda akan kami bantu proses lewat WhatsApp.</p></div>
        <div className="contact-actions">
          <Button asChild className="h-13 rounded-xl bg-[#c79a2b] px-6 py-6 text-base font-bold text-[#2c1810] hover:bg-[#d5a83c]"><a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp-link"><MessageCircle aria-hidden="true" /> Chat WhatsApp</a></Button>
          <Button asChild variant="outline" className="h-13 rounded-xl border-[#836959] bg-transparent px-6 py-6 text-base font-bold text-[#fffaf0] hover:bg-[#fffaf0] hover:text-[#2c1810]"><a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" data-testid="contact-instagram-link"><Instagram aria-hidden="true" /> Instagram</a></Button>
        </div>
      </div></div>
    </section>
  );
}
