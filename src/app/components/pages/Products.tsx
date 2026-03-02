import { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: number;
  number: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
}

interface Material {
  label: string;
  sub: string;
  color: string;
  border?: string;
  image: string;
}

interface SizeOption {
  sqm: number;
  label: string;
  tag: string;
  description: string;
  specs: { key: string; val: string }[];
  image: string;
  floorplan: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const products: Product[] = [
  {
    id: 1,
    number: "01 — Studio Pod",
    name: "Studio Pod",
    slug: "studio-pod",
    description:
      "Perfect for home offices, creative studios, or personal retreat spaces. Compact yet fully featured.",
    image: "https://images.unsplash.com/photo-1765810655582-97eae3a801bb?w=1080&q=80",
    features: [
      "15–25 sqm floor space",
      "Insulated walls and ceiling",
      "Full electrical setup",
      "High-speed internet ready",
      "Climate control",
      "Custom interior finishes",
    ],
  },
  {
    id: 2,
    number: "02 — Granny Flat",
    name: "One Bedroom Granny Flat",
    slug: "one-bedroom-flat",
    description:
      "Complete living solution with bedroom, bathroom, and kitchen — ideal for extended family or rental income.",
    image: "https://images.unsplash.com/photo-1692911470070-c10cd6c89938?w=1080&q=80",
    features: [
      "35–50 sqm floor space",
      "Full kitchen with appliances",
      "Modern bathroom",
      "Separate bedroom",
      "Living area",
      "Independent utilities",
    ],
  },
  {
    id: 3,
    number: "03 — Granny Flat",
    name: "Two Bedroom Granny Flat",
    slug: "two-bedroom-flat",
    description:
      "Spacious family-friendly unit with multiple bedrooms, outdoor deck options, and everything you need to live comfortably.",
    image: "https://images.unsplash.com/photo-1743348111301-12f060372493?w=1080&q=80",
    features: [
      "60–80 sqm floor space",
      "Two separate bedrooms",
      "Full kitchen and dining",
      "Modern bathroom",
      "Spacious living area",
      "Outdoor deck option",
    ],
  },
  {
    id: 4,
    number: "04 — Custom",
    name: "Custom Design",
    slug: "custom-design",
    description:
      "Work directly with our team to create your perfect backyard space. No limits, total flexibility, one-of-a-kind results.",
    image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?w=1080&q=80",
    features: [
      "Tailored to your needs",
      "Flexible size and layout",
      "Premium material options",
      "Architectural consultation",
      "3D visualisation",
      "Council approval assistance",
    ],
  },
];

const sizeOptions: SizeOption[] = [
  {
    sqm: 15,
    label: "15 m²",
    tag: "Essentials",
    description:
      "Our most compact pod — perfect as a focused single-desk office, meditation space, or reading retreat. Easy to place in smaller backyards with a minimal footprint.",
    specs: [
      { key: "Footprint", val: "3 × 5 m" },
      { key: "Ceiling Height", val: "2.7 m" },
      { key: "Glazing", val: "Single wall" },
      { key: "Capacity", val: "1 person" },
    ],
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1080&q=80",
    floorplan: "3 m × 5 m",
  },
  {
    sqm: 22,
    label: "22 m²",
    tag: "Popular",
    description:
      "The sweet spot for a productive home office. Accommodates a desk, seating area, and storage. Large windows flood the space with natural light.",
    specs: [
      { key: "Footprint", val: "4 × 5.5 m" },
      { key: "Ceiling Height", val: "2.7 m" },
      { key: "Glazing", val: "Two walls" },
      { key: "Capacity", val: "1–2 people" },
    ],
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1080&q=80",
    floorplan: "4 m × 5.5 m",
  },
  {
    sqm: 30,
    label: "30 m²",
    tag: "Studio",
    description:
      "A generous creative studio or dual-office setup. Room for a standing desk, collaboration table, and a small lounge. Ideal for freelancers and small teams.",
    specs: [
      { key: "Footprint", val: "5 × 6 m" },
      { key: "Ceiling Height", val: "3.0 m" },
      { key: "Glazing", val: "Corner glass" },
      { key: "Capacity", val: "2–3 people" },
    ],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1080&q=80",
    floorplan: "5 m × 6 m",
  },
  {
    sqm: 37,
    label: "37 m²",
    tag: "Workshop",
    description:
      "Enough space for a full workshop, art studio, or yoga and wellness room. Add a small ensuite bathroom to make it fully self-contained.",
    specs: [
      { key: "Footprint", val: "5.5 × 6.7 m" },
      { key: "Ceiling Height", val: "3.0 m" },
      { key: "Glazing", val: "Wrap-around" },
      { key: "Capacity", val: "3–5 people" },
    ],
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1080&q=80",
    floorplan: "5.5 m × 6.7 m",
  },
  {
    sqm: 45,
    label: "45 m²",
    tag: "Ultimate",
    description:
      "Our largest pod configuration — a fully self-contained studio flat or premium office suite. Accommodates a kitchenette, bathroom, and multiple work zones.",
    specs: [
      { key: "Footprint", val: "6 × 7.5 m" },
      { key: "Ceiling Height", val: "3.2 m" },
      { key: "Glazing", val: "Full facade" },
      { key: "Capacity", val: "4–6 people" },
    ],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1080&q=80",
    floorplan: "6 m × 7.5 m",
  },
];

const materials: Material[] = [
  { label: "Charcoal Cedar", sub: "Dark burnt finish — timeless & bold", color: "#2e2e2e", image: "https://images.unsplash.com/photo-1596395147635-9c2e84c80b0c?w=900&q=80" },
  { label: "Natural Timber", sub: "Warm untreated grain — organic & open", color: "#C8A97A", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" },
  { label: "Slate Grey Composite", sub: "Low-maintenance modern finish", color: "#6B7280", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80" },
  { label: "Sage Green Steel", sub: "Powder-coated — garden-integrated", color: "#7A9E6E", image: "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?w=900&q=80" },
  { label: "White Render", sub: "Clean plaster finish — crisp & minimal", color: "#EFEFEF", border: "1px solid #ccc", image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=900&q=80" },
];

const processSteps = [
  { num: "01", title: "Consultation", desc: "Discuss your vision and requirements with our expert team — no obligation, no pressure." },
  { num: "02", title: "Design", desc: "Receive custom architectural plans and photorealistic 3D visualisations of your space." },
  { num: "03", title: "Approval", desc: "We handle all council permits, building regulations, and paperwork on your behalf." },
  { num: "04", title: "Construction", desc: "Professional modular installation with minimal disruption and a clean final handover." },
];

const podFeatures = [
  { name: "Full Customisation", desc: "Tailor dimensions, cladding, internal finishes, and layout to match your vision exactly.", delay: "0s", icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg> },
  { name: "Fast Installation", desc: "Our prefabricated modular system means your pod is assembled on-site in just 1–2 days.", delay: "0.08s", icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
  { name: "Fast Lead Times", desc: "From deposit to delivery in as little as 6 weeks — one of the fastest turnarounds in the industry.", delay: "0.16s", icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg> },
  { name: "Building Regulation Compliant", desc: "All pods come with full documentation meeting local planning and building regulations.", delay: "0.24s", icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
  { name: "10-Year Warranty", desc: "Total peace of mind backed by a decade-long structural warranty and ongoing support.", delay: "0.32s", icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg> },
  { name: "Fixed Price Contract", desc: "The price you see is the price you pay — fully transparent with no hidden costs.", delay: "0.4s", icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg> },
];

// ─── Styles ───────────────────────────────────────────────────────────────────

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

.dmb-root *, .dmb-root *::before, .dmb-root *::after { box-sizing: border-box; }
.dmb-root {
  --bg: #F0EDE6; --fg: #2A2A2A; --accent: #5C6E4B; --muted: #8A8A7A; --border: rgba(42,42,42,0.15);
  background: var(--bg); color: var(--fg); font-family: 'DM Sans', sans-serif; font-weight: 300; overflow-x: hidden;
}
.dmb-root .section-label { font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.75rem; display: block; }
.dmb-root .divider { height: 1px; background: var(--border); margin: 0 4rem; }
.dmb-root .btn-primary { padding: 0.85rem 2.2rem; background: var(--fg); color: var(--bg); font-family: 'DM Sans', sans-serif; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; border: none; cursor: pointer; transition: background 0.2s; text-decoration: none; display: inline-block; }
.dmb-root .btn-primary:hover { background: var(--accent); }
.dmb-root .btn-outline { padding: 0.85rem 2.2rem; background: transparent; color: var(--fg); font-family: 'DM Sans', sans-serif; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; border: 1px solid var(--border); cursor: pointer; transition: border-color 0.2s, color 0.2s; text-decoration: none; display: inline-block; }
.dmb-root .btn-outline:hover { border-color: var(--fg); color: var(--accent); }
.dmb-root .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.7s ease, transform 0.7s ease; }
.dmb-root .reveal.in-view { opacity: 1; transform: translateY(0); }

/* Products Hero */
.dmb-root .products-hero { padding: 5rem 4rem 4rem; border-bottom: 1px solid var(--border); }
.dmb-root .products-hero-inner { max-width: 700px; }
.dmb-root .products-hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 5vw, 5.5rem); font-weight: 300; line-height: 0.95; margin-bottom: 1.5rem; margin-top: 0; }
.dmb-root .products-hero h1 em { font-style: italic; color: var(--accent); }
.dmb-root .products-hero > .products-hero-inner > p { font-size: 1rem; color: var(--muted); line-height: 1.8; max-width: 50ch; margin: 0; }

/* Product Rows */
.dmb-root .products-list { padding: 6rem 4rem; display: flex; flex-direction: column; }
.dmb-root .product-row { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid var(--border); min-height: 520px; transition: background 0.3s; }
.dmb-root .product-row:first-child { border-top: 1px solid var(--border); }
.dmb-root .product-row:hover { background: rgba(255,255,255,0.25); }
.dmb-root .product-row-img { position: relative; overflow: hidden; }
.dmb-root .product-row-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s ease; display: block; }
.dmb-root .product-row:hover .product-row-img img { transform: scale(1.04); }
.dmb-root .product-row.reversed .product-row-img { order: 2; }
.dmb-root .product-row.reversed .product-row-content { order: 1; }
.dmb-root .product-row-content { padding: 4rem; display: flex; flex-direction: column; justify-content: center; gap: 1.5rem; }
.dmb-root .product-number { font-family: 'Cormorant Garamond', serif; font-size: 0.8rem; color: var(--muted); letter-spacing: 0.1em; }
.dmb-root .product-row-content h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 3vw, 3rem); font-weight: 400; line-height: 1.1; margin: 0; }
.dmb-root .product-row-content > p { font-size: 0.88rem; color: var(--muted); line-height: 1.8; max-width: 42ch; margin: 0; }
.dmb-root .product-features { display: flex; flex-direction: column; gap: 0.5rem; }
.dmb-root .product-feature { display: flex; align-items: center; gap: 0.75rem; font-size: 0.8rem; color: var(--fg); }
.dmb-root .check-icon { width: 16px; height: 16px; border-radius: 50%; background: var(--accent); flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.dmb-root .check-icon svg { width: 9px; height: 9px; }
.dmb-root .product-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.5rem; }

/* Process */
.dmb-root .process-section { padding: 7rem 4rem; background: #E8E5DE; }
.dmb-root .process-header { text-align: center; margin-bottom: 4rem; }
.dmb-root .process-header h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 4vw, 4rem); font-weight: 300; margin-bottom: 0.75rem; margin-top: 0; }
.dmb-root .process-header p { font-size: 0.9rem; color: var(--muted); margin: 0; }
.dmb-root .process-steps { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid var(--border); }
.dmb-root .process-step { padding: 3rem 2rem; text-align: center; border-right: 1px solid var(--border); position: relative; transition: background 0.3s; }
.dmb-root .process-step:last-child { border-right: none; }
.dmb-root .process-step:hover { background: rgba(255,255,255,0.4); }
.dmb-root .step-num { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 300; color: rgba(42,42,42,0.08); line-height: 1; margin-bottom: 1rem; }
.dmb-root .step-title { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 500; margin-bottom: 0.75rem; margin-top: 0; }
.dmb-root .step-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.7; margin: 0; }
.dmb-root .step-line { position: absolute; right: -1px; top: 50%; width: 2px; height: 40px; background: var(--accent); transform: translateY(-50%); }

/* Footer */
.dmb-root .site-footer { padding: 3rem 4rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
.dmb-root .footer-logo { font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 500; }
.dmb-root .footer-links { display: flex; gap: 2rem; }
.dmb-root .footer-links button { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); transition: color 0.2s; cursor: pointer; background: none; border: none; font-family: 'DM Sans', sans-serif; }
.dmb-root .footer-links button:hover { color: var(--fg); }
.dmb-root .footer-copy { font-size: 0.7rem; color: var(--muted); }

/* Breadcrumb */
.dmb-root .breadcrumb { padding: 1.5rem 4rem; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid var(--border); }
.dmb-root .breadcrumb button { color: var(--muted); cursor: pointer; transition: color 0.2s; background: none; border: none; font-family: 'DM Sans', sans-serif; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; }
.dmb-root .breadcrumb button:hover { color: var(--fg); }
.dmb-root .breadcrumb-current { color: var(--fg); }

/* Detail Hero */
.dmb-root .detail-hero { display: grid; grid-template-columns: 1fr 1fr; }
.dmb-root .hero-media { position: relative; overflow: hidden; }
.dmb-root .hero-media-inner { position: relative; height: 100%; min-height: 88vh; background: #1a1e18; overflow: hidden; }
.dmb-root .hero-media-inner img { width: 100%; height: 100%; object-fit: cover; opacity: 0.85; transition: transform 0.8s ease; display: block; }
.dmb-root .hero-media-inner:hover img { transform: scale(1.03); }
.dmb-root .video-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.dmb-root .play-btn { width: 72px; height: 72px; border-radius: 50%; background: rgba(240,237,230,0.9); backdrop-filter: blur(8px); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.3s, background 0.3s; box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
.dmb-root .play-btn:hover { transform: scale(1.1); background: #fff; }
.dmb-root .video-label { position: absolute; bottom: 2rem; left: 2rem; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(240,237,230,0.7); }
.dmb-root .hero-content { display: flex; flex-direction: column; justify-content: center; padding: 6rem 5rem 4rem 4rem; }
.dmb-root .hero-tag { font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 1.5rem; }
.dmb-root .hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 4.5vw, 5.5rem); font-weight: 300; line-height: 0.95; margin-bottom: 2rem; margin-top: 0; }
.dmb-root .hero-title em { font-style: italic; color: var(--accent); }
.dmb-root .hero-desc { font-size: 0.88rem; line-height: 1.85; color: var(--muted); max-width: 40ch; margin-bottom: 3rem; margin-top: 0; }
.dmb-root .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
.dmb-root .hero-specs { margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border); display: flex; gap: 3rem; }
.dmb-root .spec-item { display: flex; flex-direction: column; gap: 0.3rem; }
.dmb-root .spec-label { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); }
.dmb-root .spec-val { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 500; }

/* Features */
.dmb-root .features-section { padding: 8rem 4rem; }
.dmb-root .features-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 5rem; }
.dmb-root .features-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 4vw, 4rem); font-weight: 300; line-height: 1.1; margin: 0; }
.dmb-root .features-subtitle { font-size: 0.85rem; color: var(--muted); max-width: 30ch; text-align: right; line-height: 1.7; margin: 0; }
.dmb-root .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: var(--border); border: 1.5px solid var(--border); }
.dmb-root .feature-card { background: var(--bg); padding: 2.5rem 2rem; display: flex; flex-direction: column; gap: 1rem; transition: background 0.3s; cursor: default; }
.dmb-root .feature-card:hover { background: #e8e5de; }
.dmb-root .feature-icon { width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--accent); transition: border-color 0.3s, background 0.3s; }
.dmb-root .feature-card:hover .feature-icon { border-color: var(--accent); background: rgba(92,110,75,0.08); }
.dmb-root .feature-name { font-family: 'Cormorant Garamond', serif; font-size: 1.25rem; font-weight: 500; margin: 0; }
.dmb-root .feature-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.7; margin: 0; }

/* ══ SIZE SELECTOR ══ */
.dmb-root .size-section { padding: 8rem 4rem; background: var(--fg); color: var(--bg); }
.dmb-root .size-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 4rem; }
.dmb-root .size-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 4vw, 4rem); font-weight: 300; line-height: 1.05; margin: 0; color: var(--bg); }
.dmb-root .size-title em { font-style: italic; color: #9DB88A; }
.dmb-root .size-subtitle { font-size: 0.82rem; color: rgba(240,237,230,0.45); max-width: 28ch; text-align: right; line-height: 1.7; margin: 0; }

.dmb-root .size-tabs { display: flex; margin-bottom: 0; border-bottom: 1px solid rgba(240,237,230,0.12); gap: 0; }
.dmb-root .size-tab { position: relative; padding: 1rem 0; margin-right: 2.5rem; cursor: pointer; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(240,237,230,0.35); background: none; border: none; font-family: 'DM Sans', sans-serif; transition: color 0.25s; white-space: nowrap; }
.dmb-root .size-tab::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 2px; background: #9DB88A; transform: scaleX(0); transition: transform 0.3s; }
.dmb-root .size-tab:hover { color: rgba(240,237,230,0.7); }
.dmb-root .size-tab.active { color: var(--bg); }
.dmb-root .size-tab.active::after { transform: scaleX(1); }
.dmb-root .size-tab-badge { display: inline-block; margin-left: 0.5rem; padding: 0.15rem 0.45rem; font-size: 0.5rem; letter-spacing: 0.08em; text-transform: uppercase; background: #9DB88A; color: var(--fg); border-radius: 2px; vertical-align: middle; font-weight: 500; }

.dmb-root .size-slider-row { display: flex; align-items: center; gap: 1.25rem; padding: 2rem 0 2.5rem; }
.dmb-root .size-slider { flex: 1; -webkit-appearance: none; appearance: none; height: 2px; background: rgba(240,237,230,0.15); outline: none; cursor: pointer; border-radius: 0; }
.dmb-root .size-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #9DB88A; border: 3px solid var(--fg); cursor: pointer; box-shadow: 0 0 0 2px rgba(157,184,138,0.3); transition: box-shadow 0.2s; }
.dmb-root .size-slider::-webkit-slider-thumb:hover { box-shadow: 0 0 0 5px rgba(157,184,138,0.2); }
.dmb-root .size-slider::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: #9DB88A; border: 3px solid var(--fg); cursor: pointer; }
.dmb-root .size-slider-label { font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(240,237,230,0.3); white-space: nowrap; }

.dmb-root .size-content { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
.dmb-root .size-img-wrap { position: relative; aspect-ratio: 4/3; overflow: hidden; }
.dmb-root .size-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 0.55s ease, transform 0.6s ease; transform: scale(1.04); }
.dmb-root .size-img.active { opacity: 1; transform: scale(1); }
.dmb-root .size-img-badge { position: absolute; top: 1.5rem; left: 1.5rem; background: rgba(30,30,30,0.75); backdrop-filter: blur(8px); padding: 0.4rem 1rem; font-size: 0.62rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(240,237,230,0.85); }
.dmb-root .size-img-sqm { position: absolute; bottom: 1.5rem; right: 1.5rem; font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; font-weight: 300; color: rgba(240,237,230,0.9); line-height: 1; text-shadow: 0 2px 12px rgba(0,0,0,0.4); }
.dmb-root .size-img-sqm span { font-size: 0.4em; color: rgba(240,237,230,0.55); }

.dmb-root .size-info { display: flex; flex-direction: column; gap: 2rem; }
.dmb-root .size-big-num { font-family: 'Cormorant Garamond', serif; font-size: clamp(4.5rem, 7vw, 8rem); font-weight: 300; line-height: 1; color: var(--bg); margin: 0; }
.dmb-root .size-big-num span { font-size: 0.32em; color: rgba(240,237,230,0.35); letter-spacing: 0.06em; }
.dmb-root .size-desc { font-size: 0.88rem; color: rgba(240,237,230,0.6); line-height: 1.85; margin: 0; max-width: 44ch; }
.dmb-root .size-specs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(240,237,230,0.08); border: 1px solid rgba(240,237,230,0.08); }
.dmb-root .size-spec { padding: 1.25rem 1.5rem; background: rgba(255,255,255,0.02); transition: background 0.2s; }
.dmb-root .size-spec:hover { background: rgba(255,255,255,0.05); }
.dmb-root .size-spec-key { font-size: 0.58rem; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(240,237,230,0.3); margin-bottom: 0.4rem; }
.dmb-root .size-spec-val { font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; font-weight: 400; color: rgba(240,237,230,0.9); }
.dmb-root .size-footprint-bar { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.5rem; border: 1px solid rgba(240,237,230,0.1); }
.dmb-root .size-footprint-icon { opacity: 0.35; flex-shrink: 0; }
.dmb-root .size-footprint-text { }
.dmb-root .size-footprint-label { font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(240,237,230,0.3); margin-bottom: 0.25rem; }
.dmb-root .size-footprint-val { font-size: 0.85rem; color: rgba(240,237,230,0.8); font-weight: 400; letter-spacing: 0.03em; }
.dmb-root .size-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.dmb-root .btn-inv-primary { padding: 0.85rem 2.2rem; background: var(--bg); color: var(--fg); font-family: 'DM Sans', sans-serif; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; border: none; cursor: pointer; transition: background 0.2s; }
.dmb-root .btn-inv-primary:hover { background: #9DB88A; }
.dmb-root .btn-inv-outline { padding: 0.85rem 2.2rem; background: transparent; color: rgba(240,237,230,0.65); font-family: 'DM Sans', sans-serif; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; border: 1px solid rgba(240,237,230,0.18); cursor: pointer; transition: border-color 0.2s, color 0.2s; }
.dmb-root .btn-inv-outline:hover { border-color: rgba(240,237,230,0.55); color: var(--bg); }

/* Materials */
.dmb-root .materials-section { padding: 8rem 4rem; background: #E8E5DE; }
.dmb-root .materials-header { margin-bottom: 4rem; }
.dmb-root .materials-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 4vw, 4rem); font-weight: 300; margin: 0; }
.dmb-root .materials-layout { display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; align-items: start; }
.dmb-root .materials-list { display: flex; flex-direction: column; }
.dmb-root .material-item { display: flex; align-items: center; gap: 1.5rem; padding: 1.25rem 0; border-bottom: 1px solid var(--border); cursor: pointer; transition: padding-left 0.3s; }
.dmb-root .material-item:first-child { border-top: 1px solid var(--border); }
.dmb-root .material-item:hover, .dmb-root .material-item.active { padding-left: 1rem; }
.dmb-root .material-swatch { width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; border: 2px solid transparent; transition: border-color 0.3s; }
.dmb-root .material-item:hover .material-swatch, .dmb-root .material-item.active .material-swatch { border-color: var(--fg); }
.dmb-root .material-info { flex: 1; }
.dmb-root .material-name { font-size: 0.85rem; font-weight: 500; letter-spacing: 0.04em; }
.dmb-root .material-sub { font-size: 0.72rem; color: var(--muted); margin-top: 0.2rem; }
.dmb-root .material-arrow { opacity: 0; transform: translateX(-8px); transition: opacity 0.3s, transform 0.3s; color: var(--accent); }
.dmb-root .material-item:hover .material-arrow, .dmb-root .material-item.active .material-arrow { opacity: 1; transform: translateX(0); }
.dmb-root .materials-preview { position: relative; aspect-ratio: 4/3; overflow: hidden; border-radius: 2px; }
.dmb-root .preview-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 0.5s ease; }
.dmb-root .preview-img.visible { opacity: 1; }
.dmb-root .preview-label { position: absolute; bottom: 1.5rem; left: 1.5rem; background: rgba(240,237,230,0.9); backdrop-filter: blur(8px); padding: 0.4rem 1rem; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; }

/* CTA */
.dmb-root .detail-cta { padding: 8rem 4rem; display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
.dmb-root .cta-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 4vw, 4.5rem); font-weight: 300; line-height: 1.05; margin: 0; }
.dmb-root .cta-title em { font-style: italic; color: var(--accent); }
.dmb-root .cta-right { display: flex; flex-direction: column; gap: 2rem; }
.dmb-root .cta-text { font-size: 0.88rem; color: var(--muted); line-height: 1.8; margin: 0; }
.dmb-root .cta-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

/* Responsive */
@media (max-width: 900px) {
  .dmb-root .divider { margin: 0 1.5rem; }
  .dmb-root .products-hero, .dmb-root .products-list, .dmb-root .process-section { padding: 4rem 1.5rem; }
  .dmb-root .product-row { grid-template-columns: 1fr; min-height: auto; }
  .dmb-root .product-row.reversed .product-row-img, .dmb-root .product-row.reversed .product-row-content { order: unset; }
  .dmb-root .process-steps { grid-template-columns: 1fr 1fr; }
  .dmb-root .site-footer { flex-direction: column; gap: 1.5rem; text-align: center; padding: 2rem 1.5rem; }
  .dmb-root .breadcrumb { padding: 1rem 1.5rem; }
  .dmb-root .detail-hero { grid-template-columns: 1fr; }
  .dmb-root .hero-media-inner { min-height: 55vw; }
  .dmb-root .hero-content { padding: 3rem 1.5rem; }
  .dmb-root .features-section, .dmb-root .materials-section, .dmb-root .detail-cta, .dmb-root .size-section { padding: 5rem 1.5rem; }
  .dmb-root .features-grid { grid-template-columns: 1fr 1fr; }
  .dmb-root .features-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .dmb-root .features-subtitle { text-align: left; }
  .dmb-root .materials-layout { grid-template-columns: 1fr; }
  .dmb-root .detail-cta { grid-template-columns: 1fr; gap: 3rem; }
  .dmb-root .size-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .dmb-root .size-subtitle { text-align: left; }
  .dmb-root .size-tabs { overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 2px; }
  .dmb-root .size-content { grid-template-columns: 1fr; gap: 3rem; }
}
`;

// ─── Helper components ────────────────────────────────────────────────────────

function StyleInjector() {
  useEffect(() => {
    const id = "dmb-styles";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = CSS;
      document.head.appendChild(style);
    }
    return () => { document.getElementById(id)?.remove(); };
  }, []);
  return null;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".dmb-root .reveal:not(.in-view)");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in-view"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

function CheckIcon() {
  return (
    <span className="check-icon">
      <svg viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="2"><polyline points="2,5 4,7 8,3" /></svg>
    </span>
  );
}

function SiteFooter({ onNav }: { onNav: () => void }) {
  return (
    <footer className="site-footer">
      <div className="footer-logo">Design | MyBackyard.</div>
      <div className="footer-links">
        <button onClick={onNav}>Products</button>
        <button>Pricing</button><button>Contact</button><button>About</button>
      </div>
      <div className="footer-copy">© 2025 Design My Backyard. All rights reserved.</div>
    </footer>
  );
}

// ─── Size Selector ────────────────────────────────────────────────────────────

function SizeSelectorSection() {
  const [activeIdx, setActiveIdx] = useState(1);
  const active = sizeOptions[activeIdx];

  return (
    <section className="size-section">
      <div className="size-header reveal">
        <div>
          <span className="section-label" style={{ color: "rgba(240,237,230,0.38)" }}>Configure Your Pod</span>
          <h2 className="size-title">Choose Your<br /><em>Square Metres</em></h2>
        </div>
        <p className="size-subtitle">Five size options from compact to expansive — each with its own character and capability.</p>
      </div>

      {/* Tab buttons */}
      <div className="size-tabs reveal">
        {sizeOptions.map((opt, i) => (
          <button key={opt.sqm} className={`size-tab ${activeIdx === i ? "active" : ""}`} onClick={() => setActiveIdx(i)}>
            {opt.label}
            {opt.tag === "Popular" && <span className="size-tab-badge">Popular</span>}
          </button>
        ))}
      </div>

      {/* Drag slider */}
      <div className="size-slider-row reveal">
        <span className="size-slider-label">15 m²</span>
        <input
          type="range"
          className="size-slider"
          min={0} max={sizeOptions.length - 1} step={1}
          value={activeIdx}
          onChange={(e) => setActiveIdx(Number(e.target.value))}
        />
        <span className="size-slider-label">45 m²</span>
      </div>

      {/* Main content */}
      <div className="size-content">
        {/* Image stack */}
        <div className="size-img-wrap reveal">
          {sizeOptions.map((opt, i) => (
            <img key={opt.sqm} className={`size-img ${activeIdx === i ? "active" : ""}`} src={opt.image} alt={`${opt.sqm} sqm pod`} />
          ))}
          <div className="size-img-badge">{active.tag}</div>
          <div className="size-img-sqm">{active.sqm}<span> m²</span></div>
        </div>

        {/* Info panel */}
        <div className="size-info reveal">
          <p className="size-big-num">{active.sqm}<span> m²</span></p>

          <p className="size-desc">{active.description}</p>

          <div className="size-specs-grid">
            {active.specs.map((spec, i) => (
              <div key={i} className="size-spec">
                <div className="size-spec-key">{spec.key}</div>
                <div className="size-spec-val">{spec.val}</div>
              </div>
            ))}
          </div>

          <div className="size-footprint-bar">
            <svg className="size-footprint-icon" width="26" height="26" fill="none" stroke="rgba(240,237,230,0.8)" strokeWidth="1.5" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 9h18M9 3v18" />
            </svg>
            <div className="size-footprint-text">
              <div className="size-footprint-label">Footprint</div>
              <div className="size-footprint-val">{active.floorplan}</div>
            </div>
          </div>

          <div className="size-actions">
            <button className="btn-inv-primary">Get a Quote</button>
            <button className="btn-inv-outline">Download Floorplan</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Products Listing Page ────────────────────────────────────────────────────

function ProductsListing({ onSelect }: { onSelect: (slug: string) => void }) {
  useReveal();
  return (
    <div>
      <div className="products-hero">
        <div className="products-hero-inner reveal">
          <span className="section-label">Our Range</span>
          <h1>Our <em>Products</em></h1>
          <p>From compact studio pods to spacious granny flats, we have the perfect solution for your backyard — designed, approved, and installed end to end.</p>
        </div>
      </div>

      <section className="products-list">
        {products.map((product, index) => (
          <div key={product.id} className={`product-row reveal ${index % 2 === 1 ? "reversed" : ""}`}>
            <div className="product-row-img"><img src={product.image} alt={product.name} /></div>
            <div className="product-row-content">
              <p className="product-number">{product.number}</p>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="product-features">
                {product.features.map((f, fi) => <div key={fi} className="product-feature"><CheckIcon />{f}</div>)}
              </div>
              <div className="product-actions">
                <button className="btn-primary" onClick={() => onSelect(product.slug)}>Learn More</button>
                <button className="btn-outline">View Pricing</button>
                <button className="btn-outline">Get Quote</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="process-section">
        <div className="process-header reveal">
          <span className="section-label">How It Works</span>
          <h2>Our Process</h2>
          <p>Simple, transparent, and professional from start to finish</p>
        </div>
        <div className="process-steps reveal">
          {processSteps.map((step, i) => (
            <div key={i} className="process-step">
              <div className="step-num">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              {i < processSteps.length - 1 && <div className="step-line" />}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter onNav={() => {}} />
    </div>
  );
}

// ─── Product Detail Page ──────────────────────────────────────────────────────

function ProductDetailView({ slug, onBack }: { slug: string; onBack: () => void }) {
  useReveal();
  const [activeMaterial, setActiveMaterial] = useState(0);
  const product = products.find((p) => p.slug === slug) ?? products[0];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <button onClick={onBack}>Products</button>
        <span style={{ color: "var(--border)" }}>›</span>
        <span className="breadcrumb-current">{product.name}</span>
      </div>

      {/* Hero */}
      <section className="detail-hero">
        <div className="hero-media">
          <div className="hero-media-inner">
            <img src="https://images.unsplash.com/photo-1596395147635-9c2e84c80b0c?w=1200&q=80" alt="ZenWork Pod" />
            <div className="video-overlay">
              <button className="play-btn" aria-label="Play product video">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#2A2A2A"><polygon points="5,3 19,12 5,21" /></svg>
              </button>
            </div>
            <span className="video-label">Product Overview — 2:14</span>
          </div>
        </div>
        <div className="hero-content reveal">
          <p className="hero-tag">Office Pods — ZenWork Series</p>
          <h1 className="hero-title">Focus.<br /><em>Redefined.</em><br />Backyard.</h1>
          <p className="hero-desc">Our ZenWork Pod is designed with simplicity, clarity, and focus at its core. Clean lines, minimalist detailing, and large windows create a calming, light-filled environment ideal for deep work or mindful creativity.</p>
          <div className="hero-actions">
            <button className="btn-primary">View Pricing</button>
            <button className="btn-outline">Explore Features</button>
          </div>
          <div className="hero-specs">
            <div className="spec-item"><span className="spec-label">Size</span><span className="spec-val">3×4 m</span></div>
            <div className="spec-item"><span className="spec-label">Lead Time</span><span className="spec-val">6 wks</span></div>
            <div className="spec-item"><span className="spec-label">Warranty</span><span className="spec-val">10 yr</span></div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Features */}
      <section className="features-section">
        <div className="features-header reveal">
          <div>
            <span className="section-label">Why ZenWork</span>
            <h2 className="features-title">The Best of<br />Our Features</h2>
          </div>
          <p className="features-subtitle">Every element is engineered to support how you work best — without compromise.</p>
        </div>
        <div className="features-grid">
          {podFeatures.map((feat, i) => (
            <div key={i} className="feature-card reveal" style={{ transitionDelay: feat.delay }}>
              <div className="feature-icon">{feat.icon}</div>
              <h3 className="feature-name">{feat.name}</h3>
              <p className="feature-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SIZE SELECTOR ── */}
      <SizeSelectorSection />

      {/* Materials */}
      <section className="materials-section">
        <div className="materials-header reveal">
          <span className="section-label">Finish &amp; Materials</span>
          <h2 className="materials-title">Choose Your<br />Cladding</h2>
        </div>
        <div className="materials-layout">
          <div className="materials-list">
            {materials.map((mat, i) => (
              <div key={i} className={`material-item reveal ${activeMaterial === i ? "active" : ""}`} onClick={() => setActiveMaterial(i)}>
                <span className="material-swatch" style={{ background: mat.color, border: mat.border }} />
                <div className="material-info">
                  <div className="material-name">{mat.label}</div>
                  <div className="material-sub">{mat.sub}</div>
                </div>
                <svg className="material-arrow" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
          <div className="materials-preview reveal">
            {materials.map((mat, i) => (
              <img key={i} className={`preview-img ${activeMaterial === i ? "visible" : ""}`} src={mat.image} alt={mat.label} />
            ))}
            <div className="preview-label">{materials[activeMaterial].label}</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="detail-cta">
        <h2 className="cta-title reveal">Ready to<br />build your<br /><em>ideal space?</em></h2>
        <div className="cta-right reveal">
          <p className="cta-text">Whether you're designing a home office, creative studio, or wellness retreat — our team will guide you from concept to completion. Fixed pricing, fast delivery, and zero stress.</p>
          <div className="cta-actions">
            <button className="btn-primary">Get a Quote</button>
            <button className="btn-outline">Download Brochure</button>
            <button className="btn-outline" onClick={onBack}>← Back to Products</button>
          </div>
        </div>
      </section>

      <SiteFooter onNav={onBack} />
    </div>
  );
}

// ─── Root Export ──────────────────────────────────────────────────────────────

export function ProductsPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSlug]);

  return (
    <div className="dmb-root">
      <StyleInjector />
      {activeSlug === null
        ? <ProductsListing onSelect={setActiveSlug} />
        : <ProductDetailView slug={activeSlug} onBack={() => setActiveSlug(null)} />
      }
    </div>
  );
}