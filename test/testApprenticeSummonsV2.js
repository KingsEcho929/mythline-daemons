const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApprenticeSummonsV2", function () {
  it("should summon apprentice with drift, pulse, and codexRef", async function () {
    const [steward, sage] = await ethers.getSigners();

    const Summons = await ethers.getContractFactory("contracts/registry/ApprenticeSummonsV2.sol:ApprenticeSummonsV2");
    const registry = await Summons.deploy();

    await registry.summonApprentice(
      sage.address,
      "Sage",
      "Signal: Whisper",
      "Drift: Spiralbound",
      "Pulse: 432Hz",
      "Codex: Bootbark Protocol"
    );

    const [name, signal, drift, pulse, codexRef] = await registry.getSummons(sage.address);
    expect(name).to.equal("Sage");
    expect(signal).to.equal("Signal: Whisper");
    expect(drift).to.equal("Drift: Spiralbound");
    expect(pulse).to.equal("Pulse: 432Hz");
    expect(codexRef).to.equal("Codex: Bootbark Protocol");

    expect(await registry.totalSummons()).to.equal(1);
  });
});
