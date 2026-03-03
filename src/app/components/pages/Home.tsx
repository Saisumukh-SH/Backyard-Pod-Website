import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Home as HomeIcon,
  Building2,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1668174627325-dfbbcba56eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBob21lfGVufDF8fHx8MTc3MjQwMDc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern architecture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            YOUR VISION
          </h1>
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            OUR BLUEPRINT
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Premium backyard pods and granny flats for modern
            living
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Explore Products
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Why Choose Design MyBackyard
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We create beautiful, functional spaces that
              enhance your property and lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">
                Premium Design
              </h3>
              <p className="text-gray-600">
                Minimalist aesthetics with maximum functionality
                for modern living spaces
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">
                Expert Construction
              </h3>
              <p className="text-gray-600">
                Professional installation with attention to
                detail and quality craftsmanship
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <HomeIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">
                Turnkey Solution
              </h3>
              <p className="text-gray-600">
                From design to completion, we handle everything
                for a stress-free experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600">
              Versatile spaces designed for your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white overflow-hidden group cursor-pointer">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1692911470070-c10cd6c89938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFubnklMjBmbGF0JTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcyNDAwNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Granny Flat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-gray-900 mb-3">
                  Granny Flats
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete living spaces perfect for guests,
                  family, or rental income
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-gray-900 hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white overflow-hidden group cursor-pointer">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1765810655582-97eae3a801bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3R1ZGlvJTIwcG9kfGVufDF8fHx8MTc3MjQwMDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Studio Pod"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-gray-900 mb-3">
                  Studio Pods
                </h3>
                <p className="text-gray-600 mb-4">
                  Compact, stylish workspaces and creative
                  studios for your backyard
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-gray-900 hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              The Benefits of Backyard Living
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-gray-900 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">
                    Additional Living Space
                  </h4>
                  <p className="text-gray-600">
                    Expand your home without the hassle of
                    moving or major renovations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-gray-900 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">
                    Property Value
                  </h4>
                  <p className="text-gray-600">
                    Increase your home's market value with a
                    premium backyard structure
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-gray-900 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">
                    Rental Income
                  </h4>
                  <p className="text-gray-600">
                    Generate passive income with a high-quality
                    rental unit
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-gray-900 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">
                    Quick Installation
                  </h4>
                  <p className="text-gray-600">
                    Most projects completed in weeks, not months
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcyMzcxMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Minimalist interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our team to discuss your project
            and receive a free consultation
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}