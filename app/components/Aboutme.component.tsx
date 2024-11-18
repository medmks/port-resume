import { SectionWrapper } from "~/Hoc";
import { styles } from "~/utilities/style";
import Divider from "./Divider.component";
import { motion } from "framer-motion";
import { slideIn } from "~/utilities/motion";

const Aboutme = () => {
  return (
      <motion.section className=" relative w-full">
        <div className="">
          <h2 className={`${styles.sectionHeadText}`}>About me</h2>
        </div>

      <div>
        <p className={`${styles.sectionSubText} mt-7`}>
          Moroccan young programmer who loves to build things, Committed to
          creating innovative applications and systems that address challenges
          and contribute to the success of businesses. I have 2 years of
          experience in web development, using the MERN stack. also I aquired a
          experience of developing shopify apps with Remix.js and Liquid.
          <br />
          {/* <br />I&apos;m curious about functional programing and I&apos;m willing to
          learn Elixir and Phoenix Inchallah. */}
        </p>
      </div>

      <Divider />
    </motion.section>
  );
};

export default SectionWrapper({ Component: Aboutme, id: "about" });
