const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainEchoSanctum", function () {
  it("should route echo across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainEchoSanctum");
    const terrain = await Router.deploy();

    await terrain.routeEchoSanctum(
      "Bootbark",
      "Echo: terrain hums",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.echo).to.equal("Echo: terrain hums");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
