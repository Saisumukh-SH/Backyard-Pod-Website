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
      text: "Design MyBackyard was founded with a mission to reimagine backyard living."
    },
    {
      year: "2023",
      text: "First collection of studio pods launched across Melbourne."
    },
    {
      year: "2024",
      text: "Granny flat range introduced for modern multi-generational living."
    },
    {
      year: "2025",
      text: "100+ backyard spaces designed and delivered across Australia."
    }
  ];

  return (

    <div>

      {/* HERO */}

      <section className="relative h-[85vh] overflow-hidden">

        <div
          ref={heroRef}
          className="absolute inset-0"
        >

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80"
            className="w-full h-full object-cover"
          />

        </div>

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-20 left-12 text-white">

          <h1 className="font-serif text-[clamp(3rem,6vw,6rem)]">
            About
          </h1>

        </div>

      </section>



      {/* INTRODUCTION */}

      <section className="px-12 py-32 grid md:grid-cols-2 gap-20">

        <div className="uppercase tracking-[0.25em] text-xs opacity-50">
          Introduction
        </div>

        <div className="text-lg leading-relaxed text-black/70 space-y-6">

          <p>
            Design MyBackyard creates beautifully crafted backyard studios and
            granny flats designed for modern Australian living.
          </p>

          <p>
            Our philosophy blends architecture, efficiency and timeless design —
            transforming unused backyard space into purposeful environments for
            work, living and relaxation.
          </p>

          <p>
            Every design is carefully considered to maximise space, natural
            light and long-term value.
          </p>

        </div>

      </section>



      {/* OUR COMPANY */}

      <section className="px-12 py-32 grid md:grid-cols-2 gap-20 items-center">

        <div>

          <span className="uppercase tracking-[0.25em] text-xs opacity-50 block mb-6">
            Our Company
          </span>

          <p className="text-lg text-black/70 leading-relaxed mb-6">
            Design MyBackyard was founded with the belief that outdoor space
            should be as thoughtfully designed as the homes we live in.
          </p>

          <p className="text-lg text-black/70 leading-relaxed mb-6">
            Our team combines architectural thinking with practical construction
            methods to deliver backyard studios and granny flats that are
            efficient, elegant and built to last.
          </p>

          <p className="text-lg text-black/70 leading-relaxed">
            Today we continue to focus on creating spaces that improve how
            people work, live and connect.
          </p>

        </div>

        <img
          src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1400&q=80"
          className="w-full h-[520px] object-cover"
        />

      </section>



      {/* HISTORY TIMELINE */}

      <section className="px-12 py-32">

        <span className="uppercase tracking-[0.25em] text-xs opacity-50 block mb-20">
          History
        </span>

        <div className="overflow-x-auto">

          <div className="flex gap-40 min-w-[1000px]">

            {timeline.map((item, index) => (

              <div key={index} className="w-[260px]">

                <div className="text-xl font-semibold mb-6">
                  {item.year}
                </div>

                <div className="relative h-[2px] bg-black/30 mb-6">

                  <div className="w-5 h-5 rounded-full border border-black bg-white absolute -top-[9px]" />

                </div>

                <p className="text-black/70 leading-relaxed">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* LEADERSHIP QUOTE */}

      <section className="px-12 py-32 grid md:grid-cols-2 gap-20 items-center">

        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
          className="w-full h-[420px] object-cover grayscale"
        />

        <div>

          <h3 className="font-serif text-4xl leading-relaxed mb-8">

            "Our reputation for innovation comes from the creative approach
            we take to every project."

          </h3>

          <p className="text-black/50">
            Founder — Design MyBackyard
          </p>

        </div>

      </section>



      {/* CTA */}

      <section className="px-12 py-32 text-center">

        <h2 className="font-serif text-[clamp(3rem,5vw,4rem)] mb-12">

          Let's design your
          <br />

          <span className="italic text-[#6F8A5E]">
            backyard space
          </span>

        </h2>

        <a
          href="/booking"
          className="px-10 py-4 border border-black uppercase text-xs tracking-[0.2em] hover:bg-black hover:text-white transition"
        >
          Request a Quote
        </a>

      </section>


    </div>

  );

}