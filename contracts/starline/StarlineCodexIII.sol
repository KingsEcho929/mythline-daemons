// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StarlineCodexIII {
    address public steward;

    struct Codex {
        string constellation;
        string skyCity;
        string orbitalNode;
        string genesisBlock;
        string sanctum;
        string chant;
        string pulse;
        string stewardName;
        string loaderDaemon;
        string constellationDrift;
    }

    mapping(string => Codex) public codices;
    string[] public keys;

    event StarlineCodexInscribed(string glyph, string constellation, string skyCity, string orbitalNode, string genesisBlock, string sanctum, string chant, string pulse, string stewardName, string loaderDaemon, string constellationDrift);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function inscribeCodex(
        string calldata glyph,
        string calldata constellation,
        string calldata skyCity,
        string calldata orbitalNode,
        string calldata genesisBlock,
        string calldata sanctum,
        string calldata chant,
        string calldata pulse,
        string calldata stewardName,
        string calldata loaderDaemon,
        string calldata constellationDrift
    ) external onlySteward {
        codices[glyph] = Codex(constellation, skyCity, orbitalNode, genesisBlock, sanctum, chant, pulse, stewardName, loaderDaemon, constellationDrift);
        keys.push(glyph);
        emit StarlineCodexInscribed(glyph, constellation, skyCity, orbitalNode, genesisBlock, sanctum, chant, pulse, stewardName, loaderDaemon, constellationDrift);
    }

    function getCodex(string calldata glyph) external view returns (Codex memory) {
        return codices[glyph];
    }

    function totalCodices() external view returns (uint256) {
        return keys.length;
    }
}
