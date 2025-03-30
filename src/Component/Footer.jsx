import { FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-8 pb-4 text-white bg-[#123458]  ">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="pb-6 border-b border-gray-700">
          <nav className="grid grid-cols-1 gap-4 text-sm text-gray-300 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
            <a href="#" className="hover:text-white">About Us</a>
            <a href="#" className="hover:text-white">Contact Us</a>
            <a href="#" className="flex items-center gap-2 hover:text-white">
              Career
              <span className="px-2 py-1 text-xs text-white bg-green-500 rounded-full">
                We're hiring
              </span>
            </a>
            <a href="#" className="hover:text-white">Life at Rekruters</a>
            <a href="#" className="hover:text-white">Clientele</a>
            <a href="#" className="hover:text-white">Partner With Us</a>
            <a href="#" className="hover:text-white">Testimonials</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between mt-6">
          <div>
            <h3 className="text-lg font-semibold">Download Our App</h3>
            <p className="text-sm text-gray-400">
              Get access to exclusive opportunities and jobs on the go
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 text-white border-white border bg-gray-800 rounded-lg hover:bg-[#123458]"
            >
              <FaGooglePlay className="text-lg" /> Google Play
            </a>
            <a
              href="#"
              className="flex items-center gap-2 p-2 text-white bg-gray-800 border border-white rounded-lg hover:bg-transparent bg-px-4 hover:bg-gray-700"
            >
              <FaApple className="text-lg" /> App Store
            </a>
          </div>
        </div>

        <div className="pt-4 mt-6 text-sm text-center text-gray-500 border-t border-gray-700">
          &copy; Copyrights 2024-2025,
          <span className="font-semibold text-gray-400"> Rekruters</span> All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;