import "./App.css";
import "./styles/hose.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useTheme } from "@/lib/theme";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { FilmFilters, FilmOverlay } from "@/components/hose/FilmFX";
import { Clouds } from "@/components/hose/Clouds";
import { isWebKitOnly } from "@/lib/browser";
import { Intro } from "@/components/hose/Intro";
import { Footer, Header } from "@/components/hose/Header";
import { MusicProvider } from "@/components/music/MusicProvider";
import { NowPlaying } from "@/components/music/NowPlaying";
import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";

const lite = isWebKitOnly();

function Stage() {
  const { theme } = useTheme();

  return (
    <div className={`hose-root hose-${theme}${lite ? " hose-lite" : ""}`}>
      <FilmFilters lite={lite} />
      <FilmOverlay />
      <Clouds />
      <NowPlaying />
      <main className="hose-main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/projects" element={<Navigate to={{ pathname: "/", hash: "#projects" }} replace />} />
          <Route path="/tools" element={<Navigate to={{ pathname: "/", hash: "#tools" }} replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </main>
      <Intro />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MusicProvider>
          <Stage />
        </MusicProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
