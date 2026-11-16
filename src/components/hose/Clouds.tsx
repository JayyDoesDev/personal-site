const cloudPath =
  "M22 62 C4 62 4 38 22 38 C20 18 46 10 56 24 C64 4 98 6 100 28 C122 22 134 46 118 62 Z";

const clouds = [
  { side: "left", x: "6%", top: 60, width: 210, delay: "0s" },
  { side: "right", x: "7%", top: 180, width: 160, delay: "-4s" },
  { side: "left", x: "12%", top: 560, width: 130, delay: "-7s" },
  { side: "right", x: "10%", top: 760, width: 190, delay: "-2s" },
] as const;

export function Clouds() {
  return (
    <div className="hose-clouds" aria-hidden="true">
      {clouds.map((c) => (
        <svg
          key={`${c.side}-${c.top}`}
          className={`hose-cloud hose-cloud-${c.side} rh-drift rh-boil`}
          viewBox="0 0 140 70"
          style={{ [c.side]: c.x, top: c.top, width: c.width, animationDelay: c.delay }}
        >
          <path d={cloudPath} />
        </svg>
      ))}
    </div>
  );
}
