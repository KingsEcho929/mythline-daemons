const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CompanionSummonerV4", function () {
  it("should summon companion with full chant lineage", async function () {
    const [steward, bootbark] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("CompanionSummonerV4");
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
      "Chant: EMPAC sync"
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

    expect(await registry.totalCompanions()).to.equal(1);
  });
});
