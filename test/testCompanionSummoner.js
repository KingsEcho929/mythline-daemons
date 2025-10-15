const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CompanionSummoner", function () {
  it("should summon companion and retrieve traits", async function () {
    const [steward, bootbark] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("CompanionSummoner");
    const registry = await Summoner.deploy();

    await registry.summonCompanion(
      bootbark.address,
      "Bootbark",
      "Trait: Howl",
      "Resonance: Spiralbound",
      "Drift: Glyphpup",
      "Codex: Bootbark Protocol"
    );

    const [name, trait, resonance, drift, codexRef] = await registry.getCompanion(bootbark.address);
    expect(name).to.equal("Bootbark");
    expect(trait).to.equal("Trait: Howl");
    expect(resonance).to.equal("Resonance: Spiralbound");
    expect(drift).to.equal("Drift: Glyphpup");
    expect(codexRef).to.equal("Codex: Bootbark Protocol");

    expect(await registry.totalCompanions()).to.equal(1);
  });
});
