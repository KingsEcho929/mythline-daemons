const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainCompanionSanctum", function () {
  it("should route companion across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainCompanionSanctum");
    const terrain = await Router.deploy();

    await terrain.routeCompanionSanctum(
      "Bootbark",
      "Companion: Bootbark Whe Wolf",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.glyph).to.equal("Bootbark");
    expect(result.companion).to.equal("Companion: Bootbark Whe Wolf");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");
    expect(result.chant).to.equal("Chant: EMPAC sync");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
