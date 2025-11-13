import Navbar from "./Navbar";
import BlurImage from "./BlurImage";

// Images
import Ecommerce from "../assets/Ecommerce.jpg";
import Billing from "../assets/Billing.jpg";
import Booking from "../assets/Bookings.jpg";
import Payment from "../assets/payment.jpg";
import ERP from "../assets/ERP.jpg";
import RAG from "../assets/RAG.jpg";

export default function Products() {
  const products = [
    {
      title: "E-commerce Website ",
      description:
        "A complete online store solution for small and medium retailers with product listings, cart, and payment gateway integration.",
      image: Ecommerce,
      link: "#",
    },
    {
      title: "Billing Software ",
      description:
        "An intuitive POS and billing system for restaurants, supporting order management, invoice generation, and sales reports.",
      image: Billing,
      link: "#",
    },
    {
      title: "Appointment Booking Software ",
      description:
        "A seamless scheduling and appointment management platform for clinics and hospitals with patient reminders and analytics.",
      image: Booking,
      special: true,
      link: "#",
    },
    {
      title: "Online Payment Portal ",
      description:
        "A secure online payment platform for educational institutions, enabling easy fee payments, receipts, and admin dashboards.",
      image: Payment,
      link: "#",
    },
    {
      title: "Smart ERP ",
      description:
        "An integrated ERP system designed for retail and wholesale businesses to manage inventory, billing, accounting, and customer data seamlessly.",
      image: ERP,
      link: "#",
    },
    {
      title: "AI RAG Chat Assistant ",
      description:
       " AI-powered chat assistant with Retrieval-Augmented Generation that provides instant, context-aware replies for business automation",
      image: RAG,
      link: "#",
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-[#faf2f5] via-[#f1ecff] to-[#dbe0f3] min-h-screen text-gray-800">
      <Navbar />

      {/* Header */}
      <div className="text-center pt-32 pb-16 px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
          <span className="text-black">Our </span>
          <span className="bg-gradient-to-r from-[#806a15] via-[#b18e2a] to-[#d4af37] text-transparent bg-clip-text">
            Projects & Products
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore some of our successful projects — built for diverse industries
          using cutting-edge technologies and modern design principles.
        </p>
      </div>

      {/* Product Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 pb-20">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden
                       transition-transform duration-300 border-t-4 border-[#b18e2a] hover:scale-105"
          >
            {/* Blur-up Image */}
            <div className="w-full h-56 overflow-hidden">
              <BlurImage
                src={product.image}
                alt={product.title}
                className={`w-full h-full ${
                  product.special ? "object-contain" : "object-cover"
                }`}
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm">{product.description}</p>

              {/* ⭐ NEW BUTTON ADDED HERE */}
              <a
                href={product.link}
                className="mt-5 inline-block w-full py-2 text-center text-white font-semibold rounded-lg
                bg-gradient-to-r from-[#7a6410] via-[#b18e2a] to-[#d4af37]
                hover:brightness-110 hover:shadow-[0_0_12px_rgba(212,175,55,0.35)]
                transition-all duration-300"
              >
                Click to View Work
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
