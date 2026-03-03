import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StudioCategory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
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
          
          {/* CARD */}
          <div onClick={() => navigate("/products/studio-pod")}
          className="border-r border-b border-[rgba(42,42,42,0.12)] p-8 cursor-pointer hover:bg-[#E8E5DE] transition-colors">
            <span className="uppercase text-[10px] tracking-[0.18em] opacity-50 block mb-2">
              SP — 01
            </span>

            <h3 className="font-serif text-2xl mb-4">
              ZenWork Pod
            </h3>

            <p className="text-sm opacity-60 mb-6">
              Floor-to-ceiling glass and clean lines create the definitive backyard office for deep focus.
            </p>

            <div className="text-sm opacity-70">
              22 m² · 4 × 5.5 m · 6 wks
            </div>

            <div className="font-serif text-lg mt-6">
              From $38,500
            </div>
          </div>

          {/* Duplicate cards here */}
          
        </div>
      </section>

    </div>
  );
}