// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainCompanionSignal {
    address public steward;

    struct Route {
        string glyph;
        string companionSignal;
        string sanctum;
        string choreography;
        string chant;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event CompanionSignalRouted(string glyph, string companionSignal, string sanctum, string choreography, string chant);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeCompanionSignal(string calldata glyph, string calldata companionSignal, string calldata sanctum, string calldata choreography, string calldata chant) external onlySteward {
        routes[glyph] = Route(glyph, companionSignal, sanctum, choreography, chant);
        keys.push(glyph);
        emit CompanionSignalRouted(glyph, companionSignal, sanctum, choreography, chant);
    }

    function getRoute(string calldata glyph) external view returns (Route memory) {
        return routes[glyph];
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
