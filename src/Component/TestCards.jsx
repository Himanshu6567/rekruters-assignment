import { GiGraduateCap } from "react-icons/gi";
import { FaPencilAlt, FaLongArrowAltRight } from "react-icons/fa";
import { tests } from "./tests.json";


const TestCards = () => {
  return (
    <div className="px-6 py-12 mx-auto max-w-7xl">
      <div className="flex flex-col items-center justify-between mb-10 md:flex-row md:pr-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 md:text-left">
          Most Popular Tests
        </h2>
        <span className="flex items-center justify-center px-4 py-2 font-bold text-orange-900 transition-all cursor-pointer hover:text-orange-600">
          VIEW ALL <FaLongArrowAltRight className="ml-2 text-lg" />
        </span>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {tests.map((test, index) => (
          <div
            key={index}
            className="relative flex flex-col p-6 py-4 transition-all transform bg-white border border-gray-200 shadow-md rounded-xl hover:-translate-y-2 h-96 hover:shadow-xl"
          >
            <div className="absolute px-3 py-1 text-xs font-semibold text-white bg-orange-500 rounded-lg top-3 right-3">
              {test.category}
            </div>
            <div className="flex justify-center">
              <img
                src={test.icon}
                alt={test.title}
                className="object-cover w-20 h-20 "
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-center text-gray-800">
              {test.title}
            </h3>
            <p className="mt-2 text-sm text-center text-gray-600">
              {test.category}
            </p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700">
                <GiGraduateCap className="text-lg text-blue-600" /> Ranked
                Youth:
                <span className="font-bold text-blue-600">
                  {test.ranked_youth}+
                </span>
              </p>
              <p className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700">
                <FaPencilAlt className="text-lg text-gray-600" /> Attempts:
                <span className="font-semibold">{test.attempts}+</span>
              </p>
            </div>
            
            <div className="wrapper">
              <div className="link_wrapper">
                <a  id="a" href="#">Start Test!</a>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 268.832 268.832"
                  >
                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                  </svg>
                </div>
              </div>
            </div>

         
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestCards;
