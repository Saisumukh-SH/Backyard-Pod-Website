import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ImageWithWatermark from "../ImageWithWatermark";
import SEO from "../SEO";

import StudioSEOCard from "../StudioSEOCard";
import GrannySEOCard from "../GrannySEOCard";

import {
  BriefcaseBusiness,
  Palette,
  Dumbbell,
  Paintbrush,
  BedDouble,
  House,
  LayoutGrid,
  Sparkles,
  Leaf,
  RefreshCw,
} from "lucide-react";

const categories = [
  {
    id: "studio",
    tag: "Work • Create • Retreat",
    title: "Backyard Studios",
    description:
      "Purpose-built backyard spaces for focused work, creative pursuits and quiet retreat. Create a dedicated office, studio or personal sanctuary without extending your home.",
    image: "/images/studio/studio1/mobile/studio1.m.webp",
    from: "$71,090",
  },

  {
    id: "granny",
    tag: "Live • Host • Earn",
    title: "Granny Flats",
    description:
      "Fully self contained living spaces designed for family, guests and rental income. A smart way to add flexibility and value to your property.",
    image: "/images/granny_flats_hero.webp",
    from: "$169,998",
  },
];


export default function Products() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#F5F0EB]">
      <SEO
        title="Project Gallery | Backyard Nest"
        description="Explore completed backyard studios, granny flats and studio projects across Melbourne."
        url="https://backyardnest.com.au/gallery"
      />

      {/* HERO */}

      <section className="min-h-[85vh] lg:h-screen flex items-center pt-24 lg:pt-0">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-8"
          >
            Backyard Studios & Granny Flats Melbourne
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
        editorial-heading
        text-[#2E2A26]
        text-[clamp(3.2rem,12vw,8rem)]
        leading-[0.92]
        tracking-[-0.05em]
        max-w-5xl
      "
          >
            Spaces Designed
            <br />
            For Modern Living.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
        mt-8
        text-[#5F5A55]
        text-base
        md:text-lg
        leading-relaxed
        max-w-2xl
      "
          >
            Explore our collection of architecturally designed backyard studios,
            granny flats and garden retreats that combine style, functionality and
            long term value.
          </motion.p>

        </div>
      </section>


{/* CATEGORY SECTIONS */}

{categories.map((category, index) => (
  <section
    key={category.id}
    className="py-16 lg:py-24"
  >
    <div className="max-w-[1700px] mx-auto w-full px-6 lg:px-7">

      <div
        onClick={() => navigate(`/products/${category.id}`)}
        className={`
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-16
          items-center
          cursor-pointer
          group
          ${
            index % 2 === 1
              ? "lg:[&>*:first-child]:order-2"
              : ""
          }
        `}
      >

        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            overflow-hidden
            rounded-[24px]
            h-[400px]
            sm:h-[450px]
            lg:h-[90vh]
          "
        >
          <ImageWithWatermark
            src={category.image}
            alt={category.title}
            className="
              w-full
              h-full
              transition-all
              duration-1000
              group-hover:scale-105
            "
          />
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p
            className="
              uppercase
              tracking-[0.25em]
              text-[#A08E7C]
              text-xs
              mb-2
            "
          >
            {category.tag}
          </p>

          <h2
            className="
              editorial-heading
              text-[#2E2A26]
              text-[clamp(2.8rem,10vw,5rem)]
              leading-[0.95]
              tracking-[-0.05em]
              mb-1
              transition-all
              duration-500
              group-hover:text-[#C7A77A]
            "
          >
            {category.title}
          </h2>

          <div className="w-16 h-px bg-[#C7A77A] mb-1" />

          {/* SEO CARDS */}

          {category.id === "studio" && (
  <StudioSEOCard
    price={category.from}
    onExplore={() => navigate(`/products/${category.id}`)}
  />
)}

          {category.id === "granny" && (
            <GrannySEOCard
            price={category.from}
    onExplore={() => navigate(`/products/${category.id}`)} />
          )}

        </motion.div>

      </div>

    </div>
  </section>
))}

{/* PRODUCT INTRO */ }

<section className="relative bg-[#F5F0EB] py-24 lg:py-32 overflow-hidden">

  {/* Background Accent */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -right-32 top-0 text-[380px] font-serif text-[#ECE3DA] leading-none">
      BN
    </div>
  </div>

  <div className="relative max-w-7xl mx-auto px-8 lg:px-16">

    <div className="grid lg:grid-cols-[34%_66%] gap-16 items-start">

      {/* LEFT COLUMN */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:sticky lg:top-28"
      >
        <p className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-6">
          Premium Backyard Spaces
        </p>

        <h2
          className="
            editorial-heading
            text-[#2E2A26]
            text-5xl
            md:text-6xl
            leading-[0.95]
            transition-all
            duration-700
            hover:tracking-[-0.02em]
          "
        >
          Designed Around
          <br />
          The Way You Live.
        </h2>

        <div className="w-20 h-[2px] bg-[#C7A77A] mt-10 transition-all duration-500 hover:w-32" />
      </motion.div>

      {/* RIGHT COLUMN */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >

        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[#DED6CF]" />

        <div className="space-y-8">

          {[
            "At Backyard Nest, we create architecturally designed backyard studios, granny flats and garden retreats that help Melbourne homeowners unlock the full potential of their property.",

            "Whether you're looking for a dedicated home office, guest accommodation, teenage retreat, creative studio or independent living space, our collection offers thoughtfully designed solutions that combine style, functionality and long term value.",

            "Every Backyard Nest space is designed to complement your home, maximise available space and meet Victorian building requirements. From compact backyard studio to fully self contained granny flats, our designs can be customised to suit your lifestyle, budget and site conditions.",
          ].map((text, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                relative
                ml-10
                rounded-[30px]
                bg-white/55
                backdrop-blur-sm
                border
                border-[#E8DED3]
                p-6
                transition-all
                duration-500
                hover:border-[#C7A77A]
                hover:bg-white
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]
              "
            >

              {/* Timeline Dot */}

              <div
                className="
                  absolute
                  -left-[42px]
                  top-10
                  w-4
                  h-4
                  rounded-full
                  bg-[#C7A77A]
                  border-4
                  border-[#F5F0EB]
                  transition-all
                  duration-500
                  group-hover:scale-150
                "
              />

              {/* Paragraph */}

              <p
                className="
                  text-[#5F5A55]
                  text-lg
                  leading-relaxed
                  transition-colors
                  duration-500
                  group-hover:text-[#2E2A26]
                "
              >
                {text}
              </p>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* FINAL CTA */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="py-24 lg:py-36 bg-[#FBF8F4]"
>

  <div className="max-w-5xl mx-auto px-6">

    <motion.div
      whileHover={{ width: 120 }}
      transition={{ duration: 0.4 }}
      className="w-20 h-px bg-[#C7A77A] mx-auto mb-10"
    />

    <p className="uppercase tracking-[0.35em] text-[#A08E7C] text-xs text-center mb-6">
      Backyard Studios & Granny Flats Melbourne
    </p>

    <h2
      className="
        editorial-heading
        text-[#2E2A26]
        text-center
        text-[clamp(2.8rem,10vw,7rem)]
        leading-[0.95]
      "
    >
      Let's Create Your
      <br />
      Perfect Backyard Space.
    </h2>

    <p
      className="
        mt-8
        text-[#5F5A55]
        text-base
        md:text-lg
        leading-relaxed
        max-w-3xl
        mx-auto
        text-center
      "
    >
      Whether you're planning a <strong>backyard studio</strong>, <strong>granny flat</strong>, <strong>home office</strong> or <strong>custom garden retreat</strong>, our experienced team is here to help bring your vision to life with beautifully designed spaces tailored to your property, lifestyle and budget.
    </p>

    <p
      className="
        mt-5
        text-[#5F5A55]
        text-base
        md:text-lg
        leading-relaxed
        max-w-3xl
        mx-auto
        text-center
      "
    >
      Backyard Nest proudly designs and builds premium <strong>backyard studios</strong> and <strong>granny flats</strong> across <strong>Melbourne</strong> and regional <strong>Victoria</strong>, including <strong>Geelong</strong>, <strong>Mornington Peninsula</strong>, <strong>Ballarat</strong>, <strong>Bendigo</strong>, the <strong>Eastern Suburbs</strong>, <strong>Northern Suburbs</strong>, <strong>Western Suburbs</strong> and <strong>South Eastern Melbourne</strong>.
    </p>

    {/* SERVICE AREAS */}

    <div className="flex flex-wrap justify-center gap-3 mt-12">

      {[
        "Melbourne",
        "Geelong",
        "Mornington Peninsula",
        "Ballarat",
        "Bendigo",
        "Eastern",
        "Northern",
        "Western",
        "South East",
      ].map((location) => (

        <motion.div
          key={location}
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
          transition={{ duration: 0.25 }}
          className="
            px-5
            py-2.5
            rounded-full
            border
            border-[#D8C7AF]
            bg-white
            text-[#5F5A55]
            text-sm
            cursor-default
            hover:border-[#C7A77A]
            hover:text-[#2E2A26]
            hover:shadow-lg
          "
        >
          {location}
        </motion.div>

      ))}

    </div>

    {/* CTA CARD */}

    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        mt-16
        rounded-[32px]
        border
        border-[#E6DDD4]
        bg-white
        p-10
        shadow-sm
      "
    >

      <h3
        className="
          editorial-heading
          text-[#2E2A26]
          text-3xl
          md:text-4xl
          text-center
          mb-4
        "
      >
        Ready To Get Started?
      </h3>

      <p
        className="
          text-[#5F5A55]
          text-center
          max-w-2xl
          mx-auto
          leading-relaxed
        "
      >
        Book a free consultation and let our team help you design the perfect backyard studio or granny flat for your property.
      </p>

      <div className="flex justify-center mt-10">

        <motion.button
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/contact")}
          className="
            group
            inline-flex
            items-center
            gap-4
            rounded-full
            bg-[#2E2A26]
            px-10
            py-5
            text-white
            text-sm
            uppercase
            tracking-[0.2em]
            transition-all
            duration-300
            hover:bg-[#C7A77A]
            hover:shadow-xl
          "
        >
          Book Consultation

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />

        </motion.button>

      </div>

    </motion.div>

  </div>

</motion.section>

    </main >
  );
}