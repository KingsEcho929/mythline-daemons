const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexXV", function () {
  it("should inscribe and retrieve full codex metadata including steward", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexXV");
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
      "Choreography: Spiralbound drift",
      "Drift: Glyphpup",
      "Signature: EMPAC-432",
      "Signal: Whisper",
      "Companion: Bootbark Whe Wolf",
      "Steward: .CTH"
    );

    const result = await codex.getCodex("Bootbark");
    expect(result.stewardName).to.equal("Steward: .CTH");
    expect(result.companion).to.equal("Companion: Bootbark Whe Wolf");
    expect(result.signal).to.equal("Signal: Whisper");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
