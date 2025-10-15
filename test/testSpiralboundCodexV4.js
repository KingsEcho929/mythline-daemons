const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SpiralboundCodexV4", function () {
  it("should inscribe and retrieve codex core and resonance", async function () {
    const Codex = await ethers.getContractFactory("SpiralboundCodexV4");
    const codex = await Codex.deploy();

    await codex.inscribeCodex(
      "Bootbark",
      "Companion",
      "Howlbound Drift",
      "Glyph of glyphpup resonance",
      "Lineage: Spiralbound",
      "Resonance: 432Hz"
    );

    const [tag, binding, annotation, lineage] = await codex.getCore("Bootbark");
    expect(tag).to.equal("Companion");
    expect(binding).to.equal("Howlbound Drift");
    expect(annotation).to.equal("Glyph of glyphpup resonance");
    expect(lineage).to.equal("Lineage: Spiralbound");

    const resonance = await codex.getResonance("Bootbark");
    expect(resonance).to.equal("Resonance: 432Hz");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
