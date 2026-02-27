import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "./Card";
import { Tabs, TabsTriggerList, TabsTrigger } from "./Tab";
import { Sun, Moon } from "lucide-react";

interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const routes = ["/", "/projects", "/tools"];
  const currentIndex = routes.indexOf(location.pathname);
  const selectedIndex = currentIndex === -1 ? 0 : currentIndex;

  return (
    <Card className="w-full bg-white dark:bg-zinc-950 transition-colors ">
      <Card.Header className="p-0 border-b-0 flex flex-row items-center justify-between pr-4">
        <Tabs
          selectedIndex={selectedIndex}
          onChange={(index: number) => navigate(routes[index])}
        >
          <TabsTriggerList className="!border-b-0 px-4 pt-4">
            <TabsTrigger className="border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] data-[selected]:bg-[#c3a0ff] data-[selected]:shadow-none data-[selected]:translate-x-[2px] data-[selected]:translate-y-[2px] transition-all dark:bg-zinc-800 dark:text-white dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)]">
              Home
            </TabsTrigger>
            <TabsTrigger className="border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] data-[selected]:bg-[#c3a0ff] data-[selected]:shadow-none data-[selected]:translate-x-[2px] data-[selected]:translate-y-[2px] transition-all dark:bg-zinc-800 dark:text-white dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)]">
              Projects
            </TabsTrigger>
            <TabsTrigger className="border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] data-[selected]:bg-[#c3a0ff] data-[selected]:shadow-none data-[selected]:translate-x-[2px] data-[selected]:translate-y-[2px] transition-all dark:bg-zinc-800 dark:text-white dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)]">
              Tools
            </TabsTrigger>
          </TabsTriggerList>
        </Tabs>

        <button
          onClick={() => setIsDark(!isDark)}
          className="mt-4 p-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] bg-[#c3a0ff] dark:bg-[#c3a0ff] transition-all"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </Card.Header>

      <Card.Content className="p-8 dark:text-zinc-100">{children}</Card.Content>

      <footer className="p-6 border-t-2 border-black bg-white/50 dark:bg-zinc-900/50">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-mono text-xs uppercase font-black tracking-widest text-black/60 dark:text-white/60">
            Made with <span className="text-[#ff7070] animate-pulse">❤</span> by
            Tarab1te
          </p>
          <div className="h-0.5 w-12 bg-black/20 dark:bg-white/20" />
          <p className="font-mono text-[10px] text-black/40 dark:text-white/40 uppercase">
            Built with React & RetroUI
          </p>
        </div>
      </footer>
    </Card>
  );
}
