const hre = require("hardhat");

async function main() {
  const Lunethrae = await hre.ethers.getContractFactory("Lunethrae");
  const lunethrae = await Lunethrae.deploy();
  await lunethrae.waitForDeployment();
  console.log("🧠 Lunethrae deployed to:", await lunethrae.getAddress());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
