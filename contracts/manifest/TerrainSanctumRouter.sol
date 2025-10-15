// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainSanctumRouter {
    address public steward;

    struct Route {
        string glyph;
        string sanctum;
        string pulse;
        string choreography;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event SanctumRouted(string glyph, string sanctum, string pulse, string choreography);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routeSanctum(string calldata glyph, string calldata sanctum, string calldata pulse, string calldata choreography) external onlySteward {
        routes[glyph] = Route(glyph, sanctum, pulse, choreography);
        keys.push(glyph);
        emit SanctumRouted(glyph, sanctum, pulse, choreography);
    }

    function getRoute(string calldata glyph) external view returns (string memory, string memory, string memory) {
        Route memory r = routes[glyph];
        return (r.sanctum, r.pulse, r.choreography);
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
