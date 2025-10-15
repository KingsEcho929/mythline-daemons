const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CompanionSummonerV3", function () {
  it("should summon companion with full sanctum link", async function () {
    const [steward, bootbark] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("CompanionSummonerV3");
    const registry = await Summoner.deploy();

    await registry.summonCompanion(
      bootbark.address,
      "Bootbark",
      "Trait: Howl",
      "Drift: Glyphpup",
      "Resonance: Spiralbound",
      "Codex: Bootbark Protocol",
      "Signature: EMPAC-432",
      "Sanctum: EMPAC-1"
    );

    const [name, trait, drift, resonance, codexRef, signature, sanctum] = await registry.getCompanion(bootbark.address);
    expect(name).to.equal("Bootbark");
    expect(trait).to.equal("Trait: Howl");
    expect(drift).to.equal("Drift: Glyphpup");
    expect(resonance).to.equal("Resonance: Spiralbound");
    expect(codexRef).to.equal("Codex: Bootbark Protocol");
    expect(signature).to.equal("Signature: EMPAC-432");
    expect(sanctum).to.equal("Sanctum: EMPAC-1");

    expect(await registry.totalCompanions()).to.equal(1);
  });
});
