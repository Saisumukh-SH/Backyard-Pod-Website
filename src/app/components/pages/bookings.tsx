import { useEffect, useState } from "react";

export default function Booking() {
  const [projectType, setProjectType] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">

{/* HERO */}

<section className="bg-[#F5F0EB] py-36">

  <div className="max-w-5xl mx-auto px-8 text-center">

    <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
      Book A Consultation
    </span>

    <h1 className="editorial-heading text-[#2E2A26] text-[clamp(3rem,6vw,6rem)] mt-8 leading-[0.95]">
      Let's Discuss
      <br />
      Your Project
    </h1>

    <p className="text-[#5F5A55] max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
      Tell us a little about your vision and we'll arrange a consultation
      to explore the possibilities for your backyard space.
    </p>

  </div>

</section>



{/* FORM */}

<section className="px-8 pb-32 bg-[#F5F0EB]">

  <div className="max-w-5xl mx-auto bg-white rounded-[32px] p-10 md:p-14 border border-[rgba(46,42,38,0.08)] shadow-sm">

    <h3 className="text-2xl text-[#2E2A26] mb-2">
      Tell Us About Your Project
    </h3>

    <p className="text-[#5F5A55] mb-10">
      Share a few details and our team will contact you within 24 hours.
    </p>

    <form
      name="booking"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/thank-you"
      className="space-y-8"
    >

      {/* NETLIFY */}

      <input type="hidden" name="form-name" value="booking" />

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

          {["Studio Pod", "Granny Flat"].map((type) => (

            <button
              key={type}
              type="button"
              onClick={() => setProjectType(type)}
              className={`
                px-6 py-3 rounded-full transition-all duration-300 border
                ${
                  projectType === type
                    ? "bg-[#C7A77A] border-[#C7A77A] text-[#2E2A26]"
                    : "bg-[#F5F0EB] border-[rgba(46,42,38,0.08)] text-[#5F5A55]"
                }
              `}
            >
              {type}
            </button>

          ))}

        </div>

        <input
          type="hidden"
          name="project"
          value={projectType}
        />

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
            px-5 py-4
            rounded-2xl
            border border-[rgba(46,42,38,0.08)]
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
            px-5 py-4
            rounded-2xl
            border border-[rgba(46,42,38,0.08)]
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
            px-5 py-4
            rounded-2xl
            border border-[rgba(46,42,38,0.08)]
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
            px-5 py-4
            rounded-2xl
            border border-[rgba(46,42,38,0.08)]
            bg-[#FAF8F5]
            text-[#2E2A26]
            focus:border-[#C7A77A]
            focus:bg-white
            outline-none
            transition-all
          "
        />

      </div>

      {/* STUDIO MODEL */}

      {projectType === "Studio Pod" && (

        <select
          name="studio-model"
          className="
            w-full
            px-5 py-4
            rounded-2xl
            border border-[rgba(46,42,38,0.08)]
            bg-[#FAF8F5]
            text-[#2E2A26]
            focus:border-[#C7A77A]
            outline-none
          "
        >
          <option>Select Studio Model</option>
          <option>Hokkori</option>
          <option>Arbor</option>
          <option>Vista</option>
          <option>Luma</option>
        </select>

      )}

      {/* GRANNY FLAT MODEL */}

      {projectType === "Granny Flat" && (

        <select
          name="granny-model"
          className="
            w-full
            px-5 py-4
            rounded-2xl
            border border-[rgba(46,42,38,0.08)]
            bg-[#FAF8F5]
            text-[#2E2A26]
            focus:border-[#C7A77A]
            outline-none
          "
        >
          <option>Select Granny Flat Model</option>
          <option>1 Bedroom Granny Flat</option>
          <option>2 Bedroom Granny Flat</option>
          <option>Custom Granny Flat</option>
        </select>

      )}

      {/* MESSAGE */}

      <textarea
        name="message"
        rows={6}
        placeholder="Tell us about your project, ideas, timeline or any questions you may have..."
        className="
          w-full
          px-5 py-4
          rounded-2xl
          border border-[rgba(46,42,38,0.08)]
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
            px-10 py-4
            bg-[#2E2A26]
            text-[#F5F0EB]
            rounded-full
            transition-all duration-300
            hover:bg-[#C7A77A]
            hover:text-[#2E2A26]
            hover:-translate-y-1
          "
        >
          Book Consultation
        </button>

      </div>

    </form>

  </div>

</section>

    </div>
  );
}