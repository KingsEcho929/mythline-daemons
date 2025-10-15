// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainCompanionDrift {
    address public steward;

    struct Route {
        string glyph;
        string companionType;
        string driftType;
        string sanctum;
        string choreography;
        string chant;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event CompanionDriftRouted(string glyph, string companionType, string driftType, string sanctum, string choreography, string chant);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeCompanionDrift(string calldata glyph, string calldata companionType, string calldata driftType, string calldata sanctum, string calldata choreography, string calldata chant) external onlySteward {
        routes[glyph] = Route(glyph, companionType, driftType, sanctum, choreography, chant);
        keys.push(glyph);
        emit CompanionDriftRouted(glyph, companionType, driftType, sanctum, choreography, chant);
    }

    function getRoute(string calldata glyph) external view returns (Route memory) {
        return routes[glyph];
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
