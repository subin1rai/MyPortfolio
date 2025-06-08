import React from "react";
import Container from "./container";
import techIcons from "@/lib/techIcons";

const Skill = () => {
  const skills = [
    "React Native",
    "MySql",
    "TypeScript",
    "Prisma",
    "Zustand",
    "Node.js",
    "Express.js",
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Next.js",
    "PostgreSQL",
    "ASP.NET",
    "MongoDB",
    "Firebase",
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
    "Postman",
    "Jest",
    "Docker",
    "Python",
    "Railway",
  ];

  return (
    <Container className="pt-28 text-white md:pt-28 dark:bg-black">
      <h1 className="text-primary text-3xl font-bold dark:text-white">
        Skills
      </h1>
      <div className="mt-4 flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-md px-2 py-1 text-black dark:text-white"
          >
            {techIcons[skill] || null}
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skill;
