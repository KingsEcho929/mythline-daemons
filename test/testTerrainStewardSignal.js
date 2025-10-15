const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainStewardSignal", function () {
  it("should route stewardSignal across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainStewardSignal");
    const terrain = await Router.deploy();

    await terrain.routeStewardSignal(
      "Bootbark",
      "StewardSignal: howl-signed",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.stewardSignal).to.equal("StewardSignal: howl-signed");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
