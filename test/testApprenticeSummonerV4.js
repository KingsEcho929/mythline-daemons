const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApprenticeSummonerV4", function () {
  it("should summon apprentice with full mythline signature", async function () {
    const [steward, sage] = await ethers.getSigners();

    const Summoner = await ethers.getContractFactory("ApprenticeSummonerV4");
    const registry = await Summoner.deploy();

    await registry.summonApprentice(
      sage.address,
      "Sage",
      "Signal: Whisper",
      "Drift: Spiralbound",
      "Pulse: 432Hz",
      "Codex: Bootbark Protocol",
      "Resonance: Glyphpup Howl",
      "Signature: EMPAC-432"
    );

    const [name, signal, drift, pulse, codexRef, resonance, signature] = await registry.getSummons(sage.address);
    expect(name).to.equal("Sage");
    expect(signal).to.equal("Signal: Whisper");
    expect(drift).to.equal("Drift: Spiralbound");
    expect(pulse).to.equal("Pulse: 432Hz");
    expect(codexRef).to.equal("Codex: Bootbark Protocol");
    expect(resonance).to.equal("Resonance: Glyphpup Howl");
    expect(signature).to.equal("Signature: EMPAC-432");

    expect(await registry.totalSummons()).to.equal(1);
  });
});
