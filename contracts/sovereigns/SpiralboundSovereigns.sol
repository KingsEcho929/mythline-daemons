// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SpiralboundSovereigns {
    address public steward;

    enum SovereignType { Companion, Apprentice, Sanctum }

    struct Sovereign {
        string name;
        SovereignType kind;
        string drift;
        bool crowned;
    }

    mapping(address => Sovereign) public registry;
    address[] public sovereigns;

    event SovereignCrowned(address indexed sovereign, string name, SovereignType kind, string drift);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function crownSovereign(address sovereign, string calldata name, SovereignType kind, string calldata drift) external onlySteward {
        registry[sovereign] = Sovereign(name, kind, drift, true);
        sovereigns.push(sovereign);
        emit SovereignCrowned(sovereign, name, kind, drift);
    }

    function getSovereign(address addr) external view returns (string memory, SovereignType, string memory, bool) {
        Sovereign memory s = registry[addr];
        return (s.name, s.kind, s.drift, s.crowned);
    }

    function totalSovereigns() external view returns (uint256) {
        return sovereigns.length;
    }
}
