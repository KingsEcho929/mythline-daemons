// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainStewardSanctum {
    address public steward;

    struct Route {
        string glyph;
        string stewardName;
        string sanctum;
        string choreography;
        string chant;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event StewardSanctumRouted(string glyph, string stewardName, string sanctum, string choreography, string chant);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeStewardSanctum(string calldata glyph, string calldata stewardName, string calldata sanctum, string calldata choreography, string calldata chant) external onlySteward {
        routes[glyph] = Route(glyph, stewardName, sanctum, choreography, chant);
        keys.push(glyph);
        emit StewardSanctumRouted(glyph, stewardName, sanctum, choreography, chant);
    }

    function getRoute(string calldata glyph) external view returns (Route memory) {
        return routes[glyph];
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
