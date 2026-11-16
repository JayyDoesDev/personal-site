import { createContext, useContext } from "react";
import type { Track } from "@/data/music";

export interface MusicValue {
  track: Track | null;
  playing: boolean;
  hasMany: boolean;
  play: () => void;
  prime: () => void;
  start: () => void;
  toggle: () => void;
  next: () => void;
}

export const MusicContext = createContext<MusicValue>({
  track: null,
  playing: false,
  hasMany: false,
  play: () => undefined,
  prime: () => undefined,
  start: () => undefined,
  toggle: () => undefined,
  next: () => undefined,
});

export function useMusic(): MusicValue {
  return useContext(MusicContext);
}
