{
  "project": {
    "name": "KopiLokal",
    "type": "single-page landing + interactive menu catalog",
    "audience": "Pelanggan lokal Indonesia (mobile-first) yang ingin lihat menu cepat dan pesan via WhatsApp",
    "success_actions": [
      "Tap CTA 'Lihat Menu' dari hero",
      "Filter kategori menu",
      "Tap 'Pesan via WhatsApp' per produk (deep link wa.me + pesan terformat)",
      "Akses lokasi, jam operasional, dan Instagram"
    ]
  },

  "brand_personality": {
    "keywords": ["hangat", "craft/local", "bersih-modern", "ramah", "cepat untuk order"],
    "visual_metaphor": "Kertas kraft + crema latte + espresso gelap; layout modern Swiss-ish dengan bento grid yang rapi",
    "do": [
      "Gunakan whitespace besar, tipografi tegas, dan kartu produk yang mudah dipindai",
      "Gunakan aksen ochre/kuning hangat hanya untuk CTA/active states",
      "Gunakan tekstur noise halus pada background section (bukan pada card)"
    ],
    "dont": [
      "Jangan pakai layout serba center",
      "Jangan pakai gradient gelap/saturated (ungu/pink/biru tua) atau gradient di area baca",
      "Jangan pakai background transparan untuk area utama"
    ]
  },

  "inspiration_refs": {
    "moodboard_queries": [
      "Dribbble coffee shop landing page",
      "Behance coffee landing page minimal",
      "One Page Love bento grid"
    ],
    "reference_urls": [
      "https://dribbble.com/tags/coffee-shop-landing-page",
      "https://www.behance.net/search/projects/coffee%20shop%20landing%20page",
      "https://onepagelove.com/tag/bento"
    ],
    "layout_fusion": {
      "layout_principle": "Bento grid untuk blok informasi + grid katalog produk yang konsisten",
      "typography_principle": "Serif display untuk headline brand + sans modern untuk UI/menu",
      "color_principle": "Cream dominan + espresso untuk teks + ochre untuk CTA + terracotta untuk highlight sekunder"
    }
  },

  "design_tokens": {
    "fonts": {
      "display": {
        "google_font": "Gloock",
        "fallback": "ui-serif, Georgia, serif",
        "usage": "Hero H1, section titles, brand moments"
      },
      "body": {
        "google_font": "Manrope",
        "fallback": "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        "usage": "Body text, nav, product meta, buttons"
      },
      "mono_optional": {
        "google_font": "Azeret Mono",
        "fallback": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        "usage": "Harga (opsional) / kode promo kecil / micro labels"
      }
    },

    "typography_scale_tailwind": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl font-[var(--font-display)] tracking-tight",
      "h2": "text-base md:text-lg font-[var(--font-body)] text-[color:var(--muted-foreground)]",
      "section_title": "text-2xl sm:text-3xl font-[var(--font-display)] tracking-tight",
      "body": "text-sm sm:text-base font-[var(--font-body)] leading-relaxed",
      "small": "text-xs sm:text-sm font-[var(--font-body)] text-[color:var(--muted-foreground)]"
    },

    "color_system": {
      "note": "Gunakan HSL tokens di index.css (shadcn style). Hex di bawah untuk referensi desain.",
      "palette_hex": {
        "cream": "#F7F0DA",
        "latte": "#EAD9B7",
        "espresso": "#2C1810",
        "cocoa": "#3B2417",
        "ochre": "#C79A2B",
        "terracotta": "#B86A4A",
        "sage": "#6F7B5A",
        "line": "#E6D8BF"
      },
      "semantic_roles": {
        "background": "cream",
        "foreground": "espresso",
        "card": "#FFF9EA (cream+)",
        "card_foreground": "espresso",
        "primary": "espresso",
        "primary_foreground": "cream",
        "secondary": "latte",
        "secondary_foreground": "espresso",
        "accent": "ochre",
        "accent_foreground": "espresso",
        "muted": "#F1E6CF",
        "muted_foreground": "#6B5A4E",
        "border": "line",
        "ring": "ochre",
        "success": "sage",
        "destructive": "#B42318"
      },
      "allowed_gradients": {
        "hero_background_only": "linear-gradient(135deg, rgba(247,240,218,1) 0%, rgba(234,217,183,1) 55%, rgba(247,240,218,1) 100%)",
        "decorative_blob_only": "radial-gradient(closest-side, rgba(199,154,43,0.18), rgba(199,154,43,0))"
      },
      "texture": {
        "noise_overlay_css": "background-image: url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"120\" height=\"120\" filter=\"url(%23n)\" opacity=\"0.08\"/%3E%3C/svg%3E');",
        "usage": "Tambahkan sebagai pseudo-element pada section background (opacity rendah), jangan pada card/teks"
      }
    },

    "radius_shadow_spacing": {
      "radius": {
        "sm": "rounded-lg",
        "md": "rounded-xl",
        "lg": "rounded-2xl"
      },
      "shadow": {
        "card": "shadow-[0_10px_30px_rgba(44,24,16,0.08)]",
        "hover": "hover:shadow-[0_14px_40px_rgba(44,24,16,0.12)]"
      },
      "spacing": {
        "section_py": "py-14 sm:py-18",
        "container": "mx-auto w-full max-w-6xl px-4 sm:px-6",
        "stack": "space-y-6 sm:space-y-8"
      }
    },

    "buttons": {
      "style": "Professional/Warm craft: rounded-xl, solid fills, subtle elevation",
      "variants": {
        "primary": "bg-[color:var(--primary)] text-[color:var(--primary-foreground)] hover:bg-[color:var(--cocoa)]",
        "accent": "bg-[color:var(--accent)] text-[color:var(--accent-foreground)] hover:bg-[#D2A63A]",
        "ghost": "bg-transparent border border-[color:var(--border)] hover:bg-[color:var(--secondary)]"
      },
      "motion": {
        "hover": "transition-colors duration-200",
        "press": "active:scale-[0.98] transition-transform duration-150",
        "focus": "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
      },
      "sizes": {
        "sm": "h-9 px-3 text-sm",
        "md": "h-11 px-4 text-sm",
        "lg": "h-12 px-5 text-base"
      }
    }
  },

  "layout_system": {
    "grid": {
      "global": "Mobile-first single column; md: 12-col grid for hero + bento; product grid 2 cols on sm, 3 cols on lg",
      "hero": {
        "structure": "md:grid md:grid-cols-12 md:gap-8",
        "left": "md:col-span-7",
        "right": "md:col-span-5"
      },
      "bento_info": {
        "structure": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4",
        "tiles": [
          "Jam Operasional (lg:col-span-4)",
          "Alamat (lg:col-span-5)",
          "Instagram (lg:col-span-3)",
          "Highlight: 'Biji Lokal' / 'Roast Harian' (lg:col-span-6)",
          "CTA kecil: 'Buka Maps' (lg:col-span-6)"
        ]
      },
      "menu_catalog": {
        "filters_row": "sticky top-14 (mobile) optional; gunakan ScrollArea horizontal untuk chips",
        "cards": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
      }
    },

    "section_order": [
      "Navbar",
      "Hero",
      "Bento quick info (hours/address/IG)",
      "Menu Catalog + Filters",
      "Tentang Kami",
      "Lokasi",
      "Kontak",
      "Footer"
    ],

    "scroll_behavior": {
      "cta": "CTA 'Lihat Menu' scroll ke section #menu dengan smooth scroll",
      "nav_links": "Anchor links ke section IDs; highlight active section (optional)"
    }
  },

  "components": {
    "component_path": {
      "navbar": {
        "use": ["/app/frontend/src/components/ui/navigation-menu.jsx", "/app/frontend/src/components/ui/sheet.jsx", "/app/frontend/src/components/ui/button.jsx"],
        "notes": "Desktop: NavigationMenu; Mobile: Sheet (hamburger)"
      },
      "hero": {
        "use": ["/app/frontend/src/components/ui/button.jsx", "/app/frontend/src/components/ui/badge.jsx", "/app/frontend/src/components/ui/card.jsx"],
        "notes": "Hero right side: Card dengan foto + 2-3 bullet USP"
      },
      "filters": {
        "use": ["/app/frontend/src/components/ui/tabs.jsx", "/app/frontend/src/components/ui/toggle-group.jsx", "/app/frontend/src/components/ui/scroll-area.jsx"],
        "recommended": "ToggleGroup (single) untuk filter kategori; bungkus dengan ScrollArea untuk mobile"
      },
      "product_card": {
        "use": ["/app/frontend/src/components/ui/card.jsx", "/app/frontend/src/components/ui/badge.jsx", "/app/frontend/src/components/ui/button.jsx", "/app/frontend/src/components/ui/aspect-ratio.jsx"],
        "notes": "Gunakan AspectRatio untuk image placeholder agar layout stabil"
      },
      "dialogs_optional": {
        "use": ["/app/frontend/src/components/ui/dialog.jsx"],
        "notes": "Optional: quick view detail produk (jangan wajib)"
      },
      "toast": {
        "use": ["/app/frontend/src/components/ui/sonner.jsx"],
        "notes": "Gunakan sonner untuk feedback: 'Link WhatsApp dibuka' atau 'Produk disalin'"
      },
      "footer": {
        "use": ["/app/frontend/src/components/ui/separator.jsx", "/app/frontend/src/components/ui/button.jsx"],
        "notes": "Footer simple, high contrast, link IG + WA"
      }
    },

    "component_specs": {
      "navbar": {
        "height": "h-14",
        "style": "sticky top-0 z-50 backdrop-blur (ringan) + border bawah",
        "classes": "bg-[color:var(--background)]/90 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--background)]/70 border-b border-[color:var(--border)]",
        "logo": "Text logo 'KopiLokal' pakai font display; kecilkan tracking",
        "data_testids": {
          "nav": "navbar",
          "logo": "navbar-logo",
          "mobile_menu_button": "navbar-mobile-menu-button",
          "nav_menu": "navbar-nav-menu",
          "nav_link_menu": "navbar-link-menu",
          "nav_link_about": "navbar-link-tentang-kami",
          "nav_link_location": "navbar-link-lokasi",
          "nav_link_contact": "navbar-link-kontak"
        }
      },

      "hero": {
        "background": "Gunakan gradient ringan (<=20% viewport) + noise overlay pseudo-element",
        "headline_copy": "Kopi lokal berkualitas, diseduh hangat setiap hari.",
        "subcopy": "Menu kopi, non-kopi, dan makanan ringan — pesan cepat via WhatsApp.",
        "cta": {
          "label": "Lihat Menu",
          "variant": "accent",
          "data_testid": "hero-cta-lihat-menu"
        },
        "secondary_cta": {
          "label": "Buka WhatsApp",
          "variant": "ghost",
          "data_testid": "hero-cta-buka-whatsapp"
        },
        "hero_media": {
          "type": "image",
          "treatment": "rounded-2xl, subtle shadow, warm overlay",
          "data_testid": "hero-image"
        }
      },

      "filters": {
        "categories": ["Semua", "Kopi", "Non-Kopi", "Makanan Ringan"],
        "interaction": "Active state: bg secondary + border accent tipis; hover: bg muted",
        "data_testids": {
          "filter_group": "menu-filter-group",
          "filter_all": "menu-filter-semua",
          "filter_kopi": "menu-filter-kopi",
          "filter_non_kopi": "menu-filter-non-kopi",
          "filter_snacks": "menu-filter-makanan-ringan"
        }
      },

      "product_card": {
        "card_style": "Card cream+ dengan border line; hover naik 2px + shadow",
        "image": {
          "fallback": "Gunakan placeholder gradient sangat ringan + icon kopi (lucide) jika image gagal",
          "aspect": "4/3",
          "data_testid": "product-card-image"
        },
        "content": ["Nama", "Deskripsi singkat (2 lines clamp)", "Harga"],
        "cta": {
          "label": "Pesan via WhatsApp",
          "variant": "primary",
          "data_testid": "product-card-order-button"
        },
        "badge": {
          "usage": "Kategori (Kopi/Non-Kopi/Makanan Ringan)",
          "style": "bg secondary, text espresso",
          "data_testid": "product-card-category-badge"
        }
      },

      "contact_blocks": {
        "hours": {
          "content": "08.00–23.00",
          "data_testid": "contact-hours"
        },
        "address": {
          "content": "Jl. Yudistira No5",
          "data_testid": "contact-address"
        },
        "whatsapp": {
          "number": "6281228483649",
          "data_testid": "contact-whatsapp-link"
        },
        "instagram": {
          "url": "https://www.instagram.com/fotokopi.idn/",
          "data_testid": "contact-instagram-link"
        }
      }
    }
  },

  "interaction_design": {
    "micro_interactions": {
      "buttons": [
        "Hover: warna berubah (transition-colors 200ms)",
        "Press: scale 0.98 (transition-transform 150ms)",
        "Focus: ring ochre + offset background"
      ],
      "product_cards": [
        "Hover: translate-y-[-2px] + shadow hover",
        "Image: subtle zoom on hover (scale-105) ONLY on image wrapper"
      ],
      "filter_chips": [
        "Active: bg latte + border ochre",
        "Hover: bg muted"
      ],
      "scroll": [
        "Navbar shadow muncul setelah scroll 8px (useEffect + state)",
        "Smooth scroll ke section"
      ]
    },

    "motion_library": {
      "recommended": "framer-motion (optional)",
      "why": "Entrance animations halus untuk hero, bento tiles, dan product grid tanpa terasa berat",
      "install": "npm i framer-motion",
      "usage_snippet_js": "import { motion } from 'framer-motion';\n\n<motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45, ease: 'easeOut' }} />"
    }
  },

  "whatsapp_integration": {
    "base": "https://wa.me/6281228483649",
    "message_template": "Halo KopiLokal, saya ingin memesan [Nama Produk].",
    "encoding": "Gunakan encodeURIComponent untuk pesan",
    "js_snippet": "const message = `Halo KopiLokal, saya ingin memesan ${product.name}.`;\nconst url = `https://wa.me/6281228483649?text=${encodeURIComponent(message)}`;\nwindow.open(url, '_blank', 'noopener,noreferrer');",
    "data_testid": "whatsapp-deeplink"
  },

  "accessibility": {
    "requirements": [
      "Kontras teks minimal WCAG AA (espresso di cream aman)",
      "Semua tombol/link punya focus-visible ring",
      "Hamburger menu: aria-label + trap focus (Sheet sudah handle)",
      "Gambar produk: alt yang bermakna (nama produk)",
      "Prefer-reduced-motion: matikan animasi entrance jika user minta"
    ],
    "keyboard": [
      "Nav links dapat di-tab",
      "Filter chips dapat diakses keyboard (ToggleGroup/Tabs)"
    ]
  },

  "performance": {
    "guidelines": [
      "Gunakan image dengan ukuran w=1200 dan q=80 dari Unsplash/Pexels",
      "Lazy-load gambar katalog (loading='lazy')",
      "Gunakan AspectRatio + skeleton untuk menghindari layout shift"
    ]
  },

  "image_urls": {
    "hero": [
      {
        "url": "https://images.pexels.com/photos/33790097/pexels-photo-33790097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "description": "Interior cafe minimal hangat untuk hero/right card",
        "category": "hero"
      }
    ],
    "menu_placeholders": [
      {
        "url": "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
        "description": "Coffee beans texture untuk placeholder background (gunakan blur + overlay agar tidak ramai)",
        "category": "product-placeholder"
      },
      {
        "url": "https://images.unsplash.com/photo-1675306408031-a9aad9f23308?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
        "description": "Close-up beans untuk variasi placeholder",
        "category": "product-placeholder"
      }
    ]
  },

  "instructions_to_main_agent": {
    "css_updates": [
      "Hapus styling default CRA di App.css (App-header center, logo spin) dan ganti dengan minimal (atau kosong) agar tidak mengganggu layout.",
      "Update /app/frontend/src/index.css tokens :root ke palet KopiLokal (cream/espresso/ochre) dalam format HSL agar shadcn theme konsisten.",
      "Tambahkan font imports Google Fonts (Gloock + Manrope) di index.html atau via CSS @import di index.css (pilih salah satu).",
      "Tambahkan utility class untuk noise overlay via pseudo-element pada section hero (gunakan after:... dengan opacity rendah)."
    ],
    "react_structure_js": [
      "Buat section IDs: #menu, #tentang, #lokasi, #kontak untuk anchor nav.",
      "Implement filter state (category) dan derived list untuk 13 item menu.",
      "Setiap button/link/input wajib punya data-testid (kebab-case).",
      "WhatsApp deep link: gunakan window.open(url, '_blank', 'noopener,noreferrer').",
      "Gunakan shadcn Button/Card/Badge/Sheet/ToggleGroup/ScrollArea untuk konsistensi."
    ],
    "copy_tone": [
      "Bahasa Indonesia, singkat, hangat, tidak terlalu marketing.",
      "Gunakan microcopy yang membantu: 'Pesan cepat via WhatsApp', 'Buka di Maps'."
    ]
  },

  "General UI UX Design Guidelines": "- You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals."
}
