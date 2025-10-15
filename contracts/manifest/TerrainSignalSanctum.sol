// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainSignalSanctum {
    address public steward;

    struct Route {
        string glyph;
        string signalChoreography;
        string sanctum;
        string choreography;
        string chant;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event SignalSanctumRouted(string glyph, string signalChoreography, string sanctum, string choreography, string chant);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeSignalSanctum(string calldata glyph, string calldata signalChoreography, string calldata sanctum, string calldata choreography, string calldata chant) external onlySteward {
        routes[glyph] = Route(glyph, signalChoreography, sanctum, choreography, chant);
        keys.push(glyph);
        emit SignalSanctumRouted(glyph, signalChoreography, sanctum, choreography, chant);
    }

    function getRoute(string calldata glyph) external view returns (Route memory) {
        return routes[glyph];
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
