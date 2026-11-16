import type { GithubRepository, GithubStats, JAPIUserResponse } from "@/pages/Home/types";
import { readStore, writeStore } from "./storage";

export interface SiteStats {
  followers: number;
  publicRepos: number;
  stars: number;
  forks: number;
  languages: { label: string; value: number }[];
  discord: string | null;
  fetchedAt: number;
}

const KEY = "tarab1te:stats";
const TTL = 60 * 60 * 1000;

function readCache(): SiteStats | null {
  const raw = readStore(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SiteStats;
  } catch {
    return null;
  }
}

async function fetchDiscord(): Promise<string | null> {
  try {
    const res = await fetch("https://japi.rest/discord/v1/user/419958345487745035");
    if (!res.ok) return null;
    const data: Pick<JAPIUserResponse, "presence"> = await res.json();
    return data.presence?.status ?? null;
  } catch {
    return null;
  }
}

async function fetchGithub(): Promise<Omit<SiteStats, "discord" | "fetchedAt">> {
  const [profileRes, reposRes] = await Promise.all([
    fetch("https://api.github.com/users/jayydoesdev"),
    fetch("https://api.github.com/users/jayydoesdev/repos?per_page=100"),
  ]);
  if (!profileRes.ok || !reposRes.ok) throw new Error("GitHub request failed");

  const profile: GithubStats = await profileRes.json();
  const repos: GithubRepository[] = await reposRes.json();

  let stars = 0;
  let forks = 0;
  const counts: Record<string, number> = {};
  repos.forEach((repo) => {
    stars += repo.stargazers_count;
    forks += repo.forks_count;
    if (repo.language) counts[repo.language] = (counts[repo.language] || 0) + 1;
  });

  const languages = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([label, value]) => ({ label, value }));

  return { followers: profile.followers, publicRepos: profile.public_repos, stars, forks, languages };
}

export async function loadStats(): Promise<SiteStats> {
  const cached = readCache();
  if (cached && Date.now() - cached.fetchedAt < TTL) {
    const discord = await fetchDiscord();
    return { ...cached, discord: discord ?? cached.discord };
  }

  try {
    const [github, discord] = await Promise.all([fetchGithub(), fetchDiscord()]);
    const fresh: SiteStats = { ...github, discord, fetchedAt: Date.now() };
    writeStore(KEY, JSON.stringify(fresh));
    return fresh;
  } catch (error) {
    if (cached) return cached;
    throw error;
  }
}
