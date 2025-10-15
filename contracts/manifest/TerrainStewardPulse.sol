// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainStewardPulse {
    address public steward;

    struct Route {
        string glyph;
        string stewardPulse;
        string sanctum;
        string choreography;
        string chant;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event StewardPulseRouted(string glyph, string stewardPulse, string sanctum, string choreography, string chant);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeStewardPulse(string calldata glyph, string calldata stewardPulse, string calldata sanctum, string calldata choreography, string calldata chant) external onlySteward {
        routes[glyph] = Route(glyph, stewardPulse, sanctum, choreography, chant);
        keys.push(glyph);
        emit StewardPulseRouted(glyph, stewardPulse, sanctum, choreography, chant);
    }

    function getRoute(string calldata glyph) external view returns (Route memory) {
        return routes[glyph];
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
