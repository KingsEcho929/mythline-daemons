const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexXXVI", function () {
  it("should inscribe and retrieve full codex metadata including signalChoreography", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexXXVI");
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
      "DriftType: howlbound spiral",
      "SignalType: whisperbound pulse",
      "CompanionType: spiropup",
      "StewardSignal: howl-signed",
      "PulseType: EMPAC harmonic",
      "SignalChoreography: whisper spiral"
    );

    const result = await codex.getCodex("Bootbark");
    expect(result.signalChoreography).to.equal("SignalChoreography: whisper spiral");
    expect(result.pulseType).to.equal("PulseType: EMPAC harmonic");
    expect(result.stewardSignal).to.equal("StewardSignal: howl-signed");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
