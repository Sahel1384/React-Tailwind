import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/images/uideck-1.svg";
import img2 from "../../assets/images/tailgrids-2.svg";
import img3 from "../../assets/images/lineicons-3.svg";
import img4 from "../../assets/images/ayroui-4.svg";
import img5 from "../../assets/images/plainadmin-5.svg";
function Recent() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center  max-w-lg gap-3">
        <h1 className="font-bold text-2xl sm:text-4xl">Recent Articles</h1>
        <h1 className="text-center text-sm text-gray-400 sm:text-md font-semibold">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </h1>
      </div>

      <div className="flex gap-5 mt-20 flex-wrap justify-center">
        <div className="flex flex-col gap-7">
          <div className="bg-custom-bg1 w-[400px] sm:w-[600px] lg:w-[550px] bg-cover h-[278px] rounded-3xl overflow-hidden flex flex-col justify-end">
            <div className="bg-[#00000053] w-full px-10 pb-10 pt-5 h-screen flex flex-col justify-end gap-3">
              <h1 className="text-white font-bold text-xl w-[300px] hover:text-[#8b5cf6] cursor-pointer">
                Want to use Growup in your organization?
              </h1>
              <div className="flex justify-between">
                <p className="text-white font-semibold cursor-pointer">
                  Continue reading...
                </p>
                <FaArrowRight className="text-white hover:text-[#8b5cf6] cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="bg-custom-bg2 w-[400px] sm:w-[600px] lg:w-[550px] bg-cover h-[278px] rounded-3xl overflow-hidden flex flex-col justify-end">
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
        </div>
        <div>
          <div className="bg-custom-bg3 w-[400px] sm:w-[600px] lg:w-[550px] bg-cover h-auto rounded-3xl overflow-hidden flex flex-col justify-end">
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
        </div>
      </div>

      <div className="w-full px-[70px]">
        <div className="w-full h-auto bg-custom-bg px-10 mt-20 flex md:justify-between gap-3 py-10  justify-center flex-wrap items-center rounded-xl">
          <div>
            <img
              src={img1}
              className="w-28 h-20 cursor-pointer grayscale hover:grayscale-0"
              alt=""
            />
          </div>
          <div>
            <img
              src={img2}
              className="w-28 h-20 cursor-pointer grayscale hover:grayscale-0"
              alt=""
            />
          </div>
          <div>
            <img
              src={img3}
              className="w-28 h-10 cursor-pointer grayscale hover:grayscale-0"
              alt=""
            />
          </div>
          <div>
            <img
              src={img4}
              className="w-28 h-20 cursor-pointer grayscale hover:grayscale-0"
              alt=""
            />
          </div>
          <div>
            <img
              src={img5}
              className="w-28 h-20 cursor-pointer grayscale hover:grayscale-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recent;
