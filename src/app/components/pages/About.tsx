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
    { year: "2022", text: "Design MyBackyard was founded with a mission to reimagine backyard living." },
    { year: "2023", text: "First collection of studio pods launched across Melbourne." },
    { year: "2024", text: "Granny flat range introduced for modern multi-generational living." },
    { year: "2025", text: "100+ backyard spaces designed and delivered across Australia." },
  ];

  return (
    <div className="bg-white text-black">

      {/* HERO */}

      <section className="relative h-[85vh] overflow-hidden">

        <div ref={heroRef} className="absolute inset-0 scale-105">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-24 left-10 md:left-20 text-white">
          <h1 className="font-serif text-[clamp(3rem,6vw,6rem)]">About</h1>
        </div>

      </section>



      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-8 md:px-16 py-32 grid md:grid-cols-2 gap-24">

        <div className="uppercase tracking-[0.3em] text-xs opacity-50">
          Introduction
        </div>

        <div className="text-lg leading-relaxed text-black/70 space-y-6 max-w-xl">
          <p>
            Design MyBackyard creates well-designed backyard studios and granny
            flats for modern Australian homes.
            We believe the backyard should be more than just open space. With
            thoughtful design, it can become a place to work, create, host
            family or simply step away from the main house.
          </p>

          <p>
            Our goal is simple. We turn underused backyard areas into practical
            and beautiful spaces that people enjoy using every day.
          </p>

          <p>
            From backyard offices and garden studios to fully self contained
            granny flats, our designs help homeowners add extra space without
            the disruption of major home extensions.
          </p>

          <p>
            Each project is carefully planned to make the most of available
            space, natural light and privacy while fitting naturally with the
            existing home and surroundings.
            Many of our clients use these spaces as work-from-home offices,
            guest accommodation, creative studios or rental granny flats. It
            gives their property greater flexibility and long-term value.
          </p>
        </div>

      </section>



      {/* OUR COMPANY */}

      <section className="max-w-7xl mx-auto px-8 md:px-16 py-32 grid md:grid-cols-2 gap-24 items-center">

        <div>

          <span className="uppercase tracking-[0.3em] text-xs opacity-50 block mb-8">
            Our Company
          </span>

          <div className="space-y-6 text-lg text-black/70 leading-relaxed max-w-xl">

            <p>
              Design MyBackyard started with a simple idea. Outdoor spaces deserve
              the same level of design attention as the homes we live in. Our team
              combines architectural thinking with practical building experience
              to create backyard studios, garden offices and granny flats that are
              functional, efficient and built to last.
            </p>

            <p>
              We focus on smart layouts, durable materials and clean design that
              feels comfortable and easy to use. Every project is approached with
              the goal of creating a space that works well today and continues to
              add value over time.
            </p>

            <p>
              Today we work with homeowners who want to create secondary
              dwellings, backyard offices and private retreats that fit naturally
              within their property.
            </p>

          </div>

        </div>

        <img
          src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1400&q=80"
          className="w-full h-[520px] object-cover rounded-xl shadow-xl"
        />

      </section>



      {/* WHY CHOOSE */}

      <section className="bg-[#F7F5F0] py-32">

        <div className="max-w-7xl mx-auto px-8 md:px-16">

          <h2 className="font-serif text-[clamp(3rem,5vw,4rem)] mb-20">
            Why Homeowners Choose Design MyBackyard
          </h2>

          <div className="grid md:grid-cols-4 gap-12">

            {[
              {
                title: "Thoughtful design",
                text: "Every backyard studio and granny flat is designed to maximise usable space, natural light and comfort."
              },
              {
                title: "Built for Australian living",
                text: "Our spaces are designed to suit the Australian climate and everyday lifestyle."
              },
              {
                title: "A practical way to expand your home",
                text: "Backyard studios and granny flats provide extra space for working from home, hosting family, or generating rental income."
              },
              {
                title: "Built to last",
                text: "We prioritise quality materials and practical construction methods so every space remains useful for many years."
              }
            ].map((item, i) => (

              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">

                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>

                <p className="opacity-60 text-sm leading-relaxed">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

          <div className="max-w-4xl mt-20">
            <h2 className="font-serif text-[clamp(1.3rem,3vw,2rem)]">
              Design MyBackyard works with homeowners across Melbourne and surrounding areas to create backyard studios, garden offices, and granny flats that make better use of outdoor space.
            </h2>
          </div>

        </div>

      </section>



      {/* TIMELINE */}

      <section className="max-w-7xl mx-auto px-8 md:px-16 py-32">

        <span className="uppercase tracking-[0.3em] text-xs opacity-50 block mb-20">
          History
        </span>

        <div className="grid md:grid-cols-4 gap-16">

          {timeline.map((item, index) => (

            <div key={index}>

              <div className="text-xl font-semibold mb-6">{item.year}</div>

              <div className="relative h-[2px] bg-black/20 mb-6">
                <div className="w-4 h-4 rounded-full bg-[#6F8A5E] absolute -top-[6px]" />
              </div>

              <p className="text-black/70 leading-relaxed">{item.text}</p>

            </div>

          ))}

        </div>

      </section>



      {/* QUOTE */}

      <section className="max-w-7xl mx-auto px-8 md:px-16 py-32 grid md:grid-cols-2 gap-24 items-center">

        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
          className="w-full h-[420px] object-cover grayscale rounded-xl"
        />

        <div>

          <h3 className="font-serif text-4xl leading-relaxed mb-8">
            "Our reputation for innovation comes from the creative approach we
            take to every project."
          </h3>

          <p className="text-black/50">Founder — Design MyBackyard</p>

        </div>

      </section>



      {/* CTA */}

      <section className="px-8 md:px-16 py-32 text-center border-t border-black/10">

        <h2 className="font-serif text-[clamp(3rem,5vw,4rem)] mb-12">
          Let's design your
          <br />
          <span className="italic text-[#6F8A5E]">backyard space</span>
        </h2>

        <a href="/booking" className="btn-primary">
  Request a Quote
</a>

      </section>

    </div>
  );
}