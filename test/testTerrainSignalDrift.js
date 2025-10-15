const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainSignalDrift", function () {
  it("should route signalType by driftType across sanctum", async function () {
    const Router = await ethers.getContractFactory("TerrainSignalDrift");
    const terrain = await Router.deploy();

    await terrain.routeSignalDrift(
      "Bootbark",
      "SignalType: whisperbound pulse",
      "DriftType: howlbound spiral",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.signalType).to.equal("SignalType: whisperbound pulse");
    expect(result.driftType).to.equal("DriftType: howlbound spiral");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
