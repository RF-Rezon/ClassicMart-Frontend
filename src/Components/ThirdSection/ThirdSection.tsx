"use client";

import { motion, Target, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import thirdsectionImgs from "./thirdsectionImgs.json";

interface SectionItem {
  img: string;
  alt: string;
  width: string;
  height: string;
  inView: Target;
  initial: Target;
}

const ThirdSection = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textControls = useAnimation();
  const imageControls = useRef(thirdsectionImgs.map(() => useAnimation()));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionTop = sectionRef.current?.offsetTop || 0;
    const relativeScroll = scrollY - sectionTop;
    const triggerPoint = window.innerHeight * 1.2;

    if (relativeScroll >= triggerPoint) {
      textControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      textControls.start({ opacity: 0, y: 50, transition: { duration: 1 } });
    }
  }, [scrollY, textControls]);

  useEffect(() => {
    const sectionTop = sectionRef.current?.offsetTop || 0;
    const relativeScroll = scrollY - sectionTop;
    const triggerPoint = window.innerHeight * 1.2;

    thirdsectionImgs.forEach((item, idx) => {
      if (relativeScroll >= triggerPoint) {
        imageControls.current[idx].start(item.inView);
      } else {
        imageControls.current[idx].start(item.initial);
      }
    });
  }, [scrollY]);

  return (
    <div
      ref={sectionRef}
      className="min-h-[300vh] lg:min-h-[500vh] md:max-w-[1250px] mx-auto my-[100px] md:my-[140px] lg:my-[186px] relative px-4 md:px-0 hidden md:block"
    >
      <div className="sticky top-20 h-screen flex-center">
        <motion.div
          animate={textControls}
          initial={{ opacity: 0, y: 50 }}
          className="absolute flex-center h-full"
        >
          <p className="t-5-special text-customGray text-center md:w-[45%] md:pb-12 md:-mt-12">
            Transforming spaces with style, through
            <span className="relative inline-block mx-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3, ease: "easeIn" }}
                className="relative z-10 px-2 text-white"
              >
                Classicmart&apos;s
              </motion.span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.3, ease: "easeIn" }}
                className="absolute inset-0 bg-customGold origin-left"
                style={{ zIndex: 0 }}
              />
            </span>
            exquisite design expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 grid-rows-2 md:gap-12 gap-y-40 md:gap-y-0">
          {thirdsectionImgs.map((i: SectionItem, index: number) => {
            const width =
              windowWidth && windowWidth < 768 ? "70px" : `${i.height}px`;
            const height =
              windowWidth && windowWidth < 768 ? "100px" : `${i.width}px`;
            const marginTop = isMobile
              ? index === 0 || index === 2 || index === 4 || index === 6
                ? "40px"
                : "0px"
              : index === 4
              ? "80px"
              : "0px";

            return (
              <motion.div
                key={index}
                animate={imageControls.current[index]}
                initial={i.initial}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="mx-auto" style={{ width, height, marginTop }}>
                  <img
                    src={i.img}
                    alt={i.alt}
                    className="corner-round h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
