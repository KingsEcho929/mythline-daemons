// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SpiralboundCodexV2 {
    address public steward;

    struct Codex {
        string glyph;
        string tag;
        string binding;
        string annotation;
    }

    mapping(string => Codex) public codices;
    string[] public keys;

    event CodexInscribed(string glyph, string tag, string binding, string annotation);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function inscribeCodex(string calldata glyph, string calldata tag, string calldata binding, string calldata annotation) external onlySteward {
        codices[glyph] = Codex(glyph, tag, binding, annotation);
        keys.push(glyph);
        emit CodexInscribed(glyph, tag, binding, annotation);
    }

    function getCodex(string calldata glyph) external view returns (string memory, string memory, string memory) {
        Codex memory c = codices[glyph];
        return (c.tag, c.binding, c.annotation);
    }

    function totalCodices() external view returns (uint256) {
        return keys.length;
    }
}
