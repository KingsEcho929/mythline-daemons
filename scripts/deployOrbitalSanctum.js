const hre = require("hardhat");

async function main() {
  const OrbitalSanctum = await hre.ethers.getContractFactory("OrbitalSanctum");
  const sanctum = await OrbitalSanctum.deploy();
  await sanctum.waitForDeployment();
  console.log("🛰️ Orbital Sanctum deployed to:", await sanctum.getAddress());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
