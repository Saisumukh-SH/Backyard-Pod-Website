import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function StudioCategory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const sizes = [
    {
      id: 15,
      label: "Hikkori 85",
      route: "/products/StudioProduct1",
      image: "/images/studio/studyNook/study_nook_hero.webp",
      description:
        "A modern backyard studio with clean horizontal cladding and wide glass doors. Designed to maximise natural light, it provides a bright and practical space ideal for a home office, studio, or quiet workspace.",
      footprint: "3 × 5 m",
      height: "2.7 m",
      glazing: "Single wall",
      capacity: "1 person",
    },
    {
      id: 22,
      label: "The Brighton ",
      route: "/products/StudioProduct2",
      image: "/images/studio/studio1/studio1.3.webp",
      description:
        "A compact modern backyard studio with clean cladding and large glass doors framed in black aluminum. Designed to bring in natural light, it creates a bright, functional space ideal for a home office, studio, or private retreat.",
      footprint: "4 × 5.5 m",
      height: "2.7 m",
      glazing: "Double wall",
      capacity: "2 people",
    },
    {
      id: 30,
      label: "The Aspen 20",
      route: "/products/StudioProduct3",
      image: "/images/studio/studio2/studio2.3.webp",
      description: "...",
      footprint: "5 × 6 m",
      height: "2.7 m",
      glazing: "Clerestory",
      capacity: "2–3 people",
    },
    {
      id: 37,
      label: "The Nest 15",
      route: "/products/StudioProduct4",
      image: "/images/studio/studio3/studio3.3.webp",
      description: "...",
      footprint: "6 × 6 m",
      height: "2.7 m",
      glazing: "Panoramic",
      capacity: "3 people",
    },
    {
  id: 99,
  label: "Bespoke Design",
  description:
    "Every property is different. Collaborate with our design team to create a one-of-a-kind studio tailored specifically to your needs, site conditions and aesthetic preferences.",
  image: "/images/custom_design_hero.webp",
  route: "/contact",
}
  ];

  const [activeSize, setActiveSize] = useState(15);

  const current = sizes.find((s) => s.id === activeSize)!;

  return (
    <div>


{/* LUXURY COLLECTION GRID */}

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
              Footprint
            </span>

            <p>{current.footprint}</p>
          </div>

          <div>
            <span className="text-white/40 text-xs uppercase">
              Height
            </span>

            <p>{current.height}</p>
          </div>

          <div>
            <span className="text-white/40 text-xs uppercase">
              Glazing
            </span>

            <p>{current.glazing}</p>
          </div>

          <div>
            <span className="text-white/40 text-xs uppercase">
              Capacity
            </span>

            <p>{current.capacity}</p>
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
