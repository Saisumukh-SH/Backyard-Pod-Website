import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ImageWithWatermark from "../../ImageWithWatermark";

interface Finish {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  image: string;
}

interface ProductProps {
  category: string;
  title: string;
  highlight: string;
  description: string;
  size: string;
  beds: string;
  baths: string;
  warranty: string;
  heroImage: string;
  finishes: Finish[];
  galleryImages: {
    main: string;
    thumb: string;
    label: string;
  }[];
}

export default function SingleStudioPage({
  category,
  title,
  highlight,
  description,
  size,
  beds,
  baths,
  warranty,
  heroImage,
  finishes,
  galleryImages,
}: ProductProps) {
  const navigate = useNavigate();

  const [activeFinish, setActiveFinish] = useState(finishes[0]);

  const [activeGallery, setActiveGallery] = useState(0);
  const [hoveredThumb, setHoveredThumb] = useState<number | null>(null);

  const displayGallery = hoveredThumb !== null ? hoveredThumb : activeGallery;

  const touchStartX = useRef(0);

  useEffect(() => {
    galleryImages.forEach((image) => {
      const img = new Image();
      img.src = image.main;
    });
  }, []);
  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
       {/* Hero Image */}
<div
  onContextMenu={(e) => e.preventDefault()}
  role="img"
  aria-label={title}
  className="
    absolute
    inset-0
    bg-cover
    bg-center
    bg-no-repeat
    scale-105
  "
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
  {/* Watermark */}
  <div
    className="
      absolute
      bottom-4
      right-4
      sm:bottom-5
      sm:right-5
      md:bottom-6
      md:right-6
      lg:bottom-8
      lg:right-8
      z-20
      pointer-events-none
      select-none
    "
  >
    <span
      className="
        text-white/70
        font-light
        uppercase
        tracking-[0.3em]
        text-[10px]
        sm:text-xs
        md:text-sm
        drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]
      "
    >
      © BACKYARD NEST
    </span>
  </div>

</div>

        <div className="absolute inset-0 bg-black/45" />

        <div
          className="
      relative
      z-10
      h-full
      max-w-7xl
      mx-auto
      px-8
      flex
      flex-col
      justify-end
      pb-24
    "
        >
          <span
            className="
        uppercase
        tracking-[0.3em]
        text-white/60
        text-xs
        mb-6
      "
          >
            {category}
          </span>

          <h1
            className="
        editorial-heading
        text-white
        text-[clamp(4rem,10vw,8rem)]
        leading-[0.9]
      "
          >
            {title}
            <span className="italic text-[#D7BE8A]"> {highlight}</span>
          </h1>

          <div className="flex gap-10 mt-10 text-white/80">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] opacity-50">
                Size
              </p>
              <p>{size}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] opacity-50">
                Beds
              </p>
              <p>{beds}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] opacity-50">
                Baths
              </p>
              <p>{baths}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-[#F5F0EB] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 border-y border-black/10">
            <div className="py-12">
              <p className="text-5xl font-serif">{size}</p>
              <p className="uppercase tracking-[0.25em] text-xs opacity-50 mt-2">
                Footprint
              </p>
            </div>

            <div className="py-12">
              <p className="text-5xl font-serif">{beds}</p>
              <p className="uppercase tracking-[0.25em] text-xs opacity-50 mt-2">
                Layout
              </p>
            </div>

            <div className="py-12">
              <p className="text-5xl font-serif">{baths}</p>
              <p className="uppercase tracking-[0.25em] text-xs opacity-50 mt-2">
                Bathroom
              </p>
            </div>

            <div className="py-12">
              <p className="text-5xl font-serif">{warranty}</p>
              <p className="uppercase tracking-[0.25em] text-xs opacity-50 mt-2">
                Warranty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN GALLERY */}
      <section className="bg-[#F5F0EB] py-16 md:py-24 lg:py-32">
        <div className="max-w-[1700px] mx-auto px-5 md:px-6 lg:px-10">
          {/* Header */}
          <div className="max-w-3xl mb-10 md:mb-16 lg:mb-20">
            <span className="text-[11px] uppercase tracking-[0.35em] text-black/40">
              Design Overview
            </span>

            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-7xl mt-4">
              Explore The Design
            </h2>

            <p className="mt-5 md:mt-6 text-black/60 text-base md:text-lg leading-relaxed">
              Visualise every detail of your studio pod, from the architectural
              floor plan through to the completed living space.
            </p>
          </div>

          {/* Gallery */}
          <div
            className="
        relative
        h-[380px]
        sm:h-[500px]
        md:h-[650px]
        lg:h-[850px]
        rounded-[32px]
        md:rounded-[50px]
        lg:rounded-[70px]
        overflow-hidden
        border
        border-black/10
        bg-[#EFE8E1]
      "
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              const delta = touchStartX.current - e.changedTouches[0].clientX;

              if (delta > 50) {
                setActiveGallery((prev) =>
                  prev === galleryImages.length - 1 ? 0 : prev + 1,
                );
              }

              if (delta < -50) {
                setActiveGallery((prev) =>
                  prev === 0 ? galleryImages.length - 1 : prev - 1,
                );
              }
            }}
          >
            {/* Images */}
            {/* Images */}
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`
      absolute inset-0
      transition-all duration-700 ease-out
      ${
        displayGallery === index
          ? "opacity-100 scale-100 z-10"
          : "opacity-0 scale-[1.03] z-0"
      }
    `}
              >
                <ImageWithWatermark
                  src={image.main}
                  alt={image.label}
                  fit={image.label === "Floor Plan" ? "contain" : "cover"}
                  className="w-full h-full"
                />
              </div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none z-20" />

            {/* Label */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 z-30">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm">
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] md:tracking-[0.3em]">
                  {galleryImages[displayGallery].label}
                </span>
              </div>
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 z-30">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 md:px-5 md:py-3 rounded-full shadow-sm">
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em]">
                  {displayGallery + 1} / {galleryImages.length}
                </span>
              </div>
            </div>

            {/* Swipe Hint */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 md:hidden">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full">
                <span className="text-[10px] uppercase tracking-[0.2em] text-black/50">
                  Swipe →
                </span>
              </div>
            </div>

            {/* Desktop Hint */}
            <div className="absolute bottom-56 left-8 z-30 hidden lg:block">
              <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-sm">
                <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">
                  Hover To Preview • Click To Select
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 z-30 flex gap-2 md:gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveGallery(index)}
                  onMouseEnter={() => setHoveredThumb(index)}
                  onMouseLeave={() => setHoveredThumb(null)}
                  className={`
              relative
              group
              w-16 h-16
              sm:w-20 sm:h-20
              md:w-28 md:h-28
              lg:w-40 lg:h-40
              rounded-[18px]
              md:rounded-[24px]
              lg:rounded-[28px]
              overflow-hidden
              transition-all
              duration-500
              ${
                activeGallery === index
                  ? "scale-105"
                  : "opacity-75 hover:opacity-100 hover:-translate-y-2"
              }
            `}
                >
                  <div
                    className="
    w-full
    h-full
    bg-cover
    bg-center
    transition-transform
    duration-700
    group-hover:scale-110
  "
                    style={{
                      backgroundImage: `url(${image.thumb})`,
                    }}
                  />

                  <div
                    className={`
                absolute inset-0
                transition-all duration-300
                ${
                  activeGallery === index
                    ? "bg-black/10"
                    : "bg-black/25 group-hover:bg-black/10"
                }
              `}
                  />

                  {activeGallery === index && (
                    <div className="absolute inset-0 rounded-[18px] md:rounded-[24px] lg:rounded-[28px] ring-2 md:ring-4 ring-white" />
                  )}

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:block">
                    <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.15em] lg:tracking-[0.2em] text-white whitespace-nowrap">
                      {image.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Progress */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] md:h-[4px] bg-black/5 z-30">
              <div
                className="h-full bg-black/80 transition-all duration-500"
                style={{
                  width: `${
                    ((activeGallery + 1) / galleryImages.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="border-t border-black/10 px-8 py-32 bg-[#F7F5F0]">
        {" "}
        {/* HEADER */}{" "}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {" "}
          <div>
            {" "}
            <span className="uppercase tracking-[0.25em] text-[11px] opacity-50 block mb-6">
              {" "}
              What's Included{" "}
            </span>{" "}
            <h2 className="font-serif text-[clamp(3rem,5vw,4.5rem)] leading-[1]">
              {" "}
              The Best of <br /> Our Features{" "}
            </h2>{" "}
          </div>{" "}
          <div className="max-w-md ml-auto text-sm leading-relaxed opacity-60">
            {" "}
            Every element engineered for how you live, work, and rest — without
            compromise.{" "}
          </div>{" "}
        </div>{" "}
        {/* FEATURES DATA */}{" "}
        {(() => {
          const features = [
            {
              title: "Full Customization",
              desc: "Tailor cladding, finishes, layout, and dimensions to match your vision exactly.",
              icon: (
                <path d="M3 21l3-3m0 0l11-11a2.5 2.5 0 013.5 3.5L9.5 21H3z" />
              ),
            },
            {
              title: "Fast Installation",
              desc: "Prefabricated and assembled on-site with minimal disruption.",
              icon: (
                <>
                  {" "}
                  <circle cx="12" cy="12" r="9" /> <path d="M12 7v5l3 3" />{" "}
                </>
              ),
            },
            {
              title: "Fast Lead Times",
              desc: "Deposit to delivery in as little as 6 weeks — industry-leading turnaround.",
              icon: <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />,
            },
            {
              title: "Regulation Compliant",
              desc: "All documentation meets local planning and building regulation requirements.",
              icon: (
                <>
                  {" "}
                  <path d="M3 10l9-7 9 7" /> <path d="M9 21V12h6v9" />{" "}
                </>
              ),
            },
            {
              title: "10-Year Warranty",
              desc: "A decade of structural warranty and dedicated ongoing support.",
              icon: (
                <>
                  {" "}
                  <circle cx="12" cy="8" r="4" />{" "}
                  <path d="M8 14h8l-1 7H9l-1-7z" />{" "}
                </>
              ),
            },
            {
              title: "Fixed Price Contract",
              desc: "The price you see is the price you pay — fully transparent, no surprises.",
              icon: (
                <>
                  {" "}
                  <rect x="4" y="7" width="16" height="12" rx="2" />{" "}
                  <path d="M9 7V5h6v2" />{" "}
                </>
              ),
            },
          ];
          return (
            <div className="grid md:grid-cols-3 border border-black/10">
              {" "}
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group border-r border-b border-black/10 p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:border-black/20"
                >
                  {" "}
                  {/* ICON */}{" "}
                  <div className="w-14 h-14 rounded-full border border-black/20 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:border-[#6F8A5E]">
                    {" "}
                    <svg
                      className="w-6 h-6 text-[#6F8A5E] transition-all duration-500 group-hover:rotate-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      {feature.icon}{" "}
                    </svg>{" "}
                  </div>{" "}
                  {/* TITLE */}{" "}
                  <h3 className="font-serif text-2xl mb-4 transition-all duration-300 group-hover:tracking-wide">
                    {" "}
                    {feature.title}{" "}
                  </h3>{" "}
                  {/* DESCRIPTION */}{" "}
                  <p className="text-sm opacity-60 leading-relaxed transition-all duration-300 group-hover:opacity-80">
                    {" "}
                    {feature.desc}{" "}
                  </p>{" "}
                </div>
              ))}{" "}
            </div>
          );
        })()}{" "}
      </section>

      {/* FINISH & MATERIALS */}
      <section className="border-t border-black/10 py-32 bg-[#F7F5F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          {/* HEADER */}
          <div className="mb-20 max-w-2xl">
            <span className="uppercase tracking-[0.3em] text-[11px] opacity-40 block mb-6">
              Finish & Materials
            </span>

            <h2 className="font-serif text-[clamp(3rem,5vw,5rem)] leading-[1]">
              Choose Your Cladding
            </h2>
          </div>

          {/* HERO IMAGE */}
          <div className="relative mb-16">
            <div className="overflow-hidden rounded-xl border border-black/10 shadow-[0_40px_80px_rgba(0,0,0,0.08)]">
              <ImageWithWatermark
                key={activeFinish.id}
                src={activeFinish.image}
                alt={activeFinish.name}
                className="
        w-full
        h-[85vh]
        transition-all
        duration-700
        ease-out
      "
              />
            </div>

            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md px-8 py-4 uppercase tracking-[0.25em] text-xs shadow-md rounded-full">
              {activeFinish.name}
            </div>
          </div>

          {/* SELECTOR */}
          <div className="bg-white/60 backdrop-blur-md border border-black/10 rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-5 gap-6">
              {finishes.map((finish) => {
                const isActive = activeFinish.id === finish.id;

                return (
                  <button
                    key={finish.id}
                    onClick={() => setActiveFinish(finish)}
                    className={`group cursor-pointer text-left
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    ${isActive ? "scale-[1.02]" : ""}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full transition-all duration-300
                        ${
                          isActive
                            ? "ring-2 ring-black scale-110 shadow"
                            : "group-hover:scale-105"
                        }`}
                        style={{ backgroundColor: finish.color }}
                      />

                      {isActive && (
                        <span className="text-[10px] uppercase tracking-[0.25em] opacity-50">
                          Selected
                        </span>
                      )}
                    </div>

                    <div
                      className={`font-medium mb-1 transition-colors duration-300 ${
                        isActive ? "text-black" : "opacity-70"
                      }`}
                    >
                      {finish.name}
                    </div>

                    <div className="text-xs opacity-50 leading-relaxed">
                      {finish.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="bg-[#F5F0EB] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <p className="uppercase tracking-[0.3em] text-xs text-[#A08E7C] mb-8">
            Explore More Designs
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-b border-black/10 pb-6 cursor-pointer">
              <h3 className="font-serif text-3xl">15m² Studio</h3>
            </div>

            <div className="border-b border-black/10 pb-6 cursor-pointer">
              <h3 className="font-serif text-3xl">22m² Studio</h3>
            </div>

            <div className="border-b border-black/10 pb-6 cursor-pointer">
              <h3 className="font-serif text-3xl">37m² Studio</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section className="bg-[#EFE8DF] py-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT */}

            <div>
              <span
                className="
            uppercase
            tracking-[0.3em]
            text-[#A08E7C]
            text-xs
          "
              >
                Next Step
              </span>

              <h2
                className="
            editorial-heading
            text-[#2E2A26]
            text-5xl
            md:text-7xl
            leading-[0.92]
            tracking-[-0.04em]
            mt-6
          "
              >
                Let's Design
                <br />
                Your Space
                <br />
                Together.
              </h2>
            </div>

            {/* RIGHT */}

            <div>
              <p
                className="
            text-[#5F5A55]
            text-lg
            leading-relaxed
            mb-10
          "
              >
                Every property is different. Our team will guide you through
                layouts, finishes, council requirements and pricing to help
                create the perfect backyard space.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex justify-between border-b border-black/10 pb-4">
                  <span className="text-[#5F5A55]">
                    Free Design Consultation
                  </span>

                  <span className="text-[#2E2A26]">01</span>
                </div>

                <div className="flex justify-between border-b border-black/10 pb-4">
                  <span className="text-[#5F5A55]">Tailored Quote</span>

                  <span className="text-[#2E2A26]">02</span>
                </div>

                <div className="flex justify-between border-b border-black/10 pb-4">
                  <span className="text-[#5F5A55]">Design & Build Support</span>

                  <span className="text-[#2E2A26]">03</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="
              px-8
              py-4
              bg-[#2E2A26]
              text-white
              hover:bg-black
              transition-all
            "
                >
                  Book Consultation
                </button>

                <button
                  onClick={() => navigate("/products")}
                  className="
              px-8
              py-4
              border
              border-[#2E2A26]/20
              text-[#2E2A26]
              hover:bg-[#2E2A26]
              hover:text-white
              transition-all
            "
                >
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
