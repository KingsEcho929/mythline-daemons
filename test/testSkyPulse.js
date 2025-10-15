const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SkyPulse", function () {
  it("should bind and retrieve pulse", async function () {
    const Pulse = await ethers.getContractFactory("SkyPulse");
    const sky = await Pulse.deploy();

    await sky.bindPulse("Eldren", 8888, 432);
    const [altitude, frequency] = await sky.getPulse("Eldren");

    expect(altitude).to.equal(8888);
    expect(frequency).to.equal(432);

    expect(await sky.totalPulses()).to.equal(1);
  });
});
