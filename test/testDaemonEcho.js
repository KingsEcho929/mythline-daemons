const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DaemonEcho", function () {
  it("should echo sanctum state", async function () {
    const [steward, sanctum] = await ethers.getSigners();

    const Echo = await ethers.getContractFactory("DaemonEcho");
    const daemon = await Echo.deploy();

    await daemon.echoSanctum(sanctum.address, "Sanctum: EMPAC-1 orbital drift");
    const [state, timestamp] = await daemon.getEcho(sanctum.address);

    expect(state).to.equal("Sanctum: EMPAC-1 orbital drift");
    expect(timestamp).to.be.a("bigint");

    expect(await daemon.totalSanctums()).to.equal(1);
  });
});
