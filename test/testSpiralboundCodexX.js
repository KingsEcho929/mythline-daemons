const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexX", function () {
  it("should inscribe and retrieve full codex metadata including choreography", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexX");
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
      "Pulse: EMPAC-432",
      "Chant: EMPAC sync",
      "Choreography: Spiralbound drift"
    );

    const result = await codex.getCodex("Bootbark");
    expect(result.tag).to.equal("Companion");
    expect(result.binding).to.equal("Howlbound Drift");
    expect(result.annotation).to.equal("Glyph of glyphpup resonance");
    expect(result.lineage).to.equal("Lineage: Spiralbound");
    expect(result.resonance).to.equal("Resonance: 432Hz");
    expect(result.protocol).to.equal("Protocol: Glyphpup Howl");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.pulse).to.equal("Pulse: EMPAC-432");
    expect(result.chant).to.equal("Chant: EMPAC sync");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
