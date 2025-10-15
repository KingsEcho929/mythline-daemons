// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GlyphRouter {
    address public steward;

    struct Route {
        string glyph;
        address target;
        string method;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event RouteLinked(string glyph, address target, string method);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function linkRoute(string calldata glyph, address target, string calldata method) external onlySteward {
        routes[glyph] = Route(glyph, target, method);
        keys.push(glyph);
        emit RouteLinked(glyph, target, method);
    }

    function getRoute(string calldata glyph) external view returns (address, string memory) {
        Route memory r = routes[glyph];
        return (r.target, r.method);
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
