import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImageWithWatermark from "./ImageWithWatermark";
import React from "react";

interface RelatedGrannyFlatProductsProps {
  currentId: number;
}

const grannyFlatProducts = [
  {
    id: 60,
    label: "The Wattle",
    route: "/products/TheWattle",
    image: "/images/grannyflat/wattle_60/wattle_mobile.webp",
  },
  {
    id: 44,
    label: "The Yarra",
    route: "/products/TheYarra",
    image: "/images/grannyflat/yara/yarra_44/yarra_44_mobile.webp",
  },
  {
    id: 38,
    label: "The Palmview",
    route: "/products/ThePalmview",
    image:
      "/images/grannyflat/palmview/palmview_44/palmview_44_mobile.webp",
  },
  {
    id: 48,
    label: "The Haven",
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
    <section className="bg-[#F5F0EB] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-[#A08E7C]
              text-xs
              mb-6
            "
          >
            Continue Exploring
          </p>

          <h2
            className="
              editorial-heading
              text-[#2E2A26]
              text-[clamp(2.8rem,7vw,5rem)]
              leading-[0.95]
            "
          >
            Other Granny Flats
          </h2>

          <p
            className="
              mt-6
              text-[#5F5A55]
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Explore our collection of thoughtfully designed granny flats,
            created for modern Australian living, flexible accommodation
            and better use of your backyard.
          </p>
        </motion.div>

        {/* CARDS */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
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
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              onClick={() => navigate(product.route)}
              className="group cursor-pointer"
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  aspect-square
                  shadow-sm
                "
              >
                {/* IMAGE */}

                <ImageWithWatermark
                  src={product.image}
                  alt={`${product.label} granny flat`}
                  watermarkClassName="
                    text-[2px]
                    md:text-[6px]
                    tracking-[0.15em]
                    opacity-15
                  "
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:from-black/70
                  "
                />

                {/* TITLE */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-7
                    flex
                    items-center
                    justify-between
                  "
                >
                  <h3
                    className="
                      editorial-heading
                      text-white
                      text-[2.3rem]
                      leading-none
                    "
                  >
                    {product.label}
                  </h3>

                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-white/40
                      backdrop-blur-sm
                      bg-white/10
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      group-hover:bg-[#C7A77A]
                      group-hover:border-[#C7A77A]
                    "
                  >
                    <ArrowRight
                      size={18}
                      className="
                        text-white
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}