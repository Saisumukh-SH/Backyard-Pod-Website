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
      route: "/products/compact-retreat",
      image: "...",
      description: "...",
      footprint: "3 × 5 m",
      height: "2.7 m",
      glazing: "Single wall",
      capacity: "1 person",
    },
    {
      id: 22,
      label: "22 M²",
      route: "/products/zenwork",
      image: "...",
      description: "...",
      footprint: "4 × 5.5 m",
      height: "2.7 m",
      glazing: "Double wall",
      capacity: "2 people",
    },
    {
      id: 30,
      label: "30 M²",
      route: "/products/loft-studio",
      image: "...",
      description: "...",
      footprint: "5 × 6 m",
      height: "2.7 m",
      glazing: "Clerestory",
      capacity: "2–3 people",
    },
    {
      id: 37,
      label: "37 M²",
      route: "/products/premium-workspace",
      image: "...",
      description: "...",
      footprint: "6 × 6 m",
      height: "2.7 m",
      glazing: "Panoramic",
      capacity: "3 people",
    },
    {
      id: 45,
      label: "45 M²",
      route: "/products/creative-suite",
      image: "...",
      description: "...",
      footprint: "7 × 6.5 m",
      height: "2.7 m",
      glazing: "Full glass",
      capacity: "4 people",
    },
  ];

  const [activeSize, setActiveSize] = useState(15);

  const current = sizes.find((s) => s.id === activeSize)!;

  return (
    <div>
      {/* HERO */}
      <section className="border-b border-[rgba(42,42,42,0.12)] px-8 py-24 grid md:grid-cols-2 gap-16 animate-fadeUp">
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
      <section className="px-8 py-20 animate-fadeUp">
        <div className="grid md:grid-cols-3 border-t border-[rgba(42,42,42,0.12)]">
          {/* CARD 1 */}
          <div
            onClick={() => navigate("/products/StudioProduct1")}
            className="group relative border-r border-b border-black/10 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:z-10"
          >
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1200&q=80"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              <div className="flex items-center justify-between mt-6">
                <span className="text-sm opacity-60 group-hover:opacity-100 transition">
                  Explore Design
                </span>

                <span className="text-lg transform transition-all duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            onClick={() => navigate("/products/StudioProduct2")}
            className="group relative border-r border-b border-black/10 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:z-10"
          >
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              <div className="flex items-center justify-between mt-6">
                <span className="text-sm opacity-60 group-hover:opacity-100 transition">
                  Explore Design
                </span>

                <span className="text-lg transform transition-all duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            onClick={() => navigate("/products/StudioProduct3")}
            className="group relative border-r border-b border-black/10 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:z-10"
          >
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486946255434-2466348c2166?w=1200&q=80"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              <div className="flex items-center justify-between mt-6">
                <span className="text-sm opacity-60 group-hover:opacity-100 transition">
                  Explore Design
                </span>

                <span className="text-lg transform transition-all duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div
            onClick={() => navigate("/products/StudioProduct4")}
            className="group relative border-r border-b border-black/10 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:z-10"
          >
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              <div className="flex items-center justify-between mt-6">
                <span className="text-sm opacity-60 group-hover:opacity-100 transition">
                  Explore Design
                </span>

                <span className="text-lg transform transition-all duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* CARD 5 */}
          <div
            onClick={() => navigate("/products/StudioProduct5")}
            className="group relative border-b border-black/10 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:z-10"
          >
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200&q=80"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              <div className="flex items-center justify-between mt-6">
                <span className="text-sm opacity-60 group-hover:opacity-100 transition">
                  Explore Design
                </span>

                <span className="text-lg transform transition-all duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* size section */}
      <section className="bg-[#1E1E1C] text-white px-8 py-28 animate-fadeUp">
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
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* LEFT IMAGE */}
          <div>
            <img
              src={current.image}
              className="w-full h-[480px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* BIG SIZE */}
            <div className="font-serif text-[clamp(4rem,6vw,6rem)] leading-none mb-6">
              {current.id}
              <span className="text-2xl ml-2 align-top opacity-60">m²</span>
            </div>

            {/* DESCRIPTION */}
            <p className="opacity-70 leading-relaxed mb-10 max-w-lg">
              {current.description}
            </p>

            {/* SPEC GRID */}
            <div className="grid grid-cols-2 bg-white/5 border border-white/10 mb-8">
              <div className="p-6 border-b border-r border-white/10">
                <div className="uppercase text-xs opacity-40 mb-2">
                  Footprint
                </div>
                {current.footprint}
              </div>

              <div className="p-6 border-b border-white/10">
                <div className="uppercase text-xs opacity-40 mb-2">
                  Ceiling Height
                </div>
                {current.height}
              </div>

              <div className="p-6 border-r border-white/10">
                <div className="uppercase text-xs opacity-40 mb-2">Glazing</div>
                {current.glazing}
              </div>

              <div className="p-6">
                <div className="uppercase text-xs opacity-40 mb-2">
                  Capacity
                </div>
                {current.capacity}
              </div>
            </div>

            {/* HIGHLIGHT BAR */}
            <div className="border border-white/10 p-6 mb-10 flex items-center gap-4">
              <div className="w-5 h-5 border border-white/40"></div>
              <div>
                <div className="uppercase text-xs opacity-40 mb-1">
                  Footprint
                </div>
                {current.footprint}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-6">
              <button
                onClick={() => navigate("/booking")}
                className="px-8 py-4 bg-[#E8E5DE] text-black text-xs tracking-[0.2em] uppercase"
              >
                Get a Quote
              </button>

              <button
                onClick={() => navigate(current.route)}
                className="px-8 py-4 border border-white/30 text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
              >
                Download Floorplan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
