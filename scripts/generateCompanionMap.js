const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "..", "companions.json");
const outputPath = path.join(__dirname, "..", "companions.ts");

const data = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const lines = [
  "export const companions = {",
  ...Object.entries(data).map(
    ([name, address]) => `  ${name}: "${address}",`
  ),
  "};"
];

fs.writeFileSync(outputPath, lines.join("\n"));
console.log("🧿 companions.ts generated from companions.json");
