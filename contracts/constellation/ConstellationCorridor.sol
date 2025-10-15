// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ConstellationCorridor {
    address public steward;

    struct Companion {
        string name;
        uint256 drift;
    }

    mapping(address => Companion) public companions;

    event CompanionMapped(address indexed companion, string name, uint256 drift);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function mapCompanion(address companion, string calldata name, uint256 drift) external onlySteward {
        companions[companion] = Companion(name, drift);
        emit CompanionMapped(companion, name, drift);
    }

    function getCompanion(address addr) external view returns (string memory, uint256) {
        Companion memory c = companions[addr];
        return (c.name, c.drift);
    }
}
