import React from "react";
import Container from "./container";
import techIcons from "@/lib/techIcons";

const Skill = () => {
  const skills = [
    "React Native",
    "Node.js",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "MySql",
    "Prisma",
    "Zustand",
    "React.js",
    "AWS",
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
            className="flex items-center md:gap-2 gap-2 rounded-md md:px-2 py-1 text-black dark:text-white"
          >
            {techIcons[skill] || null}
            <span className="text-sm md:text-lg">{skill}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skill;
