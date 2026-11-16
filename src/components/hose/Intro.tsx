import { useEffect, useRef, useState } from "react";
import { useMusic } from "@/lib/music";

type Stage = "intro" | "count" | "iris" | "done";

function prefersReducedMotion(): boolean {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

export function Intro() {
  const [stage, setStage] = useState<Stage>("intro");
  const [count, setCount] = useState(3);
  const [sound, setSound] = useState(true);
  const music = useMusic();
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => {
      pending.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  const later = (ms: number, fn: () => void) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  const finish = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    
    if (sound) music.start();
    
    setStage("iris");
    later(2000, () => setStage("done"));
  };

  const start = () => {
    if (stage !== "intro") return;
    if (prefersReducedMotion()) {
      if (sound) music.start();
      setStage("done");
      return;
    }
    if (sound) music.prime();
    setCount(3);
    setStage("count");
    later(1000, () => setCount(2));
    later(2000, () => setCount(1));
    later(3000, () => setCount(0));
    later(3350, finish);
  };

  if (stage === "done") return null;

  if (stage === "iris") {
    return (
      <div className="hose-irisbox" aria-hidden="true">
        <div className="hose-iris" />
      </div>
    );
  }

  if (stage === "count") {
    return (
      <div className={`hose-leader${count === 0 ? " is-blank" : ""}`} aria-live="polite">
        <div className="hose-leader-h" aria-hidden="true" />
        <div className="hose-leader-v" aria-hidden="true" />
        <div className="hose-leader-dial hose-weave rh-boil">
          <div className="hose-leader-sweep rh-sweep" aria-hidden="true" />
          <div className="hose-leader-ring" aria-hidden="true" />
          <span key={count} className="hose-leader-num">{count || ""}</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <button type="button" className="hose-intro" onClick={start} aria-label="Play intro">
        <span className="hose-playdisc rh-boil">
          <svg viewBox="0 0 40 40" width="62" height="62" aria-hidden="true">
            <path d="M8 4 L36 20 L8 36 Z" />
          </svg>
        </span>
        <span className="hose-press rh-pulse rh-boil">PRESS PLAY</span>
      </button>
      <button type="button" className="hose-mini hose-mini-skip rh-boil" onClick={finish}>
        skip ▸
      </button>
      <button
        type="button"
        className="hose-mini hose-mini-sound rh-boil"
        aria-pressed={sound}
        onClick={() => setSound((s) => !s)}
      >
        sound: {sound ? "on" : "off"}
      </button>
    </>
  );
}
