import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const UnderConstruction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center min-h-screen bg-white"
    >
      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center  ">
        {/* Placeholder logos */} 
        <div className="p-4">
          <Image
            src="/cons.png"
            alt="Construction Icon 1"
            width={450} // 3 inches in pixels
            height={450} // 3 inches in pixels
            className="rounded-md" // Optional: Add rounded corners if needed
          />
        </div>
      </div>

     
    </motion.div>
  );
};

export default UnderConstruction;
