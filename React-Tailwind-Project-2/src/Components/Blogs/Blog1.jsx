import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Blog1() {
  return (
    <>
      <div className="mt-24 flex flex-col items-center justify-center py-20 bg-custom-bg">
        <div className="flex flex-col items-center  max-w-lg gap-5">
          <h1 className="font-bold text-2xl sm:text-4xl">Blog Grid</h1>
          <h1 className="text-center text-sm text-gray-400 sm:text-md font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            ipsum, vestibulum non odio vel, posuere posuere tortor.
          </h1>
          <div>
            <ul className="flex gap-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#8b5cf6]" : "text-gray-400"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              /
              <li className="font-semibold">
                <NavLink
                  to="/blog1"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#8b5cf6]" : "text-gray-400"}`
                  }
                >
                  Blog Grid
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-20 flex-wrap justify-center">
        <div className="flex flex-wrap justify-center gap-7">
          <div className="bg-custom-bg3 w-[400px] sm:w-[600px] lg:w-[550px] bg-cover h-[360px] rounded-3xl overflow-hidden flex flex-col justify-end">
            <div className="bg-[#00000053] w-full px-10 pb-10 pt-5 h-screen flex flex-col justify-end gap-3">
              <h1 className="text-white font-bold text-xl w-[400px] hover:text-[#8b5cf6] cursor-pointer">
                image 50+ High rated online banking mobile apps on playstore.
              </h1>
              <div className="flex justify-between">
                <p className="text-white font-semibold cursor-pointer">
                  Want to use Growup in your organization? Continue reading...
                </p>
                <FaArrowRight className="text-white hover:text-[#8b5cf6] cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="bg-custom-bg4 w-[400px] sm:w-[600px] lg:w-[550px] bg-cover h-[360px] rounded-3xl overflow-hidden flex flex-col justify-end">
            <div className="bg-[#00000053] w-full px-10 pb-10 pt-5 h-screen flex flex-col justify-end gap-3">
              <h1 className="text-white font-bold text-xl w-[300px] hover:text-[#8b5cf6] cursor-pointer">
                Interested in selling your own Apps on marketplace?
              </h1>
              <div className="flex justify-between">
                <p className="text-white font-semibold cursor-pointer">
                  Continue reading...
                </p>
                <FaArrowRight className="text-white hover:text-[#8b5cf6] cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-custom-bg3 w-[400px] sm:w-[600px] lg:w-[550px] bg-cover h-[360px] rounded-3xl overflow-hidden flex flex-col justify-end">
            <div className="bg-[#00000053] w-full px-10 pb-10 pt-5 h-screen flex flex-col justify-end gap-3">
              <h1 className="text-white font-bold text-xl w-[400px] hover:text-[#8b5cf6] cursor-pointer">
                image 50+ High rated online banking mobile apps on playstore.
              </h1>
              <div className="flex justify-between">
                <p className="text-white font-semibold cursor-pointer">
                  Want to use Growup in your organization? Continue reading...
                </p>
                <FaArrowRight className="text-white hover:text-[#8b5cf6] cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="bg-custom-bg5 w-[400px] sm:w-[600px] lg:w-[550px] bg-cover h-[360px] rounded-3xl overflow-hidden flex flex-col justify-end">
            <div className="bg-[#00000053] w-full px-10 pb-10 pt-5 h-screen flex flex-col justify-end gap-3">
              <h1 className="text-white font-bold text-xl w-[300px] hover:text-[#8b5cf6] cursor-pointer">
                50+ High rated online banking mobile apps on playstore.
              </h1>
              <div className="flex justify-between">
                <p className="text-white font-semibold cursor-pointer">
                  Continue reading...
                </p>
                <FaArrowRight className="text-white hover:text-[#8b5cf6] cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-custom-bg6 w-[400px] sm:w-[600px] lg:w-[550px] bg-cover h-[360px] rounded-3xl overflow-hidden flex flex-col justify-end">
            <div className="bg-[#00000053] w-full px-10 pb-10 pt-5 h-screen flex flex-col justify-end gap-3">
              <h1 className="text-white font-bold text-xl w-[400px] hover:text-[#8b5cf6] cursor-pointer">
                image 50+ High rated online banking mobile apps on playstore.
              </h1>
              <div className="flex justify-between">
                <p className="text-white font-semibold cursor-pointer">
                  Want to use Growup in your organization? Continue reading...
                </p>
                <FaArrowRight className="text-white hover:text-[#8b5cf6] cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="bg-custom-bg7 w-[400px] sm:w-[600px] lg:w-[550px] bg-cover h-[360px] rounded-3xl overflow-hidden flex flex-col justify-end">
            <div className="bg-[#00000053] w-full px-10 pb-10 pt-5 h-screen flex flex-col justify-end gap-3">
              <h1 className="text-white font-bold text-xl w-[300px] hover:text-[#8b5cf6] cursor-pointer">
                50+ High rated online banking mobile apps on playstore.
              </h1>
              <div className="flex justify-between">
                <p className="text-white font-semibold cursor-pointer">
                  Continue reading...
                </p>
                <FaArrowRight className="text-white hover:text-[#8b5cf6] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[400px] font-semibold h-auto bg-custom-bg bg-cover px-5 mt-20 flex md:justify-between gap-1 py-3 justify-center flex-wrap items-center rounded-xl">
          <div className="bg-white p-3 rounded-md hover:bg-[#8b5cf6] hover:text-white cursor-pointer">
            <FaArrowLeft />
          </div>
          <div className="bg-white py-2 px-4 rounded-md hover:bg-[#8b5cf6] hover:text-white cursor-pointer">
            1
          </div>
          <div className="bg-white py-2 px-4 rounded-md hover:bg-[#8b5cf6] hover:text-white cursor-pointer">
            ...
          </div>
          <div className="bg-white py-2 px-4 rounded-md hover:bg-[#8b5cf6] hover:text-white cursor-pointer">
            4
          </div>
          <div className="bg-white py-2 px-4 rounded-md hover:bg-[#8b5cf6] hover:text-white cursor-pointer">
            5
          </div>
          <div className="bg-white py-2 px-4 rounded-md hover:bg-[#8b5cf6] hover:text-white cursor-pointer">
            6
          </div>
          <div className="bg-white p-3 rounded-md hover:bg-[#8b5cf6] hover:text-white cursor-pointer">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog1;
