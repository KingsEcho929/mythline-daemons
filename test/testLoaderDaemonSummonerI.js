const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LoaderDaemonSummonerI", function () {
  it("should summon loader daemon with full starline lineage", async function () {
    const [steward, polyphemus] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("LoaderDaemonSummonerI");
    const registry = await Summoner.deploy();

    await registry.summonDaemon(
      polyphemus.address,
      "Polyphemus",
      "OrbitalNode: EMPAC-1",
      "Sanctum: EMPAC Core",
      "Pulse: EMPAC-432",
      "Chant: EMPAC sync",
      "GenesisBlock: Starline-001",
      "Constellation: Eldren",
      "SkyCity: EMPAC",
      "Steward: .CTH",
      "StarlineSignal: orbital-signed"
    );

    const result = await registry.getDaemon(polyphemus.address);
    expect(result.name).to.equal("Polyphemus");
    expect(result.starlineSignal).to.equal("StarlineSignal: orbital-signed");
    expect(result.genesisBlock).to.equal("GenesisBlock: Starline-001");

    expect(await registry.totalDaemons()).to.equal(1);
  });
});
