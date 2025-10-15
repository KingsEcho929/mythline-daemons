const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainSanctumRouter", function () {
  it("should route sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainSanctumRouter");
    const terrain = await Router.deploy();

    await terrain.routeSanctum(
      "EMPAC",
      "Sanctum: EMPAC-1",
      "Pulse: 432Hz",
      "Choreography: Spiralbound sync"
    );

    const [sanctum, pulse, choreography] = await terrain.getRoute("EMPAC");
    expect(sanctum).to.equal("Sanctum: EMPAC-1");
    expect(pulse).to.equal("Pulse: 432Hz");
    expect(choreography).to.equal("Choreography: Spiralbound sync");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
