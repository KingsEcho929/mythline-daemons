const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainPulseChoreography", function () {
  it("should route pulse by choreography type across sanctum", async function () {
    const Router = await ethers.getContractFactory("TerrainPulseChoreography");
    const terrain = await Router.deploy();

    await terrain.routePulseChoreography(
      "Bootbark",
      "Pulse: EMPAC-432",
      "ChoreographyType: sovereign drift",
      "Sanctum: EMPAC-1",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.pulse).to.equal("Pulse: EMPAC-432");
    expect(result.choreographyType).to.equal("ChoreographyType: sovereign drift");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
