import { Coffee } from "lucide-react";

export function ProductIllustration({ item }) {
  return (
    <div className={`product-visual product-visual--${item.tone}`} data-testid={`product-card-image-${item.id}`} role="img" aria-label={`Ilustrasi ${item.name}`}>
      <span className="visual-orbit visual-orbit--one" />
      <span className="visual-orbit visual-orbit--two" />
      <div className="visual-icon-wrap"><Coffee aria-hidden="true" /></div>
      <span className="visual-index">{String(item.id.length).padStart(2, "0")}</span>
    </div>
  );
}
