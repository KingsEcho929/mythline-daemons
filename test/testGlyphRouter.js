const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GlyphRouter", function () {
  it("should link and retrieve glyph routes", async function () {
    const [steward, empac] = await ethers.getSigners();

    const Router = await ethers.getContractFactory("GlyphRouter");
    const router = await Router.deploy();

    await router.linkRoute("EMPAC", empac.address, "clearPhase(string)");

    const [target, method] = await router.getRoute("EMPAC");
    expect(target).to.equal(empac.address);
    expect(method).to.equal("clearPhase(string)");

    expect(await router.totalRoutes()).to.equal(1);
  });
});
