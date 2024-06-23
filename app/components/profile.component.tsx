import { motion } from "framer-motion"
import { SectionWrapper } from "~/Hoc"
import { staggerContainer,fadeIn,textVariant } from "~/utilities/motion"
import { styles } from "~/utilities/style"
import Divider from "./Divider.component"

const Profile= () => {
  return (
          <>
          <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{once:true,amount:0.25}}
          className={`z-max-w-7xl mx-auto relative z-0 h-[400px] sm:h-[250px] `}>

                    <section className="relative w-full h-screen mx-auto " >
                              <div className=" w-full flex sm:flex-row flex-col justify-start gap-5 " >
                                        <motion.div
                                        variants={fadeIn("right","spring",0.5*1,0.75)}
                                        className=" green-pink-gradient   rounded-[100px] p-1 shadow-card">
                                                  <div className="rounded-full flex justify-center min-w-max ">
                                                            <img className=" rounded-full w-32 h-32 lg:w-40 lg:h-40 object-cover shadow-lg shadow-black border border-gray-700" src={"https://avatars.githubusercontent.com/u/90214045?v=4"} alt="" />
                                                  </div>        
                                        </motion.div>

                                        <div className="flex flex-col w-fit gap-2 text-center sm:text-left ">

                                                  <motion.div
                                                            variants={textVariant(1)}
                                                            className="">
                                                            
                                                            <h1 className={`${styles.heroHeadText}`}>Mohamed Guernaoui</h1>
                                                                  
                                                  </motion.div>

                                                  <motion.div
                                                            variants={textVariant(1.2)}
                                                            className="">
                                                            
                                                            <h3 className={`${styles.heroSubText} `}>Full Stack Developer</h3>
                                                                 
                                                  </motion.div>

                                                  <motion.div
                                                             variants={textVariant(1.3)}
                                                            className=" ">
                                                            
                                                             <p className={`${styles.sectionSubText} w-fit min-w-64 whitespace-normal      `}>
                                                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                                                                Aut earum, perferendis nam molestiae odio saepe. 
                                                                                
                                                            </p>
                                                                    
                                                  </motion.div>

                                        </div>
                                      
                    
                              </div>
                    </section>

          </motion.section>
          <Divider/>
          </>
  )
}

export default SectionWrapper({Component:Profile ,id:'about'})