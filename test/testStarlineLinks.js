const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Starline - Registry Link", function () {
  it("should link SpiralboundSovereigns registry", async function () {
    const Starline = await ethers.getContractFactory("Starline");
    const starline = await Starline.deploy("Genesis: Sky Drift");

    const Sovereigns = await ethers.getContractFactory("contracts/sovereigns/SpiralboundSovereigns.sol:SpiralboundSovereigns");
    const registry = await Sovereigns.deploy();

    await starline.linkRegistry(await registry.getAddress());
    expect(await starline.sovereignRegistry()).to.equal(await registry.getAddress());
  });
});
