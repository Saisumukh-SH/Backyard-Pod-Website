import { CheckCircle, ArrowLeft, Ruler, Zap, Wifi, ThermometerSnowflake } from "lucide-react";
import { Link } from "react-router";

export function StudioPod() {
  const specifications = [
    { icon: Ruler, label: "Floor Space", value: "15-25 sqm" },
    { icon: Zap, label: "Power", value: "Full electrical setup" },
    { icon: Wifi, label: "Connectivity", value: "High-speed internet ready" },
    { icon: ThermometerSnowflake, label: "Climate", value: "Insulated & climate controlled" },
  ];

  const features = [
    "15-25 sqm floor space",
    "Insulated walls and ceiling",
    "Full electrical setup with multiple outlets",
    "High-speed internet ready with Cat6 cabling",
    "Climate control with heating and cooling",
    "Custom interior finishes",
    "Large windows for natural light",
    "Sound insulation for privacy",
    "LED lighting throughout",
    "Durable flooring options",
  ];

  const useCases = [
    {
      title: "Home Office",
      description: "Create a professional workspace separate from your home, improving focus and work-life balance.",
    },
    {
      title: "Creative Studio",
      description: "Perfect for artists, musicians, or content creators needing dedicated creative space.",
    },
    {
      title: "Fitness Room",
      description: "Design your private gym with climate control and space for all your equipment.",
    },
    {
      title: "Study Space",
      description: "Quiet, distraction-free environment ideal for students or researchers.",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1765810655582-97eae3a801bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3R1ZGlvJTIwcG9kfGVufDF8fHx8MTc3MjQwMDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcyMzcxMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1668174627325-dfbbcba56eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBob21lfGVufDF8fHx8MTc3MjQwMDc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
              Studio Pod
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Perfect for home offices, creative studios, or personal retreat spaces. Compact yet spacious, designed for modern living.
            </p>
            <div className="flex gap-4 mb-12">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                From $45,000
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4">
              {specifications.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-gray-900" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{spec.label}</div>
                      <div className="text-gray-900">{spec.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative h-[600px]">
            <img
              src={gallery[0]}
              alt="Studio Pod"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            Features & Inclusions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-gray-900 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-4 text-center">
            Perfect For
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Versatile space that adapts to your lifestyle
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gallery.map((image, index) => (
              <div key={index} className="relative h-80 bg-gray-100">
                <img
                  src={image}
                  alt={`Studio Pod ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-900 mb-4">
            Ready to Create Your Studio Pod?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with our team to discuss your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Request Consultation
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
