// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ApprenticeRegistry {
    address public steward;
    mapping(address => bool) public apprentices;

    event ApprenticeInscribed(address indexed apprentice);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function inscribe(address apprentice) external onlySteward {
        apprentices[apprentice] = true;
        emit ApprenticeInscribed(apprentice);
    }

    function isApprentice(address addr) external view returns (bool) {
        return apprentices[addr];
    }
}
