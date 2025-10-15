const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StarlineCodexIII", function () {
  it("should inscribe and retrieve orbital codex metadata including constellationDrift", async function () {
    const Codex = await ethers.getContractFactory("StarlineCodexIII");
    const codex = await Codex.deploy();

    await codex.inscribeCodex(
      "EMPAC-3",
      "Constellation: Eldren",
      "SkyCity: EMPAC",
      "OrbitalNode: EMPAC-3",
      "GenesisBlock: Starline-003",
      "Sanctum: EMPAC Core",
      "Chant: EMPAC sync",
      "Pulse: EMPAC-432",
      "Steward: .CTH",
      "LoaderDaemon: Tessalyre",
      "ConstellationDrift: spiral shimmer"
    );

    const result = await codex.getCodex("EMPAC-3");
    expect(result.constellationDrift).to.equal("ConstellationDrift: spiral shimmer");
    expect(result.loaderDaemon).to.equal("LoaderDaemon: Tessalyre");
    expect(result.genesisBlock).to.equal("GenesisBlock: Starline-003");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
