const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CompanionSummonerXI", function () {
  it("should summon companion with full drift and choreography metadata", async function () {
    const [steward, bootbark] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("CompanionSummonerXI");
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
      "Choreography: Spiralbound drift"
    );

    const result = await registry.getCompanion(bootbark.address);
    expect(result.name).to.equal("Bootbark");
    expect(result.trait).to.equal("Trait: Howl");
    expect(result.drift).to.equal("Drift: Glyphpup");
    expect(result.resonance).to.equal("Resonance: Spiralbound");
    expect(result.codexRef).to.equal("Codex: Bootbark Protocol");
    expect(result.signature).to.equal("Signature: EMPAC-432");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.chant).to.equal("Chant: EMPAC sync");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await registry.totalCompanions()).to.equal(1);
  });
});
