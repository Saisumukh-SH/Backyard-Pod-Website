import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-sm"></div>
              <span className="font-semibold text-xl text-white">PodLiving</span>
            </div>
            <p className="text-sm text-gray-400">
              Creating beautiful, sustainable backyard spaces for modern living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2026 PodLiving. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
