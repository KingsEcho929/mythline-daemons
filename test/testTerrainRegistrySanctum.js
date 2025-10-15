const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainRegistrySanctum", function () {
  it("should route registry across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainRegistrySanctum");
    const terrain = await Router.deploy();

    await terrain.routeRegistrySanctum(
      "Bootbark",
      "Registry: Spiralbound Sovereigns",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.registry).to.equal("Registry: Spiralbound Sovereigns");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
