import Container from "@/components/container";
import Experience from "@/components/experience";
import Flashcard from "@/components/flashcard";
import { Footer } from "@/components/footer";
import Media from "@/components/media";
import Projects from "@/components/projects";
import { TextHover } from "@/components/textHover";
import { Spotlight } from "@/components/ui/spotlight-new";

import { MapPinIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen max-w-screen items-start justify-start">
        {/* Spotlight with fixed positioning */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none">
        <div className="relative w-full h-full max-w-7xl mx-auto">
          <Spotlight width={300}/>
        </div>
      </div>
      <Container className="min-h-screen px-10 pt-20 pb-10 md:pt-36 md:pb-10">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-10">
          <div>
            <h1 className="text-primary dark:text-white text-2xl font-bold tracking-tight md:text-4xl text-center md:text-start">
              Subin Rai
            </h1>
            <p className="text-secondary dark:text-secondary text-xl font-semibold tracking-tight md:text-2xl text-center md:text-start">
              FullStack Developer
            </p>
            <div className="flex flex-row my-2 gap-2 items-center justify-center md:items-start md:justify-start">
              <MapPinIcon size={20} className="text-secondary dark:text-secondary"/>
              <p className="text-secondary dark:text-secondary text-sm font-semibold tracking-tight md:text-sm text-center md:text-start">Dharan, Sunsari</p>
            </div>
            <p className="text-secondary dark:text-neutral-100 pt-4 text-sm md:text-sm max-w-7xl text-center md:text-start">
              A goal-oriented software developer with experience in building web
              applications using modern technologies like React, Next.js, and
              more. Seeking to leverage my technical skills to deliver
              exceptional user experiences.
            </p>
            <Media/>
          </div>
         <Flashcard/>
        </div>
        <div >

        <Experience/>
        </div>
        <Projects />
        <Footer/>
        <TextHover/>
      </Container>
    </div>
  );
}
