import { motion } from "framer-motion";
import { fadeIn } from "~/utilities/motion";
import { styles } from "~/utilities/style";

const Link = ({
  link,
  index,
}: {
  link: { name: string; link: string };
  index: number;
}) => {
  return (
    <motion.div
      className="flex items-center z-20  gap-1"
      variants={fadeIn("left", "", 1, index * 0.3)}
    >
      <a href={link.link} className={`${styles.sublink}`}>
        {" "}
        {link.name}{" "}
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#adc3df"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </motion.div>
  );
};

export default Link;
