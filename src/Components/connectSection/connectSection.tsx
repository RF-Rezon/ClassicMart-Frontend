const ConnectSection = () => {
  return (
    <div className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen w-full">
        <div className="relative w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="/images/big/2.jpg"
            alt="bg_img"
          />
        </div>
      </div>

      <div className="relative h-[200vh]">
        <div className="absolute top-[40vh] w-full flex justify-center">
          <div className="md:h-[400px] md:w-[52%] flex-center base-white-bg rounded-[8px] mx-4 md:mx-0 px-6 md:px-0 py-[50px] md:py-0 shadow-lg">
            <div className="flex-center flex-col text-pretty">
              <p className="t-4 text-[#7e6644] text-center w-[90%] md:w-[70%] pb-5">
                Ready to reimagine your space? Connect with us at Classicmart to
                bring your vision to life with our expertise in design and
                decoration.
              </p>
              <button className="py-[14px] px-[26px] rounded-[5px] t-2 bg-[#7e6644] base-white-text hover:bg-[#947850] cursor-pointer transition-all duration-300 opacity-95 shadow-md">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
