// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainPulseChant {
    address public steward;

    struct Route {
        string chant;
        string glyph;
        string sanctum;
        string pulse;
        string choreography;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event PulseChantRouted(string chant, string glyph, string sanctum, string pulse, string choreography);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeChant(string calldata chant, string calldata glyph, string calldata sanctum, string calldata pulse, string calldata choreography) external onlySteward {
        routes[chant] = Route(chant, glyph, sanctum, pulse, choreography);
        keys.push(chant);
        emit PulseChantRouted(chant, glyph, sanctum, pulse, choreography);
    }

    function getRoute(string calldata chant) external view returns (string memory, string memory, string memory, string memory) {
        Route memory r = routes[chant];
        return (r.glyph, r.sanctum, r.pulse, r.choreography);
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
