import { useEffect } from "react";

export function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>

      {/* HERO */}

      <section className="px-12 py-32 border-b border-black/10 grid md:grid-cols-2 gap-20">

        <div>

          <span className="uppercase tracking-[0.25em] text-[11px] opacity-50 block mb-6">
            Get in Touch
          </span>

          <h1 className="font-serif text-[clamp(3rem,5vw,5rem)] leading-[0.95]">

            Contact
            <br/>

            <span className="italic text-[#6F8A5E]">
              Our Team
            </span>

          </h1>

        </div>

        <div className="max-w-md ml-auto text-black/70 text-lg leading-relaxed">

          Whether you're exploring a studio pod, planning a granny flat,
          or simply have questions, our team is here to help.

        </div>

      </section>



{/* CONTACT SECTION */}

<section className="bg-[#1E1E1C] py-32 px-10 text-white">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

    {/* LEFT INFO */}

    <div>

      <span className="uppercase tracking-[0.25em] text-xs opacity-50 block mb-6">
        Studio Information
      </span>

      <h2 className="font-serif text-5xl mb-10">
        Let's start your project
      </h2>

      <p className="text-white/70 leading-relaxed mb-14 max-w-md">
        Have a question about studio pods or granny flats? Send us a message
        and our team will get back to you shortly.
      </p>

      <div className="space-y-10 text-white/80">

        <div>
          <p className="uppercase text-xs tracking-[0.2em] opacity-40 mb-2">
            Email
          </p>
          hello@designmybackyard.com.au
        </div>

        <div>
          <p className="uppercase text-xs tracking-[0.2em] opacity-40 mb-2">
            Phone
          </p>
          03 9000 0000
        </div>

        <div>
          <p className="uppercase text-xs tracking-[0.2em] opacity-40 mb-2">
            Location
          </p>
          Melbourne, Victoria
        </div>

      </div>

    </div>



    {/* FORM CARD */}

    <div className="bg-white text-black p-12 shadow-2xl rounded-xl border border-black/10">

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/thank-you"
        className="space-y-10"
      >

        <input type="hidden" name="form-name" value="contact" />

        {/* NAME */}

        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-black/40">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            required
            className="w-full border-b border-black/20 py-3 outline-none focus:border-[#6F8A5E] transition"
          />
        </div>

        {/* EMAIL */}

        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-black/40">
            Email
          </label>

          <input
            type="email"
            name="email"
            required
            className="w-full border-b border-black/20 py-3 outline-none focus:border-[#6F8A5E] transition"
          />
        </div>

        {/* PHONE */}

        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-black/40">
            Phone
          </label>

          <input
            type="tel"
            name="phone"
            className="w-full border-b border-black/20 py-3 outline-none focus:border-[#6F8A5E] transition"
          />
        </div>

        {/* MESSAGE */}

        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-black/40">
            Message
          </label>

          <textarea
            name="message"
            rows={4}
            required
            className="w-full border-b border-black/20 py-3 outline-none focus:border-[#6F8A5E] transition"
          />
        </div>

        {/* BUTTON */}

        <button
          type="submit"
          className="w-full py-4 bg-[#1E1E1C] text-white uppercase text-xs tracking-[0.25em] hover:bg-[#6F8A5E] transition"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>

</section>



      {/* MAP */}

      <section className="px-12 py-28">

        <div className="border border-black/10 overflow-hidden">

          <iframe
            title="map"
            src="https://maps.google.com/maps?q=melbourne&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[420px]"
          />

        </div>

      </section>



      {/* CTA */}

      <section className="px-12 py-32 text-center">

        <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] mb-12">

          Start your
          <br/>

          <span className="italic text-[#6F8A5E]">
            backyard project
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