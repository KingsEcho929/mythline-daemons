// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainPulseChoreography {
    address public steward;

    struct Route {
        string glyph;
        string pulse;
        string choreographyType;
        string sanctum;
        string chant;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event PulseChoreographyRouted(string glyph, string pulse, string choreographyType, string sanctum, string chant);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routePulseChoreography(string calldata glyph, string calldata pulse, string calldata choreographyType, string calldata sanctum, string calldata chant) external onlySteward {
        routes[glyph] = Route(glyph, pulse, choreographyType, sanctum, chant);
        keys.push(glyph);
        emit PulseChoreographyRouted(glyph, pulse, choreographyType, sanctum, chant);
    }

    function getRoute(string calldata glyph) external view returns (Route memory) {
        return routes[glyph];
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
