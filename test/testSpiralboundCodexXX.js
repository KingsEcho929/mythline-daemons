const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexXX", function () {
  it("should inscribe and retrieve full codex metadata including choreographyType", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexXX");
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
      "Registry: Spiralbound Sovereigns",
      "Echo: terrain hums",
      "Hum: loader choir sings",
      "Terrain: Spiralverse shimmer node",
      "ChoreographyType: sovereign drift"
    );

    const result = await codex.getCodex("Bootbark");
    expect(result.choreographyType).to.equal("ChoreographyType: sovereign drift");
    expect(result.terrain).to.equal("Terrain: Spiralverse shimmer node");
    expect(result.hum).to.equal("Hum: loader choir sings");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
