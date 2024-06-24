import { motion } from "framer-motion"
import { SectionWrapper } from "~/Hoc"
import { staggerContainer,fadeIn,textVariant } from "~/utilities/motion"
import { styles } from "~/utilities/style"
import Divider from "./Divider.component"
// import Divider from "./Divider.component";

const Profile= () => {
  return (
      
          <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{once:true,amount:0.25}}
          className={`z-max-w-7xl mx-auto relative z-0 `}>

                    <div className="relative w-full  mx-auto  " >
                              <div className=" w-full flex md:flex-row flex-col justify-start gap-5 " >
                                        <motion.div
                                        variants={fadeIn("right","spring",0.5*1,0.75)}
                                        className=" green-pink-gradient   rounded-[100px] p-1 shadow-card">
                                                  <div className="rounded-full flex justify-center min-w-max ">
                                                            <img className=" rounded-full w-32 h-32 lg:w-40 lg:h-40 object-cover shadow-lg shadow-black border-2 border-gray-500" src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVFhUXGBcVGBgXFxgaGBoXFRcYFxgXFxgYHyggGBolHxUXIjEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGC0mHR0tLSstNy0tLS0tLS0tLS0wLS0tLS0tLS0tLi0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQQCBQYDBwj/xABEEAACAQICBQgGBwYFBQAAAAAAAQIDEQQSBSExYZEGE0FRcYGh8AciMnKxwTNCUmKS0eEjQ4KistIUFnPC8RU0k6Oz/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAUCBv/EADQRAAIBAgQDBQcEAgMAAAAAAAABAgMRBCExUQUSQRMiYXGRgaGxwdHh8AYUMkIVUjM0cv/aAAwDAQACEQMRAD8A7AAHdOkB58+ekAAAAAXIRIbAFwRckAefPAAJgAAABMIAAXCAsABYixIAYsAgCCbEEsAMMEAEgAAZFu89wJy+czAuCAAgAAAAgAAAAAAQZAEBhMAAgkIAPz56wAAQSAgAGGAAAQASALgBAAAMAAEX3Am78oABAAAAIhgEixg5WMkwCRYi4bAJuBci4BIAADIZIADBBIAsCGzFzAM2Rc8ZVTylWJsC1mIcym6xi6hNgW5VSFUKTqGUHrFgbCDMkzypM9bnkEEhIADL2cQMvaSAQQSLAEWDJNTjMVzeLpJ+xVg4P3oSTi+M3H+JHic1BJvdL1JSuX5s8+dM6yKc2Wogs8+TzxTzEZibAu8+Zc8UU+0nMRYF5VSedRRzk5/PyFgXucRLqFDOTzosC/zhi5lNVCJVBYFmdU8JVTT6X5QYfD/TVYxf2Vrl+FazjtJekxa1h6F+qVR2/lj+ZXOtThqzxKcY6s+iubMZS6eg+L47lpjat/22RdVNKPjt8TS4nGVKn0lSc/flKXxZnljorRFTxC6I+24/lJhaN+cr07roi8z4Ruzm9I+kmjHVRpTqPrlaEfm34Hy8FEsbN6ZFbryeh9w5KaVnisNGtNRUpSmrRvZWk0trd9SN1BnHei6vmwbj9ipJcVGXzOwW06FKXNBN7GqDvFMv0Ge6KdCRbiemeiQAQDK25cQRr38f0BAIDAbJAOZ5bylCNKcIuTvKHY5ZZRlqT1qUF3nTXKGnqLnh6ltbSzx96m1OPjGxnxVPnoyj4fDM9wdpJnz/AEt6T5wlkjh4OSSu3OTV2urKvizS1PSXim/oqFuyf9xz/KjDqGJqW9mTU4+7NKS+JqTnxxVWUU+Yw1ZzjNq+h2q9JWJ6aVHhP+4t1PSHiabXO4aCurrXON0+pu5p+Seh07V6i6fUT/rt8OPUdnh9BrGXpzyqnFZ6lSWpU4r67fQ9y29l7Uy4hUU+VO5keLnzqMczWYb0mxf0mHkt8JqXhJI2dH0h4OW11Y+9C/8AS2fPuUehFQqSdGUqlC7yTlHLK3Rnj0dvw2GlNMMdNq6aZuqOtRly1FZ+J9kXLrAv981206nyiWKPK7Ay2YiC7bx/qSPiYLVjp7I8fuJH3rDaYw9TVCvSk+pTjfhcuVKkYq8moxW1t2Vu1n55MpTbSTbaWxX1K/V1HpY59Ynr9x4H1zTPLzC0bqm+en1Q9m/Reezhc4TS/LTF17pT5qH2afq8Ze0+KW45wFFTE1J9bLwKpVZSJbvrZABnKwAAAAXNG6Kr4iWWhRqVX1Qg5W7bLV3gHY+ifG2qVqLftRU12wdn4SXA+l+eg4Dkh6O9J0sRTrzpRpKDvJTmruDVpJKGbXZ7HbWd8/KOrgp3hy7GyhK8bbHvSkXaUjXRLdGRqZcWkCEyWeQRff54gkAAAIAIEJEgHw/l/o/m3B2tklUod0JZqf8AJKJy2Doc5OMF0vwWt+CZ9X9I2iXVc4x2zjCrHfOm+bku1xlA+fcksPnqSfVG34n+jPn5rsuZbN/b4mTG918+6+x0eGlN5acI9UUlwSsXeUGmJ0aTw0E3Cm71Mv7yp0t7ovUlu3G25O4TIq+Jdv2FO8f9So8kPFs0saPfvZglNRWmvwN36f4e63NXWVsk/Hf2GtwmOVWN461sae3saNRpHQLd5Ul2w/t/I6xQRkkVxrcjvE+pq8NjiKajWd3vp6anzNq2p7SDvNLaGhW1+zPokvn1o4zH4GdGWWat1Poe9M6FKvGp5nyeP4XVwju847/XYrAAuOaADa6I5N4vFW/w+Gq1E/rKDyd836q72AaoH0vRXoZxs0pYicKK1erFqpPfezyrizsdD8htH4SzqYWVaX2qzzrX9xWhxT+IB8Q0ZoiviHahRqVOvLFtLtlsXedpoT0WV6jTxNWNBatSWee9amoriz7hhNMYeygkoJbI5UkuxLUi6oUqiusr7ADitA+jjRmHs3SdeS+tWeZfgVo8UztqLUIqFOMYxWxRSSXclZHm8ClsMeba1Jtdq8SQWXVfSjltOYbJUbWyV2u3Y18+83c4Veh+GsqaRoznTaltWtat3nwL8NU5J+DLKUuWRzx70pHgZQOwbjZU3qM7FejO573PLBnft4MkjIuteAPIMWGAiQAAAc7y0py5uFSCTlGeS7drKssl/wAWTgjx5QVa08LhKlZUlKbrSiqUWkofs0lK/wBda7m80zhXVoVaa2yg8vvLXHxSOYxOL53B0X9ipO3ZXiqq4OM49xxOJwtJv/ZL3NfIzY9Xwz8GZR9XR1Zr95iKUO1Qi6nxZytbH0oSySnGMttm7eOw6du+jZfdxUZP+Kk4/FHNVMJCUlNwi5LY2k2caVrq+x9L+nlP/Hx7O1+Z3v8AYrYjRMZ1eeU5xlZey1Z2W9P8jYoixT0jTrNLmZxi768y1NcGeLuVk2dzkjRUpwg7vN26v1MatCtzueNRZNXqSWrfZrXcvOMW05RhKzTtOClG++MlZnlRzqKzuLfS4qy4XZWxuk1TcU6dSV+mMbpE95tW6bHh9lThJzvaWqlnr06+mh9B5O4bQ+KtTrYHD0qz6o5YTf3GmrP7r7rnSx9G+ik9WCp33ub8HKx8jhVUl29atxTOr5Pct6+HtCf7anss36692XT2PijXSxVspnAx3AlLv4Z+z6P5P1O9w3JXB0XmpYPDxktklShm42v4lqeMcNTTsXMNiM8IzyyjmSeWSSkr67SS2Mzkk9TNx8w1Z2ZTpaSpy1XsWHKMuplbFaKpT2xs+tajXz0JOOunWa3MkgvYjRVKe2C7jXVOTqWulOUX2mN8ZT+zNCOnKkPpKTXYgDDmcXS2SU14npT0/KP0lNp7k2W6GnaUtssvaeWM09g4r1q1Psi8z4Ru7kNpakNpamD5S0t/Vse0yp6epS1K+vrRoMZyxwsfo6M5+9aMeOt+BosdysqT9inSp9zk+LsvApeIgupU68F1Og0hSUZ3Xsy9Zd+1FVM53Rul6sqyVWo5RldWaSSb2Oy1dS7zojuYOuq1O+2R0cNWVWF10LNGRcgzX0mXqTNLLzPI/veP5EDLu8QeQZJEEoJABAAAHF8xl/xOH+w5Sj2RfPR/9dSt+E7RnO6Tao42lVavCcVm6rU21Uv20qkl3HP4jC9NS2fueQcOeEobplHQceco4rDdM6aqQXXOg86S3tORyeksK6sMsakqbundfB2tq7zo6Ff/AA2JU6clNU6nqtO6nFPr3xfieHKHBRpV5KnrpTSq0n0OnU9aPB3j/CfNu6Sa1X59TX+l68alKphJ+fyfyNRhKHNxUc0pW6ZO7fH4FappCSrc0qUns9e9o2aTvexdqVFFXbSXW2kuLEJJpNO6etNdO9FafVq59dKGShCXLa2zy2z+JjiZtRk4xzNLVG9r7rsr4CrOcb1KeR9Cvd236tRFPSlKVTmlJuabVknbVt17C6lcmzSs0eHUpu9XtO7G99LZbvXLzIw+j5VZqnTjKU5bIx2/ot+xH0Xk7yCeHy1ZzUq21W1xh7t9svvcDlNDaZq4VPmcictsnBOTXVd9G4uT5ZY1/vrdkKa+MTRRlCGcrtnxXE+PwrN06Kajv1f0X49jv3WxFPbFSW4R0wvrRcT5vV5R4ueqWIqdzy/02NbiasqntzlK/wBqTfxbNDxa6I4LxS6I+sVOUWHh7VanHdKST4XuUsRy5wcfrym+qEW/F2XifJ5YOPQrHnLCNbGeXim9CHiW9D6RivSLD91Qb3zkl32jf4mkx3LPE1NScIL7sU3xlc4905ohTkiuVSb/ALFbqTfU2GNk6rbqSc77btv9EVP+nQ6LrsbRiq76T0jX89BX3tyvvbmE8K1snP8AF53ldynDpbW8vRqByXSE31Cb6laGL2bE18Ud/hK2eEZr6yT4nBzpwvs88TsuSvrYdL7MnH/d/uOtwqpao47r4HQ4fO03HdGzpovUjyhSPeCO6zrHpbzYEZn5i/zJPIIDAuABchkgA0PLPDuVBTUnF05RndWvlbyT1+7JvuN8eOMw6q0505bJxlF/xKxXWp9pTcd0TF2dz5hfm3KL12bV+uztdfE3VOssThnT21cPmqU/vUZWdSH8LtJdrsaLHzlHLmWtxtLX9aDcJL+XxMcDj3RqRqR1Si77t6fWmnbvPlFHc5vbTweN7WOqfqtvTIq6V0dHEKN5NZXfV0p7fhtL6stS2LVwPbStGKtWo/Qz2Lppy+tTl2PZ1opKqVSUl3X0Pv8AC1qNVdvT/va78voZ0sPCMnKMUpS2tLW+0txVivTl0noqu5kJPVnyP6g4p2kv2tH+EX3rdX9ve/I9lIh33GCqLqJ5wmx8tYZyVVIuYuPn/gEnoqiJzHhKBgTYWLSfnsIsivdjOxYWPaUEYOmjFSvqXnsL2H0RiKns0p265eqv5j3CEpO0Vc9xhKWiKDgYNHTYbkfUf0lSMd0U5PxsjbYXkrh465KU3956uEbeJsp8Pry1VvM1QwdWXS3mcAoNuy1vqSd+B3PIzCzhSnzkJQvPMlJWbWWKvZ9hvMPhYU1aEIxX3Ul8D2sdPC4DsZc7ldm6hhOzlzNkWJAOibRft8AZXlv8SSAYkC4JAQAYAYAAOSxGGjHFVKcknCpm1PYlWhe//kp2XacRRepdPnoO+5WwlGdOcYtuScLqy9aD5ynte6fnbyVTQ1aEM7pSUbXTsnq6/Vbsj5zFQkqkoJZJt+x2f1MnEoOUYTS8GRozHqm3GUc9KeqcHsa649Ule6e49dI6NjBKrSmp0ZOyepSi7XyTj17zWT1bTY6P0NiK2uFJ2+01ljxe3uuZlFzySuZsHjsRh040uv5deJXVRGcatzpMFyKe2tVW9QV3+KX5HQYTQOHpa40otrpl6z7r7O410+G1Z65eZVHA1JZvI4fDYGrV9inKW9LVxerxNjT5LYhq7UI7pS/tT1nc2Bthwqmv5Nv3GqPD4LVtnGf5Rq/bp/zfkP8AKdb7dLjL+07Nhlv+NobP1Pf7Gj+M46HJGq9tSC7m/ike1Pkc+mtwh+bOrBK4dh1/X3slYKjt72c9DkjR2ynUfZlS+BcocnsNH92pe83LwerwNqQy6OEox0gi2OHpR0ijChh4Q9iEY+6kvgj0uAXpJaFqVtAAgSSCCUAAAABfz5QMrPzf8wQDEhE3CJAAQQAIuSGAazlJSbw8pLbTaqr+B5nxjmXeToSadFJfVvFe6vY/lceJsZpNWetPU+857kw8jlRb1xvHtdF5L98XDgYqj5MTCXSScfTNfMtjnBrbM2dPAUoyclSgpX2qCuXYnnIyps2qKSyRSkloehBKCBIAAAIJAAAAADAAAuEAAkAABcAACxDJABOVdS4foDDMt/gBYGQFyACb9YIJAIJDABBzuK/ZYzN9WeSb7/2MuHqyOjsablLhk1Cb6G6bf3aqy/1ZDFj0+x51rBqXpr7rl1D+dn1yNrNGMDHD1c8Iye1pN7n0rjclM3RkpK66lR7XMrmETJIggABAEEhAAglAXAJIFgwCCWLAAWAAAuAACCWEADHO+pcUDPM+vwJAMbgWAAFgACUh58+ekggAkq6Uoc5SqRW1xdveWuPikWrAiUVJOL0ZKdndGq0Bic9N9qkuyos1/wATkXpI0+iVzVepS6Lyiuz6SmluUZT4G6mjLgJN0VF6xvF+zIsqrvXXXP1MqbM0eUGehsZUSAEQACTEAkAIAAAANABAAMAAEEkABk+fPnqAAHDj+hItv88QAQEAARckXFgCLGRiT582AAFwAc/px81XhV6HHX20nmfGE5ruN7I1fKWinSjNr6OcZP3X6kvCVy1ouo5UYXu2k4yfW4Nxv32v3mGi+TFTh/slJfBl0lenF7ZHsmeyZ4s9Im9lJm0ACAAEACCWAAAgABcAWAAAAFyH+hIAAsGACc25gnj4kkAwns738TGn8/kAT0DJfnxJW1d3yAAFPbx+KPSXy+QBAMau3gQtnD4MkDoChyg/7at/py+Zhoj2Ze+//nAAwy/7sf8Ay/iXL/ifme9X2e75IsQ6e1gHQZSyY7e75RH6fMAgCp0d4jtff8AADGWz8Ie19xAJAj09nzPRbOHxQBDA/X4yManR56YgBaghbF2L5E9HncASSTHYuz5RMuju+QBBB5T+R6x29z+QAegMgAeAf//Z"} alt="" />
                                                  </div>        
                                        </motion.div>

                                        <div className="flex flex-col w-fit gap-2 text-center md:text-left ">

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
                    </div>

                    <Divider/>

          </motion.section>
        
         
  )
}

export default SectionWrapper({Component:Profile ,id:'profile'})