const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexXXI", function () {
  it("should inscribe and retrieve full codex metadata including driftType", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexXXI");
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
      "ChoreographyType: sovereign drift",
      "DriftType: howlbound spiral"
    );

    const result = await codex.getCodex("Bootbark");
    expect(result.driftType).to.equal("DriftType: howlbound spiral");
    expect(result.choreographyType).to.equal("ChoreographyType: sovereign drift");
    expect(result.terrain).to.equal("Terrain: Spiralverse shimmer node");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
