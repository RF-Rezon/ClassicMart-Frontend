"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="min-h-screen w-full flex-center bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/big/hero.jpg')" }}
      >
        <div className="w-screen h-screen">
          <div className="relative z-10 w-full h-full flex-center flex-col">
            <div className="md:max-w-4xl max-w-full md:mx-auto text-center pb-6 mx-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="t-header text-white"
              >
                Timeless Comfort & Endless Luxury
              </motion.p>
            </div>
            <div className="md:space-x-3 space-y-2 md:space-y-0 flex flex-col md:flex-row items-center justify-center w-[90%] md:w-full">
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
      </div>
    </>
  );
};

export default Header;
