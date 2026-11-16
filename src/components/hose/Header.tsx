import { Link } from "react-router-dom";
import { THEMES, useTheme } from "@/lib/theme";
import { links } from "@/data/projects";
import { isIOS, isSafari } from "@/lib/browser";

const showWebKitJoke = isSafari() && !isIOS();

export function Header() {
  const { theme, setTheme } = useTheme();
  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  return (
    <header className="hose-head">
      <Link to="/" className="hose-avatar" aria-label="Home">
        <img src={links.avatar} alt="Tarab1te's GitHub avatar" width={72} height={72} />
        <span className="hose-avatar-tint" aria-hidden="true" />
        <span className="hose-avatar-shade" aria-hidden="true" />
        <span className="hose-avatar-ring rh-boil" aria-hidden="true" />
      </Link>

      <div>
        <h1 className="hose-title rh-boil">
          <Link to="/">tarab1te</Link>
        </h1>
        <nav className="hose-nav rh-boil-s" aria-label="Main">
          <Link to={{ pathname: "/", hash: "#projects" }}>projects</Link> ★{" "}
          <Link to={{ pathname: "/", hash: "#tools" }}>tools</Link> ★{" "}
          <Link to="/stats">stats</Link>
        </nav>
      </div>

      <div className="hose-picker" role="group" aria-label="Color theme">
        <div className="hose-picker-row">
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              className="hose-sw"
              onClick={() => setTheme(t.id)}
              aria-label={`${t.label} theme`}
              aria-pressed={t.id === theme}
              title={t.label}
            >
              <span
                className={`hose-sw-dot rh-boil${t.id === theme ? " is-on" : ""}`}
                style={{ background: `linear-gradient(135deg, ${t.a} 50%, ${t.b} 50%)` }}
              />
            </button>
          ))}
        </div>
        <span className="hose-picker-label rh-boil-s">{current.label}</span>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="hose-rule rh-boil" aria-hidden="true" />
      <p className="hose-footlinks rh-boil-s">
        <a href={links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        ★{" "}
        <a href={links.discord} target="_blank" rel="noreferrer">
          Discord
        </a>
      </p>
      {showWebKitJoke && (
        <p className="hose-webkit rh-boil-s">use a browser that isn't webkit for better effects</p>
      )}
    </footer>
  );
}
