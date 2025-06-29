import React from "react";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/subin1rai",
  },
  {
    title: "PeerList",
    href: "https://peerlist.io/subin1rai",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/subinraii/",
  }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="container">
        <div className="border-t dark:border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-neutral-400 dark:text-white/40">
            &copy; {currentYear}. All rights reserved
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="inline-flex items-center gap-1.5 cursor-pointer text-neutral-500 dark:text-white hover:text-emerald-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-serif">{link.title}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-4 h-4 text-neutral-500 dark:text-white"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
