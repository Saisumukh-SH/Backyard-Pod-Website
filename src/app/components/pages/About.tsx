import { Target, Award, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      description: "15+ years in sustainable construction and design",
    },
    {
      name: "James Chen",
      role: "Lead Architect",
      description: "Award-winning designer specializing in modular spaces",
    },
    {
      name: "Emma Rodriguez",
      role: "Construction Manager",
      description: "Expert in efficient project delivery and quality control",
    },
    {
      name: "David Park",
      role: "Client Relations",
      description: "Dedicated to ensuring exceptional customer experiences",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "We never compromise on materials or craftsmanship. Every project reflects our commitment to excellence.",
    },
    {
      icon: Heart,
      title: "Customer Focused",
      description:
        "Your vision drives our work. We listen, adapt, and deliver spaces that exceed expectations.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "We embrace new technologies and sustainable practices to create smarter, better living spaces.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Success comes from working together. We partner with you every step of the way.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
            About PodLiving
          </h1>
          <p className="text-xl text-gray-600">
            Creating exceptional backyard spaces that enhance how you live, work, and connect
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2018, PodLiving was born from a simple observation: homeowners needed more space, but traditional extensions were expensive, time-consuming, and disruptive.
              </p>
              <p>
                We saw an opportunity to revolutionize backyard construction with a focus on minimalist design, sustainable materials, and streamlined processes. What started as a small team with big ideas has grown into a trusted name in backyard living solutions.
              </p>
              <p>
                Today, we've completed over 500 projects across Australia, helping families create spaces for work, guests, aging parents, and everything in between. Each project reinforces our belief that great design should be accessible, sustainable, and tailored to how people actually live.
              </p>
            </div>
          </div>

          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1692166567037-4009225486ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI0MDA3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Construction"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate professionals dedicated to your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl mb-2">8+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl mb-2">50+</div>
              <div className="text-gray-400">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's work together to create your perfect backyard space
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
