
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate();

  // ✅ Manual Email/Password Sign-Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setPhoneError("");

    if (!/^[0-9]{10}$/.test(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name });
      navigate("/signin");
    } catch (err) {
      setError(err.message);
    }
  };

  // ✅ Google Sign-Up using Popup
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/"); // go to homepage after successful Google signup
    } catch (err) {
      console.error(err);
      setError("Google Sign-In failed. Try again!");
    }
  };

  // ✅ Handle Phone Input Validation
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
      setPhoneError("");
    } else {
      setPhoneError("Only numbers are allowed");
    }
  };

  return (
    <div className="font-sans bg-gradient-to-b from-[#faf2f5] via-[#f1ecff] to-[#dbe0f3] min-h-screen text-gray-800">
      <Navbar />

      <div className="flex items-center justify-center py-20 px-3 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-md transition-all duration-200">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
            Join{" "}
            <span className="font-semibold bg-gradient-to-r from-[#4A0E0E] via-[#7B1E1E] to-[#B03030] text-transparent bg-clip-text tracking-tight leading-tight">
              Zercadia
            </span>{" "}
            and evolve innovation.
          </p>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Sign-Up Form */}
          <form
            onSubmit={handleSignUp}
            className="space-y-5 mt-4"
            autoComplete="off"
          >
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#87395d]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter 10-digit number"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  phoneError
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-2 focus:ring-[#87395d]"
                }`}
                value={phone}
                onChange={handlePhoneChange}
                required
              />
              {phoneError && (
                <p className="text-red-500 text-xs mt-1">{phoneError}</p>
              )}
            </div>

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
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 focus:ring-[#87395d] focus:outline-none"
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            </div>

            {/* Submit Button */}
            <button
  type="submit"
  className="w-full text-white py-2 rounded-lg font-semibold shadow
             bg-gradient-to-r from-[#806a15] via-[#b18e2a] to-[#d4af37]
             hover:brightness-105 hover:shadow-[0_0_12px_rgba(212,175,55,0.25)]
             transition-all duration-300"
>
  Sign Up
</button>


            {/* Divider */}
            <div className="flex items-center my-3">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500 text-xs sm:text-sm">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google Sign-Up */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition text-sm sm:text-base"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign up using Google
            </button>

            {/* Link to Sign In */}
            <p className="text-center text-gray-600 mt-4 text-sm">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="bg-gradient-to-r from-[#4A0E0E] via-[#7B1E1E] to-[#B03030] text-transparent bg-clip-text tracking-tight leading-tight font-medium hover:underline"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
