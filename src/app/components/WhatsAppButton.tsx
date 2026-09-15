import React from "react";

export function WhatsAppButton() {
  const phoneNumber = "61466333438";

  const message =
    "Hi Backyard Nest, I'm interested in your designs and would like to know more.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Backyard Nest on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] group"
    >
      <span
        className="
          absolute right-16 top-1/2 -translate-y-1/2
          whitespace-nowrap
          rounded-lg bg-[#2E2A26] px-4 py-2
          text-sm text-white
          opacity-0 translate-x-2
          transition-all duration-300
          group-hover:opacity-100 group-hover:translate-x-0
          pointer-events-none
          shadow-lg
        "
      >
        Chat with us on WhatsApp
      </span>

      <div
        className="
          flex h-14 w-14 items-center justify-center
          rounded-full
          bg-[#25D366]
          shadow-lg
          transition-all duration-300
          hover:scale-110
        "
      >
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8 fill-white"
          aria-hidden="true"
        >
          <path d="M16.02 3C8.84 3 3 8.83 3 16c0 2.29.6 4.5 1.73 6.46L3 29l6.69-1.71A12.94 12.94 0 0 0 16.02 29C23.18 29 29 23.18 29 16S23.18 3 16.02 3Zm0 23.72c-1.99 0-3.94-.53-5.64-1.54l-.4-.24-3.97 1.01 1.06-3.87-.26-.42A10.67 10.67 0 0 1 5.3 16c0-5.92 4.81-10.72 10.72-10.72S26.73 10.08 26.73 16s-4.8 10.72-10.71 10.72Zm5.87-8.03c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.81 1.03-.99 1.24-.18.21-.36.23-.68.08-.32-.16-1.34-.49-2.55-1.56-.94-.84-1.57-1.88-1.75-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.36.47-.54.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.33.51 1.78.65.75.24 1.44.2 1.98.12.6-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.6-.36Z" />
        </svg>
      </div>
    </a>
  );
}