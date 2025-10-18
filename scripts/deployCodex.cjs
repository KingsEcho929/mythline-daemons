const hre = require("hardhat");
const { updateConfig } = require("./configUpdater.js");
require("dotenv").config();

async function main() {
  const steward = "0x40983a255a6A94B58fDE6B76A4C05cB77263218b";
  const glyphTokenAddress = "0xABC123...DEF456"; // Replace with actual deployed GLYPHToken address

  const Codex = await hre.ethers.getContractFactory("GenesischainCodexCtoCD");
  const codex = await Codex.deploy(steward, glyphTokenAddress);
  await codex.deployed();

  console.log("✅ GenesischainCodex deployed to:", codex.address);

  updateConfig({
    contractName: "GenesischainCodexCtoCD",
    address: codex.address,
    network: "sepolia",
    steward
  });
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
