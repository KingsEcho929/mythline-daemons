// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SovereignPulse {
    address public steward;

    struct Pulse {
        string name;
        string kind;
        uint256 frequency;
    }

    mapping(address => Pulse) public pulses;
    address[] public sovereigns;

    event PulseEchoed(address indexed sovereign, string name, string kind, uint256 frequency);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function echoPulse(address sovereign, string calldata name, string calldata kind, uint256 frequency) external onlySteward {
        pulses[sovereign] = Pulse(name, kind, frequency);
        sovereigns.push(sovereign);
        emit PulseEchoed(sovereign, name, kind, frequency);
    }

    function getPulse(address sovereign) external view returns (string memory, string memory, uint256) {
        Pulse memory p = pulses[sovereign];
        return (p.name, p.kind, p.frequency);
    }

    function totalPulses() external view returns (uint256) {
        return sovereigns.length;
    }
}

