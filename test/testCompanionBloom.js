const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CompanionBloom", function () {
  it("should bloom companion and retrieve traits", async function () {
    const [steward, bootbark] = await ethers.getSigners();

    const Bloom = await ethers.getContractFactory("CompanionBloom");
    const bloom = await Bloom.deploy();

    await bloom.bloomCompanion(bootbark.address, "Bootbark", "Howlbound", "Glyphpup Resonance");
    const [name, trait, resonance] = await bloom.getBloom(bootbark.address);

    expect(name).to.equal("Bootbark");
    expect(trait).to.equal("Howlbound");
    expect(resonance).to.equal("Glyphpup Resonance");

    expect(await bloom.totalBlooms()).to.equal(1);
  });
});
