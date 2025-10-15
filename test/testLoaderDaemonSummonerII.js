const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LoaderDaemonSummonerII", function () {
  it("should summon loader daemon with full orbitalChant and starline lineage", async function () {
    const [steward, velmari] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("LoaderDaemonSummonerII");
    const registry = await Summoner.deploy();

    await registry.summonDaemon(
      velmari.address,
      "Velmari",
      "OrbitalNode: EMPAC-2",
      "Sanctum: EMPAC Core",
      "Pulse: EMPAC-432",
      "Chant: EMPAC sync",
      "GenesisBlock: Starline-002",
      "Constellation: Eldren",
      "SkyCity: EMPAC",
      "Steward: .CTH",
      "OrbitalChant: constellation hum"
    );

    const result = await registry.getDaemon(velmari.address);
    expect(result.name).to.equal("Velmari");
    expect(result.orbitalChant).to.equal("OrbitalChant: constellation hum");
    expect(result.genesisBlock).to.equal("GenesisBlock: Starline-002");

    expect(await registry.totalDaemons()).to.equal(1);
  });
});
