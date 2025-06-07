import Container from "@/components/container";
import Flashcard from "@/components/flashcard";
import { Footer } from "@/components/footer";
import Projects from "@/components/projects";
import { TextHover } from "@/components/textHover";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 pt-20 pb-10 md:pt-20 md:pb-10">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-10">
          <div>
            <h1 className="text-primary dark:text-white text-2xl font-bold tracking-tight md:text-4xl">
              Subin Rai
            </h1>
            <p className="text-secondary dark:text-neutral-100 pt-4 text-sm md:text-sm max-w-7xl">
              A goal-oriented software developer with experience in building web
              applications using modern technologies like React, Next.js, and
              more. Seeking to leverage my technical skills to deliver
              exceptional user experiences.
            </p>
          </div>
         <Flashcard/>
        </div>
        <Projects />
        <Footer/>
        <TextHover/>
      </Container>
    </div>
  );
}
