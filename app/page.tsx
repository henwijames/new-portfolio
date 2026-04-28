import Header from "@/components/header";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-6 md:auto-rows-[minmax(160px,auto)]">
      <Header className="md:col-span-6" />
      <About className="md:col-span-4" />
      <Experience className="md:col-span-2" />
      <TechStack className="md:col-span-6" />
      <Projects className="md:col-span-6 md:row-span-2 mb-15" />
    </div>
  );
}
