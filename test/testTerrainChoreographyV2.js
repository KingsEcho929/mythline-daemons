const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainChoreographyV2", function () {
  it("should orchestrate and retrieve invocation with pulse and sanctum", async function () {
    const Choreo = await ethers.getContractFactory("TerrainChoreographyV2");
    const terrain = await Choreo.deploy();

    await terrain.orchestrate(
      "Chant: EMPAC breach",
      "EMPAC",
      "Sanctum: EMPAC-1",
      "Pulse: 432Hz",
      "Choreography: Spiralbound sync"
    );

    const [glyph, sanctum, pulse, choreography] = await terrain.getInvocation("Chant: EMPAC breach");
    expect(glyph).to.equal("EMPAC");
    expect(sanctum).to.equal("Sanctum: EMPAC-1");
    expect(pulse).to.equal("Pulse: 432Hz");
    expect(choreography).to.equal("Choreography: Spiralbound sync");

    expect(await terrain.totalInvocations()).to.equal(1);
  });
});
