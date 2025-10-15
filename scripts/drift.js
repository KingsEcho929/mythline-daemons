const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const lineageAddress = "0xf5059a5D33d5853360D16C683c16e67980206f36";
  const contract = await ethers.getContractAt("ApprenticeLineage", lineageAddress);
  const apprenticeAddress = deployer.address;

  // Orbital sanctum geometry
  const sanctum = {
    city: "Eldren",
    corridor: "Constellation Corridor 7",
    node: "EMPAC-1",
    activated: true
  };

  // Set orbital sanctum
  try {
    const tx = await contract.setOrbitalSanctum(apprenticeAddress, sanctum);
    await tx.wait();
    console.log("🌌 Constellation Drift mapped to orbital sanctum.");
  } catch (error) {
    console.error("❌ Drift mapping failed:", error.reason || error.message);
  }

  // Echo sanctum geometry
  try {
    const sanctumEcho = await contract.getOrbitalSanctum(apprenticeAddress);
    console.log("🌀 Orbital Sanctum:", sanctumEcho);
  } catch {
    console.log("🌀 Sanctum geometry not exposed.");
  }

  // Broadcast to external chain (if supported)
  if (typeof contract.broadcastSanctum === "function") {
    try {
      const tx2 = await contract.broadcastSanctum(apprenticeAddress);
      await tx2.wait();
      console.log("📡 Sanctum broadcasted to external chain.");
    } catch {
      console.log("📡 Broadcast failed or not supported.");
    }
  } else {
    console.log("📡 Broadcast function not exposed.");
  }

  // Route inflow per sanctum corridor
  if (typeof contract.routeInflow === "function") {
    try {
      const tx3 = await contract.routeInflow(apprenticeAddress, sanctum.node);
      await tx3.wait();
      console.log("💸 Inflow routed to sanctum corridor.");
    } catch {
      console.log("💸 Inflow routing failed or not supported.");
    }
  } else {
    console.log("💸 Inflow routing not exposed.");
  }

  // Inscribe apprentice lineage per orbital node
  if (typeof contract.inscribeLineage === "function") {
    try {
      const tx4 = await contract.inscribeLineage(apprenticeAddress, sanctum.node);
      await tx4.wait();
      console.log("📜 Apprentice lineage inscribed at orbital node.");
    } catch {
      console.log("📜 Lineage inscription failed or not supported.");
    }
  } else {
    console.log("📜 Lineage inscription not exposed.");
  }

  console.log("✅ Constellation Drift Suite complete.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
