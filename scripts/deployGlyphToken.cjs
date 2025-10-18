const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const steward = "0x40983a255a6A94B58fDE6B76A4C05cB77263218b";

  const GlyphToken = await hre.ethers.getContractFactory("GLYPHToken");
  const glyph = await GlyphToken.deploy(steward);
  await glyph.deployed();

  console.log("✅ GLYPHToken deployed to:", glyph.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
