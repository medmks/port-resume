import { motion } from "framer-motion";
import { staggerContainer } from "~/utilities/motion";

const Button = () => {
  return (
    <motion.button
    variants={staggerContainer()}
    className={
        "mt-5  bg-gradient-to-r bg-blue-700  text-white px-16 p-4 rounded-md w-fit font-outfit font-medium md:text-[28px] sm:text-[22px] xs:text-[22px] text-[22px] "
      }
    >
      Say salam
    </motion.button>
  );
};

export default Button;
