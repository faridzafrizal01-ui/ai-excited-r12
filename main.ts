import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const inputFile = "entry.png";
const outputFile = inputFile;

if (!existsSync(inputFile)) {
  throw new Error(`Missing entry image: ${inputFile}`);
}

copyFileSync(inputFile, join(outputDir, outputFile));
console.log(`Copied ${inputFile} to ${outputDir}`);
