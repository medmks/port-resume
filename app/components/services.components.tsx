import { motion } from "framer-motion";
import { shopify } from "~/assets";
import { staggerContainer } from "~/utilities/motion";
import { styles } from "~/utilities/style";

const ServicesComponent = () => {
  return (
    <motion.section
      className="mt-40 max-w-[1200px]  mx-auto"
      variants={staggerContainer()}
    >
      <div className=" w-full flex flex-col bg-zinc-900  rounded-md">
        <div className="flex flex-col p-10 gap-10">
          <h2 className={`${styles.SubHeadText}`}>
            Our Mission Is To Make Your Business <br /> Better Through
            Technology{" "}
          </h2>

          <div className="flex ">
            <div className="w-1/3  h-72 flex flex-col justify-center gap-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,158a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM78,84A10,10,0,1,1,68,74,10,10,0,0,1,78,84Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,118,84Z"></path>
              </svg>
              <h3 className={`${styles.sectionskillsText}`}>Web Development</h3>
              <p className={`${styles.sectionSubText}`}>
                We build websites that are fast, secure, and easy to navigate.
              </p>
            </div>
            <div className="w-1/3  h-72 flex  flex-col justify-center gap-5 ">
              <img className="w-24 h-24" src={shopify} alt="shopify-icon" />
              <h3 className={`${styles.sectionskillsText}`}>
                Mobile Development
              </h3>
              <p className={`${styles.sectionSubText}`}>
                We develop mobile applications that are user-friendly and
                intuitive.
              </p>
            </div>
            <div className="w-1/3  h-72 flex flex-col justify-center gap-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M236.24,19.76a6,6,0,0,0-8.48,0L173.94,73.57l-6.79-6.78a30,30,0,0,0-42.42,0L100,91.51l-7.76-7.75a6,6,0,0,0-8.48,8.48L91.51,100,66.79,124.73a30,30,0,0,0,0,42.42l6.78,6.79L19.76,227.76a6,6,0,1,0,8.48,8.48l53.82-53.81,6.79,6.78a30,30,0,0,0,42.42,0L156,164.49l7.76,7.75a6,6,0,0,0,8.48-8.48L164.49,156l24.72-24.73a30,30,0,0,0,0-42.42l-6.78-6.79,53.81-53.82A6,6,0,0,0,236.24,19.76Zm-113.45,161a18,18,0,0,1-25.46,0L75.27,158.67a18,18,0,0,1,0-25.46L100,108.49,147.51,156Zm57.94-57.94L156,147.51,108.49,100l24.72-24.73a18,18,0,0,1,25.46,0l22.06,22.06a18,18,0,0,1,0,25.46ZM90.43,34.23a6,6,0,0,1,11.14-4.46l8,20a6,6,0,1,1-11.14,4.46Zm-64,59.54a6,6,0,0,1,7.8-3.34l20,8a6,6,0,1,1-4.46,11.14l-20-8A6,6,0,0,1,26.43,93.77Zm203.14,68.46a6,6,0,0,1-7.8,3.34l-20-8a6,6,0,0,1,4.46-11.14l20,8A6,6,0,0,1,229.57,162.23Zm-64,59.54a6,6,0,1,1-11.14,4.46l-8-20a6,6,0,0,1,11.14-4.46Z"></path>
              </svg>
              <h3 className={`${styles.sectionskillsText}`}>SEO</h3>
              <p className={`${styles.sectionSubText}`}>
                We optimize your website to rank higher on search engines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesComponent;
