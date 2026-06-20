import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1E1E1C] text-white px-10 py-24 border-t border-white/10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">

        {/* BRAND */}
        <div>
          <h3 className="font-serif text-xl mb-6">
            Backyard Nest.
          </h3>

          <p className="text-white/60 mb-6 leading-relaxed max-w-sm">
            Beautifully designed backyard pods and granny flats for
            modern Australian living. Built with precision,
            delivered with care.
          </p>

          <div className="text-white/60 space-y-2">
            <p>hello@backyardnest.com.au</p>
            <p>07 3000 0000</p>
          </div>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
            Products
          </h4>

          <div className="space-y-3 text-white/70">
            <Link
              to="/products/studio"
              className="block hover:text-white transition"
            >
              Studio Pods
            </Link>

            <Link
              to="/products/granny"
              className="block hover:text-white transition"
            >
              Granny Flats
            </Link>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
            Company
          </h4>

          <div className="space-y-3 text-white/70">
            <Link
              to="/about"
              className="block hover:text-white transition"
            >
              About Us
            </Link>

            <Link
              to="/faq"
              className="block hover:text-white transition"
            >
              FAQs
            </Link>

            <Link
              to="/contact"
              className="block hover:text-white transition"
            >
              Contact Us
            </Link>

            <Link
              to="/blog"
              className="block hover:text-white transition"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* PARTNER */}
        <div>
          <h4 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
            Proud Partner
          </h4>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4 w-fit mb-4 hover:bg-white/10 transition">
            <img
              src="/images/Master-Builders-Victoria-Master-Builder.webp"
              alt="Master Builders Victoria"
              className="w-24 object-contain"
            />
          </div>

          <p className="text-white/60 text-sm leading-relaxed max-w-[260px]">
            Proudly working alongside Master Builders Victoria,
            ensuring the highest standards of construction
            quality and compliance.
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white/10">

        <p className="text-white/40 text-sm">
          © 2026 Backyard Nest. All rights reserved.
        </p>

        <div className="flex gap-4 mt-6 md:mt-0">

          <a
            href="#"
            className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white transition"
          >
            <Instagram size={16} />
          </a>

          <a
            href="#"
            className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white transition"
          >
            <Facebook size={16} />
          </a>

          <a
            href="#"
            className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white transition"
          >
            <Linkedin size={16} />
          </a>

        </div>

      </div>

    </footer>
  );
}