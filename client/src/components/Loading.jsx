import { motion } from "framer-motion";
import "./Loading.css";

const spinVariant = {
  animate: {
    rotate: 360,
    transition: { duration: 1.75, repeat: Infinity, delay: 0.75 },
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
