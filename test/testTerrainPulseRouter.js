const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TerrainPulseRouter", function () {
  it("should route and retrieve terrain pulse", async function () {
    const Router = await ethers.getContractFactory("TerrainPulseRouter");
    const terrain = await Router.deploy();

    await terrain.routePulse("Chant: Eldren Drift", "Eldren", "Pulse: 432Hz");

    const [target, pulse] = await terrain.getRoute("Chant: Eldren Drift");
    expect(target).to.equal("Eldren");
    expect(pulse).to.equal("Pulse: 432Hz");

    expect(await terrain.totalRoutes()).to.equal(1);
  });
});
