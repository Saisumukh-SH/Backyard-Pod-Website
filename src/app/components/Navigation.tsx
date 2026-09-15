import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

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
     { path: "/faq", label: "FAQ" },
     { path: "/privacy-policy", label: "Privacy Policy" },
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
            Backyard Nest
          </Link>

{/* Desktop Navigation */}
<div className="hidden lg:flex items-center gap-10">

  {/* Navigation Links */}
  <div className="flex items-center gap-10">
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
          tracking-[0.25em]
          transition-all
          duration-300
          hover:opacity-100
        "
      >
        {link.label}
      </Link>
    ))}
  </div>

  {/* Header Actions */}
  <div className="flex items-center gap-5 ml-4">

{/* Phone Number */}
<a
  href="tel:61466333438"
  aria-label="Call Backyard Nest"
  className="
    group
    flex items-center gap-2
    rounded-full
    border border-[#C7A77A]
    bg-[#C7A77A]/15
    px-4 py-2.5
    !text-[#C7A77A]
    text-[11px] font-semibold
    tracking-[0.12em]
    shadow-[0_4px_15px_rgba(199,167,122,0.18)]
    backdrop-blur-sm
    transition-all duration-300
    hover:bg-[#2E2A26]/80
    hover:border-[#C7A77A]
    hover:scale-105
    hover:shadow-[0_6px_20px_rgba(199,167,122,0.3)]
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="
      w-4 h-4
      !text-[#C7A77A]
      transition-transform duration-300
      group-hover:scale-110
    "
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.258-7.258 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.36-.27.52-.72.417-1.173L6.748 3.602A1.125 1.125 0 0 0 5.657 2.75H4.5A2.25 2.25 0 0 0 2.25 5v1.75Z"
    />
  </svg>

  <span className="!text-[#C7A77A]">
    0466 333 438
  </span>
</a>

    {/* Contact Us */}
    <Link
      to="/contact"
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-[#C7A77A]
        px-6
        py-3
        text-[#2E2A26]
        uppercase
        text-[10px]
        font-semibold
        tracking-[0.2em]
        shadow-[0_6px_18px_rgba(0,0,0,0.18)]
        transition-all
        duration-300
        hover:bg-[#F5F0EB]
        hover:scale-105
        hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]
      "
    >
      Contact Us
    </Link>

  </div>
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

        {/* Mobile Contact Actions */}

<a
  href="tel:61412345678"
  onClick={() => setMobileMenuOpen(false)}
  className="
    mt-4
    flex
    items-center
    justify-center
    gap-3
    px-8
    py-4
    rounded-full
    bg-[#2E2A26]
    text-[#F5F0EB]
    uppercase
    tracking-[0.2em]
    text-xs
    font-medium
    transition-all
    duration-300
    hover:bg-[#C7A77A]
    hover:text-[#2E2A26]
    min-w-[240px]
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.258-7.258 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.36-.27.52-.72.417-1.173L6.748 3.602A1.125 1.125 0 0 0 5.657 2.75H4.5A2.25 2.25 0 0 0 2.25 5v1.75Z"
    />
  </svg>

  Call 0466 333 438
</a>

<Link
  to="/contact"
  onClick={() => setMobileMenuOpen(false)}
  className="
    mt-3
    flex
    items-center
    justify-center
    px-8
    py-4
    rounded-full
    bg-[#C7A77A]
    text-[#2E2A26]
    uppercase
    tracking-[0.2em]
    text-xs
    font-semibold
    transition-all
    duration-300
    hover:bg-[#2E2A26]
    hover:text-[#F5F0EB]
    min-w-[240px]
  "
>
  Contact Us →
</Link>
      </div>
    </div>
  </div>
)}
    </nav>
  );
}