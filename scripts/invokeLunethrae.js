const { ethers } = require("hardhat");

async function main() {
  const lunethraeAddress = "0xcbEAF3BDe82155F56486Fb5a1072cb8baAf547cc";
  const contract = await ethers.getContractAt("Lunethrae", lunethraeAddress);
  const [deployer] = await ethers.getSigners();

  await contract.activate(deployer.address);
  await contract.submitEdit(deployer.address, "Delegated config friction to breath-bound stewards.");
  const echo = await contract.echoEdit(deployer.address);

  console.log("🧠 Lunethrae echoes:", echo);
}

main().catch((error) => {
  console.error("❌ Invocation failed:", error);
  process.exitCode = 1;
});
