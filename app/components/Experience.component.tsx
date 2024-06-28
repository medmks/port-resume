import { motion } from "framer-motion";
import { SectionWrapper } from "~/Hoc";
import { staggerContainer, textVariant, fadeIn } from "~/utilities/motion";
import { styles } from "~/utilities/style";
import Divider from "./Divider.component";

const ExperienceCard = ({
  exprience,
  index,
}: {
  exprience: { company_name: string; role: string; icon: string; date: string };
  index: number;
}) => {
  return (
    <div className=" w-full flex md:flex-row flex-col justify-start gap-3 mt-7 ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className=" green-pink-gradient  flex justify-center  rounded-full p-1 shadow-card"
      >
        <img
          className="rounded-full w-28 h-28 lg:w-24 lg:h-24 object-cover  border border-gray-500"
          src={exprience.icon}
          alt={exprience.company_name}
        />
      </motion.div>

      <div className="flex flex-col w-full md:w-fit gap-2 text-center md:text-left ">
        <motion.div variants={textVariant(index)} className="">
          <h1 className={`${styles.roletext}`}>{exprience.company_name} </h1>
        </motion.div>

        <motion.div variants={textVariant(index)} className=" ">
          <p
            className={`${styles.sectionSubText}  min-w-64 whitespace-normal      `}
          >
            {exprience.role} - {exprience.date}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "fullstack developer",
      company_name: "web Media",
      icon: "data:image/png;base64,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",
      date: "2023",
    },
    {
      role: "shopify developer",
      company_name: "Xco Agency",
      icon: "https://media.licdn.com/dms/image/D4E0BAQEo6bReI2rhHw/company-logo_200_200/0/1715944361002/xco_agency_llc_logo?e=2147483647&v=beta&t=9jEdOX0bM6LJWKMv3Tc2AqpvQfszYqSO1ZZnG8_TrQ4",
      date: "2024",
    },
  ];
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
          <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
          <div className=" flex flex-col lg:flex-row  ">
            {experiences.map((exprience, i) => {
              return (
                <ExperienceCard
                  index={i}
                  key={exprience.company_name}
                  exprience={exprience}
                />
              );
            })}
          </div>
        </div>
      </motion.section>
      <Divider />
    </>
  );
};

export default SectionWrapper({ Component: Experience, id: "experience" });
