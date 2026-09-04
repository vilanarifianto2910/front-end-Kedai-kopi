import { SEARCH_ALIASES, SITE_CONFIG } from "@/data/menuData";

export function normalizeSearch(value = "") {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function buildWhatsAppUrl(productName) {
  const message = productName
    ? `Halo ${SITE_CONFIG.brandName}, saya ingin memesan ${productName}.`
    : `Halo ${SITE_CONFIG.brandName}, saya ingin bertanya tentang menu hari ini.`;

  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function filterAndSearchProducts(items, activeFilter, searchQuery) {
  const normalizedQuery = normalizeSearch(searchQuery);
  const queryAlias = SEARCH_ALIASES[normalizedQuery];

  return items.filter((item) => {
    const matchesCategory =
      activeFilter === "Semua" || item.filterCategory === activeFilter;
    const searchableText = normalizeSearch(
      `${item.name} ${item.rawCategory} ${item.filterCategory} ${item.description}`
    );
    const matchesSearch =
      !normalizedQuery ||
      searchableText.includes(normalizedQuery) ||
      (queryAlias && searchableText.includes(queryAlias));

    return matchesCategory && matchesSearch;
  });
}
