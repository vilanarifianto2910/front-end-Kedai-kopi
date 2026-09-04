import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { MENU_FILTERS, MENU_ITEMS } from "@/data/menuData";
import { filterAndSearchProducts } from "@/lib/catalog";
import { ProductCard } from "@/components/menu/ProductCard";

function getFilterTestId(filter) {
  return `menu-filter-${filter.toLowerCase().replaceAll(" ", "-")}`;
}

export function MenuCatalog() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const visibleProducts = useMemo(
    () => filterAndSearchProducts(MENU_ITEMS, activeFilter, searchQuery),
    [activeFilter, searchQuery]
  );

  const resetCatalog = () => {
    setSearchQuery("");
    setActiveFilter("Semua");
  };

  return (
    <section id="menu" className="menu-section" data-testid="menu-section">
      <div className="site-container">
        <div className="section-heading">
          <div><span className="section-kicker">Pilih favoritmu</span><h2>Menu untuk setiap suasana</h2></div>
          <p>Dari espresso yang berani sampai racikan non-kopi yang segar, semuanya dibuat untuk dinikmati tanpa terburu-buru.</p>
        </div>

        <div className="smart-search" data-testid="menu-search-wrap">
          <div className="search-label-row"><label htmlFor="menu-search">Pencarian Cerdas</label><span>Cari berdasarkan nama, kategori, atau rasa</span></div>
          <div className="search-field">
            <Search aria-hidden="true" />
            <input id="menu-search" type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Cari menu... contoh: latte atau klepon" autoComplete="off" data-testid="menu-search-input" aria-label="Cari menu berdasarkan nama, kategori, atau rasa" />
            {searchQuery && (
              <button type="button" onClick={() => setSearchQuery("")} className="search-clear" data-testid="menu-search-clear" aria-label="Hapus pencarian"><X aria-hidden="true" /></button>
            )}
          </div>
        </div>

        <div className="filter-wrap" data-testid="menu-filter-group" role="group" aria-label="Filter kategori menu">
          {MENU_FILTERS.map((filter) => {
            const count = filter === "Semua" ? MENU_ITEMS.length : MENU_ITEMS.filter((item) => item.filterCategory === filter).length;
            return (
              <button type="button" key={filter} className={`filter-chip ${activeFilter === filter ? "filter-chip--active" : ""}`} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} data-testid={getFilterTestId(filter)}>
                {filter}<span>{count}</span>
              </button>
            );
          })}
        </div>

        <div className="results-meta" aria-live="polite" data-testid="menu-results-count">
          Menampilkan <strong>{visibleProducts.length}</strong> dari {MENU_ITEMS.length} menu
          {searchQuery && <span> untuk “{searchQuery.trim()}”</span>}
        </div>

        {visibleProducts.length > 0 ? (
          <div className="product-grid" data-testid="product-grid">
            {visibleProducts.map((item) => <ProductCard item={item} key={item.id} />)}
          </div>
        ) : (
          <div className="empty-state" data-testid="menu-empty-state">
            <Search aria-hidden="true" /><h3>Menu belum ditemukan</h3><p>Coba kata kunci lain atau tampilkan kembali semua menu.</p>
            <button type="button" onClick={resetCatalog} data-testid="menu-search-reset-all">Lihat semua menu</button>
          </div>
        )}
      </div>
    </section>
  );
}
