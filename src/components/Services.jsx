import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

// 🎨 React Icons
import { FaGlobe, FaMobileAlt, FaBullhorn, FaVideo } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import { SiOpenai } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { TbBrandAdobe } from "react-icons/tb";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "We build responsive, scalable, and high-performance websites tailored to your business needs using modern frameworks.",
      icon: <FaGlobe size={50} className="text-[#b18e2a]" />,
    },
    {
      title: "App Development",
      description:
        "Our mobile apps deliver seamless experiences across iOS and Android platforms with optimized performance and design.",
      icon: <FaMobileAlt size={50} className="text-[#b18e2a]" />,
    },
    {
      title: "AI Application Development",
      description:
        "We integrate Artificial Intelligence into apps to make smarter, data-driven decisions for your business processes.",
      icon: <RiRobot2Fill size={50} className="text-[#b18e2a]" />,
    },
    {
      title: "AI Agents & Automation",
      description:
        "Streamline workflows with custom AI agents and intelligent automation solutions that enhance productivity and reduce costs.",
      icon: <SiOpenai size={50} className="text-[#b18e2a]" />,
    },
    {
      title: "Digital Marketing",
      description:
        "We help businesses grow online through SEO, social media campaigns, content marketing, and data-driven advertising.",
      icon: <FaBullhorn size={50} className="text-[#b18e2a]" />,
    },
    {
      title: "UI/UX Design",
      description:
        "We craft visually stunning and user-friendly interfaces that deliver smooth user experiences.",
      icon: <MdDesignServices size={50} className="text-[#b18e2a]" />,
    },
    {
      title: "Video Editing",
      description:
        "Our creative editors produce professional videos that captivate audiences and elevate your brand presence.",
      icon: <FaVideo size={50} className="text-[#b18e2a]" />,
    },
    {
      title: "Logo Design",
      description:
        "We design memorable, elegant logos that define your brand identity and create lasting impressions.",
      icon: <TbBrandAdobe size={50} className="text-[#b18e2a]" />,
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-[#faf2f5] via-[#f1ecff] to-[#dbe0f3] min-h-screen text-gray-800">
      <Navbar />

      {/* 🌟 Page Header */}
      <div className="text-center pt-32 pb-16 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
            <span className="text-black">The Services We’re Offering </span>
            <span className="bg-gradient-to-r from-[#806a15] via-[#b18e2a] to-[#d4af37] text-transparent bg-clip-text">
              for Businesses
            </span>
          </h1>

          <Link
            to="/contact"
            className="hidden md:inline-block px-10 py-3 text-white font-semibold rounded-lg shadow
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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-200 p-8 flex flex-col items-center text-center border-t-4 border-[#b18e2a]"
          >
            {/* Icon */}
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {service.icon}
            </motion.div>

            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
