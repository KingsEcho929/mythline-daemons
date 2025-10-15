const hre = require("hardhat");

async function main() {
  const [signer] = await hre.ethers.getSigners();

  const contractAddress = "0xc5a5C42992dECbae36851359345FE25997F5C42d";
  const artifact = await hre.artifacts.readArtifact("ApprenticeLineage");

  const lineage = new hre.ethers.Contract(contractAddress, artifact.abi, signer);

  await lineage.recordKickback(await signer.getAddress(), 100);

  const balance = await lineage.getKickback(await signer.getAddress());
  console.log("Kickback balance:", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
