// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ApprenticeSummonerV3 {
    address public steward;

    struct Summons {
        string name;
        string signal;
        string drift;
        string pulse;
        string codexRef;
        string resonance;
    }

    mapping(address => Summons) public summons;
    address[] public apprentices;

    event ApprenticeSummoned(address indexed apprentice, string name, string signal, string drift, string pulse, string codexRef, string resonance);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function summonApprentice(address apprentice, string calldata name, string calldata signal, string calldata drift, string calldata pulse, string calldata codexRef, string calldata resonance) external onlySteward {
        summons[apprentice] = Summons(name, signal, drift, pulse, codexRef, resonance);
        apprentices.push(apprentice);
        emit ApprenticeSummoned(apprentice, name, signal, drift, pulse, codexRef, resonance);
    }

    function getSummons(address apprentice) external view returns (string memory, string memory, string memory, string memory, string memory, string memory) {
        Summons memory s = summons[apprentice];
        return (s.name, s.signal, s.drift, s.pulse, s.codexRef, s.resonance);
    }

    function totalSummons() external view returns (uint256) {
        return apprentices.length;
    }
}
