export const SITE_CONFIG = Object.freeze({
  brandName: "Kedai Foto Kopi",
  whatsappNumber: "6281228483649",
  instagramUrl: "https://www.instagram.com/fotokopi.idn/",
  mapsUrl: "https://maps.app.goo.gl/RSsrnRzFBnMqDMRNA",
  instagramHandle: "@fotokopi.idn",
  address: "Jl. Yudistira No5",
  openingHours: "08.00 — 23.00",
});

export const MENU_FILTERS = Object.freeze(["Semua", "Kopi", "Non-Kopi"]);

export const SEARCH_ALIASES = Object.freeze({
  cappuccino: "cappucino",
  strawberry: "stroberi",
  coklat: "chocolate",
  leci: "lychee",
  noncoffee: "non coffee",
});

export const NAV_ITEMS = Object.freeze([
  { label: "Menu", href: "#menu", testId: "navbar-link-menu" },
  { label: "Tentang Kami", href: "#tentang", testId: "navbar-link-tentang-kami" },
  { label: "Lokasi", href: "#lokasi", testId: "navbar-link-lokasi" },
  { label: "Kontak", href: "#kontak", testId: "navbar-link-kontak" },
]);

export const MENU_ITEMS = Object.freeze([
  { id: "espresso", name: "Espresso", rawCategory: "Coffee", filterCategory: "Kopi", description: "Sari kopi pekat dengan aroma kuat dan karakter rasa yang tegas.", price: "Rp 15.000", tone: "espresso" },
  { id: "americano", name: "Americano", rawCategory: "Coffee", filterCategory: "Kopi", description: "Espresso dengan air untuk rasa kopi yang ringan, bersih, dan tetap berkarakter.", price: "Rp 20.000", tone: "espresso" },
  { id: "latte", name: "Latte", rawCategory: "Coffee", filterCategory: "Kopi", description: "Espresso dan susu lembut dengan tekstur creamy yang seimbang.", price: "Rp 24.000", tone: "latte" },
  { id: "cappucino", name: "Cappucino", rawCategory: "Coffee", filterCategory: "Kopi", description: "Perpaduan espresso, susu hangat, dan foam tebal yang lembut.", price: "Rp 25.000", tone: "cocoa" },
  { id: "stroberi-tea", name: "Stroberi tea", rawCategory: "Best Choice", filterCategory: "Non-Kopi", description: "Teh buah stroberi yang manis, ringan, dan menyegarkan.", price: "Rp 17.000", tone: "lychee" },
  { id: "kopi-susu-nira", name: "Kopi Susu Nira", rawCategory: "Best Choice", filterCategory: "Kopi", description: "Kopi susu creamy dengan sentuhan manis alami nira.", price: "Rp 20.000", tone: "caramel" },
  { id: "kopi-susu-polke", name: "Kopi Susu Polke", rawCategory: "Best Choice", filterCategory: "Kopi", description: "Racikan kopi susu khas Foto Kopi dengan rasa manis yang pas.", price: "Rp 22.000", tone: "vanilla" },
  { id: "es-fotokopi", name: "Es FotoKopi", rawCategory: "Best Choice", filterCategory: "Kopi", description: "Menu es kopi andalan kedai, creamy dengan karakter kopi yang nikmat.", price: "Rp 22.000", tone: "caramel" },
  { id: "kopi-susu-klepon", name: "Kopi Susu Klepon", rawCategory: "Best Choice", filterCategory: "Kopi", description: "Kopi susu bernuansa klepon dengan rasa pandan dan gula merah.", price: "Rp 22.000", tone: "matcha" },
  { id: "red-velvet", name: "Red Velvet", rawCategory: "Non Coffee", filterCategory: "Non-Kopi", description: "Minuman red velvet lembut dengan rasa manis dan creamy.", price: "Rp 25.000", tone: "lychee" },
  { id: "chocolate", name: "Chocolate", rawCategory: "Non Coffee", filterCategory: "Non-Kopi", description: "Cokelat pekat yang lembut dan nyaman dinikmati kapan saja.", price: "Rp 25.000", tone: "chocolate" },
  { id: "matcha", name: "Matcha", rawCategory: "Non Coffee", filterCategory: "Non-Kopi", description: "Matcha creamy dengan rasa teh hijau yang khas dan seimbang.", price: "Rp 25.000", tone: "matcha" },
  { id: "cookies-n-cream", name: "Cookies N' Cream", rawCategory: "Non Coffee", filterCategory: "Non-Kopi", description: "Minuman susu creamy dengan perpaduan remahan cookies yang nikmat.", price: "Rp 27.000", tone: "vanilla" },
  { id: "scrumble", name: "Scrumble", rawCategory: "Non Coffee", filterCategory: "Non-Kopi", description: "Minuman creamy khas dengan tekstur lembut dan topping renyah.", price: "Rp 27.000", tone: "cocoa" },
  { id: "redvelvet-signature", name: "Redvelvet Signature", rawCategory: "Non Coffee", filterCategory: "Non-Kopi", description: "Racikan red velvet signature yang lebih kaya dan memanjakan.", price: "Rp 27.000", tone: "lychee" },
  { id: "nadberry-signature", name: "Nadberry Signature", rawCategory: "Non Coffee", filterCategory: "Non-Kopi", description: "Racikan berry signature yang segar, manis, dan creamy.", price: "Rp 27.000", tone: "peach" },
  { id: "mocktails-coffee", name: "Mocktails Coffee", rawCategory: "Other Choice", filterCategory: "Kopi", description: "Kreasi mocktail kopi yang aromatik, ringan, dan menyegarkan.", price: "Rp 22.000", tone: "espresso" },
  { id: "squash-foto-kopi", name: "Squash Foto kopi", rawCategory: "Other Choice", filterCategory: "Non-Kopi", description: "Minuman soda buah khas Foto Kopi dengan sensasi segar.", price: "Rp 20.000", tone: "peach" },
  { id: "mocaccino", name: "Mocaccino", rawCategory: "Other Choice", filterCategory: "Kopi", description: "Espresso, susu, dan cokelat dalam satu racikan yang lembut.", price: "Rp 25.000", tone: "chocolate" },
  { id: "kopi-rindu", name: "Kopi Rindu", rawCategory: "Other Choice", filterCategory: "Kopi", description: "Racikan kopi manis dan creamy untuk teman menikmati waktu.", price: "Rp 25.000", tone: "caramel" },
  { id: "double-booster", name: "Double Booster", rawCategory: "Other Choice", filterCategory: "Kopi", description: "Kopi dengan karakter ekstra kuat untuk tambahan energi harian.", price: "Rp 24.000", tone: "espresso" },
  { id: "sweet-vanilla", name: "Sweet Vanilla", rawCategory: "Other Choice", filterCategory: "Non-Kopi", description: "Minuman vanilla lembut dengan aroma manis yang menenangkan.", price: "Rp 24.000", tone: "vanilla" },
  { id: "lychee-tea", name: "Lychee tea", rawCategory: "Other Choice", filterCategory: "Non-Kopi", description: "Teh leci ringan dengan rasa buah yang manis dan menyegarkan.", price: "Rp 20.000", tone: "lychee" },
]);
