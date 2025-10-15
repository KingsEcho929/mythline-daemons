// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainPulseChoreographer {
    address public steward;

    struct Choreo {
        string chant;
        string target;
        string pulse;
        string choreography;
    }

    mapping(string => Choreo) public choreos;
    string[] public keys;

    event PulseChoreographed(string chant, string target, string pulse, string choreography);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function choreograph(string calldata chant, string calldata target, string calldata pulse, string calldata choreography) external onlySteward {
        choreos[chant] = Choreo(chant, target, pulse, choreography);
        keys.push(chant);
        emit PulseChoreographed(chant, target, pulse, choreography);
    }

    function getChoreo(string calldata chant) external view returns (string memory, string memory, string memory) {
        Choreo memory c = choreos[chant];
        return (c.target, c.pulse, c.choreography);
    }

    function totalChoreos() external view returns (uint256) {
        return keys.length;
    }
}
