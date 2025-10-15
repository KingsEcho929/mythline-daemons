// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CompanionSummonerXXII {
    address public steward;

    struct Companion {
        string name;
        string trait;
        string drift;
        string resonance;
        string codexRef;
        string signature;
        string sanctum;
        string chant;
        string choreography;
        string signal;
        string stewardName;
        string registry;
        string hum;
        string driftType;
        string companionType;
        string pulseType;
        string companionSignal;
        string pulseSignal;
        string companionPulse;
    }

    mapping(address => Companion) public companions;
    address[] public keys;

    event CompanionSummoned(address indexed companion, string name, string trait, string drift, string resonance, string codexRef, string signature, string sanctum, string chant, string choreography, string signal, string stewardName, string registry, string hum, string driftType, string companionType, string pulseType, string companionSignal, string pulseSignal, string companionPulse);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function summonCompanion(
        address companion,
        string calldata name,
        string calldata trait,
        string calldata drift,
        string calldata resonance,
        string calldata codexRef,
        string calldata signature,
        string calldata sanctum,
        string calldata chant,
        string calldata choreography,
        string calldata signal,
        string calldata stewardName,
        string calldata registry,
        string calldata hum,
        string calldata driftType,
        string calldata companionType,
        string calldata pulseType,
        string calldata companionSignal,
        string calldata pulseSignal,
        string calldata companionPulse
    ) external onlySteward {
        companions[companion] = Companion(name, trait, drift, resonance, codexRef, signature, sanctum, chant, choreography, signal, stewardName, registry, hum, driftType, companionType, pulseType, companionSignal, pulseSignal, companionPulse);
        keys.push(companion);
        emit CompanionSummoned(companion, name, trait, drift, resonance, codexRef, signature, sanctum, chant, choreography, signal, stewardName, registry, hum, driftType, companionType, pulseType, companionSignal, pulseSignal, companionPulse);
    }

    function getCompanion(address companion) external view returns (Companion memory) {
        return companions[companion];
    }

    function totalCompanions() external view returns (uint256) {
        return keys.length;
    }
}
