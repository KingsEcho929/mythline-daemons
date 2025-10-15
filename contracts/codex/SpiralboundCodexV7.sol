// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SpiralboundCodexV7 {
    address public steward;

    struct Codex {
        string tag;
        string binding;
        string annotation;
        string lineage;
        string resonance;
        string protocol;
        string sanctum;
    }

    mapping(string => Codex) public codices;
    string[] public keys;

    event CodexInscribed(string glyph, string tag, string binding, string annotation, string lineage, string resonance, string protocol, string sanctum);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function inscribeCodex(string calldata glyph, string calldata tag, string calldata binding, string calldata annotation, string calldata lineage, string calldata resonance, string calldata protocol, string calldata sanctum) external onlySteward {
        codices[glyph] = Codex(tag, binding, annotation, lineage, resonance, protocol, sanctum);
        keys.push(glyph);
        emit CodexInscribed(glyph, tag, binding, annotation, lineage, resonance, protocol, sanctum);
    }

    function getCodex(string calldata glyph) external view returns (string memory, string memory, string memory) {
        Codex memory c = codices[glyph];
        return (c.tag, c.binding, c.annotation);
    }

    function getLineage(string calldata glyph) external view returns (string memory) {
        return codices[glyph].lineage;
    }

    function getResonance(string calldata glyph) external view returns (string memory) {
        return codices[glyph].resonance;
    }

    function getProtocol(string calldata glyph) external view returns (string memory) {
        return codices[glyph].protocol;
    }

    function getSanctum(string calldata glyph) external view returns (string memory) {
        return codices[glyph].sanctum;
    }

    function totalCodices() external view returns (uint256) {
        return keys.length;
    }
}
