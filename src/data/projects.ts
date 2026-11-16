export interface Project {
  name: string;
  description: string;
  link?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: "Anti-Bot",
    description:
      "an advanced AutoMod Discord bot with tags, auto responders, tickets and configuration. Used by 2,500+ servers and 1M+ users.",
    link: "https://anti.vdev.bot",
    tags: ["TypeScript", "MongoDB", "Redis"],
  },
  {
    name: "Alt Detector",
    description:
      "set a minimum account age for anyone joining your server. Used by 3,000+ servers and 1M+ users.",
    link: "https://alt.vdev.bot",
    tags: ["TypeScript", "MongoDB", "Redis", "Next.js"],
  },
  {
    name: "Jasper",
    description: "a multipurpose Discord bot for the No Text To Speech Discord.",
    link: "https://github.com/jayydoesdev/jasper",
    tags: ["TypeScript", "Kotlin", "Go", "Redis", "MongoDB", "Svelte"],
  },
  {
    name: "Aira",
    description: "a Dandadan character themed, AI powered Discord bot.",
    link: "https://github.com/jayydoesdev/airo",
    tags: ["Go"],
  },
  {
    name: "Kiku",
    description: "my custom ShareX upload server.",
    link: "https://github.com/jayydoesdev/kiku",
    tags: ["Go"],
  },
  {
    name: "Asakawa",
    description:
      "an academic AI assistant for Discord, built in Go on DeepSeek. She explains anything at your level, renders LaTeX, plots and solves equations, writes step-by-step proofs, makes flashcards and citations, searches the web for sources, and remembers what you're studying.",
    tags: ["Go", "DeepSeek"],
  },
];

export const links = {
  github: "https://github.com/JayyDoesDev",
  discord: "https://discord.com/users/419958345487745035",
  avatar: "https://github.com/JayyDoesDev.png?size=200",
};
