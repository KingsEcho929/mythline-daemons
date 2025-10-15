const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainChoreographyRouter", function () {
  it("should route choreography and retrieve invocation", async function () {
    const Router = await ethers.getContractFactory("TerrainChoreographyRouter");
    const terrain = await Router.deploy();

    await terrain.routeChoreography(
      "Chant: EMPAC sync",
      "EMPAC",
      "Pulse: 432Hz",
      "Choreography: Spiralbound drift"
    );

    const [glyph, pulse, choreography] = await terrain.getRoute("Chant: EMPAC sync");
    expect(glyph).to.equal("EMPAC");
    expect(pulse).to.equal("Pulse: 432Hz");
    expect(choreography).to.equal("Choreography: Spiralbound drift");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
