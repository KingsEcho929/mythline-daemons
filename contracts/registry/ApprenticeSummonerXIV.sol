// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ApprenticeSummonerXIV {
    address public steward;

    struct Summons {
        string name;
        string signal;
        string drift;
        string pulse;
        string codexRef;
        string resonance;
        string signature;
        string sanctum;
        string chant;
        string choreography;
        string stewardName;
    }

    mapping(address => Summons) public summons;
    address[] public apprentices;

    event ApprenticeSummoned(address indexed apprentice, string name, string signal, string drift, string pulse, string codexRef, string resonance, string signature, string sanctum, string chant, string choreography, string stewardName);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function summonApprentice(
        address apprentice,
        string calldata name,
        string calldata signal,
        string calldata drift,
        string calldata pulse,
        string calldata codexRef,
        string calldata resonance,
        string calldata signature,
        string calldata sanctum,
        string calldata chant,
        string calldata choreography,
        string calldata stewardName
    ) external onlySteward {
        summons[apprentice] = Summons(name, signal, drift, pulse, codexRef, resonance, signature, sanctum, chant, choreography, stewardName);
        apprentices.push(apprentice);
        emit ApprenticeSummoned(apprentice, name, signal, drift, pulse, codexRef, resonance, signature, sanctum, chant, choreography, stewardName);
    }

    function getSummons(address apprentice) external view returns (Summons memory) {
        return summons[apprentice];
    }

    function totalSummons() external view returns (uint256) {
        return apprentices.length;
    }
}
