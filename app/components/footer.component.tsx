import { motion } from "framer-motion";
import { SectionWrapper } from "~/Hoc";
import { fadeIn } from "~/utilities/motion";
import { styles } from "~/utilities/style";
import Button from "./button.component";
import Link from "./link.component";

const Footer = () => {
  return (
    <section className=" flex justify-center flex-col items-center text-center gap-4">
      <motion.div
        variants={fadeIn("top", "", 0.5, 1)}
        className={`${styles.sectionSubText}  `}
      >
        <h1 className={`${styles.heroHeadText} `}>
          Let&apos;s create something together
        </h1>
      </motion.div>
      <motion.p
        variants={fadeIn("button", "", 0.7, 1)}
        className={`${styles.sectionSubText} `}
      >
        Thank you for checking out my portfolio website. If you have any
        questions or would like to discuss a potential collaboration, please
        feel free to reach out to me at
      </motion.p>
      <Button />

      <div className="flex flex-wrap justify-center gap-28 mt-20 ">
        {[
          { name: "LinkedIn", link: "https://linkedin.com/in/pillow" },
          { name: "GitHub", link: "https://github.com/pillow" },
          { name: "Email", link: "mailto:pillow@posteo.net" },
        ].map((link, i) => (
          <Link key={i} link={link} index={i + 1} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper({ Component: Footer, id: "footer" });
