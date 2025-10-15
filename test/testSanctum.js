const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MaxwellsDaemon - Sanctum Logic", function () {
  it("should allow steward to update propulsion", async function () {
    const [owner] = await ethers.getSigners();

    const Mock = await ethers.getContractFactory("MockPropulsion");
    const oldModule = await Mock.deploy();
    const newModule = await Mock.deploy();

    const Daemon = await ethers.getContractFactory("MaxwellsDaemon");
    const daemon = await Daemon.deploy(await oldModule.getAddress());

    await daemon.updatePropulsion(await newModule.getAddress());

    const entropyHash = ethers.keccak256(ethers.toUtf8Bytes("sanctum-drift"));
    await daemon.realignEntropy(entropyHash);

    const aligned = await daemon.entropyAligned(entropyHash);
    expect(aligned).to.equal(true);
  });
});
