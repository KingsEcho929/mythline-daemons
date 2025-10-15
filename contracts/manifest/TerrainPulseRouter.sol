// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainPulseRouter {
    address public steward;

    struct Route {
        string chant;
        string target;
        string pulse;
    }

    mapping(string => Route) public routes;
    string[] public keys;

    event PulseRouted(string chant, string target, string pulse);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function routePulse(string calldata chant, string calldata target, string calldata pulse) external onlySteward {
        routes[chant] = Route(chant, target, pulse);
        keys.push(chant);
        emit PulseRouted(chant, target, pulse);
    }

    function getRoute(string calldata chant) external view returns (string memory, string memory) {
        Route memory r = routes[chant];
        return (r.target, r.pulse);
    }

    function totalRoutes() external view returns (uint256) {
        return keys.length;
    }
}
