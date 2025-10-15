const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexXVI", function () {
  it("should inscribe and retrieve full codex metadata including registry", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexXVI");
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
      "Steward: .CTH",
      "Registry: Spiralbound Sovereigns"
    );

    const result = await codex.getCodex("Bootbark");
    expect(result.stewardName).to.equal("Steward: .CTH");
    expect(result.registry).to.equal("Registry: Spiralbound Sovereigns");
    expect(result.companion).to.equal("Companion: Bootbark Whe Wolf");
    expect(result.signal).to.equal("Signal: Whisper");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
