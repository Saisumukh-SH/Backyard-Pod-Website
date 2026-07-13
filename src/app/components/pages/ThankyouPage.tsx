import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackContactConversion } from "../../../utils/googleAds";

export default function ThankYouPage() {
  useEffect(() => {
    trackContactConversion();
    window.scrollTo(0, 0);
    document.title = "Thank You | Backyard Nest";
  }, []);

  return (
    <div className="bg-[#F5F0EB] min-h-screen">

      <section className="min-h-screen flex items-center">

        <div className="max-w-6xl mx-auto px-8 py-32 w-full">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <div>

              <span className="uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-6">
                Enquiry Received
              </span>

              <h1 className="editorial-heading text-[clamp(4rem,8vw,7rem)] leading-[0.9] text-[#2E2A26] mb-8">
                Thank You
                <br />
                For
                <br />
                Reaching
                <br />
                Out
              </h1>

              <p className="text-lg text-[#5F5A55] leading-relaxed mb-12 max-w-xl">
                We've received your enquiry and our team will review your
                project details. Expect a response within one business day to
                discuss your vision, requirements and next steps.
              </p>

              <div className="flex flex-wrap gap-4">

                <Link
                  to="/products"
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
                  Explore Our Studios
                </Link>

                <Link
                  to="/"
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
                  Back Home
                </Link>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-white rounded-[32px] p-10 shadow-sm border border-[rgba(46,42,38,0.06)]">

              <span className="uppercase tracking-[0.25em] text-xs text-[#A08E7C]">
                What Happens Next
              </span>

              <div className="mt-10 space-y-10">

                <div className="flex gap-5">

                  <div className="w-12 h-12 rounded-full bg-[#C7A77A] flex items-center justify-center shrink-0">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-[#2E2A26] font-medium mb-2">
                      Enquiry Received
                    </h3>

                    <p className="text-[#5F5A55]">
                      Your project details have been successfully submitted.
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="w-12 h-12 rounded-full border border-[#C7A77A] flex items-center justify-center shrink-0">
                    2
                  </div>

                  <div>
                    <h3 className="text-[#2E2A26] font-medium mb-2">
                      Initial Consultation
                    </h3>

                    <p className="text-[#5F5A55]">
                      We discuss your goals, budget, design preferences and
                      site requirements.
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="w-12 h-12 rounded-full border border-[#C7A77A] flex items-center justify-center shrink-0">
                    3
                  </div>

                  <div>
                    <h3 className="text-[#2E2A26] font-medium mb-2">
                      Design & Planning
                    </h3>

                    <p className="text-[#5F5A55]">
                      Our team develops a tailored solution based on your
                      vision and property.
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="w-12 h-12 rounded-full border border-[#C7A77A] flex items-center justify-center shrink-0">
                    4
                  </div>

                  <div>
                    <h3 className="text-[#2E2A26] font-medium mb-2">
                      Proposal & Build
                    </h3>

                    <p className="text-[#5F5A55]">
                      Final approval, construction and delivery of your new
                      space.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}