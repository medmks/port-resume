import { motion } from "framer-motion";
import { SectionWrapper } from "~/Hoc";
import { fadeIn } from "~/utilities/motion";
import { styles } from "~/utilities/style";
import Divider from "./Divider.component";
import { worksexample } from "~/constants";

const ProjectCard = ({
  project,
  index,
}: {
  project: {
    image: string;
    source_code_link: string;
    tags: { it: string }[];
    name: string;
    url:string
  };
  index: number;
}) => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
        <div
          className=" bg-zinc-900 p-3 h-full  w-full xs:[350px] rounded-xl  shadow-md"
        >
          <div className="relative w-full ">
            <img
              src={project.image}
              alt={project.image}
              className="w-[330px] h-[250px]  object-contain  rounded-md "
            />
            {project.tags[0].it !== "WordPress" && (
              <div className="flex justify-end absolute inset-0 m-3 card-img_hover">
                <div className="  black-gradient h-10 w-10 rounded-full flex justify-center items-center cursor-pointer ">
                  {/*  <img src={"github"} alt="" className="w-1/2 h-1/2 object-contain" />*/}
                </div>
              </div>
            )}
          </div>
          <div className="mt-2 flex flex-col p-2">
            <a href={project.url} target="_blank"  rel="noreferrer" className={styles.roletext}>{project.name}</a>
            {/* <p className=" leading-[25px] text-secondary text-[14px]" >{project.description}</p> */}
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-red-300 p-2  ">
            {project.tags.map((tag) => {
              return (
                <div
                  key={tag.it}
                  className="border border-gray-500 rounded-md p-2 w-fit"
                >
                  <p className={`font-[14px] font-outfit text-white `}>
                    {tag.it}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Work = () => {
  return (
    <>
      <section className="relative  w-full">
        <motion.div
        // variants={textVariant(0.5)}
        >
          <div className="flex justify-between items-center">
            <h2 className={`${styles.sectionHeadText} text-right`}>Work</h2>
            <a href="/" target="_blank"  className={`${styles.sectionskillsText}  underline flex justify-end items-end text-left `} >See more</a>
          </div>
          
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
