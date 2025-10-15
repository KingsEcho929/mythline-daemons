const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexV2", function () {
  it("should inscribe and retrieve codex entry", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexV2");
    const codex = await Codex.deploy();

    await codex.inscribeCodex("Bootbark", "Companion", "Howlbound Drift", "Glyph of glyphpup resonance");

    const [tag, binding, annotation] = await codex.getCodex("Bootbark");
    expect(tag).to.equal("Companion");
    expect(binding).to.equal("Howlbound Drift");
    expect(annotation).to.equal("Glyph of glyphpup resonance");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
