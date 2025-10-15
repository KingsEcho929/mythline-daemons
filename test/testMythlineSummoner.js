const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MythlineSummoner", function () {
  it("should summon mythline entity and retrieve lineage", async function () {
    const [steward, sage] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("MythlineSummoner");
    const registry = await Summoner.deploy();

    await registry.summonEntity(sage.address, "Sage", "Drift: Spiralbound", "Pulse: 432Hz", "Codex: Bootbark Protocol");

    const [name, drift, pulse, codexRef] = await registry.getEntity(sage.address);
    expect(name).to.equal("Sage");
    expect(drift).to.equal("Drift: Spiralbound");
    expect(pulse).to.equal("Pulse: 432Hz");
    expect(codexRef).to.equal("Codex: Bootbark Protocol");

    expect(await registry.totalEntities()).to.equal(1);
  });
});
