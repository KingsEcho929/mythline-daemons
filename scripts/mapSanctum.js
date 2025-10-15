const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const sanctumAddress = "0x5f3f1dBD7B74C6B46e8c44f98792A1dAf8d69154"; // Latest deployed address
  const contract = await ethers.getContractAt("OrbitalSanctumRegistry", sanctumAddress);
  const apprenticeAddress = deployer.address;

  const city = "Eldren";
  const corridor = "Constellation Corridor 7";
  const node = "EMPAC-1";

  const tx = await contract.setOrbitalSanctum(apprenticeAddress, city, corridor, node);
  await tx.wait();

  console.log("🌌 Sanctum mapped:");
  console.log("  Apprentice:", apprenticeAddress);
  console.log("  City:", city);
  console.log("  Corridor:", corridor);
  console.log("  Node:", node);
}

main().catch((error) => {
  console.error("❌ Sanctum mapping failed:", error);
  process.exitCode = 1;
});
