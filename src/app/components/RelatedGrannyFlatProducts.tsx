import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImageWithWatermark from "./ImageWithWatermark";
import React from "react";

interface RelatedGrannyFlatProductsProps {
  currentId: string;
}

const grannyFlatProducts = [
  {
    id: "wattle-60",
    label: "The Wattle",
    size: "60 m²",
    route: "/products/TheWattle",
    image: "/images/grannyflat/wattle_60/wattle_mobile.webp",
  },

  {
    id: "yarra-38",
    label: "The Yarra",
    size: "38 m²",
    route: "/products/TheYarra38",
    image: "/images/grannyflat/yara/yarra_38/yarra_38_mobile.webp",
  },

  {
    id: "yarra-44",
    label: "The Yarra",
    size: "44 m²",
    route: "/products/TheYarra44",
    image: "/images/grannyflat/yara/yarra_44/yarra_44_mobile.webp",
  },

  {
    id: "palmview-38",
    label: "The Palmview",
    size: "38 m²",
    route: "/products/ThePalmview38",
    image:
      "/images/grannyflat/palmview/palmview_38/palmview_38_mobile.webp",
  },

  {
    id: "palmview-44",
    label: "The Palmview",
    size: "44 m²",
    route: "/products/ThePalmview44",
    image:
      "/images/grannyflat/palmview/palmview_44/palmview_44_mobile.webp",
  },

  {
    id: "haven-48",
    label: "The Haven",
    size: "48 m²",
    route: "/products/TheHaven",
    image: "/images/grannyflat/haven/haven_48_mobile.webp",
  },
];

export default function RelatedGrannyFlatProducts({
  currentId,
}: RelatedGrannyFlatProductsProps) {
  const navigate = useNavigate();

  const products = grannyFlatProducts.filter(
    (product) => product.id !== currentId
  );

  return (
    <section className="bg-[#F5F0EB] py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="
                uppercase
                tracking-[0.35em]
                text-[#A08E7C]
                text-[10px]
                md:text-xs
                mb-5
              ">
                Continue Exploring
              </p>

              <h2
                className="
                  editorial-heading
                  text-[#2E2A26]
                  text-[clamp(3rem,7vw,6rem)]
                  leading-[0.85]
                  tracking-[-0.04em]
                "
              >
                Find Your
                <br />
                <span className="text-[#C7A77A]">
                  Next Space.
                </span>
              </h2>
            </div>

            <p
              className="
                text-[#5F5A55]
                max-w-md
                leading-relaxed
                text-sm
                md:text-base
                lg:pb-2
              "
            >
              Explore our collection of thoughtfully designed backyard homes,
              created for modern Australian living and flexible use of space.
            </p>
          </div>
        </motion.div>

        {/* ===================================================== */}
        {/* PRODUCT GRID */}
        {/* ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            lg:gap-6
          "
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              onClick={() => navigate(product.route)}
              className="group cursor-pointer"
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[26px]
                  aspect-[4/5]
                  bg-[#E8DED3]
                "
              >
                <ImageWithWatermark
                  src={product.image}
                  alt={`${product.label} ${product.size} granny flat`}
                  watermarkClassName="
                    text-[2px]
                    md:text-[5px]
                    tracking-[0.15em]
                    opacity-15
                  "
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-[1000ms]
                    group-hover:scale-105
                  "
                />

                {/* GRADIENT */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/75
                    via-black/10
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:from-black/85
                  "
                />

                {/* TOP LABEL */}
                <div className="absolute top-5 left-5">
                  <span
                    className="
                      px-3
                      py-2
                      bg-white/10
                      backdrop-blur-md
                      border
                      border-white/20
                      text-white
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                    "
                  >
                    {product.size}
                  </span>
                </div>

                {/* ARROW */}
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    w-11
                    h-11
                    rounded-full
                    border
                    border-white/30
                    bg-white/10
                    backdrop-blur-md
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-500
                    group-hover:bg-[#C7A77A]
                    group-hover:border-[#C7A77A]
                    group-hover:scale-110
                  "
                >
                  <ArrowRight
                    size={17}
                    className="
                      text-white
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  />
                </div>

                {/* PRODUCT INFO */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                    md:p-7
                  "
                >
                  <p
                    className="
                      text-white/60
                      uppercase
                      tracking-[0.25em]
                      text-[9px]
                      mb-3
                    "
                  >
                    Granny Flat
                  </p>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3
                        className="
                          editorial-heading
                          text-white
                          text-[2rem]
                          md:text-[2.3rem]
                          leading-none
                        "
                      >
                        {product.label}
                      </h3>

                      <p
                        className="
                          text-[#D7BE8A]
                          uppercase
                          tracking-[0.2em]
                          text-[10px]
                          mt-2
                        "
                      >
                        {product.size}
                      </p>
                    </div>

                    <span
                      className="
                        text-white/60
                        text-[9px]
                        uppercase
                        tracking-[0.15em]
                        opacity-0
                        translate-y-2
                        transition-all
                        duration-500
                        group-hover:opacity-100
                        group-hover:translate-y-0
                      "
                    >
                      Explore
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===================================================== */}
        {/* BOTTOM LINK */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center mt-14"
        >
          <button
            onClick={() => navigate("/products/granny")}
            className="
              group
              flex
              items-center
              gap-4
              text-[#2E2A26]
              uppercase
              tracking-[0.22em]
              text-[10px]
              border-b
              border-[#2E2A26]/30
              pb-2
              transition-all
              duration-300
              hover:text-[#C7A77A]
              hover:border-[#C7A77A]
            "
          >
            <span>View All Granny Flats</span>

            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}