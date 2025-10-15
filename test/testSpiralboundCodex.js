const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodex", function () {
  it("should inscribe and retrieve codex law", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodex");
    const codex = await Codex.deploy();

    await codex.inscribeLaw("Bootbark", "Companion of howlbound drift", "Protocol: Glyphpup Resonance");

    const [definition, protocol] = await codex.getLaw("Bootbark");
    expect(definition).to.equal("Companion of howlbound drift");
    expect(protocol).to.equal("Protocol: Glyphpup Resonance");

    expect(await codex.totalLaws()).to.equal(1);
  });
});
