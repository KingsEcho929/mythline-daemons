const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApprenticeSummonerXXI", function () {
  it("should summon apprentice with full stewardPulse and terrain lineage", async function () {
    const [steward, sage] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("ApprenticeSummonerXXI");
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
      "StewardPulse: EMPAC-signed"
    );

    const result = await registry.getSummons(sage.address);
    expect(result.name).to.equal("Sage");
    expect(result.stewardPulse).to.equal("StewardPulse: EMPAC-signed");
    expect(result.driftSignal).to.equal("DriftSignal: spiral howl");
    expect(result.stewardName).to.equal("Steward: .CTH");

    expect(await registry.totalSummons()).to.equal(1);
  });
});
