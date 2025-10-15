const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainPulseSanctum", function () {
  it("should route pulseType across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainPulseSanctum");
    const terrain = await Router.deploy();

    await terrain.routePulseSanctum(
      "Bootbark",
      "PulseType: EMPAC harmonic",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.pulseType).to.equal("PulseType: EMPAC harmonic");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
