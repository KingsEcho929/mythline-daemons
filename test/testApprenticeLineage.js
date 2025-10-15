const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApprenticeLineage", function () {
  it("should inscribe and retrieve apprentice lineage", async function () {
    const [steward, sage] = await ethers.getSigners();

    const Lineage = await ethers.getContractFactory("contracts/registry/ApprenticeLineage.sol:ApprenticeLineage");
    const registry = await Lineage.deploy();

    await registry.inscribeLineage(sage.address, "Sage", "Drift: Whisper", "Resonance: Spiralbound");

    const [name, drift, resonance] = await registry.getLineage(sage.address);
    expect(name).to.equal("Sage");
    expect(drift).to.equal("Drift: Whisper");
    expect(resonance).to.equal("Resonance: Spiralbound");

    expect(await registry.totalLineages()).to.equal(1);
  });
});
