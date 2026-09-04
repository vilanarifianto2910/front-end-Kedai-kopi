import { Bean, ChevronRight, Menu, MessageCircle } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/data/menuData";
import { buildWhatsAppUrl } from "@/lib/catalog";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar({ elevated }) {
  return (
    <header className={`site-nav ${elevated ? "site-nav--elevated" : ""}`} data-testid="navbar">
      <div className="site-container flex h-[72px] items-center justify-between">
        <a href="#beranda" className="brand-mark" data-testid="navbar-logo" aria-label={`${SITE_CONFIG.brandName}, kembali ke beranda`}>
          <span className="brand-bean"><Bean aria-hidden="true" /></span>
          <span>Kedai <span className="text-[#b86a4a]">Foto Kopi</span></span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama" data-testid="navbar-nav-menu">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" data-testid={item.testId}>{item.label}</a>
          ))}
          <Button asChild className="h-11 rounded-xl bg-[#c79a2b] px-5 text-[#2c1810] shadow-none hover:bg-[#d7aa3d]">
            <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" data-testid="navbar-order-button">Pesan Sekarang</a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl border-[#d8c5a3] bg-[#fffaf0] md:hidden" data-testid="navbar-mobile-menu-button" aria-label="Buka menu navigasi">
              <Menu className="h-5 w-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-[#e6d8bf] bg-[#f7f0da] px-6 pt-10">
            <SheetHeader className="text-left">
              <SheetTitle className="font-display text-3xl text-[#2c1810]">{SITE_CONFIG.brandName}</SheetTitle>
              <SheetDescription className="text-[#6b5a4e]">Kopi hangat, cerita dekat.</SheetDescription>
            </SheetHeader>
            <nav className="mt-10 flex flex-col gap-2" aria-label="Navigasi seluler" data-testid="mobile-nav-menu">
              {NAV_ITEMS.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a href={item.href} className="mobile-nav-link" data-testid={`mobile-${item.testId}`}>{item.label}<ChevronRight aria-hidden="true" /></a>
                </SheetClose>
              ))}
              <Button asChild className="mt-5 h-12 rounded-xl bg-[#2c1810] text-[#fffaf0]">
                <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" data-testid="mobile-order-button"><MessageCircle aria-hidden="true" /> Pesan Sekarang</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
