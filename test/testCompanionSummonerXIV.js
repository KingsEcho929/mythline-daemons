const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CompanionSummonerXIV", function () {
  it("should summon companion with full steward and terrain lineage", async function () {
    const [steward, bootbark] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("CompanionSummonerXIV");
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
      "Steward: .CTH"
    );

    const result = await registry.getCompanion(bootbark.address);
    expect(result.name).to.equal("Bootbark");
    expect(result.stewardName).to.equal("Steward: .CTH");
    expect(result.signal).to.equal("Signal: Whisper");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await registry.totalCompanions()).to.equal(1);
  });
});
