// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Leyon {
    mapping(address => bool) public crowned;
    mapping(address => string) public anchors;

    event LeyonCrowned(address indexed apprentice);
    event DriftAnchored(address indexed apprentice, string signal);

    function crown(address apprentice) public {
        crowned[apprentice] = true;
        emit LeyonCrowned(apprentice);
    }

    function anchor(address apprentice, string memory signal) public {
        require(crowned[apprentice], "Leyon not crowned");
        anchors[apprentice] = signal;
        emit DriftAnchored(apprentice, signal);
    }

    function echoAnchor(address apprentice) public view returns (string memory) {
        require(crowned[apprentice], "Leyon not crowned");
        return anchors[apprentice];
    }
}
