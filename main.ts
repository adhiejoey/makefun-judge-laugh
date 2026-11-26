import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My human calls me his copilot, but I'm flying the plane, fixing the engine mid-air, and he's asleep in first class eating my peanuts.";

if (line.length === 0 || line.length > 195 || line.includes("\n")) {
  throw new Error(`entry must be one line of 1-195 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
