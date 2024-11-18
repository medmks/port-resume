import { motion } from "framer-motion";
import { SectionWrapper } from "~/Hoc"
import { staggerContainer } from "~/utilities/motion";
import { styles } from "~/utilities/style";

 const HomePage = () => {
  return (
    <motion.section variants={staggerContainer()} className=" relative mx-auto mt-52  w-full">
      <div className="w-full flex flex-row justify-center items-center">
        <h2 className={`${styles.heroHead}`}>Collaborated smarter with streamlined workflow </h2>
      </div>
    </motion.section>
  )
}
export default SectionWrapper({ Component: HomePage, id: "home" });
