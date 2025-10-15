// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StarlineBeacon {
    address public steward;

    struct Beacon {
        string signal;
        string target;
        uint256 pulse;
    }

    mapping(uint256 => Beacon) public beacons;
    uint256 public beaconCount;

    event BeaconEmitted(uint256 indexed id, string signal, string target, uint256 pulse);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function emitBeacon(string calldata signal, string calldata target, uint256 pulse) external onlySteward {
        beaconCount += 1;
        beacons[beaconCount] = Beacon(signal, target, pulse);
        emit BeaconEmitted(beaconCount, signal, target, pulse);
    }

    function getBeacon(uint256 id) external view returns (string memory, string memory, uint256) {
        Beacon memory b = beacons[id];
        return (b.signal, b.target, b.pulse);
    }
}
