import { motion } from "framer-motion";
import LogoTickerComponent from "~/components/logoTicker.component";
import { SectionWrapper } from "~/Hoc"
import { staggerContainer } from "~/utilities/motion";
import { styles } from "~/utilities/style";

 const HomePage = () => {
  return (
    <motion.section variants={staggerContainer()} className=" relative mx-auto mt-44  w-full">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <h2 className={`${styles.heroHead}`}>Empowering businesses with cutting-edge solutions, one line of code at a time </h2>
        <p className={`${styles.sectionSubText}`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam</p>
      </div>
      <div className="w-full relative mt-20">
        <LogoTickerComponent/>
      </div>
    </motion.section>
  )
}
export default SectionWrapper({ Component: HomePage, id: "home" });
