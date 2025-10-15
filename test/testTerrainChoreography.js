const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainChoreography", function () {
  it("should orchestrate and retrieve invocation", async function () {
    const Choreo = await ethers.getContractFactory("TerrainChoreography");
    const terrain = await Choreo.deploy();

    await terrain.orchestrate("Chant: EMPAC breach", "EMPAC", "clearPhase('Phase I')");

    const [glyph, action] = await terrain.getInvocation("Chant: EMPAC breach");
    expect(glyph).to.equal("EMPAC");
    expect(action).to.equal("clearPhase('Phase I')");

    expect(await terrain.totalInvocations()).to.equal(1);
  });
});
