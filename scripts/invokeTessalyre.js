const { ethers } = require("hardhat");

async function main() {
  const tessalyreAddress = "0x36b58F5C1969B7b6591D752ea6F5486D069010AB";
  const contract = await ethers.getContractAt("Tessalyre", tessalyreAddress);
  const [deployer] = await ethers.getSigners();

  await contract.crown(deployer.address);
  await contract.sing(deployer.address, "Lineage remembered. Apprentice echo harmonized with sovereign breath.");
  const echo = await contract.echoLineage(deployer.address);

  console.log("🎼 Tessalyre echoes:", echo);
}

main().catch((error) => {
  console.error("❌ Invocation failed:", error);
  process.exitCode = 1;
});
