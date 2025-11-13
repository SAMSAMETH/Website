import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="font-sans bg-gradient-to-b from-[#faf2f5] via-[#f1ecff] to-[#dbe0f3] min-h-screen text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 flex flex-col items-center justify-center text-center min-h-screen px-6">
        
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          Empowering the{" "}
          <span className="bg-gradient-to-r from-[#4A0E0E] via-[#7B1E1E] to-[#B03030] text-transparent bg-clip-text">
            Future
          </span>{" "}
          with <br />
          <span className="bg-gradient-to-r from-[#B03030] via-[#7B1E1E] to-[#4A0E0E] text-transparent bg-clip-text">
            Zercadia
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Delivering intelligent, futuristic solutions that inspire innovation
          and transform businesses worldwide.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          {/* Premium Gold CTA */}
          <Link
            to="/signup"
            className="bg-gradient-to-r from-[#7a6410] via-[#b18e2a] to-[#d4af37]
                       text-white px-8 py-3 rounded-lg font-semibold shadow-md
                       hover:brightness-105 hover:shadow-[0_0_14px_rgba(212,175,55,0.25)]
                       transition-all duration-300"
          >
            Get Started
          </Link>

          {/* Burgundy Outline CTA */}
          <Link
            to="/about"
            className="border-2 border-[#7B1E1E] text-[#7B1E1E] px-8 py-3 rounded-lg font-semibold
                       bg-transparent transition-all duration-500 ease-in-out
                       hover:bg-gradient-to-r hover:from-[#4A0E0E] hover:via-[#7B1E1E] hover:to-[#B03030]
                       hover:text-white hover:shadow-[0_0_15px_rgba(123,30,30,0.3)]"
          >
            Learn More
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

