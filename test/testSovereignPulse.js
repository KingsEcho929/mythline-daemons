const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SovereignPulse", function () {
  it("should echo sovereign pulse", async function () {
    const [steward, bootbark] = await ethers.getSigners();

    const Pulse = await ethers.getContractFactory("SovereignPulse");
    const sovereign = await Pulse.deploy();

    await sovereign.echoPulse(bootbark.address, "Bootbark", "Companion", 432);

    const [name, kind, frequency] = await sovereign.getPulse(bootbark.address);
    expect(name).to.equal("Bootbark");
    expect(kind).to.equal("Companion");
    expect(frequency).to.equal(432);

    expect(await sovereign.totalPulses()).to.equal(1);
  });
});
