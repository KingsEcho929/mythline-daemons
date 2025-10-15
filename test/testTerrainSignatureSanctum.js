const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainSignatureSanctum", function () {
  it("should route signature across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainSignatureSanctum");
    const terrain = await Router.deploy();

    await terrain.routeSignatureSanctum(
      "Bootbark",
      "Signature: EMPAC-432",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.glyph).to.equal("Bootbark");
    expect(result.signature).to.equal("Signature: EMPAC-432");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");
    expect(result.chant).to.equal("Chant: EMPAC sync");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
