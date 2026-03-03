import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-8 py-28 max-w-3xl mx-auto">
      <h1 className="font-serif text-5xl mb-6">
        Book a Consultation
      </h1>

      <p className="opacity-60 mb-12">
        Fill in your details and our team will contact you within 24 hours.
      </p>

      {/* NETLIFY FORM */}
      <form
        name="booking"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-8"
      >
        {/* Required hidden input for Netlify */}
        <input type="hidden" name="form-name" value="booking" />
        <input type="hidden" name="bot-field" />

        {/* Name */}
        <div>
          <label className="block text-sm uppercase tracking-widest mb-2 opacity-60">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-black/20 px-4 py-3 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm uppercase tracking-widest mb-2 opacity-60">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-black/20 px-4 py-3 focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm uppercase tracking-widest mb-2 opacity-60">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full border border-black/20 px-4 py-3 focus:outline-none"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-sm uppercase tracking-widest mb-2 opacity-60">
            Project Type
          </label>
          <select
            name="project"
            className="w-full border border-black/20 px-4 py-3 focus:outline-none"
          >
            <option>Studio Pod</option>
            <option>Granny Flat</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm uppercase tracking-widest mb-2 opacity-60">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            className="w-full border border-black/20 px-4 py-3 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-10 py-4 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-[#333] transition-colors"
        >
          Submit Booking
        </button>
      </form>
    </section>
  );
}