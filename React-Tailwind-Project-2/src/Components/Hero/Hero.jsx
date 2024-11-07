import svg1 from "../../assets/images/pii.png";
// import bg_image from "../../assets/images/background-image.jpg";
import { FaPlay } from "react-icons/fa";
function Hero() {
  return (
    <>
      <div className="flex justify-center">
        <div className="px-5 mt-20">
          <div className="lg:flex lg:justify-center lg:flex-row lg:items-center lg:gap-28 bg-custom-bg bg-no-repeat h-auto sm:min-h-[100%] w-full rounded-xl py-12 px-10 flex flex-col">
            <div className="max-w-md lg:flex lg:flex-col lg:gap-10 sm:mx-10 flex flex-col gap-10">
              <div className="lg:text-[38px] font-base tracking-[1.2px] font-sans lg:leading-[52px] md:text-4xl text-3xl">
                <h1>Tailwind CSS</h1>
                <h1>
                  Template for <span className="font-bold">Apps</span>
                </h1>
                <h1 className="font-bold">and Software</h1>
              </div>
              <p className=" text-slate-400 font-base max-w-sm">
                All in one Tailwind CSS site template for - App and Software
                sites. Comes with all essential components, clean design and
                everything you can expect from a complete app landing page.
              </p>
              <div className="flex items-center gap-10">
                <button className=" sm:block bg-[#8b5cf6] text-white py-[15px] px-[32px] font-semibold rounded-lg hover:shadow-sm hover:shadow-[#8b5cf6]">
                  Explore
                </button>
                <div className="flex items-center gap-4 font-semibold group hover:text-[#8b5cf6] cursor-pointer duration-300">
                  <FaPlay className="text-[#8b5cf6] bg-[#cec1ed5f] py-1 text-5xl px-4 rounded-full group-hover:bg-[#8b5cf6] group-hover:text-white duration-300" />
                  Watch Intro
                </div>
              </div>
            </div>
            <div className="max-w-lg h-auto mx-auto mt-5 lg:mt-0">
              <img src={svg1} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
