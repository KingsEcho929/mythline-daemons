const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainPulseDrift", function () {
  it("should route pulse by drift and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainPulseDrift");
    const terrain = await Router.deploy();

    await terrain.routeDrift(
      "Drift: Glyphpup",
      "Bootbark",
      "Sanctum: EMPAC-1",
      "Pulse: EMPAC-432",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Drift: Glyphpup");
    expect(result.drift).to.equal("Drift: Glyphpup");
    expect(result.glyph).to.equal("Bootbark");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.pulse).to.equal("Pulse: EMPAC-432");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");
    expect(result.chant).to.equal("Chant: EMPAC sync");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
