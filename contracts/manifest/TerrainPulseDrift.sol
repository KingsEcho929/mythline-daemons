// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainPulseDrift {
    address public steward;

    struct Route {
        string drift;
        string glyph;
        string sanctum;
        string pulse;
        string choreography;
        string chant;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event PulseDriftRouted(string drift, string glyph, string sanctum, string pulse, string choreography, string chant);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeDrift(string calldata drift, string calldata glyph, string calldata sanctum, string calldata pulse, string calldata choreography, string calldata chant) external onlySteward {
        routes[drift] = Route(drift, glyph, sanctum, pulse, choreography, chant);
        keys.push(drift);
        emit PulseDriftRouted(drift, glyph, sanctum, pulse, choreography, chant);
    }

    function getRoute(string calldata drift) external view returns (Route memory) {
        return routes[drift];
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
