import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GrannyFlats() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <div>
      {/* HERO */}
      <section className="border-b border-[rgba(42,42,42,0.12)] px-8 py-24 grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <span className="uppercase tracking-[0.25em] text-[11px] opacity-50 block mb-6">
            Live · Host · Earn
          </span>

          <h1 className="font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[0.95]">
            Granny <span className="italic text-[#6F8A5E]">Flats</span>
          </h1>
        </div>

        {/* Right */}
        <div className="max-w-md ml-auto">
          <p className="text-[15px] leading-relaxed opacity-70 mb-6">
            Five complete living configurations — from compact studio flats to
            spacious two-bedroom homes. Fully self-contained and council
            compliant.
          </p>

          <span className="uppercase tracking-[0.18em] text-[11px] opacity-50">
            5 designs available · From $68,000
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
    </div>
  );
}