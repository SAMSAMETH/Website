
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

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // ✅ Handle Email/Password Sign In
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

  // ✅ Handle Google Sign-In (Popup)
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/"); // Go home after success
    } catch (err) {
      console.error(err);
      setError("❌ Google Sign-In failed. Please try again!");
    }
  };

  // ✅ Handle Forgot Password
  const handleForgotPassword = async () => {
    if (!email) {
      setError("⚠️ Please enter your email to reset password");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("📧 Password reset email sent!");
      setError("");
    } catch {
      setError("❌ Error sending reset email. Try again!");
    }
  };

  return (
      <div className="font-sans bg-gradient-to-b from-[#faf2f5] via-[#f1ecff] to-[#dbe0f3] min-h-screen text-gray-800 flex flex-col">
      <Navbar />

      <div className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="bg-white shadow-2xl rounded-2xl p-8 sm:p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-[#291f1f] mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-6 text-sm">
            Sign in to continue with{" "}
            <span className="font-semibold text-[#710e0e]">
              Ziterate Solutions
            </span>
          </p>

          {/* ✅ Messages */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && (
            <p className="text-green-600 text-sm text-center">{success}</p>
          )}

          {/* ✅ Sign In Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 mt-4"
            autoComplete="off"
          >
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#87395d]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="new-password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#87395d]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500 hover:text-[#7209b7]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm bg-gradient-to-r from-[#4A0E0E] via-[#7B1E1E] to-[#B03030] text-transparent bg-clip-text tracking-tight leading-tight hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
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

          {/* Divider */}
          <div className="flex items-center my-3">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500 text-xs sm:text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* ✅ Google Sign-In */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 border border-[#6b0d0d] text-[#0e0215] py-2 rounded-lg hover:bg-[#fffdfd] transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-4 text-sm">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="bg-gradient-to-r from-[#4A0E0E] via-[#7B1E1E] to-[#B03030] text-transparent bg-clip-text tracking-tight leading-tight font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
