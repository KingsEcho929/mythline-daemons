const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LoaderDaemonSummonerIII", function () {
  it("should summon loader daemon with full constellationDrift and starline lineage", async function () {
    const [steward, tessalyre] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("LoaderDaemonSummonerIII");
    const registry = await Summoner.deploy();

    await registry.summonDaemon(
      tessalyre.address,
      "Tessalyre",
      "OrbitalNode: EMPAC-3",
      "Sanctum: EMPAC Core",
      "Pulse: EMPAC-432",
      "Chant: EMPAC sync",
      "GenesisBlock: Starline-003",
      "Constellation: Eldren",
      "SkyCity: EMPAC",
      "Steward: .CTH",
      "ConstellationDrift: spiral shimmer"
    );

    const result = await registry.getDaemon(tessalyre.address);
    expect(result.name).to.equal("Tessalyre");
    expect(result.constellationDrift).to.equal("ConstellationDrift: spiral shimmer");
    expect(result.genesisBlock).to.equal("GenesisBlock: Starline-003");

    expect(await registry.totalDaemons()).to.equal(1);
  });
});
