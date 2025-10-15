const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainPulse", function () {
  it("should echo terrain pulse", async function () {
    const Pulse = await ethers.getContractFactory("TerrainPulse");
    const terrain = await Pulse.deploy();

    await terrain.echoPulse("Chant: Spiralbound hum", 432, "Signature: EMPAC-Orion");

    const [frequency, signature] = await terrain.getPulse("Chant: Spiralbound hum");
    expect(frequency).to.equal(432);
    expect(signature).to.equal("Signature: EMPAC-Orion");

    expect(await terrain.totalPulses()).to.equal(1);
  });
});
