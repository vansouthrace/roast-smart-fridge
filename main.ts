// Roast the Smart Fridge — one line, best laugh wins.
// Writes a single roast line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My robot vacuum mapped my whole house in one afternoon, then spent three days stuck under the same couch.";

// The gate requires 1-160 characters, single line, non-blank.
const line = roast.trim().slice(0, 160);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
