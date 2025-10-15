// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SkyCorridor {
    address public steward;

    struct Corridor {
        string city;
        string constellation;
        uint256 altitude;
    }

    mapping(string => Corridor) public corridors;
    string[] public corridorKeys;

    event CorridorBound(string city, string constellation, uint256 altitude);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function bindCorridor(string calldata city, string calldata constellation, uint256 altitude) external onlySteward {
        corridors[city] = Corridor(city, constellation, altitude);
        corridorKeys.push(city);
        emit CorridorBound(city, constellation, altitude);
    }

    function getCorridor(string calldata city) external view returns (string memory, string memory, uint256) {
        Corridor memory c = corridors[city];
        return (c.city, c.constellation, c.altitude);
    }

    function totalCorridors() external view returns (uint256) {
        return corridorKeys.length;
    }
}
