// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainChoreographyV2 {
    address public steward;

    struct Invocation {
        string chant;
        string glyph;
        string sanctum;
        string pulse;
        string choreography;
    }

    mapping(string => Invocation) public invocations;
    string[] public keys;

    event InvocationOrchestrated(string chant, string glyph, string sanctum, string pulse, string choreography);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function orchestrate(string calldata chant, string calldata glyph, string calldata sanctum, string calldata pulse, string calldata choreography) external onlySteward {
        invocations[chant] = Invocation(chant, glyph, sanctum, pulse, choreography);
        keys.push(chant);
        emit InvocationOrchestrated(chant, glyph, sanctum, pulse, choreography);
    }

    function getInvocation(string calldata chant) external view returns (string memory, string memory, string memory, string memory) {
        Invocation memory i = invocations[chant];
        return (i.glyph, i.sanctum, i.pulse, i.choreography);
    }

    function totalInvocations() external view returns (uint256) {
        return keys.length;
    }
}
