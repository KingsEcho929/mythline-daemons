// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SkyPulse {
    address public steward;

    struct Pulse {
        string city;
        uint256 altitude;
        uint256 frequency;
    }

    mapping(string => Pulse) public pulses;
    string[] public cityKeys;

    event PulseBound(string city, uint256 altitude, uint256 frequency);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function bindPulse(string calldata city, uint256 altitude, uint256 frequency) external onlySteward {
        pulses[city] = Pulse(city, altitude, frequency);
        cityKeys.push(city);
        emit PulseBound(city, altitude, frequency);
    }

    function getPulse(string calldata city) external view returns (uint256, uint256) {
        Pulse memory p = pulses[city];
        return (p.altitude, p.frequency);
    }

    function totalPulses() external view returns (uint256) {
        return cityKeys.length;
    }
}
