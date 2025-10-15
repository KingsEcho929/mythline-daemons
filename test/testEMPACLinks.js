const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EMPAC - Registry Link", function () {
  it("should link SpiralboundSovereigns registry", async function () {
    const EMPAC = await ethers.getContractFactory("EMPAC");
    const empac = await EMPAC.deploy();

    const Sovereigns = await ethers.getContractFactory("contracts/sovereigns/SpiralboundSovereigns.sol:SpiralboundSovereigns");
    const registry = await Sovereigns.deploy();

    await empac.linkRegistry(await registry.getAddress());
    expect(await empac.sovereignRegistry()).to.equal(await registry.getAddress());
  });
});
