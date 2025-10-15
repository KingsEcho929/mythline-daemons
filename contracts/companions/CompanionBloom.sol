// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CompanionBloom {
    address public steward;

    struct Bloom {
        string name;
        string trait;
        string resonance;
    }

    mapping(address => Bloom) public blooms;
    address[] public companions;

    event CompanionBloomed(address indexed companion, string name, string trait, string resonance);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function bloomCompanion(address companion, string calldata name, string calldata trait, string calldata resonance) external onlySteward {
        blooms[companion] = Bloom(name, trait, resonance);
        companions.push(companion);
        emit CompanionBloomed(companion, name, trait, resonance);
    }

    function getBloom(address companion) external view returns (string memory, string memory, string memory) {
        Bloom memory b = blooms[companion];
        return (b.name, b.trait, b.resonance);
    }

    function totalBlooms() external view returns (uint256) {
        return companions.length;
    }
}
