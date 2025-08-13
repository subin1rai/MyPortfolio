import { Achievement } from "@/components/achievement";
import Connect from "@/components/connect";
import Container from "@/components/container";
import Experience from "@/components/experience";
import Flashcard from "@/components/flashcard";
import { Footer } from "@/components/footer";
import Media from "@/components/media";
import Projects from "@/components/projects";
import Skill from "@/components/skill";
import { TextHover } from "@/components/textHover";
import { Spotlight } from "@/components/ui/spotlight-new";

import { MapPinIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen max-w-screen items-start justify-start">
      {/* Spotlight with fixed positioning */}
      <div className="pointer-events-none fixed inset-0 h-screen w-screen">
        <div className="relative mx-auto h-full w-full max-w-6xl">
          <Spotlight width={560} />
        </div>
      </div>
      <Container className="min-h-screen px-10 pt-20 pb-10 md:pt-36 md:pb-10">
        <div
          id="about"
          className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between"
        >
          <div>
            <h1 className="text-primary text-center text-2xl font-bold tracking-tight md:text-start md:text-4xl dark:text-white">
              Subin Rai
            </h1>
            <p className="text-secondary dark:text-secondary text-center text-xl font-semibold tracking-tight md:text-start md:text-2xl">
              FullStack Developer
            </p>
            <div className="my-2 flex flex-row items-center justify-center gap-2 md:items-start md:justify-start">
              <MapPinIcon
                size={20}
                className="text-secondary dark:text-secondary"
              />
              <p className="text-secondary dark:text-secondary text-center text-sm font-semibold tracking-tight md:text-start md:text-sm">
                Dharan, Sunsari
              </p>
            </div>
            <p className="text-secondary max-w-7xl pt-4 text-center text-sm md:text-start md:text-sm dark:text-neutral-100">
              A goal-oriented software developer with experience in building web
              applications using modern technologies like React, Next.js, and
              more. Seeking to leverage my technical skills to deliver
              exceptional user experiences.
            </p>
            <Media />
          </div>
          <Flashcard />
        </div>
        <div id="experiences">
        <Experience />
        </div>
        <Skill />
        <div id="projects" className="scroll-mt-24">
          <Projects />
        </div>
        <div id="awards">
          <Achievement />
        </div>
        {/* <Connect/> */}
        <Footer />
        <TextHover />
      </Container>
    </div>
  );
}
