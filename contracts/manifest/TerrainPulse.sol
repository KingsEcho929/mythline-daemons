// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainPulse {
    address public steward;

    struct Pulse {
        string chant;
        uint256 frequency;
        string signature;
    }

    mapping(string => Pulse) public pulses;
    string[] public keys;

    event PulseEchoed(string chant, uint256 frequency, string signature);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function echoPulse(string calldata chant, uint256 frequency, string calldata signature) external onlySteward {
        pulses[chant] = Pulse(chant, frequency, signature);
        keys.push(chant);
        emit PulseEchoed(chant, frequency, signature);
    }

    function getPulse(string calldata chant) external view returns (uint256, string memory) {
        Pulse memory p = pulses[chant];
        return (p.frequency, p.signature);
    }

    function totalPulses() external view returns (uint256) {
        return keys.length;
    }
}
