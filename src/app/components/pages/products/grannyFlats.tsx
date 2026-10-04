import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../../SEO";
import React from "react";
import { motion } from "framer-motion";

export default function GrannyFlats() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 const sizes = [
  {
    id: 60,
    label: "The Wattle",
    route: "/products/TheWattle",
    immersiveImage: "/images/grannyflat/wattle_60/wattle_2.webp",
    gridImage: "/images/grannyflat/wattle_60/wattle_grid.webp",
    description:
      "A beautifully designed one-bedroom granny flat featuring open-plan living, a full kitchen and a private bathroom. Perfect for independent living, guest accommodation or rental income.",
    footprint: "7 × 6.5 m",
    area: "60 m²",
    height: "2.7 m",
    glazing: "Large glazed doors",
    bedrooms: "1",
    bathrooms: "1",
    capacity: "1–2",
  },
  {
  id: "yarra-38",
  label: "The Yarra",
  size: "38 m²",
  route: "/products/TheYarra38",
  immersiveImage:
    "/images/grannyflat/yara/yarra_38/yarra_38_1.webp",
  gridImage:
    "/images/grannyflat/yara/yarra_38/yarra_38_mobile.webp",
  description:
    "A thoughtfully designed one-bedroom granny flat making efficient use of a compact backyard footprint. The Yarra 38 features generous glazing, natural light and a strong connection to the backyard.",
  footprint: "7 × 5.5 m",
  area: "38 m²",
  height: "2.7 m",
  glazing: "Generous glazed openings",
  bedrooms: "1",
  bathrooms: "1",
  capacity: "1–2",
},

{
  id: "yarra-44",
  label: "The Yarra",
  size: "44 m²",
  route: "/products/TheYarra44",
  immersiveImage:
    "/images/grannyflat/yara/yarra_44/yarra_44_1.webp",
  gridImage:
    "/images/grannyflat/yara/yarra_44/yarra_44_mobile.webp",
  description:
    "A contemporary one-bedroom granny flat featuring clean architectural lines, generous glazing, natural timber accents and flexible living spaces.",
  footprint: "7 × 6.5 m",
  area: "44 m²",
  height: "2.7 m",
  glazing: "Generous glazed openings",
  bedrooms: "1",
  bathrooms: "1",
  capacity: "1–2",
},

{
  id: "palmview-38",
  label: "The Palmview",
  size: "38 m²",
  route: "/products/ThePalmview38",
  immersiveImage:
    "/images/grannyflat/palmview/palmview_38/palmview_38_1.webp",
  gridImage:
    "/images/grannyflat/palmview/palmview_38/palmview_38_mobile.webp",
  description:
    "A contemporary backyard home combining modern comfort, smart design and effortless indoor-outdoor living. The Palmview 38 features generous glazing, practical living spaces and a private outdoor connection.",
  footprint: "Compact backyard footprint",
  area: "38 m²",
  height: "—",
  glazing: "Generous glazed openings",
  bedrooms: "1",
  bathrooms: "1",
  capacity: "1–2",
},

{
  id: "palmview-44",
  label: "The Palmview",
  size: "44 m²",
  route: "/products/ThePalmview44",
  immersiveImage:
    "/images/grannyflat/palmview/palmview_44/palmview_44_1.webp",
  gridImage:
    "/images/grannyflat/palmview/palmview_44/palmview_44_mobile.webp",
  description:
    "A contemporary backyard home combining modern comfort, smart design and effortless indoor-outdoor living. The Palmview 44 features clean architectural lines, generous glazing and warm timber accents.",
  footprint: "Compact backyard footprint",
  area: "44 m²",
  height: "—",
  glazing: "Generous glazed openings",
  bedrooms: "1",
  bathrooms: "1",
  capacity: "1–2",
},
{
  id: 48,
  label: "The Haven",
  route: "/products/TheHaven",
  immersiveImage:
    "/images/grannyflat/haven/haven_48_1.webp",
  gridImage:
    "/images/grannyflat/haven/haven_48_mobile.webp",
  description:
    "A modern 48m² one-bedroom granny flat featuring an open-plan kitchen, living and dining area, private bedroom, bathroom and outdoor deck. Designed as a practical secondary dwelling solution for suitable Victorian properties.",
  footprint: "Compact backyard footprint",
  area: "48 m²",
  height: "—",
  glazing: "Large windows and glazed doors",
  bedrooms: "1",
  bathrooms: "1",
  capacity: "1-2",
},
];

  const [activeSize, setActiveSize] = useState(60);
  const current = sizes.find((s) => s.id === activeSize)!;

  return (
    <div>
<SEO
  title="Granny Flat Builders Melbourne, Victoria | Backyard Nest"
  description="Looking for trusted granny flat builders in Melbourne, Victoria? Backyard Nest designs and builds custom granny flats. Enquire today for a free quote."
  url="https://backyardnest.com.au/products/granny"
/>

{/* LUXURY COLLECTION GRID */}

<section className="bg-[#F5F0EB] py-20 lg:py-32">

  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    {/* SECTION HEADER */}

    <div className="mb-20">

      <p
        className="
          uppercase
          tracking-[0.3em]
          text-[#A08E7C]
          text-xs
          mb-6
        "
      >
        Granny Flat Collection
      </p>

      <h2
        className="
          editorial-heading
          text-[#2E2A26]
   text-[clamp(2.8rem,10vw,7rem)]
          leading-[0.95]
          tracking-[-0.04em]
        "
      >
        Explore Every Design.
      </h2>

      <p
        className="
          mt-6
          text-[#5F5A55]
          text-base md:text-lg
          max-w-2xl
          leading-relaxed
        "
      >
        Thoughtfully designed granny flat spaces created
        for work, creativity and everyday living.
      </p>

    </div>

    {/* GRID */}

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {sizes.map((item) => (

        <div
          key={item.id}
          onClick={() => navigate(item.route)}
          className={`
group
relative
h-[420px]
sm:h-[480px]
lg:h-[520px]
overflow-hidden
rounded-[28px]
cursor-pointer
transition-all
duration-500
group-hover:-translate-y-2
${
  item.id === 99
    ? "ring-1 ring-[#C7A77A]/40"
    : "bg-[#EDE8E0]"
}
`}
        >

          {/* IMAGE */}

          <div
  onContextMenu={(e) => e.preventDefault()}
  role="img"
  aria-label={item.label}
  className="
    absolute
    inset-0
    w-full
    h-full
    bg-cover
    bg-center
    bg-no-repeat
    transition-all
    duration-[1200ms]
    group-hover:scale-110
  "
  style={{
    backgroundImage: `url(${item.gridImage})`,
  }}
/>

          {/* DARK OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/85
              via-black/25
              to-black/5
            "
          />

          {/* GOLD HOVER OVERLAY */}

          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-700
              bg-gradient-to-t
              from-[#C7A77A]/20
              via-transparent
              to-transparent
            "
          />

          {/* CONTENT */}

          <div
            className="
              absolute
              inset-0
              p-8
              flex
              flex-col
              justify-end
            "
          >

            {/* CATEGORY */}

            <p
  className="
    text-white/60
    uppercase
    tracking-[0.28em]
    text-[10px]
    mb-3
  "
>
  {item.id === 99
    ? "Tailored Solution"
    : "granny flat  Collection"}
</p>

            {/* NAME */}

            <h3
              className="
                text-white
                text-[1.8rem]
md:text-[2.4rem]
                leading-[0.95]
                font-serif
                tracking-[-0.03em]
                mb-3
                transition-all
                duration-500
                group-hover:text-[#D7BE8A]
              "
            >
              {item.label}
            </h3>

            {/* SIZE */}

           <p
  className="
    text-white/70
    uppercase
    tracking-[0.2em]
    text-[11px]
    mb-6
  "
>
  {item.id === 99
    ? "Designed Around You"
    : `${item.id}m² granny flat `}
</p>

            {/* HOVER CONTENT */}

            <div
              className="
                max-h-0
                overflow-hidden
                transition-all
                duration-700
                group-hover:max-h-[250px]
              "
            >

              <div
                className="
                  w-12
                  h-px
                  bg-[#D7BE8A]
                  mb-5
                "
              />

              <p
                className="
                  text-white/80
                  text-sm
                  leading-relaxed
                  mb-6
                "
              >
                {item.description}
              </p>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-[#D7BE8A]
                  uppercase
                  tracking-[0.22em]
                  text-[11px]
                "
              >
                Explore Design

                <span
                  className="
                    transition-transform
                    duration-500
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

  {/* IMMERSIVE COLLECTION EXPLORER */}

<section className="relative min-h-[850px] lg:h-screen overflow-hidden hidden lg:block">

  {/* Background Image */}
  <div className="absolute inset-0">

   <div
  onContextMenu={(e) => e.preventDefault()}
  role="img"
  aria-label={current.label}
  className="
    w-full
    h-full
    bg-cover
    bg-center
    bg-no-repeat
    transition-all
    duration-700
    scale-100
    lg:scale-105
  "
  style={{
    backgroundImage: `url(${current.immersiveImage})`,
  }}
/>

    <div className="absolute inset-0 bg-black/45" />

  </div>

  {/* Content */}

  <div className="relative z-10 h-full flex flex-col lg:flex-row">

    {/* LEFT SIDE */}

    <div
  className="
    w-full
    lg:w-1/2
    flex
    flex-col
    justify-center
    px-6
    lg:px-20
    pt-32
    lg:pt-0
  "
>

      <span
        className="
          uppercase
          tracking-[0.3em]
          text-[11px]
          text-white/60
          mb-12
        "
      >
        granny flat Collection
      </span>

      {sizes.map((item, index) => (

        <button
          key={item.id}
          onMouseEnter={() => setActiveSize(item.id)}
          onClick={() => navigate(item.route)}
          className="
            group
            text-left
            py-3
          "
        >

          <div className="flex items-center gap-6">

            <span
              className={`
                text-sm
                transition-all
                duration-300
                ${
                  activeSize === item.id
                    ? "text-[#C7A77A]"
                    : "text-white/40"
                }
              `}
            >
              0{index + 1}
            </span>

            <h2
              className={`
                font-serif
                transition-all
                duration-500
                leading-none
                ${
                  activeSize === item.id
  ? "text-white text-4xl md:text-6xl"
  : "text-white/40 text-3xl md:text-5xl"
                }
              `}
            >
              {item.label}
            </h2>

          </div>

        </button>

      ))}

    </div>

    {/* RIGHT SIDE INFO */}

      <div
  className="
    w-full
    lg:w-1/2
    flex
    items-end
    justify-start
    lg:justify-end
    px-6
    pb-10
    lg:p-20
  "
    >

      <div className="max-w-md text-white">

        <span
          className="
            uppercase
            tracking-[0.25em]
            text-[11px]
            text-[#C7A77A]
            block
            mb-6
          "
        >
          Selected Design
        </span>

        <h3 className="font-serif text-3xl md:text-5xl mb-6">
          {current.label}
        </h3>

        <p className="text-white/70 leading-relaxed mb-8">
          {current.description}
        </p>

        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10">

          <div>
            <span className="text-white/40 text-xs uppercase">
              Footprint
            </span>

            <p>{current.footprint}</p>
          </div>

          <div>
            <span className="text-white/40 text-xs uppercase">
              Height
            </span>

            <p>{current.height}</p>
          </div>

          <div>
            <span className="text-white/40 text-xs uppercase">
              Glazing
            </span>

            <p>{current.glazing}</p>
          </div>

          <div>
            <span className="text-white/40 text-xs uppercase">
              Capacity
            </span>

            <p>{current.capacity}</p>
          </div>

        </div>

        <button
          onClick={() => navigate(current.route)}
          className="
            border
            border-white/30
            w-full
md:w-auto
px-8
py-4
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
          "
        >
          Explore Design →
        </button>

      </div>

    </div>

  </div>

</section>

{/* MOBILE COLLECTION EXPLORER */}
<section className="lg:hidden bg-[#2E2A26] text-white py-20">
  <div className="px-6">

    <div className="mb-8">
      <span
        className="
          uppercase
          tracking-[0.3em]
          text-[11px]
          text-[#C7A77A]
        "
      >
        granny flat Collection
      </span>
    </div>

    <h2
      className="
        editorial-heading
        text-[clamp(2.8rem,12vw,4.5rem)]
        leading-[0.9]
        mb-6
      "
    >
      Find Your
      <br />
      Perfect granny flat.
    </h2>

    <p className="text-white/70 leading-relaxed mb-10">
      Explore our range of architecturally designed backyard granny flats,
      creative spaces and work-from-home retreats.
    </p>

    <div className="space-y-4">

      {sizes.map((item, index) => (
        <button
          key={item.id}
          onClick={() => navigate(item.route)}
          className="
            w-full
            flex
            items-center
            justify-between
            border-b
            border-white/10
            py-5
            text-left
          "
        >
          <div>
            <span className="block text-white/40 text-xs mb-1">
              0{index + 1}
            </span>

            <span className="text-xl font-serif">
              {item.label}
            </span>
          </div>

          <span className="text-[#C7A77A] text-xl">
            →
          </span>
        </button>
      ))}

    </div>

    <button
      onClick={() => navigate("/contact")}
      className="
        w-full
        mt-10
        py-4
        bg-[#C7A77A]
        text-[#2E2A26]
        uppercase
        tracking-[0.25em]
        text-xs
      "
    >
      Book Consultation
    </button>

  </div>
</section>

{/* FAQ SECTION */}
<section className="bg-[#F5F0EB] py-24 lg:py-32">
  <div className="max-w-5xl mx-auto px-6 lg:px-12">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <p className="text-sm uppercase tracking-[0.2em] text-[#8A7665] mb-4">
        Frequently Asked Questions
      </p>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2F2A26]">
        Granny Flat FAQs
      </h2>

      <p className="mt-5 max-w-2xl mx-auto text-[#6F665F] leading-relaxed">
        Everything you need to know about designing and building a
        granny flat with Backyard Nest.
      </p>
    </motion.div>

    {/* FAQ Items */}
    <div className="space-y-4">

      <details className="group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden">
        <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none">
          <span>Do I need council approval for a granny flat in Melbourne?</span>

          <span className="ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="px-6 pb-6 text-[#6F665F] leading-relaxed">
          Approval requirements can vary depending on your property,
          the size and location of the granny flat, its intended use
          and other site conditions. Backyard Nest can help you
          understand the requirements for your project.
        </div>
      </details>

      <details className="group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden">
        <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none">
          <span>What can I use a granny flat for?</span>

          <span className="ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="px-6 pb-6 text-[#6F665F] leading-relaxed">
          A granny flat can provide additional space for independent
          living, family accommodation, guests or other suitable
          uses depending on your property and project requirements.
        </div>
      </details>

      <details className="group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden">
        <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none">
          <span>How much does a granny flat cost?</span>

          <span className="ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="px-6 pb-6 text-[#6F665F] leading-relaxed">
          The cost depends on factors such as the size, design,
          finishes, site conditions, services and level of
          customisation. Contact Backyard Nest for a tailored quote
          based on your requirements.
        </div>
      </details>

      <details className="group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden">
        <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none">
          <span>How long does it take to build a granny flat?</span>

          <span className="ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="px-6 pb-6 text-[#6F665F] leading-relaxed">
          Construction timelines vary depending on the design,
          approvals, site preparation and construction requirements.
          Your expected timeline can be discussed during your
          consultation.
        </div>
      </details>

      <details className="group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden">
        <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none">
          <span>Can you build a granny flat on a small backyard?</span>

          <span className="ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="px-6 pb-6 text-[#6F665F] leading-relaxed">
          Granny flats can be designed around different backyard
          sizes and site conditions. Our collection includes compact
          options designed to make efficient use of available space.
        </div>
      </details>

      <details className="group bg-white border border-[#E5DED7] rounded-2xl overflow-hidden">
        <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-medium text-[#2F2A26] list-none">
          <span>Can I customise my granny flat?</span>

          <span className="ml-4 text-2xl font-light text-[#8A7665] transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="px-6 pb-6 text-[#6F665F] leading-relaxed">
          Yes. Granny flat designs can be tailored to suit your
          space, lifestyle and requirements, including layout,
          finishes, glazing and functionality.
        </div>
      </details>

    </div>
  </div>
</section>

{/* CONSULTATION CTA */}
<section className="relative bg-[#2E2A26] text-white overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C7A77A]/10 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#C7A77A]/5 blur-3xl" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
    <div className="max-w-4xl mx-auto text-center">

      {/* Eyebrow */}
      <p className="uppercase tracking-[0.3em] text-[#C7A77A] text-xs mb-6">
        Start Your Project
      </p>

      {/* Heading */}
      <h2
        className="
          editorial-heading
          text-white
          text-[clamp(3rem,8vw,6.5rem)]
          leading-[0.9]
          tracking-[-0.04em]
        "
      >
        Let’s Create
        <br />
        <span className="text-[#C7A77A]">Something Beautiful.</span>
      </h2>

      {/* Description */}
      <p className="mt-8 text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        Have a backyard project in mind? Talk to our team about your space,
        your vision and the possibilities for your property.
      </p>

      {/* CTA */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

        <button
          onClick={() => navigate("/contact")}
          className="
            group
            w-full sm:w-auto
            px-8 py-4
            bg-[#C7A77A]
            text-[#2E2A26]
            uppercase
            tracking-[0.22em]
            text-xs
            font-medium
            transition-all
            duration-300
            hover:bg-[#D7BE8A]
            hover:-translate-y-1
          "
        >
          Book a Consultation
          <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </button>

        <button
          onClick={() => navigate("/contact")}
          className="
            w-full sm:w-auto
            px-8 py-4
            border
            border-white/25
            text-white
            uppercase
            tracking-[0.22em]
            text-xs
            transition-all
            duration-300
            hover:bg-white
            hover:text-[#2E2A26]
          "
        >
          Enquire Now
        </button>

      </div>

      {/* Small supporting text */}
      <p className="mt-8 text-white/35 text-xs tracking-wide">
        No pressure. Just a conversation about what’s possible.
      </p>

    </div>
  </div>
</section>
    </div>
  );
}