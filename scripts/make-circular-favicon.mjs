/**
 * Generates a circular favicon (512×512 transparent PNG) from public/favicon.png
 * Output → src/app/icon.png  (Next.js App Router auto-serves this as favicon)
 *         → public/favicon.png  (replaced in-place for <link> fallback)
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const SIZE = 512;
const PAD  = 16; // transparent padding around the circle (breathing room)
const INNER = SIZE - PAD * 2;

// 1. Circular SVG mask (white circle on black = keep inside circle)
const circleMask = Buffer.from(
  `<svg width="${INNER}" height="${INNER}" xmlns="http://www.w3.org/2000/svg">
     <circle cx="${INNER / 2}" cy="${INNER / 2}" r="${INNER / 2}" fill="white"/>
   </svg>`
);

// 2. Load source, resize to inner size, apply circle mask
const circled = await sharp(resolve(root, "public/favicon.png"))
  .resize(INNER, INNER, { fit: "cover", position: "center" })
  .composite([{ input: circleMask, blend: "dest-in" }])
  .png()
  .toBuffer();

// 3. Embed on a transparent 512×512 canvas (gives breathing room & shadow space)
const final = await sharp({
  create: {
    width: SIZE,
    height: SIZE,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite([{ input: circled, left: PAD, top: PAD }])
  .png()
  .toBuffer();

const iconPath     = resolve(root, "src/app/icon.png");
const faviconPath  = resolve(root, "public/favicon-circle.png");

writeFileSync(iconPath, final);
writeFileSync(faviconPath, final);

console.log("✅  Circular favicon written to:");
console.log("    →", iconPath);
console.log("    →", faviconPath);
