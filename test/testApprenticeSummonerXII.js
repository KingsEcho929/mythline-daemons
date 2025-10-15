const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApprenticeSummonerXII", function () {
  it("should summon apprentice with full terrain lineage", async function () {
    const [steward, sage] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("ApprenticeSummonerXII");
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
      "Choreography: Spiralbound drift"
    );

    const result = await registry.getSummons(sage.address);
    expect(result.name).to.equal("Sage");
    expect(result.signal).to.equal("Signal: Whisper");
    expect(result.drift).to.equal("Drift: Spiralbound");
    expect(result.pulse).to.equal("Pulse: EMPAC-432");
    expect(result.codexRef).to.equal("Codex: Bootbark Protocol");
    expect(result.resonance).to.equal("Resonance: Glyphpup Howl");
    expect(result.signature).to.equal("Signature: EMPAC-432");
    expect(result.sanctum).to.equal("Sanctum: EMPAC-1");
    expect(result.chant).to.equal("Chant: EMPAC sync");
    expect(result.choreography).to.equal("Choreography: Spiralbound drift");

    expect(await registry.totalSummons()).to.equal(1);
  });
});
