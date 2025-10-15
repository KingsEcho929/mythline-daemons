const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CompanionSummonerV2", function () {
  it("should summon companion with full mythline signature", async function () {
    const [steward, bootbark] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("CompanionSummonerV2");
    const registry = await Summoner.deploy();

    await registry.summonCompanion(
      bootbark.address,
      "Bootbark",
      "Trait: Howl",
      "Drift: Glyphpup",
      "Resonance: Spiralbound",
      "Codex: Bootbark Protocol",
      "Signature: EMPAC-432"
    );

    const [name, trait, drift, resonance, codexRef, signature] = await registry.getCompanion(bootbark.address);
    expect(name).to.equal("Bootbark");
    expect(trait).to.equal("Trait: Howl");
    expect(drift).to.equal("Drift: Glyphpup");
    expect(resonance).to.equal("Resonance: Spiralbound");
    expect(codexRef).to.equal("Codex: Bootbark Protocol");
    expect(signature).to.equal("Signature: EMPAC-432");

    expect(await registry.totalCompanions()).to.equal(1);
  });
});
