import { spawn } from "node:child_process";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const outputDir = path.join(projectRoot, "github-pages");
const port = "4175";
const origin = `http://127.0.0.1:${port}`;

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(path.join(projectRoot, "dist", "client"), outputDir, { recursive: true });

const server = spawn(path.join(projectRoot, "node_modules", ".bin", "vinext"), ["start", "--port", port], {
  cwd: projectRoot,
  env: { ...process.env, PORT: port },
  stdio: ["ignore", "pipe", "pipe"],
});

let serverLog = "";
server.stdout.on("data", (chunk) => { serverLog += chunk.toString(); });
server.stderr.on("data", (chunk) => { serverLog += chunk.toString(); });

async function waitForPage() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(origin);
      if (response.ok) return response.text();
    } catch {
      // The production server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Unable to render the portfolio for GitHub Pages.\n${serverLog}`);
}

try {
  let html = await waitForPage();
  html = html
    .replaceAll("/assets/", "./assets/")
    .replaceAll("/favicon.svg", "./favicon.svg")
    .replaceAll("/og.png", "./og.png");

  if (html.includes('"/assets/') || html.includes('"/favicon.svg') || html.includes('"/og.png')) {
    throw new Error("The GitHub Pages export contains unresolved root-relative assets.");
  }

  await writeFile(path.join(outputDir, "index.html"), html);
  await writeFile(path.join(outputDir, "404.html"), html);
  await writeFile(path.join(outputDir, ".nojekyll"), "");
  console.log(`GitHub Pages export created at ${outputDir}`);
} finally {
  server.kill("SIGTERM");
}
