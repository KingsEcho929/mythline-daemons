// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SpiralboundCodexX {
    address public steward;

    struct Codex {
        string tag;
        string binding;
        string annotation;
        string lineage;
        string resonance;
        string protocol;
        string sanctum;
        string pulse;
        string chant;
        string choreography;
    }

    mapping(string => Codex) public codices;
    string[] public keys;

    event CodexInscribed(string glyph, string tag, string binding, string annotation, string lineage, string resonance, string protocol, string sanctum, string pulse, string chant, string choreography);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function inscribeCodex(
        string calldata glyph,
        string calldata tag,
        string calldata binding,
        string calldata annotation,
        string calldata lineage,
        string calldata resonance,
        string calldata protocol,
        string calldata sanctum,
        string calldata pulse,
        string calldata chant,
        string calldata choreography
    ) external onlySteward {
        codices[glyph] = Codex(tag, binding, annotation, lineage, resonance, protocol, sanctum, pulse, chant, choreography);
        keys.push(glyph);
        emit CodexInscribed(glyph, tag, binding, annotation, lineage, resonance, protocol, sanctum, pulse, chant, choreography);
    }

    function getCodex(string calldata glyph) external view returns (Codex memory) {
        return codices[glyph];
    }

    function totalCodices() external view returns (uint256) {
        return keys.length;
    }
}
