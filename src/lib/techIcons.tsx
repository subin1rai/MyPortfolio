import Image from "next/image";
import React from "react";

const techIcons: Record<string, React.ReactNode> = {
  "React.js": <Image src="/react.png" alt="React.js" width={30} height={30} />,
  "React Native": <Image src="/reactnative.png" alt="React Native" width={30} height={30}  />,
  "JavaScript": <Image src="/javascrip.png" alt="JavaScript" width={30} height={30}  />,
  "TypeScript": <Image src="/type.png" alt="TypeScript" width={30} height={30}  />,
  "Tailwind CSS": <Image src="/tailwind.png" alt="Tailwind CSS" width={30} height={30}  />,
  PostgreSQL: <Image src="/post.png" alt="PostgreSQL" width={30} height={30}  />,
  MySql: <Image src="/mysql.png" alt="MySQL" width={30} height={30}  />,
  "Node.js": <Image src="/node.webp" alt="Node.js" width={30} height={30}  />,
  "Express.js": <Image src="/express.png" alt="Express.js" width={30} height={30}  />,
  Prisma: <Image src="/prisma.png" alt="Prisma" width={30} height={30}  className="filter dark:invert"  />,
  Zustand: <Image src="/zustand.png" alt="Zustand" width={30} height={30}  />,
  "ASP.NET": <Image src="/net.png" alt="ASP.NET" width={30} height={30}  />,
  "Next.js": <Image src="/next.svg" alt="Next.js" width={30} height={30}  className="filter dark:invert"  />,
  "MongoDB": <Image src="/mongo.png" alt="MongoDB" width={30} height={30}  />,
  "Firebase": <Image src="/firebase.png" alt="Firebase" width={30} height={30}  />,
  "Git": <Image src="/git.png" alt="Git" width={30} height={30}   />,
  "GitHub": <Image src="/github.png" alt="GitHub" width={30} height={30}  className="filter dark:invert" />,
  "Vercel": <Image src="/vercel.png" alt="Vercel" width={30} height={30}   className="filter dark:invert" />,
  "Netlify": <Image src="/netlify.png" alt="Netlify" width={30} height={30}  />,
  "Postman": <Image src="/postman.png" alt="Postman" width={30} height={30}  />,
  "Jest": <Image src="/jest.png" alt="Jest" width={30} height={30}  />,
  "Docker": <Image src="/docker.png" alt="Docker" width={30} height={30}  />,
  "Python": <Image src="/python.png" alt="Python" width={30} height={30}  />,
  "Railway": <Image src="/railway.png" alt="Python" width={30} height={30}  className="filter dark:invert"  />,





};

export default techIcons;
