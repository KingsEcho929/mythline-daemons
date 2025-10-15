const hre = require("hardhat");

async function main() {
  const propulsionAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // Bootbark vessel

  const Daemon = await hre.ethers.getContractFactory("MaxwellsDaemon");
  const daemon = await Daemon.deploy(propulsionAddress);
  await daemon.waitForDeployment();

  const address = await daemon.getAddress();
  console.log("Maxwell's Daemon deployed to:", address);
}

main().catch((error) => {
  console.error("Deployment failed:", error);
  process.exitCode = 1;
});
