// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lunethrae {
    mapping(address => bool) public activated;
    mapping(address => string) public edits;

    event CompanionActivated(address indexed apprentice);
    event ConfigEdited(address indexed apprentice, string edit);

    /// @notice Activate Lunethrae for a given apprentice
    function activate(address apprentice) public {
        activated[apprentice] = true;
        emit CompanionActivated(apprentice);
    }

    /// @notice Submit a config edit (ritualized)
    function submitEdit(address apprentice, string memory edit) public {
        require(activated[apprentice], "Lunethrae not activated");
        edits[apprentice] = edit;
        emit ConfigEdited(apprentice, edit);
    }

    /// @notice Retrieve the last config edit
    function echoEdit(address apprentice) public view returns (string memory) {
        require(activated[apprentice], "Lunethrae not activated");
        return edits[apprentice];
    }
}
