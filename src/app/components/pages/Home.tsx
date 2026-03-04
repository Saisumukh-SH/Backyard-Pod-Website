import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export function Home() {
  const navigate = useNavigate();
    

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-[95vh] flex items-end overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Content */}
        <div className="relative w-full px-10 pb-20">

          <div className="max-w-7xl mx-auto">

            <span className="uppercase tracking-[0.25em] text-white/70 text-xs mb-6 block">
              Backyard Living Redefined
            </span>

            <h1 className="font-serif text-white leading-[0.85] tracking-[-0.02em] text-[clamp(4rem,9vw,9rem)]">

              YOUR VISION

              <span className="block italic text-[#93A87C]">
                OUR BLUEPRINT
              </span>

            </h1>

            <div className="flex gap-6 mt-10">

              <button
                onClick={() => navigate("/products")}
                className="px-8 py-4 bg-white text-black uppercase text-xs tracking-[0.2em]"
              >
                Explore Designs
              </button>

              <button
                onClick={() => navigate("/booking")}
                className="px-8 py-4 border border-white text-white uppercase text-xs tracking-[0.2em]"
              >
                Get Quote
              </button>

            </div>

          </div>
        </div>

      </section>


      {/* CATEGORY SPLIT */}
      <section className="grid md:grid-cols-2">

        {/* STUDIO PODS */}
        <div
          onClick={() => navigate("/products/studios")}
          className="group relative h-[70vh] cursor-pointer overflow-hidden"
        >

          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative p-14 text-white max-w-md">

            <h2 className="font-serif text-5xl mb-6">
              Studio Pods
            </h2>

            <p className="opacity-80 mb-8">
              Purpose-built backyard spaces for focused work,
              creative pursuits, or mindful retreat.
            </p>

            <span className="flex items-center gap-2 text-sm uppercase tracking-[0.15em]">
              Explore Range
              <ArrowRight size={18} />
            </span>

          </div>

        </div>


        {/* GRANNY FLATS */}
        <div
          onClick={() => navigate("/products/grannyflats")}
          className="group relative h-[70vh] cursor-pointer overflow-hidden"
        >

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative p-14 text-white max-w-md">

            <h2 className="font-serif text-5xl mb-6">
              Granny Flats
            </h2>

            <p className="opacity-80 mb-8">
              Fully self-contained living spaces perfect for
              extended family or rental income.
            </p>

            <span className="flex items-center gap-2 text-sm uppercase tracking-[0.15em]">
              Explore Range
              <ArrowRight size={18} />
            </span>

          </div>

        </div>

      </section>


      {/* FEATURED DESIGNS */}
      <section className="px-10 py-32">

        <div className="max-w-7xl mx-auto">

          <h2 className="font-serif text-[clamp(3rem,5vw,4.5rem)] mb-20">
            Featured Designs
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div
              onClick={() => navigate("/products/StudioProduct1")}
              className="group cursor-pointer"
            >

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">

                <h3 className="font-serif text-2xl mb-2">
                  ZenWork Pod
                </h3>

                <p className="text-sm opacity-60">
                  22 m² · Backyard workspace
                </p>

              </div>

            </div>


            <div
              onClick={() => navigate("/products/StudioProduct2")}
              className="group cursor-pointer"
            >

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1493809842364-78817add7ffb"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">

                <h3 className="font-serif text-2xl mb-2">
                  Loft Studio
                </h3>

                <p className="text-sm opacity-60">
                  30 m² · Creative workspace
                </p>

              </div>

            </div>


            <div
              onClick={() => navigate("/products/two-bedroom-flat")}
              className="group cursor-pointer"
            >

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">

                <h3 className="font-serif text-2xl mb-2">
                  Two Bedroom Flat
                </h3>

                <p className="text-sm opacity-60">
                  68 m² · Family living
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="bg-[#F7F5F0] px-10 py-32">

        <div className="max-w-7xl mx-auto">

          <h2 className="font-serif text-[clamp(3rem,5vw,4rem)] mb-20">
            Why Choose Design MyBackyard
          </h2>

          <div className="grid md:grid-cols-4 gap-12">

            <div>
              <h3 className="font-serif text-2xl mb-4">
                Fast Installation
              </h3>
              <p className="opacity-60 text-sm">
                Prefabricated builds installed in days,
                not months.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">
                Premium Design
              </h3>
              <p className="opacity-60 text-sm">
                Modern architectural forms designed
                for contemporary living.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">
                Council Ready
              </h3>
              <p className="opacity-60 text-sm">
                Fully compliant designs for Australian
                regulations.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">
                Fixed Pricing
              </h3>
              <p className="opacity-60 text-sm">
                Transparent pricing with no hidden
                construction costs.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* INSIGHTS SECTION */}
<section className="bg-[#F4F1EA] px-10 py-32">

  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="flex items-center justify-between mb-20">

      <div>
        <span className="uppercase tracking-[0.25em] text-xs text-[#8B8B8B] block mb-6">
          Insights & Inspiration
        </span>

        <h2 className="font-serif text-[clamp(3rem,5vw,4.5rem)] leading-[1]">
          The art of <br />
          <span className="italic text-[#6F8A5E]">
            backyard living.
          </span>
        </h2>
      </div>

      <button className="px-8 py-4 border border-black/20 uppercase text-xs tracking-[0.2em] hover:bg-black hover:text-white transition">
        View All Articles
      </button>

    </div>


    {/* GRID */}
    <div className="grid md:grid-cols-3 border border-black/10">

      {/* CARD 1 */}
      <div className="group border-r border-black/10 cursor-pointer hover:bg-white transition">

        <div className="overflow-hidden h-[260px]">
          <img
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=700&q=80"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-10">

          <span className="uppercase text-[10px] tracking-[0.2em] opacity-60">
            Design
          </span>

          <h3 className="font-serif text-2xl mt-4 mb-6 leading-snug">
            How to Choose the Right Pod Size for Your Backyard
          </h3>

          <span className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition">
            Read More →
          </span>

        </div>

      </div>


      {/* CARD 2 */}
      <div className="group border-r border-black/10 cursor-pointer hover:bg-white transition">

        <div className="overflow-hidden h-[260px]">
          <img
            src="https://images.unsplash.com/photo-1765810655582-97eae3a801bb?w=700&q=80"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-10">

          <span className="uppercase text-[10px] tracking-[0.2em] opacity-60">
            Living
          </span>

          <h3 className="font-serif text-2xl mt-4 mb-6 leading-snug">
            5 Ways a Granny Flat Can Add Value to Your Property
          </h3>

          <span className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition">
            Read More →
          </span>

        </div>

      </div>


      {/* CARD 3 */}
      <div className="group cursor-pointer hover:bg-white transition">

        <div className="overflow-hidden h-[260px]">
          <img
            src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=700&q=80"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-10">

          <span className="uppercase text-[10px] tracking-[0.2em] opacity-60">
            Inspiration
          </span>

          <h3 className="font-serif text-2xl mt-4 mb-6 leading-snug">
            Inside a ZenWork Pod: A Day in the Life of a Home Office
          </h3>

          <span className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition">
            Read More →
          </span>

        </div>

      </div>

    </div>

  </div>

</section>



{/* CTA SECTION */}
<section className="bg-[#1E1E1C] text-white px-10 py-32 text-center">

  <h2 className="font-serif text-[clamp(3rem,6vw,5rem)] leading-[1] mb-10">
    Ready to build your
    <br />
    <span className="italic text-[#93A87C]">
      backyard space?
    </span>
  </h2>

  <p className="text-white/60 max-w-xl mx-auto mb-12">
    Speak with our team to explore designs, pricing, and the best solution
    for your backyard project.
  </p>

  <button
    onClick={() => navigate("/booking")}
    className="px-10 py-4 bg-white text-black uppercase text-xs tracking-[0.2em]
    hover:bg-[#93A87C] hover:text-white transition-all duration-300 hover:-translate-y-1"
  >
    Request a Quote
  </button>

</section>

{/* HOME FOOTER */}
<footer className="bg-[#1E1E1C] text-white px-10 py-24 border-t border-white/10">

  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">

    {/* BRAND */}
    <div>
      <h3 className="font-serif text-xl mb-6">
        Design <span className="opacity-40">|</span> MyBackyard.
      </h3>

      <p className="text-white/60 mb-6 leading-relaxed max-w-sm">
        Beautifully designed backyard pods and granny flats for modern
        Australian living. Built with precision, delivered with care.
      </p>

      <div className="text-white/60 space-y-2">
        <p>hello@designmybackyard.com.au</p>
        <p>07 3000 0000</p>
      </div>
    </div>


    {/* PRODUCTS */}
    <div>
      <h4 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
        Products
      </h4>

      <ul className="space-y-3 text-white/70">
        <li className="hover:text-white transition cursor-pointer">Studio Pods</li>
        <li className="hover:text-white transition cursor-pointer">Granny Flats</li>
      </ul>
    </div>


    {/* COMPANY */}
    <div>
      <h4 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
        Company
      </h4>

      <ul className="space-y-3 text-white/70">
        <li className="hover:text-white transition cursor-pointer">About Us</li>
        <li className="hover:text-white transition cursor-pointer">Awards</li>
      </ul>
    </div>


    {/* RESOURCES */}
    <div>
      <h4 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
        Resources
      </h4>

      <ul className="space-y-3 text-white/70">
        <li className="hover:text-white transition cursor-pointer">Insights</li>
        <li className="hover:text-white transition cursor-pointer">FAQs</li>
        <li className="hover:text-white transition cursor-pointer">Contact Us</li>
        <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
      </ul>
    </div>

  </div>


  {/* BOTTOM BAR */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white/10">

    <p className="text-white/40 text-sm">
      © 2025 Design My Backyard. All rights reserved.
    </p>

    {/* SOCIAL ICONS */}
    <div className="flex gap-4 mt-6 md:mt-0">

      <button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white transition">
        <Instagram size={16} />
      </button>

      <button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white transition">
        <Facebook size={16} />
      </button>

      <button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white transition">
        <Linkedin size={16} />
      </button>

    </div>

  </div>

</footer>

</div>

  );
}