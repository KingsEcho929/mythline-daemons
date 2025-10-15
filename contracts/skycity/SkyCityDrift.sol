// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SkyCityDrift {
    address public steward;

    struct Drift {
        string city;
        string constellation;
        string pulseSignature;
    }

    mapping(string => Drift) public drifts;
    string[] public cityKeys;

    event DriftBound(string city, string constellation, string pulseSignature);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function bindDrift(string calldata city, string calldata constellation, string calldata pulseSignature) external onlySteward {
        drifts[city] = Drift(city, constellation, pulseSignature);
        cityKeys.push(city);
        emit DriftBound(city, constellation, pulseSignature);
    }

    function getDrift(string calldata city) external view returns (string memory, string memory, string memory) {
        Drift memory d = drifts[city];
        return (d.city, d.constellation, d.pulseSignature);
    }

    function totalDrifts() external view returns (uint256) {
        return cityKeys.length;
    }
}
