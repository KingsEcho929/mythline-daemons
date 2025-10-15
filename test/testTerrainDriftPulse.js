const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainDriftPulse", function () {
  it("should route driftPulse across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainDriftPulse");
    const terrain = await Router.deploy();

    await terrain.routeDriftPulse(
      "Bootbark",
      "DriftPulse: spiral-synced",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.driftPulse).to.equal("DriftPulse: spiral-synced");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
