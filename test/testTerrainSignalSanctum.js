const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainSignalSanctum", function () {
  it("should route signalChoreography across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainSignalSanctum");
    const terrain = await Router.deploy();

    await terrain.routeSignalSanctum(
      "Bootbark",
      "SignalChoreography: whisper spiral",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.signalChoreography).to.equal("SignalChoreography: whisper spiral");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
