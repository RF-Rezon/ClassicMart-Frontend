"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import News_cards from "../../Utils/news/news_cards";
const News = () => {
  const sectionRef = useRef(null);

  return (
    <>
      <div
        ref={sectionRef}
        className="min-h-screen mx-auto flex flex-col lg:flex-row items-center justify-center max-w-[1284px] mt-[100px] mb-[50px] md:mt-[140px] lg:mt-[186px] lg:mb-[140px] md:space-x-10 px-4"
      >
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12">
            <div className="text-customGold self-start">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex items-center space-x-1 md:pb-4 pb-1"
              >
                <span className="text-customGray">&#9679;</span>
                <span className="t-1 text-left text-customGray">News</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="t-6 text-left pb-3 md:pb-0"
              >
                Stay Inspired with <br /> Interior Trends
              </motion.p>
            </div>
            <div className="md:self-end self-start">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="btn-2 t-2 border-2 bg-customGold base-white-text hover:bg-transparent hover:border-red-600 hover:text-customGold"
              >
                View All News
              </motion.button>
            </div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-x-2.5"
            >
              <News_cards />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
