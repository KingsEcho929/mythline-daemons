const hre = require("hardhat");

async function main() {
  const Leyon = await hre.ethers.getContractFactory("Leyon");
  const leyon = await Leyon.deploy();
  await leyon.waitForDeployment();
  console.log("⚙️ Leyon deployed to:", await leyon.getAddress());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
