import { useEffect, useState } from "react";

export default function Booking() {
  const [projectType, setProjectType] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">

      {/* HEADER */}

      <section className="max-w-5xl mx-auto px-8 pt-28 pb-16 text-center">

        <h1 className="font-serif text-[clamp(3rem,5vw,4rem)] mb-6">
          Book a Consultation
        </h1>

        <p className="text-black/60 max-w-xl mx-auto">
          Fill in your details and our team will contact you within 24 hours.
        </p>

      </section>



      {/* FORM */}

      <section className="px-8 pb-32">

        <div className="max-w-4xl mx-auto bg-white border border-black/10 p-10 md:p-14 rounded-xl shadow-sm">

          <form
            name="booking"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="grid md:grid-cols-2 gap-8"
          >

            {/* NETLIFY REQUIRED HIDDEN FIELDS */}

            <input type="hidden" name="form-name" value="booking" />
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="redirect" value="/thank-you" />



            {/* NAME */}

            <div>
              <label className="block text-xs uppercase tracking-[0.25em] mb-3 text-black/50">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                className="w-full border border-black/20 px-4 py-3 focus:outline-none focus:border-black transition"
              />
            </div>



            {/* EMAIL */}

            <div>
              <label className="block text-xs uppercase tracking-[0.25em] mb-3 text-black/50">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                className="w-full border border-black/20 px-4 py-3 focus:outline-none focus:border-black transition"
              />
            </div>



            {/* PHONE */}

            <div>
              <label className="block text-xs uppercase tracking-[0.25em] mb-3 text-black/50">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                className="w-full border border-black/20 px-4 py-3 focus:outline-none focus:border-black transition"
              />
            </div>



            {/* PROJECT TYPE */}

            <div>
              <label className="block text-xs uppercase tracking-[0.25em] mb-3 text-black/50">
                Project Type
              </label>

              <select
                name="project"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full border border-black/20 px-4 py-3 focus:outline-none focus:border-black transition"
              >
                <option value="">Select Project</option>
                <option value="Studio Pod">Studio Pod</option>
                <option value="Granny Flat">Granny Flat</option>
              </select>
            </div>



            {/* STUDIO MODELS (CONDITIONAL) */}

            {projectType === "Studio Pod" && (
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] mb-3 text-black/50">
                  Studio Model
                </label>

                <select
                  name="studio-model"
                  className="w-full border border-black/20 px-4 py-3 focus:outline-none focus:border-black transition"
                >
                  <option>Hokkori</option>
                  <option>Arbor</option>
                  <option>Vista</option>
                  <option>Luma</option>
                </select>
              </div>
            )}



            {/* GRANNY FLAT MODELS (CONDITIONAL) */}

            {projectType === "Granny Flat" && (
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] mb-3 text-black/50">
                  Granny Flat Model
                </label>

                <select
                  name="granny-model"
                  className="w-full border border-black/20 px-4 py-3 focus:outline-none focus:border-black transition"
                >
                  <option>1 Bedroom Granny Flat</option>
                  <option>2 Bedroom Granny Flat</option>
                  <option>Custom Granny Flat</option>
                </select>
              </div>
            )}



            {/* MESSAGE */}

            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-[0.25em] mb-3 text-black/50">
                Message
              </label>

              <textarea
                name="message"
                rows={5}
                className="w-full border border-black/20 px-4 py-3 focus:outline-none focus:border-black transition"
              ></textarea>
            </div>



            {/* SUBMIT BUTTON */}

            <div className="md:col-span-2 pt-6">

              <button
                type="submit"
                className="group inline-flex items-center justify-center px-10 py-4
                border border-black uppercase text-xs tracking-[0.2em]
                transition-all duration-300 hover:bg-black hover:scale-105 active:scale-95"
              >
                <span className="text-black group-hover:text-white transition-colors duration-300">
                  Submit Booking
                </span>
              </button>

            </div>

          </form>

        </div>

      </section>

    </div>
  );
}