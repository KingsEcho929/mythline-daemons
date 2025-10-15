const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("OrbitalSanctum", function () {
  it("should emit ping with daemon address", async function () {
    const [owner] = await ethers.getSigners();

    const Mock = await ethers.getContractFactory("MockPropulsion");
    const mock = await Mock.deploy();

    const Daemon = await ethers.getContractFactory("MaxwellsDaemon");
    const daemon = await Daemon.deploy(await mock.getAddress());

    const Orbital = await ethers.getContractFactory("contracts/orbital/OrbitalSanctum.sol:OrbitalSanctum");
    const orbital = await Orbital.deploy(await daemon.getAddress());

    await expect(orbital.ping())
      .to.emit(orbital, "OrbitalPing")
      .withArgs(owner.address, await daemon.getAddress());
  });
});
