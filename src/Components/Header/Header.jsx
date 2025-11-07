"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen w-full relative flex-center overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video/video.mp4"
          autoPlay
          muted
          loop
        />

        <div className="relative z-10 w-full h-full">
          <div className="w-[60%] text-left pb-6 mx-2 px-12 ml-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="t-header text-white"
            >
              Timeless{" "}
              <span className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.3, ease: "easeIn" }}
                  className="relative z-10 px-2"
                >
                  Comfort
                </motion.span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.3, ease: "easeIn" }}
                  className="absolute inset-0 bg-customGold origin-left"
                  style={{ zIndex: 0 }}
                />
              </span>{" "}
              <span className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.7, ease: "easeIn" }}
                  className="relative z-10 px-2 mr-2"
                >
                  & Endless{" "}
                </motion.span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.7, ease: "easeIn" }}
                  className="absolute inset-0 bg-customGold origin-left"
                  style={{ zIndex: 0 }}
                />
              </span>
              Luxury
            </motion.p>
          </div>
          <div className="md:space-x-8 space-y-2 md:space-y-0 flex flex-col md:flex-row items-start justify-start w-[90%] md:w-full px-12 pt-4 ml-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="py-[12px] px-[26px] rounded-[5px] cursor-pointer t-2 text-[#2c2418] base-white-bg w-full md:w-[129px]"
            >
              Our Vision
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="py-[12px] px-[26px] rounded-[5px] cursor-pointer text-[14px] md:text-[16px] font-[600] leading-[21px] bg-transparent text-white hover:bg-white hover:text-[#2c2418] border border-white w-full md:w-[185px] hover:transition-all hover:duration-300"
            >
              Explore Products
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
