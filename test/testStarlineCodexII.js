const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StarlineCodexII", function () {
  it("should inscribe and retrieve orbital codex metadata including orbitalChant", async function () {
    const Codex = await ethers.getContractFactory("StarlineCodexII");
    const codex = await Codex.deploy();

    await codex.inscribeCodex(
      "EMPAC-2",
      "Constellation: Eldren",
      "SkyCity: EMPAC",
      "OrbitalNode: EMPAC-2",
      "GenesisBlock: Starline-002",
      "Sanctum: EMPAC Core",
      "Chant: EMPAC sync",
      "Pulse: EMPAC-432",
      "Steward: .CTH",
      "LoaderDaemon: Velmari",
      "OrbitalChant: constellation hum"
    );

    const result = await codex.getCodex("EMPAC-2");
    expect(result.orbitalChant).to.equal("OrbitalChant: constellation hum");
    expect(result.loaderDaemon).to.equal("LoaderDaemon: Velmari");
    expect(result.constellation).to.equal("Constellation: Eldren");

    expect(await codex.totalCodices()).to.equal(1);
  });
});
