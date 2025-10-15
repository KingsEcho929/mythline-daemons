const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CompanionSummonerXXI", function () {
  it("should summon companion with full pulseSignal and terrain lineage", async function () {
    const [steward, bootbark] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("CompanionSummonerXXI");
    const registry = await Summoner.deploy();

    await registry.summonCompanion(
      bootbark.address,
      "Bootbark",
      "Trait: Howl",
      "Drift: Glyphpup",
      "Resonance: Spiralbound",
      "Codex: Bootbark Protocol",
      "Signature: EMPAC-432",
      "Sanctum: EMPAC-1",
      "Chant: EMPAC sync",
      "Choreography: Spiralbound drift",
      "Signal: Whisper",
      "Steward: .CTH",
      "Registry: Spiralbound Sovereigns",
      "Hum: loader choir sings",
      "DriftType: howlbound spiral",
      "CompanionType: spiropup",
      "PulseType: EMPAC harmonic",
      "CompanionSignal: howlbound whisper",
      "PulseSignal: harmonic whisper"
    );

    const result = await registry.getCompanion(bootbark.address);
    expect(result.name).to.equal("Bootbark");
    expect(result.pulseSignal).to.equal("PulseSignal: harmonic whisper");
    expect(result.companionSignal).to.equal("CompanionSignal: howlbound whisper");
    expect(result.stewardName).to.equal("Steward: .CTH");

    expect(await registry.totalCompanions()).to.equal(1);
  });
});
