import { Badge } from "@/components/retroui/Badge";
import { LanguagePieChart } from "@/components/LanguagePieChart";
import { useState, useEffect } from "react";
import { Loader } from "@/components/retroui/Loader";
import {
  type GithubStats,
  type JAPIUserResponse,
  type GithubRepository,
} from "./types";
import avatar from "../../assets/avatar.png";

export default function Home() {
  const [status, setStatus] = useState<string>("");
  const [languages, setLanguages] = useState<
    { label: string; value: number; color: string }[]
  >([]);
  const [githubStats, setGithubStats] = useState<GithubStats | null>(null);

  const chartColors = ["#C4A1FF", "#00E5FF", "#FFD700", "#FF2E63", "#00FF9F"];

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const discordRes = await fetch(
          "https://japi.rest/discord/v1/user/419958345487745035",
        );

        const discordData: Pick<JAPIUserResponse, "presence"> =
          await discordRes.json();

        const profileRes = await fetch(
          "https://api.github.com/users/jayydoesdev",
        );
        const profileData: GithubStats = await profileRes.json();

        const reposRes = await fetch(
          "https://api.github.com/users/jayydoesdev/repos?per_page=100",
        );
        const repos: GithubRepository[] = await reposRes.json();

        let totalStars = 0;
        const langCounts: Record<string, number> = {};

        repos.forEach((repo: GithubRepository) => {
          totalStars += repo.stargazers_count;
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          }
        });

        const formattedLangs = Object.entries(langCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([label, value], i) => ({
            label,
            value,
            color: chartColors[i % chartColors.length],
          }));

        setStatus(discordData.presence.status);
        setLanguages(formattedLangs);
        setGithubStats({
          followers: profileData.followers,
          public_repos: profileData.public_repos,
          total_stars: totalStars,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGithubData();
  }, []);
  return (
    <div className="flex flex-col gap-12 transition-colors duration-300">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10 py-4">
        <div className="shrink-0">
          <img
            src={avatar}
            className="w-48 h-48 border-4 border-border shadow-md object-cover"
            alt="Tarab1te Avatar"
          />
        </div>

        <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
          <h1 className="text-5xl font-black uppercase tracking-tight text-foreground">
            Tarab1te
          </h1>
          <div className="h-1 w-full bg-border hidden md:block" />
          <p className="text-xl font-bold leading-normal max-w-2xl text-foreground/80">
            I'm a computer science student with a passion for coding and anime.
            I tinker with mainly backend. Trumpet player, basketball player, and
            developer!
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Discord: {status}</Badge>
            {githubStats && (
              <>
                {/* Total Stars */}
                <Badge variant="solid" className="bg-[#C4A1FF] text-black">
                  {githubStats.total_stars} Stars
                </Badge>

                {/* Followers */}
                <Badge
                  variant="outline"
                  className="border-[#00E5FF] text-[#00E5FF] dark:text-[#00E5FF] shadow-[2px_2px_0px_0px_rgba(0,229,255,0.3)]"
                >
                  {githubStats.followers} Followers
                </Badge>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex flex-col gap-6">
        <div className="bg-black text-[#C4A1FF] p-3 font-mono text-sm border-2 border-black shadow-sm flex items-center gap-3">
          <span className="text-[#00FF9F]">tarab1te@dev:~$</span>
          <span className="animate-pulse">
            curl -s https://api.github.com/users/jayydoesdev --silent
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.length > 0 ? (
            <LanguagePieChart data={languages} />
          ) : (
            <div className="flex items-center justify-center border-4 border-border bg-card shadow-md p-12">
              <Loader />
            </div>
          )}

          {/* Other Stats */}
          <div className="border-4 border-border bg-card p-6 shadow-md flex flex-col justify-center gap-4 transition-colors">
            <h3 className="text-xl font-black uppercase border-b-2 border-border pb-2 text-card-foreground">
              User Metrics
            </h3>
            <div className="flex justify-between font-bold text-lg text-card-foreground">
              <span>Public Repos:</span>
              <span className="text-[#C4A1FF] drop-shadow-[0_0_8px_rgba(196,161,255,0.4)]">
                {githubStats?.public_repos || 0}
              </span>
            </div>
            <div className="flex justify-between font-bold text-lg text-card-foreground">
              <span>Global Rank:</span>
              <span className="text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">
                N/A (Tinkering)
              </span>
            </div>
            <div className="flex justify-between font-bold text-lg text-card-foreground">
              <span>Backend Focus:</span>
              <span className="text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">
                High
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
