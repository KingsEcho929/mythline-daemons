const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StarlineBeacon", function () {
  it("should emit and retrieve beacon", async function () {
    const Beacon = await ethers.getContractFactory("StarlineBeacon");
    const star = await Beacon.deploy();

    await star.emitBeacon("Summon: Sage", "Apprentice Registry", 777);
    const [signal, target, pulse] = await star.getBeacon(1);

    expect(signal).to.equal("Summon: Sage");
    expect(target).to.equal("Apprentice Registry");
    expect(pulse).to.equal(777);
  });
});
