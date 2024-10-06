import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Freelancer
        <span className="text-textGreen tracking-wide"></span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I&apos;ve freelanced on the side. I&apos;ve learnt and developed multiple technologies and projects. I&apos;ve worked with several startups and clients to create products that solve real-world problems.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated weekly with clients to provide technological insights while developing and maintaining multiple web and mobile apps for startups and helping to solidify a brand direction for a graphic design and animation studio.
        </li>
       
      </ul>
    </motion.div>
  );
};

export default Google;
