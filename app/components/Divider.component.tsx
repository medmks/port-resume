import { motion } from "framer-motion";
import { staggerContainer } from "~/utilities/motion";

const Divider = () => {
  return (
    <motion.div variants={staggerContainer()}>
      <div className={` h-[0px] bg-gray-700  md:h-[1px]  my-14`} />
    </motion.div>
  );
};

export default Divider;
