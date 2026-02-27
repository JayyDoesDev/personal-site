import { Badge } from "@/components/retroui/Badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export function ProjectCard({
  name,
  description,
  image,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <div className="group border-4 border-border bg-card p-5 shadow-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="shrink-0">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-border object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-2xl font-black uppercase tracking-tight text-card-foreground">
              {name}
            </h3>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="p-2 border-2 border-border bg-primary shadow-xs active:shadow-none active:translate-x-[1px] active:translate-y-[1px] transition-all"
            >
              <ExternalLink size={18} className="text-primary-foreground" />
            </a>
          </div>

          <p className="font-bold text-sm leading-relaxed text-card-foreground/80">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[10px] py-0 px-2 uppercase border-border/50 text-card-foreground/60 dark:bg-zinc-800"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
