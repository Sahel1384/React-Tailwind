import {
  FaFacebookF,
  FaLinkedin,
  FaRegCalendarAlt,
  FaRegCommentAlt,
  FaRegEye,
  FaTwitter,
} from "react-icons/fa";
import img1 from "../../assets/images/image-1.png";
function Blog2() {
  return (
    <>
      <div className=" flex gap-5 mt-44 flex-wrap justify-center">
        <div className="flex flex-wrap justify-center gap-7">
          <div className="bg-custom-bg4 w-[90%] sm:w-[600px] lg:w-[900px] bg-cover h-[320px] sm:h-[420px] rounded-2xl overflow-hidden flex flex-col justify-end">
            <div className="bg-[#00000053] w-full px-10 pb-10 pt-5 h-screen flex flex-col justify-end gap-3">
              <h1 className="text-white font-bold text-xl w-full hover:text-[#8b5cf6] cursor-pointer">
                image 50+ High rated online banking mobile apps on playstore.
              </h1>
              <div className="flex flex-col items-start sm:flex-row sm:items-center justify-start gap-2 sm:gap-8">
                <div className="flex justify-between items-center gap-4">
                  <img src={img1} className="w-9" alt="" />
                  <p className="text-white font-semibold hover:text-[#8b5cf6] cursor-pointer">
                    By Moh Sahel
                  </p>
                </div>
                <div className="flex items-center justify-start gap-8">
                  <div className="text-white flex justify-between items-center gap-3">
                    <FaRegCalendarAlt />
                    <p>6 Nov 2024</p>
                  </div>
                  <div className="text-white flex justify-between items-center gap-3">
                    <FaRegCommentAlt className="mt-1" />
                    <p>50</p>
                  </div>
                  <div className="text-white flex justify-between items-center gap-3">
                    <FaRegEye className="mt-1" />
                    <p>35</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center mx-auto mt-10 gap-10 w-[85%] md:w-[65%]">
        <div className="font-semibold text-md leading-7 text-gray-400 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim
          lobortis scelerisque fermentum. Neque sodales ut etiam sit amet.
          Ligula ullamcorper malesuada proin libero nunc consequat interdum
          varius. Quam pellentesque nec nam aliquam sem et tortor consequat.
          Pellentesque adipiscing commodo elit at imperdiet.
        </div>
        <div className="font-semibold text-md leading-7 text-gray-400 ">
          Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum
          sit amet justo donec enim diam. Varius sit amet mattis vulputate enim
          nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed.
        </div>

        <div className="flex flex-col gap-4 font-semibold text-md leading-7 text-gray-400 ">
          <h1 className="font-semibold text-2xl text-black">
            Online banking mobile lists
          </h1>
          pconsectetur adipiscing elit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate
          cupidatat.
        </div>
        <div className="font-semibold text-md leading-7 text-gray-400 ">
          <ul className="list-disc leading-9 px-5">
            <li>Consectetur adipiscing elit in voluptate velit.</li>
            <li>Mattis vulputate cupidatat.</li>
            <li>Vulputate enim nulla aliquet porttitor odio pellentesque</li>
            <li>Ligula ullamcorper malesuada proin</li>
          </ul>
        </div>

        <div className="font-semibold text-md leading-7 bg-[#8b5cf6] px-2 py-8 rounded-lg text-white text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod incididunt utionals labore et dolore magna aliqua. Quis
          lobortis scelerisque fermentum, The Neque ut etiam sit amet.
        </div>
        <div className="flex flex-col gap-4 font-semibold text-md leading-7 text-gray-400">
          pconsectetur adipiscing elit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate
          cupidatat.
        </div>

        <div className="text-gray-400 flex flex-col sm:flex-row sm:justify-between gap-5 w-[100%]">
          <div className="font-semibold text-md leading-7">
            <p>Popular Tags :</p>
            <div className="flex gap-4 mt-3">
              <button className="py-2 text-sm px-4 rounded-md bg-[#f0eafd] hover:bg-[#8b5cf6] hover:text-white">
                Design
              </button>
              <button className="py-2 text-sm px-4 rounded-md bg-[#f0eafd] hover:bg-[#8b5cf6] hover:text-white">
                Development
              </button>
              <button className="py-2 text-sm px-4 rounded-md bg-[#f0eafd] hover:bg-[#8b5cf6] hover:text-white">
                Info
              </button>
            </div>
          </div>
          <div>
            <div className="font-semibold text-md leading-7">
              <p>Share this post :</p>
              <div className="flex gap-4 mt-3">
                <button className="py-2 text-sm px-3 rounded-md bg-[#f0eafd] hover:bg-[#8b5cf6] hover:text-white">
                  <FaLinkedin />
                </button>
                <button className="py-2 text-sm px-3 rounded-md bg-[#f0eafd] hover:bg-[#8b5cf6] hover:text-white">
                  <FaFacebookF />
                </button>
                <button className="py-2 text-sm px-3 rounded-md bg-[#f0eafd] hover:bg-[#8b5cf6] hover:text-white">
                  <FaTwitter />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog2;
