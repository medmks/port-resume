import { motion } from "framer-motion";
import { SectionWrapper } from "~/Hoc";
// import { fadeIn, textVariant } from "~/utilities/motion";
import { styles } from "~/utilities/style";
import { bbktour, randonne, multiservice } from "~/assets";
import Divider from "./Divider.component";

const worksexample = [
  //  {image: jobit, source_code_link: "https://github.com" },
  { image: bbktour, source_code_link: "https://github.com" },
  { image: randonne, source_code_link: "https://github.com" },
  { image: multiservice, source_code_link: "https://github.com" },
];
const ProjectCard = ({
  project,
  index,
}: {
  project: { image: string; source_code_link: string };
  index: number;
}) => {
  return (
    <div className="h-[250px] min-w-[300px] max-w-[350px]  ">
      <motion.div
        // variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        key={index}
        className=" relative "
      >
        <img
          src={project.image}
          alt={"project_image"}
          className="  object-contain rounded-lg h-[250px] max-[340px] "
        />
      </motion.div>
    </div>
  );
};
const Work = () => {
  return (
    <>
      <section className="relative  w-full">
        <motion.div
        // variants={textVariant(0.5)}
        >
          <h2 className={`${styles.sectionHeadText}`}>Work</h2>
          <div className=" flex flex-col justify-center items-center mt-7 min-[900px]:grid grid-cols-2 min-[1200px]:grid-cols-3  gap-4  ">
            {worksexample.map((work, index) => {
              return <ProjectCard key={index} project={work} index={index} />;
            })}
          </div>
        </motion.div>
      </section>

      <Divider />
    </>
  );
};

export default SectionWrapper({ Component: Work, id: "work" });
