import { motion } from "framer-motion";
import { styles } from "~/utilities/style";
import { skills } from "~/constants";
import { SectionWrapper } from "~/Hoc";
import Divider from "./Divider.component";
import { staggerContainer } from "~/utilities/motion";
import AnimationWrapper from "~/common/AnimationPresence";
const Skill = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`relative w-fit `}

      >
        <div className="">
          <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
        </div>


        <div className="max-w-fit flex flex-wrap gap-3 mt-5 min-w-fit relative align-middle overflow-visible  h-fit items-center place-content-center aspect-auto self-auto inset-auto">
              {skills.map((skill, index) => (
                          <AnimationWrapper
                          key={index}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        >
                <div
                  className="  border border-gray-500 rounded-md p-3 w-fit"
                >
                  <p className={`${styles.sectionskillsText}`}>{skill.title}</p>
                </div>
                </AnimationWrapper>
              ))}
            </div>
      </motion.section>
      <Divider />
    </>
  );
};

export default SectionWrapper({ Component: Skill, id: "skill" });
