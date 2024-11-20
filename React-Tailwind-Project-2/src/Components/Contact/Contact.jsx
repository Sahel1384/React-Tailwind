function Contact() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center  max-w-lg gap-3">
        <h1 className="font-bold text-2xl sm:text-4xl dark:text-white">
          Need Any Help?
        </h1>
        <h1 className="text-center text-sm text-gray-400 sm:text-md font-semibold">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </h1>
      </div>

      <div className="mt-20 border border-blue-100 w-[80%] md:w-[700px] px-10 py-20 rounded-2xl">
        <div className="flex flex-col md:flex-row gap-10 dark:text-white">
          <div>
            <div>
              <p className="font-semibold">First Name</p>
              <input
                type="text"
                placeholder="Enter your first name"
                className="border border-blue-100 rounded-lg py-3 px-4 text-sm w-72 mt-2 focus:border-purple-500 outline-none"
              />
            </div>
            <div className="mt-5">
              <p className="font-semibold">Business email</p>
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-blue-100 rounded-lg py-3 px-4 text-sm w-72 mt-2 focus:border-purple-500 outline-none"
              />
            </div>
          </div>
          <div>
            <div>
              <p className="font-semibold">Last Name</p>
              <input
                type="text"
                placeholder="Enter your last name"
                className="border border-blue-100 rounded-lg py-3 px-4 text-sm w-72 mt-2 focus:border-purple-500 outline-none"
              />
            </div>
            <div className="mt-5">
              <p className="font-semibold">Phone number</p>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="border border-blue-100 rounded-lg py-3 px-4 text-sm w-72 mt-2 focus:border-purple-500 outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mt-5">
            <p className="font-semibold">What are you looking for?</p>
            <textarea
              placeholder="Enter your message"
              className="border border-blue-100 rounded-lg py-3 px-4 text-sm w-full h-32 mt-2 focus:border-purple-500 outline-none"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className=" sm:block bg-[#8b5cf6] text-white py-[15px] px-[35px] font-semibold rounded-lg hover:shadow-sm hover:shadow-[#8b5cf6]">
            Submit Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
