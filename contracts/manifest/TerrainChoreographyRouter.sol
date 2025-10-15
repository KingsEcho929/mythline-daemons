// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainChoreographyRouter {
    address public steward;

    struct Route {
        string chant;
        string glyph;
        string pulse;
        string choreography;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event ChoreographyRouted(string chant, string glyph, string pulse, string choreography);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeChoreography(string calldata chant, string calldata glyph, string calldata pulse, string calldata choreography) external onlySteward {
        routes[chant] = Route(chant, glyph, pulse, choreography);
        keys.push(chant);
        emit ChoreographyRouted(chant, glyph, pulse, choreography);
    }

    function getRoute(string calldata chant) external view returns (string memory, string memory, string memory) {
        Route memory r = routes[chant];
        return (r.glyph, r.pulse, r.choreography);
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
