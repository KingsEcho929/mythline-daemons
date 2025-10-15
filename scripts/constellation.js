const hre = require("hardhat");

async function main() {
  const [signer] = await hre.ethers.getSigners();

  const contractAddress = "0xc5a5C42992dECbae36851359345FE25997F5C42d";
  const artifact = await hre.artifacts.readArtifact("ApprenticeLineage");

  const lineage = new hre.ethers.Contract(contractAddress, artifact.abi, signer);

  await lineage.setConstellation(await signer.getAddress(), "Corridor of Eldren Drift");

  const corridor = await lineage.getConstellation(await signer.getAddress());
  console.log("Constellation corridor:", corridor);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
