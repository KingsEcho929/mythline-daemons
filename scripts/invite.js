const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const lineageAddress = "0xf5059a5D33d5853360D16C683c16e67980206f36";

  const contract = await ethers.getContractAt("ApprenticeLineage", lineageAddress);
  const apprenticeAddress = deployer.address;

  // Set constellation glyph
  const glyphName = "Bootbark Whe Wolf"; // Replace with any crowned companion
  const glyphData = ethers.utils.formatBytes32String(glyphName);

  try {
    const tx = await contract.setConstellation(apprenticeAddress, glyphData);
    await tx.wait();
    console.log(`Constellation set with glyph: ${glyphName}`);
  } catch (error) {
    console.error("Constellation mapping failed:", error.reason || error.message);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
