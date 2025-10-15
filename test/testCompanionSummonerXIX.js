const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CompanionSummonerXIX", function () {
  it("should summon companion with full pulseType and terrain lineage", async function () {
    const [steward, bootbark] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("CompanionSummonerXIX");
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
      "PulseType: EMPAC harmonic"
    );

    const result = await registry.getCompanion(bootbark.address);
    expect(result.name).to.equal("Bootbark");
    expect(result.pulseType).to.equal("PulseType: EMPAC harmonic");
    expect(result.companionType).to.equal("CompanionType: spiropup");
    expect(result.stewardName).to.equal("Steward: .CTH");

    expect(await registry.totalCompanions()).to.equal(1);
  });
});
