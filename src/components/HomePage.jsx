import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

// IMAGES
import EcommerceImg from "../assets/Ecomm.jpg";
import ErpImg from "../assets/eerp.jpg";
import CrmImg from "../assets/crm.jpg";
import AiImg from "../assets/AIH.jpg";
import PaymentImg from "../assets/onlinepay.jpg";

export default function HomePage() {
  return (
    <div className="font-sans bg-gradient-to-b from-[#faf2f5] via-[#f1ecff] to-[#dbe0f3] text-gray-800">
      <Navbar />

      {/* ===================== HERO SECTION ===================== */}
      <section className="pt-40 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
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

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Delivering intelligent, futuristic solutions that inspire innovation and transform
          businesses worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/signup"
            className="bg-gradient-to-r from-[#7a6410] via-[#b18e2a] to-[#d4af37]
             text-white px-8 py-3 rounded-lg font-semibold shadow-md
             hover:brightness-105 hover:shadow-[0_0_14px_rgba(212,175,55,0.25)]
             transition-all duration-300"
          >
            Get Started
          </Link>

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

      {/* ===================== WHY BUSINESS NEED SOFTWARE ===================== */}
      <section className="relative py-24 px-6 text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f0f0f, #1a0f19, #110f2b)",
        }}
      >
        {/* Glow Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-72 h-72 bg-pink-600/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why Businesses Need{" "}
            <span className="text-[#d4af37]">Software</span>
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mb-14">
            Modern businesses rely on digital systems to scale faster, automate processes,
            reduce human effort, and deliver unforgettable customer experiences.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { img: EcommerceImg, title: "E-Commerce Platforms", desc: "Seamless online storefronts, payments & global reach." },
              { img: ErpImg, title: "ERP Solutions", desc: "Billing, HR, inventory & operations unified into one system." },
              { img: CrmImg, title: "CRM Systems", desc: "Lead management, customer tracking & automated follow-ups." },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl 
                border border-white/20 hover:scale-105 transition-transform"
              >
                <img src={card.img} className="w-20 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-300">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

     {/* AI IMPACT SECTION */}
<section className="py-24 px-6 bg-white text-center">
  <h2 className="text-4xl font-bold mb-6">How AI Creates Business Impact</h2>

  <p className="text-gray-600 max-w-3xl mx-auto mb-14">
    AI automates workflows, reduces workload, increases profits, and improves decision-making — 
    making modern businesses smarter and faster.
  </p>

  {/* AI Cards */}
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">

    {/* AI Agents */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-8 bg-white shadow-lg rounded-2xl border hover:shadow-2xl transition-all"
    >
      <div className="text-5xl mb-3">🤖</div>
      <h3 className="text-xl font-bold mb-2">AI Agents</h3>
      <p className="text-gray-600">
        Automate conversations, handle customers, and execute tasks on behalf of your business.
      </p>
    </motion.div>

    {/* Automation */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      viewport={{ once: true }}
      className="p-8 bg-white shadow-lg rounded-2xl border hover:shadow-2xl transition-all"
    >
      <div className="text-5xl mb-3">⚙️</div>
      <h3 className="text-xl font-bold mb-2">Automation</h3>
      <p className="text-gray-600">
        Remove repetitive manual tasks using automated flows, triggers and AI decision-making.
      </p>
    </motion.div>

    {/* Intelligence */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      viewport={{ once: true }}
      className="p-8 bg-white shadow-lg rounded-2xl border hover:shadow-2xl transition-all"
    >
      <div className="text-5xl mb-3">📊</div>
      <h3 className="text-xl font-bold mb-2">Intelligent Insights</h3>
      <p className="text-gray-600">
        AI identifies trends, predicts outcomes, and gives decision-ready analytics.
      </p>
    </motion.div>

  </div>
</section>

      {/* ===================== PAYMENT ===================== */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#4A0E0E] via-[#7B1E1E] to-[#B03030] text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Secure Payment Integration
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="text-gray-200 max-w-3xl mx-auto mb-14"
        >
          Integrate UPI, Cards, Netbanking, Razorpay, Stripe, PayPal and automated payment solutions.
        </motion.p>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src={PaymentImg}
          className="w-48 mx-auto opacity-90"
        />
      </section>

      {/* ===================== QUOTE ===================== */}
      <section className="py-20 px-6 text-center bg-[#111] text-white">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto leading-relaxed"
        >
          “Great software isn’t just built — it’s engineered to transform ideas into powerful experiences.”
        </motion.h2>
      </section>

      {/* ===================== BILLING SOFTWARE ===================== */}
      <section className="py-24 px-6 bg-white text-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#7B1E1E] via-[#B03030] to-[#4A0E0E] text-transparent bg-clip-text"
        >
          Why Billing Software is Important for Shops
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-lg leading-relaxed"
        >
          <p className="mb-6">
            Long ago in a small electronics store, <strong>Raman</strong> used a notebook for billing.
            One Sunday, he miscalculated an offer and lost <strong>₹12,000</strong>.
          </p>

          <p className="text-xl italic font-semibold mb-6 text-[#7B1E1E]">
            “Shops don’t lose money because of customers… they lose money because of poor management.”
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>✔ Automated GST billing</li>
            <li>✔ Real-time stock tracking</li>
            <li>✔ Daily & monthly reports</li>
            <li>✔ Error-free calculations</li>
            <li>✔ Faster checkout</li>
          </ul>
        </motion.div>
      </section>
{/* WHY APPOINTMENT BOOKING SOFTWARE */}
<section
  className="py-24 px-6 text-gray-200 relative overflow-hidden"
  style={{
    background:
      "linear-gradient(140deg, #0a0f3b, #1d184d, #281f5f, #20104a)",
  }}
>
  {/* Floating Glow Orbs */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute w-80 h-80 bg-indigo-600/30 blur-3xl rounded-full top-20 left-20 animate-ping"></div>
    <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full bottom-10 right-24 animate-pulse"></div>
  </div>

  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative text-4xl font-bold text-center mb-10 
      bg-gradient-to-r from-[#90b4ff] via-[#c7d0ff] to-[#ffffff] 
      text-transparent bg-clip-text"
  >
    Why Appointment Booking Software Helps Businesses
  </motion.h2>

  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative max-w-5xl mx-auto text-lg leading-relaxed"
  >
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      Dr. Priya runs a dermatology clinic. Every morning she faces <strong>double bookings,
      cancellations, and 20+ calls</strong>. Her stress levels were always high.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className="mb-4 text-[#dbe3ff]"
    >
      After switching to digital booking:
    </motion.p>

    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 },
        },
      }}
      className="list-disc pl-6 space-y-4"
    >
      {[
        "✔ Patients book anytime — even midnight",
        "✔ Automatic reminders reduce no-show problems",
        "✔ No more double-booking mistakes",
        "✔ Daily agenda prepared automatically",
      ].map((item, i) => (
        <motion.li
          key={i}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-lg"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-6"
    >
      And it’s not just doctors — <strong>salons, consultants, trainers, lawyers,
      business owners, freelancers</strong> all grow faster with automated scheduling.
    </motion.p>
  </motion.div>
</section>


      {/* ===================== FAQ ===================== */}
      <section className="py-24 px-6 bg-white text-gray-900">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#806a15] via-[#b18e2a] to-[#d4af37] text-transparent bg-clip-text"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            ["Do you create custom software?", "Yes, fully tailored solutions."],
            ["Can AI help my business?", "Yes — automation saves time & increases efficiency."],
            ["How long does development take?", "Simple apps 3–6 days, big systems 1–3 weeks."],
            ["Do you provide support after launch?", "Yes, ongoing maintenance & updates."],
          ].map(([q, a], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-[#fafafa] rounded-xl shadow border"
            >
              <h3 className="font-semibold text-lg">{q}</h3>
              <p className="text-gray-600 mt-2">{a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="py-6 bg-black text-center text-gray-400">
        © {new Date().getFullYear()} Zercadia • All Rights Reserved.
      </footer>
    </div>
  );
}
