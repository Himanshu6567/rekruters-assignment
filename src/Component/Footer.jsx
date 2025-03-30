import { FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-10">
      <div className="px-6 mx-auto max-w-7xl md:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-6 pb-6 text-sm text-gray-400 border-b border-gray-700 md:grid-cols-3 lg:grid-cols-4">
          <a href="#" className="transition hover:text-gray-100">
            About Us
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Contact Us
          </a>
          <a
            href="#"
            className="flex items-center gap-2 transition hover:text-gray-100"
          >
            Career
            <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
              We're hiring
            </span>
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Life at Rekruters
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Clientele
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Partner With Us
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Testimonials
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Terms & Conditions
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Privacy Policy
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 mt-8 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">
              Download Our App
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Get access to exclusive opportunities and jobs on the go.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 text-white transition bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700"
            >
              <FaGooglePlay className="text-lg" /> Google Play
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 text-white transition bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700"
            >
              <FaApple className="text-lg" /> App Store
            </a>
          </div>
        </div>

        <div className="pt-6 mt-6 text-sm text-center text-gray-500 border-t border-gray-700">
          &copy; {new Date().getFullYear()} Rekruters. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
