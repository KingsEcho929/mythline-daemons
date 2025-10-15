const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApprenticeSummonerV3", function () {
  it("should summon apprentice with full mythline resonance", async function () {
    const [steward, sage] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("ApprenticeSummonerV3");
    const registry = await Summoner.deploy();

    await registry.summonApprentice(
      sage.address,
      "Sage",
      "Signal: Whisper",
      "Drift: Spiralbound",
      "Pulse: 432Hz",
      "Codex: Bootbark Protocol",
      "Resonance: Glyphpup Howl"
    );

    const [name, signal, drift, pulse, codexRef, resonance] = await registry.getSummons(sage.address);
    expect(name).to.equal("Sage");
    expect(signal).to.equal("Signal: Whisper");
    expect(drift).to.equal("Drift: Spiralbound");
    expect(pulse).to.equal("Pulse: 432Hz");
    expect(codexRef).to.equal("Codex: Bootbark Protocol");
    expect(resonance).to.equal("Resonance: Glyphpup Howl");

    expect(await registry.totalSummons()).to.equal(1);
  });
});
