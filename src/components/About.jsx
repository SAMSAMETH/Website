import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import logo from "../assets/logo1.jpg";
import missionImg from "../assets/Mission.jpg";
import visionImg from "../assets/vision.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8e9ef] via-[#f1ecff] to-[#e3e8ff] text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="pt-36 pb-20 px-6">

        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto text-center">
          <motion.img
            src={logo}
            alt="Zercadia Logo"
            className="w-32 h-32 mx-auto rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold mt-6 tracking-tight font-[Poppins] bg-gradient-to-r from-[#4A0E0E] via-[#7B1E1E] to-[#B03030] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Zercadia
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl font-medium text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed font-[Inter]"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Zercadia is a product and service-based startup founded in <strong>2025</strong> 
            by a visionary group of friends. Our purpose is to build a future where technology
            empowers ideas, simplifies businesses, and transforms the digital world.
          </motion.p>
        </section>

        {/* WHO WE ARE */}
        <section className="max-w-6xl mx-auto mt-20">
          <motion.h2
            className="text-4xl font-bold text-center font-[Poppins] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Who We Are
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg mt-4 text-center max-w-4xl mx-auto font-[Inter] leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Zercadia is powered by <strong>creativity, innovation, and impact-driven thinking.</strong> 
            We specialize in designing smart digital products, scalable services, and futuristic
            solutions that help businesses thrive in the modern world.
          </motion.p>
        </section>

        {/* MISSION & VISION — White Background */}
        <section className="mt-24 py-20 bg-white rounded-2xl shadow-md">
          <div className="max-w-6xl mx-auto px-6 space-y-24">

            {/* MISSION — Image Right (SWAPPED ORDER FOR MOBILE) */}
            <motion.div
              className="grid md:grid-cols-2 gap-10 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* ⭐ 1. Right Image (Now comes first for mobile, but remains right on desktop) */}
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="rounded-3xl overflow-hidden shadow-1xl md:order-2" // <-- Added md:order-2 to push it to the right on desktop
              >
                <img
                  src={missionImg}
                  alt="Mission"
                  className="w-full h-auto max-h-60 object-cover md:h-[380px]"
                />
              </motion.div>
              
              {/* ⭐ 2. Left Content (Now comes second for mobile, but remains left on desktop) */}
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-5 md:order-1" // <-- Added md:order-1 to keep it on the left on desktop
              >
                <h3 className="text-4xl font-extrabold font-[Poppins] text-[#7B1E1E]">
                  Our Mission
                </h3>

                <p className="text-lg text-gray-800 font-[Inter] leading-relaxed">
                  Our mission is to empower businesses by delivering cutting-edge digital
                  solutions designed for growth, creativity, and intelligent transformation.
                </p>

                <div className="space-y-3">
                  {[
                    "Deliver high-quality and scalable software solutions.",
                    "Build AI-powered & automation-ready platforms.",
                    "Develop custom future-focused digital products.",
                    "Combine creativity with intelligent engineering.",
                    "Empower businesses with innovative technology.",
                  ].map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-[#d4af37] text-xl">✔</span>
                      <p className="text-gray-800 text-lg font-[Inter]">{line}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </motion.div>

            {/* VISION — Image Left (NO CHANGE) */}
            <motion.div
              className="grid md:grid-cols-2 gap-10 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Left Image (Stays first in HTML, so it's above text on mobile and left on desktop) */}
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="rounded-2xl overflow-hidden shadow-1xl"
              >
                <img
                  src={visionImg}
                  alt="Vision"
                  className="w-full h-auto max-h-60 object-cover md:h-[380px]"
                />
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-5"
              >
                <h3 className="text-4xl font-extrabold font-[Poppins] text-[#B03030]">
                  Our Vision
                </h3>

                <p className="text-lg text-gray-800 font-[Inter] leading-relaxed">
                  Our vision is to build a world where every business can access intelligent,
                  beautifully designed technology that drives real-world impact.
                </p>

                <div className="space-y-3">
                  {[
                    "Make advanced AI accessible to all businesses.",
                    "Build smarter ecosystems powered by technology.",
                    "Deliver modern, meaningful user experiences.",
                    "Create high-performance digital platforms.",
                    "Lead innovation for the next digital era.",
                  ].map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-[#d4af37] text-xl">⭐</span>
                      <p className="text-gray-800 text-lg font-[Inter]">{line}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* BRAND VALUES */}
        <section className="max-w-6xl mx-auto mt-24">
          <motion.h2
            className="text-4xl font-bold text-center font-[Poppins] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Brand Values
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-14">

            {[
              { title: "Creativity", desc: "We design with passion and imagination.", icon: "🎨" },
              { title: "Innovation", desc: "We explore new technologies to solve real challenges.", icon: "💡" },
              { title: "Trust", desc: "We build transparency and long-term confidence.", icon: "🔐" },
              { title: "Future Focused", desc: "We build for tomorrow, not just today.", icon: "⚡" },
            ].map((value, i) => (
              <motion.div
                key={i}
                className="bg-white/60 backdrop-blur-lg px-8 py-10 rounded-xl shadow-md text-center border border-white/50 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <div className="text-5xl mx-auto mb-4 bg-gradient-to-br from-[#4A0E0E] via-[#7B1E1E] to-[#d4af37] text-transparent bg-clip-text">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#7B1E1E] font-[Poppins]">
                  {value.title}
                </h4>
                <p className="text-gray-600 mt-3 font-[Inter]">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FUTURE + AI SECTION */}
        <section className="max-w-6xl mx-auto mt-24 text-center">
          <motion.h2
            className="text-4xl font-bold font-[Poppins] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building the Future with AI + Technology
          </motion.h2>

          <motion.p
            className="mt-4 max-w-3xl text-lg text-gray-700 mx-auto font-[Inter] leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            At Zercadia, we believe the future is intelligent.
            That’s why we integrate <strong>AI, automation, machine learning, and analytics </strong>
            into modern software systems — enabling businesses to operate smarter, faster, and more efficiently.
          </motion.p>
        </section>

        {/* JOURNEY */}
        <section className="max-w-6xl mx-auto mt-24">
          <motion.h2
            className="text-4xl font-bold text-center font-[Poppins] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Journey
          </motion.h2>

          <motion.p
            className="mt-6 max-w-4xl mx-auto text-center text-gray-700 text-lg leading-relaxed font-[Inter]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            What started in 2025 as a shared dream among friends has now evolved into a
            rapidly growing technology company.
            <br /><br />
            At Zercadia, we blend <strong>AI, creativity, design, and digital engineering</strong>
            to build intelligent, future-ready products that create real business impact.
            <br /><br />
            With innovation at our core, we continue to move forward — shaping the future
            of technology one breakthrough at a time.
          </motion.p>
        </section>

      </div>
    </div>
  );
}