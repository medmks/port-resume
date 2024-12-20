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
