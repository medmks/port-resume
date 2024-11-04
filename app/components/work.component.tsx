import { motion } from "framer-motion";
import { SectionWrapper } from "~/Hoc";
import { styles } from "~/utilities/style";
import Divider from "./Divider.component";
import { Variants, worksexample } from "~/constants";
import { web } from "~/assets";
import UserNavBar from "./userNavBar.component";
import AnimationWrapper from "~/common/AnimationPresence";
import { useState } from "react";

export const ProjectCard = ({
  project,
  index,
}: {
  project: {
    image: string;
    source_code_link: string;
    tags: { it: string }[];
    name: string;
    url: string;
  };
  index: number;
}) => {
  return (
    <>
      {/* <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}> */}
      <div className=" bg-zinc-900 p-2 h-full  w-full xs:[350px] rounded-md  shadow-md">
        <div className="relative w-full ">
          <img
            src={web}
            alt={project.image}
            className="w-[495px] object-contain rounded-md "
          />
          {project.tags[0].it !== "WordPress" && (
            <div className="flex justify-end absolute inset-0 m-3 card-img_hover">
              {/* <div className="  black-gradient h-10 w-10 rounded-full flex justify-center items-center cursor-pointer "> */}
                {/*  <img src={"github"} alt="" className="w-1/2 h-1/2 object-contain" />*/}
              {/* </div> */}
            </div>
          )}
        </div>
        <div className="flex flex-row justify-between items-center p-5 px-10">
          <div className="">
            <h2
              className={`font-outfit text-white md:text-[30px] sm:text-[30px] xs:text-[40px] text-[28px]`}
            >
              {project.name}
            </h2>
            <p
              className={`font-outfit text-white font-thin  md:text-[24px] sm:text-[22px] xs:text-[30px] text-[20px]`}
            >
              {project.tags[0].it}
            </p>
          </div>

          <button className="border border-gray-500 rounded-full w-16 h-16 flex justify-center items-center   ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
        {/* <div className="mt-2 flex flex-wrap gap-2 text-red-300 p-2  ">
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
          </div> */}
      </div>
      {/* </motion.div> */}
    </>
  );
};

const Work = () => {
  const [filteredWork, setfilteredWork] = useState(worksexample);
  const [active, setActive] = useState("Featured");

  const SetFiltredWork = (Key: string) => {
    if (!Key) {
      console.error("Invalid key provided");
      return;
    }
    setActive(Key);

    const filtered = worksexample.filter((work) => work.type === Key);
    setfilteredWork(filtered);
    console.log(filtered);
  };

  return (
    <>
      <AnimationWrapper>
        <section className="relative w-full">
          <motion.div>
            <div className="flex justify-between items-center">
              <h2 className={`${styles.sectionHeadText} text-right`}>Works</h2>
            </div>
            <UserNavBar
              // active={active}
              routes={Variants}
              // SetFiltredWork={SetFiltredWork}
            >

            </UserNavBar>
          </motion.div>
        </section>
      </AnimationWrapper>
      <Divider />
    </>
  );
};

export default SectionWrapper({ Component: Work, id: "work" });
