// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// Writes a single funny line (one sentence, <=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My phone said my screen time is up 40% this week, so I switched to my tablet to feel better about it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
