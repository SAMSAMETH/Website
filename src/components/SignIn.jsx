import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { motion } from "framer-motion";
import welcomeImg from "../assets/welcome.jpg";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("✅ Logged in successfully!");
      setTimeout(() => navigate("/"), 1000);
    } catch {
      setError("❌ Invalid email or password");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch {
      setError("❌ Google Sign-In failed. Please try again!");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) return setError("⚠️ Please enter your email to reset password");
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("📧 Password reset email sent!");
    } catch {
      setError("❌ Error sending reset email. Try again!");
    }
  };

  return (
    <div className="font-sans bg-gradient-to-b from-[#faf2f5] via-[#f1ecff] to-[#dbe0f3] min-h-screen text-gray-800 flex flex-col">
      <Navbar />

      {/* Autofill Styling */}
      <style>
        {`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px white inset !important;
          box-shadow: 0 0 0px 1000px white inset !important;
          -webkit-text-fill-color: #333 !important;
        }
      `}
      </style>

      {/* ⭐ Add spacing between navbar & sign-in container */}
      <div className="flex flex-1 items-center justify-center px-4 py-8 mt-10 md:mt-24">

        {/* ⭐ Sign-in Card */}
        <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden 
                        flex flex-col md:grid md:grid-cols-2">

          {/* ⭐ LEFT: WELCOME IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center p-4 md:p-0 h-auto md:h-full"
          >
            <img
              src={welcomeImg}
              alt="Welcome"
              className="w-full h-auto max-h-48 object-cover object-center 
                         md:w-full md:h-full md:max-h-none md:object-contain md:max-w-full"
            />
          </motion.div>

          {/* ⭐ RIGHT: FORM SECTION */}
          <div className="px-8 py-4 sm:p-7 mt-3">
            <h2 className="text-3xl font-bold text-center text-[#291f1f] mb-1">
              Welcome Back
            </h2>
            <p className="text-center text-gray-500 mb-6 text-sm">
              Sign in to continue with{" "}
              <span className="font-semibold text-[#710e0e]">Zercadia</span>
            </p>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            {success && (
              <p className="text-green-600 text-sm text-center">{success}</p>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5 mt-8"
              autoComplete="off"
            >
              {/* EMAIL */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="new-email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#87395d]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="new-password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#87395d]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-9 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm bg-gradient-to-r from-[#4A0E0E] via-[#7B1E1E] to-[#B03030] 
                             text-transparent bg-clip-text hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full text-white py-2 rounded-lg font-semibold shadow
                           bg-gradient-to-r from-[#7a6410] via-[#b18e2a] to-[#d4af37]
                           hover:brightness-105 hover:shadow-[0_0_12px_rgba(212,175,55,0.25)]
                           transition-all duration-300"
              >
                Sign In
              </button>
            </form>

            <div className="flex items-center my-3">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500 text-xs">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 border border-[#6b0d0d] text-[#0e0215] py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>

            <p className="text-center text-gray-600 mt-4 text-sm">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="bg-gradient-to-r from-[#4A0E0E] via-[#7B1E1E] to-[#B03030]
                           text-transparent bg-clip-text font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
