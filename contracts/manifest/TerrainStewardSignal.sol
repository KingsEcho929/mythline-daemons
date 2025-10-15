// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainStewardSignal {
    address public steward;

    struct Route {
        string glyph;
        string stewardSignal;
        string sanctum;
        string choreography;
        string chant;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event StewardSignalRouted(string glyph, string stewardSignal, string sanctum, string choreography, string chant);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeStewardSignal(string calldata glyph, string calldata stewardSignal, string calldata sanctum, string calldata choreography, string calldata chant) external onlySteward {
        routes[glyph] = Route(glyph, stewardSignal, sanctum, choreography, chant);
        keys.push(glyph);
        emit StewardSignalRouted(glyph, stewardSignal, sanctum, choreography, chant);
    }

    function getRoute(string calldata glyph) external view returns (Route memory) {
        return routes[glyph];
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
