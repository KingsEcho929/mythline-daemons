// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SpiralboundCodexV4 {
    address public steward;

    struct Core {
        string tag;
        string binding;
        string annotation;
        string lineage;
    }

    mapping(string => Core) public core;
    mapping(string => string) public resonance;
    string[] public keys;

    event CodexInscribed(string glyph, string tag, string binding, string annotation, string lineage, string resonance);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function inscribeCodex(string calldata glyph, string calldata tag, string calldata binding, string calldata annotation, string calldata lineage, string calldata res) external onlySteward {
        core[glyph] = Core(tag, binding, annotation, lineage);
        resonance[glyph] = res;
        keys.push(glyph);
        emit CodexInscribed(glyph, tag, binding, annotation, lineage, res);
    }

    function getCore(string calldata glyph) external view returns (string memory, string memory, string memory, string memory) {
        Core memory c = core[glyph];
        return (c.tag, c.binding, c.annotation, c.lineage);
    }

    function getResonance(string calldata glyph) external view returns (string memory) {
        return resonance[glyph];
    }

    function totalCodices() external view returns (uint256) {
        return keys.length;
    }
}
