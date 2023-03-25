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
      <motion.h2>Fetching Questions...</motion.h2>
      <motion.p animate="animate" variants={spinVariant}>
        ?
      </motion.p>
    </>
  );
}
