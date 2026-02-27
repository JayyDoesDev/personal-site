import antiBotImg from "../../assets/anti-bot.png";
import altDetectorImg from "../../assets/altdetector.webp";
import kikuImg from "../../assets/kiku.png";
import { ProjectCard } from "@/components/ProjectCard";

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const projects = [
  {
    name: "Anti-Bot",
    description:
      "Anti-Bot is an Advanced AutoMod Discord Bot with features like tags, auto responders, tickets, and configuration. Used by over 2500+ servers and supporting 1M+ users",
    image: antiBotImg,
    link: "https://antibot.tb1.pw/",
    tags: ["TypeScript", "Mongodb", "Redis"],
  },
  {
    name: "Alt Detector",
    description:
      "Alt Detector allows you to set days limits on user accounts that have to be for joining the server. Used by over 3000+ servers and supporting 1M+ users ",
    image: altDetectorImg,
    link: "https://alt-detector.tb1.pw/",
    tags: ["TypeScript", "Mongodb", "Redis", "Next.js"],
  },
  {
    name: "Jasper",
    description:
      "🔍🔨 A multipurpose Discord bot for the No Text To Speech Discord!",
    image:
      "https://raw.githubusercontent.com/JayyDoesDev/jasper/main/.github/assets/jasper.png",
    link: "https://github.com/jayydoesdev/jasper",
    tags: ["TypeScript", "Kotlin", "Go", "Redis", "Mongodb", "Svelte"],
  },
  {
    name: "Aira",
    description:
      "🤖 Aira, a Dandadan character themed ai powered Discord bot using",
    image:
      "https://github.com/JayyDoesDev/airo/raw/main/.github/assets/aira.png",
    link: "https://github.com/jayydoesdev/airo",
    tags: ["Go"],
  },
  {
    name: "Kiku",
    description: "💐🌻Kiku, my custom sharex upload server.",
    image: kikuImg,
    link: "https://github.com/jayydoesdev/kiku",
    tags: ["Go"],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-2">
        <h1 className="text-5xl font-black uppercase tracking-tighter text-foreground">
          Projects
        </h1>
        <div className="h-2 w-54 bg-primary" />
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 ">
        {projects.map((project: Project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
