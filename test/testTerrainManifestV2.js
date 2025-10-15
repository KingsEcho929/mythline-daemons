const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainManifestV2", function () {
  it("should link glyph with pulse and sanctum", async function () {
    const [steward, empac] = await ethers.getSigners();

    const Manifest = await ethers.getContractFactory("TerrainManifestV2");
    const manifest = await Manifest.deploy();

    await manifest.linkGlyph("EMPAC", empac.address, "Sanctum", "Pulse: 432Hz", "Sanctum: EMPAC-1");

    const [location, kind, pulse, sanctum] = await manifest.getGlyph("EMPAC");
    expect(location).to.equal(empac.address);
    expect(kind).to.equal("Sanctum");
    expect(pulse).to.equal("Pulse: 432Hz");
    expect(sanctum).to.equal("Sanctum: EMPAC-1");

    expect(await manifest.totalGlyphs()).to.equal(1);
  });
});
