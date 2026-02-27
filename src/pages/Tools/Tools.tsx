import { Terminal, Database, Layout, Cpu } from "lucide-react";

interface ToolCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
}

const toolset: ToolCategory[] = [
  {
    title: "Backend & Runtime",
    icon: <Database size={20} />,
    items: ["Node.js", "Go", "Java", "Python"],
    color: "#C4A1FF",
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    items: ["MongoDB", "Redis", "PostgreSQL"],
    color: "#00FF9F",
  },
  {
    title: "Frontend & Styling",
    icon: <Layout size={20} />,
    items: ["React", "TypeScript", "JavaScript", "Less.js", "Tailwind CSS"],
    color: "#00E5FF",
  },
  {
    title: "DevOps & Workflow",
    icon: <Terminal size={20} />,
    items: ["Docker", "Makefile", "Gulp.js", "Git", "Ubuntu Linux"],
    color: "#FF2E63",
  },
  {
    title: "Operating Systems",
    icon: <Cpu size={20} />,
    items: ["macOS", "Windows", "Linux"],
    color: "#FFD700",
  },
];

export default function Tools() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-2">
        <h1 className="text-5xl font-black uppercase tracking-tighter text-foreground">
          Tools
        </h1>
        <div className="h-2 w-34 bg-secondary" />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {toolset.map((cat) => (
          <div
            key={cat.title}
            className="border-4 border-border bg-card p-6 shadow-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-2 border-2 border-border shadow-xs"
                style={{ backgroundColor: cat.color }}
              >
                {cat.icon}
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-card-foreground">
                {cat.title}
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {cat.items.map((tool) => (
                <div
                  key={tool}
                  className="px-3 py-1 border-2 border-border font-bold text-sm bg-background text-foreground shadow-xs"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Fun System Specs Footer */}
      <div className="mt-4 p-4 border-4 border-border border-dashed bg-muted/30">
        <p className="font-mono text-xs uppercase font-bold text-muted-foreground flex items-center gap-2">
          <Cpu size={14} /> System_Capabilities.log — Last scanned: Feb 2026
        </p>
      </div>
    </div>
  );
}
