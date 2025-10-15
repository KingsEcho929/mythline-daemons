// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EMPAC {
    address public steward;
    address public sovereignRegistry;

    mapping(string => bool) public phaseClear;
    mapping(string => bool) public mythlineCompliant;
    string[] public lineage;

    event PhaseCleared(string phase);
    event MythlineCompliant(string protocol);
    event LineageEchoed(string name);
    event RegistryLinked(address registry);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function clearPhase(string calldata phase) external onlySteward {
        phaseClear[phase] = true;
        emit PhaseCleared(phase);
    }

    function certifyMythline(string calldata protocol) external onlySteward {
        mythlineCompliant[protocol] = true;
        emit MythlineCompliant(protocol);
    }

    function echoLineage(string calldata name) external onlySteward {
        lineage.push(name);
        emit LineageEchoed(name);
    }

    function getLineage(uint256 index) external view returns (string memory) {
        return lineage[index];
    }

    function linkRegistry(address registry) external onlySteward {
        sovereignRegistry = registry;
        emit RegistryLinked(registry);
    }
}
