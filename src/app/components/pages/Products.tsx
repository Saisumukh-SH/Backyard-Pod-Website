import { CheckCircle } from "lucide-react";
import { Link } from "react-router";

export function Products() {
  const products = [
    {
      id: 1,
      name: "Studio Pod",
      slug: "studio-pod",
      description: "Perfect for home offices, creative studios, or personal retreat spaces",
      image: "https://images.unsplash.com/photo-1765810655582-97eae3a801bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3R1ZGlvJTIwcG9kfGVufDF8fHx8MTc3MjQwMDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "15-25 sqm floor space",
        "Insulated walls and ceiling",
        "Full electrical setup",
        "High-speed internet ready",
        "Climate control",
        "Custom interior finishes",
      ],
    },
    {
      id: 2,
      name: "One Bedroom Granny Flat",
      slug: "one-bedroom-flat",
      description: "Complete living solution with bedroom, bathroom, and kitchen",
      image: "https://images.unsplash.com/photo-1692911470070-c10cd6c89938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFubnklMjBmbGF0JTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcyNDAwNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "35-50 sqm floor space",
        "Full kitchen with appliances",
        "Modern bathroom",
        "Separate bedroom",
        "Living area",
        "Independent utilities",
      ],
    },
    {
      id: 3,
      name: "Two Bedroom Granny Flat",
      slug: "two-bedroom-flat",
      description: "Spacious family-friendly unit with multiple bedrooms",
      image: "https://images.unsplash.com/photo-1743348111301-12f060372493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMG91dGRvb3IlMjBzdHVkaW98ZW58MXx8fHwxNzcyNDAwNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "60-80 sqm floor space",
        "Two separate bedrooms",
        "Full kitchen and dining",
        "Modern bathroom",
        "Spacious living area",
        "Outdoor deck option",
      ],
    },
    {
      id: 4,
      name: "Custom Design",
      slug: "custom-design",
      description: "Work with our team to create your perfect backyard space",
      image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcyMzcxMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Tailored to your needs",
        "Flexible size and layout",
        "Premium material options",
        "Architectural consultation",
        "3D visualization",
        "Council approval assistance",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600">
            From compact studio pods to spacious granny flats, we have the perfect solution for your backyard
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative h-96 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="text-4xl text-gray-900 mb-4">{product.name}</h2>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="text-gray-900 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to={`/products/${product.slug}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    View Pricing
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent, and professional from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                1
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">
                Discuss your vision and requirements with our team
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                2
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                Receive custom plans and 3D visualizations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                3
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Approval</h3>
              <p className="text-gray-600">
                We handle all council permits and approvals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                4
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Construction</h3>
              <p className="text-gray-600">
                Professional installation and final handover
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}