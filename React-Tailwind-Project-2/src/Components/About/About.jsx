import { FaArrowRight } from "react-icons/fa";
import image2 from "../../assets/images/about-image-1.svg";
import image3 from "../../assets/images/about-image-2.svg";
function About() {
  return (
    <>
      <div className="mt-32 flex flex-col justify-center items-start px-20 md:px-15 gap-10 md:flex md:flex-row md:justify-center md:items-center">
        <div className="max-w-3xl">
          <img src={image2} alt="" />
        </div>
        <div className="max-w-[480px] flex flex-col gap-5">
          <p className="text-[#8b5cf6] font-semibold">About Application</p>
          <h1 className="font-semibold text-4xl dark:text-white">
            Instant Payment Transfer SavesYou Time
          </h1>
          <h2 className="text-gray-500 text-lg">
            Schedule your posts for times when your audience is most active.
            Choose from our best-time predictions, or create your own publishing
            schedule.
          </h2>
          <div className="flex items-center gap-3 mt-10 text-[#8b5cf6] font-semibold cursor-pointer">
            <p className="hover:underline hover:underline-1">
              Know More About App
            </p>
            <span>
              <FaArrowRight className="mt-1" />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col-reverse justify-center items-start px-20 md:px-15 gap-10 md:flex md:flex-row md:justify-center md:items-center">
        <div className="max-w-[480px] flex flex-col gap-5">
          <p className="text-[#8b5cf6] font-semibold">Easy to Manage Appwind</p>
          <h1 className="font-semibold text-4xl dark:text-white">
            Manage your online wallet with Appwind.
          </h1>
          <h2 className="text-gray-500 text-lg">
            Schedule your posts for times when your audience is most active.
            Choose from our best-time predictions, or create your own publishing
            schedule.
          </h2>
          <div className="flex items-center gap-3 mt-10 text-[#8b5cf6] font-semibold cursor-pointer">
            <p className="hover:underline hover:underline-1">
              Know More About App
            </p>
            <span>
              <FaArrowRight className="mt-1" />
            </span>
          </div>
        </div>
        <div className="max-w-3xl">
          <img src={image3} alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
