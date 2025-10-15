// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainChoreographySanctum {
    address public steward;

    struct Choreo {
        string chant;
        string glyph;
        string pulse;
        string choreography;
        string sanctum;
    }

    mapping(string => Choreo) public choreos;
    string[] public keys;

    event ChoreographySanctumRouted(string chant, string glyph, string pulse, string choreography, string sanctum);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeChoreography(string calldata chant, string calldata glyph, string calldata pulse, string calldata choreography, string calldata sanctum) external onlySteward {
        choreos[chant] = Choreo(chant, glyph, pulse, choreography, sanctum);
        keys.push(chant);
        emit ChoreographySanctumRouted(chant, glyph, pulse, choreography, sanctum);
    }

    function getChoreo(string calldata chant) external view returns (Choreo memory) {
        return choreos[chant];
    }

    function totalChoreos() external view returns (uint256) {
        return keys.length;
    }
}
