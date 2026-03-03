import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface GrannyProps {
  category: string;
  title: string;
  highlight: string;
  description: string;
  size: string;
  beds: string;
  baths: string;
  occupants: string;
  heroImage: string;
}

export default function SingleGrannyFlat({
  category,
  title,
  highlight,
  description,
  size,
  beds,
  baths,
  occupants,
  heroImage,
}: GrannyProps) {
  const navigate = useNavigate();

  const finishes = [
    {
      id: "modern-white",
      name: "Modern White Render",
      subtitle: "Crisp, minimal & timeless",
      color: "#EDEAE3",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1400&q=80",
    },
    {
      id: "natural-brick",
      name: "Natural Brick",
      subtitle: "Warm residential finish",
      color: "#B76E4C",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400&q=80",
    },
    {
      id: "charcoal",
      name: "Charcoal Contemporary",
      subtitle: "Bold architectural profile",
      color: "#2E2E2E",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1400&q=80",
    },
  ];

  const [activeFinish, setActiveFinish] = useState(finishes[0]);

  return (
    <div>
      {/* HERO */}
      <section className="grid md:grid-cols-2">
        <div>
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
              <div className="uppercase text-xs opacity-40 mb-2">Occupants</div>
              {occupants}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-black/10 px-8 py-32 bg-[#F7F5F0]">
        <div className="grid md:grid-cols-3 border border-black/10">
          {[
            {
              title: "Fully Self-Contained",
              desc: "Complete kitchen, bathroom, and private entry — independent living.",
            },
            {
              title: "Council Compliant",
              desc: "Designed to meet Australian building regulations.",
            },
            {
              title: "Energy Efficient",
              desc: "Insulated walls, double glazing, and smart ventilation.",
            },
            {
              title: "Fast Build Time",
              desc: "Delivered and installed in as little as 8–10 weeks.",
            },
            {
              title: "Premium Finishes",
              desc: "High-quality cabinetry, flooring, and fixtures.",
            },
            {
              title: "Fixed Cost Contract",
              desc: "Transparent pricing from start to finish.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group border-r border-b border-black/10 p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white"
            >
              <h3 className="font-serif text-2xl mb-4">
                {feature.title}
              </h3>
              <p className="text-sm opacity-60 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINISH SELECTION */}
      <section className="border-t border-black/10 px-8 py-32 bg-[#F7F5F0]">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="font-serif text-[clamp(3rem,5vw,4.5rem)] mb-16">
              Choose Your Facade
            </h2>

            {finishes.map((finish) => (
              <button
                key={finish.id}
                onClick={() => setActiveFinish(finish)}
                className="flex items-center justify-between w-full border-b border-black/10 py-6 text-left"
              >
                <div className="flex items-center gap-6">
                  <div
                    className="w-10 h-10 rounded-full"
                    style={{ backgroundColor: finish.color }}
                  />
                  <div>
                    <div>{finish.name}</div>
                    <div className="text-sm opacity-50">
                      {finish.subtitle}
                    </div>
                  </div>
                </div>
                →
              </button>
            ))}
          </div>

          <div className="border border-black/10 p-6 bg-white">
            <img
              src={activeFinish.image}
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 px-8 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-[clamp(3.5rem,6vw,6rem)] leading-[0.95]">
              Ready to build your <br />
              <span className="italic text-[#6F8A5E]">new home?</span>
            </h2>
          </div>

          <div className="max-w-lg ml-auto">
            <p className="opacity-70 mb-10">
              Let’s create a fully self-contained living space tailored to your
              backyard and lifestyle.
            </p>

            <button
              onClick={() => navigate("/booking")}
              className="px-10 py-4 bg-black text-white uppercase text-xs tracking-[0.2em]"
            >
              Get a Quote
            </button>
            <button
                onClick={() => navigate("/products")}
                className="px-10 py-4 border border-black/20 uppercase text-xs tracking-[0.2em] hover:bg-black/5 transition"
              >
                ← Back to Range
              </button>
          </div>
        </div>
      </section>
    </div>
  );
}