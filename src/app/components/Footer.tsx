import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
<footer className="bg-[#1E1E1C] text-white border-t border-white/10">
  <div className="max-w-7xl mx-auto px-10 pt-24">

    {/* TOP SECTION */}
    <div className="grid md:grid-cols-3 gap-20">

      {/* BRAND */}
      <div>
<Link
  to="/"
  className="group inline-flex items-center gap-4 mb-6"
>
  <img
    src="/images/logo/final.webp"
    alt="Backyard Nest"
    draggable={false}
    onDragStart={(e) => e.preventDefault()}
    onContextMenu={(e) => e.preventDefault()}
    className="h-10 w-auto shrink-0 opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
  />

  <span className="font-serif text-[2rem] leading-none text-white transition-colors duration-300 group-hover:text-[#C7A77A]">
    Backyard Nest.
  </span>
</Link>

        <p className="text-white/60 mb-6 leading-relaxed max-w-sm">
          Beautifully designed backyard studios and granny flats for modern
          Australian living. Built with precision, delivered with care.
        </p>

        <div className="text-white/60 space-y-2">
          <p>build@backyardnest.com.au</p>
          <p>07 3000 0000</p>
        </div>
      </div>

      {/* PRODUCTS */}
      <div>
        <h4 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
          Products
        </h4>

        <ul className="space-y-3 text-white/70">
          <li>
            <Link
              to="/products/studio"
              className="hover:text-white transition"
            >
              Backyard Studio
            </Link>
          </li>

          <li>
            <Link
              to="/products/granny"
              className="hover:text-white transition"
            >
              Granny Flats
            </Link>
          </li>
        </ul>
      </div>

      {/* COMPANY */}
      <div>
        <h4 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
          Company
        </h4>

        <ul className="space-y-3 text-white/70">
          <li>
            <Link
              to="/about"
              className="hover:text-white transition"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-white transition"
            >
              Contact Us
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              className="hover:text-white transition"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>

    </div>

{/* INDUSTRY ACCREDITATIONS */}
<div className="mt-10 lg:mt-14 pt-8 border-t border-white/10">
  <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-10 items-center">

    {/* Left Content */}
    <div className="text-center lg:text-left mx-auto lg:mx-0">
      <h4 className="uppercase tracking-[0.28em] text-xs text-[#C7A77A] mb-3">
        Industry Accreditations
      </h4>

      <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
        Proudly accredited and working alongside recognised industry
        leaders, ensuring every project meets Australia's highest
        standards.
      </p>
    </div>

    {/* Logos */}
    <div className="grid grid-cols-2 lg:flex lg:justify-end items-center gap-5 md:gap-6 lg:gap-10">

      {/* MASTER BUILDERS */}
      <div className="group relative flex flex-col items-center rounded-2xl px-2 md:px-4 lg:px-6 py-3 lg:py-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]">

        <div className="w-full max-w-[170px] sm:max-w-[220px] lg:w-80 h-20 sm:h-24 lg:h-28 flex items-center justify-center">
          <img
            src="/images/partners/Master-Builders-Victoria-Master-Builder.webp"
            alt="Master Builders Victoria"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-full object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        </div>

        <span className="absolute bottom-0 left-1/2 h-px w-0 bg-[#C7A77A] transition-all duration-500 group-hover:w-20 group-hover:-translate-x-1/2" />

        <p className="hidden lg:block mt-3 text-[10px] uppercase tracking-[0.25em] text-white/0 group-hover:text-white/45 transition-all duration-500">
          Master Builders Victoria
        </p>

      </div>

      {/* MELBOURNE BOUTIQUE HOMES */}
      <div className="group relative flex flex-col items-center rounded-2xl px-2 md:px-4 lg:px-6 py-3 lg:py-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]">

        <div className="w-full max-w-[170px] sm:max-w-[220px] lg:w-80 h-20 sm:h-24 lg:h-28 flex items-center justify-center">
          <img
            src="/images/partners/melbourne-boutique-homes.webp"
            alt="Melbourne Boutique Homes"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-full object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        </div>

        <span className="absolute bottom-0 left-1/2 h-px w-0 bg-[#C7A77A] transition-all duration-500 group-hover:w-20 group-hover:-translate-x-1/2" />

        <p className="hidden lg:block mt-3 text-[10px] uppercase tracking-[0.25em] text-white/0 group-hover:text-white/45 transition-all duration-500">
          Melbourne Boutique Homes
        </p>

      </div>

      {/* AMS BUILD */}
      <div className="group relative col-span-2 lg:col-span-1 flex flex-col items-center rounded-2xl px-2 md:px-4 lg:px-6 py-3 lg:py-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]">

        <div className="w-32 sm:w-40 lg:w-52 h-40 sm:h-52 lg:h-72 flex items-center justify-center">
          <img
            src="/images/partners/ams-build.webp"
            alt="AMS Build"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-full object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        </div>

        <span className="absolute bottom-0 left-1/2 h-px w-0 bg-[#C7A77A] transition-all duration-500 group-hover:w-20 group-hover:-translate-x-1/2" />

        <p className="hidden lg:block mt-3 text-[10px] uppercase tracking-[0.25em] text-white/0 group-hover:text-white/45 transition-all duration-500">
          AMS Build
        </p>

      </div>

    </div>

  </div>
</div>

    {/* BOTTOM BAR */}
    <div className="flex flex-col md:flex-row justify-between items-center mt-20 py-8 border-t border-white/10">

      <p className="text-white/40 text-sm">
        © 2026 Backyard Nest. All rights reserved.
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

  </div>
</footer>
  );
}