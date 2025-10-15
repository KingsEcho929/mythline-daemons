const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainCompanionPulse", function () {
  it("should route companionPulse across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainCompanionPulse");
    const terrain = await Router.deploy();

    await terrain.routeCompanionPulse(
      "Bootbark",
      "CompanionPulse: howl-synced",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.companionPulse).to.equal("CompanionPulse: howl-synced");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
