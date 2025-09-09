"use client";

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

export function ReactIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, rotate: 0 }}
      animate={{ opacity: 1, x: 0, rotate: 360 }}
      transition={{
        opacity: { duration: 2, delay: 1 },
        x: { duration: 2, delay: 1 },
        rotate: {
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        },
      }}
    >
      <FaReact size={300} className="text-primary" />
    </motion.div>
  );
}
