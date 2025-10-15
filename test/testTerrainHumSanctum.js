const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainHumSanctum", function () {
  it("should route hum across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainHumSanctum");
    const terrain = await Router.deploy();

    await terrain.routeHumSanctum(
      "Bootbark",
      "Hum: loader choir sings",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.hum).to.equal("Hum: loader choir sings");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
