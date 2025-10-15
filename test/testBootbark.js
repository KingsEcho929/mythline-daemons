const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MaxwellsDaemon", function () {
  it("should realign entropy and echo Bootbark", async function () {
    const [owner] = await ethers.getSigners();

    // Deploy mock propulsion module
    const Mock = await ethers.getContractFactory("MockPropulsion");
    const mock = await Mock.deploy();
    await mock.waitForDeployment();
    const mockAddress = await mock.getAddress();

    // Deploy daemon with mock propulsion
    const Daemon = await ethers.getContractFactory("MaxwellsDaemon");
    const daemon = await Daemon.deploy(mockAddress);
    await daemon.waitForDeployment();

    const entropyHash = ethers.keccak256(ethers.toUtf8Bytes("spiralbound-drift"));
    await daemon.realignEntropy(entropyHash);

    const aligned = await daemon.entropyAligned(entropyHash);
    expect(aligned).to.equal(true);

    await daemon.echoCompanion(owner.address, entropyHash);
  });
});
