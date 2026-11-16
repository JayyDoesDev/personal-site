import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { tracks } from "@/data/music";
import { MusicContext, type MusicValue } from "@/lib/music";

export function MusicProvider({ children }: { children: ReactNode }) {
  const audio = useRef<HTMLAudioElement>(null);
  const wantPlay = useRef(false);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const track = tracks.length ? tracks[index % tracks.length] : null;

  useEffect(() => {
    if (audio.current) audio.current.volume = 0.5;
  }, []);

  useEffect(() => {
    const el = audio.current;
    if (el && wantPlay.current) el.play().catch(() => setPlaying(false));
  }, [index]);

  const play = useCallback(() => {
    wantPlay.current = true;
    audio.current?.play().catch(() => setPlaying(false));
  }, []);

  const prime = useCallback(() => {
    const el = audio.current;
    if (!el) return;
    wantPlay.current = true;
    el.muted = true;
    el.play().catch(() => setPlaying(false));
  }, []);

  const start = useCallback(() => {
    const el = audio.current;
    if (!el) return;
    wantPlay.current = true;
    el.currentTime = 0;
    el.muted = false;
    if (el.paused) el.play().catch(() => setPlaying(false));
  }, []);

  const toggle = useCallback(() => {
    const el = audio.current;
    if (!el) return;
    el.muted = false;
    if (el.paused) {
      wantPlay.current = true;
      el.play().catch(() => setPlaying(false));
    } else {
      wantPlay.current = false;
      el.pause();
    }
  }, []);

  const next = useCallback(() => {
    if (tracks.length < 2) return;
    setIndex((i) => (i + 1) % tracks.length);
  }, []);

  const value = useMemo<MusicValue>(
    () => ({ track, playing, hasMany: tracks.length > 1, play, prime, start, toggle, next }),
    [track, playing, play, prime, start, toggle, next],
  );

  return (
    <MusicContext.Provider value={value}>
      {children}
      {track && (
        <audio
          ref={audio}
          src={track.src}
          preload="none"
          loop={tracks.length === 1}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => {
            wantPlay.current = true;
            setIndex((i) => (i + 1) % tracks.length);
          }}
        />
      )}
    </MusicContext.Provider>
  );
}
