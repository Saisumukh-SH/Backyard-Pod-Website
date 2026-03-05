import { useState, useEffect } from "react";

export function FAQ() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "Do backyard pods require council approval?",
      a: "In many cases studio pods can be installed under exempt development rules, but this depends on your local council regulations. Our team assists with approvals where required."
    },
    {
      q: "How long does installation take?",
      a: "Most studio pods can be delivered and installed within 4–6 weeks once permits and site preparation are complete."
    },
    {
      q: "Can the designs be customised?",
      a: "Yes. While we offer standard designs, materials, finishes and layouts can be adjusted to suit your backyard and lifestyle."
    },
    {
      q: "Do granny flats come fully self-contained?",
      a: "Yes. Our granny flats include kitchen, bathroom, plumbing and electrical connections so they function as independent living spaces."
    },
    {
      q: "What foundations are required?",
      a: "Most pods are installed on adjustable steel footing systems or slab foundations depending on the site conditions."
    },
    {
      q: "Do you service all of Australia?",
      a: "Currently we focus on Melbourne and surrounding regions, but expansion into other cities is planned."
    }
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <div>

      {/* HERO */}

      <section className="px-12 py-32 border-b border-black/10 grid md:grid-cols-2 gap-20">

        <div>

          <span className="uppercase tracking-[0.25em] text-[11px] opacity-50 block mb-6">
            Information
          </span>

          <h1 className="font-serif text-[clamp(3rem,5vw,5rem)] leading-[0.95]">
            Frequently
            <br />
            <span className="italic text-[#6F8A5E]">
              Asked Questions
            </span>
          </h1>

        </div>

        <div className="max-w-md ml-auto text-black/70 text-lg leading-relaxed">

          Find answers to common questions about our backyard pods,
          granny flats and installation process.

        </div>

      </section>



      {/* FAQ ACCORDION */}

      <section className="px-12 py-28 max-w-4xl mx-auto">

        {faqs.map((item, i) => (

          <div
            key={i}
            className="border-b border-black/10 py-8 cursor-pointer group"
            onClick={() => setActive(active === i ? null : i)}
          >

            <div className="flex justify-between items-center">

              <h3 className="font-serif text-xl group-hover:text-[#6F8A5E] transition-colors">

                {item.q}

              </h3>

              <span className="text-2xl opacity-40 group-hover:opacity-100 transition">

                {active === i ? "−" : "+"}

              </span>

            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                active === i ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >

              <p className="text-black/70 leading-relaxed">

                {item.a}

              </p>

            </div>

          </div>

        ))}

      </section>



      {/* CTA SECTION */}

      <section className="px-12 py-32 text-center">

        <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] mb-10">

          Still have
          <br />

          <span className="italic text-[#6F8A5E]">
            questions?
          </span>

        </h2>

        <p className="text-black/60 mb-12 max-w-xl mx-auto">

          Our team is happy to help. Reach out and we will guide you
          through design options, pricing and installation.

        </p>

        <a
          href="/contact"
          className="px-10 py-4 border border-black uppercase text-xs tracking-[0.2em] hover:bg-black hover:text-white transition"
        >

          Contact Us

        </a>

      </section>

    </div>
  );
}