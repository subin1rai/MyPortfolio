"use client";
import { motion } from "motion/react";
import React from "react";
import Container from "./container";

const Connect = () => {
  return (
    <Container className="pt-12">
      <div>
        <h1 className="text-primary text-8xl font-bold dark:text-white">
          Lets
        </h1>
        <div className="flex flex-row">
          <h1 className="text-primary pt-6 text-8xl font-bold dark:text-white">
            Con
          </h1>

          <motion.div
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <motion.h1
              initial={{ rotate: 30 }}
              whileTap={{ rotate: 0 }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                color: "#3b82f6",
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-primary mb-14 pt-6 text-8xl font-bold dark:text-white"
            >
              nect
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Connect;
