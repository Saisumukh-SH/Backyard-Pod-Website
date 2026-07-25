import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Home,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: "Studio" | "Granny Flat";
  location: string;
  size: string;
  purpose: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Brighton",
    category: "Studio",
    location: "Brighton",
    size: "22m²",
    purpose: "Home Office",
    image: "/images/studio/studio1/studio1.1_mobile.webp",
    featured: true,
  },
  {
    id: 2,
    title: "The Vista",
    category: "Studio",
    location: "Glen Waverley",
    size: "26m²",
    purpose: "Guest Retreat",
    image: "/images/studio/studio2/studio2.1_mobile.webp",
  },
  {
    id: 3,
    title: "The Aspen",
    category: "Studio",
    location: "Camberwell",
    size: "20m²",
    purpose: "Creative Studio",
    image: "/images/studio/studio3/studio3.1_mobile.webp",
  },
  {
    id: 4,
    title: "Modern Granny Flat",
    category: "Granny Flat",
    location: "Doncaster",
    size: "60m²",
    purpose: "Family Living",
    image: "/images/grannyflat/grannyflatexmp/granny_flats_hero.webp",
  },
  {
    id: 5,
    title: "Luxury Backyard Studio",
    category: "Studio",
    location: "Toorak",
    size: "24m²",
    purpose: "Rental",
    image: "/images/studio/studio4/studio4.1_mobile.webp",
  },
  {
    id: 6,
    title: "Premium Granny Flat",
    category: "Granny Flat",
    location: "Bentleigh",
    size: "70m²",
    purpose: "Investment",
    image: "/images/studio1.webp",
  },
];

const filters = ["All", "Studio", "Granny Flat"] as const;

export default function Projects() {
  const [selectedFilter, setSelectedFilter] =
    useState<(typeof filters)[number]>("All");

  const [selectedImage, setSelectedImage] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") return projects;

    return projects.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  const featuredProject = projects.find((p) => p.featured);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = filteredProjects.findIndex(
        (p) => p.id === selectedImage.id,
      );

      if (e.key === "Escape") {
        setSelectedImage(null);
      }

      if (e.key === "ArrowRight") {
        const next =
          filteredProjects[(currentIndex + 1) % filteredProjects.length];

        setSelectedImage(next);
      }

      if (e.key === "ArrowLeft") {
        const previous =
          filteredProjects[
            (currentIndex - 1 + filteredProjects.length) %
              filteredProjects.length
          ];

        setSelectedImage(previous);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredProjects]);

  const navigate = useNavigate();

  return (
    <>
    {/* =========================
          HERO
      ========================== */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/studio/studio4/studio4.3.webp')",
          }}
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="uppercase tracking-[0.4em] text-[#C7A77A] text-sm">
                OUR PROJECTS
              </p>

              <h1 className="editorial-heading text-white text-7xl md:text-8xl mt-6 leading-none">
                Designed
                <br />
                For Modern
                <br />
                Australian Living.
              </h1>

              <div className="w-32 h-[2px] bg-[#C7A77A] mt-10" />

              <p className="mt-10 text-white/80 text-xl max-w-xl leading-relaxed">
                Explore completed backyard studios and granny flats built
                throughout Melbourne.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================
          FEATURED PROJECT
      ========================== */}

      {featuredProject && (
        <section className="bg-[#F5F0EB] py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-14">
                <p className="uppercase tracking-[0.35em] text-[#C7A77A] text-sm">
                  Featured Project
                </p>

                <h2 className="editorial-heading text-[#2E2A26] text-5xl md:text-6xl mt-4">
                  {featuredProject.title}
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image */}

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
                  onClick={() => setSelectedImage(featuredProject)}
                >
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-[600px] object-cover transition duration-700 hover:scale-110"
                  />
                </motion.div>

                {/* Content */}

                <div>
                  <span className="inline-flex px-4 py-2 rounded-full bg-[#C7A77A]/10 text-[#C7A77A] text-sm font-medium">
                    Featured Design
                  </span>

                  <h3 className="text-4xl font-semibold text-[#2E2A26] mt-8">
                    Premium craftsmanship with timeless architecture.
                  </h3>

                  <p className="mt-8 text-[#5F5A55] leading-8 text-lg">
                    Every Backyard Nest project is individually designed to
                    maximise natural light, functionality and seamless
                    integration into your outdoor space. Built with premium
                    Australian materials and exceptional attention to detail.
                  </p>

                  <div className="grid grid-cols-2 gap-8 mt-12">
                    <div>
                      <p className="text-[#9C948C] uppercase text-xs tracking-widest">
                        Location
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <MapPin size={18} className="text-[#C7A77A]" />
                        <span className="text-[#2E2A26] font-medium">
                          {featuredProject.location}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-[#9C948C] uppercase text-xs tracking-widest">
                        Size
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <Home size={18} className="text-[#C7A77A]" />
                        <span className="text-[#2E2A26] font-medium">
                          {featuredProject.size}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-[#9C948C] uppercase text-xs tracking-widest">
                        Purpose
                      </p>

                      <p className="mt-2 text-[#2E2A26] font-medium">
                        {featuredProject.purpose}
                      </p>
                    </div>

                    <div>
                      <p className="text-[#9C948C] uppercase text-xs tracking-widest">
                        Category
                      </p>

                      <p className="mt-2 text-[#2E2A26] font-medium">
                        {featuredProject.category}
                      </p>
                    </div>
                  </div>

                 <button
  onClick={() => setSelectedImage(featuredProject)}
  className="
    mt-14
    inline-flex
    items-center
    gap-3
    bg-[#2E2A26]
    text-white
    px-8
    py-4
    rounded-full
    font-medium
    cursor-pointer
    transition-all
    duration-300
    hover:bg-[#C7A77A]
    hover:text-[#2E2A26]
    hover:-translate-y-1
    hover:shadow-xl
    active:translate-y-0
  "
>
  View Project
  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* =========================
          STICKY FILTER BAR
      ========================== */}

      <section className="sticky top-0 z-40 bg-[#F5F0EB]/95 backdrop-blur-md border-y border-[#E7DFD7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-5 py-6 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-7 py-3 rounded-full transition-all duration-300 whitespace-nowrap
                  ${
                    selectedFilter === filter
                      ? "bg-[#2E2A26] text-white shadow-xl"
                      : "bg-white text-[#2E2A26] hover:bg-[#C7A77A] hover:text-white"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* =========================
          PROJECT GALLERY
      ========================== */}

      <section className="bg-[#F5F0EB] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setSelectedImage(project)}
                >
                  <div className="relative overflow-hidden rounded-[30px] shadow-xl bg-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`
                        w-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110

                        ${
                          index % 3 === 0
                            ? "h-[520px]"
                            : index % 2 === 0
                              ? "h-[380px]"
                              : "h-[460px]"
                        }
                      `}
                    />

                    {/* Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/10
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        duration-500
                      "
                    />

                    {/* Badge */}

                    <div
                      className="
                        absolute
                        top-5
                        left-5
                        px-4
                        py-2
                        rounded-full
                        bg-white/90
                        backdrop-blur
                        text-sm
                        text-[#2E2A26]
                        font-medium
                      "
                    >
                      {project.category}
                    </div>

                    {/* Bottom Content */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        p-8
                        translate-y-10
                        opacity-0
                        group-hover:translate-y-0
                        group-hover:opacity-100
                        transition-all
                        duration-500
                      "
                    >
                      <h3 className="text-white text-3xl font-semibold">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-4 text-white/80">
                        <MapPin size={16} />

                        {project.location}
                      </div>

                      <div className="flex justify-between mt-8">
                        <div>
                          <p className="text-white/60 text-xs uppercase tracking-widest">
                            Size
                          </p>

                          <p className="text-white mt-2">{project.size}</p>
                        </div>

                        <div>
                          <p className="text-white/60 text-xs uppercase tracking-widest">
                            Purpose
                          </p>

                          <p className="text-white mt-2">{project.purpose}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* =========================
    FULLSCREEN LIGHTBOX
========================= */}

      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center">
          {/* Close */}

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
          >
            <X className="text-white" size={26} />
          </button>

          {/* Previous */}

          <button
            onClick={() => {
              const index = filteredProjects.findIndex(
                (p) => p.id === selectedImage.id,
              );

              const previous =
                filteredProjects[
                  (index - 1 + filteredProjects.length) %
                    filteredProjects.length
                ];

              setSelectedImage(previous);
            }}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
          >
            <ChevronLeft className="text-white" />
          </button>

          {/* Next */}

          <button
            onClick={() => {
              const index = filteredProjects.findIndex(
                (p) => p.id === selectedImage.id,
              );

              const next =
                filteredProjects[(index + 1) % filteredProjects.length];

              setSelectedImage(next);
            }}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
          >
            <ChevronRight className="text-white" />
          </button>

          <div className="max-w-7xl w-full grid lg:grid-cols-3 gap-10 px-10 items-center">
            {/* Image */}

            <div className="lg:col-span-2">
              <motion.img
                key={selectedImage.id}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.4,
                }}
                src={selectedImage.image}
                alt={selectedImage.title}
                className="rounded-3xl max-h-[80vh] w-full object-cover shadow-2xl"
              />
            </div>

            {/* Details */}

            <div className="text-white">
              <p className="uppercase tracking-[0.35em] text-[#C7A77A] text-xs">
                PROJECT
              </p>

              <h2 className="editorial-heading text-5xl mt-5">
                {selectedImage.title}
              </h2>

              <div className="space-y-8 mt-12">
                <div>
                  <p className="text-white/50 uppercase text-xs tracking-widest">
                    Location
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <MapPin size={18} className="text-[#C7A77A]" />

                    {selectedImage.location}
                  </div>
                </div>

                <div>
                  <p className="text-white/50 uppercase text-xs tracking-widest">
                    Size
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <Home size={18} className="text-[#C7A77A]" />

                    {selectedImage.size}
                  </div>
                </div>

                <div>
                  <p className="text-white/50 uppercase text-xs tracking-widest">
                    Purpose
                  </p>

                  <p className="mt-2">{selectedImage.purpose}</p>
                </div>

                <div>
                  <p className="text-white/50 uppercase text-xs tracking-widest">
                    Category
                  </p>

                  <p className="mt-2">{selectedImage.category}</p>
                </div>
              </div>
<button
  type="button"
  onClick={() =>
    navigate("/contact", {
      state: {
        project: selectedImage?.title,
      },
    })
  }
  className="
    mt-16
    w-full
    bg-[#C7A77A]
    text-[#2E2A26]
    py-4
    rounded-full
    font-medium
    cursor-pointer
    transition-all
    duration-300
    hover:bg-white
    hover:-translate-y-1
    hover:shadow-2xl
    active:translate-y-0
  "
>
  Request Similar Design
</button>
            </div>
          </div>

          {/* Bottom Thumbnails */}

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 overflow-auto max-w-5xl px-4">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedImage(project)}
                className={`
rounded-xl
overflow-hidden
border-2
transition

${
  selectedImage.id === project.id
    ? "border-[#C7A77A] scale-110"
    : "border-transparent opacity-60 hover:opacity-100"
}
`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-24 h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
      {/* =========================
          STATISTICS
      ========================== */}

      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-12 text-center"
          >
            {[
              {
                number: "250+",
                title: "Projects Completed",
              },
              {
                number: "15+",
                title: "Years Experience",
              },
              {
                number: "98%",
                title: "Client Satisfaction",
              },
              {
                number: "Melbourne",
                title: "Servicing Metro Areas",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <h2 className="editorial-heading text-6xl text-[#2E2A26]">
                  {item.number}
                </h2>

                <p className="mt-4 uppercase tracking-[0.2em] text-sm text-[#7A746D]">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}

      <section className="relative overflow-hidden bg-[#2E2A26]">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C7A77A]/10 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#C7A77A]/10 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-36 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p className="uppercase tracking-[0.4em] text-[#C7A77A] text-xs">
              Let's Build Yours
            </p>

            <h2 className="editorial-heading text-white text-6xl md:text-7xl mt-8 leading-tight">
              Inspired By
              <br />
              These Projects?
            </h2>

            <p className="text-white/70 text-xl max-w-3xl mx-auto mt-10 leading-8">
              Whether you're planning a backyard studio, granny flat or
              custom-designed retreat, our team is ready to bring your vision to
              life.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-16">
              <a
                href="/contact"
                className="
                  px-10
                  py-5
                  rounded-full
                  bg-[#C7A77A]
                  text-[#2E2A26]
                  font-semibold
                  hover:bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Request Consultation
              </a>

              <a
                href="/products"
                className="
    inline-flex
    items-center
    justify-center
    px-10
    py-5
    rounded-full
    border-2
    border-white
    bg-transparent
    text-white 
    font-medium
    transition-all
    duration-300
    hover:bg-white
    hover:!text-[#2E2A26]
    hover:border-white
  "
                style={{ color: "#fff" }}
              >
                Explore Designs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
