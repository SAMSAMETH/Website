
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../assets/logo1.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Listen for Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Handle Logout
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    {name:"Careers",path:"/careers"}
  ];

  return (
    <nav className="backdrop-blur-xl bg-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)] fixed w-full z-50 top-0 left-0 border-b border-white/40 transition-all duration-300">
  <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
    
    {/* Logo + Name */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex items-center space-x-3"
    >
      <img src={logo} alt="Zercadia Logo" className="w-18 h-20 object-contain" />
      <div>
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#4A0E0E] via-[#7B1E1E] to-[#B03030] text-transparent bg-clip-text tracking-tight leading-tight">
          Zercadia
        </h1>
        <p className="text-sm text-gray-600 italic font-medium mt-0.5">
          Evolving Innovation
        </p>
      </div>
    </motion.div>

    {/* Desktop Nav */}
    <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
      {navItems.map((item) => (
        <li key={item.name} className="relative group cursor-pointer transition-colors">
          <Link to={item.path} className="hover:text-[#7B1E1E]">
            {item.name}
          </Link>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4A0E0E] to-[#B03030] transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>

    {/* Auth Section */}
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="hidden md:flex items-center space-x-4"
    >
      {user ? (
        <div className="flex items-center space-x-3">
          <span className="text-gray-800 font-medium">
            {user.displayName || user.email.split("@")[0]}
          </span>
          <button
            onClick={handleLogout}
            className="border border-[#b18e2a] text-[#b18e2a] px-4 py-1 rounded-lg 
                       hover:bg-[#fff6db] transition duration-200 shadow-sm"
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <Link
            to="/signup"
            className="bg-gradient-to-r from-[#7a6410] via-[#b18e2a] to-[#d4af37]
                       text-white px-5 py-2 rounded-lg font-semibold shadow-md
                       hover:brightness-105 hover:shadow-[0_0_12px_rgba(212,175,55,0.35)]
                       transition-all duration-300"
          >
            Sign Up
          </Link>

          <Link
            to="/signin"
            className="border border-[#b18e2a] text-[#d4af37] px-5 py-2 rounded-lg font-semibold
                       hover:bg-gradient-to-r hover:from-[#7a6410] hover:via-[#b18e2a] hover:to-[#d4af37]
                       hover:text-white transition-all duration-300 shadow-md"
          >
            Sign In
          </Link>
        </>
      )}
    </motion.div>

    {/* Mobile Toggle */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden text-gray-700 focus:outline-none"
    >
      {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  </div>

  {/* Mobile Dropdown */}
  {isOpen && (
    <div className="md:hidden bg-white/90 backdrop-blur-xl shadow-lg border-t border-gray-200 animate-fadeIn">
      <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#7B1E1E] transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="text-center border-t border-gray-200 pt-3 pb-4">
        {user ? (
          <>
            <p className="text-gray-800 font-medium mb-2">
              👋 {user.displayName || user.email.split("@")[0]}
            </p>
            <button
              onClick={handleLogout}
              className="border border-[#b18e2a] text-[#b18e2a] px-4 py-1 rounded-lg hover:bg-[#fff6db] transition duration-200 shadow-md"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <Link
              to="/signup"
              className="bg-gradient-to-r from-[#7a6410] via-[#b18e2a] to-[#d4af37]
                         text-white px-5 py-2 rounded-lg font-semibold shadow-md
                         hover:brightness-105 transition-all duration-300 w-32 text-center"
            >
              Sign Up
            </Link>

            <Link
              to="/signin"
              className="border border-[#b18e2a] text-[#d4af37] px-5 py-2 rounded-lg font-semibold
                         hover:bg-gradient-to-r hover:from-[#7a6410] hover:via-[#b18e2a] hover:to-[#d4af37]
                         hover:text-white transition-all duration-300 shadow-md w-32 text-center"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  )}
</nav>

  );
}

