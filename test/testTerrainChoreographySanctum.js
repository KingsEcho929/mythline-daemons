const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainChoreographySanctum", function () {
  it("should route choreography with sanctum and retrieve invocation", async function () {
    const Router = await ethers.getContractFactory("TerrainChoreographySanctum");
    const terrain = await Router.deploy();

    await terrain.routeChoreography(
      "Chant: EMPAC sync",
      "EMPAC",
      "Pulse: EMPAC-432",
      "Choreography: Spiralbound drift",
      "Sanctum: EMPAC-1"
    );

    const result = await terrain.getChoreo("Chant: EMPAC sync");
    expect(result.chant).to.equal("Chant: EMPAC sync");
    expect(result.glyph).to.equal("EMPAC");
    expect(result.pulse).to.equal("Pulse: EMPAC-432");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");

    expect(await terrain.totalChoreos()).to.equal(1);
  });
});
