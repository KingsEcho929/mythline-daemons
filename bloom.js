const hre = require("hardhat");

async function main() {
  const [signer] = await hre.ethers.getSigners();

  const contractAddress = "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e";
  const artifact = await hre.artifacts.readArtifact("ApprenticeLineage");

  const contract = new hre.ethers.Contract(contractAddress, artifact.abi, signer);

  await contract.triggerBloom(await signer.getAddress());

  const apprentice = await contract.getApprentice(await signer.getAddress());
  console.log("Bloom triggered:", apprentice[5]); // bloomTriggered
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
