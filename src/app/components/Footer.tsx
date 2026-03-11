import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(42,42,42,0.12)] mt-32">
      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-4 gap-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-px bg-black/10 mb-16"></div>
        </div>
        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl mb-4">
            Design <span className="italic">MyBackyard.</span>
          </h3>

          <p className="text-sm opacity-60 leading-relaxed max-w-sm">
            Beautifully crafted backyard studios and granny flats designed for
            modern Australian living.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3 text-sm uppercase tracking-[0.15em] opacity-70">
          <Link to="/products" className="block hover:opacity-100">
            Products
          </Link>
          <Link to="/pricing" className="block hover:opacity-100">
            Pricing
          </Link>
          <Link to="/about" className="block hover:opacity-100">
            About
          </Link>
          <Link to="/contact" className="block hover:opacity-100">
            Contact
          </Link>
        </div>

        {/* PARTNERSHIP */}
        <div className="flex flex-col gap-5">
          <span className="uppercase tracking-[0.35em] text-[11px] opacity-50">
            Proud Partner
          </span>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4 w-fit hover:bg-white/10 transition">
            <img
              src="/images/Master-Builders-Victoria-Master-Builder.webp"
              alt="Master Builders Victoria"
              className="w-24 object-contain"
            />
          </div>

          <p className="text-sm opacity-70 leading-relaxed max-w-[260px]">
            Proudly working alongside Master Builders Victoria, ensuring the
            highest standards of construction quality and compliance.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm opacity-50 md:text-right">
          © 2026 Design My Backyard. <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
