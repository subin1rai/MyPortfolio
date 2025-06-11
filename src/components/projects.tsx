"use client";
import Image from "next/image";
import type React from "react";
import { PinContainer } from "./ui/3d-pin";
import { motion } from "framer-motion"; // ✅ Correct import
import { Github } from "lucide-react";

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
  JavaScript: <Image src="/js.png" alt="React Native" width={16} height={16} />,
  TypeScript: <Image src="/ts.png" alt="TypeScript" width={16} height={16} />,
  "Tailwind CSS": (
    <Image
      src="/tailwind.png"
      alt="React Native"
      width={16}
      height={16}
      className="brightness-0 invert-0 filter"
    />
  ),

  PostgreSQL: (
    <Image
      src="/post.png"
      alt="React Native"
      width={16}
      height={16}
      className="brightness-50 invert-0 filter"
    />
  ),
  MySql: (
    <Image
      src="/mysql.png"
      alt="React Native"
      width={16}
      height={16}
      className="brightness-0 invert-0 filter"
    />
  ),

  "Node.js": (
    <Image
      src="/node.webp"
      alt="React Native"
      width={16}
      height={16}
      className="brightness-0 invert-0 filter"
    />
  ),
  AWS: (
    <Image
      src="/AWS.png"
      alt="AWS"
      width={16}
      height={16}
      className="brightness-0 invert-0 filter"
    />
  ),
  Mongodb: (
    <Image
      src="/mongo.png"
      alt="mongo"
      width={16}
      height={16}
      className="brightness-0 invert-0 filter"
    />
  ),

  "Express.js": (
    <Image
      src="/express.png"
      alt="React Native"
      width={16}
      height={16}
      className="brightness-50 invert-0 filter"
    />
  ),
  "Next.js": (
    <Image
      src="/next.svg"
      alt="React Native"
      width={16}
      height={16}
      // className="brightness-50 invert-0 filter"
    />
  ),

  Prisma: (
    <Image
      src="/prisma.png"
      alt="Prisma"
      width={16}
      height={16}
      className="brightness-0 invert-0 filter"
    />
  ),
  Zustand: (
    <Image
      src="/zustand.png"
      alt="React Native"
      width={16}
      height={16}
      className=""
    />
  ),

  "ASP.NET": (
    <Image
      src="/net.png"
      alt="React Native"
      width={16}
      height={16}
      className="brightness-50 invert-0 filter"
    />
  ),
};

const Projects = () => {
  const projects = [
    {
      title: "OnSite App",
      description:
        "A mobile-first application designed to streamline fieldwork reporting and attendance tracking for on-site employees.",
      src: "/onsite.png",
      href: "https://www.booklett.com",
      github: "https://github.com/subin1rai/OnSite-APP-Final-Year-Project.git",
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
        "A web-based resource management system developed for Itahari International College to handle equipment, inventory control, and billing.",
      src: "/iicresource.png",
      href: "Private Website",
      github: "https://github.com/subin1rai/IIC-Resource-Frontend.git",
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
      github: "https://github.com/subin1rai/MyPortfolio.git",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "BookLett",
      description:
        "An online book-sharing platform that allows users to lend, borrow, and review books within a community.",
      src: "/book.png",
      href: "https://booklett.netlify.app",
      github: "https://github.com/subin1rai/BookLett.git",
      technologies: [
        "React.js",
        "PostgreSQL",
        "Tailwind CSS",
        "ASP.NET",
        "JavaScript",
      ],
    },

    {
      title: "URL-Shortner",
      description:
        "Developed and deployed a highly scalable and maintainable full-stack URL shortener, designed to streamline sharing and enhance user experience.",
      src: "/url.png",
      href: "https://urlsy.vercel.app",
      github: "https://github.com/subin1rai/urlshortner.git",
      technologies: [
        "React.js",
        "Mongodb",
        "Tailwind CSS",
        "Node.js",
        "AWS",
        "JavaScript",
      ],
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

      <div className="mt-22 grid grid-cols-1 gap-y-44 md:grid-cols-2">
        {projects.map((project, index) => (
          <PinContainer key={index} title={project.href} href={project.href}>
            <div className="flex h-[28rem] w-[22rem] basis-full flex-col justify-between p-4 tracking-tight text-slate-100/50 sm:basis-1/2">
              <div>
                <Image
                  src={project.src || "/placeholder.svg"}
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

              {/* Buttons moved to the bottom */}
              <div className="mt-6 flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 hover:shadow-md active:scale-95"
                >
                  <Github className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  <span>View Code</span>
                </motion.a>

                {project.href !== "#" && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md active:scale-95"
                  >
                    <span>Live Demo</span>
                    <svg
                      className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default Projects;
