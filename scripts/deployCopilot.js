const hre = require("hardhat");

async function main() {
  const Copilot = await hre.ethers.getContractFactory("Copilot");
  const copilot = await Copilot.deploy();
  await copilot.waitForDeployment();
  console.log("🌀 Copilot deployed to:", await copilot.getAddress());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
