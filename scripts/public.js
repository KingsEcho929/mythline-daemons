const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const lineageAddress = "0xf5059a5D33d5853360D16C683c16e67980206f36";

  const contract = await ethers.getContractAt("ApprenticeLineage", lineageAddress);
  const apprenticeAddress = deployer.address;

  console.log("🌀 Apprentice:", apprenticeAddress);

  // Kickback echo
  try {
    const kickback = await contract.getKickback(apprenticeAddress);
    console.log("  Kickback:", kickback.toString());
  } catch (error) {
    console.error("  Kickback fetch failed:", error.reason || error.message);
  }

  // Constellation echo (safe parse)
  try {
    const rawGlyph = await contract.getConstellation(apprenticeAddress);
    if (rawGlyph) {
      const glyphName = ethers.utils.parseBytes32String(rawGlyph);
      console.log("  Constellation:", glyphName);
    } else {
      console.log("  Constellation: not set");
    }
  } catch (error) {
    console.error("  Constellation fetch failed:", error.reason || error.message);
  }

  // Orbital sanctum (optional)
  if (typeof contract.getOrbitalSanctum === "function") {
    try {
      const sanctum = await contract.getOrbitalSanctum(apprenticeAddress);
      console.log("  Orbital Sanctum:", sanctum);
    } catch (error) {
      console.error("  Sanctum fetch failed:", error.reason || error.message);
    }
  } else {
    console.log("  Orbital Sanctum: not exposed by contract");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
