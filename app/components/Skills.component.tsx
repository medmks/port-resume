import { motion } from "framer-motion";
import { staggerContainer } from "~/utilities/motion";
import { styles } from "~/utilities/style";
import { skills } from "~/constants";
import { SectionWrapper } from "~/Hoc";
import Divider from "./Divider.component";
const Skill = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`z-max-w-7xl mx-auto relative z-0 `}
      >
        <div className="relative w-full  mx-auto  ">
          <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
          {/* Todo: add skills */}
          <div className="flex flex-wrap gap-2 mt-3 min-w-[477px] ">
            {skills.map((skill, i) => (
              <div className="  border border-gray-500  p-3 w-fit" key={i}>
                <p className={`${styles.sectionSubText}`}>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      <Divider />
    </>
  );
};

export default SectionWrapper({ Component: Skill, id: "skill" });
