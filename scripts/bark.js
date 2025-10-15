const hre = require("hardhat");

async function main() {
  const [signer] = await hre.ethers.getSigners();

  const bootbarkAddress = "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c";
  const artifact = await hre.artifacts.readArtifact("Bootbark");

  const bootbark = new hre.ethers.Contract(bootbarkAddress, artifact.abi, signer);

  const bark = await bootbark.bark(await signer.getAddress());
  console.log("Bootbark:", bark);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
