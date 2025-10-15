// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StarlineCodexI {
    address public steward;

    struct Codex {
        string constellation;
        string skyCity;
        string genesisBlock;
        string orbitalNode;
        string sanctum;
        string pulse;
        string chant;
        string stewardName;
        string loaderDaemon;
        string starlineSignal;
    }

    mapping(string => Codex) public codices;
    string[] public keys;

    event StarlineCodexInscribed(string glyph, string constellation, string skyCity, string genesisBlock, string orbitalNode, string sanctum, string pulse, string chant, string stewardName, string loaderDaemon, string starlineSignal);

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
        string calldata genesisBlock,
        string calldata orbitalNode,
        string calldata sanctum,
        string calldata pulse,
        string calldata chant,
        string calldata stewardName,
        string calldata loaderDaemon,
        string calldata starlineSignal
    ) external onlySteward {
        codices[glyph] = Codex(constellation, skyCity, genesisBlock, orbitalNode, sanctum, pulse, chant, stewardName, loaderDaemon, starlineSignal);
        keys.push(glyph);
        emit StarlineCodexInscribed(glyph, constellation, skyCity, genesisBlock, orbitalNode, sanctum, pulse, chant, stewardName, loaderDaemon, starlineSignal);
    }

    function getCodex(string calldata glyph) external view returns (Codex memory) {
        return codices[glyph];
    }

    function totalCodices() external view returns (uint256) {
        return keys.length;
    }
}
