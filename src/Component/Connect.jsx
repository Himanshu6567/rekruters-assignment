
import { FaSearch, FaUserPlus, FaCheckCircle } from "react-icons/fa";

export default function Connect() {
  return (
    <div className="flex items-center justify-center px-4 py-4 text-white bg-gradient-to-r from-blue-800 to-red-600">
      <div className="max-w-3xl p-8 text-center bg-white shadow-xl bg-opacity-10 rounded-2xl">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">Start Your Assessment Journey Today</h1>
        <p className="mb-6 text-lg text-gray-200">
          Discover your strengths, improve your skills, and impress employers with verified credentials.
        </p>
        
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="flex items-center gap-2 px-6 py-3 font-semibold text-black transition-transform transform bg-white rounded-full shadow-lg hover:scale-105 hover:bg-gray-200">
            <FaSearch /> Browse Tests
          </button>
          <button className="flex items-center gap-2 px-6 py-3 font-semibold transition-all border-2 border-white rounded-full hover:bg-white hover:text-black hover:scale-105">
            <FaUserPlus /> Create Account
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3">
          <div className="flex flex-col items-center p-4 bg-white shadow-lg bg-opacity-20 rounded-xl">
            <FaCheckCircle className="mb-2 text-3xl text-green-400" />
            <p className="text-sm">Verified Certificates</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg bg-opacity-20 rounded-xl">
            <FaCheckCircle className="mb-2 text-3xl text-green-400" />
            <p className="text-sm">Global Recognition</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg bg-opacity-20 rounded-xl">
            <FaCheckCircle className="mb-2 text-3xl text-green-400" />
            <p className="text-sm">Skill Improvement</p>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-300">Join over 2 million users who have taken our assessments</p>
      </div>
    </div>
  );
}
