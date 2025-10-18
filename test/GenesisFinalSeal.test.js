const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GenesisFinalSeal", function () {
  let GenesisFinalSeal, contract, owner, other;

  beforeEach(async function () {
    [owner, other] = await ethers.getSigners();
    GenesisFinalSeal = await ethers.getContractFactory("GenesisFinalSeal");
    contract = await GenesisFinalSeal.deploy("Crowned");
  });

  it("should initialize with correct seal", async function () {
    const seal = await contract.seal();
    expect(seal).to.equal("Crowned");
  });

  it("should allow owner to update seal", async function () {
    await contract.updateSeal("Awakened");
    const updatedSeal = await contract.seal();
    expect(updatedSeal).to.equal("Awakened");
  });

  it("should revert if non-owner tries to update seal", async function () {
    await expect(
      contract.connect(other).updateSeal("Forbidden")
    ).to.be.reverted;
  });

  it("should confirm owner is correct", async function () {
    const currentOwner = await contract.owner();
    expect(currentOwner).to.equal(owner.address);
  });

  it("should allow multiple seal updates by owner", async function () {
    await contract.updateSeal("Awakened");
    await contract.updateSeal("Sealed Again");
    expect(await contract.seal()).to.equal("Sealed Again");
  });
});
