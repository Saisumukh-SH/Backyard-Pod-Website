import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/products", label: "Designs" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <nav className="absolute top-0 left-0 w-full z-[100]">

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

      <div className="relative px-6 md:px-10 lg:px-14 py-8">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="font-serif tracking-tight"
            style={{
  color: "#ffffff",
  fontSize: "clamp(1.8rem, 3vw, 3.2rem)",
  textShadow: "0 2px 12px rgba(0,0,0,0.5)",
}}
          >
            Backyard Nest.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-16">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: "#ffffff",
                  opacity: isActive(link.path) ? 1 : 0.8,
                  textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                }}
                className="
                  uppercase
                  text-[11px]
                  tracking-[0.3em]
                  transition-all
                  duration-300
                  hover:opacity-100
                "
              >
                {link.label}
              </Link>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: "#ffffff" }}
            className="
              lg:hidden
              uppercase
              tracking-[0.25em]
              text-xs
            "
          >
            Menu
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl px-8 py-8">

          <div className="space-y-6">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "#ffffff" }}
                className="
                  block
                  uppercase
                  tracking-[0.25em]
                  text-sm
                "
              >
                {link.label}
              </Link>
            ))}

          </div>

        </div>
      )}
    </nav>
  );
}