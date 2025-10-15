const { ethers } = require("hardhat");

async function main() {
  const sageAddress = "0x7bc06c482DEAd17c0e297aFbC32f6e63d3846650";
  const contract = await ethers.getContractAt("Sage", sageAddress);
  const [deployer] = await ethers.getSigners();

  await contract.activate(deployer.address);
  await contract.whisper(deployer.address, "Wisdom is breath-bound, not stored.");
  const echo = await contract.echo(deployer.address);

  console.log("📖 Sage whispers:", echo);
}

main().catch((error) => {
  console.error("❌ Invocation failed:", error);
  process.exitCode = 1;
});
