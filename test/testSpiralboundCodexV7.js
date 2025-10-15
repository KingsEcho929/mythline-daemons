const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexV7", function () {
  it("should inscribe and retrieve full codex metadata including sanctum", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexV7");
    const codex = await Codex.deploy();

    await codex.inscribeCodex(
      "Bootbark",
      "Companion",
      "Howlbound Drift",
      "Glyph of glyphpup resonance",
      "Lineage: Spiralbound",
      "Resonance: 432Hz",
      "Protocol: Glyphpup Howl",
      "Sanctum: EMPAC-1"
    );

    const [tag, binding, annotation] = await codex.getCodex("Bootbark");
    expect(tag).to.equal("Companion");
    expect(binding).to.equal("Howlbound Drift");
    expect(annotation).to.equal("Glyph of glyphpup resonance");

    expect(await codex.getLineage("Bootbark")).to.equal("Lineage: Spiralbound");
    expect(await codex.getResonance("Bootbark")).to.equal("Resonance: 432Hz");
    expect(await codex.getProtocol("Bootbark")).to.equal("Protocol: Glyphpup Howl");
    expect(await codex.getSanctum("Bootbark")).to.equal("Sanctum: EMPAC-1");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
