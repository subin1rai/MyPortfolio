"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./container";

interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  position: string;
  description: string;
  logo: string;
  logoAlt: string;
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState<"work" | "studies">("work");

  const workExperience: ExperienceItem[] = [
    
    {
      id: "1",
      period: "Jun 2024 - Sep 2024",
      company: "Itahari International College",
      position: "Teaching Assistant & FullStack Development - Internship",
      description:
        "Mobile Development ( Parque D.Carlos I App - Course Final Project [Grade:20/20] ); Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
      logo: "/iic.png",
      logoAlt: "iic Logo",
    }
  ];

  const studiesExperience: ExperienceItem[] = [
    {
      id: "1",
      period: "2023 - 2025",
      company: "Itahari International College",
      position: "BSc (Hons) in Computing",
      description:
        "Focused on software development, web technologies, and mobile application development.",
      logo: "/iic.png",
      logoAlt: "University Logo",
    },
    {
      id: "2",
      period: "2021 - 2022",
      company: "Aims Academy College",
      position: "School Leaving Certificate (SLC)",
      description:
        "",
      logo: "/aims.png",
      logoAlt: "Aims Logo",
    },
  ];

  const currentExperience =
    activeTab === "work" ? workExperience : studiesExperience;

  return (
    <Container className="  text-white md:pt-44 pt-36  dark:bg-black">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h1 className="text-primary text-3xl font-bold dark:text-white">
          Experience
        </h1>

        {/* Tab Navigation */}
        <div className="mt-4 mb-8 flex gap-4">
          <button
            onClick={() => setActiveTab("work")}
            className={`w-full rounded-lg px-8 py-2 text-lg font-medium transition-all duration-300 ${
              activeTab === "work"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "border border-gray-600 bg-transparent text-gray-400 hover:border-gray-400"
            }`}
          >
            Work
          </button>
          <button
            onClick={() => setActiveTab("studies")}
            className={`w-full rounded-lg px-8 py-2 text-lg font-medium transition-all duration-300 ${
              activeTab === "studies"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "border border-gray-600 bg-transparent text-gray-400 hover:border-gray-400"
            }`}
          >
            Studies
          </button>
        </div>

        {/* Experience Timeline */}
        <div className="rounded-2xl border border-gray-700 p-3 md:p-8">
          <div className="relative">
            {currentExperience.map((item, index) => (
              <div
                key={item.id}
                className="mb-5 flex flex-col items-start md:gap-6 gap-4 last:mb-0 md:flex-row"
              >
                {/* Timeline Line and Avatar */}
                <div className="flex flex-row items-center md:flex-col">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-neutral-100 md:h-16 md:w-16 dark:bg-white">
                    <Image
                      src={item.logo}
                      alt={item.logoAlt}
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>

                  {index < currentExperience.length - 1 && (
                    <div className="ml-4 h-px w-16 bg-gray-600 md:mt-4 md:ml-0 md:h-24 md:w-px"></div>
                  )}
                </div>

                {/* Experience Content */}
                <div className="flex-1 pt-0 md:pt-2">
                  <div className="text-secondary mb-2 text-sm">
                    {item.period}
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-black md:text-2xl dark:text-white">
                    {item.company}
                  </h3>
                  <div className="text-md text-secondary mb-4 md:text-lg">
                    {item.position}
                  </div>

                  <p className="text-secondary  leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
