import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GrannyFlats() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 const sizes = [
  {
    id: 45,
    label: "The Willow",
    route: "/products/GrannyflatProduct1",
    image: "/images/granny_flats_hero.webp",
    description:
      "A beautifully designed one-bedroom granny flat featuring open-plan living, a full kitchen and a private bathroom. Perfect for independent living, guest accommodation or rental income.",
    footprint: "7 × 6.5 m",
    area: "45 m²",
    bedrooms: "1",
    bathrooms: "1",
    capacity: "1–2",
  },

  {
    id: 55,
    label: "The Haven",
    route: "/products/GrannyflatProduct2",
    image: "/images/grannyflat/haven/haven_hero.webp",
    description:
      "A spacious one-bedroom residence offering enhanced living areas, additional storage and abundant natural light for everyday comfort.",
    footprint: "8 × 7 m",
    area: "55 m²",
    bedrooms: "1",
    bathrooms: "1",
    capacity: "2",
  },

  {
    id: 68,
    label: "The Elm",
    route: "/products/GrannyflatProduct3",
    image: "/images/grannyflat/elm/elm_hero.webp",
    description:
      "A thoughtfully planned two-bedroom home combining generous living spaces with contemporary design. Ideal for family, guests or long-term rental.",
    footprint: "7 × 9.7 m",
    area: "68 m²",
    bedrooms: "2",
    bathrooms: "2",
    capacity: "2–4",
  },

  {
    id: 75,
    label: "The Grove",
    route: "/products/GrannyflatProduct4",
    image: "/images/grannyflat/grove/grove_hero.webp",
    description:
      "Our premium two-bedroom design featuring expansive living zones, refined finishes and a layout created for modern family living.",
    footprint: "8 × 9.5 m",
    area: "75 m²",
    bedrooms: "2",
    bathrooms: "2",
    capacity: "3–4",
  },

  {
    id: 99,
    label: "Bespoke Design",
    route: "/contact",
    image: "/images/grannyflat/custom_design_hero.webp",
    description:
      "Work alongside our design team to create a completely tailored granny flat designed specifically for your site, lifestyle and future needs.",
    footprint: "Custom",
    area: "Tailored",
    bedrooms: "Flexible",
    bathrooms: "Flexible",
    capacity: "Unlimited",
  },
];

  const [activeSize, setActiveSize] = useState(45);
  const current = sizes.find((s) => s.id === activeSize)!;

  return (
    <div>

<section className="bg-[#F5F0EB] py-32">

  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    {/* SECTION HEADER */}

    <div className="mb-20">

      <p
        className="
          uppercase
          tracking-[0.3em]
          text-[#A08E7C]
          text-xs
          mb-6
        "
      >
        Studio Collection
      </p>

      <h2
        className="
          editorial-heading
          text-[#2E2A26]
          text-5xl
          md:text-7xl
          leading-[0.95]
          tracking-[-0.04em]
        "
      >
        Explore Every Design.
      </h2>

      <p
        className="
          mt-6
          text-[#5F5A55]
          text-lg
          max-w-2xl
          leading-relaxed
        "
      >
        Thoughtfully designed studio spaces created
        for work, creativity and everyday living.
      </p>

    </div>

    {/* GRID */}

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

      {sizes.map((item) => (

        <div
          key={item.id}
          onClick={() => navigate(item.route)}
          className={`
group
relative
h-[520px]
overflow-hidden
rounded-[28px]
cursor-pointer
transition-all
duration-500
group-hover:-translate-y-2
${
  item.id === 99
    ? "ring-1 ring-[#C7A77A]/40"
    : "bg-[#EDE8E0]"
}
`}
        >

          {/* IMAGE */}

          <img
            src={item.image}
            alt={item.label}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-all
              duration-[1200ms]
              group-hover:scale-110
            "
          />

          {/* DARK OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/85
              via-black/25
              to-black/5
            "
          />

          {/* GOLD HOVER OVERLAY */}

          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-700
              bg-gradient-to-t
              from-[#C7A77A]/20
              via-transparent
              to-transparent
            "
          />

          {/* CONTENT */}

          <div
            className="
              absolute
              inset-0
              p-8
              flex
              flex-col
              justify-end
            "
          >

            {/* CATEGORY */}

            <p
  className="
    text-white/60
    uppercase
    tracking-[0.28em]
    text-[10px]
    mb-3
  "
>
  {item.id === 99
    ? "Tailored Solution"
    : "Studio Pod Collection"}
</p>

            {/* NAME */}

            <h3
              className="
                text-white
                text-[2rem]
                md:text-[2.4rem]
                leading-[0.95]
                font-serif
                tracking-[-0.03em]
                mb-3
                transition-all
                duration-500
                group-hover:text-[#D7BE8A]
              "
            >
              {item.label}
            </h3>

            {/* SIZE */}

           <p
  className="
    text-white/70
    uppercase
    tracking-[0.2em]
    text-[11px]
    mb-6
  "
>
  {item.id === 99
    ? "Designed Around You"
    : `${item.id}m² Studio Pod`}
</p>

            {/* HOVER CONTENT */}

            <div
              className="
                max-h-0
                overflow-hidden
                transition-all
                duration-700
                group-hover:max-h-[250px]
              "
            >

              <div
                className="
                  w-12
                  h-px
                  bg-[#D7BE8A]
                  mb-5
                "
              />

              <p
                className="
                  text-white/80
                  text-sm
                  leading-relaxed
                  mb-6
                "
              >
                {item.description}
              </p>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-[#D7BE8A]
                  uppercase
                  tracking-[0.22em]
                  text-[11px]
                "
              >
                Explore Design

                <span
                  className="
                    transition-transform
                    duration-500
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

  {/* IMMERSIVE COLLECTION EXPLORER */}

<section className="relative h-screen overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">

    <img
      src={current.image}
      alt={current.label}
      className="
        w-full
        h-full
        object-cover
        transition-all
        duration-700
        scale-105
      "
    />

    <div className="absolute inset-0 bg-black/45" />

  </div>

  {/* Content */}

  <div className="relative z-10 h-full flex">

    {/* LEFT SIDE */}

    <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20">

      <span
        className="
          uppercase
          tracking-[0.3em]
          text-[11px]
          text-white/60
          mb-12
        "
      >
        Studio Collection
      </span>

      {sizes.map((item, index) => (

        <button
          key={item.id}
          onMouseEnter={() => setActiveSize(item.id)}
          onClick={() => navigate(item.route)}
          className="
            group
            text-left
            py-3
          "
        >

          <div className="flex items-center gap-6">

            <span
              className={`
                text-sm
                transition-all
                duration-300
                ${
                  activeSize === item.id
                    ? "text-[#C7A77A]"
                    : "text-white/40"
                }
              `}
            >
              0{index + 1}
            </span>

            <h2
              className={`
                font-serif
                transition-all
                duration-500
                leading-none
                ${
                  activeSize === item.id
                    ? "text-white text-6xl"
                    : "text-white/30 text-5xl"
                }
              `}
            >
              {item.label}
            </h2>

          </div>

        </button>

      ))}

    </div>

    {/* RIGHT SIDE INFO */}

    <div
      className="
        hidden
        lg:flex
        w-1/2
        items-end
        justify-end
        p-20
      "
    >

      <div className="max-w-md text-white">

        <span
          className="
            uppercase
            tracking-[0.25em]
            text-[11px]
            text-[#C7A77A]
            block
            mb-6
          "
        >
          Selected Design
        </span>

        <h3 className="font-serif text-5xl mb-6">
          {current.label}
        </h3>

        <p className="text-white/70 leading-relaxed mb-8">
          {current.description}
        </p>

        <div className="grid grid-cols-2 gap-6 mb-10">

          <div>
  <span className="text-white/40 text-xs uppercase">
    Living Area
  </span>

  <p>{current.area}</p>
</div>

<div>
  <span className="text-white/40 text-xs uppercase">
    Bedrooms
  </span>

  <p>{current.bedrooms}</p>
</div>

<div>
  <span className="text-white/40 text-xs uppercase">
    Bathrooms
  </span>

  <p>{current.bathrooms}</p>
</div>

<div>
  <span className="text-white/40 text-xs uppercase">
    Occupancy
  </span>

  <p>{current.capacity} People</p>
</div>

        </div>

        <button
          onClick={() => navigate(current.route)}
          className="
            border
            border-white/30
            px-8
            py-4
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
          "
        >
          Explore Design →
        </button>

      </div>

    </div>

  </div>

</section>

    </div>
  );
}