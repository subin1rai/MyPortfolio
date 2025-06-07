"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "OnSite App",
      description:
        "A mobile-first application designed to streamline fieldwork reporting and attendance tracking for on-site employees.",
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/macbook-scroll.png",
      href: "#",
    },
    {
      title: "IIC Resource Management",
      description:
        "A web-based resource management system developed for Itahari International College to handle equipment requests, inventory control, and billing.",
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
      href: "https://www.booklett.com",
    },
    {
      title: "BookLett",
      description:
        "An online book-sharing platform that allows users to lend, borrow, and review books within a community.",
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/colourful-text.webp",
      href: "https://www.subinrai.com.np",
    },
  ];

  return (
    <div className="py-10">
      <h1 className="text-primary dark:text-white text-3xl font-bold">Project</h1>
      <p className="text-secondary dark:text-neutral-100 pt-4 text-sm md:text-sm">
        Im a software engineer with a passion for building scalable and
        efficient system. I specialize in backend development, cloud
        infrastructure, and DevOps.
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            key={project.title}
            className="group"
          >
            <Link href={project.href} className="block">
            <Image
              src={project.src}
              alt={project.title}
              width={300}
              height={300}
              className="h-72 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.04]"
            />
            <h2 className="font-medium mt-2 tracking-tight z-20 text-neutral-500 dark:text-neutral-400 ">
              {project.title}
            </h2>
            <p className="text-sm max-w-xs text-neutral-500 dark:text-neutral-400">{project.description}</p>
        </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
