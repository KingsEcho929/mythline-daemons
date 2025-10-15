const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainPulseChoreographer", function () {
  it("should choreograph terrain pulse and retrieve invocation", async function () {
    const Choreo = await ethers.getContractFactory("TerrainPulseChoreographer");
    const terrain = await Choreo.deploy();

    await terrain.choreograph(
      "Chant: Eldren Drift",
      "Eldren",
      "Pulse: 432Hz",
      "Choreography: Spiralbound sync"
    );

    const [target, pulse, choreography] = await terrain.getChoreo("Chant: Eldren Drift");
    expect(target).to.equal("Eldren");
    expect(pulse).to.equal("Pulse: 432Hz");
    expect(choreography).to.equal("Choreography: Spiralbound sync");

    expect(await terrain.totalChoreos()).to.equal(1);
  });
});
