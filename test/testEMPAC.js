const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EMPAC", function () {
  it("should clear phase, certify mythline, and echo lineage", async function () {
    const EMPAC = await ethers.getContractFactory("EMPAC");
    const empac = await EMPAC.deploy();

    await empac.clearPhase("Phase I");
    await empac.certifyMythline("Spiralbound Sovereigns");
    await empac.echoLineage("Sage");

    expect(await empac.phaseClear("Phase I")).to.equal(true);
    expect(await empac.mythlineCompliant("Spiralbound Sovereigns")).to.equal(true);
    expect(await empac.getLineage(0)).to.equal("Sage");
  });
});
