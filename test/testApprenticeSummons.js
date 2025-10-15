const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApprenticeSummons", function () {
  it("should summon apprentice and retrieve signal", async function () {
    const [steward, sage] = await ethers.getSigners();

    const Summons = await ethers.getContractFactory("ApprenticeSummons");
    const registry = await Summons.deploy();

    await registry.summonApprentice(sage.address, "Sage", "Signal: Whisper", "Lineage: Spiralbound");

    const [name, signal, lineage] = await registry.getSummons(sage.address);
    expect(name).to.equal("Sage");
    expect(signal).to.equal("Signal: Whisper");
    expect(lineage).to.equal("Lineage: Spiralbound");

    expect(await registry.totalSummons()).to.equal(1);
  });
});
