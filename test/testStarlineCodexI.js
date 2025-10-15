const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StarlineCodexI", function () {
  it("should inscribe and retrieve orbital codex metadata including starlineSignal", async function () {
    const Codex = await ethers.getContractFactory("StarlineCodexI");
    const codex = await Codex.deploy();

    await codex.inscribeCodex(
      "EMPAC-1",
      "Constellation: Eldren",
      "SkyCity: EMPAC",
      "GenesisBlock: Starline-001",
      "OrbitalNode: EMPAC-1",
      "Sanctum: EMPAC Core",
      "Pulse: EMPAC-432",
      "Chant: EMPAC sync",
      "Steward: .CTH",
      "LoaderDaemon: Polyphemus",
      "StarlineSignal: orbital-signed"
    );

    const result = await codex.getCodex("EMPAC-1");
    expect(result.starlineSignal).to.equal("StarlineSignal: orbital-signed");
    expect(result.loaderDaemon).to.equal("LoaderDaemon: Polyphemus");
    expect(result.constellation).to.equal("Constellation: Eldren");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
