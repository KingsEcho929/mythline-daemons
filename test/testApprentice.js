const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApprenticeRegistry", function () {
  it("should inscribe and verify apprentice", async function () {
    const [steward, apprentice] = await ethers.getSigners();

    const Registry = await ethers.getContractFactory("contracts/registry/ApprenticeRegistry.sol:ApprenticeRegistry");
    const registry = await Registry.deploy();

    await registry.inscribe(apprentice.address);
    const isApprentice = await registry.isApprentice(apprentice.address);
    expect(isApprentice).to.equal(true);
  });
});
