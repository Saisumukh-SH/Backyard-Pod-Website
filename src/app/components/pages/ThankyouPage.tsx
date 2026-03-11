import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">

      <section className="px-8 py-32 max-w-3xl mx-auto text-center">

        <span className="uppercase tracking-[0.25em] text-xs opacity-50 block mb-6">
          Booking Received
        </span>

        <h1 className="font-serif text-[clamp(3rem,5vw,4rem)] leading-[1.05] mb-8">
          Thank You
        </h1>

        <p className="text-lg text-black/70 leading-relaxed mb-10">
          Your consultation request has been received successfully.
          Our team will review your details and contact you within
          the next 24 hours.
        </p>

        <p className="text-black/60 mb-16">
          If your enquiry is urgent, feel free to reach out directly.
        </p>



        {/* ACTION BUTTONS */}

        <div className="flex flex-col sm:flex-row gap-6 justify-center">

          <a
            href="/"
            className="group inline-flex items-center justify-center px-10 py-4
            border border-black uppercase text-xs tracking-[0.2em]
            transition-all duration-300 hover:bg-black hover:scale-105"
          >
            <span className="text-black group-hover:text-white transition-colors duration-300">
              Back to Home
            </span>
          </a>

          <a
            href="/contact"
            className="group inline-flex items-center justify-center px-10 py-4
            border border-black uppercase text-xs tracking-[0.2em]
            transition-all duration-300 hover:bg-black hover:scale-105"
          >
            <span className="text-black group-hover:text-white transition-colors duration-300">
              Contact Us
            </span>
          </a>

        </div>

      </section>

    </div>
  );
}