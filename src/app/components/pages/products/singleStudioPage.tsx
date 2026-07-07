import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ImageWithWatermark from "../../ImageWithWatermark";
import { motion } from "framer-motion";


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
mobileHeroImage?: string;
  finishes: Finish[];
  galleryImages: {
    main: string;
    thumb: string;
    label: string;
  }[];
  relatedProducts?: React.ReactNode;
  designInspiration?: React.ReactNode;
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
  relatedProducts,
  designInspiration,
  mobileHeroImage,
}: ProductProps) {
  const navigate = useNavigate();

  // const [activeFinish, setActiveFinish] = useState(finishes[0]);

  const [activeGallery, setActiveGallery] = useState(0);
  const [hoveredThumb, setHoveredThumb] = useState<number | null>(null);

  const displayGallery = hoveredThumb !== null ? hoveredThumb : activeGallery;

  const touchStartX = useRef(0);

  const inclusionCategories = [
  {
    title: "Structure & Compliance",
    subtitle: "Built on Quality",
    items: [
      "10-Year Structural Warranty*",
      "Premium 7-Year Build Warranty*",
      "Architecturally Designed & Engineered",
      "Building Permit Included",
      "7-Star Energy Compliance",
      "Engineered Steel Frame",
      "Surefoot® Foundation System*",
    ],
  },
  {
    title: "Exterior",
    subtitle: "Premium Outside",
    items: [
      "Premium Double-Glazed Aluminium Windows & Doors",
      "Flyscreens to Openable Windows",
      "Choice of Premium External Cladding",
    ],
  },
  {
    title: "Interior & Comfort",
    subtitle: "Luxury Living",
    items: [
      "Reverse Cycle Heating & Cooling",
      "Designer Kitchen with Polytec Cabinetry",
      "Luxury Bathroom with Quality Fixtures & Fittings",
      "Hybrid Timber Flooring Throughout",
      "LED Lighting & Standard Electrical Package",
      "Internal & External Painting",
    ],
  },
  {
    title: "Installation",
    subtitle: "Ready to Enjoy",
    items: [
      "Installation & Site Delivery",
      "Service Connections (within 10m*)",
    ],
  },
];

const [activeCard, setActiveCard] = useState<number | null>(0);

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

  {/* Desktop Hero Image */}
  <div
    onContextMenu={(e) => e.preventDefault()}
    role="img"
    aria-label={title}
    className="
      hidden
      md:block
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
  />

  {/* Mobile Hero Image */}
  <div
    onContextMenu={(e) => e.preventDefault()}
    role="img"
    aria-label={title}
    className="
      block
      md:hidden
      absolute
      inset-0
      bg-cover
      bg-center
      bg-no-repeat
      scale-105
    "
    style={{
      backgroundImage: `url(${mobileHeroImage || heroImage})`,
    }}
  />

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

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45 z-10" />

  {/* Hero Content */}
  <div
    className="
      relative
      z-20
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

{/* SPECIFICATIONS */}
<section className="bg-[#F5F0EB] py-20 lg:py-28">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-16">
      <p className="uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-5">
        Specifications
      </p>

      <h2
        className="
          editorial-heading
          text-[#2E2A26]
          text-[clamp(2.8rem,6vw,4.8rem)]
          leading-[0.95]
        "
      >
        Designed For
        <br />
        Modern Living.
      </h2>
    </div>

    {(() => {
      const items = [
        {
          value: size,
          label: "Footprint",
        },
        {
          value: beds,
          label: "Bedroom",
        },

        ...(baths && baths !== "0"
          ? [
              {
                value: baths,
                label: "Bathroom",
              },
            ]
          : []),

        {
          value: warranty,
          label: "Warranty*",
        },
      ];

      const threeCards = !baths || baths === "0";

      return (
        <>
          {/* ---------- MOBILE ---------- */}
          <div className="lg:hidden">
            {threeCards ? (
              <>
                <div className="grid grid-cols-2 gap-5">
                  {items.slice(0, 2).map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -6 }}
                      className="group rounded-[28px] border border-[#E8DED3] bg-white p-6 text-center transition-all duration-500 hover:border-[#C7A77A] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]"
                    >
                      <p className="editorial-heading text-[#2E2A26] text-[clamp(2.2rem,7vw,3.6rem)] leading-none group-hover:text-[#C7A77A] transition-colors">
                        {item.value}
                      </p>

                      <div className="w-12 h-px bg-[#C7A77A] mx-auto my-5" />

                      <p className="uppercase tracking-[0.28em] text-[11px] text-[#8B7E74]">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center mt-5">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ y: -6 }}
                    className="group w-full max-w-[220px] rounded-[28px] border border-[#E8DED3] bg-white p-6 text-center transition-all duration-500 hover:border-[#C7A77A] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]"
                  >
                    <p className="editorial-heading text-[#2E2A26] text-[clamp(2.2rem,7vw,3.6rem)] leading-none group-hover:text-[#C7A77A] transition-colors">
                      {items[2].value}
                    </p>

                    <div className="w-12 h-px bg-[#C7A77A] mx-auto my-5" />

                    <p className="uppercase tracking-[0.28em] text-[11px] text-[#8B7E74]">
                      {items[2].label}
                    </p>
                  </motion.div>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-5">
                {items.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="group rounded-[28px] border border-[#E8DED3] bg-white p-6 text-center transition-all duration-500 hover:border-[#C7A77A] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]"
                  >
                    <p className="editorial-heading text-[#2E2A26] text-[clamp(2.2rem,7vw,3.6rem)] leading-none group-hover:text-[#C7A77A] transition-colors">
                      {item.value}
                    </p>

                    <div className="w-12 h-px bg-[#C7A77A] mx-auto my-5" />

                    <p className="uppercase tracking-[0.28em] text-[11px] text-[#8B7E74]">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* ---------- DESKTOP ---------- */}
          <div
            className={`hidden lg:grid gap-6 ${
              threeCards ? "grid-cols-3" : "grid-cols-4"
            }`}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-[28px] border border-[#E8DED3] bg-white p-8 text-center transition-all duration-500 hover:border-[#C7A77A] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]"
              >
                <p className="editorial-heading text-[#2E2A26] text-[clamp(2.6rem,4vw,3.8rem)] leading-none transition-colors duration-300 group-hover:text-[#C7A77A]">
                  {item.value}
                </p>

                <div className="w-12 h-px bg-[#C7A77A] mx-auto my-5" />

                <p className="uppercase tracking-[0.28em] text-[11px] text-[#8B7E74]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </>
      );
    })()}
  </div>
</section>

{/* STANDARD INCLUSIONS */}
<section className="relative border-t border-[#E8DED3] bg-[#F7F5F0] py-24 lg:py-32 overflow-hidden">

  {/* Background Decoration */}

  <div className="absolute inset-0 pointer-events-none">

    <div className="absolute -top-48 left-0 w-[500px] h-[500px] rounded-full bg-[#C7A77A]/5 blur-3xl" />

    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C7A77A]/5 blur-3xl" />

  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    {/* Header */}

  <div className="max-w-4xl mx-auto text-center mb-20">

  <p className="uppercase tracking-[0.35em] text-[11px] text-[#A08E7C] mb-5">
    STANDARD INCLUSIONS
  </p>

  <h2
    className="
      editorial-heading
      text-[#2E2A26]
      text-[clamp(3.2rem,5vw,5.4rem)]
      leading-[0.92]
      mb-8
    "
  >
    Luxury Comes Standard.
  </h2>

  <p
    className="
      text-[#5F5A55]
      text-lg
      leading-relaxed
      max-w-3xl
      mx-auto
    "
  >
    Every Backyard Nest studio is thoughtfully designed and built to deliver
    comfort, quality and long-term value. Explore what's included as
    standard in every premium studio.
  </p>

</div>

    {/* Two Columns */}

   <div className="grid md:grid-cols-2 gap-7">
  {inclusionCategories.map((category, index) => {

  const isActive = activeCard === index;

  return (

    <div
      key={index}
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
      onClick={() =>
        setActiveCard(isActive ? null : index)
      }
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        bg-white
        cursor-pointer
        transition-all
        duration-700
        ease-out
        ${
          isActive
            ? "border-[#C7A77A] shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
            : "border-[#E8DED3] hover:border-[#D6BE9C]"
        }
      `}
    >

      {/* Background Number */}

      <span
        className="
          absolute
          right-8
          top-4
          editorial-heading
          text-[7rem]
          leading-none
          text-[#F4EFE8]
          select-none
          pointer-events-none
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Gold Accent */}

      <div
        className={`
          absolute
          left-0
          top-0
          h-[3px]
          bg-[#C7A77A]
          transition-all
          duration-700
          ${
            isActive
              ? "w-full"
              : "w-0 group-hover:w-full"
          }
        `}
      />

      {/* Content */}

      <div className="relative z-10 p-9">

        <p
          className="
            uppercase
            tracking-[0.25em]
            text-[11px]
            text-[#A08E7C]
            mb-5
          "
        >
          STANDARD
        </p>

        <h3
          className="
            editorial-heading
            text-[#2E2A26]
            text-[2.4rem]
            leading-none
            mb-3
          "
        >
          {category.title}
        </h3>

        <p
          className="
            text-[#7D7368]
            text-sm
            mb-8
          "
        >
          {category.subtitle}
        </p>{/* Expandable Content */}

<div
  className={`
    grid
    transition-all
    duration-700
    ease-in-out
    ${
      isActive
        ? "grid-rows-[1fr] opacity-100 mt-8"
        : "grid-rows-[0fr] opacity-0 mt-0"
    }
  `}
>

  <div className="overflow-hidden">

    <div className="space-y-2">

      {category.items.map((item, itemIndex) => (

        <div
          key={itemIndex}
          className={`
            flex
            items-start
            gap-4
            py-3
            border-b
            border-[#F1EBE4]
            transition-all
            duration-700
            ${
              isActive
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }
          `}
          style={{
            transitionDelay: `${itemIndex * 70}ms`,
          }}
        >

          {/* Check */}

          <div
            className="
              mt-0.5
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-[#F5EFE7]
              text-[#C7A77A]
              transition-all
              duration-500
              group-hover:bg-[#C7A77A]
              group-hover:text-white
            "
          >
            ✓
          </div>

          {/* Text */}

          <p
            className="
              flex-1
              text-[15px]
              leading-7
              text-[#4E4943]
            "
          >
            {item}
          </p>

        </div>

      ))}

    </div>

  </div>

</div>

{/* Bottom indicator */}

<div
  className="
    mt-10
    flex
    items-center
    justify-between
    border-t
    border-[#EEE6DC]
    pt-6
  "
>

  <span
    className="
      uppercase
      tracking-[0.2em]
      text-[11px]
      text-[#A08E7C]
    "
  >
    {category.items.length} Standard Inclusions
  </span>

  <div
    className={`
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      transition-all
      duration-500
      ${
        isActive
          ? "border-[#C7A77A] bg-[#C7A77A] text-white rotate-45"
          : "border-[#E4D8C8] text-[#A08E7C]"
      }
    `}
  >

    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 5v14M5 12h14"
      />
    </svg>

  </div>

</div>

</div>

</div>

  );

})}

</div>

{/* Disclaimer */}

<div className="mt-14 border-t border-[#E8DED3] pt-8">

  <p
    className="
      text-sm
      leading-7
      text-[#7B7268]
      max-w-4xl
    "
  >
    <strong>*Disclaimer:</strong> Standard inclusions are subject to site
    conditions, engineering requirements, council approvals and service
    connection availability. Specifications may vary depending on the selected
    Backyard Nest studio design and individual project requirements.
  </p>

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
              Visualise every detail of your studio, from the architectural
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

            {/* Desktop Hint
            <div className="absolute bottom-38 left-8 z-30 hidden lg:block">
              <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-sm">
                <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">
                  Hover To Preview | Click To Select
                </span>
              </div>
            </div> */}

            {/* Thumbnails */}
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 z-30 flex gap-2 md:gap-2">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveGallery(index)}
                  onMouseEnter={() => setHoveredThumb(index)}
                  onMouseLeave={() => setHoveredThumb(null)}
                  className={`
              relative
              group
              w-12 h-12
sm:w-14 sm:h-14
md:w-16 md:h-16
lg:w-24 lg:h-24
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
      
      {/* DESIGN INSPIRATION */}

{designInspiration}

      {/* FINISH & MATERIALS */}
      {/* <section className="border-t border-black/10 py-32 bg-[#F7F5F0]">
        <div className="max-w-[1400px] mx-auto px-8"> */}
      {/* HEADER */}
      {/* <div className="mb-20 max-w-2xl">
            <span className="uppercase tracking-[0.3em] text-[11px] opacity-40 block mb-6">
              Finish & Materials
            </span>

            <h2 className="font-serif text-[clamp(3rem,5vw,5rem)] leading-[1]">
              Choose Your Cladding
            </h2>
          </div> */}

      {/* HERO IMAGE */}
      {/* <div className="relative mb-16">
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
          </div> */}

      {/* SELECTOR */}
      {/* <div className="bg-white/60 backdrop-blur-md border border-black/10 rounded-2xl p-8 shadow-sm">
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
          </div> */}
      {/* </div>
      </section> */}

      {/* RELATED PRODUCTS */}
     {relatedProducts}

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
                  onClick={() => navigate("/booking")}
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
