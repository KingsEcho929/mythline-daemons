const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EMPACConstellationDrift", function () {
  it("should route constellationDrift across EMPAC sanctum and orbital node", async function () {
    const Router = await ethers.getContractFactory("EMPACConstellationDrift");
    const terrain = await Router.deploy();

    await terrain.routeConstellationDrift(
      "EMPAC-3",
      "ConstellationDrift: spiral shimmer",
      "Sanctum: EMPAC Core",
      "OrbitalNode: EMPAC-3",
      "Pulse: EMPAC-432"
    );

    const result = await terrain.getRoute("EMPAC-3");
    expect(result.constellationDrift).to.equal("ConstellationDrift: spiral shimmer");
    expect(result.orbitalNode).to.equal("OrbitalNode: EMPAC-3");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
