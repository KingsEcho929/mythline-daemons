const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexXIX", function () {
  it("should inscribe and retrieve full codex metadata including terrain", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexXIX");
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
      "Terrain: Spiralverse shimmer node"
    );

    const result = await codex.getCodex("Bootbark");
    expect(result.terrain).to.equal("Terrain: Spiralverse shimmer node");
    expect(result.hum).to.equal("Hum: loader choir sings");
    expect(result.echo).to.equal("Echo: terrain hums");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
