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
      period: "Jan 2023 - Present",
      company: "Digital Perspective",
      position: "Frontend Web Developer",
      description: "Web Design; Web Development; Wordpress + Elementor.",
      logo: "/next.svg",
      logoAlt: "Digital Perspective Logo",
    },
    {
      id: "2",
      period: "Jan 2020 - Mar 2020",
      company: "Bitcliq",
      position: "Software Developer - Internship",
      description:
        "Mobile Development ( Parque D.Carlos I App - Course Final Project [Grade:20/20] ); Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
      logo: "/placeholder.svg?height=60&width=60",
      logoAlt: "Bitcliq Logo",
    },
    {
      id: "3",
      period: "Apr 2019 - Jul 2019",
      company: "Bitcliq",
      position: "Software Developer - Internship",
      description:
        "Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
      logo: "/placeholder.svg?height=60&width=60",
      logoAlt: "Bitcliq Logo",
    },
  ];

  const studiesExperience: ExperienceItem[] = [
    {
      id: "1",
      period: "2018 - 2021",
      company: "University of Technology",
      position: "Bachelor in Computer Science",
      description:
        "Focused on software development, web technologies, and mobile application development.",
      logo: "/me.png",
      logoAlt: "University Logo",
    },
    {
      id: "2",
      period: "2016 - 2018",
      company: "Technical Institute",
      position: "Web Development Certificate",
      description:
        "Comprehensive program covering HTML, CSS, JavaScript, and modern web frameworks.",
      logo: "/placeholder.svg?height=60&width=60",
      logoAlt: "Institute Logo",
    },
  ];

  const currentExperience =
    activeTab === "work" ? workExperience : studiesExperience;

  return (
    <Container className="min-h-screen p-8 text-white dark:bg-black">
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
                className="mb-12 flex flex-col items-start gap-6 last:mb-0 md:flex-row"
              >
                {/* Timeline Line and Avatar */}
                <div className="flex flex-row items-center md:flex-col">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-neutral-100 md:h-16 md:w-16 dark:bg-white">
                    <Image
                      src={item.logo}
                      alt={item.logoAlt}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  {index < currentExperience.length - 1 && (
                    <div className="ml-4 h-px w-16 bg-gray-600 md:mt-4 md:ml-0 md:h-24 md:w-px"></div>
                  )}
                </div>

                {/* Experience Content */}
                <div className="flex-1 pt-2">
                  <div className="text-secondary mb-2 text-sm">
                    {item.period}
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-black md:text-2xl dark:text-white">
                    {item.company}
                  </h3>
                  <div className="mb-4 text-lg text-gray-300">
                    {item.position}
                  </div>
                  <p className="leading-relaxed text-gray-300">
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
