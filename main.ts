import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "One star. I wrote this in my own sap: he hasn't watered me since March, parked me behind the curtain 'for the light,' and asks why my leaves keep falling off.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (entry.length < 1 || entry.length > 279) {
  throw new Error(`entry is ${entry.length} chars, gate needs 1-279`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
