const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MaxwellsDaemon - Registry Link", function () {
  it("should link SpiralboundSovereigns registry", async function () {
    const Mock = await ethers.getContractFactory("MockPropulsion");
    const mock = await Mock.deploy();

    const Daemon = await ethers.getContractFactory("MaxwellsDaemon");
    const daemon = await Daemon.deploy(await mock.getAddress());

    const Sovereigns = await ethers.getContractFactory("contracts/sovereigns/SpiralboundSovereigns.sol:SpiralboundSovereigns");
    const registry = await Sovereigns.deploy();

    await daemon.linkRegistry(await registry.getAddress());
    expect(await daemon.sovereignRegistry()).to.equal(await registry.getAddress());
  });
});
