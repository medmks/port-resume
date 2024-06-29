import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { motion } from "framer-motion";
import { ChangeEventHandler, useState } from "react";
import { staggerContainer } from "~/utilities/motion";
import { styles } from "~/utilities/style";
type Tform = {
  name?: string;
  email?: string;
  msg?: string;
};

function ModalComponent() {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }
  const [form, setform] = useState<Tform>();
  // const [loading ,setloading ]=useState<boolean>(false);

  const HandelChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  };
  return (
    <>
      <motion.button
        onClick={() => setOpenModal(true)}
        variants={staggerContainer(0, 5)}
        className={
          "  bg-gradient-to-r bg-blue-600 mt-2 hover:bg-opacity-75  text-white px-16 p-3 rounded-md w-fit font-outfit font-medium md:text-[28px] sm:text-[22px] xs:text-[22px] text-[22px] "
        }
      >
        Say salam
      </motion.button>
      <motion.div variants={staggerContainer()}>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header className="bg-zinc-800" />
          <Modal.Body className="bg-zinc-800 ">
            <div className="space-y-6">
              <h3 className={`text-xl  ${styles.sectionHeadText}  `}>
                Happy to hear from you
              </h3>
              <div>
                <div className="mb-2 block ">
                  <Label
                    htmlFor="email"
                    value="Your email"
                    className={` ${styles.Modalalbel}`}
                  />
                </div>
                <TextInput
                  placeholder="name@company.com"
                  value={form?.email}
                  name="email"
                  onChange={HandelChange}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block ">
                  <Label
                    htmlFor="email"
                    value="Your name"
                    className={` ${styles.Modalalbel}`}
                  />
                </div>
                <TextInput
                  name="name"
                  onChange={HandelChange}
                  placeholder="your name "
                  value={form?.name}
                  required
                />
              </div>
              <div>
                <div className={`mb-2 block  `}>
                  <Label
                    htmlFor="password"
                    className={` ${styles.Modalalbel}`}
                    value="Your message"
                  />
                </div>
                <Textarea
                  id="comment"
                  value={form?.msg}
                  onChange={HandelChange}
                  name="msg"
                  placeholder="Leave a comment..."
                  required
                  rows={4}
                />
              </div>
              <div className="w-full">
                <Button color={""} className="w-full bg-blue-700 text-white">
                  Send message
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </motion.div>
    </>
  );
}
export default ModalComponent;
