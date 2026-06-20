import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Home as HomeIcon,
  PencilRuler,
  Hammer,
  TrendingUp,
} from "lucide-react";

import { AnimatePresence, motion } from "motion/react";

export function Home() {
  const navigate = useNavigate();

  /* HERO GALLERY IMAGES */
  const images = [
    "/images/studio/studyNook/study_nook_timber.webp",
    "/images/grannyflat/grannyflatexmp/granny_flats_hero.webp",
    "/images/studio/officeStudio/office_studio_navy.webp",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
  ];

  /* PROJECT EXPLORER DATA */
  const projectCategories = [
    {
      id: 0,
      category: "Studios",
      title: "Garden Nook",
      location: "Melbourne",
      size: "28m²",
      image: "/images/study_nook_hero.webp",
      link: "/products?category=studio",
    },
    {
      id: 1,
      category: "Granny Flats",
      title: "Granny Flat",
      location: "Melbourne",
      size: "45m²",
      image: "/images/granny_flats_hero.webp",
      link: "/products?category=granny-flat",
    },
  ];

  /* PROCESS STEPS DATA */
const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Share your vision, property details and how you intend to use the space.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Choose a design that complements your home and customise it to suit your lifestyle.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team manages approvals, manufacturing and installation from start to finish.",
  },
  {
    number: "04",
    title: "Enjoy",
    description:
      "Move into your new space and start enjoying the flexibility it brings.",
  },
];

  const [activeProject, setActiveProject] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slideshow */}
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-in-out ${
              i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            alt=""
          />
        ))}

        {/* Minimal Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full pb-20 md:pb-24 lg:pb-28">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
              <div className="max-w-4xl">
                <p className="uppercase tracking-[0.35em] text-white/70 text-xs md:text-sm mb-8">
                  Designed For Modern Australian Living
                </p>

                <h1
                  className="
              editorial-heading
              text-white
              text-[clamp(4rem,8vw,8rem)]
              leading-[0.88]
              tracking-[-0.05em]
            "
                >
                  SMARTER SPACES.
                  <br />
                  BETTER LIVING.
                  <br />
                </h1>

                <p className="mt-8 max-w-xl text-white/80 text-lg md:text-xl leading-relaxed">
                  Architecturally designed backyard pods, studios and granny
                  flats crafted to create more space for work, family and life.
                </p>

                <button
                  onClick={() => navigate("/products")}
                  className="
              mt-10
              text-white
              uppercase
              text-xs
              tracking-[0.25em]
              border-b
              border-white
              pb-2
              hover:opacity-70
              transition-opacity
            "
                >
                  Explore Projects →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Indicator */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[11px] md:text-xs uppercase tracking-[0.25em] text-white/70">
              <span>Architecturally Designed</span>

              <span className="hidden md:block">•</span>

              <span>Council Compliant</span>

              <span className="hidden md:block">•</span>

              <span>Built In Victoria</span>

              <span className="hidden md:block">•</span>

              <span>Premium Materials</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BACKYARD NEST */}
      <section className="bg-[#F5F0EB] py-28 md:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="uppercase tracking-[0.3em] text-[#8B7E74] text-xs mb-6">
              Why Backyard Nest
            </p>

            <h2
              className="
          editorial-heading
          text-[#2E2A26]
          text-5xl
          md:text-7xl
          leading-[1]
          tracking-[-0.03em]
          mb-8
        "
            >
              More Than Just
              <br />
              Extra Space.
            </h2>

            <p className="text-[#5F5A55] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Thoughtfully designed backyard pods, studios and granny flats that
              create room for work, family, creativity and growth — while adding
              lasting value to your property.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-20 mt-24">
            {[
              {
                number: "01",
                title: "Designed For Real Living",
                icon: HomeIcon,
                text: "Flexible spaces designed around the way modern Australians live, work and grow — from home offices and creative studios to guest retreats and family accommodation.",
              },
              {
                number: "02",
                title: "Architectural Design",
                icon: PencilRuler,
                text: "Contemporary architecture carefully crafted to complement your existing home while enhancing the overall character of your property.",
              },
              {
                number: "03",
                title: "Streamlined Delivery",
                icon: Hammer,
                text: "From initial consultation through to installation, our process is designed to minimise delays and deliver a smooth experience.",
              },
              {
                number: "04",
                title: "Long-Term Value",
                icon: TrendingUp,
                text: "Beautifully designed backyard spaces that improve functionality, lifestyle and long-term property appeal.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                  }}
                  className="
              relative
              group
              transition-all
              duration-500
              hover:-translate-y-2
            "
                >
                  {/* Background Number */}
                  <div
                    className="
                absolute
                right-0
                -top-10
                text-[110px]
                md:text-[140px]
                font-serif
                text-[#E8DED3]
                opacity-60
                leading-none
                pointer-events-none
              "
                  >
                    {item.number}
                  </div>

                  <div className="relative flex gap-6">
                    {/* Icon */}
                    <div
                      className="
                  w-16 h-16
                  bg-[#C7A77A]
                  rounded-2xl
                  shrink-0
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  group-hover:bg-[#B89463]
                  group-hover:scale-105
                "
                    >
                      <Icon
                        className="
                    w-7 h-7
                    text-white
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3
                        className="
                    text-[#2E2A26]
                    text-3xl
                    font-serif
                    mb-4
                  "
                      >
                        {item.title}
                      </h3>

                      <p className="text-[#5F5A55] leading-relaxed max-w-lg">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT EXPLORER */}
      <section className="bg-[#F5F0EB] py-32 overflow-hidden">
        <div className="max-w-[1700px] mx-auto w-full">
          <div className="grid lg:grid-cols-[38%_62%] items-center gap-16">
            {/* LEFT PANEL */}
            <div className="flex flex-col justify-center px-8 lg:px-20">
              <p className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-16">
                Explore Spaces
              </p>

              <div className="space-y-10">
                {projectCategories.map((project, index) => (
                  <button
                    key={project.id}
                    onMouseEnter={() => setActiveProject(index)}
                    onClick={() => navigate(project.link)}
                    className="group block text-left"
                  >
                    <div className="flex items-center gap-6">
                      <h2
                        className={`
                    font-light
                    leading-none
                    tracking-[-0.05em]
                    transition-all
                    duration-500
                    text-[clamp(4rem,7vw,7rem)]
                    ${
                      activeProject === index
                        ? "text-[#2E2A26] translate-x-2"
                        : "text-[#B8ADA2]"
                    }
                  `}
                      >
                        {project.category}
                      </h2>

                      <span
                        className={`
                    transition-all
                    duration-500
                    text-3xl
                    text-[#C7A77A]
                    ${
                      activeProject === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }
                  `}
                      >
                        →
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      <div
                        className={`
                    h-px
                    bg-[#C7A77A]
                    transition-all
                    duration-500
                    ${activeProject === index ? "w-20" : "w-0"}
                  `}
                      />
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Project Details */}

              <div className="mt-24">
                <div className="w-16 h-px bg-[#C7A77A] mb-8" />

                <p className="uppercase tracking-[0.25em] text-[#A08E7C] text-xs mb-4">
                  Collection
                </p>

                <h3
                  className="
              editorial-heading
              text-[#2E2A26]
              text-4xl
              md:text-5xl
              mb-4
            "
                >
                  {projectCategories[activeProject].title}
                </h3>

                <p className="text-[#8B7E74] text-lg">
                  {projectCategories[activeProject].location}
                  {" • "}
                  {projectCategories[activeProject].size}
                </p>

                <button
                  onClick={() =>
                    navigate(projectCategories[activeProject].link)
                  }
                  className="
              mt-8
              uppercase
              tracking-[0.25em]
              text-xs
              text-[#2E2A26]
              border-b
              border-[#C7A77A]
              pb-2
              hover:opacity-70
              transition-opacity
            "
                >
                  Explore Collection →
                </button>
              </div>
            </div>

            {/* RIGHT PANEL */}

            <div
              onClick={() => navigate(projectCategories[activeProject].link)}
              className="
          cursor-pointer
          relative
          overflow-hidden
          rounded-[20px]
          h-[580px]
          xl:h-[650px]
          mr-8
          lg:mr-16
        "
            >
              {/* Warm Overlay */}
              <div className="absolute inset-0 bg-[#C7A77A]/5 z-10 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProject}
                  src={projectCategories[activeProject].image}
                  alt={projectCategories[activeProject].title}
                  initial={{
                    opacity: 0,
                    scale: 1.05,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

{/* OUR PROCESS */}
<section className="bg-[#F5F0EB] py-32 overflow-hidden">

  <div className="max-w-[1700px] mx-auto">

    <div className="grid lg:grid-cols-[40%_60%] gap-20 items-center">

      {/* LEFT */}

      <div className="px-8 lg:px-20">

        <p className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-10">
          Our Process
        </p>

        <h2
          className="
            editorial-heading
            text-[#2E2A26]
            text-5xl
            md:text-7xl
            leading-[0.95]
            mb-16
          "
        >
          From Idea
          <br />
          To Backyard.
        </h2>

        <div className="space-y-8">

          {processSteps.map((step, index) => (

            <button
              key={step.number}
              onMouseEnter={() => setActiveStep(index)}
              className="
                block
                text-left
                w-full
                group
              "
            >

              <div className="flex gap-6">

                <span
                  className={`
                    transition-all duration-500
                    ${
                      activeStep === index
                        ? "text-[#C7A77A]"
                        : "text-[#B8ADA2]"
                    }
                  `}
                >
                  {step.number}
                </span>

                <div>

                  <h3
                    className={`
                      transition-all duration-500
                      text-3xl md:text-5xl
                      tracking-[-0.04em]
                      ${
                        activeStep === index
                          ? "text-[#2E2A26]"
                          : "text-[#B8ADA2]"
                      }
                    `}
                  >
                    {step.title}
                  </h3>

                  <AnimatePresence>

                    {activeStep === index && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                      >

                        <div className="w-12 h-px bg-[#C7A77A] my-4" />

                        <p className="text-[#5F5A55] max-w-md leading-relaxed">
                          {step.description}
                        </p>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

              </div>

            </button>

          ))}

        </div>

      </div>

      {/* VIDEO */}

      <div className="pr-8 lg:pr-20">

        <div
          className="
            overflow-hidden
            rounded-[20px]
            h-[650px]
          "
        >

          <video
            autoPlay
            muted
            loop
            playsInline
            className="
              w-full
              h-full
              object-cover
            "
          >
            <source
              src="/videos/process.mp4"
              type="video/mp4"
            />
          </video>

        </div>

      </div>

    </div>

  </div>

</section>

{/* TRUST SECTION */}
<section className="bg-[#F5F0EB] py-40">

  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    <div className="text-center mb-24">

      <p className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-6">
        Why Homeowners Choose Us
      </p>

      <h2
        className="
          editorial-heading
          text-[#2E2A26]
          text-5xl
          md:text-7xl
          leading-[0.95]
        "
      >
        Built With
        <br />
        Confidence.
      </h2>

    </div>

    <div className="grid md:grid-cols-4 gap-12">

      <div>
        <p className="text-[#C7A77A] text-6xl mb-4">
          50+
        </p>
        <p className="text-[#2E2A26] text-xl mb-2">
          Projects Delivered
        </p>
        <p className="text-[#8B7E74]">
          Backyard spaces completed across Victoria.
        </p>
      </div>

      <div>
        <p className="text-[#C7A77A] text-6xl mb-4">
          10+
        </p>
        <p className="text-[#2E2A26] text-xl mb-2">
          Years Experience
        </p>
        <p className="text-[#8B7E74]">
          Designing spaces for modern living.
        </p>
      </div>

      <div>
        <p className="text-[#C7A77A] text-6xl mb-4">
          98%
        </p>
        <p className="text-[#2E2A26] text-xl mb-2">
          Client Satisfaction
        </p>
        <p className="text-[#8B7E74]">
          Built on referrals and repeat customers.
        </p>
      </div>

      <div>
        <p className="text-[#C7A77A] text-6xl mb-4">
          100%
        </p>
        <p className="text-[#2E2A26] text-xl mb-2">
          Australian Built
        </p>
        <p className="text-[#8B7E74]">
          Quality materials and local craftsmanship.
        </p>
      </div>

    </div>

  </div>

</section>

{/* FINAL CTA */}
<section className="relative h-[80vh] overflow-hidden">

  {/* Background Image */}

  <img
    src="/images/study_nook_hero.webp"
    alt="Backyard Nest"
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
    "
  />

  {/* Overlay */}

  <div
    className="
      absolute
      inset-0
      bg-black/45
    "
  />

  {/* Content */}

  <div
    className="
      relative
      z-10
      h-full
      flex
      items-center
      justify-center
      text-center
      px-6
    "
  >

    <div>

      <p
        className="
          uppercase
          tracking-[0.3em]
          text-white/70
          text-xs
          mb-8
        "
      >
        Start Your Journey
      </p>

      <h2
        className="
          editorial-heading
          text-white
          text-5xl
          md:text-8xl
          leading-[0.95]
          tracking-[-0.04em]
          mb-10
        "
      >
        Ready To Create
        <br />
        Your Backyard Space?
      </h2>

      <div
        className="
          flex
          flex-col
          sm:flex-row
          gap-4
          justify-center
        "
      >

        <button
          onClick={() => navigate("/contact")}
          className="
            px-10
            py-4
            bg-[#C7A77A]
            text-white
            uppercase
            tracking-[0.25em]
            text-xs
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Book Consultation
        </button>

        <button
          onClick={() => navigate("/products")}
          className="
            px-10
            py-4
            border
            border-white
            text-white
            uppercase
            tracking-[0.25em]
            text-xs
            transition-all
            duration-300
            hover:bg-white
            hover:text-[#2E2A26]
          "
        >
          Explore Designs
        </button>

      </div>

    </div>

  </div>

</section>

      {/* HOME FOOTER */}
      <footer className="bg-[#1E1E1C] text-white px-10 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
          {/* BRAND */}
          <div>
            <h3 className="font-serif text-xl mb-6">
              Backyard <span className="opacity-40">|</span>Nest.
            </h3>

            <p className="text-white/60 mb-6 leading-relaxed max-w-sm">
              Beautifully designed backyard pods and granny flats for modern
              Australian living. Built with precision, delivered with care.
            </p>

            <div className="text-white/60 space-y-2">
              <p>hello@designmybackyard.com.au</p>
              <p>07 3000 0000</p>
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
              Products
            </h4>

            <ul className="space-y-3 text-white/70">
              <li className="hover:text-white transition cursor-pointer">
                Studio Pods
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Granny Flats
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
              Company
            </h4>

            <ul className="space-y-3 text-white/70">
              <li className="hover:text-white transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white transition cursor-pointer">
                FAQs
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* PARTNERSHIP */}
          <div>
            <h4 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
              Proud Partner
            </h4>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4 w-fit mb-4 hover:bg-white/10 transition">
              <img
                src="/images/Master-Builders-Victoria-Master-Builder.webp"
                alt="Master Builders Victoria"
                className="w-24 object-contain"
              />
            </div>

            <p className="text-white/60 text-sm leading-relaxed max-w-[260px]">
              Proudly working alongside Master Builders Victoria, ensuring the
              highest standards of construction quality and compliance.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            © 2026 Backyard Nest. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white transition">
              <Instagram size={16} />
            </button>

            <button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white transition">
              <Facebook size={16} />
            </button>

            <button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white transition">
              <Linkedin size={16} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
