// import { motion } from "framer-motion";
import { SectionWrapper } from "~/Hoc";
import { styles } from "~/utilities/style";
import Divider from "./Divider.component";
import { WorkTabs, worksexample } from "~/constants";
import TabsNavigate from "./NavigatingPortfolio.component";
import AnimationWrapper from "~/common/AnimationPresence";

const Work = () => {
  return (
    <>
      <AnimationWrapper>
        <section className="relative w-full">
          <div>
            <div className="flex justify-between items-center">
              <h2 className={`${styles.sectionHeadText} text-right`}>Works</h2>
            </div>
            <TabsNavigate filteredWork={worksexample} workFilter={WorkTabs} />
          </div>
        </section>
      </AnimationWrapper>
      <Divider />
    </>
  );
};

export default SectionWrapper({ Component: Work, id: "work" });
