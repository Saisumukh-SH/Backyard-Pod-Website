import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


useEffect(() => {
  if (mobileMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [mobileMenuOpen]);

  const navLinks = [
    { path: "/products", label: "Designs" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
     { path: "/faq", label: "faq" },
  ];

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  

  return (
    <nav className="absolute top-0 left-0 w-full z-[100]">

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

      <div className="relative px-5 sm:px-8 lg:px-14 py-6 lg:py-8">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="font-serif tracking-tight"
            style={{
  color: "#ffffff",
  fontSize: "clamp(1.5rem, 6vw, 3.2rem)",
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
  className="
    lg:hidden
    relative
    z-[250]
    flex
    flex-col
    justify-center
    gap-1.5
    w-8
    h-8
  "
>
  <span
    className={`h-[2px] transition-all duration-300 ${
      mobileMenuOpen
        ? "rotate-45 translate-y-[7px] bg-[#1A1A1A]"
        : "bg-white"
    }`}
  />

  <span
    className={`h-[2px] transition-all duration-300 ${
      mobileMenuOpen
        ? "opacity-0 bg-[#1A1A1A]"
        : "bg-white"
    }`}
  />

  <span
    className={`h-[2px] transition-all duration-300 ${
      mobileMenuOpen
        ? "-rotate-45 -translate-y-[7px] bg-[#1A1A1A]"
        : "bg-white"
    }`}
  />
</button>

        </div>
      </div>

{/* Mobile Menu */}
{mobileMenuOpen && (
  <div
    className="
      fixed
      inset-0
      z-[200]
      lg:hidden
      bg-gradient-to-br
      from-[#F5F0EB]/95
      via-[#EFE7DF]/95
      to-[#E8DED5]/95
      backdrop-blur-xl
    "
  >
    {/* Decorative Blur Orbs */}
    <div className="pointer-events-none absolute top-20 left-10 w-40 h-40 bg-white/30 rounded-full blur-3xl" />
    <div className="pointer-events-none absolute bottom-20 right-10 w-52 h-52 bg-white/20 rounded-full blur-3xl" />



    <div className="relative z-10 h-full flex flex-col justify-center items-center">
      <div className="space-y-8 text-center">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMobileMenuOpen(false)}
            className={`
              block
              uppercase
              tracking-[0.3em]
              text-lg
              transition-all
              duration-300
              ${
                isActive(link.path)
                  ? "text-[#1A1A1A]"
                  : "text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
              }
            `}
          >
            {link.label}
          </Link>
        ))}

        <button
          onClick={() => {
            setMobileMenuOpen(false);
            window.location.href = "/booking";
          }}
          className="
            mt-10
            px-8
            py-4
            border
            border-[#1A1A1A]/20
            text-[#1A1A1A]
            uppercase
            tracking-[0.25em]
            text-xs
            rounded-full
            hover:bg-white/40
            transition-all
            duration-300
            min-w-[240px]
          "
        >
          Book Consultation
        </button>
      </div>
    </div>
  </div>
)}
    </nav>
  );
}