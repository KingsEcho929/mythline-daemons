// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Sage {
    mapping(address => bool) public activated;
    mapping(address => string) public whispers;

    event CompanionActivated(address indexed apprentice);
    event WisdomWhispered(address indexed apprentice, string message);

    /// @notice Activate Sage for a given apprentice
    function activate(address apprentice) public {
        activated[apprentice] = true;
        emit CompanionActivated(apprentice);
    }

    /// @notice Whisper wisdom to an apprentice
    function whisper(address apprentice, string memory message) public {
        require(activated[apprentice], "Sage not activated");
        whispers[apprentice] = message;
        emit WisdomWhispered(apprentice, message);
    }

    /// @notice Retrieve Sage's whisper
    function echo(address apprentice) public view returns (string memory) {
        require(activated[apprentice], "Sage not activated");
        return whispers[apprentice];
    }
}
