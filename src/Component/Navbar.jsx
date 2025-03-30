import { useEffect, useState } from "react";
import {
  FaSearch,
  FaBriefcase,
  FaGraduationCap,
  FaLightbulb,
  FaClipboardList,
  FaUserCircle,
  FaTrophy,
  FaCode,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosPeople, IoMdMore } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`text-white ${
        mobileMenuOpen ? "overflow-hidden h-screen" : ""
      }`}
    >
      <div className="flex items-center justify-between p-4 text-black bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">
          <img
            className="w-28"
            src="https://rekruters.com/Assets/Images/rekruters-logo-final-2.png"
            alt="Logo"
          />
        </h1>
        <div className="items-center hidden space-x-6 md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <FaSearch className="text-gray-500" />
          <div className="flex space-x-4">
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-red-500"
            >
              <FaBriefcase /> <span>Jobs</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-red-500"
            >
              <FaGraduationCap /> <span>Internship</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-red-500"
            >
              <FaLightbulb /> <span>Entrepreneurship</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 font-bold text-red-500 border-b-2 border-red-500"
            >
              <FaClipboardList /> <span>Assessment</span>
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-0">
          <div className="items-center hidden space-x-2 lg:flex">
            <button className="px-4 py-2 ml-3 text-white bg-green-500 rounded-xl">
              HOST
            </button>
            <button className="px-4 py-2 text-white bg-gray-800 rounded-xl">
              BUSINESS
            </button>
            <FaUserCircle size={30} className="text-gray-500 cursor-pointer" />
            <IoMdMore
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl font-bold cursor-pointer"
            />
          </div>
          <div>
            <GiHamburgerMenu
              className="ml-3 text-orange-500 cursor-pointer lg:hidden"
              size={30}
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute px-1 text-black bg-gray-100 cursor-pointer right-5 top-20 w-44">
          <span className="flex items-center px-3 border-2 border-gray-100 hover:border-orange-400">
            <IoIosPeople className="mr-3 text-2xl" /> Mentorship
          </span>
          <span className="flex items-center px-3 border-2 border-gray-100 hover:border-orange-400">
            <FaTrophy className="mr-3 text-2xl" /> Complate
          </span>
          <span className="flex items-center px-3 border-2 border-gray-100 hover:border-orange-400">
            <FaCode className="mr-3 text-2xl" /> Pratice
          </span>
        </div>
      )}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full transition-transform transform translate-x-0 bg-black pointer-events-auto bg-opacity-70">
          <button
            className="absolute text-3xl text-white top-4 right-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            &times;
          </button>
          <nav className="flex flex-col items-center space-y-6 text-2xl text-white">
            <a href="#" className="hover:text-red-500">
              Jobs
            </a>
            <a href="#" className="hover:text-red-500">
              Internship
            </a>
            <a href="#" className="hover:text-red-500">
              Entrepreneurship
            </a>
            <a href="#" className="hover:text-red-500">
              Assessment
            </a>
            <a href="#" className="hover:text-red-500">
              Mentorship
            </a>
            <a href="#" className="hover:text-red-500">
              Compete
            </a>
            <a href="#" className="hover:text-red-500">
              Practice
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
