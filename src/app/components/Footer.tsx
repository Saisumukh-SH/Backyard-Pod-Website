import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(42,42,42,0.12)] mt-32">

      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-3 gap-16">

        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl mb-4">
            Design <span className="italic">MyBackyard.</span>
          </h3>
          <p className="text-sm opacity-60 leading-relaxed max-w-sm">
            Beautifully crafted backyard studios and granny flats
            designed for modern Australian living.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3 text-sm uppercase tracking-[0.15em] opacity-70">
          <Link to="/products" className="block hover:opacity-100">Products</Link>
          <Link to="/pricing" className="block hover:opacity-100">Pricing</Link>
          <Link to="/about" className="block hover:opacity-100">About</Link>
          <Link to="/contact" className="block hover:opacity-100">Contact</Link>
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