import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/catalog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductIllustration } from "@/components/menu/ProductIllustration";

export function ProductCard({ item }) {
  return (
    <Card className="product-card group overflow-hidden border-[#e6d8bf] bg-[#fffaf0] shadow-[0_10px_30px_rgba(44,24,16,0.06)]" data-testid={`product-card-${item.id}`}>
      <ProductIllustration item={item} />
      <CardContent className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Badge variant="secondary" className="rounded-full bg-[#efe2c5] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#563b2b]" data-testid={`product-card-category-badge-${item.id}`}>
            {item.rawCategory}
          </Badge>
          <span className="price-tag" data-testid={`product-price-${item.id}`}>{item.price}</span>
        </div>
        <h3 className="font-display text-[1.55rem] leading-tight text-[#2c1810]">{item.name}</h3>
        <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-[#6b5a4e]">{item.description}</p>
        <Button asChild className="order-button mt-6 h-12 w-full rounded-xl bg-[#2c1810] text-[#fffaf0] shadow-none hover:bg-[#4b2e20]">
          <a href={buildWhatsAppUrl(item.name)} target="_blank" rel="noopener noreferrer" data-testid={`product-card-order-button-${item.id}`} aria-label={`Pesan ${item.name} via WhatsApp`}>
            <MessageCircle aria-hidden="true" /> Pesan via WhatsApp
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
