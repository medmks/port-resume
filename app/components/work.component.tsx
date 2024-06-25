import { motion } from "framer-motion";
import { SectionWrapper } from "~/Hoc";
import { fadeIn, textVariant } from "~/utilities/motion";
import { styles } from "~/utilities/style";
// import { MyWorks } from "~/constants"
import { jobit } from "~/assets";
import Divider from "./Divider.component";

const ProjectCard = ({
  project,
  index,
}: {
  project: { image: string; source_code_link: string };
  index: number;
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      key={index}
    >
      <div className="relative w-full">
        <img
          src={project.image}
          alt="kk"
          className="w-full h-full object-full  rounded-2xl "
        />
      </div>
    </motion.div>
  );
};
const Work = () => {
  return (
    <>
      <motion.section variants={textVariant(0.5)}>
        <h2 className={`${styles.sectionHeadText}`}>Work</h2>
        <div className="mt-20 flex flex-wrap gap-7">
          {[{ image: jobit, source_code_link: "https://github.com" }].map(
            (work, index) => {
              return <ProjectCard key={index} project={work} index={index} />;
            },
          )}
        </div>
      </motion.section>
      <Divider />
    </>
  );
};

export default SectionWrapper({ Component: Work, id: "work" });
