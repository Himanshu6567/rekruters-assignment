import React from "react";
import { FaSearch, FaTrophy } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function HeroPage() {
  return (
    <div className="flex items-center justify-center text-white min-h-[650px] bg-gradient-to-br from-blue-700 to-purple-800">
      <div className="flex flex-col items-center justify-between w-full max-w-6xl px-6 py-10 md:flex-row md:px-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-5xl font-extrabold md:text-6xl">
            Boost Your Skills
          </h2>
          <p className="mt-4 text-lg text-gray-200 md:text-xl">
            Take interactive tests, compete, and improve your ranking!
          </p>

          <div className="flex flex-col mt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-3 space-x-2 text-black transition-all duration-300 bg-white rounded-lg shadow-md hover:bg-gray-200"
            >
              <FaSearch className="text-xl" />
              <span className="text-lg font-medium">Explore Tests</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-3 space-x-2 text-white transition-all duration-300 border-2 border-white rounded-lg shadow-md hover:text-black hover:bg-white"
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
          className="mt-10 md:mt-0"
        >
          <img
            className="w-80 drop-shadow-lg md:w-96"
            src="/Assessment.svg"
            alt="Assessment"
          />
        </motion.div>
      </div>
    </div>
  );
}
