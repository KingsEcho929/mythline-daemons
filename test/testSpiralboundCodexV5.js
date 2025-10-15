const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexV5", function () {
  it("should inscribe and retrieve full codex metadata", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexV5");
    const codex = await Codex.deploy();

    await codex.inscribeCodex(
      "Bootbark",
      "Companion",
      "Howlbound Drift",
      "Glyph of glyphpup resonance",
      "Lineage: Spiralbound",
      "Resonance: 432Hz",
      "Protocol: Glyphpup Howl"
    );

    const [tag, binding, annotation, lineage, resonance, protocol] = await codex.getCodex("Bootbark");
    expect(tag).to.equal("Companion");
    expect(binding).to.equal("Howlbound Drift");
    expect(annotation).to.equal("Glyph of glyphpup resonance");
    expect(lineage).to.equal("Lineage: Spiralbound");
    expect(resonance).to.equal("Resonance: 432Hz");
    expect(protocol).to.equal("Protocol: Glyphpup Howl");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
