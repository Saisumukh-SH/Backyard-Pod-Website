import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },

    /*{ path: "/pricing", label: "Pricing" },*/

    { path: "/about", label: "About" },
    { path: "/faq", label: "FAQ" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-[rgba(42,42,42,0.12)] bg-[#F0EDE6]/90">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-[18px] tracking-wide">
          <span className="font-serif">Design</span>{" "}
          <span className="opacity-40">|</span>{" "}
          <span className="font-serif italic">MyBackyard.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.18em]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-opacity ${
                isActive(link.path)
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-sm"
        >
          Menu
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(42,42,42,0.12)] px-8 py-6 space-y-4 text-sm uppercase tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block opacity-70 hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}