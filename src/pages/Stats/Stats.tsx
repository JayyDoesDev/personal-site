import { useEffect, useState } from "react";
import { loadStats, type SiteStats } from "@/lib/github";

const statusLabel: Record<string, string> = {
  online: "online",
  idle: "idle",
  dnd: "do not disturb",
  offline: "offline",
};

function formatAge(ms: number): string {
  const minutes = Math.max(0, Math.round((Date.now() - ms) / 60000));
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  return `${Math.round(minutes / 60)} hr ago`;
}

export default function Stats() {
  const [stats, setStats] = useState<SiteStats | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    loadStats()
      .then((s) => alive && setStats(s))
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, []);

  const total = stats ? stats.languages.reduce((sum, l) => sum + l.value, 0) : 0;
  const cards = [
    { label: "followers", value: stats?.followers },
    { label: "public repos", value: stats?.publicRepos },
    { label: "stars", value: stats?.stars },
    { label: "forks", value: stats?.forks },
  ];

  return (
    <>
      <h2 className="hose-h2 rh-boil">stats</h2>

      {failed && !stats ? (
        <p className="hose-note rh-boil-s">
          The projector jammed: GitHub didn't answer. Try again in a bit.
        </p>
      ) : (
        <>
          <ul className="hose-ovals">
            {cards.map((c) => (
              <li key={c.label} className="hose-oval rh-boil">
                <span className="hose-oval-num">{c.value ?? "…"}</span>
                <span className="hose-oval-label">{c.label}</span>
              </li>
            ))}
          </ul>

          <p className="hose-discord rh-boil-s">
            Discord:{" "}
            <span className={`hose-dot hose-dot-${stats?.discord ?? "offline"}`} aria-hidden="true" />{" "}
            {stats ? (stats.discord ? statusLabel[stats.discord] ?? stats.discord : "unknown") : "…"}
          </p>

          <h2 className="hose-h2 rh-boil">top languages</h2>
          <ul className="hose-bars rh-boil-s">
            {(stats?.languages ?? []).map((l) => {
              const pct = total ? Math.round((l.value / total) * 100) : 0;
              return (
                <li key={l.label} className="hose-bar-row">
                  <span>{l.label}</span>
                  <span className="hose-bar-track" aria-hidden="true">
                    <span className="hose-bar-fill" style={{ width: `${pct}%` }} />
                  </span>
                  <span className="hose-bar-pct">{pct}%</span>
                </li>
              );
            })}
          </ul>

          {stats && (
            <p className="hose-note rh-boil-s">
              Pulled from GitHub {formatAge(stats.fetchedAt)}, by share of public repos.
            </p>
          )}
        </>
      )}
    </>
  );
}
