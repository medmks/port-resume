import { motion } from "framer-motion";
import { styles } from "~/utilities/style";
import { skills } from "~/constants";
import { SectionWrapper } from "~/Hoc";
import Divider from "./Divider.component";
const Skill = () => {
  return (
    <>
      <motion.section
        // variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        // className={`z-max-w-7xl mx-auto relative z-0 `}
      >
        <div className="relative w-fit mx-auto ">
          <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
          {/* Todo: add skills */}
          <div className=" w-full relative">
            <div className="max-w-fit flex flex-wrap gap-3 mt-5 min-w-fit relative align-middle overflow-visible  h-fit items-center place-content-center aspect-auto self-auto inset-auto">
              {skills.map((skill, i) => (
                <div
                  className="  border border-gray-500 rounded-md p-3 w-fit"
                  key={i}
                >
                  <p className={`${styles.sectionskillsText}`}>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      <Divider />
    </>
  );
};

export default SectionWrapper({ Component: Skill, id: "skill" });
