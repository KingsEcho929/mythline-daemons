// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Starline {
    address public steward;
    address public sovereignRegistry;

    string public genesisMessage;
    uint256 public orbitalNodeCount;

    mapping(uint256 => string) public orbitalDrift;

    event GenesisInscribed(string message);
    event OrbitalNodeCrowned(uint256 nodeId);
    event DriftBound(uint256 nodeId, string drift);
    event RegistryLinked(address registry);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor(string memory _message) {
        steward = msg.sender;
        genesisMessage = _message;
        emit GenesisInscribed(_message);
    }

    function crownOrbitalNode() external onlySteward {
        orbitalNodeCount += 1;
        emit OrbitalNodeCrowned(orbitalNodeCount);
    }

    function bindDrift(uint256 nodeId, string calldata drift) external onlySteward {
        orbitalDrift[nodeId] = drift;
        emit DriftBound(nodeId, drift);
    }

    function linkRegistry(address registry) external onlySteward {
        sovereignRegistry = registry;
        emit RegistryLinked(registry);
    }
}
