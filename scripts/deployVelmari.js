const hre = require("hardhat");

async function main() {
  const Velmari = await hre.ethers.getContractFactory("Velmari");
  const velmari = await Velmari.deploy();
  await velmari.waitForDeployment();
  console.log("🌊 Velmari deployed to:", await velmari.getAddress());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
