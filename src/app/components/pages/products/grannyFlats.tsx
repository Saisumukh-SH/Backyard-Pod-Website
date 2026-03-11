import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GrannyFlats() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sizes = [
    {
      id: 45,
      label: "45 M²",
      route: "/products/GrannyflatProduct1",
      image:
        "/images/granny_flats_hero.webp",
      description:
        "Compact one-bedroom flat with open-plan living, full kitchen and modern bathroom.",
      footprint: "7 × 6.5 m",
      bedrooms: "1",
      bathrooms: "1",
      occupants: "1–2",
    },
    {
      id: 55,
      label: "55 M²",
      route: "/products/GrannyflatProduct2",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1400&q=80",
      description:
        "Expanded one-bedroom layout with larger living space and additional storage.",
      footprint: "8 × 7 m",
      bedrooms: "1",
      bathrooms: "1",
      occupants: "2",
    },
    {
      id: 68,
      label: "68 M²",
      route: "/products/GrannyflatProduct3",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80",
      description:
        "Spacious two-bedroom flat with open-plan living and dining.",
      footprint: "7 × 9.7 m",
      bedrooms: "2",
      bathrooms: "2",
      occupants: "2–4",
    },
    {
      id: 75,
      label: "75 M²",
      route: "/products/GrannyflatProduct4",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1400&q=80",
      description:
        "Premium two-bedroom configuration with generous living zones.",
      footprint: "8 × 9.5 m",
      bedrooms: "2",
      bathrooms: "2",
      occupants: "3–4",
    },
  ];

  const [activeSize, setActiveSize] = useState(45);
  const current = sizes.find((s) => s.id === activeSize)!;

  return (
    <div>

      {/* HERO */}
      <section className="border-b border-black/10 px-8 py-24 grid md:grid-cols-2 gap-16 animate-fadeUp">

        <div>
          <span className="uppercase tracking-[0.25em] text-[11px] opacity-50 block mb-6">
            Live · Host · Earn
          </span>

          <h1 className="font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[0.95]">
            Granny <span className="italic text-[#6F8A5E]">Flats</span>
          </h1>
        </div>

        <div className="max-w-md ml-auto">
          <p className="text-[15px] leading-relaxed opacity-70 mb-6">
            Four complete living configurations — designed for comfort,
            flexibility and long-term living.
          </p>

          <span className="uppercase tracking-[0.18em] text-[11px] opacity-50">
            4 designs available · From $68,000
          </span>
        </div>

      </section>

      {/* PRODUCT GRID */}
      <section className="px-8 py-20 animate-fadeUp">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-black/10">

          {sizes.map((flat, index) => (

            <div
              key={flat.id}
              onClick={() => navigate(flat.route)}
              className="group relative border-r border-b border-black/10 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:z-10"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={flat.image}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* CONTENT */}
              <div className="p-8">

                <span className="uppercase text-[10px] tracking-[0.18em] opacity-50 block mb-2">
                  GF — 0{index + 1}
                </span>

                <h3 className="font-serif text-2xl mb-4">
                  {flat.label} Configuration
                </h3>

                <p className="text-sm opacity-60 mb-6">
                  {flat.description}
                </p>

                <div className="text-sm opacity-70 mb-6">
                  {flat.bedrooms} Bed · {flat.bathrooms} Bath · {flat.occupants}
                </div>

                <div className="font-serif text-lg">
                  From $
                  {flat.id === 45
                    ? "68,000"
                    : flat.id === 55
                    ? "74,000"
                    : flat.id === 68
                    ? "92,000"
                    : "105,000"}
                </div>

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

          ))}

        </div>

      </section>

      {/* SIZE SELECTOR */}
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
            Four configurations from 45 to 75 m² — designed for
            long-term living and flexible family use.
          </div>

        </div>

        {/* SIZE TABS */}
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

          <div>
            <img
              src={current.image}
              className="w-full h-[480px] object-cover"
            />
          </div>

          <div>

            <div className="font-serif text-[clamp(4rem,6vw,6rem)] leading-none mb-6">
              {current.id}
              <span className="text-2xl ml-2 align-top opacity-60">m²</span>
            </div>

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
                  Bedrooms
                </div>
                {current.bedrooms}
              </div>

              <div className="p-6 border-r border-white/10">
                <div className="uppercase text-xs opacity-40 mb-2">
                  Bathrooms
                </div>
                {current.bathrooms}
              </div>

              <div className="p-6">
                <div className="uppercase text-xs opacity-40 mb-2">
                  Occupants
                </div>
                {current.occupants}
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-6">

              <button
                onClick={() => navigate(current.route)}
                className="px-8 py-4 border border-white/30 text-xs tracking-[0.2em] uppercase
  cursor-pointer
  transition-all duration-300 ease-out
  hover:bg-white/10 hover:-translate-y-[2px] hover:shadow-lg hover:scale-[1.03]
  active:translate-y-[1px] active:scale-[0.98]"
              >
                View Design
              </button>

              <button
                onClick={() => navigate("/booking")}
                className="px-8 py-4 bg-[#E8E5DE] text-black text-xs tracking-[0.2em] uppercase
    cursor-pointer
    transition-all duration-300 ease-out
    hover:-translate-y-[2px] hover:shadow-lg hover:scale-[1.03]
    active:translate-y-[1px] active:scale-[0.98]s"
              >
                Get a Quote
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}