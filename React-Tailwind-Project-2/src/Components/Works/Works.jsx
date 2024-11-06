import { FaDownload, FaHandHoldingUsd, FaPersonBooth } from "react-icons/fa";
import googlePlay from "../../assets/images/Screenshot 2024-11-06 012712.png";
import playStore from "../../assets/images/Screenshot 2024-11-06 012739.png";
import bg1 from "../../assets/images/cta-image-1.svg";
import bg2 from "../../assets/images/cta-image-2.svg";

function Works() {
  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center  max-w-lg gap-3">
          <h1 className="font-bold text-2xl sm:text-4xl">How it Works?</h1>
          <h1 className="text-center text-sm text-gray-400 sm:text-md font-semibold">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </h1>
        </div>
        <div className="mt-10 flex gap-5 flex-wrap justify-center">
          <div className="flex flex-col justify-center group items-center h-auto gap-4 w-[400px] bg-white py-8 px-12 rounded-xl">
            <div className="flex items-center gap-1">
              <FaDownload className="text-[#8b5cf6] text-3xl md:text-5xl py-1 px-1 bg-[#ccbfea56] rounded-xl group-hover:bg-[#8b5cf6] group-hover:text-white" />
            </div>
            <div className="flex items-center text-2xl font-bold">
              <h1>Download for Free</h1>
            </div>
            <div className="text-gray-500 lg:max-w-[400px] text-center font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non
              ipsum.
            </div>
          </div>
          <div className="flex flex-col justify-center group items-center h-auto gap-4 w-[400px] bg-white py-8 px-12 rounded-xl">
            <div className="flex items-center gap-1">
              <FaPersonBooth className="text-[#8b5cf6] text-3xl md:text-5xl py-1 px-1 bg-[#ccbfea56] rounded-xl group-hover:bg-[#8b5cf6] group-hover:text-white" />
            </div>
            <div className="flex items-center text-2xl font-bold">
              <h1>Open an Account</h1>
            </div>
            <div className="text-gray-500 lg:max-w-[400px] text-center font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non
              ipsum.
            </div>
          </div>
          <div className="flex flex-col justify-center group items-center h-auto gap-4 w-[400px] bg-white py-8 px-12 rounded-xl">
            <div className="flex items-center gap-1">
              <FaHandHoldingUsd className="text-[#8b5cf6] text-3xl md:text-5xl py-1 px-1 bg-[#ccbfea56] rounded-xl group-hover:bg-[#8b5cf6] group-hover:text-white" />
            </div>
            <div className="flex items-center text-2xl font-bold">
              <h1>Enjoy our App</h1>
            </div>
            <div className="text-gray-500 lg:max-w-[400px] text-center font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non
              ipsum.
            </div>
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className="mt-32 flex flex-col md:flex md:flex-row bg-custom-bg justify-center rounded-xl lg:gap-32 pt-10 px-28 h-auto">
          <div className="max-w-[480px] flex flex-col gap-3">
            <p className="text-[#8b5cf6] font-semibold">Download Now!</p>
            <h1 className="font-semibold text-4xl">
              Download our mobile application.
            </h1>
            <h2 className="text-gray-500 text-lg">
              Download Appwind mobile banking app for IOS & Android to manage
              your online money.
            </h2>
            <div className="flex items-center gap-3 mt-10 text-[#8b5cf6] font-semibold cursor-pointer">
              <div className="w-40 h-auto rounded-lg overflow-hidden">
                <img src={googlePlay} alt="" />
              </div>
              <div className="w-40 h-auto rounded-lg overflow-hidden">
                <img src={playStore} alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:mt-20 mt-10">
            <div className="z-10">
              <img src={bg1} alt="" />
            </div>
            <div className="md:mt-20 mt-32">
              <img src={bg2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
