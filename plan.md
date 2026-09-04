# plan.md (Updated)

## 1. Objectives
- Deliver a modern, clean, **mobile-first** landing page + interactive catalog for **Kedai Foto Kopi** using **Tailwind CSS + JavaScript** (implemented in the existing **React** frontend template; no backend required).
- Provide fast product discovery via:
  - Category filters: **Semua, Kopi, Non-Kopi**.
  - **Pencarian Cerdas** (client-side) that matches **product name**, **printed category** (Coffee/Best Choice/Non Coffee/Other Choice), **mapped filter category** (Kopi/Non-Kopi), and **description**, plus common aliases (e.g. `cappuccino` → `cappucino`).
- Ensure **correct WhatsApp deep-link ordering** to `https://wa.me/6281228483649` with prefilled message:
  - `Halo Kedai Foto Kopi, saya ingin memesan [Nama Produk].`
- Display confirmed business info:
  - Address text: **Jl. Yudistira No5**
  - Hours: **08.00 — 23.00**
  - Instagram: `https://www.instagram.com/fotokopi.idn/`
  - **Google Maps URL:** `https://maps.app.goo.gl/RSsrnRzFBnMqDMRNA`
- Maintain production-ready quality with accessibility and stable automated testing hooks.
- Maintain **clean-code maintainability** through separation of concerns (data/config, pure utilities, reusable components, and modular CSS) **without changing UI/behavior**.

**Status:** Core product (Phase 3) is implemented, built, and tested (Iteration 3: 100% pass). Phase 4 clean-code refactor is now **completed** and regression-tested (Iteration 4: 100% pass).

---

## 2. Implementation Steps

### Phase 1: Core Flow POC (Skipped)
- **Status: Skipped (as planned)**
- Rationale: static frontend only; no external APIs/auth/payments; WhatsApp link is deterministic.

### Phase 2: V1 App Development (MVP — KopiLokal)
**Status: Completed ✅**

**What was delivered in V1**
- React SPA with Tailwind + shadcn UI primitives.
- Responsive navbar (desktop + mobile sheet), hero CTA scroll, interactive catalog filtering, product cards, About/Location/Contact/Footer.
- WhatsApp deep links using `6281228483649` with correct encoded message.
- Business info (address/hours/Instagram) displayed.
- Production build successful + E2E testing 100% pass.

### Phase 3: Brand + Menu Update + Smart Search
**Status: Completed ✅**

#### 3A. Update brand identity (KopiLokal → Kedai Foto Kopi)
- **Completed ✅**
- Replaced customer-facing brand strings across navbar/hero/about/location/contact/footer.
- Updated WhatsApp message template to:
  - `Halo Kedai Foto Kopi, saya ingin memesan [Nama Produk].`
- WhatsApp number unchanged:
  - `6281228483649`
- Copy consistency tweak: hero line now uses “**Rasa lokal berkualitas…**”.

#### 3B. Update location link (Google Maps)
- **Completed ✅**
- Updated Maps button to open exactly:
  - `https://maps.app.goo.gl/RSsrnRzFBnMqDMRNA`
- Confirmed secure new-tab behavior (`noopener noreferrer`).

#### 3C. Replace entire menu dataset (23 items from image)
- **Completed ✅**
- Replaced the previous dataset with **23 items** (names + prices per image) plus concise user-approved descriptions.
- UI model includes:
  - `rawCategory` (printed)
  - `filterCategory` (Kopi/Non-Kopi)

#### 3D. Category/filter mapping revision
- **Completed ✅**
- Filters updated to: **Semua, Kopi, Non-Kopi**.
- Counts validated:
  - **Semua:** 23
  - **Kopi:** 12
  - **Non-Kopi:** 11

#### 3E. Add “Pencarian Cerdas”
- **Completed ✅**
- Search input includes:
  - Placeholder
  - Clear (X) button
  - Normalized matching (case-insensitive)
  - Alias support (e.g., `cappuccino` → `Cappucino` via alias mapping)
- Search combines with category filters.
- No-results state includes a reset-all action.

#### 3F. Keep UX quality + accessibility
- **Completed ✅**
- Mobile-first, no horizontal overflow.
- Skip link, focus rings, `prefers-reduced-motion`.
- `aria-pressed` on filters.
- `data-testid` maintained/added for stability.

#### 3G. Verification steps
- **Completed ✅**
- Production build: `yarn build` ✅
- Testing Agent:
  - Iteration 2: 100% pass (one optional hero copy note)
  - Iteration 3: 100% pass (no issues) ✅

**Phase 3 User Stories (all passed) ✅**
1. Brand name “Kedai Foto Kopi” consistent across the site.
2. WhatsApp message template uses “Halo Kedai Foto Kopi…” for product ordering.
3. Google Maps button opens `https://maps.app.goo.gl/RSsrnRzFBnMqDMRNA`.
4. Smart search updates results instantly.
5. Filter + search can be combined.
6. Clear search button resets query.
7. No-results state is clear and resettable.

---

### Phase 4: Clean-Code Refactor (No UI/Behavior Changes)
**Status: Completed ✅**

#### 4A. Refactor goals & constraints
- **Goals (achieved):**
  - Improve maintainability, readability, and reusability.
  - Reduce duplication and centralize business constants.
  - Keep `App.js` thin (composition + minimal state).
- **Hard constraints (respected):**
  - No changes to UI layout, styling, copy intent, or behavior.
  - No changes to menu data, prices, filters, search logic, alias behavior.
  - No changes to WhatsApp number/message format and external links.
  - No changes to accessibility semantics.
  - **All existing `data-testid` values preserved.**

#### 4B. Implemented file/module structure
- **Data / configuration**
  - `src/data/menuData.js`
    - `SITE_CONFIG` (brand, WA number, maps, IG, address, hours)
    - `MENU_ITEMS` (23 items)
    - `MENU_FILTERS` (Semua/Kopi/Non-Kopi)
    - `NAV_ITEMS`
    - `SEARCH_ALIASES`
- **Utilities**
  - `src/lib/catalog.js`
    - `normalizeSearch(value)`
    - `buildWhatsAppUrl(productName)`
    - `filterAndSearchProducts(items, activeFilter, searchQuery)`
- **Components (named exports)**
  - Layout
    - `src/components/layout/Navbar.jsx`
    - `src/components/layout/Footer.jsx`
  - Menu
    - `src/components/menu/ProductIllustration.jsx`
    - `src/components/menu/ProductCard.jsx`
    - `src/components/menu/MenuCatalog.jsx`
  - Sections
    - `src/components/sections/HeroSection.jsx`
    - `src/components/sections/QuickInfoSection.jsx`
    - `src/components/sections/AboutSection.jsx`
    - `src/components/sections/LocationSection.jsx`
    - `src/components/sections/ContactSection.jsx`
- **App composition**
  - `src/App.js` remains **default export** and is now a thin composition container (~40 lines), holding only sticky-navbar elevation state and page composition.

#### 4C. CSS organization (no visual changes)
- **Completed ✅**
- CSS split by responsibility with `App.css` as an aggregator:
  - `src/styles/base.css`
  - `src/styles/hero.css`
  - `src/styles/catalog.css`
  - `src/styles/sections.css`
  - `src/styles/responsive.css`
  - `src/App.css` imports all of the above

#### 4D. Refactor execution steps
- **Completed ✅**
1. Created new folders/files (data/lib/components/styles).
2. Centralized constants and menu data.
3. Extracted pure search/filter/WhatsApp utilities.
4. Extracted reusable components per section.
5. Reduced `App.js` to composition layer.
6. Verified preserved `data-testid`, URLs, and key strings.

#### 4E. Verification & regression testing
- **Completed ✅**
- Production build: `yarn build` ✅
- Testing Agent Iteration 4: **100% pass**, verified:
  - Desktop + mobile responsiveness
  - 23 items and filter counts 23/12/11
  - Smart search + alias and combined filtering
  - Clear/reset and no-results flows
  - WhatsApp/Maps/Instagram links
  - Mobile menu + anchors
  - Accessibility (`aria-pressed`, labels, focus) and `data-testid` stability
  - Code structure requirements (thin App.js, centralized config, modular CSS)

**Phase 4 User Stories (all passed) ✅**
1. As a user, I experience the **exact same UI/behavior** as before the refactor.
2. As a tester, I can rely on unchanged `data-testid` for all key elements.
3. As a developer, `App.js` is minimal and concerns are separated logically.
4. As a developer, menu data and business constants live in one place.
5. As a developer, search/filter/WhatsApp logic is reusable and isolated.

---

## 3. Next Actions
- No required work remaining.
- Optional enhancements (only if requested):
  1) Multi-item WhatsApp order (cart)
  2) Shareable product deep links
  3) Dark mode
  4) Replace hero image/illustrations with official photos + logo

## 4. Success Criteria
- Business requirements met:
  - Brand shown as **Kedai Foto Kopi** everywhere.
  - Menu shows exactly **23** items.
  - Filters present only: **Semua, Kopi, Non-Kopi** with counts **23 / 12 / 11**.
  - Smart search works with alias matching and combines with filters.
  - Empty state + clear + reset are correct.
  - WhatsApp deep link uses `wa.me/6281228483649` and message:
    - `Halo Kedai Foto Kopi, saya ingin memesan [Nama Produk].`
  - Google Maps opens exactly:
    - `https://maps.app.goo.gl/RSsrnRzFBnMqDMRNA`
  - Responsive, accessible UI; no overflow; no console errors.
- Clean-code targets achieved:
  - `App.js` is thin and readable (~40 lines).
  - Data/config centralized (`src/data/menuData.js`).
  - Pure utilities isolated (`src/lib/catalog.js`).
  - Reusable components created with named exports.
  - CSS split by responsibility with an aggregator import.
- Quality gates:
  - Production build succeeds.
  - Testing Agent regression passes 100% (Iteration 4).