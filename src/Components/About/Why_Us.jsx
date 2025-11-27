"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { whyUsData } from "../../Utils/Why_Us/whyus";

const Why_Us = () => {
  const sectionRef = useRef(null);
  return (
    <div
      ref={sectionRef}
      className="mx-auto flex flex-col items-center justify-center max-w-[1284px] mt-[100px] px-4 my-20 pt-20"
    >
      <div className="text-center w-full md:w-[65%] mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center space-x-1 md:pb-4 pb-1 justify-center"
        >
          <span className="text-customGray">&#9679;</span>
          <span className="t-1 text-left text-customGray">Why Us?</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="t-6 text-customRed pb-6"
        >
          Elevate Your Space with <br /> Expertise & Elegance
        </motion.p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-start">
        {whyUsData.map((i, index) => (
          <motion.div
            key={i.alt}
            className="flex items-center justify-center flex-col p-8 md:p-12 base-white-bg h-full corner-round"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="w-[45px] h-[45px] flex items-center justify-center base-white-bg corner-round">
              <i.icon
                className="w-[28px] h-[28px] text-customRed"
                strokeWidth={1.5}
              />
            </div>
            <div className="text-center">
              <p className="t-3 md:pt-7 pt-4 md:pb-3 pb-2.5 text-black">{i.title}</p>
              <p className="t-1 text-customGray">{i.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Why_Us;
