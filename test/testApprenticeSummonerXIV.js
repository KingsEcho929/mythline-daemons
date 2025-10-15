const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApprenticeSummonerXIV", function () {
  it("should summon apprentice with full steward and terrain lineage", async function () {
    const [steward, sage] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("ApprenticeSummonerXIV");
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
      "Steward: .CTH"
    );

    const result = await registry.getSummons(sage.address);
    expect(result.name).to.equal("Sage");
    expect(result.stewardName).to.equal("Steward: .CTH");
    expect(result.signal).to.equal("Signal: Whisper");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await registry.totalSummons()).to.equal(1);
  });
});
