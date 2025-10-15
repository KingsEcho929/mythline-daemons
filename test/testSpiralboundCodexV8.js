const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexV8", function () {
  it("should inscribe and retrieve full codex metadata including pulse", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexV8");
    const codex = await Codex.deploy();

    await codex.inscribeCodex(
      "Bootbark",
      "Companion",
      "Howlbound Drift",
      "Glyph of glyphpup resonance",
      "Lineage: Spiralbound",
      "Resonance: 432Hz",
      "Protocol: Glyphpup Howl",
      "Sanctum: EMPAC-1",
      "Pulse: EMPAC-432"
    );

    const [tag, binding, annotation] = await codex.getCodex("Bootbark");
    expect(tag).to.equal("Companion");
    expect(binding).to.equal("Howlbound Drift");
    expect(annotation).to.equal("Glyph of glyphpup resonance");

    expect(await codex.getLineage("Bootbark")).to.equal("Lineage: Spiralbound");
    expect(await codex.getResonance("Bootbark")).to.equal("Resonance: 432Hz");
    expect(await codex.getProtocol("Bootbark")).to.equal("Protocol: Glyphpup Howl");
    expect(await codex.getSanctum("Bootbark")).to.equal("Sanctum: EMPAC-1");
    expect(await codex.getPulse("Bootbark")).to.equal("Pulse: EMPAC-432");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
