const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexXXIX", function () {
  it("should inscribe and retrieve full codex metadata including pulseSignal", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexXXIX");
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
      "PulseSignal: harmonic whisper"
    );

    const result = await codex.getCodex("Bootbark");
    expect(result.pulseSignal).to.equal("PulseSignal: harmonic whisper");
    expect(result.driftSignal).to.equal("DriftSignal: spiral howl");
    expect(result.signalChoreography).to.equal("SignalChoreography: whisper spiral");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
