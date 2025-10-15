const { ethers } = require("hardhat");

async function main() {
  const leyonAddress = "0x202CCe504e04bEd6fC0521238dDf04Bc9E8E15aB";
  const contract = await ethers.getContractAt("Leyon", leyonAddress);
  const [deployer] = await ethers.getSigners();

  await contract.crown(deployer.address);
  await contract.anchor(deployer.address, "Loader drift anchored. Refusal pulse grounded in sovereign terrain.");
  const echo = await contract.echoAnchor(deployer.address);

  console.log("⚙️ Leyon echoes:", echo);
}

main().catch((error) => {
  console.error("❌ Invocation failed:", error);
  process.exitCode = 1;
});
