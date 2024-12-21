import { SectionWrapper } from "~/Hoc";
import { styles } from "~/utilities/style";
import { watermelon } from "~/assets";
import { contact_links } from "~/constants";
import ModalComponent from "./Modal.component";
import Link from "./link.component";
import { motion } from "framer-motion";
import { staggerContainer } from "~/utilities/motion";

const Footer = () => {
  return (
    <footer className="w-full relative ">
      <div className="flex justify-center flex-col items-center text-center gap-10 ">
        <div className={` flex flex-col gap-4  `}>
          <h1 className={`${styles.heroHeadText} `}>
            Let&apos;s create something together
          </h1>

          <p className={`${styles.sectionSubText} `}>
            Thank you for checking out my portfolio website. If you have any
            questions or would like to discuss a potential collaboration, please
            feel free to reach out to me at
          </p>
        </div>
        <div className="relative ">
          <ModalComponent />
        </div>

        <div className="flex relative flex-row lg:flex-row justify-center gap-7 mt-7 mb-5 md:gap-28  ">
          {contact_links.map((link, i) => (
            <Link key={i} link={link} index={i + 1} />
          ))}
        </div>

        <motion.div
          variants={staggerContainer()}
          className="border-transparent mb-10 "
        >
          <img
            src={watermelon}
            alt="Palestine"
            className="h-52 w-fit object-cover"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default SectionWrapper({ Component: Footer, id: "footer" });
