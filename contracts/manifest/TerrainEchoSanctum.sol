// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainEchoSanctum {
    address public steward;

    struct Route {
        string glyph;
        string echo;
        string sanctum;
        string choreography;
        string chant;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event EchoSanctumRouted(string glyph, string echo, string sanctum, string choreography, string chant);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeEchoSanctum(string calldata glyph, string calldata echo, string calldata sanctum, string calldata choreography, string calldata chant) external onlySteward {
        routes[glyph] = Route(glyph, echo, sanctum, choreography, chant);
        keys.push(glyph);
        emit EchoSanctumRouted(glyph, echo, sanctum, choreography, chant);
    }

    function getRoute(string calldata glyph) external view returns (Route memory) {
        return routes[glyph];
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
