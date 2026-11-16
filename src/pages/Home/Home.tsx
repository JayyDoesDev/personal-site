import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "@/data/projects";
import { tools } from "@/data/tools";
import { useTheme } from "@/lib/theme";

export default function Home() {
  const { hash } = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <>
      <p className="hose-bio rh-boil-s">
        I'm a computer science student with a passion for coding and anime. I tinker with mainly
        backend. Trumpet player, basketball player, and developer!
      </p>

      <h2 id="projects" className="hose-h2 rh-boil">
        projects
      </h2>
      <ul className="hose-projects rh-boil-s">
        {projects.map((p) => (
          <li key={p.name}>
            {p.link ? (
              <a href={p.link} target="_blank" rel="noreferrer" className="hose-project-name">
                {p.name}
                <span aria-hidden="true"> ↗</span>
              </a>
            ) : (
              <b className="hose-project-name">{p.name}</b>
            )}
            : {p.description}
          </li>
        ))}
      </ul>

      <h2 id="tools" className="hose-h2 rh-boil">
        tools
      </h2>
      <ul className="hose-tools" aria-label="Tools">
        {tools.map((t) => (
          <li key={t.name} className="hose-tool">
            <span className="hose-tool-disc rh-boil" tabIndex={0} role="img" aria-label={t.name}>
              {t.path ? (
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path d={t.path} fill={theme === "cherry" && t.hex ? t.hex : "var(--ink)"} />
                </svg>
              ) : (
                <span className="hose-tool-mark">{t.mark}</span>
              )}
            </span>
            <span className="hose-tip rh-boil-s" aria-hidden="true">
              {t.name}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
