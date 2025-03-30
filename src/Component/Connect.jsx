import { FaSearch, FaUserPlus, FaCheckCircle } from "react-icons/fa";

export default function Connect() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-10 bg-gray-900">
      <div className="max-w-3xl p-10 text-center bg-white shadow-2xl rounded-3xl">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
          Start Your Assessment Journey Today
        </h1>
        <p className="mb-8 text-lg text-gray-700">
          Discover your strengths, improve your skills, and impress employers
          with verified credentials.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all bg-blue-500 rounded-full shadow-lg hover:scale-105 hover:bg-blue-600">
            <FaSearch className="text-white" /> Browse Tests
          </button>
          <button className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all bg-red-500 rounded-full shadow-lg hover:scale-105 hover:bg-red-600">
            <FaUserPlus className="text-white" /> Create Account
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-3">
          {[
            "Verified Certificates",
            "Global Recognition",
            "Skill Improvement",
          ].map((text, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 transition-all bg-yellow-200 shadow-lg rounded-xl hover:scale-105 hover:bg-yellow-500"
            >
              <FaCheckCircle className="mb-2 text-4xl text-white" />
              <p className="text-sm text-gray-900">{text}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-700">
          Join over{" "}
          <span className="font-semibold text-gray-900">2 million users</span>{" "}
          who have taken our assessments
        </p>
      </div>
    </div>
  );
}
