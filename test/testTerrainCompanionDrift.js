const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainCompanionDrift", function () {
  it("should route companionType by driftType across sanctum", async function () {
    const Router = await ethers.getContractFactory("TerrainCompanionDrift");
    const terrain = await Router.deploy();

    await terrain.routeCompanionDrift(
      "Bootbark",
      "CompanionType: spiropup",
      "DriftType: howlbound spiral",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.companionType).to.equal("CompanionType: spiropup");
    expect(result.driftType).to.equal("DriftType: howlbound spiral");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
