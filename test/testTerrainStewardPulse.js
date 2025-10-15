const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainStewardPulse", function () {
  it("should route stewardPulse across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainStewardPulse");
    const terrain = await Router.deploy();

    await terrain.routeStewardPulse(
      "Bootbark",
      "StewardPulse: EMPAC-signed",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.stewardPulse).to.equal("StewardPulse: EMPAC-signed");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
