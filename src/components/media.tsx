"use client";
import { Download, GithubIcon, Linkedin, MailIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Media = () => {
  const media = [
    {
      title: "Github",
      href: "https://github.com/subin1rai",
      icon: <GithubIcon size={20} />,
    },
    {
      title: "Mail",
      href: "mailto:bantawasubin@gmail.com",
      icon: <MailIcon size={20} />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/subinraii/",
      icon: <Linkedin size={20} />,
    },
  ];

  return (
    <div className="flex flex-row gap-4 items-center justify-center md:justify-start mt-4">
      {/* Resume download */}
      <a
        href="/Subin_rai CV.pdf" // Place your resume.pdf in the /public folder
        download
        className="flex flex-row items-center gap-2 bg-black px-4 py-2 dark:bg-white rounded-md"
      >
        <Download className="h-7 w-5 text-white dark:text-black" />
        <p className="text-white dark:text-black">Resume</p>
      </a>

      {/* Social media links */}
      {media.map((item, index) => (
        <Link href={item.href} key={index} target="_blank" rel="noopener noreferrer">
          <div className="p-3 border-1 bg-border-[#f4f4f5] rounded-md hover:bg-[#f4f4f5] hover:dark:bg-[#27272a]">
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Media;
