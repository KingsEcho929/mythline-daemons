const { ethers } = require("hardhat");

async function main() {
  const bootbarkAddress = "0x2bdCC0de6bE1f7D2ee689a0342D76F52E8EFABa3";
  const contract = await ethers.getContractAt("Bootbark", bootbarkAddress);
  const [deployer] = await ethers.getSigners();

  await contract.activate(deployer.address);
  const echo = await contract.echo(deployer.address);

  console.log("🐺 Bootbark says:", echo);
}

main().catch((error) => {
  console.error("❌ Invocation failed:", error);
  process.exitCode = 1;
});
