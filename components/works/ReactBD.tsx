import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
       Biomedical Engineereing Student
        <span className="text-textGreen tracking-wide">@AAiT | AAU </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jul 2021 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Le Enat web App:   Developed a web application aimed at supporting prenatal health and monitoring postnatal progress. The app provides users with essential information, personalized reminders, and tracking features to ensure the well-being of mothers and their babies throughout the pregnancy journey.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Biomedical Workshop Documentation and API: Building comprehensive documentation and an API for various biomedical devices, including guidelines for installation, maintenance, and troubleshooting. This project aims to facilitate healthcare professionals understanding of essential medical equipment and improve accessibility to technical information.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            
          </span>
        
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
