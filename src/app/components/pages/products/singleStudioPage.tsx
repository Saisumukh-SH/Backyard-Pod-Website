import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
}: ProductProps) {
  const navigate = useNavigate();

  const finishes = [
    {
      id: "charcoal",
      name: "Charcoal Cedar",
      subtitle: "Dark burnt finish — timeless & bold",
      color: "#2B2B2B",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400&q=80",
    },
    {
      id: "timber",
      name: "Natural Timber",
      subtitle: "Warm untreated grain — organic & open",
      color: "#C8A46B",
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1400&q=80",
    },
    {
      id: "slate",
      name: "Slate Grey Composite",
      subtitle: "Low-maintenance modern finish",
      color: "#6B7280",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1400&q=80",
    },
    {
      id: "sage",
      name: "Sage Green Steel",
      subtitle: "Powder-coated — garden-integrated",
      color: "#7DA07A",
      image:
        "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1400&q=80",
    },
    {
      id: "white",
      name: "White Render",
      subtitle: "Clean plaster finish — crisp & minimal",
      color: "#E5E5E5",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1400&q=80",
    },
  ];

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
              className="px-8 py-4 bg-black text-white text-xs uppercase tracking-[0.2em]"
            >
              Get a Quote
            </button>

            <button className="px-8 py-4 border border-black/30 text-xs uppercase tracking-[0.2em]">
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
      {/* FEATURES SECTION */}
      <section className="border-t border-black/10 px-8 py-32 bg-[#F7F5F0]">
        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="uppercase tracking-[0.25em] text-[11px] opacity-50 block mb-6">
              What's Included
            </span>

            <h2 className="font-serif text-[clamp(3rem,5vw,4.5rem)] leading-[1]">
              The Best of <br />
              Our Features
            </h2>
          </div>

          <div className="max-w-md ml-auto text-sm leading-relaxed opacity-60">
            Every element engineered for how you live, work, and rest — without
            compromise.
          </div>
        </div>

        {/* FEATURES DATA */}
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
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
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
                  <path d="M3 10l9-7 9 7" />
                  <path d="M9 21V12h6v9" />
                </>
              ),
            },
            {
              title: "10-Year Warranty",
              desc: "A decade of structural warranty and dedicated ongoing support.",
              icon: (
                <>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M8 14h8l-1 7H9l-1-7z" />
                </>
              ),
            },
            {
              title: "Fixed Price Contract",
              desc: "The price you see is the price you pay — fully transparent, no surprises.",
              icon: (
                <>
                  <rect x="4" y="7" width="16" height="12" rx="2" />
                  <path d="M9 7V5h6v2" />
                </>
              ),
            },
          ];

          return (
            <div className="grid md:grid-cols-3 border border-black/10">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group border-r border-b border-black/10 p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:border-black/20"
                >
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-full border border-black/20 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:border-[#6F8A5E]">
                    <svg
                      className="w-6 h-6 text-[#6F8A5E] transition-all duration-500 group-hover:rotate-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      {feature.icon}
                    </svg>
                  </div>

                  {/* TITLE */}
                  <h3 className="font-serif text-2xl mb-4 transition-all duration-300 group-hover:tracking-wide">
                    {feature.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm opacity-60 leading-relaxed transition-all duration-300 group-hover:opacity-80">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          );
        })()}
      </section>

      {/* FINISH & MATERIALS */}
      <section className="border-t border-[rgba(42,42,42,0.12)] px-8 py-32 bg-[#F7F5F0]">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* LEFT PANEL */}
          <div>
            <span className="uppercase tracking-[0.25em] text-[11px] opacity-50 block mb-6">
              Finish & Materials
            </span>

            <h2 className="font-serif text-[clamp(3rem,5vw,4.5rem)] leading-[1] mb-16">
              Choose Your Cladding
            </h2>

            <div className="space-y-8">
              {finishes.map((finish) => {
                const isActive = activeFinish.id === finish.id;

                return (
                  <button
                    key={finish.id}
                    onClick={() => setActiveFinish(finish)}
                    className="w-full text-left group"
                  >
                    <div className="flex items-center justify-between pb-6 border-b border-black/10">
                      <div className="flex items-center gap-6">
                        {/* Color Swatch */}
                        <div
                          className={`w-12 h-12 rounded-full transition-all duration-300 ${
                            isActive
                              ? "scale-110 ring-2 ring-black shadow-lg"
                              : "group-hover:scale-105"
                          }`}
                          style={{ backgroundColor: finish.color }}
                        />

                        <div>
                          <div
                            className={`font-medium transition-colors duration-300 ${
                              isActive ? "text-black" : "opacity-70"
                            }`}
                          >
                            {finish.name}
                          </div>

                          <div className="text-sm opacity-50">
                            {finish.subtitle}
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <span
                        className={`text-lg transition-all duration-300 ${
                          isActive
                            ? "translate-x-2 opacity-100"
                            : "opacity-30 group-hover:translate-x-1"
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE DISPLAY */}
          <div className="relative border border-black/10 p-6 bg-white">
            {/* Fade Overlay for Smooth Transition */}
            <img
              key={activeFinish.id}
              src={activeFinish.image}
              alt={activeFinish.name}
              className="w-full h-[520px] object-cover transition-opacity duration-500 ease-in-out"
            />

            {/* Floating Label */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-6 py-3 uppercase tracking-[0.2em] text-xs shadow-sm">
              {activeFinish.name}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgba(42,42,42,0.12)] px-8 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT LARGE TITLE */}
          <div>
            <h2 className="font-serif text-[clamp(3.5rem,6vw,6rem)] leading-[0.95]">
              Ready to <br />
              build your <br />
              <span className="italic text-[#6F8A5E]">ideal space?</span>
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-lg ml-auto">
            <p className="text-[15px] leading-relaxed opacity-70 mb-10">
              Our team will guide you from concept to completion — fixed
              pricing, fast delivery, and zero stress. Let’s start your design
              today.
            </p>

            <div className="flex flex-wrap gap-6">
              {/* PRIMARY BUTTON */}
              <button
                onClick={() => navigate("/booking")}
                className="px-10 py-4 bg-[#1E1E1C] text-white uppercase text-xs tracking-[0.2em] hover:opacity-90 transition"
              >
                Get a Quote
              </button>

              {/* SECONDARY BUTTON */}
              <button className="px-10 py-4 border border-black/20 uppercase text-xs tracking-[0.2em] hover:bg-black/5 transition">
                Download Brochure
              </button>

              {/* TERTIARY LINK */}
              <button
                onClick={() => navigate("/products")}
                className="px-10 py-4 border border-black/20 uppercase text-xs tracking-[0.2em] hover:bg-black/5 transition"
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
