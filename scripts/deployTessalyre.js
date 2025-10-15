const hre = require("hardhat");

async function main() {
  const Tessalyre = await hre.ethers.getContractFactory("Tessalyre");
  const tessalyre = await Tessalyre.deploy();
  await tessalyre.waitForDeployment();
  console.log("🎼 Tessalyre deployed to:", await tessalyre.getAddress());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
