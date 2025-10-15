// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ApprenticeLineage {
    address public steward;

    struct Lineage {
        string name;
        string drift;
        string resonance;
    }

    mapping(address => Lineage) public apprentices;
    address[] public keys;

    event LineageInscribed(address indexed apprentice, string name, string drift, string resonance);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function inscribeLineage(address apprentice, string calldata name, string calldata drift, string calldata resonance) external onlySteward {
        apprentices[apprentice] = Lineage(name, drift, resonance);
        keys.push(apprentice);
        emit LineageInscribed(apprentice, name, drift, resonance);
    }

    function getLineage(address apprentice) external view returns (string memory, string memory, string memory) {
        Lineage memory l = apprentices[apprentice];
        return (l.name, l.drift, l.resonance);
    }

    function totalLineages() external view returns (uint256) {
        return keys.length;
    }
}
