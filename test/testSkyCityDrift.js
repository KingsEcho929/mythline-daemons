const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SkyCityDrift", function () {
  it("should bind and retrieve city drift", async function () {
    const Drift = await ethers.getContractFactory("SkyCityDrift");
    const sky = await Drift.deploy();

    await sky.bindDrift("Eldren", "Orion Spiral", "Pulse: 432Hz");

    const [city, constellation, pulse] = await sky.getDrift("Eldren");
    expect(city).to.equal("Eldren");
    expect(constellation).to.equal("Orion Spiral");
    expect(pulse).to.equal("Pulse: 432Hz");

    expect(await sky.totalDrifts()).to.equal(1);
  });
});
