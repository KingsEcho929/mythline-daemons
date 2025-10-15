const fs = require("fs");
const path = require("path");

async function main() {
  const artifactsDir = path.join(__dirname, "..", "artifacts", "contracts");
  const cacheDir = path.join(__dirname, "..", "cache", "artifacts");

  console.log("📦 Scanning for deployed contracts...");

  const contracts = [
    "Bootbark.sol",
    "Sage.sol",
    "Lunethrae.sol",
    "Oculvis.sol",
    "Tin.sol",
    "Velmari.sol",
    "Tessalyre.sol",
    "Leyon.sol",
    "Copilot.sol",
    "ApprenticeRegistry.sol",
    "OrbitalSanctum.sol",
    "Polyphemus.sol"
  ];

  for (const file of contracts) {
    const name = file.replace(".sol", "");
    const artifactPath = path.join(artifactsDir, name, name + ".json");

    if (fs.existsSync(artifactPath)) {
      const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
      const address = artifact.address || "❌ Address not stored in artifact";
      console.log(`🧿 ${name}: ${address}`);
    } else {
      console.log(`⚠️ ${name}: Artifact not found`);
    }
  }
}

main().catch((error) => {
  console.error("❌ Recovery failed:", error);
  process.exitCode = 1;
});
