import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import emailjs from "emailjs-com";

export default function JobApply() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const jobTitles = {
    1: "Business Analyst Intern – Fresher",
    2: "Software Developer – Fresher",
  };

  const currentJobTitle = jobTitles[id];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    if (!currentJobTitle) {
      setError("Invalid job position selected.");
      setLoading(false);
      return;
    }

    try {
      const form = e.target;

      const templateParams = {
        name: form.name.value,
        email: form.email.value,
        location: form.location.value,
        degree: form.degree.value,
        skills: form.skills.value,
        about: form.about.value,
        certifications: form.certifications.value,
        remote: form.remote.value,
        position: currentJobTitle,
      };

      await emailjs.send(
        "service_b7badle",   
        "template_d6hlhy1",  
        templateParams,
        "p8Zjd2LHoDeNOX-VE"  
      );

      setSuccess("🎉 Your application was successfully sent!");
      form.reset();

    } catch (err) {
      console.error(err);
      setError("❌ Failed to send application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf2f5] via-[#f1ecff] to-[#dbe0f3] text-gray-800">
      <Navbar />

      <div className="pt-36 pb-20 max-w-3xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-center mb-6">
          Apply for{" "}
          <span className="bg-gradient-to-r from-[#806a15] via-[#b18e2a] to-[#d4af37]
            text-transparent bg-clip-text">
            {currentJobTitle || "Position"}
          </span>
        </h1>

        {/* Success Message */}
        {success && (
          <div className="bg-green-100 border border-green-500 text-green-700 p-3 mb-4 rounded-lg text-center">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-500 text-red-700 p-3 mb-4 rounded-lg text-center">
            {error}
          </div>
        )}

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#e8e2e2]">
          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* NAME */}
            <div>
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full border px-4 py-2 rounded-md focus:ring-[#b18e2a]"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full border px-4 py-2 rounded-md focus:ring-[#b18e2a]"
                required
              />
            </div>

            {/* POSITION */}
            <div>
              <label className="font-semibold">Position Applying For</label>
              <input
                type="text"
                value={currentJobTitle}
                readOnly
                name="position"
                className="w-full border px-4 py-2 rounded-md bg-gray-100 cursor-default"
              />
            </div>

            {/* LOCATION */}
            <div>
              <label className="font-semibold">Preferred Location</label>
              <input
                type="text"
                name="location"
                placeholder="e.g., Chennai"
                className="w-full border px-4 py-2 rounded-md focus:ring-[#b18e2a]"
                required
              />
            </div>

            {/* DEGREE */}
            <div>
              <label className="font-semibold">Degree</label>
              <input
                type="text"
                name="degree"
                placeholder="e.g., B.Tech / B.E"
                className="w-full border px-4 py-2 rounded-md focus:ring-[#b18e2a]"
                required
              />
            </div>

            {/* SKILLS */}
            <div>
              <label className="font-semibold">Skills</label>
              <input
                type="text"
                name="skills"
                placeholder="e.g., Python, React, SQL"
                className="w-full border px-4 py-2 rounded-md focus:ring-[#b18e2a]"
              />
            </div>

            {/* ABOUT YOURSELF */}
            <div>
              <label className="font-semibold">Tell About Yourself</label>
              <textarea
                name="about"
                rows="4"
                placeholder="Describe yourself briefly..."
                className="w-full border px-4 py-2 rounded-md focus:ring-[#b18e2a]"
              ></textarea>
            </div>

            {/* CERTIFICATIONS */}
            <div>
              <label className="font-semibold">Certifications</label>
              <input
                type="text"
                name="certifications"
                placeholder="e.g., AWS, Azure, Google Cloud"
                className="w-full border px-4 py-2 rounded-md focus:ring-[#b18e2a]"
              />
            </div>

            {/* REMOTE WORK */}
            <div>
              <label className="font-semibold">Are you willing to work remote?</label>
              <select
                name="remote"
                className="w-full border px-4 py-2 rounded-md focus:ring-[#b18e2a]"
                required
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white font-semibold rounded-lg transition-all duration-300
                ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#7a6410] via-[#b18e2a] to-[#d4af37] hover:brightness-110"
                }`}
            >
              {loading ? "Sending..." : "Submit Application"}
            </button>
          </form>
        </div>

        {/* GOLD BACK BUTTON */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-lg text-white font-semibold
            bg-gradient-to-r from-[#806a15] via-[#b18e2a] to-[#d4af37]
            hover:brightness-110 shadow-md transition"
          >
            Back to Careers
          </button>
        </div>

      </div>
    </div>
  );
}
