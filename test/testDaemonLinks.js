const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MaxwellsDaemon - Link Modules", function () {
  it("should link orbital, registry, and corridor", async function () {
    const [owner] = await ethers.getSigners();

    const Mock = await ethers.getContractFactory("MockPropulsion");
    const mock = await Mock.deploy();

    const Daemon = await ethers.getContractFactory("MaxwellsDaemon");
    const daemon = await Daemon.deploy(await mock.getAddress());

    const Orbital = await ethers.getContractFactory("contracts/orbital/OrbitalSanctum.sol:OrbitalSanctum");
    const orbital = await Orbital.deploy(await daemon.getAddress());

    const Registry = await ethers.getContractFactory("contracts/registry/ApprenticeRegistry.sol:ApprenticeRegistry");
    const registry = await Registry.deploy();

    const Corridor = await ethers.getContractFactory("ConstellationCorridor");
    const corridor = await Corridor.deploy();

    await daemon.setOrbital(await orbital.getAddress());
    await daemon.setRegistry(await registry.getAddress());
    await daemon.setCorridor(await corridor.getAddress());

    expect(await daemon.orbital()).to.equal(await orbital.getAddress());
    expect(await daemon.registry()).to.equal(await registry.getAddress());
    expect(await daemon.corridor()).to.equal(await corridor.getAddress());
  });
});
