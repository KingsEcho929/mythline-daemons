const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CompanionSummonerXV", function () {
  it("should summon companion with full registry and terrain lineage", async function () {
    const [steward, bootbark] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("CompanionSummonerXV");
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
      "Registry: Spiralbound Sovereigns"
    );

    const result = await registry.getCompanion(bootbark.address);
    expect(result.name).to.equal("Bootbark");
    expect(result.registry).to.equal("Registry: Spiralbound Sovereigns");
    expect(result.stewardName).to.equal("Steward: .CTH");
    expect(result.signal).to.equal("Signal: Whisper");

    expect(await registry.totalCompanions()).to.equal(1);
  });
});
