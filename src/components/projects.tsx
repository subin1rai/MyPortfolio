"use client";
import Image from "next/image";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { motion } from "framer-motion"; // ✅ Correct import


// Optional: add logo image fallback
const techIcons: Record<string, React.ReactNode> = {
  "React.js": (
    <Image
      src="/react.png"
      alt="React Native"
      width={16}
      height={16}
      className="brightness-0 invert-0 filter"
    />
  ),
  "React Native": (
    <Image
      src="/reactnative.png"
      alt="React Native"
      width={16}
      height={16}
      className="brightness-0 invert-0 filter"
    />
  ),
  "Tailwind CSS": (
    <Image
      src="/tailwind.png"
      alt="React Native"
      width={16}
      height={16}
      className="brightness-0 invert-0 filter"
    />
  ),

  PostgreSQL:   <Image src="/post.png" alt="React Native" width={16} height={16}  className="invert-0 filter brightness-50"/>,
  MySql: (
    <Image
      src="/mysql.png"
      alt="React Native"
      width={16}
      height={16}
      className="brightness-0 invert-0 filter"
    />
  ),

  "Node.js":(    <Image src="/node.webp" alt="React Native" width={16} height={16}   className="invert-0 filter brightness-0"/>),

  "Express.js": (    <Image src="/express.png" alt="React Native" width={16} height={16}   className="invert-0 filter brightness-50"/>),

  Prisma: (
    <Image
      src="/prisma.png"
      alt="Prisma"
      width={16}
      height={16}
      className="brightness-0 invert-0 filter"
    />
  ),
  Zustand: (    <Image src="/zustand.png" alt="React Native" width={16} height={16}   className=""/>),

  "ASP.NET": (    <Image src="/net.png" alt="React Native" width={16} height={16}  className="invert-0 filter brightness-50"/>),
};

const Projects = () => {
  const projects = [
    {
      title: "OnSite App",
      description:
        "A mobile-first application designed to streamline fieldwork reporting and attendance tracking for on-site employees.",
      src: "/onsite.png",
      href: "#",
      technologies: [
        "React Native",
        "MySql",
        "TypeScript",
        "Prisma",
        "Zustand",
        "Node.js",
        "Express.js",
      ],
    },
    {
      title: "IIC Resource Management",
      description:
        "A web-based resource management system developed for Itahari International College to handle equipment requests, inventory control, and billing.",
      src: "/iicresource.png",
      href: "https://www.booklett.com",
      technologies: [
        "React.js",
        "MySql",
        "JavaScript",
        "Tailwind CSS",
        "Prisma",
        "Node.js",
        "Express.js",
      ],
    },
    {
      title: "Personal Portfolio",
      description:
        "A web-based resource management system developed for Itahari International College to handle equipment requests, inventory control, and billing.",
      src: "/portfolio.png",
      href: "https://www.subinrai.com.np",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "Node.js",
        "Express.js",
      ],
    },
    {
      title: "BookLett",
      description:
        "An online book-sharing platform that allows users to lend, borrow, and review books within a community.",
      src: "/book.png",
      href: "https://booklett.netlify.app/p",
      technologies: ["React.js", "PostgreSQL", "Tailwind CSS", "ASP.NET"],
    },
  ];

  return (
    <div className="py-40">
      <h1 className="text-primary text-3xl font-bold dark:text-white">
        Projects
      </h1>
      <p className="text-secondary pt-4 text-sm md:text-sm dark:text-neutral-100">
        I’m a software engineer with a passion for building scalable and
        efficient systems. I specialize in backend development, cloud
        infrastructure, and DevOps.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-y-30 md:grid-cols-2">
        {projects.map((project, index) => (
          <PinContainer key={index} title={project.title} href={project.href}>
            <div className="flex h-[24rem] w-[22rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2">
              <Image
                src={project.src}
                alt={project.title}
                width={300}
                height={200}
                className="mb-3 h-40 w-full rounded-lg object-cover"
              />
              <h3 className="text-base font-bold text-slate-100">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400">{project.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.5 }}
                    className="flex items-center gap-1 rounded-2xl border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm"
                  >
                    {techIcons[tech]}
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default Projects;
