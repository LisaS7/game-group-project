import { motion } from "framer-motion";
import "./Loading.css";

const spinVariant = {
  animate: {
    rotate: 720,
    transition: { duration: 1.25, repeat: Infinity },
  },
};

export default function Loading() {
  return (
    <>
    <div className="loading-div">
      <motion.h2 className="loading-heading">Fetching Questions...</motion.h2>
      <motion.p
        className="loading-text"
        animate="animate"
        variants={spinVariant}
      >
        ?
      </motion.p>
    </div>
    </>
  );
}
