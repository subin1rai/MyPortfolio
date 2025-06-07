"use client";
import { motion } from "motion/react";
import React from "react";
import Container from "./container";
import Image from "next/image";

const Flashcard = () => {
  return (
    <Container className=" md:py-12">
      <div className="flex flex-row gap-4 justify-center items-center">
        {/* Left column */}
        <div className="flex flex-col items-center  space-y-4">
          <div className="rounded-xl bg-neutral-100 p-4 dark:bg-neutral-500">
              <Image
                src="/reactnative.png"
                alt="React Native"
                className="h-15 w-15"
                height={60}
                width={60}
              />
          </div>
          <div className="rounded-xl bg-neutral-100 p-4 dark:bg-neutral-500">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
              className="h-15 w-15"
            >
              <Image
                src="/react.png"
                alt="React"
                height={50}
                width={50}
                className="h-full w-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="rounded-xl bg-neutral-100 p-4 dark:bg-neutral-500 "
          >
            <Image
              src="/node.webp"
              alt="Node.js"
              className="h-15 w-15"
              height={60}
              width={60}
            />
          </motion.div>
          <div className="rounded-xl bg-neutral-100 p-4 dark:bg-neutral-500">
            <Image
              src="/mongodb.png"
              alt="MongoDB"
              className="h-15 w-15"
              height={60}
              width={60}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Flashcard;
