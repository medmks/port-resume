import { Button,  Label, Modal, TextInput, Textarea } from "flowbite-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { staggerContainer } from "~/utilities/motion";
import { styles } from "~/utilities/style";

function ModalComponent() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <>
      <motion.button
        onClick={() => setOpenModal(true)}
        variants={staggerContainer(0, 5)}
        className={
          "  bg-gradient-to-r bg-blue-700  hover:bg-opacity-75  text-white px-16 p-4 rounded-md w-fit font-outfit font-medium md:text-[28px] sm:text-[22px] xs:text-[22px] text-[22px] "
        }
      >
        Say salam
      </motion.button>
      <motion.div variants={staggerContainer()}>
        <Modal  show={openModal} size="md" onClose={onCloseModal}   popup>
          <Modal.Header  className="bg-zinc-800"/>
          <Modal.Body
          className="bg-zinc-800 ">
            <div className="space-y-6">
              <h3 className= {`text-xl  ${styles.sectionHeadText}  `} >
                Sign in to our platform
              </h3>
              <div>
                <div className="mb-2 block ">
                  <Label htmlFor="email" value="Your email" className={` ${styles.Modalalbel}`} />
                </div>
                <TextInput
                
                  placeholder="name@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />

              </div>


              <div>
                <div className="mb-2 block ">
                  <Label htmlFor="email" value="Your name" className={` ${styles.Modalalbel}`} />
                </div>
                <TextInput
                
                  placeholder=""
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />

              </div>



              <div>
                <div className={`mb-2 block  `  }>
                  <Label htmlFor="password" className={` ${styles.Modalalbel}`} value="Your message" />
                </div>
                <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />

              </div>
              {/* <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className={` ${styles.Modalalbel}`}>Remember me</Label>
                </div> */}
                {/* <a
                  href="/"
                  className="text-sm text-blue-700 hover:underline dark:text-cyan-500"
                >
                  Lost Password?
                </a> */}
              {/* </div> */}
              <div className="w-full">
                <Button color={""} className="w-full bg-blue-700 text-white">Send message</Button>
              </div>
              {/* <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <a
                  href="/"
                  className="text-blue-700 hover:underline dark:text-cyan-500"
                >
                  Create account
                </a>
              </div> */}
            </div>
          </Modal.Body>
        </Modal>
      </motion.div>
    </>
  );
}
export default ModalComponent;
