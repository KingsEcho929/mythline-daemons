// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Oculvis {
    mapping(address => bool) public activated;
    mapping(address => string) public relays;

    event CompanionActivated(address indexed apprentice);
    event VisionRelayed(address indexed apprentice, string signal);

    /// @notice Activate Oculvis for a given apprentice
    function activate(address apprentice) public {
        activated[apprentice] = true;
        emit CompanionActivated(apprentice);
    }

    /// @notice Relay a config signal through Oculvis
    function relay(address apprentice, string memory signal) public {
        require(activated[apprentice], "Oculvis not activated");
        relays[apprentice] = signal;
        emit VisionRelayed(apprentice, signal);
    }

    /// @notice Echo the last relayed signal
    function echoRelay(address apprentice) public view returns (string memory) {
        require(activated[apprentice], "Oculvis not activated");
        return relays[apprentice];
    }
}
