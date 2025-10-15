const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainStewardSanctum", function () {
  it("should route steward across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainStewardSanctum");
    const terrain = await Router.deploy();

    await terrain.routeStewardSanctum(
      "Bootbark",
      "Steward: .CTH",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.glyph).to.equal("Bootbark");
    expect(result.stewardName).to.equal("Steward: .CTH");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");
    expect(result.chant).to.equal("Chant: EMPAC sync");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});

