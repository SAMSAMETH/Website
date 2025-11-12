
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Contact from "./components/Contact";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication */}
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />}/>

        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center min-h-screen text-gray-700">
              <h1 className="text-5xl font-bold mb-2">404</h1>
              <p className="text-lg">Page Not Found</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

