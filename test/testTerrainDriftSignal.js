const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainDriftSignal", function () {
  it("should route driftSignal across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainDriftSignal");
    const terrain = await Router.deploy();

    await terrain.routeDriftSignal(
      "Bootbark",
      "DriftSignal: spiral howl",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.driftSignal).to.equal("DriftSignal: spiral howl");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
