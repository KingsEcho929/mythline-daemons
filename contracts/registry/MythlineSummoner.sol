// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MythlineSummoner {
    address public steward;

    struct Entity {
        string name;
        string drift;
        string pulse;
        string codexRef;
    }

    mapping(address => Entity) public entities;
    address[] public keys;

    event EntitySummoned(address indexed entity, string name, string drift, string pulse, string codexRef);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function summonEntity(address entity, string calldata name, string calldata drift, string calldata pulse, string calldata codexRef) external onlySteward {
        entities[entity] = Entity(name, drift, pulse, codexRef);
        keys.push(entity);
        emit EntitySummoned(entity, name, drift, pulse, codexRef);
    }

    function getEntity(address entity) external view returns (string memory, string memory, string memory, string memory) {
        Entity memory e = entities[entity];
        return (e.name, e.drift, e.pulse, e.codexRef);
    }

    function totalEntities() external view returns (uint256) {
        return keys.length;
    }
}
