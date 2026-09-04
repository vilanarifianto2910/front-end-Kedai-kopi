import { Bean } from "lucide-react";
import { SITE_CONFIG } from "@/data/menuData";

export function Footer() {
  return (
    <footer className="site-footer" data-testid="footer">
      <div className="site-container footer-grid">
        <a href="#beranda" className="brand-mark brand-mark--footer" data-testid="footer-logo">
          <span className="brand-bean"><Bean aria-hidden="true" /></span>
          <span>{SITE_CONFIG.brandName}</span>
        </a>
        <p>Kopi hangat. Cerita dekat.</p>
        <p>© 2026 {SITE_CONFIG.brandName}. Diracik dengan sepenuh hati.</p>
      </div>
    </footer>
  );
}
