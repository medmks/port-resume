import { motion } from "framer-motion"
import { SectionWrapper } from "~/Hoc"
import { staggerContainer,textVariant,fadeIn } from "~/utilities/motion"
import { styles } from "~/utilities/style"


const Experience = () => {
  return (
          <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{once:true,amount:0.25}}
          className={`z-max-w-7xl mx-auto relative z-0 `}>

              <div className="relative w-full  mx-auto  " >

                    <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
 
                    <div className=" w-full flex md:flex-row flex-col justify-start gap-3 mt-7 " >
                                        <motion.div
                                        variants={fadeIn("right","spring",0.5*1,0.75)}
                                        className=" green-pink-gradient   rounded-full p-1 shadow-card">
                                                  <div className="rounded-full flex justify-center  ">
                                                            <img className="  rounded-full w-10 h-10 lg:w-24 lg:h-24 object-cover shadow-lg shadow-black border-2 border-gray-500" src={"https://media.licdn.com/dms/image/D4E0BAQEo6bReI2rhHw/company-logo_200_200/0/1715944361002/xco_agency_llc_logo?e=2147483647&v=beta&t=9jEdOX0bM6LJWKMv3Tc2AqpvQfszYqSO1ZZnG8_TrQ4"} alt="" />

                                                  </div>        
                                        </motion.div>

                                        <div className="flex flex-col w-fit gap-2 text-center md:text-left ">

                                                  <motion.div
                                                            variants={textVariant(1)}
                                                            className="">
                                                            
                                                            <h1 className={`${styles.sectionHeadText}`}>Xco Agency </h1>
                                                                  
                                                  </motion.div>

               

                                                  <motion.div
                                                             variants={textVariant(1.3)}
                                                            className=" ">
                                                            
                                                             <p className={`${styles.sectionSubText} w-fit min-w-64 whitespace-normal      `}>
                                                             Shopify developer - 2024               
                                                            </p>
                                                            
                                                                    
                                                  </motion.div>

                                        </div>
                                      
                    
                              </div>

                    </div>
          
          
          </motion.section>
  
  )
}

export default SectionWrapper({Component:Experience ,id:'experience'})