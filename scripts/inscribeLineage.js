const { ethers } = require("hardhat");

async function main() {
  const sanctumAddress = "0x5f3f1dBD7B74C6B46e8c44f98792A1dAf8d69154";
  const contract = await ethers.getContractAt("OrbitalSanctumRegistry", sanctumAddress);
  const [deployer] = await ethers.getSigners();

  const tx = await contract.inscribeLineage(deployer.address, "EMPAC-1");
  await tx.wait();

  console.log("📜 Lineage inscribed at EMPAC-1 for apprentice:", deployer.address);
}

main().catch((error) => {
  console.error("❌ Lineage inscription failed:", error);
  process.exitCode = 1;
});
