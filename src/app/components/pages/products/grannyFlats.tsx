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
            spacious two-bedroom homes. Fully self-contained and council compliant.
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
            onClick={() => navigate("/products/one-bedroom-flat")}
            className="border-r border-b border-[rgba(42,42,42,0.12)] p-8 cursor-pointer hover:bg-[#E8E5DE] transition-colors"
          >
            <span className="uppercase text-[10px] tracking-[0.18em] opacity-50 block mb-2">
              GF — 01
            </span>

            <h3 className="font-serif text-2xl mb-4">
              One Bedroom
            </h3>

            <p className="text-sm opacity-60 mb-6">
              The classic granny flat — separate bedroom, full kitchen,
              modern bathroom, and open-plan living.
            </p>

            <div className="text-sm opacity-70">
              45 m² · 1 Bed · 1 Bath
            </div>

            <div className="font-serif text-lg mt-6">
              From $98,500
            </div>
          </div>

          {/* CARD 2 */}
          <div
            onClick={() => navigate("/products/two-bedroom-flat")}
            className="border-r border-b border-[rgba(42,42,42,0.12)] p-8 cursor-pointer hover:bg-[#E8E5DE] transition-colors"
          >
            <span className="uppercase text-[10px] tracking-[0.18em] opacity-50 block mb-2">
              GF — 02
            </span>

            <h3 className="font-serif text-2xl mb-4">
              Two Bedroom
            </h3>

            <p className="text-sm opacity-60 mb-6">
              Spacious family-ready design with two bedrooms,
              open-plan living, and full kitchen.
            </p>

            <div className="text-sm opacity-70">
              68 m² · 2 Bed · 2 Bath
            </div>

            <div className="font-serif text-lg mt-6">
              From $148,000
            </div>
          </div>

          {/* CARD 3 */}
          <div
            onClick={() => navigate("/products/custom-design")}
            className="border-b border-[rgba(42,42,42,0.12)] p-8 cursor-pointer hover:bg-[#E8E5DE] transition-colors"
          >
            <span className="uppercase text-[10px] tracking-[0.18em] opacity-50 block mb-2">
              GF — 03
            </span>

            <h3 className="font-serif text-2xl mb-4">
              Custom Design
            </h3>

            <p className="text-sm opacity-60 mb-6">
              Fully tailored layout and finishes to suit your
              block, lifestyle, and budget.
            </p>

            <div className="text-sm opacity-70">
              Flexible size · Custom layout
            </div>

            <div className="font-serif text-lg mt-6">
              Enquire for pricing
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}