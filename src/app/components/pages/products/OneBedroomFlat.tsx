import { CheckCircle, ArrowLeft, Ruler, Bed, Bath, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

export function OneBedroomFlat() {
  const specifications = [
    { icon: Ruler, label: "Floor Space", value: "35-50 sqm" },
    { icon: Bed, label: "Bedrooms", value: "1 Bedroom" },
    { icon: Bath, label: "Bathroom", value: "Full bathroom" },
    { icon: ChefHat, label: "Kitchen", value: "Complete kitchen" },
  ];

  const features = [
    "35-50 sqm floor space",
    "Full kitchen with quality appliances",
    "Modern bathroom with shower",
    "Separate bedroom with built-in wardrobe",
    "Open plan living and dining area",
    "Independent utilities connection",
    "Split system air conditioning",
    "Double glazed windows",
    "Quality flooring throughout",
    "Full laundry facilities",
    "Outdoor entrance area",
    "LED lighting package",
  ];

  const floorPlans = [
    {
      size: "35 sqm",
      layout: "Compact",
      description: "Efficient layout perfect for singles or couples, maximizing every square meter.",
    },
    {
      size: "42 sqm",
      layout: "Standard",
      description: "Well-balanced design with comfortable living spaces and good storage.",
    },
    {
      size: "50 sqm",
      layout: "Spacious",
      description: "Generous layout with larger bedroom and expansive living area.",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1692911470070-c10cd6c89938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFubnklMjBmbGF0JTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcyNDAwNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
              One Bedroom Granny Flat
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete living solution with bedroom, bathroom, and kitchen. Perfect for extended family, guests, or rental income.
            </p>
            <div className="flex gap-4 mb-12">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                From $95,000
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
              alt="One Bedroom Granny Flat"
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

      {/* Floor Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-4 text-center">
            Available Floor Plans
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Choose the size that fits your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {floorPlans.map((plan, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 p-8 text-center hover:border-gray-900 transition-colors">
                <div className="text-3xl text-gray-900 mb-2">{plan.size}</div>
                <h3 className="text-xl text-gray-900 mb-3">{plan.layout}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            Ideal For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl text-gray-900 mb-3">Aging Parents</h3>
              <p className="text-gray-600">
                Keep family close while maintaining independence and privacy
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-gray-900 mb-3">Rental Income</h3>
              <p className="text-gray-600">
                Generate steady income with a high-quality rental property
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-gray-900 mb-3">Adult Children</h3>
              <p className="text-gray-600">
                Provide young adults with their own space on the property
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-gray-900 mb-3">Guest Accommodation</h3>
              <p className="text-gray-600">
                Offer visitors comfortable, self-contained lodging
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gallery.map((image, index) => (
              <div key={index} className="relative h-80 bg-gray-100">
                <img
                  src={image}
                  alt={`One Bedroom Flat ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">
            Ready to Add a Granny Flat?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a free consultation to discuss your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Request Consultation
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
