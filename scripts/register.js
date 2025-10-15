const hre = require("hardhat");

async function main() {
  const [signer] = await hre.ethers.getSigners();

  const contractAddress = "0xf5059a5D33d5853360D16C683c16e67980206f36" // ApprenticeLineage contract address
  const artifact = await hre.artifacts.readArtifact("ApprenticeLineage");

  const lineage = new hre.ethers.Contract(contractAddress, artifact.abi, signer);

  await lineage.registerApprentice(
    "GlyphName",
    "CompanionName",
    "SanctumName",
    "CorridorName",
    "LineageName"
  );

  console.log("Apprentice registered.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
