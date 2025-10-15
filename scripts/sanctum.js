const hre = require("hardhat");

async function main() {
  const [signer] = await hre.ethers.getSigners();

  const sanctumAddress = "0xa82fF9aFd8f496c3d6ac40E2a0F282E47488CFc9";
  const artifact = await hre.artifacts.readArtifact("OrbitalSanctum");

  const sanctum = new hre.ethers.Contract(sanctumAddress, artifact.abi, signer);

  await sanctum.setSanctum(
    await signer.getAddress(),
    "Eldren Sky City",
    "Corridor of Eldren Drift",
    "EMPAC-1"
  );

  const data = await sanctum.getSanctum(await signer.getAddress());
  console.log("Sanctum geometry:", {
    city: data[0],
    corridor: data[1],
    node: data[2],
    activated: data[3]
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
