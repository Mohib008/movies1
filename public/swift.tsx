"use client";

import React from "react";
import Nav from "@/components/ui/Navbar/nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#212529] text-white">
      <div className="backdrop-blur-md border-b border-gray-800 bg-[#212529] sticky top-0 z-50">
        <Nav />
      </div>

      {/* Hero Section - Apple Style */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            UrbanHeat Systems
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Precision hydronic heating repairs for high-rise condominiums.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Service
            </a>
            <a
              href="#services"
              className="px-8 py-3 border border-gray-600 text-white rounded-full font-semibold hover:border-gray-400 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid - Apple Style */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Diagnosis</h3>
            <p className="text-gray-400">
              When others can't find the issue, we specialize in complex hydronic system troubleshooting.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Fast Response</h3>
            <p className="text-gray-400">
              Same-day service available for emergency no-heat situations in high-rise buildings.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Clear Pricing</h3>
            <p className="text-gray-400">
              Transparent rates with detailed invoices. No hidden fees or surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Apple Style Grid */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive hydronic heating solutions designed for modern condominiums
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Large Feature Card */}
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">🔥</span>
              </div>
              <h3 className="text-2xl font-bold">Emergency No-Heat Repair</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Critical heating loss situations requiring immediate attention. Full system diagnostics and rapid resolution.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-white">$150–$400</span>
              <a href="#contact" className="px-6 py-2 border border-gray-600 rounded-full hover:border-white transition-colors">
                Request
              </a>
            </div>
          </div>

          {/* Grid of smaller cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              title="Airlock Resolution"
              desc="Complete bleeding and circulation restoration"
              price="$150–$250"
              icon="💧"
              color="blue"
            />
            <ServiceCard
              title="Valve & Actuator"
              desc="Fault isolation and component replacement"
              price="$120–$180"
              icon="⚙️"
              color="green"
            />
            <ServiceCard
              title="Thermostat & Controls"
              desc="Wiring, programming, and smart system setup"
              price="$120–$180"
              icon="📱"
              color="purple"
            />
            <ServiceCard
              title="Leak Investigation"
              desc="Comprehensive leak detection and sealing"
              price="$120–$300"
              icon="🔍"
              color="yellow"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section - Apple Style */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Pricing</h2>
          <p className="text-xl text-gray-400">Simple, transparent pricing for all services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <PricingCard
            title="Service Call"
            price="$120–$150"
            features={["Initial diagnosis", "System assessment", "Basic troubleshooting"]}
          />
          <PricingCard
            title="Standard Repair"
            price="$150–$250"
            features={["Airlock resolution", "Valve servicing", "Circulation fixes"]}
            featured={true}
          />
          <PricingCard
            title="Complex Diagnosis"
            price="$250–$400"
            features={["Multi-system analysis", "Detailed reporting", "Root cause identification"]}
          />
          <PricingCard
            title="Emergency"
            price="Call"
            features={["Same-day service", "Priority response", "24/7 availability"]}
          />
        </div>
      </section>

      {/* Contact Section - Apple Style */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Request Service</h2>
          <p className="text-xl text-gray-400">
            Ready to solve your heating issues? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-2xl">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white">📞</span>
                </div>
                <div>
                  <p className="font-semibold">Call / Text</p>
                  <p className="text-gray-400">647-786-7378</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-2xl">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white">✉️</span>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">mohib.0008@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-2xl">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white">📍</span>
                </div>
                <div>
                  <p className="font-semibold">Service Area</p>
                  <p className="text-gray-400">GTA & Mississauga</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Updated Components with Apple Style
type ServiceCardProps = {
  title: string;
  desc: string;
  price: string;
  icon: string;
  color: 'blue' | 'green' | 'purple' | 'yellow';
};

function ServiceCard({ title, desc, price, icon, color }: ServiceCardProps) {
  const colorClasses: Record<ServiceCardProps['color'], string> = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    yellow: "bg-yellow-500"
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-colors group">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 ${colorClasses[color]} rounded-xl flex items-center justify-center`}>
          <span className="text-white text-lg">{icon}</span>
        </div>
        <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{title}</h4>
      </div>
      <p className="text-sm text-gray-400 mb-4">{desc}</p>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold text-white">{price}</div>
        <a href="#contact" className="px-4 py-1 border border-gray-600 rounded-full text-sm hover:border-white transition-colors">
          Select
        </a>
      </div>
    </div>
  );
}

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
};

function PricingCard({ title, price, features, featured = false }: PricingCardProps) {
  return (
    <div className={`bg-gray-900 rounded-2xl p-8 border-2 ${featured ? 'border-blue-500' : 'border-gray-800'} hover:border-blue-400 transition-colors`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="text-3xl font-bold mb-6 text-white">{price}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-400">
            <span className="text-green-500">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`w-full py-3 rounded-full font-semibold text-center block ${featured
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'border border-gray-600 hover:border-white text-white'
          } transition-colors`}
      >
        {featured ? 'Get Started' : 'Learn More'}
      </a>
    </div>
  );
}

function ContactForm() {
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = encodeURIComponent(String(data.get("name") || ""));
        const phone = encodeURIComponent(String(data.get("phone") || ""));
        const unit = encodeURIComponent(String(data.get("unit") || ""));
        const details = encodeURIComponent(String(data.get("details") || ""));
        const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AUnit: ${unit}%0D%0ADetails: ${details}`;
        const subject = encodeURIComponent("Service Request - UrbanHeat Systems");
        window.location.href = `mailto:mohib.0008@gmail.com?subject=${subject}&body=${body}`;
      }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 gap-6">
        <input
          name="name"
          placeholder="Your name"
          className="p-4 border border-gray-700 rounded-2xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <input
          name="phone"
          placeholder="Phone (e.g. 647-xxx-xxxx)"
          className="p-4 border border-gray-700 rounded-2xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <input
          name="unit"
          placeholder="Building & Unit (optional)"
          className="p-4 border border-gray-700 rounded-2xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <textarea
          name="details"
          placeholder="Describe the issue (photos help)"
          className="p-4 border border-gray-700 rounded-2xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors h-32"
          rows={4}
        ></textarea>
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
        >
          Send Request
        </button>
        <a
          href="tel:6477867378"
          className="flex-1 px-6 py-4 border border-gray-600 text-white rounded-2xl font-semibold text-center hover:border-white transition-colors"
        >
          Call Now
        </a>
      </div>
    </form>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center text-white font-bold">
                U
              </div>
              <div>
                <div className="font-bold text-white">UrbanHeat Systems</div>
                <div className="text-xs text-gray-400">High-rise heating specialists</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>Hydronic Repairs</div>
              <div>System Diagnostics</div>
              <div>Emergency Service</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>647-786-7378</div>
              <div>mohib.0008@gmail.com</div>
              <div>GTA Service Area</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} UrbanHeat Systems. High-rise heating done right.
        </div>
      </div>
    </footer>
  );
}