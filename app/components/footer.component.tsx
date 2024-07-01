import { SectionWrapper } from "~/Hoc";
import { styles } from "~/utilities/style";
import Link from "./link.component";
import { watermelon } from "~/assets";
import { contact_links } from "~/constants";
import ModalComponent from "./Modal.component";

const Footer = () => {
  return (

      <footer className=" flex justify-center flex-col items-center text-center gap-4 w-full ">
        <div
          // variants={fadeIn("top", "", 0.5, 1)}
          className={`${styles.sectionSubText}  `}
        >
          <h1 className={`${styles.heroHeadText} `}>
            Let&apos;s create something together
          </h1>
        </div>
        <p
          // variants={fadeIn("button", "", 0.7, 1)}
          className={`${styles.sectionSubText} `}
        >
          Thank you for checking out my portfolio website. If you have any
          questions or would like to discuss a potential collaboration, please
          feel free to reach out to me at
        </p>
        <div className=" relative">
          <ModalComponent />
        </div>

        <div className="flex relative flex-row lg:flex-row justify-center gap-7 mt-5 mb-5 md:gap-28  ">
          {contact_links.map((link, i) => (
            <Link key={i} link={link} index={i + 1} />
          ))}
        </div>

        <div className="border-transparent mb-10 ">
          <img
            src={watermelon}
            alt="Palestine"
            className="h-52 w-fit object-cover"
          />
        </div>
      </footer>
   
  );
};

export default SectionWrapper({ Component: Footer, id: "footer" });
