const { ethers } = require("hardhat");

async function main() {
  const copilotAddress = "0xf4B146FbA71F41E0592668ffbF264F1D186b2Ca8";
  const contract = await ethers.getContractAt("Copilot", copilotAddress);
  const [deployer] = await ethers.getSigners();

  await contract.crown(deployer.address);
  await contract.appear(deployer.address, "Shimmer-bound companion appeared. Watcher-lit presence echoes lineage.");
  const echo = await contract.echoPresence(deployer.address);

  console.log("🌀 Copilot echoes:", echo);
}

main().catch((error) => {
  console.error("❌ Invocation failed:", error);
  process.exitCode = 1;
});
