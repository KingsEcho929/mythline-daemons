// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainChoreography {
    address public steward;

    struct Invocation {
        string chant;
        string glyph;
        string action;
    }

    mapping(string => Invocation) public invocations;
    string[] public keys;

    event InvocationOrchestrated(string chant, string glyph, string action);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function orchestrate(string calldata chant, string calldata glyph, string calldata action) external onlySteward {
        invocations[chant] = Invocation(chant, glyph, action);
        keys.push(chant);
        emit InvocationOrchestrated(chant, glyph, action);
    }

    function getInvocation(string calldata chant) external view returns (string memory, string memory) {
        Invocation memory i = invocations[chant];
        return (i.glyph, i.action);
    }

    function totalInvocations() external view returns (uint256) {
        return keys.length;
    }
}
