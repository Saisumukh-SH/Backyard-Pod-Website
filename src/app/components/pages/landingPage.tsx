import { useState } from "react";
import SEO from "../../components/SEO";
import { Menu, X, Phone, MessageCircle, Mail } from "lucide-react";

export default function LandingPage() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <SEO
        title="Backyard Nest | Premium Backyard Studios & Granny Flats Melbourne"
        description="Architecturally designed backyard studios and granny flats built across Melbourne."
      />

      <div className="bg-[#FAF8F4] text-[#1C1B19] overflow-x-hidden">

                {/* ================= TRUST BAR ================= */}

        <div className="bg-[#1C1B19] text-[#F5F0EB] text-sm text-center py-2 px-4 tracking-wide">
          🇦🇺 <strong>100% Australian Made</strong>
          <span className="mx-3">•</span>
          10-Year Structural Warranty*
          <span className="mx-3">•</span>
          Servicing Melbourne's Bayside & Inner East
        </div>

                {/* ================= HEADER ================= */}

        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF8F4]/95 border-b border-black/10">

          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

            {/* Logo */}

            <a
              href="/"
              className="flex items-center gap-3"
            >
              <img
  src="/images/logo/final_white.webp"
  alt="Backyard Nest"
  className="h-10 w-auto object-contain select-none rounded-full border border-black/10 shadow-sm"
  draggable={false}
  loading="eager"
  onContextMenu={(e) => e.preventDefault()}
  onDragStart={(e) => e.preventDefault()}
  onMouseDown={(e) => {
    if (e.button === 2) e.preventDefault();
  }}
  style={{
    userSelect: "none",
    WebkitUserDrag: "none",
    WebkitUserSelect: "none",
  }}
/>

              <div>
                <h2 className="font-serif text-xl">
                  Backyard Nest
                </h2>

                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Melbourne
                </p>
              </div>
            </a>

            {/* Desktop Nav */}

            <nav className="hidden lg:flex items-center gap-10">

              <a
                href="#designs"
                className="hover:text-[#8B5A3C] transition"
              >
                Designs
              </a>

              <a
                href="#gallery"
                className="hover:text-[#8B5A3C] transition"
              >
                Gallery
              </a>

              <a
                href="#process"
                className="hover:text-[#8B5A3C] transition"
              >
                Process
              </a>

              <a
                href="#faq"
                className="hover:text-[#8B5A3C] transition"
              >
                FAQ
              </a>

            </nav>

            {/* Desktop Buttons */}

            <div className="hidden lg:flex items-center gap-4">

              <a
                href="tel:1300000000"
                className="flex items-center gap-2 text-sm"
              >
                <Phone size={16} />
                +61 466 333 438
              </a>

              <a
                href="#enquire"
                className="px-5 py-3 border border-[#1C1B19] hover:bg-[#1C1B19] hover:text-white transition"
              >
                Free Consultation
              </a>

            </div>

            {/* Mobile */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden"
            >
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

          {mobileMenu && (

            <div className="lg:hidden bg-[#FAF8F4] border-t border-black/10">

              <div className="flex flex-col p-6 gap-5">

                <a href="#designs">Designs</a>

                <a href="#gallery">Gallery</a>

                <a href="#process">Process</a>

                <a href="#faq">FAQ</a>

                <a
                  href="#enquire"
                  className="bg-[#1C1B19] text-white text-center py-3"
                >
                  Free Consultation
                </a>

              </div>

            </div>

          )}

        </header>
                {/* ================= HERO ================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* LEFT */}

              <div>

                <p className="uppercase tracking-[0.35em] text-[#4B5D45] text-sm mb-5">
                  Bayside & Inner East Melbourne
                </p>

                <h1 className="font-serif text-5xl lg:text-7xl leading-tight">

                  Premium backyard living,

                  <span className="italic text-[#8B5A3C]">
                    {" "}architecturally{" "}
                  </span>

                  designed.

                </h1>

                <p className="text-lg mt-8 max-w-xl text-neutral-700 leading-8">

                  Backyard Nest designs and builds custom studios, home offices and granny flats — crafted by Australian tradespeople, built to feel like part of your home from day one.

                </p>

                <div className="flex flex-wrap gap-5 mt-10">

                  <a
  href="#enquire"
  className="inline-flex items-center justify-center bg-[#1C1B19] px-8 py-4 font-semibold transition-colors duration-300 hover:bg-[#6E4630]"
  style={{
    color: "#FFFFFF",
    textDecoration: "none",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
>
  See What's Possible
</a>

                  <a
                    href="https://wa.me/message/63HQ6LV2X7ABF1"
                    className="bg-[#4B5D45] hover:bg-[#3D4C38] transition text-white px-8 py-4 flex items-center gap-2"
                  >
                    <MessageCircle size={18} />

                    WhatsApp

                  </a>

                </div>

                <div className="flex gap-12 mt-14">

                  <div>

                    <h2 className="font-serif text-4xl">
                      150+
                    </h2>

                    <p className="uppercase tracking-widest text-xs">
                      Backyards Transformed
                    </p>

                  </div>

                  <div>

                    <h2 className="font-serif text-4xl">
                      10YR
                    </h2>

                    <p className="uppercase tracking-widest text-xs">
                      Structural Warranty*
                    </p>

                  </div>

                  <div>

                    <h2 className="font-serif text-4xl">
                      4.9★
                    </h2>

                    <p className="uppercase tracking-widest text-xs">
                      AVERAGE CLIENT RATING
                    </p>

                  </div>

                </div>

              </div>
                            {/* RIGHT */}

              <div className="space-y-8">

                {/* Architectural Preview */}

                <div className="bg-[#EDE7DC] border border-black/10 p-6 shadow-lg">

                  <img
  src="/images/studio/studio1/studio1.webp"
  alt="Backyard Nest Studio"
  className="w-full h-full object-cover select-none"
  draggable={false}
  loading="eager"
  onContextMenu={(e) => e.preventDefault()}
  onDragStart={(e) => e.preventDefault()}
  onMouseDown={(e) => {
    if (e.button === 2) e.preventDefault();
  }}
  style={{
    userSelect: "none",
    WebkitUserDrag: "none",
    WebkitUserSelect: "none",
  }}
/>

                  <div className="flex justify-between mt-5 text-xs uppercase tracking-[0.25em] text-neutral-500">

                    <span>Concept Design</span>

                    <span>Backyard Studio</span>

                  </div>

                </div>

                {/* Lead Form */}

                <div
                  id="enquire"
                  className="bg-[#1C1B19] text-white p-8 lg:p-10 shadow-2xl"
                >

                  <p className="uppercase tracking-[0.3em] text-xs text-[#CBBFA4] mb-3">

                    Free Consultation

                  </p>

                  <h2 className="font-serif text-3xl">

                    Get your free design consultation

                  </h2>

                  <p className="text-neutral-300 mt-3 mb-8">

                    Tell us about your backyard — we'll respond within one business day.

                  </p>

                  <form className="space-y-5">

                    <div>

                      <label className="text-xs uppercase tracking-widest text-[#CBBFA4]">

                        Name

                      </label>

                      <input
                        type="text"
                        placeholder="John Smith"
                        className="w-full mt-2 bg-[#2B2925] border border-white/10 px-4 py-3 outline-none focus:border-[#8B5A3C]"
                      />

                    </div>

                    <div>

                      <label className="text-xs uppercase tracking-widest text-[#CBBFA4]">

                        Phone

                      </label>

                      <input
                        type="tel"
                        placeholder="0400 000 000"
                        className="w-full mt-2 bg-[#2B2925] border border-white/10 px-4 py-3 outline-none focus:border-[#8B5A3C]"
                      />

                    </div>

                    <div>

                      <label className="text-xs uppercase tracking-widest text-[#CBBFA4]">

                        Email

                      </label>

                      <input
                        type="email"
                        placeholder="john@email.com"
                        className="w-full mt-2 bg-[#2B2925] border border-white/10 px-4 py-3 outline-none focus:border-[#8B5A3C]"
                      />

                    </div>

                    <div>

                      <label className="text-xs uppercase tracking-widest text-[#CBBFA4]">

                        Suburb

                      </label>

                      <select
                        className="w-full mt-2 bg-[#2B2925] border border-white/10 px-4 py-3 outline-none focus:border-[#8B5A3C]"
                      >

                        <option>Select your suburb</option>

                        <option>Brighton</option>

                        <option>Malvern</option>

                        <option>Kew</option>

                        <option>Mount Eliza</option>

                        <option>Sandringham</option>

                        <option>Bentleigh</option>

                        <option>Frankston</option>

                        <option>Caulfield</option>

                        <option>St Kilda</option>

                        <option>Other</option>

                      </select>

                    </div>

                    <button
                      className="w-full bg-white text-black py-4 hover:bg-[#8B5A3C] hover:text-white transition-all duration-300 font-medium"
                    >

                      Get My Free Consultation

                    </button>

                    <a
                      href="https://wa.me/message/63HQ6LV2X7ABF1"
                      className="w-full flex justify-center items-center gap-3 bg-[#4B5D45] py-4 hover:bg-[#3D4C38] transition-all duration-300"
                    >

                      <MessageCircle size={18} />

                      Chat on WhatsApp

                    </a>

                    <p className="text-center text-xs text-neutral-400 leading-6">

                      No spam, no pressure — just an honest conversation about what's possible.

                    </p>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= SERVICE AREAS ================= */}

        <section className="border-y border-black/10 bg-[#EDE7DC] py-10">

          <div className="max-w-7xl mx-auto px-6">

            <p className="uppercase tracking-[0.35em] text-center text-xs text-neutral-500 mb-8">

              PROUDLY DESIGNING & BUILDING ACROSS

            </p>

            <div className="flex flex-wrap justify-center gap-4">

              {[
                "Brighton",
                "Bentleigh",
                "Malvern",
                "Kew",
                "Mount Eliza",
                "Sandringham",
                "Frankston",
                "Caulfield",
                "St Kilda",
                "Eltham",
                "Mornington Peninsula",
              ].map((suburb) => (

                <span
                  key={suburb}
                  className="px-5 py-2 border border-black/10 rounded-full bg-white text-sm"
                >
                  {suburb}
                </span>

              ))}

            </div>

          </div>

        </section>
                {/* ================= WHY BACKYARD NEST ================= */}

        <section
          id="designs"
          className="py-24 bg-[#FAF8F4]"
        >
          <div className="max-w-7xl mx-auto px-6">

            {/* Heading */}

            <div className="max-w-3xl">

              <p className="uppercase tracking-[0.35em] text-xs text-[#4B5D45] mb-4">

                WHY HOMEOWNERS CHOOSE BACKYARD NEST

              </p>

              <h2 className="font-serif text-5xl leading-tight">

                Every space is designed around
                <span className="italic text-[#8B5A3C]">
                  {" "}how you actually live.
                </span>

              </h2>

              <p className="text-neutral-600 text-lg mt-6 leading-8">

                We don't believe in one-size-fits-all backyard buildings.
                Every Backyard Nest project is thoughtfully designed around
                your lifestyle, your home and your future plans.

              </p>

            </div>

            {/* Cards */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

              {[
                {
                  number: "01",
                  title: "Architecturally Designed",
                  description:
                    "Every layout starts as a considered design, not a stock template — shaped around your block, your light and your lifestyle.",
                },

                {
                  number: "02",
                  title: "Quality Craftsmanship",
                  description:
                    "Built by Australian tradespeople using materials chosen to perform in our climate for decades, not seasons.",
                },

                {
                  number: "03",
                  title: "Built to Last",
                  description:
                    "Backed by a 10-year structural warranty, because a well-built backyard studio should outlast the trend it started in.",
                },

                {
                  number: "04",
                  title: "Thoughtfully Designed Spaces",
                  description:
                    "From natural light to storage to acoustic comfort — the details that make a space feel finished, not just complete.",
                },

                {
                  number: "05",
                  title: "Modern Australian Design",
                  description:
                    "Clean lines and warm materials that sit naturally alongside the character of your existing home.",
                },

                {
                  number: "06",
                  title: "Designed Around Your Lifestyle",
                  description:
                    "A home office, a teenage retreat, a guest studio — we design for how the space will actually be used, day to day.",
                },

              ].map((item) => (

                <div
                  key={item.number}
                  className="group bg-white border border-black/10 hover:border-[#8B5A3C] transition-all duration-500 p-8 hover:-translate-y-2"
                >

                  <p className="text-sm tracking-[0.25em] text-[#8B5A3C] mb-5">

                    {item.number}

                  </p>

                  <h3 className="font-serif text-2xl mb-5 group-hover:text-[#8B5A3C] transition">

                    {item.title}

                  </h3>

                  <p className="leading-8 text-neutral-600">

                    {item.description}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= FEATURED DESIGNS ================= */}

        <section
          id="gallery"
          className="bg-[#EDE7DC] py-24"
        >

          <div className="max-w-7xl mx-auto px-6">

            <div className="flex justify-between items-end flex-wrap gap-8">

              <div>

                <p className="uppercase tracking-[0.35em] text-xs text-[#4B5D45] mb-4">

                  A Sample of Recent Concepts

                </p>

                <h2 className="font-serif text-5xl">

                  Four ways to give your 
                  <span className="italic text-[#8B5A3C]">
                    {" "}backyard
                  </span>
                  <br/>more purpose.

                </h2>

              </div>

            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

              {[
                {
                  title: "Backyard Studio",
                  image: "/images/studio/studio1/studio1.webp",
                  text: "A flexible retreat for work, rest or play.",
                },

                {
                  title: "Home Office Pod",
                  image: "/images/studio/studio3/studio3.2.webp",
                  text: "A quiet, separate space to focus and create.",
                },

                {
                  title: "Granny Flat",
                  image: "/images/grannyflat/grannyflatexmp/granny_flats_hero.webp",
                  text: "Self-contained comfort for family or guests.",
                },

              ].map((project) => (

                <div
                  key={project.title}
                  className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                >

                  <div className="overflow-hidden">

                    <img
  src={project.image}
  alt={project.title}
  className="aspect-[4/3] w-full object-cover group-hover:scale-110 transition duration-700 select-none"
  draggable={false}
  loading="lazy"
  onContextMenu={(e) => e.preventDefault()}
  onDragStart={(e) => e.preventDefault()}
  onMouseDown={(e) => {
    if (e.button === 2) e.preventDefault();
  }}
  style={{
    userSelect: "none",
    WebkitUserDrag: "none",
    WebkitUserSelect: "none",
  }}
/>

                  </div>

                  <div className="p-6">

                    <h3 className="font-serif text-2xl mb-3">

                      {project.title}

                    </h3>

                    <p className="text-neutral-600 leading-7 mb-6">

                      {project.text}

                    </p>

                    <a
                      href="#enquire"
                      className="text-[#8B5A3C] font-medium hover:underline"
                    >

                      Start My Project →

                    </a>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>
                {/* ================= PROCESS ================= */}

        <section
          id="process"
          className="py-24 bg-[#FAF8F4]"
        >
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center max-w-3xl mx-auto">

              <p className="uppercase tracking-[0.35em] text-xs text-[#4B5D45] mb-4">

                How It Works


              </p>

              <h2 className="font-serif text-5xl leading-tight">

                From first enquiry to handover, 
                <br/>
                <span className="italic text-[#8B5A3C]">
                  {" "}in five clear steps.
                </span>

              </h2>

              <p className="text-neutral-600 text-lg mt-6 leading-8">

                We manage every stage of your project so you don't have to
                coordinate multiple contractors or navigate council approvals
                yourself.

              </p>

            </div>

            <div className="mt-20 space-y-10">

              {[
                {
                  step: "01",
                  title: "Enquire",
                  text: "Send us a few details about your block and what you have in mind — takes under two minutes.",
                },

                {
                  step: "02",
                  title: "Free Design Consult",
                  text: "We visit your property, talk through how you'll use the space, and scope an initial concept together.",
                },

                {
                  step: "03",
                  title: "Concept & Council Approval",
                  text: "We finalise your design and manage the council and planning process on your behalf.",
                },

                {
                  step: "04",
                  title: "Build",
                  text: "Our Australian trade teams construct your space with regular updates, start to finish.",
                },

                {
                  step: "05",
                  title: "Handover & Aftercare",
                  text: "A final walkthrough, your warranty documentation, and ongoing support after the keys are handed over.",
                },

              ].map((item) => (

                <div
                  key={item.step}
                  className="grid lg:grid-cols-[120px_1fr] gap-8 border-t border-black/10 pt-10"
                >

                  <div>

                    <div className="font-serif text-5xl text-[#CBBFA4]">

                      {item.step}

                    </div>

                  </div>

                  <div>

                    <h3 className="font-serif text-3xl mb-4">

                      {item.title}

                    </h3>

                    <p className="text-neutral-600 leading-8 max-w-3xl">

                      {item.text}

                    </p>

                  </div>

                </div>

              ))}

            </div>

            <div className="text-center mt-16">

              <a
  href="#enquire"
  className="inline-flex items-center justify-center bg-[#1C1B19] px-10 py-4 font-semibold transition-colors duration-300 hover:bg-[#6E4630]"
  style={{ color: "#FFFFFF", textDecoration: "none" }}
  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
>
  Book Your Free Site Assessment
</a>

            </div>

          </div>

        </section>

        {/* ================= TESTIMONIALS ================= */}

        <section className="py-24 bg-[#EDE7DC]">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center max-w-3xl mx-auto">

              <p className="uppercase tracking-[0.35em] text-xs text-[#4B5D45] mb-4">

                What Homeowners Say

              </p>

              <h2 className="font-serif text-5xl">

                Trusted by homeowners across 
                <span className="italic text-[#8B5A3C]">
                  {" "}Melbourne's bayside and inner east.
                </span>

              </h2>

            </div>

            <div className="grid lg:grid-cols-3 gap-8 mt-16">

              {[
                {
                  suburb: "Brighton",
                  review:
                    "The finished studio feels like it was always part of the house. The attention to detail was obvious from the first sketch.",
                },

                {
                  suburb: "Kew",
                  review:
                    "Council approval, scheduling, trades — all handled for us. We just had to choose the finishes.",
                },

                {
                  suburb: "Mount Eliza",
                  review:
                    "Our home office pod changed how our whole week works. Quiet, well-built, and it looks fantastic.",
                },

              ].map((review) => (

                <div
                  key={review.suburb}
                  className="bg-white p-8 border border-black/10 hover:shadow-xl transition duration-500"
                >

                  <div className="text-[#8B5A3C] text-xl mb-6">

                    ★★★★★

                  </div>

                  <p className="font-serif text-2xl italic leading-10">

                    "{review.review}"

                  </p>

                  <div className="mt-8">

                    <h4 className="font-semibold">

                      Homeowner

                    </h4>

                    <p className="text-neutral-500">

                      {review.suburb}

                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* Trust Numbers */}

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

              {[
                {
                  value: "150+",
                  label: "Projects Completed",
                },
                {
                  value: "4.9★",
                  label: "Average Rating",
                },
                {
                  value: "10 Years",
                  label: "Structural Warranty",
                },
                {
                  value: "100%",
                  label: "Australian Built",
                },
              ].map((item) => (

                <div
                  key={item.label}
                  className="text-center"
                >

                  <div className="font-serif text-5xl text-[#8B5A3C]">

                    {item.value}

                  </div>

                  <p className="uppercase tracking-[0.25em] text-xs mt-3 text-neutral-600">

                    {item.label}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>
                {/* ================= FAQ ================= */}

        <section
          id="faq"
          className="py-24 bg-[#FAF8F4]"
        >
          <div className="max-w-5xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[0.35em] text-xs text-[#4B5D45] mb-4">
                Common Questions
              </p>

              <h2 className="font-serif text-5xl">
                Everything you'd ask before 
                <span className="italic text-[#8B5A3C]">
                  {" "}getting started.
                </span>
              </h2>

            </div>

            <div className="mt-16 divide-y divide-black/10">

              {[
                {
                  question:
                    "Do I need council approval for a backyard studio?",
                  answer:
                    "In most cases, yes — requirements vary by council and by the size and use of the structure. We manage the planning and approval process for you as part of every project.",
                },

                {
                  question:
                    "How long does a typical build take?",
                  answer:
                    "Most backyard studios and granny flats are completed within 10–16 weeks of council approval, depending on size, finishes and site access.",
                },

                {
                  question:
                    "Do you service my suburb?",
                  answer:
                    "We work across Melbourne's bayside and inner east, including Brighton, Bentleigh, Malvern, Kew, Mount Eliza, Sandringham, Frankston, St Kilda, Caulfield and Eltham — and most surrounding suburbs. Let us know your address and we'll confirm.",
                },

                {
                  question:
                    "What's included in the free design consult?",
                  answer:
                    "A site visit, an initial concept discussion, and a clear outline of what's possible on your block — with no obligation to proceed.",
                },

                {
                  question:
                    "Is there a warranty on the build?",
                  answer:
                    "Yes — every Backyard Nest project is backed by a 10-year structural warranty.",
                },
                {
                  question:
                    "Can a backyard studio be used as a rental or Airbnb?",
                  answer:
                    "Depending on council zoning and your goals, some designs can support this. Raise it at your design consult and we'll factor it into the plan.",
                },

              ].map((faq) => (

                <details
                  key={faq.question}
                  className="group py-7"
                >

                  <summary className="flex justify-between items-center cursor-pointer list-none">

                    <h3 className="font-serif text-2xl">

                      {faq.question}

                    </h3>

                    <span className="text-3xl text-[#8B5A3C] group-open:rotate-45 transition">
                      +
                    </span>

                  </summary>

                  <p className="text-neutral-600 leading-8 mt-6 max-w-3xl">

                    {faq.answer}

                  </p>

                </details>

              ))}

            </div>

          </div>

        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="bg-[#1C1B19] py-28 text-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-20 items-center">

              <div>

                <p className="uppercase tracking-[0.35em] text-xs text-[#CBBFA4] mb-5">

                 Ready When You Are

                </p>

                <h2 className="font-serif text-6xl leading-tight">

                  Claim your 
                  <span className="italic text-[#CBBFA4]">
                    {" "}free consultation.
                  </span>

                </h2>

                <p className="text-neutral-300 text-lg leading-9 mt-8">

                  No call centre, no pressure — just a straightforward conversation with the people who'll actually design and build your space.

                </p>

                <div className="space-y-5 mt-10">

                  <div className="flex gap-4">

                    ✓

                    <span>Free, no-obligation design consult at your property
</span>

                  </div>

                  <div className="flex gap-4">

                    ✓

                    <span>We manage council approval from start to finish</span>

                  </div>

                  <div className="flex gap-4">

                    ✓

                    <span>10-year structural warranty on every build</span>

                  </div>

                  <div className="flex gap-4">

                    ✓

                    <span>One team, one point of contact, start to handover</span>

                  </div>

                </div>

              </div>

              <div className="bg-[#2B2925] p-10">

                <h3 className="font-serif text-3xl mb-8">

                 Send us your details

                </h3>

                <form className="space-y-5">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none"
                  />

                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none"
                  />

                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none"
                  />

                  <button
  type="button"
  className="w-full py-4 font-semibold bg-white hover:bg-[#8B5A3C] transition-colors duration-300"
  style={{ color: "#1C1B19" }}
  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
  onMouseLeave={(e) => (e.currentTarget.style.color = "#1C1B19")}
>
  Get My Free Consultation
</button>

                    <p className="text-center text-xs text-neutral-400 leading-6">
                  By submitting, you agree to our Privacy Policy. We never share your details with third parties.
                  </p>      

                </form>

              </div>

            </div>

          </div>

        </section>

      </div>

    </>

  );

}