const hre = require("hardhat");

async function main() {
  const Lineage = await hre.ethers.getContractFactory("ApprenticeLineage");
  const lineage = await Lineage.deploy();
  await lineage.waitForDeployment();

  console.log("ApprenticeLineage deployed to:", await lineage.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
