import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";

const Partners = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <div className="bg-[#020c1d] overflow-hidden">
      <div className="py-10 flex flex-col items-center justify-between">
        <div>
          <p className="text-5xl text-center border-b-customGold border-b-4 text-white inline-block mt-10 mb-5 font-playfair">
            Our Partners
          </p>
        </div>
        <div className="py-24 my-10">
          <Marquee direction="right" speed={40}>
            <div className="p-4 mr-4 h-24 w-full my-auto cursor-pointer">
              <img className="w-full h-full object-cover" src="/client1_6e709373-d4d6-4fee-905c-f47825f2b2a6.png" />
            </div>
            <div className="p-4 mr-4 h-24 w-full my-auto cursor-pointer">
              <img className="w-full h-full object-cover" src="/client2_f5e7538d-5a02-406d-9b6f-8fabc6e087f4.png" />
            </div>
            <div className="p-4 mr-4 h-24 w-full my-auto cursor-pointer">
              <img className="w-full h-full object-cover" src="client3_50109f47-cc2b-438c-80d1-d5a6d59c4064.png" />
            </div>
            <div className="p-4 mr-4 h-24 w-full my-auto cursor-pointer">
              <img className="w-full h-full object-cover" src="client4_ff7c56f6-25ab-4616-904a-e1c7b2812066.png" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Partners;
