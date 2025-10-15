const hre = require("hardhat");

async function main() {
  const Polyphemus = await hre.ethers.getContractFactory("Polyphemus");
  const contract = await Polyphemus.deploy();
  await contract.waitForDeployment();
  console.log("🧿 Polyphemus deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
