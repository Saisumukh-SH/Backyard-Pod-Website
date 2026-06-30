import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Home as HomeIcon,
  PencilRuler,
  Hammer,
  TrendingUp,
} from "lucide-react";

import { AnimatePresence, motion } from "motion/react";
import ImageWithWatermark from "../ImageWithWatermark";
import SEO from "../SEO";

export function Home() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* HERO GALLERY IMAGES */
  const desktopImages = [
    "/images/studio/studyNook/study_nook_timber.webp",
    "/images/grannyflat/grannyflatexmp/granny_flats_hero.webp",
    "/images/studio/studio1/studio1.1.webp",
    "/images/studio/studio2/studio2.1.webp",
    "/images/studio/studio3/studio3.webp",
  ];

  const mobileImages = [
    "/images/studio/studio1/mobile/studio1.m.webp",
    "/images/studio/studio2/mobile/studio2.m.webp",
    "/images/studio/studio3/mobile/studio3.m.webp",
    "/images/studio/studyNook/mobile/studyNook.m.webp",
  ];

  const images = isMobile ? mobileImages : desktopImages;

  /* PROJECT EXPLORER DATA */
  const projectCategories = [
    {
      id: 0,
      category: "Studios",
      title: "Backyard Studios",
      location: "Melbourne",
      image: "/images/studio/studio3/studio3.2.webp",
      link: "/products?category=studio",
    },
    {
      id: 1,
      category: "Granny Flats",
      title: "Granny Flat",
      location: "Melbourne",
      image: "/images/granny_flats_hero.webp",
      link: "/products?category=granny-flat",
    },
  ];

  /* PROCESS STEPS DATA */
  const processSteps = [
    {
      number: "01",
      title: "Discovery Consultation",
      description:
        "We discuss your goals, budget and property requirements.",
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "Our design team creates a tailored concept that complements your home, maximises your space and reflects your personal style.",
    },
    {
      number: "03",
      title: "Permits & Approvals",
      description:
        "We manage planning and building approvals where required, helping make the process straightforward and stress free.",
    },
    {
      number: "04",
      title: "Construction",
      description:
        "Built by experienced professionals using premium materials, every project is completed with precision, quality and lasting craftsmanship.",
    },
    {
      number: "05",
      title: "Handover",
      description:
        "Step into your new backyard space with confidence, knowing every detail has been finished to the highest standards.",
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
    <>
    <SEO
        title="Backyard Nest | Premium Backyard studios, Studios & Granny Flats Melbourne"
        description="Premium backyard studios, home studios and granny flats designed and built across Melbourne and Victoria."
        url="https://backyardnest.com.au/"
      />

    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-[85vh] min-h-[620px] lg:h-screen overflow-hidden">
        {/* Background Slideshow */}
        {images.map((img, i) => (
          <div
            key={i}
            onContextMenu={(e) => e.preventDefault()}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          </div>
        ))}

        {/* Minimal Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

       {/* Hero Content */}
<div className="absolute inset-0 flex items-end">
  <div className="w-full pb-24 md:pb-24 lg:pb-28">
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
      <div className="max-w-5xl">

        {/* Eyebrow */}
        <p className="uppercase tracking-[0.35em] text-white/70 text-[10px] sm:text-xs md:text-sm mb-6">
          Backyard Studios & Granny Flats Melbourne
        </p>

        {/* Heading */}
        <h1
          className="
            editorial-heading
            text-white
            text-[clamp(2.8rem,11vw,8rem)]
            leading-[0.88]
            tracking-[-0.05em]
          "
        >
          SMARTER SPACES.
          <br />
          BETTER LIVING.
        </h1>

        {/* NEW SEO SUBHEADING */}
        <p
  className="
    mt-8
    text-[#D6B88C]
    uppercase
    tracking-[0.25em]
    text-xs
    md:text-sm
    font-medium
  "
>
  Custom Designed Backyard Spaces Built For Modern Living
</p>

        {/* Divider */}
        <div className="w-20 h-px bg-[#C7A77A] mt-8 mb-8" />

        {/* Paragraph 1 */}
        <p
          className="
            max-w-3xl
            text-white/85
            text-base
            md:text-lg
            leading-relaxed
          "
        >
          Create extra space without moving. Backyard Nest designs and builds premium backyard studios, granny flats, home offices and garden retreats across Melbourne and Victoria.
        </p>

        {/* CTA */}
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
            transition-all
            duration-300
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
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5">
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-y-6 gap-x-4 md:gap-12 text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/70 text-center">
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
<section className="bg-[#F5F0EB] py-28 lg:py-36 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-5xl mx-auto"
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
    leading-[0.95]
    tracking-[-0.03em]
    transition-all
    duration-700
    hover:tracking-[-0.02em]
  "
>
        More Than Just
        <br />
        Extra Space.
      </h2>
    </motion.div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-20 grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start"
    >
      {/* Left */}
      <div>
        <p className="uppercase tracking-[0.3em] text-[#8B7E74] text-xs mb-6">
          Why Homeowners Trust Backyard Nest
        </p>

       <ul className="space-y-4">
  {[
    "Custom Designs for Every Property",
    "Sloping & Challenging Site Specialists",
    "Council Permit & Approval Management",
    "Heritage Overlay Expertise",
    "Premium Australian Materials",
    "Transparent Fixed Price Quotes",
    "Complete Turnkey Delivery",
  ].map((item) => (
    <li
      key={item}
      className="
        group
        flex
        items-center
        justify-between
        border-b
        border-[#DED6CF]
        py-5
        cursor-pointer
        transition-all
        duration-500
        hover:border-[#C7A77A]
        hover:pl-4
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            w-2.5
            h-2.5
            rounded-full
            bg-[#C7A77A]
            transition-all
            duration-500
            group-hover:scale-150
            group-hover:shadow-[0_0_20px_rgba(199,167,122,.45)]
          "
        />

        <span
          className="
            text-[#2E2A26]
            text-xl
            transition-all
            duration-500
            group-hover:text-[#B89463]
          "
        >
          {item}
        </span>
      </div>
    </li>
  ))}
</ul>
      </div>

      {/* Right */}
      <div className="space-y-8">

        <p
  className="
    text-[#5F5A55]
    text-xl
    leading-relaxed
    rounded-3xl
    p-8
    transition-all
    duration-500
    hover:bg-white/70
    hover:shadow-xl
    hover:-translate-y-1
  "
>
          At Backyard Nest, we help homeowners unlock the full potential of their property with architecturally designed backyard studios, granny flats and multipurpose living spaces that blend seamlessly with their home and lifestyle.
        </p>

        <p
  className="
    text-[#5F5A55]
    text-xl
    leading-relaxed
    rounded-3xl
    p-8
    transition-all
    duration-500
    hover:bg-white/70
    hover:shadow-xl
    hover:-translate-y-1
  "
>
          Whether you're creating a home office, private retreat, guest accommodation, rental investment or space for a growing family, our experienced team manages every stage from concept and approvals through to construction and handover.
        </p>

        <p
  className="
    text-[#5F5A55]
    text-xl
    leading-relaxed
    rounded-3xl
    p-8
    transition-all
    duration-500
    hover:bg-white/70
    hover:shadow-xl
    hover:-translate-y-1
  "
>
          Every Backyard Nest project is thoughtfully designed for Melbourne's climate, local council requirements and the unique characteristics of your property, delivering beautiful spaces built to last.
        </p>

      </div>
    </motion.div>
  </div>
</section>

      {/* PROJECT EXPLORER */}
      <section className="bg-[#F5F0EB] py-20 lg:py-32 overflow-hidden">
        <div className="max-w-[1700px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] items-center gap-8 lg:gap-16">
            {/* LEFT PANEL */}
            <div
              className="
          order-1
          lg:order-1
          flex
          flex-col
          justify-center
          px-6
          lg:px-20
        "
            >
              <p className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-8 lg:mb-16">
                Explore Spaces
              </p>

              {/* MOBILE CATEGORY SELECTOR */}
              <div className="lg:hidden mb-1">
                <div
                  className="
              flex
              gap-8
              overflow-x-auto
              hide-scrollbar
              pb-2
            "
                >
                  {projectCategories.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => setActiveProject(index)}
                      className={`
                  flex-shrink-0
                  pb-3
                  text-2xl
                  transition-all
                  duration-300
                  ${
                    activeProject === index
                      ? "text-[#2E2A26] border-b border-[#C7A77A]"
                      : "text-[#B8ADA2]"
                  }
                `}
                    >
                      {project.category}
                    </button>
                  ))}
                </div>
              </div>

              {/* DESKTOP CATEGORY SELECTOR */}
              <div className="hidden lg:block space-y-1">
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

              {/* ACTIVE PROJECT DETAILS */}
              <div className="mt-4 lg:mt-24">
                <div
                  className="
              bg-white/50
              backdrop-blur-sm
              border
              border-[#C7A77A]/10
              p-6
              lg:p-0
              lg:bg-transparent
              lg:border-0
            "
                >
                  <div className="w-16 h-px bg-[#C7A77A] mb-8" />

                  <p className="uppercase tracking-[0.25em] text-[#A08E7C] text-xs mb-4">
                    Collection
                  </p>

                  <h3
                    className="
                editorial-heading
                text-[#2E2A26]
                text-3xl
                md:text-5xl
                mb-4
              "
                  >
                    {projectCategories[activeProject].title}
                  </h3>

                  <p className="text-[#8B7E74] text-base md:text-lg">
                    {projectCategories[activeProject].location}
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
            </div>

            {/* IMAGE PANEL */}
            <div
              onClick={() => navigate(projectCategories[activeProject].link)}
              className="
          order-2
          lg:order-2
          cursor-pointer
          relative
          overflow-hidden
          rounded-[20px]
          h-[260px]
          sm:h-[360px]
          md:h-[500px]
          lg:h-[580px]
          xl:h-[650px]
          mx-6
          lg:mx-0
          lg:mr-16
        "
            >
              <div className="absolute inset-0 bg-[#C7A77A]/5 z-10 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
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
                  className="absolute inset-0"
                >
                  <ImageWithWatermark
                    src={projectCategories[activeProject].image}
                    alt={projectCategories[activeProject].title}
                    className="w-full h-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

{/* OUR SERVICES */}
<section className="bg-[#F5F0EB] py-24 lg:py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto mb-20"
    >
      <p className="uppercase tracking-[0.3em] text-[#8B7E74] text-xs mb-6">
        Our Services
      </p>

      <h2
        className="
          editorial-heading
          text-[#2E2A26]
          text-5xl
          md:text-7xl
          leading-[0.95]
          tracking-[-0.03em]
        "
      >
        Premium Backyard Spaces
        <br />
        For Every Lifestyle
      </h2>
    </motion.div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

      {[
        {
          number: "01",
          title: "Backyard Studios",
          description:
            "Perfect for home offices, creative spaces, gyms and personal retreats.",
        },
        {
          number: "02",
          title: "Granny Flats",
          description:
            "Fully self contained living spaces designed for family members, guests or investment opportunities.",
        },
        {
          number: "03",
          title: "Garden Studios",
          description:
            "A stylish extension of your home that blends seamlessly with your outdoor environment.",
        },
        {
          number: "04",
          title: "Backyard Office Pods",
          description:
            "Create a productive work environment without sacrificing space inside your home.",
        },
        {
          number: "05",
          title: "Teenage Retreats",
          description:
            "Give growing families the additional space they need while maintaining privacy and comfort.",
        },
        {
          number: "06",
          title: "Multi Purpose Studios",
          description:
            "Flexible spaces designed around your unique lifestyle requirements.",
        },
      ].map((service, index) => (
        <motion.div
          key={service.number}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
          }}
          className="
            group
            relative
            bg-white/70
            backdrop-blur-sm
            rounded-[32px]
            border
            border-[#E6DDD4]
            p-8
            min-h-[320px]
            overflow-hidden
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-[#C7A77A]
            hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]
          "
        >

          {/* Background Number */}
          <div
            className="
              absolute
              -right-5
              -top-8
              text-[120px]
              font-serif
              leading-none
              text-[#F0E8DF]
              transition-all
              duration-700
              group-hover:scale-110
              group-hover:text-[#E6D7C3]
            "
          >
            {service.number}
          </div>

          <div className="relative z-10 h-full flex flex-col">

            {/* Small Number */}
            <span
              className="
                text-[#C7A77A]
                uppercase
                tracking-[0.25em]
                text-xs
                mb-6
              "
            >
              {service.number}
            </span>

            {/* Title */}
            <h3
              className="
                font-serif
                text-3xl
                text-[#2E2A26]
                mb-6
                transition-colors
                duration-500
                group-hover:text-[#B89463]
              "
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className="
                text-[#5F5A55]
                leading-relaxed
                text-lg
                flex-grow
              "
            >
              {service.description}
            </p>

          </div>

        </motion.div>
      ))}

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
                From Concept
                <br />
                To Completion.
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
                      activeStep === index ? "text-[#C7A77A]" : "text-[#B8ADA2]"
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
                  <source src="/videos/process.mp4" type="video/mp4" />
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
              <p className="text-[#C7A77A] text-6xl mb-4">50+</p>
              <p className="text-[#2E2A26] text-xl mb-2">Projects Delivered</p>
              <p className="text-[#8B7E74]">
                Backyard spaces completed across Victoria.
              </p>
            </div>

            <div>
              <p className="text-[#C7A77A] text-6xl mb-4">10+</p>
              <p className="text-[#2E2A26] text-xl mb-2">Years Experience</p>
              <p className="text-[#8B7E74]">
                Designing spaces for modern living.
              </p>
            </div>

            <div>
              <p className="text-[#C7A77A] text-6xl mb-4">98%</p>
              <p className="text-[#2E2A26] text-xl mb-2">Client Satisfaction</p>
              <p className="text-[#8B7E74]">
                Built on referrals and repeat customers.
              </p>
            </div>

            <div>
              <p className="text-[#C7A77A] text-6xl mb-4">100%</p>
              <p className="text-[#2E2A26] text-xl mb-2">Australian Built</p>
              <p className="text-[#8B7E74]">
                Quality materials and local craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative h-[80vh] overflow-hidden">
        <div
          onContextMenu={(e) => e.preventDefault()}
          className="
    absolute
    inset-0
    bg-cover
    bg-center
    bg-no-repeat
  "
          style={{
            backgroundImage: `url(${
              window.innerWidth < 768
                ? "/images/studio/studyNook/mobile/studyNook.m.webp"
                : "/images/studio/studyNook/study_nook_timber.webp"
            })`,
          }}
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
<footer className="bg-[#1E1E1C] text-white border-t border-white/10">
  <div className="max-w-7xl mx-auto px-10 pt-24">

    {/* TOP SECTION */}
    <div className="grid md:grid-cols-3 gap-20">

      {/* BRAND */}
      <div>
        <Link
  to="/"
  className="group inline-flex items-center gap-4 mb-6"
>
  <img
    src="/images/logo/final.webp"
    alt="Backyard Nest"
    draggable={false}
    onDragStart={(e) => e.preventDefault()}
    onContextMenu={(e) => e.preventDefault()}
    className="h-10 w-auto shrink-0 opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
  />

  <span className="font-serif text-[2rem] leading-none text-white transition-colors duration-300 group-hover:text-[#C7A77A]">
    Backyard Nest.
  </span>
</Link>

        <p className="text-white/60 mb-6 leading-relaxed max-w-sm">
          Beautifully designed backyard studios and granny flats for modern
          Australian living. Built with precision, delivered with care.
        </p>

        <div className="text-white/60 space-y-2">
          <p>build@backyardnest.com.au</p>
          <p>07 3000 0000</p>
        </div>
      </div>

      {/* PRODUCTS */}
      <div>
        <h4 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
          Products
        </h4>

        <ul className="space-y-3 text-white/70">
          <li>
            <Link
              to="/products/studio"
              className="hover:text-white transition"
            >
              Backyard Studio
            </Link>
          </li>

          <li>
            <Link
              to="/products/granny"
              className="hover:text-white transition"
            >
              Granny Flats
            </Link>
          </li>
        </ul>
      </div>

      {/* COMPANY */}
      <div>
        <h4 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">
          Company
        </h4>

        <ul className="space-y-3 text-white/70">
          <li>
            <Link
              to="/about"
              className="hover:text-white transition"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-white transition"
            >
              Contact Us
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              className="hover:text-white transition"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>

    </div>

{/* INDUSTRY ACCREDITATIONS */}
<div className="mt-10 lg:mt-14 pt-8 border-t border-white/10">
  <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-10 items-center">

    {/* Left Content */}
    <div className="text-center lg:text-left mx-auto lg:mx-0">
      <h4 className="uppercase tracking-[0.28em] text-xs text-[#C7A77A] mb-3">
        Industry Accreditations
      </h4>

      <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
        Proudly accredited and working alongside recognised industry
        leaders, ensuring every project meets Australia's highest
        standards.
      </p>
    </div>

    {/* Logos */}
    <div className="grid grid-cols-2 lg:flex lg:justify-end items-center gap-5 md:gap-6 lg:gap-10">

      {/* MASTER BUILDERS */}
      <div className="group relative flex flex-col items-center rounded-2xl px-2 md:px-4 lg:px-6 py-3 lg:py-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]">

        <div className="w-full max-w-[170px] sm:max-w-[220px] lg:w-80 h-20 sm:h-24 lg:h-28 flex items-center justify-center">
          <img
            src="/images/partners/Master-Builders-Victoria-Master-Builder.webp"
            alt="Master Builders Victoria"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-full object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        </div>

        <span className="absolute bottom-0 left-1/2 h-px w-0 bg-[#C7A77A] transition-all duration-500 group-hover:w-20 group-hover:-translate-x-1/2" />

        <p className="hidden lg:block mt-3 text-[10px] uppercase tracking-[0.25em] text-white/0 group-hover:text-white/45 transition-all duration-500">
          Master Builders Victoria
        </p>

      </div>

      {/* MELBOURNE BOUTIQUE HOMES */}
      <div className="group relative flex flex-col items-center rounded-2xl px-2 md:px-4 lg:px-6 py-3 lg:py-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]">

        <div className="w-full max-w-[170px] sm:max-w-[220px] lg:w-80 h-20 sm:h-24 lg:h-28 flex items-center justify-center">
          <img
            src="/images/partners/melbourne-boutique-homes.webp"
            alt="Melbourne Boutique Homes"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-full object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        </div>

        <span className="absolute bottom-0 left-1/2 h-px w-0 bg-[#C7A77A] transition-all duration-500 group-hover:w-20 group-hover:-translate-x-1/2" />

        <p className="hidden lg:block mt-3 text-[10px] uppercase tracking-[0.25em] text-white/0 group-hover:text-white/45 transition-all duration-500">
          Melbourne Boutique Homes
        </p>

      </div>

      {/* AMS BUILD */}
      <div className="group relative col-span-2 lg:col-span-1 flex flex-col items-center rounded-2xl px-2 md:px-4 lg:px-6 py-3 lg:py-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]">

        <div className="w-32 sm:w-40 lg:w-52 h-40 sm:h-52 lg:h-72 flex items-center justify-center">
          <img
            src="/images/partners/ams-build.webp"
            alt="AMS Build"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-full object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        </div>

        <span className="absolute bottom-0 left-1/2 h-px w-0 bg-[#C7A77A] transition-all duration-500 group-hover:w-20 group-hover:-translate-x-1/2" />

        <p className="hidden lg:block mt-3 text-[10px] uppercase tracking-[0.25em] text-white/0 group-hover:text-white/45 transition-all duration-500">
          AMS Build
        </p>

      </div>

    </div>

  </div>
</div>

    {/* BOTTOM BAR */}
    <div className="flex flex-col md:flex-row justify-between items-center mt-20 py-8 border-t border-white/10">

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

  </div>
</footer>
    </div>
    </>
  );
}
