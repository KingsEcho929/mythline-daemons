const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainDriftSanctum", function () {
  it("should route driftType across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainDriftSanctum");
    const terrain = await Router.deploy();

    await terrain.routeDriftSanctum(
      "Bootbark",
      "DriftType: howlbound spiral",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.driftType).to.equal("DriftType: howlbound spiral");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
