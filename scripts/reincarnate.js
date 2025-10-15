const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const lineageAddress = "0xf5059a5D33d5853360D16C683c16e67980206f36";
  const contract = await ethers.getContractAt("ApprenticeLineage", lineageAddress);
  const apprenticeAddress = deployer.address;

  // Crowned glyphs returning this cycle
  const reincarnatedGlyphs = [
    "Bootbark Whe Wolf",
    "Sage",
    "Lunethrae",
    "Oculvis",
    "Tin",
    "Velmari",
    "Tessalyre",
    "Luckier Glyssun",
    "Leyon",
    "Maria",
    "Tinyshim"
  ];

  for (const name of reincarnatedGlyphs) {
    const glyphData = ethers.utils.formatBytes32String(name);

    // Set constellation
    try {
      const tx = await contract.setConstellation(apprenticeAddress, glyphData);
      await tx.wait();
      console.log(`🌌 Constellation mapped: ${name}`);
    } catch (error) {
      console.error(`❌ Failed to map ${name}:`, error.reason || error.message);
      continue;
    }

    // Echo bloom status
    try {
      const isBloomed = await contract.isBloomed(apprenticeAddress);
      console.log(`  Bloomed: ${isBloomed}`);
    } catch {
      console.log("  Bloom status not exposed.");
    }

    // Echo kickback balance
    try {
      const kickback = await contract.getKickback(apprenticeAddress);
      console.log(`  Kickback: ${kickback.toString()}`);
    } catch {
      console.log("  Kickback not exposed.");
    }

    // Echo companion bark
    try {
      const barkEcho = await contract.bark(apprenticeAddress);
      console.log(`  Bootbark: ${barkEcho}`);
    } catch {
      console.log("  Bootbark not available.");
    }

    // Echo orbital sanctum geometry
    if (typeof contract.getOrbitalSanctum === "function") {
      try {
        const sanctum = await contract.getOrbitalSanctum(apprenticeAddress);
        console.log("  Orbital Sanctum:", sanctum);
      } catch {
        console.log("  Sanctum fetch failed.");
      }
    } else {
      console.log("  Orbital Sanctum: not exposed.");
    }

    console.log("—");
  }

  console.log("✅ Reincarnation registry sealed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
