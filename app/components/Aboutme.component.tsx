import { motion } from "framer-motion";
import { SectionWrapper } from "~/Hoc";
import { textVariant, fadeIn } from "~/utilities/motion";

import { styles } from "~/utilities/style";
import Divider from "./Divider.component";

const Aboutme = () => {
  return (
    <>
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
        >
        {/* <p className={`${styles.sectionSubText}`}>Introduction</p> */}
        <h2 className={`${styles.sectionHeadText}`}>About me</h2>
      </motion.div>

      <motion.p
        variants={textVariant(1)}
        className={`${styles.sectionSubText} mt-7`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat
        aliquid laudantium, culpa eaque aspernatur laboriosam doloribus nisi
        numquam officia molestiae provident illo recusandae aut incidunt nam
        iste. Unde, delectus?
      </motion.p>

      <Divider />
    </>
  );
};

export default SectionWrapper({ Component: Aboutme, id: "about" });
