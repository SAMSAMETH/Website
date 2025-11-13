import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import logo from "../assets/logo1.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8e9ef] via-[#f1ecff] to-[#e3e8ff] text-gray-800">

      {/* Navbar */}
      <Navbar />

      {/* Page Content Wrapper */}
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
            Zercadia is a product and service-based startup founded in <strong>2025 </strong> 
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


        {/* MISSION & VISION */}
        <section className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-20">

          {/* Mission */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/60"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold font-[Poppins] text-[#7B1E1E]">
              Our Mission
            </h3>
            <p className="text-gray-700 mt-3 text-lg font-[Inter] leading-relaxed">
              Zercadia’s mission is to empower businesses by providing:
              <br /><br />
              ✔ High-quality software solutions  <br />
              ✔ Custom product development  <br />
              ✔ AI & automation tools  <br />
              ✔ Scalable and secure applications  
              <br /><br />
              Our goal is simple — deliver technology that inspires transformation.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/60"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold font-[Poppins] text-[#B03030]">
              Our Vision
            </h3>
            <p className="text-gray-700 mt-3 text-lg font-[Inter] leading-relaxed">
              Our vision is to make advanced technology easily accessible to every business.
              We aim to build:
              <br /><br />
              🌐 Smarter digital systems  <br />
              🤖 AI-driven platforms  <br />
              🎨 Beautiful user experiences  <br />
              ⚡ High-performance solutions  
              <br /><br />
              Zercadia aims to lead the future of digital innovation.
            </p>
          </motion.div>

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

            {/* Values with gradient icons */}
            {[
              {
                title: "Creativity",
                desc: "We design with passion and imagination.",
                icon: "🎨",
              },
              {
                title: "Innovation",
                desc: "We explore new technologies to solve real challenges.",
                icon: "💡",
              },
              {
                title: "Trust",
                desc: "We build transparency and long-term confidence.",
                icon: "🔐",
              },
              {
                title: "Future Focused",
                desc: "We build for tomorrow, not just today.",
                icon: "⚡",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                className="bg-white/60 backdrop-blur-lg px-8 py-10 rounded-xl shadow-md text-center border border-white/50 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <div
                  className="text-5xl mx-auto mb-4 bg-gradient-to-br from-[#4A0E0E] via-[#7B1E1E] to-[#d4af37] text-transparent bg-clip-text"
                >
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
            That’s why we integrate <strong>AI, automation, machine learning, and analytics</strong> 
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
            What started in 2025 as a shared dream among friends, has now grown 
            into a technology-led company that blends AI, creativity, design, and
            digital engineering — creating solutions that truly make a difference.
          </motion.p>
        </section>

      </div>
    </div>
  );
}

