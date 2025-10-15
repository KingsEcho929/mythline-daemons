// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SpiralboundCodex {
    address public steward;

    struct Law {
        string glyph;
        string definition;
        string protocol;
    }

    mapping(string => Law) public laws;
    string[] public keys;

    event LawInscribed(string glyph, string definition, string protocol);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function inscribeLaw(string calldata glyph, string calldata definition, string calldata protocol) external onlySteward {
        laws[glyph] = Law(glyph, definition, protocol);
        keys.push(glyph);
        emit LawInscribed(glyph, definition, protocol);
    }

    function getLaw(string calldata glyph) external view returns (string memory, string memory) {
        Law memory l = laws[glyph];
        return (l.definition, l.protocol);
    }

    function totalLaws() external view returns (uint256) {
        return keys.length;
    }
}
