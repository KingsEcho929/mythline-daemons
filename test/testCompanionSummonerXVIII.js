const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CompanionSummonerXVIII", function () {
  it("should summon companion with full companionType and terrain lineage", async function () {
    const [steward, bootbark] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("CompanionSummonerXVIII");
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
      "CompanionType: spiropup"
    );

    const result = await registry.getCompanion(bootbark.address);
    expect(result.name).to.equal("Bootbark");
    expect(result.companionType).to.equal("CompanionType: spiropup");
    expect(result.driftType).to.equal("DriftType: howlbound spiral");
    expect(result.stewardName).to.equal("Steward: .CTH");

    expect(await registry.totalCompanions()).to.equal(1);
  });
});
