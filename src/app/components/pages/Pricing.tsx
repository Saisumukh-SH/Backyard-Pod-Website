import { Check } from "lucide-react";
import { Link } from "react-router";

export function Pricing() {
  const packages = [
    {
      name: "Studio Pod",
      price: "45,000",
      description: "Ideal for home offices and creative spaces",
      features: [
        "15-25 sqm floor space",
        "Standard insulation",
        "Basic electrical setup",
        "Single glazed windows",
        "Standard flooring",
        "1 year warranty",
        "Basic interior finish",
      ],
      popular: false,
    },
    {
      name: "One Bedroom",
      price: "95,000",
      description: "Complete living solution with all amenities",
      features: [
        "35-50 sqm floor space",
        "Premium insulation",
        "Full electrical & plumbing",
        "Double glazed windows",
        "Quality flooring throughout",
        "Kitchen appliances included",
        "Modern bathroom fixtures",
        "5 year warranty",
        "Premium interior finish",
      ],
      popular: true,
    },
    {
      name: "Two Bedroom",
      price: "145,000",
      description: "Spacious family unit with premium features",
      features: [
        "60-80 sqm floor space",
        "Premium insulation",
        "Full electrical & plumbing",
        "Double glazed windows",
        "Quality flooring throughout",
        "Premium kitchen appliances",
        "Two modern bathrooms",
        "Outdoor deck included",
        "10 year warranty",
        "Luxury interior finish",
      ],
      popular: false,
    },
  ];

  const addons = [
    { name: "Solar Panel System (5kW)", price: "8,000" },
    { name: "Air Conditioning", price: "3,500" },
    { name: "Premium Flooring Upgrade", price: "5,000" },
    { name: "Outdoor Deck (20 sqm)", price: "6,000" },
    { name: "Smart Home System", price: "4,500" },
    { name: "Custom Cabinetry", price: "7,500" },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            All-inclusive packages with no hidden costs. Prices include design, materials, and installation.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white border-2 ${
                  pkg.popular ? "border-gray-900 shadow-xl" : "border-gray-200"
                } p-8`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-1 text-sm">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-sm text-gray-600">From</span>
                    <div className="text-5xl text-gray-900">
                      ${pkg.price}
                    </div>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="text-gray-900 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`block text-center px-6 py-3 transition-colors ${
                    pkg.popular
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "border-2 border-gray-900 text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">
              Optional Add-ons
            </h2>
            <p className="text-xl text-gray-600">
              Customize your space with these premium upgrades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addons.map((addon) => (
              <div key={addon.name} className="bg-white p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg text-gray-900 flex-1">{addon.name}</h3>
                  <span className="text-xl text-gray-900 ml-4">
                    ${addon.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-xl text-gray-600">
              We make it easy to get started with your backyard transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl text-gray-900 mb-2">10%</div>
              <div className="text-gray-600 mb-2">Initial Deposit</div>
              <p className="text-sm text-gray-500">Upon signing contract</p>
            </div>

            <div className="p-6">
              <div className="text-3xl text-gray-900 mb-2">40%</div>
              <div className="text-gray-600 mb-2">Progress Payment</div>
              <p className="text-sm text-gray-500">At construction start</p>
            </div>

            <div className="p-6">
              <div className="text-3xl text-gray-900 mb-2">50%</div>
              <div className="text-gray-600 mb-2">Final Payment</div>
              <p className="text-sm text-gray-500">Upon completion</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gray-50 text-center">
            <h3 className="text-2xl text-gray-900 mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-gray-600 mb-6">
              Every project is unique. Contact us for a personalized quote based on your specific requirements.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
