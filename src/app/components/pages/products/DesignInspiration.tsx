import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface DesignInspirationProps {
  title: React.ReactNode;
  subtitle: string;
  intro: string;
  paragraphs: string[];
  features: string[];
  outro: string;
}

export default function DesignInspiration({
  title,
  subtitle,
  intro,
  paragraphs,
  features,
  outro,
}: DesignInspirationProps) {
  return (
    <section className="bg-[#FBF8F4] py-20 lg:py-32">

      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[40%_60%]
            gap-14
            lg:gap-16
            items-start
          "
        >

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="
              lg:sticky
              lg:top-28
              self-start
            "
          >

            <p
              className="
                uppercase
                tracking-[0.35em]
                text-xs
                text-[#A08E7C]
                mb-6
              "
            >
              Design Inspiration
            </p>

            <div className="w-20 h-px bg-[#C7A77A] mb-8" />

            <h2
              className="
                editorial-heading
                text-[#2E2A26]
                text-[clamp(2.7rem,8vw,5.6rem)]
                leading-[0.92]
                tracking-[-0.04em]
                mb-8
              "
            >
              {title}
            </h2>

            <p
              className="
                text-[#5F5A55]
                text-lg
                md:text-xl
                leading-relaxed
                max-w-md
              "
            >
              {intro}
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="
              w-full
              min-w-0
              space-y-16
            "
          >

            {/* STORY */}

            <div className="max-w-3xl">

              <p
                className="
                  uppercase
                  tracking-[0.35em]
                  text-xs
                  text-[#A08E7C]
                  mb-6
                "
              >
                {subtitle}
              </p>

              <p
                className="
                  text-[#2E2A26]
                  text-xl
                  md:text-[1.4rem]
                  font-light
                  leading-[1.75]
                  mb-8
                "
              >
                {paragraphs[0]}
              </p>

              <div className="w-full h-px bg-[#E8DED3] mb-8" />

              <div className="space-y-7">

                {paragraphs.slice(1).map((paragraph, index) => (

                  <p
                    key={index}
                    className="
                      text-[#5F5A55]
                      text-base
                      md:text-lg
                      leading-8
                    "
                  >
                    {paragraph}
                  </p>

                ))}

              </div>

            </div>
                        {/* DESIGN PRINCIPLES */}

            <div className="max-w-3xl">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-14 h-px bg-[#C7A77A]" />

                <p
                  className="
                    uppercase
                    tracking-[0.35em]
                    text-xs
                    text-[#A08E7C]
                  "
                >
                  Design Principles
                </p>

              </div>

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-4
                  w-full
                "
              >

                {features.map((feature, index) => (

                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      w-full
                      min-w-0
                      rounded-2xl
                      border
                      border-[#E8DED3]
                      bg-white
                      p-5
                      transition-all
                      duration-300
                      hover:border-[#C7A77A]
                      hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)]
                    "
                  >

                    <div
                      className="
                        w-10
                        h-10
                        shrink-0
                        rounded-full
                        border
                        border-[#D9C6AB]
                        bg-[#C7A77A]/10
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        group-hover:bg-[#C7A77A]
                        group-hover:border-[#C7A77A]
                      "
                    >

                      <Check
                        size={16}
                        className="
                          text-[#C7A77A]
                          transition-colors
                          duration-300
                          group-hover:text-white
                        "
                      />

                    </div>

                    <span
                      className="
                        flex-1
                        min-w-0
                        text-[#2E2A26]
                        text-sm
                        md:text-base
                        leading-relaxed
                        break-words
                        transition-colors
                        duration-300
                        group-hover:text-[#C7A77A]
                      "
                    >
                      {feature}
                    </span>

                  </motion.div>

                ))}

              </div>

            </div>

            {/* QUOTE */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                max-w-3xl
                pt-12
                border-t
                border-[#E8DED3]
              "
            >

              <div className="relative">

                <span
                  className="
                    hidden
                    lg:block
                    absolute
                    -top-10
                    -left-2
                    text-[110px]
                    leading-none
                    text-[#E8DED3]
                    opacity-60
                    pointer-events-none
                  "
                >
                  "
                </span>

                <p
                  className="
                    editorial-heading
                    text-[#2E2A26]
                    italic
                    text-[clamp(1.9rem,4vw,3rem)]
                    leading-[1.25]
                    relative
                  "
                >
                  {outro}
                </p>

              </div>

              <div className="mt-8 flex items-center gap-4">

                <div className="w-12 h-px bg-[#C7A77A]" />

                <p
                  className="
                    uppercase
                    tracking-[0.35em]
                    text-[11px]
                    text-[#A08E7C]
                  "
                >
                  Backyard Nest
                </p>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}