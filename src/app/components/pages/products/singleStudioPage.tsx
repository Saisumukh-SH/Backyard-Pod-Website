import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Finish {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  image: string;
}

interface ProductProps {
  category: string;
  title: string;
  highlight: string;
  description: string;
  size: string;
  beds: string;
  baths: string;
  warranty: string;
  heroImage: string;
  finishes: Finish[];
}

export default function SingleStudioPage({
  category,
  title,
  highlight,
  description,
  size,
  beds,
  baths,
  warranty,
  heroImage,
  finishes,
}: ProductProps) {
  const navigate = useNavigate();

  const [activeFinish, setActiveFinish] = useState(finishes[0]);

  return (
    <div>
      {/* HERO */}
      <section className="grid md:grid-cols-2">
        <div className="relative">
          <img src={heroImage} className="w-full h-[85vh] object-cover" />
        </div>

        <div className="px-16 py-24 flex flex-col justify-center">
          <span className="uppercase tracking-[0.25em] text-[11px] opacity-50 block mb-6">
            {category}
          </span>

          <h1 className="font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[0.95] mb-6">
            {title} <span className="italic text-[#6F8A5E]">{highlight}</span>
          </h1>

          <p className="opacity-70 mb-10 max-w-md leading-relaxed">
            {description}
          </p>

          <div className="flex gap-4 mb-12">
            <button
              onClick={() => navigate("/booking")}
              className="px-8 py-4 bg-black text-white text-xs uppercase tracking-[0.2em]
              cursor-pointer transition-all duration-300 ease-out
              hover:bg-neutral-800 hover:-translate-y-[2px] hover:shadow-lg hover:scale-[1.03]
              active:translate-y-[1px] active:scale-[0.98]"
            >
              Get a Quote
            </button>

            <button
              className="px-8 py-4 border border-black/30 text-xs uppercase tracking-[0.2em]
              cursor-pointer transition-all duration-300 ease-out
              hover:bg-black hover:text-white hover:border-black hover:-translate-y-[2px] hover:shadow-lg hover:scale-[1.03]
              active:translate-y-[1px] active:scale-[0.98]"
            >
              Download Brochure
            </button>
          </div>

          <div className="grid grid-cols-4 border-t border-black/10 pt-8 text-sm">
            <div>
              <div className="uppercase text-xs opacity-40 mb-2">Size</div>
              {size}
            </div>
            <div>
              <div className="uppercase text-xs opacity-40 mb-2">Beds</div>
              {beds}
            </div>
            <div>
              <div className="uppercase text-xs opacity-40 mb-2">Baths</div>
              {baths}
            </div>
            <div>
              <div className="uppercase text-xs opacity-40 mb-2">Warranty</div>
              {warranty}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="border-t border-black/10 px-8 py-32 bg-[#F7F5F0]">
        {" "}
        {/* HEADER */}{" "}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {" "}
          <div>
            {" "}
            <span className="uppercase tracking-[0.25em] text-[11px] opacity-50 block mb-6">
              {" "}
              What's Included{" "}
            </span>{" "}
            <h2 className="font-serif text-[clamp(3rem,5vw,4.5rem)] leading-[1]">
              {" "}
              The Best of <br /> Our Features{" "}
            </h2>{" "}
          </div>{" "}
          <div className="max-w-md ml-auto text-sm leading-relaxed opacity-60">
            {" "}
            Every element engineered for how you live, work, and rest — without
            compromise.{" "}
          </div>{" "}
        </div>{" "}
        {/* FEATURES DATA */}{" "}
        {(() => {
          const features = [
            {
              title: "Full Customization",
              desc: "Tailor cladding, finishes, layout, and dimensions to match your vision exactly.",
              icon: (
                <path d="M3 21l3-3m0 0l11-11a2.5 2.5 0 013.5 3.5L9.5 21H3z" />
              ),
            },
            {
              title: "Fast Installation",
              desc: "Prefabricated and assembled on-site in 1–2 days with minimal disruption.",
              icon: (
                <>
                  {" "}
                  <circle cx="12" cy="12" r="9" /> <path d="M12 7v5l3 3" />{" "}
                </>
              ),
            },
            {
              title: "Fast Lead Times",
              desc: "Deposit to delivery in as little as 6 weeks — industry-leading turnaround.",
              icon: <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />,
            },
            {
              title: "Regulation Compliant",
              desc: "All documentation meets local planning and building regulation requirements.",
              icon: (
                <>
                  {" "}
                  <path d="M3 10l9-7 9 7" /> <path d="M9 21V12h6v9" />{" "}
                </>
              ),
            },
            {
              title: "10-Year Warranty",
              desc: "A decade of structural warranty and dedicated ongoing support.",
              icon: (
                <>
                  {" "}
                  <circle cx="12" cy="8" r="4" />{" "}
                  <path d="M8 14h8l-1 7H9l-1-7z" />{" "}
                </>
              ),
            },
            {
              title: "Fixed Price Contract",
              desc: "The price you see is the price you pay — fully transparent, no surprises.",
              icon: (
                <>
                  {" "}
                  <rect x="4" y="7" width="16" height="12" rx="2" />{" "}
                  <path d="M9 7V5h6v2" />{" "}
                </>
              ),
            },
          ];
          return (
            <div className="grid md:grid-cols-3 border border-black/10">
              {" "}
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group border-r border-b border-black/10 p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:border-black/20"
                >
                  {" "}
                  {/* ICON */}{" "}
                  <div className="w-14 h-14 rounded-full border border-black/20 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:border-[#6F8A5E]">
                    {" "}
                    <svg
                      className="w-6 h-6 text-[#6F8A5E] transition-all duration-500 group-hover:rotate-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      {feature.icon}{" "}
                    </svg>{" "}
                  </div>{" "}
                  {/* TITLE */}{" "}
                  <h3 className="font-serif text-2xl mb-4 transition-all duration-300 group-hover:tracking-wide">
                    {" "}
                    {feature.title}{" "}
                  </h3>{" "}
                  {/* DESCRIPTION */}{" "}
                  <p className="text-sm opacity-60 leading-relaxed transition-all duration-300 group-hover:opacity-80">
                    {" "}
                    {feature.desc}{" "}
                  </p>{" "}
                </div>
              ))}{" "}
            </div>
          );
        })()}{" "}
      </section>

      {/* FINISH & MATERIALS */}
      <section className="border-t border-black/10 py-32 bg-[#F7F5F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          {/* HEADER */}
          <div className="mb-20 max-w-2xl">
            <span className="uppercase tracking-[0.3em] text-[11px] opacity-40 block mb-6">
              Finish & Materials
            </span>

            <h2 className="font-serif text-[clamp(3rem,5vw,5rem)] leading-[1]">
              Choose Your Cladding
            </h2>
          </div>

          {/* HERO IMAGE */}
          <div className="relative mb-16">
            <div className="overflow-hidden rounded-xl border border-black/10 shadow-[0_40px_80px_rgba(0,0,0,0.08)]">
              <img
                key={activeFinish.id}
                src={activeFinish.image}
                alt={activeFinish.name}
                className="w-full h-[720px] object-cover transition-all duration-700 ease-out"
              />
            </div>

            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md px-8 py-4 uppercase tracking-[0.25em] text-xs shadow-md rounded-full">
              {activeFinish.name}
            </div>
          </div>

          {/* SELECTOR */}
          <div className="bg-white/60 backdrop-blur-md border border-black/10 rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-5 gap-6">
              {finishes.map((finish) => {
                const isActive = activeFinish.id === finish.id;

                return (
                  <button
                    key={finish.id}
                    onClick={() => setActiveFinish(finish)}
                    className={`group cursor-pointer text-left
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    ${isActive ? "scale-[1.02]" : ""}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full transition-all duration-300
                        ${
                          isActive
                            ? "ring-2 ring-black scale-110 shadow"
                            : "group-hover:scale-105"
                        }`}
                        style={{ backgroundColor: finish.color }}
                      />

                      {isActive && (
                        <span className="text-[10px] uppercase tracking-[0.25em] opacity-50">
                          Selected
                        </span>
                      )}
                    </div>

                    <div
                      className={`font-medium mb-1 transition-colors duration-300 ${
                        isActive ? "text-black" : "opacity-70"
                      }`}
                    >
                      {finish.name}
                    </div>

                    <div className="text-xs opacity-50 leading-relaxed">
                      {finish.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 px-8 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-[clamp(3.5rem,6vw,6rem)] leading-[0.95]">
              Ready to <br />
              build your <br />
              <span className="italic text-[#6F8A5E]">ideal space?</span>
            </h2>
          </div>

          <div className="max-w-lg ml-auto">
            <p className="text-[15px] leading-relaxed opacity-70 mb-10">
              Our team will guide you from concept to completion — fixed
              pricing, fast delivery, and zero stress.
            </p>

            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => navigate("/booking")}
                className="px-10 py-4 bg-[#1E1E1C] text-white uppercase text-xs tracking-[0.2em]
                cursor-pointer transition-all duration-300
                hover:-translate-y-[2px] hover:shadow-lg hover:scale-[1.03]
                active:translate-y-[1px] active:scale-[0.98]"
              >
                Get a Quote
              </button>

              <button
                className="px-10 py-4 border border-black/20 uppercase text-xs tracking-[0.2em]
                cursor-pointer transition-all duration-300
                hover:bg-black hover:text-white hover:-translate-y-[2px] hover:shadow-lg hover:scale-[1.03]
                active:translate-y-[1px] active:scale-[0.98]"
              >
                Download Brochure
              </button>

              <button
                onClick={() => navigate("/products")}
                className="px-10 py-4 border border-black/20 uppercase text-xs tracking-[0.2em]
                cursor-pointer transition-all duration-300
                hover:bg-black/5 hover:-translate-y-[2px] hover:shadow-md"
              >
                ← Back to Range
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
