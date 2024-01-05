import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-52 md:pt-20">
      <div className="flex flex-col md:flex-row bg-custonBlackBg p-20 items-center justify-center">
        <div className="basis-1/2 flex flex-col items-start justify-center gap-y-4 overflow-hidden">
          <p className="text-white font-medium text-5xl py-2 font-playfair uppercase">
            Classicmart
          </p>
          <p className="text-customGold font-medium md:text-xl text-2xl">
          Welcome to Classicmart
          </p>
          <p className="py-1 text-customGray font-medium text-lg mb-3">
          It's an exquisite watch emporium where timepieces transcend mere functionality, embodying the very essence of craftsmanship and style.
          </p>
          <button onClick={()=> navigate("/allProducts") } className="uppercase w-52 py-3 px-4 bg-buttonBg font-medium font-playfair border-b-[3px] border-b-customGold text-white text-sm hover:bg-customGold transition duration-500">
            Shop Now
          </button>
          <div className="w-full h-[3px] pt-12 flex items-center justify-end">
            <motion.div
              animate={{
                scale: [1, 0, 1],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="h-[5px] bg-customGold w-full"
            />
          </div>
        </div>
        <div className="basis-1/2">
          <div className="w-full">
            <img
              src="/Bg2.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
