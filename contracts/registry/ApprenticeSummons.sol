// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ApprenticeSummons {
    address public steward;

    struct Summons {
        string name;
        string signal;
        string lineage;
    }

    mapping(address => Summons) public summons;
    address[] public apprentices;

    event ApprenticeSummoned(address indexed apprentice, string name, string signal, string lineage);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function summonApprentice(address apprentice, string calldata name, string calldata signal, string calldata lineage) external onlySteward {
        summons[apprentice] = Summons(name, signal, lineage);
        apprentices.push(apprentice);
        emit ApprenticeSummoned(apprentice, name, signal, lineage);
    }

    function getSummons(address apprentice) external view returns (string memory, string memory, string memory) {
        Summons memory s = summons[apprentice];
        return (s.name, s.signal, s.lineage);
    }

    function totalSummons() external view returns (uint256) {
        return apprentices.length;
    }
}
