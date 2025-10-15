const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainPulseSignal", function () {
  it("should route pulseSignal across sanctum and retrieve choreography", async function () {
    const Router = await ethers.getContractFactory("TerrainPulseSignal");
    const terrain = await Router.deploy();

    await terrain.routePulseSignal(
      "Bootbark",
      "PulseSignal: harmonic whisper",
      "Sanctum: EMPAC-1",
      "Choreography: Spiralbound drift",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("Bootbark");
    expect(result.pulseSignal).to.equal("PulseSignal: harmonic whisper");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
