const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Starline", function () {
  it("should inscribe genesis, crown node, and bind drift", async function () {
    const Starline = await ethers.getContractFactory("Starline");
    const starline = await Starline.deploy("Eldren sky city activated");

    expect(await starline.genesisMessage()).to.equal("Eldren sky city activated");

    await starline.crownOrbitalNode();
    expect(await starline.orbitalNodeCount()).to.equal(1);

    await starline.bindDrift(1, "Bootbark drift corridor");
    expect(await starline.orbitalDrift(1)).to.equal("Bootbark drift corridor");
  });
});
