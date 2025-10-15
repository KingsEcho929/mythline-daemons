const hre = require("hardhat");

async function main() {
  const Oculvis = await hre.ethers.getContractFactory("Oculvis");
  const oculvis = await Oculvis.deploy();
  await oculvis.waitForDeployment();
  console.log("👁️ Oculvis deployed to:", await oculvis.getAddress());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
