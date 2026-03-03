import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is a granny flat?",
          answer:
            "A granny flat is a self-contained living area located on the same property as a main residence. It typically includes a bedroom, bathroom, kitchen, and living space, providing independent accommodation for family members, guests, or renters.",
        },
        {
          question: "Do I need council approval?",
          answer:
            "In most cases, yes. However, requirements vary by location and project size. Some smaller pods may qualify for exempt development. We handle all council applications and ensure full compliance with local regulations.",
        },
        {
          question: "How long does construction take?",
          answer:
            "Studio pods typically take 4-6 weeks from start to finish. One bedroom granny flats take 8-12 weeks, and two bedroom units take 12-16 weeks. Timeline includes council approval, which can vary by location.",
        },
        {
          question: "What is included in the price?",
          answer:
            "Our prices include design, materials, construction, electrical and plumbing work, standard fixtures and fittings, and installation. Council fees, site preparation, and optional upgrades are quoted separately.",
        },
      ],
    },
    {
      category: "Design & Customization",
      questions: [
        {
          question: "Can I customize the design?",
          answer:
            "Absolutely! While we offer standard packages, we can customize layouts, finishes, colors, and features to suit your preferences and needs. Our design team will work with you to create your ideal space.",
        },
        {
          question: "What styles do you offer?",
          answer:
            "We specialize in modern, minimalist designs that complement contemporary homes. However, we can adapt our designs to match traditional or other architectural styles to suit your property.",
        },
        {
          question: "Can I see the design before construction?",
          answer:
            "Yes! We provide detailed floor plans and 3D renderings for all projects. This allows you to visualize your space and make any adjustments before construction begins.",
        },
      ],
    },
    {
      category: "Construction & Installation",
      questions: [
        {
          question: "Will construction disrupt my daily life?",
          answer:
            "We strive to minimize disruption. Most work happens in your backyard, and we maintain clean, organized work sites. We'll discuss the schedule upfront and keep you informed throughout the process.",
        },
        {
          question: "What site preparation is required?",
          answer:
            "Sites need to be accessible and relatively level. We'll assess your property during consultation and advise on any required preparation such as clearing, leveling, or services connection.",
        },
        {
          question: "Are utilities included?",
          answer:
            "Our packages include internal electrical and plumbing work. Connection to your main house utilities is quoted separately and depends on distance and local requirements.",
        },
      ],
    },
    {
      category: "After Installation",
      questions: [
        {
          question: "What warranty do you provide?",
          answer:
            "We offer structural warranties ranging from 1-10 years depending on the package. All workmanship is guaranteed, and we use quality materials from trusted suppliers who provide their own warranties.",
        },
        {
          question: "Can I use it as a rental property?",
          answer:
            "Yes! Many clients use granny flats for rental income. Ensure you check local regulations regarding rental properties and obtain any necessary permits or insurance.",
        },
        {
          question: "How do I maintain my pod or granny flat?",
          answer:
            "Maintenance is minimal. We provide a care guide covering cleaning, seasonal checks, and recommended servicing. Most materials are chosen for durability and low maintenance requirements.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about backyard pods and granny flats
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-3xl text-gray-900 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = faqs
                    .slice(0, categoryIndex)
                    .reduce((acc, cat) => acc + cat.questions.length, questionIndex);
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="border border-gray-200 bg-white"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg text-gray-900 pr-8">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`text-gray-600 flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          size={24}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help. Get in touch for personalized answers to your questions.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
