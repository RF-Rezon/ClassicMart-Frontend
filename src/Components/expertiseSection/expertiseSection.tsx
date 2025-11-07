"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

const ExpertiseSection = () => {
  const sectionRef = useRef(null);

  const [activeImage, setActiveImage] = useState("/images/square/2.jpg");
  const services = [
    {
      id: "01",
      title: "Customwrist watch Design",
      img: "/images/square/2.jpg",
    },
    {
      id: "02",
      title: "Room Decoration & Styling",
      img: "/images/square/3.jpg",
    },
    {
      id: "03",
      title: "Space Planning & Interior Layout",
      img: "/images/square/4.jpg",
    },
    {
      id: "04",
      title: "Home Renovations & Remodeling",
      img: "/images/square/5.jpg",
    },
    { id: "05", title: "Lighting Design", img: "/images/square/1.jpg" },
    {
      id: "06",
      title: "Virtual Interior Design Consultations",
      img: "/images/square/6.jpg",
    },
  ];
  return (
    <>
      <div
        ref={sectionRef}
        className="mb-[86px] lg:mb- lg:min-h-screen mx-auto max-w-[1284px] my-[100px] md:my-[140px] lg:my-[186px] md:space-x-10 px-4 relative space-x-6"
      >
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
                <span className="text-customGray">&#9679;</span>
                <span className="t-1 text-left text-customGray">
                  Our Expertise
                </span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="t-6 text-left"
              >
                Selecting the ideal elements to elevate your space
              </motion.p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center justify-start md:justify-center gap-x-32 mt-4"
        >
          <div className="flex-1/2 hidden lg:block">
            <div className="relative lg:w-[600px] h-[572px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ y: 180 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full object-cover rounded-[8px] absolute top-0 left-0"
                  src={activeImage}
                  alt="image"
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="flex-1/2">
            <div className="w-full text-customGold lg:space-y-[86px] space-y-[20px] md:px-6 lg:px-0">
              <ul className="t-4 text-customGold">
                {services.map((i) => (
                  <motion.li
                    whileHover={{
                      backgroundColor: "#c40d2e",
                      color: "#ffff",
                      paddingLeft: "16px",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    key={i.id}
                    className="py-[9px] border-b-[1.5px] border-b-[#555555] flex cursor-pointer bg-fill-hover"
                    onMouseEnter={() => setActiveImage(i.img)}
                  >
                    <span className="t-1 mr-4.5">{i.id}</span>
                    <p>{i.title}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ExpertiseSection;
