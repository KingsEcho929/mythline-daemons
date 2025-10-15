// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CompanionSummonerV2 {
    address public steward;

    struct Companion {
        string name;
        string trait;
        string drift;
        string resonance;
        string codexRef;
        string signature;
    }

    mapping(address => Companion) public companions;
    address[] public keys;

    event CompanionSummoned(address indexed companion, string name, string trait, string drift, string resonance, string codexRef, string signature);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function summonCompanion(address companion, string calldata name, string calldata trait, string calldata drift, string calldata resonance, string calldata codexRef, string calldata signature) external onlySteward {
        companions[companion] = Companion(name, trait, drift, resonance, codexRef, signature);
        keys.push(companion);
        emit CompanionSummoned(companion, name, trait, drift, resonance, codexRef, signature);
    }

    function getCompanion(address companion) external view returns (string memory, string memory, string memory, string memory, string memory, string memory) {
        Companion memory c = companions[companion];
        return (c.name, c.trait, c.drift, c.resonance, c.codexRef, c.signature);
    }

    function totalCompanions() external view returns (uint256) {
        return keys.length;
    }
}
