import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600">
            Ready to transform your backyard? Let's discuss your project
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team is ready to answer your questions and help you get started with your backyard transformation.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">1800 POD LIVE</p>
                    <p className="text-gray-600">Mon-Fri: 8am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@podliving.com</p>
                    <p className="text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">123 Design Street</p>
                    <p className="text-gray-600">Sydney NSW 2000</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8">
                <h3 className="text-xl text-gray-900 mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900">1.</span>
                    <span>We'll review your inquiry and contact you within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900">2.</span>
                    <span>Schedule a free consultation to discuss your project</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900">3.</span>
                    <span>Receive a detailed quote and design proposal</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-gray-900">4.</span>
                    <span>Begin your backyard transformation!</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 p-8">
              <h2 className="text-3xl text-gray-900 mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
                    placeholder="0400 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 bg-white"
                  >
                    <option value="">Select a project type</option>
                    <option value="studio-pod">Studio Pod</option>
                    <option value="one-bedroom">One Bedroom Granny Flat</option>
                    <option value="two-bedroom">Two Bedroom Granny Flat</option>
                    <option value="custom">Custom Design</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="text-lg">Map Location</p>
          </div>
        </div>
      </section>
    </div>
  );
}
