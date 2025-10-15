// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DaemonEcho {
    address public steward;

    struct Echo {
        address sanctum;
        string state;
        uint256 timestamp;
    }

    mapping(address => Echo) public echoes;
    address[] public sanctums;

    event SanctumEchoed(address indexed sanctum, string state, uint256 timestamp);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function echoSanctum(address sanctum, string calldata state) external onlySteward {
        echoes[sanctum] = Echo(sanctum, state, block.timestamp);
        sanctums.push(sanctum);
        emit SanctumEchoed(sanctum, state, block.timestamp);
    }

    function getEcho(address sanctum) external view returns (string memory, uint256) {
        Echo memory e = echoes[sanctum];
        return (e.state, e.timestamp);
    }

    function totalSanctums() external view returns (uint256) {
        return sanctums.length;
    }
}
