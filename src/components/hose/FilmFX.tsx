import { useState } from "react";

const posterTable = "0.08 0.35 0.62 0.86 1";

function makeNoiseTile(): string {
  try {
    const size = 160;
    const canvas = document.createElement("canvas");
    
    canvas.width = size;
    canvas.height = size;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return "";
    
    const img = ctx.createImageData(size, size);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 255;
      img.data[i] = v;
      img.data[i + 1] = v;
      img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    return canvas.toDataURL("image/png");
  } catch {
    return "";
  }
}

export function FilmFilters({ lite = false }: { lite?: boolean }) {
  return (
    <svg aria-hidden="true" width="0" height="0" className="hose-defs">
      <filter id="rhBoil" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="turbulence" baseFrequency="0.035" numOctaves={2} seed={1} result="n">
          {!lite && <animate attributeName="seed" values="1;2;3;4" dur="0.33s" calcMode="discrete" repeatCount="indefinite" />}
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="n" scale={3.5} xChannelSelector="R" yChannelSelector="G" />
      </filter>
      {lite &&
        [
          ["rhBoilA", 3],
          ["rhBoilB", 8],
          ["rhBoilC", 13],
        ].map(([id, seed]) => (
          <filter key={id} id={String(id)} x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="turbulence" baseFrequency="0.035" numOctaves={2} seed={Number(seed)} result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale={3.5} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        ))}
      <filter id="rhBoilSoft" x="-3%" y="-10%" width="106%" height="120%">
        <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves={2} seed={1} result="n">
          {!lite && <animate attributeName="seed" values="1;2;3;4" dur="0.33s" calcMode="discrete" repeatCount="indefinite" />}
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="n" scale={1.6} xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="rhPoster" colorInterpolationFilters="sRGB">
        <feComponentTransfer>
          <feFuncR type="discrete" tableValues={posterTable} />
          <feFuncG type="discrete" tableValues={posterTable} />
          <feFuncB type="discrete" tableValues={posterTable} />
        </feComponentTransfer>
        <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves={1} result="g">
          {!lite && <animate attributeName="seed" values="2;6;10;14" dur="0.25s" calcMode="discrete" repeatCount="indefinite" />}
        </feTurbulence>
        <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.9 0.55" result="speck" />
        <feComposite in="speck" in2="SourceGraphic" operator="in" result="speckIn" />
        <feBlend in="SourceGraphic" in2="speckIn" mode="multiply" />
      </filter>
      <filter id="rhGrain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} stitchTiles="stitch">
          {!lite && <animate attributeName="seed" values="1;5;9;13" dur="0.25s" calcMode="discrete" repeatCount="indefinite" />}
        </feTurbulence>
        <feColorMatrix type="saturate" values="0" />
      </filter>
    </svg>
  );
}

const scratches = [
  { left: "22%", width: 2, color: "rgba(0,0,0,0.5)", delay: "0s", duration: "3.1s" },
  { left: "71%", width: 1, color: "rgba(0,0,0,0.4)", delay: "-1.4s", duration: "2.3s" },
  { left: "48%", width: 1, color: "rgba(255,255,255,0.6)", delay: "-0.7s", duration: "4.2s" },
];

const dust = [
  { left: "14%", top: "30%", w: 7, h: 5, delay: "0s" },
  { left: "63%", top: "18%", w: 4, h: 4, delay: "-0.6s" },
  { left: "82%", top: "62%", w: 9, h: 3, delay: "-1.1s" },
  { left: "36%", top: "78%", w: 5, h: 6, delay: "-1.7s" },
];

export function FilmOverlay() {
  const [noise] = useState(makeNoiseTile);

  return (
    <>
      <div
        className="hose-grain"
        aria-hidden="true"
        style={noise ? { backgroundImage: `url(${noise})` } : undefined}
      />
      <div className="hose-vignette" aria-hidden="true" />
      <div className="hose-scratches" aria-hidden="true">
        {scratches.map((s) => (
          <div
            key={s.left}
            className="rh-scratch"
            style={{ left: s.left, width: s.width, background: s.color, animationDelay: s.delay, animationDuration: s.duration }}
          />
        ))}
        {dust.map((d) => (
          <div
            key={d.left}
            className="rh-dust"
            style={{ left: d.left, top: d.top, width: d.w, height: d.h, animationDelay: d.delay }}
          />
        ))}
      </div>
    </>
  );
}
