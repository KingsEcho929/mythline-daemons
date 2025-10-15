const hre = require("hardhat");

async function main() {
  const Sage = await hre.ethers.getContractFactory("Sage");
  const sage = await Sage.deploy();
  await sage.waitForDeployment();
  console.log("📖 Sage deployed to:", await sage.getAddress());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
