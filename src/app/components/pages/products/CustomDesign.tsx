import { CheckCircle, ArrowLeft, Lightbulb, Pencil, FileCheck, Hammer } from "lucide-react";
import { Link } from "react-router-dom";

export function CustomDesign() {
  const process = [
    {
      icon: Lightbulb,
      step: "1",
      title: "Initial Consultation",
      description: "Share your vision, requirements, and budget with our design team.",
    },
    {
      icon: Pencil,
      step: "2",
      title: "Design Development",
      description: "Our architects create custom plans and 3D visualizations tailored to your needs.",
    },
    {
      icon: FileCheck,
      step: "3",
      title: "Refinement & Approval",
      description: "Review designs, make adjustments, and obtain council approvals.",
    },
    {
      icon: Hammer,
      step: "4",
      title: "Construction",
      description: "Professional build and installation with regular progress updates.",
    },
  ];

  const customOptions = [
    {
      category: "Size & Layout",
      options: [
        "Any size from 15 sqm to 100+ sqm",
        "Custom room configurations",
        "Multi-story options available",
        "Attached or detached designs",
      ],
    },
    {
      category: "Interior Features",
      options: [
        "Premium material selections",
        "Custom cabinetry and storage",
        "High-end appliances",
        "Smart home integration",
      ],
    },
    {
      category: "Exterior Design",
      options: [
        "Various cladding materials",
        "Custom color schemes",
        "Outdoor living spaces",
        "Landscaping integration",
      ],
    },
    {
      category: "Sustainability",
      options: [
        "Solar panel systems",
        "Rainwater harvesting",
        "Energy-efficient design",
        "Sustainable materials",
      ],
    },
  ];

  const pastProjects = [
    {
      title: "Artist Studio + Guest Suite",
      size: "55 sqm",
      description: "High ceiling studio with north-facing windows and attached guest bedroom",
      image: "https://images.unsplash.com/photo-1765810655582-97eae3a801bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3R1ZGlvJTIwcG9kfGVufDF8fHx8MTc3MjQwMDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Luxury Retreat",
      size: "85 sqm",
      description: "Two bedroom with spa bathroom, gourmet kitchen, and wraparound deck",
      image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcyMzcxMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Multi-Purpose Space",
      size: "70 sqm",
      description: "Combined home office, gym, and entertainment room with kitchenette",
      image: "https://images.unsplash.com/photo-1668174627325-dfbbcba56eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBob21lfGVufDF8fHx8MTc3MjQwMDc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Products
        </Link>
      </div>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
            Custom Design
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Work with our team to create your perfect backyard space. No limits, just possibilities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Start Your Custom Project
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-4 text-center">
            Custom Design Process
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            From concept to completion, we guide you every step of the way
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="text-sm text-gray-500 mb-2">Step {item.step}</div>
                  <h3 className="text-xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Options */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            Customization Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {customOptions.map((section, index) => (
              <div key={index}>
                <h3 className="text-2xl text-gray-900 mb-6">{section.category}</h3>
                <div className="space-y-3">
                  {section.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-start gap-3">
                      <CheckCircle className="text-gray-900 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-gray-900 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="text-lg text-gray-900 mb-1">Architectural Consultation</h4>
                <p className="text-gray-600">Work directly with licensed architects</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-gray-900 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="text-lg text-gray-900 mb-1">3D Visualization</h4>
                <p className="text-gray-600">See your design before construction begins</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-gray-900 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="text-lg text-gray-900 mb-1">Council Approval Assistance</h4>
                <p className="text-gray-600">We handle all permits and documentation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-gray-900 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="text-lg text-gray-900 mb-1">Project Management</h4>
                <p className="text-gray-600">Dedicated manager for your build</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-gray-900 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="text-lg text-gray-900 mb-1">Quality Guarantee</h4>
                <p className="text-gray-600">10 year structural warranty</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-gray-900 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="text-lg text-gray-900 mb-1">Turnkey Delivery</h4>
                <p className="text-gray-600">Move-in ready completion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-4 text-center">
            Custom Projects Showcase
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Examples of unique spaces we've created for our clients
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastProjects.map((project, index) => (
              <div key={index} className="bg-white">
                <div className="relative h-64 bg-gray-100 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm text-gray-500 mb-2">{project.size}</div>
                <h3 className="text-xl text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-900 mb-6">
            Custom Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Every custom project is unique. Pricing depends on size, materials, features, and complexity. 
            Most custom projects range from $50,000 to $250,000+.
          </p>
          <div className="bg-white border-2 border-gray-200 p-8 mb-8">
            <h3 className="text-2xl text-gray-900 mb-4">Get Your Custom Quote</h3>
            <p className="text-gray-600 mb-6">
              Schedule a free consultation to discuss your project and receive a detailed quote.
              We'll provide cost estimates, timeline, and design concepts.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl text-gray-900 mb-2">How long does a custom project take?</h3>
              <p className="text-gray-600">
                Timeline varies based on complexity and size. Typically 3-6 months from initial consultation to completion, including design, approvals, and construction.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-gray-900 mb-2">Do you have design limitations?</h3>
              <p className="text-gray-600">
                We can design almost anything within building regulations. Our team will advise on feasibility, compliance, and best practices for your vision.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-gray-900 mb-2">Can I see designs before committing?</h3>
              <p className="text-gray-600">
                Yes! We provide initial concept designs and 3D renderings before you commit to the full project. Design fees may apply for extensive custom work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">
            Ready to Design Your Dream Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's bring your vision to life with a custom-designed backyard structure
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Custom Project
          </Link>
        </div>
      </section>
    </div>
  );
}
