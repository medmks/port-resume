import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { motion } from "framer-motion";
import { ChangeEventHandler, useState } from "react";
import { staggerContainer } from "~/utilities/motion";
import { styles } from "~/utilities/style";
import { HiFire } from "react-icons/hi";
type Tform = {
  name?: string;
  email?: string;
  msg?: string;
};

function ModalComponent() {
  const [openModal, setOpenModal] = useState(false);
  const [sent, setsent] = useState(false);


  function onCloseModal() {
    setOpenModal(false);
  }
  const [form, setform] = useState<Tform>();
  const [loading ,setloading ]=useState<boolean>(false);


  const HandelChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  };
  const handelSendmessage = () => {
    setloading(true)
    setTimeout(() => {
        setsent(true)
    }, 2000);
  }
  const SuccessMessage = () => {
    return (
      <motion.div
      variants={staggerContainer()}
      >
         <div className=" flex justify-center items-center flex-col mb-9 gap-3">
        <div className="">
          <HiFire className="text-5xl text-red-600" />
        </div>
        <p className={"text-white font-outfit font-normal lg:text-[24px] sm:text-[18px]  xs:text-[20px] text-[20px] lg:leading-[25px]"}  >Your message has been sent !</p>
      </div>
      </motion.div>
     
    )
  }
  const Spinner = () => {
    return (
        <div
        className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
      </div>
    )
  }
  const ContactForm = () => {
    return (
      <div className="space-y-6">
      <h3 className={`text-xl  ${styles.roletext}  `}>
        Contact us
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
          color={"light"}
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
          color={"light"}

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
          color={"light"}

          rows={4}
        />
      </div>
      <div className="w-full">
        <Button color={""} className="w-full bg-red-700 text-white py-1" onClick={handelSendmessage}>
          {
            loading ? <Spinner/> : <span className={"text-white font-outfit "}>Send</span>
          }
            
        </Button>
      </div>
    </div>
    )
  } 
  return (
    <>
      <motion.a
        // onClick={() => setOpenModal(true)}
        variants={staggerContainer(0, 5)}
        href="mailto:mguernaoui03@gmail.com"
        className={
          "bg-red-600 mt-2 hover:bg-opacity-75  text-white px-14 py-3 rounded-md w-fit font-outfit font-medium md:text-[28px] sm:text-[22px] xs:text-[22px] text-[22px] "
        }
      >
        Say salam
      </motion.a>
      <motion.div variants={staggerContainer()}>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>

          <Modal.Header className="bg-zinc-800" />
          <Modal.Body className="bg-zinc-800 ">
            {
              sent ? <SuccessMessage/> : <ContactForm/>
            }
          </Modal.Body>
        </Modal>
        
      </motion.div>
    </>
  );
}
export default ModalComponent;
