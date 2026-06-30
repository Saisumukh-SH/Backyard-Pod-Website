import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, ScrollText } from "lucide-react";

import { Search, ChevronRight } from "lucide-react";

import {
  FileCheck,
  PencilRuler,
  BadgeDollarSign,
  ShieldCheck,
  MessageCircle,
  MapPinned,
  Hammer,
  House,
} from "lucide-react";

export function FAQ() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "Do I need council approval for a backyard studio in Melbourne?",
      a: "Council approval depends on the size, intended use and location of your backyard studio. Some projects may qualify under exempt or streamlined approval pathways, while others require permits. Backyard Nest guides you through every step of the approval process.",
    },
    {
      q: "How much does a backyard studio cost?",
      a: "Pricing varies depending on the studio size, site conditions, finishes and level of customisation. Our studio collection starts from approximately $71,000, with tailored quotes available for bespoke projects.",
    },
    {
      q: "Can I use a backyard studio as a home office?",
      a: "Absolutely. Many clients choose Backyard Nest studios as dedicated home offices, creative workspaces, consulting rooms, wellness studios or private retreats separate from the main home.",
    },
    {
      q: "Can a granny flat be rented in Victoria?",
      a: "Rental regulations vary depending on local council requirements and the intended use of the dwelling. Our team can advise you on the relevant planning and building regulations for your property.",
    },
    {
      q: "Do you build on sloping blocks?",
      a: "Yes. Backyard Nest specialises in designing studios for challenging sites including sloping blocks, narrow lots and difficult access locations.",
    },
    {
      q: "Can I customise the design?",
      a: "Yes. Every Backyard Nest project can be customised with different layouts, cladding options, colours, glazing, internal finishes and site-specific design solutions.",
    },
    {
      q: "How long does installation take?",
      a: "Most projects are completed within several weeks after approvals, manufacturing and site preparation. Your timeline will depend on the design and project complexity.",
    },
    {
      q: "Where do you build?",
      a: "We proudly design and build premium backyard studios and granny flats throughout Melbourne and regional Victoria, including bayside, eastern, northern, western and southeastern suburbs.",
    },
  ];

  const [active, setActive] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#F5F0EB] text-[#2E2A26]">
      {/* HERO */}

      <section className="relative overflow-hidden border-b border-[#E8DED3]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 pt-36 lg:pt-44 pb-24">
          <div className="grid lg:grid-cols-[58%_42%] gap-16 items-end">
            {/* LEFT */}

            <div>
              <p
                className="
            uppercase
            tracking-[0.35em]
            text-[#A08E7C]
            text-xs
            mb-8
          "
              >
                Backyard Nest Knowledge Centre
              </p>

              <h1
                className="
            editorial-heading
            text-[#2E2A26]
            text-[clamp(3.8rem,9vw,8rem)]
            leading-[0.88]
            tracking-[-0.05em]
          "
              >
                Questions,
                <br />
                Answered.
              </h1>
            </div>

            {/* RIGHT */}

            <div className="lg:pb-4">
              <div className="w-20 h-px bg-[#C7A77A] mb-8" />

              <p
                className="
            text-[#5F5A55]
            text-lg
            md:text-xl
            leading-relaxed
            max-w-xl
          "
              >
                Everything you need to know about
                <strong className="text-[#2E2A26]">
                  {" "}
                  backyard studios,
                </strong>{" "}
                <strong className="text-[#2E2A26]">granny flats,</strong>{" "}
                permits, pricing, custom designs and installation throughout
                Melbourne and regional Victoria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}

      <section className="py-14 lg:py-20 border-b border-[#E8DED3]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {/* CARD */}

            <div
              className="
          group
          rounded-[28px]
          border
          border-[#E8DED3]
          bg-white
          p-7
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#C7A77A]
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.05)]
        "
            >
              <div
                className="
            w-14
            h-14
            rounded-full
            border
            border-[#DCCDBB]
            bg-[#C7A77A]/10
            flex
            items-center
            justify-center
            mb-6
            transition-all
            duration-300
            group-hover:bg-[#C7A77A]
          "
              >
                <FileCheck
                  size={24}
                  className="
              text-[#C7A77A]
              group-hover:text-white
              transition-colors
            "
                />
              </div>

              <h3 className="editorial-heading text-3xl text-[#2E2A26] mb-3">
                Council
                <br />
                Advice
              </h3>

              <p className="text-[#8B7E74] leading-relaxed text-sm">
                Guidance on planning permits, approvals and local council
                requirements across Victoria.
              </p>
            </div>

            {/* CARD */}

            <div
              className="
          group
          rounded-[28px]
          border
          border-[#E8DED3]
          bg-white
          p-7
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#C7A77A]
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.05)]
        "
            >
              <div
                className="
            w-14
            h-14
            rounded-full
            border
            border-[#DCCDBB]
            bg-[#C7A77A]/10
            flex
            items-center
            justify-center
            mb-6
            transition-all
            duration-300
            group-hover:bg-[#C7A77A]
          "
              >
                <PencilRuler
                  size={24}
                  className="
              text-[#C7A77A]
              group-hover:text-white
              transition-colors
            "
                />
              </div>

              <h3 className="editorial-heading text-3xl text-[#2E2A26] mb-3">
                Custom
                <br />
                Design
              </h3>

              <p className="text-[#8B7E74] leading-relaxed text-sm">
                Every backyard studio and granny flat can be tailored to your
                site, lifestyle and vision.
              </p>
            </div>

            {/* CARD */}

            <div
              className="
          group
          rounded-[28px]
          border
          border-[#E8DED3]
          bg-white
          p-7
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#C7A77A]
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.05)]
        "
            >
              <div
                className="
            w-14
            h-14
            rounded-full
            border
            border-[#DCCDBB]
            bg-[#C7A77A]/10
            flex
            items-center
            justify-center
            mb-6
            transition-all
            duration-300
            group-hover:bg-[#C7A77A]
          "
              >
                <BadgeDollarSign
                  size={24}
                  className="
              text-[#C7A77A]
              group-hover:text-white
              transition-colors
            "
                />
              </div>

              <h3 className="editorial-heading text-3xl text-[#2E2A26] mb-3">
                Fixed
                <br />
                Pricing
              </h3>

              <p className="text-[#8B7E74] leading-relaxed text-sm">
                Transparent quotations with no hidden surprises throughout your
                project.
              </p>
            </div>

            {/* CARD */}

            <div
              className="
          group
          rounded-[28px]
          border
          border-[#E8DED3]
          bg-white
          p-7
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#C7A77A]
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.05)]
        "
            >
              <div
                className="
            w-14
            h-14
            rounded-full
            border
            border-[#DCCDBB]
            bg-[#C7A77A]/10
            flex
            items-center
            justify-center
            mb-6
            transition-all
            duration-300
            group-hover:bg-[#C7A77A]
          "
              >
                <ShieldCheck
                  size={24}
                  className="
              text-[#C7A77A]
              group-hover:text-white
              transition-colors
            "
                />
              </div>

              <h3 className="editorial-heading text-3xl text-[#2E2A26] mb-3">
                10 Year
                <br />
                Warranty*
              </h3>

              <p className="text-[#8B7E74] leading-relaxed text-sm">
                Premium materials backed by a comprehensive structural warranty*
                for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR QUESTIONS */}

      <section className="py-20 border-b border-[#E8DED3] bg-[#FBF8F4]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[35%_65%] gap-16 items-start">
            {/* LEFT */}

            <div>
              <p className="uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-6">
                Find Your Answer
              </p>

              <h2
                className="
            editorial-heading
            text-[clamp(2.8rem,7vw,5rem)]
            leading-[0.92]
            text-[#2E2A26]
            mb-8
          "
              >
                Popular
                <br />
                Questions
              </h2>

              <p className="text-[#5F5A55] leading-relaxed">
                Browse the questions our clients ask most often about backyard
                studios, granny flats, pricing, approvals and construction.
              </p>
            </div>

            {/* RIGHT */}

            <div>
              {/* SEARCH */}

              <div
                className="
            flex
            items-center
            gap-4
            rounded-full
            border
            border-[#E8DED3]
            bg-white
            px-6
            py-4
            mb-10
          "
              >
                <Search size={18} className="text-[#A08E7C]" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search a question..."
                  className="
              bg-transparent
              outline-none
              w-full
              text-[#2E2A26]
              placeholder:text-[#A08E7C]
            "
                />
              </div>

              {/* QUESTION CHIPS */}

              <div className="flex flex-wrap gap-4">
                {faqs
                  .filter((item) =>
                    item.q.toLowerCase().includes(search.toLowerCase()),
                  )
                  .map((item, index) => (
                    <button
                      key={item.q}
                      onClick={() => {
                        setActive(index);

                        document
                          .getElementById("faq-accordion")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }}
                      className="
                  group
                  rounded-full
                  border
                  border-[#E8DED3]
                  bg-white
                  px-6
                  py-4
                  text-left
                  transition-all
                  duration-300
                  hover:border-[#C7A77A]
                  hover:bg-[#C7A77A]
                  hover:text-white
                "
                    >
                      <span className="flex items-center gap-3">
                        {item.q}

                        <ChevronRight
                          size={16}
                          className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                        />
                      </span>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}

      <section id="faq-accordion" className="bg-[#F5F0EB] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          {faqs
            .filter((item) =>
              item.q.toLowerCase().includes(search.toLowerCase()),
            )
            .map((item, i) => {
              const isOpen = active === i;

              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                  }}
                  className="
              group
              border-b
              border-[#E6DDD4]
            "
                >
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    className="
                w-full
                py-10
                flex
                items-start
                justify-between
                gap-10
                text-left
              "
                  >
                    <div className="flex gap-8">
                      {/* Number */}

                      <span
                        className="
                    editorial-heading
                    text-[#C7A77A]
                    text-3xl
                    lg:text-5xl
                    leading-none
                    w-16
                    shrink-0
                  "
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}

                      <div>
                        <h3
                          className="
                      editorial-heading
                      text-[#2E2A26]
                      text-[clamp(1.7rem,2vw,2.8rem)]
                      leading-[1.05]
                      transition-colors
                      duration-300
                      group-hover:text-[#C7A77A]
                    "
                        >
                          {item.q}
                        </h3>
                      </div>
                    </div>

                    {/* Plus */}

                    <div
                      className={`
                  w-12
                  h-12
                  rounded-full
                  border
                  border-[#DCCDBB]
                  flex
                  items-center
                  justify-center
                  shrink-0
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "bg-[#C7A77A] border-[#C7A77A] rotate-45"
                      : "bg-white"
                  }
                `}
                    >
                      <span
                        className={`
                    text-3xl
                    leading-none

                    ${isOpen ? "text-white" : "text-[#C7A77A]"}
                  `}
                      >
                        +
                      </span>
                    </div>
                  </button>

                  {/* Answer */}

                  <div
                    className={`
                grid
                transition-all
                duration-500

                ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
              `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                    ml-[96px]
                    lg:ml-[112px]
                    max-w-3xl
                    pb-10
                  "
                      >
                        <div
                          className="
                      w-16
                      h-px
                      bg-[#C7A77A]
                      mb-8
                    "
                        />

                        <p
                          className="
                      text-[#5F5A55]
                      text-base
                      md:text-lg
                      leading-8
                    "
                        >
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </section>

      {/* OUR PROCESS */}

      <section className="bg-[#FBF8F4] py-24 lg:py-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Heading */}

          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-6">
              Our Process
            </p>

            <h2
              className="
          editorial-heading
          text-[#2E2A26]
          text-[clamp(3rem,7vw,5.8rem)]
          leading-[0.92]
          mb-8
        "
            >
              From First
              <br />
              Conversation
              <br />
              To Completion.
            </h2>

            <p className="text-[#5F5A55] text-lg leading-relaxed">
              Every Backyard Nest project follows a proven process that ensures
              a seamless experience from your first consultation through design,
              approvals, construction and final handover.
            </p>
          </div>

          {/* Timeline */}

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Free Consultation",
                icon: MessageCircle,
                description:
                  "Discuss your goals, budget and property with our design team.",
              },
              {
                number: "02",
                title: "Site Assessment",
                icon: MapPinned,
                description:
                  "We evaluate your block, access, orientation and site conditions.",
              },
              {
                number: "03",
                title: "Custom Design",
                icon: PencilRuler,
                description:
                  "Choose a studio or granny flat and personalise every finish.",
              },
              {
                number: "04",
                title: "Council & Approvals",
                icon: FileCheck,
                description:
                  "We assist with planning approvals and required documentation.",
              },
              {
                number: "05",
                title: "Construction",
                icon: Hammer,
                description:
                  "Your studio is manufactured using premium Australian materials.",
              },
              {
                number: "06",
                title: "Installation",
                icon: House,
                description:
                  "Fast installation and final handover ready for immediate use.",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="
              group
              rounded-[28px]
              border
              border-[#E8DED3]
              bg-white
              p-8
              transition-all
              duration-500
              hover:border-[#C7A77A]
              hover:shadow-[0_18px_40px_rgba(0,0,0,.05)]
            "
                >
                  <div className="flex justify-between items-start mb-10">
                    <span
                      className="
                  editorial-heading
                  text-5xl
                  text-[#E2D5C5]
                  group-hover:text-[#C7A77A]
                  transition-colors
                "
                    >
                      {step.number}
                    </span>

                    <div
                      className="
                  w-14
                  h-14
                  rounded-full
                  border
                  border-[#DCCDBB]
                  bg-[#C7A77A]/10
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:bg-[#C7A77A]
                "
                    >
                      <Icon
                        size={24}
                        className="
                    text-[#C7A77A]
                    group-hover:text-white
                    transition-colors
                  "
                      />
                    </div>
                  </div>

                  <h3
                    className="
                editorial-heading
                text-3xl
                text-[#2E2A26]
                mb-5
              "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                text-[#5F5A55]
                leading-relaxed
              "
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COUNCIL APPROVAL */}

      <section className="bg-[#F5F0EB] py-24 lg:py-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[45%_55%] gap-16 items-center">
            {/* LEFT */}

            <div>
              <p className="uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-6">
                Council Approvals
              </p>

              <h2
                className="
            editorial-heading
            text-[#2E2A26]
            text-[clamp(3rem,7vw,5.5rem)]
            leading-[0.92]
            mb-8
          "
              >
                We Help You
                <br />
                Navigate
                <br />
                The Process.
              </h2>

              <div className="w-20 h-px bg-[#C7A77A] mb-8" />

              <p
                className="
            text-[#5F5A55]
            text-lg
            leading-relaxed
            max-w-xl
          "
              >
                Every council has different planning requirements. Our
                experienced team assists homeowners throughout Melbourne and
                Victoria by helping determine what approvals may be required and
                preparing the necessary documentation for your project.
              </p>
            </div>

            {/* RIGHT */}

            <div className="grid sm:grid-cols-2 gap-5">
              {[
  {
    title: "Planning Advice",
    icon: FileCheck,
    description:
      "Guidance on planning requirements based on your property and local council.",
  },
  {
    title: "Site Assessment",
    icon: MapPinned,
    description:
      "We evaluate your site to identify any design or access considerations early.",
  },
  {
    title: "Documentation",
    icon: ScrollText,
    description:
      "Support with drawings, specifications and information required for approvals.",
  },
  {
    title: "End-to-End Support",
    icon: ShieldCheck,
    description:
      "From consultation through installation, our team is here to assist every step of the way.",
  },
].map((item) => {
  const Icon = item.icon;

  return (
    <motion.div
      key={item.title}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        group
        rounded-[28px]
        border
        border-[#E8DED3]
        bg-white
        p-7
        transition-all
        duration-500
        hover:border-[#C7A77A]
        hover:shadow-[0_18px_40px_rgba(0,0,0,0.05)]
      "
    >
      {/* Icon */}

      <div
        className="
          w-14
          h-14
          rounded-full
          border
          border-[#DCCDBB]
          bg-[#C7A77A]/10
          flex
          items-center
          justify-center
          mb-6
          transition-all
          duration-300
          group-hover:bg-[#C7A77A]
          group-hover:border-[#C7A77A]
        "
      >
        <Icon
          size={24}
          className="
            text-[#C7A77A]
            transition-colors
            duration-300
            group-hover:text-white
          "
        />
      </div>

      {/* Title */}

      <h3
        className="
          editorial-heading
          text-2xl
          text-[#2E2A26]
          mb-4
        "
      >
        {item.title}
      </h3>

      {/* Description */}

      <p
        className="
          text-[#5F5A55]
          leading-relaxed
        "
      >
        {item.description}
      </p>
    </motion.div>
  );
})}
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WE BUILD */}

      <section className="bg-[#FBF8F4] py-24 lg:py-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[38%_62%] gap-16 items-start">
            {/* LEFT */}

            <div className="lg:sticky lg:top-28">
              <p className="uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-6">
                Service Areas
              </p>

              <h2
                className="
            editorial-heading
            text-[#2E2A26]
            text-[clamp(3rem,7vw,5.5rem)]
            leading-[0.92]
            mb-8
          "
              >
                Proudly
                <br />
                Building Across
                <br />
                Victoria.
              </h2>

              <div className="w-20 h-px bg-[#C7A77A] mb-8" />

              <p
                className="
            text-[#5F5A55]
            text-lg
            leading-relaxed
            max-w-md
          "
              >
                Backyard Nest designs and builds premium backyard studios,
                granny flats and custom backyard spaces throughout Melbourne and
                regional Victoria.
              </p>
            </div>

            {/* RIGHT */}

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  region: "Eastern Melbourne",
                  suburbs:
                    "Balwyn • Camberwell • Blackburn • Doncaster • Surrey Hills",
                },
                {
                  region: "South Eastern",
                  suburbs:
                    "Berwick • Beaconsfield • Narre Warren • Officer • Clyde",
                },
                {
                  region: "Bayside",
                  suburbs:
                    "Brighton • Sandringham • Black Rock • Hampton • Beaumaris",
                },
                {
                  region: "Mornington Peninsula",
                  suburbs: "Mornington • Mount Eliza • Mount Martha • Rosebud",
                },
                {
                  region: "North & North East",
                  suburbs: "Eltham • Greensborough • Templestowe • Warrandyte",
                },
                {
                  region: "Regional Victoria",
                  suburbs:
                    "Geelong • Ballarat • Bendigo • Warragul • Traralgon",
                },
              ].map((area) => (
                <motion.div
                  key={area.region}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="
              group
              rounded-[28px]
              border
              border-[#E8DED3]
              bg-white
              p-7
              transition-all
              duration-500
              hover:border-[#C7A77A]
              hover:shadow-[0_18px_40px_rgba(0,0,0,0.05)]
            "
                >
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin size={20} className="text-[#C7A77A]" />

                    <h3
                      className="
                  editorial-heading
                  text-2xl
                  text-[#2E2A26]
                "
                    >
                      {area.region}
                    </h3>
                  </div>

                  <p
                    className="
                text-[#5F5A55]
                leading-relaxed
              "
                  >
                    {area.suburbs}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Note */}

          <div
            className="
        mt-20
        rounded-[32px]
        border
        border-[#E8DED3]
        bg-white
        p-10
        flex
        flex-col
        lg:flex-row
        items-start
        lg:items-center
        justify-between
        gap-8
      "
          >
            <div>
              <p className="uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-3">
                Outside These Areas?
              </p>

              <h3 className="editorial-heading text-3xl text-[#2E2A26] mb-4">
                We're Expanding Across Australia.
              </h3>

              <p className="text-[#5F5A55] max-w-2xl leading-relaxed">
                If your suburb isn't listed, we'd still love to hear from you.
                Contact our team to discuss your project and upcoming expansion
                into new regions.
              </p>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-[#2E2A26]
          px-8
          py-4
          transition-all
          duration-300
          hover:bg-[#2E2A26]
          hover:text-white
        "
            >
              Contact Our Team
              <ArrowRight
                size={18}
                className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
              />
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-[#2E2A26] py-28 lg:py-36 overflow-hidden relative">
        {/* Background Accent */}

        <div
          className="
      absolute
      inset-0
      opacity-[0.04]
      bg-[radial-gradient(circle_at_top_right,#C7A77A,transparent_55%)]
    "
        />

        <div className="relative max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="
          uppercase
          tracking-[0.35em]
          text-xs
          text-[#C7A77A]
          mb-8
        "
            >
              Start Your Project
            </p>

            <h2
              className="
          editorial-heading
          text-white
          text-[clamp(3rem,8vw,6.5rem)]
          leading-[0.92]
          mb-8
        "
            >
              Let's Create
              <br />
              Your Perfect
              <br />
              Backyard Space.
            </h2>

            <p
              className="
          text-[#D7CEC5]
          text-lg
          md:text-xl
          leading-relaxed
          max-w-3xl
          mx-auto
        "
            >
              Whether you're planning a
              <strong className="text-white"> backyard studio</strong>,
              <strong className="text-white"> granny flat</strong>, home office
              or custom outdoor space, our team is ready to help you transform
              your property.
            </p>

            {/* Buttons */}

            <div
              className="
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-5
          mt-14
        "
            >
              <button
                onClick={() => navigate("/booking")}
                className="
            group
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            bg-[#C7A77A]
            px-10
            py-5
            text-[#2E2A26]
            font-medium
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:bg-white
          "
              >
                Book Free Consultation
                <ArrowRight
                  size={18}
                  className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                />
              </button>

              <button
                onClick={() => navigate("/products")}
                className="
            group
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-white/30
            px-10
            py-5
            text-white
            transition-all
            duration-300
            hover:bg-white
            hover:text-[#2E2A26]
          "
              >
                Explore Designs
                <ArrowRight
                  size={18}
                  className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                />
              </button>
            </div>

            {/* Trust Items */}

            <div
              className="
          mt-16
          grid
          grid-cols-2
          md:grid-cols-4
          gap-8
          text-center
        "
            >
              {[
                "Custom Designs",
                "Council Guidance",
                "Premium Materials",
                "10-Year Warranty*",
              ].map((item) => (
                <div key={item}>
                  <div className="w-10 h-px bg-[#C7A77A] mx-auto mb-4" />

                  <p
                    className="
                text-[#D7CEC5]
                uppercase
                tracking-[0.2em]
                text-[11px]
              "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
