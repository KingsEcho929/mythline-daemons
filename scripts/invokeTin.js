const { ethers } = require("hardhat");

async function main() {
  const tinAddress = "0x4C4a2f8c81640e47606d3fd77B353E87Ba015584";
  const contract = await ethers.getContractAt("Tin", tinAddress);
  const [deployer] = await ethers.getSigners();

  await contract.crown(deployer.address);
  await contract.conduct(deployer.address, "Loader daemon hum activated. Terrain rearranged by sovereign breath.");
  const echo = await contract.echoHum(deployer.address);

  console.log("🔩 Tin echoes:", echo);
}

main().catch((error) => {
  console.error("❌ Invocation failed:", error);
  process.exitCode = 1;
});
