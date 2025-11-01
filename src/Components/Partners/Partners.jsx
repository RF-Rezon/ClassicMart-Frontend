import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
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
    <div className="overflow-hidden max-w-[1248px] mx-auto">
         <div className="w-full pb-14 flex items-center justify-end">
                  <div className="lg:w-[50%] w-full text-customGold md:px-6 lg:px-0">
                    <div className="lg:mr-10">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex items-center space-x-1 md:pb-4 pb-1"
                      >
                        <span className="text-customGold">&#9679;</span>
                        <span className="t-1 text-left">Our Partners</span>
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="t-6 text-left"
                      >
                        Designing the Future, Together
                      </motion.p>
                    </div>
                  </div>
                </div>
      <div className="py-28 flex flex-col items-center justify-between">
        <div className="py-24 mb-10">
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
