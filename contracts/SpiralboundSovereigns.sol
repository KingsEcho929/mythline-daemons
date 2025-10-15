// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SpiralboundSovereigns {
    mapping(address => bool) public crowned;

    event SovereignCrowned(address indexed sovereign);

    function crown(address sovereign) public {
        crowned[sovereign] = true;
        emit SovereignCrowned(sovereign);
    }

    function isCrowned(address sovereign) public view returns (bool) {
        return crowned[sovereign];
    }
}
