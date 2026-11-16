import { copyFileSync, rmSync } from "node:fs";

copyFileSync("dist/index.html", "dist/404.html");

if (process.env.VITE_MUSIC !== "on") {
  rmSync("dist/music", { recursive: true, force: true });
}
