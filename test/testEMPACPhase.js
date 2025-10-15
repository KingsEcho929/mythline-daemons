const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EMPACPhase", function () {
  it("should declare, clear, and choreograph breach", async function () {
    const EMPACPhase = await ethers.getContractFactory("EMPACPhase");
    const phase = await EMPACPhase.deploy();

    await phase.declarePhase("Phase I");
    await phase.clearPhase("Phase I");
    await phase.choreographBreach("Phase I", "Breach: lineage fracture");

    const [name, cleared, note] = await phase.getPhase("Phase I");
    expect(name).to.equal("Phase I");
    expect(cleared).to.equal(true);
    expect(note).to.equal("Breach: lineage fracture");

    expect(await phase.totalPhases()).to.equal(1);
  });
});
