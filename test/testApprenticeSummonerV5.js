const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApprenticeSummonerV5", function () {
  it("should summon apprentice with full pulse and sanctum metadata", async function () {
    const [steward, sage] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("ApprenticeSummonerV5");
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
      "Sanctum: EMPAC-1"
    );

    const [name, signal, drift, pulse, codexRef, resonance, signature, sanctum] = await registry.getSummons(sage.address);
    expect(name).to.equal("Sage");
    expect(signal).to.equal("Signal: Whisper");
    expect(drift).to.equal("Drift: Spiralbound");
    expect(pulse).to.equal("Pulse: EMPAC-432");
    expect(codexRef).to.equal("Codex: Bootbark Protocol");
    expect(resonance).to.equal("Resonance: Glyphpup Howl");
    expect(signature).to.equal("Signature: EMPAC-432");
    expect(sanctum).to.equal("Sanctum: EMPAC-1");

    expect(await registry.totalSummons()).to.equal(1);
  });
});
