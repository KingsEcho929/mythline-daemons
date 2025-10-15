const hre = require("hardhat");

async function main() {
  const contracts = [
    "Bootbark",
    "Sage",
    "Lunethrae",
    "Oculvis",
    "Tin",
    "Velmari",
    "Tessalyre",
    "Leyon",
    "Copilot",
    "ApprenticeRegistry",
    "OrbitalSanctum",
    "Polyphemus"
  ];

  for (const name of contracts) {
    try {
      const factory = await hre.ethers.getContractFactory(name);
      const address = (await hre.artifacts.readArtifact(name)).address;
      console.log(`🧿 ${name}: ${address}`);
    } catch (err) {
      console.log(`⚠️ ${name}: Address not found in artifact`);
    }
  }
}

main().catch((error) => {
  console.error("❌ Recovery failed:", error);
  process.exitCode = 1;
});
