const hre = require("hardhat");

async function main() {
  const Sanctum = await hre.ethers.getContractFactory("OrbitalSanctumRegistry");
  const sanctum = await Sanctum.deploy();
  await sanctum.waitForDeployment();

  console.log("OrbitalSanctum deployed to:", await sanctum.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
