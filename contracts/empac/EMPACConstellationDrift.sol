// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EMPACConstellationDrift {
    address public steward;

    struct Route {
        string glyph;
        string constellationDrift;
        string sanctum;
        string orbitalNode;
        string pulse;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event ConstellationDriftRouted(string glyph, string constellationDrift, string sanctum, string orbitalNode, string pulse);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeConstellationDrift(string calldata glyph, string calldata constellationDrift, string calldata sanctum, string calldata orbitalNode, string calldata pulse) external onlySteward {
        routes[glyph] = Route(glyph, constellationDrift, sanctum, orbitalNode, pulse);
        keys.push(glyph);
        emit ConstellationDriftRouted(glyph, constellationDrift, sanctum, orbitalNode, pulse);
    }

    function getRoute(string calldata glyph) external view returns (Route memory) {
        return routes[glyph];
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
