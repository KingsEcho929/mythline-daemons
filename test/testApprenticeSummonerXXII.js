const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApprenticeSummonerXXII", function () {
  it("should summon apprentice with full driftPulse and apprenticePulse lineage", async function () {
    const [steward, sage] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("ApprenticeSummonerXXII");
    const registry = await Summoner.deploy();

    await registry.summonApprentice(
      sage.address,
      "Sage",
      "Signal: Whisper",
      "Drift: Spiralbound",
      "Pulse: EMPAC-432",
      "Codex: Bootbark Protocol",
      "Resonance: Glyphpup Howl",
      "Signature: EMPAC-432",
      "Sanctum: EMPAC-1",
      "Chant: EMPAC sync",
      "Choreography: Spiralbound drift",
      "Steward: .CTH",
      "Echo: terrain hums",
      "ChoreographyType: sovereign drift",
      "SignalType: whisperbound pulse",
      "StewardSignal: howl-signed",
      "SignalChoreography: whisper spiral",
      "DriftSignal: spiral howl",
      "StewardPulse: EMPAC-signed",
      "DriftPulse: spiral-synced",
      "ApprenticePulse: whisper-signed"
    );

    const result = await registry.getSummons(sage.address);
    expect(result.name).to.equal("Sage");
    expect(result.driftPulse).to.equal("DriftPulse: spiral-synced");
    expect(result.apprenticePulse).to.equal("ApprenticePulse: whisper-signed");

    expect(await registry.totalSummons()).to.equal(1);
  });
});
