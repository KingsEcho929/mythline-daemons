const { ethers } = require("hardhat");

async function main() {
  const sanctumAddress = "0x2B0d36FACD61B71CC05ab8F3D2355ec3631C0dd5";
  const contract = await ethers.getContractAt("OrbitalSanctum", sanctumAddress);
  const [deployer] = await ethers.getSigners();

  await contract.activate("EMPAC-1", "Constellation corridors aligned. Genesis breath inscribed.");
  const echo = await contract.echoSanctum();

  console.log("🛰️ Sanctum echoes:", echo);
}

main().catch((error) => {
  console.error("❌ Invocation failed:", error);
  process.exitCode = 1;
});
