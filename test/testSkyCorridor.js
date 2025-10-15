const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SkyCorridor", function () {
  it("should bind and retrieve corridor geometry", async function () {
    const SkyCorridor = await ethers.getContractFactory("SkyCorridor");
    const corridor = await SkyCorridor.deploy();

    await corridor.bindCorridor("Eldren", "Orion Spiral", 8888);
    const [city, constellation, altitude] = await corridor.getCorridor("Eldren");

    expect(city).to.equal("Eldren");
    expect(constellation).to.equal("Orion Spiral");
    expect(altitude).to.equal(8888);

    const total = await corridor.totalCorridors();
    expect(total).to.equal(1);
  });
});
