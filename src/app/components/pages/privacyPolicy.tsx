// src/pages/PrivacyPolicy.tsx

import { motion } from "framer-motion";
import { Shield, Lock, Database, Globe, Mail, Cookie } from "lucide-react";
import SEO from "../../components/SEO";

const sections = [
  {
    icon: Shield,
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-4">
          We may collect personal information including:
        </p>

        <ul className="space-y-2 list-disc list-inside text-neutral-700">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Property address</li>
          <li>Project enquiry details</li>
          <li>Information you provide through forms or emails</li>
          <li>Website usage data and device information</li>
        </ul>
      </>
    ),
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    content: (
      <ul className="space-y-2 list-disc list-inside text-neutral-700">
        <li>Respond to your enquiries</li>
        <li>Arrange consultations and site visits</li>
        <li>Prepare quotations</li>
        <li>Improve our website and services</li>
        <li>Communicate project updates</li>
        <li>Meet legal obligations</li>
      </ul>
    ),
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    content: (
      <>
        <p>
          Backyard Nest uses cookies and analytics tools to understand website
          performance and improve your experience.
        </p>

        <div className="mt-4 rounded-lg bg-[#F8F5F2] p-4 border">
          <p className="font-medium mb-2">
            Services we may use:
          </p>

          <ul className="space-y-1 list-disc list-inside">
            <li>Google Analytics</li>
            <li>Google Ads Conversion Tracking</li>
            <li>Meta Pixel</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    icon: Lock,
    title: "Keeping Your Information Secure",
    content: (
      <p>
        We implement appropriate technical and organisational safeguards to
        protect your personal information from unauthorised access, disclosure,
        alteration or destruction. While we use industry-standard security,
        no online transmission is ever completely secure.
      </p>
    ),
  },
  {
    icon: Globe,
    title: "Sharing Information",
    content: (
      <>
        <p className="mb-3">
          We do not sell your personal information.
        </p>

        <p>
          We may share information with trusted service providers who help us
          operate our website, manage enquiries, provide analytics, advertising,
          hosting or where required by Australian law.
        </p>
      </>
    ),
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: (
      <>
        <p className="mb-4">
          If you have any questions regarding this Privacy Policy or wish to
          access or update your information, please contact us.
        </p>

        <div className="space-y-2">
          <p>
            <strong>Backyard Nest</strong>
          </p>

          <p>Email: build@backyardnest.com.au</p>

          <p>Phone: +61 466 333 438</p>

          <p>Melbourne, Victoria, Australia</p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Backyard Nest"
        description="Learn how Backyard Nest collects, stores and protects your personal information."
      />

      <main className="bg-[#FCFAF7] text-[#1C1B19]">

        {/* Hero */}

        <section className="relative overflow-hidden border-b border-neutral-200">

          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[length:28px_28px]" />

          <div className="relative max-w-6xl mx-auto px-6 py-28">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
            >

              <p className="uppercase tracking-[0.35em] text-sm text-[#6E4630] mb-5">
                Legal
              </p>

              <h1 className="editorial-heading text-5xl md:text-7xl mb-8">
                Privacy Policy
              </h1>

              <div className="w-24 h-[2px] bg-[#6E4630] mb-8" />

              <p className="text-lg text-neutral-600 max-w-3xl leading-relaxed">
                Your privacy matters to us. This page explains how Backyard Nest
                collects, uses, stores and protects your personal information
                when you interact with our website or contact our team.
              </p>

            </motion.div>

          </div>

        </section>

        {/* Content */}

        <section className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-8">

            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="bg-white rounded-2xl border border-neutral-200 p-8 hover:border-[#6E4630] hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#F5F0EB] flex items-center justify-center mb-6">

                    <Icon
                      size={28}
                      className="text-[#6E4630]"
                    />

                  </div>

                  <h2 className="text-2xl font-semibold mb-6">
                    {section.title}
                  </h2>

                  <div className="leading-8 text-neutral-700">
                    {section.content}
                  </div>

                </motion.div>
              );
            })}
          </div>

        </section>

        {/* Bottom Notice */}

        <section className="bg-[#1C1B19] text-white">

          <div className="max-w-5xl mx-auto px-6 py-20 text-center">

            <Shield
              className="mx-auto mb-6 text-[#C8A97E]"
              size={48}
            />

            <h2 className="text-3xl editorial-heading mb-6">
              Protecting Your Information
            </h2>

            <p className="max-w-3xl mx-auto text-neutral-300 leading-8">
              Backyard Nest is committed to handling your information
              responsibly and transparently. We regularly review our privacy
              practices to ensure they align with Australian privacy standards
              and industry best practices.
            </p>

          </div>

        </section>

      </main>
    </>
  );
}