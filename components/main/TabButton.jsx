import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-black" : "text-[#ADB7BE]";
  const underlineClasses = active ? "bg-[#FFD700]" : "bg-transparent"; // Change to gold

  return (
    <button
      onClick={selectTab}
      className="relative mx-4 " // Add horizontal margin for spacing
    >
      <p className={`font-semibold hover:text-black  text-[20px] ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        transition={{ duration: 0.3 }}
        className={`h-1 ${underlineClasses} absolute bottom-0 left-0`}
      />
    </button>
  );
};

export default TabButton;
