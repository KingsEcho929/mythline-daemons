const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApprenticeSummonerXV", function () {
  it("should summon apprentice with full echo and terrain lineage", async function () {
    const [steward, sage] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("ApprenticeSummonerXV");
    const registry = await Summoner.deploy();

    await registry.summonApprentice(
      sage.address,
      "Sage",
      "Signal: Whisper",
      "Drift: Spiralbound",
      "Pulse: EMPAC-432",
      "Codex: Bootbark Protocol",
      "Resonance: Glyphpup Howl",
      "Signature: EMPAC-432",
      "Sanctum: EMPAC-1",
      "Chant: EMPAC sync",
      "Choreography: Spiralbound drift",
      "Steward: .CTH",
      "Echo: terrain hums"
    );

    const result = await registry.getSummons(sage.address);
    expect(result.name).to.equal("Sage");
    expect(result.echo).to.equal("Echo: terrain hums");
    expect(result.stewardName).to.equal("Steward: .CTH");
    expect(result.signal).to.equal("Signal: Whisper");

    expect(await registry.totalSummons()).to.equal(1);
  });
});
