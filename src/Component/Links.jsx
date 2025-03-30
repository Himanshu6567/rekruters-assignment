import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  MdWork,
  MdOutlineMenuBook,
  MdFlag,
  MdMoney,
  MdRocket,
} from "react-icons/md";

export default function Links() {
  return (
    <footer className="px-6 py-10 text-gray-900 bg-gray-100 md:px-16">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-5">
        <div>
          <span className="">
            <img className="w-16" src="Logo-Bird.png" />
          </span>
          <p className="mt-2 text-sm text-gray-900">
            Connecting talent with opportunity. Your career journey starts with
            Rekruters.
          </p>

          <h3 className="mt-4 font-semibold text-gray-800 ">Stay Connected</h3>
          <ul className="mt-2 space-y-2 ">
            <li className="flex items-center gap-2 text-gray-800 hover:font-bold">
              <FaEnvelope className="cursor-pointer hover:text-orange-400" />{" "}
              info@rekruters.com
            </li>
            <li className="flex items-center gap-2 text-gray-800 hover:font-bold">
              <FaPhone className="cursor-pointer hover:text-orange-400" />{" "}
              +91-9958 800 906
            </li>
            <li className="flex items-center gap-2 text-gray-800 hover:font-bold">
              <FaWhatsapp className="cursor-pointer hover:text-orange-400" />{" "}
              +91-9958 800 906
            </li>
            <li className="flex items-center gap-2 text-gray-800 hover:font-bold">
              <FaMapMarkerAlt className="cursor-pointer hover:text-orange-400" />{" "}
              Noida Sector-135 - 201304
            </li>
          </ul>
          <div className="flex gap-4 mt-4 ">
            <FaFacebook className="text-gray-800 cursor-pointer hover:font-bold hover:text-gray-900" />
            <FaInstagram className="text-gray-800 cursor-pointer hover:font-bold hover:text-gray-900" />
            <FaLinkedin className="text-gray-800 cursor-pointer hover:font-bold hover:text-gray-900" />
            <FaTwitter className="text-gray-800 cursor-pointer hover:font-bold hover:text-gray-900" />
          </div>
        </div>

    
        <div>
          <h3 className="flex items-center gap-2 font-semibold ">
            <MdWork /> Our Solutions
          </h3>
          <ul className="mt-2 space-y-2 ">
            <li className="cursor-pointer hover:font-bold ">Hiring</li>
            <li className="cursor-pointer hover:font-bold ">Engagement</li>
            <li className="cursor-pointer hover:font-bold ">Assessment</li>
            <li className="cursor-pointer hover:font-bold ">
              Entrepreneurship
            </li>
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-semibold ">
            <MdOutlineMenuBook /> Mentorship
          </h3>
          <ul className="mt-2 space-y-2 ">
            <li className="cursor-pointer hover:font-bold">Explore Mentors</li>
            <li className="cursor-pointer hover:font-bold">Mentorship FAQs</li>
            <li className="cursor-pointer hover:font-bold">Mentorship Blogs</li>
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-semibold ">
            <MdFlag /> Participate
          </h3>
          <ul className="mt-2 space-y-2 ">
            <li className="cursor-pointer hover:font-bold">
              Competitions & Challenges
            </li>
            <li className="cursor-pointer hover:font-bold">Assessments</li>
            <li className="cursor-pointer hover:font-bold">Hackathons</li>
            <li className="cursor-pointer hover:font-bold">
              Workshops & Webinars
            </li>
            <li className="cursor-pointer hover:font-bold">Conferences</li>
            <li className="cursor-pointer hover:font-bold">Cultural Events</li>
            <li className="cursor-pointer hover:font-bold">
              College Festivals
            </li>
            <li className="cursor-pointer hover:font-bold">
              Refer & Earn - Quiz Program
            </li>
          </ul>
        </div>
        <div>
          <h3 className="flex items-center gap-2 font-semibold ">
            <MdMoney /> Practice
          </h3>
          <ul className="mt-2 space-y-2 ">
            <li className="cursor-pointer hover:font-bold">
              5 Days Interview Prep
            </li>
            <li className="cursor-pointer hover:font-bold">
              Coding Skills & Hiring Challenges
            </li>
          </ul>
          <h3 className="flex items-center gap-2 mt-4 font-semibold ">
            <MdRocket /> Apply
          </h3>
          <ul className="mt-2 space-y-2 ">
            <li className="cursor-pointer hover:font-bold">Internships</li>
            <li className="cursor-pointer hover:font-bold">Jobs</li>
            <li className="cursor-pointer hover:font-bold">Scholarships</li>
            <li className="cursor-pointer hover:font-bold">Advance Salary</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
