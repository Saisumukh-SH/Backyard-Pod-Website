import { CheckCircle, ArrowLeft, Ruler, Bed, Bath, ChefHat, Users, Home } from "lucide-react";
import { Link } from "react-router-dom";

export function TwoBedroomFlat() {
  const specifications = [
    { icon: Ruler, label: "Floor Space", value: "60-80 sqm" },
    { icon: Bed, label: "Bedrooms", value: "2 Bedrooms" },
    { icon: Bath, label: "Bathroom", value: "Full bathroom" },
    { icon: ChefHat, label: "Kitchen", value: "Premium kitchen" },
    { icon: Home, label: "Living", value: "Spacious living area" },
    { icon: Users, label: "Capacity", value: "Sleeps 4+" },
  ];

  const features = [
    "60-80 sqm floor space",
    "Two separate bedrooms with built-in wardrobes",
    "Full kitchen with premium appliances",
    "Modern bathroom with bathtub option",
    "Spacious open-plan living and dining",
    "Outdoor deck included (20 sqm)",
    "Split system air conditioning in all rooms",
    "Double glazed windows throughout",
    "Premium flooring options",
    "Full laundry with separate entrance",
    "Additional storage space",
    "LED lighting package",
    "Smart home ready",
    "Sound insulation between rooms",
  ];

  const layouts = [
    {
      name: "Classic",
      description: "Traditional layout with bedrooms on one side and living spaces on the other for maximum privacy.",
    },
    {
      name: "Open Plan",
      description: "Modern design with integrated living spaces and glass doors opening to outdoor deck.",
    },
    {
      name: "Family",
      description: "Layout optimized for families with larger bedrooms and central bathroom access.",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1743348111301-12f060372493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMG91dGRvb3IlMjBzdHVkaW98ZW58MXx8fHwxNzcyNDAwNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
              Two Bedroom Granny Flat
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Spacious family-friendly unit with multiple bedrooms and premium features. The ultimate backyard living solution.
            </p>
            <div className="flex gap-4 mb-12">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                From $145,000
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
              alt="Two Bedroom Granny Flat"
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

      {/* Layouts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-4 text-center">
            Layout Options
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Choose the configuration that works best for you
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {layouts.map((layout, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 p-8 hover:border-gray-900 transition-colors">
                <h3 className="text-2xl text-gray-900 mb-4">{layout.name}</h3>
                <p className="text-gray-600">{layout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            Premium Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl text-gray-900 mb-4">Outdoor Living</h3>
              <p className="text-gray-600 mb-6">
                Every two bedroom granny flat includes a 20 sqm outdoor deck, perfect for entertaining or relaxing. Optional upgrades include pergola, built-in BBQ area, and landscaping.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gray-900" />
                  Composite decking material
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gray-900" />
                  Glass balustrade option
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gray-900" />
                  Outdoor lighting included
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl text-gray-900 mb-4">Premium Kitchen</h3>
              <p className="text-gray-600 mb-6">
                Fully equipped kitchen with stone benchtops, premium appliances, and ample storage. Designed for functionality and style.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gray-900" />
                  Stone benchtops
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gray-900" />
                  Quality appliances (oven, cooktop, dishwasher)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gray-900" />
                  Soft-close cabinetry
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl text-gray-900 mb-3">Multi-Generation Living</h3>
              <p className="text-gray-600">
                House extended family comfortably with separate living spaces
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-gray-900 mb-3">Premium Rental</h3>
              <p className="text-gray-600">
                Attract quality tenants with a spacious, modern property
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-gray-900 mb-3">Work & Live</h3>
              <p className="text-gray-600">
                Combine home office with guest accommodation
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-gray-900 mb-3">Future Planning</h3>
              <p className="text-gray-600">
                Create flexible space that adapts to changing needs
              </p>
            </div>
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
                  alt={`Two Bedroom Flat ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">
            Investment Value
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            A two bedroom granny flat can generate significant rental income while adding value to your property
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl mb-2">$450-650</div>
              <div className="text-gray-400">Weekly Rental Income</div>
            </div>
            <div>
              <div className="text-4xl mb-2">$50K+</div>
              <div className="text-gray-400">Added Property Value</div>
            </div>
            <div>
              <div className="text-4xl mb-2">6-8%</div>
              <div className="text-gray-400">Annual ROI</div>
            </div>
          </div>
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
