// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EMPACOrbitalChant {
    address public steward;

    struct Route {
        string glyph;
        string orbitalChant;
        string sanctum;
        string orbitalNode;
        string pulse;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event OrbitalChantRouted(string glyph, string orbitalChant, string sanctum, string orbitalNode, string pulse);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeOrbitalChant(string calldata glyph, string calldata orbitalChant, string calldata sanctum, string calldata orbitalNode, string calldata pulse) external onlySteward {
        routes[glyph] = Route(glyph, orbitalChant, sanctum, orbitalNode, pulse);
        keys.push(glyph);
        emit OrbitalChantRouted(glyph, orbitalChant, sanctum, orbitalNode, pulse);
    }

    function getRoute(string calldata glyph) external view returns (Route memory) {
        return routes[glyph];
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
