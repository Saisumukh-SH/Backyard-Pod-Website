import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function StudioCategory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const sizes = [
  {
    id: 15,
    label: "15 M²",
    image: "https://images.unsplash.com/photo-1486946255434-2466348c2166?w=1400&q=80",
    description:
      "Our most compact pod — perfect as a single-desk office, meditation space, or reading retreat.",
    footprint: "3 × 5 m",
    height: "2.7 m",
    glazing: "Single wall",
    capacity: "1 person",
  },
  {
    id: 22,
    label: "22 M²",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400&q=80",
    description:
      "A balanced workspace with extra depth for storage and client seating.",
    footprint: "4 × 5.5 m",
    height: "2.7 m",
    glazing: "Double wall",
    capacity: "2 people",
  },
  {
    id: 30,
    label: "30 M²",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1400&q=80",
    description:
      "Light-filled studio layout with flexible configuration.",
    footprint: "5 × 6 m",
    height: "2.7 m",
    glazing: "Clerestory",
    capacity: "2–3 people",
  },
  {
    id: 37,
    label: "37 M²",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1400&q=80",
    description:
      "Premium creative suite with architectural detailing.",
    footprint: "6 × 6 m",
    height: "2.7 m",
    glazing: "Panoramic",
    capacity: "3 people",
  },
  {
    id: 45,
    label: "45 M²",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1400&q=80",
    description:
      "Our largest pod — adaptable for studio, wellness or multi-desk workspace.",
    footprint: "7 × 6.5 m",
    height: "2.7 m",
    glazing: "Full glass",
    capacity: "4 people",
  },
];

const [activeSize, setActiveSize] = useState(15);

const current = sizes.find(s => s.id === activeSize)!;

  return (
    <div>
      {/* HERO */}
      <section className="border-b border-[rgba(42,42,42,0.12)] px-8 py-24 grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <span className="uppercase tracking-[0.25em] text-[11px] opacity-50 block mb-6">
            Work · Create · Retreat
          </span>

          <h1 className="font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[0.95]">
            Studio <span className="italic text-[#6F8A5E]">Pods</span>
          </h1>
        </div>

        {/* Right */}
        <div className="max-w-md ml-auto">
          <p className="text-[15px] leading-relaxed opacity-70 mb-6">
            Five carefully sized pod designs, each built for a different
            backyard and lifestyle. Select a model to explore it in full detail.
          </p>

          <span className="uppercase tracking-[0.18em] text-[11px] opacity-50">
            5 designs available · From $24,900
          </span>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="px-8 py-20">
        <div className="grid md:grid-cols-3 border-t border-[rgba(42,42,42,0.12)]">
          {/* CARD 1 */}
          <div
            onClick={() => navigate("/products/zenwork")}
            className="border-r border-b border-[rgba(42,42,42,0.12)] cursor-pointer hover:bg-[#E8E5DE] transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1200&q=80"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <span className="uppercase text-[10px] tracking-[0.18em] opacity-50 block mb-2">
                SP — 01
              </span>
              <h3 className="font-serif text-2xl mb-4">ZenWork Pod</h3>
              <p className="text-sm opacity-60 mb-6">
                Floor-to-ceiling glass and clean lines create the definitive
                backyard office.
              </p>
              <div className="text-sm opacity-70 mb-6">
                22 m² · 4 × 5.5 m · 6 wks
              </div>
              <div className="font-serif text-lg">From $38,500</div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            onClick={() => navigate("/products/loft-studio")}
            className="border-r border-b border-[rgba(42,42,42,0.12)] cursor-pointer hover:bg-[#E8E5DE] transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <span className="uppercase text-[10px] tracking-[0.18em] opacity-50 block mb-2">
                SP — 02
              </span>
              <h3 className="font-serif text-2xl mb-4">Loft Studio</h3>
              <p className="text-sm opacity-60 mb-6">
                Elevated ceilings and clerestory windows create a light-drenched
                space.
              </p>
              <div className="text-sm opacity-70 mb-6">
                30 m² · 5 × 6 m · 7 wks
              </div>
              <div className="font-serif text-lg">From $52,000</div>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            onClick={() => navigate("/products/compact-retreat")}
            className="border-b border-[rgba(42,42,42,0.12)] cursor-pointer hover:bg-[#E8E5DE] transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1486946255434-2466348c2166?w=1200&q=80"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <span className="uppercase text-[10px] tracking-[0.18em] opacity-50 block mb-2">
                SP — 03
              </span>
              <h3 className="font-serif text-2xl mb-4">Compact Retreat</h3>
              <p className="text-sm opacity-60 mb-6">
                Minimal footprint, maximum style — perfect for tighter blocks.
              </p>
              <div className="text-sm opacity-70 mb-6">
                15 m² · 3 × 5 m · 5 wks
              </div>
              <div className="font-serif text-lg">From $24,900</div>
            </div>
          </div>

          {/* CARD 4 */}
          <div
            onClick={() => navigate("/products/premium-workspace")}
            className="border-r border-b border-[rgba(42,42,42,0.12)] cursor-pointer hover:bg-[#E8E5DE] transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <span className="uppercase text-[10px] tracking-[0.18em] opacity-50 block mb-2">
                SP — 04
              </span>
              <h3 className="font-serif text-2xl mb-4">Premium Workspace</h3>
              <p className="text-sm opacity-60 mb-6">
                Architectural detailing with high-spec finishes throughout.
              </p>
              <div className="text-sm opacity-70 mb-6">
                37 m² · 6 × 6 m · 8 wks
              </div>
              <div className="font-serif text-lg">From $68,000</div>
            </div>
          </div>

          {/* CARD 5 */}
          <div
            onClick={() => navigate("/products/creative-suite")}
            className="border-b border-[rgba(42,42,42,0.12)] cursor-pointer hover:bg-[#E8E5DE] transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200&q=80"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <span className="uppercase text-[10px] tracking-[0.18em] opacity-50 block mb-2">
                SP — 05
              </span>
              <h3 className="font-serif text-2xl mb-4">Creative Suite</h3>
              <p className="text-sm opacity-60 mb-6">
                A flexible hybrid space for studio, wellness, or client
                meetings.
              </p>
              <div className="text-sm opacity-70 mb-6">
                45 m² · 7 × 6.5 m · 9 wks
              </div>
              <div className="font-serif text-lg">From $84,000</div>
            </div>
          </div>
        </div>
      </section>
      {/* size section */}
      <section className="bg-[#1E1E1C] text-white px-8 py-28">
        <div className="grid md:grid-cols-2 gap-20 mb-16">
          <div>
            <span className="uppercase tracking-[0.25em] text-[11px] opacity-40 block mb-6">
              Find Your Fit
            </span>

            <h2 className="font-serif text-[clamp(3rem,5vw,5rem)] leading-[1]">
              Choose Your <br />
              <span className="italic text-[#93A87C]">Square Metres</span>
            </h2>
          </div>

          <div className="max-w-md ml-auto opacity-60 text-sm leading-relaxed">
            Five sizes from 15 to 45 m² — each with distinct proportions,
            pricing, and character.
          </div>
        </div>

        {/* SIZE SELECTOR */}
        <div className="flex gap-8 mb-10 border-b border-white/10 pb-4">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setActiveSize(size.id)}
              className={`uppercase text-xs tracking-[0.2em] pb-2 transition-colors ${
                activeSize === size.id
                  ? "text-[#93A87C] border-b border-[#93A87C]"
                  : "opacity-40 hover:opacity-80"
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img src={current.image} className="w-full h-[420px] object-cover" />

          <div>
            <div className="font-serif text-6xl mb-6">
              {current.id}
              <span className="text-lg ml-2 align-top opacity-60">m²</span>
            </div>

            <p className="opacity-70 mb-10 leading-relaxed max-w-md">
              {current.description}
            </p>

            <div className="grid grid-cols-2 gap-6 text-sm bg-white/5 p-8">
              <div>
                <div className="uppercase opacity-40 text-xs mb-1">
                  Footprint
                </div>
                {current.footprint}
              </div>

              <div>
                <div className="uppercase opacity-40 text-xs mb-1">
                  Ceiling Height
                </div>
                {current.height}
              </div>

              <div>
                <div className="uppercase opacity-40 text-xs mb-1">Glazing</div>
                {current.glazing}
              </div>

              <div>
                <div className="uppercase opacity-40 text-xs mb-1">
                  Capacity
                </div>
                {current.capacity}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}