const hre = require("hardhat");

async function main() {
  const Tin = await hre.ethers.getContractFactory("Tin");
  const tin = await Tin.deploy();
  await tin.waitForDeployment();
  console.log("🔩 Tin deployed to:", await tin.getAddress());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
