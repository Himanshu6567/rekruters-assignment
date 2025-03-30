
import { GiGraduateCap } from "react-icons/gi";
import { FaPencilAlt, FaArrowRight } from "react-icons/fa";
import { tests } from "./tests.json";

const TestCards = () => {
  return (
    <div className="z-0 px-6 py-12 mx-auto max-w-7xl">
      <div className="bg-yellow-400 w-[700px] h-[1000px] absolute  -z-20 transform rotate-45"></div>
      <div className="bg-green-400 w-[700px] h-[500px] absolute    right-0 -z-20 transform rotate-45"></div>

      <div  className="flex flex-col items-center justify-between mb-10 md:flex-row md:pr-10">
        <h2 className="text-4xl font-bold text-gray-900 md:text-left">
          Popular Tests!
        </h2>
        <button className="flex items-center px-5 py-2 text-lg font-semibold transition-all rounded-lg hover:underline">
          VIEW ALL <FaArrowRight className="ml-2" />
        </button>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tests.map((test, index) => (
          <div
            key={index}
            className="relative flex flex-row items-center p-6 space-x-4 transition-all bg-white border border-gray-200 shadow-lg rounded-2xl hover:shadow-xl hover:border-indigo-400"
          >
            <div className="flex-shrink-0">
              <img
                src={test.icon}
                alt={test.title}
                className="object-contain w-24 h-24 rounded-lg"
              />
            </div>
            <div className="flex-grow">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-gray-100 rounded-full text-gray">
                {test.category}
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                {test.title}
              </h3>
              <div className="mt-3 space-y-2 text-gray-700">
                <div className="flex items-center space-x-2">
                  <GiGraduateCap className="text-xl text-indigo-600" />
                  <span className="text-sm">Ranked Youth: </span>
                  <span className="text-lg font-bold text-gray-900">
                    {test.ranked_youth}+
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPencilAlt className="text-xl text-indigo-600" />
                  <span className="text-sm">Attempts: </span>
                  <span className="text-lg font-bold text-gray-900">
                    {test.attempts}+
                  </span>
                </div>
              </div>
              <button className="flex items-center justify-center w-full py-2 mt-4 space-x-2 font-semibold text-center text-white transition-all bg-gray-900 rounded-lg shadow-md hover:text-gray-900 hover:bg-gray-200">
                <span>Start Test!</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestCards;
