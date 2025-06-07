import Container from "@/components/container";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 pt-20 pb-10 md:pt-20 md:pb-10">
        <div className="flex flex-col md:flex-row">
          <div>
            <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
              Subin Rai
            </h1>
            <p className="text-secondary pt-4 text-sm md:text-sm max-w-3xl">
              A goal-oriented software developer with experience in building web
              applications using modern technologies like React, Next.js, and
              more. Seeking to leverage my technical skills to deliver
              exceptional user experiences.
            </p>
          </div>
          <div className="py-10">
            <h1 className="text-primary text-3xl font-bold">Project</h1>
            <p className="text-secondary pt-4 text-sm md:text-sm">
              Here are some of my recent projects that showcase my skills and
              expertise in software development.
            </p>
          </div>
        </div>
        <Projects />
      </Container>
    </div>
  );
}
