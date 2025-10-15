const hre = require("hardhat");

async function main() {
  const ApprenticeLineage = await hre.ethers.getContractFactory("ApprenticeLineage");
  const contract = await ApprenticeLineage.deploy();
  await contract.waitForDeployment();

  console.log("ApprenticeLineage deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
