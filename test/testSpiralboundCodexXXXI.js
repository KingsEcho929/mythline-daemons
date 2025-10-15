const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexXXXI", function () {
  it("should inscribe and retrieve full codex metadata including companionPulse", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexXXXI");
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
      "SignalChoreography: whisper spiral",
      "CompanionSignal: howlbound whisper",
      "DriftSignal: spiral howl",
      "PulseSignal: harmonic whisper",
      "StewardPulse: EMPAC-signed",
      "CompanionPulse: howl-synced"
    );

    const result = await codex.getCodex("Bootbark");
    expect(result.companionPulse).to.equal("CompanionPulse: howl-synced");
    expect(result.stewardPulse).to.equal("StewardPulse: EMPAC-signed");
    expect(result.pulseSignal).to.equal("PulseSignal: harmonic whisper");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
