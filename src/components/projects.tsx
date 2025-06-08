"use client";
import Image from "next/image";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "OnSite App",
      description:
        "A mobile-first application designed to streamline fieldwork reporting and attendance tracking for on-site employees.",
      src: "/onsite.png",
      href: "#",
    },
    {
      title: "IIC Resource Management",
      description:
        "A web-based resource management system developed for Itahari International College to handle equipment requests, inventory control, and billing.",
      src: "/iicresource.png",
      href: "https://www.booklett.com",
    },
    {
      title: "BookLett",
      description:
        "An online book-sharing platform that allows users to lend, borrow, and review books within a community.",
      src: "/book.png",
      href: "https://www.subinrai.com.np",
    },
  ];

  return (
    <div className="py-40">
      <h1 className="text-primary text-3xl font-bold dark:text-white">
        Projects
      </h1>
      <p className="text-secondary pt-4 text-sm md:text-sm dark:text-neutral-100">
        Im a software engineer with a passion for building scalable and
        efficient systems. I specialize in backend development, cloud
        infrastructure, and DevOps.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-14">
        {projects.map((project, index) => (
          <PinContainer
            key={index}
            title={project.title}
            href={project.href}
          >
            <div className="flex h-[20rem] w-[22rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2">
              <Image
                src={project.src}
                alt={project.title}
                width={300}
                height={200}
                className="h-40 w-full rounded-lg object-cover mb-3"
              />
              <h3 className="text-base font-bold text-slate-100">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400">
                {project.description}
              </p>
              {/* <div className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default Projects;
