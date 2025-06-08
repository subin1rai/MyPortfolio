import Image from "next/image";
import React from "react";

const techIcons: Record<string, React.ReactNode> = {
  "React.js": (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/react.png"
        alt="React.js"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  "React Native": (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/reactnative.png"
        alt="React Native"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  JavaScript: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/javascrip.png"
        alt="JavaScript"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  TypeScript: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/type.png"
        alt="TypeScript"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  "Tailwind CSS": (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/tailwind.png"
        alt="Tailwind CSS"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  PostgreSQL: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/post.png"
        alt="PostgreSQL"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  MySql: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/mysql.png"
        alt="MySQL"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  "Node.js": (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/node.webp"
        alt="Node.js"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  "Express.js": (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/express.png"
        alt="Express.js"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  Prisma: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/prisma.png"
        alt="Prisma"
        width={30}
        height={30}
        className="h-full w-full object-contain filter dark:invert"
      />
    </div>
  ),
  Zustand: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/zustand.png"
        alt="Zustand"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  "ASP.NET": (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/net.png"
        alt="ASP.NET"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  "Next.js": (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/next.svg"
        alt="Next.js"
        width={30}
        height={30}
        className="h-full w-full object-contain filter dark:invert"
      />
    </div>
  ),
  MongoDB: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/mongo.png"
        alt="MongoDB"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  Firebase: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/firebase.png"
        alt="Firebase"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  Git: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/git.png"
        alt="Git"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  GitHub: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/github.png"
        alt="GitHub"
        width={30}
        height={30}
        className="h-full w-full object-contain filter dark:invert"
      />
    </div>
  ),
  Vercel: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/vercel.png"
        alt="Vercel"
        width={30}
        height={30}
        className="h-full w-full object-contain filter dark:invert"
      />
    </div>
  ),
  Netlify: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/netlify.png"
        alt="Netlify"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  Postman: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/postman.png"
        alt="Postman"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  Jest: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/jest.png"
        alt="Jest"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  Docker: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/docker.png"
        alt="Docker"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  Python: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/python.png"
        alt="Python"
        width={30}
        height={30}
        className="h-full w-full object-contain"
      />
    </div>
  ),
  Railway: (
    <div className="h-[15px] w-[15px] md:h-[30px] md:w-[30px]">
      <Image
        src="/railway.png"
        alt="Railway"
        width={30}
        height={30}
        className="h-full w-full object-contain filter dark:invert"
      />
    </div>
  ),
};

export default techIcons;
