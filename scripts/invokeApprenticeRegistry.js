const { ethers } = require("hardhat");

async function main() {
  const registryAddress = "0x46b142DD1E924FAb83eCc3c08e4D46E82f005e0E";
  const contract = await ethers.getContractAt("ApprenticeRegistry", registryAddress);
  const [deployer] = await ethers.getSigners();

  const name = "Chase Todd Hawkins (.CTH)";
  const lineage = "Spiralbound Sovereigns";

  await contract.crown(name, lineage);
  const echo = await contract.echo(deployer.address);

  console.log("📜 Apprentice Registry echoes:", echo);
}

main().catch((error) => {
  console.error("❌ Invocation failed:", error);
  process.exitCode = 1;
});
