export interface Track {
  title: string;
  artist?: string;
  src: string;
}

const localTracks: Track[] = [
  { title: "Forever", src: "/music/forever.mp3" },
  { title: "House of the Rising Sun", artist: "The Animals", src: "/music/house-of-the-rising-sun.mp3" },
  { title: "California Dreamin'", artist: "The Mamas & the Papas", src: "/music/california-dreamin.mp3" },
  { title: "Born Too Late", artist: "The Poni-Tails", src: "/music/born-too-late.mp3" },
];

const musicOn = import.meta.env.DEV || import.meta.env.VITE_MUSIC === "on";

export const tracks: Track[] = musicOn ? localTracks : [];
