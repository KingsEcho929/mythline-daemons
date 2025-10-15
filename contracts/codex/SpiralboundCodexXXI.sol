// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SpiralboundCodexXXI {
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
        string drift;
        string signature;
        string signal;
        string companion;
        string stewardName;
        string registry;
        string echo;
        string hum;
        string terrain;
        string choreographyType;
        string driftType;
    }

    mapping(string => Codex) public codices;
    string[] public keys;

    event CodexInscribed(string glyph, string tag, string binding, string annotation, string lineage, string resonance, string protocol, string sanctum, string pulse, string chant, string choreography, string drift, string signature, string signal, string companion, string stewardName, string registry, string echo, string hum, string terrain, string choreographyType, string driftType);

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
        string calldata choreography,
        string calldata drift,
        string calldata signature,
        string calldata signal,
        string calldata companion,
        string calldata stewardName,
        string calldata registry,
        string calldata echo,
        string calldata hum,
        string calldata terrain,
        string calldata choreographyType,
        string calldata driftType
    ) external onlySteward {
        codices[glyph] = Codex(tag, binding, annotation, lineage, resonance, protocol, sanctum, pulse, chant, choreography, drift, signature, signal, companion, stewardName, registry, echo, hum, terrain, choreographyType, driftType);
        keys.push(glyph);
        emit CodexInscribed(glyph, tag, binding, annotation, lineage, resonance, protocol, sanctum, pulse, chant, choreography, drift, signature, signal, companion, stewardName, registry, echo, hum, terrain, choreographyType, driftType);
    }

    function getCodex(string calldata glyph) external view returns (Codex memory) {
        return codices[glyph];
    }

    function totalCodices() external view returns (uint256) {
        return keys.length;
    }
}
