const { ethers } = require("hardhat");

async function main() {
  const sanctumAddress = "0x5f3f1dBD7B74C6B46e8c44f98792A1dAf8d69154";
  const contract = await ethers.getContractAt("OrbitalSanctumRegistry", sanctumAddress);
  const [deployer] = await ethers.getSigners();

  const sanctum = await contract.getOrbitalSanctum(deployer.address);

  console.log("🔭 Sanctum Geometry:");
  console.log("  City:", sanctum.city);
  console.log("  Corridor:", sanctum.corridor);
  console.log("  Node:", sanctum.node);
  console.log("  Activated:", sanctum.activated);
}

main().catch((error) => {
  console.error("❌ Sanctum echo failed:", error);
  process.exitCode = 1;
});
