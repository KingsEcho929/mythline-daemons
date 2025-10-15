const hre = require("hardhat");

async function main() {
  const [signer] = await hre.ethers.getSigners();

  const sanctumAddress = "0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f";
  const artifact = await hre.artifacts.readArtifact("OrbitalSanctum");

  const sanctum = new hre.ethers.Contract(
    sanctumAddress,
    artifact.abi,
    signer
  );

  await sanctum.deploySanctum("Eldren", "Constellation Corridor 7", "EMPAC-1");

  const data = await sanctum.getSanctum(await signer.getAddress());
  console.log("Sanctum activated:", data);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
