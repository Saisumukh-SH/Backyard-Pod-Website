import { motion } from "framer-motion";
import {
  ArrowRight,
  House,
  LayoutGrid,
  Sparkles,
  Leaf,
  RefreshCw,
} from "lucide-react";

interface GrannySEOCardProps {
  price: string;
  onExplore: () => void;
}

const features = [
  {
    title: "Comfortable Independent Living",
    icon: House,
  },
  {
    title: "Functional Layouts",
    icon: LayoutGrid,
  },
  {
    title: "Modern Finishes",
    icon: Sparkles,
  },
  {
    title: "Energy Efficient Performance",
    icon: Leaf,
  },
  {
    title: "Long Term Flexibility",
    icon: RefreshCw,
  },
];

export default function GrannySEOCard({
  price,
  onExplore,
}: GrannySEOCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        mt-8
        rounded-[28px]
        border
        border-[#E8DED3]
        bg-[#FBF8F4]
        p-8
        transition-all
        duration-500
        hover:border-[#C7A77A]
        hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]
      "
    >

      {/* Heading */}

      <p className="uppercase tracking-[0.3em] text-[#A08E7C] text-[11px] mb-1">
        Granny Flats
      </p>

      <h3
        className="
          editorial-heading
          text-[#2E2A26]
          text-2xl
          md:text-3xl
          leading-[1]
          tracking-[-0.02em]
          mb-5
        "
      >
        Why Choose A Granny Flat?
      </h3>

      {/* Intro */}

      <p className="text-[#5F5A55] leading-relaxed mb-6">
        Create additional living space for family members, guests or investment
        opportunities with a custom designed granny flat that blends seamlessly
        with your existing home.
      </p>

      <div className="w-full h-px bg-[#E8DED3] mb-6" />

      {/* Features */}

      <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-6">

        {features.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                flex
                items-center
                gap-4
                group
              "
            >

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#D8C7AF]
                  bg-white
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:bg-[#C7A77A]
                  group-hover:border-[#C7A77A]
                "
              >

                <Icon
                  className="
                    w-5
                    h-5
                    text-[#C7A77A]
                    transition-all
                    duration-300
                    group-hover:text-white
                  "
                />

              </div>

              <span
                className="
                  text-[#2E2A26]
                  text-sm
                  md:text-base
                  transition-colors
                  duration-300
                  group-hover:text-[#C7A77A]
                "
              >
                {item.title}
              </span>

            </div>

          );

        })}

      </div>

      <div className="w-full h-px bg-[#E8DED3] mb-6" />

      {/* Outro */}

      <p className="text-[#5F5A55] leading-relaxed">
        Whether you're accommodating ageing parents, adult children or creating
        a rental opportunity, every Backyard Nest granny flat is thoughtfully
        designed to maximize comfort, functionality and long term value while
        meeting Victorian building requirements.
      </p>

      {/* CTA */}

      <div className="border-t border-[#E8DED3] mt-8 pt-8">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

          {/* Price */}

          <div>

            <p className="uppercase tracking-[0.25em] text-[#8B7E74] text-[11px] mb-2">
              Starting From
            </p>

            <h4
              className="
                text-[#2E2A26]
                text-[2.4rem]
                md:text-[2.8rem]
                font-light
                leading-none
              "
            >
              {price}
            </h4>

          </div>

          {/* CTA Button */}

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onExplore}
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#2E2A26]
              px-7
              py-4
              text-[#2E2A26]
              transition-all
              duration-300
              hover:bg-[#2E2A26]
              hover:text-white
            "
          >

            Explore Collection

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

      </div>

    </motion.div>
  );
}