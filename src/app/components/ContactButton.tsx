import React from "react";
import { Link } from "react-router-dom";

interface ContactButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export function ContactButton({
  children = "Contact Us",
  className = "",
}: ContactButtonProps) {
  return (
    <Link
      to="/contact"
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-[#2E2A26]
        px-7
        py-3
        text-sm
        font-medium
        tracking-wide
        text-white
        transition-all
        duration-300
        hover:bg-[#C7A77A]
        hover:text-[#2E2A26]
        hover:scale-105
        ${className}
      `}
    >
      {children}
    </Link>
  );
}