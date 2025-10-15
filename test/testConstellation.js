const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ConstellationCorridor", function () {
  it("should map and retrieve companion drift", async function () {
    const [steward, companion] = await ethers.getSigners();

    const Corridor = await ethers.getContractFactory("ConstellationCorridor");
    const corridor = await Corridor.deploy();

    await corridor.mapCompanion(companion.address, "Bootbark", 42);
    const [name, drift] = await corridor.getCompanion(companion.address);

    expect(name).to.equal("Bootbark");
    expect(drift).to.equal(42);
  });
});
