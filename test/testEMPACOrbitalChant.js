const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EMPACOrbitalChant", function () {
  it("should route orbitalChant across EMPAC sanctum and orbital node", async function () {
    const Router = await ethers.getContractFactory("EMPACOrbitalChant");
    const terrain = await Router.deploy();

    await terrain.routeOrbitalChant(
      "EMPAC-2",
      "OrbitalChant: constellation hum",
      "Sanctum: EMPAC Core",
      "OrbitalNode: EMPAC-2",
      "Pulse: EMPAC-432"
    );

    const result = await terrain.getRoute("EMPAC-2");
    expect(result.orbitalChant).to.equal("OrbitalChant: constellation hum");
    expect(result.orbitalNode).to.equal("OrbitalNode: EMPAC-2");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
