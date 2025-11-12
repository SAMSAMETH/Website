import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {
  Code,
  Smartphone,
  Brain,
  Bot,
  Megaphone,
  Palette,
  Video,
  PenTool,
} from "lucide-react"; // ✅ Lucide icons

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "We build responsive, scalable, and high-performance websites tailored to your business needs using modern frameworks.",
      icon: <Code className="w-10 h-10 text-[#b18e2a]" />,
    },
    {
      title: "App Development",
      description:
        "Our mobile apps deliver seamless experiences across iOS and Android platforms with optimized performance and design.",
      icon: <Smartphone className="w-10 h-10 text-[#b18e2a]" />,
    },
    {
      title: "AI Application Development",
      description:
        "We integrate Artificial Intelligence into apps to make smarter, data-driven decisions for your business processes.",
      icon: <Brain className="w-10 h-10 text-[#b18e2a]" />,
    },
    {
      title: "AI Agents & Automation for Business",
      description:
        "Streamline workflows with custom AI agents and intelligent automation solutions that enhance productivity and reduce costs.",
      icon: <Bot className="w-10 h-10 text-[#b18e2a]" />,
    },
    {
      title: "Digital Marketing",
      description:
        "We help businesses grow online through SEO, social media campaigns, content marketing, and data-driven advertising.",
      icon: <Megaphone className="w-10 h-10 text-[#b18e2a]" />,
    },
    {
      title: "UI/UX Design",
      description:
        "We craft visually stunning and user-friendly interfaces that deliver smooth experiences across all devices.",
      icon: <Palette className="w-10 h-10 text-[#b18e2a]" />,
    },
    {
      title: "Video Editing",
      description:
        "Our creative editors produce professional videos that captivate audiences and elevate your brand presence.",
      icon: <Video className="w-10 h-10 text-[#b18e2a]" />,
    },
    {
      title: "Logo Design",
      description:
        "We design memorable, elegant logos that define your brand identity and create lasting impressions.",
      icon: <PenTool className="w-10 h-10 text-[#b18e2a]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">
      <Navbar />
{/* 🌟 Page Header */}
<div className="text-center pt-32 pb-16 px-6 md:px-12">

  {/* 🏷️ Title + Button Inline on Desktop */}
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-center gap-4 mb-6">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
      <span className="text-black">The Services We’re Offering </span>
      <span className="bg-gradient-to-r from-[#806a15] via-[#b18e2a] to-[#d4af37] text-transparent bg-clip-text">
        for Businesses
      </span>
    </h1>

    {/* 🟨 Project Enquiry Button — next to heading on desktop */}
    <Link
      to="/contact"
      className="hidden md:inline-block px-8 py-2 md:px-10 md:py-3 text-white text-sm md:text-base font-semibold rounded-lg shadow
                 bg-gradient-to-r from-[#806a15] via-[#b18e2a] to-[#d4af37]
                 hover:brightness-110 hover:shadow-[0_0_12px_rgba(212,175,55,0.35)]
                 transition-all duration-300 md:ml-4"
    >
      Project Enquiry
    </Link>
  </div>

  {/* 🟨 Mobile View Button — below title */}
  <div className="flex justify-center mb-8 md:hidden">
    <Link
      to="/contact"
      className="inline-block px-8 py-2 md:px-10 md:py-3 text-white text-sm md:text-base font-semibold rounded-lg shadow
                 bg-gradient-to-r from-[#806a15] via-[#b18e2a] to-[#d4af37]
                 hover:brightness-110 hover:shadow-[0_0_12px_rgba(212,175,55,0.35)]
                 transition-all duration-300"
    >
      Project Enquiry
    </Link>
  </div>

  <p className="text-gray-600 max-w-2xl mx-auto">
    Empower your business with our full-spectrum digital solutions — from web
    and mobile development to AI automation, marketing, and design.
  </p>
</div>

      {/* 🧩 Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 pb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 p-8 flex flex-col items-center text-center border-t-4 border-[#b18e2a]"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
