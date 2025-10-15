// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OrbitalSanctum {
    address public daemon;

    event OrbitalPing(address indexed from, address indexed daemon);

    constructor(address _daemon) {
        daemon = _daemon;
    }

    function ping() external {
        emit OrbitalPing(msg.sender, daemon);
    }
}
