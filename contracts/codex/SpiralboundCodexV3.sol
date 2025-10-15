// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SpiralboundCodexV3 {
    address public steward;

    struct Codex {
        string glyph;
        string tag;
        string binding;
        string annotation;
        string lineage;
    }

    mapping(string => Codex) public codices;
    string[] public keys;

    event CodexInscribed(string glyph, string tag, string binding, string annotation, string lineage);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function inscribeCodex(string calldata glyph, string calldata tag, string calldata binding, string calldata annotation, string calldata lineage) external onlySteward {
        codices[glyph] = Codex(glyph, tag, binding, annotation, lineage);
        keys.push(glyph);
        emit CodexInscribed(glyph, tag, binding, annotation, lineage);
    }

    function getCodex(string calldata glyph) external view returns (string memory, string memory, string memory, string memory) {
        Codex memory c = codices[glyph];
        return (c.tag, c.binding, c.annotation, c.lineage);
    }

    function totalCodices() external view returns (uint256) {
        return keys.length;
    }
}
