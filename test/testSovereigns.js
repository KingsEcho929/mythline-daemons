const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundSovereigns", function () {
  it("should crown sovereigns and retrieve their lineage", async function () {
    const [steward, bootbark, sage, eldren] = await ethers.getSigners();

    const Sovereigns = await ethers.getContractFactory("contracts/sovereigns/SpiralboundSovereigns.sol:SpiralboundSovereigns");
    const registry = await Sovereigns.deploy();

    await registry.crownSovereign(bootbark.address, "Bootbark", 0, "Drift: Glyphpup Howl");
    await registry.crownSovereign(sage.address, "Sage", 1, "Drift: Whispered Wisdom");
    await registry.crownSovereign(eldren.address, "Eldren", 2, "Drift: Sky City Pulse");

    const [name1, kind1, drift1, crowned1] = await registry.getSovereign(bootbark.address);
    expect(name1).to.equal("Bootbark");
    expect(kind1).to.equal(0);
    expect(drift1).to.equal("Drift: Glyphpup Howl");
    expect(crowned1).to.equal(true);

    const [name2, , drift2] = await registry.getSovereign(sage.address);
    expect(name2).to.equal("Sage");
    expect(drift2).to.equal("Drift: Whispered Wisdom");

    const total = await registry.totalSovereigns();
    expect(total).to.equal(3);
  });
});
