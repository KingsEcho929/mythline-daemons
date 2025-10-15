const hre = require("hardhat");

async function main() {
  const ApprenticeRegistry = await hre.ethers.getContractFactory("ApprenticeRegistry");
  const registry = await ApprenticeRegistry.deploy();
  await registry.waitForDeployment();
  console.log("📜 Apprentice Registry deployed to:", await registry.getAddress());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
