import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SEO from "../SEO";
import React from "react";

const models = {
  yarra: {
    name: "The Yarra",
    eyebrow: "Contemporary Granny Flat",
    subtitle:
      "A refined backyard home designed around modern Australian living.",
    heroImage: "/images/grannyflat/yara/yarra_44/yarra_44_mobile.webp",

    sizes: [
      {
        size: "38 m²",
        number: "01",
        shortSize: "38",
        label: "Compact",
        description:
          "A thoughtfully designed compact layout offering comfortable living while making efficient use of your backyard.",
        image:
          "/images/grannyflat/yara/yarra_38/yarra_38_mobile.webp",
        route: "/products/TheYarra38",
        footprint: "7 × 5.5 m",
        bedrooms: "1",
        bathrooms: "1",
        capacity: "1–2",
      },
      {
        size: "44 m²",
        number: "02",
        shortSize: "44",
        label: "Spacious",
        description:
          "A more spacious configuration providing additional room for comfortable everyday living.",
        image:
          "/images/grannyflat/yara/yarra_44/yarra_44_mobile.webp",
        route: "/products/TheYarra44",
        footprint: "7 × 6.5 m",
        bedrooms: "1",
        bathrooms: "1",
        capacity: "1–2",
      },
    ],
  },

  palmview: {
    name: "The Palmview",
    eyebrow: "Contemporary Backyard Home",
    subtitle:
      "A modern backyard home balancing intelligent design with effortless indoor-outdoor living.",
    heroImage:
      "/images/grannyflat/palmview/palmview_44/palmview_44_mobile.webp",

    sizes: [
      {
        size: "38 m²",
        number: "01",
        shortSize: "38",
        label: "Compact",
        description:
          "A compact backyard home designed for efficient modern living without compromising comfort.",
        image:
          "/images/grannyflat/palmview/palmview_38/palmview_38_mobile.webp",
        route: "/products/ThePalmview38",
        footprint: "Compact footprint",
        bedrooms: "1",
        bathrooms: "1",
        capacity: "1–2",
      },
      {
        size: "44 m²",
        number: "02",
        shortSize: "44",
        label: "Spacious",
        description:
          "A larger configuration providing additional space while maintaining the Palmview's contemporary design.",
        image:
          "/images/grannyflat/palmview/palmview_44/palmview_44_mobile.webp",
        route: "/products/ThePalmview44",
        footprint: "Compact backyard footprint",
        bedrooms: "1",
        bathrooms: "1",
        capacity: "1–2",
      },
    ],
  },
};

export default function GrannyFlatSizeSelection() {
  const navigate = useNavigate();
  const { model } = useParams();

  const [activeSize, setActiveSize] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedModel =
    model === "yarra"
      ? models.yarra
      : model === "palmview"
      ? models.palmview
      : null;

  /* ========================================================= */
  /* INVALID MODEL */
  /* ========================================================= */

  if (!selectedModel) {
    return (
      <div className="min-h-screen bg-[#F5F0EB] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-5">
            Backyard Nest
          </p>

          <h1 className="font-serif text-4xl text-[#2E2A26] mb-8">
            Design Not Found
          </h1>

          <button
            onClick={() => navigate("/products/granny")}
            className="
              px-8
              py-4
              bg-[#2E2A26]
              text-white
              uppercase
              tracking-[0.2em]
              text-xs
              transition-all
              duration-300
              hover:bg-[#C7A77A]
              hover:text-[#2E2A26]
            "
          >
            Back to Collection
          </button>
        </div>
      </div>
    );
  }

  const currentSize = selectedModel.sizes[activeSize];

  return (
    <div className="min-h-screen bg-[#F5F0EB]">
      <SEO
        title={`${selectedModel.name} Sizes | Backyard Nest`}
        description={`Choose the perfect size for ${selectedModel.name}. Explore the 38m² and 44m² configurations from Backyard Nest.`}
        url={`https://backyardnest.com.au/products/granny/select-size/${model}`}
      />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative min-h-[92vh] lg:min-h-screen overflow-hidden bg-[#2E2A26]">
        {/* HERO IMAGE */}

        <div
          onContextMenu={(e) => e.preventDefault()}
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            transition-all
            duration-1000
          "
          style={{
            backgroundImage: `url(${currentSize.image})`,
          }}
        />

        {/* IMAGE OVERLAYS */}

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

        {/* HERO CONTENT */}

        <div
          className="
            relative
            z-10
            min-h-[92vh]
            lg:min-h-screen
            max-w-[1600px]
            mx-auto
            px-6
            lg:px-12
            flex
            items-end
            pb-28
            lg:pb-24
          "
        >
          <div className="w-full">
            <div className="max-w-5xl">
              <p className="text-[#D7BE8A] uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6">
                {selectedModel.eyebrow}
              </p>

              <h1
                className="
                  editorial-heading
                  text-white
                  text-[clamp(4rem,12vw,10rem)]
                  leading-[0.78]
                  tracking-[-0.05em]
                "
              >
                {selectedModel.name}
              </h1>

              <div className="mt-8 flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
                <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
                  {selectedModel.subtitle}
                </p>

                <div className="hidden md:block h-px flex-1 bg-white/20 mb-2" />

                <p className="text-white/50 text-[10px] uppercase tracking-[0.25em] whitespace-nowrap">
                  38 m² — 44 m²
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING SIZE NAVIGATION */}

        <div className="absolute z-20 bottom-6 right-6 lg:right-12 lg:bottom-12">
          <div className="bg-[#F5F0EB]/95 backdrop-blur-md p-2 flex items-center gap-2 shadow-2xl">
            {selectedModel.sizes.map((option, index) => (
              <button
                key={option.size}
                onClick={() => setActiveSize(index)}
                className={`
                  relative
                  px-5
                  py-3
                  md:px-7
                  md:py-4
                  text-left
                  transition-all
                  duration-500
                  ${
                    activeSize === index
                      ? "bg-[#2E2A26] text-white"
                      : "text-[#2E2A26] hover:bg-[#E8DED3]"
                  }
                `}
              >
                <span className="block text-[9px] uppercase tracking-[0.2em] opacity-50 mb-1">
                  {option.label}
                </span>

                <span className="font-serif text-lg md:text-xl">
                  {option.size}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONFIGURATION INTRO */}
      {/* ========================================================= */}

      <section className="bg-[#F5F0EB] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">
            <div className="lg:col-span-7">
              <p className="uppercase tracking-[0.3em] text-[#A08E7C] text-[10px] mb-6">
                Choose Your Configuration
              </p>

              <h2
                className="
                  editorial-heading
                  text-[#2E2A26]
                  text-[clamp(3.5rem,8vw,7rem)]
                  leading-[0.85]
                  tracking-[-0.04em]
                "
              >
                One design.
                <br />
                <span className="text-[#C7A77A]">
                  Two possibilities.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-[#5F5A55] leading-relaxed text-base md:text-lg">
                Select the configuration that best fits your property,
                lifestyle and available backyard space. Explore each size in
                detail before making your choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERACTIVE SIZE SHOWCASE */}
      {/* ========================================================= */}

      <section className="bg-[#EDE7DC] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* LEFT SIZE NAVIGATION */}

            <div
              className="
                lg:col-span-4
                bg-[#2E2A26]
                text-white
                p-8
                md:p-10
                lg:p-12
                flex
                flex-col
                justify-between
                min-h-[520px]
              "
            >
              <div>
                <p className="uppercase tracking-[0.3em] text-[#C7A77A] text-[10px] mb-10">
                  Available Configurations
                </p>

                <div className="space-y-2">
                  {selectedModel.sizes.map((option, index) => (
                    <button
                      key={option.size}
                      onMouseEnter={() => setActiveSize(index)}
                      onClick={() => setActiveSize(index)}
                      className={`
                        w-full
                        text-left
                        group
                        py-6
                        border-b
                        transition-all
                        duration-500
                        ${
                          activeSize === index
                            ? "border-[#C7A77A]"
                            : "border-white/10"
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                          <span
                            className={`
                              text-[10px]
                              tracking-[0.2em]
                              ${
                                activeSize === index
                                  ? "text-[#C7A77A]"
                                  : "text-white/30"
                              }
                            `}
                          >
                            {option.number}
                          </span>

                          <span
                            className={`
                              font-serif
                              text-4xl
                              md:text-5xl
                              transition-all
                              duration-500
                              ${
                                activeSize === index
                                  ? "text-white"
                                  : "text-white/35 group-hover:text-white/70"
                              }
                            `}
                          >
                            {option.shortSize}
                            <span className="text-xl ml-1">m²</span>
                          </span>
                        </div>

                        <span
                          className={`
                            text-xl
                            transition-all
                            duration-500
                            ${
                              activeSize === index
                                ? "text-[#C7A77A] translate-x-0"
                                : "text-white/20 -translate-x-2"
                            }
                          `}
                        >
                          →
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-10">
                <span className="block text-white/30 text-[9px] uppercase tracking-[0.25em] mb-2">
                  Current Selection
                </span>

                <span className="text-white text-sm">
                  {selectedModel.name} — {currentSize.size}
                </span>
              </div>
            </div>

            {/* RIGHT IMAGE + DETAILS */}

            <div className="lg:col-span-8 bg-[#F5F0EB]">
              <div className="grid md:grid-cols-2 h-full">
                {/* IMAGE */}

                <div className="relative min-h-[400px] md:min-h-[520px] overflow-hidden">
                  <img
                    key={currentSize.image}
                    src={currentSize.image}
                    alt={`${selectedModel.name} ${currentSize.size}`}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <span className="text-white text-[10px] uppercase tracking-[0.25em]">
                      {selectedModel.name}
                    </span>

                    <span className="text-white font-serif text-2xl">
                      {currentSize.size}
                    </span>
                  </div>
                </div>

                {/* DETAILS */}

                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <p className="uppercase tracking-[0.25em] text-[#A08E7C] text-[10px] mb-5">
                      Configuration {currentSize.number}
                    </p>

                    <h3 className="font-serif text-4xl md:text-5xl text-[#2E2A26] leading-none mb-6">
                      {currentSize.size}
                    </h3>

                    <div className="w-12 h-px bg-[#C7A77A] mb-7" />

                    <p className="text-[#6F6861] leading-relaxed text-sm md:text-base">
                      {currentSize.description}
                    </p>
                  </div>

                  {/* SPECS */}

                  <div className="mt-10">
                    <div className="grid grid-cols-2 border-t border-[#DED5CA]">
                      <div className="py-5 border-b border-r border-[#DED5CA]">
                        <span className="block text-[9px] uppercase tracking-[0.2em] text-[#9A8E84] mb-2">
                          Footprint
                        </span>

                        <span className="text-[#2E2A26] text-sm">
                          {currentSize.footprint}
                        </span>
                      </div>

                      <div className="py-5 border-b border-[#DED5CA] pl-5">
                        <span className="block text-[9px] uppercase tracking-[0.2em] text-[#9A8E84] mb-2">
                          Bedrooms
                        </span>

                        <span className="text-[#2E2A26] text-sm">
                          {currentSize.bedrooms}
                        </span>
                      </div>

                      <div className="py-5 border-b border-[#DED5CA] border-r">
                        <span className="block text-[9px] uppercase tracking-[0.2em] text-[#9A8E84] mb-2">
                          Bathrooms
                        </span>

                        <span className="text-[#2E2A26] text-sm">
                          {currentSize.bathrooms}
                        </span>
                      </div>

                      <div className="py-5 border-b border-[#DED5CA] pl-5">
                        <span className="block text-[9px] uppercase tracking-[0.2em] text-[#9A8E84] mb-2">
                          Capacity
                        </span>

                        <span className="text-[#2E2A26] text-sm">
                          {currentSize.capacity}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate(currentSize.route)}
                      className="
                        group
                        mt-8
                        w-full
                        flex
                        items-center
                        justify-between
                        bg-[#2E2A26]
                        text-white
                        px-6
                        py-5
                        uppercase
                        tracking-[0.2em]
                        text-[10px]
                        transition-all
                        duration-500
                        hover:bg-[#C7A77A]
                        hover:text-[#2E2A26]
                      "
                    >
                      <span>
                        Explore {currentSize.size} Design
                      </span>

                      <span className="text-lg transition-transform duration-500 group-hover:translate-x-2">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SIZE COMPARISON */}
      {/* ========================================================= */}

      <section className="bg-[#F5F0EB] py-24 lg:py-36">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-[#A08E7C] text-[10px] mb-5">
              At A Glance
            </p>

            <h2
              className="
                editorial-heading
                text-[#2E2A26]
                text-[clamp(3rem,7vw,5.5rem)]
                leading-[0.9]
              "
            >
              Find Your Fit.
            </h2>
          </div>

          <div className="border-t border-[#DCD2C7]">
            {selectedModel.sizes.map((option, index) => (
              <button
                key={option.size}
                onMouseEnter={() => setActiveSize(index)}
                onClick={() => navigate(option.route)}
                className="
                  group
                  w-full
                  text-left
                  grid
                  grid-cols-12
                  items-center
                  py-8
                  md:py-10
                  border-b
                  border-[#DCD2C7]
                  transition-all
                  duration-500
                  hover:bg-white
                  px-4
                  md:px-6
                "
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A08E7C]">
                    0{index + 1}
                  </span>
                </div>

                <div className="col-span-5 md:col-span-4">
                  <span className="font-serif text-3xl md:text-5xl text-[#2E2A26] group-hover:text-[#C7A77A] transition-colors duration-500">
                    {option.size}
                  </span>
                </div>

                <div className="hidden md:block md:col-span-5">
                  <span className="text-[#6F6861] text-sm">
                    {option.footprint}
                  </span>
                </div>

                <div className="col-span-5 md:col-span-2 flex justify-end">
                  <span className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#2E2A26] group-hover:text-[#C7A77A]">
                    Explore

                    <span className="text-lg transition-transform duration-500 group-hover:translate-x-2">
                      →
                    </span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONSULTATION CTA */}
      {/* ========================================================= */}

      <section className="relative bg-[#2E2A26] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${selectedModel.heroImage})`,
            }}
          />
        </div>

        <div className="relative max-w-[1100px] mx-auto px-6 py-28 lg:py-40 text-center">
          <p className="uppercase tracking-[0.3em] text-[#C7A77A] text-[10px] mb-7">
            Need Help Choosing?
          </p>

          <h2
            className="
              editorial-heading
              text-white
              text-[clamp(3.5rem,8vw,7rem)]
              leading-[0.85]
            "
          >
            Let's Find
            <br />
            <span className="text-[#C7A77A]">The Right Fit.</span>
          </h2>

          <p className="text-white/55 max-w-xl mx-auto mt-8 leading-relaxed">
            Every backyard is different. Our team can help you understand
            which configuration works best for your property and lifestyle.
          </p>

          <button
            onClick={() => navigate("/booking")}
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-8
              px-8
              py-5
              bg-[#C7A77A]
              text-[#2E2A26]
              uppercase
              tracking-[0.22em]
              text-[10px]
              transition-all
              duration-500
              hover:bg-white
            "
          >
            <span>Book a Consultation</span>

            <span className="text-lg transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOTTOM NAVIGATION */}
      {/* ========================================================= */}

      <section className="bg-[#F5F0EB] py-8">
        <div
          className="
            max-w-[1400px]
            mx-auto
            px-6
            lg:px-12
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
          "
        >
          <button
            onClick={() => navigate("/products/granny")}
            className="
              group
              flex
              items-center
              gap-3
              text-[#5F5A55]
              uppercase
              tracking-[0.2em]
              text-[10px]
              hover:text-[#C7A77A]
              transition-colors
            "
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            All Granny Flats
          </button>

          <span className="text-[#A08E7C] text-[9px] uppercase tracking-[0.25em]">
            {selectedModel.name} · {currentSize.size}
          </span>
        </div>
      </section>
    </div>
  );
}