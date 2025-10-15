const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SkyCity", function () {
  it("should crown city and update altitude", async function () {
    const SkyCity = await ethers.getContractFactory("SkyCity");
    const city = await SkyCity.deploy("Eldren", 8888);

    expect(await city.cityName()).to.equal("Eldren");
    expect(await city.altitude()).to.equal(8888);

    await city.updateAltitude(9000);
    expect(await city.altitude()).to.equal(9000);
  });
});
