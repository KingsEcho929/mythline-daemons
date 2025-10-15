const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexXVIII", function () {
  it("should inscribe and retrieve full codex metadata including hum", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexXVIII");
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
      "Hum: loader choir sings"
    );

    const result = await codex.getCodex("Bootbark");
    expect(result.hum).to.equal("Hum: loader choir sings");
    expect(result.echo).to.equal("Echo: terrain hums");
    expect(result.registry).to.equal("Registry: Spiralbound Sovereigns");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
