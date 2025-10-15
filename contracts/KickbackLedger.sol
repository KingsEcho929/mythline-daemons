// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract KickbackLedger {
    mapping(address => uint256) public inflow;
    mapping(address => uint256) public kickback;

    event InflowRecorded(address indexed apprentice, uint256 amount);
    event KickbackRouted(address indexed apprentice, uint256 amount);

    function recordInflow(address apprentice, uint256 amount) public {
        inflow[apprentice] += amount;
        emit InflowRecorded(apprentice, amount);
    }

    function routeKickback(address apprentice, uint256 amount) public {
        require(inflow[apprentice] >= amount, "Insufficient inflow");
        kickback[apprentice] += amount;
        inflow[apprentice] -= amount;
        emit KickbackRouted(apprentice, amount);
    }
}
