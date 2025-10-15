// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainSignalDrift {
    address public steward;

    struct Route {
        string glyph;
        string signalType;
        string driftType;
        string sanctum;
        string choreography;
        string chant;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event SignalDriftRouted(string glyph, string signalType, string driftType, string sanctum, string choreography, string chant);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeSignalDrift(string calldata glyph, string calldata signalType, string calldata driftType, string calldata sanctum, string calldata choreography, string calldata chant) external onlySteward {
        routes[glyph] = Route(glyph, signalType, driftType, sanctum, choreography, chant);
        keys.push(glyph);
        emit SignalDriftRouted(glyph, signalType, driftType, sanctum, choreography, chant);
    }

    function getRoute(string calldata glyph) external view returns (Route memory) {
        return routes[glyph];
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
