"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
const Awards_Recognition = () => {
  const sectionRef = useRef(null);
  const info = [
  {
    award: "Excellence in Watch Craftsmanship",
    reason: "Honored for delivering high-quality, precision-engineered timepieces",
    date: "2025"
  },
  {
    award: "Innovative Watch Design",
    reason: "Recognized for creating elegant and modern watch designs appreciated worldwide",
    date: "2024"
  },
  {
    award: "Customer Choice Recognition",
    reason: "Voted by clients for exceptional service, design variety, and attention to detail",
    date: "2023"
  },
  {
    award: "Top Timepiece Collection",
    reason: "Celebrated for curating a diverse and stylish collection of wristwatches",
    date: "2022"
  },
  {
    award: "Quality Assurance Award",
    reason: "Acknowledged for consistently maintaining premium quality standards",
    date: "2021"
  },
  ];
  return (
    <>
      <div
        ref={sectionRef}
        className="min-h-screen mx-auto flex flex-col lg:flex-row items-center justify-center max-w-[1284px] my-[100px] md:my-[140px] md:mb-[180px] px-4"
      >
        <div className="w-full">
          <div className="mb-8 md:mb-12">
            <div className="self-start">
              <p className="flex items-center space-x-1 md:pb-4 pb-1">
                <span className="text-customGray">&#9679;</span>
                <span className="t-1 text-left text-customGray">Awards & Recognition</span>
              </p>
              <p className="t-6 text-left pb-3 md:pb-0 text-customRed">
                Our Achievements: <br /> Celebrating Excellence <br />
                in Design
              </p>
            </div>
          </div>
          <div>
            {info.map((i, index) => (
              <motion.div
                key={index}
                className="w-full border-b-[1.5px] border-b-[#c40d2e] flex items-center justify-between t-3 py-4 flex-col md:flex-row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <p className="md:w-[20%] w-[100%] text-black">{i.award}</p>
                <p className="md:w-[30%] w-[100%] text-customGray">{i.reason}</p>
                <p className="w-full md:w-min text-customRed">{i.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards_Recognition;