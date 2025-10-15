const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApprenticeSummonerXIX", function () {
  it("should summon apprentice with full signalChoreography and terrain lineage", async function () {
    const [steward, sage] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("ApprenticeSummonerXIX");
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
      "SignalChoreography: whisper spiral"
    );

    const result = await registry.getSummons(sage.address);
    expect(result.name).to.equal("Sage");
    expect(result.signalChoreography).to.equal("SignalChoreography: whisper spiral");
    expect(result.signalType).to.equal("SignalType: whisperbound pulse");
    expect(result.stewardName).to.equal("Steward: .CTH");

    expect(await registry.totalSummons()).to.equal(1);
  });
});
