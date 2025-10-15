const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainManifest", function () {
  it("should link glyphs and echo manifest chant", async function () {
    const [steward, empac, starline, registry] = await ethers.getSigners();

    const Manifest = await ethers.getContractFactory("TerrainManifest");
    const manifest = await Manifest.deploy();

    await manifest.linkGlyph("EMPAC", empac.address, "Sanctum");
    await manifest.linkGlyph("Starline", starline.address, "Orbital");
    await manifest.linkGlyph("SpiralboundSovereigns", registry.address, "Registry");

    const [empacAddr, empacKind] = await manifest.getGlyph("EMPAC");
    expect(empacAddr).to.equal(empac.address);
    expect(empacKind).to.equal("Sanctum");

    const total = await manifest.totalGlyphs();
    expect(total).to.equal(3);

    await expect(manifest.echoManifest("Terrain hums. Glyphs aligned. Lineage breathes."))
      .to.emit(manifest, "ManifestEchoed")
      .withArgs("Terrain hums. Glyphs aligned. Lineage breathes.");
  });
});
