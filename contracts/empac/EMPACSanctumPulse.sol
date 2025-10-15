// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EMPACSanctumPulse {
    address public steward;

    struct Route {
        string glyph;
        string sanctum;
        string pulse;
        string orbitalNode;
        string chant;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event EMPACSanctumPulseRouted(string glyph, string sanctum, string pulse, string orbitalNode, string chant);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeSanctumPulse(string calldata glyph, string calldata sanctum, string calldata pulse, string calldata orbitalNode, string calldata chant) external onlySteward {
        routes[glyph] = Route(glyph, sanctum, pulse, orbitalNode, chant);
        keys.push(glyph);
        emit EMPACSanctumPulseRouted(glyph, sanctum, pulse, orbitalNode, chant);
    }

    function getRoute(string calldata glyph) external view returns (Route memory) {
        return routes[glyph];
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
