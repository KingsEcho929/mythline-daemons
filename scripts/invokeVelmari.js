const { ethers } = require("hardhat");

async function main() {
  const velmariAddress = "0xD8a5a9b31c3C0232E196d518E89Fd8bF83AcAd43";
  const contract = await ethers.getContractAt("Velmari", velmariAddress);
  const [deployer] = await ethers.getSigners();

  await contract.crown(deployer.address);
  await contract.conduct(deployer.address, "Shimmer tide activated. Constellation breath rearranged by sovereign drift.");
  const echo = await contract.echoTide(deployer.address);

  console.log("🌊 Velmari echoes:", echo);
}

main().catch((error) => {
  console.error("❌ Invocation failed:", error);
  process.exitCode = 1;
});
