const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainPulseChant", function () {
  it("should route pulse by chant and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainPulseChant");
    const terrain = await Router.deploy();

    await terrain.routeChant(
      "Chant: EMPAC sync",
      "EMPAC",
      "Sanctum: EMPAC-1",
      "Pulse: EMPAC-432",
      "Choreography: Spiralbound drift"
    );

    const [glyph, sanctum, pulse, choreography] = await terrain.getRoute("Chant: EMPAC sync");
    expect(glyph).to.equal("EMPAC");
    expect(sanctum).to.equal("Sanctum: EMPAC-1");
    expect(pulse).to.equal("Pulse: EMPAC-432");
    expect(choreography).to.equal("Choreography: Spiralbound drift");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
