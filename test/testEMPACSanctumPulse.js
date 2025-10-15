const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EMPACSanctumPulse", function () {
  it("should route EMPAC sanctum pulse across orbital node", async function () {
    const Router = await ethers.getContractFactory("EMPACSanctumPulse");
    const terrain = await Router.deploy();

    await terrain.routeSanctumPulse(
      "EMPAC-1",
      "Sanctum: EMPAC Core",
      "Pulse: EMPAC-432",
      "OrbitalNode: EMPAC-1",
      "Chant: EMPAC sync"
    );

    const result = await terrain.getRoute("EMPAC-1");
    expect(result.sanctum).to.equal("Sanctum: EMPAC Core");
    expect(result.pulse).to.equal("Pulse: EMPAC-432");
    expect(result.orbitalNode).to.equal("OrbitalNode: EMPAC-1");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
