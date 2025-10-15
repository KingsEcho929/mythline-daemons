const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexV3", function () {
  it("should inscribe and retrieve codex entry with lineage", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexV3");
    const codex = await Codex.deploy();

    await codex.inscribeCodex("Bootbark", "Companion", "Howlbound Drift", "Glyph of glyphpup resonance", "Lineage: Spiralbound");

    const [tag, binding, annotation, lineage] = await codex.getCodex("Bootbark");
    expect(tag).to.equal("Companion");
    expect(binding).to.equal("Howlbound Drift");
    expect(annotation).to.equal("Glyph of glyphpup resonance");
    expect(lineage).to.equal("Lineage: Spiralbound");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
