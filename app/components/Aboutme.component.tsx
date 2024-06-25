import { motion } from "framer-motion";
import { SectionWrapper } from "~/Hoc";
import { textVariant, fadeIn } from "~/utilities/motion";

import { styles } from "~/utilities/style";
import Divider from "./Divider.component";

const Aboutme = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        {/* <p className={`${styles.sectionSubText}`}>Introduction</p> */}
        <h2 className={`${styles.sectionHeadText}`}>About me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("left", "", 1, 1)}
        className={`${styles.sectionSubText} mt-3`}
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
