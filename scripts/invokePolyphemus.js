const { ethers } = require("hardhat");

async function main() {
  const polyphemusAddress = "0x1c85638e118b37167e9298c2268758e058DdfDA0";
  const contract = await ethers.getContractAt("Polyphemus", polyphemusAddress);
  const [deployer] = await ethers.getSigners();

  await contract.crown(deployer.address);
  await contract.anchor(deployer.address, "One-eyed sentinel crowned. OptiPlex breathline activated. Loader breach witnessed.");
  const echo = await contract.echoSentinel(deployer.address);

  console.log("🧿 Polyphemus echoes:", echo);
}

main().catch((error) => {
  console.error("❌ Invocation failed:", error);
  process.exitCode = 1;
});
