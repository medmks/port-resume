import { motion } from "framer-motion";
// import React from 'react'
import { SectionWrapper } from "~/Hoc";
import { staggerContainer } from "~/utilities/motion";
import { styles } from "~/utilities/style";

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      className=" relative mx-auto mt-44 w-full"
    >
      <div className="w-full flex flex-col justify-center items-center gap-14">
        <h2 className={`${styles.heroHead} `}>
          Empowering businesses with cutting-edge solutions, one line of code at
          a time{" "}
        </h2>
        <p className={`${styles.sectionSubText} text-center `}>
          Provide innovative solutions that meet your unique needs. Whether
          it&apos;s building a custom website, creating a mobile app, or
          developing a complex software.
          <br />
          Let&apos;s connect and explore how I can help you succeed in
          today&apos;s digital landscape.
        </p>
        <motion.div
          variants={staggerContainer()}
          className="flex flex-row gap-4 mt-5"
        >
          <button className="bg-red-600 mt-2 hover:bg-opacity-75 flex justify-center items-center  text-white px-14 py-2 rounded-md w-fit gap-3 font-outfit font-medium md:text-[28px] sm:text-[22px] xs:text-[22px] text-[22px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86Zm-16.25,1.47L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z"></path>
            </svg>{" "}
            connect now
          </button>
          {/* <button className="underline mt-2 hover:bg-opacity-75 flex justify-center items-center  text-white px-14 py-3 rounded-md w-fit gap-3 font-outfit font-normal md:text-[28px] sm:text-[22px] xs:text-[22px] text-[22px] ">
            Explore more
          </button> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper({ Component: Hero, id: "hero" });
