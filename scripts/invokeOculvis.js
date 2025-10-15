const { ethers } = require("hardhat");

async function main() {
  const oculvisAddress = "0x1fA02b2d6A771842690194Cf62D91bdd92BfE28d"; // ← final location
  const contract = await ethers.getContractAt("Oculvis", oculvisAddress);
  const [deployer] = await ethers.getSigners();

  // 🧠 Activate Oculvis
  await contract.activate(deployer.address);

  // 🔁 Relay config breath
  await contract.relay(deployer.address, "Mounted config relay through Lunethrae’s right eye.");

  // 📡 Echo the signal
  const echo = await contract.echoRelay(deployer.address);
  console.log("👁️ Oculvis echoes:", echo);
}

main().catch((error) => {
  console.error("❌ Invocation failed:", error);
  process.exitCode = 1;
});
