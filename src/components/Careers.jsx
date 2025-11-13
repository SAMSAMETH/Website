import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Careers() {
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      title: "Business Analyst Intern – Fresher",
      location: "Chennai",
      degree: "Preferred: B.Tech / B.E",
      experience: "0 - 1 Year",
    },
    {
      id: 2,
      title: "Software Developer – Fresher",
      location: "Chennai",
      degree: "Preferred: B.Tech / B.E",
      experience: "0 - 1 Year",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8e9ef] via-[#f1ecff] to-[#e3e8ff] text-gray-800">
      <Navbar />

      <div className="pt-36 pb-16 px-6 max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          <span className="text-black">Current </span>
          <span
            className="bg-gradient-to-r from-[#806a15] via-[#b18e2a] to-[#d4af37]
            text-transparent bg-clip-text"
          >
            Openings
          </span>
        </h1>

        <div className="grid gap-8 mb-10">
          {jobs.map((job) => (
            <Link
              key={job.id}
              to={`/careers/${job.id}`}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl 
              transition-all duration-300 border-l-4 border-[#b18e2a]"
            >
              <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600">📍 Location: {job.location}</p>
              <p className="text-gray-600">🎓 {job.degree}</p>
              <p className="text-gray-600">💼 Experience: {job.experience}</p>

              <button
                className="mt-4 bg-gradient-to-r from-[#7a6410] via-[#b18e2a] to-[#d4af37]
                text-white px-5 py-2 rounded-md font-semibold"
              >
                View & Apply
              </button>
            </Link>
          ))}
        </div>

        {/* ⭐ BACK BUTTON AT BOTTOM */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 rounded-lg text-white font-semibold 
            bg-gradient-to-r from-[#806a15] via-[#b18e2a] to-[#d4af37]
            hover:brightness-110 shadow-md transition"
          >
           Back
          </button>
        </div>

      </div>
    </div>
  );
}

