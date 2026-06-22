import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function FAQ() {
  const navigate = useNavigate();

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
    <div className="bg-[#F5F0EB] text-[#2E2A26]">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-40 pb-24 border-b border-[#C7A77A]/15">

        <div className="max-w-4xl">

          <p className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-8">
            Information
          </p>

          <h1
            className="
              editorial-heading
              text-[#2E2A26]
              text-[clamp(4rem,8vw,8rem)]
              leading-[0.9]
              tracking-[-0.05em]
            "
          >
            Frequently
            <br />
            Asked Questions
          </h1>

          <p className="mt-8 max-w-2xl text-[#8B7E74] text-lg leading-relaxed">
            Everything you need to know about our backyard studios,
            granny flats, approvals and installation process.
          </p>

        </div>

      </section>

      {/* FAQ ACCORDION */}

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-24">

        {faqs.map((item, i) => (

          <div
            key={i}
            className="
              border-b
              border-[#C7A77A]/15
              py-8
              cursor-pointer
              group
              relative
            "
            onClick={() => setActive(active === i ? null : i)}
          >

            {/* Accent Line */}

            <span
              className="
                absolute
                -left-4
                top-0
                h-full
                w-[2px]
                bg-[#C7A77A]
                scale-y-0
                group-hover:scale-y-100
                origin-top
                transition-transform
                duration-300
              "
            />

            <div className="flex justify-between items-center gap-6">

              <h3
                className="
                  editorial-heading
                  text-2xl
                  md:text-3xl
                  transition-colors
                  duration-300
                  group-hover:text-[#C7A77A]
                "
              >
                {item.q}
              </h3>

              <span
                className={`text-2xl transition-all duration-300 ${
                  active === i
                    ? "rotate-45 text-[#C7A77A]"
                    : "text-[#8B7E74]"
                }`}
              >
                +
              </span>

            </div>

            <div
              className={`grid transition-all duration-500 ${
                active === i
                  ? "grid-rows-[1fr] mt-6"
                  : "grid-rows-[0fr]"
              }`}
            >

              <div className="overflow-hidden">

                <p className="text-[#8B7E74] leading-relaxed pr-6">

                  {item.a}

                </p>

              </div>

            </div>

          </div>

        ))}

      </section>

      {/* CTA SECTION */}

      <section className="py-32 border-t border-[#C7A77A]/15">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="w-20 h-px bg-[#C7A77A] mx-auto mb-12" />

          <h2
            className="
              editorial-heading
              text-[#2E2A26]
              text-[clamp(3rem,8vw,6rem)]
              leading-[0.92]
            "
          >
            Still Have
            <br />
            Questions?
          </h2>

          <p
            className="
              mt-8
              text-[#8B7E74]
              text-lg
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Speak with our team and we'll guide you through
            design options, pricing, approvals and installation.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="
              mt-10
              px-8
              py-4
              bg-[#2E2A26]
              text-white
              hover:opacity-90
              transition
            "
          >
            Contact Us
          </button>

        </div>

      </section>

    </div>
  );
}