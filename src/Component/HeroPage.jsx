import React from "react";
import { FaSearch, FaTrophy } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function HeroPage() {
  return (
    <div className="flex  items-center justify-center min-h-screen bg-[#1e3a8a] text-white px-6">
      <div className="flex z-0 flex-col items-center justify-between w-full max-w-6xl py-16 md:flex-row md:px-20 bg-[#252f3f] rounded-lg shadow-lg">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-5xl font-extrabold md:text-6xl text-[#facc15] drop-shadow-lg">
            Boost Your Skills
          </h2>
          <p className="max-w-lg mt-4 text-lg text-gray-300 md:text-xl">
            Take interactive tests, compete, and improve your ranking!
          </p>

          <div className="flex flex-col mt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-3 space-x-2 bg-[#facc15] text-black rounded-xl shadow-xl hover:bg-[#eab308] transition-all"
            >
              <FaSearch className="text-xl" />
              <span className="text-lg font-medium">Explore Tests</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-3 space-x-2 border-2 border-white text-white rounded-xl shadow-xl bg-[#374151] hover:bg-[#4b5563] transition-all"
            >
              <FaTrophy className="text-xl" />
              <span className="text-lg font-medium">View Rankings</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-0"
        >
          <img
            className="w-80 md:w-96 drop-shadow-2xl"
            src="/Assessment.svg"
            alt="Assessment"
          />
        </motion.div>
      </div>
    </div>
  );
}
