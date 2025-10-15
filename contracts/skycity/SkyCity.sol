// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SkyCity {
    address public steward;
    string public cityName;
    uint256 public altitude;

    event CityCrowned(string name, uint256 altitude);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor(string memory _name, uint256 _altitude) {
        steward = msg.sender;
        cityName = _name;
        altitude = _altitude;
        emit CityCrowned(_name, _altitude);
    }

    function updateAltitude(uint256 newAltitude) external onlySteward {
        altitude = newAltitude;
    }
}
