import { useEffect, useRef } from "react";

export function About() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (heroRef.current) {
        const scroll = window.scrollY;
        heroRef.current.style.transform = `translateY(${scroll * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timeline = [
    {
      year: "2022",
      text: "Backyard Nest was founded with a mission to reimagine backyard living.",
    },
    {
      year: "2023",
      text: "First collection of studio pods launched across Melbourne.",
    },
    {
      year: "2024",
      text: "Granny flat range introduced for modern multi-generational living.",
    },
    {
      year: "2025",
      text: "100+ backyard spaces designed and delivered across Australia.",
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section className="relative min-h-screen bg-[#F5F0EB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16 pt-40 pb-24">
          <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
            <div>
              <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
                About Backyard Nest
              </span>

              <h1 className="editorial-heading text-[#2E2A26] text-[clamp(4rem,8vw,7rem)] mt-8 leading-[0.95]">
                Designed For
                <br />
                Better Living.
              </h1>

              <div className="w-24 h-[2px] bg-[#C7A77A] mt-8 mb-8" />

              <p className="text-[#5F5A55] text-lg max-w-xl leading-relaxed">
                We create beautifully designed backyard studios, granny flats
                and flexible living spaces that help homeowners unlock the full
                potential of their property.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
                className="w-full h-[750px] object-cover rounded-[32px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-[35%_65%] gap-20">
            <div>
              <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
                Introduction
              </span>

              <h2 className="editorial-heading text-[#2E2A26] text-[clamp(2.5rem,4vw,4.5rem)] mt-6 leading-tight">
                More than
                <br />
                just extra space.
              </h2>
            </div>

            <div>
              <p className="text-[#5F5A55] text-xl leading-relaxed max-w-3xl">
                We believe a backyard should be more than something you look at.
                With thoughtful design, it can become a place to work, create,
                host family, generate income, or simply enjoy everyday life.
              </p>

              <div className="w-20 h-[2px] bg-[#C7A77A] my-10" />

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Work From Home",
                    text: "Purpose-built backyard offices designed for focus and productivity.",
                  },
                  {
                    title: "Family Living",
                    text: "Flexible granny flats that support multi-generational living.",
                  },
                  {
                    title: "Creative Spaces",
                    text: "Studios and retreats designed for creativity and wellbeing.",
                  },
                  {
                    title: "Long-Term Value",
                    text: "Smart investments that add functionality and value to your property.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group p-6 bg-[#F5F0EB] rounded-[24px] border border-[rgba(46,42,38,0.08)] transition-all duration-300 hover:border-[#C7A77A] hover:-translate-y-1"
                  >
                    <h3 className="text-[#2E2A26] text-lg mb-3">
                      {item.title}
                    </h3>

                    <p className="text-[#5F5A55] text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}

      <section className="bg-[#F5F0EB] py-36">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-[45%_55%] gap-20 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80"
                alt="Backyard Nest Design Philosophy"
                className="w-full h-[700px] object-cover rounded-[32px]"
              />

              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-5">
                <p className="uppercase tracking-[0.25em] text-[#A08E7C] text-xs mb-2">
                  Our Approach
                </p>

                <p className="text-[#2E2A26]">
                  Thoughtful design. Lasting value.
                </p>
              </div>
            </div>

            <div>
              <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
                Our Philosophy
              </span>

              <h2 className="editorial-heading text-[#2E2A26] text-[clamp(2.8rem,5vw,5rem)] leading-tight mt-6">
                Every backyard deserves more potential.
              </h2>

              <div className="w-20 h-[2px] bg-[#C7A77A] my-10" />

              <div className="space-y-8 text-[#5F5A55] text-lg leading-relaxed">
                <p>
                  We believe outdoor space should be more than something you
                  look at through a window. With thoughtful design, it can
                  become a place to work, create, host family, generate income
                  or simply enjoy everyday life.
                </p>

                <p>
                  Our designs balance aesthetics, practicality and long-term
                  value. Every studio, granny flat and backyard retreat is
                  carefully planned to complement the existing home while making
                  the most of natural light, privacy and available space.
                </p>

                <p>
                  Rather than building more of the same, we focus on creating
                  spaces that feel purposeful, timeless and genuinely useful for
                  the people who live in them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE BACKYARD NEST */}

      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-24">
            <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
              Why Choose Us
            </span>

            <h2 className="editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] mt-6">
              Designed With Purpose.
              <br />
              Built With Care.
            </h2>

            <div className="w-24 h-[2px] bg-[#C7A77A] mx-auto mt-8" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Architectural Thinking",
                text: "Every project begins with a thoughtful design process focused on space, light, functionality and long-term usability.",
              },
              {
                number: "02",
                title: "Quality Craftsmanship",
                text: "We prioritise durable materials, careful detailing and proven construction methods to create spaces built to last.",
              },
              {
                number: "03",
                title: "Designed Around You",
                text: "No two families live the same way. Every backyard space is tailored to suit your lifestyle, goals and property.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group bg-[#F5F0EB] border border-[rgba(46,42,38,0.08)] rounded-[28px] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#C7A77A]"
              >
                <span className="text-[#C7A77A] text-sm tracking-[0.3em]">
                  {item.number}
                </span>

                <h3 className="text-[#2E2A26] text-3xl mt-6 mb-6 editorial-heading">
                  {item.title}
                </h3>

                <p className="text-[#5F5A55] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}

      <section className="bg-[#EFE8DF] py-36">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-24">
            <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
              By The Numbers
            </span>

            <h2 className="editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] mt-6">
              Measured By The Spaces
              <br />
              We Create
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              ["100+", "Projects Delivered"],
              ["3+", "Years Growing"],
              ["98%", "Client Satisfaction"],
              ["100%", "Custom Designed"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="text-center border-l border-[rgba(46,42,38,0.08)] first:border-l-0"
              >
                <div className="text-[clamp(3rem,6vw,5rem)] font-light text-[#2E2A26] mb-4">
                  {number}
                </div>

                <div className="w-12 h-[2px] bg-[#C7A77A] mx-auto mb-4" />

                <div className="uppercase tracking-[0.25em] text-[#A08E7C] text-xs">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}

      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <span className="uppercase tracking-[0.3em] text-xs text-[#A08E7C] block mb-20">
            History
          </span>

          <div className="grid md:grid-cols-4 gap-16">
            {timeline.map((item, index) => (
              <div key={index}>
                <div className="text-xl font-semibold text-[#2E2A26] mb-6">
                  {item.year}
                </div>

                <div className="relative h-[2px] bg-[rgba(46,42,38,0.10)] mb-6">
                  <div className="w-4 h-4 rounded-full bg-[#C7A77A] absolute -top-[6px]" />
                </div>

                <p className="text-[#5F5A55] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}

      <section className="bg-[#F5F0EB] py-40">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-[#A08E7C]">
            Our Philosophy
          </span>

          <div className="w-20 h-[2px] bg-[#C7A77A] mx-auto mt-8 mb-12" />

          <h2 className="editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] leading-tight">
            The best backyard spaces
            <br />
            don't simply add room.
            <span className="block text-[#A08E7C] mt-6">
              They create new possibilities.
            </span>
          </h2>

          <p className="mt-12 text-lg text-[#5F5A55] max-w-3xl mx-auto leading-relaxed">
            Every project begins with a simple question: how can this space
            improve everyday life? Whether it's a home office, creative studio,
            guest retreat or granny flat, thoughtful design creates
            opportunities that extend far beyond additional square metres.
          </p>

          <div className="w-20 h-[2px] bg-[#C7A77A] mx-auto mt-12" />
        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#EFE8DF] py-40">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-[#A08E7C]">
            Start Your Project
          </span>

          <h2 className="editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] mt-8 leading-tight">
            Bring Your Backyard
            <br />
            Vision To Life
          </h2>

          <p className="mt-8 text-[#5F5A55] text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're planning a backyard studio, granny flat or flexible
            living space, we're here to help transform your ideas into a
            beautifully designed reality.
          </p>

          <div className="w-20 h-[2px] bg-[#C7A77A] mx-auto my-12" />

          <a
            href="/booking"
            className="
inline-flex items-center justify-center
px-10 py-4
border border-[#2E2A26]
text-[#2E2A26]
bg-transparent
rounded-full
transition-all duration-300
hover:bg-[#C7A77A]
hover:text-[#F5F0EB]
"
          >
            Request A Quote
          </a>
        </div>
      </section>
    </div>
  );
}
