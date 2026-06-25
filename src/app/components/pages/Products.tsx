import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ImageWithWatermark from "../ImageWithWatermark";
import SEO from "../SEO";

const categories = [
  {
    id: "studio",
    tag: "Work • Create • Retreat",
    title: "Studio Pods",
    description:
      "Purpose-built backyard spaces for focused work, creative pursuits and quiet retreat. Create a dedicated office, studio or personal sanctuary without extending your home.",
    image: "/images/study_nook_hero.webp",
    from: "$71,090",
  },

  {
    id: "granny",
    tag: "Live • Host • Earn",
    title: "Granny Flats",
    description:
      "Fully self-contained living spaces designed for family, guests and rental income. A smart way to add flexibility and value to your property.",
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
    description="Explore completed backyard pods, granny flats and studio projects across Melbourne."
    url="https://backyardnest.com.au/gallery"
/>

      {/* HERO */}

      <section className="min-h-[85vh] lg:h-screen flex items-center pt-24 lg:pt-0">

        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-8"
          >
            Our Collection
          </motion.p>

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

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
              mt-8
text-[#5F5A55]
text-base md:text-lg
              max-w-2xl
              leading-relaxed
            "
          >
            Explore our collection of backyard spaces,
            thoughtfully designed for the way Australians
            work, live and grow.
          </motion.p>

        </div>

      </section>

      {/* CATEGORY SECTIONS */}

      {categories.map((category, index) => (

        <section
          key={category.id}
          className="
            py-16 lg:py-24
          "
        >

          <div className="max-w-[1700px] mx-auto w-full px-8 lg:px-16">

            <div
  onClick={() =>
    navigate(`/products/${category.id}`)
  }
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
                  h-[320px]
sm:h-[450px]
lg:h-[70vh]
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
                    mb-8
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
    mb-8
    transition-all
    duration-500
    group-hover:text-[#C7A77A]
  "
>
                  {category.title}
                </h2>

                <div
                  className="
                    w-16
                    h-px
                    bg-[#C7A77A]
                    mb-10
                  "
                />

                <p
                  className="
                    text-[#5F5A55]
                    text-base md:text-lg
                    leading-relaxed
                    max-w-xl
                    mb-12
                  "
                >
                  {category.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

                  <span
                    className="
                      text-[#2E2A26]
                      text-2xl
                    "
                  >
                    From {category.from}
                  </span>

                  <button
                    onClick={() =>
                      navigate(`/products/${category.id}`)
                    }
                    className="
                      flex
                      items-center
                      gap-3
                      text-[#2E2A26]
                      hover:gap-5
                      transition-all
                    "
                  >
                    Explore Collection
                    <ArrowRight size={18} />
                  </button>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

      ))}

      {/* FINAL CTA */}

      <section className="py-24 lg:py-40 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <div className="w-20 h-px bg-[#C7A77A] mx-auto mb-12" />

          <h2
            className="
              editorial-heading
              text-[#2E2A26]
              text-[clamp(2.8rem,10vw,7rem)]
              leading-[0.95]
            "
          >
            Not Sure Which
            <br />
            Space Is Right?
          </h2>

          <p
            className="
              mt-8
              text-[#5F5A55]
              text-base md:text-lg
              max-w-2xl
              mx-auto
            "
          >
            Speak with our team and we'll help you find
            the perfect solution for your property and lifestyle.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="
              mt-10
              px-8
              py-4
              bg-[#2E2A26]
              text-white
              hover:opacity-90
              transition
            "
          >
            Book Consultation
          </button>

        </div>

      </section>

    </main>
  );
}