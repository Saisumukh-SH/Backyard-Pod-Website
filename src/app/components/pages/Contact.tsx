import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      navigate("/thank-you");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      {/* HERO */}

      <section className="bg-[#F5F0EB] py-40">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-[60%_40%] gap-20 items-center">
            <div>
              <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
                Contact Us
              </span>

              <h1 className="editorial-heading text-[#2E2A26] text-[clamp(4rem,7vw,7rem)] mt-8 leading-[0.95]">
                Let's Start
                <br />A Conversation.
              </h1>

              <div className="w-24 h-[2px] bg-[#C7A77A] mt-8 mb-8" />

              <p className="text-[#5F5A55] text-lg max-w-xl leading-relaxed">
                Whether you're planning a backyard studio, granny flat, home
                office or simply exploring ideas, our team is here to help guide
                your next step.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <div className="bg-white px-5 py-3 rounded-full border border-[rgba(46,42,38,0.08)]">
                  Backyard Studios
                </div>

                <div className="bg-white px-5 py-3 rounded-full border border-[rgba(46,42,38,0.08)]">
                  Granny Flats
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-[32px] p-10 border border-[rgba(46,42,38,0.08)]">
                <span className="uppercase tracking-[0.25em] text-[#A08E7C] text-xs">
                  Response Time
                </span>

                <h3 className="text-[#2E2A26] text-3xl mt-4 mb-4">
                  We're Here To Help
                </h3>

                <p className="text-[#5F5A55] leading-relaxed">
                  Most enquiries receive a response within 24 hours. Tell us
                  about your project and we'll point you in the right direction.
                </p>

                <div className="flex items-center gap-3 mt-8">
                  <div className="w-3 h-3 rounded-full bg-[#C7A77A]" />

                  <span className="text-[#5F5A55] text-sm">
                    Average response time: Within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}

      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-[35%_65%] gap-16">
            {/* LEFT SIDE */}

            <div>
              <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
                Your Project
              </span>

              <h2 className="editorial-heading text-[#2E2A26] text-[clamp(2.5rem,4vw,4rem)] mt-6 leading-tight">
                Tell Us What
                <br />
                You're Planning
              </h2>

              <p className="text-[#5F5A55] mt-8 leading-relaxed">
                Select the option that best describes your project and we'll
                tailor our response accordingly.
              </p>
            </div>

            {/* FORM CARD */}

            <div className="bg-white rounded-[32px] p-10 md:p-12 border border-[rgba(46,42,38,0.08)] shadow-sm">
              <h3 className="text-2xl text-[#2E2A26] mb-2">
                Tell Us About Your Project
              </h3>

              <p className="text-[#5F5A55] mb-10">
                Share a few details and we'll get back to you within 24 hours.
              </p>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <input type="hidden" name="form-name" value="contact" />

                <p hidden>
                  <label>
                    Don't fill this out:
                    <input name="bot-field" />
                  </label>
                </p>

                {/* PROJECT TYPE */}

                <div>
                  <label className="uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-4">
                    Project Type
                  </label>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Backyard Studio",
                      "Granny Flat",
                      "Not Sure Yet",
                    ].map((item) => (
                      <label
                        key={item}
                        className="
              cursor-pointer
            "
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={item}
                          className="peer hidden"
                        />

                        <div
                          className="
                px-6 py-3
                rounded-full
                border
                border-[rgba(46,42,38,0.08)]
                bg-[#F5F0EB]
                text-[#5F5A55]
                transition-all
                duration-300
                peer-checked:bg-[#C7A77A]
                peer-checked:text-[#2E2A26]
                peer-checked:border-[#C7A77A]
                hover:border-[#C7A77A]
              "
                        >
                          {item}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* DETAILS */}

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="
          w-full
          px-5
          py-4
          rounded-2xl
          border
          border-[rgba(46,42,38,0.08)]
          bg-[#FAF8F5]
          text-[#2E2A26]
          focus:border-[#C7A77A]
          focus:bg-white
          outline-none
          transition-all
        "
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="
          w-full
          px-5
          py-4
          rounded-2xl
          border
          border-[rgba(46,42,38,0.08)]
          bg-[#FAF8F5]
          text-[#2E2A26]
          focus:border-[#C7A77A]
          focus:bg-white
          outline-none
          transition-all
        "
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="
          w-full
          px-5
          py-4
          rounded-2xl
          border
          border-[rgba(46,42,38,0.08)]
          bg-[#FAF8F5]
          text-[#2E2A26]
          focus:border-[#C7A77A]
          focus:bg-white
          outline-none
          transition-all
        "
                  />

                  <input
                    type="text"
                    name="location"
                    placeholder="Project Location"
                    className="
          w-full
          px-5
          py-4
          rounded-2xl
          border
          border-[rgba(46,42,38,0.08)]
          bg-[#FAF8F5]
          text-[#2E2A26]
          focus:border-[#C7A77A]
          focus:bg-white
          outline-none
          transition-all
        "
                  />
                </div>

                {/* MESSAGE */}

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project..."
                  className="
        w-full
        px-5
        py-4
        rounded-2xl
        border
        border-[rgba(46,42,38,0.08)]
        bg-[#FAF8F5]
        text-[#2E2A26]
        resize-none
        focus:border-[#C7A77A]
        focus:bg-white
        outline-none
        transition-all
      "
                />

                {/* BUTTON */}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="
          px-8 py-4
          bg-[#2E2A26]
          text-[#F5F0EB]
          rounded-full
          transition-all
          duration-300
          hover:bg-[#C7A77A]
          hover:text-[#2E2A26]
          hover:-translate-y-1
        "
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}

      <section className="bg-[#EFE8DF] py-36">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-24">
            <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
              What Happens Next
            </span>

            <h2 className="editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] mt-6">
              A Simple Process,
              <br />
              Designed Around You
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Reach Out",
                text: "Tell us about your project, goals and ideas through our enquiry form.",
              },
              {
                number: "02",
                title: "Initial Consultation",
                text: "We'll discuss your space, requirements and answer any questions.",
              },
              {
                number: "03",
                title: "Design & Planning",
                text: "Our team develops a solution tailored to your property and lifestyle.",
              },
              {
                number: "04",
                title: "Bring It To Life",
                text: "Watch your backyard transform into a beautifully designed space.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="
            bg-white
            rounded-[28px]
            p-8
            border border-[rgba(46,42,38,0.08)]
            hover:border-[#C7A77A]
            hover:-translate-y-1
            transition-all duration-300
          "
              >
                <div className="text-[#C7A77A] tracking-[0.3em] text-sm mb-6">
                  {step.number}
                </div>

                <h3 className="text-[#2E2A26] text-2xl mb-4">{step.title}</h3>

                <p className="text-[#5F5A55] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-white py-36">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
              Frequently Asked Questions
            </span>

            <h2 className="editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] mt-6">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Timelines vary depending on the project scope, approvals and site conditions, but most projects move from design to completion within a few months.",
              },
              {
                question: "Do you only work in Melbourne?",
                answer:
                  "We primarily service Melbourne and surrounding areas, with select projects undertaken across Victoria.",
              },
              {
                question: "Can a granny flat be used as a rental property?",
                answer:
                  "Regulations vary by location. We can guide you through the options available for your property.",
              },
              {
                question: "Do I need council approval?",
                answer:
                  "Approval requirements depend on the size and type of structure. Our team can help identify the requirements for your site.",
              },
            ].map((item) => (
              <details
                key={item.question}
                className="
            group
            bg-[#F5F0EB]
            rounded-[24px]
            border border-[rgba(46,42,38,0.08)]
            p-6
          "
              >
                <summary className="cursor-pointer list-none flex justify-between items-center text-[#2E2A26] text-lg">
                  {item.question}

                  <span className="text-[#C7A77A] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 text-[#5F5A55] leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}

      <section className="bg-[#F5F0EB] py-36">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-[40%_60%] gap-16 items-center">
            {/* LEFT CONTENT */}

            <div>
              <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
                Visit Us
              </span>

              <h2 className="editorial-heading text-[#2E2A26] text-[clamp(2.5rem,4vw,4rem)] mt-6 leading-tight">
                Let's Talk About
                <br />
                Your Backyard Vision
              </h2>

              <p className="mt-8 text-[#5F5A55] leading-relaxed max-w-md">
                Whether you're planning a backyard studio, granny flat or
                flexible living space, we'd love to discuss your ideas and help
                bring your project to life.
              </p>

              <div className="mt-10 space-y-4">
                <div className="bg-white rounded-2xl p-6 border border-[rgba(46,42,38,0.08)]">
                  <p className="text-[#A08E7C] text-xs uppercase tracking-[0.2em] mb-2">
                    Address
                  </p>

                  <p className="text-[#2E2A26] leading-relaxed">
                    Unit 8 / 21–35 Ricketts Road
                    <br />
                    Mount Waverley VIC 3149
                    <br />
                    Melbourne, Australia
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[rgba(46,42,38,0.08)]">
                  <p className="text-[#A08E7C] text-xs uppercase tracking-[0.2em] mb-2">
                    Office Hours
                  </p>

                  <p className="text-[#2E2A26]">
                    Monday – Friday
                    <br />
                    9:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Unit+8+21-35+Ricketts+Road+Mount+Waverley+VIC"
                target="_blank"
                rel="noopener noreferrer"
                className="
            inline-flex items-center
            mt-8
            px-8 py-3
            bg-white
            border border-[rgba(46,42,38,0.08)]
            rounded-full
            text-[#5F5A55]
            transition-all duration-300
            hover:border-[#C7A77A]
            hover:text-[#2E2A26]
            hover:-translate-y-1
          "
              >
                Get Directions
              </a>
            </div>

            {/* MAP */}

            <div className="overflow-hidden rounded-[32px] border border-[rgba(46,42,38,0.08)] shadow-sm">
              <iframe
                title="Backyard Nest Location"
                src="https://maps.google.com/maps?q=21-35%20Ricketts%20Road%20Mount%20Waverley%20VIC&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[550px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#EFE8DF] py-40">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
            Ready To Get Started?
          </span>

          <h2 className="editorial-heading text-[#2E2A26] text-[clamp(3rem,6vw,6rem)] mt-8 leading-[0.95]">
            Let's Bring Your
            <br />
            Backyard Vision
            <br />
            To Life.
          </h2>

          <p className="mt-8 text-[#5F5A55] text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're planning a studio, granny flat or flexible living
            space, we're here to help turn ideas into beautifully designed
            spaces that add value to everyday living.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <a
              href="/booking"
              className="
px-10 py-4
bg-white
border border-[rgba(46,42,38,0.08)]
text-[#5F5A55]
rounded-full
transition-all duration-300
hover:border-[#C7A77A]
hover:text-[#2E2A26]
hover:-translate-y-1
"
            >
              Request A Quote
            </a>

            <a
              href="tel:0390000000"
              className="
px-10 py-4
bg-transparent
text-[#A08E7C]
rounded-full
border border-[#C7A77A]/50
transition-all duration-300
hover:bg-[#C7A77A]/10
hover:border-[#C7A77A]
hover:text-[#2E2A26]
"
            >
              Call Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
