// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CompanionSummoner {
    address public steward;

    struct Companion {
        string name;
        string trait;
        string resonance;
        string drift;
        string codexRef;
    }

    mapping(address => Companion) public companions;
    address[] public keys;

    event CompanionSummoned(address indexed companion, string name, string trait, string resonance, string drift, string codexRef);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function summonCompanion(address companion, string calldata name, string calldata trait, string calldata resonance, string calldata drift, string calldata codexRef) external onlySteward {
        companions[companion] = Companion(name, trait, resonance, drift, codexRef);
        keys.push(companion);
        emit CompanionSummoned(companion, name, trait, resonance, drift, codexRef);
    }

    function getCompanion(address companion) external view returns (string memory, string memory, string memory, string memory, string memory) {
        Companion memory c = companions[companion];
        return (c.name, c.trait, c.resonance, c.drift, c.codexRef);
    }

    function totalCompanions() external view returns (uint256) {
        return keys.length;
    }
}
