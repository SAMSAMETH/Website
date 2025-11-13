import { useState } from "react";
import Navbar from "./Navbar";
import { Linkedin, Instagram, Twitter } from "lucide-react"; // ✅ Importing icons
import { FaXTwitter } from "react-icons/fa6";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("⚠️ Please fill in all required fields!");
      return;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="font-sans bg-gradient-to-b from-[#faf2f5] via-[#f1ecff] to-[#dbe0f3] min-h-screen text-gray-800">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Company Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight tracking-tight">
            <span className="text-black">Get in Touch with </span>
            <span className="bg-gradient-to-r from-[#4A0E0E] via-[#7B1E1E] to-[#B03030] text-transparent bg-clip-text">
              Zercadia
            </span>
          </h2>

          <p className="text-gray-600 mb-6">
            We’d love to hear from you! Whether you have a question about our services, pricing, or anything else — our team is ready to answer all your queries.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📍 2nd Floor, Innovate Tower, OMR IT Corridor, Chennai, Tamil Nadu – 600113, India</p>
            <p>📞 +91 7338745684</p>
            <p>✉️ contact@zercadia.com</p>
            <p>🌐 www.zercadia.com</p>
          </div>

  <div className="flex flex-wrap gap-6 mt-8">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/zercadia"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 hover:scale-105 transition-transform"
  >
    <Linkedin className="w-5 h-5 text-[#0A66C2]" />
    <span className="text-[#0A66C2] font-semibold">LinkedIn</span>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/zercadia"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 hover:scale-105 transition-transform"
  >
    <Instagram className="w-5 h-5 text-[#E1306C]" />
    <span className="text-[#E1306C] font-semibold">Instagram</span>
  </a>

  {/* X (formerly Twitter) */}
  <a
    href="https://twitter.com/zercadia"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 hover:scale-105 transition-transform"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1227"
      className="w-5 h-5 text-black fill-current"
    >
      <path d="M714.163 519.284 1160.89 0H1057.5L667.137 450.887 355.268 0H0l468.539 681.865L0 1226.36h103.392l412.191-472.622L844.732 1226.36H1200L714.137 519.284h.026Zm-146.105 167.16-47.777-68.27L140.62 79.644h162.181l306.719 439.289 47.777 68.27 404.541 579.917H899.66L568.058 686.444h.001Z" />
    </svg>
    <span className="text-black font-semibold">X</span>
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/zercadia"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 hover:scale-105 transition-transform"
  >
    {/* Facebook Icon (Lucide doesn’t include official logo, so inline SVG used) */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-[#1877F2]"
    >
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.03H8.08v-2.9h2.36V9.96c0-2.33 1.38-3.62 3.5-3.62.99 0 2.04.18 2.04.18v2.25h-1.15c-1.13 0-1.48.7-1.48 1.41v1.7h2.51l-.4 2.9h-2.11v7.03c4.78-.74 8.44-4.91 8.44-9.93z" />
    </svg>
    <span className="text-[#1877F2] font-semibold">Facebook</span>
  </a>
</div>


        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Send Us a Message
          </h3>

          {submitted && (
            <p className="text-green-600 text-center font-medium mb-4">
              ✅ Thank you! Your message has been sent successfully.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject (optional)"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
                required
              ></textarea>
            </div>

            {/* 🌟 Gold Gradient Button */}
            <button
              type="submit"
              className="w-full text-white py-2 rounded-lg font-semibold shadow
                         bg-gradient-to-r from-[#806a15] via-[#b18e2a] to-[#d4af37]
                         hover:brightness-105 hover:shadow-[0_0_12px_rgba(212,175,55,0.25)]
                         transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
