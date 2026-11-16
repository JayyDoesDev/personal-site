import { useMusic } from "@/lib/music";

export function NowPlaying() {
  const { track, playing, hasMany, toggle, next } = useMusic();
  if (!track) return null;

  const label = track.artist ? `${track.title} by ${track.artist}` : track.title;

  return (
    <div className="hose-np" role="region" aria-label="Music player">
      <button
        type="button"
        className="hose-np-btn rh-boil"
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
          {playing ? <path d="M5 3h3.5v14H5zM11.5 3H15v14h-3.5z" /> : <path d="M5 3l12 7-12 7z" />}
        </svg>
      </button>
      <div className="hose-np-text rh-boil-s">
        <span className="hose-np-label">
          now playing
          <span className={`hose-eq${playing ? " is-on" : ""}`} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </span>
        <span className="hose-np-title" aria-live="polite">
          <span className="hose-np-scroll">{label}</span>
        </span>
      </div>
      {hasMany && (
        <button type="button" className="hose-np-btn hose-np-next rh-boil" onClick={next} aria-label="Next song">
          <svg viewBox="0 0 20 20" width="12" height="12" aria-hidden="true">
            <path d="M3 3l9 7-9 7zM13 3h3v14h-3z" />
          </svg>
        </button>
      )}
    </div>
  );
}
